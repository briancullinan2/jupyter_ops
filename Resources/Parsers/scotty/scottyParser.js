"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/scotty/scotty.g4 by ANTLR 4.7.3-SNAPSHOT
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
var scottyParser = /** @class */ (function (_super) {
    __extends(scottyParser, _super);
    function scottyParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(scottyParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(scottyParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return scottyParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(scottyParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "scotty.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(scottyParser.prototype, "ruleNames", {
        // @Override
        get: function () { return scottyParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(scottyParser.prototype, "serializedATN", {
        // @Override
        get: function () { return scottyParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    scottyParser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, scottyParser.RULE_prog);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 18;
                this.program_lines();
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
    scottyParser.prototype.program_lines = function () {
        var _localctx = new Program_linesContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, scottyParser.RULE_program_lines);
        try {
            this.state = 27;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 20;
                        this.prefix_exp();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 21;
                        this.fn_def();
                        this.state = 22;
                        this.program_lines();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 24;
                        this.var_assign();
                        this.state = 25;
                        this.program_lines();
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
    scottyParser.prototype.var_assign = function () {
        var _localctx = new Var_assignContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, scottyParser.RULE_var_assign);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 29;
                this.identifier();
                this.state = 30;
                this.match(scottyParser.T__0);
                this.state = 31;
                this.prefix_exp();
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
    scottyParser.prototype.fn_def = function () {
        var _localctx = new Fn_defContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, scottyParser.RULE_fn_def);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 33;
                this.match(scottyParser.T__1);
                this.state = 34;
                this.identifier();
                this.state = 35;
                this.identifier();
                this.state = 36;
                this.match(scottyParser.T__0);
                this.state = 37;
                this.prefix_exp();
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
    scottyParser.prototype.prefix_exp = function () {
        var _localctx = new Prefix_expContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, scottyParser.RULE_prefix_exp);
        try {
            this.state = 62;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 39;
                            this.match(scottyParser.T__2);
                            this.state = 40;
                            this.prefix_exp();
                            this.state = 41;
                            this.prefix_exp();
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 43;
                            this.match(scottyParser.T__3);
                            this.state = 44;
                            this.prefix_exp();
                            this.state = 45;
                            this.prefix_exp();
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        {
                            this.state = 47;
                            this.match(scottyParser.T__4);
                            this.state = 48;
                            this.prefix_exp();
                            this.state = 49;
                            this.prefix_exp();
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        {
                            this.state = 51;
                            this.match(scottyParser.T__5);
                            this.state = 52;
                            this.prefix_exp();
                            this.state = 53;
                            this.prefix_exp();
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        {
                            this.state = 55;
                            this.match(scottyParser.T__6);
                            this.state = 56;
                            this.identifier();
                            this.state = 57;
                            this.prefix_exp();
                            this.state = 58;
                            this.match(scottyParser.T__7);
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 60;
                        this.identifier();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 61;
                        this.number();
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
    scottyParser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, scottyParser.RULE_identifier);
        try {
            this.state = 67;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 64;
                        this.match(scottyParser.LETTER);
                        this.state = 65;
                        this.id_tail();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 66;
                        this.match(scottyParser.LETTER);
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
    scottyParser.prototype.id_tail = function () {
        var _localctx = new Id_tailContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, scottyParser.RULE_id_tail);
        try {
            this.state = 75;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 69;
                        this.match(scottyParser.LETTER);
                        this.state = 70;
                        this.id_tail();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 71;
                        this.match(scottyParser.DIGIT);
                        this.state = 72;
                        this.id_tail();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 73;
                        this.match(scottyParser.LETTER);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 74;
                        this.match(scottyParser.DIGIT);
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
    scottyParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, scottyParser.RULE_number);
        try {
            this.state = 80;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case scottyParser.T__3:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 77;
                        this.match(scottyParser.T__3);
                        this.state = 78;
                        this.digits();
                    }
                    break;
                case scottyParser.T__8:
                case scottyParser.DIGIT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 79;
                        this.digits();
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
    scottyParser.prototype.digits = function () {
        var _localctx = new DigitsContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, scottyParser.RULE_digits);
        try {
            this.state = 87;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 82;
                        this.match(scottyParser.DIGIT);
                        this.state = 83;
                        this.digits();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 84;
                        this.match(scottyParser.T__8);
                        this.state = 85;
                        this.digits();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 86;
                        this.match(scottyParser.DIGIT);
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
    Object.defineProperty(scottyParser, "_ATN", {
        get: function () {
            if (!scottyParser.__ATN) {
                scottyParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(scottyParser._serializedATN));
            }
            return scottyParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    scottyParser.T__0 = 1;
    scottyParser.T__1 = 2;
    scottyParser.T__2 = 3;
    scottyParser.T__3 = 4;
    scottyParser.T__4 = 5;
    scottyParser.T__5 = 6;
    scottyParser.T__6 = 7;
    scottyParser.T__7 = 8;
    scottyParser.T__8 = 9;
    scottyParser.DIGIT = 10;
    scottyParser.LETTER = 11;
    scottyParser.WS = 12;
    scottyParser.RULE_prog = 0;
    scottyParser.RULE_program_lines = 1;
    scottyParser.RULE_var_assign = 2;
    scottyParser.RULE_fn_def = 3;
    scottyParser.RULE_prefix_exp = 4;
    scottyParser.RULE_identifier = 5;
    scottyParser.RULE_id_tail = 6;
    scottyParser.RULE_number = 7;
    scottyParser.RULE_digits = 8;
    // tslint:disable:no-trailing-whitespace
    scottyParser.ruleNames = [
        "prog", "program_lines", "var_assign", "fn_def", "prefix_exp", "identifier",
        "id_tail", "number", "digits",
    ];
    scottyParser._LITERAL_NAMES = [
        undefined, "'='", "'fun'", "'+'", "'-'", "'*'", "'/'", "'('", "')'", "'.'",
    ];
    scottyParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "DIGIT", "LETTER", "WS",
    ];
    scottyParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(scottyParser._LITERAL_NAMES, scottyParser._SYMBOLIC_NAMES, []);
    scottyParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E\\\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1E\n\x03\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06A\n\x06\x03\x07\x03\x07\x03\x07" +
        "\x05\x07F\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bN\n\b\x03\t\x03" +
        "\t\x03\t\x05\tS\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\nZ\n\n\x03\n\x02" +
        "\x02\x02\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
        "\x02\x02\x02\x02a\x02\x14\x03\x02\x02\x02\x04\x1D\x03\x02\x02\x02\x06" +
        "\x1F\x03\x02\x02\x02\b#\x03\x02\x02\x02\n@\x03\x02\x02\x02\fE\x03\x02" +
        "\x02\x02\x0EM\x03\x02\x02\x02\x10R\x03\x02\x02\x02\x12Y\x03\x02\x02\x02" +
        "\x14\x15\x05\x04\x03\x02\x15\x03\x03\x02\x02\x02\x16\x1E\x05\n\x06\x02" +
        "\x17\x18\x05\b\x05\x02\x18\x19\x05\x04\x03\x02\x19\x1E\x03\x02\x02\x02" +
        "\x1A\x1B\x05\x06\x04\x02\x1B\x1C\x05\x04\x03\x02\x1C\x1E\x03\x02\x02\x02" +
        "\x1D\x16\x03\x02\x02\x02\x1D\x17\x03\x02\x02\x02\x1D\x1A\x03\x02\x02\x02" +
        "\x1E\x05\x03\x02\x02\x02\x1F \x05\f\x07\x02 !\x07\x03\x02\x02!\"\x05\n" +
        "\x06\x02\"\x07\x03\x02\x02\x02#$\x07\x04\x02\x02$%\x05\f\x07\x02%&\x05" +
        "\f\x07\x02&\'\x07\x03\x02\x02\'(\x05\n\x06\x02(\t\x03\x02\x02\x02)*\x07" +
        "\x05\x02\x02*+\x05\n\x06\x02+,\x05\n\x06\x02,A\x03\x02\x02\x02-.\x07\x06" +
        "\x02\x02./\x05\n\x06\x02/0\x05\n\x06\x020A\x03\x02\x02\x0212\x07\x07\x02" +
        "\x0223\x05\n\x06\x0234\x05\n\x06\x024A\x03\x02\x02\x0256\x07\b\x02\x02" +
        "67\x05\n\x06\x0278\x05\n\x06\x028A\x03\x02\x02\x029:\x07\t\x02\x02:;\x05" +
        "\f\x07\x02;<\x05\n\x06\x02<=\x07\n\x02\x02=A\x03\x02\x02\x02>A\x05\f\x07" +
        "\x02?A\x05\x10\t\x02@)\x03\x02\x02\x02@-\x03\x02\x02\x02@1\x03\x02\x02" +
        "\x02@5\x03\x02\x02\x02@9\x03\x02\x02\x02@>\x03\x02\x02\x02@?\x03\x02\x02" +
        "\x02A\v\x03\x02\x02\x02BC\x07\r\x02\x02CF\x05\x0E\b\x02DF\x07\r\x02\x02" +
        "EB\x03\x02\x02\x02ED\x03\x02\x02\x02F\r\x03\x02\x02\x02GH\x07\r\x02\x02" +
        "HN\x05\x0E\b\x02IJ\x07\f\x02\x02JN\x05\x0E\b\x02KN\x07\r\x02\x02LN\x07" +
        "\f\x02\x02MG\x03\x02\x02\x02MI\x03\x02\x02\x02MK\x03\x02\x02\x02ML\x03" +
        "\x02\x02\x02N\x0F\x03\x02\x02\x02OP\x07\x06\x02\x02PS\x05\x12\n\x02QS" +
        "\x05\x12\n\x02RO\x03\x02\x02\x02RQ\x03\x02\x02\x02S\x11\x03\x02\x02\x02" +
        "TU\x07\f\x02\x02UZ\x05\x12\n\x02VW\x07\v\x02\x02WZ\x05\x12\n\x02XZ\x07" +
        "\f\x02\x02YT\x03\x02\x02\x02YV\x03\x02\x02\x02YX\x03\x02\x02\x02Z\x13" +
        "\x03\x02\x02\x02\b\x1D@EMRY";
    return scottyParser;
}(Parser_1.Parser));
exports.scottyParser = scottyParser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.program_lines = function () {
        return this.getRuleContext(0, Program_linesContext);
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return scottyParser.RULE_prog; },
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
var Program_linesContext = /** @class */ (function (_super) {
    __extends(Program_linesContext, _super);
    function Program_linesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Program_linesContext.prototype.prefix_exp = function () {
        return this.tryGetRuleContext(0, Prefix_expContext);
    };
    Program_linesContext.prototype.fn_def = function () {
        return this.tryGetRuleContext(0, Fn_defContext);
    };
    Program_linesContext.prototype.program_lines = function () {
        return this.tryGetRuleContext(0, Program_linesContext);
    };
    Program_linesContext.prototype.var_assign = function () {
        return this.tryGetRuleContext(0, Var_assignContext);
    };
    Object.defineProperty(Program_linesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return scottyParser.RULE_program_lines; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Program_linesContext.prototype.enterRule = function (listener) {
        if (listener.enterProgram_lines) {
            listener.enterProgram_lines(this);
        }
    };
    // @Override
    Program_linesContext.prototype.exitRule = function (listener) {
        if (listener.exitProgram_lines) {
            listener.exitProgram_lines(this);
        }
    };
    // @Override
    Program_linesContext.prototype.accept = function (visitor) {
        if (visitor.visitProgram_lines) {
            return visitor.visitProgram_lines(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Program_linesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Program_linesContext = Program_linesContext;
var Var_assignContext = /** @class */ (function (_super) {
    __extends(Var_assignContext, _super);
    function Var_assignContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Var_assignContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Var_assignContext.prototype.prefix_exp = function () {
        return this.getRuleContext(0, Prefix_expContext);
    };
    Object.defineProperty(Var_assignContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return scottyParser.RULE_var_assign; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Var_assignContext.prototype.enterRule = function (listener) {
        if (listener.enterVar_assign) {
            listener.enterVar_assign(this);
        }
    };
    // @Override
    Var_assignContext.prototype.exitRule = function (listener) {
        if (listener.exitVar_assign) {
            listener.exitVar_assign(this);
        }
    };
    // @Override
    Var_assignContext.prototype.accept = function (visitor) {
        if (visitor.visitVar_assign) {
            return visitor.visitVar_assign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Var_assignContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Var_assignContext = Var_assignContext;
var Fn_defContext = /** @class */ (function (_super) {
    __extends(Fn_defContext, _super);
    function Fn_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Fn_defContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    Fn_defContext.prototype.prefix_exp = function () {
        return this.getRuleContext(0, Prefix_expContext);
    };
    Object.defineProperty(Fn_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return scottyParser.RULE_fn_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Fn_defContext.prototype.enterRule = function (listener) {
        if (listener.enterFn_def) {
            listener.enterFn_def(this);
        }
    };
    // @Override
    Fn_defContext.prototype.exitRule = function (listener) {
        if (listener.exitFn_def) {
            listener.exitFn_def(this);
        }
    };
    // @Override
    Fn_defContext.prototype.accept = function (visitor) {
        if (visitor.visitFn_def) {
            return visitor.visitFn_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Fn_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Fn_defContext = Fn_defContext;
var Prefix_expContext = /** @class */ (function (_super) {
    __extends(Prefix_expContext, _super);
    function Prefix_expContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Prefix_expContext.prototype.prefix_exp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Prefix_expContext);
        }
        else {
            return this.getRuleContext(i, Prefix_expContext);
        }
    };
    Prefix_expContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Prefix_expContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    Object.defineProperty(Prefix_expContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return scottyParser.RULE_prefix_exp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Prefix_expContext.prototype.enterRule = function (listener) {
        if (listener.enterPrefix_exp) {
            listener.enterPrefix_exp(this);
        }
    };
    // @Override
    Prefix_expContext.prototype.exitRule = function (listener) {
        if (listener.exitPrefix_exp) {
            listener.exitPrefix_exp(this);
        }
    };
    // @Override
    Prefix_expContext.prototype.accept = function (visitor) {
        if (visitor.visitPrefix_exp) {
            return visitor.visitPrefix_exp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Prefix_expContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Prefix_expContext = Prefix_expContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.LETTER = function () { return this.getToken(scottyParser.LETTER, 0); };
    IdentifierContext.prototype.id_tail = function () {
        return this.tryGetRuleContext(0, Id_tailContext);
    };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return scottyParser.RULE_identifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    };
    // @Override
    IdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    };
    // @Override
    IdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierContext = IdentifierContext;
var Id_tailContext = /** @class */ (function (_super) {
    __extends(Id_tailContext, _super);
    function Id_tailContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Id_tailContext.prototype.LETTER = function () { return this.tryGetToken(scottyParser.LETTER, 0); };
    Id_tailContext.prototype.id_tail = function () {
        return this.tryGetRuleContext(0, Id_tailContext);
    };
    Id_tailContext.prototype.DIGIT = function () { return this.tryGetToken(scottyParser.DIGIT, 0); };
    Object.defineProperty(Id_tailContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return scottyParser.RULE_id_tail; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Id_tailContext.prototype.enterRule = function (listener) {
        if (listener.enterId_tail) {
            listener.enterId_tail(this);
        }
    };
    // @Override
    Id_tailContext.prototype.exitRule = function (listener) {
        if (listener.exitId_tail) {
            listener.exitId_tail(this);
        }
    };
    // @Override
    Id_tailContext.prototype.accept = function (visitor) {
        if (visitor.visitId_tail) {
            return visitor.visitId_tail(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Id_tailContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Id_tailContext = Id_tailContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.digits = function () {
        return this.getRuleContext(0, DigitsContext);
    };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return scottyParser.RULE_number; },
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
var DigitsContext = /** @class */ (function (_super) {
    __extends(DigitsContext, _super);
    function DigitsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DigitsContext.prototype.DIGIT = function () { return this.tryGetToken(scottyParser.DIGIT, 0); };
    DigitsContext.prototype.digits = function () {
        return this.tryGetRuleContext(0, DigitsContext);
    };
    Object.defineProperty(DigitsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return scottyParser.RULE_digits; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DigitsContext.prototype.enterRule = function (listener) {
        if (listener.enterDigits) {
            listener.enterDigits(this);
        }
    };
    // @Override
    DigitsContext.prototype.exitRule = function (listener) {
        if (listener.exitDigits) {
            listener.exitDigits(this);
        }
    };
    // @Override
    DigitsContext.prototype.accept = function (visitor) {
        if (visitor.visitDigits) {
            return visitor.visitDigits(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DigitsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DigitsContext = DigitsContext;
