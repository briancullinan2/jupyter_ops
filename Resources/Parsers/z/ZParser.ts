// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/z/ZParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { ZParserListener } from "./ZParserListener";

export class ZParser extends Parser {
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
	public static readonly RULE_freetype = 3;
	public static readonly RULE_branch = 4;
	public static readonly RULE_formals = 5;
	public static readonly RULE_predicate = 6;
	public static readonly RULE_expression = 7;
	public static readonly RULE_schemaText = 8;
	public static readonly RULE_declPart = 9;
	public static readonly RULE_declNameExpression = 10;
	public static readonly RULE_declaration = 11;
	public static readonly RULE_operatorTemplate = 12;
	public static readonly RULE_categoryTemplate = 13;
	public static readonly RULE_prec = 14;
	public static readonly RULE_assoc = 15;
	public static readonly RULE_template = 16;
	public static readonly RULE_prefixTemplate = 17;
	public static readonly RULE_postfixTemplate = 18;
	public static readonly RULE_infixTemplate = 19;
	public static readonly RULE_nofixTemplate = 20;
	public static readonly RULE_declName = 21;
	public static readonly RULE_refName = 22;
	public static readonly RULE_opName = 23;
	public static readonly RULE_prefixName = 24;
	public static readonly RULE_postfixName = 25;
	public static readonly RULE_infixName = 26;
	public static readonly RULE_nofixName = 27;
	public static readonly RULE_genName = 28;
	public static readonly RULE_prefixGenName = 29;
	public static readonly RULE_postfixGenName = 30;
	public static readonly RULE_infixGenName = 31;
	public static readonly RULE_nofixGenName = 32;
	public static readonly RULE_relation = 33;
	public static readonly RULE_prefixRel = 34;
	public static readonly RULE_postfixRel = 35;
	public static readonly RULE_infixRel = 36;
	public static readonly RULE_nofixRel = 37;
	public static readonly RULE_application = 38;
	public static readonly RULE_prefixApp = 39;
	public static readonly RULE_postfixApp = 40;
	public static readonly RULE_infixApp = 41;
	public static readonly RULE_nofixApp = 42;
	public static readonly RULE_expSep = 43;
	public static readonly RULE_expressionList = 44;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"specification", "section", "paragraph", "freetype", "branch", "formals", 
		"predicate", "expression", "schemaText", "declPart", "declNameExpression", 
		"declaration", "operatorTemplate", "categoryTemplate", "prec", "assoc", 
		"template", "prefixTemplate", "postfixTemplate", "infixTemplate", "nofixTemplate", 
		"declName", "refName", "opName", "prefixName", "postfixName", "infixName", 
		"nofixName", "genName", "prefixGenName", "postfixGenName", "infixGenName", 
		"nofixGenName", "relation", "prefixRel", "postfixRel", "infixRel", "nofixRel", 
		"application", "prefixApp", "postfixApp", "infixApp", "nofixApp", "expSep", 
		"expressionList",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ZParser._LITERAL_NAMES, ZParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ZParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ZParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return ZParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ZParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ZParser._ATN, this);
	}
	// @RuleVersion(0)
	public specification(): SpecificationContext {
		let _localctx: SpecificationContext = new SpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ZParser.RULE_specification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.ZED) | (1 << ZParser.SCH) | (1 << ZParser.AX) | (1 << ZParser.TEXT))) !== 0)) {
				{
				this.state = 93;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 90;
					this.match(ZParser.TEXT);
					}
					break;

				case 2:
					{
					this.state = 91;
					this.section();
					}
					break;

				case 3:
					{
					this.state = 92;
					this.paragraph();
					}
					break;
				}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 98;
			this.match(ZParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, ZParser.RULE_section);
		let _la: number;
		try {
			let _alt: number;
			this.state = 124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				_localctx = new InheritingSectionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 100;
				this.match(ZParser.ZED);
				this.state = 101;
				this.match(ZParser.SECTION);
				this.state = 102;
				this.match(ZParser.NAME);
				this.state = 103;
				this.match(ZParser.PARENTS);
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ZParser.NAME) {
					{
					this.state = 104;
					this.formals();
					}
				}

				this.state = 107;
				this.match(ZParser.END);
				this.state = 111;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 108;
						this.paragraph();
						}
						}
					}
					this.state = 113;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				}
				}
				break;

			case 2:
				_localctx = new BaseSectionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 114;
				this.match(ZParser.ZED);
				this.state = 115;
				this.match(ZParser.SECTION);
				this.state = 116;
				this.match(ZParser.NAME);
				this.state = 117;
				this.match(ZParser.END);
				this.state = 121;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 118;
						this.paragraph();
						}
						}
					}
					this.state = 123;
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
		this.enterRule(_localctx, 4, ZParser.RULE_paragraph);
		let _la: number;
		try {
			this.state = 220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				_localctx = new GivenTypesParagraphContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 126;
				this.match(ZParser.ZED);
				this.state = 127;
				this.match(ZParser.LEFT_SQUARE_BRACKET);
				this.state = 128;
				this.formals();
				this.state = 129;
				this.match(ZParser.RIGHT_SQUARE_BRACKET);
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ZParser.NL) {
					{
					this.state = 130;
					this.match(ZParser.NL);
					}
				}

				this.state = 133;
				this.match(ZParser.END);
				}
				break;

			case 2:
				_localctx = new AxiomaticDescriptionParagraphContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 135;
				this.match(ZParser.AX);
				this.state = 136;
				this.schemaText();
				this.state = 137;
				this.match(ZParser.END);
				}
				break;

			case 3:
				_localctx = new SchemaDefinitionParagraphContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 139;
				this.match(ZParser.SCH);
				this.state = 140;
				this.match(ZParser.NAME);
				this.state = 142;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 141;
					this.match(ZParser.NL);
					}
					break;
				}
				this.state = 144;
				this.schemaText();
				this.state = 145;
				this.match(ZParser.END);
				}
				break;

			case 4:
				_localctx = new GenericAxiomaticDescriptionParagraphContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 147;
				this.match(ZParser.AX);
				this.state = 148;
				this.match(ZParser.GEN);
				this.state = 149;
				this.match(ZParser.LEFT_SQUARE_BRACKET);
				this.state = 150;
				this.formals();
				this.state = 151;
				this.match(ZParser.RIGHT_SQUARE_BRACKET);
				this.state = 153;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 152;
					this.match(ZParser.NL);
					}
					break;
				}
				this.state = 155;
				this.schemaText();
				this.state = 156;
				this.match(ZParser.END);
				}
				break;

			case 5:
				_localctx = new GenericSchemaDefinitionParagraphContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 158;
				this.match(ZParser.SCH);
				this.state = 159;
				this.match(ZParser.GEN);
				this.state = 160;
				this.match(ZParser.NAME);
				this.state = 161;
				this.match(ZParser.LEFT_SQUARE_BRACKET);
				this.state = 162;
				this.formals();
				this.state = 163;
				this.match(ZParser.RIGHT_SQUARE_BRACKET);
				this.state = 165;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 164;
					this.match(ZParser.NL);
					}
					break;
				}
				this.state = 167;
				this.schemaText();
				this.state = 168;
				this.match(ZParser.END);
				}
				break;

			case 6:
				_localctx = new HorizontalDefinitionParagraphContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 170;
				this.match(ZParser.ZED);
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ZParser.NL) {
					{
					this.state = 171;
					this.match(ZParser.NL);
					}
				}

				this.state = 174;
				this.declNameExpression();
				this.state = 175;
				this.match(ZParser.END);
				}
				break;

			case 7:
				_localctx = new GenericHorizontalDefinitionParagraphContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 177;
				this.match(ZParser.ZED);
				this.state = 178;
				this.declName();
				this.state = 179;
				this.match(ZParser.LEFT_SQUARE_BRACKET);
				this.state = 180;
				this.formals();
				this.state = 181;
				this.match(ZParser.RIGHT_SQUARE_BRACKET);
				this.state = 182;
				this.match(ZParser.DEFINE_EQUAL);
				this.state = 183;
				this.expression(0);
				this.state = 184;
				this.match(ZParser.END);
				}
				break;

			case 8:
				_localctx = new GenericOperatorDefinitionParagraphContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 186;
				this.match(ZParser.ZED);
				this.state = 187;
				this.genName();
				this.state = 188;
				this.match(ZParser.DEFINE_EQUAL);
				this.state = 189;
				this.expression(0);
				this.state = 190;
				this.match(ZParser.END);
				}
				break;

			case 9:
				_localctx = new FreeTypesParagraphContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 192;
				this.match(ZParser.ZED);
				this.state = 193;
				this.freetype();
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ZParser.AMPERSAND) {
					{
					{
					this.state = 194;
					this.match(ZParser.AMPERSAND);
					this.state = 195;
					this.freetype();
					}
					}
					this.state = 200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 201;
				this.match(ZParser.END);
				}
				break;

			case 10:
				_localctx = new ConjectureParagraphContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 203;
				this.match(ZParser.ZED);
				this.state = 204;
				this.match(ZParser.CONJECTURE);
				this.state = 205;
				this.predicate(0);
				this.state = 206;
				this.match(ZParser.END);
				}
				break;

			case 11:
				_localctx = new GenericConjectureParagraphContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 208;
				this.match(ZParser.ZED);
				this.state = 209;
				this.match(ZParser.LEFT_SQUARE_BRACKET);
				this.state = 210;
				this.formals();
				this.state = 211;
				this.match(ZParser.RIGHT_SQUARE_BRACKET);
				this.state = 212;
				this.match(ZParser.CONJECTURE);
				this.state = 213;
				this.predicate(0);
				this.state = 214;
				this.match(ZParser.END);
				}
				break;

			case 12:
				_localctx = new OperatorTemplateParagraphContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 216;
				this.match(ZParser.ZED);
				this.state = 217;
				this.operatorTemplate();
				this.state = 218;
				this.match(ZParser.END);
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
	public freetype(): FreetypeContext {
		let _localctx: FreetypeContext = new FreetypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ZParser.RULE_freetype);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.match(ZParser.NAME);
			this.state = 223;
			this.match(ZParser.FREE_EQUALS);
			this.state = 224;
			this.branch();
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ZParser.VERTICAL_LINE) {
				{
				{
				this.state = 225;
				this.match(ZParser.VERTICAL_LINE);
				this.state = 226;
				this.branch();
				}
				}
				this.state = 231;
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
	public branch(): BranchContext {
		let _localctx: BranchContext = new BranchContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ZParser.RULE_branch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.declName();
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZParser.LEFT_DOUBLE_ANGLE_BRACKET) {
				{
				this.state = 233;
				this.match(ZParser.LEFT_DOUBLE_ANGLE_BRACKET);
				this.state = 234;
				this.expression(0);
				this.state = 235;
				this.match(ZParser.RIGHT_DOUBLE_ANGLE_BRACKET);
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
	public formals(): FormalsContext {
		let _localctx: FormalsContext = new FormalsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ZParser.RULE_formals);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.match(ZParser.NAME);
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ZParser.COMMA) {
				{
				{
				this.state = 240;
				this.match(ZParser.COMMA);
				this.state = 241;
				this.match(ZParser.NAME);
				}
				}
				this.state = 246;
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

	public predicate(): PredicateContext;
	public predicate(_p: number): PredicateContext;
	// @RuleVersion(0)
	public predicate(_p?: number): PredicateContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PredicateContext = new PredicateContext(this._ctx, _parentState);
		let _prevctx: PredicateContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, ZParser.RULE_predicate, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				_localctx = new UniversalQuantificationPredicateContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 248;
				this.match(ZParser.FOR_ALL);
				this.state = 249;
				this.schemaText();
				this.state = 250;
				this.match(ZParser.SPOT);
				this.state = 251;
				this.predicate(13);
				}
				break;

			case 2:
				{
				_localctx = new ExistentialQuantificationPredicateContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 253;
				this.match(ZParser.THERE_EXISTS);
				this.state = 254;
				this.schemaText();
				this.state = 255;
				this.match(ZParser.SPOT);
				this.state = 256;
				this.predicate(12);
				}
				break;

			case 3:
				{
				_localctx = new UniqueExistentialQuantificationPredicateContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 258;
				this.match(ZParser.UNIQUE_EXISTS);
				this.state = 259;
				this.schemaText();
				this.state = 260;
				this.match(ZParser.SPOT);
				this.state = 261;
				this.predicate(11);
				}
				break;

			case 4:
				{
				_localctx = new NegationPredicateContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 263;
				this.match(ZParser.NOT_SIGN);
				this.state = 264;
				this.predicate(6);
				}
				break;

			case 5:
				{
				_localctx = new RelationOperatorApplicationPredicateContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 265;
				this.relation();
				}
				break;

			case 6:
				{
				_localctx = new SchemaPredicatePredicateContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 266;
				this.expression(0);
				}
				break;

			case 7:
				{
				_localctx = new TruthPredicateContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 267;
				this.match(ZParser.TRUE);
				}
				break;

			case 8:
				{
				_localctx = new FalsityPredicateContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 268;
				this.match(ZParser.FALSE);
				}
				break;

			case 9:
				{
				_localctx = new ParenthesizedPredicateContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 269;
				this.match(ZParser.LEFT_PARENTHESIS);
				this.state = 270;
				this.predicate(0);
				this.state = 271;
				this.match(ZParser.RIGHT_PARENTHESIS);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 295;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 293;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
					case 1:
						{
						_localctx = new NewlineConjunctionPredicateContext(new PredicateContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_predicate);
						this.state = 275;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 276;
						this.match(ZParser.NL);
						this.state = 277;
						this.predicate(16);
						}
						break;

					case 2:
						{
						_localctx = new SemicolonConjunctionPredicateContext(new PredicateContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_predicate);
						this.state = 278;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 279;
						this.match(ZParser.SEMICOLON);
						this.state = 280;
						this.predicate(15);
						}
						break;

					case 3:
						{
						_localctx = new EquivalencePredicateContext(new PredicateContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_predicate);
						this.state = 281;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 282;
						this.match(ZParser.LEFT_RIGHT_DOUBLE_ARROW);
						this.state = 283;
						this.predicate(11);
						}
						break;

					case 4:
						{
						_localctx = new ImplicationPredicateContext(new PredicateContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_predicate);
						this.state = 284;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 285;
						this.match(ZParser.RIGHTWARDS_DOUBLE_ARROW);
						this.state = 286;
						this.predicate(10);
						}
						break;

					case 5:
						{
						_localctx = new DisjunctionPredicateContext(new PredicateContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_predicate);
						this.state = 287;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 288;
						this.match(ZParser.LOGICAL_OR);
						this.state = 289;
						this.predicate(9);
						}
						break;

					case 6:
						{
						_localctx = new ConjunctionPredicateContext(new PredicateContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_predicate);
						this.state = 290;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 291;
						this.match(ZParser.LOGICAL_AND);
						this.state = 292;
						this.predicate(8);
						}
						break;
					}
					}
				}
				this.state = 297;
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, ZParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				_localctx = new SchemaUniversalQuantificationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 299;
				this.match(ZParser.FOR_ALL);
				this.state = 300;
				this.schemaText();
				this.state = 301;
				this.match(ZParser.SPOT);
				this.state = 302;
				this.expression(44);
				}
				break;

			case 2:
				{
				_localctx = new SchemaExistentialQuantificationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 304;
				this.match(ZParser.THERE_EXISTS);
				this.state = 305;
				this.schemaText();
				this.state = 306;
				this.match(ZParser.SPOT);
				this.state = 307;
				this.expression(43);
				}
				break;

			case 3:
				{
				_localctx = new SchemaUniqueExistentialQuantificationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 309;
				this.match(ZParser.UNIQUE_EXISTS);
				this.state = 310;
				this.schemaText();
				this.state = 311;
				this.match(ZParser.SPOT);
				this.state = 312;
				this.expression(42);
				}
				break;

			case 4:
				{
				_localctx = new FunctionConstructionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 314;
				this.match(ZParser.GREEK_SMALL_LETTER_LAMBDA);
				this.state = 315;
				this.schemaText();
				this.state = 316;
				this.match(ZParser.SPOT);
				this.state = 317;
				this.expression(41);
				}
				break;

			case 5:
				{
				_localctx = new DefiniteDescriptionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 319;
				this.match(ZParser.GREEK_SMALL_LETTER_MU);
				this.state = 320;
				this.schemaText();
				this.state = 321;
				this.match(ZParser.SPOT);
				this.state = 322;
				this.expression(40);
				}
				break;

			case 6:
				{
				_localctx = new SubstitutionExpressionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 324;
				this.match(ZParser.LET);
				this.state = 325;
				this.declNameExpression();
				this.state = 330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ZParser.SEMICOLON) {
					{
					{
					this.state = 326;
					this.match(ZParser.SEMICOLON);
					this.state = 327;
					this.declNameExpression();
					}
					}
					this.state = 332;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 333;
				this.match(ZParser.SPOT);
				this.state = 334;
				this.expression(39);
				}
				break;

			case 7:
				{
				_localctx = new SchemaNegationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 336;
				this.match(ZParser.NOT_SIGN);
				this.state = 337;
				this.expression(34);
				}
				break;

			case 8:
				{
				_localctx = new ConditionalExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 338;
				this.match(ZParser.IF);
				this.state = 339;
				this.predicate(0);
				this.state = 340;
				this.match(ZParser.THEN);
				this.state = 341;
				this.expression(0);
				this.state = 342;
				this.match(ZParser.ELSE);
				this.state = 343;
				this.expression(33);
				}
				break;

			case 9:
				{
				_localctx = new SchemaPreconditionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 345;
				this.match(ZParser.PRE_KEY);
				this.state = 346;
				this.expression(28);
				}
				break;

			case 10:
				{
				_localctx = new PowersetExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 347;
				this.match(ZParser.POWERSET);
				this.state = 348;
				this.expression(26);
				}
				break;

			case 11:
				{
				_localctx = new PrefixApplicationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 349;
				this.match(ZParser.PRE);
				this.state = 350;
				this.expression(25);
				}
				break;

			case 12:
				{
				_localctx = new GenericPrefixApplicationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 351;
				this.match(ZParser.L);
				this.state = 353;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 352;
					this.expSep();
					}
					break;
				}
				this.state = 362;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 355;
					this.expression(0);
					this.state = 356;
					this.match(ZParser.ERE);
					}
					break;

				case 2:
					{
					this.state = 359;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ZParser.FOR_ALL - 51)) | (1 << (ZParser.THERE_EXISTS - 51)) | (1 << (ZParser.UNIQUE_EXISTS - 51)) | (1 << (ZParser.NOT_SIGN - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 51)) | (1 << (ZParser.NAME - 51)))) !== 0) || _la === ZParser.PRE || _la === ZParser.L) {
						{
						this.state = 358;
						this.expressionList();
						}
					}

					this.state = 361;
					this.match(ZParser.SRE);
					}
					break;
				}
				this.state = 364;
				this.expression(24);
				}
				break;

			case 13:
				{
				_localctx = new NofixApplicationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 365;
				this.match(ZParser.L);
				this.state = 367;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 366;
					this.expSep();
					}
					break;
				}
				this.state = 376;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 369;
					this.expression(0);
					this.state = 370;
					this.match(ZParser.ER);
					}
					break;

				case 2:
					{
					this.state = 373;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ZParser.FOR_ALL - 51)) | (1 << (ZParser.THERE_EXISTS - 51)) | (1 << (ZParser.UNIQUE_EXISTS - 51)) | (1 << (ZParser.NOT_SIGN - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 51)) | (1 << (ZParser.NAME - 51)))) !== 0) || _la === ZParser.PRE || _la === ZParser.L) {
						{
						this.state = 372;
						this.expressionList();
						}
					}

					this.state = 375;
					this.match(ZParser.SR);
					}
					break;
				}
				}
				break;

			case 14:
				{
				_localctx = new BindingConstructionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 378;
				this.match(ZParser.GREEK_SMALL_LETTER_THETA);
				this.state = 379;
				this.expression(0);
				this.state = 383;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 380;
						this.match(ZParser.STROKE);
						}
						}
					}
					this.state = 385;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				}
				break;

			case 15:
				{
				_localctx = new ReferenceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 386;
				this.refName();
				}
				break;

			case 16:
				{
				_localctx = new GenericInstantiationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 387;
				this.refName();
				this.state = 388;
				this.match(ZParser.LEFT_SQUARE_BRACKET);
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ZParser.FOR_ALL - 51)) | (1 << (ZParser.THERE_EXISTS - 51)) | (1 << (ZParser.UNIQUE_EXISTS - 51)) | (1 << (ZParser.NOT_SIGN - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 51)) | (1 << (ZParser.NAME - 51)))) !== 0) || _la === ZParser.PRE || _la === ZParser.L) {
					{
					this.state = 389;
					this.expressionList();
					}
				}

				this.state = 392;
				this.match(ZParser.RIGHT_SQUARE_BRACKET);
				}
				break;

			case 17:
				{
				_localctx = new NumberLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 394;
				this.match(ZParser.NUMERAL);
				}
				break;

			case 18:
				{
				_localctx = new SetExtensionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 395;
				this.match(ZParser.LEFT_CURLY_BRACKET);
				this.state = 397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ZParser.FOR_ALL - 51)) | (1 << (ZParser.THERE_EXISTS - 51)) | (1 << (ZParser.UNIQUE_EXISTS - 51)) | (1 << (ZParser.NOT_SIGN - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 51)) | (1 << (ZParser.NAME - 51)))) !== 0) || _la === ZParser.PRE || _la === ZParser.L) {
					{
					this.state = 396;
					this.expressionList();
					}
				}

				this.state = 399;
				this.match(ZParser.RIGHT_CURLY_BRACKET);
				}
				break;

			case 19:
				{
				_localctx = new SetComprehensionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 400;
				this.match(ZParser.LEFT_CURLY_BRACKET);
				this.state = 401;
				this.schemaText();
				this.state = 402;
				this.match(ZParser.SPOT);
				this.state = 403;
				this.expression(0);
				this.state = 404;
				this.match(ZParser.RIGHT_CURLY_BRACKET);
				}
				break;

			case 20:
				{
				_localctx = new CharacteristicSetComprehensionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 406;
				this.match(ZParser.LEFT_CURLY_BRACKET);
				this.state = 407;
				this.schemaText();
				this.state = 408;
				this.match(ZParser.RIGHT_CURLY_BRACKET);
				}
				break;

			case 21:
				{
				_localctx = new SchemaConstructionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 410;
				this.match(ZParser.LEFT_SQUARE_BRACKET);
				this.state = 411;
				this.schemaText();
				this.state = 412;
				this.match(ZParser.RIGHT_SQUARE_BRACKET);
				}
				break;

			case 22:
				{
				_localctx = new BindingExtensionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 414;
				this.match(ZParser.LEFT_BINDING_BRACKET);
				this.state = 423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ZParser.ARGUMENT || _la === ZParser.NAME || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (ZParser.PREP - 133)) | (1 << (ZParser.PRE - 133)) | (1 << (ZParser.LP - 133)) | (1 << (ZParser.L - 133)))) !== 0)) {
					{
					this.state = 415;
					this.declNameExpression();
					this.state = 420;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ZParser.COMMA) {
						{
						{
						this.state = 416;
						this.match(ZParser.COMMA);
						this.state = 417;
						this.declNameExpression();
						}
						}
						this.state = 422;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 425;
				this.match(ZParser.RIGHT_BINDING_BRACKET);
				}
				break;

			case 23:
				{
				_localctx = new TupleExtensionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 426;
				this.match(ZParser.LEFT_PARENTHESIS);
				this.state = 427;
				this.expression(0);
				this.state = 430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 428;
					this.match(ZParser.COMMA);
					this.state = 429;
					this.expression(0);
					}
					}
					this.state = 432;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ZParser.COMMA);
				this.state = 434;
				this.match(ZParser.RIGHT_PARENTHESIS);
				}
				break;

			case 24:
				{
				_localctx = new CharacteristicDefiniteDescriptionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 436;
				this.match(ZParser.LEFT_PARENTHESIS);
				this.state = 437;
				this.match(ZParser.GREEK_SMALL_LETTER_MU);
				this.state = 438;
				this.schemaText();
				this.state = 439;
				this.match(ZParser.RIGHT_PARENTHESIS);
				}
				break;

			case 25:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 441;
				this.match(ZParser.LEFT_PARENTHESIS);
				this.state = 442;
				this.expression(0);
				this.state = 443;
				this.match(ZParser.RIGHT_PARENTHESIS);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 555;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 553;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
					case 1:
						{
						_localctx = new SchemaEquivalenceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 447;
						if (!(this.precpred(this._ctx, 38))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 38)");
						}
						this.state = 448;
						this.match(ZParser.LEFT_RIGHT_DOUBLE_ARROW);
						this.state = 449;
						this.expression(39);
						}
						break;

					case 2:
						{
						_localctx = new SchemaImplicationExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 450;
						if (!(this.precpred(this._ctx, 37))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 37)");
						}
						this.state = 451;
						this.match(ZParser.RIGHTWARDS_DOUBLE_ARROW);
						this.state = 452;
						this.expression(38);
						}
						break;

					case 3:
						{
						_localctx = new SchemaDisjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 453;
						if (!(this.precpred(this._ctx, 36))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 36)");
						}
						this.state = 454;
						this.match(ZParser.LOGICAL_OR);
						this.state = 455;
						this.expression(37);
						}
						break;

					case 4:
						{
						_localctx = new SchemaConjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 456;
						if (!(this.precpred(this._ctx, 35))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 35)");
						}
						this.state = 457;
						this.match(ZParser.LOGICAL_AND);
						this.state = 458;
						this.expression(36);
						}
						break;

					case 5:
						{
						_localctx = new SchemaCompositionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 459;
						if (!(this.precpred(this._ctx, 32))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 32)");
						}
						this.state = 460;
						this.match(ZParser.SCHEMA_COMPOSITION);
						this.state = 461;
						this.expression(33);
						}
						break;

					case 6:
						{
						_localctx = new SchemaPipingExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 462;
						if (!(this.precpred(this._ctx, 31))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 31)");
						}
						this.state = 463;
						this.match(ZParser.SCHEMA_PIPING);
						this.state = 464;
						this.expression(32);
						}
						break;

					case 7:
						{
						_localctx = new SchemaProjectionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 465;
						if (!(this.precpred(this._ctx, 29))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 29)");
						}
						this.state = 466;
						this.match(ZParser.SCHEMA_PROJECTION);
						this.state = 467;
						this.expression(30);
						}
						break;

					case 8:
						{
						_localctx = new InfixLeftApplicationExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 468;
						if (!(this.precpred(this._ctx, 21))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 21)");
						}
						this.state = 469;
						if (!(ZSupport.isLeftAssociative(_input))) {
							throw new FailedPredicateException(this, "ZSupport.isLeftAssociative(_input)");
						}
						this.state = 470;
						this.match(ZParser.I);
						this.state = 471;
						this.expression(22);
						}
						break;

					case 9:
						{
						_localctx = new InfixRightApplicationExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 472;
						if (!(this.precpred(this._ctx, 20))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
						}
						this.state = 473;
						this.match(ZParser.I);
						this.state = 474;
						this.expression(20);
						}
						break;

					case 10:
						{
						_localctx = new GenericInfixApplicationExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 475;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 476;
						this.match(ZParser.EL);
						this.state = 478;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
						case 1:
							{
							this.state = 477;
							this.expSep();
							}
							break;
						}
						this.state = 487;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
						case 1:
							{
							this.state = 480;
							this.expression(0);
							this.state = 481;
							this.match(ZParser.ERE);
							}
							break;

						case 2:
							{
							this.state = 484;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ZParser.FOR_ALL - 51)) | (1 << (ZParser.THERE_EXISTS - 51)) | (1 << (ZParser.UNIQUE_EXISTS - 51)) | (1 << (ZParser.NOT_SIGN - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 51)) | (1 << (ZParser.NAME - 51)))) !== 0) || _la === ZParser.PRE || _la === ZParser.L) {
								{
								this.state = 483;
								this.expressionList();
								}
							}

							this.state = 486;
							this.match(ZParser.SRE);
							}
							break;
						}
						this.state = 489;
						this.expression(20);
						}
						break;

					case 11:
						{
						_localctx = new ApplicationExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 490;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 491;
						this.expression(18);
						}
						break;

					case 12:
						{
						_localctx = new SchemaHidingExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 492;
						if (!(this.precpred(this._ctx, 30))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 30)");
						}
						this.state = 493;
						this.match(ZParser.REVERSE_SOLIDUS);
						this.state = 494;
						this.match(ZParser.LEFT_PARENTHESIS);
						this.state = 495;
						this.declName();
						this.state = 500;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === ZParser.COMMA) {
							{
							{
							this.state = 496;
							this.match(ZParser.COMMA);
							this.state = 497;
							this.declName();
							}
							}
							this.state = 502;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 503;
						this.match(ZParser.RIGHT_PARENTHESIS);
						}
						break;

					case 13:
						{
						_localctx = new CartesianProductExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 505;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 508;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 506;
								this.match(ZParser.MULTIPLICATION_SIGN);
								this.state = 507;
								this.expression(0);
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 510;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;

					case 14:
						{
						_localctx = new PostfixApplicationExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 512;
						if (!(this.precpred(this._ctx, 23))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 23)");
						}
						this.state = 513;
						this.match(ZParser.POST);
						}
						break;

					case 15:
						{
						_localctx = new GenericPostfixApplicationExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 514;
						if (!(this.precpred(this._ctx, 22))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 22)");
						}
						this.state = 515;
						this.match(ZParser.EL);
						this.state = 517;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
						case 1:
							{
							this.state = 516;
							this.expSep();
							}
							break;
						}
						this.state = 526;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
						case 1:
							{
							this.state = 519;
							this.expression(0);
							this.state = 520;
							this.match(ZParser.ER);
							}
							break;

						case 2:
							{
							this.state = 523;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ZParser.FOR_ALL - 51)) | (1 << (ZParser.THERE_EXISTS - 51)) | (1 << (ZParser.UNIQUE_EXISTS - 51)) | (1 << (ZParser.NOT_SIGN - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 51)) | (1 << (ZParser.NAME - 51)))) !== 0) || _la === ZParser.PRE || _la === ZParser.L) {
								{
								this.state = 522;
								this.expressionList();
								}
							}

							this.state = 525;
							this.match(ZParser.SR);
							}
							break;
						}
						}
						break;

					case 16:
						{
						_localctx = new SchemaDecorationExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 528;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 529;
						this.match(ZParser.STROKE);
						}
						break;

					case 17:
						{
						_localctx = new SchemaRenamingExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 530;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 531;
						this.match(ZParser.LEFT_SQUARE_BRACKET);
						this.state = 532;
						this.declName();
						this.state = 533;
						this.match(ZParser.SOLIDUS);
						this.state = 534;
						this.declName();
						this.state = 542;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === ZParser.COMMA) {
							{
							{
							this.state = 535;
							this.match(ZParser.COMMA);
							this.state = 536;
							this.declName();
							this.state = 537;
							this.match(ZParser.SOLIDUS);
							this.state = 538;
							this.declName();
							}
							}
							this.state = 544;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 545;
						this.match(ZParser.RIGHT_SQUARE_BRACKET);
						}
						break;

					case 18:
						{
						_localctx = new BindingSelectionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 547;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 548;
						this.match(ZParser.FULL_STOP);
						this.state = 549;
						this.refName();
						}
						break;

					case 19:
						{
						_localctx = new TupleSelectionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ZParser.RULE_expression);
						this.state = 550;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 551;
						this.match(ZParser.FULL_STOP);
						this.state = 552;
						this.match(ZParser.NUMERAL);
						}
						break;
					}
					}
				}
				this.state = 557;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
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
	public schemaText(): SchemaTextContext {
		let _localctx: SchemaTextContext = new SchemaTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ZParser.RULE_schemaText);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 558;
				this.match(ZParser.NL);
				}
				break;
			}
			this.state = 562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (ZParser.ARGUMENT - 47)) | (1 << (ZParser.FOR_ALL - 47)) | (1 << (ZParser.THERE_EXISTS - 47)) | (1 << (ZParser.UNIQUE_EXISTS - 47)) | (1 << (ZParser.NOT_SIGN - 47)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 47)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 47)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 47)) | (1 << (ZParser.NAME - 47)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (ZParser.PREP - 133)) | (1 << (ZParser.PRE - 133)) | (1 << (ZParser.LP - 133)) | (1 << (ZParser.L - 133)))) !== 0)) {
				{
				this.state = 561;
				this.declPart();
				}
			}

			this.state = 565;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 564;
				this.match(ZParser.NL);
				}
				break;
			}
			this.state = 575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZParser.VERTICAL_LINE) {
				{
				this.state = 567;
				this.match(ZParser.VERTICAL_LINE);
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ZParser.NL) {
					{
					this.state = 568;
					this.match(ZParser.NL);
					}
				}

				this.state = 571;
				this.predicate(0);
				this.state = 573;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 572;
					this.match(ZParser.NL);
					}
					break;
				}
				}
			}

			this.state = 578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ZParser.NL) {
				{
				this.state = 577;
				this.match(ZParser.NL);
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
	public declPart(): DeclPartContext {
		let _localctx: DeclPartContext = new DeclPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ZParser.RULE_declPart);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 580;
			this.declaration();
			this.state = 585;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 581;
					_la = this._input.LA(1);
					if (!(_la === ZParser.NL || _la === ZParser.SEMICOLON)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 582;
					this.declaration();
					}
					}
				}
				this.state = 587;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
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
	public declNameExpression(): DeclNameExpressionContext {
		let _localctx: DeclNameExpressionContext = new DeclNameExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ZParser.RULE_declNameExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this.declName();
			this.state = 589;
			this.match(ZParser.DEFINE_EQUAL);
			this.state = 590;
			this.expression(0);
			this.state = 592;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 591;
				this.match(ZParser.NL);
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ZParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 607;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 594;
				this.declName();
				this.state = 599;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ZParser.COMMA) {
					{
					{
					this.state = 595;
					this.match(ZParser.COMMA);
					this.state = 596;
					this.declName();
					}
					}
					this.state = 601;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 602;
				this.match(ZParser.COLON);
				this.state = 603;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 605;
				this.declNameExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 606;
				this.expression(0);
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
	public operatorTemplate(): OperatorTemplateContext {
		let _localctx: OperatorTemplateContext = new OperatorTemplateContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ZParser.RULE_operatorTemplate);
		try {
			this.state = 615;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZParser.RELATION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 609;
				this.match(ZParser.RELATION);
				this.state = 610;
				this.template();
				}
				break;
			case ZParser.FUNCTION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 611;
				this.match(ZParser.FUNCTION);
				this.state = 612;
				this.categoryTemplate();
				}
				break;
			case ZParser.GENERIC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 613;
				this.match(ZParser.GENERIC);
				this.state = 614;
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
		this.enterRule(_localctx, 26, ZParser.RULE_categoryTemplate);
		try {
			this.state = 624;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 617;
				this.prefixTemplate();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 618;
				this.postfixTemplate();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 619;
				this.prec();
				this.state = 620;
				this.assoc();
				this.state = 621;
				this.infixTemplate();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 623;
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
		this.enterRule(_localctx, 28, ZParser.RULE_prec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 626;
			this.match(ZParser.NUMERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 30, ZParser.RULE_assoc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
			_la = this._input.LA(1);
			if (!(_la === ZParser.LEFTASSOC || _la === ZParser.RIGHTASSOC)) {
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
		this.enterRule(_localctx, 32, ZParser.RULE_template);
		try {
			this.state = 634;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 630;
				this.prefixTemplate();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 631;
				this.postfixTemplate();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 632;
				this.infixTemplate();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 633;
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
		this.enterRule(_localctx, 34, ZParser.RULE_prefixTemplate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this.match(ZParser.LEFT_PARENTHESIS);
			this.state = 640;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZParser.PREP:
			case ZParser.PRE:
			case ZParser.LP:
			case ZParser.L:
				{
				this.state = 637;
				this.prefixName();
				}
				break;
			case ZParser.POWERSET:
				{
				this.state = 638;
				this.match(ZParser.POWERSET);
				this.state = 639;
				this.match(ZParser.ARGUMENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 642;
			this.match(ZParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 36, ZParser.RULE_postfixTemplate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 644;
			this.match(ZParser.LEFT_PARENTHESIS);
			this.state = 645;
			this.postfixName();
			this.state = 646;
			this.match(ZParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 38, ZParser.RULE_infixTemplate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 648;
			this.match(ZParser.LEFT_PARENTHESIS);
			this.state = 649;
			this.infixName();
			this.state = 650;
			this.match(ZParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 40, ZParser.RULE_nofixTemplate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			this.match(ZParser.LEFT_PARENTHESIS);
			this.state = 653;
			this.nofixName();
			this.state = 654;
			this.match(ZParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declName(): DeclNameContext {
		let _localctx: DeclNameContext = new DeclNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ZParser.RULE_declName);
		try {
			this.state = 658;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 656;
				this.match(ZParser.NAME);
				}
				break;
			case ZParser.ARGUMENT:
			case ZParser.PREP:
			case ZParser.PRE:
			case ZParser.LP:
			case ZParser.L:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 657;
				this.opName();
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
	public refName(): RefNameContext {
		let _localctx: RefNameContext = new RefNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ZParser.RULE_refName);
		try {
			this.state = 665;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 660;
				this.match(ZParser.NAME);
				}
				break;
			case ZParser.LEFT_PARENTHESIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 661;
				this.match(ZParser.LEFT_PARENTHESIS);
				this.state = 662;
				this.opName();
				this.state = 663;
				this.match(ZParser.RIGHT_PARENTHESIS);
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
	public opName(): OpNameContext {
		let _localctx: OpNameContext = new OpNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ZParser.RULE_opName);
		try {
			this.state = 671;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 667;
				this.prefixName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 668;
				this.postfixName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 669;
				this.infixName();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 670;
				this.nofixName();
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
	public prefixName(): PrefixNameContext {
		let _localctx: PrefixNameContext = new PrefixNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ZParser.RULE_prefixName);
		try {
			let _alt: number;
			this.state = 711;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZParser.PRE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 673;
				this.match(ZParser.PRE);
				this.state = 674;
				this.match(ZParser.ARGUMENT);
				}
				break;
			case ZParser.PREP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 675;
				this.match(ZParser.PREP);
				this.state = 676;
				this.match(ZParser.ARGUMENT);
				}
				break;
			case ZParser.L:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 677;
				this.match(ZParser.L);
				this.state = 684;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 682;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case ZParser.ARGUMENT:
							{
							this.state = 678;
							this.match(ZParser.ARGUMENT);
							this.state = 679;
							this.match(ZParser.ES);
							}
							break;
						case ZParser.LIST:
							{
							this.state = 680;
							this.match(ZParser.LIST);
							this.state = 681;
							this.match(ZParser.SS);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 686;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				}
				this.state = 691;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ZParser.ARGUMENT:
					{
					this.state = 687;
					this.match(ZParser.ARGUMENT);
					this.state = 688;
					this.match(ZParser.ERE);
					}
					break;
				case ZParser.LIST:
					{
					this.state = 689;
					this.match(ZParser.LIST);
					this.state = 690;
					this.match(ZParser.SRE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 693;
				this.match(ZParser.ARGUMENT);
				}
				break;
			case ZParser.LP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 694;
				this.match(ZParser.LP);
				this.state = 701;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 699;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case ZParser.ARGUMENT:
							{
							this.state = 695;
							this.match(ZParser.ARGUMENT);
							this.state = 696;
							this.match(ZParser.ES);
							}
							break;
						case ZParser.LIST:
							{
							this.state = 697;
							this.match(ZParser.LIST);
							this.state = 698;
							this.match(ZParser.SS);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 703;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
				}
				this.state = 708;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ZParser.ARGUMENT:
					{
					this.state = 704;
					this.match(ZParser.ARGUMENT);
					this.state = 705;
					this.match(ZParser.EREP);
					}
					break;
				case ZParser.LIST:
					{
					this.state = 706;
					this.match(ZParser.LIST);
					this.state = 707;
					this.match(ZParser.SREP);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 710;
				this.match(ZParser.ARGUMENT);
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
	public postfixName(): PostfixNameContext {
		let _localctx: PostfixNameContext = new PostfixNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ZParser.RULE_postfixName);
		try {
			let _alt: number;
			this.state = 751;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 713;
				this.match(ZParser.ARGUMENT);
				this.state = 714;
				this.match(ZParser.POST);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 715;
				this.match(ZParser.ARGUMENT);
				this.state = 716;
				this.match(ZParser.POSTP);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 717;
				this.match(ZParser.ARGUMENT);
				this.state = 718;
				this.match(ZParser.EL);
				this.state = 725;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 723;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case ZParser.ARGUMENT:
							{
							this.state = 719;
							this.match(ZParser.ARGUMENT);
							this.state = 720;
							this.match(ZParser.ES);
							}
							break;
						case ZParser.LIST:
							{
							this.state = 721;
							this.match(ZParser.LIST);
							this.state = 722;
							this.match(ZParser.SS);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 727;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				}
				this.state = 732;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ZParser.ARGUMENT:
					{
					this.state = 728;
					this.match(ZParser.ARGUMENT);
					this.state = 729;
					this.match(ZParser.ER);
					}
					break;
				case ZParser.LIST:
					{
					this.state = 730;
					this.match(ZParser.LIST);
					this.state = 731;
					this.match(ZParser.SR);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 734;
				this.match(ZParser.ARGUMENT);
				this.state = 735;
				this.match(ZParser.ELP);
				this.state = 742;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 740;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case ZParser.ARGUMENT:
							{
							this.state = 736;
							this.match(ZParser.ARGUMENT);
							this.state = 737;
							this.match(ZParser.ES);
							}
							break;
						case ZParser.LIST:
							{
							this.state = 738;
							this.match(ZParser.LIST);
							this.state = 739;
							this.match(ZParser.SS);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 744;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
				}
				this.state = 749;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ZParser.ARGUMENT:
					{
					this.state = 745;
					this.match(ZParser.ARGUMENT);
					this.state = 746;
					this.match(ZParser.ERP);
					}
					break;
				case ZParser.LIST:
					{
					this.state = 747;
					this.match(ZParser.LIST);
					this.state = 748;
					this.match(ZParser.SRP);
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
		this.enterRule(_localctx, 52, ZParser.RULE_infixName);
		try {
			let _alt: number;
			this.state = 795;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 753;
				this.match(ZParser.ARGUMENT);
				this.state = 754;
				this.match(ZParser.I);
				this.state = 755;
				this.match(ZParser.ARGUMENT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 756;
				this.match(ZParser.ARGUMENT);
				this.state = 757;
				this.match(ZParser.IP);
				this.state = 758;
				this.match(ZParser.ARGUMENT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 759;
				this.match(ZParser.ARGUMENT);
				this.state = 760;
				this.match(ZParser.EL);
				this.state = 767;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 765;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case ZParser.ARGUMENT:
							{
							this.state = 761;
							this.match(ZParser.ARGUMENT);
							this.state = 762;
							this.match(ZParser.ES);
							}
							break;
						case ZParser.LIST:
							{
							this.state = 763;
							this.match(ZParser.LIST);
							this.state = 764;
							this.match(ZParser.SS);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 769;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
				}
				this.state = 774;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ZParser.ARGUMENT:
					{
					this.state = 770;
					this.match(ZParser.ARGUMENT);
					this.state = 771;
					this.match(ZParser.ERE);
					}
					break;
				case ZParser.LIST:
					{
					this.state = 772;
					this.match(ZParser.LIST);
					this.state = 773;
					this.match(ZParser.SRE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 776;
				this.match(ZParser.ARGUMENT);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 777;
				this.match(ZParser.ARGUMENT);
				this.state = 778;
				this.match(ZParser.ELP);
				this.state = 785;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 783;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case ZParser.ARGUMENT:
							{
							this.state = 779;
							this.match(ZParser.ARGUMENT);
							this.state = 780;
							this.match(ZParser.ES);
							}
							break;
						case ZParser.LIST:
							{
							this.state = 781;
							this.match(ZParser.LIST);
							this.state = 782;
							this.match(ZParser.SS);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 787;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
				}
				this.state = 792;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ZParser.ARGUMENT:
					{
					this.state = 788;
					this.match(ZParser.ARGUMENT);
					this.state = 789;
					this.match(ZParser.EREP);
					}
					break;
				case ZParser.LIST:
					{
					this.state = 790;
					this.match(ZParser.LIST);
					this.state = 791;
					this.match(ZParser.SREP);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 794;
				this.match(ZParser.ARGUMENT);
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
		this.enterRule(_localctx, 54, ZParser.RULE_nofixName);
		try {
			let _alt: number;
			this.state = 829;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZParser.L:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 797;
				this.match(ZParser.L);
				this.state = 804;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 802;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case ZParser.ARGUMENT:
							{
							this.state = 798;
							this.match(ZParser.ARGUMENT);
							this.state = 799;
							this.match(ZParser.ES);
							}
							break;
						case ZParser.LIST:
							{
							this.state = 800;
							this.match(ZParser.LIST);
							this.state = 801;
							this.match(ZParser.SS);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 806;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
				}
				this.state = 811;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ZParser.ARGUMENT:
					{
					this.state = 807;
					this.match(ZParser.ARGUMENT);
					this.state = 808;
					this.match(ZParser.ER);
					}
					break;
				case ZParser.LIST:
					{
					this.state = 809;
					this.match(ZParser.LIST);
					this.state = 810;
					this.match(ZParser.SR);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case ZParser.LP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 813;
				this.match(ZParser.LP);
				this.state = 820;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 818;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case ZParser.ARGUMENT:
							{
							this.state = 814;
							this.match(ZParser.ARGUMENT);
							this.state = 815;
							this.match(ZParser.ES);
							}
							break;
						case ZParser.LIST:
							{
							this.state = 816;
							this.match(ZParser.LIST);
							this.state = 817;
							this.match(ZParser.SS);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 822;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				}
				this.state = 827;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ZParser.ARGUMENT:
					{
					this.state = 823;
					this.match(ZParser.ARGUMENT);
					this.state = 824;
					this.match(ZParser.ERP);
					}
					break;
				case ZParser.LIST:
					{
					this.state = 825;
					this.match(ZParser.LIST);
					this.state = 826;
					this.match(ZParser.SRP);
					}
					break;
				default:
					throw new NoViableAltException(this);
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
	public genName(): GenNameContext {
		let _localctx: GenNameContext = new GenNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ZParser.RULE_genName);
		try {
			this.state = 835;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 831;
				this.prefixGenName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 832;
				this.postfixGenName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 833;
				this.infixGenName();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 834;
				this.nofixGenName();
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
	public prefixGenName(): PrefixGenNameContext {
		let _localctx: PrefixGenNameContext = new PrefixGenNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ZParser.RULE_prefixGenName);
		let _la: number;
		try {
			let _alt: number;
			this.state = 850;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZParser.PRE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 837;
				this.match(ZParser.PRE);
				this.state = 838;
				this.match(ZParser.NAME);
				}
				break;
			case ZParser.L:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 839;
				this.match(ZParser.L);
				this.state = 844;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 840;
						this.match(ZParser.NAME);
						this.state = 841;
						_la = this._input.LA(1);
						if (!(_la === ZParser.ES || _la === ZParser.SS)) {
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
					this.state = 846;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
				}
				this.state = 847;
				this.match(ZParser.NAME);
				this.state = 848;
				_la = this._input.LA(1);
				if (!(_la === ZParser.ERE || _la === ZParser.SRE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 849;
				this.match(ZParser.NAME);
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
	public postfixGenName(): PostfixGenNameContext {
		let _localctx: PostfixGenNameContext = new PostfixGenNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ZParser.RULE_postfixGenName);
		let _la: number;
		try {
			let _alt: number;
			this.state = 865;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 852;
				this.match(ZParser.NAME);
				this.state = 853;
				this.match(ZParser.POST);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 854;
				this.match(ZParser.NAME);
				this.state = 855;
				this.match(ZParser.EL);
				this.state = 860;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 856;
						this.match(ZParser.NAME);
						this.state = 857;
						_la = this._input.LA(1);
						if (!(_la === ZParser.ES || _la === ZParser.SS)) {
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
					this.state = 862;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
				}
				this.state = 863;
				this.match(ZParser.NAME);
				this.state = 864;
				_la = this._input.LA(1);
				if (!(_la === ZParser.ER || _la === ZParser.SR)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
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
	public infixGenName(): InfixGenNameContext {
		let _localctx: InfixGenNameContext = new InfixGenNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ZParser.RULE_infixGenName);
		let _la: number;
		try {
			let _alt: number;
			this.state = 882;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 867;
				this.match(ZParser.NAME);
				this.state = 868;
				this.match(ZParser.I);
				this.state = 869;
				this.match(ZParser.NAME);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 870;
				this.match(ZParser.NAME);
				this.state = 871;
				this.match(ZParser.EL);
				this.state = 876;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 872;
						this.match(ZParser.NAME);
						this.state = 873;
						_la = this._input.LA(1);
						if (!(_la === ZParser.ES || _la === ZParser.SS)) {
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
					this.state = 878;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
				}
				this.state = 879;
				this.match(ZParser.NAME);
				this.state = 880;
				_la = this._input.LA(1);
				if (!(_la === ZParser.ERE || _la === ZParser.SRE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 881;
				this.match(ZParser.NAME);
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
	public nofixGenName(): NofixGenNameContext {
		let _localctx: NofixGenNameContext = new NofixGenNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ZParser.RULE_nofixGenName);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 884;
			this.match(ZParser.L);
			this.state = 889;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 885;
					this.match(ZParser.NAME);
					this.state = 886;
					_la = this._input.LA(1);
					if (!(_la === ZParser.ES || _la === ZParser.SS)) {
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
				this.state = 891;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			}
			this.state = 892;
			this.match(ZParser.NAME);
			this.state = 893;
			_la = this._input.LA(1);
			if (!(_la === ZParser.ER || _la === ZParser.SR)) {
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
	public relation(): RelationContext {
		let _localctx: RelationContext = new RelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ZParser.RULE_relation);
		try {
			this.state = 899;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 895;
				this.prefixRel();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 896;
				this.postfixRel();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 897;
				this.infixRel();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 898;
				this.nofixRel();
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
	public prefixRel(): PrefixRelContext {
		let _localctx: PrefixRelContext = new PrefixRelContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ZParser.RULE_prefixRel);
		let _la: number;
		try {
			this.state = 917;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZParser.PREP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 901;
				this.match(ZParser.PREP);
				this.state = 902;
				this.expression(0);
				}
				break;
			case ZParser.LP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 903;
				this.match(ZParser.LP);
				this.state = 905;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
				case 1:
					{
					this.state = 904;
					this.expSep();
					}
					break;
				}
				this.state = 914;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 907;
					this.expression(0);
					this.state = 908;
					this.match(ZParser.EREP);
					}
					break;

				case 2:
					{
					this.state = 911;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ZParser.FOR_ALL - 51)) | (1 << (ZParser.THERE_EXISTS - 51)) | (1 << (ZParser.UNIQUE_EXISTS - 51)) | (1 << (ZParser.NOT_SIGN - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 51)) | (1 << (ZParser.NAME - 51)))) !== 0) || _la === ZParser.PRE || _la === ZParser.L) {
						{
						this.state = 910;
						this.expressionList();
						}
					}

					this.state = 913;
					this.match(ZParser.SREP);
					}
					break;
				}
				this.state = 916;
				this.expression(0);
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
	public postfixRel(): PostfixRelContext {
		let _localctx: PostfixRelContext = new PostfixRelContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ZParser.RULE_postfixRel);
		let _la: number;
		try {
			this.state = 936;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 919;
				this.expression(0);
				this.state = 920;
				this.match(ZParser.POSTP);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 922;
				this.expression(0);
				this.state = 923;
				this.match(ZParser.ELP);
				this.state = 925;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
				case 1:
					{
					this.state = 924;
					this.expSep();
					}
					break;
				}
				this.state = 934;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
				case 1:
					{
					this.state = 927;
					this.expression(0);
					this.state = 928;
					this.match(ZParser.ERP);
					}
					break;

				case 2:
					{
					this.state = 931;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ZParser.FOR_ALL - 51)) | (1 << (ZParser.THERE_EXISTS - 51)) | (1 << (ZParser.UNIQUE_EXISTS - 51)) | (1 << (ZParser.NOT_SIGN - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 51)) | (1 << (ZParser.NAME - 51)))) !== 0) || _la === ZParser.PRE || _la === ZParser.L) {
						{
						this.state = 930;
						this.expressionList();
						}
					}

					this.state = 933;
					this.match(ZParser.SRP);
					}
					break;
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
	public infixRel(): InfixRelContext {
		let _localctx: InfixRelContext = new InfixRelContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ZParser.RULE_infixRel);
		let _la: number;
		try {
			let _alt: number;
			this.state = 986;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 938;
				this.expression(0);
				this.state = 939;
				if (!(ZSupport.isLeftAssociative(_input))) {
					throw new FailedPredicateException(this, "ZSupport.isLeftAssociative(_input)");
				}
				this.state = 942;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 940;
						_la = this._input.LA(1);
						if (!(_la === ZParser.EQUALS_SIGN || _la === ZParser.ELEMENT_OF || _la === ZParser.IP)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 941;
						this.expression(0);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 944;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 946;
				this.expression(0);
				this.state = 949;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 947;
						_la = this._input.LA(1);
						if (!(_la === ZParser.EQUALS_SIGN || _la === ZParser.ELEMENT_OF || _la === ZParser.IP)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 948;
						this.expression(0);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 951;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 953;
				this.expression(0);
				this.state = 954;
				if (!(ZSupport.isLeftAssociative(_input))) {
					throw new FailedPredicateException(this, "ZSupport.isLeftAssociative(_input)");
				}
				this.state = 955;
				this.match(ZParser.ELP);
				this.state = 957;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 956;
					this.expSep();
					}
					break;
				}
				this.state = 966;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
				case 1:
					{
					this.state = 959;
					this.expression(0);
					this.state = 960;
					this.match(ZParser.EREP);
					}
					break;

				case 2:
					{
					this.state = 963;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ZParser.FOR_ALL - 51)) | (1 << (ZParser.THERE_EXISTS - 51)) | (1 << (ZParser.UNIQUE_EXISTS - 51)) | (1 << (ZParser.NOT_SIGN - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 51)) | (1 << (ZParser.NAME - 51)))) !== 0) || _la === ZParser.PRE || _la === ZParser.L) {
						{
						this.state = 962;
						this.expressionList();
						}
					}

					this.state = 965;
					this.match(ZParser.SREP);
					}
					break;
				}
				this.state = 968;
				this.expression(0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 970;
				this.expression(0);
				this.state = 971;
				this.match(ZParser.ELP);
				this.state = 973;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
				case 1:
					{
					this.state = 972;
					this.expSep();
					}
					break;
				}
				this.state = 982;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
				case 1:
					{
					this.state = 975;
					this.expression(0);
					this.state = 976;
					this.match(ZParser.EREP);
					}
					break;

				case 2:
					{
					this.state = 979;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ZParser.FOR_ALL - 51)) | (1 << (ZParser.THERE_EXISTS - 51)) | (1 << (ZParser.UNIQUE_EXISTS - 51)) | (1 << (ZParser.NOT_SIGN - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 51)) | (1 << (ZParser.NAME - 51)))) !== 0) || _la === ZParser.PRE || _la === ZParser.L) {
						{
						this.state = 978;
						this.expressionList();
						}
					}

					this.state = 981;
					this.match(ZParser.SREP);
					}
					break;
				}
				this.state = 984;
				this.expression(0);
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
	public nofixRel(): NofixRelContext {
		let _localctx: NofixRelContext = new NofixRelContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ZParser.RULE_nofixRel);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 988;
			this.match(ZParser.LP);
			this.state = 990;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				{
				this.state = 989;
				this.expSep();
				}
				break;
			}
			this.state = 999;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				{
				this.state = 992;
				this.expression(0);
				this.state = 993;
				this.match(ZParser.ERP);
				}
				break;

			case 2:
				{
				this.state = 996;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ZParser.FOR_ALL - 51)) | (1 << (ZParser.THERE_EXISTS - 51)) | (1 << (ZParser.UNIQUE_EXISTS - 51)) | (1 << (ZParser.NOT_SIGN - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 51)) | (1 << (ZParser.NAME - 51)))) !== 0) || _la === ZParser.PRE || _la === ZParser.L) {
					{
					this.state = 995;
					this.expressionList();
					}
				}

				this.state = 998;
				this.match(ZParser.SRP);
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
	public application(): ApplicationContext {
		let _localctx: ApplicationContext = new ApplicationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ZParser.RULE_application);
		try {
			this.state = 1005;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1001;
				this.prefixApp();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1002;
				this.postfixApp();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1003;
				this.infixApp();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1004;
				this.nofixApp();
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
	public prefixApp(): PrefixAppContext {
		let _localctx: PrefixAppContext = new PrefixAppContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ZParser.RULE_prefixApp);
		let _la: number;
		try {
			this.state = 1023;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZParser.PRE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1007;
				this.match(ZParser.PRE);
				this.state = 1008;
				this.expression(0);
				}
				break;
			case ZParser.L:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1009;
				this.match(ZParser.L);
				this.state = 1011;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
				case 1:
					{
					this.state = 1010;
					this.expSep();
					}
					break;
				}
				this.state = 1020;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
				case 1:
					{
					this.state = 1013;
					this.expression(0);
					this.state = 1014;
					this.match(ZParser.ERE);
					}
					break;

				case 2:
					{
					this.state = 1017;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ZParser.FOR_ALL - 51)) | (1 << (ZParser.THERE_EXISTS - 51)) | (1 << (ZParser.UNIQUE_EXISTS - 51)) | (1 << (ZParser.NOT_SIGN - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 51)) | (1 << (ZParser.NAME - 51)))) !== 0) || _la === ZParser.PRE || _la === ZParser.L) {
						{
						this.state = 1016;
						this.expressionList();
						}
					}

					this.state = 1019;
					this.match(ZParser.SRE);
					}
					break;
				}
				this.state = 1022;
				this.expression(0);
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
	public postfixApp(): PostfixAppContext {
		let _localctx: PostfixAppContext = new PostfixAppContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ZParser.RULE_postfixApp);
		let _la: number;
		try {
			this.state = 1042;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1025;
				this.expression(0);
				this.state = 1026;
				this.match(ZParser.POST);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1028;
				this.expression(0);
				this.state = 1029;
				this.match(ZParser.EL);
				this.state = 1031;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
				case 1:
					{
					this.state = 1030;
					this.expSep();
					}
					break;
				}
				this.state = 1040;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
				case 1:
					{
					this.state = 1033;
					this.expression(0);
					this.state = 1034;
					this.match(ZParser.ER);
					}
					break;

				case 2:
					{
					this.state = 1037;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ZParser.FOR_ALL - 51)) | (1 << (ZParser.THERE_EXISTS - 51)) | (1 << (ZParser.UNIQUE_EXISTS - 51)) | (1 << (ZParser.NOT_SIGN - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 51)) | (1 << (ZParser.NAME - 51)))) !== 0) || _la === ZParser.PRE || _la === ZParser.L) {
						{
						this.state = 1036;
						this.expressionList();
						}
					}

					this.state = 1039;
					this.match(ZParser.SR);
					}
					break;
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
	public infixApp(): InfixAppContext {
		let _localctx: InfixAppContext = new InfixAppContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ZParser.RULE_infixApp);
		let _la: number;
		try {
			this.state = 1064;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1044;
				this.expression(0);
				this.state = 1045;
				this.match(ZParser.I);
				this.state = 1046;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1048;
				this.expression(0);
				this.state = 1049;
				this.match(ZParser.EL);
				this.state = 1051;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 1050;
					this.expSep();
					}
					break;
				}
				this.state = 1060;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
				case 1:
					{
					this.state = 1053;
					this.expression(0);
					this.state = 1054;
					this.match(ZParser.ERE);
					}
					break;

				case 2:
					{
					this.state = 1057;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ZParser.FOR_ALL - 51)) | (1 << (ZParser.THERE_EXISTS - 51)) | (1 << (ZParser.UNIQUE_EXISTS - 51)) | (1 << (ZParser.NOT_SIGN - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 51)) | (1 << (ZParser.NAME - 51)))) !== 0) || _la === ZParser.PRE || _la === ZParser.L) {
						{
						this.state = 1056;
						this.expressionList();
						}
					}

					this.state = 1059;
					this.match(ZParser.SRE);
					}
					break;
				}
				this.state = 1062;
				this.expression(0);
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
	public nofixApp(): NofixAppContext {
		let _localctx: NofixAppContext = new NofixAppContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ZParser.RULE_nofixApp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1066;
			this.match(ZParser.L);
			this.state = 1068;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				{
				this.state = 1067;
				this.expSep();
				}
				break;
			}
			this.state = 1077;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				{
				this.state = 1070;
				this.expression(0);
				this.state = 1071;
				this.match(ZParser.ER);
				}
				break;

			case 2:
				{
				this.state = 1074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ZParser.FOR_ALL - 51)) | (1 << (ZParser.THERE_EXISTS - 51)) | (1 << (ZParser.UNIQUE_EXISTS - 51)) | (1 << (ZParser.NOT_SIGN - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 51)) | (1 << (ZParser.NAME - 51)))) !== 0) || _la === ZParser.PRE || _la === ZParser.L) {
					{
					this.state = 1073;
					this.expressionList();
					}
				}

				this.state = 1076;
				this.match(ZParser.SR);
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
	public expSep(): ExpSepContext {
		let _localctx: ExpSepContext = new ExpSepContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ZParser.RULE_expSep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1086;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1086;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
					case 1:
						{
						this.state = 1079;
						this.expression(0);
						this.state = 1080;
						this.match(ZParser.ES);
						}
						break;

					case 2:
						{
						this.state = 1083;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ZParser.NUMERAL) | (1 << ZParser.LEFT_PARENTHESIS) | (1 << ZParser.LEFT_SQUARE_BRACKET) | (1 << ZParser.LEFT_CURLY_BRACKET) | (1 << ZParser.LEFT_BINDING_BRACKET) | (1 << ZParser.IF) | (1 << ZParser.LET) | (1 << ZParser.POWERSET) | (1 << ZParser.PRE_KEY))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (ZParser.FOR_ALL - 51)) | (1 << (ZParser.THERE_EXISTS - 51)) | (1 << (ZParser.UNIQUE_EXISTS - 51)) | (1 << (ZParser.NOT_SIGN - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_THETA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_LAMBDA - 51)) | (1 << (ZParser.GREEK_SMALL_LETTER_MU - 51)) | (1 << (ZParser.NAME - 51)))) !== 0) || _la === ZParser.PRE || _la === ZParser.L) {
							{
							this.state = 1082;
							this.expressionList();
							}
						}

						this.state = 1085;
						this.match(ZParser.SS);
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1088;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
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
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ZParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1090;
			this.expression(0);
			this.state = 1095;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ZParser.COMMA) {
				{
				{
				this.state = 1091;
				this.match(ZParser.COMMA);
				this.state = 1092;
				this.expression(0);
				}
				}
				this.state = 1097;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.predicate_sempred(_localctx as PredicateContext, predIndex);

		case 7:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 36:
			return this.infixRel_sempred(_localctx as InfixRelContext, predIndex);
		}
		return true;
	}
	private predicate_sempred(_localctx: PredicateContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 15);

		case 1:
			return this.precpred(this._ctx, 14);

		case 2:
			return this.precpred(this._ctx, 10);

		case 3:
			return this.precpred(this._ctx, 9);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 38);

		case 7:
			return this.precpred(this._ctx, 37);

		case 8:
			return this.precpred(this._ctx, 36);

		case 9:
			return this.precpred(this._ctx, 35);

		case 10:
			return this.precpred(this._ctx, 32);

		case 11:
			return this.precpred(this._ctx, 31);

		case 12:
			return this.precpred(this._ctx, 29);

		case 13:
			return this.precpred(this._ctx, 21);

		case 14:
			return ZSupport.isLeftAssociative(_input);

		case 15:
			return this.precpred(this._ctx, 20);

		case 16:
			return this.precpred(this._ctx, 19);

		case 17:
			return this.precpred(this._ctx, 17);

		case 18:
			return this.precpred(this._ctx, 30);

		case 19:
			return this.precpred(this._ctx, 27);

		case 20:
			return this.precpred(this._ctx, 23);

		case 21:
			return this.precpred(this._ctx, 22);

		case 22:
			return this.precpred(this._ctx, 16);

		case 23:
			return this.precpred(this._ctx, 15);

		case 24:
			return this.precpred(this._ctx, 14);

		case 25:
			return this.precpred(this._ctx, 13);
		}
		return true;
	}
	private infixRel_sempred(_localctx: InfixRelContext, predIndex: number): boolean {
		switch (predIndex) {
		case 26:
			return ZSupport.isLeftAssociative(_input);

		case 27:
			return ZSupport.isLeftAssociative(_input);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x9C\u044D\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x03\x02\x03\x02\x03\x02\x07\x02`\n\x02\f\x02" +
		"\x0E\x02c\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03l\n\x03\x03\x03\x03\x03\x07\x03p\n\x03\f\x03\x0E\x03s\v\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03z\n\x03\f\x03\x0E\x03}\v\x03" +
		"\x05\x03\x7F\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x86" +
		"\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x05\x04\x91\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x05\x04\x9C\n\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xA8\n" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xAF\n\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x07\x04\xC7\n\x04\f\x04\x0E\x04\xCA\v\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04\xDF\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05" +
		"\xE6\n\x05\f\x05\x0E\x05\xE9\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\xF0\n\x06\x03\x07\x03\x07\x03\x07\x07\x07\xF5\n\x07\f\x07" +
		"\x0E\x07\xF8\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0114\n\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x07\b\u0128\n\b\f\b\x0E\b\u012B\v\b\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x07\t\u014B\n\t\f\t\x0E\t\u014E\v\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0164\n\t\x03\t\x03\t\x03\t\x03\t\x05" +
		"\t\u016A\n\t\x03\t\x05\t\u016D\n\t\x03\t\x03\t\x03\t\x05\t\u0172\n\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\u0178\n\t\x03\t\x05\t\u017B\n\t\x03\t\x03\t" +
		"\x03\t\x07\t\u0180\n\t\f\t\x0E\t\u0183\v\t\x03\t\x03\t\x03\t\x03\t\x05" +
		"\t\u0189\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0190\n\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u01A5\n\t\f\t\x0E\t\u01A8\v\t\x05" +
		"\t\u01AA\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x06\t\u01B1\n\t\r\t\x0E\t\u01B2" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05" +
		"\t\u01C0\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u01E1\n" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\t\u01E7\n\t\x03\t\x05\t\u01EA\n\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u01F5\n\t\f\t\x0E" +
		"\t\u01F8\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x06\t\u01FF\n\t\r\t\x0E\t\u0200" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0208\n\t\x03\t\x03\t\x03\t\x03\t" +
		"\x05\t\u020E\n\t\x03\t\x05\t\u0211\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u021F\n\t\f\t\x0E\t\u0222" +
		"\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u022C\n\t\f" +
		"\t\x0E\t\u022F\v\t\x03\n\x05\n\u0232\n\n\x03\n\x05\n\u0235\n\n\x03\n\x05" +
		"\n\u0238\n\n\x03\n\x03\n\x05\n\u023C\n\n\x03\n\x03\n\x05\n\u0240\n\n\x05" +
		"\n\u0242\n\n\x03\n\x05\n\u0245\n\n\x03\v\x03\v\x03\v\x07\v\u024A\n\v\f" +
		"\v\x0E\v\u024D\v\v\x03\f\x03\f\x03\f\x03\f\x05\f\u0253\n\f\x03\r\x03\r" +
		"\x03\r\x07\r\u0258\n\r\f\r\x0E\r\u025B\v\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x05\r\u0262\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u026A\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\u0273\n\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\u027D\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\u0283\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x05" +
		"\x17\u0295\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u029C" +
		"\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u02A2\n\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u02AD" +
		"\n\x1A\f\x1A\x0E\x1A\u02B0\v\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A" +
		"\u02B6\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u02BE" +
		"\n\x1A\f\x1A\x0E\x1A\u02C1\v\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A" +
		"\u02C7\n\x1A\x03\x1A\x05\x1A\u02CA\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u02D6\n\x1B\f" +
		"\x1B\x0E\x1B\u02D9\v\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u02DF" +
		"\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u02E7\n" +
		"\x1B\f\x1B\x0E\x1B\u02EA\v\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B" +
		"\u02F0\n\x1B\x05\x1B\u02F2\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0300" +
		"\n\x1C\f\x1C\x0E\x1C\u0303\v\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C" +
		"\u0309\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07" +
		"\x1C\u0312\n\x1C\f\x1C\x0E\x1C\u0315\v\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x05\x1C\u031B\n\x1C\x03\x1C\x05\x1C\u031E\n\x1C\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x07\x1D\u0325\n\x1D\f\x1D\x0E\x1D\u0328\v\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u032E\n\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x07\x1D\u0335\n\x1D\f\x1D\x0E\x1D\u0338\v\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u033E\n\x1D\x05\x1D\u0340\n\x1D\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0346\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x07\x1F\u034D\n\x1F\f\x1F\x0E\x1F\u0350\v\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u0355\n\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x07 \u035D" +
		"\n \f \x0E \u0360\v \x03 \x03 \x05 \u0364\n \x03!\x03!\x03!\x03!\x03!" +
		"\x03!\x03!\x07!\u036D\n!\f!\x0E!\u0370\v!\x03!\x03!\x03!\x05!\u0375\n" +
		"!\x03\"\x03\"\x03\"\x07\"\u037A\n\"\f\"\x0E\"\u037D\v\"\x03\"\x03\"\x03" +
		"\"\x03#\x03#\x03#\x03#\x05#\u0386\n#\x03$\x03$\x03$\x03$\x05$\u038C\n" +
		"$\x03$\x03$\x03$\x03$\x05$\u0392\n$\x03$\x05$\u0395\n$\x03$\x05$\u0398" +
		"\n$\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u03A0\n%\x03%\x03%\x03%\x03%\x05" +
		"%\u03A6\n%\x03%\x05%\u03A9\n%\x05%\u03AB\n%\x03&\x03&\x03&\x03&\x06&\u03B1" +
		"\n&\r&\x0E&\u03B2\x03&\x03&\x03&\x06&\u03B8\n&\r&\x0E&\u03B9\x03&\x03" +
		"&\x03&\x03&\x05&\u03C0\n&\x03&\x03&\x03&\x03&\x05&\u03C6\n&\x03&\x05&" +
		"\u03C9\n&\x03&\x03&\x03&\x03&\x03&\x05&\u03D0\n&\x03&\x03&\x03&\x03&\x05" +
		"&\u03D6\n&\x03&\x05&\u03D9\n&\x03&\x03&\x05&\u03DD\n&\x03\'\x03\'\x05" +
		"\'\u03E1\n\'\x03\'\x03\'\x03\'\x03\'\x05\'\u03E7\n\'\x03\'\x05\'\u03EA" +
		"\n\'\x03(\x03(\x03(\x03(\x05(\u03F0\n(\x03)\x03)\x03)\x03)\x05)\u03F6" +
		"\n)\x03)\x03)\x03)\x03)\x05)\u03FC\n)\x03)\x05)\u03FF\n)\x03)\x05)\u0402" +
		"\n)\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u040A\n*\x03*\x03*\x03*\x03*\x05" +
		"*\u0410\n*\x03*\x05*\u0413\n*\x05*\u0415\n*\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x05+\u041E\n+\x03+\x03+\x03+\x03+\x05+\u0424\n+\x03+\x05+\u0427" +
		"\n+\x03+\x03+\x05+\u042B\n+\x03,\x03,\x05,\u042F\n,\x03,\x03,\x03,\x03" +
		",\x05,\u0435\n,\x03,\x05,\u0438\n,\x03-\x03-\x03-\x03-\x05-\u043E\n-\x03" +
		"-\x06-\u0441\n-\r-\x0E-\u0442\x03.\x03.\x03.\x07.\u0448\n.\f.\x0E.\u044B" +
		"\v.\x03.\x02\x02\x04\x0E\x10/\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\x02\b\x04\x02\x16\x1600\x04\x02\x1D\x1D##\x03\x02\x99\x9A\x04" +
		"\x02\x96\x96\x98\x98\x04\x02\x92\x92\x94\x94\x05\x0233>>\x8B\x8B\x02\u04FE" +
		"\x02a\x03\x02\x02\x02\x04~\x03\x02\x02\x02\x06\xDE\x03\x02\x02\x02\b\xE0" +
		"\x03\x02\x02\x02\n\xEA\x03\x02\x02\x02\f\xF1\x03\x02\x02\x02\x0E\u0113" +
		"\x03\x02\x02\x02\x10\u01BF\x03\x02\x02\x02\x12\u0231\x03\x02\x02\x02\x14" +
		"\u0246\x03\x02\x02\x02\x16\u024E\x03\x02\x02\x02\x18\u0261\x03\x02\x02" +
		"\x02\x1A\u0269\x03\x02\x02\x02\x1C\u0272\x03\x02\x02\x02\x1E\u0274\x03" +
		"\x02\x02\x02 \u0276\x03\x02\x02\x02\"\u027C\x03\x02\x02\x02$\u027E\x03" +
		"\x02\x02\x02&\u0286\x03\x02\x02\x02(\u028A\x03\x02\x02\x02*\u028E\x03" +
		"\x02\x02\x02,\u0294\x03\x02\x02\x02.\u029B\x03\x02\x02\x020\u02A1\x03" +
		"\x02\x02\x022\u02C9\x03\x02\x02\x024\u02F1\x03\x02\x02\x026\u031D\x03" +
		"\x02\x02\x028\u033F\x03\x02\x02\x02:\u0345\x03\x02\x02\x02<\u0354\x03" +
		"\x02\x02\x02>\u0363\x03\x02\x02\x02@\u0374\x03\x02\x02\x02B\u0376\x03" +
		"\x02\x02\x02D\u0385\x03\x02\x02\x02F\u0397\x03\x02\x02\x02H\u03AA\x03" +
		"\x02\x02\x02J\u03DC\x03\x02\x02\x02L\u03DE\x03\x02\x02\x02N\u03EF\x03" +
		"\x02\x02\x02P\u0401\x03\x02\x02\x02R\u0414\x03\x02\x02\x02T\u042A\x03" +
		"\x02\x02\x02V\u042C\x03\x02\x02\x02X\u0440\x03\x02\x02\x02Z\u0444\x03" +
		"\x02\x02\x02\\`\x07\x06\x02\x02]`\x05\x04\x03\x02^`\x05\x06\x04\x02_\\" +
		"\x03\x02\x02\x02_]\x03\x02\x02\x02_^\x03\x02\x02\x02`c\x03\x02\x02\x02" +
		"a_\x03\x02\x02\x02ab\x03\x02\x02\x02bd\x03\x02\x02\x02ca\x03\x02\x02\x02" +
		"de\x07\x02\x02\x03e\x03\x03\x02\x02\x02fg\x07\x03\x02\x02gh\x07$\x02\x02" +
		"hi\x07F\x02\x02ik\x07 \x02\x02jl\x05\f\x07\x02kj\x03\x02\x02\x02kl\x03" +
		"\x02\x02\x02lm\x03\x02\x02\x02mq\x07\x14\x02\x02np\x05\x06\x04\x02on\x03" +
		"\x02\x02\x02ps\x03\x02\x02\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02r\x7F" +
		"\x03\x02\x02\x02sq\x03\x02\x02\x02tu\x07\x03\x02\x02uv\x07$\x02\x02vw" +
		"\x07F\x02\x02w{\x07\x14\x02\x02xz\x05\x06\x04\x02yx\x03\x02\x02\x02z}" +
		"\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02|\x7F\x03\x02\x02" +
		"\x02}{\x03\x02\x02\x02~f\x03\x02\x02\x02~t\x03\x02\x02\x02\x7F\x05\x03" +
		"\x02\x02\x02\x80\x81\x07\x03\x02\x02\x81\x82\x07\v\x02\x02\x82\x83\x05" +
		"\f\x07\x02\x83\x85\x07\f\x02\x02\x84\x86\x07\x16\x02\x02\x85\x84\x03\x02" +
		"\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x88\x07\x14" +
		"\x02\x02\x88\xDF\x03\x02\x02\x02\x89\x8A\x07\x05\x02\x02\x8A\x8B\x05\x12" +
		"\n\x02\x8B\x8C\x07\x14\x02\x02\x8C\xDF\x03\x02\x02\x02\x8D\x8E\x07\x04" +
		"\x02\x02\x8E\x90\x07F\x02\x02\x8F\x91\x07\x16\x02\x02\x90\x8F\x03\x02" +
		"\x02\x02\x90\x91\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x93\x05\x12" +
		"\n\x02\x93\x94\x07\x14\x02\x02\x94\xDF\x03\x02\x02\x02\x95\x96\x07\x05" +
		"\x02\x02\x96\x97\x07\x13\x02\x02\x97\x98\x07\v\x02\x02\x98\x99\x05\f\x07" +
		"\x02\x99\x9B\x07\f\x02\x02\x9A\x9C\x07\x16\x02\x02\x9B\x9A\x03\x02\x02" +
		"\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x05\x12\n" +
		"\x02\x9E\x9F\x07\x14\x02\x02\x9F\xDF\x03\x02\x02\x02\xA0\xA1\x07\x04\x02" +
		"\x02\xA1\xA2\x07\x13\x02\x02\xA2\xA3\x07F\x02\x02\xA3\xA4\x07\v\x02\x02" +
		"\xA4\xA5\x05\f\x07\x02\xA5\xA7\x07\f\x02\x02\xA6\xA8\x07\x16\x02\x02\xA7" +
		"\xA6\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9" +
		"\xAA\x05\x12\n\x02\xAA\xAB\x07\x14\x02\x02\xAB\xDF\x03\x02\x02\x02\xAC" +
		"\xAE\x07\x03\x02\x02\xAD\xAF\x07\x16\x02\x02\xAE\xAD\x03\x02\x02\x02\xAE" +
		"\xAF\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x05\x16\f\x02\xB1" +
		"\xB2\x07\x14\x02\x02\xB2\xDF\x03\x02\x02\x02\xB3\xB4\x07\x03\x02\x02\xB4" +
		"\xB5\x05,\x17\x02\xB5\xB6\x07\v\x02\x02\xB6\xB7\x05\f\x07\x02\xB7\xB8" +
		"\x07\f\x02\x02\xB8\xB9\x07(\x02\x02\xB9\xBA\x05\x10\t\x02\xBA\xBB\x07" +
		"\x14\x02\x02\xBB\xDF\x03\x02\x02\x02\xBC\xBD\x07\x03\x02\x02\xBD\xBE\x05" +
		":\x1E\x02\xBE\xBF\x07(\x02\x02\xBF\xC0\x05\x10\t\x02\xC0\xC1\x07\x14\x02" +
		"\x02\xC1\xDF\x03\x02\x02\x02\xC2\xC3\x07\x03\x02\x02\xC3\xC8\x05\b\x05" +
		"\x02\xC4\xC5\x07,\x02\x02\xC5\xC7\x05\b\x05\x02\xC6\xC4\x03\x02\x02\x02" +
		"\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02" +
		"\xC9\xCB\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xCC\x07\x14\x02\x02" +
		"\xCC\xDF\x03\x02\x02\x02\xCD\xCE\x07\x03\x02\x02\xCE\xCF\x074\x02\x02" +
		"\xCF\xD0\x05\x0E\b\x02\xD0\xD1\x07\x14\x02\x02\xD1\xDF\x03\x02\x02\x02" +
		"\xD2\xD3\x07\x03\x02\x02\xD3\xD4\x07\v\x02\x02\xD4\xD5\x05\f\x07\x02\xD5" +
		"\xD6\x07\f\x02\x02\xD6\xD7\x074\x02\x02\xD7\xD8\x05\x0E\b\x02\xD8\xD9" +
		"\x07\x14\x02\x02\xD9\xDF\x03\x02\x02\x02\xDA\xDB\x07\x03\x02\x02\xDB\xDC" +
		"\x05\x1A\x0E\x02\xDC\xDD\x07\x14\x02\x02\xDD\xDF\x03\x02\x02\x02\xDE\x80" +
		"\x03\x02\x02\x02\xDE\x89\x03\x02\x02\x02\xDE\x8D\x03\x02\x02\x02\xDE\x95" +
		"\x03\x02\x02\x02\xDE\xA0\x03\x02\x02\x02\xDE\xAC\x03\x02\x02\x02\xDE\xB3" +
		"\x03\x02\x02\x02\xDE\xBC\x03\x02\x02\x02\xDE\xC2\x03\x02\x02\x02\xDE\xCD" +
		"\x03\x02\x02\x02\xDE\xD2\x03\x02\x02\x02\xDE\xDA\x03\x02\x02\x02\xDF\x07" +
		"\x03\x02\x02\x02\xE0\xE1\x07F\x02\x02\xE1\xE2\x07*\x02\x02\xE2\xE7\x05" +
		"\n\x06\x02\xE3\xE4\x07+\x02\x02\xE4\xE6\x05\n\x06\x02\xE5\xE3\x03\x02" +
		"\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02" +
		"\x02\x02\xE8\t\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xEF\x05,\x17" +
		"\x02\xEB\xEC\x07\x11\x02\x02\xEC\xED\x05\x10\t\x02\xED\xEE\x07\x12\x02" +
		"\x02\xEE\xF0\x03\x02\x02\x02\xEF\xEB\x03\x02\x02\x02\xEF\xF0\x03\x02\x02" +
		"\x02\xF0\v\x03\x02\x02\x02\xF1\xF6\x07F\x02\x02\xF2\xF3\x07)\x02\x02\xF3" +
		"\xF5\x07F\x02\x02\xF4\xF2\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6" +
		"\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\r\x03\x02\x02\x02\xF8" +
		"\xF6\x03\x02\x02\x02\xF9\xFA\b\b\x01\x02\xFA\xFB\x075\x02\x02\xFB\xFC" +
		"\x05\x12\n\x02\xFC\xFD\x076\x02\x02\xFD\xFE\x05\x0E\b\x0F\xFE\u0114\x03" +
		"\x02\x02\x02\xFF\u0100\x077\x02\x02\u0100\u0101\x05\x12\n\x02\u0101\u0102" +
		"\x076\x02\x02\u0102\u0103\x05\x0E\b\x0E\u0103\u0114\x03\x02\x02\x02\u0104" +
		"\u0105\x078\x02\x02\u0105\u0106\x05\x12\n\x02\u0106\u0107\x076\x02\x02" +
		"\u0107\u0108\x05\x0E\b\r\u0108\u0114\x03\x02\x02\x02\u0109\u010A\x07=" +
		"\x02\x02\u010A\u0114\x05\x0E\b\b\u010B\u0114\x05D#\x02\u010C\u0114\x05" +
		"\x10\t\x02\u010D\u0114\x07&\x02\x02\u010E\u0114\x07\x19\x02\x02\u010F" +
		"\u0110\x07\t\x02\x02\u0110\u0111\x05\x0E\b\x02\u0111\u0112\x07\n\x02\x02" +
		"\u0112\u0114\x03\x02\x02\x02\u0113\xF9\x03\x02\x02\x02\u0113\xFF\x03\x02" +
		"\x02\x02\u0113\u0104\x03\x02\x02\x02\u0113\u0109\x03\x02\x02\x02\u0113" +
		"\u010B\x03\x02\x02\x02\u0113\u010C\x03\x02\x02\x02\u0113\u010D\x03\x02" +
		"\x02\x02\u0113\u010E\x03\x02\x02\x02\u0113\u010F\x03\x02\x02\x02\u0114" +
		"\u0129\x03\x02\x02\x02\u0115\u0116\f\x11\x02\x02\u0116\u0117\x07\x16\x02" +
		"\x02\u0117\u0128\x05\x0E\b\x12\u0118\u0119\f\x10\x02\x02\u0119\u011A\x07" +
		"0\x02\x02\u011A\u0128\x05\x0E\b\x11\u011B\u011C\f\f\x02\x02\u011C\u011D" +
		"\x079\x02\x02\u011D\u0128\x05\x0E\b\r\u011E\u011F\f\v\x02\x02\u011F\u0120" +
		"\x07:\x02\x02\u0120\u0128\x05\x0E\b\f\u0121\u0122\f\n\x02\x02\u0122\u0123" +
		"\x07;\x02\x02\u0123\u0128\x05\x0E\b\v\u0124\u0125\f\t\x02\x02\u0125\u0126" +
		"\x07<\x02\x02\u0126\u0128\x05\x0E\b\n\u0127\u0115\x03\x02\x02\x02\u0127" +
		"\u0118\x03\x02\x02\x02\u0127\u011B\x03\x02\x02\x02\u0127\u011E\x03\x02" +
		"\x02\x02\u0127\u0121\x03\x02\x02\x02\u0127\u0124\x03\x02\x02\x02\u0128" +
		"\u012B\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02" +
		"\x02\x02\u012A\x0F\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C\u012D" +
		"\b\t\x01\x02\u012D\u012E\x075\x02\x02\u012E\u012F\x05\x12\n\x02\u012F" +
		"\u0130\x076\x02\x02\u0130\u0131\x05\x10\t.\u0131\u01C0\x03\x02\x02\x02" +
		"\u0132\u0133\x077\x02\x02\u0133\u0134\x05\x12\n\x02\u0134\u0135\x076\x02" +
		"\x02\u0135\u0136\x05\x10\t-\u0136\u01C0\x03\x02\x02\x02\u0137\u0138\x07" +
		"8\x02\x02\u0138\u0139\x05\x12\n\x02\u0139\u013A\x076\x02\x02\u013A\u013B" +
		"\x05\x10\t,\u013B\u01C0\x03\x02\x02\x02\u013C\u013D\x07B\x02\x02\u013D" +
		"\u013E\x05\x12\n\x02\u013E\u013F\x076\x02\x02\u013F\u0140\x05\x10\t+\u0140" +
		"\u01C0\x03\x02\x02\x02\u0141\u0142\x07C\x02\x02\u0142\u0143\x05\x12\n" +
		"\x02\u0143\u0144\x076\x02\x02\u0144\u0145\x05\x10\t*\u0145\u01C0\x03\x02" +
		"\x02\x02\u0146\u0147\x07\x1E\x02\x02\u0147\u014C\x05\x16\f\x02\u0148\u0149" +
		"\x070\x02\x02\u0149\u014B\x05\x16\f\x02\u014A\u0148\x03\x02\x02\x02\u014B" +
		"\u014E\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014C\u014D\x03\x02" +
		"\x02\x02\u014D\u014F\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014F" +
		"\u0150\x076\x02\x02\u0150\u0151\x05\x10\t)\u0151\u01C0\x03\x02\x02\x02" +
		"\u0152\u0153\x07=\x02\x02\u0153\u01C0\x05\x10\t$\u0154\u0155\x07\x1C\x02" +
		"\x02\u0155\u0156\x05\x0E\b\x02\u0156\u0157\x07%\x02\x02\u0157\u0158\x05" +
		"\x10\t\x02\u0158\u0159\x07\x18\x02\x02\u0159\u015A\x05\x10\t#\u015A\u01C0" +
		"\x03\x02\x02\x02\u015B\u015C\x07!\x02\x02\u015C\u01C0\x05\x10\t\x1E\u015D" +
		"\u015E\x07\x1F\x02\x02\u015E\u01C0\x05\x10\t\x1C\u015F\u0160\x07\x88\x02" +
		"\x02\u0160\u01C0\x05\x10\t\x1B\u0161\u0163\x07\x8E\x02\x02\u0162\u0164" +
		"\x05X-\x02\u0163\u0162\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164" +
		"\u016C\x03\x02\x02\x02\u0165\u0166\x05\x10\t\x02\u0166\u0167\x07\x96\x02" +
		"\x02\u0167\u016D\x03\x02\x02\x02\u0168\u016A\x05Z.\x02\u0169\u0168\x03" +
		"\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B" +
		"\u016D\x07\x98\x02\x02\u016C\u0165\x03\x02\x02\x02\u016C\u0169\x03\x02" +
		"\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u01C0\x05\x10\t\x1A\u016F\u0171" +
		"\x07\x8E\x02\x02\u0170\u0172\x05X-\x02\u0171\u0170\x03\x02\x02\x02\u0171" +
		"\u0172\x03\x02\x02\x02\u0172\u017A\x03\x02\x02\x02\u0173\u0174\x05\x10" +
		"\t\x02\u0174\u0175\x07\x92\x02\x02\u0175\u017B\x03\x02\x02\x02\u0176\u0178" +
		"\x05Z.\x02\u0177\u0176\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178" +
		"\u0179\x03\x02\x02\x02\u0179\u017B\x07\x94\x02\x02\u017A\u0173\x03\x02" +
		"\x02\x02\u017A\u0177\x03\x02\x02\x02\u017B\u01C0\x03\x02\x02\x02\u017C" +
		"\u017D\x07A\x02\x02\u017D\u0181\x05\x10\t\x02\u017E\u0180\x07\b\x02\x02" +
		"\u017F\u017E\x03\x02\x02\x02\u0180\u0183\x03\x02\x02\x02\u0181\u017F\x03" +
		"\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u01C0\x03\x02\x02\x02\u0183" +
		"\u0181\x03\x02\x02\x02\u0184\u01C0\x05.\x18\x02\u0185\u0186\x05.\x18\x02" +
		"\u0186\u0188\x07\v\x02\x02\u0187\u0189\x05Z.\x02\u0188\u0187\x03\x02\x02" +
		"\x02\u0188\u0189\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B" +
		"\x07\f\x02\x02\u018B\u01C0\x03\x02\x02\x02\u018C\u01C0\x07\x07\x02\x02" +
		"\u018D\u018F\x07\r\x02\x02\u018E\u0190\x05Z.\x02\u018F\u018E\x03\x02\x02" +
		"\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u01C0" +
		"\x07\x0E\x02\x02\u0192\u0193\x07\r\x02\x02\u0193\u0194\x05\x12\n\x02\u0194" +
		"\u0195\x076\x02\x02\u0195\u0196\x05\x10\t\x02\u0196\u0197\x07\x0E\x02" +
		"\x02\u0197\u01C0\x03\x02\x02\x02\u0198\u0199\x07\r\x02\x02\u0199\u019A" +
		"\x05\x12\n\x02\u019A\u019B\x07\x0E\x02\x02\u019B\u01C0\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u019C\u019D\x07\v\x02\x02\u019D\u019E\x05\x12\n\x02\u019E\u019F" +
		"\x07\f\x02\x02\u019F\u01C0\x03\x02\x02\x02\u01A0\u01A9\x07\x0F\x02\x02" +
		"\u01A1\u01A6\x05\x16\f\x02\u01A2\u01A3\x07)\x02\x02\u01A3\u01A5\x05\x16" +
		"\f\x02\u01A4\u01A2\x03\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4" +
		"\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01AA\x03\x02\x02\x02" +
		"\u01A8\u01A6\x03\x02\x02\x02\u01A9\u01A1\x03\x02\x02\x02\u01A9\u01AA\x03" +
		"\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01C0\x07\x10\x02\x02\u01AC" +
		"\u01AD\x07\t\x02\x02\u01AD\u01B0\x05\x10\t\x02\u01AE\u01AF\x07)\x02\x02" +
		"\u01AF\u01B1\x05\x10\t\x02\u01B0\u01AE\x03\x02\x02\x02\u01B1\u01B2\x03" +
		"\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3" +
		"\u01B4\x03\x02\x02\x02\u01B4\u01B5\x07\n\x02\x02\u01B5\u01C0\x03\x02\x02" +
		"\x02\u01B6\u01B7\x07\t\x02\x02\u01B7\u01B8\x07C\x02\x02\u01B8\u01B9\x05" +
		"\x12\n\x02\u01B9\u01BA\x07\n\x02\x02\u01BA\u01C0\x03\x02\x02\x02\u01BB" +
		"\u01BC\x07\t\x02\x02\u01BC\u01BD\x05\x10\t\x02\u01BD\u01BE\x07\n\x02\x02" +
		"\u01BE\u01C0\x03\x02\x02\x02\u01BF\u012C\x03\x02\x02\x02\u01BF\u0132\x03" +
		"\x02\x02\x02\u01BF\u0137\x03\x02\x02\x02\u01BF\u013C\x03\x02\x02\x02\u01BF" +
		"\u0141\x03\x02\x02\x02\u01BF\u0146\x03\x02\x02\x02\u01BF\u0152\x03\x02" +
		"\x02\x02\u01BF\u0154\x03\x02\x02\x02\u01BF\u015B\x03\x02\x02\x02\u01BF" +
		"\u015D\x03\x02\x02\x02\u01BF\u015F\x03\x02\x02\x02\u01BF\u0161\x03\x02" +
		"\x02\x02\u01BF\u016F\x03\x02\x02\x02\u01BF\u017C\x03\x02\x02\x02\u01BF" +
		"\u0184\x03\x02\x02\x02\u01BF\u0185\x03\x02\x02\x02\u01BF\u018C\x03\x02" +
		"\x02\x02\u01BF\u018D\x03\x02\x02\x02\u01BF\u0192\x03\x02\x02\x02\u01BF" +
		"\u0198\x03\x02\x02\x02\u01BF\u019C\x03\x02\x02\x02\u01BF\u01A0\x03\x02" +
		"\x02\x02\u01BF\u01AC\x03\x02\x02\x02\u01BF\u01B6\x03\x02\x02\x02\u01BF" +
		"\u01BB\x03\x02\x02\x02\u01C0\u022D\x03\x02\x02\x02\u01C1\u01C2\f(\x02" +
		"\x02\u01C2\u01C3\x079\x02\x02\u01C3\u022C\x05\x10\t)\u01C4\u01C5\f\'\x02" +
		"\x02\u01C5\u01C6\x07:\x02\x02\u01C6\u022C\x05\x10\t(\u01C7\u01C8\f&\x02" +
		"\x02\u01C8\u01C9\x07;\x02\x02\u01C9\u022C\x05\x10\t\'\u01CA\u01CB\f%\x02" +
		"\x02\u01CB\u01CC\x07<\x02\x02\u01CC\u022C\x05\x10\t&\u01CD\u01CE\f\"\x02" +
		"\x02\u01CE\u01CF\x07D\x02\x02\u01CF\u022C\x05\x10\t#\u01D0\u01D1\f!\x02" +
		"\x02\u01D1\u01D2\x07E\x02\x02\u01D2\u022C\x05\x10\t\"\u01D3\u01D4\f\x1F" +
		"\x02\x02\u01D4\u01D5\x07?\x02\x02\u01D5\u022C\x05\x10\t \u01D6\u01D7\f" +
		"\x17\x02\x02\u01D7\u01D8\x06\t\x10\x02\u01D8\u01D9\x07\x8C\x02\x02\u01D9" +
		"\u022C\x05\x10\t\x18\u01DA\u01DB\f\x16\x02\x02\u01DB\u01DC\x07\x8C\x02" +
		"\x02\u01DC\u022C\x05\x10\t\x16\u01DD\u01DE\f\x15\x02\x02\u01DE\u01E0\x07" +
		"\x90\x02\x02\u01DF\u01E1\x05X-\x02\u01E0\u01DF\x03\x02\x02\x02\u01E0\u01E1" +
		"\x03\x02\x02\x02\u01E1\u01E9\x03\x02\x02\x02\u01E2\u01E3\x05\x10\t\x02" +
		"\u01E3\u01E4\x07\x96\x02\x02\u01E4\u01EA\x03\x02\x02\x02\u01E5\u01E7\x05" +
		"Z.\x02\u01E6\u01E5\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01E8" +
		"\x03\x02\x02\x02\u01E8\u01EA\x07\x98\x02\x02\u01E9\u01E2\x03\x02\x02\x02" +
		"\u01E9\u01E6\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u022C\x05" +
		"\x10\t\x16\u01EC\u01ED\f\x13\x02\x02\u01ED\u022C\x05\x10\t\x14\u01EE\u01EF" +
		"\f \x02\x02\u01EF\u01F0\x07-\x02\x02\u01F0\u01F1\x07\t\x02\x02\u01F1\u01F6" +
		"\x05,\x17\x02\u01F2\u01F3\x07)\x02\x02\u01F3\u01F5\x05,\x17\x02\u01F4" +
		"\u01F2\x03\x02\x02\x02\u01F5\u01F8\x03\x02\x02\x02\u01F6\u01F4\x03\x02" +
		"\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F9\x03\x02\x02\x02\u01F8" +
		"\u01F6\x03\x02\x02\x02\u01F9\u01FA\x07\n\x02\x02\u01FA\u022C\x03\x02\x02" +
		"\x02\u01FB\u01FE\f\x1D\x02\x02\u01FC\u01FD\x07@\x02\x02\u01FD\u01FF\x05" +
		"\x10\t\x02\u01FE\u01FC\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200" +
		"\u01FE\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u022C\x03\x02" +
		"\x02\x02\u0202\u0203\f\x19\x02\x02\u0203\u022C\x07\x8A\x02\x02\u0204\u0205" +
		"\f\x18\x02\x02\u0205\u0207\x07\x90\x02\x02\u0206\u0208\x05X-\x02\u0207" +
		"\u0206\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u0210\x03\x02" +
		"\x02\x02\u0209\u020A\x05\x10\t\x02\u020A\u020B\x07\x92\x02\x02\u020B\u0211" +
		"\x03\x02\x02\x02\u020C\u020E\x05Z.\x02\u020D\u020C\x03\x02\x02\x02\u020D" +
		"\u020E\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F\u0211\x07\x94" +
		"\x02\x02\u0210\u0209\x03\x02\x02\x02\u0210\u020D\x03\x02\x02\x02\u0211" +
		"\u022C\x03\x02\x02\x02\u0212\u0213\f\x12\x02\x02\u0213\u022C\x07\b\x02" +
		"\x02\u0214\u0215\f\x11\x02\x02\u0215\u0216\x07\v\x02\x02\u0216\u0217\x05" +
		",\x17\x02\u0217\u0218\x07.\x02\x02\u0218\u0220\x05,\x17\x02\u0219\u021A" +
		"\x07)\x02\x02\u021A\u021B\x05,\x17\x02\u021B\u021C\x07.\x02\x02\u021C" +
		"\u021D\x05,\x17\x02\u021D\u021F\x03\x02\x02\x02\u021E\u0219\x03\x02\x02" +
		"\x02\u021F\u0222\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0220\u0221" +
		"\x03\x02\x02\x02\u0221\u0223\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02" +
		"\u0223\u0224\x07\f\x02\x02\u0224\u022C\x03\x02\x02\x02\u0225\u0226\f\x10" +
		"\x02\x02\u0226\u0227\x07/\x02\x02\u0227\u022C\x05.\x18\x02\u0228\u0229" +
		"\f\x0F\x02\x02\u0229\u022A\x07/\x02\x02\u022A\u022C\x07\x07\x02\x02\u022B" +
		"\u01C1\x03\x02\x02\x02\u022B\u01C4\x03\x02\x02\x02\u022B\u01C7\x03\x02" +
		"\x02\x02\u022B\u01CA\x03\x02\x02\x02\u022B\u01CD\x03\x02\x02\x02\u022B" +
		"\u01D0\x03\x02\x02\x02\u022B\u01D3\x03\x02\x02\x02\u022B\u01D6\x03\x02" +
		"\x02\x02\u022B\u01DA\x03\x02\x02\x02\u022B\u01DD\x03\x02\x02\x02\u022B" +
		"\u01EC\x03\x02\x02\x02\u022B\u01EE\x03\x02\x02\x02\u022B\u01FB\x03\x02" +
		"\x02\x02\u022B\u0202\x03\x02\x02\x02\u022B\u0204\x03\x02\x02\x02\u022B" +
		"\u0212\x03\x02\x02\x02\u022B\u0214\x03\x02\x02\x02\u022B\u0225\x03\x02" +
		"\x02\x02\u022B\u0228\x03\x02\x02\x02\u022C\u022F\x03\x02\x02\x02\u022D" +
		"\u022B\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E\x11\x03\x02\x02" +
		"\x02\u022F\u022D\x03\x02\x02\x02\u0230\u0232\x07\x16\x02\x02\u0231\u0230" +
		"\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0234\x03\x02\x02\x02" +
		"\u0233\u0235\x05\x14\v\x02\u0234\u0233\x03\x02\x02\x02\u0234\u0235\x03" +
		"\x02\x02\x02\u0235\u0237\x03\x02\x02\x02\u0236\u0238\x07\x16\x02\x02\u0237" +
		"\u0236\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\u0241\x03\x02" +
		"\x02\x02\u0239\u023B\x07+\x02\x02\u023A\u023C\x07\x16\x02\x02\u023B\u023A" +
		"\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02" +
		"\u023D\u023F\x05\x0E\b\x02\u023E\u0240\x07\x16\x02\x02\u023F\u023E\x03" +
		"\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240\u0242\x03\x02\x02\x02\u0241" +
		"\u0239\x03\x02\x02\x02\u0241\u0242\x03\x02\x02\x02\u0242\u0244\x03\x02" +
		"\x02\x02\u0243\u0245\x07\x16\x02\x02\u0244\u0243\x03\x02\x02\x02\u0244" +
		"\u0245\x03\x02\x02\x02\u0245\x13\x03\x02\x02\x02\u0246\u024B\x05\x18\r" +
		"\x02\u0247\u0248\t\x02\x02\x02\u0248\u024A\x05\x18\r\x02\u0249\u0247\x03" +
		"\x02\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024B" +
		"\u024C\x03\x02\x02\x02\u024C\x15\x03\x02\x02\x02\u024D\u024B\x03\x02\x02" +
		"\x02\u024E\u024F\x05,\x17\x02\u024F\u0250\x07(\x02\x02\u0250\u0252\x05" +
		"\x10\t\x02\u0251\u0253\x07\x16\x02\x02\u0252\u0251\x03\x02\x02\x02\u0252" +
		"\u0253\x03\x02\x02\x02\u0253\x17\x03\x02\x02\x02\u0254\u0259\x05,\x17" +
		"\x02\u0255\u0256\x07)\x02\x02\u0256\u0258\x05,\x17\x02\u0257\u0255\x03" +
		"\x02\x02\x02\u0258\u025B\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u0259" +
		"\u025A\x03\x02\x02\x02\u025A\u025C\x03\x02\x02\x02\u025B\u0259\x03\x02" +
		"\x02\x02\u025C\u025D\x07\'\x02\x02\u025D\u025E\x05\x10\t\x02\u025E\u0262" +
		"\x03\x02\x02\x02\u025F\u0262\x05\x16\f\x02\u0260\u0262\x05\x10\t\x02\u0261" +
		"\u0254\x03\x02\x02\x02\u0261\u025F\x03\x02\x02\x02\u0261\u0260\x03\x02" +
		"\x02\x02\u0262\x19\x03\x02\x02\x02\u0263\u0264\x07\"\x02\x02\u0264\u026A" +
		"\x05\"\x12\x02\u0265\u0266\x07\x1A\x02\x02\u0266\u026A\x05\x1C\x0F\x02" +
		"\u0267\u0268\x07\x1B\x02\x02\u0268\u026A\x05\x1C\x0F\x02\u0269\u0263\x03" +
		"\x02\x02\x02\u0269\u0265\x03\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u026A" +
		"\x1B\x03\x02\x02\x02\u026B\u0273\x05$\x13\x02\u026C\u0273\x05&\x14\x02" +
		"\u026D\u026E\x05\x1E\x10\x02\u026E\u026F\x05 \x11\x02\u026F\u0270\x05" +
		"(\x15\x02\u0270\u0273\x03\x02\x02\x02\u0271\u0273\x05*\x16\x02\u0272\u026B" +
		"\x03\x02\x02\x02\u0272\u026C\x03\x02\x02\x02\u0272\u026D\x03\x02\x02\x02" +
		"\u0272\u0271\x03\x02\x02\x02\u0273\x1D\x03\x02\x02\x02\u0274\u0275\x07" +
		"\x07\x02\x02\u0275\x1F\x03\x02\x02\x02\u0276\u0277\t\x03\x02\x02\u0277" +
		"!\x03\x02\x02\x02\u0278\u027D\x05$\x13\x02\u0279\u027D\x05&\x14\x02\u027A" +
		"\u027D\x05(\x15\x02\u027B\u027D\x05*\x16\x02\u027C\u0278\x03\x02\x02\x02" +
		"\u027C\u0279\x03\x02\x02\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027B\x03" +
		"\x02\x02\x02\u027D#\x03\x02\x02\x02\u027E\u0282\x07\t\x02\x02\u027F\u0283" +
		"\x052\x1A\x02\u0280\u0281\x07\x1F\x02\x02\u0281\u0283\x071\x02\x02\u0282" +
		"\u027F\x03\x02\x02\x02\u0282\u0280\x03\x02\x02\x02\u0283\u0284\x03\x02" +
		"\x02\x02\u0284\u0285\x07\n\x02\x02\u0285%\x03\x02\x02\x02\u0286\u0287" +
		"\x07\t\x02\x02\u0287\u0288\x054\x1B\x02\u0288\u0289\x07\n\x02\x02\u0289" +
		"\'\x03\x02\x02\x02\u028A\u028B\x07\t\x02\x02\u028B\u028C\x056\x1C\x02" +
		"\u028C\u028D\x07\n\x02\x02\u028D)\x03\x02\x02\x02\u028E\u028F\x07\t\x02" +
		"\x02\u028F\u0290\x058\x1D\x02\u0290\u0291\x07\n\x02\x02\u0291+\x03\x02" +
		"\x02\x02\u0292\u0295\x07F\x02\x02\u0293\u0295\x050\x19\x02\u0294\u0292" +
		"\x03\x02\x02\x02\u0294\u0293\x03\x02\x02\x02\u0295-\x03\x02\x02\x02\u0296" +
		"\u029C\x07F\x02\x02\u0297\u0298\x07\t\x02\x02\u0298\u0299\x050\x19\x02" +
		"\u0299\u029A\x07\n\x02\x02\u029A\u029C\x03\x02\x02\x02\u029B\u0296\x03" +
		"\x02\x02\x02\u029B\u0297\x03\x02\x02\x02\u029C/\x03\x02\x02\x02\u029D" +
		"\u02A2\x052\x1A\x02\u029E\u02A2\x054\x1B\x02\u029F\u02A2\x056\x1C\x02" +
		"\u02A0\u02A2\x058\x1D\x02\u02A1\u029D\x03\x02\x02\x02\u02A1\u029E\x03" +
		"\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A1\u02A0\x03\x02\x02\x02\u02A2" +
		"1\x03\x02\x02\x02\u02A3\u02A4\x07\x88\x02\x02\u02A4\u02CA\x071\x02\x02" +
		"\u02A5\u02A6\x07\x87\x02\x02\u02A6\u02CA\x071\x02\x02\u02A7\u02AE\x07" +
		"\x8E\x02\x02\u02A8\u02A9\x071\x02\x02\u02A9\u02AD\x07\x99\x02\x02\u02AA" +
		"\u02AB\x072\x02\x02\u02AB\u02AD\x07\x9A\x02\x02\u02AC\u02A8\x03\x02\x02" +
		"\x02\u02AC\u02AA\x03\x02\x02\x02\u02AD\u02B0\x03\x02\x02\x02\u02AE\u02AC" +
		"\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B5\x03\x02\x02\x02" +
		"\u02B0\u02AE\x03\x02\x02\x02\u02B1\u02B2\x071\x02\x02\u02B2\u02B6\x07" +
		"\x96\x02\x02\u02B3\u02B4\x072\x02\x02\u02B4\u02B6\x07\x98\x02\x02\u02B5" +
		"\u02B1\x03\x02\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B6\u02B7\x03\x02" +
		"\x02\x02\u02B7\u02CA\x071\x02\x02\u02B8\u02BF\x07\x8D\x02\x02\u02B9\u02BA" +
		"\x071\x02\x02\u02BA\u02BE\x07\x99\x02\x02\u02BB\u02BC\x072\x02\x02\u02BC" +
		"\u02BE\x07\x9A\x02\x02\u02BD\u02B9\x03\x02\x02\x02\u02BD\u02BB\x03\x02" +
		"\x02\x02\u02BE\u02C1\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02BF" +
		"\u02C0\x03\x02\x02\x02\u02C0\u02C6\x03\x02\x02\x02\u02C1\u02BF\x03\x02" +
		"\x02\x02\u02C2\u02C3\x071\x02\x02\u02C3\u02C7\x07\x95\x02\x02\u02C4\u02C5" +
		"\x072\x02\x02\u02C5\u02C7\x07\x97\x02\x02\u02C6\u02C2\x03\x02\x02\x02" +
		"\u02C6\u02C4\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02CA\x07" +
		"1\x02\x02\u02C9\u02A3\x03\x02\x02\x02\u02C9\u02A5\x03\x02\x02\x02\u02C9" +
		"\u02A7\x03\x02\x02\x02\u02C9\u02B8\x03\x02\x02\x02\u02CA3\x03\x02\x02" +
		"\x02\u02CB\u02CC\x071\x02\x02\u02CC\u02F2\x07\x8A\x02\x02\u02CD\u02CE" +
		"\x071\x02\x02\u02CE\u02F2\x07\x89\x02\x02\u02CF\u02D0\x071\x02\x02\u02D0" +
		"\u02D7\x07\x90\x02\x02\u02D1\u02D2\x071\x02\x02\u02D2\u02D6\x07\x99\x02" +
		"\x02\u02D3\u02D4\x072\x02\x02\u02D4\u02D6\x07\x9A\x02\x02\u02D5\u02D1" +
		"\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D6\u02D9\x03\x02\x02\x02" +
		"\u02D7\u02D5\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02DE\x03" +
		"\x02\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02DA\u02DB\x071\x02\x02\u02DB" +
		"\u02DF\x07\x92\x02\x02\u02DC\u02DD\x072\x02\x02\u02DD\u02DF\x07\x94\x02" +
		"\x02\u02DE\u02DA\x03\x02\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DF\u02F2" +
		"\x03\x02\x02\x02\u02E0\u02E1\x071\x02\x02\u02E1\u02E8\x07\x8F\x02\x02" +
		"\u02E2\u02E3\x071\x02\x02\u02E3\u02E7\x07\x99\x02\x02\u02E4\u02E5\x07" +
		"2\x02\x02\u02E5\u02E7\x07\x9A\x02\x02\u02E6\u02E2\x03\x02\x02\x02\u02E6" +
		"\u02E4\x03\x02\x02\x02\u02E7\u02EA\x03\x02\x02\x02\u02E8\u02E6\x03\x02" +
		"\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9\u02EF\x03\x02\x02\x02\u02EA" +
		"\u02E8\x03\x02\x02\x02\u02EB\u02EC\x071\x02\x02\u02EC\u02F0\x07\x91\x02" +
		"\x02\u02ED\u02EE\x072\x02\x02\u02EE\u02F0\x07\x93\x02\x02\u02EF\u02EB" +
		"\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02F0\u02F2\x03\x02\x02\x02" +
		"\u02F1\u02CB\x03\x02\x02\x02\u02F1\u02CD\x03\x02\x02\x02\u02F1\u02CF\x03" +
		"\x02\x02\x02\u02F1\u02E0\x03\x02\x02\x02\u02F25\x03\x02\x02\x02\u02F3" +
		"\u02F4\x071\x02\x02\u02F4\u02F5\x07\x8C\x02\x02\u02F5\u031E\x071\x02\x02" +
		"\u02F6\u02F7\x071\x02\x02\u02F7\u02F8\x07\x8B\x02\x02\u02F8\u031E\x07" +
		"1\x02\x02\u02F9\u02FA\x071\x02\x02\u02FA\u0301\x07\x90\x02\x02\u02FB\u02FC" +
		"\x071\x02\x02\u02FC\u0300\x07\x99\x02\x02\u02FD\u02FE\x072\x02\x02\u02FE" +
		"\u0300\x07\x9A\x02\x02\u02FF\u02FB\x03\x02\x02\x02\u02FF\u02FD\x03\x02" +
		"\x02\x02\u0300\u0303\x03\x02\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0301" +
		"\u0302\x03\x02\x02\x02\u0302\u0308\x03\x02\x02\x02\u0303\u0301\x03\x02" +
		"\x02\x02\u0304\u0305\x071\x02\x02\u0305\u0309\x07\x96\x02\x02\u0306\u0307" +
		"\x072\x02\x02\u0307\u0309\x07\x98\x02\x02\u0308\u0304\x03\x02\x02\x02" +
		"\u0308\u0306\x03\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A\u031E\x07" +
		"1\x02\x02\u030B\u030C\x071\x02\x02\u030C\u0313\x07\x8F\x02\x02\u030D\u030E" +
		"\x071\x02\x02\u030E\u0312\x07\x99\x02\x02\u030F\u0310\x072\x02\x02\u0310" +
		"\u0312\x07\x9A\x02\x02\u0311\u030D\x03\x02\x02\x02\u0311\u030F\x03\x02" +
		"\x02\x02\u0312\u0315\x03\x02\x02\x02\u0313\u0311\x03\x02\x02\x02\u0313" +
		"\u0314\x03\x02\x02\x02\u0314\u031A\x03\x02\x02\x02\u0315\u0313\x03\x02" +
		"\x02\x02\u0316\u0317\x071\x02\x02\u0317\u031B\x07\x95\x02\x02\u0318\u0319" +
		"\x072\x02\x02\u0319\u031B\x07\x97\x02\x02\u031A\u0316\x03\x02\x02\x02" +
		"\u031A\u0318\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C\u031E\x07" +
		"1\x02\x02\u031D\u02F3\x03\x02\x02\x02\u031D\u02F6\x03\x02\x02\x02\u031D" +
		"\u02F9\x03\x02\x02\x02\u031D\u030B\x03\x02\x02\x02\u031E7\x03\x02\x02" +
		"\x02\u031F\u0326\x07\x8E\x02\x02\u0320\u0321\x071\x02\x02\u0321\u0325" +
		"\x07\x99\x02\x02\u0322\u0323\x072\x02\x02\u0323\u0325\x07\x9A\x02\x02" +
		"\u0324\u0320\x03\x02\x02\x02\u0324\u0322\x03\x02\x02\x02\u0325\u0328\x03" +
		"\x02\x02\x02\u0326\u0324\x03\x02\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327" +
		"\u032D\x03\x02\x02\x02\u0328\u0326\x03\x02\x02\x02\u0329\u032A\x071\x02" +
		"\x02\u032A\u032E\x07\x92\x02\x02\u032B\u032C\x072\x02\x02\u032C\u032E" +
		"\x07\x94\x02\x02\u032D\u0329\x03\x02\x02\x02\u032D\u032B\x03\x02\x02\x02" +
		"\u032E\u0340\x03\x02\x02\x02\u032F\u0336\x07\x8D\x02\x02\u0330\u0331\x07" +
		"1\x02\x02\u0331\u0335\x07\x99\x02\x02\u0332\u0333\x072\x02\x02\u0333\u0335" +
		"\x07\x9A\x02\x02\u0334\u0330\x03\x02\x02\x02\u0334\u0332\x03\x02\x02\x02" +
		"\u0335\u0338\x03\x02\x02\x02\u0336\u0334\x03\x02\x02\x02\u0336\u0337\x03" +
		"\x02\x02\x02\u0337\u033D\x03\x02\x02\x02\u0338\u0336\x03\x02\x02\x02\u0339" +
		"\u033A\x071\x02\x02\u033A\u033E\x07\x91\x02\x02\u033B\u033C\x072\x02\x02" +
		"\u033C\u033E\x07\x93\x02\x02\u033D\u0339\x03\x02\x02\x02\u033D\u033B\x03" +
		"\x02\x02\x02\u033E\u0340\x03\x02\x02\x02\u033F\u031F\x03\x02\x02\x02\u033F" +
		"\u032F\x03\x02\x02\x02\u03409\x03\x02\x02\x02\u0341\u0346\x05<\x1F\x02" +
		"\u0342\u0346\x05> \x02\u0343\u0346\x05@!\x02\u0344\u0346\x05B\"\x02\u0345" +
		"\u0341\x03\x02\x02\x02\u0345\u0342\x03\x02\x02\x02\u0345\u0343\x03\x02" +
		"\x02\x02\u0345\u0344\x03\x02\x02\x02\u0346;\x03\x02\x02\x02\u0347\u0348" +
		"\x07\x88\x02\x02\u0348\u0355\x07F\x02\x02\u0349\u034E\x07\x8E\x02\x02" +
		"\u034A\u034B\x07F\x02\x02\u034B\u034D\t\x04\x02\x02\u034C\u034A\x03\x02" +
		"\x02\x02\u034D\u0350\x03\x02\x02\x02\u034E\u034C\x03\x02\x02\x02\u034E" +
		"\u034F\x03\x02\x02\x02\u034F\u0351\x03\x02\x02\x02\u0350\u034E\x03\x02" +
		"\x02\x02\u0351\u0352\x07F\x02\x02\u0352\u0353\t\x05\x02\x02\u0353\u0355" +
		"\x07F\x02\x02\u0354\u0347\x03\x02\x02\x02\u0354\u0349\x03\x02\x02\x02" +
		"\u0355=\x03\x02\x02\x02\u0356\u0357\x07F\x02\x02\u0357\u0364\x07\x8A\x02" +
		"\x02\u0358\u0359\x07F\x02\x02\u0359\u035E\x07\x90\x02\x02\u035A\u035B" +
		"\x07F\x02\x02\u035B\u035D\t\x04\x02\x02\u035C\u035A\x03\x02\x02\x02\u035D" +
		"\u0360\x03\x02\x02\x02\u035E\u035C\x03\x02\x02\x02\u035E\u035F\x03\x02" +
		"\x02\x02\u035F\u0361\x03\x02\x02\x02\u0360\u035E\x03\x02\x02\x02\u0361" +
		"\u0362\x07F\x02\x02\u0362\u0364\t\x06\x02\x02\u0363\u0356\x03\x02\x02" +
		"\x02\u0363\u0358\x03\x02\x02\x02\u0364?\x03\x02\x02\x02\u0365\u0366\x07" +
		"F\x02\x02\u0366\u0367\x07\x8C\x02\x02\u0367\u0375\x07F\x02\x02\u0368\u0369" +
		"\x07F\x02\x02\u0369\u036E\x07\x90\x02\x02\u036A\u036B\x07F\x02\x02\u036B" +
		"\u036D\t\x04\x02\x02\u036C\u036A\x03\x02\x02\x02\u036D\u0370\x03\x02\x02" +
		"\x02\u036E\u036C\x03\x02\x02\x02\u036E\u036F\x03\x02\x02\x02\u036F\u0371" +
		"\x03\x02\x02\x02\u0370\u036E\x03\x02\x02\x02\u0371\u0372\x07F\x02\x02" +
		"\u0372\u0373\t\x05\x02\x02\u0373\u0375\x07F\x02\x02\u0374\u0365\x03\x02" +
		"\x02\x02\u0374\u0368\x03\x02\x02\x02\u0375A\x03\x02\x02\x02\u0376\u037B" +
		"\x07\x8E\x02\x02\u0377\u0378\x07F\x02\x02\u0378\u037A\t\x04\x02\x02\u0379" +
		"\u0377\x03\x02\x02\x02\u037A\u037D\x03\x02\x02\x02\u037B\u0379\x03\x02" +
		"\x02\x02\u037B\u037C\x03\x02\x02\x02\u037C\u037E\x03\x02\x02\x02\u037D" +
		"\u037B\x03\x02\x02\x02\u037E\u037F\x07F\x02\x02\u037F\u0380\t\x06\x02" +
		"\x02\u0380C\x03\x02\x02\x02\u0381\u0386\x05F$\x02\u0382\u0386\x05H%\x02" +
		"\u0383\u0386\x05J&\x02\u0384\u0386\x05L\'\x02\u0385\u0381\x03\x02\x02" +
		"\x02\u0385\u0382\x03\x02\x02\x02\u0385\u0383\x03\x02\x02\x02\u0385\u0384" +
		"\x03\x02\x02\x02\u0386E\x03\x02\x02\x02\u0387\u0388\x07\x87\x02\x02\u0388" +
		"\u0398\x05\x10\t\x02\u0389\u038B\x07\x8D\x02\x02\u038A\u038C\x05X-\x02" +
		"\u038B\u038A\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\u0394\x03" +
		"\x02\x02\x02\u038D\u038E\x05\x10\t\x02\u038E\u038F\x07\x95\x02\x02\u038F" +
		"\u0395\x03\x02\x02\x02\u0390\u0392\x05Z.\x02\u0391\u0390\x03\x02\x02\x02" +
		"\u0391\u0392\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393\u0395\x07" +
		"\x97\x02\x02\u0394\u038D\x03\x02\x02\x02\u0394\u0391\x03\x02\x02\x02\u0395" +
		"\u0396\x03\x02\x02\x02\u0396\u0398\x05\x10\t\x02\u0397\u0387\x03\x02\x02" +
		"\x02\u0397\u0389\x03\x02\x02\x02\u0398G\x03\x02\x02\x02\u0399\u039A\x05" +
		"\x10\t\x02\u039A\u039B\x07\x89\x02\x02\u039B\u03AB\x03\x02\x02\x02\u039C" +
		"\u039D\x05\x10\t\x02\u039D\u039F\x07\x8F\x02\x02\u039E\u03A0\x05X-\x02" +
		"\u039F\u039E\x03\x02\x02\x02\u039F\u03A0\x03\x02\x02\x02\u03A0\u03A8\x03" +
		"\x02\x02\x02\u03A1\u03A2\x05\x10\t\x02\u03A2\u03A3\x07\x91\x02\x02\u03A3" +
		"\u03A9\x03\x02\x02\x02\u03A4\u03A6\x05Z.\x02\u03A5\u03A4\x03\x02\x02\x02" +
		"\u03A5\u03A6\x03\x02\x02\x02\u03A6\u03A7\x03\x02\x02\x02\u03A7\u03A9\x07" +
		"\x93\x02\x02\u03A8\u03A1\x03\x02\x02\x02\u03A8\u03A5\x03\x02\x02\x02\u03A9" +
		"\u03AB\x03\x02\x02\x02\u03AA\u0399\x03\x02\x02\x02\u03AA\u039C\x03\x02" +
		"\x02\x02\u03ABI\x03\x02\x02\x02\u03AC\u03AD\x05\x10\t\x02\u03AD\u03B0" +
		"\x06&\x1C\x02\u03AE\u03AF\t\x07\x02\x02\u03AF\u03B1\x05\x10\t\x02\u03B0" +
		"\u03AE\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B0\x03\x02" +
		"\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3\u03DD\x03\x02\x02\x02\u03B4" +
		"\u03B7\x05\x10\t\x02\u03B5\u03B6\t\x07\x02\x02\u03B6\u03B8\x05\x10\t\x02" +
		"\u03B7\u03B5\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03B7\x03" +
		"\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA\u03DD\x03\x02\x02\x02\u03BB" +
		"\u03BC\x05\x10\t\x02\u03BC\u03BD\x06&\x1D\x02\u03BD\u03BF\x07\x8F\x02" +
		"\x02\u03BE\u03C0\x05X-\x02\u03BF\u03BE\x03\x02\x02\x02\u03BF\u03C0\x03" +
		"\x02\x02\x02\u03C0\u03C8\x03\x02\x02\x02\u03C1\u03C2\x05\x10\t\x02\u03C2" +
		"\u03C3\x07\x95\x02\x02\u03C3\u03C9\x03\x02\x02\x02\u03C4\u03C6\x05Z.\x02" +
		"\u03C5\u03C4\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02\x02\u03C6\u03C7\x03" +
		"\x02\x02\x02\u03C7\u03C9\x07\x97\x02\x02\u03C8\u03C1\x03\x02\x02\x02\u03C8" +
		"\u03C5\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CB\x05\x10" +
		"\t\x02\u03CB\u03DD\x03\x02\x02\x02\u03CC\u03CD\x05\x10\t\x02\u03CD\u03CF" +
		"\x07\x8F\x02\x02\u03CE\u03D0\x05X-\x02\u03CF\u03CE\x03\x02\x02\x02\u03CF" +
		"\u03D0\x03\x02\x02\x02\u03D0\u03D8\x03\x02\x02\x02\u03D1\u03D2\x05\x10" +
		"\t\x02\u03D2\u03D3\x07\x95\x02\x02\u03D3\u03D9\x03\x02\x02\x02\u03D4\u03D6" +
		"\x05Z.\x02\u03D5\u03D4\x03\x02\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6" +
		"\u03D7\x03\x02\x02\x02\u03D7\u03D9\x07\x97\x02\x02\u03D8\u03D1\x03\x02" +
		"\x02\x02\u03D8\u03D5\x03\x02\x02\x02\u03D9\u03DA\x03\x02\x02\x02\u03DA" +
		"\u03DB\x05\x10\t\x02\u03DB\u03DD\x03\x02\x02\x02\u03DC\u03AC\x03\x02\x02" +
		"\x02\u03DC\u03B4\x03\x02\x02\x02\u03DC\u03BB\x03\x02\x02\x02\u03DC\u03CC" +
		"\x03\x02\x02\x02\u03DDK\x03\x02\x02\x02\u03DE\u03E0\x07\x8D\x02\x02\u03DF" +
		"\u03E1\x05X-\x02\u03E0\u03DF\x03\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02" +
		"\u03E1\u03E9\x03\x02\x02\x02\u03E2\u03E3\x05\x10\t\x02\u03E3\u03E4\x07" +
		"\x91\x02\x02\u03E4\u03EA\x03\x02\x02\x02\u03E5\u03E7\x05Z.\x02\u03E6\u03E5" +
		"\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03E8\x03\x02\x02\x02" +
		"\u03E8\u03EA\x07\x93\x02\x02\u03E9\u03E2\x03\x02\x02\x02\u03E9\u03E6\x03" +
		"\x02\x02\x02\u03EAM\x03\x02\x02\x02\u03EB\u03F0\x05P)\x02\u03EC\u03F0" +
		"\x05R*\x02\u03ED\u03F0\x05T+\x02\u03EE\u03F0\x05V,\x02\u03EF\u03EB\x03" +
		"\x02\x02\x02\u03EF\u03EC\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03EF" +
		"\u03EE\x03\x02\x02\x02\u03F0O\x03\x02\x02\x02\u03F1\u03F2\x07\x88\x02" +
		"\x02\u03F2\u0402\x05\x10\t\x02\u03F3\u03F5\x07\x8E\x02\x02\u03F4\u03F6" +
		"\x05X-\x02\u03F5\u03F4\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6" +
		"\u03FE\x03\x02\x02\x02\u03F7\u03F8\x05\x10\t\x02\u03F8\u03F9\x07\x96\x02" +
		"\x02\u03F9\u03FF\x03\x02\x02\x02\u03FA\u03FC\x05Z.\x02\u03FB\u03FA\x03" +
		"\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02\u03FC\u03FD\x03\x02\x02\x02\u03FD" +
		"\u03FF\x07\x98\x02\x02\u03FE\u03F7\x03\x02\x02\x02\u03FE\u03FB\x03\x02" +
		"\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400\u0402\x05\x10\t\x02\u0401\u03F1" +
		"\x03\x02\x02\x02\u0401\u03F3\x03\x02\x02\x02\u0402Q\x03\x02\x02\x02\u0403" +
		"\u0404\x05\x10\t\x02\u0404\u0405\x07\x8A\x02\x02\u0405\u0415\x03\x02\x02" +
		"\x02\u0406\u0407\x05\x10\t\x02\u0407\u0409\x07\x90\x02\x02\u0408\u040A" +
		"\x05X-\x02\u0409\u0408\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A" +
		"\u0412\x03\x02\x02\x02\u040B\u040C\x05\x10\t\x02\u040C\u040D\x07\x92\x02" +
		"\x02\u040D\u0413\x03\x02\x02\x02\u040E\u0410\x05Z.\x02\u040F\u040E\x03" +
		"\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\u0411\x03\x02\x02\x02\u0411" +
		"\u0413\x07\x94\x02\x02\u0412\u040B\x03\x02\x02\x02\u0412\u040F\x03\x02" +
		"\x02\x02\u0413\u0415\x03\x02\x02\x02\u0414\u0403\x03\x02\x02\x02\u0414" +
		"\u0406\x03\x02\x02\x02\u0415S\x03\x02\x02\x02\u0416\u0417\x05\x10\t\x02" +
		"\u0417\u0418\x07\x8C\x02\x02\u0418\u0419\x05\x10\t\x02\u0419\u042B\x03" +
		"\x02\x02\x02\u041A\u041B\x05\x10\t\x02\u041B\u041D\x07\x90\x02\x02\u041C" +
		"\u041E\x05X-\x02\u041D\u041C\x03\x02\x02\x02\u041D\u041E\x03\x02\x02\x02" +
		"\u041E\u0426\x03\x02\x02\x02\u041F\u0420\x05\x10\t\x02\u0420\u0421\x07" +
		"\x96\x02\x02\u0421\u0427\x03\x02\x02\x02\u0422\u0424\x05Z.\x02\u0423\u0422" +
		"\x03\x02\x02\x02\u0423\u0424\x03\x02\x02\x02\u0424\u0425\x03\x02\x02\x02" +
		"\u0425\u0427\x07\x98\x02\x02\u0426\u041F\x03\x02\x02\x02\u0426\u0423\x03" +
		"\x02\x02\x02\u0427\u0428\x03\x02\x02\x02\u0428\u0429\x05\x10\t\x02\u0429" +
		"\u042B\x03\x02\x02\x02\u042A\u0416\x03\x02\x02\x02\u042A\u041A\x03\x02" +
		"\x02\x02\u042BU\x03\x02\x02\x02\u042C\u042E\x07\x8E\x02\x02\u042D\u042F" +
		"\x05X-\x02\u042E\u042D\x03\x02\x02\x02\u042E\u042F\x03\x02\x02\x02\u042F" +
		"\u0437\x03\x02\x02\x02\u0430\u0431\x05\x10\t\x02\u0431\u0432\x07\x92\x02" +
		"\x02\u0432\u0438\x03\x02\x02\x02\u0433\u0435\x05Z.\x02\u0434\u0433\x03" +
		"\x02\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435\u0436\x03\x02\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u0436\u0438\x07\x94\x02\x02\u0437\u0430\x03\x02\x02\x02\u0437\u0434\x03" +
		"\x02\x02\x02\u0438W\x03\x02\x02\x02\u0439\u043A\x05\x10\t\x02\u043A\u043B" +
		"\x07\x99\x02\x02\u043B\u0441\x03\x02\x02\x02\u043C\u043E\x05Z.\x02\u043D" +
		"\u043C\x03\x02\x02\x02\u043D\u043E\x03\x02\x02\x02\u043E\u043F\x03\x02" +
		"\x02\x02\u043F\u0441\x07\x9A\x02\x02\u0440\u0439\x03\x02\x02\x02\u0440" +
		"\u043D\x03\x02\x02\x02\u0441\u0442\x03\x02\x02\x02\u0442\u0440\x03\x02" +
		"\x02\x02\u0442\u0443\x03\x02\x02\x02\u0443Y\x03\x02\x02\x02\u0444\u0449" +
		"\x05\x10\t\x02\u0445\u0446\x07)\x02\x02\u0446\u0448\x05\x10\t\x02\u0447" +
		"\u0445\x03\x02\x02\x02\u0448\u044B\x03\x02\x02\x02\u0449\u0447\x03\x02" +
		"\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A[\x03\x02\x02\x02\u044B\u0449" +
		"\x03\x02\x02\x02\x8D_akq{~\x85\x90\x9B\xA7\xAE\xC8\xDE\xE7\xEF\xF6\u0113" +
		"\u0127\u0129\u014C\u0163\u0169\u016C\u0171\u0177\u017A\u0181\u0188\u018F" +
		"\u01A6\u01A9\u01B2\u01BF\u01E0\u01E6\u01E9\u01F6\u0200\u0207\u020D\u0210" +
		"\u0220\u022B\u022D\u0231\u0234\u0237\u023B\u023F\u0241\u0244\u024B\u0252" +
		"\u0259\u0261\u0269\u0272\u027C\u0282\u0294\u029B\u02A1\u02AC\u02AE\u02B5" +
		"\u02BD\u02BF\u02C6\u02C9\u02D5\u02D7\u02DE\u02E6\u02E8\u02EF\u02F1\u02FF" +
		"\u0301\u0308\u0311\u0313\u031A\u031D\u0324\u0326\u032D\u0334\u0336\u033D" +
		"\u033F\u0345\u034E\u0354\u035E\u0363\u036E\u0374\u037B\u0385\u038B\u0391" +
		"\u0394\u0397\u039F\u03A5\u03A8\u03AA\u03B2\u03B9\u03BF\u03C5\u03C8\u03CF" +
		"\u03D5\u03D8\u03DC\u03E0\u03E6\u03E9\u03EF\u03F5\u03FB\u03FE\u0401\u0409" +
		"\u040F\u0412\u0414\u041D\u0423\u0426\u042A\u042E\u0434\u0437\u043D\u0440" +
		"\u0442\u0449";
	public static readonly _serializedATN: string = Utils.join(
		[
			ZParser._serializedATNSegment0,
			ZParser._serializedATNSegment1,
			ZParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ZParser.__ATN) {
			ZParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ZParser._serializedATN));
		}

		return ZParser.__ATN;
	}

}

