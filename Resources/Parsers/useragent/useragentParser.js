"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/useragent/useragent.g4 by ANTLR 4.7.3-SNAPSHOT
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
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var useragentParser = /** @class */ (function (_super) {
    __extends(useragentParser, _super);
    function useragentParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(useragentParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(useragentParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return useragentParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(useragentParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "useragent.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(useragentParser.prototype, "ruleNames", {
        // @Override
        get: function () { return useragentParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(useragentParser.prototype, "serializedATN", {
        // @Override
        get: function () { return useragentParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    useragentParser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, useragentParser.RULE_prog);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 14;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 10;
                            this.product();
                            this.state = 12;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === useragentParser.COMMENT) {
                                {
                                    this.state = 11;
                                    this.comment();
                                }
                            }
                        }
                    }
                    this.state = 16;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === useragentParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    useragentParser.prototype.product = function () {
        var _localctx = new ProductContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, useragentParser.RULE_product);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 18;
                this.name();
                this.state = 19;
                this.match(useragentParser.T__0);
                this.state = 20;
                this.version();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    useragentParser.prototype.name = function () {
        var _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, useragentParser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 22;
                this.match(useragentParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    useragentParser.prototype.version = function () {
        var _localctx = new VersionContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, useragentParser.RULE_version);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 24;
                this.match(useragentParser.STRING);
                this.state = 29;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === useragentParser.T__1) {
                    {
                        {
                            this.state = 25;
                            this.match(useragentParser.T__1);
                            this.state = 26;
                            this.match(useragentParser.STRING);
                        }
                    }
                    this.state = 31;
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
    useragentParser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, useragentParser.RULE_comment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 32;
                this.match(useragentParser.COMMENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(useragentParser, "_ATN", {
        get: function () {
            if (!useragentParser.__ATN) {
                useragentParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(useragentParser._serializedATN));
            }
            return useragentParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    useragentParser.T__0 = 1;
    useragentParser.T__1 = 2;
    useragentParser.COMMENT = 3;
    useragentParser.STRING = 4;
    useragentParser.WS = 5;
    useragentParser.RULE_prog = 0;
    useragentParser.RULE_product = 1;
    useragentParser.RULE_name = 2;
    useragentParser.RULE_version = 3;
    useragentParser.RULE_comment = 4;
    // tslint:disable:no-trailing-whitespace
    useragentParser.ruleNames = [
        "prog", "product", "name", "version", "comment",
    ];
    useragentParser._LITERAL_NAMES = [
        undefined, "'/'", "'.'",
    ];
    useragentParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "COMMENT", "STRING", "WS",
    ];
    useragentParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(useragentParser._LITERAL_NAMES, useragentParser._SYMBOLIC_NAMES, []);
    useragentParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07%\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
        "\x03\x02\x05\x02\x0F\n\x02\x06\x02\x11\n\x02\r\x02\x0E\x02\x12\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05" +
        "\x1E\n\x05\f\x05\x0E\x05!\v\x05\x03\x06\x03\x06\x03\x06\x02\x02\x02\x07" +
        "\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x02\x02\"\x02\x10\x03\x02\x02" +
        "\x02\x04\x14\x03\x02\x02\x02\x06\x18\x03\x02\x02\x02\b\x1A\x03\x02\x02" +
        "\x02\n\"\x03\x02\x02\x02\f\x0E\x05\x04\x03\x02\r\x0F\x05\n\x06\x02\x0E" +
        "\r\x03\x02\x02\x02\x0E\x0F\x03\x02\x02\x02\x0F\x11\x03\x02\x02\x02\x10" +
        "\f\x03\x02\x02\x02\x11\x12\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12" +
        "\x13\x03\x02\x02\x02\x13\x03\x03\x02\x02\x02\x14\x15\x05\x06\x04\x02\x15" +
        "\x16\x07\x03\x02\x02\x16\x17\x05\b\x05\x02\x17\x05\x03\x02\x02\x02\x18" +
        "\x19\x07\x06\x02\x02\x19\x07\x03\x02\x02\x02\x1A\x1F\x07\x06\x02\x02\x1B" +
        "\x1C\x07\x04\x02\x02\x1C\x1E\x07\x06\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E" +
        "!\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \t\x03" +
        "\x02\x02\x02!\x1F\x03\x02\x02\x02\"#\x07\x05\x02\x02#\v\x03\x02\x02\x02" +
        "\x05\x0E\x12\x1F";
    return useragentParser;
}(Parser_1.Parser));
exports.useragentParser = useragentParser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.product = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ProductContext);
        }
        else {
            return this.getRuleContext(i, ProductContext);
        }
    };
    ProgContext.prototype.comment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }
        else {
            return this.getRuleContext(i, CommentContext);
        }
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return useragentParser.RULE_prog; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgContext.prototype.enterRule = function (listener) {
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    };
    // @Override
    ProgContext.prototype.exitRule = function (listener) {
        if (listener.exitProg) {
            listener.exitProg(this);
        }
    };
    // @Override
    ProgContext.prototype.accept = function (visitor) {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgContext = ProgContext;
var ProductContext = /** @class */ (function (_super) {
    __extends(ProductContext, _super);
    function ProductContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProductContext.prototype.name = function () {
        return this.getRuleContext(0, NameContext);
    };
    ProductContext.prototype.version = function () {
        return this.getRuleContext(0, VersionContext);
    };
    Object.defineProperty(ProductContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return useragentParser.RULE_product; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProductContext.prototype.enterRule = function (listener) {
        if (listener.enterProduct) {
            listener.enterProduct(this);
        }
    };
    // @Override
    ProductContext.prototype.exitRule = function (listener) {
        if (listener.exitProduct) {
            listener.exitProduct(this);
        }
    };
    // @Override
    ProductContext.prototype.accept = function (visitor) {
        if (visitor.visitProduct) {
            return visitor.visitProduct(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProductContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProductContext = ProductContext;
var NameContext = /** @class */ (function (_super) {
    __extends(NameContext, _super);
    function NameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NameContext.prototype.STRING = function () { return this.getToken(useragentParser.STRING, 0); };
    Object.defineProperty(NameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return useragentParser.RULE_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NameContext.prototype.enterRule = function (listener) {
        if (listener.enterName) {
            listener.enterName(this);
        }
    };
    // @Override
    NameContext.prototype.exitRule = function (listener) {
        if (listener.exitName) {
            listener.exitName(this);
        }
    };
    // @Override
    NameContext.prototype.accept = function (visitor) {
        if (visitor.visitName) {
            return visitor.visitName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NameContext = NameContext;
var VersionContext = /** @class */ (function (_super) {
    __extends(VersionContext, _super);
    function VersionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VersionContext.prototype.STRING = function (i) {
        if (i === undefined) {
            return this.getTokens(useragentParser.STRING);
        }
        else {
            return this.getToken(useragentParser.STRING, i);
        }
    };
    Object.defineProperty(VersionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return useragentParser.RULE_version; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VersionContext.prototype.enterRule = function (listener) {
        if (listener.enterVersion) {
            listener.enterVersion(this);
        }
    };
    // @Override
    VersionContext.prototype.exitRule = function (listener) {
        if (listener.exitVersion) {
            listener.exitVersion(this);
        }
    };
    // @Override
    VersionContext.prototype.accept = function (visitor) {
        if (visitor.visitVersion) {
            return visitor.visitVersion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VersionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VersionContext = VersionContext;
var CommentContext = /** @class */ (function (_super) {
    __extends(CommentContext, _super);
    function CommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentContext.prototype.COMMENT = function () { return this.getToken(useragentParser.COMMENT, 0); };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return useragentParser.RULE_comment; },
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
