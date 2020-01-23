"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/javascript/ecmascript/Python/ECMAScript.g4 by ANTLR 4.7.3-SNAPSHOT
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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var ECMAScriptParser = /** @class */ (function (_super) {
    __extends(ECMAScriptParser, _super);
    function ECMAScriptParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ECMAScriptParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return ECMAScriptParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ECMAScriptParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "ECMAScript.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ECMAScriptParser.prototype, "ruleNames", {
        // @Override
        get: function () { return ECMAScriptParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ECMAScriptParser.prototype, "serializedATN", {
        // @Override
        get: function () { return ECMAScriptParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    ECMAScriptParser.RegularExpressionLiteral = 1;
    ECMAScriptParser.LineTerminator = 2;
    ECMAScriptParser.OpenBracket = 3;
    ECMAScriptParser.CloseBracket = 4;
    ECMAScriptParser.OpenParen = 5;
    ECMAScriptParser.CloseParen = 6;
    ECMAScriptParser.OpenBrace = 7;
    ECMAScriptParser.CloseBrace = 8;
    ECMAScriptParser.SemiColon = 9;
    ECMAScriptParser.Comma = 10;
    ECMAScriptParser.Assign = 11;
    ECMAScriptParser.QuestionMark = 12;
    ECMAScriptParser.Colon = 13;
    ECMAScriptParser.Dot = 14;
    ECMAScriptParser.PlusPlus = 15;
    ECMAScriptParser.MinusMinus = 16;
    ECMAScriptParser.Plus = 17;
    ECMAScriptParser.Minus = 18;
    ECMAScriptParser.BitNot = 19;
    ECMAScriptParser.Not = 20;
    ECMAScriptParser.Multiply = 21;
    ECMAScriptParser.Divide = 22;
    ECMAScriptParser.Modulus = 23;
    ECMAScriptParser.RightShiftArithmetic = 24;
    ECMAScriptParser.LeftShiftArithmetic = 25;
    ECMAScriptParser.RightShiftLogical = 26;
    ECMAScriptParser.LessThan = 27;
    ECMAScriptParser.MoreThan = 28;
    ECMAScriptParser.LessThanEquals = 29;
    ECMAScriptParser.GreaterThanEquals = 30;
    ECMAScriptParser.Equals = 31;
    ECMAScriptParser.NotEquals = 32;
    ECMAScriptParser.IdentityEquals = 33;
    ECMAScriptParser.IdentityNotEquals = 34;
    ECMAScriptParser.BitAnd = 35;
    ECMAScriptParser.BitXOr = 36;
    ECMAScriptParser.BitOr = 37;
    ECMAScriptParser.And = 38;
    ECMAScriptParser.Or = 39;
    ECMAScriptParser.MultiplyAssign = 40;
    ECMAScriptParser.DivideAssign = 41;
    ECMAScriptParser.ModulusAssign = 42;
    ECMAScriptParser.PlusAssign = 43;
    ECMAScriptParser.MinusAssign = 44;
    ECMAScriptParser.LeftShiftArithmeticAssign = 45;
    ECMAScriptParser.RightShiftArithmeticAssign = 46;
    ECMAScriptParser.RightShiftLogicalAssign = 47;
    ECMAScriptParser.BitAndAssign = 48;
    ECMAScriptParser.BitXorAssign = 49;
    ECMAScriptParser.BitOrAssign = 50;
    ECMAScriptParser.NullLiteral = 51;
    ECMAScriptParser.BooleanLiteral = 52;
    ECMAScriptParser.DecimalLiteral = 53;
    ECMAScriptParser.HexIntegerLiteral = 54;
    ECMAScriptParser.OctalIntegerLiteral = 55;
    ECMAScriptParser.Break = 56;
    ECMAScriptParser.Do = 57;
    ECMAScriptParser.Instanceof = 58;
    ECMAScriptParser.Typeof = 59;
    ECMAScriptParser.Case = 60;
    ECMAScriptParser.Else = 61;
    ECMAScriptParser.New = 62;
    ECMAScriptParser.Var = 63;
    ECMAScriptParser.Catch = 64;
    ECMAScriptParser.Finally = 65;
    ECMAScriptParser.Return = 66;
    ECMAScriptParser.Void = 67;
    ECMAScriptParser.Continue = 68;
    ECMAScriptParser.For = 69;
    ECMAScriptParser.Switch = 70;
    ECMAScriptParser.While = 71;
    ECMAScriptParser.Debugger = 72;
    ECMAScriptParser.Function = 73;
    ECMAScriptParser.This = 74;
    ECMAScriptParser.With = 75;
    ECMAScriptParser.Default = 76;
    ECMAScriptParser.If = 77;
    ECMAScriptParser.Throw = 78;
    ECMAScriptParser.Delete = 79;
    ECMAScriptParser.In = 80;
    ECMAScriptParser.Try = 81;
    ECMAScriptParser.Class = 82;
    ECMAScriptParser.Enum = 83;
    ECMAScriptParser.Extends = 84;
    ECMAScriptParser.Super = 85;
    ECMAScriptParser.Const = 86;
    ECMAScriptParser.Export = 87;
    ECMAScriptParser.Import = 88;
    ECMAScriptParser.Implements = 89;
    ECMAScriptParser.Let = 90;
    ECMAScriptParser.Private = 91;
    ECMAScriptParser.Public = 92;
    ECMAScriptParser.Interface = 93;
    ECMAScriptParser.Package = 94;
    ECMAScriptParser.Protected = 95;
    ECMAScriptParser.Static = 96;
    ECMAScriptParser.Yield = 97;
    ECMAScriptParser.Identifier = 98;
    ECMAScriptParser.StringLiteral = 99;
    ECMAScriptParser.WhiteSpaces = 100;
    ECMAScriptParser.MultiLineComment = 101;
    ECMAScriptParser.SingleLineComment = 102;
    ECMAScriptParser.UnexpectedCharacter = 103;
    ECMAScriptParser.RULE_program = 0;
    ECMAScriptParser.RULE_sourceElements = 1;
    ECMAScriptParser.RULE_sourceElement = 2;
    ECMAScriptParser.RULE_statement = 3;
    ECMAScriptParser.RULE_block = 4;
    ECMAScriptParser.RULE_statementList = 5;
    ECMAScriptParser.RULE_variableStatement = 6;
    ECMAScriptParser.RULE_variableDeclarationList = 7;
    ECMAScriptParser.RULE_variableDeclaration = 8;
    ECMAScriptParser.RULE_initialiser = 9;
    ECMAScriptParser.RULE_emptyStatement = 10;
    ECMAScriptParser.RULE_expressionStatement = 11;
    ECMAScriptParser.RULE_ifStatement = 12;
    ECMAScriptParser.RULE_iterationStatement = 13;
    ECMAScriptParser.RULE_continueStatement = 14;
    ECMAScriptParser.RULE_breakStatement = 15;
    ECMAScriptParser.RULE_returnStatement = 16;
    ECMAScriptParser.RULE_withStatement = 17;
    ECMAScriptParser.RULE_switchStatement = 18;
    ECMAScriptParser.RULE_caseBlock = 19;
    ECMAScriptParser.RULE_caseClauses = 20;
    ECMAScriptParser.RULE_caseClause = 21;
    ECMAScriptParser.RULE_defaultClause = 22;
    ECMAScriptParser.RULE_labelledStatement = 23;
    ECMAScriptParser.RULE_throwStatement = 24;
    ECMAScriptParser.RULE_tryStatement = 25;
    ECMAScriptParser.RULE_catchProduction = 26;
    ECMAScriptParser.RULE_finallyProduction = 27;
    ECMAScriptParser.RULE_debuggerStatement = 28;
    ECMAScriptParser.RULE_functionDeclaration = 29;
    ECMAScriptParser.RULE_formalParameterList = 30;
    ECMAScriptParser.RULE_functionBody = 31;
    ECMAScriptParser.RULE_arrayLiteral = 32;
    ECMAScriptParser.RULE_elementList = 33;
    ECMAScriptParser.RULE_elision = 34;
    ECMAScriptParser.RULE_objectLiteral = 35;
    ECMAScriptParser.RULE_propertyNameAndValueList = 36;
    ECMAScriptParser.RULE_propertyAssignment = 37;
    ECMAScriptParser.RULE_propertyName = 38;
    ECMAScriptParser.RULE_propertySetParameterList = 39;
    ECMAScriptParser.RULE_arguments = 40;
    ECMAScriptParser.RULE_argumentList = 41;
    ECMAScriptParser.RULE_expressionSequence = 42;
    ECMAScriptParser.RULE_singleExpression = 43;
    ECMAScriptParser.RULE_assignmentOperator = 44;
    ECMAScriptParser.RULE_literal = 45;
    ECMAScriptParser.RULE_numericLiteral = 46;
    ECMAScriptParser.RULE_identifierName = 47;
    ECMAScriptParser.RULE_reservedWord = 48;
    ECMAScriptParser.RULE_keyword = 49;
    ECMAScriptParser.RULE_futureReservedWord = 50;
    ECMAScriptParser.RULE_getter = 51;
    ECMAScriptParser.RULE_setter = 52;
    ECMAScriptParser.RULE_eos = 53;
    ECMAScriptParser.RULE_eof = 54;
    // tslint:disable:no-trailing-whitespace
    ECMAScriptParser.ruleNames = [
        "program", "sourceElements", "sourceElement", "statement", "block", "statementList",
        "variableStatement", "variableDeclarationList", "variableDeclaration",
        "initialiser", "emptyStatement", "expressionStatement", "ifStatement",
        "iterationStatement", "continueStatement", "breakStatement", "returnStatement",
        "withStatement", "switchStatement", "caseBlock", "caseClauses", "caseClause",
        "defaultClause", "labelledStatement", "throwStatement", "tryStatement",
        "catchProduction", "finallyProduction", "debuggerStatement", "functionDeclaration",
        "formalParameterList", "functionBody", "arrayLiteral", "elementList",
        "elision", "objectLiteral", "propertyNameAndValueList", "propertyAssignment",
        "propertyName", "propertySetParameterList", "arguments", "argumentList",
        "expressionSequence", "singleExpression", "assignmentOperator", "literal",
        "numericLiteral", "identifierName", "reservedWord", "keyword", "futureReservedWord",
        "getter", "setter", "eos", "eof",
    ];
    ECMAScriptParser._LITERAL_NAMES = [
        undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'",
        "';'", "','", "'='", "'?'", "':'", "'.'", "'++'", "'--'", "'+'", "'-'",
        "'~'", "'!'", "'*'", "'/'", "'%'", "'>>'", "'<<'", "'>>>'", "'<'", "'>'",
        "'<='", "'>='", "'=='", "'!='", "'==='", "'!=='", "'&'", "'^'", "'|'",
        "'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='",
        "'>>>='", "'&='", "'^='", "'|='", "'null'", undefined, undefined, undefined,
        undefined, "'break'", "'do'", "'instanceof'", "'typeof'", "'case'", "'else'",
        "'new'", "'var'", "'catch'", "'finally'", "'return'", "'void'", "'continue'",
        "'for'", "'switch'", "'while'", "'debugger'", "'function'", "'this'",
        "'with'", "'default'", "'if'", "'throw'", "'delete'", "'in'", "'try'",
        "'class'", "'enum'", "'extends'", "'super'", "'const'", "'export'", "'import'",
    ];
    ECMAScriptParser._SYMBOLIC_NAMES = [
        undefined, "RegularExpressionLiteral", "LineTerminator", "OpenBracket",
        "CloseBracket", "OpenParen", "CloseParen", "OpenBrace", "CloseBrace",
        "SemiColon", "Comma", "Assign", "QuestionMark", "Colon", "Dot", "PlusPlus",
        "MinusMinus", "Plus", "Minus", "BitNot", "Not", "Multiply", "Divide",
        "Modulus", "RightShiftArithmetic", "LeftShiftArithmetic", "RightShiftLogical",
        "LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", "Equals",
        "NotEquals", "IdentityEquals", "IdentityNotEquals", "BitAnd", "BitXOr",
        "BitOr", "And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign",
        "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign",
        "RightShiftLogicalAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign",
        "NullLiteral", "BooleanLiteral", "DecimalLiteral", "HexIntegerLiteral",
        "OctalIntegerLiteral", "Break", "Do", "Instanceof", "Typeof", "Case",
        "Else", "New", "Var", "Catch", "Finally", "Return", "Void", "Continue",
        "For", "Switch", "While", "Debugger", "Function", "This", "With", "Default",
        "If", "Throw", "Delete", "In", "Try", "Class", "Enum", "Extends", "Super",
        "Const", "Export", "Import", "Implements", "Let", "Private", "Public",
        "Interface", "Package", "Protected", "Static", "Yield", "Identifier",
        "StringLiteral", "WhiteSpaces", "MultiLineComment", "SingleLineComment",
        "UnexpectedCharacter",
    ];
    ECMAScriptParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ECMAScriptParser._LITERAL_NAMES, ECMAScriptParser._SYMBOLIC_NAMES, []);
    return ECMAScriptParser;
}(Parser_1.Parser));
exports.ECMAScriptParser = ECMAScriptParser;
of;
the;
given(templateObject_1 || (templateObject_1 = __makeTemplateObject(["type"], ["type"])));
exists;
on;
the(templateObject_2 || (templateObject_2 = __makeTemplateObject(["HIDDEN"], ["HIDDEN"])));
channel.
    Args;
type(int);
the;
token;
on;
the(templateObject_3 || (templateObject_3 = __makeTemplateObject(["HIDDEN"], ["HIDDEN"])));
channel;
to;
check.
    Returns;
"True";
iff;
on;
the;
current;
index;
of;
the;
parser;
's;
token;
stream;
a;
token;
of;
the;
given(templateObject_4 || (templateObject_4 = __makeTemplateObject(["type"], ["type"])));
exists;
on;
the(templateObject_5 || (templateObject_5 = __makeTemplateObject(["HIDDEN"], ["HIDDEN"])));
channel.
;
"";
";
Get;
the;
token;
ahead;
of;
the;
current;
index.
    possibleIndexEosToken = self.getCurrentToken().tokenIndex - 1;
ahead = self._input.get(possibleIndexEosToken);
Check;
if (the)
    token;
resides;
on;
the;
HIDDEN;
channel;
and;
if (it)
    is;
of;
the;
provided;
type.
    return(ahead.channel == Lexer.HIDDEN);
and(ahead.type == type);
def;
lineTerminatorAhead(self);
"";
"Returns `True` iff on the current index of the parser's;
token;
stream;
a;
token;
exists;
on;
the(templateObject_6 || (templateObject_6 = __makeTemplateObject(["HIDDEN"], ["HIDDEN"])));
channel;
which;
either;
is;
a;
line;
terminator, or;
is;
a;
multi;
line;
comment;
that;
contains;
a;
line;
terminator.
    Returns;
"True";
iff;
on;
the;
current;
index;
of;
the;
parser;
's;
token;
stream;
a;
token;
exists;
on;
the(templateObject_7 || (templateObject_7 = __makeTemplateObject(["HIDDEN"], ["HIDDEN"])));
channel;
which;
either;
is;
a;
line;
terminator, or;
is;
a;
multi;
line;
comment;
that;
contains;
a;
line;
terminator.
;
"";
";
Get;
the;
token;
ahead;
of;
the;
current;
index.
    possibleIndexEosToken = self.getCurrentToken().tokenIndex - 1;
ahead = self._input.get(possibleIndexEosToken);
if (ahead.channel != Lexer.HIDDEN)
    : ;
We;
're only interested in tokens on the HIDDEN channel.;
return False;
if (ahead.type == ECMAScriptParser.LineTerminator)
    : ;
There;
is;
definitely;
a;
line;
terminator;
ahead.
;
return True;
if (ahead.type == ECMAScriptParser.WhiteSpaces)
    : ;
Get;
the;
token;
ahead;
of;
the;
current;
whitespaces.
    possibleIndexEosToken = self.getCurrentToken().tokenIndex - 2;
ahead = self._input.get(possibleIndexEosToken);
Get;
the;
token;
's text and type.;
text = ahead.text;
type = ahead.type;
Check;
if (the)
    token;
is, or;
contains;
a;
line;
terminator.
    return(type == ECMAScriptParser.MultiLineComment, and, ('\r' in text), or, '\n' in text);
or;
(type == ECMAScriptParser.LineTerminator);
constructor(input, TokenStream);
{
    _this = _super.call(this, input) || this;
    this._interp = new ParserATNSimulator_1.ParserATNSimulator(ECMAScriptParser._ATN, this);
}
program();
ProgramContext;
{
    var _localctx = new ProgramContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, ECMAScriptParser.RULE_program);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 111;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                case 1:
                    {
                        this.state = 110;
                        this.sourceElements();
                    }
                    break;
            }
            this.state = 113;
            this.match(ECMAScriptParser.EOF);
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
sourceElements();
SourceElementsContext;
{
    var _localctx = new SourceElementsContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, ECMAScriptParser.RULE_sourceElements);
    try {
        var _alt = void 0;
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 116;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                    case 1:
                        {
                            {
                                this.state = 115;
                                this.sourceElement();
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 118;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
sourceElement();
SourceElementContext;
{
    var _localctx = new SourceElementContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, ECMAScriptParser.RULE_sourceElement);
    try {
        this.state = 123;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
            case 1:
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 120;
                    if (!(self._input.LA(1) != ECMAScriptParser.Function)) {
                        throw new FailedPredicateException_1.FailedPredicateException(this, "self._input.LA(1) != ECMAScriptParser.Function");
                    }
                    this.state = 121;
                    this.statement();
                }
                break;
            case 2:
                this.enterOuterAlt(_localctx, 2);
                {
                    this.state = 122;
                    this.functionDeclaration();
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
}
statement();
StatementContext;
{
    var _localctx = new StatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, ECMAScriptParser.RULE_statement);
    try {
        this.state = 141;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
            case 1:
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 125;
                    this.block();
                }
                break;
            case 2:
                this.enterOuterAlt(_localctx, 2);
                {
                    this.state = 126;
                    this.variableStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(_localctx, 3);
                {
                    this.state = 127;
                    this.emptyStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(_localctx, 4);
                {
                    this.state = 128;
                    if (!(self._input.LA(1) != ECMAScriptParser.OpenBrace)) {
                        throw new FailedPredicateException_1.FailedPredicateException(this, "self._input.LA(1) != ECMAScriptParser.OpenBrace");
                    }
                    this.state = 129;
                    this.expressionStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(_localctx, 5);
                {
                    this.state = 130;
                    this.ifStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(_localctx, 6);
                {
                    this.state = 131;
                    this.iterationStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(_localctx, 7);
                {
                    this.state = 132;
                    this.continueStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(_localctx, 8);
                {
                    this.state = 133;
                    this.breakStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(_localctx, 9);
                {
                    this.state = 134;
                    this.returnStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(_localctx, 10);
                {
                    this.state = 135;
                    this.withStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(_localctx, 11);
                {
                    this.state = 136;
                    this.labelledStatement();
                }
                break;
            case 12:
                this.enterOuterAlt(_localctx, 12);
                {
                    this.state = 137;
                    this.switchStatement();
                }
                break;
            case 13:
                this.enterOuterAlt(_localctx, 13);
                {
                    this.state = 138;
                    this.throwStatement();
                }
                break;
            case 14:
                this.enterOuterAlt(_localctx, 14);
                {
                    this.state = 139;
                    this.tryStatement();
                }
                break;
            case 15:
                this.enterOuterAlt(_localctx, 15);
                {
                    this.state = 140;
                    this.debuggerStatement();
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
}
block();
BlockContext;
{
    var _localctx = new BlockContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, ECMAScriptParser.RULE_block);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 143;
            this.match(ECMAScriptParser.OpenBrace);
            this.state = 145;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    {
                        this.state = 144;
                        this.statementList();
                    }
                    break;
            }
            this.state = 147;
            this.match(ECMAScriptParser.CloseBrace);
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
statementList();
StatementListContext;
{
    var _localctx = new StatementListContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, ECMAScriptParser.RULE_statementList);
    try {
        var _alt = void 0;
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 150;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                    case 1:
                        {
                            {
                                this.state = 149;
                                this.statement();
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 152;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
variableStatement();
VariableStatementContext;
{
    var _localctx = new VariableStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, ECMAScriptParser.RULE_variableStatement);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 154;
            this.match(ECMAScriptParser.Var);
            this.state = 155;
            this.variableDeclarationList();
            this.state = 156;
            this.eos();
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
variableDeclarationList();
VariableDeclarationListContext;
{
    var _localctx = new VariableDeclarationListContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, ECMAScriptParser.RULE_variableDeclarationList);
    try {
        var _alt = void 0;
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 158;
            this.variableDeclaration();
            this.state = 163;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                        {
                            this.state = 159;
                            this.match(ECMAScriptParser.Comma);
                            this.state = 160;
                            this.variableDeclaration();
                        }
                    }
                }
                this.state = 165;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
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
variableDeclaration();
VariableDeclarationContext;
{
    var _localctx = new VariableDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 16, ECMAScriptParser.RULE_variableDeclaration);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 166;
            this.match(ECMAScriptParser.Identifier);
            this.state = 168;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    {
                        this.state = 167;
                        this.initialiser();
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
}
initialiser();
InitialiserContext;
{
    var _localctx = new InitialiserContext(this._ctx, this.state);
    this.enterRule(_localctx, 18, ECMAScriptParser.RULE_initialiser);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 170;
            this.match(ECMAScriptParser.Assign);
            this.state = 171;
            this.singleExpression(0);
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
emptyStatement();
EmptyStatementContext;
{
    var _localctx = new EmptyStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, ECMAScriptParser.RULE_emptyStatement);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 173;
            this.match(ECMAScriptParser.SemiColon);
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
expressionStatement();
ExpressionStatementContext;
{
    var _localctx = new ExpressionStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 22, ECMAScriptParser.RULE_expressionStatement);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 175;
            this.expressionSequence();
            this.state = 176;
            this.eos();
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
ifStatement();
IfStatementContext;
{
    var _localctx = new IfStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 24, ECMAScriptParser.RULE_ifStatement);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 178;
            this.match(ECMAScriptParser.If);
            this.state = 179;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 180;
            this.expressionSequence();
            this.state = 181;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 182;
            this.statement();
            this.state = 185;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    {
                        this.state = 183;
                        this.match(ECMAScriptParser.Else);
                        this.state = 184;
                        this.statement();
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
}
iterationStatement();
IterationStatementContext;
{
    var _localctx = new IterationStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, ECMAScriptParser.RULE_iterationStatement);
    var _la = void 0;
    try {
        this.state = 248;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
            case 1:
                _localctx = new DoStatementContext(_localctx);
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 187;
                    this.match(ECMAScriptParser.Do);
                    this.state = 188;
                    this.statement();
                    this.state = 189;
                    this.match(ECMAScriptParser.While);
                    this.state = 190;
                    this.match(ECMAScriptParser.OpenParen);
                    this.state = 191;
                    this.expressionSequence();
                    this.state = 192;
                    this.match(ECMAScriptParser.CloseParen);
                    this.state = 193;
                    this.eos();
                }
                break;
            case 2:
                _localctx = new WhileStatementContext(_localctx);
                this.enterOuterAlt(_localctx, 2);
                {
                    this.state = 195;
                    this.match(ECMAScriptParser.While);
                    this.state = 196;
                    this.match(ECMAScriptParser.OpenParen);
                    this.state = 197;
                    this.expressionSequence();
                    this.state = 198;
                    this.match(ECMAScriptParser.CloseParen);
                    this.state = 199;
                    this.statement();
                }
                break;
            case 3:
                _localctx = new ForStatementContext(_localctx);
                this.enterOuterAlt(_localctx, 3);
                {
                    this.state = 201;
                    this.match(ECMAScriptParser.For);
                    this.state = 202;
                    this.match(ECMAScriptParser.OpenParen);
                    this.state = 204;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la === ECMAScriptParser.Identifier || _la === ECMAScriptParser.StringLiteral) {
                        {
                            this.state = 203;
                            this.expressionSequence();
                        }
                    }
                    this.state = 206;
                    this.match(ECMAScriptParser.SemiColon);
                    this.state = 208;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la === ECMAScriptParser.Identifier || _la === ECMAScriptParser.StringLiteral) {
                        {
                            this.state = 207;
                            this.expressionSequence();
                        }
                    }
                    this.state = 210;
                    this.match(ECMAScriptParser.SemiColon);
                    this.state = 212;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la === ECMAScriptParser.Identifier || _la === ECMAScriptParser.StringLiteral) {
                        {
                            this.state = 211;
                            this.expressionSequence();
                        }
                    }
                    this.state = 214;
                    this.match(ECMAScriptParser.CloseParen);
                    this.state = 215;
                    this.statement();
                }
                break;
            case 4:
                _localctx = new ForVarStatementContext(_localctx);
                this.enterOuterAlt(_localctx, 4);
                {
                    this.state = 216;
                    this.match(ECMAScriptParser.For);
                    this.state = 217;
                    this.match(ECMAScriptParser.OpenParen);
                    this.state = 218;
                    this.match(ECMAScriptParser.Var);
                    this.state = 219;
                    this.variableDeclarationList();
                    this.state = 220;
                    this.match(ECMAScriptParser.SemiColon);
                    this.state = 222;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la === ECMAScriptParser.Identifier || _la === ECMAScriptParser.StringLiteral) {
                        {
                            this.state = 221;
                            this.expressionSequence();
                        }
                    }
                    this.state = 224;
                    this.match(ECMAScriptParser.SemiColon);
                    this.state = 226;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la === ECMAScriptParser.Identifier || _la === ECMAScriptParser.StringLiteral) {
                        {
                            this.state = 225;
                            this.expressionSequence();
                        }
                    }
                    this.state = 228;
                    this.match(ECMAScriptParser.CloseParen);
                    this.state = 229;
                    this.statement();
                }
                break;
            case 5:
                _localctx = new ForInStatementContext(_localctx);
                this.enterOuterAlt(_localctx, 5);
                {
                    this.state = 231;
                    this.match(ECMAScriptParser.For);
                    this.state = 232;
                    this.match(ECMAScriptParser.OpenParen);
                    this.state = 233;
                    this.singleExpression(0);
                    this.state = 234;
                    this.match(ECMAScriptParser.In);
                    this.state = 235;
                    this.expressionSequence();
                    this.state = 236;
                    this.match(ECMAScriptParser.CloseParen);
                    this.state = 237;
                    this.statement();
                }
                break;
            case 6:
                _localctx = new ForVarInStatementContext(_localctx);
                this.enterOuterAlt(_localctx, 6);
                {
                    this.state = 239;
                    this.match(ECMAScriptParser.For);
                    this.state = 240;
                    this.match(ECMAScriptParser.OpenParen);
                    this.state = 241;
                    this.match(ECMAScriptParser.Var);
                    this.state = 242;
                    this.variableDeclaration();
                    this.state = 243;
                    this.match(ECMAScriptParser.In);
                    this.state = 244;
                    this.expressionSequence();
                    this.state = 245;
                    this.match(ECMAScriptParser.CloseParen);
                    this.state = 246;
                    this.statement();
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
}
continueStatement();
ContinueStatementContext;
{
    var _localctx = new ContinueStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 28, ECMAScriptParser.RULE_continueStatement);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 250;
            this.match(ECMAScriptParser.Continue);
            this.state = 253;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                case 1:
                    {
                        this.state = 251;
                        if (!(not))
                            self.here(ECMAScriptParser.LineTerminator);
                        {
                            throw new FailedPredicateException_1.FailedPredicateException(this, "not self.here(ECMAScriptParser.LineTerminator)");
                        }
                        this.state = 252;
                        this.match(ECMAScriptParser.Identifier);
                    }
                    break;
            }
            this.state = 255;
            this.eos();
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
breakStatement();
BreakStatementContext;
{
    var _localctx = new BreakStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 30, ECMAScriptParser.RULE_breakStatement);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 257;
            this.match(ECMAScriptParser.Break);
            this.state = 260;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                case 1:
                    {
                        this.state = 258;
                        if (!(not))
                            self.here(ECMAScriptParser.LineTerminator);
                        {
                            throw new FailedPredicateException_1.FailedPredicateException(this, "not self.here(ECMAScriptParser.LineTerminator)");
                        }
                        this.state = 259;
                        this.match(ECMAScriptParser.Identifier);
                    }
                    break;
            }
            this.state = 262;
            this.eos();
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
returnStatement();
ReturnStatementContext;
{
    var _localctx = new ReturnStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 32, ECMAScriptParser.RULE_returnStatement);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 264;
            this.match(ECMAScriptParser.Return);
            this.state = 267;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                    {
                        this.state = 265;
                        if (!(not))
                            self.here(ECMAScriptParser.LineTerminator);
                        {
                            throw new FailedPredicateException_1.FailedPredicateException(this, "not self.here(ECMAScriptParser.LineTerminator)");
                        }
                        this.state = 266;
                        this.expressionSequence();
                    }
                    break;
            }
            this.state = 269;
            this.eos();
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
withStatement();
WithStatementContext;
{
    var _localctx = new WithStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 34, ECMAScriptParser.RULE_withStatement);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 271;
            this.match(ECMAScriptParser.With);
            this.state = 272;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 273;
            this.expressionSequence();
            this.state = 274;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 275;
            this.statement();
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
switchStatement();
SwitchStatementContext;
{
    var _localctx = new SwitchStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 36, ECMAScriptParser.RULE_switchStatement);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 277;
            this.match(ECMAScriptParser.Switch);
            this.state = 278;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 279;
            this.expressionSequence();
            this.state = 280;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 281;
            this.caseBlock();
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
caseBlock();
CaseBlockContext;
{
    var _localctx = new CaseBlockContext(this._ctx, this.state);
    this.enterRule(_localctx, 38, ECMAScriptParser.RULE_caseBlock);
    var _la = void 0;
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 283;
            this.match(ECMAScriptParser.OpenBrace);
            this.state = 285;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === ECMAScriptParser.Case) {
                {
                    this.state = 284;
                    this.caseClauses();
                }
            }
            this.state = 291;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === ECMAScriptParser.Default) {
                {
                    this.state = 287;
                    this.defaultClause();
                    this.state = 289;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === ECMAScriptParser.Case) {
                        {
                            this.state = 288;
                            this.caseClauses();
                        }
                    }
                }
            }
            this.state = 293;
            this.match(ECMAScriptParser.CloseBrace);
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
caseClauses();
CaseClausesContext;
{
    var _localctx = new CaseClausesContext(this._ctx, this.state);
    this.enterRule(_localctx, 40, ECMAScriptParser.RULE_caseClauses);
    var _la = void 0;
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 296;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                {
                    {
                        this.state = 295;
                        this.caseClause();
                    }
                }
                this.state = 298;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while (_la === ECMAScriptParser.Case);
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
caseClause();
CaseClauseContext;
{
    var _localctx = new CaseClauseContext(this._ctx, this.state);
    this.enterRule(_localctx, 42, ECMAScriptParser.RULE_caseClause);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 300;
            this.match(ECMAScriptParser.Case);
            this.state = 301;
            this.expressionSequence();
            this.state = 302;
            this.match(ECMAScriptParser.Colon);
            this.state = 304;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                case 1:
                    {
                        this.state = 303;
                        this.statementList();
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
}
defaultClause();
DefaultClauseContext;
{
    var _localctx = new DefaultClauseContext(this._ctx, this.state);
    this.enterRule(_localctx, 44, ECMAScriptParser.RULE_defaultClause);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 306;
            this.match(ECMAScriptParser.Default);
            this.state = 307;
            this.match(ECMAScriptParser.Colon);
            this.state = 309;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                case 1:
                    {
                        this.state = 308;
                        this.statementList();
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
}
labelledStatement();
LabelledStatementContext;
{
    var _localctx = new LabelledStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 46, ECMAScriptParser.RULE_labelledStatement);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 311;
            this.match(ECMAScriptParser.Identifier);
            this.state = 312;
            this.match(ECMAScriptParser.Colon);
            this.state = 313;
            this.statement();
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
throwStatement();
ThrowStatementContext;
{
    var _localctx = new ThrowStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 48, ECMAScriptParser.RULE_throwStatement);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 315;
            this.match(ECMAScriptParser.Throw);
            this.state = 316;
            if (!(not))
                self.here(ECMAScriptParser.LineTerminator);
            {
                throw new FailedPredicateException_1.FailedPredicateException(this, "not self.here(ECMAScriptParser.LineTerminator)");
            }
            this.state = 317;
            this.expressionSequence();
            this.state = 318;
            this.eos();
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
tryStatement();
TryStatementContext;
{
    var _localctx = new TryStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 50, ECMAScriptParser.RULE_tryStatement);
    try {
        this.state = 333;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
            case 1:
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 320;
                    this.match(ECMAScriptParser.Try);
                    this.state = 321;
                    this.block();
                    this.state = 322;
                    this.catchProduction();
                }
                break;
            case 2:
                this.enterOuterAlt(_localctx, 2);
                {
                    this.state = 324;
                    this.match(ECMAScriptParser.Try);
                    this.state = 325;
                    this.block();
                    this.state = 326;
                    this.finallyProduction();
                }
                break;
            case 3:
                this.enterOuterAlt(_localctx, 3);
                {
                    this.state = 328;
                    this.match(ECMAScriptParser.Try);
                    this.state = 329;
                    this.block();
                    this.state = 330;
                    this.catchProduction();
                    this.state = 331;
                    this.finallyProduction();
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
}
catchProduction();
CatchProductionContext;
{
    var _localctx = new CatchProductionContext(this._ctx, this.state);
    this.enterRule(_localctx, 52, ECMAScriptParser.RULE_catchProduction);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 335;
            this.match(ECMAScriptParser.Catch);
            this.state = 336;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 337;
            this.match(ECMAScriptParser.Identifier);
            this.state = 338;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 339;
            this.block();
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
finallyProduction();
FinallyProductionContext;
{
    var _localctx = new FinallyProductionContext(this._ctx, this.state);
    this.enterRule(_localctx, 54, ECMAScriptParser.RULE_finallyProduction);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 341;
            this.match(ECMAScriptParser.Finally);
            this.state = 342;
            this.block();
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
debuggerStatement();
DebuggerStatementContext;
{
    var _localctx = new DebuggerStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 56, ECMAScriptParser.RULE_debuggerStatement);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 344;
            this.match(ECMAScriptParser.Debugger);
            this.state = 345;
            this.eos();
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
functionDeclaration();
FunctionDeclarationContext;
{
    var _localctx = new FunctionDeclarationContext(this._ctx, this.state);
    this.enterRule(_localctx, 58, ECMAScriptParser.RULE_functionDeclaration);
    var _la = void 0;
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 347;
            this.match(ECMAScriptParser.Function);
            this.state = 348;
            this.match(ECMAScriptParser.Identifier);
            this.state = 349;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 351;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === ECMAScriptParser.Identifier) {
                {
                    this.state = 350;
                    this.formalParameterList();
                }
            }
            this.state = 353;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 354;
            this.match(ECMAScriptParser.OpenBrace);
            this.state = 355;
            this.functionBody();
            this.state = 356;
            this.match(ECMAScriptParser.CloseBrace);
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
formalParameterList();
FormalParameterListContext;
{
    var _localctx = new FormalParameterListContext(this._ctx, this.state);
    this.enterRule(_localctx, 60, ECMAScriptParser.RULE_formalParameterList);
    var _la = void 0;
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 358;
            this.match(ECMAScriptParser.Identifier);
            this.state = 363;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === ECMAScriptParser.Comma) {
                {
                    {
                        this.state = 359;
                        this.match(ECMAScriptParser.Comma);
                        this.state = 360;
                        this.match(ECMAScriptParser.Identifier);
                    }
                }
                this.state = 365;
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
}
functionBody();
FunctionBodyContext;
{
    var _localctx = new FunctionBodyContext(this._ctx, this.state);
    this.enterRule(_localctx, 62, ECMAScriptParser.RULE_functionBody);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 367;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    {
                        this.state = 366;
                        this.sourceElements();
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
}
arrayLiteral();
ArrayLiteralContext;
{
    var _localctx = new ArrayLiteralContext(this._ctx, this.state);
    this.enterRule(_localctx, 64, ECMAScriptParser.RULE_arrayLiteral);
    var _la = void 0;
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 369;
            this.match(ECMAScriptParser.OpenBracket);
            this.state = 371;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                case 1:
                    {
                        this.state = 370;
                        this.elementList();
                    }
                    break;
            }
            this.state = 374;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                case 1:
                    {
                        this.state = 373;
                        this.match(ECMAScriptParser.Comma);
                    }
                    break;
            }
            this.state = 377;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === ECMAScriptParser.Comma) {
                {
                    this.state = 376;
                    this.elision();
                }
            }
            this.state = 379;
            this.match(ECMAScriptParser.CloseBracket);
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
elementList();
ElementListContext;
{
    var _localctx = new ElementListContext(this._ctx, this.state);
    this.enterRule(_localctx, 66, ECMAScriptParser.RULE_elementList);
    var _la = void 0;
    try {
        var _alt = void 0;
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 382;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === ECMAScriptParser.Comma) {
                {
                    this.state = 381;
                    this.elision();
                }
            }
            this.state = 384;
            this.singleExpression(0);
            this.state = 392;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                        {
                            this.state = 385;
                            this.match(ECMAScriptParser.Comma);
                            this.state = 387;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === ECMAScriptParser.Comma) {
                                {
                                    this.state = 386;
                                    this.elision();
                                }
                            }
                            this.state = 389;
                            this.singleExpression(0);
                        }
                    }
                }
                this.state = 394;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
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
elision();
ElisionContext;
{
    var _localctx = new ElisionContext(this._ctx, this.state);
    this.enterRule(_localctx, 68, ECMAScriptParser.RULE_elision);
    var _la = void 0;
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 396;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                {
                    {
                        this.state = 395;
                        this.match(ECMAScriptParser.Comma);
                    }
                }
                this.state = 398;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while (_la === ECMAScriptParser.Comma);
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
objectLiteral();
ObjectLiteralContext;
{
    var _localctx = new ObjectLiteralContext(this._ctx, this.state);
    this.enterRule(_localctx, 70, ECMAScriptParser.RULE_objectLiteral);
    var _la = void 0;
    try {
        this.state = 409;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
            case 1:
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 400;
                    this.match(ECMAScriptParser.OpenBrace);
                    this.state = 401;
                    this.match(ECMAScriptParser.CloseBrace);
                }
                break;
            case 2:
                this.enterOuterAlt(_localctx, 2);
                {
                    this.state = 402;
                    this.match(ECMAScriptParser.OpenBrace);
                    this.state = 403;
                    this.propertyNameAndValueList();
                    this.state = 405;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === ECMAScriptParser.Comma) {
                        {
                            this.state = 404;
                            this.match(ECMAScriptParser.Comma);
                        }
                    }
                    this.state = 407;
                    this.match(ECMAScriptParser.CloseBrace);
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
}
propertyNameAndValueList();
PropertyNameAndValueListContext;
{
    var _localctx = new PropertyNameAndValueListContext(this._ctx, this.state);
    this.enterRule(_localctx, 72, ECMAScriptParser.RULE_propertyNameAndValueList);
    try {
        var _alt = void 0;
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 411;
            this.propertyAssignment();
            this.state = 416;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                        {
                            this.state = 412;
                            this.match(ECMAScriptParser.Comma);
                            this.state = 413;
                            this.propertyAssignment();
                        }
                    }
                }
                this.state = 418;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
propertyAssignment();
PropertyAssignmentContext;
{
    var _localctx = new PropertyAssignmentContext(this._ctx, this.state);
    this.enterRule(_localctx, 74, ECMAScriptParser.RULE_propertyAssignment);
    try {
        this.state = 438;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
            case 1:
                _localctx = new PropertyExpressionAssignmentContext(_localctx);
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 419;
                    this.propertyName();
                    this.state = 420;
                    this.match(ECMAScriptParser.Colon);
                    this.state = 421;
                    this.singleExpression(0);
                }
                break;
            case 2:
                _localctx = new PropertyGetterContext(_localctx);
                this.enterOuterAlt(_localctx, 2);
                {
                    this.state = 423;
                    this.getter();
                    this.state = 424;
                    this.match(ECMAScriptParser.OpenParen);
                    this.state = 425;
                    this.match(ECMAScriptParser.CloseParen);
                    this.state = 426;
                    this.match(ECMAScriptParser.OpenBrace);
                    this.state = 427;
                    this.functionBody();
                    this.state = 428;
                    this.match(ECMAScriptParser.CloseBrace);
                }
                break;
            case 3:
                _localctx = new PropertySetterContext(_localctx);
                this.enterOuterAlt(_localctx, 3);
                {
                    this.state = 430;
                    this.setter();
                    this.state = 431;
                    this.match(ECMAScriptParser.OpenParen);
                    this.state = 432;
                    this.propertySetParameterList();
                    this.state = 433;
                    this.match(ECMAScriptParser.CloseParen);
                    this.state = 434;
                    this.match(ECMAScriptParser.OpenBrace);
                    this.state = 435;
                    this.functionBody();
                    this.state = 436;
                    this.match(ECMAScriptParser.CloseBrace);
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
}
propertyName();
PropertyNameContext;
{
    var _localctx = new PropertyNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 76, ECMAScriptParser.RULE_propertyName);
    try {
        this.state = 443;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case ECMAScriptParser.NullLiteral:
            case ECMAScriptParser.BooleanLiteral:
            case ECMAScriptParser.Break:
            case ECMAScriptParser.Do:
            case ECMAScriptParser.Instanceof:
            case ECMAScriptParser.Typeof:
            case ECMAScriptParser.Case:
            case ECMAScriptParser.Else:
            case ECMAScriptParser.New:
            case ECMAScriptParser.Var:
            case ECMAScriptParser.Catch:
            case ECMAScriptParser.Finally:
            case ECMAScriptParser.Return:
            case ECMAScriptParser.Void:
            case ECMAScriptParser.Continue:
            case ECMAScriptParser.For:
            case ECMAScriptParser.Switch:
            case ECMAScriptParser.While:
            case ECMAScriptParser.Debugger:
            case ECMAScriptParser.Function:
            case ECMAScriptParser.This:
            case ECMAScriptParser.With:
            case ECMAScriptParser.Default:
            case ECMAScriptParser.If:
            case ECMAScriptParser.Throw:
            case ECMAScriptParser.Delete:
            case ECMAScriptParser.In:
            case ECMAScriptParser.Try:
            case ECMAScriptParser.Class:
            case ECMAScriptParser.Enum:
            case ECMAScriptParser.Extends:
            case ECMAScriptParser.Super:
            case ECMAScriptParser.Const:
            case ECMAScriptParser.Export:
            case ECMAScriptParser.Import:
            case ECMAScriptParser.Implements:
            case ECMAScriptParser.Let:
            case ECMAScriptParser.Private:
            case ECMAScriptParser.Public:
            case ECMAScriptParser.Interface:
            case ECMAScriptParser.Package:
            case ECMAScriptParser.Protected:
            case ECMAScriptParser.Static:
            case ECMAScriptParser.Yield:
            case ECMAScriptParser.Identifier:
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 440;
                    this.identifierName();
                }
                break;
            case ECMAScriptParser.StringLiteral:
                this.enterOuterAlt(_localctx, 2);
                {
                    this.state = 441;
                    this.match(ECMAScriptParser.StringLiteral);
                }
                break;
            case ECMAScriptParser.DecimalLiteral:
            case ECMAScriptParser.HexIntegerLiteral:
            case ECMAScriptParser.OctalIntegerLiteral:
                this.enterOuterAlt(_localctx, 3);
                {
                    this.state = 442;
                    this.numericLiteral();
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
propertySetParameterList();
PropertySetParameterListContext;
{
    var _localctx = new PropertySetParameterListContext(this._ctx, this.state);
    this.enterRule(_localctx, 78, ECMAScriptParser.RULE_propertySetParameterList);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 445;
            this.match(ECMAScriptParser.Identifier);
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
arguments();
ArgumentsContext;
{
    var _localctx = new ArgumentsContext(this._ctx, this.state);
    this.enterRule(_localctx, 80, ECMAScriptParser.RULE_arguments);
    var _la = void 0;
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 447;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 449;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la === ECMAScriptParser.Identifier || _la === ECMAScriptParser.StringLiteral) {
                {
                    this.state = 448;
                    this.argumentList();
                }
            }
            this.state = 451;
            this.match(ECMAScriptParser.CloseParen);
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
argumentList();
ArgumentListContext;
{
    var _localctx = new ArgumentListContext(this._ctx, this.state);
    this.enterRule(_localctx, 82, ECMAScriptParser.RULE_argumentList);
    var _la = void 0;
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 453;
            this.singleExpression(0);
            this.state = 458;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === ECMAScriptParser.Comma) {
                {
                    {
                        this.state = 454;
                        this.match(ECMAScriptParser.Comma);
                        this.state = 455;
                        this.singleExpression(0);
                    }
                }
                this.state = 460;
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
}
expressionSequence();
ExpressionSequenceContext;
{
    var _localctx = new ExpressionSequenceContext(this._ctx, this.state);
    this.enterRule(_localctx, 84, ECMAScriptParser.RULE_expressionSequence);
    try {
        var _alt = void 0;
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 461;
            this.singleExpression(0);
            this.state = 466;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                        {
                            this.state = 462;
                            this.match(ECMAScriptParser.Comma);
                            this.state = 463;
                            this.singleExpression(0);
                        }
                    }
                }
                this.state = 468;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
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
singleExpression();
SingleExpressionContext;
singleExpression(_p, number);
SingleExpressionContext;
singleExpression(_p ?  : number);
SingleExpressionContext;
{
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var _localctx = new SingleExpressionContext(this._ctx, _parentState);
    var _prevctx = _localctx;
    var _startState = 86;
    this.enterRecursionRule(_localctx, 86, ECMAScriptParser.RULE_singleExpression, _p);
    var _la = void 0;
    try {
        var _alt = void 0;
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 515;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ECMAScriptParser.Function:
                    {
                        _localctx = new FunctionExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 470;
                        this.match(ECMAScriptParser.Function);
                        this.state = 472;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ECMAScriptParser.Identifier) {
                            {
                                this.state = 471;
                                this.match(ECMAScriptParser.Identifier);
                            }
                        }
                        this.state = 474;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 476;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ECMAScriptParser.Identifier) {
                            {
                                this.state = 475;
                                this.formalParameterList();
                            }
                        }
                        this.state = 478;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 479;
                        this.match(ECMAScriptParser.OpenBrace);
                        this.state = 480;
                        this.functionBody();
                        this.state = 481;
                        this.match(ECMAScriptParser.CloseBrace);
                    }
                    break;
                case ECMAScriptParser.New:
                    {
                        _localctx = new NewExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 483;
                        this.match(ECMAScriptParser.New);
                        this.state = 484;
                        this.singleExpression(0);
                        this.state = 486;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                            case 1:
                                {
                                    this.state = 485;
                                    this.arguments();
                                }
                                break;
                        }
                    }
                    break;
                case ECMAScriptParser.Delete:
                    {
                        _localctx = new DeleteExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 488;
                        this.match(ECMAScriptParser.Delete);
                        this.state = 489;
                        this.singleExpression(30);
                    }
                    break;
                case ECMAScriptParser.Void:
                    {
                        _localctx = new VoidExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 490;
                        this.match(ECMAScriptParser.Void);
                        this.state = 491;
                        this.singleExpression(29);
                    }
                    break;
                case ECMAScriptParser.Typeof:
                    {
                        _localctx = new TypeofExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 492;
                        this.match(ECMAScriptParser.Typeof);
                        this.state = 493;
                        this.singleExpression(28);
                    }
                    break;
                case ECMAScriptParser.PlusPlus:
                    {
                        _localctx = new PreIncrementExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 494;
                        this.match(ECMAScriptParser.PlusPlus);
                        this.state = 495;
                        this.singleExpression(27);
                    }
                    break;
                case ECMAScriptParser.MinusMinus:
                    {
                        _localctx = new PreDecreaseExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 496;
                        this.match(ECMAScriptParser.MinusMinus);
                        this.state = 497;
                        this.singleExpression(26);
                    }
                    break;
                case ECMAScriptParser.Plus:
                    {
                        _localctx = new UnaryPlusExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 498;
                        this.match(ECMAScriptParser.Plus);
                        this.state = 499;
                        this.singleExpression(25);
                    }
                    break;
                case ECMAScriptParser.Minus:
                    {
                        _localctx = new UnaryMinusExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 500;
                        this.match(ECMAScriptParser.Minus);
                        this.state = 501;
                        this.singleExpression(24);
                    }
                    break;
                case ECMAScriptParser.BitNot:
                    {
                        _localctx = new BitNotExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 502;
                        this.match(ECMAScriptParser.BitNot);
                        this.state = 503;
                        this.singleExpression(23);
                    }
                    break;
                case ECMAScriptParser.Not:
                    {
                        _localctx = new NotExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 504;
                        this.match(ECMAScriptParser.Not);
                        this.state = 505;
                        this.singleExpression(22);
                    }
                    break;
                case ECMAScriptParser.This:
                    {
                        _localctx = new ThisExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 506;
                        this.match(ECMAScriptParser.This);
                    }
                    break;
                case ECMAScriptParser.Identifier:
                    {
                        _localctx = new IdentifierExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 507;
                        this.match(ECMAScriptParser.Identifier);
                    }
                    break;
                case ECMAScriptParser.RegularExpressionLiteral:
                case ECMAScriptParser.NullLiteral:
                case ECMAScriptParser.BooleanLiteral:
                case ECMAScriptParser.DecimalLiteral:
                case ECMAScriptParser.HexIntegerLiteral:
                case ECMAScriptParser.OctalIntegerLiteral:
                case ECMAScriptParser.StringLiteral:
                    {
                        _localctx = new LiteralExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 508;
                        this.literal();
                    }
                    break;
                case ECMAScriptParser.OpenBracket:
                    {
                        _localctx = new ArrayLiteralExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 509;
                        this.arrayLiteral();
                    }
                    break;
                case ECMAScriptParser.OpenBrace:
                    {
                        _localctx = new ObjectLiteralExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 510;
                        this.objectLiteral();
                    }
                    break;
                case ECMAScriptParser.OpenParen:
                    {
                        _localctx = new ParenthesizedExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 511;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 512;
                        this.expressionSequence();
                        this.state = 513;
                        this.match(ECMAScriptParser.CloseParen);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
            this._ctx._stop = this._input.tryLT(-1);
            this.state = 584;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = _localctx;
                    {
                        this.state = 582;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                            case 1:
                                {
                                    _localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 517;
                                    if (!(this.precpred(this._ctx, 21))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                                    }
                                    this.state = 518;
                                    _la = this._input.LA(1);
                                    if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.Multiply) | (1 << ECMAScriptParser.Divide) | (1 << ECMAScriptParser.Modulus))) !== 0))) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 519;
                                    this.singleExpression(22);
                                }
                                break;
                            case 2:
                                {
                                    _localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 520;
                                    if (!(this.precpred(this._ctx, 20))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                                    }
                                    this.state = 521;
                                    _la = this._input.LA(1);
                                    if (!(_la === ECMAScriptParser.Plus || _la === ECMAScriptParser.Minus)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 522;
                                    this.singleExpression(21);
                                }
                                break;
                            case 3:
                                {
                                    _localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 523;
                                    if (!(this.precpred(this._ctx, 19))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                                    }
                                    this.state = 524;
                                    _la = this._input.LA(1);
                                    if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.RightShiftArithmetic) | (1 << ECMAScriptParser.LeftShiftArithmetic) | (1 << ECMAScriptParser.RightShiftLogical))) !== 0))) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 525;
                                    this.singleExpression(20);
                                }
                                break;
                            case 4:
                                {
                                    _localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 526;
                                    if (!(this.precpred(this._ctx, 18))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                                    }
                                    this.state = 527;
                                    _la = this._input.LA(1);
                                    if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECMAScriptParser.LessThan) | (1 << ECMAScriptParser.MoreThan) | (1 << ECMAScriptParser.LessThanEquals) | (1 << ECMAScriptParser.GreaterThanEquals))) !== 0))) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 528;
                                    this.singleExpression(19);
                                }
                                break;
                            case 5:
                                {
                                    _localctx = new InstanceofExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 529;
                                    if (!(this.precpred(this._ctx, 17))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                                    }
                                    this.state = 530;
                                    this.match(ECMAScriptParser.Instanceof);
                                    this.state = 531;
                                    this.singleExpression(18);
                                }
                                break;
                            case 6:
                                {
                                    _localctx = new InExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 532;
                                    if (!(this.precpred(this._ctx, 16))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                                    }
                                    this.state = 533;
                                    this.match(ECMAScriptParser.In);
                                    this.state = 534;
                                    this.singleExpression(17);
                                }
                                break;
                            case 7:
                                {
                                    _localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 535;
                                    if (!(this.precpred(this._ctx, 15))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                                    }
                                    this.state = 536;
                                    _la = this._input.LA(1);
                                    if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (ECMAScriptParser.Equals - 31)) | (1 << (ECMAScriptParser.NotEquals - 31)) | (1 << (ECMAScriptParser.IdentityEquals - 31)) | (1 << (ECMAScriptParser.IdentityNotEquals - 31)))) !== 0))) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 537;
                                    this.singleExpression(16);
                                }
                                break;
                            case 8:
                                {
                                    _localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 538;
                                    if (!(this.precpred(this._ctx, 14))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                                    }
                                    this.state = 539;
                                    this.match(ECMAScriptParser.BitAnd);
                                    this.state = 540;
                                    this.singleExpression(15);
                                }
                                break;
                            case 9:
                                {
                                    _localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 541;
                                    if (!(this.precpred(this._ctx, 13))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                                    }
                                    this.state = 542;
                                    this.match(ECMAScriptParser.BitXOr);
                                    this.state = 543;
                                    this.singleExpression(14);
                                }
                                break;
                            case 10:
                                {
                                    _localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 544;
                                    if (!(this.precpred(this._ctx, 12))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                                    }
                                    this.state = 545;
                                    this.match(ECMAScriptParser.BitOr);
                                    this.state = 546;
                                    this.singleExpression(13);
                                }
                                break;
                            case 11:
                                {
                                    _localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 547;
                                    if (!(this.precpred(this._ctx, 11))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                                    }
                                    this.state = 548;
                                    this.match(ECMAScriptParser.And);
                                    this.state = 549;
                                    this.singleExpression(12);
                                }
                                break;
                            case 12:
                                {
                                    _localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 550;
                                    if (!(this.precpred(this._ctx, 10))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                                    }
                                    this.state = 551;
                                    this.match(ECMAScriptParser.Or);
                                    this.state = 552;
                                    this.singleExpression(11);
                                }
                                break;
                            case 13:
                                {
                                    _localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 553;
                                    if (!(this.precpred(this._ctx, 9))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                    }
                                    this.state = 554;
                                    this.match(ECMAScriptParser.QuestionMark);
                                    this.state = 555;
                                    this.singleExpression(0);
                                    this.state = 556;
                                    this.match(ECMAScriptParser.Colon);
                                    this.state = 557;
                                    this.singleExpression(10);
                                }
                                break;
                            case 14:
                                {
                                    _localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 559;
                                    if (!(this.precpred(this._ctx, 8))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                    }
                                    this.state = 560;
                                    this.match(ECMAScriptParser.Assign);
                                    this.state = 561;
                                    this.singleExpression(9);
                                }
                                break;
                            case 15:
                                {
                                    _localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 562;
                                    if (!(this.precpred(this._ctx, 7))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                    }
                                    this.state = 563;
                                    this.assignmentOperator();
                                    this.state = 564;
                                    this.singleExpression(8);
                                }
                                break;
                            case 16:
                                {
                                    _localctx = new MemberIndexExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 566;
                                    if (!(this.precpred(this._ctx, 36))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 36)");
                                    }
                                    this.state = 567;
                                    this.match(ECMAScriptParser.OpenBracket);
                                    this.state = 568;
                                    this.expressionSequence();
                                    this.state = 569;
                                    this.match(ECMAScriptParser.CloseBracket);
                                }
                                break;
                            case 17:
                                {
                                    _localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 571;
                                    if (!(this.precpred(this._ctx, 35))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 35)");
                                    }
                                    this.state = 572;
                                    this.match(ECMAScriptParser.Dot);
                                    this.state = 573;
                                    this.identifierName();
                                }
                                break;
                            case 18:
                                {
                                    _localctx = new ArgumentsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 574;
                                    if (!(this.precpred(this._ctx, 34))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 34)");
                                    }
                                    this.state = 575;
                                    this.arguments();
                                }
                                break;
                            case 19:
                                {
                                    _localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 576;
                                    if (!(this.precpred(this._ctx, 32))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 32)");
                                    }
                                    this.state = 577;
                                    if (!(not))
                                        self.here(ECMAScriptParser.LineTerminator);
                                    {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "not self.here(ECMAScriptParser.LineTerminator)");
                                    }
                                    this.state = 578;
                                    this.match(ECMAScriptParser.PlusPlus);
                                }
                                break;
                            case 20:
                                {
                                    _localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                    this.state = 579;
                                    if (!(this.precpred(this._ctx, 31))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 31)");
                                    }
                                    this.state = 580;
                                    if (!(not))
                                        self.here(ECMAScriptParser.LineTerminator);
                                    {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "not self.here(ECMAScriptParser.LineTerminator)");
                                    }
                                    this.state = 581;
                                    this.match(ECMAScriptParser.MinusMinus);
                                }
                                break;
                        }
                    }
                }
                this.state = 586;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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
