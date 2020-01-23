"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/inf/inf.g4 by ANTLR 4.7.3-SNAPSHOT
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
var infParser = /** @class */ (function (_super) {
    __extends(infParser, _super);
    function infParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(infParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(infParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return infParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(infParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "inf.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(infParser.prototype, "ruleNames", {
        // @Override
        get: function () { return infParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(infParser.prototype, "serializedATN", {
        // @Override
        get: function () { return infParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    infParser.prototype.inf = function () {
        var _localctx = new InfContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, infParser.RULE_inf);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 16;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === infParser.T__0 || _la === infParser.EOL) {
                    {
                        this.state = 14;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case infParser.T__0:
                                {
                                    this.state = 12;
                                    this.section();
                                }
                                break;
                            case infParser.EOL:
                                {
                                    this.state = 13;
                                    this.match(infParser.EOL);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 18;
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
    infParser.prototype.section = function () {
        var _localctx = new SectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, infParser.RULE_section);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 19;
                this.sectionheader();
                this.state = 23;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === infParser.CHARS || _la === infParser.STRING) {
                    {
                        {
                            this.state = 20;
                            this.line();
                        }
                    }
                    this.state = 25;
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
    infParser.prototype.sectionheader = function () {
        var _localctx = new SectionheaderContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, infParser.RULE_sectionheader);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 26;
                this.match(infParser.T__0);
                this.state = 27;
                this.string();
                this.state = 28;
                this.match(infParser.T__1);
                this.state = 29;
                this.match(infParser.EOL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    infParser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, infParser.RULE_string);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 31;
                _la = this._input.LA(1);
                if (!(_la === infParser.CHARS || _la === infParser.STRING)) {
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
    infParser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, infParser.RULE_line);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 33;
                this.stringlist();
                this.state = 36;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === infParser.T__2) {
                    {
                        this.state = 34;
                        this.match(infParser.T__2);
                        this.state = 35;
                        this.stringlist();
                    }
                }
                this.state = 38;
                this.match(infParser.EOL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    infParser.prototype.stringlist = function () {
        var _localctx = new StringlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, infParser.RULE_stringlist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 40;
                this.string();
                this.state = 47;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === infParser.T__3) {
                    {
                        {
                            this.state = 41;
                            this.match(infParser.T__3);
                            this.state = 43;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === infParser.CHARS || _la === infParser.STRING) {
                                {
                                    this.state = 42;
                                    this.string();
                                }
                            }
                        }
                    }
                    this.state = 49;
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
    Object.defineProperty(infParser, "_ATN", {
        get: function () {
            if (!infParser.__ATN) {
                infParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(infParser._serializedATN));
            }
            return infParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    infParser.T__0 = 1;
    infParser.T__1 = 2;
    infParser.T__2 = 3;
    infParser.T__3 = 4;
    infParser.CHARS = 5;
    infParser.STRING = 6;
    infParser.COMMENT = 7;
    infParser.EOL = 8;
    infParser.WS = 9;
    infParser.RULE_inf = 0;
    infParser.RULE_section = 1;
    infParser.RULE_sectionheader = 2;
    infParser.RULE_string = 3;
    infParser.RULE_line = 4;
    infParser.RULE_stringlist = 5;
    // tslint:disable:no-trailing-whitespace
    infParser.ruleNames = [
        "inf", "section", "sectionheader", "string", "line", "stringlist",
    ];
    infParser._LITERAL_NAMES = [
        undefined, "'['", "']'", "'='", "','",
    ];
    infParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "CHARS", "STRING",
        "COMMENT", "EOL", "WS",
    ];
    infParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(infParser._LITERAL_NAMES, infParser._SYMBOLIC_NAMES, []);
    infParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\v5\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
        "\x07\x03\x02\x03\x02\x07\x02\x11\n\x02\f\x02\x0E\x02\x14\v\x02\x03\x03" +
        "\x03\x03\x07\x03\x18\n\x03\f\x03\x0E\x03\x1B\v\x03\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x05\x06\'" +
        "\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x05\x07.\n\x07\x07\x07" +
        "0\n\x07\f\x07\x0E\x073\v\x07\x03\x07\x02\x02\x02\b\x02\x02\x04\x02\x06" +
        "\x02\b\x02\n\x02\f\x02\x02\x03\x03\x02\x07\b\x024\x02\x12\x03\x02\x02" +
        "\x02\x04\x15\x03\x02\x02\x02\x06\x1C\x03\x02\x02\x02\b!\x03\x02\x02\x02" +
        "\n#\x03\x02\x02\x02\f*\x03\x02\x02\x02\x0E\x11\x05\x04\x03\x02\x0F\x11" +
        "\x07\n\x02\x02\x10\x0E\x03\x02\x02\x02\x10\x0F\x03\x02\x02\x02\x11\x14" +
        "\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02\x13\x03" +
        "\x03\x02\x02\x02\x14\x12\x03\x02\x02\x02\x15\x19\x05\x06\x04\x02\x16\x18" +
        "\x05\n\x06\x02\x17\x16\x03\x02\x02\x02\x18\x1B\x03\x02\x02\x02\x19\x17" +
        "\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x05\x03\x02\x02\x02\x1B\x19" +
        "\x03\x02\x02\x02\x1C\x1D\x07\x03\x02\x02\x1D\x1E\x05\b\x05\x02\x1E\x1F" +
        "\x07\x04\x02\x02\x1F \x07\n\x02\x02 \x07\x03\x02\x02\x02!\"\t\x02\x02" +
        "\x02\"\t\x03\x02\x02\x02#&\x05\f\x07\x02$%\x07\x05\x02\x02%\'\x05\f\x07" +
        "\x02&$\x03\x02\x02\x02&\'\x03\x02\x02\x02\'(\x03\x02\x02\x02()\x07\n\x02" +
        "\x02)\v\x03\x02\x02\x02*1\x05\b\x05\x02+-\x07\x06\x02\x02,.\x05\b\x05" +
        "\x02-,\x03\x02\x02\x02-.\x03\x02\x02\x02.0\x03\x02\x02\x02/+\x03\x02\x02" +
        "\x0203\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x022\r\x03\x02" +
        "\x02\x0231\x03\x02\x02\x02\b\x10\x12\x19&-1";
    return infParser;
}(Parser_1.Parser));
exports.infParser = infParser;
var InfContext = /** @class */ (function (_super) {
    __extends(InfContext, _super);
    function InfContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InfContext.prototype.section = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SectionContext);
        }
        else {
            return this.getRuleContext(i, SectionContext);
        }
    };
    InfContext.prototype.EOL = function (i) {
        if (i === undefined) {
            return this.getTokens(infParser.EOL);
        }
        else {
            return this.getToken(infParser.EOL, i);
        }
    };
    Object.defineProperty(InfContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return infParser.RULE_inf; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InfContext.prototype.enterRule = function (listener) {
        if (listener.enterInf) {
            listener.enterInf(this);
        }
    };
    // @Override
    InfContext.prototype.exitRule = function (listener) {
        if (listener.exitInf) {
            listener.exitInf(this);
        }
    };
    // @Override
    InfContext.prototype.accept = function (visitor) {
        if (visitor.visitInf) {
            return visitor.visitInf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InfContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InfContext = InfContext;
var SectionContext = /** @class */ (function (_super) {
    __extends(SectionContext, _super);
    function SectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SectionContext.prototype.sectionheader = function () {
        return this.getRuleContext(0, SectionheaderContext);
    };
    SectionContext.prototype.line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        }
        else {
            return this.getRuleContext(i, LineContext);
        }
    };
    Object.defineProperty(SectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return infParser.RULE_section; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SectionContext.prototype.enterRule = function (listener) {
        if (listener.enterSection) {
            listener.enterSection(this);
        }
    };
    // @Override
    SectionContext.prototype.exitRule = function (listener) {
        if (listener.exitSection) {
            listener.exitSection(this);
        }
    };
    // @Override
    SectionContext.prototype.accept = function (visitor) {
        if (visitor.visitSection) {
            return visitor.visitSection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SectionContext = SectionContext;
var SectionheaderContext = /** @class */ (function (_super) {
    __extends(SectionheaderContext, _super);
    function SectionheaderContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SectionheaderContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    SectionheaderContext.prototype.EOL = function () { return this.getToken(infParser.EOL, 0); };
    Object.defineProperty(SectionheaderContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return infParser.RULE_sectionheader; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SectionheaderContext.prototype.enterRule = function (listener) {
        if (listener.enterSectionheader) {
            listener.enterSectionheader(this);
        }
    };
    // @Override
    SectionheaderContext.prototype.exitRule = function (listener) {
        if (listener.exitSectionheader) {
            listener.exitSectionheader(this);
        }
    };
    // @Override
    SectionheaderContext.prototype.accept = function (visitor) {
        if (visitor.visitSectionheader) {
            return visitor.visitSectionheader(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SectionheaderContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SectionheaderContext = SectionheaderContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.CHARS = function () { return this.tryGetToken(infParser.CHARS, 0); };
    StringContext.prototype.STRING = function () { return this.tryGetToken(infParser.STRING, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return infParser.RULE_string; },
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
var LineContext = /** @class */ (function (_super) {
    __extends(LineContext, _super);
    function LineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineContext.prototype.stringlist = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StringlistContext);
        }
        else {
            return this.getRuleContext(i, StringlistContext);
        }
    };
    LineContext.prototype.EOL = function () { return this.getToken(infParser.EOL, 0); };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return infParser.RULE_line; },
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
var StringlistContext = /** @class */ (function (_super) {
    __extends(StringlistContext, _super);
    function StringlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringlistContext.prototype.string = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StringContext);
        }
        else {
            return this.getRuleContext(i, StringContext);
        }
    };
    Object.defineProperty(StringlistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return infParser.RULE_stringlist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringlistContext.prototype.enterRule = function (listener) {
        if (listener.enterStringlist) {
            listener.enterStringlist(this);
        }
    };
    // @Override
    StringlistContext.prototype.exitRule = function (listener) {
        if (listener.exitStringlist) {
            listener.exitStringlist(this);
        }
    };
    // @Override
    StringlistContext.prototype.accept = function (visitor) {
        if (visitor.visitStringlist) {
            return visitor.visitStringlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringlistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringlistContext = StringlistContext;
