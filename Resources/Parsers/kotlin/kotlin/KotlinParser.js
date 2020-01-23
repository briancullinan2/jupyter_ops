"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/kotlin/kotlin/KotlinParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var KotlinParser = /** @class */ (function (_super) {
    __extends(KotlinParser, _super);
    function KotlinParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(KotlinParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(KotlinParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return KotlinParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KotlinParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "KotlinParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KotlinParser.prototype, "ruleNames", {
        // @Override
        get: function () { return KotlinParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KotlinParser.prototype, "serializedATN", {
        // @Override
        get: function () { return KotlinParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    KotlinParser.prototype.kotlinFile = function () {
        var _localctx = new KotlinFileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, KotlinParser.RULE_kotlinFile);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 295;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 292;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 297;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                }
                this.state = 298;
                this.preamble();
                this.state = 302;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL || _la === KotlinParser.SEMICOLON) {
                    {
                        {
                            this.state = 299;
                            this.anysemi();
                        }
                    }
                    this.state = 304;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 319;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (KotlinParser.AT - 40)) | (1 << (KotlinParser.FILE - 40)) | (1 << (KotlinParser.CLASS - 40)) | (1 << (KotlinParser.INTERFACE - 40)) | (1 << (KotlinParser.FUN - 40)) | (1 << (KotlinParser.OBJECT - 40)) | (1 << (KotlinParser.VAL - 40)) | (1 << (KotlinParser.VAR - 40)) | (1 << (KotlinParser.TYPE_ALIAS - 40)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                    {
                        this.state = 305;
                        this.topLevelObject();
                        this.state = 316;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL || _la === KotlinParser.SEMICOLON) {
                            {
                                {
                                    this.state = 307;
                                    this._errHandler.sync(this);
                                    _alt = 1;
                                    do {
                                        switch (_alt) {
                                            case 1:
                                                {
                                                    {
                                                        this.state = 306;
                                                        this.anysemi();
                                                    }
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                        this.state = 309;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
                                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                                    this.state = 312;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (KotlinParser.AT - 40)) | (1 << (KotlinParser.FILE - 40)) | (1 << (KotlinParser.CLASS - 40)) | (1 << (KotlinParser.INTERFACE - 40)) | (1 << (KotlinParser.FUN - 40)) | (1 << (KotlinParser.OBJECT - 40)) | (1 << (KotlinParser.VAL - 40)) | (1 << (KotlinParser.VAR - 40)) | (1 << (KotlinParser.TYPE_ALIAS - 40)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                                        {
                                            this.state = 311;
                                            this.topLevelObject();
                                        }
                                    }
                                }
                            }
                            this.state = 318;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 321;
                this.match(KotlinParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.script = function () {
        var _localctx = new ScriptContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, KotlinParser.RULE_script);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 326;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 323;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 328;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                }
                this.state = 329;
                this.preamble();
                this.state = 333;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 330;
                                this.anysemi();
                            }
                        }
                    }
                    this.state = 335;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                }
                this.state = 350;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KotlinParser.NL) | (1 << KotlinParser.LPAREN) | (1 << KotlinParser.LSQUARE) | (1 << KotlinParser.LCURL) | (1 << KotlinParser.ADD) | (1 << KotlinParser.SUB) | (1 << KotlinParser.INCR) | (1 << KotlinParser.DECR) | (1 << KotlinParser.EXCL))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (KotlinParser.COLONCOLON - 36)) | (1 << (KotlinParser.Q_COLONCOLON - 36)) | (1 << (KotlinParser.AT - 36)) | (1 << (KotlinParser.RETURN_AT - 36)) | (1 << (KotlinParser.CONTINUE_AT - 36)) | (1 << (KotlinParser.BREAK_AT - 36)) | (1 << (KotlinParser.FILE - 36)) | (1 << (KotlinParser.IMPORT - 36)) | (1 << (KotlinParser.OBJECT - 36)) | (1 << (KotlinParser.CONSTRUCTOR - 36)) | (1 << (KotlinParser.BY - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (KotlinParser.COMPANION - 68)) | (1 << (KotlinParser.INIT - 68)) | (1 << (KotlinParser.THIS - 68)) | (1 << (KotlinParser.SUPER - 68)) | (1 << (KotlinParser.WHERE - 68)) | (1 << (KotlinParser.IF - 68)) | (1 << (KotlinParser.WHEN - 68)) | (1 << (KotlinParser.TRY - 68)) | (1 << (KotlinParser.CATCH - 68)) | (1 << (KotlinParser.FINALLY - 68)) | (1 << (KotlinParser.FOR - 68)) | (1 << (KotlinParser.DO - 68)) | (1 << (KotlinParser.WHILE - 68)) | (1 << (KotlinParser.THROW - 68)) | (1 << (KotlinParser.RETURN - 68)) | (1 << (KotlinParser.CONTINUE - 68)) | (1 << (KotlinParser.BREAK - 68)) | (1 << (KotlinParser.OUT - 68)) | (1 << (KotlinParser.FIELD - 68)) | (1 << (KotlinParser.PROPERTY - 68)) | (1 << (KotlinParser.GET - 68)) | (1 << (KotlinParser.SET - 68)) | (1 << (KotlinParser.GETTER - 68)) | (1 << (KotlinParser.SETTER - 68)) | (1 << (KotlinParser.RECEIVER - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (KotlinParser.PARAM - 100)) | (1 << (KotlinParser.SETPARAM - 100)) | (1 << (KotlinParser.DELEGATE - 100)) | (1 << (KotlinParser.DYNAMIC - 100)) | (1 << (KotlinParser.PUBLIC - 100)) | (1 << (KotlinParser.PRIVATE - 100)) | (1 << (KotlinParser.PROTECTED - 100)) | (1 << (KotlinParser.INTERNAL - 100)) | (1 << (KotlinParser.ENUM - 100)) | (1 << (KotlinParser.SEALED - 100)) | (1 << (KotlinParser.ANNOTATION - 100)) | (1 << (KotlinParser.DATA - 100)) | (1 << (KotlinParser.INNER - 100)) | (1 << (KotlinParser.TAILREC - 100)) | (1 << (KotlinParser.OPERATOR - 100)) | (1 << (KotlinParser.INLINE - 100)) | (1 << (KotlinParser.INFIX - 100)) | (1 << (KotlinParser.EXTERNAL - 100)) | (1 << (KotlinParser.SUSPEND - 100)) | (1 << (KotlinParser.OVERRIDE - 100)) | (1 << (KotlinParser.ABSTRACT - 100)) | (1 << (KotlinParser.FINAL - 100)) | (1 << (KotlinParser.OPEN - 100)) | (1 << (KotlinParser.CONST - 100)) | (1 << (KotlinParser.LATEINIT - 100)) | (1 << (KotlinParser.VARARG - 100)) | (1 << (KotlinParser.NOINLINE - 100)) | (1 << (KotlinParser.CROSSINLINE - 100)) | (1 << (KotlinParser.REIFIED - 100)) | (1 << (KotlinParser.QUOTE_OPEN - 100)) | (1 << (KotlinParser.TRIPLE_QUOTE_OPEN - 100)) | (1 << (KotlinParser.RealLiteral - 100)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (KotlinParser.LongLiteral - 134)) | (1 << (KotlinParser.IntegerLiteral - 134)) | (1 << (KotlinParser.HexLiteral - 134)) | (1 << (KotlinParser.BinLiteral - 134)) | (1 << (KotlinParser.BooleanLiteral - 134)) | (1 << (KotlinParser.NullLiteral - 134)) | (1 << (KotlinParser.Identifier - 134)) | (1 << (KotlinParser.LabelReference - 134)) | (1 << (KotlinParser.LabelDefinition - 134)) | (1 << (KotlinParser.CharacterLiteral - 134)))) !== 0)) {
                    {
                        this.state = 336;
                        this.expression();
                        this.state = 347;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL || _la === KotlinParser.SEMICOLON) {
                            {
                                {
                                    this.state = 338;
                                    this._errHandler.sync(this);
                                    _alt = 1;
                                    do {
                                        switch (_alt) {
                                            case 1:
                                                {
                                                    {
                                                        this.state = 337;
                                                        this.anysemi();
                                                    }
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                        this.state = 340;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                                    this.state = 343;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 342;
                                                this.expression();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 349;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 352;
                this.match(KotlinParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.preamble = function () {
        var _localctx = new PreambleContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, KotlinParser.RULE_preamble);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 355;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                    case 1:
                        {
                            this.state = 354;
                            this.fileAnnotations();
                        }
                        break;
                }
                this.state = 357;
                this.packageHeader();
                this.state = 358;
                this.importList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.fileAnnotations = function () {
        var _localctx = new FileAnnotationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, KotlinParser.RULE_fileAnnotations);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 361;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 360;
                                    this.fileAnnotation();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 363;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
    KotlinParser.prototype.fileAnnotation = function () {
        var _localctx = new FileAnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, KotlinParser.RULE_fileAnnotation);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 381;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 365;
                                    this.match(KotlinParser.FILE);
                                    this.state = 366;
                                    this.match(KotlinParser.COLON);
                                    this.state = 376;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case KotlinParser.LSQUARE:
                                            {
                                                this.state = 367;
                                                this.match(KotlinParser.LSQUARE);
                                                this.state = 369;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                do {
                                                    {
                                                        {
                                                            this.state = 368;
                                                            this.unescapedAnnotation();
                                                        }
                                                    }
                                                    this.state = 371;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                } while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0));
                                                this.state = 373;
                                                this.match(KotlinParser.RSQUARE);
                                            }
                                            break;
                                        case KotlinParser.IMPORT:
                                        case KotlinParser.CONSTRUCTOR:
                                        case KotlinParser.BY:
                                        case KotlinParser.COMPANION:
                                        case KotlinParser.INIT:
                                        case KotlinParser.WHERE:
                                        case KotlinParser.CATCH:
                                        case KotlinParser.FINALLY:
                                        case KotlinParser.OUT:
                                        case KotlinParser.GETTER:
                                        case KotlinParser.SETTER:
                                        case KotlinParser.DYNAMIC:
                                        case KotlinParser.PUBLIC:
                                        case KotlinParser.PRIVATE:
                                        case KotlinParser.PROTECTED:
                                        case KotlinParser.INTERNAL:
                                        case KotlinParser.ENUM:
                                        case KotlinParser.SEALED:
                                        case KotlinParser.ANNOTATION:
                                        case KotlinParser.DATA:
                                        case KotlinParser.INNER:
                                        case KotlinParser.TAILREC:
                                        case KotlinParser.OPERATOR:
                                        case KotlinParser.INLINE:
                                        case KotlinParser.INFIX:
                                        case KotlinParser.EXTERNAL:
                                        case KotlinParser.SUSPEND:
                                        case KotlinParser.OVERRIDE:
                                        case KotlinParser.ABSTRACT:
                                        case KotlinParser.FINAL:
                                        case KotlinParser.OPEN:
                                        case KotlinParser.CONST:
                                        case KotlinParser.LATEINIT:
                                        case KotlinParser.VARARG:
                                        case KotlinParser.NOINLINE:
                                        case KotlinParser.CROSSINLINE:
                                        case KotlinParser.REIFIED:
                                        case KotlinParser.Identifier:
                                            {
                                                this.state = 375;
                                                this.unescapedAnnotation();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                    this.state = 379;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 378;
                                                this.semi();
                                            }
                                            break;
                                    }
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 383;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
    KotlinParser.prototype.packageHeader = function () {
        var _localctx = new PackageHeaderContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, KotlinParser.RULE_packageHeader);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 393;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                    case 1:
                        {
                            this.state = 386;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                                {
                                    this.state = 385;
                                    this.modifierList();
                                }
                            }
                            this.state = 388;
                            this.match(KotlinParser.PACKAGE);
                            this.state = 389;
                            this.identifier();
                            this.state = 391;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 390;
                                        this.semi();
                                    }
                                    break;
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
    KotlinParser.prototype.importList = function () {
        var _localctx = new ImportListContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, KotlinParser.RULE_importList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 398;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 395;
                                this.importHeader();
                            }
                        }
                    }
                    this.state = 400;
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
    KotlinParser.prototype.importHeader = function () {
        var _localctx = new ImportHeaderContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, KotlinParser.RULE_importHeader);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 401;
                this.match(KotlinParser.IMPORT);
                this.state = 402;
                this.identifier();
                this.state = 406;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case KotlinParser.DOT:
                        {
                            this.state = 403;
                            this.match(KotlinParser.DOT);
                            this.state = 404;
                            this.match(KotlinParser.MULT);
                        }
                        break;
                    case KotlinParser.AS:
                        {
                            this.state = 405;
                            this.importAlias();
                        }
                        break;
                    case KotlinParser.EOF:
                    case KotlinParser.NL:
                    case KotlinParser.LPAREN:
                    case KotlinParser.LSQUARE:
                    case KotlinParser.LCURL:
                    case KotlinParser.ADD:
                    case KotlinParser.SUB:
                    case KotlinParser.INCR:
                    case KotlinParser.DECR:
                    case KotlinParser.EXCL:
                    case KotlinParser.SEMICOLON:
                    case KotlinParser.COLONCOLON:
                    case KotlinParser.Q_COLONCOLON:
                    case KotlinParser.AT:
                    case KotlinParser.RETURN_AT:
                    case KotlinParser.CONTINUE_AT:
                    case KotlinParser.BREAK_AT:
                    case KotlinParser.FILE:
                    case KotlinParser.IMPORT:
                    case KotlinParser.CLASS:
                    case KotlinParser.INTERFACE:
                    case KotlinParser.FUN:
                    case KotlinParser.OBJECT:
                    case KotlinParser.VAL:
                    case KotlinParser.VAR:
                    case KotlinParser.TYPE_ALIAS:
                    case KotlinParser.CONSTRUCTOR:
                    case KotlinParser.BY:
                    case KotlinParser.COMPANION:
                    case KotlinParser.INIT:
                    case KotlinParser.THIS:
                    case KotlinParser.SUPER:
                    case KotlinParser.WHERE:
                    case KotlinParser.IF:
                    case KotlinParser.WHEN:
                    case KotlinParser.TRY:
                    case KotlinParser.CATCH:
                    case KotlinParser.FINALLY:
                    case KotlinParser.FOR:
                    case KotlinParser.DO:
                    case KotlinParser.WHILE:
                    case KotlinParser.THROW:
                    case KotlinParser.RETURN:
                    case KotlinParser.CONTINUE:
                    case KotlinParser.BREAK:
                    case KotlinParser.IN:
                    case KotlinParser.OUT:
                    case KotlinParser.FIELD:
                    case KotlinParser.PROPERTY:
                    case KotlinParser.GET:
                    case KotlinParser.SET:
                    case KotlinParser.GETTER:
                    case KotlinParser.SETTER:
                    case KotlinParser.RECEIVER:
                    case KotlinParser.PARAM:
                    case KotlinParser.SETPARAM:
                    case KotlinParser.DELEGATE:
                    case KotlinParser.DYNAMIC:
                    case KotlinParser.PUBLIC:
                    case KotlinParser.PRIVATE:
                    case KotlinParser.PROTECTED:
                    case KotlinParser.INTERNAL:
                    case KotlinParser.ENUM:
                    case KotlinParser.SEALED:
                    case KotlinParser.ANNOTATION:
                    case KotlinParser.DATA:
                    case KotlinParser.INNER:
                    case KotlinParser.TAILREC:
                    case KotlinParser.OPERATOR:
                    case KotlinParser.INLINE:
                    case KotlinParser.INFIX:
                    case KotlinParser.EXTERNAL:
                    case KotlinParser.SUSPEND:
                    case KotlinParser.OVERRIDE:
                    case KotlinParser.ABSTRACT:
                    case KotlinParser.FINAL:
                    case KotlinParser.OPEN:
                    case KotlinParser.CONST:
                    case KotlinParser.LATEINIT:
                    case KotlinParser.VARARG:
                    case KotlinParser.NOINLINE:
                    case KotlinParser.CROSSINLINE:
                    case KotlinParser.REIFIED:
                    case KotlinParser.QUOTE_OPEN:
                    case KotlinParser.TRIPLE_QUOTE_OPEN:
                    case KotlinParser.RealLiteral:
                    case KotlinParser.LongLiteral:
                    case KotlinParser.IntegerLiteral:
                    case KotlinParser.HexLiteral:
                    case KotlinParser.BinLiteral:
                    case KotlinParser.BooleanLiteral:
                    case KotlinParser.NullLiteral:
                    case KotlinParser.Identifier:
                    case KotlinParser.LabelReference:
                    case KotlinParser.LabelDefinition:
                    case KotlinParser.CharacterLiteral:
                        break;
                    default:
                        break;
                }
                this.state = 409;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                    case 1:
                        {
                            this.state = 408;
                            this.semi();
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
    KotlinParser.prototype.importAlias = function () {
        var _localctx = new ImportAliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, KotlinParser.RULE_importAlias);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 411;
                this.match(KotlinParser.AS);
                this.state = 412;
                this.simpleIdentifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.topLevelObject = function () {
        var _localctx = new TopLevelObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, KotlinParser.RULE_topLevelObject);
        try {
            this.state = 419;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 414;
                        this.classDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 415;
                        this.objectDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 416;
                        this.functionDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 417;
                        this.propertyDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 418;
                        this.typeAlias();
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
    KotlinParser.prototype.classDeclaration = function () {
        var _localctx = new ClassDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, KotlinParser.RULE_classDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 422;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                    {
                        this.state = 421;
                        this.modifierList();
                    }
                }
                this.state = 424;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.CLASS || _la === KotlinParser.INTERFACE)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 428;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 425;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 430;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 431;
                this.simpleIdentifier();
                this.state = 439;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                    case 1:
                        {
                            this.state = 435;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 432;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 437;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 438;
                            this.typeParameters();
                        }
                        break;
                }
                this.state = 448;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                    case 1:
                        {
                            this.state = 444;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 441;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 446;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 447;
                            this.primaryConstructor();
                        }
                        break;
                }
                this.state = 464;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                    case 1:
                        {
                            this.state = 453;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 450;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 455;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 456;
                            this.match(KotlinParser.COLON);
                            this.state = 460;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 457;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 462;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 463;
                            this.delegationSpecifiers();
                        }
                        break;
                }
                this.state = 473;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                    case 1:
                        {
                            this.state = 469;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 466;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 471;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 472;
                            this.typeConstraints();
                        }
                        break;
                }
                this.state = 489;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                    case 1:
                        {
                            this.state = 478;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 475;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 480;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 481;
                            this.classBody();
                        }
                        break;
                    case 2:
                        {
                            this.state = 485;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 482;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 487;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 488;
                            this.enumClassBody();
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
    KotlinParser.prototype.primaryConstructor = function () {
        var _localctx = new PrimaryConstructorContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, KotlinParser.RULE_primaryConstructor);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 492;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                    {
                        this.state = 491;
                        this.modifierList();
                    }
                }
                this.state = 501;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.CONSTRUCTOR) {
                    {
                        this.state = 494;
                        this.match(KotlinParser.CONSTRUCTOR);
                        this.state = 498;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 495;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 500;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 503;
                this.classParameters();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.classParameters = function () {
        var _localctx = new ClassParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, KotlinParser.RULE_classParameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 505;
                this.match(KotlinParser.LPAREN);
                this.state = 514;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (KotlinParser.AT - 40)) | (1 << (KotlinParser.FILE - 40)) | (1 << (KotlinParser.IMPORT - 40)) | (1 << (KotlinParser.VAL - 40)) | (1 << (KotlinParser.VAR - 40)) | (1 << (KotlinParser.CONSTRUCTOR - 40)) | (1 << (KotlinParser.BY - 40)) | (1 << (KotlinParser.COMPANION - 40)) | (1 << (KotlinParser.INIT - 40)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (KotlinParser.WHERE - 73)) | (1 << (KotlinParser.CATCH - 73)) | (1 << (KotlinParser.FINALLY - 73)) | (1 << (KotlinParser.IN - 73)) | (1 << (KotlinParser.OUT - 73)) | (1 << (KotlinParser.FIELD - 73)) | (1 << (KotlinParser.PROPERTY - 73)) | (1 << (KotlinParser.GET - 73)) | (1 << (KotlinParser.SET - 73)) | (1 << (KotlinParser.GETTER - 73)) | (1 << (KotlinParser.SETTER - 73)) | (1 << (KotlinParser.RECEIVER - 73)) | (1 << (KotlinParser.PARAM - 73)) | (1 << (KotlinParser.SETPARAM - 73)) | (1 << (KotlinParser.DELEGATE - 73)) | (1 << (KotlinParser.DYNAMIC - 73)) | (1 << (KotlinParser.PUBLIC - 73)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (KotlinParser.PRIVATE - 105)) | (1 << (KotlinParser.PROTECTED - 105)) | (1 << (KotlinParser.INTERNAL - 105)) | (1 << (KotlinParser.ENUM - 105)) | (1 << (KotlinParser.SEALED - 105)) | (1 << (KotlinParser.ANNOTATION - 105)) | (1 << (KotlinParser.DATA - 105)) | (1 << (KotlinParser.INNER - 105)) | (1 << (KotlinParser.TAILREC - 105)) | (1 << (KotlinParser.OPERATOR - 105)) | (1 << (KotlinParser.INLINE - 105)) | (1 << (KotlinParser.INFIX - 105)) | (1 << (KotlinParser.EXTERNAL - 105)) | (1 << (KotlinParser.SUSPEND - 105)) | (1 << (KotlinParser.OVERRIDE - 105)) | (1 << (KotlinParser.ABSTRACT - 105)) | (1 << (KotlinParser.FINAL - 105)) | (1 << (KotlinParser.OPEN - 105)) | (1 << (KotlinParser.CONST - 105)) | (1 << (KotlinParser.LATEINIT - 105)) | (1 << (KotlinParser.VARARG - 105)) | (1 << (KotlinParser.NOINLINE - 105)) | (1 << (KotlinParser.CROSSINLINE - 105)) | (1 << (KotlinParser.REIFIED - 105)))) !== 0) || _la === KotlinParser.Identifier || _la === KotlinParser.LabelReference) {
                    {
                        this.state = 506;
                        this.classParameter();
                        this.state = 511;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.COMMA) {
                            {
                                {
                                    this.state = 507;
                                    this.match(KotlinParser.COMMA);
                                    this.state = 508;
                                    this.classParameter();
                                }
                            }
                            this.state = 513;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 516;
                this.match(KotlinParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.classParameter = function () {
        var _localctx = new ClassParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, KotlinParser.RULE_classParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 519;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                    case 1:
                        {
                            this.state = 518;
                            this.modifierList();
                        }
                        break;
                }
                this.state = 522;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.VAL || _la === KotlinParser.VAR) {
                    {
                        this.state = 521;
                        _la = this._input.LA(1);
                        if (!(_la === KotlinParser.VAL || _la === KotlinParser.VAR)) {
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
                this.state = 524;
                this.simpleIdentifier();
                this.state = 525;
                this.match(KotlinParser.COLON);
                this.state = 526;
                this.type();
                this.state = 529;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.ASSIGNMENT) {
                    {
                        this.state = 527;
                        this.match(KotlinParser.ASSIGNMENT);
                        this.state = 528;
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
    KotlinParser.prototype.delegationSpecifiers = function () {
        var _localctx = new DelegationSpecifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, KotlinParser.RULE_delegationSpecifiers);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 534;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (KotlinParser.FIELD - 93)) | (1 << (KotlinParser.PROPERTY - 93)) | (1 << (KotlinParser.GET - 93)) | (1 << (KotlinParser.SET - 93)) | (1 << (KotlinParser.RECEIVER - 93)) | (1 << (KotlinParser.PARAM - 93)) | (1 << (KotlinParser.SETPARAM - 93)) | (1 << (KotlinParser.DELEGATE - 93)))) !== 0) || _la === KotlinParser.LabelReference) {
                    {
                        {
                            this.state = 531;
                            this.annotations();
                        }
                    }
                    this.state = 536;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 537;
                this.delegationSpecifier();
                this.state = 554;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 541;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 538;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 543;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 544;
                                this.match(KotlinParser.COMMA);
                                this.state = 548;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 545;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 550;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 551;
                                this.delegationSpecifier();
                            }
                        }
                    }
                    this.state = 556;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
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
    KotlinParser.prototype.delegationSpecifier = function () {
        var _localctx = new DelegationSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, KotlinParser.RULE_delegationSpecifier);
        try {
            this.state = 560;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 557;
                        this.constructorInvocation();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 558;
                        this.userType();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 559;
                        this.explicitDelegation();
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
    KotlinParser.prototype.constructorInvocation = function () {
        var _localctx = new ConstructorInvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, KotlinParser.RULE_constructorInvocation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 562;
                this.userType();
                this.state = 563;
                this.callSuffix();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.explicitDelegation = function () {
        var _localctx = new ExplicitDelegationContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, KotlinParser.RULE_explicitDelegation);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 565;
                this.userType();
                this.state = 569;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 566;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 571;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 572;
                this.match(KotlinParser.BY);
                this.state = 576;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 573;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 578;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                }
                this.state = 579;
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
    KotlinParser.prototype.classBody = function () {
        var _localctx = new ClassBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, KotlinParser.RULE_classBody);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 581;
                this.match(KotlinParser.LCURL);
                this.state = 585;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 582;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 587;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
                }
                this.state = 591;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (KotlinParser.AT - 40)) | (1 << (KotlinParser.FILE - 40)) | (1 << (KotlinParser.CLASS - 40)) | (1 << (KotlinParser.INTERFACE - 40)) | (1 << (KotlinParser.FUN - 40)) | (1 << (KotlinParser.OBJECT - 40)) | (1 << (KotlinParser.VAL - 40)) | (1 << (KotlinParser.VAR - 40)) | (1 << (KotlinParser.TYPE_ALIAS - 40)) | (1 << (KotlinParser.CONSTRUCTOR - 40)) | (1 << (KotlinParser.COMPANION - 40)) | (1 << (KotlinParser.INIT - 40)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                    {
                        {
                            this.state = 588;
                            this.classMemberDeclaration();
                        }
                    }
                    this.state = 593;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 597;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 594;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 599;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 600;
                this.match(KotlinParser.RCURL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.classMemberDeclaration = function () {
        var _localctx = new ClassMemberDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, KotlinParser.RULE_classMemberDeclaration);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 610;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                    case 1:
                        {
                            this.state = 602;
                            this.classDeclaration();
                        }
                        break;
                    case 2:
                        {
                            this.state = 603;
                            this.functionDeclaration();
                        }
                        break;
                    case 3:
                        {
                            this.state = 604;
                            this.objectDeclaration();
                        }
                        break;
                    case 4:
                        {
                            this.state = 605;
                            this.companionObject();
                        }
                        break;
                    case 5:
                        {
                            this.state = 606;
                            this.propertyDeclaration();
                        }
                        break;
                    case 6:
                        {
                            this.state = 607;
                            this.anonymousInitializer();
                        }
                        break;
                    case 7:
                        {
                            this.state = 608;
                            this.secondaryConstructor();
                        }
                        break;
                    case 8:
                        {
                            this.state = 609;
                            this.typeAlias();
                        }
                        break;
                }
                this.state = 615;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 612;
                                this.anysemi();
                            }
                        }
                    }
                    this.state = 617;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
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
    KotlinParser.prototype.anonymousInitializer = function () {
        var _localctx = new AnonymousInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, KotlinParser.RULE_anonymousInitializer);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 618;
                this.match(KotlinParser.INIT);
                this.state = 622;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 619;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 624;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 625;
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
    KotlinParser.prototype.secondaryConstructor = function () {
        var _localctx = new SecondaryConstructorContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, KotlinParser.RULE_secondaryConstructor);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 628;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                    {
                        this.state = 627;
                        this.modifierList();
                    }
                }
                this.state = 630;
                this.match(KotlinParser.CONSTRUCTOR);
                this.state = 634;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 631;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 636;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 637;
                this.functionValueParameters();
                this.state = 652;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                    case 1:
                        {
                            this.state = 641;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 638;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 643;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 644;
                            this.match(KotlinParser.COLON);
                            this.state = 648;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 645;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 650;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 651;
                            this.constructorDelegationCall();
                        }
                        break;
                }
                this.state = 657;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 654;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 659;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 660;
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
    KotlinParser.prototype.constructorDelegationCall = function () {
        var _localctx = new ConstructorDelegationCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, KotlinParser.RULE_constructorDelegationCall);
        var _la;
        try {
            this.state = 678;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.THIS:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 662;
                        this.match(KotlinParser.THIS);
                        this.state = 666;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 663;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 668;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 669;
                        this.valueArguments();
                    }
                    break;
                case KotlinParser.SUPER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 670;
                        this.match(KotlinParser.SUPER);
                        this.state = 674;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 671;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 676;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 677;
                        this.valueArguments();
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
    KotlinParser.prototype.enumClassBody = function () {
        var _localctx = new EnumClassBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, KotlinParser.RULE_enumClassBody);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 680;
                this.match(KotlinParser.LCURL);
                this.state = 684;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 681;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 686;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                }
                this.state = 688;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0)) {
                    {
                        this.state = 687;
                        this.enumEntries();
                    }
                }
                this.state = 709;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                    case 1:
                        {
                            this.state = 693;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 690;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 695;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 696;
                            this.match(KotlinParser.SEMICOLON);
                            this.state = 700;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 697;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 702;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                            }
                            this.state = 706;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (KotlinParser.AT - 40)) | (1 << (KotlinParser.FILE - 40)) | (1 << (KotlinParser.CLASS - 40)) | (1 << (KotlinParser.INTERFACE - 40)) | (1 << (KotlinParser.FUN - 40)) | (1 << (KotlinParser.OBJECT - 40)) | (1 << (KotlinParser.VAL - 40)) | (1 << (KotlinParser.VAR - 40)) | (1 << (KotlinParser.TYPE_ALIAS - 40)) | (1 << (KotlinParser.CONSTRUCTOR - 40)) | (1 << (KotlinParser.COMPANION - 40)) | (1 << (KotlinParser.INIT - 40)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                                {
                                    {
                                        this.state = 703;
                                        this.classMemberDeclaration();
                                    }
                                }
                                this.state = 708;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        break;
                }
                this.state = 714;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 711;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 716;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 717;
                this.match(KotlinParser.RCURL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.enumEntries = function () {
        var _localctx = new EnumEntriesContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, KotlinParser.RULE_enumEntries);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 726;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 719;
                            this.enumEntry();
                            this.state = 723;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 720;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 725;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                            }
                        }
                    }
                    this.state = 728;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0));
                this.state = 731;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 78, this._ctx)) {
                    case 1:
                        {
                            this.state = 730;
                            this.match(KotlinParser.SEMICOLON);
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
    KotlinParser.prototype.enumEntry = function () {
        var _localctx = new EnumEntryContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, KotlinParser.RULE_enumEntry);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 733;
                this.simpleIdentifier();
                this.state = 741;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 80, this._ctx)) {
                    case 1:
                        {
                            this.state = 737;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 734;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 739;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 740;
                            this.valueArguments();
                        }
                        break;
                }
                this.state = 750;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 82, this._ctx)) {
                    case 1:
                        {
                            this.state = 746;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 743;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 748;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 749;
                            this.classBody();
                        }
                        break;
                }
                this.state = 759;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                    case 1:
                        {
                            this.state = 755;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 752;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 757;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 758;
                            this.match(KotlinParser.COMMA);
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
    KotlinParser.prototype.functionDeclaration = function () {
        var _localctx = new FunctionDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, KotlinParser.RULE_functionDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 762;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                    {
                        this.state = 761;
                        this.modifierList();
                    }
                }
                this.state = 764;
                this.match(KotlinParser.FUN);
                this.state = 780;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
                    case 1:
                        {
                            this.state = 768;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 765;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 770;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 771;
                            this.type();
                            this.state = 775;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 772;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 777;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 778;
                            this.match(KotlinParser.DOT);
                        }
                        break;
                }
                this.state = 789;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
                    case 1:
                        {
                            this.state = 785;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 782;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 787;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 788;
                            this.typeParameters();
                        }
                        break;
                }
                this.state = 798;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 92, this._ctx)) {
                    case 1:
                        {
                            this.state = 794;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 791;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 796;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 797;
                            this.identifier();
                        }
                        break;
                }
                this.state = 803;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 800;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 805;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 806;
                this.functionValueParameters();
                this.state = 821;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                    case 1:
                        {
                            this.state = 810;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 807;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 812;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 813;
                            this.match(KotlinParser.COLON);
                            this.state = 817;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 814;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 819;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 820;
                            this.type();
                        }
                        break;
                }
                this.state = 830;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                    case 1:
                        {
                            this.state = 826;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 823;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 828;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 829;
                            this.typeConstraints();
                        }
                        break;
                }
                this.state = 839;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                    case 1:
                        {
                            this.state = 835;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 832;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 837;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 838;
                            this.functionBody();
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
    KotlinParser.prototype.functionValueParameters = function () {
        var _localctx = new FunctionValueParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, KotlinParser.RULE_functionValueParameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 841;
                this.match(KotlinParser.LPAREN);
                this.state = 850;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (KotlinParser.AT - 40)) | (1 << (KotlinParser.FILE - 40)) | (1 << (KotlinParser.IMPORT - 40)) | (1 << (KotlinParser.CONSTRUCTOR - 40)) | (1 << (KotlinParser.BY - 40)) | (1 << (KotlinParser.COMPANION - 40)) | (1 << (KotlinParser.INIT - 40)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (KotlinParser.WHERE - 73)) | (1 << (KotlinParser.CATCH - 73)) | (1 << (KotlinParser.FINALLY - 73)) | (1 << (KotlinParser.IN - 73)) | (1 << (KotlinParser.OUT - 73)) | (1 << (KotlinParser.FIELD - 73)) | (1 << (KotlinParser.PROPERTY - 73)) | (1 << (KotlinParser.GET - 73)) | (1 << (KotlinParser.SET - 73)) | (1 << (KotlinParser.GETTER - 73)) | (1 << (KotlinParser.SETTER - 73)) | (1 << (KotlinParser.RECEIVER - 73)) | (1 << (KotlinParser.PARAM - 73)) | (1 << (KotlinParser.SETPARAM - 73)) | (1 << (KotlinParser.DELEGATE - 73)) | (1 << (KotlinParser.DYNAMIC - 73)) | (1 << (KotlinParser.PUBLIC - 73)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (KotlinParser.PRIVATE - 105)) | (1 << (KotlinParser.PROTECTED - 105)) | (1 << (KotlinParser.INTERNAL - 105)) | (1 << (KotlinParser.ENUM - 105)) | (1 << (KotlinParser.SEALED - 105)) | (1 << (KotlinParser.ANNOTATION - 105)) | (1 << (KotlinParser.DATA - 105)) | (1 << (KotlinParser.INNER - 105)) | (1 << (KotlinParser.TAILREC - 105)) | (1 << (KotlinParser.OPERATOR - 105)) | (1 << (KotlinParser.INLINE - 105)) | (1 << (KotlinParser.INFIX - 105)) | (1 << (KotlinParser.EXTERNAL - 105)) | (1 << (KotlinParser.SUSPEND - 105)) | (1 << (KotlinParser.OVERRIDE - 105)) | (1 << (KotlinParser.ABSTRACT - 105)) | (1 << (KotlinParser.FINAL - 105)) | (1 << (KotlinParser.OPEN - 105)) | (1 << (KotlinParser.CONST - 105)) | (1 << (KotlinParser.LATEINIT - 105)) | (1 << (KotlinParser.VARARG - 105)) | (1 << (KotlinParser.NOINLINE - 105)) | (1 << (KotlinParser.CROSSINLINE - 105)) | (1 << (KotlinParser.REIFIED - 105)))) !== 0) || _la === KotlinParser.Identifier || _la === KotlinParser.LabelReference) {
                    {
                        this.state = 842;
                        this.functionValueParameter();
                        this.state = 847;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.COMMA) {
                            {
                                {
                                    this.state = 843;
                                    this.match(KotlinParser.COMMA);
                                    this.state = 844;
                                    this.functionValueParameter();
                                }
                            }
                            this.state = 849;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 852;
                this.match(KotlinParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.functionValueParameter = function () {
        var _localctx = new FunctionValueParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, KotlinParser.RULE_functionValueParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 855;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                    case 1:
                        {
                            this.state = 854;
                            this.modifierList();
                        }
                        break;
                }
                this.state = 857;
                this.parameter();
                this.state = 860;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.ASSIGNMENT) {
                    {
                        this.state = 858;
                        this.match(KotlinParser.ASSIGNMENT);
                        this.state = 859;
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
    KotlinParser.prototype.parameter = function () {
        var _localctx = new ParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, KotlinParser.RULE_parameter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 862;
                this.simpleIdentifier();
                this.state = 863;
                this.match(KotlinParser.COLON);
                this.state = 864;
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
    KotlinParser.prototype.functionBody = function () {
        var _localctx = new FunctionBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, KotlinParser.RULE_functionBody);
        try {
            var _alt = void 0;
            this.state = 875;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.LCURL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 866;
                        this.block();
                    }
                    break;
                case KotlinParser.ASSIGNMENT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 867;
                        this.match(KotlinParser.ASSIGNMENT);
                        this.state = 871;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 868;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 873;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                        }
                        this.state = 874;
                        this.expression();
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
    KotlinParser.prototype.objectDeclaration = function () {
        var _localctx = new ObjectDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, KotlinParser.RULE_objectDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 878;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                    {
                        this.state = 877;
                        this.modifierList();
                    }
                }
                this.state = 880;
                this.match(KotlinParser.OBJECT);
                this.state = 884;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 881;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 886;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 887;
                this.simpleIdentifier();
                this.state = 895;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
                    case 1:
                        {
                            this.state = 891;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 888;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 893;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 894;
                            this.primaryConstructor();
                        }
                        break;
                }
                this.state = 911;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
                    case 1:
                        {
                            this.state = 900;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 897;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 902;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 903;
                            this.match(KotlinParser.COLON);
                            this.state = 907;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 904;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 909;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 910;
                            this.delegationSpecifiers();
                        }
                        break;
                }
                this.state = 920;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 115, this._ctx)) {
                    case 1:
                        {
                            this.state = 916;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 913;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 918;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 919;
                            this.classBody();
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
    KotlinParser.prototype.companionObject = function () {
        var _localctx = new CompanionObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, KotlinParser.RULE_companionObject);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 923;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                    {
                        this.state = 922;
                        this.modifierList();
                    }
                }
                this.state = 925;
                this.match(KotlinParser.COMPANION);
                this.state = 929;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 926;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 931;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 933;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                    {
                        this.state = 932;
                        this.modifierList();
                    }
                }
                this.state = 935;
                this.match(KotlinParser.OBJECT);
                this.state = 943;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                    case 1:
                        {
                            this.state = 939;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 936;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 941;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 942;
                            this.simpleIdentifier();
                        }
                        break;
                }
                this.state = 959;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
                    case 1:
                        {
                            this.state = 948;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 945;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 950;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 951;
                            this.match(KotlinParser.COLON);
                            this.state = 955;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 952;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 957;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 958;
                            this.delegationSpecifiers();
                        }
                        break;
                }
                this.state = 968;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 125, this._ctx)) {
                    case 1:
                        {
                            this.state = 964;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 961;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 966;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 967;
                            this.classBody();
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
    KotlinParser.prototype.propertyDeclaration = function () {
        var _localctx = new PropertyDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, KotlinParser.RULE_propertyDeclaration);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 971;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                    {
                        this.state = 970;
                        this.modifierList();
                    }
                }
                this.state = 973;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.VAL || _la === KotlinParser.VAR)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 981;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 128, this._ctx)) {
                    case 1:
                        {
                            this.state = 977;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 974;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 979;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 980;
                            this.typeParameters();
                        }
                        break;
                }
                this.state = 998;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
                    case 1:
                        {
                            this.state = 986;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 983;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 988;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 989;
                            this.type();
                            this.state = 993;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 990;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 995;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 996;
                            this.match(KotlinParser.DOT);
                        }
                        break;
                }
                {
                    this.state = 1003;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === KotlinParser.NL) {
                        {
                            {
                                this.state = 1000;
                                this.match(KotlinParser.NL);
                            }
                        }
                        this.state = 1005;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1008;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case KotlinParser.LPAREN:
                            {
                                this.state = 1006;
                                this.multiVariableDeclaration();
                            }
                            break;
                        case KotlinParser.IMPORT:
                        case KotlinParser.CONSTRUCTOR:
                        case KotlinParser.BY:
                        case KotlinParser.COMPANION:
                        case KotlinParser.INIT:
                        case KotlinParser.WHERE:
                        case KotlinParser.CATCH:
                        case KotlinParser.FINALLY:
                        case KotlinParser.OUT:
                        case KotlinParser.GETTER:
                        case KotlinParser.SETTER:
                        case KotlinParser.DYNAMIC:
                        case KotlinParser.PUBLIC:
                        case KotlinParser.PRIVATE:
                        case KotlinParser.PROTECTED:
                        case KotlinParser.INTERNAL:
                        case KotlinParser.ENUM:
                        case KotlinParser.SEALED:
                        case KotlinParser.ANNOTATION:
                        case KotlinParser.DATA:
                        case KotlinParser.INNER:
                        case KotlinParser.TAILREC:
                        case KotlinParser.OPERATOR:
                        case KotlinParser.INLINE:
                        case KotlinParser.INFIX:
                        case KotlinParser.EXTERNAL:
                        case KotlinParser.SUSPEND:
                        case KotlinParser.OVERRIDE:
                        case KotlinParser.ABSTRACT:
                        case KotlinParser.FINAL:
                        case KotlinParser.OPEN:
                        case KotlinParser.CONST:
                        case KotlinParser.LATEINIT:
                        case KotlinParser.VARARG:
                        case KotlinParser.NOINLINE:
                        case KotlinParser.CROSSINLINE:
                        case KotlinParser.REIFIED:
                        case KotlinParser.Identifier:
                            {
                                this.state = 1007;
                                this.variableDeclaration();
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                }
                this.state = 1017;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                    case 1:
                        {
                            this.state = 1013;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1010;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1015;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1016;
                            this.typeConstraints();
                        }
                        break;
                }
                this.state = 1033;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                    case 1:
                        {
                            this.state = 1022;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1019;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1024;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1025;
                            _la = this._input.LA(1);
                            if (!(_la === KotlinParser.ASSIGNMENT || _la === KotlinParser.BY)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1029;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1026;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 1031;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                            }
                            this.state = 1032;
                            this.expression();
                        }
                        break;
                }
                this.state = 1047;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 141, this._ctx)) {
                    case 1:
                        {
                            this.state = 1035;
                            this.getter();
                            this.state = 1039;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 139, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1036;
                                        this.semi();
                                        this.state = 1037;
                                        this.setter();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 1041;
                            this.setter();
                            this.state = 1045;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 140, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1042;
                                        this.semi();
                                        this.state = 1043;
                                        this.getter();
                                    }
                                    break;
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
    KotlinParser.prototype.multiVariableDeclaration = function () {
        var _localctx = new MultiVariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, KotlinParser.RULE_multiVariableDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1049;
                this.match(KotlinParser.LPAREN);
                this.state = 1050;
                this.variableDeclaration();
                this.state = 1055;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.COMMA) {
                    {
                        {
                            this.state = 1051;
                            this.match(KotlinParser.COMMA);
                            this.state = 1052;
                            this.variableDeclaration();
                        }
                    }
                    this.state = 1057;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1058;
                this.match(KotlinParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.variableDeclaration = function () {
        var _localctx = new VariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, KotlinParser.RULE_variableDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1060;
                this.simpleIdentifier();
                this.state = 1063;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.COLON) {
                    {
                        this.state = 1061;
                        this.match(KotlinParser.COLON);
                        this.state = 1062;
                        this.type();
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
    KotlinParser.prototype.getter = function () {
        var _localctx = new GetterContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, KotlinParser.RULE_getter);
        var _la;
        try {
            var _alt = void 0;
            this.state = 1114;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 153, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1066;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                            {
                                this.state = 1065;
                                this.modifierList();
                            }
                        }
                        this.state = 1068;
                        this.match(KotlinParser.GETTER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1070;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                            {
                                this.state = 1069;
                                this.modifierList();
                            }
                        }
                        this.state = 1072;
                        this.match(KotlinParser.GETTER);
                        this.state = 1076;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 1073;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 1078;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1079;
                        this.match(KotlinParser.LPAREN);
                        this.state = 1080;
                        this.match(KotlinParser.RPAREN);
                        this.state = 1095;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 149, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1084;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === KotlinParser.NL) {
                                        {
                                            {
                                                this.state = 1081;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                        this.state = 1086;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1087;
                                    this.match(KotlinParser.COLON);
                                    this.state = 1091;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === KotlinParser.NL) {
                                        {
                                            {
                                                this.state = 1088;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                        this.state = 1093;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1094;
                                    this.type();
                                }
                                break;
                        }
                        this.state = 1100;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 1097;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 1102;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1112;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case KotlinParser.LCURL:
                                {
                                    this.state = 1103;
                                    this.block();
                                }
                                break;
                            case KotlinParser.ASSIGNMENT:
                                {
                                    this.state = 1104;
                                    this.match(KotlinParser.ASSIGNMENT);
                                    this.state = 1108;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1105;
                                                    this.match(KotlinParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1110;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
                                    }
                                    this.state = 1111;
                                    this.expression();
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
    KotlinParser.prototype.setter = function () {
        var _localctx = new SetterContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, KotlinParser.RULE_setter);
        var _la;
        try {
            var _alt = void 0;
            this.state = 1151;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 161, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1117;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                            {
                                this.state = 1116;
                                this.modifierList();
                            }
                        }
                        this.state = 1119;
                        this.match(KotlinParser.SETTER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1121;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                            {
                                this.state = 1120;
                                this.modifierList();
                            }
                        }
                        this.state = 1123;
                        this.match(KotlinParser.SETTER);
                        this.state = 1127;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 1124;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 1129;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1130;
                        this.match(KotlinParser.LPAREN);
                        this.state = 1135;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    this.state = 1133;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case KotlinParser.AT:
                                        case KotlinParser.FILE:
                                        case KotlinParser.FIELD:
                                        case KotlinParser.PROPERTY:
                                        case KotlinParser.GET:
                                        case KotlinParser.SET:
                                        case KotlinParser.RECEIVER:
                                        case KotlinParser.PARAM:
                                        case KotlinParser.SETPARAM:
                                        case KotlinParser.DELEGATE:
                                        case KotlinParser.LabelReference:
                                            {
                                                this.state = 1131;
                                                this.annotations();
                                            }
                                            break;
                                        case KotlinParser.VARARG:
                                        case KotlinParser.NOINLINE:
                                        case KotlinParser.CROSSINLINE:
                                            {
                                                this.state = 1132;
                                                this.parameterModifier();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                            }
                            this.state = 1137;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
                        }
                        this.state = 1140;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 159, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1138;
                                    this.simpleIdentifier();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1139;
                                    this.parameter();
                                }
                                break;
                        }
                        this.state = 1142;
                        this.match(KotlinParser.RPAREN);
                        this.state = 1146;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 1143;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 1148;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1149;
                        this.functionBody();
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
    KotlinParser.prototype.typeAlias = function () {
        var _localctx = new TypeAliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, KotlinParser.RULE_typeAlias);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1154;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
                    {
                        this.state = 1153;
                        this.modifierList();
                    }
                }
                this.state = 1156;
                this.match(KotlinParser.TYPE_ALIAS);
                this.state = 1160;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1157;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1162;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1163;
                this.simpleIdentifier();
                this.state = 1171;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
                    case 1:
                        {
                            this.state = 1167;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1164;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1169;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1170;
                            this.typeParameters();
                        }
                        break;
                }
                this.state = 1176;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1173;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1178;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1179;
                this.match(KotlinParser.ASSIGNMENT);
                this.state = 1183;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1180;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1185;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1186;
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
    KotlinParser.prototype.typeParameters = function () {
        var _localctx = new TypeParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, KotlinParser.RULE_typeParameters);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1188;
                this.match(KotlinParser.LANGLE);
                this.state = 1192;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1189;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 1194;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
                }
                this.state = 1195;
                this.typeParameter();
                this.state = 1212;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1199;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1196;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1201;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1202;
                                this.match(KotlinParser.COMMA);
                                this.state = 1206;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1203;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1208;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
                                }
                                this.state = 1209;
                                this.typeParameter();
                            }
                        }
                    }
                    this.state = 1214;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
                }
                this.state = 1218;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1215;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1220;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1221;
                this.match(KotlinParser.RANGLE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.typeParameter = function () {
        var _localctx = new TypeParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, KotlinParser.RULE_typeParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1224;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 173, this._ctx)) {
                    case 1:
                        {
                            this.state = 1223;
                            this.modifierList();
                        }
                        break;
                }
                this.state = 1229;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1226;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1231;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1232;
                this.simpleIdentifier();
                this.state = 1247;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 177, this._ctx)) {
                    case 1:
                        {
                            this.state = 1236;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1233;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1238;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1239;
                            this.match(KotlinParser.COLON);
                            this.state = 1243;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1240;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1245;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1246;
                            this.type();
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
    KotlinParser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, KotlinParser.RULE_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1250;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 178, this._ctx)) {
                    case 1:
                        {
                            this.state = 1249;
                            this.typeModifierList();
                        }
                        break;
                }
                this.state = 1256;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 179, this._ctx)) {
                    case 1:
                        {
                            this.state = 1252;
                            this.functionType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1253;
                            this.parenthesizedType();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1254;
                            this.nullableType();
                        }
                        break;
                    case 4:
                        {
                            this.state = 1255;
                            this.typeReference();
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
    KotlinParser.prototype.typeModifierList = function () {
        var _localctx = new TypeModifierListContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, KotlinParser.RULE_typeModifierList);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1266;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 1266;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case KotlinParser.AT:
                                    case KotlinParser.FILE:
                                    case KotlinParser.FIELD:
                                    case KotlinParser.PROPERTY:
                                    case KotlinParser.GET:
                                    case KotlinParser.SET:
                                    case KotlinParser.RECEIVER:
                                    case KotlinParser.PARAM:
                                    case KotlinParser.SETPARAM:
                                    case KotlinParser.DELEGATE:
                                    case KotlinParser.LabelReference:
                                        {
                                            this.state = 1258;
                                            this.annotations();
                                        }
                                        break;
                                    case KotlinParser.SUSPEND:
                                        {
                                            this.state = 1259;
                                            this.match(KotlinParser.SUSPEND);
                                            this.state = 1263;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === KotlinParser.NL) {
                                                {
                                                    {
                                                        this.state = 1260;
                                                        this.match(KotlinParser.NL);
                                                    }
                                                }
                                                this.state = 1265;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1268;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
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
    KotlinParser.prototype.parenthesizedType = function () {
        var _localctx = new ParenthesizedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, KotlinParser.RULE_parenthesizedType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1270;
                this.match(KotlinParser.LPAREN);
                this.state = 1271;
                this.type();
                this.state = 1272;
                this.match(KotlinParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.nullableType = function () {
        var _localctx = new NullableTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, KotlinParser.RULE_nullableType);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1276;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 183, this._ctx)) {
                    case 1:
                        {
                            this.state = 1274;
                            this.typeReference();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1275;
                            this.parenthesizedType();
                        }
                        break;
                }
                this.state = 1281;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1278;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1283;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1285;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1284;
                                    this.match(KotlinParser.QUEST);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1287;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
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
    KotlinParser.prototype.typeReference = function () {
        var _localctx = new TypeReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, KotlinParser.RULE_typeReference);
        try {
            this.state = 1295;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 186, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1289;
                        this.match(KotlinParser.LPAREN);
                        this.state = 1290;
                        this.typeReference();
                        this.state = 1291;
                        this.match(KotlinParser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1293;
                        this.userType();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1294;
                        this.match(KotlinParser.DYNAMIC);
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
    KotlinParser.prototype.functionType = function () {
        var _localctx = new FunctionTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, KotlinParser.RULE_functionType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1311;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 189, this._ctx)) {
                    case 1:
                        {
                            this.state = 1297;
                            this.functionTypeReceiver();
                            this.state = 1301;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1298;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1303;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1304;
                            this.match(KotlinParser.DOT);
                            this.state = 1308;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1305;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1310;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        break;
                }
                this.state = 1313;
                this.functionTypeParameters();
                this.state = 1317;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1314;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1319;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1320;
                this.match(KotlinParser.ARROW);
                {
                    this.state = 1324;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === KotlinParser.NL) {
                        {
                            {
                                this.state = 1321;
                                this.match(KotlinParser.NL);
                            }
                        }
                        this.state = 1326;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1327;
                    this.type();
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
    KotlinParser.prototype.functionTypeReceiver = function () {
        var _localctx = new FunctionTypeReceiverContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, KotlinParser.RULE_functionTypeReceiver);
        try {
            this.state = 1332;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 192, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1329;
                        this.parenthesizedType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1330;
                        this.nullableType();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1331;
                        this.typeReference();
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
    KotlinParser.prototype.userType = function () {
        var _localctx = new UserTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, KotlinParser.RULE_userType);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1334;
                this.simpleUserType();
                this.state = 1351;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1338;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1335;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1340;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1341;
                                this.match(KotlinParser.DOT);
                                this.state = 1345;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1342;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1347;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1348;
                                this.simpleUserType();
                            }
                        }
                    }
                    this.state = 1353;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
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
    KotlinParser.prototype.simpleUserType = function () {
        var _localctx = new SimpleUserTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, KotlinParser.RULE_simpleUserType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1354;
                this.simpleIdentifier();
                this.state = 1362;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 197, this._ctx)) {
                    case 1:
                        {
                            this.state = 1358;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1355;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1360;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1361;
                            this.typeArguments();
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
    KotlinParser.prototype.functionTypeParameters = function () {
        var _localctx = new FunctionTypeParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, KotlinParser.RULE_functionTypeParameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1364;
                this.match(KotlinParser.LPAREN);
                this.state = 1367;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 198, this._ctx)) {
                    case 1:
                        {
                            this.state = 1365;
                            this.parameter();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1366;
                            this.type();
                        }
                        break;
                }
                this.state = 1376;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.COMMA) {
                    {
                        {
                            this.state = 1369;
                            this.match(KotlinParser.COMMA);
                            this.state = 1372;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 199, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1370;
                                        this.parameter();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1371;
                                        this.type();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1378;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1379;
                this.match(KotlinParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.typeConstraints = function () {
        var _localctx = new TypeConstraintsContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, KotlinParser.RULE_typeConstraints);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1381;
                this.match(KotlinParser.WHERE);
                this.state = 1385;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1382;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1387;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1388;
                this.typeConstraint();
                this.state = 1405;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1392;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1389;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1394;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1395;
                                this.match(KotlinParser.COMMA);
                                this.state = 1399;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1396;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1401;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1402;
                                this.typeConstraint();
                            }
                        }
                    }
                    this.state = 1407;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
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
    KotlinParser.prototype.typeConstraint = function () {
        var _localctx = new TypeConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, KotlinParser.RULE_typeConstraint);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1411;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (KotlinParser.FIELD - 93)) | (1 << (KotlinParser.PROPERTY - 93)) | (1 << (KotlinParser.GET - 93)) | (1 << (KotlinParser.SET - 93)) | (1 << (KotlinParser.RECEIVER - 93)) | (1 << (KotlinParser.PARAM - 93)) | (1 << (KotlinParser.SETPARAM - 93)) | (1 << (KotlinParser.DELEGATE - 93)))) !== 0) || _la === KotlinParser.LabelReference) {
                    {
                        {
                            this.state = 1408;
                            this.annotations();
                        }
                    }
                    this.state = 1413;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1414;
                this.simpleIdentifier();
                this.state = 1418;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1415;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1420;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1421;
                this.match(KotlinParser.COLON);
                this.state = 1425;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1422;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1427;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1428;
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
    KotlinParser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, KotlinParser.RULE_block);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1430;
                this.match(KotlinParser.LCURL);
                this.state = 1431;
                this.statements();
                this.state = 1432;
                this.match(KotlinParser.RCURL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.statements = function () {
        var _localctx = new StatementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, KotlinParser.RULE_statements);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1437;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1434;
                                this.anysemi();
                            }
                        }
                    }
                    this.state = 1439;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
                }
                this.state = 1454;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 212, this._ctx)) {
                    case 1:
                        {
                            this.state = 1440;
                            this.statement();
                            this.state = 1451;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 211, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1442;
                                            this._errHandler.sync(this);
                                            _alt = 1;
                                            do {
                                                switch (_alt) {
                                                    case 1:
                                                        {
                                                            {
                                                                this.state = 1441;
                                                                this.anysemi();
                                                            }
                                                        }
                                                        break;
                                                    default:
                                                        throw new NoViableAltException_1.NoViableAltException(this);
                                                }
                                                this.state = 1444;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 209, this._ctx);
                                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                                            this.state = 1447;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 210, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 1446;
                                                        this.statement();
                                                    }
                                                    break;
                                            }
                                        }
                                    }
                                }
                                this.state = 1453;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 211, this._ctx);
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
    KotlinParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, KotlinParser.RULE_statement);
        try {
            this.state = 1458;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 213, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1456;
                        this.declaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1457;
                        this.blockLevelExpression();
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
    KotlinParser.prototype.blockLevelExpression = function () {
        var _localctx = new BlockLevelExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, KotlinParser.RULE_blockLevelExpression);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1463;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1460;
                                this.annotations();
                            }
                        }
                    }
                    this.state = 1465;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
                }
                this.state = 1469;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 215, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1466;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 1471;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 215, this._ctx);
                }
                this.state = 1472;
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
    KotlinParser.prototype.declaration = function () {
        var _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, KotlinParser.RULE_declaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1477;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.LabelDefinition) {
                    {
                        {
                            this.state = 1474;
                            this.labelDefinition();
                        }
                    }
                    this.state = 1479;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1484;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 217, this._ctx)) {
                    case 1:
                        {
                            this.state = 1480;
                            this.classDeclaration();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1481;
                            this.functionDeclaration();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1482;
                            this.propertyDeclaration();
                        }
                        break;
                    case 4:
                        {
                            this.state = 1483;
                            this.typeAlias();
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
    KotlinParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, KotlinParser.RULE_expression);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1486;
                this.disjunction();
                this.state = 1492;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 218, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1487;
                                this.assignmentOperator();
                                this.state = 1488;
                                this.disjunction();
                            }
                        }
                    }
                    this.state = 1494;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 218, this._ctx);
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
    KotlinParser.prototype.disjunction = function () {
        var _localctx = new DisjunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, KotlinParser.RULE_disjunction);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1495;
                this.conjunction();
                this.state = 1512;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1499;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1496;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1501;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1502;
                                this.match(KotlinParser.DISJ);
                                this.state = 1506;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1503;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1508;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
                                }
                                this.state = 1509;
                                this.conjunction();
                            }
                        }
                    }
                    this.state = 1514;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
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
    KotlinParser.prototype.conjunction = function () {
        var _localctx = new ConjunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, KotlinParser.RULE_conjunction);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1515;
                this.equalityComparison();
                this.state = 1532;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1519;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1516;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1521;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1522;
                                this.match(KotlinParser.CONJ);
                                this.state = 1526;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1523;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1528;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
                                }
                                this.state = 1529;
                                this.equalityComparison();
                            }
                        }
                    }
                    this.state = 1534;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
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
    KotlinParser.prototype.equalityComparison = function () {
        var _localctx = new EqualityComparisonContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, KotlinParser.RULE_equalityComparison);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1535;
                this.comparison();
                this.state = 1547;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1536;
                                this.equalityOperation();
                                this.state = 1540;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1537;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1542;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
                                }
                                this.state = 1543;
                                this.comparison();
                            }
                        }
                    }
                    this.state = 1549;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
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
    KotlinParser.prototype.comparison = function () {
        var _localctx = new ComparisonContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, KotlinParser.RULE_comparison);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1550;
                this.namedInfix();
                this.state = 1560;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 228, this._ctx)) {
                    case 1:
                        {
                            this.state = 1551;
                            this.comparisonOperator();
                            this.state = 1555;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 227, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1552;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 1557;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 227, this._ctx);
                            }
                            this.state = 1558;
                            this.namedInfix();
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
    KotlinParser.prototype.namedInfix = function () {
        var _localctx = new NamedInfixContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, KotlinParser.RULE_namedInfix);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1562;
                this.elvisExpression();
                this.state = 1585;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 232, this._ctx)) {
                    case 1:
                        {
                            this.state = 1572;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            {
                                                this.state = 1563;
                                                this.inOperator();
                                                this.state = 1567;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
                                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                    if (_alt === 1) {
                                                        {
                                                            {
                                                                this.state = 1564;
                                                                this.match(KotlinParser.NL);
                                                            }
                                                        }
                                                    }
                                                    this.state = 1569;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
                                                }
                                                this.state = 1570;
                                                this.elvisExpression();
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 1574;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 230, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                    case 2:
                        {
                            {
                                this.state = 1576;
                                this.isOperator();
                                this.state = 1580;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1577;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1582;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1583;
                                this.type();
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
    KotlinParser.prototype.elvisExpression = function () {
        var _localctx = new ElvisExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, KotlinParser.RULE_elvisExpression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1587;
                this.infixFunctionCall();
                this.state = 1604;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 235, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1591;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1588;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1593;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1594;
                                this.match(KotlinParser.ELVIS);
                                this.state = 1598;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 234, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1595;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1600;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 234, this._ctx);
                                }
                                this.state = 1601;
                                this.infixFunctionCall();
                            }
                        }
                    }
                    this.state = 1606;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 235, this._ctx);
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
    KotlinParser.prototype.infixFunctionCall = function () {
        var _localctx = new InfixFunctionCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, KotlinParser.RULE_infixFunctionCall);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1607;
                this.rangeExpression();
                this.state = 1619;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1608;
                                this.simpleIdentifier();
                                this.state = 1612;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 236, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1609;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1614;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 236, this._ctx);
                                }
                                this.state = 1615;
                                this.rangeExpression();
                            }
                        }
                    }
                    this.state = 1621;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
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
    KotlinParser.prototype.rangeExpression = function () {
        var _localctx = new RangeExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, KotlinParser.RULE_rangeExpression);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1622;
                this.additiveExpression();
                this.state = 1633;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 239, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1623;
                                this.match(KotlinParser.RANGE);
                                this.state = 1627;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 238, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1624;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1629;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 238, this._ctx);
                                }
                                this.state = 1630;
                                this.additiveExpression();
                            }
                        }
                    }
                    this.state = 1635;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 239, this._ctx);
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
    KotlinParser.prototype.additiveExpression = function () {
        var _localctx = new AdditiveExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, KotlinParser.RULE_additiveExpression);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1636;
                this.multiplicativeExpression();
                this.state = 1648;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 241, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1637;
                                this.additiveOperator();
                                this.state = 1641;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 240, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1638;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1643;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 240, this._ctx);
                                }
                                this.state = 1644;
                                this.multiplicativeExpression();
                            }
                        }
                    }
                    this.state = 1650;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 241, this._ctx);
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
    KotlinParser.prototype.multiplicativeExpression = function () {
        var _localctx = new MultiplicativeExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, KotlinParser.RULE_multiplicativeExpression);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1651;
                this.typeRHS();
                this.state = 1663;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 243, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1652;
                                this.multiplicativeOperation();
                                this.state = 1656;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1653;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1658;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
                                }
                                this.state = 1659;
                                this.typeRHS();
                            }
                        }
                    }
                    this.state = 1665;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 243, this._ctx);
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
    KotlinParser.prototype.typeRHS = function () {
        var _localctx = new TypeRHSContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, KotlinParser.RULE_typeRHS);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1666;
                this.prefixUnaryExpression();
                this.state = 1678;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 245, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1670;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1667;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1672;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1673;
                                this.typeOperation();
                                this.state = 1674;
                                this.prefixUnaryExpression();
                            }
                        }
                    }
                    this.state = 1680;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 245, this._ctx);
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
    KotlinParser.prototype.prefixUnaryExpression = function () {
        var _localctx = new PrefixUnaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, KotlinParser.RULE_prefixUnaryExpression);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1684;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 246, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1681;
                                this.prefixUnaryOperation();
                            }
                        }
                    }
                    this.state = 1686;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 246, this._ctx);
                }
                this.state = 1687;
                this.postfixUnaryExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.postfixUnaryExpression = function () {
        var _localctx = new PostfixUnaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, KotlinParser.RULE_postfixUnaryExpression);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1691;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 247, this._ctx)) {
                    case 1:
                        {
                            this.state = 1689;
                            this.atomicExpression();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1690;
                            this.callableReference();
                        }
                        break;
                }
                this.state = 1696;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 248, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1693;
                                this.postfixUnaryOperation();
                            }
                        }
                    }
                    this.state = 1698;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 248, this._ctx);
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
    KotlinParser.prototype.atomicExpression = function () {
        var _localctx = new AtomicExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, KotlinParser.RULE_atomicExpression);
        try {
            this.state = 1711;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.LPAREN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1699;
                        this.parenthesizedExpression();
                    }
                    break;
                case KotlinParser.QUOTE_OPEN:
                case KotlinParser.TRIPLE_QUOTE_OPEN:
                case KotlinParser.RealLiteral:
                case KotlinParser.LongLiteral:
                case KotlinParser.IntegerLiteral:
                case KotlinParser.HexLiteral:
                case KotlinParser.BinLiteral:
                case KotlinParser.BooleanLiteral:
                case KotlinParser.NullLiteral:
                case KotlinParser.CharacterLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1700;
                        this.literalConstant();
                    }
                    break;
                case KotlinParser.LCURL:
                case KotlinParser.AT:
                case KotlinParser.FILE:
                case KotlinParser.FIELD:
                case KotlinParser.PROPERTY:
                case KotlinParser.GET:
                case KotlinParser.SET:
                case KotlinParser.RECEIVER:
                case KotlinParser.PARAM:
                case KotlinParser.SETPARAM:
                case KotlinParser.DELEGATE:
                case KotlinParser.LabelReference:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1701;
                        this.functionLiteral();
                    }
                    break;
                case KotlinParser.THIS:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1702;
                        this.thisExpression();
                    }
                    break;
                case KotlinParser.SUPER:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1703;
                        this.superExpression();
                    }
                    break;
                case KotlinParser.IF:
                case KotlinParser.WHEN:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1704;
                        this.conditionalExpression();
                    }
                    break;
                case KotlinParser.TRY:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1705;
                        this.tryExpression();
                    }
                    break;
                case KotlinParser.OBJECT:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1706;
                        this.objectLiteral();
                    }
                    break;
                case KotlinParser.RETURN_AT:
                case KotlinParser.CONTINUE_AT:
                case KotlinParser.BREAK_AT:
                case KotlinParser.THROW:
                case KotlinParser.RETURN:
                case KotlinParser.CONTINUE:
                case KotlinParser.BREAK:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1707;
                        this.jumpExpression();
                    }
                    break;
                case KotlinParser.FOR:
                case KotlinParser.DO:
                case KotlinParser.WHILE:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1708;
                        this.loopExpression();
                    }
                    break;
                case KotlinParser.LSQUARE:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1709;
                        this.collectionLiteral();
                    }
                    break;
                case KotlinParser.IMPORT:
                case KotlinParser.CONSTRUCTOR:
                case KotlinParser.BY:
                case KotlinParser.COMPANION:
                case KotlinParser.INIT:
                case KotlinParser.WHERE:
                case KotlinParser.CATCH:
                case KotlinParser.FINALLY:
                case KotlinParser.OUT:
                case KotlinParser.GETTER:
                case KotlinParser.SETTER:
                case KotlinParser.DYNAMIC:
                case KotlinParser.PUBLIC:
                case KotlinParser.PRIVATE:
                case KotlinParser.PROTECTED:
                case KotlinParser.INTERNAL:
                case KotlinParser.ENUM:
                case KotlinParser.SEALED:
                case KotlinParser.ANNOTATION:
                case KotlinParser.DATA:
                case KotlinParser.INNER:
                case KotlinParser.TAILREC:
                case KotlinParser.OPERATOR:
                case KotlinParser.INLINE:
                case KotlinParser.INFIX:
                case KotlinParser.EXTERNAL:
                case KotlinParser.SUSPEND:
                case KotlinParser.OVERRIDE:
                case KotlinParser.ABSTRACT:
                case KotlinParser.FINAL:
                case KotlinParser.OPEN:
                case KotlinParser.CONST:
                case KotlinParser.LATEINIT:
                case KotlinParser.VARARG:
                case KotlinParser.NOINLINE:
                case KotlinParser.CROSSINLINE:
                case KotlinParser.REIFIED:
                case KotlinParser.Identifier:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1710;
                        this.simpleIdentifier();
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
    KotlinParser.prototype.parenthesizedExpression = function () {
        var _localctx = new ParenthesizedExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, KotlinParser.RULE_parenthesizedExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1713;
                this.match(KotlinParser.LPAREN);
                this.state = 1714;
                this.expression();
                this.state = 1715;
                this.match(KotlinParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.callSuffix = function () {
        var _localctx = new CallSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, KotlinParser.RULE_callSuffix);
        try {
            var _alt = void 0;
            this.state = 1739;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.LANGLE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1717;
                        this.typeArguments();
                        this.state = 1719;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 250, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1718;
                                    this.valueArguments();
                                }
                                break;
                        }
                        this.state = 1724;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 251, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1721;
                                        this.annotatedLambda();
                                    }
                                }
                            }
                            this.state = 1726;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 251, this._ctx);
                        }
                    }
                    break;
                case KotlinParser.LPAREN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1727;
                        this.valueArguments();
                        this.state = 1731;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 252, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1728;
                                        this.annotatedLambda();
                                    }
                                }
                            }
                            this.state = 1733;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 252, this._ctx);
                        }
                    }
                    break;
                case KotlinParser.NL:
                case KotlinParser.LCURL:
                case KotlinParser.AT:
                case KotlinParser.FILE:
                case KotlinParser.IMPORT:
                case KotlinParser.CONSTRUCTOR:
                case KotlinParser.BY:
                case KotlinParser.COMPANION:
                case KotlinParser.INIT:
                case KotlinParser.WHERE:
                case KotlinParser.CATCH:
                case KotlinParser.FINALLY:
                case KotlinParser.OUT:
                case KotlinParser.FIELD:
                case KotlinParser.PROPERTY:
                case KotlinParser.GET:
                case KotlinParser.SET:
                case KotlinParser.GETTER:
                case KotlinParser.SETTER:
                case KotlinParser.RECEIVER:
                case KotlinParser.PARAM:
                case KotlinParser.SETPARAM:
                case KotlinParser.DELEGATE:
                case KotlinParser.DYNAMIC:
                case KotlinParser.PUBLIC:
                case KotlinParser.PRIVATE:
                case KotlinParser.PROTECTED:
                case KotlinParser.INTERNAL:
                case KotlinParser.ENUM:
                case KotlinParser.SEALED:
                case KotlinParser.ANNOTATION:
                case KotlinParser.DATA:
                case KotlinParser.INNER:
                case KotlinParser.TAILREC:
                case KotlinParser.OPERATOR:
                case KotlinParser.INLINE:
                case KotlinParser.INFIX:
                case KotlinParser.EXTERNAL:
                case KotlinParser.SUSPEND:
                case KotlinParser.OVERRIDE:
                case KotlinParser.ABSTRACT:
                case KotlinParser.FINAL:
                case KotlinParser.OPEN:
                case KotlinParser.CONST:
                case KotlinParser.LATEINIT:
                case KotlinParser.VARARG:
                case KotlinParser.NOINLINE:
                case KotlinParser.CROSSINLINE:
                case KotlinParser.REIFIED:
                case KotlinParser.Identifier:
                case KotlinParser.LabelReference:
                case KotlinParser.LabelDefinition:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1735;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 1734;
                                            this.annotatedLambda();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 1737;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 253, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
    KotlinParser.prototype.annotatedLambda = function () {
        var _localctx = new AnnotatedLambdaContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, KotlinParser.RULE_annotatedLambda);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1744;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0)) {
                    {
                        {
                            this.state = 1741;
                            this.unescapedAnnotation();
                        }
                    }
                    this.state = 1746;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1748;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.LabelDefinition) {
                    {
                        this.state = 1747;
                        this.match(KotlinParser.LabelDefinition);
                    }
                }
                this.state = 1753;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1750;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1755;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1756;
                this.functionLiteral();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.arrayAccess = function () {
        var _localctx = new ArrayAccessContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, KotlinParser.RULE_arrayAccess);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1758;
                this.match(KotlinParser.LSQUARE);
                this.state = 1767;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KotlinParser.NL) | (1 << KotlinParser.LPAREN) | (1 << KotlinParser.LSQUARE) | (1 << KotlinParser.LCURL) | (1 << KotlinParser.ADD) | (1 << KotlinParser.SUB) | (1 << KotlinParser.INCR) | (1 << KotlinParser.DECR) | (1 << KotlinParser.EXCL))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (KotlinParser.COLONCOLON - 36)) | (1 << (KotlinParser.Q_COLONCOLON - 36)) | (1 << (KotlinParser.AT - 36)) | (1 << (KotlinParser.RETURN_AT - 36)) | (1 << (KotlinParser.CONTINUE_AT - 36)) | (1 << (KotlinParser.BREAK_AT - 36)) | (1 << (KotlinParser.FILE - 36)) | (1 << (KotlinParser.IMPORT - 36)) | (1 << (KotlinParser.OBJECT - 36)) | (1 << (KotlinParser.CONSTRUCTOR - 36)) | (1 << (KotlinParser.BY - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (KotlinParser.COMPANION - 68)) | (1 << (KotlinParser.INIT - 68)) | (1 << (KotlinParser.THIS - 68)) | (1 << (KotlinParser.SUPER - 68)) | (1 << (KotlinParser.WHERE - 68)) | (1 << (KotlinParser.IF - 68)) | (1 << (KotlinParser.WHEN - 68)) | (1 << (KotlinParser.TRY - 68)) | (1 << (KotlinParser.CATCH - 68)) | (1 << (KotlinParser.FINALLY - 68)) | (1 << (KotlinParser.FOR - 68)) | (1 << (KotlinParser.DO - 68)) | (1 << (KotlinParser.WHILE - 68)) | (1 << (KotlinParser.THROW - 68)) | (1 << (KotlinParser.RETURN - 68)) | (1 << (KotlinParser.CONTINUE - 68)) | (1 << (KotlinParser.BREAK - 68)) | (1 << (KotlinParser.OUT - 68)) | (1 << (KotlinParser.FIELD - 68)) | (1 << (KotlinParser.PROPERTY - 68)) | (1 << (KotlinParser.GET - 68)) | (1 << (KotlinParser.SET - 68)) | (1 << (KotlinParser.GETTER - 68)) | (1 << (KotlinParser.SETTER - 68)) | (1 << (KotlinParser.RECEIVER - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (KotlinParser.PARAM - 100)) | (1 << (KotlinParser.SETPARAM - 100)) | (1 << (KotlinParser.DELEGATE - 100)) | (1 << (KotlinParser.DYNAMIC - 100)) | (1 << (KotlinParser.PUBLIC - 100)) | (1 << (KotlinParser.PRIVATE - 100)) | (1 << (KotlinParser.PROTECTED - 100)) | (1 << (KotlinParser.INTERNAL - 100)) | (1 << (KotlinParser.ENUM - 100)) | (1 << (KotlinParser.SEALED - 100)) | (1 << (KotlinParser.ANNOTATION - 100)) | (1 << (KotlinParser.DATA - 100)) | (1 << (KotlinParser.INNER - 100)) | (1 << (KotlinParser.TAILREC - 100)) | (1 << (KotlinParser.OPERATOR - 100)) | (1 << (KotlinParser.INLINE - 100)) | (1 << (KotlinParser.INFIX - 100)) | (1 << (KotlinParser.EXTERNAL - 100)) | (1 << (KotlinParser.SUSPEND - 100)) | (1 << (KotlinParser.OVERRIDE - 100)) | (1 << (KotlinParser.ABSTRACT - 100)) | (1 << (KotlinParser.FINAL - 100)) | (1 << (KotlinParser.OPEN - 100)) | (1 << (KotlinParser.CONST - 100)) | (1 << (KotlinParser.LATEINIT - 100)) | (1 << (KotlinParser.VARARG - 100)) | (1 << (KotlinParser.NOINLINE - 100)) | (1 << (KotlinParser.CROSSINLINE - 100)) | (1 << (KotlinParser.REIFIED - 100)) | (1 << (KotlinParser.QUOTE_OPEN - 100)) | (1 << (KotlinParser.TRIPLE_QUOTE_OPEN - 100)) | (1 << (KotlinParser.RealLiteral - 100)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (KotlinParser.LongLiteral - 134)) | (1 << (KotlinParser.IntegerLiteral - 134)) | (1 << (KotlinParser.HexLiteral - 134)) | (1 << (KotlinParser.BinLiteral - 134)) | (1 << (KotlinParser.BooleanLiteral - 134)) | (1 << (KotlinParser.NullLiteral - 134)) | (1 << (KotlinParser.Identifier - 134)) | (1 << (KotlinParser.LabelReference - 134)) | (1 << (KotlinParser.LabelDefinition - 134)) | (1 << (KotlinParser.CharacterLiteral - 134)))) !== 0)) {
                    {
                        this.state = 1759;
                        this.expression();
                        this.state = 1764;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.COMMA) {
                            {
                                {
                                    this.state = 1760;
                                    this.match(KotlinParser.COMMA);
                                    this.state = 1761;
                                    this.expression();
                                }
                            }
                            this.state = 1766;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 1769;
                this.match(KotlinParser.RSQUARE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.valueArguments = function () {
        var _localctx = new ValueArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, KotlinParser.RULE_valueArguments);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1771;
                this.match(KotlinParser.LPAREN);
                this.state = 1780;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KotlinParser.NL) | (1 << KotlinParser.LPAREN) | (1 << KotlinParser.LSQUARE) | (1 << KotlinParser.LCURL) | (1 << KotlinParser.MULT) | (1 << KotlinParser.ADD) | (1 << KotlinParser.SUB) | (1 << KotlinParser.INCR) | (1 << KotlinParser.DECR) | (1 << KotlinParser.EXCL))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (KotlinParser.COLONCOLON - 36)) | (1 << (KotlinParser.Q_COLONCOLON - 36)) | (1 << (KotlinParser.AT - 36)) | (1 << (KotlinParser.RETURN_AT - 36)) | (1 << (KotlinParser.CONTINUE_AT - 36)) | (1 << (KotlinParser.BREAK_AT - 36)) | (1 << (KotlinParser.FILE - 36)) | (1 << (KotlinParser.IMPORT - 36)) | (1 << (KotlinParser.OBJECT - 36)) | (1 << (KotlinParser.CONSTRUCTOR - 36)) | (1 << (KotlinParser.BY - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (KotlinParser.COMPANION - 68)) | (1 << (KotlinParser.INIT - 68)) | (1 << (KotlinParser.THIS - 68)) | (1 << (KotlinParser.SUPER - 68)) | (1 << (KotlinParser.WHERE - 68)) | (1 << (KotlinParser.IF - 68)) | (1 << (KotlinParser.WHEN - 68)) | (1 << (KotlinParser.TRY - 68)) | (1 << (KotlinParser.CATCH - 68)) | (1 << (KotlinParser.FINALLY - 68)) | (1 << (KotlinParser.FOR - 68)) | (1 << (KotlinParser.DO - 68)) | (1 << (KotlinParser.WHILE - 68)) | (1 << (KotlinParser.THROW - 68)) | (1 << (KotlinParser.RETURN - 68)) | (1 << (KotlinParser.CONTINUE - 68)) | (1 << (KotlinParser.BREAK - 68)) | (1 << (KotlinParser.OUT - 68)) | (1 << (KotlinParser.FIELD - 68)) | (1 << (KotlinParser.PROPERTY - 68)) | (1 << (KotlinParser.GET - 68)) | (1 << (KotlinParser.SET - 68)) | (1 << (KotlinParser.GETTER - 68)) | (1 << (KotlinParser.SETTER - 68)) | (1 << (KotlinParser.RECEIVER - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (KotlinParser.PARAM - 100)) | (1 << (KotlinParser.SETPARAM - 100)) | (1 << (KotlinParser.DELEGATE - 100)) | (1 << (KotlinParser.DYNAMIC - 100)) | (1 << (KotlinParser.PUBLIC - 100)) | (1 << (KotlinParser.PRIVATE - 100)) | (1 << (KotlinParser.PROTECTED - 100)) | (1 << (KotlinParser.INTERNAL - 100)) | (1 << (KotlinParser.ENUM - 100)) | (1 << (KotlinParser.SEALED - 100)) | (1 << (KotlinParser.ANNOTATION - 100)) | (1 << (KotlinParser.DATA - 100)) | (1 << (KotlinParser.INNER - 100)) | (1 << (KotlinParser.TAILREC - 100)) | (1 << (KotlinParser.OPERATOR - 100)) | (1 << (KotlinParser.INLINE - 100)) | (1 << (KotlinParser.INFIX - 100)) | (1 << (KotlinParser.EXTERNAL - 100)) | (1 << (KotlinParser.SUSPEND - 100)) | (1 << (KotlinParser.OVERRIDE - 100)) | (1 << (KotlinParser.ABSTRACT - 100)) | (1 << (KotlinParser.FINAL - 100)) | (1 << (KotlinParser.OPEN - 100)) | (1 << (KotlinParser.CONST - 100)) | (1 << (KotlinParser.LATEINIT - 100)) | (1 << (KotlinParser.VARARG - 100)) | (1 << (KotlinParser.NOINLINE - 100)) | (1 << (KotlinParser.CROSSINLINE - 100)) | (1 << (KotlinParser.REIFIED - 100)) | (1 << (KotlinParser.QUOTE_OPEN - 100)) | (1 << (KotlinParser.TRIPLE_QUOTE_OPEN - 100)) | (1 << (KotlinParser.RealLiteral - 100)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (KotlinParser.LongLiteral - 134)) | (1 << (KotlinParser.IntegerLiteral - 134)) | (1 << (KotlinParser.HexLiteral - 134)) | (1 << (KotlinParser.BinLiteral - 134)) | (1 << (KotlinParser.BooleanLiteral - 134)) | (1 << (KotlinParser.NullLiteral - 134)) | (1 << (KotlinParser.Identifier - 134)) | (1 << (KotlinParser.LabelReference - 134)) | (1 << (KotlinParser.LabelDefinition - 134)) | (1 << (KotlinParser.CharacterLiteral - 134)))) !== 0)) {
                    {
                        this.state = 1772;
                        this.valueArgument();
                        this.state = 1777;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.COMMA) {
                            {
                                {
                                    this.state = 1773;
                                    this.match(KotlinParser.COMMA);
                                    this.state = 1774;
                                    this.valueArgument();
                                }
                            }
                            this.state = 1779;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 1782;
                this.match(KotlinParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.typeArguments = function () {
        var _localctx = new TypeArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, KotlinParser.RULE_typeArguments);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1784;
                this.match(KotlinParser.LANGLE);
                this.state = 1788;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1785;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1790;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1791;
                this.typeProjection();
                this.state = 1802;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 264, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1795;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1792;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1797;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1798;
                                this.match(KotlinParser.COMMA);
                                this.state = 1799;
                                this.typeProjection();
                            }
                        }
                    }
                    this.state = 1804;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 264, this._ctx);
                }
                this.state = 1808;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1805;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1810;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1811;
                this.match(KotlinParser.RANGLE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.typeProjection = function () {
        var _localctx = new TypeProjectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, KotlinParser.RULE_typeProjection);
        try {
            this.state = 1818;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.LPAREN:
                case KotlinParser.AT:
                case KotlinParser.FILE:
                case KotlinParser.IMPORT:
                case KotlinParser.CONSTRUCTOR:
                case KotlinParser.BY:
                case KotlinParser.COMPANION:
                case KotlinParser.INIT:
                case KotlinParser.WHERE:
                case KotlinParser.CATCH:
                case KotlinParser.FINALLY:
                case KotlinParser.IN:
                case KotlinParser.OUT:
                case KotlinParser.FIELD:
                case KotlinParser.PROPERTY:
                case KotlinParser.GET:
                case KotlinParser.SET:
                case KotlinParser.GETTER:
                case KotlinParser.SETTER:
                case KotlinParser.RECEIVER:
                case KotlinParser.PARAM:
                case KotlinParser.SETPARAM:
                case KotlinParser.DELEGATE:
                case KotlinParser.DYNAMIC:
                case KotlinParser.PUBLIC:
                case KotlinParser.PRIVATE:
                case KotlinParser.PROTECTED:
                case KotlinParser.INTERNAL:
                case KotlinParser.ENUM:
                case KotlinParser.SEALED:
                case KotlinParser.ANNOTATION:
                case KotlinParser.DATA:
                case KotlinParser.INNER:
                case KotlinParser.TAILREC:
                case KotlinParser.OPERATOR:
                case KotlinParser.INLINE:
                case KotlinParser.INFIX:
                case KotlinParser.EXTERNAL:
                case KotlinParser.SUSPEND:
                case KotlinParser.OVERRIDE:
                case KotlinParser.ABSTRACT:
                case KotlinParser.FINAL:
                case KotlinParser.OPEN:
                case KotlinParser.CONST:
                case KotlinParser.LATEINIT:
                case KotlinParser.VARARG:
                case KotlinParser.NOINLINE:
                case KotlinParser.CROSSINLINE:
                case KotlinParser.REIFIED:
                case KotlinParser.Identifier:
                case KotlinParser.LabelReference:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1814;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 266, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1813;
                                    this.typeProjectionModifierList();
                                }
                                break;
                        }
                        this.state = 1816;
                        this.type();
                    }
                    break;
                case KotlinParser.MULT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1817;
                        this.match(KotlinParser.MULT);
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
    KotlinParser.prototype.typeProjectionModifierList = function () {
        var _localctx = new TypeProjectionModifierListContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, KotlinParser.RULE_typeProjectionModifierList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1821;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1820;
                                    this.varianceAnnotation();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1823;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 268, this._ctx);
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
    KotlinParser.prototype.valueArgument = function () {
        var _localctx = new ValueArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, KotlinParser.RULE_valueArgument);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1839;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 271, this._ctx)) {
                    case 1:
                        {
                            this.state = 1825;
                            this.simpleIdentifier();
                            this.state = 1829;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1826;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1831;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1832;
                            this.match(KotlinParser.ASSIGNMENT);
                            this.state = 1836;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 270, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1833;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 1838;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 270, this._ctx);
                            }
                        }
                        break;
                }
                this.state = 1842;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.MULT) {
                    {
                        this.state = 1841;
                        this.match(KotlinParser.MULT);
                    }
                }
                this.state = 1847;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1844;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 1849;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
                }
                this.state = 1850;
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
    KotlinParser.prototype.literalConstant = function () {
        var _localctx = new LiteralConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, KotlinParser.RULE_literalConstant);
        try {
            this.state = 1861;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.BooleanLiteral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1852;
                        this.match(KotlinParser.BooleanLiteral);
                    }
                    break;
                case KotlinParser.IntegerLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1853;
                        this.match(KotlinParser.IntegerLiteral);
                    }
                    break;
                case KotlinParser.QUOTE_OPEN:
                case KotlinParser.TRIPLE_QUOTE_OPEN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1854;
                        this.stringLiteral();
                    }
                    break;
                case KotlinParser.HexLiteral:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1855;
                        this.match(KotlinParser.HexLiteral);
                    }
                    break;
                case KotlinParser.BinLiteral:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1856;
                        this.match(KotlinParser.BinLiteral);
                    }
                    break;
                case KotlinParser.CharacterLiteral:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1857;
                        this.match(KotlinParser.CharacterLiteral);
                    }
                    break;
                case KotlinParser.RealLiteral:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1858;
                        this.match(KotlinParser.RealLiteral);
                    }
                    break;
                case KotlinParser.NullLiteral:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1859;
                        this.match(KotlinParser.NullLiteral);
                    }
                    break;
                case KotlinParser.LongLiteral:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1860;
                        this.match(KotlinParser.LongLiteral);
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
    KotlinParser.prototype.stringLiteral = function () {
        var _localctx = new StringLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, KotlinParser.RULE_stringLiteral);
        try {
            this.state = 1865;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.QUOTE_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1863;
                        this.lineStringLiteral();
                    }
                    break;
                case KotlinParser.TRIPLE_QUOTE_OPEN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1864;
                        this.multiLineStringLiteral();
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
    KotlinParser.prototype.lineStringLiteral = function () {
        var _localctx = new LineStringLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, KotlinParser.RULE_lineStringLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1867;
                this.match(KotlinParser.QUOTE_OPEN);
                this.state = 1872;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & ((1 << (KotlinParser.LineStrRef - 156)) | (1 << (KotlinParser.LineStrText - 156)) | (1 << (KotlinParser.LineStrEscapedChar - 156)) | (1 << (KotlinParser.LineStrExprStart - 156)))) !== 0)) {
                    {
                        this.state = 1870;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case KotlinParser.LineStrRef:
                            case KotlinParser.LineStrText:
                            case KotlinParser.LineStrEscapedChar:
                                {
                                    this.state = 1868;
                                    this.lineStringContent();
                                }
                                break;
                            case KotlinParser.LineStrExprStart:
                                {
                                    this.state = 1869;
                                    this.lineStringExpression();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 1874;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1875;
                this.match(KotlinParser.QUOTE_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.multiLineStringLiteral = function () {
        var _localctx = new MultiLineStringLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, KotlinParser.RULE_multiLineStringLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1877;
                this.match(KotlinParser.TRIPLE_QUOTE_OPEN);
                this.state = 1884;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.QUOTE_OPEN || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (KotlinParser.MultiLineStringQuote - 161)) | (1 << (KotlinParser.MultiLineStrRef - 161)) | (1 << (KotlinParser.MultiLineStrText - 161)) | (1 << (KotlinParser.MultiLineStrEscapedChar - 161)) | (1 << (KotlinParser.MultiLineStrExprStart - 161)))) !== 0)) {
                    {
                        this.state = 1882;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case KotlinParser.MultiLineStrRef:
                            case KotlinParser.MultiLineStrText:
                            case KotlinParser.MultiLineStrEscapedChar:
                                {
                                    this.state = 1878;
                                    this.multiLineStringContent();
                                }
                                break;
                            case KotlinParser.MultiLineStrExprStart:
                                {
                                    this.state = 1879;
                                    this.multiLineStringExpression();
                                }
                                break;
                            case KotlinParser.QUOTE_OPEN:
                                {
                                    this.state = 1880;
                                    this.lineStringLiteral();
                                }
                                break;
                            case KotlinParser.MultiLineStringQuote:
                                {
                                    this.state = 1881;
                                    this.match(KotlinParser.MultiLineStringQuote);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 1886;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1887;
                this.match(KotlinParser.TRIPLE_QUOTE_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.lineStringContent = function () {
        var _localctx = new LineStringContentContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, KotlinParser.RULE_lineStringContent);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1889;
                _la = this._input.LA(1);
                if (!(((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & ((1 << (KotlinParser.LineStrRef - 156)) | (1 << (KotlinParser.LineStrText - 156)) | (1 << (KotlinParser.LineStrEscapedChar - 156)))) !== 0))) {
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
    KotlinParser.prototype.lineStringExpression = function () {
        var _localctx = new LineStringExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, KotlinParser.RULE_lineStringExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1891;
                this.match(KotlinParser.LineStrExprStart);
                this.state = 1892;
                this.expression();
                this.state = 1893;
                this.match(KotlinParser.RCURL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.multiLineStringContent = function () {
        var _localctx = new MultiLineStringContentContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, KotlinParser.RULE_multiLineStringContent);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1895;
                _la = this._input.LA(1);
                if (!(((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (KotlinParser.MultiLineStrRef - 162)) | (1 << (KotlinParser.MultiLineStrText - 162)) | (1 << (KotlinParser.MultiLineStrEscapedChar - 162)))) !== 0))) {
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
    KotlinParser.prototype.multiLineStringExpression = function () {
        var _localctx = new MultiLineStringExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, KotlinParser.RULE_multiLineStringExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1897;
                this.match(KotlinParser.MultiLineStrExprStart);
                this.state = 1898;
                this.expression();
                this.state = 1899;
                this.match(KotlinParser.RCURL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.functionLiteral = function () {
        var _localctx = new FunctionLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, KotlinParser.RULE_functionLiteral);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1904;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (KotlinParser.FIELD - 93)) | (1 << (KotlinParser.PROPERTY - 93)) | (1 << (KotlinParser.GET - 93)) | (1 << (KotlinParser.SET - 93)) | (1 << (KotlinParser.RECEIVER - 93)) | (1 << (KotlinParser.PARAM - 93)) | (1 << (KotlinParser.SETPARAM - 93)) | (1 << (KotlinParser.DELEGATE - 93)))) !== 0) || _la === KotlinParser.LabelReference) {
                    {
                        {
                            this.state = 1901;
                            this.annotations();
                        }
                    }
                    this.state = 1906;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1953;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 287, this._ctx)) {
                    case 1:
                        {
                            this.state = 1907;
                            this.match(KotlinParser.LCURL);
                            this.state = 1911;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 281, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1908;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 1913;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 281, this._ctx);
                            }
                            this.state = 1914;
                            this.statements();
                            this.state = 1918;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1915;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1920;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1921;
                            this.match(KotlinParser.RCURL);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1923;
                            this.match(KotlinParser.LCURL);
                            this.state = 1927;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 283, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1924;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 1929;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 283, this._ctx);
                            }
                            this.state = 1930;
                            this.lambdaParameters();
                            this.state = 1934;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1931;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1936;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1937;
                            this.match(KotlinParser.ARROW);
                            this.state = 1941;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 285, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1938;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 1943;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 285, this._ctx);
                            }
                            this.state = 1944;
                            this.statements();
                            this.state = 1948;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1945;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1950;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1951;
                            this.match(KotlinParser.RCURL);
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
    KotlinParser.prototype.lambdaParameters = function () {
        var _localctx = new LambdaParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, KotlinParser.RULE_lambdaParameters);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1956;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.LPAREN || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0)) {
                    {
                        this.state = 1955;
                        this.lambdaParameter();
                    }
                }
                this.state = 1974;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 291, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1961;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1958;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1963;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1964;
                                this.match(KotlinParser.COMMA);
                                this.state = 1968;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1965;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1970;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1971;
                                this.lambdaParameter();
                            }
                        }
                    }
                    this.state = 1976;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 291, this._ctx);
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
    KotlinParser.prototype.lambdaParameter = function () {
        var _localctx = new LambdaParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, KotlinParser.RULE_lambdaParameter);
        var _la;
        try {
            this.state = 1995;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.IMPORT:
                case KotlinParser.CONSTRUCTOR:
                case KotlinParser.BY:
                case KotlinParser.COMPANION:
                case KotlinParser.INIT:
                case KotlinParser.WHERE:
                case KotlinParser.CATCH:
                case KotlinParser.FINALLY:
                case KotlinParser.OUT:
                case KotlinParser.GETTER:
                case KotlinParser.SETTER:
                case KotlinParser.DYNAMIC:
                case KotlinParser.PUBLIC:
                case KotlinParser.PRIVATE:
                case KotlinParser.PROTECTED:
                case KotlinParser.INTERNAL:
                case KotlinParser.ENUM:
                case KotlinParser.SEALED:
                case KotlinParser.ANNOTATION:
                case KotlinParser.DATA:
                case KotlinParser.INNER:
                case KotlinParser.TAILREC:
                case KotlinParser.OPERATOR:
                case KotlinParser.INLINE:
                case KotlinParser.INFIX:
                case KotlinParser.EXTERNAL:
                case KotlinParser.SUSPEND:
                case KotlinParser.OVERRIDE:
                case KotlinParser.ABSTRACT:
                case KotlinParser.FINAL:
                case KotlinParser.OPEN:
                case KotlinParser.CONST:
                case KotlinParser.LATEINIT:
                case KotlinParser.VARARG:
                case KotlinParser.NOINLINE:
                case KotlinParser.CROSSINLINE:
                case KotlinParser.REIFIED:
                case KotlinParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1977;
                        this.variableDeclaration();
                    }
                    break;
                case KotlinParser.LPAREN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1978;
                        this.multiVariableDeclaration();
                        this.state = 1993;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 294, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1982;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === KotlinParser.NL) {
                                        {
                                            {
                                                this.state = 1979;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                        this.state = 1984;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1985;
                                    this.match(KotlinParser.COLON);
                                    this.state = 1989;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === KotlinParser.NL) {
                                        {
                                            {
                                                this.state = 1986;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                        this.state = 1991;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1992;
                                    this.type();
                                }
                                break;
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
    KotlinParser.prototype.objectLiteral = function () {
        var _localctx = new ObjectLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, KotlinParser.RULE_objectLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1997;
                this.match(KotlinParser.OBJECT);
                this.state = 2012;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 298, this._ctx)) {
                    case 1:
                        {
                            this.state = 2001;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1998;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 2003;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2004;
                            this.match(KotlinParser.COLON);
                            this.state = 2008;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 2005;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 2010;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2011;
                            this.delegationSpecifiers();
                        }
                        break;
                }
                this.state = 2017;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2014;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2019;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2020;
                this.classBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.collectionLiteral = function () {
        var _localctx = new CollectionLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, KotlinParser.RULE_collectionLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2022;
                this.match(KotlinParser.LSQUARE);
                this.state = 2024;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KotlinParser.NL) | (1 << KotlinParser.LPAREN) | (1 << KotlinParser.LSQUARE) | (1 << KotlinParser.LCURL) | (1 << KotlinParser.ADD) | (1 << KotlinParser.SUB) | (1 << KotlinParser.INCR) | (1 << KotlinParser.DECR) | (1 << KotlinParser.EXCL))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (KotlinParser.COLONCOLON - 36)) | (1 << (KotlinParser.Q_COLONCOLON - 36)) | (1 << (KotlinParser.AT - 36)) | (1 << (KotlinParser.RETURN_AT - 36)) | (1 << (KotlinParser.CONTINUE_AT - 36)) | (1 << (KotlinParser.BREAK_AT - 36)) | (1 << (KotlinParser.FILE - 36)) | (1 << (KotlinParser.IMPORT - 36)) | (1 << (KotlinParser.OBJECT - 36)) | (1 << (KotlinParser.CONSTRUCTOR - 36)) | (1 << (KotlinParser.BY - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (KotlinParser.COMPANION - 68)) | (1 << (KotlinParser.INIT - 68)) | (1 << (KotlinParser.THIS - 68)) | (1 << (KotlinParser.SUPER - 68)) | (1 << (KotlinParser.WHERE - 68)) | (1 << (KotlinParser.IF - 68)) | (1 << (KotlinParser.WHEN - 68)) | (1 << (KotlinParser.TRY - 68)) | (1 << (KotlinParser.CATCH - 68)) | (1 << (KotlinParser.FINALLY - 68)) | (1 << (KotlinParser.FOR - 68)) | (1 << (KotlinParser.DO - 68)) | (1 << (KotlinParser.WHILE - 68)) | (1 << (KotlinParser.THROW - 68)) | (1 << (KotlinParser.RETURN - 68)) | (1 << (KotlinParser.CONTINUE - 68)) | (1 << (KotlinParser.BREAK - 68)) | (1 << (KotlinParser.OUT - 68)) | (1 << (KotlinParser.FIELD - 68)) | (1 << (KotlinParser.PROPERTY - 68)) | (1 << (KotlinParser.GET - 68)) | (1 << (KotlinParser.SET - 68)) | (1 << (KotlinParser.GETTER - 68)) | (1 << (KotlinParser.SETTER - 68)) | (1 << (KotlinParser.RECEIVER - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (KotlinParser.PARAM - 100)) | (1 << (KotlinParser.SETPARAM - 100)) | (1 << (KotlinParser.DELEGATE - 100)) | (1 << (KotlinParser.DYNAMIC - 100)) | (1 << (KotlinParser.PUBLIC - 100)) | (1 << (KotlinParser.PRIVATE - 100)) | (1 << (KotlinParser.PROTECTED - 100)) | (1 << (KotlinParser.INTERNAL - 100)) | (1 << (KotlinParser.ENUM - 100)) | (1 << (KotlinParser.SEALED - 100)) | (1 << (KotlinParser.ANNOTATION - 100)) | (1 << (KotlinParser.DATA - 100)) | (1 << (KotlinParser.INNER - 100)) | (1 << (KotlinParser.TAILREC - 100)) | (1 << (KotlinParser.OPERATOR - 100)) | (1 << (KotlinParser.INLINE - 100)) | (1 << (KotlinParser.INFIX - 100)) | (1 << (KotlinParser.EXTERNAL - 100)) | (1 << (KotlinParser.SUSPEND - 100)) | (1 << (KotlinParser.OVERRIDE - 100)) | (1 << (KotlinParser.ABSTRACT - 100)) | (1 << (KotlinParser.FINAL - 100)) | (1 << (KotlinParser.OPEN - 100)) | (1 << (KotlinParser.CONST - 100)) | (1 << (KotlinParser.LATEINIT - 100)) | (1 << (KotlinParser.VARARG - 100)) | (1 << (KotlinParser.NOINLINE - 100)) | (1 << (KotlinParser.CROSSINLINE - 100)) | (1 << (KotlinParser.REIFIED - 100)) | (1 << (KotlinParser.QUOTE_OPEN - 100)) | (1 << (KotlinParser.TRIPLE_QUOTE_OPEN - 100)) | (1 << (KotlinParser.RealLiteral - 100)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (KotlinParser.LongLiteral - 134)) | (1 << (KotlinParser.IntegerLiteral - 134)) | (1 << (KotlinParser.HexLiteral - 134)) | (1 << (KotlinParser.BinLiteral - 134)) | (1 << (KotlinParser.BooleanLiteral - 134)) | (1 << (KotlinParser.NullLiteral - 134)) | (1 << (KotlinParser.Identifier - 134)) | (1 << (KotlinParser.LabelReference - 134)) | (1 << (KotlinParser.LabelDefinition - 134)) | (1 << (KotlinParser.CharacterLiteral - 134)))) !== 0)) {
                    {
                        this.state = 2023;
                        this.expression();
                    }
                }
                this.state = 2030;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.COMMA) {
                    {
                        {
                            this.state = 2026;
                            this.match(KotlinParser.COMMA);
                            this.state = 2027;
                            this.expression();
                        }
                    }
                    this.state = 2032;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2033;
                this.match(KotlinParser.RSQUARE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.thisExpression = function () {
        var _localctx = new ThisExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, KotlinParser.RULE_thisExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2035;
                this.match(KotlinParser.THIS);
                this.state = 2037;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 302, this._ctx)) {
                    case 1:
                        {
                            this.state = 2036;
                            this.match(KotlinParser.LabelReference);
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
    KotlinParser.prototype.superExpression = function () {
        var _localctx = new SuperExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, KotlinParser.RULE_superExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2039;
                this.match(KotlinParser.SUPER);
                this.state = 2056;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 305, this._ctx)) {
                    case 1:
                        {
                            this.state = 2040;
                            this.match(KotlinParser.LANGLE);
                            this.state = 2044;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 2041;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 2046;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2047;
                            this.type();
                            this.state = 2051;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 2048;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 2053;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2054;
                            this.match(KotlinParser.RANGLE);
                        }
                        break;
                }
                this.state = 2059;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 306, this._ctx)) {
                    case 1:
                        {
                            this.state = 2058;
                            this.match(KotlinParser.LabelReference);
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
    KotlinParser.prototype.conditionalExpression = function () {
        var _localctx = new ConditionalExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, KotlinParser.RULE_conditionalExpression);
        try {
            this.state = 2063;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.IF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2061;
                        this.ifExpression();
                    }
                    break;
                case KotlinParser.WHEN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2062;
                        this.whenExpression();
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
    KotlinParser.prototype.ifExpression = function () {
        var _localctx = new IfExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, KotlinParser.RULE_ifExpression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2065;
                this.match(KotlinParser.IF);
                this.state = 2069;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2066;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2071;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2072;
                this.match(KotlinParser.LPAREN);
                this.state = 2073;
                this.expression();
                this.state = 2074;
                this.match(KotlinParser.RPAREN);
                this.state = 2078;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 309, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2075;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2080;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 309, this._ctx);
                }
                this.state = 2082;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 310, this._ctx)) {
                    case 1:
                        {
                            this.state = 2081;
                            this.controlStructureBody();
                        }
                        break;
                }
                this.state = 2085;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 311, this._ctx)) {
                    case 1:
                        {
                            this.state = 2084;
                            this.match(KotlinParser.SEMICOLON);
                        }
                        break;
                }
                this.state = 2103;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 315, this._ctx)) {
                    case 1:
                        {
                            this.state = 2090;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 2087;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 2092;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2093;
                            this.match(KotlinParser.ELSE);
                            this.state = 2097;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 313, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 2094;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 2099;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 313, this._ctx);
                            }
                            this.state = 2101;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 314, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2100;
                                        this.controlStructureBody();
                                    }
                                    break;
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
    KotlinParser.prototype.controlStructureBody = function () {
        var _localctx = new ControlStructureBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, KotlinParser.RULE_controlStructureBody);
        try {
            this.state = 2107;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 316, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2105;
                        this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2106;
                        this.expression();
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
    KotlinParser.prototype.whenExpression = function () {
        var _localctx = new WhenExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, KotlinParser.RULE_whenExpression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2109;
                this.match(KotlinParser.WHEN);
                this.state = 2113;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 317, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2110;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2115;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 317, this._ctx);
                }
                this.state = 2120;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.LPAREN) {
                    {
                        this.state = 2116;
                        this.match(KotlinParser.LPAREN);
                        this.state = 2117;
                        this.expression();
                        this.state = 2118;
                        this.match(KotlinParser.RPAREN);
                    }
                }
                this.state = 2125;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2122;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2127;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2128;
                this.match(KotlinParser.LCURL);
                this.state = 2132;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 320, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2129;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2134;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 320, this._ctx);
                }
                this.state = 2144;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 322, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2135;
                                this.whenEntry();
                                this.state = 2139;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 321, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 2136;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 2141;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 321, this._ctx);
                                }
                            }
                        }
                    }
                    this.state = 2146;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 322, this._ctx);
                }
                this.state = 2150;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2147;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2152;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2153;
                this.match(KotlinParser.RCURL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.whenEntry = function () {
        var _localctx = new WhenEntryContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, KotlinParser.RULE_whenEntry);
        var _la;
        try {
            var _alt = void 0;
            this.state = 2207;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.NL:
                case KotlinParser.LPAREN:
                case KotlinParser.LSQUARE:
                case KotlinParser.LCURL:
                case KotlinParser.ADD:
                case KotlinParser.SUB:
                case KotlinParser.INCR:
                case KotlinParser.DECR:
                case KotlinParser.EXCL:
                case KotlinParser.COLONCOLON:
                case KotlinParser.Q_COLONCOLON:
                case KotlinParser.AT:
                case KotlinParser.RETURN_AT:
                case KotlinParser.CONTINUE_AT:
                case KotlinParser.BREAK_AT:
                case KotlinParser.FILE:
                case KotlinParser.IMPORT:
                case KotlinParser.OBJECT:
                case KotlinParser.CONSTRUCTOR:
                case KotlinParser.BY:
                case KotlinParser.COMPANION:
                case KotlinParser.INIT:
                case KotlinParser.THIS:
                case KotlinParser.SUPER:
                case KotlinParser.WHERE:
                case KotlinParser.IF:
                case KotlinParser.WHEN:
                case KotlinParser.TRY:
                case KotlinParser.CATCH:
                case KotlinParser.FINALLY:
                case KotlinParser.FOR:
                case KotlinParser.DO:
                case KotlinParser.WHILE:
                case KotlinParser.THROW:
                case KotlinParser.RETURN:
                case KotlinParser.CONTINUE:
                case KotlinParser.BREAK:
                case KotlinParser.IS:
                case KotlinParser.IN:
                case KotlinParser.NOT_IS:
                case KotlinParser.NOT_IN:
                case KotlinParser.OUT:
                case KotlinParser.FIELD:
                case KotlinParser.PROPERTY:
                case KotlinParser.GET:
                case KotlinParser.SET:
                case KotlinParser.GETTER:
                case KotlinParser.SETTER:
                case KotlinParser.RECEIVER:
                case KotlinParser.PARAM:
                case KotlinParser.SETPARAM:
                case KotlinParser.DELEGATE:
                case KotlinParser.DYNAMIC:
                case KotlinParser.PUBLIC:
                case KotlinParser.PRIVATE:
                case KotlinParser.PROTECTED:
                case KotlinParser.INTERNAL:
                case KotlinParser.ENUM:
                case KotlinParser.SEALED:
                case KotlinParser.ANNOTATION:
                case KotlinParser.DATA:
                case KotlinParser.INNER:
                case KotlinParser.TAILREC:
                case KotlinParser.OPERATOR:
                case KotlinParser.INLINE:
                case KotlinParser.INFIX:
                case KotlinParser.EXTERNAL:
                case KotlinParser.SUSPEND:
                case KotlinParser.OVERRIDE:
                case KotlinParser.ABSTRACT:
                case KotlinParser.FINAL:
                case KotlinParser.OPEN:
                case KotlinParser.CONST:
                case KotlinParser.LATEINIT:
                case KotlinParser.VARARG:
                case KotlinParser.NOINLINE:
                case KotlinParser.CROSSINLINE:
                case KotlinParser.REIFIED:
                case KotlinParser.QUOTE_OPEN:
                case KotlinParser.TRIPLE_QUOTE_OPEN:
                case KotlinParser.RealLiteral:
                case KotlinParser.LongLiteral:
                case KotlinParser.IntegerLiteral:
                case KotlinParser.HexLiteral:
                case KotlinParser.BinLiteral:
                case KotlinParser.BooleanLiteral:
                case KotlinParser.NullLiteral:
                case KotlinParser.Identifier:
                case KotlinParser.LabelReference:
                case KotlinParser.LabelDefinition:
                case KotlinParser.CharacterLiteral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2155;
                        this.whenCondition();
                        this.state = 2172;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 326, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2159;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === KotlinParser.NL) {
                                            {
                                                {
                                                    this.state = 2156;
                                                    this.match(KotlinParser.NL);
                                                }
                                            }
                                            this.state = 2161;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 2162;
                                        this.match(KotlinParser.COMMA);
                                        this.state = 2166;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 325, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 2163;
                                                        this.match(KotlinParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 2168;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 325, this._ctx);
                                        }
                                        this.state = 2169;
                                        this.whenCondition();
                                    }
                                }
                            }
                            this.state = 2174;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 326, this._ctx);
                        }
                        this.state = 2178;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2175;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2180;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2181;
                        this.match(KotlinParser.ARROW);
                        this.state = 2185;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 328, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2182;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2187;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 328, this._ctx);
                        }
                        this.state = 2188;
                        this.controlStructureBody();
                        this.state = 2190;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 329, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2189;
                                    this.semi();
                                }
                                break;
                        }
                    }
                    break;
                case KotlinParser.ELSE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2192;
                        this.match(KotlinParser.ELSE);
                        this.state = 2196;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2193;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2198;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2199;
                        this.match(KotlinParser.ARROW);
                        this.state = 2203;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 331, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2200;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2205;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 331, this._ctx);
                        }
                        this.state = 2206;
                        this.controlStructureBody();
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
    KotlinParser.prototype.whenCondition = function () {
        var _localctx = new WhenConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, KotlinParser.RULE_whenCondition);
        try {
            this.state = 2212;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.NL:
                case KotlinParser.LPAREN:
                case KotlinParser.LSQUARE:
                case KotlinParser.LCURL:
                case KotlinParser.ADD:
                case KotlinParser.SUB:
                case KotlinParser.INCR:
                case KotlinParser.DECR:
                case KotlinParser.EXCL:
                case KotlinParser.COLONCOLON:
                case KotlinParser.Q_COLONCOLON:
                case KotlinParser.AT:
                case KotlinParser.RETURN_AT:
                case KotlinParser.CONTINUE_AT:
                case KotlinParser.BREAK_AT:
                case KotlinParser.FILE:
                case KotlinParser.IMPORT:
                case KotlinParser.OBJECT:
                case KotlinParser.CONSTRUCTOR:
                case KotlinParser.BY:
                case KotlinParser.COMPANION:
                case KotlinParser.INIT:
                case KotlinParser.THIS:
                case KotlinParser.SUPER:
                case KotlinParser.WHERE:
                case KotlinParser.IF:
                case KotlinParser.WHEN:
                case KotlinParser.TRY:
                case KotlinParser.CATCH:
                case KotlinParser.FINALLY:
                case KotlinParser.FOR:
                case KotlinParser.DO:
                case KotlinParser.WHILE:
                case KotlinParser.THROW:
                case KotlinParser.RETURN:
                case KotlinParser.CONTINUE:
                case KotlinParser.BREAK:
                case KotlinParser.OUT:
                case KotlinParser.FIELD:
                case KotlinParser.PROPERTY:
                case KotlinParser.GET:
                case KotlinParser.SET:
                case KotlinParser.GETTER:
                case KotlinParser.SETTER:
                case KotlinParser.RECEIVER:
                case KotlinParser.PARAM:
                case KotlinParser.SETPARAM:
                case KotlinParser.DELEGATE:
                case KotlinParser.DYNAMIC:
                case KotlinParser.PUBLIC:
                case KotlinParser.PRIVATE:
                case KotlinParser.PROTECTED:
                case KotlinParser.INTERNAL:
                case KotlinParser.ENUM:
                case KotlinParser.SEALED:
                case KotlinParser.ANNOTATION:
                case KotlinParser.DATA:
                case KotlinParser.INNER:
                case KotlinParser.TAILREC:
                case KotlinParser.OPERATOR:
                case KotlinParser.INLINE:
                case KotlinParser.INFIX:
                case KotlinParser.EXTERNAL:
                case KotlinParser.SUSPEND:
                case KotlinParser.OVERRIDE:
                case KotlinParser.ABSTRACT:
                case KotlinParser.FINAL:
                case KotlinParser.OPEN:
                case KotlinParser.CONST:
                case KotlinParser.LATEINIT:
                case KotlinParser.VARARG:
                case KotlinParser.NOINLINE:
                case KotlinParser.CROSSINLINE:
                case KotlinParser.REIFIED:
                case KotlinParser.QUOTE_OPEN:
                case KotlinParser.TRIPLE_QUOTE_OPEN:
                case KotlinParser.RealLiteral:
                case KotlinParser.LongLiteral:
                case KotlinParser.IntegerLiteral:
                case KotlinParser.HexLiteral:
                case KotlinParser.BinLiteral:
                case KotlinParser.BooleanLiteral:
                case KotlinParser.NullLiteral:
                case KotlinParser.Identifier:
                case KotlinParser.LabelReference:
                case KotlinParser.LabelDefinition:
                case KotlinParser.CharacterLiteral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2209;
                        this.expression();
                    }
                    break;
                case KotlinParser.IN:
                case KotlinParser.NOT_IN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2210;
                        this.rangeTest();
                    }
                    break;
                case KotlinParser.IS:
                case KotlinParser.NOT_IS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2211;
                        this.typeTest();
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
    KotlinParser.prototype.rangeTest = function () {
        var _localctx = new RangeTestContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, KotlinParser.RULE_rangeTest);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2214;
                this.inOperator();
                this.state = 2218;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 334, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2215;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2220;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 334, this._ctx);
                }
                this.state = 2221;
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
    KotlinParser.prototype.typeTest = function () {
        var _localctx = new TypeTestContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, KotlinParser.RULE_typeTest);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2223;
                this.isOperator();
                this.state = 2227;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2224;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2229;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2230;
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
    KotlinParser.prototype.tryExpression = function () {
        var _localctx = new TryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 210, KotlinParser.RULE_tryExpression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2232;
                this.match(KotlinParser.TRY);
                this.state = 2236;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2233;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2238;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2239;
                this.block();
                this.state = 2249;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 338, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2243;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 2240;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 2245;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 2246;
                                this.catchBlock();
                            }
                        }
                    }
                    this.state = 2251;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 338, this._ctx);
                }
                this.state = 2259;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 340, this._ctx)) {
                    case 1:
                        {
                            this.state = 2255;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 2252;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 2257;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2258;
                            this.finallyBlock();
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
    KotlinParser.prototype.catchBlock = function () {
        var _localctx = new CatchBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 212, KotlinParser.RULE_catchBlock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2261;
                this.match(KotlinParser.CATCH);
                this.state = 2265;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2262;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2267;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2268;
                this.match(KotlinParser.LPAREN);
                this.state = 2272;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (KotlinParser.FIELD - 93)) | (1 << (KotlinParser.PROPERTY - 93)) | (1 << (KotlinParser.GET - 93)) | (1 << (KotlinParser.SET - 93)) | (1 << (KotlinParser.RECEIVER - 93)) | (1 << (KotlinParser.PARAM - 93)) | (1 << (KotlinParser.SETPARAM - 93)) | (1 << (KotlinParser.DELEGATE - 93)))) !== 0) || _la === KotlinParser.LabelReference) {
                    {
                        {
                            this.state = 2269;
                            this.annotations();
                        }
                    }
                    this.state = 2274;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2275;
                this.simpleIdentifier();
                this.state = 2276;
                this.match(KotlinParser.COLON);
                this.state = 2277;
                this.userType();
                this.state = 2278;
                this.match(KotlinParser.RPAREN);
                this.state = 2282;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2279;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2284;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2285;
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
    KotlinParser.prototype.finallyBlock = function () {
        var _localctx = new FinallyBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 214, KotlinParser.RULE_finallyBlock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2287;
                this.match(KotlinParser.FINALLY);
                this.state = 2291;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2288;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2293;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2294;
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
    KotlinParser.prototype.loopExpression = function () {
        var _localctx = new LoopExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 216, KotlinParser.RULE_loopExpression);
        try {
            this.state = 2299;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.FOR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2296;
                        this.forExpression();
                    }
                    break;
                case KotlinParser.WHILE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2297;
                        this.whileExpression();
                    }
                    break;
                case KotlinParser.DO:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2298;
                        this.doWhileExpression();
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
    KotlinParser.prototype.forExpression = function () {
        var _localctx = new ForExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 218, KotlinParser.RULE_forExpression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2301;
                this.match(KotlinParser.FOR);
                this.state = 2305;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2302;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2307;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2308;
                this.match(KotlinParser.LPAREN);
                this.state = 2312;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.AT || _la === KotlinParser.FILE || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (KotlinParser.FIELD - 93)) | (1 << (KotlinParser.PROPERTY - 93)) | (1 << (KotlinParser.GET - 93)) | (1 << (KotlinParser.SET - 93)) | (1 << (KotlinParser.RECEIVER - 93)) | (1 << (KotlinParser.PARAM - 93)) | (1 << (KotlinParser.SETPARAM - 93)) | (1 << (KotlinParser.DELEGATE - 93)))) !== 0) || _la === KotlinParser.LabelReference) {
                    {
                        {
                            this.state = 2309;
                            this.annotations();
                        }
                    }
                    this.state = 2314;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2317;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case KotlinParser.IMPORT:
                    case KotlinParser.CONSTRUCTOR:
                    case KotlinParser.BY:
                    case KotlinParser.COMPANION:
                    case KotlinParser.INIT:
                    case KotlinParser.WHERE:
                    case KotlinParser.CATCH:
                    case KotlinParser.FINALLY:
                    case KotlinParser.OUT:
                    case KotlinParser.GETTER:
                    case KotlinParser.SETTER:
                    case KotlinParser.DYNAMIC:
                    case KotlinParser.PUBLIC:
                    case KotlinParser.PRIVATE:
                    case KotlinParser.PROTECTED:
                    case KotlinParser.INTERNAL:
                    case KotlinParser.ENUM:
                    case KotlinParser.SEALED:
                    case KotlinParser.ANNOTATION:
                    case KotlinParser.DATA:
                    case KotlinParser.INNER:
                    case KotlinParser.TAILREC:
                    case KotlinParser.OPERATOR:
                    case KotlinParser.INLINE:
                    case KotlinParser.INFIX:
                    case KotlinParser.EXTERNAL:
                    case KotlinParser.SUSPEND:
                    case KotlinParser.OVERRIDE:
                    case KotlinParser.ABSTRACT:
                    case KotlinParser.FINAL:
                    case KotlinParser.OPEN:
                    case KotlinParser.CONST:
                    case KotlinParser.LATEINIT:
                    case KotlinParser.VARARG:
                    case KotlinParser.NOINLINE:
                    case KotlinParser.CROSSINLINE:
                    case KotlinParser.REIFIED:
                    case KotlinParser.Identifier:
                        {
                            this.state = 2315;
                            this.variableDeclaration();
                        }
                        break;
                    case KotlinParser.LPAREN:
                        {
                            this.state = 2316;
                            this.multiVariableDeclaration();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 2319;
                this.match(KotlinParser.IN);
                this.state = 2320;
                this.expression();
                this.state = 2321;
                this.match(KotlinParser.RPAREN);
                this.state = 2325;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 349, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2322;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2327;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 349, this._ctx);
                }
                this.state = 2329;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 350, this._ctx)) {
                    case 1:
                        {
                            this.state = 2328;
                            this.controlStructureBody();
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
    KotlinParser.prototype.whileExpression = function () {
        var _localctx = new WhileExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 220, KotlinParser.RULE_whileExpression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2331;
                this.match(KotlinParser.WHILE);
                this.state = 2335;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2332;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2337;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2338;
                this.match(KotlinParser.LPAREN);
                this.state = 2339;
                this.expression();
                this.state = 2340;
                this.match(KotlinParser.RPAREN);
                this.state = 2344;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 352, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2341;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2346;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 352, this._ctx);
                }
                this.state = 2348;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 353, this._ctx)) {
                    case 1:
                        {
                            this.state = 2347;
                            this.controlStructureBody();
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
    KotlinParser.prototype.doWhileExpression = function () {
        var _localctx = new DoWhileExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 222, KotlinParser.RULE_doWhileExpression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2350;
                this.match(KotlinParser.DO);
                this.state = 2354;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 354, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2351;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2356;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 354, this._ctx);
                }
                this.state = 2358;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 355, this._ctx)) {
                    case 1:
                        {
                            this.state = 2357;
                            this.controlStructureBody();
                        }
                        break;
                }
                this.state = 2363;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2360;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2365;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2366;
                this.match(KotlinParser.WHILE);
                this.state = 2370;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2367;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2372;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2373;
                this.match(KotlinParser.LPAREN);
                this.state = 2374;
                this.expression();
                this.state = 2375;
                this.match(KotlinParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.jumpExpression = function () {
        var _localctx = new JumpExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 224, KotlinParser.RULE_jumpExpression);
        var _la;
        try {
            var _alt = void 0;
            this.state = 2393;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.THROW:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2377;
                        this.match(KotlinParser.THROW);
                        this.state = 2381;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 358, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2378;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2383;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 358, this._ctx);
                        }
                        this.state = 2384;
                        this.expression();
                    }
                    break;
                case KotlinParser.RETURN_AT:
                case KotlinParser.RETURN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2385;
                        _la = this._input.LA(1);
                        if (!(_la === KotlinParser.RETURN_AT || _la === KotlinParser.RETURN)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 2387;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 359, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2386;
                                    this.expression();
                                }
                                break;
                        }
                    }
                    break;
                case KotlinParser.CONTINUE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2389;
                        this.match(KotlinParser.CONTINUE);
                    }
                    break;
                case KotlinParser.CONTINUE_AT:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 2390;
                        this.match(KotlinParser.CONTINUE_AT);
                    }
                    break;
                case KotlinParser.BREAK:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 2391;
                        this.match(KotlinParser.BREAK);
                    }
                    break;
                case KotlinParser.BREAK_AT:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 2392;
                        this.match(KotlinParser.BREAK_AT);
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
    KotlinParser.prototype.callableReference = function () {
        var _localctx = new CallableReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 226, KotlinParser.RULE_callableReference);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2408;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0)) {
                    {
                        this.state = 2395;
                        this.userType();
                        this.state = 2405;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.QUEST) {
                            {
                                {
                                    this.state = 2396;
                                    this.match(KotlinParser.QUEST);
                                    this.state = 2400;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 361, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 2397;
                                                    this.match(KotlinParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 2402;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 361, this._ctx);
                                    }
                                }
                            }
                            this.state = 2407;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 2413;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2410;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2415;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2416;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.COLONCOLON || _la === KotlinParser.Q_COLONCOLON)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 2420;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2417;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2422;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2425;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case KotlinParser.IMPORT:
                    case KotlinParser.CONSTRUCTOR:
                    case KotlinParser.BY:
                    case KotlinParser.COMPANION:
                    case KotlinParser.INIT:
                    case KotlinParser.WHERE:
                    case KotlinParser.CATCH:
                    case KotlinParser.FINALLY:
                    case KotlinParser.OUT:
                    case KotlinParser.GETTER:
                    case KotlinParser.SETTER:
                    case KotlinParser.DYNAMIC:
                    case KotlinParser.PUBLIC:
                    case KotlinParser.PRIVATE:
                    case KotlinParser.PROTECTED:
                    case KotlinParser.INTERNAL:
                    case KotlinParser.ENUM:
                    case KotlinParser.SEALED:
                    case KotlinParser.ANNOTATION:
                    case KotlinParser.DATA:
                    case KotlinParser.INNER:
                    case KotlinParser.TAILREC:
                    case KotlinParser.OPERATOR:
                    case KotlinParser.INLINE:
                    case KotlinParser.INFIX:
                    case KotlinParser.EXTERNAL:
                    case KotlinParser.SUSPEND:
                    case KotlinParser.OVERRIDE:
                    case KotlinParser.ABSTRACT:
                    case KotlinParser.FINAL:
                    case KotlinParser.OPEN:
                    case KotlinParser.CONST:
                    case KotlinParser.LATEINIT:
                    case KotlinParser.VARARG:
                    case KotlinParser.NOINLINE:
                    case KotlinParser.CROSSINLINE:
                    case KotlinParser.REIFIED:
                    case KotlinParser.Identifier:
                        {
                            this.state = 2423;
                            this.identifier();
                        }
                        break;
                    case KotlinParser.CLASS:
                        {
                            this.state = 2424;
                            this.match(KotlinParser.CLASS);
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
    KotlinParser.prototype.assignmentOperator = function () {
        var _localctx = new AssignmentOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 228, KotlinParser.RULE_assignmentOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2427;
                _la = this._input.LA(1);
                if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (KotlinParser.ASSIGNMENT - 27)) | (1 << (KotlinParser.ADD_ASSIGNMENT - 27)) | (1 << (KotlinParser.SUB_ASSIGNMENT - 27)) | (1 << (KotlinParser.MULT_ASSIGNMENT - 27)) | (1 << (KotlinParser.DIV_ASSIGNMENT - 27)) | (1 << (KotlinParser.MOD_ASSIGNMENT - 27)))) !== 0))) {
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
    KotlinParser.prototype.equalityOperation = function () {
        var _localctx = new EqualityOperationContext(this._ctx, this.state);
        this.enterRule(_localctx, 230, KotlinParser.RULE_equalityOperation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2429;
                _la = this._input.LA(1);
                if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (KotlinParser.EXCL_EQ - 47)) | (1 << (KotlinParser.EXCL_EQEQ - 47)) | (1 << (KotlinParser.EQEQ - 47)) | (1 << (KotlinParser.EQEQEQ - 47)))) !== 0))) {
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
    KotlinParser.prototype.comparisonOperator = function () {
        var _localctx = new ComparisonOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 232, KotlinParser.RULE_comparisonOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2431;
                _la = this._input.LA(1);
                if (!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (KotlinParser.LANGLE - 43)) | (1 << (KotlinParser.RANGLE - 43)) | (1 << (KotlinParser.LE - 43)) | (1 << (KotlinParser.GE - 43)))) !== 0))) {
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
    KotlinParser.prototype.inOperator = function () {
        var _localctx = new InOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 234, KotlinParser.RULE_inOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2433;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.IN || _la === KotlinParser.NOT_IN)) {
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
    KotlinParser.prototype.isOperator = function () {
        var _localctx = new IsOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 236, KotlinParser.RULE_isOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2435;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.IS || _la === KotlinParser.NOT_IS)) {
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
    KotlinParser.prototype.additiveOperator = function () {
        var _localctx = new AdditiveOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 238, KotlinParser.RULE_additiveOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2437;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.ADD || _la === KotlinParser.SUB)) {
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
    KotlinParser.prototype.multiplicativeOperation = function () {
        var _localctx = new MultiplicativeOperationContext(this._ctx, this.state);
        this.enterRule(_localctx, 240, KotlinParser.RULE_multiplicativeOperation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2439;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KotlinParser.MULT) | (1 << KotlinParser.MOD) | (1 << KotlinParser.DIV))) !== 0))) {
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
    KotlinParser.prototype.typeOperation = function () {
        var _localctx = new TypeOperationContext(this._ctx, this.state);
        this.enterRule(_localctx, 242, KotlinParser.RULE_typeOperation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2441;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.COLON || _la === KotlinParser.AS_SAFE || _la === KotlinParser.AS)) {
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
    KotlinParser.prototype.prefixUnaryOperation = function () {
        var _localctx = new PrefixUnaryOperationContext(this._ctx, this.state);
        this.enterRule(_localctx, 244, KotlinParser.RULE_prefixUnaryOperation);
        try {
            this.state = 2450;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.INCR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2443;
                        this.match(KotlinParser.INCR);
                    }
                    break;
                case KotlinParser.DECR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2444;
                        this.match(KotlinParser.DECR);
                    }
                    break;
                case KotlinParser.ADD:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2445;
                        this.match(KotlinParser.ADD);
                    }
                    break;
                case KotlinParser.SUB:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 2446;
                        this.match(KotlinParser.SUB);
                    }
                    break;
                case KotlinParser.EXCL:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 2447;
                        this.match(KotlinParser.EXCL);
                    }
                    break;
                case KotlinParser.AT:
                case KotlinParser.FILE:
                case KotlinParser.FIELD:
                case KotlinParser.PROPERTY:
                case KotlinParser.GET:
                case KotlinParser.SET:
                case KotlinParser.RECEIVER:
                case KotlinParser.PARAM:
                case KotlinParser.SETPARAM:
                case KotlinParser.DELEGATE:
                case KotlinParser.LabelReference:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 2448;
                        this.annotations();
                    }
                    break;
                case KotlinParser.LabelDefinition:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 2449;
                        this.labelDefinition();
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
    KotlinParser.prototype.postfixUnaryOperation = function () {
        var _localctx = new PostfixUnaryOperationContext(this._ctx, this.state);
        this.enterRule(_localctx, 246, KotlinParser.RULE_postfixUnaryOperation);
        var _la;
        try {
            this.state = 2467;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 369, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2452;
                        this.match(KotlinParser.INCR);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2453;
                        this.match(KotlinParser.DECR);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2454;
                        this.match(KotlinParser.EXCL);
                        this.state = 2455;
                        this.match(KotlinParser.EXCL);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 2456;
                        this.callSuffix();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 2457;
                        this.arrayAccess();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 2461;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2458;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2463;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2464;
                        this.memberAccessOperator();
                        this.state = 2465;
                        this.postfixUnaryExpression();
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
    KotlinParser.prototype.memberAccessOperator = function () {
        var _localctx = new MemberAccessOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 248, KotlinParser.RULE_memberAccessOperator);
        try {
            this.state = 2472;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.DOT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2469;
                        this.match(KotlinParser.DOT);
                    }
                    break;
                case KotlinParser.QUEST:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2470;
                        this.match(KotlinParser.QUEST);
                        this.state = 2471;
                        this.match(KotlinParser.DOT);
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
    KotlinParser.prototype.modifierList = function () {
        var _localctx = new ModifierListContext(this._ctx, this.state);
        this.enterRule(_localctx, 250, KotlinParser.RULE_modifierList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2476;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 2476;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case KotlinParser.AT:
                                    case KotlinParser.FILE:
                                    case KotlinParser.FIELD:
                                    case KotlinParser.PROPERTY:
                                    case KotlinParser.GET:
                                    case KotlinParser.SET:
                                    case KotlinParser.RECEIVER:
                                    case KotlinParser.PARAM:
                                    case KotlinParser.SETPARAM:
                                    case KotlinParser.DELEGATE:
                                    case KotlinParser.LabelReference:
                                        {
                                            this.state = 2474;
                                            this.annotations();
                                        }
                                        break;
                                    case KotlinParser.IN:
                                    case KotlinParser.OUT:
                                    case KotlinParser.PUBLIC:
                                    case KotlinParser.PRIVATE:
                                    case KotlinParser.PROTECTED:
                                    case KotlinParser.INTERNAL:
                                    case KotlinParser.ENUM:
                                    case KotlinParser.SEALED:
                                    case KotlinParser.ANNOTATION:
                                    case KotlinParser.DATA:
                                    case KotlinParser.INNER:
                                    case KotlinParser.TAILREC:
                                    case KotlinParser.OPERATOR:
                                    case KotlinParser.INLINE:
                                    case KotlinParser.INFIX:
                                    case KotlinParser.EXTERNAL:
                                    case KotlinParser.SUSPEND:
                                    case KotlinParser.OVERRIDE:
                                    case KotlinParser.ABSTRACT:
                                    case KotlinParser.FINAL:
                                    case KotlinParser.OPEN:
                                    case KotlinParser.CONST:
                                    case KotlinParser.LATEINIT:
                                    case KotlinParser.VARARG:
                                    case KotlinParser.NOINLINE:
                                    case KotlinParser.CROSSINLINE:
                                    case KotlinParser.REIFIED:
                                        {
                                            this.state = 2475;
                                            this.modifier();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 2478;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 372, this._ctx);
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
    KotlinParser.prototype.modifier = function () {
        var _localctx = new ModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 252, KotlinParser.RULE_modifier);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2489;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case KotlinParser.ENUM:
                    case KotlinParser.SEALED:
                    case KotlinParser.ANNOTATION:
                    case KotlinParser.DATA:
                    case KotlinParser.INNER:
                        {
                            this.state = 2480;
                            this.classModifier();
                        }
                        break;
                    case KotlinParser.OVERRIDE:
                    case KotlinParser.LATEINIT:
                        {
                            this.state = 2481;
                            this.memberModifier();
                        }
                        break;
                    case KotlinParser.PUBLIC:
                    case KotlinParser.PRIVATE:
                    case KotlinParser.PROTECTED:
                    case KotlinParser.INTERNAL:
                        {
                            this.state = 2482;
                            this.visibilityModifier();
                        }
                        break;
                    case KotlinParser.IN:
                    case KotlinParser.OUT:
                        {
                            this.state = 2483;
                            this.varianceAnnotation();
                        }
                        break;
                    case KotlinParser.TAILREC:
                    case KotlinParser.OPERATOR:
                    case KotlinParser.INLINE:
                    case KotlinParser.INFIX:
                    case KotlinParser.EXTERNAL:
                    case KotlinParser.SUSPEND:
                        {
                            this.state = 2484;
                            this.functionModifier();
                        }
                        break;
                    case KotlinParser.CONST:
                        {
                            this.state = 2485;
                            this.propertyModifier();
                        }
                        break;
                    case KotlinParser.ABSTRACT:
                    case KotlinParser.FINAL:
                    case KotlinParser.OPEN:
                        {
                            this.state = 2486;
                            this.inheritanceModifier();
                        }
                        break;
                    case KotlinParser.VARARG:
                    case KotlinParser.NOINLINE:
                    case KotlinParser.CROSSINLINE:
                        {
                            this.state = 2487;
                            this.parameterModifier();
                        }
                        break;
                    case KotlinParser.REIFIED:
                        {
                            this.state = 2488;
                            this.typeParameterModifier();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 2494;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 374, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2491;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2496;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 374, this._ctx);
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
    KotlinParser.prototype.classModifier = function () {
        var _localctx = new ClassModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 254, KotlinParser.RULE_classModifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2497;
                _la = this._input.LA(1);
                if (!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (KotlinParser.ENUM - 108)) | (1 << (KotlinParser.SEALED - 108)) | (1 << (KotlinParser.ANNOTATION - 108)) | (1 << (KotlinParser.DATA - 108)) | (1 << (KotlinParser.INNER - 108)))) !== 0))) {
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
    KotlinParser.prototype.memberModifier = function () {
        var _localctx = new MemberModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 256, KotlinParser.RULE_memberModifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2499;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.OVERRIDE || _la === KotlinParser.LATEINIT)) {
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
    KotlinParser.prototype.visibilityModifier = function () {
        var _localctx = new VisibilityModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 258, KotlinParser.RULE_visibilityModifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2501;
                _la = this._input.LA(1);
                if (!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (KotlinParser.PUBLIC - 104)) | (1 << (KotlinParser.PRIVATE - 104)) | (1 << (KotlinParser.PROTECTED - 104)) | (1 << (KotlinParser.INTERNAL - 104)))) !== 0))) {
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
    KotlinParser.prototype.varianceAnnotation = function () {
        var _localctx = new VarianceAnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 260, KotlinParser.RULE_varianceAnnotation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2503;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.IN || _la === KotlinParser.OUT)) {
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
    KotlinParser.prototype.functionModifier = function () {
        var _localctx = new FunctionModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 262, KotlinParser.RULE_functionModifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2505;
                _la = this._input.LA(1);
                if (!(((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (KotlinParser.TAILREC - 113)) | (1 << (KotlinParser.OPERATOR - 113)) | (1 << (KotlinParser.INLINE - 113)) | (1 << (KotlinParser.INFIX - 113)) | (1 << (KotlinParser.EXTERNAL - 113)) | (1 << (KotlinParser.SUSPEND - 113)))) !== 0))) {
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
    KotlinParser.prototype.propertyModifier = function () {
        var _localctx = new PropertyModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 264, KotlinParser.RULE_propertyModifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2507;
                this.match(KotlinParser.CONST);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.inheritanceModifier = function () {
        var _localctx = new InheritanceModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 266, KotlinParser.RULE_inheritanceModifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2509;
                _la = this._input.LA(1);
                if (!(((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (KotlinParser.ABSTRACT - 120)) | (1 << (KotlinParser.FINAL - 120)) | (1 << (KotlinParser.OPEN - 120)))) !== 0))) {
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
    KotlinParser.prototype.parameterModifier = function () {
        var _localctx = new ParameterModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 268, KotlinParser.RULE_parameterModifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2511;
                _la = this._input.LA(1);
                if (!(((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (KotlinParser.VARARG - 125)) | (1 << (KotlinParser.NOINLINE - 125)) | (1 << (KotlinParser.CROSSINLINE - 125)))) !== 0))) {
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
    KotlinParser.prototype.typeParameterModifier = function () {
        var _localctx = new TypeParameterModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 270, KotlinParser.RULE_typeParameterModifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2513;
                this.match(KotlinParser.REIFIED);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    KotlinParser.prototype.labelDefinition = function () {
        var _localctx = new LabelDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 272, KotlinParser.RULE_labelDefinition);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2515;
                this.match(KotlinParser.LabelDefinition);
                this.state = 2519;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 375, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2516;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2521;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 375, this._ctx);
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
    KotlinParser.prototype.annotations = function () {
        var _localctx = new AnnotationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 274, KotlinParser.RULE_annotations);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2524;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 376, this._ctx)) {
                    case 1:
                        {
                            this.state = 2522;
                            this.annotation();
                        }
                        break;
                    case 2:
                        {
                            this.state = 2523;
                            this.annotationList();
                        }
                        break;
                }
                this.state = 2529;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 377, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2526;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2531;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 377, this._ctx);
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
    KotlinParser.prototype.annotation = function () {
        var _localctx = new AnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 276, KotlinParser.RULE_annotation);
        var _la;
        try {
            this.state = 2567;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.FILE:
                case KotlinParser.FIELD:
                case KotlinParser.PROPERTY:
                case KotlinParser.GET:
                case KotlinParser.SET:
                case KotlinParser.RECEIVER:
                case KotlinParser.PARAM:
                case KotlinParser.SETPARAM:
                case KotlinParser.DELEGATE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2532;
                        this.annotationUseSiteTarget();
                        this.state = 2536;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2533;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2538;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2539;
                        this.match(KotlinParser.COLON);
                        this.state = 2543;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2540;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2545;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2546;
                        this.unescapedAnnotation();
                    }
                    break;
                case KotlinParser.LabelReference:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2548;
                        this.match(KotlinParser.LabelReference);
                        this.state = 2556;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 381, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2552;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === KotlinParser.NL) {
                                        {
                                            {
                                                this.state = 2549;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                        this.state = 2554;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 2555;
                                    this.typeArguments();
                                }
                                break;
                        }
                        this.state = 2565;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 383, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2561;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === KotlinParser.NL) {
                                        {
                                            {
                                                this.state = 2558;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                        this.state = 2563;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 2564;
                                    this.valueArguments();
                                }
                                break;
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
    KotlinParser.prototype.annotationList = function () {
        var _localctx = new AnnotationListContext(this._ctx, this.state);
        this.enterRule(_localctx, 278, KotlinParser.RULE_annotationList);
        var _la;
        try {
            this.state = 2588;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.FILE:
                case KotlinParser.FIELD:
                case KotlinParser.PROPERTY:
                case KotlinParser.GET:
                case KotlinParser.SET:
                case KotlinParser.RECEIVER:
                case KotlinParser.PARAM:
                case KotlinParser.SETPARAM:
                case KotlinParser.DELEGATE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2569;
                        this.annotationUseSiteTarget();
                        this.state = 2570;
                        this.match(KotlinParser.COLON);
                        this.state = 2571;
                        this.match(KotlinParser.LSQUARE);
                        this.state = 2573;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 2572;
                                    this.unescapedAnnotation();
                                }
                            }
                            this.state = 2575;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0));
                        this.state = 2577;
                        this.match(KotlinParser.RSQUARE);
                    }
                    break;
                case KotlinParser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2579;
                        this.match(KotlinParser.AT);
                        this.state = 2580;
                        this.match(KotlinParser.LSQUARE);
                        this.state = 2582;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 2581;
                                    this.unescapedAnnotation();
                                }
                            }
                            this.state = 2584;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0));
                        this.state = 2586;
                        this.match(KotlinParser.RSQUARE);
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
    KotlinParser.prototype.annotationUseSiteTarget = function () {
        var _localctx = new AnnotationUseSiteTargetContext(this._ctx, this.state);
        this.enterRule(_localctx, 280, KotlinParser.RULE_annotationUseSiteTarget);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2590;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.FILE || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (KotlinParser.FIELD - 93)) | (1 << (KotlinParser.PROPERTY - 93)) | (1 << (KotlinParser.GET - 93)) | (1 << (KotlinParser.SET - 93)) | (1 << (KotlinParser.RECEIVER - 93)) | (1 << (KotlinParser.PARAM - 93)) | (1 << (KotlinParser.SETPARAM - 93)) | (1 << (KotlinParser.DELEGATE - 93)))) !== 0))) {
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
    KotlinParser.prototype.unescapedAnnotation = function () {
        var _localctx = new UnescapedAnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 282, KotlinParser.RULE_unescapedAnnotation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2592;
                this.identifier();
                this.state = 2594;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.LANGLE) {
                    {
                        this.state = 2593;
                        this.typeArguments();
                    }
                }
                this.state = 2597;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 389, this._ctx)) {
                    case 1:
                        {
                            this.state = 2596;
                            this.valueArguments();
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
    KotlinParser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 284, KotlinParser.RULE_identifier);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2599;
                this.simpleIdentifier();
                this.state = 2610;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 391, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2603;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 2600;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 2605;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 2606;
                                this.match(KotlinParser.DOT);
                                this.state = 2607;
                                this.simpleIdentifier();
                            }
                        }
                    }
                    this.state = 2612;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 391, this._ctx);
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
    KotlinParser.prototype.simpleIdentifier = function () {
        var _localctx = new SimpleIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 286, KotlinParser.RULE_simpleIdentifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2613;
                _la = this._input.LA(1);
                if (!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0))) {
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
    KotlinParser.prototype.semi = function () {
        var _localctx = new SemiContext(this._ctx, this.state);
        this.enterRule(_localctx, 288, KotlinParser.RULE_semi);
        var _la;
        try {
            var _alt = void 0;
            this.state = 2633;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 395, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2616;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 2615;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 2618;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 392, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2623;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2620;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2625;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2626;
                        this.match(KotlinParser.SEMICOLON);
                        this.state = 2630;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 394, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2627;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2632;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 394, this._ctx);
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
    KotlinParser.prototype.anysemi = function () {
        var _localctx = new AnysemiContext(this._ctx, this.state);
        this.enterRule(_localctx, 290, KotlinParser.RULE_anysemi);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2635;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.NL || _la === KotlinParser.SEMICOLON)) {
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
    Object.defineProperty(KotlinParser, "_ATN", {
        get: function () {
            if (!KotlinParser.__ATN) {
                KotlinParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(KotlinParser._serializedATN));
            }
            return KotlinParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    KotlinParser.ShebangLine = 1;
    KotlinParser.DelimitedComment = 2;
    KotlinParser.LineComment = 3;
    KotlinParser.WS = 4;
    KotlinParser.NL = 5;
    KotlinParser.RESERVED = 6;
    KotlinParser.DOT = 7;
    KotlinParser.COMMA = 8;
    KotlinParser.LPAREN = 9;
    KotlinParser.RPAREN = 10;
    KotlinParser.LSQUARE = 11;
    KotlinParser.RSQUARE = 12;
    KotlinParser.LCURL = 13;
    KotlinParser.RCURL = 14;
    KotlinParser.MULT = 15;
    KotlinParser.MOD = 16;
    KotlinParser.DIV = 17;
    KotlinParser.ADD = 18;
    KotlinParser.SUB = 19;
    KotlinParser.INCR = 20;
    KotlinParser.DECR = 21;
    KotlinParser.CONJ = 22;
    KotlinParser.DISJ = 23;
    KotlinParser.EXCL = 24;
    KotlinParser.COLON = 25;
    KotlinParser.SEMICOLON = 26;
    KotlinParser.ASSIGNMENT = 27;
    KotlinParser.ADD_ASSIGNMENT = 28;
    KotlinParser.SUB_ASSIGNMENT = 29;
    KotlinParser.MULT_ASSIGNMENT = 30;
    KotlinParser.DIV_ASSIGNMENT = 31;
    KotlinParser.MOD_ASSIGNMENT = 32;
    KotlinParser.ARROW = 33;
    KotlinParser.DOUBLE_ARROW = 34;
    KotlinParser.RANGE = 35;
    KotlinParser.COLONCOLON = 36;
    KotlinParser.Q_COLONCOLON = 37;
    KotlinParser.DOUBLE_SEMICOLON = 38;
    KotlinParser.HASH = 39;
    KotlinParser.AT = 40;
    KotlinParser.QUEST = 41;
    KotlinParser.ELVIS = 42;
    KotlinParser.LANGLE = 43;
    KotlinParser.RANGLE = 44;
    KotlinParser.LE = 45;
    KotlinParser.GE = 46;
    KotlinParser.EXCL_EQ = 47;
    KotlinParser.EXCL_EQEQ = 48;
    KotlinParser.AS_SAFE = 49;
    KotlinParser.EQEQ = 50;
    KotlinParser.EQEQEQ = 51;
    KotlinParser.SINGLE_QUOTE = 52;
    KotlinParser.RETURN_AT = 53;
    KotlinParser.CONTINUE_AT = 54;
    KotlinParser.BREAK_AT = 55;
    KotlinParser.FILE = 56;
    KotlinParser.PACKAGE = 57;
    KotlinParser.IMPORT = 58;
    KotlinParser.CLASS = 59;
    KotlinParser.INTERFACE = 60;
    KotlinParser.FUN = 61;
    KotlinParser.OBJECT = 62;
    KotlinParser.VAL = 63;
    KotlinParser.VAR = 64;
    KotlinParser.TYPE_ALIAS = 65;
    KotlinParser.CONSTRUCTOR = 66;
    KotlinParser.BY = 67;
    KotlinParser.COMPANION = 68;
    KotlinParser.INIT = 69;
    KotlinParser.THIS = 70;
    KotlinParser.SUPER = 71;
    KotlinParser.TYPEOF = 72;
    KotlinParser.WHERE = 73;
    KotlinParser.IF = 74;
    KotlinParser.ELSE = 75;
    KotlinParser.WHEN = 76;
    KotlinParser.TRY = 77;
    KotlinParser.CATCH = 78;
    KotlinParser.FINALLY = 79;
    KotlinParser.FOR = 80;
    KotlinParser.DO = 81;
    KotlinParser.WHILE = 82;
    KotlinParser.THROW = 83;
    KotlinParser.RETURN = 84;
    KotlinParser.CONTINUE = 85;
    KotlinParser.BREAK = 86;
    KotlinParser.AS = 87;
    KotlinParser.IS = 88;
    KotlinParser.IN = 89;
    KotlinParser.NOT_IS = 90;
    KotlinParser.NOT_IN = 91;
    KotlinParser.OUT = 92;
    KotlinParser.FIELD = 93;
    KotlinParser.PROPERTY = 94;
    KotlinParser.GET = 95;
    KotlinParser.SET = 96;
    KotlinParser.GETTER = 97;
    KotlinParser.SETTER = 98;
    KotlinParser.RECEIVER = 99;
    KotlinParser.PARAM = 100;
    KotlinParser.SETPARAM = 101;
    KotlinParser.DELEGATE = 102;
    KotlinParser.DYNAMIC = 103;
    KotlinParser.PUBLIC = 104;
    KotlinParser.PRIVATE = 105;
    KotlinParser.PROTECTED = 106;
    KotlinParser.INTERNAL = 107;
    KotlinParser.ENUM = 108;
    KotlinParser.SEALED = 109;
    KotlinParser.ANNOTATION = 110;
    KotlinParser.DATA = 111;
    KotlinParser.INNER = 112;
    KotlinParser.TAILREC = 113;
    KotlinParser.OPERATOR = 114;
    KotlinParser.INLINE = 115;
    KotlinParser.INFIX = 116;
    KotlinParser.EXTERNAL = 117;
    KotlinParser.SUSPEND = 118;
    KotlinParser.OVERRIDE = 119;
    KotlinParser.ABSTRACT = 120;
    KotlinParser.FINAL = 121;
    KotlinParser.OPEN = 122;
    KotlinParser.CONST = 123;
    KotlinParser.LATEINIT = 124;
    KotlinParser.VARARG = 125;
    KotlinParser.NOINLINE = 126;
    KotlinParser.CROSSINLINE = 127;
    KotlinParser.REIFIED = 128;
    KotlinParser.QUOTE_OPEN = 129;
    KotlinParser.TRIPLE_QUOTE_OPEN = 130;
    KotlinParser.RealLiteral = 131;
    KotlinParser.FloatLiteral = 132;
    KotlinParser.DoubleLiteral = 133;
    KotlinParser.LongLiteral = 134;
    KotlinParser.IntegerLiteral = 135;
    KotlinParser.HexLiteral = 136;
    KotlinParser.BinLiteral = 137;
    KotlinParser.BooleanLiteral = 138;
    KotlinParser.NullLiteral = 139;
    KotlinParser.Identifier = 140;
    KotlinParser.LabelReference = 141;
    KotlinParser.LabelDefinition = 142;
    KotlinParser.FieldIdentifier = 143;
    KotlinParser.CharacterLiteral = 144;
    KotlinParser.UNICODE_CLASS_LL = 145;
    KotlinParser.UNICODE_CLASS_LM = 146;
    KotlinParser.UNICODE_CLASS_LO = 147;
    KotlinParser.UNICODE_CLASS_LT = 148;
    KotlinParser.UNICODE_CLASS_LU = 149;
    KotlinParser.UNICODE_CLASS_ND = 150;
    KotlinParser.UNICODE_CLASS_NL = 151;
    KotlinParser.Inside_Comment = 152;
    KotlinParser.Inside_WS = 153;
    KotlinParser.Inside_NL = 154;
    KotlinParser.QUOTE_CLOSE = 155;
    KotlinParser.LineStrRef = 156;
    KotlinParser.LineStrText = 157;
    KotlinParser.LineStrEscapedChar = 158;
    KotlinParser.LineStrExprStart = 159;
    KotlinParser.TRIPLE_QUOTE_CLOSE = 160;
    KotlinParser.MultiLineStringQuote = 161;
    KotlinParser.MultiLineStrRef = 162;
    KotlinParser.MultiLineStrText = 163;
    KotlinParser.MultiLineStrEscapedChar = 164;
    KotlinParser.MultiLineStrExprStart = 165;
    KotlinParser.MultiLineNL = 166;
    KotlinParser.StrExpr_IN = 167;
    KotlinParser.StrExpr_Comment = 168;
    KotlinParser.StrExpr_WS = 169;
    KotlinParser.StrExpr_NL = 170;
    KotlinParser.RULE_kotlinFile = 0;
    KotlinParser.RULE_script = 1;
    KotlinParser.RULE_preamble = 2;
    KotlinParser.RULE_fileAnnotations = 3;
    KotlinParser.RULE_fileAnnotation = 4;
    KotlinParser.RULE_packageHeader = 5;
    KotlinParser.RULE_importList = 6;
    KotlinParser.RULE_importHeader = 7;
    KotlinParser.RULE_importAlias = 8;
    KotlinParser.RULE_topLevelObject = 9;
    KotlinParser.RULE_classDeclaration = 10;
    KotlinParser.RULE_primaryConstructor = 11;
    KotlinParser.RULE_classParameters = 12;
    KotlinParser.RULE_classParameter = 13;
    KotlinParser.RULE_delegationSpecifiers = 14;
    KotlinParser.RULE_delegationSpecifier = 15;
    KotlinParser.RULE_constructorInvocation = 16;
    KotlinParser.RULE_explicitDelegation = 17;
    KotlinParser.RULE_classBody = 18;
    KotlinParser.RULE_classMemberDeclaration = 19;
    KotlinParser.RULE_anonymousInitializer = 20;
    KotlinParser.RULE_secondaryConstructor = 21;
    KotlinParser.RULE_constructorDelegationCall = 22;
    KotlinParser.RULE_enumClassBody = 23;
    KotlinParser.RULE_enumEntries = 24;
    KotlinParser.RULE_enumEntry = 25;
    KotlinParser.RULE_functionDeclaration = 26;
    KotlinParser.RULE_functionValueParameters = 27;
    KotlinParser.RULE_functionValueParameter = 28;
    KotlinParser.RULE_parameter = 29;
    KotlinParser.RULE_functionBody = 30;
    KotlinParser.RULE_objectDeclaration = 31;
    KotlinParser.RULE_companionObject = 32;
    KotlinParser.RULE_propertyDeclaration = 33;
    KotlinParser.RULE_multiVariableDeclaration = 34;
    KotlinParser.RULE_variableDeclaration = 35;
    KotlinParser.RULE_getter = 36;
    KotlinParser.RULE_setter = 37;
    KotlinParser.RULE_typeAlias = 38;
    KotlinParser.RULE_typeParameters = 39;
    KotlinParser.RULE_typeParameter = 40;
    KotlinParser.RULE_type = 41;
    KotlinParser.RULE_typeModifierList = 42;
    KotlinParser.RULE_parenthesizedType = 43;
    KotlinParser.RULE_nullableType = 44;
    KotlinParser.RULE_typeReference = 45;
    KotlinParser.RULE_functionType = 46;
    KotlinParser.RULE_functionTypeReceiver = 47;
    KotlinParser.RULE_userType = 48;
    KotlinParser.RULE_simpleUserType = 49;
    KotlinParser.RULE_functionTypeParameters = 50;
    KotlinParser.RULE_typeConstraints = 51;
    KotlinParser.RULE_typeConstraint = 52;
    KotlinParser.RULE_block = 53;
    KotlinParser.RULE_statements = 54;
    KotlinParser.RULE_statement = 55;
    KotlinParser.RULE_blockLevelExpression = 56;
    KotlinParser.RULE_declaration = 57;
    KotlinParser.RULE_expression = 58;
    KotlinParser.RULE_disjunction = 59;
    KotlinParser.RULE_conjunction = 60;
    KotlinParser.RULE_equalityComparison = 61;
    KotlinParser.RULE_comparison = 62;
    KotlinParser.RULE_namedInfix = 63;
    KotlinParser.RULE_elvisExpression = 64;
    KotlinParser.RULE_infixFunctionCall = 65;
    KotlinParser.RULE_rangeExpression = 66;
    KotlinParser.RULE_additiveExpression = 67;
    KotlinParser.RULE_multiplicativeExpression = 68;
    KotlinParser.RULE_typeRHS = 69;
    KotlinParser.RULE_prefixUnaryExpression = 70;
    KotlinParser.RULE_postfixUnaryExpression = 71;
    KotlinParser.RULE_atomicExpression = 72;
    KotlinParser.RULE_parenthesizedExpression = 73;
    KotlinParser.RULE_callSuffix = 74;
    KotlinParser.RULE_annotatedLambda = 75;
    KotlinParser.RULE_arrayAccess = 76;
    KotlinParser.RULE_valueArguments = 77;
    KotlinParser.RULE_typeArguments = 78;
    KotlinParser.RULE_typeProjection = 79;
    KotlinParser.RULE_typeProjectionModifierList = 80;
    KotlinParser.RULE_valueArgument = 81;
    KotlinParser.RULE_literalConstant = 82;
    KotlinParser.RULE_stringLiteral = 83;
    KotlinParser.RULE_lineStringLiteral = 84;
    KotlinParser.RULE_multiLineStringLiteral = 85;
    KotlinParser.RULE_lineStringContent = 86;
    KotlinParser.RULE_lineStringExpression = 87;
    KotlinParser.RULE_multiLineStringContent = 88;
    KotlinParser.RULE_multiLineStringExpression = 89;
    KotlinParser.RULE_functionLiteral = 90;
    KotlinParser.RULE_lambdaParameters = 91;
    KotlinParser.RULE_lambdaParameter = 92;
    KotlinParser.RULE_objectLiteral = 93;
    KotlinParser.RULE_collectionLiteral = 94;
    KotlinParser.RULE_thisExpression = 95;
    KotlinParser.RULE_superExpression = 96;
    KotlinParser.RULE_conditionalExpression = 97;
    KotlinParser.RULE_ifExpression = 98;
    KotlinParser.RULE_controlStructureBody = 99;
    KotlinParser.RULE_whenExpression = 100;
    KotlinParser.RULE_whenEntry = 101;
    KotlinParser.RULE_whenCondition = 102;
    KotlinParser.RULE_rangeTest = 103;
    KotlinParser.RULE_typeTest = 104;
    KotlinParser.RULE_tryExpression = 105;
    KotlinParser.RULE_catchBlock = 106;
    KotlinParser.RULE_finallyBlock = 107;
    KotlinParser.RULE_loopExpression = 108;
    KotlinParser.RULE_forExpression = 109;
    KotlinParser.RULE_whileExpression = 110;
    KotlinParser.RULE_doWhileExpression = 111;
    KotlinParser.RULE_jumpExpression = 112;
    KotlinParser.RULE_callableReference = 113;
    KotlinParser.RULE_assignmentOperator = 114;
    KotlinParser.RULE_equalityOperation = 115;
    KotlinParser.RULE_comparisonOperator = 116;
    KotlinParser.RULE_inOperator = 117;
    KotlinParser.RULE_isOperator = 118;
    KotlinParser.RULE_additiveOperator = 119;
    KotlinParser.RULE_multiplicativeOperation = 120;
    KotlinParser.RULE_typeOperation = 121;
    KotlinParser.RULE_prefixUnaryOperation = 122;
    KotlinParser.RULE_postfixUnaryOperation = 123;
    KotlinParser.RULE_memberAccessOperator = 124;
    KotlinParser.RULE_modifierList = 125;
    KotlinParser.RULE_modifier = 126;
    KotlinParser.RULE_classModifier = 127;
    KotlinParser.RULE_memberModifier = 128;
    KotlinParser.RULE_visibilityModifier = 129;
    KotlinParser.RULE_varianceAnnotation = 130;
    KotlinParser.RULE_functionModifier = 131;
    KotlinParser.RULE_propertyModifier = 132;
    KotlinParser.RULE_inheritanceModifier = 133;
    KotlinParser.RULE_parameterModifier = 134;
    KotlinParser.RULE_typeParameterModifier = 135;
    KotlinParser.RULE_labelDefinition = 136;
    KotlinParser.RULE_annotations = 137;
    KotlinParser.RULE_annotation = 138;
    KotlinParser.RULE_annotationList = 139;
    KotlinParser.RULE_annotationUseSiteTarget = 140;
    KotlinParser.RULE_unescapedAnnotation = 141;
    KotlinParser.RULE_identifier = 142;
    KotlinParser.RULE_simpleIdentifier = 143;
    KotlinParser.RULE_semi = 144;
    KotlinParser.RULE_anysemi = 145;
    // tslint:disable:no-trailing-whitespace
    KotlinParser.ruleNames = [
        "kotlinFile", "script", "preamble", "fileAnnotations", "fileAnnotation",
        "packageHeader", "importList", "importHeader", "importAlias", "topLevelObject",
        "classDeclaration", "primaryConstructor", "classParameters", "classParameter",
        "delegationSpecifiers", "delegationSpecifier", "constructorInvocation",
        "explicitDelegation", "classBody", "classMemberDeclaration", "anonymousInitializer",
        "secondaryConstructor", "constructorDelegationCall", "enumClassBody",
        "enumEntries", "enumEntry", "functionDeclaration", "functionValueParameters",
        "functionValueParameter", "parameter", "functionBody", "objectDeclaration",
        "companionObject", "propertyDeclaration", "multiVariableDeclaration",
        "variableDeclaration", "getter", "setter", "typeAlias", "typeParameters",
        "typeParameter", "type", "typeModifierList", "parenthesizedType", "nullableType",
        "typeReference", "functionType", "functionTypeReceiver", "userType", "simpleUserType",
        "functionTypeParameters", "typeConstraints", "typeConstraint", "block",
        "statements", "statement", "blockLevelExpression", "declaration", "expression",
        "disjunction", "conjunction", "equalityComparison", "comparison", "namedInfix",
        "elvisExpression", "infixFunctionCall", "rangeExpression", "additiveExpression",
        "multiplicativeExpression", "typeRHS", "prefixUnaryExpression", "postfixUnaryExpression",
        "atomicExpression", "parenthesizedExpression", "callSuffix", "annotatedLambda",
        "arrayAccess", "valueArguments", "typeArguments", "typeProjection", "typeProjectionModifierList",
        "valueArgument", "literalConstant", "stringLiteral", "lineStringLiteral",
        "multiLineStringLiteral", "lineStringContent", "lineStringExpression",
        "multiLineStringContent", "multiLineStringExpression", "functionLiteral",
        "lambdaParameters", "lambdaParameter", "objectLiteral", "collectionLiteral",
        "thisExpression", "superExpression", "conditionalExpression", "ifExpression",
        "controlStructureBody", "whenExpression", "whenEntry", "whenCondition",
        "rangeTest", "typeTest", "tryExpression", "catchBlock", "finallyBlock",
        "loopExpression", "forExpression", "whileExpression", "doWhileExpression",
        "jumpExpression", "callableReference", "assignmentOperator", "equalityOperation",
        "comparisonOperator", "inOperator", "isOperator", "additiveOperator",
        "multiplicativeOperation", "typeOperation", "prefixUnaryOperation", "postfixUnaryOperation",
        "memberAccessOperator", "modifierList", "modifier", "classModifier", "memberModifier",
        "visibilityModifier", "varianceAnnotation", "functionModifier", "propertyModifier",
        "inheritanceModifier", "parameterModifier", "typeParameterModifier", "labelDefinition",
        "annotations", "annotation", "annotationList", "annotationUseSiteTarget",
        "unescapedAnnotation", "identifier", "simpleIdentifier", "semi", "anysemi",
    ];
    KotlinParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, "'...'",
        "'.'", "','", "'('", undefined, "'['", undefined, "'{'", "'}'", "'*'",
        "'%'", "'/'", "'+'", "'-'", "'++'", "'--'", "'&&'", "'||'", "'!'", "':'",
        "';'", "'='", "'+='", "'-='", "'*='", "'/='", "'%='", "'->'", "'=>'",
        "'..'", "'::'", "'?::'", "';;'", "'#'", "'@'", "'?'", "'?:'", "'<'", "'>'",
        "'<='", "'>='", "'!='", "'!=='", "'as?'", "'=='", "'==='", "'''", undefined,
        undefined, undefined, "'@file'", "'package'", "'import'", "'class'", "'interface'",
        "'fun'", "'object'", "'val'", "'var'", "'typealias'", "'constructor'",
        "'by'", "'companion'", "'init'", "'this'", "'super'", "'typeof'", "'where'",
        "'if'", "'else'", "'when'", "'try'", "'catch'", "'finally'", "'for'",
        "'do'", "'while'", "'throw'", "'return'", "'continue'", "'break'", "'as'",
        "'is'", "'in'", undefined, undefined, "'out'", "'@field'", "'@property'",
        "'@get'", "'@set'", "'get'", "'set'", "'@receiver'", "'@param'", "'@setparam'",
        "'@delegate'", "'dynamic'", "'public'", "'private'", "'protected'", "'internal'",
        "'enum'", "'sealed'", "'annotation'", "'data'", "'inner'", "'tailrec'",
        "'operator'", "'inline'", "'infix'", "'external'", "'suspend'", "'override'",
        "'abstract'", "'final'", "'open'", "'const'", "'lateinit'", "'vararg'",
        "'noinline'", "'crossinline'", "'reified'", undefined, "'\"\"\"'", undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "'null'",
    ];
    KotlinParser._SYMBOLIC_NAMES = [
        undefined, "ShebangLine", "DelimitedComment", "LineComment", "WS", "NL",
        "RESERVED", "DOT", "COMMA", "LPAREN", "RPAREN", "LSQUARE", "RSQUARE",
        "LCURL", "RCURL", "MULT", "MOD", "DIV", "ADD", "SUB", "INCR", "DECR",
        "CONJ", "DISJ", "EXCL", "COLON", "SEMICOLON", "ASSIGNMENT", "ADD_ASSIGNMENT",
        "SUB_ASSIGNMENT", "MULT_ASSIGNMENT", "DIV_ASSIGNMENT", "MOD_ASSIGNMENT",
        "ARROW", "DOUBLE_ARROW", "RANGE", "COLONCOLON", "Q_COLONCOLON", "DOUBLE_SEMICOLON",
        "HASH", "AT", "QUEST", "ELVIS", "LANGLE", "RANGLE", "LE", "GE", "EXCL_EQ",
        "EXCL_EQEQ", "AS_SAFE", "EQEQ", "EQEQEQ", "SINGLE_QUOTE", "RETURN_AT",
        "CONTINUE_AT", "BREAK_AT", "FILE", "PACKAGE", "IMPORT", "CLASS", "INTERFACE",
        "FUN", "OBJECT", "VAL", "VAR", "TYPE_ALIAS", "CONSTRUCTOR", "BY", "COMPANION",
        "INIT", "THIS", "SUPER", "TYPEOF", "WHERE", "IF", "ELSE", "WHEN", "TRY",
        "CATCH", "FINALLY", "FOR", "DO", "WHILE", "THROW", "RETURN", "CONTINUE",
        "BREAK", "AS", "IS", "IN", "NOT_IS", "NOT_IN", "OUT", "FIELD", "PROPERTY",
        "GET", "SET", "GETTER", "SETTER", "RECEIVER", "PARAM", "SETPARAM", "DELEGATE",
        "DYNAMIC", "PUBLIC", "PRIVATE", "PROTECTED", "INTERNAL", "ENUM", "SEALED",
        "ANNOTATION", "DATA", "INNER", "TAILREC", "OPERATOR", "INLINE", "INFIX",
        "EXTERNAL", "SUSPEND", "OVERRIDE", "ABSTRACT", "FINAL", "OPEN", "CONST",
        "LATEINIT", "VARARG", "NOINLINE", "CROSSINLINE", "REIFIED", "QUOTE_OPEN",
        "TRIPLE_QUOTE_OPEN", "RealLiteral", "FloatLiteral", "DoubleLiteral", "LongLiteral",
        "IntegerLiteral", "HexLiteral", "BinLiteral", "BooleanLiteral", "NullLiteral",
        "Identifier", "LabelReference", "LabelDefinition", "FieldIdentifier",
        "CharacterLiteral", "UNICODE_CLASS_LL", "UNICODE_CLASS_LM", "UNICODE_CLASS_LO",
        "UNICODE_CLASS_LT", "UNICODE_CLASS_LU", "UNICODE_CLASS_ND", "UNICODE_CLASS_NL",
        "Inside_Comment", "Inside_WS", "Inside_NL", "QUOTE_CLOSE", "LineStrRef",
        "LineStrText", "LineStrEscapedChar", "LineStrExprStart", "TRIPLE_QUOTE_CLOSE",
        "MultiLineStringQuote", "MultiLineStrRef", "MultiLineStrText", "MultiLineStrEscapedChar",
        "MultiLineStrExprStart", "MultiLineNL", "StrExpr_IN", "StrExpr_Comment",
        "StrExpr_WS", "StrExpr_NL",
    ];
    KotlinParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(KotlinParser._LITERAL_NAMES, KotlinParser._SYMBOLIC_NAMES, []);
    KotlinParser._serializedATNSegments = 5;
    KotlinParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xAC\u0A50\x04" +
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
        "\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x03\x02\x07\x02\u0128\n\x02" +
        "\f\x02\x0E\x02\u012B\v\x02\x03\x02\x03\x02\x07\x02\u012F\n\x02\f\x02\x0E" +
        "\x02\u0132\v\x02\x03\x02\x03\x02\x06\x02\u0136\n\x02\r\x02\x0E\x02\u0137" +
        "\x03\x02\x05\x02\u013B\n\x02\x07\x02\u013D\n\x02\f\x02\x0E\x02\u0140\v" +
        "\x02\x05\x02\u0142\n\x02\x03\x02\x03\x02\x03\x03\x07\x03\u0147\n\x03\f" +
        "\x03\x0E\x03\u014A\v\x03\x03\x03\x03\x03\x07\x03\u014E\n\x03\f\x03\x0E" +
        "\x03\u0151\v\x03\x03\x03\x03\x03\x06\x03\u0155\n\x03\r\x03\x0E\x03\u0156" +
        "\x03\x03\x05\x03\u015A\n\x03\x07\x03\u015C\n\x03\f\x03\x0E\x03\u015F\v" +
        "\x03\x05\x03\u0161\n\x03\x03\x03\x03\x03\x03\x04\x05\x04\u0166\n\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x05\x06\x05\u016C\n\x05\r\x05\x0E\x05\u016D\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x06\x06\u0174\n\x06\r\x06\x0E\x06\u0175\x03" +
        "\x06\x03\x06\x03\x06\x05\x06\u017B\n\x06\x03\x06\x05\x06\u017E\n\x06\x06" +
        "\x06\u0180\n\x06\r\x06\x0E\x06\u0181\x03\x07\x05\x07\u0185\n\x07\x03\x07" +
        "\x03\x07\x03\x07\x05\x07\u018A\n\x07\x05\x07\u018C\n\x07\x03\b\x07\b\u018F" +
        "\n\b\f\b\x0E\b\u0192\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0199\n\t" +
        "\x03\t\x05\t\u019C\n\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v" +
        "\x05\v\u01A6\n\v\x03\f\x05\f\u01A9\n\f\x03\f\x03\f\x07\f\u01AD\n\f\f\f" +
        "\x0E\f\u01B0\v\f\x03\f\x03\f\x07\f\u01B4\n\f\f\f\x0E\f\u01B7\v\f\x03\f" +
        "\x05\f\u01BA\n\f\x03\f\x07\f\u01BD\n\f\f\f\x0E\f\u01C0\v\f\x03\f\x05\f" +
        "\u01C3\n\f\x03\f\x07\f\u01C6\n\f\f\f\x0E\f\u01C9\v\f\x03\f\x03\f\x07\f" +
        "\u01CD\n\f\f\f\x0E\f\u01D0\v\f\x03\f\x05\f\u01D3\n\f\x03\f\x07\f\u01D6" +
        "\n\f\f\f\x0E\f\u01D9\v\f\x03\f\x05\f\u01DC\n\f\x03\f\x07\f\u01DF\n\f\f" +
        "\f\x0E\f\u01E2\v\f\x03\f\x03\f\x07\f\u01E6\n\f\f\f\x0E\f\u01E9\v\f\x03" +
        "\f\x05\f\u01EC\n\f\x03\r\x05\r\u01EF\n\r\x03\r\x03\r\x07\r\u01F3\n\r\f" +
        "\r\x0E\r\u01F6\v\r\x05\r\u01F8\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
        "\x03\x0E\x07\x0E\u0200\n\x0E\f\x0E\x0E\x0E\u0203\v\x0E\x05\x0E\u0205\n" +
        "\x0E\x03\x0E\x03\x0E\x03\x0F\x05\x0F\u020A\n\x0F\x03\x0F\x05\x0F\u020D" +
        "\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0214\n\x0F\x03" +
        "\x10\x07\x10\u0217\n\x10\f\x10\x0E\x10\u021A\v\x10\x03\x10\x03\x10\x07" +
        "\x10\u021E\n\x10\f\x10\x0E\x10\u0221\v\x10\x03\x10\x03\x10\x07\x10\u0225" +
        "\n\x10\f\x10\x0E\x10\u0228\v\x10\x03\x10\x07\x10\u022B\n\x10\f\x10\x0E" +
        "\x10\u022E\v\x10\x03\x11\x03\x11\x03\x11\x05\x11\u0233\n\x11\x03\x12\x03" +
        "\x12\x03\x12\x03\x13\x03\x13\x07\x13\u023A\n\x13\f\x13\x0E\x13\u023D\v" +
        "\x13\x03\x13\x03\x13\x07\x13\u0241\n\x13\f\x13\x0E\x13\u0244\v\x13\x03" +
        "\x13\x03\x13\x03\x14\x03\x14\x07\x14\u024A\n\x14\f\x14\x0E\x14\u024D\v" +
        "\x14\x03\x14\x07\x14\u0250\n\x14\f\x14\x0E\x14\u0253\v\x14\x03\x14\x07" +
        "\x14\u0256\n\x14\f\x14\x0E\x14\u0259\v\x14\x03\x14\x03\x14\x03\x15\x03" +
        "\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0265\n\x15" +
        "\x03\x15\x07\x15\u0268\n\x15\f\x15\x0E\x15\u026B\v\x15\x03\x16\x03\x16" +
        "\x07\x16\u026F\n\x16\f\x16\x0E\x16\u0272\v\x16\x03\x16\x03\x16\x03\x17" +
        "\x05\x17\u0277\n\x17\x03\x17\x03\x17\x07\x17\u027B\n\x17\f\x17\x0E\x17" +
        "\u027E\v\x17\x03\x17\x03\x17\x07\x17\u0282\n\x17\f\x17\x0E\x17\u0285\v" +
        "\x17\x03\x17\x03\x17\x07\x17\u0289\n\x17\f\x17\x0E\x17\u028C\v\x17\x03" +
        "\x17\x05\x17\u028F\n\x17\x03\x17\x07\x17\u0292\n\x17\f\x17\x0E\x17\u0295" +
        "\v\x17\x03\x17\x03\x17\x03\x18\x03\x18\x07\x18\u029B\n\x18\f\x18\x0E\x18" +
        "\u029E\v\x18\x03\x18\x03\x18\x03\x18\x07\x18\u02A3\n\x18\f\x18\x0E\x18" +
        "\u02A6\v\x18\x03\x18\x05\x18\u02A9\n\x18\x03\x19\x03\x19\x07\x19\u02AD" +
        "\n\x19\f\x19\x0E\x19\u02B0\v\x19\x03\x19\x05\x19\u02B3\n\x19\x03\x19\x07" +
        "\x19\u02B6\n\x19\f\x19\x0E\x19\u02B9\v\x19\x03\x19\x03\x19\x07\x19\u02BD" +
        "\n\x19\f\x19\x0E\x19\u02C0\v\x19\x03\x19\x07\x19\u02C3\n\x19\f\x19\x0E" +
        "\x19\u02C6\v\x19\x05\x19\u02C8\n\x19\x03\x19\x07\x19\u02CB\n\x19\f\x19" +
        "\x0E\x19\u02CE\v\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x07\x1A\u02D4\n\x1A" +
        "\f\x1A\x0E\x1A\u02D7\v\x1A\x06\x1A\u02D9\n\x1A\r\x1A\x0E\x1A\u02DA\x03" +
        "\x1A\x05\x1A\u02DE\n\x1A\x03\x1B\x03\x1B\x07\x1B\u02E2\n\x1B\f\x1B\x0E" +
        "\x1B\u02E5\v\x1B\x03\x1B\x05\x1B\u02E8\n\x1B\x03\x1B\x07\x1B\u02EB\n\x1B" +
        "\f\x1B\x0E\x1B\u02EE\v\x1B\x03\x1B\x05\x1B\u02F1\n\x1B\x03\x1B\x07\x1B" +
        "\u02F4\n\x1B\f\x1B\x0E\x1B\u02F7\v\x1B\x03\x1B\x05\x1B\u02FA\n\x1B\x03" +
        "\x1C\x05\x1C\u02FD\n\x1C\x03\x1C\x03\x1C\x07\x1C\u0301\n\x1C\f\x1C\x0E" +
        "\x1C\u0304\v\x1C\x03\x1C\x03\x1C\x07\x1C\u0308\n\x1C\f\x1C\x0E\x1C\u030B" +
        "\v\x1C\x03\x1C\x03\x1C\x05\x1C\u030F\n\x1C\x03\x1C\x07\x1C\u0312\n\x1C" +
        "\f\x1C\x0E\x1C\u0315\v\x1C\x03\x1C\x05\x1C\u0318\n\x1C\x03\x1C\x07\x1C" +
        "\u031B\n\x1C\f\x1C\x0E\x1C\u031E\v\x1C\x03\x1C\x05\x1C\u0321\n\x1C\x03" +
        "\x1C\x07\x1C\u0324\n\x1C\f\x1C\x0E\x1C\u0327\v\x1C\x03\x1C\x03\x1C\x07" +
        "\x1C\u032B\n\x1C\f\x1C\x0E\x1C\u032E\v\x1C\x03\x1C\x03\x1C\x07\x1C\u0332" +
        "\n\x1C\f\x1C\x0E\x1C\u0335\v\x1C\x03\x1C\x05\x1C\u0338\n\x1C\x03\x1C\x07" +
        "\x1C\u033B\n\x1C\f\x1C\x0E\x1C\u033E\v\x1C\x03\x1C\x05\x1C\u0341\n\x1C" +
        "\x03\x1C\x07\x1C\u0344\n\x1C\f\x1C\x0E\x1C\u0347\v\x1C\x03\x1C\x05\x1C" +
        "\u034A\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0350\n\x1D\f\x1D" +
        "\x0E\x1D\u0353\v\x1D\x05\x1D\u0355\n\x1D\x03\x1D\x03\x1D\x03\x1E\x05\x1E" +
        "\u035A\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u035F\n\x1E\x03\x1F\x03\x1F" +
        "\x03\x1F\x03\x1F\x03 \x03 \x03 \x07 \u0368\n \f \x0E \u036B\v \x03 \x05" +
        " \u036E\n \x03!\x05!\u0371\n!\x03!\x03!\x07!\u0375\n!\f!\x0E!\u0378\v" +
        "!\x03!\x03!\x07!\u037C\n!\f!\x0E!\u037F\v!\x03!\x05!\u0382\n!\x03!\x07" +
        "!\u0385\n!\f!\x0E!\u0388\v!\x03!\x03!\x07!\u038C\n!\f!\x0E!\u038F\v!\x03" +
        "!\x05!\u0392\n!\x03!\x07!\u0395\n!\f!\x0E!\u0398\v!\x03!\x05!\u039B\n" +
        "!\x03\"\x05\"\u039E\n\"\x03\"\x03\"\x07\"\u03A2\n\"\f\"\x0E\"\u03A5\v" +
        "\"\x03\"\x05\"\u03A8\n\"\x03\"\x03\"\x07\"\u03AC\n\"\f\"\x0E\"\u03AF\v" +
        "\"\x03\"\x05\"\u03B2\n\"\x03\"\x07\"\u03B5\n\"\f\"\x0E\"\u03B8\v\"\x03" +
        "\"\x03\"\x07\"\u03BC\n\"\f\"\x0E\"\u03BF\v\"\x03\"\x05\"\u03C2\n\"\x03" +
        "\"\x07\"\u03C5\n\"\f\"\x0E\"\u03C8\v\"\x03\"\x05\"\u03CB\n\"\x03#\x05" +
        "#\u03CE\n#\x03#\x03#\x07#\u03D2\n#\f#\x0E#\u03D5\v#\x03#\x05#\u03D8\n" +
        "#\x03#\x07#\u03DB\n#\f#\x0E#\u03DE\v#\x03#\x03#\x07#\u03E2\n#\f#\x0E#" +
        "\u03E5\v#\x03#\x03#\x05#\u03E9\n#\x03#\x07#\u03EC\n#\f#\x0E#\u03EF\v#" +
        "\x03#\x03#\x05#\u03F3\n#\x03#\x07#\u03F6\n#\f#\x0E#\u03F9\v#\x03#\x05" +
        "#\u03FC\n#\x03#\x07#\u03FF\n#\f#\x0E#\u0402\v#\x03#\x03#\x07#\u0406\n" +
        "#\f#\x0E#\u0409\v#\x03#\x05#\u040C\n#\x03#\x03#\x03#\x03#\x05#\u0412\n" +
        "#\x03#\x03#\x03#\x03#\x05#\u0418\n#\x05#\u041A\n#\x03$\x03$\x03$\x03$" +
        "\x07$\u0420\n$\f$\x0E$\u0423\v$\x03$\x03$\x03%\x03%\x03%\x05%\u042A\n" +
        "%\x03&\x05&\u042D\n&\x03&\x03&\x05&\u0431\n&\x03&\x03&\x07&\u0435\n&\f" +
        "&\x0E&\u0438\v&\x03&\x03&\x03&\x07&\u043D\n&\f&\x0E&\u0440\v&\x03&\x03" +
        "&\x07&\u0444\n&\f&\x0E&\u0447\v&\x03&\x05&\u044A\n&\x03&\x07&\u044D\n" +
        "&\f&\x0E&\u0450\v&\x03&\x03&\x03&\x07&\u0455\n&\f&\x0E&\u0458\v&\x03&" +
        "\x05&\u045B\n&\x05&\u045D\n&\x03\'\x05\'\u0460\n\'\x03\'\x03\'\x05\'\u0464" +
        "\n\'\x03\'\x03\'\x07\'\u0468\n\'\f\'\x0E\'\u046B\v\'\x03\'\x03\'\x03\'" +
        "\x07\'\u0470\n\'\f\'\x0E\'\u0473\v\'\x03\'\x03\'\x05\'\u0477\n\'\x03\'" +
        "\x03\'\x07\'\u047B\n\'\f\'\x0E\'\u047E\v\'\x03\'\x03\'\x05\'\u0482\n\'" +
        "\x03(\x05(\u0485\n(\x03(\x03(\x07(\u0489\n(\f(\x0E(\u048C\v(\x03(\x03" +
        "(\x07(\u0490\n(\f(\x0E(\u0493\v(\x03(\x05(\u0496\n(\x03(\x07(\u0499\n" +
        "(\f(\x0E(\u049C\v(\x03(\x03(\x07(\u04A0\n(\f(\x0E(\u04A3\v(\x03(\x03(" +
        "\x03)\x03)\x07)\u04A9\n)\f)\x0E)\u04AC\v)\x03)\x03)\x07)\u04B0\n)\f)\x0E" +
        ")\u04B3\v)\x03)\x03)\x07)\u04B7\n)\f)\x0E)\u04BA\v)\x03)\x07)\u04BD\n" +
        ")\f)\x0E)\u04C0\v)\x03)\x07)\u04C3\n)\f)\x0E)\u04C6\v)\x03)\x03)\x03*" +
        "\x05*\u04CB\n*\x03*\x07*\u04CE\n*\f*\x0E*\u04D1\v*\x03*\x03*\x07*\u04D5" +
        "\n*\f*\x0E*\u04D8\v*\x03*\x03*\x07*\u04DC\n*\f*\x0E*\u04DF\v*\x03*\x05" +
        "*\u04E2\n*\x03+\x05+\u04E5\n+\x03+\x03+\x03+\x03+\x05+\u04EB\n+\x03,\x03" +
        ",\x03,\x07,\u04F0\n,\f,\x0E,\u04F3\v,\x06,\u04F5\n,\r,\x0E,\u04F6\x03" +
        "-\x03-\x03-\x03-\x03.\x03.\x05.\u04FF\n.\x03.\x07.\u0502\n.\f.\x0E.\u0505" +
        "\v.\x03.\x06.\u0508\n.\r.\x0E.\u0509\x03/\x03/\x03/\x03/\x03/\x03/\x05" +
        "/\u0512\n/\x030\x030\x070\u0516\n0\f0\x0E0\u0519\v0\x030\x030\x070\u051D" +
        "\n0\f0\x0E0\u0520\v0\x050\u0522\n0\x030\x030\x070\u0526\n0\f0\x0E0\u0529" +
        "\v0\x030\x030\x070\u052D\n0\f0\x0E0\u0530\v0\x030\x030\x031\x031\x031" +
        "\x051\u0537\n1\x032\x032\x072\u053B\n2\f2\x0E2\u053E\v2\x032\x032\x07" +
        "2\u0542\n2\f2\x0E2\u0545\v2\x032\x072\u0548\n2\f2\x0E2\u054B\v2\x033\x03" +
        "3\x073\u054F\n3\f3\x0E3\u0552\v3\x033\x053\u0555\n3\x034\x034\x034\x05" +
        "4\u055A\n4\x034\x034\x034\x054\u055F\n4\x074\u0561\n4\f4\x0E4\u0564\v" +
        "4\x034\x034\x035\x035\x075\u056A\n5\f5\x0E5\u056D\v5\x035\x035\x075\u0571" +
        "\n5\f5\x0E5\u0574\v5\x035\x035\x075\u0578\n5\f5\x0E5\u057B\v5\x035\x07" +
        "5\u057E\n5\f5\x0E5\u0581\v5\x036\x076\u0584\n6\f6\x0E6\u0587\v6\x036\x03" +
        "6\x076\u058B\n6\f6\x0E6\u058E\v6\x036\x036\x076\u0592\n6\f6\x0E6\u0595" +
        "\v6\x036\x036\x037\x037\x037\x037\x038\x078\u059E\n8\f8\x0E8\u05A1\v8" +
        "\x038\x038\x068\u05A5\n8\r8\x0E8\u05A6\x038\x058\u05AA\n8\x078\u05AC\n" +
        "8\f8\x0E8\u05AF\v8\x058\u05B1\n8\x039\x039\x059\u05B5\n9\x03:\x07:\u05B8" +
        "\n:\f:\x0E:\u05BB\v:\x03:\x07:\u05BE\n:\f:\x0E:\u05C1\v:\x03:\x03:\x03" +
        ";\x07;\u05C6\n;\f;\x0E;\u05C9\v;\x03;\x03;\x03;\x03;\x05;\u05CF\n;\x03" +
        "<\x03<\x03<\x03<\x07<\u05D5\n<\f<\x0E<\u05D8\v<\x03=\x03=\x07=\u05DC\n" +
        "=\f=\x0E=\u05DF\v=\x03=\x03=\x07=\u05E3\n=\f=\x0E=\u05E6\v=\x03=\x07=" +
        "\u05E9\n=\f=\x0E=\u05EC\v=\x03>\x03>\x07>\u05F0\n>\f>\x0E>\u05F3\v>\x03" +
        ">\x03>\x07>\u05F7\n>\f>\x0E>\u05FA\v>\x03>\x07>\u05FD\n>\f>\x0E>\u0600" +
        "\v>\x03?\x03?\x03?\x07?\u0605\n?\f?\x0E?\u0608\v?\x03?\x03?\x07?\u060C" +
        "\n?\f?\x0E?\u060F\v?\x03@\x03@\x03@\x07@\u0614\n@\f@\x0E@\u0617\v@\x03" +
        "@\x03@\x05@\u061B\n@\x03A\x03A\x03A\x07A\u0620\nA\fA\x0EA\u0623\vA\x03" +
        "A\x03A\x06A\u0627\nA\rA\x0EA\u0628\x03A\x03A\x07A\u062D\nA\fA\x0EA\u0630" +
        "\vA\x03A\x03A\x05A\u0634\nA\x03B\x03B\x07B\u0638\nB\fB\x0EB\u063B\vB\x03" +
        "B\x03B\x07B\u063F\nB\fB\x0EB\u0642\vB\x03B\x07B\u0645\nB\fB\x0EB\u0648" +
        "\vB\x03C\x03C\x03C\x07C\u064D\nC\fC\x0EC\u0650\vC\x03C\x03C\x07C\u0654" +
        "\nC\fC\x0EC\u0657\vC\x03D\x03D\x03D\x07D\u065C\nD\fD\x0ED\u065F\vD\x03" +
        "D\x07D\u0662\nD\fD\x0ED\u0665\vD\x03E\x03E\x03E\x07E\u066A\nE\fE\x0EE" +
        "\u066D\vE\x03E\x03E\x07E\u0671\nE\fE\x0EE\u0674\vE\x03F\x03F\x03F\x07" +
        "F\u0679\nF\fF\x0EF\u067C\vF\x03F\x03F\x07F\u0680\nF\fF\x0EF\u0683\vF\x03" +
        "G\x03G\x07G\u0687\nG\fG\x0EG\u068A\vG\x03G\x03G\x03G\x07G\u068F\nG\fG" +
        "\x0EG\u0692\vG\x03H\x07H\u0695\nH\fH\x0EH\u0698\vH\x03H\x03H\x03I\x03" +
        "I\x05I\u069E\nI\x03I\x07I\u06A1\nI\fI\x0EI\u06A4\vI\x03J\x03J\x03J\x03" +
        "J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u06B2\nJ\x03K\x03K\x03" +
        "K\x03K\x03L\x03L\x05L\u06BA\nL\x03L\x07L\u06BD\nL\fL\x0EL\u06C0\vL\x03" +
        "L\x03L\x07L\u06C4\nL\fL\x0EL\u06C7\vL\x03L\x06L\u06CA\nL\rL\x0EL\u06CB" +
        "\x05L\u06CE\nL\x03M\x07M\u06D1\nM\fM\x0EM\u06D4\vM\x03M\x05M\u06D7\nM" +
        "\x03M\x07M\u06DA\nM\fM\x0EM\u06DD\vM\x03M\x03M\x03N\x03N\x03N\x03N\x07" +
        "N\u06E5\nN\fN\x0EN\u06E8\vN\x05N\u06EA\nN\x03N\x03N\x03O\x03O\x03O\x03" +
        "O\x07O\u06F2\nO\fO\x0EO\u06F5\vO\x05O\u06F7\nO\x03O\x03O\x03P\x03P\x07" +
        "P\u06FD\nP\fP\x0EP\u0700\vP\x03P\x03P\x07P\u0704\nP\fP\x0EP\u0707\vP\x03" +
        "P\x03P\x07P\u070B\nP\fP\x0EP\u070E\vP\x03P\x07P\u0711\nP\fP\x0EP\u0714" +
        "\vP\x03P\x03P\x03Q\x05Q\u0719\nQ\x03Q\x03Q\x05Q\u071D\nQ\x03R\x06R\u0720" +
        "\nR\rR\x0ER\u0721\x03S\x03S\x07S\u0726\nS\fS\x0ES\u0729\vS\x03S\x03S\x07" +
        "S\u072D\nS\fS\x0ES\u0730\vS\x05S\u0732\nS\x03S\x05S\u0735\nS\x03S\x07" +
        "S\u0738\nS\fS\x0ES\u073B\vS\x03S\x03S\x03T\x03T\x03T\x03T\x03T\x03T\x03" +
        "T\x03T\x03T\x05T\u0748\nT\x03U\x03U\x05U\u074C\nU\x03V\x03V\x03V\x07V" +
        "\u0751\nV\fV\x0EV\u0754\vV\x03V\x03V\x03W\x03W\x03W\x03W\x03W\x07W\u075D" +
        "\nW\fW\x0EW\u0760\vW\x03W\x03W\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Z\x03" +
        "Z\x03[\x03[\x03[\x03[\x03\\\x07\\\u0771\n\\\f\\\x0E\\\u0774\v\\\x03\\" +
        "\x03\\\x07\\\u0778\n\\\f\\\x0E\\\u077B\v\\\x03\\\x03\\\x07\\\u077F\n\\" +
        "\f\\\x0E\\\u0782\v\\\x03\\\x03\\\x03\\\x03\\\x07\\\u0788\n\\\f\\\x0E\\" +
        "\u078B\v\\\x03\\\x03\\\x07\\\u078F\n\\\f\\\x0E\\\u0792\v\\\x03\\\x03\\" +
        "\x07\\\u0796\n\\\f\\\x0E\\\u0799\v\\\x03\\\x03\\\x07\\\u079D\n\\\f\\\x0E" +
        "\\\u07A0\v\\\x03\\\x03\\\x05\\\u07A4\n\\\x03]\x05]\u07A7\n]\x03]\x07]" +
        "\u07AA\n]\f]\x0E]\u07AD\v]\x03]\x03]\x07]\u07B1\n]\f]\x0E]\u07B4\v]\x03" +
        "]\x07]\u07B7\n]\f]\x0E]\u07BA\v]\x03^\x03^\x03^\x07^\u07BF\n^\f^\x0E^" +
        "\u07C2\v^\x03^\x03^\x07^\u07C6\n^\f^\x0E^\u07C9\v^\x03^\x05^\u07CC\n^" +
        "\x05^\u07CE\n^\x03_\x03_\x07_\u07D2\n_\f_\x0E_\u07D5\v_\x03_\x03_\x07" +
        "_\u07D9\n_\f_\x0E_\u07DC\v_\x03_\x05_\u07DF\n_\x03_\x07_\u07E2\n_\f_\x0E" +
        "_\u07E5\v_\x03_\x03_\x03`\x03`\x05`\u07EB\n`\x03`\x03`\x07`\u07EF\n`\f" +
        "`\x0E`\u07F2\v`\x03`\x03`\x03a\x03a\x05a\u07F8\na\x03b\x03b\x03b\x07b" +
        "\u07FD\nb\fb\x0Eb\u0800\vb\x03b\x03b\x07b\u0804\nb\fb\x0Eb\u0807\vb\x03" +
        "b\x03b\x05b\u080B\nb\x03b\x05b\u080E\nb\x03c\x03c\x05c\u0812\nc\x03d\x03" +
        "d\x07d\u0816\nd\fd\x0Ed\u0819\vd\x03d\x03d\x03d\x03d\x07d\u081F\nd\fd" +
        "\x0Ed\u0822\vd\x03d\x05d\u0825\nd\x03d\x05d\u0828\nd\x03d\x07d\u082B\n" +
        "d\fd\x0Ed\u082E\vd\x03d\x03d\x07d\u0832\nd\fd\x0Ed\u0835\vd\x03d\x05d" +
        "\u0838\nd\x05d\u083A\nd\x03e\x03e\x05e\u083E\ne\x03f\x03f\x07f\u0842\n" +
        "f\ff\x0Ef\u0845\vf\x03f\x03f\x03f\x03f\x05f\u084B\nf\x03f\x07f\u084E\n" +
        "f\ff\x0Ef\u0851\vf\x03f\x03f\x07f\u0855\nf\ff\x0Ef\u0858\vf\x03f\x03f" +
        "\x07f\u085C\nf\ff\x0Ef\u085F\vf\x07f\u0861\nf\ff\x0Ef\u0864\vf\x03f\x07" +
        "f\u0867\nf\ff\x0Ef\u086A\vf\x03f\x03f\x03g\x03g\x07g\u0870\ng\fg\x0Eg" +
        "\u0873\vg\x03g\x03g\x07g\u0877\ng\fg\x0Eg\u087A\vg\x03g\x07g\u087D\ng" +
        "\fg\x0Eg\u0880\vg\x03g\x07g\u0883\ng\fg\x0Eg\u0886\vg\x03g\x03g\x07g\u088A" +
        "\ng\fg\x0Eg\u088D\vg\x03g\x03g\x05g\u0891\ng\x03g\x03g\x07g\u0895\ng\f" +
        "g\x0Eg\u0898\vg\x03g\x03g\x07g\u089C\ng\fg\x0Eg\u089F\vg\x03g\x05g\u08A2" +
        "\ng\x03h\x03h\x03h\x05h\u08A7\nh\x03i\x03i\x07i\u08AB\ni\fi\x0Ei\u08AE" +
        "\vi\x03i\x03i\x03j\x03j\x07j";
    KotlinParser._serializedATNSegment1 = "\u08B4\nj\fj\x0Ej\u08B7\vj\x03j\x03j\x03k\x03k\x07k\u08BD\nk\fk\x0Ek\u08C0" +
        "\vk\x03k\x03k\x07k\u08C4\nk\fk\x0Ek\u08C7\vk\x03k\x07k\u08CA\nk\fk\x0E" +
        "k\u08CD\vk\x03k\x07k\u08D0\nk\fk\x0Ek\u08D3\vk\x03k\x05k\u08D6\nk\x03" +
        "l\x03l\x07l\u08DA\nl\fl\x0El\u08DD\vl\x03l\x03l\x07l\u08E1\nl\fl\x0El" +
        "\u08E4\vl\x03l\x03l\x03l\x03l\x03l\x07l\u08EB\nl\fl\x0El\u08EE\vl\x03" +
        "l\x03l\x03m\x03m\x07m\u08F4\nm\fm\x0Em\u08F7\vm\x03m\x03m\x03n\x03n\x03" +
        "n\x05n\u08FE\nn\x03o\x03o\x07o\u0902\no\fo\x0Eo\u0905\vo\x03o\x03o\x07" +
        "o\u0909\no\fo\x0Eo\u090C\vo\x03o\x03o\x05o\u0910\no\x03o\x03o\x03o\x03" +
        "o\x07o\u0916\no\fo\x0Eo\u0919\vo\x03o\x05o\u091C\no\x03p\x03p\x07p\u0920" +
        "\np\fp\x0Ep\u0923\vp\x03p\x03p\x03p\x03p\x07p\u0929\np\fp\x0Ep\u092C\v" +
        "p\x03p\x05p\u092F\np\x03q\x03q\x07q\u0933\nq\fq\x0Eq\u0936\vq\x03q\x05" +
        "q\u0939\nq\x03q\x07q\u093C\nq\fq\x0Eq\u093F\vq\x03q\x03q\x07q\u0943\n" +
        "q\fq\x0Eq\u0946\vq\x03q\x03q\x03q\x03q\x03r\x03r\x07r\u094E\nr\fr\x0E" +
        "r\u0951\vr\x03r\x03r\x03r\x05r\u0956\nr\x03r\x03r\x03r\x03r\x05r\u095C" +
        "\nr\x03s\x03s\x03s\x07s\u0961\ns\fs\x0Es\u0964\vs\x07s\u0966\ns\fs\x0E" +
        "s\u0969\vs\x05s\u096B\ns\x03s\x07s\u096E\ns\fs\x0Es\u0971\vs\x03s\x03" +
        "s\x07s\u0975\ns\fs\x0Es\u0978\vs\x03s\x03s\x05s\u097C\ns\x03t\x03t\x03" +
        "u\x03u\x03v\x03v\x03w\x03w\x03x\x03x\x03y\x03y\x03z\x03z\x03{\x03{\x03" +
        "|\x03|\x03|\x03|\x03|\x03|\x03|\x05|\u0995\n|\x03}\x03}\x03}\x03}\x03" +
        "}\x03}\x03}\x07}\u099E\n}\f}\x0E}\u09A1\v}\x03}\x03}\x03}\x05}\u09A6\n" +
        "}\x03~\x03~\x03~\x05~\u09AB\n~\x03\x7F\x03\x7F\x06\x7F\u09AF\n\x7F\r\x7F" +
        "\x0E\x7F\u09B0\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80" +
        "\x03\x80\x03\x80\x05\x80\u09BC\n\x80\x03\x80\x07\x80\u09BF\n\x80\f\x80" +
        "\x0E\x80\u09C2\v\x80\x03\x81\x03\x81\x03\x82\x03\x82\x03\x83\x03\x83\x03" +
        "\x84\x03\x84\x03\x85\x03\x85\x03\x86\x03\x86\x03\x87\x03\x87\x03\x88\x03" +
        "\x88\x03\x89\x03\x89\x03\x8A\x03\x8A\x07\x8A\u09D8\n\x8A\f\x8A\x0E\x8A" +
        "\u09DB\v\x8A\x03\x8B\x03\x8B\x05\x8B\u09DF\n\x8B\x03\x8B\x07\x8B\u09E2" +
        "\n\x8B\f\x8B\x0E\x8B\u09E5\v\x8B\x03\x8C\x03\x8C\x07\x8C\u09E9\n\x8C\f" +
        "\x8C\x0E\x8C\u09EC\v\x8C\x03\x8C\x03\x8C\x07\x8C\u09F0\n\x8C\f\x8C\x0E" +
        "\x8C\u09F3\v\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x07\x8C\u09F9\n\x8C\f" +
        "\x8C\x0E\x8C\u09FC\v\x8C\x03\x8C\x05\x8C\u09FF\n\x8C\x03\x8C\x07\x8C\u0A02" +
        "\n\x8C\f\x8C\x0E\x8C\u0A05\v\x8C\x03\x8C\x05\x8C\u0A08\n\x8C\x05\x8C\u0A0A" +
        "\n\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x06\x8D\u0A10\n\x8D\r\x8D\x0E\x8D" +
        "\u0A11\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x06\x8D\u0A19\n\x8D\r\x8D" +
        "\x0E\x8D\u0A1A\x03\x8D\x03\x8D\x05\x8D\u0A1F\n\x8D\x03\x8E\x03\x8E\x03" +
        "\x8F\x03\x8F\x05\x8F\u0A25\n\x8F\x03\x8F\x05\x8F\u0A28\n\x8F\x03\x90\x03" +
        "\x90\x07\x90\u0A2C\n\x90\f\x90\x0E\x90\u0A2F\v\x90\x03\x90\x03\x90\x07" +
        "\x90\u0A33\n\x90\f\x90\x0E\x90\u0A36\v\x90\x03\x91\x03\x91\x03\x92\x06" +
        "\x92\u0A3B\n\x92\r\x92\x0E\x92\u0A3C\x03\x92\x07\x92\u0A40\n\x92\f\x92" +
        "\x0E\x92\u0A43\v\x92\x03\x92\x03\x92\x07\x92\u0A47\n\x92\f\x92\x0E\x92" +
        "\u0A4A\v\x92\x05\x92\u0A4C\n\x92\x03\x93\x03\x93\x03\x93\x02\x02\x02\x94" +
        "\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
        "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
        "*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
        "F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
        "b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
        "~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
        "\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02" +
        "\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02" +
        "\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02" +
        "\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02" +
        "\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02" +
        "\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02" +
        "\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A" +
        "\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118" +
        "\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\x02\x1B" +
        "\x03\x02=>\x03\x02AB\x04\x02\x1D\x1DEE\x03\x02\x9E\xA0\x03\x02\xA4\xA6" +
        "\x04\x0277VV\x03\x02&\'\x03\x02\x1D\"\x04\x021245\x03\x02-0\x04\x02[[" +
        "]]\x04\x02ZZ\\\\\x03\x02\x14\x15\x03\x02\x11\x13\x05\x02\x1B\x1B33YY\x03" +
        "\x02nr\x04\x02yy~~\x03\x02jm\x04\x02[[^^\x03\x02sx\x03\x02z|\x03\x02\x7F" +
        "\x81\x05\x02::_beh\n\x02<<DGKKPQ^^cdi\x82\x8E\x8E\x04\x02\x07\x07\x1C" +
        "\x1C\x02\u0B88\x02\u0129\x03\x02\x02\x02\x04\u0148\x03\x02\x02\x02\x06" +
        "\u0165\x03\x02\x02\x02\b\u016B\x03\x02\x02\x02\n\u017F\x03\x02\x02\x02" +
        "\f\u018B\x03\x02\x02\x02\x0E\u0190\x03\x02\x02\x02\x10\u0193\x03\x02\x02" +
        "\x02\x12\u019D\x03\x02\x02\x02\x14\u01A5\x03\x02\x02\x02\x16\u01A8\x03" +
        "\x02\x02\x02\x18\u01EE\x03\x02\x02\x02\x1A\u01FB\x03\x02\x02\x02\x1C\u0209" +
        "\x03\x02\x02\x02\x1E\u0218\x03\x02\x02\x02 \u0232\x03\x02\x02\x02\"\u0234" +
        "\x03\x02\x02\x02$\u0237\x03\x02\x02\x02&\u0247\x03\x02\x02\x02(\u0264" +
        "\x03\x02\x02\x02*\u026C\x03\x02\x02\x02,\u0276\x03\x02\x02\x02.\u02A8" +
        "\x03\x02\x02\x020\u02AA\x03\x02\x02\x022\u02D8\x03\x02\x02\x024\u02DF" +
        "\x03\x02\x02\x026\u02FC\x03\x02\x02\x028\u034B\x03\x02\x02\x02:\u0359" +
        "\x03\x02\x02\x02<\u0360\x03\x02\x02\x02>\u036D\x03\x02\x02\x02@\u0370" +
        "\x03\x02\x02\x02B\u039D\x03\x02\x02\x02D\u03CD\x03\x02\x02\x02F\u041B" +
        "\x03\x02\x02\x02H\u0426\x03\x02\x02\x02J\u045C\x03\x02\x02\x02L\u0481" +
        "\x03\x02\x02\x02N\u0484\x03\x02\x02\x02P\u04A6\x03\x02\x02\x02R\u04CA" +
        "\x03\x02\x02\x02T\u04E4\x03\x02\x02\x02V\u04F4\x03\x02\x02\x02X\u04F8" +
        "\x03\x02\x02\x02Z\u04FE\x03\x02\x02\x02\\\u0511\x03\x02\x02\x02^\u0521" +
        "\x03\x02\x02\x02`\u0536\x03\x02\x02\x02b\u0538\x03\x02\x02\x02d\u054C" +
        "\x03\x02\x02\x02f\u0556\x03\x02\x02\x02h\u0567\x03\x02\x02\x02j\u0585" +
        "\x03\x02\x02\x02l\u0598\x03\x02\x02\x02n\u059F\x03\x02\x02\x02p\u05B4" +
        "\x03\x02\x02\x02r\u05B9\x03\x02\x02\x02t\u05C7\x03\x02\x02\x02v\u05D0" +
        "\x03\x02\x02\x02x\u05D9\x03\x02\x02\x02z\u05ED\x03\x02\x02\x02|\u0601" +
        "\x03\x02\x02\x02~\u0610\x03\x02\x02\x02\x80\u061C\x03\x02\x02\x02\x82" +
        "\u0635\x03\x02\x02\x02\x84\u0649\x03\x02\x02\x02\x86\u0658\x03\x02\x02" +
        "\x02\x88\u0666\x03\x02\x02\x02\x8A\u0675\x03\x02\x02\x02\x8C\u0684\x03" +
        "\x02\x02\x02\x8E\u0696\x03\x02\x02\x02\x90\u069D\x03\x02\x02\x02\x92\u06B1" +
        "\x03\x02\x02\x02\x94\u06B3\x03\x02\x02\x02\x96\u06CD\x03\x02\x02\x02\x98" +
        "\u06D2\x03\x02\x02\x02\x9A\u06E0\x03\x02\x02\x02\x9C\u06ED\x03\x02\x02" +
        "\x02\x9E\u06FA\x03\x02\x02\x02\xA0\u071C\x03\x02\x02\x02\xA2\u071F\x03" +
        "\x02\x02\x02\xA4\u0731\x03\x02\x02\x02\xA6\u0747\x03\x02\x02\x02\xA8\u074B" +
        "\x03\x02\x02\x02\xAA\u074D\x03\x02\x02\x02\xAC\u0757\x03\x02\x02\x02\xAE" +
        "\u0763\x03\x02\x02\x02\xB0\u0765\x03\x02\x02\x02\xB2\u0769\x03\x02\x02" +
        "\x02\xB4\u076B\x03\x02\x02\x02\xB6\u0772\x03\x02\x02\x02\xB8\u07A6\x03" +
        "\x02\x02\x02\xBA\u07CD\x03\x02\x02\x02\xBC\u07CF\x03\x02\x02\x02\xBE\u07E8" +
        "\x03\x02\x02\x02\xC0\u07F5\x03\x02\x02\x02\xC2\u07F9\x03\x02\x02\x02\xC4" +
        "\u0811\x03\x02\x02\x02\xC6\u0813\x03\x02\x02\x02\xC8\u083D\x03\x02\x02" +
        "\x02\xCA\u083F\x03\x02\x02\x02\xCC\u08A1\x03\x02\x02\x02\xCE\u08A6\x03" +
        "\x02\x02\x02\xD0\u08A8\x03\x02\x02\x02\xD2\u08B1\x03\x02\x02\x02\xD4\u08BA" +
        "\x03\x02\x02\x02\xD6\u08D7\x03\x02\x02\x02\xD8\u08F1\x03\x02\x02\x02\xDA" +
        "\u08FD\x03\x02\x02\x02\xDC\u08FF\x03\x02\x02\x02\xDE\u091D\x03\x02\x02" +
        "\x02\xE0\u0930\x03\x02\x02\x02\xE2\u095B\x03\x02\x02\x02\xE4\u096A\x03" +
        "\x02\x02\x02\xE6\u097D\x03\x02\x02\x02\xE8\u097F\x03\x02\x02\x02\xEA\u0981" +
        "\x03\x02\x02\x02\xEC\u0983\x03\x02\x02\x02\xEE\u0985\x03\x02\x02\x02\xF0" +
        "\u0987\x03\x02\x02\x02\xF2\u0989\x03\x02\x02\x02\xF4\u098B\x03\x02\x02" +
        "\x02\xF6\u0994\x03\x02\x02\x02\xF8\u09A5\x03\x02\x02\x02\xFA\u09AA\x03" +
        "\x02\x02\x02\xFC\u09AE\x03\x02\x02\x02\xFE\u09BB\x03\x02\x02\x02\u0100" +
        "\u09C3\x03\x02\x02\x02\u0102\u09C5\x03\x02\x02\x02\u0104\u09C7\x03\x02" +
        "\x02\x02\u0106\u09C9\x03\x02\x02\x02\u0108\u09CB\x03\x02\x02\x02\u010A" +
        "\u09CD\x03\x02\x02\x02\u010C\u09CF\x03\x02\x02\x02\u010E\u09D1\x03\x02" +
        "\x02\x02\u0110\u09D3\x03\x02\x02\x02\u0112\u09D5\x03\x02\x02\x02\u0114" +
        "\u09DE\x03\x02\x02\x02\u0116\u0A09\x03\x02\x02\x02\u0118\u0A1E\x03\x02" +
        "\x02\x02\u011A\u0A20\x03\x02\x02\x02\u011C\u0A22\x03\x02\x02\x02\u011E" +
        "\u0A29\x03\x02\x02\x02\u0120\u0A37\x03\x02\x02\x02\u0122\u0A4B\x03\x02" +
        "\x02\x02\u0124\u0A4D\x03\x02\x02\x02\u0126\u0128\x07\x07\x02\x02\u0127" +
        "\u0126\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129\u0127\x03\x02" +
        "\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012C\x03\x02\x02\x02\u012B" +
        "\u0129\x03\x02\x02\x02\u012C\u0130\x05\x06\x04\x02\u012D\u012F\x05\u0124" +
        "\x93\x02\u012E\u012D\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130" +
        "\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0141\x03\x02" +
        "\x02\x02\u0132\u0130\x03\x02\x02\x02\u0133\u013E\x05\x14\v\x02\u0134\u0136" +
        "\x05\u0124\x93\x02\u0135\u0134\x03\x02\x02\x02\u0136\u0137\x03\x02\x02" +
        "\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u013A" +
        "\x03\x02\x02\x02\u0139\u013B\x05\x14\v\x02\u013A\u0139\x03\x02\x02\x02" +
        "\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C\u0135\x03" +
        "\x02\x02\x02\u013D\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E" +
        "\u013F\x03\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02" +
        "\x02\x02\u0141\u0133\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142" +
        "\u0143\x03\x02\x02\x02\u0143\u0144\x07\x02\x02\x03\u0144\x03\x03\x02\x02" +
        "\x02\u0145\u0147\x07\x07\x02\x02\u0146\u0145\x03\x02\x02\x02\u0147\u014A" +
        "\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02" +
        "\u0149\u014B\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014B\u014F\x05" +
        "\x06\x04\x02\u014C\u014E\x05\u0124\x93\x02\u014D\u014C\x03\x02\x02\x02" +
        "\u014E\u0151\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u014F\u0150\x03" +
        "\x02\x02\x02\u0150\u0160\x03\x02\x02\x02\u0151\u014F\x03\x02\x02\x02\u0152" +
        "\u015D\x05v<\x02\u0153\u0155\x05\u0124\x93\x02\u0154\u0153\x03\x02\x02" +
        "\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0157" +
        "\x03\x02\x02\x02\u0157\u0159\x03\x02\x02\x02\u0158\u015A\x05v<\x02\u0159" +
        "\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015C\x03\x02" +
        "\x02\x02\u015B\u0154\x03\x02\x02\x02\u015C\u015F\x03\x02\x02\x02\u015D" +
        "\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0161\x03\x02" +
        "\x02\x02\u015F\u015D\x03\x02\x02\x02\u0160\u0152\x03\x02\x02\x02\u0160" +
        "\u0161\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0163\x07\x02" +
        "\x02\x03\u0163\x05\x03\x02\x02\x02\u0164\u0166\x05\b\x05\x02\u0165\u0164" +
        "\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02" +
        "\u0167\u0168\x05\f\x07\x02\u0168\u0169\x05\x0E\b\x02\u0169\x07\x03\x02" +
        "\x02\x02\u016A\u016C\x05\n\x06\x02\u016B\u016A\x03\x02\x02\x02\u016C\u016D" +
        "\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02" +
        "\u016E\t\x03\x02\x02\x02\u016F\u0170\x07:\x02\x02\u0170\u017A\x07\x1B" +
        "\x02\x02\u0171\u0173\x07\r\x02\x02\u0172\u0174\x05\u011C\x8F\x02\u0173" +
        "\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0173\x03\x02" +
        "\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177" +
        "\u0178\x07\x0E\x02\x02\u0178\u017B\x03\x02\x02\x02\u0179\u017B\x05\u011C" +
        "\x8F\x02\u017A\u0171\x03\x02\x02\x02\u017A\u0179\x03\x02\x02\x02\u017B" +
        "\u017D\x03\x02\x02\x02\u017C\u017E\x05\u0122\x92\x02\u017D\u017C\x03\x02" +
        "\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u0180\x03\x02\x02\x02\u017F" +
        "\u016F\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u017F\x03\x02" +
        "\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\v\x03\x02\x02\x02\u0183\u0185" +
        "\x05\xFC\x7F\x02\u0184\u0183\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02" +
        "\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x07;\x02\x02\u0187\u0189\x05" +
        "\u011E\x90\x02\u0188\u018A\x05\u0122\x92\x02\u0189\u0188\x03\x02\x02\x02" +
        "\u0189\u018A\x03\x02\x02\x02\u018A\u018C\x03\x02\x02\x02\u018B\u0184\x03" +
        "\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\r\x03\x02\x02\x02\u018D" +
        "\u018F\x05\x10\t\x02\u018E\u018D\x03\x02\x02\x02\u018F\u0192\x03\x02\x02" +
        "\x02\u0190\u018E\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\x0F" +
        "\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0193\u0194\x07<\x02\x02" +
        "\u0194\u0198\x05\u011E\x90\x02\u0195\u0196\x07\t\x02\x02\u0196\u0199\x07" +
        "\x11\x02\x02\u0197\u0199\x05\x12\n\x02\u0198\u0195\x03\x02\x02\x02\u0198" +
        "\u0197\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019B\x03\x02" +
        "\x02\x02\u019A\u019C\x05\u0122\x92\x02\u019B\u019A\x03\x02\x02\x02\u019B" +
        "\u019C\x03\x02\x02\x02\u019C\x11\x03\x02\x02\x02\u019D\u019E\x07Y\x02" +
        "\x02\u019E\u019F\x05\u0120\x91\x02\u019F\x13\x03\x02\x02\x02\u01A0\u01A6" +
        "\x05\x16\f\x02\u01A1\u01A6\x05@!\x02\u01A2\u01A6\x056\x1C\x02\u01A3\u01A6" +
        "\x05D#\x02\u01A4\u01A6\x05N(\x02\u01A5\u01A0\x03\x02\x02\x02\u01A5\u01A1" +
        "\x03\x02\x02\x02\u01A5\u01A2\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02" +
        "\u01A5\u01A4\x03\x02\x02\x02\u01A6\x15\x03\x02\x02\x02\u01A7\u01A9\x05" +
        "\xFC\x7F\x02\u01A8\u01A7\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9" +
        "\u01AA\x03\x02\x02\x02\u01AA\u01AE\t\x02\x02\x02\u01AB\u01AD\x07\x07\x02" +
        "\x02\u01AC\u01AB\x03\x02\x02\x02\u01AD\u01B0\x03\x02\x02\x02\u01AE\u01AC" +
        "\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B1\x03\x02\x02\x02" +
        "\u01B0\u01AE\x03\x02\x02\x02\u01B1\u01B9\x05\u0120\x91\x02\u01B2\u01B4" +
        "\x07\x07\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B4\u01B7\x03\x02\x02\x02" +
        "\u01B5\u01B3\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B8\x03" +
        "\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B8\u01BA\x05P)\x02\u01B9\u01B5" +
        "\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01C2\x03\x02\x02\x02" +
        "\u01BB\u01BD\x07\x07\x02\x02\u01BC\u01BB\x03\x02\x02\x02\u01BD\u01C0\x03" +
        "\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF" +
        "\u01C1\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1\u01C3\x05\x18" +
        "\r\x02\u01C2\u01BE\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01D2" +
        "\x03\x02\x02\x02\u01C4\u01C6\x07\x07\x02\x02\u01C5\u01C4\x03\x02\x02\x02" +
        "\u01C6\u01C9\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C8\x03" +
        "\x02\x02\x02\u01C8\u01CA\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01CA" +
        "\u01CE\x07\x1B\x02\x02\u01CB\u01CD\x07\x07\x02\x02\u01CC\u01CB\x03\x02" +
        "\x02\x02\u01CD\u01D0\x03\x02\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CE" +
        "\u01CF\x03\x02\x02\x02\u01CF\u01D1\x03\x02\x02\x02\u01D0\u01CE\x03\x02" +
        "\x02\x02\u01D1\u01D3\x05\x1E\x10\x02\u01D2\u01C7\x03\x02\x02\x02\u01D2" +
        "\u01D3\x03\x02\x02\x02\u01D3\u01DB\x03\x02\x02\x02\u01D4\u01D6\x07\x07" +
        "\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D6\u01D9\x03\x02\x02\x02\u01D7" +
        "\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01DA\x03\x02" +
        "\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01DA\u01DC\x05h5\x02\u01DB\u01D7" +
        "\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01EB\x03\x02\x02\x02" +
        "\u01DD\u01DF\x07\x07\x02\x02\u01DE\u01DD\x03\x02\x02\x02\u01DF\u01E2\x03" +
        "\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1" +
        "\u01E3\x03\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E3\u01EC\x05&\x14" +
        "\x02\u01E4\u01E6\x07\x07\x02\x02\u01E5\u01E4\x03\x02\x02\x02\u01E6\u01E9" +
        "\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02" +
        "\u01E8\u01EA\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA\u01EC\x05" +
        "0\x19\x02\u01EB\u01E0\x03\x02\x02\x02\u01EB\u01E7\x03\x02\x02\x02\u01EB" +
        "\u01EC\x03\x02\x02\x02\u01EC\x17\x03\x02\x02\x02\u01ED\u01EF\x05\xFC\x7F" +
        "\x02\u01EE\u01ED\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F7" +
        "\x03\x02\x02\x02\u01F0\u01F4\x07D\x02\x02\u01F1\u01F3\x07\x07\x02\x02" +
        "\u01F2\u01F1\x03\x02\x02\x02\u01F3\u01F6\x03\x02\x02\x02\u01F4\u01F2\x03" +
        "\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F8\x03\x02\x02\x02\u01F6" +
        "\u01F4\x03\x02\x02\x02\u01F7\u01F0\x03\x02\x02\x02\u01F7\u01F8\x03\x02" +
        "\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FA\x05\x1A\x0E\x02\u01FA" +
        "\x19\x03\x02\x02\x02\u01FB\u0204\x07\v\x02\x02\u01FC\u0201\x05\x1C\x0F" +
        "\x02\u01FD\u01FE\x07\n\x02\x02\u01FE\u0200\x05\x1C\x0F\x02\u01FF\u01FD" +
        "\x03\x02\x02\x02\u0200\u0203\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02" +
        "\u0201\u0202\x03\x02\x02\x02\u0202\u0205\x03\x02\x02\x02\u0203\u0201\x03" +
        "\x02\x02\x02\u0204\u01FC\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205" +
        "\u0206\x03\x02\x02\x02\u0206\u0207\x07\f\x02\x02\u0207\x1B\x03\x02\x02" +
        "\x02\u0208\u020A\x05\xFC\x7F\x02\u0209\u0208\x03\x02\x02\x02\u0209\u020A" +
        "\x03\x02\x02\x02\u020A\u020C\x03\x02\x02\x02\u020B\u020D\t\x03\x02\x02" +
        "\u020C\u020B\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u020E\x03" +
        "\x02\x02\x02\u020E\u020F\x05\u0120\x91\x02\u020F\u0210\x07\x1B\x02\x02" +
        "\u0210\u0213\x05T+\x02\u0211\u0212\x07\x1D\x02\x02\u0212\u0214\x05v<\x02" +
        "\u0213\u0211\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\x1D\x03" +
        "\x02\x02\x02\u0215\u0217\x05\u0114\x8B\x02\u0216\u0215\x03\x02\x02\x02" +
        "\u0217\u021A\x03\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0219\x03" +
        "\x02\x02\x02\u0219\u021B\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021B" +
        "\u022C\x05 \x11\x02\u021C\u021E\x07\x07\x02\x02\u021D\u021C\x03\x02\x02" +
        "\x02\u021E\u0221\x03\x02\x02\x02\u021F\u021D\x03\x02\x02\x02\u021F\u0220" +
        "\x03\x02\x02\x02\u0220\u0222\x03\x02\x02\x02\u0221\u021F\x03\x02\x02\x02" +
        "\u0222\u0226\x07\n\x02\x02\u0223\u0225\x07\x07\x02\x02\u0224\u0223\x03" +
        "\x02\x02\x02\u0225\u0228\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0226" +
        "\u0227\x03\x02\x02\x02\u0227\u0229\x03\x02\x02\x02\u0228\u0226\x03\x02" +
        "\x02\x02\u0229\u022B\x05 \x11\x02\u022A\u021F\x03\x02\x02\x02\u022B\u022E" +
        "\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02" +
        "\u022D\x1F\x03\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022F\u0233\x05" +
        "\"\x12\x02\u0230\u0233\x05b2\x02\u0231\u0233\x05$\x13\x02\u0232\u022F" +
        "\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0231\x03\x02\x02\x02" +
        "\u0233!\x03\x02\x02\x02\u0234\u0235\x05b2\x02\u0235\u0236\x05\x96L\x02" +
        "\u0236#\x03\x02\x02\x02\u0237\u023B\x05b2\x02\u0238\u023A\x07\x07\x02" +
        "\x02\u0239\u0238\x03\x02\x02\x02\u023A\u023D\x03\x02\x02\x02\u023B\u0239" +
        "\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023E\x03\x02\x02\x02" +
        "\u023D\u023B\x03\x02\x02\x02\u023E\u0242\x07E\x02\x02\u023F\u0241\x07" +
        "\x07\x02\x02\u0240\u023F\x03\x02\x02\x02\u0241\u0244\x03\x02\x02\x02\u0242" +
        "\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0245\x03\x02" +
        "\x02\x02\u0244\u0242\x03\x02\x02\x02\u0245\u0246\x05v<\x02\u0246%\x03" +
        "\x02\x02\x02\u0247\u024B\x07\x0F\x02\x02\u0248\u024A\x07\x07\x02\x02\u0249" +
        "\u0248\x03\x02\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B\u0249\x03\x02" +
        "\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u0251\x03\x02\x02\x02\u024D" +
        "\u024B\x03\x02\x02\x02\u024E\u0250\x05(\x15\x02\u024F\u024E\x03\x02\x02" +
        "\x02\u0250\u0253\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0251\u0252" +
        "\x03\x02\x02\x02\u0252\u0257\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02" +
        "\u0254\u0256\x07\x07\x02\x02\u0255\u0254\x03\x02\x02\x02\u0256\u0259\x03" +
        "\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258" +
        "\u025A\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u025A\u025B\x07\x10" +
        "\x02\x02\u025B\'\x03\x02\x02\x02\u025C\u0265\x05\x16\f\x02\u025D\u0265" +
        "\x056\x1C\x02\u025E\u0265\x05@!\x02\u025F\u0265\x05B\"\x02\u0260\u0265" +
        "\x05D#\x02\u0261\u0265\x05*\x16\x02\u0262\u0265\x05,\x17\x02\u0263\u0265" +
        "\x05N(\x02\u0264\u025C\x03\x02\x02\x02\u0264\u025D\x03\x02\x02\x02\u0264" +
        "\u025E\x03\x02\x02\x02\u0264\u025F\x03\x02\x02\x02\u0264\u0260\x03\x02" +
        "\x02\x02\u0264\u0261\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0264" +
        "\u0263\x03\x02\x02\x02\u0265\u0269\x03\x02\x02\x02\u0266\u0268\x05\u0124" +
        "\x93\x02\u0267\u0266\x03\x02\x02\x02\u0268\u026B\x03\x02\x02\x02\u0269" +
        "\u0267\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A)\x03\x02\x02" +
        "\x02\u026B\u0269\x03\x02\x02\x02\u026C\u0270\x07G\x02\x02\u026D\u026F" +
        "\x07\x07\x02\x02\u026E\u026D\x03\x02\x02\x02\u026F\u0272\x03\x02\x02\x02" +
        "\u0270\u026E\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271\u0273\x03" +
        "\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0273\u0274\x05l7\x02\u0274+" +
        "\x03\x02\x02\x02\u0275\u0277\x05\xFC\x7F\x02\u0276\u0275\x03\x02\x02\x02" +
        "\u0276\u0277\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u027C\x07" +
        "D\x02\x02\u0279\u027B\x07\x07\x02\x02\u027A\u0279\x03\x02\x02\x02\u027B" +
        "\u027E\x03\x02\x02\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027D\x03\x02" +
        "\x02\x02\u027D\u027F\x03\x02\x02\x02\u027E\u027C\x03\x02\x02\x02\u027F" +
        "\u028E\x058\x1D\x02\u0280\u0282\x07\x07\x02\x02\u0281\u0280\x03\x02\x02" +
        "\x02\u0282\u0285\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0283\u0284" +
        "\x03\x02\x02\x02\u0284\u0286\x03\x02\x02\x02\u0285\u0283\x03\x02\x02\x02" +
        "\u0286\u028A\x07\x1B\x02\x02\u0287\u0289\x07\x07\x02\x02\u0288\u0287\x03" +
        "\x02\x02\x02\u0289\u028C\x03\x02\x02\x02\u028A\u0288\x03\x02\x02\x02\u028A" +
        "\u028B\x03\x02\x02\x02\u028B\u028D\x03\x02\x02\x02\u028C\u028A\x03\x02" +
        "\x02\x02\u028D\u028F\x05.\x18\x02\u028E\u0283\x03\x02\x02\x02\u028E\u028F" +
        "\x03\x02\x02\x02\u028F\u0293\x03\x02\x02\x02\u0290\u0292\x07\x07\x02\x02" +
        "\u0291\u0290\x03\x02\x02\x02\u0292\u0295\x03\x02\x02\x02\u0293\u0291\x03" +
        "\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0296\x03\x02\x02\x02\u0295" +
        "\u0293\x03\x02\x02\x02\u0296\u0297\x05l7\x02\u0297-\x03\x02\x02\x02\u0298" +
        "\u029C\x07H\x02\x02\u0299\u029B\x07\x07\x02\x02\u029A\u0299\x03\x02\x02" +
        "\x02\u029B\u029E\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02\u029C\u029D" +
        "\x03\x02\x02\x02\u029D\u029F\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02" +
        "\u029F\u02A9\x05\x9CO\x02\u02A0\u02A4\x07I\x02\x02\u02A1\u02A3\x07\x07" +
        "\x02\x02\u02A2\u02A1\x03\x02\x02\x02\u02A3\u02A6\x03\x02";
    KotlinParser._serializedATNSegment2 = "\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5" +
        "\u02A7\x03\x02\x02\x02\u02A6\u02A4\x03\x02\x02\x02\u02A7\u02A9\x05\x9C" +
        "O\x02\u02A8\u0298\x03\x02\x02\x02\u02A8\u02A0\x03\x02\x02\x02\u02A9/\x03" +
        "\x02\x02\x02\u02AA\u02AE\x07\x0F\x02\x02\u02AB\u02AD\x07\x07\x02\x02\u02AC" +
        "\u02AB\x03\x02\x02\x02\u02AD\u02B0\x03\x02\x02\x02\u02AE\u02AC\x03\x02" +
        "\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B2\x03\x02\x02\x02\u02B0" +
        "\u02AE\x03\x02\x02\x02\u02B1\u02B3\x052\x1A\x02\u02B2\u02B1\x03\x02\x02" +
        "\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02C7\x03\x02\x02\x02\u02B4\u02B6" +
        "\x07\x07\x02\x02\u02B5\u02B4\x03\x02\x02\x02\u02B6\u02B9\x03\x02\x02\x02" +
        "\u02B7\u02B5\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02BA\x03" +
        "\x02\x02\x02\u02B9\u02B7\x03\x02\x02\x02\u02BA\u02BE\x07\x1C\x02\x02\u02BB" +
        "\u02BD\x07\x07\x02\x02\u02BC\u02BB\x03\x02\x02\x02\u02BD\u02C0\x03\x02" +
        "\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF" +
        "\u02C4\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C1\u02C3\x05(\x15" +
        "\x02\u02C2\u02C1\x03\x02\x02\x02\u02C3\u02C6\x03\x02\x02\x02\u02C4\u02C2" +
        "\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02C8\x03\x02\x02\x02" +
        "\u02C6\u02C4\x03\x02\x02\x02\u02C7\u02B7\x03\x02\x02\x02\u02C7\u02C8\x03" +
        "\x02\x02\x02\u02C8\u02CC\x03\x02\x02\x02\u02C9\u02CB\x07\x07\x02\x02\u02CA" +
        "\u02C9\x03\x02\x02\x02\u02CB\u02CE\x03\x02\x02\x02\u02CC\u02CA\x03\x02" +
        "\x02\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD\u02CF\x03\x02\x02\x02\u02CE" +
        "\u02CC\x03\x02\x02\x02\u02CF\u02D0\x07\x10\x02\x02\u02D01\x03\x02\x02" +
        "\x02\u02D1\u02D5\x054\x1B\x02\u02D2\u02D4\x07\x07\x02\x02\u02D3\u02D2" +
        "\x03\x02\x02\x02\u02D4\u02D7\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02" +
        "\u02D5\u02D6\x03\x02\x02\x02\u02D6\u02D9\x03\x02\x02\x02\u02D7\u02D5\x03" +
        "\x02\x02\x02\u02D8\u02D1\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA" +
        "\u02D8\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DD\x03\x02" +
        "\x02\x02\u02DC\u02DE\x07\x1C\x02\x02\u02DD\u02DC\x03\x02\x02\x02\u02DD" +
        "\u02DE\x03\x02\x02\x02\u02DE3\x03\x02\x02\x02\u02DF\u02E7\x05\u0120\x91" +
        "\x02\u02E0\u02E2\x07\x07\x02\x02\u02E1\u02E0\x03\x02\x02\x02\u02E2\u02E5" +
        "\x03\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02" +
        "\u02E4\u02E6\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02\x02\u02E6\u02E8\x05" +
        "\x9CO\x02\u02E7\u02E3\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8" +
        "\u02F0\x03\x02\x02\x02\u02E9\u02EB\x07\x07\x02\x02\u02EA\u02E9\x03\x02" +
        "\x02\x02\u02EB\u02EE\x03\x02\x02\x02\u02EC\u02EA\x03\x02\x02\x02\u02EC" +
        "\u02ED\x03\x02\x02\x02\u02ED\u02EF\x03\x02\x02\x02\u02EE\u02EC\x03\x02" +
        "\x02\x02\u02EF\u02F1\x05&\x14\x02\u02F0\u02EC\x03\x02\x02\x02\u02F0\u02F1" +
        "\x03\x02\x02\x02\u02F1\u02F9\x03\x02\x02\x02\u02F2\u02F4\x07\x07\x02\x02" +
        "\u02F3\u02F2\x03\x02\x02\x02\u02F4\u02F7\x03\x02\x02\x02\u02F5\u02F3\x03" +
        "\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02F8\x03\x02\x02\x02\u02F7" +
        "\u02F5\x03\x02\x02\x02\u02F8\u02FA\x07\n\x02\x02\u02F9\u02F5\x03\x02\x02" +
        "\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA5\x03\x02\x02\x02\u02FB\u02FD\x05" +
        "\xFC\x7F\x02\u02FC\u02FB\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD" +
        "\u02FE\x03\x02\x02\x02\u02FE\u030E\x07?\x02\x02\u02FF\u0301\x07\x07\x02" +
        "\x02\u0300\u02FF\x03\x02\x02\x02\u0301\u0304\x03\x02\x02\x02\u0302\u0300" +
        "\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0305\x03\x02\x02\x02" +
        "\u0304\u0302\x03\x02\x02\x02\u0305\u0309\x05T+\x02\u0306\u0308\x07\x07" +
        "\x02\x02\u0307\u0306\x03\x02\x02\x02\u0308\u030B\x03\x02\x02\x02\u0309" +
        "\u0307\x03\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A\u030C\x03\x02" +
        "\x02\x02\u030B\u0309\x03\x02\x02\x02\u030C\u030D\x07\t\x02\x02\u030D\u030F" +
        "\x03\x02\x02\x02\u030E\u0302\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02" +
        "\u030F\u0317\x03\x02\x02\x02\u0310\u0312\x07\x07\x02\x02\u0311\u0310\x03" +
        "\x02\x02\x02\u0312\u0315\x03\x02\x02\x02\u0313\u0311\x03\x02\x02\x02\u0313" +
        "\u0314\x03\x02\x02\x02\u0314\u0316\x03\x02\x02\x02\u0315\u0313\x03\x02" +
        "\x02\x02\u0316\u0318\x05P)\x02\u0317\u0313\x03\x02\x02\x02\u0317\u0318" +
        "\x03\x02\x02\x02\u0318\u0320\x03\x02\x02\x02\u0319\u031B\x07\x07\x02\x02" +
        "\u031A\u0319\x03\x02\x02\x02\u031B\u031E\x03\x02\x02\x02\u031C\u031A\x03" +
        "\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D\u031F\x03\x02\x02\x02\u031E" +
        "\u031C\x03\x02\x02\x02\u031F\u0321\x05\u011E\x90\x02\u0320\u031C\x03\x02" +
        "\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0325\x03\x02\x02\x02\u0322" +
        "\u0324\x07\x07\x02\x02\u0323\u0322\x03\x02\x02\x02\u0324\u0327\x03\x02" +
        "\x02\x02\u0325\u0323\x03\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326" +
        "\u0328\x03\x02\x02\x02\u0327\u0325\x03\x02\x02\x02\u0328\u0337\x058\x1D" +
        "\x02\u0329\u032B\x07\x07\x02\x02\u032A\u0329\x03\x02\x02\x02\u032B\u032E" +
        "\x03\x02\x02\x02\u032C\u032A\x03\x02\x02\x02\u032C\u032D\x03\x02\x02\x02" +
        "\u032D\u032F\x03\x02\x02\x02\u032E\u032C\x03\x02\x02\x02\u032F\u0333\x07" +
        "\x1B\x02\x02\u0330\u0332\x07\x07\x02\x02\u0331\u0330\x03\x02\x02\x02\u0332" +
        "\u0335\x03\x02\x02\x02\u0333\u0331\x03\x02\x02\x02\u0333\u0334\x03\x02" +
        "\x02\x02\u0334\u0336\x03\x02\x02\x02\u0335\u0333\x03\x02\x02\x02\u0336" +
        "\u0338\x05T+\x02\u0337\u032C\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02" +
        "\u0338\u0340\x03\x02\x02\x02\u0339\u033B\x07\x07\x02\x02\u033A\u0339\x03" +
        "\x02\x02\x02\u033B\u033E\x03\x02\x02\x02\u033C\u033A\x03\x02\x02\x02\u033C" +
        "\u033D\x03\x02\x02\x02\u033D\u033F\x03\x02\x02\x02\u033E\u033C\x03\x02" +
        "\x02\x02\u033F\u0341\x05h5\x02\u0340\u033C\x03\x02\x02\x02\u0340\u0341" +
        "\x03\x02\x02\x02\u0341\u0349\x03\x02\x02\x02\u0342\u0344\x07\x07\x02\x02" +
        "\u0343\u0342\x03\x02\x02\x02\u0344\u0347\x03\x02\x02\x02\u0345\u0343\x03" +
        "\x02\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0348\x03\x02\x02\x02\u0347" +
        "\u0345\x03\x02\x02\x02\u0348\u034A\x05> \x02\u0349\u0345\x03\x02\x02\x02" +
        "\u0349\u034A\x03\x02\x02\x02\u034A7\x03\x02\x02\x02\u034B\u0354\x07\v" +
        "\x02\x02\u034C\u0351\x05:\x1E\x02\u034D\u034E\x07\n\x02\x02\u034E\u0350" +
        "\x05:\x1E\x02\u034F\u034D\x03\x02\x02\x02\u0350\u0353\x03\x02\x02\x02" +
        "\u0351\u034F\x03\x02\x02\x02\u0351\u0352\x03\x02\x02\x02\u0352\u0355\x03" +
        "\x02\x02\x02\u0353\u0351\x03\x02\x02\x02\u0354\u034C\x03\x02\x02\x02\u0354" +
        "\u0355\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356\u0357\x07\f\x02" +
        "\x02\u03579\x03\x02\x02\x02\u0358\u035A\x05\xFC\x7F\x02\u0359\u0358\x03" +
        "\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A\u035B\x03\x02\x02\x02\u035B" +
        "\u035E\x05<\x1F\x02\u035C\u035D\x07\x1D\x02\x02\u035D\u035F\x05v<\x02" +
        "\u035E\u035C\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F;\x03\x02" +
        "\x02\x02\u0360\u0361\x05\u0120\x91\x02\u0361\u0362\x07\x1B\x02\x02\u0362" +
        "\u0363\x05T+\x02\u0363=\x03\x02\x02\x02\u0364\u036E\x05l7\x02\u0365\u0369" +
        "\x07\x1D\x02\x02\u0366\u0368\x07\x07\x02\x02\u0367\u0366\x03\x02\x02\x02" +
        "\u0368\u036B\x03\x02\x02\x02\u0369\u0367\x03\x02\x02\x02\u0369\u036A\x03" +
        "\x02\x02\x02\u036A\u036C\x03\x02\x02\x02\u036B\u0369\x03\x02\x02\x02\u036C" +
        "\u036E\x05v<\x02\u036D\u0364\x03\x02\x02\x02\u036D\u0365\x03\x02\x02\x02" +
        "\u036E?\x03\x02\x02\x02\u036F\u0371\x05\xFC\x7F\x02\u0370\u036F\x03\x02" +
        "\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\u0372\x03\x02\x02\x02\u0372" +
        "\u0376\x07@\x02\x02\u0373\u0375\x07\x07\x02\x02\u0374\u0373\x03\x02\x02" +
        "\x02\u0375\u0378\x03\x02\x02\x02\u0376\u0374\x03\x02\x02\x02\u0376\u0377" +
        "\x03\x02\x02\x02\u0377\u0379\x03\x02\x02\x02\u0378\u0376\x03\x02\x02\x02" +
        "\u0379\u0381\x05\u0120\x91\x02\u037A\u037C\x07\x07\x02\x02\u037B\u037A" +
        "\x03\x02\x02\x02\u037C\u037F\x03\x02\x02\x02\u037D\u037B\x03\x02\x02\x02" +
        "\u037D\u037E\x03\x02\x02\x02\u037E\u0380\x03\x02\x02\x02\u037F\u037D\x03" +
        "\x02\x02\x02\u0380\u0382\x05\x18\r\x02\u0381\u037D\x03\x02\x02\x02\u0381" +
        "\u0382\x03\x02\x02\x02\u0382\u0391\x03\x02\x02\x02\u0383\u0385\x07\x07" +
        "\x02\x02\u0384\u0383\x03\x02\x02\x02\u0385\u0388\x03\x02\x02\x02\u0386" +
        "\u0384\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\u0389\x03\x02" +
        "\x02\x02\u0388\u0386\x03\x02\x02\x02\u0389\u038D\x07\x1B\x02\x02\u038A" +
        "\u038C\x07\x07\x02\x02\u038B\u038A\x03\x02\x02\x02\u038C\u038F\x03\x02" +
        "\x02\x02\u038D\u038B\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02\u038E" +
        "\u0390\x03\x02\x02\x02\u038F\u038D\x03\x02\x02\x02\u0390\u0392\x05\x1E" +
        "\x10\x02\u0391\u0386\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02\u0392" +
        "\u039A\x03\x02\x02\x02\u0393\u0395\x07\x07\x02\x02\u0394\u0393\x03\x02" +
        "\x02\x02\u0395\u0398\x03\x02\x02\x02\u0396\u0394\x03\x02\x02\x02\u0396" +
        "\u0397\x03\x02\x02\x02\u0397\u0399\x03\x02\x02\x02\u0398\u0396\x03\x02" +
        "\x02\x02\u0399\u039B\x05&\x14\x02\u039A\u0396\x03\x02\x02\x02\u039A\u039B" +
        "\x03\x02\x02\x02\u039BA\x03\x02\x02\x02\u039C\u039E\x05\xFC\x7F\x02\u039D" +
        "\u039C\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\u039F\x03\x02" +
        "\x02\x02\u039F\u03A3\x07F\x02\x02\u03A0\u03A2\x07\x07\x02\x02\u03A1\u03A0" +
        "\x03\x02\x02\x02\u03A2\u03A5\x03\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02" +
        "\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A7\x03\x02\x02\x02\u03A5\u03A3\x03" +
        "\x02\x02\x02\u03A6\u03A8\x05\xFC\x7F\x02\u03A7\u03A6\x03\x02\x02\x02\u03A7" +
        "\u03A8\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03B1\x07@\x02" +
        "\x02\u03AA\u03AC\x07\x07\x02\x02\u03AB\u03AA\x03\x02\x02\x02\u03AC\u03AF" +
        "\x03\x02\x02\x02\u03AD\u03AB\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02" +
        "\u03AE\u03B0\x03\x02\x02\x02\u03AF\u03AD\x03\x02\x02\x02\u03B0\u03B2\x05" +
        "\u0120\x91\x02\u03B1\u03AD\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02" +
        "\u03B2\u03C1\x03\x02\x02\x02\u03B3\u03B5\x07\x07\x02\x02\u03B4\u03B3\x03" +
        "\x02\x02\x02\u03B5\u03B8\x03\x02\x02\x02\u03B6\u03B4\x03\x02\x02\x02\u03B6" +
        "\u03B7\x03\x02\x02\x02\u03B7\u03B9\x03\x02\x02\x02\u03B8\u03B6\x03\x02" +
        "\x02\x02\u03B9\u03BD\x07\x1B\x02\x02\u03BA\u03BC\x07\x07\x02\x02\u03BB" +
        "\u03BA\x03\x02\x02\x02\u03BC\u03BF\x03\x02\x02\x02\u03BD\u03BB\x03\x02" +
        "\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03C0\x03\x02\x02\x02\u03BF" +
        "\u03BD\x03\x02\x02\x02\u03C0\u03C2\x05\x1E\x10\x02\u03C1\u03B6\x03\x02" +
        "\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\u03CA\x03\x02\x02\x02\u03C3" +
        "\u03C5\x07\x07\x02\x02\u03C4\u03C3\x03\x02\x02\x02\u03C5\u03C8\x03\x02" +
        "\x02\x02\u03C6\u03C4\x03\x02\x02\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7" +
        "\u03C9\x03\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C9\u03CB\x05&\x14" +
        "\x02\u03CA\u03C6\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CBC\x03" +
        "\x02\x02\x02\u03CC\u03CE\x05\xFC\x7F\x02\u03CD\u03CC\x03\x02\x02\x02\u03CD" +
        "\u03CE\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF\u03D7\t\x03\x02" +
        "\x02\u03D0\u03D2\x07\x07\x02\x02\u03D1\u03D0\x03\x02\x02\x02\u03D2\u03D5" +
        "\x03\x02\x02\x02\u03D3\u03D1\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02" +
        "\u03D4\u03D6\x03\x02\x02\x02\u03D5\u03D3\x03\x02\x02\x02\u03D6\u03D8\x05" +
        "P)\x02\u03D7\u03D3\x03\x02\x02\x02\u03D7\u03D8\x03\x02\x02\x02\u03D8\u03E8" +
        "\x03\x02\x02\x02\u03D9\u03DB\x07\x07\x02\x02\u03DA\u03D9\x03\x02\x02\x02" +
        "\u03DB\u03DE\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DC\u03DD\x03" +
        "\x02\x02\x02\u03DD\u03DF\x03\x02\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DF" +
        "\u03E3\x05T+\x02\u03E0\u03E2\x07\x07\x02\x02\u03E1\u03E0\x03\x02\x02\x02" +
        "\u03E2\u03E5\x03\x02\x02\x02\u03E3\u03E1\x03\x02\x02\x02\u03E3\u03E4\x03" +
        "\x02\x02\x02\u03E4\u03E6\x03\x02\x02\x02\u03E5\u03E3\x03\x02\x02\x02\u03E6" +
        "\u03E7\x07\t\x02\x02\u03E7\u03E9\x03\x02\x02\x02\u03E8\u03DC\x03\x02\x02" +
        "\x02\u03E8\u03E9\x03\x02\x02\x02\u03E9\u03ED\x03\x02\x02\x02\u03EA\u03EC" +
        "\x07\x07\x02\x02\u03EB\u03EA\x03\x02\x02\x02\u03EC\u03EF\x03\x02\x02\x02" +
        "\u03ED\u03EB\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03F2\x03" +
        "\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03F0\u03F3\x05F$\x02\u03F1\u03F3" +
        "\x05H%\x02\u03F2\u03F0\x03\x02\x02\x02\u03F2\u03F1\x03\x02\x02\x02\u03F3" +
        "\u03FB\x03\x02\x02\x02\u03F4\u03F6\x07\x07\x02\x02\u03F5\u03F4\x03\x02" +
        "\x02\x02\u03F6\u03F9\x03\x02\x02\x02\u03F7\u03F5\x03\x02\x02\x02\u03F7" +
        "\u03F8\x03\x02\x02\x02\u03F8\u03FA\x03\x02\x02\x02\u03F9\u03F7\x03\x02" +
        "\x02\x02\u03FA\u03FC\x05h5\x02\u03FB\u03F7\x03\x02\x02\x02\u03FB\u03FC" +
        "\x03\x02\x02\x02\u03FC\u040B\x03\x02\x02\x02\u03FD\u03FF\x07\x07\x02\x02" +
        "\u03FE\u03FD\x03\x02\x02\x02\u03FF\u0402\x03\x02\x02\x02\u0400\u03FE\x03" +
        "\x02\x02\x02\u0400\u0401\x03\x02\x02\x02\u0401\u0403\x03\x02\x02\x02\u0402" +
        "\u0400\x03\x02\x02\x02\u0403\u0407\t\x04\x02\x02\u0404\u0406\x07\x07\x02" +
        "\x02\u0405\u0404\x03\x02\x02\x02\u0406\u0409\x03\x02\x02\x02\u0407\u0405" +
        "\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\u040A\x03\x02\x02\x02" +
        "\u0409\u0407\x03\x02\x02\x02\u040A\u040C\x05v<\x02\u040B\u0400\x03\x02" +
        "\x02\x02\u040B\u040C\x03\x02\x02\x02\u040C\u0419\x03\x02\x02\x02\u040D" +
        "\u0411\x05J&\x02\u040E\u040F\x05\u0122\x92\x02\u040F\u0410\x05L\'\x02" +
        "\u0410\u0412\x03\x02\x02\x02\u0411\u040E\x03\x02\x02\x02\u0411\u0412\x03" +
        "\x02\x02\x02\u0412\u041A\x03\x02\x02\x02\u0413\u0417\x05L\'\x02\u0414" +
        "\u0415\x05\u0122\x92\x02\u0415\u0416\x05J&\x02\u0416\u0418\x03\x02\x02" +
        "\x02\u0417\u0414\x03\x02\x02\x02\u0417\u0418\x03\x02\x02\x02\u0418\u041A" +
        "\x03\x02\x02\x02\u0419\u040D\x03\x02\x02\x02\u0419\u0413\x03\x02\x02\x02" +
        "\u0419\u041A\x03\x02\x02\x02\u041AE\x03\x02\x02\x02\u041B\u041C\x07\v" +
        "\x02\x02\u041C\u0421\x05H%\x02\u041D\u041E\x07\n\x02\x02\u041E\u0420\x05" +
        "H%\x02\u041F\u041D\x03\x02\x02\x02\u0420\u0423\x03\x02\x02\x02\u0421\u041F" +
        "\x03\x02\x02\x02\u0421\u0422\x03\x02\x02\x02\u0422\u0424\x03\x02\x02\x02" +
        "\u0423\u0421\x03\x02\x02\x02\u0424\u0425\x07\f\x02\x02\u0425G\x03\x02" +
        "\x02\x02\u0426\u0429\x05\u0120\x91\x02\u0427\u0428\x07\x1B\x02\x02\u0428" +
        "\u042A\x05T+\x02\u0429\u0427\x03\x02\x02\x02\u0429\u042A\x03\x02\x02\x02" +
        "\u042AI\x03\x02\x02\x02\u042B\u042D\x05\xFC\x7F\x02\u042C\u042B\x03\x02" +
        "\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D\u042E\x03\x02\x02\x02\u042E" +
        "\u045D\x07c\x02\x02\u042F\u0431\x05\xFC\x7F\x02\u0430\u042F\x03\x02\x02" +
        "\x02\u0430\u0431\x03\x02\x02\x02\u0431\u0432\x03\x02\x02\x02\u0432\u0436" +
        "\x07c\x02\x02\u0433\u0435\x07\x07\x02\x02\u0434\u0433\x03\x02\x02\x02" +
        "\u0435\u0438\x03\x02\x02\x02\u0436\u0434\x03\x02\x02\x02\u0436\u0437\x03" +
        "\x02\x02\x02\u0437\u0439\x03\x02\x02\x02\u0438\u0436\x03\x02\x02\x02\u0439" +
        "\u043A\x07\v\x02\x02\u043A\u0449\x07\f\x02\x02\u043B\u043D\x07\x07\x02" +
        "\x02\u043C\u043B\x03\x02\x02\x02\u043D\u0440\x03\x02\x02\x02\u043E\u043C" +
        "\x03\x02\x02\x02\u043E\u043F\x03\x02\x02\x02\u043F\u0441\x03\x02\x02\x02" +
        "\u0440\u043E\x03\x02\x02\x02\u0441\u0445\x07\x1B\x02\x02\u0442\u0444\x07" +
        "\x07\x02\x02\u0443\u0442\x03\x02\x02\x02\u0444\u0447\x03\x02\x02\x02\u0445" +
        "\u0443\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446\u0448\x03\x02" +
        "\x02\x02\u0447\u0445\x03\x02\x02\x02\u0448\u044A\x05T+\x02\u0449\u043E" +
        "\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A\u044E\x03\x02\x02\x02" +
        "\u044B\u044D\x07\x07\x02\x02\u044C\u044B\x03\x02\x02\x02\u044D\u0450\x03" +
        "\x02\x02\x02\u044E\u044C\x03\x02\x02\x02\u044E\u044F\x03\x02\x02\x02\u044F" +
        "\u045A\x03\x02\x02\x02\u0450\u044E\x03\x02\x02\x02\u0451\u045B\x05l7\x02" +
        "\u0452\u0456\x07\x1D\x02\x02\u0453\u0455\x07\x07\x02\x02\u0454\u0453\x03" +
        "\x02\x02\x02\u0455\u0458\x03\x02\x02\x02\u0456\u0454\x03\x02\x02\x02\u0456" +
        "\u0457\x03\x02\x02\x02\u0457\u0459\x03\x02\x02\x02\u0458\u0456\x03\x02" +
        "\x02\x02\u0459\u045B\x05v<\x02\u045A\u0451\x03\x02\x02\x02\u045A\u0452" +
        "\x03\x02\x02\x02\u045B\u045D\x03\x02\x02\x02\u045C\u042C\x03\x02\x02\x02" +
        "\u045C\u0430\x03\x02\x02\x02\u045DK\x03\x02\x02\x02\u045E\u0460\x05\xFC" +
        "\x7F\x02\u045F\u045E\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460" +
        "\u0461\x03\x02\x02\x02\u0461\u0482\x07d\x02\x02\u0462\u0464\x05\xFC\x7F" +
        "\x02\u0463\u0462\x03\x02\x02\x02\u0463\u0464\x03\x02\x02\x02\u0464\u0465" +
        "\x03\x02\x02\x02\u0465\u0469\x07d\x02\x02\u0466\u0468\x07\x07\x02\x02" +
        "\u0467\u0466\x03\x02\x02\x02\u0468\u046B\x03\x02\x02\x02\u0469\u0467\x03" +
        "\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A\u046C\x03\x02\x02\x02\u046B" +
        "\u0469\x03\x02\x02\x02\u046C\u0471\x07\v\x02\x02\u046D\u0470\x05\u0114" +
        "\x8B\x02\u046E\u0470\x05\u010E\x88\x02\u046F\u046D\x03\x02\x02\x02\u046F" +
        "\u046E\x03\x02\x02\x02\u0470\u0473\x03\x02\x02\x02\u0471\u046F\x03\x02" +
        "\x02\x02\u0471\u0472\x03\x02\x02\x02\u0472\u0476\x03\x02\x02\x02\u0473" +
        "\u0471\x03\x02\x02\x02\u0474\u0477\x05\u0120\x91\x02\u0475\u0477\x05<" +
        "\x1F\x02\u0476\u0474\x03\x02\x02\x02\u0476\u0475\x03\x02\x02\x02\u0477" +
        "\u0478\x03\x02\x02\x02\u0478\u047C\x07\f\x02\x02\u0479\u047B\x07\x07\x02" +
        "\x02\u047A\u0479\x03\x02\x02\x02\u047B\u047E\x03\x02\x02\x02\u047C\u047A" +
        "\x03\x02\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D\u047F\x03\x02\x02\x02" +
        "\u047E\u047C\x03\x02\x02\x02\u047F\u0480\x05> \x02\u0480\u0482\x03\x02" +
        "\x02\x02\u0481\u045F\x03\x02\x02\x02\u0481\u0463\x03\x02\x02\x02\u0482" +
        "M\x03\x02\x02\x02\u0483\u0485\x05\xFC\x7F\x02\u0484\u0483\x03\x02\x02" +
        "\x02\u0484\u0485\x03\x02\x02\x02\u0485\u0486\x03\x02\x02\x02\u0486\u048A" +
        "\x07C\x02\x02\u0487\u0489\x07\x07\x02\x02\u0488\u0487\x03\x02\x02\x02" +
        "\u0489\u048C\x03\x02\x02\x02\u048A\u0488\x03\x02\x02\x02\u048A\u048B\x03" +
        "\x02\x02\x02\u048B\u048D\x03\x02\x02\x02\u048C\u048A\x03\x02\x02\x02\u048D" +
        "\u0495\x05\u0120\x91\x02\u048E\u0490\x07\x07\x02\x02\u048F\u048E\x03\x02" +
        "\x02\x02\u0490\u0493\x03\x02\x02\x02\u0491\u048F\x03\x02\x02\x02\u0491" +
        "\u0492\x03\x02\x02\x02\u0492\u0494\x03\x02\x02\x02\u0493\u0491\x03\x02" +
        "\x02\x02\u0494\u0496\x05P)\x02\u0495\u0491\x03\x02\x02\x02\u0495\u0496" +
        "\x03\x02\x02\x02\u0496\u049A\x03\x02\x02\x02\u0497\u0499\x07\x07\x02\x02" +
        "\u0498\u0497\x03\x02\x02\x02\u0499\u049C\x03\x02\x02\x02\u049A\u0498\x03" +
        "\x02\x02\x02\u049A\u049B\x03\x02\x02\x02\u049B\u049D\x03\x02\x02\x02\u049C" +
        "\u049A\x03\x02\x02\x02\u049D\u04A1\x07\x1D\x02\x02\u049E\u04A0\x07\x07" +
        "\x02\x02\u049F\u049E\x03\x02\x02\x02\u04A0\u04A3\x03\x02\x02\x02\u04A1" +
        "\u049F\x03\x02\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2\u04A4\x03\x02" +
        "\x02\x02\u04A3\u04A1\x03\x02\x02\x02\u04A4\u04A5\x05T+\x02\u04A5O\x03" +
        "\x02\x02\x02\u04A6\u04AA\x07-\x02\x02\u04A7\u04A9\x07\x07\x02\x02\u04A8" +
        "\u04A7\x03\x02\x02\x02\u04A9\u04AC\x03\x02\x02\x02\u04AA\u04A8\x03\x02" +
        "\x02\x02\u04AA\u04AB\x03\x02\x02\x02\u04AB\u04AD\x03\x02\x02\x02\u04AC" +
        "\u04AA\x03\x02\x02\x02\u04AD\u04BE\x05R*\x02\u04AE\u04B0\x07\x07\x02\x02" +
        "\u04AF\u04AE\x03\x02\x02\x02\u04B0\u04B3\x03\x02\x02\x02\u04B1\u04AF\x03" +
        "\x02\x02\x02\u04B1\u04B2\x03\x02\x02\x02\u04B2\u04B4\x03\x02\x02\x02\u04B3" +
        "\u04B1\x03\x02\x02\x02\u04B4\u04B8\x07\n\x02\x02\u04B5\u04B7\x07\x07\x02" +
        "\x02\u04B6\u04B5\x03\x02\x02\x02\u04B7\u04BA\x03\x02\x02\x02\u04B8\u04B6" +
        "\x03\x02\x02\x02\u04B8\u04B9\x03\x02\x02\x02\u04B9\u04BB\x03\x02\x02\x02" +
        "\u04BA\u04B8\x03\x02\x02\x02\u04BB\u04BD\x05R*\x02\u04BC\u04B1\x03\x02" +
        "\x02\x02\u04BD\u04C0\x03\x02\x02\x02\u04BE\u04BC\x03\x02\x02\x02\u04BE" +
        "\u04BF\x03\x02\x02\x02\u04BF\u04C4\x03\x02\x02\x02\u04C0\u04BE\x03\x02" +
        "\x02\x02\u04C1\u04C3\x07\x07\x02\x02\u04C2\u04C1\x03\x02\x02\x02\u04C3" +
        "\u04C6\x03\x02\x02\x02\u04C4\u04C2\x03\x02\x02\x02\u04C4\u04C5\x03\x02" +
        "\x02\x02\u04C5\u04C7\x03\x02\x02\x02\u04C6\u04C4\x03\x02\x02\x02\u04C7" +
        "\u04C8\x07.\x02\x02\u04C8Q\x03\x02\x02\x02\u04C9\u04CB\x05\xFC\x7F\x02" +
        "\u04CA\u04C9\x03\x02\x02\x02\u04CA\u04CB\x03\x02\x02\x02\u04CB\u04CF\x03" +
        "\x02\x02\x02\u04CC\u04CE\x07\x07\x02\x02\u04CD\u04CC\x03\x02\x02\x02\u04CE" +
        "\u04D1\x03\x02\x02\x02\u04CF\u04CD\x03\x02\x02\x02\u04CF\u04D0\x03\x02" +
        "\x02\x02\u04D0\u04D2\x03\x02\x02\x02\u04D1\u04CF\x03\x02\x02\x02\u04D2" +
        "\u04E1\x05\u0120\x91\x02\u04D3\u04D5\x07\x07\x02\x02\u04D4\u04D3\x03\x02" +
        "\x02\x02\u04D5\u04D8\x03\x02\x02\x02\u04D6\u04D4\x03\x02\x02\x02\u04D6" +
        "\u04D7\x03\x02\x02\x02\u04D7\u04D9\x03\x02\x02\x02\u04D8\u04D6\x03\x02" +
        "\x02\x02\u04D9\u04DD\x07\x1B\x02\x02\u04DA\u04DC\x07\x07\x02\x02\u04DB" +
        "\u04DA\x03\x02\x02\x02\u04DC\u04DF\x03\x02\x02\x02\u04DD\u04DB\x03\x02" +
        "\x02\x02\u04DD\u04DE\x03\x02\x02\x02\u04DE\u04E0\x03\x02\x02\x02\u04DF" +
        "\u04DD\x03\x02\x02\x02\u04E0\u04E2\x05T+\x02\u04E1\u04D6\x03\x02\x02\x02" +
        "\u04E1\u04E2\x03\x02\x02\x02\u04E2S\x03\x02\x02\x02\u04E3\u04E5\x05V," +
        "\x02\u04E4\u04E3\x03\x02\x02\x02\u04E4\u04E5\x03\x02\x02\x02\u04E5\u04EA" +
        "\x03\x02\x02\x02\u04E6\u04EB\x05^0\x02\u04E7\u04EB\x05X-\x02\u04E8\u04EB" +
        "\x05Z.\x02\u04E9\u04EB\x05\\/\x02\u04EA\u04E6\x03\x02\x02\x02\u04EA\u04E7" +
        "\x03\x02\x02\x02\u04EA\u04E8\x03\x02\x02\x02\u04EA\u04E9\x03\x02\x02\x02" +
        "\u04EBU\x03\x02\x02\x02\u04EC\u04F5\x05\u0114\x8B\x02\u04ED\u04F1\x07" +
        "x\x02\x02\u04EE\u04F0\x07\x07\x02\x02\u04EF\u04EE\x03\x02\x02\x02\u04F0" +
        "\u04F3\x03\x02\x02\x02\u04F1\u04EF\x03\x02\x02\x02\u04F1\u04F2\x03\x02" +
        "\x02\x02\u04F2\u04F5\x03\x02\x02\x02\u04F3\u04F1\x03\x02\x02\x02\u04F4" +
        "\u04EC\x03\x02\x02\x02\u04F4\u04ED\x03\x02\x02\x02\u04F5\u04F6\x03\x02" +
        "\x02\x02\u04F6\u04F4\x03\x02\x02\x02\u04F6\u04F7\x03\x02\x02\x02\u04F7" +
        "W\x03\x02\x02\x02\u04F8\u04F9\x07\v\x02\x02\u04F9\u04FA\x05T+\x02\u04FA" +
        "\u04FB\x07\f\x02\x02\u04FBY\x03\x02\x02\x02\u04FC\u04FF\x05\\/\x02\u04FD" +
        "\u04FF\x05X-\x02\u04FE\u04FC\x03\x02\x02\x02\u04FE\u04FD\x03\x02\x02\x02" +
        "\u04FF\u0503\x03\x02\x02\x02\u0500\u0502\x07\x07\x02\x02\u0501\u0500\x03" +
        "\x02\x02\x02\u0502\u0505\x03\x02\x02\x02\u0503\u0501\x03\x02\x02\x02\u0503" +
        "\u0504\x03\x02\x02\x02\u0504\u0507\x03\x02\x02\x02\u0505\u0503\x03\x02" +
        "\x02\x02\u0506\u0508\x07+\x02\x02\u0507\u0506\x03\x02\x02\x02\u0508\u0509" +
        "\x03\x02\x02\x02\u0509\u0507\x03\x02\x02\x02\u0509\u050A\x03\x02\x02\x02" +
        "\u050A[\x03\x02\x02\x02\u050B\u050C\x07\v\x02\x02\u050C\u050D\x05\\/\x02" +
        "\u050D\u050E\x07\f\x02\x02\u050E\u0512\x03\x02\x02\x02\u050F\u0512\x05" +
        "b2\x02\u0510\u0512\x07i\x02\x02\u0511\u050B\x03\x02\x02\x02\u0511\u050F" +
        "\x03\x02\x02\x02\u0511\u0510\x03\x02\x02\x02\u0512]\x03\x02\x02\x02\u0513" +
        "\u0517\x05`1\x02\u0514\u0516\x07\x07\x02\x02\u0515\u0514\x03\x02\x02\x02" +
        "\u0516\u0519\x03\x02\x02\x02\u0517\u0515\x03\x02\x02\x02\u0517\u0518\x03" +
        "\x02\x02\x02\u0518\u051A\x03\x02\x02\x02\u0519\u0517\x03\x02\x02\x02\u051A" +
        "\u051E\x07\t\x02\x02\u051B\u051D\x07\x07\x02\x02\u051C\u051B\x03\x02\x02" +
        "\x02\u051D\u0520\x03\x02\x02\x02\u051E\u051C\x03\x02\x02\x02\u051E\u051F" +
        "\x03\x02\x02\x02\u051F\u0522\x03\x02\x02\x02\u0520\u051E\x03\x02\x02\x02" +
        "\u0521\u0513\x03\x02\x02\x02\u0521\u0522\x03\x02\x02\x02\u0522\u0523\x03" +
        "\x02\x02\x02\u0523\u0527\x05f4\x02\u0524\u0526\x07\x07\x02\x02\u0525\u0524" +
        "\x03\x02\x02\x02\u0526\u0529\x03\x02\x02\x02\u0527\u0525\x03\x02\x02\x02" +
        "\u0527\u0528\x03\x02\x02\x02\u0528\u052A\x03\x02\x02\x02\u0529\u0527\x03" +
        "\x02\x02\x02\u052A\u052E\x07#\x02\x02\u052B\u052D\x07\x07\x02\x02\u052C" +
        "\u052B\x03\x02\x02\x02\u052D\u0530\x03\x02\x02\x02\u052E\u052C\x03\x02" +
        "\x02\x02\u052E\u052F\x03\x02\x02\x02\u052F\u0531\x03\x02\x02\x02\u0530" +
        "\u052E\x03\x02\x02\x02\u0531\u0532\x05T+\x02\u0532_\x03\x02\x02\x02\u0533" +
        "\u0537\x05X-\x02\u0534\u0537\x05Z.\x02\u0535\u0537\x05\\/\x02\u0536\u0533" +
        "\x03\x02\x02\x02\u0536\u0534\x03\x02\x02\x02\u0536\u0535\x03\x02\x02\x02" +
        "\u0537a\x03\x02\x02\x02\u0538\u0549\x05d3\x02\u0539\u053B\x07\x07\x02" +
        "\x02\u053A\u0539\x03\x02\x02\x02\u053B\u053E\x03\x02\x02\x02\u053C\u053A" +
        "\x03\x02\x02\x02\u053C\u053D\x03\x02\x02\x02\u053D\u053F\x03\x02\x02\x02" +
        "\u053E\u053C\x03\x02\x02\x02\u053F\u0543\x07\t\x02\x02\u0540\u0542\x07" +
        "\x07\x02\x02\u0541\u0540\x03\x02\x02\x02\u0542\u0545\x03\x02\x02\x02\u0543" +
        "\u0541\x03\x02\x02\x02\u0543\u0544\x03\x02\x02\x02\u0544\u0546\x03\x02" +
        "\x02\x02\u0545\u0543\x03\x02\x02\x02\u0546\u0548\x05d3\x02\u0547\u053C" +
        "\x03\x02\x02\x02\u0548\u054B\x03\x02\x02\x02\u0549\u0547\x03\x02\x02\x02" +
        "\u0549\u054A\x03\x02\x02\x02\u054Ac\x03\x02\x02\x02\u054B\u0549\x03\x02" +
        "\x02\x02\u054C\u0554\x05\u0120\x91\x02\u054D\u054F\x07\x07\x02\x02\u054E" +
        "\u054D\x03\x02\x02\x02\u054F\u0552\x03\x02\x02\x02\u0550\u054E\x03\x02" +
        "\x02\x02\u0550\u0551\x03\x02\x02\x02\u0551\u0553\x03\x02\x02\x02\u0552" +
        "\u0550\x03\x02\x02\x02\u0553\u0555\x05\x9EP\x02\u0554\u0550\x03\x02\x02" +
        "\x02\u0554\u0555\x03\x02\x02\x02\u0555e\x03\x02\x02\x02\u0556\u0559\x07" +
        "\v\x02\x02\u0557\u055A\x05<\x1F\x02\u0558\u055A\x05T+\x02\u0559\u0557" +
        "\x03\x02\x02\x02\u0559\u0558\x03\x02\x02\x02\u0559\u055A\x03\x02\x02\x02" +
        "\u055A\u0562\x03\x02\x02\x02";
    KotlinParser._serializedATNSegment3 = "\u055B\u055E\x07\n\x02\x02\u055C\u055F\x05<\x1F\x02\u055D\u055F\x05T+" +
        "\x02\u055E\u055C\x03\x02\x02\x02\u055E\u055D\x03\x02\x02\x02\u055F\u0561" +
        "\x03\x02\x02\x02\u0560\u055B\x03\x02\x02\x02\u0561\u0564\x03\x02\x02\x02" +
        "\u0562\u0560\x03\x02\x02\x02\u0562\u0563\x03\x02\x02\x02\u0563\u0565\x03" +
        "\x02\x02\x02\u0564\u0562\x03\x02\x02\x02\u0565\u0566\x07\f\x02\x02\u0566" +
        "g\x03\x02\x02\x02\u0567\u056B\x07K\x02\x02\u0568\u056A\x07\x07\x02\x02" +
        "\u0569\u0568\x03\x02\x02\x02\u056A\u056D\x03\x02\x02\x02\u056B\u0569\x03" +
        "\x02\x02\x02\u056B\u056C\x03\x02\x02\x02\u056C\u056E\x03\x02\x02\x02\u056D" +
        "\u056B\x03\x02\x02\x02\u056E\u057F\x05j6\x02\u056F\u0571\x07\x07\x02\x02" +
        "\u0570\u056F\x03\x02\x02\x02\u0571\u0574\x03\x02\x02\x02\u0572\u0570\x03" +
        "\x02\x02\x02\u0572\u0573\x03\x02\x02\x02\u0573\u0575\x03\x02\x02\x02\u0574" +
        "\u0572\x03\x02\x02\x02\u0575\u0579\x07\n\x02\x02\u0576\u0578\x07\x07\x02" +
        "\x02\u0577\u0576\x03\x02\x02\x02\u0578\u057B\x03\x02\x02\x02\u0579\u0577" +
        "\x03\x02\x02\x02\u0579\u057A\x03\x02\x02\x02\u057A\u057C\x03\x02\x02\x02" +
        "\u057B\u0579\x03\x02\x02\x02\u057C\u057E\x05j6\x02\u057D\u0572\x03\x02" +
        "\x02\x02\u057E\u0581\x03\x02\x02\x02\u057F\u057D\x03\x02\x02\x02\u057F" +
        "\u0580\x03\x02\x02\x02\u0580i\x03\x02\x02\x02\u0581\u057F\x03\x02\x02" +
        "\x02\u0582\u0584\x05\u0114\x8B\x02\u0583\u0582\x03\x02\x02\x02\u0584\u0587" +
        "\x03\x02\x02\x02\u0585\u0583\x03\x02\x02\x02\u0585\u0586\x03\x02\x02\x02" +
        "\u0586\u0588\x03\x02\x02\x02\u0587\u0585\x03\x02\x02\x02\u0588\u058C\x05" +
        "\u0120\x91\x02\u0589\u058B\x07\x07\x02\x02\u058A\u0589\x03\x02\x02\x02" +
        "\u058B\u058E\x03\x02\x02\x02\u058C\u058A\x03\x02\x02\x02\u058C\u058D\x03" +
        "\x02\x02\x02\u058D\u058F\x03\x02\x02\x02\u058E\u058C\x03\x02\x02\x02\u058F" +
        "\u0593\x07\x1B\x02\x02\u0590\u0592\x07\x07\x02\x02\u0591\u0590\x03\x02" +
        "\x02\x02\u0592\u0595\x03\x02\x02\x02\u0593\u0591\x03\x02\x02\x02\u0593" +
        "\u0594\x03\x02\x02\x02\u0594\u0596\x03\x02\x02\x02\u0595\u0593\x03\x02" +
        "\x02\x02\u0596\u0597\x05T+\x02\u0597k\x03\x02\x02\x02\u0598\u0599\x07" +
        "\x0F\x02\x02\u0599\u059A\x05n8\x02\u059A\u059B\x07\x10\x02\x02\u059Bm" +
        "\x03\x02\x02\x02\u059C\u059E\x05\u0124\x93\x02\u059D\u059C\x03\x02\x02" +
        "\x02\u059E\u05A1\x03\x02\x02\x02\u059F\u059D\x03\x02\x02\x02\u059F\u05A0" +
        "\x03\x02\x02\x02\u05A0\u05B0\x03\x02\x02\x02\u05A1\u059F\x03\x02\x02\x02" +
        "\u05A2\u05AD\x05p9\x02\u05A3\u05A5\x05\u0124\x93\x02\u05A4\u05A3\x03\x02" +
        "\x02\x02\u05A5\u05A6\x03\x02\x02\x02\u05A6\u05A4\x03\x02\x02\x02\u05A6" +
        "\u05A7\x03\x02\x02\x02\u05A7\u05A9\x03\x02\x02\x02\u05A8\u05AA\x05p9\x02" +
        "\u05A9\u05A8\x03\x02\x02\x02\u05A9\u05AA\x03\x02\x02\x02\u05AA\u05AC\x03" +
        "\x02\x02\x02\u05AB\u05A4\x03\x02\x02\x02\u05AC\u05AF\x03\x02\x02\x02\u05AD" +
        "\u05AB\x03\x02\x02\x02\u05AD\u05AE\x03\x02\x02\x02\u05AE\u05B1\x03\x02" +
        "\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05B0\u05A2\x03\x02\x02\x02\u05B0" +
        "\u05B1\x03\x02\x02\x02\u05B1o\x03\x02\x02\x02\u05B2\u05B5\x05t;\x02\u05B3" +
        "\u05B5\x05r:\x02\u05B4\u05B2\x03\x02\x02\x02\u05B4\u05B3\x03\x02\x02\x02" +
        "\u05B5q\x03\x02\x02\x02\u05B6\u05B8\x05\u0114\x8B\x02\u05B7\u05B6\x03" +
        "\x02\x02\x02\u05B8\u05BB\x03\x02\x02\x02\u05B9\u05B7\x03\x02\x02\x02\u05B9" +
        "\u05BA\x03\x02\x02\x02\u05BA\u05BF\x03\x02\x02\x02\u05BB\u05B9\x03\x02" +
        "\x02\x02\u05BC\u05BE\x07\x07\x02\x02\u05BD\u05BC\x03\x02\x02\x02\u05BE" +
        "\u05C1\x03\x02\x02\x02\u05BF\u05BD\x03\x02\x02\x02\u05BF\u05C0\x03\x02" +
        "\x02\x02\u05C0\u05C2\x03\x02\x02\x02\u05C1\u05BF\x03\x02\x02\x02\u05C2" +
        "\u05C3\x05v<\x02\u05C3s\x03\x02\x02\x02\u05C4\u05C6\x05\u0112\x8A\x02" +
        "\u05C5\u05C4\x03\x02\x02\x02\u05C6\u05C9\x03\x02\x02\x02\u05C7\u05C5\x03" +
        "\x02\x02\x02\u05C7\u05C8\x03\x02\x02\x02\u05C8\u05CE\x03\x02\x02\x02\u05C9" +
        "\u05C7\x03\x02\x02\x02\u05CA\u05CF\x05\x16\f\x02\u05CB\u05CF\x056\x1C" +
        "\x02\u05CC\u05CF\x05D#\x02\u05CD\u05CF\x05N(\x02\u05CE\u05CA\x03\x02\x02" +
        "\x02\u05CE\u05CB\x03\x02\x02\x02\u05CE\u05CC\x03\x02\x02\x02\u05CE\u05CD" +
        "\x03\x02\x02\x02\u05CFu\x03\x02\x02\x02\u05D0\u05D6\x05x=\x02\u05D1\u05D2" +
        "\x05\xE6t\x02\u05D2\u05D3\x05x=\x02\u05D3\u05D5\x03\x02\x02\x02\u05D4" +
        "\u05D1\x03\x02\x02\x02\u05D5\u05D8\x03\x02\x02\x02\u05D6\u05D4\x03\x02" +
        "\x02\x02\u05D6\u05D7\x03\x02\x02\x02\u05D7w\x03\x02\x02\x02\u05D8\u05D6" +
        "\x03\x02\x02\x02\u05D9\u05EA\x05z>\x02\u05DA\u05DC\x07\x07\x02\x02\u05DB" +
        "\u05DA\x03\x02\x02\x02\u05DC\u05DF\x03\x02\x02\x02\u05DD\u05DB\x03\x02" +
        "\x02\x02\u05DD\u05DE\x03\x02\x02\x02\u05DE\u05E0\x03\x02\x02\x02\u05DF" +
        "\u05DD\x03\x02\x02\x02\u05E0\u05E4\x07\x19\x02\x02\u05E1\u05E3\x07\x07" +
        "\x02\x02\u05E2\u05E1\x03\x02\x02\x02\u05E3\u05E6\x03\x02\x02\x02\u05E4" +
        "\u05E2\x03\x02\x02\x02\u05E4\u05E5\x03\x02\x02\x02\u05E5\u05E7\x03\x02" +
        "\x02\x02\u05E6\u05E4\x03\x02\x02\x02\u05E7\u05E9\x05z>\x02\u05E8\u05DD" +
        "\x03\x02\x02\x02\u05E9\u05EC\x03\x02\x02\x02\u05EA\u05E8\x03\x02\x02\x02" +
        "\u05EA\u05EB\x03\x02\x02\x02\u05EBy\x03\x02\x02\x02\u05EC\u05EA\x03\x02" +
        "\x02\x02\u05ED\u05FE\x05|?\x02\u05EE\u05F0\x07\x07\x02\x02\u05EF\u05EE" +
        "\x03\x02\x02\x02\u05F0\u05F3\x03\x02\x02\x02\u05F1\u05EF\x03\x02\x02\x02" +
        "\u05F1\u05F2\x03\x02\x02\x02\u05F2\u05F4\x03\x02\x02\x02\u05F3\u05F1\x03" +
        "\x02\x02\x02\u05F4\u05F8\x07\x18\x02\x02\u05F5\u05F7\x07\x07\x02\x02\u05F6" +
        "\u05F5\x03\x02\x02\x02\u05F7\u05FA\x03\x02\x02\x02\u05F8\u05F6\x03\x02" +
        "\x02\x02\u05F8\u05F9\x03\x02\x02\x02\u05F9\u05FB\x03\x02\x02\x02\u05FA" +
        "\u05F8\x03\x02\x02\x02\u05FB\u05FD\x05|?\x02\u05FC\u05F1\x03\x02\x02\x02" +
        "\u05FD\u0600\x03\x02\x02\x02\u05FE\u05FC\x03\x02\x02\x02\u05FE\u05FF\x03" +
        "\x02\x02\x02\u05FF{\x03\x02\x02\x02\u0600\u05FE\x03\x02\x02\x02\u0601" +
        "\u060D\x05~@\x02\u0602\u0606\x05\xE8u\x02\u0603\u0605\x07\x07\x02\x02" +
        "\u0604\u0603\x03\x02\x02\x02\u0605\u0608\x03\x02\x02\x02\u0606\u0604\x03" +
        "\x02\x02\x02\u0606\u0607\x03\x02\x02\x02\u0607\u0609\x03\x02\x02\x02\u0608" +
        "\u0606\x03\x02\x02\x02\u0609\u060A\x05~@\x02\u060A\u060C\x03\x02\x02\x02" +
        "\u060B\u0602\x03\x02\x02\x02\u060C\u060F\x03\x02\x02\x02\u060D\u060B\x03" +
        "\x02\x02\x02\u060D\u060E\x03\x02\x02\x02\u060E}\x03\x02\x02\x02\u060F" +
        "\u060D\x03\x02\x02\x02\u0610\u061A\x05\x80A\x02\u0611\u0615\x05\xEAv\x02" +
        "\u0612\u0614\x07\x07\x02\x02\u0613\u0612\x03\x02\x02\x02\u0614\u0617\x03" +
        "\x02\x02\x02\u0615\u0613\x03\x02\x02\x02\u0615\u0616\x03\x02\x02\x02\u0616" +
        "\u0618\x03\x02\x02\x02\u0617\u0615\x03\x02\x02\x02\u0618\u0619\x05\x80" +
        "A\x02\u0619\u061B\x03\x02\x02\x02\u061A\u0611\x03\x02\x02\x02\u061A\u061B" +
        "\x03\x02\x02\x02\u061B\x7F\x03\x02\x02\x02\u061C\u0633\x05\x82B\x02\u061D" +
        "\u0621\x05\xECw\x02\u061E\u0620\x07\x07\x02\x02\u061F\u061E\x03\x02\x02" +
        "\x02\u0620\u0623\x03\x02\x02\x02\u0621\u061F\x03\x02\x02\x02\u0621\u0622" +
        "\x03\x02\x02\x02\u0622\u0624\x03\x02\x02\x02\u0623\u0621\x03\x02\x02\x02" +
        "\u0624\u0625\x05\x82B\x02\u0625\u0627\x03\x02\x02\x02\u0626\u061D\x03" +
        "\x02\x02\x02\u0627\u0628\x03\x02\x02\x02\u0628\u0626\x03\x02\x02\x02\u0628" +
        "\u0629\x03\x02\x02\x02\u0629\u0634\x03\x02\x02\x02\u062A\u062E\x05\xEE" +
        "x\x02\u062B\u062D\x07\x07\x02\x02\u062C\u062B\x03\x02\x02\x02\u062D\u0630" +
        "\x03\x02\x02\x02\u062E\u062C\x03\x02\x02\x02\u062E\u062F\x03\x02\x02\x02" +
        "\u062F\u0631\x03\x02\x02\x02\u0630\u062E\x03\x02\x02\x02\u0631\u0632\x05" +
        "T+\x02\u0632\u0634\x03\x02\x02\x02\u0633\u0626\x03\x02\x02\x02\u0633\u062A" +
        "\x03\x02\x02\x02\u0633\u0634\x03\x02\x02\x02\u0634\x81\x03\x02\x02\x02" +
        "\u0635\u0646\x05\x84C\x02\u0636\u0638\x07\x07\x02\x02\u0637\u0636\x03" +
        "\x02\x02\x02\u0638\u063B\x03\x02\x02\x02\u0639\u0637\x03\x02\x02\x02\u0639" +
        "\u063A\x03\x02\x02\x02\u063A\u063C\x03\x02\x02\x02\u063B\u0639\x03\x02" +
        "\x02\x02\u063C\u0640\x07,\x02\x02\u063D\u063F\x07\x07\x02\x02\u063E\u063D" +
        "\x03\x02\x02\x02\u063F\u0642\x03\x02\x02\x02\u0640\u063E\x03\x02\x02\x02" +
        "\u0640\u0641\x03\x02\x02\x02\u0641\u0643\x03\x02\x02\x02\u0642\u0640\x03" +
        "\x02\x02\x02\u0643\u0645\x05\x84C\x02\u0644\u0639\x03\x02\x02\x02\u0645" +
        "\u0648\x03\x02\x02\x02\u0646\u0644\x03\x02\x02\x02\u0646\u0647\x03\x02" +
        "\x02\x02\u0647\x83\x03\x02\x02\x02\u0648\u0646\x03\x02\x02\x02\u0649\u0655" +
        "\x05\x86D\x02\u064A\u064E\x05\u0120\x91\x02\u064B\u064D\x07\x07\x02\x02" +
        "\u064C\u064B\x03\x02\x02\x02\u064D\u0650\x03\x02\x02\x02\u064E\u064C\x03" +
        "\x02\x02\x02\u064E\u064F\x03\x02\x02\x02\u064F\u0651\x03\x02\x02\x02\u0650" +
        "\u064E\x03\x02\x02\x02\u0651\u0652\x05\x86D\x02\u0652\u0654\x03\x02\x02" +
        "\x02\u0653\u064A\x03\x02\x02\x02\u0654\u0657\x03\x02\x02\x02\u0655\u0653" +
        "\x03\x02\x02\x02\u0655\u0656\x03\x02\x02\x02\u0656\x85\x03\x02\x02\x02" +
        "\u0657\u0655\x03\x02\x02\x02\u0658\u0663\x05\x88E\x02\u0659\u065D\x07" +
        "%\x02\x02\u065A\u065C\x07\x07\x02\x02\u065B\u065A\x03\x02\x02\x02\u065C" +
        "\u065F\x03\x02\x02\x02\u065D\u065B\x03\x02\x02\x02\u065D\u065E\x03\x02" +
        "\x02\x02\u065E\u0660\x03\x02\x02\x02\u065F\u065D\x03\x02\x02\x02\u0660" +
        "\u0662\x05\x88E\x02\u0661\u0659\x03\x02\x02\x02\u0662\u0665\x03\x02\x02" +
        "\x02\u0663\u0661\x03\x02\x02\x02\u0663\u0664\x03\x02\x02\x02\u0664\x87" +
        "\x03\x02\x02\x02\u0665\u0663\x03\x02\x02\x02\u0666\u0672\x05\x8AF\x02" +
        "\u0667\u066B\x05\xF0y\x02\u0668\u066A\x07\x07\x02\x02\u0669\u0668\x03" +
        "\x02\x02\x02\u066A\u066D\x03\x02\x02\x02\u066B\u0669\x03\x02\x02\x02\u066B" +
        "\u066C\x03\x02\x02\x02\u066C\u066E\x03\x02\x02\x02\u066D\u066B\x03\x02" +
        "\x02\x02\u066E\u066F\x05\x8AF\x02\u066F\u0671\x03\x02\x02\x02\u0670\u0667" +
        "\x03\x02\x02\x02\u0671\u0674\x03\x02\x02\x02\u0672\u0670\x03\x02\x02\x02" +
        "\u0672\u0673\x03\x02\x02\x02\u0673\x89\x03\x02\x02\x02\u0674\u0672\x03" +
        "\x02\x02\x02\u0675\u0681\x05\x8CG\x02\u0676\u067A\x05\xF2z\x02\u0677\u0679" +
        "\x07\x07\x02\x02\u0678\u0677\x03\x02\x02\x02\u0679\u067C\x03\x02\x02\x02" +
        "\u067A\u0678\x03\x02\x02\x02\u067A\u067B\x03\x02\x02\x02\u067B\u067D\x03" +
        "\x02\x02\x02\u067C\u067A\x03\x02\x02\x02\u067D\u067E\x05\x8CG\x02\u067E" +
        "\u0680\x03\x02\x02\x02\u067F\u0676\x03\x02\x02\x02\u0680\u0683\x03\x02" +
        "\x02\x02\u0681\u067F\x03\x02\x02\x02\u0681\u0682\x03\x02\x02\x02\u0682" +
        "\x8B\x03\x02\x02\x02\u0683\u0681\x03\x02\x02\x02\u0684\u0690\x05\x8EH" +
        "\x02\u0685\u0687\x07\x07\x02\x02\u0686\u0685\x03\x02\x02\x02\u0687\u068A" +
        "\x03\x02\x02\x02\u0688\u0686\x03\x02\x02\x02\u0688\u0689\x03\x02\x02\x02" +
        "\u0689\u068B\x03\x02\x02\x02\u068A\u0688\x03\x02\x02\x02\u068B\u068C\x05" +
        "\xF4{\x02\u068C\u068D\x05\x8EH\x02\u068D\u068F\x03\x02\x02\x02\u068E\u0688" +
        "\x03\x02\x02\x02\u068F\u0692\x03\x02\x02\x02\u0690\u068E\x03\x02\x02\x02" +
        "\u0690\u0691\x03\x02\x02\x02\u0691\x8D\x03\x02\x02\x02\u0692\u0690\x03" +
        "\x02\x02\x02\u0693\u0695\x05\xF6|\x02\u0694\u0693\x03\x02\x02\x02\u0695" +
        "\u0698\x03\x02\x02\x02\u0696\u0694\x03\x02\x02\x02\u0696\u0697\x03\x02" +
        "\x02\x02\u0697\u0699\x03\x02\x02\x02\u0698\u0696\x03\x02\x02\x02\u0699" +
        "\u069A\x05\x90I\x02\u069A\x8F\x03\x02\x02\x02\u069B\u069E\x05\x92J\x02" +
        "\u069C\u069E\x05\xE4s\x02\u069D\u069B\x03\x02\x02\x02\u069D\u069C\x03" +
        "\x02\x02\x02\u069E\u06A2\x03\x02\x02\x02\u069F\u06A1\x05\xF8}\x02\u06A0" +
        "\u069F\x03\x02\x02\x02\u06A1\u06A4\x03\x02\x02\x02\u06A2\u06A0\x03\x02" +
        "\x02\x02\u06A2\u06A3\x03\x02\x02\x02\u06A3\x91\x03\x02\x02\x02\u06A4\u06A2" +
        "\x03\x02\x02\x02\u06A5\u06B2\x05\x94K\x02\u06A6\u06B2\x05\xA6T\x02\u06A7" +
        "\u06B2\x05\xB6\\\x02\u06A8\u06B2\x05\xC0a\x02\u06A9\u06B2\x05\xC2b\x02" +
        "\u06AA\u06B2\x05\xC4c\x02\u06AB\u06B2\x05\xD4k\x02\u06AC\u06B2\x05\xBC" +
        "_\x02\u06AD\u06B2\x05\xE2r\x02\u06AE\u06B2\x05\xDAn\x02\u06AF\u06B2\x05" +
        "\xBE`\x02\u06B0\u06B2\x05\u0120\x91\x02\u06B1\u06A5\x03\x02\x02\x02\u06B1" +
        "\u06A6\x03\x02\x02\x02\u06B1\u06A7\x03\x02\x02\x02\u06B1\u06A8\x03\x02" +
        "\x02\x02\u06B1\u06A9\x03\x02\x02\x02\u06B1\u06AA\x03\x02\x02\x02\u06B1" +
        "\u06AB\x03\x02\x02\x02\u06B1\u06AC\x03\x02\x02\x02\u06B1\u06AD\x03\x02" +
        "\x02\x02\u06B1\u06AE\x03\x02\x02\x02\u06B1\u06AF\x03\x02\x02\x02\u06B1" +
        "\u06B0\x03\x02\x02\x02\u06B2\x93\x03\x02\x02\x02\u06B3\u06B4\x07\v\x02" +
        "\x02\u06B4\u06B5\x05v<\x02\u06B5\u06B6\x07\f\x02\x02\u06B6\x95\x03\x02" +
        "\x02\x02\u06B7\u06B9\x05\x9EP\x02\u06B8\u06BA\x05\x9CO\x02\u06B9\u06B8" +
        "\x03\x02\x02\x02\u06B9\u06BA\x03\x02\x02\x02\u06BA\u06BE\x03\x02\x02\x02" +
        "\u06BB\u06BD\x05\x98M\x02\u06BC\u06BB\x03\x02\x02\x02\u06BD\u06C0\x03" +
        "\x02\x02\x02\u06BE\u06BC\x03\x02\x02\x02\u06BE\u06BF\x03\x02\x02\x02\u06BF" +
        "\u06CE\x03\x02\x02\x02\u06C0\u06BE\x03\x02\x02\x02\u06C1\u06C5\x05\x9C" +
        "O\x02\u06C2\u06C4\x05\x98M\x02\u06C3\u06C2\x03\x02\x02\x02\u06C4\u06C7" +
        "\x03\x02\x02\x02\u06C5\u06C3\x03\x02\x02\x02\u06C5\u06C6\x03\x02\x02\x02" +
        "\u06C6\u06CE\x03\x02\x02\x02\u06C7\u06C5\x03\x02\x02\x02\u06C8\u06CA\x05" +
        "\x98M\x02\u06C9\u06C8\x03\x02\x02\x02\u06CA\u06CB\x03\x02\x02\x02\u06CB" +
        "\u06C9\x03\x02\x02\x02\u06CB\u06CC\x03\x02\x02\x02\u06CC\u06CE\x03\x02" +
        "\x02\x02\u06CD\u06B7\x03\x02\x02\x02\u06CD\u06C1\x03\x02\x02\x02\u06CD" +
        "\u06C9\x03\x02\x02\x02\u06CE\x97\x03\x02\x02\x02\u06CF\u06D1\x05\u011C" +
        "\x8F\x02\u06D0\u06CF\x03\x02\x02\x02\u06D1\u06D4\x03\x02\x02\x02\u06D2" +
        "\u06D0\x03\x02\x02\x02\u06D2\u06D3\x03\x02\x02\x02\u06D3\u06D6\x03\x02" +
        "\x02\x02\u06D4\u06D2\x03\x02\x02\x02\u06D5\u06D7\x07\x90\x02\x02\u06D6" +
        "\u06D5\x03\x02\x02\x02\u06D6\u06D7\x03\x02\x02\x02\u06D7\u06DB\x03\x02" +
        "\x02\x02\u06D8\u06DA\x07\x07\x02\x02\u06D9\u06D8\x03\x02\x02\x02\u06DA" +
        "\u06DD\x03\x02\x02\x02\u06DB\u06D9\x03\x02\x02\x02\u06DB\u06DC\x03\x02" +
        "\x02\x02\u06DC\u06DE\x03\x02\x02\x02\u06DD\u06DB\x03\x02\x02\x02\u06DE" +
        "\u06DF\x05\xB6\\\x02\u06DF\x99\x03\x02\x02\x02\u06E0\u06E9\x07\r\x02\x02" +
        "\u06E1\u06E6\x05v<\x02\u06E2\u06E3\x07\n\x02\x02\u06E3\u06E5\x05v<\x02" +
        "\u06E4\u06E2\x03\x02\x02\x02\u06E5\u06E8\x03\x02\x02\x02\u06E6\u06E4\x03" +
        "\x02\x02\x02\u06E6\u06E7\x03\x02\x02\x02\u06E7\u06EA\x03\x02\x02\x02\u06E8" +
        "\u06E6\x03\x02\x02\x02\u06E9\u06E1\x03\x02\x02\x02\u06E9\u06EA\x03\x02" +
        "\x02\x02\u06EA\u06EB\x03\x02\x02\x02\u06EB\u06EC\x07\x0E\x02\x02\u06EC" +
        "\x9B\x03\x02\x02\x02\u06ED\u06F6\x07\v\x02\x02\u06EE\u06F3\x05\xA4S\x02" +
        "\u06EF\u06F0\x07\n\x02\x02\u06F0\u06F2\x05\xA4S\x02\u06F1\u06EF\x03\x02" +
        "\x02\x02\u06F2\u06F5\x03\x02\x02\x02\u06F3\u06F1\x03\x02\x02\x02\u06F3" +
        "\u06F4\x03\x02\x02\x02\u06F4\u06F7\x03\x02\x02\x02\u06F5\u06F3\x03\x02" +
        "\x02\x02\u06F6\u06EE\x03\x02\x02\x02\u06F6\u06F7\x03\x02\x02\x02\u06F7" +
        "\u06F8\x03\x02\x02\x02\u06F8\u06F9\x07\f\x02\x02\u06F9\x9D\x03\x02\x02" +
        "\x02\u06FA\u06FE\x07-\x02\x02\u06FB\u06FD\x07\x07\x02\x02\u06FC\u06FB" +
        "\x03\x02\x02\x02\u06FD\u0700\x03\x02\x02\x02\u06FE\u06FC\x03\x02\x02\x02" +
        "\u06FE\u06FF\x03\x02\x02\x02\u06FF\u0701\x03\x02\x02\x02\u0700\u06FE\x03" +
        "\x02\x02\x02\u0701\u070C\x05\xA0Q\x02\u0702\u0704\x07\x07\x02\x02\u0703" +
        "\u0702\x03\x02\x02\x02\u0704\u0707\x03\x02\x02\x02\u0705\u0703\x03\x02" +
        "\x02\x02\u0705\u0706\x03\x02\x02\x02\u0706\u0708\x03\x02\x02\x02\u0707" +
        "\u0705\x03\x02\x02\x02\u0708\u0709\x07\n\x02\x02\u0709\u070B\x05\xA0Q" +
        "\x02\u070A\u0705\x03\x02\x02\x02\u070B\u070E\x03\x02\x02\x02\u070C\u070A" +
        "\x03\x02\x02\x02\u070C\u070D\x03\x02\x02\x02\u070D\u0712\x03\x02\x02\x02" +
        "\u070E\u070C\x03\x02\x02\x02\u070F\u0711\x07\x07\x02\x02\u0710\u070F\x03" +
        "\x02\x02\x02\u0711\u0714\x03\x02\x02\x02\u0712\u0710\x03\x02\x02\x02\u0712" +
        "\u0713\x03\x02\x02\x02\u0713\u0715\x03\x02\x02\x02\u0714\u0712\x03\x02" +
        "\x02\x02\u0715\u0716\x07.\x02\x02\u0716\x9F\x03\x02\x02\x02\u0717\u0719" +
        "\x05\xA2R\x02\u0718\u0717\x03\x02\x02\x02\u0718\u0719\x03\x02\x02\x02" +
        "\u0719\u071A\x03\x02\x02\x02\u071A\u071D\x05T+\x02\u071B\u071D\x07\x11" +
        "\x02\x02\u071C\u0718\x03\x02\x02\x02\u071C\u071B\x03\x02\x02\x02\u071D" +
        "\xA1\x03\x02\x02\x02\u071E\u0720\x05\u0106\x84\x02\u071F\u071E\x03\x02" +
        "\x02\x02\u0720\u0721\x03\x02\x02\x02\u0721\u071F\x03\x02\x02\x02\u0721" +
        "\u0722\x03\x02\x02\x02\u0722\xA3\x03\x02\x02\x02\u0723\u0727\x05\u0120" +
        "\x91\x02\u0724\u0726\x07\x07\x02\x02\u0725\u0724\x03\x02\x02\x02\u0726" +
        "\u0729\x03\x02\x02\x02\u0727\u0725\x03\x02\x02\x02\u0727\u0728\x03\x02" +
        "\x02\x02\u0728\u072A\x03\x02\x02\x02\u0729\u0727\x03\x02\x02\x02\u072A" +
        "\u072E\x07\x1D\x02\x02\u072B\u072D\x07\x07\x02\x02\u072C\u072B\x03\x02" +
        "\x02\x02\u072D\u0730\x03\x02\x02\x02\u072E\u072C\x03\x02\x02\x02\u072E" +
        "\u072F\x03\x02\x02\x02\u072F\u0732\x03\x02\x02\x02\u0730\u072E\x03\x02" +
        "\x02\x02\u0731\u0723\x03\x02\x02\x02\u0731\u0732\x03\x02\x02\x02\u0732" +
        "\u0734\x03\x02\x02\x02\u0733\u0735\x07\x11\x02\x02\u0734\u0733\x03\x02" +
        "\x02\x02\u0734\u0735\x03\x02\x02\x02\u0735\u0739\x03\x02\x02\x02\u0736" +
        "\u0738\x07\x07\x02\x02\u0737\u0736\x03\x02\x02\x02\u0738\u073B\x03\x02" +
        "\x02\x02\u0739\u0737\x03\x02\x02\x02\u0739\u073A\x03\x02\x02\x02\u073A" +
        "\u073C\x03\x02\x02\x02\u073B\u0739\x03\x02\x02\x02\u073C\u073D\x05v<\x02" +
        "\u073D\xA5\x03\x02\x02\x02\u073E\u0748\x07\x8C\x02\x02\u073F\u0748\x07" +
        "\x89\x02\x02\u0740\u0748\x05\xA8U\x02\u0741\u0748\x07\x8A\x02\x02\u0742" +
        "\u0748\x07\x8B\x02\x02\u0743\u0748\x07\x92\x02\x02\u0744\u0748\x07\x85" +
        "\x02\x02\u0745\u0748\x07\x8D\x02\x02\u0746\u0748\x07\x88\x02\x02\u0747" +
        "\u073E\x03\x02\x02\x02\u0747\u073F\x03\x02\x02\x02\u0747\u0740\x03\x02" +
        "\x02\x02\u0747\u0741\x03\x02\x02\x02\u0747\u0742\x03\x02\x02\x02\u0747" +
        "\u0743\x03\x02\x02\x02\u0747\u0744\x03\x02\x02\x02\u0747\u0745\x03\x02" +
        "\x02\x02\u0747\u0746\x03\x02\x02\x02\u0748\xA7\x03\x02\x02\x02\u0749\u074C" +
        "\x05\xAAV\x02\u074A\u074C\x05\xACW\x02\u074B\u0749\x03\x02\x02\x02\u074B" +
        "\u074A\x03\x02\x02\x02\u074C\xA9\x03\x02\x02\x02\u074D\u0752\x07\x83\x02" +
        "\x02\u074E\u0751\x05\xAEX\x02\u074F\u0751\x05\xB0Y\x02\u0750\u074E\x03" +
        "\x02\x02\x02\u0750\u074F\x03\x02\x02\x02\u0751\u0754\x03\x02\x02\x02\u0752" +
        "\u0750\x03\x02\x02\x02\u0752\u0753\x03\x02\x02\x02\u0753\u0755\x03\x02" +
        "\x02\x02\u0754\u0752\x03\x02\x02\x02\u0755\u0756\x07\x9D\x02\x02\u0756" +
        "\xAB\x03\x02\x02\x02\u0757\u075E\x07\x84\x02\x02\u0758\u075D\x05\xB2Z" +
        "\x02\u0759\u075D\x05\xB4[\x02\u075A\u075D\x05\xAAV\x02\u075B\u075D\x07" +
        "\xA3\x02\x02\u075C\u0758\x03\x02\x02\x02\u075C\u0759\x03\x02\x02\x02\u075C" +
        "\u075A\x03\x02\x02\x02\u075C\u075B\x03\x02\x02\x02\u075D\u0760\x03\x02" +
        "\x02\x02\u075E\u075C\x03\x02\x02\x02\u075E\u075F\x03\x02\x02\x02\u075F" +
        "\u0761\x03\x02\x02\x02\u0760\u075E\x03\x02\x02\x02\u0761\u0762\x07\xA2" +
        "\x02\x02\u0762\xAD\x03\x02\x02\x02\u0763\u0764\t\x05\x02\x02\u0764\xAF" +
        "\x03\x02\x02\x02\u0765\u0766\x07\xA1\x02\x02\u0766\u0767\x05v<\x02\u0767" +
        "\u0768\x07\x10\x02\x02\u0768\xB1\x03\x02\x02\x02\u0769\u076A\t\x06\x02" +
        "\x02\u076A\xB3\x03\x02\x02\x02\u076B\u076C\x07\xA7\x02\x02\u076C\u076D" +
        "\x05v<\x02\u076D\u076E\x07\x10\x02\x02\u076E\xB5\x03\x02\x02\x02\u076F" +
        "\u0771\x05\u0114\x8B\x02\u0770\u076F\x03\x02\x02\x02\u0771\u0774\x03\x02" +
        "\x02\x02\u0772\u0770\x03\x02\x02\x02\u0772\u0773\x03\x02\x02\x02\u0773" +
        "\u07A3\x03\x02\x02\x02\u0774\u0772\x03\x02\x02\x02\u0775\u0779\x07\x0F" +
        "\x02\x02\u0776\u0778\x07\x07\x02\x02\u0777\u0776\x03\x02\x02\x02\u0778" +
        "\u077B\x03\x02\x02\x02\u0779\u0777\x03\x02\x02\x02\u0779\u077A\x03\x02" +
        "\x02\x02\u077A\u077C\x03\x02\x02\x02\u077B\u0779\x03\x02\x02\x02\u077C" +
        "\u0780\x05n8\x02\u077D\u077F\x07\x07\x02\x02\u077E\u077D\x03\x02\x02\x02" +
        "\u077F\u0782\x03\x02\x02\x02\u0780\u077E\x03\x02\x02\x02\u0780\u0781\x03" +
        "\x02\x02\x02\u0781\u0783\x03\x02\x02\x02\u0782\u0780\x03\x02\x02\x02\u0783" +
        "\u0784\x07\x10\x02\x02\u0784\u07A4\x03\x02\x02\x02\u0785\u0789\x07\x0F" +
        "\x02\x02\u0786\u0788\x07\x07\x02\x02\u0787\u0786\x03\x02\x02\x02\u0788" +
        "\u078B\x03\x02\x02\x02\u0789\u0787\x03\x02\x02\x02\u0789\u078A\x03\x02" +
        "\x02\x02\u078A\u078C\x03\x02\x02\x02\u078B\u0789\x03\x02\x02\x02\u078C" +
        "\u0790\x05\xB8]\x02\u078D\u078F\x07\x07\x02\x02\u078E\u078D\x03\x02\x02" +
        "\x02\u078F\u0792\x03\x02\x02\x02\u0790\u078E\x03\x02\x02\x02\u0790\u0791" +
        "\x03\x02\x02\x02\u0791\u0793\x03\x02\x02\x02\u0792\u0790\x03\x02\x02\x02" +
        "\u0793\u0797\x07#\x02\x02\u0794\u0796\x07\x07\x02\x02\u0795\u0794\x03" +
        "\x02\x02\x02\u0796\u0799\x03\x02\x02\x02\u0797\u0795\x03\x02\x02\x02\u0797" +
        "\u0798\x03\x02\x02\x02\u0798\u079A\x03\x02\x02\x02\u0799\u0797\x03\x02" +
        "\x02\x02\u079A\u079E\x05n8\x02\u079B\u079D\x07\x07\x02\x02\u079C\u079B" +
        "\x03\x02\x02\x02\u079D\u07A0\x03\x02\x02\x02\u079E\u079C\x03\x02\x02\x02" +
        "\u079E\u079F\x03\x02\x02\x02\u079F\u07A1\x03\x02\x02\x02\u07A0\u079E\x03" +
        "\x02\x02\x02\u07A1\u07A2\x07\x10\x02\x02\u07A2\u07A4\x03\x02\x02\x02\u07A3" +
        "\u0775\x03\x02\x02\x02\u07A3\u0785\x03\x02\x02\x02\u07A4\xB7\x03\x02\x02" +
        "\x02\u07A5\u07A7\x05\xBA^\x02\u07A6\u07A5\x03\x02\x02\x02\u07A6\u07A7" +
        "\x03\x02\x02\x02\u07A7\u07B8\x03\x02\x02\x02\u07A8\u07AA\x07\x07\x02\x02" +
        "\u07A9\u07A8\x03\x02\x02\x02\u07AA\u07AD\x03\x02\x02\x02\u07AB\u07A9\x03" +
        "\x02\x02\x02\u07AB\u07AC\x03\x02\x02\x02\u07AC\u07AE\x03\x02\x02\x02\u07AD" +
        "\u07AB\x03\x02\x02\x02\u07AE\u07B2\x07\n\x02\x02\u07AF\u07B1\x07\x07\x02" +
        "\x02\u07B0\u07AF\x03\x02\x02\x02\u07B1\u07B4\x03\x02\x02\x02\u07B2\u07B0" +
        "\x03\x02\x02\x02\u07B2\u07B3\x03\x02\x02\x02\u07B3\u07B5\x03\x02\x02\x02" +
        "\u07B4\u07B2\x03\x02\x02\x02\u07B5\u07B7\x05\xBA^\x02\u07B6\u07AB\x03" +
        "\x02\x02\x02\u07B7\u07BA\x03\x02\x02\x02\u07B8\u07B6\x03\x02\x02\x02\u07B8" +
        "\u07B9\x03\x02\x02\x02\u07B9\xB9\x03\x02\x02\x02\u07BA\u07B8\x03\x02\x02" +
        "\x02\u07BB\u07CE\x05H%\x02\u07BC\u07CB\x05F$\x02\u07BD\u07BF\x07\x07\x02" +
        "\x02\u07BE\u07BD\x03\x02\x02\x02\u07BF\u07C2\x03\x02\x02\x02\u07C0\u07BE" +
        "\x03\x02\x02\x02\u07C0\u07C1\x03\x02\x02\x02\u07C1\u07C3\x03\x02\x02\x02" +
        "\u07C2\u07C0\x03\x02\x02\x02\u07C3\u07C7\x07\x1B\x02\x02\u07C4\u07C6\x07" +
        "\x07\x02\x02\u07C5\u07C4\x03\x02\x02\x02\u07C6\u07C9\x03\x02\x02\x02\u07C7" +
        "\u07C5\x03\x02\x02\x02\u07C7\u07C8\x03\x02\x02\x02\u07C8\u07CA\x03\x02" +
        "\x02\x02\u07C9\u07C7\x03\x02\x02\x02\u07CA\u07CC\x05T+\x02\u07CB\u07C0" +
        "\x03\x02\x02\x02\u07CB\u07CC\x03\x02\x02\x02\u07CC\u07CE\x03\x02\x02\x02" +
        "\u07CD\u07BB\x03\x02\x02\x02\u07CD\u07BC\x03\x02\x02\x02\u07CE\xBB\x03" +
        "\x02\x02\x02\u07CF\u07DE\x07@\x02\x02\u07D0\u07D2\x07\x07\x02\x02\u07D1" +
        "\u07D0\x03\x02\x02\x02\u07D2\u07D5\x03\x02\x02\x02\u07D3\u07D1\x03\x02" +
        "\x02\x02\u07D3\u07D4\x03\x02\x02\x02\u07D4\u07D6\x03\x02\x02\x02\u07D5" +
        "\u07D3\x03\x02\x02\x02\u07D6\u07DA\x07\x1B\x02\x02\u07D7\u07D9\x07\x07" +
        "\x02\x02\u07D8\u07D7\x03\x02\x02\x02\u07D9\u07DC\x03\x02\x02\x02\u07DA" +
        "\u07D8\x03\x02\x02\x02\u07DA\u07DB\x03\x02\x02\x02\u07DB\u07DD\x03\x02" +
        "\x02\x02\u07DC\u07DA\x03\x02\x02\x02\u07DD\u07DF\x05\x1E\x10\x02\u07DE" +
        "\u07D3\x03\x02\x02\x02\u07DE\u07DF\x03\x02\x02\x02\u07DF\u07E3\x03\x02" +
        "\x02\x02\u07E0\u07E2\x07\x07\x02\x02\u07E1\u07E0\x03\x02\x02\x02\u07E2" +
        "\u07E5\x03\x02\x02\x02\u07E3\u07E1\x03\x02\x02\x02\u07E3\u07E4\x03\x02" +
        "\x02\x02\u07E4\u07E6\x03\x02\x02\x02\u07E5\u07E3\x03\x02\x02\x02\u07E6" +
        "\u07E7\x05&\x14\x02\u07E7\xBD\x03\x02\x02\x02\u07E8\u07EA\x07\r\x02\x02" +
        "\u07E9\u07EB\x05v<\x02\u07EA\u07E9\x03\x02\x02\x02\u07EA\u07EB\x03\x02" +
        "\x02\x02\u07EB\u07F0\x03\x02\x02\x02\u07EC\u07ED\x07\n\x02\x02\u07ED\u07EF" +
        "\x05v<\x02\u07EE\u07EC\x03\x02\x02\x02\u07EF\u07F2\x03\x02\x02\x02\u07F0" +
        "\u07EE\x03\x02\x02\x02\u07F0\u07F1\x03\x02\x02\x02\u07F1\u07F3\x03\x02" +
        "\x02\x02\u07F2\u07F0\x03\x02\x02\x02\u07F3\u07F4\x07\x0E\x02\x02\u07F4" +
        "\xBF\x03\x02\x02\x02\u07F5\u07F7\x07H\x02\x02\u07F6\u07F8\x07\x8F\x02" +
        "\x02\u07F7\u07F6\x03\x02\x02\x02\u07F7\u07F8\x03\x02\x02\x02\u07F8\xC1" +
        "\x03\x02\x02\x02\u07F9\u080A\x07I\x02\x02\u07FA\u07FE\x07-\x02\x02\u07FB" +
        "\u07FD\x07\x07\x02\x02\u07FC\u07FB\x03\x02\x02\x02\u07FD\u0800\x03\x02" +
        "\x02\x02\u07FE\u07FC\x03\x02\x02\x02\u07FE\u07FF\x03\x02\x02\x02\u07FF" +
        "\u0801\x03\x02\x02\x02\u0800\u07FE\x03\x02\x02\x02\u0801\u0805\x05T+\x02" +
        "\u0802\u0804\x07\x07\x02\x02\u0803\u0802\x03\x02\x02\x02\u0804\u0807\x03" +
        "\x02\x02\x02\u0805\u0803\x03\x02\x02\x02\u0805\u0806\x03\x02\x02\x02\u0806" +
        "\u0808\x03\x02\x02\x02\u0807\u0805\x03\x02\x02\x02\u0808\u0809\x07.\x02" +
        "\x02\u0809\u080B\x03\x02\x02\x02\u080A\u07FA\x03\x02\x02\x02\u080A\u080B" +
        "\x03\x02\x02\x02\u080B\u080D\x03\x02\x02\x02\u080C\u080E\x07\x8F\x02\x02" +
        "\u080D\u080C\x03\x02\x02\x02\u080D\u080E\x03\x02\x02\x02\u080E\xC3\x03" +
        "\x02\x02\x02\u080F\u0812\x05\xC6d\x02\u0810\u0812\x05\xCAf\x02\u0811\u080F" +
        "\x03\x02\x02\x02\u0811\u0810\x03\x02\x02\x02\u0812\xC5\x03\x02\x02\x02" +
        "\u0813\u0817\x07L\x02\x02\u0814\u0816\x07\x07\x02\x02\u0815\u0814\x03" +
        "\x02\x02\x02\u0816\u0819\x03\x02\x02\x02\u0817\u0815\x03\x02\x02\x02\u0817" +
        "\u0818";
    KotlinParser._serializedATNSegment4 = "\x03\x02\x02\x02\u0818\u081A\x03\x02\x02\x02\u0819\u0817\x03\x02\x02\x02" +
        "\u081A\u081B\x07\v\x02\x02\u081B\u081C\x05v<\x02\u081C\u0820\x07\f\x02" +
        "\x02\u081D\u081F\x07\x07\x02\x02\u081E\u081D\x03\x02\x02\x02\u081F\u0822" +
        "\x03\x02\x02\x02\u0820\u081E\x03\x02\x02\x02\u0820\u0821\x03\x02\x02\x02" +
        "\u0821\u0824\x03\x02\x02\x02\u0822\u0820\x03\x02\x02\x02\u0823\u0825\x05" +
        "\xC8e\x02\u0824\u0823\x03\x02\x02\x02\u0824\u0825\x03\x02\x02\x02\u0825" +
        "\u0827\x03\x02\x02\x02\u0826\u0828\x07\x1C\x02\x02\u0827\u0826\x03\x02" +
        "\x02\x02\u0827\u0828\x03\x02\x02\x02\u0828\u0839\x03\x02\x02\x02\u0829" +
        "\u082B\x07\x07\x02\x02\u082A\u0829\x03\x02\x02\x02\u082B\u082E\x03\x02" +
        "\x02\x02\u082C\u082A\x03\x02\x02\x02\u082C\u082D\x03\x02\x02\x02\u082D" +
        "\u082F\x03\x02\x02\x02\u082E\u082C\x03\x02\x02\x02\u082F\u0833\x07M\x02" +
        "\x02\u0830\u0832\x07\x07\x02\x02\u0831\u0830\x03\x02\x02\x02\u0832\u0835" +
        "\x03\x02\x02\x02\u0833\u0831\x03\x02\x02\x02\u0833\u0834\x03\x02\x02\x02" +
        "\u0834\u0837\x03\x02\x02\x02\u0835\u0833\x03\x02\x02\x02\u0836\u0838\x05" +
        "\xC8e\x02\u0837\u0836\x03\x02\x02\x02\u0837\u0838\x03\x02\x02\x02\u0838" +
        "\u083A\x03\x02\x02\x02\u0839\u082C\x03\x02\x02\x02\u0839\u083A\x03\x02" +
        "\x02\x02\u083A\xC7\x03\x02\x02\x02\u083B\u083E\x05l7\x02\u083C\u083E\x05" +
        "v<\x02\u083D\u083B\x03\x02\x02\x02\u083D\u083C\x03\x02\x02\x02\u083E\xC9" +
        "\x03\x02\x02\x02\u083F\u0843\x07N\x02\x02\u0840\u0842\x07\x07\x02\x02" +
        "\u0841\u0840\x03\x02\x02\x02\u0842\u0845\x03\x02\x02\x02\u0843\u0841\x03" +
        "\x02\x02\x02\u0843\u0844\x03\x02\x02\x02\u0844\u084A\x03\x02\x02\x02\u0845" +
        "\u0843\x03\x02\x02\x02\u0846\u0847\x07\v\x02\x02\u0847\u0848\x05v<\x02" +
        "\u0848\u0849\x07\f\x02\x02\u0849\u084B\x03\x02\x02\x02\u084A\u0846\x03" +
        "\x02\x02\x02\u084A\u084B\x03\x02\x02\x02\u084B\u084F\x03\x02\x02\x02\u084C" +
        "\u084E\x07\x07\x02\x02\u084D\u084C\x03\x02\x02\x02\u084E\u0851\x03\x02" +
        "\x02\x02\u084F\u084D\x03\x02\x02\x02\u084F\u0850\x03\x02\x02\x02\u0850" +
        "\u0852\x03\x02\x02\x02\u0851\u084F\x03\x02\x02\x02\u0852\u0856\x07\x0F" +
        "\x02\x02\u0853\u0855\x07\x07\x02\x02\u0854\u0853\x03\x02\x02\x02\u0855" +
        "\u0858\x03\x02\x02\x02\u0856\u0854\x03\x02\x02\x02\u0856\u0857\x03\x02" +
        "\x02\x02\u0857\u0862\x03\x02\x02\x02\u0858\u0856\x03\x02\x02\x02\u0859" +
        "\u085D\x05\xCCg\x02\u085A\u085C\x07\x07\x02\x02\u085B\u085A\x03\x02\x02" +
        "\x02\u085C\u085F\x03\x02\x02\x02\u085D\u085B\x03\x02\x02\x02\u085D\u085E" +
        "\x03\x02\x02\x02\u085E\u0861\x03\x02\x02\x02\u085F\u085D\x03\x02\x02\x02" +
        "\u0860\u0859\x03\x02\x02\x02\u0861\u0864\x03\x02\x02\x02\u0862\u0860\x03" +
        "\x02\x02\x02\u0862\u0863\x03\x02\x02\x02\u0863\u0868\x03\x02\x02\x02\u0864" +
        "\u0862\x03\x02\x02\x02\u0865\u0867\x07\x07\x02\x02\u0866\u0865\x03\x02" +
        "\x02\x02\u0867\u086A\x03\x02\x02\x02\u0868\u0866\x03\x02\x02\x02\u0868" +
        "\u0869\x03\x02\x02\x02\u0869\u086B\x03\x02\x02\x02\u086A\u0868\x03\x02" +
        "\x02\x02\u086B\u086C\x07\x10\x02\x02\u086C\xCB\x03\x02\x02\x02\u086D\u087E" +
        "\x05\xCEh\x02\u086E\u0870\x07\x07\x02\x02\u086F\u086E\x03\x02\x02\x02" +
        "\u0870\u0873\x03\x02\x02\x02\u0871\u086F\x03\x02\x02\x02\u0871\u0872\x03" +
        "\x02\x02\x02\u0872\u0874\x03\x02\x02\x02\u0873\u0871\x03\x02\x02\x02\u0874" +
        "\u0878\x07\n\x02\x02\u0875\u0877\x07\x07\x02\x02\u0876\u0875\x03\x02\x02" +
        "\x02\u0877\u087A\x03\x02\x02\x02\u0878\u0876\x03\x02\x02\x02\u0878\u0879" +
        "\x03\x02\x02\x02\u0879\u087B\x03\x02\x02\x02\u087A\u0878\x03\x02\x02\x02" +
        "\u087B\u087D\x05\xCEh\x02\u087C\u0871\x03\x02\x02\x02\u087D\u0880\x03" +
        "\x02\x02\x02\u087E\u087C\x03\x02\x02\x02\u087E\u087F\x03\x02\x02\x02\u087F" +
        "\u0884\x03\x02\x02\x02\u0880\u087E\x03\x02\x02\x02\u0881\u0883\x07\x07" +
        "\x02\x02\u0882\u0881\x03\x02\x02\x02\u0883\u0886\x03\x02\x02\x02\u0884" +
        "\u0882\x03\x02\x02\x02\u0884\u0885\x03\x02\x02\x02\u0885\u0887\x03\x02" +
        "\x02\x02\u0886\u0884\x03\x02\x02\x02\u0887\u088B\x07#\x02\x02\u0888\u088A" +
        "\x07\x07\x02\x02\u0889\u0888\x03\x02\x02\x02\u088A\u088D\x03\x02\x02\x02" +
        "\u088B\u0889\x03\x02\x02\x02\u088B\u088C\x03\x02\x02\x02\u088C\u088E\x03" +
        "\x02\x02\x02\u088D\u088B\x03\x02\x02\x02\u088E\u0890\x05\xC8e\x02\u088F" +
        "\u0891\x05\u0122\x92\x02\u0890\u088F\x03\x02\x02\x02\u0890\u0891\x03\x02" +
        "\x02\x02\u0891\u08A2\x03\x02\x02\x02\u0892\u0896\x07M\x02\x02\u0893\u0895" +
        "\x07\x07\x02\x02\u0894\u0893\x03\x02\x02\x02\u0895\u0898\x03\x02\x02\x02" +
        "\u0896\u0894\x03\x02\x02\x02\u0896\u0897\x03\x02\x02\x02\u0897\u0899\x03" +
        "\x02\x02\x02\u0898\u0896\x03\x02\x02\x02\u0899\u089D\x07#\x02\x02\u089A" +
        "\u089C\x07\x07\x02\x02\u089B\u089A\x03\x02\x02\x02\u089C\u089F\x03\x02" +
        "\x02\x02\u089D\u089B\x03\x02\x02\x02\u089D\u089E\x03\x02\x02\x02\u089E" +
        "\u08A0\x03\x02\x02\x02\u089F\u089D\x03\x02\x02\x02\u08A0\u08A2\x05\xC8" +
        "e\x02\u08A1\u086D\x03\x02\x02\x02\u08A1\u0892\x03\x02\x02\x02\u08A2\xCD" +
        "\x03\x02\x02\x02\u08A3\u08A7\x05v<\x02\u08A4\u08A7\x05\xD0i\x02\u08A5" +
        "\u08A7\x05\xD2j\x02\u08A6\u08A3\x03\x02\x02\x02\u08A6\u08A4\x03\x02\x02" +
        "\x02\u08A6\u08A5\x03\x02\x02\x02\u08A7\xCF\x03\x02\x02\x02\u08A8\u08AC" +
        "\x05\xECw\x02\u08A9\u08AB\x07\x07\x02\x02\u08AA\u08A9\x03\x02\x02\x02" +
        "\u08AB\u08AE\x03\x02\x02\x02\u08AC\u08AA\x03\x02\x02\x02\u08AC\u08AD\x03" +
        "\x02\x02\x02\u08AD\u08AF\x03\x02\x02\x02\u08AE\u08AC\x03\x02\x02\x02\u08AF" +
        "\u08B0\x05v<\x02\u08B0\xD1\x03\x02\x02\x02\u08B1\u08B5\x05\xEEx\x02\u08B2" +
        "\u08B4\x07\x07\x02\x02\u08B3\u08B2\x03\x02\x02\x02\u08B4\u08B7\x03\x02" +
        "\x02\x02\u08B5\u08B3\x03\x02\x02\x02\u08B5\u08B6\x03\x02\x02\x02\u08B6" +
        "\u08B8\x03\x02\x02\x02\u08B7\u08B5\x03\x02\x02\x02\u08B8\u08B9\x05T+\x02" +
        "\u08B9\xD3\x03\x02\x02\x02\u08BA\u08BE\x07O\x02\x02\u08BB\u08BD\x07\x07" +
        "\x02\x02\u08BC\u08BB\x03\x02\x02\x02\u08BD\u08C0\x03\x02\x02\x02\u08BE" +
        "\u08BC\x03\x02\x02\x02\u08BE\u08BF\x03\x02\x02\x02\u08BF\u08C1\x03\x02" +
        "\x02\x02\u08C0\u08BE\x03\x02\x02\x02\u08C1\u08CB\x05l7\x02\u08C2\u08C4" +
        "\x07\x07\x02\x02\u08C3\u08C2\x03\x02\x02\x02\u08C4\u08C7\x03\x02\x02\x02" +
        "\u08C5\u08C3\x03\x02\x02\x02\u08C5\u08C6\x03\x02\x02\x02\u08C6\u08C8\x03" +
        "\x02\x02\x02\u08C7\u08C5\x03\x02\x02\x02\u08C8\u08CA\x05\xD6l\x02\u08C9" +
        "\u08C5\x03\x02\x02\x02\u08CA\u08CD\x03\x02\x02\x02\u08CB\u08C9\x03\x02" +
        "\x02\x02\u08CB\u08CC\x03\x02\x02\x02\u08CC\u08D5\x03\x02\x02\x02\u08CD" +
        "\u08CB\x03\x02\x02\x02\u08CE\u08D0\x07\x07\x02\x02\u08CF\u08CE\x03\x02" +
        "\x02\x02\u08D0\u08D3\x03\x02\x02\x02\u08D1\u08CF\x03\x02\x02\x02\u08D1" +
        "\u08D2\x03\x02\x02\x02\u08D2\u08D4\x03\x02\x02\x02\u08D3\u08D1\x03\x02" +
        "\x02\x02\u08D4\u08D6\x05\xD8m\x02\u08D5\u08D1\x03\x02\x02\x02\u08D5\u08D6" +
        "\x03\x02\x02\x02\u08D6\xD5\x03\x02\x02\x02\u08D7\u08DB\x07P\x02\x02\u08D8" +
        "\u08DA\x07\x07\x02\x02\u08D9\u08D8\x03\x02\x02\x02\u08DA\u08DD\x03\x02" +
        "\x02\x02\u08DB\u08D9\x03\x02\x02\x02\u08DB\u08DC\x03\x02\x02\x02\u08DC" +
        "\u08DE\x03\x02\x02\x02\u08DD\u08DB\x03\x02\x02\x02\u08DE\u08E2\x07\v\x02" +
        "\x02\u08DF\u08E1\x05\u0114\x8B\x02\u08E0\u08DF\x03\x02\x02\x02\u08E1\u08E4" +
        "\x03\x02\x02\x02\u08E2\u08E0\x03\x02\x02\x02\u08E2\u08E3\x03\x02\x02\x02" +
        "\u08E3\u08E5\x03\x02\x02\x02\u08E4\u08E2\x03\x02\x02\x02\u08E5\u08E6\x05" +
        "\u0120\x91\x02\u08E6\u08E7\x07\x1B\x02\x02\u08E7\u08E8\x05b2\x02\u08E8" +
        "\u08EC\x07\f\x02\x02\u08E9\u08EB\x07\x07\x02\x02\u08EA\u08E9\x03\x02\x02" +
        "\x02\u08EB\u08EE\x03\x02\x02\x02\u08EC\u08EA\x03\x02\x02\x02\u08EC\u08ED" +
        "\x03\x02\x02\x02\u08ED\u08EF\x03\x02\x02\x02\u08EE\u08EC\x03\x02\x02\x02" +
        "\u08EF\u08F0\x05l7\x02\u08F0\xD7\x03\x02\x02\x02\u08F1\u08F5\x07Q\x02" +
        "\x02\u08F2\u08F4\x07\x07\x02\x02\u08F3\u08F2\x03\x02\x02\x02\u08F4\u08F7" +
        "\x03\x02\x02\x02\u08F5\u08F3\x03\x02\x02\x02\u08F5\u08F6\x03\x02\x02\x02" +
        "\u08F6\u08F8\x03\x02\x02\x02\u08F7\u08F5\x03\x02\x02\x02\u08F8\u08F9\x05" +
        "l7\x02\u08F9\xD9\x03\x02\x02\x02\u08FA\u08FE\x05\xDCo\x02\u08FB\u08FE" +
        "\x05\xDEp\x02\u08FC\u08FE\x05\xE0q\x02\u08FD\u08FA\x03\x02\x02\x02\u08FD" +
        "\u08FB\x03\x02\x02\x02\u08FD\u08FC\x03\x02\x02\x02\u08FE\xDB\x03\x02\x02" +
        "\x02\u08FF\u0903\x07R\x02\x02\u0900\u0902\x07\x07\x02\x02\u0901\u0900" +
        "\x03\x02\x02\x02\u0902\u0905\x03\x02\x02\x02\u0903\u0901\x03\x02\x02\x02" +
        "\u0903\u0904\x03\x02\x02\x02\u0904\u0906\x03\x02\x02\x02\u0905\u0903\x03" +
        "\x02\x02\x02\u0906\u090A\x07\v\x02\x02\u0907\u0909\x05\u0114\x8B\x02\u0908" +
        "\u0907\x03\x02\x02\x02\u0909\u090C\x03\x02\x02\x02\u090A\u0908\x03\x02" +
        "\x02\x02\u090A\u090B\x03\x02\x02\x02\u090B\u090F\x03\x02\x02\x02\u090C" +
        "\u090A\x03\x02\x02\x02\u090D\u0910\x05H%\x02\u090E\u0910\x05F$\x02\u090F" +
        "\u090D\x03\x02\x02\x02\u090F\u090E\x03\x02\x02\x02\u0910\u0911\x03\x02" +
        "\x02\x02\u0911\u0912\x07[\x02\x02\u0912\u0913\x05v<\x02\u0913\u0917\x07" +
        "\f\x02\x02\u0914\u0916\x07\x07\x02\x02\u0915\u0914\x03\x02\x02\x02\u0916" +
        "\u0919\x03\x02\x02\x02\u0917\u0915\x03\x02\x02\x02\u0917\u0918\x03\x02" +
        "\x02\x02\u0918\u091B\x03\x02\x02\x02\u0919\u0917\x03\x02\x02\x02\u091A" +
        "\u091C\x05\xC8e\x02\u091B\u091A\x03\x02\x02\x02\u091B\u091C\x03\x02\x02" +
        "\x02\u091C\xDD\x03\x02\x02\x02\u091D\u0921\x07T\x02\x02\u091E\u0920\x07" +
        "\x07\x02\x02\u091F\u091E\x03\x02\x02\x02\u0920\u0923\x03\x02\x02\x02\u0921" +
        "\u091F\x03\x02\x02\x02\u0921\u0922\x03\x02\x02\x02\u0922\u0924\x03\x02" +
        "\x02\x02\u0923\u0921\x03\x02\x02\x02\u0924\u0925\x07\v\x02\x02\u0925\u0926" +
        "\x05v<\x02\u0926\u092A\x07\f\x02\x02\u0927\u0929\x07\x07\x02\x02\u0928" +
        "\u0927\x03\x02\x02\x02\u0929\u092C\x03\x02\x02\x02\u092A\u0928\x03\x02" +
        "\x02\x02\u092A\u092B\x03\x02\x02\x02\u092B\u092E\x03\x02\x02\x02\u092C" +
        "\u092A\x03\x02\x02\x02\u092D\u092F\x05\xC8e\x02\u092E\u092D\x03\x02\x02" +
        "\x02\u092E\u092F\x03\x02\x02\x02\u092F\xDF\x03\x02\x02\x02\u0930\u0934" +
        "\x07S\x02\x02\u0931\u0933\x07\x07\x02\x02\u0932\u0931\x03\x02\x02\x02" +
        "\u0933\u0936\x03\x02\x02\x02\u0934\u0932\x03\x02\x02\x02\u0934\u0935\x03" +
        "\x02\x02\x02\u0935\u0938\x03\x02\x02\x02\u0936\u0934\x03\x02\x02\x02\u0937" +
        "\u0939\x05\xC8e\x02\u0938\u0937\x03\x02\x02\x02\u0938\u0939\x03\x02\x02" +
        "\x02\u0939\u093D\x03\x02\x02\x02\u093A\u093C\x07\x07\x02\x02\u093B\u093A" +
        "\x03\x02\x02\x02\u093C\u093F\x03\x02\x02\x02\u093D\u093B\x03\x02\x02\x02" +
        "\u093D\u093E\x03\x02\x02\x02\u093E\u0940\x03\x02\x02\x02\u093F\u093D\x03" +
        "\x02\x02\x02\u0940\u0944\x07T\x02\x02\u0941\u0943\x07\x07\x02\x02\u0942" +
        "\u0941\x03\x02\x02\x02\u0943\u0946\x03\x02\x02\x02\u0944\u0942\x03\x02" +
        "\x02\x02\u0944\u0945\x03\x02\x02\x02\u0945\u0947\x03\x02\x02\x02\u0946" +
        "\u0944\x03\x02\x02\x02\u0947\u0948\x07\v\x02\x02\u0948\u0949\x05v<\x02" +
        "\u0949\u094A\x07\f\x02\x02\u094A\xE1\x03\x02\x02\x02\u094B\u094F\x07U" +
        "\x02\x02\u094C\u094E\x07\x07\x02\x02\u094D\u094C\x03\x02\x02\x02\u094E" +
        "\u0951\x03\x02\x02\x02\u094F\u094D\x03\x02\x02\x02\u094F\u0950\x03\x02" +
        "\x02\x02\u0950\u0952\x03\x02\x02\x02\u0951\u094F\x03\x02\x02\x02\u0952" +
        "\u095C\x05v<\x02\u0953\u0955\t\x07\x02\x02\u0954\u0956\x05v<\x02\u0955" +
        "\u0954\x03\x02\x02\x02\u0955\u0956\x03\x02\x02\x02\u0956\u095C\x03\x02" +
        "\x02\x02\u0957\u095C\x07W\x02\x02\u0958\u095C\x078\x02\x02\u0959\u095C" +
        "\x07X\x02\x02\u095A\u095C\x079\x02\x02\u095B\u094B\x03\x02\x02\x02\u095B" +
        "\u0953\x03\x02\x02\x02\u095B\u0957\x03\x02\x02\x02\u095B\u0958\x03\x02" +
        "\x02\x02\u095B\u0959\x03\x02\x02\x02\u095B\u095A\x03\x02\x02\x02\u095C" +
        "\xE3\x03\x02\x02\x02\u095D\u0967\x05b2\x02\u095E\u0962\x07+\x02\x02\u095F" +
        "\u0961\x07\x07\x02\x02\u0960\u095F\x03\x02\x02\x02\u0961\u0964\x03\x02" +
        "\x02\x02\u0962\u0960\x03\x02\x02\x02\u0962\u0963\x03\x02\x02\x02\u0963" +
        "\u0966\x03\x02\x02\x02\u0964\u0962\x03\x02\x02\x02\u0965\u095E\x03\x02" +
        "\x02\x02\u0966\u0969\x03\x02\x02\x02\u0967\u0965\x03\x02\x02\x02\u0967" +
        "\u0968\x03\x02\x02\x02\u0968\u096B\x03\x02\x02\x02\u0969\u0967\x03\x02" +
        "\x02\x02\u096A\u095D\x03\x02\x02\x02\u096A\u096B\x03\x02\x02\x02\u096B" +
        "\u096F\x03\x02\x02\x02\u096C\u096E\x07\x07\x02\x02\u096D\u096C\x03\x02" +
        "\x02\x02\u096E\u0971\x03\x02\x02\x02\u096F\u096D\x03\x02\x02\x02\u096F" +
        "\u0970\x03\x02\x02\x02\u0970\u0972\x03\x02\x02\x02\u0971\u096F\x03\x02" +
        "\x02\x02\u0972\u0976\t\b\x02\x02\u0973\u0975\x07\x07\x02\x02\u0974\u0973" +
        "\x03\x02\x02\x02\u0975\u0978\x03\x02\x02\x02\u0976\u0974\x03\x02\x02\x02" +
        "\u0976\u0977\x03\x02\x02\x02\u0977\u097B\x03\x02\x02\x02\u0978\u0976\x03" +
        "\x02\x02\x02\u0979\u097C\x05\u011E\x90\x02\u097A\u097C\x07=\x02\x02\u097B" +
        "\u0979\x03\x02\x02\x02\u097B\u097A\x03\x02\x02\x02\u097C\xE5\x03\x02\x02" +
        "\x02\u097D\u097E\t\t\x02\x02\u097E\xE7\x03\x02\x02\x02\u097F\u0980\t\n" +
        "\x02\x02\u0980\xE9\x03\x02\x02\x02\u0981\u0982\t\v\x02\x02\u0982\xEB\x03" +
        "\x02\x02\x02\u0983\u0984\t\f\x02\x02\u0984\xED\x03\x02\x02\x02\u0985\u0986" +
        "\t\r\x02\x02\u0986\xEF\x03\x02\x02\x02\u0987\u0988\t\x0E\x02\x02\u0988" +
        "\xF1\x03\x02\x02\x02\u0989\u098A\t\x0F\x02\x02\u098A\xF3\x03\x02\x02\x02" +
        "\u098B\u098C\t\x10\x02\x02\u098C\xF5\x03\x02\x02\x02\u098D\u0995\x07\x16" +
        "\x02\x02\u098E\u0995\x07\x17\x02\x02\u098F\u0995\x07\x14\x02\x02\u0990" +
        "\u0995\x07\x15\x02\x02\u0991\u0995\x07\x1A\x02\x02\u0992\u0995\x05\u0114" +
        "\x8B\x02\u0993\u0995\x05\u0112\x8A\x02\u0994\u098D\x03\x02\x02\x02\u0994" +
        "\u098E\x03\x02\x02\x02\u0994\u098F\x03\x02\x02\x02\u0994\u0990\x03\x02" +
        "\x02\x02\u0994\u0991\x03\x02\x02\x02\u0994\u0992\x03\x02\x02\x02\u0994" +
        "\u0993\x03\x02\x02\x02\u0995\xF7\x03\x02\x02\x02\u0996\u09A6\x07\x16\x02" +
        "\x02\u0997\u09A6\x07\x17\x02\x02\u0998\u0999\x07\x1A\x02\x02\u0999\u09A6" +
        "\x07\x1A\x02\x02\u099A\u09A6\x05\x96L\x02\u099B\u09A6\x05\x9AN\x02\u099C" +
        "\u099E\x07\x07\x02\x02\u099D\u099C\x03\x02\x02\x02\u099E\u09A1\x03\x02" +
        "\x02\x02\u099F\u099D\x03\x02\x02\x02\u099F\u09A0\x03\x02\x02\x02\u09A0" +
        "\u09A2\x03\x02\x02\x02\u09A1\u099F\x03\x02\x02\x02\u09A2\u09A3\x05\xFA" +
        "~\x02\u09A3\u09A4\x05\x90I\x02\u09A4\u09A6\x03\x02\x02\x02\u09A5\u0996" +
        "\x03\x02\x02\x02\u09A5\u0997\x03\x02\x02\x02\u09A5\u0998\x03\x02\x02\x02" +
        "\u09A5\u099A\x03\x02\x02\x02\u09A5\u099B\x03\x02\x02\x02\u09A5\u099F\x03" +
        "\x02\x02\x02\u09A6\xF9\x03\x02\x02\x02\u09A7\u09AB\x07\t\x02\x02\u09A8" +
        "\u09A9\x07+\x02\x02\u09A9\u09AB\x07\t\x02\x02\u09AA\u09A7\x03\x02\x02" +
        "\x02\u09AA\u09A8\x03\x02\x02\x02\u09AB\xFB\x03\x02\x02\x02\u09AC\u09AF" +
        "\x05\u0114\x8B\x02\u09AD\u09AF\x05\xFE\x80\x02\u09AE\u09AC\x03\x02\x02" +
        "\x02\u09AE\u09AD\x03\x02\x02\x02\u09AF\u09B0\x03\x02\x02\x02\u09B0\u09AE" +
        "\x03\x02\x02\x02\u09B0\u09B1\x03\x02\x02\x02\u09B1\xFD\x03\x02\x02\x02" +
        "\u09B2\u09BC\x05\u0100\x81\x02\u09B3\u09BC\x05\u0102\x82\x02\u09B4\u09BC" +
        "\x05\u0104\x83\x02\u09B5\u09BC\x05\u0106\x84\x02\u09B6\u09BC\x05\u0108" +
        "\x85\x02\u09B7\u09BC\x05\u010A\x86\x02\u09B8\u09BC\x05\u010C\x87\x02\u09B9" +
        "\u09BC\x05\u010E\x88\x02\u09BA\u09BC\x05\u0110\x89\x02\u09BB\u09B2\x03" +
        "\x02\x02\x02\u09BB\u09B3\x03\x02\x02\x02\u09BB\u09B4\x03\x02\x02\x02\u09BB" +
        "\u09B5\x03\x02\x02\x02\u09BB\u09B6\x03\x02\x02\x02\u09BB\u09B7\x03\x02" +
        "\x02\x02\u09BB\u09B8\x03\x02\x02\x02\u09BB\u09B9\x03\x02\x02\x02\u09BB" +
        "\u09BA\x03\x02\x02\x02\u09BC\u09C0\x03\x02\x02\x02\u09BD\u09BF\x07\x07" +
        "\x02\x02\u09BE\u09BD\x03\x02\x02\x02\u09BF\u09C2\x03\x02\x02\x02\u09C0" +
        "\u09BE\x03\x02\x02\x02\u09C0\u09C1\x03\x02\x02\x02\u09C1\xFF\x03\x02\x02" +
        "\x02\u09C2\u09C0\x03\x02\x02\x02\u09C3\u09C4\t\x11\x02\x02\u09C4\u0101" +
        "\x03\x02\x02\x02\u09C5\u09C6\t\x12\x02\x02\u09C6\u0103\x03\x02\x02\x02" +
        "\u09C7\u09C8\t\x13\x02\x02\u09C8\u0105\x03\x02\x02\x02\u09C9\u09CA\t\x14" +
        "\x02\x02\u09CA\u0107\x03\x02\x02\x02\u09CB\u09CC\t\x15\x02\x02\u09CC\u0109" +
        "\x03\x02\x02\x02\u09CD\u09CE\x07}\x02\x02\u09CE\u010B\x03\x02\x02\x02" +
        "\u09CF\u09D0\t\x16\x02\x02\u09D0\u010D\x03\x02\x02\x02\u09D1\u09D2\t\x17" +
        "\x02\x02\u09D2\u010F\x03\x02\x02\x02\u09D3\u09D4\x07\x82\x02\x02\u09D4" +
        "\u0111\x03\x02\x02\x02\u09D5\u09D9\x07\x90\x02\x02\u09D6\u09D8\x07\x07" +
        "\x02\x02\u09D7\u09D6\x03\x02\x02\x02\u09D8\u09DB\x03\x02\x02\x02\u09D9" +
        "\u09D7\x03\x02\x02\x02\u09D9\u09DA\x03\x02\x02\x02\u09DA\u0113\x03\x02" +
        "\x02\x02\u09DB\u09D9\x03\x02\x02\x02\u09DC\u09DF\x05\u0116\x8C\x02\u09DD" +
        "\u09DF\x05\u0118\x8D\x02\u09DE\u09DC\x03\x02\x02\x02\u09DE\u09DD\x03\x02" +
        "\x02\x02\u09DF\u09E3\x03\x02\x02\x02\u09E0\u09E2\x07\x07\x02\x02\u09E1" +
        "\u09E0\x03\x02\x02\x02\u09E2\u09E5\x03\x02\x02\x02\u09E3\u09E1\x03\x02" +
        "\x02\x02\u09E3\u09E4\x03\x02\x02\x02\u09E4\u0115\x03\x02\x02\x02\u09E5" +
        "\u09E3\x03\x02\x02\x02\u09E6\u09EA\x05\u011A\x8E\x02\u09E7\u09E9\x07\x07" +
        "\x02\x02\u09E8\u09E7\x03\x02\x02\x02\u09E9\u09EC\x03\x02\x02\x02\u09EA" +
        "\u09E8\x03\x02\x02\x02\u09EA\u09EB\x03\x02\x02\x02\u09EB\u09ED\x03\x02" +
        "\x02\x02\u09EC\u09EA\x03\x02\x02\x02\u09ED\u09F1\x07\x1B\x02\x02\u09EE" +
        "\u09F0\x07\x07\x02\x02\u09EF\u09EE\x03\x02\x02\x02\u09F0\u09F3\x03\x02" +
        "\x02\x02\u09F1\u09EF\x03\x02\x02\x02\u09F1\u09F2\x03\x02\x02\x02\u09F2" +
        "\u09F4\x03\x02\x02\x02\u09F3\u09F1\x03\x02\x02\x02\u09F4\u09F5\x05\u011C" +
        "\x8F\x02\u09F5\u0A0A\x03\x02\x02\x02\u09F6\u09FE\x07\x8F\x02\x02\u09F7" +
        "\u09F9\x07\x07\x02\x02\u09F8\u09F7\x03\x02\x02\x02\u09F9\u09FC\x03\x02" +
        "\x02\x02\u09FA\u09F8\x03\x02\x02\x02\u09FA\u09FB\x03\x02\x02\x02\u09FB" +
        "\u09FD\x03\x02\x02\x02\u09FC\u09FA\x03\x02\x02\x02\u09FD\u09FF\x05\x9E" +
        "P\x02\u09FE\u09FA\x03\x02\x02\x02\u09FE\u09FF\x03\x02\x02\x02\u09FF\u0A07" +
        "\x03\x02\x02\x02\u0A00\u0A02\x07\x07\x02\x02\u0A01\u0A00\x03\x02\x02\x02" +
        "\u0A02\u0A05\x03\x02\x02\x02\u0A03\u0A01\x03\x02\x02\x02\u0A03\u0A04\x03" +
        "\x02\x02\x02\u0A04\u0A06\x03\x02\x02\x02\u0A05\u0A03\x03\x02\x02\x02\u0A06" +
        "\u0A08\x05\x9CO\x02\u0A07\u0A03\x03\x02\x02\x02\u0A07\u0A08\x03\x02\x02" +
        "\x02\u0A08\u0A0A\x03\x02\x02\x02\u0A09\u09E6\x03\x02\x02\x02\u0A09\u09F6" +
        "\x03\x02\x02\x02\u0A0A\u0117\x03\x02\x02\x02\u0A0B\u0A0C\x05\u011A\x8E" +
        "\x02\u0A0C\u0A0D\x07\x1B\x02\x02\u0A0D\u0A0F\x07\r\x02\x02\u0A0E\u0A10" +
        "\x05\u011C\x8F\x02\u0A0F\u0A0E\x03\x02\x02\x02\u0A10\u0A11\x03\x02\x02" +
        "\x02\u0A11\u0A0F\x03\x02\x02\x02\u0A11\u0A12\x03\x02\x02\x02\u0A12\u0A13" +
        "\x03\x02\x02\x02\u0A13\u0A14\x07\x0E\x02\x02\u0A14\u0A1F\x03\x02\x02\x02" +
        "\u0A15\u0A16\x07*\x02\x02\u0A16\u0A18\x07\r\x02\x02\u0A17\u0A19\x05\u011C" +
        "\x8F\x02\u0A18\u0A17\x03\x02\x02\x02\u0A19\u0A1A\x03\x02\x02\x02\u0A1A" +
        "\u0A18\x03\x02\x02\x02\u0A1A\u0A1B\x03\x02\x02\x02\u0A1B\u0A1C\x03\x02" +
        "\x02\x02\u0A1C\u0A1D\x07\x0E\x02\x02\u0A1D\u0A1F\x03\x02\x02\x02\u0A1E" +
        "\u0A0B\x03\x02\x02\x02\u0A1E\u0A15\x03\x02\x02\x02\u0A1F\u0119\x03\x02" +
        "\x02\x02\u0A20\u0A21\t\x18\x02\x02\u0A21\u011B\x03\x02\x02\x02\u0A22\u0A24" +
        "\x05\u011E\x90\x02\u0A23\u0A25\x05\x9EP\x02\u0A24\u0A23\x03\x02\x02\x02" +
        "\u0A24\u0A25\x03\x02\x02\x02\u0A25\u0A27\x03\x02\x02\x02\u0A26\u0A28\x05" +
        "\x9CO\x02\u0A27\u0A26\x03\x02\x02\x02\u0A27\u0A28\x03\x02\x02\x02\u0A28" +
        "\u011D\x03\x02\x02\x02\u0A29\u0A34\x05\u0120\x91\x02\u0A2A\u0A2C\x07\x07" +
        "\x02\x02\u0A2B\u0A2A\x03\x02\x02\x02\u0A2C\u0A2F\x03\x02\x02\x02\u0A2D" +
        "\u0A2B\x03\x02\x02\x02\u0A2D\u0A2E\x03\x02\x02\x02\u0A2E\u0A30\x03\x02" +
        "\x02\x02\u0A2F\u0A2D\x03\x02\x02\x02\u0A30\u0A31\x07\t\x02\x02\u0A31\u0A33" +
        "\x05\u0120\x91\x02\u0A32\u0A2D\x03\x02\x02\x02\u0A33\u0A36\x03\x02\x02" +
        "\x02\u0A34\u0A32\x03\x02\x02\x02\u0A34\u0A35\x03\x02\x02\x02\u0A35\u011F" +
        "\x03\x02\x02\x02\u0A36\u0A34\x03\x02\x02\x02\u0A37\u0A38\t\x19\x02\x02" +
        "\u0A38\u0121\x03\x02\x02\x02\u0A39\u0A3B\x07\x07\x02\x02\u0A3A\u0A39\x03" +
        "\x02\x02\x02\u0A3B\u0A3C\x03\x02\x02\x02\u0A3C\u0A3A\x03\x02\x02\x02\u0A3C" +
        "\u0A3D\x03\x02\x02\x02\u0A3D\u0A4C\x03\x02\x02\x02\u0A3E\u0A40\x07\x07" +
        "\x02\x02\u0A3F\u0A3E\x03\x02\x02\x02\u0A40\u0A43\x03\x02\x02\x02\u0A41" +
        "\u0A3F\x03\x02\x02\x02\u0A41\u0A42\x03\x02\x02\x02\u0A42\u0A44\x03\x02" +
        "\x02\x02\u0A43\u0A41\x03\x02\x02\x02\u0A44\u0A48\x07\x1C\x02\x02\u0A45" +
        "\u0A47\x07\x07\x02\x02\u0A46\u0A45\x03\x02\x02\x02\u0A47\u0A4A\x03\x02" +
        "\x02\x02\u0A48\u0A46\x03\x02\x02\x02\u0A48\u0A49\x03\x02\x02\x02\u0A49" +
        "\u0A4C\x03\x02\x02\x02\u0A4A\u0A48\x03\x02\x02\x02\u0A4B\u0A3A\x03\x02" +
        "\x02\x02\u0A4B\u0A41\x03\x02\x02\x02\u0A4C\u0123\x03\x02\x02\x02\u0A4D" +
        "\u0A4E\t\x1A\x02\x02\u0A4E\u0125\x03\x02\x02\x02\u018E\u0129\u0130\u0137" +
        "\u013A\u013E\u0141\u0148\u014F\u0156\u0159\u015D\u0160\u0165\u016D\u0175" +
        "\u017A\u017D\u0181\u0184\u0189\u018B\u0190\u0198\u019B\u01A5\u01A8\u01AE" +
        "\u01B5\u01B9\u01BE\u01C2\u01C7\u01CE\u01D2\u01D7\u01DB\u01E0\u01E7\u01EB" +
        "\u01EE\u01F4\u01F7\u0201\u0204\u0209\u020C\u0213\u0218\u021F\u0226\u022C" +
        "\u0232\u023B\u0242\u024B\u0251\u0257\u0264\u0269\u0270\u0276\u027C\u0283" +
        "\u028A\u028E\u0293\u029C\u02A4\u02A8\u02AE\u02B2\u02B7\u02BE\u02C4\u02C7" +
        "\u02CC\u02D5\u02DA\u02DD\u02E3\u02E7\u02EC\u02F0\u02F5\u02F9\u02FC\u0302" +
        "\u0309\u030E\u0313\u0317\u031C\u0320\u0325\u032C\u0333\u0337\u033C\u0340" +
        "\u0345\u0349\u0351\u0354\u0359\u035E\u0369\u036D\u0370\u0376\u037D\u0381" +
        "\u0386\u038D\u0391\u0396\u039A\u039D\u03A3\u03A7\u03AD\u03B1\u03B6\u03BD" +
        "\u03C1\u03C6\u03CA\u03CD\u03D3\u03D7\u03DC\u03E3\u03E8\u03ED\u03F2\u03F7" +
        "\u03FB\u0400\u0407\u040B\u0411\u0417\u0419\u0421\u0429\u042C\u0430\u0436" +
        "\u043E\u0445\u0449\u044E\u0456\u045A\u045C\u045F\u0463\u0469\u046F\u0471" +
        "\u0476\u047C\u0481\u0484\u048A\u0491\u0495\u049A\u04A1\u04AA\u04B1\u04B8" +
        "\u04BE\u04C4\u04CA\u04CF\u04D6\u04DD\u04E1\u04E4\u04EA\u04F1\u04F4\u04F6" +
        "\u04FE\u0503\u0509\u0511\u0517\u051E\u0521\u0527\u052E\u0536\u053C\u0543" +
        "\u0549\u0550\u0554\u0559\u055E\u0562\u056B\u0572\u0579\u057F\u0585\u058C" +
        "\u0593\u059F\u05A6\u05A9\u05AD\u05B0\u05B4\u05B9\u05BF\u05C7\u05CE\u05D6" +
        "\u05DD\u05E4\u05EA\u05F1\u05F8\u05FE\u0606\u060D\u0615\u061A\u0621\u0628" +
        "\u062E\u0633\u0639\u0640\u0646\u064E\u0655\u065D\u0663\u066B\u0672\u067A" +
        "\u0681\u0688\u0690\u0696\u069D\u06A2\u06B1\u06B9\u06BE\u06C5\u06CB\u06CD" +
        "\u06D2\u06D6\u06DB\u06E6\u06E9\u06F3\u06F6\u06FE\u0705\u070C\u0712\u0718" +
        "\u071C\u0721\u0727\u072E\u0731\u0734\u0739\u0747\u074B\u0750\u0752\u075C" +
        "\u075E\u0772\u0779\u0780\u0789\u0790\u0797\u079E\u07A3\u07A6\u07AB\u07B2" +
        "\u07B8\u07C0\u07C7\u07CB\u07CD\u07D3\u07DA\u07DE\u07E3\u07EA\u07F0\u07F7" +
        "\u07FE\u0805\u080A\u080D\u0811\u0817\u0820\u0824\u0827\u082C\u0833\u0837" +
        "\u0839\u083D\u0843\u084A\u084F\u0856\u085D\u0862\u0868\u0871\u0878\u087E" +
        "\u0884\u088B\u0890\u0896\u089D\u08A1\u08A6\u08AC\u08B5\u08BE\u08C5\u08CB" +
        "\u08D1\u08D5\u08DB\u08E2\u08EC\u08F5\u08FD\u0903\u090A\u090F\u0917\u091B" +
        "\u0921\u092A\u092E\u0934\u0938\u093D\u0944\u094F\u0955\u095B\u0962\u0967" +
        "\u096A\u096F\u0976\u097B\u0994\u099F\u09A5\u09AA\u09AE\u09B0\u09BB\u09C0" +
        "\u09D9\u09DE\u09E3\u09EA\u09F1\u09FA\u09FE\u0A03\u0A07\u0A09\u0A11\u0A1A" +
        "\u0A1E\u0A24\u0A27\u0A2D\u0A34\u0A3C\u0A41\u0A48\u0A4B";
    KotlinParser._serializedATN = Utils.join([
        KotlinParser._serializedATNSegment0,
        KotlinParser._serializedATNSegment1,
        KotlinParser._serializedATNSegment2,
        KotlinParser._serializedATNSegment3,
        KotlinParser._serializedATNSegment4,
    ], "");
    return KotlinParser;
}(Parser_1.Parser));
exports.KotlinParser = KotlinParser;
var KotlinFileContext = /** @class */ (function (_super) {
    __extends(KotlinFileContext, _super);
    function KotlinFileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KotlinFileContext.prototype.preamble = function () {
        return this.getRuleContext(0, PreambleContext);
    };
    KotlinFileContext.prototype.EOF = function () { return this.getToken(KotlinParser.EOF, 0); };
    KotlinFileContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    KotlinFileContext.prototype.anysemi = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnysemiContext);
        }
        else {
            return this.getRuleContext(i, AnysemiContext);
        }
    };
    KotlinFileContext.prototype.topLevelObject = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TopLevelObjectContext);
        }
        else {
            return this.getRuleContext(i, TopLevelObjectContext);
        }
    };
    Object.defineProperty(KotlinFileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_kotlinFile; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KotlinFileContext.prototype.enterRule = function (listener) {
        if (listener.enterKotlinFile) {
            listener.enterKotlinFile(this);
        }
    };
    // @Override
    KotlinFileContext.prototype.exitRule = function (listener) {
        if (listener.exitKotlinFile) {
            listener.exitKotlinFile(this);
        }
    };
    // @Override
    KotlinFileContext.prototype.accept = function (visitor) {
        if (visitor.visitKotlinFile) {
            return visitor.visitKotlinFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KotlinFileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KotlinFileContext = KotlinFileContext;
var ScriptContext = /** @class */ (function (_super) {
    __extends(ScriptContext, _super);
    function ScriptContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScriptContext.prototype.preamble = function () {
        return this.getRuleContext(0, PreambleContext);
    };
    ScriptContext.prototype.EOF = function () { return this.getToken(KotlinParser.EOF, 0); };
    ScriptContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    ScriptContext.prototype.anysemi = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnysemiContext);
        }
        else {
            return this.getRuleContext(i, AnysemiContext);
        }
    };
    ScriptContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ScriptContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_script; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScriptContext.prototype.enterRule = function (listener) {
        if (listener.enterScript) {
            listener.enterScript(this);
        }
    };
    // @Override
    ScriptContext.prototype.exitRule = function (listener) {
        if (listener.exitScript) {
            listener.exitScript(this);
        }
    };
    // @Override
    ScriptContext.prototype.accept = function (visitor) {
        if (visitor.visitScript) {
            return visitor.visitScript(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScriptContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScriptContext = ScriptContext;
var PreambleContext = /** @class */ (function (_super) {
    __extends(PreambleContext, _super);
    function PreambleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PreambleContext.prototype.packageHeader = function () {
        return this.getRuleContext(0, PackageHeaderContext);
    };
    PreambleContext.prototype.importList = function () {
        return this.getRuleContext(0, ImportListContext);
    };
    PreambleContext.prototype.fileAnnotations = function () {
        return this.tryGetRuleContext(0, FileAnnotationsContext);
    };
    Object.defineProperty(PreambleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_preamble; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PreambleContext.prototype.enterRule = function (listener) {
        if (listener.enterPreamble) {
            listener.enterPreamble(this);
        }
    };
    // @Override
    PreambleContext.prototype.exitRule = function (listener) {
        if (listener.exitPreamble) {
            listener.exitPreamble(this);
        }
    };
    // @Override
    PreambleContext.prototype.accept = function (visitor) {
        if (visitor.visitPreamble) {
            return visitor.visitPreamble(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreambleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PreambleContext = PreambleContext;
var FileAnnotationsContext = /** @class */ (function (_super) {
    __extends(FileAnnotationsContext, _super);
    function FileAnnotationsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FileAnnotationsContext.prototype.fileAnnotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FileAnnotationContext);
        }
        else {
            return this.getRuleContext(i, FileAnnotationContext);
        }
    };
    Object.defineProperty(FileAnnotationsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_fileAnnotations; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FileAnnotationsContext.prototype.enterRule = function (listener) {
        if (listener.enterFileAnnotations) {
            listener.enterFileAnnotations(this);
        }
    };
    // @Override
    FileAnnotationsContext.prototype.exitRule = function (listener) {
        if (listener.exitFileAnnotations) {
            listener.exitFileAnnotations(this);
        }
    };
    // @Override
    FileAnnotationsContext.prototype.accept = function (visitor) {
        if (visitor.visitFileAnnotations) {
            return visitor.visitFileAnnotations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FileAnnotationsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FileAnnotationsContext = FileAnnotationsContext;
var FileAnnotationContext = /** @class */ (function (_super) {
    __extends(FileAnnotationContext, _super);
    function FileAnnotationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FileAnnotationContext.prototype.FILE = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.FILE);
        }
        else {
            return this.getToken(KotlinParser.FILE, i);
        }
    };
    FileAnnotationContext.prototype.COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COLON);
        }
        else {
            return this.getToken(KotlinParser.COLON, i);
        }
    };
    FileAnnotationContext.prototype.LSQUARE = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.LSQUARE);
        }
        else {
            return this.getToken(KotlinParser.LSQUARE, i);
        }
    };
    FileAnnotationContext.prototype.RSQUARE = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.RSQUARE);
        }
        else {
            return this.getToken(KotlinParser.RSQUARE, i);
        }
    };
    FileAnnotationContext.prototype.unescapedAnnotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UnescapedAnnotationContext);
        }
        else {
            return this.getRuleContext(i, UnescapedAnnotationContext);
        }
    };
    FileAnnotationContext.prototype.semi = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SemiContext);
        }
        else {
            return this.getRuleContext(i, SemiContext);
        }
    };
    Object.defineProperty(FileAnnotationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_fileAnnotation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FileAnnotationContext.prototype.enterRule = function (listener) {
        if (listener.enterFileAnnotation) {
            listener.enterFileAnnotation(this);
        }
    };
    // @Override
    FileAnnotationContext.prototype.exitRule = function (listener) {
        if (listener.exitFileAnnotation) {
            listener.exitFileAnnotation(this);
        }
    };
    // @Override
    FileAnnotationContext.prototype.accept = function (visitor) {
        if (visitor.visitFileAnnotation) {
            return visitor.visitFileAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FileAnnotationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FileAnnotationContext = FileAnnotationContext;
var PackageHeaderContext = /** @class */ (function (_super) {
    __extends(PackageHeaderContext, _super);
    function PackageHeaderContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PackageHeaderContext.prototype.PACKAGE = function () { return this.tryGetToken(KotlinParser.PACKAGE, 0); };
    PackageHeaderContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    PackageHeaderContext.prototype.modifierList = function () {
        return this.tryGetRuleContext(0, ModifierListContext);
    };
    PackageHeaderContext.prototype.semi = function () {
        return this.tryGetRuleContext(0, SemiContext);
    };
    Object.defineProperty(PackageHeaderContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_packageHeader; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PackageHeaderContext.prototype.enterRule = function (listener) {
        if (listener.enterPackageHeader) {
            listener.enterPackageHeader(this);
        }
    };
    // @Override
    PackageHeaderContext.prototype.exitRule = function (listener) {
        if (listener.exitPackageHeader) {
            listener.exitPackageHeader(this);
        }
    };
    // @Override
    PackageHeaderContext.prototype.accept = function (visitor) {
        if (visitor.visitPackageHeader) {
            return visitor.visitPackageHeader(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PackageHeaderContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PackageHeaderContext = PackageHeaderContext;
var ImportListContext = /** @class */ (function (_super) {
    __extends(ImportListContext, _super);
    function ImportListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportListContext.prototype.importHeader = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportHeaderContext);
        }
        else {
            return this.getRuleContext(i, ImportHeaderContext);
        }
    };
    Object.defineProperty(ImportListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_importList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportListContext.prototype.enterRule = function (listener) {
        if (listener.enterImportList) {
            listener.enterImportList(this);
        }
    };
    // @Override
    ImportListContext.prototype.exitRule = function (listener) {
        if (listener.exitImportList) {
            listener.exitImportList(this);
        }
    };
    // @Override
    ImportListContext.prototype.accept = function (visitor) {
        if (visitor.visitImportList) {
            return visitor.visitImportList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportListContext = ImportListContext;
var ImportHeaderContext = /** @class */ (function (_super) {
    __extends(ImportHeaderContext, _super);
    function ImportHeaderContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportHeaderContext.prototype.IMPORT = function () { return this.getToken(KotlinParser.IMPORT, 0); };
    ImportHeaderContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    ImportHeaderContext.prototype.DOT = function () { return this.tryGetToken(KotlinParser.DOT, 0); };
    ImportHeaderContext.prototype.MULT = function () { return this.tryGetToken(KotlinParser.MULT, 0); };
    ImportHeaderContext.prototype.importAlias = function () {
        return this.tryGetRuleContext(0, ImportAliasContext);
    };
    ImportHeaderContext.prototype.semi = function () {
        return this.tryGetRuleContext(0, SemiContext);
    };
    Object.defineProperty(ImportHeaderContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_importHeader; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportHeaderContext.prototype.enterRule = function (listener) {
        if (listener.enterImportHeader) {
            listener.enterImportHeader(this);
        }
    };
    // @Override
    ImportHeaderContext.prototype.exitRule = function (listener) {
        if (listener.exitImportHeader) {
            listener.exitImportHeader(this);
        }
    };
    // @Override
    ImportHeaderContext.prototype.accept = function (visitor) {
        if (visitor.visitImportHeader) {
            return visitor.visitImportHeader(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportHeaderContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportHeaderContext = ImportHeaderContext;
var ImportAliasContext = /** @class */ (function (_super) {
    __extends(ImportAliasContext, _super);
    function ImportAliasContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportAliasContext.prototype.AS = function () { return this.getToken(KotlinParser.AS, 0); };
    ImportAliasContext.prototype.simpleIdentifier = function () {
        return this.getRuleContext(0, SimpleIdentifierContext);
    };
    Object.defineProperty(ImportAliasContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_importAlias; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportAliasContext.prototype.enterRule = function (listener) {
        if (listener.enterImportAlias) {
            listener.enterImportAlias(this);
        }
    };
    // @Override
    ImportAliasContext.prototype.exitRule = function (listener) {
        if (listener.exitImportAlias) {
            listener.exitImportAlias(this);
        }
    };
    // @Override
    ImportAliasContext.prototype.accept = function (visitor) {
        if (visitor.visitImportAlias) {
            return visitor.visitImportAlias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportAliasContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportAliasContext = ImportAliasContext;
var TopLevelObjectContext = /** @class */ (function (_super) {
    __extends(TopLevelObjectContext, _super);
    function TopLevelObjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TopLevelObjectContext.prototype.classDeclaration = function () {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    };
    TopLevelObjectContext.prototype.objectDeclaration = function () {
        return this.tryGetRuleContext(0, ObjectDeclarationContext);
    };
    TopLevelObjectContext.prototype.functionDeclaration = function () {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    };
    TopLevelObjectContext.prototype.propertyDeclaration = function () {
        return this.tryGetRuleContext(0, PropertyDeclarationContext);
    };
    TopLevelObjectContext.prototype.typeAlias = function () {
        return this.tryGetRuleContext(0, TypeAliasContext);
    };
    Object.defineProperty(TopLevelObjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_topLevelObject; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TopLevelObjectContext.prototype.enterRule = function (listener) {
        if (listener.enterTopLevelObject) {
            listener.enterTopLevelObject(this);
        }
    };
    // @Override
    TopLevelObjectContext.prototype.exitRule = function (listener) {
        if (listener.exitTopLevelObject) {
            listener.exitTopLevelObject(this);
        }
    };
    // @Override
    TopLevelObjectContext.prototype.accept = function (visitor) {
        if (visitor.visitTopLevelObject) {
            return visitor.visitTopLevelObject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TopLevelObjectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TopLevelObjectContext = TopLevelObjectContext;
var ClassDeclarationContext = /** @class */ (function (_super) {
    __extends(ClassDeclarationContext, _super);
    function ClassDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassDeclarationContext.prototype.simpleIdentifier = function () {
        return this.getRuleContext(0, SimpleIdentifierContext);
    };
    ClassDeclarationContext.prototype.CLASS = function () { return this.tryGetToken(KotlinParser.CLASS, 0); };
    ClassDeclarationContext.prototype.INTERFACE = function () { return this.tryGetToken(KotlinParser.INTERFACE, 0); };
    ClassDeclarationContext.prototype.modifierList = function () {
        return this.tryGetRuleContext(0, ModifierListContext);
    };
    ClassDeclarationContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    ClassDeclarationContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    ClassDeclarationContext.prototype.primaryConstructor = function () {
        return this.tryGetRuleContext(0, PrimaryConstructorContext);
    };
    ClassDeclarationContext.prototype.COLON = function () { return this.tryGetToken(KotlinParser.COLON, 0); };
    ClassDeclarationContext.prototype.delegationSpecifiers = function () {
        return this.tryGetRuleContext(0, DelegationSpecifiersContext);
    };
    ClassDeclarationContext.prototype.typeConstraints = function () {
        return this.tryGetRuleContext(0, TypeConstraintsContext);
    };
    ClassDeclarationContext.prototype.classBody = function () {
        return this.tryGetRuleContext(0, ClassBodyContext);
    };
    ClassDeclarationContext.prototype.enumClassBody = function () {
        return this.tryGetRuleContext(0, EnumClassBodyContext);
    };
    Object.defineProperty(ClassDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_classDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterClassDeclaration) {
            listener.enterClassDeclaration(this);
        }
    };
    // @Override
    ClassDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitClassDeclaration) {
            listener.exitClassDeclaration(this);
        }
    };
    // @Override
    ClassDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitClassDeclaration) {
            return visitor.visitClassDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassDeclarationContext = ClassDeclarationContext;
var PrimaryConstructorContext = /** @class */ (function (_super) {
    __extends(PrimaryConstructorContext, _super);
    function PrimaryConstructorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryConstructorContext.prototype.classParameters = function () {
        return this.getRuleContext(0, ClassParametersContext);
    };
    PrimaryConstructorContext.prototype.modifierList = function () {
        return this.tryGetRuleContext(0, ModifierListContext);
    };
    PrimaryConstructorContext.prototype.CONSTRUCTOR = function () { return this.tryGetToken(KotlinParser.CONSTRUCTOR, 0); };
    PrimaryConstructorContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(PrimaryConstructorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_primaryConstructor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimaryConstructorContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimaryConstructor) {
            listener.enterPrimaryConstructor(this);
        }
    };
    // @Override
    PrimaryConstructorContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimaryConstructor) {
            listener.exitPrimaryConstructor(this);
        }
    };
    // @Override
    PrimaryConstructorContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimaryConstructor) {
            return visitor.visitPrimaryConstructor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimaryConstructorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimaryConstructorContext = PrimaryConstructorContext;
var ClassParametersContext = /** @class */ (function (_super) {
    __extends(ClassParametersContext, _super);
    function ClassParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassParametersContext.prototype.LPAREN = function () { return this.getToken(KotlinParser.LPAREN, 0); };
    ClassParametersContext.prototype.RPAREN = function () { return this.getToken(KotlinParser.RPAREN, 0); };
    ClassParametersContext.prototype.classParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassParameterContext);
        }
        else {
            return this.getRuleContext(i, ClassParameterContext);
        }
    };
    ClassParametersContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    };
    Object.defineProperty(ClassParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_classParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterClassParameters) {
            listener.enterClassParameters(this);
        }
    };
    // @Override
    ClassParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitClassParameters) {
            listener.exitClassParameters(this);
        }
    };
    // @Override
    ClassParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitClassParameters) {
            return visitor.visitClassParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassParametersContext = ClassParametersContext;
var ClassParameterContext = /** @class */ (function (_super) {
    __extends(ClassParameterContext, _super);
    function ClassParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassParameterContext.prototype.simpleIdentifier = function () {
        return this.getRuleContext(0, SimpleIdentifierContext);
    };
    ClassParameterContext.prototype.COLON = function () { return this.getToken(KotlinParser.COLON, 0); };
    ClassParameterContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    ClassParameterContext.prototype.modifierList = function () {
        return this.tryGetRuleContext(0, ModifierListContext);
    };
    ClassParameterContext.prototype.ASSIGNMENT = function () { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); };
    ClassParameterContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ClassParameterContext.prototype.VAL = function () { return this.tryGetToken(KotlinParser.VAL, 0); };
    ClassParameterContext.prototype.VAR = function () { return this.tryGetToken(KotlinParser.VAR, 0); };
    Object.defineProperty(ClassParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_classParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterClassParameter) {
            listener.enterClassParameter(this);
        }
    };
    // @Override
    ClassParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitClassParameter) {
            listener.exitClassParameter(this);
        }
    };
    // @Override
    ClassParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitClassParameter) {
            return visitor.visitClassParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassParameterContext = ClassParameterContext;
var DelegationSpecifiersContext = /** @class */ (function (_super) {
    __extends(DelegationSpecifiersContext, _super);
    function DelegationSpecifiersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DelegationSpecifiersContext.prototype.delegationSpecifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DelegationSpecifierContext);
        }
        else {
            return this.getRuleContext(i, DelegationSpecifierContext);
        }
    };
    DelegationSpecifiersContext.prototype.annotations = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        }
        else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    };
    DelegationSpecifiersContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    };
    DelegationSpecifiersContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(DelegationSpecifiersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_delegationSpecifiers; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DelegationSpecifiersContext.prototype.enterRule = function (listener) {
        if (listener.enterDelegationSpecifiers) {
            listener.enterDelegationSpecifiers(this);
        }
    };
    // @Override
    DelegationSpecifiersContext.prototype.exitRule = function (listener) {
        if (listener.exitDelegationSpecifiers) {
            listener.exitDelegationSpecifiers(this);
        }
    };
    // @Override
    DelegationSpecifiersContext.prototype.accept = function (visitor) {
        if (visitor.visitDelegationSpecifiers) {
            return visitor.visitDelegationSpecifiers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DelegationSpecifiersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DelegationSpecifiersContext = DelegationSpecifiersContext;
var DelegationSpecifierContext = /** @class */ (function (_super) {
    __extends(DelegationSpecifierContext, _super);
    function DelegationSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DelegationSpecifierContext.prototype.constructorInvocation = function () {
        return this.tryGetRuleContext(0, ConstructorInvocationContext);
    };
    DelegationSpecifierContext.prototype.userType = function () {
        return this.tryGetRuleContext(0, UserTypeContext);
    };
    DelegationSpecifierContext.prototype.explicitDelegation = function () {
        return this.tryGetRuleContext(0, ExplicitDelegationContext);
    };
    Object.defineProperty(DelegationSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_delegationSpecifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DelegationSpecifierContext.prototype.enterRule = function (listener) {
        if (listener.enterDelegationSpecifier) {
            listener.enterDelegationSpecifier(this);
        }
    };
    // @Override
    DelegationSpecifierContext.prototype.exitRule = function (listener) {
        if (listener.exitDelegationSpecifier) {
            listener.exitDelegationSpecifier(this);
        }
    };
    // @Override
    DelegationSpecifierContext.prototype.accept = function (visitor) {
        if (visitor.visitDelegationSpecifier) {
            return visitor.visitDelegationSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DelegationSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DelegationSpecifierContext = DelegationSpecifierContext;
var ConstructorInvocationContext = /** @class */ (function (_super) {
    __extends(ConstructorInvocationContext, _super);
    function ConstructorInvocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstructorInvocationContext.prototype.userType = function () {
        return this.getRuleContext(0, UserTypeContext);
    };
    ConstructorInvocationContext.prototype.callSuffix = function () {
        return this.getRuleContext(0, CallSuffixContext);
    };
    Object.defineProperty(ConstructorInvocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_constructorInvocation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstructorInvocationContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructorInvocation) {
            listener.enterConstructorInvocation(this);
        }
    };
    // @Override
    ConstructorInvocationContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructorInvocation) {
            listener.exitConstructorInvocation(this);
        }
    };
    // @Override
    ConstructorInvocationContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructorInvocation) {
            return visitor.visitConstructorInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstructorInvocationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstructorInvocationContext = ConstructorInvocationContext;
var ExplicitDelegationContext = /** @class */ (function (_super) {
    __extends(ExplicitDelegationContext, _super);
    function ExplicitDelegationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExplicitDelegationContext.prototype.userType = function () {
        return this.getRuleContext(0, UserTypeContext);
    };
    ExplicitDelegationContext.prototype.BY = function () { return this.getToken(KotlinParser.BY, 0); };
    ExplicitDelegationContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ExplicitDelegationContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(ExplicitDelegationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_explicitDelegation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExplicitDelegationContext.prototype.enterRule = function (listener) {
        if (listener.enterExplicitDelegation) {
            listener.enterExplicitDelegation(this);
        }
    };
    // @Override
    ExplicitDelegationContext.prototype.exitRule = function (listener) {
        if (listener.exitExplicitDelegation) {
            listener.exitExplicitDelegation(this);
        }
    };
    // @Override
    ExplicitDelegationContext.prototype.accept = function (visitor) {
        if (visitor.visitExplicitDelegation) {
            return visitor.visitExplicitDelegation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExplicitDelegationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExplicitDelegationContext = ExplicitDelegationContext;
var ClassBodyContext = /** @class */ (function (_super) {
    __extends(ClassBodyContext, _super);
    function ClassBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassBodyContext.prototype.LCURL = function () { return this.getToken(KotlinParser.LCURL, 0); };
    ClassBodyContext.prototype.RCURL = function () { return this.getToken(KotlinParser.RCURL, 0); };
    ClassBodyContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    ClassBodyContext.prototype.classMemberDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassMemberDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ClassMemberDeclarationContext);
        }
    };
    Object.defineProperty(ClassBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_classBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterClassBody) {
            listener.enterClassBody(this);
        }
    };
    // @Override
    ClassBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitClassBody) {
            listener.exitClassBody(this);
        }
    };
    // @Override
    ClassBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitClassBody) {
            return visitor.visitClassBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassBodyContext = ClassBodyContext;
var ClassMemberDeclarationContext = /** @class */ (function (_super) {
    __extends(ClassMemberDeclarationContext, _super);
    function ClassMemberDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassMemberDeclarationContext.prototype.classDeclaration = function () {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    };
    ClassMemberDeclarationContext.prototype.functionDeclaration = function () {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    };
    ClassMemberDeclarationContext.prototype.objectDeclaration = function () {
        return this.tryGetRuleContext(0, ObjectDeclarationContext);
    };
    ClassMemberDeclarationContext.prototype.companionObject = function () {
        return this.tryGetRuleContext(0, CompanionObjectContext);
    };
    ClassMemberDeclarationContext.prototype.propertyDeclaration = function () {
        return this.tryGetRuleContext(0, PropertyDeclarationContext);
    };
    ClassMemberDeclarationContext.prototype.anonymousInitializer = function () {
        return this.tryGetRuleContext(0, AnonymousInitializerContext);
    };
    ClassMemberDeclarationContext.prototype.secondaryConstructor = function () {
        return this.tryGetRuleContext(0, SecondaryConstructorContext);
    };
    ClassMemberDeclarationContext.prototype.typeAlias = function () {
        return this.tryGetRuleContext(0, TypeAliasContext);
    };
    ClassMemberDeclarationContext.prototype.anysemi = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnysemiContext);
        }
        else {
            return this.getRuleContext(i, AnysemiContext);
        }
    };
    Object.defineProperty(ClassMemberDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_classMemberDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassMemberDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterClassMemberDeclaration) {
            listener.enterClassMemberDeclaration(this);
        }
    };
    // @Override
    ClassMemberDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitClassMemberDeclaration) {
            listener.exitClassMemberDeclaration(this);
        }
    };
    // @Override
    ClassMemberDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitClassMemberDeclaration) {
            return visitor.visitClassMemberDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassMemberDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassMemberDeclarationContext = ClassMemberDeclarationContext;
var AnonymousInitializerContext = /** @class */ (function (_super) {
    __extends(AnonymousInitializerContext, _super);
    function AnonymousInitializerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnonymousInitializerContext.prototype.INIT = function () { return this.getToken(KotlinParser.INIT, 0); };
    AnonymousInitializerContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    AnonymousInitializerContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(AnonymousInitializerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_anonymousInitializer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnonymousInitializerContext.prototype.enterRule = function (listener) {
        if (listener.enterAnonymousInitializer) {
            listener.enterAnonymousInitializer(this);
        }
    };
    // @Override
    AnonymousInitializerContext.prototype.exitRule = function (listener) {
        if (listener.exitAnonymousInitializer) {
            listener.exitAnonymousInitializer(this);
        }
    };
    // @Override
    AnonymousInitializerContext.prototype.accept = function (visitor) {
        if (visitor.visitAnonymousInitializer) {
            return visitor.visitAnonymousInitializer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnonymousInitializerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnonymousInitializerContext = AnonymousInitializerContext;
var SecondaryConstructorContext = /** @class */ (function (_super) {
    __extends(SecondaryConstructorContext, _super);
    function SecondaryConstructorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SecondaryConstructorContext.prototype.CONSTRUCTOR = function () { return this.getToken(KotlinParser.CONSTRUCTOR, 0); };
    SecondaryConstructorContext.prototype.functionValueParameters = function () {
        return this.getRuleContext(0, FunctionValueParametersContext);
    };
    SecondaryConstructorContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    SecondaryConstructorContext.prototype.modifierList = function () {
        return this.tryGetRuleContext(0, ModifierListContext);
    };
    SecondaryConstructorContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    SecondaryConstructorContext.prototype.COLON = function () { return this.tryGetToken(KotlinParser.COLON, 0); };
    SecondaryConstructorContext.prototype.constructorDelegationCall = function () {
        return this.tryGetRuleContext(0, ConstructorDelegationCallContext);
    };
    Object.defineProperty(SecondaryConstructorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_secondaryConstructor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SecondaryConstructorContext.prototype.enterRule = function (listener) {
        if (listener.enterSecondaryConstructor) {
            listener.enterSecondaryConstructor(this);
        }
    };
    // @Override
    SecondaryConstructorContext.prototype.exitRule = function (listener) {
        if (listener.exitSecondaryConstructor) {
            listener.exitSecondaryConstructor(this);
        }
    };
    // @Override
    SecondaryConstructorContext.prototype.accept = function (visitor) {
        if (visitor.visitSecondaryConstructor) {
            return visitor.visitSecondaryConstructor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SecondaryConstructorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SecondaryConstructorContext = SecondaryConstructorContext;
var ConstructorDelegationCallContext = /** @class */ (function (_super) {
    __extends(ConstructorDelegationCallContext, _super);
    function ConstructorDelegationCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstructorDelegationCallContext.prototype.THIS = function () { return this.tryGetToken(KotlinParser.THIS, 0); };
    ConstructorDelegationCallContext.prototype.valueArguments = function () {
        return this.getRuleContext(0, ValueArgumentsContext);
    };
    ConstructorDelegationCallContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    ConstructorDelegationCallContext.prototype.SUPER = function () { return this.tryGetToken(KotlinParser.SUPER, 0); };
    Object.defineProperty(ConstructorDelegationCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_constructorDelegationCall; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstructorDelegationCallContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructorDelegationCall) {
            listener.enterConstructorDelegationCall(this);
        }
    };
    // @Override
    ConstructorDelegationCallContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructorDelegationCall) {
            listener.exitConstructorDelegationCall(this);
        }
    };
    // @Override
    ConstructorDelegationCallContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructorDelegationCall) {
            return visitor.visitConstructorDelegationCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstructorDelegationCallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstructorDelegationCallContext = ConstructorDelegationCallContext;
var EnumClassBodyContext = /** @class */ (function (_super) {
    __extends(EnumClassBodyContext, _super);
    function EnumClassBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumClassBodyContext.prototype.LCURL = function () { return this.getToken(KotlinParser.LCURL, 0); };
    EnumClassBodyContext.prototype.RCURL = function () { return this.getToken(KotlinParser.RCURL, 0); };
    EnumClassBodyContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    EnumClassBodyContext.prototype.enumEntries = function () {
        return this.tryGetRuleContext(0, EnumEntriesContext);
    };
    EnumClassBodyContext.prototype.SEMICOLON = function () { return this.tryGetToken(KotlinParser.SEMICOLON, 0); };
    EnumClassBodyContext.prototype.classMemberDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassMemberDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ClassMemberDeclarationContext);
        }
    };
    Object.defineProperty(EnumClassBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_enumClassBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumClassBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumClassBody) {
            listener.enterEnumClassBody(this);
        }
    };
    // @Override
    EnumClassBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumClassBody) {
            listener.exitEnumClassBody(this);
        }
    };
    // @Override
    EnumClassBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumClassBody) {
            return visitor.visitEnumClassBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumClassBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumClassBodyContext = EnumClassBodyContext;
var EnumEntriesContext = /** @class */ (function (_super) {
    __extends(EnumEntriesContext, _super);
    function EnumEntriesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumEntriesContext.prototype.enumEntry = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumEntryContext);
        }
        else {
            return this.getRuleContext(i, EnumEntryContext);
        }
    };
    EnumEntriesContext.prototype.SEMICOLON = function () { return this.tryGetToken(KotlinParser.SEMICOLON, 0); };
    EnumEntriesContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(EnumEntriesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_enumEntries; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumEntriesContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumEntries) {
            listener.enterEnumEntries(this);
        }
    };
    // @Override
    EnumEntriesContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumEntries) {
            listener.exitEnumEntries(this);
        }
    };
    // @Override
    EnumEntriesContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumEntries) {
            return visitor.visitEnumEntries(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumEntriesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumEntriesContext = EnumEntriesContext;
var EnumEntryContext = /** @class */ (function (_super) {
    __extends(EnumEntryContext, _super);
    function EnumEntryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumEntryContext.prototype.simpleIdentifier = function () {
        return this.getRuleContext(0, SimpleIdentifierContext);
    };
    EnumEntryContext.prototype.valueArguments = function () {
        return this.tryGetRuleContext(0, ValueArgumentsContext);
    };
    EnumEntryContext.prototype.classBody = function () {
        return this.tryGetRuleContext(0, ClassBodyContext);
    };
    EnumEntryContext.prototype.COMMA = function () { return this.tryGetToken(KotlinParser.COMMA, 0); };
    EnumEntryContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(EnumEntryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_enumEntry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumEntryContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumEntry) {
            listener.enterEnumEntry(this);
        }
    };
    // @Override
    EnumEntryContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumEntry) {
            listener.exitEnumEntry(this);
        }
    };
    // @Override
    EnumEntryContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumEntry) {
            return visitor.visitEnumEntry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumEntryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumEntryContext = EnumEntryContext;
var FunctionDeclarationContext = /** @class */ (function (_super) {
    __extends(FunctionDeclarationContext, _super);
    function FunctionDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionDeclarationContext.prototype.FUN = function () { return this.getToken(KotlinParser.FUN, 0); };
    FunctionDeclarationContext.prototype.functionValueParameters = function () {
        return this.getRuleContext(0, FunctionValueParametersContext);
    };
    FunctionDeclarationContext.prototype.modifierList = function () {
        return this.tryGetRuleContext(0, ModifierListContext);
    };
    FunctionDeclarationContext.prototype.type = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    };
    FunctionDeclarationContext.prototype.DOT = function () { return this.tryGetToken(KotlinParser.DOT, 0); };
    FunctionDeclarationContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    FunctionDeclarationContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    FunctionDeclarationContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    FunctionDeclarationContext.prototype.COLON = function () { return this.tryGetToken(KotlinParser.COLON, 0); };
    FunctionDeclarationContext.prototype.typeConstraints = function () {
        return this.tryGetRuleContext(0, TypeConstraintsContext);
    };
    FunctionDeclarationContext.prototype.functionBody = function () {
        return this.tryGetRuleContext(0, FunctionBodyContext);
    };
    Object.defineProperty(FunctionDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_functionDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionDeclaration) {
            listener.enterFunctionDeclaration(this);
        }
    };
    // @Override
    FunctionDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionDeclaration) {
            listener.exitFunctionDeclaration(this);
        }
    };
    // @Override
    FunctionDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionDeclaration) {
            return visitor.visitFunctionDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionDeclarationContext = FunctionDeclarationContext;
var FunctionValueParametersContext = /** @class */ (function (_super) {
    __extends(FunctionValueParametersContext, _super);
    function FunctionValueParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionValueParametersContext.prototype.LPAREN = function () { return this.getToken(KotlinParser.LPAREN, 0); };
    FunctionValueParametersContext.prototype.RPAREN = function () { return this.getToken(KotlinParser.RPAREN, 0); };
    FunctionValueParametersContext.prototype.functionValueParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionValueParameterContext);
        }
        else {
            return this.getRuleContext(i, FunctionValueParameterContext);
        }
    };
    FunctionValueParametersContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    };
    Object.defineProperty(FunctionValueParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_functionValueParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionValueParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionValueParameters) {
            listener.enterFunctionValueParameters(this);
        }
    };
    // @Override
    FunctionValueParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionValueParameters) {
            listener.exitFunctionValueParameters(this);
        }
    };
    // @Override
    FunctionValueParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionValueParameters) {
            return visitor.visitFunctionValueParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionValueParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionValueParametersContext = FunctionValueParametersContext;
var FunctionValueParameterContext = /** @class */ (function (_super) {
    __extends(FunctionValueParameterContext, _super);
    function FunctionValueParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionValueParameterContext.prototype.parameter = function () {
        return this.getRuleContext(0, ParameterContext);
    };
    FunctionValueParameterContext.prototype.modifierList = function () {
        return this.tryGetRuleContext(0, ModifierListContext);
    };
    FunctionValueParameterContext.prototype.ASSIGNMENT = function () { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); };
    FunctionValueParameterContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(FunctionValueParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_functionValueParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionValueParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionValueParameter) {
            listener.enterFunctionValueParameter(this);
        }
    };
    // @Override
    FunctionValueParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionValueParameter) {
            listener.exitFunctionValueParameter(this);
        }
    };
    // @Override
    FunctionValueParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionValueParameter) {
            return visitor.visitFunctionValueParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionValueParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionValueParameterContext = FunctionValueParameterContext;
var ParameterContext = /** @class */ (function (_super) {
    __extends(ParameterContext, _super);
    function ParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterContext.prototype.simpleIdentifier = function () {
        return this.getRuleContext(0, SimpleIdentifierContext);
    };
    ParameterContext.prototype.COLON = function () { return this.getToken(KotlinParser.COLON, 0); };
    ParameterContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Object.defineProperty(ParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterParameter) {
            listener.enterParameter(this);
        }
    };
    // @Override
    ParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitParameter) {
            listener.exitParameter(this);
        }
    };
    // @Override
    ParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterContext = ParameterContext;
var FunctionBodyContext = /** @class */ (function (_super) {
    __extends(FunctionBodyContext, _super);
    function FunctionBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionBodyContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    FunctionBodyContext.prototype.ASSIGNMENT = function () { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); };
    FunctionBodyContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    FunctionBodyContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(FunctionBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_functionBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionBody) {
            listener.enterFunctionBody(this);
        }
    };
    // @Override
    FunctionBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionBody) {
            listener.exitFunctionBody(this);
        }
    };
    // @Override
    FunctionBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionBody) {
            return visitor.visitFunctionBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionBodyContext = FunctionBodyContext;
var ObjectDeclarationContext = /** @class */ (function (_super) {
    __extends(ObjectDeclarationContext, _super);
    function ObjectDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectDeclarationContext.prototype.OBJECT = function () { return this.getToken(KotlinParser.OBJECT, 0); };
    ObjectDeclarationContext.prototype.simpleIdentifier = function () {
        return this.getRuleContext(0, SimpleIdentifierContext);
    };
    ObjectDeclarationContext.prototype.modifierList = function () {
        return this.tryGetRuleContext(0, ModifierListContext);
    };
    ObjectDeclarationContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    ObjectDeclarationContext.prototype.primaryConstructor = function () {
        return this.tryGetRuleContext(0, PrimaryConstructorContext);
    };
    ObjectDeclarationContext.prototype.COLON = function () { return this.tryGetToken(KotlinParser.COLON, 0); };
    ObjectDeclarationContext.prototype.delegationSpecifiers = function () {
        return this.tryGetRuleContext(0, DelegationSpecifiersContext);
    };
    ObjectDeclarationContext.prototype.classBody = function () {
        return this.tryGetRuleContext(0, ClassBodyContext);
    };
    Object.defineProperty(ObjectDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_objectDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectDeclaration) {
            listener.enterObjectDeclaration(this);
        }
    };
    // @Override
    ObjectDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectDeclaration) {
            listener.exitObjectDeclaration(this);
        }
    };
    // @Override
    ObjectDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectDeclaration) {
            return visitor.visitObjectDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectDeclarationContext = ObjectDeclarationContext;
var CompanionObjectContext = /** @class */ (function (_super) {
    __extends(CompanionObjectContext, _super);
    function CompanionObjectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompanionObjectContext.prototype.COMPANION = function () { return this.getToken(KotlinParser.COMPANION, 0); };
    CompanionObjectContext.prototype.OBJECT = function () { return this.getToken(KotlinParser.OBJECT, 0); };
    CompanionObjectContext.prototype.modifierList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierListContext);
        }
        else {
            return this.getRuleContext(i, ModifierListContext);
        }
    };
    CompanionObjectContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    CompanionObjectContext.prototype.simpleIdentifier = function () {
        return this.tryGetRuleContext(0, SimpleIdentifierContext);
    };
    CompanionObjectContext.prototype.COLON = function () { return this.tryGetToken(KotlinParser.COLON, 0); };
    CompanionObjectContext.prototype.delegationSpecifiers = function () {
        return this.tryGetRuleContext(0, DelegationSpecifiersContext);
    };
    CompanionObjectContext.prototype.classBody = function () {
        return this.tryGetRuleContext(0, ClassBodyContext);
    };
    Object.defineProperty(CompanionObjectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_companionObject; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompanionObjectContext.prototype.enterRule = function (listener) {
        if (listener.enterCompanionObject) {
            listener.enterCompanionObject(this);
        }
    };
    // @Override
    CompanionObjectContext.prototype.exitRule = function (listener) {
        if (listener.exitCompanionObject) {
            listener.exitCompanionObject(this);
        }
    };
    // @Override
    CompanionObjectContext.prototype.accept = function (visitor) {
        if (visitor.visitCompanionObject) {
            return visitor.visitCompanionObject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompanionObjectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompanionObjectContext = CompanionObjectContext;
var PropertyDeclarationContext = /** @class */ (function (_super) {
    __extends(PropertyDeclarationContext, _super);
    function PropertyDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyDeclarationContext.prototype.VAL = function () { return this.tryGetToken(KotlinParser.VAL, 0); };
    PropertyDeclarationContext.prototype.VAR = function () { return this.tryGetToken(KotlinParser.VAR, 0); };
    PropertyDeclarationContext.prototype.modifierList = function () {
        return this.tryGetRuleContext(0, ModifierListContext);
    };
    PropertyDeclarationContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    PropertyDeclarationContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    PropertyDeclarationContext.prototype.DOT = function () { return this.tryGetToken(KotlinParser.DOT, 0); };
    PropertyDeclarationContext.prototype.typeConstraints = function () {
        return this.tryGetRuleContext(0, TypeConstraintsContext);
    };
    PropertyDeclarationContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    PropertyDeclarationContext.prototype.getter = function () {
        return this.tryGetRuleContext(0, GetterContext);
    };
    PropertyDeclarationContext.prototype.setter = function () {
        return this.tryGetRuleContext(0, SetterContext);
    };
    PropertyDeclarationContext.prototype.multiVariableDeclaration = function () {
        return this.tryGetRuleContext(0, MultiVariableDeclarationContext);
    };
    PropertyDeclarationContext.prototype.variableDeclaration = function () {
        return this.tryGetRuleContext(0, VariableDeclarationContext);
    };
    PropertyDeclarationContext.prototype.BY = function () { return this.tryGetToken(KotlinParser.BY, 0); };
    PropertyDeclarationContext.prototype.ASSIGNMENT = function () { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); };
    PropertyDeclarationContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    PropertyDeclarationContext.prototype.semi = function () {
        return this.tryGetRuleContext(0, SemiContext);
    };
    Object.defineProperty(PropertyDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_propertyDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyDeclaration) {
            listener.enterPropertyDeclaration(this);
        }
    };
    // @Override
    PropertyDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyDeclaration) {
            listener.exitPropertyDeclaration(this);
        }
    };
    // @Override
    PropertyDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyDeclaration) {
            return visitor.visitPropertyDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyDeclarationContext = PropertyDeclarationContext;
var MultiVariableDeclarationContext = /** @class */ (function (_super) {
    __extends(MultiVariableDeclarationContext, _super);
    function MultiVariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiVariableDeclarationContext.prototype.LPAREN = function () { return this.getToken(KotlinParser.LPAREN, 0); };
    MultiVariableDeclarationContext.prototype.variableDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclarationContext);
        }
    };
    MultiVariableDeclarationContext.prototype.RPAREN = function () { return this.getToken(KotlinParser.RPAREN, 0); };
    MultiVariableDeclarationContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    };
    Object.defineProperty(MultiVariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_multiVariableDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiVariableDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiVariableDeclaration) {
            listener.enterMultiVariableDeclaration(this);
        }
    };
    // @Override
    MultiVariableDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiVariableDeclaration) {
            listener.exitMultiVariableDeclaration(this);
        }
    };
    // @Override
    MultiVariableDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiVariableDeclaration) {
            return visitor.visitMultiVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiVariableDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiVariableDeclarationContext = MultiVariableDeclarationContext;
var VariableDeclarationContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationContext, _super);
    function VariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationContext.prototype.simpleIdentifier = function () {
        return this.getRuleContext(0, SimpleIdentifierContext);
    };
    VariableDeclarationContext.prototype.COLON = function () { return this.tryGetToken(KotlinParser.COLON, 0); };
    VariableDeclarationContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    Object.defineProperty(VariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_variableDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclaration) {
            listener.enterVariableDeclaration(this);
        }
    };
    // @Override
    VariableDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclaration) {
            listener.exitVariableDeclaration(this);
        }
    };
    // @Override
    VariableDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclarationContext = VariableDeclarationContext;
var GetterContext = /** @class */ (function (_super) {
    __extends(GetterContext, _super);
    function GetterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GetterContext.prototype.GETTER = function () { return this.getToken(KotlinParser.GETTER, 0); };
    GetterContext.prototype.modifierList = function () {
        return this.tryGetRuleContext(0, ModifierListContext);
    };
    GetterContext.prototype.LPAREN = function () { return this.tryGetToken(KotlinParser.LPAREN, 0); };
    GetterContext.prototype.RPAREN = function () { return this.tryGetToken(KotlinParser.RPAREN, 0); };
    GetterContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    GetterContext.prototype.ASSIGNMENT = function () { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); };
    GetterContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    GetterContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    GetterContext.prototype.COLON = function () { return this.tryGetToken(KotlinParser.COLON, 0); };
    GetterContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    Object.defineProperty(GetterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_getter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GetterContext.prototype.enterRule = function (listener) {
        if (listener.enterGetter) {
            listener.enterGetter(this);
        }
    };
    // @Override
    GetterContext.prototype.exitRule = function (listener) {
        if (listener.exitGetter) {
            listener.exitGetter(this);
        }
    };
    // @Override
    GetterContext.prototype.accept = function (visitor) {
        if (visitor.visitGetter) {
            return visitor.visitGetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GetterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GetterContext = GetterContext;
var SetterContext = /** @class */ (function (_super) {
    __extends(SetterContext, _super);
    function SetterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetterContext.prototype.SETTER = function () { return this.getToken(KotlinParser.SETTER, 0); };
    SetterContext.prototype.modifierList = function () {
        return this.tryGetRuleContext(0, ModifierListContext);
    };
    SetterContext.prototype.LPAREN = function () { return this.tryGetToken(KotlinParser.LPAREN, 0); };
    SetterContext.prototype.RPAREN = function () { return this.tryGetToken(KotlinParser.RPAREN, 0); };
    SetterContext.prototype.functionBody = function () {
        return this.tryGetRuleContext(0, FunctionBodyContext);
    };
    SetterContext.prototype.simpleIdentifier = function () {
        return this.tryGetRuleContext(0, SimpleIdentifierContext);
    };
    SetterContext.prototype.parameter = function () {
        return this.tryGetRuleContext(0, ParameterContext);
    };
    SetterContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    SetterContext.prototype.annotations = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        }
        else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    };
    SetterContext.prototype.parameterModifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterModifierContext);
        }
        else {
            return this.getRuleContext(i, ParameterModifierContext);
        }
    };
    Object.defineProperty(SetterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_setter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetterContext.prototype.enterRule = function (listener) {
        if (listener.enterSetter) {
            listener.enterSetter(this);
        }
    };
    // @Override
    SetterContext.prototype.exitRule = function (listener) {
        if (listener.exitSetter) {
            listener.exitSetter(this);
        }
    };
    // @Override
    SetterContext.prototype.accept = function (visitor) {
        if (visitor.visitSetter) {
            return visitor.visitSetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetterContext = SetterContext;
var TypeAliasContext = /** @class */ (function (_super) {
    __extends(TypeAliasContext, _super);
    function TypeAliasContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeAliasContext.prototype.TYPE_ALIAS = function () { return this.getToken(KotlinParser.TYPE_ALIAS, 0); };
    TypeAliasContext.prototype.simpleIdentifier = function () {
        return this.getRuleContext(0, SimpleIdentifierContext);
    };
    TypeAliasContext.prototype.ASSIGNMENT = function () { return this.getToken(KotlinParser.ASSIGNMENT, 0); };
    TypeAliasContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    TypeAliasContext.prototype.modifierList = function () {
        return this.tryGetRuleContext(0, ModifierListContext);
    };
    TypeAliasContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    TypeAliasContext.prototype.typeParameters = function () {
        return this.tryGetRuleContext(0, TypeParametersContext);
    };
    Object.defineProperty(TypeAliasContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_typeAlias; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeAliasContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeAlias) {
            listener.enterTypeAlias(this);
        }
    };
    // @Override
    TypeAliasContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeAlias) {
            listener.exitTypeAlias(this);
        }
    };
    // @Override
    TypeAliasContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeAlias) {
            return visitor.visitTypeAlias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeAliasContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeAliasContext = TypeAliasContext;
var TypeParametersContext = /** @class */ (function (_super) {
    __extends(TypeParametersContext, _super);
    function TypeParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParametersContext.prototype.LANGLE = function () { return this.getToken(KotlinParser.LANGLE, 0); };
    TypeParametersContext.prototype.typeParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterContext);
        }
        else {
            return this.getRuleContext(i, TypeParameterContext);
        }
    };
    TypeParametersContext.prototype.RANGLE = function () { return this.getToken(KotlinParser.RANGLE, 0); };
    TypeParametersContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    TypeParametersContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    };
    Object.defineProperty(TypeParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_typeParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeParameters) {
            listener.enterTypeParameters(this);
        }
    };
    // @Override
    TypeParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeParameters) {
            listener.exitTypeParameters(this);
        }
    };
    // @Override
    TypeParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeParameters) {
            return visitor.visitTypeParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeParametersContext = TypeParametersContext;
var TypeParameterContext = /** @class */ (function (_super) {
    __extends(TypeParameterContext, _super);
    function TypeParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParameterContext.prototype.simpleIdentifier = function () {
        return this.getRuleContext(0, SimpleIdentifierContext);
    };
    TypeParameterContext.prototype.modifierList = function () {
        return this.tryGetRuleContext(0, ModifierListContext);
    };
    TypeParameterContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    TypeParameterContext.prototype.COLON = function () { return this.tryGetToken(KotlinParser.COLON, 0); };
    TypeParameterContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    Object.defineProperty(TypeParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_typeParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeParameter) {
            listener.enterTypeParameter(this);
        }
    };
    // @Override
    TypeParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeParameter) {
            listener.exitTypeParameter(this);
        }
    };
    // @Override
    TypeParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeParameter) {
            return visitor.visitTypeParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeParameterContext = TypeParameterContext;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeContext.prototype.functionType = function () {
        return this.tryGetRuleContext(0, FunctionTypeContext);
    };
    TypeContext.prototype.parenthesizedType = function () {
        return this.tryGetRuleContext(0, ParenthesizedTypeContext);
    };
    TypeContext.prototype.nullableType = function () {
        return this.tryGetRuleContext(0, NullableTypeContext);
    };
    TypeContext.prototype.typeReference = function () {
        return this.tryGetRuleContext(0, TypeReferenceContext);
    };
    TypeContext.prototype.typeModifierList = function () {
        return this.tryGetRuleContext(0, TypeModifierListContext);
    };
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_type; },
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
var TypeModifierListContext = /** @class */ (function (_super) {
    __extends(TypeModifierListContext, _super);
    function TypeModifierListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeModifierListContext.prototype.annotations = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        }
        else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    };
    TypeModifierListContext.prototype.SUSPEND = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.SUSPEND);
        }
        else {
            return this.getToken(KotlinParser.SUSPEND, i);
        }
    };
    TypeModifierListContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(TypeModifierListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_typeModifierList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeModifierListContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeModifierList) {
            listener.enterTypeModifierList(this);
        }
    };
    // @Override
    TypeModifierListContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeModifierList) {
            listener.exitTypeModifierList(this);
        }
    };
    // @Override
    TypeModifierListContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeModifierList) {
            return visitor.visitTypeModifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeModifierListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeModifierListContext = TypeModifierListContext;
var ParenthesizedTypeContext = /** @class */ (function (_super) {
    __extends(ParenthesizedTypeContext, _super);
    function ParenthesizedTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParenthesizedTypeContext.prototype.LPAREN = function () { return this.getToken(KotlinParser.LPAREN, 0); };
    ParenthesizedTypeContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    ParenthesizedTypeContext.prototype.RPAREN = function () { return this.getToken(KotlinParser.RPAREN, 0); };
    Object.defineProperty(ParenthesizedTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_parenthesizedType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParenthesizedTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterParenthesizedType) {
            listener.enterParenthesizedType(this);
        }
    };
    // @Override
    ParenthesizedTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitParenthesizedType) {
            listener.exitParenthesizedType(this);
        }
    };
    // @Override
    ParenthesizedTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitParenthesizedType) {
            return visitor.visitParenthesizedType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParenthesizedTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParenthesizedTypeContext = ParenthesizedTypeContext;
var NullableTypeContext = /** @class */ (function (_super) {
    __extends(NullableTypeContext, _super);
    function NullableTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NullableTypeContext.prototype.typeReference = function () {
        return this.tryGetRuleContext(0, TypeReferenceContext);
    };
    NullableTypeContext.prototype.parenthesizedType = function () {
        return this.tryGetRuleContext(0, ParenthesizedTypeContext);
    };
    NullableTypeContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    NullableTypeContext.prototype.QUEST = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.QUEST);
        }
        else {
            return this.getToken(KotlinParser.QUEST, i);
        }
    };
    Object.defineProperty(NullableTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_nullableType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NullableTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterNullableType) {
            listener.enterNullableType(this);
        }
    };
    // @Override
    NullableTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitNullableType) {
            listener.exitNullableType(this);
        }
    };
    // @Override
    NullableTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitNullableType) {
            return visitor.visitNullableType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NullableTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NullableTypeContext = NullableTypeContext;
var TypeReferenceContext = /** @class */ (function (_super) {
    __extends(TypeReferenceContext, _super);
    function TypeReferenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeReferenceContext.prototype.LPAREN = function () { return this.tryGetToken(KotlinParser.LPAREN, 0); };
    TypeReferenceContext.prototype.typeReference = function () {
        return this.tryGetRuleContext(0, TypeReferenceContext);
    };
    TypeReferenceContext.prototype.RPAREN = function () { return this.tryGetToken(KotlinParser.RPAREN, 0); };
    TypeReferenceContext.prototype.userType = function () {
        return this.tryGetRuleContext(0, UserTypeContext);
    };
    TypeReferenceContext.prototype.DYNAMIC = function () { return this.tryGetToken(KotlinParser.DYNAMIC, 0); };
    Object.defineProperty(TypeReferenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_typeReference; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeReferenceContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeReference) {
            listener.enterTypeReference(this);
        }
    };
    // @Override
    TypeReferenceContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeReference) {
            listener.exitTypeReference(this);
        }
    };
    // @Override
    TypeReferenceContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeReference) {
            return visitor.visitTypeReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeReferenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeReferenceContext = TypeReferenceContext;
var FunctionTypeContext = /** @class */ (function (_super) {
    __extends(FunctionTypeContext, _super);
    function FunctionTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionTypeContext.prototype.functionTypeParameters = function () {
        return this.getRuleContext(0, FunctionTypeParametersContext);
    };
    FunctionTypeContext.prototype.ARROW = function () { return this.getToken(KotlinParser.ARROW, 0); };
    FunctionTypeContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    FunctionTypeContext.prototype.functionTypeReceiver = function () {
        return this.tryGetRuleContext(0, FunctionTypeReceiverContext);
    };
    FunctionTypeContext.prototype.DOT = function () { return this.tryGetToken(KotlinParser.DOT, 0); };
    FunctionTypeContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(FunctionTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_functionType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionType) {
            listener.enterFunctionType(this);
        }
    };
    // @Override
    FunctionTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionType) {
            listener.exitFunctionType(this);
        }
    };
    // @Override
    FunctionTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionType) {
            return visitor.visitFunctionType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionTypeContext = FunctionTypeContext;
var FunctionTypeReceiverContext = /** @class */ (function (_super) {
    __extends(FunctionTypeReceiverContext, _super);
    function FunctionTypeReceiverContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionTypeReceiverContext.prototype.parenthesizedType = function () {
        return this.tryGetRuleContext(0, ParenthesizedTypeContext);
    };
    FunctionTypeReceiverContext.prototype.nullableType = function () {
        return this.tryGetRuleContext(0, NullableTypeContext);
    };
    FunctionTypeReceiverContext.prototype.typeReference = function () {
        return this.tryGetRuleContext(0, TypeReferenceContext);
    };
    Object.defineProperty(FunctionTypeReceiverContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_functionTypeReceiver; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionTypeReceiverContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionTypeReceiver) {
            listener.enterFunctionTypeReceiver(this);
        }
    };
    // @Override
    FunctionTypeReceiverContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionTypeReceiver) {
            listener.exitFunctionTypeReceiver(this);
        }
    };
    // @Override
    FunctionTypeReceiverContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionTypeReceiver) {
            return visitor.visitFunctionTypeReceiver(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionTypeReceiverContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionTypeReceiverContext = FunctionTypeReceiverContext;
var UserTypeContext = /** @class */ (function (_super) {
    __extends(UserTypeContext, _super);
    function UserTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UserTypeContext.prototype.simpleUserType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SimpleUserTypeContext);
        }
        else {
            return this.getRuleContext(i, SimpleUserTypeContext);
        }
    };
    UserTypeContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.DOT);
        }
        else {
            return this.getToken(KotlinParser.DOT, i);
        }
    };
    UserTypeContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(UserTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_userType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UserTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterUserType) {
            listener.enterUserType(this);
        }
    };
    // @Override
    UserTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitUserType) {
            listener.exitUserType(this);
        }
    };
    // @Override
    UserTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitUserType) {
            return visitor.visitUserType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UserTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UserTypeContext = UserTypeContext;
var SimpleUserTypeContext = /** @class */ (function (_super) {
    __extends(SimpleUserTypeContext, _super);
    function SimpleUserTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleUserTypeContext.prototype.simpleIdentifier = function () {
        return this.getRuleContext(0, SimpleIdentifierContext);
    };
    SimpleUserTypeContext.prototype.typeArguments = function () {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    };
    SimpleUserTypeContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(SimpleUserTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_simpleUserType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleUserTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleUserType) {
            listener.enterSimpleUserType(this);
        }
    };
    // @Override
    SimpleUserTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleUserType) {
            listener.exitSimpleUserType(this);
        }
    };
    // @Override
    SimpleUserTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleUserType) {
            return visitor.visitSimpleUserType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleUserTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleUserTypeContext = SimpleUserTypeContext;
var FunctionTypeParametersContext = /** @class */ (function (_super) {
    __extends(FunctionTypeParametersContext, _super);
    function FunctionTypeParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionTypeParametersContext.prototype.LPAREN = function () { return this.getToken(KotlinParser.LPAREN, 0); };
    FunctionTypeParametersContext.prototype.RPAREN = function () { return this.getToken(KotlinParser.RPAREN, 0); };
    FunctionTypeParametersContext.prototype.parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }
        else {
            return this.getRuleContext(i, ParameterContext);
        }
    };
    FunctionTypeParametersContext.prototype.type = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    };
    FunctionTypeParametersContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    };
    Object.defineProperty(FunctionTypeParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_functionTypeParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionTypeParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionTypeParameters) {
            listener.enterFunctionTypeParameters(this);
        }
    };
    // @Override
    FunctionTypeParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionTypeParameters) {
            listener.exitFunctionTypeParameters(this);
        }
    };
    // @Override
    FunctionTypeParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionTypeParameters) {
            return visitor.visitFunctionTypeParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionTypeParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionTypeParametersContext = FunctionTypeParametersContext;
var TypeConstraintsContext = /** @class */ (function (_super) {
    __extends(TypeConstraintsContext, _super);
    function TypeConstraintsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeConstraintsContext.prototype.WHERE = function () { return this.getToken(KotlinParser.WHERE, 0); };
    TypeConstraintsContext.prototype.typeConstraint = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeConstraintContext);
        }
        else {
            return this.getRuleContext(i, TypeConstraintContext);
        }
    };
    TypeConstraintsContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    TypeConstraintsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    };
    Object.defineProperty(TypeConstraintsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_typeConstraints; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeConstraintsContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeConstraints) {
            listener.enterTypeConstraints(this);
        }
    };
    // @Override
    TypeConstraintsContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeConstraints) {
            listener.exitTypeConstraints(this);
        }
    };
    // @Override
    TypeConstraintsContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeConstraints) {
            return visitor.visitTypeConstraints(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeConstraintsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeConstraintsContext = TypeConstraintsContext;
var TypeConstraintContext = /** @class */ (function (_super) {
    __extends(TypeConstraintContext, _super);
    function TypeConstraintContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeConstraintContext.prototype.simpleIdentifier = function () {
        return this.getRuleContext(0, SimpleIdentifierContext);
    };
    TypeConstraintContext.prototype.COLON = function () { return this.getToken(KotlinParser.COLON, 0); };
    TypeConstraintContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    TypeConstraintContext.prototype.annotations = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        }
        else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    };
    TypeConstraintContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(TypeConstraintContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_typeConstraint; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeConstraintContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeConstraint) {
            listener.enterTypeConstraint(this);
        }
    };
    // @Override
    TypeConstraintContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeConstraint) {
            listener.exitTypeConstraint(this);
        }
    };
    // @Override
    TypeConstraintContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeConstraint) {
            return visitor.visitTypeConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeConstraintContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeConstraintContext = TypeConstraintContext;
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.LCURL = function () { return this.getToken(KotlinParser.LCURL, 0); };
    BlockContext.prototype.statements = function () {
        return this.getRuleContext(0, StatementsContext);
    };
    BlockContext.prototype.RCURL = function () { return this.getToken(KotlinParser.RCURL, 0); };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_block; },
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
var StatementsContext = /** @class */ (function (_super) {
    __extends(StatementsContext, _super);
    function StatementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementsContext.prototype.anysemi = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnysemiContext);
        }
        else {
            return this.getRuleContext(i, AnysemiContext);
        }
    };
    StatementsContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(StatementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_statements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementsContext.prototype.enterRule = function (listener) {
        if (listener.enterStatements) {
            listener.enterStatements(this);
        }
    };
    // @Override
    StatementsContext.prototype.exitRule = function (listener) {
        if (listener.exitStatements) {
            listener.exitStatements(this);
        }
    };
    // @Override
    StatementsContext.prototype.accept = function (visitor) {
        if (visitor.visitStatements) {
            return visitor.visitStatements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementsContext = StatementsContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.declaration = function () {
        return this.tryGetRuleContext(0, DeclarationContext);
    };
    StatementContext.prototype.blockLevelExpression = function () {
        return this.tryGetRuleContext(0, BlockLevelExpressionContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_statement; },
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
var BlockLevelExpressionContext = /** @class */ (function (_super) {
    __extends(BlockLevelExpressionContext, _super);
    function BlockLevelExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockLevelExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    BlockLevelExpressionContext.prototype.annotations = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        }
        else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    };
    BlockLevelExpressionContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(BlockLevelExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_blockLevelExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockLevelExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBlockLevelExpression) {
            listener.enterBlockLevelExpression(this);
        }
    };
    // @Override
    BlockLevelExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBlockLevelExpression) {
            listener.exitBlockLevelExpression(this);
        }
    };
    // @Override
    BlockLevelExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBlockLevelExpression) {
            return visitor.visitBlockLevelExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockLevelExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockLevelExpressionContext = BlockLevelExpressionContext;
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationContext.prototype.classDeclaration = function () {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    };
    DeclarationContext.prototype.functionDeclaration = function () {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    };
    DeclarationContext.prototype.propertyDeclaration = function () {
        return this.tryGetRuleContext(0, PropertyDeclarationContext);
    };
    DeclarationContext.prototype.typeAlias = function () {
        return this.tryGetRuleContext(0, TypeAliasContext);
    };
    DeclarationContext.prototype.labelDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LabelDefinitionContext);
        }
        else {
            return this.getRuleContext(i, LabelDefinitionContext);
        }
    };
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_declaration; },
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
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.disjunction = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DisjunctionContext);
        }
        else {
            return this.getRuleContext(i, DisjunctionContext);
        }
    };
    ExpressionContext.prototype.assignmentOperator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentOperatorContext);
        }
        else {
            return this.getRuleContext(i, AssignmentOperatorContext);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_expression; },
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
var DisjunctionContext = /** @class */ (function (_super) {
    __extends(DisjunctionContext, _super);
    function DisjunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DisjunctionContext.prototype.conjunction = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConjunctionContext);
        }
        else {
            return this.getRuleContext(i, ConjunctionContext);
        }
    };
    DisjunctionContext.prototype.DISJ = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.DISJ);
        }
        else {
            return this.getToken(KotlinParser.DISJ, i);
        }
    };
    DisjunctionContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(DisjunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_disjunction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DisjunctionContext.prototype.enterRule = function (listener) {
        if (listener.enterDisjunction) {
            listener.enterDisjunction(this);
        }
    };
    // @Override
    DisjunctionContext.prototype.exitRule = function (listener) {
        if (listener.exitDisjunction) {
            listener.exitDisjunction(this);
        }
    };
    // @Override
    DisjunctionContext.prototype.accept = function (visitor) {
        if (visitor.visitDisjunction) {
            return visitor.visitDisjunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DisjunctionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DisjunctionContext = DisjunctionContext;
var ConjunctionContext = /** @class */ (function (_super) {
    __extends(ConjunctionContext, _super);
    function ConjunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConjunctionContext.prototype.equalityComparison = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EqualityComparisonContext);
        }
        else {
            return this.getRuleContext(i, EqualityComparisonContext);
        }
    };
    ConjunctionContext.prototype.CONJ = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.CONJ);
        }
        else {
            return this.getToken(KotlinParser.CONJ, i);
        }
    };
    ConjunctionContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(ConjunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_conjunction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConjunctionContext.prototype.enterRule = function (listener) {
        if (listener.enterConjunction) {
            listener.enterConjunction(this);
        }
    };
    // @Override
    ConjunctionContext.prototype.exitRule = function (listener) {
        if (listener.exitConjunction) {
            listener.exitConjunction(this);
        }
    };
    // @Override
    ConjunctionContext.prototype.accept = function (visitor) {
        if (visitor.visitConjunction) {
            return visitor.visitConjunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConjunctionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConjunctionContext = ConjunctionContext;
var EqualityComparisonContext = /** @class */ (function (_super) {
    __extends(EqualityComparisonContext, _super);
    function EqualityComparisonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EqualityComparisonContext.prototype.comparison = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ComparisonContext);
        }
        else {
            return this.getRuleContext(i, ComparisonContext);
        }
    };
    EqualityComparisonContext.prototype.equalityOperation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EqualityOperationContext);
        }
        else {
            return this.getRuleContext(i, EqualityOperationContext);
        }
    };
    EqualityComparisonContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(EqualityComparisonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_equalityComparison; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EqualityComparisonContext.prototype.enterRule = function (listener) {
        if (listener.enterEqualityComparison) {
            listener.enterEqualityComparison(this);
        }
    };
    // @Override
    EqualityComparisonContext.prototype.exitRule = function (listener) {
        if (listener.exitEqualityComparison) {
            listener.exitEqualityComparison(this);
        }
    };
    // @Override
    EqualityComparisonContext.prototype.accept = function (visitor) {
        if (visitor.visitEqualityComparison) {
            return visitor.visitEqualityComparison(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EqualityComparisonContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EqualityComparisonContext = EqualityComparisonContext;
var ComparisonContext = /** @class */ (function (_super) {
    __extends(ComparisonContext, _super);
    function ComparisonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComparisonContext.prototype.namedInfix = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NamedInfixContext);
        }
        else {
            return this.getRuleContext(i, NamedInfixContext);
        }
    };
    ComparisonContext.prototype.comparisonOperator = function () {
        return this.tryGetRuleContext(0, ComparisonOperatorContext);
    };
    ComparisonContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(ComparisonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_comparison; },
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
var NamedInfixContext = /** @class */ (function (_super) {
    __extends(NamedInfixContext, _super);
    function NamedInfixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamedInfixContext.prototype.elvisExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElvisExpressionContext);
        }
        else {
            return this.getRuleContext(i, ElvisExpressionContext);
        }
    };
    NamedInfixContext.prototype.isOperator = function () {
        return this.tryGetRuleContext(0, IsOperatorContext);
    };
    NamedInfixContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    NamedInfixContext.prototype.inOperator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InOperatorContext);
        }
        else {
            return this.getRuleContext(i, InOperatorContext);
        }
    };
    NamedInfixContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(NamedInfixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_namedInfix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamedInfixContext.prototype.enterRule = function (listener) {
        if (listener.enterNamedInfix) {
            listener.enterNamedInfix(this);
        }
    };
    // @Override
    NamedInfixContext.prototype.exitRule = function (listener) {
        if (listener.exitNamedInfix) {
            listener.exitNamedInfix(this);
        }
    };
    // @Override
    NamedInfixContext.prototype.accept = function (visitor) {
        if (visitor.visitNamedInfix) {
            return visitor.visitNamedInfix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamedInfixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamedInfixContext = NamedInfixContext;
var ElvisExpressionContext = /** @class */ (function (_super) {
    __extends(ElvisExpressionContext, _super);
    function ElvisExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElvisExpressionContext.prototype.infixFunctionCall = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InfixFunctionCallContext);
        }
        else {
            return this.getRuleContext(i, InfixFunctionCallContext);
        }
    };
    ElvisExpressionContext.prototype.ELVIS = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.ELVIS);
        }
        else {
            return this.getToken(KotlinParser.ELVIS, i);
        }
    };
    ElvisExpressionContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(ElvisExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_elvisExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElvisExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterElvisExpression) {
            listener.enterElvisExpression(this);
        }
    };
    // @Override
    ElvisExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitElvisExpression) {
            listener.exitElvisExpression(this);
        }
    };
    // @Override
    ElvisExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitElvisExpression) {
            return visitor.visitElvisExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElvisExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElvisExpressionContext = ElvisExpressionContext;
var InfixFunctionCallContext = /** @class */ (function (_super) {
    __extends(InfixFunctionCallContext, _super);
    function InfixFunctionCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InfixFunctionCallContext.prototype.rangeExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RangeExpressionContext);
        }
        else {
            return this.getRuleContext(i, RangeExpressionContext);
        }
    };
    InfixFunctionCallContext.prototype.simpleIdentifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SimpleIdentifierContext);
        }
        else {
            return this.getRuleContext(i, SimpleIdentifierContext);
        }
    };
    InfixFunctionCallContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(InfixFunctionCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_infixFunctionCall; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InfixFunctionCallContext.prototype.enterRule = function (listener) {
        if (listener.enterInfixFunctionCall) {
            listener.enterInfixFunctionCall(this);
        }
    };
    // @Override
    InfixFunctionCallContext.prototype.exitRule = function (listener) {
        if (listener.exitInfixFunctionCall) {
            listener.exitInfixFunctionCall(this);
        }
    };
    // @Override
    InfixFunctionCallContext.prototype.accept = function (visitor) {
        if (visitor.visitInfixFunctionCall) {
            return visitor.visitInfixFunctionCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InfixFunctionCallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InfixFunctionCallContext = InfixFunctionCallContext;
var RangeExpressionContext = /** @class */ (function (_super) {
    __extends(RangeExpressionContext, _super);
    function RangeExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RangeExpressionContext.prototype.additiveExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AdditiveExpressionContext);
        }
        else {
            return this.getRuleContext(i, AdditiveExpressionContext);
        }
    };
    RangeExpressionContext.prototype.RANGE = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.RANGE);
        }
        else {
            return this.getToken(KotlinParser.RANGE, i);
        }
    };
    RangeExpressionContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(RangeExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_rangeExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RangeExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterRangeExpression) {
            listener.enterRangeExpression(this);
        }
    };
    // @Override
    RangeExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitRangeExpression) {
            listener.exitRangeExpression(this);
        }
    };
    // @Override
    RangeExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitRangeExpression) {
            return visitor.visitRangeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RangeExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RangeExpressionContext = RangeExpressionContext;
var AdditiveExpressionContext = /** @class */ (function (_super) {
    __extends(AdditiveExpressionContext, _super);
    function AdditiveExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AdditiveExpressionContext.prototype.multiplicativeExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeExpressionContext);
        }
        else {
            return this.getRuleContext(i, MultiplicativeExpressionContext);
        }
    };
    AdditiveExpressionContext.prototype.additiveOperator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AdditiveOperatorContext);
        }
        else {
            return this.getRuleContext(i, AdditiveOperatorContext);
        }
    };
    AdditiveExpressionContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(AdditiveExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_additiveExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AdditiveExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAdditiveExpression) {
            listener.enterAdditiveExpression(this);
        }
    };
    // @Override
    AdditiveExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAdditiveExpression) {
            listener.exitAdditiveExpression(this);
        }
    };
    // @Override
    AdditiveExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAdditiveExpression) {
            return visitor.visitAdditiveExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdditiveExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AdditiveExpressionContext = AdditiveExpressionContext;
var MultiplicativeExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplicativeExpressionContext, _super);
    function MultiplicativeExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplicativeExpressionContext.prototype.typeRHS = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeRHSContext);
        }
        else {
            return this.getRuleContext(i, TypeRHSContext);
        }
    };
    MultiplicativeExpressionContext.prototype.multiplicativeOperation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeOperationContext);
        }
        else {
            return this.getRuleContext(i, MultiplicativeOperationContext);
        }
    };
    MultiplicativeExpressionContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(MultiplicativeExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_multiplicativeExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiplicativeExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplicativeExpression) {
            listener.enterMultiplicativeExpression(this);
        }
    };
    // @Override
    MultiplicativeExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplicativeExpression) {
            listener.exitMultiplicativeExpression(this);
        }
    };
    // @Override
    MultiplicativeExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplicativeExpression) {
            return visitor.visitMultiplicativeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplicativeExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplicativeExpressionContext = MultiplicativeExpressionContext;
var TypeRHSContext = /** @class */ (function (_super) {
    __extends(TypeRHSContext, _super);
    function TypeRHSContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeRHSContext.prototype.prefixUnaryExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PrefixUnaryExpressionContext);
        }
        else {
            return this.getRuleContext(i, PrefixUnaryExpressionContext);
        }
    };
    TypeRHSContext.prototype.typeOperation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeOperationContext);
        }
        else {
            return this.getRuleContext(i, TypeOperationContext);
        }
    };
    TypeRHSContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(TypeRHSContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_typeRHS; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeRHSContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeRHS) {
            listener.enterTypeRHS(this);
        }
    };
    // @Override
    TypeRHSContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeRHS) {
            listener.exitTypeRHS(this);
        }
    };
    // @Override
    TypeRHSContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeRHS) {
            return visitor.visitTypeRHS(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeRHSContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeRHSContext = TypeRHSContext;
var PrefixUnaryExpressionContext = /** @class */ (function (_super) {
    __extends(PrefixUnaryExpressionContext, _super);
    function PrefixUnaryExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrefixUnaryExpressionContext.prototype.postfixUnaryExpression = function () {
        return this.getRuleContext(0, PostfixUnaryExpressionContext);
    };
    PrefixUnaryExpressionContext.prototype.prefixUnaryOperation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PrefixUnaryOperationContext);
        }
        else {
            return this.getRuleContext(i, PrefixUnaryOperationContext);
        }
    };
    Object.defineProperty(PrefixUnaryExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_prefixUnaryExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrefixUnaryExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPrefixUnaryExpression) {
            listener.enterPrefixUnaryExpression(this);
        }
    };
    // @Override
    PrefixUnaryExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPrefixUnaryExpression) {
            listener.exitPrefixUnaryExpression(this);
        }
    };
    // @Override
    PrefixUnaryExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPrefixUnaryExpression) {
            return visitor.visitPrefixUnaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrefixUnaryExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrefixUnaryExpressionContext = PrefixUnaryExpressionContext;
var PostfixUnaryExpressionContext = /** @class */ (function (_super) {
    __extends(PostfixUnaryExpressionContext, _super);
    function PostfixUnaryExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PostfixUnaryExpressionContext.prototype.atomicExpression = function () {
        return this.tryGetRuleContext(0, AtomicExpressionContext);
    };
    PostfixUnaryExpressionContext.prototype.callableReference = function () {
        return this.tryGetRuleContext(0, CallableReferenceContext);
    };
    PostfixUnaryExpressionContext.prototype.postfixUnaryOperation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PostfixUnaryOperationContext);
        }
        else {
            return this.getRuleContext(i, PostfixUnaryOperationContext);
        }
    };
    Object.defineProperty(PostfixUnaryExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_postfixUnaryExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PostfixUnaryExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPostfixUnaryExpression) {
            listener.enterPostfixUnaryExpression(this);
        }
    };
    // @Override
    PostfixUnaryExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPostfixUnaryExpression) {
            listener.exitPostfixUnaryExpression(this);
        }
    };
    // @Override
    PostfixUnaryExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPostfixUnaryExpression) {
            return visitor.visitPostfixUnaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PostfixUnaryExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PostfixUnaryExpressionContext = PostfixUnaryExpressionContext;
var AtomicExpressionContext = /** @class */ (function (_super) {
    __extends(AtomicExpressionContext, _super);
    function AtomicExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomicExpressionContext.prototype.parenthesizedExpression = function () {
        return this.tryGetRuleContext(0, ParenthesizedExpressionContext);
    };
    AtomicExpressionContext.prototype.literalConstant = function () {
        return this.tryGetRuleContext(0, LiteralConstantContext);
    };
    AtomicExpressionContext.prototype.functionLiteral = function () {
        return this.tryGetRuleContext(0, FunctionLiteralContext);
    };
    AtomicExpressionContext.prototype.thisExpression = function () {
        return this.tryGetRuleContext(0, ThisExpressionContext);
    };
    AtomicExpressionContext.prototype.superExpression = function () {
        return this.tryGetRuleContext(0, SuperExpressionContext);
    };
    AtomicExpressionContext.prototype.conditionalExpression = function () {
        return this.tryGetRuleContext(0, ConditionalExpressionContext);
    };
    AtomicExpressionContext.prototype.tryExpression = function () {
        return this.tryGetRuleContext(0, TryExpressionContext);
    };
    AtomicExpressionContext.prototype.objectLiteral = function () {
        return this.tryGetRuleContext(0, ObjectLiteralContext);
    };
    AtomicExpressionContext.prototype.jumpExpression = function () {
        return this.tryGetRuleContext(0, JumpExpressionContext);
    };
    AtomicExpressionContext.prototype.loopExpression = function () {
        return this.tryGetRuleContext(0, LoopExpressionContext);
    };
    AtomicExpressionContext.prototype.collectionLiteral = function () {
        return this.tryGetRuleContext(0, CollectionLiteralContext);
    };
    AtomicExpressionContext.prototype.simpleIdentifier = function () {
        return this.tryGetRuleContext(0, SimpleIdentifierContext);
    };
    Object.defineProperty(AtomicExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_atomicExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomicExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAtomicExpression) {
            listener.enterAtomicExpression(this);
        }
    };
    // @Override
    AtomicExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAtomicExpression) {
            listener.exitAtomicExpression(this);
        }
    };
    // @Override
    AtomicExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAtomicExpression) {
            return visitor.visitAtomicExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomicExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomicExpressionContext = AtomicExpressionContext;
var ParenthesizedExpressionContext = /** @class */ (function (_super) {
    __extends(ParenthesizedExpressionContext, _super);
    function ParenthesizedExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParenthesizedExpressionContext.prototype.LPAREN = function () { return this.getToken(KotlinParser.LPAREN, 0); };
    ParenthesizedExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ParenthesizedExpressionContext.prototype.RPAREN = function () { return this.getToken(KotlinParser.RPAREN, 0); };
    Object.defineProperty(ParenthesizedExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_parenthesizedExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParenthesizedExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterParenthesizedExpression) {
            listener.enterParenthesizedExpression(this);
        }
    };
    // @Override
    ParenthesizedExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitParenthesizedExpression) {
            listener.exitParenthesizedExpression(this);
        }
    };
    // @Override
    ParenthesizedExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParenthesizedExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParenthesizedExpressionContext = ParenthesizedExpressionContext;
var CallSuffixContext = /** @class */ (function (_super) {
    __extends(CallSuffixContext, _super);
    function CallSuffixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CallSuffixContext.prototype.typeArguments = function () {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    };
    CallSuffixContext.prototype.valueArguments = function () {
        return this.tryGetRuleContext(0, ValueArgumentsContext);
    };
    CallSuffixContext.prototype.annotatedLambda = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotatedLambdaContext);
        }
        else {
            return this.getRuleContext(i, AnnotatedLambdaContext);
        }
    };
    Object.defineProperty(CallSuffixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_callSuffix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CallSuffixContext.prototype.enterRule = function (listener) {
        if (listener.enterCallSuffix) {
            listener.enterCallSuffix(this);
        }
    };
    // @Override
    CallSuffixContext.prototype.exitRule = function (listener) {
        if (listener.exitCallSuffix) {
            listener.exitCallSuffix(this);
        }
    };
    // @Override
    CallSuffixContext.prototype.accept = function (visitor) {
        if (visitor.visitCallSuffix) {
            return visitor.visitCallSuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CallSuffixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CallSuffixContext = CallSuffixContext;
var AnnotatedLambdaContext = /** @class */ (function (_super) {
    __extends(AnnotatedLambdaContext, _super);
    function AnnotatedLambdaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotatedLambdaContext.prototype.functionLiteral = function () {
        return this.getRuleContext(0, FunctionLiteralContext);
    };
    AnnotatedLambdaContext.prototype.unescapedAnnotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UnescapedAnnotationContext);
        }
        else {
            return this.getRuleContext(i, UnescapedAnnotationContext);
        }
    };
    AnnotatedLambdaContext.prototype.LabelDefinition = function () { return this.tryGetToken(KotlinParser.LabelDefinition, 0); };
    AnnotatedLambdaContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(AnnotatedLambdaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_annotatedLambda; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotatedLambdaContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotatedLambda) {
            listener.enterAnnotatedLambda(this);
        }
    };
    // @Override
    AnnotatedLambdaContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotatedLambda) {
            listener.exitAnnotatedLambda(this);
        }
    };
    // @Override
    AnnotatedLambdaContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotatedLambda) {
            return visitor.visitAnnotatedLambda(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotatedLambdaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotatedLambdaContext = AnnotatedLambdaContext;
var ArrayAccessContext = /** @class */ (function (_super) {
    __extends(ArrayAccessContext, _super);
    function ArrayAccessContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayAccessContext.prototype.LSQUARE = function () { return this.getToken(KotlinParser.LSQUARE, 0); };
    ArrayAccessContext.prototype.RSQUARE = function () { return this.getToken(KotlinParser.RSQUARE, 0); };
    ArrayAccessContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ArrayAccessContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    };
    Object.defineProperty(ArrayAccessContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_arrayAccess; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayAccessContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayAccess) {
            listener.enterArrayAccess(this);
        }
    };
    // @Override
    ArrayAccessContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayAccess) {
            listener.exitArrayAccess(this);
        }
    };
    // @Override
    ArrayAccessContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayAccess) {
            return visitor.visitArrayAccess(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayAccessContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayAccessContext = ArrayAccessContext;
var ValueArgumentsContext = /** @class */ (function (_super) {
    __extends(ValueArgumentsContext, _super);
    function ValueArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueArgumentsContext.prototype.LPAREN = function () { return this.getToken(KotlinParser.LPAREN, 0); };
    ValueArgumentsContext.prototype.RPAREN = function () { return this.getToken(KotlinParser.RPAREN, 0); };
    ValueArgumentsContext.prototype.valueArgument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueArgumentContext);
        }
        else {
            return this.getRuleContext(i, ValueArgumentContext);
        }
    };
    ValueArgumentsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    };
    Object.defineProperty(ValueArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_valueArguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValueArgumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterValueArguments) {
            listener.enterValueArguments(this);
        }
    };
    // @Override
    ValueArgumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitValueArguments) {
            listener.exitValueArguments(this);
        }
    };
    // @Override
    ValueArgumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitValueArguments) {
            return visitor.visitValueArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueArgumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueArgumentsContext = ValueArgumentsContext;
var TypeArgumentsContext = /** @class */ (function (_super) {
    __extends(TypeArgumentsContext, _super);
    function TypeArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeArgumentsContext.prototype.LANGLE = function () { return this.getToken(KotlinParser.LANGLE, 0); };
    TypeArgumentsContext.prototype.typeProjection = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeProjectionContext);
        }
        else {
            return this.getRuleContext(i, TypeProjectionContext);
        }
    };
    TypeArgumentsContext.prototype.RANGLE = function () { return this.getToken(KotlinParser.RANGLE, 0); };
    TypeArgumentsContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    TypeArgumentsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    };
    Object.defineProperty(TypeArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_typeArguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeArgumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeArguments) {
            listener.enterTypeArguments(this);
        }
    };
    // @Override
    TypeArgumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeArguments) {
            listener.exitTypeArguments(this);
        }
    };
    // @Override
    TypeArgumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeArguments) {
            return visitor.visitTypeArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeArgumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeArgumentsContext = TypeArgumentsContext;
var TypeProjectionContext = /** @class */ (function (_super) {
    __extends(TypeProjectionContext, _super);
    function TypeProjectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeProjectionContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    TypeProjectionContext.prototype.typeProjectionModifierList = function () {
        return this.tryGetRuleContext(0, TypeProjectionModifierListContext);
    };
    TypeProjectionContext.prototype.MULT = function () { return this.tryGetToken(KotlinParser.MULT, 0); };
    Object.defineProperty(TypeProjectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_typeProjection; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeProjectionContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeProjection) {
            listener.enterTypeProjection(this);
        }
    };
    // @Override
    TypeProjectionContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeProjection) {
            listener.exitTypeProjection(this);
        }
    };
    // @Override
    TypeProjectionContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeProjection) {
            return visitor.visitTypeProjection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeProjectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeProjectionContext = TypeProjectionContext;
var TypeProjectionModifierListContext = /** @class */ (function (_super) {
    __extends(TypeProjectionModifierListContext, _super);
    function TypeProjectionModifierListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeProjectionModifierListContext.prototype.varianceAnnotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VarianceAnnotationContext);
        }
        else {
            return this.getRuleContext(i, VarianceAnnotationContext);
        }
    };
    Object.defineProperty(TypeProjectionModifierListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_typeProjectionModifierList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeProjectionModifierListContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeProjectionModifierList) {
            listener.enterTypeProjectionModifierList(this);
        }
    };
    // @Override
    TypeProjectionModifierListContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeProjectionModifierList) {
            listener.exitTypeProjectionModifierList(this);
        }
    };
    // @Override
    TypeProjectionModifierListContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeProjectionModifierList) {
            return visitor.visitTypeProjectionModifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeProjectionModifierListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeProjectionModifierListContext = TypeProjectionModifierListContext;
var ValueArgumentContext = /** @class */ (function (_super) {
    __extends(ValueArgumentContext, _super);
    function ValueArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueArgumentContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ValueArgumentContext.prototype.simpleIdentifier = function () {
        return this.tryGetRuleContext(0, SimpleIdentifierContext);
    };
    ValueArgumentContext.prototype.ASSIGNMENT = function () { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); };
    ValueArgumentContext.prototype.MULT = function () { return this.tryGetToken(KotlinParser.MULT, 0); };
    ValueArgumentContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(ValueArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_valueArgument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValueArgumentContext.prototype.enterRule = function (listener) {
        if (listener.enterValueArgument) {
            listener.enterValueArgument(this);
        }
    };
    // @Override
    ValueArgumentContext.prototype.exitRule = function (listener) {
        if (listener.exitValueArgument) {
            listener.exitValueArgument(this);
        }
    };
    // @Override
    ValueArgumentContext.prototype.accept = function (visitor) {
        if (visitor.visitValueArgument) {
            return visitor.visitValueArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueArgumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueArgumentContext = ValueArgumentContext;
var LiteralConstantContext = /** @class */ (function (_super) {
    __extends(LiteralConstantContext, _super);
    function LiteralConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralConstantContext.prototype.BooleanLiteral = function () { return this.tryGetToken(KotlinParser.BooleanLiteral, 0); };
    LiteralConstantContext.prototype.IntegerLiteral = function () { return this.tryGetToken(KotlinParser.IntegerLiteral, 0); };
    LiteralConstantContext.prototype.stringLiteral = function () {
        return this.tryGetRuleContext(0, StringLiteralContext);
    };
    LiteralConstantContext.prototype.HexLiteral = function () { return this.tryGetToken(KotlinParser.HexLiteral, 0); };
    LiteralConstantContext.prototype.BinLiteral = function () { return this.tryGetToken(KotlinParser.BinLiteral, 0); };
    LiteralConstantContext.prototype.CharacterLiteral = function () { return this.tryGetToken(KotlinParser.CharacterLiteral, 0); };
    LiteralConstantContext.prototype.RealLiteral = function () { return this.tryGetToken(KotlinParser.RealLiteral, 0); };
    LiteralConstantContext.prototype.NullLiteral = function () { return this.tryGetToken(KotlinParser.NullLiteral, 0); };
    LiteralConstantContext.prototype.LongLiteral = function () { return this.tryGetToken(KotlinParser.LongLiteral, 0); };
    Object.defineProperty(LiteralConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_literalConstant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LiteralConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteralConstant) {
            listener.enterLiteralConstant(this);
        }
    };
    // @Override
    LiteralConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteralConstant) {
            listener.exitLiteralConstant(this);
        }
    };
    // @Override
    LiteralConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteralConstant) {
            return visitor.visitLiteralConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LiteralConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LiteralConstantContext = LiteralConstantContext;
var StringLiteralContext = /** @class */ (function (_super) {
    __extends(StringLiteralContext, _super);
    function StringLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringLiteralContext.prototype.lineStringLiteral = function () {
        return this.tryGetRuleContext(0, LineStringLiteralContext);
    };
    StringLiteralContext.prototype.multiLineStringLiteral = function () {
        return this.tryGetRuleContext(0, MultiLineStringLiteralContext);
    };
    Object.defineProperty(StringLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_stringLiteral; },
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
var LineStringLiteralContext = /** @class */ (function (_super) {
    __extends(LineStringLiteralContext, _super);
    function LineStringLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineStringLiteralContext.prototype.QUOTE_OPEN = function () { return this.getToken(KotlinParser.QUOTE_OPEN, 0); };
    LineStringLiteralContext.prototype.QUOTE_CLOSE = function () { return this.getToken(KotlinParser.QUOTE_CLOSE, 0); };
    LineStringLiteralContext.prototype.lineStringContent = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineStringContentContext);
        }
        else {
            return this.getRuleContext(i, LineStringContentContext);
        }
    };
    LineStringLiteralContext.prototype.lineStringExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineStringExpressionContext);
        }
        else {
            return this.getRuleContext(i, LineStringExpressionContext);
        }
    };
    Object.defineProperty(LineStringLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_lineStringLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineStringLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterLineStringLiteral) {
            listener.enterLineStringLiteral(this);
        }
    };
    // @Override
    LineStringLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitLineStringLiteral) {
            listener.exitLineStringLiteral(this);
        }
    };
    // @Override
    LineStringLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitLineStringLiteral) {
            return visitor.visitLineStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineStringLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineStringLiteralContext = LineStringLiteralContext;
var MultiLineStringLiteralContext = /** @class */ (function (_super) {
    __extends(MultiLineStringLiteralContext, _super);
    function MultiLineStringLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiLineStringLiteralContext.prototype.TRIPLE_QUOTE_OPEN = function () { return this.getToken(KotlinParser.TRIPLE_QUOTE_OPEN, 0); };
    MultiLineStringLiteralContext.prototype.TRIPLE_QUOTE_CLOSE = function () { return this.getToken(KotlinParser.TRIPLE_QUOTE_CLOSE, 0); };
    MultiLineStringLiteralContext.prototype.multiLineStringContent = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiLineStringContentContext);
        }
        else {
            return this.getRuleContext(i, MultiLineStringContentContext);
        }
    };
    MultiLineStringLiteralContext.prototype.multiLineStringExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiLineStringExpressionContext);
        }
        else {
            return this.getRuleContext(i, MultiLineStringExpressionContext);
        }
    };
    MultiLineStringLiteralContext.prototype.lineStringLiteral = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineStringLiteralContext);
        }
        else {
            return this.getRuleContext(i, LineStringLiteralContext);
        }
    };
    MultiLineStringLiteralContext.prototype.MultiLineStringQuote = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.MultiLineStringQuote);
        }
        else {
            return this.getToken(KotlinParser.MultiLineStringQuote, i);
        }
    };
    Object.defineProperty(MultiLineStringLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_multiLineStringLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiLineStringLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiLineStringLiteral) {
            listener.enterMultiLineStringLiteral(this);
        }
    };
    // @Override
    MultiLineStringLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiLineStringLiteral) {
            listener.exitMultiLineStringLiteral(this);
        }
    };
    // @Override
    MultiLineStringLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiLineStringLiteral) {
            return visitor.visitMultiLineStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiLineStringLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiLineStringLiteralContext = MultiLineStringLiteralContext;
var LineStringContentContext = /** @class */ (function (_super) {
    __extends(LineStringContentContext, _super);
    function LineStringContentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineStringContentContext.prototype.LineStrText = function () { return this.tryGetToken(KotlinParser.LineStrText, 0); };
    LineStringContentContext.prototype.LineStrEscapedChar = function () { return this.tryGetToken(KotlinParser.LineStrEscapedChar, 0); };
    LineStringContentContext.prototype.LineStrRef = function () { return this.tryGetToken(KotlinParser.LineStrRef, 0); };
    Object.defineProperty(LineStringContentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_lineStringContent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineStringContentContext.prototype.enterRule = function (listener) {
        if (listener.enterLineStringContent) {
            listener.enterLineStringContent(this);
        }
    };
    // @Override
    LineStringContentContext.prototype.exitRule = function (listener) {
        if (listener.exitLineStringContent) {
            listener.exitLineStringContent(this);
        }
    };
    // @Override
    LineStringContentContext.prototype.accept = function (visitor) {
        if (visitor.visitLineStringContent) {
            return visitor.visitLineStringContent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineStringContentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineStringContentContext = LineStringContentContext;
var LineStringExpressionContext = /** @class */ (function (_super) {
    __extends(LineStringExpressionContext, _super);
    function LineStringExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineStringExpressionContext.prototype.LineStrExprStart = function () { return this.getToken(KotlinParser.LineStrExprStart, 0); };
    LineStringExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    LineStringExpressionContext.prototype.RCURL = function () { return this.getToken(KotlinParser.RCURL, 0); };
    Object.defineProperty(LineStringExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_lineStringExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineStringExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLineStringExpression) {
            listener.enterLineStringExpression(this);
        }
    };
    // @Override
    LineStringExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLineStringExpression) {
            listener.exitLineStringExpression(this);
        }
    };
    // @Override
    LineStringExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLineStringExpression) {
            return visitor.visitLineStringExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineStringExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineStringExpressionContext = LineStringExpressionContext;
var MultiLineStringContentContext = /** @class */ (function (_super) {
    __extends(MultiLineStringContentContext, _super);
    function MultiLineStringContentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiLineStringContentContext.prototype.MultiLineStrText = function () { return this.tryGetToken(KotlinParser.MultiLineStrText, 0); };
    MultiLineStringContentContext.prototype.MultiLineStrEscapedChar = function () { return this.tryGetToken(KotlinParser.MultiLineStrEscapedChar, 0); };
    MultiLineStringContentContext.prototype.MultiLineStrRef = function () { return this.tryGetToken(KotlinParser.MultiLineStrRef, 0); };
    Object.defineProperty(MultiLineStringContentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_multiLineStringContent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiLineStringContentContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiLineStringContent) {
            listener.enterMultiLineStringContent(this);
        }
    };
    // @Override
    MultiLineStringContentContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiLineStringContent) {
            listener.exitMultiLineStringContent(this);
        }
    };
    // @Override
    MultiLineStringContentContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiLineStringContent) {
            return visitor.visitMultiLineStringContent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiLineStringContentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiLineStringContentContext = MultiLineStringContentContext;
var MultiLineStringExpressionContext = /** @class */ (function (_super) {
    __extends(MultiLineStringExpressionContext, _super);
    function MultiLineStringExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiLineStringExpressionContext.prototype.MultiLineStrExprStart = function () { return this.getToken(KotlinParser.MultiLineStrExprStart, 0); };
    MultiLineStringExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    MultiLineStringExpressionContext.prototype.RCURL = function () { return this.getToken(KotlinParser.RCURL, 0); };
    Object.defineProperty(MultiLineStringExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_multiLineStringExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiLineStringExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiLineStringExpression) {
            listener.enterMultiLineStringExpression(this);
        }
    };
    // @Override
    MultiLineStringExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiLineStringExpression) {
            listener.exitMultiLineStringExpression(this);
        }
    };
    // @Override
    MultiLineStringExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiLineStringExpression) {
            return visitor.visitMultiLineStringExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiLineStringExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiLineStringExpressionContext = MultiLineStringExpressionContext;
var FunctionLiteralContext = /** @class */ (function (_super) {
    __extends(FunctionLiteralContext, _super);
    function FunctionLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionLiteralContext.prototype.LCURL = function () { return this.tryGetToken(KotlinParser.LCURL, 0); };
    FunctionLiteralContext.prototype.statements = function () {
        return this.tryGetRuleContext(0, StatementsContext);
    };
    FunctionLiteralContext.prototype.RCURL = function () { return this.tryGetToken(KotlinParser.RCURL, 0); };
    FunctionLiteralContext.prototype.lambdaParameters = function () {
        return this.tryGetRuleContext(0, LambdaParametersContext);
    };
    FunctionLiteralContext.prototype.ARROW = function () { return this.tryGetToken(KotlinParser.ARROW, 0); };
    FunctionLiteralContext.prototype.annotations = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        }
        else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    };
    FunctionLiteralContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(FunctionLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_functionLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionLiteral) {
            listener.enterFunctionLiteral(this);
        }
    };
    // @Override
    FunctionLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionLiteral) {
            listener.exitFunctionLiteral(this);
        }
    };
    // @Override
    FunctionLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionLiteral) {
            return visitor.visitFunctionLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionLiteralContext = FunctionLiteralContext;
var LambdaParametersContext = /** @class */ (function (_super) {
    __extends(LambdaParametersContext, _super);
    function LambdaParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LambdaParametersContext.prototype.lambdaParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LambdaParameterContext);
        }
        else {
            return this.getRuleContext(i, LambdaParameterContext);
        }
    };
    LambdaParametersContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    };
    LambdaParametersContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(LambdaParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_lambdaParameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LambdaParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterLambdaParameters) {
            listener.enterLambdaParameters(this);
        }
    };
    // @Override
    LambdaParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitLambdaParameters) {
            listener.exitLambdaParameters(this);
        }
    };
    // @Override
    LambdaParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitLambdaParameters) {
            return visitor.visitLambdaParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LambdaParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LambdaParametersContext = LambdaParametersContext;
var LambdaParameterContext = /** @class */ (function (_super) {
    __extends(LambdaParameterContext, _super);
    function LambdaParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LambdaParameterContext.prototype.variableDeclaration = function () {
        return this.tryGetRuleContext(0, VariableDeclarationContext);
    };
    LambdaParameterContext.prototype.multiVariableDeclaration = function () {
        return this.tryGetRuleContext(0, MultiVariableDeclarationContext);
    };
    LambdaParameterContext.prototype.COLON = function () { return this.tryGetToken(KotlinParser.COLON, 0); };
    LambdaParameterContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    LambdaParameterContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(LambdaParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_lambdaParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LambdaParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterLambdaParameter) {
            listener.enterLambdaParameter(this);
        }
    };
    // @Override
    LambdaParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitLambdaParameter) {
            listener.exitLambdaParameter(this);
        }
    };
    // @Override
    LambdaParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitLambdaParameter) {
            return visitor.visitLambdaParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LambdaParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LambdaParameterContext = LambdaParameterContext;
var ObjectLiteralContext = /** @class */ (function (_super) {
    __extends(ObjectLiteralContext, _super);
    function ObjectLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectLiteralContext.prototype.OBJECT = function () { return this.getToken(KotlinParser.OBJECT, 0); };
    ObjectLiteralContext.prototype.classBody = function () {
        return this.getRuleContext(0, ClassBodyContext);
    };
    ObjectLiteralContext.prototype.COLON = function () { return this.tryGetToken(KotlinParser.COLON, 0); };
    ObjectLiteralContext.prototype.delegationSpecifiers = function () {
        return this.tryGetRuleContext(0, DelegationSpecifiersContext);
    };
    ObjectLiteralContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(ObjectLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_objectLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectLiteral) {
            listener.enterObjectLiteral(this);
        }
    };
    // @Override
    ObjectLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectLiteral) {
            listener.exitObjectLiteral(this);
        }
    };
    // @Override
    ObjectLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectLiteral) {
            return visitor.visitObjectLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectLiteralContext = ObjectLiteralContext;
var CollectionLiteralContext = /** @class */ (function (_super) {
    __extends(CollectionLiteralContext, _super);
    function CollectionLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CollectionLiteralContext.prototype.LSQUARE = function () { return this.getToken(KotlinParser.LSQUARE, 0); };
    CollectionLiteralContext.prototype.RSQUARE = function () { return this.getToken(KotlinParser.RSQUARE, 0); };
    CollectionLiteralContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    CollectionLiteralContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    };
    Object.defineProperty(CollectionLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_collectionLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CollectionLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterCollectionLiteral) {
            listener.enterCollectionLiteral(this);
        }
    };
    // @Override
    CollectionLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitCollectionLiteral) {
            listener.exitCollectionLiteral(this);
        }
    };
    // @Override
    CollectionLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitCollectionLiteral) {
            return visitor.visitCollectionLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CollectionLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CollectionLiteralContext = CollectionLiteralContext;
var ThisExpressionContext = /** @class */ (function (_super) {
    __extends(ThisExpressionContext, _super);
    function ThisExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ThisExpressionContext.prototype.THIS = function () { return this.getToken(KotlinParser.THIS, 0); };
    ThisExpressionContext.prototype.LabelReference = function () { return this.tryGetToken(KotlinParser.LabelReference, 0); };
    Object.defineProperty(ThisExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_thisExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ThisExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterThisExpression) {
            listener.enterThisExpression(this);
        }
    };
    // @Override
    ThisExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitThisExpression) {
            listener.exitThisExpression(this);
        }
    };
    // @Override
    ThisExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitThisExpression) {
            return visitor.visitThisExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThisExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ThisExpressionContext = ThisExpressionContext;
var SuperExpressionContext = /** @class */ (function (_super) {
    __extends(SuperExpressionContext, _super);
    function SuperExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SuperExpressionContext.prototype.SUPER = function () { return this.getToken(KotlinParser.SUPER, 0); };
    SuperExpressionContext.prototype.LANGLE = function () { return this.tryGetToken(KotlinParser.LANGLE, 0); };
    SuperExpressionContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    SuperExpressionContext.prototype.RANGLE = function () { return this.tryGetToken(KotlinParser.RANGLE, 0); };
    SuperExpressionContext.prototype.LabelReference = function () { return this.tryGetToken(KotlinParser.LabelReference, 0); };
    SuperExpressionContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(SuperExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_superExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SuperExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSuperExpression) {
            listener.enterSuperExpression(this);
        }
    };
    // @Override
    SuperExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSuperExpression) {
            listener.exitSuperExpression(this);
        }
    };
    // @Override
    SuperExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSuperExpression) {
            return visitor.visitSuperExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SuperExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SuperExpressionContext = SuperExpressionContext;
var ConditionalExpressionContext = /** @class */ (function (_super) {
    __extends(ConditionalExpressionContext, _super);
    function ConditionalExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionalExpressionContext.prototype.ifExpression = function () {
        return this.tryGetRuleContext(0, IfExpressionContext);
    };
    ConditionalExpressionContext.prototype.whenExpression = function () {
        return this.tryGetRuleContext(0, WhenExpressionContext);
    };
    Object.defineProperty(ConditionalExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_conditionalExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConditionalExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterConditionalExpression) {
            listener.enterConditionalExpression(this);
        }
    };
    // @Override
    ConditionalExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitConditionalExpression) {
            listener.exitConditionalExpression(this);
        }
    };
    // @Override
    ConditionalExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitConditionalExpression) {
            return visitor.visitConditionalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConditionalExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConditionalExpressionContext = ConditionalExpressionContext;
var IfExpressionContext = /** @class */ (function (_super) {
    __extends(IfExpressionContext, _super);
    function IfExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfExpressionContext.prototype.IF = function () { return this.getToken(KotlinParser.IF, 0); };
    IfExpressionContext.prototype.LPAREN = function () { return this.getToken(KotlinParser.LPAREN, 0); };
    IfExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    IfExpressionContext.prototype.RPAREN = function () { return this.getToken(KotlinParser.RPAREN, 0); };
    IfExpressionContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    IfExpressionContext.prototype.controlStructureBody = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ControlStructureBodyContext);
        }
        else {
            return this.getRuleContext(i, ControlStructureBodyContext);
        }
    };
    IfExpressionContext.prototype.SEMICOLON = function () { return this.tryGetToken(KotlinParser.SEMICOLON, 0); };
    IfExpressionContext.prototype.ELSE = function () { return this.tryGetToken(KotlinParser.ELSE, 0); };
    Object.defineProperty(IfExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_ifExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterIfExpression) {
            listener.enterIfExpression(this);
        }
    };
    // @Override
    IfExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitIfExpression) {
            listener.exitIfExpression(this);
        }
    };
    // @Override
    IfExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitIfExpression) {
            return visitor.visitIfExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfExpressionContext = IfExpressionContext;
var ControlStructureBodyContext = /** @class */ (function (_super) {
    __extends(ControlStructureBodyContext, _super);
    function ControlStructureBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ControlStructureBodyContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    ControlStructureBodyContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ControlStructureBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_controlStructureBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ControlStructureBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterControlStructureBody) {
            listener.enterControlStructureBody(this);
        }
    };
    // @Override
    ControlStructureBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitControlStructureBody) {
            listener.exitControlStructureBody(this);
        }
    };
    // @Override
    ControlStructureBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitControlStructureBody) {
            return visitor.visitControlStructureBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ControlStructureBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ControlStructureBodyContext = ControlStructureBodyContext;
var WhenExpressionContext = /** @class */ (function (_super) {
    __extends(WhenExpressionContext, _super);
    function WhenExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhenExpressionContext.prototype.WHEN = function () { return this.getToken(KotlinParser.WHEN, 0); };
    WhenExpressionContext.prototype.LCURL = function () { return this.getToken(KotlinParser.LCURL, 0); };
    WhenExpressionContext.prototype.RCURL = function () { return this.getToken(KotlinParser.RCURL, 0); };
    WhenExpressionContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    WhenExpressionContext.prototype.LPAREN = function () { return this.tryGetToken(KotlinParser.LPAREN, 0); };
    WhenExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    WhenExpressionContext.prototype.RPAREN = function () { return this.tryGetToken(KotlinParser.RPAREN, 0); };
    WhenExpressionContext.prototype.whenEntry = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WhenEntryContext);
        }
        else {
            return this.getRuleContext(i, WhenEntryContext);
        }
    };
    Object.defineProperty(WhenExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_whenExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhenExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterWhenExpression) {
            listener.enterWhenExpression(this);
        }
    };
    // @Override
    WhenExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitWhenExpression) {
            listener.exitWhenExpression(this);
        }
    };
    // @Override
    WhenExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitWhenExpression) {
            return visitor.visitWhenExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhenExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhenExpressionContext = WhenExpressionContext;
var WhenEntryContext = /** @class */ (function (_super) {
    __extends(WhenEntryContext, _super);
    function WhenEntryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhenEntryContext.prototype.whenCondition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(WhenConditionContext);
        }
        else {
            return this.getRuleContext(i, WhenConditionContext);
        }
    };
    WhenEntryContext.prototype.ARROW = function () { return this.getToken(KotlinParser.ARROW, 0); };
    WhenEntryContext.prototype.controlStructureBody = function () {
        return this.getRuleContext(0, ControlStructureBodyContext);
    };
    WhenEntryContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    };
    WhenEntryContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    WhenEntryContext.prototype.semi = function () {
        return this.tryGetRuleContext(0, SemiContext);
    };
    WhenEntryContext.prototype.ELSE = function () { return this.tryGetToken(KotlinParser.ELSE, 0); };
    Object.defineProperty(WhenEntryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_whenEntry; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhenEntryContext.prototype.enterRule = function (listener) {
        if (listener.enterWhenEntry) {
            listener.enterWhenEntry(this);
        }
    };
    // @Override
    WhenEntryContext.prototype.exitRule = function (listener) {
        if (listener.exitWhenEntry) {
            listener.exitWhenEntry(this);
        }
    };
    // @Override
    WhenEntryContext.prototype.accept = function (visitor) {
        if (visitor.visitWhenEntry) {
            return visitor.visitWhenEntry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhenEntryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhenEntryContext = WhenEntryContext;
var WhenConditionContext = /** @class */ (function (_super) {
    __extends(WhenConditionContext, _super);
    function WhenConditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhenConditionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    WhenConditionContext.prototype.rangeTest = function () {
        return this.tryGetRuleContext(0, RangeTestContext);
    };
    WhenConditionContext.prototype.typeTest = function () {
        return this.tryGetRuleContext(0, TypeTestContext);
    };
    Object.defineProperty(WhenConditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_whenCondition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhenConditionContext.prototype.enterRule = function (listener) {
        if (listener.enterWhenCondition) {
            listener.enterWhenCondition(this);
        }
    };
    // @Override
    WhenConditionContext.prototype.exitRule = function (listener) {
        if (listener.exitWhenCondition) {
            listener.exitWhenCondition(this);
        }
    };
    // @Override
    WhenConditionContext.prototype.accept = function (visitor) {
        if (visitor.visitWhenCondition) {
            return visitor.visitWhenCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhenConditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhenConditionContext = WhenConditionContext;
var RangeTestContext = /** @class */ (function (_super) {
    __extends(RangeTestContext, _super);
    function RangeTestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RangeTestContext.prototype.inOperator = function () {
        return this.getRuleContext(0, InOperatorContext);
    };
    RangeTestContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    RangeTestContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(RangeTestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_rangeTest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RangeTestContext.prototype.enterRule = function (listener) {
        if (listener.enterRangeTest) {
            listener.enterRangeTest(this);
        }
    };
    // @Override
    RangeTestContext.prototype.exitRule = function (listener) {
        if (listener.exitRangeTest) {
            listener.exitRangeTest(this);
        }
    };
    // @Override
    RangeTestContext.prototype.accept = function (visitor) {
        if (visitor.visitRangeTest) {
            return visitor.visitRangeTest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RangeTestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RangeTestContext = RangeTestContext;
var TypeTestContext = /** @class */ (function (_super) {
    __extends(TypeTestContext, _super);
    function TypeTestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeTestContext.prototype.isOperator = function () {
        return this.getRuleContext(0, IsOperatorContext);
    };
    TypeTestContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    TypeTestContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(TypeTestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_typeTest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeTestContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeTest) {
            listener.enterTypeTest(this);
        }
    };
    // @Override
    TypeTestContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeTest) {
            listener.exitTypeTest(this);
        }
    };
    // @Override
    TypeTestContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeTest) {
            return visitor.visitTypeTest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeTestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeTestContext = TypeTestContext;
var TryExpressionContext = /** @class */ (function (_super) {
    __extends(TryExpressionContext, _super);
    function TryExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TryExpressionContext.prototype.TRY = function () { return this.getToken(KotlinParser.TRY, 0); };
    TryExpressionContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    TryExpressionContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    TryExpressionContext.prototype.catchBlock = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CatchBlockContext);
        }
        else {
            return this.getRuleContext(i, CatchBlockContext);
        }
    };
    TryExpressionContext.prototype.finallyBlock = function () {
        return this.tryGetRuleContext(0, FinallyBlockContext);
    };
    Object.defineProperty(TryExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_tryExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TryExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterTryExpression) {
            listener.enterTryExpression(this);
        }
    };
    // @Override
    TryExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitTryExpression) {
            listener.exitTryExpression(this);
        }
    };
    // @Override
    TryExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitTryExpression) {
            return visitor.visitTryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TryExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TryExpressionContext = TryExpressionContext;
var CatchBlockContext = /** @class */ (function (_super) {
    __extends(CatchBlockContext, _super);
    function CatchBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CatchBlockContext.prototype.CATCH = function () { return this.getToken(KotlinParser.CATCH, 0); };
    CatchBlockContext.prototype.LPAREN = function () { return this.getToken(KotlinParser.LPAREN, 0); };
    CatchBlockContext.prototype.simpleIdentifier = function () {
        return this.getRuleContext(0, SimpleIdentifierContext);
    };
    CatchBlockContext.prototype.COLON = function () { return this.getToken(KotlinParser.COLON, 0); };
    CatchBlockContext.prototype.userType = function () {
        return this.getRuleContext(0, UserTypeContext);
    };
    CatchBlockContext.prototype.RPAREN = function () { return this.getToken(KotlinParser.RPAREN, 0); };
    CatchBlockContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    CatchBlockContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    CatchBlockContext.prototype.annotations = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        }
        else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    };
    Object.defineProperty(CatchBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_catchBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CatchBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterCatchBlock) {
            listener.enterCatchBlock(this);
        }
    };
    // @Override
    CatchBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitCatchBlock) {
            listener.exitCatchBlock(this);
        }
    };
    // @Override
    CatchBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitCatchBlock) {
            return visitor.visitCatchBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CatchBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CatchBlockContext = CatchBlockContext;
var FinallyBlockContext = /** @class */ (function (_super) {
    __extends(FinallyBlockContext, _super);
    function FinallyBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FinallyBlockContext.prototype.FINALLY = function () { return this.getToken(KotlinParser.FINALLY, 0); };
    FinallyBlockContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    FinallyBlockContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(FinallyBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_finallyBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FinallyBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterFinallyBlock) {
            listener.enterFinallyBlock(this);
        }
    };
    // @Override
    FinallyBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitFinallyBlock) {
            listener.exitFinallyBlock(this);
        }
    };
    // @Override
    FinallyBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitFinallyBlock) {
            return visitor.visitFinallyBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FinallyBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FinallyBlockContext = FinallyBlockContext;
var LoopExpressionContext = /** @class */ (function (_super) {
    __extends(LoopExpressionContext, _super);
    function LoopExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LoopExpressionContext.prototype.forExpression = function () {
        return this.tryGetRuleContext(0, ForExpressionContext);
    };
    LoopExpressionContext.prototype.whileExpression = function () {
        return this.tryGetRuleContext(0, WhileExpressionContext);
    };
    LoopExpressionContext.prototype.doWhileExpression = function () {
        return this.tryGetRuleContext(0, DoWhileExpressionContext);
    };
    Object.defineProperty(LoopExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_loopExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LoopExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLoopExpression) {
            listener.enterLoopExpression(this);
        }
    };
    // @Override
    LoopExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLoopExpression) {
            listener.exitLoopExpression(this);
        }
    };
    // @Override
    LoopExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLoopExpression) {
            return visitor.visitLoopExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LoopExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LoopExpressionContext = LoopExpressionContext;
var ForExpressionContext = /** @class */ (function (_super) {
    __extends(ForExpressionContext, _super);
    function ForExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForExpressionContext.prototype.FOR = function () { return this.getToken(KotlinParser.FOR, 0); };
    ForExpressionContext.prototype.LPAREN = function () { return this.getToken(KotlinParser.LPAREN, 0); };
    ForExpressionContext.prototype.IN = function () { return this.getToken(KotlinParser.IN, 0); };
    ForExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ForExpressionContext.prototype.RPAREN = function () { return this.getToken(KotlinParser.RPAREN, 0); };
    ForExpressionContext.prototype.variableDeclaration = function () {
        return this.tryGetRuleContext(0, VariableDeclarationContext);
    };
    ForExpressionContext.prototype.multiVariableDeclaration = function () {
        return this.tryGetRuleContext(0, MultiVariableDeclarationContext);
    };
    ForExpressionContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    ForExpressionContext.prototype.annotations = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        }
        else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    };
    ForExpressionContext.prototype.controlStructureBody = function () {
        return this.tryGetRuleContext(0, ControlStructureBodyContext);
    };
    Object.defineProperty(ForExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_forExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterForExpression) {
            listener.enterForExpression(this);
        }
    };
    // @Override
    ForExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitForExpression) {
            listener.exitForExpression(this);
        }
    };
    // @Override
    ForExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitForExpression) {
            return visitor.visitForExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForExpressionContext = ForExpressionContext;
var WhileExpressionContext = /** @class */ (function (_super) {
    __extends(WhileExpressionContext, _super);
    function WhileExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhileExpressionContext.prototype.WHILE = function () { return this.getToken(KotlinParser.WHILE, 0); };
    WhileExpressionContext.prototype.LPAREN = function () { return this.getToken(KotlinParser.LPAREN, 0); };
    WhileExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    WhileExpressionContext.prototype.RPAREN = function () { return this.getToken(KotlinParser.RPAREN, 0); };
    WhileExpressionContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    WhileExpressionContext.prototype.controlStructureBody = function () {
        return this.tryGetRuleContext(0, ControlStructureBodyContext);
    };
    Object.defineProperty(WhileExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_whileExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhileExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterWhileExpression) {
            listener.enterWhileExpression(this);
        }
    };
    // @Override
    WhileExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitWhileExpression) {
            listener.exitWhileExpression(this);
        }
    };
    // @Override
    WhileExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitWhileExpression) {
            return visitor.visitWhileExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhileExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhileExpressionContext = WhileExpressionContext;
var DoWhileExpressionContext = /** @class */ (function (_super) {
    __extends(DoWhileExpressionContext, _super);
    function DoWhileExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DoWhileExpressionContext.prototype.DO = function () { return this.getToken(KotlinParser.DO, 0); };
    DoWhileExpressionContext.prototype.WHILE = function () { return this.getToken(KotlinParser.WHILE, 0); };
    DoWhileExpressionContext.prototype.LPAREN = function () { return this.getToken(KotlinParser.LPAREN, 0); };
    DoWhileExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    DoWhileExpressionContext.prototype.RPAREN = function () { return this.getToken(KotlinParser.RPAREN, 0); };
    DoWhileExpressionContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    DoWhileExpressionContext.prototype.controlStructureBody = function () {
        return this.tryGetRuleContext(0, ControlStructureBodyContext);
    };
    Object.defineProperty(DoWhileExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_doWhileExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DoWhileExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterDoWhileExpression) {
            listener.enterDoWhileExpression(this);
        }
    };
    // @Override
    DoWhileExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitDoWhileExpression) {
            listener.exitDoWhileExpression(this);
        }
    };
    // @Override
    DoWhileExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitDoWhileExpression) {
            return visitor.visitDoWhileExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DoWhileExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DoWhileExpressionContext = DoWhileExpressionContext;
var JumpExpressionContext = /** @class */ (function (_super) {
    __extends(JumpExpressionContext, _super);
    function JumpExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    JumpExpressionContext.prototype.THROW = function () { return this.tryGetToken(KotlinParser.THROW, 0); };
    JumpExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    JumpExpressionContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    JumpExpressionContext.prototype.RETURN = function () { return this.tryGetToken(KotlinParser.RETURN, 0); };
    JumpExpressionContext.prototype.RETURN_AT = function () { return this.tryGetToken(KotlinParser.RETURN_AT, 0); };
    JumpExpressionContext.prototype.CONTINUE = function () { return this.tryGetToken(KotlinParser.CONTINUE, 0); };
    JumpExpressionContext.prototype.CONTINUE_AT = function () { return this.tryGetToken(KotlinParser.CONTINUE_AT, 0); };
    JumpExpressionContext.prototype.BREAK = function () { return this.tryGetToken(KotlinParser.BREAK, 0); };
    JumpExpressionContext.prototype.BREAK_AT = function () { return this.tryGetToken(KotlinParser.BREAK_AT, 0); };
    Object.defineProperty(JumpExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_jumpExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    JumpExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterJumpExpression) {
            listener.enterJumpExpression(this);
        }
    };
    // @Override
    JumpExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitJumpExpression) {
            listener.exitJumpExpression(this);
        }
    };
    // @Override
    JumpExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitJumpExpression) {
            return visitor.visitJumpExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return JumpExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.JumpExpressionContext = JumpExpressionContext;
var CallableReferenceContext = /** @class */ (function (_super) {
    __extends(CallableReferenceContext, _super);
    function CallableReferenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CallableReferenceContext.prototype.COLONCOLON = function () { return this.tryGetToken(KotlinParser.COLONCOLON, 0); };
    CallableReferenceContext.prototype.Q_COLONCOLON = function () { return this.tryGetToken(KotlinParser.Q_COLONCOLON, 0); };
    CallableReferenceContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    CallableReferenceContext.prototype.CLASS = function () { return this.tryGetToken(KotlinParser.CLASS, 0); };
    CallableReferenceContext.prototype.userType = function () {
        return this.tryGetRuleContext(0, UserTypeContext);
    };
    CallableReferenceContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    CallableReferenceContext.prototype.QUEST = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.QUEST);
        }
        else {
            return this.getToken(KotlinParser.QUEST, i);
        }
    };
    Object.defineProperty(CallableReferenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_callableReference; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CallableReferenceContext.prototype.enterRule = function (listener) {
        if (listener.enterCallableReference) {
            listener.enterCallableReference(this);
        }
    };
    // @Override
    CallableReferenceContext.prototype.exitRule = function (listener) {
        if (listener.exitCallableReference) {
            listener.exitCallableReference(this);
        }
    };
    // @Override
    CallableReferenceContext.prototype.accept = function (visitor) {
        if (visitor.visitCallableReference) {
            return visitor.visitCallableReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CallableReferenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CallableReferenceContext = CallableReferenceContext;
var AssignmentOperatorContext = /** @class */ (function (_super) {
    __extends(AssignmentOperatorContext, _super);
    function AssignmentOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentOperatorContext.prototype.ASSIGNMENT = function () { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); };
    AssignmentOperatorContext.prototype.ADD_ASSIGNMENT = function () { return this.tryGetToken(KotlinParser.ADD_ASSIGNMENT, 0); };
    AssignmentOperatorContext.prototype.SUB_ASSIGNMENT = function () { return this.tryGetToken(KotlinParser.SUB_ASSIGNMENT, 0); };
    AssignmentOperatorContext.prototype.MULT_ASSIGNMENT = function () { return this.tryGetToken(KotlinParser.MULT_ASSIGNMENT, 0); };
    AssignmentOperatorContext.prototype.DIV_ASSIGNMENT = function () { return this.tryGetToken(KotlinParser.DIV_ASSIGNMENT, 0); };
    AssignmentOperatorContext.prototype.MOD_ASSIGNMENT = function () { return this.tryGetToken(KotlinParser.MOD_ASSIGNMENT, 0); };
    Object.defineProperty(AssignmentOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_assignmentOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentOperator) {
            listener.enterAssignmentOperator(this);
        }
    };
    // @Override
    AssignmentOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentOperator) {
            listener.exitAssignmentOperator(this);
        }
    };
    // @Override
    AssignmentOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentOperator) {
            return visitor.visitAssignmentOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentOperatorContext = AssignmentOperatorContext;
var EqualityOperationContext = /** @class */ (function (_super) {
    __extends(EqualityOperationContext, _super);
    function EqualityOperationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EqualityOperationContext.prototype.EXCL_EQ = function () { return this.tryGetToken(KotlinParser.EXCL_EQ, 0); };
    EqualityOperationContext.prototype.EXCL_EQEQ = function () { return this.tryGetToken(KotlinParser.EXCL_EQEQ, 0); };
    EqualityOperationContext.prototype.EQEQ = function () { return this.tryGetToken(KotlinParser.EQEQ, 0); };
    EqualityOperationContext.prototype.EQEQEQ = function () { return this.tryGetToken(KotlinParser.EQEQEQ, 0); };
    Object.defineProperty(EqualityOperationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_equalityOperation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EqualityOperationContext.prototype.enterRule = function (listener) {
        if (listener.enterEqualityOperation) {
            listener.enterEqualityOperation(this);
        }
    };
    // @Override
    EqualityOperationContext.prototype.exitRule = function (listener) {
        if (listener.exitEqualityOperation) {
            listener.exitEqualityOperation(this);
        }
    };
    // @Override
    EqualityOperationContext.prototype.accept = function (visitor) {
        if (visitor.visitEqualityOperation) {
            return visitor.visitEqualityOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EqualityOperationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EqualityOperationContext = EqualityOperationContext;
var ComparisonOperatorContext = /** @class */ (function (_super) {
    __extends(ComparisonOperatorContext, _super);
    function ComparisonOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComparisonOperatorContext.prototype.LANGLE = function () { return this.tryGetToken(KotlinParser.LANGLE, 0); };
    ComparisonOperatorContext.prototype.RANGLE = function () { return this.tryGetToken(KotlinParser.RANGLE, 0); };
    ComparisonOperatorContext.prototype.LE = function () { return this.tryGetToken(KotlinParser.LE, 0); };
    ComparisonOperatorContext.prototype.GE = function () { return this.tryGetToken(KotlinParser.GE, 0); };
    Object.defineProperty(ComparisonOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_comparisonOperator; },
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
var InOperatorContext = /** @class */ (function (_super) {
    __extends(InOperatorContext, _super);
    function InOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InOperatorContext.prototype.IN = function () { return this.tryGetToken(KotlinParser.IN, 0); };
    InOperatorContext.prototype.NOT_IN = function () { return this.tryGetToken(KotlinParser.NOT_IN, 0); };
    Object.defineProperty(InOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_inOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterInOperator) {
            listener.enterInOperator(this);
        }
    };
    // @Override
    InOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitInOperator) {
            listener.exitInOperator(this);
        }
    };
    // @Override
    InOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitInOperator) {
            return visitor.visitInOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InOperatorContext = InOperatorContext;
var IsOperatorContext = /** @class */ (function (_super) {
    __extends(IsOperatorContext, _super);
    function IsOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IsOperatorContext.prototype.IS = function () { return this.tryGetToken(KotlinParser.IS, 0); };
    IsOperatorContext.prototype.NOT_IS = function () { return this.tryGetToken(KotlinParser.NOT_IS, 0); };
    Object.defineProperty(IsOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_isOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IsOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterIsOperator) {
            listener.enterIsOperator(this);
        }
    };
    // @Override
    IsOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitIsOperator) {
            listener.exitIsOperator(this);
        }
    };
    // @Override
    IsOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitIsOperator) {
            return visitor.visitIsOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IsOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IsOperatorContext = IsOperatorContext;
var AdditiveOperatorContext = /** @class */ (function (_super) {
    __extends(AdditiveOperatorContext, _super);
    function AdditiveOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AdditiveOperatorContext.prototype.ADD = function () { return this.tryGetToken(KotlinParser.ADD, 0); };
    AdditiveOperatorContext.prototype.SUB = function () { return this.tryGetToken(KotlinParser.SUB, 0); };
    Object.defineProperty(AdditiveOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_additiveOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AdditiveOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterAdditiveOperator) {
            listener.enterAdditiveOperator(this);
        }
    };
    // @Override
    AdditiveOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitAdditiveOperator) {
            listener.exitAdditiveOperator(this);
        }
    };
    // @Override
    AdditiveOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitAdditiveOperator) {
            return visitor.visitAdditiveOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdditiveOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AdditiveOperatorContext = AdditiveOperatorContext;
var MultiplicativeOperationContext = /** @class */ (function (_super) {
    __extends(MultiplicativeOperationContext, _super);
    function MultiplicativeOperationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplicativeOperationContext.prototype.MULT = function () { return this.tryGetToken(KotlinParser.MULT, 0); };
    MultiplicativeOperationContext.prototype.DIV = function () { return this.tryGetToken(KotlinParser.DIV, 0); };
    MultiplicativeOperationContext.prototype.MOD = function () { return this.tryGetToken(KotlinParser.MOD, 0); };
    Object.defineProperty(MultiplicativeOperationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_multiplicativeOperation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiplicativeOperationContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplicativeOperation) {
            listener.enterMultiplicativeOperation(this);
        }
    };
    // @Override
    MultiplicativeOperationContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplicativeOperation) {
            listener.exitMultiplicativeOperation(this);
        }
    };
    // @Override
    MultiplicativeOperationContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplicativeOperation) {
            return visitor.visitMultiplicativeOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplicativeOperationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplicativeOperationContext = MultiplicativeOperationContext;
var TypeOperationContext = /** @class */ (function (_super) {
    __extends(TypeOperationContext, _super);
    function TypeOperationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeOperationContext.prototype.AS = function () { return this.tryGetToken(KotlinParser.AS, 0); };
    TypeOperationContext.prototype.AS_SAFE = function () { return this.tryGetToken(KotlinParser.AS_SAFE, 0); };
    TypeOperationContext.prototype.COLON = function () { return this.tryGetToken(KotlinParser.COLON, 0); };
    Object.defineProperty(TypeOperationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_typeOperation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeOperationContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeOperation) {
            listener.enterTypeOperation(this);
        }
    };
    // @Override
    TypeOperationContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeOperation) {
            listener.exitTypeOperation(this);
        }
    };
    // @Override
    TypeOperationContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeOperation) {
            return visitor.visitTypeOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeOperationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeOperationContext = TypeOperationContext;
var PrefixUnaryOperationContext = /** @class */ (function (_super) {
    __extends(PrefixUnaryOperationContext, _super);
    function PrefixUnaryOperationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrefixUnaryOperationContext.prototype.INCR = function () { return this.tryGetToken(KotlinParser.INCR, 0); };
    PrefixUnaryOperationContext.prototype.DECR = function () { return this.tryGetToken(KotlinParser.DECR, 0); };
    PrefixUnaryOperationContext.prototype.ADD = function () { return this.tryGetToken(KotlinParser.ADD, 0); };
    PrefixUnaryOperationContext.prototype.SUB = function () { return this.tryGetToken(KotlinParser.SUB, 0); };
    PrefixUnaryOperationContext.prototype.EXCL = function () { return this.tryGetToken(KotlinParser.EXCL, 0); };
    PrefixUnaryOperationContext.prototype.annotations = function () {
        return this.tryGetRuleContext(0, AnnotationsContext);
    };
    PrefixUnaryOperationContext.prototype.labelDefinition = function () {
        return this.tryGetRuleContext(0, LabelDefinitionContext);
    };
    Object.defineProperty(PrefixUnaryOperationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_prefixUnaryOperation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrefixUnaryOperationContext.prototype.enterRule = function (listener) {
        if (listener.enterPrefixUnaryOperation) {
            listener.enterPrefixUnaryOperation(this);
        }
    };
    // @Override
    PrefixUnaryOperationContext.prototype.exitRule = function (listener) {
        if (listener.exitPrefixUnaryOperation) {
            listener.exitPrefixUnaryOperation(this);
        }
    };
    // @Override
    PrefixUnaryOperationContext.prototype.accept = function (visitor) {
        if (visitor.visitPrefixUnaryOperation) {
            return visitor.visitPrefixUnaryOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrefixUnaryOperationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrefixUnaryOperationContext = PrefixUnaryOperationContext;
var PostfixUnaryOperationContext = /** @class */ (function (_super) {
    __extends(PostfixUnaryOperationContext, _super);
    function PostfixUnaryOperationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PostfixUnaryOperationContext.prototype.INCR = function () { return this.tryGetToken(KotlinParser.INCR, 0); };
    PostfixUnaryOperationContext.prototype.DECR = function () { return this.tryGetToken(KotlinParser.DECR, 0); };
    PostfixUnaryOperationContext.prototype.EXCL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.EXCL);
        }
        else {
            return this.getToken(KotlinParser.EXCL, i);
        }
    };
    PostfixUnaryOperationContext.prototype.callSuffix = function () {
        return this.tryGetRuleContext(0, CallSuffixContext);
    };
    PostfixUnaryOperationContext.prototype.arrayAccess = function () {
        return this.tryGetRuleContext(0, ArrayAccessContext);
    };
    PostfixUnaryOperationContext.prototype.memberAccessOperator = function () {
        return this.tryGetRuleContext(0, MemberAccessOperatorContext);
    };
    PostfixUnaryOperationContext.prototype.postfixUnaryExpression = function () {
        return this.tryGetRuleContext(0, PostfixUnaryExpressionContext);
    };
    PostfixUnaryOperationContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(PostfixUnaryOperationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_postfixUnaryOperation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PostfixUnaryOperationContext.prototype.enterRule = function (listener) {
        if (listener.enterPostfixUnaryOperation) {
            listener.enterPostfixUnaryOperation(this);
        }
    };
    // @Override
    PostfixUnaryOperationContext.prototype.exitRule = function (listener) {
        if (listener.exitPostfixUnaryOperation) {
            listener.exitPostfixUnaryOperation(this);
        }
    };
    // @Override
    PostfixUnaryOperationContext.prototype.accept = function (visitor) {
        if (visitor.visitPostfixUnaryOperation) {
            return visitor.visitPostfixUnaryOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PostfixUnaryOperationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PostfixUnaryOperationContext = PostfixUnaryOperationContext;
var MemberAccessOperatorContext = /** @class */ (function (_super) {
    __extends(MemberAccessOperatorContext, _super);
    function MemberAccessOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MemberAccessOperatorContext.prototype.DOT = function () { return this.getToken(KotlinParser.DOT, 0); };
    MemberAccessOperatorContext.prototype.QUEST = function () { return this.tryGetToken(KotlinParser.QUEST, 0); };
    Object.defineProperty(MemberAccessOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_memberAccessOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MemberAccessOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterMemberAccessOperator) {
            listener.enterMemberAccessOperator(this);
        }
    };
    // @Override
    MemberAccessOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitMemberAccessOperator) {
            listener.exitMemberAccessOperator(this);
        }
    };
    // @Override
    MemberAccessOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitMemberAccessOperator) {
            return visitor.visitMemberAccessOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MemberAccessOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MemberAccessOperatorContext = MemberAccessOperatorContext;
var ModifierListContext = /** @class */ (function (_super) {
    __extends(ModifierListContext, _super);
    function ModifierListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModifierListContext.prototype.annotations = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        }
        else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    };
    ModifierListContext.prototype.modifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }
        else {
            return this.getRuleContext(i, ModifierContext);
        }
    };
    Object.defineProperty(ModifierListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_modifierList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModifierListContext.prototype.enterRule = function (listener) {
        if (listener.enterModifierList) {
            listener.enterModifierList(this);
        }
    };
    // @Override
    ModifierListContext.prototype.exitRule = function (listener) {
        if (listener.exitModifierList) {
            listener.exitModifierList(this);
        }
    };
    // @Override
    ModifierListContext.prototype.accept = function (visitor) {
        if (visitor.visitModifierList) {
            return visitor.visitModifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModifierListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModifierListContext = ModifierListContext;
var ModifierContext = /** @class */ (function (_super) {
    __extends(ModifierContext, _super);
    function ModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModifierContext.prototype.classModifier = function () {
        return this.tryGetRuleContext(0, ClassModifierContext);
    };
    ModifierContext.prototype.memberModifier = function () {
        return this.tryGetRuleContext(0, MemberModifierContext);
    };
    ModifierContext.prototype.visibilityModifier = function () {
        return this.tryGetRuleContext(0, VisibilityModifierContext);
    };
    ModifierContext.prototype.varianceAnnotation = function () {
        return this.tryGetRuleContext(0, VarianceAnnotationContext);
    };
    ModifierContext.prototype.functionModifier = function () {
        return this.tryGetRuleContext(0, FunctionModifierContext);
    };
    ModifierContext.prototype.propertyModifier = function () {
        return this.tryGetRuleContext(0, PropertyModifierContext);
    };
    ModifierContext.prototype.inheritanceModifier = function () {
        return this.tryGetRuleContext(0, InheritanceModifierContext);
    };
    ModifierContext.prototype.parameterModifier = function () {
        return this.tryGetRuleContext(0, ParameterModifierContext);
    };
    ModifierContext.prototype.typeParameterModifier = function () {
        return this.tryGetRuleContext(0, TypeParameterModifierContext);
    };
    ModifierContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(ModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_modifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterModifier) {
            listener.enterModifier(this);
        }
    };
    // @Override
    ModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitModifier) {
            listener.exitModifier(this);
        }
    };
    // @Override
    ModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitModifier) {
            return visitor.visitModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModifierContext = ModifierContext;
var ClassModifierContext = /** @class */ (function (_super) {
    __extends(ClassModifierContext, _super);
    function ClassModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassModifierContext.prototype.ENUM = function () { return this.tryGetToken(KotlinParser.ENUM, 0); };
    ClassModifierContext.prototype.SEALED = function () { return this.tryGetToken(KotlinParser.SEALED, 0); };
    ClassModifierContext.prototype.ANNOTATION = function () { return this.tryGetToken(KotlinParser.ANNOTATION, 0); };
    ClassModifierContext.prototype.DATA = function () { return this.tryGetToken(KotlinParser.DATA, 0); };
    ClassModifierContext.prototype.INNER = function () { return this.tryGetToken(KotlinParser.INNER, 0); };
    Object.defineProperty(ClassModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_classModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterClassModifier) {
            listener.enterClassModifier(this);
        }
    };
    // @Override
    ClassModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitClassModifier) {
            listener.exitClassModifier(this);
        }
    };
    // @Override
    ClassModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitClassModifier) {
            return visitor.visitClassModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassModifierContext = ClassModifierContext;
var MemberModifierContext = /** @class */ (function (_super) {
    __extends(MemberModifierContext, _super);
    function MemberModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MemberModifierContext.prototype.OVERRIDE = function () { return this.tryGetToken(KotlinParser.OVERRIDE, 0); };
    MemberModifierContext.prototype.LATEINIT = function () { return this.tryGetToken(KotlinParser.LATEINIT, 0); };
    Object.defineProperty(MemberModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_memberModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MemberModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterMemberModifier) {
            listener.enterMemberModifier(this);
        }
    };
    // @Override
    MemberModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitMemberModifier) {
            listener.exitMemberModifier(this);
        }
    };
    // @Override
    MemberModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitMemberModifier) {
            return visitor.visitMemberModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MemberModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MemberModifierContext = MemberModifierContext;
var VisibilityModifierContext = /** @class */ (function (_super) {
    __extends(VisibilityModifierContext, _super);
    function VisibilityModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VisibilityModifierContext.prototype.PUBLIC = function () { return this.tryGetToken(KotlinParser.PUBLIC, 0); };
    VisibilityModifierContext.prototype.PRIVATE = function () { return this.tryGetToken(KotlinParser.PRIVATE, 0); };
    VisibilityModifierContext.prototype.INTERNAL = function () { return this.tryGetToken(KotlinParser.INTERNAL, 0); };
    VisibilityModifierContext.prototype.PROTECTED = function () { return this.tryGetToken(KotlinParser.PROTECTED, 0); };
    Object.defineProperty(VisibilityModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_visibilityModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VisibilityModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterVisibilityModifier) {
            listener.enterVisibilityModifier(this);
        }
    };
    // @Override
    VisibilityModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitVisibilityModifier) {
            listener.exitVisibilityModifier(this);
        }
    };
    // @Override
    VisibilityModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitVisibilityModifier) {
            return visitor.visitVisibilityModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VisibilityModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VisibilityModifierContext = VisibilityModifierContext;
var VarianceAnnotationContext = /** @class */ (function (_super) {
    __extends(VarianceAnnotationContext, _super);
    function VarianceAnnotationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VarianceAnnotationContext.prototype.IN = function () { return this.tryGetToken(KotlinParser.IN, 0); };
    VarianceAnnotationContext.prototype.OUT = function () { return this.tryGetToken(KotlinParser.OUT, 0); };
    Object.defineProperty(VarianceAnnotationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_varianceAnnotation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VarianceAnnotationContext.prototype.enterRule = function (listener) {
        if (listener.enterVarianceAnnotation) {
            listener.enterVarianceAnnotation(this);
        }
    };
    // @Override
    VarianceAnnotationContext.prototype.exitRule = function (listener) {
        if (listener.exitVarianceAnnotation) {
            listener.exitVarianceAnnotation(this);
        }
    };
    // @Override
    VarianceAnnotationContext.prototype.accept = function (visitor) {
        if (visitor.visitVarianceAnnotation) {
            return visitor.visitVarianceAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VarianceAnnotationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VarianceAnnotationContext = VarianceAnnotationContext;
var FunctionModifierContext = /** @class */ (function (_super) {
    __extends(FunctionModifierContext, _super);
    function FunctionModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionModifierContext.prototype.TAILREC = function () { return this.tryGetToken(KotlinParser.TAILREC, 0); };
    FunctionModifierContext.prototype.OPERATOR = function () { return this.tryGetToken(KotlinParser.OPERATOR, 0); };
    FunctionModifierContext.prototype.INFIX = function () { return this.tryGetToken(KotlinParser.INFIX, 0); };
    FunctionModifierContext.prototype.INLINE = function () { return this.tryGetToken(KotlinParser.INLINE, 0); };
    FunctionModifierContext.prototype.EXTERNAL = function () { return this.tryGetToken(KotlinParser.EXTERNAL, 0); };
    FunctionModifierContext.prototype.SUSPEND = function () { return this.tryGetToken(KotlinParser.SUSPEND, 0); };
    Object.defineProperty(FunctionModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_functionModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionModifier) {
            listener.enterFunctionModifier(this);
        }
    };
    // @Override
    FunctionModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionModifier) {
            listener.exitFunctionModifier(this);
        }
    };
    // @Override
    FunctionModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionModifier) {
            return visitor.visitFunctionModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionModifierContext = FunctionModifierContext;
var PropertyModifierContext = /** @class */ (function (_super) {
    __extends(PropertyModifierContext, _super);
    function PropertyModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyModifierContext.prototype.CONST = function () { return this.getToken(KotlinParser.CONST, 0); };
    Object.defineProperty(PropertyModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_propertyModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyModifier) {
            listener.enterPropertyModifier(this);
        }
    };
    // @Override
    PropertyModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyModifier) {
            listener.exitPropertyModifier(this);
        }
    };
    // @Override
    PropertyModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyModifier) {
            return visitor.visitPropertyModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyModifierContext = PropertyModifierContext;
var InheritanceModifierContext = /** @class */ (function (_super) {
    __extends(InheritanceModifierContext, _super);
    function InheritanceModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InheritanceModifierContext.prototype.ABSTRACT = function () { return this.tryGetToken(KotlinParser.ABSTRACT, 0); };
    InheritanceModifierContext.prototype.FINAL = function () { return this.tryGetToken(KotlinParser.FINAL, 0); };
    InheritanceModifierContext.prototype.OPEN = function () { return this.tryGetToken(KotlinParser.OPEN, 0); };
    Object.defineProperty(InheritanceModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_inheritanceModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InheritanceModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterInheritanceModifier) {
            listener.enterInheritanceModifier(this);
        }
    };
    // @Override
    InheritanceModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitInheritanceModifier) {
            listener.exitInheritanceModifier(this);
        }
    };
    // @Override
    InheritanceModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitInheritanceModifier) {
            return visitor.visitInheritanceModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InheritanceModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InheritanceModifierContext = InheritanceModifierContext;
var ParameterModifierContext = /** @class */ (function (_super) {
    __extends(ParameterModifierContext, _super);
    function ParameterModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterModifierContext.prototype.VARARG = function () { return this.tryGetToken(KotlinParser.VARARG, 0); };
    ParameterModifierContext.prototype.NOINLINE = function () { return this.tryGetToken(KotlinParser.NOINLINE, 0); };
    ParameterModifierContext.prototype.CROSSINLINE = function () { return this.tryGetToken(KotlinParser.CROSSINLINE, 0); };
    Object.defineProperty(ParameterModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_parameterModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterModifier) {
            listener.enterParameterModifier(this);
        }
    };
    // @Override
    ParameterModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterModifier) {
            listener.exitParameterModifier(this);
        }
    };
    // @Override
    ParameterModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterModifier) {
            return visitor.visitParameterModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterModifierContext = ParameterModifierContext;
var TypeParameterModifierContext = /** @class */ (function (_super) {
    __extends(TypeParameterModifierContext, _super);
    function TypeParameterModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeParameterModifierContext.prototype.REIFIED = function () { return this.getToken(KotlinParser.REIFIED, 0); };
    Object.defineProperty(TypeParameterModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_typeParameterModifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeParameterModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeParameterModifier) {
            listener.enterTypeParameterModifier(this);
        }
    };
    // @Override
    TypeParameterModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeParameterModifier) {
            listener.exitTypeParameterModifier(this);
        }
    };
    // @Override
    TypeParameterModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeParameterModifier) {
            return visitor.visitTypeParameterModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeParameterModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeParameterModifierContext = TypeParameterModifierContext;
var LabelDefinitionContext = /** @class */ (function (_super) {
    __extends(LabelDefinitionContext, _super);
    function LabelDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelDefinitionContext.prototype.LabelDefinition = function () { return this.getToken(KotlinParser.LabelDefinition, 0); };
    LabelDefinitionContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(LabelDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_labelDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LabelDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterLabelDefinition) {
            listener.enterLabelDefinition(this);
        }
    };
    // @Override
    LabelDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitLabelDefinition) {
            listener.exitLabelDefinition(this);
        }
    };
    // @Override
    LabelDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitLabelDefinition) {
            return visitor.visitLabelDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LabelDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LabelDefinitionContext = LabelDefinitionContext;
var AnnotationsContext = /** @class */ (function (_super) {
    __extends(AnnotationsContext, _super);
    function AnnotationsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotationsContext.prototype.annotation = function () {
        return this.tryGetRuleContext(0, AnnotationContext);
    };
    AnnotationsContext.prototype.annotationList = function () {
        return this.tryGetRuleContext(0, AnnotationListContext);
    };
    AnnotationsContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(AnnotationsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_annotations; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotationsContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotations) {
            listener.enterAnnotations(this);
        }
    };
    // @Override
    AnnotationsContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotations) {
            listener.exitAnnotations(this);
        }
    };
    // @Override
    AnnotationsContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotations) {
            return visitor.visitAnnotations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotationsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotationsContext = AnnotationsContext;
var AnnotationContext = /** @class */ (function (_super) {
    __extends(AnnotationContext, _super);
    function AnnotationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotationContext.prototype.annotationUseSiteTarget = function () {
        return this.tryGetRuleContext(0, AnnotationUseSiteTargetContext);
    };
    AnnotationContext.prototype.COLON = function () { return this.tryGetToken(KotlinParser.COLON, 0); };
    AnnotationContext.prototype.unescapedAnnotation = function () {
        return this.tryGetRuleContext(0, UnescapedAnnotationContext);
    };
    AnnotationContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    AnnotationContext.prototype.LabelReference = function () { return this.tryGetToken(KotlinParser.LabelReference, 0); };
    AnnotationContext.prototype.typeArguments = function () {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    };
    AnnotationContext.prototype.valueArguments = function () {
        return this.tryGetRuleContext(0, ValueArgumentsContext);
    };
    Object.defineProperty(AnnotationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_annotation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotationContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotation) {
            listener.enterAnnotation(this);
        }
    };
    // @Override
    AnnotationContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotation) {
            listener.exitAnnotation(this);
        }
    };
    // @Override
    AnnotationContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotation) {
            return visitor.visitAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotationContext = AnnotationContext;
var AnnotationListContext = /** @class */ (function (_super) {
    __extends(AnnotationListContext, _super);
    function AnnotationListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotationListContext.prototype.annotationUseSiteTarget = function () {
        return this.tryGetRuleContext(0, AnnotationUseSiteTargetContext);
    };
    AnnotationListContext.prototype.COLON = function () { return this.tryGetToken(KotlinParser.COLON, 0); };
    AnnotationListContext.prototype.LSQUARE = function () { return this.getToken(KotlinParser.LSQUARE, 0); };
    AnnotationListContext.prototype.RSQUARE = function () { return this.getToken(KotlinParser.RSQUARE, 0); };
    AnnotationListContext.prototype.unescapedAnnotation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UnescapedAnnotationContext);
        }
        else {
            return this.getRuleContext(i, UnescapedAnnotationContext);
        }
    };
    AnnotationListContext.prototype.AT = function () { return this.tryGetToken(KotlinParser.AT, 0); };
    Object.defineProperty(AnnotationListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_annotationList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotationListContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotationList) {
            listener.enterAnnotationList(this);
        }
    };
    // @Override
    AnnotationListContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotationList) {
            listener.exitAnnotationList(this);
        }
    };
    // @Override
    AnnotationListContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotationList) {
            return visitor.visitAnnotationList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotationListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotationListContext = AnnotationListContext;
var AnnotationUseSiteTargetContext = /** @class */ (function (_super) {
    __extends(AnnotationUseSiteTargetContext, _super);
    function AnnotationUseSiteTargetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnnotationUseSiteTargetContext.prototype.FIELD = function () { return this.tryGetToken(KotlinParser.FIELD, 0); };
    AnnotationUseSiteTargetContext.prototype.FILE = function () { return this.tryGetToken(KotlinParser.FILE, 0); };
    AnnotationUseSiteTargetContext.prototype.PROPERTY = function () { return this.tryGetToken(KotlinParser.PROPERTY, 0); };
    AnnotationUseSiteTargetContext.prototype.GET = function () { return this.tryGetToken(KotlinParser.GET, 0); };
    AnnotationUseSiteTargetContext.prototype.SET = function () { return this.tryGetToken(KotlinParser.SET, 0); };
    AnnotationUseSiteTargetContext.prototype.RECEIVER = function () { return this.tryGetToken(KotlinParser.RECEIVER, 0); };
    AnnotationUseSiteTargetContext.prototype.PARAM = function () { return this.tryGetToken(KotlinParser.PARAM, 0); };
    AnnotationUseSiteTargetContext.prototype.SETPARAM = function () { return this.tryGetToken(KotlinParser.SETPARAM, 0); };
    AnnotationUseSiteTargetContext.prototype.DELEGATE = function () { return this.tryGetToken(KotlinParser.DELEGATE, 0); };
    Object.defineProperty(AnnotationUseSiteTargetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_annotationUseSiteTarget; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnnotationUseSiteTargetContext.prototype.enterRule = function (listener) {
        if (listener.enterAnnotationUseSiteTarget) {
            listener.enterAnnotationUseSiteTarget(this);
        }
    };
    // @Override
    AnnotationUseSiteTargetContext.prototype.exitRule = function (listener) {
        if (listener.exitAnnotationUseSiteTarget) {
            listener.exitAnnotationUseSiteTarget(this);
        }
    };
    // @Override
    AnnotationUseSiteTargetContext.prototype.accept = function (visitor) {
        if (visitor.visitAnnotationUseSiteTarget) {
            return visitor.visitAnnotationUseSiteTarget(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnnotationUseSiteTargetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnnotationUseSiteTargetContext = AnnotationUseSiteTargetContext;
var UnescapedAnnotationContext = /** @class */ (function (_super) {
    __extends(UnescapedAnnotationContext, _super);
    function UnescapedAnnotationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnescapedAnnotationContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    UnescapedAnnotationContext.prototype.typeArguments = function () {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    };
    UnescapedAnnotationContext.prototype.valueArguments = function () {
        return this.tryGetRuleContext(0, ValueArgumentsContext);
    };
    Object.defineProperty(UnescapedAnnotationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_unescapedAnnotation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnescapedAnnotationContext.prototype.enterRule = function (listener) {
        if (listener.enterUnescapedAnnotation) {
            listener.enterUnescapedAnnotation(this);
        }
    };
    // @Override
    UnescapedAnnotationContext.prototype.exitRule = function (listener) {
        if (listener.exitUnescapedAnnotation) {
            listener.exitUnescapedAnnotation(this);
        }
    };
    // @Override
    UnescapedAnnotationContext.prototype.accept = function (visitor) {
        if (visitor.visitUnescapedAnnotation) {
            return visitor.visitUnescapedAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnescapedAnnotationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnescapedAnnotationContext = UnescapedAnnotationContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.simpleIdentifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SimpleIdentifierContext);
        }
        else {
            return this.getRuleContext(i, SimpleIdentifierContext);
        }
    };
    IdentifierContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.DOT);
        }
        else {
            return this.getToken(KotlinParser.DOT, i);
        }
    };
    IdentifierContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_identifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    };
    // @Override
    IdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    };
    // @Override
    IdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierContext = IdentifierContext;
var SimpleIdentifierContext = /** @class */ (function (_super) {
    __extends(SimpleIdentifierContext, _super);
    function SimpleIdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleIdentifierContext.prototype.Identifier = function () { return this.tryGetToken(KotlinParser.Identifier, 0); };
    SimpleIdentifierContext.prototype.ABSTRACT = function () { return this.tryGetToken(KotlinParser.ABSTRACT, 0); };
    SimpleIdentifierContext.prototype.ANNOTATION = function () { return this.tryGetToken(KotlinParser.ANNOTATION, 0); };
    SimpleIdentifierContext.prototype.BY = function () { return this.tryGetToken(KotlinParser.BY, 0); };
    SimpleIdentifierContext.prototype.CATCH = function () { return this.tryGetToken(KotlinParser.CATCH, 0); };
    SimpleIdentifierContext.prototype.COMPANION = function () { return this.tryGetToken(KotlinParser.COMPANION, 0); };
    SimpleIdentifierContext.prototype.CONSTRUCTOR = function () { return this.tryGetToken(KotlinParser.CONSTRUCTOR, 0); };
    SimpleIdentifierContext.prototype.CROSSINLINE = function () { return this.tryGetToken(KotlinParser.CROSSINLINE, 0); };
    SimpleIdentifierContext.prototype.DATA = function () { return this.tryGetToken(KotlinParser.DATA, 0); };
    SimpleIdentifierContext.prototype.DYNAMIC = function () { return this.tryGetToken(KotlinParser.DYNAMIC, 0); };
    SimpleIdentifierContext.prototype.ENUM = function () { return this.tryGetToken(KotlinParser.ENUM, 0); };
    SimpleIdentifierContext.prototype.EXTERNAL = function () { return this.tryGetToken(KotlinParser.EXTERNAL, 0); };
    SimpleIdentifierContext.prototype.FINAL = function () { return this.tryGetToken(KotlinParser.FINAL, 0); };
    SimpleIdentifierContext.prototype.FINALLY = function () { return this.tryGetToken(KotlinParser.FINALLY, 0); };
    SimpleIdentifierContext.prototype.GETTER = function () { return this.tryGetToken(KotlinParser.GETTER, 0); };
    SimpleIdentifierContext.prototype.IMPORT = function () { return this.tryGetToken(KotlinParser.IMPORT, 0); };
    SimpleIdentifierContext.prototype.INFIX = function () { return this.tryGetToken(KotlinParser.INFIX, 0); };
    SimpleIdentifierContext.prototype.INIT = function () { return this.tryGetToken(KotlinParser.INIT, 0); };
    SimpleIdentifierContext.prototype.INLINE = function () { return this.tryGetToken(KotlinParser.INLINE, 0); };
    SimpleIdentifierContext.prototype.INNER = function () { return this.tryGetToken(KotlinParser.INNER, 0); };
    SimpleIdentifierContext.prototype.INTERNAL = function () { return this.tryGetToken(KotlinParser.INTERNAL, 0); };
    SimpleIdentifierContext.prototype.LATEINIT = function () { return this.tryGetToken(KotlinParser.LATEINIT, 0); };
    SimpleIdentifierContext.prototype.NOINLINE = function () { return this.tryGetToken(KotlinParser.NOINLINE, 0); };
    SimpleIdentifierContext.prototype.OPEN = function () { return this.tryGetToken(KotlinParser.OPEN, 0); };
    SimpleIdentifierContext.prototype.OPERATOR = function () { return this.tryGetToken(KotlinParser.OPERATOR, 0); };
    SimpleIdentifierContext.prototype.OUT = function () { return this.tryGetToken(KotlinParser.OUT, 0); };
    SimpleIdentifierContext.prototype.OVERRIDE = function () { return this.tryGetToken(KotlinParser.OVERRIDE, 0); };
    SimpleIdentifierContext.prototype.PRIVATE = function () { return this.tryGetToken(KotlinParser.PRIVATE, 0); };
    SimpleIdentifierContext.prototype.PROTECTED = function () { return this.tryGetToken(KotlinParser.PROTECTED, 0); };
    SimpleIdentifierContext.prototype.PUBLIC = function () { return this.tryGetToken(KotlinParser.PUBLIC, 0); };
    SimpleIdentifierContext.prototype.REIFIED = function () { return this.tryGetToken(KotlinParser.REIFIED, 0); };
    SimpleIdentifierContext.prototype.SEALED = function () { return this.tryGetToken(KotlinParser.SEALED, 0); };
    SimpleIdentifierContext.prototype.TAILREC = function () { return this.tryGetToken(KotlinParser.TAILREC, 0); };
    SimpleIdentifierContext.prototype.SETTER = function () { return this.tryGetToken(KotlinParser.SETTER, 0); };
    SimpleIdentifierContext.prototype.VARARG = function () { return this.tryGetToken(KotlinParser.VARARG, 0); };
    SimpleIdentifierContext.prototype.WHERE = function () { return this.tryGetToken(KotlinParser.WHERE, 0); };
    SimpleIdentifierContext.prototype.CONST = function () { return this.tryGetToken(KotlinParser.CONST, 0); };
    SimpleIdentifierContext.prototype.SUSPEND = function () { return this.tryGetToken(KotlinParser.SUSPEND, 0); };
    Object.defineProperty(SimpleIdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_simpleIdentifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleIdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleIdentifier) {
            listener.enterSimpleIdentifier(this);
        }
    };
    // @Override
    SimpleIdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleIdentifier) {
            listener.exitSimpleIdentifier(this);
        }
    };
    // @Override
    SimpleIdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleIdentifier) {
            return visitor.visitSimpleIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleIdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleIdentifierContext = SimpleIdentifierContext;
var SemiContext = /** @class */ (function (_super) {
    __extends(SemiContext, _super);
    function SemiContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SemiContext.prototype.NL = function (i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    };
    SemiContext.prototype.SEMICOLON = function () { return this.tryGetToken(KotlinParser.SEMICOLON, 0); };
    Object.defineProperty(SemiContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_semi; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SemiContext.prototype.enterRule = function (listener) {
        if (listener.enterSemi) {
            listener.enterSemi(this);
        }
    };
    // @Override
    SemiContext.prototype.exitRule = function (listener) {
        if (listener.exitSemi) {
            listener.exitSemi(this);
        }
    };
    // @Override
    SemiContext.prototype.accept = function (visitor) {
        if (visitor.visitSemi) {
            return visitor.visitSemi(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SemiContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SemiContext = SemiContext;
var AnysemiContext = /** @class */ (function (_super) {
    __extends(AnysemiContext, _super);
    function AnysemiContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AnysemiContext.prototype.NL = function () { return this.tryGetToken(KotlinParser.NL, 0); };
    AnysemiContext.prototype.SEMICOLON = function () { return this.tryGetToken(KotlinParser.SEMICOLON, 0); };
    Object.defineProperty(AnysemiContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return KotlinParser.RULE_anysemi; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AnysemiContext.prototype.enterRule = function (listener) {
        if (listener.enterAnysemi) {
            listener.enterAnysemi(this);
        }
    };
    // @Override
    AnysemiContext.prototype.exitRule = function (listener) {
        if (listener.exitAnysemi) {
            listener.exitAnysemi(this);
        }
    };
    // @Override
    AnysemiContext.prototype.accept = function (visitor) {
        if (visitor.visitAnysemi) {
            return visitor.visitAnysemi(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AnysemiContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AnysemiContext = AnysemiContext;
