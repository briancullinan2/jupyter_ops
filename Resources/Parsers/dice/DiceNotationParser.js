"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/dice/DiceNotation.g4 by ANTLR 4.7.3-SNAPSHOT
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
var DiceNotationParser = /** @class */ (function (_super) {
    __extends(DiceNotationParser, _super);
    function DiceNotationParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(DiceNotationParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(DiceNotationParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return DiceNotationParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiceNotationParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "DiceNotation.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiceNotationParser.prototype, "ruleNames", {
        // @Override
        get: function () { return DiceNotationParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiceNotationParser.prototype, "serializedATN", {
        // @Override
        get: function () { return DiceNotationParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    DiceNotationParser.prototype.notation = function () {
        var _localctx = new NotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, DiceNotationParser.RULE_notation);
        try {
            this.state = 15;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 12;
                        this.dice();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 13;
                        this.number();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 14;
                        this.addOp();
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
    DiceNotationParser.prototype.addOp = function () {
        var _localctx = new AddOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, DiceNotationParser.RULE_addOp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 17;
                this.multOp();
                this.state = 22;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === DiceNotationParser.ADDOPERATOR) {
                    {
                        {
                            this.state = 18;
                            this.match(DiceNotationParser.ADDOPERATOR);
                            this.state = 19;
                            this.multOp();
                        }
                    }
                    this.state = 24;
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
    DiceNotationParser.prototype.multOp = function () {
        var _localctx = new MultOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, DiceNotationParser.RULE_multOp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 25;
                this.operand();
                this.state = 30;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === DiceNotationParser.MULTOPERATOR) {
                    {
                        {
                            this.state = 26;
                            this.match(DiceNotationParser.MULTOPERATOR);
                            this.state = 27;
                            this.operand();
                        }
                    }
                    this.state = 32;
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
    DiceNotationParser.prototype.operand = function () {
        var _localctx = new OperandContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, DiceNotationParser.RULE_operand);
        try {
            this.state = 39;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 33;
                        this.dice();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 34;
                        this.number();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 35;
                        this.match(DiceNotationParser.LPAREN);
                        this.state = 36;
                        this.notation();
                        this.state = 37;
                        this.match(DiceNotationParser.RPAREN);
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
    DiceNotationParser.prototype.dice = function () {
        var _localctx = new DiceContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, DiceNotationParser.RULE_dice);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 42;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === DiceNotationParser.ADDOPERATOR) {
                    {
                        this.state = 41;
                        this.match(DiceNotationParser.ADDOPERATOR);
                    }
                }
                this.state = 45;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === DiceNotationParser.DIGIT) {
                    {
                        this.state = 44;
                        this.match(DiceNotationParser.DIGIT);
                    }
                }
                this.state = 47;
                this.match(DiceNotationParser.DSEPARATOR);
                this.state = 48;
                this.match(DiceNotationParser.DIGIT);
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
    DiceNotationParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, DiceNotationParser.RULE_number);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 51;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === DiceNotationParser.ADDOPERATOR) {
                    {
                        this.state = 50;
                        this.match(DiceNotationParser.ADDOPERATOR);
                    }
                }
                this.state = 53;
                this.match(DiceNotationParser.DIGIT);
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
    Object.defineProperty(DiceNotationParser, "_ATN", {
        get: function () {
            if (!DiceNotationParser.__ATN) {
                DiceNotationParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(DiceNotationParser._serializedATN));
            }
            return DiceNotationParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    DiceNotationParser.DSEPARATOR = 1;
    DiceNotationParser.DIGIT = 2;
    DiceNotationParser.ADDOPERATOR = 3;
    DiceNotationParser.MULTOPERATOR = 4;
    DiceNotationParser.LPAREN = 5;
    DiceNotationParser.RPAREN = 6;
    DiceNotationParser.WS = 7;
    DiceNotationParser.RULE_notation = 0;
    DiceNotationParser.RULE_addOp = 1;
    DiceNotationParser.RULE_multOp = 2;
    DiceNotationParser.RULE_operand = 3;
    DiceNotationParser.RULE_dice = 4;
    DiceNotationParser.RULE_number = 5;
    // tslint:disable:no-trailing-whitespace
    DiceNotationParser.ruleNames = [
        "notation", "addOp", "multOp", "operand", "dice", "number",
    ];
    DiceNotationParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "'('", "')'",
    ];
    DiceNotationParser._SYMBOLIC_NAMES = [
        undefined, "DSEPARATOR", "DIGIT", "ADDOPERATOR", "MULTOPERATOR", "LPAREN",
        "RPAREN", "WS",
    ];
    DiceNotationParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(DiceNotationParser._LITERAL_NAMES, DiceNotationParser._SYMBOLIC_NAMES, []);
    DiceNotationParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\t:\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
        "\x07\x03\x02\x03\x02\x03\x02\x05\x02\x12\n\x02\x03\x03\x03\x03\x03\x03" +
        "\x07\x03\x17\n\x03\f\x03\x0E\x03\x1A\v\x03\x03\x04\x03\x04\x03\x04\x07" +
        "\x04\x1F\n\x04\f\x04\x0E\x04\"\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x05\x05*\n\x05\x03\x06\x05\x06-\n\x06\x03\x06\x05\x060\n" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x07\x05\x076\n\x07\x03\x07\x03\x07\x03" +
        "\x07\x02\x02\x02\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x02\x02" +
        "<\x02\x11\x03\x02\x02\x02\x04\x13\x03\x02\x02\x02\x06\x1B\x03\x02\x02" +
        "\x02\b)\x03\x02\x02\x02\n,\x03\x02\x02\x02\f5\x03\x02\x02\x02\x0E\x12" +
        "\x05\n\x06\x02\x0F\x12\x05\f\x07\x02\x10\x12\x05\x04\x03\x02\x11\x0E\x03" +
        "\x02\x02\x02\x11\x0F\x03\x02\x02\x02\x11\x10\x03\x02\x02\x02\x12\x03\x03" +
        "\x02\x02\x02\x13\x18\x05\x06\x04\x02\x14\x15\x07\x05\x02\x02\x15\x17\x05" +
        "\x06\x04\x02\x16\x14\x03\x02\x02\x02\x17\x1A\x03\x02\x02\x02\x18\x16\x03" +
        "\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x05\x03\x02\x02\x02\x1A\x18\x03" +
        "\x02\x02\x02\x1B \x05\b\x05\x02\x1C\x1D\x07\x06\x02\x02\x1D\x1F\x05\b" +
        "\x05\x02\x1E\x1C\x03\x02\x02\x02\x1F\"\x03\x02\x02\x02 \x1E\x03\x02\x02" +
        "\x02 !\x03\x02\x02\x02!\x07\x03\x02\x02\x02\" \x03\x02\x02\x02#*\x05\n" +
        "\x06\x02$*\x05\f\x07\x02%&\x07\x07\x02\x02&\'\x05\x02\x02\x02\'(\x07\b" +
        "\x02\x02(*\x03\x02\x02\x02)#\x03\x02\x02\x02)$\x03\x02\x02\x02)%\x03\x02" +
        "\x02\x02*\t\x03\x02\x02\x02+-\x07\x05\x02\x02,+\x03\x02\x02\x02,-\x03" +
        "\x02\x02\x02-/\x03\x02\x02\x02.0\x07\x04\x02\x02/.\x03\x02\x02\x02/0\x03" +
        "\x02\x02\x0201\x03\x02\x02\x0212\x07\x03\x02\x0223\x07\x04\x02\x023\v" +
        "\x03\x02\x02\x0246\x07\x05\x02\x0254\x03\x02\x02\x0256\x03\x02\x02\x02" +
        "67\x03\x02\x02\x0278\x07\x04\x02\x028\r\x03\x02\x02\x02\t\x11\x18 ),/" +
        "5";
    return DiceNotationParser;
}(Parser_1.Parser));
exports.DiceNotationParser = DiceNotationParser;
var NotationContext = /** @class */ (function (_super) {
    __extends(NotationContext, _super);
    function NotationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NotationContext.prototype.dice = function () {
        return this.tryGetRuleContext(0, DiceContext);
    };
    NotationContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    NotationContext.prototype.addOp = function () {
        return this.tryGetRuleContext(0, AddOpContext);
    };
    Object.defineProperty(NotationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DiceNotationParser.RULE_notation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NotationContext.prototype.enterRule = function (listener) {
        if (listener.enterNotation) {
            listener.enterNotation(this);
        }
    };
    // @Override
    NotationContext.prototype.exitRule = function (listener) {
        if (listener.exitNotation) {
            listener.exitNotation(this);
        }
    };
    // @Override
    NotationContext.prototype.accept = function (visitor) {
        if (visitor.visitNotation) {
            return visitor.visitNotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NotationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NotationContext = NotationContext;
var AddOpContext = /** @class */ (function (_super) {
    __extends(AddOpContext, _super);
    function AddOpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AddOpContext.prototype.multOp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultOpContext);
        }
        else {
            return this.getRuleContext(i, MultOpContext);
        }
    };
    AddOpContext.prototype.ADDOPERATOR = function (i) {
        if (i === undefined) {
            return this.getTokens(DiceNotationParser.ADDOPERATOR);
        }
        else {
            return this.getToken(DiceNotationParser.ADDOPERATOR, i);
        }
    };
    Object.defineProperty(AddOpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DiceNotationParser.RULE_addOp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AddOpContext.prototype.enterRule = function (listener) {
        if (listener.enterAddOp) {
            listener.enterAddOp(this);
        }
    };
    // @Override
    AddOpContext.prototype.exitRule = function (listener) {
        if (listener.exitAddOp) {
            listener.exitAddOp(this);
        }
    };
    // @Override
    AddOpContext.prototype.accept = function (visitor) {
        if (visitor.visitAddOp) {
            return visitor.visitAddOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AddOpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AddOpContext = AddOpContext;
var MultOpContext = /** @class */ (function (_super) {
    __extends(MultOpContext, _super);
    function MultOpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultOpContext.prototype.operand = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OperandContext);
        }
        else {
            return this.getRuleContext(i, OperandContext);
        }
    };
    MultOpContext.prototype.MULTOPERATOR = function (i) {
        if (i === undefined) {
            return this.getTokens(DiceNotationParser.MULTOPERATOR);
        }
        else {
            return this.getToken(DiceNotationParser.MULTOPERATOR, i);
        }
    };
    Object.defineProperty(MultOpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DiceNotationParser.RULE_multOp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultOpContext.prototype.enterRule = function (listener) {
        if (listener.enterMultOp) {
            listener.enterMultOp(this);
        }
    };
    // @Override
    MultOpContext.prototype.exitRule = function (listener) {
        if (listener.exitMultOp) {
            listener.exitMultOp(this);
        }
    };
    // @Override
    MultOpContext.prototype.accept = function (visitor) {
        if (visitor.visitMultOp) {
            return visitor.visitMultOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultOpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultOpContext = MultOpContext;
var OperandContext = /** @class */ (function (_super) {
    __extends(OperandContext, _super);
    function OperandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperandContext.prototype.dice = function () {
        return this.tryGetRuleContext(0, DiceContext);
    };
    OperandContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    OperandContext.prototype.LPAREN = function () { return this.tryGetToken(DiceNotationParser.LPAREN, 0); };
    OperandContext.prototype.notation = function () {
        return this.tryGetRuleContext(0, NotationContext);
    };
    OperandContext.prototype.RPAREN = function () { return this.tryGetToken(DiceNotationParser.RPAREN, 0); };
    Object.defineProperty(OperandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DiceNotationParser.RULE_operand; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperandContext.prototype.enterRule = function (listener) {
        if (listener.enterOperand) {
            listener.enterOperand(this);
        }
    };
    // @Override
    OperandContext.prototype.exitRule = function (listener) {
        if (listener.exitOperand) {
            listener.exitOperand(this);
        }
    };
    // @Override
    OperandContext.prototype.accept = function (visitor) {
        if (visitor.visitOperand) {
            return visitor.visitOperand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperandContext = OperandContext;
var DiceContext = /** @class */ (function (_super) {
    __extends(DiceContext, _super);
    function DiceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DiceContext.prototype.DSEPARATOR = function () { return this.getToken(DiceNotationParser.DSEPARATOR, 0); };
    DiceContext.prototype.DIGIT = function (i) {
        if (i === undefined) {
            return this.getTokens(DiceNotationParser.DIGIT);
        }
        else {
            return this.getToken(DiceNotationParser.DIGIT, i);
        }
    };
    DiceContext.prototype.ADDOPERATOR = function () { return this.tryGetToken(DiceNotationParser.ADDOPERATOR, 0); };
    Object.defineProperty(DiceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DiceNotationParser.RULE_dice; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DiceContext.prototype.enterRule = function (listener) {
        if (listener.enterDice) {
            listener.enterDice(this);
        }
    };
    // @Override
    DiceContext.prototype.exitRule = function (listener) {
        if (listener.exitDice) {
            listener.exitDice(this);
        }
    };
    // @Override
    DiceContext.prototype.accept = function (visitor) {
        if (visitor.visitDice) {
            return visitor.visitDice(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DiceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DiceContext = DiceContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.DIGIT = function () { return this.getToken(DiceNotationParser.DIGIT, 0); };
    NumberContext.prototype.ADDOPERATOR = function () { return this.tryGetToken(DiceNotationParser.ADDOPERATOR, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return DiceNotationParser.RULE_number; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumberContext.prototype.enterRule = function (listener) {
        if (listener.enterNumber) {
            listener.enterNumber(this);
        }
    };
    // @Override
    NumberContext.prototype.exitRule = function (listener) {
        if (listener.exitNumber) {
            listener.exitNumber(this);
        }
    };
    // @Override
    NumberContext.prototype.accept = function (visitor) {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumberContext = NumberContext;