assignmentOperator();
AssignmentOperatorContext;
{
    var _localctx = new AssignmentOperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 88, ECMAScriptParser.RULE_assignmentOperator);
    var _la = void 0;
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 587;
            _la = this._input.LA(1);
            if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ECMAScriptParser.MultiplyAssign - 40)) | (1 << (ECMAScriptParser.DivideAssign - 40)) | (1 << (ECMAScriptParser.ModulusAssign - 40)) | (1 << (ECMAScriptParser.PlusAssign - 40)) | (1 << (ECMAScriptParser.MinusAssign - 40)) | (1 << (ECMAScriptParser.LeftShiftArithmeticAssign - 40)) | (1 << (ECMAScriptParser.RightShiftArithmeticAssign - 40)) | (1 << (ECMAScriptParser.RightShiftLogicalAssign - 40)) | (1 << (ECMAScriptParser.BitAndAssign - 40)) | (1 << (ECMAScriptParser.BitXorAssign - 40)) | (1 << (ECMAScriptParser.BitOrAssign - 40)))) !== 0))) {
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
literal();
LiteralContext;
{
    var _localctx = new LiteralContext(this._ctx, this.state);
    this.enterRule(_localctx, 90, ECMAScriptParser.RULE_literal);
    var _la = void 0;
    try {
        this.state = 591;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case ECMAScriptParser.RegularExpressionLiteral:
            case ECMAScriptParser.NullLiteral:
            case ECMAScriptParser.BooleanLiteral:
            case ECMAScriptParser.StringLiteral:
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 589;
                    _la = this._input.LA(1);
                    if (!(_la === ECMAScriptParser.RegularExpressionLiteral || _la === ECMAScriptParser.NullLiteral || _la === ECMAScriptParser.BooleanLiteral || _la === ECMAScriptParser.StringLiteral)) {
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
                break;
            case ECMAScriptParser.DecimalLiteral:
            case ECMAScriptParser.HexIntegerLiteral:
            case ECMAScriptParser.OctalIntegerLiteral:
                this.enterOuterAlt(_localctx, 2);
                {
                    this.state = 590;
                    this.numericLiteral();
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
numericLiteral();
NumericLiteralContext;
{
    var _localctx = new NumericLiteralContext(this._ctx, this.state);
    this.enterRule(_localctx, 92, ECMAScriptParser.RULE_numericLiteral);
    var _la = void 0;
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 593;
            _la = this._input.LA(1);
            if (!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (ECMAScriptParser.DecimalLiteral - 53)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 53)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 53)))) !== 0))) {
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
identifierName();
IdentifierNameContext;
{
    var _localctx = new IdentifierNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 94, ECMAScriptParser.RULE_identifierName);
    try {
        this.state = 597;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case ECMAScriptParser.Identifier:
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 595;
                    this.match(ECMAScriptParser.Identifier);
                }
                break;
            case ECMAScriptParser.NullLiteral:
            case ECMAScriptParser.BooleanLiteral:
            case ECMAScriptParser.Break:
            case ECMAScriptParser.Do:
            case ECMAScriptParser.Instanceof:
            case ECMAScriptParser.Typeof:
            case ECMAScriptParser.Case:
            case ECMAScriptParser.Else:
            case ECMAScriptParser.New:
            case ECMAScriptParser.Var:
            case ECMAScriptParser.Catch:
            case ECMAScriptParser.Finally:
            case ECMAScriptParser.Return:
            case ECMAScriptParser.Void:
            case ECMAScriptParser.Continue:
            case ECMAScriptParser.For:
            case ECMAScriptParser.Switch:
            case ECMAScriptParser.While:
            case ECMAScriptParser.Debugger:
            case ECMAScriptParser.Function:
            case ECMAScriptParser.This:
            case ECMAScriptParser.With:
            case ECMAScriptParser.Default:
            case ECMAScriptParser.If:
            case ECMAScriptParser.Throw:
            case ECMAScriptParser.Delete:
            case ECMAScriptParser.In:
            case ECMAScriptParser.Try:
            case ECMAScriptParser.Class:
            case ECMAScriptParser.Enum:
            case ECMAScriptParser.Extends:
            case ECMAScriptParser.Super:
            case ECMAScriptParser.Const:
            case ECMAScriptParser.Export:
            case ECMAScriptParser.Import:
            case ECMAScriptParser.Implements:
            case ECMAScriptParser.Let:
            case ECMAScriptParser.Private:
            case ECMAScriptParser.Public:
            case ECMAScriptParser.Interface:
            case ECMAScriptParser.Package:
            case ECMAScriptParser.Protected:
            case ECMAScriptParser.Static:
            case ECMAScriptParser.Yield:
                this.enterOuterAlt(_localctx, 2);
                {
                    this.state = 596;
                    this.reservedWord();
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
reservedWord();
ReservedWordContext;
{
    var _localctx = new ReservedWordContext(this._ctx, this.state);
    this.enterRule(_localctx, 96, ECMAScriptParser.RULE_reservedWord);
    var _la = void 0;
    try {
        this.state = 602;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case ECMAScriptParser.Break:
            case ECMAScriptParser.Do:
            case ECMAScriptParser.Instanceof:
            case ECMAScriptParser.Typeof:
            case ECMAScriptParser.Case:
            case ECMAScriptParser.Else:
            case ECMAScriptParser.New:
            case ECMAScriptParser.Var:
            case ECMAScriptParser.Catch:
            case ECMAScriptParser.Finally:
            case ECMAScriptParser.Return:
            case ECMAScriptParser.Void:
            case ECMAScriptParser.Continue:
            case ECMAScriptParser.For:
            case ECMAScriptParser.Switch:
            case ECMAScriptParser.While:
            case ECMAScriptParser.Debugger:
            case ECMAScriptParser.Function:
            case ECMAScriptParser.This:
            case ECMAScriptParser.With:
            case ECMAScriptParser.Default:
            case ECMAScriptParser.If:
            case ECMAScriptParser.Throw:
            case ECMAScriptParser.Delete:
            case ECMAScriptParser.In:
            case ECMAScriptParser.Try:
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 599;
                    this.keyword();
                }
                break;
            case ECMAScriptParser.Class:
            case ECMAScriptParser.Enum:
            case ECMAScriptParser.Extends:
            case ECMAScriptParser.Super:
            case ECMAScriptParser.Const:
            case ECMAScriptParser.Export:
            case ECMAScriptParser.Import:
            case ECMAScriptParser.Implements:
            case ECMAScriptParser.Let:
            case ECMAScriptParser.Private:
            case ECMAScriptParser.Public:
            case ECMAScriptParser.Interface:
            case ECMAScriptParser.Package:
            case ECMAScriptParser.Protected:
            case ECMAScriptParser.Static:
            case ECMAScriptParser.Yield:
                this.enterOuterAlt(_localctx, 2);
                {
                    this.state = 600;
                    this.futureReservedWord();
                }
                break;
            case ECMAScriptParser.NullLiteral:
            case ECMAScriptParser.BooleanLiteral:
                this.enterOuterAlt(_localctx, 3);
                {
                    this.state = 601;
                    _la = this._input.LA(1);
                    if (!(_la === ECMAScriptParser.NullLiteral || _la === ECMAScriptParser.BooleanLiteral)) {
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
keyword();
KeywordContext;
{
    var _localctx = new KeywordContext(this._ctx, this.state);
    this.enterRule(_localctx, 98, ECMAScriptParser.RULE_keyword);
    var _la = void 0;
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 604;
            _la = this._input.LA(1);
            if (!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (ECMAScriptParser.Break - 56)) | (1 << (ECMAScriptParser.Do - 56)) | (1 << (ECMAScriptParser.Instanceof - 56)) | (1 << (ECMAScriptParser.Typeof - 56)) | (1 << (ECMAScriptParser.Case - 56)) | (1 << (ECMAScriptParser.Else - 56)) | (1 << (ECMAScriptParser.New - 56)) | (1 << (ECMAScriptParser.Var - 56)) | (1 << (ECMAScriptParser.Catch - 56)) | (1 << (ECMAScriptParser.Finally - 56)) | (1 << (ECMAScriptParser.Return - 56)) | (1 << (ECMAScriptParser.Void - 56)) | (1 << (ECMAScriptParser.Continue - 56)) | (1 << (ECMAScriptParser.For - 56)) | (1 << (ECMAScriptParser.Switch - 56)) | (1 << (ECMAScriptParser.While - 56)) | (1 << (ECMAScriptParser.Debugger - 56)) | (1 << (ECMAScriptParser.Function - 56)) | (1 << (ECMAScriptParser.This - 56)) | (1 << (ECMAScriptParser.With - 56)) | (1 << (ECMAScriptParser.Default - 56)) | (1 << (ECMAScriptParser.If - 56)) | (1 << (ECMAScriptParser.Throw - 56)) | (1 << (ECMAScriptParser.Delete - 56)) | (1 << (ECMAScriptParser.In - 56)) | (1 << (ECMAScriptParser.Try - 56)))) !== 0))) {
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
futureReservedWord();
FutureReservedWordContext;
{
    var _localctx = new FutureReservedWordContext(this._ctx, this.state);
    this.enterRule(_localctx, 100, ECMAScriptParser.RULE_futureReservedWord);
    var _la = void 0;
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 606;
            _la = this._input.LA(1);
            if (!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (ECMAScriptParser.Class - 82)) | (1 << (ECMAScriptParser.Enum - 82)) | (1 << (ECMAScriptParser.Extends - 82)) | (1 << (ECMAScriptParser.Super - 82)) | (1 << (ECMAScriptParser.Const - 82)) | (1 << (ECMAScriptParser.Export - 82)) | (1 << (ECMAScriptParser.Import - 82)) | (1 << (ECMAScriptParser.Implements - 82)) | (1 << (ECMAScriptParser.Let - 82)) | (1 << (ECMAScriptParser.Private - 82)) | (1 << (ECMAScriptParser.Public - 82)) | (1 << (ECMAScriptParser.Interface - 82)) | (1 << (ECMAScriptParser.Package - 82)) | (1 << (ECMAScriptParser.Protected - 82)) | (1 << (ECMAScriptParser.Static - 82)) | (1 << (ECMAScriptParser.Yield - 82)))) !== 0))) {
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
getter();
GetterContext;
{
    var _localctx = new GetterContext(this._ctx, this.state);
    this.enterRule(_localctx, 102, ECMAScriptParser.RULE_getter);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 608;
            if (!(self._input.LT(1).text == "get")) {
                throw new FailedPredicateException_1.FailedPredicateException(this, "self._input.LT(1).text == \"get\"");
            }
            this.state = 609;
            this.match(ECMAScriptParser.Identifier);
            this.state = 610;
            this.propertyName();
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
setter();
SetterContext;
{
    var _localctx = new SetterContext(this._ctx, this.state);
    this.enterRule(_localctx, 104, ECMAScriptParser.RULE_setter);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 612;
            if (!(self._input.LT(1).text == "set")) {
                throw new FailedPredicateException_1.FailedPredicateException(this, "self._input.LT(1).text == \"set\"");
            }
            this.state = 613;
            this.match(ECMAScriptParser.Identifier);
            this.state = 614;
            this.propertyName();
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
eos();
EosContext;
{
    var _localctx = new EosContext(this._ctx, this.state);
    this.enterRule(_localctx, 106, ECMAScriptParser.RULE_eos);
    try {
        this.state = 620;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
            case 1:
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 616;
                    this.match(ECMAScriptParser.SemiColon);
                }
                break;
            case 2:
                this.enterOuterAlt(_localctx, 2);
                {
                    this.state = 617;
                    this.match(ECMAScriptParser.EOF);
                }
                break;
            case 3:
                this.enterOuterAlt(_localctx, 3);
                {
                    this.state = 618;
                    if (!(self.lineTerminatorAhead())) {
                        throw new FailedPredicateException_1.FailedPredicateException(this, "self.lineTerminatorAhead()");
                    }
                }
                break;
            case 4:
                this.enterOuterAlt(_localctx, 4);
                {
                    this.state = 619;
                    if (!(self._input.LT(1).type == ECMAScriptParser.CloseBrace)) {
                        throw new FailedPredicateException_1.FailedPredicateException(this, "self._input.LT(1).type == ECMAScriptParser.CloseBrace");
                    }
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
}
eof();
EofContext;
{
    var _localctx = new EofContext(this._ctx, this.state);
    this.enterRule(_localctx, 108, ECMAScriptParser.RULE_eof);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 622;
            this.match(ECMAScriptParser.EOF);
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
sempred(_localctx, RuleContext_1.RuleContext, ruleIndex, number, predIndex, number);
boolean;
{
    switch (ruleIndex) {
        case 2:
            return this.sourceElement_sempred(_localctx, predIndex);
        case 3:
            return this.statement_sempred(_localctx, predIndex);
        case 14:
            return this.continueStatement_sempred(_localctx, predIndex);
        case 15:
            return this.breakStatement_sempred(_localctx, predIndex);
        case 16:
            return this.returnStatement_sempred(_localctx, predIndex);
        case 24:
            return this.throwStatement_sempred(_localctx, predIndex);
        case 43:
            return this.singleExpression_sempred(_localctx, predIndex);
        case 51:
            return this.getter_sempred(_localctx, predIndex);
        case 52:
            return this.setter_sempred(_localctx, predIndex);
        case 53:
            return this.eos_sempred(_localctx, predIndex);
    }
    return true;
}
sourceElement_sempred(_localctx, SourceElementContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 0:
            return self._input.LA(1) != ECMAScriptParser.Function;
    }
    return true;
}
statement_sempred(_localctx, StatementContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 1:
            return self._input.LA(1) != ECMAScriptParser.OpenBrace;
    }
    return true;
}
continueStatement_sempred(_localctx, ContinueStatementContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 2:
            return not;
            self.here(ECMAScriptParser.LineTerminator);
    }
    return true;
}
breakStatement_sempred(_localctx, BreakStatementContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 3:
            return not;
            self.here(ECMAScriptParser.LineTerminator);
    }
    return true;
}
returnStatement_sempred(_localctx, ReturnStatementContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 4:
            return not;
            self.here(ECMAScriptParser.LineTerminator);
    }
    return true;
}
throwStatement_sempred(_localctx, ThrowStatementContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 5:
            return not;
            self.here(ECMAScriptParser.LineTerminator);
    }
    return true;
}
singleExpression_sempred(_localctx, SingleExpressionContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 6:
            return this.precpred(this._ctx, 21);
        case 7:
            return this.precpred(this._ctx, 20);
        case 8:
            return this.precpred(this._ctx, 19);
        case 9:
            return this.precpred(this._ctx, 18);
        case 10:
            return this.precpred(this._ctx, 17);
        case 11:
            return this.precpred(this._ctx, 16);
        case 12:
            return this.precpred(this._ctx, 15);
        case 13:
            return this.precpred(this._ctx, 14);
        case 14:
            return this.precpred(this._ctx, 13);
        case 15:
            return this.precpred(this._ctx, 12);
        case 16:
            return this.precpred(this._ctx, 11);
        case 17:
            return this.precpred(this._ctx, 10);
        case 18:
            return this.precpred(this._ctx, 9);
        case 19:
            return this.precpred(this._ctx, 8);
        case 20:
            return this.precpred(this._ctx, 7);
        case 21:
            return this.precpred(this._ctx, 36);
        case 22:
            return this.precpred(this._ctx, 35);
        case 23:
            return this.precpred(this._ctx, 34);
        case 24:
            return this.precpred(this._ctx, 32);
        case 25:
            return not;
            self.here(ECMAScriptParser.LineTerminator);
        case 26:
            return this.precpred(this._ctx, 31);
        case 27:
            return not;
            self.here(ECMAScriptParser.LineTerminator);
    }
    return true;
}
getter_sempred(_localctx, GetterContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 28:
            return self._input.LT(1).text == "get";
    }
    return true;
}
setter_sempred(_localctx, SetterContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 29:
            return self._input.LT(1).text == "set";
    }
    return true;
}
eos_sempred(_localctx, EosContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 30:
            return self.lineTerminatorAhead();
        case 31:
            return self._input.LT(1).type == ECMAScriptParser.CloseBrace;
    }
    return true;
}
_serializedATNSegments: number = 2;
_serializedATNSegment0: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03i\u0273\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
        "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x03\x02\x05\x02r\n\x02\x03\x02\x03" +
        "\x02\x03\x03\x06\x03w\n\x03\r\x03\x0E\x03x\x03\x04\x03\x04\x03\x04\x05" +
        "\x04~\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
        "\x05\x90\n\x05\x03\x06\x03\x06\x05\x06\x94\n\x06\x03\x06\x03\x06\x03\x07" +
        "\x06\x07\x99\n\x07\r\x07\x0E\x07\x9A\x03\b\x03\b\x03\b\x03\b\x03\t\x03" +
        "\t\x03\t\x07\t\xA4\n\t\f\t\x0E\t\xA7\v\t\x03\n\x03\n\x05\n\xAB\n\n\x03" +
        "\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xBC\n\x0E\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xCF\n\x0F\x03\x0F\x03" +
        "\x0F\x05\x0F\xD3\n\x0F\x03\x0F\x03\x0F\x05\x0F\xD7\n\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xE1\n\x0F\x03" +
        "\x0F\x03\x0F\x05\x0F\xE5\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xFB\n\x0F\x03" +
        "\x10\x03\x10\x03\x10\x05\x10\u0100\n\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
        "\x03\x11\x05\x11\u0107\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x05" +
        "\x12\u010E\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
        "\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
        "\x05\x15\u0120\n\x15\x03\x15\x03\x15\x05\x15\u0124\n\x15\x05\x15\u0126" +
        "\n\x15\x03\x15\x03\x15\x03\x16\x06\x16\u012B\n\x16\r\x16\x0E\x16\u012C" +
        "\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0133\n\x17\x03\x18\x03\x18\x03" +
        "\x18\x05\x18\u0138\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A" +
        "\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0150" +
        "\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
        "\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F" +
        "\u0162\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x07" +
        " \u016C\n \f \x0E \u016F\v \x03!\x05!\u0172\n!\x03\"\x03\"\x05\"\u0176" +
        "\n\"\x03\"\x05\"\u0179\n\"\x03\"\x05\"\u017C\n\"\x03\"\x03\"\x03#\x05" +
        "#\u0181\n#\x03#\x03#\x03#\x05#\u0186\n#\x03#\x07#\u0189\n#\f#\x0E#\u018C" +
        "\v#\x03$\x06$\u018F\n$\r$\x0E$\u0190\x03%\x03%\x03%\x03%\x03%\x05%\u0198" +
        "\n%\x03%\x03%\x05%\u019C\n%\x03&\x03&\x03&\x07&\u01A1\n&\f&\x0E&\u01A4" +
        "\v&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'" +
        "\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u01B9\n\'\x03(" +
        "\x03(\x03(\x05(\u01BE\n(\x03)\x03)\x03*\x03*\x05*\u01C4\n*\x03*\x03*\x03" +
        "+\x03+\x03+\x07+\u01CB\n+\f+\x0E+\u01CE\v+\x03,\x03,\x03,\x07,\u01D3\n" +
        ",\f,\x0E,\u01D6\v,\x03-\x03-\x03-\x05-\u01DB\n-\x03-\x03-\x05-\u01DF\n" +
        "-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u01E9\n-\x03-\x03-\x03" +
        "-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
        "-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0206\n-\x03" +
        "-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
        "-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
        "-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
        "-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
        "-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x07-\u0249\n-\f-\x0E-\u024C" +
        "\v-\x03.\x03.\x03/\x03/\x05/\u0252\n/\x030\x030\x031\x031\x051\u0258\n" +
        "1\x032\x032\x032\x052\u025D\n2\x033\x033\x034\x034\x035\x035\x035\x03" +
        "5\x036\x036\x036\x036\x037\x037\x037\x037\x057\u026F\n7\x038\x038\x03" +
        "8\x02\x02\x03X9\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
        "\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
        "$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
        "@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
        "\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02\x02\r\x03\x02\x17" +
        "\x19\x03\x02\x13\x14\x03\x02\x1A\x1C\x03\x02\x1D \x03\x02!$\x03\x02*4" +
        "\x05\x02\x03\x0356ee\x03\x0279\x03\x0256\x03\x02:S\x03\x02Tc\x02\u02A8" +
        "\x02q\x03\x02\x02\x02\x04v\x03\x02\x02\x02\x06}\x03\x02\x02\x02\b\x8F" +
        "\x03\x02\x02\x02\n\x91\x03\x02\x02\x02\f\x98\x03\x02\x02\x02\x0E\x9C\x03" +
        "\x02\x02\x02\x10\xA0\x03\x02\x02\x02\x12\xA8\x03\x02\x02\x02\x14\xAC\x03" +
        "\x02\x02\x02\x16\xAF\x03\x02\x02\x02\x18\xB1\x03\x02\x02\x02\x1A\xB4\x03" +
        "\x02\x02\x02\x1C\xFA\x03\x02\x02\x02\x1E\xFC\x03\x02\x02\x02 \u0103\x03" +
        "\x02\x02\x02\"\u010A\x03\x02\x02\x02$\u0111\x03\x02\x02\x02&\u0117\x03" +
        "\x02\x02\x02(\u011D\x03\x02\x02\x02*\u012A\x03\x02\x02\x02,\u012E\x03" +
        "\x02\x02\x02.\u0134\x03\x02\x02\x020\u0139\x03\x02\x02\x022\u013D\x03" +
        "\x02\x02\x024\u014F\x03\x02\x02\x026\u0151\x03\x02\x02\x028\u0157\x03" +
        "\x02\x02\x02:\u015A\x03\x02\x02\x02<\u015D\x03\x02\x02\x02>\u0168\x03" +
        "\x02\x02\x02@\u0171\x03\x02\x02\x02B\u0173\x03\x02\x02\x02D\u0180\x03" +
        "\x02\x02\x02F\u018E\x03\x02\x02\x02H\u019B\x03\x02\x02\x02J\u019D\x03" +
        "\x02\x02\x02L\u01B8\x03\x02\x02\x02N\u01BD\x03\x02\x02\x02P\u01BF\x03" +
        "\x02\x02\x02R\u01C1\x03\x02\x02\x02T\u01C7\x03\x02\x02\x02V\u01CF\x03" +
        "\x02\x02\x02X\u0205\x03\x02\x02\x02Z\u024D\x03\x02\x02\x02\\\u0251\x03" +
        "\x02\x02\x02^\u0253\x03\x02\x02\x02`\u0257\x03\x02\x02\x02b\u025C\x03" +
        "\x02\x02\x02d\u025E\x03\x02\x02\x02f\u0260\x03\x02\x02\x02h\u0262\x03" +
        "\x02\x02\x02j\u0266\x03\x02\x02\x02l\u026E\x03\x02\x02\x02n\u0270\x03" +
        "\x02\x02\x02pr\x05\x04\x03\x02qp\x03\x02\x02\x02qr\x03\x02\x02\x02rs\x03" +
        "\x02\x02\x02st\x07\x02\x02\x03t\x03\x03\x02\x02\x02uw\x05\x06\x04\x02" +
        "vu\x03\x02\x02\x02wx\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02" +
        "y\x05\x03\x02\x02\x02z{\x06\x04\x02\x02{~\x05\b\x05\x02|~\x05<\x1F\x02" +
        "}z\x03\x02\x02\x02}|\x03\x02\x02\x02~\x07\x03\x02\x02\x02\x7F\x90\x05" +
        "\n\x06\x02\x80\x90\x05\x0E\b\x02\x81\x90\x05\x16\f\x02\x82\x83\x06\x05" +
        "\x03\x02\x83\x90\x05\x18\r\x02\x84\x90\x05\x1A\x0E\x02\x85\x90\x05\x1C" +
        "\x0F\x02\x86\x90\x05\x1E\x10\x02\x87\x90\x05 \x11\x02\x88\x90\x05\"\x12" +
        "\x02\x89\x90\x05$\x13\x02\x8A\x90\x050\x19\x02\x8B\x90\x05&\x14\x02\x8C" +
        "\x90\x052\x1A\x02\x8D\x90\x054\x1B\x02\x8E\x90\x05:\x1E\x02\x8F\x7F\x03" +
        "\x02\x02\x02\x8F\x80\x03\x02\x02\x02\x8F\x81\x03\x02\x02\x02\x8F\x82\x03" +
        "\x02\x02\x02\x8F\x84\x03\x02\x02\x02\x8F\x85\x03\x02\x02\x02\x8F\x86\x03" +
        "\x02\x02\x02\x8F\x87\x03\x02\x02\x02\x8F\x88\x03\x02\x02\x02\x8F\x89\x03" +
        "\x02\x02\x02\x8F\x8A\x03\x02\x02\x02\x8F\x8B\x03\x02\x02\x02\x8F\x8C\x03" +
        "\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x8E\x03\x02\x02\x02\x90\t\x03" +
        "\x02\x02\x02\x91\x93\x07\t\x02\x02\x92\x94\x05\f\x07\x02\x93\x92\x03\x02" +
        "\x02\x02\x93\x94\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x07\n" +
        "\x02\x02\x96\v\x03\x02\x02\x02\x97\x99\x05\b\x05\x02\x98\x97\x03\x02\x02" +
        "\x02\x99\x9A\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02" +
        "\x02\x9B\r\x03\x02\x02\x02\x9C\x9D\x07A\x02\x02\x9D\x9E\x05\x10\t\x02" +
        "\x9E\x9F\x05l7\x02\x9F\x0F\x03\x02\x02\x02\xA0\xA5\x05\x12\n\x02\xA1\xA2" +
        "\x07\f\x02\x02\xA2\xA4\x05\x12\n\x02\xA3\xA1\x03\x02\x02\x02\xA4\xA7\x03" +
        "\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\x11\x03" +
        "\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xAA\x07d\x02\x02\xA9\xAB\x05" +
        "\x14\v\x02\xAA\xA9\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\x13\x03" +
        "\x02\x02\x02\xAC\xAD\x07\r\x02\x02\xAD\xAE\x05X-\x02\xAE\x15\x03\x02\x02" +
        "\x02\xAF\xB0\x07\v\x02\x02\xB0\x17\x03\x02\x02\x02\xB1\xB2\x05V,\x02\xB2" +
        "\xB3\x05l7\x02\xB3\x19\x03\x02\x02\x02\xB4\xB5\x07O\x02\x02\xB5\xB6\x07" +
        "\x07\x02\x02\xB6\xB7\x05V,\x02\xB7\xB8\x07\b\x02\x02\xB8\xBB\x05\b\x05" +
        "\x02\xB9\xBA\x07?\x02\x02\xBA\xBC\x05\b\x05\x02\xBB\xB9\x03\x02\x02\x02" +
        "\xBB\xBC\x03\x02\x02\x02\xBC\x1B\x03\x02\x02\x02\xBD\xBE\x07;\x02\x02" +
        "\xBE\xBF\x05\b\x05\x02\xBF\xC0\x07I\x02\x02\xC0\xC1\x07\x07\x02\x02\xC1" +
        "\xC2\x05V,\x02\xC2\xC3\x07\b\x02\x02\xC3\xC4\x05l7\x02\xC4\xFB\x03\x02" +
        "\x02\x02\xC5\xC6\x07I\x02\x02\xC6\xC7\x07\x07\x02\x02\xC7\xC8\x05V,\x02" +
        "\xC8\xC9\x07\b\x02\x02\xC9\xCA\x05\b\x05\x02\xCA\xFB\x03\x02\x02\x02\xCB" +
        "\xCC\x07G\x02\x02\xCC\xCE\x07\x07\x02\x02\xCD\xCF\x05V,\x02\xCE\xCD\x03" +
        "\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD2\x07" +
        "\v\x02\x02\xD1\xD3\x05V,\x02\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02" +
        "\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x07\v\x02\x02\xD5\xD7\x05V,\x02\xD6" +
        "\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8" +
        "\xD9\x07\b\x02\x02\xD9\xFB\x05\b\x05\x02\xDA\xDB\x07G\x02\x02\xDB\xDC" +
        "\x07\x07\x02\x02\xDC\xDD\x07A\x02\x02\xDD\xDE\x05\x10\t\x02\xDE\xE0\x07" +
        "\v\x02\x02\xDF\xE1\x05V,\x02\xE0\xDF\x03\x02\x02\x02\xE0\xE1\x03\x02\x02" +
        "\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE4\x07\v\x02\x02\xE3\xE5\x05V,\x02\xE4" +
        "\xE3\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6" +
        "\xE7\x07\b\x02\x02\xE7\xE8\x05\b\x05\x02\xE8\xFB\x03\x02\x02\x02\xE9\xEA" +
        "\x07G\x02\x02\xEA\xEB\x07\x07\x02\x02\xEB\xEC\x05X-\x02\xEC\xED\x07R\x02" +
        "\x02\xED\xEE\x05V,\x02\xEE\xEF\x07\b\x02\x02\xEF\xF0\x05\b\x05\x02\xF0" +
        "\xFB\x03\x02\x02\x02\xF1\xF2\x07G\x02\x02\xF2\xF3\x07\x07\x02\x02\xF3" +
        "\xF4\x07A\x02\x02\xF4\xF5\x05\x12\n\x02\xF5\xF6\x07R\x02\x02\xF6\xF7\x05" +
        "V,\x02\xF7\xF8\x07\b\x02\x02\xF8\xF9\x05\b\x05\x02\xF9\xFB\x03\x02\x02" +
        "\x02\xFA\xBD\x03\x02\x02\x02\xFA\xC5\x03\x02\x02\x02\xFA\xCB\x03\x02\x02" +
        "\x02\xFA\xDA\x03\x02\x02\x02\xFA\xE9\x03\x02\x02\x02\xFA\xF1\x03\x02\x02" +
        "\x02\xFB\x1D\x03\x02\x02\x02\xFC\xFF\x07F\x02\x02\xFD\xFE\x06\x10\x04" +
        "\x02\xFE\u0100\x07d\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02" +
        "\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0102\x05l7\x02\u0102\x1F\x03" +
        "\x02\x02\x02\u0103\u0106\x07:\x02\x02\u0104\u0105\x06\x11\x05\x02\u0105" +
        "\u0107\x07d\x02\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02" +
        "\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0109\x05l7\x02\u0109!\x03\x02" +
        "\x02\x02\u010A\u010D\x07D\x02\x02\u010B\u010C\x06\x12\x06\x02\u010C\u010E" +
        "\x05V,\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E" +
        "\u010F\x03\x02\x02\x02\u010F\u0110\x05l7\x02\u0110#\x03\x02\x02\x02\u0111" +
        "\u0112\x07M\x02\x02\u0112\u0113\x07\x07\x02\x02\u0113\u0114\x05V,\x02" +
        "\u0114\u0115\x07\b\x02\x02\u0115\u0116\x05\b\x05\x02\u0116%\x03\x02\x02" +
        "\x02\u0117\u0118\x07H\x02\x02\u0118\u0119\x07\x07\x02\x02\u0119\u011A" +
        "\x05V,\x02\u011A\u011B\x07\b\x02\x02\u011B\u011C\x05(\x15\x02\u011C\'" +
        "\x03\x02\x02\x02\u011D\u011F\x07\t\x02\x02\u011E\u0120\x05*\x16\x02\u011F" +
        "\u011E\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0125\x03\x02" +
        "\x02\x02\u0121\u0123\x05.\x18\x02\u0122\u0124\x05*\x16\x02\u0123\u0122" +
        "\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0126\x03\x02\x02\x02" +
        "\u0125\u0121\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0127\x03" +
        "\x02\x02\x02\u0127\u0128\x07\n\x02\x02\u0128)\x03\x02\x02\x02\u0129\u012B" +
        "\x05,\x17\x02\u012A\u0129\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02" +
        "\u012C\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D+\x03\x02" +
        "\x02\x02\u012E\u012F\x07>\x02\x02\u012F\u0130\x05V,\x02\u0130\u0132\x07" +
        "\x0F\x02\x02\u0131\u0133\x05\f\x07\x02\u0132\u0131\x03\x02\x02\x02\u0132" +
        "\u0133\x03\x02\x02\x02\u0133-\x03\x02\x02\x02\u0134\u0135\x07N\x02\x02" +
        "\u0135\u0137\x07\x0F\x02\x02\u0136\u0138\x05\f\x07\x02\u0137\u0136\x03" +
        "\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138/\x03\x02\x02\x02\u0139" +
        "\u013A\x07d\x02\x02\u013A\u013B\x07\x0F\x02\x02\u013B\u013C\x05\b\x05" +
        "\x02\u013C1\x03\x02\x02\x02\u013D\u013E\x07P\x02\x02\u013E\u013F\x06\x1A" +
        "\x07\x02\u013F\u0140\x05V,\x02\u0140\u0141\x05l7\x02\u01413\x03\x02\x02" +
        "\x02\u0142\u0143\x07S\x02\x02\u0143\u0144\x05\n\x06\x02\u0144\u0145\x05" +
        "6\x1C\x02\u0145\u0150\x03\x02\x02\x02\u0146\u0147\x07S\x02\x02\u0147\u0148" +
        "\x05\n\x06\x02\u0148\u0149\x058\x1D\x02\u0149\u0150\x03\x02\x02\x02\u014A" +
        "\u014B\x07S\x02\x02\u014B\u014C\x05\n\x06\x02\u014C\u014D\x056\x1C\x02" +
        "\u014D\u014E\x058\x1D\x02\u014E\u0150\x03\x02\x02\x02\u014F\u0142\x03" +
        "\x02\x02\x02\u014F\u0146\x03\x02\x02\x02\u014F\u014A\x03\x02\x02\x02\u0150" +
        "5\x03\x02\x02\x02\u0151\u0152\x07B\x02\x02\u0152\u0153\x07\x07\x02\x02" +
        "\u0153\u0154\x07d\x02\x02\u0154\u0155\x07\b\x02\x02\u0155\u0156\x05\n" +
        "\x06\x02\u01567\x03\x02\x02\x02\u0157\u0158\x07C\x02\x02\u0158\u0159\x05" +
        "\n\x06\x02\u01599\x03\x02\x02\x02\u015A\u015B\x07J\x02\x02\u015B\u015C" +
        "\x05l7\x02\u015C;\x03\x02\x02\x02\u015D\u015E\x07K\x02\x02\u015E\u015F" +
        "\x07d\x02\x02\u015F\u0161\x07\x07\x02\x02\u0160\u0162\x05> \x02\u0161" +
        "\u0160\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0163\x03\x02" +
        "\x02\x02\u0163\u0164\x07\b\x02\x02\u0164\u0165\x07\t\x02\x02\u0165\u0166" +
        "\x05@!\x02\u0166\u0167\x07\n\x02\x02\u0167=\x03\x02\x02\x02\u0168\u016D" +
        "\x07d\x02\x02\u0169\u016A\x07\f\x02\x02\u016A\u016C\x07d\x02\x02\u016B" +
        "\u0169\x03\x02\x02\x02\u016C\u016F\x03\x02\x02\x02\u016D\u016B\x03\x02" +
        "\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E?\x03\x02\x02\x02\u016F\u016D" +
        "\x03\x02\x02\x02\u0170\u0172\x05\x04\x03\x02\u0171\u0170\x03\x02\x02\x02" +
        "\u0171\u0172\x03\x02\x02\x02\u0172A\x03\x02\x02\x02\u0173\u0175\x07\x05" +
        "\x02\x02\u0174\u0176\x05D#\x02\u0175\u0174\x03\x02\x02\x02\u0175\u0176" +
        "\x03\x02\x02\x02\u0176\u0178\x03\x02\x02\x02\u0177\u0179\x07\f\x02\x02" +
        "\u0178\u0177\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017B\x03" +
        "\x02\x02\x02\u017A\u017C\x05F$\x02\u017B\u017A\x03\x02\x02\x02\u017B\u017C" +
        "\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017E\x07\x06\x02\x02" +
        "\u017EC\x03\x02\x02\x02\u017F\u0181\x05F$\x02\u0180\u017F\x03\x02\x02" +
        "\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u018A" +
        "\x05X-\x02\u0183\u0185\x07\f\x02\x02\u0184\u0186\x05F$\x02\u0185\u0184" +
        "\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02" +
        "\u0187\u0189\x05X-\x02\u0188\u0183\x03\x02\x02\x02\u0189\u018C\x03\x02" +
        "\x02\x02\u018A\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B" +
        "E\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018D\u018F\x07\f\x02\x02" +
        "\u018E\u018D\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u018E\x03" +
        "\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191G\x03\x02\x02\x02\u0192" +
        "\u0193\x07\t\x02\x02\u0193\u019C\x07\n\x02\x02\u0194\u0195\x07\t\x02\x02" +
        "\u0195\u0197\x05J&\x02\u0196\u0198\x07\f\x02\x02\u0197\u0196\x03\x02\x02" +
        "\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019A" +
        "\x07\n\x02\x02\u019A\u019C\x03\x02\x02\x02\u019B\u0192\x03\x02\x02\x02" +
        "\u019B\u0194\x03\x02\x02\x02\u019CI\x03\x02\x02\x02\u019D\u01A2\x05L\'" +
        "\x02\u019E\u019F\x07\f\x02\x02\u019F\u01A1\x05L\'\x02\u01A0\u019E\x03" +
        "\x02\x02\x02\u01A1\u01A4\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2" +
        "\u01A3\x03\x02\x02\x02\u01A3K\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02" +
        "\x02\u01A5\u01A6\x05N(\x02\u01A6\u01A7\x07\x0F\x02\x02\u01A7\u01A8\x05" +
        "X-\x02\u01A8\u01B9\x03\x02\x02\x02\u01A9\u01AA\x05h5\x02\u01AA\u01AB\x07" +
        "\x07\x02\x02\u01AB\u01AC\x07\b\x02\x02\u01AC\u01AD\x07\t\x02\x02\u01AD" +
        "\u01AE\x05@!\x02\u01AE\u01AF\x07\n\x02\x02\u01AF\u01B9\x03\x02\x02\x02" +
        "\u01B0\u01B1\x05j6\x02\u01B1\u01B2\x07\x07\x02\x02\u01B2\u01B3\x05P)\x02" +
        "\u01B3\u01B4\x07\b\x02\x02\u01B4\u01B5\x07\t\x02\x02\u01B5\u01B6\x05@" +
        "!\x02\u01B6\u01B7\x07\n\x02\x02\u01B7\u01B9\x03\x02\x02\x02\u01B8\u01A5" +
        "\x03\x02\x02\x02\u01B8\u01A9\x03\x02\x02\x02\u01B8\u01B0\x03\x02\x02\x02" +
        "\u01B9M\x03\x02\x02\x02\u01BA\u01BE\x05`1\x02\u01BB\u01BE\x07e\x02\x02" +
        "\u01BC\u01BE\x05^0\x02\u01BD\u01BA\x03\x02\x02\x02\u01BD\u01BB\x03\x02" +
        "\x02\x02\u01BD\u01BC\x03\x02\x02\x02\u01BEO\x03\x02\x02\x02\u01BF\u01C0" +
        "\x07d\x02\x02\u01C0Q\x03\x02\x02\x02\u01C1\u01C3\x07\x07\x02\x02\u01C2" +
        "\u01C4\x05T+\x02\u01C3\u01C2\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02" +
        "\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x07\b\x02\x02\u01C6S\x03\x02" +
        "\x02\x02\u01C7\u01CC\x05X-\x02\u01C8\u01C9\x07\f\x02\x02\u01C9\u01CB\x05" +
        "X-\x02\u01CA\u01C8\x03\x02\x02\x02\u01CB\u01CE\x03\x02\x02\x02\u01CC\u01CA" +
        "\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CDU\x03\x02\x02\x02\u01CE" +
        "\u01CC\x03\x02\x02\x02\u01CF\u01D4\x05X-\x02\u01D0\u01D1\x07\f\x02\x02" +
        "\u01D1\u01D3\x05X-\x02\u01D2\u01D0\x03\x02\x02\x02\u01D3\u01D6\x03\x02" +
        "\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5" +
        "W\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01D8\b-\x01\x02\u01D8" +
        "\u01DA\x07K\x02\x02\u01D9\u01DB\x07d\x02\x02\u01DA\u01D9\x03\x02\x02\x02" +
        "\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DE\x07" +
        "\x07\x02\x02\u01DD\u01DF\x05> \x02\u01DE\u01DD\x03\x02\x02\x02\u01DE\u01DF" +
        "\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E1\x07\b\x02\x02" +
        "\u01E1\u01E2\x07\t\x02\x02\u01E2\u01E3\x05@!\x02\u01E3\u01E4\x07\n\x02" +
        "\x02\u01E4\u0206\x03\x02\x02\x02\u01E5\u01E6\x07@\x02\x02\u01E6\u01E8" +
        "\x05X-\x02\u01E7\u01E9\x05R*\x02\u01E8\u01E7\x03\x02\x02\x02\u01E8\u01E9" +
        "\x03\x02\x02\x02\u01E9\u0206\x03\x02\x02\x02\u01EA\u01EB\x07Q\x02\x02" +
        "\u01EB\u0206\x05X- \u01EC\u01ED\x07E\x02\x02\u01ED\u0206\x05X-\x1F\u01EE" +
        "\u01EF\x07=\x02\x02\u01EF\u0206\x05X-\x1E\u01F0\u01F1\x07\x11\x02\x02" +
        "\u01F1\u0206\x05X-\x1D\u01F2\u01F3\x07\x12\x02\x02\u01F3\u0206\x05X-\x1C" +
        "\u01F4\u01F5\x07\x13\x02\x02\u01F5\u0206\x05X-\x1B\u01F6\u01F7\x07\x14" +
        "\x02\x02\u01F7\u0206\x05X-\x1A\u01F8\u01F9\x07\x15\x02\x02\u01F9\u0206" +
        "\x05X-\x19\u01FA\u01FB\x07\x16\x02\x02\u01FB\u0206\x05X-\x18\u01FC\u0206" +
        "\x07L\x02\x02\u01FD\u0206\x07d\x02\x02\u01FE\u0206\x05\\/\x02\u01FF\u0206" +
        "\x05B\"\x02\u0200\u0206\x05H%\x02\u0201\u0202\x07\x07\x02\x02\u0202\u0203" +
        "\x05V,\x02\u0203\u0204\x07\b\x02\x02\u0204\u0206\x03\x02\x02\x02\u0205" +
        "\u01D7\x03\x02\x02\x02\u0205\u01E5\x03\x02\x02\x02\u0205\u01EA\x03\x02" +
        "\x02\x02\u0205\u01EC\x03\x02\x02\x02\u0205\u01EE\x03\x02\x02\x02\u0205" +
        "\u01F0\x03\x02\x02\x02\u0205\u01F2\x03\x02\x02\x02\u0205\u01F4\x03\x02" +
        "\x02\x02\u0205\u01F6\x03\x02\x02\x02\u0205\u01F8\x03\x02\x02\x02\u0205" +
        "\u01FA\x03\x02\x02\x02\u0205\u01FC\x03\x02\x02\x02\u0205\u01FD\x03\x02" +
        "\x02\x02\u0205\u01FE\x03\x02\x02\x02\u0205\u01FF\x03\x02\x02\x02\u0205" +
        "\u0200\x03\x02\x02\x02\u0205\u0201\x03\x02\x02\x02\u0206\u024A\x03\x02" +
        "\x02\x02\u0207\u0208\f\x17\x02\x02\u0208\u0209\t\x02\x02\x02\u0209\u0249" +
        "\x05X-\x18\u020A\u020B\f\x16\x02\x02\u020B\u020C\t\x03\x02\x02\u020C\u0249" +
        "\x05X-\x17\u020D\u020E\f\x15\x02\x02\u020E\u020F\t\x04\x02\x02\u020F\u0249" +
        "\x05X-\x16\u0210\u0211\f\x14\x02\x02\u0211\u0212\t\x05\x02\x02\u0212\u0249" +
        "\x05X-\x15\u0213\u0214\f\x13\x02\x02\u0214\u0215\x07<\x02\x02\u0215\u0249" +
        "\x05X-\x14\u0216\u0217\f\x12\x02\x02\u0217\u0218\x07R\x02\x02\u0218\u0249" +
        "\x05X-\x13\u0219\u021A\f\x11\x02\x02\u021A\u021B\t\x06\x02\x02\u021B\u0249" +
        "\x05X-\x12\u021C\u021D\f\x10\x02\x02\u021D\u021E\x07%\x02\x02\u021E\u0249" +
        "\x05X-\x11\u021F\u0220\f\x0F\x02\x02\u0220\u0221\x07&\x02\x02\u0221\u0249" +
        "\x05X-\x10\u0222\u0223\f\x0E\x02\x02\u0223\u0224\x07\'\x02\x02\u0224\u0249" +
        "\x05X-\x0F\u0225\u0226\f\r\x02\x02\u0226\u0227\x07(\x02\x02\u0227\u0249" +
        "\x05X-\x0E\u0228\u0229\f\f\x02\x02\u0229\u022A\x07)\x02\x02\u022A\u0249" +
        "\x05X-\r\u022B\u022C\f\v\x02\x02\u022C\u022D\x07\x0E\x02\x02\u022D\u022E" +
        "\x05X-\x02\u022E\u022F\x07\x0F\x02\x02\u022F\u0230\x05X";
