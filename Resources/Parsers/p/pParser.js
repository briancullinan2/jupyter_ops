"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/p/p.g4 by ANTLR 4.7.3-SNAPSHOT
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
var pParser = /** @class */ (function (_super) {
    __extends(pParser, _super);
    function pParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(pParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(pParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return pParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "p.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pParser.prototype, "ruleNames", {
        // @Override
        get: function () { return pParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pParser.prototype, "serializedATN", {
        // @Override
        get: function () { return pParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    pParser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, pParser.RULE_prog);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 9;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 8;
                            this.symbol();
                        }
                    }
                    this.state = 11;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pParser.T__0) | (1 << pParser.R) | (1 << pParser.L))) !== 0));
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
    pParser.prototype.symbol = function () {
        var _localctx = new SymbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, pParser.RULE_symbol);
        try {
            this.state = 15;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pParser.T__0:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 13;
                        this.iterate();
                    }
                    break;
                case pParser.R:
                case pParser.L:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 14;
                        this.atom();
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
    pParser.prototype.iterate = function () {
        var _localctx = new IterateContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, pParser.RULE_iterate);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 17;
                this.match(pParser.T__0);
                this.state = 19;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 18;
                            this.symbol();
                        }
                    }
                    this.state = 21;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pParser.T__0) | (1 << pParser.R) | (1 << pParser.L))) !== 0));
                this.state = 23;
                this.match(pParser.T__1);
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
    pParser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, pParser.RULE_atom);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 25;
                _la = this._input.LA(1);
                if (!(_la === pParser.R || _la === pParser.L)) {
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
    Object.defineProperty(pParser, "_ATN", {
        get: function () {
            if (!pParser.__ATN) {
                pParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(pParser._serializedATN));
            }
            return pParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    pParser.T__0 = 1;
    pParser.T__1 = 2;
    pParser.R = 3;
    pParser.L = 4;
    pParser.WS = 5;
    pParser.RULE_prog = 0;
    pParser.RULE_symbol = 1;
    pParser.RULE_iterate = 2;
    pParser.RULE_atom = 3;
    // tslint:disable:no-trailing-whitespace
    pParser.ruleNames = [
        "prog", "symbol", "iterate", "atom",
    ];
    pParser._LITERAL_NAMES = [
        undefined, "'('", "')'", "'R'", "'\u03BB'",
    ];
    pParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "R", "L", "WS",
    ];
    pParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(pParser._LITERAL_NAMES, pParser._SYMBOLIC_NAMES, []);
    pParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07\x1E\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x06\x02\f\n\x02" +
        "\r\x02\x0E\x02\r\x03\x03\x03\x03\x05\x03\x12\n\x03\x03\x04\x03\x04\x06" +
        "\x04\x16\n\x04\r\x04\x0E\x04\x17\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
        "\x02\x02\x02\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x03\x03\x02\x05\x06" +
        "\x02\x1C\x02\v\x03\x02\x02\x02\x04\x11\x03\x02\x02\x02\x06\x13\x03\x02" +
        "\x02\x02\b\x1B\x03\x02\x02\x02\n\f\x05\x04\x03\x02\v\n\x03\x02\x02\x02" +
        "\f\r\x03\x02\x02\x02\r\v\x03\x02\x02\x02\r\x0E\x03\x02\x02\x02\x0E\x03" +
        "\x03\x02\x02\x02\x0F\x12\x05\x06\x04\x02\x10\x12\x05\b\x05\x02\x11\x0F" +
        "\x03\x02\x02\x02\x11\x10\x03\x02\x02\x02\x12\x05\x03\x02\x02\x02\x13\x15" +
        "\x07\x03\x02\x02\x14\x16\x05\x04\x03\x02\x15\x14\x03\x02\x02\x02\x16\x17" +
        "\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x19" +
        "\x03\x02\x02\x02\x19\x1A\x07\x04\x02\x02\x1A\x07\x03\x02\x02\x02\x1B\x1C" +
        "\t\x02\x02\x02\x1C\t\x03\x02\x02\x02\x05\r\x11\x17";
    return pParser;
}(Parser_1.Parser));
exports.pParser = pParser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.symbol = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SymbolContext);
        }
        else {
            return this.getRuleContext(i, SymbolContext);
        }
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pParser.RULE_prog; },
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
var SymbolContext = /** @class */ (function (_super) {
    __extends(SymbolContext, _super);
    function SymbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SymbolContext.prototype.iterate = function () {
        return this.tryGetRuleContext(0, IterateContext);
    };
    SymbolContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    Object.defineProperty(SymbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pParser.RULE_symbol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SymbolContext.prototype.enterRule = function (listener) {
        if (listener.enterSymbol) {
            listener.enterSymbol(this);
        }
    };
    // @Override
    SymbolContext.prototype.exitRule = function (listener) {
        if (listener.exitSymbol) {
            listener.exitSymbol(this);
        }
    };
    // @Override
    SymbolContext.prototype.accept = function (visitor) {
        if (visitor.visitSymbol) {
            return visitor.visitSymbol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SymbolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SymbolContext = SymbolContext;
var IterateContext = /** @class */ (function (_super) {
    __extends(IterateContext, _super);
    function IterateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IterateContext.prototype.symbol = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SymbolContext);
        }
        else {
            return this.getRuleContext(i, SymbolContext);
        }
    };
    Object.defineProperty(IterateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pParser.RULE_iterate; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IterateContext.prototype.enterRule = function (listener) {
        if (listener.enterIterate) {
            listener.enterIterate(this);
        }
    };
    // @Override
    IterateContext.prototype.exitRule = function (listener) {
        if (listener.exitIterate) {
            listener.exitIterate(this);
        }
    };
    // @Override
    IterateContext.prototype.accept = function (visitor) {
        if (visitor.visitIterate) {
            return visitor.visitIterate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IterateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IterateContext = IterateContext;
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.R = function () { return this.tryGetToken(pParser.R, 0); };
    AtomContext.prototype.L = function () { return this.tryGetToken(pParser.L, 0); };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pParser.RULE_atom; },
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
