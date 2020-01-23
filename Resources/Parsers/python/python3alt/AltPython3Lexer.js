"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/python/python3alt/AltPython3.g4 by ANTLR 4.7.3-SNAPSHOT
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ATN_1 = require("antlr4ts/atn/ATN");
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var Lexer_1 = require("antlr4ts/Lexer");
var LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
var Decorators_1 = require("antlr4ts/Decorators");
var RuleContext_1 = require("antlr4ts/RuleContext");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var AltPython3Lexer = /** @class */ (function (_super) {
    __extends(AltPython3Lexer, _super);
    function AltPython3Lexer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tokens = new java.util.LinkedList();
        _this.indents = new java.util.Stack();
        _this.opened = 0;
        _this.lastToken = null;
        return _this;
    }
    Object.defineProperty(AltPython3Lexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return AltPython3Lexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    AltPython3Lexer.prototype.emit = function (Token, t) {
        _super.prototype.setToken.call(this, t);
        tokens.offer(t);
    };
    AltPython3Lexer.prototype.nextToken = function () {
        // Check if the end-of-file is ahead and there are still some DEDENTS expected.
        if (_input.LA(1) == EOF && !this.indents.isEmpty()) {
            // Remove any trailing EOF tokens from our buffer.
            for (int; i = tokens.size() - 1; i >= 0)
                ;
            i--;
            {
                if (tokens.get(i).getType() == EOF) {
                    tokens.remove(i);
                }
            }
            // First emit an extra line break that serves as the end of the statement.
            this.emit(commonToken(AltPython3Parser.NEWLINE, "\n"));
            // Now emit as much DEDENT tokens as needed.
            while (!indents.isEmpty()) {
                this.emit(createDedent());
                indents.pop();
            }
            // Put the EOF back on the token stream.
            this.emit(commonToken(AltPython3Parser.EOF, "<EOF>"));
        }
        Token;
        next = _super.prototype.nextToken.call(this);
        if (next.getChannel() == Token.DEFAULT_CHANNEL) {
            // Keep track of the last token on the default channel.
            this.lastToken = next;
        }
        return tokens.isEmpty() ? next : tokens.poll();
    };
    AltPython3Lexer.prototype.createDedent = function () {
        CommonToken;
        dedent = commonToken(AltPython3Parser.DEDENT, "");
        dedent.setLine(this.lastToken.getLine());
        return dedent;
    };
    AltPython3Lexer.prototype.commonToken = function (int, type, String, text) {
        int;
        stop = this.getCharIndex() - 1;
        int;
        start = text.isEmpty() ? stop : stop - text.length() + 1;
        return new CommonToken(this._tokenFactorySourcePair, type, DEFAULT_TOKEN_CHANNEL, start, stop);
    };
    AltPython3Lexer.prototype.getIndentationCount = function (String, spaces) {
        int;
        count = 0;
        for (char; ch; )
            : spaces.toCharArray();
        {
            switch (ch) {
                case '\t':
                    count += 8 - (count % 8);
                    break;
                default:
                    // A normal space char.
                    count++;
            }
        }
        return count;
    };
    AltPython3Lexer.PRINT = 1;
    AltPython3Lexer.DEF = 2;
    AltPython3Lexer.RETURN = 3;
    AltPython3Lexer.RAISE = 4;
    AltPython3Lexer.FROM = 5;
    AltPython3Lexer.IMPORT = 6;
    AltPython3Lexer.AS = 7;
    AltPython3Lexer.GLOBAL = 8;
    AltPython3Lexer.NONLOCAL = 9;
    AltPython3Lexer.ASSERT = 10;
    AltPython3Lexer.IF = 11;
    AltPython3Lexer.ELIF = 12;
    AltPython3Lexer.ELSE = 13;
    AltPython3Lexer.WHILE = 14;
    AltPython3Lexer.FOR = 15;
    AltPython3Lexer.IN = 16;
    AltPython3Lexer.TRY = 17;
    AltPython3Lexer.FINALLY = 18;
    AltPython3Lexer.WITH = 19;
    AltPython3Lexer.EXCEPT = 20;
    AltPython3Lexer.LAMBDA = 21;
    AltPython3Lexer.OR = 22;
    AltPython3Lexer.AND = 23;
    AltPython3Lexer.NOT = 24;
    AltPython3Lexer.IS = 25;
    AltPython3Lexer.NONE = 26;
    AltPython3Lexer.TRUE = 27;
    AltPython3Lexer.FALSE = 28;
    AltPython3Lexer.CLASS = 29;
    AltPython3Lexer.YIELD = 30;
    AltPython3Lexer.DEL = 31;
    AltPython3Lexer.PASS = 32;
    AltPython3Lexer.CONTINUE = 33;
    AltPython3Lexer.BREAK = 34;
    AltPython3Lexer.NEWLINE = 35;
    AltPython3Lexer.NAME = 36;
    AltPython3Lexer.STRING_LITERAL = 37;
    AltPython3Lexer.BYTES_LITERAL = 38;
    AltPython3Lexer.DECIMAL_INTEGER = 39;
    AltPython3Lexer.OCT_INTEGER = 40;
    AltPython3Lexer.HEX_INTEGER = 41;
    AltPython3Lexer.BIN_INTEGER = 42;
    AltPython3Lexer.FLOAT_NUMBER = 43;
    AltPython3Lexer.IMAG_NUMBER = 44;
    AltPython3Lexer.DOT = 45;
    AltPython3Lexer.ELLIPSIS = 46;
    AltPython3Lexer.STAR = 47;
    AltPython3Lexer.OPEN_PAREN = 48;
    AltPython3Lexer.CLOSE_PAREN = 49;
    AltPython3Lexer.COMMA = 50;
    AltPython3Lexer.COLON = 51;
    AltPython3Lexer.SEMI_COLON = 52;
    AltPython3Lexer.POWER = 53;
    AltPython3Lexer.ASSIGN = 54;
    AltPython3Lexer.OPEN_BRACK = 55;
    AltPython3Lexer.CLOSE_BRACK = 56;
    AltPython3Lexer.OR_OP = 57;
    AltPython3Lexer.XOR = 58;
    AltPython3Lexer.AND_OP = 59;
    AltPython3Lexer.LEFT_SHIFT = 60;
    AltPython3Lexer.RIGHT_SHIFT = 61;
    AltPython3Lexer.ADD = 62;
    AltPython3Lexer.MINUS = 63;
    AltPython3Lexer.DIV = 64;
    AltPython3Lexer.MOD = 65;
    AltPython3Lexer.IDIV = 66;
    AltPython3Lexer.NOT_OP = 67;
    AltPython3Lexer.OPEN_BRACE = 68;
    AltPython3Lexer.CLOSE_BRACE = 69;
    AltPython3Lexer.LESS_THAN = 70;
    AltPython3Lexer.GREATER_THAN = 71;
    AltPython3Lexer.EQUALS = 72;
    AltPython3Lexer.GT_EQ = 73;
    AltPython3Lexer.LT_EQ = 74;
    AltPython3Lexer.NOT_EQ_1 = 75;
    AltPython3Lexer.NOT_EQ_2 = 76;
    AltPython3Lexer.AT = 77;
    AltPython3Lexer.ARROW = 78;
    AltPython3Lexer.ADD_ASSIGN = 79;
    AltPython3Lexer.SUB_ASSIGN = 80;
    AltPython3Lexer.MULT_ASSIGN = 81;
    AltPython3Lexer.AT_ASSIGN = 82;
    AltPython3Lexer.DIV_ASSIGN = 83;
    AltPython3Lexer.MOD_ASSIGN = 84;
    AltPython3Lexer.AND_ASSIGN = 85;
    AltPython3Lexer.OR_ASSIGN = 86;
    AltPython3Lexer.XOR_ASSIGN = 87;
    AltPython3Lexer.LEFT_SHIFT_ASSIGN = 88;
    AltPython3Lexer.RIGHT_SHIFT_ASSIGN = 89;
    AltPython3Lexer.POWER_ASSIGN = 90;
    AltPython3Lexer.IDIV_ASSIGN = 91;
    AltPython3Lexer.SKIP_ = 92;
    AltPython3Lexer.UNKNOWN_CHAR = 93;
    // tslint:disable:no-trailing-whitespace
    AltPython3Lexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    AltPython3Lexer.modeNames = [
        "DEFAULT_MODE",
    ];
    AltPython3Lexer.ruleNames = [
        "PRINT", "DEF", "RETURN", "RAISE", "FROM", "IMPORT", "AS", "GLOBAL", "NONLOCAL",
        "ASSERT", "IF", "ELIF", "ELSE", "WHILE", "FOR", "IN", "TRY", "FINALLY",
        "WITH", "EXCEPT", "LAMBDA", "OR", "AND", "NOT", "IS", "NONE", "TRUE",
        "FALSE", "CLASS", "YIELD", "DEL", "PASS", "CONTINUE", "BREAK", "NEWLINE",
        "NAME", "STRING_LITERAL", "BYTES_LITERAL", "DECIMAL_INTEGER", "OCT_INTEGER",
        "HEX_INTEGER", "BIN_INTEGER", "FLOAT_NUMBER", "IMAG_NUMBER", "DOT", "ELLIPSIS",
        "STAR", "OPEN_PAREN", "CLOSE_PAREN", "COMMA", "COLON", "SEMI_COLON", "POWER",
        "ASSIGN", "OPEN_BRACK", "CLOSE_BRACK", "OR_OP", "XOR", "AND_OP", "LEFT_SHIFT",
        "RIGHT_SHIFT", "ADD", "MINUS", "DIV", "MOD", "IDIV", "NOT_OP", "OPEN_BRACE",
        "CLOSE_BRACE", "LESS_THAN", "GREATER_THAN", "EQUALS", "GT_EQ", "LT_EQ",
        "NOT_EQ_1", "NOT_EQ_2", "AT", "ARROW", "ADD_ASSIGN", "SUB_ASSIGN", "MULT_ASSIGN",
        "AT_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN",
        "LEFT_SHIFT_ASSIGN", "RIGHT_SHIFT_ASSIGN", "POWER_ASSIGN", "IDIV_ASSIGN",
        "SKIP_", "UNKNOWN_CHAR", "SHORT_STRING", "LONG_STRING", "LONG_STRING_ITEM",
        "LONG_STRING_CHAR", "STRING_ESCAPE_SEQ", "NON_ZERO_DIGIT", "DIGIT", "OCT_DIGIT",
        "HEX_DIGIT", "BIN_DIGIT", "POINT_FLOAT", "EXPONENT_FLOAT", "INT_PART",
        "FRACTION", "EXPONENT", "SHORT_BYTES", "LONG_BYTES", "LONG_BYTES_ITEM",
        "SHORT_BYTES_CHAR_NO_SINGLE_QUOTE", "SHORT_BYTES_CHAR_NO_DOUBLE_QUOTE",
        "LONG_BYTES_CHAR", "BYTES_ESCAPE_SEQ", "SPACES", "COMMENT", "LINE_JOINING",
        "ID_START", "ID_CONTINUE",
    ];
    AltPython3Lexer._LITERAL_NAMES = [
        undefined, "'print'", "'def'", "'return'", "'raise'", "'from'", "'import'",
        "'as'", "'global'", "'nonlocal'", "'assert'", "'if'", "'elif'", "'else'",
        "'while'", "'for'", "'in'", "'try'", "'finally'", "'with'", "'except'",
        "'lambda'", "'or'", "'and'", "'not'", "'is'", "'None'", "'True'", "'False'",
        "'class'", "'yield'", "'del'", "'pass'", "'continue'", "'break'", undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "'.'", "'...'", "'*'", "'('", "')'", "','", "':'",
        "';'", "'**'", "'='", "'['", "']'", "'|'", "'^'", "'&'", "'<<'", "'>>'",
        "'+'", "'-'", "'/'", "'%'", "'//'", "'~'", "'{'", "'}'", "'<'", "'>'",
        "'=='", "'>='", "'<='", "'<>'", "'!='", "'@'", "'->'", "'+='", "'-='",
        "'*='", "'@='", "'/='", "'%='", "'&='", "'|='", "'^='", "'<<='", "'>>='",
        "'**='", "'//='",
    ];
    AltPython3Lexer._SYMBOLIC_NAMES = [
        undefined, "PRINT", "DEF", "RETURN", "RAISE", "FROM", "IMPORT", "AS",
        "GLOBAL", "NONLOCAL", "ASSERT", "IF", "ELIF", "ELSE", "WHILE", "FOR",
        "IN", "TRY", "FINALLY", "WITH", "EXCEPT", "LAMBDA", "OR", "AND", "NOT",
        "IS", "NONE", "TRUE", "FALSE", "CLASS", "YIELD", "DEL", "PASS", "CONTINUE",
        "BREAK", "NEWLINE", "NAME", "STRING_LITERAL", "BYTES_LITERAL", "DECIMAL_INTEGER",
        "OCT_INTEGER", "HEX_INTEGER", "BIN_INTEGER", "FLOAT_NUMBER", "IMAG_NUMBER",
        "DOT", "ELLIPSIS", "STAR", "OPEN_PAREN", "CLOSE_PAREN", "COMMA", "COLON",
        "SEMI_COLON", "POWER", "ASSIGN", "OPEN_BRACK", "CLOSE_BRACK", "OR_OP",
        "XOR", "AND_OP", "LEFT_SHIFT", "RIGHT_SHIFT", "ADD", "MINUS", "DIV", "MOD",
        "IDIV", "NOT_OP", "OPEN_BRACE", "CLOSE_BRACE", "LESS_THAN", "GREATER_THAN",
        "EQUALS", "GT_EQ", "LT_EQ", "NOT_EQ_1", "NOT_EQ_2", "AT", "ARROW", "ADD_ASSIGN",
        "SUB_ASSIGN", "MULT_ASSIGN", "AT_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN",
        "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "LEFT_SHIFT_ASSIGN", "RIGHT_SHIFT_ASSIGN",
        "POWER_ASSIGN", "IDIV_ASSIGN", "SKIP_", "UNKNOWN_CHAR",
    ];
    AltPython3Lexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(AltPython3Lexer._LITERAL_NAMES, AltPython3Lexer._SYMBOLIC_NAMES, []);
    __decorate([
        Decorators_1.Override
    ], AltPython3Lexer.prototype, "void", void 0);
    __decorate([
        Decorators_1.Override
    ], AltPython3Lexer.prototype, "Token", void 0);
    return AltPython3Lexer;
}(Lexer_1.Lexer));
exports.AltPython3Lexer = AltPython3Lexer;
boolean;
atStartOfInput();
{
    return _super.getCharPositionInLine.call(this) == 0 && _super.getLine.call(this) == 1;
}
constructor(input, CharStream);
{
    _this = _super.call(this, input) || this;
    this._interp = new LexerATNSimulator_1.LexerATNSimulator(AltPython3Lexer._ATN, this);
}
get;
grammarFileName();
string;
{
    return "AltPython3.g4";
}
get;
ruleNames();
string[];
{
    return AltPython3Lexer.ruleNames;
}
get;
serializedATN();
string;
{
    return AltPython3Lexer._serializedATN;
}
get;
channelNames();
string[];
{
    return AltPython3Lexer.channelNames;
}
get;
modeNames();
string[];
{
    return AltPython3Lexer.modeNames;
}
action(_localctx, RuleContext_1.RuleContext, ruleIndex, number, actionIndex, number);
void {
    switch: function (ruleIndex) {
    },
    case: 34,
    this: .NEWLINE_action(_localctx, actionIndex),
    break: ,
    case: 47,
    this: .OPEN_PAREN_action(_localctx, actionIndex),
    break: ,
    case: 48,
    this: .CLOSE_PAREN_action(_localctx, actionIndex),
    break: ,
    case: 54,
    this: .OPEN_BRACK_action(_localctx, actionIndex),
    break: ,
    case: 55,
    this: .CLOSE_BRACK_action(_localctx, actionIndex),
    break: ,
    case: 67,
    this: .OPEN_BRACE_action(_localctx, actionIndex),
    break: ,
    case: 68,
    this: .CLOSE_BRACE_action(_localctx, actionIndex),
    break: 
};
NEWLINE_action(_localctx, RuleContext_1.RuleContext, actionIndex, number);
void {
    switch: function (actionIndex) {
    },
    case: 0,
    String: String, newLine: newLine,
    String: String, spaces: spaces,
    // Strip newlines inside open clauses except if we are near EOF. We keep NEWLINEs near EOF to
    // satisfy the final newline needed by the single_put rule used by the REPL.
    int: int, next: next,
    int: int, nextnext: nextnext,
    if: function (opened) { }
} > 0 || (nextnext != -1 && (next == '\r' || next == '\n' || next == '\f' || next == '#'));
{
    // If we're inside a list or on a blank line, ignore all indents, 
    // dedents and line breaks.
    skip();
}
{
    emit(commonToken(NEWLINE, newLine));
    int;
    indent = getIndentationCount(spaces);
    int;
    previous = indents.isEmpty() ? 0 : indents.peek();
    if (indent == previous) {
        // skip indents of the same size as the present indent-size
        skip();
    }
    else if (indent > previous) {
        indents.push(indent);
        emit(commonToken(AltPython3Parser.INDENT, spaces));
    }
    else {
        // Possibly emit more than 1 DEDENT token.
        while (!indents.isEmpty() && indents.peek() > indent) {
            this.emit(createDedent());
            indents.pop();
        }
    }
}
break;
OPEN_PAREN_action(_localctx, RuleContext_1.RuleContext, actionIndex, number);
void {
    switch: function (actionIndex) {
    },
    case: 1,
    opened: opened
}++;
break;
CLOSE_PAREN_action(_localctx, RuleContext_1.RuleContext, actionIndex, number);
void {
    switch: function (actionIndex) {
    },
    case: 2,
    opened: opened
}--;
break;
OPEN_BRACK_action(_localctx, RuleContext_1.RuleContext, actionIndex, number);
void {
    switch: function (actionIndex) {
    },
    case: 3,
    opened: opened
}++;
break;
CLOSE_BRACK_action(_localctx, RuleContext_1.RuleContext, actionIndex, number);
void {
    switch: function (actionIndex) {
    },
    case: 4,
    opened: opened
}--;
break;
OPEN_BRACE_action(_localctx, RuleContext_1.RuleContext, actionIndex, number);
void {
    switch: function (actionIndex) {
    },
    case: 5,
    opened: opened
}++;
break;
CLOSE_BRACE_action(_localctx, RuleContext_1.RuleContext, actionIndex, number);
void {
    switch: function (actionIndex) {
    },
    case: 6,
    opened: opened
}--;
break;
sempred(_localctx, RuleContext_1.RuleContext, ruleIndex, number, predIndex, number);
boolean;
{
    switch (ruleIndex) {
        case 34:
            return this.NEWLINE_sempred(_localctx, predIndex);
    }
    return true;
}
NEWLINE_sempred(_localctx, RuleContext_1.RuleContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 0:
            return atStartOfInput();
    }
    return true;
}
_serializedATNSegments: number = 2;
_serializedATNSegment0: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02_\u034F\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
        "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
        "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
        "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
        "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
        "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
        "+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
        "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
        "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
        "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
        "i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
        "r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
        "\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
        "\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
        "\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
        "\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
        "\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
        "\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
        "\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03" +
        "\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
        "\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03" +
        "\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
        " \x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
        "\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x05$\u01AF\n$\x03" +
        "$\x03$\x05$\u01B3\n$\x03$\x05$\u01B6\n$\x05$\u01B8\n$\x03$\x03$\x03%\x03" +
        "%\x07%\u01BE\n%\f%\x0E%\u01C1\v%\x03&\x05&\u01C4\n&\x03&\x05&\u01C7\n" +
        "&\x03&\x03&\x05&\u01CB\n&\x03\'\x03\'\x05\'\u01CF\n\'\x03\'\x03\'\x05" +
        "\'\u01D3\n\'\x03(\x03(\x07(\u01D7\n(\f(\x0E(\u01DA\v(\x03(\x06(\u01DD" +
        "\n(\r(\x0E(\u01DE\x05(\u01E1\n(\x03)\x03)\x03)\x06)\u01E6\n)\r)\x0E)\u01E7" +
        "\x03*\x03*\x03*\x06*\u01ED\n*\r*\x0E*\u01EE\x03+\x03+\x03+\x06+\u01F4" +
        "\n+\r+\x0E+\u01F5\x03,\x03,\x05,\u01FA\n,\x03-\x03-\x05-\u01FE\n-\x03" +
        "-\x03-\x03.\x03.\x03/\x03/\x03/\x03/\x030\x030\x031\x031\x031\x032\x03" +
        "2\x032\x033\x033\x034\x034\x035\x035\x036\x036\x036\x037\x037\x038\x03" +
        "8\x038\x039\x039\x039\x03:\x03:\x03;\x03;\x03<\x03<\x03=\x03=\x03=\x03" +
        ">\x03>\x03>\x03?\x03?\x03@\x03@\x03A\x03A\x03B\x03B\x03C\x03C\x03C\x03" +
        "D\x03D\x03E\x03E\x03E\x03F\x03F\x03F\x03G\x03G\x03H\x03H\x03I\x03I\x03" +
        "I\x03J\x03J\x03J\x03K\x03K\x03K\x03L\x03L\x03L\x03M\x03M\x03M\x03N\x03" +
        "N\x03O\x03O\x03O\x03P\x03P\x03P\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03S\x03" +
        "S\x03S\x03T\x03T\x03T\x03U\x03U\x03U\x03V\x03V\x03V\x03W\x03W\x03W\x03" +
        "X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03[\x03[\x03[\x03" +
        "[\x03\\\x03\\\x03\\\x03\\\x03]\x03]\x03]\x05]\u0286\n]\x03]\x03]\x03^" +
        "\x03^\x03_\x03_\x03_\x07_\u028F\n_\f_\x0E_\u0292\v_\x03_\x03_\x03_\x03" +
        "_\x07_\u0298\n_\f_\x0E_\u029B\v_\x03_\x05_\u029E\n_\x03`\x03`\x03`\x03" +
        "`\x03`\x07`\u02A5\n`\f`\x0E`\u02A8\v`\x03`\x03`\x03`\x03`\x03`\x03`\x03" +
        "`\x03`\x07`\u02B2\n`\f`\x0E`\u02B5\v`\x03`\x03`\x03`\x05`\u02BA\n`\x03" +
        "a\x03a\x05a\u02BE\na\x03b\x03b\x03c\x03c\x03c\x03d\x03d\x03e\x03e\x03" +
        "f\x03f\x03g\x03g\x03h\x03h\x03i\x05i\u02D0\ni\x03i\x03i\x03i\x03i\x05" +
        "i\u02D6\ni\x03j\x03j\x05j\u02DA\nj\x03j\x03j\x03k\x06k\u02DF\nk\rk\x0E" +
        "k\u02E0\x03l\x03l\x06l\u02E5\nl\rl\x0El\u02E6\x03m\x03m\x05m\u02EB\nm" +
        "\x03m\x06m\u02EE\nm\rm\x0Em\u02EF\x03n\x03n\x03n\x07n\u02F5\nn\fn\x0E" +
        "n\u02F8\vn\x03n\x03n\x03n\x03n\x07n\u02FE\nn\fn\x0En\u0301\vn\x03n\x05" +
        "n\u0304\nn\x03o\x03o\x03o\x03o\x03o\x07o\u030B\no\fo\x0Eo\u030E\vo\x03" +
        "o\x03o\x03o\x03o\x03o\x03o\x03o\x03o\x07o\u0318\no\fo\x0Eo\u031B\vo\x03" +
        "o\x03o\x03o\x05o\u0320\no\x03p\x03p\x05p\u0324\np\x03q\x05q\u0327\nq\x03" +
        "r\x05r\u032A\nr\x03s\x05s\u032D\ns\x03t\x03t\x03t\x03u\x06u\u0333\nu\r" +
        "u\x0Eu\u0334\x03v\x03v\x07v\u0339\nv\fv\x0Ev\u033C\vv\x03w\x03w\x05w\u0340" +
        "\nw\x03w\x05w\u0343\nw\x03w\x03w\x05w\u0347\nw\x03x\x05x\u034A\nx\x03" +
        "y\x03y\x05y\u034E\ny\x06\u02A6\u02B3\u030C\u0319\x02\x02z\x03\x02\x03" +
        "\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02" +
        "\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F" +
        "\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18" +
        "/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 " +
        "?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U" +
        "\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x02" +
        "7m\x028o\x029q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02@\x7F\x02A\x81\x02" +
        "B\x83\x02C\x85\x02D\x87\x02E\x89\x02F\x8B\x02G\x8D\x02H\x8F\x02I\x91\x02" +
        "J\x93\x02K\x95\x02L\x97\x02M\x99\x02N\x9B\x02O\x9D\x02P\x9F\x02Q\xA1\x02" +
        "R\xA3\x02S\xA5\x02T\xA7\x02U\xA9\x02V\xAB\x02W\xAD\x02X\xAF\x02Y\xB1\x02" +
        "Z\xB3\x02[\xB5\x02\\\xB7\x02]\xB9\x02^\xBB\x02_\xBD\x02\x02\xBF\x02\x02" +
        "\xC1\x02\x02\xC3\x02\x02\xC5\x02\x02\xC7\x02\x02\xC9\x02\x02\xCB\x02\x02" +
        "\xCD\x02\x02\xCF\x02\x02\xD1\x02\x02\xD3\x02\x02\xD5\x02\x02\xD7\x02\x02" +
        "\xD9\x02\x02\xDB\x02\x02\xDD\x02\x02\xDF\x02\x02\xE1\x02\x02\xE3\x02\x02" +
        "\xE5\x02\x02\xE7\x02\x02\xE9\x02\x02\xEB\x02\x02\xED\x02\x02\xEF\x02\x02" +
        "\xF1\x02\x02\x03\x02\x1A\x04\x02WWww\x04\x02TTtt\x04\x02DDdd\x04\x02Q" +
        "Qqq\x04\x02ZZzz\x04\x02LLll\x06\x02\f\f\x0E\x0F))^^\x06\x02\f\f\x0E\x0F" +
        "$$^^\x03\x02^^\x03\x023;\x03\x022;\x03\x0229\x05\x022;CHch\x03\x0223\x04" +
        "\x02GGgg\x04\x02--//\x07\x02\x02\v\r\x0E\x10(*]_\x81\x07\x02\x02\v\r\x0E" +
        "\x10#%]_\x81\x04\x02\x02]_\x81\x03\x02\x02\x81\x04\x02\v\v\"\"\x04\x02" +
        "\f\f\x0E\x0F\u0129\x02C\\aac|\xAC\xAC\xB7\xB7\xBC\xBC\xC2\xD8\xDA\xF8" +
        "\xFA\u0243\u0252\u02C3\u02C8\u02D3\u02E2\u02E6\u02F0\u02F0\u037C\u037C" +
        "\u0388\u0388\u038A\u038C\u038E\u038E\u0390\u03A3\u03A5\u03D0\u03D2\u03F7" +
        "\u03F9\u0483\u048C\u04D0\u04D2\u04FB\u0502\u0511\u0533\u0558\u055B\u055B" +
        "\u0563\u0589\u05D2\u05EC\u05F2\u05F4\u0623\u063C\u0642\u064C\u0670\u0671" +
        "\u0673\u06D5\u06D7\u06D7\u06E7\u06E8\u06F0\u06F1\u06FC\u06FE\u0701\u0701" +
        "\u0712\u0712\u0714\u0731\u074F\u076F\u0782\u07A7\u07B3\u07B3\u0906\u093B" +
        "\u093F\u093F\u0952\u0952\u095A\u0963\u097F\u097F\u0987\u098E\u0991\u0992" +
        "\u0995\u09AA\u09AC\u09B2\u09B4\u09B4\u09B8\u09BB\u09BF\u09BF\u09D0\u09D0" +
        "\u09DE\u09DF\u09E1\u09E3\u09F2\u09F3\u0A07\u0A0C\u0A11\u0A12\u0A15\u0A2A" +
        "\u0A2C\u0A32\u0A34\u0A35\u0A37\u0A38\u0A3A\u0A3B\u0A5B\u0A5E\u0A60\u0A60" +
        "\u0A74\u0A76\u0A87\u0A8F\u0A91\u0A93\u0A95\u0AAA\u0AAC\u0AB2\u0AB4\u0AB5" +
        "\u0AB7\u0ABB\u0ABF\u0ABF\u0AD2\u0AD2\u0AE2\u0AE3\u0B07\u0B0E\u0B11\u0B12" +
        "\u0B15\u0B2A\u0B2C\u0B32\u0B34\u0B35\u0B37\u0B3B\u0B3F\u0B3F\u0B5E\u0B5F" +
        "\u0B61\u0B63\u0B73\u0B73\u0B85\u0B85\u0B87\u0B8C\u0B90\u0B92\u0B94\u0B97" +
        "\u0B9B\u0B9C\u0B9E\u0B9E\u0BA0\u0BA1\u0BA5\u0BA6\u0BAA\u0BAC\u0BB0\u0BBB" +
        "\u0C07\u0C0E\u0C10\u0C12\u0C14\u0C2A\u0C2C\u0C35\u0C37\u0C3B\u0C62\u0C63" +
        "\u0C87\u0C8E\u0C90\u0C92\u0C94\u0CAA\u0CAC\u0CB5\u0CB7\u0CBB\u0CBF\u0CBF" +
        "\u0CE0\u0CE0\u0CE2\u0CE3\u0D07\u0D0E\u0D10\u0D12\u0D14\u0D2A\u0D2C\u0D3B" +
        "\u0D62\u0D63\u0D87\u0D98\u0D9C\u0DB3\u0DB5\u0DBD\u0DBF\u0DBF\u0DC2\u0DC8" +
        "\u0E03\u0E32\u0E34\u0E35\u0E42\u0E48\u0E83\u0E84\u0E86\u0E86\u0E89\u0E8A" +
        "\u0E8C\u0E8C\u0E8F\u0E8F\u0E96\u0E99\u0E9B\u0EA1\u0EA3\u0EA5\u0EA7\u0EA7" +
        "\u0EA9\u0EA9\u0EAC\u0EAD\u0EAF\u0EB2\u0EB4\u0EB5\u0EBF\u0EBF\u0EC2\u0EC6" +
        "\u0EC8\u0EC8\u0EDE\u0EDF\u0F02\u0F02\u0F42\u0F49\u0F4B\u0F6C\u0F8A\u0F8D" +
        "\u1002\u1023\u1025\u1029\u102B\u102C\u1052\u1057\u10A2\u10C7\u10D2\u10FC" +
        "\u10FE\u10FE\u1102\u115B\u1161\u11A4\u11AA\u11FB\u1202\u124A\u124C\u124F" +
        "\u1252\u1258\u125A\u125A\u125C\u125F\u1262\u128A\u128C\u128F\u1292\u12B2" +
        "\u12B4\u12B7\u12BA\u12C0\u12C2\u12C2\u12C4\u12C7\u12CA\u12D8\u12DA\u1312" +
        "\u1314\u1317\u131A\u135C\u1382\u1391\u13A2\u13F6\u1403\u166E\u1671\u1678" +
        "\u1683\u169C\u16A2\u16EC\u16F0\u16F2\u1702\u170E\u1710\u1713\u1722\u1733" +
        "\u1742\u1753\u1762\u176E\u1770\u1772\u1782\u17B5\u17D9\u17D9\u17DE\u17DE" +
        "\u1822\u1879\u1882\u18AA\u1902\u191E\u1952\u196F\u1972\u1976\u1982\u19AB" +
        "\u19C3\u19C9\u1A02\u1A18\u1D02\u1DC1\u1E02\u1E9D\u1EA2\u1EFB\u1F02\u1F17" +
        "\u1F1A\u1F1F\u1F22\u1F47\u1F4A\u1F4F\u1F52\u1F59\u1F5B\u1F5B\u1F5D\u1F5D" +
        "\u1F5F\u1F5F\u1F61\u1F7F\u1F82\u1FB6\u1FB8\u1FBE\u1FC0\u1FC0\u1FC4\u1FC6" +
        "\u1FC8\u1FCE\u1FD2\u1FD5\u1FD8\u1FDD\u1FE2\u1FEE\u1FF4\u1FF6\u1FF8\u1FFE" +
        "\u2073\u2073\u2081\u2081\u2092\u2096\u2104\u2104\u2109\u2109\u210C\u2115" +
        "\u2117\u2117\u211A\u211F\u2126\u2126\u2128\u2128\u212A\u212A\u212C\u2133" +
        "\u2135\u213B\u213E\u2141\u2147\u214B\u2162\u2185\u2C02\u2C30\u2C32\u2C60" +
        "\u2C82\u2CE6\u2D02\u2D27\u2D32\u2D67\u2D71\u2D71\u2D82\u2D98\u2DA2\u2DA8" +
        "\u2DAA\u2DB0\u2DB2\u2DB8\u2DBA\u2DC0\u2DC2\u2DC8\u2DCA\u2DD0\u2DD2\u2DD8" +
        "\u2DDA\u2DE0\u3007\u3009\u3023\u302B\u3033\u3037\u303A\u303E\u3043\u3098" +
        "\u309D\u30A1\u30A3\u30FC\u30FE\u3101\u3107\u312E\u3133\u3190\u31A2\u31B9" +
        "\u31F2\u3201\u3402\u4DB7\u4E02\u9FBD\uA002\uA48E\uA802\uA803\uA805\uA807" +
        "\uA809\uA80C\uA80E\uA824\uAC02\uD7A5\uF902\uFA2F\uFA32\uFA6C\uFA72\uFADB" +
        "\uFB02\uFB08\uFB15\uFB19\uFB1F\uFB1F\uFB21\uFB2A\uFB2C\uFB38\uFB3A\uFB3E" +
        "\uFB40\uFB40\uFB42\uFB43\uFB45\uFB46\uFB48\uFBB3\uFBD5\uFD3F\uFD52\uFD91" +
        "\uFD94\uFDC9\uFDF2\uFDFD\uFE72\uFE76\uFE78\uFEFE\uFF23\uFF3C\uFF43\uFF5C" +
        "\uFF68\uFFC0\uFFC4\uFFC9\uFFCC\uFFD1\uFFD4\uFFD9\uFFDC\uFFDE\x96\x022" +
        ";\u0302\u0371\u0485\u0488\u0593\u05BB\u05BD\u05BF\u05C1\u05C1\u05C3\u05C4" +
        "\u05C6\u05C7\u05C9\u05C9\u0612\u0617\u064D\u0660\u0662\u066B\u0672\u0672" +
        "\u06D8\u06DE\u06E1\u06E6\u06E9\u06EA\u06EC\u06EF\u06F2\u06FB\u0713\u0713" +
        "\u0732\u074C\u07A8\u07B2\u0903\u0905\u093E\u093E\u0940\u094F\u0953\u0956" +
        "\u0964\u0965\u0968\u0971\u0983\u0985\u09BE\u09BE\u09C0\u09C6\u09C9\u09CA" +
        "\u09CD\u09CF\u09D9\u09D9\u09E4\u09E5\u09E8\u09F1\u0A03\u0A05\u0A3E\u0A3E" +
        "\u0A40\u0A44\u0A49\u0A4A\u0A4D\u0A4F\u0A68\u0A73\u0A83\u0A85\u0ABE\u0ABE" +
        "\u0AC0\u0AC7\u0AC9\u0ACB\u0ACD\u0ACF\u0AE4\u0AE5\u0AE8\u0AF1\u0B03\u0B05" +
        "\u0B3E\u0B3E\u0B40\u0B45\u0B49\u0B4A\u0B4D\u0B4F\u0B58\u0B59\u0B68\u0B71" +
        "\u0B84\u0B84\u0BC0\u0BC4\u0BC8\u0BCA\u0BCC\u0BCF\u0BD9\u0BD9\u0BE8\u0BF1" +
        "\u0C03\u0C05\u0C40\u0C46\u0C48\u0C4A\u0C4C\u0C4F\u0C57\u0C58\u0C68\u0C71" +
        "\u0C84\u0C85\u0CBE\u0CBE\u0CC0\u0CC6\u0CC8\u0CCA\u0CCC\u0CCF\u0CD7\u0CD8" +
        "\u0CE8\u0CF1\u0D04\u0D05\u0D40\u0D45\u0D48\u0D4A\u0D4C\u0D4F\u0D59\u0D59" +
        "\u0D68\u0D71\u0D84\u0D85\u0DCC\u0DCC\u0DD1\u0DD6\u0DD8\u0DD8\u0DDA\u0DE1" +
        "\u0DF4\u0DF5\u0E33\u0E33\u0E36\u0E3C\u0E49\u0E50\u0E52\u0E5B\u0EB3\u0EB3" +
        "\u0EB6\u0EBB\u0EBD\u0EBE\u0ECA\u0ECF\u0ED2\u0EDB\u0F1A\u0F1B\u0F22\u0F2B" +
        "\u0F37\u0F37\u0F39\u0F39\u0F3B\u0F3B\u0F40\u0F41\u0F73\u0F86\u0F88\u0F89" +
        "\u0F92\u0F99\u0F9B\u0FBE\u0FC8\u0FC8\u102E\u1034\u1038\u103B\u1042\u104B" +
        "\u1058\u105B\u1361\u1361\u136B\u1373\u1714\u1716\u1734\u1736\u1754\u1755" +
        "\u1774\u1775\u17B8\u17D5\u17DF\u17DF\u17E2\u17EB\u180D\u180F\u1812\u181B" +
        "\u18AB\u18AB\u1922\u192D\u1932\u193D\u1948\u1951\u19B2\u19C2\u19CA\u19CB" +
        "\u19D2\u19DB\u1A19\u1A1D\u1DC2\u1DC5\u2041\u2042\u2056\u2056\u20D2\u20DE" +
        "\u20E3\u20E3\u20E7\u20ED\u302C\u3031\u309B\u309C\uA804\uA804\uA808\uA808" +
        "\uA80D\uA80D\uA825\uA829\uFB20\uFB20\uFE02\uFE11\uFE22\uFE25\uFE35\uFE36" +
        "\uFE4F\uFE51\uFF12\uFF1B\uFF41\uFF41\x02\u0366\x02\x03\x03\x02\x02\x02" +
        "\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
        "\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
        "\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
        "\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02" +
        "\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02" +
        "#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03" +
        "\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02" +
        "\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x02" +
        "7\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02" +
        "\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02" +
        "\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03" +
        "\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02" +
        "\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02" +
        "Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02" +
        "\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02" +
        "\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03" +
        "\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02" +
        "\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02" +
        "{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81" +
        "\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87" +
        "\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D" +
        "\x03\x02\x02\x02\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02\x93" +
        "\x03\x02\x02\x02\x02\x95\x03\x02\x02\x02\x02\x97\x03\x02\x02\x02\x02\x99" +
        "\x03\x02\x02\x02\x02\x9B\x03\x02\x02\x02\x02\x9D\x03\x02\x02\x02\x02\x9F" +
        "\x03\x02\x02\x02\x02\xA1\x03\x02\x02\x02\x02\xA3\x03\x02\x02\x02\x02\xA5" +
        "\x03\x02\x02\x02\x02\xA7\x03\x02\x02\x02\x02\xA9\x03\x02\x02\x02\x02\xAB" +
        "\x03\x02\x02\x02\x02\xAD\x03\x02\x02\x02\x02\xAF\x03\x02\x02\x02\x02\xB1" +
        "\x03\x02\x02\x02\x02\xB3\x03\x02\x02\x02\x02\xB5\x03\x02\x02\x02\x02\xB7" +
        "\x03\x02\x02\x02\x02\xB9\x03\x02\x02\x02\x02\xBB\x03\x02\x02\x02\x03\xF3" +
        "\x03\x02\x02\x02\x05\xF9\x03\x02\x02\x02\x07\xFD\x03\x02\x02\x02\t\u0104" +
        "\x03\x02\x02\x02\v\u010A\x03\x02\x02\x02\r\u010F\x03\x02\x02\x02\x0F\u0116" +
        "\x03\x02\x02\x02\x11\u0119\x03\x02\x02\x02\x13\u0120\x03\x02\x02\x02\x15" +
        "\u0129\x03\x02\x02\x02\x17\u0130\x03\x02\x02\x02\x19\u0133\x03\x02\x02" +
        "\x02\x1B\u0138\x03\x02\x02\x02\x1D\u013D\x03\x02\x02\x02\x1F\u0143\x03" +
        "\x02\x02\x02!\u0147\x03\x02\x02\x02#\u014A\x03\x02\x02\x02%\u014E\x03" +
        "\x02\x02\x02\'\u0156\x03\x02\x02\x02)\u015B\x03\x02\x02\x02+\u0162\x03" +
        "\x02\x02\x02-\u0169\x03\x02\x02\x02/\u016C\x03\x02\x02\x021\u0170\x03" +
        "\x02\x02\x023\u0174\x03\x02\x02\x025\u0177\x03\x02\x02\x027\u017C\x03" +
        "\x02\x02\x029\u0181\x03\x02\x02\x02;\u0187\x03\x02\x02\x02=\u018D\x03" +
        "\x02\x02\x02?\u0193\x03\x02\x02\x02A\u0197\x03\x02\x02\x02C\u019C\x03" +
        "\x02\x02\x02E\u01A5\x03\x02\x02\x02G\u01B7\x03\x02\x02\x02I\u01BB\x03" +
        "\x02\x02\x02K\u01C3\x03\x02\x02\x02M\u01CC\x03\x02\x02\x02O\u01E0\x03" +
        "\x02\x02\x02Q\u01E2\x03\x02\x02\x02S\u01E9\x03\x02\x02\x02U\u01F0\x03" +
        "\x02\x02\x02W\u01F9\x03\x02\x02\x02Y\u01FD\x03\x02\x02\x02[\u0201\x03" +
        "\x02\x02\x02]\u0203\x03\x02\x02\x02_\u0207\x03\x02\x02\x02a\u0209\x03" +
        "\x02\x02\x02c\u020C\x03\x02\x02\x02e\u020F\x03\x02\x02\x02g\u0211\x03" +
        "\x02\x02\x02i\u0213\x03\x02\x02\x02k\u0215\x03\x02\x02\x02m\u0218\x03" +
        "\x02\x02\x02o\u021A\x03\x02\x02\x02q\u021D\x03\x02\x02\x02s\u0220\x03" +
        "\x02\x02\x02u\u0222\x03\x02\x02\x02w\u0224\x03\x02\x02\x02y\u0226\x03" +
        "\x02\x02\x02{\u0229\x03\x02\x02\x02}\u022C\x03\x02\x02\x02\x7F\u022E\x03" +
        "\x02\x02\x02\x81\u0230\x03\x02\x02\x02\x83\u0232\x03\x02\x02\x02\x85\u0234" +
        "\x03\x02\x02\x02\x87\u0237\x03\x02\x02\x02\x89\u0239\x03\x02\x02\x02\x8B" +
        "\u023C\x03\x02\x02\x02\x8D\u023F\x03\x02\x02\x02\x8F\u0241\x03\x02\x02" +
        "\x02\x91\u0243\x03\x02\x02\x02\x93\u0246\x03\x02\x02\x02\x95\u0249\x03" +
        "\x02\x02\x02\x97\u024C\x03\x02\x02\x02\x99\u024F\x03\x02\x02\x02\x9B\u0252" +
        "\x03\x02\x02\x02\x9D\u0254\x03\x02\x02\x02\x9F\u0257\x03\x02\x02\x02\xA1" +
        "\u025A\x03\x02\x02\x02\xA3\u025D\x03\x02\x02\x02\xA5\u0260\x03\x02\x02" +
        "\x02\xA7\u0263\x03\x02\x02\x02\xA9\u0266\x03\x02\x02\x02\xAB\u0269\x03" +
        "\x02\x02\x02\xAD\u026C\x03\x02\x02\x02\xAF\u026F\x03\x02\x02\x02\xB1\u0272" +
        "\x03\x02\x02\x02\xB3\u0276\x03\x02\x02\x02\xB5\u027A\x03\x02\x02\x02\xB7" +
        "\u027E\x03\x02\x02\x02\xB9\u0285\x03\x02\x02\x02\xBB\u0289\x03\x02\x02" +
        "\x02\xBD\u029D\x03\x02\x02\x02\xBF\u02B9\x03\x02\x02\x02\xC1\u02BD\x03" +
        "\x02\x02\x02\xC3\u02BF\x03\x02\x02\x02\xC5\u02C1\x03\x02\x02\x02\xC7\u02C4" +
        "\x03\x02\x02\x02\xC9\u02C6\x03\x02\x02\x02\xCB\u02C8\x03\x02\x02\x02\xCD" +
        "\u02CA\x03\x02\x02\x02\xCF\u02CC\x03\x02\x02\x02\xD1\u02D5\x03\x02\x02" +
        "\x02\xD3\u02D9\x03\x02\x02\x02\xD5\u02DE\x03\x02\x02\x02\xD7\u02E2\x03" +
        "\x02\x02\x02\xD9\u02E8\x03\x02\x02\x02\xDB\u0303\x03\x02\x02\x02\xDD\u031F" +
        "\x03\x02\x02\x02\xDF\u0323\x03\x02\x02\x02\xE1\u0326\x03\x02\x02\x02\xE3" +
        "\u0329\x03\x02\x02\x02\xE5\u032C\x03\x02\x02\x02\xE7\u032E\x03\x02\x02" +
        "\x02\xE9\u0332\x03\x02\x02\x02\xEB\u0336\x03\x02\x02\x02\xED\u033D\x03" +
        "\x02\x02\x02\xEF\u0349\x03\x02\x02\x02\xF1\u034D\x03\x02\x02\x02\xF3\xF4" +
        "\x07r\x02\x02\xF4\xF5\x07t\x02\x02\xF5\xF6\x07k\x02\x02\xF6\xF7\x07p\x02" +
        "\x02\xF7\xF8\x07v\x02\x02\xF8\x04\x03\x02\x02\x02\xF9\xFA\x07f\x02\x02" +
        "\xFA\xFB\x07g\x02\x02\xFB\xFC\x07h\x02\x02\xFC\x06\x03\x02\x02\x02\xFD" +
        "\xFE\x07t\x02\x02\xFE\xFF\x07g\x02\x02\xFF\u0100\x07v\x02\x02\u0100\u0101" +
        "\x07w\x02\x02\u0101\u0102\x07t\x02\x02\u0102\u0103\x07p\x02\x02\u0103" +
        "\b\x03\x02\x02\x02\u0104\u0105\x07t\x02\x02\u0105\u0106\x07c\x02\x02\u0106" +
        "\u0107\x07k\x02\x02\u0107\u0108\x07u\x02\x02\u0108\u0109\x07g\x02\x02" +
        "\u0109\n\x03\x02\x02\x02\u010A\u010B\x07h\x02\x02\u010B\u010C\x07t\x02" +
        "\x02\u010C\u010D\x07q\x02\x02\u010D\u010E\x07o\x02\x02\u010E\f\x03\x02" +
        "\x02\x02\u010F\u0110\x07k\x02\x02\u0110\u0111\x07o\x02\x02\u0111\u0112" +
        "\x07r\x02\x02\u0112\u0113\x07q\x02\x02\u0113\u0114\x07t\x02\x02\u0114" +
        "\u0115\x07v\x02\x02\u0115\x0E\x03\x02\x02\x02\u0116\u0117\x07c\x02\x02" +
        "\u0117\u0118\x07u\x02\x02\u0118\x10\x03\x02\x02\x02\u0119\u011A\x07i\x02" +
        "\x02\u011A\u011B\x07n\x02\x02\u011B\u011C\x07q\x02\x02\u011C\u011D\x07" +
        "d\x02\x02\u011D\u011E\x07c\x02\x02\u011E\u011F\x07n\x02\x02\u011F\x12" +
        "\x03\x02\x02\x02\u0120\u0121\x07p\x02\x02\u0121\u0122\x07q\x02\x02\u0122" +
        "\u0123\x07p\x02\x02\u0123\u0124\x07n\x02\x02\u0124\u0125\x07q\x02\x02" +
        "\u0125\u0126\x07e\x02\x02\u0126\u0127\x07c\x02\x02\u0127\u0128\x07n\x02" +
        "\x02\u0128\x14\x03\x02\x02\x02\u0129\u012A\x07c\x02\x02\u012A\u012B\x07" +
        "u\x02\x02\u012B\u012C\x07u\x02\x02\u012C\u012D\x07g\x02\x02\u012D\u012E" +
        "\x07t\x02\x02\u012E\u012F\x07v\x02\x02\u012F\x16\x03\x02\x02\x02\u0130" +
        "\u0131\x07k\x02\x02\u0131\u0132\x07h\x02\x02\u0132\x18\x03\x02\x02\x02" +
        "\u0133\u0134\x07g\x02\x02\u0134\u0135\x07n\x02\x02\u0135\u0136\x07k\x02" +
        "\x02\u0136\u0137\x07h\x02\x02\u0137\x1A\x03\x02\x02\x02\u0138\u0139\x07" +
        "g\x02\x02\u0139\u013A\x07n\x02\x02\u013A\u013B\x07u\x02\x02\u013B\u013C" +
        "\x07g\x02\x02\u013C\x1C\x03\x02\x02\x02\u013D\u013E\x07y\x02\x02\u013E" +
        "\u013F\x07j\x02\x02\u013F\u0140\x07k\x02\x02\u0140\u0141\x07n\x02\x02" +
        "\u0141\u0142\x07g\x02\x02\u0142\x1E\x03\x02\x02\x02\u0143\u0144\x07h\x02" +
        "\x02\u0144\u0145\x07q\x02\x02\u0145\u0146\x07t\x02\x02\u0146 \x03\x02" +
        "\x02\x02\u0147\u0148\x07k\x02\x02\u0148\u0149\x07p\x02\x02\u0149\"\x03" +
        "\x02\x02\x02\u014A\u014B\x07v\x02\x02\u014B\u014C\x07t\x02\x02\u014C\u014D" +
        "\x07{\x02\x02\u014D$\x03\x02\x02\x02";