export class SpecificationContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ZParser.EOF, 0); }
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.TEXT);
		} else {
			return this.getToken(ZParser.TEXT, i);
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
	public get ruleIndex(): number { return ZParser.RULE_specification; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSpecification) {
			listener.enterSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSpecification) {
			listener.exitSpecification(this);
		}
	}
}


export class SectionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_section; }
	public copyFrom(ctx: SectionContext): void {
		super.copyFrom(ctx);
	}
}
export class InheritingSectionContext extends SectionContext {
	public ZED(): TerminalNode { return this.getToken(ZParser.ZED, 0); }
	public SECTION(): TerminalNode { return this.getToken(ZParser.SECTION, 0); }
	public NAME(): TerminalNode { return this.getToken(ZParser.NAME, 0); }
	public PARENTS(): TerminalNode { return this.getToken(ZParser.PARENTS, 0); }
	public END(): TerminalNode { return this.getToken(ZParser.END, 0); }
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
	public enterRule(listener: ZParserListener): void {
		if (listener.enterInheritingSection) {
			listener.enterInheritingSection(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitInheritingSection) {
			listener.exitInheritingSection(this);
		}
	}
}
export class BaseSectionContext extends SectionContext {
	public ZED(): TerminalNode { return this.getToken(ZParser.ZED, 0); }
	public SECTION(): TerminalNode { return this.getToken(ZParser.SECTION, 0); }
	public NAME(): TerminalNode { return this.getToken(ZParser.NAME, 0); }
	public END(): TerminalNode { return this.getToken(ZParser.END, 0); }
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
	public enterRule(listener: ZParserListener): void {
		if (listener.enterBaseSection) {
			listener.enterBaseSection(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitBaseSection) {
			listener.exitBaseSection(this);
		}
	}
}


export class ParagraphContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_paragraph; }
	public copyFrom(ctx: ParagraphContext): void {
		super.copyFrom(ctx);
	}
}
export class GivenTypesParagraphContext extends ParagraphContext {
	public ZED(): TerminalNode { return this.getToken(ZParser.ZED, 0); }
	public LEFT_SQUARE_BRACKET(): TerminalNode { return this.getToken(ZParser.LEFT_SQUARE_BRACKET, 0); }
	public formals(): FormalsContext {
		return this.getRuleContext(0, FormalsContext);
	}
	public RIGHT_SQUARE_BRACKET(): TerminalNode { return this.getToken(ZParser.RIGHT_SQUARE_BRACKET, 0); }
	public END(): TerminalNode { return this.getToken(ZParser.END, 0); }
	public NL(): TerminalNode | undefined { return this.tryGetToken(ZParser.NL, 0); }
	constructor(ctx: ParagraphContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterGivenTypesParagraph) {
			listener.enterGivenTypesParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitGivenTypesParagraph) {
			listener.exitGivenTypesParagraph(this);
		}
	}
}
export class AxiomaticDescriptionParagraphContext extends ParagraphContext {
	public AX(): TerminalNode { return this.getToken(ZParser.AX, 0); }
	public schemaText(): SchemaTextContext {
		return this.getRuleContext(0, SchemaTextContext);
	}
	public END(): TerminalNode { return this.getToken(ZParser.END, 0); }
	constructor(ctx: ParagraphContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterAxiomaticDescriptionParagraph) {
			listener.enterAxiomaticDescriptionParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitAxiomaticDescriptionParagraph) {
			listener.exitAxiomaticDescriptionParagraph(this);
		}
	}
}
export class SchemaDefinitionParagraphContext extends ParagraphContext {
	public SCH(): TerminalNode { return this.getToken(ZParser.SCH, 0); }
	public NAME(): TerminalNode { return this.getToken(ZParser.NAME, 0); }
	public schemaText(): SchemaTextContext {
		return this.getRuleContext(0, SchemaTextContext);
	}
	public END(): TerminalNode { return this.getToken(ZParser.END, 0); }
	public NL(): TerminalNode | undefined { return this.tryGetToken(ZParser.NL, 0); }
	constructor(ctx: ParagraphContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaDefinitionParagraph) {
			listener.enterSchemaDefinitionParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaDefinitionParagraph) {
			listener.exitSchemaDefinitionParagraph(this);
		}
	}
}
export class GenericAxiomaticDescriptionParagraphContext extends ParagraphContext {
	public AX(): TerminalNode { return this.getToken(ZParser.AX, 0); }
	public GEN(): TerminalNode { return this.getToken(ZParser.GEN, 0); }
	public LEFT_SQUARE_BRACKET(): TerminalNode { return this.getToken(ZParser.LEFT_SQUARE_BRACKET, 0); }
	public formals(): FormalsContext {
		return this.getRuleContext(0, FormalsContext);
	}
	public RIGHT_SQUARE_BRACKET(): TerminalNode { return this.getToken(ZParser.RIGHT_SQUARE_BRACKET, 0); }
	public schemaText(): SchemaTextContext {
		return this.getRuleContext(0, SchemaTextContext);
	}
	public END(): TerminalNode { return this.getToken(ZParser.END, 0); }
	public NL(): TerminalNode | undefined { return this.tryGetToken(ZParser.NL, 0); }
	constructor(ctx: ParagraphContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterGenericAxiomaticDescriptionParagraph) {
			listener.enterGenericAxiomaticDescriptionParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitGenericAxiomaticDescriptionParagraph) {
			listener.exitGenericAxiomaticDescriptionParagraph(this);
		}
	}
}
export class GenericSchemaDefinitionParagraphContext extends ParagraphContext {
	public SCH(): TerminalNode { return this.getToken(ZParser.SCH, 0); }
	public GEN(): TerminalNode { return this.getToken(ZParser.GEN, 0); }
	public NAME(): TerminalNode { return this.getToken(ZParser.NAME, 0); }
	public LEFT_SQUARE_BRACKET(): TerminalNode { return this.getToken(ZParser.LEFT_SQUARE_BRACKET, 0); }
	public formals(): FormalsContext {
		return this.getRuleContext(0, FormalsContext);
	}
	public RIGHT_SQUARE_BRACKET(): TerminalNode { return this.getToken(ZParser.RIGHT_SQUARE_BRACKET, 0); }
	public schemaText(): SchemaTextContext {
		return this.getRuleContext(0, SchemaTextContext);
	}
	public END(): TerminalNode { return this.getToken(ZParser.END, 0); }
	public NL(): TerminalNode | undefined { return this.tryGetToken(ZParser.NL, 0); }
	constructor(ctx: ParagraphContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterGenericSchemaDefinitionParagraph) {
			listener.enterGenericSchemaDefinitionParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitGenericSchemaDefinitionParagraph) {
			listener.exitGenericSchemaDefinitionParagraph(this);
		}
	}
}
export class HorizontalDefinitionParagraphContext extends ParagraphContext {
	public ZED(): TerminalNode { return this.getToken(ZParser.ZED, 0); }
	public declNameExpression(): DeclNameExpressionContext {
		return this.getRuleContext(0, DeclNameExpressionContext);
	}
	public END(): TerminalNode { return this.getToken(ZParser.END, 0); }
	public NL(): TerminalNode | undefined { return this.tryGetToken(ZParser.NL, 0); }
	constructor(ctx: ParagraphContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterHorizontalDefinitionParagraph) {
			listener.enterHorizontalDefinitionParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitHorizontalDefinitionParagraph) {
			listener.exitHorizontalDefinitionParagraph(this);
		}
	}
}
export class GenericHorizontalDefinitionParagraphContext extends ParagraphContext {
	public ZED(): TerminalNode { return this.getToken(ZParser.ZED, 0); }
	public declName(): DeclNameContext {
		return this.getRuleContext(0, DeclNameContext);
	}
	public LEFT_SQUARE_BRACKET(): TerminalNode { return this.getToken(ZParser.LEFT_SQUARE_BRACKET, 0); }
	public formals(): FormalsContext {
		return this.getRuleContext(0, FormalsContext);
	}
	public RIGHT_SQUARE_BRACKET(): TerminalNode { return this.getToken(ZParser.RIGHT_SQUARE_BRACKET, 0); }
	public DEFINE_EQUAL(): TerminalNode { return this.getToken(ZParser.DEFINE_EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public END(): TerminalNode { return this.getToken(ZParser.END, 0); }
	constructor(ctx: ParagraphContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterGenericHorizontalDefinitionParagraph) {
			listener.enterGenericHorizontalDefinitionParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitGenericHorizontalDefinitionParagraph) {
			listener.exitGenericHorizontalDefinitionParagraph(this);
		}
	}
}
export class GenericOperatorDefinitionParagraphContext extends ParagraphContext {
	public ZED(): TerminalNode { return this.getToken(ZParser.ZED, 0); }
	public genName(): GenNameContext {
		return this.getRuleContext(0, GenNameContext);
	}
	public DEFINE_EQUAL(): TerminalNode { return this.getToken(ZParser.DEFINE_EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public END(): TerminalNode { return this.getToken(ZParser.END, 0); }
	constructor(ctx: ParagraphContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterGenericOperatorDefinitionParagraph) {
			listener.enterGenericOperatorDefinitionParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitGenericOperatorDefinitionParagraph) {
			listener.exitGenericOperatorDefinitionParagraph(this);
		}
	}
}
export class FreeTypesParagraphContext extends ParagraphContext {
	public ZED(): TerminalNode { return this.getToken(ZParser.ZED, 0); }
	public freetype(): FreetypeContext[];
	public freetype(i: number): FreetypeContext;
	public freetype(i?: number): FreetypeContext | FreetypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FreetypeContext);
		} else {
			return this.getRuleContext(i, FreetypeContext);
		}
	}
	public END(): TerminalNode { return this.getToken(ZParser.END, 0); }
	public AMPERSAND(): TerminalNode[];
	public AMPERSAND(i: number): TerminalNode;
	public AMPERSAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.AMPERSAND);
		} else {
			return this.getToken(ZParser.AMPERSAND, i);
		}
	}
	constructor(ctx: ParagraphContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterFreeTypesParagraph) {
			listener.enterFreeTypesParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitFreeTypesParagraph) {
			listener.exitFreeTypesParagraph(this);
		}
	}
}
export class ConjectureParagraphContext extends ParagraphContext {
	public ZED(): TerminalNode { return this.getToken(ZParser.ZED, 0); }
	public CONJECTURE(): TerminalNode { return this.getToken(ZParser.CONJECTURE, 0); }
	public predicate(): PredicateContext {
		return this.getRuleContext(0, PredicateContext);
	}
	public END(): TerminalNode { return this.getToken(ZParser.END, 0); }
	constructor(ctx: ParagraphContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterConjectureParagraph) {
			listener.enterConjectureParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitConjectureParagraph) {
			listener.exitConjectureParagraph(this);
		}
	}
}
export class GenericConjectureParagraphContext extends ParagraphContext {
	public ZED(): TerminalNode { return this.getToken(ZParser.ZED, 0); }
	public LEFT_SQUARE_BRACKET(): TerminalNode { return this.getToken(ZParser.LEFT_SQUARE_BRACKET, 0); }
	public formals(): FormalsContext {
		return this.getRuleContext(0, FormalsContext);
	}
	public RIGHT_SQUARE_BRACKET(): TerminalNode { return this.getToken(ZParser.RIGHT_SQUARE_BRACKET, 0); }
	public CONJECTURE(): TerminalNode { return this.getToken(ZParser.CONJECTURE, 0); }
	public predicate(): PredicateContext {
		return this.getRuleContext(0, PredicateContext);
	}
	public END(): TerminalNode { return this.getToken(ZParser.END, 0); }
	constructor(ctx: ParagraphContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterGenericConjectureParagraph) {
			listener.enterGenericConjectureParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitGenericConjectureParagraph) {
			listener.exitGenericConjectureParagraph(this);
		}
	}
}
export class OperatorTemplateParagraphContext extends ParagraphContext {
	public ZED(): TerminalNode { return this.getToken(ZParser.ZED, 0); }
	public operatorTemplate(): OperatorTemplateContext {
		return this.getRuleContext(0, OperatorTemplateContext);
	}
	public END(): TerminalNode { return this.getToken(ZParser.END, 0); }
	constructor(ctx: ParagraphContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterOperatorTemplateParagraph) {
			listener.enterOperatorTemplateParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitOperatorTemplateParagraph) {
			listener.exitOperatorTemplateParagraph(this);
		}
	}
}


