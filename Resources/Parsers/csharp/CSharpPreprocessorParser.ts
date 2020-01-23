// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/csharp/CSharpPreprocessorParser.g4 by ANTLR 4.7.3-SNAPSHOT

import java.util.Stack;
import java.util.HashSet;

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CSharpPreprocessorParserListener } from "./CSharpPreprocessorParserListener";
import { CSharpPreprocessorParserVisitor } from "./CSharpPreprocessorParserVisitor";


export class CSharpPreprocessorParser extends Parser {
	public static readonly BYTE_ORDER_MARK = 1;
	public static readonly SINGLE_LINE_DOC_COMMENT = 2;
	public static readonly DELIMITED_DOC_COMMENT = 3;
	public static readonly SINGLE_LINE_COMMENT = 4;
	public static readonly DELIMITED_COMMENT = 5;
	public static readonly WHITESPACES = 6;
	public static readonly SHARP = 7;
	public static readonly ABSTRACT = 8;
	public static readonly ADD = 9;
	public static readonly ALIAS = 10;
	public static readonly ARGLIST = 11;
	public static readonly AS = 12;
	public static readonly ASCENDING = 13;
	public static readonly ASYNC = 14;
	public static readonly AWAIT = 15;
	public static readonly BASE = 16;
	public static readonly BOOL = 17;
	public static readonly BREAK = 18;
	public static readonly BY = 19;
	public static readonly BYTE = 20;
	public static readonly CASE = 21;
	public static readonly CATCH = 22;
	public static readonly CHAR = 23;
	public static readonly CHECKED = 24;
	public static readonly CLASS = 25;
	public static readonly CONST = 26;
	public static readonly CONTINUE = 27;
	public static readonly DECIMAL = 28;
	public static readonly DEFAULT = 29;
	public static readonly DELEGATE = 30;
	public static readonly DESCENDING = 31;
	public static readonly DO = 32;
	public static readonly DOUBLE = 33;
	public static readonly DYNAMIC = 34;
	public static readonly ELSE = 35;
	public static readonly ENUM = 36;
	public static readonly EQUALS = 37;
	public static readonly EVENT = 38;
	public static readonly EXPLICIT = 39;
	public static readonly EXTERN = 40;
	public static readonly FALSE = 41;
	public static readonly FINALLY = 42;
	public static readonly FIXED = 43;
	public static readonly FLOAT = 44;
	public static readonly FOR = 45;
	public static readonly FOREACH = 46;
	public static readonly FROM = 47;
	public static readonly GET = 48;
	public static readonly GOTO = 49;
	public static readonly GROUP = 50;
	public static readonly IF = 51;
	public static readonly IMPLICIT = 52;
	public static readonly IN = 53;
	public static readonly INT = 54;
	public static readonly INTERFACE = 55;
	public static readonly INTERNAL = 56;
	public static readonly INTO = 57;
	public static readonly IS = 58;
	public static readonly JOIN = 59;
	public static readonly LET = 60;
	public static readonly LOCK = 61;
	public static readonly LONG = 62;
	public static readonly NAMEOF = 63;
	public static readonly NAMESPACE = 64;
	public static readonly NEW = 65;
	public static readonly NULL = 66;
	public static readonly OBJECT = 67;
	public static readonly ON = 68;
	public static readonly OPERATOR = 69;
	public static readonly ORDERBY = 70;
	public static readonly OUT = 71;
	public static readonly OVERRIDE = 72;
	public static readonly PARAMS = 73;
	public static readonly PARTIAL = 74;
	public static readonly PRIVATE = 75;
	public static readonly PROTECTED = 76;
	public static readonly PUBLIC = 77;
	public static readonly READONLY = 78;
	public static readonly REF = 79;
	public static readonly REMOVE = 80;
	public static readonly RETURN = 81;
	public static readonly SBYTE = 82;
	public static readonly SEALED = 83;
	public static readonly SELECT = 84;
	public static readonly SET = 85;
	public static readonly SHORT = 86;
	public static readonly SIZEOF = 87;
	public static readonly STACKALLOC = 88;
	public static readonly STATIC = 89;
	public static readonly STRING = 90;
	public static readonly STRUCT = 91;
	public static readonly SWITCH = 92;
	public static readonly THIS = 93;
	public static readonly THROW = 94;
	public static readonly TRUE = 95;
	public static readonly TRY = 96;
	public static readonly TYPEOF = 97;
	public static readonly UINT = 98;
	public static readonly ULONG = 99;
	public static readonly UNCHECKED = 100;
	public static readonly UNSAFE = 101;
	public static readonly USHORT = 102;
	public static readonly USING = 103;
	public static readonly VAR = 104;
	public static readonly VIRTUAL = 105;
	public static readonly VOID = 106;
	public static readonly VOLATILE = 107;
	public static readonly WHEN = 108;
	public static readonly WHERE = 109;
	public static readonly WHILE = 110;
	public static readonly YIELD = 111;
	public static readonly IDENTIFIER = 112;
	public static readonly LITERAL_ACCESS = 113;
	public static readonly INTEGER_LITERAL = 114;
	public static readonly HEX_INTEGER_LITERAL = 115;
	public static readonly REAL_LITERAL = 116;
	public static readonly CHARACTER_LITERAL = 117;
	public static readonly REGULAR_STRING = 118;
	public static readonly VERBATIUM_STRING = 119;
	public static readonly INTERPOLATED_REGULAR_STRING_START = 120;
	public static readonly INTERPOLATED_VERBATIUM_STRING_START = 121;
	public static readonly OPEN_BRACE = 122;
	public static readonly CLOSE_BRACE = 123;
	public static readonly OPEN_BRACKET = 124;
	public static readonly CLOSE_BRACKET = 125;
	public static readonly OPEN_PARENS = 126;
	public static readonly CLOSE_PARENS = 127;
	public static readonly DOT = 128;
	public static readonly COMMA = 129;
	public static readonly COLON = 130;
	public static readonly SEMICOLON = 131;
	public static readonly PLUS = 132;
	public static readonly MINUS = 133;
	public static readonly STAR = 134;
	public static readonly DIV = 135;
	public static readonly PERCENT = 136;
	public static readonly AMP = 137;
	public static readonly BITWISE_OR = 138;
	public static readonly CARET = 139;
	public static readonly BANG = 140;
	public static readonly TILDE = 141;
	public static readonly ASSIGNMENT = 142;
	public static readonly LT = 143;
	public static readonly GT = 144;
	public static readonly INTERR = 145;
	public static readonly DOUBLE_COLON = 146;
	public static readonly OP_COALESCING = 147;
	public static readonly OP_INC = 148;
	public static readonly OP_DEC = 149;
	public static readonly OP_AND = 150;
	public static readonly OP_OR = 151;
	public static readonly OP_PTR = 152;
	public static readonly OP_EQ = 153;
	public static readonly OP_NE = 154;
	public static readonly OP_LE = 155;
	public static readonly OP_GE = 156;
	public static readonly OP_ADD_ASSIGNMENT = 157;
	public static readonly OP_SUB_ASSIGNMENT = 158;
	public static readonly OP_MULT_ASSIGNMENT = 159;
	public static readonly OP_DIV_ASSIGNMENT = 160;
	public static readonly OP_MOD_ASSIGNMENT = 161;
	public static readonly OP_AND_ASSIGNMENT = 162;
	public static readonly OP_OR_ASSIGNMENT = 163;
	public static readonly OP_XOR_ASSIGNMENT = 164;
	public static readonly OP_LEFT_SHIFT = 165;
	public static readonly OP_LEFT_SHIFT_ASSIGNMENT = 166;
	public static readonly DOUBLE_CURLY_INSIDE = 167;
	public static readonly OPEN_BRACE_INSIDE = 168;
	public static readonly REGULAR_CHAR_INSIDE = 169;
	public static readonly VERBATIUM_DOUBLE_QUOTE_INSIDE = 170;
	public static readonly DOUBLE_QUOTE_INSIDE = 171;
	public static readonly REGULAR_STRING_INSIDE = 172;
	public static readonly VERBATIUM_INSIDE_STRING = 173;
	public static readonly CLOSE_BRACE_INSIDE = 174;
	public static readonly FORMAT_STRING = 175;
	public static readonly DIRECTIVE_WHITESPACES = 176;
	public static readonly DIGITS = 177;
	public static readonly DEFINE = 178;
	public static readonly UNDEF = 179;
	public static readonly ELIF = 180;
	public static readonly ENDIF = 181;
	public static readonly LINE = 182;
	public static readonly ERROR = 183;
	public static readonly WARNING = 184;
	public static readonly REGION = 185;
	public static readonly ENDREGION = 186;
	public static readonly PRAGMA = 187;
	public static readonly DIRECTIVE_HIDDEN = 188;
	public static readonly CONDITIONAL_SYMBOL = 189;
	public static readonly DIRECTIVE_NEW_LINE = 190;
	public static readonly TEXT = 191;
	public static readonly DOUBLE_CURLY_CLOSE_INSIDE = 192;
	public static readonly RULE_preprocessor_directive = 0;
	public static readonly RULE_directive_new_line_or_sharp = 1;
	public static readonly RULE_preprocessor_expression = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"preprocessor_directive", "directive_new_line_or_sharp", "preprocessor_expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
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
		"'using'", "'var'", "'virtual'", "'void'", "'volatile'", "'when'", "'where'", 
		"'while'", "'yield'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'{'", "'}'", "'['", 
		"']'", "'('", "')'", "'.'", "','", "':'", "';'", "'+'", "'-'", "'*'", 
		"'/'", "'%'", "'&'", "'|'", "'^'", "'!'", "'~'", "'='", "'<'", "'>'", 
		"'?'", "'::'", "'??'", "'++'", "'--'", "'&&'", "'||'", "'->'", "'=='", 
		"'!='", "'<='", "'>='", "'+='", "'-='", "'*='", "'/='", "'%='", "'&='", 
		"'|='", "'^='", "'<<'", "'<<='", "'{{'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'define'", "'undef'", "'elif'", "'endif'", "'line'", undefined, undefined, 
		undefined, undefined, undefined, "'hidden'", undefined, undefined, undefined, 
		"'}}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
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
		"TYPEOF", "UINT", "ULONG", "UNCHECKED", "UNSAFE", "USHORT", "USING", "VAR", 
		"VIRTUAL", "VOID", "VOLATILE", "WHEN", "WHERE", "WHILE", "YIELD", "IDENTIFIER", 
		"LITERAL_ACCESS", "INTEGER_LITERAL", "HEX_INTEGER_LITERAL", "REAL_LITERAL", 
		"CHARACTER_LITERAL", "REGULAR_STRING", "VERBATIUM_STRING", "INTERPOLATED_REGULAR_STRING_START", 
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CSharpPreprocessorParser._LITERAL_NAMES, CSharpPreprocessorParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CSharpPreprocessorParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CSharpPreprocessorParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CSharpPreprocessorParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CSharpPreprocessorParser._serializedATN; }

	Stack<Boolean> conditions = new Stack<Boolean>() {{ conditions.push(true); }};
	public HashSet<String> ConditionalSymbols = new HashSet<String>() {{ ConditionalSymbols.add("DEBUG"); }};

	private boolean allConditions() {
		for(boolean condition: conditions) {
			if (!condition)
				return false;
		}
		return true;
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CSharpPreprocessorParser._ATN, this);
	}
	// @RuleVersion(0)
	public preprocessor_directive(): Preprocessor_directiveContext {
		let _localctx: Preprocessor_directiveContext = new Preprocessor_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CSharpPreprocessorParser.RULE_preprocessor_directive);
		let _la: number;
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
				(_localctx as PreprocessorDeclarationContext)._CONDITIONAL_SYMBOL = this.match(CSharpPreprocessorParser.CONDITIONAL_SYMBOL);
				this.state = 8;
				this.directive_new_line_or_sharp();
				 ConditionalSymbols.add(((_localctx as PreprocessorDeclarationContext)._CONDITIONAL_SYMBOL != null ? (_localctx as PreprocessorDeclarationContext)._CONDITIONAL_SYMBOL.text : undefined));
					   (_localctx as PreprocessorDeclarationContext).value =  allConditions(); 
				}
				break;
			case CSharpPreprocessorParser.UNDEF:
				_localctx = new PreprocessorDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 11;
				this.match(CSharpPreprocessorParser.UNDEF);
				this.state = 12;
				(_localctx as PreprocessorDeclarationContext)._CONDITIONAL_SYMBOL = this.match(CSharpPreprocessorParser.CONDITIONAL_SYMBOL);
				this.state = 13;
				this.directive_new_line_or_sharp();
				 ConditionalSymbols.remove(((_localctx as PreprocessorDeclarationContext)._CONDITIONAL_SYMBOL != null ? (_localctx as PreprocessorDeclarationContext)._CONDITIONAL_SYMBOL.text : undefined));
					   (_localctx as PreprocessorDeclarationContext).value =  allConditions(); 
				}
				break;
			case CSharpPreprocessorParser.IF:
				_localctx = new PreprocessorConditionalContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 16;
				this.match(CSharpPreprocessorParser.IF);
				this.state = 17;
				(_localctx as PreprocessorConditionalContext)._expr = this.preprocessor_expression(0);
				this.state = 18;
				this.directive_new_line_or_sharp();
				 (_localctx as PreprocessorConditionalContext).value =  (_localctx as PreprocessorConditionalContext)._expr.value.equals("true") && allConditions(); conditions.push((_localctx as PreprocessorConditionalContext)._expr.value.equals("true")); 
				}
				break;
			case CSharpPreprocessorParser.ELIF:
				_localctx = new PreprocessorConditionalContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 21;
				this.match(CSharpPreprocessorParser.ELIF);
				this.state = 22;
				(_localctx as PreprocessorConditionalContext)._expr = this.preprocessor_expression(0);
				this.state = 23;
				this.directive_new_line_or_sharp();
				 if (!conditions.peek()) { conditions.pop(); (_localctx as PreprocessorConditionalContext).value =  (_localctx as PreprocessorConditionalContext)._expr.value.equals("true") && allConditions();
					     conditions.push((_localctx as PreprocessorConditionalContext)._expr.value.equals("true")); } else (_localctx as PreprocessorConditionalContext).value =  false; 
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
				 if (!conditions.peek()) { conditions.pop(); (_localctx as PreprocessorConditionalContext).value =  true && allConditions(); conditions.push(true); }
					    else (_localctx as PreprocessorConditionalContext).value =  false; 
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
				 conditions.pop(); (_localctx as PreprocessorConditionalContext).value =  conditions.peek(); 
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
					throw new NoViableAltException(this);
				}
				this.state = 43;
				this.directive_new_line_or_sharp();
				 (_localctx as PreprocessorLineContext).value =  allConditions(); 
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
				 (_localctx as PreprocessorDiagnosticContext).value =  allConditions(); 
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
				 (_localctx as PreprocessorDiagnosticContext).value =  allConditions(); 
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
				 (_localctx as PreprocessorRegionContext).value =  allConditions(); 
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
				 (_localctx as PreprocessorRegionContext).value =  allConditions(); 
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
				 (_localctx as PreprocessorPragmaContext).value =  allConditions(); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		let _localctx: Directive_new_line_or_sharpContext = new Directive_new_line_or_sharpContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CSharpPreprocessorParser.RULE_directive_new_line_or_sharp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			_la = this._input.LA(1);
			if (!(_la === CSharpPreprocessorParser.EOF || _la === CSharpPreprocessorParser.DIRECTIVE_NEW_LINE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public preprocessor_expression(): Preprocessor_expressionContext;
	public preprocessor_expression(_p: number): Preprocessor_expressionContext;
	// @RuleVersion(0)
	public preprocessor_expression(_p?: number): Preprocessor_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Preprocessor_expressionContext = new Preprocessor_expressionContext(this._ctx, _parentState);
		let _prevctx: Preprocessor_expressionContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, CSharpPreprocessorParser.RULE_preprocessor_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpPreprocessorParser.TRUE:
				{
				this.state = 80;
				this.match(CSharpPreprocessorParser.TRUE);
				 _localctx.value =  "true"; 
				}
				break;
			case CSharpPreprocessorParser.FALSE:
				{
				this.state = 82;
				this.match(CSharpPreprocessorParser.FALSE);
				 _localctx.value =  "false"; 
				}
				break;
			case CSharpPreprocessorParser.CONDITIONAL_SYMBOL:
				{
				this.state = 84;
				_localctx._CONDITIONAL_SYMBOL = this.match(CSharpPreprocessorParser.CONDITIONAL_SYMBOL);
				 _localctx.value =  ConditionalSymbols.contains((_localctx._CONDITIONAL_SYMBOL != null ? _localctx._CONDITIONAL_SYMBOL.text : undefined)) ? "true" : "false"; 
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
				 _localctx.value =  _localctx._expr.value; 
				}
				break;
			case CSharpPreprocessorParser.BANG:
				{
				this.state = 91;
				this.match(CSharpPreprocessorParser.BANG);
				this.state = 92;
				_localctx._expr = this.preprocessor_expression(5);
				 _localctx.value =  _localctx._expr.value.equals("true") ? "false" : "true"; 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 119;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 117;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						_localctx = new Preprocessor_expressionContext(_parentctx, _parentState);
						_localctx._expr1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
						this.state = 97;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 98;
						this.match(CSharpPreprocessorParser.OP_EQ);
						this.state = 99;
						_localctx._expr2 = this.preprocessor_expression(5);
						 _localctx.value =  (_localctx._expr1.value == _localctx._expr2.value ? "true" : "false"); 
						}
						break;

					case 2:
						{
						_localctx = new Preprocessor_expressionContext(_parentctx, _parentState);
						_localctx._expr1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
						this.state = 102;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 103;
						this.match(CSharpPreprocessorParser.OP_NE);
						this.state = 104;
						_localctx._expr2 = this.preprocessor_expression(4);
						 _localctx.value =  (_localctx._expr1.value != _localctx._expr2.value ? "true" : "false"); 
						}
						break;

					case 3:
						{
						_localctx = new Preprocessor_expressionContext(_parentctx, _parentState);
						_localctx._expr1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
						this.state = 107;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 108;
						this.match(CSharpPreprocessorParser.OP_AND);
						this.state = 109;
						_localctx._expr2 = this.preprocessor_expression(3);
						 _localctx.value =  (_localctx._expr1.value.equals("true") && _localctx._expr2.value.equals("true") ? "true" : "false"); 
						}
						break;

					case 4:
						{
						_localctx = new Preprocessor_expressionContext(_parentctx, _parentState);
						_localctx._expr1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
						this.state = 112;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 113;
						this.match(CSharpPreprocessorParser.OP_OR);
						this.state = 114;
						_localctx._expr2 = this.preprocessor_expression(2);
						 _localctx.value =  (_localctx._expr1.value.equals("true") || _localctx._expr2.value.equals("true") ? "true" : "false"); 
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.preprocessor_expression_sempred(_localctx as Preprocessor_expressionContext, predIndex);
		}
		return true;
	}
	private preprocessor_expression_sempred(_localctx: Preprocessor_expressionContext, predIndex: number): boolean {
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xC2}\x04\x02" +
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
		"\x06\x02\x02\x03\x03\x03\xC0\xC0\x02\x91\x02M\x03\x02\x02\x02\x04O\x03" +
		"\x02\x02\x02\x06a\x03\x02\x02\x02\b\t\x07\xB4\x02\x02\t\n\x07\xBF\x02" +
		"\x02\n\v\x05\x04\x03\x02\v\f\b\x02\x01\x02\fN\x03\x02\x02\x02\r\x0E\x07" +
		"\xB5\x02\x02\x0E\x0F\x07\xBF\x02\x02\x0F\x10\x05\x04\x03\x02\x10\x11\b" +
		"\x02\x01\x02\x11N\x03\x02\x02\x02\x12\x13\x075\x02\x02\x13\x14\x05\x06" +
		"\x04\x02\x14\x15\x05\x04\x03\x02\x15\x16\b\x02\x01\x02\x16N\x03\x02\x02" +
		"\x02\x17\x18\x07\xB6\x02\x02\x18\x19\x05\x06\x04\x02\x19\x1A\x05\x04\x03" +
		"\x02\x1A\x1B\b\x02\x01\x02\x1BN\x03\x02\x02\x02\x1C\x1D\x07%\x02\x02\x1D" +
		"\x1E\x05\x04\x03\x02\x1E\x1F\b\x02\x01\x02\x1FN\x03\x02\x02\x02 !\x07" +
		"\xB7\x02\x02!\"\x05\x04\x03\x02\"#\b\x02\x01\x02#N\x03\x02\x02\x02$+\x07" +
		"\xB8\x02\x02%\'\x07\xB3\x02\x02&(\x07\\\x02\x02\'&\x03\x02\x02\x02\'(" +
		"\x03\x02\x02\x02(,\x03\x02\x02\x02),\x07\x1F\x02\x02*,\x07\xBE\x02\x02" +
		"+%\x03\x02\x02\x02+)\x03\x02\x02\x02+*\x03\x02\x02\x02,-\x03\x02\x02\x02" +
		"-.\x05\x04\x03\x02./\b\x02\x01\x02/N\x03\x02\x02\x0201\x07\xB9\x02\x02" +
		"12\x07\xC1\x02\x0223\x05\x04\x03\x0234\b\x02\x01\x024N\x03\x02\x02\x02" +
		"56\x07\xBA\x02\x0267\x07\xC1\x02\x0278\x05\x04\x03\x0289\b\x02\x01\x02" +
		"9N\x03\x02\x02\x02:<\x07\xBB\x02\x02;=\x07\xC1\x02\x02<;\x03\x02\x02\x02" +
		"<=\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x05\x04\x03\x02?@\b\x02\x01\x02" +
		"@N\x03\x02\x02\x02AC\x07\xBC\x02\x02BD\x07\xC1\x02\x02CB\x03\x02\x02\x02" +
		"CD\x03\x02\x02\x02DE\x03\x02\x02\x02EF\x05\x04\x03\x02FG\b\x02\x01\x02" +
		"GN\x03\x02\x02\x02HI\x07\xBD\x02\x02IJ\x07\xC1\x02\x02JK\x05\x04\x03\x02" +
		"KL\b\x02\x01\x02LN\x03\x02\x02\x02M\b\x03\x02\x02\x02M\r\x03\x02\x02\x02" +
		"M\x12\x03\x02\x02\x02M\x17\x03\x02\x02\x02M\x1C\x03\x02\x02\x02M \x03" +
		"\x02\x02\x02M$\x03\x02\x02\x02M0\x03\x02\x02\x02M5\x03\x02\x02\x02M:\x03" +
		"\x02\x02\x02MA\x03\x02\x02\x02MH\x03\x02\x02\x02N\x03\x03\x02\x02\x02" +
		"OP\t\x02\x02\x02P\x05\x03\x02\x02\x02QR\b\x04\x01\x02RS\x07a\x02\x02S" +
		"b\b\x04\x01\x02TU\x07+\x02\x02Ub\b\x04\x01\x02VW\x07\xBF\x02\x02Wb\b\x04" +
		"\x01\x02XY\x07\x80\x02\x02YZ\x05\x06\x04\x02Z[\x07\x81\x02\x02[\\\b\x04" +
		"\x01\x02\\b\x03\x02\x02\x02]^\x07\x8E\x02\x02^_\x05\x06\x04\x07_`\b\x04" +
		"\x01\x02`b\x03\x02\x02\x02aQ\x03\x02\x02\x02aT\x03\x02\x02\x02aV\x03\x02" +
		"\x02\x02aX\x03\x02\x02\x02a]\x03\x02\x02\x02by\x03\x02\x02\x02cd\f\x06" +
		"\x02\x02de\x07\x9B\x02\x02ef\x05\x06\x04\x07fg\b\x04\x01\x02gx\x03\x02" +
		"\x02\x02hi\f\x05\x02\x02ij\x07\x9C\x02\x02jk\x05\x06\x04\x06kl\b\x04\x01" +
		"\x02lx\x03\x02\x02\x02mn\f\x04\x02\x02no\x07\x98\x02\x02op\x05\x06\x04" +
		"\x05pq\b\x04\x01\x02qx\x03\x02\x02\x02rs\f\x03\x02\x02st\x07\x99\x02\x02" +
		"tu\x05\x06\x04\x04uv\b\x04\x01\x02vx\x03\x02\x02\x02wc\x03\x02\x02\x02" +
		"wh\x03\x02\x02\x02wm\x03\x02\x02\x02wr\x03\x02\x02\x02x{\x03\x02\x02\x02" +
		"yw\x03\x02\x02\x02yz\x03\x02\x02\x02z\x07\x03\x02\x02\x02{y\x03\x02\x02" +
		"\x02\n\'+<CMawy";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CSharpPreprocessorParser.__ATN) {
			CSharpPreprocessorParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CSharpPreprocessorParser._serializedATN));
		}

		return CSharpPreprocessorParser.__ATN;
	}

}

