// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/algol60/algol60.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { algol60Listener } from "./algol60Listener";
import { algol60Visitor } from "./algol60Visitor";


export class algol60Parser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly STRING = 54;
	public static readonly LETTER = 55;
	public static readonly DIGIT = 56;
	public static readonly ARITHMETIC_OPERATOR = 57;
	public static readonly RELATIONAL_OPERATOR = 58;
	public static readonly LOGICAL_OPERATOR = 59;
	public static readonly SEQUENTIAL_OPERATOR = 60;
	public static readonly SEPARATOR = 61;
	public static readonly DECLARATOR = 62;
	public static readonly WS = 63;
	public static readonly RULE_program = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_block_head = 2;
	public static readonly RULE_compound_statement = 3;
	public static readonly RULE_compound_tail = 4;
	public static readonly RULE_declaration = 5;
	public static readonly RULE_type_declaration = 6;
	public static readonly RULE_local_or_own_type = 7;
	public static readonly RULE_type = 8;
	public static readonly RULE_type_list = 9;
	public static readonly RULE_array_declaration = 10;
	public static readonly RULE_array_list = 11;
	public static readonly RULE_array_segment = 12;
	public static readonly RULE_array_identifier = 13;
	public static readonly RULE_bound_pair_list = 14;
	public static readonly RULE_bound_pair = 15;
	public static readonly RULE_upper_bound = 16;
	public static readonly RULE_lower_bound = 17;
	public static readonly RULE_switch_declaration = 18;
	public static readonly RULE_switch_identifier = 19;
	public static readonly RULE_switch_list = 20;
	public static readonly RULE_procedure_declaration = 21;
	public static readonly RULE_procedure_heading = 22;
	public static readonly RULE_procedure_identifier = 23;
	public static readonly RULE_formal_parameter_part = 24;
	public static readonly RULE_formal_parameter_list = 25;
	public static readonly RULE_formal_parameter = 26;
	public static readonly RULE_value_part = 27;
	public static readonly RULE_specification_part = 28;
	public static readonly RULE_specifier = 29;
	public static readonly RULE_identifier_list = 30;
	public static readonly RULE_procedure_body = 31;
	public static readonly RULE_statement = 32;
	public static readonly RULE_unconditional_statement = 33;
	public static readonly RULE_basic_statement = 34;
	public static readonly RULE_label = 35;
	public static readonly RULE_unlabelled_basic_statement = 36;
	public static readonly RULE_assignment_statement = 37;
	public static readonly RULE_left_part_list = 38;
	public static readonly RULE_left_part = 39;
	public static readonly RULE_go_to_statement = 40;
	public static readonly RULE_designational_expression = 41;
	public static readonly RULE_switch_designator = 42;
	public static readonly RULE_procedure_statement = 43;
	public static readonly RULE_actual_parameter_part = 44;
	public static readonly RULE_actual_parameter_list = 45;
	public static readonly RULE_parameter_delimiter = 46;
	public static readonly RULE_actual_parameter = 47;
	public static readonly RULE_conditional_statement = 48;
	public static readonly RULE_if_statement = 49;
	public static readonly RULE_if_clause = 50;
	public static readonly RULE_for_statement = 51;
	public static readonly RULE_for_clause = 52;
	public static readonly RULE_for_list = 53;
	public static readonly RULE_for_list_element = 54;
	public static readonly RULE_arithmetic_expression = 55;
	public static readonly RULE_expression = 56;
	public static readonly RULE_arithmetic_expression2 = 57;
	public static readonly RULE_simple_arithmetic_expression = 58;
	public static readonly RULE_adding_operator = 59;
	public static readonly RULE_term = 60;
	public static readonly RULE_multiplying_operator = 61;
	public static readonly RULE_factor = 62;
	public static readonly RULE_primary = 63;
	public static readonly RULE_unsigned_number = 64;
	public static readonly RULE_decimal_number = 65;
	public static readonly RULE_unsigned_integer = 66;
	public static readonly RULE_decimal_fraction = 67;
	public static readonly RULE_exponential_part = 68;
	public static readonly RULE_integer = 69;
	public static readonly RULE_boolean_expression = 70;
	public static readonly RULE_relation = 71;
	public static readonly RULE_relational_operator = 72;
	public static readonly RULE_function_designator = 73;
	public static readonly RULE_variable = 74;
	public static readonly RULE_simple_variable = 75;
	public static readonly RULE_variable_identifier = 76;
	public static readonly RULE_subscripted_variable = 77;
	public static readonly RULE_subscript_list = 78;
	public static readonly RULE_subscript_expression = 79;
	public static readonly RULE_open_string = 80;
	public static readonly RULE_proper_string = 81;
	public static readonly RULE_letter_string = 82;
	public static readonly RULE_identifier = 83;
	public static readonly RULE_basic_symbol = 84;
	public static readonly RULE_logical_value = 85;
	public static readonly RULE_delimiter = 86;
	public static readonly RULE_operator = 87;
	public static readonly RULE_bracket = 88;
	public static readonly RULE_specificator = 89;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "block", "block_head", "compound_statement", "compound_tail", 
		"declaration", "type_declaration", "local_or_own_type", "type", "type_list", 
		"array_declaration", "array_list", "array_segment", "array_identifier", 
		"bound_pair_list", "bound_pair", "upper_bound", "lower_bound", "switch_declaration", 
		"switch_identifier", "switch_list", "procedure_declaration", "procedure_heading", 
		"procedure_identifier", "formal_parameter_part", "formal_parameter_list", 
		"formal_parameter", "value_part", "specification_part", "specifier", "identifier_list", 
		"procedure_body", "statement", "unconditional_statement", "basic_statement", 
		"label", "unlabelled_basic_statement", "assignment_statement", "left_part_list", 
		"left_part", "go_to_statement", "designational_expression", "switch_designator", 
		"procedure_statement", "actual_parameter_part", "actual_parameter_list", 
		"parameter_delimiter", "actual_parameter", "conditional_statement", "if_statement", 
		"if_clause", "for_statement", "for_clause", "for_list", "for_list_element", 
		"arithmetic_expression", "expression", "arithmetic_expression2", "simple_arithmetic_expression", 
		"adding_operator", "term", "multiplying_operator", "factor", "primary", 
		"unsigned_number", "decimal_number", "unsigned_integer", "decimal_fraction", 
		"exponential_part", "integer", "boolean_expression", "relation", "relational_operator", 
		"function_designator", "variable", "simple_variable", "variable_identifier", 
		"subscripted_variable", "subscript_list", "subscript_expression", "open_string", 
		"proper_string", "letter_string", "identifier", "basic_symbol", "logical_value", 
		"delimiter", "operator", "bracket", "specificator",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "'begin'", "';'", "'end'", "'own'", "'real'", "'integer'", 
		"'boolean'", "','", "'array'", "'switch'", "':='", "'procedure'", "'('", 
		"')'", "'value'", "'label'", "'goto'", "'else'", "'if'", "'then'", "'for'", 
		"'do'", "'step'", "'until'", "'while'", "'+'", "' \u2013'", "'\u00D7'", 
		"'/'", "'\u00F7'", "'\u2191'", "'.'", "'10'", "'\u2013'", "'\u2263'", 
		"'\u2283'", "'\u22C1'", "'\u22C0'", "'\u00AC'", "'<'", "'\u2264'", "'='", 
		"'\u2260'", "'>'", "'\u2265'", "'['", "']'", "'true'", "'false'", "'`'", 
		"'''", "'string'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "STRING", "LETTER", 
		"DIGIT", "ARITHMETIC_OPERATOR", "RELATIONAL_OPERATOR", "LOGICAL_OPERATOR", 
		"SEQUENTIAL_OPERATOR", "SEPARATOR", "DECLARATOR", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(algol60Parser._LITERAL_NAMES, algol60Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return algol60Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "algol60.g4"; }

	// @Override
	public get ruleNames(): string[] { return algol60Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return algol60Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(algol60Parser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, algol60Parser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 180;
				this.block();
				}
				break;

			case 2:
				{
				this.state = 181;
				this.compound_statement();
				}
				break;
			}
			this.state = 184;
			this.match(algol60Parser.EOF);
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
		this.enterRule(_localctx, 2, algol60Parser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === algol60Parser.LETTER || _la === algol60Parser.DIGIT) {
				{
				this.state = 186;
				this.label();
				this.state = 187;
				this.match(algol60Parser.T__0);
				}
			}

			this.state = 191;
			this.block_head();
			this.state = 192;
			this.compound_tail();
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
	public block_head(): Block_headContext {
		let _localctx: Block_headContext = new Block_headContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, algol60Parser.RULE_block_head);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.match(algol60Parser.T__1);
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 195;
				this.declaration();
				this.state = 196;
				this.match(algol60Parser.T__2);
				}
				}
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__4) | (1 << algol60Parser.T__5) | (1 << algol60Parser.T__6) | (1 << algol60Parser.T__7) | (1 << algol60Parser.T__9) | (1 << algol60Parser.T__10) | (1 << algol60Parser.T__12))) !== 0));
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
	public compound_statement(): Compound_statementContext {
		let _localctx: Compound_statementContext = new Compound_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, algol60Parser.RULE_compound_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === algol60Parser.LETTER || _la === algol60Parser.DIGIT) {
				{
				this.state = 202;
				this.label();
				this.state = 203;
				this.match(algol60Parser.T__0);
				}
			}

			this.state = 207;
			this.match(algol60Parser.T__1);
			this.state = 208;
			this.compound_tail();
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
	public compound_tail(): Compound_tailContext {
		let _localctx: Compound_tailContext = new Compound_tailContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, algol60Parser.RULE_compound_tail);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 210;
					this.statement();
					this.state = 211;
					this.match(algol60Parser.T__2);
					}
					}
				}
				this.state = 217;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 218;
			this.statement();
			this.state = 219;
			this.match(algol60Parser.T__3);
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, algol60Parser.RULE_declaration);
		try {
			this.state = 225;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 221;
				this.type_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 222;
				this.array_declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 223;
				this.switch_declaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 224;
				this.procedure_declaration();
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
	public type_declaration(): Type_declarationContext {
		let _localctx: Type_declarationContext = new Type_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, algol60Parser.RULE_type_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.local_or_own_type();
			this.state = 228;
			this.type_list();
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
	public local_or_own_type(): Local_or_own_typeContext {
		let _localctx: Local_or_own_typeContext = new Local_or_own_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, algol60Parser.RULE_local_or_own_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === algol60Parser.T__4) {
				{
				this.state = 230;
				this.match(algol60Parser.T__4);
				}
			}

			this.state = 233;
			this.type();
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, algol60Parser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__5) | (1 << algol60Parser.T__6) | (1 << algol60Parser.T__7))) !== 0))) {
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
	public type_list(): Type_listContext {
		let _localctx: Type_listContext = new Type_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, algol60Parser.RULE_type_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this.simple_variable();
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === algol60Parser.T__8) {
				{
				{
				this.state = 238;
				this.match(algol60Parser.T__8);
				this.state = 239;
				this.simple_variable();
				}
				}
				this.state = 244;
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
	public array_declaration(): Array_declarationContext {
		let _localctx: Array_declarationContext = new Array_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, algol60Parser.RULE_array_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__4) | (1 << algol60Parser.T__5) | (1 << algol60Parser.T__6) | (1 << algol60Parser.T__7))) !== 0)) {
				{
				this.state = 245;
				this.local_or_own_type();
				}
			}

			this.state = 248;
			this.match(algol60Parser.T__9);
			this.state = 249;
			this.array_list();
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
	public array_list(): Array_listContext {
		let _localctx: Array_listContext = new Array_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, algol60Parser.RULE_array_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this.array_segment();
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === algol60Parser.T__8) {
				{
				{
				this.state = 252;
				this.match(algol60Parser.T__8);
				this.state = 253;
				this.array_segment();
				}
				}
				this.state = 258;
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
	public array_segment(): Array_segmentContext {
		let _localctx: Array_segmentContext = new Array_segmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, algol60Parser.RULE_array_segment);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 259;
					this.array_identifier();
					this.state = 260;
					this.match(algol60Parser.T__8);
					}
					}
				}
				this.state = 266;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 267;
			this.array_identifier();
			this.state = 268;
			this.bound_pair_list();
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
	public array_identifier(): Array_identifierContext {
		let _localctx: Array_identifierContext = new Array_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, algol60Parser.RULE_array_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.identifier();
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
	public bound_pair_list(): Bound_pair_listContext {
		let _localctx: Bound_pair_listContext = new Bound_pair_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, algol60Parser.RULE_bound_pair_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.bound_pair();
			this.state = 277;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 273;
					this.match(algol60Parser.T__8);
					this.state = 274;
					this.bound_pair();
					}
					}
				}
				this.state = 279;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
	public bound_pair(): Bound_pairContext {
		let _localctx: Bound_pairContext = new Bound_pairContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, algol60Parser.RULE_bound_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 280;
			this.lower_bound();
			this.state = 281;
			this.match(algol60Parser.T__0);
			this.state = 282;
			this.upper_bound();
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
	public upper_bound(): Upper_boundContext {
		let _localctx: Upper_boundContext = new Upper_boundContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, algol60Parser.RULE_upper_bound);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.arithmetic_expression(0);
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
	public lower_bound(): Lower_boundContext {
		let _localctx: Lower_boundContext = new Lower_boundContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, algol60Parser.RULE_lower_bound);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
			this.arithmetic_expression(0);
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
	public switch_declaration(): Switch_declarationContext {
		let _localctx: Switch_declarationContext = new Switch_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, algol60Parser.RULE_switch_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			this.match(algol60Parser.T__10);
			this.state = 289;
			this.switch_identifier();
			this.state = 290;
			this.match(algol60Parser.T__11);
			this.state = 291;
			this.switch_list();
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
	public switch_identifier(): Switch_identifierContext {
		let _localctx: Switch_identifierContext = new Switch_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, algol60Parser.RULE_switch_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.identifier();
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
	public switch_list(): Switch_listContext {
		let _localctx: Switch_listContext = new Switch_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, algol60Parser.RULE_switch_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.designational_expression();
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === algol60Parser.T__8) {
				{
				{
				this.state = 296;
				this.match(algol60Parser.T__8);
				this.state = 297;
				this.designational_expression();
				}
				}
				this.state = 302;
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
	public procedure_declaration(): Procedure_declarationContext {
		let _localctx: Procedure_declarationContext = new Procedure_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, algol60Parser.RULE_procedure_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__5) | (1 << algol60Parser.T__6) | (1 << algol60Parser.T__7))) !== 0)) {
				{
				this.state = 303;
				this.type();
				}
			}

			this.state = 306;
			this.match(algol60Parser.T__12);
			this.state = 307;
			this.procedure_heading();
			this.state = 308;
			this.procedure_body();
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
	public procedure_heading(): Procedure_headingContext {
		let _localctx: Procedure_headingContext = new Procedure_headingContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, algol60Parser.RULE_procedure_heading);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this.procedure_identifier();
			this.state = 312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === algol60Parser.T__13) {
				{
				this.state = 311;
				this.formal_parameter_part();
				}
			}

			this.state = 314;
			this.match(algol60Parser.T__2);
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === algol60Parser.T__15) {
				{
				this.state = 315;
				this.value_part();
				}
			}

			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__5) | (1 << algol60Parser.T__6) | (1 << algol60Parser.T__7) | (1 << algol60Parser.T__9) | (1 << algol60Parser.T__10) | (1 << algol60Parser.T__12) | (1 << algol60Parser.T__16))) !== 0) || _la === algol60Parser.STRING) {
				{
				this.state = 318;
				this.specification_part();
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
	public procedure_identifier(): Procedure_identifierContext {
		let _localctx: Procedure_identifierContext = new Procedure_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, algol60Parser.RULE_procedure_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.identifier();
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
	public formal_parameter_part(): Formal_parameter_partContext {
		let _localctx: Formal_parameter_partContext = new Formal_parameter_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, algol60Parser.RULE_formal_parameter_part);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.formal_parameter_list();
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
	public formal_parameter_list(): Formal_parameter_listContext {
		let _localctx: Formal_parameter_listContext = new Formal_parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, algol60Parser.RULE_formal_parameter_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.match(algol60Parser.T__13);
			this.state = 326;
			this.formal_parameter();
			this.state = 332;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 327;
					this.parameter_delimiter();
					this.state = 328;
					this.formal_parameter();
					}
					}
				}
				this.state = 334;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			this.state = 335;
			this.match(algol60Parser.T__14);
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
	public formal_parameter(): Formal_parameterContext {
		let _localctx: Formal_parameterContext = new Formal_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, algol60Parser.RULE_formal_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.identifier();
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
	public value_part(): Value_partContext {
		let _localctx: Value_partContext = new Value_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, algol60Parser.RULE_value_part);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.match(algol60Parser.T__15);
			this.state = 340;
			this.identifier_list();
			this.state = 341;
			this.match(algol60Parser.T__2);
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
	public specification_part(): Specification_partContext {
		let _localctx: Specification_partContext = new Specification_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, algol60Parser.RULE_specification_part);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.specifier();
			this.state = 344;
			this.identifier_list();
			this.state = 351;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 345;
					this.match(algol60Parser.T__2);
					this.state = 346;
					this.specifier();
					this.state = 347;
					this.identifier_list();
					}
					}
				}
				this.state = 353;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
	public specifier(): SpecifierContext {
		let _localctx: SpecifierContext = new SpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, algol60Parser.RULE_specifier);
		let _la: number;
		try {
			this.state = 366;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 354;
				this.match(algol60Parser.STRING);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 355;
				this.type();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__5) | (1 << algol60Parser.T__6) | (1 << algol60Parser.T__7))) !== 0)) {
					{
					this.state = 356;
					this.type();
					}
				}

				this.state = 359;
				this.match(algol60Parser.T__9);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 360;
				this.match(algol60Parser.T__16);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 361;
				this.match(algol60Parser.T__10);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__5) | (1 << algol60Parser.T__6) | (1 << algol60Parser.T__7))) !== 0)) {
					{
					this.state = 362;
					this.type();
					}
				}

				this.state = 365;
				this.match(algol60Parser.T__12);
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
	public identifier_list(): Identifier_listContext {
		let _localctx: Identifier_listContext = new Identifier_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, algol60Parser.RULE_identifier_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.identifier();
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === algol60Parser.T__8) {
				{
				{
				this.state = 369;
				this.match(algol60Parser.T__8);
				this.state = 370;
				this.identifier();
				}
				}
				this.state = 375;
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
	public procedure_body(): Procedure_bodyContext {
		let _localctx: Procedure_bodyContext = new Procedure_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, algol60Parser.RULE_procedure_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.statement();
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, algol60Parser.RULE_statement);
		try {
			this.state = 381;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 378;
				this.unconditional_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 379;
				this.conditional_statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 380;
				this.for_statement();
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
	public unconditional_statement(): Unconditional_statementContext {
		let _localctx: Unconditional_statementContext = new Unconditional_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, algol60Parser.RULE_unconditional_statement);
		try {
			this.state = 386;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 383;
				this.basic_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 384;
				this.compound_statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 385;
				this.block();
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
	public basic_statement(): Basic_statementContext {
		let _localctx: Basic_statementContext = new Basic_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, algol60Parser.RULE_basic_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 388;
					this.label();
					this.state = 389;
					this.match(algol60Parser.T__0);
					}
					}
				}
				this.state = 395;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === algol60Parser.T__17 || _la === algol60Parser.LETTER) {
				{
				this.state = 396;
				this.unlabelled_basic_statement();
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
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, algol60Parser.RULE_label);
		try {
			this.state = 401;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case algol60Parser.LETTER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 399;
				this.identifier();
				}
				break;
			case algol60Parser.DIGIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 400;
				this.unsigned_integer();
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
	public unlabelled_basic_statement(): Unlabelled_basic_statementContext {
		let _localctx: Unlabelled_basic_statementContext = new Unlabelled_basic_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, algol60Parser.RULE_unlabelled_basic_statement);
		try {
			this.state = 406;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 403;
				this.assignment_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 404;
				this.go_to_statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 405;
				this.procedure_statement();
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
	public assignment_statement(): Assignment_statementContext {
		let _localctx: Assignment_statementContext = new Assignment_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, algol60Parser.RULE_assignment_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this.left_part_list();
			this.state = 411;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case algol60Parser.T__23:
				{
				this.state = 409;
				this.arithmetic_expression(0);
				}
				break;
			case algol60Parser.T__13:
			case algol60Parser.T__19:
			case algol60Parser.T__26:
			case algol60Parser.T__27:
			case algol60Parser.T__32:
			case algol60Parser.T__33:
			case algol60Parser.T__39:
			case algol60Parser.T__48:
			case algol60Parser.T__49:
			case algol60Parser.LETTER:
			case algol60Parser.DIGIT:
				{
				this.state = 410;
				this.boolean_expression(0);
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
	public left_part_list(): Left_part_listContext {
		let _localctx: Left_part_listContext = new Left_part_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, algol60Parser.RULE_left_part_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 413;
					this.left_part();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 416;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
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
	public left_part(): Left_partContext {
		let _localctx: Left_partContext = new Left_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, algol60Parser.RULE_left_part);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 418;
				this.variable();
				}
				break;

			case 2:
				{
				this.state = 419;
				this.procedure_identifier();
				}
				break;
			}
			this.state = 422;
			this.match(algol60Parser.T__11);
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
	public go_to_statement(): Go_to_statementContext {
		let _localctx: Go_to_statementContext = new Go_to_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, algol60Parser.RULE_go_to_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.match(algol60Parser.T__17);
			this.state = 425;
			this.designational_expression();
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
	public designational_expression(): Designational_expressionContext {
		let _localctx: Designational_expressionContext = new Designational_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, algol60Parser.RULE_designational_expression);
		try {
			this.state = 434;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 427;
				this.label();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 428;
				this.switch_designator();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 429;
				this.if_clause();
				this.state = 430;
				this.designational_expression();
				this.state = 431;
				this.match(algol60Parser.T__18);
				this.state = 432;
				this.designational_expression();
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
	public switch_designator(): Switch_designatorContext {
		let _localctx: Switch_designatorContext = new Switch_designatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, algol60Parser.RULE_switch_designator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this.switch_identifier();
			this.state = 438;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 437;
				this.subscript_expression();
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
	// @RuleVersion(0)
	public procedure_statement(): Procedure_statementContext {
		let _localctx: Procedure_statementContext = new Procedure_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, algol60Parser.RULE_procedure_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			this.procedure_identifier();
			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__13) | (1 << algol60Parser.T__19) | (1 << algol60Parser.T__23) | (1 << algol60Parser.T__26) | (1 << algol60Parser.T__27))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (algol60Parser.T__32 - 33)) | (1 << (algol60Parser.T__33 - 33)) | (1 << (algol60Parser.T__39 - 33)) | (1 << (algol60Parser.T__48 - 33)) | (1 << (algol60Parser.T__49 - 33)) | (1 << (algol60Parser.STRING - 33)) | (1 << (algol60Parser.LETTER - 33)) | (1 << (algol60Parser.DIGIT - 33)))) !== 0)) {
				{
				this.state = 441;
				this.actual_parameter_part();
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
	public actual_parameter_part(): Actual_parameter_partContext {
		let _localctx: Actual_parameter_partContext = new Actual_parameter_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, algol60Parser.RULE_actual_parameter_part);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.actual_parameter_list();
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
	public actual_parameter_list(): Actual_parameter_listContext {
		let _localctx: Actual_parameter_listContext = new Actual_parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, algol60Parser.RULE_actual_parameter_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.actual_parameter();
			this.state = 452;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 447;
					this.parameter_delimiter();
					this.state = 448;
					this.actual_parameter();
					}
					}
				}
				this.state = 454;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
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
	public parameter_delimiter(): Parameter_delimiterContext {
		let _localctx: Parameter_delimiterContext = new Parameter_delimiterContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, algol60Parser.RULE_parameter_delimiter);
		try {
			this.state = 461;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case algol60Parser.T__8:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 455;
				this.match(algol60Parser.T__8);
				}
				break;
			case algol60Parser.T__14:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 456;
				this.match(algol60Parser.T__14);
				this.state = 457;
				this.letter_string();
				this.state = 458;
				this.match(algol60Parser.T__0);
				this.state = 459;
				this.match(algol60Parser.T__13);
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
	public actual_parameter(): Actual_parameterContext {
		let _localctx: Actual_parameterContext = new Actual_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, algol60Parser.RULE_actual_parameter);
		try {
			this.state = 468;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 463;
				this.match(algol60Parser.STRING);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 464;
				this.expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 465;
				this.array_identifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 466;
				this.switch_identifier();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 467;
				this.procedure_identifier();
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
	public conditional_statement(): Conditional_statementContext {
		let _localctx: Conditional_statementContext = new Conditional_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, algol60Parser.RULE_conditional_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === algol60Parser.LETTER || _la === algol60Parser.DIGIT) {
				{
				{
				this.state = 470;
				this.label();
				this.state = 471;
				this.match(algol60Parser.T__0);
				}
				}
				this.state = 477;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 486;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				{
				this.state = 478;
				this.if_statement();
				this.state = 481;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === algol60Parser.T__18) {
					{
					this.state = 479;
					this.match(algol60Parser.T__18);
					this.state = 480;
					this.statement();
					}
				}

				}
				}
				break;

			case 2:
				{
				{
				this.state = 483;
				this.if_clause();
				this.state = 484;
				this.for_statement();
				}
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
	// @RuleVersion(0)
	public if_statement(): If_statementContext {
		let _localctx: If_statementContext = new If_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, algol60Parser.RULE_if_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this.if_clause();
			this.state = 489;
			this.unconditional_statement();
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
	public if_clause(): If_clauseContext {
		let _localctx: If_clauseContext = new If_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, algol60Parser.RULE_if_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
			this.match(algol60Parser.T__19);
			this.state = 492;
			this.boolean_expression(0);
			this.state = 493;
			this.match(algol60Parser.T__20);
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
	public for_statement(): For_statementContext {
		let _localctx: For_statementContext = new For_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, algol60Parser.RULE_for_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === algol60Parser.LETTER || _la === algol60Parser.DIGIT) {
				{
				{
				this.state = 495;
				this.label();
				this.state = 496;
				this.match(algol60Parser.T__0);
				}
				}
				this.state = 502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 503;
			this.for_clause();
			this.state = 504;
			this.statement();
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
	public for_clause(): For_clauseContext {
		let _localctx: For_clauseContext = new For_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, algol60Parser.RULE_for_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			this.match(algol60Parser.T__21);
			this.state = 507;
			this.variable();
			this.state = 508;
			this.match(algol60Parser.T__11);
			this.state = 509;
			this.for_list();
			this.state = 510;
			this.match(algol60Parser.T__22);
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
	public for_list(): For_listContext {
		let _localctx: For_listContext = new For_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, algol60Parser.RULE_for_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this.for_list_element();
			this.state = 517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === algol60Parser.T__8) {
				{
				{
				this.state = 513;
				this.match(algol60Parser.T__8);
				this.state = 514;
				this.for_list_element();
				}
				}
				this.state = 519;
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
	public for_list_element(): For_list_elementContext {
		let _localctx: For_list_elementContext = new For_list_elementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, algol60Parser.RULE_for_list_element);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === algol60Parser.T__23) {
				{
				this.state = 520;
				this.arithmetic_expression(0);
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

	public arithmetic_expression(): Arithmetic_expressionContext;
	public arithmetic_expression(_p: number): Arithmetic_expressionContext;
	// @RuleVersion(0)
	public arithmetic_expression(_p?: number): Arithmetic_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Arithmetic_expressionContext = new Arithmetic_expressionContext(this._ctx, _parentState);
		let _prevctx: Arithmetic_expressionContext = _localctx;
		let _startState: number = 110;
		this.enterRecursionRule(_localctx, 110, algol60Parser.RULE_arithmetic_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 524;
			this.match(algol60Parser.T__23);
			this.state = 525;
			this.arithmetic_expression(0);
			this.state = 526;
			this.match(algol60Parser.T__24);
			this.state = 527;
			this.arithmetic_expression(2);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 534;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Arithmetic_expressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, algol60Parser.RULE_arithmetic_expression);
					this.state = 529;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 530;
					this.match(algol60Parser.T__25);
					this.state = 531;
					this.boolean_expression(0);
					}
					}
				}
				this.state = 536;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, algol60Parser.RULE_expression);
		try {
			this.state = 540;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 537;
				this.arithmetic_expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 538;
				this.boolean_expression(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 539;
				this.designational_expression();
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
	public arithmetic_expression2(): Arithmetic_expression2Context {
		let _localctx: Arithmetic_expression2Context = new Arithmetic_expression2Context(this._ctx, this.state);
		this.enterRule(_localctx, 114, algol60Parser.RULE_arithmetic_expression2);
		try {
			this.state = 548;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case algol60Parser.T__13:
			case algol60Parser.T__26:
			case algol60Parser.T__27:
			case algol60Parser.T__32:
			case algol60Parser.T__33:
			case algol60Parser.LETTER:
			case algol60Parser.DIGIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 542;
				this.simple_arithmetic_expression();
				}
				break;
			case algol60Parser.T__19:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 543;
				this.if_clause();
				this.state = 544;
				this.simple_arithmetic_expression();
				this.state = 545;
				this.match(algol60Parser.T__18);
				this.state = 546;
				this.arithmetic_expression(0);
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
	public simple_arithmetic_expression(): Simple_arithmetic_expressionContext {
		let _localctx: Simple_arithmetic_expressionContext = new Simple_arithmetic_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, algol60Parser.RULE_simple_arithmetic_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 551;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === algol60Parser.T__26 || _la === algol60Parser.T__27) {
				{
				this.state = 550;
				this.adding_operator();
				}
			}

			this.state = 553;
			this.term();
			this.state = 559;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 554;
					this.adding_operator();
					this.state = 555;
					this.term();
					}
					}
				}
				this.state = 561;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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
	public adding_operator(): Adding_operatorContext {
		let _localctx: Adding_operatorContext = new Adding_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, algol60Parser.RULE_adding_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			_la = this._input.LA(1);
			if (!(_la === algol60Parser.T__26 || _la === algol60Parser.T__27)) {
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
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, algol60Parser.RULE_term);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
			this.factor();
			this.state = 570;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 565;
					this.multiplying_operator();
					this.state = 566;
					this.factor();
					}
					}
				}
				this.state = 572;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
	public multiplying_operator(): Multiplying_operatorContext {
		let _localctx: Multiplying_operatorContext = new Multiplying_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, algol60Parser.RULE_multiplying_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 573;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__28) | (1 << algol60Parser.T__29) | (1 << algol60Parser.T__30))) !== 0))) {
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
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, algol60Parser.RULE_factor);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 575;
			this.primary();
			this.state = 580;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 576;
					this.match(algol60Parser.T__31);
					this.state = 577;
					this.primary();
					}
					}
				}
				this.state = 582;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
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
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, algol60Parser.RULE_primary);
		try {
			this.state = 590;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 583;
				this.unsigned_number();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 584;
				this.variable();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 585;
				this.function_designator();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 586;
				this.match(algol60Parser.T__13);
				this.state = 587;
				this.arithmetic_expression(0);
				this.state = 588;
				this.match(algol60Parser.T__14);
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
	public unsigned_number(): Unsigned_numberContext {
		let _localctx: Unsigned_numberContext = new Unsigned_numberContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, algol60Parser.RULE_unsigned_number);
		try {
			this.state = 597;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 592;
				this.decimal_number();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 593;
				this.exponential_part();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 594;
				this.decimal_number();
				this.state = 595;
				this.exponential_part();
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
	public decimal_number(): Decimal_numberContext {
		let _localctx: Decimal_numberContext = new Decimal_numberContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, algol60Parser.RULE_decimal_number);
		try {
			this.state = 604;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 599;
				this.unsigned_integer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 600;
				this.decimal_fraction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 601;
				this.unsigned_integer();
				this.state = 602;
				this.decimal_fraction();
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
	public unsigned_integer(): Unsigned_integerContext {
		let _localctx: Unsigned_integerContext = new Unsigned_integerContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, algol60Parser.RULE_unsigned_integer);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 606;
					this.match(algol60Parser.DIGIT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 609;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
	public decimal_fraction(): Decimal_fractionContext {
		let _localctx: Decimal_fractionContext = new Decimal_fractionContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, algol60Parser.RULE_decimal_fraction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 611;
			this.match(algol60Parser.T__32);
			this.state = 612;
			this.unsigned_integer();
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
	public exponential_part(): Exponential_partContext {
		let _localctx: Exponential_partContext = new Exponential_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, algol60Parser.RULE_exponential_part);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this.match(algol60Parser.T__33);
			this.state = 615;
			this.integer();
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
		this.enterRule(_localctx, 138, algol60Parser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === algol60Parser.T__26 || _la === algol60Parser.T__34) {
				{
				this.state = 617;
				_la = this._input.LA(1);
				if (!(_la === algol60Parser.T__26 || _la === algol60Parser.T__34)) {
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

			this.state = 620;
			this.unsigned_integer();
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

	public boolean_expression(): Boolean_expressionContext;
	public boolean_expression(_p: number): Boolean_expressionContext;
	// @RuleVersion(0)
	public boolean_expression(_p?: number): Boolean_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Boolean_expressionContext = new Boolean_expressionContext(this._ctx, _parentState);
		let _prevctx: Boolean_expressionContext = _localctx;
		let _startState: number = 140;
		this.enterRecursionRule(_localctx, 140, algol60Parser.RULE_boolean_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 638;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 623;
				this.if_clause();
				this.state = 624;
				this.boolean_expression(0);
				this.state = 625;
				this.match(algol60Parser.T__18);
				this.state = 626;
				this.boolean_expression(11);
				}
				break;

			case 2:
				{
				this.state = 628;
				this.match(algol60Parser.T__39);
				this.state = 629;
				this.boolean_expression(6);
				}
				break;

			case 3:
				{
				this.state = 630;
				this.logical_value();
				}
				break;

			case 4:
				{
				this.state = 631;
				this.variable();
				}
				break;

			case 5:
				{
				this.state = 632;
				this.function_designator();
				}
				break;

			case 6:
				{
				this.state = 633;
				this.relation();
				}
				break;

			case 7:
				{
				this.state = 634;
				this.match(algol60Parser.T__13);
				this.state = 635;
				this.boolean_expression(0);
				this.state = 636;
				this.match(algol60Parser.T__14);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 654;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 652;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
					case 1:
						{
						_localctx = new Boolean_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, algol60Parser.RULE_boolean_expression);
						this.state = 640;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 641;
						this.match(algol60Parser.T__35);
						this.state = 642;
						this.boolean_expression(11);
						}
						break;

					case 2:
						{
						_localctx = new Boolean_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, algol60Parser.RULE_boolean_expression);
						this.state = 643;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 644;
						this.match(algol60Parser.T__36);
						this.state = 645;
						this.boolean_expression(10);
						}
						break;

					case 3:
						{
						_localctx = new Boolean_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, algol60Parser.RULE_boolean_expression);
						this.state = 646;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 647;
						this.match(algol60Parser.T__37);
						this.state = 648;
						this.boolean_expression(9);
						}
						break;

					case 4:
						{
						_localctx = new Boolean_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, algol60Parser.RULE_boolean_expression);
						this.state = 649;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 650;
						this.match(algol60Parser.T__38);
						this.state = 651;
						this.boolean_expression(8);
						}
						break;
					}
					}
				}
				this.state = 656;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
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
	public relation(): RelationContext {
		let _localctx: RelationContext = new RelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, algol60Parser.RULE_relation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 657;
			this.simple_arithmetic_expression();
			this.state = 658;
			this.relational_operator();
			this.state = 659;
			this.simple_arithmetic_expression();
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
	public relational_operator(): Relational_operatorContext {
		let _localctx: Relational_operatorContext = new Relational_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, algol60Parser.RULE_relational_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			_la = this._input.LA(1);
			if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (algol60Parser.T__40 - 41)) | (1 << (algol60Parser.T__41 - 41)) | (1 << (algol60Parser.T__42 - 41)) | (1 << (algol60Parser.T__43 - 41)) | (1 << (algol60Parser.T__44 - 41)) | (1 << (algol60Parser.T__45 - 41)))) !== 0))) {
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
	public function_designator(): Function_designatorContext {
		let _localctx: Function_designatorContext = new Function_designatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, algol60Parser.RULE_function_designator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 663;
			this.procedure_identifier();
			this.state = 664;
			this.actual_parameter_part();
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
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, algol60Parser.RULE_variable);
		try {
			this.state = 668;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 666;
				this.simple_variable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 667;
				this.subscripted_variable();
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
	public simple_variable(): Simple_variableContext {
		let _localctx: Simple_variableContext = new Simple_variableContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, algol60Parser.RULE_simple_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 670;
			this.variable_identifier();
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
	public variable_identifier(): Variable_identifierContext {
		let _localctx: Variable_identifierContext = new Variable_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, algol60Parser.RULE_variable_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this.identifier();
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
	public subscripted_variable(): Subscripted_variableContext {
		let _localctx: Subscripted_variableContext = new Subscripted_variableContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, algol60Parser.RULE_subscripted_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 674;
			this.array_identifier();
			this.state = 675;
			this.match(algol60Parser.T__46);
			this.state = 676;
			this.subscript_list();
			this.state = 677;
			this.match(algol60Parser.T__47);
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
	public subscript_list(): Subscript_listContext {
		let _localctx: Subscript_listContext = new Subscript_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, algol60Parser.RULE_subscript_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 679;
			this.subscript_expression();
			this.state = 684;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === algol60Parser.T__8) {
				{
				{
				this.state = 680;
				this.match(algol60Parser.T__8);
				this.state = 681;
				this.subscript_expression();
				}
				}
				this.state = 686;
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
	public subscript_expression(): Subscript_expressionContext {
		let _localctx: Subscript_expressionContext = new Subscript_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, algol60Parser.RULE_subscript_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 687;
			this.arithmetic_expression(0);
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
	public open_string(): Open_stringContext {
		let _localctx: Open_stringContext = new Open_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, algol60Parser.RULE_open_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 689;
				this.proper_string();
				}
				break;
			}
			this.state = 692;
			this.match(algol60Parser.STRING);
			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 694;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
				case 1:
					{
					this.state = 693;
					this.proper_string();
					}
					break;
				}
				this.state = 696;
				this.match(algol60Parser.STRING);
				}
				}
				this.state = 699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === algol60Parser.STRING);
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
	public proper_string(): Proper_stringContext {
		let _localctx: Proper_stringContext = new Proper_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, algol60Parser.RULE_proper_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 701;
			this.match(algol60Parser.STRING);
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
	public letter_string(): Letter_stringContext {
		let _localctx: Letter_stringContext = new Letter_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, algol60Parser.RULE_letter_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 704;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 703;
				this.match(algol60Parser.LETTER);
				}
				}
				this.state = 706;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === algol60Parser.LETTER);
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, algol60Parser.RULE_identifier);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this.match(algol60Parser.LETTER);
			this.state = 712;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 709;
					_la = this._input.LA(1);
					if (!(_la === algol60Parser.LETTER || _la === algol60Parser.DIGIT)) {
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
				}
				this.state = 714;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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
	public basic_symbol(): Basic_symbolContext {
		let _localctx: Basic_symbolContext = new Basic_symbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, algol60Parser.RULE_basic_symbol);
		try {
			this.state = 719;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case algol60Parser.LETTER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 715;
				this.match(algol60Parser.LETTER);
				}
				break;
			case algol60Parser.DIGIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 716;
				this.match(algol60Parser.DIGIT);
				}
				break;
			case algol60Parser.T__48:
			case algol60Parser.T__49:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 717;
				this.logical_value();
				}
				break;
			case algol60Parser.T__1:
			case algol60Parser.T__3:
			case algol60Parser.T__13:
			case algol60Parser.T__14:
			case algol60Parser.T__15:
			case algol60Parser.T__16:
			case algol60Parser.T__46:
			case algol60Parser.T__47:
			case algol60Parser.T__50:
			case algol60Parser.T__51:
			case algol60Parser.T__52:
			case algol60Parser.ARITHMETIC_OPERATOR:
			case algol60Parser.RELATIONAL_OPERATOR:
			case algol60Parser.LOGICAL_OPERATOR:
			case algol60Parser.SEQUENTIAL_OPERATOR:
			case algol60Parser.SEPARATOR:
			case algol60Parser.DECLARATOR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 718;
				this.delimiter();
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
	public logical_value(): Logical_valueContext {
		let _localctx: Logical_valueContext = new Logical_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, algol60Parser.RULE_logical_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 721;
			_la = this._input.LA(1);
			if (!(_la === algol60Parser.T__48 || _la === algol60Parser.T__49)) {
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
	public delimiter(): DelimiterContext {
		let _localctx: DelimiterContext = new DelimiterContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, algol60Parser.RULE_delimiter);
		try {
			this.state = 728;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case algol60Parser.ARITHMETIC_OPERATOR:
			case algol60Parser.RELATIONAL_OPERATOR:
			case algol60Parser.LOGICAL_OPERATOR:
			case algol60Parser.SEQUENTIAL_OPERATOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 723;
				this.operator();
				}
				break;
			case algol60Parser.SEPARATOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 724;
				this.match(algol60Parser.SEPARATOR);
				}
				break;
			case algol60Parser.T__1:
			case algol60Parser.T__3:
			case algol60Parser.T__13:
			case algol60Parser.T__14:
			case algol60Parser.T__46:
			case algol60Parser.T__47:
			case algol60Parser.T__50:
			case algol60Parser.T__51:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 725;
				this.bracket();
				}
				break;
			case algol60Parser.DECLARATOR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 726;
				this.match(algol60Parser.DECLARATOR);
				}
				break;
			case algol60Parser.T__15:
			case algol60Parser.T__16:
			case algol60Parser.T__52:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 727;
				this.specificator();
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, algol60Parser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 730;
			_la = this._input.LA(1);
			if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (algol60Parser.ARITHMETIC_OPERATOR - 57)) | (1 << (algol60Parser.RELATIONAL_OPERATOR - 57)) | (1 << (algol60Parser.LOGICAL_OPERATOR - 57)) | (1 << (algol60Parser.SEQUENTIAL_OPERATOR - 57)))) !== 0))) {
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
	public bracket(): BracketContext {
		let _localctx: BracketContext = new BracketContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, algol60Parser.RULE_bracket);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 732;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << algol60Parser.T__1) | (1 << algol60Parser.T__3) | (1 << algol60Parser.T__13) | (1 << algol60Parser.T__14))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (algol60Parser.T__46 - 47)) | (1 << (algol60Parser.T__47 - 47)) | (1 << (algol60Parser.T__50 - 47)) | (1 << (algol60Parser.T__51 - 47)))) !== 0))) {
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
	public specificator(): SpecificatorContext {
		let _localctx: SpecificatorContext = new SpecificatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, algol60Parser.RULE_specificator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 734;
			_la = this._input.LA(1);
			if (!(_la === algol60Parser.T__15 || _la === algol60Parser.T__16 || _la === algol60Parser.T__52)) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 55:
			return this.arithmetic_expression_sempred(_localctx as Arithmetic_expressionContext, predIndex);

		case 70:
			return this.boolean_expression_sempred(_localctx as Boolean_expressionContext, predIndex);
		}
		return true;
	}
	private arithmetic_expression_sempred(_localctx: Arithmetic_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private boolean_expression_sempred(_localctx: Boolean_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 10);

		case 2:
			return this.precpred(this._ctx, 9);

		case 3:
			return this.precpred(this._ctx, 8);

		case 4:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03A\u02E3\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x03\x02\x03\x02\x05\x02\xB9\n\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03\xC0\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04\xC9\n\x04\r\x04\x0E\x04\xCA" +
		"\x03\x05\x03\x05\x03\x05\x05\x05\xD0\n\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x07\x06\xD8\n\x06\f\x06\x0E\x06\xDB\v\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xE4\n\x07\x03" +
		"\b\x03\b\x03\b\x03\t\x05\t\xEA\n\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v" +
		"\x03\v\x07\v\xF3\n\v\f\v\x0E\v\xF6\v\v\x03\f\x05\f\xF9\n\f\x03\f\x03\f" +
		"\x03\f\x03\r\x03\r\x03\r\x07\r\u0101\n\r\f\r\x0E\r\u0104\v\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\u0109\n\x0E\f\x0E\x0E\x0E\u010C\v\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u0116\n\x10" +
		"\f\x10\x0E\x10\u0119\v\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x03\x16\x07\x16\u012D\n\x16\f\x16\x0E\x16\u0130\v" +
		"\x16\x03\x17\x05\x17\u0133\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x05\x18\u013B\n\x18\x03\x18\x03\x18\x05\x18\u013F\n\x18\x03\x18" +
		"\x05\x18\u0142\n\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x07\x1B\u014D\n\x1B\f\x1B\x0E\x1B\u0150\v\x1B\x03" +
		"\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0160\n\x1E\f\x1E\x0E\x1E" +
		"\u0163\v\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0168\n\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x05\x1F\u016E\n\x1F\x03\x1F\x05\x1F\u0171\n\x1F\x03 " +
		"\x03 \x03 \x07 \u0176\n \f \x0E \u0179\v \x03!\x03!\x03\"\x03\"\x03\"" +
		"\x05\"\u0180\n\"\x03#\x03#\x03#\x05#\u0185\n#\x03$\x03$\x03$\x07$\u018A" +
		"\n$\f$\x0E$\u018D\v$\x03$\x05$\u0190\n$\x03%\x03%\x05%\u0194\n%\x03&\x03" +
		"&\x03&\x05&\u0199\n&\x03\'\x03\'\x03\'\x05\'\u019E\n\'\x03(\x06(\u01A1" +
		"\n(\r(\x0E(\u01A2\x03)\x03)\x05)\u01A7\n)\x03)\x03)\x03*\x03*\x03*\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u01B5\n+\x03,\x03,\x05,\u01B9\n," +
		"\x03-\x03-\x05-\u01BD\n-\x03.\x03.\x03/\x03/\x03/\x03/\x07/\u01C5\n/\f" +
		"/\x0E/\u01C8\v/\x030\x030\x030\x030\x030\x030\x050\u01D0\n0\x031\x031" +
		"\x031\x031\x031\x051\u01D7\n1\x032\x032\x032\x072\u01DC\n2\f2\x0E2\u01DF" +
		"\v2\x032\x032\x032\x052\u01E4\n2\x032\x032\x032\x052\u01E9\n2\x033\x03" +
		"3\x033\x034\x034\x034\x034\x035\x035\x035\x075\u01F5\n5\f5\x0E5\u01F8" +
		"\v5\x035\x035\x035\x036\x036\x036\x036\x036\x036\x037\x037\x037\x077\u0206" +
		"\n7\f7\x0E7\u0209\v7\x038\x058\u020C\n8\x039\x039\x039\x039\x039\x039" +
		"\x039\x039\x039\x079\u0217\n9\f9\x0E9\u021A\v9\x03:\x03:\x03:\x05:\u021F" +
		"\n:\x03;\x03;\x03;\x03;\x03;\x03;\x05;\u0227\n;\x03<\x05<\u022A\n<\x03" +
		"<\x03<\x03<\x03<\x07<\u0230\n<\f<\x0E<\u0233\v<\x03=\x03=\x03>\x03>\x03" +
		">\x03>\x07>\u023B\n>\f>\x0E>\u023E\v>\x03?\x03?\x03@\x03@\x03@\x07@\u0245" +
		"\n@\f@\x0E@\u0248\v@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u0251\nA" +
		"\x03B\x03B\x03B\x03B\x03B\x05B\u0258\nB\x03C\x03C\x03C\x03C\x03C\x05C" +
		"\u025F\nC\x03D\x06D\u0262\nD\rD\x0ED\u0263\x03E\x03E\x03E\x03F\x03F\x03" +
		"F\x03G\x05G\u026D\nG\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u0281\nH\x03H\x03H\x03" +
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x07H\u028F\nH\fH\x0EH\u0292" +
		"\vH\x03I\x03I\x03I\x03I\x03J\x03J\x03K\x03K\x03K\x03L\x03L\x05L\u029F" +
		"\nL\x03M\x03M\x03N\x03N\x03O\x03O\x03O\x03O\x03O\x03P\x03P\x03P\x07P\u02AD" +
		"\nP\fP\x0EP\u02B0\vP\x03Q\x03Q\x03R\x05R\u02B5\nR\x03R\x03R\x05R\u02B9" +
		"\nR\x03R\x06R\u02BC\nR\rR\x0ER\u02BD\x03S\x03S\x03T\x06T\u02C3\nT\rT\x0E" +
		"T\u02C4\x03U\x03U\x07U\u02C9\nU\fU\x0EU\u02CC\vU\x03V\x03V\x03V\x03V\x05" +
		"V\u02D2\nV\x03W\x03W\x03X\x03X\x03X\x03X\x03X\x05X\u02DB\nX\x03Y\x03Y" +
		"\x03Z\x03Z\x03[\x03[\x03[\x02\x02\x04p\x8E\\\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
		"6\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
		"\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
		"\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\x02\f\x03\x02\b\n\x03" +
		"\x02\x1D\x1E\x03\x02\x1F!\x04\x02\x1D\x1D%%\x03\x02+0\x03\x029:\x03\x02" +
		"34\x03\x02;>\x07\x02\x04\x04\x06\x06\x10\x111256\x04\x02\x12\x1377\x02" +
		"\u02EA\x02\xB8\x03\x02\x02\x02\x04\xBF\x03\x02\x02\x02\x06\xC4\x03\x02" +
		"\x02\x02\b\xCF\x03\x02\x02\x02\n\xD9\x03\x02\x02\x02\f\xE3\x03\x02\x02" +
		"\x02\x0E\xE5\x03\x02\x02\x02\x10\xE9\x03\x02\x02\x02\x12\xED\x03\x02\x02" +
		"\x02\x14\xEF\x03\x02\x02\x02\x16\xF8\x03\x02\x02\x02\x18\xFD\x03\x02\x02" +
		"\x02\x1A\u010A\x03\x02\x02\x02\x1C\u0110\x03\x02\x02\x02\x1E\u0112\x03" +
		"\x02\x02\x02 \u011A\x03\x02\x02\x02\"\u011E\x03\x02\x02\x02$\u0120\x03" +
		"\x02\x02\x02&\u0122\x03\x02\x02\x02(\u0127\x03\x02\x02\x02*\u0129\x03" +
		"\x02\x02\x02,\u0132\x03\x02\x02\x02.\u0138\x03\x02\x02\x020\u0143\x03" +
		"\x02\x02\x022\u0145\x03\x02\x02\x024\u0147\x03\x02\x02\x026\u0153\x03" +
		"\x02\x02\x028\u0155\x03\x02\x02\x02:\u0159\x03\x02\x02\x02<\u0170\x03" +
		"\x02\x02\x02>\u0172\x03\x02\x02\x02@\u017A\x03\x02\x02\x02B\u017F\x03" +
		"\x02\x02\x02D\u0184\x03\x02\x02\x02F\u018B\x03\x02\x02\x02H\u0193\x03" +
		"\x02\x02\x02J\u0198\x03\x02\x02\x02L\u019A\x03\x02\x02\x02N\u01A0\x03" +
		"\x02\x02\x02P\u01A6\x03\x02\x02\x02R\u01AA\x03\x02\x02\x02T\u01B4\x03" +
		"\x02\x02\x02V\u01B6\x03\x02\x02\x02X\u01BA\x03\x02\x02\x02Z\u01BE\x03" +
		"\x02\x02\x02\\\u01C0\x03\x02\x02\x02^\u01CF\x03\x02\x02\x02`\u01D6\x03" +
		"\x02\x02\x02b\u01DD\x03\x02\x02\x02d\u01EA\x03\x02\x02\x02f\u01ED\x03" +
		"\x02\x02\x02h\u01F6\x03\x02\x02\x02j\u01FC\x03\x02\x02\x02l\u0202\x03" +
		"\x02\x02\x02n\u020B\x03\x02\x02\x02p\u020D\x03\x02\x02\x02r\u021E\x03" +
		"\x02\x02\x02t\u0226\x03\x02\x02\x02v\u0229\x03\x02\x02\x02x\u0234\x03" +
		"\x02\x02\x02z\u0236\x03\x02\x02\x02|\u023F\x03\x02\x02\x02~\u0241\x03" +
		"\x02\x02\x02\x80\u0250\x03\x02\x02\x02\x82\u0257\x03\x02\x02\x02\x84\u025E" +
		"\x03\x02\x02\x02\x86\u0261\x03\x02\x02\x02\x88\u0265\x03\x02\x02\x02\x8A" +
		"\u0268\x03\x02\x02\x02\x8C\u026C\x03\x02\x02\x02\x8E\u0280\x03\x02\x02" +
		"\x02\x90\u0293\x03\x02\x02\x02\x92\u0297\x03\x02\x02\x02\x94\u0299\x03" +
		"\x02\x02\x02\x96\u029E\x03\x02\x02\x02\x98\u02A0\x03\x02\x02\x02\x9A\u02A2" +
		"\x03\x02\x02\x02\x9C\u02A4\x03\x02\x02\x02\x9E\u02A9\x03\x02\x02\x02\xA0" +
		"\u02B1\x03\x02\x02\x02\xA2\u02B4\x03\x02\x02\x02\xA4\u02BF\x03\x02\x02" +
		"\x02\xA6\u02C2\x03\x02\x02\x02\xA8\u02C6\x03\x02\x02\x02\xAA\u02D1\x03" +
		"\x02\x02\x02\xAC\u02D3\x03\x02\x02\x02\xAE\u02DA\x03\x02\x02\x02\xB0\u02DC" +
		"\x03\x02\x02\x02\xB2\u02DE\x03\x02\x02\x02\xB4\u02E0\x03\x02\x02\x02\xB6" +
		"\xB9\x05\x04\x03\x02\xB7\xB9\x05\b\x05\x02\xB8\xB6\x03\x02\x02\x02\xB8" +
		"\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x07\x02\x02\x03\xBB" +
		"\x03\x03\x02\x02\x02\xBC\xBD\x05H%\x02\xBD\xBE\x07\x03\x02\x02\xBE\xC0" +
		"\x03\x02\x02\x02\xBF\xBC\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC1" +
		"\x03\x02\x02\x02\xC1\xC2\x05\x06\x04\x02\xC2\xC3\x05\n\x06\x02\xC3\x05" +
		"\x03\x02\x02\x02\xC4\xC8\x07\x04\x02\x02\xC5\xC6\x05\f\x07\x02\xC6\xC7" +
		"\x07\x05\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8\xC5\x03\x02\x02\x02\xC9\xCA" +
		"\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\x07" +
		"\x03\x02\x02\x02\xCC\xCD\x05H%\x02\xCD\xCE\x07\x03\x02\x02\xCE\xD0\x03" +
		"\x02\x02\x02\xCF\xCC\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03" +
		"\x02\x02\x02\xD1\xD2\x07\x04\x02\x02\xD2\xD3\x05\n\x06\x02\xD3\t\x03\x02" +
		"\x02\x02\xD4\xD5\x05B\"\x02\xD5\xD6\x07\x05\x02\x02\xD6\xD8\x03\x02\x02" +
		"\x02\xD7\xD4\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xD7\x03\x02\x02" +
		"\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDC\x03\x02\x02\x02\xDB\xD9\x03\x02\x02" +
		"\x02\xDC\xDD\x05B\"\x02\xDD\xDE\x07\x06\x02\x02\xDE\v\x03\x02\x02\x02" +
		"\xDF\xE4\x05\x0E\b\x02\xE0\xE4\x05\x16\f\x02\xE1\xE4\x05&\x14\x02\xE2" +
		"\xE4\x05,\x17\x02\xE3\xDF\x03\x02\x02\x02\xE3\xE0\x03\x02\x02\x02\xE3" +
		"\xE1\x03\x02\x02\x02\xE3\xE2\x03\x02\x02\x02\xE4\r\x03\x02\x02\x02\xE5" +
		"\xE6\x05\x10\t\x02\xE6\xE7\x05\x14\v\x02\xE7\x0F\x03\x02\x02\x02\xE8\xEA" +
		"\x07\x07\x02\x02\xE9\xE8\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEB" +
		"\x03\x02\x02\x02\xEB\xEC\x05\x12\n\x02\xEC\x11\x03\x02\x02\x02\xED\xEE" +
		"\t\x02\x02\x02\xEE\x13\x03\x02\x02\x02\xEF\xF4\x05\x98M\x02\xF0\xF1\x07" +
		"\v\x02\x02\xF1\xF3\x05\x98M\x02\xF2\xF0\x03\x02\x02\x02\xF3\xF6\x03\x02" +
		"\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\x15\x03\x02" +
		"\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF9\x05\x10\t\x02\xF8\xF7\x03\x02" +
		"\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFB\x07\f" +
		"\x02\x02\xFB\xFC\x05\x18\r\x02\xFC\x17\x03\x02\x02\x02\xFD\u0102\x05\x1A" +
		"\x0E\x02\xFE\xFF\x07\v\x02\x02\xFF\u0101\x05\x1A\x0E\x02\u0100\xFE\x03" +
		"\x02\x02\x02\u0101\u0104\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102" +
		"\u0103\x03\x02\x02\x02\u0103\x19\x03\x02\x02\x02\u0104\u0102\x03\x02\x02" +
		"\x02\u0105\u0106\x05\x1C\x0F\x02\u0106\u0107\x07\v\x02\x02\u0107\u0109" +
		"\x03\x02\x02\x02\u0108\u0105\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02" +
		"\u010A\u0108\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010D\x03" +
		"\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010D\u010E\x05\x1C\x0F\x02\u010E" +
		"\u010F\x05\x1E\x10\x02\u010F\x1B\x03\x02\x02\x02\u0110\u0111\x05\xA8U" +
		"\x02\u0111\x1D\x03\x02\x02\x02\u0112\u0117\x05 \x11\x02\u0113\u0114\x07" +
		"\v\x02\x02\u0114\u0116\x05 \x11\x02\u0115\u0113\x03\x02\x02\x02\u0116" +
		"\u0119\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0118\x03\x02" +
		"\x02\x02\u0118\x1F\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u011A\u011B" +
		"\x05$\x13\x02\u011B\u011C\x07\x03\x02\x02\u011C\u011D\x05\"\x12\x02\u011D" +
		"!\x03\x02\x02\x02\u011E\u011F\x05p9\x02\u011F#\x03\x02\x02\x02\u0120\u0121" +
		"\x05p9\x02\u0121%\x03\x02\x02\x02\u0122\u0123\x07\r\x02\x02\u0123\u0124" +
		"\x05(\x15\x02\u0124\u0125\x07\x0E\x02\x02\u0125\u0126\x05*\x16\x02\u0126" +
		"\'\x03\x02\x02\x02\u0127\u0128\x05\xA8U\x02\u0128)\x03\x02\x02\x02\u0129" +
		"\u012E\x05T+\x02\u012A\u012B\x07\v\x02\x02\u012B\u012D\x05T+\x02\u012C" +
		"\u012A\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02" +
		"\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F+\x03\x02\x02\x02\u0130\u012E" +
		"\x03\x02\x02\x02\u0131\u0133\x05\x12\n\x02\u0132\u0131\x03\x02\x02\x02" +
		"\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x07" +
		"\x0F\x02\x02\u0135\u0136\x05.\x18\x02\u0136\u0137\x05@!\x02\u0137-\x03" +
		"\x02\x02\x02\u0138\u013A\x050\x19\x02\u0139\u013B\x052\x1A\x02\u013A\u0139" +
		"\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02" +
		"\u013C\u013E\x07\x05\x02\x02\u013D\u013F\x058\x1D\x02\u013E\u013D\x03" +
		"\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0141\x03\x02\x02\x02\u0140" +
		"\u0142\x05:\x1E\x02\u0141\u0140\x03\x02\x02\x02\u0141\u0142\x03\x02\x02" +
		"\x02\u0142/\x03\x02\x02\x02\u0143\u0144\x05\xA8U\x02\u01441\x03\x02\x02" +
		"\x02\u0145\u0146\x054\x1B\x02\u01463\x03\x02\x02\x02\u0147\u0148\x07\x10" +
		"\x02\x02\u0148\u014E\x056\x1C\x02\u0149\u014A\x05^0\x02\u014A\u014B\x05" +
		"6\x1C\x02\u014B\u014D\x03\x02\x02\x02\u014C\u0149\x03\x02\x02\x02\u014D" +
		"\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02" +
		"\x02\x02\u014F\u0151\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151" +
		"\u0152\x07\x11\x02\x02\u01525\x03\x02\x02\x02\u0153\u0154\x05\xA8U\x02" +
		"\u01547\x03\x02\x02\x02\u0155\u0156\x07\x12\x02\x02\u0156\u0157\x05> " +
		"\x02\u0157\u0158\x07\x05\x02\x02\u01589\x03\x02\x02\x02\u0159\u015A\x05" +
		"<\x1F\x02\u015A\u0161\x05> \x02\u015B\u015C\x07\x05\x02\x02\u015C\u015D" +
		"\x05<\x1F\x02\u015D\u015E\x05> \x02\u015E\u0160\x03\x02\x02\x02\u015F" +
		"\u015B\x03\x02\x02\x02\u0160\u0163\x03\x02\x02\x02\u0161\u015F\x03\x02" +
		"\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162;\x03\x02\x02\x02\u0163\u0161" +
		"\x03\x02\x02\x02\u0164\u0171\x078\x02\x02\u0165\u0171\x05\x12\n\x02\u0166" +
		"\u0168\x05\x12\n\x02\u0167\u0166\x03\x02\x02\x02\u0167\u0168\x03\x02\x02" +
		"\x02\u0168\u0169\x03\x02\x02\x02\u0169\u0171\x07\f\x02\x02\u016A\u0171" +
		"\x07\x13\x02\x02\u016B\u0171\x07\r\x02\x02\u016C\u016E\x05\x12\n\x02\u016D" +
		"\u016C\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u016F\x03\x02" +
		"\x02\x02\u016F\u0171\x07\x0F\x02\x02\u0170\u0164\x03\x02\x02\x02\u0170" +
		"\u0165\x03\x02\x02\x02\u0170\u0167\x03\x02\x02\x02\u0170\u016A\x03\x02" +
		"\x02\x02\u0170\u016B\x03\x02\x02\x02\u0170\u016D\x03\x02\x02\x02\u0171" +
		"=\x03\x02\x02\x02\u0172\u0177\x05\xA8U\x02\u0173\u0174\x07\v\x02\x02\u0174" +
		"\u0176\x05\xA8U\x02\u0175\u0173\x03\x02\x02\x02\u0176\u0179\x03\x02\x02" +
		"\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178?\x03" +
		"\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u017A\u017B\x05B\"\x02\u017B" +
		"A\x03\x02\x02\x02\u017C\u0180\x05D#\x02\u017D\u0180\x05b2\x02\u017E\u0180" +
		"\x05h5\x02\u017F\u017C\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F" +
		"\u017E\x03\x02\x02\x02\u0180C\x03\x02\x02\x02\u0181\u0185\x05F$\x02\u0182" +
		"\u0185\x05\b\x05\x02\u0183\u0185\x05\x04\x03\x02\u0184\u0181\x03\x02\x02" +
		"\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0183\x03\x02\x02\x02\u0185E\x03" +
		"\x02\x02\x02\u0186\u0187\x05H%\x02\u0187\u0188\x07\x03\x02\x02\u0188\u018A" +
		"\x03\x02\x02\x02\u0189\u0186\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02" +
		"\u018B\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018F\x03" +
		"\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018E\u0190\x05J&\x02\u018F\u018E" +
		"\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190G\x03\x02\x02\x02\u0191" +
		"\u0194\x05\xA8U\x02\u0192\u0194\x05\x86D\x02\u0193\u0191\x03\x02\x02\x02" +
		"\u0193\u0192\x03\x02\x02\x02\u0194I\x03\x02\x02\x02\u0195\u0199\x05L\'" +
		"\x02\u0196\u0199\x05R*\x02\u0197\u0199\x05X-\x02\u0198\u0195\x03\x02\x02" +
		"\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0197\x03\x02\x02\x02\u0199K\x03" +
		"\x02\x02\x02\u019A\u019D\x05N(\x02\u019B\u019E\x05p9\x02\u019C\u019E\x05" +
		"\x8EH\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019C\x03\x02\x02\x02\u019E" +
		"M\x03\x02\x02\x02\u019F\u01A1\x05P)\x02\u01A0\u019F\x03\x02\x02\x02\u01A1" +
		"\u01A2\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A3\x03\x02" +
		"\x02\x02\u01A3O\x03\x02\x02\x02\u01A4\u01A7\x05\x96L\x02\u01A5\u01A7\x05" +
		"0\x19\x02\u01A6\u01A4\x03\x02\x02\x02\u01A6\u01A5\x03\x02\x02\x02\u01A7" +
		"\u01A8\x03\x02\x02\x02\u01A8\u01A9\x07\x0E\x02\x02\u01A9Q\x03\x02\x02" +
		"\x02\u01AA\u01AB\x07\x14\x02\x02\u01AB\u01AC\x05T+\x02\u01ACS\x03\x02" +
		"\x02\x02\u01AD\u01B5\x05H%\x02\u01AE\u01B5\x05V,\x02\u01AF\u01B0\x05f" +
		"4\x02\u01B0\u01B1\x05T+\x02\u01B1\u01B2\x07\x15\x02\x02\u01B2\u01B3\x05" +
		"T+\x02\u01B3\u01B5\x03\x02\x02\x02\u01B4\u01AD\x03\x02\x02\x02\u01B4\u01AE" +
		"\x03\x02\x02\x02\u01B4\u01AF\x03\x02\x02\x02\u01B5U\x03\x02\x02\x02\u01B6" +
		"\u01B8\x05(\x15\x02\u01B7\u01B9\x05\xA0Q\x02\u01B8\u01B7\x03\x02\x02\x02" +
		"\u01B8\u01B9\x03\x02\x02\x02\u01B9W\x03\x02\x02\x02\u01BA\u01BC\x050\x19" +
		"\x02\u01BB\u01BD\x05Z.\x02\u01BC\u01BB\x03\x02\x02\x02\u01BC\u01BD\x03" +
		"\x02\x02\x02\u01BDY\x03\x02\x02\x02\u01BE\u01BF\x05\\/\x02\u01BF[\x03" +
		"\x02\x02\x02\u01C0\u01C6\x05`1\x02\u01C1\u01C2\x05^0\x02\u01C2\u01C3\x05" +
		"`1\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4\u01C1\x03\x02\x02\x02\u01C5\u01C8" +
		"\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02" +
		"\u01C7]\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C9\u01D0\x07\v" +
		"\x02\x02\u01CA\u01CB\x07\x11\x02\x02\u01CB\u01CC\x05\xA6T\x02\u01CC\u01CD" +
		"\x07\x03\x02\x02\u01CD\u01CE\x07\x10\x02\x02\u01CE\u01D0\x03\x02\x02\x02" +
		"\u01CF\u01C9\x03\x02\x02\x02\u01CF\u01CA\x03\x02\x02\x02\u01D0_\x03\x02" +
		"\x02\x02\u01D1\u01D7\x078\x02\x02\u01D2\u01D7\x05r:\x02\u01D3\u01D7\x05" +
		"\x1C\x0F\x02\u01D4\u01D7\x05(\x15\x02\u01D5\u01D7\x050\x19\x02\u01D6\u01D1" +
		"\x03\x02\x02\x02\u01D6\u01D2\x03\x02\x02\x02\u01D6\u01D3\x03\x02\x02\x02" +
		"\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7a\x03\x02" +
		"\x02\x02\u01D8\u01D9\x05H%\x02\u01D9\u01DA\x07\x03\x02\x02\u01DA\u01DC" +
		"\x03\x02\x02\x02\u01DB\u01D8\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02" +
		"\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01E8\x03" +
		"\x02\x02\x02\u01DF\u01DD\x03\x02\x02\x02\u01E0\u01E3\x05d3\x02\u01E1\u01E2" +
		"\x07\x15\x02\x02\u01E2\u01E4\x05B\"\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3" +
		"\u01E4\x03\x02\x02\x02\u01E4\u01E9\x03\x02\x02\x02\u01E5\u01E6\x05f4\x02" +
		"\u01E6\u01E7\x05h5\x02\u01E7\u01E9\x03\x02\x02\x02\u01E8\u01E0\x03\x02" +
		"\x02\x02\u01E8\u01E5\x03\x02\x02\x02\u01E9c\x03\x02\x02\x02\u01EA\u01EB" +
		"\x05f4\x02\u01EB\u01EC\x05D#\x02\u01ECe\x03\x02\x02\x02\u01ED\u01EE\x07" +
		"\x16\x02\x02\u01EE\u01EF\x05\x8EH\x02\u01EF\u01F0\x07\x17\x02\x02\u01F0" +
		"g\x03\x02\x02\x02\u01F1\u01F2\x05H%\x02\u01F2\u01F3\x07\x03\x02\x02\u01F3" +
		"\u01F5\x03\x02\x02\x02\u01F4\u01F1\x03\x02\x02\x02\u01F5\u01F8\x03\x02" +
		"\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7" +
		"\u01F9\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FA\x05j6\x02" +
		"\u01FA\u01FB\x05B\"\x02\u01FBi\x03\x02\x02\x02\u01FC\u01FD\x07\x18\x02" +
		"\x02\u01FD\u01FE\x05\x96L\x02\u01FE\u01FF\x07\x0E\x02\x02\u01FF\u0200" +
		"\x05l7\x02\u0200\u0201\x07\x19\x02\x02\u0201k\x03\x02\x02\x02\u0202\u0207" +
		"\x05n8\x02\u0203\u0204\x07\v\x02\x02\u0204\u0206\x05n8\x02\u0205\u0203" +
		"\x03\x02\x02\x02\u0206\u0209\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02" +
		"\u0207\u0208\x03\x02\x02\x02\u0208m\x03\x02\x02\x02\u0209\u0207\x03\x02" +
		"\x02\x02\u020A\u020C\x05p9\x02\u020B\u020A\x03\x02\x02\x02\u020B\u020C" +
		"\x03\x02\x02\x02\u020Co\x03\x02\x02\x02\u020D\u020E\b9\x01\x02\u020E\u020F" +
		"\x07\x1A\x02\x02\u020F\u0210\x05p9\x02\u0210\u0211\x07\x1B\x02\x02\u0211" +
		"\u0212\x05p9\x04\u0212\u0218\x03\x02\x02\x02\u0213\u0214\f\x03\x02\x02" +
		"\u0214\u0215\x07\x1C\x02\x02\u0215\u0217\x05\x8EH\x02\u0216\u0213\x03" +
		"\x02\x02\x02\u0217\u021A\x03\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218" +
		"\u0219\x03\x02\x02\x02\u0219q\x03\x02\x02\x02\u021A\u0218\x03\x02\x02" +
		"\x02\u021B\u021F\x05p9\x02\u021C\u021F\x05\x8EH\x02\u021D\u021F\x05T+" +
		"\x02\u021E\u021B\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021D" +
		"\x03\x02\x02\x02\u021Fs\x03\x02\x02\x02\u0220\u0227\x05v<\x02\u0221\u0222" +
		"\x05f4\x02\u0222\u0223\x05v<\x02\u0223\u0224\x07\x15\x02\x02\u0224\u0225" +
		"\x05p9\x02\u0225\u0227\x03\x02\x02\x02\u0226\u0220\x03\x02\x02\x02\u0226" +
		"\u0221\x03\x02\x02\x02\u0227u\x03\x02\x02\x02\u0228\u022A\x05x=\x02\u0229" +
		"\u0228\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022B\x03\x02" +
		"\x02\x02\u022B\u0231\x05z>\x02\u022C\u022D\x05x=\x02\u022D\u022E\x05z" +
		">\x02\u022E\u0230\x03\x02\x02\x02\u022F\u022C\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0230\u0233\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232" +
		"\x03\x02\x02\x02\u0232w\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0234" +
		"\u0235\t\x03\x02\x02\u0235y\x03\x02\x02\x02\u0236\u023C\x05~@\x02\u0237" +
		"\u0238\x05|?\x02\u0238\u0239\x05~@\x02\u0239\u023B\x03\x02\x02\x02\u023A" +
		"\u0237\x03\x02\x02\x02\u023B\u023E\x03\x02\x02\x02\u023C\u023A\x03\x02" +
		"\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D{\x03\x02\x02\x02\u023E\u023C" +
		"\x03\x02\x02\x02\u023F\u0240\t\x04\x02\x02\u0240}\x03\x02\x02\x02\u0241" +
		"\u0246\x05\x80A\x02\u0242\u0243\x07\"\x02\x02\u0243\u0245\x05\x80A\x02" +
		"\u0244\u0242\x03\x02\x02\x02\u0245\u0248\x03\x02\x02\x02\u0246\u0244\x03" +
		"\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\x7F\x03\x02\x02\x02\u0248" +
		"\u0246\x03\x02\x02\x02\u0249\u0251\x05\x82B\x02\u024A\u0251\x05\x96L\x02" +
		"\u024B\u0251\x05\x94K\x02\u024C\u024D\x07\x10\x02\x02\u024D\u024E\x05" +
		"p9\x02\u024E\u024F\x07\x11\x02\x02\u024F\u0251\x03\x02\x02\x02\u0250\u0249" +
		"\x03\x02\x02\x02\u0250\u024A\x03\x02\x02\x02\u0250\u024B\x03\x02\x02\x02" +
		"\u0250\u024C\x03\x02\x02\x02\u0251\x81\x03\x02\x02\x02\u0252\u0258\x05" +
		"\x84C\x02\u0253\u0258\x05\x8AF\x02\u0254\u0255\x05\x84C\x02\u0255\u0256" +
		"\x05\x8AF\x02\u0256\u0258\x03\x02\x02\x02\u0257\u0252\x03\x02\x02\x02" +
		"\u0257\u0253\x03\x02\x02\x02\u0257\u0254\x03\x02\x02\x02\u0258\x83\x03" +
		"\x02\x02\x02\u0259\u025F\x05\x86D\x02\u025A\u025F\x05\x88E\x02\u025B\u025C" +
		"\x05\x86D\x02\u025C\u025D\x05\x88E\x02\u025D\u025F\x03\x02\x02\x02\u025E" +
		"\u0259\x03\x02\x02\x02\u025E\u025A\x03\x02\x02\x02\u025E\u025B\x03\x02" +
		"\x02\x02\u025F\x85\x03\x02\x02\x02\u0260\u0262\x07:\x02\x02\u0261\u0260" +
		"\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0261\x03\x02\x02\x02" +
		"\u0263\u0264\x03\x02\x02\x02\u0264\x87\x03\x02\x02\x02\u0265\u0266\x07" +
		"#\x02\x02\u0266\u0267\x05\x86D\x02\u0267\x89\x03\x02\x02\x02\u0268\u0269" +
		"\x07$\x02\x02\u0269\u026A\x05\x8CG\x02\u026A\x8B\x03\x02\x02\x02\u026B" +
		"\u026D\t\x05\x02\x02\u026C\u026B\x03\x02\x02\x02\u026C\u026D\x03\x02\x02" +
		"\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026F\x05\x86D\x02\u026F\x8D\x03" +
		"\x02\x02\x02\u0270\u0271\bH\x01\x02\u0271\u0272\x05f4\x02\u0272\u0273" +
		"\x05\x8EH\x02\u0273\u0274\x07\x15\x02\x02\u0274\u0275\x05\x8EH\r\u0275" +
		"\u0281\x03\x02\x02\x02\u0276\u0277\x07*\x02\x02\u0277\u0281\x05\x8EH\b" +
		"\u0278\u0281\x05\xACW\x02\u0279\u0281\x05\x96L\x02\u027A\u0281\x05\x94" +
		"K\x02\u027B\u0281\x05\x90I\x02\u027C\u027D\x07\x10\x02\x02\u027D\u027E" +
		"\x05\x8EH\x02\u027E\u027F\x07\x11\x02\x02\u027F\u0281\x03\x02\x02\x02" +
		"\u0280\u0270\x03\x02\x02\x02\u0280\u0276\x03\x02\x02\x02\u0280\u0278\x03" +
		"\x02\x02\x02\u0280\u0279\x03\x02\x02\x02\u0280\u027A\x03\x02\x02\x02\u0280" +
		"\u027B\x03\x02\x02\x02\u0280\u027C\x03\x02\x02\x02\u0281\u0290\x03\x02" +
		"\x02\x02\u0282\u0283\f\f\x02\x02\u0283\u0284\x07&\x02\x02\u0284\u028F" +
		"\x05\x8EH\r\u0285\u0286\f\v\x02\x02\u0286\u0287\x07\'\x02\x02\u0287\u028F" +
		"\x05\x8EH\f\u0288\u0289\f\n\x02\x02\u0289\u028A\x07(\x02\x02\u028A\u028F" +
		"\x05\x8EH\v\u028B\u028C\f\t\x02\x02\u028C\u028D\x07)\x02\x02\u028D\u028F" +
		"\x05\x8EH\n\u028E\u0282\x03\x02\x02\x02\u028E\u0285\x03\x02\x02\x02\u028E" +
		"\u0288\x03\x02\x02\x02\u028E\u028B\x03\x02\x02\x02\u028F\u0292\x03\x02" +
		"\x02\x02\u0290\u028E\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291" +
		"\x8F\x03\x02\x02\x02\u0292\u0290\x03\x02\x02\x02\u0293\u0294\x05v<\x02" +
		"\u0294\u0295\x05\x92J\x02\u0295\u0296\x05v<\x02\u0296\x91\x03\x02\x02" +
		"\x02\u0297\u0298\t\x06\x02\x02\u0298\x93\x03\x02\x02\x02\u0299\u029A\x05" +
		"0\x19\x02\u029A\u029B\x05Z.\x02\u029B\x95\x03\x02\x02\x02\u029C\u029F" +
		"\x05\x98M\x02\u029D\u029F\x05\x9CO\x02\u029E\u029C\x03\x02\x02\x02\u029E" +
		"\u029D\x03\x02\x02\x02\u029F\x97\x03\x02\x02\x02\u02A0\u02A1\x05\x9AN" +
		"\x02\u02A1\x99\x03\x02\x02\x02\u02A2\u02A3\x05\xA8U\x02\u02A3\x9B\x03" +
		"\x02\x02\x02\u02A4\u02A5\x05\x1C\x0F\x02\u02A5\u02A6\x071\x02\x02\u02A6" +
		"\u02A7\x05\x9EP\x02\u02A7\u02A8\x072\x02\x02\u02A8\x9D\x03\x02\x02\x02" +
		"\u02A9\u02AE\x05\xA0Q\x02\u02AA\u02AB\x07\v\x02\x02\u02AB\u02AD\x05\xA0" +
		"Q\x02\u02AC\u02AA\x03\x02\x02\x02\u02AD\u02B0\x03\x02\x02\x02\u02AE\u02AC" +
		"\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\x9F\x03\x02\x02\x02" +
		"\u02B0\u02AE\x03\x02\x02\x02\u02B1\u02B2\x05p9\x02\u02B2\xA1\x03\x02\x02" +
		"\x02\u02B3\u02B5\x05\xA4S\x02\u02B4\u02B3\x03\x02\x02\x02\u02B4\u02B5" +
		"\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02BB\x078\x02\x02" +
		"\u02B7\u02B9\x05\xA4S\x02\u02B8\u02B7\x03\x02\x02\x02\u02B8\u02B9\x03" +
		"\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BC\x078\x02\x02\u02BB" +
		"\u02B8\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02BB\x03\x02" +
		"\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\xA3\x03\x02\x02\x02\u02BF\u02C0" +
		"\x078\x02\x02\u02C0\xA5\x03\x02\x02\x02\u02C1\u02C3\x079\x02\x02\u02C2" +
		"\u02C1\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4\u02C2\x03\x02" +
		"\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\xA7\x03\x02\x02\x02\u02C6\u02CA" +
		"\x079\x02\x02\u02C7\u02C9\t\x07\x02\x02\u02C8\u02C7\x03\x02\x02\x02\u02C9" +
		"\u02CC\x03\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA\u02CB\x03\x02" +
		"\x02\x02\u02CB\xA9\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02\x02\u02CD\u02D2" +
		"\x079\x02\x02\u02CE\u02D2\x07:\x02\x02\u02CF\u02D2\x05\xACW\x02\u02D0" +
		"\u02D2\x05\xAEX\x02\u02D1\u02CD\x03\x02\x02\x02\u02D1\u02CE\x03\x02\x02" +
		"\x02\u02D1\u02CF\x03\x02\x02\x02\u02D1\u02D0\x03\x02\x02\x02\u02D2\xAB" +
		"\x03\x02\x02\x02\u02D3\u02D4\t\b\x02\x02\u02D4\xAD\x03\x02\x02\x02\u02D5" +
		"\u02DB\x05\xB0Y\x02\u02D6\u02DB\x07?\x02\x02\u02D7\u02DB\x05\xB2Z\x02" +
		"\u02D8\u02DB\x07@\x02\x02\u02D9\u02DB\x05\xB4[\x02\u02DA\u02D5\x03\x02" +
		"\x02\x02\u02DA\u02D6\x03\x02\x02\x02\u02DA\u02D7\x03\x02\x02\x02\u02DA" +
		"\u02D8\x03\x02\x02\x02\u02DA\u02D9\x03\x02\x02\x02\u02DB\xAF\x03\x02\x02" +
		"\x02\u02DC\u02DD\t\t\x02\x02\u02DD\xB1\x03\x02\x02\x02\u02DE\u02DF\t\n" +
		"\x02\x02\u02DF\xB3\x03\x02\x02\x02\u02E0\u02E1\t\v\x02\x02\u02E1\xB5\x03" +
		"\x02\x02\x02F\xB8\xBF\xCA\xCF\xD9\xE3\xE9\xF4\xF8\u0102\u010A\u0117\u012E" +
		"\u0132\u013A\u013E\u0141\u014E\u0161\u0167\u016D\u0170\u0177\u017F\u0184" +
		"\u018B\u018F\u0193\u0198\u019D\u01A2\u01A6\u01B4\u01B8\u01BC\u01C6\u01CF" +
		"\u01D6\u01DD\u01E3\u01E8\u01F6\u0207\u020B\u0218\u021E\u0226\u0229\u0231" +
		"\u023C\u0246\u0250\u0257\u025E\u0263\u026C\u0280\u028E\u0290\u029E\u02AE" +
		"\u02B4\u02B8\u02BD\u02C4\u02CA\u02D1\u02DA";
	public static readonly _serializedATN: string = Utils.join(
		[
			algol60Parser._serializedATNSegment0,
			algol60Parser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!algol60Parser.__ATN) {
			algol60Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(algol60Parser._serializedATN));
		}

		return algol60Parser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(algol60Parser.EOF, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public compound_statement(): Compound_statementContext | undefined {
		return this.tryGetRuleContext(0, Compound_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_program; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public block_head(): Block_headContext {
		return this.getRuleContext(0, Block_headContext);
	}
	public compound_tail(): Compound_tailContext {
		return this.getRuleContext(0, Compound_tailContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_block; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Block_headContext extends ParserRuleContext {
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_block_head; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterBlock_head) {
			listener.enterBlock_head(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitBlock_head) {
			listener.exitBlock_head(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitBlock_head) {
			return visitor.visitBlock_head(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_statementContext extends ParserRuleContext {
	public compound_tail(): Compound_tailContext {
		return this.getRuleContext(0, Compound_tailContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_compound_statement; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterCompound_statement) {
			listener.enterCompound_statement(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitCompound_statement) {
			listener.exitCompound_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitCompound_statement) {
			return visitor.visitCompound_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_tailContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_compound_tail; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterCompound_tail) {
			listener.enterCompound_tail(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitCompound_tail) {
			listener.exitCompound_tail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitCompound_tail) {
			return visitor.visitCompound_tail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public type_declaration(): Type_declarationContext | undefined {
		return this.tryGetRuleContext(0, Type_declarationContext);
	}
	public array_declaration(): Array_declarationContext | undefined {
		return this.tryGetRuleContext(0, Array_declarationContext);
	}
	public switch_declaration(): Switch_declarationContext | undefined {
		return this.tryGetRuleContext(0, Switch_declarationContext);
	}
	public procedure_declaration(): Procedure_declarationContext | undefined {
		return this.tryGetRuleContext(0, Procedure_declarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_declaration; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_declarationContext extends ParserRuleContext {
	public local_or_own_type(): Local_or_own_typeContext {
		return this.getRuleContext(0, Local_or_own_typeContext);
	}
	public type_list(): Type_listContext {
		return this.getRuleContext(0, Type_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_type_declaration; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterType_declaration) {
			listener.enterType_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitType_declaration) {
			listener.exitType_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitType_declaration) {
			return visitor.visitType_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Local_or_own_typeContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_local_or_own_type; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterLocal_or_own_type) {
			listener.enterLocal_or_own_type(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitLocal_or_own_type) {
			listener.exitLocal_or_own_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitLocal_or_own_type) {
			return visitor.visitLocal_or_own_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_type; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_listContext extends ParserRuleContext {
	public simple_variable(): Simple_variableContext[];
	public simple_variable(i: number): Simple_variableContext;
	public simple_variable(i?: number): Simple_variableContext | Simple_variableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Simple_variableContext);
		} else {
			return this.getRuleContext(i, Simple_variableContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_type_list; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterType_list) {
			listener.enterType_list(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitType_list) {
			listener.exitType_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitType_list) {
			return visitor.visitType_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_declarationContext extends ParserRuleContext {
	public array_list(): Array_listContext {
		return this.getRuleContext(0, Array_listContext);
	}
	public local_or_own_type(): Local_or_own_typeContext | undefined {
		return this.tryGetRuleContext(0, Local_or_own_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_array_declaration; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterArray_declaration) {
			listener.enterArray_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitArray_declaration) {
			listener.exitArray_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitArray_declaration) {
			return visitor.visitArray_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_listContext extends ParserRuleContext {
	public array_segment(): Array_segmentContext[];
	public array_segment(i: number): Array_segmentContext;
	public array_segment(i?: number): Array_segmentContext | Array_segmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Array_segmentContext);
		} else {
			return this.getRuleContext(i, Array_segmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_array_list; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterArray_list) {
			listener.enterArray_list(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitArray_list) {
			listener.exitArray_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitArray_list) {
			return visitor.visitArray_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_segmentContext extends ParserRuleContext {
	public array_identifier(): Array_identifierContext[];
	public array_identifier(i: number): Array_identifierContext;
	public array_identifier(i?: number): Array_identifierContext | Array_identifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Array_identifierContext);
		} else {
			return this.getRuleContext(i, Array_identifierContext);
		}
	}
	public bound_pair_list(): Bound_pair_listContext {
		return this.getRuleContext(0, Bound_pair_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_array_segment; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterArray_segment) {
			listener.enterArray_segment(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitArray_segment) {
			listener.exitArray_segment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitArray_segment) {
			return visitor.visitArray_segment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_identifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_array_identifier; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterArray_identifier) {
			listener.enterArray_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitArray_identifier) {
			listener.exitArray_identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitArray_identifier) {
			return visitor.visitArray_identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bound_pair_listContext extends ParserRuleContext {
	public bound_pair(): Bound_pairContext[];
	public bound_pair(i: number): Bound_pairContext;
	public bound_pair(i?: number): Bound_pairContext | Bound_pairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bound_pairContext);
		} else {
			return this.getRuleContext(i, Bound_pairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_bound_pair_list; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterBound_pair_list) {
			listener.enterBound_pair_list(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitBound_pair_list) {
			listener.exitBound_pair_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitBound_pair_list) {
			return visitor.visitBound_pair_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bound_pairContext extends ParserRuleContext {
	public lower_bound(): Lower_boundContext {
		return this.getRuleContext(0, Lower_boundContext);
	}
	public upper_bound(): Upper_boundContext {
		return this.getRuleContext(0, Upper_boundContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_bound_pair; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterBound_pair) {
			listener.enterBound_pair(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitBound_pair) {
			listener.exitBound_pair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitBound_pair) {
			return visitor.visitBound_pair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Upper_boundContext extends ParserRuleContext {
	public arithmetic_expression(): Arithmetic_expressionContext {
		return this.getRuleContext(0, Arithmetic_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_upper_bound; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterUpper_bound) {
			listener.enterUpper_bound(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitUpper_bound) {
			listener.exitUpper_bound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitUpper_bound) {
			return visitor.visitUpper_bound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lower_boundContext extends ParserRuleContext {
	public arithmetic_expression(): Arithmetic_expressionContext {
		return this.getRuleContext(0, Arithmetic_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_lower_bound; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterLower_bound) {
			listener.enterLower_bound(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitLower_bound) {
			listener.exitLower_bound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitLower_bound) {
			return visitor.visitLower_bound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_declarationContext extends ParserRuleContext {
	public switch_identifier(): Switch_identifierContext {
		return this.getRuleContext(0, Switch_identifierContext);
	}
	public switch_list(): Switch_listContext {
		return this.getRuleContext(0, Switch_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_switch_declaration; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterSwitch_declaration) {
			listener.enterSwitch_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitSwitch_declaration) {
			listener.exitSwitch_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitSwitch_declaration) {
			return visitor.visitSwitch_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_identifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_switch_identifier; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterSwitch_identifier) {
			listener.enterSwitch_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitSwitch_identifier) {
			listener.exitSwitch_identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitSwitch_identifier) {
			return visitor.visitSwitch_identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_listContext extends ParserRuleContext {
	public designational_expression(): Designational_expressionContext[];
	public designational_expression(i: number): Designational_expressionContext;
	public designational_expression(i?: number): Designational_expressionContext | Designational_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Designational_expressionContext);
		} else {
			return this.getRuleContext(i, Designational_expressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_switch_list; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterSwitch_list) {
			listener.enterSwitch_list(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitSwitch_list) {
			listener.exitSwitch_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitSwitch_list) {
			return visitor.visitSwitch_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Procedure_declarationContext extends ParserRuleContext {
	public procedure_heading(): Procedure_headingContext {
		return this.getRuleContext(0, Procedure_headingContext);
	}
	public procedure_body(): Procedure_bodyContext {
		return this.getRuleContext(0, Procedure_bodyContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_procedure_declaration; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterProcedure_declaration) {
			listener.enterProcedure_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitProcedure_declaration) {
			listener.exitProcedure_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitProcedure_declaration) {
			return visitor.visitProcedure_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Procedure_headingContext extends ParserRuleContext {
	public procedure_identifier(): Procedure_identifierContext {
		return this.getRuleContext(0, Procedure_identifierContext);
	}
	public formal_parameter_part(): Formal_parameter_partContext | undefined {
		return this.tryGetRuleContext(0, Formal_parameter_partContext);
	}
	public value_part(): Value_partContext | undefined {
		return this.tryGetRuleContext(0, Value_partContext);
	}
	public specification_part(): Specification_partContext | undefined {
		return this.tryGetRuleContext(0, Specification_partContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_procedure_heading; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterProcedure_heading) {
			listener.enterProcedure_heading(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitProcedure_heading) {
			listener.exitProcedure_heading(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitProcedure_heading) {
			return visitor.visitProcedure_heading(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Procedure_identifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_procedure_identifier; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterProcedure_identifier) {
			listener.enterProcedure_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitProcedure_identifier) {
			listener.exitProcedure_identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitProcedure_identifier) {
			return visitor.visitProcedure_identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Formal_parameter_partContext extends ParserRuleContext {
	public formal_parameter_list(): Formal_parameter_listContext {
		return this.getRuleContext(0, Formal_parameter_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_formal_parameter_part; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterFormal_parameter_part) {
			listener.enterFormal_parameter_part(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitFormal_parameter_part) {
			listener.exitFormal_parameter_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitFormal_parameter_part) {
			return visitor.visitFormal_parameter_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Formal_parameter_listContext extends ParserRuleContext {
	public formal_parameter(): Formal_parameterContext[];
	public formal_parameter(i: number): Formal_parameterContext;
	public formal_parameter(i?: number): Formal_parameterContext | Formal_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Formal_parameterContext);
		} else {
			return this.getRuleContext(i, Formal_parameterContext);
		}
	}
	public parameter_delimiter(): Parameter_delimiterContext[];
	public parameter_delimiter(i: number): Parameter_delimiterContext;
	public parameter_delimiter(i?: number): Parameter_delimiterContext | Parameter_delimiterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Parameter_delimiterContext);
		} else {
			return this.getRuleContext(i, Parameter_delimiterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_formal_parameter_list; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterFormal_parameter_list) {
			listener.enterFormal_parameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitFormal_parameter_list) {
			listener.exitFormal_parameter_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitFormal_parameter_list) {
			return visitor.visitFormal_parameter_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Formal_parameterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_formal_parameter; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterFormal_parameter) {
			listener.enterFormal_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitFormal_parameter) {
			listener.exitFormal_parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitFormal_parameter) {
			return visitor.visitFormal_parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_partContext extends ParserRuleContext {
	public identifier_list(): Identifier_listContext {
		return this.getRuleContext(0, Identifier_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_value_part; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterValue_part) {
			listener.enterValue_part(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitValue_part) {
			listener.exitValue_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitValue_part) {
			return visitor.visitValue_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Specification_partContext extends ParserRuleContext {
	public specifier(): SpecifierContext[];
	public specifier(i: number): SpecifierContext;
	public specifier(i?: number): SpecifierContext | SpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpecifierContext);
		} else {
			return this.getRuleContext(i, SpecifierContext);
		}
	}
	public identifier_list(): Identifier_listContext[];
	public identifier_list(i: number): Identifier_listContext;
	public identifier_list(i?: number): Identifier_listContext | Identifier_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Identifier_listContext);
		} else {
			return this.getRuleContext(i, Identifier_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_specification_part; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterSpecification_part) {
			listener.enterSpecification_part(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitSpecification_part) {
			listener.exitSpecification_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitSpecification_part) {
			return visitor.visitSpecification_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecifierContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(algol60Parser.STRING, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_specifier; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterSpecifier) {
			listener.enterSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitSpecifier) {
			listener.exitSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitSpecifier) {
			return visitor.visitSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Identifier_listContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_identifier_list; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterIdentifier_list) {
			listener.enterIdentifier_list(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitIdentifier_list) {
			listener.exitIdentifier_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitIdentifier_list) {
			return visitor.visitIdentifier_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Procedure_bodyContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_procedure_body; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterProcedure_body) {
			listener.enterProcedure_body(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitProcedure_body) {
			listener.exitProcedure_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitProcedure_body) {
			return visitor.visitProcedure_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public unconditional_statement(): Unconditional_statementContext | undefined {
		return this.tryGetRuleContext(0, Unconditional_statementContext);
	}
	public conditional_statement(): Conditional_statementContext | undefined {
		return this.tryGetRuleContext(0, Conditional_statementContext);
	}
	public for_statement(): For_statementContext | undefined {
		return this.tryGetRuleContext(0, For_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_statement; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unconditional_statementContext extends ParserRuleContext {
	public basic_statement(): Basic_statementContext | undefined {
		return this.tryGetRuleContext(0, Basic_statementContext);
	}
	public compound_statement(): Compound_statementContext | undefined {
		return this.tryGetRuleContext(0, Compound_statementContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_unconditional_statement; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterUnconditional_statement) {
			listener.enterUnconditional_statement(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitUnconditional_statement) {
			listener.exitUnconditional_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitUnconditional_statement) {
			return visitor.visitUnconditional_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Basic_statementContext extends ParserRuleContext {
	public label(): LabelContext[];
	public label(i: number): LabelContext;
	public label(i?: number): LabelContext | LabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelContext);
		} else {
			return this.getRuleContext(i, LabelContext);
		}
	}
	public unlabelled_basic_statement(): Unlabelled_basic_statementContext | undefined {
		return this.tryGetRuleContext(0, Unlabelled_basic_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_basic_statement; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterBasic_statement) {
			listener.enterBasic_statement(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitBasic_statement) {
			listener.exitBasic_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitBasic_statement) {
			return visitor.visitBasic_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public unsigned_integer(): Unsigned_integerContext | undefined {
		return this.tryGetRuleContext(0, Unsigned_integerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_label; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unlabelled_basic_statementContext extends ParserRuleContext {
	public assignment_statement(): Assignment_statementContext | undefined {
		return this.tryGetRuleContext(0, Assignment_statementContext);
	}
	public go_to_statement(): Go_to_statementContext | undefined {
		return this.tryGetRuleContext(0, Go_to_statementContext);
	}
	public procedure_statement(): Procedure_statementContext | undefined {
		return this.tryGetRuleContext(0, Procedure_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_unlabelled_basic_statement; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterUnlabelled_basic_statement) {
			listener.enterUnlabelled_basic_statement(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitUnlabelled_basic_statement) {
			listener.exitUnlabelled_basic_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitUnlabelled_basic_statement) {
			return visitor.visitUnlabelled_basic_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_statementContext extends ParserRuleContext {
	public left_part_list(): Left_part_listContext {
		return this.getRuleContext(0, Left_part_listContext);
	}
	public arithmetic_expression(): Arithmetic_expressionContext | undefined {
		return this.tryGetRuleContext(0, Arithmetic_expressionContext);
	}
	public boolean_expression(): Boolean_expressionContext | undefined {
		return this.tryGetRuleContext(0, Boolean_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_assignment_statement; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterAssignment_statement) {
			listener.enterAssignment_statement(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitAssignment_statement) {
			listener.exitAssignment_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitAssignment_statement) {
			return visitor.visitAssignment_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Left_part_listContext extends ParserRuleContext {
	public left_part(): Left_partContext[];
	public left_part(i: number): Left_partContext;
	public left_part(i?: number): Left_partContext | Left_partContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Left_partContext);
		} else {
			return this.getRuleContext(i, Left_partContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_left_part_list; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterLeft_part_list) {
			listener.enterLeft_part_list(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitLeft_part_list) {
			listener.exitLeft_part_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitLeft_part_list) {
			return visitor.visitLeft_part_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Left_partContext extends ParserRuleContext {
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public procedure_identifier(): Procedure_identifierContext | undefined {
		return this.tryGetRuleContext(0, Procedure_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_left_part; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterLeft_part) {
			listener.enterLeft_part(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitLeft_part) {
			listener.exitLeft_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitLeft_part) {
			return visitor.visitLeft_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Go_to_statementContext extends ParserRuleContext {
	public designational_expression(): Designational_expressionContext {
		return this.getRuleContext(0, Designational_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_go_to_statement; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterGo_to_statement) {
			listener.enterGo_to_statement(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitGo_to_statement) {
			listener.exitGo_to_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitGo_to_statement) {
			return visitor.visitGo_to_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Designational_expressionContext extends ParserRuleContext {
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	public switch_designator(): Switch_designatorContext | undefined {
		return this.tryGetRuleContext(0, Switch_designatorContext);
	}
	public if_clause(): If_clauseContext | undefined {
		return this.tryGetRuleContext(0, If_clauseContext);
	}
	public designational_expression(): Designational_expressionContext[];
	public designational_expression(i: number): Designational_expressionContext;
	public designational_expression(i?: number): Designational_expressionContext | Designational_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Designational_expressionContext);
		} else {
			return this.getRuleContext(i, Designational_expressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_designational_expression; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterDesignational_expression) {
			listener.enterDesignational_expression(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitDesignational_expression) {
			listener.exitDesignational_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitDesignational_expression) {
			return visitor.visitDesignational_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_designatorContext extends ParserRuleContext {
	public switch_identifier(): Switch_identifierContext {
		return this.getRuleContext(0, Switch_identifierContext);
	}
	public subscript_expression(): Subscript_expressionContext | undefined {
		return this.tryGetRuleContext(0, Subscript_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_switch_designator; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterSwitch_designator) {
			listener.enterSwitch_designator(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitSwitch_designator) {
			listener.exitSwitch_designator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitSwitch_designator) {
			return visitor.visitSwitch_designator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Procedure_statementContext extends ParserRuleContext {
	public procedure_identifier(): Procedure_identifierContext {
		return this.getRuleContext(0, Procedure_identifierContext);
	}
	public actual_parameter_part(): Actual_parameter_partContext | undefined {
		return this.tryGetRuleContext(0, Actual_parameter_partContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_procedure_statement; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterProcedure_statement) {
			listener.enterProcedure_statement(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitProcedure_statement) {
			listener.exitProcedure_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitProcedure_statement) {
			return visitor.visitProcedure_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Actual_parameter_partContext extends ParserRuleContext {
	public actual_parameter_list(): Actual_parameter_listContext {
		return this.getRuleContext(0, Actual_parameter_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_actual_parameter_part; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterActual_parameter_part) {
			listener.enterActual_parameter_part(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitActual_parameter_part) {
			listener.exitActual_parameter_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitActual_parameter_part) {
			return visitor.visitActual_parameter_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Actual_parameter_listContext extends ParserRuleContext {
	public actual_parameter(): Actual_parameterContext[];
	public actual_parameter(i: number): Actual_parameterContext;
	public actual_parameter(i?: number): Actual_parameterContext | Actual_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Actual_parameterContext);
		} else {
			return this.getRuleContext(i, Actual_parameterContext);
		}
	}
	public parameter_delimiter(): Parameter_delimiterContext[];
	public parameter_delimiter(i: number): Parameter_delimiterContext;
	public parameter_delimiter(i?: number): Parameter_delimiterContext | Parameter_delimiterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Parameter_delimiterContext);
		} else {
			return this.getRuleContext(i, Parameter_delimiterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_actual_parameter_list; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterActual_parameter_list) {
			listener.enterActual_parameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitActual_parameter_list) {
			listener.exitActual_parameter_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitActual_parameter_list) {
			return visitor.visitActual_parameter_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_delimiterContext extends ParserRuleContext {
	public letter_string(): Letter_stringContext | undefined {
		return this.tryGetRuleContext(0, Letter_stringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_parameter_delimiter; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterParameter_delimiter) {
			listener.enterParameter_delimiter(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitParameter_delimiter) {
			listener.exitParameter_delimiter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitParameter_delimiter) {
			return visitor.visitParameter_delimiter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Actual_parameterContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(algol60Parser.STRING, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public array_identifier(): Array_identifierContext | undefined {
		return this.tryGetRuleContext(0, Array_identifierContext);
	}
	public switch_identifier(): Switch_identifierContext | undefined {
		return this.tryGetRuleContext(0, Switch_identifierContext);
	}
	public procedure_identifier(): Procedure_identifierContext | undefined {
		return this.tryGetRuleContext(0, Procedure_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_actual_parameter; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterActual_parameter) {
			listener.enterActual_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitActual_parameter) {
			listener.exitActual_parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitActual_parameter) {
			return visitor.visitActual_parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_statementContext extends ParserRuleContext {
	public label(): LabelContext[];
	public label(i: number): LabelContext;
	public label(i?: number): LabelContext | LabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelContext);
		} else {
			return this.getRuleContext(i, LabelContext);
		}
	}
	public if_statement(): If_statementContext | undefined {
		return this.tryGetRuleContext(0, If_statementContext);
	}
	public if_clause(): If_clauseContext | undefined {
		return this.tryGetRuleContext(0, If_clauseContext);
	}
	public for_statement(): For_statementContext | undefined {
		return this.tryGetRuleContext(0, For_statementContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_conditional_statement; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterConditional_statement) {
			listener.enterConditional_statement(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitConditional_statement) {
			listener.exitConditional_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitConditional_statement) {
			return visitor.visitConditional_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_statementContext extends ParserRuleContext {
	public if_clause(): If_clauseContext {
		return this.getRuleContext(0, If_clauseContext);
	}
	public unconditional_statement(): Unconditional_statementContext {
		return this.getRuleContext(0, Unconditional_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_if_statement; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterIf_statement) {
			listener.enterIf_statement(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitIf_statement) {
			listener.exitIf_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitIf_statement) {
			return visitor.visitIf_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_clauseContext extends ParserRuleContext {
	public boolean_expression(): Boolean_expressionContext {
		return this.getRuleContext(0, Boolean_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_if_clause; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterIf_clause) {
			listener.enterIf_clause(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitIf_clause) {
			listener.exitIf_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitIf_clause) {
			return visitor.visitIf_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_statementContext extends ParserRuleContext {
	public for_clause(): For_clauseContext {
		return this.getRuleContext(0, For_clauseContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public label(): LabelContext[];
	public label(i: number): LabelContext;
	public label(i?: number): LabelContext | LabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelContext);
		} else {
			return this.getRuleContext(i, LabelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_for_statement; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterFor_statement) {
			listener.enterFor_statement(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitFor_statement) {
			listener.exitFor_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitFor_statement) {
			return visitor.visitFor_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_clauseContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public for_list(): For_listContext {
		return this.getRuleContext(0, For_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_for_clause; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterFor_clause) {
			listener.enterFor_clause(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitFor_clause) {
			listener.exitFor_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitFor_clause) {
			return visitor.visitFor_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_listContext extends ParserRuleContext {
	public for_list_element(): For_list_elementContext[];
	public for_list_element(i: number): For_list_elementContext;
	public for_list_element(i?: number): For_list_elementContext | For_list_elementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(For_list_elementContext);
		} else {
			return this.getRuleContext(i, For_list_elementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_for_list; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterFor_list) {
			listener.enterFor_list(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitFor_list) {
			listener.exitFor_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitFor_list) {
			return visitor.visitFor_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_list_elementContext extends ParserRuleContext {
	public arithmetic_expression(): Arithmetic_expressionContext | undefined {
		return this.tryGetRuleContext(0, Arithmetic_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_for_list_element; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterFor_list_element) {
			listener.enterFor_list_element(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitFor_list_element) {
			listener.exitFor_list_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitFor_list_element) {
			return visitor.visitFor_list_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Arithmetic_expressionContext extends ParserRuleContext {
	public arithmetic_expression(): Arithmetic_expressionContext[];
	public arithmetic_expression(i: number): Arithmetic_expressionContext;
	public arithmetic_expression(i?: number): Arithmetic_expressionContext | Arithmetic_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Arithmetic_expressionContext);
		} else {
			return this.getRuleContext(i, Arithmetic_expressionContext);
		}
	}
	public boolean_expression(): Boolean_expressionContext | undefined {
		return this.tryGetRuleContext(0, Boolean_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_arithmetic_expression; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterArithmetic_expression) {
			listener.enterArithmetic_expression(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitArithmetic_expression) {
			listener.exitArithmetic_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitArithmetic_expression) {
			return visitor.visitArithmetic_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public arithmetic_expression(): Arithmetic_expressionContext | undefined {
		return this.tryGetRuleContext(0, Arithmetic_expressionContext);
	}
	public boolean_expression(): Boolean_expressionContext | undefined {
		return this.tryGetRuleContext(0, Boolean_expressionContext);
	}
	public designational_expression(): Designational_expressionContext | undefined {
		return this.tryGetRuleContext(0, Designational_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_expression; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Arithmetic_expression2Context extends ParserRuleContext {
	public simple_arithmetic_expression(): Simple_arithmetic_expressionContext {
		return this.getRuleContext(0, Simple_arithmetic_expressionContext);
	}
	public if_clause(): If_clauseContext | undefined {
		return this.tryGetRuleContext(0, If_clauseContext);
	}
	public arithmetic_expression(): Arithmetic_expressionContext | undefined {
		return this.tryGetRuleContext(0, Arithmetic_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_arithmetic_expression2; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterArithmetic_expression2) {
			listener.enterArithmetic_expression2(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitArithmetic_expression2) {
			listener.exitArithmetic_expression2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitArithmetic_expression2) {
			return visitor.visitArithmetic_expression2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_arithmetic_expressionContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public adding_operator(): Adding_operatorContext[];
	public adding_operator(i: number): Adding_operatorContext;
	public adding_operator(i?: number): Adding_operatorContext | Adding_operatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Adding_operatorContext);
		} else {
			return this.getRuleContext(i, Adding_operatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_simple_arithmetic_expression; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterSimple_arithmetic_expression) {
			listener.enterSimple_arithmetic_expression(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitSimple_arithmetic_expression) {
			listener.exitSimple_arithmetic_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitSimple_arithmetic_expression) {
			return visitor.visitSimple_arithmetic_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Adding_operatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_adding_operator; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterAdding_operator) {
			listener.enterAdding_operator(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitAdding_operator) {
			listener.exitAdding_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitAdding_operator) {
			return visitor.visitAdding_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public factor(): FactorContext[];
	public factor(i: number): FactorContext;
	public factor(i?: number): FactorContext | FactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorContext);
		} else {
			return this.getRuleContext(i, FactorContext);
		}
	}
	public multiplying_operator(): Multiplying_operatorContext[];
	public multiplying_operator(i: number): Multiplying_operatorContext;
	public multiplying_operator(i?: number): Multiplying_operatorContext | Multiplying_operatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Multiplying_operatorContext);
		} else {
			return this.getRuleContext(i, Multiplying_operatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_term; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multiplying_operatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_multiplying_operator; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterMultiplying_operator) {
			listener.enterMultiplying_operator(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitMultiplying_operator) {
			listener.exitMultiplying_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitMultiplying_operator) {
			return visitor.visitMultiplying_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public primary(): PrimaryContext[];
	public primary(i: number): PrimaryContext;
	public primary(i?: number): PrimaryContext | PrimaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryContext);
		} else {
			return this.getRuleContext(i, PrimaryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_factor; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitFactor) {
			return visitor.visitFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public unsigned_number(): Unsigned_numberContext | undefined {
		return this.tryGetRuleContext(0, Unsigned_numberContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public function_designator(): Function_designatorContext | undefined {
		return this.tryGetRuleContext(0, Function_designatorContext);
	}
	public arithmetic_expression(): Arithmetic_expressionContext | undefined {
		return this.tryGetRuleContext(0, Arithmetic_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_primary; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unsigned_numberContext extends ParserRuleContext {
	public decimal_number(): Decimal_numberContext | undefined {
		return this.tryGetRuleContext(0, Decimal_numberContext);
	}
	public exponential_part(): Exponential_partContext | undefined {
		return this.tryGetRuleContext(0, Exponential_partContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_unsigned_number; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterUnsigned_number) {
			listener.enterUnsigned_number(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitUnsigned_number) {
			listener.exitUnsigned_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitUnsigned_number) {
			return visitor.visitUnsigned_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Decimal_numberContext extends ParserRuleContext {
	public unsigned_integer(): Unsigned_integerContext | undefined {
		return this.tryGetRuleContext(0, Unsigned_integerContext);
	}
	public decimal_fraction(): Decimal_fractionContext | undefined {
		return this.tryGetRuleContext(0, Decimal_fractionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_decimal_number; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterDecimal_number) {
			listener.enterDecimal_number(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitDecimal_number) {
			listener.exitDecimal_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitDecimal_number) {
			return visitor.visitDecimal_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unsigned_integerContext extends ParserRuleContext {
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(algol60Parser.DIGIT);
		} else {
			return this.getToken(algol60Parser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_unsigned_integer; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterUnsigned_integer) {
			listener.enterUnsigned_integer(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitUnsigned_integer) {
			listener.exitUnsigned_integer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitUnsigned_integer) {
			return visitor.visitUnsigned_integer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Decimal_fractionContext extends ParserRuleContext {
	public unsigned_integer(): Unsigned_integerContext {
		return this.getRuleContext(0, Unsigned_integerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_decimal_fraction; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterDecimal_fraction) {
			listener.enterDecimal_fraction(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitDecimal_fraction) {
			listener.exitDecimal_fraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitDecimal_fraction) {
			return visitor.visitDecimal_fraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exponential_partContext extends ParserRuleContext {
	public integer(): IntegerContext {
		return this.getRuleContext(0, IntegerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_exponential_part; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterExponential_part) {
			listener.enterExponential_part(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitExponential_part) {
			listener.exitExponential_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitExponential_part) {
			return visitor.visitExponential_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public unsigned_integer(): Unsigned_integerContext {
		return this.getRuleContext(0, Unsigned_integerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_integer; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitInteger) {
			return visitor.visitInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Boolean_expressionContext extends ParserRuleContext {
	public if_clause(): If_clauseContext | undefined {
		return this.tryGetRuleContext(0, If_clauseContext);
	}
	public boolean_expression(): Boolean_expressionContext[];
	public boolean_expression(i: number): Boolean_expressionContext;
	public boolean_expression(i?: number): Boolean_expressionContext | Boolean_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Boolean_expressionContext);
		} else {
			return this.getRuleContext(i, Boolean_expressionContext);
		}
	}
	public logical_value(): Logical_valueContext | undefined {
		return this.tryGetRuleContext(0, Logical_valueContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public function_designator(): Function_designatorContext | undefined {
		return this.tryGetRuleContext(0, Function_designatorContext);
	}
	public relation(): RelationContext | undefined {
		return this.tryGetRuleContext(0, RelationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_boolean_expression; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterBoolean_expression) {
			listener.enterBoolean_expression(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitBoolean_expression) {
			listener.exitBoolean_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitBoolean_expression) {
			return visitor.visitBoolean_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationContext extends ParserRuleContext {
	public simple_arithmetic_expression(): Simple_arithmetic_expressionContext[];
	public simple_arithmetic_expression(i: number): Simple_arithmetic_expressionContext;
	public simple_arithmetic_expression(i?: number): Simple_arithmetic_expressionContext | Simple_arithmetic_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Simple_arithmetic_expressionContext);
		} else {
			return this.getRuleContext(i, Simple_arithmetic_expressionContext);
		}
	}
	public relational_operator(): Relational_operatorContext {
		return this.getRuleContext(0, Relational_operatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_relation; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterRelation) {
			listener.enterRelation(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitRelation) {
			listener.exitRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitRelation) {
			return visitor.visitRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Relational_operatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_relational_operator; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterRelational_operator) {
			listener.enterRelational_operator(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitRelational_operator) {
			listener.exitRelational_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitRelational_operator) {
			return visitor.visitRelational_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_designatorContext extends ParserRuleContext {
	public procedure_identifier(): Procedure_identifierContext {
		return this.getRuleContext(0, Procedure_identifierContext);
	}
	public actual_parameter_part(): Actual_parameter_partContext {
		return this.getRuleContext(0, Actual_parameter_partContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_function_designator; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterFunction_designator) {
			listener.enterFunction_designator(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitFunction_designator) {
			listener.exitFunction_designator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitFunction_designator) {
			return visitor.visitFunction_designator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public simple_variable(): Simple_variableContext | undefined {
		return this.tryGetRuleContext(0, Simple_variableContext);
	}
	public subscripted_variable(): Subscripted_variableContext | undefined {
		return this.tryGetRuleContext(0, Subscripted_variableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_variable; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_variableContext extends ParserRuleContext {
	public variable_identifier(): Variable_identifierContext {
		return this.getRuleContext(0, Variable_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_simple_variable; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterSimple_variable) {
			listener.enterSimple_variable(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitSimple_variable) {
			listener.exitSimple_variable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitSimple_variable) {
			return visitor.visitSimple_variable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variable_identifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_variable_identifier; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterVariable_identifier) {
			listener.enterVariable_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitVariable_identifier) {
			listener.exitVariable_identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitVariable_identifier) {
			return visitor.visitVariable_identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Subscripted_variableContext extends ParserRuleContext {
	public array_identifier(): Array_identifierContext {
		return this.getRuleContext(0, Array_identifierContext);
	}
	public subscript_list(): Subscript_listContext {
		return this.getRuleContext(0, Subscript_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_subscripted_variable; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterSubscripted_variable) {
			listener.enterSubscripted_variable(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitSubscripted_variable) {
			listener.exitSubscripted_variable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitSubscripted_variable) {
			return visitor.visitSubscripted_variable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Subscript_listContext extends ParserRuleContext {
	public subscript_expression(): Subscript_expressionContext[];
	public subscript_expression(i: number): Subscript_expressionContext;
	public subscript_expression(i?: number): Subscript_expressionContext | Subscript_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Subscript_expressionContext);
		} else {
			return this.getRuleContext(i, Subscript_expressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_subscript_list; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterSubscript_list) {
			listener.enterSubscript_list(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitSubscript_list) {
			listener.exitSubscript_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitSubscript_list) {
			return visitor.visitSubscript_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Subscript_expressionContext extends ParserRuleContext {
	public arithmetic_expression(): Arithmetic_expressionContext {
		return this.getRuleContext(0, Arithmetic_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_subscript_expression; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterSubscript_expression) {
			listener.enterSubscript_expression(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitSubscript_expression) {
			listener.exitSubscript_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitSubscript_expression) {
			return visitor.visitSubscript_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Open_stringContext extends ParserRuleContext {
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(algol60Parser.STRING);
		} else {
			return this.getToken(algol60Parser.STRING, i);
		}
	}
	public proper_string(): Proper_stringContext[];
	public proper_string(i: number): Proper_stringContext;
	public proper_string(i?: number): Proper_stringContext | Proper_stringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Proper_stringContext);
		} else {
			return this.getRuleContext(i, Proper_stringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_open_string; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterOpen_string) {
			listener.enterOpen_string(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitOpen_string) {
			listener.exitOpen_string(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitOpen_string) {
			return visitor.visitOpen_string(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Proper_stringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(algol60Parser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_proper_string; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterProper_string) {
			listener.enterProper_string(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitProper_string) {
			listener.exitProper_string(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitProper_string) {
			return visitor.visitProper_string(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Letter_stringContext extends ParserRuleContext {
	public LETTER(): TerminalNode[];
	public LETTER(i: number): TerminalNode;
	public LETTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(algol60Parser.LETTER);
		} else {
			return this.getToken(algol60Parser.LETTER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_letter_string; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterLetter_string) {
			listener.enterLetter_string(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitLetter_string) {
			listener.exitLetter_string(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitLetter_string) {
			return visitor.visitLetter_string(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public LETTER(): TerminalNode[];
	public LETTER(i: number): TerminalNode;
	public LETTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(algol60Parser.LETTER);
		} else {
			return this.getToken(algol60Parser.LETTER, i);
		}
	}
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(algol60Parser.DIGIT);
		} else {
			return this.getToken(algol60Parser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_identifier; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Basic_symbolContext extends ParserRuleContext {
	public LETTER(): TerminalNode | undefined { return this.tryGetToken(algol60Parser.LETTER, 0); }
	public DIGIT(): TerminalNode | undefined { return this.tryGetToken(algol60Parser.DIGIT, 0); }
	public logical_value(): Logical_valueContext | undefined {
		return this.tryGetRuleContext(0, Logical_valueContext);
	}
	public delimiter(): DelimiterContext | undefined {
		return this.tryGetRuleContext(0, DelimiterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_basic_symbol; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterBasic_symbol) {
			listener.enterBasic_symbol(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitBasic_symbol) {
			listener.exitBasic_symbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitBasic_symbol) {
			return visitor.visitBasic_symbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Logical_valueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_logical_value; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterLogical_value) {
			listener.enterLogical_value(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitLogical_value) {
			listener.exitLogical_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitLogical_value) {
			return visitor.visitLogical_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DelimiterContext extends ParserRuleContext {
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	public SEPARATOR(): TerminalNode | undefined { return this.tryGetToken(algol60Parser.SEPARATOR, 0); }
	public bracket(): BracketContext | undefined {
		return this.tryGetRuleContext(0, BracketContext);
	}
	public DECLARATOR(): TerminalNode | undefined { return this.tryGetToken(algol60Parser.DECLARATOR, 0); }
	public specificator(): SpecificatorContext | undefined {
		return this.tryGetRuleContext(0, SpecificatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_delimiter; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterDelimiter) {
			listener.enterDelimiter(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitDelimiter) {
			listener.exitDelimiter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitDelimiter) {
			return visitor.visitDelimiter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	public ARITHMETIC_OPERATOR(): TerminalNode | undefined { return this.tryGetToken(algol60Parser.ARITHMETIC_OPERATOR, 0); }
	public RELATIONAL_OPERATOR(): TerminalNode | undefined { return this.tryGetToken(algol60Parser.RELATIONAL_OPERATOR, 0); }
	public LOGICAL_OPERATOR(): TerminalNode | undefined { return this.tryGetToken(algol60Parser.LOGICAL_OPERATOR, 0); }
	public SEQUENTIAL_OPERATOR(): TerminalNode | undefined { return this.tryGetToken(algol60Parser.SEQUENTIAL_OPERATOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_operator; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterOperator) {
			listener.enterOperator(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitOperator) {
			listener.exitOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitOperator) {
			return visitor.visitOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BracketContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_bracket; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterBracket) {
			listener.enterBracket(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitBracket) {
			listener.exitBracket(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitBracket) {
			return visitor.visitBracket(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecificatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return algol60Parser.RULE_specificator; }
	// @Override
	public enterRule(listener: algol60Listener): void {
		if (listener.enterSpecificator) {
			listener.enterSpecificator(this);
		}
	}
	// @Override
	public exitRule(listener: algol60Listener): void {
		if (listener.exitSpecificator) {
			listener.exitSpecificator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: algol60Visitor<Result>): Result {
		if (visitor.visitSpecificator) {
			return visitor.visitSpecificator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


