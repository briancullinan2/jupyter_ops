// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/python/python/PythonParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { PythonParserListener } from "./PythonParserListener";

export class PythonParser extends PythonParserBase {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly LINE_BREAK = 3;
	public static readonly DEF = 4;
	public static readonly RETURN = 5;
	public static readonly RAISE = 6;
	public static readonly FROM = 7;
	public static readonly IMPORT = 8;
	public static readonly NONLOCAL = 9;
	public static readonly AS = 10;
	public static readonly GLOBAL = 11;
	public static readonly ASSERT = 12;
	public static readonly IF = 13;
	public static readonly ELIF = 14;
	public static readonly ELSE = 15;
	public static readonly WHILE = 16;
	public static readonly FOR = 17;
	public static readonly IN = 18;
	public static readonly TRY = 19;
	public static readonly NONE = 20;
	public static readonly FINALLY = 21;
	public static readonly WITH = 22;
	public static readonly EXCEPT = 23;
	public static readonly LAMBDA = 24;
	public static readonly OR = 25;
	public static readonly AND = 26;
	public static readonly NOT = 27;
	public static readonly IS = 28;
	public static readonly CLASS = 29;
	public static readonly YIELD = 30;
	public static readonly DEL = 31;
	public static readonly PASS = 32;
	public static readonly CONTINUE = 33;
	public static readonly BREAK = 34;
	public static readonly ASYNC = 35;
	public static readonly AWAIT = 36;
	public static readonly PRINT = 37;
	public static readonly EXEC = 38;
	public static readonly TRUE = 39;
	public static readonly FALSE = 40;
	public static readonly DOT = 41;
	public static readonly ELLIPSIS = 42;
	public static readonly REVERSE_QUOTE = 43;
	public static readonly STAR = 44;
	public static readonly COMMA = 45;
	public static readonly COLON = 46;
	public static readonly SEMI_COLON = 47;
	public static readonly POWER = 48;
	public static readonly ASSIGN = 49;
	public static readonly OR_OP = 50;
	public static readonly XOR = 51;
	public static readonly AND_OP = 52;
	public static readonly LEFT_SHIFT = 53;
	public static readonly RIGHT_SHIFT = 54;
	public static readonly ADD = 55;
	public static readonly MINUS = 56;
	public static readonly DIV = 57;
	public static readonly MOD = 58;
	public static readonly IDIV = 59;
	public static readonly NOT_OP = 60;
	public static readonly LESS_THAN = 61;
	public static readonly GREATER_THAN = 62;
	public static readonly EQUALS = 63;
	public static readonly GT_EQ = 64;
	public static readonly LT_EQ = 65;
	public static readonly NOT_EQ_1 = 66;
	public static readonly NOT_EQ_2 = 67;
	public static readonly AT = 68;
	public static readonly ARROW = 69;
	public static readonly ADD_ASSIGN = 70;
	public static readonly SUB_ASSIGN = 71;
	public static readonly MULT_ASSIGN = 72;
	public static readonly AT_ASSIGN = 73;
	public static readonly DIV_ASSIGN = 74;
	public static readonly MOD_ASSIGN = 75;
	public static readonly AND_ASSIGN = 76;
	public static readonly OR_ASSIGN = 77;
	public static readonly XOR_ASSIGN = 78;
	public static readonly LEFT_SHIFT_ASSIGN = 79;
	public static readonly RIGHT_SHIFT_ASSIGN = 80;
	public static readonly POWER_ASSIGN = 81;
	public static readonly IDIV_ASSIGN = 82;
	public static readonly STRING = 83;
	public static readonly DECIMAL_INTEGER = 84;
	public static readonly OCT_INTEGER = 85;
	public static readonly HEX_INTEGER = 86;
	public static readonly BIN_INTEGER = 87;
	public static readonly IMAG_NUMBER = 88;
	public static readonly FLOAT_NUMBER = 89;
	public static readonly OPEN_PAREN = 90;
	public static readonly CLOSE_PAREN = 91;
	public static readonly OPEN_BRACE = 92;
	public static readonly CLOSE_BRACE = 93;
	public static readonly OPEN_BRACKET = 94;
	public static readonly CLOSE_BRACKET = 95;
	public static readonly NAME = 96;
	public static readonly LINE_JOIN = 97;
	public static readonly NEWLINE = 98;
	public static readonly WS = 99;
	public static readonly COMMENT = 100;
	public static readonly RULE_root = 0;
	public static readonly RULE_single_input = 1;
	public static readonly RULE_file_input = 2;
	public static readonly RULE_eval_input = 3;
	public static readonly RULE_stmt = 4;
	public static readonly RULE_compound_stmt = 5;
	public static readonly RULE_suite = 6;
	public static readonly RULE_decorator = 7;
	public static readonly RULE_elif_clause = 8;
	public static readonly RULE_else_clause = 9;
	public static readonly RULE_finally_clause = 10;
	public static readonly RULE_with_item = 11;
	public static readonly RULE_except_clause = 12;
	public static readonly RULE_classdef = 13;
	public static readonly RULE_funcdef = 14;
	public static readonly RULE_typedargslist = 15;
	public static readonly RULE_args = 16;
	public static readonly RULE_kwargs = 17;
	public static readonly RULE_def_parameters = 18;
	public static readonly RULE_def_parameter = 19;
	public static readonly RULE_named_parameter = 20;
	public static readonly RULE_simple_stmt = 21;
	public static readonly RULE_small_stmt = 22;
	public static readonly RULE_testlist_star_expr = 23;
	public static readonly RULE_star_expr = 24;
	public static readonly RULE_assign_part = 25;
	public static readonly RULE_exprlist = 26;
	public static readonly RULE_import_as_names = 27;
	public static readonly RULE_import_as_name = 28;
	public static readonly RULE_dotted_as_names = 29;
	public static readonly RULE_dotted_as_name = 30;
	public static readonly RULE_test = 31;
	public static readonly RULE_varargslist = 32;
	public static readonly RULE_vardef_parameters = 33;
	public static readonly RULE_vardef_parameter = 34;
	public static readonly RULE_varargs = 35;
	public static readonly RULE_varkwargs = 36;
	public static readonly RULE_logical_test = 37;
	public static readonly RULE_comparison = 38;
	public static readonly RULE_expr = 39;
	public static readonly RULE_atom = 40;
	public static readonly RULE_dictorsetmaker = 41;
	public static readonly RULE_testlist_comp = 42;
	public static readonly RULE_testlist = 43;
	public static readonly RULE_dotted_name = 44;
	public static readonly RULE_name = 45;
	public static readonly RULE_number = 46;
	public static readonly RULE_integer = 47;
	public static readonly RULE_yield_expr = 48;
	public static readonly RULE_yield_arg = 49;
	public static readonly RULE_trailer = 50;
	public static readonly RULE_arguments = 51;
	public static readonly RULE_arglist = 52;
	public static readonly RULE_argument = 53;
	public static readonly RULE_subscriptlist = 54;
	public static readonly RULE_subscript = 55;
	public static readonly RULE_sliceop = 56;
	public static readonly RULE_comp_for = 57;
	public static readonly RULE_comp_iter = 58;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "single_input", "file_input", "eval_input", "stmt", "compound_stmt", 
		"suite", "decorator", "elif_clause", "else_clause", "finally_clause", 
		"with_item", "except_clause", "classdef", "funcdef", "typedargslist", 
		"args", "kwargs", "def_parameters", "def_parameter", "named_parameter", 
		"simple_stmt", "small_stmt", "testlist_star_expr", "star_expr", "assign_part", 
		"exprlist", "import_as_names", "import_as_name", "dotted_as_names", "dotted_as_name", 
		"test", "varargslist", "vardef_parameters", "vardef_parameter", "varargs", 
		"varkwargs", "logical_test", "comparison", "expr", "atom", "dictorsetmaker", 
		"testlist_comp", "testlist", "dotted_name", "name", "number", "integer", 
		"yield_expr", "yield_arg", "trailer", "arguments", "arglist", "argument", 
		"subscriptlist", "subscript", "sliceop", "comp_for", "comp_iter",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'def'", "'return'", "'raise'", 
		"'from'", "'import'", "'nonlocal'", "'as'", "'global'", "'assert'", "'if'", 
		"'elif'", "'else'", "'while'", "'for'", "'in'", "'try'", "'None'", "'finally'", 
		"'with'", "'except'", "'lambda'", "'or'", "'and'", "'not'", "'is'", "'class'", 
		"'yield'", "'del'", "'pass'", "'continue'", "'break'", "'async'", "'await'", 
		"'print'", "'exec'", "'True'", "'False'", "'.'", "'...'", "'`'", "'*'", 
		"','", "':'", "';'", "'**'", "'='", "'|'", "'^'", "'&'", "'<<'", "'>>'", 
		"'+'", "'-'", "'/'", "'%'", "'//'", "'~'", "'<'", "'>'", "'=='", "'>='", 
		"'<='", "'<>'", "'!='", "'@'", "'->'", "'+='", "'-='", "'*='", "'@='", 
		"'/='", "'%='", "'&='", "'|='", "'^='", "'<<='", "'>>='", "'**='", "'//='", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'('", "')'", "'{'", "'}'", "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "LINE_BREAK", "DEF", "RETURN", "RAISE", 
		"FROM", "IMPORT", "NONLOCAL", "AS", "GLOBAL", "ASSERT", "IF", "ELIF", 
		"ELSE", "WHILE", "FOR", "IN", "TRY", "NONE", "FINALLY", "WITH", "EXCEPT", 
		"LAMBDA", "OR", "AND", "NOT", "IS", "CLASS", "YIELD", "DEL", "PASS", "CONTINUE", 
		"BREAK", "ASYNC", "AWAIT", "PRINT", "EXEC", "TRUE", "FALSE", "DOT", "ELLIPSIS", 
		"REVERSE_QUOTE", "STAR", "COMMA", "COLON", "SEMI_COLON", "POWER", "ASSIGN", 
		"OR_OP", "XOR", "AND_OP", "LEFT_SHIFT", "RIGHT_SHIFT", "ADD", "MINUS", 
		"DIV", "MOD", "IDIV", "NOT_OP", "LESS_THAN", "GREATER_THAN", "EQUALS", 
		"GT_EQ", "LT_EQ", "NOT_EQ_1", "NOT_EQ_2", "AT", "ARROW", "ADD_ASSIGN", 
		"SUB_ASSIGN", "MULT_ASSIGN", "AT_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", 
		"AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "LEFT_SHIFT_ASSIGN", "RIGHT_SHIFT_ASSIGN", 
		"POWER_ASSIGN", "IDIV_ASSIGN", "STRING", "DECIMAL_INTEGER", "OCT_INTEGER", 
		"HEX_INTEGER", "BIN_INTEGER", "IMAG_NUMBER", "FLOAT_NUMBER", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "OPEN_BRACKET", "CLOSE_BRACKET", 
		"NAME", "LINE_JOIN", "NEWLINE", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PythonParser._LITERAL_NAMES, PythonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PythonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "PythonParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return PythonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return PythonParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PythonParser._ATN, this);
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let _localctx: RootContext = new RootContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PythonParser.RULE_root);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 118;
				this.single_input();
				}
				break;

			case 2:
				{
				this.state = 119;
				this.file_input();
				}
				break;

			case 3:
				{
				this.state = 120;
				this.eval_input();
				}
				break;
			}
			this.state = 123;
			this.match(PythonParser.EOF);
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
	public single_input(): Single_inputContext {
		let _localctx: Single_inputContext = new Single_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, PythonParser.RULE_single_input);
		try {
			this.state = 130;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				this.match(PythonParser.LINE_BREAK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
				this.simple_stmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 127;
				this.compound_stmt();
				this.state = 128;
				this.match(PythonParser.LINE_BREAK);
				}
				break;
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
	public file_input(): File_inputContext {
		let _localctx: File_inputContext = new File_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PythonParser.RULE_file_input);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 134;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						this.state = 132;
						this.match(PythonParser.LINE_BREAK);
						}
						break;

					case 2:
						{
						this.state = 133;
						this.stmt();
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 136;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public eval_input(): Eval_inputContext {
		let _localctx: Eval_inputContext = new Eval_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, PythonParser.RULE_eval_input);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.testlist();
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PythonParser.LINE_BREAK) {
				{
				{
				this.state = 139;
				this.match(PythonParser.LINE_BREAK);
				}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PythonParser.RULE_stmt);
		try {
			this.state = 147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 145;
				this.simple_stmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 146;
				this.compound_stmt();
				}
				break;
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
	public compound_stmt(): Compound_stmtContext {
		let _localctx: Compound_stmtContext = new Compound_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PythonParser.RULE_compound_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.state = 223;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				_localctx = new If_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 149;
				this.match(PythonParser.IF);
				this.state = 150;
				(_localctx as If_stmtContext)._cond = this.test();
				this.state = 151;
				this.match(PythonParser.COLON);
				this.state = 152;
				this.suite();
				this.state = 156;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 153;
						this.elif_clause();
						}
						}
					}
					this.state = 158;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				}
				this.state = 160;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 159;
					this.else_clause();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new While_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 162;
				this.match(PythonParser.WHILE);
				this.state = 163;
				this.test();
				this.state = 164;
				this.match(PythonParser.COLON);
				this.state = 165;
				this.suite();
				this.state = 167;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 166;
					this.else_clause();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new For_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.ASYNC) {
					{
					this.state = 169;
					this.match(PythonParser.ASYNC);
					}
				}

				this.state = 172;
				this.match(PythonParser.FOR);
				this.state = 173;
				this.exprlist();
				this.state = 174;
				this.match(PythonParser.IN);
				this.state = 175;
				this.testlist();
				this.state = 176;
				this.match(PythonParser.COLON);
				this.state = 177;
				this.suite();
				this.state = 179;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 178;
					this.else_clause();
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new Try_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 181;
				this.match(PythonParser.TRY);
				this.state = 182;
				this.match(PythonParser.COLON);
				this.state = 183;
				this.suite();
				this.state = 196;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PythonParser.EXCEPT:
					{
					this.state = 185;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 184;
							this.except_clause();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 187;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 190;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						this.state = 189;
						this.else_clause();
						}
						break;
					}
					this.state = 193;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						this.state = 192;
						this.finally_clause();
						}
						break;
					}
					}
					break;
				case PythonParser.FINALLY:
					{
					this.state = 195;
					this.finally_clause();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 5:
				_localctx = new With_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.ASYNC) {
					{
					this.state = 198;
					this.match(PythonParser.ASYNC);
					}
				}

				this.state = 201;
				this.match(PythonParser.WITH);
				this.state = 202;
				this.with_item();
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PythonParser.COMMA) {
					{
					{
					this.state = 203;
					this.match(PythonParser.COMMA);
					this.state = 204;
					this.with_item();
					}
					}
					this.state = 209;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 210;
				this.match(PythonParser.COLON);
				this.state = 211;
				this.suite();
				}
				break;

			case 6:
				_localctx = new Class_or_func_def_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PythonParser.AT) {
					{
					{
					this.state = 213;
					this.decorator();
					}
					}
					this.state = 218;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 221;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PythonParser.CLASS:
					{
					this.state = 219;
					this.classdef();
					}
					break;
				case PythonParser.DEF:
				case PythonParser.ASYNC:
					{
					this.state = 220;
					this.funcdef();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
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
	public suite(): SuiteContext {
		let _localctx: SuiteContext = new SuiteContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PythonParser.RULE_suite);
		try {
			let _alt: number;
			this.state = 235;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 225;
				this.simple_stmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 226;
				this.match(PythonParser.LINE_BREAK);
				this.state = 227;
				this.match(PythonParser.INDENT);
				this.state = 229;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 228;
						this.stmt();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 231;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 233;
				this.match(PythonParser.DEDENT);
				}
				break;
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
	public decorator(): DecoratorContext {
		let _localctx: DecoratorContext = new DecoratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PythonParser.RULE_decorator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this.match(PythonParser.AT);
			this.state = 238;
			this.dotted_name(0);
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PythonParser.OPEN_PAREN) {
				{
				this.state = 239;
				this.match(PythonParser.OPEN_PAREN);
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PythonParser.NONE) | (1 << PythonParser.LAMBDA) | (1 << PythonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (PythonParser.AWAIT - 36)) | (1 << (PythonParser.PRINT - 36)) | (1 << (PythonParser.EXEC - 36)) | (1 << (PythonParser.TRUE - 36)) | (1 << (PythonParser.FALSE - 36)) | (1 << (PythonParser.ELLIPSIS - 36)) | (1 << (PythonParser.REVERSE_QUOTE - 36)) | (1 << (PythonParser.STAR - 36)) | (1 << (PythonParser.POWER - 36)) | (1 << (PythonParser.ADD - 36)) | (1 << (PythonParser.MINUS - 36)) | (1 << (PythonParser.NOT_OP - 36)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (PythonParser.STRING - 83)) | (1 << (PythonParser.DECIMAL_INTEGER - 83)) | (1 << (PythonParser.OCT_INTEGER - 83)) | (1 << (PythonParser.HEX_INTEGER - 83)) | (1 << (PythonParser.BIN_INTEGER - 83)) | (1 << (PythonParser.IMAG_NUMBER - 83)) | (1 << (PythonParser.FLOAT_NUMBER - 83)) | (1 << (PythonParser.OPEN_PAREN - 83)) | (1 << (PythonParser.OPEN_BRACE - 83)) | (1 << (PythonParser.OPEN_BRACKET - 83)) | (1 << (PythonParser.NAME - 83)))) !== 0)) {
					{
					this.state = 240;
					this.arglist();
					}
				}

				this.state = 243;
				this.match(PythonParser.CLOSE_PAREN);
				}
			}

			this.state = 246;
			this.match(PythonParser.LINE_BREAK);
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
	public elif_clause(): Elif_clauseContext {
		let _localctx: Elif_clauseContext = new Elif_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PythonParser.RULE_elif_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this.match(PythonParser.ELIF);
			this.state = 249;
			this.test();
			this.state = 250;
			this.match(PythonParser.COLON);
			this.state = 251;
			this.suite();
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
	public else_clause(): Else_clauseContext {
		let _localctx: Else_clauseContext = new Else_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PythonParser.RULE_else_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this.match(PythonParser.ELSE);
			this.state = 254;
			this.match(PythonParser.COLON);
			this.state = 255;
			this.suite();
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
	public finally_clause(): Finally_clauseContext {
		let _localctx: Finally_clauseContext = new Finally_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PythonParser.RULE_finally_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.match(PythonParser.FINALLY);
			this.state = 258;
			this.match(PythonParser.COLON);
			this.state = 259;
			this.suite();
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
	public with_item(): With_itemContext {
		let _localctx: With_itemContext = new With_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PythonParser.RULE_with_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this.test();
			this.state = 264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PythonParser.AS) {
				{
				this.state = 262;
				this.match(PythonParser.AS);
				this.state = 263;
				this.expr(0);
				}
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
	// @RuleVersion(0)
	public except_clause(): Except_clauseContext {
		let _localctx: Except_clauseContext = new Except_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PythonParser.RULE_except_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.match(PythonParser.EXCEPT);
			this.state = 280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PythonParser.NONE) | (1 << PythonParser.LAMBDA) | (1 << PythonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (PythonParser.AWAIT - 36)) | (1 << (PythonParser.PRINT - 36)) | (1 << (PythonParser.EXEC - 36)) | (1 << (PythonParser.TRUE - 36)) | (1 << (PythonParser.FALSE - 36)) | (1 << (PythonParser.ELLIPSIS - 36)) | (1 << (PythonParser.REVERSE_QUOTE - 36)) | (1 << (PythonParser.ADD - 36)) | (1 << (PythonParser.MINUS - 36)) | (1 << (PythonParser.NOT_OP - 36)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (PythonParser.STRING - 83)) | (1 << (PythonParser.DECIMAL_INTEGER - 83)) | (1 << (PythonParser.OCT_INTEGER - 83)) | (1 << (PythonParser.HEX_INTEGER - 83)) | (1 << (PythonParser.BIN_INTEGER - 83)) | (1 << (PythonParser.IMAG_NUMBER - 83)) | (1 << (PythonParser.FLOAT_NUMBER - 83)) | (1 << (PythonParser.OPEN_PAREN - 83)) | (1 << (PythonParser.OPEN_BRACE - 83)) | (1 << (PythonParser.OPEN_BRACKET - 83)) | (1 << (PythonParser.NAME - 83)))) !== 0)) {
				{
				this.state = 267;
				this.test();
				this.state = 278;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 268;
					if (!(CheckVersion(2))) {
						throw new FailedPredicateException(this, "CheckVersion(2)");
					}
					this.state = 269;
					this.match(PythonParser.COMMA);
					this.state = 270;
					this.name();
					SetVersion(2);
					}
					break;

				case 2:
					{
					this.state = 273;
					if (!(CheckVersion(3))) {
						throw new FailedPredicateException(this, "CheckVersion(3)");
					}
					this.state = 274;
					this.match(PythonParser.AS);
					this.state = 275;
					this.name();
					SetVersion(3);
					}
					break;
				}
				}
			}

			this.state = 282;
			this.match(PythonParser.COLON);
			this.state = 283;
			this.suite();
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
	public classdef(): ClassdefContext {
		let _localctx: ClassdefContext = new ClassdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, PythonParser.RULE_classdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.match(PythonParser.CLASS);
			this.state = 286;
			this.name();
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PythonParser.OPEN_PAREN) {
				{
				this.state = 287;
				this.match(PythonParser.OPEN_PAREN);
				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PythonParser.NONE) | (1 << PythonParser.LAMBDA) | (1 << PythonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (PythonParser.AWAIT - 36)) | (1 << (PythonParser.PRINT - 36)) | (1 << (PythonParser.EXEC - 36)) | (1 << (PythonParser.TRUE - 36)) | (1 << (PythonParser.FALSE - 36)) | (1 << (PythonParser.ELLIPSIS - 36)) | (1 << (PythonParser.REVERSE_QUOTE - 36)) | (1 << (PythonParser.STAR - 36)) | (1 << (PythonParser.POWER - 36)) | (1 << (PythonParser.ADD - 36)) | (1 << (PythonParser.MINUS - 36)) | (1 << (PythonParser.NOT_OP - 36)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (PythonParser.STRING - 83)) | (1 << (PythonParser.DECIMAL_INTEGER - 83)) | (1 << (PythonParser.OCT_INTEGER - 83)) | (1 << (PythonParser.HEX_INTEGER - 83)) | (1 << (PythonParser.BIN_INTEGER - 83)) | (1 << (PythonParser.IMAG_NUMBER - 83)) | (1 << (PythonParser.FLOAT_NUMBER - 83)) | (1 << (PythonParser.OPEN_PAREN - 83)) | (1 << (PythonParser.OPEN_BRACE - 83)) | (1 << (PythonParser.OPEN_BRACKET - 83)) | (1 << (PythonParser.NAME - 83)))) !== 0)) {
					{
					this.state = 288;
					this.arglist();
					}
				}

				this.state = 291;
				this.match(PythonParser.CLOSE_PAREN);
				}
			}

			this.state = 294;
			this.match(PythonParser.COLON);
			this.state = 295;
			this.suite();
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
	public funcdef(): FuncdefContext {
		let _localctx: FuncdefContext = new FuncdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, PythonParser.RULE_funcdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PythonParser.ASYNC) {
				{
				this.state = 297;
				this.match(PythonParser.ASYNC);
				}
			}

			this.state = 300;
			this.match(PythonParser.DEF);
			this.state = 301;
			this.name();
			this.state = 302;
			this.match(PythonParser.OPEN_PAREN);
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (PythonParser.TRUE - 39)) | (1 << (PythonParser.FALSE - 39)) | (1 << (PythonParser.STAR - 39)) | (1 << (PythonParser.POWER - 39)))) !== 0) || _la === PythonParser.NAME) {
				{
				this.state = 303;
				this.typedargslist();
				}
			}

			this.state = 306;
			this.match(PythonParser.CLOSE_PAREN);
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PythonParser.ARROW) {
				{
				this.state = 307;
				this.match(PythonParser.ARROW);
				this.state = 308;
				this.test();
				}
			}

			this.state = 311;
			this.match(PythonParser.COLON);
			this.state = 312;
			this.suite();
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
	public typedargslist(): TypedargslistContext {
		let _localctx: TypedargslistContext = new TypedargslistContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, PythonParser.RULE_typedargslist);
		let _la: number;
		try {
			this.state = 338;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 317;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 314;
					this.def_parameters();
					this.state = 315;
					this.match(PythonParser.COMMA);
					}
					break;
				}
				this.state = 329;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PythonParser.STAR:
					{
					this.state = 319;
					this.args();
					this.state = 322;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
					case 1:
						{
						this.state = 320;
						this.match(PythonParser.COMMA);
						this.state = 321;
						this.def_parameters();
						}
						break;
					}
					this.state = 326;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
					case 1:
						{
						this.state = 324;
						this.match(PythonParser.COMMA);
						this.state = 325;
						this.kwargs();
						}
						break;
					}
					}
					break;
				case PythonParser.POWER:
					{
					this.state = 328;
					this.kwargs();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.COMMA) {
					{
					this.state = 331;
					this.match(PythonParser.COMMA);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 334;
				this.def_parameters();
				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.COMMA) {
					{
					this.state = 335;
					this.match(PythonParser.COMMA);
					}
				}

				}
				break;
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
	public args(): ArgsContext {
		let _localctx: ArgsContext = new ArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, PythonParser.RULE_args);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.match(PythonParser.STAR);
			this.state = 341;
			this.named_parameter();
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
	public kwargs(): KwargsContext {
		let _localctx: KwargsContext = new KwargsContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, PythonParser.RULE_kwargs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.match(PythonParser.POWER);
			this.state = 344;
			this.named_parameter();
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
	public def_parameters(): Def_parametersContext {
		let _localctx: Def_parametersContext = new Def_parametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, PythonParser.RULE_def_parameters);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.def_parameter();
			this.state = 351;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 347;
					this.match(PythonParser.COMMA);
					this.state = 348;
					this.def_parameter();
					}
					}
				}
				this.state = 353;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
	// @RuleVersion(0)
	public def_parameter(): Def_parameterContext {
		let _localctx: Def_parameterContext = new Def_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, PythonParser.RULE_def_parameter);
		let _la: number;
		try {
			this.state = 360;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PythonParser.TRUE:
			case PythonParser.FALSE:
			case PythonParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 354;
				this.named_parameter();
				this.state = 357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.ASSIGN) {
					{
					this.state = 355;
					this.match(PythonParser.ASSIGN);
					this.state = 356;
					this.test();
					}
				}

				}
				break;
			case PythonParser.STAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 359;
				this.match(PythonParser.STAR);
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
	public named_parameter(): Named_parameterContext {
		let _localctx: Named_parameterContext = new Named_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, PythonParser.RULE_named_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			this.name();
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PythonParser.COLON) {
				{
				this.state = 363;
				this.match(PythonParser.COLON);
				this.state = 364;
				this.test();
				}
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
	// @RuleVersion(0)
	public simple_stmt(): Simple_stmtContext {
		let _localctx: Simple_stmtContext = new Simple_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, PythonParser.RULE_simple_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			this.small_stmt();
			this.state = 372;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 368;
					this.match(PythonParser.SEMI_COLON);
					this.state = 369;
					this.small_stmt();
					}
					}
				}
				this.state = 374;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			}
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PythonParser.SEMI_COLON) {
				{
				this.state = 375;
				this.match(PythonParser.SEMI_COLON);
				}
			}

			this.state = 378;
			_la = this._input.LA(1);
			if (!(_la === PythonParser.EOF || _la === PythonParser.LINE_BREAK)) {
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
	// @RuleVersion(0)
	public small_stmt(): Small_stmtContext {
		let _localctx: Small_stmtContext = new Small_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, PythonParser.RULE_small_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.state = 504;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				_localctx = new Expr_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 380;
				this.testlist_star_expr();
				this.state = 382;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 381;
					this.assign_part();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new Print_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 384;
				if (!(CheckVersion(2))) {
					throw new FailedPredicateException(this, "CheckVersion(2)");
				}
				this.state = 385;
				this.match(PythonParser.PRINT);
				this.state = 408;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PythonParser.NONE:
				case PythonParser.LAMBDA:
				case PythonParser.NOT:
				case PythonParser.AWAIT:
				case PythonParser.PRINT:
				case PythonParser.EXEC:
				case PythonParser.TRUE:
				case PythonParser.FALSE:
				case PythonParser.ELLIPSIS:
				case PythonParser.REVERSE_QUOTE:
				case PythonParser.ADD:
				case PythonParser.MINUS:
				case PythonParser.NOT_OP:
				case PythonParser.STRING:
				case PythonParser.DECIMAL_INTEGER:
				case PythonParser.OCT_INTEGER:
				case PythonParser.HEX_INTEGER:
				case PythonParser.BIN_INTEGER:
				case PythonParser.IMAG_NUMBER:
				case PythonParser.FLOAT_NUMBER:
				case PythonParser.OPEN_PAREN:
				case PythonParser.OPEN_BRACE:
				case PythonParser.OPEN_BRACKET:
				case PythonParser.NAME:
					{
					{
					this.state = 386;
					this.test();
					this.state = 391;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 387;
							this.match(PythonParser.COMMA);
							this.state = 388;
							this.test();
							}
							}
						}
						this.state = 393;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
					}
					this.state = 395;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === PythonParser.COMMA) {
						{
						this.state = 394;
						this.match(PythonParser.COMMA);
						}
					}

					}
					}
					break;
				case PythonParser.RIGHT_SHIFT:
					{
					this.state = 397;
					this.match(PythonParser.RIGHT_SHIFT);
					this.state = 398;
					this.test();
					{
					this.state = 401;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 399;
							this.match(PythonParser.COMMA);
							this.state = 400;
							this.test();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 403;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 406;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === PythonParser.COMMA) {
						{
						this.state = 405;
						this.match(PythonParser.COMMA);
						}
					}

					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				SetVersion(2);
				}
				break;

			case 3:
				_localctx = new Del_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 412;
				this.match(PythonParser.DEL);
				this.state = 413;
				this.exprlist();
				}
				break;

			case 4:
				_localctx = new Pass_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 414;
				this.match(PythonParser.PASS);
				}
				break;

			case 5:
				_localctx = new Break_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 415;
				this.match(PythonParser.BREAK);
				}
				break;

			case 6:
				_localctx = new Continue_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 416;
				this.match(PythonParser.CONTINUE);
				}
				break;

			case 7:
				_localctx = new Return_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 417;
				this.match(PythonParser.RETURN);
				this.state = 419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PythonParser.NONE) | (1 << PythonParser.LAMBDA) | (1 << PythonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (PythonParser.AWAIT - 36)) | (1 << (PythonParser.PRINT - 36)) | (1 << (PythonParser.EXEC - 36)) | (1 << (PythonParser.TRUE - 36)) | (1 << (PythonParser.FALSE - 36)) | (1 << (PythonParser.ELLIPSIS - 36)) | (1 << (PythonParser.REVERSE_QUOTE - 36)) | (1 << (PythonParser.ADD - 36)) | (1 << (PythonParser.MINUS - 36)) | (1 << (PythonParser.NOT_OP - 36)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (PythonParser.STRING - 83)) | (1 << (PythonParser.DECIMAL_INTEGER - 83)) | (1 << (PythonParser.OCT_INTEGER - 83)) | (1 << (PythonParser.HEX_INTEGER - 83)) | (1 << (PythonParser.BIN_INTEGER - 83)) | (1 << (PythonParser.IMAG_NUMBER - 83)) | (1 << (PythonParser.FLOAT_NUMBER - 83)) | (1 << (PythonParser.OPEN_PAREN - 83)) | (1 << (PythonParser.OPEN_BRACE - 83)) | (1 << (PythonParser.OPEN_BRACKET - 83)) | (1 << (PythonParser.NAME - 83)))) !== 0)) {
					{
					this.state = 418;
					this.testlist();
					}
				}

				}
				break;

			case 8:
				_localctx = new Raise_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 421;
				this.match(PythonParser.RAISE);
				this.state = 431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PythonParser.NONE) | (1 << PythonParser.LAMBDA) | (1 << PythonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (PythonParser.AWAIT - 36)) | (1 << (PythonParser.PRINT - 36)) | (1 << (PythonParser.EXEC - 36)) | (1 << (PythonParser.TRUE - 36)) | (1 << (PythonParser.FALSE - 36)) | (1 << (PythonParser.ELLIPSIS - 36)) | (1 << (PythonParser.REVERSE_QUOTE - 36)) | (1 << (PythonParser.ADD - 36)) | (1 << (PythonParser.MINUS - 36)) | (1 << (PythonParser.NOT_OP - 36)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (PythonParser.STRING - 83)) | (1 << (PythonParser.DECIMAL_INTEGER - 83)) | (1 << (PythonParser.OCT_INTEGER - 83)) | (1 << (PythonParser.HEX_INTEGER - 83)) | (1 << (PythonParser.BIN_INTEGER - 83)) | (1 << (PythonParser.IMAG_NUMBER - 83)) | (1 << (PythonParser.FLOAT_NUMBER - 83)) | (1 << (PythonParser.OPEN_PAREN - 83)) | (1 << (PythonParser.OPEN_BRACE - 83)) | (1 << (PythonParser.OPEN_BRACKET - 83)) | (1 << (PythonParser.NAME - 83)))) !== 0)) {
					{
					this.state = 422;
					this.test();
					this.state = 429;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === PythonParser.COMMA) {
						{
						this.state = 423;
						this.match(PythonParser.COMMA);
						this.state = 424;
						this.test();
						this.state = 427;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === PythonParser.COMMA) {
							{
							this.state = 425;
							this.match(PythonParser.COMMA);
							this.state = 426;
							this.test();
							}
						}

						}
					}

					}
				}

				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.FROM) {
					{
					this.state = 433;
					this.match(PythonParser.FROM);
					this.state = 434;
					this.test();
					}
				}

				}
				break;

			case 9:
				_localctx = new Yield_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 437;
				this.yield_expr();
				}
				break;

			case 10:
				_localctx = new Import_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 438;
				this.match(PythonParser.IMPORT);
				this.state = 439;
				this.dotted_as_names();
				}
				break;

			case 11:
				_localctx = new From_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 440;
				this.match(PythonParser.FROM);
				this.state = 453;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 444;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === PythonParser.DOT || _la === PythonParser.ELLIPSIS) {
						{
						{
						this.state = 441;
						_la = this._input.LA(1);
						if (!(_la === PythonParser.DOT || _la === PythonParser.ELLIPSIS)) {
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
						this.state = 446;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 447;
					this.dotted_name(0);
					}
					break;

				case 2:
					{
					this.state = 449;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 448;
						_la = this._input.LA(1);
						if (!(_la === PythonParser.DOT || _la === PythonParser.ELLIPSIS)) {
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
						this.state = 451;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === PythonParser.DOT || _la === PythonParser.ELLIPSIS);
					}
					break;
				}
				this.state = 455;
				this.match(PythonParser.IMPORT);
				this.state = 462;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PythonParser.STAR:
					{
					this.state = 456;
					this.match(PythonParser.STAR);
					}
					break;
				case PythonParser.OPEN_PAREN:
					{
					this.state = 457;
					this.match(PythonParser.OPEN_PAREN);
					this.state = 458;
					this.import_as_names();
					this.state = 459;
					this.match(PythonParser.CLOSE_PAREN);
					}
					break;
				case PythonParser.TRUE:
				case PythonParser.FALSE:
				case PythonParser.NAME:
					{
					this.state = 461;
					this.import_as_names();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 12:
				_localctx = new Global_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 464;
				this.match(PythonParser.GLOBAL);
				this.state = 465;
				this.name();
				this.state = 470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PythonParser.COMMA) {
					{
					{
					this.state = 466;
					this.match(PythonParser.COMMA);
					this.state = 467;
					this.name();
					}
					}
					this.state = 472;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 13:
				_localctx = new Exec_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 473;
				if (!(CheckVersion(2))) {
					throw new FailedPredicateException(this, "CheckVersion(2)");
				}
				this.state = 474;
				this.match(PythonParser.EXEC);
				this.state = 475;
				this.expr(0);
				this.state = 482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.IN) {
					{
					this.state = 476;
					this.match(PythonParser.IN);
					this.state = 477;
					this.test();
					this.state = 480;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === PythonParser.COMMA) {
						{
						this.state = 478;
						this.match(PythonParser.COMMA);
						this.state = 479;
						this.test();
						}
					}

					}
				}

				SetVersion(2);
				}
				break;

			case 14:
				_localctx = new Assert_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 486;
				this.match(PythonParser.ASSERT);
				this.state = 487;
				this.test();
				this.state = 490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.COMMA) {
					{
					this.state = 488;
					this.match(PythonParser.COMMA);
					this.state = 489;
					this.test();
					}
				}

				}
				break;

			case 15:
				_localctx = new Nonlocal_stmtContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 492;
				if (!(CheckVersion(3))) {
					throw new FailedPredicateException(this, "CheckVersion(3)");
				}
				this.state = 493;
				this.match(PythonParser.NONLOCAL);
				this.state = 494;
				this.name();
				this.state = 499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PythonParser.COMMA) {
					{
					{
					this.state = 495;
					this.match(PythonParser.COMMA);
					this.state = 496;
					this.name();
					}
					}
					this.state = 501;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				SetVersion(3);
				}
				break;
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
	public testlist_star_expr(): Testlist_star_exprContext {
		let _localctx: Testlist_star_exprContext = new Testlist_star_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, PythonParser.RULE_testlist_star_expr);
		try {
			let _alt: number;
			this.state = 521;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 512;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 508;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case PythonParser.NONE:
						case PythonParser.LAMBDA:
						case PythonParser.NOT:
						case PythonParser.AWAIT:
						case PythonParser.PRINT:
						case PythonParser.EXEC:
						case PythonParser.TRUE:
						case PythonParser.FALSE:
						case PythonParser.ELLIPSIS:
						case PythonParser.REVERSE_QUOTE:
						case PythonParser.ADD:
						case PythonParser.MINUS:
						case PythonParser.NOT_OP:
						case PythonParser.STRING:
						case PythonParser.DECIMAL_INTEGER:
						case PythonParser.OCT_INTEGER:
						case PythonParser.HEX_INTEGER:
						case PythonParser.BIN_INTEGER:
						case PythonParser.IMAG_NUMBER:
						case PythonParser.FLOAT_NUMBER:
						case PythonParser.OPEN_PAREN:
						case PythonParser.OPEN_BRACE:
						case PythonParser.OPEN_BRACKET:
						case PythonParser.NAME:
							{
							this.state = 506;
							this.test();
							}
							break;
						case PythonParser.STAR:
							{
							this.state = 507;
							this.star_expr();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 510;
						this.match(PythonParser.COMMA);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 514;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 518;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
				case 1:
					{
					this.state = 516;
					this.test();
					}
					break;

				case 2:
					{
					this.state = 517;
					this.star_expr();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 520;
				this.testlist();
				}
				break;
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
	public star_expr(): Star_exprContext {
		let _localctx: Star_exprContext = new Star_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, PythonParser.RULE_star_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.match(PythonParser.STAR);
			this.state = 524;
			this.expr(0);
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
	public assign_part(): Assign_partContext {
		let _localctx: Assign_partContext = new Assign_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, PythonParser.RULE_assign_part);
		let _la: number;
		try {
			let _alt: number;
			this.state = 556;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 526;
				this.match(PythonParser.ASSIGN);
				this.state = 540;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PythonParser.NONE:
				case PythonParser.LAMBDA:
				case PythonParser.NOT:
				case PythonParser.AWAIT:
				case PythonParser.PRINT:
				case PythonParser.EXEC:
				case PythonParser.TRUE:
				case PythonParser.FALSE:
				case PythonParser.ELLIPSIS:
				case PythonParser.REVERSE_QUOTE:
				case PythonParser.STAR:
				case PythonParser.ADD:
				case PythonParser.MINUS:
				case PythonParser.NOT_OP:
				case PythonParser.STRING:
				case PythonParser.DECIMAL_INTEGER:
				case PythonParser.OCT_INTEGER:
				case PythonParser.HEX_INTEGER:
				case PythonParser.BIN_INTEGER:
				case PythonParser.IMAG_NUMBER:
				case PythonParser.FLOAT_NUMBER:
				case PythonParser.OPEN_PAREN:
				case PythonParser.OPEN_BRACE:
				case PythonParser.OPEN_BRACKET:
				case PythonParser.NAME:
					{
					this.state = 527;
					this.testlist_star_expr();
					this.state = 532;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 528;
							this.match(PythonParser.ASSIGN);
							this.state = 529;
							this.testlist_star_expr();
							}
							}
						}
						this.state = 534;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
					}
					this.state = 537;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === PythonParser.ASSIGN) {
						{
						this.state = 535;
						this.match(PythonParser.ASSIGN);
						this.state = 536;
						this.yield_expr();
						}
					}

					}
					break;
				case PythonParser.YIELD:
					{
					this.state = 539;
					this.yield_expr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 542;
				if (!(CheckVersion(3))) {
					throw new FailedPredicateException(this, "CheckVersion(3)");
				}
				this.state = 543;
				this.match(PythonParser.COLON);
				this.state = 544;
				this.test();
				this.state = 547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.ASSIGN) {
					{
					this.state = 545;
					this.match(PythonParser.ASSIGN);
					this.state = 546;
					this.testlist();
					}
				}

				SetVersion(3);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 551;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (PythonParser.ADD_ASSIGN - 70)) | (1 << (PythonParser.SUB_ASSIGN - 70)) | (1 << (PythonParser.MULT_ASSIGN - 70)) | (1 << (PythonParser.AT_ASSIGN - 70)) | (1 << (PythonParser.DIV_ASSIGN - 70)) | (1 << (PythonParser.MOD_ASSIGN - 70)) | (1 << (PythonParser.AND_ASSIGN - 70)) | (1 << (PythonParser.OR_ASSIGN - 70)) | (1 << (PythonParser.XOR_ASSIGN - 70)) | (1 << (PythonParser.LEFT_SHIFT_ASSIGN - 70)) | (1 << (PythonParser.RIGHT_SHIFT_ASSIGN - 70)) | (1 << (PythonParser.POWER_ASSIGN - 70)) | (1 << (PythonParser.IDIV_ASSIGN - 70)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 554;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PythonParser.YIELD:
					{
					this.state = 552;
					this.yield_expr();
					}
					break;
				case PythonParser.NONE:
				case PythonParser.LAMBDA:
				case PythonParser.NOT:
				case PythonParser.AWAIT:
				case PythonParser.PRINT:
				case PythonParser.EXEC:
				case PythonParser.TRUE:
				case PythonParser.FALSE:
				case PythonParser.ELLIPSIS:
				case PythonParser.REVERSE_QUOTE:
				case PythonParser.ADD:
				case PythonParser.MINUS:
				case PythonParser.NOT_OP:
				case PythonParser.STRING:
				case PythonParser.DECIMAL_INTEGER:
				case PythonParser.OCT_INTEGER:
				case PythonParser.HEX_INTEGER:
				case PythonParser.BIN_INTEGER:
				case PythonParser.IMAG_NUMBER:
				case PythonParser.FLOAT_NUMBER:
				case PythonParser.OPEN_PAREN:
				case PythonParser.OPEN_BRACE:
				case PythonParser.OPEN_BRACKET:
				case PythonParser.NAME:
					{
					this.state = 553;
					this.testlist();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
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
	public exprlist(): ExprlistContext {
		let _localctx: ExprlistContext = new ExprlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, PythonParser.RULE_exprlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this.expr(0);
			this.state = 563;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 559;
					this.match(PythonParser.COMMA);
					this.state = 560;
					this.expr(0);
					}
					}
				}
				this.state = 565;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			}
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PythonParser.COMMA) {
				{
				this.state = 566;
				this.match(PythonParser.COMMA);
				}
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
	// @RuleVersion(0)
	public import_as_names(): Import_as_namesContext {
		let _localctx: Import_as_namesContext = new Import_as_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, PythonParser.RULE_import_as_names);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 569;
			this.import_as_name();
			this.state = 574;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 570;
					this.match(PythonParser.COMMA);
					this.state = 571;
					this.import_as_name();
					}
					}
				}
				this.state = 576;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			}
			this.state = 578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PythonParser.COMMA) {
				{
				this.state = 577;
				this.match(PythonParser.COMMA);
				}
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
	// @RuleVersion(0)
	public import_as_name(): Import_as_nameContext {
		let _localctx: Import_as_nameContext = new Import_as_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, PythonParser.RULE_import_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 580;
			this.name();
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PythonParser.AS) {
				{
				this.state = 581;
				this.match(PythonParser.AS);
				this.state = 582;
				this.name();
				}
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
	// @RuleVersion(0)
	public dotted_as_names(): Dotted_as_namesContext {
		let _localctx: Dotted_as_namesContext = new Dotted_as_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, PythonParser.RULE_dotted_as_names);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this.dotted_as_name();
			this.state = 590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PythonParser.COMMA) {
				{
				{
				this.state = 586;
				this.match(PythonParser.COMMA);
				this.state = 587;
				this.dotted_as_name();
				}
				}
				this.state = 592;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public dotted_as_name(): Dotted_as_nameContext {
		let _localctx: Dotted_as_nameContext = new Dotted_as_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, PythonParser.RULE_dotted_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 593;
			this.dotted_name(0);
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PythonParser.AS) {
				{
				this.state = 594;
				this.match(PythonParser.AS);
				this.state = 595;
				this.name();
				}
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
	// @RuleVersion(0)
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, PythonParser.RULE_test);
		let _la: number;
		try {
			this.state = 612;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PythonParser.NONE:
			case PythonParser.NOT:
			case PythonParser.AWAIT:
			case PythonParser.PRINT:
			case PythonParser.EXEC:
			case PythonParser.TRUE:
			case PythonParser.FALSE:
			case PythonParser.ELLIPSIS:
			case PythonParser.REVERSE_QUOTE:
			case PythonParser.ADD:
			case PythonParser.MINUS:
			case PythonParser.NOT_OP:
			case PythonParser.STRING:
			case PythonParser.DECIMAL_INTEGER:
			case PythonParser.OCT_INTEGER:
			case PythonParser.HEX_INTEGER:
			case PythonParser.BIN_INTEGER:
			case PythonParser.IMAG_NUMBER:
			case PythonParser.FLOAT_NUMBER:
			case PythonParser.OPEN_PAREN:
			case PythonParser.OPEN_BRACE:
			case PythonParser.OPEN_BRACKET:
			case PythonParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 598;
				this.logical_test(0);
				this.state = 604;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
				case 1:
					{
					this.state = 599;
					this.match(PythonParser.IF);
					this.state = 600;
					this.logical_test(0);
					this.state = 601;
					this.match(PythonParser.ELSE);
					this.state = 602;
					this.test();
					}
					break;
				}
				}
				break;
			case PythonParser.LAMBDA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 606;
				this.match(PythonParser.LAMBDA);
				this.state = 608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (PythonParser.TRUE - 39)) | (1 << (PythonParser.FALSE - 39)) | (1 << (PythonParser.STAR - 39)) | (1 << (PythonParser.POWER - 39)))) !== 0) || _la === PythonParser.NAME) {
					{
					this.state = 607;
					this.varargslist();
					}
				}

				this.state = 610;
				this.match(PythonParser.COLON);
				this.state = 611;
				this.test();
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
	public varargslist(): VarargslistContext {
		let _localctx: VarargslistContext = new VarargslistContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, PythonParser.RULE_varargslist);
		let _la: number;
		try {
			this.state = 638;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 617;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
				case 1:
					{
					this.state = 614;
					this.vardef_parameters();
					this.state = 615;
					this.match(PythonParser.COMMA);
					}
					break;
				}
				this.state = 629;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PythonParser.STAR:
					{
					this.state = 619;
					this.varargs();
					this.state = 622;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
					case 1:
						{
						this.state = 620;
						this.match(PythonParser.COMMA);
						this.state = 621;
						this.vardef_parameters();
						}
						break;
					}
					this.state = 626;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
					case 1:
						{
						this.state = 624;
						this.match(PythonParser.COMMA);
						this.state = 625;
						this.varkwargs();
						}
						break;
					}
					}
					break;
				case PythonParser.POWER:
					{
					this.state = 628;
					this.varkwargs();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 632;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.COMMA) {
					{
					this.state = 631;
					this.match(PythonParser.COMMA);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 634;
				this.vardef_parameters();
				this.state = 636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.COMMA) {
					{
					this.state = 635;
					this.match(PythonParser.COMMA);
					}
				}

				}
				break;
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
	public vardef_parameters(): Vardef_parametersContext {
		let _localctx: Vardef_parametersContext = new Vardef_parametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, PythonParser.RULE_vardef_parameters);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this.vardef_parameter();
			this.state = 645;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 641;
					this.match(PythonParser.COMMA);
					this.state = 642;
					this.vardef_parameter();
					}
					}
				}
				this.state = 647;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
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
	// @RuleVersion(0)
	public vardef_parameter(): Vardef_parameterContext {
		let _localctx: Vardef_parameterContext = new Vardef_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, PythonParser.RULE_vardef_parameter);
		let _la: number;
		try {
			this.state = 654;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PythonParser.TRUE:
			case PythonParser.FALSE:
			case PythonParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 648;
				this.name();
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.ASSIGN) {
					{
					this.state = 649;
					this.match(PythonParser.ASSIGN);
					this.state = 650;
					this.test();
					}
				}

				}
				break;
			case PythonParser.STAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 653;
				this.match(PythonParser.STAR);
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
	public varargs(): VarargsContext {
		let _localctx: VarargsContext = new VarargsContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, PythonParser.RULE_varargs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this.match(PythonParser.STAR);
			this.state = 657;
			this.name();
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
	public varkwargs(): VarkwargsContext {
		let _localctx: VarkwargsContext = new VarkwargsContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, PythonParser.RULE_varkwargs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 659;
			this.match(PythonParser.POWER);
			this.state = 660;
			this.name();
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

	public logical_test(): Logical_testContext;
	public logical_test(_p: number): Logical_testContext;
	// @RuleVersion(0)
	public logical_test(_p?: number): Logical_testContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Logical_testContext = new Logical_testContext(this._ctx, _parentState);
		let _prevctx: Logical_testContext = _localctx;
		let _startState: number = 74;
		this.enterRecursionRule(_localctx, 74, PythonParser.RULE_logical_test, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 666;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PythonParser.NONE:
			case PythonParser.AWAIT:
			case PythonParser.PRINT:
			case PythonParser.EXEC:
			case PythonParser.TRUE:
			case PythonParser.FALSE:
			case PythonParser.ELLIPSIS:
			case PythonParser.REVERSE_QUOTE:
			case PythonParser.ADD:
			case PythonParser.MINUS:
			case PythonParser.NOT_OP:
			case PythonParser.STRING:
			case PythonParser.DECIMAL_INTEGER:
			case PythonParser.OCT_INTEGER:
			case PythonParser.HEX_INTEGER:
			case PythonParser.BIN_INTEGER:
			case PythonParser.IMAG_NUMBER:
			case PythonParser.FLOAT_NUMBER:
			case PythonParser.OPEN_PAREN:
			case PythonParser.OPEN_BRACE:
			case PythonParser.OPEN_BRACKET:
			case PythonParser.NAME:
				{
				this.state = 663;
				this.comparison(0);
				}
				break;
			case PythonParser.NOT:
				{
				this.state = 664;
				this.match(PythonParser.NOT);
				this.state = 665;
				this.logical_test(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 676;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 674;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
					case 1:
						{
						_localctx = new Logical_testContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PythonParser.RULE_logical_test);
						this.state = 668;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 669;
						_localctx._op = this.match(PythonParser.AND);
						this.state = 670;
						this.logical_test(3);
						}
						break;

					case 2:
						{
						_localctx = new Logical_testContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PythonParser.RULE_logical_test);
						this.state = 671;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 672;
						_localctx._op = this.match(PythonParser.OR);
						this.state = 673;
						this.logical_test(2);
						}
						break;
					}
					}
				}
				this.state = 678;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
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

	public comparison(): ComparisonContext;
	public comparison(_p: number): ComparisonContext;
	// @RuleVersion(0)
	public comparison(_p?: number): ComparisonContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, _parentState);
		let _prevctx: ComparisonContext = _localctx;
		let _startState: number = 76;
		this.enterRecursionRule(_localctx, 76, PythonParser.RULE_comparison, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 680;
			this.expr(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 703;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ComparisonContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, PythonParser.RULE_comparison);
					this.state = 682;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 698;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case PythonParser.LESS_THAN:
						{
						this.state = 683;
						this.match(PythonParser.LESS_THAN);
						}
						break;
					case PythonParser.GREATER_THAN:
						{
						this.state = 684;
						this.match(PythonParser.GREATER_THAN);
						}
						break;
					case PythonParser.EQUALS:
						{
						this.state = 685;
						this.match(PythonParser.EQUALS);
						}
						break;
					case PythonParser.GT_EQ:
						{
						this.state = 686;
						this.match(PythonParser.GT_EQ);
						}
						break;
					case PythonParser.LT_EQ:
						{
						this.state = 687;
						this.match(PythonParser.LT_EQ);
						}
						break;
					case PythonParser.NOT_EQ_1:
						{
						this.state = 688;
						this.match(PythonParser.NOT_EQ_1);
						}
						break;
					case PythonParser.NOT_EQ_2:
						{
						this.state = 689;
						this.match(PythonParser.NOT_EQ_2);
						}
						break;
					case PythonParser.IN:
					case PythonParser.NOT:
						{
						this.state = 691;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === PythonParser.NOT) {
							{
							this.state = 690;
							_localctx._optional = this.match(PythonParser.NOT);
							}
						}

						this.state = 693;
						this.match(PythonParser.IN);
						}
						break;
					case PythonParser.IS:
						{
						this.state = 694;
						this.match(PythonParser.IS);
						this.state = 696;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === PythonParser.NOT) {
							{
							this.state = 695;
							_localctx._optional = this.match(PythonParser.NOT);
							}
						}

						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 700;
					this.comparison(3);
					}
					}
				}
				this.state = 705;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
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

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 78;
		this.enterRecursionRule(_localctx, 78, PythonParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 719;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 708;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.AWAIT) {
					{
					this.state = 707;
					this.match(PythonParser.AWAIT);
					}
				}

				this.state = 710;
				this.atom();
				this.state = 714;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 711;
						this.trailer();
						}
						}
					}
					this.state = 716;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				}
				}
				break;

			case 2:
				{
				this.state = 717;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (PythonParser.ADD - 55)) | (1 << (PythonParser.MINUS - 55)) | (1 << (PythonParser.NOT_OP - 55)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 718;
				this.expr(7);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 744;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 742;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PythonParser.RULE_expr);
						this.state = 721;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 722;
						_localctx._op = this.match(PythonParser.POWER);
						this.state = 723;
						this.expr(8);
						}
						break;

					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PythonParser.RULE_expr);
						this.state = 724;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 725;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (PythonParser.STAR - 44)) | (1 << (PythonParser.DIV - 44)) | (1 << (PythonParser.MOD - 44)) | (1 << (PythonParser.IDIV - 44)) | (1 << (PythonParser.AT - 44)))) !== 0))) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 726;
						this.expr(7);
						}
						break;

					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PythonParser.RULE_expr);
						this.state = 727;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 728;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === PythonParser.ADD || _la === PythonParser.MINUS)) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 729;
						this.expr(6);
						}
						break;

					case 4:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PythonParser.RULE_expr);
						this.state = 730;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 731;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === PythonParser.LEFT_SHIFT || _la === PythonParser.RIGHT_SHIFT)) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 732;
						this.expr(5);
						}
						break;

					case 5:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PythonParser.RULE_expr);
						this.state = 733;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 734;
						_localctx._op = this.match(PythonParser.AND_OP);
						this.state = 735;
						this.expr(4);
						}
						break;

					case 6:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PythonParser.RULE_expr);
						this.state = 736;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 737;
						_localctx._op = this.match(PythonParser.XOR);
						this.state = 738;
						this.expr(3);
						}
						break;

					case 7:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PythonParser.RULE_expr);
						this.state = 739;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 740;
						_localctx._op = this.match(PythonParser.OR_OP);
						this.state = 741;
						this.expr(2);
						}
						break;
					}
					}
				}
				this.state = 746;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
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
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, PythonParser.RULE_atom);
		let _la: number;
		try {
			let _alt: number;
			this.state = 784;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PythonParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 747;
				this.match(PythonParser.OPEN_PAREN);
				this.state = 750;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PythonParser.YIELD:
					{
					this.state = 748;
					this.yield_expr();
					}
					break;
				case PythonParser.NONE:
				case PythonParser.LAMBDA:
				case PythonParser.NOT:
				case PythonParser.AWAIT:
				case PythonParser.PRINT:
				case PythonParser.EXEC:
				case PythonParser.TRUE:
				case PythonParser.FALSE:
				case PythonParser.ELLIPSIS:
				case PythonParser.REVERSE_QUOTE:
				case PythonParser.STAR:
				case PythonParser.ADD:
				case PythonParser.MINUS:
				case PythonParser.NOT_OP:
				case PythonParser.STRING:
				case PythonParser.DECIMAL_INTEGER:
				case PythonParser.OCT_INTEGER:
				case PythonParser.HEX_INTEGER:
				case PythonParser.BIN_INTEGER:
				case PythonParser.IMAG_NUMBER:
				case PythonParser.FLOAT_NUMBER:
				case PythonParser.OPEN_PAREN:
				case PythonParser.OPEN_BRACE:
				case PythonParser.OPEN_BRACKET:
				case PythonParser.NAME:
					{
					this.state = 749;
					this.testlist_comp();
					}
					break;
				case PythonParser.CLOSE_PAREN:
					break;
				default:
					break;
				}
				this.state = 752;
				this.match(PythonParser.CLOSE_PAREN);
				}
				break;
			case PythonParser.OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 753;
				this.match(PythonParser.OPEN_BRACKET);
				this.state = 755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PythonParser.NONE) | (1 << PythonParser.LAMBDA) | (1 << PythonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (PythonParser.AWAIT - 36)) | (1 << (PythonParser.PRINT - 36)) | (1 << (PythonParser.EXEC - 36)) | (1 << (PythonParser.TRUE - 36)) | (1 << (PythonParser.FALSE - 36)) | (1 << (PythonParser.ELLIPSIS - 36)) | (1 << (PythonParser.REVERSE_QUOTE - 36)) | (1 << (PythonParser.STAR - 36)) | (1 << (PythonParser.ADD - 36)) | (1 << (PythonParser.MINUS - 36)) | (1 << (PythonParser.NOT_OP - 36)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (PythonParser.STRING - 83)) | (1 << (PythonParser.DECIMAL_INTEGER - 83)) | (1 << (PythonParser.OCT_INTEGER - 83)) | (1 << (PythonParser.HEX_INTEGER - 83)) | (1 << (PythonParser.BIN_INTEGER - 83)) | (1 << (PythonParser.IMAG_NUMBER - 83)) | (1 << (PythonParser.FLOAT_NUMBER - 83)) | (1 << (PythonParser.OPEN_PAREN - 83)) | (1 << (PythonParser.OPEN_BRACE - 83)) | (1 << (PythonParser.OPEN_BRACKET - 83)) | (1 << (PythonParser.NAME - 83)))) !== 0)) {
					{
					this.state = 754;
					this.testlist_comp();
					}
				}

				this.state = 757;
				this.match(PythonParser.CLOSE_BRACKET);
				}
				break;
			case PythonParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 758;
				this.match(PythonParser.OPEN_BRACE);
				this.state = 760;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PythonParser.NONE) | (1 << PythonParser.LAMBDA) | (1 << PythonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (PythonParser.AWAIT - 36)) | (1 << (PythonParser.PRINT - 36)) | (1 << (PythonParser.EXEC - 36)) | (1 << (PythonParser.TRUE - 36)) | (1 << (PythonParser.FALSE - 36)) | (1 << (PythonParser.ELLIPSIS - 36)) | (1 << (PythonParser.REVERSE_QUOTE - 36)) | (1 << (PythonParser.STAR - 36)) | (1 << (PythonParser.POWER - 36)) | (1 << (PythonParser.ADD - 36)) | (1 << (PythonParser.MINUS - 36)) | (1 << (PythonParser.NOT_OP - 36)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (PythonParser.STRING - 83)) | (1 << (PythonParser.DECIMAL_INTEGER - 83)) | (1 << (PythonParser.OCT_INTEGER - 83)) | (1 << (PythonParser.HEX_INTEGER - 83)) | (1 << (PythonParser.BIN_INTEGER - 83)) | (1 << (PythonParser.IMAG_NUMBER - 83)) | (1 << (PythonParser.FLOAT_NUMBER - 83)) | (1 << (PythonParser.OPEN_PAREN - 83)) | (1 << (PythonParser.OPEN_BRACE - 83)) | (1 << (PythonParser.OPEN_BRACKET - 83)) | (1 << (PythonParser.NAME - 83)))) !== 0)) {
					{
					this.state = 759;
					this.dictorsetmaker();
					}
				}

				this.state = 762;
				this.match(PythonParser.CLOSE_BRACE);
				}
				break;
			case PythonParser.REVERSE_QUOTE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 763;
				this.match(PythonParser.REVERSE_QUOTE);
				this.state = 764;
				this.testlist();
				this.state = 766;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.COMMA) {
					{
					this.state = 765;
					this.match(PythonParser.COMMA);
					}
				}

				this.state = 768;
				this.match(PythonParser.REVERSE_QUOTE);
				}
				break;
			case PythonParser.ELLIPSIS:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 770;
				this.match(PythonParser.ELLIPSIS);
				}
				break;
			case PythonParser.TRUE:
			case PythonParser.FALSE:
			case PythonParser.NAME:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 771;
				this.name();
				}
				break;
			case PythonParser.PRINT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 772;
				this.match(PythonParser.PRINT);
				}
				break;
			case PythonParser.EXEC:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 773;
				this.match(PythonParser.EXEC);
				}
				break;
			case PythonParser.MINUS:
			case PythonParser.DECIMAL_INTEGER:
			case PythonParser.OCT_INTEGER:
			case PythonParser.HEX_INTEGER:
			case PythonParser.BIN_INTEGER:
			case PythonParser.IMAG_NUMBER:
			case PythonParser.FLOAT_NUMBER:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 775;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.MINUS) {
					{
					this.state = 774;
					this.match(PythonParser.MINUS);
					}
				}

				this.state = 777;
				this.number();
				}
				break;
			case PythonParser.NONE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 778;
				this.match(PythonParser.NONE);
				}
				break;
			case PythonParser.STRING:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 780;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 779;
						this.match(PythonParser.STRING);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 782;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public dictorsetmaker(): DictorsetmakerContext {
		let _localctx: DictorsetmakerContext = new DictorsetmakerContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, PythonParser.RULE_dictorsetmaker);
		let _la: number;
		try {
			let _alt: number;
			this.state = 817;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 792;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PythonParser.NONE:
				case PythonParser.LAMBDA:
				case PythonParser.NOT:
				case PythonParser.AWAIT:
				case PythonParser.PRINT:
				case PythonParser.EXEC:
				case PythonParser.TRUE:
				case PythonParser.FALSE:
				case PythonParser.ELLIPSIS:
				case PythonParser.REVERSE_QUOTE:
				case PythonParser.ADD:
				case PythonParser.MINUS:
				case PythonParser.NOT_OP:
				case PythonParser.STRING:
				case PythonParser.DECIMAL_INTEGER:
				case PythonParser.OCT_INTEGER:
				case PythonParser.HEX_INTEGER:
				case PythonParser.BIN_INTEGER:
				case PythonParser.IMAG_NUMBER:
				case PythonParser.FLOAT_NUMBER:
				case PythonParser.OPEN_PAREN:
				case PythonParser.OPEN_BRACE:
				case PythonParser.OPEN_BRACKET:
				case PythonParser.NAME:
					{
					this.state = 786;
					this.test();
					this.state = 787;
					this.match(PythonParser.COLON);
					this.state = 788;
					this.test();
					}
					break;
				case PythonParser.POWER:
					{
					this.state = 790;
					this.match(PythonParser.POWER);
					this.state = 791;
					this.expr(0);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 805;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 794;
						this.match(PythonParser.COMMA);
						this.state = 801;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case PythonParser.NONE:
						case PythonParser.LAMBDA:
						case PythonParser.NOT:
						case PythonParser.AWAIT:
						case PythonParser.PRINT:
						case PythonParser.EXEC:
						case PythonParser.TRUE:
						case PythonParser.FALSE:
						case PythonParser.ELLIPSIS:
						case PythonParser.REVERSE_QUOTE:
						case PythonParser.ADD:
						case PythonParser.MINUS:
						case PythonParser.NOT_OP:
						case PythonParser.STRING:
						case PythonParser.DECIMAL_INTEGER:
						case PythonParser.OCT_INTEGER:
						case PythonParser.HEX_INTEGER:
						case PythonParser.BIN_INTEGER:
						case PythonParser.IMAG_NUMBER:
						case PythonParser.FLOAT_NUMBER:
						case PythonParser.OPEN_PAREN:
						case PythonParser.OPEN_BRACE:
						case PythonParser.OPEN_BRACKET:
						case PythonParser.NAME:
							{
							this.state = 795;
							this.test();
							this.state = 796;
							this.match(PythonParser.COLON);
							this.state = 797;
							this.test();
							}
							break;
						case PythonParser.POWER:
							{
							this.state = 799;
							this.match(PythonParser.POWER);
							this.state = 800;
							this.expr(0);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						}
					}
					this.state = 807;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
				}
				this.state = 809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.COMMA) {
					{
					this.state = 808;
					this.match(PythonParser.COMMA);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 811;
				this.test();
				this.state = 812;
				this.match(PythonParser.COLON);
				this.state = 813;
				this.test();
				this.state = 814;
				this.comp_for();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 816;
				this.testlist_comp();
				}
				break;
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
	public testlist_comp(): Testlist_compContext {
		let _localctx: Testlist_compContext = new Testlist_compContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, PythonParser.RULE_testlist_comp);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 821;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PythonParser.NONE:
			case PythonParser.LAMBDA:
			case PythonParser.NOT:
			case PythonParser.AWAIT:
			case PythonParser.PRINT:
			case PythonParser.EXEC:
			case PythonParser.TRUE:
			case PythonParser.FALSE:
			case PythonParser.ELLIPSIS:
			case PythonParser.REVERSE_QUOTE:
			case PythonParser.ADD:
			case PythonParser.MINUS:
			case PythonParser.NOT_OP:
			case PythonParser.STRING:
			case PythonParser.DECIMAL_INTEGER:
			case PythonParser.OCT_INTEGER:
			case PythonParser.HEX_INTEGER:
			case PythonParser.BIN_INTEGER:
			case PythonParser.IMAG_NUMBER:
			case PythonParser.FLOAT_NUMBER:
			case PythonParser.OPEN_PAREN:
			case PythonParser.OPEN_BRACE:
			case PythonParser.OPEN_BRACKET:
			case PythonParser.NAME:
				{
				this.state = 819;
				this.test();
				}
				break;
			case PythonParser.STAR:
				{
				this.state = 820;
				this.star_expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 837;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PythonParser.FOR:
				{
				this.state = 823;
				this.comp_for();
				}
				break;
			case PythonParser.COMMA:
			case PythonParser.CLOSE_PAREN:
			case PythonParser.CLOSE_BRACE:
			case PythonParser.CLOSE_BRACKET:
				{
				this.state = 831;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 824;
						this.match(PythonParser.COMMA);
						this.state = 827;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case PythonParser.NONE:
						case PythonParser.LAMBDA:
						case PythonParser.NOT:
						case PythonParser.AWAIT:
						case PythonParser.PRINT:
						case PythonParser.EXEC:
						case PythonParser.TRUE:
						case PythonParser.FALSE:
						case PythonParser.ELLIPSIS:
						case PythonParser.REVERSE_QUOTE:
						case PythonParser.ADD:
						case PythonParser.MINUS:
						case PythonParser.NOT_OP:
						case PythonParser.STRING:
						case PythonParser.DECIMAL_INTEGER:
						case PythonParser.OCT_INTEGER:
						case PythonParser.HEX_INTEGER:
						case PythonParser.BIN_INTEGER:
						case PythonParser.IMAG_NUMBER:
						case PythonParser.FLOAT_NUMBER:
						case PythonParser.OPEN_PAREN:
						case PythonParser.OPEN_BRACE:
						case PythonParser.OPEN_BRACKET:
						case PythonParser.NAME:
							{
							this.state = 825;
							this.test();
							}
							break;
						case PythonParser.STAR:
							{
							this.state = 826;
							this.star_expr();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						}
					}
					this.state = 833;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
				}
				this.state = 835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.COMMA) {
					{
					this.state = 834;
					this.match(PythonParser.COMMA);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public testlist(): TestlistContext {
		let _localctx: TestlistContext = new TestlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, PythonParser.RULE_testlist);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 839;
			this.test();
			this.state = 844;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 840;
					this.match(PythonParser.COMMA);
					this.state = 841;
					this.test();
					}
					}
				}
				this.state = 846;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			}
			this.state = 848;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				this.state = 847;
				this.match(PythonParser.COMMA);
				}
				break;
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

	public dotted_name(): Dotted_nameContext;
	public dotted_name(_p: number): Dotted_nameContext;
	// @RuleVersion(0)
	public dotted_name(_p?: number): Dotted_nameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Dotted_nameContext = new Dotted_nameContext(this._ctx, _parentState);
		let _prevctx: Dotted_nameContext = _localctx;
		let _startState: number = 88;
		this.enterRecursionRule(_localctx, 88, PythonParser.RULE_dotted_name, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 851;
			this.name();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 858;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Dotted_nameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, PythonParser.RULE_dotted_name);
					this.state = 853;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 854;
					this.match(PythonParser.DOT);
					this.state = 855;
					this.name();
					}
					}
				}
				this.state = 860;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
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
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, PythonParser.RULE_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 861;
			_la = this._input.LA(1);
			if (!(_la === PythonParser.TRUE || _la === PythonParser.FALSE || _la === PythonParser.NAME)) {
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
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, PythonParser.RULE_number);
		try {
			this.state = 866;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PythonParser.DECIMAL_INTEGER:
			case PythonParser.OCT_INTEGER:
			case PythonParser.HEX_INTEGER:
			case PythonParser.BIN_INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 863;
				this.integer();
				}
				break;
			case PythonParser.IMAG_NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 864;
				this.match(PythonParser.IMAG_NUMBER);
				}
				break;
			case PythonParser.FLOAT_NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 865;
				this.match(PythonParser.FLOAT_NUMBER);
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
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, PythonParser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 868;
			_la = this._input.LA(1);
			if (!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (PythonParser.DECIMAL_INTEGER - 84)) | (1 << (PythonParser.OCT_INTEGER - 84)) | (1 << (PythonParser.HEX_INTEGER - 84)) | (1 << (PythonParser.BIN_INTEGER - 84)))) !== 0))) {
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
	// @RuleVersion(0)
	public yield_expr(): Yield_exprContext {
		let _localctx: Yield_exprContext = new Yield_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, PythonParser.RULE_yield_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 870;
			this.match(PythonParser.YIELD);
			this.state = 872;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PythonParser.FROM) | (1 << PythonParser.NONE) | (1 << PythonParser.LAMBDA) | (1 << PythonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (PythonParser.AWAIT - 36)) | (1 << (PythonParser.PRINT - 36)) | (1 << (PythonParser.EXEC - 36)) | (1 << (PythonParser.TRUE - 36)) | (1 << (PythonParser.FALSE - 36)) | (1 << (PythonParser.ELLIPSIS - 36)) | (1 << (PythonParser.REVERSE_QUOTE - 36)) | (1 << (PythonParser.ADD - 36)) | (1 << (PythonParser.MINUS - 36)) | (1 << (PythonParser.NOT_OP - 36)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (PythonParser.STRING - 83)) | (1 << (PythonParser.DECIMAL_INTEGER - 83)) | (1 << (PythonParser.OCT_INTEGER - 83)) | (1 << (PythonParser.HEX_INTEGER - 83)) | (1 << (PythonParser.BIN_INTEGER - 83)) | (1 << (PythonParser.IMAG_NUMBER - 83)) | (1 << (PythonParser.FLOAT_NUMBER - 83)) | (1 << (PythonParser.OPEN_PAREN - 83)) | (1 << (PythonParser.OPEN_BRACE - 83)) | (1 << (PythonParser.OPEN_BRACKET - 83)) | (1 << (PythonParser.NAME - 83)))) !== 0)) {
				{
				this.state = 871;
				this.yield_arg();
				}
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
	// @RuleVersion(0)
	public yield_arg(): Yield_argContext {
		let _localctx: Yield_argContext = new Yield_argContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, PythonParser.RULE_yield_arg);
		try {
			this.state = 877;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PythonParser.FROM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 874;
				this.match(PythonParser.FROM);
				this.state = 875;
				this.test();
				}
				break;
			case PythonParser.NONE:
			case PythonParser.LAMBDA:
			case PythonParser.NOT:
			case PythonParser.AWAIT:
			case PythonParser.PRINT:
			case PythonParser.EXEC:
			case PythonParser.TRUE:
			case PythonParser.FALSE:
			case PythonParser.ELLIPSIS:
			case PythonParser.REVERSE_QUOTE:
			case PythonParser.ADD:
			case PythonParser.MINUS:
			case PythonParser.NOT_OP:
			case PythonParser.STRING:
			case PythonParser.DECIMAL_INTEGER:
			case PythonParser.OCT_INTEGER:
			case PythonParser.HEX_INTEGER:
			case PythonParser.BIN_INTEGER:
			case PythonParser.IMAG_NUMBER:
			case PythonParser.FLOAT_NUMBER:
			case PythonParser.OPEN_PAREN:
			case PythonParser.OPEN_BRACE:
			case PythonParser.OPEN_BRACKET:
			case PythonParser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 876;
				this.testlist();
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
	public trailer(): TrailerContext {
		let _localctx: TrailerContext = new TrailerContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, PythonParser.RULE_trailer);
		try {
			this.state = 885;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PythonParser.DOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 879;
				this.match(PythonParser.DOT);
				this.state = 880;
				this.name();
				this.state = 882;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
				case 1:
					{
					this.state = 881;
					this.arguments();
					}
					break;
				}
				}
				break;
			case PythonParser.OPEN_PAREN:
			case PythonParser.OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 884;
				this.arguments();
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, PythonParser.RULE_arguments);
		let _la: number;
		try {
			this.state = 896;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PythonParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 887;
				this.match(PythonParser.OPEN_PAREN);
				this.state = 889;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PythonParser.NONE) | (1 << PythonParser.LAMBDA) | (1 << PythonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (PythonParser.AWAIT - 36)) | (1 << (PythonParser.PRINT - 36)) | (1 << (PythonParser.EXEC - 36)) | (1 << (PythonParser.TRUE - 36)) | (1 << (PythonParser.FALSE - 36)) | (1 << (PythonParser.ELLIPSIS - 36)) | (1 << (PythonParser.REVERSE_QUOTE - 36)) | (1 << (PythonParser.STAR - 36)) | (1 << (PythonParser.POWER - 36)) | (1 << (PythonParser.ADD - 36)) | (1 << (PythonParser.MINUS - 36)) | (1 << (PythonParser.NOT_OP - 36)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (PythonParser.STRING - 83)) | (1 << (PythonParser.DECIMAL_INTEGER - 83)) | (1 << (PythonParser.OCT_INTEGER - 83)) | (1 << (PythonParser.HEX_INTEGER - 83)) | (1 << (PythonParser.BIN_INTEGER - 83)) | (1 << (PythonParser.IMAG_NUMBER - 83)) | (1 << (PythonParser.FLOAT_NUMBER - 83)) | (1 << (PythonParser.OPEN_PAREN - 83)) | (1 << (PythonParser.OPEN_BRACE - 83)) | (1 << (PythonParser.OPEN_BRACKET - 83)) | (1 << (PythonParser.NAME - 83)))) !== 0)) {
					{
					this.state = 888;
					this.arglist();
					}
				}

				this.state = 891;
				this.match(PythonParser.CLOSE_PAREN);
				}
				break;
			case PythonParser.OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 892;
				this.match(PythonParser.OPEN_BRACKET);
				this.state = 893;
				this.subscriptlist();
				this.state = 894;
				this.match(PythonParser.CLOSE_BRACKET);
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
	public arglist(): ArglistContext {
		let _localctx: ArglistContext = new ArglistContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, PythonParser.RULE_arglist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 898;
			this.argument();
			this.state = 903;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 899;
					this.match(PythonParser.COMMA);
					this.state = 900;
					this.argument();
					}
					}
				}
				this.state = 905;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
			}
			this.state = 907;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PythonParser.COMMA) {
				{
				this.state = 906;
				this.match(PythonParser.COMMA);
				}
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
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, PythonParser.RULE_argument);
		let _la: number;
		try {
			this.state = 917;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PythonParser.NONE:
			case PythonParser.LAMBDA:
			case PythonParser.NOT:
			case PythonParser.AWAIT:
			case PythonParser.PRINT:
			case PythonParser.EXEC:
			case PythonParser.TRUE:
			case PythonParser.FALSE:
			case PythonParser.ELLIPSIS:
			case PythonParser.REVERSE_QUOTE:
			case PythonParser.ADD:
			case PythonParser.MINUS:
			case PythonParser.NOT_OP:
			case PythonParser.STRING:
			case PythonParser.DECIMAL_INTEGER:
			case PythonParser.OCT_INTEGER:
			case PythonParser.HEX_INTEGER:
			case PythonParser.BIN_INTEGER:
			case PythonParser.IMAG_NUMBER:
			case PythonParser.FLOAT_NUMBER:
			case PythonParser.OPEN_PAREN:
			case PythonParser.OPEN_BRACE:
			case PythonParser.OPEN_BRACKET:
			case PythonParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 909;
				this.test();
				this.state = 913;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PythonParser.FOR:
					{
					this.state = 910;
					this.comp_for();
					}
					break;
				case PythonParser.ASSIGN:
					{
					this.state = 911;
					this.match(PythonParser.ASSIGN);
					this.state = 912;
					this.test();
					}
					break;
				case PythonParser.COMMA:
				case PythonParser.CLOSE_PAREN:
					break;
				default:
					break;
				}
				}
				break;
			case PythonParser.STAR:
			case PythonParser.POWER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 915;
				_la = this._input.LA(1);
				if (!(_la === PythonParser.STAR || _la === PythonParser.POWER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 916;
				this.test();
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
	public subscriptlist(): SubscriptlistContext {
		let _localctx: SubscriptlistContext = new SubscriptlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, PythonParser.RULE_subscriptlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 919;
			this.subscript();
			this.state = 924;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 920;
					this.match(PythonParser.COMMA);
					this.state = 921;
					this.subscript();
					}
					}
				}
				this.state = 926;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
			}
			this.state = 928;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PythonParser.COMMA) {
				{
				this.state = 927;
				this.match(PythonParser.COMMA);
				}
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
	// @RuleVersion(0)
	public subscript(): SubscriptContext {
		let _localctx: SubscriptContext = new SubscriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, PythonParser.RULE_subscript);
		let _la: number;
		try {
			this.state = 948;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 930;
				this.match(PythonParser.ELLIPSIS);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 931;
				this.test();
				this.state = 939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.COLON) {
					{
					this.state = 932;
					this.match(PythonParser.COLON);
					this.state = 934;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PythonParser.NONE) | (1 << PythonParser.LAMBDA) | (1 << PythonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (PythonParser.AWAIT - 36)) | (1 << (PythonParser.PRINT - 36)) | (1 << (PythonParser.EXEC - 36)) | (1 << (PythonParser.TRUE - 36)) | (1 << (PythonParser.FALSE - 36)) | (1 << (PythonParser.ELLIPSIS - 36)) | (1 << (PythonParser.REVERSE_QUOTE - 36)) | (1 << (PythonParser.ADD - 36)) | (1 << (PythonParser.MINUS - 36)) | (1 << (PythonParser.NOT_OP - 36)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (PythonParser.STRING - 83)) | (1 << (PythonParser.DECIMAL_INTEGER - 83)) | (1 << (PythonParser.OCT_INTEGER - 83)) | (1 << (PythonParser.HEX_INTEGER - 83)) | (1 << (PythonParser.BIN_INTEGER - 83)) | (1 << (PythonParser.IMAG_NUMBER - 83)) | (1 << (PythonParser.FLOAT_NUMBER - 83)) | (1 << (PythonParser.OPEN_PAREN - 83)) | (1 << (PythonParser.OPEN_BRACE - 83)) | (1 << (PythonParser.OPEN_BRACKET - 83)) | (1 << (PythonParser.NAME - 83)))) !== 0)) {
						{
						this.state = 933;
						this.test();
						}
					}

					this.state = 937;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === PythonParser.COLON) {
						{
						this.state = 936;
						this.sliceop();
						}
					}

					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 941;
				this.match(PythonParser.COLON);
				this.state = 943;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PythonParser.NONE) | (1 << PythonParser.LAMBDA) | (1 << PythonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (PythonParser.AWAIT - 36)) | (1 << (PythonParser.PRINT - 36)) | (1 << (PythonParser.EXEC - 36)) | (1 << (PythonParser.TRUE - 36)) | (1 << (PythonParser.FALSE - 36)) | (1 << (PythonParser.ELLIPSIS - 36)) | (1 << (PythonParser.REVERSE_QUOTE - 36)) | (1 << (PythonParser.ADD - 36)) | (1 << (PythonParser.MINUS - 36)) | (1 << (PythonParser.NOT_OP - 36)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (PythonParser.STRING - 83)) | (1 << (PythonParser.DECIMAL_INTEGER - 83)) | (1 << (PythonParser.OCT_INTEGER - 83)) | (1 << (PythonParser.HEX_INTEGER - 83)) | (1 << (PythonParser.BIN_INTEGER - 83)) | (1 << (PythonParser.IMAG_NUMBER - 83)) | (1 << (PythonParser.FLOAT_NUMBER - 83)) | (1 << (PythonParser.OPEN_PAREN - 83)) | (1 << (PythonParser.OPEN_BRACE - 83)) | (1 << (PythonParser.OPEN_BRACKET - 83)) | (1 << (PythonParser.NAME - 83)))) !== 0)) {
					{
					this.state = 942;
					this.test();
					}
				}

				this.state = 946;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.COLON) {
					{
					this.state = 945;
					this.sliceop();
					}
				}

				}
				break;
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
	public sliceop(): SliceopContext {
		let _localctx: SliceopContext = new SliceopContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, PythonParser.RULE_sliceop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 950;
			this.match(PythonParser.COLON);
			this.state = 952;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PythonParser.NONE) | (1 << PythonParser.LAMBDA) | (1 << PythonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (PythonParser.AWAIT - 36)) | (1 << (PythonParser.PRINT - 36)) | (1 << (PythonParser.EXEC - 36)) | (1 << (PythonParser.TRUE - 36)) | (1 << (PythonParser.FALSE - 36)) | (1 << (PythonParser.ELLIPSIS - 36)) | (1 << (PythonParser.REVERSE_QUOTE - 36)) | (1 << (PythonParser.ADD - 36)) | (1 << (PythonParser.MINUS - 36)) | (1 << (PythonParser.NOT_OP - 36)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (PythonParser.STRING - 83)) | (1 << (PythonParser.DECIMAL_INTEGER - 83)) | (1 << (PythonParser.OCT_INTEGER - 83)) | (1 << (PythonParser.HEX_INTEGER - 83)) | (1 << (PythonParser.BIN_INTEGER - 83)) | (1 << (PythonParser.IMAG_NUMBER - 83)) | (1 << (PythonParser.FLOAT_NUMBER - 83)) | (1 << (PythonParser.OPEN_PAREN - 83)) | (1 << (PythonParser.OPEN_BRACE - 83)) | (1 << (PythonParser.OPEN_BRACKET - 83)) | (1 << (PythonParser.NAME - 83)))) !== 0)) {
				{
				this.state = 951;
				this.test();
				}
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
	// @RuleVersion(0)
	public comp_for(): Comp_forContext {
		let _localctx: Comp_forContext = new Comp_forContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, PythonParser.RULE_comp_for);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 954;
			this.match(PythonParser.FOR);
			this.state = 955;
			this.exprlist();
			this.state = 956;
			this.match(PythonParser.IN);
			this.state = 957;
			this.logical_test(0);
			this.state = 959;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PythonParser.IF || _la === PythonParser.FOR) {
				{
				this.state = 958;
				this.comp_iter();
				}
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
	// @RuleVersion(0)
	public comp_iter(): Comp_iterContext {
		let _localctx: Comp_iterContext = new Comp_iterContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, PythonParser.RULE_comp_iter);
		let _la: number;
		try {
			this.state = 967;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PythonParser.FOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 961;
				this.comp_for();
				}
				break;
			case PythonParser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 962;
				this.match(PythonParser.IF);
				this.state = 963;
				this.test();
				this.state = 965;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PythonParser.IF || _la === PythonParser.FOR) {
					{
					this.state = 964;
					this.comp_iter();
					}
				}

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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 12:
			return this.except_clause_sempred(_localctx as Except_clauseContext, predIndex);

		case 22:
			return this.small_stmt_sempred(_localctx as Small_stmtContext, predIndex);

		case 25:
			return this.assign_part_sempred(_localctx as Assign_partContext, predIndex);

		case 37:
			return this.logical_test_sempred(_localctx as Logical_testContext, predIndex);

		case 38:
			return this.comparison_sempred(_localctx as ComparisonContext, predIndex);

		case 39:
			return this.expr_sempred(_localctx as ExprContext, predIndex);

		case 44:
			return this.dotted_name_sempred(_localctx as Dotted_nameContext, predIndex);
		}
		return true;
	}
	private except_clause_sempred(_localctx: Except_clauseContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return CheckVersion(2);

		case 1:
			return CheckVersion(3);
		}
		return true;
	}
	private small_stmt_sempred(_localctx: Small_stmtContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return CheckVersion(2);

		case 3:
			return CheckVersion(2);

		case 4:
			return CheckVersion(3);
		}
		return true;
	}
	private assign_part_sempred(_localctx: Assign_partContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return CheckVersion(3);
		}
		return true;
	}
	private logical_test_sempred(_localctx: Logical_testContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 2);

		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private comparison_sempred(_localctx: ComparisonContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 8);

		case 10:
			return this.precpred(this._ctx, 6);

		case 11:
			return this.precpred(this._ctx, 5);

		case 12:
			return this.precpred(this._ctx, 4);

		case 13:
			return this.precpred(this._ctx, 3);

		case 14:
			return this.precpred(this._ctx, 2);

		case 15:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private dotted_name_sempred(_localctx: Dotted_nameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03f\u03CC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x03" +
		"\x02\x03\x02\x03\x02\x05\x02|\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03\x85\n\x03\x03\x04\x03\x04\x06\x04\x89\n\x04" +
		"\r\x04\x0E\x04\x8A\x03\x05\x03\x05\x07\x05\x8F\n\x05\f\x05\x0E\x05\x92" +
		"\v\x05\x03\x06\x03\x06\x05\x06\x96\n\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x07\x07\x9D\n\x07\f\x07\x0E\x07\xA0\v\x07\x03\x07\x05\x07\xA3" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xAA\n\x07\x03\x07" +
		"\x05\x07\xAD\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\xB6\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07\xBC\n\x07" +
		"\r\x07\x0E\x07\xBD\x03\x07\x05\x07\xC1\n\x07\x03\x07\x05\x07\xC4\n\x07" +
		"\x03\x07\x05\x07\xC7\n\x07\x03\x07\x05\x07\xCA\n\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x07\x07\xD0\n\x07\f\x07\x0E\x07\xD3\v\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x07\x07\xD9\n\x07\f\x07\x0E\x07\xDC\v\x07\x03\x07\x03" +
		"\x07\x05\x07\xE0\n\x07\x05\x07\xE2\n\x07\x03\b\x03\b\x03\b\x03\b\x06\b" +
		"\xE8\n\b\r\b\x0E\b\xE9\x03\b\x03\b\x05\b\xEE\n\b\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t\xF4\n\t\x03\t\x05\t\xF7\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x05\r\u010B\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0119\n\x0E\x05\x0E" +
		"\u011B\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\u0124\n\x0F\x03\x0F\x05\x0F\u0127\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x10\x05\x10\u012D\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0133" +
		"\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0138\n\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x11\x05\x11\u0140\n\x11\x03\x11\x03\x11\x03\x11" +
		"\x05\x11\u0145\n\x11\x03\x11\x03\x11\x05\x11\u0149\n\x11\x03\x11\x05\x11" +
		"\u014C\n\x11\x03\x11\x05\x11\u014F\n\x11\x03\x11\x03\x11\x05\x11\u0153" +
		"\n\x11\x05\x11\u0155\n\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x07\x14\u0160\n\x14\f\x14\x0E\x14\u0163\v" +
		"\x14\x03\x15\x03\x15\x03\x15\x05\x15\u0168\n\x15\x03\x15\x05\x15\u016B" +
		"\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u0170\n\x16\x03\x17\x03\x17\x03" +
		"\x17\x07\x17\u0175\n\x17\f\x17\x0E\x17\u0178\v\x17\x03\x17\x05\x17\u017B" +
		"\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x05\x18\u0181\n\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0188\n\x18\f\x18\x0E\x18\u018B\v" +
		"\x18\x03\x18\x05\x18\u018E\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x06\x18" +
		"\u0194\n\x18\r\x18\x0E\x18\u0195\x03\x18\x05\x18\u0199\n\x18\x05\x18\u019B" +
		"\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x05\x18\u01A6\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x05\x18\u01AE\n\x18\x05\x18\u01B0\n\x18\x05\x18\u01B2\n\x18\x03\x18" +
		"\x03\x18\x05\x18\u01B6\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07" +
		"\x18\u01BD\n\x18\f\x18\x0E\x18\u01C0\v\x18\x03\x18\x03\x18\x06\x18\u01C4" +
		"\n\x18\r\x18\x0E\x18\u01C5\x05\x18\u01C8\n\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01D1\n\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x07\x18\u01D7\n\x18\f\x18\x0E\x18\u01DA\v\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01E3\n\x18\x05\x18" +
		"\u01E5\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01ED" +
		"\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u01F4\n\x18\f\x18" +
		"\x0E\x18\u01F7\v\x18\x03\x18\x03\x18\x05\x18\u01FB\n\x18\x03\x19\x03\x19" +
		"\x05\x19\u01FF\n\x19\x03\x19\x03\x19\x06\x19\u0203\n\x19\r\x19\x0E\x19" +
		"\u0204\x03\x19\x03\x19\x05\x19\u0209\n\x19\x03\x19\x05\x19\u020C\n\x19" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0215" +
		"\n\x1B\f\x1B\x0E\x1B\u0218\v\x1B\x03\x1B\x03\x1B\x05\x1B\u021C\n\x1B\x03" +
		"\x1B\x05\x1B\u021F\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B" +
		"\u0226\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u022D\n\x1B" +
		"\x05\x1B\u022F\n\x1B\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0234\n\x1C\f\x1C" +
		"\x0E\x1C\u0237\v\x1C\x03\x1C\x05\x1C\u023A\n\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x07\x1D\u023F\n\x1D\f\x1D\x0E\x1D\u0242\v\x1D\x03\x1D\x05\x1D\u0245\n" +
		"\x1D\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u024A\n\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x07\x1F\u024F\n\x1F\f\x1F\x0E\x1F\u0252\v\x1F\x03 \x03 \x03 \x05 \u0257" +
		"\n \x03!\x03!\x03!\x03!\x03!\x03!\x05!\u025F\n!\x03!\x03!\x05!\u0263\n" +
		"!\x03!\x03!\x05!\u0267\n!\x03\"\x03\"\x03\"\x05\"\u026C\n\"\x03\"\x03" +
		"\"\x03\"\x05\"\u0271\n\"\x03\"\x03\"\x05\"\u0275\n\"\x03\"\x05\"\u0278" +
		"\n\"\x03\"\x05\"\u027B\n\"\x03\"\x03\"\x05\"\u027F\n\"\x05\"\u0281\n\"" +
		"\x03#\x03#\x03#\x07#\u0286\n#\f#\x0E#\u0289\v#\x03$\x03$\x03$\x05$\u028E" +
		"\n$\x03$\x05$\u0291\n$\x03%\x03%\x03%\x03&\x03&\x03&\x03\'\x03\'\x03\'" +
		"\x03\'\x05\'\u029D\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u02A5" +
		"\n\'\f\'\x0E\'\u02A8\v\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(" +
		"\x03(\x03(\x03(\x05(\u02B6\n(\x03(\x03(\x03(\x05(\u02BB\n(\x05(\u02BD" +
		"\n(\x03(\x07(\u02C0\n(\f(\x0E(\u02C3\v(\x03)\x03)\x05)\u02C7\n)\x03)\x03" +
		")\x07)\u02CB\n)\f)\x0E)\u02CE\v)\x03)\x03)\x05)\u02D2\n)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x07)\u02E9\n)\f)\x0E)\u02EC\v)\x03*\x03*\x03*\x05" +
		"*\u02F1\n*\x03*\x03*\x03*\x05*\u02F6\n*\x03*\x03*\x03*\x05*\u02FB\n*\x03" +
		"*\x03*\x03*\x03*\x05*\u0301\n*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05" +
		"*\u030A\n*\x03*\x03*\x03*\x06*\u030F\n*\r*\x0E*\u0310\x05*\u0313\n*\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x05+\u031B\n+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x05+\u0324\n+\x07+\u0326\n+\f+\x0E+\u0329\v+\x03+\x05+\u032C\n" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0334\n+\x03,\x03,\x05,\u0338\n," +
		"\x03,\x03,\x03,\x03,\x05,\u033E\n,\x07,\u0340\n,\f,\x0E,\u0343\v,\x03" +
		",\x05,\u0346\n,\x05,\u0348\n,\x03-\x03-\x03-\x07-\u034D\n-\f-\x0E-\u0350" +
		"\v-\x03-\x05-\u0353\n-\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u035B\n.\f." +
		"\x0E.\u035E\v.\x03/\x03/\x030\x030\x030\x050\u0365\n0\x031\x031\x032\x03" +
		"2\x052\u036B\n2\x033\x033\x033\x053\u0370\n3\x034\x034\x034\x054\u0375" +
		"\n4\x034\x054\u0378\n4\x035\x035\x055\u037C\n5\x035\x035\x035\x035\x03" +
		"5\x055\u0383\n5\x036\x036\x036\x076\u0388\n6\f6\x0E6\u038B\v6\x036\x05" +
		"6\u038E\n6\x037\x037\x037\x037\x057\u0394\n7\x037\x037\x057\u0398\n7\x03" +
		"8\x038\x038\x078\u039D\n8\f8\x0E8\u03A0\v8\x038\x058\u03A3\n8\x039\x03" +
		"9\x039\x039\x059\u03A9\n9\x039\x059\u03AC\n9\x059\u03AE\n9\x039\x039\x05" +
		"9\u03B2\n9\x039\x059\u03B5\n9\x059\u03B7\n9\x03:\x03:\x05:\u03BB\n:\x03" +
		";\x03;\x03;\x03;\x03;\x05;\u03C2\n;\x03<\x03<\x03<\x03<\x05<\u03C8\n<" +
		"\x05<\u03CA\n<\x03<\x02\x02\x06LNPZ=\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02\x02\f\x03\x03\x05\x05\x03\x02+,\x03\x02HT\x04\x02" +
		"9:>>\x05\x02..;=FF\x03\x029:\x03\x0278\x04\x02)*bb\x03\x02VY\x04\x02." +
		".22\x02\u0459\x02{\x03\x02\x02\x02\x04\x84\x03\x02\x02\x02\x06\x88\x03" +
		"\x02\x02\x02\b\x8C\x03\x02\x02\x02\n\x95\x03\x02\x02\x02\f\xE1\x03\x02" +
		"\x02\x02\x0E\xED\x03\x02\x02\x02\x10\xEF\x03\x02\x02\x02\x12\xFA\x03\x02" +
		"\x02\x02\x14\xFF\x03\x02\x02\x02\x16\u0103\x03\x02\x02\x02\x18\u0107\x03" +
		"\x02\x02\x02\x1A\u010C\x03\x02\x02\x02\x1C\u011F\x03\x02\x02\x02\x1E\u012C" +
		"\x03\x02\x02\x02 \u0154\x03\x02\x02\x02\"\u0156\x03\x02\x02\x02$\u0159" +
		"\x03\x02\x02\x02&\u015C\x03\x02\x02\x02(\u016A\x03\x02\x02\x02*\u016C" +
		"\x03\x02\x02\x02,\u0171\x03\x02\x02\x02.\u01FA\x03\x02\x02\x020\u020B" +
		"\x03\x02\x02\x022\u020D\x03\x02\x02\x024\u022E\x03\x02\x02\x026\u0230" +
		"\x03\x02\x02\x028\u023B\x03\x02\x02\x02:\u0246\x03\x02\x02\x02<\u024B" +
		"\x03\x02\x02\x02>\u0253\x03\x02\x02\x02@\u0266\x03\x02\x02\x02B\u0280" +
		"\x03\x02\x02\x02D\u0282\x03\x02\x02\x02F\u0290\x03\x02\x02\x02H\u0292" +
		"\x03\x02\x02\x02J\u0295\x03\x02\x02\x02L\u029C\x03\x02\x02\x02N\u02A9" +
		"\x03\x02\x02\x02P\u02D1\x03\x02\x02\x02R\u0312\x03\x02\x02\x02T\u0333" +
		"\x03\x02\x02\x02V\u0337\x03\x02\x02\x02X\u0349\x03\x02\x02\x02Z\u0354" +
		"\x03\x02\x02\x02\\\u035F\x03\x02\x02\x02^\u0364\x03\x02\x02\x02`\u0366" +
		"\x03\x02\x02\x02b\u0368\x03\x02\x02\x02d\u036F\x03\x02\x02\x02f\u0377" +
		"\x03\x02\x02\x02h\u0382\x03\x02\x02\x02j\u0384\x03\x02\x02\x02l\u0397" +
		"\x03\x02\x02\x02n\u0399\x03\x02\x02\x02p\u03B6\x03\x02\x02\x02r\u03B8" +
		"\x03\x02\x02\x02t\u03BC\x03\x02\x02\x02v\u03C9\x03\x02\x02\x02x|\x05\x04" +
		"\x03\x02y|\x05\x06\x04\x02z|\x05\b\x05\x02{x\x03\x02\x02\x02{y\x03\x02" +
		"\x02\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x03\x02\x02\x02}~\x07\x02" +
		"\x02\x03~\x03\x03\x02\x02\x02\x7F\x85\x07\x05\x02\x02\x80\x85\x05,\x17" +
		"\x02\x81\x82\x05\f\x07\x02\x82\x83\x07\x05\x02\x02\x83\x85\x03\x02\x02" +
		"\x02\x84\x7F\x03\x02\x02\x02\x84\x80\x03\x02\x02\x02\x84\x81\x03\x02\x02" +
		"\x02\x85\x05\x03\x02\x02\x02\x86\x89\x07\x05\x02\x02\x87\x89\x05\n\x06" +
		"\x02\x88\x86\x03\x02\x02\x02\x88\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02" +
		"\x02\x8A\x88\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x07\x03\x02\x02" +
		"\x02\x8C\x90\x05X-\x02\x8D\x8F\x07\x05\x02\x02\x8E\x8D\x03\x02\x02\x02" +
		"\x8F\x92\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02" +
		"\x91\t\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x93\x96\x05,\x17\x02\x94" +
		"\x96\x05\f\x07\x02\x95\x93\x03\x02\x02\x02\x95\x94\x03\x02\x02\x02\x96" +
		"\v\x03\x02\x02\x02\x97\x98\x07\x0F\x02\x02\x98\x99\x05@!\x02\x99\x9A\x07" +
		"0\x02\x02\x9A\x9E\x05\x0E\b\x02\x9B\x9D\x05\x12\n\x02\x9C\x9B\x03\x02" +
		"\x02\x02\x9D\xA0\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02" +
		"\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA3\x05\x14" +
		"\v\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xE2\x03\x02" +
		"\x02\x02\xA4\xA5\x07\x12\x02\x02\xA5\xA6\x05@!\x02\xA6\xA7\x070\x02\x02" +
		"\xA7\xA9\x05\x0E\b\x02\xA8\xAA\x05\x14\v\x02\xA9\xA8\x03\x02\x02\x02\xA9" +
		"\xAA\x03\x02\x02\x02\xAA\xE2\x03\x02\x02\x02\xAB\xAD\x07%\x02\x02\xAC" +
		"\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE" +
		"\xAF\x07\x13\x02\x02\xAF\xB0\x056\x1C\x02\xB0\xB1\x07\x14\x02\x02\xB1" +
		"\xB2\x05X-\x02\xB2\xB3\x070\x02\x02\xB3\xB5\x05\x0E\b\x02\xB4\xB6\x05" +
		"\x14\v\x02\xB5\xB4\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xE2\x03" +
		"\x02\x02\x02\xB7\xB8\x07\x15\x02\x02\xB8\xB9\x070\x02\x02\xB9\xC6\x05" +
		"\x0E\b\x02\xBA\xBC\x05\x1A\x0E\x02\xBB\xBA\x03\x02\x02\x02\xBC\xBD\x03" +
		"\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC0\x03" +
		"\x02\x02\x02\xBF\xC1\x05\x14\v\x02\xC0\xBF\x03\x02\x02\x02\xC0\xC1\x03" +
		"\x02\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xC4\x05\x16\f\x02\xC3\xC2\x03" +
		"\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC7\x05" +
		"\x16\f\x02\xC6\xBB\x03\x02\x02\x02\xC6\xC5\x03\x02\x02\x02\xC7\xE2\x03" +
		"\x02\x02\x02\xC8\xCA\x07%\x02\x02\xC9\xC8\x03\x02\x02\x02\xC9\xCA\x03" +
		"\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x07\x18\x02\x02\xCC\xD1\x05" +
		"\x18\r\x02\xCD\xCE\x07/\x02\x02\xCE\xD0\x05\x18\r\x02\xCF\xCD\x03\x02" +
		"\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02" +
		"\x02\x02\xD2\xD4\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD5\x070" +
		"\x02\x02\xD5\xD6\x05\x0E\b\x02\xD6\xE2\x03\x02\x02\x02\xD7\xD9\x05\x10" +
		"\t\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA\xD8\x03\x02" +
		"\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDF\x03\x02\x02\x02\xDC\xDA\x03\x02" +
		"\x02\x02\xDD\xE0\x05\x1C\x0F\x02\xDE\xE0\x05\x1E\x10\x02\xDF\xDD\x03\x02" +
		"\x02\x02\xDF\xDE\x03\x02\x02\x02\xE0\xE2\x03\x02\x02\x02\xE1\x97\x03\x02" +
		"\x02\x02\xE1\xA4\x03\x02\x02\x02\xE1\xAC\x03\x02\x02\x02\xE1\xB7\x03\x02" +
		"\x02\x02\xE1\xC9\x03\x02\x02\x02\xE1\xDA\x03\x02\x02\x02\xE2\r\x03\x02" +
		"\x02\x02\xE3\xEE\x05,\x17\x02\xE4\xE5\x07\x05\x02\x02\xE5\xE7\x07\x03" +
		"\x02\x02\xE6\xE8\x05\n\x06\x02\xE7\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02" +
		"\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEB\x03\x02" +
		"\x02\x02\xEB\xEC\x07\x04\x02\x02\xEC\xEE\x03\x02\x02\x02\xED\xE3\x03\x02" +
		"\x02\x02\xED\xE4\x03\x02\x02\x02\xEE\x0F\x03\x02\x02\x02\xEF\xF0\x07F" +
		"\x02\x02\xF0\xF6\x05Z.\x02\xF1\xF3\x07\\\x02\x02\xF2\xF4\x05j6\x02\xF3" +
		"\xF2\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5" +
		"\xF7\x07]\x02\x02\xF6\xF1\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7" +
		"\xF8\x03\x02\x02\x02\xF8\xF9\x07\x05\x02\x02\xF9\x11\x03\x02\x02\x02\xFA" +
		"\xFB\x07\x10\x02\x02\xFB\xFC\x05@!\x02\xFC\xFD\x070\x02\x02\xFD\xFE\x05" +
		"\x0E\b\x02\xFE\x13\x03\x02\x02\x02\xFF\u0100\x07\x11\x02\x02\u0100\u0101" +
		"\x070\x02\x02\u0101\u0102\x05\x0E\b\x02\u0102\x15\x03\x02\x02\x02\u0103" +
		"\u0104\x07\x17\x02\x02\u0104\u0105\x070\x02\x02\u0105\u0106\x05\x0E\b" +
		"\x02\u0106\x17\x03\x02\x02\x02\u0107\u010A\x05@!\x02\u0108\u0109\x07\f" +
		"\x02\x02\u0109\u010B\x05P)\x02\u010A\u0108\x03\x02\x02\x02\u010A\u010B" +
		"\x03\x02\x02\x02\u010B\x19\x03\x02\x02\x02\u010C\u011A\x07\x19\x02\x02" +
		"\u010D\u0118\x05@!\x02\u010E\u010F\x06\x0E\x02\x02\u010F\u0110\x07/\x02" +
		"\x02\u0110\u0111\x05\\/\x02\u0111\u0112\b\x0E\x01\x02\u0112\u0119\x03" +
		"\x02\x02\x02\u0113\u0114\x06\x0E\x03\x02\u0114\u0115\x07\f\x02\x02\u0115" +
		"\u0116\x05\\/\x02\u0116\u0117\b\x0E\x01\x02\u0117\u0119\x03\x02\x02\x02" +
		"\u0118\u010E\x03\x02\x02\x02\u0118\u0113\x03\x02\x02\x02\u0118\u0119\x03" +
		"\x02\x02\x02\u0119\u011B\x03\x02\x02\x02\u011A\u010D\x03\x02\x02\x02\u011A" +
		"\u011B\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011D\x070\x02" +
		"\x02\u011D\u011E\x05\x0E\b\x02\u011E\x1B\x03\x02\x02\x02\u011F\u0120\x07" +
		"\x1F\x02\x02\u0120\u0126\x05\\/\x02\u0121\u0123\x07\\\x02\x02\u0122\u0124" +
		"\x05j6\x02\u0123\u0122\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124" +
		"\u0125\x03\x02\x02\x02\u0125\u0127\x07]\x02\x02\u0126\u0121\x03\x02\x02" +
		"\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0129" +
		"\x070\x02\x02\u0129\u012A\x05\x0E\b\x02\u012A\x1D\x03\x02\x02\x02\u012B" +
		"\u012D\x07%\x02\x02\u012C\u012B\x03\x02\x02\x02\u012C\u012D\x03\x02\x02" +
		"\x02\u012D\u012E\x03\x02\x02\x02\u012E\u012F\x07\x06\x02\x02\u012F\u0130" +
		"\x05\\/\x02\u0130\u0132\x07\\\x02\x02\u0131\u0133\x05 \x11\x02\u0132\u0131" +
		"\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02" +
		"\u0134\u0137\x07]\x02\x02\u0135\u0136\x07G\x02\x02\u0136\u0138\x05@!\x02" +
		"\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0139\x03" +
		"\x02\x02\x02\u0139\u013A\x070\x02\x02\u013A\u013B\x05\x0E\b\x02\u013B" +
		"\x1F\x03\x02\x02\x02\u013C\u013D\x05&\x14\x02\u013D\u013E\x07/\x02\x02" +
		"\u013E\u0140\x03\x02\x02\x02\u013F\u013C\x03\x02\x02\x02\u013F\u0140\x03" +
		"\x02\x02\x02\u0140\u014B\x03\x02\x02\x02\u0141\u0144\x05\"\x12\x02\u0142" +
		"\u0143\x07/\x02\x02\u0143\u0145\x05&\x14\x02\u0144\u0142\x03\x02\x02\x02" +
		"\u0144\u0145\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146\u0147\x07" +
		"/\x02\x02\u0147\u0149\x05$\x13\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0149" +
		"\x03\x02\x02\x02\u0149\u014C\x03\x02\x02\x02\u014A\u014C\x05$\x13\x02" +
		"\u014B\u0141\x03\x02\x02\x02\u014B\u014A\x03\x02\x02\x02\u014C\u014E\x03" +
		"\x02\x02\x02\u014D\u014F\x07/\x02\x02\u014E\u014D\x03\x02\x02\x02\u014E" +
		"\u014F\x03\x02\x02\x02\u014F\u0155\x03\x02\x02\x02\u0150\u0152\x05&\x14" +
		"\x02\u0151\u0153\x07/\x02\x02\u0152\u0151\x03\x02\x02\x02\u0152\u0153" +
		"\x03\x02\x02\x02\u0153\u0155\x03\x02\x02\x02\u0154\u013F\x03\x02\x02\x02" +
		"\u0154\u0150\x03\x02\x02\x02\u0155!\x03\x02\x02\x02\u0156\u0157\x07.\x02" +
		"\x02\u0157\u0158\x05*\x16\x02\u0158#\x03\x02\x02\x02\u0159\u015A\x072" +
		"\x02\x02\u015A\u015B\x05*\x16\x02\u015B%\x03\x02\x02\x02\u015C\u0161\x05" +
		"(\x15\x02\u015D\u015E\x07/\x02\x02\u015E\u0160\x05(\x15\x02\u015F\u015D" +
		"\x03\x02\x02\x02\u0160\u0163\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02" +
		"\u0161\u0162\x03\x02\x02\x02\u0162\'\x03\x02\x02\x02\u0163\u0161\x03\x02" +
		"\x02\x02\u0164\u0167\x05*\x16\x02\u0165\u0166\x073\x02\x02\u0166\u0168" +
		"\x05@!\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168" +
		"\u016B\x03\x02\x02\x02\u0169\u016B\x07.\x02\x02\u016A\u0164\x03\x02\x02" +
		"\x02\u016A\u0169\x03\x02\x02\x02\u016B)\x03\x02\x02\x02\u016C\u016F\x05" +
		"\\/\x02\u016D\u016E\x070\x02\x02\u016E\u0170\x05@!\x02\u016F\u016D\x03" +
		"\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170+\x03\x02\x02\x02\u0171" +
		"\u0176\x05.\x18\x02\u0172\u0173\x071\x02\x02\u0173\u0175\x05.\x18\x02" +
		"\u0174\u0172\x03\x02\x02\x02\u0175\u0178\x03\x02\x02\x02\u0176\u0174\x03" +
		"\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u017A\x03\x02\x02\x02\u0178" +
		"\u0176\x03\x02\x02\x02\u0179\u017B\x071\x02\x02\u017A\u0179\x03\x02\x02" +
		"\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017D" +
		"\t\x02\x02\x02\u017D-\x03\x02\x02\x02\u017E\u0180\x050\x19\x02\u017F\u0181" +
		"\x054\x1B\x02\u0180\u017F\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02" +
		"\u0181\u01FB\x03\x02\x02\x02\u0182\u0183\x06\x18\x04\x02\u0183\u019A\x07" +
		"\'\x02\x02\u0184\u0189\x05@!\x02\u0185\u0186\x07/\x02\x02\u0186\u0188" +
		"\x05@!\x02\u0187\u0185\x03\x02\x02\x02\u0188\u018B\x03\x02\x02\x02\u0189" +
		"\u0187\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018D\x03\x02" +
		"\x02\x02\u018B\u0189\x03\x02\x02\x02\u018C\u018E\x07/\x02\x02\u018D\u018C" +
		"\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u019B\x03\x02\x02\x02" +
		"\u018F\u0190\x078\x02\x02\u0190\u0193\x05@!\x02\u0191\u0192\x07/\x02\x02" +
		"\u0192\u0194\x05@!\x02\u0193\u0191\x03\x02\x02\x02\u0194\u0195\x03\x02" +
		"\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196" +
		"\u0198\x03\x02\x02\x02\u0197\u0199\x07/\x02\x02\u0198\u0197\x03\x02\x02" +
		"\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019B\x03\x02\x02\x02\u019A\u0184" +
		"\x03\x02\x02\x02\u019A\u018F\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02" +
		"\u019C\u019D\b\x18\x01\x02\u019D\u01FB\x03\x02\x02\x02\u019E\u019F\x07" +
		"!\x02\x02\u019F\u01FB\x056\x1C\x02\u01A0\u01FB\x07\"\x02\x02\u01A1\u01FB" +
		"\x07$\x02\x02\u01A2\u01FB\x07#\x02\x02\u01A3\u01A5\x07\x07\x02\x02\u01A4" +
		"\u01A6\x05X-\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02" +
		"\u01A6\u01FB\x03\x02\x02\x02\u01A7\u01B1\x07\b\x02\x02\u01A8\u01AF\x05" +
		"@!\x02\u01A9\u01AA\x07/\x02\x02\u01AA\u01AD\x05@!\x02\u01AB\u01AC\x07" +
		"/\x02\x02\u01AC\u01AE\x05@!\x02\u01AD\u01AB\x03\x02\x02\x02\u01AD\u01AE" +
		"\x03\x02\x02\x02\u01AE\u01B0\x03\x02\x02\x02\u01AF\u01A9\x03\x02\x02\x02" +
		"\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B2\x03\x02\x02\x02\u01B1\u01A8\x03" +
		"\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3" +
		"\u01B4\x07\t\x02\x02\u01B4\u01B6\x05@!\x02\u01B5\u01B3\x03\x02\x02\x02" +
		"\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01FB\x03\x02\x02\x02\u01B7\u01FB\x05" +
		"b2\x02\u01B8\u01B9\x07\n\x02\x02\u01B9\u01FB\x05<\x1F\x02\u01BA\u01C7" +
		"\x07\t\x02\x02\u01BB\u01BD\t\x03\x02\x02\u01BC\u01BB\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01BD\u01C0\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03" +
		"\x02\x02\x02\u01BF\u01C1\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1" +
		"\u01C8\x05Z.\x02\u01C2\u01C4\t\x03\x02\x02\u01C3\u01C2\x03\x02\x02\x02" +
		"\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03" +
		"\x02\x02\x02\u01C6\u01C8\x03\x02\x02\x02\u01C7\u01BE\x03\x02\x02\x02\u01C7" +
		"\u01C3\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01D0\x07\n\x02" +
		"\x02\u01CA\u01D1\x07.\x02\x02\u01CB\u01CC\x07\\\x02\x02\u01CC\u01CD\x05" +
		"8\x1D\x02\u01CD\u01CE\x07]\x02\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF\u01D1" +
		"\x058\x1D\x02\u01D0\u01CA\x03\x02\x02\x02\u01D0\u01CB\x03\x02\x02\x02" +
		"\u01D0\u01CF\x03\x02\x02\x02\u01D1\u01FB\x03\x02\x02\x02\u01D2\u01D3\x07" +
		"\r\x02\x02\u01D3\u01D8\x05\\/\x02\u01D4\u01D5\x07/\x02\x02\u01D5\u01D7" +
		"\x05\\/\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01DA\x03\x02\x02\x02\u01D8" +
		"\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01FB\x03\x02" +
		"\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01DC\x06\x18\x05\x02\u01DC" +
		"\u01DD\x07(\x02\x02\u01DD\u01E4\x05P)\x02\u01DE\u01DF\x07\x14\x02\x02" +
		"\u01DF\u01E2\x05@!\x02\u01E0\u01E1\x07/\x02\x02\u01E1\u01E3\x05@!\x02" +
		"\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E5\x03" +
		"\x02\x02\x02\u01E4\u01DE\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5" +
		"\u01E6\x03\x02\x02\x02\u01E6\u01E7\b\x18\x01\x02\u01E7\u01FB\x03\x02\x02" +
		"\x02\u01E8\u01E9\x07\x0E\x02\x02\u01E9\u01EC\x05@!\x02\u01EA\u01EB\x07" +
		"/\x02\x02\u01EB\u01ED\x05@!\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC\u01ED" +
		"\x03\x02\x02\x02\u01ED\u01FB\x03\x02\x02\x02\u01EE\u01EF\x06\x18\x06\x02" +
		"\u01EF\u01F0\x07\v\x02\x02\u01F0\u01F5\x05\\/\x02\u01F1\u01F2\x07/\x02" +
		"\x02\u01F2\u01F4\x05\\/\x02\u01F3\u01F1\x03\x02\x02\x02\u01F4\u01F7\x03" +
		"\x02\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6" +
		"\u01F8\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F8\u01F9\b\x18\x01" +
		"\x02\u01F9\u01FB\x03\x02\x02\x02\u01FA\u017E\x03\x02\x02\x02\u01FA\u0182" +
		"\x03\x02\x02\x02\u01FA\u019E\x03\x02\x02\x02\u01FA\u01A0\x03\x02\x02\x02" +
		"\u01FA\u01A1\x03\x02\x02\x02\u01FA\u01A2\x03\x02\x02\x02\u01FA\u01A3\x03" +
		"\x02\x02\x02\u01FA\u01A7\x03\x02\x02\x02\u01FA\u01B7\x03\x02\x02\x02\u01FA" +
		"\u01B8\x03\x02\x02\x02\u01FA\u01BA\x03\x02\x02\x02\u01FA\u01D2\x03\x02" +
		"\x02\x02\u01FA\u01DB\x03\x02\x02\x02\u01FA\u01E8\x03\x02\x02\x02\u01FA" +
		"\u01EE\x03\x02\x02\x02\u01FB/\x03\x02\x02\x02\u01FC\u01FF\x05@!\x02\u01FD" +
		"\u01FF\x052\x1A\x02\u01FE\u01FC\x03\x02\x02\x02\u01FE\u01FD\x03\x02\x02" +
		"\x02\u01FF\u0200\x03\x02\x02\x02\u0200\u0201\x07/\x02\x02\u0201\u0203" +
		"\x03\x02\x02\x02\u0202\u01FE\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02" +
		"\u0204\u0202\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0208\x03" +
		"\x02\x02\x02\u0206\u0209\x05@!\x02\u0207\u0209\x052\x1A\x02\u0208\u0206" +
		"\x03\x02\x02\x02\u0208\u0207\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02" +
		"\u0209\u020C\x03\x02\x02\x02\u020A\u020C\x05X-\x02\u020B\u0202\x03\x02" +
		"\x02\x02\u020B\u020A\x03\x02\x02\x02\u020C1\x03\x02\x02\x02\u020D\u020E" +
		"\x07.\x02\x02\u020E\u020F\x05P)\x02\u020F3\x03\x02\x02\x02\u0210\u021E" +
		"\x073\x02\x02\u0211\u0216\x050\x19\x02\u0212\u0213\x073\x02\x02\u0213" +
		"\u0215\x050\x19\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0218\x03\x02\x02" +
		"\x02\u0216\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u021B" +
		"\x03\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0219\u021A\x073\x02\x02" +
		"\u021A\u021C\x05b2\x02\u021B\u0219\x03\x02\x02\x02\u021B\u021C\x03\x02" +
		"\x02\x02\u021C\u021F\x03\x02\x02\x02\u021D\u021F\x05b2\x02\u021E\u0211" +
		"\x03\x02\x02\x02\u021E\u021D\x03\x02\x02\x02\u021F\u022F\x03\x02\x02\x02" +
		"\u0220\u0221\x06\x1B\x07\x02\u0221\u0222\x070\x02\x02\u0222\u0225\x05" +
		"@!\x02\u0223\u0224\x073\x02\x02\u0224\u0226\x05X-\x02\u0225\u0223\x03" +
		"\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227" +
		"\u0228\b\x1B\x01\x02\u0228\u022F\x03\x02\x02\x02\u0229\u022C\t\x04\x02" +
		"\x02\u022A\u022D\x05b2\x02\u022B\u022D\x05X-\x02\u022C\u022A\x03\x02\x02" +
		"\x02\u022C\u022B\x03\x02\x02\x02\u022D\u022F\x03\x02\x02\x02\u022E\u0210" +
		"\x03\x02\x02\x02\u022E\u0220\x03\x02\x02\x02\u022E\u0229\x03\x02\x02\x02" +
		"\u022F5\x03\x02\x02\x02\u0230\u0235\x05P)\x02\u0231\u0232\x07/\x02\x02" +
		"\u0232\u0234\x05P)\x02\u0233\u0231\x03\x02\x02\x02\u0234\u0237\x03\x02" +
		"\x02\x02\u0235\u0233\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236" +
		"\u0239\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02\u0238\u023A\x07/\x02" +
		"\x02\u0239\u0238\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A7\x03" +
		"\x02\x02\x02\u023B\u0240\x05:\x1E\x02\u023C\u023D\x07/\x02\x02\u023D\u023F" +
		"\x05:\x1E\x02\u023E\u023C\x03\x02\x02\x02\u023F\u0242\x03\x02\x02\x02" +
		"\u0240\u023E\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u0244\x03" +
		"\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0243\u0245\x07/\x02\x02\u0244" +
		"\u0243\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u02459\x03\x02\x02" +
		"\x02\u0246\u0249\x05\\/\x02\u0247\u0248\x07\f\x02\x02\u0248\u024A\x05" +
		"\\/\x02\u0249\u0247\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A" +
		";\x03\x02\x02\x02\u024B\u0250\x05> \x02\u024C\u024D\x07/\x02\x02\u024D" +
		"\u024F\x05> \x02\u024E\u024C\x03\x02\x02\x02\u024F\u0252\x03\x02\x02\x02" +
		"\u0250\u024E\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251=\x03\x02" +
		"\x02\x02\u0252\u0250\x03\x02\x02\x02\u0253\u0256\x05Z.\x02\u0254\u0255" +
		"\x07\f\x02\x02\u0255\u0257\x05\\/\x02\u0256\u0254\x03\x02\x02\x02\u0256" +
		"\u0257\x03\x02\x02\x02\u0257?\x03\x02\x02\x02\u0258\u025E\x05L\'\x02\u0259" +
		"\u025A\x07\x0F\x02\x02\u025A\u025B\x05L\'\x02\u025B\u025C\x07\x11\x02" +
		"\x02\u025C\u025D\x05@!\x02\u025D\u025F\x03\x02\x02\x02\u025E\u0259\x03" +
		"\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u0267\x03\x02\x02\x02\u0260" +
		"\u0262\x07\x1A\x02\x02\u0261\u0263\x05B\"\x02\u0262\u0261\x03\x02\x02" +
		"\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0265" +
		"\x070\x02\x02\u0265\u0267\x05@!\x02\u0266\u0258\x03\x02\x02\x02\u0266" +
		"\u0260\x03\x02\x02\x02\u0267A\x03\x02\x02\x02\u0268\u0269\x05D#\x02\u0269" +
		"\u026A\x07/\x02\x02\u026A\u026C\x03\x02\x02\x02\u026B\u0268\x03\x02\x02" +
		"\x02\u026B\u026C\x03\x02\x02\x02\u026C\u0277\x03\x02\x02\x02\u026D\u0270" +
		"\x05H%\x02\u026E\u026F\x07/\x02\x02\u026F\u0271\x05D#\x02\u0270\u026E" +
		"\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271\u0274\x03\x02\x02\x02" +
		"\u0272\u0273\x07/\x02\x02\u0273\u0275\x05J&\x02\u0274\u0272\x03\x02\x02" +
		"\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0278\x03\x02\x02\x02\u0276\u0278" +
		"\x05J&\x02\u0277\u026D\x03\x02\x02\x02\u0277\u0276\x03\x02\x02\x02\u0278" +
		"\u027A\x03\x02\x02\x02\u0279\u027B\x07/\x02\x02\u027A\u0279\x03\x02\x02" +
		"\x02\u027A\u027B\x03\x02\x02\x02\u027B\u0281\x03\x02\x02\x02\u027C\u027E" +
		"\x05D#\x02\u027D\u027F\x07/\x02\x02\u027E\u027D\x03\x02\x02\x02\u027E" +
		"\u027F\x03\x02\x02\x02\u027F\u0281\x03\x02\x02\x02\u0280\u026B\x03\x02" +
		"\x02\x02\u0280\u027C\x03\x02\x02\x02\u0281C\x03\x02\x02\x02\u0282\u0287" +
		"\x05F$\x02\u0283\u0284\x07/\x02\x02\u0284\u0286\x05F$\x02\u0285\u0283" +
		"\x03\x02\x02\x02\u0286\u0289\x03\x02\x02\x02\u0287\u0285\x03\x02\x02\x02" +
		"\u0287\u0288\x03\x02\x02\x02\u0288E\x03\x02\x02\x02\u0289\u0287\x03\x02" +
		"\x02\x02\u028A\u028D\x05\\/\x02\u028B\u028C\x073\x02\x02\u028C\u028E\x05" +
		"@!\x02\u028D\u028B\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u0291" +
		"\x03\x02\x02\x02\u028F\u0291\x07.\x02\x02\u0290\u028A\x03\x02\x02\x02" +
		"\u0290\u028F\x03\x02\x02\x02\u0291G\x03\x02\x02\x02\u0292\u0293\x07.\x02" +
		"\x02\u0293\u0294\x05\\/\x02\u0294I\x03\x02\x02\x02\u0295\u0296\x072\x02" +
		"\x02\u0296\u0297\x05\\/\x02\u0297K\x03\x02\x02\x02\u0298\u0299\b\'\x01" +
		"\x02\u0299\u029D\x05N(\x02\u029A\u029B\x07\x1D\x02\x02\u029B\u029D\x05" +
		"L\'\x05\u029C\u0298\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02\u029D" +
		"\u02A6\x03\x02\x02\x02\u029E\u029F\f\x04\x02\x02\u029F\u02A0\x07\x1C\x02" +
		"\x02\u02A0\u02A5\x05L\'\x05\u02A1\u02A2\f\x03\x02\x02\u02A2\u02A3\x07" +
		"\x1B\x02\x02\u02A3\u02A5\x05L\'\x04\u02A4\u029E\x03\x02\x02\x02\u02A4" +
		"\u02A1\x03\x02\x02\x02\u02A5\u02A8\x03\x02\x02\x02\u02A6\u02A4\x03\x02" +
		"\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7M\x03\x02\x02\x02\u02A8\u02A6" +
		"\x03\x02\x02\x02\u02A9\u02AA\b(\x01\x02\u02AA\u02AB\x05P)\x02\u02AB\u02C1" +
		"\x03\x02\x02\x02\u02AC\u02BC\f\x04\x02\x02\u02AD\u02BD\x07?\x02\x02\u02AE" +
		"\u02BD\x07@\x02\x02\u02AF\u02BD\x07A\x02\x02\u02B0\u02BD\x07B\x02\x02" +
		"\u02B1\u02BD\x07C\x02\x02\u02B2\u02BD\x07D\x02\x02\u02B3\u02BD\x07E\x02" +
		"\x02\u02B4\u02B6\x07\x1D\x02\x02\u02B5\u02B4\x03\x02\x02\x02\u02B5\u02B6" +
		"\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02BD\x07\x14\x02\x02" +
		"\u02B8\u02BA\x07\x1E\x02\x02\u02B9\u02BB\x07\x1D\x02\x02\u02BA\u02B9\x03" +
		"\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BD\x03\x02\x02\x02\u02BC" +
		"\u02AD\x03\x02\x02\x02\u02BC\u02AE\x03\x02\x02\x02\u02BC\u02AF\x03\x02" +
		"\x02\x02\u02BC\u02B0\x03\x02\x02\x02\u02BC\u02B1\x03\x02\x02\x02\u02BC" +
		"\u02B2\x03\x02\x02\x02\u02BC\u02B3\x03\x02\x02\x02\u02BC\u02B5\x03\x02" +
		"\x02\x02\u02BC\u02B8\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE" +
		"\u02C0\x05N(\x05\u02BF\u02AC\x03\x02\x02\x02\u02C0\u02C3\x03\x02\x02\x02" +
		"\u02C1\u02BF\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2O\x03\x02" +
		"\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C4\u02C6\b)\x01\x02\u02C5\u02C7" +
		"\x07&\x02\x02\u02C6\u02C5\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02" +
		"\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02CC\x05R*\x02\u02C9\u02CB\x05f4\x02" +
		"\u02CA\u02C9\x03\x02\x02\x02\u02CB\u02CE\x03\x02\x02\x02\u02CC\u02CA\x03" +
		"\x02\x02\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD\u02D2\x03\x02\x02\x02\u02CE" +
		"\u02CC\x03\x02\x02\x02\u02CF\u02D0\t\x05\x02\x02\u02D0\u02D2\x05P)\t\u02D1" +
		"\u02C4\x03\x02\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D2\u02EA\x03\x02" +
		"\x02\x02\u02D3\u02D4\f\n\x02\x02\u02D4\u02D5\x072\x02\x02\u02D5\u02E9" +
		"\x05P)\n\u02D6\u02D7\f\b\x02\x02\u02D7\u02D8\t\x06\x02\x02\u02D8\u02E9" +
		"\x05P)\t\u02D9\u02DA\f\x07\x02\x02\u02DA\u02DB\t\x07\x02\x02\u02DB\u02E9" +
		"\x05P)\b\u02DC\u02DD\f\x06\x02\x02\u02DD\u02DE\t\b\x02\x02\u02DE\u02E9" +
		"\x05P)\x07\u02DF\u02E0\f\x05\x02\x02\u02E0\u02E1\x076\x02\x02\u02E1\u02E9" +
		"\x05P)\x06\u02E2\u02E3\f\x04\x02\x02\u02E3\u02E4\x075\x02\x02\u02E4\u02E9" +
		"\x05P)\x05\u02E5\u02E6\f\x03\x02\x02\u02E6\u02E7\x074\x02\x02\u02E7\u02E9" +
		"\x05P)\x04\u02E8\u02D3\x03\x02\x02\x02\u02E8\u02D6\x03\x02\x02\x02\u02E8" +
		"\u02D9\x03\x02\x02\x02\u02E8\u02DC\x03\x02\x02\x02\u02E8\u02DF\x03\x02" +
		"\x02\x02\u02E8\u02E2\x03\x02\x02\x02\u02E8\u02E5\x03\x02\x02\x02\u02E9" +
		"\u02EC\x03\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02EB\x03\x02" +
		"\x02\x02\u02EBQ\x03\x02\x02\x02\u02EC\u02EA\x03\x02\x02\x02\u02ED\u02F0" +
		"\x07\\\x02\x02\u02EE\u02F1\x05b2\x02\u02EF\u02F1\x05V,\x02\u02F0\u02EE" +
		"\x03\x02\x02\x02\u02F0\u02EF\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02" +
		"\u02F1\u02F2\x03\x02\x02\x02\u02F2\u0313\x07]\x02\x02\u02F3\u02F5\x07" +
		"`\x02\x02\u02F4\u02F6\x05V,\x02\u02F5\u02F4\x03\x02\x02\x02\u02F5\u02F6" +
		"\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u0313\x07a\x02\x02" +
		"\u02F8\u02FA\x07^\x02\x02\u02F9\u02FB\x05T+\x02\u02FA\u02F9\x03\x02\x02" +
		"\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FC\u0313" +
		"\x07_\x02\x02\u02FD\u02FE\x07-\x02\x02\u02FE\u0300\x05X-\x02\u02FF\u0301" +
		"\x07/\x02\x02\u0300\u02FF\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02" +
		"\u0301\u0302\x03\x02\x02\x02\u0302\u0303\x07-\x02\x02\u0303\u0313\x03" +
		"\x02\x02\x02\u0304\u0313\x07,\x02\x02\u0305\u0313\x05\\/\x02\u0306\u0313" +
		"\x07\'\x02\x02\u0307\u0313\x07(\x02\x02\u0308\u030A\x07:\x02\x02\u0309" +
		"\u0308\x03\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A\u030B\x03\x02" +
		"\x02\x02\u030B\u0313\x05^0\x02\u030C\u0313\x07\x16\x02\x02\u030D\u030F" +
		"\x07U\x02\x02\u030E\u030D\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02" +
		"\u0310\u030E\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311\u0313\x03" +
		"\x02\x02\x02\u0312\u02ED\x03\x02\x02\x02\u0312\u02F3\x03\x02\x02\x02\u0312" +
		"\u02F8\x03\x02\x02\x02\u0312\u02FD\x03\x02\x02\x02\u0312\u0304\x03\x02" +
		"\x02\x02\u0312\u0305\x03\x02\x02\x02\u0312\u0306\x03\x02\x02\x02\u0312" +
		"\u0307\x03\x02\x02\x02\u0312\u0309\x03\x02\x02\x02\u0312\u030C\x03\x02" +
		"\x02\x02\u0312\u030E\x03\x02\x02\x02\u0313S\x03\x02\x02\x02\u0314\u0315" +
		"\x05@!\x02\u0315\u0316\x070\x02\x02\u0316\u0317\x05@!\x02\u0317\u031B" +
		"\x03\x02\x02\x02\u0318\u0319\x072\x02\x02\u0319\u031B\x05P)\x02\u031A" +
		"\u0314\x03\x02\x02\x02\u031A\u0318\x03\x02\x02\x02\u031B\u0327\x03\x02" +
		"\x02\x02\u031C\u0323\x07/\x02\x02\u031D\u031E\x05@!\x02\u031E\u031F\x07" +
		"0\x02\x02\u031F\u0320\x05@!\x02\u0320\u0324\x03\x02\x02\x02\u0321\u0322" +
		"\x072\x02\x02\u0322\u0324\x05P)\x02\u0323\u031D\x03\x02\x02\x02\u0323" +
		"\u0321\x03\x02\x02\x02\u0324\u0326\x03\x02\x02\x02\u0325\u031C\x03\x02" +
		"\x02\x02\u0326\u0329\x03\x02\x02\x02\u0327\u0325\x03\x02\x02\x02\u0327" +
		"\u0328\x03\x02\x02\x02\u0328\u032B\x03\x02\x02\x02\u0329\u0327\x03\x02" +
		"\x02\x02\u032A\u032C\x07/\x02\x02\u032B\u032A\x03\x02\x02\x02\u032B\u032C" +
		"\x03\x02\x02\x02\u032C\u0334\x03\x02\x02\x02\u032D\u032E\x05@!\x02\u032E" +
		"\u032F\x070\x02\x02\u032F\u0330\x05@!\x02\u0330\u0331\x05t;\x02\u0331" +
		"\u0334\x03\x02\x02\x02\u0332\u0334\x05V,\x02\u0333\u031A\x03\x02\x02\x02" +
		"\u0333\u032D\x03\x02\x02\x02\u0333\u0332\x03\x02\x02\x02\u0334U\x03\x02" +
		"\x02\x02\u0335\u0338\x05@!\x02\u0336\u0338\x052\x1A\x02\u0337\u0335\x03" +
		"\x02\x02\x02\u0337\u0336\x03\x02\x02\x02\u0338\u0347\x03\x02\x02\x02\u0339" +
		"\u0348\x05t;\x02\u033A\u033D\x07/\x02\x02\u033B\u033E\x05@!\x02\u033C" +
		"\u033E\x052\x1A\x02\u033D\u033B\x03\x02\x02\x02\u033D\u033C\x03\x02\x02" +
		"\x02\u033E\u0340\x03\x02\x02\x02\u033F\u033A\x03\x02\x02\x02\u0340\u0343" +
		"\x03\x02\x02\x02\u0341\u033F\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02" +
		"\u0342\u0345\x03\x02\x02\x02\u0343\u0341\x03\x02\x02\x02\u0344\u0346\x07" +
		"/\x02\x02\u0345\u0344\x03\x02\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346" +
		"\u0348\x03\x02\x02\x02\u0347\u0339\x03\x02\x02\x02\u0347\u0341\x03\x02" +
		"\x02\x02\u0348W\x03\x02\x02\x02\u0349\u034E\x05@!\x02\u034A\u034B\x07" +
		"/\x02\x02\u034B\u034D\x05@!\x02\u034C\u034A\x03\x02\x02\x02\u034D\u0350" +
		"\x03\x02\x02\x02\u034E\u034C\x03\x02\x02\x02\u034E\u034F\x03\x02\x02\x02" +
		"\u034F\u0352\x03\x02\x02\x02\u0350\u034E\x03\x02\x02\x02\u0351\u0353\x07" +
		"/\x02\x02\u0352\u0351\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353" +
		"Y\x03\x02\x02\x02\u0354\u0355\b.\x01\x02\u0355\u0356\x05\\/\x02\u0356" +
		"\u035C\x03\x02\x02\x02\u0357\u0358\f\x04\x02\x02\u0358\u0359\x07+\x02" +
		"\x02\u0359\u035B\x05\\/\x02\u035A\u0357\x03\x02\x02\x02\u035B\u035E\x03" +
		"\x02\x02\x02\u035C\u035A\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D" +
		"[\x03\x02\x02\x02\u035E\u035C\x03\x02\x02\x02\u035F\u0360\t\t\x02\x02" +
		"\u0360]\x03\x02\x02\x02\u0361\u0365\x05`1\x02\u0362\u0365\x07Z\x02\x02" +
		"\u0363\u0365\x07[\x02\x02\u0364\u0361\x03\x02\x02\x02\u0364\u0362\x03" +
		"\x02\x02\x02\u0364\u0363\x03\x02\x02\x02\u0365_\x03\x02\x02\x02\u0366" +
		"\u0367\t\n\x02\x02\u0367a\x03\x02\x02\x02\u0368\u036A\x07 \x02\x02\u0369" +
		"\u036B\x05d3\x02\u036A\u0369\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02" +
		"\u036Bc\x03\x02\x02\x02\u036C\u036D\x07\t\x02\x02\u036D\u0370\x05@!\x02" +
		"\u036E\u0370\x05X-\x02\u036F\u036C\x03\x02\x02\x02\u036F\u036E\x03\x02" +
		"\x02\x02\u0370e\x03\x02\x02\x02\u0371\u0372\x07+\x02\x02\u0372\u0374\x05" +
		"\\/\x02\u0373\u0375\x05h5\x02\u0374\u0373\x03\x02\x02\x02\u0374\u0375" +
		"\x03\x02\x02\x02\u0375\u0378\x03\x02\x02\x02\u0376\u0378\x05h5\x02\u0377" +
		"\u0371\x03\x02\x02\x02\u0377\u0376\x03\x02\x02\x02\u0378g\x03\x02\x02" +
		"\x02\u0379\u037B\x07\\\x02\x02\u037A\u037C\x05j6\x02\u037B\u037A\x03\x02" +
		"\x02\x02\u037B\u037C\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D" +
		"\u0383\x07]\x02\x02\u037E\u037F\x07`\x02\x02\u037F\u0380\x05n8\x02\u0380" +
		"\u0381\x07a\x02\x02\u0381\u0383\x03\x02\x02\x02\u0382\u0379\x03\x02\x02" +
		"\x02\u0382\u037E\x03\x02\x02\x02\u0383i\x03\x02\x02\x02\u0384\u0389\x05" +
		"l7\x02\u0385\u0386\x07/\x02\x02\u0386\u0388\x05l7\x02\u0387\u0385\x03" +
		"\x02\x02\x02\u0388\u038B\x03\x02\x02\x02\u0389\u0387\x03\x02\x02\x02\u0389" +
		"\u038A\x03\x02\x02\x02\u038A\u038D\x03\x02\x02\x02\u038B\u0389\x03\x02" +
		"\x02\x02\u038C\u038E\x07/\x02\x02\u038D\u038C\x03\x02\x02\x02\u038D\u038E" +
		"\x03\x02\x02\x02\u038Ek\x03\x02\x02\x02\u038F\u0393\x05@!\x02\u0390\u0394" +
		"\x05t;\x02\u0391\u0392\x073\x02\x02\u0392\u0394\x05@!\x02\u0393\u0390" +
		"\x03\x02\x02\x02\u0393\u0391\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02" +
		"\u0394\u0398\x03\x02\x02\x02\u0395\u0396\t\v\x02\x02\u0396\u0398\x05@" +
		"!\x02\u0397\u038F\x03\x02\x02\x02\u0397\u0395\x03\x02\x02\x02\u0398m\x03" +
		"\x02\x02\x02\u0399\u039E\x05p9\x02\u039A\u039B\x07/\x02\x02\u039B\u039D" +
		"\x05p9\x02\u039C\u039A\x03\x02\x02\x02\u039D\u03A0\x03\x02\x02\x02\u039E" +
		"\u039C\x03\x02\x02\x02\u039E\u039F\x03\x02\x02\x02\u039F\u03A2\x03\x02" +
		"\x02\x02\u03A0\u039E\x03\x02\x02\x02\u03A1\u03A3\x07/\x02\x02\u03A2\u03A1" +
		"\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3o\x03\x02\x02\x02\u03A4" +
		"\u03B7\x07,\x02\x02\u03A5\u03AD\x05@!\x02\u03A6\u03A8\x070\x02\x02\u03A7" +
		"\u03A9\x05@!\x02\u03A8\u03A7\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02\x02" +
		"\u03A9\u03AB\x03\x02\x02\x02\u03AA\u03AC\x05r:\x02\u03AB\u03AA\x03\x02" +
		"\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC\u03AE\x03\x02\x02\x02\u03AD" +
		"\u03A6\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03B7\x03\x02" +
		"\x02\x02\u03AF\u03B1\x070\x02\x02\u03B0\u03B2\x05@!\x02\u03B1\u03B0\x03" +
		"\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B4\x03\x02\x02\x02\u03B3" +
		"\u03B5\x05r:\x02\u03B4\u03B3\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02" +
		"\u03B5\u03B7\x03\x02\x02\x02\u03B6\u03A4\x03\x02\x02\x02\u03B6\u03A5\x03" +
		"\x02\x02\x02\u03B6\u03AF\x03\x02\x02\x02\u03B7q\x03\x02\x02\x02\u03B8" +
		"\u03BA\x070\x02\x02\u03B9\u03BB\x05@!\x02\u03BA\u03B9\x03\x02\x02\x02" +
		"\u03BA\u03BB\x03\x02\x02\x02\u03BBs\x03\x02\x02\x02\u03BC\u03BD\x07\x13" +
		"\x02\x02\u03BD\u03BE\x056\x1C\x02\u03BE\u03BF\x07\x14\x02\x02\u03BF\u03C1" +
		"\x05L\'\x02\u03C0\u03C2\x05v<\x02\u03C1\u03C0\x03\x02\x02\x02\u03C1\u03C2" +
		"\x03\x02\x02\x02\u03C2u\x03\x02\x02\x02\u03C3\u03CA\x05t;\x02\u03C4\u03C5" +
		"\x07\x0F\x02\x02\u03C5\u03C7\x05@!\x02\u03C6\u03C8\x05v<\x02\u03C7\u03C6" +
		"\x03\x02\x02\x02\u03C7\u03C8\x03\x02\x02\x02\u03C8\u03CA\x03\x02\x02\x02" +
		"\u03C9\u03C3\x03\x02\x02\x02\u03C9\u03C4\x03\x02\x02\x02\u03CAw\x03\x02" +
		"\x02\x02\x99{\x84\x88\x8A\x90\x95\x9E\xA2\xA9\xAC\xB5\xBD\xC0\xC3\xC6" +
		"\xC9\xD1\xDA\xDF\xE1\xE9\xED\xF3\xF6\u010A\u0118\u011A\u0123\u0126\u012C" +
		"\u0132\u0137\u013F\u0144\u0148\u014B\u014E\u0152\u0154\u0161\u0167\u016A" +
		"\u016F\u0176\u017A\u0180\u0189\u018D\u0195\u0198\u019A\u01A5\u01AD\u01AF" +
		"\u01B1\u01B5\u01BE\u01C5\u01C7\u01D0\u01D8\u01E2\u01E4\u01EC\u01F5\u01FA" +
		"\u01FE\u0204\u0208\u020B\u0216\u021B\u021E\u0225\u022C\u022E\u0235\u0239" +
		"\u0240\u0244\u0249\u0250\u0256\u025E\u0262\u0266\u026B\u0270\u0274\u0277" +
		"\u027A\u027E\u0280\u0287\u028D\u0290\u029C\u02A4\u02A6\u02B5\u02BA\u02BC" +
		"\u02C1\u02C6\u02CC\u02D1\u02E8\u02EA\u02F0\u02F5\u02FA\u0300\u0309\u0310" +
		"\u0312\u031A\u0323\u0327\u032B\u0333\u0337\u033D\u0341\u0345\u0347\u034E" +
		"\u0352\u035C\u0364\u036A\u036F\u0374\u0377\u037B\u0382\u0389\u038D\u0393" +
		"\u0397\u039E\u03A2\u03A8\u03AB\u03AD\u03B1\u03B4\u03B6\u03BA\u03C1\u03C7" +
		"\u03C9";
	public static readonly _serializedATN: string = Utils.join(
		[
			PythonParser._serializedATNSegment0,
			PythonParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PythonParser.__ATN) {
			PythonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PythonParser._serializedATN));
		}

		return PythonParser.__ATN;
	}

}

