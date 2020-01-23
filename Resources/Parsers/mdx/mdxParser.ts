// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/mdx/mdx.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { mdxListener } from "./mdxListener";
import { mdxVisitor } from "./mdxVisitor";


export class mdxParser extends Parser {
	public static readonly QUOTE = 1;
	public static readonly ASTERISK = 2;
	public static readonly COLON = 3;
	public static readonly SEMICOLON = 4;
	public static readonly COMMA = 5;
	public static readonly CONCAT = 6;
	public static readonly DOT = 7;
	public static readonly EQ = 8;
	public static readonly GE = 9;
	public static readonly GT = 10;
	public static readonly LBRACE = 11;
	public static readonly LE = 12;
	public static readonly LPAREN = 13;
	public static readonly LT = 14;
	public static readonly MINUS = 15;
	public static readonly NE = 16;
	public static readonly PLUS = 17;
	public static readonly RBRACE = 18;
	public static readonly RPAREN = 19;
	public static readonly SOLIDUS = 20;
	public static readonly AND = 21;
	public static readonly AS = 22;
	public static readonly CASE = 23;
	public static readonly CELL = 24;
	public static readonly CELL_ORDINAL = 25;
	public static readonly CREATE = 26;
	public static readonly DIMENSION = 27;
	public static readonly ELSE = 28;
	public static readonly EMPTY = 29;
	public static readonly END = 30;
	public static readonly FORMATTED_VALUE = 31;
	public static readonly FROM = 32;
	public static readonly GLOBAL = 33;
	public static readonly MEMBER = 34;
	public static readonly NON = 35;
	public static readonly NOT = 36;
	public static readonly ON = 37;
	public static readonly OR = 38;
	public static readonly PROPERTIES = 39;
	public static readonly SELECT = 40;
	public static readonly SESSION = 41;
	public static readonly SET = 42;
	public static readonly THEN = 43;
	public static readonly VALUE = 44;
	public static readonly WHEN = 45;
	public static readonly WHERE = 46;
	public static readonly XOR = 47;
	public static readonly WITH = 48;
	public static readonly NUMBER = 49;
	public static readonly F = 50;
	public static readonly ID = 51;
	public static readonly AMP_QUOTED_ID = 52;
	public static readonly QUOTED_ID = 53;
	public static readonly STRING = 54;
	public static readonly WS = 55;
	public static readonly RULE_mdx_statement = 0;
	public static readonly RULE_select_statement = 1;
	public static readonly RULE_formula_specification = 2;
	public static readonly RULE_single_formula_specification = 3;
	public static readonly RULE_set_specification = 4;
	public static readonly RULE_member_specification = 5;
	public static readonly RULE_axis_specification_list = 6;
	public static readonly RULE_member_property_def_list = 7;
	public static readonly RULE_member_name = 8;
	public static readonly RULE_member_property_definition = 9;
	public static readonly RULE_set_name = 10;
	public static readonly RULE_compound_id = 11;
	public static readonly RULE_axis_specification = 12;
	public static readonly RULE_axis_name = 13;
	public static readonly RULE_dim_props = 14;
	public static readonly RULE_property_list = 15;
	public static readonly RULE_property = 16;
	public static readonly RULE_cube_specification = 17;
	public static readonly RULE_cube_name = 18;
	public static readonly RULE_slicer_specification = 19;
	public static readonly RULE_cell_props = 20;
	public static readonly RULE_cell_property_list = 21;
	public static readonly RULE_cell_property = 22;
	public static readonly RULE_mandatory_cell_property = 23;
	public static readonly RULE_provider_specific_cell_property = 24;
	public static readonly RULE_expression = 25;
	public static readonly RULE_value_expression = 26;
	public static readonly RULE_value_xor_expression = 27;
	public static readonly RULE_value_or_expression = 28;
	public static readonly RULE_term5 = 29;
	public static readonly RULE_term4 = 30;
	public static readonly RULE_term3 = 31;
	public static readonly RULE_term2 = 32;
	public static readonly RULE_term = 33;
	public static readonly RULE_factor = 34;
	public static readonly RULE_function = 35;
	public static readonly RULE_value_expression_primary = 36;
	public static readonly RULE_value_expression_primary0 = 37;
	public static readonly RULE_exp_list = 38;
	public static readonly RULE_case_expression = 39;
	public static readonly RULE_when_list = 40;
	public static readonly RULE_when_clause = 41;
	public static readonly RULE_comp_op = 42;
	public static readonly RULE_identifier = 43;
	public static readonly RULE_unquoted_identifier = 44;
	public static readonly RULE_amp_quoted_identifier = 45;
	public static readonly RULE_quoted_identifier = 46;
	public static readonly RULE_keyword = 47;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"mdx_statement", "select_statement", "formula_specification", "single_formula_specification", 
		"set_specification", "member_specification", "axis_specification_list", 
		"member_property_def_list", "member_name", "member_property_definition", 
		"set_name", "compound_id", "axis_specification", "axis_name", "dim_props", 
		"property_list", "property", "cube_specification", "cube_name", "slicer_specification", 
		"cell_props", "cell_property_list", "cell_property", "mandatory_cell_property", 
		"provider_specific_cell_property", "expression", "value_expression", "value_xor_expression", 
		"value_or_expression", "term5", "term4", "term3", "term2", "term", "factor", 
		"function", "value_expression_primary", "value_expression_primary0", "exp_list", 
		"case_expression", "when_list", "when_clause", "comp_op", "identifier", 
		"unquoted_identifier", "amp_quoted_identifier", "quoted_identifier", "keyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'''", "'*'", "':'", "';'", "','", "'||'", "'.'", "'='", "'>='", 
		"'>'", "'{'", "'<='", "'('", "'<'", "'-'", "'<>'", "'+'", "'}'", "')'", 
		"'/'", "'AND'", "'AS'", "'CASE'", "'CELL'", "'CELL_ORDINAL'", "'CREATE'", 
		"'DIMENSION'", "'ELSE'", "'EMPTY'", "'END'", "'FORMATTED_VALUE'", "'FROM'", 
		"'GLOBAL'", "'MEMBER'", "'NON'", "'NOT'", "'ON'", "'OR'", "'PROPERTIES'", 
		"'SELECT'", "'SESSION'", "'SET'", "'THEN'", "'VALUE'", "'WHEN'", "'WHERE'", 
		"'XOR'", "'WITH'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "QUOTE", "ASTERISK", "COLON", "SEMICOLON", "COMMA", "CONCAT", 
		"DOT", "EQ", "GE", "GT", "LBRACE", "LE", "LPAREN", "LT", "MINUS", "NE", 
		"PLUS", "RBRACE", "RPAREN", "SOLIDUS", "AND", "AS", "CASE", "CELL", "CELL_ORDINAL", 
		"CREATE", "DIMENSION", "ELSE", "EMPTY", "END", "FORMATTED_VALUE", "FROM", 
		"GLOBAL", "MEMBER", "NON", "NOT", "ON", "OR", "PROPERTIES", "SELECT", 
		"SESSION", "SET", "THEN", "VALUE", "WHEN", "WHERE", "XOR", "WITH", "NUMBER", 
		"F", "ID", "AMP_QUOTED_ID", "QUOTED_ID", "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(mdxParser._LITERAL_NAMES, mdxParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return mdxParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "mdx.g4"; }

	// @Override
	public get ruleNames(): string[] { return mdxParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return mdxParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(mdxParser._ATN, this);
	}
	// @RuleVersion(0)
	public mdx_statement(): Mdx_statementContext {
		let _localctx: Mdx_statementContext = new Mdx_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, mdxParser.RULE_mdx_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 96;
			this.select_statement();
			}
			this.state = 97;
			this.match(mdxParser.EOF);
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
	public select_statement(): Select_statementContext {
		let _localctx: Select_statementContext = new Select_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, mdxParser.RULE_select_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdxParser.WITH) {
				{
				this.state = 99;
				this.match(mdxParser.WITH);
				this.state = 100;
				this.formula_specification();
				}
			}

