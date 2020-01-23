"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cmake/CMake.g4 by ANTLR 4.7.3-SNAPSHOT
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
var CMakeParser = /** @class */ (function (_super) {
    __extends(CMakeParser, _super);
    function CMakeParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(CMakeParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(CMakeParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return CMakeParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CMakeParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "CMake.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CMakeParser.prototype, "ruleNames", {
        // @Override
        get: function () { return CMakeParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CMakeParser.prototype, "serializedATN", {
        // @Override
        get: function () { return CMakeParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    CMakeParser.prototype.file = function () {
        var _localctx = new FileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, CMakeParser.RULE_file);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 11;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CMakeParser.Identifier) {
                    {
                        {
                            this.state = 8;
                            this.command_invocation();
                        }
                    }
                    this.state = 13;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 14;
                this.match(CMakeParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CMakeParser.prototype.command_invocation = function () {
        var _localctx = new Command_invocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, CMakeParser.RULE_command_invocation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 16;
                this.match(CMakeParser.Identifier);
                this.state = 17;
                this.match(CMakeParser.T__0);
                this.state = 22;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CMakeParser.T__0) | (1 << CMakeParser.Identifier) | (1 << CMakeParser.Unquoted_argument) | (1 << CMakeParser.Quoted_argument) | (1 << CMakeParser.Bracket_argument))) !== 0)) {
                    {
                        this.state = 20;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case CMakeParser.Identifier:
                            case CMakeParser.Unquoted_argument:
                            case CMakeParser.Quoted_argument:
                            case CMakeParser.Bracket_argument:
                                {
                                    this.state = 18;
                                    this.single_argument();
                                }
                                break;
                            case CMakeParser.T__0:
                                {
                                    this.state = 19;
                                    this.compound_argument();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 24;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 25;
                this.match(CMakeParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CMakeParser.prototype.single_argument = function () {
        var _localctx = new Single_argumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, CMakeParser.RULE_single_argument);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 27;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CMakeParser.Identifier) | (1 << CMakeParser.Unquoted_argument) | (1 << CMakeParser.Quoted_argument) | (1 << CMakeParser.Bracket_argument))) !== 0))) {
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
    CMakeParser.prototype.compound_argument = function () {
        var _localctx = new Compound_argumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, CMakeParser.RULE_compound_argument);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 29;
                this.match(CMakeParser.T__0);
                this.state = 34;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CMakeParser.T__0) | (1 << CMakeParser.Identifier) | (1 << CMakeParser.Unquoted_argument) | (1 << CMakeParser.Quoted_argument) | (1 << CMakeParser.Bracket_argument))) !== 0)) {
                    {
                        this.state = 32;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case CMakeParser.Identifier:
                            case CMakeParser.Unquoted_argument:
                            case CMakeParser.Quoted_argument:
                            case CMakeParser.Bracket_argument:
                                {
                                    this.state = 30;
                                    this.single_argument();
                                }
                                break;
                            case CMakeParser.T__0:
                                {
                                    this.state = 31;
                                    this.compound_argument();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 36;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 37;
                this.match(CMakeParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(CMakeParser, "_ATN", {
        get: function () {
            if (!CMakeParser.__ATN) {
                CMakeParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CMakeParser._serializedATN));
            }
            return CMakeParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    CMakeParser.T__0 = 1;
    CMakeParser.T__1 = 2;
    CMakeParser.Identifier = 3;
    CMakeParser.Unquoted_argument = 4;
    CMakeParser.Escape_sequence = 5;
    CMakeParser.Quoted_argument = 6;
    CMakeParser.Bracket_argument = 7;
    CMakeParser.Bracket_comment = 8;
    CMakeParser.Line_comment = 9;
    CMakeParser.Newline = 10;
    CMakeParser.Space = 11;
    CMakeParser.RULE_file = 0;
    CMakeParser.RULE_command_invocation = 1;
    CMakeParser.RULE_single_argument = 2;
    CMakeParser.RULE_compound_argument = 3;
    // tslint:disable:no-trailing-whitespace
    CMakeParser.ruleNames = [
        "file", "command_invocation", "single_argument", "compound_argument",
    ];
    CMakeParser._LITERAL_NAMES = [
        undefined, "'('", "')'",
    ];
    CMakeParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "Identifier", "Unquoted_argument", "Escape_sequence",
        "Quoted_argument", "Bracket_argument", "Bracket_comment", "Line_comment",
        "Newline", "Space",
    ];
    CMakeParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CMakeParser._LITERAL_NAMES, CMakeParser._SYMBOLIC_NAMES, []);
    CMakeParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r*\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x07\x02\f\n\x02" +
        "\f\x02\x0E\x02\x0F\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x07\x03\x17\n\x03\f\x03\x0E\x03\x1A\v\x03\x03\x03\x03\x03\x03\x04\x03" +
        "\x04\x03\x05\x03\x05\x03\x05\x07\x05#\n\x05\f\x05\x0E\x05&\v\x05\x03\x05" +
        "\x03\x05\x03\x05\x02\x02\x02\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x03" +
        "\x04\x02\x05\x06\b\t\x02*\x02\r\x03\x02\x02\x02\x04\x12\x03\x02\x02\x02" +
        "\x06\x1D\x03\x02\x02\x02\b\x1F\x03\x02\x02\x02\n\f\x05\x04\x03\x02\v\n" +
        "\x03\x02\x02\x02\f\x0F\x03\x02\x02\x02\r\v\x03\x02\x02\x02\r\x0E\x03\x02" +
        "\x02\x02\x0E\x10\x03\x02\x02\x02\x0F\r\x03\x02\x02\x02\x10\x11\x07\x02" +
        "\x02\x03\x11\x03\x03\x02\x02\x02\x12\x13\x07\x05\x02\x02\x13\x18\x07\x03" +
        "\x02\x02\x14\x17\x05\x06\x04\x02\x15\x17\x05\b\x05\x02\x16\x14\x03\x02" +
        "\x02\x02\x16\x15\x03\x02\x02\x02\x17\x1A\x03\x02\x02\x02\x18\x16\x03\x02" +
        "\x02\x02\x18\x19\x03\x02\x02\x02\x19\x1B\x03\x02\x02\x02\x1A\x18\x03\x02" +
        "\x02\x02\x1B\x1C\x07\x04\x02\x02\x1C\x05\x03\x02\x02\x02\x1D\x1E\t\x02" +
        "\x02\x02\x1E\x07\x03\x02\x02\x02\x1F$\x07\x03\x02\x02 #\x05\x06\x04\x02" +
        "!#\x05\b\x05\x02\" \x03\x02\x02\x02\"!\x03\x02\x02\x02#&\x03\x02\x02\x02" +
        "$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%\'\x03\x02\x02\x02&$\x03\x02\x02" +
        "\x02\'(\x07\x04\x02\x02(\t\x03\x02\x02\x02\x07\r\x16\x18\"$";
    return CMakeParser;
}(Parser_1.Parser));
exports.CMakeParser = CMakeParser;
var FileContext = /** @class */ (function (_super) {
    __extends(FileContext, _super);
    function FileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FileContext.prototype.EOF = function () { return this.getToken(CMakeParser.EOF, 0); };
    FileContext.prototype.command_invocation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Command_invocationContext);
        }
        else {
            return this.getRuleContext(i, Command_invocationContext);
        }
    };
    Object.defineProperty(FileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CMakeParser.RULE_file; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FileContext.prototype.enterRule = function (listener) {
        if (listener.enterFile) {
            listener.enterFile(this);
        }
    };
    // @Override
    FileContext.prototype.exitRule = function (listener) {
        if (listener.exitFile) {
            listener.exitFile(this);
        }
    };
    // @Override
    FileContext.prototype.accept = function (visitor) {
        if (visitor.visitFile) {
            return visitor.visitFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FileContext = FileContext;
var Command_invocationContext = /** @class */ (function (_super) {
    __extends(Command_invocationContext, _super);
    function Command_invocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Command_invocationContext.prototype.Identifier = function () { return this.getToken(CMakeParser.Identifier, 0); };
    Command_invocationContext.prototype.single_argument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Single_argumentContext);
        }
        else {
            return this.getRuleContext(i, Single_argumentContext);
        }
    };
    Command_invocationContext.prototype.compound_argument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Compound_argumentContext);
        }
        else {
            return this.getRuleContext(i, Compound_argumentContext);
        }
    };
    Object.defineProperty(Command_invocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CMakeParser.RULE_command_invocation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Command_invocationContext.prototype.enterRule = function (listener) {
        if (listener.enterCommand_invocation) {
            listener.enterCommand_invocation(this);
        }
    };
    // @Override
    Command_invocationContext.prototype.exitRule = function (listener) {
        if (listener.exitCommand_invocation) {
            listener.exitCommand_invocation(this);
        }
    };
    // @Override
    Command_invocationContext.prototype.accept = function (visitor) {
        if (visitor.visitCommand_invocation) {
            return visitor.visitCommand_invocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Command_invocationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Command_invocationContext = Command_invocationContext;
var Single_argumentContext = /** @class */ (function (_super) {
    __extends(Single_argumentContext, _super);
    function Single_argumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Single_argumentContext.prototype.Identifier = function () { return this.tryGetToken(CMakeParser.Identifier, 0); };
    Single_argumentContext.prototype.Unquoted_argument = function () { return this.tryGetToken(CMakeParser.Unquoted_argument, 0); };
    Single_argumentContext.prototype.Bracket_argument = function () { return this.tryGetToken(CMakeParser.Bracket_argument, 0); };
    Single_argumentContext.prototype.Quoted_argument = function () { return this.tryGetToken(CMakeParser.Quoted_argument, 0); };
    Object.defineProperty(Single_argumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CMakeParser.RULE_single_argument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Single_argumentContext.prototype.enterRule = function (listener) {
        if (listener.enterSingle_argument) {
            listener.enterSingle_argument(this);
        }
    };
    // @Override
    Single_argumentContext.prototype.exitRule = function (listener) {
        if (listener.exitSingle_argument) {
            listener.exitSingle_argument(this);
        }
    };
    // @Override
    Single_argumentContext.prototype.accept = function (visitor) {
        if (visitor.visitSingle_argument) {
            return visitor.visitSingle_argument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Single_argumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Single_argumentContext = Single_argumentContext;
var Compound_argumentContext = /** @class */ (function (_super) {
    __extends(Compound_argumentContext, _super);
    function Compound_argumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Compound_argumentContext.prototype.single_argument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Single_argumentContext);
        }
        else {
            return this.getRuleContext(i, Single_argumentContext);
        }
    };
    Compound_argumentContext.prototype.compound_argument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Compound_argumentContext);
        }
        else {
            return this.getRuleContext(i, Compound_argumentContext);
        }
    };
    Object.defineProperty(Compound_argumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CMakeParser.RULE_compound_argument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Compound_argumentContext.prototype.enterRule = function (listener) {
        if (listener.enterCompound_argument) {
            listener.enterCompound_argument(this);
        }
    };
    // @Override
    Compound_argumentContext.prototype.exitRule = function (listener) {
        if (listener.exitCompound_argument) {
            listener.exitCompound_argument(this);
        }
    };
    // @Override
    Compound_argumentContext.prototype.accept = function (visitor) {
        if (visitor.visitCompound_argument) {
            return visitor.visitCompound_argument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Compound_argumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Compound_argumentContext = Compound_argumentContext;
