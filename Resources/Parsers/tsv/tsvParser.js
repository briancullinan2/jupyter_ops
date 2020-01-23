"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tsv/tsv.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var tsvParser = /** @class */ (function (_super) {
    __extends(tsvParser, _super);
    function tsvParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(tsvParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(tsvParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return tsvParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tsvParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "tsv.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tsvParser.prototype, "ruleNames", {
        // @Override
        get: function () { return tsvParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tsvParser.prototype, "serializedATN", {
        // @Override
        get: function () { return tsvParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    tsvParser.prototype.tsvFile = function () {
        var _localctx = new TsvFileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, tsvParser.RULE_tsvFile);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 8;
                this.hdr();
                this.state = 12;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tsvParser.TEXT || _la === tsvParser.STRING) {
                    {
                        {
                            this.state = 9;
                            this.row();
                        }
                    }
                    this.state = 14;
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
    tsvParser.prototype.hdr = function () {
        var _localctx = new HdrContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, tsvParser.RULE_hdr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 15;
                this.row();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tsvParser.prototype.row = function () {
        var _localctx = new RowContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, tsvParser.RULE_row);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 17;
                this.field();
                this.state = 22;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tsvParser.TAB) {
                    {
                        {
                            this.state = 18;
                            this.match(tsvParser.TAB);
                            this.state = 19;
                            this.field();
                        }
                    }
                    this.state = 24;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 25;
                this.match(tsvParser.EOL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    tsvParser.prototype.field = function () {
        var _localctx = new FieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, tsvParser.RULE_field);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 27;
                _la = this._input.LA(1);
                if (!(_la === tsvParser.TEXT || _la === tsvParser.STRING)) {
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
    Object.defineProperty(tsvParser, "_ATN", {
        get: function () {
            if (!tsvParser.__ATN) {
                tsvParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(tsvParser._serializedATN));
            }
            return tsvParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    tsvParser.TAB = 1;
    tsvParser.EOL = 2;
    tsvParser.TEXT = 3;
    tsvParser.STRING = 4;
    tsvParser.RULE_tsvFile = 0;
    tsvParser.RULE_hdr = 1;
    tsvParser.RULE_row = 2;
    tsvParser.RULE_field = 3;
    // tslint:disable:no-trailing-whitespace
    tsvParser.ruleNames = [
        "tsvFile", "hdr", "row", "field",
    ];
    tsvParser._LITERAL_NAMES = [
        undefined, "'\t'",
    ];
    tsvParser._SYMBOLIC_NAMES = [
        undefined, "TAB", "EOL", "TEXT", "STRING",
    ];
    tsvParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(tsvParser._LITERAL_NAMES, tsvParser._SYMBOLIC_NAMES, []);
    tsvParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x06 \x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x07\x02" +
        "\r\n\x02\f\x02\x0E\x02\x10\v\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
        "\x07\x04\x17\n\x04\f\x04\x0E\x04\x1A\v\x04\x03\x04\x03\x04\x03\x05\x03" +
        "\x05\x03\x05\x02\x02\x02\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x03\x03" +
        "\x02\x05\x06\x02\x1D\x02\n\x03\x02\x02\x02\x04\x11\x03\x02\x02\x02\x06" +
        "\x13\x03\x02\x02\x02\b\x1D\x03\x02\x02\x02\n\x0E\x05\x04\x03\x02\v\r\x05" +
        "\x06\x04\x02\f\v\x03\x02\x02\x02\r\x10\x03\x02\x02\x02\x0E\f\x03\x02\x02" +
        "\x02\x0E\x0F\x03\x02\x02\x02\x0F\x03\x03\x02\x02\x02\x10\x0E\x03\x02\x02" +
        "\x02\x11\x12\x05\x06\x04\x02\x12\x05\x03\x02\x02\x02\x13\x18\x05\b\x05" +
        "\x02\x14\x15\x07\x03\x02\x02\x15\x17\x05\b\x05\x02\x16\x14\x03\x02\x02" +
        "\x02\x17\x1A\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02" +
        "\x02\x19\x1B\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1B\x1C\x07\x04\x02" +
        "\x02\x1C\x07\x03\x02\x02\x02\x1D\x1E\t\x02\x02\x02\x1E\t\x03\x02\x02\x02" +
        "\x04\x0E\x18";
    return tsvParser;
}(Parser_1.Parser));
exports.tsvParser = tsvParser;
var TsvFileContext = /** @class */ (function (_super) {
    __extends(TsvFileContext, _super);
    function TsvFileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TsvFileContext.prototype.hdr = function () {
        return this.getRuleContext(0, HdrContext);
    };
    TsvFileContext.prototype.row = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RowContext);
        }
        else {
            return this.getRuleContext(i, RowContext);
        }
    };
    Object.defineProperty(TsvFileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tsvParser.RULE_tsvFile; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TsvFileContext.prototype.enterRule = function (listener) {
        if (listener.enterTsvFile) {
            listener.enterTsvFile(this);
        }
    };
    // @Override
    TsvFileContext.prototype.exitRule = function (listener) {
        if (listener.exitTsvFile) {
            listener.exitTsvFile(this);
        }
    };
    // @Override
    TsvFileContext.prototype.accept = function (visitor) {
        if (visitor.visitTsvFile) {
            return visitor.visitTsvFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TsvFileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TsvFileContext = TsvFileContext;
var HdrContext = /** @class */ (function (_super) {
    __extends(HdrContext, _super);
    function HdrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HdrContext.prototype.row = function () {
        return this.getRuleContext(0, RowContext);
    };
    Object.defineProperty(HdrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tsvParser.RULE_hdr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HdrContext.prototype.enterRule = function (listener) {
        if (listener.enterHdr) {
            listener.enterHdr(this);
        }
    };
    // @Override
    HdrContext.prototype.exitRule = function (listener) {
        if (listener.exitHdr) {
            listener.exitHdr(this);
        }
    };
    // @Override
    HdrContext.prototype.accept = function (visitor) {
        if (visitor.visitHdr) {
            return visitor.visitHdr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HdrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HdrContext = HdrContext;
var RowContext = /** @class */ (function (_super) {
    __extends(RowContext, _super);
    function RowContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RowContext.prototype.field = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    };
    RowContext.prototype.EOL = function () { return this.getToken(tsvParser.EOL, 0); };
    RowContext.prototype.TAB = function (i) {
        if (i === undefined) {
            return this.getTokens(tsvParser.TAB);
        }
        else {
            return this.getToken(tsvParser.TAB, i);
        }
    };
    Object.defineProperty(RowContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tsvParser.RULE_row; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RowContext.prototype.enterRule = function (listener) {
        if (listener.enterRow) {
            listener.enterRow(this);
        }
    };
    // @Override
    RowContext.prototype.exitRule = function (listener) {
        if (listener.exitRow) {
            listener.exitRow(this);
        }
    };
    // @Override
    RowContext.prototype.accept = function (visitor) {
        if (visitor.visitRow) {
            return visitor.visitRow(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RowContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RowContext = RowContext;
var FieldContext = /** @class */ (function (_super) {
    __extends(FieldContext, _super);
    function FieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldContext.prototype.TEXT = function () { return this.tryGetToken(tsvParser.TEXT, 0); };
    FieldContext.prototype.STRING = function () { return this.tryGetToken(tsvParser.STRING, 0); };
    Object.defineProperty(FieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return tsvParser.RULE_field; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldContext.prototype.enterRule = function (listener) {
        if (listener.enterField) {
            listener.enterField(this);
        }
    };
    // @Override
    FieldContext.prototype.exitRule = function (listener) {
        if (listener.exitField) {
            listener.exitField(this);
        }
    };
    // @Override
    FieldContext.prototype.accept = function (visitor) {
        if (visitor.visitField) {
            return visitor.visitField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldContext = FieldContext;