export class FreetypeContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(ZParser.NAME, 0); }
	public FREE_EQUALS(): TerminalNode { return this.getToken(ZParser.FREE_EQUALS, 0); }
	public branch(): BranchContext[];
	public branch(i: number): BranchContext;
	public branch(i?: number): BranchContext | BranchContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BranchContext);
		} else {
			return this.getRuleContext(i, BranchContext);
		}
	}
	public VERTICAL_LINE(): TerminalNode[];
	public VERTICAL_LINE(i: number): TerminalNode;
	public VERTICAL_LINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.VERTICAL_LINE);
		} else {
			return this.getToken(ZParser.VERTICAL_LINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_freetype; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterFreetype) {
			listener.enterFreetype(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitFreetype) {
			listener.exitFreetype(this);
		}
	}
}


export class BranchContext extends ParserRuleContext {
	public declName(): DeclNameContext {
		return this.getRuleContext(0, DeclNameContext);
	}
	public LEFT_DOUBLE_ANGLE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(ZParser.LEFT_DOUBLE_ANGLE_BRACKET, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RIGHT_DOUBLE_ANGLE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(ZParser.RIGHT_DOUBLE_ANGLE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_branch; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterBranch) {
			listener.enterBranch(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitBranch) {
			listener.exitBranch(this);
		}
	}
}


export class FormalsContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.NAME);
		} else {
			return this.getToken(ZParser.NAME, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.COMMA);
		} else {
			return this.getToken(ZParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_formals; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterFormals) {
			listener.enterFormals(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitFormals) {
			listener.exitFormals(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_predicate; }
	public copyFrom(ctx: PredicateContext): void {
		super.copyFrom(ctx);
	}
}
export class NewlineConjunctionPredicateContext extends PredicateContext {
	public predicate(): PredicateContext[];
	public predicate(i: number): PredicateContext;
	public predicate(i?: number): PredicateContext | PredicateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PredicateContext);
		} else {
			return this.getRuleContext(i, PredicateContext);
		}
	}
	public NL(): TerminalNode { return this.getToken(ZParser.NL, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterNewlineConjunctionPredicate) {
			listener.enterNewlineConjunctionPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitNewlineConjunctionPredicate) {
			listener.exitNewlineConjunctionPredicate(this);
		}
	}
}
export class SemicolonConjunctionPredicateContext extends PredicateContext {
	public predicate(): PredicateContext[];
	public predicate(i: number): PredicateContext;
	public predicate(i?: number): PredicateContext | PredicateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PredicateContext);
		} else {
			return this.getRuleContext(i, PredicateContext);
		}
	}
	public SEMICOLON(): TerminalNode { return this.getToken(ZParser.SEMICOLON, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSemicolonConjunctionPredicate) {
			listener.enterSemicolonConjunctionPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSemicolonConjunctionPredicate) {
			listener.exitSemicolonConjunctionPredicate(this);
		}
	}
}
export class UniversalQuantificationPredicateContext extends PredicateContext {
	public FOR_ALL(): TerminalNode { return this.getToken(ZParser.FOR_ALL, 0); }
	public schemaText(): SchemaTextContext {
		return this.getRuleContext(0, SchemaTextContext);
	}
	public SPOT(): TerminalNode { return this.getToken(ZParser.SPOT, 0); }
	public predicate(): PredicateContext {
		return this.getRuleContext(0, PredicateContext);
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterUniversalQuantificationPredicate) {
			listener.enterUniversalQuantificationPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitUniversalQuantificationPredicate) {
			listener.exitUniversalQuantificationPredicate(this);
		}
	}
}
export class ExistentialQuantificationPredicateContext extends PredicateContext {
	public THERE_EXISTS(): TerminalNode { return this.getToken(ZParser.THERE_EXISTS, 0); }
	public schemaText(): SchemaTextContext {
		return this.getRuleContext(0, SchemaTextContext);
	}
	public SPOT(): TerminalNode { return this.getToken(ZParser.SPOT, 0); }
	public predicate(): PredicateContext {
		return this.getRuleContext(0, PredicateContext);
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterExistentialQuantificationPredicate) {
			listener.enterExistentialQuantificationPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitExistentialQuantificationPredicate) {
			listener.exitExistentialQuantificationPredicate(this);
		}
	}
}
export class UniqueExistentialQuantificationPredicateContext extends PredicateContext {
	public UNIQUE_EXISTS(): TerminalNode { return this.getToken(ZParser.UNIQUE_EXISTS, 0); }
	public schemaText(): SchemaTextContext {
		return this.getRuleContext(0, SchemaTextContext);
	}
	public SPOT(): TerminalNode { return this.getToken(ZParser.SPOT, 0); }
	public predicate(): PredicateContext {
		return this.getRuleContext(0, PredicateContext);
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterUniqueExistentialQuantificationPredicate) {
			listener.enterUniqueExistentialQuantificationPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitUniqueExistentialQuantificationPredicate) {
			listener.exitUniqueExistentialQuantificationPredicate(this);
		}
	}
}
export class EquivalencePredicateContext extends PredicateContext {
	public predicate(): PredicateContext[];
	public predicate(i: number): PredicateContext;
	public predicate(i?: number): PredicateContext | PredicateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PredicateContext);
		} else {
			return this.getRuleContext(i, PredicateContext);
		}
	}
	public LEFT_RIGHT_DOUBLE_ARROW(): TerminalNode { return this.getToken(ZParser.LEFT_RIGHT_DOUBLE_ARROW, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterEquivalencePredicate) {
			listener.enterEquivalencePredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitEquivalencePredicate) {
			listener.exitEquivalencePredicate(this);
		}
	}
}
export class ImplicationPredicateContext extends PredicateContext {
	public predicate(): PredicateContext[];
	public predicate(i: number): PredicateContext;
	public predicate(i?: number): PredicateContext | PredicateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PredicateContext);
		} else {
			return this.getRuleContext(i, PredicateContext);
		}
	}
	public RIGHTWARDS_DOUBLE_ARROW(): TerminalNode { return this.getToken(ZParser.RIGHTWARDS_DOUBLE_ARROW, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterImplicationPredicate) {
			listener.enterImplicationPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitImplicationPredicate) {
			listener.exitImplicationPredicate(this);
		}
	}
}
export class DisjunctionPredicateContext extends PredicateContext {
	public predicate(): PredicateContext[];
	public predicate(i: number): PredicateContext;
	public predicate(i?: number): PredicateContext | PredicateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PredicateContext);
		} else {
			return this.getRuleContext(i, PredicateContext);
		}
	}
	public LOGICAL_OR(): TerminalNode { return this.getToken(ZParser.LOGICAL_OR, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterDisjunctionPredicate) {
			listener.enterDisjunctionPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitDisjunctionPredicate) {
			listener.exitDisjunctionPredicate(this);
		}
	}
}
export class ConjunctionPredicateContext extends PredicateContext {
	public predicate(): PredicateContext[];
	public predicate(i: number): PredicateContext;
	public predicate(i?: number): PredicateContext | PredicateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PredicateContext);
		} else {
			return this.getRuleContext(i, PredicateContext);
		}
	}
	public LOGICAL_AND(): TerminalNode { return this.getToken(ZParser.LOGICAL_AND, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterConjunctionPredicate) {
			listener.enterConjunctionPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitConjunctionPredicate) {
			listener.exitConjunctionPredicate(this);
		}
	}
}
export class NegationPredicateContext extends PredicateContext {
	public NOT_SIGN(): TerminalNode { return this.getToken(ZParser.NOT_SIGN, 0); }
	public predicate(): PredicateContext {
		return this.getRuleContext(0, PredicateContext);
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterNegationPredicate) {
			listener.enterNegationPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitNegationPredicate) {
			listener.exitNegationPredicate(this);
		}
	}
}
export class RelationOperatorApplicationPredicateContext extends PredicateContext {
	public relation(): RelationContext {
		return this.getRuleContext(0, RelationContext);
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterRelationOperatorApplicationPredicate) {
			listener.enterRelationOperatorApplicationPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitRelationOperatorApplicationPredicate) {
			listener.exitRelationOperatorApplicationPredicate(this);
		}
	}
}
export class SchemaPredicatePredicateContext extends PredicateContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaPredicatePredicate) {
			listener.enterSchemaPredicatePredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaPredicatePredicate) {
			listener.exitSchemaPredicatePredicate(this);
		}
	}
}
export class TruthPredicateContext extends PredicateContext {
	public TRUE(): TerminalNode { return this.getToken(ZParser.TRUE, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterTruthPredicate) {
			listener.enterTruthPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitTruthPredicate) {
			listener.exitTruthPredicate(this);
		}
	}
}
export class FalsityPredicateContext extends PredicateContext {
	public FALSE(): TerminalNode { return this.getToken(ZParser.FALSE, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterFalsityPredicate) {
			listener.enterFalsityPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitFalsityPredicate) {
			listener.exitFalsityPredicate(this);
		}
	}
}
export class ParenthesizedPredicateContext extends PredicateContext {
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.LEFT_PARENTHESIS, 0); }
	public predicate(): PredicateContext {
		return this.getRuleContext(0, PredicateContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterParenthesizedPredicate) {
			listener.enterParenthesizedPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitParenthesizedPredicate) {
			listener.exitParenthesizedPredicate(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class SchemaUniversalQuantificationExpressionContext extends ExpressionContext {
	public FOR_ALL(): TerminalNode { return this.getToken(ZParser.FOR_ALL, 0); }
	public schemaText(): SchemaTextContext {
		return this.getRuleContext(0, SchemaTextContext);
	}
	public SPOT(): TerminalNode { return this.getToken(ZParser.SPOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaUniversalQuantificationExpression) {
			listener.enterSchemaUniversalQuantificationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaUniversalQuantificationExpression) {
			listener.exitSchemaUniversalQuantificationExpression(this);
		}
	}
}
export class SchemaExistentialQuantificationExpressionContext extends ExpressionContext {
	public THERE_EXISTS(): TerminalNode { return this.getToken(ZParser.THERE_EXISTS, 0); }
	public schemaText(): SchemaTextContext {
		return this.getRuleContext(0, SchemaTextContext);
	}
	public SPOT(): TerminalNode { return this.getToken(ZParser.SPOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaExistentialQuantificationExpression) {
			listener.enterSchemaExistentialQuantificationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaExistentialQuantificationExpression) {
			listener.exitSchemaExistentialQuantificationExpression(this);
		}
	}
}
export class SchemaUniqueExistentialQuantificationExpressionContext extends ExpressionContext {
	public UNIQUE_EXISTS(): TerminalNode { return this.getToken(ZParser.UNIQUE_EXISTS, 0); }
	public schemaText(): SchemaTextContext {
		return this.getRuleContext(0, SchemaTextContext);
	}
	public SPOT(): TerminalNode { return this.getToken(ZParser.SPOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaUniqueExistentialQuantificationExpression) {
			listener.enterSchemaUniqueExistentialQuantificationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaUniqueExistentialQuantificationExpression) {
			listener.exitSchemaUniqueExistentialQuantificationExpression(this);
		}
	}
}
export class FunctionConstructionExpressionContext extends ExpressionContext {
	public GREEK_SMALL_LETTER_LAMBDA(): TerminalNode { return this.getToken(ZParser.GREEK_SMALL_LETTER_LAMBDA, 0); }
	public schemaText(): SchemaTextContext {
		return this.getRuleContext(0, SchemaTextContext);
	}
	public SPOT(): TerminalNode { return this.getToken(ZParser.SPOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterFunctionConstructionExpression) {
			listener.enterFunctionConstructionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitFunctionConstructionExpression) {
			listener.exitFunctionConstructionExpression(this);
		}
	}
}
export class DefiniteDescriptionExpressionContext extends ExpressionContext {
	public GREEK_SMALL_LETTER_MU(): TerminalNode { return this.getToken(ZParser.GREEK_SMALL_LETTER_MU, 0); }
	public schemaText(): SchemaTextContext {
		return this.getRuleContext(0, SchemaTextContext);
	}
	public SPOT(): TerminalNode { return this.getToken(ZParser.SPOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterDefiniteDescriptionExpression) {
			listener.enterDefiniteDescriptionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitDefiniteDescriptionExpression) {
			listener.exitDefiniteDescriptionExpression(this);
		}
	}
}
export class SubstitutionExpressionExpressionContext extends ExpressionContext {
	public LET(): TerminalNode { return this.getToken(ZParser.LET, 0); }
	public declNameExpression(): DeclNameExpressionContext[];
	public declNameExpression(i: number): DeclNameExpressionContext;
	public declNameExpression(i?: number): DeclNameExpressionContext | DeclNameExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclNameExpressionContext);
		} else {
			return this.getRuleContext(i, DeclNameExpressionContext);
		}
	}
	public SPOT(): TerminalNode { return this.getToken(ZParser.SPOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.SEMICOLON);
		} else {
			return this.getToken(ZParser.SEMICOLON, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSubstitutionExpressionExpression) {
			listener.enterSubstitutionExpressionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSubstitutionExpressionExpression) {
			listener.exitSubstitutionExpressionExpression(this);
		}
	}
}
export class SchemaEquivalenceExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LEFT_RIGHT_DOUBLE_ARROW(): TerminalNode { return this.getToken(ZParser.LEFT_RIGHT_DOUBLE_ARROW, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaEquivalenceExpression) {
			listener.enterSchemaEquivalenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaEquivalenceExpression) {
			listener.exitSchemaEquivalenceExpression(this);
		}
	}
}
export class SchemaImplicationExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RIGHTWARDS_DOUBLE_ARROW(): TerminalNode { return this.getToken(ZParser.RIGHTWARDS_DOUBLE_ARROW, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaImplicationExpression) {
			listener.enterSchemaImplicationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaImplicationExpression) {
			listener.exitSchemaImplicationExpression(this);
		}
	}
}
export class SchemaDisjunctionExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LOGICAL_OR(): TerminalNode { return this.getToken(ZParser.LOGICAL_OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaDisjunctionExpression) {
			listener.enterSchemaDisjunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaDisjunctionExpression) {
			listener.exitSchemaDisjunctionExpression(this);
		}
	}
}
export class SchemaConjunctionExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LOGICAL_AND(): TerminalNode { return this.getToken(ZParser.LOGICAL_AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaConjunctionExpression) {
			listener.enterSchemaConjunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaConjunctionExpression) {
			listener.exitSchemaConjunctionExpression(this);
		}
	}
}
export class SchemaNegationExpressionContext extends ExpressionContext {
	public NOT_SIGN(): TerminalNode { return this.getToken(ZParser.NOT_SIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaNegationExpression) {
			listener.enterSchemaNegationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaNegationExpression) {
			listener.exitSchemaNegationExpression(this);
		}
	}
}
export class ConditionalExpressionContext extends ExpressionContext {
	public IF(): TerminalNode { return this.getToken(ZParser.IF, 0); }
	public predicate(): PredicateContext {
		return this.getRuleContext(0, PredicateContext);
	}
	public THEN(): TerminalNode { return this.getToken(ZParser.THEN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ELSE(): TerminalNode { return this.getToken(ZParser.ELSE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
}
export class SchemaCompositionExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SCHEMA_COMPOSITION(): TerminalNode { return this.getToken(ZParser.SCHEMA_COMPOSITION, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaCompositionExpression) {
			listener.enterSchemaCompositionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaCompositionExpression) {
			listener.exitSchemaCompositionExpression(this);
		}
	}
}
export class SchemaPipingExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SCHEMA_PIPING(): TerminalNode { return this.getToken(ZParser.SCHEMA_PIPING, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaPipingExpression) {
			listener.enterSchemaPipingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaPipingExpression) {
			listener.exitSchemaPipingExpression(this);
		}
	}
}
export class SchemaHidingExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public REVERSE_SOLIDUS(): TerminalNode { return this.getToken(ZParser.REVERSE_SOLIDUS, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.LEFT_PARENTHESIS, 0); }
	public declName(): DeclNameContext[];
	public declName(i: number): DeclNameContext;
	public declName(i?: number): DeclNameContext | DeclNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclNameContext);
		} else {
			return this.getRuleContext(i, DeclNameContext);
		}
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.RIGHT_PARENTHESIS, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.COMMA);
		} else {
			return this.getToken(ZParser.COMMA, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaHidingExpression) {
			listener.enterSchemaHidingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaHidingExpression) {
			listener.exitSchemaHidingExpression(this);
		}
	}
}
export class SchemaProjectionExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SCHEMA_PROJECTION(): TerminalNode { return this.getToken(ZParser.SCHEMA_PROJECTION, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaProjectionExpression) {
			listener.enterSchemaProjectionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaProjectionExpression) {
			listener.exitSchemaProjectionExpression(this);
		}
	}
}
export class SchemaPreconditionExpressionContext extends ExpressionContext {
	public PRE_KEY(): TerminalNode { return this.getToken(ZParser.PRE_KEY, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaPreconditionExpression) {
			listener.enterSchemaPreconditionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaPreconditionExpression) {
			listener.exitSchemaPreconditionExpression(this);
		}
	}
}
export class CartesianProductExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MULTIPLICATION_SIGN(): TerminalNode[];
	public MULTIPLICATION_SIGN(i: number): TerminalNode;
	public MULTIPLICATION_SIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.MULTIPLICATION_SIGN);
		} else {
			return this.getToken(ZParser.MULTIPLICATION_SIGN, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterCartesianProductExpression) {
			listener.enterCartesianProductExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitCartesianProductExpression) {
			listener.exitCartesianProductExpression(this);
		}
	}
}
export class PowersetExpressionContext extends ExpressionContext {
	public POWERSET(): TerminalNode { return this.getToken(ZParser.POWERSET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterPowersetExpression) {
			listener.enterPowersetExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitPowersetExpression) {
			listener.exitPowersetExpression(this);
		}
	}
}
export class PrefixApplicationExpressionContext extends ExpressionContext {
	public PRE(): TerminalNode { return this.getToken(ZParser.PRE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterPrefixApplicationExpression) {
			listener.enterPrefixApplicationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitPrefixApplicationExpression) {
			listener.exitPrefixApplicationExpression(this);
		}
	}
}
export class GenericPrefixApplicationExpressionContext extends ExpressionContext {
	public L(): TerminalNode { return this.getToken(ZParser.L, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ERE(): TerminalNode | undefined { return this.tryGetToken(ZParser.ERE, 0); }
	public SRE(): TerminalNode | undefined { return this.tryGetToken(ZParser.SRE, 0); }
	public expSep(): ExpSepContext | undefined {
		return this.tryGetRuleContext(0, ExpSepContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterGenericPrefixApplicationExpression) {
			listener.enterGenericPrefixApplicationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitGenericPrefixApplicationExpression) {
			listener.exitGenericPrefixApplicationExpression(this);
		}
	}
}
export class PostfixApplicationExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public POST(): TerminalNode { return this.getToken(ZParser.POST, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterPostfixApplicationExpression) {
			listener.enterPostfixApplicationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitPostfixApplicationExpression) {
			listener.exitPostfixApplicationExpression(this);
		}
	}
}
export class GenericPostfixApplicationExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EL(): TerminalNode { return this.getToken(ZParser.EL, 0); }
	public ER(): TerminalNode | undefined { return this.tryGetToken(ZParser.ER, 0); }
	public SR(): TerminalNode | undefined { return this.tryGetToken(ZParser.SR, 0); }
	public expSep(): ExpSepContext | undefined {
		return this.tryGetRuleContext(0, ExpSepContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterGenericPostfixApplicationExpression) {
			listener.enterGenericPostfixApplicationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitGenericPostfixApplicationExpression) {
			listener.exitGenericPostfixApplicationExpression(this);
		}
	}
}
export class InfixLeftApplicationExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public I(): TerminalNode { return this.getToken(ZParser.I, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterInfixLeftApplicationExpression) {
			listener.enterInfixLeftApplicationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitInfixLeftApplicationExpression) {
			listener.exitInfixLeftApplicationExpression(this);
		}
	}
}
export class InfixRightApplicationExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public I(): TerminalNode { return this.getToken(ZParser.I, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterInfixRightApplicationExpression) {
			listener.enterInfixRightApplicationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitInfixRightApplicationExpression) {
			listener.exitInfixRightApplicationExpression(this);
		}
	}
}
export class GenericInfixApplicationExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EL(): TerminalNode { return this.getToken(ZParser.EL, 0); }
	public ERE(): TerminalNode | undefined { return this.tryGetToken(ZParser.ERE, 0); }
	public SRE(): TerminalNode | undefined { return this.tryGetToken(ZParser.SRE, 0); }
	public expSep(): ExpSepContext | undefined {
		return this.tryGetRuleContext(0, ExpSepContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterGenericInfixApplicationExpression) {
			listener.enterGenericInfixApplicationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitGenericInfixApplicationExpression) {
			listener.exitGenericInfixApplicationExpression(this);
		}
	}
}
export class NofixApplicationExpressionContext extends ExpressionContext {
	public L(): TerminalNode { return this.getToken(ZParser.L, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public ER(): TerminalNode | undefined { return this.tryGetToken(ZParser.ER, 0); }
	public SR(): TerminalNode | undefined { return this.tryGetToken(ZParser.SR, 0); }
	public expSep(): ExpSepContext | undefined {
		return this.tryGetRuleContext(0, ExpSepContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterNofixApplicationExpression) {
			listener.enterNofixApplicationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitNofixApplicationExpression) {
			listener.exitNofixApplicationExpression(this);
		}
	}
}
export class ApplicationExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterApplicationExpression) {
			listener.enterApplicationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitApplicationExpression) {
			listener.exitApplicationExpression(this);
		}
	}
}
export class SchemaDecorationExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public STROKE(): TerminalNode { return this.getToken(ZParser.STROKE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaDecorationExpression) {
			listener.enterSchemaDecorationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaDecorationExpression) {
			listener.exitSchemaDecorationExpression(this);
		}
	}
}
export class SchemaRenamingExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LEFT_SQUARE_BRACKET(): TerminalNode { return this.getToken(ZParser.LEFT_SQUARE_BRACKET, 0); }
	public declName(): DeclNameContext[];
	public declName(i: number): DeclNameContext;
	public declName(i?: number): DeclNameContext | DeclNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclNameContext);
		} else {
			return this.getRuleContext(i, DeclNameContext);
		}
	}
	public SOLIDUS(): TerminalNode[];
	public SOLIDUS(i: number): TerminalNode;
	public SOLIDUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.SOLIDUS);
		} else {
			return this.getToken(ZParser.SOLIDUS, i);
		}
	}
	public RIGHT_SQUARE_BRACKET(): TerminalNode { return this.getToken(ZParser.RIGHT_SQUARE_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.COMMA);
		} else {
			return this.getToken(ZParser.COMMA, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaRenamingExpression) {
			listener.enterSchemaRenamingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaRenamingExpression) {
			listener.exitSchemaRenamingExpression(this);
		}
	}
}
export class BindingSelectionExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public FULL_STOP(): TerminalNode { return this.getToken(ZParser.FULL_STOP, 0); }
	public refName(): RefNameContext {
		return this.getRuleContext(0, RefNameContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterBindingSelectionExpression) {
			listener.enterBindingSelectionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitBindingSelectionExpression) {
			listener.exitBindingSelectionExpression(this);
		}
	}
}
export class TupleSelectionExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public FULL_STOP(): TerminalNode { return this.getToken(ZParser.FULL_STOP, 0); }
	public NUMERAL(): TerminalNode { return this.getToken(ZParser.NUMERAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterTupleSelectionExpression) {
			listener.enterTupleSelectionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitTupleSelectionExpression) {
			listener.exitTupleSelectionExpression(this);
		}
	}
}
export class BindingConstructionExpressionContext extends ExpressionContext {
	public GREEK_SMALL_LETTER_THETA(): TerminalNode { return this.getToken(ZParser.GREEK_SMALL_LETTER_THETA, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public STROKE(): TerminalNode[];
	public STROKE(i: number): TerminalNode;
	public STROKE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.STROKE);
		} else {
			return this.getToken(ZParser.STROKE, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterBindingConstructionExpression) {
			listener.enterBindingConstructionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitBindingConstructionExpression) {
			listener.exitBindingConstructionExpression(this);
		}
	}
}
export class ReferenceExpressionContext extends ExpressionContext {
	public refName(): RefNameContext {
		return this.getRuleContext(0, RefNameContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterReferenceExpression) {
			listener.enterReferenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitReferenceExpression) {
			listener.exitReferenceExpression(this);
		}
	}
}
export class GenericInstantiationExpressionContext extends ExpressionContext {
	public refName(): RefNameContext {
		return this.getRuleContext(0, RefNameContext);
	}
	public LEFT_SQUARE_BRACKET(): TerminalNode { return this.getToken(ZParser.LEFT_SQUARE_BRACKET, 0); }
	public RIGHT_SQUARE_BRACKET(): TerminalNode { return this.getToken(ZParser.RIGHT_SQUARE_BRACKET, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterGenericInstantiationExpression) {
			listener.enterGenericInstantiationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitGenericInstantiationExpression) {
			listener.exitGenericInstantiationExpression(this);
		}
	}
}
export class NumberLiteralExpressionContext extends ExpressionContext {
	public NUMERAL(): TerminalNode { return this.getToken(ZParser.NUMERAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterNumberLiteralExpression) {
			listener.enterNumberLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitNumberLiteralExpression) {
			listener.exitNumberLiteralExpression(this);
		}
	}
}
export class SetExtensionExpressionContext extends ExpressionContext {
	public LEFT_CURLY_BRACKET(): TerminalNode { return this.getToken(ZParser.LEFT_CURLY_BRACKET, 0); }
	public RIGHT_CURLY_BRACKET(): TerminalNode { return this.getToken(ZParser.RIGHT_CURLY_BRACKET, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSetExtensionExpression) {
			listener.enterSetExtensionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSetExtensionExpression) {
			listener.exitSetExtensionExpression(this);
		}
	}
}
export class SetComprehensionExpressionContext extends ExpressionContext {
	public LEFT_CURLY_BRACKET(): TerminalNode { return this.getToken(ZParser.LEFT_CURLY_BRACKET, 0); }
	public schemaText(): SchemaTextContext {
		return this.getRuleContext(0, SchemaTextContext);
	}
	public SPOT(): TerminalNode { return this.getToken(ZParser.SPOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RIGHT_CURLY_BRACKET(): TerminalNode { return this.getToken(ZParser.RIGHT_CURLY_BRACKET, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSetComprehensionExpression) {
			listener.enterSetComprehensionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSetComprehensionExpression) {
			listener.exitSetComprehensionExpression(this);
		}
	}
}
export class CharacteristicSetComprehensionExpressionContext extends ExpressionContext {
	public LEFT_CURLY_BRACKET(): TerminalNode { return this.getToken(ZParser.LEFT_CURLY_BRACKET, 0); }
	public schemaText(): SchemaTextContext {
		return this.getRuleContext(0, SchemaTextContext);
	}
	public RIGHT_CURLY_BRACKET(): TerminalNode { return this.getToken(ZParser.RIGHT_CURLY_BRACKET, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterCharacteristicSetComprehensionExpression) {
			listener.enterCharacteristicSetComprehensionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitCharacteristicSetComprehensionExpression) {
			listener.exitCharacteristicSetComprehensionExpression(this);
		}
	}
}
export class SchemaConstructionExpressionContext extends ExpressionContext {
	public LEFT_SQUARE_BRACKET(): TerminalNode { return this.getToken(ZParser.LEFT_SQUARE_BRACKET, 0); }
	public schemaText(): SchemaTextContext {
		return this.getRuleContext(0, SchemaTextContext);
	}
	public RIGHT_SQUARE_BRACKET(): TerminalNode { return this.getToken(ZParser.RIGHT_SQUARE_BRACKET, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaConstructionExpression) {
			listener.enterSchemaConstructionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaConstructionExpression) {
			listener.exitSchemaConstructionExpression(this);
		}
	}
}
export class BindingExtensionExpressionContext extends ExpressionContext {
	public LEFT_BINDING_BRACKET(): TerminalNode { return this.getToken(ZParser.LEFT_BINDING_BRACKET, 0); }
	public RIGHT_BINDING_BRACKET(): TerminalNode { return this.getToken(ZParser.RIGHT_BINDING_BRACKET, 0); }
	public declNameExpression(): DeclNameExpressionContext[];
	public declNameExpression(i: number): DeclNameExpressionContext;
	public declNameExpression(i?: number): DeclNameExpressionContext | DeclNameExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclNameExpressionContext);
		} else {
			return this.getRuleContext(i, DeclNameExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.COMMA);
		} else {
			return this.getToken(ZParser.COMMA, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterBindingExtensionExpression) {
			listener.enterBindingExtensionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitBindingExtensionExpression) {
			listener.exitBindingExtensionExpression(this);
		}
	}
}
export class TupleExtensionExpressionContext extends ExpressionContext {
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.LEFT_PARENTHESIS, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.RIGHT_PARENTHESIS, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.COMMA);
		} else {
			return this.getToken(ZParser.COMMA, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterTupleExtensionExpression) {
			listener.enterTupleExtensionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitTupleExtensionExpression) {
			listener.exitTupleExtensionExpression(this);
		}
	}
}
export class CharacteristicDefiniteDescriptionExpressionContext extends ExpressionContext {
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.LEFT_PARENTHESIS, 0); }
	public GREEK_SMALL_LETTER_MU(): TerminalNode { return this.getToken(ZParser.GREEK_SMALL_LETTER_MU, 0); }
	public schemaText(): SchemaTextContext {
		return this.getRuleContext(0, SchemaTextContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterCharacteristicDefiniteDescriptionExpression) {
			listener.enterCharacteristicDefiniteDescriptionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitCharacteristicDefiniteDescriptionExpression) {
			listener.exitCharacteristicDefiniteDescriptionExpression(this);
		}
	}
}
export class ParenthesizedExpressionContext extends ExpressionContext {
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.LEFT_PARENTHESIS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
}