_serializedATNSegment1: string =
    "\u014E\u014F\x07h\x02\x02\u014F\u0150\x07k\x02\x02\u0150\u0151\x07p\x02" +
        "\x02\u0151\u0152\x07c\x02\x02\u0152\u0153\x07n\x02\x02\u0153\u0154\x07" +
        "n\x02\x02\u0154\u0155\x07{\x02\x02\u0155&\x03\x02\x02\x02\u0156\u0157" +
        "\x07y\x02\x02\u0157\u0158\x07k\x02\x02\u0158\u0159\x07v\x02\x02\u0159" +
        "\u015A\x07j\x02\x02\u015A(\x03\x02\x02\x02\u015B\u015C\x07g\x02\x02\u015C" +
        "\u015D\x07z\x02\x02\u015D\u015E\x07e\x02\x02\u015E\u015F\x07g\x02\x02" +
        "\u015F\u0160\x07r\x02\x02\u0160\u0161\x07v\x02\x02\u0161*\x03\x02\x02" +
        "\x02\u0162\u0163\x07n\x02\x02\u0163\u0164\x07c\x02\x02\u0164\u0165\x07" +
        "o\x02\x02\u0165\u0166\x07d\x02\x02\u0166\u0167\x07f\x02\x02\u0167\u0168" +
        "\x07c\x02\x02\u0168,\x03\x02\x02\x02\u0169\u016A\x07q\x02\x02\u016A\u016B" +
        "\x07t\x02\x02\u016B.\x03\x02\x02\x02\u016C\u016D\x07c\x02\x02\u016D\u016E" +
        "\x07p\x02\x02\u016E\u016F\x07f\x02\x02\u016F0\x03\x02\x02\x02\u0170\u0171" +
        "\x07p\x02\x02\u0171\u0172\x07q\x02\x02\u0172\u0173\x07v\x02\x02\u0173" +
        "2\x03\x02\x02\x02\u0174\u0175\x07k\x02\x02\u0175\u0176\x07u\x02\x02\u0176" +
        "4\x03\x02\x02\x02\u0177\u0178\x07P\x02\x02\u0178\u0179\x07q\x02\x02\u0179" +
        "\u017A\x07p\x02\x02\u017A\u017B\x07g\x02\x02\u017B6\x03\x02\x02\x02\u017C" +
        "\u017D\x07V\x02\x02\u017D\u017E\x07t\x02\x02\u017E\u017F\x07w\x02\x02" +
        "\u017F\u0180\x07g\x02\x02\u01808\x03\x02\x02\x02\u0181\u0182\x07H\x02" +
        "\x02\u0182\u0183\x07c\x02\x02\u0183\u0184\x07n\x02\x02\u0184\u0185\x07" +
        "u\x02\x02\u0185\u0186\x07g\x02\x02\u0186:\x03\x02\x02\x02\u0187\u0188" +
        "\x07e\x02\x02\u0188\u0189\x07n\x02\x02\u0189\u018A\x07c\x02\x02\u018A" +
        "\u018B\x07u\x02\x02\u018B\u018C\x07u\x02\x02\u018C<\x03\x02\x02\x02\u018D" +
        "\u018E\x07{\x02\x02\u018E\u018F\x07k\x02\x02\u018F\u0190\x07g\x02\x02" +
        "\u0190\u0191\x07n\x02\x02\u0191\u0192\x07f\x02\x02\u0192>\x03\x02\x02" +
        "\x02\u0193\u0194\x07f\x02\x02\u0194\u0195\x07g\x02\x02\u0195\u0196\x07" +
        "n\x02\x02\u0196@\x03\x02\x02\x02\u0197\u0198\x07r\x02\x02\u0198\u0199" +
        "\x07c\x02\x02\u0199\u019A\x07u\x02\x02\u019A\u019B\x07u\x02\x02\u019B" +
        "B\x03\x02\x02\x02\u019C\u019D\x07e\x02\x02\u019D\u019E\x07q\x02\x02\u019E" +
        "\u019F\x07p\x02\x02\u019F\u01A0\x07v\x02\x02\u01A0\u01A1\x07k\x02\x02" +
        "\u01A1\u01A2\x07p\x02\x02\u01A2\u01A3\x07w\x02\x02\u01A3\u01A4\x07g\x02" +
        "\x02\u01A4D\x03\x02\x02\x02\u01A5\u01A6\x07d\x02\x02\u01A6\u01A7\x07t" +
        "\x02\x02\u01A7\u01A8\x07g\x02\x02\u01A8\u01A9\x07c\x02\x02\u01A9\u01AA" +
        "\x07m\x02\x02\u01AAF\x03\x02\x02\x02\u01AB\u01AC\x06$\x02\x02\u01AC\u01B8" +
        "\x05\xE9u\x02\u01AD\u01AF\x07\x0F\x02\x02\u01AE\u01AD\x03\x02\x02\x02" +
        "\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B3\x07" +
        "\f\x02\x02\u01B1\u01B3\x04\x0E\x0F\x02\u01B2\u01AE\x03\x02\x02\x02\u01B2" +
        "\u01B1\x03\x02\x02\x02\u01B3\u01B5\x03\x02\x02\x02\u01B4\u01B6\x05\xE9" +
        "u\x02\u01B5\u01B4\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B8" +
        "\x03\x02\x02\x02\u01B7\u01AB\x03\x02\x02\x02\u01B7\u01B2\x03\x02\x02\x02" +
        "\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BA\b$\x02\x02\u01BAH\x03\x02\x02" +
        "\x02\u01BB\u01BF\x05\xEFx\x02\u01BC\u01BE\x05\xF1y\x02\u01BD\u01BC\x03" +
        "\x02\x02\x02\u01BE\u01C1\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF" +
        "\u01C0\x03\x02\x02\x02\u01C0J\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02" +
        "\x02\u01C2\u01C4\t\x02\x02\x02\u01C3\u01C2\x03\x02\x02\x02\u01C3\u01C4" +
        "\x03\x02\x02\x02\u01C4\u01C6\x03\x02\x02\x02\u01C5\u01C7\t\x03\x02\x02" +
        "\u01C6\u01C5\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01CA\x03" +
        "\x02\x02\x02\u01C8\u01CB\x05\xBD_\x02\u01C9\u01CB\x05\xBF`\x02\u01CA\u01C8" +
        "\x03\x02\x02\x02\u01CA\u01C9\x03\x02\x02\x02\u01CBL\x03\x02\x02\x02\u01CC" +
        "\u01CE\t\x04\x02\x02\u01CD\u01CF\t\x03\x02\x02\u01CE\u01CD\x03\x02\x02" +
        "\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D2\x03\x02\x02\x02\u01D0\u01D3" +
        "\x05\xDBn\x02\u01D1\u01D3\x05\xDDo\x02\u01D2\u01D0\x03\x02\x02\x02\u01D2" +
        "\u01D1\x03\x02\x02\x02\u01D3N\x03\x02\x02\x02\u01D4\u01D8\x05\xC7d\x02" +
        "\u01D5\u01D7\x05\xC9e\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7\u01DA\x03" +
        "\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9" +
        "\u01E1\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01DD\x072\x02" +
        "\x02\u01DC\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DC" +
        "\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E1\x03\x02\x02\x02" +
        "\u01E0\u01D4\x03\x02\x02\x02\u01E0\u01DC\x03\x02\x02\x02\u01E1P\x03\x02" +
        "\x02\x02\u01E2\u01E3\x072\x02\x02\u01E3\u01E5\t\x05\x02\x02\u01E4\u01E6" +
        "\x05\xCBf\x02\u01E5\u01E4\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02" +
        "\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8R\x03\x02" +
        "\x02\x02\u01E9\u01EA\x072\x02\x02\u01EA\u01EC\t\x06\x02\x02\u01EB\u01ED" +
        "\x05\xCDg\x02\u01EC\u01EB\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02" +
        "\u01EE\u01EC\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EFT\x03\x02" +
        "\x02\x02\u01F0\u01F1\x072\x02\x02\u01F1\u01F3\t\x04\x02\x02\u01F2\u01F4" +
        "\x05\xCFh\x02\u01F3\u01F2\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02" +
        "\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6V\x03\x02" +
        "\x02\x02\u01F7\u01FA\x05\xD1i\x02\u01F8\u01FA\x05\xD3j\x02\u01F9\u01F7" +
        "\x03\x02\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01FAX\x03\x02\x02\x02\u01FB" +
        "\u01FE\x05W,\x02\u01FC\u01FE\x05\xD5k\x02\u01FD\u01FB\x03\x02\x02\x02" +
        "\u01FD\u01FC\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0200\t" +
        "\x07\x02\x02\u0200Z\x03\x02\x02\x02\u0201\u0202\x070\x02\x02\u0202\\\x03" +
        "\x02\x02\x02\u0203\u0204\x070\x02\x02\u0204\u0205\x070\x02\x02\u0205\u0206" +
        "\x070\x02\x02\u0206^\x03\x02\x02\x02\u0207\u0208\x07,\x02\x02\u0208`\x03" +
        "\x02\x02\x02\u0209\u020A\x07*\x02\x02\u020A\u020B\b1\x03\x02\u020Bb\x03" +
        "\x02\x02\x02\u020C\u020D\x07+\x02\x02\u020D\u020E\b2\x04\x02\u020Ed\x03" +
        "\x02\x02\x02\u020F\u0210\x07.\x02\x02\u0210f\x03\x02\x02\x02\u0211\u0212" +
        "\x07<\x02\x02\u0212h\x03\x02\x02\x02\u0213\u0214\x07=\x02\x02\u0214j\x03" +
        "\x02\x02\x02\u0215\u0216\x07,\x02\x02\u0216\u0217\x07,\x02\x02\u0217l" +
        "\x03\x02\x02\x02\u0218\u0219\x07?\x02\x02\u0219n\x03\x02\x02\x02\u021A" +
        "\u021B\x07]\x02\x02\u021B\u021C\b8\x05\x02\u021Cp\x03\x02\x02\x02\u021D" +
        "\u021E\x07_\x02\x02\u021E\u021F\b9\x06\x02\u021Fr\x03\x02\x02\x02\u0220" +
        "\u0221\x07~\x02\x02\u0221t\x03\x02\x02\x02\u0222\u0223\x07`\x02\x02\u0223" +
        "v\x03\x02\x02\x02\u0224\u0225\x07(\x02\x02\u0225x\x03\x02\x02\x02\u0226" +
        "\u0227\x07>\x02\x02\u0227\u0228\x07>\x02\x02\u0228z\x03\x02\x02\x02\u0229" +
        "\u022A\x07@\x02\x02\u022A\u022B\x07@\x02\x02\u022B|\x03\x02\x02\x02\u022C" +
        "\u022D\x07-\x02\x02\u022D~\x03\x02\x02\x02\u022E\u022F\x07/\x02\x02\u022F" +
        "\x80\x03\x02\x02\x02\u0230\u0231\x071\x02\x02\u0231\x82\x03\x02\x02\x02" +
        "\u0232\u0233\x07\'\x02\x02\u0233\x84\x03\x02\x02\x02\u0234\u0235\x071" +
        "\x02\x02\u0235\u0236\x071\x02\x02\u0236\x86\x03\x02\x02\x02\u0237\u0238" +
        "\x07\x80\x02\x02\u0238\x88\x03\x02\x02\x02\u0239\u023A\x07}\x02\x02\u023A" +
        "\u023B\bE\x07\x02\u023B\x8A\x03\x02\x02\x02\u023C\u023D\x07\x7F\x02\x02" +
        "\u023D\u023E\bF\b\x02\u023E\x8C\x03\x02\x02\x02\u023F\u0240\x07>\x02\x02" +
        "\u0240\x8E\x03\x02\x02\x02\u0241\u0242\x07@\x02\x02\u0242\x90\x03\x02" +
        "\x02\x02\u0243\u0244\x07?\x02\x02\u0244\u0245\x07?\x02\x02\u0245\x92\x03" +
        "\x02\x02\x02\u0246\u0247\x07@\x02\x02\u0247\u0248\x07?\x02\x02\u0248\x94" +
        "\x03\x02\x02\x02\u0249\u024A\x07>\x02\x02\u024A\u024B\x07?\x02\x02\u024B" +
        "\x96\x03\x02\x02\x02\u024C\u024D\x07>\x02\x02\u024D\u024E\x07@\x02\x02" +
        "\u024E\x98\x03\x02\x02\x02\u024F\u0250\x07#\x02\x02\u0250\u0251\x07?\x02" +
        "\x02\u0251\x9A\x03\x02\x02\x02\u0252\u0253\x07B\x02\x02\u0253\x9C\x03" +
        "\x02\x02\x02\u0254\u0255\x07/\x02\x02\u0255\u0256\x07@\x02\x02\u0256\x9E" +
        "\x03\x02\x02\x02\u0257\u0258\x07-\x02\x02\u0258\u0259\x07?\x02\x02\u0259" +
        "\xA0\x03\x02\x02\x02\u025A\u025B\x07/\x02\x02\u025B\u025C\x07?\x02\x02" +
        "\u025C\xA2\x03\x02\x02\x02\u025D\u025E\x07,\x02\x02\u025E\u025F\x07?\x02" +
        "\x02\u025F\xA4\x03\x02\x02\x02\u0260\u0261\x07B\x02\x02\u0261\u0262\x07" +
        "?\x02\x02\u0262\xA6\x03\x02\x02\x02\u0263\u0264\x071\x02\x02\u0264\u0265" +
        "\x07?\x02\x02\u0265\xA8\x03\x02\x02\x02\u0266\u0267\x07\'\x02\x02\u0267" +
        "\u0268\x07?\x02\x02\u0268\xAA\x03\x02\x02\x02\u0269\u026A\x07(\x02\x02" +
        "\u026A\u026B\x07?\x02\x02\u026B\xAC\x03\x02\x02\x02\u026C\u026D\x07~\x02" +
        "\x02\u026D\u026E\x07?\x02\x02\u026E\xAE\x03\x02\x02\x02\u026F\u0270\x07" +
        "`\x02\x02\u0270\u0271\x07?\x02\x02\u0271\xB0\x03\x02\x02\x02\u0272\u0273" +
        "\x07>\x02\x02\u0273\u0274\x07>\x02\x02\u0274\u0275\x07?\x02\x02\u0275" +
        "\xB2\x03\x02\x02\x02\u0276\u0277\x07@\x02\x02\u0277\u0278\x07@\x02\x02" +
        "\u0278\u0279\x07?\x02\x02\u0279\xB4\x03\x02\x02\x02\u027A\u027B\x07,\x02" +
        "\x02\u027B\u027C\x07,\x02\x02\u027C\u027D\x07?\x02\x02\u027D\xB6\x03\x02" +
        "\x02\x02\u027E\u027F\x071\x02\x02\u027F\u0280\x071\x02\x02\u0280\u0281" +
        "\x07?\x02\x02\u0281\xB8\x03\x02\x02\x02\u0282\u0286\x05\xE9u\x02\u0283" +
        "\u0286\x05\xEBv\x02\u0284\u0286\x05\xEDw\x02\u0285\u0282\x03\x02\x02\x02" +
        "\u0285\u0283\x03\x02\x02\x02\u0285\u0284\x03\x02\x02\x02\u0286\u0287\x03" +
        "\x02\x02\x02\u0287\u0288\b]\t\x02\u0288\xBA\x03\x02\x02\x02\u0289\u028A" +
        "\v\x02\x02\x02\u028A\xBC\x03\x02\x02\x02\u028B\u0290\x07)\x02\x02\u028C" +
        "\u028F\x05\xC5c\x02\u028D\u028F\n\b\x02\x02\u028E\u028C\x03\x02\x02\x02" +
        "\u028E\u028D\x03\x02\x02\x02\u028F\u0292\x03\x02\x02\x02\u0290\u028E\x03" +
        "\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291\u0293\x03\x02\x02\x02\u0292" +
        "\u0290\x03\x02\x02\x02\u0293\u029E\x07)\x02\x02\u0294\u0299\x07$\x02\x02" +
        "\u0295\u0298\x05\xC5c\x02\u0296\u0298\n\t\x02\x02\u0297\u0295\x03\x02" +
        "\x02\x02\u0297\u0296\x03\x02\x02\x02\u0298\u029B\x03\x02\x02\x02\u0299" +
        "\u0297\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029C\x03\x02" +
        "\x02\x02\u029B\u0299\x03\x02\x02\x02\u029C\u029E\x07$\x02\x02\u029D\u028B" +
        "\x03\x02\x02\x02\u029D\u0294\x03\x02\x02\x02\u029E\xBE\x03\x02\x02\x02" +
        "\u029F\u02A0\x07)\x02\x02\u02A0\u02A1\x07)\x02\x02\u02A1\u02A2\x07)\x02" +
        "\x02\u02A2\u02A6\x03\x02\x02\x02\u02A3\u02A5\x05\xC1a\x02\u02A4\u02A3" +
        "\x03\x02\x02\x02\u02A5\u02A8\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02" +
        "\u02A6\u02A4\x03\x02\x02\x02\u02A7\u02A9\x03\x02\x02\x02\u02A8\u02A6\x03" +
        "\x02\x02\x02\u02A9\u02AA\x07)\x02\x02\u02AA\u02AB\x07)\x02\x02\u02AB\u02BA" +
        "\x07)\x02\x02\u02AC\u02AD\x07$\x02\x02\u02AD\u02AE\x07$\x02\x02\u02AE" +
        "\u02AF\x07$\x02\x02\u02AF\u02B3\x03\x02\x02\x02\u02B0\u02B2\x05\xC1a\x02" +
        "\u02B1\u02B0\x03\x02\x02\x02\u02B2\u02B5\x03\x02\x02\x02\u02B3\u02B4\x03" +
        "\x02\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B4\u02B6\x03\x02\x02\x02\u02B5" +
        "\u02B3\x03\x02\x02\x02\u02B6\u02B7\x07$\x02\x02\u02B7\u02B8\x07$\x02\x02" +
        "\u02B8\u02BA\x07$\x02\x02\u02B9\u029F\x03\x02\x02\x02\u02B9\u02AC\x03" +
        "\x02\x02\x02\u02BA\xC0\x03\x02\x02\x02\u02BB\u02BE\x05\xC3b\x02\u02BC" +
        "\u02BE\x05\xC5c\x02\u02BD\u02BB\x03\x02\x02\x02\u02BD\u02BC\x03\x02\x02" +
        "\x02\u02BE\xC2\x03\x02\x02\x02\u02BF\u02C0\n\n\x02\x02\u02C0\xC4\x03\x02" +
        "\x02\x02\u02C1\u02C2\x07^\x02\x02\u02C2\u02C3\v\x02\x02\x02\u02C3\xC6" +
        "\x03\x02\x02\x02\u02C4\u02C5\t\v\x02\x02\u02C5\xC8\x03\x02\x02\x02\u02C6" +
        "\u02C7\t\f\x02\x02\u02C7\xCA\x03\x02\x02\x02\u02C8\u02C9\t\r\x02\x02\u02C9" +
        "\xCC\x03\x02\x02\x02\u02CA\u02CB\t\x0E\x02\x02\u02CB\xCE\x03\x02\x02\x02" +
        "\u02CC\u02CD\t\x0F\x02\x02\u02CD\xD0\x03\x02\x02\x02\u02CE\u02D0\x05\xD5" +
        "k\x02\u02CF\u02CE\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0\u02D1" +
        "\x03\x02\x02\x02\u02D1\u02D6\x05\xD7l\x02\u02D2\u02D3\x05\xD5k\x02\u02D3" +
        "\u02D4\x070\x02\x02\u02D4\u02D6\x03\x02\x02\x02\u02D5\u02CF\x03\x02\x02" +
        "\x02\u02D5\u02D2\x03\x02\x02\x02\u02D6\xD2\x03\x02\x02\x02\u02D7\u02DA" +
        "\x05\xD5k\x02\u02D8\u02DA\x05\xD1i\x02\u02D9\u02D7\x03\x02\x02\x02\u02D9" +
        "\u02D8\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DC\x05\xD9" +
        "m\x02\u02DC\xD4\x03\x02\x02\x02\u02DD\u02DF\x05\xC9e\x02\u02DE\u02DD\x03" +
        "\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02DE\x03\x02\x02\x02\u02E0" +
        "\u02E1\x03\x02\x02\x02\u02E1\xD6\x03\x02\x02\x02\u02E2\u02E4\x070\x02" +
        "\x02\u02E3\u02E5\x05\xC9e\x02\u02E4\u02E3\x03\x02\x02\x02\u02E5\u02E6" +
        "\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02" +
        "\u02E7\xD8\x03\x02\x02\x02\u02E8\u02EA\t\x10\x02\x02\u02E9\u02EB\t\x11" +
        "\x02\x02\u02EA\u02E9\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB" +
        "\u02ED\x03\x02\x02\x02\u02EC\u02EE\x05\xC9e\x02\u02ED\u02EC\x03\x02\x02" +
        "\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02EF\u02F0" +
        "\x03\x02\x02\x02\u02F0\xDA\x03\x02\x02\x02\u02F1\u02F6\x07)\x02\x02\u02F2" +
        "\u02F5\x05\xE1q\x02\u02F3\u02F5\x05\xE7t\x02\u02F4\u02F2\x03\x02\x02\x02" +
        "\u02F4\u02F3\x03\x02\x02\x02\u02F5\u02F8\x03\x02\x02\x02\u02F6\u02F4\x03" +
        "\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02F9\x03\x02\x02\x02\u02F8" +
        "\u02F6\x03\x02\x02\x02\u02F9\u0304\x07)\x02\x02\u02FA\u02FF\x07$\x02\x02" +
        "\u02FB\u02FE\x05\xE3r\x02\u02FC\u02FE\x05\xE7t\x02\u02FD\u02FB\x03\x02" +
        "\x02\x02\u02FD\u02FC\x03\x02\x02\x02\u02FE\u0301\x03\x02\x02\x02\u02FF" +
        "\u02FD\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0302\x03\x02" +
        "\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0302\u0304\x07$\x02\x02\u0303\u02F1" +
        "\x03\x02\x02\x02\u0303\u02FA\x03\x02\x02\x02\u0304\xDC\x03\x02\x02\x02" +
        "\u0305\u0306\x07)\x02\x02\u0306\u0307\x07)\x02\x02\u0307\u0308\x07)\x02" +
        "\x02\u0308\u030C\x03\x02\x02\x02\u0309\u030B\x05\xDFp\x02\u030A\u0309" +
        "\x03\x02\x02\x02\u030B\u030E\x03\x02\x02\x02\u030C\u030D\x03\x02\x02\x02" +
        "\u030C\u030A\x03\x02\x02\x02\u030D\u030F\x03\x02\x02\x02\u030E\u030C\x03" +
        "\x02\x02\x02\u030F\u0310\x07)\x02\x02\u0310\u0311\x07)\x02\x02\u0311\u0320" +
        "\x07)\x02\x02\u0312\u0313\x07$\x02\x02\u0313\u0314\x07$\x02\x02\u0314" +
        "\u0315\x07$\x02\x02\u0315\u0319\x03\x02\x02\x02\u0316\u0318\x05\xDFp\x02" +
        "\u0317\u0316\x03\x02\x02\x02\u0318\u031B\x03\x02\x02\x02\u0319\u031A\x03" +
        "\x02\x02\x02\u0319\u0317\x03\x02\x02\x02\u031A\u031C\x03\x02\x02\x02\u031B" +
        "\u0319\x03\x02\x02\x02\u031C\u031D\x07$\x02\x02\u031D\u031E\x07$\x02\x02" +
        "\u031E\u0320\x07$\x02\x02\u031F\u0305\x03\x02\x02\x02\u031F\u0312\x03" +
        "\x02\x02\x02\u0320\xDE\x03\x02\x02\x02\u0321\u0324\x05\xE5s\x02\u0322" +
        "\u0324\x05\xE7t\x02\u0323\u0321\x03\x02\x02\x02\u0323\u0322\x03\x02\x02" +
        "\x02\u0324\xE0\x03\x02\x02\x02\u0325\u0327\t\x12\x02\x02\u0326\u0325\x03" +
        "\x02\x02\x02\u0327\xE2\x03\x02\x02\x02\u0328\u032A\t\x13\x02\x02\u0329" +
        "\u0328\x03\x02\x02\x02\u032A\xE4\x03\x02\x02\x02\u032B\u032D\t\x14\x02" +
        "\x02\u032C\u032B\x03\x02\x02\x02\u032D\xE6\x03\x02\x02\x02\u032E\u032F" +
        "\x07^\x02\x02\u032F\u0330\t\x15\x02\x02\u0330\xE8\x03\x02\x02\x02\u0331" +
        "\u0333\t\x16\x02\x02\u0332\u0331\x03\x02\x02\x02\u0333\u0334\x03\x02\x02" +
        "\x02\u0334\u0332\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335\xEA" +
        "\x03\x02\x02\x02\u0336\u033A\x07%\x02\x02\u0337\u0339\n\x17\x02\x02\u0338" +
        "\u0337\x03\x02\x02\x02\u0339\u033C\x03\x02\x02\x02\u033A\u0338\x03\x02" +
        "\x02\x02\u033A\u033B\x03\x02\x02\x02\u033B\xEC\x03\x02\x02\x02\u033C\u033A" +
        "\x03\x02\x02\x02\u033D\u033F\x07^\x02\x02\u033E\u0340\x05\xE9u\x02\u033F" +
        "\u033E\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0346\x03\x02" +
        "\x02\x02\u0341\u0343\x07\x0F\x02\x02\u0342\u0341\x03\x02\x02\x02\u0342" +
        "\u0343\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0347\x07\f\x02" +
        "\x02\u0345\u0347\x04\x0E\x0F\x02\u0346\u0342\x03\x02\x02\x02\u0346\u0345" +
        "\x03\x02\x02\x02\u0347\xEE\x03\x02\x02\x02\u0348\u034A\t\x18\x02\x02\u0349" +
        "\u0348\x03\x02\x02\x02\u034A\xF0\x03\x02\x02\x02\u034B\u034E\x05\xEFx" +
        "\x02\u034C\u034E\t\x19\x02\x02\u034D\u034B\x03\x02\x02\x02\u034D\u034C" +
        "\x03\x02\x02\x02\u034E\xF2\x03\x02\x02\x029\x02\u01AE\u01B2\u01B5\u01B7" +
        "\u01BF\u01C3\u01C6\u01CA\u01CE\u01D2\u01D8\u01DE\u01E0\u01E7\u01EE\u01F5" +
        "\u01F9\u01FD\u0285\u028E\u0290\u0297\u0299\u029D\u02A6\u02B3\u02B9\u02BD" +
        "\u02CF\u02D5\u02D9\u02E0\u02E6\u02EA\u02EF\u02F4\u02F6\u02FD\u02FF\u0303" +
        "\u030C\u0319\u031F\u0323\u0326\u0329\u032C\u0334\u033A\u033F\u0342\u0346" +
        "\u0349\u034D\n\x03$\x02\x031\x03\x032\x04\x038\x05\x039\x06\x03E\x07\x03" +
        "F\b\b\x02\x02";
_serializedATN: string = Utils.join([
    AltPython3Lexer._serializedATNSegment0,
    AltPython3Lexer._serializedATNSegment1,
], "");
__ATN: ATN_1.ATN;
get;
_ATN();
ATN_1.ATN;
{
    if (!AltPython3Lexer.__ATN) {
        AltPython3Lexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(AltPython3Lexer._serializedATN));
    }
    return AltPython3Lexer.__ATN;
}
