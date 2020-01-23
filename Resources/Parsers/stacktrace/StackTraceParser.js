"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stacktrace/StackTrace.g4 by ANTLR 4.7.3-SNAPSHOT
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
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var StackTraceParser = /** @class */ (function (_super) {
    __extends(StackTraceParser, _super);
    function StackTraceParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(StackTraceParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(StackTraceParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return StackTraceParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackTraceParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "StackTrace.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackTraceParser.prototype, "ruleNames", {
        // @Override
        get: function () { return StackTraceParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackTraceParser.prototype, "serializedATN", {
        // @Override
        get: function () { return StackTraceParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    StackTraceParser.prototype.startRule = function () {
        var _localctx = new StartRuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, StackTraceParser.RULE_startRule);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 34;
                this.stackTrace();
                this.state = 35;
                this.match(StackTraceParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    StackTraceParser.prototype.stackTrace = function () {
        var _localctx = new StackTraceContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, StackTraceParser.RULE_stackTrace);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 38;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 37;
                            this.messageLine();
                        }
                    }
                    this.state = 40;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === StackTraceParser.JavaWord);
                this.state = 45;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === StackTraceParser.AT || _la === StackTraceParser.ELLIPSIS) {
                    {
                        {
                            this.state = 42;
                            this.stackTraceLine();
                        }
                    }
                    this.state = 47;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 49;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === StackTraceParser.CAUSED_BY) {
                    {
                        this.state = 48;
                        this.causedByLine();
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
    StackTraceParser.prototype.stackTraceLine = function () {
        var _localctx = new StackTraceLineContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, StackTraceParser.RULE_stackTraceLine);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 53;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case StackTraceParser.AT:
                        {
                            this.state = 51;
                            this.atLine();
                        }
                        break;
                    case StackTraceParser.ELLIPSIS:
                        {
                            this.state = 52;
                            this.ellipsisLine();
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
    StackTraceParser.prototype.atLine = function () {
        var _localctx = new AtLineContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, StackTraceParser.RULE_atLine);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 55;
                this.match(StackTraceParser.AT);
                this.state = 56;
                this.qualifiedMethod();
                this.state = 57;
                this.match(StackTraceParser.T__0);
                this.state = 58;
                this.classFile();
                this.state = 61;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === StackTraceParser.COLON) {
                    {
                        this.state = 59;
                        this.match(StackTraceParser.COLON);
                        this.state = 60;
                        this.match(StackTraceParser.Number);
                    }
                }
                this.state = 63;
                this.match(StackTraceParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    StackTraceParser.prototype.causedByLine = function () {
        var _localctx = new CausedByLineContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, StackTraceParser.RULE_causedByLine);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 65;
                this.match(StackTraceParser.CAUSED_BY);
                this.state = 66;
                this.stackTrace();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    StackTraceParser.prototype.ellipsisLine = function () {
        var _localctx = new EllipsisLineContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, StackTraceParser.RULE_ellipsisLine);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 68;
                this.match(StackTraceParser.ELLIPSIS);
                this.state = 69;
                this.match(StackTraceParser.Number);
                this.state = 70;
                this.match(StackTraceParser.MORE_);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    StackTraceParser.prototype.messageLine = function () {
        var _localctx = new MessageLineContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, StackTraceParser.RULE_messageLine);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 72;
                    this.qualifiedClass();
                    this.state = 74;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === StackTraceParser.COLON) {
                        {
                            this.state = 73;
                            this.message();
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
    StackTraceParser.prototype.qualifiedClass = function () {
        var _localctx = new QualifiedClassContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, StackTraceParser.RULE_qualifiedClass);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 77;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            this.state = 76;
                            this.packagePath();
                        }
                        break;
                }
                this.state = 79;
                this.className();
                this.state = 83;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === StackTraceParser.T__2) {
                    {
                        {
                            this.state = 80;
                            this.innerClassName();
                        }
                    }
                    this.state = 85;
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
    StackTraceParser.prototype.innerClassName = function () {
        var _localctx = new InnerClassNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, StackTraceParser.RULE_innerClassName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 86;
                    this.match(StackTraceParser.T__2);
                    this.state = 87;
                    this.className();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    StackTraceParser.prototype.classFile = function () {
        var _localctx = new ClassFileContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, StackTraceParser.RULE_classFile);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 94;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case StackTraceParser.JavaWord:
                        {
                            this.state = 89;
                            this.identifier();
                            this.state = 90;
                            this.match(StackTraceParser.T__3);
                        }
                        break;
                    case StackTraceParser.NATIVE_METHOD:
                        {
                            this.state = 92;
                            this.match(StackTraceParser.NATIVE_METHOD);
                        }
                        break;
                    case StackTraceParser.UNKNOWN_SOURCE:
                        {
                            this.state = 93;
                            this.match(StackTraceParser.UNKNOWN_SOURCE);
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
    StackTraceParser.prototype.qualifiedMethod = function () {
        var _localctx = new QualifiedMethodContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, StackTraceParser.RULE_qualifiedMethod);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 96;
                this.qualifiedClass();
                this.state = 97;
                this.match(StackTraceParser.DOT);
                this.state = 100;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case StackTraceParser.JavaWord:
                        {
                            this.state = 98;
                            this.methodName();
                        }
                        break;
                    case StackTraceParser.INIT:
                        {
                            this.state = 99;
                            this.constructor();
                        }
                        break;
                    case StackTraceParser.T__0:
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
    StackTraceParser.prototype.methodName = function () {
        var _localctx = new MethodNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, StackTraceParser.RULE_methodName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 104;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    StackTraceParser.prototype.packagePath = function () {
        var _localctx = new PackagePathContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, StackTraceParser.RULE_packagePath);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 109;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 106;
                                    this.identifier();
                                    this.state = 107;
                                    this.match(StackTraceParser.DOT);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 111;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
    StackTraceParser.prototype.className = function () {
        var _localctx = new ClassNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, StackTraceParser.RULE_className);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                this.match(StackTraceParser.JavaWord);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    StackTraceParser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, StackTraceParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 115;
                this.match(StackTraceParser.JavaWord);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    StackTraceParser.prototype.message = function () {
        var _localctx = new MessageContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, StackTraceParser.RULE_message);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 117;
                this.match(StackTraceParser.COLON);
                this.state = 121;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1 + 1) {
                        {
                            {
                                this.state = 118;
                                this.matchWildcard();
                            }
                        }
                    }
                    this.state = 123;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(StackTraceParser, "_ATN", {
        get: function () {
            if (!StackTraceParser.__ATN) {
                StackTraceParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(StackTraceParser._serializedATN));
            }
            return StackTraceParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    StackTraceParser.T__0 = 1;
    StackTraceParser.T__1 = 2;
    StackTraceParser.T__2 = 3;
    StackTraceParser.T__3 = 4;
    StackTraceParser.Number = 5;
    StackTraceParser.JavaWord = 6;
    StackTraceParser.DOT = 7;
    StackTraceParser.AT = 8;
    StackTraceParser.CAUSED_BY = 9;
    StackTraceParser.MORE_ = 10;
    StackTraceParser.ELLIPSIS = 11;
    StackTraceParser.COLON = 12;
    StackTraceParser.NATIVE_METHOD = 13;
    StackTraceParser.UNKNOWN_SOURCE = 14;
    StackTraceParser.INIT = 15;
    StackTraceParser.NonCapitalLetter = 16;
    StackTraceParser.CapitalLetter = 17;
    StackTraceParser.Symbol = 18;
    StackTraceParser.Digit = 19;
    StackTraceParser.WS = 20;
    StackTraceParser.RULE_startRule = 0;
    StackTraceParser.RULE_stackTrace = 1;
    StackTraceParser.RULE_stackTraceLine = 2;
    StackTraceParser.RULE_atLine = 3;
    StackTraceParser.RULE_causedByLine = 4;
    StackTraceParser.RULE_ellipsisLine = 5;
    StackTraceParser.RULE_messageLine = 6;
    StackTraceParser.RULE_qualifiedClass = 7;
    StackTraceParser.RULE_innerClassName = 8;
    StackTraceParser.RULE_classFile = 9;
    StackTraceParser.RULE_qualifiedMethod = 10;
    StackTraceParser.RULE_constructor = 11;
    StackTraceParser.RULE_methodName = 12;
    StackTraceParser.RULE_packagePath = 13;
    StackTraceParser.RULE_className = 14;
    StackTraceParser.RULE_identifier = 15;
    StackTraceParser.RULE_message = 16;
    // tslint:disable:no-trailing-whitespace
    StackTraceParser.ruleNames = [
        "startRule", "stackTrace", "stackTraceLine", "atLine", "causedByLine",
        "ellipsisLine", "messageLine", "qualifiedClass", "innerClassName", "classFile",
        "qualifiedMethod", "constructor", "methodName", "packagePath", "className",
        "identifier", "message",
    ];
    StackTraceParser._LITERAL_NAMES = [
        undefined, "'('", "')'", "'$'", "'.java'", undefined, undefined, "'.'",
        "'at'", "'Caused by:'", "'more'", "'...'", "':'", "'Native Method'", "'Unknown Source'",
        "'<init>'", undefined, undefined, "'_'",
    ];
    StackTraceParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "Number", "JavaWord",
        "DOT", "AT", "CAUSED_BY", "MORE_", "ELLIPSIS", "COLON", "NATIVE_METHOD",
        "UNKNOWN_SOURCE", "INIT", "NonCapitalLetter", "CapitalLetter", "Symbol",
        "Digit", "WS",
    ];
    StackTraceParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(StackTraceParser._LITERAL_NAMES, StackTraceParser._SYMBOLIC_NAMES, []);
    StackTraceParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x16\x7F\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
        "\x02\x03\x02\x03\x02\x03\x03\x06\x03)\n\x03\r\x03\x0E\x03*\x03\x03\x07" +
        "\x03.\n\x03\f\x03\x0E\x031\v\x03\x03\x03\x05\x034\n\x03\x03\x04\x03\x04" +
        "\x05\x048\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
        "@\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x03\b\x03\b\x05\bM\n\b\x03\t\x05\tP\n\t\x03\t\x03\t\x07\tT\n" +
        "\t\f\t\x0E\tW\v\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05" +
        "\va\n\v\x03\f\x03\f\x03\f\x03\f\x05\fg\n\f\x03\r\x03\r\x03\x0E\x03\x0E" +
        "\x03\x0F\x03\x0F\x03\x0F\x06\x0Fp\n\x0F\r\x0F\x0E\x0Fq\x03\x10\x03\x10" +
        "\x03\x11\x03\x11\x03\x12\x03\x12\x07\x12z\n\x12\f\x12\x0E\x12}\v\x12\x03" +
        "\x12\x03{\x02\x02\x13\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
        "\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
        "\"\x02\x02\x02\x02{\x02$\x03\x02\x02\x02\x04(\x03\x02\x02\x02\x067\x03" +
        "\x02\x02\x02\b9\x03\x02\x02\x02\nC\x03\x02\x02\x02\fF\x03\x02\x02\x02" +
        "\x0EJ\x03\x02\x02\x02\x10O\x03\x02\x02\x02\x12X\x03\x02\x02\x02\x14`\x03" +
        "\x02\x02\x02\x16b\x03\x02\x02\x02\x18h\x03\x02\x02\x02\x1Aj\x03\x02\x02" +
        "\x02\x1Co\x03\x02\x02\x02\x1Es\x03\x02\x02\x02 u\x03\x02\x02\x02\"w\x03" +
        "\x02\x02\x02$%\x05\x04\x03\x02%&\x07\x02\x02\x03&\x03\x03\x02\x02\x02" +
        "\')\x05\x0E\b\x02(\'\x03\x02\x02\x02)*\x03\x02\x02\x02*(\x03\x02\x02\x02" +
        "*+\x03\x02\x02\x02+/\x03\x02\x02\x02,.\x05\x06\x04\x02-,\x03\x02\x02\x02" +
        ".1\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0203\x03\x02\x02\x02" +
        "1/\x03\x02\x02\x0224\x05\n\x06\x0232\x03\x02\x02\x0234\x03\x02\x02\x02" +
        "4\x05\x03\x02\x02\x0258\x05\b\x05\x0268\x05\f\x07\x0275\x03\x02\x02\x02" +
        "76\x03\x02\x02\x028\x07\x03\x02\x02\x029:\x07\n\x02\x02:;\x05\x16\f\x02" +
        ";<\x07\x03\x02\x02<?\x05\x14\v\x02=>\x07\x0E\x02\x02>@\x07\x07\x02\x02" +
        "?=\x03\x02\x02\x02?@\x03\x02\x02\x02@A\x03\x02\x02\x02AB\x07\x04\x02\x02" +
        "B\t\x03\x02\x02\x02CD\x07\v\x02\x02DE\x05\x04\x03\x02E\v\x03\x02\x02\x02" +
        "FG\x07\r\x02\x02GH\x07\x07\x02\x02HI\x07\f\x02\x02I\r\x03\x02\x02\x02" +
        "JL\x05\x10\t\x02KM\x05\"\x12\x02LK\x03\x02\x02\x02LM\x03\x02\x02\x02M" +
        "\x0F\x03\x02\x02\x02NP\x05\x1C\x0F\x02ON\x03\x02\x02\x02OP\x03\x02\x02" +
        "\x02PQ\x03\x02\x02\x02QU\x05\x1E\x10\x02RT\x05\x12\n\x02SR\x03\x02\x02" +
        "\x02TW\x03\x02\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02V\x11\x03\x02" +
        "\x02\x02WU\x03\x02\x02\x02XY\x07\x05\x02\x02YZ\x05\x1E\x10\x02Z\x13\x03" +
        "\x02\x02\x02[\\\x05 \x11\x02\\]\x07\x06\x02\x02]a\x03\x02\x02\x02^a\x07" +
        "\x0F\x02\x02_a\x07\x10\x02\x02`[\x03\x02\x02\x02`^\x03\x02\x02\x02`_\x03" +
        "\x02\x02\x02a\x15\x03\x02\x02\x02bc\x05\x10\t\x02cf\x07\t\x02\x02dg\x05" +
        "\x1A\x0E\x02eg\x05\x18\r\x02fd\x03\x02\x02\x02fe\x03\x02\x02\x02fg\x03" +
        "\x02\x02\x02g\x17\x03\x02\x02\x02hi\x07\x11\x02\x02i\x19\x03\x02\x02\x02" +
        "jk\x05 \x11\x02k\x1B\x03\x02\x02\x02lm\x05 \x11\x02mn\x07\t\x02\x02np" +
        "\x03\x02\x02\x02ol\x03\x02\x02\x02pq\x03\x02\x02\x02qo\x03\x02\x02\x02" +
        "qr\x03\x02\x02\x02r\x1D\x03\x02\x02\x02st\x07\b\x02\x02t\x1F\x03\x02\x02" +
        "\x02uv\x07\b\x02\x02v!\x03\x02\x02\x02w{\x07\x0E\x02\x02xz\v\x02\x02\x02" +
        "yx\x03\x02\x02\x02z}\x03\x02\x02\x02{|\x03\x02\x02\x02{y\x03\x02\x02\x02" +
        "|#\x03\x02\x02\x02}{\x03\x02\x02\x02\x0E*/37?LOU`fq{";
    return StackTraceParser;
}(Parser_1.Parser));
exports.StackTraceParser = StackTraceParser;
var StartRuleContext = /** @class */ (function (_super) {
    __extends(StartRuleContext, _super);
    function StartRuleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StartRuleContext.prototype.stackTrace = function () {
        return this.getRuleContext(0, StackTraceContext);
    };
    StartRuleContext.prototype.EOF = function () { return this.getToken(StackTraceParser.EOF, 0); };
    Object.defineProperty(StartRuleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_startRule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StartRuleContext.prototype.enterRule = function (listener) {
        if (listener.enterStartRule) {
            listener.enterStartRule(this);
        }
    };
    // @Override
    StartRuleContext.prototype.exitRule = function (listener) {
        if (listener.exitStartRule) {
            listener.exitStartRule(this);
        }
    };
    // @Override
    StartRuleContext.prototype.accept = function (visitor) {
        if (visitor.visitStartRule) {
            return visitor.visitStartRule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StartRuleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StartRuleContext = StartRuleContext;
var StackTraceContext = /** @class */ (function (_super) {
    __extends(StackTraceContext, _super);
    function StackTraceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StackTraceContext.prototype.messageLine = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MessageLineContext);
        }
        else {
            return this.getRuleContext(i, MessageLineContext);
        }
    };
    StackTraceContext.prototype.stackTraceLine = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StackTraceLineContext);
        }
        else {
            return this.getRuleContext(i, StackTraceLineContext);
        }
    };
    StackTraceContext.prototype.causedByLine = function () {
        return this.tryGetRuleContext(0, CausedByLineContext);
    };
    Object.defineProperty(StackTraceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_stackTrace; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StackTraceContext.prototype.enterRule = function (listener) {
        if (listener.enterStackTrace) {
            listener.enterStackTrace(this);
        }
    };
    // @Override
    StackTraceContext.prototype.exitRule = function (listener) {
        if (listener.exitStackTrace) {
            listener.exitStackTrace(this);
        }
    };
    // @Override
    StackTraceContext.prototype.accept = function (visitor) {
        if (visitor.visitStackTrace) {
            return visitor.visitStackTrace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StackTraceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StackTraceContext = StackTraceContext;
var StackTraceLineContext = /** @class */ (function (_super) {
    __extends(StackTraceLineContext, _super);
    function StackTraceLineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StackTraceLineContext.prototype.atLine = function () {
        return this.tryGetRuleContext(0, AtLineContext);
    };
    StackTraceLineContext.prototype.ellipsisLine = function () {
        return this.tryGetRuleContext(0, EllipsisLineContext);
    };
    Object.defineProperty(StackTraceLineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_stackTraceLine; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StackTraceLineContext.prototype.enterRule = function (listener) {
        if (listener.enterStackTraceLine) {
            listener.enterStackTraceLine(this);
        }
    };
    // @Override
    StackTraceLineContext.prototype.exitRule = function (listener) {
        if (listener.exitStackTraceLine) {
            listener.exitStackTraceLine(this);
        }
    };
    // @Override
    StackTraceLineContext.prototype.accept = function (visitor) {
        if (visitor.visitStackTraceLine) {
            return visitor.visitStackTraceLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StackTraceLineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StackTraceLineContext = StackTraceLineContext;
var AtLineContext = /** @class */ (function (_super) {
    __extends(AtLineContext, _super);
    function AtLineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtLineContext.prototype.AT = function () { return this.getToken(StackTraceParser.AT, 0); };
    AtLineContext.prototype.qualifiedMethod = function () {
        return this.getRuleContext(0, QualifiedMethodContext);
    };
    AtLineContext.prototype.classFile = function () {
        return this.getRuleContext(0, ClassFileContext);
    };
    AtLineContext.prototype.COLON = function () { return this.tryGetToken(StackTraceParser.COLON, 0); };
    AtLineContext.prototype.Number = function () { return this.tryGetToken(StackTraceParser.Number, 0); };
    Object.defineProperty(AtLineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_atLine; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtLineContext.prototype.enterRule = function (listener) {
        if (listener.enterAtLine) {
            listener.enterAtLine(this);
        }
    };
    // @Override
    AtLineContext.prototype.exitRule = function (listener) {
        if (listener.exitAtLine) {
            listener.exitAtLine(this);
        }
    };
    // @Override
    AtLineContext.prototype.accept = function (visitor) {
        if (visitor.visitAtLine) {
            return visitor.visitAtLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtLineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtLineContext = AtLineContext;
var CausedByLineContext = /** @class */ (function (_super) {
    __extends(CausedByLineContext, _super);
    function CausedByLineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CausedByLineContext.prototype.CAUSED_BY = function () { return this.getToken(StackTraceParser.CAUSED_BY, 0); };
    CausedByLineContext.prototype.stackTrace = function () {
        return this.getRuleContext(0, StackTraceContext);
    };
    Object.defineProperty(CausedByLineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_causedByLine; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CausedByLineContext.prototype.enterRule = function (listener) {
        if (listener.enterCausedByLine) {
            listener.enterCausedByLine(this);
        }
    };
    // @Override
    CausedByLineContext.prototype.exitRule = function (listener) {
        if (listener.exitCausedByLine) {
            listener.exitCausedByLine(this);
        }
    };
    // @Override
    CausedByLineContext.prototype.accept = function (visitor) {
        if (visitor.visitCausedByLine) {
            return visitor.visitCausedByLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CausedByLineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CausedByLineContext = CausedByLineContext;
var EllipsisLineContext = /** @class */ (function (_super) {
    __extends(EllipsisLineContext, _super);
    function EllipsisLineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EllipsisLineContext.prototype.ELLIPSIS = function () { return this.getToken(StackTraceParser.ELLIPSIS, 0); };
    EllipsisLineContext.prototype.Number = function () { return this.getToken(StackTraceParser.Number, 0); };
    EllipsisLineContext.prototype.MORE_ = function () { return this.getToken(StackTraceParser.MORE_, 0); };
    Object.defineProperty(EllipsisLineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_ellipsisLine; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EllipsisLineContext.prototype.enterRule = function (listener) {
        if (listener.enterEllipsisLine) {
            listener.enterEllipsisLine(this);
        }
    };
    // @Override
    EllipsisLineContext.prototype.exitRule = function (listener) {
        if (listener.exitEllipsisLine) {
            listener.exitEllipsisLine(this);
        }
    };
    // @Override
    EllipsisLineContext.prototype.accept = function (visitor) {
        if (visitor.visitEllipsisLine) {
            return visitor.visitEllipsisLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EllipsisLineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EllipsisLineContext = EllipsisLineContext;
var MessageLineContext = /** @class */ (function (_super) {
    __extends(MessageLineContext, _super);
    function MessageLineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MessageLineContext.prototype.qualifiedClass = function () {
        return this.tryGetRuleContext(0, QualifiedClassContext);
    };
    MessageLineContext.prototype.message = function () {
        return this.tryGetRuleContext(0, MessageContext);
    };
    Object.defineProperty(MessageLineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_messageLine; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MessageLineContext.prototype.enterRule = function (listener) {
        if (listener.enterMessageLine) {
            listener.enterMessageLine(this);
        }
    };
    // @Override
    MessageLineContext.prototype.exitRule = function (listener) {
        if (listener.exitMessageLine) {
            listener.exitMessageLine(this);
        }
    };
    // @Override
    MessageLineContext.prototype.accept = function (visitor) {
        if (visitor.visitMessageLine) {
            return visitor.visitMessageLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MessageLineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MessageLineContext = MessageLineContext;
var QualifiedClassContext = /** @class */ (function (_super) {
    __extends(QualifiedClassContext, _super);
    function QualifiedClassContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QualifiedClassContext.prototype.className = function () {
        return this.getRuleContext(0, ClassNameContext);
    };
    QualifiedClassContext.prototype.packagePath = function () {
        return this.tryGetRuleContext(0, PackagePathContext);
    };
    QualifiedClassContext.prototype.innerClassName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InnerClassNameContext);
        }
        else {
            return this.getRuleContext(i, InnerClassNameContext);
        }
    };
    Object.defineProperty(QualifiedClassContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_qualifiedClass; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QualifiedClassContext.prototype.enterRule = function (listener) {
        if (listener.enterQualifiedClass) {
            listener.enterQualifiedClass(this);
        }
    };
    // @Override
    QualifiedClassContext.prototype.exitRule = function (listener) {
        if (listener.exitQualifiedClass) {
            listener.exitQualifiedClass(this);
        }
    };
    // @Override
    QualifiedClassContext.prototype.accept = function (visitor) {
        if (visitor.visitQualifiedClass) {
            return visitor.visitQualifiedClass(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QualifiedClassContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QualifiedClassContext = QualifiedClassContext;
var InnerClassNameContext = /** @class */ (function (_super) {
    __extends(InnerClassNameContext, _super);
    function InnerClassNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InnerClassNameContext.prototype.className = function () {
        return this.tryGetRuleContext(0, ClassNameContext);
    };
    Object.defineProperty(InnerClassNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_innerClassName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InnerClassNameContext.prototype.enterRule = function (listener) {
        if (listener.enterInnerClassName) {
            listener.enterInnerClassName(this);
        }
    };
    // @Override
    InnerClassNameContext.prototype.exitRule = function (listener) {
        if (listener.exitInnerClassName) {
            listener.exitInnerClassName(this);
        }
    };
    // @Override
    InnerClassNameContext.prototype.accept = function (visitor) {
        if (visitor.visitInnerClassName) {
            return visitor.visitInnerClassName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InnerClassNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InnerClassNameContext = InnerClassNameContext;
var ClassFileContext = /** @class */ (function (_super) {
    __extends(ClassFileContext, _super);
    function ClassFileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassFileContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    ClassFileContext.prototype.NATIVE_METHOD = function () { return this.tryGetToken(StackTraceParser.NATIVE_METHOD, 0); };
    ClassFileContext.prototype.UNKNOWN_SOURCE = function () { return this.tryGetToken(StackTraceParser.UNKNOWN_SOURCE, 0); };
    Object.defineProperty(ClassFileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_classFile; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassFileContext.prototype.enterRule = function (listener) {
        if (listener.enterClassFile) {
            listener.enterClassFile(this);
        }
    };
    // @Override
    ClassFileContext.prototype.exitRule = function (listener) {
        if (listener.exitClassFile) {
            listener.exitClassFile(this);
        }
    };
    // @Override
    ClassFileContext.prototype.accept = function (visitor) {
        if (visitor.visitClassFile) {
            return visitor.visitClassFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassFileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassFileContext = ClassFileContext;
var QualifiedMethodContext = /** @class */ (function (_super) {
    __extends(QualifiedMethodContext, _super);
    function QualifiedMethodContext() {
        var _this = this;
        return _this.tryGetRuleContext(0, ConstructorContext);
    }
    QualifiedMethodContext.prototype.qualifiedClass = function () {
        return this.getRuleContext(0, QualifiedClassContext);
    };
    QualifiedMethodContext.prototype.DOT = function () { return this.getToken(StackTraceParser.DOT, 0); };
    QualifiedMethodContext.prototype.methodName = function () {
        return this.tryGetRuleContext(0, MethodNameContext);
    };
    Object.defineProperty(QualifiedMethodContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_qualifiedMethod; },
        enumerable: true,
        configurable: true
    });
    // @Override
    QualifiedMethodContext.prototype.enterRule = function (listener) {
        if (listener.enterQualifiedMethod) {
            listener.enterQualifiedMethod(this);
        }
    };
    // @Override
    QualifiedMethodContext.prototype.exitRule = function (listener) {
        if (listener.exitQualifiedMethod) {
            listener.exitQualifiedMethod(this);
        }
    };
    // @Override
    QualifiedMethodContext.prototype.accept = function (visitor) {
        if (visitor.visitQualifiedMethod) {
            return visitor.visitQualifiedMethod(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QualifiedMethodContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.QualifiedMethodContext = QualifiedMethodContext;
var ConstructorContext = /** @class */ (function (_super) {
    __extends(ConstructorContext, _super);
    function ConstructorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstructorContext.prototype.INIT = function () { return this.getToken(StackTraceParser.INIT, 0); };
    Object.defineProperty(ConstructorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_constructor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstructorContext.prototype.enterRule = function (listener) {
        if (listener.enterConstructor) {
            listener.enterConstructor(this);
        }
    };
    // @Override
    ConstructorContext.prototype.exitRule = function (listener) {
        if (listener.exitConstructor) {
            listener.exitConstructor(this);
        }
    };
    // @Override
    ConstructorContext.prototype.accept = function (visitor) {
        if (visitor.visitConstructor) {
            return visitor.visitConstructor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstructorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstructorContext = ConstructorContext;
var MethodNameContext = /** @class */ (function (_super) {
    __extends(MethodNameContext, _super);
    function MethodNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MethodNameContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(MethodNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_methodName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MethodNameContext.prototype.enterRule = function (listener) {
        if (listener.enterMethodName) {
            listener.enterMethodName(this);
        }
    };
    // @Override
    MethodNameContext.prototype.exitRule = function (listener) {
        if (listener.exitMethodName) {
            listener.exitMethodName(this);
        }
    };
    // @Override
    MethodNameContext.prototype.accept = function (visitor) {
        if (visitor.visitMethodName) {
            return visitor.visitMethodName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MethodNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MethodNameContext = MethodNameContext;
var PackagePathContext = /** @class */ (function (_super) {
    __extends(PackagePathContext, _super);
    function PackagePathContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PackagePathContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    PackagePathContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(StackTraceParser.DOT);
        }
        else {
            return this.getToken(StackTraceParser.DOT, i);
        }
    };
    Object.defineProperty(PackagePathContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_packagePath; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PackagePathContext.prototype.enterRule = function (listener) {
        if (listener.enterPackagePath) {
            listener.enterPackagePath(this);
        }
    };
    // @Override
    PackagePathContext.prototype.exitRule = function (listener) {
        if (listener.exitPackagePath) {
            listener.exitPackagePath(this);
        }
    };
    // @Override
    PackagePathContext.prototype.accept = function (visitor) {
        if (visitor.visitPackagePath) {
            return visitor.visitPackagePath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PackagePathContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PackagePathContext = PackagePathContext;
var ClassNameContext = /** @class */ (function (_super) {
    __extends(ClassNameContext, _super);
    function ClassNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassNameContext.prototype.JavaWord = function () { return this.getToken(StackTraceParser.JavaWord, 0); };
    Object.defineProperty(ClassNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_className; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClassNameContext.prototype.enterRule = function (listener) {
        if (listener.enterClassName) {
            listener.enterClassName(this);
        }
    };
    // @Override
    ClassNameContext.prototype.exitRule = function (listener) {
        if (listener.exitClassName) {
            listener.exitClassName(this);
        }
    };
    // @Override
    ClassNameContext.prototype.accept = function (visitor) {
        if (visitor.visitClassName) {
            return visitor.visitClassName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClassNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClassNameContext = ClassNameContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.JavaWord = function () { return this.getToken(StackTraceParser.JavaWord, 0); };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_identifier; },
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
var MessageContext = /** @class */ (function (_super) {
    __extends(MessageContext, _super);
    function MessageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MessageContext.prototype.COLON = function () { return this.getToken(StackTraceParser.COLON, 0); };
    Object.defineProperty(MessageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return StackTraceParser.RULE_message; },
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