export class RootContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(PythonParser.EOF, 0); }
	public single_input(): Single_inputContext | undefined {
		return this.tryGetRuleContext(0, Single_inputContext);
	}
	public file_input(): File_inputContext | undefined {
		return this.tryGetRuleContext(0, File_inputContext);
	}
	public eval_input(): Eval_inputContext | undefined {
		return this.tryGetRuleContext(0, Eval_inputContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_root; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterRoot) {
			listener.enterRoot(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitRoot) {
			listener.exitRoot(this);
		}
	}
}


export class Single_inputContext extends ParserRuleContext {
	public LINE_BREAK(): TerminalNode | undefined { return this.tryGetToken(PythonParser.LINE_BREAK, 0); }
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public compound_stmt(): Compound_stmtContext | undefined {
		return this.tryGetRuleContext(0, Compound_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_single_input; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterSingle_input) {
			listener.enterSingle_input(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitSingle_input) {
			listener.exitSingle_input(this);
		}
	}
}


export class File_inputContext extends ParserRuleContext {
	public LINE_BREAK(): TerminalNode[];
	public LINE_BREAK(i: number): TerminalNode;
	public LINE_BREAK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.LINE_BREAK);
		} else {
			return this.getToken(PythonParser.LINE_BREAK, i);
		}
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_file_input; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterFile_input) {
			listener.enterFile_input(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitFile_input) {
			listener.exitFile_input(this);
		}
	}
}


