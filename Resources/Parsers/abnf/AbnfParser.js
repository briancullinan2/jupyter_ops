"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/abnf/Abnf.g4 by ANTLR 4.7.3-SNAPSHOT
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
var AbnfParser = /** @class */ (function (_super) {
    __extends(AbnfParser, _super);
    function AbnfParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(AbnfParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(AbnfParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return AbnfParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbnfParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "Abnf.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbnfParser.prototype, "ruleNames", {
        // @Override
        get: function () { return AbnfParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbnfParser.prototype, "serializedATN", {
        // @Override
        get: function () { return AbnfParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    AbnfParser.prototype.rulelist = function () {
        var _localctx = new RulelistContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, AbnfParser.RULE_rulelist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 23;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AbnfParser.ID) {
                    {
                        {
                            this.state = 20;
                            this.rule_();
                        }
                    }
                    this.state = 25;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 26;
                this.match(AbnfParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AbnfParser.prototype.rule_ = function () {
        var _localctx = new Rule_Context(this._ctx, this.state);
        this.enterRule(_localctx, 2, AbnfParser.RULE_rule_);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 28;
                this.match(AbnfParser.ID);
                this.state = 29;
                this.match(AbnfParser.T__0);
                this.state = 31;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AbnfParser.T__1) {
                    {
                        this.state = 30;
                        this.match(AbnfParser.T__1);
                    }
                }
                this.state = 33;
                this.elements();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AbnfParser.prototype.elements = function () {
        var _localctx = new ElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, AbnfParser.RULE_elements);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 35;
                this.alternation();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AbnfParser.prototype.alternation = function () {
        var _localctx = new AlternationContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, AbnfParser.RULE_alternation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 37;
                this.concatenation();
                this.state = 42;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === AbnfParser.T__1) {
                    {
                        {
                            this.state = 38;
                            this.match(AbnfParser.T__1);
                            this.state = 39;
                            this.concatenation();
                        }
                    }
                    this.state = 44;
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
    AbnfParser.prototype.concatenation = function () {
        var _localctx = new ConcatenationContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, AbnfParser.RULE_concatenation);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 46;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 45;
                                    this.repetition();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 48;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
    AbnfParser.prototype.repetition = function () {
        var _localctx = new RepetitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, AbnfParser.RULE_repetition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 51;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === AbnfParser.T__2 || _la === AbnfParser.INT) {
                    {
                        this.state = 50;
                        this.repeat();
                    }
                }
                this.state = 53;
                this.element();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AbnfParser.prototype.repeat = function () {
        var _localctx = new RepeatContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, AbnfParser.RULE_repeat);
        var _la;
        try {
            this.state = 63;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 55;
                        this.match(AbnfParser.INT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 57;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === AbnfParser.INT) {
                                {
                                    this.state = 56;
                                    this.match(AbnfParser.INT);
                                }
                            }
                            this.state = 59;
                            this.match(AbnfParser.T__2);
                            this.state = 61;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === AbnfParser.INT) {
                                {
                                    this.state = 60;
                                    this.match(AbnfParser.INT);
                                }
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
    AbnfParser.prototype.element = function () {
        var _localctx = new ElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, AbnfParser.RULE_element);
        try {
            this.state = 71;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case AbnfParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 65;
                        this.match(AbnfParser.ID);
                    }
                    break;
                case AbnfParser.T__3:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 66;
                        this.group();
                    }
                    break;
                case AbnfParser.T__5:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 67;
                        this.option();
                    }
                    break;
                case AbnfParser.STRING:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 68;
                        this.match(AbnfParser.STRING);
                    }
                    break;
                case AbnfParser.NumberValue:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 69;
                        this.match(AbnfParser.NumberValue);
                    }
                    break;
                case AbnfParser.ProseValue:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 70;
                        this.match(AbnfParser.ProseValue);
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
    AbnfParser.prototype.group = function () {
        var _localctx = new GroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, AbnfParser.RULE_group);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 73;
                this.match(AbnfParser.T__3);
                this.state = 74;
                this.alternation();
                this.state = 75;
                this.match(AbnfParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    AbnfParser.prototype.option = function () {
        var _localctx = new OptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, AbnfParser.RULE_option);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 77;
                this.match(AbnfParser.T__5);
                this.state = 78;
                this.alternation();
                this.state = 79;
                this.match(AbnfParser.T__6);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(AbnfParser, "_ATN", {
        get: function () {
            if (!AbnfParser.__ATN) {
                AbnfParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(AbnfParser._serializedATN));
            }
            return AbnfParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    AbnfParser.T__0 = 1;
    AbnfParser.T__1 = 2;
    AbnfParser.T__2 = 3;
    AbnfParser.T__3 = 4;
    AbnfParser.T__4 = 5;
    AbnfParser.T__5 = 6;
    AbnfParser.T__6 = 7;
    AbnfParser.NumberValue = 8;
    AbnfParser.ProseValue = 9;
    AbnfParser.ID = 10;
    AbnfParser.INT = 11;
    AbnfParser.COMMENT = 12;
    AbnfParser.WS = 13;
    AbnfParser.STRING = 14;
    AbnfParser.RULE_rulelist = 0;
    AbnfParser.RULE_rule_ = 1;
    AbnfParser.RULE_elements = 2;
    AbnfParser.RULE_alternation = 3;
    AbnfParser.RULE_concatenation = 4;
    AbnfParser.RULE_repetition = 5;
    AbnfParser.RULE_repeat = 6;
    AbnfParser.RULE_element = 7;
    AbnfParser.RULE_group = 8;
    AbnfParser.RULE_option = 9;
    // tslint:disable:no-trailing-whitespace
    AbnfParser.ruleNames = [
        "rulelist", "rule_", "elements", "alternation", "concatenation", "repetition",
        "repeat", "element", "group", "option",
    ];
    AbnfParser._LITERAL_NAMES = [
        undefined, "'='", "'/'", "'*'", "'('", "')'", "'['", "']'",
    ];
    AbnfParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "NumberValue", "ProseValue", "ID", "INT", "COMMENT", "WS",
        "STRING",
    ];
    AbnfParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(AbnfParser._LITERAL_NAMES, AbnfParser._SYMBOLIC_NAMES, []);
    AbnfParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10T\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x07\x02\x18\n\x02" +
        "\f\x02\x0E\x02\x1B\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03" +
        "\"\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05" +
        "+\n\x05\f\x05\x0E\x05.\v\x05\x03\x06\x06\x061\n\x06\r\x06\x0E\x062\x03" +
        "\x07\x05\x076\n\x07\x03\x07\x03\x07\x03\b\x03\b\x05\b<\n\b\x03\b\x03\b" +
        "\x05\b@\n\b\x05\bB\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tJ\n\t" +
        "\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x02\x02\x02\f\x02" +
        "\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
        "\x02\x02\x02V\x02\x19\x03\x02\x02\x02\x04\x1E\x03\x02\x02\x02\x06%\x03" +
        "\x02\x02\x02\b\'\x03\x02\x02\x02\n0\x03\x02\x02\x02\f5\x03\x02\x02\x02" +
        "\x0EA\x03\x02\x02\x02\x10I\x03\x02\x02\x02\x12K\x03\x02\x02\x02\x14O\x03" +
        "\x02\x02\x02\x16\x18\x05\x04\x03\x02\x17\x16\x03\x02\x02\x02\x18\x1B\x03" +
        "\x02\x02\x02\x19\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1C\x03" +
        "\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1C\x1D\x07\x02\x02\x03\x1D\x03\x03" +
        "\x02\x02\x02\x1E\x1F\x07\f\x02\x02\x1F!\x07\x03\x02\x02 \"\x07\x04\x02" +
        "\x02! \x03\x02\x02\x02!\"\x03\x02\x02\x02\"#\x03\x02\x02\x02#$\x05\x06" +
        "\x04\x02$\x05\x03\x02\x02\x02%&\x05\b\x05\x02&\x07\x03\x02\x02\x02\'," +
        "\x05\n\x06\x02()\x07\x04\x02\x02)+\x05\n\x06\x02*(\x03\x02\x02\x02+.\x03" +
        "\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02-\t\x03\x02\x02\x02.," +
        "\x03\x02\x02\x02/1\x05\f\x07\x020/\x03\x02\x02\x0212\x03\x02\x02\x022" +
        "0\x03\x02\x02\x0223\x03\x02\x02\x023\v\x03\x02\x02\x0246\x05\x0E\b\x02" +
        "54\x03\x02\x02\x0256\x03\x02\x02\x0267\x03\x02\x02\x0278\x05\x10\t\x02" +
        "8\r\x03\x02\x02\x029B\x07\r\x02\x02:<\x07\r\x02\x02;:\x03\x02\x02\x02" +
        ";<\x03\x02\x02\x02<=\x03\x02\x02\x02=?\x07\x05\x02\x02>@\x07\r\x02\x02" +
        "?>\x03\x02\x02\x02?@\x03\x02\x02\x02@B\x03\x02\x02\x02A9\x03\x02\x02\x02" +
        "A;\x03\x02\x02\x02B\x0F\x03\x02\x02\x02CJ\x07\f\x02\x02DJ\x05\x12\n\x02" +
        "EJ\x05\x14\v\x02FJ\x07\x10\x02\x02GJ\x07\n\x02\x02HJ\x07\v\x02\x02IC\x03" +
        "\x02\x02\x02ID\x03\x02\x02\x02IE\x03\x02\x02\x02IF\x03\x02\x02\x02IG\x03" +
        "\x02\x02\x02IH\x03\x02\x02\x02J\x11\x03\x02\x02\x02KL\x07\x06\x02\x02" +
        "LM\x05\b\x05\x02MN\x07\x07\x02\x02N\x13\x03\x02\x02\x02OP\x07\b\x02\x02" +
        "PQ\x05\b\x05\x02QR\x07\t\x02\x02R\x15\x03\x02\x02\x02\v\x19!,25;?AI";
    return AbnfParser;
}(Parser_1.Parser));
exports.AbnfParser = AbnfParser;
var RulelistContext = /** @class */ (function (_super) {
    __extends(RulelistContext, _super);
    function RulelistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RulelistContext.prototype.EOF = function () { return this.getToken(AbnfParser.EOF, 0); };
    RulelistContext.prototype.rule_ = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Rule_Context);
        }
        else {
            return this.getRuleContext(i, Rule_Context);
        }
    };
    Object.defineProperty(RulelistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AbnfParser.RULE_rulelist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RulelistContext.prototype.enterRule = function (listener) {
        if (listener.enterRulelist) {
            listener.enterRulelist(this);
        }
    };
    // @Override
    RulelistContext.prototype.exitRule = function (listener) {
        if (listener.exitRulelist) {
            listener.exitRulelist(this);
        }
    };
    // @Override
    RulelistContext.prototype.accept = function (visitor) {
        if (visitor.visitRulelist) {
            return visitor.visitRulelist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RulelistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RulelistContext = RulelistContext;
var Rule_Context = /** @class */ (function (_super) {
    __extends(Rule_Context, _super);
    function Rule_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule_Context.prototype.ID = function () { return this.getToken(AbnfParser.ID, 0); };
    Rule_Context.prototype.elements = function () {
        return this.getRuleContext(0, ElementsContext);
    };
    Object.defineProperty(Rule_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return AbnfParser.RULE_rule_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Rule_Context.prototype.enterRule = function (listener) {
        if (listener.enterRule_) {
            listener.enterRule_(this);
        }
    };
    // @Override
    Rule_Context.prototype.exitRule = function (listener) {
        if (listener.exitRule_) {
            listener.exitRule_(this);
        }
    };
    // @Override
    Rule_Context.prototype.accept = function (visitor) {
        if (visitor.visitRule_) {
            return visitor.visitRule_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Rule_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Rule_Context = Rule_Context;
var ElementsContext = /** @class */ (function (_super) {
    __extends(ElementsContext, _super);
    function ElementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementsContext.prototype.alternation = function () {
        return this.getRuleContext(0, AlternationContext);
    };
    Object.defineProperty(ElementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AbnfParser.RULE_elements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementsContext.prototype.enterRule = function (listener) {
        if (listener.enterElements) {
            listener.enterElements(this);
        }
    };
    // @Override
    ElementsContext.prototype.exitRule = function (listener) {
        if (listener.exitElements) {
            listener.exitElements(this);
        }
    };
    // @Override
    ElementsContext.prototype.accept = function (visitor) {
        if (visitor.visitElements) {
            return visitor.visitElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementsContext = ElementsContext;
var AlternationContext = /** @class */ (function (_super) {
    __extends(AlternationContext, _super);
    function AlternationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlternationContext.prototype.concatenation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConcatenationContext);
        }
        else {
            return this.getRuleContext(i, ConcatenationContext);
        }
    };
    Object.defineProperty(AlternationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AbnfParser.RULE_alternation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlternationContext.prototype.enterRule = function (listener) {
        if (listener.enterAlternation) {
            listener.enterAlternation(this);
        }
    };
    // @Override
    AlternationContext.prototype.exitRule = function (listener) {
        if (listener.exitAlternation) {
            listener.exitAlternation(this);
        }
    };
    // @Override
    AlternationContext.prototype.accept = function (visitor) {
        if (visitor.visitAlternation) {
            return visitor.visitAlternation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlternationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlternationContext = AlternationContext;
var ConcatenationContext = /** @class */ (function (_super) {
    __extends(ConcatenationContext, _super);
    function ConcatenationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConcatenationContext.prototype.repetition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RepetitionContext);
        }
        else {
            return this.getRuleContext(i, RepetitionContext);
        }
    };
    Object.defineProperty(ConcatenationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AbnfParser.RULE_concatenation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConcatenationContext.prototype.enterRule = function (listener) {
        if (listener.enterConcatenation) {
            listener.enterConcatenation(this);
        }
    };
    // @Override
    ConcatenationContext.prototype.exitRule = function (listener) {
        if (listener.exitConcatenation) {
            listener.exitConcatenation(this);
        }
    };
    // @Override
    ConcatenationContext.prototype.accept = function (visitor) {
        if (visitor.visitConcatenation) {
            return visitor.visitConcatenation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConcatenationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConcatenationContext = ConcatenationContext;
var RepetitionContext = /** @class */ (function (_super) {
    __extends(RepetitionContext, _super);
    function RepetitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RepetitionContext.prototype.element = function () {
        return this.getRuleContext(0, ElementContext);
    };
    RepetitionContext.prototype.repeat = function () {
        return this.tryGetRuleContext(0, RepeatContext);
    };
    Object.defineProperty(RepetitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AbnfParser.RULE_repetition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RepetitionContext.prototype.enterRule = function (listener) {
        if (listener.enterRepetition) {
            listener.enterRepetition(this);
        }
    };
    // @Override
    RepetitionContext.prototype.exitRule = function (listener) {
        if (listener.exitRepetition) {
            listener.exitRepetition(this);
        }
    };
    // @Override
    RepetitionContext.prototype.accept = function (visitor) {
        if (visitor.visitRepetition) {
            return visitor.visitRepetition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RepetitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RepetitionContext = RepetitionContext;
var RepeatContext = /** @class */ (function (_super) {
    __extends(RepeatContext, _super);
    function RepeatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RepeatContext.prototype.INT = function (i) {
        if (i === undefined) {
            return this.getTokens(AbnfParser.INT);
        }
        else {
            return this.getToken(AbnfParser.INT, i);
        }
    };
    Object.defineProperty(RepeatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AbnfParser.RULE_repeat; },
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
var ElementContext = /** @class */ (function (_super) {
    __extends(ElementContext, _super);
    function ElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementContext.prototype.ID = function () { return this.tryGetToken(AbnfParser.ID, 0); };
    ElementContext.prototype.group = function () {
        return this.tryGetRuleContext(0, GroupContext);
    };
    ElementContext.prototype.option = function () {
        return this.tryGetRuleContext(0, OptionContext);
    };
    ElementContext.prototype.STRING = function () { return this.tryGetToken(AbnfParser.STRING, 0); };
    ElementContext.prototype.NumberValue = function () { return this.tryGetToken(AbnfParser.NumberValue, 0); };
    ElementContext.prototype.ProseValue = function () { return this.tryGetToken(AbnfParser.ProseValue, 0); };
    Object.defineProperty(ElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AbnfParser.RULE_element; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementContext.prototype.enterRule = function (listener) {
        if (listener.enterElement) {
            listener.enterElement(this);
        }
    };
    // @Override
    ElementContext.prototype.exitRule = function (listener) {
        if (listener.exitElement) {
            listener.exitElement(this);
        }
    };
    // @Override
    ElementContext.prototype.accept = function (visitor) {
        if (visitor.visitElement) {
            return visitor.visitElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementContext = ElementContext;
var GroupContext = /** @class */ (function (_super) {
    __extends(GroupContext, _super);
    function GroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GroupContext.prototype.alternation = function () {
        return this.getRuleContext(0, AlternationContext);
    };
    Object.defineProperty(GroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AbnfParser.RULE_group; },
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
var OptionContext = /** @class */ (function (_super) {
    __extends(OptionContext, _super);
    function OptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionContext.prototype.alternation = function () {
        return this.getRuleContext(0, AlternationContext);
    };
    Object.defineProperty(OptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return AbnfParser.RULE_option; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionContext.prototype.enterRule = function (listener) {
        if (listener.enterOption) {
            listener.enterOption(this);
        }
    };
    // @Override
    OptionContext.prototype.exitRule = function (listener) {
        if (listener.exitOption) {
            listener.exitOption(this);
        }
    };
    // @Override
    OptionContext.prototype.accept = function (visitor) {
        if (visitor.visitOption) {
            return visitor.visitOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionContext = OptionContext;
