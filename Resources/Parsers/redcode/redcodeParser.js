"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/redcode/redcode.g4 by ANTLR 4.7.3-SNAPSHOT
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
var redcodeParser = /** @class */ (function (_super) {
    __extends(redcodeParser, _super);
    function redcodeParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(redcodeParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(redcodeParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return redcodeParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(redcodeParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "redcode.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(redcodeParser.prototype, "ruleNames", {
        // @Override
        get: function () { return redcodeParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(redcodeParser.prototype, "serializedATN", {
        // @Override
        get: function () { return redcodeParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    redcodeParser.prototype.file = function () {
        var _localctx = new FileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, redcodeParser.RULE_file);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 17;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 16;
                            this.line();
                        }
                    }
                    this.state = 19;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (redcodeParser.DAT - 17)) | (1 << (redcodeParser.MOV - 17)) | (1 << (redcodeParser.ADD - 17)) | (1 << (redcodeParser.SUB - 17)) | (1 << (redcodeParser.MUL - 17)) | (1 << (redcodeParser.DIV - 17)) | (1 << (redcodeParser.MOD - 17)) | (1 << (redcodeParser.JMP - 17)) | (1 << (redcodeParser.JMZ - 17)) | (1 << (redcodeParser.JMN - 17)) | (1 << (redcodeParser.DJN - 17)) | (1 << (redcodeParser.CMP - 17)) | (1 << (redcodeParser.SLT - 17)) | (1 << (redcodeParser.DJZ - 17)) | (1 << (redcodeParser.SPL - 17)) | (1 << (redcodeParser.ORG - 17)) | (1 << (redcodeParser.COMMENT - 17)))) !== 0));
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
    redcodeParser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, redcodeParser.RULE_line);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 23;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case redcodeParser.COMMENT:
                        {
                            this.state = 21;
                            this.comment();
                        }
                        break;
                    case redcodeParser.DAT:
                    case redcodeParser.MOV:
                    case redcodeParser.ADD:
                    case redcodeParser.SUB:
                    case redcodeParser.MUL:
                    case redcodeParser.DIV:
                    case redcodeParser.MOD:
                    case redcodeParser.JMP:
                    case redcodeParser.JMZ:
                    case redcodeParser.JMN:
                    case redcodeParser.DJN:
                    case redcodeParser.CMP:
                    case redcodeParser.SLT:
                    case redcodeParser.DJZ:
                    case redcodeParser.SPL:
                    case redcodeParser.ORG:
                        {
                            this.state = 22;
                            this.instruction();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 25;
                this.match(redcodeParser.EOL);
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
    redcodeParser.prototype.instruction = function () {
        var _localctx = new InstructionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, redcodeParser.RULE_instruction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 27;
                this.opcode();
                this.state = 30;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === redcodeParser.T__0) {
                    {
                        this.state = 28;
                        this.match(redcodeParser.T__0);
                        this.state = 29;
                        this.modifier();
                    }
                }
                this.state = 33;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << redcodeParser.T__2) | (1 << redcodeParser.T__3) | (1 << redcodeParser.T__4) | (1 << redcodeParser.T__5) | (1 << redcodeParser.T__6))) !== 0)) {
                    {
                        this.state = 32;
                        this.mmode();
                    }
                }
                this.state = 35;
                this.number();
                this.state = 41;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === redcodeParser.T__1) {
                    {
                        this.state = 36;
                        this.match(redcodeParser.T__1);
                        this.state = 38;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << redcodeParser.T__2) | (1 << redcodeParser.T__3) | (1 << redcodeParser.T__4) | (1 << redcodeParser.T__5) | (1 << redcodeParser.T__6))) !== 0)) {
                            {
                                this.state = 37;
                                this.mmode();
                            }
                        }
                        this.state = 40;
                        this.number();
                    }
                }
                this.state = 44;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === redcodeParser.COMMENT) {
                    {
                        this.state = 43;
                        this.comment();
                    }
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
    redcodeParser.prototype.opcode = function () {
        var _localctx = new OpcodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, redcodeParser.RULE_opcode);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 46;
                _la = this._input.LA(1);
                if (!(((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (redcodeParser.DAT - 17)) | (1 << (redcodeParser.MOV - 17)) | (1 << (redcodeParser.ADD - 17)) | (1 << (redcodeParser.SUB - 17)) | (1 << (redcodeParser.MUL - 17)) | (1 << (redcodeParser.DIV - 17)) | (1 << (redcodeParser.MOD - 17)) | (1 << (redcodeParser.JMP - 17)) | (1 << (redcodeParser.JMZ - 17)) | (1 << (redcodeParser.JMN - 17)) | (1 << (redcodeParser.DJN - 17)) | (1 << (redcodeParser.CMP - 17)) | (1 << (redcodeParser.SLT - 17)) | (1 << (redcodeParser.DJZ - 17)) | (1 << (redcodeParser.SPL - 17)) | (1 << (redcodeParser.ORG - 17)))) !== 0))) {
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
    redcodeParser.prototype.modifier = function () {
        var _localctx = new ModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, redcodeParser.RULE_modifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 48;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << redcodeParser.A) | (1 << redcodeParser.B) | (1 << redcodeParser.AB) | (1 << redcodeParser.BA) | (1 << redcodeParser.F) | (1 << redcodeParser.X) | (1 << redcodeParser.I))) !== 0))) {
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
    redcodeParser.prototype.mmode = function () {
        var _localctx = new MmodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, redcodeParser.RULE_mmode);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 50;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << redcodeParser.T__2) | (1 << redcodeParser.T__3) | (1 << redcodeParser.T__4) | (1 << redcodeParser.T__5) | (1 << redcodeParser.T__6))) !== 0))) {
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
    redcodeParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, redcodeParser.RULE_number);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 53;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === redcodeParser.T__7 || _la === redcodeParser.T__8) {
                    {
                        this.state = 52;
                        _la = this._input.LA(1);
                        if (!(_la === redcodeParser.T__7 || _la === redcodeParser.T__8)) {
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
                this.state = 55;
                this.match(redcodeParser.NUMBER);
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
    redcodeParser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, redcodeParser.RULE_comment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 57;
                this.match(redcodeParser.COMMENT);
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
    Object.defineProperty(redcodeParser, "_ATN", {
        get: function () {
            if (!redcodeParser.__ATN) {
                redcodeParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(redcodeParser._serializedATN));
            }
            return redcodeParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    redcodeParser.T__0 = 1;
    redcodeParser.T__1 = 2;
    redcodeParser.T__2 = 3;
    redcodeParser.T__3 = 4;
    redcodeParser.T__4 = 5;
    redcodeParser.T__5 = 6;
    redcodeParser.T__6 = 7;
    redcodeParser.T__7 = 8;
    redcodeParser.T__8 = 9;
    redcodeParser.A = 10;
    redcodeParser.B = 11;
    redcodeParser.AB = 12;
    redcodeParser.BA = 13;
    redcodeParser.F = 14;
    redcodeParser.X = 15;
    redcodeParser.I = 16;
    redcodeParser.DAT = 17;
    redcodeParser.MOV = 18;
    redcodeParser.ADD = 19;
    redcodeParser.SUB = 20;
    redcodeParser.MUL = 21;
    redcodeParser.DIV = 22;
    redcodeParser.MOD = 23;
    redcodeParser.JMP = 24;
    redcodeParser.JMZ = 25;
    redcodeParser.JMN = 26;
    redcodeParser.DJN = 27;
    redcodeParser.CMP = 28;
    redcodeParser.SLT = 29;
    redcodeParser.DJZ = 30;
    redcodeParser.SPL = 31;
    redcodeParser.ORG = 32;
    redcodeParser.NUMBER = 33;
    redcodeParser.COMMENT = 34;
    redcodeParser.EOL = 35;
    redcodeParser.WS = 36;
    redcodeParser.RULE_file = 0;
    redcodeParser.RULE_line = 1;
    redcodeParser.RULE_instruction = 2;
    redcodeParser.RULE_opcode = 3;
    redcodeParser.RULE_modifier = 4;
    redcodeParser.RULE_mmode = 5;
    redcodeParser.RULE_number = 6;
    redcodeParser.RULE_comment = 7;
    // tslint:disable:no-trailing-whitespace
    redcodeParser.ruleNames = [
        "file", "line", "instruction", "opcode", "modifier", "mmode", "number",
        "comment",
    ];
    redcodeParser._LITERAL_NAMES = [
        undefined, "'.'", "','", "'#'", "'$'", "'@'", "'<'", "'>'", "'+'", "'-'",
        "'A'", "'B'", "'AB'", "'BA'", "'F'", "'X'", "'I'", "'DAT'", "'MOV'", "'ADD'",
        "'SUB'", "'MUL'", "'DIV'", "'MOD'", "'JMP'", "'JMZ'", "'JMN'", "'DJN'",
        "'CMP'", "'SLT'", "'DJZ'", "'SPL'", "'ORG'",
    ];
    redcodeParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "A", "B", "AB", "BA", "F", "X", "I",
        "DAT", "MOV", "ADD", "SUB", "MUL", "DIV", "MOD", "JMP", "JMZ", "JMN",
        "DJN", "CMP", "SLT", "DJZ", "SPL", "ORG", "NUMBER", "COMMENT", "EOL",
        "WS",
    ];
    redcodeParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(redcodeParser._LITERAL_NAMES, redcodeParser._SYMBOLIC_NAMES, []);
    redcodeParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03&>\x04\x02\t\x02" +
        "\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
        "\x04\b\t\b\x04\t\t\t\x03\x02\x06\x02\x14\n\x02\r\x02\x0E\x02\x15\x03\x03" +
        "\x03\x03\x05\x03\x1A\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x05" +
        "\x04!\n\x04\x03\x04\x05\x04$\n\x04\x03\x04\x03\x04\x03\x04\x05\x04)\n" +
        "\x04\x03\x04\x05\x04,\n\x04\x03\x04\x05\x04/\n\x04\x03\x05\x03\x05\x03" +
        "\x06\x03\x06\x03\x07\x03\x07\x03\b\x05\b8\n\b\x03\b\x03\b\x03\t\x03\t" +
        "\x03\t\x02\x02\x02\n\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
        "\x10\x02\x02\x06\x03\x02\x13\"\x03\x02\f\x12\x03\x02\x05\t\x03\x02\n\v" +
        "\x02=\x02\x13\x03\x02\x02\x02\x04\x19\x03\x02\x02\x02\x06\x1D\x03\x02" +
        "\x02\x02\b0\x03\x02\x02\x02\n2\x03\x02\x02\x02\f4\x03\x02\x02\x02\x0E" +
        "7\x03\x02\x02\x02\x10;\x03\x02\x02\x02\x12\x14\x05\x04\x03\x02\x13\x12" +
        "\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15\x16" +
        "\x03\x02\x02\x02\x16\x03\x03\x02\x02\x02\x17\x1A\x05\x10\t\x02\x18\x1A" +
        "\x05\x06\x04\x02\x19\x17\x03\x02\x02\x02\x19\x18\x03\x02\x02\x02\x1A\x1B" +
        "\x03\x02\x02\x02\x1B\x1C\x07%\x02\x02\x1C\x05\x03\x02\x02\x02\x1D \x05" +
        "\b\x05\x02\x1E\x1F\x07\x03\x02\x02\x1F!\x05\n\x06\x02 \x1E\x03\x02\x02" +
        "\x02 !\x03\x02\x02\x02!#\x03\x02\x02\x02\"$\x05\f\x07\x02#\"\x03\x02\x02" +
        "\x02#$\x03\x02\x02\x02$%\x03\x02\x02\x02%+\x05\x0E\b\x02&(\x07\x04\x02" +
        "\x02\')\x05\f\x07\x02(\'\x03\x02\x02\x02()\x03\x02\x02\x02)*\x03\x02\x02" +
        "\x02*,\x05\x0E\b\x02+&\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x03\x02\x02" +
        "\x02-/\x05\x10\t\x02.-\x03\x02\x02\x02./\x03\x02\x02\x02/\x07\x03\x02" +
        "\x02\x0201\t\x02\x02\x021\t\x03\x02\x02\x0223\t\x03\x02\x023\v\x03\x02" +
        "\x02\x0245\t\x04\x02\x025\r\x03\x02\x02\x0268\t\x05\x02\x0276\x03\x02" +
        "\x02\x0278\x03\x02\x02\x0289\x03\x02\x02\x029:\x07#\x02\x02:\x0F\x03\x02" +
        "\x02\x02;<\x07$\x02\x02<\x11\x03\x02\x02\x02\n\x15\x19 #(+.7";
    return redcodeParser;
}(Parser_1.Parser));
exports.redcodeParser = redcodeParser;
var FileContext = /** @class */ (function (_super) {
    __extends(FileContext, _super);
    function FileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FileContext.prototype.line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        }
        else {
            return this.getRuleContext(i, LineContext);
        }
    };
    Object.defineProperty(FileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return redcodeParser.RULE_file; },
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
var LineContext = /** @class */ (function (_super) {
    __extends(LineContext, _super);
    function LineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineContext.prototype.EOL = function () { return this.getToken(redcodeParser.EOL, 0); };
    LineContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    LineContext.prototype.instruction = function () {
        return this.tryGetRuleContext(0, InstructionContext);
    };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return redcodeParser.RULE_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineContext.prototype.enterRule = function (listener) {
        if (listener.enterLine) {
            listener.enterLine(this);
        }
    };
    // @Override
    LineContext.prototype.exitRule = function (listener) {
        if (listener.exitLine) {
            listener.exitLine(this);
        }
    };
    // @Override
    LineContext.prototype.accept = function (visitor) {
        if (visitor.visitLine) {
            return visitor.visitLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineContext = LineContext;
var InstructionContext = /** @class */ (function (_super) {
    __extends(InstructionContext, _super);
    function InstructionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InstructionContext.prototype.opcode = function () {
        return this.getRuleContext(0, OpcodeContext);
    };
    InstructionContext.prototype.number = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
        }
    };
    InstructionContext.prototype.modifier = function () {
        return this.tryGetRuleContext(0, ModifierContext);
    };
    InstructionContext.prototype.mmode = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MmodeContext);
        }
        else {
            return this.getRuleContext(i, MmodeContext);
        }
    };
    InstructionContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    Object.defineProperty(InstructionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return redcodeParser.RULE_instruction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InstructionContext.prototype.enterRule = function (listener) {
        if (listener.enterInstruction) {
            listener.enterInstruction(this);
        }
    };
    // @Override
    InstructionContext.prototype.exitRule = function (listener) {
        if (listener.exitInstruction) {
            listener.exitInstruction(this);
        }
    };
    // @Override
    InstructionContext.prototype.accept = function (visitor) {
        if (visitor.visitInstruction) {
            return visitor.visitInstruction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InstructionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InstructionContext = InstructionContext;
var OpcodeContext = /** @class */ (function (_super) {
    __extends(OpcodeContext, _super);
    function OpcodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OpcodeContext.prototype.DAT = function () { return this.tryGetToken(redcodeParser.DAT, 0); };
    OpcodeContext.prototype.MOV = function () { return this.tryGetToken(redcodeParser.MOV, 0); };
    OpcodeContext.prototype.ADD = function () { return this.tryGetToken(redcodeParser.ADD, 0); };
    OpcodeContext.prototype.SUB = function () { return this.tryGetToken(redcodeParser.SUB, 0); };
    OpcodeContext.prototype.MUL = function () { return this.tryGetToken(redcodeParser.MUL, 0); };
    OpcodeContext.prototype.DIV = function () { return this.tryGetToken(redcodeParser.DIV, 0); };
    OpcodeContext.prototype.MOD = function () { return this.tryGetToken(redcodeParser.MOD, 0); };
    OpcodeContext.prototype.JMP = function () { return this.tryGetToken(redcodeParser.JMP, 0); };
    OpcodeContext.prototype.JMZ = function () { return this.tryGetToken(redcodeParser.JMZ, 0); };
    OpcodeContext.prototype.JMN = function () { return this.tryGetToken(redcodeParser.JMN, 0); };
    OpcodeContext.prototype.DJN = function () { return this.tryGetToken(redcodeParser.DJN, 0); };
    OpcodeContext.prototype.CMP = function () { return this.tryGetToken(redcodeParser.CMP, 0); };
    OpcodeContext.prototype.SLT = function () { return this.tryGetToken(redcodeParser.SLT, 0); };
    OpcodeContext.prototype.SPL = function () { return this.tryGetToken(redcodeParser.SPL, 0); };
    OpcodeContext.prototype.ORG = function () { return this.tryGetToken(redcodeParser.ORG, 0); };
    OpcodeContext.prototype.DJZ = function () { return this.tryGetToken(redcodeParser.DJZ, 0); };
    Object.defineProperty(OpcodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return redcodeParser.RULE_opcode; },
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
var ModifierContext = /** @class */ (function (_super) {
    __extends(ModifierContext, _super);
    function ModifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModifierContext.prototype.A = function () { return this.tryGetToken(redcodeParser.A, 0); };
    ModifierContext.prototype.B = function () { return this.tryGetToken(redcodeParser.B, 0); };
    ModifierContext.prototype.AB = function () { return this.tryGetToken(redcodeParser.AB, 0); };
    ModifierContext.prototype.BA = function () { return this.tryGetToken(redcodeParser.BA, 0); };
    ModifierContext.prototype.F = function () { return this.tryGetToken(redcodeParser.F, 0); };
    ModifierContext.prototype.X = function () { return this.tryGetToken(redcodeParser.X, 0); };
    ModifierContext.prototype.I = function () { return this.tryGetToken(redcodeParser.I, 0); };
    Object.defineProperty(ModifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return redcodeParser.RULE_modifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModifierContext.prototype.enterRule = function (listener) {
        if (listener.enterModifier) {
            listener.enterModifier(this);
        }
    };
    // @Override
    ModifierContext.prototype.exitRule = function (listener) {
        if (listener.exitModifier) {
            listener.exitModifier(this);
        }
    };
    // @Override
    ModifierContext.prototype.accept = function (visitor) {
        if (visitor.visitModifier) {
            return visitor.visitModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModifierContext = ModifierContext;
var MmodeContext = /** @class */ (function (_super) {
    __extends(MmodeContext, _super);
    function MmodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(MmodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return redcodeParser.RULE_mmode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MmodeContext.prototype.enterRule = function (listener) {
        if (listener.enterMmode) {
            listener.enterMmode(this);
        }
    };
    // @Override
    MmodeContext.prototype.exitRule = function (listener) {
        if (listener.exitMmode) {
            listener.exitMmode(this);
        }
    };
    // @Override
    MmodeContext.prototype.accept = function (visitor) {
        if (visitor.visitMmode) {
            return visitor.visitMmode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MmodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MmodeContext = MmodeContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.NUMBER = function () { return this.getToken(redcodeParser.NUMBER, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return redcodeParser.RULE_number; },
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
var CommentContext = /** @class */ (function (_super) {
    __extends(CommentContext, _super);
    function CommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentContext.prototype.COMMENT = function () { return this.getToken(redcodeParser.COMMENT, 0); };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return redcodeParser.RULE_comment; },
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