export class Eval_inputContext extends ParserRuleContext {
	public testlist(): TestlistContext {
		return this.getRuleContext(0, TestlistContext);
	}
	public LINE_BREAK(): TerminalNode[];
	public LINE_BREAK(i: number): TerminalNode;
	public LINE_BREAK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.LINE_BREAK);
		} else {
			return this.getToken(PythonParser.LINE_BREAK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_eval_input; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterEval_input) {
			listener.enterEval_input(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitEval_input) {
			listener.exitEval_input(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public compound_stmt(): Compound_stmtContext | undefined {
		return this.tryGetRuleContext(0, Compound_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_stmt; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
}


export class Compound_stmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_compound_stmt; }
	public copyFrom(ctx: Compound_stmtContext): void {
		super.copyFrom(ctx);
	}
}
export class If_stmtContext extends Compound_stmtContext {
	public _cond: TestContext;
	public IF(): TerminalNode { return this.getToken(PythonParser.IF, 0); }
	public COLON(): TerminalNode { return this.getToken(PythonParser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public elif_clause(): Elif_clauseContext[];
	public elif_clause(i: number): Elif_clauseContext;
	public elif_clause(i?: number): Elif_clauseContext | Elif_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Elif_clauseContext);
		} else {
			return this.getRuleContext(i, Elif_clauseContext);
		}
	}
	public else_clause(): Else_clauseContext | undefined {
		return this.tryGetRuleContext(0, Else_clauseContext);
	}
	constructor(ctx: Compound_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterIf_stmt) {
			listener.enterIf_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitIf_stmt) {
			listener.exitIf_stmt(this);
		}
	}
}
export class While_stmtContext extends Compound_stmtContext {
	public WHILE(): TerminalNode { return this.getToken(PythonParser.WHILE, 0); }
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public COLON(): TerminalNode { return this.getToken(PythonParser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public else_clause(): Else_clauseContext | undefined {
		return this.tryGetRuleContext(0, Else_clauseContext);
	}
	constructor(ctx: Compound_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterWhile_stmt) {
			listener.enterWhile_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitWhile_stmt) {
			listener.exitWhile_stmt(this);
		}
	}
}
export class For_stmtContext extends Compound_stmtContext {
	public FOR(): TerminalNode { return this.getToken(PythonParser.FOR, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	public IN(): TerminalNode { return this.getToken(PythonParser.IN, 0); }
	public testlist(): TestlistContext {
		return this.getRuleContext(0, TestlistContext);
	}
	public COLON(): TerminalNode { return this.getToken(PythonParser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(PythonParser.ASYNC, 0); }
	public else_clause(): Else_clauseContext | undefined {
		return this.tryGetRuleContext(0, Else_clauseContext);
	}
	constructor(ctx: Compound_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterFor_stmt) {
			listener.enterFor_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitFor_stmt) {
			listener.exitFor_stmt(this);
		}
	}
}
export class Try_stmtContext extends Compound_stmtContext {
	public TRY(): TerminalNode { return this.getToken(PythonParser.TRY, 0); }
	public COLON(): TerminalNode { return this.getToken(PythonParser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public finally_clause(): Finally_clauseContext | undefined {
		return this.tryGetRuleContext(0, Finally_clauseContext);
	}
	public except_clause(): Except_clauseContext[];
	public except_clause(i: number): Except_clauseContext;
	public except_clause(i?: number): Except_clauseContext | Except_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Except_clauseContext);
		} else {
			return this.getRuleContext(i, Except_clauseContext);
		}
	}
	public else_clause(): Else_clauseContext | undefined {
		return this.tryGetRuleContext(0, Else_clauseContext);
	}
	constructor(ctx: Compound_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterTry_stmt) {
			listener.enterTry_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitTry_stmt) {
			listener.exitTry_stmt(this);
		}
	}
}
export class With_stmtContext extends Compound_stmtContext {
	public WITH(): TerminalNode { return this.getToken(PythonParser.WITH, 0); }
	public with_item(): With_itemContext[];
	public with_item(i: number): With_itemContext;
	public with_item(i?: number): With_itemContext | With_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(With_itemContext);
		} else {
			return this.getRuleContext(i, With_itemContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(PythonParser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(PythonParser.ASYNC, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	constructor(ctx: Compound_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterWith_stmt) {
			listener.enterWith_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitWith_stmt) {
			listener.exitWith_stmt(this);
		}
	}
}
export class Class_or_func_def_stmtContext extends Compound_stmtContext {
	public classdef(): ClassdefContext | undefined {
		return this.tryGetRuleContext(0, ClassdefContext);
	}
	public funcdef(): FuncdefContext | undefined {
		return this.tryGetRuleContext(0, FuncdefContext);
	}
	public decorator(): DecoratorContext[];
	public decorator(i: number): DecoratorContext;
	public decorator(i?: number): DecoratorContext | DecoratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecoratorContext);
		} else {
			return this.getRuleContext(i, DecoratorContext);
		}
	}
	constructor(ctx: Compound_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterClass_or_func_def_stmt) {
			listener.enterClass_or_func_def_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitClass_or_func_def_stmt) {
			listener.exitClass_or_func_def_stmt(this);
		}
	}
}