export class SchemaTextContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.NL);
		} else {
			return this.getToken(ZParser.NL, i);
		}
	}
	public declPart(): DeclPartContext | undefined {
		return this.tryGetRuleContext(0, DeclPartContext);
	}
	public VERTICAL_LINE(): TerminalNode | undefined { return this.tryGetToken(ZParser.VERTICAL_LINE, 0); }
	public predicate(): PredicateContext | undefined {
		return this.tryGetRuleContext(0, PredicateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_schemaText; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterSchemaText) {
			listener.enterSchemaText(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitSchemaText) {
			listener.exitSchemaText(this);
		}
	}
}


export class DeclPartContext extends ParserRuleContext {
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.SEMICOLON);
		} else {
			return this.getToken(ZParser.SEMICOLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.NL);
		} else {
			return this.getToken(ZParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_declPart; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterDeclPart) {
			listener.enterDeclPart(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitDeclPart) {
			listener.exitDeclPart(this);
		}
	}
}


export class DeclNameExpressionContext extends ParserRuleContext {
	public declName(): DeclNameContext {
		return this.getRuleContext(0, DeclNameContext);
	}
	public DEFINE_EQUAL(): TerminalNode { return this.getToken(ZParser.DEFINE_EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public NL(): TerminalNode | undefined { return this.tryGetToken(ZParser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_declNameExpression; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterDeclNameExpression) {
			listener.enterDeclNameExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitDeclNameExpression) {
			listener.exitDeclNameExpression(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public declName(): DeclNameContext[];
	public declName(i: number): DeclNameContext;
	public declName(i?: number): DeclNameContext | DeclNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclNameContext);
		} else {
			return this.getRuleContext(i, DeclNameContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ZParser.COLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.COMMA);
		} else {
			return this.getToken(ZParser.COMMA, i);
		}
	}
	public declNameExpression(): DeclNameExpressionContext | undefined {
		return this.tryGetRuleContext(0, DeclNameExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_declaration; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
}


export class OperatorTemplateContext extends ParserRuleContext {
	public RELATION(): TerminalNode | undefined { return this.tryGetToken(ZParser.RELATION, 0); }
	public template(): TemplateContext | undefined {
		return this.tryGetRuleContext(0, TemplateContext);
	}
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(ZParser.FUNCTION, 0); }
	public categoryTemplate(): CategoryTemplateContext | undefined {
		return this.tryGetRuleContext(0, CategoryTemplateContext);
	}
	public GENERIC(): TerminalNode | undefined { return this.tryGetToken(ZParser.GENERIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_operatorTemplate; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterOperatorTemplate) {
			listener.enterOperatorTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitOperatorTemplate) {
			listener.exitOperatorTemplate(this);
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
	public get ruleIndex(): number { return ZParser.RULE_categoryTemplate; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterCategoryTemplate) {
			listener.enterCategoryTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitCategoryTemplate) {
			listener.exitCategoryTemplate(this);
		}
	}
}


export class PrecContext extends ParserRuleContext {
	public NUMERAL(): TerminalNode { return this.getToken(ZParser.NUMERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_prec; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterPrec) {
			listener.enterPrec(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitPrec) {
			listener.exitPrec(this);
		}
	}
}


export class AssocContext extends ParserRuleContext {
	public LEFTASSOC(): TerminalNode | undefined { return this.tryGetToken(ZParser.LEFTASSOC, 0); }
	public RIGHTASSOC(): TerminalNode | undefined { return this.tryGetToken(ZParser.RIGHTASSOC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_assoc; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterAssoc) {
			listener.enterAssoc(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitAssoc) {
			listener.exitAssoc(this);
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
	public get ruleIndex(): number { return ZParser.RULE_template; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterTemplate) {
			listener.enterTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitTemplate) {
			listener.exitTemplate(this);
		}
	}
}


export class PrefixTemplateContext extends ParserRuleContext {
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.LEFT_PARENTHESIS, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.RIGHT_PARENTHESIS, 0); }
	public prefixName(): PrefixNameContext | undefined {
		return this.tryGetRuleContext(0, PrefixNameContext);
	}
	public POWERSET(): TerminalNode | undefined { return this.tryGetToken(ZParser.POWERSET, 0); }
	public ARGUMENT(): TerminalNode | undefined { return this.tryGetToken(ZParser.ARGUMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_prefixTemplate; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterPrefixTemplate) {
			listener.enterPrefixTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitPrefixTemplate) {
			listener.exitPrefixTemplate(this);
		}
	}
}


export class PostfixTemplateContext extends ParserRuleContext {
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.LEFT_PARENTHESIS, 0); }
	public postfixName(): PostfixNameContext {
		return this.getRuleContext(0, PostfixNameContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.RIGHT_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_postfixTemplate; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterPostfixTemplate) {
			listener.enterPostfixTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitPostfixTemplate) {
			listener.exitPostfixTemplate(this);
		}
	}
}


export class InfixTemplateContext extends ParserRuleContext {
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.LEFT_PARENTHESIS, 0); }
	public infixName(): InfixNameContext {
		return this.getRuleContext(0, InfixNameContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.RIGHT_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_infixTemplate; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterInfixTemplate) {
			listener.enterInfixTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitInfixTemplate) {
			listener.exitInfixTemplate(this);
		}
	}
}


export class NofixTemplateContext extends ParserRuleContext {
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.LEFT_PARENTHESIS, 0); }
	public nofixName(): NofixNameContext {
		return this.getRuleContext(0, NofixNameContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(ZParser.RIGHT_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_nofixTemplate; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterNofixTemplate) {
			listener.enterNofixTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitNofixTemplate) {
			listener.exitNofixTemplate(this);
		}
	}
}


