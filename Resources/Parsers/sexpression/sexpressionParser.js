"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sexpression/sexpression.g4 by ANTLR 4.7.3-SNAPSHOT
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
var sexpressionParser = /** @class */ (function (_super) {
    __extends(sexpressionParser, _super);
    function sexpressionParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(sexpressionParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(sexpressionParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return sexpressionParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sexpressionParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "sexpression.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sexpressionParser.prototype, "ruleNames", {
        // @Override
        get: function () { return sexpressionParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sexpressionParser.prototype, "serializedATN", {
        // @Override
        get: function () { return sexpressionParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    sexpressionParser.prototype.sexpr = function () {
        var _localctx = new SexprContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, sexpressionParser.RULE_sexpr);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 11;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sexpressionParser.STRING) | (1 << sexpressionParser.NUMBER) | (1 << sexpressionParser.SYMBOL) | (1 << sexpressionParser.LPAREN) | (1 << sexpressionParser.DOT))) !== 0)) {
                    {
                        {
                            this.state = 8;
                            this.item();
                        }
                    }
                    this.state = 13;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 14;
                this.match(sexpressionParser.EOF);
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
    sexpressionParser.prototype.item = function () {
        var _localctx = new ItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, sexpressionParser.RULE_item);
        try {
            this.state = 24;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 16;
                        this.atom();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 17;
                        this.list();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 18;
                        this.match(sexpressionParser.LPAREN);
                        this.state = 19;
                        this.item();
                        this.state = 20;
                        this.match(sexpressionParser.DOT);
                        this.state = 21;
                        this.item();
                        this.state = 22;
                        this.match(sexpressionParser.RPAREN);
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
    sexpressionParser.prototype.list = function () {
        var _localctx = new ListContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, sexpressionParser.RULE_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 26;
                this.match(sexpressionParser.LPAREN);
                this.state = 30;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sexpressionParser.STRING) | (1 << sexpressionParser.NUMBER) | (1 << sexpressionParser.SYMBOL) | (1 << sexpressionParser.LPAREN) | (1 << sexpressionParser.DOT))) !== 0)) {
                    {
                        {
                            this.state = 27;
                            this.item();
                        }
                    }
                    this.state = 32;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 33;
                this.match(sexpressionParser.RPAREN);
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
    sexpressionParser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, sexpressionParser.RULE_atom);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 35;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sexpressionParser.STRING) | (1 << sexpressionParser.NUMBER) | (1 << sexpressionParser.SYMBOL) | (1 << sexpressionParser.DOT))) !== 0))) {
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
    Object.defineProperty(sexpressionParser, "_ATN", {
        get: function () {
            if (!sexpressionParser.__ATN) {
                sexpressionParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(sexpressionParser._serializedATN));
            }
            return sexpressionParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    sexpressionParser.STRING = 1;
    sexpressionParser.WHITESPACE = 2;
    sexpressionParser.NUMBER = 3;
    sexpressionParser.SYMBOL = 4;
    sexpressionParser.LPAREN = 5;
    sexpressionParser.RPAREN = 6;
    sexpressionParser.DOT = 7;
    sexpressionParser.RULE_sexpr = 0;
    sexpressionParser.RULE_item = 1;
    sexpressionParser.RULE_list = 2;
    sexpressionParser.RULE_atom = 3;
    // tslint:disable:no-trailing-whitespace
    sexpressionParser.ruleNames = [
        "sexpr", "item", "list", "atom",
    ];
    sexpressionParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "'('", "')'", "'.'",
    ];
    sexpressionParser._SYMBOLIC_NAMES = [
        undefined, "STRING", "WHITESPACE", "NUMBER", "SYMBOL", "LPAREN", "RPAREN",
        "DOT",
    ];
    sexpressionParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(sexpressionParser._LITERAL_NAMES, sexpressionParser._SYMBOLIC_NAMES, []);
    sexpressionParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\t(\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x07\x02\f\n\x02" +
        "\f\x02\x0E\x02\x0F\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1B\n\x03\x03\x04\x03\x04\x07" +
        "\x04\x1F\n\x04\f\x04\x0E\x04\"\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
        "\x05\x02\x02\x02\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x03\x05\x02\x03" +
        "\x03\x05\x06\t\t\x02\'\x02\r\x03\x02\x02\x02\x04\x1A\x03\x02\x02\x02\x06" +
        "\x1C\x03\x02\x02\x02\b%\x03\x02\x02\x02\n\f\x05\x04\x03\x02\v\n\x03\x02" +
        "\x02\x02\f\x0F\x03\x02\x02\x02\r\v\x03\x02\x02\x02\r\x0E\x03\x02\x02\x02" +
        "\x0E\x10\x03\x02\x02\x02\x0F\r\x03\x02\x02\x02\x10\x11\x07\x02\x02\x03" +
        "\x11\x03\x03\x02\x02\x02\x12\x1B\x05\b\x05\x02\x13\x1B\x05\x06\x04\x02" +
        "\x14\x15\x07\x07\x02\x02\x15\x16\x05\x04\x03\x02\x16\x17\x07\t\x02\x02" +
        "\x17\x18\x05\x04\x03\x02\x18\x19\x07\b\x02\x02\x19\x1B\x03\x02\x02\x02" +
        "\x1A\x12\x03\x02\x02\x02\x1A\x13\x03\x02\x02\x02\x1A\x14\x03\x02\x02\x02" +
        "\x1B\x05\x03\x02\x02\x02\x1C \x07\x07\x02\x02\x1D\x1F\x05\x04\x03\x02" +
        "\x1E\x1D\x03\x02\x02\x02\x1F\"\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 !" +
        "\x03\x02\x02\x02!#\x03\x02\x02\x02\" \x03\x02\x02\x02#$\x07\b\x02\x02" +
        "$\x07\x03\x02\x02\x02%&\t\x02\x02\x02&\t\x03\x02\x02\x02\x05\r\x1A ";
    return sexpressionParser;
}(Parser_1.Parser));
exports.sexpressionParser = sexpressionParser;
var SexprContext = /** @class */ (function (_super) {
    __extends(SexprContext, _super);
    function SexprContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SexprContext.prototype.EOF = function () { return this.getToken(sexpressionParser.EOF, 0); };
    SexprContext.prototype.item = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ItemContext);
        }
        else {
            return this.getRuleContext(i, ItemContext);
        }
    };
    Object.defineProperty(SexprContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sexpressionParser.RULE_sexpr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SexprContext.prototype.enterRule = function (listener) {
        if (listener.enterSexpr) {
            listener.enterSexpr(this);
        }
    };
    // @Override
    SexprContext.prototype.exitRule = function (listener) {
        if (listener.exitSexpr) {
            listener.exitSexpr(this);
        }
    };
    // @Override
    SexprContext.prototype.accept = function (visitor) {
        if (visitor.visitSexpr) {
            return visitor.visitSexpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SexprContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SexprContext = SexprContext;
var ItemContext = /** @class */ (function (_super) {
    __extends(ItemContext, _super);
    function ItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ItemContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    ItemContext.prototype.list = function () {
        return this.tryGetRuleContext(0, ListContext);
    };
    ItemContext.prototype.LPAREN = function () { return this.tryGetToken(sexpressionParser.LPAREN, 0); };
    ItemContext.prototype.item = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ItemContext);
        }
        else {
            return this.getRuleContext(i, ItemContext);
        }
    };
    ItemContext.prototype.DOT = function () { return this.tryGetToken(sexpressionParser.DOT, 0); };
    ItemContext.prototype.RPAREN = function () { return this.tryGetToken(sexpressionParser.RPAREN, 0); };
    Object.defineProperty(ItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sexpressionParser.RULE_item; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ItemContext.prototype.enterRule = function (listener) {
        if (listener.enterItem) {
            listener.enterItem(this);
        }
    };
    // @Override
    ItemContext.prototype.exitRule = function (listener) {
        if (listener.exitItem) {
            listener.exitItem(this);
        }
    };
    // @Override
    ItemContext.prototype.accept = function (visitor) {
        if (visitor.visitItem) {
            return visitor.visitItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ItemContext = ItemContext;
var ListContext = /** @class */ (function (_super) {
    __extends(ListContext, _super);
    function ListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListContext.prototype.LPAREN = function () { return this.getToken(sexpressionParser.LPAREN, 0); };
    ListContext.prototype.RPAREN = function () { return this.getToken(sexpressionParser.RPAREN, 0); };
    ListContext.prototype.item = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ItemContext);
        }
        else {
            return this.getRuleContext(i, ItemContext);
        }
    };
    Object.defineProperty(ListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sexpressionParser.RULE_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListContext.prototype.enterRule = function (listener) {
        if (listener.enterList) {
            listener.enterList(this);
        }
    };
    // @Override
    ListContext.prototype.exitRule = function (listener) {
        if (listener.exitList) {
            listener.exitList(this);
        }
    };
    // @Override
    ListContext.prototype.accept = function (visitor) {
        if (visitor.visitList) {
            return visitor.visitList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListContext = ListContext;
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.STRING = function () { return this.tryGetToken(sexpressionParser.STRING, 0); };
    AtomContext.prototype.SYMBOL = function () { return this.tryGetToken(sexpressionParser.SYMBOL, 0); };
    AtomContext.prototype.NUMBER = function () { return this.tryGetToken(sexpressionParser.NUMBER, 0); };
    AtomContext.prototype.DOT = function () { return this.tryGetToken(sexpressionParser.DOT, 0); };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sexpressionParser.RULE_atom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomContext.prototype.enterRule = function (listener) {
        if (listener.enterAtom) {
            listener.enterAtom(this);
        }
    };
    // @Override
    AtomContext.prototype.exitRule = function (listener) {
        if (listener.exitAtom) {
            listener.exitAtom(this);
        }
    };
    // @Override
    AtomContext.prototype.accept = function (visitor) {
        if (visitor.visitAtom) {
            return visitor.visitAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomContext = AtomContext;
