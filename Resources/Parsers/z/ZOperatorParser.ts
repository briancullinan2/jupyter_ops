// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/z/ZOperatorParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { ZOperatorParserListener } from "./ZOperatorParserListener";
import { ZOperatorParserVisitor } from "./ZOperatorParserVisitor";


export class ZOperatorParser extends Parser {
	public static readonly ZED = 1;
	public static readonly SCH = 2;
	public static readonly AX = 3;
	public static readonly TEXT = 4;
	public static readonly NUMERAL = 5;
	public static readonly STROKE = 6;
	public static readonly LEFT_PARENTHESIS = 7;
	public static readonly RIGHT_PARENTHESIS = 8;
	public static readonly LEFT_SQUARE_BRACKET = 9;
	public static readonly RIGHT_SQUARE_BRACKET = 10;
	public static readonly LEFT_CURLY_BRACKET = 11;
	public static readonly RIGHT_CURLY_BRACKET = 12;
	public static readonly LEFT_BINDING_BRACKET = 13;
	public static readonly RIGHT_BINDING_BRACKET = 14;
	public static readonly LEFT_DOUBLE_ANGLE_BRACKET = 15;
	public static readonly RIGHT_DOUBLE_ANGLE_BRACKET = 16;
	public static readonly GEN = 17;
	public static readonly END = 18;
	public static readonly WS = 19;
	public static readonly NL = 20;
	public static readonly IGNORE_NL = 21;
	public static readonly ELSE = 22;
	public static readonly FALSE = 23;
	public static readonly FUNCTION = 24;
	public static readonly GENERIC = 25;
	public static readonly IF = 26;
	public static readonly LEFTASSOC = 27;
	public static readonly LET = 28;
	public static readonly POWERSET = 29;
	public static readonly PARENTS = 30;
	public static readonly PRE_KEY = 31;
	public static readonly RELATION = 32;
	public static readonly RIGHTASSOC = 33;
	public static readonly SECTION = 34;
	public static readonly THEN = 35;
	public static readonly TRUE = 36;
	public static readonly COLON = 37;
	public static readonly DEFINE_EQUAL = 38;
	public static readonly COMMA = 39;
	public static readonly FREE_EQUALS = 40;
	public static readonly VERTICAL_LINE = 41;
	public static readonly AMPERSAND = 42;
	public static readonly REVERSE_SOLIDUS = 43;
	public static readonly SOLIDUS = 44;
	public static readonly FULL_STOP = 45;
	public static readonly SEMICOLON = 46;
	public static readonly ARGUMENT = 47;
	public static readonly LIST = 48;
	public static readonly EQUALS_SIGN = 49;
	public static readonly CONJECTURE = 50;
	public static readonly FOR_ALL = 51;
	public static readonly SPOT = 52;
	public static readonly THERE_EXISTS = 53;
	public static readonly UNIQUE_EXISTS = 54;
	public static readonly LEFT_RIGHT_DOUBLE_ARROW = 55;
	public static readonly RIGHTWARDS_DOUBLE_ARROW = 56;
	public static readonly LOGICAL_OR = 57;
	public static readonly LOGICAL_AND = 58;
	public static readonly NOT_SIGN = 59;
	public static readonly ELEMENT_OF = 60;
	public static readonly SCHEMA_PROJECTION = 61;
	public static readonly MULTIPLICATION_SIGN = 62;
	public static readonly GREEK_SMALL_LETTER_THETA = 63;
	public static readonly GREEK_SMALL_LETTER_LAMBDA = 64;
	public static readonly GREEK_SMALL_LETTER_MU = 65;
	public static readonly SCHEMA_COMPOSITION = 66;
	public static readonly SCHEMA_PIPING = 67;
	public static readonly NAME = 68;
	public static readonly WORDPART = 69;
	public static readonly GREEK_CAPITAL_LETTER_DELTA = 70;
	public static readonly GREEK_CAPITAL_LETTER_XI = 71;
	public static readonly MATHEMATICAL_DOUBLE_STRUCK_CAPITAL_A = 72;
	public static readonly DOUBLE_STRUCK_CAPITAL_N = 73;
	public static readonly MODIFIER_LETTER_PRIME = 74;
	public static readonly EXCLAMATION_MARK = 75;
	public static readonly QUESTION_MARK = 76;
	public static readonly NORTH_EAST_ARROW = 77;
	public static readonly SOUTH_WEST_ARROW = 78;
	public static readonly SOUTH_EAST_ARROW = 79;
	public static readonly NORTH_WEST_ARROW = 80;
	public static readonly RIGHT_TACK = 81;
	public static readonly BIG_REVERSE_SOLIDUS = 82;
	public static readonly PLUS_SIGN = 83;
	public static readonly MATHEMATICAL_TOOLKIT_SYMBOLS = 84;
	public static readonly LEFT_RIGHT_ARROW = 85;
	public static readonly RIGHTWARDS_ARROW = 86;
	public static readonly NOT_EQUAL_TO = 87;
	public static readonly NOT_AN_ELEMENT_OF = 88;
	public static readonly EMPTY_SET = 89;
	public static readonly SUBSET_OF_OR_EQUAL_TO = 90;
	public static readonly SUBSET_OF = 91;
	public static readonly UNION = 92;
	public static readonly INTERSECTION = 93;
	public static readonly SET_MINUS = 94;
	public static readonly CIRCLED_MINUS = 95;
	public static readonly N_ARY_UNION = 96;
	public static readonly N_ARY_INTERSECTION = 97;
	public static readonly MATHEMATICAL_DOUBLE_STRUCK_CAPITAL_F = 98;
	public static readonly RIGHTWARDS_ARROW_FROM_BAR = 99;
	public static readonly RELATIONAL_COMPOSITION = 100;
	public static readonly RING_OPERATOR = 101;
	public static readonly WHITE_LEFT_POINTING_TRIANGLE = 102;
	public static readonly WHITE_RIGHT_POINTING_TRIANGLE = 103;
	public static readonly DOMAIN_ANTIRESTRICTION = 104;
	public static readonly RANGE_ANTIRESTRICTION = 105;
	public static readonly TILDE_OPERATOR = 106;
	public static readonly LEFT_IMAGE_BRACKET = 107;
	public static readonly RIGHT_IMAGE_BRACKET = 108;
	public static readonly CIRCLED_PLUS = 109;
	public static readonly RIGHTWARDS_ARROW_WITH_VERTICAL_STROKE = 110;
	public static readonly RIGHTWARDS_ARROW_WITH_TAIL_WITH_VERTICAL_STROKE = 111;
	public static readonly RIGHTWARDS_ARROW_WITH_TAIL = 112;
	public static readonly RIGHTWARDS_TWO_HEADED_ARROW_WITH_VERTICAL_STROKE = 113;
	public static readonly RIGHTWARDS_TWO_HEADED_ARROW = 114;
	public static readonly RIGHTWARDS_TWO_HEADED_ARROW_WITH_TAIL = 115;
	public static readonly RIGHTWARDS_ARROW_WITH_DOUBLE_VERTICAL_STROKE = 116;
	public static readonly RIGHTWARDS_ARROW_WITH_TAIL_WITH_DOUBLE_VERTICAL_STROKE = 117;
	public static readonly DOUBLE_STRUCK_CAPITAL_Z = 118;
	public static readonly HYPHEN_MINUS = 119;
	public static readonly MINUS_SIGN = 120;
	public static readonly LESS_THAN_OR_EQUAL_TO = 121;
	public static readonly LESS_THAN_SIGN = 122;
	public static readonly GREATER_THAN_OR_EQUAL_TO = 123;
	public static readonly GREATER_THAN_SIGN = 124;
	public static readonly ASTERISK = 125;
	public static readonly NUMBER_SIGN = 126;
	public static readonly CHARACTER_TIE = 127;
	public static readonly UPWARDS_HARPOON_WITH_BARB_LEFTWARDS = 128;
	public static readonly UPWARDS_HARPOON_WITH_BARB_RIGHTWARDS = 129;
	public static readonly LEFT_ANGLE_BRACKET = 130;
	public static readonly RIGHT_ANGLE_BRACKET = 131;
	public static readonly ID = 132;
	public static readonly PREP = 133;
	public static readonly PRE = 134;
	public static readonly POSTP = 135;
	public static readonly POST = 136;
	public static readonly IP = 137;
	public static readonly I = 138;
	public static readonly LP = 139;
	public static readonly L = 140;
	public static readonly ELP = 141;
	public static readonly EL = 142;
	public static readonly ERP = 143;
	public static readonly ER = 144;
	public static readonly SRP = 145;
	public static readonly SR = 146;
	public static readonly EREP = 147;
	public static readonly ERE = 148;
	public static readonly SREP = 149;
	public static readonly SRE = 150;
	public static readonly ES = 151;
	public static readonly SS = 152;
	public static readonly UNKNOWN = 153;
	public static readonly NLCHAR = 154;
	public static readonly RULE_specification = 0;
	public static readonly RULE_section = 1;
	public static readonly RULE_paragraph = 2;
	public static readonly RULE_formals = 3;
	public static readonly RULE_operatorTemplate = 4;
	public static readonly RULE_categoryTemplate = 5;
	public static readonly RULE_prec = 6;
	public static readonly RULE_assoc = 7;
	public static readonly RULE_template = 8;
	public static readonly RULE_prefixTemplate = 9;
	public static readonly RULE_postfixTemplate = 10;
	public static readonly RULE_infixTemplate = 11;
	public static readonly RULE_nofixTemplate = 12;
	public static readonly RULE_optArgName = 13;
	public static readonly RULE_optListName = 14;
	public static readonly RULE_argName = 15;
	public static readonly RULE_listName = 16;
	public static readonly RULE_prefixName = 17;
	public static readonly RULE_postfixName = 18;
	public static readonly RULE_infixName = 19;
	public static readonly RULE_nofixName = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"specification", "section", "paragraph", "formals", "operatorTemplate", 
		"categoryTemplate", "prec", "assoc", "template", "prefixTemplate", "postfixTemplate", 
		"infixTemplate", "nofixTemplate", "optArgName", "optListName", "argName", 
		"listName", "prefixName", "postfixName", "infixName", "nofixName",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\u2500'", "'\u250C'", "'\u2577'", undefined, undefined, undefined, 
		"'\u0028'", "'\u0029'", "'\u005B'", "'\u005D'", "'\u007B'", "'\u007D'", 
		"'\u2989'", "'\u298A'", "'\u27EA'", "'\u27EB'", "'\u2550'", "'\u2514'", 
		undefined, undefined, undefined, "'else'", "'false'", "'function'", "'generic'", 
		"'if'", "'leftassoc'", "'let'", "'\u2119'", "'parents'", "'pre'", "'relation'", 
		"'rightassoc'", "'section'", "'then'", "'true'", "':'", "'=='", "','", 
		"'::='", "'|'", "'\u0026'", "'\u005C'", "'/'", "'.'", "';'", "'_'", "',,'", 
		"'='", undefined, "'\u2200'", "'\u2981'", "'\u2203'", undefined, "'\u21D4'", 
		"'\u21D2'", "'\u2228'", "'\u2227'", "'\u00AC'", "'\u2208'", "'\u2A21'", 
		"'\u00D7'", "'\u03B8'", "'\u03BB'", "'\u03BC'", "'\u2A1F'", "'\u2A20'", 
		undefined, undefined, "'\u0394'", "'\u039E'", "'\uD835uDD38'", "'\u2115'", 
		"'\u2032'", "'\u0021'", "'\u003F'", "'\u2197'", "'\u2199'", "'\u2198'", 
		"'\u2196'", "'\u22A2'", "'\u29F9'", "'\u002B'", undefined, "'\u2194'", 
		"'\u2192'", "'\u2260'", "'\u2209'", "'\u2205'", "'\u2286'", "'\u2282'", 
		"'\u222A'", "'\u2229'", "'\u2216'", "'\u2296'", "'\u22C3'", "'\u22C2'", 
		"'\uD835uDD3D'", "'\u21A6'", "'\u2A3E'", "'\u2218'", "'\u25C1'", "'\u25B7'", 
		"'\u2A64'", "'\u2A65'", "'\u223C'", "'\u2987'", "'\u2988'", "'\u2295'", 
		"'\u21F8'", "'\u2914'", "'\u21A3'", "'\u2900'", "'\u21A0'", "'\u2916'", 
		"'\u21FB'", "'\u2915'", "'\u2124'", "'\u002D'", "'\u2212'", "'\u2264'", 
		"'\u003C'", "'\u2265'", "'\u003E'", "'\u002A'", "'\u0023'", "'\u2040'", 
		"'\u21BF'", "'\u21BE'", "'\u27E8'", "'\u27E9'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'\u2028'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ZED", "SCH", "AX", "TEXT", "NUMERAL", "STROKE", "LEFT_PARENTHESIS", 
		"RIGHT_PARENTHESIS", "LEFT_SQUARE_BRACKET", "RIGHT_SQUARE_BRACKET", "LEFT_CURLY_BRACKET", 
		"RIGHT_CURLY_BRACKET", "LEFT_BINDING_BRACKET", "RIGHT_BINDING_BRACKET", 
		"LEFT_DOUBLE_ANGLE_BRACKET", "RIGHT_DOUBLE_ANGLE_BRACKET", "GEN", "END", 
		"WS", "NL", "IGNORE_NL", "ELSE", "FALSE", "FUNCTION", "GENERIC", "IF", 
		"LEFTASSOC", "LET", "POWERSET", "PARENTS", "PRE_KEY", "RELATION", "RIGHTASSOC", 
		"SECTION", "THEN", "TRUE", "COLON", "DEFINE_EQUAL", "COMMA", "FREE_EQUALS", 
		"VERTICAL_LINE", "AMPERSAND", "REVERSE_SOLIDUS", "SOLIDUS", "FULL_STOP", 
		"SEMICOLON", "ARGUMENT", "LIST", "EQUALS_SIGN", "CONJECTURE", "FOR_ALL", 
		"SPOT", "THERE_EXISTS", "UNIQUE_EXISTS", "LEFT_RIGHT_DOUBLE_ARROW", "RIGHTWARDS_DOUBLE_ARROW", 
		"LOGICAL_OR", "LOGICAL_AND", "NOT_SIGN", "ELEMENT_OF", "SCHEMA_PROJECTION", 
		"MULTIPLICATION_SIGN", "GREEK_SMALL_LETTER_THETA", "GREEK_SMALL_LETTER_LAMBDA", 
		"GREEK_SMALL_LETTER_MU", "SCHEMA_COMPOSITION", "SCHEMA_PIPING", "NAME", 
		"WORDPART", "GREEK_CAPITAL_LETTER_DELTA", "GREEK_CAPITAL_LETTER_XI", "MATHEMATICAL_DOUBLE_STRUCK_CAPITAL_A", 
		"DOUBLE_STRUCK_CAPITAL_N", "MODIFIER_LETTER_PRIME", "EXCLAMATION_MARK", 
		"QUESTION_MARK", "NORTH_EAST_ARROW", "SOUTH_WEST_ARROW", "SOUTH_EAST_ARROW", 
		"NORTH_WEST_ARROW", "RIGHT_TACK", "BIG_REVERSE_SOLIDUS", "PLUS_SIGN", 
		"MATHEMATICAL_TOOLKIT_SYMBOLS", "LEFT_RIGHT_ARROW", "RIGHTWARDS_ARROW", 
		"NOT_EQUAL_TO", "NOT_AN_ELEMENT_OF", "EMPTY_SET", "SUBSET_OF_OR_EQUAL_TO", 
		"SUBSET_OF", "UNION", "INTERSECTION", "SET_MINUS", "CIRCLED_MINUS", "N_ARY_UNION", 
		"N_ARY_INTERSECTION", "MATHEMATICAL_DOUBLE_STRUCK_CAPITAL_F", "RIGHTWARDS_ARROW_FROM_BAR", 
		"RELATIONAL_COMPOSITION", "RING_OPERATOR", "WHITE_LEFT_POINTING_TRIANGLE", 
		"WHITE_RIGHT_POINTING_TRIANGLE", "DOMAIN_ANTIRESTRICTION", "RANGE_ANTIRESTRICTION", 
		"TILDE_OPERATOR", "LEFT_IMAGE_BRACKET", "RIGHT_IMAGE_BRACKET", "CIRCLED_PLUS", 
		"RIGHTWARDS_ARROW_WITH_VERTICAL_STROKE", "RIGHTWARDS_ARROW_WITH_TAIL_WITH_VERTICAL_STROKE", 
		"RIGHTWARDS_ARROW_WITH_TAIL", "RIGHTWARDS_TWO_HEADED_ARROW_WITH_VERTICAL_STROKE", 
		"RIGHTWARDS_TWO_HEADED_ARROW", "RIGHTWARDS_TWO_HEADED_ARROW_WITH_TAIL", 
		"RIGHTWARDS_ARROW_WITH_DOUBLE_VERTICAL_STROKE", "RIGHTWARDS_ARROW_WITH_TAIL_WITH_DOUBLE_VERTICAL_STROKE", 
		"DOUBLE_STRUCK_CAPITAL_Z", "HYPHEN_MINUS", "MINUS_SIGN", "LESS_THAN_OR_EQUAL_TO", 
		"LESS_THAN_SIGN", "GREATER_THAN_OR_EQUAL_TO", "GREATER_THAN_SIGN", "ASTERISK", 
		"NUMBER_SIGN", "CHARACTER_TIE", "UPWARDS_HARPOON_WITH_BARB_LEFTWARDS", 
		"UPWARDS_HARPOON_WITH_BARB_RIGHTWARDS", "LEFT_ANGLE_BRACKET", "RIGHT_ANGLE_BRACKET", 
		"ID", "PREP", "PRE", "POSTP", "POST", "IP", "I", "LP", "L", "ELP", "EL", 
		"ERP", "ER", "SRP", "SR", "EREP", "ERE", "SREP", "SRE", "ES", "SS", "UNKNOWN", 
		"NLCHAR",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ZOperatorParser._LITERAL_NAMES, ZOperatorParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ZOperatorParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ZOperatorParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return ZOperatorParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ZOperatorParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ZOperatorParser._ATN, this);
	}
	// @RuleVersion(0)
	public specification(): SpecificationContext {
		let _localctx: SpecificationContext = new SpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ZOperatorParser.RULE_specification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZOperatorParser.ZED) | (1 << ZOperatorParser.SCH) | (1 << ZOperatorParser.AX) | (1 << ZOperatorParser.TEXT))) !== 0)) {
				{
				this.state = 45;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 42;
					this.match(ZOperatorParser.TEXT);
					}
					break;

				case 2:
					{
					this.state = 43;
					this.section();
					}
					break;

				case 3:
					{
					this.state = 44;
					this.paragraph();
					}
					break;
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 50;
			this.match(ZOperatorParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public section(): SectionContext {
		let _localctx: SectionContext = new SectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ZOperatorParser.RULE_section);
		let _la: number;
		try {
			let _alt: number;
			this.state = 76;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				_localctx = new InheritingSectionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 52;
				this.match(ZOperatorParser.ZED);
				this.state = 53;
				this.match(ZOperatorParser.SECTION);
				this.state = 54;
				this.match(ZOperatorParser.NAME);
				this.state = 55;
				this.match(ZOperatorParser.PARENTS);
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ZOperatorParser.NAME) {
					{
					this.state = 56;
					this.formals();
					}
				}

				this.state = 59;
				this.match(ZOperatorParser.END);
				this.state = 63;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 60;
						this.paragraph();
						}
						}
					}
					this.state = 65;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				}
				}
				break;

			case 2:
				_localctx = new BaseSectionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 66;
				this.match(ZOperatorParser.ZED);
				this.state = 67;
				this.match(ZOperatorParser.SECTION);
				this.state = 68;
				this.match(ZOperatorParser.NAME);
				this.state = 69;
				this.match(ZOperatorParser.END);
				this.state = 73;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 70;
						this.paragraph();
						}
						}
					}
					this.state = 75;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
	public paragraph(): ParagraphContext {
		let _localctx: ParagraphContext = new ParagraphContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ZOperatorParser.RULE_paragraph);
		try {
			let _alt: number;
			this.state = 106;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				_localctx = new OperatorTemplateParagraphContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 78;
				this.match(ZOperatorParser.ZED);
				this.state = 79;
				this.operatorTemplate();
				this.state = 80;
				this.match(ZOperatorParser.END);
				}
				break;

			case 2:
				_localctx = new AxiomaticDescriptionParagraphContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 82;
				this.match(ZOperatorParser.AX);
				this.state = 86;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 83;
						this.matchWildcard();
						}
						}
					}
					this.state = 88;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				}
				this.state = 89;
				this.match(ZOperatorParser.END);
				}
				break;

			case 3:
				_localctx = new SchemaDefinitionParagraphContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 90;
				this.match(ZOperatorParser.SCH);
				this.state = 94;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 91;
						this.matchWildcard();
						}
						}
					}
					this.state = 96;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				}
				this.state = 97;
				this.match(ZOperatorParser.END);
				}
				break;

			case 4:
				_localctx = new NONOperatorTemplateParagraphContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 98;
				this.match(ZOperatorParser.ZED);
				this.state = 102;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 99;
						this.matchWildcard();
						}
						}
					}
					this.state = 104;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				}
				this.state = 105;
				this.match(ZOperatorParser.END);
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
	public formals(): FormalsContext {
		let _localctx: FormalsContext = new FormalsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ZOperatorParser.RULE_formals);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.match(ZOperatorParser.NAME);
			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ZOperatorParser.COMMA) {
				{
				{
				this.state = 109;
				this.match(ZOperatorParser.COMMA);
				this.state = 110;
				this.match(ZOperatorParser.NAME);
				}
				}
				this.state = 115;
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
	public operatorTemplate(): OperatorTemplateContext {
		let _localctx: OperatorTemplateContext = new OperatorTemplateContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ZOperatorParser.RULE_operatorTemplate);
		try {
			this.state = 122;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZOperatorParser.RELATION:
				_localctx = new RelationOperatorTemplateContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 116;
				this.match(ZOperatorParser.RELATION);
				this.state = 117;
				this.template();
				}
				break;
			case ZOperatorParser.FUNCTION:
				_localctx = new FunctionOperatorTemplateContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 118;
				this.match(ZOperatorParser.FUNCTION);
				this.state = 119;
				this.categoryTemplate();
				}
				break;
			case ZOperatorParser.GENERIC:
				_localctx = new GenericOperatorTemplateContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 120;
				this.match(ZOperatorParser.GENERIC);
				this.state = 121;
				this.categoryTemplate();
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
	public categoryTemplate(): CategoryTemplateContext {
		let _localctx: CategoryTemplateContext = new CategoryTemplateContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ZOperatorParser.RULE_categoryTemplate);
		try {
			this.state = 131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 124;
				this.prefixTemplate();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 125;
				this.postfixTemplate();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 126;
				this.prec();
				this.state = 127;
				this.assoc();
				this.state = 128;
				this.infixTemplate();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 130;
				this.nofixTemplate();
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
	public prec(): PrecContext {
		let _localctx: PrecContext = new PrecContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ZOperatorParser.RULE_prec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(ZOperatorParser.NUMERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public assoc(): AssocContext {
		let _localctx: AssocContext = new AssocContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ZOperatorParser.RULE_assoc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			_la = this._input.LA(1);
			if (!(_la === ZOperatorParser.LEFTASSOC || _la === ZOperatorParser.RIGHTASSOC)) {
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
	public template(): TemplateContext {
		let _localctx: TemplateContext = new TemplateContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ZOperatorParser.RULE_template);
		try {
			this.state = 141;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 137;
				this.prefixTemplate();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 138;
				this.postfixTemplate();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 139;
				this.infixTemplate();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 140;
				this.nofixTemplate();
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
	public prefixTemplate(): PrefixTemplateContext {
		let _localctx: PrefixTemplateContext = new PrefixTemplateContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ZOperatorParser.RULE_prefixTemplate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(ZOperatorParser.LEFT_PARENTHESIS);
			this.state = 147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZOperatorParser.NAME:
				{
				this.state = 144;
				this.prefixName();
				}
				break;
			case ZOperatorParser.POWERSET:
				{
				this.state = 145;
				this.match(ZOperatorParser.POWERSET);
				this.state = 146;
				this.match(ZOperatorParser.ARGUMENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 149;
			this.match(ZOperatorParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public postfixTemplate(): PostfixTemplateContext {
		let _localctx: PostfixTemplateContext = new PostfixTemplateContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ZOperatorParser.RULE_postfixTemplate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(ZOperatorParser.LEFT_PARENTHESIS);
			this.state = 152;
			this.postfixName();
			this.state = 153;
			this.match(ZOperatorParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public infixTemplate(): InfixTemplateContext {
		let _localctx: InfixTemplateContext = new InfixTemplateContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ZOperatorParser.RULE_infixTemplate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.match(ZOperatorParser.LEFT_PARENTHESIS);
			this.state = 156;
			this.infixName();
			this.state = 157;
			this.match(ZOperatorParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public nofixTemplate(): NofixTemplateContext {
		let _localctx: NofixTemplateContext = new NofixTemplateContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ZOperatorParser.RULE_nofixTemplate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(ZOperatorParser.LEFT_PARENTHESIS);
			this.state = 160;
			this.nofixName();
			this.state = 161;
			this.match(ZOperatorParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public optArgName(): OptArgNameContext {
		let _localctx: OptArgNameContext = new OptArgNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ZOperatorParser.RULE_optArgName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(ZOperatorParser.ARGUMENT);
			this.state = 164;
			this.match(ZOperatorParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public optListName(): OptListNameContext {
		let _localctx: OptListNameContext = new OptListNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ZOperatorParser.RULE_optListName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(ZOperatorParser.LIST);
			this.state = 167;
			this.match(ZOperatorParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public argName(): ArgNameContext {
		let _localctx: ArgNameContext = new ArgNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ZOperatorParser.RULE_argName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.match(ZOperatorParser.ARGUMENT);
			this.state = 170;
			this.match(ZOperatorParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public listName(): ListNameContext {
		let _localctx: ListNameContext = new ListNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ZOperatorParser.RULE_listName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(ZOperatorParser.LIST);
			this.state = 173;
			this.match(ZOperatorParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public prefixName(): PrefixNameContext {
		let _localctx: PrefixNameContext = new PrefixNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ZOperatorParser.RULE_prefixName);
		try {
			let _alt: number;
			this.state = 191;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 175;
				this.match(ZOperatorParser.NAME);
				this.state = 176;
				this.match(ZOperatorParser.ARGUMENT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 177;
				this.match(ZOperatorParser.NAME);
				this.state = 182;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 180;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case ZOperatorParser.ARGUMENT:
							{
							this.state = 178;
							this.optArgName();
							}
							break;
						case ZOperatorParser.LIST:
							{
							this.state = 179;
							this.optListName();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 184;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				}
				this.state = 187;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ZOperatorParser.ARGUMENT:
					{
					this.state = 185;
					this.argName();
					}
					break;
				case ZOperatorParser.LIST:
					{
					this.state = 186;
					this.listName();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 189;
				this.match(ZOperatorParser.ARGUMENT);
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
	public postfixName(): PostfixNameContext {
		let _localctx: PostfixNameContext = new PostfixNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ZOperatorParser.RULE_postfixName);
		try {
			let _alt: number;
			this.state = 208;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 193;
				this.match(ZOperatorParser.ARGUMENT);
				this.state = 194;
				this.match(ZOperatorParser.NAME);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 195;
				this.match(ZOperatorParser.ARGUMENT);
				this.state = 196;
				this.match(ZOperatorParser.NAME);
				this.state = 201;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 199;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case ZOperatorParser.ARGUMENT:
							{
							this.state = 197;
							this.optArgName();
							}
							break;
						case ZOperatorParser.LIST:
							{
							this.state = 198;
							this.optListName();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 203;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				}
				this.state = 206;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ZOperatorParser.ARGUMENT:
					{
					this.state = 204;
					this.argName();
					}
					break;
				case ZOperatorParser.LIST:
					{
					this.state = 205;
					this.listName();
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
	public infixName(): InfixNameContext {
		let _localctx: InfixNameContext = new InfixNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ZOperatorParser.RULE_infixName);
		try {
			let _alt: number;
			this.state = 228;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 210;
				this.match(ZOperatorParser.ARGUMENT);
				this.state = 211;
				this.match(ZOperatorParser.NAME);
				this.state = 212;
				this.match(ZOperatorParser.ARGUMENT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 213;
				this.match(ZOperatorParser.ARGUMENT);
				this.state = 214;
				this.match(ZOperatorParser.NAME);
				this.state = 219;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 217;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case ZOperatorParser.ARGUMENT:
							{
							this.state = 215;
							this.optArgName();
							}
							break;
						case ZOperatorParser.LIST:
							{
							this.state = 216;
							this.optListName();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 221;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				}
				this.state = 224;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ZOperatorParser.ARGUMENT:
					{
					this.state = 222;
					this.argName();
					}
					break;
				case ZOperatorParser.LIST:
					{
					this.state = 223;
					this.listName();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 226;
				this.match(ZOperatorParser.ARGUMENT);
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
	public nofixName(): NofixNameContext {
		let _localctx: NofixNameContext = new NofixNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ZOperatorParser.RULE_nofixName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.match(ZOperatorParser.NAME);
			this.state = 235;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 233;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ZOperatorParser.ARGUMENT:
						{
						this.state = 231;
						this.optArgName();
						}
						break;
					case ZOperatorParser.LIST:
						{
						this.state = 232;
						this.optListName();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 237;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZOperatorParser.ARGUMENT:
				{
				this.state = 238;
				this.argName();
				}
				break;
			case ZOperatorParser.LIST:
				{
				this.state = 239;
				this.listName();
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x9C\xF5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x03\x02\x03" +
		"\x02\x07\x020\n\x02\f\x02\x0E\x023\v\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03<\n\x03\x03\x03\x03\x03\x07\x03@\n\x03" +
		"\f\x03\x0E\x03C\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
		"J\n\x03\f\x03\x0E\x03M\v\x03\x05\x03O\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04W\n\x04\f\x04\x0E\x04Z\v\x04\x03\x04\x03\x04" +
		"\x03\x04\x07\x04_\n\x04\f\x04\x0E\x04b\v\x04\x03\x04\x03\x04\x03\x04\x07" +
		"\x04g\n\x04\f\x04\x0E\x04j\v\x04\x03\x04\x05\x04m\n\x04\x03\x05\x03\x05" +
		"\x03\x05\x07\x05r\n\x05\f\x05\x0E\x05u\v\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06}\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\x86\n\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\x90\n\n\x03\v\x03\v\x03\v\x03\v\x05\v\x96\n\v\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x07\x13\xB7\n\x13\f\x13\x0E\x13\xBA\v\x13\x03\x13\x03\x13\x05" +
		"\x13\xBE\n\x13\x03\x13\x03\x13\x05\x13\xC2\n\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x07\x14\xCA\n\x14\f\x14\x0E\x14\xCD\v\x14\x03" +
		"\x14\x03\x14\x05\x14\xD1\n\x14\x05\x14\xD3\n\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\xDC\n\x15\f\x15\x0E\x15\xDF\v" +
		"\x15\x03\x15\x03\x15\x05\x15\xE3\n\x15\x03\x15\x03\x15\x05\x15\xE7\n\x15" +
		"\x03\x16\x03\x16\x03\x16\x07\x16\xEC\n\x16\f\x16\x0E\x16\xEF\v\x16\x03" +
		"\x16\x03\x16\x05\x16\xF3\n\x16\x03\x16\x05X`h\x02\x02\x17\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02\x02\x03" +
		"\x04\x02\x1D\x1D##\x02\u0105\x021\x03\x02\x02\x02\x04N\x03\x02\x02\x02" +
		"\x06l\x03\x02\x02\x02\bn\x03\x02\x02\x02\n|\x03\x02\x02\x02\f\x85\x03" +
		"\x02\x02\x02\x0E\x87\x03\x02\x02\x02\x10\x89\x03\x02\x02\x02\x12\x8F\x03" +
		"\x02\x02\x02\x14\x91\x03\x02\x02\x02\x16\x99\x03\x02\x02\x02\x18\x9D\x03" +
		"\x02\x02\x02\x1A\xA1\x03\x02\x02\x02\x1C\xA5\x03\x02\x02\x02\x1E\xA8\x03" +
		"\x02\x02\x02 \xAB\x03\x02\x02\x02\"\xAE\x03\x02\x02\x02$\xC1\x03\x02\x02" +
		"\x02&\xD2\x03\x02\x02\x02(\xE6\x03\x02\x02\x02*\xE8\x03\x02\x02\x02,0" +
		"\x07\x06\x02\x02-0\x05\x04\x03\x02.0\x05\x06\x04\x02/,\x03\x02\x02\x02" +
		"/-\x03\x02\x02\x02/.\x03\x02\x02\x0203\x03\x02\x02\x021/\x03\x02\x02\x02" +
		"12\x03\x02\x02\x0224\x03\x02\x02\x0231\x03\x02\x02\x0245\x07\x02\x02\x03" +
		"5\x03\x03\x02\x02\x0267\x07\x03\x02\x0278\x07$\x02\x0289\x07F\x02\x02" +
		"9;\x07 \x02\x02:<\x05\b\x05\x02;:\x03\x02\x02\x02;<\x03\x02\x02\x02<=" +
		"\x03\x02\x02\x02=A\x07\x14\x02\x02>@\x05\x06\x04\x02?>\x03\x02\x02\x02" +
		"@C\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02BO\x03\x02\x02\x02" +
		"CA\x03\x02\x02\x02DE\x07\x03\x02\x02EF\x07$\x02\x02FG\x07F\x02\x02GK\x07" +
		"\x14\x02\x02HJ\x05\x06\x04\x02IH\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03" +
		"\x02\x02\x02KL\x03\x02\x02\x02LO\x03\x02\x02\x02MK\x03\x02\x02\x02N6\x03" +
		"\x02\x02\x02ND\x03\x02\x02\x02O\x05\x03\x02\x02\x02PQ\x07\x03\x02\x02" +
		"QR\x05\n\x06\x02RS\x07\x14\x02\x02Sm\x03\x02\x02\x02TX\x07\x05\x02\x02" +
		"UW\v\x02\x02\x02VU\x03\x02\x02\x02WZ\x03\x02\x02\x02XY\x03\x02\x02\x02" +
		"XV\x03\x02\x02\x02Y[\x03\x02\x02\x02ZX\x03\x02\x02\x02[m\x07\x14\x02\x02" +
		"\\`\x07\x04\x02\x02]_\v\x02\x02\x02^]\x03\x02\x02\x02_b\x03\x02\x02\x02" +
		"`a\x03\x02\x02\x02`^\x03\x02\x02\x02ac\x03\x02\x02\x02b`\x03\x02\x02\x02" +
		"cm\x07\x14\x02\x02dh\x07\x03\x02\x02eg\v\x02\x02\x02fe\x03\x02\x02\x02" +
		"gj\x03\x02\x02\x02hi\x03\x02\x02\x02hf\x03\x02\x02\x02ik\x03\x02\x02\x02" +
		"jh\x03\x02\x02\x02km\x07\x14\x02\x02lP\x03\x02\x02\x02lT\x03\x02\x02\x02" +
		"l\\\x03\x02\x02\x02ld\x03\x02\x02\x02m\x07\x03\x02\x02\x02ns\x07F\x02" +
		"\x02op\x07)\x02\x02pr\x07F\x02\x02qo\x03\x02\x02\x02ru\x03\x02\x02\x02" +
		"sq\x03\x02\x02\x02st\x03\x02\x02\x02t\t\x03\x02\x02\x02us\x03\x02\x02" +
		"\x02vw\x07\"\x02\x02w}\x05\x12\n\x02xy\x07\x1A\x02\x02y}\x05\f\x07\x02" +
		"z{\x07\x1B\x02\x02{}\x05\f\x07\x02|v\x03\x02\x02\x02|x\x03\x02\x02\x02" +
		"|z\x03\x02\x02\x02}\v\x03\x02\x02\x02~\x86\x05\x14\v\x02\x7F\x86\x05\x16" +
		"\f\x02\x80\x81\x05\x0E\b\x02\x81\x82\x05\x10\t\x02\x82\x83\x05\x18\r\x02" +
		"\x83\x86\x03\x02\x02\x02\x84\x86\x05\x1A\x0E\x02\x85~\x03\x02\x02\x02" +
		"\x85\x7F\x03\x02\x02\x02\x85\x80\x03\x02\x02\x02\x85\x84\x03\x02\x02\x02" +
		"\x86\r\x03\x02\x02\x02\x87\x88\x07\x07\x02\x02\x88\x0F\x03\x02\x02\x02" +
		"\x89\x8A\t\x02\x02\x02\x8A\x11\x03\x02\x02\x02\x8B\x90\x05\x14\v\x02\x8C" +
		"\x90\x05\x16\f\x02\x8D\x90\x05\x18\r\x02\x8E\x90\x05\x1A\x0E\x02\x8F\x8B" +
		"\x03\x02\x02\x02\x8F\x8C\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x8E" +
		"\x03\x02\x02\x02\x90\x13\x03\x02\x02\x02\x91\x95\x07\t\x02\x02\x92\x96" +
		"\x05$\x13\x02\x93\x94\x07\x1F\x02\x02\x94\x96\x071\x02\x02\x95\x92\x03" +
		"\x02\x02\x02\x95\x93\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x98\x07" +
		"\n\x02\x02\x98\x15\x03\x02\x02\x02\x99\x9A\x07\t\x02\x02\x9A\x9B\x05&" +
		"\x14\x02\x9B\x9C\x07\n\x02\x02\x9C\x17\x03\x02\x02\x02\x9D\x9E\x07\t\x02" +
		"\x02\x9E\x9F\x05(\x15\x02\x9F\xA0\x07\n\x02\x02\xA0\x19\x03\x02\x02\x02" +
		"\xA1\xA2\x07\t\x02\x02\xA2\xA3\x05*\x16\x02\xA3\xA4\x07\n\x02\x02\xA4" +
		"\x1B\x03\x02\x02\x02\xA5\xA6\x071\x02\x02\xA6\xA7\x07F\x02\x02\xA7\x1D" +
		"\x03\x02\x02\x02\xA8\xA9\x072\x02\x02\xA9\xAA\x07F\x02\x02\xAA\x1F\x03" +
		"\x02\x02\x02\xAB\xAC\x071\x02\x02\xAC\xAD\x07F\x02\x02\xAD!\x03\x02\x02" +
		"\x02\xAE\xAF\x072\x02\x02\xAF\xB0\x07F\x02\x02\xB0#\x03\x02\x02\x02\xB1" +
		"\xB2\x07F\x02\x02\xB2\xC2\x071\x02\x02\xB3\xB8\x07F\x02\x02\xB4\xB7\x05" +
		"\x1C\x0F\x02\xB5\xB7\x05\x1E\x10\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB5\x03" +
		"\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03" +
		"\x02\x02\x02\xB9\xBD\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xBE\x05" +
		" \x11\x02\xBC\xBE\x05\"\x12\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBC\x03\x02" +
		"\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC0\x071\x02\x02\xC0\xC2\x03\x02" +
		"\x02\x02\xC1\xB1\x03\x02\x02\x02\xC1\xB3\x03\x02\x02\x02\xC2%\x03\x02" +
		"\x02\x02\xC3\xC4\x071\x02\x02\xC4\xD3\x07F\x02\x02\xC5\xC6\x071\x02\x02" +
		"\xC6\xCB\x07F\x02\x02\xC7\xCA\x05\x1C\x0F\x02\xC8\xCA\x05\x1E\x10\x02" +
		"\xC9\xC7\x03\x02\x02\x02\xC9\xC8\x03\x02\x02\x02\xCA\xCD\x03\x02\x02\x02" +
		"\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xD0\x03\x02\x02\x02" +
		"\xCD\xCB\x03\x02\x02\x02\xCE\xD1\x05 \x11\x02\xCF\xD1\x05\"\x12\x02\xD0" +
		"\xCE\x03\x02\x02\x02\xD0\xCF\x03\x02\x02\x02\xD1\xD3\x03\x02\x02\x02\xD2" +
		"\xC3\x03\x02\x02\x02\xD2\xC5\x03\x02\x02\x02\xD3\'\x03\x02\x02\x02\xD4" +
		"\xD5\x071\x02\x02\xD5\xD6\x07F\x02\x02\xD6\xE7\x071\x02\x02\xD7\xD8\x07" +
		"1\x02\x02\xD8\xDD\x07F\x02\x02\xD9\xDC\x05\x1C\x0F\x02\xDA\xDC\x05\x1E" +
		"\x10\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC\xDF\x03\x02" +
		"\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE2\x03\x02" +
		"\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xE3\x05 \x11\x02\xE1\xE3\x05\"\x12" +
		"\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02" +
		"\x02\xE4\xE5\x071\x02\x02\xE5\xE7\x03\x02\x02\x02\xE6\xD4\x03\x02\x02" +
		"\x02\xE6\xD7\x03\x02\x02\x02\xE7)\x03\x02\x02\x02\xE8\xED\x07F\x02\x02" +
		"\xE9\xEC\x05\x1C\x0F\x02\xEA\xEC\x05\x1E\x10\x02\xEB\xE9\x03\x02\x02\x02" +
		"\xEB\xEA\x03\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02" +
		"\xED\xEE\x03\x02\x02\x02\xEE\xF2\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02" +
		"\xF0\xF3\x05 \x11\x02\xF1\xF3\x05\"\x12\x02\xF2\xF0\x03\x02\x02\x02\xF2" +
		"\xF1\x03\x02\x02\x02\xF3+\x03\x02\x02\x02 /1;AKNX`hls|\x85\x8F\x95\xB6" +
		"\xB8\xBD\xC1\xC9\xCB\xD0\xD2\xDB\xDD\xE2\xE6\xEB\xED\xF2";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ZOperatorParser.__ATN) {
			ZOperatorParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ZOperatorParser._serializedATN));
		}

		return ZOperatorParser.__ATN;
	}

}

export class SpecificationContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ZOperatorParser.EOF, 0); }
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZOperatorParser.TEXT);
		} else {
			return this.getToken(ZOperatorParser.TEXT, i);
		}
	}
	public section(): SectionContext[];
	public section(i: number): SectionContext;
	public section(i?: number): SectionContext | SectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SectionContext);
		} else {
			return this.getRuleContext(i, SectionContext);
		}
	}
	public paragraph(): ParagraphContext[];
	public paragraph(i: number): ParagraphContext;
	public paragraph(i?: number): ParagraphContext | ParagraphContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParagraphContext);
		} else {
			return this.getRuleContext(i, ParagraphContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_specification; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterSpecification) {
			listener.enterSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitSpecification) {
			listener.exitSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitSpecification) {
			return visitor.visitSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SectionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_section; }
	public copyFrom(ctx: SectionContext): void {
		super.copyFrom(ctx);
	}
}
export class InheritingSectionContext extends SectionContext {
	public ZED(): TerminalNode { return this.getToken(ZOperatorParser.ZED, 0); }
	public SECTION(): TerminalNode { return this.getToken(ZOperatorParser.SECTION, 0); }
	public NAME(): TerminalNode { return this.getToken(ZOperatorParser.NAME, 0); }
	public PARENTS(): TerminalNode { return this.getToken(ZOperatorParser.PARENTS, 0); }
	public END(): TerminalNode { return this.getToken(ZOperatorParser.END, 0); }
	public formals(): FormalsContext | undefined {
		return this.tryGetRuleContext(0, FormalsContext);
	}
	public paragraph(): ParagraphContext[];
	public paragraph(i: number): ParagraphContext;
	public paragraph(i?: number): ParagraphContext | ParagraphContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParagraphContext);
		} else {
			return this.getRuleContext(i, ParagraphContext);
		}
	}
	constructor(ctx: SectionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterInheritingSection) {
			listener.enterInheritingSection(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitInheritingSection) {
			listener.exitInheritingSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitInheritingSection) {
			return visitor.visitInheritingSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BaseSectionContext extends SectionContext {
	public ZED(): TerminalNode { return this.getToken(ZOperatorParser.ZED, 0); }
	public SECTION(): TerminalNode { return this.getToken(ZOperatorParser.SECTION, 0); }
	public NAME(): TerminalNode { return this.getToken(ZOperatorParser.NAME, 0); }
	public END(): TerminalNode { return this.getToken(ZOperatorParser.END, 0); }
	public paragraph(): ParagraphContext[];
	public paragraph(i: number): ParagraphContext;
	public paragraph(i?: number): ParagraphContext | ParagraphContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParagraphContext);
		} else {
			return this.getRuleContext(i, ParagraphContext);
		}
	}
	constructor(ctx: SectionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterBaseSection) {
			listener.enterBaseSection(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitBaseSection) {
			listener.exitBaseSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitBaseSection) {
			return visitor.visitBaseSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParagraphContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_paragraph; }
	public copyFrom(ctx: ParagraphContext): void {
		super.copyFrom(ctx);
	}
}
export class OperatorTemplateParagraphContext extends ParagraphContext {
	public ZED(): TerminalNode { return this.getToken(ZOperatorParser.ZED, 0); }
	public operatorTemplate(): OperatorTemplateContext {
		return this.getRuleContext(0, OperatorTemplateContext);
	}
	public END(): TerminalNode { return this.getToken(ZOperatorParser.END, 0); }
	constructor(ctx: ParagraphContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterOperatorTemplateParagraph) {
			listener.enterOperatorTemplateParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitOperatorTemplateParagraph) {
			listener.exitOperatorTemplateParagraph(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitOperatorTemplateParagraph) {
			return visitor.visitOperatorTemplateParagraph(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AxiomaticDescriptionParagraphContext extends ParagraphContext {
	public AX(): TerminalNode { return this.getToken(ZOperatorParser.AX, 0); }
	public END(): TerminalNode { return this.getToken(ZOperatorParser.END, 0); }
	constructor(ctx: ParagraphContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterAxiomaticDescriptionParagraph) {
			listener.enterAxiomaticDescriptionParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitAxiomaticDescriptionParagraph) {
			listener.exitAxiomaticDescriptionParagraph(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitAxiomaticDescriptionParagraph) {
			return visitor.visitAxiomaticDescriptionParagraph(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SchemaDefinitionParagraphContext extends ParagraphContext {
	public SCH(): TerminalNode { return this.getToken(ZOperatorParser.SCH, 0); }
	public END(): TerminalNode { return this.getToken(ZOperatorParser.END, 0); }
	constructor(ctx: ParagraphContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterSchemaDefinitionParagraph) {
			listener.enterSchemaDefinitionParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitSchemaDefinitionParagraph) {
			listener.exitSchemaDefinitionParagraph(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitSchemaDefinitionParagraph) {
			return visitor.visitSchemaDefinitionParagraph(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NONOperatorTemplateParagraphContext extends ParagraphContext {
	public ZED(): TerminalNode { return this.getToken(ZOperatorParser.ZED, 0); }
	public END(): TerminalNode { return this.getToken(ZOperatorParser.END, 0); }
	constructor(ctx: ParagraphContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterNONOperatorTemplateParagraph) {
			listener.enterNONOperatorTemplateParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitNONOperatorTemplateParagraph) {
			listener.exitNONOperatorTemplateParagraph(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitNONOperatorTemplateParagraph) {
			return visitor.visitNONOperatorTemplateParagraph(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalsContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZOperatorParser.NAME);
		} else {
			return this.getToken(ZOperatorParser.NAME, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZOperatorParser.COMMA);
		} else {
			return this.getToken(ZOperatorParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_formals; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterFormals) {
			listener.enterFormals(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitFormals) {
			listener.exitFormals(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitFormals) {
			return visitor.visitFormals(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorTemplateContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_operatorTemplate; }
	public copyFrom(ctx: OperatorTemplateContext): void {
		super.copyFrom(ctx);
	}
}
export class RelationOperatorTemplateContext extends OperatorTemplateContext {
	public RELATION(): TerminalNode { return this.getToken(ZOperatorParser.RELATION, 0); }
	public template(): TemplateContext {
		return this.getRuleContext(0, TemplateContext);
	}
	constructor(ctx: OperatorTemplateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterRelationOperatorTemplate) {
			listener.enterRelationOperatorTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitRelationOperatorTemplate) {
			listener.exitRelationOperatorTemplate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitRelationOperatorTemplate) {
			return visitor.visitRelationOperatorTemplate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionOperatorTemplateContext extends OperatorTemplateContext {
	public FUNCTION(): TerminalNode { return this.getToken(ZOperatorParser.FUNCTION, 0); }
	public categoryTemplate(): CategoryTemplateContext {
		return this.getRuleContext(0, CategoryTemplateContext);
	}
	constructor(ctx: OperatorTemplateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterFunctionOperatorTemplate) {
			listener.enterFunctionOperatorTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitFunctionOperatorTemplate) {
			listener.exitFunctionOperatorTemplate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitFunctionOperatorTemplate) {
			return visitor.visitFunctionOperatorTemplate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GenericOperatorTemplateContext extends OperatorTemplateContext {
	public GENERIC(): TerminalNode { return this.getToken(ZOperatorParser.GENERIC, 0); }
	public categoryTemplate(): CategoryTemplateContext {
		return this.getRuleContext(0, CategoryTemplateContext);
	}
	constructor(ctx: OperatorTemplateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterGenericOperatorTemplate) {
			listener.enterGenericOperatorTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitGenericOperatorTemplate) {
			listener.exitGenericOperatorTemplate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitGenericOperatorTemplate) {
			return visitor.visitGenericOperatorTemplate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CategoryTemplateContext extends ParserRuleContext {
	public prefixTemplate(): PrefixTemplateContext | undefined {
		return this.tryGetRuleContext(0, PrefixTemplateContext);
	}
	public postfixTemplate(): PostfixTemplateContext | undefined {
		return this.tryGetRuleContext(0, PostfixTemplateContext);
	}
	public prec(): PrecContext | undefined {
		return this.tryGetRuleContext(0, PrecContext);
	}
	public assoc(): AssocContext | undefined {
		return this.tryGetRuleContext(0, AssocContext);
	}
	public infixTemplate(): InfixTemplateContext | undefined {
		return this.tryGetRuleContext(0, InfixTemplateContext);
	}
	public nofixTemplate(): NofixTemplateContext | undefined {
		return this.tryGetRuleContext(0, NofixTemplateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_categoryTemplate; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterCategoryTemplate) {
			listener.enterCategoryTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitCategoryTemplate) {
			listener.exitCategoryTemplate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitCategoryTemplate) {
			return visitor.visitCategoryTemplate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrecContext extends ParserRuleContext {
	public NUMERAL(): TerminalNode { return this.getToken(ZOperatorParser.NUMERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_prec; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterPrec) {
			listener.enterPrec(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitPrec) {
			listener.exitPrec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitPrec) {
			return visitor.visitPrec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssocContext extends ParserRuleContext {
	public LEFTASSOC(): TerminalNode | undefined { return this.tryGetToken(ZOperatorParser.LEFTASSOC, 0); }
	public RIGHTASSOC(): TerminalNode | undefined { return this.tryGetToken(ZOperatorParser.RIGHTASSOC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_assoc; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterAssoc) {
			listener.enterAssoc(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitAssoc) {
			listener.exitAssoc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitAssoc) {
			return visitor.visitAssoc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateContext extends ParserRuleContext {
	public prefixTemplate(): PrefixTemplateContext | undefined {
		return this.tryGetRuleContext(0, PrefixTemplateContext);
	}
	public postfixTemplate(): PostfixTemplateContext | undefined {
		return this.tryGetRuleContext(0, PostfixTemplateContext);
	}
	public infixTemplate(): InfixTemplateContext | undefined {
		return this.tryGetRuleContext(0, InfixTemplateContext);
	}
	public nofixTemplate(): NofixTemplateContext | undefined {
		return this.tryGetRuleContext(0, NofixTemplateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_template; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterTemplate) {
			listener.enterTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitTemplate) {
			listener.exitTemplate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitTemplate) {
			return visitor.visitTemplate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefixTemplateContext extends ParserRuleContext {
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(ZOperatorParser.LEFT_PARENTHESIS, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(ZOperatorParser.RIGHT_PARENTHESIS, 0); }
	public prefixName(): PrefixNameContext | undefined {
		return this.tryGetRuleContext(0, PrefixNameContext);
	}
	public POWERSET(): TerminalNode | undefined { return this.tryGetToken(ZOperatorParser.POWERSET, 0); }
	public ARGUMENT(): TerminalNode | undefined { return this.tryGetToken(ZOperatorParser.ARGUMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_prefixTemplate; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterPrefixTemplate) {
			listener.enterPrefixTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitPrefixTemplate) {
			listener.exitPrefixTemplate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitPrefixTemplate) {
			return visitor.visitPrefixTemplate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixTemplateContext extends ParserRuleContext {
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(ZOperatorParser.LEFT_PARENTHESIS, 0); }
	public postfixName(): PostfixNameContext {
		return this.getRuleContext(0, PostfixNameContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(ZOperatorParser.RIGHT_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_postfixTemplate; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterPostfixTemplate) {
			listener.enterPostfixTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitPostfixTemplate) {
			listener.exitPostfixTemplate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitPostfixTemplate) {
			return visitor.visitPostfixTemplate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InfixTemplateContext extends ParserRuleContext {
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(ZOperatorParser.LEFT_PARENTHESIS, 0); }
	public infixName(): InfixNameContext {
		return this.getRuleContext(0, InfixNameContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(ZOperatorParser.RIGHT_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_infixTemplate; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterInfixTemplate) {
			listener.enterInfixTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitInfixTemplate) {
			listener.exitInfixTemplate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitInfixTemplate) {
			return visitor.visitInfixTemplate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NofixTemplateContext extends ParserRuleContext {
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(ZOperatorParser.LEFT_PARENTHESIS, 0); }
	public nofixName(): NofixNameContext {
		return this.getRuleContext(0, NofixNameContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(ZOperatorParser.RIGHT_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_nofixTemplate; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterNofixTemplate) {
			listener.enterNofixTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitNofixTemplate) {
			listener.exitNofixTemplate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitNofixTemplate) {
			return visitor.visitNofixTemplate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptArgNameContext extends ParserRuleContext {
	public ARGUMENT(): TerminalNode { return this.getToken(ZOperatorParser.ARGUMENT, 0); }
	public NAME(): TerminalNode { return this.getToken(ZOperatorParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_optArgName; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterOptArgName) {
			listener.enterOptArgName(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitOptArgName) {
			listener.exitOptArgName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitOptArgName) {
			return visitor.visitOptArgName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptListNameContext extends ParserRuleContext {
	public LIST(): TerminalNode { return this.getToken(ZOperatorParser.LIST, 0); }
	public NAME(): TerminalNode { return this.getToken(ZOperatorParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_optListName; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterOptListName) {
			listener.enterOptListName(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitOptListName) {
			listener.exitOptListName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitOptListName) {
			return visitor.visitOptListName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgNameContext extends ParserRuleContext {
	public ARGUMENT(): TerminalNode { return this.getToken(ZOperatorParser.ARGUMENT, 0); }
	public NAME(): TerminalNode { return this.getToken(ZOperatorParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_argName; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterArgName) {
			listener.enterArgName(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitArgName) {
			listener.exitArgName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitArgName) {
			return visitor.visitArgName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListNameContext extends ParserRuleContext {
	public LIST(): TerminalNode { return this.getToken(ZOperatorParser.LIST, 0); }
	public NAME(): TerminalNode { return this.getToken(ZOperatorParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_listName; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterListName) {
			listener.enterListName(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitListName) {
			listener.exitListName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitListName) {
			return visitor.visitListName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefixNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(ZOperatorParser.NAME, 0); }
	public ARGUMENT(): TerminalNode { return this.getToken(ZOperatorParser.ARGUMENT, 0); }
	public argName(): ArgNameContext | undefined {
		return this.tryGetRuleContext(0, ArgNameContext);
	}
	public listName(): ListNameContext | undefined {
		return this.tryGetRuleContext(0, ListNameContext);
	}
	public optArgName(): OptArgNameContext[];
	public optArgName(i: number): OptArgNameContext;
	public optArgName(i?: number): OptArgNameContext | OptArgNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptArgNameContext);
		} else {
			return this.getRuleContext(i, OptArgNameContext);
		}
	}
	public optListName(): OptListNameContext[];
	public optListName(i: number): OptListNameContext;
	public optListName(i?: number): OptListNameContext | OptListNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptListNameContext);
		} else {
			return this.getRuleContext(i, OptListNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_prefixName; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterPrefixName) {
			listener.enterPrefixName(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitPrefixName) {
			listener.exitPrefixName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitPrefixName) {
			return visitor.visitPrefixName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixNameContext extends ParserRuleContext {
	public ARGUMENT(): TerminalNode { return this.getToken(ZOperatorParser.ARGUMENT, 0); }
	public NAME(): TerminalNode { return this.getToken(ZOperatorParser.NAME, 0); }
	public argName(): ArgNameContext | undefined {
		return this.tryGetRuleContext(0, ArgNameContext);
	}
	public listName(): ListNameContext | undefined {
		return this.tryGetRuleContext(0, ListNameContext);
	}
	public optArgName(): OptArgNameContext[];
	public optArgName(i: number): OptArgNameContext;
	public optArgName(i?: number): OptArgNameContext | OptArgNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptArgNameContext);
		} else {
			return this.getRuleContext(i, OptArgNameContext);
		}
	}
	public optListName(): OptListNameContext[];
	public optListName(i: number): OptListNameContext;
	public optListName(i?: number): OptListNameContext | OptListNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptListNameContext);
		} else {
			return this.getRuleContext(i, OptListNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_postfixName; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterPostfixName) {
			listener.enterPostfixName(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitPostfixName) {
			listener.exitPostfixName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitPostfixName) {
			return visitor.visitPostfixName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InfixNameContext extends ParserRuleContext {
	public ARGUMENT(): TerminalNode[];
	public ARGUMENT(i: number): TerminalNode;
	public ARGUMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZOperatorParser.ARGUMENT);
		} else {
			return this.getToken(ZOperatorParser.ARGUMENT, i);
		}
	}
	public NAME(): TerminalNode { return this.getToken(ZOperatorParser.NAME, 0); }
	public argName(): ArgNameContext | undefined {
		return this.tryGetRuleContext(0, ArgNameContext);
	}
	public listName(): ListNameContext | undefined {
		return this.tryGetRuleContext(0, ListNameContext);
	}
	public optArgName(): OptArgNameContext[];
	public optArgName(i: number): OptArgNameContext;
	public optArgName(i?: number): OptArgNameContext | OptArgNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptArgNameContext);
		} else {
			return this.getRuleContext(i, OptArgNameContext);
		}
	}
	public optListName(): OptListNameContext[];
	public optListName(i: number): OptListNameContext;
	public optListName(i?: number): OptListNameContext | OptListNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptListNameContext);
		} else {
			return this.getRuleContext(i, OptListNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_infixName; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterInfixName) {
			listener.enterInfixName(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitInfixName) {
			listener.exitInfixName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitInfixName) {
			return visitor.visitInfixName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NofixNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(ZOperatorParser.NAME, 0); }
	public argName(): ArgNameContext | undefined {
		return this.tryGetRuleContext(0, ArgNameContext);
	}
	public listName(): ListNameContext | undefined {
		return this.tryGetRuleContext(0, ListNameContext);
	}
	public optArgName(): OptArgNameContext[];
	public optArgName(i: number): OptArgNameContext;
	public optArgName(i?: number): OptArgNameContext | OptArgNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptArgNameContext);
		} else {
			return this.getRuleContext(i, OptArgNameContext);
		}
	}
	public optListName(): OptListNameContext[];
	public optListName(i: number): OptListNameContext;
	public optListName(i?: number): OptListNameContext | OptListNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptListNameContext);
		} else {
			return this.getRuleContext(i, OptListNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZOperatorParser.RULE_nofixName; }
	// @Override
	public enterRule(listener: ZOperatorParserListener): void {
		if (listener.enterNofixName) {
			listener.enterNofixName(this);
		}
	}
	// @Override
	public exitRule(listener: ZOperatorParserListener): void {
		if (listener.exitNofixName) {
			listener.exitNofixName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZOperatorParserVisitor<Result>): Result {
		if (visitor.visitNofixName) {
			return visitor.visitNofixName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


