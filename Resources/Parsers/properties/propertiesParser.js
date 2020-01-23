"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/properties/properties.g4 by ANTLR 4.7.3-SNAPSHOT
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
var propertiesParser = /** @class */ (function (_super) {
    __extends(propertiesParser, _super);
    function propertiesParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(propertiesParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(propertiesParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return propertiesParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propertiesParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "properties.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propertiesParser.prototype, "ruleNames", {
        // @Override
        get: function () { return propertiesParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propertiesParser.prototype, "serializedATN", {
        // @Override
        get: function () { return propertiesParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    propertiesParser.prototype.propertiesFile = function () {
        var _localctx = new PropertiesFileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, propertiesParser.RULE_propertiesFile);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 13;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 12;
                            this.row();
                        }
                    }
                    this.state = 15;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === propertiesParser.TEXT || _la === propertiesParser.COMMENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    propertiesParser.prototype.row = function () {
        var _localctx = new RowContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, propertiesParser.RULE_row);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 19;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case propertiesParser.COMMENT:
                        {
                            this.state = 17;
                            this.comment();
                        }
                        break;
                    case propertiesParser.TEXT:
                        {
                            this.state = 18;
                            this.decl();
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
    propertiesParser.prototype.decl = function () {
        var _localctx = new DeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, propertiesParser.RULE_decl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 21;
                this.key();
                this.state = 22;
                this.match(propertiesParser.T__0);
                this.state = 24;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                    case 1:
                        {
                            this.state = 23;
                            this.value();
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
    propertiesParser.prototype.key = function () {
        var _localctx = new KeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, propertiesParser.RULE_key);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 26;
                this.match(propertiesParser.TEXT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    propertiesParser.prototype.value = function () {
        var _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, propertiesParser.RULE_value);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 28;
                _la = this._input.LA(1);
                if (!(_la === propertiesParser.TEXT || _la === propertiesParser.STRING)) {
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
    propertiesParser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, propertiesParser.RULE_comment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 30;
                this.match(propertiesParser.COMMENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(propertiesParser, "_ATN", {
        get: function () {
            if (!propertiesParser.__ATN) {
                propertiesParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(propertiesParser._serializedATN));
            }
            return propertiesParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    propertiesParser.T__0 = 1;
    propertiesParser.TEXT = 2;
    propertiesParser.STRING = 3;
    propertiesParser.COMMENT = 4;
    propertiesParser.TERMINATOR = 5;
    propertiesParser.RULE_propertiesFile = 0;
    propertiesParser.RULE_row = 1;
    propertiesParser.RULE_decl = 2;
    propertiesParser.RULE_key = 3;
    propertiesParser.RULE_value = 4;
    propertiesParser.RULE_comment = 5;
    // tslint:disable:no-trailing-whitespace
    propertiesParser.ruleNames = [
        "propertiesFile", "row", "decl", "key", "value", "comment",
    ];
    propertiesParser._LITERAL_NAMES = [
        undefined, "'='",
    ];
    propertiesParser._SYMBOLIC_NAMES = [
        undefined, undefined, "TEXT", "STRING", "COMMENT", "TERMINATOR",
    ];
    propertiesParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(propertiesParser._LITERAL_NAMES, propertiesParser._SYMBOLIC_NAMES, []);
    propertiesParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07#\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x03\x02\x06\x02\x10\n\x02\r\x02\x0E\x02\x11\x03\x03\x03\x03\x05" +
        "\x03\x16\n\x03\x03\x04\x03\x04\x03\x04\x05\x04\x1B\n\x04\x03\x05\x03\x05" +
        "\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x02\x02\x02\b\x02\x02\x04\x02" +
        "\x06\x02\b\x02\n\x02\f\x02\x02\x03\x03\x02\x04\x05\x02\x1F\x02\x0F\x03" +
        "\x02\x02\x02\x04\x15\x03\x02\x02\x02\x06\x17\x03\x02\x02\x02\b\x1C\x03" +
        "\x02\x02\x02\n\x1E\x03\x02\x02\x02\f \x03\x02\x02\x02\x0E\x10\x05\x04" +
        "\x03\x02\x0F\x0E\x03\x02\x02\x02\x10\x11\x03\x02\x02\x02\x11\x0F\x03\x02" +
        "\x02\x02\x11\x12\x03\x02\x02\x02\x12\x03\x03\x02\x02\x02\x13\x16\x05\f" +
        "\x07\x02\x14\x16\x05\x06\x04\x02\x15\x13\x03\x02\x02\x02\x15\x14\x03\x02" +
        "\x02\x02\x16\x05\x03\x02\x02\x02\x17\x18\x05\b\x05\x02\x18\x1A\x07\x03" +
        "\x02\x02\x19\x1B\x05\n\x06\x02\x1A\x19\x03\x02\x02\x02\x1A\x1B\x03\x02" +
        "\x02\x02\x1B\x07\x03\x02\x02\x02\x1C\x1D\x07\x04\x02\x02\x1D\t\x03\x02" +
        "\x02\x02\x1E\x1F\t\x02\x02\x02\x1F\v\x03\x02\x02\x02 !\x07\x06\x02\x02" +
        "!\r\x03\x02\x02\x02\x05\x11\x15\x1A";
    return propertiesParser;
}(Parser_1.Parser));
exports.propertiesParser = propertiesParser;
var PropertiesFileContext = /** @class */ (function (_super) {
    __extends(PropertiesFileContext, _super);
    function PropertiesFileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertiesFileContext.prototype.row = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RowContext);
        }
        else {
            return this.getRuleContext(i, RowContext);
        }
    };
    Object.defineProperty(PropertiesFileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return propertiesParser.RULE_propertiesFile; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertiesFileContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertiesFile) {
            listener.enterPropertiesFile(this);
        }
    };
    // @Override
    PropertiesFileContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertiesFile) {
            listener.exitPropertiesFile(this);
        }
    };
    // @Override
    PropertiesFileContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertiesFile) {
            return visitor.visitPropertiesFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertiesFileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertiesFileContext = PropertiesFileContext;
var RowContext = /** @class */ (function (_super) {
    __extends(RowContext, _super);
    function RowContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RowContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    RowContext.prototype.decl = function () {
        return this.tryGetRuleContext(0, DeclContext);
    };
    Object.defineProperty(RowContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return propertiesParser.RULE_row; },
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
var DeclContext = /** @class */ (function (_super) {
    __extends(DeclContext, _super);
    function DeclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclContext.prototype.key = function () {
        return this.getRuleContext(0, KeyContext);
    };
    DeclContext.prototype.value = function () {
        return this.tryGetRuleContext(0, ValueContext);
    };
    Object.defineProperty(DeclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return propertiesParser.RULE_decl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclContext.prototype.enterRule = function (listener) {
        if (listener.enterDecl) {
            listener.enterDecl(this);
        }
    };
    // @Override
    DeclContext.prototype.exitRule = function (listener) {
        if (listener.exitDecl) {
            listener.exitDecl(this);
        }
    };
    // @Override
    DeclContext.prototype.accept = function (visitor) {
        if (visitor.visitDecl) {
            return visitor.visitDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclContext = DeclContext;
var KeyContext = /** @class */ (function (_super) {
    __extends(KeyContext, _super);
    function KeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyContext.prototype.TEXT = function () { return this.getToken(propertiesParser.TEXT, 0); };
    Object.defineProperty(KeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return propertiesParser.RULE_key; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyContext.prototype.enterRule = function (listener) {
        if (listener.enterKey) {
            listener.enterKey(this);
        }
    };
    // @Override
    KeyContext.prototype.exitRule = function (listener) {
        if (listener.exitKey) {
            listener.exitKey(this);
        }
    };
    // @Override
    KeyContext.prototype.accept = function (visitor) {
        if (visitor.visitKey) {
            return visitor.visitKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyContext = KeyContext;
var ValueContext = /** @class */ (function (_super) {
    __extends(ValueContext, _super);
    function ValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueContext.prototype.TEXT = function () { return this.tryGetToken(propertiesParser.TEXT, 0); };
    ValueContext.prototype.STRING = function () { return this.tryGetToken(propertiesParser.STRING, 0); };
    Object.defineProperty(ValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return propertiesParser.RULE_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValueContext.prototype.enterRule = function (listener) {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    };
    // @Override
    ValueContext.prototype.exitRule = function (listener) {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    };
    // @Override
    ValueContext.prototype.accept = function (visitor) {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueContext = ValueContext;
var CommentContext = /** @class */ (function (_super) {
    __extends(CommentContext, _super);
    function CommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentContext.prototype.COMMENT = function () { return this.getToken(propertiesParser.COMMENT, 0); };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return propertiesParser.RULE_comment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommentContext.prototype.enterRule = function (listener) {
        if (listener.enterComment) {
            listener.enterComment(this);
        }
    };
    // @Override
    CommentContext.prototype.exitRule = function (listener) {
        if (listener.exitComment) {
            listener.exitComment(this);
        }
    };
    // @Override
    CommentContext.prototype.accept = function (visitor) {
        if (visitor.visitComment) {
            return visitor.visitComment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommentContext = CommentContext;