export class SuiteContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public LINE_BREAK(): TerminalNode | undefined { return this.tryGetToken(PythonParser.LINE_BREAK, 0); }
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(PythonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(PythonParser.DEDENT, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_suite; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterSuite) {
			listener.enterSuite(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitSuite) {
			listener.exitSuite(this);
		}
	}
}


export class DecoratorContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(PythonParser.AT, 0); }
	public dotted_name(): Dotted_nameContext {
		return this.getRuleContext(0, Dotted_nameContext);
	}
	public LINE_BREAK(): TerminalNode { return this.getToken(PythonParser.LINE_BREAK, 0); }
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.CLOSE_PAREN, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_decorator; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterDecorator) {
			listener.enterDecorator(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitDecorator) {
			listener.exitDecorator(this);
		}
	}
}


export class Elif_clauseContext extends ParserRuleContext {
	public ELIF(): TerminalNode { return this.getToken(PythonParser.ELIF, 0); }
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public COLON(): TerminalNode { return this.getToken(PythonParser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_elif_clause; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterElif_clause) {
			listener.enterElif_clause(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitElif_clause) {
			listener.exitElif_clause(this);
		}
	}
}


export class Else_clauseContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(PythonParser.ELSE, 0); }
	public COLON(): TerminalNode { return this.getToken(PythonParser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_else_clause; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterElse_clause) {
			listener.enterElse_clause(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitElse_clause) {
			listener.exitElse_clause(this);
		}
	}
}


