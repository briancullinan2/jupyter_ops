"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/quakemap/quakemap.g4 by ANTLR 4.7.3-SNAPSHOT
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
var quakemapParser = /** @class */ (function (_super) {
    __extends(quakemapParser, _super);
    function quakemapParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(quakemapParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(quakemapParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return quakemapParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(quakemapParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "quakemap.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(quakemapParser.prototype, "ruleNames", {
        // @Override
        get: function () { return quakemapParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(quakemapParser.prototype, "serializedATN", {
        // @Override
        get: function () { return quakemapParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    quakemapParser.prototype.map = function () {
        var _localctx = new MapContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, quakemapParser.RULE_map);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 21;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === quakemapParser.T__0) {
                    {
                        {
                            this.state = 18;
                            this.entity();
                        }
                    }
                    this.state = 23;
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
    quakemapParser.prototype.entity = function () {
        var _localctx = new EntityContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, quakemapParser.RULE_entity);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 24;
                this.match(quakemapParser.T__0);
                this.state = 28;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === quakemapParser.STRING) {
                    {
                        {
                            this.state = 25;
                            this.keyvalue();
                        }
                    }
                    this.state = 30;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 34;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === quakemapParser.T__0) {
                    {
                        {
                            this.state = 31;
                            this.brush();
                        }
                    }
                    this.state = 36;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 37;
                this.match(quakemapParser.T__1);
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
    quakemapParser.prototype.keyvalue = function () {
        var _localctx = new KeyvalueContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, quakemapParser.RULE_keyvalue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 39;
                this.string();
                this.state = 40;
                this.string();
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
    quakemapParser.prototype.brush = function () {
        var _localctx = new BrushContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, quakemapParser.RULE_brush);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 42;
                this.match(quakemapParser.T__0);
                this.state = 44;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 43;
                            this.brushline();
                        }
                    }
                    this.state = 46;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === quakemapParser.T__2 || _la === quakemapParser.TEXT);
                this.state = 48;
                this.match(quakemapParser.T__1);
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
    quakemapParser.prototype.brushline = function () {
        var _localctx = new BrushlineContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, quakemapParser.RULE_brushline);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 53;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === quakemapParser.T__2) {
                    {
                        {
                            this.state = 50;
                            this.coord();
                        }
                    }
                    this.state = 55;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 56;
                this.text();
                this.state = 60;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === quakemapParser.NUMBER) {
                    {
                        {
                            this.state = 57;
                            this.num();
                        }
                    }
                    this.state = 62;
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
    quakemapParser.prototype.coord = function () {
        var _localctx = new CoordContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, quakemapParser.RULE_coord);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 63;
                this.match(quakemapParser.T__2);
                this.state = 67;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === quakemapParser.NUMBER) {
                    {
                        {
                            this.state = 64;
                            this.num();
                        }
                    }
                    this.state = 69;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 70;
                this.match(quakemapParser.T__3);
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
    quakemapParser.prototype.num = function () {
        var _localctx = new NumContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, quakemapParser.RULE_num);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 72;
                this.match(quakemapParser.NUMBER);
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
    quakemapParser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, quakemapParser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 74;
                this.match(quakemapParser.STRING);
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
    quakemapParser.prototype.text = function () {
        var _localctx = new TextContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, quakemapParser.RULE_text);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 76;
                this.match(quakemapParser.TEXT);
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
    Object.defineProperty(quakemapParser, "_ATN", {
        get: function () {
            if (!quakemapParser.__ATN) {
                quakemapParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(quakemapParser._serializedATN));
            }
            return quakemapParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    quakemapParser.T__0 = 1;
    quakemapParser.T__1 = 2;
    quakemapParser.T__2 = 3;
    quakemapParser.T__3 = 4;
    quakemapParser.TEXT = 5;
    quakemapParser.NUMBER = 6;
    quakemapParser.STRING = 7;
    quakemapParser.WS = 8;
    quakemapParser.RULE_map = 0;
    quakemapParser.RULE_entity = 1;
    quakemapParser.RULE_keyvalue = 2;
    quakemapParser.RULE_brush = 3;
    quakemapParser.RULE_brushline = 4;
    quakemapParser.RULE_coord = 5;
    quakemapParser.RULE_num = 6;
    quakemapParser.RULE_string = 7;
    quakemapParser.RULE_text = 8;
    // tslint:disable:no-trailing-whitespace
    quakemapParser.ruleNames = [
        "map", "entity", "keyvalue", "brush", "brushline", "coord", "num", "string",
        "text",
    ];
    quakemapParser._LITERAL_NAMES = [
        undefined, "'{'", "'}'", "'('", "')'",
    ];
    quakemapParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "TEXT", "NUMBER",
        "STRING", "WS",
    ];
    quakemapParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(quakemapParser._LITERAL_NAMES, quakemapParser._SYMBOLIC_NAMES, []);
    quakemapParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\nQ\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
        "\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x07\x02\x16\n\x02\f\x02\x0E" +
        "\x02\x19\v\x02\x03\x03\x03\x03\x07\x03\x1D\n\x03\f\x03\x0E\x03 \v\x03" +
        "\x03\x03\x07\x03#\n\x03\f\x03\x0E\x03&\v\x03\x03\x03\x03\x03\x03\x04\x03" +
        "\x04\x03\x04\x03\x05\x03\x05\x06\x05/\n\x05\r\x05\x0E\x050\x03\x05\x03" +
        "\x05\x03\x06\x07\x066\n\x06\f\x06\x0E\x069\v\x06\x03\x06\x03\x06\x07\x06" +
        "=\n\x06\f\x06\x0E\x06@\v\x06\x03\x07\x03\x07\x07\x07D\n\x07\f\x07\x0E" +
        "\x07G\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n" +
        "\x02\x02\x02\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
        "\x12\x02\x02\x02\x02N\x02\x17\x03\x02\x02\x02\x04\x1A\x03\x02\x02\x02" +
        "\x06)\x03\x02\x02\x02\b,\x03\x02\x02\x02\n7\x03\x02\x02\x02\fA\x03\x02" +
        "\x02\x02\x0EJ\x03\x02\x02\x02\x10L\x03\x02\x02\x02\x12N\x03\x02\x02\x02" +
        "\x14\x16\x05\x04\x03\x02\x15\x14\x03\x02\x02\x02\x16\x19\x03\x02\x02\x02" +
        "\x17\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x03\x03\x02\x02\x02" +
        "\x19\x17\x03\x02\x02\x02\x1A\x1E\x07\x03\x02\x02\x1B\x1D\x05\x06\x04\x02" +
        "\x1C\x1B\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02" +
        "\x1E\x1F\x03\x02\x02\x02\x1F$\x03\x02\x02\x02 \x1E\x03\x02\x02\x02!#\x05" +
        "\b\x05\x02\"!\x03\x02\x02\x02#&\x03\x02\x02\x02$\"\x03\x02\x02\x02$%\x03" +
        "\x02\x02\x02%\'\x03\x02\x02\x02&$\x03\x02\x02\x02\'(\x07\x04\x02\x02(" +
        "\x05\x03\x02\x02\x02)*\x05\x10\t\x02*+\x05\x10\t\x02+\x07\x03\x02\x02" +
        "\x02,.\x07\x03\x02\x02-/\x05\n\x06\x02.-\x03\x02\x02\x02/0\x03\x02\x02" +
        "\x020.\x03\x02\x02\x0201\x03\x02\x02\x0212\x03\x02\x02\x0223\x07\x04\x02" +
        "\x023\t\x03\x02\x02\x0246\x05\f\x07\x0254\x03\x02\x02\x0269\x03\x02\x02" +
        "\x0275\x03\x02\x02\x0278\x03\x02\x02\x028:\x03\x02\x02\x0297\x03\x02\x02" +
        "\x02:>\x05\x12\n\x02;=\x05\x0E\b\x02<;\x03\x02\x02\x02=@\x03\x02\x02\x02" +
        "><\x03\x02\x02\x02>?\x03\x02\x02\x02?\v\x03\x02\x02\x02@>\x03\x02\x02" +
        "\x02AE\x07\x05\x02\x02BD\x05\x0E\b\x02CB\x03\x02\x02\x02DG\x03\x02\x02" +
        "\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02FH\x03\x02\x02\x02GE\x03\x02\x02" +
        "\x02HI\x07\x06\x02\x02I\r\x03\x02\x02\x02JK\x07\b\x02\x02K\x0F\x03\x02" +
        "\x02\x02LM\x07\t\x02\x02M\x11\x03\x02\x02\x02NO\x07\x07\x02\x02O\x13\x03" +
        "\x02\x02\x02\t\x17\x1E$07>E";
    return quakemapParser;
}(Parser_1.Parser));
exports.quakemapParser = quakemapParser;
var MapContext = /** @class */ (function (_super) {
    __extends(MapContext, _super);
    function MapContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MapContext.prototype.entity = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EntityContext);
        }
        else {
            return this.getRuleContext(i, EntityContext);
        }
    };
    Object.defineProperty(MapContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return quakemapParser.RULE_map; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MapContext.prototype.enterRule = function (listener) {
        if (listener.enterMap) {
            listener.enterMap(this);
        }
    };
    // @Override
    MapContext.prototype.exitRule = function (listener) {
        if (listener.exitMap) {
            listener.exitMap(this);
        }
    };
    // @Override
    MapContext.prototype.accept = function (visitor) {
        if (visitor.visitMap) {
            return visitor.visitMap(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MapContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MapContext = MapContext;
var EntityContext = /** @class */ (function (_super) {
    __extends(EntityContext, _super);
    function EntityContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EntityContext.prototype.keyvalue = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KeyvalueContext);
        }
        else {
            return this.getRuleContext(i, KeyvalueContext);
        }
    };
    EntityContext.prototype.brush = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BrushContext);
        }
        else {
            return this.getRuleContext(i, BrushContext);
        }
    };
    Object.defineProperty(EntityContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return quakemapParser.RULE_entity; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EntityContext.prototype.enterRule = function (listener) {
        if (listener.enterEntity) {
            listener.enterEntity(this);
        }
    };
    // @Override
    EntityContext.prototype.exitRule = function (listener) {
        if (listener.exitEntity) {
            listener.exitEntity(this);
        }
    };
    // @Override
    EntityContext.prototype.accept = function (visitor) {
        if (visitor.visitEntity) {
            return visitor.visitEntity(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EntityContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EntityContext = EntityContext;
var KeyvalueContext = /** @class */ (function (_super) {
    __extends(KeyvalueContext, _super);
    function KeyvalueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyvalueContext.prototype.string = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StringContext);
        }
        else {
            return this.getRuleContext(i, StringContext);
        }
    };
    Object.defineProperty(KeyvalueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return quakemapParser.RULE_keyvalue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyvalueContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyvalue) {
            listener.enterKeyvalue(this);
        }
    };
    // @Override
    KeyvalueContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyvalue) {
            listener.exitKeyvalue(this);
        }
    };
    // @Override
    KeyvalueContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyvalue) {
            return visitor.visitKeyvalue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyvalueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyvalueContext = KeyvalueContext;
var BrushContext = /** @class */ (function (_super) {
    __extends(BrushContext, _super);
    function BrushContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BrushContext.prototype.brushline = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BrushlineContext);
        }
        else {
            return this.getRuleContext(i, BrushlineContext);
        }
    };
    Object.defineProperty(BrushContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return quakemapParser.RULE_brush; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BrushContext.prototype.enterRule = function (listener) {
        if (listener.enterBrush) {
            listener.enterBrush(this);
        }
    };
    // @Override
    BrushContext.prototype.exitRule = function (listener) {
        if (listener.exitBrush) {
            listener.exitBrush(this);
        }
    };
    // @Override
    BrushContext.prototype.accept = function (visitor) {
        if (visitor.visitBrush) {
            return visitor.visitBrush(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BrushContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BrushContext = BrushContext;
var BrushlineContext = /** @class */ (function (_super) {
    __extends(BrushlineContext, _super);
    function BrushlineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BrushlineContext.prototype.text = function () {
        return this.getRuleContext(0, TextContext);
    };
    BrushlineContext.prototype.coord = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CoordContext);
        }
        else {
            return this.getRuleContext(i, CoordContext);
        }
    };
    BrushlineContext.prototype.num = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NumContext);
        }
        else {
            return this.getRuleContext(i, NumContext);
        }
    };
    Object.defineProperty(BrushlineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return quakemapParser.RULE_brushline; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BrushlineContext.prototype.enterRule = function (listener) {
        if (listener.enterBrushline) {
            listener.enterBrushline(this);
        }
    };
    // @Override
    BrushlineContext.prototype.exitRule = function (listener) {
        if (listener.exitBrushline) {
            listener.exitBrushline(this);
        }
    };
    // @Override
    BrushlineContext.prototype.accept = function (visitor) {
        if (visitor.visitBrushline) {
            return visitor.visitBrushline(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BrushlineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BrushlineContext = BrushlineContext;
var CoordContext = /** @class */ (function (_super) {
    __extends(CoordContext, _super);
    function CoordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CoordContext.prototype.num = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NumContext);
        }
        else {
            return this.getRuleContext(i, NumContext);
        }
    };
    Object.defineProperty(CoordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return quakemapParser.RULE_coord; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CoordContext.prototype.enterRule = function (listener) {
        if (listener.enterCoord) {
            listener.enterCoord(this);
        }
    };
    // @Override
    CoordContext.prototype.exitRule = function (listener) {
        if (listener.exitCoord) {
            listener.exitCoord(this);
        }
    };
    // @Override
    CoordContext.prototype.accept = function (visitor) {
        if (visitor.visitCoord) {
            return visitor.visitCoord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CoordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CoordContext = CoordContext;
var NumContext = /** @class */ (function (_super) {
    __extends(NumContext, _super);
    function NumContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumContext.prototype.NUMBER = function () { return this.getToken(quakemapParser.NUMBER, 0); };
    Object.defineProperty(NumContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return quakemapParser.RULE_num; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumContext.prototype.enterRule = function (listener) {
        if (listener.enterNum) {
            listener.enterNum(this);
        }
    };
    // @Override
    NumContext.prototype.exitRule = function (listener) {
        if (listener.exitNum) {
            listener.exitNum(this);
        }
    };
    // @Override
    NumContext.prototype.accept = function (visitor) {
        if (visitor.visitNum) {
            return visitor.visitNum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumContext = NumContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.STRING = function () { return this.getToken(quakemapParser.STRING, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return quakemapParser.RULE_string; },
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
var TextContext = /** @class */ (function (_super) {
    __extends(TextContext, _super);
    function TextContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TextContext.prototype.TEXT = function () { return this.getToken(quakemapParser.TEXT, 0); };
    Object.defineProperty(TextContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return quakemapParser.RULE_text; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TextContext.prototype.enterRule = function (listener) {
        if (listener.enterText) {
            listener.enterText(this);
        }
    };
    // @Override
    TextContext.prototype.exitRule = function (listener) {
        if (listener.exitText) {
            listener.exitText(this);
        }
    };
    // @Override
    TextContext.prototype.accept = function (visitor) {
        if (visitor.visitText) {
            return visitor.visitText(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TextContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TextContext = TextContext;
