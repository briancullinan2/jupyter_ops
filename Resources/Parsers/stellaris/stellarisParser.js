"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stellaris/stellaris.g4 by ANTLR 4.7.3-SNAPSHOT
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
var stellarisParser = /** @class */ (function (_super) {
    __extends(stellarisParser, _super);
    function stellarisParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(stellarisParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(stellarisParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return stellarisParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(stellarisParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "stellaris.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(stellarisParser.prototype, "ruleNames", {
        // @Override
        get: function () { return stellarisParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(stellarisParser.prototype, "serializedATN", {
        // @Override
        get: function () { return stellarisParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    stellarisParser.prototype.content = function () {
        var _localctx = new ContentContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, stellarisParser.RULE_content);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 19;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 18;
                            this.expr();
                        }
                    }
                    this.state = 21;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << stellarisParser.IDENTIFIER) | (1 << stellarisParser.INTEGER) | (1 << stellarisParser.STRING))) !== 0));
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
    stellarisParser.prototype.expr = function () {
        var _localctx = new ExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, stellarisParser.RULE_expr);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 24;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 23;
                                    this.keyval();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 26;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
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
    stellarisParser.prototype.keyval = function () {
        var _localctx = new KeyvalContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, stellarisParser.RULE_keyval);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 28;
                this.key();
                this.state = 30;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 29;
                            _la = this._input.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << stellarisParser.T__0) | (1 << stellarisParser.T__1) | (1 << stellarisParser.T__2))) !== 0))) {
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
                    this.state = 32;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << stellarisParser.T__0) | (1 << stellarisParser.T__1) | (1 << stellarisParser.T__2))) !== 0));
                this.state = 34;
                this.val();
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
    stellarisParser.prototype.key = function () {
        var _localctx = new KeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, stellarisParser.RULE_key);
        try {
            this.state = 38;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 36;
                        this.id();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 37;
                        this.attrib();
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
    stellarisParser.prototype.val = function () {
        var _localctx = new ValContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, stellarisParser.RULE_val);
        try {
            this.state = 43;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 40;
                        this.id();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 41;
                        this.attrib();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 42;
                        this.group();
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
    stellarisParser.prototype.attrib = function () {
        var _localctx = new AttribContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, stellarisParser.RULE_attrib);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 45;
                this.id();
                this.state = 46;
                this.accessor();
                this.state = 49;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                    case 1:
                        {
                            this.state = 47;
                            this.attrib();
                        }
                        break;
                    case 2:
                        {
                            this.state = 48;
                            this.id();
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
    stellarisParser.prototype.accessor = function () {
        var _localctx = new AccessorContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, stellarisParser.RULE_accessor);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 51;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << stellarisParser.T__3) | (1 << stellarisParser.T__4) | (1 << stellarisParser.T__5))) !== 0))) {
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
    stellarisParser.prototype.group = function () {
        var _localctx = new GroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, stellarisParser.RULE_group);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 53;
                this.match(stellarisParser.T__6);
                this.state = 61;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                    case 1:
                        {
                            this.state = 57;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << stellarisParser.IDENTIFIER) | (1 << stellarisParser.INTEGER) | (1 << stellarisParser.STRING))) !== 0)) {
                                {
                                    {
                                        this.state = 54;
                                        this.expr();
                                    }
                                }
                                this.state = 59;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 60;
                            this.id();
                        }
                        break;
                }
                this.state = 63;
                this.match(stellarisParser.T__7);
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
    stellarisParser.prototype.id = function () {
        var _localctx = new IdContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, stellarisParser.RULE_id);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 65;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << stellarisParser.IDENTIFIER) | (1 << stellarisParser.INTEGER) | (1 << stellarisParser.STRING))) !== 0))) {
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
    Object.defineProperty(stellarisParser, "_ATN", {
        get: function () {
            if (!stellarisParser.__ATN) {
                stellarisParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(stellarisParser._serializedATN));
            }
            return stellarisParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    stellarisParser.T__0 = 1;
    stellarisParser.T__1 = 2;
    stellarisParser.T__2 = 3;
    stellarisParser.T__3 = 4;
    stellarisParser.T__4 = 5;
    stellarisParser.T__5 = 6;
    stellarisParser.T__6 = 7;
    stellarisParser.T__7 = 8;
    stellarisParser.IDENTIFIER = 9;
    stellarisParser.INTEGER = 10;
    stellarisParser.STRING = 11;
    stellarisParser.COMMENT = 12;
    stellarisParser.SPACE = 13;
    stellarisParser.NL = 14;
    stellarisParser.RULE_content = 0;
    stellarisParser.RULE_expr = 1;
    stellarisParser.RULE_keyval = 2;
    stellarisParser.RULE_key = 3;
    stellarisParser.RULE_val = 4;
    stellarisParser.RULE_attrib = 5;
    stellarisParser.RULE_accessor = 6;
    stellarisParser.RULE_group = 7;
    stellarisParser.RULE_id = 8;
    // tslint:disable:no-trailing-whitespace
    stellarisParser.ruleNames = [
        "content", "expr", "keyval", "key", "val", "attrib", "accessor", "group",
        "id",
    ];
    stellarisParser._LITERAL_NAMES = [
        undefined, "'='", "'>'", "'<'", "'.'", "'@'", "':'", "'{'", "'}'",
    ];
    stellarisParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "IDENTIFIER", "INTEGER", "STRING", "COMMENT", "SPACE",
        "NL",
    ];
    stellarisParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(stellarisParser._LITERAL_NAMES, stellarisParser._SYMBOLIC_NAMES, []);
    stellarisParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10F\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x06\x02\x16\n\x02\r\x02\x0E" +
        "\x02\x17\x03\x03\x06\x03\x1B\n\x03\r\x03\x0E\x03\x1C\x03\x04\x03\x04\x06" +
        "\x04!\n\x04\r\x04\x0E\x04\"\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05)\n" +
        "\x05\x03\x06\x03\x06\x03\x06\x05\x06.\n\x06\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x05\x074\n\x07\x03\b\x03\b\x03\t\x03\t\x07\t:\n\t\f\t\x0E\t=\v\t" +
        "\x03\t\x05\t@\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x02\x02\x02\v\x02\x02" +
        "\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x05\x03" +
        "\x02\x03\x05\x03\x02\x06\b\x03\x02\v\r\x02E\x02\x15\x03\x02\x02\x02\x04" +
        "\x1A\x03\x02\x02\x02\x06\x1E\x03\x02\x02\x02\b(\x03\x02\x02\x02\n-\x03" +
        "\x02\x02\x02\f/\x03\x02\x02\x02\x0E5\x03\x02\x02\x02\x107\x03\x02\x02" +
        "\x02\x12C\x03\x02\x02\x02\x14\x16\x05\x04\x03\x02\x15\x14\x03\x02\x02" +
        "\x02\x16\x17\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02" +
        "\x02\x18\x03\x03\x02\x02\x02\x19\x1B\x05\x06\x04\x02\x1A\x19\x03\x02\x02" +
        "\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02\x1C\x1D\x03\x02\x02" +
        "\x02\x1D\x05\x03\x02\x02\x02\x1E \x05\b\x05\x02\x1F!\t\x02\x02\x02 \x1F" +
        "\x03\x02\x02\x02!\"\x03\x02\x02\x02\" \x03\x02\x02\x02\"#\x03\x02\x02" +
        "\x02#$\x03\x02\x02\x02$%\x05\n\x06\x02%\x07\x03\x02\x02\x02&)\x05\x12" +
        "\n\x02\')\x05\f\x07\x02(&\x03\x02\x02\x02(\'\x03\x02\x02\x02)\t\x03\x02" +
        "\x02\x02*.\x05\x12\n\x02+.\x05\f\x07\x02,.\x05\x10\t\x02-*\x03\x02\x02" +
        "\x02-+\x03\x02\x02\x02-,\x03\x02\x02\x02.\v\x03\x02\x02\x02/0\x05\x12" +
        "\n\x0203\x05\x0E\b\x0214\x05\f\x07\x0224\x05\x12\n\x0231\x03\x02\x02\x02" +
        "32\x03\x02\x02\x024\r\x03\x02\x02\x0256\t\x03\x02\x026\x0F\x03\x02\x02" +
        "\x027?\x07\t\x02\x028:\x05\x04\x03\x0298\x03\x02\x02\x02:=\x03\x02\x02" +
        "\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<@\x03\x02\x02\x02=;\x03\x02\x02" +
        "\x02>@\x05\x12\n\x02?;\x03\x02\x02\x02?>\x03\x02\x02\x02@A\x03\x02\x02" +
        "\x02AB\x07\n\x02\x02B\x11\x03\x02\x02\x02CD\t\x04\x02\x02D\x13\x03\x02" +
        "\x02\x02\n\x17\x1C\"(-3;?";
    return stellarisParser;
}(Parser_1.Parser));
exports.stellarisParser = stellarisParser;
var ContentContext = /** @class */ (function (_super) {
    __extends(ContentContext, _super);
    function ContentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ContentContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    Object.defineProperty(ContentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return stellarisParser.RULE_content; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ContentContext.prototype.enterRule = function (listener) {
        if (listener.enterContent) {
            listener.enterContent(this);
        }
    };
    // @Override
    ContentContext.prototype.exitRule = function (listener) {
        if (listener.exitContent) {
            listener.exitContent(this);
        }
    };
    // @Override
    ContentContext.prototype.accept = function (visitor) {
        if (visitor.visitContent) {
            return visitor.visitContent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ContentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ContentContext = ContentContext;
var ExprContext = /** @class */ (function (_super) {
    __extends(ExprContext, _super);
    function ExprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExprContext.prototype.keyval = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KeyvalContext);
        }
        else {
            return this.getRuleContext(i, KeyvalContext);
        }
    };
    Object.defineProperty(ExprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return stellarisParser.RULE_expr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExprContext.prototype.enterRule = function (listener) {
        if (listener.enterExpr) {
            listener.enterExpr(this);
        }
    };
    // @Override
    ExprContext.prototype.exitRule = function (listener) {
        if (listener.exitExpr) {
            listener.exitExpr(this);
        }
    };
    // @Override
    ExprContext.prototype.accept = function (visitor) {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExprContext = ExprContext;
var KeyvalContext = /** @class */ (function (_super) {
    __extends(KeyvalContext, _super);
    function KeyvalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyvalContext.prototype.key = function () {
        return this.getRuleContext(0, KeyContext);
    };
    KeyvalContext.prototype.val = function () {
        return this.getRuleContext(0, ValContext);
    };
    Object.defineProperty(KeyvalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return stellarisParser.RULE_keyval; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyvalContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyval) {
            listener.enterKeyval(this);
        }
    };
    // @Override
    KeyvalContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyval) {
            listener.exitKeyval(this);
        }
    };
    // @Override
    KeyvalContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyval) {
            return visitor.visitKeyval(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyvalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyvalContext = KeyvalContext;
var KeyContext = /** @class */ (function (_super) {
    __extends(KeyContext, _super);
    function KeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyContext.prototype.id = function () {
        return this.tryGetRuleContext(0, IdContext);
    };
    KeyContext.prototype.attrib = function () {
        return this.tryGetRuleContext(0, AttribContext);
    };
    Object.defineProperty(KeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return stellarisParser.RULE_key; },
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
var ValContext = /** @class */ (function (_super) {
    __extends(ValContext, _super);
    function ValContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValContext.prototype.id = function () {
        return this.tryGetRuleContext(0, IdContext);
    };
    ValContext.prototype.attrib = function () {
        return this.tryGetRuleContext(0, AttribContext);
    };
    ValContext.prototype.group = function () {
        return this.tryGetRuleContext(0, GroupContext);
    };
    Object.defineProperty(ValContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return stellarisParser.RULE_val; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValContext.prototype.enterRule = function (listener) {
        if (listener.enterVal) {
            listener.enterVal(this);
        }
    };
    // @Override
    ValContext.prototype.exitRule = function (listener) {
        if (listener.exitVal) {
            listener.exitVal(this);
        }
    };
    // @Override
    ValContext.prototype.accept = function (visitor) {
        if (visitor.visitVal) {
            return visitor.visitVal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValContext = ValContext;
var AttribContext = /** @class */ (function (_super) {
    __extends(AttribContext, _super);
    function AttribContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttribContext.prototype.id = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdContext);
        }
        else {
            return this.getRuleContext(i, IdContext);
        }
    };
    AttribContext.prototype.accessor = function () {
        return this.getRuleContext(0, AccessorContext);
    };
    AttribContext.prototype.attrib = function () {
        return this.tryGetRuleContext(0, AttribContext);
    };
    Object.defineProperty(AttribContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return stellarisParser.RULE_attrib; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttribContext.prototype.enterRule = function (listener) {
        if (listener.enterAttrib) {
            listener.enterAttrib(this);
        }
    };
    // @Override
    AttribContext.prototype.exitRule = function (listener) {
        if (listener.exitAttrib) {
            listener.exitAttrib(this);
        }
    };
    // @Override
    AttribContext.prototype.accept = function (visitor) {
        if (visitor.visitAttrib) {
            return visitor.visitAttrib(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttribContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttribContext = AttribContext;
var AccessorContext = /** @class */ (function (_super) {
    __extends(AccessorContext, _super);
    function AccessorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(AccessorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return stellarisParser.RULE_accessor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AccessorContext.prototype.enterRule = function (listener) {
        if (listener.enterAccessor) {
            listener.enterAccessor(this);
        }
    };
    // @Override
    AccessorContext.prototype.exitRule = function (listener) {
        if (listener.exitAccessor) {
            listener.exitAccessor(this);
        }
    };
    // @Override
    AccessorContext.prototype.accept = function (visitor) {
        if (visitor.visitAccessor) {
            return visitor.visitAccessor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AccessorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AccessorContext = AccessorContext;
var GroupContext = /** @class */ (function (_super) {
    __extends(GroupContext, _super);
    function GroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GroupContext.prototype.id = function () {
        return this.tryGetRuleContext(0, IdContext);
    };
    GroupContext.prototype.expr = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    };
    Object.defineProperty(GroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return stellarisParser.RULE_group; },
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
var IdContext = /** @class */ (function (_super) {
    __extends(IdContext, _super);
    function IdContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdContext.prototype.IDENTIFIER = function () { return this.tryGetToken(stellarisParser.IDENTIFIER, 0); };
    IdContext.prototype.STRING = function () { return this.tryGetToken(stellarisParser.STRING, 0); };
    IdContext.prototype.INTEGER = function () { return this.tryGetToken(stellarisParser.INTEGER, 0); };
    Object.defineProperty(IdContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return stellarisParser.RULE_id; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdContext.prototype.enterRule = function (listener) {
        if (listener.enterId) {
            listener.enterId(this);
        }
    };
    // @Override
    IdContext.prototype.exitRule = function (listener) {
        if (listener.exitId) {
            listener.exitId(this);
        }
    };
    // @Override
    IdContext.prototype.accept = function (visitor) {
        if (visitor.visitId) {
            return visitor.visitId(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdContext = IdContext;