export class DeclNameContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(ZParser.NAME, 0); }
	public opName(): OpNameContext | undefined {
		return this.tryGetRuleContext(0, OpNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_declName; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterDeclName) {
			listener.enterDeclName(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitDeclName) {
			listener.exitDeclName(this);
		}
	}
}


export class RefNameContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(ZParser.NAME, 0); }
	public LEFT_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(ZParser.LEFT_PARENTHESIS, 0); }
	public opName(): OpNameContext | undefined {
		return this.tryGetRuleContext(0, OpNameContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(ZParser.RIGHT_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_refName; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterRefName) {
			listener.enterRefName(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitRefName) {
			listener.exitRefName(this);
		}
	}
}


export class OpNameContext extends ParserRuleContext {
	public prefixName(): PrefixNameContext | undefined {
		return this.tryGetRuleContext(0, PrefixNameContext);
	}
	public postfixName(): PostfixNameContext | undefined {
		return this.tryGetRuleContext(0, PostfixNameContext);
	}
	public infixName(): InfixNameContext | undefined {
		return this.tryGetRuleContext(0, InfixNameContext);
	}
	public nofixName(): NofixNameContext | undefined {
		return this.tryGetRuleContext(0, NofixNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_opName; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterOpName) {
			listener.enterOpName(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitOpName) {
			listener.exitOpName(this);
		}
	}
}


export class PrefixNameContext extends ParserRuleContext {
	public PRE(): TerminalNode | undefined { return this.tryGetToken(ZParser.PRE, 0); }
	public ARGUMENT(): TerminalNode[];
	public ARGUMENT(i: number): TerminalNode;
	public ARGUMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.ARGUMENT);
		} else {
			return this.getToken(ZParser.ARGUMENT, i);
		}
	}
	public PREP(): TerminalNode | undefined { return this.tryGetToken(ZParser.PREP, 0); }
	public L(): TerminalNode | undefined { return this.tryGetToken(ZParser.L, 0); }
	public ERE(): TerminalNode | undefined { return this.tryGetToken(ZParser.ERE, 0); }
	public LIST(): TerminalNode[];
	public LIST(i: number): TerminalNode;
	public LIST(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.LIST);
		} else {
			return this.getToken(ZParser.LIST, i);
		}
	}
	public SRE(): TerminalNode | undefined { return this.tryGetToken(ZParser.SRE, 0); }
	public ES(): TerminalNode[];
	public ES(i: number): TerminalNode;
	public ES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.ES);
		} else {
			return this.getToken(ZParser.ES, i);
		}
	}
	public SS(): TerminalNode[];
	public SS(i: number): TerminalNode;
	public SS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.SS);
		} else {
			return this.getToken(ZParser.SS, i);
		}
	}
	public LP(): TerminalNode | undefined { return this.tryGetToken(ZParser.LP, 0); }
	public EREP(): TerminalNode | undefined { return this.tryGetToken(ZParser.EREP, 0); }
	public SREP(): TerminalNode | undefined { return this.tryGetToken(ZParser.SREP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_prefixName; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterPrefixName) {
			listener.enterPrefixName(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitPrefixName) {
			listener.exitPrefixName(this);
		}
	}
}


