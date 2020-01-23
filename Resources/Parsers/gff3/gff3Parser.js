"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gff3/gff3.g4 by ANTLR 4.7.3-SNAPSHOT
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
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var gff3Parser = /** @class */ (function (_super) {
    __extends(gff3Parser, _super);
    function gff3Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(gff3Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(gff3Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return gff3Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gff3Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "gff3.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gff3Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return gff3Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gff3Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return gff3Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    gff3Parser.prototype.document = function () {
        var _localctx = new DocumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, gff3Parser.RULE_document);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 28;
                this.match(gff3Parser.HEADER);
                this.state = 30;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 29;
                            this.line();
                        }
                    }
                    this.state = 32;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === gff3Parser.COMMENTLINE || _la === gff3Parser.TEXT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    gff3Parser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, gff3Parser.RULE_line);
        try {
            this.state = 36;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case gff3Parser.COMMENTLINE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 34;
                        this.commentline();
                    }
                    break;
                case gff3Parser.TEXT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 35;
                        this.dataline();
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
    gff3Parser.prototype.dataline = function () {
        var _localctx = new DatalineContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, gff3Parser.RULE_dataline);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 38;
                this.seqid();
                this.state = 39;
                this.match(gff3Parser.T__0);
                this.state = 40;
                this.source();
                this.state = 41;
                this.match(gff3Parser.T__0);
                this.state = 42;
                this.type();
                this.state = 43;
                this.match(gff3Parser.T__0);
                this.state = 44;
                this.start();
                this.state = 45;
                this.match(gff3Parser.T__0);
                this.state = 46;
                this.end();
                this.state = 47;
                this.match(gff3Parser.T__0);
                this.state = 48;
                this.score();
                this.state = 49;
                this.match(gff3Parser.T__0);
                this.state = 50;
                this.strand();
                this.state = 51;
                this.match(gff3Parser.T__0);
                this.state = 52;
                this.phase();
                this.state = 53;
                this.match(gff3Parser.T__0);
                this.state = 55;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === gff3Parser.TEXT) {
                    {
                        this.state = 54;
                        this.attributes();
                    }
                }
                this.state = 57;
                this.match(gff3Parser.EOL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    gff3Parser.prototype.attributes = function () {
        var _localctx = new AttributesContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, gff3Parser.RULE_attributes);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 59;
                this.attribute();
                this.state = 64;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === gff3Parser.T__1) {
                    {
                        {
                            this.state = 60;
                            this.match(gff3Parser.T__1);
                            this.state = 61;
                            this.attribute();
                        }
                    }
                    this.state = 66;
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
    gff3Parser.prototype.attribute = function () {
        var _localctx = new AttributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, gff3Parser.RULE_attribute);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 67;
                this.match(gff3Parser.TEXT);
                this.state = 68;
                this.match(gff3Parser.T__2);
                this.state = 69;
                this.match(gff3Parser.TEXT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    gff3Parser.prototype.seqid = function () {
        var _localctx = new SeqidContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, gff3Parser.RULE_seqid);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 71;
                this.match(gff3Parser.TEXT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    gff3Parser.prototype.source = function () {
        var _localctx = new SourceContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, gff3Parser.RULE_source);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 73;
                this.match(gff3Parser.TEXT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    gff3Parser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, gff3Parser.RULE_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 75;
                this.match(gff3Parser.TEXT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    gff3Parser.prototype.start = function () {
        var _localctx = new StartContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, gff3Parser.RULE_start);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 77;
                this.match(gff3Parser.TEXT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    gff3Parser.prototype.end = function () {
        var _localctx = new EndContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, gff3Parser.RULE_end);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 79;
                this.match(gff3Parser.TEXT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    gff3Parser.prototype.strand = function () {
        var _localctx = new StrandContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, gff3Parser.RULE_strand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 81;
                this.match(gff3Parser.TEXT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    gff3Parser.prototype.score = function () {
        var _localctx = new ScoreContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, gff3Parser.RULE_score);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 83;
                this.match(gff3Parser.TEXT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    gff3Parser.prototype.phase = function () {
        var _localctx = new PhaseContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, gff3Parser.RULE_phase);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 85;
                this.match(gff3Parser.TEXT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    gff3Parser.prototype.commentline = function () {
        var _localctx = new CommentlineContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, gff3Parser.RULE_commentline);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 87;
                this.match(gff3Parser.COMMENTLINE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(gff3Parser, "_ATN", {
        get: function () {
            if (!gff3Parser.__ATN) {
                gff3Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(gff3Parser._serializedATN));
            }
            return gff3Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    gff3Parser.T__0 = 1;
    gff3Parser.T__1 = 2;
    gff3Parser.T__2 = 3;
    gff3Parser.HEADER = 4;
    gff3Parser.COMMENTLINE = 5;
    gff3Parser.EOL = 6;
    gff3Parser.TEXT = 7;
    gff3Parser.RULE_document = 0;
    gff3Parser.RULE_line = 1;
    gff3Parser.RULE_dataline = 2;
    gff3Parser.RULE_attributes = 3;
    gff3Parser.RULE_attribute = 4;
    gff3Parser.RULE_seqid = 5;
    gff3Parser.RULE_source = 6;
    gff3Parser.RULE_type = 7;
    gff3Parser.RULE_start = 8;
    gff3Parser.RULE_end = 9;
    gff3Parser.RULE_strand = 10;
    gff3Parser.RULE_score = 11;
    gff3Parser.RULE_phase = 12;
    gff3Parser.RULE_commentline = 13;
    // tslint:disable:no-trailing-whitespace
    gff3Parser.ruleNames = [
        "document", "line", "dataline", "attributes", "attribute", "seqid", "source",
        "type", "start", "end", "strand", "score", "phase", "commentline",
    ];
    gff3Parser._LITERAL_NAMES = [
        undefined, "'\t'", "';'", "'='",
    ];
    gff3Parser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, "HEADER", "COMMENTLINE", "EOL",
        "TEXT",
    ];
    gff3Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(gff3Parser._LITERAL_NAMES, gff3Parser._SYMBOLIC_NAMES, []);
    gff3Parser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\t\\\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
        "\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E" +
        "\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x06\x02!\n\x02\r\x02\x0E\x02\"\x03" +
        "\x03\x03\x03\x05\x03\'\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x05\x04:\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
        "\x05\x07\x05A\n\x05\f\x05\x0E\x05D\v\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f" +
        "\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x02\x02\x02" +
        "\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
        "\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x02\x02Q\x02\x1E\x03\x02" +
        "\x02\x02\x04&\x03\x02\x02\x02\x06(\x03\x02\x02\x02\b=\x03\x02\x02\x02" +
        "\nE\x03\x02\x02\x02\fI\x03\x02\x02\x02\x0EK\x03\x02\x02\x02\x10M\x03\x02" +
        "\x02\x02\x12O\x03\x02\x02\x02\x14Q\x03\x02\x02\x02\x16S\x03\x02\x02\x02" +
        "\x18U\x03\x02\x02\x02\x1AW\x03\x02\x02\x02\x1CY\x03\x02\x02\x02\x1E \x07" +
        "\x06\x02\x02\x1F!\x05\x04\x03\x02 \x1F\x03\x02\x02\x02!\"\x03\x02\x02" +
        "\x02\" \x03\x02\x02\x02\"#\x03\x02\x02\x02#\x03\x03\x02\x02\x02$\'\x05" +
        "\x1C\x0F\x02%\'\x05\x06\x04\x02&$\x03\x02\x02\x02&%\x03\x02\x02\x02\'" +
        "\x05\x03\x02\x02\x02()\x05\f\x07\x02)*\x07\x03\x02\x02*+\x05\x0E\b\x02" +
        "+,\x07\x03\x02\x02,-\x05\x10\t\x02-.\x07\x03\x02\x02./\x05\x12\n\x02/" +
        "0\x07\x03\x02\x0201\x05\x14\v\x0212\x07\x03\x02\x0223\x05\x18\r\x0234" +
        "\x07\x03\x02\x0245\x05\x16\f\x0256\x07\x03\x02\x0267\x05\x1A\x0E\x027" +
        "9\x07\x03\x02\x028:\x05\b\x05\x0298\x03\x02\x02\x029:\x03\x02\x02\x02" +
        ":;\x03\x02\x02\x02;<\x07\b\x02\x02<\x07\x03\x02\x02\x02=B\x05\n\x06\x02" +
        ">?\x07\x04\x02\x02?A\x05\n\x06\x02@>\x03\x02\x02\x02AD\x03\x02\x02\x02" +
        "B@\x03\x02\x02\x02BC\x03\x02\x02\x02C\t\x03\x02\x02\x02DB\x03\x02\x02" +
        "\x02EF\x07\t\x02\x02FG\x07\x05\x02\x02GH\x07\t\x02\x02H\v\x03\x02\x02" +
        "\x02IJ\x07\t\x02\x02J\r\x03\x02\x02\x02KL\x07\t\x02\x02L\x0F\x03\x02\x02" +
        "\x02MN\x07\t\x02\x02N\x11\x03\x02\x02\x02OP\x07\t\x02\x02P\x13\x03\x02" +
        "\x02\x02QR\x07\t\x02\x02R\x15\x03\x02\x02\x02ST\x07\t\x02\x02T\x17\x03" +
        "\x02\x02\x02UV\x07\t\x02\x02V\x19\x03\x02\x02\x02WX\x07\t\x02\x02X\x1B" +
        "\x03\x02\x02\x02YZ\x07\x07\x02\x02Z\x1D\x03\x02\x02\x02\x06\"&9B";
    return gff3Parser;
}(Parser_1.Parser));
exports.gff3Parser = gff3Parser;
var DocumentContext = /** @class */ (function (_super) {
    __extends(DocumentContext, _super);
    function DocumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DocumentContext.prototype.HEADER = function () { return this.getToken(gff3Parser.HEADER, 0); };
    DocumentContext.prototype.line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        }
        else {
            return this.getRuleContext(i, LineContext);
        }
    };
    Object.defineProperty(DocumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gff3Parser.RULE_document; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DocumentContext.prototype.enterRule = function (listener) {
        if (listener.enterDocument) {
            listener.enterDocument(this);
        }
    };
    // @Override
    DocumentContext.prototype.exitRule = function (listener) {
        if (listener.exitDocument) {
            listener.exitDocument(this);
        }
    };
    // @Override
    DocumentContext.prototype.accept = function (visitor) {
        if (visitor.visitDocument) {
            return visitor.visitDocument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DocumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DocumentContext = DocumentContext;
var LineContext = /** @class */ (function (_super) {
    __extends(LineContext, _super);
    function LineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineContext.prototype.commentline = function () {
        return this.tryGetRuleContext(0, CommentlineContext);
    };
    LineContext.prototype.dataline = function () {
        return this.tryGetRuleContext(0, DatalineContext);
    };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gff3Parser.RULE_line; },
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
var DatalineContext = /** @class */ (function (_super) {
    __extends(DatalineContext, _super);
    function DatalineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DatalineContext.prototype.seqid = function () {
        return this.getRuleContext(0, SeqidContext);
    };
    DatalineContext.prototype.source = function () {
        return this.getRuleContext(0, SourceContext);
    };
    DatalineContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    DatalineContext.prototype.start = function () {
        return this.getRuleContext(0, StartContext);
    };
    DatalineContext.prototype.end = function () {
        return this.getRuleContext(0, EndContext);
    };
    DatalineContext.prototype.score = function () {
        return this.getRuleContext(0, ScoreContext);
    };
    DatalineContext.prototype.strand = function () {
        return this.getRuleContext(0, StrandContext);
    };
    DatalineContext.prototype.phase = function () {
        return this.getRuleContext(0, PhaseContext);
    };
    DatalineContext.prototype.EOL = function () { return this.getToken(gff3Parser.EOL, 0); };
    DatalineContext.prototype.attributes = function () {
        return this.tryGetRuleContext(0, AttributesContext);
    };
    Object.defineProperty(DatalineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gff3Parser.RULE_dataline; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DatalineContext.prototype.enterRule = function (listener) {
        if (listener.enterDataline) {
            listener.enterDataline(this);
        }
    };
    // @Override
    DatalineContext.prototype.exitRule = function (listener) {
        if (listener.exitDataline) {
            listener.exitDataline(this);
        }
    };
    // @Override
    DatalineContext.prototype.accept = function (visitor) {
        if (visitor.visitDataline) {
            return visitor.visitDataline(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DatalineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DatalineContext = DatalineContext;
var AttributesContext = /** @class */ (function (_super) {
    __extends(AttributesContext, _super);
    function AttributesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributesContext.prototype.attribute = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AttributeContext);
        }
        else {
            return this.getRuleContext(i, AttributeContext);
        }
    };
    Object.defineProperty(AttributesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gff3Parser.RULE_attributes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributesContext.prototype.enterRule = function (listener) {
        if (listener.enterAttributes) {
            listener.enterAttributes(this);
        }
    };
    // @Override
    AttributesContext.prototype.exitRule = function (listener) {
        if (listener.exitAttributes) {
            listener.exitAttributes(this);
        }
    };
    // @Override
    AttributesContext.prototype.accept = function (visitor) {
        if (visitor.visitAttributes) {
            return visitor.visitAttributes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributesContext = AttributesContext;
var AttributeContext = /** @class */ (function (_super) {
    __extends(AttributeContext, _super);
    function AttributeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeContext.prototype.TEXT = function (i) {
        if (i === undefined) {
            return this.getTokens(gff3Parser.TEXT);
        }
        else {
            return this.getToken(gff3Parser.TEXT, i);
        }
    };
    Object.defineProperty(AttributeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gff3Parser.RULE_attribute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributeContext.prototype.enterRule = function (listener) {
        if (listener.enterAttribute) {
            listener.enterAttribute(this);
        }
    };
    // @Override
    AttributeContext.prototype.exitRule = function (listener) {
        if (listener.exitAttribute) {
            listener.exitAttribute(this);
        }
    };
    // @Override
    AttributeContext.prototype.accept = function (visitor) {
        if (visitor.visitAttribute) {
            return visitor.visitAttribute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributeContext = AttributeContext;
var SeqidContext = /** @class */ (function (_super) {
    __extends(SeqidContext, _super);
    function SeqidContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SeqidContext.prototype.TEXT = function () { return this.getToken(gff3Parser.TEXT, 0); };
    Object.defineProperty(SeqidContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gff3Parser.RULE_seqid; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SeqidContext.prototype.enterRule = function (listener) {
        if (listener.enterSeqid) {
            listener.enterSeqid(this);
        }
    };
    // @Override
    SeqidContext.prototype.exitRule = function (listener) {
        if (listener.exitSeqid) {
            listener.exitSeqid(this);
        }
    };
    // @Override
    SeqidContext.prototype.accept = function (visitor) {
        if (visitor.visitSeqid) {
            return visitor.visitSeqid(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SeqidContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SeqidContext = SeqidContext;
var SourceContext = /** @class */ (function (_super) {
    __extends(SourceContext, _super);
    function SourceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SourceContext.prototype.TEXT = function () { return this.getToken(gff3Parser.TEXT, 0); };
    Object.defineProperty(SourceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gff3Parser.RULE_source; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SourceContext.prototype.enterRule = function (listener) {
        if (listener.enterSource) {
            listener.enterSource(this);
        }
    };
    // @Override
    SourceContext.prototype.exitRule = function (listener) {
        if (listener.exitSource) {
            listener.exitSource(this);
        }
    };
    // @Override
    SourceContext.prototype.accept = function (visitor) {
        if (visitor.visitSource) {
            return visitor.visitSource(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SourceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SourceContext = SourceContext;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeContext.prototype.TEXT = function () { return this.getToken(gff3Parser.TEXT, 0); };
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gff3Parser.RULE_type; },
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
var StartContext = /** @class */ (function (_super) {
    __extends(StartContext, _super);
    function StartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StartContext.prototype.TEXT = function () { return this.getToken(gff3Parser.TEXT, 0); };
    Object.defineProperty(StartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gff3Parser.RULE_start; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StartContext.prototype.enterRule = function (listener) {
        if (listener.enterStart) {
            listener.enterStart(this);
        }
    };
    // @Override
    StartContext.prototype.exitRule = function (listener) {
        if (listener.exitStart) {
            listener.exitStart(this);
        }
    };
    // @Override
    StartContext.prototype.accept = function (visitor) {
        if (visitor.visitStart) {
            return visitor.visitStart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StartContext = StartContext;
var EndContext = /** @class */ (function (_super) {
    __extends(EndContext, _super);
    function EndContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EndContext.prototype.TEXT = function () { return this.getToken(gff3Parser.TEXT, 0); };
    Object.defineProperty(EndContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gff3Parser.RULE_end; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EndContext.prototype.enterRule = function (listener) {
        if (listener.enterEnd) {
            listener.enterEnd(this);
        }
    };
    // @Override
    EndContext.prototype.exitRule = function (listener) {
        if (listener.exitEnd) {
            listener.exitEnd(this);
        }
    };
    // @Override
    EndContext.prototype.accept = function (visitor) {
        if (visitor.visitEnd) {
            return visitor.visitEnd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EndContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EndContext = EndContext;
var StrandContext = /** @class */ (function (_super) {
    __extends(StrandContext, _super);
    function StrandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StrandContext.prototype.TEXT = function () { return this.getToken(gff3Parser.TEXT, 0); };
    Object.defineProperty(StrandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gff3Parser.RULE_strand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StrandContext.prototype.enterRule = function (listener) {
        if (listener.enterStrand) {
            listener.enterStrand(this);
        }
    };
    // @Override
    StrandContext.prototype.exitRule = function (listener) {
        if (listener.exitStrand) {
            listener.exitStrand(this);
        }
    };
    // @Override
    StrandContext.prototype.accept = function (visitor) {
        if (visitor.visitStrand) {
            return visitor.visitStrand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StrandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StrandContext = StrandContext;
var ScoreContext = /** @class */ (function (_super) {
    __extends(ScoreContext, _super);
    function ScoreContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScoreContext.prototype.TEXT = function () { return this.getToken(gff3Parser.TEXT, 0); };
    Object.defineProperty(ScoreContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gff3Parser.RULE_score; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScoreContext.prototype.enterRule = function (listener) {
        if (listener.enterScore) {
            listener.enterScore(this);
        }
    };
    // @Override
    ScoreContext.prototype.exitRule = function (listener) {
        if (listener.exitScore) {
            listener.exitScore(this);
        }
    };
    // @Override
    ScoreContext.prototype.accept = function (visitor) {
        if (visitor.visitScore) {
            return visitor.visitScore(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScoreContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScoreContext = ScoreContext;
var PhaseContext = /** @class */ (function (_super) {
    __extends(PhaseContext, _super);
    function PhaseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PhaseContext.prototype.TEXT = function () { return this.getToken(gff3Parser.TEXT, 0); };
    Object.defineProperty(PhaseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gff3Parser.RULE_phase; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PhaseContext.prototype.enterRule = function (listener) {
        if (listener.enterPhase) {
            listener.enterPhase(this);
        }
    };
    // @Override
    PhaseContext.prototype.exitRule = function (listener) {
        if (listener.exitPhase) {
            listener.exitPhase(this);
        }
    };
    // @Override
    PhaseContext.prototype.accept = function (visitor) {
        if (visitor.visitPhase) {
            return visitor.visitPhase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PhaseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PhaseContext = PhaseContext;
var CommentlineContext = /** @class */ (function (_super) {
    __extends(CommentlineContext, _super);
    function CommentlineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentlineContext.prototype.COMMENTLINE = function () { return this.getToken(gff3Parser.COMMENTLINE, 0); };
    Object.defineProperty(CommentlineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gff3Parser.RULE_commentline; },
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