_serializedATNSegment1: string =
    "-\f\u0230\u0249\x03\x02\x02\x02\u0231\u0232\f\n\x02\x02\u0232\u0233\x07" +
        "\r\x02\x02\u0233\u0249\x05X-\v\u0234\u0235\f\t\x02\x02\u0235\u0236\x05" +
        "Z.\x02\u0236\u0237\x05X-\n\u0237\u0249\x03\x02\x02\x02\u0238\u0239\f&" +
        "\x02\x02\u0239\u023A\x07\x05\x02\x02\u023A\u023B\x05V,\x02\u023B\u023C" +
        "\x07\x06\x02\x02\u023C\u0249\x03\x02\x02\x02\u023D\u023E\f%\x02\x02\u023E" +
        "\u023F\x07\x10\x02\x02\u023F\u0249\x05`1\x02\u0240\u0241\f$\x02\x02\u0241" +
        "\u0249\x05R*\x02\u0242\u0243\f\"\x02\x02\u0243\u0244\x06-\x1B\x02\u0244" +
        "\u0249\x07\x11\x02\x02\u0245\u0246\f!\x02\x02\u0246\u0247\x06-\x1D\x02" +
        "\u0247\u0249\x07\x12\x02\x02\u0248\u0207\x03\x02\x02\x02\u0248\u020A\x03" +
        "\x02\x02\x02\u0248\u020D\x03\x02\x02\x02\u0248\u0210\x03\x02\x02\x02\u0248" +
        "\u0213\x03\x02\x02\x02\u0248\u0216\x03\x02\x02\x02\u0248\u0219\x03\x02" +
        "\x02\x02\u0248\u021C\x03\x02\x02\x02\u0248\u021F\x03\x02\x02\x02\u0248" +
        "\u0222\x03\x02\x02\x02\u0248\u0225\x03\x02\x02\x02\u0248\u0228\x03\x02" +
        "\x02\x02\u0248\u022B\x03\x02\x02\x02\u0248\u0231\x03\x02\x02\x02\u0248" +
        "\u0234\x03\x02\x02\x02\u0248\u0238\x03\x02\x02\x02\u0248\u023D\x03\x02" +
        "\x02\x02\u0248\u0240\x03\x02\x02\x02\u0248\u0242\x03\x02\x02\x02\u0248" +
        "\u0245\x03\x02\x02\x02\u0249\u024C\x03\x02\x02\x02\u024A\u0248\x03\x02" +
        "\x02\x02\u024A\u024B\x03\x02\x02\x02\u024BY\x03\x02\x02\x02\u024C\u024A" +
        "\x03\x02\x02\x02\u024D\u024E\t\x07\x02\x02\u024E[\x03\x02\x02\x02\u024F" +
        "\u0252\t\b\x02\x02\u0250\u0252\x05^0\x02\u0251\u024F\x03\x02\x02\x02\u0251" +
        "\u0250\x03\x02\x02\x02\u0252]\x03\x02\x02\x02\u0253\u0254\t\t\x02\x02" +
        "\u0254_\x03\x02\x02\x02\u0255\u0258\x07d\x02\x02\u0256\u0258\x05b2\x02" +
        "\u0257\u0255\x03\x02\x02\x02\u0257\u0256\x03\x02\x02\x02\u0258a\x03\x02" +
        "\x02\x02\u0259\u025D\x05d3\x02\u025A\u025D\x05f4\x02\u025B\u025D\t\n\x02" +
        "\x02\u025C\u0259\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025C\u025B" +
        "\x03\x02\x02\x02\u025Dc\x03\x02\x02\x02\u025E\u025F\t\v\x02\x02\u025F" +
        "e\x03\x02\x02\x02\u0260\u0261\t\f\x02\x02\u0261g\x03\x02\x02\x02\u0262" +
        "\u0263\x065\x1E\x02\u0263\u0264\x07d\x02\x02\u0264\u0265\x05N(\x02\u0265" +
        "i\x03\x02\x02\x02\u0266\u0267\x066\x1F\x02\u0267\u0268\x07d\x02\x02\u0268" +
        "\u0269\x05N(\x02\u0269k\x03\x02\x02\x02\u026A\u026F\x07\v\x02\x02\u026B" +
        "\u026F\x07\x02\x02\x03\u026C\u026F\x067 \x02\u026D\u026F\x067!\x02\u026E" +
        "\u026A\x03\x02\x02\x02\u026E\u026B\x03\x02\x02\x02\u026E\u026C\x03\x02" +
        "\x02\x02\u026E\u026D\x03\x02\x02\x02\u026Fm\x03\x02\x02\x02\u0270\u0271" +
        "\x07\x02\x02\x03\u0271o\x03\x02\x02\x027qx}\x8F\x93\x9A\xA5\xAA\xBB\xCE" +
        "\xD2\xD6\xE0\xE4\xFA\xFF\u0106\u010D\u011F\u0123\u0125\u012C\u0132\u0137" +
        "\u014F\u0161\u016D\u0171\u0175\u0178\u017B\u0180\u0185\u018A\u0190\u0197" +
        "\u019B\u01A2\u01B8\u01BD\u01C3\u01CC\u01D4\u01DA\u01DE\u01E8\u0205\u0248" +
        "\u024A\u0251\u0257\u025C\u026E";