export class PostfixNameContext extends ParserRuleContext {
	public ARGUMENT(): TerminalNode[];
	public ARGUMENT(i: number): TerminalNode;
	public ARGUMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.ARGUMENT);
		} else {
			return this.getToken(ZParser.ARGUMENT, i);
		}
	}
	public POST(): TerminalNode | undefined { return this.tryGetToken(ZParser.POST, 0); }
	public POSTP(): TerminalNode | undefined { return this.tryGetToken(ZParser.POSTP, 0); }
	public EL(): TerminalNode | undefined { return this.tryGetToken(ZParser.EL, 0); }
	public ER(): TerminalNode | undefined { return this.tryGetToken(ZParser.ER, 0); }
	public LIST(): TerminalNode[];
	public LIST(i: number): TerminalNode;
	public LIST(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.LIST);
		} else {
			return this.getToken(ZParser.LIST, i);
		}
	}
	public SR(): TerminalNode | undefined { return this.tryGetToken(ZParser.SR, 0); }
	public ES(): TerminalNode[];
	public ES(i: number): TerminalNode;
	public ES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.ES);
		} else {
			return this.getToken(ZParser.ES, i);
		}
	}
	public SS(): TerminalNode[];
	public SS(i: number): TerminalNode;
	public SS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.SS);
		} else {
			return this.getToken(ZParser.SS, i);
		}
	}
	public ELP(): TerminalNode | undefined { return this.tryGetToken(ZParser.ELP, 0); }
	public ERP(): TerminalNode | undefined { return this.tryGetToken(ZParser.ERP, 0); }
	public SRP(): TerminalNode | undefined { return this.tryGetToken(ZParser.SRP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_postfixName; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterPostfixName) {
			listener.enterPostfixName(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitPostfixName) {
			listener.exitPostfixName(this);
		}
	}
}


