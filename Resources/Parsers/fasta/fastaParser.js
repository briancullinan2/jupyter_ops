"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fasta/fasta.g4 by ANTLR 4.7.3-SNAPSHOT
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
var fastaParser = /** @class */ (function (_super) {
    __extends(fastaParser, _super);
    function fastaParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(fastaParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(fastaParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return fastaParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fastaParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "fasta.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fastaParser.prototype, "ruleNames", {
        // @Override
        get: function () { return fastaParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fastaParser.prototype, "serializedATN", {
        // @Override
        get: function () { return fastaParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    fastaParser.prototype.sequence = function () {
        var _localctx = new SequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, fastaParser.RULE_sequence);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 11;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 10;
                            this.section();
                        }
                    }
                    this.state = 13;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fastaParser.COMMENTLINE) | (1 << fastaParser.DESCRIPTIONLINE) | (1 << fastaParser.SEQUENCELINE))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    fastaParser.prototype.section = function () {
        var _localctx = new SectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, fastaParser.RULE_section);
        try {
            this.state = 18;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case fastaParser.DESCRIPTIONLINE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 15;
                        this.descriptionline();
                    }
                    break;
                case fastaParser.SEQUENCELINE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 16;
                        this.sequencelines();
                    }
                    break;
                case fastaParser.COMMENTLINE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 17;
                        this.commentline();
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
    fastaParser.prototype.sequencelines = function () {
        var _localctx = new SequencelinesContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, fastaParser.RULE_sequencelines);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 21;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 20;
                                    this.match(fastaParser.SEQUENCELINE);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 23;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
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
    fastaParser.prototype.descriptionline = function () {
        var _localctx = new DescriptionlineContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, fastaParser.RULE_descriptionline);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 25;
                this.match(fastaParser.DESCRIPTIONLINE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    fastaParser.prototype.commentline = function () {
        var _localctx = new CommentlineContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, fastaParser.RULE_commentline);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 27;
                this.match(fastaParser.COMMENTLINE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(fastaParser, "_ATN", {
        get: function () {
            if (!fastaParser.__ATN) {
                fastaParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(fastaParser._serializedATN));
            }
            return fastaParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    fastaParser.COMMENTLINE = 1;
    fastaParser.DESCRIPTIONLINE = 2;
    fastaParser.TEXT = 3;
    fastaParser.EOL = 4;
    fastaParser.SEQUENCELINE = 5;
    fastaParser.RULE_sequence = 0;
    fastaParser.RULE_section = 1;
    fastaParser.RULE_sequencelines = 2;
    fastaParser.RULE_descriptionline = 3;
    fastaParser.RULE_commentline = 4;
    // tslint:disable:no-trailing-whitespace
    fastaParser.ruleNames = [
        "sequence", "section", "sequencelines", "descriptionline", "commentline",
    ];
    fastaParser._LITERAL_NAMES = [];
    fastaParser._SYMBOLIC_NAMES = [
        undefined, "COMMENTLINE", "DESCRIPTIONLINE", "TEXT", "EOL", "SEQUENCELINE",
    ];
    fastaParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(fastaParser._LITERAL_NAMES, fastaParser._SYMBOLIC_NAMES, []);
    fastaParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07 \x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
        "\x06\x02\x0E\n\x02\r\x02\x0E\x02\x0F\x03\x03\x03\x03\x03\x03\x05\x03\x15" +
        "\n\x03\x03\x04\x06\x04\x18\n\x04\r\x04\x0E\x04\x19\x03\x05\x03\x05\x03" +
        "\x06\x03\x06\x03\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
        "\x02\x02\x02\x1E\x02\r\x03\x02\x02\x02\x04\x14\x03\x02\x02\x02\x06\x17" +
        "\x03\x02\x02\x02\b\x1B\x03\x02\x02\x02\n\x1D\x03\x02\x02\x02\f\x0E\x05" +
        "\x04\x03\x02\r\f\x03\x02\x02\x02\x0E\x0F\x03\x02\x02\x02\x0F\r\x03\x02" +
        "\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x03\x03\x02\x02\x02\x11\x15\x05\b" +
        "\x05\x02\x12\x15\x05\x06\x04\x02\x13\x15\x05\n\x06\x02\x14\x11\x03\x02" +
        "\x02\x02\x14\x12\x03\x02\x02\x02\x14\x13\x03\x02\x02\x02\x15\x05\x03\x02" +
        "\x02\x02\x16\x18\x07\x07\x02\x02\x17\x16\x03\x02\x02\x02\x18\x19\x03\x02" +
        "\x02\x02\x19\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x07\x03\x02" +
        "\x02\x02\x1B\x1C\x07\x04\x02\x02\x1C\t\x03\x02\x02\x02\x1D\x1E\x07\x03" +
        "\x02\x02\x1E\v\x03\x02\x02\x02\x05\x0F\x14\x19";
    return fastaParser;
}(Parser_1.Parser));
exports.fastaParser = fastaParser;
var SequenceContext = /** @class */ (function (_super) {
    __extends(SequenceContext, _super);
    function SequenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SequenceContext.prototype.section = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SectionContext);
        }
        else {
            return this.getRuleContext(i, SectionContext);
        }
    };
    Object.defineProperty(SequenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fastaParser.RULE_sequence; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SequenceContext.prototype.enterRule = function (listener) {
        if (listener.enterSequence) {
            listener.enterSequence(this);
        }
    };
    // @Override
    SequenceContext.prototype.exitRule = function (listener) {
        if (listener.exitSequence) {
            listener.exitSequence(this);
        }
    };
    // @Override
    SequenceContext.prototype.accept = function (visitor) {
        if (visitor.visitSequence) {
            return visitor.visitSequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SequenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SequenceContext = SequenceContext;
var SectionContext = /** @class */ (function (_super) {
    __extends(SectionContext, _super);
    function SectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SectionContext.prototype.descriptionline = function () {
        return this.tryGetRuleContext(0, DescriptionlineContext);
    };
    SectionContext.prototype.sequencelines = function () {
        return this.tryGetRuleContext(0, SequencelinesContext);
    };
    SectionContext.prototype.commentline = function () {
        return this.tryGetRuleContext(0, CommentlineContext);
    };
    Object.defineProperty(SectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fastaParser.RULE_section; },
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
var SequencelinesContext = /** @class */ (function (_super) {
    __extends(SequencelinesContext, _super);
    function SequencelinesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SequencelinesContext.prototype.SEQUENCELINE = function (i) {
        if (i === undefined) {
            return this.getTokens(fastaParser.SEQUENCELINE);
        }
        else {
            return this.getToken(fastaParser.SEQUENCELINE, i);
        }
    };
    Object.defineProperty(SequencelinesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fastaParser.RULE_sequencelines; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SequencelinesContext.prototype.enterRule = function (listener) {
        if (listener.enterSequencelines) {
            listener.enterSequencelines(this);
        }
    };
    // @Override
    SequencelinesContext.prototype.exitRule = function (listener) {
        if (listener.exitSequencelines) {
            listener.exitSequencelines(this);
        }
    };
    // @Override
    SequencelinesContext.prototype.accept = function (visitor) {
        if (visitor.visitSequencelines) {
            return visitor.visitSequencelines(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SequencelinesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SequencelinesContext = SequencelinesContext;
var DescriptionlineContext = /** @class */ (function (_super) {
    __extends(DescriptionlineContext, _super);
    function DescriptionlineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DescriptionlineContext.prototype.DESCRIPTIONLINE = function () { return this.getToken(fastaParser.DESCRIPTIONLINE, 0); };
    Object.defineProperty(DescriptionlineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fastaParser.RULE_descriptionline; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DescriptionlineContext.prototype.enterRule = function (listener) {
        if (listener.enterDescriptionline) {
            listener.enterDescriptionline(this);
        }
    };
    // @Override
    DescriptionlineContext.prototype.exitRule = function (listener) {
        if (listener.exitDescriptionline) {
            listener.exitDescriptionline(this);
        }
    };
    // @Override
    DescriptionlineContext.prototype.accept = function (visitor) {
        if (visitor.visitDescriptionline) {
            return visitor.visitDescriptionline(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DescriptionlineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DescriptionlineContext = DescriptionlineContext;
var CommentlineContext = /** @class */ (function (_super) {
    __extends(CommentlineContext, _super);
    function CommentlineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentlineContext.prototype.COMMENTLINE = function () { return this.getToken(fastaParser.COMMENTLINE, 0); };
    Object.defineProperty(CommentlineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return fastaParser.RULE_commentline; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommentlineContext.prototype.enterRule = function (listener) {
        if (listener.enterCommentline) {
            listener.enterCommentline(this);
        }
    };
    // @Override
    CommentlineContext.prototype.exitRule = function (listener) {
        if (listener.exitCommentline) {
            listener.exitCommentline(this);
        }
    };
    // @Override
    CommentlineContext.prototype.accept = function (visitor) {
        if (visitor.visitCommentline) {
            return visitor.visitCommentline(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommentlineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommentlineContext = CommentlineContext;