_serializedATN: string = Utils.join([
    ECMAScriptParser._serializedATNSegment0,
    ECMAScriptParser._serializedATNSegment1,
], "");
__ATN: ATN_1.ATN;
get;
_ATN();
ATN_1.ATN;
{
    if (!ECMAScriptParser.__ATN) {
        ECMAScriptParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ECMAScriptParser._serializedATN));
    }
    return ECMAScriptParser.__ATN;
}
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.EOF = function () { return this.getToken(ECMAScriptParser.EOF, 0); };
    ProgramContext.prototype.sourceElements = function () {
        return this.tryGetRuleContext(0, SourceElementsContext);
    };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_program; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgramContext.prototype.enterRule = function (listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    };
    // @Override
    ProgramContext.prototype.exitRule = function (listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    };
    // @Override
    ProgramContext.prototype.accept = function (visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgramContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgramContext = ProgramContext;
var SourceElementsContext = /** @class */ (function (_super) {
    __extends(SourceElementsContext, _super);
    function SourceElementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SourceElementsContext.prototype.sourceElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SourceElementContext);
        }
        else {
            return this.getRuleContext(i, SourceElementContext);
        }
    };
    Object.defineProperty(SourceElementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_sourceElements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SourceElementsContext.prototype.enterRule = function (listener) {
        if (listener.enterSourceElements) {
            listener.enterSourceElements(this);
        }
    };
    // @Override
    SourceElementsContext.prototype.exitRule = function (listener) {
        if (listener.exitSourceElements) {
            listener.exitSourceElements(this);
        }
    };
    // @Override
    SourceElementsContext.prototype.accept = function (visitor) {
        if (visitor.visitSourceElements) {
            return visitor.visitSourceElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SourceElementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SourceElementsContext = SourceElementsContext;
var SourceElementContext = /** @class */ (function (_super) {
    __extends(SourceElementContext, _super);
    function SourceElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SourceElementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    SourceElementContext.prototype.functionDeclaration = function () {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    };
    Object.defineProperty(SourceElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_sourceElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SourceElementContext.prototype.enterRule = function (listener) {
        if (listener.enterSourceElement) {
            listener.enterSourceElement(this);
        }
    };
    // @Override
    SourceElementContext.prototype.exitRule = function (listener) {
        if (listener.exitSourceElement) {
            listener.exitSourceElement(this);
        }
    };
    // @Override
    SourceElementContext.prototype.accept = function (visitor) {
        if (visitor.visitSourceElement) {
            return visitor.visitSourceElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SourceElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SourceElementContext = SourceElementContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.block = function () {
        return this.tryGetRuleContext(0, BlockContext);
    };
    StatementContext.prototype.variableStatement = function () {
        return this.tryGetRuleContext(0, VariableStatementContext);
    };
    StatementContext.prototype.emptyStatement = function () {
        return this.tryGetRuleContext(0, EmptyStatementContext);
    };
    StatementContext.prototype.expressionStatement = function () {
        return this.tryGetRuleContext(0, ExpressionStatementContext);
    };
    StatementContext.prototype.ifStatement = function () {
        return this.tryGetRuleContext(0, IfStatementContext);
    };
    StatementContext.prototype.iterationStatement = function () {
        return this.tryGetRuleContext(0, IterationStatementContext);
    };
    StatementContext.prototype.continueStatement = function () {
        return this.tryGetRuleContext(0, ContinueStatementContext);
    };
    StatementContext.prototype.breakStatement = function () {
        return this.tryGetRuleContext(0, BreakStatementContext);
    };
    StatementContext.prototype.returnStatement = function () {
        return this.tryGetRuleContext(0, ReturnStatementContext);
    };
    StatementContext.prototype.withStatement = function () {
        return this.tryGetRuleContext(0, WithStatementContext);
    };
    StatementContext.prototype.labelledStatement = function () {
        return this.tryGetRuleContext(0, LabelledStatementContext);
    };
    StatementContext.prototype.switchStatement = function () {
        return this.tryGetRuleContext(0, SwitchStatementContext);
    };
    StatementContext.prototype.throwStatement = function () {
        return this.tryGetRuleContext(0, ThrowStatementContext);
    };
    StatementContext.prototype.tryStatement = function () {
        return this.tryGetRuleContext(0, TryStatementContext);
    };
    StatementContext.prototype.debuggerStatement = function () {
        return this.tryGetRuleContext(0, DebuggerStatementContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_statement; },
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
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.OpenBrace = function () { return this.getToken(ECMAScriptParser.OpenBrace, 0); };
    BlockContext.prototype.CloseBrace = function () { return this.getToken(ECMAScriptParser.CloseBrace, 0); };
    BlockContext.prototype.statementList = function () {
        return this.tryGetRuleContext(0, StatementListContext);
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockContext.prototype.enterRule = function (listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.exitRule = function (listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.accept = function (visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockContext = BlockContext;
var StatementListContext = /** @class */ (function (_super) {
    __extends(StatementListContext, _super);
    function StatementListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementListContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    Object.defineProperty(StatementListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_statementList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementListContext.prototype.enterRule = function (listener) {
        if (listener.enterStatementList) {
            listener.enterStatementList(this);
        }
    };
    // @Override
    StatementListContext.prototype.exitRule = function (listener) {
        if (listener.exitStatementList) {
            listener.exitStatementList(this);
        }
    };
    // @Override
    StatementListContext.prototype.accept = function (visitor) {
        if (visitor.visitStatementList) {
            return visitor.visitStatementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementListContext = StatementListContext;
var VariableStatementContext = /** @class */ (function (_super) {
    __extends(VariableStatementContext, _super);
    function VariableStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableStatementContext.prototype.Var = function () { return this.getToken(ECMAScriptParser.Var, 0); };
    VariableStatementContext.prototype.variableDeclarationList = function () {
        return this.getRuleContext(0, VariableDeclarationListContext);
    };
    VariableStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    Object.defineProperty(VariableStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_variableStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableStatement) {
            listener.enterVariableStatement(this);
        }
    };
    // @Override
    VariableStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableStatement) {
            listener.exitVariableStatement(this);
        }
    };
    // @Override
    VariableStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableStatement) {
            return visitor.visitVariableStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableStatementContext = VariableStatementContext;
var VariableDeclarationListContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationListContext, _super);
    function VariableDeclarationListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationListContext.prototype.variableDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclarationContext);
        }
    };
    VariableDeclarationListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(ECMAScriptParser.Comma);
        }
        else {
            return this.getToken(ECMAScriptParser.Comma, i);
        }
    };
    Object.defineProperty(VariableDeclarationListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_variableDeclarationList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclarationListContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclarationList) {
            listener.enterVariableDeclarationList(this);
        }
    };
    // @Override
    VariableDeclarationListContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclarationList) {
            listener.exitVariableDeclarationList(this);
        }
    };
    // @Override
    VariableDeclarationListContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclarationList) {
            return visitor.visitVariableDeclarationList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclarationListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclarationListContext = VariableDeclarationListContext;
var VariableDeclarationContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationContext, _super);
    function VariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationContext.prototype.Identifier = function () { return this.getToken(ECMAScriptParser.Identifier, 0); };
    VariableDeclarationContext.prototype.initialiser = function () {
        return this.tryGetRuleContext(0, InitialiserContext);
    };
    Object.defineProperty(VariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_variableDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclaration) {
            listener.enterVariableDeclaration(this);
        }
    };
    // @Override
    VariableDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclaration) {
            listener.exitVariableDeclaration(this);
        }
    };
    // @Override
    VariableDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclarationContext = VariableDeclarationContext;
var InitialiserContext = /** @class */ (function (_super) {
    __extends(InitialiserContext, _super);
    function InitialiserContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitialiserContext.prototype.Assign = function () { return this.getToken(ECMAScriptParser.Assign, 0); };
    InitialiserContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    Object.defineProperty(InitialiserContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_initialiser; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitialiserContext.prototype.enterRule = function (listener) {
        if (listener.enterInitialiser) {
            listener.enterInitialiser(this);
        }
    };
    // @Override
    InitialiserContext.prototype.exitRule = function (listener) {
        if (listener.exitInitialiser) {
            listener.exitInitialiser(this);
        }
    };
    // @Override
    InitialiserContext.prototype.accept = function (visitor) {
        if (visitor.visitInitialiser) {
            return visitor.visitInitialiser(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitialiserContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitialiserContext = InitialiserContext;
var EmptyStatementContext = /** @class */ (function (_super) {
    __extends(EmptyStatementContext, _super);
    function EmptyStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EmptyStatementContext.prototype.SemiColon = function () { return this.getToken(ECMAScriptParser.SemiColon, 0); };
    Object.defineProperty(EmptyStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_emptyStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EmptyStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterEmptyStatement) {
            listener.enterEmptyStatement(this);
        }
    };
    // @Override
    EmptyStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitEmptyStatement) {
            listener.exitEmptyStatement(this);
        }
    };
    // @Override
    EmptyStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitEmptyStatement) {
            return visitor.visitEmptyStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EmptyStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EmptyStatementContext = EmptyStatementContext;
var ExpressionStatementContext = /** @class */ (function (_super) {
    __extends(ExpressionStatementContext, _super);
    function ExpressionStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    ExpressionStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    Object.defineProperty(ExpressionStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_expressionStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionStatement) {
            listener.enterExpressionStatement(this);
        }
    };
    // @Override
    ExpressionStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionStatement) {
            listener.exitExpressionStatement(this);
        }
    };
    // @Override
    ExpressionStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionStatementContext = ExpressionStatementContext;
var IfStatementContext = /** @class */ (function (_super) {
    __extends(IfStatementContext, _super);
    function IfStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfStatementContext.prototype.If = function () { return this.getToken(ECMAScriptParser.If, 0); };
    IfStatementContext.prototype.OpenParen = function () { return this.getToken(ECMAScriptParser.OpenParen, 0); };
    IfStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    IfStatementContext.prototype.CloseParen = function () { return this.getToken(ECMAScriptParser.CloseParen, 0); };
    IfStatementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    IfStatementContext.prototype.Else = function () { return this.tryGetToken(ECMAScriptParser.Else, 0); };
    Object.defineProperty(IfStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_ifStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this);
        }
    };
    // @Override
    IfStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this);
        }
    };
    // @Override
    IfStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfStatementContext = IfStatementContext;
var IterationStatementContext = /** @class */ (function (_super) {
    __extends(IterationStatementContext, _super);
    function IterationStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(IterationStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_iterationStatement; },
        enumerable: true,
        configurable: true
    });
    IterationStatementContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return IterationStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IterationStatementContext = IterationStatementContext;
var DoStatementContext = /** @class */ (function (_super) {
    __extends(DoStatementContext, _super);
    function DoStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    DoStatementContext.prototype.Do = function () { return this.getToken(ECMAScriptParser.Do, 0); };
    DoStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    DoStatementContext.prototype.While = function () { return this.getToken(ECMAScriptParser.While, 0); };
    DoStatementContext.prototype.OpenParen = function () { return this.getToken(ECMAScriptParser.OpenParen, 0); };
    DoStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    DoStatementContext.prototype.CloseParen = function () { return this.getToken(ECMAScriptParser.CloseParen, 0); };
    DoStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    // @Override
    DoStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterDoStatement) {
            listener.enterDoStatement(this);
        }
    };
    // @Override
    DoStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitDoStatement) {
            listener.exitDoStatement(this);
        }
    };
    // @Override
    DoStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitDoStatement) {
            return visitor.visitDoStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DoStatementContext;
}(IterationStatementContext));
exports.DoStatementContext = DoStatementContext;
var WhileStatementContext = /** @class */ (function (_super) {
    __extends(WhileStatementContext, _super);
    function WhileStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    WhileStatementContext.prototype.While = function () { return this.getToken(ECMAScriptParser.While, 0); };
    WhileStatementContext.prototype.OpenParen = function () { return this.getToken(ECMAScriptParser.OpenParen, 0); };
    WhileStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    WhileStatementContext.prototype.CloseParen = function () { return this.getToken(ECMAScriptParser.CloseParen, 0); };
    WhileStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    // @Override
    WhileStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    };
    // @Override
    WhileStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
    };
    // @Override
    WhileStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhileStatementContext;
}(IterationStatementContext));
exports.WhileStatementContext = WhileStatementContext;
var ForStatementContext = /** @class */ (function (_super) {
    __extends(ForStatementContext, _super);
    function ForStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ForStatementContext.prototype.For = function () { return this.getToken(ECMAScriptParser.For, 0); };
    ForStatementContext.prototype.OpenParen = function () { return this.getToken(ECMAScriptParser.OpenParen, 0); };
    ForStatementContext.prototype.SemiColon = function (i) {
        if (i === undefined) {
            return this.getTokens(ECMAScriptParser.SemiColon);
        }
        else {
            return this.getToken(ECMAScriptParser.SemiColon, i);
        }
    };
    ForStatementContext.prototype.CloseParen = function () { return this.getToken(ECMAScriptParser.CloseParen, 0); };
    ForStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    ForStatementContext.prototype.expressionSequence = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionSequenceContext);
        }
        else {
            return this.getRuleContext(i, ExpressionSequenceContext);
        }
    };
    // @Override
    ForStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForStatement) {
            listener.enterForStatement(this);
        }
    };
    // @Override
    ForStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForStatement) {
            listener.exitForStatement(this);
        }
    };
    // @Override
    ForStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForStatement) {
            return visitor.visitForStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForStatementContext;
}(IterationStatementContext));
exports.ForStatementContext = ForStatementContext;
var ForVarStatementContext = /** @class */ (function (_super) {
    __extends(ForVarStatementContext, _super);
    function ForVarStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ForVarStatementContext.prototype.For = function () { return this.getToken(ECMAScriptParser.For, 0); };
    ForVarStatementContext.prototype.OpenParen = function () { return this.getToken(ECMAScriptParser.OpenParen, 0); };
    ForVarStatementContext.prototype.Var = function () { return this.getToken(ECMAScriptParser.Var, 0); };
    ForVarStatementContext.prototype.variableDeclarationList = function () {
        return this.getRuleContext(0, VariableDeclarationListContext);
    };
    ForVarStatementContext.prototype.SemiColon = function (i) {
        if (i === undefined) {
            return this.getTokens(ECMAScriptParser.SemiColon);
        }
        else {
            return this.getToken(ECMAScriptParser.SemiColon, i);
        }
    };
    ForVarStatementContext.prototype.CloseParen = function () { return this.getToken(ECMAScriptParser.CloseParen, 0); };
    ForVarStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    ForVarStatementContext.prototype.expressionSequence = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionSequenceContext);
        }
        else {
            return this.getRuleContext(i, ExpressionSequenceContext);
        }
    };
    // @Override
    ForVarStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForVarStatement) {
            listener.enterForVarStatement(this);
        }
    };
    // @Override
    ForVarStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForVarStatement) {
            listener.exitForVarStatement(this);
        }
    };
    // @Override
    ForVarStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForVarStatement) {
            return visitor.visitForVarStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForVarStatementContext;
}(IterationStatementContext));
exports.ForVarStatementContext = ForVarStatementContext;
var ForInStatementContext = /** @class */ (function (_super) {
    __extends(ForInStatementContext, _super);
    function ForInStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ForInStatementContext.prototype.For = function () { return this.getToken(ECMAScriptParser.For, 0); };
    ForInStatementContext.prototype.OpenParen = function () { return this.getToken(ECMAScriptParser.OpenParen, 0); };
    ForInStatementContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    ForInStatementContext.prototype.In = function () { return this.getToken(ECMAScriptParser.In, 0); };
    ForInStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    ForInStatementContext.prototype.CloseParen = function () { return this.getToken(ECMAScriptParser.CloseParen, 0); };
    ForInStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    // @Override
    ForInStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForInStatement) {
            listener.enterForInStatement(this);
        }
    };
    // @Override
    ForInStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForInStatement) {
            listener.exitForInStatement(this);
        }
    };
    // @Override
    ForInStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForInStatement) {
            return visitor.visitForInStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForInStatementContext;
}(IterationStatementContext));
exports.ForInStatementContext = ForInStatementContext;
var ForVarInStatementContext = /** @class */ (function (_super) {
    __extends(ForVarInStatementContext, _super);
    function ForVarInStatementContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ForVarInStatementContext.prototype.For = function () { return this.getToken(ECMAScriptParser.For, 0); };
    ForVarInStatementContext.prototype.OpenParen = function () { return this.getToken(ECMAScriptParser.OpenParen, 0); };
    ForVarInStatementContext.prototype.Var = function () { return this.getToken(ECMAScriptParser.Var, 0); };
    ForVarInStatementContext.prototype.variableDeclaration = function () {
        return this.getRuleContext(0, VariableDeclarationContext);
    };
    ForVarInStatementContext.prototype.In = function () { return this.getToken(ECMAScriptParser.In, 0); };
    ForVarInStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    ForVarInStatementContext.prototype.CloseParen = function () { return this.getToken(ECMAScriptParser.CloseParen, 0); };
    ForVarInStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    // @Override
    ForVarInStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForVarInStatement) {
            listener.enterForVarInStatement(this);
        }
    };
    // @Override
    ForVarInStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForVarInStatement) {
            listener.exitForVarInStatement(this);
        }
    };
    // @Override
    ForVarInStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForVarInStatement) {
            return visitor.visitForVarInStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForVarInStatementContext;
}(IterationStatementContext));
exports.ForVarInStatementContext = ForVarInStatementContext;
var ContinueStatementContext = /** @class */ (function (_super) {
    __extends(ContinueStatementContext, _super);
    function ContinueStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ContinueStatementContext.prototype.Continue = function () { return this.getToken(ECMAScriptParser.Continue, 0); };
    ContinueStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    ContinueStatementContext.prototype.Identifier = function () { return this.tryGetToken(ECMAScriptParser.Identifier, 0); };
    Object.defineProperty(ContinueStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_continueStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ContinueStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterContinueStatement) {
            listener.enterContinueStatement(this);
        }
    };
    // @Override
    ContinueStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitContinueStatement) {
            listener.exitContinueStatement(this);
        }
    };
    // @Override
    ContinueStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitContinueStatement) {
            return visitor.visitContinueStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ContinueStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ContinueStatementContext = ContinueStatementContext;
var BreakStatementContext = /** @class */ (function (_super) {
    __extends(BreakStatementContext, _super);
    function BreakStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BreakStatementContext.prototype.Break = function () { return this.getToken(ECMAScriptParser.Break, 0); };
    BreakStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    BreakStatementContext.prototype.Identifier = function () { return this.tryGetToken(ECMAScriptParser.Identifier, 0); };
    Object.defineProperty(BreakStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_breakStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BreakStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterBreakStatement) {
            listener.enterBreakStatement(this);
        }
    };
    // @Override
    BreakStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitBreakStatement) {
            listener.exitBreakStatement(this);
        }
    };
    // @Override
    BreakStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitBreakStatement) {
            return visitor.visitBreakStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BreakStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BreakStatementContext = BreakStatementContext;
var ReturnStatementContext = /** @class */ (function (_super) {
    __extends(ReturnStatementContext, _super);
    function ReturnStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnStatementContext.prototype.Return = function () { return this.getToken(ECMAScriptParser.Return, 0); };
    ReturnStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    ReturnStatementContext.prototype.expressionSequence = function () {
        return this.tryGetRuleContext(0, ExpressionSequenceContext);
    };
    Object.defineProperty(ReturnStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_returnStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturnStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterReturnStatement) {
            listener.enterReturnStatement(this);
        }
    };
    // @Override
    ReturnStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitReturnStatement) {
            listener.exitReturnStatement(this);
        }
    };
    // @Override
    ReturnStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturnStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturnStatementContext = ReturnStatementContext;