export class InfixNameContext extends ParserRuleContext {
	public ARGUMENT(): TerminalNode[];
	public ARGUMENT(i: number): TerminalNode;
	public ARGUMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.ARGUMENT);
		} else {
			return this.getToken(ZParser.ARGUMENT, i);
		}
	}
	public I(): TerminalNode | undefined { return this.tryGetToken(ZParser.I, 0); }
	public IP(): TerminalNode | undefined { return this.tryGetToken(ZParser.IP, 0); }
	public EL(): TerminalNode | undefined { return this.tryGetToken(ZParser.EL, 0); }
	public ERE(): TerminalNode | undefined { return this.tryGetToken(ZParser.ERE, 0); }
	public LIST(): TerminalNode[];
	public LIST(i: number): TerminalNode;
	public LIST(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.LIST);
		} else {
			return this.getToken(ZParser.LIST, i);
		}
	}
	public SRE(): TerminalNode | undefined { return this.tryGetToken(ZParser.SRE, 0); }
	public ES(): TerminalNode[];
	public ES(i: number): TerminalNode;
	public ES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.ES);
		} else {
			return this.getToken(ZParser.ES, i);
		}
	}
	public SS(): TerminalNode[];
	public SS(i: number): TerminalNode;
	public SS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.SS);
		} else {
			return this.getToken(ZParser.SS, i);
		}
	}
	public ELP(): TerminalNode | undefined { return this.tryGetToken(ZParser.ELP, 0); }
	public EREP(): TerminalNode | undefined { return this.tryGetToken(ZParser.EREP, 0); }
	public SREP(): TerminalNode | undefined { return this.tryGetToken(ZParser.SREP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_infixName; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterInfixName) {
			listener.enterInfixName(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitInfixName) {
			listener.exitInfixName(this);
		}
	}
}


