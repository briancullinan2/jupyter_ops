"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/csharp/CSharpSharwell/CSharpPreprocessorParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
using;
System.Linq;
var ATN_1 = require("antlr4ts/atn/ATN");
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var RuleContext_1 = require("antlr4ts/RuleContext");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var CSharpPreprocessorParser = /** @class */ (function (_super) {
    __extends(CSharpPreprocessorParser, _super);
    function CSharpPreprocessorParser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.conditions = new Stack(new bool[], { true:  });
        _this.ConditionalSymbols = new HashSet();
        return _this;
    }
    Object.defineProperty(CSharpPreprocessorParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return CSharpPreprocessorParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSharpPreprocessorParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "CSharpPreprocessorParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSharpPreprocessorParser.prototype, "ruleNames", {
        // @Override
        get: function () { return CSharpPreprocessorParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSharpPreprocessorParser.prototype, "serializedATN", {
        // @Override
        get: function () { return CSharpPreprocessorParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    CSharpPreprocessorParser.BYTE_ORDER_MARK = 1;
    CSharpPreprocessorParser.SINGLE_LINE_DOC_COMMENT = 2;
    CSharpPreprocessorParser.DELIMITED_DOC_COMMENT = 3;
    CSharpPreprocessorParser.SINGLE_LINE_COMMENT = 4;
    CSharpPreprocessorParser.DELIMITED_COMMENT = 5;
    CSharpPreprocessorParser.WHITESPACES = 6;
    CSharpPreprocessorParser.SHARP = 7;
    CSharpPreprocessorParser.ABSTRACT = 8;
    CSharpPreprocessorParser.ADD = 9;
    CSharpPreprocessorParser.ALIAS = 10;
    CSharpPreprocessorParser.ARGLIST = 11;
    CSharpPreprocessorParser.AS = 12;
    CSharpPreprocessorParser.ASCENDING = 13;
    CSharpPreprocessorParser.ASYNC = 14;
    CSharpPreprocessorParser.AWAIT = 15;
    CSharpPreprocessorParser.BASE = 16;
    CSharpPreprocessorParser.BOOL = 17;
    CSharpPreprocessorParser.BREAK = 18;
    CSharpPreprocessorParser.BY = 19;
    CSharpPreprocessorParser.BYTE = 20;
    CSharpPreprocessorParser.CASE = 21;
    CSharpPreprocessorParser.CATCH = 22;
    CSharpPreprocessorParser.CHAR = 23;
    CSharpPreprocessorParser.CHECKED = 24;
    CSharpPreprocessorParser.CLASS = 25;
    CSharpPreprocessorParser.CONST = 26;
    CSharpPreprocessorParser.CONTINUE = 27;
    CSharpPreprocessorParser.DECIMAL = 28;
    CSharpPreprocessorParser.DEFAULT = 29;
    CSharpPreprocessorParser.DELEGATE = 30;
    CSharpPreprocessorParser.DESCENDING = 31;
    CSharpPreprocessorParser.DO = 32;
    CSharpPreprocessorParser.DOUBLE = 33;
    CSharpPreprocessorParser.DYNAMIC = 34;
    CSharpPreprocessorParser.ELSE = 35;
    CSharpPreprocessorParser.ENUM = 36;
    CSharpPreprocessorParser.EQUALS = 37;
    CSharpPreprocessorParser.EVENT = 38;
    CSharpPreprocessorParser.EXPLICIT = 39;
    CSharpPreprocessorParser.EXTERN = 40;
    CSharpPreprocessorParser.FALSE = 41;
    CSharpPreprocessorParser.FINALLY = 42;
    CSharpPreprocessorParser.FIXED = 43;
    CSharpPreprocessorParser.FLOAT = 44;
    CSharpPreprocessorParser.FOR = 45;
    CSharpPreprocessorParser.FOREACH = 46;
    CSharpPreprocessorParser.FROM = 47;
    CSharpPreprocessorParser.GET = 48;
    CSharpPreprocessorParser.GOTO = 49;
    CSharpPreprocessorParser.GROUP = 50;
    CSharpPreprocessorParser.IF = 51;
    CSharpPreprocessorParser.IMPLICIT = 52;
    CSharpPreprocessorParser.IN = 53;
    CSharpPreprocessorParser.INT = 54;
    CSharpPreprocessorParser.INTERFACE = 55;
    CSharpPreprocessorParser.INTERNAL = 56;
    CSharpPreprocessorParser.INTO = 57;
    CSharpPreprocessorParser.IS = 58;
    CSharpPreprocessorParser.JOIN = 59;
    CSharpPreprocessorParser.LET = 60;
    CSharpPreprocessorParser.LOCK = 61;
    CSharpPreprocessorParser.LONG = 62;
    CSharpPreprocessorParser.NAMEOF = 63;
    CSharpPreprocessorParser.NAMESPACE = 64;
    CSharpPreprocessorParser.NEW = 65;
    CSharpPreprocessorParser.NULL = 66;
    CSharpPreprocessorParser.OBJECT = 67;
    CSharpPreprocessorParser.ON = 68;
    CSharpPreprocessorParser.OPERATOR = 69;
    CSharpPreprocessorParser.ORDERBY = 70;
    CSharpPreprocessorParser.OUT = 71;
    CSharpPreprocessorParser.OVERRIDE = 72;
    CSharpPreprocessorParser.PARAMS = 73;
    CSharpPreprocessorParser.PARTIAL = 74;
    CSharpPreprocessorParser.PRIVATE = 75;
    CSharpPreprocessorParser.PROTECTED = 76;
    CSharpPreprocessorParser.PUBLIC = 77;
    CSharpPreprocessorParser.READONLY = 78;
    CSharpPreprocessorParser.REF = 79;
    CSharpPreprocessorParser.REMOVE = 80;
    CSharpPreprocessorParser.RETURN = 81;
    CSharpPreprocessorParser.SBYTE = 82;
    CSharpPreprocessorParser.SEALED = 83;
    CSharpPreprocessorParser.SELECT = 84;
    CSharpPreprocessorParser.SET = 85;
    CSharpPreprocessorParser.SHORT = 86;
    CSharpPreprocessorParser.SIZEOF = 87;
    CSharpPreprocessorParser.STACKALLOC = 88;
    CSharpPreprocessorParser.STATIC = 89;
    CSharpPreprocessorParser.STRING = 90;
    CSharpPreprocessorParser.STRUCT = 91;
    CSharpPreprocessorParser.SWITCH = 92;
    CSharpPreprocessorParser.THIS = 93;
    CSharpPreprocessorParser.THROW = 94;
    CSharpPreprocessorParser.TRUE = 95;
    CSharpPreprocessorParser.TRY = 96;
    CSharpPreprocessorParser.TYPEOF = 97;
    CSharpPreprocessorParser.UINT = 98;
    CSharpPreprocessorParser.ULONG = 99;
    CSharpPreprocessorParser.UNCHECKED = 100;
    CSharpPreprocessorParser.UNSAFE = 101;
    CSharpPreprocessorParser.USHORT = 102;
    CSharpPreprocessorParser.USING = 103;
    CSharpPreprocessorParser.VIRTUAL = 104;
    CSharpPreprocessorParser.VOID = 105;
    CSharpPreprocessorParser.VOLATILE = 106;
    CSharpPreprocessorParser.WHEN = 107;
    CSharpPreprocessorParser.WHERE = 108;
    CSharpPreprocessorParser.WHILE = 109;
    CSharpPreprocessorParser.YIELD = 110;
    CSharpPreprocessorParser.IDENTIFIER = 111;
    CSharpPreprocessorParser.LITERAL_ACCESS = 112;
    CSharpPreprocessorParser.INTEGER_LITERAL = 113;
    CSharpPreprocessorParser.HEX_INTEGER_LITERAL = 114;
    CSharpPreprocessorParser.REAL_LITERAL = 115;
    CSharpPreprocessorParser.CHARACTER_LITERAL = 116;
    CSharpPreprocessorParser.REGULAR_STRING = 117;
    CSharpPreprocessorParser.VERBATIUM_STRING = 118;
    CSharpPreprocessorParser.INTERPOLATED_REGULAR_STRING_START = 119;
    CSharpPreprocessorParser.INTERPOLATED_VERBATIUM_STRING_START = 120;
    CSharpPreprocessorParser.OPEN_BRACE = 121;
    CSharpPreprocessorParser.CLOSE_BRACE = 122;
    CSharpPreprocessorParser.OPEN_BRACKET = 123;
    CSharpPreprocessorParser.CLOSE_BRACKET = 124;
    CSharpPreprocessorParser.OPEN_PARENS = 125;
    CSharpPreprocessorParser.CLOSE_PARENS = 126;
    CSharpPreprocessorParser.DOT = 127;
    CSharpPreprocessorParser.COMMA = 128;
    CSharpPreprocessorParser.COLON = 129;
    CSharpPreprocessorParser.SEMICOLON = 130;
    CSharpPreprocessorParser.PLUS = 131;
    CSharpPreprocessorParser.MINUS = 132;
    CSharpPreprocessorParser.STAR = 133;
    CSharpPreprocessorParser.DIV = 134;
    CSharpPreprocessorParser.PERCENT = 135;
    CSharpPreprocessorParser.AMP = 136;
    CSharpPreprocessorParser.BITWISE_OR = 137;
    CSharpPreprocessorParser.CARET = 138;
    CSharpPreprocessorParser.BANG = 139;
    CSharpPreprocessorParser.TILDE = 140;
    CSharpPreprocessorParser.ASSIGNMENT = 141;
    CSharpPreprocessorParser.LT = 142;
    CSharpPreprocessorParser.GT = 143;
    CSharpPreprocessorParser.INTERR = 144;
    CSharpPreprocessorParser.DOUBLE_COLON = 145;
    CSharpPreprocessorParser.OP_COALESCING = 146;
    CSharpPreprocessorParser.OP_INC = 147;
    CSharpPreprocessorParser.OP_DEC = 148;
    CSharpPreprocessorParser.OP_AND = 149;
    CSharpPreprocessorParser.OP_OR = 150;
    CSharpPreprocessorParser.OP_PTR = 151;
    CSharpPreprocessorParser.OP_EQ = 152;
    CSharpPreprocessorParser.OP_NE = 153;
    CSharpPreprocessorParser.OP_LE = 154;
    CSharpPreprocessorParser.OP_GE = 155;
    CSharpPreprocessorParser.OP_ADD_ASSIGNMENT = 156;
    CSharpPreprocessorParser.OP_SUB_ASSIGNMENT = 157;
    CSharpPreprocessorParser.OP_MULT_ASSIGNMENT = 158;
    CSharpPreprocessorParser.OP_DIV_ASSIGNMENT = 159;
    CSharpPreprocessorParser.OP_MOD_ASSIGNMENT = 160;
    CSharpPreprocessorParser.OP_AND_ASSIGNMENT = 161;
    CSharpPreprocessorParser.OP_OR_ASSIGNMENT = 162;
    CSharpPreprocessorParser.OP_XOR_ASSIGNMENT = 163;
    CSharpPreprocessorParser.OP_LEFT_SHIFT = 164;
    CSharpPreprocessorParser.OP_LEFT_SHIFT_ASSIGNMENT = 165;
    CSharpPreprocessorParser.DOUBLE_CURLY_INSIDE = 166;
    CSharpPreprocessorParser.OPEN_BRACE_INSIDE = 167;
    CSharpPreprocessorParser.REGULAR_CHAR_INSIDE = 168;
    CSharpPreprocessorParser.VERBATIUM_DOUBLE_QUOTE_INSIDE = 169;
    CSharpPreprocessorParser.DOUBLE_QUOTE_INSIDE = 170;
    CSharpPreprocessorParser.REGULAR_STRING_INSIDE = 171;
    CSharpPreprocessorParser.VERBATIUM_INSIDE_STRING = 172;
    CSharpPreprocessorParser.CLOSE_BRACE_INSIDE = 173;
    CSharpPreprocessorParser.FORMAT_STRING = 174;
    CSharpPreprocessorParser.DIRECTIVE_WHITESPACES = 175;
    CSharpPreprocessorParser.DIGITS = 176;
    CSharpPreprocessorParser.DEFINE = 177;
    CSharpPreprocessorParser.UNDEF = 178;
    CSharpPreprocessorParser.ELIF = 179;
    CSharpPreprocessorParser.ENDIF = 180;
    CSharpPreprocessorParser.LINE = 181;
    CSharpPreprocessorParser.ERROR = 182;
    CSharpPreprocessorParser.WARNING = 183;
    CSharpPreprocessorParser.REGION = 184;
    CSharpPreprocessorParser.ENDREGION = 185;
    CSharpPreprocessorParser.PRAGMA = 186;
    CSharpPreprocessorParser.DIRECTIVE_HIDDEN = 187;
    CSharpPreprocessorParser.CONDITIONAL_SYMBOL = 188;
    CSharpPreprocessorParser.DIRECTIVE_NEW_LINE = 189;
    CSharpPreprocessorParser.TEXT = 190;
    CSharpPreprocessorParser.DOUBLE_CURLY_CLOSE_INSIDE = 191;
    CSharpPreprocessorParser.RULE_preprocessor_directive = 0;
    CSharpPreprocessorParser.RULE_directive_new_line_or_sharp = 1;
    CSharpPreprocessorParser.RULE_preprocessor_expression = 2;
    // tslint:disable:no-trailing-whitespace
    CSharpPreprocessorParser.ruleNames = [
        "preprocessor_directive", "directive_new_line_or_sharp", "preprocessor_expression",
    ];
    CSharpPreprocessorParser._LITERAL_NAMES = [
        undefined, "'\u00EFu00BB\u00BF'", undefined, undefined, undefined, undefined,
        undefined, "'#'", "'abstract'", "'add'", "'alias'", "'__arglist'", "'as'",
        "'ascending'", "'async'", "'await'", "'base'", "'bool'", "'break'", "'by'",
        "'byte'", "'case'", "'catch'", "'char'", "'checked'", "'class'", "'const'",
        "'continue'", "'decimal'", "'default'", "'delegate'", "'descending'",
        "'do'", "'double'", "'dynamic'", "'else'", "'enum'", "'equals'", "'event'",
        "'explicit'", "'extern'", "'false'", "'finally'", "'fixed'", "'float'",
        "'for'", "'foreach'", "'from'", "'get'", "'goto'", "'group'", "'if'",
        "'implicit'", "'in'", "'int'", "'interface'", "'internal'", "'into'",
        "'is'", "'join'", "'let'", "'lock'", "'long'", "'nameof'", "'namespace'",
        "'new'", "'null'", "'object'", "'on'", "'operator'", "'orderby'", "'out'",
        "'override'", "'params'", "'partial'", "'private'", "'protected'", "'public'",
        "'readonly'", "'ref'", "'remove'", "'return'", "'sbyte'", "'sealed'",
        "'select'", "'set'", "'short'", "'sizeof'", "'stackalloc'", "'static'",
        "'string'", "'struct'", "'switch'", "'this'", "'throw'", "'true'", "'try'",
        "'typeof'", "'uint'", "'ulong'", "'unchecked'", "'unsafe'", "'ushort'",
        "'using'", "'virtual'", "'void'", "'volatile'", "'when'", "'where'", "'while'",
        "'yield'", undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "'{'", "'}'", "'['", "']'",
        "'('", "')'", "'.'", "','", "':'", "';'", "'+'", "'-'", "'*'", "'/'",
        "'%'", "'&'", "'|'", "'^'", "'!'", "'~'", "'='", "'<'", "'>'", "'?'",
        "'::'", "'??'", "'++'", "'--'", "'&&'", "'||'", "'->'", "'=='", "'!='",
        "'<='", "'>='", "'+='", "'-='", "'*='", "'/='", "'%='", "'&='", "'|='",
        "'^='", "'<<'", "'<<='", "'{{'", undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "'define'",
        "'undef'", "'elif'", "'endif'", "'line'", undefined, undefined, undefined,
        undefined, undefined, "'hidden'", undefined, undefined, undefined, "'}}'",
    ];
    CSharpPreprocessorParser._SYMBOLIC_NAMES = [
        undefined, "BYTE_ORDER_MARK", "SINGLE_LINE_DOC_COMMENT", "DELIMITED_DOC_COMMENT",
        "SINGLE_LINE_COMMENT", "DELIMITED_COMMENT", "WHITESPACES", "SHARP", "ABSTRACT",
        "ADD", "ALIAS", "ARGLIST", "AS", "ASCENDING", "ASYNC", "AWAIT", "BASE",
        "BOOL", "BREAK", "BY", "BYTE", "CASE", "CATCH", "CHAR", "CHECKED", "CLASS",
        "CONST", "CONTINUE", "DECIMAL", "DEFAULT", "DELEGATE", "DESCENDING", "DO",
        "DOUBLE", "DYNAMIC", "ELSE", "ENUM", "EQUALS", "EVENT", "EXPLICIT", "EXTERN",
        "FALSE", "FINALLY", "FIXED", "FLOAT", "FOR", "FOREACH", "FROM", "GET",
        "GOTO", "GROUP", "IF", "IMPLICIT", "IN", "INT", "INTERFACE", "INTERNAL",
        "INTO", "IS", "JOIN", "LET", "LOCK", "LONG", "NAMEOF", "NAMESPACE", "NEW",
        "NULL", "OBJECT", "ON", "OPERATOR", "ORDERBY", "OUT", "OVERRIDE", "PARAMS",
        "PARTIAL", "PRIVATE", "PROTECTED", "PUBLIC", "READONLY", "REF", "REMOVE",
        "RETURN", "SBYTE", "SEALED", "SELECT", "SET", "SHORT", "SIZEOF", "STACKALLOC",
        "STATIC", "STRING", "STRUCT", "SWITCH", "THIS", "THROW", "TRUE", "TRY",
        "TYPEOF", "UINT", "ULONG", "UNCHECKED", "UNSAFE", "USHORT", "USING", "VIRTUAL",
        "VOID", "VOLATILE", "WHEN", "WHERE", "WHILE", "YIELD", "IDENTIFIER", "LITERAL_ACCESS",
        "INTEGER_LITERAL", "HEX_INTEGER_LITERAL", "REAL_LITERAL", "CHARACTER_LITERAL",
        "REGULAR_STRING", "VERBATIUM_STRING", "INTERPOLATED_REGULAR_STRING_START",
        "INTERPOLATED_VERBATIUM_STRING_START", "OPEN_BRACE", "CLOSE_BRACE", "OPEN_BRACKET",
        "CLOSE_BRACKET", "OPEN_PARENS", "CLOSE_PARENS", "DOT", "COMMA", "COLON",
        "SEMICOLON", "PLUS", "MINUS", "STAR", "DIV", "PERCENT", "AMP", "BITWISE_OR",
        "CARET", "BANG", "TILDE", "ASSIGNMENT", "LT", "GT", "INTERR", "DOUBLE_COLON",
        "OP_COALESCING", "OP_INC", "OP_DEC", "OP_AND", "OP_OR", "OP_PTR", "OP_EQ",
        "OP_NE", "OP_LE", "OP_GE", "OP_ADD_ASSIGNMENT", "OP_SUB_ASSIGNMENT", "OP_MULT_ASSIGNMENT",
        "OP_DIV_ASSIGNMENT", "OP_MOD_ASSIGNMENT", "OP_AND_ASSIGNMENT", "OP_OR_ASSIGNMENT",
        "OP_XOR_ASSIGNMENT", "OP_LEFT_SHIFT", "OP_LEFT_SHIFT_ASSIGNMENT", "DOUBLE_CURLY_INSIDE",
        "OPEN_BRACE_INSIDE", "REGULAR_CHAR_INSIDE", "VERBATIUM_DOUBLE_QUOTE_INSIDE",
        "DOUBLE_QUOTE_INSIDE", "REGULAR_STRING_INSIDE", "VERBATIUM_INSIDE_STRING",
        "CLOSE_BRACE_INSIDE", "FORMAT_STRING", "DIRECTIVE_WHITESPACES", "DIGITS",
        "DEFINE", "UNDEF", "ELIF", "ENDIF", "LINE", "ERROR", "WARNING", "REGION",
        "ENDREGION", "PRAGMA", "DIRECTIVE_HIDDEN", "CONDITIONAL_SYMBOL", "DIRECTIVE_NEW_LINE",
        "TEXT", "DOUBLE_CURLY_CLOSE_INSIDE",
    ];
    CSharpPreprocessorParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CSharpPreprocessorParser._LITERAL_NAMES, CSharpPreprocessorParser._SYMBOLIC_NAMES, []);
    return CSharpPreprocessorParser;
}(Parser_1.Parser));
exports.CSharpPreprocessorParser = CSharpPreprocessorParser;
{
    "DEBUG";
}
;
constructor(input, TokenStream);
{
    _this = _super.call(this, input) || this;
    this._interp = new ParserATNSimulator_1.ParserATNSimulator(CSharpPreprocessorParser._ATN, this);
}
preprocessor_directive();
Preprocessor_directiveContext;
{
    var _localctx = new Preprocessor_directiveContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, CSharpPreprocessorParser.RULE_preprocessor_directive);
    var _la = void 0;
    try {
        this.state = 75;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case CSharpPreprocessorParser.DEFINE:
                _localctx = new PreprocessorDeclarationContext(_localctx);
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 6;
                    this.match(CSharpPreprocessorParser.DEFINE);
                    this.state = 7;
                    _localctx._CONDITIONAL_SYMBOL = this.match(CSharpPreprocessorParser.CONDITIONAL_SYMBOL);
                    this.state = 8;
                    this.directive_new_line_or_sharp();
                    ConditionalSymbols.Add((_localctx._CONDITIONAL_SYMBOL != null ? _localctx._CONDITIONAL_SYMBOL.text : undefined));
                    _localctx.value = conditions.All(function (c) { return c; });
                }
                break;
            case CSharpPreprocessorParser.UNDEF:
                _localctx = new PreprocessorDeclarationContext(_localctx);
                this.enterOuterAlt(_localctx, 2);
                {
                    this.state = 11;
                    this.match(CSharpPreprocessorParser.UNDEF);
                    this.state = 12;
                    _localctx._CONDITIONAL_SYMBOL = this.match(CSharpPreprocessorParser.CONDITIONAL_SYMBOL);
                    this.state = 13;
                    this.directive_new_line_or_sharp();
                    ConditionalSymbols.Remove((_localctx._CONDITIONAL_SYMBOL != null ? _localctx._CONDITIONAL_SYMBOL.text : undefined));
                    _localctx.value = conditions.All(function (c) { return c; });
                }
                break;
            case CSharpPreprocessorParser.IF:
                _localctx = new PreprocessorConditionalContext(_localctx);
                this.enterOuterAlt(_localctx, 3);
                {
                    this.state = 16;
                    this.match(CSharpPreprocessorParser.IF);
                    this.state = 17;
                    _localctx._expr = this.preprocessor_expression(0);
                    this.state = 18;
                    this.directive_new_line_or_sharp();
                    _localctx.value = _localctx._expr.value == "true" && conditions.All(function (c) { return c; });
                    conditions.Push(_localctx._expr.value == "true");
                }
                break;
            case CSharpPreprocessorParser.ELIF:
                _localctx = new PreprocessorConditionalContext(_localctx);
                this.enterOuterAlt(_localctx, 4);
                {
                    this.state = 21;
                    this.match(CSharpPreprocessorParser.ELIF);
                    this.state = 22;
                    _localctx._expr = this.preprocessor_expression(0);
                    this.state = 23;
                    this.directive_new_line_or_sharp();
                    if (!conditions.Peek()) {
                        conditions.Pop();
                        _localctx.value = _localctx._expr.value == "true" && conditions.All(function (c) { return c; });
                        conditions.Push(_localctx._expr.value == "true");
                    }
                    else
                        _localctx.value = false;
                }
                break;
            case CSharpPreprocessorParser.ELSE:
                _localctx = new PreprocessorConditionalContext(_localctx);
                this.enterOuterAlt(_localctx, 5);
                {
                    this.state = 26;
                    this.match(CSharpPreprocessorParser.ELSE);
                    this.state = 27;
                    this.directive_new_line_or_sharp();
                    if (!conditions.Peek()) {
                        conditions.Pop();
                        _localctx.value = true && conditions.All(function (c) { return c; });
                        conditions.Push(true);
                    }
                    else
                        _localctx.value = false;
                }
                break;
            case CSharpPreprocessorParser.ENDIF:
                _localctx = new PreprocessorConditionalContext(_localctx);
                this.enterOuterAlt(_localctx, 6);
                {
                    this.state = 30;
                    this.match(CSharpPreprocessorParser.ENDIF);
                    this.state = 31;
                    this.directive_new_line_or_sharp();
                    conditions.Pop();
                    _localctx.value = conditions.Peek();
                }
                break;
            case CSharpPreprocessorParser.LINE:
                _localctx = new PreprocessorLineContext(_localctx);
                this.enterOuterAlt(_localctx, 7);
                {
                    this.state = 34;
                    this.match(CSharpPreprocessorParser.LINE);
                    this.state = 41;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case CSharpPreprocessorParser.DIGITS:
                            {
                                this.state = 35;
                                this.match(CSharpPreprocessorParser.DIGITS);
                                this.state = 37;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === CSharpPreprocessorParser.STRING) {
                                    {
                                        this.state = 36;
                                        this.match(CSharpPreprocessorParser.STRING);
                                    }
                                }
                            }
                            break;
                        case CSharpPreprocessorParser.DEFAULT:
                            {
                                this.state = 39;
                                this.match(CSharpPreprocessorParser.DEFAULT);
                            }
                            break;
                        case CSharpPreprocessorParser.DIRECTIVE_HIDDEN:
                            {
                                this.state = 40;
                                this.match(CSharpPreprocessorParser.DIRECTIVE_HIDDEN);
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 43;
                    this.directive_new_line_or_sharp();
                    _localctx.value = conditions.All(function (c) { return c; });
                }
                break;
            case CSharpPreprocessorParser.ERROR:
                _localctx = new PreprocessorDiagnosticContext(_localctx);
                this.enterOuterAlt(_localctx, 8);
                {
                    this.state = 46;
                    this.match(CSharpPreprocessorParser.ERROR);
                    this.state = 47;
                    this.match(CSharpPreprocessorParser.TEXT);
                    this.state = 48;
                    this.directive_new_line_or_sharp();
                    _localctx.value = conditions.All(function (c) { return c; });
                }
                break;
            case CSharpPreprocessorParser.WARNING:
                _localctx = new PreprocessorDiagnosticContext(_localctx);
                this.enterOuterAlt(_localctx, 9);
                {
                    this.state = 51;
                    this.match(CSharpPreprocessorParser.WARNING);
                    this.state = 52;
                    this.match(CSharpPreprocessorParser.TEXT);
                    this.state = 53;
                    this.directive_new_line_or_sharp();
                    _localctx.value = conditions.All(function (c) { return c; });
                }
                break;
            case CSharpPreprocessorParser.REGION:
                _localctx = new PreprocessorRegionContext(_localctx);
                this.enterOuterAlt(_localctx, 10);
                {
                    this.state = 56;
                    this.match(CSharpPreprocessorParser.REGION);
                    this.state = 58;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === CSharpPreprocessorParser.TEXT) {
                        {
                            this.state = 57;
                            this.match(CSharpPreprocessorParser.TEXT);
                        }
                    }
                    this.state = 60;
                    this.directive_new_line_or_sharp();
                    _localctx.value = conditions.All(function (c) { return c; });
                }
                break;
            case CSharpPreprocessorParser.ENDREGION:
                _localctx = new PreprocessorRegionContext(_localctx);
                this.enterOuterAlt(_localctx, 11);
                {
                    this.state = 63;
                    this.match(CSharpPreprocessorParser.ENDREGION);
                    this.state = 65;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === CSharpPreprocessorParser.TEXT) {
                        {
                            this.state = 64;
                            this.match(CSharpPreprocessorParser.TEXT);
                        }
                    }
                    this.state = 67;
                    this.directive_new_line_or_sharp();
                    _localctx.value = conditions.All(function (c) { return c; });
                }
                break;
            case CSharpPreprocessorParser.PRAGMA:
                _localctx = new PreprocessorPragmaContext(_localctx);
                this.enterOuterAlt(_localctx, 12);
                {
                    this.state = 70;
                    this.match(CSharpPreprocessorParser.PRAGMA);
                    this.state = 71;
                    this.match(CSharpPreprocessorParser.TEXT);
                    this.state = 72;
                    this.directive_new_line_or_sharp();
                    _localctx.value = conditions.All(function (c) { return c; });
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
}
directive_new_line_or_sharp();
Directive_new_line_or_sharpContext;
{
    var _localctx = new Directive_new_line_or_sharpContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, CSharpPreprocessorParser.RULE_directive_new_line_or_sharp);
    var _la = void 0;
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 77;
            _la = this._input.LA(1);
            if (!(_la === CSharpPreprocessorParser.EOF || _la === CSharpPreprocessorParser.DIRECTIVE_NEW_LINE)) {
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
}
preprocessor_expression();
Preprocessor_expressionContext;
preprocessor_expression(_p, number);
Preprocessor_expressionContext;
preprocessor_expression(_p ?  : number);
Preprocessor_expressionContext;
{
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var _localctx = new Preprocessor_expressionContext(this._ctx, _parentState);
    var _prevctx = _localctx;
    var _startState = 4;
    this.enterRecursionRule(_localctx, 4, CSharpPreprocessorParser.RULE_preprocessor_expression, _p);
    try {
        var _alt = void 0;
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 95;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CSharpPreprocessorParser.TRUE:
                    {
                        this.state = 80;
                        this.match(CSharpPreprocessorParser.TRUE);
                        _localctx.value = "true";
                    }
                    break;
                case CSharpPreprocessorParser.FALSE:
                    {
                        this.state = 82;
                        this.match(CSharpPreprocessorParser.FALSE);
                        _localctx.value = "false";
                    }
                    break;
                case CSharpPreprocessorParser.CONDITIONAL_SYMBOL:
                    {
                        this.state = 84;
                        _localctx._CONDITIONAL_SYMBOL = this.match(CSharpPreprocessorParser.CONDITIONAL_SYMBOL);
                        _localctx.value = ConditionalSymbols.Contains((_localctx._CONDITIONAL_SYMBOL != null ? _localctx._CONDITIONAL_SYMBOL.text : undefined)) ? "true" : "false";
                    }
                    break;
                case CSharpPreprocessorParser.OPEN_PARENS:
                    {
                        this.state = 86;
                        this.match(CSharpPreprocessorParser.OPEN_PARENS);
                        this.state = 87;
                        _localctx._expr = this.preprocessor_expression(0);
                        this.state = 88;
                        this.match(CSharpPreprocessorParser.CLOSE_PARENS);
                        _localctx.value = _localctx._expr.value;
                    }
                    break;
                case CSharpPreprocessorParser.BANG:
                    {
                        this.state = 91;
                        this.match(CSharpPreprocessorParser.BANG);
                        this.state = 92;
                        _localctx._expr = this.preprocessor_expression(5);
                        _localctx.value = _localctx._expr.value == "true" ? "false" : "true";
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
            this._ctx._stop = this._input.tryLT(-1);
            this.state = 119;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = _localctx;
                    {
                        this.state = 117;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                            case 1:
                                {
                                    _localctx = new Preprocessor_expressionContext(_parentctx, _parentState);
                                    _localctx._expr1 = _prevctx;
                                    this.pushNewRecursionContext(_localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
                                    this.state = 97;
                                    if (!(this.precpred(this._ctx, 4))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                    }
                                    this.state = 98;
                                    this.match(CSharpPreprocessorParser.OP_EQ);
                                    this.state = 99;
                                    _localctx._expr2 = this.preprocessor_expression(5);
                                    _localctx.value = (_localctx._expr1.value == _localctx._expr2.value ? "true" : "false");
                                }
                                break;
                            case 2:
                                {
                                    _localctx = new Preprocessor_expressionContext(_parentctx, _parentState);
                                    _localctx._expr1 = _prevctx;
                                    this.pushNewRecursionContext(_localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
                                    this.state = 102;
                                    if (!(this.precpred(this._ctx, 3))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                    }
                                    this.state = 103;
                                    this.match(CSharpPreprocessorParser.OP_NE);
                                    this.state = 104;
                                    _localctx._expr2 = this.preprocessor_expression(4);
                                    _localctx.value = (_localctx._expr1.value != _localctx._expr2.value ? "true" : "false");
                                }
                                break;
                            case 3:
                                {
                                    _localctx = new Preprocessor_expressionContext(_parentctx, _parentState);
                                    _localctx._expr1 = _prevctx;
                                    this.pushNewRecursionContext(_localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
                                    this.state = 107;
                                    if (!(this.precpred(this._ctx, 2))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                    }
                                    this.state = 108;
                                    this.match(CSharpPreprocessorParser.OP_AND);
                                    this.state = 109;
                                    _localctx._expr2 = this.preprocessor_expression(3);
                                    _localctx.value = (_localctx._expr1.value == "true" && _localctx._expr2.value == "true" ? "true" : "false");
                                }
                                break;
                            case 4:
                                {
                                    _localctx = new Preprocessor_expressionContext(_parentctx, _parentState);
                                    _localctx._expr1 = _prevctx;
                                    this.pushNewRecursionContext(_localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
                                    this.state = 112;
                                    if (!(this.precpred(this._ctx, 1))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                    }
                                    this.state = 113;
                                    this.match(CSharpPreprocessorParser.OP_OR);
                                    this.state = 114;
                                    _localctx._expr2 = this.preprocessor_expression(2);
                                    _localctx.value = (_localctx._expr1.value == "true" || _localctx._expr2.value == "true" ? "true" : "false");
                                }
                                break;
                        }
                    }
                }
                this.state = 121;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
        this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
}
sempred(_localctx, RuleContext_1.RuleContext, ruleIndex, number, predIndex, number);
boolean;
{
    switch (ruleIndex) {
        case 2:
            return this.preprocessor_expression_sempred(_localctx, predIndex);
    }
    return true;
}
preprocessor_expression_sempred(_localctx, Preprocessor_expressionContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 0:
            return this.precpred(this._ctx, 4);
        case 1:
            return this.precpred(this._ctx, 3);
        case 2:
            return this.precpred(this._ctx, 2);
        case 3:
            return this.precpred(this._ctx, 1);
    }
    return true;
}
_serializedATN: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xC1}\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05" +
        "\x02(\n\x02\x03\x02\x03\x02\x05\x02,\n\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x05\x02=\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x05\x02D\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x05\x02N\n\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x05\x04b\n\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04x" +
        "\n\x04\f\x04\x0E\x04{\v\x04\x03\x04\x02\x02\x03\x06\x05\x02\x02\x04\x02" +
        "\x06\x02\x02\x03\x03\x03\xBF\xBF\x02\x91\x02M\x03\x02\x02\x02\x04O\x03" +
        "\x02\x02\x02\x06a\x03\x02\x02\x02\b\t\x07\xB3\x02\x02\t\n\x07\xBE\x02" +
        "\x02\n\v\x05\x04\x03\x02\v\f\b\x02\x01\x02\fN\x03\x02\x02\x02\r\x0E\x07" +
        "\xB4\x02\x02\x0E\x0F\x07\xBE\x02\x02\x0F\x10\x05\x04\x03\x02\x10\x11\b" +
        "\x02\x01\x02\x11N\x03\x02\x02\x02\x12\x13\x075\x02\x02\x13\x14\x05\x06" +
        "\x04\x02\x14\x15\x05\x04\x03\x02\x15\x16\b\x02\x01\x02\x16N\x03\x02\x02" +
        "\x02\x17\x18\x07\xB5\x02\x02\x18\x19\x05\x06\x04\x02\x19\x1A\x05\x04\x03" +
        "\x02\x1A\x1B\b\x02\x01\x02\x1BN\x03\x02\x02\x02\x1C\x1D\x07%\x02\x02\x1D" +
        "\x1E\x05\x04\x03\x02\x1E\x1F\b\x02\x01\x02\x1FN\x03\x02\x02\x02 !\x07" +
        "\xB6\x02\x02!\"\x05\x04\x03\x02\"#\b\x02\x01\x02#N\x03\x02\x02\x02$+\x07" +
        "\xB7\x02\x02%\'\x07\xB2\x02\x02&(\x07\\\x02\x02\'&\x03\x02\x02\x02\'(" +
        "\x03\x02\x02\x02(,\x03\x02\x02\x02),\x07\x1F\x02\x02*,\x07\xBD\x02\x02" +
        "+%\x03\x02\x02\x02+)\x03\x02\x02\x02+*\x03\x02\x02\x02,-\x03\x02\x02\x02" +
        "-.\x05\x04\x03\x02./\b\x02\x01\x02/N\x03\x02\x02\x0201\x07\xB8\x02\x02" +
        "12\x07\xC0\x02\x0223\x05\x04\x03\x0234\b\x02\x01\x024N\x03\x02\x02\x02" +
        "56\x07\xB9\x02\x0267\x07\xC0\x02\x0278\x05\x04\x03\x0289\b\x02\x01\x02" +
        "9N\x03\x02\x02\x02:<\x07\xBA\x02\x02;=\x07\xC0\x02\x02<;\x03\x02\x02\x02" +
        "<=\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x05\x04\x03\x02?@\b\x02\x01\x02" +
        "@N\x03\x02\x02\x02AC\x07\xBB\x02\x02BD\x07\xC0\x02\x02CB\x03\x02\x02\x02" +
        "CD\x03\x02\x02\x02DE\x03\x02\x02\x02EF\x05\x04\x03\x02FG\b\x02\x01\x02" +
        "GN\x03\x02\x02\x02HI\x07\xBC\x02\x02IJ\x07\xC0\x02\x02JK\x05\x04\x03\x02" +
        "KL\b\x02\x01\x02LN\x03\x02\x02\x02M\b\x03\x02\x02\x02M\r\x03\x02\x02\x02" +
        "M\x12\x03\x02\x02\x02M\x17\x03\x02\x02\x02M\x1C\x03\x02\x02\x02M \x03" +
        "\x02\x02\x02M$\x03\x02\x02\x02M0\x03\x02\x02\x02M5\x03\x02\x02\x02M:\x03" +
        "\x02\x02\x02MA\x03\x02\x02\x02MH\x03\x02\x02\x02N\x03\x03\x02\x02\x02" +
        "OP\t\x02\x02\x02P\x05\x03\x02\x02\x02QR\b\x04\x01\x02RS\x07a\x02\x02S" +
        "b\b\x04\x01\x02TU\x07+\x02\x02Ub\b\x04\x01\x02VW\x07\xBE\x02\x02Wb\b\x04" +
        "\x01\x02XY\x07\x7F\x02\x02YZ\x05\x06\x04\x02Z[\x07\x80\x02\x02[\\\b\x04" +
        "\x01\x02\\b\x03\x02\x02\x02]^\x07\x8D\x02\x02^_\x05\x06\x04\x07_`\b\x04" +
        "\x01\x02`b\x03\x02\x02\x02aQ\x03\x02\x02\x02aT\x03\x02\x02\x02aV\x03\x02" +
        "\x02\x02aX\x03\x02\x02\x02a]\x03\x02\x02\x02by\x03\x02\x02\x02cd\f\x06" +
        "\x02\x02de\x07\x9A\x02\x02ef\x05\x06\x04\x07fg\b\x04\x01\x02gx\x03\x02" +
        "\x02\x02hi\f\x05\x02\x02ij\x07\x9B\x02\x02jk\x05\x06\x04\x06kl\b\x04\x01" +
        "\x02lx\x03\x02\x02\x02mn\f\x04\x02\x02no\x07\x97\x02\x02op\x05\x06\x04" +
        "\x05pq\b\x04\x01\x02qx\x03\x02\x02\x02rs\f\x03\x02\x02st\x07\x98\x02\x02" +
        "tu\x05\x06\x04\x04uv\b\x04\x01\x02vx\x03\x02\x02\x02wc\x03\x02\x02\x02" +
        "wh\x03\x02\x02\x02wm\x03\x02\x02\x02wr\x03\x02\x02\x02x{\x03\x02\x02\x02" +
        "yw\x03\x02\x02\x02yz\x03\x02\x02\x02z\x07\x03\x02\x02\x02{y\x03\x02\x02" +
        "\x02\n\'+<CMawy";
__ATN: ATN_1.ATN;
get;
_ATN();
ATN_1.ATN;
{
    if (!CSharpPreprocessorParser.__ATN) {
        CSharpPreprocessorParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CSharpPreprocessorParser._serializedATN));
    }
    return CSharpPreprocessorParser.__ATN;
}
var Preprocessor_directiveContext = /** @class */ (function (_super) {
    __extends(Preprocessor_directiveContext, _super);
    function Preprocessor_directiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Preprocessor_directiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CSharpPreprocessorParser.RULE_preprocessor_directive; },
        enumerable: true,
        configurable: true
    });
    Preprocessor_directiveContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
        this.value = ctx.value;
    };
    return Preprocessor_directiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Preprocessor_directiveContext = Preprocessor_directiveContext;