var WithStatementContext = /** @class */ (function (_super) {
    __extends(WithStatementContext, _super);
    function WithStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WithStatementContext.prototype.With = function () { return this.getToken(ECMAScriptParser.With, 0); };
    WithStatementContext.prototype.OpenParen = function () { return this.getToken(ECMAScriptParser.OpenParen, 0); };
    WithStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    WithStatementContext.prototype.CloseParen = function () { return this.getToken(ECMAScriptParser.CloseParen, 0); };
    WithStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(WithStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_withStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WithStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterWithStatement) {
            listener.enterWithStatement(this);
        }
    };
    // @Override
    WithStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitWithStatement) {
            listener.exitWithStatement(this);
        }
    };
    // @Override
    WithStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitWithStatement) {
            return visitor.visitWithStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WithStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WithStatementContext = WithStatementContext;
var SwitchStatementContext = /** @class */ (function (_super) {
    __extends(SwitchStatementContext, _super);
    function SwitchStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SwitchStatementContext.prototype.Switch = function () { return this.getToken(ECMAScriptParser.Switch, 0); };
    SwitchStatementContext.prototype.OpenParen = function () { return this.getToken(ECMAScriptParser.OpenParen, 0); };
    SwitchStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    SwitchStatementContext.prototype.CloseParen = function () { return this.getToken(ECMAScriptParser.CloseParen, 0); };
    SwitchStatementContext.prototype.caseBlock = function () {
        return this.getRuleContext(0, CaseBlockContext);
    };
    Object.defineProperty(SwitchStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_switchStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SwitchStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterSwitchStatement) {
            listener.enterSwitchStatement(this);
        }
    };
    // @Override
    SwitchStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitSwitchStatement) {
            listener.exitSwitchStatement(this);
        }
    };
    // @Override
    SwitchStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitSwitchStatement) {
            return visitor.visitSwitchStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SwitchStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SwitchStatementContext = SwitchStatementContext;
var CaseBlockContext = /** @class */ (function (_super) {
    __extends(CaseBlockContext, _super);
    function CaseBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseBlockContext.prototype.OpenBrace = function () { return this.getToken(ECMAScriptParser.OpenBrace, 0); };
    CaseBlockContext.prototype.CloseBrace = function () { return this.getToken(ECMAScriptParser.CloseBrace, 0); };
    CaseBlockContext.prototype.caseClauses = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CaseClausesContext);
        }
        else {
            return this.getRuleContext(i, CaseClausesContext);
        }
    };
    CaseBlockContext.prototype.defaultClause = function () {
        return this.tryGetRuleContext(0, DefaultClauseContext);
    };
    Object.defineProperty(CaseBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_caseBlock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseBlockContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseBlock) {
            listener.enterCaseBlock(this);
        }
    };
    // @Override
    CaseBlockContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseBlock) {
            listener.exitCaseBlock(this);
        }
    };
    // @Override
    CaseBlockContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseBlock) {
            return visitor.visitCaseBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseBlockContext = CaseBlockContext;
var CaseClausesContext = /** @class */ (function (_super) {
    __extends(CaseClausesContext, _super);
    function CaseClausesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseClausesContext.prototype.caseClause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CaseClauseContext);
        }
        else {
            return this.getRuleContext(i, CaseClauseContext);
        }
    };
    Object.defineProperty(CaseClausesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_caseClauses; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseClausesContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseClauses) {
            listener.enterCaseClauses(this);
        }
    };
    // @Override
    CaseClausesContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseClauses) {
            listener.exitCaseClauses(this);
        }
    };
    // @Override
    CaseClausesContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseClauses) {
            return visitor.visitCaseClauses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseClausesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseClausesContext = CaseClausesContext;
var CaseClauseContext = /** @class */ (function (_super) {
    __extends(CaseClauseContext, _super);
    function CaseClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseClauseContext.prototype.Case = function () { return this.getToken(ECMAScriptParser.Case, 0); };
    CaseClauseContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    CaseClauseContext.prototype.Colon = function () { return this.getToken(ECMAScriptParser.Colon, 0); };
    CaseClauseContext.prototype.statementList = function () {
        return this.tryGetRuleContext(0, StatementListContext);
    };
    Object.defineProperty(CaseClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_caseClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseClause) {
            listener.enterCaseClause(this);
        }
    };
    // @Override
    CaseClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseClause) {
            listener.exitCaseClause(this);
        }
    };
    // @Override
    CaseClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseClause) {
            return visitor.visitCaseClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseClauseContext = CaseClauseContext;
var DefaultClauseContext = /** @class */ (function (_super) {
    __extends(DefaultClauseContext, _super);
    function DefaultClauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultClauseContext.prototype.Default = function () { return this.getToken(ECMAScriptParser.Default, 0); };
    DefaultClauseContext.prototype.Colon = function () { return this.getToken(ECMAScriptParser.Colon, 0); };
    DefaultClauseContext.prototype.statementList = function () {
        return this.tryGetRuleContext(0, StatementListContext);
    };
    Object.defineProperty(DefaultClauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_defaultClause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefaultClauseContext.prototype.enterRule = function (listener) {
        if (listener.enterDefaultClause) {
            listener.enterDefaultClause(this);
        }
    };
    // @Override
    DefaultClauseContext.prototype.exitRule = function (listener) {
        if (listener.exitDefaultClause) {
            listener.exitDefaultClause(this);
        }
    };
    // @Override
    DefaultClauseContext.prototype.accept = function (visitor) {
        if (visitor.visitDefaultClause) {
            return visitor.visitDefaultClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefaultClauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefaultClauseContext = DefaultClauseContext;
var LabelledStatementContext = /** @class */ (function (_super) {
    __extends(LabelledStatementContext, _super);
    function LabelledStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelledStatementContext.prototype.Identifier = function () { return this.getToken(ECMAScriptParser.Identifier, 0); };
    LabelledStatementContext.prototype.Colon = function () { return this.getToken(ECMAScriptParser.Colon, 0); };
    LabelledStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(LabelledStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_labelledStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LabelledStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterLabelledStatement) {
            listener.enterLabelledStatement(this);
        }
    };
    // @Override
    LabelledStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitLabelledStatement) {
            listener.exitLabelledStatement(this);
        }
    };
    // @Override
    LabelledStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitLabelledStatement) {
            return visitor.visitLabelledStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LabelledStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LabelledStatementContext = LabelledStatementContext;
var ThrowStatementContext = /** @class */ (function (_super) {
    __extends(ThrowStatementContext, _super);
    function ThrowStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ThrowStatementContext.prototype.Throw = function () { return this.getToken(ECMAScriptParser.Throw, 0); };
    ThrowStatementContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    ThrowStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    Object.defineProperty(ThrowStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_throwStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ThrowStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterThrowStatement) {
            listener.enterThrowStatement(this);
        }
    };
    // @Override
    ThrowStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitThrowStatement) {
            listener.exitThrowStatement(this);
        }
    };
    // @Override
    ThrowStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitThrowStatement) {
            return visitor.visitThrowStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThrowStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ThrowStatementContext = ThrowStatementContext;
var TryStatementContext = /** @class */ (function (_super) {
    __extends(TryStatementContext, _super);
    function TryStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TryStatementContext.prototype.Try = function () { return this.getToken(ECMAScriptParser.Try, 0); };
    TryStatementContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    TryStatementContext.prototype.catchProduction = function () {
        return this.tryGetRuleContext(0, CatchProductionContext);
    };
    TryStatementContext.prototype.finallyProduction = function () {
        return this.tryGetRuleContext(0, FinallyProductionContext);
    };
    Object.defineProperty(TryStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_tryStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TryStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterTryStatement) {
            listener.enterTryStatement(this);
        }
    };
    // @Override
    TryStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitTryStatement) {
            listener.exitTryStatement(this);
        }
    };
    // @Override
    TryStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitTryStatement) {
            return visitor.visitTryStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TryStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TryStatementContext = TryStatementContext;
var CatchProductionContext = /** @class */ (function (_super) {
    __extends(CatchProductionContext, _super);
    function CatchProductionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CatchProductionContext.prototype.Catch = function () { return this.getToken(ECMAScriptParser.Catch, 0); };
    CatchProductionContext.prototype.OpenParen = function () { return this.getToken(ECMAScriptParser.OpenParen, 0); };
    CatchProductionContext.prototype.Identifier = function () { return this.getToken(ECMAScriptParser.Identifier, 0); };
    CatchProductionContext.prototype.CloseParen = function () { return this.getToken(ECMAScriptParser.CloseParen, 0); };
    CatchProductionContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(CatchProductionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_catchProduction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CatchProductionContext.prototype.enterRule = function (listener) {
        if (listener.enterCatchProduction) {
            listener.enterCatchProduction(this);
        }
    };
    // @Override
    CatchProductionContext.prototype.exitRule = function (listener) {
        if (listener.exitCatchProduction) {
            listener.exitCatchProduction(this);
        }
    };
    // @Override
    CatchProductionContext.prototype.accept = function (visitor) {
        if (visitor.visitCatchProduction) {
            return visitor.visitCatchProduction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CatchProductionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CatchProductionContext = CatchProductionContext;
var FinallyProductionContext = /** @class */ (function (_super) {
    __extends(FinallyProductionContext, _super);
    function FinallyProductionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FinallyProductionContext.prototype.Finally = function () { return this.getToken(ECMAScriptParser.Finally, 0); };
    FinallyProductionContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    Object.defineProperty(FinallyProductionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_finallyProduction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FinallyProductionContext.prototype.enterRule = function (listener) {
        if (listener.enterFinallyProduction) {
            listener.enterFinallyProduction(this);
        }
    };
    // @Override
    FinallyProductionContext.prototype.exitRule = function (listener) {
        if (listener.exitFinallyProduction) {
            listener.exitFinallyProduction(this);
        }
    };
    // @Override
    FinallyProductionContext.prototype.accept = function (visitor) {
        if (visitor.visitFinallyProduction) {
            return visitor.visitFinallyProduction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FinallyProductionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FinallyProductionContext = FinallyProductionContext;
var DebuggerStatementContext = /** @class */ (function (_super) {
    __extends(DebuggerStatementContext, _super);
    function DebuggerStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DebuggerStatementContext.prototype.Debugger = function () { return this.getToken(ECMAScriptParser.Debugger, 0); };
    DebuggerStatementContext.prototype.eos = function () {
        return this.getRuleContext(0, EosContext);
    };
    Object.defineProperty(DebuggerStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_debuggerStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DebuggerStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterDebuggerStatement) {
            listener.enterDebuggerStatement(this);
        }
    };
    // @Override
    DebuggerStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitDebuggerStatement) {
            listener.exitDebuggerStatement(this);
        }
    };
    // @Override
    DebuggerStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitDebuggerStatement) {
            return visitor.visitDebuggerStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DebuggerStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DebuggerStatementContext = DebuggerStatementContext;
var FunctionDeclarationContext = /** @class */ (function (_super) {
    __extends(FunctionDeclarationContext, _super);
    function FunctionDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionDeclarationContext.prototype.Function = function () { return this.getToken(ECMAScriptParser.Function, 0); };
    FunctionDeclarationContext.prototype.Identifier = function () { return this.getToken(ECMAScriptParser.Identifier, 0); };
    FunctionDeclarationContext.prototype.OpenParen = function () { return this.getToken(ECMAScriptParser.OpenParen, 0); };
    FunctionDeclarationContext.prototype.CloseParen = function () { return this.getToken(ECMAScriptParser.CloseParen, 0); };
    FunctionDeclarationContext.prototype.OpenBrace = function () { return this.getToken(ECMAScriptParser.OpenBrace, 0); };
    FunctionDeclarationContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    FunctionDeclarationContext.prototype.CloseBrace = function () { return this.getToken(ECMAScriptParser.CloseBrace, 0); };
    FunctionDeclarationContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(FunctionDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_functionDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionDeclaration) {
            listener.enterFunctionDeclaration(this);
        }
    };
    // @Override
    FunctionDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionDeclaration) {
            listener.exitFunctionDeclaration(this);
        }
    };
    // @Override
    FunctionDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionDeclaration) {
            return visitor.visitFunctionDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionDeclarationContext = FunctionDeclarationContext;
var FormalParameterListContext = /** @class */ (function (_super) {
    __extends(FormalParameterListContext, _super);
    function FormalParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParameterListContext.prototype.Identifier = function (i) {
        if (i === undefined) {
            return this.getTokens(ECMAScriptParser.Identifier);
        }
        else {
            return this.getToken(ECMAScriptParser.Identifier, i);
        }
    };
    FormalParameterListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(ECMAScriptParser.Comma);
        }
        else {
            return this.getToken(ECMAScriptParser.Comma, i);
        }
    };
    Object.defineProperty(FormalParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_formalParameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParameterList) {
            listener.enterFormalParameterList(this);
        }
    };
    // @Override
    FormalParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParameterList) {
            listener.exitFormalParameterList(this);
        }
    };
    // @Override
    FormalParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParameterList) {
            return visitor.visitFormalParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParameterListContext = FormalParameterListContext;
var FunctionBodyContext = /** @class */ (function (_super) {
    __extends(FunctionBodyContext, _super);
    function FunctionBodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionBodyContext.prototype.sourceElements = function () {
        return this.tryGetRuleContext(0, SourceElementsContext);
    };
    Object.defineProperty(FunctionBodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_functionBody; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionBodyContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionBody) {
            listener.enterFunctionBody(this);
        }
    };
    // @Override
    FunctionBodyContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionBody) {
            listener.exitFunctionBody(this);
        }
    };
    // @Override
    FunctionBodyContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionBody) {
            return visitor.visitFunctionBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionBodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionBodyContext = FunctionBodyContext;
var ArrayLiteralContext = /** @class */ (function (_super) {
    __extends(ArrayLiteralContext, _super);
    function ArrayLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayLiteralContext.prototype.OpenBracket = function () { return this.getToken(ECMAScriptParser.OpenBracket, 0); };
    ArrayLiteralContext.prototype.CloseBracket = function () { return this.getToken(ECMAScriptParser.CloseBracket, 0); };
    ArrayLiteralContext.prototype.elementList = function () {
        return this.tryGetRuleContext(0, ElementListContext);
    };
    ArrayLiteralContext.prototype.Comma = function () { return this.tryGetToken(ECMAScriptParser.Comma, 0); };
    ArrayLiteralContext.prototype.elision = function () {
        return this.tryGetRuleContext(0, ElisionContext);
    };
    Object.defineProperty(ArrayLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_arrayLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayLiteral) {
            listener.enterArrayLiteral(this);
        }
    };
    // @Override
    ArrayLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayLiteral) {
            listener.exitArrayLiteral(this);
        }
    };
    // @Override
    ArrayLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayLiteral) {
            return visitor.visitArrayLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayLiteralContext = ArrayLiteralContext;
var ElementListContext = /** @class */ (function (_super) {
    __extends(ElementListContext, _super);
    function ElementListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementListContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    ElementListContext.prototype.elision = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElisionContext);
        }
        else {
            return this.getRuleContext(i, ElisionContext);
        }
    };
    ElementListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(ECMAScriptParser.Comma);
        }
        else {
            return this.getToken(ECMAScriptParser.Comma, i);
        }
    };
    Object.defineProperty(ElementListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_elementList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementListContext.prototype.enterRule = function (listener) {
        if (listener.enterElementList) {
            listener.enterElementList(this);
        }
    };
    // @Override
    ElementListContext.prototype.exitRule = function (listener) {
        if (listener.exitElementList) {
            listener.exitElementList(this);
        }
    };
    // @Override
    ElementListContext.prototype.accept = function (visitor) {
        if (visitor.visitElementList) {
            return visitor.visitElementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementListContext = ElementListContext;
var ElisionContext = /** @class */ (function (_super) {
    __extends(ElisionContext, _super);
    function ElisionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElisionContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(ECMAScriptParser.Comma);
        }
        else {
            return this.getToken(ECMAScriptParser.Comma, i);
        }
    };
    Object.defineProperty(ElisionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_elision; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElisionContext.prototype.enterRule = function (listener) {
        if (listener.enterElision) {
            listener.enterElision(this);
        }
    };
    // @Override
    ElisionContext.prototype.exitRule = function (listener) {
        if (listener.exitElision) {
            listener.exitElision(this);
        }
    };
    // @Override
    ElisionContext.prototype.accept = function (visitor) {
        if (visitor.visitElision) {
            return visitor.visitElision(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElisionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElisionContext = ElisionContext;
var ObjectLiteralContext = /** @class */ (function (_super) {
    __extends(ObjectLiteralContext, _super);
    function ObjectLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectLiteralContext.prototype.OpenBrace = function () { return this.getToken(ECMAScriptParser.OpenBrace, 0); };
    ObjectLiteralContext.prototype.CloseBrace = function () { return this.getToken(ECMAScriptParser.CloseBrace, 0); };
    ObjectLiteralContext.prototype.propertyNameAndValueList = function () {
        return this.tryGetRuleContext(0, PropertyNameAndValueListContext);
    };
    ObjectLiteralContext.prototype.Comma = function () { return this.tryGetToken(ECMAScriptParser.Comma, 0); };
    Object.defineProperty(ObjectLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_objectLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectLiteral) {
            listener.enterObjectLiteral(this);
        }
    };
    // @Override
    ObjectLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectLiteral) {
            listener.exitObjectLiteral(this);
        }
    };
    // @Override
    ObjectLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectLiteral) {
            return visitor.visitObjectLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectLiteralContext = ObjectLiteralContext;
var PropertyNameAndValueListContext = /** @class */ (function (_super) {
    __extends(PropertyNameAndValueListContext, _super);
    function PropertyNameAndValueListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyNameAndValueListContext.prototype.propertyAssignment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PropertyAssignmentContext);
        }
        else {
            return this.getRuleContext(i, PropertyAssignmentContext);
        }
    };
    PropertyNameAndValueListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(ECMAScriptParser.Comma);
        }
        else {
            return this.getToken(ECMAScriptParser.Comma, i);
        }
    };
    Object.defineProperty(PropertyNameAndValueListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_propertyNameAndValueList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyNameAndValueListContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyNameAndValueList) {
            listener.enterPropertyNameAndValueList(this);
        }
    };
    // @Override
    PropertyNameAndValueListContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyNameAndValueList) {
            listener.exitPropertyNameAndValueList(this);
        }
    };
    // @Override
    PropertyNameAndValueListContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyNameAndValueList) {
            return visitor.visitPropertyNameAndValueList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyNameAndValueListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyNameAndValueListContext = PropertyNameAndValueListContext;
var PropertyAssignmentContext = /** @class */ (function (_super) {
    __extends(PropertyAssignmentContext, _super);
    function PropertyAssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(PropertyAssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_propertyAssignment; },
        enumerable: true,
        configurable: true
    });
    PropertyAssignmentContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return PropertyAssignmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyAssignmentContext = PropertyAssignmentContext;
var PropertyExpressionAssignmentContext = /** @class */ (function (_super) {
    __extends(PropertyExpressionAssignmentContext, _super);
    function PropertyExpressionAssignmentContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PropertyExpressionAssignmentContext.prototype.propertyName = function () {
        return this.getRuleContext(0, PropertyNameContext);
    };
    PropertyExpressionAssignmentContext.prototype.Colon = function () { return this.getToken(ECMAScriptParser.Colon, 0); };
    PropertyExpressionAssignmentContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    PropertyExpressionAssignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyExpressionAssignment) {
            listener.enterPropertyExpressionAssignment(this);
        }
    };
    // @Override
    PropertyExpressionAssignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyExpressionAssignment) {
            listener.exitPropertyExpressionAssignment(this);
        }
    };
    // @Override
    PropertyExpressionAssignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyExpressionAssignment) {
            return visitor.visitPropertyExpressionAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyExpressionAssignmentContext;
}(PropertyAssignmentContext));
exports.PropertyExpressionAssignmentContext = PropertyExpressionAssignmentContext;
var PropertyGetterContext = /** @class */ (function (_super) {
    __extends(PropertyGetterContext, _super);
    function PropertyGetterContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PropertyGetterContext.prototype.getter = function () {
        return this.getRuleContext(0, GetterContext);
    };
    PropertyGetterContext.prototype.OpenParen = function () { return this.getToken(ECMAScriptParser.OpenParen, 0); };
    PropertyGetterContext.prototype.CloseParen = function () { return this.getToken(ECMAScriptParser.CloseParen, 0); };
    PropertyGetterContext.prototype.OpenBrace = function () { return this.getToken(ECMAScriptParser.OpenBrace, 0); };
    PropertyGetterContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    PropertyGetterContext.prototype.CloseBrace = function () { return this.getToken(ECMAScriptParser.CloseBrace, 0); };
    // @Override
    PropertyGetterContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyGetter) {
            listener.enterPropertyGetter(this);
        }
    };
    // @Override
    PropertyGetterContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyGetter) {
            listener.exitPropertyGetter(this);
        }
    };
    // @Override
    PropertyGetterContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyGetter) {
            return visitor.visitPropertyGetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyGetterContext;
}(PropertyAssignmentContext));
exports.PropertyGetterContext = PropertyGetterContext;
var PropertySetterContext = /** @class */ (function (_super) {
    __extends(PropertySetterContext, _super);
    function PropertySetterContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PropertySetterContext.prototype.setter = function () {
        return this.getRuleContext(0, SetterContext);
    };
    PropertySetterContext.prototype.OpenParen = function () { return this.getToken(ECMAScriptParser.OpenParen, 0); };
    PropertySetterContext.prototype.propertySetParameterList = function () {
        return this.getRuleContext(0, PropertySetParameterListContext);
    };
    PropertySetterContext.prototype.CloseParen = function () { return this.getToken(ECMAScriptParser.CloseParen, 0); };
    PropertySetterContext.prototype.OpenBrace = function () { return this.getToken(ECMAScriptParser.OpenBrace, 0); };
    PropertySetterContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    PropertySetterContext.prototype.CloseBrace = function () { return this.getToken(ECMAScriptParser.CloseBrace, 0); };
    // @Override
    PropertySetterContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertySetter) {
            listener.enterPropertySetter(this);
        }
    };
    // @Override
    PropertySetterContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertySetter) {
            listener.exitPropertySetter(this);
        }
    };
    // @Override
    PropertySetterContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertySetter) {
            return visitor.visitPropertySetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertySetterContext;
}(PropertyAssignmentContext));
exports.PropertySetterContext = PropertySetterContext;
var PropertyNameContext = /** @class */ (function (_super) {
    __extends(PropertyNameContext, _super);
    function PropertyNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyNameContext.prototype.identifierName = function () {
        return this.tryGetRuleContext(0, IdentifierNameContext);
    };
    PropertyNameContext.prototype.StringLiteral = function () { return this.tryGetToken(ECMAScriptParser.StringLiteral, 0); };
    PropertyNameContext.prototype.numericLiteral = function () {
        return this.tryGetRuleContext(0, NumericLiteralContext);
    };
    Object.defineProperty(PropertyNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_propertyName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyNameContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyName) {
            listener.enterPropertyName(this);
        }
    };
    // @Override
    PropertyNameContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyName) {
            listener.exitPropertyName(this);
        }
    };
    // @Override
    PropertyNameContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyName) {
            return visitor.visitPropertyName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyNameContext = PropertyNameContext;
var PropertySetParameterListContext = /** @class */ (function (_super) {
    __extends(PropertySetParameterListContext, _super);
    function PropertySetParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertySetParameterListContext.prototype.Identifier = function () { return this.getToken(ECMAScriptParser.Identifier, 0); };
    Object.defineProperty(PropertySetParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_propertySetParameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertySetParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertySetParameterList) {
            listener.enterPropertySetParameterList(this);
        }
    };
    // @Override
    PropertySetParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertySetParameterList) {
            listener.exitPropertySetParameterList(this);
        }
    };
    // @Override
    PropertySetParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertySetParameterList) {
            return visitor.visitPropertySetParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertySetParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertySetParameterListContext = PropertySetParameterListContext;
var ArgumentsContext = /** @class */ (function (_super) {
    __extends(ArgumentsContext, _super);
    function ArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentsContext.prototype.OpenParen = function () { return this.getToken(ECMAScriptParser.OpenParen, 0); };
    ArgumentsContext.prototype.CloseParen = function () { return this.getToken(ECMAScriptParser.CloseParen, 0); };
    ArgumentsContext.prototype.argumentList = function () {
        return this.tryGetRuleContext(0, ArgumentListContext);
    };
    Object.defineProperty(ArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_arguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterArguments) {
            listener.enterArguments(this);
        }
    };
    // @Override
    ArgumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitArguments) {
            listener.exitArguments(this);
        }
    };
    // @Override
    ArgumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentsContext = ArgumentsContext;
var ArgumentListContext = /** @class */ (function (_super) {
    __extends(ArgumentListContext, _super);
    function ArgumentListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentListContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    ArgumentListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(ECMAScriptParser.Comma);
        }
        else {
            return this.getToken(ECMAScriptParser.Comma, i);
        }
    };
    Object.defineProperty(ArgumentListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_argumentList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentListContext.prototype.enterRule = function (listener) {
        if (listener.enterArgumentList) {
            listener.enterArgumentList(this);
        }
    };
    // @Override
    ArgumentListContext.prototype.exitRule = function (listener) {
        if (listener.exitArgumentList) {
            listener.exitArgumentList(this);
        }
    };
    // @Override
    ArgumentListContext.prototype.accept = function (visitor) {
        if (visitor.visitArgumentList) {
            return visitor.visitArgumentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentListContext = ArgumentListContext;
var ExpressionSequenceContext = /** @class */ (function (_super) {
    __extends(ExpressionSequenceContext, _super);
    function ExpressionSequenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionSequenceContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    ExpressionSequenceContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(ECMAScriptParser.Comma);
        }
        else {
            return this.getToken(ECMAScriptParser.Comma, i);
        }
    };
    Object.defineProperty(ExpressionSequenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_expressionSequence; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionSequenceContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressionSequence) {
            listener.enterExpressionSequence(this);
        }
    };
    // @Override
    ExpressionSequenceContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressionSequence) {
            listener.exitExpressionSequence(this);
        }
    };
    // @Override
    ExpressionSequenceContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressionSequence) {
            return visitor.visitExpressionSequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionSequenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionSequenceContext = ExpressionSequenceContext;
var SingleExpressionContext = /** @class */ (function (_super) {
    __extends(SingleExpressionContext, _super);
    function SingleExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(SingleExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_singleExpression; },
        enumerable: true,
        configurable: true
    });
    SingleExpressionContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return SingleExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SingleExpressionContext = SingleExpressionContext;
var FunctionExpressionContext = /** @class */ (function (_super) {
    __extends(FunctionExpressionContext, _super);
    function FunctionExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    FunctionExpressionContext.prototype.Function = function () { return this.getToken(ECMAScriptParser.Function, 0); };
    FunctionExpressionContext.prototype.OpenParen = function () { return this.getToken(ECMAScriptParser.OpenParen, 0); };
    FunctionExpressionContext.prototype.CloseParen = function () { return this.getToken(ECMAScriptParser.CloseParen, 0); };
    FunctionExpressionContext.prototype.OpenBrace = function () { return this.getToken(ECMAScriptParser.OpenBrace, 0); };
    FunctionExpressionContext.prototype.functionBody = function () {
        return this.getRuleContext(0, FunctionBodyContext);
    };
    FunctionExpressionContext.prototype.CloseBrace = function () { return this.getToken(ECMAScriptParser.CloseBrace, 0); };
    FunctionExpressionContext.prototype.Identifier = function () { return this.tryGetToken(ECMAScriptParser.Identifier, 0); };
    FunctionExpressionContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    // @Override
    FunctionExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionExpression) {
            listener.enterFunctionExpression(this);
        }
    };
    // @Override
    FunctionExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionExpression) {
            listener.exitFunctionExpression(this);
        }
    };
    // @Override
    FunctionExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionExpression) {
            return visitor.visitFunctionExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionExpressionContext;
}(SingleExpressionContext));
exports.FunctionExpressionContext = FunctionExpressionContext;
var MemberIndexExpressionContext = /** @class */ (function (_super) {
    __extends(MemberIndexExpressionContext, _super);
    function MemberIndexExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MemberIndexExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    MemberIndexExpressionContext.prototype.OpenBracket = function () { return this.getToken(ECMAScriptParser.OpenBracket, 0); };
    MemberIndexExpressionContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    MemberIndexExpressionContext.prototype.CloseBracket = function () { return this.getToken(ECMAScriptParser.CloseBracket, 0); };
    // @Override
    MemberIndexExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMemberIndexExpression) {
            listener.enterMemberIndexExpression(this);
        }
    };
    // @Override
    MemberIndexExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMemberIndexExpression) {
            listener.exitMemberIndexExpression(this);
        }
    };
    // @Override
    MemberIndexExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMemberIndexExpression) {
            return visitor.visitMemberIndexExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MemberIndexExpressionContext;
}(SingleExpressionContext));
exports.MemberIndexExpressionContext = MemberIndexExpressionContext;
var MemberDotExpressionContext = /** @class */ (function (_super) {
    __extends(MemberDotExpressionContext, _super);
    function MemberDotExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MemberDotExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    MemberDotExpressionContext.prototype.Dot = function () { return this.getToken(ECMAScriptParser.Dot, 0); };
    MemberDotExpressionContext.prototype.identifierName = function () {
        return this.getRuleContext(0, IdentifierNameContext);
    };
    // @Override
    MemberDotExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMemberDotExpression) {
            listener.enterMemberDotExpression(this);
        }
    };
    // @Override
    MemberDotExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMemberDotExpression) {
            listener.exitMemberDotExpression(this);
        }
    };
    // @Override
    MemberDotExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMemberDotExpression) {
            return visitor.visitMemberDotExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MemberDotExpressionContext;
}(SingleExpressionContext));
exports.MemberDotExpressionContext = MemberDotExpressionContext;
var ArgumentsExpressionContext = /** @class */ (function (_super) {
    __extends(ArgumentsExpressionContext, _super);
    function ArgumentsExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ArgumentsExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    ArgumentsExpressionContext.prototype.arguments = function () {
        return this.getRuleContext(0, ArgumentsContext);
    };
    // @Override
    ArgumentsExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterArgumentsExpression) {
            listener.enterArgumentsExpression(this);
        }
    };
    // @Override
    ArgumentsExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitArgumentsExpression) {
            listener.exitArgumentsExpression(this);
        }
    };
    // @Override
    ArgumentsExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitArgumentsExpression) {
            return visitor.visitArgumentsExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentsExpressionContext;
}(SingleExpressionContext));
exports.ArgumentsExpressionContext = ArgumentsExpressionContext;
var NewExpressionContext = /** @class */ (function (_super) {
    __extends(NewExpressionContext, _super);
    function NewExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NewExpressionContext.prototype.New = function () { return this.getToken(ECMAScriptParser.New, 0); };
    NewExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    NewExpressionContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    // @Override
    NewExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterNewExpression) {
            listener.enterNewExpression(this);
        }
    };
    // @Override
    NewExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitNewExpression) {
            listener.exitNewExpression(this);
        }
    };
    // @Override
    NewExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitNewExpression) {
            return visitor.visitNewExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NewExpressionContext;
}(SingleExpressionContext));
exports.NewExpressionContext = NewExpressionContext;
var PostIncrementExpressionContext = /** @class */ (function (_super) {
    __extends(PostIncrementExpressionContext, _super);
    function PostIncrementExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PostIncrementExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    PostIncrementExpressionContext.prototype.PlusPlus = function () { return this.getToken(ECMAScriptParser.PlusPlus, 0); };
    // @Override
    PostIncrementExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPostIncrementExpression) {
            listener.enterPostIncrementExpression(this);
        }
    };
    // @Override
    PostIncrementExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPostIncrementExpression) {
            listener.exitPostIncrementExpression(this);
        }
    };
    // @Override
    PostIncrementExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPostIncrementExpression) {
            return visitor.visitPostIncrementExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PostIncrementExpressionContext;
}(SingleExpressionContext));
exports.PostIncrementExpressionContext = PostIncrementExpressionContext;
var PostDecreaseExpressionContext = /** @class */ (function (_super) {
    __extends(PostDecreaseExpressionContext, _super);
    function PostDecreaseExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PostDecreaseExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    PostDecreaseExpressionContext.prototype.MinusMinus = function () { return this.getToken(ECMAScriptParser.MinusMinus, 0); };
    // @Override
    PostDecreaseExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPostDecreaseExpression) {
            listener.enterPostDecreaseExpression(this);
        }
    };
    // @Override
    PostDecreaseExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPostDecreaseExpression) {
            listener.exitPostDecreaseExpression(this);
        }
    };
    // @Override
    PostDecreaseExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPostDecreaseExpression) {
            return visitor.visitPostDecreaseExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PostDecreaseExpressionContext;
}(SingleExpressionContext));
exports.PostDecreaseExpressionContext = PostDecreaseExpressionContext;
var DeleteExpressionContext = /** @class */ (function (_super) {
    __extends(DeleteExpressionContext, _super);
    function DeleteExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    DeleteExpressionContext.prototype.Delete = function () { return this.getToken(ECMAScriptParser.Delete, 0); };
    DeleteExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    DeleteExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterDeleteExpression) {
            listener.enterDeleteExpression(this);
        }
    };
    // @Override
    DeleteExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitDeleteExpression) {
            listener.exitDeleteExpression(this);
        }
    };
    // @Override
    DeleteExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitDeleteExpression) {
            return visitor.visitDeleteExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeleteExpressionContext;
}(SingleExpressionContext));
exports.DeleteExpressionContext = DeleteExpressionContext;
var VoidExpressionContext = /** @class */ (function (_super) {
    __extends(VoidExpressionContext, _super);
    function VoidExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    VoidExpressionContext.prototype.Void = function () { return this.getToken(ECMAScriptParser.Void, 0); };
    VoidExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    VoidExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterVoidExpression) {
            listener.enterVoidExpression(this);
        }
    };
    // @Override
    VoidExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitVoidExpression) {
            listener.exitVoidExpression(this);
        }
    };
    // @Override
    VoidExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitVoidExpression) {
            return visitor.visitVoidExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VoidExpressionContext;
}(SingleExpressionContext));
exports.VoidExpressionContext = VoidExpressionContext;
var TypeofExpressionContext = /** @class */ (function (_super) {
    __extends(TypeofExpressionContext, _super);
    function TypeofExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    TypeofExpressionContext.prototype.Typeof = function () { return this.getToken(ECMAScriptParser.Typeof, 0); };
    TypeofExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    TypeofExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeofExpression) {
            listener.enterTypeofExpression(this);
        }
    };
    // @Override
    TypeofExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeofExpression) {
            listener.exitTypeofExpression(this);
        }
    };
    // @Override
    TypeofExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeofExpression) {
            return visitor.visitTypeofExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeofExpressionContext;
}(SingleExpressionContext));
exports.TypeofExpressionContext = TypeofExpressionContext;
var PreIncrementExpressionContext = /** @class */ (function (_super) {
    __extends(PreIncrementExpressionContext, _super);
    function PreIncrementExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreIncrementExpressionContext.prototype.PlusPlus = function () { return this.getToken(ECMAScriptParser.PlusPlus, 0); };
    PreIncrementExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    PreIncrementExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPreIncrementExpression) {
            listener.enterPreIncrementExpression(this);
        }
    };
    // @Override
    PreIncrementExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPreIncrementExpression) {
            listener.exitPreIncrementExpression(this);
        }
    };
    // @Override
    PreIncrementExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPreIncrementExpression) {
            return visitor.visitPreIncrementExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreIncrementExpressionContext;
}(SingleExpressionContext));
exports.PreIncrementExpressionContext = PreIncrementExpressionContext;
var PreDecreaseExpressionContext = /** @class */ (function (_super) {
    __extends(PreDecreaseExpressionContext, _super);
    function PreDecreaseExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    PreDecreaseExpressionContext.prototype.MinusMinus = function () { return this.getToken(ECMAScriptParser.MinusMinus, 0); };
    PreDecreaseExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    PreDecreaseExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPreDecreaseExpression) {
            listener.enterPreDecreaseExpression(this);
        }
    };
    // @Override
    PreDecreaseExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPreDecreaseExpression) {
            listener.exitPreDecreaseExpression(this);
        }
    };
    // @Override
    PreDecreaseExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPreDecreaseExpression) {
            return visitor.visitPreDecreaseExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PreDecreaseExpressionContext;
}(SingleExpressionContext));
exports.PreDecreaseExpressionContext = PreDecreaseExpressionContext;
var UnaryPlusExpressionContext = /** @class */ (function (_super) {
    __extends(UnaryPlusExpressionContext, _super);
    function UnaryPlusExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnaryPlusExpressionContext.prototype.Plus = function () { return this.getToken(ECMAScriptParser.Plus, 0); };
    UnaryPlusExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    UnaryPlusExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryPlusExpression) {
            listener.enterUnaryPlusExpression(this);
        }
    };
    // @Override
    UnaryPlusExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryPlusExpression) {
            listener.exitUnaryPlusExpression(this);
        }
    };
    // @Override
    UnaryPlusExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryPlusExpression) {
            return visitor.visitUnaryPlusExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryPlusExpressionContext;
}(SingleExpressionContext));
exports.UnaryPlusExpressionContext = UnaryPlusExpressionContext;
var UnaryMinusExpressionContext = /** @class */ (function (_super) {
    __extends(UnaryMinusExpressionContext, _super);
    function UnaryMinusExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnaryMinusExpressionContext.prototype.Minus = function () { return this.getToken(ECMAScriptParser.Minus, 0); };
    UnaryMinusExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    UnaryMinusExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryMinusExpression) {
            listener.enterUnaryMinusExpression(this);
        }
    };
    // @Override
    UnaryMinusExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryMinusExpression) {
            listener.exitUnaryMinusExpression(this);
        }
    };
    // @Override
    UnaryMinusExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryMinusExpression) {
            return visitor.visitUnaryMinusExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryMinusExpressionContext;
}(SingleExpressionContext));
exports.UnaryMinusExpressionContext = UnaryMinusExpressionContext;
var BitNotExpressionContext = /** @class */ (function (_super) {
    __extends(BitNotExpressionContext, _super);
    function BitNotExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BitNotExpressionContext.prototype.BitNot = function () { return this.getToken(ECMAScriptParser.BitNot, 0); };
    BitNotExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    BitNotExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitNotExpression) {
            listener.enterBitNotExpression(this);
        }
    };
    // @Override
    BitNotExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitNotExpression) {
            listener.exitBitNotExpression(this);
        }
    };
    // @Override
    BitNotExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitNotExpression) {
            return visitor.visitBitNotExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitNotExpressionContext;
}(SingleExpressionContext));
exports.BitNotExpressionContext = BitNotExpressionContext;
var NotExpressionContext = /** @class */ (function (_super) {
    __extends(NotExpressionContext, _super);
    function NotExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NotExpressionContext.prototype.Not = function () { return this.getToken(ECMAScriptParser.Not, 0); };
    NotExpressionContext.prototype.singleExpression = function () {
        return this.getRuleContext(0, SingleExpressionContext);
    };
    // @Override
    NotExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterNotExpression) {
            listener.enterNotExpression(this);
        }
    };
    // @Override
    NotExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitNotExpression) {
            listener.exitNotExpression(this);
        }
    };
    // @Override
    NotExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitNotExpression) {
            return visitor.visitNotExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NotExpressionContext;
}(SingleExpressionContext));
exports.NotExpressionContext = NotExpressionContext;
var MultiplicativeExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplicativeExpressionContext, _super);
    function MultiplicativeExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MultiplicativeExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    MultiplicativeExpressionContext.prototype.Multiply = function () { return this.tryGetToken(ECMAScriptParser.Multiply, 0); };
    MultiplicativeExpressionContext.prototype.Divide = function () { return this.tryGetToken(ECMAScriptParser.Divide, 0); };
    MultiplicativeExpressionContext.prototype.Modulus = function () { return this.tryGetToken(ECMAScriptParser.Modulus, 0); };
    // @Override
    MultiplicativeExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplicativeExpression) {
            listener.enterMultiplicativeExpression(this);
        }
    };
    // @Override
    MultiplicativeExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplicativeExpression) {
            listener.exitMultiplicativeExpression(this);
        }
    };
    // @Override
    MultiplicativeExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplicativeExpression) {
            return visitor.visitMultiplicativeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplicativeExpressionContext;
}(SingleExpressionContext));
exports.MultiplicativeExpressionContext = MultiplicativeExpressionContext;
var AdditiveExpressionContext = /** @class */ (function (_super) {
    __extends(AdditiveExpressionContext, _super);
    function AdditiveExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AdditiveExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    AdditiveExpressionContext.prototype.Plus = function () { return this.tryGetToken(ECMAScriptParser.Plus, 0); };
    AdditiveExpressionContext.prototype.Minus = function () { return this.tryGetToken(ECMAScriptParser.Minus, 0); };
    // @Override
    AdditiveExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAdditiveExpression) {
            listener.enterAdditiveExpression(this);
        }
    };
    // @Override
    AdditiveExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAdditiveExpression) {
            listener.exitAdditiveExpression(this);
        }
    };
    // @Override
    AdditiveExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAdditiveExpression) {
            return visitor.visitAdditiveExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdditiveExpressionContext;
}(SingleExpressionContext));
exports.AdditiveExpressionContext = AdditiveExpressionContext;
var BitShiftExpressionContext = /** @class */ (function (_super) {
    __extends(BitShiftExpressionContext, _super);
    function BitShiftExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BitShiftExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    BitShiftExpressionContext.prototype.LeftShiftArithmetic = function () { return this.tryGetToken(ECMAScriptParser.LeftShiftArithmetic, 0); };
    BitShiftExpressionContext.prototype.RightShiftArithmetic = function () { return this.tryGetToken(ECMAScriptParser.RightShiftArithmetic, 0); };
    BitShiftExpressionContext.prototype.RightShiftLogical = function () { return this.tryGetToken(ECMAScriptParser.RightShiftLogical, 0); };
    // @Override
    BitShiftExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitShiftExpression) {
            listener.enterBitShiftExpression(this);
        }
    };
    // @Override
    BitShiftExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitShiftExpression) {
            listener.exitBitShiftExpression(this);
        }
    };
    // @Override
    BitShiftExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitShiftExpression) {
            return visitor.visitBitShiftExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitShiftExpressionContext;
}(SingleExpressionContext));
exports.BitShiftExpressionContext = BitShiftExpressionContext;
var RelationalExpressionContext = /** @class */ (function (_super) {
    __extends(RelationalExpressionContext, _super);
    function RelationalExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    RelationalExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    RelationalExpressionContext.prototype.LessThan = function () { return this.tryGetToken(ECMAScriptParser.LessThan, 0); };
    RelationalExpressionContext.prototype.MoreThan = function () { return this.tryGetToken(ECMAScriptParser.MoreThan, 0); };
    RelationalExpressionContext.prototype.LessThanEquals = function () { return this.tryGetToken(ECMAScriptParser.LessThanEquals, 0); };
    RelationalExpressionContext.prototype.GreaterThanEquals = function () { return this.tryGetToken(ECMAScriptParser.GreaterThanEquals, 0); };
    // @Override
    RelationalExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterRelationalExpression) {
            listener.enterRelationalExpression(this);
        }
    };
    // @Override
    RelationalExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitRelationalExpression) {
            listener.exitRelationalExpression(this);
        }
    };
    // @Override
    RelationalExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitRelationalExpression) {
            return visitor.visitRelationalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationalExpressionContext;
}(SingleExpressionContext));
exports.RelationalExpressionContext = RelationalExpressionContext;
var InstanceofExpressionContext = /** @class */ (function (_super) {
    __extends(InstanceofExpressionContext, _super);
    function InstanceofExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    InstanceofExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    InstanceofExpressionContext.prototype.Instanceof = function () { return this.getToken(ECMAScriptParser.Instanceof, 0); };
    // @Override
    InstanceofExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterInstanceofExpression) {
            listener.enterInstanceofExpression(this);
        }
    };
    // @Override
    InstanceofExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitInstanceofExpression) {
            listener.exitInstanceofExpression(this);
        }
    };
    // @Override
    InstanceofExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitInstanceofExpression) {
            return visitor.visitInstanceofExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InstanceofExpressionContext;
}(SingleExpressionContext));
exports.InstanceofExpressionContext = InstanceofExpressionContext;
var InExpressionContext = /** @class */ (function (_super) {
    __extends(InExpressionContext, _super);
    function InExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    InExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    InExpressionContext.prototype.In = function () { return this.getToken(ECMAScriptParser.In, 0); };
    // @Override
    InExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterInExpression) {
            listener.enterInExpression(this);
        }
    };
    // @Override
    InExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitInExpression) {
            listener.exitInExpression(this);
        }
    };
    // @Override
    InExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitInExpression) {
            return visitor.visitInExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InExpressionContext;
}(SingleExpressionContext));
exports.InExpressionContext = InExpressionContext;
var EqualityExpressionContext = /** @class */ (function (_super) {
    __extends(EqualityExpressionContext, _super);
    function EqualityExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    EqualityExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    EqualityExpressionContext.prototype.Equals = function () { return this.tryGetToken(ECMAScriptParser.Equals, 0); };
    EqualityExpressionContext.prototype.NotEquals = function () { return this.tryGetToken(ECMAScriptParser.NotEquals, 0); };
    EqualityExpressionContext.prototype.IdentityEquals = function () { return this.tryGetToken(ECMAScriptParser.IdentityEquals, 0); };
    EqualityExpressionContext.prototype.IdentityNotEquals = function () { return this.tryGetToken(ECMAScriptParser.IdentityNotEquals, 0); };
    // @Override
    EqualityExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterEqualityExpression) {
            listener.enterEqualityExpression(this);
        }
    };
    // @Override
    EqualityExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitEqualityExpression) {
            listener.exitEqualityExpression(this);
        }
    };
    // @Override
    EqualityExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitEqualityExpression) {
            return visitor.visitEqualityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EqualityExpressionContext;
}(SingleExpressionContext));
exports.EqualityExpressionContext = EqualityExpressionContext;
var BitAndExpressionContext = /** @class */ (function (_super) {
    __extends(BitAndExpressionContext, _super);
    function BitAndExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BitAndExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    BitAndExpressionContext.prototype.BitAnd = function () { return this.getToken(ECMAScriptParser.BitAnd, 0); };
    // @Override
    BitAndExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitAndExpression) {
            listener.enterBitAndExpression(this);
        }
    };
    // @Override
    BitAndExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitAndExpression) {
            listener.exitBitAndExpression(this);
        }
    };
    // @Override
    BitAndExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitAndExpression) {
            return visitor.visitBitAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitAndExpressionContext;
}(SingleExpressionContext));
exports.BitAndExpressionContext = BitAndExpressionContext;
var BitXOrExpressionContext = /** @class */ (function (_super) {
    __extends(BitXOrExpressionContext, _super);
    function BitXOrExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BitXOrExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    BitXOrExpressionContext.prototype.BitXOr = function () { return this.getToken(ECMAScriptParser.BitXOr, 0); };
    // @Override
    BitXOrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitXOrExpression) {
            listener.enterBitXOrExpression(this);
        }
    };
    // @Override
    BitXOrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitXOrExpression) {
            listener.exitBitXOrExpression(this);
        }
    };
    // @Override
    BitXOrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitXOrExpression) {
            return visitor.visitBitXOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitXOrExpressionContext;
}(SingleExpressionContext));
exports.BitXOrExpressionContext = BitXOrExpressionContext;
var BitOrExpressionContext = /** @class */ (function (_super) {
    __extends(BitOrExpressionContext, _super);
    function BitOrExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BitOrExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    BitOrExpressionContext.prototype.BitOr = function () { return this.getToken(ECMAScriptParser.BitOr, 0); };
    // @Override
    BitOrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterBitOrExpression) {
            listener.enterBitOrExpression(this);
        }
    };
    // @Override
    BitOrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitBitOrExpression) {
            listener.exitBitOrExpression(this);
        }
    };
    // @Override
    BitOrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitBitOrExpression) {
            return visitor.visitBitOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BitOrExpressionContext;
}(SingleExpressionContext));
exports.BitOrExpressionContext = BitOrExpressionContext;
var LogicalAndExpressionContext = /** @class */ (function (_super) {
    __extends(LogicalAndExpressionContext, _super);
    function LogicalAndExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LogicalAndExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    LogicalAndExpressionContext.prototype.And = function () { return this.getToken(ECMAScriptParser.And, 0); };
    // @Override
    LogicalAndExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLogicalAndExpression) {
            listener.enterLogicalAndExpression(this);
        }
    };
    // @Override
    LogicalAndExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLogicalAndExpression) {
            listener.exitLogicalAndExpression(this);
        }
    };
    // @Override
    LogicalAndExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLogicalAndExpression) {
            return visitor.visitLogicalAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogicalAndExpressionContext;
}(SingleExpressionContext));
exports.LogicalAndExpressionContext = LogicalAndExpressionContext;
var LogicalOrExpressionContext = /** @class */ (function (_super) {
    __extends(LogicalOrExpressionContext, _super);
    function LogicalOrExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LogicalOrExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    LogicalOrExpressionContext.prototype.Or = function () { return this.getToken(ECMAScriptParser.Or, 0); };
    // @Override
    LogicalOrExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLogicalOrExpression) {
            listener.enterLogicalOrExpression(this);
        }
    };
    // @Override
    LogicalOrExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLogicalOrExpression) {
            listener.exitLogicalOrExpression(this);
        }
    };
    // @Override
    LogicalOrExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLogicalOrExpression) {
            return visitor.visitLogicalOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LogicalOrExpressionContext;
}(SingleExpressionContext));
exports.LogicalOrExpressionContext = LogicalOrExpressionContext;
var TernaryExpressionContext = /** @class */ (function (_super) {
    __extends(TernaryExpressionContext, _super);
    function TernaryExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    TernaryExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    TernaryExpressionContext.prototype.QuestionMark = function () { return this.getToken(ECMAScriptParser.QuestionMark, 0); };
    TernaryExpressionContext.prototype.Colon = function () { return this.getToken(ECMAScriptParser.Colon, 0); };
    // @Override
    TernaryExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterTernaryExpression) {
            listener.enterTernaryExpression(this);
        }
    };
    // @Override
    TernaryExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitTernaryExpression) {
            listener.exitTernaryExpression(this);
        }
    };
    // @Override
    TernaryExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitTernaryExpression) {
            return visitor.visitTernaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TernaryExpressionContext;
}(SingleExpressionContext));
exports.TernaryExpressionContext = TernaryExpressionContext;
var AssignmentExpressionContext = /** @class */ (function (_super) {
    __extends(AssignmentExpressionContext, _super);
    function AssignmentExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AssignmentExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    AssignmentExpressionContext.prototype.Assign = function () { return this.getToken(ECMAScriptParser.Assign, 0); };
    // @Override
    AssignmentExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentExpression) {
            listener.enterAssignmentExpression(this);
        }
    };
    // @Override
    AssignmentExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentExpression) {
            listener.exitAssignmentExpression(this);
        }
    };
    // @Override
    AssignmentExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentExpression) {
            return visitor.visitAssignmentExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentExpressionContext;
}(SingleExpressionContext));
exports.AssignmentExpressionContext = AssignmentExpressionContext;
var AssignmentOperatorExpressionContext = /** @class */ (function (_super) {
    __extends(AssignmentOperatorExpressionContext, _super);
    function AssignmentOperatorExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AssignmentOperatorExpressionContext.prototype.singleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SingleExpressionContext);
        }
    };
    AssignmentOperatorExpressionContext.prototype.assignmentOperator = function () {
        return this.getRuleContext(0, AssignmentOperatorContext);
    };
    // @Override
    AssignmentOperatorExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentOperatorExpression) {
            listener.enterAssignmentOperatorExpression(this);
        }
    };
    // @Override
    AssignmentOperatorExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentOperatorExpression) {
            listener.exitAssignmentOperatorExpression(this);
        }
    };
    // @Override
    AssignmentOperatorExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentOperatorExpression) {
            return visitor.visitAssignmentOperatorExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentOperatorExpressionContext;
}(SingleExpressionContext));
exports.AssignmentOperatorExpressionContext = AssignmentOperatorExpressionContext;
var ThisExpressionContext = /** @class */ (function (_super) {
    __extends(ThisExpressionContext, _super);
    function ThisExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ThisExpressionContext.prototype.This = function () { return this.getToken(ECMAScriptParser.This, 0); };
    // @Override
    ThisExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterThisExpression) {
            listener.enterThisExpression(this);
        }
    };
    // @Override
    ThisExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitThisExpression) {
            listener.exitThisExpression(this);
        }
    };
    // @Override
    ThisExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitThisExpression) {
            return visitor.visitThisExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThisExpressionContext;
}(SingleExpressionContext));
exports.ThisExpressionContext = ThisExpressionContext;
var IdentifierExpressionContext = /** @class */ (function (_super) {
    __extends(IdentifierExpressionContext, _super);
    function IdentifierExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IdentifierExpressionContext.prototype.Identifier = function () { return this.getToken(ECMAScriptParser.Identifier, 0); };
    // @Override
    IdentifierExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifierExpression) {
            listener.enterIdentifierExpression(this);
        }
    };
    // @Override
    IdentifierExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifierExpression) {
            listener.exitIdentifierExpression(this);
        }
    };
    // @Override
    IdentifierExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifierExpression) {
            return visitor.visitIdentifierExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierExpressionContext;
}(SingleExpressionContext));
exports.IdentifierExpressionContext = IdentifierExpressionContext;
var LiteralExpressionContext = /** @class */ (function (_super) {
    __extends(LiteralExpressionContext, _super);
    function LiteralExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LiteralExpressionContext.prototype.literal = function () {
        return this.getRuleContext(0, LiteralContext);
    };
    // @Override
    LiteralExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteralExpression) {
            listener.enterLiteralExpression(this);
        }
    };
    // @Override
    LiteralExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteralExpression) {
            listener.exitLiteralExpression(this);
        }
    };
    // @Override
    LiteralExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteralExpression) {
            return visitor.visitLiteralExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LiteralExpressionContext;
}(SingleExpressionContext));
exports.LiteralExpressionContext = LiteralExpressionContext;
var ArrayLiteralExpressionContext = /** @class */ (function (_super) {
    __extends(ArrayLiteralExpressionContext, _super);
    function ArrayLiteralExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ArrayLiteralExpressionContext.prototype.arrayLiteral = function () {
        return this.getRuleContext(0, ArrayLiteralContext);
    };
    // @Override
    ArrayLiteralExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayLiteralExpression) {
            listener.enterArrayLiteralExpression(this);
        }
    };
    // @Override
    ArrayLiteralExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayLiteralExpression) {
            listener.exitArrayLiteralExpression(this);
        }
    };
    // @Override
    ArrayLiteralExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayLiteralExpression) {
            return visitor.visitArrayLiteralExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayLiteralExpressionContext;
}(SingleExpressionContext));
exports.ArrayLiteralExpressionContext = ArrayLiteralExpressionContext;
var ObjectLiteralExpressionContext = /** @class */ (function (_super) {
    __extends(ObjectLiteralExpressionContext, _super);
    function ObjectLiteralExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ObjectLiteralExpressionContext.prototype.objectLiteral = function () {
        return this.getRuleContext(0, ObjectLiteralContext);
    };
    // @Override
    ObjectLiteralExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectLiteralExpression) {
            listener.enterObjectLiteralExpression(this);
        }
    };
    // @Override
    ObjectLiteralExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectLiteralExpression) {
            listener.exitObjectLiteralExpression(this);
        }
    };
    // @Override
    ObjectLiteralExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectLiteralExpression) {
            return visitor.visitObjectLiteralExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectLiteralExpressionContext;
}(SingleExpressionContext));
exports.ObjectLiteralExpressionContext = ObjectLiteralExpressionContext;
var ParenthesizedExpressionContext = /** @class */ (function (_super) {
    __extends(ParenthesizedExpressionContext, _super);
    function ParenthesizedExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ParenthesizedExpressionContext.prototype.OpenParen = function () { return this.getToken(ECMAScriptParser.OpenParen, 0); };
    ParenthesizedExpressionContext.prototype.expressionSequence = function () {
        return this.getRuleContext(0, ExpressionSequenceContext);
    };
    ParenthesizedExpressionContext.prototype.CloseParen = function () { return this.getToken(ECMAScriptParser.CloseParen, 0); };
    // @Override
    ParenthesizedExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterParenthesizedExpression) {
            listener.enterParenthesizedExpression(this);
        }
    };
    // @Override
    ParenthesizedExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitParenthesizedExpression) {
            listener.exitParenthesizedExpression(this);
        }
    };
    // @Override
    ParenthesizedExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParenthesizedExpressionContext;
}(SingleExpressionContext));
exports.ParenthesizedExpressionContext = ParenthesizedExpressionContext;
var AssignmentOperatorContext = /** @class */ (function (_super) {
    __extends(AssignmentOperatorContext, _super);
    function AssignmentOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentOperatorContext.prototype.MultiplyAssign = function () { return this.tryGetToken(ECMAScriptParser.MultiplyAssign, 0); };
    AssignmentOperatorContext.prototype.DivideAssign = function () { return this.tryGetToken(ECMAScriptParser.DivideAssign, 0); };
    AssignmentOperatorContext.prototype.ModulusAssign = function () { return this.tryGetToken(ECMAScriptParser.ModulusAssign, 0); };
    AssignmentOperatorContext.prototype.PlusAssign = function () { return this.tryGetToken(ECMAScriptParser.PlusAssign, 0); };
    AssignmentOperatorContext.prototype.MinusAssign = function () { return this.tryGetToken(ECMAScriptParser.MinusAssign, 0); };
    AssignmentOperatorContext.prototype.LeftShiftArithmeticAssign = function () { return this.tryGetToken(ECMAScriptParser.LeftShiftArithmeticAssign, 0); };
    AssignmentOperatorContext.prototype.RightShiftArithmeticAssign = function () { return this.tryGetToken(ECMAScriptParser.RightShiftArithmeticAssign, 0); };
    AssignmentOperatorContext.prototype.RightShiftLogicalAssign = function () { return this.tryGetToken(ECMAScriptParser.RightShiftLogicalAssign, 0); };
    AssignmentOperatorContext.prototype.BitAndAssign = function () { return this.tryGetToken(ECMAScriptParser.BitAndAssign, 0); };
    AssignmentOperatorContext.prototype.BitXorAssign = function () { return this.tryGetToken(ECMAScriptParser.BitXorAssign, 0); };
    AssignmentOperatorContext.prototype.BitOrAssign = function () { return this.tryGetToken(ECMAScriptParser.BitOrAssign, 0); };
    Object.defineProperty(AssignmentOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_assignmentOperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentOperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentOperator) {
            listener.enterAssignmentOperator(this);
        }
    };
    // @Override
    AssignmentOperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentOperator) {
            listener.exitAssignmentOperator(this);
        }
    };
    // @Override
    AssignmentOperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentOperator) {
            return visitor.visitAssignmentOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentOperatorContext = AssignmentOperatorContext;
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.NullLiteral = function () { return this.tryGetToken(ECMAScriptParser.NullLiteral, 0); };
    LiteralContext.prototype.BooleanLiteral = function () { return this.tryGetToken(ECMAScriptParser.BooleanLiteral, 0); };
    LiteralContext.prototype.StringLiteral = function () { return this.tryGetToken(ECMAScriptParser.StringLiteral, 0); };
    LiteralContext.prototype.RegularExpressionLiteral = function () { return this.tryGetToken(ECMAScriptParser.RegularExpressionLiteral, 0); };
    LiteralContext.prototype.numericLiteral = function () {
        return this.tryGetRuleContext(0, NumericLiteralContext);
    };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_literal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteral) {
            listener.enterLiteral(this);
        }
    };
    // @Override
    LiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteral) {
            listener.exitLiteral(this);
        }
    };
    // @Override
    LiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LiteralContext = LiteralContext;
