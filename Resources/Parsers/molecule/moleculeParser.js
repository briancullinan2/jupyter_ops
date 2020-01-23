"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/molecule/molecule.g4 by ANTLR 4.7.3-SNAPSHOT
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
var moleculeParser = /** @class */ (function (_super) {
    __extends(moleculeParser, _super);
    function moleculeParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(moleculeParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(moleculeParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return moleculeParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(moleculeParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "molecule.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(moleculeParser.prototype, "ruleNames", {
        // @Override
        get: function () { return moleculeParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(moleculeParser.prototype, "serializedATN", {
        // @Override
        get: function () { return moleculeParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    moleculeParser.prototype.molecule = function () {
        var _localctx = new MoleculeContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, moleculeParser.RULE_molecule);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 16;
                this.part();
                this.state = 21;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === moleculeParser.T__0) {
                    {
                        {
                            this.state = 17;
                            this.match(moleculeParser.T__0);
                            this.state = 18;
                            this.part();
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
    moleculeParser.prototype.part = function () {
        var _localctx = new PartContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, moleculeParser.RULE_part);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 28;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 25;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === moleculeParser.NUMBER) {
                                {
                                    this.state = 24;
                                    this.count();
                                }
                            }
                            this.state = 27;
                            this.structure();
                        }
                    }
                    this.state = 30;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << moleculeParser.T__1) | (1 << moleculeParser.T__3) | (1 << moleculeParser.ELEMENT) | (1 << moleculeParser.NUMBER))) !== 0));
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
    moleculeParser.prototype.structure = function () {
        var _localctx = new StructureContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, moleculeParser.RULE_structure);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 32;
                this.symbol();
                this.state = 34;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                    case 1:
                        {
                            this.state = 33;
                            this.count();
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
    moleculeParser.prototype.symbol = function () {
        var _localctx = new SymbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, moleculeParser.RULE_symbol);
        try {
            this.state = 39;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case moleculeParser.ELEMENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 36;
                        this.element();
                    }
                    break;
                case moleculeParser.T__1:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 37;
                        this.group();
                    }
                    break;
                case moleculeParser.T__3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 38;
                        this.ion();
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
    moleculeParser.prototype.group = function () {
        var _localctx = new GroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, moleculeParser.RULE_group);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 41;
                this.match(moleculeParser.T__1);
                this.state = 43;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 42;
                            this.structure();
                        }
                    }
                    this.state = 45;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << moleculeParser.T__1) | (1 << moleculeParser.T__3) | (1 << moleculeParser.ELEMENT))) !== 0));
                this.state = 47;
                this.match(moleculeParser.T__2);
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
    moleculeParser.prototype.ion = function () {
        var _localctx = new IonContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, moleculeParser.RULE_ion);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 49;
                this.match(moleculeParser.T__3);
                this.state = 51;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 50;
                            this.structure();
                        }
                    }
                    this.state = 53;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << moleculeParser.T__1) | (1 << moleculeParser.T__3) | (1 << moleculeParser.ELEMENT))) !== 0));
                this.state = 55;
                this.match(moleculeParser.T__4);
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
    moleculeParser.prototype.element = function () {
        var _localctx = new ElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, moleculeParser.RULE_element);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 57;
                this.match(moleculeParser.ELEMENT);
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
    moleculeParser.prototype.count = function () {
        var _localctx = new CountContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, moleculeParser.RULE_count);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 59;
                this.match(moleculeParser.NUMBER);
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
    Object.defineProperty(moleculeParser, "_ATN", {
        get: function () {
            if (!moleculeParser.__ATN) {
                moleculeParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(moleculeParser._serializedATN));
            }
            return moleculeParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    moleculeParser.T__0 = 1;
    moleculeParser.T__1 = 2;
    moleculeParser.T__2 = 3;
    moleculeParser.T__3 = 4;
    moleculeParser.T__4 = 5;
    moleculeParser.ELEMENT = 6;
    moleculeParser.NUMBER = 7;
    moleculeParser.WS = 8;
    moleculeParser.RULE_molecule = 0;
    moleculeParser.RULE_part = 1;
    moleculeParser.RULE_structure = 2;
    moleculeParser.RULE_symbol = 3;
    moleculeParser.RULE_group = 4;
    moleculeParser.RULE_ion = 5;
    moleculeParser.RULE_element = 6;
    moleculeParser.RULE_count = 7;
    // tslint:disable:no-trailing-whitespace
    moleculeParser.ruleNames = [
        "molecule", "part", "structure", "symbol", "group", "ion", "element",
        "count",
    ];
    moleculeParser._LITERAL_NAMES = [
        undefined, "'\u00B7'", "'('", "')'", "'['", "']'",
    ];
    moleculeParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, "ELEMENT",
        "NUMBER", "WS",
    ];
    moleculeParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(moleculeParser._LITERAL_NAMES, moleculeParser._SYMBOLIC_NAMES, []);
    moleculeParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\n@\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
        "\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x02\x07\x02\x16\n\x02\f\x02" +
        "\x0E\x02\x19\v\x02\x03\x03\x05\x03\x1C\n\x03\x03\x03\x06\x03\x1F\n\x03" +
        "\r\x03\x0E\x03 \x03\x04\x03\x04\x05\x04%\n\x04\x03\x05\x03\x05\x03\x05" +
        "\x05\x05*\n\x05\x03\x06\x03\x06\x06\x06.\n\x06\r\x06\x0E\x06/\x03\x06" +
        "\x03\x06\x03\x07\x03\x07\x06\x076\n\x07\r\x07\x0E\x077\x03\x07\x03\x07" +
        "\x03\b\x03\b\x03\t\x03\t\x03\t\x02\x02\x02\n\x02\x02\x04\x02\x06\x02\b" +
        "\x02\n\x02\f\x02\x0E\x02\x10\x02\x02\x02\x02?\x02\x12\x03\x02\x02\x02" +
        "\x04\x1E\x03\x02\x02\x02\x06\"\x03\x02\x02\x02\b)\x03\x02\x02\x02\n+\x03" +
        "\x02\x02\x02\f3\x03\x02\x02\x02\x0E;\x03\x02\x02\x02\x10=\x03\x02\x02" +
        "\x02\x12\x17\x05\x04\x03\x02\x13\x14\x07\x03\x02\x02\x14\x16\x05\x04\x03" +
        "\x02\x15\x13\x03\x02\x02\x02\x16\x19\x03\x02\x02\x02\x17\x15\x03\x02\x02" +
        "\x02\x17\x18\x03\x02\x02\x02\x18\x03\x03\x02\x02\x02\x19\x17\x03\x02\x02" +
        "\x02\x1A\x1C\x05\x10\t\x02\x1B\x1A\x03\x02\x02\x02\x1B\x1C\x03\x02\x02" +
        "\x02\x1C\x1D\x03\x02\x02\x02\x1D\x1F\x05\x06\x04\x02\x1E\x1B\x03\x02\x02" +
        "\x02\x1F \x03\x02\x02\x02 \x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!\x05" +
        "\x03\x02\x02\x02\"$\x05\b\x05\x02#%\x05\x10\t\x02$#\x03\x02\x02\x02$%" +
        "\x03\x02\x02\x02%\x07\x03\x02\x02\x02&*\x05\x0E\b\x02\'*\x05\n\x06\x02" +
        "(*\x05\f\x07\x02)&\x03\x02\x02\x02)\'\x03\x02\x02\x02)(\x03\x02\x02\x02" +
        "*\t\x03\x02\x02\x02+-\x07\x04\x02\x02,.\x05\x06\x04\x02-,\x03\x02\x02" +
        "\x02./\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02\x02" +
        "\x0212\x07\x05\x02\x022\v\x03\x02\x02\x0235\x07\x06\x02\x0246\x05\x06" +
        "\x04\x0254\x03\x02\x02\x0267\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02" +
        "\x02\x0289\x03\x02\x02\x029:\x07\x07\x02\x02:\r\x03\x02\x02\x02;<\x07" +
        "\b\x02\x02<\x0F\x03\x02\x02\x02=>\x07\t\x02\x02>\x11\x03\x02\x02\x02\t" +
        "\x17\x1B $)/7";
    return moleculeParser;
}(Parser_1.Parser));
exports.moleculeParser = moleculeParser;
var MoleculeContext = /** @class */ (function (_super) {
    __extends(MoleculeContext, _super);
    function MoleculeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MoleculeContext.prototype.part = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PartContext);
        }
        else {
            return this.getRuleContext(i, PartContext);
        }
    };
    Object.defineProperty(MoleculeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return moleculeParser.RULE_molecule; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MoleculeContext.prototype.enterRule = function (listener) {
        if (listener.enterMolecule) {
            listener.enterMolecule(this);
        }
    };
    // @Override
    MoleculeContext.prototype.exitRule = function (listener) {
        if (listener.exitMolecule) {
            listener.exitMolecule(this);
        }
    };
    // @Override
    MoleculeContext.prototype.accept = function (visitor) {
        if (visitor.visitMolecule) {
            return visitor.visitMolecule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MoleculeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MoleculeContext = MoleculeContext;
var PartContext = /** @class */ (function (_super) {
    __extends(PartContext, _super);
    function PartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PartContext.prototype.structure = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StructureContext);
        }
        else {
            return this.getRuleContext(i, StructureContext);
        }
    };
    PartContext.prototype.count = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CountContext);
        }
        else {
            return this.getRuleContext(i, CountContext);
        }
    };
    Object.defineProperty(PartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return moleculeParser.RULE_part; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PartContext.prototype.enterRule = function (listener) {
        if (listener.enterPart) {
            listener.enterPart(this);
        }
    };
    // @Override
    PartContext.prototype.exitRule = function (listener) {
        if (listener.exitPart) {
            listener.exitPart(this);
        }
    };
    // @Override
    PartContext.prototype.accept = function (visitor) {
        if (visitor.visitPart) {
            return visitor.visitPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PartContext = PartContext;
var StructureContext = /** @class */ (function (_super) {
    __extends(StructureContext, _super);
    function StructureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructureContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    StructureContext.prototype.count = function () {
        return this.tryGetRuleContext(0, CountContext);
    };
    Object.defineProperty(StructureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return moleculeParser.RULE_structure; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructureContext.prototype.enterRule = function (listener) {
        if (listener.enterStructure) {
            listener.enterStructure(this);
        }
    };
    // @Override
    StructureContext.prototype.exitRule = function (listener) {
        if (listener.exitStructure) {
            listener.exitStructure(this);
        }
    };
    // @Override
    StructureContext.prototype.accept = function (visitor) {
        if (visitor.visitStructure) {
            return visitor.visitStructure(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructureContext = StructureContext;
var SymbolContext = /** @class */ (function (_super) {
    __extends(SymbolContext, _super);
    function SymbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SymbolContext.prototype.element = function () {
        return this.tryGetRuleContext(0, ElementContext);
    };
    SymbolContext.prototype.group = function () {
        return this.tryGetRuleContext(0, GroupContext);
    };
    SymbolContext.prototype.ion = function () {
        return this.tryGetRuleContext(0, IonContext);
    };
    Object.defineProperty(SymbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return moleculeParser.RULE_symbol; },
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
var GroupContext = /** @class */ (function (_super) {
    __extends(GroupContext, _super);
    function GroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GroupContext.prototype.structure = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StructureContext);
        }
        else {
            return this.getRuleContext(i, StructureContext);
        }
    };
    Object.defineProperty(GroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return moleculeParser.RULE_group; },
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
var IonContext = /** @class */ (function (_super) {
    __extends(IonContext, _super);
    function IonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IonContext.prototype.structure = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StructureContext);
        }
        else {
            return this.getRuleContext(i, StructureContext);
        }
    };
    Object.defineProperty(IonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return moleculeParser.RULE_ion; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IonContext.prototype.enterRule = function (listener) {
        if (listener.enterIon) {
            listener.enterIon(this);
        }
    };
    // @Override
    IonContext.prototype.exitRule = function (listener) {
        if (listener.exitIon) {
            listener.exitIon(this);
        }
    };
    // @Override
    IonContext.prototype.accept = function (visitor) {
        if (visitor.visitIon) {
            return visitor.visitIon(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IonContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IonContext = IonContext;
var ElementContext = /** @class */ (function (_super) {
    __extends(ElementContext, _super);
    function ElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementContext.prototype.ELEMENT = function () { return this.getToken(moleculeParser.ELEMENT, 0); };
    Object.defineProperty(ElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return moleculeParser.RULE_element; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementContext.prototype.enterRule = function (listener) {
        if (listener.enterElement) {
            listener.enterElement(this);
        }
    };
    // @Override
    ElementContext.prototype.exitRule = function (listener) {
        if (listener.exitElement) {
            listener.exitElement(this);
        }
    };
    // @Override
    ElementContext.prototype.accept = function (visitor) {
        if (visitor.visitElement) {
            return visitor.visitElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementContext = ElementContext;
var CountContext = /** @class */ (function (_super) {
    __extends(CountContext, _super);
    function CountContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CountContext.prototype.NUMBER = function () { return this.getToken(moleculeParser.NUMBER, 0); };
    Object.defineProperty(CountContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return moleculeParser.RULE_count; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CountContext.prototype.enterRule = function (listener) {
        if (listener.enterCount) {
            listener.enterCount(this);
        }
    };
    // @Override
    CountContext.prototype.exitRule = function (listener) {
        if (listener.exitCount) {
            listener.exitCount(this);
        }
    };
    // @Override
    CountContext.prototype.accept = function (visitor) {
        if (visitor.visitCount) {
            return visitor.visitCount(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CountContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CountContext = CountContext;