export class Finally_clauseContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(PythonParser.FINALLY, 0); }
	public COLON(): TerminalNode { return this.getToken(PythonParser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_finally_clause; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterFinally_clause) {
			listener.enterFinally_clause(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitFinally_clause) {
			listener.exitFinally_clause(this);
		}
	}
}


export class With_itemContext extends ParserRuleContext {
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(PythonParser.AS, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_with_item; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterWith_item) {
			listener.enterWith_item(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitWith_item) {
			listener.exitWith_item(this);
		}
	}
}


export class Except_clauseContext extends ParserRuleContext {
	public EXCEPT(): TerminalNode { return this.getToken(PythonParser.EXCEPT, 0); }
	public COLON(): TerminalNode { return this.getToken(PythonParser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(PythonParser.COMMA, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(PythonParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_except_clause; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterExcept_clause) {
			listener.enterExcept_clause(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitExcept_clause) {
			listener.exitExcept_clause(this);
		}
	}
}


export class ClassdefContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(PythonParser.CLASS, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public COLON(): TerminalNode { return this.getToken(PythonParser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.CLOSE_PAREN, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_classdef; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterClassdef) {
			listener.enterClassdef(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitClassdef) {
			listener.exitClassdef(this);
		}
	}
}


export class FuncdefContext extends ParserRuleContext {
	public DEF(): TerminalNode { return this.getToken(PythonParser.DEF, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public OPEN_PAREN(): TerminalNode { return this.getToken(PythonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(PythonParser.CLOSE_PAREN, 0); }
	public COLON(): TerminalNode { return this.getToken(PythonParser.COLON, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(PythonParser.ASYNC, 0); }
	public typedargslist(): TypedargslistContext | undefined {
		return this.tryGetRuleContext(0, TypedargslistContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(PythonParser.ARROW, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_funcdef; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterFuncdef) {
			listener.enterFuncdef(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitFuncdef) {
			listener.exitFuncdef(this);
		}
	}
}


export class TypedargslistContext extends ParserRuleContext {
	public args(): ArgsContext | undefined {
		return this.tryGetRuleContext(0, ArgsContext);
	}
	public kwargs(): KwargsContext | undefined {
		return this.tryGetRuleContext(0, KwargsContext);
	}
	public def_parameters(): Def_parametersContext[];
	public def_parameters(i: number): Def_parametersContext;
	public def_parameters(i?: number): Def_parametersContext | Def_parametersContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Def_parametersContext);
		} else {
			return this.getRuleContext(i, Def_parametersContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_typedargslist; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterTypedargslist) {
			listener.enterTypedargslist(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitTypedargslist) {
			listener.exitTypedargslist(this);
		}
	}
}


export class ArgsContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(PythonParser.STAR, 0); }
	public named_parameter(): Named_parameterContext {
		return this.getRuleContext(0, Named_parameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_args; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterArgs) {
			listener.enterArgs(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitArgs) {
			listener.exitArgs(this);
		}
	}
}


export class KwargsContext extends ParserRuleContext {
	public POWER(): TerminalNode { return this.getToken(PythonParser.POWER, 0); }
	public named_parameter(): Named_parameterContext {
		return this.getRuleContext(0, Named_parameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_kwargs; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterKwargs) {
			listener.enterKwargs(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitKwargs) {
			listener.exitKwargs(this);
		}
	}
}


export class Def_parametersContext extends ParserRuleContext {
	public def_parameter(): Def_parameterContext[];
	public def_parameter(i: number): Def_parameterContext;
	public def_parameter(i?: number): Def_parameterContext | Def_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Def_parameterContext);
		} else {
			return this.getRuleContext(i, Def_parameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_def_parameters; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterDef_parameters) {
			listener.enterDef_parameters(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitDef_parameters) {
			listener.exitDef_parameters(this);
		}
	}
}


export class Def_parameterContext extends ParserRuleContext {
	public named_parameter(): Named_parameterContext | undefined {
		return this.tryGetRuleContext(0, Named_parameterContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.ASSIGN, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(PythonParser.STAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_def_parameter; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterDef_parameter) {
			listener.enterDef_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitDef_parameter) {
			listener.exitDef_parameter(this);
		}
	}
}


export class Named_parameterContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(PythonParser.COLON, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_named_parameter; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterNamed_parameter) {
			listener.enterNamed_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitNamed_parameter) {
			listener.exitNamed_parameter(this);
		}
	}
}


export class Simple_stmtContext extends ParserRuleContext {
	public small_stmt(): Small_stmtContext[];
	public small_stmt(i: number): Small_stmtContext;
	public small_stmt(i?: number): Small_stmtContext | Small_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Small_stmtContext);
		} else {
			return this.getRuleContext(i, Small_stmtContext);
		}
	}
	public LINE_BREAK(): TerminalNode | undefined { return this.tryGetToken(PythonParser.LINE_BREAK, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(PythonParser.EOF, 0); }
	public SEMI_COLON(): TerminalNode[];
	public SEMI_COLON(i: number): TerminalNode;
	public SEMI_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.SEMI_COLON);
		} else {
			return this.getToken(PythonParser.SEMI_COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_simple_stmt; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterSimple_stmt) {
			listener.enterSimple_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitSimple_stmt) {
			listener.exitSimple_stmt(this);
		}
	}
}


export class Small_stmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_small_stmt; }
	public copyFrom(ctx: Small_stmtContext): void {
		super.copyFrom(ctx);
	}
}
export class Expr_stmtContext extends Small_stmtContext {
	public testlist_star_expr(): Testlist_star_exprContext {
		return this.getRuleContext(0, Testlist_star_exprContext);
	}
	public assign_part(): Assign_partContext | undefined {
		return this.tryGetRuleContext(0, Assign_partContext);
	}
	constructor(ctx: Small_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterExpr_stmt) {
			listener.enterExpr_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitExpr_stmt) {
			listener.exitExpr_stmt(this);
		}
	}
}
export class Print_stmtContext extends Small_stmtContext {
	public PRINT(): TerminalNode { return this.getToken(PythonParser.PRINT, 0); }
	public RIGHT_SHIFT(): TerminalNode | undefined { return this.tryGetToken(PythonParser.RIGHT_SHIFT, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	constructor(ctx: Small_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterPrint_stmt) {
			listener.enterPrint_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitPrint_stmt) {
			listener.exitPrint_stmt(this);
		}
	}
}
export class Del_stmtContext extends Small_stmtContext {
	public DEL(): TerminalNode { return this.getToken(PythonParser.DEL, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	constructor(ctx: Small_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterDel_stmt) {
			listener.enterDel_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitDel_stmt) {
			listener.exitDel_stmt(this);
		}
	}
}
export class Pass_stmtContext extends Small_stmtContext {
	public PASS(): TerminalNode { return this.getToken(PythonParser.PASS, 0); }
	constructor(ctx: Small_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterPass_stmt) {
			listener.enterPass_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitPass_stmt) {
			listener.exitPass_stmt(this);
		}
	}
}
export class Break_stmtContext extends Small_stmtContext {
	public BREAK(): TerminalNode { return this.getToken(PythonParser.BREAK, 0); }
	constructor(ctx: Small_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterBreak_stmt) {
			listener.enterBreak_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitBreak_stmt) {
			listener.exitBreak_stmt(this);
		}
	}
}
export class Continue_stmtContext extends Small_stmtContext {
	public CONTINUE(): TerminalNode { return this.getToken(PythonParser.CONTINUE, 0); }
	constructor(ctx: Small_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterContinue_stmt) {
			listener.enterContinue_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitContinue_stmt) {
			listener.exitContinue_stmt(this);
		}
	}
}
export class Return_stmtContext extends Small_stmtContext {
	public RETURN(): TerminalNode { return this.getToken(PythonParser.RETURN, 0); }
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(ctx: Small_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterReturn_stmt) {
			listener.enterReturn_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitReturn_stmt) {
			listener.exitReturn_stmt(this);
		}
	}
}
export class Raise_stmtContext extends Small_stmtContext {
	public RAISE(): TerminalNode { return this.getToken(PythonParser.RAISE, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(PythonParser.FROM, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	constructor(ctx: Small_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterRaise_stmt) {
			listener.enterRaise_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitRaise_stmt) {
			listener.exitRaise_stmt(this);
		}
	}
}
export class Yield_stmtContext extends Small_stmtContext {
	public yield_expr(): Yield_exprContext {
		return this.getRuleContext(0, Yield_exprContext);
	}
	constructor(ctx: Small_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterYield_stmt) {
			listener.enterYield_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitYield_stmt) {
			listener.exitYield_stmt(this);
		}
	}
}
export class Import_stmtContext extends Small_stmtContext {
	public IMPORT(): TerminalNode { return this.getToken(PythonParser.IMPORT, 0); }
	public dotted_as_names(): Dotted_as_namesContext {
		return this.getRuleContext(0, Dotted_as_namesContext);
	}
	constructor(ctx: Small_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterImport_stmt) {
			listener.enterImport_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitImport_stmt) {
			listener.exitImport_stmt(this);
		}
	}
}
export class From_stmtContext extends Small_stmtContext {
	public FROM(): TerminalNode { return this.getToken(PythonParser.FROM, 0); }
	public IMPORT(): TerminalNode { return this.getToken(PythonParser.IMPORT, 0); }
	public dotted_name(): Dotted_nameContext | undefined {
		return this.tryGetRuleContext(0, Dotted_nameContext);
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(PythonParser.STAR, 0); }
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.OPEN_PAREN, 0); }
	public import_as_names(): Import_as_namesContext | undefined {
		return this.tryGetRuleContext(0, Import_as_namesContext);
	}
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.CLOSE_PAREN, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.DOT);
		} else {
			return this.getToken(PythonParser.DOT, i);
		}
	}
	public ELLIPSIS(): TerminalNode[];
	public ELLIPSIS(i: number): TerminalNode;
	public ELLIPSIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.ELLIPSIS);
		} else {
			return this.getToken(PythonParser.ELLIPSIS, i);
		}
	}
	constructor(ctx: Small_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterFrom_stmt) {
			listener.enterFrom_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitFrom_stmt) {
			listener.exitFrom_stmt(this);
		}
	}
}
export class Global_stmtContext extends Small_stmtContext {
	public GLOBAL(): TerminalNode { return this.getToken(PythonParser.GLOBAL, 0); }
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	constructor(ctx: Small_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterGlobal_stmt) {
			listener.enterGlobal_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitGlobal_stmt) {
			listener.exitGlobal_stmt(this);
		}
	}
}
export class Exec_stmtContext extends Small_stmtContext {
	public EXEC(): TerminalNode { return this.getToken(PythonParser.EXEC, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.IN, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(PythonParser.COMMA, 0); }
	constructor(ctx: Small_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterExec_stmt) {
			listener.enterExec_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitExec_stmt) {
			listener.exitExec_stmt(this);
		}
	}
}
export class Assert_stmtContext extends Small_stmtContext {
	public ASSERT(): TerminalNode { return this.getToken(PythonParser.ASSERT, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(PythonParser.COMMA, 0); }
	constructor(ctx: Small_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterAssert_stmt) {
			listener.enterAssert_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitAssert_stmt) {
			listener.exitAssert_stmt(this);
		}
	}
}
export class Nonlocal_stmtContext extends Small_stmtContext {
	public NONLOCAL(): TerminalNode { return this.getToken(PythonParser.NONLOCAL, 0); }
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	constructor(ctx: Small_stmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterNonlocal_stmt) {
			listener.enterNonlocal_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitNonlocal_stmt) {
			listener.exitNonlocal_stmt(this);
		}
	}
}