export class Preprocessor_directiveContext extends ParserRuleContext {
	public value: boolean;
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpPreprocessorParser.RULE_preprocessor_directive; }
	public copyFrom(ctx: Preprocessor_directiveContext): void {
		super.copyFrom(ctx);
		this.value = ctx.value;
	}
}
export class PreprocessorDeclarationContext extends Preprocessor_directiveContext {
	public _CONDITIONAL_SYMBOL: Token;
	public DEFINE(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.DEFINE, 0); }
	public CONDITIONAL_SYMBOL(): TerminalNode { return this.getToken(CSharpPreprocessorParser.CONDITIONAL_SYMBOL, 0); }
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getRuleContext(0, Directive_new_line_or_sharpContext);
	}
	public UNDEF(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.UNDEF, 0); }
	constructor(ctx: Preprocessor_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterPreprocessorDeclaration) {
			listener.enterPreprocessorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitPreprocessorDeclaration) {
			listener.exitPreprocessorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorDeclaration) {
			return visitor.visitPreprocessorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorConditionalContext extends Preprocessor_directiveContext {
	public _expr: Preprocessor_expressionContext;
	public IF(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.IF, 0); }
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getRuleContext(0, Directive_new_line_or_sharpContext);
	}
	public preprocessor_expression(): Preprocessor_expressionContext | undefined {
		return this.tryGetRuleContext(0, Preprocessor_expressionContext);
	}
	public ELIF(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.ELIF, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.ELSE, 0); }
	public ENDIF(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.ENDIF, 0); }
	constructor(ctx: Preprocessor_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterPreprocessorConditional) {
			listener.enterPreprocessorConditional(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitPreprocessorConditional) {
			listener.exitPreprocessorConditional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorConditional) {
			return visitor.visitPreprocessorConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorLineContext extends Preprocessor_directiveContext {
	public LINE(): TerminalNode { return this.getToken(CSharpPreprocessorParser.LINE, 0); }
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getRuleContext(0, Directive_new_line_or_sharpContext);
	}
	public DIGITS(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.DIGITS, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.DEFAULT, 0); }
	public DIRECTIVE_HIDDEN(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.DIRECTIVE_HIDDEN, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.STRING, 0); }
	constructor(ctx: Preprocessor_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterPreprocessorLine) {
			listener.enterPreprocessorLine(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitPreprocessorLine) {
			listener.exitPreprocessorLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorLine) {
			return visitor.visitPreprocessorLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorDiagnosticContext extends Preprocessor_directiveContext {
	public ERROR(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.ERROR, 0); }
	public TEXT(): TerminalNode { return this.getToken(CSharpPreprocessorParser.TEXT, 0); }
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getRuleContext(0, Directive_new_line_or_sharpContext);
	}
	public WARNING(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.WARNING, 0); }
	constructor(ctx: Preprocessor_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterPreprocessorDiagnostic) {
			listener.enterPreprocessorDiagnostic(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitPreprocessorDiagnostic) {
			listener.exitPreprocessorDiagnostic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorDiagnostic) {
			return visitor.visitPreprocessorDiagnostic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorRegionContext extends Preprocessor_directiveContext {
	public REGION(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.REGION, 0); }
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getRuleContext(0, Directive_new_line_or_sharpContext);
	}
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.TEXT, 0); }
	public ENDREGION(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.ENDREGION, 0); }
	constructor(ctx: Preprocessor_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterPreprocessorRegion) {
			listener.enterPreprocessorRegion(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitPreprocessorRegion) {
			listener.exitPreprocessorRegion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorRegion) {
			return visitor.visitPreprocessorRegion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorPragmaContext extends Preprocessor_directiveContext {
	public PRAGMA(): TerminalNode { return this.getToken(CSharpPreprocessorParser.PRAGMA, 0); }
	public TEXT(): TerminalNode { return this.getToken(CSharpPreprocessorParser.TEXT, 0); }
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getRuleContext(0, Directive_new_line_or_sharpContext);
	}
	constructor(ctx: Preprocessor_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterPreprocessorPragma) {
			listener.enterPreprocessorPragma(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitPreprocessorPragma) {
			listener.exitPreprocessorPragma(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorPragma) {
			return visitor.visitPreprocessorPragma(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Directive_new_line_or_sharpContext extends ParserRuleContext {
	public DIRECTIVE_NEW_LINE(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.DIRECTIVE_NEW_LINE, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpPreprocessorParser.RULE_directive_new_line_or_sharp; }
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterDirective_new_line_or_sharp) {
			listener.enterDirective_new_line_or_sharp(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitDirective_new_line_or_sharp) {
			listener.exitDirective_new_line_or_sharp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitDirective_new_line_or_sharp) {
			return visitor.visitDirective_new_line_or_sharp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Preprocessor_expressionContext extends ParserRuleContext {
	public value: String;
	public _expr1: Preprocessor_expressionContext;
	public _CONDITIONAL_SYMBOL: Token;
	public _expr: Preprocessor_expressionContext;
	public _expr2: Preprocessor_expressionContext;
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.FALSE, 0); }
	public CONDITIONAL_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.CONDITIONAL_SYMBOL, 0); }
	public OPEN_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.CLOSE_PARENS, 0); }
	public preprocessor_expression(): Preprocessor_expressionContext[];
	public preprocessor_expression(i: number): Preprocessor_expressionContext;
	public preprocessor_expression(i?: number): Preprocessor_expressionContext | Preprocessor_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Preprocessor_expressionContext);
		} else {
			return this.getRuleContext(i, Preprocessor_expressionContext);
		}
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.BANG, 0); }
	public OP_EQ(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.OP_EQ, 0); }
	public OP_NE(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.OP_NE, 0); }
	public OP_AND(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.OP_AND, 0); }
	public OP_OR(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.OP_OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpPreprocessorParser.RULE_preprocessor_expression; }
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterPreprocessor_expression) {
			listener.enterPreprocessor_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitPreprocessor_expression) {
			listener.exitPreprocessor_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessor_expression) {
			return visitor.visitPreprocessor_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


