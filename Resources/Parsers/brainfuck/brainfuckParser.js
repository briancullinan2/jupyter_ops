"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/brainfuck/brainfuck.g4 by ANTLR 4.7.3-SNAPSHOT
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
var brainfuckParser = /** @class */ (function (_super) {
    __extends(brainfuckParser, _super);
    function brainfuckParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(brainfuckParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(brainfuckParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return brainfuckParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(brainfuckParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "brainfuck.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(brainfuckParser.prototype, "ruleNames", {
        // @Override
        get: function () { return brainfuckParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(brainfuckParser.prototype, "serializedATN", {
        // @Override
        get: function () { return brainfuckParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    brainfuckParser.prototype.file = function () {
        var _localctx = new FileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, brainfuckParser.RULE_file);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 9;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << brainfuckParser.GT) | (1 << brainfuckParser.LT) | (1 << brainfuckParser.PLUS) | (1 << brainfuckParser.MINUS) | (1 << brainfuckParser.DOT) | (1 << brainfuckParser.COMMA) | (1 << brainfuckParser.LPAREN))) !== 0)) {
                    {
                        {
                            this.state = 6;
                            this.statement();
                        }
                    }
                    this.state = 11;
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
    brainfuckParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, brainfuckParser.RULE_statement);
        var _la;
        try {
            this.state = 21;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case brainfuckParser.GT:
                case brainfuckParser.LT:
                case brainfuckParser.PLUS:
                case brainfuckParser.MINUS:
                case brainfuckParser.DOT:
                case brainfuckParser.COMMA:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 12;
                        this.opcode();
                    }
                    break;
                case brainfuckParser.LPAREN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 13;
                        this.match(brainfuckParser.LPAREN);
                        this.state = 17;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << brainfuckParser.GT) | (1 << brainfuckParser.LT) | (1 << brainfuckParser.PLUS) | (1 << brainfuckParser.MINUS) | (1 << brainfuckParser.DOT) | (1 << brainfuckParser.COMMA) | (1 << brainfuckParser.LPAREN))) !== 0)) {
                            {
                                {
                                    this.state = 14;
                                    this.statement();
                                }
                            }
                            this.state = 19;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 20;
                        this.match(brainfuckParser.RPAREN);
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
    brainfuckParser.prototype.opcode = function () {
        var _localctx = new OpcodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, brainfuckParser.RULE_opcode);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 23;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << brainfuckParser.GT) | (1 << brainfuckParser.LT) | (1 << brainfuckParser.PLUS) | (1 << brainfuckParser.MINUS) | (1 << brainfuckParser.DOT) | (1 << brainfuckParser.COMMA))) !== 0))) {
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
    Object.defineProperty(brainfuckParser, "_ATN", {
        get: function () {
            if (!brainfuckParser.__ATN) {
                brainfuckParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(brainfuckParser._serializedATN));
            }
            return brainfuckParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    brainfuckParser.GT = 1;
    brainfuckParser.LT = 2;
    brainfuckParser.PLUS = 3;
    brainfuckParser.MINUS = 4;
    brainfuckParser.DOT = 5;
    brainfuckParser.COMMA = 6;
    brainfuckParser.LPAREN = 7;
    brainfuckParser.RPAREN = 8;
    brainfuckParser.WS = 9;
    brainfuckParser.RULE_file = 0;
    brainfuckParser.RULE_statement = 1;
    brainfuckParser.RULE_opcode = 2;
    // tslint:disable:no-trailing-whitespace
    brainfuckParser.ruleNames = [
        "file", "statement", "opcode",
    ];
    brainfuckParser._LITERAL_NAMES = [
        undefined, "'>'", "'<'", "'+'", "'-'", "'.'", "','", "'['", "']'",
    ];
    brainfuckParser._SYMBOLIC_NAMES = [
        undefined, "GT", "LT", "PLUS", "MINUS", "DOT", "COMMA", "LPAREN", "RPAREN",
        "WS",
    ];
    brainfuckParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(brainfuckParser._LITERAL_NAMES, brainfuckParser._SYMBOLIC_NAMES, []);
    brainfuckParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\v\x1C\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x07\x02\n\n\x02\f\x02\x0E\x02" +
        "\r\v\x02\x03\x03\x03\x03\x03\x03\x07\x03\x12\n\x03\f\x03\x0E\x03\x15\v" +
        "\x03\x03\x03\x05\x03\x18\n\x03\x03\x04\x03\x04\x03\x04\x02\x02\x02\x05" +
        "\x02\x02\x04\x02\x06\x02\x02\x03\x03\x02\x03\b\x02\x1B\x02\v\x03\x02\x02" +
        "\x02\x04\x17\x03\x02\x02\x02\x06\x19\x03\x02\x02\x02\b\n\x05\x04\x03\x02" +
        "\t\b\x03\x02\x02\x02\n\r\x03\x02\x02\x02\v\t\x03\x02\x02\x02\v\f\x03\x02" +
        "\x02\x02\f\x03\x03\x02\x02\x02\r\v\x03\x02\x02\x02\x0E\x18\x05\x06\x04" +
        "\x02\x0F\x13\x07\t\x02\x02\x10\x12\x05\x04\x03\x02\x11\x10\x03\x02\x02" +
        "\x02\x12\x15\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x13\x14\x03\x02\x02" +
        "\x02\x14\x16\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x16\x18\x07\n\x02" +
        "\x02\x17\x0E\x03\x02\x02\x02\x17\x0F\x03\x02\x02\x02\x18\x05\x03\x02\x02" +
        "\x02\x19\x1A\t\x02\x02\x02\x1A\x07\x03\x02\x02\x02\x05\v\x13\x17";
    return brainfuckParser;
}(Parser_1.Parser));
exports.brainfuckParser = brainfuckParser;
var FileContext = /** @class */ (function (_super) {
    __extends(FileContext, _super);
    function FileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FileContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(FileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return brainfuckParser.RULE_file; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FileContext.prototype.enterRule = function (listener) {
        if (listener.enterFile) {
            listener.enterFile(this);
        }
    };
    // @Override
    FileContext.prototype.exitRule = function (listener) {
        if (listener.exitFile) {
            listener.exitFile(this);
        }
    };
    // @Override
    FileContext.prototype.accept = function (visitor) {
        if (visitor.visitFile) {
            return visitor.visitFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FileContext = FileContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.opcode = function () {
        return this.tryGetRuleContext(0, OpcodeContext);
    };
    StatementContext.prototype.LPAREN = function () { return this.tryGetToken(brainfuckParser.LPAREN, 0); };
    StatementContext.prototype.RPAREN = function () { return this.tryGetToken(brainfuckParser.RPAREN, 0); };
    StatementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return brainfuckParser.RULE_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementContext.prototype.enterRule = function (listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    };
    // @Override
    StatementContext.prototype.exitRule = function (listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    };
    // @Override
    StatementContext.prototype.accept = function (visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementContext = StatementContext;
var OpcodeContext = /** @class */ (function (_super) {
    __extends(OpcodeContext, _super);
    function OpcodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OpcodeContext.prototype.GT = function () { return this.tryGetToken(brainfuckParser.GT, 0); };
    OpcodeContext.prototype.LT = function () { return this.tryGetToken(brainfuckParser.LT, 0); };
    OpcodeContext.prototype.PLUS = function () { return this.tryGetToken(brainfuckParser.PLUS, 0); };
    OpcodeContext.prototype.MINUS = function () { return this.tryGetToken(brainfuckParser.MINUS, 0); };
    OpcodeContext.prototype.DOT = function () { return this.tryGetToken(brainfuckParser.DOT, 0); };
    OpcodeContext.prototype.COMMA = function () { return this.tryGetToken(brainfuckParser.COMMA, 0); };
    Object.defineProperty(OpcodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return brainfuckParser.RULE_opcode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OpcodeContext.prototype.enterRule = function (listener) {
        if (listener.enterOpcode) {
            listener.enterOpcode(this);
        }
    };
    // @Override
    OpcodeContext.prototype.exitRule = function (listener) {
        if (listener.exitOpcode) {
            listener.exitOpcode(this);
        }
    };
    // @Override
    OpcodeContext.prototype.accept = function (visitor) {
        if (visitor.visitOpcode) {
            return visitor.visitOpcode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OpcodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OpcodeContext = OpcodeContext;