export class Testlist_star_exprContext extends ParserRuleContext {
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_testlist_star_expr; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterTestlist_star_expr) {
			listener.enterTestlist_star_expr(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitTestlist_star_expr) {
			listener.exitTestlist_star_expr(this);
		}
	}
}


export class Star_exprContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(PythonParser.STAR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_star_expr; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterStar_expr) {
			listener.enterStar_expr(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitStar_expr) {
			listener.exitStar_expr(this);
		}
	}
}


export class Assign_partContext extends ParserRuleContext {
	public _op: Token;
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.ASSIGN);
		} else {
			return this.getToken(PythonParser.ASSIGN, i);
		}
	}
	public testlist_star_expr(): Testlist_star_exprContext[];
	public testlist_star_expr(i: number): Testlist_star_exprContext;
	public testlist_star_expr(i?: number): Testlist_star_exprContext | Testlist_star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Testlist_star_exprContext);
		} else {
			return this.getRuleContext(i, Testlist_star_exprContext);
		}
	}
	public yield_expr(): Yield_exprContext | undefined {
		return this.tryGetRuleContext(0, Yield_exprContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(PythonParser.COLON, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.SUB_ASSIGN, 0); }
	public MULT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.MULT_ASSIGN, 0); }
	public AT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.AT_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.DIV_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.MOD_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.XOR_ASSIGN, 0); }
	public LEFT_SHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.LEFT_SHIFT_ASSIGN, 0); }
	public RIGHT_SHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.RIGHT_SHIFT_ASSIGN, 0); }
	public POWER_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.POWER_ASSIGN, 0); }
	public IDIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.IDIV_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_assign_part; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterAssign_part) {
			listener.enterAssign_part(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitAssign_part) {
			listener.exitAssign_part(this);
		}
	}
}