			this.state = 103;
			this.match(mdxParser.SELECT);
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mdxParser.LBRACE) | (1 << mdxParser.LPAREN) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS) | (1 << mdxParser.CASE) | (1 << mdxParser.DIMENSION))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (mdxParser.NON - 35)) | (1 << (mdxParser.NOT - 35)) | (1 << (mdxParser.PROPERTIES - 35)) | (1 << (mdxParser.NUMBER - 35)) | (1 << (mdxParser.ID - 35)) | (1 << (mdxParser.QUOTED_ID - 35)) | (1 << (mdxParser.STRING - 35)))) !== 0)) {
				{
				this.state = 104;
				this.axis_specification_list();
				}
			}

			this.state = 107;
			this.match(mdxParser.FROM);
			this.state = 108;
			this.cube_specification();
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdxParser.WHERE) {
				{
				this.state = 109;
				this.match(mdxParser.WHERE);
				this.state = 110;
				this.slicer_specification();
				}
			}

			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdxParser.CELL || _la === mdxParser.PROPERTIES) {
				{
				this.state = 113;
				this.cell_props();
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
	public formula_specification(): Formula_specificationContext {
		let _localctx: Formula_specificationContext = new Formula_specificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, mdxParser.RULE_formula_specification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 116;
				this.single_formula_specification();
				}
				}
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === mdxParser.MEMBER || _la === mdxParser.SET);
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
	public single_formula_specification(): Single_formula_specificationContext {
		let _localctx: Single_formula_specificationContext = new Single_formula_specificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, mdxParser.RULE_single_formula_specification);
		try {
			this.state = 123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mdxParser.MEMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 121;
				this.member_specification();
				}
				break;
			case mdxParser.SET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 122;
				this.set_specification();
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
	public set_specification(): Set_specificationContext {
		let _localctx: Set_specificationContext = new Set_specificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, mdxParser.RULE_set_specification);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(mdxParser.SET);
			this.state = 126;
			this.set_name();
			this.state = 127;
			this.match(mdxParser.AS);
			this.state = 133;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mdxParser.QUOTE:
				{
				this.state = 128;
				this.match(mdxParser.QUOTE);
				this.state = 129;
				this.expression();
				this.state = 130;
				this.match(mdxParser.QUOTE);
				}
				break;
			case mdxParser.LBRACE:
			case mdxParser.LPAREN:
			case mdxParser.MINUS:
			case mdxParser.PLUS:
			case mdxParser.CASE:
			case mdxParser.DIMENSION:
			case mdxParser.NOT:
			case mdxParser.PROPERTIES:
			case mdxParser.NUMBER:
			case mdxParser.ID:
			case mdxParser.QUOTED_ID:
			case mdxParser.STRING:
				{
				this.state = 132;
				this.expression();
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
	public member_specification(): Member_specificationContext {
		let _localctx: Member_specificationContext = new Member_specificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, mdxParser.RULE_member_specification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(mdxParser.MEMBER);
			this.state = 136;
			this.member_name();
			this.state = 137;
			this.match(mdxParser.AS);
			{
			this.state = 143;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mdxParser.QUOTE:
				{
				this.state = 138;
				this.match(mdxParser.QUOTE);
				this.state = 139;
				this.value_expression();
				this.state = 140;
				this.match(mdxParser.QUOTE);
				}
				break;
			case mdxParser.LBRACE:
			case mdxParser.LPAREN:
			case mdxParser.MINUS:
			case mdxParser.PLUS:
			case mdxParser.CASE:
			case mdxParser.DIMENSION:
			case mdxParser.NOT:
			case mdxParser.PROPERTIES:
			case mdxParser.NUMBER:
			case mdxParser.ID:
			case mdxParser.QUOTED_ID:
			case mdxParser.STRING:
				{
				this.state = 142;
				this.value_expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 145;
			this.match(mdxParser.COMMA);
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (mdxParser.DIMENSION - 27)) | (1 << (mdxParser.PROPERTIES - 27)) | (1 << (mdxParser.ID - 27)) | (1 << (mdxParser.QUOTED_ID - 27)))) !== 0)) {
				{
				this.state = 146;
				this.member_property_def_list();
				}
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
	public axis_specification_list(): Axis_specification_listContext {
		let _localctx: Axis_specification_listContext = new Axis_specification_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, mdxParser.RULE_axis_specification_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.axis_specification();
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mdxParser.COMMA) {
				{
				{
				this.state = 150;
				this.match(mdxParser.COMMA);
				this.state = 151;
				this.axis_specification();
				}
				}
				this.state = 156;
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
	public member_property_def_list(): Member_property_def_listContext {
		let _localctx: Member_property_def_listContext = new Member_property_def_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, mdxParser.RULE_member_property_def_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.member_property_definition();
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mdxParser.COMMA) {
				{
				{
				this.state = 158;
				this.match(mdxParser.COMMA);
				this.state = 159;
				this.member_property_definition();
				}
				}
				this.state = 164;
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
	public member_name(): Member_nameContext {
		let _localctx: Member_nameContext = new Member_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, mdxParser.RULE_member_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.compound_id();
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
	public member_property_definition(): Member_property_definitionContext {
		let _localctx: Member_property_definitionContext = new Member_property_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, mdxParser.RULE_member_property_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.identifier();
			this.state = 168;
			this.match(mdxParser.EQ);
			this.state = 169;
			this.value_expression();
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
	public set_name(): Set_nameContext {
		let _localctx: Set_nameContext = new Set_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, mdxParser.RULE_set_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.compound_id();
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
	public compound_id(): Compound_idContext {
		let _localctx: Compound_idContext = new Compound_idContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, mdxParser.RULE_compound_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this.identifier();
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mdxParser.DOT) {
				{
				{
				this.state = 174;
				this.match(mdxParser.DOT);
				this.state = 175;
				this.identifier();
				}
				}
				this.state = 180;
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
	public axis_specification(): Axis_specificationContext {
		let _localctx: Axis_specificationContext = new Axis_specificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, mdxParser.RULE_axis_specification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdxParser.NON) {
				{
				this.state = 181;
				this.match(mdxParser.NON);
				this.state = 182;
				this.match(mdxParser.EMPTY);
				}
			}

			this.state = 185;
			this.expression();
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdxParser.DIMENSION || _la === mdxParser.PROPERTIES) {
				{
				this.state = 186;
				this.dim_props();
				}
			}

			this.state = 189;
			this.match(mdxParser.ON);
			this.state = 190;
			this.axis_name();
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
	public axis_name(): Axis_nameContext {
		let _localctx: Axis_nameContext = new Axis_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, mdxParser.RULE_axis_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
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
	public dim_props(): Dim_propsContext {
		let _localctx: Dim_propsContext = new Dim_propsContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, mdxParser.RULE_dim_props);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdxParser.DIMENSION) {
				{
				this.state = 194;
				this.match(mdxParser.DIMENSION);
				}
			}

			this.state = 197;
			this.match(mdxParser.PROPERTIES);
			this.state = 198;
			this.property_list();
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
	public property_list(): Property_listContext {
		let _localctx: Property_listContext = new Property_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, mdxParser.RULE_property_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.property();
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mdxParser.COMMA) {
				{
				{
				this.state = 201;
				this.match(mdxParser.COMMA);
				this.state = 202;
				this.property();
				}
				}
				this.state = 207;
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
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, mdxParser.RULE_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.compound_id();
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
	public cube_specification(): Cube_specificationContext {
		let _localctx: Cube_specificationContext = new Cube_specificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, mdxParser.RULE_cube_specification);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.cube_name();
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
	public cube_name(): Cube_nameContext {
		let _localctx: Cube_nameContext = new Cube_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, mdxParser.RULE_cube_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.compound_id();
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
	public slicer_specification(): Slicer_specificationContext {
		let _localctx: Slicer_specificationContext = new Slicer_specificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, mdxParser.RULE_slicer_specification);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.expression();
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
	public cell_props(): Cell_propsContext {
		let _localctx: Cell_propsContext = new Cell_propsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, mdxParser.RULE_cell_props);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdxParser.CELL) {
				{
				this.state = 216;
				this.match(mdxParser.CELL);
				}
			}

			this.state = 219;
			this.match(mdxParser.PROPERTIES);
			this.state = 220;
			this.cell_property_list();
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
	public cell_property_list(): Cell_property_listContext {
		let _localctx: Cell_property_listContext = new Cell_property_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, mdxParser.RULE_cell_property_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.cell_property();
			this.state = 223;
			this.match(mdxParser.COMMA);
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (mdxParser.CELL_ORDINAL - 25)) | (1 << (mdxParser.DIMENSION - 25)) | (1 << (mdxParser.FORMATTED_VALUE - 25)) | (1 << (mdxParser.PROPERTIES - 25)) | (1 << (mdxParser.VALUE - 25)) | (1 << (mdxParser.ID - 25)) | (1 << (mdxParser.QUOTED_ID - 25)))) !== 0)) {
				{
				{
				this.state = 224;
				this.cell_property();
				}
				}
				this.state = 229;
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
	public cell_property(): Cell_propertyContext {
		let _localctx: Cell_propertyContext = new Cell_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, mdxParser.RULE_cell_property);
		try {
			this.state = 232;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mdxParser.CELL_ORDINAL:
			case mdxParser.FORMATTED_VALUE:
			case mdxParser.VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 230;
				this.mandatory_cell_property();
				}
				break;
			case mdxParser.DIMENSION:
			case mdxParser.PROPERTIES:
			case mdxParser.ID:
			case mdxParser.QUOTED_ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 231;
				this.provider_specific_cell_property();
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
	public mandatory_cell_property(): Mandatory_cell_propertyContext {
		let _localctx: Mandatory_cell_propertyContext = new Mandatory_cell_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, mdxParser.RULE_mandatory_cell_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			_la = this._input.LA(1);
			if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (mdxParser.CELL_ORDINAL - 25)) | (1 << (mdxParser.FORMATTED_VALUE - 25)) | (1 << (mdxParser.VALUE - 25)))) !== 0))) {
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
	public provider_specific_cell_property(): Provider_specific_cell_propertyContext {
		let _localctx: Provider_specific_cell_propertyContext = new Provider_specific_cell_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, mdxParser.RULE_provider_specific_cell_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, mdxParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.value_expression();
			this.state = 243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mdxParser.COLON) {
				{
				{
				this.state = 239;
				this.match(mdxParser.COLON);
				this.state = 240;
				this.value_expression();
				}
				}
				this.state = 245;
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
	public value_expression(): Value_expressionContext {
		let _localctx: Value_expressionContext = new Value_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, mdxParser.RULE_value_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.term5();
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mdxParser.OR || _la === mdxParser.XOR) {
				{
				this.state = 249;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case mdxParser.XOR:
					{
					this.state = 247;
					this.value_xor_expression();
					}
					break;
				case mdxParser.OR:
					{
					this.state = 248;
					this.value_or_expression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 253;
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
	public value_xor_expression(): Value_xor_expressionContext {
		let _localctx: Value_xor_expressionContext = new Value_xor_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, mdxParser.RULE_value_xor_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.match(mdxParser.XOR);
			this.state = 255;
			this.term5();
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
	public value_or_expression(): Value_or_expressionContext {
		let _localctx: Value_or_expressionContext = new Value_or_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, mdxParser.RULE_value_or_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.match(mdxParser.OR);
			this.state = 258;
			this.term5();
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
	public term5(): Term5Context {
		let _localctx: Term5Context = new Term5Context(this._ctx, this.state);
		this.enterRule(_localctx, 58, mdxParser.RULE_term5);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this.term4();
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mdxParser.AND) {
				{
				{
				this.state = 261;
				this.match(mdxParser.AND);
				this.state = 262;
				this.term4();
				}
				}
				this.state = 267;
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
	public term4(): Term4Context {
		let _localctx: Term4Context = new Term4Context(this._ctx, this.state);
		this.enterRule(_localctx, 60, mdxParser.RULE_term4);
		try {
			this.state = 271;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mdxParser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 268;
				this.match(mdxParser.NOT);
				this.state = 269;
				this.term4();
				}
				break;
			case mdxParser.LBRACE:
			case mdxParser.LPAREN:
			case mdxParser.MINUS:
			case mdxParser.PLUS:
			case mdxParser.CASE:
			case mdxParser.DIMENSION:
			case mdxParser.PROPERTIES:
			case mdxParser.NUMBER:
			case mdxParser.ID:
			case mdxParser.QUOTED_ID:
			case mdxParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 270;
				this.term3();
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
	public term3(): Term3Context {
		let _localctx: Term3Context = new Term3Context(this._ctx, this.state);
		this.enterRule(_localctx, 62, mdxParser.RULE_term3);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.term2();
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mdxParser.EQ) | (1 << mdxParser.GE) | (1 << mdxParser.GT) | (1 << mdxParser.LE) | (1 << mdxParser.LT) | (1 << mdxParser.NE))) !== 0)) {
				{
				{
				this.state = 274;
				this.comp_op();
				this.state = 275;
				this.term2();
				}
				}
				this.state = 281;
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
	public term2(): Term2Context {
		let _localctx: Term2Context = new Term2Context(this._ctx, this.state);
		this.enterRule(_localctx, 64, mdxParser.RULE_term2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.term();
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mdxParser.CONCAT) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS))) !== 0)) {
				{
				{
				this.state = 283;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mdxParser.CONCAT) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 284;
				this.term();
				}
				}
				this.state = 289;
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
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, mdxParser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this.factor();
			this.state = 295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mdxParser.ASTERISK || _la === mdxParser.SOLIDUS) {
				{
				{
				this.state = 291;
				_la = this._input.LA(1);
				if (!(_la === mdxParser.ASTERISK || _la === mdxParser.SOLIDUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 292;
				this.factor();
				}
				}
				this.state = 297;
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
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, mdxParser.RULE_factor);
		try {
			this.state = 303;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mdxParser.MINUS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 298;
				this.match(mdxParser.MINUS);
				this.state = 299;
				this.value_expression_primary();
				}
				break;
			case mdxParser.PLUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 300;
				this.match(mdxParser.PLUS);
				this.state = 301;
				this.value_expression_primary();
				}
				break;
			case mdxParser.LBRACE:
			case mdxParser.LPAREN:
			case mdxParser.CASE:
			case mdxParser.DIMENSION:
			case mdxParser.PROPERTIES:
			case mdxParser.NUMBER:
			case mdxParser.ID:
			case mdxParser.QUOTED_ID:
			case mdxParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 302;
				this.value_expression_primary();
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
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, mdxParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.identifier();
			this.state = 306;
			this.match(mdxParser.LPAREN);
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mdxParser.LBRACE) | (1 << mdxParser.LPAREN) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS) | (1 << mdxParser.CASE) | (1 << mdxParser.DIMENSION))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (mdxParser.NOT - 36)) | (1 << (mdxParser.PROPERTIES - 36)) | (1 << (mdxParser.NUMBER - 36)) | (1 << (mdxParser.ID - 36)) | (1 << (mdxParser.QUOTED_ID - 36)) | (1 << (mdxParser.STRING - 36)))) !== 0)) {
				{
				this.state = 307;
				this.exp_list();
				}
			}

			this.state = 310;
			this.match(mdxParser.RPAREN);
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
	public value_expression_primary(): Value_expression_primaryContext {
		let _localctx: Value_expression_primaryContext = new Value_expression_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, mdxParser.RULE_value_expression_primary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.value_expression_primary0();
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mdxParser.DOT) {
				{
				{
				this.state = 313;
				this.match(mdxParser.DOT);
				this.state = 318;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 314;
					this.unquoted_identifier();
					}
					break;

				case 2:
					{
					this.state = 315;
					this.quoted_identifier();
					}
					break;

				case 3:
					{
					this.state = 316;
					this.amp_quoted_identifier();
					}
					break;

				case 4:
					{
					this.state = 317;
					this.function();
					}
					break;
				}
				}
				}
				this.state = 324;
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
	public value_expression_primary0(): Value_expression_primary0Context {
		let _localctx: Value_expression_primary0Context = new Value_expression_primary0Context(this._ctx, this.state);
		this.enterRule(_localctx, 74, mdxParser.RULE_value_expression_primary0);
		let _la: number;
		try {
			this.state = 339;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 325;
				this.function();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 326;
				this.match(mdxParser.LPAREN);
				this.state = 327;
				this.exp_list();
				this.state = 328;
				this.match(mdxParser.RPAREN);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 330;
				this.match(mdxParser.LBRACE);
				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mdxParser.LBRACE) | (1 << mdxParser.LPAREN) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS) | (1 << mdxParser.CASE) | (1 << mdxParser.DIMENSION))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (mdxParser.NOT - 36)) | (1 << (mdxParser.PROPERTIES - 36)) | (1 << (mdxParser.NUMBER - 36)) | (1 << (mdxParser.ID - 36)) | (1 << (mdxParser.QUOTED_ID - 36)) | (1 << (mdxParser.STRING - 36)))) !== 0)) {
					{
					this.state = 331;
					this.exp_list();
					}
				}

				this.state = 334;
				this.match(mdxParser.RBRACE);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 335;
				this.case_expression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 336;
				this.match(mdxParser.STRING);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 337;
				this.match(mdxParser.NUMBER);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 338;
				this.identifier();
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
	public exp_list(): Exp_listContext {
		let _localctx: Exp_listContext = new Exp_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, mdxParser.RULE_exp_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 341;
			this.expression();
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mdxParser.COMMA) {
				{
				{
				this.state = 342;
				this.match(mdxParser.COMMA);
				this.state = 343;
				this.expression();
				}
				}
				this.state = 348;
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
	public case_expression(): Case_expressionContext {
		let _localctx: Case_expressionContext = new Case_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, mdxParser.RULE_case_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this.match(mdxParser.CASE);
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mdxParser.LBRACE) | (1 << mdxParser.LPAREN) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS) | (1 << mdxParser.CASE) | (1 << mdxParser.DIMENSION))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (mdxParser.NOT - 36)) | (1 << (mdxParser.PROPERTIES - 36)) | (1 << (mdxParser.NUMBER - 36)) | (1 << (mdxParser.ID - 36)) | (1 << (mdxParser.QUOTED_ID - 36)) | (1 << (mdxParser.STRING - 36)))) !== 0)) {
				{
				this.state = 350;
				this.value_expression();
				}
			}

			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdxParser.WHEN) {
				{
				this.state = 353;
				this.when_list();
				}
			}

			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdxParser.ELSE) {
				{
				this.state = 356;
				this.match(mdxParser.ELSE);
				this.state = 357;
				this.value_expression();
				}
			}

			this.state = 360;
			this.match(mdxParser.END);
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
	public when_list(): When_listContext {
		let _localctx: When_listContext = new When_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, mdxParser.RULE_when_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			this.when_clause();
			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mdxParser.WHEN) {
				{
				{
				this.state = 363;
				this.when_clause();
				}
				}
				this.state = 368;
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
	public when_clause(): When_clauseContext {
		let _localctx: When_clauseContext = new When_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, mdxParser.RULE_when_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.match(mdxParser.WHEN);
			this.state = 370;
			this.value_expression();
			this.state = 371;
			this.match(mdxParser.THEN);
			this.state = 372;
			this.value_expression();
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
	public comp_op(): Comp_opContext {
		let _localctx: Comp_opContext = new Comp_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, mdxParser.RULE_comp_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mdxParser.EQ) | (1 << mdxParser.GE) | (1 << mdxParser.GT) | (1 << mdxParser.LE) | (1 << mdxParser.LT) | (1 << mdxParser.NE))) !== 0))) {
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, mdxParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mdxParser.DIMENSION:
			case mdxParser.PROPERTIES:
			case mdxParser.ID:
				{
				this.state = 376;
				this.unquoted_identifier();
				}
				break;
			case mdxParser.QUOTED_ID:
				{
				this.state = 377;
				this.quoted_identifier();
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
	public unquoted_identifier(): Unquoted_identifierContext {
		let _localctx: Unquoted_identifierContext = new Unquoted_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, mdxParser.RULE_unquoted_identifier);
		try {
			this.state = 382;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mdxParser.DIMENSION:
			case mdxParser.PROPERTIES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 380;
				this.keyword();
				}
				break;
			case mdxParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 381;
				this.match(mdxParser.ID);
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
	public amp_quoted_identifier(): Amp_quoted_identifierContext {
		let _localctx: Amp_quoted_identifierContext = new Amp_quoted_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, mdxParser.RULE_amp_quoted_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.match(mdxParser.AMP_QUOTED_ID);
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
	public quoted_identifier(): Quoted_identifierContext {
		let _localctx: Quoted_identifierContext = new Quoted_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, mdxParser.RULE_quoted_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this.match(mdxParser.QUOTED_ID);
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
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, mdxParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 388;
			_la = this._input.LA(1);
			if (!(_la === mdxParser.DIMENSION || _la === mdxParser.PROPERTIES)) {
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x039\u0189\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x05\x03h\n\x03\x03\x03\x03\x03\x05\x03l\n\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03r\n\x03\x03\x03\x05\x03u\n\x03\x03\x04" +
		"\x06\x04x\n\x04\r\x04\x0E\x04y\x03\x05\x03\x05\x05\x05~\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x88\n" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07\x92\n\x07\x03\x07\x03\x07\x05\x07\x96\n\x07\x03\b\x03\b\x03\b\x07" +
		"\b\x9B\n\b\f\b\x0E\b\x9E\v\b\x03\t\x03\t\x03\t\x07\t\xA3\n\t\f\t\x0E\t" +
		"\xA6\v\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x07\r\xB3\n\r\f\r\x0E\r\xB6\v\r\x03\x0E\x03\x0E\x05\x0E\xBA\n\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\xBE\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x10\x05\x10\xC6\n\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x07\x11\xCE\n\x11\f\x11\x0E\x11\xD1\v\x11\x03\x12\x03\x12\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x05\x16\xDC\n\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x07\x17\xE4\n\x17\f\x17\x0E" +
		"\x17\xE7\v\x17\x03\x18\x03\x18\x05\x18\xEB\n\x18\x03\x19\x03\x19\x03\x1A" +
		"\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\xF4\n\x1B\f\x1B\x0E\x1B\xF7\v" +
		"\x1B\x03\x1C\x03\x1C\x03\x1C\x07\x1C\xFC\n\x1C\f\x1C\x0E\x1C\xFF\v\x1C" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x07\x1F\u010A\n\x1F\f\x1F\x0E\x1F\u010D\v\x1F\x03 \x03 \x03 \x05 \u0112" +
		"\n \x03!\x03!\x03!\x03!\x07!\u0118\n!\f!\x0E!\u011B\v!\x03\"\x03\"\x03" +
		"\"\x07\"\u0120\n\"\f\"\x0E\"\u0123\v\"\x03#\x03#\x03#\x07#\u0128\n#\f" +
		"#\x0E#\u012B\v#\x03$\x03$\x03$\x03$\x03$\x05$\u0132\n$\x03%\x03%\x03%" +
		"\x05%\u0137\n%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0141\n&\x07" +
		"&\u0143\n&\f&\x0E&\u0146\v&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'" +
		"\x05\'\u014F\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0156\n\'\x03(\x03" +
		"(\x03(\x07(\u015B\n(\f(\x0E(\u015E\v(\x03)\x03)\x05)\u0162\n)\x03)\x05" +
		")\u0165\n)\x03)\x03)\x05)\u0169\n)\x03)\x03)\x03*\x03*\x07*\u016F\n*\f" +
		"*\x0E*\u0172\v*\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03-\x03-\x05-\u017D" +
		"\n-\x03.\x03.\x05.\u0181\n.\x03/\x03/\x030\x030\x031\x031\x031\x02\x02" +
		"\x022\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
		"`\x02\x02\x07\x05\x02\x1B\x1B!!..\x05\x02\b\b\x11\x11\x13\x13\x04\x02" +
		"\x04\x04\x16\x16\x06\x02\n\f\x0E\x0E\x10\x10\x12\x12\x04\x02\x1D\x1D)" +
		")\x02\u0188\x02b\x03\x02\x02\x02\x04g\x03\x02\x02\x02\x06w\x03\x02\x02" +
		"\x02\b}\x03\x02\x02\x02\n\x7F\x03\x02\x02\x02\f\x89\x03\x02\x02\x02\x0E" +
		"\x97\x03\x02\x02\x02\x10\x9F\x03\x02\x02\x02\x12\xA7\x03\x02\x02\x02\x14" +
		"\xA9\x03\x02\x02\x02\x16\xAD\x03\x02\x02\x02\x18\xAF\x03\x02\x02\x02\x1A" +
		"\xB9\x03\x02\x02\x02\x1C\xC2\x03\x02\x02\x02\x1E\xC5\x03\x02\x02\x02 " +
		"\xCA\x03\x02\x02\x02\"\xD2\x03\x02\x02\x02$\xD4\x03\x02\x02\x02&\xD6\x03" +
		"\x02\x02\x02(\xD8\x03\x02\x02\x02*\xDB\x03\x02\x02\x02,\xE0\x03\x02\x02" +
		"\x02.\xEA\x03\x02\x02\x020\xEC\x03\x02\x02\x022\xEE\x03\x02\x02\x024\xF0" +
		"\x03\x02\x02\x026\xF8\x03\x02\x02\x028\u0100\x03\x02\x02\x02:\u0103\x03" +
		"\x02\x02\x02<\u0106\x03\x02\x02\x02>\u0111\x03\x02\x02\x02@\u0113\x03" +
		"\x02\x02\x02B\u011C\x03\x02\x02\x02D\u0124\x03\x02\x02\x02F\u0131\x03" +
		"\x02\x02\x02H\u0133\x03\x02\x02\x02J\u013A\x03\x02\x02\x02L\u0155\x03" +
		"\x02\x02\x02N\u0157\x03\x02\x02\x02P\u015F\x03\x02\x02\x02R\u016C\x03" +
		"\x02\x02\x02T\u0173\x03\x02\x02\x02V\u0178\x03\x02\x02\x02X\u017C\x03" +
		"\x02\x02\x02Z\u0180\x03\x02\x02\x02\\\u0182\x03\x02\x02\x02^\u0184\x03" +
		"\x02\x02\x02`\u0186\x03\x02\x02\x02bc\x05\x04\x03\x02cd\x07\x02\x02\x03" +
		"d\x03\x03\x02\x02\x02ef\x072\x02\x02fh\x05\x06\x04\x02ge\x03\x02\x02\x02" +
		"gh\x03\x02\x02\x02hi\x03\x02\x02\x02ik\x07*\x02\x02jl\x05\x0E\b\x02kj" +
		"\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x07\"\x02\x02n" +
		"q\x05$\x13\x02op\x070\x02\x02pr\x05(\x15\x02qo\x03\x02\x02\x02qr\x03\x02" +
		"\x02\x02rt\x03\x02\x02\x02su\x05*\x16\x02ts\x03\x02\x02\x02tu\x03\x02" +
		"\x02\x02u\x05\x03\x02\x02\x02vx\x05\b\x05\x02wv\x03\x02\x02\x02xy\x03" +
		"\x02\x02\x02yw\x03\x02\x02\x02yz\x03\x02\x02\x02z\x07\x03\x02\x02\x02" +
		"{~\x05\f\x07\x02|~\x05\n\x06\x02}{\x03\x02\x02\x02}|\x03\x02\x02\x02~" +
		"\t\x03\x02\x02\x02\x7F\x80\x07,\x02\x02\x80\x81\x05\x16\f\x02\x81\x87" +
		"\x07\x18\x02\x02\x82\x83\x07\x03\x02\x02\x83\x84\x054\x1B\x02\x84\x85" +
		"\x07\x03\x02\x02\x85\x88\x03\x02\x02\x02\x86\x88\x054\x1B\x02\x87\x82" +
		"\x03\x02\x02\x02\x87\x86\x03\x02\x02\x02\x88\v\x03\x02\x02\x02\x89\x8A" +
		"\x07$\x02\x02\x8A\x8B\x05\x12\n\x02\x8B\x91\x07\x18\x02\x02\x8C\x8D\x07" +
		"\x03\x02\x02\x8D\x8E\x056\x1C\x02\x8E\x8F\x07\x03\x02\x02\x8F\x92\x03" +
		"\x02\x02\x02\x90\x92\x056\x1C\x02\x91\x8C\x03\x02\x02\x02\x91\x90\x03" +
		"\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x95\x07\x07\x02\x02\x94\x96\x05" +
		"\x10\t\x02\x95\x94\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\r\x03\x02" +
		"\x02\x02\x97\x9C\x05\x1A\x0E\x02\x98\x99\x07\x07\x02\x02\x99\x9B\x05\x1A" +
		"\x0E\x02\x9A\x98\x03\x02\x02\x02\x9B\x9E\x03\x02\x02\x02\x9C\x9A\x03\x02" +
		"\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x0F\x03\x02\x02\x02\x9E\x9C\x03\x02" +
		"\x02\x02\x9F\xA4\x05\x14\v\x02\xA0\xA1\x07\x07\x02\x02\xA1\xA3\x05\x14" +
		"\v\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4\xA2\x03\x02" +
		"\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\x11\x03\x02\x02\x02\xA6\xA4\x03\x02" +
		"\x02\x02\xA7\xA8\x05\x18\r\x02\xA8\x13\x03\x02\x02\x02\xA9\xAA\x05X-\x02" +
		"\xAA\xAB\x07\n\x02\x02\xAB\xAC\x056\x1C\x02\xAC\x15\x03\x02\x02\x02\xAD" +
		"\xAE\x05\x18\r\x02\xAE\x17\x03\x02\x02\x02\xAF\xB4\x05X-\x02\xB0\xB1\x07" +
		"\t\x02\x02\xB1\xB3\x05X-\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB6\x03\x02\x02" +
		"\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\x19\x03\x02\x02" +
		"\x02\xB6\xB4\x03\x02\x02\x02\xB7\xB8\x07%\x02\x02\xB8\xBA\x07\x1F\x02" +
		"\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x03\x02\x02" +
		"\x02\xBB\xBD\x054\x1B\x02\xBC\xBE\x05\x1E\x10\x02\xBD\xBC\x03\x02\x02" +
		"\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC0\x07\'\x02" +
		"\x02\xC0\xC1\x05\x1C\x0F\x02\xC1\x1B\x03\x02\x02\x02\xC2\xC3\x05X-\x02" +
		"\xC3\x1D\x03\x02\x02\x02\xC4\xC6\x07\x1D\x02\x02\xC5\xC4\x03\x02\x02\x02" +
		"\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x07)\x02\x02" +
		"\xC8\xC9\x05 \x11\x02\xC9\x1F\x03\x02\x02\x02\xCA\xCF\x05\"\x12\x02\xCB" +
		"\xCC\x07\x07\x02\x02\xCC\xCE\x05\"\x12\x02\xCD\xCB\x03\x02\x02\x02\xCE" +
		"\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0" +
		"!\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD3\x05\x18\r\x02\xD3#\x03" +
		"\x02\x02\x02\xD4\xD5\x05&\x14\x02\xD5%\x03\x02\x02\x02\xD6\xD7\x05\x18" +
		"\r\x02\xD7\'\x03\x02\x02\x02\xD8\xD9\x054\x1B\x02\xD9)\x03\x02\x02\x02" +
		"\xDA\xDC\x07\x1A\x02\x02\xDB\xDA\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02" +
		"\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x07)\x02\x02\xDE\xDF\x05,\x17\x02\xDF" +
		"+\x03\x02\x02\x02\xE0\xE1\x05.\x18\x02\xE1\xE5\x07\x07\x02\x02\xE2\xE4" +
		"\x05.\x18\x02\xE3\xE2\x03\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3" +
		"\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6-\x03\x02\x02\x02\xE7\xE5" +
		"\x03\x02\x02\x02\xE8\xEB\x050\x19\x02\xE9\xEB\x052\x1A\x02\xEA\xE8\x03" +
		"\x02\x02\x02\xEA\xE9\x03\x02\x02\x02\xEB/\x03\x02\x02\x02\xEC\xED\t\x02" +
		"\x02\x02\xED1\x03\x02\x02\x02\xEE\xEF\x05X-\x02\xEF3\x03\x02\x02\x02\xF0" +
		"\xF5\x056\x1C\x02\xF1\xF2\x07\x05\x02\x02\xF2\xF4\x056\x1C\x02\xF3\xF1" +
		"\x03\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6" +
		"\x03\x02\x02\x02\xF65\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xFD" +
		"\x05<\x1F\x02\xF9\xFC\x058\x1D\x02\xFA\xFC\x05:\x1E\x02\xFB\xF9\x03\x02" +
		"\x02\x02\xFB\xFA\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02" +
		"\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE7\x03\x02\x02\x02\xFF\xFD\x03\x02" +
		"\x02\x02\u0100\u0101\x071\x02\x02\u0101\u0102\x05<\x1F\x02\u01029\x03" +
		"\x02\x02\x02\u0103\u0104\x07(\x02\x02\u0104\u0105\x05<\x1F\x02\u0105;" +
		"\x03\x02\x02\x02\u0106\u010B\x05> \x02\u0107\u0108\x07\x17\x02\x02\u0108" +
		"\u010A\x05> \x02\u0109\u0107\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02" +
		"\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C=\x03\x02" +
		"\x02\x02\u010D\u010B\x03\x02\x02\x02\u010E\u010F\x07&\x02\x02\u010F\u0112" +
		"\x05> \x02\u0110\u0112\x05@!\x02\u0111\u010E\x03\x02\x02\x02\u0111\u0110" +
		"\x03\x02\x02\x02\u0112?\x03\x02\x02\x02\u0113\u0119\x05B\"\x02\u0114\u0115" +
		"\x05V,\x02\u0115\u0116\x05B\"\x02\u0116\u0118\x03\x02\x02\x02\u0117\u0114" +
		"\x03\x02\x02\x02\u0118\u011B\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02" +
		"\u0119\u011A\x03\x02\x02\x02\u011AA\x03\x02\x02\x02\u011B\u0119\x03\x02" +
		"\x02\x02\u011C\u0121\x05D#\x02\u011D\u011E\t\x03\x02\x02\u011E\u0120\x05" +
		"D#\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u011F" +
		"\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122C\x03\x02\x02\x02\u0123" +
		"\u0121\x03\x02\x02\x02\u0124\u0129\x05F$\x02\u0125\u0126\t\x04\x02\x02" +
		"\u0126\u0128\x05F$\x02\u0127\u0125\x03\x02\x02\x02\u0128\u012B\x03\x02" +
		"\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A" +
		"E\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C\u012D\x07\x11\x02" +
		"\x02\u012D\u0132\x05J&\x02\u012E\u012F\x07\x13\x02\x02\u012F\u0132\x05" +
		"J&\x02\u0130\u0132\x05J&\x02\u0131\u012C\x03\x02\x02\x02\u0131\u012E\x03" +
		"\x02\x02\x02\u0131\u0130\x03\x02\x02\x02\u0132G\x03\x02\x02\x02\u0133" +
		"\u0134\x05X-\x02\u0134\u0136\x07\x0F\x02\x02\u0135\u0137\x05N(\x02\u0136" +
		"\u0135\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0138\x03\x02" +
		"\x02\x02\u0138\u0139\x07\x15\x02\x02\u0139I\x03\x02\x02\x02\u013A\u0144" +
		"\x05L\'\x02\u013B\u0140\x07\t\x02\x02\u013C\u0141\x05Z.\x02\u013D\u0141" +
		"\x05^0\x02\u013E\u0141\x05\\/\x02\u013F\u0141\x05H%\x02\u0140\u013C\x03" +
		"\x02\x02\x02\u0140\u013D\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140" +
		"\u013F\x03\x02\x02\x02\u0141\u0143\x03\x02\x02\x02\u0142\u013B\x03\x02" +
		"\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0144" +
		"\u0145\x03\x02\x02\x02\u0145K\x03\x02\x02\x02\u0146\u0144\x03\x02\x02" +
		"\x02\u0147\u0156\x05H%\x02\u0148\u0149\x07\x0F\x02\x02\u0149\u014A\x05" +
		"N(\x02\u014A\u014B\x07\x15\x02\x02\u014B\u0156\x03\x02\x02\x02\u014C\u014E" +
		"\x07\r\x02\x02\u014D\u014F\x05N(\x02\u014E\u014D\x03\x02\x02\x02\u014E" +
		"\u014F\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0156\x07\x14" +
		"\x02\x02\u0151\u0156\x05P)\x02\u0152\u0156\x078\x02\x02\u0153\u0156\x07" +
		"3\x02\x02\u0154\u0156\x05X-\x02\u0155\u0147\x03\x02\x02\x02\u0155\u0148" +
		"\x03\x02\x02\x02\u0155\u014C\x03\x02\x02\x02\u0155\u0151\x03\x02\x02\x02" +
		"\u0155\u0152\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155\u0154\x03" +
		"\x02\x02\x02\u0156M\x03\x02\x02\x02\u0157\u015C\x054\x1B\x02\u0158\u0159" +
		"\x07\x07\x02\x02\u0159\u015B\x054\x1B\x02\u015A\u0158\x03\x02\x02\x02" +
		"\u015B\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D\x03" +
		"\x02\x02\x02\u015DO\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015F" +
		"\u0161\x07\x19\x02\x02\u0160\u0162\x056\x1C\x02\u0161\u0160\x03\x02\x02" +
		"\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0164\x03\x02\x02\x02\u0163\u0165" +
		"\x05R*\x02\u0164\u0163\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165" +
		"\u0168\x03\x02\x02\x02\u0166\u0167\x07\x1E\x02\x02\u0167\u0169\x056\x1C" +
		"\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016A" +
		"\x03\x02\x02\x02\u016A\u016B\x07 \x02\x02\u016BQ\x03\x02\x02\x02\u016C" +
		"\u0170\x05T+\x02\u016D\u016F\x05T+\x02\u016E\u016D\x03\x02\x02\x02\u016F" +
		"\u0172\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0170\u0171\x03\x02" +
		"\x02\x02\u0171S\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0173\u0174" +
		"\x07/\x02\x02\u0174\u0175\x056\x1C\x02\u0175\u0176\x07-\x02\x02\u0176" +
		"\u0177\x056\x1C\x02\u0177U\x03\x02\x02\x02\u0178\u0179\t\x05\x02\x02\u0179" +
		"W\x03\x02\x02\x02\u017A\u017D\x05Z.\x02\u017B\u017D\x05^0\x02\u017C\u017A" +
		"\x03\x02\x02\x02\u017C\u017B\x03\x02\x02\x02\u017DY\x03\x02\x02\x02\u017E" +
		"\u0181\x05`1\x02\u017F\u0181\x075\x02\x02\u0180\u017E\x03\x02\x02\x02" +
		"\u0180\u017F\x03\x02\x02\x02\u0181[\x03\x02\x02\x02\u0182\u0183\x076\x02" +
		"\x02\u0183]\x03\x02\x02\x02\u0184\u0185\x077\x02\x02\u0185_\x03\x02\x02" +
		"\x02\u0186\u0187\t\x06\x02\x02\u0187a\x03\x02\x02\x02*gkqty}\x87\x91\x95" +
		"\x9C\xA4\xB4\xB9\xBD\xC5\xCF\xDB\xE5\xEA\xF5\xFB\xFD\u010B\u0111\u0119" +
		"\u0121\u0129\u0131\u0136\u0140\u0144\u014E\u0155\u015C\u0161\u0164\u0168" +
		"\u0170\u017C\u0180";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mdxParser.__ATN) {
			mdxParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(mdxParser._serializedATN));
		}

		return mdxParser.__ATN;
	}

}

export class Mdx_statementContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(mdxParser.EOF, 0); }
	public select_statement(): Select_statementContext | undefined {
		return this.tryGetRuleContext(0, Select_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_mdx_statement; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterMdx_statement) {
			listener.enterMdx_statement(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitMdx_statement) {
			listener.exitMdx_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitMdx_statement) {
			return visitor.visitMdx_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_statementContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(mdxParser.SELECT, 0); }
	public FROM(): TerminalNode { return this.getToken(mdxParser.FROM, 0); }
	public cube_specification(): Cube_specificationContext {
		return this.getRuleContext(0, Cube_specificationContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(mdxParser.WITH, 0); }
	public formula_specification(): Formula_specificationContext | undefined {
		return this.tryGetRuleContext(0, Formula_specificationContext);
	}
	public axis_specification_list(): Axis_specification_listContext | undefined {
		return this.tryGetRuleContext(0, Axis_specification_listContext);
	}
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(mdxParser.WHERE, 0); }
	public slicer_specification(): Slicer_specificationContext | undefined {
		return this.tryGetRuleContext(0, Slicer_specificationContext);
	}
	public cell_props(): Cell_propsContext | undefined {
		return this.tryGetRuleContext(0, Cell_propsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_select_statement; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterSelect_statement) {
			listener.enterSelect_statement(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitSelect_statement) {
			listener.exitSelect_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitSelect_statement) {
			return visitor.visitSelect_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Formula_specificationContext extends ParserRuleContext {
	public single_formula_specification(): Single_formula_specificationContext[];
	public single_formula_specification(i: number): Single_formula_specificationContext;
	public single_formula_specification(i?: number): Single_formula_specificationContext | Single_formula_specificationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Single_formula_specificationContext);
		} else {
			return this.getRuleContext(i, Single_formula_specificationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_formula_specification; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterFormula_specification) {
			listener.enterFormula_specification(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitFormula_specification) {
			listener.exitFormula_specification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitFormula_specification) {
			return visitor.visitFormula_specification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Single_formula_specificationContext extends ParserRuleContext {
	public member_specification(): Member_specificationContext | undefined {
		return this.tryGetRuleContext(0, Member_specificationContext);
	}
	public set_specification(): Set_specificationContext | undefined {
		return this.tryGetRuleContext(0, Set_specificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_single_formula_specification; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterSingle_formula_specification) {
			listener.enterSingle_formula_specification(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitSingle_formula_specification) {
			listener.exitSingle_formula_specification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitSingle_formula_specification) {
			return visitor.visitSingle_formula_specification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Set_specificationContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(mdxParser.SET, 0); }
	public set_name(): Set_nameContext {
		return this.getRuleContext(0, Set_nameContext);
	}
	public AS(): TerminalNode { return this.getToken(mdxParser.AS, 0); }
	public QUOTE(): TerminalNode[];
	public QUOTE(i: number): TerminalNode;
	public QUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdxParser.QUOTE);
		} else {
			return this.getToken(mdxParser.QUOTE, i);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_set_specification; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterSet_specification) {
			listener.enterSet_specification(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitSet_specification) {
			listener.exitSet_specification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitSet_specification) {
			return visitor.visitSet_specification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Member_specificationContext extends ParserRuleContext {
	public MEMBER(): TerminalNode { return this.getToken(mdxParser.MEMBER, 0); }
	public member_name(): Member_nameContext {
		return this.getRuleContext(0, Member_nameContext);
	}
	public AS(): TerminalNode { return this.getToken(mdxParser.AS, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(mdxParser.COMMA, 0); }
	public QUOTE(): TerminalNode[];
	public QUOTE(i: number): TerminalNode;
	public QUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdxParser.QUOTE);
		} else {
			return this.getToken(mdxParser.QUOTE, i);
		}
	}
	public value_expression(): Value_expressionContext | undefined {
		return this.tryGetRuleContext(0, Value_expressionContext);
	}
	public member_property_def_list(): Member_property_def_listContext | undefined {
		return this.tryGetRuleContext(0, Member_property_def_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_member_specification; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterMember_specification) {
			listener.enterMember_specification(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitMember_specification) {
			listener.exitMember_specification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitMember_specification) {
			return visitor.visitMember_specification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Axis_specification_listContext extends ParserRuleContext {
	public axis_specification(): Axis_specificationContext[];
	public axis_specification(i: number): Axis_specificationContext;
	public axis_specification(i?: number): Axis_specificationContext | Axis_specificationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Axis_specificationContext);
		} else {
			return this.getRuleContext(i, Axis_specificationContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdxParser.COMMA);
		} else {
			return this.getToken(mdxParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_axis_specification_list; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterAxis_specification_list) {
			listener.enterAxis_specification_list(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitAxis_specification_list) {
			listener.exitAxis_specification_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitAxis_specification_list) {
			return visitor.visitAxis_specification_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Member_property_def_listContext extends ParserRuleContext {
	public member_property_definition(): Member_property_definitionContext[];
	public member_property_definition(i: number): Member_property_definitionContext;
	public member_property_definition(i?: number): Member_property_definitionContext | Member_property_definitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Member_property_definitionContext);
		} else {
			return this.getRuleContext(i, Member_property_definitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdxParser.COMMA);
		} else {
			return this.getToken(mdxParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_member_property_def_list; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterMember_property_def_list) {
			listener.enterMember_property_def_list(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitMember_property_def_list) {
			listener.exitMember_property_def_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitMember_property_def_list) {
			return visitor.visitMember_property_def_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Member_nameContext extends ParserRuleContext {
	public compound_id(): Compound_idContext {
		return this.getRuleContext(0, Compound_idContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_member_name; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterMember_name) {
			listener.enterMember_name(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitMember_name) {
			listener.exitMember_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitMember_name) {
			return visitor.visitMember_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Member_property_definitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQ(): TerminalNode { return this.getToken(mdxParser.EQ, 0); }
	public value_expression(): Value_expressionContext {
		return this.getRuleContext(0, Value_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_member_property_definition; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterMember_property_definition) {
			listener.enterMember_property_definition(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitMember_property_definition) {
			listener.exitMember_property_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitMember_property_definition) {
			return visitor.visitMember_property_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Set_nameContext extends ParserRuleContext {
	public compound_id(): Compound_idContext {
		return this.getRuleContext(0, Compound_idContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_set_name; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterSet_name) {
			listener.enterSet_name(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitSet_name) {
			listener.exitSet_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitSet_name) {
			return visitor.visitSet_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_idContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdxParser.DOT);
		} else {
			return this.getToken(mdxParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_compound_id; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterCompound_id) {
			listener.enterCompound_id(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitCompound_id) {
			listener.exitCompound_id(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitCompound_id) {
			return visitor.visitCompound_id(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Axis_specificationContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ON(): TerminalNode { return this.getToken(mdxParser.ON, 0); }
	public axis_name(): Axis_nameContext {
		return this.getRuleContext(0, Axis_nameContext);
	}
	public NON(): TerminalNode | undefined { return this.tryGetToken(mdxParser.NON, 0); }
	public EMPTY(): TerminalNode | undefined { return this.tryGetToken(mdxParser.EMPTY, 0); }
	public dim_props(): Dim_propsContext | undefined {
		return this.tryGetRuleContext(0, Dim_propsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_axis_specification; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterAxis_specification) {
			listener.enterAxis_specification(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitAxis_specification) {
			listener.exitAxis_specification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitAxis_specification) {
			return visitor.visitAxis_specification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Axis_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_axis_name; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterAxis_name) {
			listener.enterAxis_name(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitAxis_name) {
			listener.exitAxis_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitAxis_name) {
			return visitor.visitAxis_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dim_propsContext extends ParserRuleContext {
	public PROPERTIES(): TerminalNode { return this.getToken(mdxParser.PROPERTIES, 0); }
	public property_list(): Property_listContext {
		return this.getRuleContext(0, Property_listContext);
	}
	public DIMENSION(): TerminalNode | undefined { return this.tryGetToken(mdxParser.DIMENSION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_dim_props; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterDim_props) {
			listener.enterDim_props(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitDim_props) {
			listener.exitDim_props(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitDim_props) {
			return visitor.visitDim_props(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Property_listContext extends ParserRuleContext {
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdxParser.COMMA);
		} else {
			return this.getToken(mdxParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_property_list; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterProperty_list) {
			listener.enterProperty_list(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitProperty_list) {
			listener.exitProperty_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitProperty_list) {
			return visitor.visitProperty_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	public compound_id(): Compound_idContext {
		return this.getRuleContext(0, Compound_idContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_property; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cube_specificationContext extends ParserRuleContext {
	public cube_name(): Cube_nameContext {
		return this.getRuleContext(0, Cube_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_cube_specification; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterCube_specification) {
			listener.enterCube_specification(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitCube_specification) {
			listener.exitCube_specification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitCube_specification) {
			return visitor.visitCube_specification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cube_nameContext extends ParserRuleContext {
	public compound_id(): Compound_idContext {
		return this.getRuleContext(0, Compound_idContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_cube_name; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterCube_name) {
			listener.enterCube_name(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitCube_name) {
			listener.exitCube_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitCube_name) {
			return visitor.visitCube_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Slicer_specificationContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_slicer_specification; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterSlicer_specification) {
			listener.enterSlicer_specification(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitSlicer_specification) {
			listener.exitSlicer_specification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitSlicer_specification) {
			return visitor.visitSlicer_specification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cell_propsContext extends ParserRuleContext {
	public PROPERTIES(): TerminalNode { return this.getToken(mdxParser.PROPERTIES, 0); }
	public cell_property_list(): Cell_property_listContext {
		return this.getRuleContext(0, Cell_property_listContext);
	}
	public CELL(): TerminalNode | undefined { return this.tryGetToken(mdxParser.CELL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_cell_props; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterCell_props) {
			listener.enterCell_props(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitCell_props) {
			listener.exitCell_props(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitCell_props) {
			return visitor.visitCell_props(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cell_property_listContext extends ParserRuleContext {
	public cell_property(): Cell_propertyContext[];
	public cell_property(i: number): Cell_propertyContext;
	public cell_property(i?: number): Cell_propertyContext | Cell_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cell_propertyContext);
		} else {
			return this.getRuleContext(i, Cell_propertyContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(mdxParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_cell_property_list; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterCell_property_list) {
			listener.enterCell_property_list(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitCell_property_list) {
			listener.exitCell_property_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitCell_property_list) {
			return visitor.visitCell_property_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cell_propertyContext extends ParserRuleContext {
	public mandatory_cell_property(): Mandatory_cell_propertyContext | undefined {
		return this.tryGetRuleContext(0, Mandatory_cell_propertyContext);
	}
	public provider_specific_cell_property(): Provider_specific_cell_propertyContext | undefined {
		return this.tryGetRuleContext(0, Provider_specific_cell_propertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_cell_property; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterCell_property) {
			listener.enterCell_property(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitCell_property) {
			listener.exitCell_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitCell_property) {
			return visitor.visitCell_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mandatory_cell_propertyContext extends ParserRuleContext {
	public CELL_ORDINAL(): TerminalNode | undefined { return this.tryGetToken(mdxParser.CELL_ORDINAL, 0); }
	public VALUE(): TerminalNode | undefined { return this.tryGetToken(mdxParser.VALUE, 0); }
	public FORMATTED_VALUE(): TerminalNode | undefined { return this.tryGetToken(mdxParser.FORMATTED_VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_mandatory_cell_property; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterMandatory_cell_property) {
			listener.enterMandatory_cell_property(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitMandatory_cell_property) {
			listener.exitMandatory_cell_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitMandatory_cell_property) {
			return visitor.visitMandatory_cell_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Provider_specific_cell_propertyContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_provider_specific_cell_property; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterProvider_specific_cell_property) {
			listener.enterProvider_specific_cell_property(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitProvider_specific_cell_property) {
			listener.exitProvider_specific_cell_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitProvider_specific_cell_property) {
			return visitor.visitProvider_specific_cell_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public value_expression(): Value_expressionContext[];
	public value_expression(i: number): Value_expressionContext;
	public value_expression(i?: number): Value_expressionContext | Value_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_expressionContext);
		} else {
			return this.getRuleContext(i, Value_expressionContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdxParser.COLON);
		} else {
			return this.getToken(mdxParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_expression; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_expressionContext extends ParserRuleContext {
	public term5(): Term5Context {
		return this.getRuleContext(0, Term5Context);
	}
	public value_xor_expression(): Value_xor_expressionContext[];
	public value_xor_expression(i: number): Value_xor_expressionContext;
	public value_xor_expression(i?: number): Value_xor_expressionContext | Value_xor_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_xor_expressionContext);
		} else {
			return this.getRuleContext(i, Value_xor_expressionContext);
		}
	}
	public value_or_expression(): Value_or_expressionContext[];
	public value_or_expression(i: number): Value_or_expressionContext;
	public value_or_expression(i?: number): Value_or_expressionContext | Value_or_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_or_expressionContext);
		} else {
			return this.getRuleContext(i, Value_or_expressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_value_expression; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterValue_expression) {
			listener.enterValue_expression(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitValue_expression) {
			listener.exitValue_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitValue_expression) {
			return visitor.visitValue_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_xor_expressionContext extends ParserRuleContext {
	public XOR(): TerminalNode { return this.getToken(mdxParser.XOR, 0); }
	public term5(): Term5Context {
		return this.getRuleContext(0, Term5Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_value_xor_expression; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterValue_xor_expression) {
			listener.enterValue_xor_expression(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitValue_xor_expression) {
			listener.exitValue_xor_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitValue_xor_expression) {
			return visitor.visitValue_xor_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_or_expressionContext extends ParserRuleContext {
	public OR(): TerminalNode { return this.getToken(mdxParser.OR, 0); }
	public term5(): Term5Context {
		return this.getRuleContext(0, Term5Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_value_or_expression; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterValue_or_expression) {
			listener.enterValue_or_expression(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitValue_or_expression) {
			listener.exitValue_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitValue_or_expression) {
			return visitor.visitValue_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Term5Context extends ParserRuleContext {
	public term4(): Term4Context[];
	public term4(i: number): Term4Context;
	public term4(i?: number): Term4Context | Term4Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Term4Context);
		} else {
			return this.getRuleContext(i, Term4Context);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdxParser.AND);
		} else {
			return this.getToken(mdxParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_term5; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterTerm5) {
			listener.enterTerm5(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitTerm5) {
			listener.exitTerm5(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitTerm5) {
			return visitor.visitTerm5(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Term4Context extends ParserRuleContext {
	public NOT(): TerminalNode | undefined { return this.tryGetToken(mdxParser.NOT, 0); }
	public term4(): Term4Context | undefined {
		return this.tryGetRuleContext(0, Term4Context);
	}
	public term3(): Term3Context | undefined {
		return this.tryGetRuleContext(0, Term3Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_term4; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterTerm4) {
			listener.enterTerm4(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitTerm4) {
			listener.exitTerm4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitTerm4) {
			return visitor.visitTerm4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Term3Context extends ParserRuleContext {
	public term2(): Term2Context[];
	public term2(i: number): Term2Context;
	public term2(i?: number): Term2Context | Term2Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Term2Context);
		} else {
			return this.getRuleContext(i, Term2Context);
		}
	}
	public comp_op(): Comp_opContext[];
	public comp_op(i: number): Comp_opContext;
	public comp_op(i?: number): Comp_opContext | Comp_opContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comp_opContext);
		} else {
			return this.getRuleContext(i, Comp_opContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_term3; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterTerm3) {
			listener.enterTerm3(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitTerm3) {
			listener.exitTerm3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitTerm3) {
			return visitor.visitTerm3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Term2Context extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public CONCAT(): TerminalNode[];
	public CONCAT(i: number): TerminalNode;
	public CONCAT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdxParser.CONCAT);
		} else {
			return this.getToken(mdxParser.CONCAT, i);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdxParser.PLUS);
		} else {
			return this.getToken(mdxParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdxParser.MINUS);
		} else {
			return this.getToken(mdxParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_term2; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterTerm2) {
			listener.enterTerm2(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitTerm2) {
			listener.exitTerm2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitTerm2) {
			return visitor.visitTerm2(this);
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
	public SOLIDUS(): TerminalNode[];
	public SOLIDUS(i: number): TerminalNode;
	public SOLIDUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdxParser.SOLIDUS);
		} else {
			return this.getToken(mdxParser.SOLIDUS, i);
		}
	}
	public ASTERISK(): TerminalNode[];
	public ASTERISK(i: number): TerminalNode;
	public ASTERISK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdxParser.ASTERISK);
		} else {
			return this.getToken(mdxParser.ASTERISK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_term; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(mdxParser.MINUS, 0); }
	public value_expression_primary(): Value_expression_primaryContext {
		return this.getRuleContext(0, Value_expression_primaryContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(mdxParser.PLUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_factor; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitFactor) {
			return visitor.visitFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(mdxParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(mdxParser.RPAREN, 0); }
	public exp_list(): Exp_listContext | undefined {
		return this.tryGetRuleContext(0, Exp_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_function; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_expression_primaryContext extends ParserRuleContext {
	public value_expression_primary0(): Value_expression_primary0Context {
		return this.getRuleContext(0, Value_expression_primary0Context);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdxParser.DOT);
		} else {
			return this.getToken(mdxParser.DOT, i);
		}
	}
	public unquoted_identifier(): Unquoted_identifierContext[];
	public unquoted_identifier(i: number): Unquoted_identifierContext;
	public unquoted_identifier(i?: number): Unquoted_identifierContext | Unquoted_identifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unquoted_identifierContext);
		} else {
			return this.getRuleContext(i, Unquoted_identifierContext);
		}
	}
	public quoted_identifier(): Quoted_identifierContext[];
	public quoted_identifier(i: number): Quoted_identifierContext;
	public quoted_identifier(i?: number): Quoted_identifierContext | Quoted_identifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Quoted_identifierContext);
		} else {
			return this.getRuleContext(i, Quoted_identifierContext);
		}
	}
	public amp_quoted_identifier(): Amp_quoted_identifierContext[];
	public amp_quoted_identifier(i: number): Amp_quoted_identifierContext;
	public amp_quoted_identifier(i?: number): Amp_quoted_identifierContext | Amp_quoted_identifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Amp_quoted_identifierContext);
		} else {
			return this.getRuleContext(i, Amp_quoted_identifierContext);
		}
	}
	public function(): FunctionContext[];
	public function(i: number): FunctionContext;
	public function(i?: number): FunctionContext | FunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionContext);
		} else {
			return this.getRuleContext(i, FunctionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_value_expression_primary; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterValue_expression_primary) {
			listener.enterValue_expression_primary(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitValue_expression_primary) {
			listener.exitValue_expression_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitValue_expression_primary) {
			return visitor.visitValue_expression_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_expression_primary0Context extends ParserRuleContext {
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(mdxParser.LPAREN, 0); }
	public exp_list(): Exp_listContext | undefined {
		return this.tryGetRuleContext(0, Exp_listContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(mdxParser.RPAREN, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(mdxParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(mdxParser.RBRACE, 0); }
	public case_expression(): Case_expressionContext | undefined {
		return this.tryGetRuleContext(0, Case_expressionContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(mdxParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(mdxParser.NUMBER, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_value_expression_primary0; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterValue_expression_primary0) {
			listener.enterValue_expression_primary0(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitValue_expression_primary0) {
			listener.exitValue_expression_primary0(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitValue_expression_primary0) {
			return visitor.visitValue_expression_primary0(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exp_listContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdxParser.COMMA);
		} else {
			return this.getToken(mdxParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_exp_list; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterExp_list) {
			listener.enterExp_list(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitExp_list) {
			listener.exitExp_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitExp_list) {
			return visitor.visitExp_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_expressionContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(mdxParser.CASE, 0); }
	public END(): TerminalNode { return this.getToken(mdxParser.END, 0); }
	public value_expression(): Value_expressionContext[];
	public value_expression(i: number): Value_expressionContext;
	public value_expression(i?: number): Value_expressionContext | Value_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_expressionContext);
		} else {
			return this.getRuleContext(i, Value_expressionContext);
		}
	}
	public when_list(): When_listContext | undefined {
		return this.tryGetRuleContext(0, When_listContext);
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(mdxParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_case_expression; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterCase_expression) {
			listener.enterCase_expression(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitCase_expression) {
			listener.exitCase_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitCase_expression) {
			return visitor.visitCase_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class When_listContext extends ParserRuleContext {
	public when_clause(): When_clauseContext[];
	public when_clause(i: number): When_clauseContext;
	public when_clause(i?: number): When_clauseContext | When_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(When_clauseContext);
		} else {
			return this.getRuleContext(i, When_clauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_when_list; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterWhen_list) {
			listener.enterWhen_list(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitWhen_list) {
			listener.exitWhen_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitWhen_list) {
			return visitor.visitWhen_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class When_clauseContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(mdxParser.WHEN, 0); }
	public value_expression(): Value_expressionContext[];
	public value_expression(i: number): Value_expressionContext;
	public value_expression(i?: number): Value_expressionContext | Value_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_expressionContext);
		} else {
			return this.getRuleContext(i, Value_expressionContext);
		}
	}
	public THEN(): TerminalNode { return this.getToken(mdxParser.THEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_when_clause; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterWhen_clause) {
			listener.enterWhen_clause(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitWhen_clause) {
			listener.exitWhen_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitWhen_clause) {
			return visitor.visitWhen_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comp_opContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(mdxParser.EQ, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(mdxParser.NE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(mdxParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(mdxParser.GT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(mdxParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(mdxParser.GE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_comp_op; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterComp_op) {
			listener.enterComp_op(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitComp_op) {
			listener.exitComp_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitComp_op) {
			return visitor.visitComp_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public unquoted_identifier(): Unquoted_identifierContext | undefined {
		return this.tryGetRuleContext(0, Unquoted_identifierContext);
	}
	public quoted_identifier(): Quoted_identifierContext | undefined {
		return this.tryGetRuleContext(0, Quoted_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_identifier; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unquoted_identifierContext extends ParserRuleContext {
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(mdxParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_unquoted_identifier; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterUnquoted_identifier) {
			listener.enterUnquoted_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitUnquoted_identifier) {
			listener.exitUnquoted_identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitUnquoted_identifier) {
			return visitor.visitUnquoted_identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Amp_quoted_identifierContext extends ParserRuleContext {
	public AMP_QUOTED_ID(): TerminalNode { return this.getToken(mdxParser.AMP_QUOTED_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_amp_quoted_identifier; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterAmp_quoted_identifier) {
			listener.enterAmp_quoted_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitAmp_quoted_identifier) {
			listener.exitAmp_quoted_identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitAmp_quoted_identifier) {
			return visitor.visitAmp_quoted_identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Quoted_identifierContext extends ParserRuleContext {
	public QUOTED_ID(): TerminalNode { return this.getToken(mdxParser.QUOTED_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_quoted_identifier; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterQuoted_identifier) {
			listener.enterQuoted_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitQuoted_identifier) {
			listener.exitQuoted_identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitQuoted_identifier) {
			return visitor.visitQuoted_identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public DIMENSION(): TerminalNode | undefined { return this.tryGetToken(mdxParser.DIMENSION, 0); }
	public PROPERTIES(): TerminalNode | undefined { return this.tryGetToken(mdxParser.PROPERTIES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdxParser.RULE_keyword; }
	// @Override
	public enterRule(listener: mdxListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: mdxListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdxVisitor<Result>): Result {
		if (visitor.visitKeyword) {
			return visitor.visitKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