var NumericLiteralContext = /** @class */ (function (_super) {
    __extends(NumericLiteralContext, _super);
    function NumericLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumericLiteralContext.prototype.DecimalLiteral = function () { return this.tryGetToken(ECMAScriptParser.DecimalLiteral, 0); };
    NumericLiteralContext.prototype.HexIntegerLiteral = function () { return this.tryGetToken(ECMAScriptParser.HexIntegerLiteral, 0); };
    NumericLiteralContext.prototype.OctalIntegerLiteral = function () { return this.tryGetToken(ECMAScriptParser.OctalIntegerLiteral, 0); };
    Object.defineProperty(NumericLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_numericLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumericLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterNumericLiteral) {
            listener.enterNumericLiteral(this);
        }
    };
    // @Override
    NumericLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitNumericLiteral) {
            listener.exitNumericLiteral(this);
        }
    };
    // @Override
    NumericLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitNumericLiteral) {
            return visitor.visitNumericLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumericLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumericLiteralContext = NumericLiteralContext;
var IdentifierNameContext = /** @class */ (function (_super) {
    __extends(IdentifierNameContext, _super);
    function IdentifierNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierNameContext.prototype.Identifier = function () { return this.tryGetToken(ECMAScriptParser.Identifier, 0); };
    IdentifierNameContext.prototype.reservedWord = function () {
        return this.tryGetRuleContext(0, ReservedWordContext);
    };
    Object.defineProperty(IdentifierNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_identifierName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierNameContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifierName) {
            listener.enterIdentifierName(this);
        }
    };
    // @Override
    IdentifierNameContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifierName) {
            listener.exitIdentifierName(this);
        }
    };
    // @Override
    IdentifierNameContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifierName) {
            return visitor.visitIdentifierName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierNameContext = IdentifierNameContext;
var ReservedWordContext = /** @class */ (function (_super) {
    __extends(ReservedWordContext, _super);
    function ReservedWordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReservedWordContext.prototype.keyword = function () {
        return this.tryGetRuleContext(0, KeywordContext);
    };
    ReservedWordContext.prototype.futureReservedWord = function () {
        return this.tryGetRuleContext(0, FutureReservedWordContext);
    };
    ReservedWordContext.prototype.NullLiteral = function () { return this.tryGetToken(ECMAScriptParser.NullLiteral, 0); };
    ReservedWordContext.prototype.BooleanLiteral = function () { return this.tryGetToken(ECMAScriptParser.BooleanLiteral, 0); };
    Object.defineProperty(ReservedWordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_reservedWord; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReservedWordContext.prototype.enterRule = function (listener) {
        if (listener.enterReservedWord) {
            listener.enterReservedWord(this);
        }
    };
    // @Override
    ReservedWordContext.prototype.exitRule = function (listener) {
        if (listener.exitReservedWord) {
            listener.exitReservedWord(this);
        }
    };
    // @Override
    ReservedWordContext.prototype.accept = function (visitor) {
        if (visitor.visitReservedWord) {
            return visitor.visitReservedWord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReservedWordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReservedWordContext = ReservedWordContext;
var KeywordContext = /** @class */ (function (_super) {
    __extends(KeywordContext, _super);
    function KeywordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeywordContext.prototype.Break = function () { return this.tryGetToken(ECMAScriptParser.Break, 0); };
    KeywordContext.prototype.Do = function () { return this.tryGetToken(ECMAScriptParser.Do, 0); };
    KeywordContext.prototype.Instanceof = function () { return this.tryGetToken(ECMAScriptParser.Instanceof, 0); };
    KeywordContext.prototype.Typeof = function () { return this.tryGetToken(ECMAScriptParser.Typeof, 0); };
    KeywordContext.prototype.Case = function () { return this.tryGetToken(ECMAScriptParser.Case, 0); };
    KeywordContext.prototype.Else = function () { return this.tryGetToken(ECMAScriptParser.Else, 0); };
    KeywordContext.prototype.New = function () { return this.tryGetToken(ECMAScriptParser.New, 0); };
    KeywordContext.prototype.Var = function () { return this.tryGetToken(ECMAScriptParser.Var, 0); };
    KeywordContext.prototype.Catch = function () { return this.tryGetToken(ECMAScriptParser.Catch, 0); };
    KeywordContext.prototype.Finally = function () { return this.tryGetToken(ECMAScriptParser.Finally, 0); };
    KeywordContext.prototype.Return = function () { return this.tryGetToken(ECMAScriptParser.Return, 0); };
    KeywordContext.prototype.Void = function () { return this.tryGetToken(ECMAScriptParser.Void, 0); };
    KeywordContext.prototype.Continue = function () { return this.tryGetToken(ECMAScriptParser.Continue, 0); };
    KeywordContext.prototype.For = function () { return this.tryGetToken(ECMAScriptParser.For, 0); };
    KeywordContext.prototype.Switch = function () { return this.tryGetToken(ECMAScriptParser.Switch, 0); };
    KeywordContext.prototype.While = function () { return this.tryGetToken(ECMAScriptParser.While, 0); };
    KeywordContext.prototype.Debugger = function () { return this.tryGetToken(ECMAScriptParser.Debugger, 0); };
    KeywordContext.prototype.Function = function () { return this.tryGetToken(ECMAScriptParser.Function, 0); };
    KeywordContext.prototype.This = function () { return this.tryGetToken(ECMAScriptParser.This, 0); };
    KeywordContext.prototype.With = function () { return this.tryGetToken(ECMAScriptParser.With, 0); };
    KeywordContext.prototype.Default = function () { return this.tryGetToken(ECMAScriptParser.Default, 0); };
    KeywordContext.prototype.If = function () { return this.tryGetToken(ECMAScriptParser.If, 0); };
    KeywordContext.prototype.Throw = function () { return this.tryGetToken(ECMAScriptParser.Throw, 0); };
    KeywordContext.prototype.Delete = function () { return this.tryGetToken(ECMAScriptParser.Delete, 0); };
    KeywordContext.prototype.In = function () { return this.tryGetToken(ECMAScriptParser.In, 0); };
    KeywordContext.prototype.Try = function () { return this.tryGetToken(ECMAScriptParser.Try, 0); };
    Object.defineProperty(KeywordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_keyword; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeywordContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyword) {
            listener.enterKeyword(this);
        }
    };
    // @Override
    KeywordContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyword) {
            listener.exitKeyword(this);
        }
    };
    // @Override
    KeywordContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeywordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeywordContext = KeywordContext;
var FutureReservedWordContext = /** @class */ (function (_super) {
    __extends(FutureReservedWordContext, _super);
    function FutureReservedWordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FutureReservedWordContext.prototype.Class = function () { return this.tryGetToken(ECMAScriptParser.Class, 0); };
    FutureReservedWordContext.prototype.Enum = function () { return this.tryGetToken(ECMAScriptParser.Enum, 0); };
    FutureReservedWordContext.prototype.Extends = function () { return this.tryGetToken(ECMAScriptParser.Extends, 0); };
    FutureReservedWordContext.prototype.Super = function () { return this.tryGetToken(ECMAScriptParser.Super, 0); };
    FutureReservedWordContext.prototype.Const = function () { return this.tryGetToken(ECMAScriptParser.Const, 0); };
    FutureReservedWordContext.prototype.Export = function () { return this.tryGetToken(ECMAScriptParser.Export, 0); };
    FutureReservedWordContext.prototype.Import = function () { return this.tryGetToken(ECMAScriptParser.Import, 0); };
    FutureReservedWordContext.prototype.Implements = function () { return this.tryGetToken(ECMAScriptParser.Implements, 0); };
    FutureReservedWordContext.prototype.Let = function () { return this.tryGetToken(ECMAScriptParser.Let, 0); };
    FutureReservedWordContext.prototype.Private = function () { return this.tryGetToken(ECMAScriptParser.Private, 0); };
    FutureReservedWordContext.prototype.Public = function () { return this.tryGetToken(ECMAScriptParser.Public, 0); };
    FutureReservedWordContext.prototype.Interface = function () { return this.tryGetToken(ECMAScriptParser.Interface, 0); };
    FutureReservedWordContext.prototype.Package = function () { return this.tryGetToken(ECMAScriptParser.Package, 0); };
    FutureReservedWordContext.prototype.Protected = function () { return this.tryGetToken(ECMAScriptParser.Protected, 0); };
    FutureReservedWordContext.prototype.Static = function () { return this.tryGetToken(ECMAScriptParser.Static, 0); };
    FutureReservedWordContext.prototype.Yield = function () { return this.tryGetToken(ECMAScriptParser.Yield, 0); };
    Object.defineProperty(FutureReservedWordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_futureReservedWord; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FutureReservedWordContext.prototype.enterRule = function (listener) {
        if (listener.enterFutureReservedWord) {
            listener.enterFutureReservedWord(this);
        }
    };
    // @Override
    FutureReservedWordContext.prototype.exitRule = function (listener) {
        if (listener.exitFutureReservedWord) {
            listener.exitFutureReservedWord(this);
        }
    };
    // @Override
    FutureReservedWordContext.prototype.accept = function (visitor) {
        if (visitor.visitFutureReservedWord) {
            return visitor.visitFutureReservedWord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FutureReservedWordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FutureReservedWordContext = FutureReservedWordContext;
var GetterContext = /** @class */ (function (_super) {
    __extends(GetterContext, _super);
    function GetterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GetterContext.prototype.Identifier = function () { return this.getToken(ECMAScriptParser.Identifier, 0); };
    GetterContext.prototype.propertyName = function () {
        return this.getRuleContext(0, PropertyNameContext);
    };
    Object.defineProperty(GetterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_getter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GetterContext.prototype.enterRule = function (listener) {
        if (listener.enterGetter) {
            listener.enterGetter(this);
        }
    };
    // @Override
    GetterContext.prototype.exitRule = function (listener) {
        if (listener.exitGetter) {
            listener.exitGetter(this);
        }
    };
    // @Override
    GetterContext.prototype.accept = function (visitor) {
        if (visitor.visitGetter) {
            return visitor.visitGetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GetterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GetterContext = GetterContext;
var SetterContext = /** @class */ (function (_super) {
    __extends(SetterContext, _super);
    function SetterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetterContext.prototype.Identifier = function () { return this.getToken(ECMAScriptParser.Identifier, 0); };
    SetterContext.prototype.propertyName = function () {
        return this.getRuleContext(0, PropertyNameContext);
    };
    Object.defineProperty(SetterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_setter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetterContext.prototype.enterRule = function (listener) {
        if (listener.enterSetter) {
            listener.enterSetter(this);
        }
    };
    // @Override
    SetterContext.prototype.exitRule = function (listener) {
        if (listener.exitSetter) {
            listener.exitSetter(this);
        }
    };
    // @Override
    SetterContext.prototype.accept = function (visitor) {
        if (visitor.visitSetter) {
            return visitor.visitSetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetterContext = SetterContext;
var EosContext = /** @class */ (function (_super) {
    __extends(EosContext, _super);
    function EosContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EosContext.prototype.SemiColon = function () { return this.tryGetToken(ECMAScriptParser.SemiColon, 0); };
    EosContext.prototype.EOF = function () { return this.tryGetToken(ECMAScriptParser.EOF, 0); };
    Object.defineProperty(EosContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_eos; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EosContext.prototype.enterRule = function (listener) {
        if (listener.enterEos) {
            listener.enterEos(this);
        }
    };
    // @Override
    EosContext.prototype.exitRule = function (listener) {
        if (listener.exitEos) {
            listener.exitEos(this);
        }
    };
    // @Override
    EosContext.prototype.accept = function (visitor) {
        if (visitor.visitEos) {
            return visitor.visitEos(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EosContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EosContext = EosContext;
var EofContext = /** @class */ (function (_super) {
    __extends(EofContext, _super);
    function EofContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EofContext.prototype.EOF = function () { return this.getToken(ECMAScriptParser.EOF, 0); };
    Object.defineProperty(EofContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return ECMAScriptParser.RULE_eof; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EofContext.prototype.enterRule = function (listener) {
        if (listener.enterEof) {
            listener.enterEof(this);
        }
    };
    // @Override
    EofContext.prototype.exitRule = function (listener) {
        if (listener.exitEof) {
            listener.exitEof(this);
        }
    };
    // @Override
    EofContext.prototype.accept = function (visitor) {
        if (visitor.visitEof) {
            return visitor.visitEof(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EofContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EofContext = EofContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