export class ExprlistContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_exprlist; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterExprlist) {
			listener.enterExprlist(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitExprlist) {
			listener.exitExprlist(this);
		}
	}
}


export class Import_as_namesContext extends ParserRuleContext {
	public import_as_name(): Import_as_nameContext[];
	public import_as_name(i: number): Import_as_nameContext;
	public import_as_name(i?: number): Import_as_nameContext | Import_as_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Import_as_nameContext);
		} else {
			return this.getRuleContext(i, Import_as_nameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_import_as_names; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterImport_as_names) {
			listener.enterImport_as_names(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitImport_as_names) {
			listener.exitImport_as_names(this);
		}
	}
}


export class Import_as_nameContext extends ParserRuleContext {
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(PythonParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_import_as_name; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterImport_as_name) {
			listener.enterImport_as_name(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitImport_as_name) {
			listener.exitImport_as_name(this);
		}
	}
}


export class Dotted_as_namesContext extends ParserRuleContext {
	public dotted_as_name(): Dotted_as_nameContext[];
	public dotted_as_name(i: number): Dotted_as_nameContext;
	public dotted_as_name(i?: number): Dotted_as_nameContext | Dotted_as_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Dotted_as_nameContext);
		} else {
			return this.getRuleContext(i, Dotted_as_nameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_dotted_as_names; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterDotted_as_names) {
			listener.enterDotted_as_names(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitDotted_as_names) {
			listener.exitDotted_as_names(this);
		}
	}
}


