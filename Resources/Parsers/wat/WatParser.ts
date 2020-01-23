// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/wat/WatParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { WatParserListener } from "./WatParserListener";
import { WatParserVisitor } from "./WatParserVisitor";


export class WatParser extends Parser {
	public static readonly LPAR = 1;
	public static readonly RPAR = 2;
	public static readonly NAT = 3;
	public static readonly INT = 4;
	public static readonly FLOAT = 5;
	public static readonly STRING = 6;
	public static readonly VALUE_TYPE = 7;
	public static readonly CONST = 8;
	public static readonly FUNCREF = 9;
	public static readonly MUT = 10;
	public static readonly NOP = 11;
	public static readonly UNREACHABLE = 12;
	public static readonly DROP = 13;
	public static readonly BLOCK = 14;
	public static readonly LOOP = 15;
	public static readonly END = 16;
	public static readonly BR = 17;
	public static readonly BR_IF = 18;
	public static readonly BR_TABLE = 19;
	public static readonly RETURN = 20;
	public static readonly IF = 21;
	public static readonly THEN = 22;
	public static readonly ELSE = 23;
	public static readonly SELECT = 24;
	public static readonly CALL = 25;
	public static readonly CALL_INDIRECT = 26;
	public static readonly LOCAL_GET = 27;
	public static readonly LOCAL_SET = 28;
	public static readonly LOCAL_TEE = 29;
	public static readonly GLOBAL_GET = 30;
	public static readonly GLOBAL_SET = 31;
	public static readonly LOAD = 32;
	public static readonly STORE = 33;
	public static readonly OFFSET_EQ_NAT = 34;
	public static readonly ALIGN_EQ_NAT = 35;
	public static readonly UNARY = 36;
	public static readonly BINARY = 37;
	public static readonly TEST = 38;
	public static readonly COMPARE = 39;
	public static readonly CONVERT = 40;
	public static readonly MEMORY_SIZE = 41;
	public static readonly MEMORY_GROW = 42;
	public static readonly TYPE = 43;
	public static readonly FUNC = 44;
	public static readonly START = 45;
	public static readonly PARAM = 46;
	public static readonly RESULT = 47;
	public static readonly LOCAL = 48;
	public static readonly GLOBAL = 49;
	public static readonly TABLE = 50;
	public static readonly MEMORY = 51;
	public static readonly ELEM = 52;
	public static readonly DATA = 53;
	public static readonly OFFSET = 54;
	public static readonly IMPORT = 55;
	public static readonly EXPORT = 56;
	public static readonly MODULE = 57;
	public static readonly BIN = 58;
	public static readonly QUOTE = 59;
	public static readonly SCRIPT = 60;
	public static readonly REGISTER = 61;
	public static readonly INVOKE = 62;
	public static readonly GET = 63;
	public static readonly ASSERT_MALFORMED = 64;
	public static readonly ASSERT_INVALID = 65;
	public static readonly ASSERT_UNLINKABLE = 66;
	public static readonly ASSERT_RETURN = 67;
	public static readonly ASSERT_RETURN_CANONICAL_NAN = 68;
	public static readonly ASSERT_RETURN_ARITHMETIC_NAN = 69;
	public static readonly ASSERT_TRAP = 70;
	public static readonly ASSERT_EXHAUSTION = 71;
	public static readonly INPUT = 72;
	public static readonly OUTPUT = 73;
	public static readonly VAR = 74;
	public static readonly SPACE = 75;
	public static readonly COMMENT = 76;
	public static readonly RULE_value = 0;
	public static readonly RULE_name = 1;
	public static readonly RULE_value_type = 2;
	public static readonly RULE_elem_type = 3;
	public static readonly RULE_global_type = 4;
	public static readonly RULE_def_type = 5;
	public static readonly RULE_func_type = 6;
	public static readonly RULE_table_type = 7;
	public static readonly RULE_memory_type = 8;
	public static readonly RULE_type_use = 9;
	public static readonly RULE_literal = 10;
	public static readonly RULE_var = 11;
	public static readonly RULE_bind_var = 12;
	public static readonly RULE_instr = 13;
	public static readonly RULE_plain_instr = 14;
	public static readonly RULE_call_instr = 15;
	public static readonly RULE_call_instr_params = 16;
	public static readonly RULE_call_instr_instr = 17;
	public static readonly RULE_call_instr_params_instr = 18;
	public static readonly RULE_call_instr_results_instr = 19;
	public static readonly RULE_block_instr = 20;
	public static readonly RULE_block_type = 21;
	public static readonly RULE_block = 22;
	public static readonly RULE_expr = 23;
	public static readonly RULE_expr1 = 24;
	public static readonly RULE_call_expr_type = 25;
	public static readonly RULE_call_expr_params = 26;
	public static readonly RULE_call_expr_results = 27;
	public static readonly RULE_if_block = 28;
	public static readonly RULE_instr_list = 29;
	public static readonly RULE_const_expr = 30;
	public static readonly RULE_func = 31;
	public static readonly RULE_func_fields = 32;
	public static readonly RULE_func_fields_import = 33;
	public static readonly RULE_func_fields_import_result = 34;
	public static readonly RULE_func_fields_body = 35;
	public static readonly RULE_func_result_body = 36;
	public static readonly RULE_func_body = 37;
	public static readonly RULE_offset = 38;
	public static readonly RULE_elem = 39;
	public static readonly RULE_table = 40;
	public static readonly RULE_table_fields = 41;
	public static readonly RULE_data = 42;
	public static readonly RULE_memory = 43;
	public static readonly RULE_memory_fields = 44;
	public static readonly RULE_sglobal = 45;
	public static readonly RULE_global_fields = 46;
	public static readonly RULE_import_desc = 47;
	public static readonly RULE_simport = 48;
	public static readonly RULE_inline_import = 49;
	public static readonly RULE_export_desc = 50;
	public static readonly RULE_export = 51;
	public static readonly RULE_inline_export = 52;
	public static readonly RULE_type_ = 53;
	public static readonly RULE_type_def = 54;
	public static readonly RULE_start = 55;
	public static readonly RULE_module_field = 56;
	public static readonly RULE_module_ = 57;
	public static readonly RULE_script_module = 58;
	public static readonly RULE_action = 59;
	public static readonly RULE_assertion = 60;
	public static readonly RULE_cmd = 61;
	public static readonly RULE_meta = 62;
	public static readonly RULE_wconst = 63;
	public static readonly RULE_const_list = 64;
	public static readonly RULE_script = 65;
	public static readonly RULE_module = 66;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"value", "name", "value_type", "elem_type", "global_type", "def_type", 
		"func_type", "table_type", "memory_type", "type_use", "literal", "var", 
		"bind_var", "instr", "plain_instr", "call_instr", "call_instr_params", 
		"call_instr_instr", "call_instr_params_instr", "call_instr_results_instr", 
		"block_instr", "block_type", "block", "expr", "expr1", "call_expr_type", 
		"call_expr_params", "call_expr_results", "if_block", "instr_list", "const_expr", 
		"func", "func_fields", "func_fields_import", "func_fields_import_result", 
		"func_fields_body", "func_result_body", "func_body", "offset", "elem", 
		"table", "table_fields", "data", "memory", "memory_fields", "sglobal", 
		"global_fields", "import_desc", "simport", "inline_import", "export_desc", 
		"export", "inline_export", "type_", "type_def", "start", "module_field", 
		"module_", "script_module", "action", "assertion", "cmd", "meta", "wconst", 
		"const_list", "script", "module",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", undefined, undefined, undefined, undefined, undefined, 
		undefined, "'funcref'", "'mut'", "'nop'", "'unreachable'", "'drop'", "'block'", 
		"'loop'", "'end'", "'br'", "'br_if'", "'br_table'", "'return'", "'if'", 
		"'then'", "'else'", "'select'", "'call'", "'call_indirect'", "'local.get'", 
		"'local.set'", "'local.tee'", "'global.get'", "'global.set'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'memory.size'", "'memory.grow'", "'type'", "'func'", "'start'", 
		"'param'", "'result'", "'local'", "'global'", "'table'", "'memory'", "'elem'", 
		"'data'", "'offset'", "'import'", "'export'", "'module'", "'binary'", 
		"'quote'", "'script'", "'register'", "'invoke'", "'get'", "'assert_malformed'", 
		"'assert_invalid'", "'assert_unlinkable'", "'assert_return'", "'assert_return_canonical_nan'", 
		"'assert_return_arithmetic_nan'", "'assert_trap'", "'assert_exhaustion'", 
		"'input'", "'output'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LPAR", "RPAR", "NAT", "INT", "FLOAT", "STRING", "VALUE_TYPE", 
		"CONST", "FUNCREF", "MUT", "NOP", "UNREACHABLE", "DROP", "BLOCK", "LOOP", 
		"END", "BR", "BR_IF", "BR_TABLE", "RETURN", "IF", "THEN", "ELSE", "SELECT", 
		"CALL", "CALL_INDIRECT", "LOCAL_GET", "LOCAL_SET", "LOCAL_TEE", "GLOBAL_GET", 
		"GLOBAL_SET", "LOAD", "STORE", "OFFSET_EQ_NAT", "ALIGN_EQ_NAT", "UNARY", 
		"BINARY", "TEST", "COMPARE", "CONVERT", "MEMORY_SIZE", "MEMORY_GROW", 
		"TYPE", "FUNC", "START", "PARAM", "RESULT", "LOCAL", "GLOBAL", "TABLE", 
		"MEMORY", "ELEM", "DATA", "OFFSET", "IMPORT", "EXPORT", "MODULE", "BIN", 
		"QUOTE", "SCRIPT", "REGISTER", "INVOKE", "GET", "ASSERT_MALFORMED", "ASSERT_INVALID", 
		"ASSERT_UNLINKABLE", "ASSERT_RETURN", "ASSERT_RETURN_CANONICAL_NAN", "ASSERT_RETURN_ARITHMETIC_NAN", 
		"ASSERT_TRAP", "ASSERT_EXHAUSTION", "INPUT", "OUTPUT", "VAR", "SPACE", 
		"COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WatParser._LITERAL_NAMES, WatParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return WatParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "WatParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return WatParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return WatParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(WatParser._ATN, this);
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, WatParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			_la = this._input.LA(1);
			if (!(_la === WatParser.INT || _la === WatParser.FLOAT)) {
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
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, WatParser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(WatParser.STRING);
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
	public value_type(): Value_typeContext {
		let _localctx: Value_typeContext = new Value_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, WatParser.RULE_value_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(WatParser.VALUE_TYPE);
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
	public elem_type(): Elem_typeContext {
		let _localctx: Elem_typeContext = new Elem_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, WatParser.RULE_elem_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(WatParser.FUNCREF);
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
	public global_type(): Global_typeContext {
		let _localctx: Global_typeContext = new Global_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, WatParser.RULE_global_type);
		try {
			this.state = 148;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WatParser.VALUE_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 142;
				this.value_type();
				}
				break;
			case WatParser.LPAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 143;
				this.match(WatParser.LPAR);
				this.state = 144;
				this.match(WatParser.MUT);
				this.state = 145;
				this.value_type();
				this.state = 146;
				this.match(WatParser.RPAR);
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
	public def_type(): Def_typeContext {
		let _localctx: Def_typeContext = new Def_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, WatParser.RULE_def_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.match(WatParser.LPAR);
			this.state = 151;
			this.match(WatParser.FUNC);
			this.state = 152;
			this.func_type();
			this.state = 153;
			this.match(WatParser.RPAR);
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
	public func_type(): Func_typeContext {
		let _localctx: Func_typeContext = new Func_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, WatParser.RULE_func_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WatParser.LPAR) {
				{
				{
				this.state = 155;
				this.match(WatParser.LPAR);
				this.state = 174;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 156;
					this.match(WatParser.RESULT);
					this.state = 160;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === WatParser.VALUE_TYPE) {
						{
						{
						this.state = 157;
						this.value_type();
						}
						}
						this.state = 162;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;

				case 2:
					{
					this.state = 163;
					this.match(WatParser.PARAM);
					this.state = 167;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === WatParser.VALUE_TYPE) {
						{
						{
						this.state = 164;
						this.value_type();
						}
						}
						this.state = 169;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;

				case 3:
					{
					this.state = 170;
					this.match(WatParser.PARAM);
					this.state = 171;
					this.bind_var();
					this.state = 172;
					this.value_type();
					}
					break;
				}
				this.state = 176;
				this.match(WatParser.RPAR);
				}
				}
				this.state = 181;
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
	public table_type(): Table_typeContext {
		let _localctx: Table_typeContext = new Table_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, WatParser.RULE_table_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(WatParser.NAT);
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WatParser.NAT) {
				{
				this.state = 183;
				this.match(WatParser.NAT);
				}
			}

			this.state = 186;
			this.elem_type();
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
	public memory_type(): Memory_typeContext {
		let _localctx: Memory_typeContext = new Memory_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, WatParser.RULE_memory_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.match(WatParser.NAT);
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WatParser.NAT) {
				{
				this.state = 189;
				this.match(WatParser.NAT);
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
	public type_use(): Type_useContext {
		let _localctx: Type_useContext = new Type_useContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, WatParser.RULE_type_use);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(WatParser.LPAR);
			this.state = 193;
			this.match(WatParser.TYPE);
			this.state = 194;
			this.var();
			this.state = 195;
			this.match(WatParser.RPAR);
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, WatParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WatParser.NAT) | (1 << WatParser.INT) | (1 << WatParser.FLOAT))) !== 0))) {
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
	public var(): VarContext {
		let _localctx: VarContext = new VarContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, WatParser.RULE_var);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			_la = this._input.LA(1);
			if (!(_la === WatParser.NAT || _la === WatParser.VAR)) {
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
	public bind_var(): Bind_varContext {
		let _localctx: Bind_varContext = new Bind_varContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, WatParser.RULE_bind_var);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(WatParser.VAR);
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
	public instr(): InstrContext {
		let _localctx: InstrContext = new InstrContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, WatParser.RULE_instr);
		try {
			this.state = 207;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WatParser.CONST:
			case WatParser.NOP:
			case WatParser.UNREACHABLE:
			case WatParser.DROP:
			case WatParser.BR:
			case WatParser.BR_IF:
			case WatParser.BR_TABLE:
			case WatParser.RETURN:
			case WatParser.SELECT:
			case WatParser.CALL:
			case WatParser.LOCAL_GET:
			case WatParser.LOCAL_SET:
			case WatParser.LOCAL_TEE:
			case WatParser.GLOBAL_GET:
			case WatParser.GLOBAL_SET:
			case WatParser.LOAD:
			case WatParser.STORE:
			case WatParser.UNARY:
			case WatParser.BINARY:
			case WatParser.TEST:
			case WatParser.COMPARE:
			case WatParser.CONVERT:
			case WatParser.MEMORY_SIZE:
			case WatParser.MEMORY_GROW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 203;
				this.plain_instr();
				}
				break;
			case WatParser.CALL_INDIRECT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 204;
				this.call_instr_instr();
				}
				break;
			case WatParser.BLOCK:
			case WatParser.LOOP:
			case WatParser.IF:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 205;
				this.block_instr();
				}
				break;
			case WatParser.LPAR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 206;
				this.expr();
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
	public plain_instr(): Plain_instrContext {
		let _localctx: Plain_instrContext = new Plain_instrContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, WatParser.RULE_plain_instr);
		let _la: number;
		try {
			this.state = 259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WatParser.UNREACHABLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 209;
				this.match(WatParser.UNREACHABLE);
				}
				break;
			case WatParser.NOP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 210;
				this.match(WatParser.NOP);
				}
				break;
			case WatParser.DROP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 211;
				this.match(WatParser.DROP);
				}
				break;
			case WatParser.SELECT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 212;
				this.match(WatParser.SELECT);
				}
				break;
			case WatParser.BR:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 213;
				this.match(WatParser.BR);
				this.state = 214;
				this.var();
				}
				break;
			case WatParser.BR_IF:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 215;
				this.match(WatParser.BR_IF);
				this.state = 216;
				this.var();
				}
				break;
			case WatParser.BR_TABLE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 217;
				this.match(WatParser.BR_TABLE);
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 218;
					this.var();
					}
					}
					this.state = 221;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === WatParser.NAT || _la === WatParser.VAR);
				}
				break;
			case WatParser.RETURN:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 223;
				this.match(WatParser.RETURN);
				}
				break;
			case WatParser.CALL:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 224;
				this.match(WatParser.CALL);
				this.state = 225;
				this.var();
				}
				break;
			case WatParser.LOCAL_GET:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 226;
				this.match(WatParser.LOCAL_GET);
				this.state = 227;
				this.var();
				}
				break;
			case WatParser.LOCAL_SET:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 228;
				this.match(WatParser.LOCAL_SET);
				this.state = 229;
				this.var();
				}
				break;
			case WatParser.LOCAL_TEE:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 230;
				this.match(WatParser.LOCAL_TEE);
				this.state = 231;
				this.var();
				}
				break;
			case WatParser.GLOBAL_GET:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 232;
				this.match(WatParser.GLOBAL_GET);
				this.state = 233;
				this.var();
				}
				break;
			case WatParser.GLOBAL_SET:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 234;
				this.match(WatParser.GLOBAL_SET);
				this.state = 235;
				this.var();
				}
				break;
			case WatParser.LOAD:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 236;
				this.match(WatParser.LOAD);
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.OFFSET_EQ_NAT) {
					{
					this.state = 237;
					this.match(WatParser.OFFSET_EQ_NAT);
					}
				}

				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.ALIGN_EQ_NAT) {
					{
					this.state = 240;
					this.match(WatParser.ALIGN_EQ_NAT);
					}
				}

				}
				break;
			case WatParser.STORE:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 243;
				this.match(WatParser.STORE);
				this.state = 245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.OFFSET_EQ_NAT) {
					{
					this.state = 244;
					this.match(WatParser.OFFSET_EQ_NAT);
					}
				}

				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.ALIGN_EQ_NAT) {
					{
					this.state = 247;
					this.match(WatParser.ALIGN_EQ_NAT);
					}
				}

				}
				break;
			case WatParser.MEMORY_SIZE:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 250;
				this.match(WatParser.MEMORY_SIZE);
				}
				break;
			case WatParser.MEMORY_GROW:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 251;
				this.match(WatParser.MEMORY_GROW);
				}
				break;
			case WatParser.CONST:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 252;
				this.match(WatParser.CONST);
				this.state = 253;
				this.literal();
				}
				break;
			case WatParser.TEST:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 254;
				this.match(WatParser.TEST);
				}
				break;
			case WatParser.COMPARE:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 255;
				this.match(WatParser.COMPARE);
				}
				break;
			case WatParser.UNARY:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 256;
				this.match(WatParser.UNARY);
				}
				break;
			case WatParser.BINARY:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 257;
				this.match(WatParser.BINARY);
				}
				break;
			case WatParser.CONVERT:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 258;
				this.match(WatParser.CONVERT);
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
	public call_instr(): Call_instrContext {
		let _localctx: Call_instrContext = new Call_instrContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, WatParser.RULE_call_instr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this.match(WatParser.CALL_INDIRECT);
			this.state = 263;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 262;
				this.type_use();
				}
				break;
			}
			this.state = 265;
			this.call_instr_params();
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
	public call_instr_params(): Call_instr_paramsContext {
		let _localctx: Call_instr_paramsContext = new Call_instr_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, WatParser.RULE_call_instr_params);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 267;
					this.match(WatParser.LPAR);
					this.state = 268;
					this.match(WatParser.PARAM);
					this.state = 272;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === WatParser.VALUE_TYPE) {
						{
						{
						this.state = 269;
						this.value_type();
						}
						}
						this.state = 274;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 275;
					this.match(WatParser.RPAR);
					}
					}
				}
				this.state = 280;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WatParser.LPAR) {
				{
				{
				this.state = 281;
				this.match(WatParser.LPAR);
				this.state = 282;
				this.match(WatParser.RESULT);
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === WatParser.VALUE_TYPE) {
					{
					{
					this.state = 283;
					this.value_type();
					}
					}
					this.state = 288;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 289;
				this.match(WatParser.RPAR);
				}
				}
				this.state = 294;
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
	public call_instr_instr(): Call_instr_instrContext {
		let _localctx: Call_instr_instrContext = new Call_instr_instrContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, WatParser.RULE_call_instr_instr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.match(WatParser.CALL_INDIRECT);
			this.state = 297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 296;
				this.type_use();
				}
				break;
			}
			this.state = 299;
			this.call_instr_params_instr();
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
	public call_instr_params_instr(): Call_instr_params_instrContext {
		let _localctx: Call_instr_params_instrContext = new Call_instr_params_instrContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, WatParser.RULE_call_instr_params_instr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 301;
					this.match(WatParser.LPAR);
					this.state = 302;
					this.match(WatParser.PARAM);
					this.state = 306;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === WatParser.VALUE_TYPE) {
						{
						{
						this.state = 303;
						this.value_type();
						}
						}
						this.state = 308;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 309;
					this.match(WatParser.RPAR);
					}
					}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 315;
			this.call_instr_results_instr();
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
	public call_instr_results_instr(): Call_instr_results_instrContext {
		let _localctx: Call_instr_results_instrContext = new Call_instr_results_instrContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, WatParser.RULE_call_instr_results_instr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 317;
					this.match(WatParser.LPAR);
					this.state = 318;
					this.match(WatParser.RESULT);
					this.state = 322;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === WatParser.VALUE_TYPE) {
						{
						{
						this.state = 319;
						this.value_type();
						}
						}
						this.state = 324;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 325;
					this.match(WatParser.RPAR);
					}
					}
				}
				this.state = 330;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 331;
			this.instr();
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
	public block_instr(): Block_instrContext {
		let _localctx: Block_instrContext = new Block_instrContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, WatParser.RULE_block_instr);
		let _la: number;
		try {
			this.state = 358;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WatParser.BLOCK:
			case WatParser.LOOP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 333;
				_la = this._input.LA(1);
				if (!(_la === WatParser.BLOCK || _la === WatParser.LOOP)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 334;
					this.bind_var();
					}
				}

				this.state = 337;
				this.block();
				this.state = 338;
				this.match(WatParser.END);
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 339;
					this.bind_var();
					}
				}

				}
				break;
			case WatParser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 342;
				this.match(WatParser.IF);
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 343;
					this.bind_var();
					}
				}

				this.state = 346;
				this.block();
				this.state = 352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.ELSE) {
					{
					this.state = 347;
					this.match(WatParser.ELSE);
					this.state = 349;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === WatParser.VAR) {
						{
						this.state = 348;
						this.bind_var();
						}
					}

					this.state = 351;
					this.instr_list();
					}
				}

				this.state = 354;
				this.match(WatParser.END);
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 355;
					this.bind_var();
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
	// @RuleVersion(0)
	public block_type(): Block_typeContext {
		let _localctx: Block_typeContext = new Block_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, WatParser.RULE_block_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.match(WatParser.LPAR);
			this.state = 361;
			this.match(WatParser.RESULT);
			this.state = 362;
			this.value_type();
			this.state = 363;
			this.match(WatParser.RPAR);
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, WatParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 365;
				this.block_type();
				}
				break;
			}
			this.state = 368;
			this.instr_list();
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
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, WatParser.RULE_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.match(WatParser.LPAR);
			this.state = 371;
			this.expr1();
			this.state = 372;
			this.match(WatParser.RPAR);
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
	public expr1(): Expr1Context {
		let _localctx: Expr1Context = new Expr1Context(this._ctx, this.state);
		this.enterRule(_localctx, 48, WatParser.RULE_expr1);
		let _la: number;
		try {
			this.state = 398;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WatParser.CONST:
			case WatParser.NOP:
			case WatParser.UNREACHABLE:
			case WatParser.DROP:
			case WatParser.BR:
			case WatParser.BR_IF:
			case WatParser.BR_TABLE:
			case WatParser.RETURN:
			case WatParser.SELECT:
			case WatParser.CALL:
			case WatParser.LOCAL_GET:
			case WatParser.LOCAL_SET:
			case WatParser.LOCAL_TEE:
			case WatParser.GLOBAL_GET:
			case WatParser.GLOBAL_SET:
			case WatParser.LOAD:
			case WatParser.STORE:
			case WatParser.UNARY:
			case WatParser.BINARY:
			case WatParser.TEST:
			case WatParser.COMPARE:
			case WatParser.CONVERT:
			case WatParser.MEMORY_SIZE:
			case WatParser.MEMORY_GROW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 374;
				this.plain_instr();
				this.state = 378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === WatParser.LPAR) {
					{
					{
					this.state = 375;
					this.expr();
					}
					}
					this.state = 380;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case WatParser.CALL_INDIRECT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 381;
				this.match(WatParser.CALL_INDIRECT);
				this.state = 382;
				this.call_expr_type();
				}
				break;
			case WatParser.BLOCK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 383;
				this.match(WatParser.BLOCK);
				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 384;
					this.bind_var();
					}
				}

				this.state = 387;
				this.block();
				}
				break;
			case WatParser.LOOP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 388;
				this.match(WatParser.LOOP);
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 389;
					this.bind_var();
					}
				}

				this.state = 392;
				this.block();
				}
				break;
			case WatParser.IF:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 393;
				this.match(WatParser.IF);
				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 394;
					this.bind_var();
					}
				}

				this.state = 397;
				this.if_block();
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
	public call_expr_type(): Call_expr_typeContext {
		let _localctx: Call_expr_typeContext = new Call_expr_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, WatParser.RULE_call_expr_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 400;
				this.type_use();
				}
				break;
			}
			this.state = 403;
			this.call_expr_params();
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
	public call_expr_params(): Call_expr_paramsContext {
		let _localctx: Call_expr_paramsContext = new Call_expr_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, WatParser.RULE_call_expr_params);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 405;
					this.match(WatParser.LPAR);
					this.state = 406;
					this.match(WatParser.PARAM);
					this.state = 410;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === WatParser.VALUE_TYPE) {
						{
						{
						this.state = 407;
						this.value_type();
						}
						}
						this.state = 412;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 413;
					this.match(WatParser.RPAR);
					}
					}
				}
				this.state = 418;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			}
			this.state = 419;
			this.call_expr_results();
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
	public call_expr_results(): Call_expr_resultsContext {
		let _localctx: Call_expr_resultsContext = new Call_expr_resultsContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, WatParser.RULE_call_expr_results);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 421;
					this.match(WatParser.LPAR);
					this.state = 422;
					this.match(WatParser.RESULT);
					this.state = 426;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === WatParser.VALUE_TYPE) {
						{
						{
						this.state = 423;
						this.value_type();
						}
						}
						this.state = 428;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 429;
					this.match(WatParser.RPAR);
					}
					}
				}
				this.state = 434;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			}
			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WatParser.LPAR) {
				{
				{
				this.state = 435;
				this.expr();
				}
				}
				this.state = 440;
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
	public if_block(): If_blockContext {
		let _localctx: If_blockContext = new If_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, WatParser.RULE_if_block);
		let _la: number;
		try {
			let _alt: number;
			this.state = 461;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 441;
				this.block_type();
				this.state = 442;
				this.if_block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 447;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 444;
						this.expr();
						}
						}
					}
					this.state = 449;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				}
				this.state = 450;
				this.match(WatParser.LPAR);
				this.state = 451;
				this.match(WatParser.THEN);
				this.state = 452;
				this.instr_list();
				this.state = 453;
				this.match(WatParser.RPAR);
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.LPAR) {
					{
					this.state = 454;
					this.match(WatParser.LPAR);
					this.state = 455;
					this.match(WatParser.ELSE);
					this.state = 456;
					this.instr_list();
					this.state = 457;
					this.match(WatParser.RPAR);
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
	public instr_list(): Instr_listContext {
		let _localctx: Instr_listContext = new Instr_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, WatParser.RULE_instr_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 466;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 463;
					this.instr();
					}
					}
				}
				this.state = 468;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			}
			this.state = 470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WatParser.CALL_INDIRECT) {
				{
				this.state = 469;
				this.call_instr();
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
	public const_expr(): Const_exprContext {
		let _localctx: Const_exprContext = new Const_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, WatParser.RULE_const_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this.instr_list();
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
	public func(): FuncContext {
		let _localctx: FuncContext = new FuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, WatParser.RULE_func);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
			this.match(WatParser.LPAR);
			this.state = 475;
			this.match(WatParser.FUNC);
			this.state = 477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WatParser.VAR) {
				{
				this.state = 476;
				this.bind_var();
				}
			}

			this.state = 479;
			this.func_fields();
			this.state = 480;
			this.match(WatParser.RPAR);
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
	public func_fields(): Func_fieldsContext {
		let _localctx: Func_fieldsContext = new Func_fieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, WatParser.RULE_func_fields);
		try {
			this.state = 495;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 483;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 482;
					this.type_use();
					}
					break;
				}
				this.state = 485;
				this.func_fields_body();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 486;
				this.inline_import();
				this.state = 488;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
				case 1:
					{
					this.state = 487;
					this.type_use();
					}
					break;
				}
				this.state = 490;
				this.func_fields_import();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 492;
				this.inline_export();
				this.state = 493;
				this.func_fields();
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
	public func_fields_import(): Func_fields_importContext {
		let _localctx: Func_fields_importContext = new Func_fields_importContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, WatParser.RULE_func_fields_import);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 497;
				this.match(WatParser.LPAR);
				this.state = 498;
				this.match(WatParser.PARAM);
				this.state = 502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === WatParser.VALUE_TYPE) {
					{
					{
					this.state = 499;
					this.value_type();
					}
					}
					this.state = 504;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 505;
				this.match(WatParser.RPAR);
				}
				break;

			case 2:
				{
				this.state = 506;
				this.match(WatParser.LPAR);
				this.state = 507;
				this.match(WatParser.PARAM);
				this.state = 508;
				this.bind_var();
				this.state = 509;
				this.value_type();
				this.state = 510;
				this.match(WatParser.RPAR);
				}
				break;
			}
			this.state = 514;
			this.func_fields_import_result();
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
	public func_fields_import_result(): Func_fields_import_resultContext {
		let _localctx: Func_fields_import_resultContext = new Func_fields_import_resultContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, WatParser.RULE_func_fields_import_result);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WatParser.LPAR) {
				{
				{
				this.state = 516;
				this.match(WatParser.LPAR);
				this.state = 517;
				this.match(WatParser.RESULT);
				this.state = 521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === WatParser.VALUE_TYPE) {
					{
					{
					this.state = 518;
					this.value_type();
					}
					}
					this.state = 523;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 524;
				this.match(WatParser.RPAR);
				}
				}
				this.state = 529;
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
	public func_fields_body(): Func_fields_bodyContext {
		let _localctx: Func_fields_bodyContext = new Func_fields_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, WatParser.RULE_func_fields_body);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 545;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
					case 1:
						{
						this.state = 530;
						this.match(WatParser.LPAR);
						this.state = 531;
						this.match(WatParser.PARAM);
						this.state = 535;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === WatParser.VALUE_TYPE) {
							{
							{
							this.state = 532;
							this.value_type();
							}
							}
							this.state = 537;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 538;
						this.match(WatParser.RPAR);
						}
						break;

					case 2:
						{
						this.state = 539;
						this.match(WatParser.LPAR);
						this.state = 540;
						this.match(WatParser.PARAM);
						this.state = 541;
						this.bind_var();
						this.state = 542;
						this.value_type();
						this.state = 543;
						this.match(WatParser.RPAR);
						}
						break;
					}
					}
				}
				this.state = 549;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			}
			this.state = 550;
			this.func_result_body();
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
	public func_result_body(): Func_result_bodyContext {
		let _localctx: Func_result_bodyContext = new Func_result_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, WatParser.RULE_func_result_body);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 563;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 552;
					this.match(WatParser.LPAR);
					this.state = 553;
					this.match(WatParser.RESULT);
					this.state = 557;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === WatParser.VALUE_TYPE) {
						{
						{
						this.state = 554;
						this.value_type();
						}
						}
						this.state = 559;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 560;
					this.match(WatParser.RPAR);
					}
					}
				}
				this.state = 565;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			}
			this.state = 566;
			this.func_body();
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
	public func_body(): Func_bodyContext {
		let _localctx: Func_bodyContext = new Func_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, WatParser.RULE_func_body);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 583;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
					case 1:
						{
						this.state = 568;
						this.match(WatParser.LPAR);
						this.state = 569;
						this.match(WatParser.LOCAL);
						this.state = 573;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === WatParser.VALUE_TYPE) {
							{
							{
							this.state = 570;
							this.value_type();
							}
							}
							this.state = 575;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 576;
						this.match(WatParser.RPAR);
						}
						break;

					case 2:
						{
						this.state = 577;
						this.match(WatParser.LPAR);
						this.state = 578;
						this.match(WatParser.LOCAL);
						this.state = 579;
						this.bind_var();
						this.state = 580;
						this.value_type();
						this.state = 581;
						this.match(WatParser.RPAR);
						}
						break;
					}
					}
				}
				this.state = 587;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			}
			this.state = 588;
			this.instr_list();
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
	public offset(): OffsetContext {
		let _localctx: OffsetContext = new OffsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, WatParser.RULE_offset);
		try {
			this.state = 596;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 590;
				this.match(WatParser.LPAR);
				this.state = 591;
				this.match(WatParser.OFFSET);
				this.state = 592;
				this.const_expr();
				this.state = 593;
				this.match(WatParser.RPAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 595;
				this.expr();
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
	public elem(): ElemContext {
		let _localctx: ElemContext = new ElemContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, WatParser.RULE_elem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 598;
			this.match(WatParser.LPAR);
			this.state = 599;
			this.match(WatParser.ELEM);
			this.state = 601;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WatParser.NAT || _la === WatParser.VAR) {
				{
				this.state = 600;
				this.var();
				}
			}

			this.state = 603;
			this.offset();
			this.state = 607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WatParser.NAT || _la === WatParser.VAR) {
				{
				{
				this.state = 604;
				this.var();
				}
				}
				this.state = 609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 610;
			this.match(WatParser.RPAR);
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
	public table(): TableContext {
		let _localctx: TableContext = new TableContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, WatParser.RULE_table);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
			this.match(WatParser.LPAR);
			this.state = 613;
			this.match(WatParser.TABLE);
			this.state = 615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WatParser.VAR) {
				{
				this.state = 614;
				this.bind_var();
				}
			}

			this.state = 617;
			this.table_fields();
			this.state = 618;
			this.match(WatParser.RPAR);
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
	public table_fields(): Table_fieldsContext {
		let _localctx: Table_fieldsContext = new Table_fieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, WatParser.RULE_table_fields);
		let _la: number;
		try {
			this.state = 638;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 620;
				this.table_type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 621;
				this.inline_import();
				this.state = 622;
				this.table_type();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 624;
				this.inline_export();
				this.state = 625;
				this.table_fields();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 627;
				this.elem_type();
				this.state = 628;
				this.match(WatParser.LPAR);
				this.state = 629;
				this.match(WatParser.ELEM);
				this.state = 633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === WatParser.NAT || _la === WatParser.VAR) {
					{
					{
					this.state = 630;
					this.var();
					}
					}
					this.state = 635;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 636;
				this.match(WatParser.RPAR);
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
	public data(): DataContext {
		let _localctx: DataContext = new DataContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, WatParser.RULE_data);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this.match(WatParser.LPAR);
			this.state = 641;
			this.match(WatParser.DATA);
			this.state = 643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WatParser.NAT || _la === WatParser.VAR) {
				{
				this.state = 642;
				this.var();
				}
			}

			this.state = 645;
			this.offset();
			this.state = 649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WatParser.STRING) {
				{
				{
				this.state = 646;
				this.match(WatParser.STRING);
				}
				}
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 652;
			this.match(WatParser.RPAR);
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
	public memory(): MemoryContext {
		let _localctx: MemoryContext = new MemoryContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, WatParser.RULE_memory);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 654;
			this.match(WatParser.LPAR);
			this.state = 655;
			this.match(WatParser.MEMORY);
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WatParser.VAR) {
				{
				this.state = 656;
				this.bind_var();
				}
			}

			this.state = 659;
			this.memory_fields();
			this.state = 660;
			this.match(WatParser.RPAR);
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
	public memory_fields(): Memory_fieldsContext {
		let _localctx: Memory_fieldsContext = new Memory_fieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, WatParser.RULE_memory_fields);
		let _la: number;
		try {
			this.state = 678;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 662;
				this.memory_type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 663;
				this.inline_import();
				this.state = 664;
				this.memory_type();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 666;
				this.inline_export();
				this.state = 667;
				this.memory_fields();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 669;
				this.match(WatParser.LPAR);
				this.state = 670;
				this.match(WatParser.DATA);
				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === WatParser.STRING) {
					{
					{
					this.state = 671;
					this.match(WatParser.STRING);
					}
					}
					this.state = 676;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 677;
				this.match(WatParser.RPAR);
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
	public sglobal(): SglobalContext {
		let _localctx: SglobalContext = new SglobalContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, WatParser.RULE_sglobal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 680;
			this.match(WatParser.LPAR);
			this.state = 681;
			this.match(WatParser.GLOBAL);
			this.state = 683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WatParser.VAR) {
				{
				this.state = 682;
				this.bind_var();
				}
			}

			this.state = 685;
			this.global_fields();
			this.state = 686;
			this.match(WatParser.RPAR);
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
	public global_fields(): Global_fieldsContext {
		let _localctx: Global_fieldsContext = new Global_fieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, WatParser.RULE_global_fields);
		try {
			this.state = 697;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 688;
				this.global_type();
				this.state = 689;
				this.const_expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 691;
				this.inline_import();
				this.state = 692;
				this.global_type();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 694;
				this.inline_export();
				this.state = 695;
				this.global_fields();
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
	public import_desc(): Import_descContext {
		let _localctx: Import_descContext = new Import_descContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, WatParser.RULE_import_desc);
		let _la: number;
		try {
			this.state = 739;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 699;
				this.match(WatParser.LPAR);
				this.state = 700;
				this.match(WatParser.FUNC);
				this.state = 702;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 701;
					this.bind_var();
					}
				}

				this.state = 704;
				this.type_use();
				this.state = 705;
				this.match(WatParser.RPAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 707;
				this.match(WatParser.LPAR);
				this.state = 708;
				this.match(WatParser.FUNC);
				this.state = 710;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 709;
					this.bind_var();
					}
				}

				this.state = 712;
				this.func_type();
				this.state = 713;
				this.match(WatParser.RPAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 715;
				this.match(WatParser.LPAR);
				this.state = 716;
				this.match(WatParser.TABLE);
				this.state = 718;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 717;
					this.bind_var();
					}
				}

				this.state = 720;
				this.table_type();
				this.state = 721;
				this.match(WatParser.RPAR);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 723;
				this.match(WatParser.LPAR);
				this.state = 724;
				this.match(WatParser.MEMORY);
				this.state = 726;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 725;
					this.bind_var();
					}
				}

				this.state = 728;
				this.memory_type();
				this.state = 729;
				this.match(WatParser.RPAR);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 731;
				this.match(WatParser.LPAR);
				this.state = 732;
				this.match(WatParser.GLOBAL);
				this.state = 734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 733;
					this.bind_var();
					}
				}

				this.state = 736;
				this.global_type();
				this.state = 737;
				this.match(WatParser.RPAR);
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
	public simport(): SimportContext {
		let _localctx: SimportContext = new SimportContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, WatParser.RULE_simport);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			this.match(WatParser.LPAR);
			this.state = 742;
			this.match(WatParser.IMPORT);
			this.state = 743;
			this.name();
			this.state = 744;
			this.name();
			this.state = 745;
			this.import_desc();
			this.state = 746;
			this.match(WatParser.RPAR);
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
	public inline_import(): Inline_importContext {
		let _localctx: Inline_importContext = new Inline_importContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, WatParser.RULE_inline_import);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 748;
			this.match(WatParser.LPAR);
			this.state = 749;
			this.match(WatParser.IMPORT);
			this.state = 750;
			this.name();
			this.state = 751;
			this.name();
			this.state = 752;
			this.match(WatParser.RPAR);
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
	public export_desc(): Export_descContext {
		let _localctx: Export_descContext = new Export_descContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, WatParser.RULE_export_desc);
		try {
			this.state = 774;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 754;
				this.match(WatParser.LPAR);
				this.state = 755;
				this.match(WatParser.FUNC);
				this.state = 756;
				this.var();
				this.state = 757;
				this.match(WatParser.RPAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 759;
				this.match(WatParser.LPAR);
				this.state = 760;
				this.match(WatParser.TABLE);
				this.state = 761;
				this.var();
				this.state = 762;
				this.match(WatParser.RPAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 764;
				this.match(WatParser.LPAR);
				this.state = 765;
				this.match(WatParser.MEMORY);
				this.state = 766;
				this.var();
				this.state = 767;
				this.match(WatParser.RPAR);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 769;
				this.match(WatParser.LPAR);
				this.state = 770;
				this.match(WatParser.GLOBAL);
				this.state = 771;
				this.var();
				this.state = 772;
				this.match(WatParser.RPAR);
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
	public export(): ExportContext {
		let _localctx: ExportContext = new ExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, WatParser.RULE_export);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 776;
			this.match(WatParser.LPAR);
			this.state = 777;
			this.match(WatParser.EXPORT);
			this.state = 778;
			this.name();
			this.state = 779;
			this.export_desc();
			this.state = 780;
			this.match(WatParser.RPAR);
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
	public inline_export(): Inline_exportContext {
		let _localctx: Inline_exportContext = new Inline_exportContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, WatParser.RULE_inline_export);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this.match(WatParser.LPAR);
			this.state = 783;
			this.match(WatParser.EXPORT);
			this.state = 784;
			this.name();
			this.state = 785;
			this.match(WatParser.RPAR);
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
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 106, WatParser.RULE_type_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 787;
			this.def_type();
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
	public type_def(): Type_defContext {
		let _localctx: Type_defContext = new Type_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, WatParser.RULE_type_def);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.match(WatParser.LPAR);
			this.state = 790;
			this.match(WatParser.TYPE);
			this.state = 792;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WatParser.VAR) {
				{
				this.state = 791;
				this.bind_var();
				}
			}

			this.state = 794;
			this.type_();
			this.state = 795;
			this.match(WatParser.RPAR);
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
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, WatParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 797;
			this.match(WatParser.LPAR);
			this.state = 798;
			this.match(WatParser.START);
			this.state = 799;
			this.var();
			this.state = 800;
			this.match(WatParser.RPAR);
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
	public module_field(): Module_fieldContext {
		let _localctx: Module_fieldContext = new Module_fieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, WatParser.RULE_module_field);
		try {
			this.state = 812;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 802;
				this.type_def();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 803;
				this.sglobal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 804;
				this.table();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 805;
				this.memory();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 806;
				this.func();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 807;
				this.elem();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 808;
				this.data();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 809;
				this.start();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 810;
				this.simport();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 811;
				this.export();
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
	public module_(): Module_Context {
		let _localctx: Module_Context = new Module_Context(this._ctx, this.state);
		this.enterRule(_localctx, 114, WatParser.RULE_module_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 814;
			this.match(WatParser.LPAR);
			this.state = 815;
			this.match(WatParser.MODULE);
			this.state = 817;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WatParser.VAR) {
				{
				this.state = 816;
				this.match(WatParser.VAR);
				}
			}

			this.state = 822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WatParser.LPAR) {
				{
				{
				this.state = 819;
				this.module_field();
				}
				}
				this.state = 824;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 825;
			this.match(WatParser.RPAR);
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
	public script_module(): Script_moduleContext {
		let _localctx: Script_moduleContext = new Script_moduleContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, WatParser.RULE_script_module);
		let _la: number;
		try {
			this.state = 841;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 827;
				this.module_();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 828;
				this.match(WatParser.LPAR);
				this.state = 829;
				this.match(WatParser.MODULE);
				this.state = 831;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 830;
					this.match(WatParser.VAR);
					}
				}

				this.state = 833;
				_la = this._input.LA(1);
				if (!(_la === WatParser.BIN || _la === WatParser.QUOTE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 837;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === WatParser.STRING) {
					{
					{
					this.state = 834;
					this.match(WatParser.STRING);
					}
					}
					this.state = 839;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 840;
				this.match(WatParser.RPAR);
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
	public action(): ActionContext {
		let _localctx: ActionContext = new ActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, WatParser.RULE_action);
		let _la: number;
		try {
			this.state = 860;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 843;
				this.match(WatParser.LPAR);
				this.state = 844;
				this.match(WatParser.INVOKE);
				this.state = 846;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 845;
					this.match(WatParser.VAR);
					}
				}

				this.state = 848;
				this.name();
				this.state = 849;
				this.const_list();
				this.state = 850;
				this.match(WatParser.RPAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 852;
				this.match(WatParser.LPAR);
				this.state = 853;
				this.match(WatParser.GET);
				this.state = 855;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 854;
					this.match(WatParser.VAR);
					}
				}

				this.state = 857;
				this.name();
				this.state = 858;
				this.match(WatParser.RPAR);
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
	public assertion(): AssertionContext {
		let _localctx: AssertionContext = new AssertionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, WatParser.RULE_assertion);
		try {
			this.state = 914;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 862;
				this.match(WatParser.LPAR);
				this.state = 863;
				this.match(WatParser.ASSERT_MALFORMED);
				this.state = 864;
				this.script_module();
				this.state = 865;
				this.match(WatParser.STRING);
				this.state = 866;
				this.match(WatParser.RPAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 868;
				this.match(WatParser.LPAR);
				this.state = 869;
				this.match(WatParser.ASSERT_INVALID);
				this.state = 870;
				this.script_module();
				this.state = 871;
				this.match(WatParser.STRING);
				this.state = 872;
				this.match(WatParser.RPAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 874;
				this.match(WatParser.LPAR);
				this.state = 875;
				this.match(WatParser.ASSERT_UNLINKABLE);
				this.state = 876;
				this.script_module();
				this.state = 877;
				this.match(WatParser.STRING);
				this.state = 878;
				this.match(WatParser.RPAR);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 880;
				this.match(WatParser.LPAR);
				this.state = 881;
				this.match(WatParser.ASSERT_TRAP);
				this.state = 882;
				this.script_module();
				this.state = 883;
				this.match(WatParser.STRING);
				this.state = 884;
				this.match(WatParser.RPAR);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 886;
				this.match(WatParser.LPAR);
				this.state = 887;
				this.match(WatParser.ASSERT_RETURN);
				this.state = 888;
				this.action();
				this.state = 889;
				this.const_list();
				this.state = 890;
				this.match(WatParser.RPAR);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 892;
				this.match(WatParser.LPAR);
				this.state = 893;
				this.match(WatParser.ASSERT_RETURN_CANONICAL_NAN);
				this.state = 894;
				this.action();
				this.state = 895;
				this.match(WatParser.RPAR);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 897;
				this.match(WatParser.LPAR);
				this.state = 898;
				this.match(WatParser.ASSERT_RETURN_ARITHMETIC_NAN);
				this.state = 899;
				this.action();
				this.state = 900;
				this.match(WatParser.RPAR);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 902;
				this.match(WatParser.LPAR);
				this.state = 903;
				this.match(WatParser.ASSERT_TRAP);
				this.state = 904;
				this.action();
				this.state = 905;
				this.match(WatParser.STRING);
				this.state = 906;
				this.match(WatParser.RPAR);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 908;
				this.match(WatParser.LPAR);
				this.state = 909;
				this.match(WatParser.ASSERT_EXHAUSTION);
				this.state = 910;
				this.action();
				this.state = 911;
				this.match(WatParser.STRING);
				this.state = 912;
				this.match(WatParser.RPAR);
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
	public cmd(): CmdContext {
		let _localctx: CmdContext = new CmdContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, WatParser.RULE_cmd);
		let _la: number;
		try {
			this.state = 928;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 916;
				this.action();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 917;
				this.assertion();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 918;
				this.script_module();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 919;
				this.match(WatParser.LPAR);
				this.state = 920;
				this.match(WatParser.REGISTER);
				this.state = 921;
				this.name();
				this.state = 923;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 922;
					this.match(WatParser.VAR);
					}
				}

				this.state = 925;
				this.match(WatParser.RPAR);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 927;
				this.meta();
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
	public meta(): MetaContext {
		let _localctx: MetaContext = new MetaContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, WatParser.RULE_meta);
		let _la: number;
		try {
			this.state = 962;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 930;
				this.match(WatParser.LPAR);
				this.state = 931;
				this.match(WatParser.SCRIPT);
				this.state = 933;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 932;
					this.match(WatParser.VAR);
					}
				}

				this.state = 938;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === WatParser.LPAR) {
					{
					{
					this.state = 935;
					this.cmd();
					}
					}
					this.state = 940;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 941;
				this.match(WatParser.RPAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 942;
				this.match(WatParser.LPAR);
				this.state = 943;
				this.match(WatParser.INPUT);
				this.state = 945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 944;
					this.match(WatParser.VAR);
					}
				}

				this.state = 947;
				this.match(WatParser.STRING);
				this.state = 948;
				this.match(WatParser.RPAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 949;
				this.match(WatParser.LPAR);
				this.state = 950;
				this.match(WatParser.OUTPUT);
				this.state = 952;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 951;
					this.match(WatParser.VAR);
					}
				}

				this.state = 954;
				this.match(WatParser.STRING);
				this.state = 955;
				this.match(WatParser.RPAR);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 956;
				this.match(WatParser.LPAR);
				this.state = 957;
				this.match(WatParser.OUTPUT);
				this.state = 959;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WatParser.VAR) {
					{
					this.state = 958;
					this.match(WatParser.VAR);
					}
				}

				this.state = 961;
				this.match(WatParser.RPAR);
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
	public wconst(): WconstContext {
		let _localctx: WconstContext = new WconstContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, WatParser.RULE_wconst);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 964;
			this.match(WatParser.LPAR);
			this.state = 965;
			this.match(WatParser.CONST);
			this.state = 966;
			this.literal();
			this.state = 967;
			this.match(WatParser.RPAR);
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
	public const_list(): Const_listContext {
		let _localctx: Const_listContext = new Const_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, WatParser.RULE_const_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 972;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WatParser.LPAR) {
				{
				{
				this.state = 969;
				this.wconst();
				}
				}
				this.state = 974;
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
	public script(): ScriptContext {
		let _localctx: ScriptContext = new ScriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, WatParser.RULE_script);
		let _la: number;
		try {
			this.state = 989;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 978;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === WatParser.LPAR) {
					{
					{
					this.state = 975;
					this.cmd();
					}
					}
					this.state = 980;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 981;
				this.match(WatParser.EOF);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 983;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 982;
					this.module_field();
					}
					}
					this.state = 985;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === WatParser.LPAR);
				this.state = 987;
				this.match(WatParser.EOF);
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
	public module(): ModuleContext {
		let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, WatParser.RULE_module);
		let _la: number;
		try {
			this.state = 1001;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 991;
				this.module_();
				this.state = 992;
				this.match(WatParser.EOF);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === WatParser.LPAR) {
					{
					{
					this.state = 994;
					this.module_field();
					}
					}
					this.state = 999;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1000;
				this.match(WatParser.EOF);
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03N\u03EE\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06\x97\n\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x07\b\xA1\n\b\f\b\x0E\b\xA4\v\b\x03" +
		"\b\x03\b\x07\b\xA8\n\b\f\b\x0E\b\xAB\v\b\x03\b\x03\b\x03\b\x03\b\x05\b" +
		"\xB1\n\b\x03\b\x07\b\xB4\n\b\f\b\x0E\b\xB7\v\b\x03\t\x03\t\x05\t\xBB\n" +
		"\t\x03\t\x03\t\x03\n\x03\n\x05\n\xC1\n\n\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\xD2\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x06\x10\xDE\n\x10\r\x10\x0E\x10\xDF\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xF1\n\x10\x03\x10\x05" +
		"\x10\xF4\n\x10\x03\x10\x03\x10\x05\x10\xF8\n\x10\x03\x10\x05\x10\xFB\n" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x05\x10\u0106\n\x10\x03\x11\x03\x11\x05\x11\u010A\n\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x07\x12\u0111\n\x12\f\x12\x0E\x12\u0114\v" +
		"\x12\x03\x12\x07\x12\u0117\n\x12\f\x12\x0E\x12\u011A\v\x12\x03\x12\x03" +
		"\x12\x03\x12\x07\x12\u011F\n\x12\f\x12\x0E\x12\u0122\v\x12\x03\x12\x07" +
		"\x12\u0125\n\x12\f\x12\x0E\x12\u0128\v\x12\x03\x13\x03\x13\x05\x13\u012C" +
		"\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x07\x14\u0133\n\x14\f\x14" +
		"\x0E\x14\u0136\v\x14\x03\x14\x07\x14\u0139\n\x14\f\x14\x0E\x14\u013C\v" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x07\x15\u0143\n\x15\f\x15" +
		"\x0E\x15\u0146\v\x15\x03\x15\x07\x15\u0149\n\x15\f\x15\x0E\x15\u014C\v" +
		"\x15\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u0152\n\x16\x03\x16\x03\x16" +
		"\x03\x16\x05\x16\u0157\n\x16\x03\x16\x03\x16\x05\x16\u015B\n\x16\x03\x16" +
		"\x03\x16\x03\x16\x05\x16\u0160\n\x16\x03\x16\x05\x16\u0163\n\x16\x03\x16" +
		"\x03\x16\x05\x16\u0167\n\x16\x05\x16\u0169\n\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x18\x05\x18\u0171\n\x18\x03\x18\x03\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x07\x1A\u017B\n\x1A\f\x1A\x0E\x1A" +
		"\u017E\v\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0184\n\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x05\x1A\u0189\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u018E" +
		"\n\x1A\x03\x1A\x05\x1A\u0191\n\x1A\x03\x1B\x05\x1B\u0194\n\x1B\x03\x1B" +
		"\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u019B\n\x1C\f\x1C\x0E\x1C\u019E" +
		"\v\x1C\x03\x1C\x07\x1C\u01A1\n\x1C\f\x1C\x0E\x1C\u01A4\v\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u01AB\n\x1D\f\x1D\x0E\x1D\u01AE\v" +
		"\x1D\x03\x1D\x07\x1D\u01B1\n\x1D\f\x1D\x0E\x1D\u01B4\v\x1D\x03\x1D\x07" +
		"\x1D\u01B7\n\x1D\f\x1D\x0E\x1D\u01BA\v\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x07\x1E\u01C0\n\x1E\f\x1E\x0E\x1E\u01C3\v\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01CE\n\x1E" +
		"\x05\x1E\u01D0\n\x1E\x03\x1F\x07\x1F\u01D3\n\x1F\f\x1F\x0E\x1F\u01D6\v" +
		"\x1F\x03\x1F\x05\x1F\u01D9\n\x1F\x03 \x03 \x03!\x03!\x03!\x05!\u01E0\n" +
		"!\x03!\x03!\x03!\x03\"\x05\"\u01E6\n\"\x03\"\x03\"\x03\"\x05\"\u01EB\n" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u01F2\n\"\x03#\x03#\x03#\x07#\u01F7" +
		"\n#\f#\x0E#\u01FA\v#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u0203\n#" +
		"\x03#\x03#\x03$\x03$\x03$\x07$\u020A\n$\f$\x0E$\u020D\v$\x03$\x07$\u0210" +
		"\n$\f$\x0E$\u0213\v$\x03%\x03%\x03%\x07%\u0218\n%\f%\x0E%\u021B\v%\x03" +
		"%\x03%\x03%\x03%\x03%\x03%\x03%\x07%\u0224\n%\f%\x0E%\u0227\v%\x03%\x03" +
		"%\x03&\x03&\x03&\x07&\u022E\n&\f&\x0E&\u0231\v&\x03&\x07&\u0234\n&\f&" +
		"\x0E&\u0237\v&\x03&\x03&\x03\'\x03\'\x03\'\x07\'\u023E\n\'\f\'\x0E\'\u0241" +
		"\v\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u024A\n\'\f\'\x0E" +
		"\'\u024D\v\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0257\n(\x03" +
		")\x03)\x03)\x05)\u025C\n)\x03)\x03)\x07)\u0260\n)\f)\x0E)\u0263\v)\x03" +
		")\x03)\x03*\x03*\x03*\x05*\u026A\n*\x03*\x03*\x03*\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x07+\u027A\n+\f+\x0E+\u027D\v+\x03" +
		"+\x03+\x05+\u0281\n+\x03,\x03,\x03,\x05,\u0286\n,\x03,\x03,\x07,\u028A" +
		"\n,\f,\x0E,\u028D\v,\x03,\x03,\x03-\x03-\x03-\x05-\u0294\n-\x03-\x03-" +
		"\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u02A3\n." +
		"\f.\x0E.\u02A6\v.\x03.\x05.\u02A9\n.\x03/\x03/\x03/\x05/\u02AE\n/\x03" +
		"/\x03/\x03/\x030\x030\x030\x030\x030\x030\x030\x030\x030\x050\u02BC\n" +
		"0\x031\x031\x031\x051\u02C1\n1\x031\x031\x031\x031\x031\x031\x051\u02C9" +
		"\n1\x031\x031\x031\x031\x031\x031\x051\u02D1\n1\x031\x031\x031\x031\x03" +
		"1\x031\x051\u02D9\n1\x031\x031\x031\x031\x031\x031\x051\u02E1\n1\x031" +
		"\x031\x031\x051\u02E6\n1\x032\x032\x032\x032\x032\x032\x032\x033\x033" +
		"\x033\x033\x033\x033\x034\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x054\u0309\n4\x03" +
		"5\x035\x035\x035\x035\x035\x036\x036\x036\x036\x036\x037\x037\x038\x03" +
		"8\x038\x058\u031B\n8\x038\x038\x038\x039\x039\x039\x039\x039\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u032F\n:\x03;\x03;\x03" +
		";\x05;\u0334\n;\x03;\x07;\u0337\n;\f;\x0E;\u033A\v;\x03;\x03;\x03<\x03" +
		"<\x03<\x03<\x05<\u0342\n<\x03<\x03<\x07<\u0346\n<\f<\x0E<\u0349\v<\x03" +
		"<\x05<\u034C\n<\x03=\x03=\x03=\x05=\u0351\n=\x03=\x03=\x03=\x03=\x03=" +
		"\x03=\x03=\x05=\u035A\n=\x03=\x03=\x03=\x05=\u035F\n=\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u0395\n>\x03?\x03?\x03?\x03?\x03" +
		"?\x03?\x03?\x05?\u039E\n?\x03?\x03?\x03?\x05?\u03A3\n?\x03@\x03@\x03@" +
		"\x05@\u03A8\n@\x03@\x07@\u03AB\n@\f@\x0E@\u03AE\v@\x03@\x03@\x03@\x03" +
		"@\x05@\u03B4\n@\x03@\x03@\x03@\x03@\x03@\x05@\u03BB\n@\x03@\x03@\x03@" +
		"\x03@\x03@\x05@\u03C2\n@\x03@\x05@\u03C5\n@\x03A\x03A\x03A\x03A\x03A\x03" +
		"B\x07B\u03CD\nB\fB\x0EB\u03D0\vB\x03C\x07C\u03D3\nC\fC\x0EC\u03D6\vC\x03" +
		"C\x03C\x06C\u03DA\nC\rC\x0EC\u03DB\x03C\x03C\x05C\u03E0\nC\x03D\x03D\x03" +
		"D\x03D\x07D\u03E6\nD\fD\x0ED\u03E9\vD\x03D\x05D\u03EC\nD\x03D\x02\x02" +
		"\x02E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
		"`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02" +
		"|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x02\x07\x03\x02\x06\x07\x03" +
		"\x02\x05\x07\x04\x02\x05\x05LL\x03\x02\x10\x11\x03\x02<=\x02\u0452\x02" +
		"\x88\x03\x02\x02\x02\x04\x8A\x03\x02\x02\x02\x06\x8C\x03\x02\x02\x02\b" +
		"\x8E\x03\x02\x02\x02\n\x96\x03\x02\x02\x02\f\x98\x03\x02\x02\x02\x0E\xB5" +
		"\x03\x02\x02\x02\x10\xB8\x03\x02\x02\x02\x12\xBE\x03\x02\x02\x02\x14\xC2" +
		"\x03\x02\x02\x02\x16\xC7\x03\x02\x02\x02\x18\xC9\x03\x02\x02\x02\x1A\xCB" +
		"\x03\x02\x02\x02\x1C\xD1\x03\x02\x02\x02\x1E\u0105\x03\x02\x02\x02 \u0107" +
		"\x03\x02\x02\x02\"\u0118\x03\x02\x02\x02$\u0129\x03\x02\x02\x02&\u013A" +
		"\x03\x02\x02\x02(\u014A\x03\x02\x02\x02*\u0168\x03\x02\x02\x02,\u016A" +
		"\x03\x02\x02\x02.\u0170\x03\x02\x02\x020\u0174\x03\x02\x02\x022\u0190" +
		"\x03\x02\x02\x024\u0193\x03\x02\x02\x026\u01A2\x03\x02\x02\x028\u01B2" +
		"\x03\x02\x02\x02:\u01CF\x03\x02\x02\x02<\u01D4\x03\x02\x02\x02>\u01DA" +
		"\x03\x02\x02\x02@\u01DC\x03\x02\x02\x02B\u01F1\x03\x02\x02\x02D\u0202" +
		"\x03\x02\x02\x02F\u0211\x03\x02\x02\x02H\u0225\x03\x02\x02\x02J\u0235" +
		"\x03\x02\x02\x02L\u024B\x03\x02\x02\x02N\u0256\x03\x02\x02\x02P\u0258" +
		"\x03\x02\x02\x02R\u0266\x03\x02\x02\x02T\u0280\x03\x02\x02\x02V\u0282" +
		"\x03\x02\x02\x02X\u0290\x03\x02\x02\x02Z\u02A8\x03\x02\x02\x02\\\u02AA" +
		"\x03\x02\x02\x02^\u02BB\x03\x02\x02\x02`\u02E5\x03\x02\x02\x02b\u02E7" +
		"\x03\x02\x02\x02d\u02EE\x03\x02\x02\x02f\u0308\x03\x02\x02\x02h\u030A" +
		"\x03\x02\x02\x02j\u0310\x03\x02\x02\x02l\u0315\x03\x02\x02\x02n\u0317" +
		"\x03\x02\x02\x02p\u031F\x03\x02\x02\x02r\u032E\x03\x02\x02\x02t\u0330" +
		"\x03\x02\x02\x02v\u034B\x03\x02\x02\x02x\u035E\x03\x02\x02\x02z\u0394" +
		"\x03\x02\x02\x02|\u03A2\x03\x02\x02\x02~\u03C4\x03\x02\x02\x02\x80\u03C6" +
		"\x03\x02\x02\x02\x82\u03CE\x03\x02\x02\x02\x84\u03DF\x03\x02\x02\x02\x86" +
		"\u03EB\x03\x02\x02\x02\x88\x89\t\x02\x02\x02\x89\x03\x03\x02\x02\x02\x8A" +
		"\x8B\x07\b\x02\x02\x8B\x05\x03\x02\x02\x02\x8C\x8D\x07\t\x02\x02\x8D\x07" +
		"\x03\x02\x02\x02\x8E\x8F\x07\v\x02\x02\x8F\t\x03\x02\x02\x02\x90\x97\x05" +
		"\x06\x04\x02\x91\x92\x07\x03\x02\x02\x92\x93\x07\f\x02\x02\x93\x94\x05" +
		"\x06\x04\x02\x94\x95\x07\x04\x02\x02\x95\x97\x03\x02\x02\x02\x96\x90\x03" +
		"\x02\x02\x02\x96\x91\x03\x02\x02\x02\x97\v\x03\x02\x02\x02\x98\x99\x07" +
		"\x03\x02\x02\x99\x9A\x07.\x02\x02\x9A\x9B\x05\x0E\b\x02\x9B\x9C\x07\x04" +
		"\x02\x02\x9C\r\x03\x02\x02\x02\x9D\xB0\x07\x03\x02\x02\x9E\xA2\x071\x02" +
		"\x02\x9F\xA1\x05\x06\x04\x02\xA0\x9F\x03\x02\x02\x02\xA1\xA4\x03\x02\x02" +
		"\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xB1\x03\x02\x02" +
		"\x02\xA4\xA2\x03\x02\x02\x02\xA5\xA9\x070\x02\x02\xA6\xA8\x05\x06\x04" +
		"\x02\xA7\xA6\x03\x02\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02\x02" +
		"\x02\xA9\xAA\x03\x02\x02\x02\xAA\xB1\x03\x02\x02\x02\xAB\xA9\x03\x02\x02" +
		"\x02\xAC\xAD\x070\x02\x02\xAD\xAE\x05\x1A\x0E\x02\xAE\xAF\x05\x06\x04" +
		"\x02\xAF\xB1\x03\x02\x02\x02\xB0\x9E\x03\x02\x02\x02\xB0\xA5\x03\x02\x02" +
		"\x02\xB0\xAC\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x07\x04\x02" +
		"\x02\xB3\x9D\x03\x02\x02\x02\xB4\xB7\x03\x02\x02\x02\xB5\xB3\x03\x02\x02" +
		"\x02\xB5\xB6\x03\x02\x02\x02\xB6\x0F\x03\x02\x02\x02\xB7\xB5\x03\x02\x02" +
		"\x02\xB8\xBA\x07\x05\x02\x02\xB9\xBB\x07\x05\x02\x02\xBA\xB9\x03\x02\x02" +
		"\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x05\b\x05" +
		"\x02\xBD\x11\x03\x02\x02\x02\xBE\xC0\x07\x05\x02\x02\xBF\xC1\x07\x05\x02" +
		"\x02\xC0\xBF\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\x13\x03\x02\x02" +
		"\x02\xC2\xC3\x07\x03\x02\x02\xC3\xC4\x07-\x02\x02\xC4\xC5\x05\x18\r\x02" +
		"\xC5\xC6\x07\x04\x02\x02\xC6\x15\x03\x02\x02\x02\xC7\xC8\t\x03\x02\x02" +
		"\xC8\x17\x03\x02\x02\x02\xC9\xCA\t\x04\x02\x02\xCA\x19\x03\x02\x02\x02" +
		"\xCB\xCC\x07L\x02\x02\xCC\x1B\x03\x02\x02\x02\xCD\xD2\x05\x1E\x10\x02" +
		"\xCE\xD2\x05$\x13\x02\xCF\xD2\x05*\x16\x02\xD0\xD2\x050\x19\x02\xD1\xCD" +
		"\x03\x02\x02\x02\xD1\xCE\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD0" +
		"\x03\x02\x02\x02\xD2\x1D\x03\x02\x02\x02\xD3\u0106\x07\x0E\x02\x02\xD4" +
		"\u0106\x07\r\x02\x02\xD5\u0106\x07\x0F\x02\x02\xD6\u0106\x07\x1A\x02\x02" +
		"\xD7\xD8\x07\x13\x02\x02\xD8\u0106\x05\x18\r\x02\xD9\xDA\x07\x14\x02\x02" +
		"\xDA\u0106\x05\x18\r\x02\xDB\xDD\x07\x15\x02\x02\xDC\xDE\x05\x18\r\x02" +
		"\xDD\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02" +
		"\xDF\xE0\x03\x02\x02\x02\xE0\u0106\x03\x02\x02\x02\xE1\u0106\x07\x16\x02" +
		"\x02\xE2\xE3\x07\x1B\x02\x02\xE3\u0106\x05\x18\r\x02\xE4\xE5\x07\x1D\x02" +
		"\x02\xE5\u0106\x05\x18\r\x02\xE6\xE7\x07\x1E\x02\x02\xE7\u0106\x05\x18" +
		"\r\x02\xE8\xE9\x07\x1F\x02\x02\xE9\u0106\x05\x18\r\x02\xEA\xEB\x07 \x02" +
		"\x02\xEB\u0106\x05\x18\r\x02\xEC\xED\x07!\x02\x02\xED\u0106\x05\x18\r" +
		"\x02\xEE\xF0\x07\"\x02\x02\xEF\xF1\x07$\x02\x02\xF0\xEF\x03\x02\x02\x02" +
		"\xF0\xF1\x03\x02\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2\xF4\x07%\x02\x02" +
		"\xF3\xF2\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\u0106\x03\x02\x02" +
		"\x02\xF5\xF7\x07#\x02\x02\xF6\xF8\x07$\x02\x02\xF7\xF6\x03\x02\x02\x02" +
		"\xF7\xF8\x03\x02\x02\x02\xF8\xFA\x03\x02\x02\x02\xF9\xFB\x07%\x02\x02" +
		"\xFA\xF9\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\u0106\x03\x02\x02" +
		"\x02\xFC\u0106\x07+\x02\x02\xFD\u0106\x07,\x02\x02\xFE\xFF\x07\n\x02\x02" +
		"\xFF\u0106\x05\x16\f\x02\u0100\u0106\x07(\x02\x02\u0101\u0106\x07)\x02" +
		"\x02\u0102\u0106\x07&\x02\x02\u0103\u0106\x07\'\x02\x02\u0104\u0106\x07" +
		"*\x02\x02\u0105\xD3\x03\x02\x02\x02\u0105\xD4\x03\x02\x02\x02\u0105\xD5" +
		"\x03\x02\x02\x02\u0105\xD6\x03\x02\x02\x02\u0105\xD7\x03\x02\x02\x02\u0105" +
		"\xD9\x03\x02\x02\x02\u0105\xDB\x03\x02\x02\x02\u0105\xE1\x03\x02\x02\x02" +
		"\u0105\xE2\x03\x02\x02\x02\u0105\xE4\x03\x02\x02\x02\u0105\xE6\x03\x02" +
		"\x02\x02\u0105\xE8\x03\x02\x02\x02\u0105\xEA\x03\x02\x02\x02\u0105\xEC" +
		"\x03\x02\x02\x02\u0105\xEE\x03\x02\x02\x02\u0105\xF5\x03\x02\x02\x02\u0105" +
		"\xFC\x03\x02\x02\x02\u0105\xFD\x03\x02\x02\x02\u0105\xFE\x03\x02\x02\x02" +
		"\u0105\u0100\x03\x02\x02\x02\u0105\u0101\x03\x02\x02\x02\u0105\u0102\x03" +
		"\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0104\x03\x02\x02\x02\u0106" +
		"\x1F\x03\x02\x02\x02\u0107\u0109\x07\x1C\x02\x02\u0108\u010A\x05\x14\v" +
		"\x02\u0109\u0108\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010B" +
		"\x03\x02\x02\x02\u010B\u010C\x05\"\x12\x02\u010C!\x03\x02\x02\x02\u010D" +
		"\u010E\x07\x03\x02\x02\u010E\u0112\x070\x02\x02\u010F\u0111\x05\x06\x04" +
		"\x02\u0110\u010F\x03\x02\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110" +
		"\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0115\x03\x02\x02\x02" +
		"\u0114\u0112\x03\x02\x02\x02\u0115\u0117\x07\x04\x02\x02\u0116\u010D\x03" +
		"\x02\x02\x02\u0117\u011A\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0118" +
		"\u0119\x03\x02\x02\x02\u0119\u0126\x03\x02\x02\x02\u011A\u0118\x03\x02" +
		"\x02\x02\u011B\u011C\x07\x03\x02\x02\u011C\u0120\x071\x02\x02\u011D\u011F" +
		"\x05\x06\x04\x02\u011E\u011D\x03\x02\x02\x02\u011F\u0122\x03\x02\x02\x02" +
		"\u0120\u011E\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0123\x03" +
		"\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0123\u0125\x07\x04\x02\x02\u0124" +
		"\u011B\x03\x02\x02\x02\u0125\u0128\x03\x02\x02\x02\u0126\u0124\x03\x02" +
		"\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127#\x03\x02\x02\x02\u0128\u0126" +
		"\x03\x02\x02\x02\u0129\u012B\x07\x1C\x02\x02\u012A\u012C\x05\x14\v\x02" +
		"\u012B\u012A\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012D\x03" +
		"\x02\x02\x02\u012D\u012E\x05&\x14\x02\u012E%\x03\x02\x02\x02\u012F\u0130" +
		"\x07\x03\x02\x02\u0130\u0134\x070\x02\x02\u0131\u0133\x05\x06\x04\x02" +
		"\u0132\u0131\x03\x02\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0132\x03" +
		"\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0137\x03\x02\x02\x02\u0136" +
		"\u0134\x03\x02\x02\x02\u0137\u0139\x07\x04\x02\x02\u0138\u012F\x03\x02" +
		"\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A" +
		"\u013B\x03\x02\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C\u013A\x03\x02" +
		"\x02\x02\u013D\u013E\x05(\x15\x02\u013E\'\x03\x02\x02\x02\u013F\u0140" +
		"\x07\x03\x02\x02\u0140\u0144\x071\x02\x02\u0141\u0143\x05\x06\x04\x02" +
		"\u0142\u0141\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142\x03" +
		"\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0147\x03\x02\x02\x02\u0146" +
		"\u0144\x03\x02\x02\x02\u0147\u0149\x07\x04\x02\x02\u0148\u013F\x03\x02" +
		"\x02\x02\u0149\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A" +
		"\u014B\x03\x02\x02\x02\u014B\u014D\x03\x02\x02\x02\u014C\u014A\x03\x02" +
		"\x02\x02\u014D\u014E\x05\x1C\x0F\x02\u014E)\x03\x02\x02\x02\u014F\u0151" +
		"\t\x05\x02\x02\u0150\u0152\x05\x1A\x0E\x02\u0151\u0150\x03\x02\x02\x02" +
		"\u0151\u0152\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0154\x05" +
		".\x18\x02\u0154\u0156\x07\x12\x02\x02\u0155\u0157\x05\x1A\x0E\x02\u0156" +
		"\u0155\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0169\x03\x02" +
		"\x02\x02\u0158\u015A\x07\x17\x02\x02\u0159\u015B\x05\x1A\x0E\x02\u015A" +
		"\u0159\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015C\x03\x02" +
		"\x02\x02\u015C\u0162\x05.\x18\x02\u015D\u015F\x07\x19\x02\x02\u015E\u0160" +
		"\x05\x1A\x0E\x02\u015F\u015E\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02" +
		"\u0160\u0161\x03\x02\x02\x02\u0161\u0163\x05<\x1F\x02\u0162\u015D\x03" +
		"\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164" +
		"\u0166\x07\x12\x02\x02\u0165\u0167\x05\x1A\x0E\x02\u0166\u0165\x03\x02" +
		"\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0169\x03\x02\x02\x02\u0168" +
		"\u014F\x03\x02\x02\x02\u0168\u0158\x03\x02\x02\x02\u0169+\x03\x02\x02" +
		"\x02\u016A\u016B\x07\x03\x02\x02\u016B\u016C\x071\x02\x02\u016C\u016D" +
		"\x05\x06\x04\x02\u016D\u016E\x07\x04\x02\x02\u016E-\x03\x02\x02\x02\u016F" +
		"\u0171\x05,\x17\x02\u0170\u016F\x03\x02\x02\x02\u0170\u0171\x03\x02\x02" +
		"\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0173\x05<\x1F\x02\u0173/\x03\x02" +
		"\x02\x02\u0174\u0175\x07\x03\x02\x02\u0175\u0176\x052\x1A\x02\u0176\u0177" +
		"\x07\x04\x02\x02\u01771\x03\x02\x02\x02\u0178\u017C\x05\x1E\x10\x02\u0179" +
		"\u017B\x050\x19\x02\u017A\u0179\x03\x02\x02\x02\u017B\u017E\x03\x02\x02" +
		"\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u0191" +
		"\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017F\u0180\x07\x1C\x02\x02" +
		"\u0180\u0191\x054\x1B\x02\u0181\u0183\x07\x10\x02\x02\u0182\u0184\x05" +
		"\x1A\x0E\x02\u0183\u0182\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184" +
		"\u0185\x03\x02\x02\x02\u0185\u0191\x05.\x18\x02\u0186\u0188\x07\x11\x02" +
		"\x02\u0187\u0189\x05\x1A\x0E\x02\u0188\u0187\x03\x02\x02\x02\u0188\u0189" +
		"\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u0191\x05.\x18\x02" +
		"\u018B\u018D\x07\x17\x02\x02\u018C\u018E\x05\x1A\x0E\x02\u018D\u018C\x03" +
		"\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F" +
		"\u0191\x05:\x1E\x02\u0190\u0178\x03\x02\x02\x02\u0190\u017F\x03\x02\x02" +
		"\x02\u0190\u0181\x03\x02\x02\x02\u0190\u0186\x03\x02\x02\x02\u0190\u018B" +
		"\x03\x02\x02\x02\u01913\x03\x02\x02\x02\u0192\u0194\x05\x14\v\x02\u0193" +
		"\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0195\x03\x02" +
		"\x02\x02\u0195\u0196\x056\x1C\x02\u01965\x03\x02\x02\x02\u0197\u0198\x07" +
		"\x03\x02\x02\u0198\u019C\x070\x02\x02\u0199\u019B\x05\x06\x04\x02\u019A" +
		"\u0199\x03\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02" +
		"\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019F\x03\x02\x02\x02\u019E" +
		"\u019C\x03\x02\x02\x02\u019F\u01A1\x07\x04\x02\x02\u01A0\u0197\x03\x02" +
		"\x02\x02\u01A1\u01A4\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2" +
		"\u01A3\x03\x02\x02\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4\u01A2\x03\x02" +
		"\x02\x02\u01A5\u01A6\x058\x1D\x02\u01A67\x03\x02\x02\x02\u01A7\u01A8\x07" +
		"\x03\x02\x02\u01A8\u01AC\x071\x02\x02\u01A9\u01AB\x05\x06\x04\x02\u01AA" +
		"\u01A9\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC\u01AA\x03\x02" +
		"\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AF\x03\x02\x02\x02\u01AE" +
		"\u01AC\x03\x02\x02\x02\u01AF\u01B1\x07\x04\x02\x02\u01B0\u01A7\x03\x02" +
		"\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2" +
		"\u01B3\x03\x02\x02\x02\u01B3\u01B8\x03\x02\x02\x02\u01B4\u01B2\x03\x02" +
		"\x02\x02\u01B5\u01B7\x050\x19\x02\u01B6\u01B5\x03\x02\x02\x02\u01B7\u01BA" +
		"\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02" +
		"\u01B99\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u01BB\u01BC\x05,\x17\x02\u01BC\u01BD\x05:\x1E\x02\u01BD\u01D0\x03" +
		"\x02\x02\x02\u01BE\u01C0\x050\x19\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0" +
		"\u01C3\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02" +
		"\x02\x02\u01C2\u01C4\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4" +
		"\u01C5\x07\x03\x02\x02\u01C5\u01C6\x07\x18\x02\x02\u01C6\u01C7\x05<\x1F" +
		"\x02\u01C7\u01CD\x07\x04\x02\x02\u01C8\u01C9\x07\x03\x02\x02\u01C9\u01CA" +
		"\x07\x19\x02\x02\u01CA\u01CB\x05<\x1F\x02\u01CB\u01CC\x07\x04\x02\x02" +
		"\u01CC\u01CE\x03\x02\x02\x02\u01CD\u01C8\x03\x02\x02\x02\u01CD\u01CE\x03" +
		"\x02\x02\x02\u01CE\u01D0\x03\x02\x02\x02\u01CF\u01BB\x03\x02\x02\x02\u01CF" +
		"\u01C1\x03\x02\x02\x02\u01D0;\x03\x02\x02\x02\u01D1\u01D3\x05\x1C\x0F" +
		"\x02\u01D2\u01D1\x03\x02\x02\x02\u01D3\u01D6\x03\x02\x02\x02\u01D4\u01D2" +
		"\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D8\x03\x02\x02\x02" +
		"\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01D9\x05 \x11\x02\u01D8\u01D7\x03" +
		"\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9=\x03\x02\x02\x02\u01DA" +
		"\u01DB\x05<\x1F\x02\u01DB?\x03\x02\x02\x02\u01DC\u01DD\x07\x03\x02\x02" +
		"\u01DD\u01DF\x07.\x02\x02\u01DE\u01E0\x05\x1A\x0E\x02\u01DF\u01DE\x03" +
		"\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1" +
		"\u01E2\x05B\"\x02\u01E2\u01E3\x07\x04\x02\x02\u01E3A\x03\x02\x02\x02\u01E4" +
		"\u01E6\x05\x14\v\x02\u01E5\u01E4\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02" +
		"\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01F2\x05H%\x02\u01E8\u01EA\x05" +
		"d3\x02\u01E9\u01EB\x05\x14\v\x02\u01EA\u01E9\x03\x02\x02\x02\u01EA\u01EB" +
		"\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01ED\x05D#\x02\u01ED" +
		"\u01F2\x03\x02\x02\x02\u01EE\u01EF\x05j6\x02\u01EF\u01F0\x05B\"\x02\u01F0" +
		"\u01F2\x03\x02\x02\x02\u01F1\u01E5\x03\x02\x02\x02\u01F1\u01E8\x03\x02" +
		"\x02\x02\u01F1\u01EE\x03\x02\x02\x02\u01F2C\x03\x02\x02\x02\u01F3\u01F4" +
		"\x07\x03\x02\x02\u01F4\u01F8\x070\x02\x02\u01F5\u01F7\x05\x06\x04\x02" +
		"\u01F6\u01F5\x03\x02\x02\x02\u01F7\u01FA\x03\x02\x02\x02\u01F8\u01F6\x03" +
		"\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FB\x03\x02\x02\x02\u01FA" +
		"\u01F8\x03\x02\x02\x02\u01FB\u0203\x07\x04\x02\x02\u01FC\u01FD\x07\x03" +
		"\x02\x02\u01FD\u01FE\x070\x02\x02\u01FE\u01FF\x05\x1A\x0E\x02\u01FF\u0200" +
		"\x05\x06\x04\x02\u0200\u0201\x07\x04\x02\x02\u0201\u0203\x03\x02\x02\x02" +
		"\u0202\u01F3\x03\x02\x02\x02\u0202\u01FC\x03\x02\x02\x02\u0203\u0204\x03" +
		"\x02\x02\x02\u0204\u0205\x05F$\x02\u0205E\x03\x02\x02\x02\u0206\u0207" +
		"\x07\x03\x02\x02\u0207\u020B\x071\x02\x02\u0208\u020A\x05\x06\x04\x02" +
		"\u0209\u0208\x03\x02\x02\x02\u020A\u020D\x03\x02\x02\x02\u020B\u0209\x03" +
		"\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020E\x03\x02\x02\x02\u020D" +
		"\u020B\x03\x02\x02\x02\u020E\u0210\x07\x04\x02\x02\u020F\u0206\x03\x02" +
		"\x02\x02\u0210\u0213\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02\u0211" +
		"\u0212\x03\x02\x02\x02\u0212G\x03\x02\x02\x02\u0213\u0211\x03\x02\x02" +
		"\x02\u0214\u0215\x07\x03\x02\x02\u0215\u0219\x070\x02\x02\u0216\u0218" +
		"\x05\x06\x04\x02\u0217\u0216\x03\x02\x02\x02\u0218\u021B\x03\x02\x02\x02" +
		"\u0219\u0217\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021C\x03" +
		"\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021C\u0224\x07\x04\x02\x02\u021D" +
		"\u021E\x07\x03\x02\x02\u021E\u021F\x070\x02\x02\u021F\u0220\x05\x1A\x0E" +
		"\x02\u0220\u0221\x05\x06\x04\x02\u0221\u0222\x07\x04\x02\x02\u0222\u0224" +
		"\x03\x02\x02\x02\u0223\u0214\x03\x02\x02\x02\u0223\u021D\x03\x02\x02\x02" +
		"\u0224\u0227\x03\x02\x02\x02\u0225\u0223\x03\x02\x02\x02\u0225\u0226\x03" +
		"\x02\x02\x02\u0226\u0228\x03\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0228" +
		"\u0229\x05J&\x02\u0229I\x03\x02\x02\x02\u022A\u022B\x07\x03\x02\x02\u022B" +
		"\u022F\x071\x02\x02\u022C\u022E\x05\x06\x04\x02\u022D\u022C\x03\x02\x02" +
		"\x02\u022E\u0231\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u022F\u0230" +
		"\x03\x02\x02\x02\u0230\u0232\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02" +
		"\u0232\u0234\x07\x04\x02\x02\u0233\u022A\x03\x02\x02\x02\u0234\u0237\x03" +
		"\x02\x02\x02\u0235\u0233\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236" +
		"\u0238\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02\u0238\u0239\x05L\'" +
		"\x02\u0239K\x03\x02\x02\x02\u023A\u023B\x07\x03\x02\x02\u023B\u023F\x07" +
		"2\x02\x02\u023C\u023E\x05\x06\x04\x02\u023D\u023C\x03\x02\x02\x02\u023E" +
		"\u0241\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u023F\u0240\x03\x02" +
		"\x02\x02\u0240\u0242\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02\u0242" +
		"\u024A\x07\x04\x02\x02\u0243\u0244\x07\x03\x02\x02\u0244\u0245\x072\x02" +
		"\x02\u0245\u0246\x05\x1A\x0E\x02\u0246\u0247\x05\x06\x04\x02\u0247\u0248" +
		"\x07\x04\x02\x02\u0248\u024A\x03\x02\x02\x02\u0249\u023A\x03\x02\x02\x02" +
		"\u0249\u0243\x03\x02\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B\u0249\x03" +
		"\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024E\x03\x02\x02\x02\u024D" +
		"\u024B\x03\x02\x02\x02\u024E\u024F\x05<\x1F\x02\u024FM\x03\x02\x02\x02" +
		"\u0250\u0251\x07\x03\x02\x02\u0251\u0252\x078\x02\x02\u0252\u0253\x05" +
		"> \x02\u0253\u0254\x07\x04\x02\x02\u0254\u0257\x03\x02\x02\x02\u0255\u0257" +
		"\x050\x19\x02\u0256\u0250\x03\x02\x02\x02\u0256\u0255\x03\x02\x02\x02" +
		"\u0257O\x03\x02\x02\x02\u0258\u0259\x07\x03\x02\x02\u0259\u025B\x076\x02" +
		"\x02\u025A\u025C\x05\x18\r\x02\u025B\u025A\x03\x02\x02\x02\u025B\u025C" +
		"\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u0261\x05N(\x02\u025E" +
		"\u0260\x05\x18\r\x02\u025F\u025E\x03\x02\x02\x02\u0260\u0263\x03\x02\x02" +
		"\x02\u0261\u025F\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262\u0264" +
		"\x03\x02\x02\x02\u0263\u0261\x03\x02\x02\x02\u0264\u0265\x07\x04\x02\x02" +
		"\u0265Q\x03\x02\x02\x02\u0266\u0267\x07\x03\x02\x02\u0267\u0269\x074\x02" +
		"\x02\u0268\u026A\x05\x1A\x0E\x02\u0269\u0268\x03\x02\x02\x02\u0269\u026A" +
		"\x03\x02\x02\x02\u026A\u026B\x03\x02\x02\x02\u026B\u026C\x05T+\x02\u026C" +
		"\u026D\x07\x04\x02\x02\u026DS\x03\x02\x02\x02\u026E\u0281\x05\x10\t\x02" +
		"\u026F\u0270\x05d3\x02\u0270\u0271\x05\x10\t\x02\u0271\u0281\x03\x02\x02" +
		"\x02\u0272\u0273\x05j6\x02\u0273\u0274\x05T+\x02\u0274\u0281\x03\x02\x02" +
		"\x02\u0275\u0276\x05\b\x05\x02\u0276\u0277\x07\x03\x02\x02\u0277\u027B" +
		"\x076\x02\x02\u0278\u027A\x05\x18\r\x02\u0279\u0278\x03\x02\x02\x02\u027A" +
		"\u027D\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027B\u027C\x03\x02" +
		"\x02\x02\u027C\u027E\x03\x02\x02\x02\u027D\u027B\x03\x02\x02\x02\u027E" +
		"\u027F\x07\x04\x02\x02\u027F\u0281\x03\x02\x02\x02\u0280\u026E\x03\x02" +
		"\x02\x02\u0280\u026F\x03\x02\x02\x02\u0280\u0272\x03\x02\x02\x02\u0280" +
		"\u0275\x03\x02\x02\x02\u0281U\x03\x02\x02\x02\u0282\u0283\x07\x03\x02" +
		"\x02\u0283\u0285\x077\x02\x02\u0284\u0286\x05\x18\r\x02\u0285\u0284\x03" +
		"\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287" +
		"\u028B\x05N(\x02\u0288\u028A\x07\b\x02\x02\u0289\u0288\x03\x02\x02\x02" +
		"\u028A\u028D\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028B\u028C\x03" +
		"\x02\x02\x02\u028C\u028E\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028E" +
		"\u028F\x07\x04\x02\x02\u028FW\x03\x02\x02\x02\u0290\u0291\x07\x03\x02" +
		"\x02\u0291\u0293\x075\x02\x02\u0292\u0294\x05\x1A\x0E\x02\u0293\u0292" +
		"\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02" +
		"\u0295\u0296\x05Z.\x02\u0296\u0297\x07\x04\x02\x02\u0297Y\x03\x02\x02" +
		"\x02\u0298\u02A9\x05\x12\n\x02\u0299\u029A\x05d3\x02\u029A\u029B\x05\x12" +
		"\n\x02\u029B\u02A9\x03\x02\x02\x02\u029C\u029D\x05j6\x02\u029D\u029E\x05" +
		"Z.\x02\u029E\u02A9\x03\x02\x02\x02\u029F\u02A0\x07\x03\x02\x02\u02A0\u02A4" +
		"\x077\x02\x02\u02A1\u02A3\x07\b\x02\x02\u02A2\u02A1\x03\x02\x02\x02\u02A3" +
		"\u02A6\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4\u02A5\x03\x02" +
		"\x02\x02\u02A5\u02A7\x03\x02\x02\x02\u02A6\u02A4\x03\x02\x02\x02\u02A7" +
		"\u02A9\x07\x04\x02\x02\u02A8\u0298\x03\x02\x02\x02\u02A8\u0299\x03\x02" +
		"\x02\x02\u02A8\u029C\x03\x02\x02\x02\u02A8\u029F\x03\x02\x02\x02\u02A9" +
		"[\x03\x02\x02\x02\u02AA\u02AB\x07\x03\x02\x02\u02AB\u02AD\x073\x02\x02" +
		"\u02AC\u02AE\x05\x1A\x0E\x02\u02AD\u02AC\x03\x02\x02\x02\u02AD\u02AE\x03" +
		"\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B0\x05^0\x02\u02B0\u02B1" +
		"\x07\x04\x02\x02\u02B1]\x03\x02\x02\x02\u02B2\u02B3\x05\n\x06\x02\u02B3" +
		"\u02B4\x05> \x02\u02B4\u02BC\x03\x02\x02\x02\u02B5\u02B6\x05d3\x02\u02B6" +
		"\u02B7\x05\n\x06\x02\u02B7\u02BC\x03\x02\x02\x02\u02B8\u02B9\x05j6\x02" +
		"\u02B9\u02BA\x05^0\x02\u02BA\u02BC\x03\x02\x02\x02\u02BB\u02B2\x03\x02" +
		"\x02\x02\u02BB\u02B5\x03\x02\x02\x02\u02BB\u02B8\x03\x02\x02\x02\u02BC" +
		"_\x03\x02\x02\x02\u02BD\u02BE\x07\x03\x02\x02\u02BE\u02C0\x07.\x02\x02" +
		"\u02BF\u02C1\x05\x1A\x0E\x02\u02C0\u02BF\x03\x02\x02\x02\u02C0\u02C1\x03" +
		"\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2\u02C3\x05\x14\v\x02\u02C3" +
		"\u02C4\x07\x04\x02\x02\u02C4\u02E6\x03\x02\x02\x02\u02C5\u02C6\x07\x03" +
		"\x02\x02\u02C6\u02C8\x07.\x02\x02\u02C7\u02C9\x05\x1A\x0E\x02\u02C8\u02C7" +
		"\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02" +
		"\u02CA\u02CB\x05\x0E\b\x02\u02CB\u02CC\x07\x04\x02\x02\u02CC\u02E6\x03" +
		"\x02\x02\x02\u02CD\u02CE\x07\x03\x02\x02\u02CE\u02D0\x074\x02\x02\u02CF" +
		"\u02D1\x05\x1A\x0E\x02\u02D0\u02CF\x03\x02\x02\x02\u02D0\u02D1\x03\x02" +
		"\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2\u02D3\x05\x10\t\x02\u02D3\u02D4" +
		"\x07\x04\x02\x02\u02D4\u02E6\x03\x02\x02\x02\u02D5\u02D6\x07\x03\x02\x02" +
		"\u02D6\u02D8\x075\x02\x02\u02D7\u02D9\x05\x1A\x0E\x02\u02D8\u02D7\x03" +
		"\x02\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA" +
		"\u02DB\x05\x12\n\x02\u02DB\u02DC\x07\x04\x02\x02\u02DC\u02E6\x03\x02\x02" +
		"\x02\u02DD\u02DE\x07\x03\x02\x02\u02DE\u02E0\x073\x02\x02\u02DF\u02E1" +
		"\x05\x1A\x0E\x02\u02E0\u02DF\x03\x02\x02\x02\u02E0\u02E1\x03\x02\x02\x02" +
		"\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E3\x05\n\x06\x02\u02E3\u02E4\x07" +
		"\x04\x02\x02\u02E4\u02E6\x03\x02\x02\x02\u02E5\u02BD\x03\x02\x02\x02\u02E5" +
		"\u02C5\x03\x02\x02\x02\u02E5\u02CD\x03\x02\x02\x02\u02E5\u02D5\x03\x02" +
		"\x02\x02\u02E5\u02DD\x03\x02\x02\x02\u02E6a\x03\x02\x02\x02\u02E7\u02E8" +
		"\x07\x03\x02\x02\u02E8\u02E9\x079\x02\x02\u02E9\u02EA\x05\x04\x03\x02" +
		"\u02EA\u02EB\x05\x04\x03\x02\u02EB\u02EC\x05`1\x02\u02EC\u02ED\x07\x04" +
		"\x02\x02\u02EDc\x03\x02\x02\x02\u02EE\u02EF\x07\x03\x02\x02\u02EF\u02F0" +
		"\x079\x02\x02\u02F0\u02F1\x05\x04\x03\x02\u02F1\u02F2\x05\x04\x03\x02" +
		"\u02F2\u02F3\x07\x04\x02\x02\u02F3e\x03\x02\x02\x02\u02F4\u02F5\x07\x03" +
		"\x02\x02\u02F5\u02F6\x07.\x02\x02\u02F6\u02F7\x05\x18\r\x02\u02F7\u02F8" +
		"\x07\x04\x02\x02\u02F8\u0309\x03\x02\x02\x02\u02F9\u02FA\x07\x03\x02\x02" +
		"\u02FA\u02FB\x074\x02\x02\u02FB\u02FC\x05\x18\r\x02\u02FC\u02FD\x07\x04" +
		"\x02\x02\u02FD\u0309\x03\x02\x02\x02\u02FE\u02FF\x07\x03\x02\x02\u02FF" +
		"\u0300\x075\x02\x02\u0300\u0301\x05\x18\r\x02\u0301\u0302\x07\x04\x02" +
		"\x02\u0302\u0309\x03\x02\x02\x02\u0303\u0304\x07\x03\x02\x02\u0304\u0305" +
		"\x073\x02\x02\u0305\u0306\x05\x18\r\x02\u0306\u0307\x07\x04\x02\x02\u0307" +
		"\u0309\x03\x02\x02\x02\u0308\u02F4\x03\x02\x02\x02\u0308\u02F9\x03\x02" +
		"\x02\x02\u0308\u02FE\x03\x02\x02\x02\u0308\u0303\x03\x02\x02\x02\u0309" +
		"g\x03\x02\x02\x02\u030A\u030B\x07\x03\x02\x02\u030B\u030C\x07:\x02\x02" +
		"\u030C\u030D\x05\x04\x03\x02\u030D\u030E\x05f4\x02\u030E\u030F\x07\x04" +
		"\x02\x02\u030Fi\x03\x02\x02\x02\u0310\u0311\x07\x03\x02\x02\u0311\u0312" +
		"\x07:\x02\x02\u0312\u0313\x05\x04\x03\x02\u0313\u0314\x07\x04\x02\x02" +
		"\u0314k\x03\x02\x02\x02\u0315\u0316\x05\f\x07\x02\u0316m\x03\x02\x02\x02" +
		"\u0317\u0318\x07\x03\x02\x02\u0318\u031A\x07-\x02\x02\u0319\u031B\x05" +
		"\x1A\x0E\x02\u031A\u0319\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B" +
		"\u031C\x03\x02\x02\x02\u031C\u031D\x05l7\x02\u031D\u031E\x07\x04\x02\x02" +
		"\u031Eo\x03\x02\x02\x02\u031F\u0320\x07\x03\x02\x02\u0320\u0321\x07/\x02" +
		"\x02\u0321\u0322\x05\x18\r\x02\u0322\u0323\x07\x04\x02\x02\u0323q\x03" +
		"\x02\x02\x02\u0324\u032F\x05n8\x02\u0325\u032F\x05\\/\x02\u0326\u032F" +
		"\x05R*\x02\u0327\u032F\x05X-\x02\u0328\u032F\x05@!\x02\u0329\u032F\x05" +
		"P)\x02\u032A\u032F\x05V,\x02\u032B\u032F\x05p9\x02\u032C\u032F\x05b2\x02" +
		"\u032D\u032F\x05h5\x02\u032E\u0324\x03\x02\x02\x02\u032E\u0325\x03\x02" +
		"\x02\x02\u032E\u0326\x03\x02\x02\x02\u032E\u0327\x03\x02\x02\x02\u032E" +
		"\u0328\x03\x02\x02\x02\u032E\u0329\x03\x02\x02\x02\u032E\u032A\x03\x02" +
		"\x02\x02\u032E\u032B\x03\x02\x02\x02\u032E\u032C\x03\x02\x02\x02\u032E" +
		"\u032D\x03\x02\x02\x02\u032Fs\x03\x02\x02\x02\u0330\u0331\x07\x03\x02" +
		"\x02\u0331\u0333\x07;\x02\x02\u0332\u0334\x07L\x02\x02\u0333\u0332\x03" +
		"\x02\x02\x02\u0333\u0334\x03\x02\x02\x02\u0334\u0338\x03\x02\x02\x02\u0335" +
		"\u0337\x05r:\x02\u0336\u0335\x03\x02\x02\x02\u0337\u033A\x03\x02\x02\x02" +
		"\u0338\u0336\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\u033B\x03" +
		"\x02\x02\x02\u033A\u0338\x03\x02\x02\x02\u033B\u033C\x07\x04\x02\x02\u033C" +
		"u\x03\x02\x02\x02\u033D\u034C\x05t;\x02\u033E\u033F\x07\x03\x02\x02\u033F" +
		"\u0341\x07;\x02\x02\u0340\u0342\x07L\x02\x02\u0341\u0340\x03\x02\x02\x02" +
		"\u0341\u0342\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343\u0347\t" +
		"\x06\x02\x02\u0344\u0346\x07\b\x02\x02\u0345\u0344\x03\x02\x02\x02\u0346" +
		"\u0349\x03\x02\x02\x02\u0347\u0345\x03\x02\x02\x02\u0347\u0348\x03\x02" +
		"\x02\x02\u0348\u034A\x03\x02\x02\x02\u0349\u0347\x03\x02\x02\x02\u034A" +
		"\u034C\x07\x04\x02\x02\u034B\u033D\x03\x02\x02\x02\u034B\u033E\x03\x02" +
		"\x02\x02\u034Cw\x03\x02\x02\x02\u034D\u034E\x07\x03\x02\x02\u034E\u0350" +
		"\x07@\x02\x02\u034F\u0351\x07L\x02\x02\u0350\u034F\x03\x02\x02\x02\u0350" +
		"\u0351\x03\x02\x02\x02\u0351\u0352\x03\x02\x02\x02\u0352\u0353\x05\x04" +
		"\x03\x02\u0353\u0354\x05\x82B\x02\u0354\u0355\x07\x04\x02\x02\u0355\u035F" +
		"\x03\x02\x02\x02\u0356\u0357\x07\x03\x02\x02\u0357\u0359\x07A\x02\x02" +
		"\u0358\u035A\x07L\x02\x02\u0359\u0358\x03\x02\x02\x02\u0359\u035A\x03" +
		"\x02\x02\x02\u035A\u035B\x03\x02\x02\x02\u035B\u035C\x05\x04\x03\x02\u035C" +
		"\u035D\x07\x04\x02\x02\u035D\u035F\x03\x02\x02\x02\u035E\u034D\x03\x02" +
		"\x02\x02\u035E\u0356\x03\x02\x02\x02\u035Fy\x03\x02\x02\x02\u0360\u0361" +
		"\x07\x03\x02\x02\u0361\u0362\x07B\x02\x02\u0362\u0363\x05v<\x02\u0363" +
		"\u0364\x07\b\x02\x02\u0364\u0365\x07\x04\x02\x02\u0365\u0395\x03\x02\x02" +
		"\x02\u0366\u0367\x07\x03\x02\x02\u0367\u0368\x07C\x02\x02\u0368\u0369" +
		"\x05v<\x02\u0369\u036A\x07\b\x02\x02\u036A\u036B\x07\x04\x02\x02\u036B" +
		"\u0395\x03\x02\x02\x02\u036C\u036D\x07\x03\x02\x02\u036D\u036E\x07D\x02" +
		"\x02\u036E\u036F\x05v<\x02\u036F\u0370\x07\b\x02\x02\u0370\u0371\x07\x04" +
		"\x02\x02\u0371\u0395\x03\x02\x02\x02\u0372\u0373\x07\x03\x02\x02\u0373" +
		"\u0374\x07H\x02\x02\u0374\u0375\x05v<\x02\u0375\u0376\x07\b\x02\x02\u0376" +
		"\u0377\x07\x04\x02\x02\u0377\u0395\x03\x02\x02\x02\u0378\u0379\x07\x03" +
		"\x02\x02\u0379\u037A\x07E\x02\x02\u037A\u037B\x05x=\x02\u037B\u037C\x05" +
		"\x82B\x02\u037C\u037D\x07\x04\x02\x02\u037D\u0395\x03\x02\x02\x02\u037E" +
		"\u037F\x07\x03\x02\x02\u037F\u0380\x07F\x02\x02\u0380\u0381\x05x=\x02" +
		"\u0381\u0382\x07\x04\x02\x02\u0382\u0395\x03\x02\x02\x02\u0383\u0384\x07" +
		"\x03\x02\x02\u0384\u0385\x07G\x02\x02\u0385\u0386\x05x=\x02\u0386\u0387" +
		"\x07\x04\x02\x02\u0387\u0395\x03\x02\x02\x02\u0388\u0389\x07\x03\x02\x02" +
		"\u0389\u038A\x07H\x02\x02\u038A\u038B\x05x=\x02\u038B\u038C\x07\b\x02" +
		"\x02\u038C\u038D\x07\x04\x02\x02\u038D\u0395\x03\x02\x02\x02\u038E\u038F" +
		"\x07\x03\x02\x02\u038F\u0390\x07I\x02\x02\u0390\u0391\x05x=\x02\u0391" +
		"\u0392\x07\b\x02\x02\u0392\u0393\x07\x04\x02\x02\u0393\u0395\x03\x02\x02" +
		"\x02\u0394\u0360\x03\x02\x02\x02\u0394\u0366\x03\x02\x02\x02\u0394\u036C" +
		"\x03\x02\x02\x02\u0394\u0372\x03\x02\x02\x02\u0394\u0378\x03\x02\x02\x02" +
		"\u0394\u037E\x03\x02\x02\x02\u0394\u0383\x03\x02\x02\x02\u0394\u0388\x03" +
		"\x02\x02\x02\u0394\u038E\x03\x02\x02\x02\u0395{\x03\x02\x02\x02\u0396" +
		"\u03A3\x05x=\x02\u0397\u03A3\x05z>\x02\u0398\u03A3\x05v<\x02\u0399\u039A" +
		"\x07\x03\x02\x02\u039A\u039B\x07?\x02\x02\u039B\u039D\x05\x04\x03\x02" +
		"\u039C\u039E\x07L\x02\x02\u039D\u039C\x03\x02\x02\x02\u039D\u039E\x03" +
		"\x02\x02\x02\u039E\u039F\x03\x02\x02\x02\u039F\u03A0\x07\x04\x02\x02\u03A0" +
		"\u03A3\x03\x02\x02\x02\u03A1\u03A3\x05~@\x02\u03A2\u0396\x03\x02\x02\x02" +
		"\u03A2\u0397\x03\x02\x02\x02\u03A2\u0398\x03\x02\x02\x02\u03A2\u0399\x03" +
		"\x02\x02\x02\u03A2\u03A1\x03\x02\x02\x02\u03A3}\x03\x02\x02\x02\u03A4" +
		"\u03A5\x07\x03\x02\x02\u03A5\u03A7\x07>\x02\x02\u03A6\u03A8\x07L\x02\x02" +
		"\u03A7\u03A6\x03\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8\u03AC\x03" +
		"\x02\x02\x02\u03A9\u03AB\x05|?\x02\u03AA\u03A9\x03\x02\x02\x02\u03AB\u03AE" +
		"\x03\x02\x02\x02\u03AC\u03AA\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02" +
		"\u03AD\u03AF\x03\x02\x02\x02\u03AE\u03AC\x03\x02\x02\x02\u03AF\u03C5\x07" +
		"\x04\x02\x02\u03B0\u03B1\x07\x03\x02\x02\u03B1\u03B3\x07J\x02\x02\u03B2" +
		"\u03B4\x07L\x02\x02\u03B3\u03B2\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02" +
		"\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5\u03B6\x07\b\x02\x02\u03B6\u03C5" +
		"\x07\x04\x02\x02\u03B7\u03B8\x07\x03\x02\x02\u03B8\u03BA\x07K\x02\x02" +
		"\u03B9\u03BB\x07L\x02\x02\u03BA\u03B9\x03\x02\x02\x02\u03BA\u03BB\x03" +
		"\x02\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BC\u03BD\x07\b\x02\x02\u03BD" +
		"\u03C5\x07\x04\x02\x02\u03BE\u03BF\x07\x03\x02\x02\u03BF\u03C1\x07K\x02" +
		"\x02\u03C0\u03C2\x07L\x02\x02\u03C1\u03C0\x03\x02\x02\x02\u03C1\u03C2" +
		"\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C5\x07\x04\x02\x02" +
		"\u03C4\u03A4\x03\x02\x02\x02\u03C4\u03B0\x03\x02\x02\x02\u03C4\u03B7\x03" +
		"\x02\x02\x02\u03C4\u03BE\x03\x02\x02\x02\u03C5\x7F\x03\x02\x02\x02\u03C6" +
		"\u03C7\x07\x03\x02\x02\u03C7\u03C8\x07\n\x02\x02\u03C8\u03C9\x05\x16\f" +
		"\x02\u03C9\u03CA\x07\x04\x02\x02\u03CA\x81\x03\x02\x02\x02\u03CB\u03CD" +
		"\x05\x80A\x02\u03CC\u03CB\x03\x02\x02\x02\u03CD\u03D0\x03\x02\x02\x02" +
		"\u03CE\u03CC\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF\x83\x03" +
		"\x02\x02\x02\u03D0\u03CE\x03\x02\x02\x02\u03D1\u03D3\x05|?\x02\u03D2\u03D1" +
		"\x03\x02\x02\x02\u03D3\u03D6\x03\x02\x02\x02\u03D4\u03D2\x03\x02\x02\x02" +
		"\u03D4\u03D5\x03\x02\x02\x02\u03D5\u03D7\x03\x02\x02\x02\u03D6\u03D4\x03" +
		"\x02\x02\x02\u03D7\u03E0\x07\x02\x02\x03\u03D8\u03DA\x05r:\x02\u03D9\u03D8" +
		"\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03D9\x03\x02\x02\x02" +
		"\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DE\x07" +
		"\x02\x02\x03\u03DE\u03E0\x03\x02\x02\x02\u03DF\u03D4\x03\x02\x02\x02\u03DF" +
		"\u03D9\x03\x02\x02\x02\u03E0\x85\x03\x02\x02\x02\u03E1\u03E2\x05t;\x02" +
		"\u03E2\u03E3\x07\x02\x02\x03\u03E3\u03EC\x03\x02\x02\x02\u03E4\u03E6\x05" +
		"r:\x02\u03E5\u03E4\x03\x02\x02\x02\u03E6\u03E9\x03\x02\x02\x02\u03E7\u03E5" +
		"\x03\x02\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8\u03EA\x03\x02\x02\x02" +
		"\u03E9\u03E7\x03\x02\x02\x02\u03EA\u03EC\x07\x02\x02\x03\u03EB\u03E1\x03" +
		"\x02\x02\x02\u03EB\u03E7\x03\x02\x02\x02\u03EC\x87\x03\x02\x02\x02o\x96" +
		"\xA2\xA9\xB0\xB5\xBA\xC0\xD1\xDF\xF0\xF3\xF7\xFA\u0105\u0109\u0112\u0118" +
		"\u0120\u0126\u012B\u0134\u013A\u0144\u014A\u0151\u0156\u015A\u015F\u0162" +
		"\u0166\u0168\u0170\u017C\u0183\u0188\u018D\u0190\u0193\u019C\u01A2\u01AC" +
		"\u01B2\u01B8\u01C1\u01CD\u01CF\u01D4\u01D8\u01DF\u01E5\u01EA\u01F1\u01F8" +
		"\u0202\u020B\u0211\u0219\u0223\u0225\u022F\u0235\u023F\u0249\u024B\u0256" +
		"\u025B\u0261\u0269\u027B\u0280\u0285\u028B\u0293\u02A4\u02A8\u02AD\u02BB" +
		"\u02C0\u02C8\u02D0\u02D8\u02E0\u02E5\u0308\u031A\u032E\u0333\u0338\u0341" +
		"\u0347\u034B\u0350\u0359\u035E\u0394\u039D\u03A2\u03A7\u03AC\u03B3\u03BA" +
		"\u03C1\u03C4\u03CE\u03D4\u03DB\u03DF\u03E7\u03EB";
	public static readonly _serializedATN: string = Utils.join(
		[
			WatParser._serializedATNSegment0,
			WatParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!WatParser.__ATN) {
			WatParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WatParser._serializedATN));
		}

		return WatParser.__ATN;
	}

}