var PreprocessorDeclarationContext = /** @class */ (function (_super) {
    __extends(PreprocessorDeclarationContext, _super);
    function PreprocessorDeclarationContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorDeclarationContext.prototype.DEFINE = function () { return this.tryGetToken(CSharpPreprocessorParser.DEFINE, 0); };
    PreprocessorDeclarationContext.prototype.CONDITIONAL_SYMBOL = function () { return this.getToken(CSharpPreprocessorParser.CONDITIONAL_SYMBOL, 0); };
    PreprocessorDeclarationContext.prototype.directive_new_line_or_sharp = function () {
        return this.getRuleContext(0, Directive_new_line_or_sharpContext);
    };
    PreprocessorDeclarationContext.prototype.UNDEF = function () { return this.tryGetToken(CSharpPreprocessorParser.UNDEF, 0); };
    // @Override
    PreprocessorDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorDeclaration) {
            listener.enterPreprocessorDeclaration(this);
        }
    };
    // @Override
    PreprocessorDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorDeclaration) {
            listener.exitPreprocessorDeclaration(this);
        }
    };
    // @Override
    PreprocessorDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorDeclaration) {
            return visitor.visitPreprocessorDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorDeclarationContext;
}(Preprocessor_directiveContext));
exports.PreprocessorDeclarationContext = PreprocessorDeclarationContext;
var PreprocessorConditionalContext = /** @class */ (function (_super) {
    __extends(PreprocessorConditionalContext, _super);
    function PreprocessorConditionalContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorConditionalContext.prototype.IF = function () { return this.tryGetToken(CSharpPreprocessorParser.IF, 0); };
    PreprocessorConditionalContext.prototype.directive_new_line_or_sharp = function () {
        return this.getRuleContext(0, Directive_new_line_or_sharpContext);
    };
    PreprocessorConditionalContext.prototype.preprocessor_expression = function () {
        return this.tryGetRuleContext(0, Preprocessor_expressionContext);
    };
    PreprocessorConditionalContext.prototype.ELIF = function () { return this.tryGetToken(CSharpPreprocessorParser.ELIF, 0); };
    PreprocessorConditionalContext.prototype.ELSE = function () { return this.tryGetToken(CSharpPreprocessorParser.ELSE, 0); };
    PreprocessorConditionalContext.prototype.ENDIF = function () { return this.tryGetToken(CSharpPreprocessorParser.ENDIF, 0); };
    // @Override
    PreprocessorConditionalContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorConditional) {
            listener.enterPreprocessorConditional(this);
        }
    };
    // @Override
    PreprocessorConditionalContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorConditional) {
            listener.exitPreprocessorConditional(this);
        }
    };
    // @Override
    PreprocessorConditionalContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorConditional) {
            return visitor.visitPreprocessorConditional(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorConditionalContext;
}(Preprocessor_directiveContext));
exports.PreprocessorConditionalContext = PreprocessorConditionalContext;
var PreprocessorLineContext = /** @class */ (function (_super) {
    __extends(PreprocessorLineContext, _super);
    function PreprocessorLineContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorLineContext.prototype.LINE = function () { return this.getToken(CSharpPreprocessorParser.LINE, 0); };
    PreprocessorLineContext.prototype.directive_new_line_or_sharp = function () {
        return this.getRuleContext(0, Directive_new_line_or_sharpContext);
    };
    PreprocessorLineContext.prototype.DIGITS = function () { return this.tryGetToken(CSharpPreprocessorParser.DIGITS, 0); };
    PreprocessorLineContext.prototype.DEFAULT = function () { return this.tryGetToken(CSharpPreprocessorParser.DEFAULT, 0); };
    PreprocessorLineContext.prototype.DIRECTIVE_HIDDEN = function () { return this.tryGetToken(CSharpPreprocessorParser.DIRECTIVE_HIDDEN, 0); };
    PreprocessorLineContext.prototype.STRING = function () { return this.tryGetToken(CSharpPreprocessorParser.STRING, 0); };
    // @Override
    PreprocessorLineContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorLine) {
            listener.enterPreprocessorLine(this);
        }
    };
    // @Override
    PreprocessorLineContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorLine) {
            listener.exitPreprocessorLine(this);
        }
    };
    // @Override
    PreprocessorLineContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorLine) {
            return visitor.visitPreprocessorLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorLineContext;
}(Preprocessor_directiveContext));
exports.PreprocessorLineContext = PreprocessorLineContext;
var PreprocessorDiagnosticContext = /** @class */ (function (_super) {
    __extends(PreprocessorDiagnosticContext, _super);
    function PreprocessorDiagnosticContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorDiagnosticContext.prototype.ERROR = function () { return this.tryGetToken(CSharpPreprocessorParser.ERROR, 0); };
    PreprocessorDiagnosticContext.prototype.TEXT = function () { return this.getToken(CSharpPreprocessorParser.TEXT, 0); };
    PreprocessorDiagnosticContext.prototype.directive_new_line_or_sharp = function () {
        return this.getRuleContext(0, Directive_new_line_or_sharpContext);
    };
    PreprocessorDiagnosticContext.prototype.WARNING = function () { return this.tryGetToken(CSharpPreprocessorParser.WARNING, 0); };
    // @Override
    PreprocessorDiagnosticContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorDiagnostic) {
            listener.enterPreprocessorDiagnostic(this);
        }
    };
    // @Override
    PreprocessorDiagnosticContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorDiagnostic) {
            listener.exitPreprocessorDiagnostic(this);
        }
    };
    // @Override
    PreprocessorDiagnosticContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorDiagnostic) {
            return visitor.visitPreprocessorDiagnostic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorDiagnosticContext;
}(Preprocessor_directiveContext));
exports.PreprocessorDiagnosticContext = PreprocessorDiagnosticContext;
var PreprocessorRegionContext = /** @class */ (function (_super) {
    __extends(PreprocessorRegionContext, _super);
    function PreprocessorRegionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorRegionContext.prototype.REGION = function () { return this.tryGetToken(CSharpPreprocessorParser.REGION, 0); };
    PreprocessorRegionContext.prototype.directive_new_line_or_sharp = function () {
        return this.getRuleContext(0, Directive_new_line_or_sharpContext);
    };
    PreprocessorRegionContext.prototype.TEXT = function () { return this.tryGetToken(CSharpPreprocessorParser.TEXT, 0); };
    PreprocessorRegionContext.prototype.ENDREGION = function () { return this.tryGetToken(CSharpPreprocessorParser.ENDREGION, 0); };
    // @Override
    PreprocessorRegionContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorRegion) {
            listener.enterPreprocessorRegion(this);
        }
    };
    // @Override
    PreprocessorRegionContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorRegion) {
            listener.exitPreprocessorRegion(this);
        }
    };
    // @Override
    PreprocessorRegionContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorRegion) {
            return visitor.visitPreprocessorRegion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorRegionContext;
}(Preprocessor_directiveContext));
exports.PreprocessorRegionContext = PreprocessorRegionContext;
var PreprocessorPragmaContext = /** @class */ (function (_super) {
    __extends(PreprocessorPragmaContext, _super);
    function PreprocessorPragmaContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreprocessorPragmaContext.prototype.PRAGMA = function () { return this.getToken(CSharpPreprocessorParser.PRAGMA, 0); };
    PreprocessorPragmaContext.prototype.TEXT = function () { return this.getToken(CSharpPreprocessorParser.TEXT, 0); };
    PreprocessorPragmaContext.prototype.directive_new_line_or_sharp = function () {
        return this.getRuleContext(0, Directive_new_line_or_sharpContext);
    };
    // @Override
    PreprocessorPragmaContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessorPragma) {
            listener.enterPreprocessorPragma(this);
        }
    };
    // @Override
    PreprocessorPragmaContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessorPragma) {
            listener.exitPreprocessorPragma(this);
        }
    };
    // @Override
    PreprocessorPragmaContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessorPragma) {
            return visitor.visitPreprocessorPragma(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreprocessorPragmaContext;
}(Preprocessor_directiveContext));
exports.PreprocessorPragmaContext = PreprocessorPragmaContext;
var Directive_new_line_or_sharpContext = /** @class */ (function (_super) {
    __extends(Directive_new_line_or_sharpContext, _super);
    function Directive_new_line_or_sharpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Directive_new_line_or_sharpContext.prototype.DIRECTIVE_NEW_LINE = function () { return this.tryGetToken(CSharpPreprocessorParser.DIRECTIVE_NEW_LINE, 0); };
    Directive_new_line_or_sharpContext.prototype.EOF = function () { return this.tryGetToken(CSharpPreprocessorParser.EOF, 0); };
    Object.defineProperty(Directive_new_line_or_sharpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CSharpPreprocessorParser.RULE_directive_new_line_or_sharp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Directive_new_line_or_sharpContext.prototype.enterRule = function (listener) {
        if (listener.enterDirective_new_line_or_sharp) {
            listener.enterDirective_new_line_or_sharp(this);
        }
    };
    // @Override
    Directive_new_line_or_sharpContext.prototype.exitRule = function (listener) {
        if (listener.exitDirective_new_line_or_sharp) {
            listener.exitDirective_new_line_or_sharp(this);
        }
    };
    // @Override
    Directive_new_line_or_sharpContext.prototype.accept = function (visitor) {
        if (visitor.visitDirective_new_line_or_sharp) {
            return visitor.visitDirective_new_line_or_sharp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Directive_new_line_or_sharpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Directive_new_line_or_sharpContext = Directive_new_line_or_sharpContext;
var Preprocessor_expressionContext = /** @class */ (function (_super) {
    __extends(Preprocessor_expressionContext, _super);
    function Preprocessor_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Preprocessor_expressionContext.prototype.TRUE = function () { return this.tryGetToken(CSharpPreprocessorParser.TRUE, 0); };
    Preprocessor_expressionContext.prototype.FALSE = function () { return this.tryGetToken(CSharpPreprocessorParser.FALSE, 0); };
    Preprocessor_expressionContext.prototype.CONDITIONAL_SYMBOL = function () { return this.tryGetToken(CSharpPreprocessorParser.CONDITIONAL_SYMBOL, 0); };
    Preprocessor_expressionContext.prototype.OPEN_PARENS = function () { return this.tryGetToken(CSharpPreprocessorParser.OPEN_PARENS, 0); };
    Preprocessor_expressionContext.prototype.CLOSE_PARENS = function () { return this.tryGetToken(CSharpPreprocessorParser.CLOSE_PARENS, 0); };
    Preprocessor_expressionContext.prototype.preprocessor_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Preprocessor_expressionContext);
        }
        else {
            return this.getRuleContext(i, Preprocessor_expressionContext);
        }
    };
    Preprocessor_expressionContext.prototype.BANG = function () { return this.tryGetToken(CSharpPreprocessorParser.BANG, 0); };
    Preprocessor_expressionContext.prototype.OP_EQ = function () { return this.tryGetToken(CSharpPreprocessorParser.OP_EQ, 0); };
    Preprocessor_expressionContext.prototype.OP_NE = function () { return this.tryGetToken(CSharpPreprocessorParser.OP_NE, 0); };
    Preprocessor_expressionContext.prototype.OP_AND = function () { return this.tryGetToken(CSharpPreprocessorParser.OP_AND, 0); };
    Preprocessor_expressionContext.prototype.OP_OR = function () { return this.tryGetToken(CSharpPreprocessorParser.OP_OR, 0); };
    Object.defineProperty(Preprocessor_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CSharpPreprocessorParser.RULE_preprocessor_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Preprocessor_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPreprocessor_expression) {
            listener.enterPreprocessor_expression(this);
        }
    };
    // @Override
    Preprocessor_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPreprocessor_expression) {
            listener.exitPreprocessor_expression(this);
        }
    };
    // @Override
    Preprocessor_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPreprocessor_expression) {
            return visitor.visitPreprocessor_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Preprocessor_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Preprocessor_expressionContext = Preprocessor_expressionContext;