export class Dotted_as_nameContext extends ParserRuleContext {
	public dotted_name(): Dotted_nameContext {
		return this.getRuleContext(0, Dotted_nameContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(PythonParser.AS, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_dotted_as_name; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterDotted_as_name) {
			listener.enterDotted_as_name(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitDotted_as_name) {
			listener.exitDotted_as_name(this);
		}
	}
}


export class TestContext extends ParserRuleContext {
	public logical_test(): Logical_testContext[];
	public logical_test(i: number): Logical_testContext;
	public logical_test(i?: number): Logical_testContext | Logical_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Logical_testContext);
		} else {
			return this.getRuleContext(i, Logical_testContext);
		}
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(PythonParser.IF, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(PythonParser.ELSE, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public LAMBDA(): TerminalNode | undefined { return this.tryGetToken(PythonParser.LAMBDA, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(PythonParser.COLON, 0); }
	public varargslist(): VarargslistContext | undefined {
		return this.tryGetRuleContext(0, VarargslistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_test; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterTest) {
			listener.enterTest(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitTest) {
			listener.exitTest(this);
		}
	}
}


export class VarargslistContext extends ParserRuleContext {
	public varargs(): VarargsContext | undefined {
		return this.tryGetRuleContext(0, VarargsContext);
	}
	public varkwargs(): VarkwargsContext | undefined {
		return this.tryGetRuleContext(0, VarkwargsContext);
	}
	public vardef_parameters(): Vardef_parametersContext[];
	public vardef_parameters(i: number): Vardef_parametersContext;
	public vardef_parameters(i?: number): Vardef_parametersContext | Vardef_parametersContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Vardef_parametersContext);
		} else {
			return this.getRuleContext(i, Vardef_parametersContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_varargslist; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterVarargslist) {
			listener.enterVarargslist(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitVarargslist) {
			listener.exitVarargslist(this);
		}
	}
}


export class Vardef_parametersContext extends ParserRuleContext {
	public vardef_parameter(): Vardef_parameterContext[];
	public vardef_parameter(i: number): Vardef_parameterContext;
	public vardef_parameter(i?: number): Vardef_parameterContext | Vardef_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Vardef_parameterContext);
		} else {
			return this.getRuleContext(i, Vardef_parameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_vardef_parameters; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterVardef_parameters) {
			listener.enterVardef_parameters(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitVardef_parameters) {
			listener.exitVardef_parameters(this);
		}
	}
}


export class Vardef_parameterContext extends ParserRuleContext {
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.ASSIGN, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(PythonParser.STAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_vardef_parameter; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterVardef_parameter) {
			listener.enterVardef_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitVardef_parameter) {
			listener.exitVardef_parameter(this);
		}
	}
}


export class VarargsContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(PythonParser.STAR, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_varargs; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterVarargs) {
			listener.enterVarargs(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitVarargs) {
			listener.exitVarargs(this);
		}
	}
}


export class VarkwargsContext extends ParserRuleContext {
	public POWER(): TerminalNode { return this.getToken(PythonParser.POWER, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_varkwargs; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterVarkwargs) {
			listener.enterVarkwargs(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitVarkwargs) {
			listener.exitVarkwargs(this);
		}
	}
}


export class Logical_testContext extends ParserRuleContext {
	public _op: Token;
	public comparison(): ComparisonContext | undefined {
		return this.tryGetRuleContext(0, ComparisonContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(PythonParser.NOT, 0); }
	public logical_test(): Logical_testContext[];
	public logical_test(i: number): Logical_testContext;
	public logical_test(i?: number): Logical_testContext | Logical_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Logical_testContext);
		} else {
			return this.getRuleContext(i, Logical_testContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(PythonParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(PythonParser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_logical_test; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterLogical_test) {
			listener.enterLogical_test(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitLogical_test) {
			listener.exitLogical_test(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	public _optional: Token;
	public comparison(): ComparisonContext[];
	public comparison(i: number): ComparisonContext;
	public comparison(i?: number): ComparisonContext | ComparisonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComparisonContext);
		} else {
			return this.getRuleContext(i, ComparisonContext);
		}
	}
	public LESS_THAN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.LESS_THAN, 0); }
	public GREATER_THAN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.GREATER_THAN, 0); }
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(PythonParser.EQUALS, 0); }
	public GT_EQ(): TerminalNode | undefined { return this.tryGetToken(PythonParser.GT_EQ, 0); }
	public LT_EQ(): TerminalNode | undefined { return this.tryGetToken(PythonParser.LT_EQ, 0); }
	public NOT_EQ_1(): TerminalNode | undefined { return this.tryGetToken(PythonParser.NOT_EQ_1, 0); }
	public NOT_EQ_2(): TerminalNode | undefined { return this.tryGetToken(PythonParser.NOT_EQ_2, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.IN, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(PythonParser.IS, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(PythonParser.NOT, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_comparison; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public _op: Token;
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(PythonParser.AWAIT, 0); }
	public trailer(): TrailerContext[];
	public trailer(i: number): TrailerContext;
	public trailer(i?: number): TrailerContext | TrailerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TrailerContext);
		} else {
			return this.getRuleContext(i, TrailerContext);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public POWER(): TerminalNode | undefined { return this.tryGetToken(PythonParser.POWER, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(PythonParser.ADD, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(PythonParser.MINUS, 0); }
	public NOT_OP(): TerminalNode | undefined { return this.tryGetToken(PythonParser.NOT_OP, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(PythonParser.STAR, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(PythonParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(PythonParser.MOD, 0); }
	public IDIV(): TerminalNode | undefined { return this.tryGetToken(PythonParser.IDIV, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(PythonParser.AT, 0); }
	public LEFT_SHIFT(): TerminalNode | undefined { return this.tryGetToken(PythonParser.LEFT_SHIFT, 0); }
	public RIGHT_SHIFT(): TerminalNode | undefined { return this.tryGetToken(PythonParser.RIGHT_SHIFT, 0); }
	public AND_OP(): TerminalNode | undefined { return this.tryGetToken(PythonParser.AND_OP, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(PythonParser.XOR, 0); }
	public OR_OP(): TerminalNode | undefined { return this.tryGetToken(PythonParser.OR_OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_expr; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.CLOSE_PAREN, 0); }
	public yield_expr(): Yield_exprContext | undefined {
		return this.tryGetRuleContext(0, Yield_exprContext);
	}
	public testlist_comp(): Testlist_compContext | undefined {
		return this.tryGetRuleContext(0, Testlist_compContext);
	}
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(PythonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(PythonParser.CLOSE_BRACKET, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(PythonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(PythonParser.CLOSE_BRACE, 0); }
	public dictorsetmaker(): DictorsetmakerContext | undefined {
		return this.tryGetRuleContext(0, DictorsetmakerContext);
	}
	public REVERSE_QUOTE(): TerminalNode[];
	public REVERSE_QUOTE(i: number): TerminalNode;
	public REVERSE_QUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.REVERSE_QUOTE);
		} else {
			return this.getToken(PythonParser.REVERSE_QUOTE, i);
		}
	}
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(PythonParser.COMMA, 0); }
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(PythonParser.ELLIPSIS, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public PRINT(): TerminalNode | undefined { return this.tryGetToken(PythonParser.PRINT, 0); }
	public EXEC(): TerminalNode | undefined { return this.tryGetToken(PythonParser.EXEC, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(PythonParser.MINUS, 0); }
	public NONE(): TerminalNode | undefined { return this.tryGetToken(PythonParser.NONE, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.STRING);
		} else {
			return this.getToken(PythonParser.STRING, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_atom; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
}


export class DictorsetmakerContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COLON);
		} else {
			return this.getToken(PythonParser.COLON, i);
		}
	}
	public POWER(): TerminalNode[];
	public POWER(i: number): TerminalNode;
	public POWER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.POWER);
		} else {
			return this.getToken(PythonParser.POWER, i);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public testlist_comp(): Testlist_compContext | undefined {
		return this.tryGetRuleContext(0, Testlist_compContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_dictorsetmaker; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterDictorsetmaker) {
			listener.enterDictorsetmaker(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitDictorsetmaker) {
			listener.exitDictorsetmaker(this);
		}
	}
}


export class Testlist_compContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_testlist_comp; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterTestlist_comp) {
			listener.enterTestlist_comp(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitTestlist_comp) {
			listener.exitTestlist_comp(this);
		}
	}
}


export class TestlistContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_testlist; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterTestlist) {
			listener.enterTestlist(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitTestlist) {
			listener.exitTestlist(this);
		}
	}
}


export class Dotted_nameContext extends ParserRuleContext {
	public dotted_name(): Dotted_nameContext | undefined {
		return this.tryGetRuleContext(0, Dotted_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(PythonParser.DOT, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_dotted_name; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterDotted_name) {
			listener.enterDotted_name(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitDotted_name) {
			listener.exitDotted_name(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(PythonParser.NAME, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(PythonParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(PythonParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_name; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public IMAG_NUMBER(): TerminalNode | undefined { return this.tryGetToken(PythonParser.IMAG_NUMBER, 0); }
	public FLOAT_NUMBER(): TerminalNode | undefined { return this.tryGetToken(PythonParser.FLOAT_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_number; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public DECIMAL_INTEGER(): TerminalNode | undefined { return this.tryGetToken(PythonParser.DECIMAL_INTEGER, 0); }
	public OCT_INTEGER(): TerminalNode | undefined { return this.tryGetToken(PythonParser.OCT_INTEGER, 0); }
	public HEX_INTEGER(): TerminalNode | undefined { return this.tryGetToken(PythonParser.HEX_INTEGER, 0); }
	public BIN_INTEGER(): TerminalNode | undefined { return this.tryGetToken(PythonParser.BIN_INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_integer; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
}


export class Yield_exprContext extends ParserRuleContext {
	public YIELD(): TerminalNode { return this.getToken(PythonParser.YIELD, 0); }
	public yield_arg(): Yield_argContext | undefined {
		return this.tryGetRuleContext(0, Yield_argContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_yield_expr; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterYield_expr) {
			listener.enterYield_expr(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitYield_expr) {
			listener.exitYield_expr(this);
		}
	}
}


export class Yield_argContext extends ParserRuleContext {
	public FROM(): TerminalNode | undefined { return this.tryGetToken(PythonParser.FROM, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_yield_arg; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterYield_arg) {
			listener.enterYield_arg(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitYield_arg) {
			listener.exitYield_arg(this);
		}
	}
}


export class TrailerContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(PythonParser.DOT, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_trailer; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterTrailer) {
			listener.enterTrailer(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitTrailer) {
			listener.exitTrailer(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.CLOSE_PAREN, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(PythonParser.OPEN_BRACKET, 0); }
	public subscriptlist(): SubscriptlistContext | undefined {
		return this.tryGetRuleContext(0, SubscriptlistContext);
	}
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(PythonParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_arguments; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
}


export class ArglistContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_arglist; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterArglist) {
			listener.enterArglist(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitArglist) {
			listener.exitArglist(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PythonParser.ASSIGN, 0); }
	public POWER(): TerminalNode | undefined { return this.tryGetToken(PythonParser.POWER, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(PythonParser.STAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_argument; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
}


export class SubscriptlistContext extends ParserRuleContext {
	public subscript(): SubscriptContext[];
	public subscript(i: number): SubscriptContext;
	public subscript(i?: number): SubscriptContext | SubscriptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptContext);
		} else {
			return this.getRuleContext(i, SubscriptContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PythonParser.COMMA);
		} else {
			return this.getToken(PythonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_subscriptlist; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterSubscriptlist) {
			listener.enterSubscriptlist(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitSubscriptlist) {
			listener.exitSubscriptlist(this);
		}
	}
}


export class SubscriptContext extends ParserRuleContext {
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(PythonParser.ELLIPSIS, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(PythonParser.COLON, 0); }
	public sliceop(): SliceopContext | undefined {
		return this.tryGetRuleContext(0, SliceopContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_subscript; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitSubscript) {
			listener.exitSubscript(this);
		}
	}
}


export class SliceopContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(PythonParser.COLON, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_sliceop; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterSliceop) {
			listener.enterSliceop(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitSliceop) {
			listener.exitSliceop(this);
		}
	}
}


export class Comp_forContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(PythonParser.FOR, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	public IN(): TerminalNode { return this.getToken(PythonParser.IN, 0); }
	public logical_test(): Logical_testContext {
		return this.getRuleContext(0, Logical_testContext);
	}
	public comp_iter(): Comp_iterContext | undefined {
		return this.tryGetRuleContext(0, Comp_iterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_comp_for; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterComp_for) {
			listener.enterComp_for(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitComp_for) {
			listener.exitComp_for(this);
		}
	}
}


export class Comp_iterContext extends ParserRuleContext {
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(PythonParser.IF, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public comp_iter(): Comp_iterContext | undefined {
		return this.tryGetRuleContext(0, Comp_iterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PythonParser.RULE_comp_iter; }
	// @Override
	public enterRule(listener: PythonParserListener): void {
		if (listener.enterComp_iter) {
			listener.enterComp_iter(this);
		}
	}
	// @Override
	public exitRule(listener: PythonParserListener): void {
		if (listener.exitComp_iter) {
			listener.exitComp_iter(this);
		}
	}
}