export class NofixNameContext extends ParserRuleContext {
	public L(): TerminalNode | undefined { return this.tryGetToken(ZParser.L, 0); }
	public ARGUMENT(): TerminalNode[];
	public ARGUMENT(i: number): TerminalNode;
	public ARGUMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.ARGUMENT);
		} else {
			return this.getToken(ZParser.ARGUMENT, i);
		}
	}
	public ER(): TerminalNode | undefined { return this.tryGetToken(ZParser.ER, 0); }
	public LIST(): TerminalNode[];
	public LIST(i: number): TerminalNode;
	public LIST(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.LIST);
		} else {
			return this.getToken(ZParser.LIST, i);
		}
	}
	public SR(): TerminalNode | undefined { return this.tryGetToken(ZParser.SR, 0); }
	public ES(): TerminalNode[];
	public ES(i: number): TerminalNode;
	public ES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.ES);
		} else {
			return this.getToken(ZParser.ES, i);
		}
	}
	public SS(): TerminalNode[];
	public SS(i: number): TerminalNode;
	public SS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.SS);
		} else {
			return this.getToken(ZParser.SS, i);
		}
	}
	public LP(): TerminalNode | undefined { return this.tryGetToken(ZParser.LP, 0); }
	public ERP(): TerminalNode | undefined { return this.tryGetToken(ZParser.ERP, 0); }
	public SRP(): TerminalNode | undefined { return this.tryGetToken(ZParser.SRP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_nofixName; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterNofixName) {
			listener.enterNofixName(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitNofixName) {
			listener.exitNofixName(this);
		}
	}
}


export class GenNameContext extends ParserRuleContext {
	public prefixGenName(): PrefixGenNameContext | undefined {
		return this.tryGetRuleContext(0, PrefixGenNameContext);
	}
	public postfixGenName(): PostfixGenNameContext | undefined {
		return this.tryGetRuleContext(0, PostfixGenNameContext);
	}
	public infixGenName(): InfixGenNameContext | undefined {
		return this.tryGetRuleContext(0, InfixGenNameContext);
	}
	public nofixGenName(): NofixGenNameContext | undefined {
		return this.tryGetRuleContext(0, NofixGenNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_genName; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterGenName) {
			listener.enterGenName(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitGenName) {
			listener.exitGenName(this);
		}
	}
}


export class PrefixGenNameContext extends ParserRuleContext {
	public PRE(): TerminalNode | undefined { return this.tryGetToken(ZParser.PRE, 0); }
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.NAME);
		} else {
			return this.getToken(ZParser.NAME, i);
		}
	}
	public L(): TerminalNode | undefined { return this.tryGetToken(ZParser.L, 0); }
	public ERE(): TerminalNode | undefined { return this.tryGetToken(ZParser.ERE, 0); }
	public SRE(): TerminalNode | undefined { return this.tryGetToken(ZParser.SRE, 0); }
	public ES(): TerminalNode[];
	public ES(i: number): TerminalNode;
	public ES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.ES);
		} else {
			return this.getToken(ZParser.ES, i);
		}
	}
	public SS(): TerminalNode[];
	public SS(i: number): TerminalNode;
	public SS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.SS);
		} else {
			return this.getToken(ZParser.SS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_prefixGenName; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterPrefixGenName) {
			listener.enterPrefixGenName(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitPrefixGenName) {
			listener.exitPrefixGenName(this);
		}
	}
}


export class PostfixGenNameContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.NAME);
		} else {
			return this.getToken(ZParser.NAME, i);
		}
	}
	public POST(): TerminalNode | undefined { return this.tryGetToken(ZParser.POST, 0); }
	public EL(): TerminalNode | undefined { return this.tryGetToken(ZParser.EL, 0); }
	public ER(): TerminalNode | undefined { return this.tryGetToken(ZParser.ER, 0); }
	public SR(): TerminalNode | undefined { return this.tryGetToken(ZParser.SR, 0); }
	public ES(): TerminalNode[];
	public ES(i: number): TerminalNode;
	public ES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.ES);
		} else {
			return this.getToken(ZParser.ES, i);
		}
	}
	public SS(): TerminalNode[];
	public SS(i: number): TerminalNode;
	public SS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.SS);
		} else {
			return this.getToken(ZParser.SS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_postfixGenName; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterPostfixGenName) {
			listener.enterPostfixGenName(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitPostfixGenName) {
			listener.exitPostfixGenName(this);
		}
	}
}


export class InfixGenNameContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.NAME);
		} else {
			return this.getToken(ZParser.NAME, i);
		}
	}
	public I(): TerminalNode | undefined { return this.tryGetToken(ZParser.I, 0); }
	public EL(): TerminalNode | undefined { return this.tryGetToken(ZParser.EL, 0); }
	public ERE(): TerminalNode | undefined { return this.tryGetToken(ZParser.ERE, 0); }
	public SRE(): TerminalNode | undefined { return this.tryGetToken(ZParser.SRE, 0); }
	public ES(): TerminalNode[];
	public ES(i: number): TerminalNode;
	public ES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.ES);
		} else {
			return this.getToken(ZParser.ES, i);
		}
	}
	public SS(): TerminalNode[];
	public SS(i: number): TerminalNode;
	public SS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.SS);
		} else {
			return this.getToken(ZParser.SS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_infixGenName; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterInfixGenName) {
			listener.enterInfixGenName(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitInfixGenName) {
			listener.exitInfixGenName(this);
		}
	}
}


export class NofixGenNameContext extends ParserRuleContext {
	public L(): TerminalNode { return this.getToken(ZParser.L, 0); }
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.NAME);
		} else {
			return this.getToken(ZParser.NAME, i);
		}
	}
	public ER(): TerminalNode | undefined { return this.tryGetToken(ZParser.ER, 0); }
	public SR(): TerminalNode | undefined { return this.tryGetToken(ZParser.SR, 0); }
	public ES(): TerminalNode[];
	public ES(i: number): TerminalNode;
	public ES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.ES);
		} else {
			return this.getToken(ZParser.ES, i);
		}
	}
	public SS(): TerminalNode[];
	public SS(i: number): TerminalNode;
	public SS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.SS);
		} else {
			return this.getToken(ZParser.SS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_nofixGenName; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterNofixGenName) {
			listener.enterNofixGenName(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitNofixGenName) {
			listener.exitNofixGenName(this);
		}
	}
}


export class RelationContext extends ParserRuleContext {
	public prefixRel(): PrefixRelContext | undefined {
		return this.tryGetRuleContext(0, PrefixRelContext);
	}
	public postfixRel(): PostfixRelContext | undefined {
		return this.tryGetRuleContext(0, PostfixRelContext);
	}
	public infixRel(): InfixRelContext | undefined {
		return this.tryGetRuleContext(0, InfixRelContext);
	}
	public nofixRel(): NofixRelContext | undefined {
		return this.tryGetRuleContext(0, NofixRelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_relation; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterRelation) {
			listener.enterRelation(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitRelation) {
			listener.exitRelation(this);
		}
	}
}


export class PrefixRelContext extends ParserRuleContext {
	public PREP(): TerminalNode | undefined { return this.tryGetToken(ZParser.PREP, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LP(): TerminalNode | undefined { return this.tryGetToken(ZParser.LP, 0); }
	public EREP(): TerminalNode | undefined { return this.tryGetToken(ZParser.EREP, 0); }
	public SREP(): TerminalNode | undefined { return this.tryGetToken(ZParser.SREP, 0); }
	public expSep(): ExpSepContext | undefined {
		return this.tryGetRuleContext(0, ExpSepContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_prefixRel; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterPrefixRel) {
			listener.enterPrefixRel(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitPrefixRel) {
			listener.exitPrefixRel(this);
		}
	}
}


export class PostfixRelContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public POSTP(): TerminalNode | undefined { return this.tryGetToken(ZParser.POSTP, 0); }
	public ELP(): TerminalNode | undefined { return this.tryGetToken(ZParser.ELP, 0); }
	public ERP(): TerminalNode | undefined { return this.tryGetToken(ZParser.ERP, 0); }
	public SRP(): TerminalNode | undefined { return this.tryGetToken(ZParser.SRP, 0); }
	public expSep(): ExpSepContext | undefined {
		return this.tryGetRuleContext(0, ExpSepContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_postfixRel; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterPostfixRel) {
			listener.enterPostfixRel(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitPostfixRel) {
			listener.exitPostfixRel(this);
		}
	}
}


export class InfixRelContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ELEMENT_OF(): TerminalNode[];
	public ELEMENT_OF(i: number): TerminalNode;
	public ELEMENT_OF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.ELEMENT_OF);
		} else {
			return this.getToken(ZParser.ELEMENT_OF, i);
		}
	}
	public EQUALS_SIGN(): TerminalNode[];
	public EQUALS_SIGN(i: number): TerminalNode;
	public EQUALS_SIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.EQUALS_SIGN);
		} else {
			return this.getToken(ZParser.EQUALS_SIGN, i);
		}
	}
	public IP(): TerminalNode[];
	public IP(i: number): TerminalNode;
	public IP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.IP);
		} else {
			return this.getToken(ZParser.IP, i);
		}
	}
	public ELP(): TerminalNode | undefined { return this.tryGetToken(ZParser.ELP, 0); }
	public EREP(): TerminalNode | undefined { return this.tryGetToken(ZParser.EREP, 0); }
	public SREP(): TerminalNode | undefined { return this.tryGetToken(ZParser.SREP, 0); }
	public expSep(): ExpSepContext | undefined {
		return this.tryGetRuleContext(0, ExpSepContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_infixRel; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterInfixRel) {
			listener.enterInfixRel(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitInfixRel) {
			listener.exitInfixRel(this);
		}
	}
}


export class NofixRelContext extends ParserRuleContext {
	public LP(): TerminalNode { return this.getToken(ZParser.LP, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public ERP(): TerminalNode | undefined { return this.tryGetToken(ZParser.ERP, 0); }
	public SRP(): TerminalNode | undefined { return this.tryGetToken(ZParser.SRP, 0); }
	public expSep(): ExpSepContext | undefined {
		return this.tryGetRuleContext(0, ExpSepContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_nofixRel; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterNofixRel) {
			listener.enterNofixRel(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitNofixRel) {
			listener.exitNofixRel(this);
		}
	}
}


export class ApplicationContext extends ParserRuleContext {
	public prefixApp(): PrefixAppContext | undefined {
		return this.tryGetRuleContext(0, PrefixAppContext);
	}
	public postfixApp(): PostfixAppContext | undefined {
		return this.tryGetRuleContext(0, PostfixAppContext);
	}
	public infixApp(): InfixAppContext | undefined {
		return this.tryGetRuleContext(0, InfixAppContext);
	}
	public nofixApp(): NofixAppContext | undefined {
		return this.tryGetRuleContext(0, NofixAppContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_application; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterApplication) {
			listener.enterApplication(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitApplication) {
			listener.exitApplication(this);
		}
	}
}


export class PrefixAppContext extends ParserRuleContext {
	public PRE(): TerminalNode | undefined { return this.tryGetToken(ZParser.PRE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public L(): TerminalNode | undefined { return this.tryGetToken(ZParser.L, 0); }
	public ERE(): TerminalNode | undefined { return this.tryGetToken(ZParser.ERE, 0); }
	public SRE(): TerminalNode | undefined { return this.tryGetToken(ZParser.SRE, 0); }
	public expSep(): ExpSepContext | undefined {
		return this.tryGetRuleContext(0, ExpSepContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_prefixApp; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterPrefixApp) {
			listener.enterPrefixApp(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitPrefixApp) {
			listener.exitPrefixApp(this);
		}
	}
}


export class PostfixAppContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public POST(): TerminalNode | undefined { return this.tryGetToken(ZParser.POST, 0); }
	public EL(): TerminalNode | undefined { return this.tryGetToken(ZParser.EL, 0); }
	public ER(): TerminalNode | undefined { return this.tryGetToken(ZParser.ER, 0); }
	public SR(): TerminalNode | undefined { return this.tryGetToken(ZParser.SR, 0); }
	public expSep(): ExpSepContext | undefined {
		return this.tryGetRuleContext(0, ExpSepContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_postfixApp; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterPostfixApp) {
			listener.enterPostfixApp(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitPostfixApp) {
			listener.exitPostfixApp(this);
		}
	}
}


export class InfixAppContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public I(): TerminalNode | undefined { return this.tryGetToken(ZParser.I, 0); }
	public EL(): TerminalNode | undefined { return this.tryGetToken(ZParser.EL, 0); }
	public ERE(): TerminalNode | undefined { return this.tryGetToken(ZParser.ERE, 0); }
	public SRE(): TerminalNode | undefined { return this.tryGetToken(ZParser.SRE, 0); }
	public expSep(): ExpSepContext | undefined {
		return this.tryGetRuleContext(0, ExpSepContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_infixApp; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterInfixApp) {
			listener.enterInfixApp(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitInfixApp) {
			listener.exitInfixApp(this);
		}
	}
}


export class NofixAppContext extends ParserRuleContext {
	public L(): TerminalNode { return this.getToken(ZParser.L, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public ER(): TerminalNode | undefined { return this.tryGetToken(ZParser.ER, 0); }
	public SR(): TerminalNode | undefined { return this.tryGetToken(ZParser.SR, 0); }
	public expSep(): ExpSepContext | undefined {
		return this.tryGetRuleContext(0, ExpSepContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_nofixApp; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterNofixApp) {
			listener.enterNofixApp(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitNofixApp) {
			listener.exitNofixApp(this);
		}
	}
}


export class ExpSepContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ES(): TerminalNode[];
	public ES(i: number): TerminalNode;
	public ES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.ES);
		} else {
			return this.getToken(ZParser.ES, i);
		}
	}
	public SS(): TerminalNode[];
	public SS(i: number): TerminalNode;
	public SS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZParser.SS);
		} else {
			return this.getToken(ZParser.SS, i);
		}
	}
	public expressionList(): ExpressionListContext[];
	public expressionList(i: number): ExpressionListContext;
	public expressionList(i?: number): ExpressionListContext | ExpressionListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionListContext);
		} else {
			return this.getRuleContext(i, ExpressionListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_expSep; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterExpSep) {
			listener.enterExpSep(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitExpSep) {
			listener.exitExpSep(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
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
			return this.getTokens(ZParser.COMMA);
		} else {
			return this.getToken(ZParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: ZParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: ZParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
}


