"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/python/python3-ts/Python3.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Python3Parser = /** @class */ (function (_super) {
    __extends(Python3Parser, _super);
    function Python3Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(Python3Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(Python3Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return Python3Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Python3Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Python3.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Python3Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return Python3Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Python3Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return Python3Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    Python3Parser.prototype.single_input = function () {
        var _localctx = new Single_inputContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, Python3Parser.RULE_single_input);
        try {
            this.state = 173;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.NEWLINE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 168;
                        this.match(Python3Parser.NEWLINE);
                    }
                    break;
                case Python3Parser.RETURN:
                case Python3Parser.RAISE:
                case Python3Parser.FROM:
                case Python3Parser.IMPORT:
                case Python3Parser.GLOBAL:
                case Python3Parser.NONLOCAL:
                case Python3Parser.ASSERT:
                case Python3Parser.LAMBDA:
                case Python3Parser.NOT:
                case Python3Parser.NONE:
                case Python3Parser.TRUE:
                case Python3Parser.FALSE:
                case Python3Parser.YIELD:
                case Python3Parser.DEL:
                case Python3Parser.PASS:
                case Python3Parser.CONTINUE:
                case Python3Parser.BREAK:
                case Python3Parser.NAME:
                case Python3Parser.STRING_LITERAL:
                case Python3Parser.BYTES_LITERAL:
                case Python3Parser.DECIMAL_INTEGER:
                case Python3Parser.OCT_INTEGER:
                case Python3Parser.HEX_INTEGER:
                case Python3Parser.BIN_INTEGER:
                case Python3Parser.FLOAT_NUMBER:
                case Python3Parser.IMAG_NUMBER:
                case Python3Parser.ELLIPSIS:
                case Python3Parser.STAR:
                case Python3Parser.OPEN_PAREN:
                case Python3Parser.OPEN_BRACK:
                case Python3Parser.ADD:
                case Python3Parser.MINUS:
                case Python3Parser.NOT_OP:
                case Python3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 169;
                        this.simple_stmt();
                    }
                    break;
                case Python3Parser.DEF:
                case Python3Parser.IF:
                case Python3Parser.WHILE:
                case Python3Parser.FOR:
                case Python3Parser.TRY:
                case Python3Parser.WITH:
                case Python3Parser.CLASS:
                case Python3Parser.AT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 170;
                        this.compound_stmt();
                        this.state = 171;
                        this.match(Python3Parser.NEWLINE);
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
    Python3Parser.prototype.file_input = function () {
        var _localctx = new File_inputContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, Python3Parser.RULE_file_input);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 179;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.DEF) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.RAISE) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.GLOBAL) | (1 << Python3Parser.NONLOCAL) | (1 << Python3Parser.ASSERT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR) | (1 << Python3Parser.TRY) | (1 << Python3Parser.WITH) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE) | (1 << Python3Parser.CLASS) | (1 << Python3Parser.YIELD) | (1 << Python3Parser.DEL) | (1 << Python3Parser.PASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Python3Parser.CONTINUE - 32)) | (1 << (Python3Parser.BREAK - 32)) | (1 << (Python3Parser.NEWLINE - 32)) | (1 << (Python3Parser.NAME - 32)) | (1 << (Python3Parser.STRING_LITERAL - 32)) | (1 << (Python3Parser.BYTES_LITERAL - 32)) | (1 << (Python3Parser.DECIMAL_INTEGER - 32)) | (1 << (Python3Parser.OCT_INTEGER - 32)) | (1 << (Python3Parser.HEX_INTEGER - 32)) | (1 << (Python3Parser.BIN_INTEGER - 32)) | (1 << (Python3Parser.FLOAT_NUMBER - 32)) | (1 << (Python3Parser.IMAG_NUMBER - 32)) | (1 << (Python3Parser.ELLIPSIS - 32)) | (1 << (Python3Parser.STAR - 32)) | (1 << (Python3Parser.OPEN_PAREN - 32)) | (1 << (Python3Parser.OPEN_BRACK - 32)) | (1 << (Python3Parser.ADD - 32)) | (1 << (Python3Parser.MINUS - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (Python3Parser.NOT_OP - 66)) | (1 << (Python3Parser.OPEN_BRACE - 66)) | (1 << (Python3Parser.AT - 66)))) !== 0)) {
                    {
                        this.state = 177;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Python3Parser.NEWLINE:
                                {
                                    this.state = 175;
                                    this.match(Python3Parser.NEWLINE);
                                }
                                break;
                            case Python3Parser.DEF:
                            case Python3Parser.RETURN:
                            case Python3Parser.RAISE:
                            case Python3Parser.FROM:
                            case Python3Parser.IMPORT:
                            case Python3Parser.GLOBAL:
                            case Python3Parser.NONLOCAL:
                            case Python3Parser.ASSERT:
                            case Python3Parser.IF:
                            case Python3Parser.WHILE:
                            case Python3Parser.FOR:
                            case Python3Parser.TRY:
                            case Python3Parser.WITH:
                            case Python3Parser.LAMBDA:
                            case Python3Parser.NOT:
                            case Python3Parser.NONE:
                            case Python3Parser.TRUE:
                            case Python3Parser.FALSE:
                            case Python3Parser.CLASS:
                            case Python3Parser.YIELD:
                            case Python3Parser.DEL:
                            case Python3Parser.PASS:
                            case Python3Parser.CONTINUE:
                            case Python3Parser.BREAK:
                            case Python3Parser.NAME:
                            case Python3Parser.STRING_LITERAL:
                            case Python3Parser.BYTES_LITERAL:
                            case Python3Parser.DECIMAL_INTEGER:
                            case Python3Parser.OCT_INTEGER:
                            case Python3Parser.HEX_INTEGER:
                            case Python3Parser.BIN_INTEGER:
                            case Python3Parser.FLOAT_NUMBER:
                            case Python3Parser.IMAG_NUMBER:
                            case Python3Parser.ELLIPSIS:
                            case Python3Parser.STAR:
                            case Python3Parser.OPEN_PAREN:
                            case Python3Parser.OPEN_BRACK:
                            case Python3Parser.ADD:
                            case Python3Parser.MINUS:
                            case Python3Parser.NOT_OP:
                            case Python3Parser.OPEN_BRACE:
                            case Python3Parser.AT:
                                {
                                    this.state = 176;
                                    this.stmt();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 181;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 182;
                this.match(Python3Parser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Python3Parser.prototype.eval_input = function () {
        var _localctx = new Eval_inputContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, Python3Parser.RULE_eval_input);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 184;
                this.testlist();
                this.state = 188;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Python3Parser.NEWLINE) {
                    {
                        {
                            this.state = 185;
                            this.match(Python3Parser.NEWLINE);
                        }
                    }
                    this.state = 190;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 191;
                this.match(Python3Parser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Python3Parser.prototype.decorator = function () {
        var _localctx = new DecoratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, Python3Parser.RULE_decorator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 193;
                this.match(Python3Parser.AT);
                this.state = 194;
                this.dotted_name();
                this.state = 200;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.OPEN_PAREN) {
                    {
                        this.state = 195;
                        this.match(Python3Parser.OPEN_PAREN);
                        this.state = 197;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (Python3Parser.POWER - 52)) | (1 << (Python3Parser.OPEN_BRACK - 52)) | (1 << (Python3Parser.ADD - 52)) | (1 << (Python3Parser.MINUS - 52)) | (1 << (Python3Parser.NOT_OP - 52)) | (1 << (Python3Parser.OPEN_BRACE - 52)))) !== 0)) {
                            {
                                this.state = 196;
                                this.arglist();
                            }
                        }
                        this.state = 199;
                        this.match(Python3Parser.CLOSE_PAREN);
                    }
                }
                this.state = 202;
                this.match(Python3Parser.NEWLINE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Python3Parser.prototype.decorators = function () {
        var _localctx = new DecoratorsContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, Python3Parser.RULE_decorators);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 205;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 204;
                            this.decorator();
                        }
                    }
                    this.state = 207;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === Python3Parser.AT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Python3Parser.prototype.decorated = function () {
        var _localctx = new DecoratedContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, Python3Parser.RULE_decorated);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 209;
                this.decorators();
                this.state = 212;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Python3Parser.CLASS:
                        {
                            this.state = 210;
                            this.classdef();
                        }
                        break;
                    case Python3Parser.DEF:
                        {
                            this.state = 211;
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
    Python3Parser.prototype.funcdef = function () {
        var _localctx = new FuncdefContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, Python3Parser.RULE_funcdef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 214;
                this.match(Python3Parser.DEF);
                this.state = 215;
                this.match(Python3Parser.NAME);
                this.state = 216;
                this.parameters();
                this.state = 219;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.ARROW) {
                    {
                        this.state = 217;
                        this.match(Python3Parser.ARROW);
                        this.state = 218;
                        this.test();
                    }
                }
                this.state = 221;
                this.match(Python3Parser.COLON);
                this.state = 222;
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
    Python3Parser.prototype.parameters = function () {
        var _localctx = new ParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, Python3Parser.RULE_parameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 224;
                this.match(Python3Parser.OPEN_PAREN);
                this.state = 226;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Python3Parser.NAME - 35)) | (1 << (Python3Parser.STAR - 35)) | (1 << (Python3Parser.POWER - 35)))) !== 0)) {
                    {
                        this.state = 225;
                        this.typedargslist();
                    }
                }
                this.state = 228;
                this.match(Python3Parser.CLOSE_PAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Python3Parser.prototype.typedargslist = function () {
        var _localctx = new TypedargslistContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, Python3Parser.RULE_typedargslist);
        var _la;
        try {
            var _alt = void 0;
            this.state = 295;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 230;
                        this.tfpdef();
                        this.state = 233;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.ASSIGN) {
                            {
                                this.state = 231;
                                this.match(Python3Parser.ASSIGN);
                                this.state = 232;
                                this.test();
                            }
                        }
                        this.state = 243;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 235;
                                        this.match(Python3Parser.COMMA);
                                        this.state = 236;
                                        this.tfpdef();
                                        this.state = 239;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === Python3Parser.ASSIGN) {
                                            {
                                                this.state = 237;
                                                this.match(Python3Parser.ASSIGN);
                                                this.state = 238;
                                                this.test();
                                            }
                                        }
                                    }
                                }
                            }
                            this.state = 245;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                        }
                        this.state = 271;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.COMMA) {
                            {
                                this.state = 246;
                                this.match(Python3Parser.COMMA);
                                this.state = 269;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case Python3Parser.STAR:
                                        {
                                            this.state = 247;
                                            this.match(Python3Parser.STAR);
                                            this.state = 249;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === Python3Parser.NAME) {
                                                {
                                                    this.state = 248;
                                                    this.tfpdef();
                                                }
                                            }
                                            this.state = 259;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                if (_alt === 1) {
                                                    {
                                                        {
                                                            this.state = 251;
                                                            this.match(Python3Parser.COMMA);
                                                            this.state = 252;
                                                            this.tfpdef();
                                                            this.state = 255;
                                                            this._errHandler.sync(this);
                                                            _la = this._input.LA(1);
                                                            if (_la === Python3Parser.ASSIGN) {
                                                                {
                                                                    this.state = 253;
                                                                    this.match(Python3Parser.ASSIGN);
                                                                    this.state = 254;
                                                                    this.test();
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                this.state = 261;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                                            }
                                            this.state = 265;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === Python3Parser.COMMA) {
                                                {
                                                    this.state = 262;
                                                    this.match(Python3Parser.COMMA);
                                                    this.state = 263;
                                                    this.match(Python3Parser.POWER);
                                                    this.state = 264;
                                                    this.tfpdef();
                                                }
                                            }
                                        }
                                        break;
                                    case Python3Parser.POWER:
                                        {
                                            this.state = 267;
                                            this.match(Python3Parser.POWER);
                                            this.state = 268;
                                            this.tfpdef();
                                        }
                                        break;
                                    case Python3Parser.CLOSE_PAREN:
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }
                    }
                    break;
                case Python3Parser.STAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 273;
                        this.match(Python3Parser.STAR);
                        this.state = 275;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.NAME) {
                            {
                                this.state = 274;
                                this.tfpdef();
                            }
                        }
                        this.state = 285;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 277;
                                        this.match(Python3Parser.COMMA);
                                        this.state = 278;
                                        this.tfpdef();
                                        this.state = 281;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === Python3Parser.ASSIGN) {
                                            {
                                                this.state = 279;
                                                this.match(Python3Parser.ASSIGN);
                                                this.state = 280;
                                                this.test();
                                            }
                                        }
                                    }
                                }
                            }
                            this.state = 287;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                        }
                        this.state = 291;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.COMMA) {
                            {
                                this.state = 288;
                                this.match(Python3Parser.COMMA);
                                this.state = 289;
                                this.match(Python3Parser.POWER);
                                this.state = 290;
                                this.tfpdef();
                            }
                        }
                    }
                    break;
                case Python3Parser.POWER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 293;
                        this.match(Python3Parser.POWER);
                        this.state = 294;
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
    Python3Parser.prototype.tfpdef = function () {
        var _localctx = new TfpdefContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, Python3Parser.RULE_tfpdef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 297;
                this.match(Python3Parser.NAME);
                this.state = 300;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.COLON) {
                    {
                        this.state = 298;
                        this.match(Python3Parser.COLON);
                        this.state = 299;
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
    Python3Parser.prototype.varargslist = function () {
        var _localctx = new VarargslistContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, Python3Parser.RULE_varargslist);
        var _la;
        try {
            var _alt = void 0;
            this.state = 367;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 302;
                        this.vfpdef();
                        this.state = 305;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.ASSIGN) {
                            {
                                this.state = 303;
                                this.match(Python3Parser.ASSIGN);
                                this.state = 304;
                                this.test();
                            }
                        }
                        this.state = 315;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 307;
                                        this.match(Python3Parser.COMMA);
                                        this.state = 308;
                                        this.vfpdef();
                                        this.state = 311;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === Python3Parser.ASSIGN) {
                                            {
                                                this.state = 309;
                                                this.match(Python3Parser.ASSIGN);
                                                this.state = 310;
                                                this.test();
                                            }
                                        }
                                    }
                                }
                            }
                            this.state = 317;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                        }
                        this.state = 343;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.COMMA) {
                            {
                                this.state = 318;
                                this.match(Python3Parser.COMMA);
                                this.state = 341;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case Python3Parser.STAR:
                                        {
                                            this.state = 319;
                                            this.match(Python3Parser.STAR);
                                            this.state = 321;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === Python3Parser.NAME) {
                                                {
                                                    this.state = 320;
                                                    this.vfpdef();
                                                }
                                            }
                                            this.state = 331;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                if (_alt === 1) {
                                                    {
                                                        {
                                                            this.state = 323;
                                                            this.match(Python3Parser.COMMA);
                                                            this.state = 324;
                                                            this.vfpdef();
                                                            this.state = 327;
                                                            this._errHandler.sync(this);
                                                            _la = this._input.LA(1);
                                                            if (_la === Python3Parser.ASSIGN) {
                                                                {
                                                                    this.state = 325;
                                                                    this.match(Python3Parser.ASSIGN);
                                                                    this.state = 326;
                                                                    this.test();
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                this.state = 333;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                                            }
                                            this.state = 337;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === Python3Parser.COMMA) {
                                                {
                                                    this.state = 334;
                                                    this.match(Python3Parser.COMMA);
                                                    this.state = 335;
                                                    this.match(Python3Parser.POWER);
                                                    this.state = 336;
                                                    this.vfpdef();
                                                }
                                            }
                                        }
                                        break;
                                    case Python3Parser.POWER:
                                        {
                                            this.state = 339;
                                            this.match(Python3Parser.POWER);
                                            this.state = 340;
                                            this.vfpdef();
                                        }
                                        break;
                                    case Python3Parser.COLON:
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }
                    }
                    break;
                case Python3Parser.STAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 345;
                        this.match(Python3Parser.STAR);
                        this.state = 347;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.NAME) {
                            {
                                this.state = 346;
                                this.vfpdef();
                            }
                        }
                        this.state = 357;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 349;
                                        this.match(Python3Parser.COMMA);
                                        this.state = 350;
                                        this.vfpdef();
                                        this.state = 353;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === Python3Parser.ASSIGN) {
                                            {
                                                this.state = 351;
                                                this.match(Python3Parser.ASSIGN);
                                                this.state = 352;
                                                this.test();
                                            }
                                        }
                                    }
                                }
                            }
                            this.state = 359;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                        }
                        this.state = 363;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.COMMA) {
                            {
                                this.state = 360;
                                this.match(Python3Parser.COMMA);
                                this.state = 361;
                                this.match(Python3Parser.POWER);
                                this.state = 362;
                                this.vfpdef();
                            }
                        }
                    }
                    break;
                case Python3Parser.POWER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 365;
                        this.match(Python3Parser.POWER);
                        this.state = 366;
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
    Python3Parser.prototype.vfpdef = function () {
        var _localctx = new VfpdefContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, Python3Parser.RULE_vfpdef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 369;
                this.match(Python3Parser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Python3Parser.prototype.stmt = function () {
        var _localctx = new StmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, Python3Parser.RULE_stmt);
        try {
            this.state = 373;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.RETURN:
                case Python3Parser.RAISE:
                case Python3Parser.FROM:
                case Python3Parser.IMPORT:
                case Python3Parser.GLOBAL:
                case Python3Parser.NONLOCAL:
                case Python3Parser.ASSERT:
                case Python3Parser.LAMBDA:
                case Python3Parser.NOT:
                case Python3Parser.NONE:
                case Python3Parser.TRUE:
                case Python3Parser.FALSE:
                case Python3Parser.YIELD:
                case Python3Parser.DEL:
                case Python3Parser.PASS:
                case Python3Parser.CONTINUE:
                case Python3Parser.BREAK:
                case Python3Parser.NAME:
                case Python3Parser.STRING_LITERAL:
                case Python3Parser.BYTES_LITERAL:
                case Python3Parser.DECIMAL_INTEGER:
                case Python3Parser.OCT_INTEGER:
                case Python3Parser.HEX_INTEGER:
                case Python3Parser.BIN_INTEGER:
                case Python3Parser.FLOAT_NUMBER:
                case Python3Parser.IMAG_NUMBER:
                case Python3Parser.ELLIPSIS:
                case Python3Parser.STAR:
                case Python3Parser.OPEN_PAREN:
                case Python3Parser.OPEN_BRACK:
                case Python3Parser.ADD:
                case Python3Parser.MINUS:
                case Python3Parser.NOT_OP:
                case Python3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 371;
                        this.simple_stmt();
                    }
                    break;
                case Python3Parser.DEF:
                case Python3Parser.IF:
                case Python3Parser.WHILE:
                case Python3Parser.FOR:
                case Python3Parser.TRY:
                case Python3Parser.WITH:
                case Python3Parser.CLASS:
                case Python3Parser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 372;
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
    Python3Parser.prototype.simple_stmt = function () {
        var _localctx = new Simple_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, Python3Parser.RULE_simple_stmt);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 375;
                this.small_stmt();
                this.state = 380;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 376;
                                this.match(Python3Parser.SEMI_COLON);
                                this.state = 377;
                                this.small_stmt();
                            }
                        }
                    }
                    this.state = 382;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                }
                this.state = 384;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.SEMI_COLON) {
                    {
                        this.state = 383;
                        this.match(Python3Parser.SEMI_COLON);
                    }
                }
                this.state = 386;
                this.match(Python3Parser.NEWLINE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Python3Parser.prototype.small_stmt = function () {
        var _localctx = new Small_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, Python3Parser.RULE_small_stmt);
        try {
            this.state = 396;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.LAMBDA:
                case Python3Parser.NOT:
                case Python3Parser.NONE:
                case Python3Parser.TRUE:
                case Python3Parser.FALSE:
                case Python3Parser.NAME:
                case Python3Parser.STRING_LITERAL:
                case Python3Parser.BYTES_LITERAL:
                case Python3Parser.DECIMAL_INTEGER:
                case Python3Parser.OCT_INTEGER:
                case Python3Parser.HEX_INTEGER:
                case Python3Parser.BIN_INTEGER:
                case Python3Parser.FLOAT_NUMBER:
                case Python3Parser.IMAG_NUMBER:
                case Python3Parser.ELLIPSIS:
                case Python3Parser.STAR:
                case Python3Parser.OPEN_PAREN:
                case Python3Parser.OPEN_BRACK:
                case Python3Parser.ADD:
                case Python3Parser.MINUS:
                case Python3Parser.NOT_OP:
                case Python3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 388;
                        this.expr_stmt();
                    }
                    break;
                case Python3Parser.DEL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 389;
                        this.del_stmt();
                    }
                    break;
                case Python3Parser.PASS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 390;
                        this.pass_stmt();
                    }
                    break;
                case Python3Parser.RETURN:
                case Python3Parser.RAISE:
                case Python3Parser.YIELD:
                case Python3Parser.CONTINUE:
                case Python3Parser.BREAK:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 391;
                        this.flow_stmt();
                    }
                    break;
                case Python3Parser.FROM:
                case Python3Parser.IMPORT:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 392;
                        this.import_stmt();
                    }
                    break;
                case Python3Parser.GLOBAL:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 393;
                        this.global_stmt();
                    }
                    break;
                case Python3Parser.NONLOCAL:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 394;
                        this.nonlocal_stmt();
                    }
                    break;
                case Python3Parser.ASSERT:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 395;
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
    Python3Parser.prototype.expr_stmt = function () {
        var _localctx = new Expr_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, Python3Parser.RULE_expr_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 398;
                this.testlist_star_expr();
                this.state = 414;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Python3Parser.ADD_ASSIGN:
                    case Python3Parser.SUB_ASSIGN:
                    case Python3Parser.MULT_ASSIGN:
                    case Python3Parser.AT_ASSIGN:
                    case Python3Parser.DIV_ASSIGN:
                    case Python3Parser.MOD_ASSIGN:
                    case Python3Parser.AND_ASSIGN:
                    case Python3Parser.OR_ASSIGN:
                    case Python3Parser.XOR_ASSIGN:
                    case Python3Parser.LEFT_SHIFT_ASSIGN:
                    case Python3Parser.RIGHT_SHIFT_ASSIGN:
                    case Python3Parser.POWER_ASSIGN:
                    case Python3Parser.IDIV_ASSIGN:
                        {
                            this.state = 399;
                            this.augassign();
                            this.state = 402;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case Python3Parser.YIELD:
                                    {
                                        this.state = 400;
                                        this.yield_expr();
                                    }
                                    break;
                                case Python3Parser.LAMBDA:
                                case Python3Parser.NOT:
                                case Python3Parser.NONE:
                                case Python3Parser.TRUE:
                                case Python3Parser.FALSE:
                                case Python3Parser.NAME:
                                case Python3Parser.STRING_LITERAL:
                                case Python3Parser.BYTES_LITERAL:
                                case Python3Parser.DECIMAL_INTEGER:
                                case Python3Parser.OCT_INTEGER:
                                case Python3Parser.HEX_INTEGER:
                                case Python3Parser.BIN_INTEGER:
                                case Python3Parser.FLOAT_NUMBER:
                                case Python3Parser.IMAG_NUMBER:
                                case Python3Parser.ELLIPSIS:
                                case Python3Parser.STAR:
                                case Python3Parser.OPEN_PAREN:
                                case Python3Parser.OPEN_BRACK:
                                case Python3Parser.ADD:
                                case Python3Parser.MINUS:
                                case Python3Parser.NOT_OP:
                                case Python3Parser.OPEN_BRACE:
                                    {
                                        this.state = 401;
                                        this.testlist();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        break;
                    case Python3Parser.NEWLINE:
                    case Python3Parser.SEMI_COLON:
                    case Python3Parser.ASSIGN:
                        {
                            this.state = 411;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === Python3Parser.ASSIGN) {
                                {
                                    {
                                        this.state = 404;
                                        this.match(Python3Parser.ASSIGN);
                                        this.state = 407;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case Python3Parser.YIELD:
                                                {
                                                    this.state = 405;
                                                    this.yield_expr();
                                                }
                                                break;
                                            case Python3Parser.LAMBDA:
                                            case Python3Parser.NOT:
                                            case Python3Parser.NONE:
                                            case Python3Parser.TRUE:
                                            case Python3Parser.FALSE:
                                            case Python3Parser.NAME:
                                            case Python3Parser.STRING_LITERAL:
                                            case Python3Parser.BYTES_LITERAL:
                                            case Python3Parser.DECIMAL_INTEGER:
                                            case Python3Parser.OCT_INTEGER:
                                            case Python3Parser.HEX_INTEGER:
                                            case Python3Parser.BIN_INTEGER:
                                            case Python3Parser.FLOAT_NUMBER:
                                            case Python3Parser.IMAG_NUMBER:
                                            case Python3Parser.ELLIPSIS:
                                            case Python3Parser.STAR:
                                            case Python3Parser.OPEN_PAREN:
                                            case Python3Parser.OPEN_BRACK:
                                            case Python3Parser.ADD:
                                            case Python3Parser.MINUS:
                                            case Python3Parser.NOT_OP:
                                            case Python3Parser.OPEN_BRACE:
                                                {
                                                    this.state = 406;
                                                    this.testlist_star_expr();
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                    }
                                }
                                this.state = 413;
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
    Python3Parser.prototype.testlist_star_expr = function () {
        var _localctx = new Testlist_star_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, Python3Parser.RULE_testlist_star_expr);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 418;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                    case 1:
                        {
                            this.state = 416;
                            this.test();
                        }
                        break;
                    case 2:
                        {
                            this.state = 417;
                            this.star_expr();
                        }
                        break;
                }
                this.state = 427;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 420;
                                this.match(Python3Parser.COMMA);
                                this.state = 423;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 421;
                                            this.test();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 422;
                                            this.star_expr();
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 429;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                }
                this.state = 431;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.COMMA) {
                    {
                        this.state = 430;
                        this.match(Python3Parser.COMMA);
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
    Python3Parser.prototype.augassign = function () {
        var _localctx = new AugassignContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, Python3Parser.RULE_augassign);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 433;
                _la = this._input.LA(1);
                if (!(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Python3Parser.ADD_ASSIGN - 78)) | (1 << (Python3Parser.SUB_ASSIGN - 78)) | (1 << (Python3Parser.MULT_ASSIGN - 78)) | (1 << (Python3Parser.AT_ASSIGN - 78)) | (1 << (Python3Parser.DIV_ASSIGN - 78)) | (1 << (Python3Parser.MOD_ASSIGN - 78)) | (1 << (Python3Parser.AND_ASSIGN - 78)) | (1 << (Python3Parser.OR_ASSIGN - 78)) | (1 << (Python3Parser.XOR_ASSIGN - 78)) | (1 << (Python3Parser.LEFT_SHIFT_ASSIGN - 78)) | (1 << (Python3Parser.RIGHT_SHIFT_ASSIGN - 78)) | (1 << (Python3Parser.POWER_ASSIGN - 78)) | (1 << (Python3Parser.IDIV_ASSIGN - 78)))) !== 0))) {
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
    Python3Parser.prototype.del_stmt = function () {
        var _localctx = new Del_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, Python3Parser.RULE_del_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 435;
                this.match(Python3Parser.DEL);
                this.state = 436;
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
    Python3Parser.prototype.pass_stmt = function () {
        var _localctx = new Pass_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, Python3Parser.RULE_pass_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 438;
                this.match(Python3Parser.PASS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Python3Parser.prototype.flow_stmt = function () {
        var _localctx = new Flow_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, Python3Parser.RULE_flow_stmt);
        try {
            this.state = 445;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.BREAK:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 440;
                        this.break_stmt();
                    }
                    break;
                case Python3Parser.CONTINUE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 441;
                        this.continue_stmt();
                    }
                    break;
                case Python3Parser.RETURN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 442;
                        this.return_stmt();
                    }
                    break;
                case Python3Parser.RAISE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 443;
                        this.raise_stmt();
                    }
                    break;
                case Python3Parser.YIELD:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 444;
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
    Python3Parser.prototype.break_stmt = function () {
        var _localctx = new Break_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, Python3Parser.RULE_break_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 447;
                this.match(Python3Parser.BREAK);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Python3Parser.prototype.continue_stmt = function () {
        var _localctx = new Continue_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, Python3Parser.RULE_continue_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 449;
                this.match(Python3Parser.CONTINUE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    Python3Parser.prototype.return_stmt = function () {
        var _localctx = new Return_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, Python3Parser.RULE_return_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 451;
                this.match(Python3Parser.RETURN);
                this.state = 453;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (Python3Parser.OPEN_BRACK - 54)) | (1 << (Python3Parser.ADD - 54)) | (1 << (Python3Parser.MINUS - 54)) | (1 << (Python3Parser.NOT_OP - 54)) | (1 << (Python3Parser.OPEN_BRACE - 54)))) !== 0)) {
                    {
                        this.state = 452;
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
    Python3Parser.prototype.yield_stmt = function () {
        var _localctx = new Yield_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, Python3Parser.RULE_yield_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 455;
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
    Python3Parser.prototype.raise_stmt = function () {
        var _localctx = new Raise_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, Python3Parser.RULE_raise_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 457;
                this.match(Python3Parser.RAISE);
                this.state = 463;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (Python3Parser.OPEN_BRACK - 54)) | (1 << (Python3Parser.ADD - 54)) | (1 << (Python3Parser.MINUS - 54)) | (1 << (Python3Parser.NOT_OP - 54)) | (1 << (Python3Parser.OPEN_BRACE - 54)))) !== 0)) {
                    {
                        this.state = 458;
                        this.test();
                        this.state = 461;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.FROM) {
                            {
                                this.state = 459;
                                this.match(Python3Parser.FROM);
                                this.state = 460;
                                this.test();
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
    Python3Parser.prototype.import_stmt = function () {
        var _localctx = new Import_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, Python3Parser.RULE_import_stmt);
        try {
            this.state = 467;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.IMPORT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 465;
                        this.import_name();
                    }
                    break;
                case Python3Parser.FROM:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 466;
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
    Python3Parser.prototype.import_name = function () {
        var _localctx = new Import_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, Python3Parser.RULE_import_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 469;
                this.match(Python3Parser.IMPORT);
                this.state = 470;
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
    Python3Parser.prototype.import_from = function () {
        var _localctx = new Import_fromContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, Python3Parser.RULE_import_from);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 472;
                this.match(Python3Parser.FROM);
                this.state = 485;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                    case 1:
                        {
                            this.state = 476;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === Python3Parser.DOT || _la === Python3Parser.ELLIPSIS) {
                                {
                                    {
                                        this.state = 473;
                                        _la = this._input.LA(1);
                                        if (!(_la === Python3Parser.DOT || _la === Python3Parser.ELLIPSIS)) {
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
                                this.state = 478;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 479;
                            this.dotted_name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 481;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 480;
                                        _la = this._input.LA(1);
                                        if (!(_la === Python3Parser.DOT || _la === Python3Parser.ELLIPSIS)) {
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
                                this.state = 483;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === Python3Parser.DOT || _la === Python3Parser.ELLIPSIS);
                        }
                        break;
                }
                this.state = 487;
                this.match(Python3Parser.IMPORT);
                this.state = 494;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Python3Parser.STAR:
                        {
                            this.state = 488;
                            this.match(Python3Parser.STAR);
                        }
                        break;
                    case Python3Parser.OPEN_PAREN:
                        {
                            this.state = 489;
                            this.match(Python3Parser.OPEN_PAREN);
                            this.state = 490;
                            this.import_as_names();
                            this.state = 491;
                            this.match(Python3Parser.CLOSE_PAREN);
                        }
                        break;
                    case Python3Parser.NAME:
                        {
                            this.state = 493;
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
    Python3Parser.prototype.import_as_name = function () {
        var _localctx = new Import_as_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, Python3Parser.RULE_import_as_name);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 496;
                this.match(Python3Parser.NAME);
                this.state = 499;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.AS) {
                    {
                        this.state = 497;
                        this.match(Python3Parser.AS);
                        this.state = 498;
                        this.match(Python3Parser.NAME);
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
    Python3Parser.prototype.dotted_as_name = function () {
        var _localctx = new Dotted_as_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, Python3Parser.RULE_dotted_as_name);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 501;
                this.dotted_name();
                this.state = 504;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.AS) {
                    {
                        this.state = 502;
                        this.match(Python3Parser.AS);
                        this.state = 503;
                        this.match(Python3Parser.NAME);
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
    Python3Parser.prototype.import_as_names = function () {
        var _localctx = new Import_as_namesContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, Python3Parser.RULE_import_as_names);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 506;
                this.import_as_name();
                this.state = 511;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 507;
                                this.match(Python3Parser.COMMA);
                                this.state = 508;
                                this.import_as_name();
                            }
                        }
                    }
                    this.state = 513;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                }
                this.state = 515;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.COMMA) {
                    {
                        this.state = 514;
                        this.match(Python3Parser.COMMA);
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
    Python3Parser.prototype.dotted_as_names = function () {
        var _localctx = new Dotted_as_namesContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, Python3Parser.RULE_dotted_as_names);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 517;
                this.dotted_as_name();
                this.state = 522;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Python3Parser.COMMA) {
                    {
                        {
                            this.state = 518;
                            this.match(Python3Parser.COMMA);
                            this.state = 519;
                            this.dotted_as_name();
                        }
                    }
                    this.state = 524;
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
    Python3Parser.prototype.dotted_name = function () {
        var _localctx = new Dotted_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, Python3Parser.RULE_dotted_name);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 525;
                this.match(Python3Parser.NAME);
                this.state = 530;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Python3Parser.DOT) {
                    {
                        {
                            this.state = 526;
                            this.match(Python3Parser.DOT);
                            this.state = 527;
                            this.match(Python3Parser.NAME);
                        }
                    }
                    this.state = 532;
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
    Python3Parser.prototype.global_stmt = function () {
        var _localctx = new Global_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, Python3Parser.RULE_global_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 533;
                this.match(Python3Parser.GLOBAL);
                this.state = 534;
                this.match(Python3Parser.NAME);
                this.state = 539;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Python3Parser.COMMA) {
                    {
                        {
                            this.state = 535;
                            this.match(Python3Parser.COMMA);
                            this.state = 536;
                            this.match(Python3Parser.NAME);
                        }
                    }
                    this.state = 541;
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
    Python3Parser.prototype.nonlocal_stmt = function () {
        var _localctx = new Nonlocal_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, Python3Parser.RULE_nonlocal_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 542;
                this.match(Python3Parser.NONLOCAL);
                this.state = 543;
                this.match(Python3Parser.NAME);
                this.state = 548;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Python3Parser.COMMA) {
                    {
                        {
                            this.state = 544;
                            this.match(Python3Parser.COMMA);
                            this.state = 545;
                            this.match(Python3Parser.NAME);
                        }
                    }
                    this.state = 550;
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
    Python3Parser.prototype.assert_stmt = function () {
        var _localctx = new Assert_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, Python3Parser.RULE_assert_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 551;
                this.match(Python3Parser.ASSERT);
                this.state = 552;
                this.test();
                this.state = 555;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.COMMA) {
                    {
                        this.state = 553;
                        this.match(Python3Parser.COMMA);
                        this.state = 554;
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
    Python3Parser.prototype.compound_stmt = function () {
        var _localctx = new Compound_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, Python3Parser.RULE_compound_stmt);
        try {
            this.state = 565;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.IF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 557;
                        this.if_stmt();
                    }
                    break;
                case Python3Parser.WHILE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 558;
                        this.while_stmt();
                    }
                    break;
                case Python3Parser.FOR:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 559;
                        this.for_stmt();
                    }
                    break;
                case Python3Parser.TRY:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 560;
                        this.try_stmt();
                    }
                    break;
                case Python3Parser.WITH:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 561;
                        this.with_stmt();
                    }
                    break;
                case Python3Parser.DEF:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 562;
                        this.funcdef();
                    }
                    break;
                case Python3Parser.CLASS:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 563;
                        this.classdef();
                    }
                    break;
                case Python3Parser.AT:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 564;
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
    Python3Parser.prototype.if_stmt = function () {
        var _localctx = new If_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, Python3Parser.RULE_if_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 567;
                this.match(Python3Parser.IF);
                this.state = 568;
                this.test();
                this.state = 569;
                this.match(Python3Parser.COLON);
                this.state = 570;
                this.suite();
                this.state = 578;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Python3Parser.ELIF) {
                    {
                        {
                            this.state = 571;
                            this.match(Python3Parser.ELIF);
                            this.state = 572;
                            this.test();
                            this.state = 573;
                            this.match(Python3Parser.COLON);
                            this.state = 574;
                            this.suite();
                        }
                    }
                    this.state = 580;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 584;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.ELSE) {
                    {
                        this.state = 581;
                        this.match(Python3Parser.ELSE);
                        this.state = 582;
                        this.match(Python3Parser.COLON);
                        this.state = 583;
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
    Python3Parser.prototype.while_stmt = function () {
        var _localctx = new While_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, Python3Parser.RULE_while_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 586;
                this.match(Python3Parser.WHILE);
                this.state = 587;
                this.test();
                this.state = 588;
                this.match(Python3Parser.COLON);
                this.state = 589;
                this.suite();
                this.state = 593;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.ELSE) {
                    {
                        this.state = 590;
                        this.match(Python3Parser.ELSE);
                        this.state = 591;
                        this.match(Python3Parser.COLON);
                        this.state = 592;
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
    Python3Parser.prototype.for_stmt = function () {
        var _localctx = new For_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, Python3Parser.RULE_for_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 595;
                this.match(Python3Parser.FOR);
                this.state = 596;
                this.exprlist();
                this.state = 597;
                this.match(Python3Parser.IN);
                this.state = 598;
                this.testlist();
                this.state = 599;
                this.match(Python3Parser.COLON);
                this.state = 600;
                this.suite();
                this.state = 604;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.ELSE) {
                    {
                        this.state = 601;
                        this.match(Python3Parser.ELSE);
                        this.state = 602;
                        this.match(Python3Parser.COLON);
                        this.state = 603;
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
    Python3Parser.prototype.try_stmt = function () {
        var _localctx = new Try_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, Python3Parser.RULE_try_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 606;
                this.match(Python3Parser.TRY);
                this.state = 607;
                this.match(Python3Parser.COLON);
                this.state = 608;
                this.suite();
                this.state = 630;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Python3Parser.EXCEPT:
                        {
                            this.state = 613;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 609;
                                        this.except_clause();
                                        this.state = 610;
                                        this.match(Python3Parser.COLON);
                                        this.state = 611;
                                        this.suite();
                                    }
                                }
                                this.state = 615;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === Python3Parser.EXCEPT);
                            this.state = 620;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === Python3Parser.ELSE) {
                                {
                                    this.state = 617;
                                    this.match(Python3Parser.ELSE);
                                    this.state = 618;
                                    this.match(Python3Parser.COLON);
                                    this.state = 619;
                                    this.suite();
                                }
                            }
                            this.state = 625;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === Python3Parser.FINALLY) {
                                {
                                    this.state = 622;
                                    this.match(Python3Parser.FINALLY);
                                    this.state = 623;
                                    this.match(Python3Parser.COLON);
                                    this.state = 624;
                                    this.suite();
                                }
                            }
                        }
                        break;
                    case Python3Parser.FINALLY:
                        {
                            this.state = 627;
                            this.match(Python3Parser.FINALLY);
                            this.state = 628;
                            this.match(Python3Parser.COLON);
                            this.state = 629;
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
    Python3Parser.prototype.with_stmt = function () {
        var _localctx = new With_stmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, Python3Parser.RULE_with_stmt);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 632;
                this.match(Python3Parser.WITH);
                this.state = 633;
                this.with_item();
                this.state = 638;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Python3Parser.COMMA) {
                    {
                        {
                            this.state = 634;
                            this.match(Python3Parser.COMMA);
                            this.state = 635;
                            this.with_item();
                        }
                    }
                    this.state = 640;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 641;
                this.match(Python3Parser.COLON);
                this.state = 642;
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
    Python3Parser.prototype.with_item = function () {
        var _localctx = new With_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, Python3Parser.RULE_with_item);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 644;
                this.test();
                this.state = 647;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.AS) {
                    {
                        this.state = 645;
                        this.match(Python3Parser.AS);
                        this.state = 646;
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
    Python3Parser.prototype.except_clause = function () {
        var _localctx = new Except_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, Python3Parser.RULE_except_clause);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 649;
                this.match(Python3Parser.EXCEPT);
                this.state = 655;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (Python3Parser.OPEN_BRACK - 54)) | (1 << (Python3Parser.ADD - 54)) | (1 << (Python3Parser.MINUS - 54)) | (1 << (Python3Parser.NOT_OP - 54)) | (1 << (Python3Parser.OPEN_BRACE - 54)))) !== 0)) {
                    {
                        this.state = 650;
                        this.test();
                        this.state = 653;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.AS) {
                            {
                                this.state = 651;
                                this.match(Python3Parser.AS);
                                this.state = 652;
                                this.match(Python3Parser.NAME);
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
    Python3Parser.prototype.suite = function () {
        var _localctx = new SuiteContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, Python3Parser.RULE_suite);
        var _la;
        try {
            this.state = 667;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.RETURN:
                case Python3Parser.RAISE:
                case Python3Parser.FROM:
                case Python3Parser.IMPORT:
                case Python3Parser.GLOBAL:
                case Python3Parser.NONLOCAL:
                case Python3Parser.ASSERT:
                case Python3Parser.LAMBDA:
                case Python3Parser.NOT:
                case Python3Parser.NONE:
                case Python3Parser.TRUE:
                case Python3Parser.FALSE:
                case Python3Parser.YIELD:
                case Python3Parser.DEL:
                case Python3Parser.PASS:
                case Python3Parser.CONTINUE:
                case Python3Parser.BREAK:
                case Python3Parser.NAME:
                case Python3Parser.STRING_LITERAL:
                case Python3Parser.BYTES_LITERAL:
                case Python3Parser.DECIMAL_INTEGER:
                case Python3Parser.OCT_INTEGER:
                case Python3Parser.HEX_INTEGER:
                case Python3Parser.BIN_INTEGER:
                case Python3Parser.FLOAT_NUMBER:
                case Python3Parser.IMAG_NUMBER:
                case Python3Parser.ELLIPSIS:
                case Python3Parser.STAR:
                case Python3Parser.OPEN_PAREN:
                case Python3Parser.OPEN_BRACK:
                case Python3Parser.ADD:
                case Python3Parser.MINUS:
                case Python3Parser.NOT_OP:
                case Python3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 657;
                        this.simple_stmt();
                    }
                    break;
                case Python3Parser.NEWLINE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 658;
                        this.match(Python3Parser.NEWLINE);
                        this.state = 659;
                        this.match(Python3Parser.INDENT);
                        this.state = 661;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 660;
                                    this.stmt();
                                }
                            }
                            this.state = 663;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.DEF) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.RAISE) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.GLOBAL) | (1 << Python3Parser.NONLOCAL) | (1 << Python3Parser.ASSERT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR) | (1 << Python3Parser.TRY) | (1 << Python3Parser.WITH) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE) | (1 << Python3Parser.CLASS) | (1 << Python3Parser.YIELD) | (1 << Python3Parser.DEL) | (1 << Python3Parser.PASS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Python3Parser.CONTINUE - 32)) | (1 << (Python3Parser.BREAK - 32)) | (1 << (Python3Parser.NAME - 32)) | (1 << (Python3Parser.STRING_LITERAL - 32)) | (1 << (Python3Parser.BYTES_LITERAL - 32)) | (1 << (Python3Parser.DECIMAL_INTEGER - 32)) | (1 << (Python3Parser.OCT_INTEGER - 32)) | (1 << (Python3Parser.HEX_INTEGER - 32)) | (1 << (Python3Parser.BIN_INTEGER - 32)) | (1 << (Python3Parser.FLOAT_NUMBER - 32)) | (1 << (Python3Parser.IMAG_NUMBER - 32)) | (1 << (Python3Parser.ELLIPSIS - 32)) | (1 << (Python3Parser.STAR - 32)) | (1 << (Python3Parser.OPEN_PAREN - 32)) | (1 << (Python3Parser.OPEN_BRACK - 32)) | (1 << (Python3Parser.ADD - 32)) | (1 << (Python3Parser.MINUS - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (Python3Parser.NOT_OP - 66)) | (1 << (Python3Parser.OPEN_BRACE - 66)) | (1 << (Python3Parser.AT - 66)))) !== 0));
                        this.state = 665;
                        this.match(Python3Parser.DEDENT);
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
    Python3Parser.prototype.test = function () {
        var _localctx = new TestContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, Python3Parser.RULE_test);
        var _la;
        try {
            this.state = 678;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.NOT:
                case Python3Parser.NONE:
                case Python3Parser.TRUE:
                case Python3Parser.FALSE:
                case Python3Parser.NAME:
                case Python3Parser.STRING_LITERAL:
                case Python3Parser.BYTES_LITERAL:
                case Python3Parser.DECIMAL_INTEGER:
                case Python3Parser.OCT_INTEGER:
                case Python3Parser.HEX_INTEGER:
                case Python3Parser.BIN_INTEGER:
                case Python3Parser.FLOAT_NUMBER:
                case Python3Parser.IMAG_NUMBER:
                case Python3Parser.ELLIPSIS:
                case Python3Parser.STAR:
                case Python3Parser.OPEN_PAREN:
                case Python3Parser.OPEN_BRACK:
                case Python3Parser.ADD:
                case Python3Parser.MINUS:
                case Python3Parser.NOT_OP:
                case Python3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 669;
                        this.or_test();
                        this.state = 675;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.IF) {
                            {
                                this.state = 670;
                                this.match(Python3Parser.IF);
                                this.state = 671;
                                this.or_test();
                                this.state = 672;
                                this.match(Python3Parser.ELSE);
                                this.state = 673;
                                this.test();
                            }
                        }
                    }
                    break;
                case Python3Parser.LAMBDA:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 677;
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
    Python3Parser.prototype.test_nocond = function () {
        var _localctx = new Test_nocondContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, Python3Parser.RULE_test_nocond);
        try {
            this.state = 682;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.NOT:
                case Python3Parser.NONE:
                case Python3Parser.TRUE:
                case Python3Parser.FALSE:
                case Python3Parser.NAME:
                case Python3Parser.STRING_LITERAL:
                case Python3Parser.BYTES_LITERAL:
                case Python3Parser.DECIMAL_INTEGER:
                case Python3Parser.OCT_INTEGER:
                case Python3Parser.HEX_INTEGER:
                case Python3Parser.BIN_INTEGER:
                case Python3Parser.FLOAT_NUMBER:
                case Python3Parser.IMAG_NUMBER:
                case Python3Parser.ELLIPSIS:
                case Python3Parser.STAR:
                case Python3Parser.OPEN_PAREN:
                case Python3Parser.OPEN_BRACK:
                case Python3Parser.ADD:
                case Python3Parser.MINUS:
                case Python3Parser.NOT_OP:
                case Python3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 680;
                        this.or_test();
                    }
                    break;
                case Python3Parser.LAMBDA:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 681;
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
    Python3Parser.prototype.lambdef = function () {
        var _localctx = new LambdefContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, Python3Parser.RULE_lambdef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 684;
                this.match(Python3Parser.LAMBDA);
                this.state = 686;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Python3Parser.NAME - 35)) | (1 << (Python3Parser.STAR - 35)) | (1 << (Python3Parser.POWER - 35)))) !== 0)) {
                    {
                        this.state = 685;
                        this.varargslist();
                    }
                }
                this.state = 688;
                this.match(Python3Parser.COLON);
                this.state = 689;
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
    Python3Parser.prototype.lambdef_nocond = function () {
        var _localctx = new Lambdef_nocondContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, Python3Parser.RULE_lambdef_nocond);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 691;
                this.match(Python3Parser.LAMBDA);
                this.state = 693;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Python3Parser.NAME - 35)) | (1 << (Python3Parser.STAR - 35)) | (1 << (Python3Parser.POWER - 35)))) !== 0)) {
                    {
                        this.state = 692;
                        this.varargslist();
                    }
                }
                this.state = 695;
                this.match(Python3Parser.COLON);
                this.state = 696;
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
    Python3Parser.prototype.or_test = function () {
        var _localctx = new Or_testContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, Python3Parser.RULE_or_test);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 698;
                this.and_test();
                this.state = 703;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Python3Parser.OR) {
                    {
                        {
                            this.state = 699;
                            this.match(Python3Parser.OR);
                            this.state = 700;
                            this.and_test();
                        }
                    }
                    this.state = 705;
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
    Python3Parser.prototype.and_test = function () {
        var _localctx = new And_testContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, Python3Parser.RULE_and_test);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 706;
                this.not_test();
                this.state = 711;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Python3Parser.AND) {
                    {
                        {
                            this.state = 707;
                            this.match(Python3Parser.AND);
                            this.state = 708;
                            this.not_test();
                        }
                    }
                    this.state = 713;
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
    Python3Parser.prototype.not_test = function () {
        var _localctx = new Not_testContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, Python3Parser.RULE_not_test);
        try {
            this.state = 717;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.NOT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 714;
                        this.match(Python3Parser.NOT);
                        this.state = 715;
                        this.not_test();
                    }
                    break;
                case Python3Parser.NONE:
                case Python3Parser.TRUE:
                case Python3Parser.FALSE:
                case Python3Parser.NAME:
                case Python3Parser.STRING_LITERAL:
                case Python3Parser.BYTES_LITERAL:
                case Python3Parser.DECIMAL_INTEGER:
                case Python3Parser.OCT_INTEGER:
                case Python3Parser.HEX_INTEGER:
                case Python3Parser.BIN_INTEGER:
                case Python3Parser.FLOAT_NUMBER:
                case Python3Parser.IMAG_NUMBER:
                case Python3Parser.ELLIPSIS:
                case Python3Parser.STAR:
                case Python3Parser.OPEN_PAREN:
                case Python3Parser.OPEN_BRACK:
                case Python3Parser.ADD:
                case Python3Parser.MINUS:
                case Python3Parser.NOT_OP:
                case Python3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 716;
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
    Python3Parser.prototype.comparison = function () {
        var _localctx = new ComparisonContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, Python3Parser.RULE_comparison);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 719;
                this.star_expr();
                this.state = 725;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.IN) | (1 << Python3Parser.NOT) | (1 << Python3Parser.IS))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Python3Parser.LESS_THAN - 69)) | (1 << (Python3Parser.GREATER_THAN - 69)) | (1 << (Python3Parser.EQUALS - 69)) | (1 << (Python3Parser.GT_EQ - 69)) | (1 << (Python3Parser.LT_EQ - 69)) | (1 << (Python3Parser.NOT_EQ_1 - 69)) | (1 << (Python3Parser.NOT_EQ_2 - 69)))) !== 0)) {
                    {
                        {
                            this.state = 720;
                            this.comp_op();
                            this.state = 721;
                            this.star_expr();
                        }
                    }
                    this.state = 727;
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
    Python3Parser.prototype.comp_op = function () {
        var _localctx = new Comp_opContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, Python3Parser.RULE_comp_op);
        try {
            this.state = 741;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 728;
                        this.match(Python3Parser.LESS_THAN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 729;
                        this.match(Python3Parser.GREATER_THAN);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 730;
                        this.match(Python3Parser.EQUALS);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 731;
                        this.match(Python3Parser.GT_EQ);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 732;
                        this.match(Python3Parser.LT_EQ);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 733;
                        this.match(Python3Parser.NOT_EQ_1);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 734;
                        this.match(Python3Parser.NOT_EQ_2);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 735;
                        this.match(Python3Parser.IN);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 736;
                        this.match(Python3Parser.NOT);
                        this.state = 737;
                        this.match(Python3Parser.IN);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 738;
                        this.match(Python3Parser.IS);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 739;
                        this.match(Python3Parser.IS);
                        this.state = 740;
                        this.match(Python3Parser.NOT);
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
    Python3Parser.prototype.star_expr = function () {
        var _localctx = new Star_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, Python3Parser.RULE_star_expr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 744;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.STAR) {
                    {
                        this.state = 743;
                        this.match(Python3Parser.STAR);
                    }
                }
                this.state = 746;
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
    Python3Parser.prototype.expr = function () {
        var _localctx = new ExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, Python3Parser.RULE_expr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 748;
                this.xor_expr();
                this.state = 753;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Python3Parser.OR_OP) {
                    {
                        {
                            this.state = 749;
                            this.match(Python3Parser.OR_OP);
                            this.state = 750;
                            this.xor_expr();
                        }
                    }
                    this.state = 755;
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
    Python3Parser.prototype.xor_expr = function () {
        var _localctx = new Xor_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, Python3Parser.RULE_xor_expr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 756;
                this.and_expr();
                this.state = 761;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Python3Parser.XOR) {
                    {
                        {
                            this.state = 757;
                            this.match(Python3Parser.XOR);
                            this.state = 758;
                            this.and_expr();
                        }
                    }
                    this.state = 763;
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
    Python3Parser.prototype.and_expr = function () {
        var _localctx = new And_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, Python3Parser.RULE_and_expr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 764;
                this.shift_expr();
                this.state = 769;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Python3Parser.AND_OP) {
                    {
                        {
                            this.state = 765;
                            this.match(Python3Parser.AND_OP);
                            this.state = 766;
                            this.shift_expr();
                        }
                    }
                    this.state = 771;
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
    Python3Parser.prototype.shift_expr = function () {
        var _localctx = new Shift_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, Python3Parser.RULE_shift_expr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 772;
                this.arith_expr();
                this.state = 779;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Python3Parser.LEFT_SHIFT || _la === Python3Parser.RIGHT_SHIFT) {
                    {
                        this.state = 777;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Python3Parser.LEFT_SHIFT:
                                {
                                    this.state = 773;
                                    this.match(Python3Parser.LEFT_SHIFT);
                                    this.state = 774;
                                    this.arith_expr();
                                }
                                break;
                            case Python3Parser.RIGHT_SHIFT:
                                {
                                    this.state = 775;
                                    this.match(Python3Parser.RIGHT_SHIFT);
                                    this.state = 776;
                                    this.arith_expr();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 781;
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
    Python3Parser.prototype.arith_expr = function () {
        var _localctx = new Arith_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, Python3Parser.RULE_arith_expr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 782;
                this.term();
                this.state = 789;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Python3Parser.ADD || _la === Python3Parser.MINUS) {
                    {
                        this.state = 787;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Python3Parser.ADD:
                                {
                                    this.state = 783;
                                    this.match(Python3Parser.ADD);
                                    this.state = 784;
                                    this.term();
                                }
                                break;
                            case Python3Parser.MINUS:
                                {
                                    this.state = 785;
                                    this.match(Python3Parser.MINUS);
                                    this.state = 786;
                                    this.term();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 791;
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
    Python3Parser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, Python3Parser.RULE_term);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 792;
                this.factor();
                this.state = 805;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (Python3Parser.STAR - 46)) | (1 << (Python3Parser.DIV - 46)) | (1 << (Python3Parser.MOD - 46)) | (1 << (Python3Parser.IDIV - 46)) | (1 << (Python3Parser.AT - 46)))) !== 0)) {
                    {
                        this.state = 803;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Python3Parser.STAR:
                                {
                                    this.state = 793;
                                    this.match(Python3Parser.STAR);
                                    this.state = 794;
                                    this.factor();
                                }
                                break;
                            case Python3Parser.DIV:
                                {
                                    this.state = 795;
                                    this.match(Python3Parser.DIV);
                                    this.state = 796;
                                    this.factor();
                                }
                                break;
                            case Python3Parser.MOD:
                                {
                                    this.state = 797;
                                    this.match(Python3Parser.MOD);
                                    this.state = 798;
                                    this.factor();
                                }
                                break;
                            case Python3Parser.IDIV:
                                {
                                    this.state = 799;
                                    this.match(Python3Parser.IDIV);
                                    this.state = 800;
                                    this.factor();
                                }
                                break;
                            case Python3Parser.AT:
                                {
                                    this.state = 801;
                                    this.match(Python3Parser.AT);
                                    this.state = 802;
                                    this.factor();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 807;
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
    Python3Parser.prototype.factor = function () {
        var _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, Python3Parser.RULE_factor);
        try {
            this.state = 815;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.ADD:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 808;
                        this.match(Python3Parser.ADD);
                        this.state = 809;
                        this.factor();
                    }
                    break;
                case Python3Parser.MINUS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 810;
                        this.match(Python3Parser.MINUS);
                        this.state = 811;
                        this.factor();
                    }
                    break;
                case Python3Parser.NOT_OP:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 812;
                        this.match(Python3Parser.NOT_OP);
                        this.state = 813;
                        this.factor();
                    }
                    break;
                case Python3Parser.NONE:
                case Python3Parser.TRUE:
                case Python3Parser.FALSE:
                case Python3Parser.NAME:
                case Python3Parser.STRING_LITERAL:
                case Python3Parser.BYTES_LITERAL:
                case Python3Parser.DECIMAL_INTEGER:
                case Python3Parser.OCT_INTEGER:
                case Python3Parser.HEX_INTEGER:
                case Python3Parser.BIN_INTEGER:
                case Python3Parser.FLOAT_NUMBER:
                case Python3Parser.IMAG_NUMBER:
                case Python3Parser.ELLIPSIS:
                case Python3Parser.OPEN_PAREN:
                case Python3Parser.OPEN_BRACK:
                case Python3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 814;
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
    Python3Parser.prototype.power = function () {
        var _localctx = new PowerContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, Python3Parser.RULE_power);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 817;
                this.atom();
                this.state = 821;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (Python3Parser.DOT - 44)) | (1 << (Python3Parser.OPEN_PAREN - 44)) | (1 << (Python3Parser.OPEN_BRACK - 44)))) !== 0)) {
                    {
                        {
                            this.state = 818;
                            this.trailer();
                        }
                    }
                    this.state = 823;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 826;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.POWER) {
                    {
                        this.state = 824;
                        this.match(Python3Parser.POWER);
                        this.state = 825;
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
    Python3Parser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, Python3Parser.RULE_atom);
        var _la;
        try {
            this.state = 855;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.OPEN_PAREN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 828;
                        this.match(Python3Parser.OPEN_PAREN);
                        this.state = 831;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Python3Parser.YIELD:
                                {
                                    this.state = 829;
                                    this.yield_expr();
                                }
                                break;
                            case Python3Parser.LAMBDA:
                            case Python3Parser.NOT:
                            case Python3Parser.NONE:
                            case Python3Parser.TRUE:
                            case Python3Parser.FALSE:
                            case Python3Parser.NAME:
                            case Python3Parser.STRING_LITERAL:
                            case Python3Parser.BYTES_LITERAL:
                            case Python3Parser.DECIMAL_INTEGER:
                            case Python3Parser.OCT_INTEGER:
                            case Python3Parser.HEX_INTEGER:
                            case Python3Parser.BIN_INTEGER:
                            case Python3Parser.FLOAT_NUMBER:
                            case Python3Parser.IMAG_NUMBER:
                            case Python3Parser.ELLIPSIS:
                            case Python3Parser.STAR:
                            case Python3Parser.OPEN_PAREN:
                            case Python3Parser.OPEN_BRACK:
                            case Python3Parser.ADD:
                            case Python3Parser.MINUS:
                            case Python3Parser.NOT_OP:
                            case Python3Parser.OPEN_BRACE:
                                {
                                    this.state = 830;
                                    this.testlist_comp();
                                }
                                break;
                            case Python3Parser.CLOSE_PAREN:
                                break;
                            default:
                                break;
                        }
                        this.state = 833;
                        this.match(Python3Parser.CLOSE_PAREN);
                    }
                    break;
                case Python3Parser.OPEN_BRACK:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 834;
                        this.match(Python3Parser.OPEN_BRACK);
                        this.state = 836;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (Python3Parser.OPEN_BRACK - 54)) | (1 << (Python3Parser.ADD - 54)) | (1 << (Python3Parser.MINUS - 54)) | (1 << (Python3Parser.NOT_OP - 54)) | (1 << (Python3Parser.OPEN_BRACE - 54)))) !== 0)) {
                            {
                                this.state = 835;
                                this.testlist_comp();
                            }
                        }
                        this.state = 838;
                        this.match(Python3Parser.CLOSE_BRACK);
                    }
                    break;
                case Python3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 839;
                        this.match(Python3Parser.OPEN_BRACE);
                        this.state = 841;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (Python3Parser.OPEN_BRACK - 54)) | (1 << (Python3Parser.ADD - 54)) | (1 << (Python3Parser.MINUS - 54)) | (1 << (Python3Parser.NOT_OP - 54)) | (1 << (Python3Parser.OPEN_BRACE - 54)))) !== 0)) {
                            {
                                this.state = 840;
                                this.dictorsetmaker();
                            }
                        }
                        this.state = 843;
                        this.match(Python3Parser.CLOSE_BRACE);
                    }
                    break;
                case Python3Parser.NAME:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 844;
                        this.match(Python3Parser.NAME);
                    }
                    break;
                case Python3Parser.DECIMAL_INTEGER:
                case Python3Parser.OCT_INTEGER:
                case Python3Parser.HEX_INTEGER:
                case Python3Parser.BIN_INTEGER:
                case Python3Parser.FLOAT_NUMBER:
                case Python3Parser.IMAG_NUMBER:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 845;
                        this.number();
                    }
                    break;
                case Python3Parser.STRING_LITERAL:
                case Python3Parser.BYTES_LITERAL:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 847;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 846;
                                    this.str();
                                }
                            }
                            this.state = 849;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === Python3Parser.STRING_LITERAL || _la === Python3Parser.BYTES_LITERAL);
                    }
                    break;
                case Python3Parser.ELLIPSIS:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 851;
                        this.match(Python3Parser.ELLIPSIS);
                    }
                    break;
                case Python3Parser.NONE:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 852;
                        this.match(Python3Parser.NONE);
                    }
                    break;
                case Python3Parser.TRUE:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 853;
                        this.match(Python3Parser.TRUE);
                    }
                    break;
                case Python3Parser.FALSE:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 854;
                        this.match(Python3Parser.FALSE);
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
    Python3Parser.prototype.testlist_comp = function () {
        var _localctx = new Testlist_compContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, Python3Parser.RULE_testlist_comp);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 857;
                this.test();
                this.state = 869;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Python3Parser.FOR:
                        {
                            this.state = 858;
                            this.comp_for();
                        }
                        break;
                    case Python3Parser.CLOSE_PAREN:
                    case Python3Parser.COMMA:
                    case Python3Parser.CLOSE_BRACK:
                        {
                            this.state = 863;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 859;
                                            this.match(Python3Parser.COMMA);
                                            this.state = 860;
                                            this.test();
                                        }
                                    }
                                }
                                this.state = 865;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
                            }
                            this.state = 867;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === Python3Parser.COMMA) {
                                {
                                    this.state = 866;
                                    this.match(Python3Parser.COMMA);
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
    Python3Parser.prototype.trailer = function () {
        var _localctx = new TrailerContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, Python3Parser.RULE_trailer);
        var _la;
        try {
            this.state = 882;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.OPEN_PAREN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 871;
                        this.match(Python3Parser.OPEN_PAREN);
                        this.state = 873;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (Python3Parser.POWER - 52)) | (1 << (Python3Parser.OPEN_BRACK - 52)) | (1 << (Python3Parser.ADD - 52)) | (1 << (Python3Parser.MINUS - 52)) | (1 << (Python3Parser.NOT_OP - 52)) | (1 << (Python3Parser.OPEN_BRACE - 52)))) !== 0)) {
                            {
                                this.state = 872;
                                this.arglist();
                            }
                        }
                        this.state = 875;
                        this.match(Python3Parser.CLOSE_PAREN);
                    }
                    break;
                case Python3Parser.OPEN_BRACK:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 876;
                        this.match(Python3Parser.OPEN_BRACK);
                        this.state = 877;
                        this.subscriptlist();
                        this.state = 878;
                        this.match(Python3Parser.CLOSE_BRACK);
                    }
                    break;
                case Python3Parser.DOT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 880;
                        this.match(Python3Parser.DOT);
                        this.state = 881;
                        this.match(Python3Parser.NAME);
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
    Python3Parser.prototype.subscriptlist = function () {
        var _localctx = new SubscriptlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, Python3Parser.RULE_subscriptlist);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 884;
                this.subscript();
                this.state = 889;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 885;
                                this.match(Python3Parser.COMMA);
                                this.state = 886;
                                this.subscript();
                            }
                        }
                    }
                    this.state = 891;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
                }
                this.state = 893;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.COMMA) {
                    {
                        this.state = 892;
                        this.match(Python3Parser.COMMA);
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
    Python3Parser.prototype.subscript = function () {
        var _localctx = new SubscriptContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, Python3Parser.RULE_subscript);
        var _la;
        try {
            this.state = 906;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 895;
                        this.test();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 897;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (Python3Parser.OPEN_BRACK - 54)) | (1 << (Python3Parser.ADD - 54)) | (1 << (Python3Parser.MINUS - 54)) | (1 << (Python3Parser.NOT_OP - 54)) | (1 << (Python3Parser.OPEN_BRACE - 54)))) !== 0)) {
                            {
                                this.state = 896;
                                this.test();
                            }
                        }
                        this.state = 899;
                        this.match(Python3Parser.COLON);
                        this.state = 901;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (Python3Parser.OPEN_BRACK - 54)) | (1 << (Python3Parser.ADD - 54)) | (1 << (Python3Parser.MINUS - 54)) | (1 << (Python3Parser.NOT_OP - 54)) | (1 << (Python3Parser.OPEN_BRACE - 54)))) !== 0)) {
                            {
                                this.state = 900;
                                this.test();
                            }
                        }
                        this.state = 904;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.COLON) {
                            {
                                this.state = 903;
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
    Python3Parser.prototype.sliceop = function () {
        var _localctx = new SliceopContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, Python3Parser.RULE_sliceop);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 908;
                this.match(Python3Parser.COLON);
                this.state = 910;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (Python3Parser.OPEN_BRACK - 54)) | (1 << (Python3Parser.ADD - 54)) | (1 << (Python3Parser.MINUS - 54)) | (1 << (Python3Parser.NOT_OP - 54)) | (1 << (Python3Parser.OPEN_BRACE - 54)))) !== 0)) {
                    {
                        this.state = 909;
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
    Python3Parser.prototype.exprlist = function () {
        var _localctx = new ExprlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, Python3Parser.RULE_exprlist);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 912;
                this.star_expr();
                this.state = 917;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 913;
                                this.match(Python3Parser.COMMA);
                                this.state = 914;
                                this.star_expr();
                            }
                        }
                    }
                    this.state = 919;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
                }
                this.state = 921;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.COMMA) {
                    {
                        this.state = 920;
                        this.match(Python3Parser.COMMA);
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
    Python3Parser.prototype.testlist = function () {
        var _localctx = new TestlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, Python3Parser.RULE_testlist);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 923;
                this.test();
                this.state = 928;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 924;
                                this.match(Python3Parser.COMMA);
                                this.state = 925;
                                this.test();
                            }
                        }
                    }
                    this.state = 930;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
                }
                this.state = 932;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.COMMA) {
                    {
                        this.state = 931;
                        this.match(Python3Parser.COMMA);
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
    Python3Parser.prototype.dictorsetmaker = function () {
        var _localctx = new DictorsetmakerContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, Python3Parser.RULE_dictorsetmaker);
        var _la;
        try {
            var _alt = void 0;
            this.state = 967;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 134, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 934;
                        this.test();
                        this.state = 935;
                        this.match(Python3Parser.COLON);
                        this.state = 936;
                        this.test();
                        this.state = 951;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Python3Parser.FOR:
                                {
                                    this.state = 937;
                                    this.comp_for();
                                }
                                break;
                            case Python3Parser.COMMA:
                            case Python3Parser.CLOSE_BRACE:
                                {
                                    this.state = 945;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 938;
                                                    this.match(Python3Parser.COMMA);
                                                    this.state = 939;
                                                    this.test();
                                                    this.state = 940;
                                                    this.match(Python3Parser.COLON);
                                                    this.state = 941;
                                                    this.test();
                                                }
                                            }
                                        }
                                        this.state = 947;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                                    }
                                    this.state = 949;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === Python3Parser.COMMA) {
                                        {
                                            this.state = 948;
                                            this.match(Python3Parser.COMMA);
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
                        this.state = 953;
                        this.test();
                        this.state = 965;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case Python3Parser.FOR:
                                {
                                    this.state = 954;
                                    this.comp_for();
                                }
                                break;
                            case Python3Parser.COMMA:
                            case Python3Parser.CLOSE_BRACE:
                                {
                                    this.state = 959;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 955;
                                                    this.match(Python3Parser.COMMA);
                                                    this.state = 956;
                                                    this.test();
                                                }
                                            }
                                        }
                                        this.state = 961;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
                                    }
                                    this.state = 963;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === Python3Parser.COMMA) {
                                        {
                                            this.state = 962;
                                            this.match(Python3Parser.COMMA);
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
    Python3Parser.prototype.classdef = function () {
        var _localctx = new ClassdefContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, Python3Parser.RULE_classdef);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 969;
                this.match(Python3Parser.CLASS);
                this.state = 970;
                this.match(Python3Parser.NAME);
                this.state = 976;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.OPEN_PAREN) {
                    {
                        this.state = 971;
                        this.match(Python3Parser.OPEN_PAREN);
                        this.state = 973;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (Python3Parser.LAMBDA - 20)) | (1 << (Python3Parser.NOT - 20)) | (1 << (Python3Parser.NONE - 20)) | (1 << (Python3Parser.TRUE - 20)) | (1 << (Python3Parser.FALSE - 20)) | (1 << (Python3Parser.NAME - 20)) | (1 << (Python3Parser.STRING_LITERAL - 20)) | (1 << (Python3Parser.BYTES_LITERAL - 20)) | (1 << (Python3Parser.DECIMAL_INTEGER - 20)) | (1 << (Python3Parser.OCT_INTEGER - 20)) | (1 << (Python3Parser.HEX_INTEGER - 20)) | (1 << (Python3Parser.BIN_INTEGER - 20)) | (1 << (Python3Parser.FLOAT_NUMBER - 20)) | (1 << (Python3Parser.IMAG_NUMBER - 20)) | (1 << (Python3Parser.ELLIPSIS - 20)) | (1 << (Python3Parser.STAR - 20)) | (1 << (Python3Parser.OPEN_PAREN - 20)))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (Python3Parser.POWER - 52)) | (1 << (Python3Parser.OPEN_BRACK - 52)) | (1 << (Python3Parser.ADD - 52)) | (1 << (Python3Parser.MINUS - 52)) | (1 << (Python3Parser.NOT_OP - 52)) | (1 << (Python3Parser.OPEN_BRACE - 52)))) !== 0)) {
                            {
                                this.state = 972;
                                this.arglist();
                            }
                        }
                        this.state = 975;
                        this.match(Python3Parser.CLOSE_PAREN);
                    }
                }
                this.state = 978;
                this.match(Python3Parser.COLON);
                this.state = 979;
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
    Python3Parser.prototype.arglist = function () {
        var _localctx = new ArglistContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, Python3Parser.RULE_arglist);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 986;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 981;
                                this.argument();
                                this.state = 982;
                                this.match(Python3Parser.COMMA);
                            }
                        }
                    }
                    this.state = 988;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                }
                this.state = 1009;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 141, this._ctx)) {
                    case 1:
                        {
                            this.state = 989;
                            this.argument();
                            this.state = 991;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === Python3Parser.COMMA) {
                                {
                                    this.state = 990;
                                    this.match(Python3Parser.COMMA);
                                }
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 993;
                            this.match(Python3Parser.STAR);
                            this.state = 994;
                            this.test();
                            this.state = 999;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 995;
                                            this.match(Python3Parser.COMMA);
                                            this.state = 996;
                                            this.argument();
                                        }
                                    }
                                }
                                this.state = 1001;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
                            }
                            this.state = 1005;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === Python3Parser.COMMA) {
                                {
                                    this.state = 1002;
                                    this.match(Python3Parser.COMMA);
                                    this.state = 1003;
                                    this.match(Python3Parser.POWER);
                                    this.state = 1004;
                                    this.test();
                                }
                            }
                        }
                        break;
                    case 3:
                        {
                            this.state = 1007;
                            this.match(Python3Parser.POWER);
                            this.state = 1008;
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
    Python3Parser.prototype.argument = function () {
        var _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, Python3Parser.RULE_argument);
        var _la;
        try {
            this.state = 1019;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1011;
                        this.test();
                        this.state = 1013;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Python3Parser.FOR) {
                            {
                                this.state = 1012;
                                this.comp_for();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1015;
                        this.test();
                        this.state = 1016;
                        this.match(Python3Parser.ASSIGN);
                        this.state = 1017;
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
    Python3Parser.prototype.comp_iter = function () {
        var _localctx = new Comp_iterContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, Python3Parser.RULE_comp_iter);
        try {
            this.state = 1023;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.FOR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1021;
                        this.comp_for();
                    }
                    break;
                case Python3Parser.IF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1022;
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
    Python3Parser.prototype.comp_for = function () {
        var _localctx = new Comp_forContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, Python3Parser.RULE_comp_for);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1025;
                this.match(Python3Parser.FOR);
                this.state = 1026;
                this.exprlist();
                this.state = 1027;
                this.match(Python3Parser.IN);
                this.state = 1028;
                this.or_test();
                this.state = 1030;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.IF || _la === Python3Parser.FOR) {
                    {
                        this.state = 1029;
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
    Python3Parser.prototype.comp_if = function () {
        var _localctx = new Comp_ifContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, Python3Parser.RULE_comp_if);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1032;
                this.match(Python3Parser.IF);
                this.state = 1033;
                this.test_nocond();
                this.state = 1035;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === Python3Parser.IF || _la === Python3Parser.FOR) {
                    {
                        this.state = 1034;
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
    Python3Parser.prototype.yield_expr = function () {
        var _localctx = new Yield_exprContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, Python3Parser.RULE_yield_expr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1037;
                this.match(Python3Parser.YIELD);
                this.state = 1039;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (Python3Parser.FROM - 4)) | (1 << (Python3Parser.LAMBDA - 4)) | (1 << (Python3Parser.NOT - 4)) | (1 << (Python3Parser.NONE - 4)) | (1 << (Python3Parser.TRUE - 4)) | (1 << (Python3Parser.FALSE - 4)) | (1 << (Python3Parser.NAME - 4)))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (Python3Parser.STRING_LITERAL - 36)) | (1 << (Python3Parser.BYTES_LITERAL - 36)) | (1 << (Python3Parser.DECIMAL_INTEGER - 36)) | (1 << (Python3Parser.OCT_INTEGER - 36)) | (1 << (Python3Parser.HEX_INTEGER - 36)) | (1 << (Python3Parser.BIN_INTEGER - 36)) | (1 << (Python3Parser.FLOAT_NUMBER - 36)) | (1 << (Python3Parser.IMAG_NUMBER - 36)) | (1 << (Python3Parser.ELLIPSIS - 36)) | (1 << (Python3Parser.STAR - 36)) | (1 << (Python3Parser.OPEN_PAREN - 36)) | (1 << (Python3Parser.OPEN_BRACK - 36)) | (1 << (Python3Parser.ADD - 36)) | (1 << (Python3Parser.MINUS - 36)) | (1 << (Python3Parser.NOT_OP - 36)) | (1 << (Python3Parser.OPEN_BRACE - 36)))) !== 0)) {
                    {
                        this.state = 1038;
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
    Python3Parser.prototype.yield_arg = function () {
        var _localctx = new Yield_argContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, Python3Parser.RULE_yield_arg);
        try {
            this.state = 1044;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.FROM:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1041;
                        this.match(Python3Parser.FROM);
                        this.state = 1042;
                        this.test();
                    }
                    break;
                case Python3Parser.LAMBDA:
                case Python3Parser.NOT:
                case Python3Parser.NONE:
                case Python3Parser.TRUE:
                case Python3Parser.FALSE:
                case Python3Parser.NAME:
                case Python3Parser.STRING_LITERAL:
                case Python3Parser.BYTES_LITERAL:
                case Python3Parser.DECIMAL_INTEGER:
                case Python3Parser.OCT_INTEGER:
                case Python3Parser.HEX_INTEGER:
                case Python3Parser.BIN_INTEGER:
                case Python3Parser.FLOAT_NUMBER:
                case Python3Parser.IMAG_NUMBER:
                case Python3Parser.ELLIPSIS:
                case Python3Parser.STAR:
                case Python3Parser.OPEN_PAREN:
                case Python3Parser.OPEN_BRACK:
                case Python3Parser.ADD:
                case Python3Parser.MINUS:
                case Python3Parser.NOT_OP:
                case Python3Parser.OPEN_BRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1043;
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
    Python3Parser.prototype.str = function () {
        var _localctx = new StrContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, Python3Parser.RULE_str);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1046;
                _la = this._input.LA(1);
                if (!(_la === Python3Parser.STRING_LITERAL || _la === Python3Parser.BYTES_LITERAL)) {
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
    Python3Parser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, Python3Parser.RULE_number);
        try {
            this.state = 1051;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Python3Parser.DECIMAL_INTEGER:
                case Python3Parser.OCT_INTEGER:
                case Python3Parser.HEX_INTEGER:
                case Python3Parser.BIN_INTEGER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1048;
                        this.integer();
                    }
                    break;
                case Python3Parser.FLOAT_NUMBER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1049;
                        this.match(Python3Parser.FLOAT_NUMBER);
                    }
                    break;
                case Python3Parser.IMAG_NUMBER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1050;
                        this.match(Python3Parser.IMAG_NUMBER);
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
    Python3Parser.prototype.integer = function () {
        var _localctx = new IntegerContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, Python3Parser.RULE_integer);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1053;
                _la = this._input.LA(1);
                if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.DECIMAL_INTEGER - 38)) | (1 << (Python3Parser.OCT_INTEGER - 38)) | (1 << (Python3Parser.HEX_INTEGER - 38)) | (1 << (Python3Parser.BIN_INTEGER - 38)))) !== 0))) {
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
    Object.defineProperty(Python3Parser, "_ATN", {
        get: function () {
            if (!Python3Parser.__ATN) {
                Python3Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(Python3Parser._serializedATN));
            }
            return Python3Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    Python3Parser.DEF = 1;
    Python3Parser.RETURN = 2;
    Python3Parser.RAISE = 3;
    Python3Parser.FROM = 4;
    Python3Parser.IMPORT = 5;
    Python3Parser.AS = 6;
    Python3Parser.GLOBAL = 7;
    Python3Parser.NONLOCAL = 8;
    Python3Parser.ASSERT = 9;
    Python3Parser.IF = 10;
    Python3Parser.ELIF = 11;
    Python3Parser.ELSE = 12;
    Python3Parser.WHILE = 13;
    Python3Parser.FOR = 14;
    Python3Parser.IN = 15;
    Python3Parser.TRY = 16;
    Python3Parser.FINALLY = 17;
    Python3Parser.WITH = 18;
    Python3Parser.EXCEPT = 19;
    Python3Parser.LAMBDA = 20;
    Python3Parser.OR = 21;
    Python3Parser.AND = 22;
    Python3Parser.NOT = 23;
    Python3Parser.IS = 24;
    Python3Parser.NONE = 25;
    Python3Parser.TRUE = 26;
    Python3Parser.FALSE = 27;
    Python3Parser.CLASS = 28;
    Python3Parser.YIELD = 29;
    Python3Parser.DEL = 30;
    Python3Parser.PASS = 31;
    Python3Parser.CONTINUE = 32;
    Python3Parser.BREAK = 33;
    Python3Parser.NEWLINE = 34;
    Python3Parser.NAME = 35;
    Python3Parser.STRING_LITERAL = 36;
    Python3Parser.BYTES_LITERAL = 37;
    Python3Parser.DECIMAL_INTEGER = 38;
    Python3Parser.OCT_INTEGER = 39;
    Python3Parser.HEX_INTEGER = 40;
    Python3Parser.BIN_INTEGER = 41;
    Python3Parser.FLOAT_NUMBER = 42;
    Python3Parser.IMAG_NUMBER = 43;
    Python3Parser.DOT = 44;
    Python3Parser.ELLIPSIS = 45;
    Python3Parser.STAR = 46;
    Python3Parser.OPEN_PAREN = 47;
    Python3Parser.CLOSE_PAREN = 48;
    Python3Parser.COMMA = 49;
    Python3Parser.COLON = 50;
    Python3Parser.SEMI_COLON = 51;
    Python3Parser.POWER = 52;
    Python3Parser.ASSIGN = 53;
    Python3Parser.OPEN_BRACK = 54;
    Python3Parser.CLOSE_BRACK = 55;
    Python3Parser.OR_OP = 56;
    Python3Parser.XOR = 57;
    Python3Parser.AND_OP = 58;
    Python3Parser.LEFT_SHIFT = 59;
    Python3Parser.RIGHT_SHIFT = 60;
    Python3Parser.ADD = 61;
    Python3Parser.MINUS = 62;
    Python3Parser.DIV = 63;
    Python3Parser.MOD = 64;
    Python3Parser.IDIV = 65;
    Python3Parser.NOT_OP = 66;
    Python3Parser.OPEN_BRACE = 67;
    Python3Parser.CLOSE_BRACE = 68;
    Python3Parser.LESS_THAN = 69;
    Python3Parser.GREATER_THAN = 70;
    Python3Parser.EQUALS = 71;
    Python3Parser.GT_EQ = 72;
    Python3Parser.LT_EQ = 73;
    Python3Parser.NOT_EQ_1 = 74;
    Python3Parser.NOT_EQ_2 = 75;
    Python3Parser.AT = 76;
    Python3Parser.ARROW = 77;
    Python3Parser.ADD_ASSIGN = 78;
    Python3Parser.SUB_ASSIGN = 79;
    Python3Parser.MULT_ASSIGN = 80;
    Python3Parser.AT_ASSIGN = 81;
    Python3Parser.DIV_ASSIGN = 82;
    Python3Parser.MOD_ASSIGN = 83;
    Python3Parser.AND_ASSIGN = 84;
    Python3Parser.OR_ASSIGN = 85;
    Python3Parser.XOR_ASSIGN = 86;
    Python3Parser.LEFT_SHIFT_ASSIGN = 87;
    Python3Parser.RIGHT_SHIFT_ASSIGN = 88;
    Python3Parser.POWER_ASSIGN = 89;
    Python3Parser.IDIV_ASSIGN = 90;
    Python3Parser.SKIP_ = 91;
    Python3Parser.UNKNOWN_CHAR = 92;
    Python3Parser.INDENT = 93;
    Python3Parser.DEDENT = 94;
    Python3Parser.RULE_single_input = 0;
    Python3Parser.RULE_file_input = 1;
    Python3Parser.RULE_eval_input = 2;
    Python3Parser.RULE_decorator = 3;
    Python3Parser.RULE_decorators = 4;
    Python3Parser.RULE_decorated = 5;
    Python3Parser.RULE_funcdef = 6;
    Python3Parser.RULE_parameters = 7;
    Python3Parser.RULE_typedargslist = 8;
    Python3Parser.RULE_tfpdef = 9;
    Python3Parser.RULE_varargslist = 10;
    Python3Parser.RULE_vfpdef = 11;
    Python3Parser.RULE_stmt = 12;
    Python3Parser.RULE_simple_stmt = 13;
    Python3Parser.RULE_small_stmt = 14;
    Python3Parser.RULE_expr_stmt = 15;
    Python3Parser.RULE_testlist_star_expr = 16;
    Python3Parser.RULE_augassign = 17;
    Python3Parser.RULE_del_stmt = 18;
    Python3Parser.RULE_pass_stmt = 19;
    Python3Parser.RULE_flow_stmt = 20;
    Python3Parser.RULE_break_stmt = 21;
    Python3Parser.RULE_continue_stmt = 22;
    Python3Parser.RULE_return_stmt = 23;
    Python3Parser.RULE_yield_stmt = 24;
    Python3Parser.RULE_raise_stmt = 25;
    Python3Parser.RULE_import_stmt = 26;
    Python3Parser.RULE_import_name = 27;
    Python3Parser.RULE_import_from = 28;
    Python3Parser.RULE_import_as_name = 29;
    Python3Parser.RULE_dotted_as_name = 30;
    Python3Parser.RULE_import_as_names = 31;
    Python3Parser.RULE_dotted_as_names = 32;
    Python3Parser.RULE_dotted_name = 33;
    Python3Parser.RULE_global_stmt = 34;
    Python3Parser.RULE_nonlocal_stmt = 35;
    Python3Parser.RULE_assert_stmt = 36;
    Python3Parser.RULE_compound_stmt = 37;
    Python3Parser.RULE_if_stmt = 38;
    Python3Parser.RULE_while_stmt = 39;
    Python3Parser.RULE_for_stmt = 40;
    Python3Parser.RULE_try_stmt = 41;
    Python3Parser.RULE_with_stmt = 42;
    Python3Parser.RULE_with_item = 43;
    Python3Parser.RULE_except_clause = 44;
    Python3Parser.RULE_suite = 45;
    Python3Parser.RULE_test = 46;
    Python3Parser.RULE_test_nocond = 47;
    Python3Parser.RULE_lambdef = 48;
    Python3Parser.RULE_lambdef_nocond = 49;
    Python3Parser.RULE_or_test = 50;
    Python3Parser.RULE_and_test = 51;
    Python3Parser.RULE_not_test = 52;
    Python3Parser.RULE_comparison = 53;
    Python3Parser.RULE_comp_op = 54;
    Python3Parser.RULE_star_expr = 55;
    Python3Parser.RULE_expr = 56;
    Python3Parser.RULE_xor_expr = 57;
    Python3Parser.RULE_and_expr = 58;
    Python3Parser.RULE_shift_expr = 59;
    Python3Parser.RULE_arith_expr = 60;
    Python3Parser.RULE_term = 61;
    Python3Parser.RULE_factor = 62;
    Python3Parser.RULE_power = 63;
    Python3Parser.RULE_atom = 64;
    Python3Parser.RULE_testlist_comp = 65;
    Python3Parser.RULE_trailer = 66;
    Python3Parser.RULE_subscriptlist = 67;
    Python3Parser.RULE_subscript = 68;
    Python3Parser.RULE_sliceop = 69;
    Python3Parser.RULE_exprlist = 70;
    Python3Parser.RULE_testlist = 71;
    Python3Parser.RULE_dictorsetmaker = 72;
    Python3Parser.RULE_classdef = 73;
    Python3Parser.RULE_arglist = 74;
    Python3Parser.RULE_argument = 75;
    Python3Parser.RULE_comp_iter = 76;
    Python3Parser.RULE_comp_for = 77;
    Python3Parser.RULE_comp_if = 78;
    Python3Parser.RULE_yield_expr = 79;
    Python3Parser.RULE_yield_arg = 80;
    Python3Parser.RULE_str = 81;
    Python3Parser.RULE_number = 82;
    Python3Parser.RULE_integer = 83;
    // tslint:disable:no-trailing-whitespace
    Python3Parser.ruleNames = [
        "single_input", "file_input", "eval_input", "decorator", "decorators",
        "decorated", "funcdef", "parameters", "typedargslist", "tfpdef", "varargslist",
        "vfpdef", "stmt", "simple_stmt", "small_stmt", "expr_stmt", "testlist_star_expr",
        "augassign", "del_stmt", "pass_stmt", "flow_stmt", "break_stmt", "continue_stmt",
        "return_stmt", "yield_stmt", "raise_stmt", "import_stmt", "import_name",
        "import_from", "import_as_name", "dotted_as_name", "import_as_names",
        "dotted_as_names", "dotted_name", "global_stmt", "nonlocal_stmt", "assert_stmt",
        "compound_stmt", "if_stmt", "while_stmt", "for_stmt", "try_stmt", "with_stmt",
        "with_item", "except_clause", "suite", "test", "test_nocond", "lambdef",
        "lambdef_nocond", "or_test", "and_test", "not_test", "comparison", "comp_op",
        "star_expr", "expr", "xor_expr", "and_expr", "shift_expr", "arith_expr",
        "term", "factor", "power", "atom", "testlist_comp", "trailer", "subscriptlist",
        "subscript", "sliceop", "exprlist", "testlist", "dictorsetmaker", "classdef",
        "arglist", "argument", "comp_iter", "comp_for", "comp_if", "yield_expr",
        "yield_arg", "str", "number", "integer",
    ];
    Python3Parser._LITERAL_NAMES = [
        undefined, "'def'", "'return'", "'raise'", "'from'", "'import'", "'as'",
        "'global'", "'nonlocal'", "'assert'", "'if'", "'elif'", "'else'", "'while'",
        "'for'", "'in'", "'try'", "'finally'", "'with'", "'except'", "'lambda'",
        "'or'", "'and'", "'not'", "'is'", "'None'", "'True'", "'False'", "'class'",
        "'yield'", "'del'", "'pass'", "'continue'", "'break'", undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'.'", "'...'", "'*'", "'('", "')'", "','", "':'", "';'", "'**'",
        "'='", "'['", "']'", "'|'", "'^'", "'&'", "'<<'", "'>>'", "'+'", "'-'",
        "'/'", "'%'", "'//'", "'~'", "'{'", "'}'", "'<'", "'>'", "'=='", "'>='",
        "'<='", "'<>'", "'!='", "'@'", "'->'", "'+='", "'-='", "'*='", "'@='",
        "'/='", "'%='", "'&='", "'|='", "'^='", "'<<='", "'>>='", "'**='", "'//='",
    ];
    Python3Parser._SYMBOLIC_NAMES = [
        undefined, "DEF", "RETURN", "RAISE", "FROM", "IMPORT", "AS", "GLOBAL",
        "NONLOCAL", "ASSERT", "IF", "ELIF", "ELSE", "WHILE", "FOR", "IN", "TRY",
        "FINALLY", "WITH", "EXCEPT", "LAMBDA", "OR", "AND", "NOT", "IS", "NONE",
        "TRUE", "FALSE", "CLASS", "YIELD", "DEL", "PASS", "CONTINUE", "BREAK",
        "NEWLINE", "NAME", "STRING_LITERAL", "BYTES_LITERAL", "DECIMAL_INTEGER",
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
    Python3Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(Python3Parser._LITERAL_NAMES, Python3Parser._SYMBOLIC_NAMES, []);
    Python3Parser._serializedATNSegments = 2;
    Python3Parser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03`\u0422\x04\x02" +
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
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x05\x02\xB0\n\x02\x03\x03\x03\x03\x07\x03\xB4\n\x03" +
        "\f\x03\x0E\x03\xB7\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x07\x04\xBD\n" +
        "\x04\f\x04\x0E\x04\xC0\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x05\x05\xC8\n\x05\x03\x05\x05\x05\xCB\n\x05\x03\x05\x03\x05\x03\x06" +
        "\x06\x06\xD0\n\x06\r\x06\x0E\x06\xD1\x03\x07\x03\x07\x03\x07\x05\x07\xD7" +
        "\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xDE\n\b\x03\b\x03\b\x03\b\x03" +
        "\t\x03\t\x05\t\xE5\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n\xEC\n\n\x03" +
        "\n\x03\n\x03\n\x03\n\x05\n\xF2\n\n\x07\n\xF4\n\n\f\n\x0E\n\xF7\v\n\x03" +
        "\n\x03\n\x03\n\x05\n\xFC\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0102\n\n\x07" +
        "\n\u0104\n\n\f\n\x0E\n\u0107\v\n\x03\n\x03\n\x03\n\x05\n\u010C\n\n\x03" +
        "\n\x03\n\x05\n\u0110\n\n\x05\n\u0112\n\n\x03\n\x03\n\x05\n\u0116\n\n\x03" +
        "\n\x03\n\x03\n\x03\n\x05\n\u011C\n\n\x07\n\u011E\n\n\f\n\x0E\n\u0121\v" +
        "\n\x03\n\x03\n\x03\n\x05\n\u0126\n\n\x03\n\x03\n\x05\n\u012A\n\n\x03\v" +
        "\x03\v\x03\v\x05\v\u012F\n\v\x03\f\x03\f\x03\f\x05\f\u0134\n\f\x03\f\x03" +
        "\f\x03\f\x03\f\x05\f\u013A\n\f\x07\f\u013C\n\f\f\f\x0E\f\u013F\v\f\x03" +
        "\f\x03\f\x03\f\x05\f\u0144\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u014A\n\f" +
        "\x07\f\u014C\n\f\f\f\x0E\f\u014F\v\f\x03\f\x03\f\x03\f\x05\f\u0154\n\f" +
        "\x03\f\x03\f\x05\f\u0158\n\f\x05\f\u015A\n\f\x03\f\x03\f\x05\f\u015E\n" +
        "\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0164\n\f\x07\f\u0166\n\f\f\f\x0E\f\u0169" +
        "\v\f\x03\f\x03\f\x03\f\x05\f\u016E\n\f\x03\f\x03\f\x05\f\u0172\n\f\x03" +
        "\r\x03\r\x03\x0E\x03\x0E\x05\x0E\u0178\n\x0E\x03\x0F\x03\x0F\x03\x0F\x07" +
        "\x0F\u017D\n\x0F\f\x0F\x0E\x0F\u0180\v\x0F\x03\x0F\x05\x0F\u0183\n\x0F" +
        "\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x05\x10\u018F\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0195" +
        "\n\x11\x03\x11\x03\x11\x03\x11\x05\x11\u019A\n\x11\x07\x11\u019C\n\x11" +
        "\f\x11\x0E\x11\u019F\v\x11\x05\x11\u01A1\n\x11\x03\x12\x03\x12\x05\x12" +
        "\u01A5\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01AA\n\x12\x07\x12\u01AC" +
        "\n\x12\f\x12\x0E\x12\u01AF\v\x12\x03\x12\x05\x12\u01B2\n\x12\x03\x13\x03" +
        "\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03" +
        "\x16\x03\x16\x05\x16\u01C0\n\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19" +
        "\x03\x19\x05\x19\u01C8\n\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
        "\x1B\x05\x1B\u01D0\n\x1B\x05\x1B\u01D2\n\x1B\x03\x1C\x03\x1C\x05\x1C\u01D6" +
        "\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x07\x1E\u01DD\n\x1E\f\x1E" +
        "\x0E\x1E\u01E0\v\x1E\x03\x1E\x03\x1E\x06\x1E\u01E4\n\x1E\r\x1E\x0E\x1E" +
        "\u01E5\x05\x1E\u01E8\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x03\x1E\x05\x1E\u01F1\n\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01F6" +
        "\n\x1F\x03 \x03 \x03 \x05 \u01FB\n \x03!\x03!\x03!\x07!\u0200\n!\f!\x0E" +
        "!\u0203\v!\x03!\x05!\u0206\n!\x03\"\x03\"\x03\"\x07\"\u020B\n\"\f\"\x0E" +
        "\"\u020E\v\"\x03#\x03#\x03#\x07#\u0213\n#\f#\x0E#\u0216\v#\x03$\x03$\x03" +
        "$\x03$\x07$\u021C\n$\f$\x0E$\u021F\v$\x03%\x03%\x03%\x03%\x07%\u0225\n" +
        "%\f%\x0E%\u0228\v%\x03&\x03&\x03&\x03&\x05&\u022E\n&\x03\'\x03\'\x03\'" +
        "\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0238\n\'\x03(\x03(\x03(\x03(\x03" +
        "(\x03(\x03(\x03(\x03(\x07(\u0243\n(\f(\x0E(\u0246\v(\x03(\x03(\x03(\x05" +
        "(\u024B\n(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0254\n)\x03*\x03*" +
        "\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u025F\n*\x03+\x03+\x03+\x03+" +
        "\x03+\x03+\x03+\x06+\u0268\n+\r+\x0E+\u0269\x03+\x03+\x03+\x05+\u026F" +
        "\n+\x03+\x03+\x03+\x05+\u0274\n+\x03+\x03+\x03+\x05+\u0279\n+\x03,\x03" +
        ",\x03,\x03,\x07,\u027F\n,\f,\x0E,\u0282\v,\x03,\x03,\x03,\x03-\x03-\x03" +
        "-\x05-\u028A\n-\x03.\x03.\x03.\x03.\x05.\u0290\n.\x05.\u0292\n.\x03/\x03" +
        "/\x03/\x03/\x06/\u0298\n/\r/\x0E/\u0299\x03/\x03/\x05/\u029E\n/\x030\x03" +
        "0\x030\x030\x030\x030\x050\u02A6\n0\x030\x050\u02A9\n0\x031\x031\x051" +
        "\u02AD\n1\x032\x032\x052\u02B1\n2\x032\x032\x032\x033\x033\x053\u02B8" +
        "\n3\x033\x033\x033\x034\x034\x034\x074\u02C0\n4\f4\x0E4\u02C3\v4\x035" +
        "\x035\x035\x075\u02C8\n5\f5\x0E5\u02CB\v5\x036\x036\x036\x056\u02D0\n" +
        "6\x037\x037\x037\x037\x077\u02D6\n7\f7\x0E7\u02D9\v7\x038\x038\x038\x03" +
        "8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x058\u02E8\n8\x039\x05" +
        "9\u02EB\n9\x039\x039\x03:\x03:\x03:\x07:\u02F2\n:\f:\x0E:\u02F5\v:\x03" +
        ";\x03;\x03;\x07;\u02FA\n;\f;\x0E;\u02FD\v;\x03<\x03<\x03<\x07<\u0302\n" +
        "<\f<\x0E<\u0305\v<\x03=\x03=\x03=\x03=\x03=\x07=\u030C\n=\f=\x0E=\u030F" +
        "\v=\x03>\x03>\x03>\x03>\x03>\x07>\u0316\n>\f>\x0E>\u0319\v>\x03?\x03?" +
        "\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x07?\u0326\n?\f?\x0E?\u0329" +
        "\v?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u0332\n@\x03A\x03A\x07A\u0336" +
        "\nA\fA\x0EA\u0339\vA\x03A\x03A\x05A\u033D\nA\x03B\x03B\x03B\x05B\u0342" +
        "\nB\x03B\x03B\x03B\x05B\u0347\nB\x03B\x03B\x03B\x05B\u034C\nB\x03B\x03" +
        "B\x03B\x03B\x06B\u0352\nB\rB\x0EB\u0353\x03B\x03B\x03B\x03B\x05B\u035A" +
        "\nB\x03C\x03C\x03C\x03C\x07C\u0360\nC\fC\x0EC\u0363\vC\x03C\x05C\u0366" +
        "\nC\x05C\u0368\nC\x03D\x03D\x05D\u036C\nD\x03D\x03D\x03D\x03D\x03D\x03" +
        "D\x03D\x05D\u0375\nD\x03E\x03E\x03E\x07E\u037A\nE\fE\x0EE\u037D\vE\x03" +
        "E\x05E\u0380\nE\x03F\x03F\x05F\u0384\nF\x03F\x03F\x05F\u0388\nF\x03F\x05" +
        "F\u038B\nF\x05F\u038D\nF\x03G\x03G\x05G\u0391\nG\x03H\x03H\x03H\x07H\u0396" +
        "\nH\fH\x0EH\u0399\vH\x03H\x05H\u039C\nH\x03I\x03I\x03I\x07I\u03A1\nI\f" +
        "I\x0EI\u03A4\vI\x03I\x05I\u03A7\nI\x03J\x03J\x03J\x03J\x03J\x03J\x03J" +
        "\x03J\x03J\x07J\u03B2\nJ\fJ\x0EJ\u03B5\vJ\x03J\x05J\u03B8\nJ\x05J\u03BA" +
        "\nJ\x03J\x03J\x03J\x03J\x07J\u03C0\nJ\fJ\x0EJ\u03C3\vJ\x03J\x05J\u03C6" +
        "\nJ\x05J\u03C8\nJ\x05J\u03CA\nJ\x03K\x03K\x03K\x03K\x05K\u03D0\nK\x03" +
        "K\x05K\u03D3\nK\x03K\x03K\x03K\x03L\x03L\x03L\x07L\u03DB\nL\fL\x0EL\u03DE" +
        "\vL\x03L\x03L\x05L\u03E2\nL\x03L\x03L\x03L\x03L\x07L\u03E8\nL\fL\x0EL" +
        "\u03EB\vL\x03L\x03L\x03L\x05L\u03F0\nL\x03L\x03L\x05L\u03F4\nL\x03M\x03" +
        "M\x05M\u03F8\nM\x03M\x03M\x03M\x03M\x05M\u03FE\nM\x03N\x03N\x05N\u0402" +
        "\nN\x03O\x03O\x03O\x03O\x03O\x05O\u0409\nO\x03P\x03P\x03P\x05P\u040E\n" +
        "P\x03Q\x03Q\x05Q\u0412\nQ\x03R\x03R\x03R\x05R\u0417\nR\x03S\x03S\x03T" +
        "\x03T\x03T\x05T\u041E\nT\x03U\x03U\x03U\x02\x02\x02V\x02\x02\x04\x02\x06" +
        "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
        "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
        "2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
        "N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
        "j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
        "\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02" +
        "\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02" +
        "\xA8\x02\x02\x06\x03\x02P\\\x03\x02./\x03\x02&\'\x03\x02(+\x02\u0492\x02" +
        "\xAF\x03\x02\x02\x02\x04\xB5\x03\x02\x02\x02\x06\xBA\x03\x02\x02\x02\b" +
        "\xC3\x03\x02\x02\x02\n\xCF\x03\x02\x02\x02\f\xD3\x03\x02\x02\x02\x0E\xD8" +
        "\x03\x02\x02\x02\x10\xE2\x03\x02\x02\x02\x12\u0129\x03\x02\x02\x02\x14" +
        "\u012B\x03\x02\x02\x02\x16\u0171\x03\x02\x02\x02\x18\u0173\x03\x02\x02" +
        "\x02\x1A\u0177\x03\x02\x02\x02\x1C\u0179\x03\x02\x02\x02\x1E\u018E\x03" +
        "\x02\x02\x02 \u0190\x03\x02\x02\x02\"\u01A4\x03\x02\x02\x02$\u01B3\x03" +
        "\x02\x02\x02&\u01B5\x03\x02\x02\x02(\u01B8\x03\x02\x02\x02*\u01BF\x03" +
        "\x02\x02\x02,\u01C1\x03\x02\x02\x02.\u01C3\x03\x02\x02\x020\u01C5\x03" +
        "\x02\x02\x022\u01C9\x03\x02\x02\x024\u01CB\x03\x02\x02\x026\u01D5\x03" +
        "\x02\x02\x028\u01D7\x03\x02\x02\x02:\u01DA\x03\x02\x02\x02<\u01F2\x03" +
        "\x02\x02\x02>\u01F7\x03\x02\x02\x02@\u01FC\x03\x02\x02\x02B\u0207\x03" +
        "\x02\x02\x02D\u020F\x03\x02\x02\x02F\u0217\x03\x02\x02\x02H\u0220\x03" +
        "\x02\x02\x02J\u0229\x03\x02\x02\x02L\u0237\x03\x02\x02\x02N\u0239\x03" +
        "\x02\x02\x02P\u024C\x03\x02\x02\x02R\u0255\x03\x02\x02\x02T\u0260\x03" +
        "\x02\x02\x02V\u027A\x03\x02\x02\x02X\u0286\x03\x02\x02\x02Z\u028B\x03" +
        "\x02\x02\x02\\\u029D\x03\x02\x02\x02^\u02A8\x03\x02\x02\x02`\u02AC\x03" +
        "\x02\x02\x02b\u02AE\x03\x02\x02\x02d\u02B5\x03\x02\x02\x02f\u02BC\x03" +
        "\x02\x02\x02h\u02C4\x03\x02\x02\x02j\u02CF\x03\x02\x02\x02l\u02D1\x03" +
        "\x02\x02\x02n\u02E7\x03\x02\x02\x02p\u02EA\x03\x02\x02\x02r\u02EE\x03" +
        "\x02\x02\x02t\u02F6\x03\x02\x02\x02v\u02FE\x03\x02\x02\x02x\u0306\x03" +
        "\x02\x02\x02z\u0310\x03\x02\x02\x02|\u031A\x03\x02\x02\x02~\u0331\x03" +
        "\x02\x02\x02\x80\u0333\x03\x02\x02\x02\x82\u0359\x03\x02\x02\x02\x84\u035B" +
        "\x03\x02\x02\x02\x86\u0374\x03\x02\x02\x02\x88\u0376\x03\x02\x02\x02\x8A" +
        "\u038C\x03\x02\x02\x02\x8C\u038E\x03\x02\x02\x02\x8E\u0392\x03\x02\x02" +
        "\x02\x90\u039D\x03\x02\x02\x02\x92\u03C9\x03\x02\x02\x02\x94\u03CB\x03" +
        "\x02\x02\x02\x96\u03DC\x03\x02\x02\x02\x98\u03FD\x03\x02\x02\x02\x9A\u0401" +
        "\x03\x02\x02\x02\x9C\u0403\x03\x02\x02\x02\x9E\u040A\x03\x02\x02\x02\xA0" +
        "\u040F\x03\x02\x02\x02\xA2\u0416\x03\x02\x02\x02\xA4\u0418\x03\x02\x02" +
        "\x02\xA6\u041D\x03\x02\x02\x02\xA8\u041F\x03\x02\x02\x02\xAA\xB0\x07$" +
        "\x02\x02\xAB\xB0\x05\x1C\x0F\x02\xAC\xAD\x05L\'\x02\xAD\xAE\x07$\x02\x02" +
        "\xAE\xB0\x03\x02\x02\x02\xAF\xAA\x03\x02\x02\x02\xAF\xAB\x03\x02\x02\x02" +
        "\xAF\xAC\x03\x02\x02\x02\xB0\x03\x03\x02\x02\x02\xB1\xB4\x07$\x02\x02" +
        "\xB2\xB4\x05\x1A\x0E\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB2\x03\x02\x02\x02" +
        "\xB4\xB7\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02" +
        "\xB6\xB8\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB8\xB9\x07\x02\x02\x03" +
        "\xB9\x05\x03\x02\x02\x02\xBA\xBE\x05\x90I\x02\xBB\xBD\x07$\x02\x02\xBC" +
        "\xBB\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE" +
        "\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1" +
        "\xC2\x07\x02\x02\x03\xC2\x07\x03\x02\x02\x02\xC3\xC4\x07N\x02\x02\xC4" +
        "\xCA\x05D#\x02\xC5\xC7\x071\x02\x02\xC6\xC8\x05\x96L\x02\xC7\xC6\x03\x02" +
        "\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCB\x072" +
        "\x02\x02\xCA\xC5\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x03\x02" +
        "\x02\x02\xCC\xCD\x07$\x02\x02\xCD\t\x03\x02\x02\x02\xCE\xD0\x05\b\x05" +
        "\x02\xCF\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xCF\x03\x02\x02" +
        "\x02\xD1\xD2\x03\x02\x02\x02\xD2\v\x03\x02\x02\x02\xD3\xD6\x05\n\x06\x02" +
        "\xD4\xD7\x05\x94K\x02\xD5\xD7\x05\x0E\b\x02\xD6\xD4\x03\x02\x02\x02\xD6" +
        "\xD5\x03\x02\x02\x02\xD7\r\x03\x02\x02\x02\xD8\xD9\x07\x03\x02\x02\xD9" +
        "\xDA\x07%\x02\x02\xDA\xDD\x05\x10\t\x02\xDB\xDC\x07O\x02\x02\xDC\xDE\x05" +
        "^0\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF\x03\x02" +
        "\x02\x02\xDF\xE0\x074\x02\x02\xE0\xE1\x05\\/\x02\xE1\x0F\x03\x02\x02\x02" +
        "\xE2\xE4\x071\x02\x02\xE3\xE5\x05\x12\n\x02\xE4\xE3\x03\x02\x02\x02\xE4" +
        "\xE5\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x072\x02\x02\xE7" +
        "\x11\x03\x02\x02\x02\xE8\xEB\x05\x14\v\x02\xE9\xEA\x077\x02\x02\xEA\xEC" +
        "\x05^0\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xF5\x03" +
        "\x02\x02\x02\xED\xEE\x073\x02\x02\xEE\xF1\x05\x14\v\x02\xEF\xF0\x077\x02" +
        "\x02\xF0\xF2\x05^0\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02" +
        "\xF2\xF4\x03\x02\x02\x02\xF3\xED\x03\x02\x02\x02\xF4\xF7\x03\x02\x02\x02" +
        "\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\u0111\x03\x02\x02" +
        "\x02\xF7\xF5\x03\x02\x02\x02\xF8\u010F\x073\x02\x02\xF9\xFB\x070\x02\x02" +
        "\xFA\xFC\x05\x14\v\x02\xFB\xFA\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02" +
        "\xFC\u0105\x03\x02\x02\x02\xFD\xFE\x073\x02\x02\xFE\u0101\x05\x14\v\x02" +
        "\xFF\u0100\x077\x02\x02\u0100\u0102\x05^0\x02\u0101\xFF\x03\x02\x02\x02" +
        "\u0101\u0102\x03\x02\x02\x02\u0102\u0104\x03\x02\x02\x02\u0103\xFD\x03" +
        "\x02\x02\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0105" +
        "\u0106\x03\x02\x02\x02\u0106\u010B\x03\x02\x02\x02\u0107\u0105\x03\x02" +
        "\x02\x02\u0108\u0109\x073\x02\x02\u0109\u010A\x076\x02\x02\u010A\u010C" +
        "\x05\x14\v\x02\u010B\u0108\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02" +
        "\u010C\u0110\x03\x02\x02\x02\u010D\u010E\x076\x02\x02\u010E\u0110\x05" +
        "\x14\v\x02\u010F\xF9\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u010F" +
        "\u0110\x03\x02\x02\x02\u0110\u0112\x03\x02\x02\x02\u0111\xF8\x03\x02\x02" +
        "\x02\u0111\u0112\x03\x02\x02\x02\u0112\u012A\x03\x02\x02\x02\u0113\u0115" +
        "\x070\x02\x02\u0114\u0116\x05\x14\v\x02\u0115\u0114\x03\x02\x02\x02\u0115" +
        "\u0116\x03\x02\x02\x02\u0116\u011F\x03\x02\x02\x02\u0117\u0118\x073\x02" +
        "\x02\u0118\u011B\x05\x14\v\x02\u0119\u011A\x077\x02\x02\u011A\u011C\x05" +
        "^0\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011E" +
        "\x03\x02\x02\x02\u011D\u0117\x03\x02\x02\x02\u011E\u0121\x03\x02\x02\x02" +
        "\u011F\u011D\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0125\x03" +
        "\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0122\u0123\x073\x02\x02\u0123" +
        "\u0124\x076\x02\x02\u0124\u0126\x05\x14\v\x02\u0125\u0122\x03\x02\x02" +
        "\x02\u0125\u0126\x03\x02\x02\x02\u0126\u012A\x03\x02\x02\x02\u0127\u0128" +
        "\x076\x02\x02\u0128\u012A\x05\x14\v\x02\u0129\xE8\x03\x02\x02\x02\u0129" +
        "\u0113\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u012A\x13\x03\x02\x02" +
        "\x02\u012B\u012E\x07%\x02\x02\u012C\u012D\x074\x02\x02\u012D\u012F\x05" +
        "^0\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\x15" +
        "\x03\x02\x02\x02\u0130\u0133\x05\x18\r\x02\u0131\u0132\x077\x02\x02\u0132" +
        "\u0134\x05^0\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02" +
        "\u0134\u013D\x03\x02\x02\x02\u0135\u0136\x073\x02\x02\u0136\u0139\x05" +
        "\x18\r\x02\u0137\u0138\x077\x02\x02\u0138\u013A\x05^0\x02\u0139\u0137" +
        "\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013C\x03\x02\x02\x02" +
        "\u013B\u0135\x03\x02\x02\x02\u013C\u013F\x03\x02\x02\x02\u013D\u013B\x03" +
        "\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0159\x03\x02\x02\x02\u013F" +
        "\u013D\x03\x02\x02\x02\u0140\u0157\x073\x02\x02\u0141\u0143\x070\x02\x02" +
        "\u0142\u0144\x05\x18\r\x02\u0143\u0142\x03\x02\x02\x02\u0143\u0144\x03" +
        "\x02\x02\x02\u0144\u014D\x03\x02\x02\x02\u0145\u0146\x073\x02\x02\u0146" +
        "\u0149\x05\x18\r\x02\u0147\u0148\x077\x02\x02\u0148\u014A\x05^0\x02\u0149" +
        "\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014C\x03\x02" +
        "\x02\x02\u014B\u0145\x03\x02\x02\x02\u014C\u014F\x03\x02\x02\x02\u014D" +
        "\u014B\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u0153\x03\x02" +
        "\x02\x02\u014F\u014D\x03\x02\x02\x02\u0150\u0151\x073\x02\x02\u0151\u0152" +
        "\x076\x02\x02\u0152\u0154\x05\x18\r\x02\u0153\u0150\x03\x02\x02\x02\u0153" +
        "\u0154\x03\x02\x02\x02\u0154\u0158\x03\x02\x02\x02\u0155\u0156\x076\x02" +
        "\x02\u0156\u0158\x05\x18\r\x02\u0157\u0141\x03\x02\x02\x02\u0157\u0155" +
        "\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u015A\x03\x02\x02\x02" +
        "\u0159\u0140\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u0172\x03" +
        "\x02\x02\x02\u015B\u015D\x070\x02\x02\u015C\u015E\x05\x18\r\x02\u015D" +
        "\u015C\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0167\x03\x02" +
        "\x02\x02\u015F\u0160\x073\x02\x02\u0160\u0163\x05\x18\r\x02\u0161\u0162" +
        "\x077\x02\x02\u0162\u0164\x05^0\x02\u0163\u0161\x03\x02\x02\x02\u0163" +
        "\u0164\x03\x02\x02\x02\u0164\u0166\x03\x02\x02\x02\u0165\u015F\x03\x02" +
        "\x02\x02\u0166\u0169\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167" +
        "\u0168\x03\x02\x02\x02\u0168\u016D\x03\x02\x02\x02\u0169\u0167\x03\x02" +
        "\x02\x02\u016A\u016B\x073\x02\x02\u016B\u016C\x076\x02\x02\u016C\u016E" +
        "\x05\x18\r\x02\u016D\u016A\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02" +
        "\u016E\u0172\x03\x02\x02\x02\u016F\u0170\x076\x02\x02\u0170\u0172\x05" +
        "\x18\r\x02\u0171\u0130\x03\x02\x02\x02\u0171\u015B\x03\x02\x02\x02\u0171" +
        "\u016F\x03\x02\x02\x02\u0172\x17\x03\x02\x02\x02\u0173\u0174\x07%\x02" +
        "\x02\u0174\x19\x03\x02\x02\x02\u0175\u0178\x05\x1C\x0F\x02\u0176\u0178" +
        "\x05L\'\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0176\x03\x02\x02\x02\u0178" +
        "\x1B\x03\x02\x02\x02\u0179\u017E\x05\x1E\x10\x02\u017A\u017B\x075\x02" +
        "\x02\u017B\u017D\x05\x1E\x10\x02\u017C\u017A\x03\x02\x02\x02\u017D\u0180" +
        "\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02" +
        "\u017F\u0182\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0181\u0183\x07" +
        "5\x02\x02\u0182\u0181\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183" +
        "\u0184\x03\x02\x02\x02\u0184\u0185\x07$\x02\x02\u0185\x1D\x03\x02\x02" +
        "\x02\u0186\u018F\x05 \x11\x02\u0187\u018F\x05&\x14\x02\u0188\u018F\x05" +
        "(\x15\x02\u0189\u018F\x05*\x16\x02\u018A\u018F\x056\x1C\x02\u018B\u018F" +
        "\x05F$\x02\u018C\u018F\x05H%\x02\u018D\u018F\x05J&\x02\u018E\u0186\x03" +
        "\x02\x02\x02\u018E\u0187\x03\x02\x02\x02\u018E\u0188\x03\x02\x02\x02\u018E" +
        "\u0189\x03\x02\x02\x02\u018E\u018A\x03\x02\x02\x02\u018E\u018B\x03\x02" +
        "\x02\x02\u018E\u018C\x03\x02\x02\x02\u018E\u018D\x03\x02\x02\x02\u018F" +
        "\x1F\x03\x02\x02\x02\u0190\u01A0\x05\"\x12\x02\u0191\u0194\x05$\x13\x02" +
        "\u0192\u0195\x05\xA0Q\x02\u0193\u0195\x05\x90I\x02\u0194\u0192\x03\x02" +
        "\x02\x02\u0194\u0193\x03\x02\x02\x02\u0195\u01A1\x03\x02\x02\x02\u0196" +
        "\u0199\x077\x02\x02\u0197\u019A\x05\xA0Q\x02\u0198\u019A\x05\"\x12\x02" +
        "\u0199\u0197\x03\x02\x02\x02\u0199\u0198\x03\x02\x02\x02\u019A\u019C\x03" +
        "\x02\x02\x02\u019B\u0196\x03\x02\x02\x02\u019C\u019F\x03\x02\x02\x02\u019D" +
        "\u019B\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01A1\x03\x02" +
        "\x02\x02\u019F\u019D\x03\x02\x02\x02\u01A0\u0191\x03\x02\x02\x02\u01A0" +
        "\u019D\x03\x02\x02\x02\u01A1!\x03\x02\x02\x02\u01A2\u01A5\x05^0\x02\u01A3" +
        "\u01A5\x05p9\x02\u01A4\u01A2\x03\x02\x02\x02\u01A4\u01A3\x03\x02\x02\x02" +
        "\u01A5\u01AD\x03\x02\x02\x02\u01A6\u01A9\x073\x02\x02\u01A7\u01AA\x05" +
        "^0\x02\u01A8\u01AA\x05p9\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01A8\x03" +
        "\x02\x02\x02\u01AA\u01AC\x03\x02\x02\x02\u01AB\u01A6\x03\x02\x02\x02\u01AC" +
        "\u01AF\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AD\u01AE\x03\x02" +
        "\x02\x02\u01AE\u01B1\x03\x02\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01B0" +
        "\u01B2\x073\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02" +
        "\x02\u01B2#\x03\x02\x02\x02\u01B3\u01B4\t\x02\x02\x02\u01B4%\x03\x02\x02" +
        "\x02\u01B5\u01B6\x07 \x02\x02\u01B6\u01B7\x05\x8EH\x02\u01B7\'\x03\x02" +
        "\x02\x02";
    Python3Parser._serializedATNSegment1 = "\u01B8\u01B9\x07!\x02\x02\u01B9)\x03\x02\x02\x02\u01BA\u01C0\x05,\x17" +
        "\x02\u01BB\u01C0\x05.\x18\x02\u01BC\u01C0\x050\x19\x02\u01BD\u01C0\x05" +
        "4\x1B\x02\u01BE\u01C0\x052\x1A\x02\u01BF\u01BA\x03\x02\x02\x02\u01BF\u01BB" +
        "\x03\x02\x02\x02\u01BF\u01BC\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02" +
        "\u01BF\u01BE\x03\x02\x02\x02\u01C0+\x03\x02\x02\x02\u01C1\u01C2\x07#\x02" +
        "\x02\u01C2-\x03\x02\x02\x02\u01C3\u01C4\x07\"\x02\x02\u01C4/\x03\x02\x02" +
        "\x02\u01C5\u01C7\x07\x04\x02\x02\u01C6\u01C8\x05\x90I\x02\u01C7\u01C6" +
        "\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C81\x03\x02\x02\x02\u01C9" +
        "\u01CA\x05\xA0Q\x02\u01CA3\x03\x02\x02\x02\u01CB\u01D1\x07\x05\x02\x02" +
        "\u01CC\u01CF\x05^0\x02\u01CD\u01CE\x07\x06\x02\x02\u01CE\u01D0\x05^0\x02" +
        "\u01CF\u01CD\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D2\x03" +
        "\x02\x02\x02\u01D1\u01CC\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2" +
        "5\x03\x02\x02\x02\u01D3\u01D6\x058\x1D\x02\u01D4\u01D6\x05:\x1E\x02\u01D5" +
        "\u01D3\x03\x02\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D67\x03\x02\x02" +
        "\x02\u01D7\u01D8\x07\x07\x02\x02\u01D8\u01D9\x05B\"\x02\u01D99\x03\x02" +
        "\x02\x02\u01DA\u01E7\x07\x06\x02\x02\u01DB\u01DD\t\x03\x02\x02\u01DC\u01DB" +
        "\x03\x02\x02\x02\u01DD\u01E0\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02" +
        "\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E1\x03\x02\x02\x02\u01E0\u01DE\x03" +
        "\x02\x02\x02\u01E1\u01E8\x05D#\x02\u01E2\u01E4\t\x03\x02\x02\u01E3\u01E2" +
        "\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02" +
        "\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E8\x03\x02\x02\x02\u01E7\u01DE\x03" +
        "\x02\x02\x02\u01E7\u01E3\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9" +
        "\u01F0\x07\x07\x02\x02\u01EA\u01F1\x070\x02\x02\u01EB\u01EC\x071\x02\x02" +
        "\u01EC\u01ED\x05@!\x02\u01ED\u01EE\x072\x02\x02\u01EE\u01F1\x03\x02\x02" +
        "\x02\u01EF\u01F1\x05@!\x02\u01F0\u01EA\x03\x02\x02\x02\u01F0\u01EB\x03" +
        "\x02\x02\x02\u01F0\u01EF\x03\x02\x02\x02\u01F1;\x03\x02\x02\x02\u01F2" +
        "\u01F5\x07%\x02\x02\u01F3\u01F4\x07\b\x02\x02\u01F4\u01F6\x07%\x02\x02" +
        "\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6=\x03\x02" +
        "\x02\x02\u01F7\u01FA\x05D#\x02\u01F8\u01F9\x07\b\x02\x02\u01F9\u01FB\x07" +
        "%\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB" +
        "?\x03\x02\x02\x02\u01FC\u0201\x05<\x1F\x02\u01FD\u01FE\x073\x02\x02\u01FE" +
        "\u0200\x05<\x1F\x02\u01FF\u01FD\x03\x02\x02\x02\u0200\u0203\x03\x02\x02" +
        "\x02\u0201\u01FF\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0205" +
        "\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0204\u0206\x073\x02\x02" +
        "\u0205\u0204\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206A\x03\x02" +
        "\x02\x02\u0207\u020C\x05> \x02\u0208\u0209\x073\x02\x02\u0209\u020B\x05" +
        "> \x02\u020A\u0208\x03\x02\x02\x02\u020B\u020E\x03\x02\x02\x02\u020C\u020A" +
        "\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020DC\x03\x02\x02\x02\u020E" +
        "\u020C\x03\x02\x02\x02\u020F\u0214\x07%\x02\x02\u0210\u0211\x07.\x02\x02" +
        "\u0211\u0213\x07%\x02\x02\u0212\u0210\x03\x02\x02\x02\u0213\u0216\x03" +
        "\x02\x02\x02\u0214\u0212\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215" +
        "E\x03\x02\x02\x02\u0216\u0214\x03\x02\x02\x02\u0217\u0218\x07\t\x02\x02" +
        "\u0218\u021D\x07%\x02\x02\u0219\u021A\x073\x02\x02\u021A\u021C\x07%\x02" +
        "\x02\u021B\u0219\x03\x02\x02\x02\u021C\u021F\x03\x02\x02\x02\u021D\u021B" +
        "\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021EG\x03\x02\x02\x02\u021F" +
        "\u021D\x03\x02\x02\x02\u0220\u0221\x07\n\x02\x02\u0221\u0226\x07%\x02" +
        "\x02\u0222\u0223\x073\x02\x02\u0223\u0225\x07%\x02\x02\u0224\u0222\x03" +
        "\x02\x02\x02\u0225\u0228\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0226" +
        "\u0227\x03\x02\x02\x02\u0227I\x03\x02\x02\x02\u0228\u0226\x03\x02\x02" +
        "\x02\u0229\u022A\x07\v\x02\x02\u022A\u022D\x05^0\x02\u022B\u022C\x073" +
        "\x02\x02\u022C\u022E\x05^0\x02\u022D\u022B\x03\x02\x02\x02\u022D\u022E" +
        "\x03\x02\x02\x02\u022EK\x03\x02\x02\x02\u022F\u0238\x05N(\x02\u0230\u0238" +
        "\x05P)\x02\u0231\u0238\x05R*\x02\u0232\u0238\x05T+\x02\u0233\u0238\x05" +
        "V,\x02\u0234\u0238\x05\x0E\b\x02\u0235\u0238\x05\x94K\x02\u0236\u0238" +
        "\x05\f\x07\x02\u0237\u022F\x03\x02\x02\x02\u0237\u0230\x03\x02\x02\x02" +
        "\u0237\u0231\x03\x02\x02\x02\u0237\u0232\x03\x02\x02\x02\u0237\u0233\x03" +
        "\x02\x02\x02\u0237\u0234\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02\u0237" +
        "\u0236\x03\x02\x02\x02\u0238M\x03\x02\x02\x02\u0239\u023A\x07\f\x02\x02" +
        "\u023A\u023B\x05^0\x02\u023B\u023C\x074\x02\x02\u023C\u0244\x05\\/\x02" +
        "\u023D\u023E\x07\r\x02\x02\u023E\u023F\x05^0\x02\u023F\u0240\x074\x02" +
        "\x02\u0240\u0241\x05\\/\x02\u0241\u0243\x03\x02\x02\x02\u0242\u023D\x03" +
        "\x02\x02\x02\u0243\u0246\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0244" +
        "\u0245\x03\x02\x02\x02\u0245\u024A\x03\x02\x02\x02\u0246\u0244\x03\x02" +
        "\x02\x02\u0247\u0248\x07\x0E\x02\x02\u0248\u0249\x074\x02\x02\u0249\u024B" +
        "\x05\\/\x02\u024A\u0247\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B" +
        "O\x03\x02\x02\x02\u024C\u024D\x07\x0F\x02\x02\u024D\u024E\x05^0\x02\u024E" +
        "\u024F\x074\x02\x02\u024F\u0253\x05\\/\x02\u0250\u0251\x07\x0E\x02\x02" +
        "\u0251\u0252\x074\x02\x02\u0252\u0254\x05\\/\x02\u0253\u0250\x03\x02\x02" +
        "\x02\u0253\u0254\x03\x02\x02\x02\u0254Q\x03\x02\x02\x02\u0255\u0256\x07" +
        "\x10\x02\x02\u0256\u0257\x05\x8EH\x02\u0257\u0258\x07\x11\x02\x02\u0258" +
        "\u0259\x05\x90I\x02\u0259\u025A\x074\x02\x02\u025A\u025E\x05\\/\x02\u025B" +
        "\u025C\x07\x0E\x02\x02\u025C\u025D\x074\x02\x02\u025D\u025F\x05\\/\x02" +
        "\u025E\u025B\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025FS\x03\x02" +
        "\x02\x02\u0260\u0261\x07\x12\x02\x02\u0261\u0262\x074\x02\x02\u0262\u0278" +
        "\x05\\/\x02\u0263\u0264\x05Z.\x02\u0264\u0265\x074\x02\x02\u0265\u0266" +
        "\x05\\/\x02\u0266\u0268\x03\x02\x02\x02\u0267\u0263\x03\x02\x02\x02\u0268" +
        "\u0269\x03\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u0269\u026A\x03\x02" +
        "\x02\x02\u026A\u026E\x03\x02\x02\x02\u026B\u026C\x07\x0E\x02\x02\u026C" +
        "\u026D\x074\x02\x02\u026D\u026F\x05\\/\x02\u026E\u026B\x03\x02\x02\x02" +
        "\u026E\u026F\x03\x02\x02\x02\u026F\u0273\x03\x02\x02\x02\u0270\u0271\x07" +
        "\x13\x02\x02\u0271\u0272\x074\x02\x02\u0272\u0274\x05\\/\x02\u0273\u0270" +
        "\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0279\x03\x02\x02\x02" +
        "\u0275\u0276\x07\x13\x02\x02\u0276\u0277\x074\x02\x02\u0277\u0279\x05" +
        "\\/\x02\u0278\u0267\x03\x02\x02\x02\u0278\u0275\x03\x02\x02\x02\u0279" +
        "U\x03\x02\x02\x02\u027A\u027B\x07\x14\x02\x02\u027B\u0280\x05X-\x02\u027C" +
        "\u027D\x073\x02\x02\u027D\u027F\x05X-\x02\u027E\u027C\x03\x02\x02\x02" +
        "\u027F\u0282\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0280\u0281\x03" +
        "\x02\x02\x02\u0281\u0283\x03\x02\x02\x02\u0282\u0280\x03\x02\x02\x02\u0283" +
        "\u0284\x074\x02\x02\u0284\u0285\x05\\/\x02\u0285W\x03\x02\x02\x02\u0286" +
        "\u0289\x05^0\x02\u0287\u0288\x07\b\x02\x02\u0288\u028A\x05r:\x02\u0289" +
        "\u0287\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028AY\x03\x02\x02" +
        "\x02\u028B\u0291\x07\x15\x02\x02\u028C\u028F\x05^0\x02\u028D\u028E\x07" +
        "\b\x02\x02\u028E\u0290\x07%\x02\x02\u028F\u028D\x03\x02\x02\x02\u028F" +
        "\u0290\x03\x02\x02\x02\u0290\u0292\x03\x02\x02\x02\u0291\u028C\x03\x02" +
        "\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292[\x03\x02\x02\x02\u0293\u029E" +
        "\x05\x1C\x0F\x02\u0294\u0295\x07$\x02\x02\u0295\u0297\x07_\x02\x02\u0296" +
        "\u0298\x05\x1A\x0E\x02\u0297\u0296\x03\x02\x02\x02\u0298\u0299\x03\x02" +
        "\x02\x02\u0299\u0297\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A" +
        "\u029B\x03\x02\x02\x02\u029B\u029C\x07`\x02\x02\u029C\u029E\x03\x02\x02" +
        "\x02\u029D\u0293\x03\x02\x02\x02\u029D\u0294\x03\x02\x02\x02\u029E]\x03" +
        "\x02\x02\x02\u029F\u02A5\x05f4\x02\u02A0\u02A1\x07\f\x02\x02\u02A1\u02A2" +
        "\x05f4\x02\u02A2\u02A3\x07\x0E\x02\x02\u02A3\u02A4\x05^0\x02\u02A4\u02A6" +
        "\x03\x02\x02\x02\u02A5\u02A0\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02" +
        "\u02A6\u02A9\x03\x02\x02\x02\u02A7\u02A9\x05b2\x02\u02A8\u029F\x03\x02" +
        "\x02\x02\u02A8\u02A7\x03\x02\x02\x02\u02A9_\x03\x02\x02\x02\u02AA\u02AD" +
        "\x05f4\x02\u02AB\u02AD\x05d3\x02\u02AC\u02AA\x03\x02\x02\x02\u02AC\u02AB" +
        "\x03\x02\x02\x02\u02ADa\x03\x02\x02\x02\u02AE\u02B0\x07\x16\x02\x02\u02AF" +
        "\u02B1\x05\x16\f\x02\u02B0\u02AF\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02" +
        "\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02B3\x074\x02\x02\u02B3\u02B4" +
        "\x05^0\x02\u02B4c\x03\x02\x02\x02\u02B5\u02B7\x07\x16\x02\x02\u02B6\u02B8" +
        "\x05\x16\f\x02\u02B7\u02B6\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02" +
        "\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BA\x074\x02\x02\u02BA\u02BB\x05" +
        "`1\x02\u02BBe\x03\x02\x02\x02\u02BC\u02C1\x05h5\x02\u02BD\u02BE\x07\x17" +
        "\x02\x02\u02BE\u02C0\x05h5\x02\u02BF\u02BD\x03\x02\x02\x02\u02C0\u02C3" +
        "\x03\x02\x02\x02\u02C1\u02BF\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02" +
        "\u02C2g\x03\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C4\u02C9\x05j6" +
        "\x02\u02C5\u02C6\x07\x18\x02\x02\u02C6\u02C8\x05j6\x02\u02C7\u02C5\x03" +
        "\x02\x02\x02\u02C8\u02CB\x03\x02\x02\x02\u02C9\u02C7\x03\x02\x02\x02\u02C9" +
        "\u02CA\x03\x02\x02\x02\u02CAi\x03\x02\x02\x02\u02CB\u02C9\x03\x02\x02" +
        "\x02\u02CC\u02CD\x07\x19\x02\x02\u02CD\u02D0\x05j6\x02\u02CE\u02D0\x05" +
        "l7\x02\u02CF\u02CC\x03\x02\x02\x02\u02CF\u02CE\x03\x02\x02\x02\u02D0k" +
        "\x03\x02\x02\x02\u02D1\u02D7\x05p9\x02\u02D2\u02D3\x05n8\x02\u02D3\u02D4" +
        "\x05p9\x02\u02D4\u02D6\x03\x02\x02\x02\u02D5\u02D2\x03\x02\x02\x02\u02D6" +
        "\u02D9\x03\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02\u02D7\u02D8\x03\x02" +
        "\x02\x02\u02D8m\x03\x02\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02DA\u02E8" +
        "\x07G\x02\x02\u02DB\u02E8\x07H\x02\x02\u02DC\u02E8\x07I\x02\x02\u02DD" +
        "\u02E8\x07J\x02\x02\u02DE\u02E8\x07K\x02\x02\u02DF\u02E8\x07L\x02\x02" +
        "\u02E0\u02E8\x07M\x02\x02\u02E1\u02E8\x07\x11\x02\x02\u02E2\u02E3\x07" +
        "\x19\x02\x02\u02E3\u02E8\x07\x11\x02\x02\u02E4\u02E8\x07\x1A\x02\x02\u02E5" +
        "\u02E6\x07\x1A\x02\x02\u02E6\u02E8\x07\x19\x02\x02\u02E7\u02DA\x03\x02" +
        "\x02\x02\u02E7\u02DB\x03\x02\x02\x02\u02E7\u02DC\x03\x02\x02\x02\u02E7" +
        "\u02DD\x03\x02\x02\x02\u02E7\u02DE\x03\x02\x02\x02\u02E7\u02DF\x03\x02" +
        "\x02\x02\u02E7\u02E0\x03\x02\x02\x02\u02E7\u02E1\x03\x02\x02\x02\u02E7" +
        "\u02E2\x03\x02\x02\x02\u02E7\u02E4\x03\x02\x02\x02\u02E7\u02E5\x03\x02" +
        "\x02\x02\u02E8o\x03\x02\x02\x02\u02E9\u02EB\x070\x02\x02\u02EA\u02E9\x03" +
        "\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC" +
        "\u02ED\x05r:\x02\u02EDq\x03\x02\x02\x02\u02EE\u02F3\x05t;\x02\u02EF\u02F0" +
        "\x07:\x02\x02\u02F0\u02F2\x05t;\x02\u02F1\u02EF\x03\x02\x02\x02\u02F2" +
        "\u02F5\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F3\u02F4\x03\x02" +
        "\x02\x02\u02F4s\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F6\u02FB" +
        "\x05v<\x02\u02F7\u02F8\x07;\x02\x02\u02F8\u02FA\x05v<\x02\u02F9\u02F7" +
        "\x03\x02\x02\x02\u02FA\u02FD\x03\x02\x02\x02\u02FB\u02F9\x03\x02\x02\x02" +
        "\u02FB\u02FC\x03\x02\x02\x02\u02FCu\x03\x02\x02\x02\u02FD\u02FB\x03\x02" +
        "\x02\x02\u02FE\u0303\x05x=\x02\u02FF\u0300\x07<\x02\x02\u0300\u0302\x05" +
        "x=\x02\u0301\u02FF\x03\x02\x02\x02\u0302\u0305\x03\x02\x02\x02\u0303\u0301" +
        "\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304w\x03\x02\x02\x02\u0305" +
        "\u0303\x03\x02\x02\x02\u0306\u030D\x05z>\x02\u0307\u0308\x07=\x02\x02" +
        "\u0308\u030C\x05z>\x02\u0309\u030A\x07>\x02\x02\u030A\u030C\x05z>\x02" +
        "\u030B\u0307\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02\u030C\u030F\x03" +
        "\x02\x02\x02\u030D\u030B\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E" +
        "y\x03\x02\x02\x02\u030F\u030D\x03\x02\x02\x02\u0310\u0317\x05|?\x02\u0311" +
        "\u0312\x07?\x02\x02\u0312\u0316\x05|?\x02\u0313\u0314\x07@\x02\x02\u0314" +
        "\u0316\x05|?\x02\u0315\u0311\x03\x02\x02\x02\u0315\u0313\x03\x02\x02\x02" +
        "\u0316\u0319\x03\x02\x02\x02\u0317\u0315\x03\x02\x02\x02\u0317\u0318\x03" +
        "\x02\x02\x02\u0318{\x03\x02\x02\x02\u0319\u0317\x03\x02\x02\x02\u031A" +
        "\u0327\x05~@\x02\u031B\u031C\x070\x02\x02\u031C\u0326\x05~@\x02\u031D" +
        "\u031E\x07A\x02\x02\u031E\u0326\x05~@\x02\u031F\u0320\x07B\x02\x02\u0320" +
        "\u0326\x05~@\x02\u0321\u0322\x07C\x02\x02\u0322\u0326\x05~@\x02\u0323" +
        "\u0324\x07N\x02\x02\u0324\u0326\x05~@\x02\u0325\u031B\x03\x02\x02\x02" +
        "\u0325\u031D\x03\x02\x02\x02\u0325\u031F\x03\x02\x02\x02\u0325\u0321\x03" +
        "\x02\x02\x02\u0325\u0323\x03\x02\x02\x02\u0326\u0329\x03\x02\x02\x02\u0327" +
        "\u0325\x03\x02\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328}\x03\x02\x02" +
        "\x02\u0329\u0327\x03\x02\x02\x02\u032A\u032B\x07?\x02\x02\u032B\u0332" +
        "\x05~@\x02\u032C\u032D\x07@\x02\x02\u032D\u0332\x05~@\x02\u032E\u032F" +
        "\x07D\x02\x02\u032F\u0332\x05~@\x02\u0330\u0332\x05\x80A\x02\u0331\u032A" +
        "\x03\x02\x02\x02\u0331\u032C\x03\x02\x02\x02\u0331\u032E\x03\x02\x02\x02" +
        "\u0331\u0330\x03\x02\x02\x02\u0332\x7F\x03\x02\x02\x02\u0333\u0337\x05" +
        "\x82B\x02\u0334\u0336\x05\x86D\x02\u0335\u0334\x03\x02\x02\x02\u0336\u0339" +
        "\x03\x02\x02\x02\u0337\u0335\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02" +
        "\u0338\u033C\x03\x02\x02\x02\u0339\u0337\x03\x02\x02\x02\u033A\u033B\x07" +
        "6\x02\x02\u033B\u033D\x05~@\x02\u033C\u033A\x03\x02\x02\x02\u033C\u033D" +
        "\x03\x02\x02\x02\u033D\x81\x03\x02\x02\x02\u033E\u0341\x071\x02\x02\u033F" +
        "\u0342\x05\xA0Q\x02\u0340\u0342\x05\x84C\x02\u0341\u033F\x03\x02\x02\x02" +
        "\u0341\u0340\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0343\x03" +
        "\x02\x02\x02\u0343\u035A\x072\x02\x02\u0344\u0346\x078\x02\x02\u0345\u0347" +
        "\x05\x84C\x02\u0346\u0345\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02" +
        "\u0347\u0348\x03\x02\x02\x02\u0348\u035A\x079\x02\x02\u0349\u034B\x07" +
        "E\x02\x02\u034A\u034C\x05\x92J\x02\u034B\u034A\x03\x02\x02\x02\u034B\u034C" +
        "\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u035A\x07F\x02\x02" +
        "\u034E\u035A\x07%\x02\x02\u034F\u035A\x05\xA6T\x02\u0350\u0352\x05\xA4" +
        "S\x02\u0351\u0350\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353\u0351" +
        "\x03\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354\u035A\x03\x02\x02\x02" +
        "\u0355\u035A\x07/\x02\x02\u0356\u035A\x07\x1B\x02\x02\u0357\u035A\x07" +
        "\x1C\x02\x02\u0358\u035A\x07\x1D\x02\x02\u0359\u033E\x03\x02\x02\x02\u0359" +
        "\u0344\x03\x02\x02\x02\u0359\u0349\x03\x02\x02\x02\u0359\u034E\x03\x02" +
        "\x02\x02\u0359\u034F\x03\x02\x02\x02\u0359\u0351\x03\x02\x02\x02\u0359" +
        "\u0355\x03\x02\x02\x02\u0359\u0356\x03\x02\x02\x02\u0359\u0357\x03\x02" +
        "\x02\x02\u0359\u0358\x03\x02\x02\x02\u035A\x83\x03\x02\x02\x02\u035B\u0367" +
        "\x05^0\x02\u035C\u0368\x05\x9CO\x02\u035D\u035E\x073\x02\x02\u035E\u0360" +
        "\x05^0\x02\u035F\u035D\x03\x02\x02\x02\u0360\u0363\x03\x02\x02\x02\u0361" +
        "\u035F\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02\u0362\u0365\x03\x02" +
        "\x02\x02\u0363\u0361\x03\x02\x02\x02\u0364\u0366\x073\x02\x02\u0365\u0364" +
        "\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0368\x03\x02\x02\x02" +
        "\u0367\u035C\x03\x02\x02\x02\u0367\u0361\x03\x02\x02\x02\u0368\x85\x03" +
        "\x02\x02\x02\u0369\u036B\x071\x02\x02\u036A\u036C\x05\x96L\x02\u036B\u036A" +
        "\x03\x02\x02\x02\u036B\u036C\x03\x02\x02\x02\u036C\u036D\x03\x02\x02\x02" +
        "\u036D\u0375\x072\x02\x02\u036E\u036F\x078\x02\x02\u036F\u0370\x05\x88" +
        "E\x02\u0370\u0371\x079\x02\x02\u0371\u0375\x03\x02\x02\x02\u0372\u0373" +
        "\x07.\x02\x02\u0373\u0375\x07%\x02\x02\u0374\u0369\x03\x02\x02\x02\u0374" +
        "\u036E\x03\x02\x02\x02\u0374\u0372\x03\x02\x02\x02\u0375\x87\x03\x02\x02" +
        "\x02\u0376\u037B\x05\x8AF\x02\u0377\u0378\x073\x02\x02\u0378\u037A\x05" +
        "\x8AF\x02\u0379\u0377\x03\x02\x02\x02\u037A\u037D\x03\x02\x02\x02\u037B" +
        "\u0379\x03\x02\x02\x02\u037B\u037C\x03\x02\x02\x02\u037C\u037F\x03\x02" +
        "\x02\x02\u037D\u037B\x03\x02\x02\x02\u037E\u0380\x073\x02\x02\u037F\u037E" +
        "\x03\x02\x02\x02\u037F\u0380\x03\x02\x02\x02\u0380\x89\x03\x02\x02\x02" +
        "\u0381\u038D\x05^0\x02\u0382\u0384\x05^0\x02\u0383\u0382\x03\x02\x02\x02" +
        "\u0383\u0384\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385\u0387\x07" +
        "4\x02\x02\u0386\u0388\x05^0\x02\u0387\u0386\x03\x02\x02\x02\u0387\u0388" +
        "\x03\x02\x02\x02\u0388\u038A\x03\x02\x02\x02\u0389\u038B\x05\x8CG\x02" +
        "\u038A\u0389\x03\x02\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B\u038D\x03" +
        "\x02\x02\x02\u038C\u0381\x03\x02\x02\x02\u038C\u0383\x03\x02\x02\x02\u038D" +
        "\x8B\x03\x02\x02\x02\u038E\u0390\x074\x02\x02\u038F\u0391\x05^0\x02\u0390" +
        "\u038F\x03\x02\x02\x02\u0390\u0391\x03\x02\x02\x02\u0391\x8D\x03\x02\x02" +
        "\x02\u0392\u0397\x05p9\x02\u0393\u0394\x073\x02\x02\u0394\u0396\x05p9" +
        "\x02\u0395\u0393\x03\x02\x02\x02\u0396\u0399\x03\x02\x02\x02\u0397\u0395" +
        "\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u039B\x03\x02\x02\x02" +
        "\u0399\u0397\x03\x02\x02\x02\u039A\u039C\x073\x02\x02\u039B\u039A\x03" +
        "\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\x8F\x03\x02\x02\x02\u039D" +
        "\u03A2\x05^0\x02\u039E\u039F\x073\x02\x02\u039F\u03A1\x05^0\x02\u03A0" +
        "\u039E\x03\x02\x02\x02\u03A1\u03A4\x03\x02\x02\x02\u03A2\u03A0\x03\x02" +
        "\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3\u03A6\x03\x02\x02\x02\u03A4" +
        "\u03A2\x03\x02\x02\x02\u03A5\u03A7\x073\x02\x02\u03A6\u03A5\x03\x02\x02" +
        "\x02\u03A6\u03A7\x03\x02\x02\x02\u03A7\x91\x03\x02\x02\x02\u03A8\u03A9" +
        "\x05^0\x02\u03A9\u03AA\x074\x02\x02\u03AA\u03B9\x05^0\x02\u03AB\u03BA" +
        "\x05\x9CO\x02\u03AC\u03AD\x073\x02\x02\u03AD\u03AE\x05^0\x02\u03AE\u03AF" +
        "\x074\x02\x02\u03AF\u03B0\x05^0\x02\u03B0\u03B2\x03\x02\x02\x02\u03B1" +
        "\u03AC\x03\x02\x02\x02\u03B2\u03B5\x03\x02\x02\x02\u03B3\u03B1\x03\x02" +
        "\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B7\x03\x02\x02\x02\u03B5" +
        "\u03B3\x03\x02\x02\x02\u03B6\u03B8\x073\x02\x02\u03B7\u03B6\x03\x02\x02" +
        "\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8\u03BA\x03\x02\x02\x02\u03B9\u03AB" +
        "\x03\x02\x02\x02\u03B9\u03B3\x03\x02\x02\x02\u03BA\u03CA\x03\x02\x02\x02" +
        "\u03BB\u03C7\x05^0\x02\u03BC\u03C8\x05\x9CO\x02\u03BD\u03BE\x073\x02\x02" +
        "\u03BE\u03C0\x05^0\x02\u03BF\u03BD\x03\x02\x02\x02\u03C0\u03C3\x03\x02" +
        "\x02\x02\u03C1\u03BF\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2" +
        "\u03C5\x03\x02\x02\x02\u03C3\u03C1\x03\x02\x02\x02\u03C4\u03C6\x073\x02" +
        "\x02\u03C5\u03C4\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02\x02\u03C6\u03C8" +
        "\x03\x02\x02\x02\u03C7\u03BC\x03\x02\x02\x02\u03C7\u03C1\x03\x02\x02\x02" +
        "\u03C8\u03CA\x03\x02\x02\x02\u03C9\u03A8\x03\x02\x02\x02\u03C9\u03BB\x03" +
        "\x02\x02\x02\u03CA\x93\x03\x02\x02\x02\u03CB\u03CC\x07\x1E\x02\x02\u03CC" +
        "\u03D2\x07%\x02\x02\u03CD\u03CF\x071\x02\x02\u03CE\u03D0\x05\x96L\x02" +
        "\u03CF\u03CE\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02\u03D0\u03D1\x03" +
        "\x02\x02\x02\u03D1\u03D3\x072\x02\x02\u03D2\u03CD\x03\x02\x02\x02\u03D2" +
        "\u03D3\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02\u03D4\u03D5\x074\x02" +
        "\x02\u03D5\u03D6\x05\\/\x02\u03D6\x95\x03\x02\x02\x02\u03D7\u03D8\x05" +
        "\x98M\x02\u03D8\u03D9\x073\x02\x02\u03D9\u03DB\x03\x02\x02\x02\u03DA\u03D7" +
        "\x03\x02\x02\x02\u03DB\u03DE\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02" +
        "\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03F3\x03\x02\x02\x02\u03DE\u03DC\x03" +
        "\x02\x02\x02\u03DF\u03E1\x05\x98M\x02\u03E0\u03E2\x073\x02\x02\u03E1\u03E0" +
        "\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03F4\x03\x02\x02\x02" +
        "\u03E3\u03E4\x070\x02\x02\u03E4\u03E9\x05^0\x02\u03E5\u03E6\x073\x02\x02" +
        "\u03E6\u03E8\x05\x98M\x02\u03E7\u03E5\x03\x02\x02\x02\u03E8\u03EB\x03" +
        "\x02\x02\x02\u03E9\u03E7\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02\u03EA" +
        "\u03EF\x03\x02\x02\x02\u03EB\u03E9\x03\x02\x02\x02\u03EC\u03ED\x073\x02" +
        "\x02\u03ED\u03EE\x076\x02\x02\u03EE\u03F0\x05^0\x02\u03EF\u03EC\x03\x02" +
        "\x02\x02\u03EF\u03F0\x03\x02\x02\x02\u03F0\u03F4\x03\x02\x02\x02\u03F1" +
        "\u03F2\x076\x02\x02\u03F2\u03F4\x05^0\x02\u03F3\u03DF\x03\x02\x02\x02" +
        "\u03F3\u03E3\x03\x02\x02\x02\u03F3\u03F1\x03\x02\x02\x02\u03F4\x97\x03" +
        "\x02\x02\x02\u03F5\u03F7\x05^0\x02\u03F6\u03F8\x05\x9CO\x02\u03F7\u03F6" +
        "\x03\x02\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8\u03FE\x03\x02\x02\x02" +
        "\u03F9\u03FA\x05^0\x02\u03FA\u03FB\x077\x02\x02\u03FB\u03FC\x05^0\x02" +
        "\u03FC\u03FE\x03\x02\x02\x02\u03FD\u03F5\x03\x02\x02\x02\u03FD\u03F9\x03" +
        "\x02\x02\x02\u03FE\x99\x03\x02\x02\x02\u03FF\u0402\x05\x9CO\x02\u0400" +
        "\u0402\x05\x9EP\x02\u0401\u03FF\x03\x02\x02\x02\u0401\u0400\x03\x02\x02" +
        "\x02\u0402\x9B\x03\x02\x02\x02\u0403\u0404\x07\x10\x02\x02\u0404\u0405" +
        "\x05\x8EH\x02\u0405\u0406\x07\x11\x02\x02\u0406\u0408\x05f4\x02\u0407" +
        "\u0409\x05\x9AN\x02\u0408\u0407\x03\x02\x02\x02\u0408\u0409\x03\x02\x02" +
        "\x02\u0409\x9D\x03\x02\x02\x02\u040A\u040B\x07\f\x02\x02\u040B\u040D\x05" +
        "`1\x02\u040C\u040E\x05\x9AN\x02\u040D\u040C\x03\x02\x02\x02\u040D\u040E" +
        "\x03\x02\x02\x02\u040E\x9F\x03\x02\x02\x02\u040F\u0411\x07\x1F\x02\x02" +
        "\u0410\u0412\x05\xA2R\x02\u0411\u0410\x03\x02\x02\x02\u0411\u0412\x03" +
        "\x02\x02\x02\u0412\xA1\x03\x02\x02\x02\u0413\u0414\x07\x06\x02\x02\u0414" +
        "\u0417\x05^0\x02\u0415\u0417\x05\x90I\x02\u0416\u0413\x03\x02\x02\x02" +
        "\u0416\u0415\x03\x02\x02\x02\u0417\xA3\x03\x02\x02\x02\u0418\u0419\t\x04" +
        "\x02\x02\u0419\xA5\x03\x02\x02\x02\u041A\u041E\x05\xA8U\x02\u041B\u041E" +
        "\x07,\x02\x02\u041C\u041E\x07-\x02\x02\u041D\u041A\x03\x02\x02\x02\u041D" +
        "\u041B\x03\x02\x02\x02\u041D\u041C\x03\x02\x02\x02\u041E\xA7\x03\x02\x02" +
        "\x02\u041F\u0420\t\x05\x02\x02\u0420\xA9\x03\x02\x02\x02\x98\xAF\xB3\xB5" +
        "\xBE\xC7\xCA\xD1\xD6\xDD\xE4\xEB\xF1\xF5\xFB\u0101\u0105\u010B\u010F\u0111" +
        "\u0115\u011B\u011F\u0125\u0129\u012E\u0133\u0139\u013D\u0143\u0149\u014D" +
        "\u0153\u0157\u0159\u015D\u0163\u0167\u016D\u0171\u0177\u017E\u0182\u018E" +
        "\u0194\u0199\u019D\u01A0\u01A4\u01A9\u01AD\u01B1\u01BF\u01C7\u01CF\u01D1" +
        "\u01D5\u01DE\u01E5\u01E7\u01F0\u01F5\u01FA\u0201\u0205\u020C\u0214\u021D" +
        "\u0226\u022D\u0237\u0244\u024A\u0253\u025E\u0269\u026E\u0273\u0278\u0280" +
        "\u0289\u028F\u0291\u0299\u029D\u02A5\u02A8\u02AC\u02B0\u02B7\u02C1\u02C9" +
        "\u02CF\u02D7\u02E7\u02EA\u02F3\u02FB\u0303\u030B\u030D\u0315\u0317\u0325" +
        "\u0327\u0331\u0337\u033C\u0341\u0346\u034B\u0353\u0359\u0361\u0365\u0367" +
        "\u036B\u0374\u037B\u037F\u0383\u0387\u038A\u038C\u0390\u0397\u039B\u03A2" +
        "\u03A6\u03B3\u03B7\u03B9\u03C1\u03C5\u03C7\u03C9\u03CF\u03D2\u03DC\u03E1" +
        "\u03E9\u03EF\u03F3\u03F7\u03FD\u0401\u0408\u040D\u0411\u0416\u041D";
    Python3Parser._serializedATN = Utils.join([
        Python3Parser._serializedATNSegment0,
        Python3Parser._serializedATNSegment1,
    ], "");
    return Python3Parser;
}(Parser_1.Parser));
exports.Python3Parser = Python3Parser;
var Single_inputContext = /** @class */ (function (_super) {
    __extends(Single_inputContext, _super);
    function Single_inputContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Single_inputContext.prototype.NEWLINE = function () { return this.tryGetToken(Python3Parser.NEWLINE, 0); };
    Single_inputContext.prototype.simple_stmt = function () {
        return this.tryGetRuleContext(0, Simple_stmtContext);
    };
    Single_inputContext.prototype.compound_stmt = function () {
        return this.tryGetRuleContext(0, Compound_stmtContext);
    };
    Object.defineProperty(Single_inputContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_single_input; },
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
    File_inputContext.prototype.EOF = function () { return this.getToken(Python3Parser.EOF, 0); };
    File_inputContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.NEWLINE);
        }
        else {
            return this.getToken(Python3Parser.NEWLINE, i);
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
        get: function () { return Python3Parser.RULE_file_input; },
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
    Eval_inputContext.prototype.EOF = function () { return this.getToken(Python3Parser.EOF, 0); };
    Eval_inputContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.NEWLINE);
        }
        else {
            return this.getToken(Python3Parser.NEWLINE, i);
        }
    };
    Object.defineProperty(Eval_inputContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_eval_input; },
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
    DecoratorContext.prototype.AT = function () { return this.getToken(Python3Parser.AT, 0); };
    DecoratorContext.prototype.dotted_name = function () {
        return this.getRuleContext(0, Dotted_nameContext);
    };
    DecoratorContext.prototype.NEWLINE = function () { return this.getToken(Python3Parser.NEWLINE, 0); };
    DecoratorContext.prototype.OPEN_PAREN = function () { return this.tryGetToken(Python3Parser.OPEN_PAREN, 0); };
    DecoratorContext.prototype.CLOSE_PAREN = function () { return this.tryGetToken(Python3Parser.CLOSE_PAREN, 0); };
    DecoratorContext.prototype.arglist = function () {
        return this.tryGetRuleContext(0, ArglistContext);
    };
    Object.defineProperty(DecoratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_decorator; },
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
        get: function () { return Python3Parser.RULE_decorators; },
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
        get: function () { return Python3Parser.RULE_decorated; },
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
    FuncdefContext.prototype.DEF = function () { return this.getToken(Python3Parser.DEF, 0); };
    FuncdefContext.prototype.NAME = function () { return this.getToken(Python3Parser.NAME, 0); };
    FuncdefContext.prototype.parameters = function () {
        return this.getRuleContext(0, ParametersContext);
    };
    FuncdefContext.prototype.COLON = function () { return this.getToken(Python3Parser.COLON, 0); };
    FuncdefContext.prototype.suite = function () {
        return this.getRuleContext(0, SuiteContext);
    };
    FuncdefContext.prototype.ARROW = function () { return this.tryGetToken(Python3Parser.ARROW, 0); };
    FuncdefContext.prototype.test = function () {
        return this.tryGetRuleContext(0, TestContext);
    };
    Object.defineProperty(FuncdefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_funcdef; },
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
    ParametersContext.prototype.OPEN_PAREN = function () { return this.getToken(Python3Parser.OPEN_PAREN, 0); };
    ParametersContext.prototype.CLOSE_PAREN = function () { return this.getToken(Python3Parser.CLOSE_PAREN, 0); };
    ParametersContext.prototype.typedargslist = function () {
        return this.tryGetRuleContext(0, TypedargslistContext);
    };
    Object.defineProperty(ParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_parameters; },
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
            return this.getTokens(Python3Parser.ASSIGN);
        }
        else {
            return this.getToken(Python3Parser.ASSIGN, i);
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
            return this.getTokens(Python3Parser.COMMA);
        }
        else {
            return this.getToken(Python3Parser.COMMA, i);
        }
    };
    TypedargslistContext.prototype.STAR = function () { return this.tryGetToken(Python3Parser.STAR, 0); };
    TypedargslistContext.prototype.POWER = function () { return this.tryGetToken(Python3Parser.POWER, 0); };
    Object.defineProperty(TypedargslistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_typedargslist; },
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
    TfpdefContext.prototype.NAME = function () { return this.getToken(Python3Parser.NAME, 0); };
    TfpdefContext.prototype.COLON = function () { return this.tryGetToken(Python3Parser.COLON, 0); };
    TfpdefContext.prototype.test = function () {
        return this.tryGetRuleContext(0, TestContext);
    };
    Object.defineProperty(TfpdefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_tfpdef; },
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
            return this.getTokens(Python3Parser.ASSIGN);
        }
        else {
            return this.getToken(Python3Parser.ASSIGN, i);
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
            return this.getTokens(Python3Parser.COMMA);
        }
        else {
            return this.getToken(Python3Parser.COMMA, i);
        }
    };
    VarargslistContext.prototype.STAR = function () { return this.tryGetToken(Python3Parser.STAR, 0); };
    VarargslistContext.prototype.POWER = function () { return this.tryGetToken(Python3Parser.POWER, 0); };
    Object.defineProperty(VarargslistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_varargslist; },
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
    VfpdefContext.prototype.NAME = function () { return this.getToken(Python3Parser.NAME, 0); };
    Object.defineProperty(VfpdefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_vfpdef; },
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
        get: function () { return Python3Parser.RULE_stmt; },
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
    Simple_stmtContext.prototype.NEWLINE = function () { return this.getToken(Python3Parser.NEWLINE, 0); };
    Simple_stmtContext.prototype.SEMI_COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.SEMI_COLON);
        }
        else {
            return this.getToken(Python3Parser.SEMI_COLON, i);
        }
    };
    Object.defineProperty(Simple_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_simple_stmt; },
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
        get: function () { return Python3Parser.RULE_small_stmt; },
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
            return this.getTokens(Python3Parser.ASSIGN);
        }
        else {
            return this.getToken(Python3Parser.ASSIGN, i);
        }
    };
    Object.defineProperty(Expr_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_expr_stmt; },
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
            return this.getTokens(Python3Parser.COMMA);
        }
        else {
            return this.getToken(Python3Parser.COMMA, i);
        }
    };
    Object.defineProperty(Testlist_star_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_testlist_star_expr; },
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
    AugassignContext.prototype.ADD_ASSIGN = function () { return this.tryGetToken(Python3Parser.ADD_ASSIGN, 0); };
    AugassignContext.prototype.SUB_ASSIGN = function () { return this.tryGetToken(Python3Parser.SUB_ASSIGN, 0); };
    AugassignContext.prototype.MULT_ASSIGN = function () { return this.tryGetToken(Python3Parser.MULT_ASSIGN, 0); };
    AugassignContext.prototype.AT_ASSIGN = function () { return this.tryGetToken(Python3Parser.AT_ASSIGN, 0); };
    AugassignContext.prototype.DIV_ASSIGN = function () { return this.tryGetToken(Python3Parser.DIV_ASSIGN, 0); };
    AugassignContext.prototype.MOD_ASSIGN = function () { return this.tryGetToken(Python3Parser.MOD_ASSIGN, 0); };
    AugassignContext.prototype.AND_ASSIGN = function () { return this.tryGetToken(Python3Parser.AND_ASSIGN, 0); };
    AugassignContext.prototype.OR_ASSIGN = function () { return this.tryGetToken(Python3Parser.OR_ASSIGN, 0); };
    AugassignContext.prototype.XOR_ASSIGN = function () { return this.tryGetToken(Python3Parser.XOR_ASSIGN, 0); };
    AugassignContext.prototype.LEFT_SHIFT_ASSIGN = function () { return this.tryGetToken(Python3Parser.LEFT_SHIFT_ASSIGN, 0); };
    AugassignContext.prototype.RIGHT_SHIFT_ASSIGN = function () { return this.tryGetToken(Python3Parser.RIGHT_SHIFT_ASSIGN, 0); };
    AugassignContext.prototype.POWER_ASSIGN = function () { return this.tryGetToken(Python3Parser.POWER_ASSIGN, 0); };
    AugassignContext.prototype.IDIV_ASSIGN = function () { return this.tryGetToken(Python3Parser.IDIV_ASSIGN, 0); };
    Object.defineProperty(AugassignContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_augassign; },
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
    Del_stmtContext.prototype.DEL = function () { return this.getToken(Python3Parser.DEL, 0); };
    Del_stmtContext.prototype.exprlist = function () {
        return this.getRuleContext(0, ExprlistContext);
    };
    Object.defineProperty(Del_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_del_stmt; },
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
    Pass_stmtContext.prototype.PASS = function () { return this.getToken(Python3Parser.PASS, 0); };
    Object.defineProperty(Pass_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_pass_stmt; },
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
        get: function () { return Python3Parser.RULE_flow_stmt; },
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
    Break_stmtContext.prototype.BREAK = function () { return this.getToken(Python3Parser.BREAK, 0); };
    Object.defineProperty(Break_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_break_stmt; },
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
    Continue_stmtContext.prototype.CONTINUE = function () { return this.getToken(Python3Parser.CONTINUE, 0); };
    Object.defineProperty(Continue_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_continue_stmt; },
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
    Return_stmtContext.prototype.RETURN = function () { return this.getToken(Python3Parser.RETURN, 0); };
    Return_stmtContext.prototype.testlist = function () {
        return this.tryGetRuleContext(0, TestlistContext);
    };
    Object.defineProperty(Return_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_return_stmt; },
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
        get: function () { return Python3Parser.RULE_yield_stmt; },
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
    Raise_stmtContext.prototype.RAISE = function () { return this.getToken(Python3Parser.RAISE, 0); };
    Raise_stmtContext.prototype.test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TestContext);
        }
        else {
            return this.getRuleContext(i, TestContext);
        }
    };
    Raise_stmtContext.prototype.FROM = function () { return this.tryGetToken(Python3Parser.FROM, 0); };
    Object.defineProperty(Raise_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_raise_stmt; },
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
        get: function () { return Python3Parser.RULE_import_stmt; },
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
    Import_nameContext.prototype.IMPORT = function () { return this.getToken(Python3Parser.IMPORT, 0); };
    Import_nameContext.prototype.dotted_as_names = function () {
        return this.getRuleContext(0, Dotted_as_namesContext);
    };
    Object.defineProperty(Import_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_import_name; },
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
    Import_fromContext.prototype.FROM = function () { return this.getToken(Python3Parser.FROM, 0); };
    Import_fromContext.prototype.IMPORT = function () { return this.getToken(Python3Parser.IMPORT, 0); };
    Import_fromContext.prototype.dotted_name = function () {
        return this.tryGetRuleContext(0, Dotted_nameContext);
    };
    Import_fromContext.prototype.STAR = function () { return this.tryGetToken(Python3Parser.STAR, 0); };
    Import_fromContext.prototype.OPEN_PAREN = function () { return this.tryGetToken(Python3Parser.OPEN_PAREN, 0); };
    Import_fromContext.prototype.import_as_names = function () {
        return this.tryGetRuleContext(0, Import_as_namesContext);
    };
    Import_fromContext.prototype.CLOSE_PAREN = function () { return this.tryGetToken(Python3Parser.CLOSE_PAREN, 0); };
    Import_fromContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.DOT);
        }
        else {
            return this.getToken(Python3Parser.DOT, i);
        }
    };
    Import_fromContext.prototype.ELLIPSIS = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.ELLIPSIS);
        }
        else {
            return this.getToken(Python3Parser.ELLIPSIS, i);
        }
    };
    Object.defineProperty(Import_fromContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_import_from; },
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
            return this.getTokens(Python3Parser.NAME);
        }
        else {
            return this.getToken(Python3Parser.NAME, i);
        }
    };
    Import_as_nameContext.prototype.AS = function () { return this.tryGetToken(Python3Parser.AS, 0); };
    Object.defineProperty(Import_as_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_import_as_name; },
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
    Dotted_as_nameContext.prototype.AS = function () { return this.tryGetToken(Python3Parser.AS, 0); };
    Dotted_as_nameContext.prototype.NAME = function () { return this.tryGetToken(Python3Parser.NAME, 0); };
    Object.defineProperty(Dotted_as_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_dotted_as_name; },
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
            return this.getTokens(Python3Parser.COMMA);
        }
        else {
            return this.getToken(Python3Parser.COMMA, i);
        }
    };
    Object.defineProperty(Import_as_namesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_import_as_names; },
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
            return this.getTokens(Python3Parser.COMMA);
        }
        else {
            return this.getToken(Python3Parser.COMMA, i);
        }
    };
    Object.defineProperty(Dotted_as_namesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_dotted_as_names; },
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
            return this.getTokens(Python3Parser.NAME);
        }
        else {
            return this.getToken(Python3Parser.NAME, i);
        }
    };
    Dotted_nameContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.DOT);
        }
        else {
            return this.getToken(Python3Parser.DOT, i);
        }
    };
    Object.defineProperty(Dotted_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_dotted_name; },
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
    Global_stmtContext.prototype.GLOBAL = function () { return this.getToken(Python3Parser.GLOBAL, 0); };
    Global_stmtContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.NAME);
        }
        else {
            return this.getToken(Python3Parser.NAME, i);
        }
    };
    Global_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.COMMA);
        }
        else {
            return this.getToken(Python3Parser.COMMA, i);
        }
    };
    Object.defineProperty(Global_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_global_stmt; },
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
    Nonlocal_stmtContext.prototype.NONLOCAL = function () { return this.getToken(Python3Parser.NONLOCAL, 0); };
    Nonlocal_stmtContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.NAME);
        }
        else {
            return this.getToken(Python3Parser.NAME, i);
        }
    };
    Nonlocal_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.COMMA);
        }
        else {
            return this.getToken(Python3Parser.COMMA, i);
        }
    };
    Object.defineProperty(Nonlocal_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_nonlocal_stmt; },
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
    Assert_stmtContext.prototype.ASSERT = function () { return this.getToken(Python3Parser.ASSERT, 0); };
    Assert_stmtContext.prototype.test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TestContext);
        }
        else {
            return this.getRuleContext(i, TestContext);
        }
    };
    Assert_stmtContext.prototype.COMMA = function () { return this.tryGetToken(Python3Parser.COMMA, 0); };
    Object.defineProperty(Assert_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_assert_stmt; },
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
        get: function () { return Python3Parser.RULE_compound_stmt; },
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
    If_stmtContext.prototype.IF = function () { return this.getToken(Python3Parser.IF, 0); };
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
            return this.getTokens(Python3Parser.COLON);
        }
        else {
            return this.getToken(Python3Parser.COLON, i);
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
            return this.getTokens(Python3Parser.ELIF);
        }
        else {
            return this.getToken(Python3Parser.ELIF, i);
        }
    };
    If_stmtContext.prototype.ELSE = function () { return this.tryGetToken(Python3Parser.ELSE, 0); };
    Object.defineProperty(If_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_if_stmt; },
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
    While_stmtContext.prototype.WHILE = function () { return this.getToken(Python3Parser.WHILE, 0); };
    While_stmtContext.prototype.test = function () {
        return this.getRuleContext(0, TestContext);
    };
    While_stmtContext.prototype.COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.COLON);
        }
        else {
            return this.getToken(Python3Parser.COLON, i);
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
    While_stmtContext.prototype.ELSE = function () { return this.tryGetToken(Python3Parser.ELSE, 0); };
    Object.defineProperty(While_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_while_stmt; },
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
    For_stmtContext.prototype.FOR = function () { return this.getToken(Python3Parser.FOR, 0); };
    For_stmtContext.prototype.exprlist = function () {
        return this.getRuleContext(0, ExprlistContext);
    };
    For_stmtContext.prototype.IN = function () { return this.getToken(Python3Parser.IN, 0); };
    For_stmtContext.prototype.testlist = function () {
        return this.getRuleContext(0, TestlistContext);
    };
    For_stmtContext.prototype.COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.COLON);
        }
        else {
            return this.getToken(Python3Parser.COLON, i);
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
    For_stmtContext.prototype.ELSE = function () { return this.tryGetToken(Python3Parser.ELSE, 0); };
    Object.defineProperty(For_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_for_stmt; },
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
    Try_stmtContext.prototype.TRY = function () { return this.getToken(Python3Parser.TRY, 0); };
    Try_stmtContext.prototype.COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.COLON);
        }
        else {
            return this.getToken(Python3Parser.COLON, i);
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
    Try_stmtContext.prototype.FINALLY = function () { return this.tryGetToken(Python3Parser.FINALLY, 0); };
    Try_stmtContext.prototype.except_clause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Except_clauseContext);
        }
        else {
            return this.getRuleContext(i, Except_clauseContext);
        }
    };
    Try_stmtContext.prototype.ELSE = function () { return this.tryGetToken(Python3Parser.ELSE, 0); };
    Object.defineProperty(Try_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_try_stmt; },
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
    With_stmtContext.prototype.WITH = function () { return this.getToken(Python3Parser.WITH, 0); };
    With_stmtContext.prototype.with_item = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(With_itemContext);
        }
        else {
            return this.getRuleContext(i, With_itemContext);
        }
    };
    With_stmtContext.prototype.COLON = function () { return this.getToken(Python3Parser.COLON, 0); };
    With_stmtContext.prototype.suite = function () {
        return this.getRuleContext(0, SuiteContext);
    };
    With_stmtContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.COMMA);
        }
        else {
            return this.getToken(Python3Parser.COMMA, i);
        }
    };
    Object.defineProperty(With_stmtContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_with_stmt; },
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
    With_itemContext.prototype.AS = function () { return this.tryGetToken(Python3Parser.AS, 0); };
    With_itemContext.prototype.expr = function () {
        return this.tryGetRuleContext(0, ExprContext);
    };
    Object.defineProperty(With_itemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_with_item; },
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
    Except_clauseContext.prototype.EXCEPT = function () { return this.getToken(Python3Parser.EXCEPT, 0); };
    Except_clauseContext.prototype.test = function () {
        return this.tryGetRuleContext(0, TestContext);
    };
    Except_clauseContext.prototype.AS = function () { return this.tryGetToken(Python3Parser.AS, 0); };
    Except_clauseContext.prototype.NAME = function () { return this.tryGetToken(Python3Parser.NAME, 0); };
    Object.defineProperty(Except_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_except_clause; },
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
    SuiteContext.prototype.NEWLINE = function () { return this.tryGetToken(Python3Parser.NEWLINE, 0); };
    SuiteContext.prototype.INDENT = function () { return this.tryGetToken(Python3Parser.INDENT, 0); };
    SuiteContext.prototype.DEDENT = function () { return this.tryGetToken(Python3Parser.DEDENT, 0); };
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
        get: function () { return Python3Parser.RULE_suite; },
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
    TestContext.prototype.IF = function () { return this.tryGetToken(Python3Parser.IF, 0); };
    TestContext.prototype.ELSE = function () { return this.tryGetToken(Python3Parser.ELSE, 0); };
    TestContext.prototype.test = function () {
        return this.tryGetRuleContext(0, TestContext);
    };
    TestContext.prototype.lambdef = function () {
        return this.tryGetRuleContext(0, LambdefContext);
    };
    Object.defineProperty(TestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_test; },
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
        get: function () { return Python3Parser.RULE_test_nocond; },
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
    LambdefContext.prototype.LAMBDA = function () { return this.getToken(Python3Parser.LAMBDA, 0); };
    LambdefContext.prototype.COLON = function () { return this.getToken(Python3Parser.COLON, 0); };
    LambdefContext.prototype.test = function () {
        return this.getRuleContext(0, TestContext);
    };
    LambdefContext.prototype.varargslist = function () {
        return this.tryGetRuleContext(0, VarargslistContext);
    };
    Object.defineProperty(LambdefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_lambdef; },
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
    Lambdef_nocondContext.prototype.LAMBDA = function () { return this.getToken(Python3Parser.LAMBDA, 0); };
    Lambdef_nocondContext.prototype.COLON = function () { return this.getToken(Python3Parser.COLON, 0); };
    Lambdef_nocondContext.prototype.test_nocond = function () {
        return this.getRuleContext(0, Test_nocondContext);
    };
    Lambdef_nocondContext.prototype.varargslist = function () {
        return this.tryGetRuleContext(0, VarargslistContext);
    };
    Object.defineProperty(Lambdef_nocondContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_lambdef_nocond; },
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
            return this.getTokens(Python3Parser.OR);
        }
        else {
            return this.getToken(Python3Parser.OR, i);
        }
    };
    Object.defineProperty(Or_testContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_or_test; },
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
            return this.getTokens(Python3Parser.AND);
        }
        else {
            return this.getToken(Python3Parser.AND, i);
        }
    };
    Object.defineProperty(And_testContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_and_test; },
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
    Not_testContext.prototype.NOT = function () { return this.tryGetToken(Python3Parser.NOT, 0); };
    Not_testContext.prototype.not_test = function () {
        return this.tryGetRuleContext(0, Not_testContext);
    };
    Not_testContext.prototype.comparison = function () {
        return this.tryGetRuleContext(0, ComparisonContext);
    };
    Object.defineProperty(Not_testContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_not_test; },
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
        get: function () { return Python3Parser.RULE_comparison; },
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
    Comp_opContext.prototype.LESS_THAN = function () { return this.tryGetToken(Python3Parser.LESS_THAN, 0); };
    Comp_opContext.prototype.GREATER_THAN = function () { return this.tryGetToken(Python3Parser.GREATER_THAN, 0); };
    Comp_opContext.prototype.EQUALS = function () { return this.tryGetToken(Python3Parser.EQUALS, 0); };
    Comp_opContext.prototype.GT_EQ = function () { return this.tryGetToken(Python3Parser.GT_EQ, 0); };
    Comp_opContext.prototype.LT_EQ = function () { return this.tryGetToken(Python3Parser.LT_EQ, 0); };
    Comp_opContext.prototype.NOT_EQ_1 = function () { return this.tryGetToken(Python3Parser.NOT_EQ_1, 0); };
    Comp_opContext.prototype.NOT_EQ_2 = function () { return this.tryGetToken(Python3Parser.NOT_EQ_2, 0); };
    Comp_opContext.prototype.IN = function () { return this.tryGetToken(Python3Parser.IN, 0); };
    Comp_opContext.prototype.NOT = function () { return this.tryGetToken(Python3Parser.NOT, 0); };
    Comp_opContext.prototype.IS = function () { return this.tryGetToken(Python3Parser.IS, 0); };
    Object.defineProperty(Comp_opContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_comp_op; },
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
    Star_exprContext.prototype.STAR = function () { return this.tryGetToken(Python3Parser.STAR, 0); };
    Object.defineProperty(Star_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_star_expr; },
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
            return this.getTokens(Python3Parser.OR_OP);
        }
        else {
            return this.getToken(Python3Parser.OR_OP, i);
        }
    };
    Object.defineProperty(ExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_expr; },
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
            return this.getTokens(Python3Parser.XOR);
        }
        else {
            return this.getToken(Python3Parser.XOR, i);
        }
    };
    Object.defineProperty(Xor_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_xor_expr; },
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
            return this.getTokens(Python3Parser.AND_OP);
        }
        else {
            return this.getToken(Python3Parser.AND_OP, i);
        }
    };
    Object.defineProperty(And_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_and_expr; },
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
            return this.getTokens(Python3Parser.LEFT_SHIFT);
        }
        else {
            return this.getToken(Python3Parser.LEFT_SHIFT, i);
        }
    };
    Shift_exprContext.prototype.RIGHT_SHIFT = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.RIGHT_SHIFT);
        }
        else {
            return this.getToken(Python3Parser.RIGHT_SHIFT, i);
        }
    };
    Object.defineProperty(Shift_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_shift_expr; },
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
            return this.getTokens(Python3Parser.ADD);
        }
        else {
            return this.getToken(Python3Parser.ADD, i);
        }
    };
    Arith_exprContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.MINUS);
        }
        else {
            return this.getToken(Python3Parser.MINUS, i);
        }
    };
    Object.defineProperty(Arith_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_arith_expr; },
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
            return this.getTokens(Python3Parser.STAR);
        }
        else {
            return this.getToken(Python3Parser.STAR, i);
        }
    };
    TermContext.prototype.DIV = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.DIV);
        }
        else {
            return this.getToken(Python3Parser.DIV, i);
        }
    };
    TermContext.prototype.MOD = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.MOD);
        }
        else {
            return this.getToken(Python3Parser.MOD, i);
        }
    };
    TermContext.prototype.IDIV = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.IDIV);
        }
        else {
            return this.getToken(Python3Parser.IDIV, i);
        }
    };
    TermContext.prototype.AT = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.AT);
        }
        else {
            return this.getToken(Python3Parser.AT, i);
        }
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_term; },
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
    FactorContext.prototype.ADD = function () { return this.tryGetToken(Python3Parser.ADD, 0); };
    FactorContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    FactorContext.prototype.MINUS = function () { return this.tryGetToken(Python3Parser.MINUS, 0); };
    FactorContext.prototype.NOT_OP = function () { return this.tryGetToken(Python3Parser.NOT_OP, 0); };
    FactorContext.prototype.power = function () {
        return this.tryGetRuleContext(0, PowerContext);
    };
    Object.defineProperty(FactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_factor; },
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
    PowerContext.prototype.POWER = function () { return this.tryGetToken(Python3Parser.POWER, 0); };
    PowerContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    Object.defineProperty(PowerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_power; },
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
    AtomContext.prototype.OPEN_PAREN = function () { return this.tryGetToken(Python3Parser.OPEN_PAREN, 0); };
    AtomContext.prototype.CLOSE_PAREN = function () { return this.tryGetToken(Python3Parser.CLOSE_PAREN, 0); };
    AtomContext.prototype.yield_expr = function () {
        return this.tryGetRuleContext(0, Yield_exprContext);
    };
    AtomContext.prototype.testlist_comp = function () {
        return this.tryGetRuleContext(0, Testlist_compContext);
    };
    AtomContext.prototype.OPEN_BRACK = function () { return this.tryGetToken(Python3Parser.OPEN_BRACK, 0); };
    AtomContext.prototype.CLOSE_BRACK = function () { return this.tryGetToken(Python3Parser.CLOSE_BRACK, 0); };
    AtomContext.prototype.OPEN_BRACE = function () { return this.tryGetToken(Python3Parser.OPEN_BRACE, 0); };
    AtomContext.prototype.CLOSE_BRACE = function () { return this.tryGetToken(Python3Parser.CLOSE_BRACE, 0); };
    AtomContext.prototype.dictorsetmaker = function () {
        return this.tryGetRuleContext(0, DictorsetmakerContext);
    };
    AtomContext.prototype.NAME = function () { return this.tryGetToken(Python3Parser.NAME, 0); };
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
    AtomContext.prototype.ELLIPSIS = function () { return this.tryGetToken(Python3Parser.ELLIPSIS, 0); };
    AtomContext.prototype.NONE = function () { return this.tryGetToken(Python3Parser.NONE, 0); };
    AtomContext.prototype.TRUE = function () { return this.tryGetToken(Python3Parser.TRUE, 0); };
    AtomContext.prototype.FALSE = function () { return this.tryGetToken(Python3Parser.FALSE, 0); };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_atom; },
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
            return this.getTokens(Python3Parser.COMMA);
        }
        else {
            return this.getToken(Python3Parser.COMMA, i);
        }
    };
    Object.defineProperty(Testlist_compContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_testlist_comp; },
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
    TrailerContext.prototype.OPEN_PAREN = function () { return this.tryGetToken(Python3Parser.OPEN_PAREN, 0); };
    TrailerContext.prototype.CLOSE_PAREN = function () { return this.tryGetToken(Python3Parser.CLOSE_PAREN, 0); };
    TrailerContext.prototype.arglist = function () {
        return this.tryGetRuleContext(0, ArglistContext);
    };
    TrailerContext.prototype.OPEN_BRACK = function () { return this.tryGetToken(Python3Parser.OPEN_BRACK, 0); };
    TrailerContext.prototype.subscriptlist = function () {
        return this.tryGetRuleContext(0, SubscriptlistContext);
    };
    TrailerContext.prototype.CLOSE_BRACK = function () { return this.tryGetToken(Python3Parser.CLOSE_BRACK, 0); };
    TrailerContext.prototype.DOT = function () { return this.tryGetToken(Python3Parser.DOT, 0); };
    TrailerContext.prototype.NAME = function () { return this.tryGetToken(Python3Parser.NAME, 0); };
    Object.defineProperty(TrailerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_trailer; },
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
            return this.getTokens(Python3Parser.COMMA);
        }
        else {
            return this.getToken(Python3Parser.COMMA, i);
        }
    };
    Object.defineProperty(SubscriptlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_subscriptlist; },
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
    SubscriptContext.prototype.COLON = function () { return this.tryGetToken(Python3Parser.COLON, 0); };
    SubscriptContext.prototype.sliceop = function () {
        return this.tryGetRuleContext(0, SliceopContext);
    };
    Object.defineProperty(SubscriptContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_subscript; },
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
    SliceopContext.prototype.COLON = function () { return this.getToken(Python3Parser.COLON, 0); };
    SliceopContext.prototype.test = function () {
        return this.tryGetRuleContext(0, TestContext);
    };
    Object.defineProperty(SliceopContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_sliceop; },
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
            return this.getTokens(Python3Parser.COMMA);
        }
        else {
            return this.getToken(Python3Parser.COMMA, i);
        }
    };
    Object.defineProperty(ExprlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_exprlist; },
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
            return this.getTokens(Python3Parser.COMMA);
        }
        else {
            return this.getToken(Python3Parser.COMMA, i);
        }
    };
    Object.defineProperty(TestlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_testlist; },
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
            return this.getTokens(Python3Parser.COLON);
        }
        else {
            return this.getToken(Python3Parser.COLON, i);
        }
    };
    DictorsetmakerContext.prototype.comp_for = function () {
        return this.tryGetRuleContext(0, Comp_forContext);
    };
    DictorsetmakerContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.COMMA);
        }
        else {
            return this.getToken(Python3Parser.COMMA, i);
        }
    };
    Object.defineProperty(DictorsetmakerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_dictorsetmaker; },
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
    ClassdefContext.prototype.CLASS = function () { return this.getToken(Python3Parser.CLASS, 0); };
    ClassdefContext.prototype.NAME = function () { return this.getToken(Python3Parser.NAME, 0); };
    ClassdefContext.prototype.COLON = function () { return this.getToken(Python3Parser.COLON, 0); };
    ClassdefContext.prototype.suite = function () {
        return this.getRuleContext(0, SuiteContext);
    };
    ClassdefContext.prototype.OPEN_PAREN = function () { return this.tryGetToken(Python3Parser.OPEN_PAREN, 0); };
    ClassdefContext.prototype.CLOSE_PAREN = function () { return this.tryGetToken(Python3Parser.CLOSE_PAREN, 0); };
    ClassdefContext.prototype.arglist = function () {
        return this.tryGetRuleContext(0, ArglistContext);
    };
    Object.defineProperty(ClassdefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_classdef; },
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
    ArglistContext.prototype.STAR = function () { return this.tryGetToken(Python3Parser.STAR, 0); };
    ArglistContext.prototype.test = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TestContext);
        }
        else {
            return this.getRuleContext(i, TestContext);
        }
    };
    ArglistContext.prototype.POWER = function () { return this.tryGetToken(Python3Parser.POWER, 0); };
    ArglistContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(Python3Parser.COMMA);
        }
        else {
            return this.getToken(Python3Parser.COMMA, i);
        }
    };
    Object.defineProperty(ArglistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_arglist; },
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
    ArgumentContext.prototype.ASSIGN = function () { return this.tryGetToken(Python3Parser.ASSIGN, 0); };
    Object.defineProperty(ArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_argument; },
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
        get: function () { return Python3Parser.RULE_comp_iter; },
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
    Comp_forContext.prototype.FOR = function () { return this.getToken(Python3Parser.FOR, 0); };
    Comp_forContext.prototype.exprlist = function () {
        return this.getRuleContext(0, ExprlistContext);
    };
    Comp_forContext.prototype.IN = function () { return this.getToken(Python3Parser.IN, 0); };
    Comp_forContext.prototype.or_test = function () {
        return this.getRuleContext(0, Or_testContext);
    };
    Comp_forContext.prototype.comp_iter = function () {
        return this.tryGetRuleContext(0, Comp_iterContext);
    };
    Object.defineProperty(Comp_forContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_comp_for; },
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
    Comp_ifContext.prototype.IF = function () { return this.getToken(Python3Parser.IF, 0); };
    Comp_ifContext.prototype.test_nocond = function () {
        return this.getRuleContext(0, Test_nocondContext);
    };
    Comp_ifContext.prototype.comp_iter = function () {
        return this.tryGetRuleContext(0, Comp_iterContext);
    };
    Object.defineProperty(Comp_ifContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_comp_if; },
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
    Yield_exprContext.prototype.YIELD = function () { return this.getToken(Python3Parser.YIELD, 0); };
    Yield_exprContext.prototype.yield_arg = function () {
        return this.tryGetRuleContext(0, Yield_argContext);
    };
    Object.defineProperty(Yield_exprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_yield_expr; },
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
    Yield_argContext.prototype.FROM = function () { return this.tryGetToken(Python3Parser.FROM, 0); };
    Yield_argContext.prototype.test = function () {
        return this.tryGetRuleContext(0, TestContext);
    };
    Yield_argContext.prototype.testlist = function () {
        return this.tryGetRuleContext(0, TestlistContext);
    };
    Object.defineProperty(Yield_argContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_yield_arg; },
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
    StrContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(Python3Parser.STRING_LITERAL, 0); };
    StrContext.prototype.BYTES_LITERAL = function () { return this.tryGetToken(Python3Parser.BYTES_LITERAL, 0); };
    Object.defineProperty(StrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_str; },
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
    NumberContext.prototype.FLOAT_NUMBER = function () { return this.tryGetToken(Python3Parser.FLOAT_NUMBER, 0); };
    NumberContext.prototype.IMAG_NUMBER = function () { return this.tryGetToken(Python3Parser.IMAG_NUMBER, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_number; },
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
    IntegerContext.prototype.DECIMAL_INTEGER = function () { return this.tryGetToken(Python3Parser.DECIMAL_INTEGER, 0); };
    IntegerContext.prototype.OCT_INTEGER = function () { return this.tryGetToken(Python3Parser.OCT_INTEGER, 0); };
    IntegerContext.prototype.HEX_INTEGER = function () { return this.tryGetToken(Python3Parser.HEX_INTEGER, 0); };
    IntegerContext.prototype.BIN_INTEGER = function () { return this.tryGetToken(Python3Parser.BIN_INTEGER, 0); };
    Object.defineProperty(IntegerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return Python3Parser.RULE_integer; },
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