export class ValueContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(WatParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(WatParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_value; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(WatParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_name; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_typeContext extends ParserRuleContext {
	public VALUE_TYPE(): TerminalNode { return this.getToken(WatParser.VALUE_TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_value_type; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterValue_type) {
			listener.enterValue_type(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitValue_type) {
			listener.exitValue_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitValue_type) {
			return visitor.visitValue_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Elem_typeContext extends ParserRuleContext {
	public FUNCREF(): TerminalNode { return this.getToken(WatParser.FUNCREF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_elem_type; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterElem_type) {
			listener.enterElem_type(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitElem_type) {
			listener.exitElem_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitElem_type) {
			return visitor.visitElem_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_typeContext extends ParserRuleContext {
	public value_type(): Value_typeContext {
		return this.getRuleContext(0, Value_typeContext);
	}
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.LPAR, 0); }
	public MUT(): TerminalNode | undefined { return this.tryGetToken(WatParser.MUT, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_global_type; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterGlobal_type) {
			listener.enterGlobal_type(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitGlobal_type) {
			listener.exitGlobal_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitGlobal_type) {
			return visitor.visitGlobal_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Def_typeContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public FUNC(): TerminalNode { return this.getToken(WatParser.FUNC, 0); }
	public func_type(): Func_typeContext {
		return this.getRuleContext(0, Func_typeContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_def_type; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterDef_type) {
			listener.enterDef_type(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitDef_type) {
			listener.exitDef_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitDef_type) {
			return visitor.visitDef_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_typeContext extends ParserRuleContext {
	public LPAR(): TerminalNode[];
	public LPAR(i: number): TerminalNode;
	public LPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.LPAR);
		} else {
			return this.getToken(WatParser.LPAR, i);
		}
	}
	public RPAR(): TerminalNode[];
	public RPAR(i: number): TerminalNode;
	public RPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RPAR);
		} else {
			return this.getToken(WatParser.RPAR, i);
		}
	}
	public RESULT(): TerminalNode[];
	public RESULT(i: number): TerminalNode;
	public RESULT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RESULT);
		} else {
			return this.getToken(WatParser.RESULT, i);
		}
	}
	public PARAM(): TerminalNode[];
	public PARAM(i: number): TerminalNode;
	public PARAM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.PARAM);
		} else {
			return this.getToken(WatParser.PARAM, i);
		}
	}
	public bind_var(): Bind_varContext[];
	public bind_var(i: number): Bind_varContext;
	public bind_var(i?: number): Bind_varContext | Bind_varContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bind_varContext);
		} else {
			return this.getRuleContext(i, Bind_varContext);
		}
	}
	public value_type(): Value_typeContext[];
	public value_type(i: number): Value_typeContext;
	public value_type(i?: number): Value_typeContext | Value_typeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_typeContext);
		} else {
			return this.getRuleContext(i, Value_typeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_func_type; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterFunc_type) {
			listener.enterFunc_type(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitFunc_type) {
			listener.exitFunc_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitFunc_type) {
			return visitor.visitFunc_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Table_typeContext extends ParserRuleContext {
	public NAT(): TerminalNode[];
	public NAT(i: number): TerminalNode;
	public NAT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.NAT);
		} else {
			return this.getToken(WatParser.NAT, i);
		}
	}
	public elem_type(): Elem_typeContext {
		return this.getRuleContext(0, Elem_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_table_type; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterTable_type) {
			listener.enterTable_type(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitTable_type) {
			listener.exitTable_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitTable_type) {
			return visitor.visitTable_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Memory_typeContext extends ParserRuleContext {
	public NAT(): TerminalNode[];
	public NAT(i: number): TerminalNode;
	public NAT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.NAT);
		} else {
			return this.getToken(WatParser.NAT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_memory_type; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterMemory_type) {
			listener.enterMemory_type(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitMemory_type) {
			listener.exitMemory_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitMemory_type) {
			return visitor.visitMemory_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_useContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public TYPE(): TerminalNode { return this.getToken(WatParser.TYPE, 0); }
	public var(): VarContext {
		return this.getRuleContext(0, VarContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_type_use; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterType_use) {
			listener.enterType_use(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitType_use) {
			listener.exitType_use(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitType_use) {
			return visitor.visitType_use(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public NAT(): TerminalNode | undefined { return this.tryGetToken(WatParser.NAT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(WatParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(WatParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_literal; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarContext extends ParserRuleContext {
	public NAT(): TerminalNode | undefined { return this.tryGetToken(WatParser.NAT, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_var; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterVar) {
			listener.enterVar(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitVar) {
			listener.exitVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bind_varContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(WatParser.VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_bind_var; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterBind_var) {
			listener.enterBind_var(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitBind_var) {
			listener.exitBind_var(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitBind_var) {
			return visitor.visitBind_var(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstrContext extends ParserRuleContext {
	public plain_instr(): Plain_instrContext | undefined {
		return this.tryGetRuleContext(0, Plain_instrContext);
	}
	public call_instr_instr(): Call_instr_instrContext | undefined {
		return this.tryGetRuleContext(0, Call_instr_instrContext);
	}
	public block_instr(): Block_instrContext | undefined {
		return this.tryGetRuleContext(0, Block_instrContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_instr; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterInstr) {
			listener.enterInstr(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitInstr) {
			listener.exitInstr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitInstr) {
			return visitor.visitInstr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Plain_instrContext extends ParserRuleContext {
	public UNREACHABLE(): TerminalNode | undefined { return this.tryGetToken(WatParser.UNREACHABLE, 0); }
	public NOP(): TerminalNode | undefined { return this.tryGetToken(WatParser.NOP, 0); }
	public DROP(): TerminalNode | undefined { return this.tryGetToken(WatParser.DROP, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(WatParser.SELECT, 0); }
	public BR(): TerminalNode | undefined { return this.tryGetToken(WatParser.BR, 0); }
	public var(): VarContext[];
	public var(i: number): VarContext;
	public var(i?: number): VarContext | VarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarContext);
		} else {
			return this.getRuleContext(i, VarContext);
		}
	}
	public BR_IF(): TerminalNode | undefined { return this.tryGetToken(WatParser.BR_IF, 0); }
	public BR_TABLE(): TerminalNode | undefined { return this.tryGetToken(WatParser.BR_TABLE, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(WatParser.RETURN, 0); }
	public CALL(): TerminalNode | undefined { return this.tryGetToken(WatParser.CALL, 0); }
	public LOCAL_GET(): TerminalNode | undefined { return this.tryGetToken(WatParser.LOCAL_GET, 0); }
	public LOCAL_SET(): TerminalNode | undefined { return this.tryGetToken(WatParser.LOCAL_SET, 0); }
	public LOCAL_TEE(): TerminalNode | undefined { return this.tryGetToken(WatParser.LOCAL_TEE, 0); }
	public GLOBAL_GET(): TerminalNode | undefined { return this.tryGetToken(WatParser.GLOBAL_GET, 0); }
	public GLOBAL_SET(): TerminalNode | undefined { return this.tryGetToken(WatParser.GLOBAL_SET, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(WatParser.LOAD, 0); }
	public OFFSET_EQ_NAT(): TerminalNode | undefined { return this.tryGetToken(WatParser.OFFSET_EQ_NAT, 0); }
	public ALIGN_EQ_NAT(): TerminalNode | undefined { return this.tryGetToken(WatParser.ALIGN_EQ_NAT, 0); }
	public STORE(): TerminalNode | undefined { return this.tryGetToken(WatParser.STORE, 0); }
	public MEMORY_SIZE(): TerminalNode | undefined { return this.tryGetToken(WatParser.MEMORY_SIZE, 0); }
	public MEMORY_GROW(): TerminalNode | undefined { return this.tryGetToken(WatParser.MEMORY_GROW, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(WatParser.CONST, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public TEST(): TerminalNode | undefined { return this.tryGetToken(WatParser.TEST, 0); }
	public COMPARE(): TerminalNode | undefined { return this.tryGetToken(WatParser.COMPARE, 0); }
	public UNARY(): TerminalNode | undefined { return this.tryGetToken(WatParser.UNARY, 0); }
	public BINARY(): TerminalNode | undefined { return this.tryGetToken(WatParser.BINARY, 0); }
	public CONVERT(): TerminalNode | undefined { return this.tryGetToken(WatParser.CONVERT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_plain_instr; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterPlain_instr) {
			listener.enterPlain_instr(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitPlain_instr) {
			listener.exitPlain_instr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitPlain_instr) {
			return visitor.visitPlain_instr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Call_instrContext extends ParserRuleContext {
	public CALL_INDIRECT(): TerminalNode { return this.getToken(WatParser.CALL_INDIRECT, 0); }
	public call_instr_params(): Call_instr_paramsContext {
		return this.getRuleContext(0, Call_instr_paramsContext);
	}
	public type_use(): Type_useContext | undefined {
		return this.tryGetRuleContext(0, Type_useContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_call_instr; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterCall_instr) {
			listener.enterCall_instr(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitCall_instr) {
			listener.exitCall_instr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitCall_instr) {
			return visitor.visitCall_instr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Call_instr_paramsContext extends ParserRuleContext {
	public LPAR(): TerminalNode[];
	public LPAR(i: number): TerminalNode;
	public LPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.LPAR);
		} else {
			return this.getToken(WatParser.LPAR, i);
		}
	}
	public PARAM(): TerminalNode[];
	public PARAM(i: number): TerminalNode;
	public PARAM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.PARAM);
		} else {
			return this.getToken(WatParser.PARAM, i);
		}
	}
	public RPAR(): TerminalNode[];
	public RPAR(i: number): TerminalNode;
	public RPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RPAR);
		} else {
			return this.getToken(WatParser.RPAR, i);
		}
	}
	public RESULT(): TerminalNode[];
	public RESULT(i: number): TerminalNode;
	public RESULT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RESULT);
		} else {
			return this.getToken(WatParser.RESULT, i);
		}
	}
	public value_type(): Value_typeContext[];
	public value_type(i: number): Value_typeContext;
	public value_type(i?: number): Value_typeContext | Value_typeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_typeContext);
		} else {
			return this.getRuleContext(i, Value_typeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_call_instr_params; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterCall_instr_params) {
			listener.enterCall_instr_params(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitCall_instr_params) {
			listener.exitCall_instr_params(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitCall_instr_params) {
			return visitor.visitCall_instr_params(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Call_instr_instrContext extends ParserRuleContext {
	public CALL_INDIRECT(): TerminalNode { return this.getToken(WatParser.CALL_INDIRECT, 0); }
	public call_instr_params_instr(): Call_instr_params_instrContext {
		return this.getRuleContext(0, Call_instr_params_instrContext);
	}
	public type_use(): Type_useContext | undefined {
		return this.tryGetRuleContext(0, Type_useContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_call_instr_instr; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterCall_instr_instr) {
			listener.enterCall_instr_instr(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitCall_instr_instr) {
			listener.exitCall_instr_instr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitCall_instr_instr) {
			return visitor.visitCall_instr_instr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Call_instr_params_instrContext extends ParserRuleContext {
	public call_instr_results_instr(): Call_instr_results_instrContext {
		return this.getRuleContext(0, Call_instr_results_instrContext);
	}
	public LPAR(): TerminalNode[];
	public LPAR(i: number): TerminalNode;
	public LPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.LPAR);
		} else {
			return this.getToken(WatParser.LPAR, i);
		}
	}
	public PARAM(): TerminalNode[];
	public PARAM(i: number): TerminalNode;
	public PARAM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.PARAM);
		} else {
			return this.getToken(WatParser.PARAM, i);
		}
	}
	public RPAR(): TerminalNode[];
	public RPAR(i: number): TerminalNode;
	public RPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RPAR);
		} else {
			return this.getToken(WatParser.RPAR, i);
		}
	}
	public value_type(): Value_typeContext[];
	public value_type(i: number): Value_typeContext;
	public value_type(i?: number): Value_typeContext | Value_typeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_typeContext);
		} else {
			return this.getRuleContext(i, Value_typeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_call_instr_params_instr; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterCall_instr_params_instr) {
			listener.enterCall_instr_params_instr(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitCall_instr_params_instr) {
			listener.exitCall_instr_params_instr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitCall_instr_params_instr) {
			return visitor.visitCall_instr_params_instr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Call_instr_results_instrContext extends ParserRuleContext {
	public instr(): InstrContext {
		return this.getRuleContext(0, InstrContext);
	}
	public LPAR(): TerminalNode[];
	public LPAR(i: number): TerminalNode;
	public LPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.LPAR);
		} else {
			return this.getToken(WatParser.LPAR, i);
		}
	}
	public RESULT(): TerminalNode[];
	public RESULT(i: number): TerminalNode;
	public RESULT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RESULT);
		} else {
			return this.getToken(WatParser.RESULT, i);
		}
	}
	public RPAR(): TerminalNode[];
	public RPAR(i: number): TerminalNode;
	public RPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RPAR);
		} else {
			return this.getToken(WatParser.RPAR, i);
		}
	}
	public value_type(): Value_typeContext[];
	public value_type(i: number): Value_typeContext;
	public value_type(i?: number): Value_typeContext | Value_typeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_typeContext);
		} else {
			return this.getRuleContext(i, Value_typeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_call_instr_results_instr; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterCall_instr_results_instr) {
			listener.enterCall_instr_results_instr(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitCall_instr_results_instr) {
			listener.exitCall_instr_results_instr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitCall_instr_results_instr) {
			return visitor.visitCall_instr_results_instr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Block_instrContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public END(): TerminalNode { return this.getToken(WatParser.END, 0); }
	public BLOCK(): TerminalNode | undefined { return this.tryGetToken(WatParser.BLOCK, 0); }
	public LOOP(): TerminalNode | undefined { return this.tryGetToken(WatParser.LOOP, 0); }
	public bind_var(): Bind_varContext[];
	public bind_var(i: number): Bind_varContext;
	public bind_var(i?: number): Bind_varContext | Bind_varContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bind_varContext);
		} else {
			return this.getRuleContext(i, Bind_varContext);
		}
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(WatParser.IF, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(WatParser.ELSE, 0); }
	public instr_list(): Instr_listContext | undefined {
		return this.tryGetRuleContext(0, Instr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_block_instr; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterBlock_instr) {
			listener.enterBlock_instr(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitBlock_instr) {
			listener.exitBlock_instr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitBlock_instr) {
			return visitor.visitBlock_instr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Block_typeContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public RESULT(): TerminalNode { return this.getToken(WatParser.RESULT, 0); }
	public value_type(): Value_typeContext {
		return this.getRuleContext(0, Value_typeContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_block_type; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterBlock_type) {
			listener.enterBlock_type(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitBlock_type) {
			listener.exitBlock_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitBlock_type) {
			return visitor.visitBlock_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public instr_list(): Instr_listContext {
		return this.getRuleContext(0, Instr_listContext);
	}
	public block_type(): Block_typeContext | undefined {
		return this.tryGetRuleContext(0, Block_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_block; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public expr1(): Expr1Context {
		return this.getRuleContext(0, Expr1Context);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_expr; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr1Context extends ParserRuleContext {
	public plain_instr(): Plain_instrContext | undefined {
		return this.tryGetRuleContext(0, Plain_instrContext);
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
	public CALL_INDIRECT(): TerminalNode | undefined { return this.tryGetToken(WatParser.CALL_INDIRECT, 0); }
	public call_expr_type(): Call_expr_typeContext | undefined {
		return this.tryGetRuleContext(0, Call_expr_typeContext);
	}
	public BLOCK(): TerminalNode | undefined { return this.tryGetToken(WatParser.BLOCK, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public bind_var(): Bind_varContext | undefined {
		return this.tryGetRuleContext(0, Bind_varContext);
	}
	public LOOP(): TerminalNode | undefined { return this.tryGetToken(WatParser.LOOP, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(WatParser.IF, 0); }
	public if_block(): If_blockContext | undefined {
		return this.tryGetRuleContext(0, If_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_expr1; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterExpr1) {
			listener.enterExpr1(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitExpr1) {
			listener.exitExpr1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitExpr1) {
			return visitor.visitExpr1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Call_expr_typeContext extends ParserRuleContext {
	public call_expr_params(): Call_expr_paramsContext {
		return this.getRuleContext(0, Call_expr_paramsContext);
	}
	public type_use(): Type_useContext | undefined {
		return this.tryGetRuleContext(0, Type_useContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_call_expr_type; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterCall_expr_type) {
			listener.enterCall_expr_type(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitCall_expr_type) {
			listener.exitCall_expr_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitCall_expr_type) {
			return visitor.visitCall_expr_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Call_expr_paramsContext extends ParserRuleContext {
	public call_expr_results(): Call_expr_resultsContext {
		return this.getRuleContext(0, Call_expr_resultsContext);
	}
	public LPAR(): TerminalNode[];
	public LPAR(i: number): TerminalNode;
	public LPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.LPAR);
		} else {
			return this.getToken(WatParser.LPAR, i);
		}
	}
	public PARAM(): TerminalNode[];
	public PARAM(i: number): TerminalNode;
	public PARAM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.PARAM);
		} else {
			return this.getToken(WatParser.PARAM, i);
		}
	}
	public RPAR(): TerminalNode[];
	public RPAR(i: number): TerminalNode;
	public RPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RPAR);
		} else {
			return this.getToken(WatParser.RPAR, i);
		}
	}
	public value_type(): Value_typeContext[];
	public value_type(i: number): Value_typeContext;
	public value_type(i?: number): Value_typeContext | Value_typeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_typeContext);
		} else {
			return this.getRuleContext(i, Value_typeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_call_expr_params; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterCall_expr_params) {
			listener.enterCall_expr_params(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitCall_expr_params) {
			listener.exitCall_expr_params(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitCall_expr_params) {
			return visitor.visitCall_expr_params(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Call_expr_resultsContext extends ParserRuleContext {
	public LPAR(): TerminalNode[];
	public LPAR(i: number): TerminalNode;
	public LPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.LPAR);
		} else {
			return this.getToken(WatParser.LPAR, i);
		}
	}
	public RESULT(): TerminalNode[];
	public RESULT(i: number): TerminalNode;
	public RESULT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RESULT);
		} else {
			return this.getToken(WatParser.RESULT, i);
		}
	}
	public RPAR(): TerminalNode[];
	public RPAR(i: number): TerminalNode;
	public RPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RPAR);
		} else {
			return this.getToken(WatParser.RPAR, i);
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
	public value_type(): Value_typeContext[];
	public value_type(i: number): Value_typeContext;
	public value_type(i?: number): Value_typeContext | Value_typeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_typeContext);
		} else {
			return this.getRuleContext(i, Value_typeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_call_expr_results; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterCall_expr_results) {
			listener.enterCall_expr_results(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitCall_expr_results) {
			listener.exitCall_expr_results(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitCall_expr_results) {
			return visitor.visitCall_expr_results(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_blockContext extends ParserRuleContext {
	public block_type(): Block_typeContext | undefined {
		return this.tryGetRuleContext(0, Block_typeContext);
	}
	public if_block(): If_blockContext | undefined {
		return this.tryGetRuleContext(0, If_blockContext);
	}
	public LPAR(): TerminalNode[];
	public LPAR(i: number): TerminalNode;
	public LPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.LPAR);
		} else {
			return this.getToken(WatParser.LPAR, i);
		}
	}
	public THEN(): TerminalNode | undefined { return this.tryGetToken(WatParser.THEN, 0); }
	public instr_list(): Instr_listContext[];
	public instr_list(i: number): Instr_listContext;
	public instr_list(i?: number): Instr_listContext | Instr_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Instr_listContext);
		} else {
			return this.getRuleContext(i, Instr_listContext);
		}
	}
	public RPAR(): TerminalNode[];
	public RPAR(i: number): TerminalNode;
	public RPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RPAR);
		} else {
			return this.getToken(WatParser.RPAR, i);
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
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(WatParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_if_block; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterIf_block) {
			listener.enterIf_block(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitIf_block) {
			listener.exitIf_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitIf_block) {
			return visitor.visitIf_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instr_listContext extends ParserRuleContext {
	public instr(): InstrContext[];
	public instr(i: number): InstrContext;
	public instr(i?: number): InstrContext | InstrContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstrContext);
		} else {
			return this.getRuleContext(i, InstrContext);
		}
	}
	public call_instr(): Call_instrContext | undefined {
		return this.tryGetRuleContext(0, Call_instrContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_instr_list; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterInstr_list) {
			listener.enterInstr_list(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitInstr_list) {
			listener.exitInstr_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitInstr_list) {
			return visitor.visitInstr_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Const_exprContext extends ParserRuleContext {
	public instr_list(): Instr_listContext {
		return this.getRuleContext(0, Instr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_const_expr; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterConst_expr) {
			listener.enterConst_expr(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitConst_expr) {
			listener.exitConst_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitConst_expr) {
			return visitor.visitConst_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public FUNC(): TerminalNode { return this.getToken(WatParser.FUNC, 0); }
	public func_fields(): Func_fieldsContext {
		return this.getRuleContext(0, Func_fieldsContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	public bind_var(): Bind_varContext | undefined {
		return this.tryGetRuleContext(0, Bind_varContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_func; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterFunc) {
			listener.enterFunc(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitFunc) {
			listener.exitFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitFunc) {
			return visitor.visitFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_fieldsContext extends ParserRuleContext {
	public func_fields_body(): Func_fields_bodyContext | undefined {
		return this.tryGetRuleContext(0, Func_fields_bodyContext);
	}
	public type_use(): Type_useContext | undefined {
		return this.tryGetRuleContext(0, Type_useContext);
	}
	public inline_import(): Inline_importContext | undefined {
		return this.tryGetRuleContext(0, Inline_importContext);
	}
	public func_fields_import(): Func_fields_importContext | undefined {
		return this.tryGetRuleContext(0, Func_fields_importContext);
	}
	public inline_export(): Inline_exportContext | undefined {
		return this.tryGetRuleContext(0, Inline_exportContext);
	}
	public func_fields(): Func_fieldsContext | undefined {
		return this.tryGetRuleContext(0, Func_fieldsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_func_fields; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterFunc_fields) {
			listener.enterFunc_fields(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitFunc_fields) {
			listener.exitFunc_fields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitFunc_fields) {
			return visitor.visitFunc_fields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_fields_importContext extends ParserRuleContext {
	public func_fields_import_result(): Func_fields_import_resultContext {
		return this.getRuleContext(0, Func_fields_import_resultContext);
	}
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.LPAR, 0); }
	public PARAM(): TerminalNode | undefined { return this.tryGetToken(WatParser.PARAM, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.RPAR, 0); }
	public bind_var(): Bind_varContext | undefined {
		return this.tryGetRuleContext(0, Bind_varContext);
	}
	public value_type(): Value_typeContext[];
	public value_type(i: number): Value_typeContext;
	public value_type(i?: number): Value_typeContext | Value_typeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_typeContext);
		} else {
			return this.getRuleContext(i, Value_typeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_func_fields_import; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterFunc_fields_import) {
			listener.enterFunc_fields_import(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitFunc_fields_import) {
			listener.exitFunc_fields_import(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitFunc_fields_import) {
			return visitor.visitFunc_fields_import(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_fields_import_resultContext extends ParserRuleContext {
	public LPAR(): TerminalNode[];
	public LPAR(i: number): TerminalNode;
	public LPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.LPAR);
		} else {
			return this.getToken(WatParser.LPAR, i);
		}
	}
	public RESULT(): TerminalNode[];
	public RESULT(i: number): TerminalNode;
	public RESULT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RESULT);
		} else {
			return this.getToken(WatParser.RESULT, i);
		}
	}
	public RPAR(): TerminalNode[];
	public RPAR(i: number): TerminalNode;
	public RPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RPAR);
		} else {
			return this.getToken(WatParser.RPAR, i);
		}
	}
	public value_type(): Value_typeContext[];
	public value_type(i: number): Value_typeContext;
	public value_type(i?: number): Value_typeContext | Value_typeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_typeContext);
		} else {
			return this.getRuleContext(i, Value_typeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_func_fields_import_result; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterFunc_fields_import_result) {
			listener.enterFunc_fields_import_result(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitFunc_fields_import_result) {
			listener.exitFunc_fields_import_result(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitFunc_fields_import_result) {
			return visitor.visitFunc_fields_import_result(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_fields_bodyContext extends ParserRuleContext {
	public func_result_body(): Func_result_bodyContext {
		return this.getRuleContext(0, Func_result_bodyContext);
	}
	public LPAR(): TerminalNode[];
	public LPAR(i: number): TerminalNode;
	public LPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.LPAR);
		} else {
			return this.getToken(WatParser.LPAR, i);
		}
	}
	public PARAM(): TerminalNode[];
	public PARAM(i: number): TerminalNode;
	public PARAM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.PARAM);
		} else {
			return this.getToken(WatParser.PARAM, i);
		}
	}
	public RPAR(): TerminalNode[];
	public RPAR(i: number): TerminalNode;
	public RPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RPAR);
		} else {
			return this.getToken(WatParser.RPAR, i);
		}
	}
	public bind_var(): Bind_varContext[];
	public bind_var(i: number): Bind_varContext;
	public bind_var(i?: number): Bind_varContext | Bind_varContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bind_varContext);
		} else {
			return this.getRuleContext(i, Bind_varContext);
		}
	}
	public value_type(): Value_typeContext[];
	public value_type(i: number): Value_typeContext;
	public value_type(i?: number): Value_typeContext | Value_typeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_typeContext);
		} else {
			return this.getRuleContext(i, Value_typeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_func_fields_body; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterFunc_fields_body) {
			listener.enterFunc_fields_body(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitFunc_fields_body) {
			listener.exitFunc_fields_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitFunc_fields_body) {
			return visitor.visitFunc_fields_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_result_bodyContext extends ParserRuleContext {
	public func_body(): Func_bodyContext {
		return this.getRuleContext(0, Func_bodyContext);
	}
	public LPAR(): TerminalNode[];
	public LPAR(i: number): TerminalNode;
	public LPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.LPAR);
		} else {
			return this.getToken(WatParser.LPAR, i);
		}
	}
	public RESULT(): TerminalNode[];
	public RESULT(i: number): TerminalNode;
	public RESULT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RESULT);
		} else {
			return this.getToken(WatParser.RESULT, i);
		}
	}
	public RPAR(): TerminalNode[];
	public RPAR(i: number): TerminalNode;
	public RPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RPAR);
		} else {
			return this.getToken(WatParser.RPAR, i);
		}
	}
	public value_type(): Value_typeContext[];
	public value_type(i: number): Value_typeContext;
	public value_type(i?: number): Value_typeContext | Value_typeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_typeContext);
		} else {
			return this.getRuleContext(i, Value_typeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_func_result_body; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterFunc_result_body) {
			listener.enterFunc_result_body(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitFunc_result_body) {
			listener.exitFunc_result_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitFunc_result_body) {
			return visitor.visitFunc_result_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_bodyContext extends ParserRuleContext {
	public instr_list(): Instr_listContext {
		return this.getRuleContext(0, Instr_listContext);
	}
	public LPAR(): TerminalNode[];
	public LPAR(i: number): TerminalNode;
	public LPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.LPAR);
		} else {
			return this.getToken(WatParser.LPAR, i);
		}
	}
	public LOCAL(): TerminalNode[];
	public LOCAL(i: number): TerminalNode;
	public LOCAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.LOCAL);
		} else {
			return this.getToken(WatParser.LOCAL, i);
		}
	}
	public RPAR(): TerminalNode[];
	public RPAR(i: number): TerminalNode;
	public RPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.RPAR);
		} else {
			return this.getToken(WatParser.RPAR, i);
		}
	}
	public bind_var(): Bind_varContext[];
	public bind_var(i: number): Bind_varContext;
	public bind_var(i?: number): Bind_varContext | Bind_varContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bind_varContext);
		} else {
			return this.getRuleContext(i, Bind_varContext);
		}
	}
	public value_type(): Value_typeContext[];
	public value_type(i: number): Value_typeContext;
	public value_type(i?: number): Value_typeContext | Value_typeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_typeContext);
		} else {
			return this.getRuleContext(i, Value_typeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_func_body; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterFunc_body) {
			listener.enterFunc_body(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitFunc_body) {
			listener.exitFunc_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitFunc_body) {
			return visitor.visitFunc_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OffsetContext extends ParserRuleContext {
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.LPAR, 0); }
	public OFFSET(): TerminalNode | undefined { return this.tryGetToken(WatParser.OFFSET, 0); }
	public const_expr(): Const_exprContext | undefined {
		return this.tryGetRuleContext(0, Const_exprContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.RPAR, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_offset; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterOffset) {
			listener.enterOffset(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitOffset) {
			listener.exitOffset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitOffset) {
			return visitor.visitOffset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElemContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public ELEM(): TerminalNode { return this.getToken(WatParser.ELEM, 0); }
	public offset(): OffsetContext {
		return this.getRuleContext(0, OffsetContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	public var(): VarContext[];
	public var(i: number): VarContext;
	public var(i?: number): VarContext | VarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarContext);
		} else {
			return this.getRuleContext(i, VarContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_elem; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterElem) {
			listener.enterElem(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitElem) {
			listener.exitElem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitElem) {
			return visitor.visitElem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public TABLE(): TerminalNode { return this.getToken(WatParser.TABLE, 0); }
	public table_fields(): Table_fieldsContext {
		return this.getRuleContext(0, Table_fieldsContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	public bind_var(): Bind_varContext | undefined {
		return this.tryGetRuleContext(0, Bind_varContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_table; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterTable) {
			listener.enterTable(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitTable) {
			listener.exitTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitTable) {
			return visitor.visitTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Table_fieldsContext extends ParserRuleContext {
	public table_type(): Table_typeContext | undefined {
		return this.tryGetRuleContext(0, Table_typeContext);
	}
	public inline_import(): Inline_importContext | undefined {
		return this.tryGetRuleContext(0, Inline_importContext);
	}
	public inline_export(): Inline_exportContext | undefined {
		return this.tryGetRuleContext(0, Inline_exportContext);
	}
	public table_fields(): Table_fieldsContext | undefined {
		return this.tryGetRuleContext(0, Table_fieldsContext);
	}
	public elem_type(): Elem_typeContext | undefined {
		return this.tryGetRuleContext(0, Elem_typeContext);
	}
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.LPAR, 0); }
	public ELEM(): TerminalNode | undefined { return this.tryGetToken(WatParser.ELEM, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.RPAR, 0); }
	public var(): VarContext[];
	public var(i: number): VarContext;
	public var(i?: number): VarContext | VarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarContext);
		} else {
			return this.getRuleContext(i, VarContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_table_fields; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterTable_fields) {
			listener.enterTable_fields(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitTable_fields) {
			listener.exitTable_fields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitTable_fields) {
			return visitor.visitTable_fields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public DATA(): TerminalNode { return this.getToken(WatParser.DATA, 0); }
	public offset(): OffsetContext {
		return this.getRuleContext(0, OffsetContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	public var(): VarContext | undefined {
		return this.tryGetRuleContext(0, VarContext);
	}
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.STRING);
		} else {
			return this.getToken(WatParser.STRING, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_data; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterData) {
			listener.enterData(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitData) {
			listener.exitData(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitData) {
			return visitor.visitData(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemoryContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public MEMORY(): TerminalNode { return this.getToken(WatParser.MEMORY, 0); }
	public memory_fields(): Memory_fieldsContext {
		return this.getRuleContext(0, Memory_fieldsContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	public bind_var(): Bind_varContext | undefined {
		return this.tryGetRuleContext(0, Bind_varContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_memory; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterMemory) {
			listener.enterMemory(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitMemory) {
			listener.exitMemory(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitMemory) {
			return visitor.visitMemory(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Memory_fieldsContext extends ParserRuleContext {
	public memory_type(): Memory_typeContext | undefined {
		return this.tryGetRuleContext(0, Memory_typeContext);
	}
	public inline_import(): Inline_importContext | undefined {
		return this.tryGetRuleContext(0, Inline_importContext);
	}
	public inline_export(): Inline_exportContext | undefined {
		return this.tryGetRuleContext(0, Inline_exportContext);
	}
	public memory_fields(): Memory_fieldsContext | undefined {
		return this.tryGetRuleContext(0, Memory_fieldsContext);
	}
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.LPAR, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(WatParser.DATA, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.RPAR, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.STRING);
		} else {
			return this.getToken(WatParser.STRING, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_memory_fields; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterMemory_fields) {
			listener.enterMemory_fields(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitMemory_fields) {
			listener.exitMemory_fields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitMemory_fields) {
			return visitor.visitMemory_fields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SglobalContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public GLOBAL(): TerminalNode { return this.getToken(WatParser.GLOBAL, 0); }
	public global_fields(): Global_fieldsContext {
		return this.getRuleContext(0, Global_fieldsContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	public bind_var(): Bind_varContext | undefined {
		return this.tryGetRuleContext(0, Bind_varContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_sglobal; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterSglobal) {
			listener.enterSglobal(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitSglobal) {
			listener.exitSglobal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitSglobal) {
			return visitor.visitSglobal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_fieldsContext extends ParserRuleContext {
	public global_type(): Global_typeContext | undefined {
		return this.tryGetRuleContext(0, Global_typeContext);
	}
	public const_expr(): Const_exprContext | undefined {
		return this.tryGetRuleContext(0, Const_exprContext);
	}
	public inline_import(): Inline_importContext | undefined {
		return this.tryGetRuleContext(0, Inline_importContext);
	}
	public inline_export(): Inline_exportContext | undefined {
		return this.tryGetRuleContext(0, Inline_exportContext);
	}
	public global_fields(): Global_fieldsContext | undefined {
		return this.tryGetRuleContext(0, Global_fieldsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_global_fields; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterGlobal_fields) {
			listener.enterGlobal_fields(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitGlobal_fields) {
			listener.exitGlobal_fields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitGlobal_fields) {
			return visitor.visitGlobal_fields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_descContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public FUNC(): TerminalNode | undefined { return this.tryGetToken(WatParser.FUNC, 0); }
	public type_use(): Type_useContext | undefined {
		return this.tryGetRuleContext(0, Type_useContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	public bind_var(): Bind_varContext | undefined {
		return this.tryGetRuleContext(0, Bind_varContext);
	}
	public func_type(): Func_typeContext | undefined {
		return this.tryGetRuleContext(0, Func_typeContext);
	}
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(WatParser.TABLE, 0); }
	public table_type(): Table_typeContext | undefined {
		return this.tryGetRuleContext(0, Table_typeContext);
	}
	public MEMORY(): TerminalNode | undefined { return this.tryGetToken(WatParser.MEMORY, 0); }
	public memory_type(): Memory_typeContext | undefined {
		return this.tryGetRuleContext(0, Memory_typeContext);
	}
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(WatParser.GLOBAL, 0); }
	public global_type(): Global_typeContext | undefined {
		return this.tryGetRuleContext(0, Global_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_import_desc; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterImport_desc) {
			listener.enterImport_desc(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitImport_desc) {
			listener.exitImport_desc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitImport_desc) {
			return visitor.visitImport_desc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimportContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public IMPORT(): TerminalNode { return this.getToken(WatParser.IMPORT, 0); }
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public import_desc(): Import_descContext {
		return this.getRuleContext(0, Import_descContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_simport; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterSimport) {
			listener.enterSimport(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitSimport) {
			listener.exitSimport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitSimport) {
			return visitor.visitSimport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inline_importContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public IMPORT(): TerminalNode { return this.getToken(WatParser.IMPORT, 0); }
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_inline_import; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterInline_import) {
			listener.enterInline_import(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitInline_import) {
			listener.exitInline_import(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitInline_import) {
			return visitor.visitInline_import(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Export_descContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public FUNC(): TerminalNode | undefined { return this.tryGetToken(WatParser.FUNC, 0); }
	public var(): VarContext {
		return this.getRuleContext(0, VarContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(WatParser.TABLE, 0); }
	public MEMORY(): TerminalNode | undefined { return this.tryGetToken(WatParser.MEMORY, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(WatParser.GLOBAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_export_desc; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterExport_desc) {
			listener.enterExport_desc(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitExport_desc) {
			listener.exitExport_desc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitExport_desc) {
			return visitor.visitExport_desc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public EXPORT(): TerminalNode { return this.getToken(WatParser.EXPORT, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public export_desc(): Export_descContext {
		return this.getRuleContext(0, Export_descContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_export; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterExport) {
			listener.enterExport(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitExport) {
			listener.exitExport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitExport) {
			return visitor.visitExport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inline_exportContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public EXPORT(): TerminalNode { return this.getToken(WatParser.EXPORT, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_inline_export; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterInline_export) {
			listener.enterInline_export(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitInline_export) {
			listener.exitInline_export(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitInline_export) {
			return visitor.visitInline_export(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	public def_type(): Def_typeContext {
		return this.getRuleContext(0, Def_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_type_; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterType_) {
			listener.enterType_(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitType_) {
			listener.exitType_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitType_) {
			return visitor.visitType_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_defContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public TYPE(): TerminalNode { return this.getToken(WatParser.TYPE, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	public bind_var(): Bind_varContext | undefined {
		return this.tryGetRuleContext(0, Bind_varContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_type_def; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterType_def) {
			listener.enterType_def(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitType_def) {
			listener.exitType_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitType_def) {
			return visitor.visitType_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StartContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public START(): TerminalNode { return this.getToken(WatParser.START, 0); }
	public var(): VarContext {
		return this.getRuleContext(0, VarContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_start; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Module_fieldContext extends ParserRuleContext {
	public type_def(): Type_defContext | undefined {
		return this.tryGetRuleContext(0, Type_defContext);
	}
	public sglobal(): SglobalContext | undefined {
		return this.tryGetRuleContext(0, SglobalContext);
	}
	public table(): TableContext | undefined {
		return this.tryGetRuleContext(0, TableContext);
	}
	public memory(): MemoryContext | undefined {
		return this.tryGetRuleContext(0, MemoryContext);
	}
	public func(): FuncContext | undefined {
		return this.tryGetRuleContext(0, FuncContext);
	}
	public elem(): ElemContext | undefined {
		return this.tryGetRuleContext(0, ElemContext);
	}
	public data(): DataContext | undefined {
		return this.tryGetRuleContext(0, DataContext);
	}
	public start(): StartContext | undefined {
		return this.tryGetRuleContext(0, StartContext);
	}
	public simport(): SimportContext | undefined {
		return this.tryGetRuleContext(0, SimportContext);
	}
	public export(): ExportContext | undefined {
		return this.tryGetRuleContext(0, ExportContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_module_field; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterModule_field) {
			listener.enterModule_field(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitModule_field) {
			listener.exitModule_field(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitModule_field) {
			return visitor.visitModule_field(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Module_Context extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public MODULE(): TerminalNode { return this.getToken(WatParser.MODULE, 0); }
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.VAR, 0); }
	public module_field(): Module_fieldContext[];
	public module_field(i: number): Module_fieldContext;
	public module_field(i?: number): Module_fieldContext | Module_fieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Module_fieldContext);
		} else {
			return this.getRuleContext(i, Module_fieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_module_; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterModule_) {
			listener.enterModule_(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitModule_) {
			listener.exitModule_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitModule_) {
			return visitor.visitModule_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Script_moduleContext extends ParserRuleContext {
	public module_(): Module_Context | undefined {
		return this.tryGetRuleContext(0, Module_Context);
	}
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.LPAR, 0); }
	public MODULE(): TerminalNode | undefined { return this.tryGetToken(WatParser.MODULE, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.RPAR, 0); }
	public BIN(): TerminalNode | undefined { return this.tryGetToken(WatParser.BIN, 0); }
	public QUOTE(): TerminalNode | undefined { return this.tryGetToken(WatParser.QUOTE, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.VAR, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WatParser.STRING);
		} else {
			return this.getToken(WatParser.STRING, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_script_module; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterScript_module) {
			listener.enterScript_module(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitScript_module) {
			listener.exitScript_module(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitScript_module) {
			return visitor.visitScript_module(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public INVOKE(): TerminalNode | undefined { return this.tryGetToken(WatParser.INVOKE, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public const_list(): Const_listContext | undefined {
		return this.tryGetRuleContext(0, Const_listContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.VAR, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(WatParser.GET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_action; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterAction) {
			listener.enterAction(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitAction) {
			listener.exitAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitAction) {
			return visitor.visitAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertionContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public ASSERT_MALFORMED(): TerminalNode | undefined { return this.tryGetToken(WatParser.ASSERT_MALFORMED, 0); }
	public script_module(): Script_moduleContext | undefined {
		return this.tryGetRuleContext(0, Script_moduleContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(WatParser.STRING, 0); }
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	public ASSERT_INVALID(): TerminalNode | undefined { return this.tryGetToken(WatParser.ASSERT_INVALID, 0); }
	public ASSERT_UNLINKABLE(): TerminalNode | undefined { return this.tryGetToken(WatParser.ASSERT_UNLINKABLE, 0); }
	public ASSERT_TRAP(): TerminalNode | undefined { return this.tryGetToken(WatParser.ASSERT_TRAP, 0); }
	public ASSERT_RETURN(): TerminalNode | undefined { return this.tryGetToken(WatParser.ASSERT_RETURN, 0); }
	public action(): ActionContext | undefined {
		return this.tryGetRuleContext(0, ActionContext);
	}
	public const_list(): Const_listContext | undefined {
		return this.tryGetRuleContext(0, Const_listContext);
	}
	public ASSERT_RETURN_CANONICAL_NAN(): TerminalNode | undefined { return this.tryGetToken(WatParser.ASSERT_RETURN_CANONICAL_NAN, 0); }
	public ASSERT_RETURN_ARITHMETIC_NAN(): TerminalNode | undefined { return this.tryGetToken(WatParser.ASSERT_RETURN_ARITHMETIC_NAN, 0); }
	public ASSERT_EXHAUSTION(): TerminalNode | undefined { return this.tryGetToken(WatParser.ASSERT_EXHAUSTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_assertion; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterAssertion) {
			listener.enterAssertion(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitAssertion) {
			listener.exitAssertion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitAssertion) {
			return visitor.visitAssertion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdContext extends ParserRuleContext {
	public action(): ActionContext | undefined {
		return this.tryGetRuleContext(0, ActionContext);
	}
	public assertion(): AssertionContext | undefined {
		return this.tryGetRuleContext(0, AssertionContext);
	}
	public script_module(): Script_moduleContext | undefined {
		return this.tryGetRuleContext(0, Script_moduleContext);
	}
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.LPAR, 0); }
	public REGISTER(): TerminalNode | undefined { return this.tryGetToken(WatParser.REGISTER, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.RPAR, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.VAR, 0); }
	public meta(): MetaContext | undefined {
		return this.tryGetRuleContext(0, MetaContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_cmd; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterCmd) {
			listener.enterCmd(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitCmd) {
			listener.exitCmd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitCmd) {
			return visitor.visitCmd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetaContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public SCRIPT(): TerminalNode | undefined { return this.tryGetToken(WatParser.SCRIPT, 0); }
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(WatParser.VAR, 0); }
	public cmd(): CmdContext[];
	public cmd(i: number): CmdContext;
	public cmd(i?: number): CmdContext | CmdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CmdContext);
		} else {
			return this.getRuleContext(i, CmdContext);
		}
	}
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(WatParser.INPUT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(WatParser.STRING, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(WatParser.OUTPUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_meta; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterMeta) {
			listener.enterMeta(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitMeta) {
			listener.exitMeta(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitMeta) {
			return visitor.visitMeta(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WconstContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(WatParser.LPAR, 0); }
	public CONST(): TerminalNode { return this.getToken(WatParser.CONST, 0); }
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	public RPAR(): TerminalNode { return this.getToken(WatParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_wconst; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterWconst) {
			listener.enterWconst(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitWconst) {
			listener.exitWconst(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitWconst) {
			return visitor.visitWconst(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Const_listContext extends ParserRuleContext {
	public wconst(): WconstContext[];
	public wconst(i: number): WconstContext;
	public wconst(i?: number): WconstContext | WconstContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WconstContext);
		} else {
			return this.getRuleContext(i, WconstContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_const_list; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterConst_list) {
			listener.enterConst_list(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitConst_list) {
			listener.exitConst_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitConst_list) {
			return visitor.visitConst_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScriptContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(WatParser.EOF, 0); }
	public cmd(): CmdContext[];
	public cmd(i: number): CmdContext;
	public cmd(i?: number): CmdContext | CmdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CmdContext);
		} else {
			return this.getRuleContext(i, CmdContext);
		}
	}
	public module_field(): Module_fieldContext[];
	public module_field(i: number): Module_fieldContext;
	public module_field(i?: number): Module_fieldContext | Module_fieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Module_fieldContext);
		} else {
			return this.getRuleContext(i, Module_fieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_script; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterScript) {
			listener.enterScript(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitScript) {
			listener.exitScript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitScript) {
			return visitor.visitScript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleContext extends ParserRuleContext {
	public module_(): Module_Context | undefined {
		return this.tryGetRuleContext(0, Module_Context);
	}
	public EOF(): TerminalNode { return this.getToken(WatParser.EOF, 0); }
	public module_field(): Module_fieldContext[];
	public module_field(i: number): Module_fieldContext;
	public module_field(i?: number): Module_fieldContext | Module_fieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Module_fieldContext);
		} else {
			return this.getRuleContext(i, Module_fieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WatParser.RULE_module; }
	// @Override
	public enterRule(listener: WatParserListener): void {
		if (listener.enterModule) {
			listener.enterModule(this);
		}
	}
	// @Override
	public exitRule(listener: WatParserListener): void {
		if (listener.exitModule) {
			listener.exitModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WatParserVisitor<Result>): Result {
		if (visitor.visitModule) {
			return visitor.visitModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


