// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/modula2pim4/m2pim4.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { m2pim4Listener } from "./m2pim4Listener";

export class m2pim4Parser extends Parser {
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
	public static readonly AND = 28;
	public static readonly ARRAY = 29;
	public static readonly BEGIN = 30;
	public static readonly BY = 31;
	public static readonly CASE = 32;
	public static readonly CONST = 33;
	public static readonly DEFINITION = 34;
	public static readonly DIV = 35;
	public static readonly DO = 36;
	public static readonly ELSE = 37;
	public static readonly ELSIF = 38;
	public static readonly END = 39;
	public static readonly EXIT = 40;
	public static readonly EXPORT = 41;
	public static readonly FOR = 42;
	public static readonly FROM = 43;
	public static readonly IF = 44;
	public static readonly IMPLEMENTATION = 45;
	public static readonly IMPORT = 46;
	public static readonly IN = 47;
	public static readonly LOOP = 48;
	public static readonly MOD = 49;
	public static readonly MODULE = 50;
	public static readonly NOT = 51;
	public static readonly OF = 52;
	public static readonly OR = 53;
	public static readonly POINTER = 54;
	public static readonly PROCEDURE = 55;
	public static readonly QUALIFIED = 56;
	public static readonly RECORD = 57;
	public static readonly REPEAT = 58;
	public static readonly RETURN = 59;
	public static readonly SET = 60;
	public static readonly THEN = 61;
	public static readonly TO = 62;
	public static readonly TYPE = 63;
	public static readonly UNTIL = 64;
	public static readonly VAR = 65;
	public static readonly WHILE = 66;
	public static readonly WITH = 67;
	public static readonly IDENT = 68;
	public static readonly INTEGER = 69;
	public static readonly REAL = 70;
	public static readonly STRING = 71;
	public static readonly DIGIT = 72;
	public static readonly OCTAL_DIGIT = 73;
	public static readonly HEX_DIGIT = 74;
	public static readonly SCALE_FACTOR = 75;
	public static readonly COMMENT = 76;
	public static readonly WS = 77;
	public static readonly RULE_ident = 0;
	public static readonly RULE_number = 1;
	public static readonly RULE_integer = 2;
	public static readonly RULE_real = 3;
	public static readonly RULE_scaleFactor = 4;
	public static readonly RULE_hexDigit = 5;
	public static readonly RULE_digit = 6;
	public static readonly RULE_octalDigit = 7;
	public static readonly RULE_string = 8;
	public static readonly RULE_qualident = 9;
	public static readonly RULE_constantDeclaration = 10;
	public static readonly RULE_constExpression = 11;
	public static readonly RULE_relation = 12;
	public static readonly RULE_simpleConstExpr = 13;
	public static readonly RULE_addOperator = 14;
	public static readonly RULE_constTerm = 15;
	public static readonly RULE_mulOperator = 16;
	public static readonly RULE_constFactor = 17;
	public static readonly RULE_setOrQualident = 18;
	public static readonly RULE_set = 19;
	public static readonly RULE_element = 20;
	public static readonly RULE_typeDeclaration = 21;
	public static readonly RULE_type = 22;
	public static readonly RULE_simpleType = 23;
	public static readonly RULE_enumeration = 24;
	public static readonly RULE_identList = 25;
	public static readonly RULE_subrangeType = 26;
	public static readonly RULE_arrayType = 27;
	public static readonly RULE_recordType = 28;
	public static readonly RULE_fieldListSequence = 29;
	public static readonly RULE_fieldList = 30;
	public static readonly RULE_variant = 31;
	public static readonly RULE_caseLabelList = 32;
	public static readonly RULE_caseLabels = 33;
	public static readonly RULE_setType = 34;
	public static readonly RULE_pointerType = 35;
	public static readonly RULE_procedureType = 36;
	public static readonly RULE_formalTypeList = 37;
	public static readonly RULE_variableDeclaration = 38;
	public static readonly RULE_designator = 39;
	public static readonly RULE_designatorTail = 40;
	public static readonly RULE_expList = 41;
	public static readonly RULE_expression = 42;
	public static readonly RULE_simpleExpression = 43;
	public static readonly RULE_term = 44;
	public static readonly RULE_factor = 45;
	public static readonly RULE_setOrDesignatorOrProcCall = 46;
	public static readonly RULE_actualParameters = 47;
	public static readonly RULE_statement = 48;
	public static readonly RULE_assignmentOrProcCall = 49;
	public static readonly RULE_statementSequence = 50;
	public static readonly RULE_ifStatement = 51;
	public static readonly RULE_caseStatement = 52;
	public static readonly RULE_ccase = 53;
	public static readonly RULE_whileStatement = 54;
	public static readonly RULE_repeatStatement = 55;
	public static readonly RULE_forStatement = 56;
	public static readonly RULE_loopStatement = 57;
	public static readonly RULE_withStatement = 58;
	public static readonly RULE_procedureDeclaration = 59;
	public static readonly RULE_procedureHeading = 60;
	public static readonly RULE_block = 61;
	public static readonly RULE_declaration = 62;
	public static readonly RULE_formalParameters = 63;
	public static readonly RULE_fpSection = 64;
	public static readonly RULE_formalType = 65;
	public static readonly RULE_moduleDeclaration = 66;
	public static readonly RULE_priority = 67;
	public static readonly RULE_exportList = 68;
	public static readonly RULE_importList = 69;
	public static readonly RULE_definitionModule = 70;
	public static readonly RULE_definition = 71;
	public static readonly RULE_programModule = 72;
	public static readonly RULE_compilationUnit = 73;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"ident", "number", "integer", "real", "scaleFactor", "hexDigit", "digit", 
		"octalDigit", "string", "qualident", "constantDeclaration", "constExpression", 
		"relation", "simpleConstExpr", "addOperator", "constTerm", "mulOperator", 
		"constFactor", "setOrQualident", "set", "element", "typeDeclaration", 
		"type", "simpleType", "enumeration", "identList", "subrangeType", "arrayType", 
		"recordType", "fieldListSequence", "fieldList", "variant", "caseLabelList", 
		"caseLabels", "setType", "pointerType", "procedureType", "formalTypeList", 
		"variableDeclaration", "designator", "designatorTail", "expList", "expression", 
		"simpleExpression", "term", "factor", "setOrDesignatorOrProcCall", "actualParameters", 
		"statement", "assignmentOrProcCall", "statementSequence", "ifStatement", 
		"caseStatement", "ccase", "whileStatement", "repeatStatement", "forStatement", 
		"loopStatement", "withStatement", "procedureDeclaration", "procedureHeading", 
		"block", "declaration", "formalParameters", "fpSection", "formalType", 
		"moduleDeclaration", "priority", "exportList", "importList", "definitionModule", 
		"definition", "programModule", "compilationUnit",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'='", "'#'", "'<>'", "'<'", "'<='", "'>'", "'>='", 
		"'+'", "'-'", "'*'", "'/'", "'&'", "'('", "')'", "'~'", "'{'", "','", 
		"'}'", "'..'", "'['", "']'", "';'", "':'", "'|'", "'^'", "':='", "'AND'", 
		"'ARRAY'", "'BEGIN'", "'BY'", "'CASE'", "'CONST'", "'DEFINITION'", "'DIV'", 
		"'DO'", "'ELSE'", "'ELSIF'", "'END'", "'EXIT'", "'EXPORT'", "'FOR'", "'FROM'", 
		"'IF'", "'IMPLEMENTATION'", "'IMPORT'", "'IN'", "'LOOP'", "'MOD'", "'MODULE'", 
		"'NOT'", "'OF'", "'OR'", "'POINTER'", "'PROCEDURE'", "'QUALIFIED'", "'RECORD'", 
		"'REPEAT'", "'RETURN'", "'SET'", "'THEN'", "'TO'", "'TYPE'", "'UNTIL'", 
		"'VAR'", "'WHILE'", "'WITH'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"AND", "ARRAY", "BEGIN", "BY", "CASE", "CONST", "DEFINITION", "DIV", "DO", 
		"ELSE", "ELSIF", "END", "EXIT", "EXPORT", "FOR", "FROM", "IF", "IMPLEMENTATION", 
		"IMPORT", "IN", "LOOP", "MOD", "MODULE", "NOT", "OF", "OR", "POINTER", 
		"PROCEDURE", "QUALIFIED", "RECORD", "REPEAT", "RETURN", "SET", "THEN", 
		"TO", "TYPE", "UNTIL", "VAR", "WHILE", "WITH", "IDENT", "INTEGER", "REAL", 
		"STRING", "DIGIT", "OCTAL_DIGIT", "HEX_DIGIT", "SCALE_FACTOR", "COMMENT", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(m2pim4Parser._LITERAL_NAMES, m2pim4Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return m2pim4Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "m2pim4.g4"; }

	// @Override
	public get ruleNames(): string[] { return m2pim4Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return m2pim4Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(m2pim4Parser._ATN, this);
	}
	// @RuleVersion(0)
	public ident(): IdentContext {
		let _localctx: IdentContext = new IdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, m2pim4Parser.RULE_ident);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.match(m2pim4Parser.IDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, m2pim4Parser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			_la = this._input.LA(1);
			if (!(_la === m2pim4Parser.INTEGER || _la === m2pim4Parser.REAL)) {
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
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, m2pim4Parser.RULE_integer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.match(m2pim4Parser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public real(): RealContext {
		let _localctx: RealContext = new RealContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, m2pim4Parser.RULE_real);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(m2pim4Parser.REAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scaleFactor(): ScaleFactorContext {
		let _localctx: ScaleFactorContext = new ScaleFactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, m2pim4Parser.RULE_scaleFactor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(m2pim4Parser.SCALE_FACTOR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hexDigit(): HexDigitContext {
		let _localctx: HexDigitContext = new HexDigitContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, m2pim4Parser.RULE_hexDigit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(m2pim4Parser.HEX_DIGIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public digit(): DigitContext {
		let _localctx: DigitContext = new DigitContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, m2pim4Parser.RULE_digit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(m2pim4Parser.DIGIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public octalDigit(): OctalDigitContext {
		let _localctx: OctalDigitContext = new OctalDigitContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, m2pim4Parser.RULE_octalDigit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(m2pim4Parser.OCTAL_DIGIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, m2pim4Parser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(m2pim4Parser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualident(): QualidentContext {
		let _localctx: QualidentContext = new QualidentContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, m2pim4Parser.RULE_qualident);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.ident();
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === m2pim4Parser.T__0) {
				{
				{
				this.state = 167;
				this.match(m2pim4Parser.T__0);
				this.state = 168;
				this.ident();
				}
				}
				this.state = 173;
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
	public constantDeclaration(): ConstantDeclarationContext {
		let _localctx: ConstantDeclarationContext = new ConstantDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, m2pim4Parser.RULE_constantDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.ident();
			this.state = 175;
			this.match(m2pim4Parser.T__1);
			this.state = 176;
			this.constExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constExpression(): ConstExpressionContext {
		let _localctx: ConstExpressionContext = new ConstExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, m2pim4Parser.RULE_constExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.simpleConstExpr();
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << m2pim4Parser.T__1) | (1 << m2pim4Parser.T__2) | (1 << m2pim4Parser.T__3) | (1 << m2pim4Parser.T__4) | (1 << m2pim4Parser.T__5) | (1 << m2pim4Parser.T__6) | (1 << m2pim4Parser.T__7))) !== 0) || _la === m2pim4Parser.IN) {
				{
				this.state = 179;
				this.relation();
				this.state = 180;
				this.simpleConstExpr();
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
	public relation(): RelationContext {
		let _localctx: RelationContext = new RelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, m2pim4Parser.RULE_relation);
		try {
			this.state = 193;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case m2pim4Parser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 184;
				this.match(m2pim4Parser.T__1);
				}
				break;
			case m2pim4Parser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 185;
				this.match(m2pim4Parser.T__2);
				}
				break;
			case m2pim4Parser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 186;
				this.match(m2pim4Parser.T__3);
				}
				break;
			case m2pim4Parser.T__4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 187;
				this.match(m2pim4Parser.T__4);
				}
				break;
			case m2pim4Parser.T__5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 188;
				this.match(m2pim4Parser.T__5);
				}
				break;
			case m2pim4Parser.T__6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 189;
				this.match(m2pim4Parser.T__6);
				}
				break;
			case m2pim4Parser.T__7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 190;
				this.match(m2pim4Parser.T__7);
				}
				break;
			case m2pim4Parser.IN:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 191;
				this.match(m2pim4Parser.IN);
				       
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
	public simpleConstExpr(): SimpleConstExprContext {
		let _localctx: SimpleConstExprContext = new SimpleConstExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, m2pim4Parser.RULE_simpleConstExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case m2pim4Parser.T__8:
				{
				this.state = 195;
				this.match(m2pim4Parser.T__8);
				}
				break;
			case m2pim4Parser.T__9:
				{
				this.state = 196;
				this.match(m2pim4Parser.T__9);
				       
				}
				break;
			case m2pim4Parser.T__13:
			case m2pim4Parser.T__15:
			case m2pim4Parser.T__16:
			case m2pim4Parser.NOT:
			case m2pim4Parser.IDENT:
			case m2pim4Parser.INTEGER:
			case m2pim4Parser.REAL:
			case m2pim4Parser.STRING:
				break;
			default:
				break;
			}
			this.state = 200;
			this.constTerm();
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === m2pim4Parser.T__8 || _la === m2pim4Parser.T__9 || _la === m2pim4Parser.OR) {
				{
				{
				this.state = 201;
				this.addOperator();
				this.state = 202;
				this.constTerm();
				}
				}
				this.state = 208;
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
	public addOperator(): AddOperatorContext {
		let _localctx: AddOperatorContext = new AddOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, m2pim4Parser.RULE_addOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			_la = this._input.LA(1);
			if (!(_la === m2pim4Parser.T__8 || _la === m2pim4Parser.T__9 || _la === m2pim4Parser.OR)) {
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
	public constTerm(): ConstTermContext {
		let _localctx: ConstTermContext = new ConstTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, m2pim4Parser.RULE_constTerm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.constFactor();
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << m2pim4Parser.T__10) | (1 << m2pim4Parser.T__11) | (1 << m2pim4Parser.T__12) | (1 << m2pim4Parser.AND))) !== 0) || _la === m2pim4Parser.DIV || _la === m2pim4Parser.MOD) {
				{
				{
				this.state = 212;
				this.mulOperator();
				this.state = 213;
				this.constFactor();
				}
				}
				this.state = 219;
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
	public mulOperator(): MulOperatorContext {
		let _localctx: MulOperatorContext = new MulOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, m2pim4Parser.RULE_mulOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << m2pim4Parser.T__10) | (1 << m2pim4Parser.T__11) | (1 << m2pim4Parser.T__12) | (1 << m2pim4Parser.AND))) !== 0) || _la === m2pim4Parser.DIV || _la === m2pim4Parser.MOD)) {
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
	public constFactor(): ConstFactorContext {
		let _localctx: ConstFactorContext = new ConstFactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, m2pim4Parser.RULE_constFactor);
		try {
			this.state = 235;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case m2pim4Parser.INTEGER:
			case m2pim4Parser.REAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 222;
				this.number();
				}
				break;
			case m2pim4Parser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 223;
				this.string();
				}
				break;
			case m2pim4Parser.T__16:
			case m2pim4Parser.IDENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 224;
				this.setOrQualident();
				}
				break;
			case m2pim4Parser.T__13:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 225;
				this.match(m2pim4Parser.T__13);
				this.state = 226;
				this.constExpression();
				this.state = 227;
				this.match(m2pim4Parser.T__14);
				}
				break;
			case m2pim4Parser.T__15:
			case m2pim4Parser.NOT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 232;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case m2pim4Parser.NOT:
					{
					this.state = 229;
					this.match(m2pim4Parser.NOT);
					}
					break;
				case m2pim4Parser.T__15:
					{
					this.state = 230;
					this.match(m2pim4Parser.T__15);
					       
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 234;
				this.constFactor();
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
	public setOrQualident(): SetOrQualidentContext {
		let _localctx: SetOrQualidentContext = new SetOrQualidentContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, m2pim4Parser.RULE_setOrQualident);
		let _la: number;
		try {
			this.state = 242;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case m2pim4Parser.T__16:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 237;
				this.set();
				}
				break;
			case m2pim4Parser.IDENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 238;
				this.qualident();
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === m2pim4Parser.T__16) {
					{
					this.state = 239;
					this.set();
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
	public set(): SetContext {
		let _localctx: SetContext = new SetContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, m2pim4Parser.RULE_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.match(m2pim4Parser.T__16);
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << m2pim4Parser.T__8) | (1 << m2pim4Parser.T__9) | (1 << m2pim4Parser.T__13) | (1 << m2pim4Parser.T__15) | (1 << m2pim4Parser.T__16))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (m2pim4Parser.NOT - 51)) | (1 << (m2pim4Parser.IDENT - 51)) | (1 << (m2pim4Parser.INTEGER - 51)) | (1 << (m2pim4Parser.REAL - 51)) | (1 << (m2pim4Parser.STRING - 51)))) !== 0)) {
				{
				this.state = 245;
				this.element();
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === m2pim4Parser.T__17) {
					{
					{
					this.state = 246;
					this.match(m2pim4Parser.T__17);
					this.state = 247;
					this.element();
					}
					}
					this.state = 252;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 255;
			this.match(m2pim4Parser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, m2pim4Parser.RULE_element);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.constExpression();
			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.T__19) {
				{
				this.state = 258;
				this.match(m2pim4Parser.T__19);
				this.state = 259;
				this.constExpression();
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
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, m2pim4Parser.RULE_typeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.ident();
			this.state = 263;
			this.match(m2pim4Parser.T__1);
			this.state = 264;
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
		this.enterRule(_localctx, 44, m2pim4Parser.RULE_type);
		try {
			this.state = 272;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case m2pim4Parser.T__13:
			case m2pim4Parser.T__20:
			case m2pim4Parser.IDENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 266;
				this.simpleType();
				}
				break;
			case m2pim4Parser.ARRAY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 267;
				this.arrayType();
				}
				break;
			case m2pim4Parser.RECORD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 268;
				this.recordType();
				}
				break;
			case m2pim4Parser.SET:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 269;
				this.setType();
				}
				break;
			case m2pim4Parser.POINTER:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 270;
				this.pointerType();
				}
				break;
			case m2pim4Parser.PROCEDURE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 271;
				this.procedureType();
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
	public simpleType(): SimpleTypeContext {
		let _localctx: SimpleTypeContext = new SimpleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, m2pim4Parser.RULE_simpleType);
		try {
			this.state = 277;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case m2pim4Parser.IDENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 274;
				this.qualident();
				}
				break;
			case m2pim4Parser.T__13:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 275;
				this.enumeration();
				}
				break;
			case m2pim4Parser.T__20:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 276;
				this.subrangeType();
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
	public enumeration(): EnumerationContext {
		let _localctx: EnumerationContext = new EnumerationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, m2pim4Parser.RULE_enumeration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.match(m2pim4Parser.T__13);
			this.state = 280;
			this.identList();
			this.state = 281;
			this.match(m2pim4Parser.T__14);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identList(): IdentListContext {
		let _localctx: IdentListContext = new IdentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, m2pim4Parser.RULE_identList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.ident();
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === m2pim4Parser.T__17) {
				{
				{
				this.state = 284;
				this.match(m2pim4Parser.T__17);
				this.state = 285;
				this.ident();
				}
				}
				this.state = 290;
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
	public subrangeType(): SubrangeTypeContext {
		let _localctx: SubrangeTypeContext = new SubrangeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, m2pim4Parser.RULE_subrangeType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this.match(m2pim4Parser.T__20);
			this.state = 292;
			this.constExpression();
			this.state = 293;
			this.match(m2pim4Parser.T__19);
			this.state = 294;
			this.constExpression();
			this.state = 295;
			this.match(m2pim4Parser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, m2pim4Parser.RULE_arrayType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(m2pim4Parser.ARRAY);
			this.state = 298;
			this.simpleType();
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === m2pim4Parser.T__17) {
				{
				{
				this.state = 299;
				this.match(m2pim4Parser.T__17);
				this.state = 300;
				this.simpleType();
				}
				}
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 306;
			this.match(m2pim4Parser.OF);
			this.state = 307;
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
	public recordType(): RecordTypeContext {
		let _localctx: RecordTypeContext = new RecordTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, m2pim4Parser.RULE_recordType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this.match(m2pim4Parser.RECORD);
			this.state = 310;
			this.fieldListSequence();
			this.state = 311;
			this.match(m2pim4Parser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldListSequence(): FieldListSequenceContext {
		let _localctx: FieldListSequenceContext = new FieldListSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, m2pim4Parser.RULE_fieldListSequence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this.fieldList();
			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === m2pim4Parser.T__22) {
				{
				{
				this.state = 314;
				this.match(m2pim4Parser.T__22);
				this.state = 315;
				this.fieldList();
				}
				}
				this.state = 320;
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
	public fieldList(): FieldListContext {
		let _localctx: FieldListContext = new FieldListContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, m2pim4Parser.RULE_fieldList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case m2pim4Parser.IDENT:
				{
				this.state = 321;
				this.identList();
				this.state = 322;
				this.match(m2pim4Parser.T__23);
				this.state = 323;
				this.type();
				}
				break;
			case m2pim4Parser.CASE:
				{
				this.state = 325;
				this.match(m2pim4Parser.CASE);
				this.state = 326;
				this.ident();
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === m2pim4Parser.T__0 || _la === m2pim4Parser.T__23) {
					{
					this.state = 330;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case m2pim4Parser.T__23:
						{
						this.state = 327;
						this.match(m2pim4Parser.T__23);
						}
						break;
					case m2pim4Parser.T__0:
						{
						this.state = 328;
						this.match(m2pim4Parser.T__0);
						       
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 332;
					this.qualident();
					}
				}

				this.state = 335;
				this.match(m2pim4Parser.OF);
				this.state = 336;
				this.variant();
				this.state = 341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === m2pim4Parser.T__24) {
					{
					{
					this.state = 337;
					this.match(m2pim4Parser.T__24);
					this.state = 338;
					this.variant();
					}
					}
					this.state = 343;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === m2pim4Parser.ELSE) {
					{
					this.state = 344;
					this.match(m2pim4Parser.ELSE);
					this.state = 345;
					this.fieldListSequence();
					}
				}

				this.state = 348;
				this.match(m2pim4Parser.END);
				}
				break;
			case m2pim4Parser.T__22:
			case m2pim4Parser.T__24:
			case m2pim4Parser.ELSE:
			case m2pim4Parser.END:
				break;
			default:
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
	public variant(): VariantContext {
		let _localctx: VariantContext = new VariantContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, m2pim4Parser.RULE_variant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.caseLabelList();
			this.state = 353;
			this.match(m2pim4Parser.T__23);
			this.state = 354;
			this.fieldListSequence();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseLabelList(): CaseLabelListContext {
		let _localctx: CaseLabelListContext = new CaseLabelListContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, m2pim4Parser.RULE_caseLabelList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this.caseLabels();
			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === m2pim4Parser.T__17) {
				{
				{
				this.state = 357;
				this.match(m2pim4Parser.T__17);
				this.state = 358;
				this.caseLabels();
				}
				}
				this.state = 363;
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
	public caseLabels(): CaseLabelsContext {
		let _localctx: CaseLabelsContext = new CaseLabelsContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, m2pim4Parser.RULE_caseLabels);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this.constExpression();
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.T__19) {
				{
				this.state = 365;
				this.match(m2pim4Parser.T__19);
				this.state = 366;
				this.constExpression();
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
	public setType(): SetTypeContext {
		let _localctx: SetTypeContext = new SetTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, m2pim4Parser.RULE_setType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.match(m2pim4Parser.SET);
			this.state = 370;
			this.match(m2pim4Parser.OF);
			this.state = 371;
			this.simpleType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointerType(): PointerTypeContext {
		let _localctx: PointerTypeContext = new PointerTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, m2pim4Parser.RULE_pointerType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this.match(m2pim4Parser.POINTER);
			this.state = 374;
			this.match(m2pim4Parser.TO);
			this.state = 375;
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
	public procedureType(): ProcedureTypeContext {
		let _localctx: ProcedureTypeContext = new ProcedureTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, m2pim4Parser.RULE_procedureType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.match(m2pim4Parser.PROCEDURE);
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.T__13) {
				{
				this.state = 378;
				this.formalTypeList();
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
	public formalTypeList(): FormalTypeListContext {
		let _localctx: FormalTypeListContext = new FormalTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, m2pim4Parser.RULE_formalTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.match(m2pim4Parser.T__13);
			this.state = 396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.ARRAY || _la === m2pim4Parser.VAR || _la === m2pim4Parser.IDENT) {
				{
				this.state = 383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === m2pim4Parser.VAR) {
					{
					this.state = 382;
					this.match(m2pim4Parser.VAR);
					}
				}

				this.state = 385;
				this.formalType();
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === m2pim4Parser.T__17) {
					{
					{
					this.state = 386;
					this.match(m2pim4Parser.T__17);
					this.state = 388;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === m2pim4Parser.VAR) {
						{
						this.state = 387;
						this.match(m2pim4Parser.VAR);
						}
					}

					this.state = 390;
					this.formalType();
					}
					}
					this.state = 395;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 398;
			this.match(m2pim4Parser.T__14);
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.T__23) {
				{
				this.state = 399;
				this.match(m2pim4Parser.T__23);
				this.state = 400;
				this.qualident();
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
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, m2pim4Parser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this.identList();
			this.state = 404;
			this.match(m2pim4Parser.T__23);
			this.state = 405;
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
	public designator(): DesignatorContext {
		let _localctx: DesignatorContext = new DesignatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, m2pim4Parser.RULE_designator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this.qualident();
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.T__20 || _la === m2pim4Parser.T__25) {
				{
				this.state = 408;
				this.designatorTail();
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
	public designatorTail(): DesignatorTailContext {
		let _localctx: DesignatorTailContext = new DesignatorTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, m2pim4Parser.RULE_designatorTail);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 416;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case m2pim4Parser.T__20:
					{
					this.state = 411;
					this.match(m2pim4Parser.T__20);
					this.state = 412;
					this.expList();
					this.state = 413;
					this.match(m2pim4Parser.T__21);
					}
					break;
				case m2pim4Parser.T__25:
					{
					this.state = 415;
					this.match(m2pim4Parser.T__25);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 422;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === m2pim4Parser.T__0) {
					{
					{
					this.state = 418;
					this.match(m2pim4Parser.T__0);
					this.state = 419;
					this.ident();
					}
					}
					this.state = 424;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 427;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === m2pim4Parser.T__20 || _la === m2pim4Parser.T__25);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expList(): ExpListContext {
		let _localctx: ExpListContext = new ExpListContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, m2pim4Parser.RULE_expList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.expression();
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === m2pim4Parser.T__17) {
				{
				{
				this.state = 430;
				this.match(m2pim4Parser.T__17);
				this.state = 431;
				this.expression();
				}
				}
				this.state = 436;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, m2pim4Parser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			this.simpleExpression();
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << m2pim4Parser.T__1) | (1 << m2pim4Parser.T__2) | (1 << m2pim4Parser.T__3) | (1 << m2pim4Parser.T__4) | (1 << m2pim4Parser.T__5) | (1 << m2pim4Parser.T__6) | (1 << m2pim4Parser.T__7))) !== 0) || _la === m2pim4Parser.IN) {
				{
				this.state = 438;
				this.relation();
				this.state = 439;
				this.simpleExpression();
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
	public simpleExpression(): SimpleExpressionContext {
		let _localctx: SimpleExpressionContext = new SimpleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, m2pim4Parser.RULE_simpleExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case m2pim4Parser.T__8:
				{
				this.state = 443;
				this.match(m2pim4Parser.T__8);
				}
				break;
			case m2pim4Parser.T__9:
				{
				this.state = 444;
				this.match(m2pim4Parser.T__9);
				       
				}
				break;
			case m2pim4Parser.T__13:
			case m2pim4Parser.T__15:
			case m2pim4Parser.T__16:
			case m2pim4Parser.NOT:
			case m2pim4Parser.IDENT:
			case m2pim4Parser.INTEGER:
			case m2pim4Parser.REAL:
			case m2pim4Parser.STRING:
				break;
			default:
				break;
			}
			this.state = 448;
			this.term();
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === m2pim4Parser.T__8 || _la === m2pim4Parser.T__9 || _la === m2pim4Parser.OR) {
				{
				{
				this.state = 449;
				this.addOperator();
				this.state = 450;
				this.term();
				}
				}
				this.state = 456;
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
		this.enterRule(_localctx, 88, m2pim4Parser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.factor();
			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << m2pim4Parser.T__10) | (1 << m2pim4Parser.T__11) | (1 << m2pim4Parser.T__12) | (1 << m2pim4Parser.AND))) !== 0) || _la === m2pim4Parser.DIV || _la === m2pim4Parser.MOD) {
				{
				{
				this.state = 458;
				this.mulOperator();
				this.state = 459;
				this.factor();
				}
				}
				this.state = 465;
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
		this.enterRule(_localctx, 90, m2pim4Parser.RULE_factor);
		try {
			this.state = 479;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case m2pim4Parser.INTEGER:
			case m2pim4Parser.REAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 466;
				this.number();
				}
				break;
			case m2pim4Parser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 467;
				this.string();
				}
				break;
			case m2pim4Parser.T__16:
			case m2pim4Parser.IDENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 468;
				this.setOrDesignatorOrProcCall();
				}
				break;
			case m2pim4Parser.T__13:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 469;
				this.match(m2pim4Parser.T__13);
				this.state = 470;
				this.expression();
				this.state = 471;
				this.match(m2pim4Parser.T__14);
				}
				break;
			case m2pim4Parser.T__15:
			case m2pim4Parser.NOT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 476;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case m2pim4Parser.NOT:
					{
					this.state = 473;
					this.match(m2pim4Parser.NOT);
					}
					break;
				case m2pim4Parser.T__15:
					{
					this.state = 474;
					this.match(m2pim4Parser.T__15);
					       
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 478;
				this.factor();
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
	public setOrDesignatorOrProcCall(): SetOrDesignatorOrProcCallContext {
		let _localctx: SetOrDesignatorOrProcCallContext = new SetOrDesignatorOrProcCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, m2pim4Parser.RULE_setOrDesignatorOrProcCall);
		let _la: number;
		try {
			this.state = 492;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case m2pim4Parser.T__16:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 481;
				this.set();
				}
				break;
			case m2pim4Parser.IDENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 482;
				this.qualident();
				this.state = 490;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case m2pim4Parser.T__16:
					{
					this.state = 483;
					this.set();
					}
					break;
				case m2pim4Parser.T__1:
				case m2pim4Parser.T__2:
				case m2pim4Parser.T__3:
				case m2pim4Parser.T__4:
				case m2pim4Parser.T__5:
				case m2pim4Parser.T__6:
				case m2pim4Parser.T__7:
				case m2pim4Parser.T__8:
				case m2pim4Parser.T__9:
				case m2pim4Parser.T__10:
				case m2pim4Parser.T__11:
				case m2pim4Parser.T__12:
				case m2pim4Parser.T__13:
				case m2pim4Parser.T__14:
				case m2pim4Parser.T__17:
				case m2pim4Parser.T__20:
				case m2pim4Parser.T__21:
				case m2pim4Parser.T__22:
				case m2pim4Parser.T__24:
				case m2pim4Parser.T__25:
				case m2pim4Parser.AND:
				case m2pim4Parser.BY:
				case m2pim4Parser.DIV:
				case m2pim4Parser.DO:
				case m2pim4Parser.ELSE:
				case m2pim4Parser.ELSIF:
				case m2pim4Parser.END:
				case m2pim4Parser.IN:
				case m2pim4Parser.MOD:
				case m2pim4Parser.OF:
				case m2pim4Parser.OR:
				case m2pim4Parser.THEN:
				case m2pim4Parser.TO:
				case m2pim4Parser.UNTIL:
					{
					this.state = 485;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === m2pim4Parser.T__20 || _la === m2pim4Parser.T__25) {
						{
						this.state = 484;
						this.designatorTail();
						}
					}

					this.state = 488;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === m2pim4Parser.T__13) {
						{
						this.state = 487;
						this.actualParameters();
						}
					}

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
	public actualParameters(): ActualParametersContext {
		let _localctx: ActualParametersContext = new ActualParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, m2pim4Parser.RULE_actualParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 494;
			this.match(m2pim4Parser.T__13);
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << m2pim4Parser.T__8) | (1 << m2pim4Parser.T__9) | (1 << m2pim4Parser.T__13) | (1 << m2pim4Parser.T__15) | (1 << m2pim4Parser.T__16))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (m2pim4Parser.NOT - 51)) | (1 << (m2pim4Parser.IDENT - 51)) | (1 << (m2pim4Parser.INTEGER - 51)) | (1 << (m2pim4Parser.REAL - 51)) | (1 << (m2pim4Parser.STRING - 51)))) !== 0)) {
				{
				this.state = 495;
				this.expList();
				}
			}

			this.state = 498;
			this.match(m2pim4Parser.T__14);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 96, m2pim4Parser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case m2pim4Parser.IDENT:
				{
				this.state = 500;
				this.assignmentOrProcCall();
				}
				break;
			case m2pim4Parser.IF:
				{
				this.state = 501;
				this.ifStatement();
				}
				break;
			case m2pim4Parser.CASE:
				{
				this.state = 502;
				this.caseStatement();
				}
				break;
			case m2pim4Parser.WHILE:
				{
				this.state = 503;
				this.whileStatement();
				}
				break;
			case m2pim4Parser.REPEAT:
				{
				this.state = 504;
				this.repeatStatement();
				}
				break;
			case m2pim4Parser.LOOP:
				{
				this.state = 505;
				this.loopStatement();
				}
				break;
			case m2pim4Parser.FOR:
				{
				this.state = 506;
				this.forStatement();
				}
				break;
			case m2pim4Parser.WITH:
				{
				this.state = 507;
				this.withStatement();
				}
				break;
			case m2pim4Parser.EXIT:
				{
				this.state = 508;
				this.match(m2pim4Parser.EXIT);
				}
				break;
			case m2pim4Parser.RETURN:
				{
				this.state = 509;
				this.match(m2pim4Parser.RETURN);
				this.state = 511;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << m2pim4Parser.T__8) | (1 << m2pim4Parser.T__9) | (1 << m2pim4Parser.T__13) | (1 << m2pim4Parser.T__15) | (1 << m2pim4Parser.T__16))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (m2pim4Parser.NOT - 51)) | (1 << (m2pim4Parser.IDENT - 51)) | (1 << (m2pim4Parser.INTEGER - 51)) | (1 << (m2pim4Parser.REAL - 51)) | (1 << (m2pim4Parser.STRING - 51)))) !== 0)) {
					{
					this.state = 510;
					this.expression();
					}
				}

				}
				break;
			case m2pim4Parser.T__22:
			case m2pim4Parser.T__24:
			case m2pim4Parser.ELSE:
			case m2pim4Parser.ELSIF:
			case m2pim4Parser.END:
			case m2pim4Parser.UNTIL:
				break;
			default:
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
	public assignmentOrProcCall(): AssignmentOrProcCallContext {
		let _localctx: AssignmentOrProcCallContext = new AssignmentOrProcCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, m2pim4Parser.RULE_assignmentOrProcCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			this.designator();
			this.state = 521;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case m2pim4Parser.T__26:
				{
				this.state = 516;
				this.match(m2pim4Parser.T__26);
				this.state = 517;
				this.expression();
				}
				break;
			case m2pim4Parser.T__13:
			case m2pim4Parser.T__22:
			case m2pim4Parser.T__24:
			case m2pim4Parser.ELSE:
			case m2pim4Parser.ELSIF:
			case m2pim4Parser.END:
			case m2pim4Parser.UNTIL:
				{
				this.state = 519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === m2pim4Parser.T__13) {
					{
					this.state = 518;
					this.actualParameters();
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
	public statementSequence(): StatementSequenceContext {
		let _localctx: StatementSequenceContext = new StatementSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, m2pim4Parser.RULE_statementSequence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.statement();
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === m2pim4Parser.T__22) {
				{
				{
				this.state = 524;
				this.match(m2pim4Parser.T__22);
				this.state = 525;
				this.statement();
				}
				}
				this.state = 530;
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
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, m2pim4Parser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			this.match(m2pim4Parser.IF);
			this.state = 532;
			this.expression();
			this.state = 533;
			this.match(m2pim4Parser.THEN);
			this.state = 534;
			this.statementSequence();
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === m2pim4Parser.ELSIF) {
				{
				{
				this.state = 535;
				this.match(m2pim4Parser.ELSIF);
				this.state = 536;
				this.expression();
				this.state = 537;
				this.match(m2pim4Parser.THEN);
				this.state = 538;
				this.statementSequence();
				}
				}
				this.state = 544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 547;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.ELSE) {
				{
				this.state = 545;
				this.match(m2pim4Parser.ELSE);
				this.state = 546;
				this.statementSequence();
				}
			}

			this.state = 549;
			this.match(m2pim4Parser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseStatement(): CaseStatementContext {
		let _localctx: CaseStatementContext = new CaseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, m2pim4Parser.RULE_caseStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 551;
			this.match(m2pim4Parser.CASE);
			this.state = 552;
			this.expression();
			this.state = 553;
			this.match(m2pim4Parser.OF);
			this.state = 554;
			this.ccase();
			this.state = 559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === m2pim4Parser.T__24) {
				{
				{
				this.state = 555;
				this.match(m2pim4Parser.T__24);
				this.state = 556;
				this.ccase();
				}
				}
				this.state = 561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 564;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.ELSE) {
				{
				this.state = 562;
				this.match(m2pim4Parser.ELSE);
				this.state = 563;
				this.statementSequence();
				}
			}

			this.state = 566;
			this.match(m2pim4Parser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ccase(): CcaseContext {
		let _localctx: CcaseContext = new CcaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, m2pim4Parser.RULE_ccase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 568;
			this.caseLabelList();
			this.state = 569;
			this.match(m2pim4Parser.T__23);
			this.state = 570;
			this.statementSequence();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, m2pim4Parser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 572;
			this.match(m2pim4Parser.WHILE);
			this.state = 573;
			this.expression();
			this.state = 574;
			this.match(m2pim4Parser.DO);
			this.state = 575;
			this.statementSequence();
			this.state = 576;
			this.match(m2pim4Parser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public repeatStatement(): RepeatStatementContext {
		let _localctx: RepeatStatementContext = new RepeatStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, m2pim4Parser.RULE_repeatStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 578;
			this.match(m2pim4Parser.REPEAT);
			this.state = 579;
			this.statementSequence();
			this.state = 580;
			this.match(m2pim4Parser.UNTIL);
			this.state = 581;
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
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, m2pim4Parser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 583;
			this.match(m2pim4Parser.FOR);
			this.state = 584;
			this.ident();
			this.state = 585;
			this.match(m2pim4Parser.T__26);
			this.state = 586;
			this.expression();
			this.state = 587;
			this.match(m2pim4Parser.TO);
			this.state = 588;
			this.expression();
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.BY) {
				{
				this.state = 589;
				this.match(m2pim4Parser.BY);
				this.state = 590;
				this.constExpression();
				}
			}

			this.state = 593;
			this.match(m2pim4Parser.DO);
			this.state = 594;
			this.statementSequence();
			this.state = 595;
			this.match(m2pim4Parser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopStatement(): LoopStatementContext {
		let _localctx: LoopStatementContext = new LoopStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, m2pim4Parser.RULE_loopStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 597;
			this.match(m2pim4Parser.LOOP);
			this.state = 598;
			this.statementSequence();
			this.state = 599;
			this.match(m2pim4Parser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withStatement(): WithStatementContext {
		let _localctx: WithStatementContext = new WithStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, m2pim4Parser.RULE_withStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.match(m2pim4Parser.WITH);
			this.state = 602;
			this.designator();
			this.state = 603;
			this.match(m2pim4Parser.DO);
			this.state = 604;
			this.statementSequence();
			this.state = 605;
			this.match(m2pim4Parser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public procedureDeclaration(): ProcedureDeclarationContext {
		let _localctx: ProcedureDeclarationContext = new ProcedureDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, m2pim4Parser.RULE_procedureDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this.procedureHeading();
			this.state = 608;
			this.match(m2pim4Parser.T__22);
			this.state = 609;
			this.block();
			this.state = 610;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public procedureHeading(): ProcedureHeadingContext {
		let _localctx: ProcedureHeadingContext = new ProcedureHeadingContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, m2pim4Parser.RULE_procedureHeading);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
			this.match(m2pim4Parser.PROCEDURE);
			this.state = 613;
			this.ident();
			this.state = 615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.T__13) {
				{
				this.state = 614;
				this.formalParameters();
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, m2pim4Parser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 620;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (m2pim4Parser.CONST - 33)) | (1 << (m2pim4Parser.MODULE - 33)) | (1 << (m2pim4Parser.PROCEDURE - 33)) | (1 << (m2pim4Parser.TYPE - 33)))) !== 0) || _la === m2pim4Parser.VAR) {
				{
				{
				this.state = 617;
				this.declaration();
				}
				}
				this.state = 622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.BEGIN) {
				{
				this.state = 623;
				this.match(m2pim4Parser.BEGIN);
				this.state = 624;
				this.statementSequence();
				}
			}

			this.state = 627;
			this.match(m2pim4Parser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 124, m2pim4Parser.RULE_declaration);
		let _la: number;
		try {
			this.state = 662;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case m2pim4Parser.CONST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 629;
				this.match(m2pim4Parser.CONST);
				this.state = 635;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === m2pim4Parser.IDENT) {
					{
					{
					this.state = 630;
					this.constantDeclaration();
					this.state = 631;
					this.match(m2pim4Parser.T__22);
					}
					}
					this.state = 637;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case m2pim4Parser.TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 638;
				this.match(m2pim4Parser.TYPE);
				this.state = 644;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === m2pim4Parser.IDENT) {
					{
					{
					this.state = 639;
					this.typeDeclaration();
					this.state = 640;
					this.match(m2pim4Parser.T__22);
					}
					}
					this.state = 646;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case m2pim4Parser.VAR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 647;
				this.match(m2pim4Parser.VAR);
				this.state = 653;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === m2pim4Parser.IDENT) {
					{
					{
					this.state = 648;
					this.variableDeclaration();
					this.state = 649;
					this.match(m2pim4Parser.T__22);
					}
					}
					this.state = 655;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case m2pim4Parser.PROCEDURE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 656;
				this.procedureDeclaration();
				this.state = 657;
				this.match(m2pim4Parser.T__22);
				}
				break;
			case m2pim4Parser.MODULE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 659;
				this.moduleDeclaration();
				this.state = 660;
				this.match(m2pim4Parser.T__22);
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
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, m2pim4Parser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 664;
			this.match(m2pim4Parser.T__13);
			this.state = 673;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.VAR || _la === m2pim4Parser.IDENT) {
				{
				this.state = 665;
				this.fpSection();
				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === m2pim4Parser.T__22) {
					{
					{
					this.state = 666;
					this.match(m2pim4Parser.T__22);
					this.state = 667;
					this.fpSection();
					}
					}
					this.state = 672;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 675;
			this.match(m2pim4Parser.T__14);
			this.state = 678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.T__23) {
				{
				this.state = 676;
				this.match(m2pim4Parser.T__23);
				this.state = 677;
				this.qualident();
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
	public fpSection(): FpSectionContext {
		let _localctx: FpSectionContext = new FpSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, m2pim4Parser.RULE_fpSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.VAR) {
				{
				this.state = 680;
				this.match(m2pim4Parser.VAR);
				}
			}

			this.state = 683;
			this.identList();
			this.state = 684;
			this.match(m2pim4Parser.T__23);
			this.state = 685;
			this.formalType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalType(): FormalTypeContext {
		let _localctx: FormalTypeContext = new FormalTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, m2pim4Parser.RULE_formalType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 689;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.ARRAY) {
				{
				this.state = 687;
				this.match(m2pim4Parser.ARRAY);
				this.state = 688;
				this.match(m2pim4Parser.OF);
				}
			}

			this.state = 691;
			this.qualident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleDeclaration(): ModuleDeclarationContext {
		let _localctx: ModuleDeclarationContext = new ModuleDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, m2pim4Parser.RULE_moduleDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 693;
			this.match(m2pim4Parser.MODULE);
			this.state = 694;
			this.ident();
			this.state = 696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.T__20) {
				{
				this.state = 695;
				this.priority();
				}
			}

			this.state = 698;
			this.match(m2pim4Parser.T__22);
			this.state = 702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === m2pim4Parser.FROM || _la === m2pim4Parser.IMPORT) {
				{
				{
				this.state = 699;
				this.importList();
				}
				}
				this.state = 704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 706;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.EXPORT) {
				{
				this.state = 705;
				this.exportList();
				}
			}

			this.state = 708;
			this.block();
			this.state = 709;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public priority(): PriorityContext {
		let _localctx: PriorityContext = new PriorityContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, m2pim4Parser.RULE_priority);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 711;
			this.match(m2pim4Parser.T__20);
			this.state = 712;
			this.constExpression();
			this.state = 713;
			this.match(m2pim4Parser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exportList(): ExportListContext {
		let _localctx: ExportListContext = new ExportListContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, m2pim4Parser.RULE_exportList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 715;
			this.match(m2pim4Parser.EXPORT);
			this.state = 717;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.QUALIFIED) {
				{
				this.state = 716;
				this.match(m2pim4Parser.QUALIFIED);
				}
			}

			this.state = 719;
			this.identList();
			this.state = 720;
			this.match(m2pim4Parser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importList(): ImportListContext {
		let _localctx: ImportListContext = new ImportListContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, m2pim4Parser.RULE_importList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.FROM) {
				{
				this.state = 722;
				this.match(m2pim4Parser.FROM);
				this.state = 723;
				this.ident();
				}
			}

			this.state = 726;
			this.match(m2pim4Parser.IMPORT);
			this.state = 727;
			this.identList();
			this.state = 728;
			this.match(m2pim4Parser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definitionModule(): DefinitionModuleContext {
		let _localctx: DefinitionModuleContext = new DefinitionModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, m2pim4Parser.RULE_definitionModule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 730;
			this.match(m2pim4Parser.DEFINITION);
			this.state = 731;
			this.match(m2pim4Parser.MODULE);
			this.state = 732;
			this.ident();
			this.state = 733;
			this.match(m2pim4Parser.T__22);
			this.state = 737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === m2pim4Parser.FROM || _la === m2pim4Parser.IMPORT) {
				{
				{
				this.state = 734;
				this.importList();
				}
				}
				this.state = 739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 741;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.EXPORT) {
				{
				this.state = 740;
				this.exportList();
				}
			}

			this.state = 746;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (m2pim4Parser.CONST - 33)) | (1 << (m2pim4Parser.PROCEDURE - 33)) | (1 << (m2pim4Parser.TYPE - 33)))) !== 0) || _la === m2pim4Parser.VAR) {
				{
				{
				this.state = 743;
				this.definition();
				}
				}
				this.state = 748;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 749;
			this.match(m2pim4Parser.END);
			this.state = 750;
			this.ident();
			this.state = 751;
			this.match(m2pim4Parser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, m2pim4Parser.RULE_definition);
		let _la: number;
		try {
			this.state = 787;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case m2pim4Parser.CONST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 753;
				this.match(m2pim4Parser.CONST);
				this.state = 759;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === m2pim4Parser.IDENT) {
					{
					{
					this.state = 754;
					this.constantDeclaration();
					this.state = 755;
					this.match(m2pim4Parser.T__22);
					}
					}
					this.state = 761;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case m2pim4Parser.TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 762;
				this.match(m2pim4Parser.TYPE);
				this.state = 772;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === m2pim4Parser.IDENT) {
					{
					{
					this.state = 763;
					this.ident();
					this.state = 766;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === m2pim4Parser.T__1) {
						{
						this.state = 764;
						this.match(m2pim4Parser.T__1);
						this.state = 765;
						this.type();
						}
					}

					this.state = 768;
					this.match(m2pim4Parser.T__22);
					}
					}
					this.state = 774;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case m2pim4Parser.VAR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 775;
				this.match(m2pim4Parser.VAR);
				this.state = 781;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === m2pim4Parser.IDENT) {
					{
					{
					this.state = 776;
					this.variableDeclaration();
					this.state = 777;
					this.match(m2pim4Parser.T__22);
					}
					}
					this.state = 783;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case m2pim4Parser.PROCEDURE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 784;
				this.procedureHeading();
				this.state = 785;
				this.match(m2pim4Parser.T__22);
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
	public programModule(): ProgramModuleContext {
		let _localctx: ProgramModuleContext = new ProgramModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, m2pim4Parser.RULE_programModule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.match(m2pim4Parser.MODULE);
			this.state = 790;
			this.ident();
			this.state = 792;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === m2pim4Parser.T__20) {
				{
				this.state = 791;
				this.priority();
				}
			}

			this.state = 794;
			this.match(m2pim4Parser.T__22);
			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === m2pim4Parser.FROM || _la === m2pim4Parser.IMPORT) {
				{
				{
				this.state = 795;
				this.importList();
				}
				}
				this.state = 800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 801;
			this.block();
			this.state = 802;
			this.ident();
			this.state = 803;
			this.match(m2pim4Parser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, m2pim4Parser.RULE_compilationUnit);
		let _la: number;
		try {
			this.state = 810;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case m2pim4Parser.DEFINITION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 805;
				this.definitionModule();
				}
				break;
			case m2pim4Parser.IMPLEMENTATION:
			case m2pim4Parser.MODULE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 807;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === m2pim4Parser.IMPLEMENTATION) {
					{
					this.state = 806;
					this.match(m2pim4Parser.IMPLEMENTATION);
					}
				}

				this.state = 809;
				this.programModule();
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03O\u032F\x04\x02" +
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
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x07\v\xAC\n\v\f\v\x0E" +
		"\v\xAF\v\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x05\r\xB9\n" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\xC4\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xC9\n\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xCF\n\x0F\f\x0F\x0E\x0F\xD2\v\x0F\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xDA\n\x11\f\x11\x0E" +
		"\x11\xDD\v\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xEB\n\x13\x03\x13\x05" +
		"\x13\xEE\n\x13\x03\x14\x03\x14\x03\x14\x05\x14\xF3\n\x14\x05\x14\xF5\n" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\xFB\n\x15\f\x15\x0E\x15\xFE" +
		"\v\x15\x05\x15\u0100\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\u0107\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x05\x18\u0113\n\x18\x03\x19\x03\x19\x03\x19\x05" +
		"\x19\u0118\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x07\x1B\u0121\n\x1B\f\x1B\x0E\x1B\u0124\v\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0130" +
		"\n\x1D\f\x1D\x0E\x1D\u0133\v\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u013F\n\x1F\f\x1F\x0E" +
		"\x1F\u0142\v\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u014D" +
		"\n \x03 \x05 \u0150\n \x03 \x03 \x03 \x03 \x07 \u0156\n \f \x0E \u0159" +
		"\v \x03 \x03 \x05 \u015D\n \x03 \x03 \x05 \u0161\n \x03!\x03!\x03!\x03" +
		"!\x03\"\x03\"\x03\"\x07\"\u016A\n\"\f\"\x0E\"\u016D\v\"\x03#\x03#\x03" +
		"#\x05#\u0172\n#\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03&\x03&\x05" +
		"&\u017E\n&\x03\'\x03\'\x05\'\u0182\n\'\x03\'\x03\'\x03\'\x05\'\u0187\n" +
		"\'\x03\'\x07\'\u018A\n\'\f\'\x0E\'\u018D\v\'\x05\'\u018F\n\'\x03\'\x03" +
		"\'\x03\'\x05\'\u0194\n\'\x03(\x03(\x03(\x03(\x03)\x03)\x05)\u019C\n)\x03" +
		"*\x03*\x03*\x03*\x03*\x05*\u01A3\n*\x03*\x03*\x07*\u01A7\n*\f*\x0E*\u01AA" +
		"\v*\x06*\u01AC\n*\r*\x0E*\u01AD\x03+\x03+\x03+\x07+\u01B3\n+\f+\x0E+\u01B6" +
		"\v+\x03,\x03,\x03,\x03,\x05,\u01BC\n,\x03-\x03-\x03-\x05-\u01C1\n-\x03" +
		"-\x03-\x03-\x03-\x07-\u01C7\n-\f-\x0E-\u01CA\v-\x03.\x03.\x03.\x03.\x07" +
		".\u01D0\n.\f.\x0E.\u01D3\v.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x05/\u01DF\n/\x03/\x05/\u01E2\n/\x030\x030\x030\x030\x050\u01E8" +
		"\n0\x030\x050\u01EB\n0\x050\u01ED\n0\x050\u01EF\n0\x031\x031\x051\u01F3" +
		"\n1\x031\x031\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x05" +
		"2\u0202\n2\x052\u0204\n2\x033\x033\x033\x033\x053\u020A\n3\x053\u020C" +
		"\n3\x034\x034\x034\x074\u0211\n4\f4\x0E4\u0214\v4\x035\x035\x035\x035" +
		"\x035\x035\x035\x035\x035\x075\u021F\n5\f5\x0E5\u0222\v5\x035\x035\x05" +
		"5\u0226\n5\x035\x035\x036\x036\x036\x036\x036\x036\x076\u0230\n6\f6\x0E" +
		"6\u0233\v6\x036\x036\x056\u0237\n6\x036\x036\x037\x037\x037\x037\x038" +
		"\x038\x038\x038\x038\x038\x039\x039\x039\x039\x039\x03:\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x05:\u0252\n:\x03:\x03:\x03:\x03:\x03;\x03;\x03" +
		";\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03>\x03" +
		">\x03>\x05>\u026A\n>\x03?\x07?\u026D\n?\f?\x0E?\u0270\v?\x03?\x03?\x05" +
		"?\u0274\n?\x03?\x03?\x03@\x03@\x03@\x03@\x07@\u027C\n@\f@\x0E@\u027F\v" +
		"@\x03@\x03@\x03@\x03@\x07@\u0285\n@\f@\x0E@\u0288\v@\x03@\x03@\x03@\x03" +
		"@\x07@\u028E\n@\f@\x0E@\u0291\v@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u0299" +
		"\n@\x03A\x03A\x03A\x03A\x07A\u029F\nA\fA\x0EA\u02A2\vA\x05A\u02A4\nA\x03" +
		"A\x03A\x03A\x05A\u02A9\nA\x03B\x05B\u02AC\nB\x03B\x03B\x03B\x03B\x03C" +
		"\x03C\x05C\u02B4\nC\x03C\x03C\x03D\x03D\x03D\x05D\u02BB\nD\x03D\x03D\x07" +
		"D\u02BF\nD\fD\x0ED\u02C2\vD\x03D\x05D\u02C5\nD\x03D\x03D\x03D\x03E\x03" +
		"E\x03E\x03E\x03F\x03F\x05F\u02D0\nF\x03F\x03F\x03F\x03G\x03G\x05G\u02D7" +
		"\nG\x03G\x03G\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x07H\u02E2\nH\fH\x0E" +
		"H\u02E5\vH\x03H\x05H\u02E8\nH\x03H\x07H\u02EB\nH\fH\x0EH\u02EE\vH\x03" +
		"H\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x07I\u02F8\nI\fI\x0EI\u02FB\vI\x03" +
		"I\x03I\x03I\x03I\x05I\u0301\nI\x03I\x03I\x07I\u0305\nI\fI\x0EI\u0308\v" +
		"I\x03I\x03I\x03I\x03I\x07I\u030E\nI\fI\x0EI\u0311\vI\x03I\x03I\x03I\x05" +
		"I\u0316\nI\x03J\x03J\x03J\x05J\u031B\nJ\x03J\x03J\x07J\u031F\nJ\fJ\x0E" +
		"J\u0322\vJ\x03J\x03J\x03J\x03J\x03K\x03K\x05K\u032A\nK\x03K\x05K\u032D" +
		"\nK\x03K\x02\x02\x02L\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
		"Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02" +
		"v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A" +
		"\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x02\x05\x03\x02GH\x04\x02" +
		"\v\f77\x06\x02\r\x0F\x1E\x1E%%33\x02\u035C\x02\x96\x03\x02\x02\x02\x04" +
		"\x98\x03\x02\x02\x02\x06\x9A\x03\x02\x02\x02\b\x9C\x03\x02\x02\x02\n\x9E" +
		"\x03\x02\x02\x02\f\xA0\x03\x02\x02\x02\x0E\xA2\x03\x02\x02\x02\x10\xA4" +
		"\x03\x02\x02\x02\x12\xA6\x03\x02\x02\x02\x14\xA8\x03\x02\x02\x02\x16\xB0" +
		"\x03\x02\x02\x02\x18\xB4\x03\x02\x02\x02\x1A\xC3\x03\x02\x02\x02\x1C\xC8" +
		"\x03\x02\x02\x02\x1E\xD3\x03\x02\x02\x02 \xD5\x03\x02\x02\x02\"\xDE\x03" +
		"\x02\x02\x02$\xED\x03\x02\x02\x02&\xF4\x03\x02\x02\x02(\xF6\x03\x02\x02" +
		"\x02*\u0103\x03\x02\x02\x02,\u0108\x03\x02\x02\x02.\u0112\x03\x02\x02" +
		"\x020\u0117\x03\x02\x02\x022\u0119\x03\x02\x02\x024\u011D\x03\x02\x02" +
		"\x026\u0125\x03\x02\x02\x028\u012B\x03\x02\x02\x02:\u0137\x03\x02\x02" +
		"\x02<\u013B\x03\x02\x02\x02>\u0160\x03\x02\x02\x02@\u0162\x03\x02\x02" +
		"\x02B\u0166\x03\x02\x02\x02D\u016E\x03\x02\x02\x02F\u0173\x03\x02\x02" +
		"\x02H\u0177\x03\x02\x02\x02J\u017B\x03\x02\x02\x02L\u017F\x03\x02\x02" +
		"\x02N\u0195\x03\x02\x02\x02P\u0199\x03\x02\x02\x02R\u01AB\x03\x02\x02" +
		"\x02T\u01AF\x03\x02\x02\x02V\u01B7\x03\x02\x02\x02X\u01C0\x03\x02\x02" +
		"\x02Z\u01CB\x03\x02\x02\x02\\\u01E1\x03\x02\x02\x02^\u01EE\x03\x02\x02" +
		"\x02`\u01F0\x03\x02\x02\x02b\u0203\x03\x02\x02\x02d\u0205\x03\x02\x02" +
		"\x02f\u020D\x03\x02\x02\x02h\u0215\x03\x02\x02\x02j\u0229\x03\x02\x02" +
		"\x02l\u023A\x03\x02\x02\x02n\u023E\x03\x02\x02\x02p\u0244\x03\x02\x02" +
		"\x02r\u0249\x03\x02\x02\x02t\u0257\x03\x02\x02\x02v\u025B\x03\x02\x02" +
		"\x02x\u0261\x03\x02\x02\x02z\u0266\x03\x02\x02\x02|\u026E\x03\x02\x02" +
		"\x02~\u0298\x03\x02\x02\x02\x80\u029A\x03\x02\x02\x02\x82\u02AB\x03\x02" +
		"\x02\x02\x84\u02B3\x03\x02\x02\x02\x86\u02B7\x03\x02\x02\x02\x88\u02C9" +
		"\x03\x02\x02\x02\x8A\u02CD\x03\x02\x02\x02\x8C\u02D6\x03\x02\x02\x02\x8E" +
		"\u02DC\x03\x02\x02\x02\x90\u0315\x03\x02\x02\x02\x92\u0317\x03\x02\x02" +
		"\x02\x94\u032C\x03\x02\x02\x02\x96\x97\x07F\x02\x02\x97\x03\x03\x02\x02" +
		"\x02\x98\x99\t\x02\x02\x02\x99\x05\x03\x02\x02\x02\x9A\x9B\x07G\x02\x02" +
		"\x9B\x07\x03\x02\x02\x02\x9C\x9D\x07H\x02\x02\x9D\t\x03\x02\x02\x02\x9E" +
		"\x9F\x07M\x02\x02\x9F\v\x03\x02\x02\x02\xA0\xA1\x07L\x02\x02\xA1\r\x03" +
		"\x02\x02\x02\xA2\xA3\x07J\x02\x02\xA3\x0F\x03\x02\x02\x02\xA4\xA5\x07" +
		"K\x02\x02\xA5\x11\x03\x02\x02\x02\xA6\xA7\x07I\x02\x02\xA7\x13\x03\x02" +
		"\x02\x02\xA8\xAD\x05\x02\x02\x02\xA9\xAA\x07\x03\x02\x02\xAA\xAC\x05\x02" +
		"\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02" +
		"\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\x15\x03\x02\x02\x02\xAF\xAD\x03\x02" +
		"\x02\x02\xB0\xB1\x05\x02\x02\x02\xB1\xB2\x07\x04\x02\x02\xB2\xB3\x05\x18" +
		"\r\x02\xB3\x17\x03\x02\x02\x02\xB4\xB8\x05\x1C\x0F\x02\xB5\xB6\x05\x1A" +
		"\x0E\x02\xB6\xB7\x05\x1C\x0F\x02\xB7\xB9\x03\x02\x02\x02\xB8\xB5\x03\x02" +
		"\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\x19\x03\x02\x02\x02\xBA\xC4\x07\x04" +
		"\x02\x02\xBB\xC4\x07\x05\x02\x02\xBC\xC4\x07\x06\x02\x02\xBD\xC4\x07\x07" +
		"\x02\x02\xBE\xC4\x07\b\x02\x02\xBF\xC4\x07\t\x02\x02\xC0\xC4\x07\n\x02" +
		"\x02\xC1\xC2\x071\x02\x02\xC2\xC4\b\x0E\x01\x02\xC3\xBA\x03\x02\x02\x02" +
		"\xC3\xBB\x03\x02\x02\x02\xC3\xBC\x03\x02\x02\x02\xC3\xBD\x03\x02\x02\x02" +
		"\xC3\xBE\x03\x02\x02\x02\xC3\xBF\x03\x02\x02\x02\xC3\xC0\x03\x02\x02\x02" +
		"\xC3\xC1\x03\x02\x02\x02\xC4\x1B\x03\x02\x02\x02\xC5\xC9\x07\v\x02\x02" +
		"\xC6\xC7\x07\f\x02\x02\xC7\xC9\b\x0F\x01\x02\xC8\xC5\x03\x02\x02\x02\xC8" +
		"\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA" +
		"\xD0\x05 \x11\x02\xCB\xCC\x05\x1E\x10\x02\xCC\xCD\x05 \x11\x02\xCD\xCF" +
		"\x03\x02\x02\x02\xCE\xCB\x03\x02\x02\x02\xCF\xD2\x03\x02\x02\x02\xD0\xCE" +
		"\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\x1D\x03\x02\x02\x02\xD2\xD0" +
		"\x03\x02\x02\x02\xD3\xD4\t\x03\x02\x02\xD4\x1F\x03\x02\x02\x02\xD5\xDB" +
		"\x05$\x13\x02\xD6\xD7\x05\"\x12\x02\xD7\xD8\x05$\x13\x02\xD8\xDA\x03\x02" +
		"\x02\x02\xD9\xD6\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02" +
		"\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC!\x03\x02\x02\x02\xDD\xDB\x03\x02" +
		"\x02\x02\xDE\xDF\t\x04\x02\x02\xDF#\x03\x02\x02\x02\xE0\xEE\x05\x04\x03" +
		"\x02\xE1\xEE\x05\x12\n\x02\xE2\xEE\x05&\x14\x02\xE3\xE4\x07\x10\x02\x02" +
		"\xE4\xE5\x05\x18\r\x02\xE5\xE6\x07\x11\x02\x02\xE6\xEE\x03\x02\x02\x02" +
		"\xE7\xEB\x075\x02\x02\xE8\xE9\x07\x12\x02\x02\xE9\xEB\b\x13\x01\x02\xEA" +
		"\xE7\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC" +
		"\xEE\x05$\x13\x02\xED\xE0\x03\x02\x02\x02\xED\xE1\x03\x02\x02\x02\xED" +
		"\xE2\x03\x02\x02\x02\xED\xE3\x03\x02\x02\x02\xED\xEA\x03\x02\x02\x02\xEE" +
		"%\x03\x02\x02\x02\xEF\xF5\x05(\x15\x02\xF0\xF2\x05\x14\v\x02\xF1\xF3\x05" +
		"(\x15\x02\xF2\xF1\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF5\x03" +
		"\x02\x02\x02\xF4\xEF\x03\x02\x02\x02\xF4\xF0\x03\x02\x02\x02\xF5\'\x03" +
		"\x02\x02\x02\xF6\xFF\x07\x13\x02\x02\xF7\xFC\x05*\x16\x02\xF8\xF9\x07" +
		"\x14\x02\x02\xF9\xFB\x05*\x16\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFE\x03" +
		"\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\u0100" +
		"\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFF\xF7\x03\x02\x02\x02\xFF\u0100" +
		"\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0102\x07\x15\x02\x02" +
		"\u0102)\x03\x02\x02\x02\u0103\u0106\x05\x18\r\x02\u0104\u0105\x07\x16" +
		"\x02\x02\u0105\u0107\x05\x18\r\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107" +
		"\x03\x02\x02\x02\u0107+\x03\x02\x02\x02\u0108\u0109\x05\x02\x02\x02\u0109" +
		"\u010A\x07\x04\x02\x02\u010A\u010B\x05.\x18\x02\u010B-\x03\x02\x02\x02" +
		"\u010C\u0113\x050\x19\x02\u010D\u0113\x058\x1D\x02\u010E\u0113\x05:\x1E" +
		"\x02\u010F\u0113\x05F$\x02\u0110\u0113\x05H%\x02\u0111\u0113\x05J&\x02" +
		"\u0112\u010C\x03\x02\x02\x02\u0112\u010D\x03\x02\x02\x02\u0112\u010E\x03" +
		"\x02\x02\x02\u0112\u010F\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0112" +
		"\u0111\x03\x02\x02\x02\u0113/\x03\x02\x02\x02\u0114\u0118\x05\x14\v\x02" +
		"\u0115\u0118\x052\x1A\x02\u0116\u0118\x056\x1C\x02\u0117\u0114\x03\x02" +
		"\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0116\x03\x02\x02\x02\u0118" +
		"1\x03\x02\x02\x02\u0119\u011A\x07\x10\x02\x02\u011A\u011B\x054\x1B\x02" +
		"\u011B\u011C\x07\x11\x02\x02\u011C3\x03\x02\x02\x02\u011D\u0122\x05\x02" +
		"\x02\x02\u011E\u011F\x07\x14\x02\x02\u011F\u0121\x05\x02\x02\x02\u0120" +
		"\u011E\x03\x02\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122\u0120\x03\x02" +
		"\x02\x02\u0122\u0123\x03\x02\x02\x02\u01235\x03\x02\x02\x02\u0124\u0122" +
		"\x03\x02\x02\x02\u0125\u0126\x07\x17\x02\x02\u0126\u0127\x05\x18\r\x02" +
		"\u0127\u0128\x07\x16\x02\x02\u0128\u0129\x05\x18\r\x02\u0129\u012A\x07" +
		"\x18\x02\x02\u012A7\x03\x02\x02\x02\u012B\u012C\x07\x1F\x02\x02\u012C" +
		"\u0131\x050\x19\x02\u012D\u012E\x07\x14\x02\x02\u012E\u0130\x050\x19\x02" +
		"\u012F\u012D\x03\x02\x02\x02\u0130\u0133\x03\x02\x02\x02\u0131\u012F\x03" +
		"\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0134\x03\x02\x02\x02\u0133" +
		"\u0131\x03\x02\x02\x02\u0134\u0135\x076\x02\x02\u0135\u0136\x05.\x18\x02" +
		"\u01369\x03\x02\x02\x02\u0137\u0138\x07;\x02\x02\u0138\u0139\x05<\x1F" +
		"\x02\u0139\u013A\x07)\x02\x02\u013A;\x03\x02\x02\x02\u013B\u0140\x05>" +
		" \x02\u013C\u013D\x07\x19\x02\x02\u013D\u013F\x05> \x02\u013E\u013C\x03" +
		"\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140" +
		"\u0141\x03\x02\x02\x02\u0141=\x03\x02\x02\x02\u0142\u0140\x03\x02\x02" +
		"\x02\u0143\u0144\x054\x1B\x02\u0144\u0145\x07\x1A\x02\x02\u0145\u0146" +
		"\x05.\x18\x02\u0146\u0161\x03\x02\x02\x02\u0147\u0148\x07\"\x02\x02\u0148" +
		"\u014F\x05\x02\x02\x02\u0149\u014D\x07\x1A\x02\x02\u014A\u014B\x07\x03" +
		"\x02\x02\u014B\u014D\b \x01\x02\u014C\u0149\x03\x02\x02\x02\u014C\u014A" +
		"\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u0150\x05\x14\v\x02" +
		"\u014F\u014C\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x03" +
		"\x02\x02\x02\u0151\u0152\x076\x02\x02\u0152\u0157\x05@!\x02\u0153\u0154" +
		"\x07\x1B\x02\x02\u0154\u0156\x05@!\x02\u0155\u0153\x03\x02\x02\x02\u0156" +
		"\u0159\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02" +
		"\x02\x02\u0158\u015C\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u015A" +
		"\u015B\x07\'\x02\x02\u015B\u015D\x05<\x1F\x02\u015C\u015A\x03\x02\x02" +
		"\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u015F" +
		"\x07)\x02\x02\u015F\u0161\x03\x02\x02\x02\u0160\u0143\x03\x02\x02\x02" +
		"\u0160\u0147\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161?\x03\x02" +
		"\x02\x02\u0162\u0163\x05B\"\x02\u0163\u0164\x07\x1A\x02\x02\u0164\u0165" +
		"\x05<\x1F\x02\u0165A\x03\x02\x02\x02\u0166\u016B\x05D#\x02\u0167\u0168" +
		"\x07\x14\x02\x02\u0168\u016A\x05D#\x02\u0169\u0167\x03\x02\x02\x02\u016A" +
		"\u016D\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02" +
		"\x02\x02\u016CC\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016E\u0171" +
		"\x05\x18\r\x02\u016F\u0170\x07\x16\x02\x02\u0170\u0172\x05\x18\r\x02\u0171" +
		"\u016F\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172E\x03\x02\x02" +
		"\x02\u0173\u0174\x07>\x02\x02\u0174\u0175\x076\x02\x02\u0175\u0176\x05" +
		"0\x19\x02\u0176G\x03\x02\x02\x02\u0177\u0178\x078\x02\x02\u0178\u0179" +
		"\x07@\x02\x02\u0179\u017A\x05.\x18\x02\u017AI\x03\x02\x02\x02\u017B\u017D" +
		"\x079\x02\x02\u017C\u017E\x05L\'\x02\u017D\u017C\x03\x02\x02\x02\u017D" +
		"\u017E\x03\x02\x02\x02\u017EK\x03\x02\x02\x02\u017F\u018E\x07\x10\x02" +
		"\x02\u0180\u0182\x07C\x02\x02\u0181\u0180\x03\x02\x02\x02\u0181\u0182" +
		"\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u018B\x05\x84C\x02" +
		"\u0184\u0186\x07\x14\x02\x02\u0185\u0187\x07C\x02\x02\u0186\u0185\x03" +
		"\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188" +
		"\u018A\x05\x84C\x02\u0189\u0184\x03\x02\x02\x02\u018A\u018D\x03\x02\x02" +
		"\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018F" +
		"\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018E\u0181\x03\x02\x02\x02" +
		"\u018E\u018F\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0193\x07" +
		"\x11\x02\x02\u0191\u0192\x07\x1A\x02\x02\u0192\u0194\x05\x14\v\x02\u0193" +
		"\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194M\x03\x02\x02" +
		"\x02\u0195\u0196\x054\x1B\x02\u0196\u0197\x07\x1A\x02\x02\u0197\u0198" +
		"\x05.\x18\x02\u0198O\x03\x02\x02\x02\u0199\u019B\x05\x14\v\x02\u019A\u019C" +
		"\x05R*\x02\u019B\u019A\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C" +
		"Q\x03\x02\x02\x02\u019D\u019E\x07\x17\x02\x02\u019E\u019F\x05T+\x02\u019F" +
		"\u01A0\x07\x18\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u01A3\x07\x1C" +
		"\x02\x02\u01A2\u019D\x03\x02\x02\x02\u01A2\u01A1\x03\x02\x02\x02\u01A3" +
		"\u01A8\x03\x02\x02\x02\u01A4\u01A5\x07\x03\x02\x02\u01A5\u01A7\x05\x02" +
		"\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A7\u01AA\x03\x02\x02\x02\u01A8" +
		"\u01A6\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AC\x03\x02" +
		"\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB\u01A2\x03\x02\x02\x02\u01AC" +
		"\u01AD\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AD\u01AE\x03\x02" +
		"\x02\x02\u01AES\x03\x02\x02\x02\u01AF\u01B4\x05V,\x02\u01B0\u01B1\x07" +
		"\x14\x02\x02\u01B1\u01B3\x05V,\x02\u01B2\u01B0\x03\x02\x02\x02\u01B3\u01B6" +
		"\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02" +
		"\u01B5U\x03\x02\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B7\u01BB\x05X-" +
		"\x02\u01B8\u01B9\x05\x1A\x0E\x02\u01B9\u01BA\x05X-\x02\u01BA\u01BC\x03" +
		"\x02\x02\x02\u01BB\u01B8\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC" +
		"W\x03\x02\x02\x02\u01BD\u01C1\x07\v\x02\x02\u01BE\u01BF\x07\f\x02\x02" +
		"\u01BF\u01C1\b-\x01\x02\u01C0\u01BD\x03\x02\x02\x02\u01C0\u01BE\x03\x02" +
		"\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2" +
		"\u01C8\x05Z.\x02\u01C3\u01C4\x05\x1E\x10\x02\u01C4\u01C5\x05Z.\x02\u01C5" +
		"\u01C7\x03\x02\x02\x02\u01C6\u01C3\x03\x02\x02\x02\u01C7\u01CA\x03\x02" +
		"\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9" +
		"Y\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CB\u01D1\x05\\/\x02\u01CC" +
		"\u01CD\x05\"\x12\x02\u01CD\u01CE\x05\\/\x02\u01CE\u01D0\x03\x02\x02\x02" +
		"\u01CF\u01CC\x03\x02\x02\x02\u01D0\u01D3\x03\x02\x02\x02\u01D1\u01CF\x03" +
		"\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2[\x03\x02\x02\x02\u01D3" +
		"\u01D1\x03\x02\x02\x02\u01D4\u01E2\x05\x04\x03\x02\u01D5\u01E2\x05\x12" +
		"\n\x02\u01D6\u01E2\x05^0\x02\u01D7\u01D8\x07\x10\x02\x02\u01D8\u01D9\x05" +
		"V,\x02\u01D9\u01DA\x07\x11\x02\x02\u01DA\u01E2\x03\x02\x02\x02\u01DB\u01DF" +
		"\x075\x02\x02\u01DC\u01DD\x07\x12\x02\x02\u01DD\u01DF\b/\x01\x02\u01DE" +
		"\u01DB\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01E0\x03\x02" +
		"\x02\x02\u01E0\u01E2\x05\\/\x02\u01E1\u01D4\x03\x02\x02\x02\u01E1\u01D5" +
		"\x03\x02\x02\x02\u01E1\u01D6\x03\x02\x02\x02\u01E1\u01D7\x03\x02\x02\x02" +
		"\u01E1\u01DE\x03\x02\x02\x02\u01E2]\x03\x02\x02\x02\u01E3\u01EF\x05(\x15" +
		"\x02\u01E4\u01EC\x05\x14\v\x02\u01E5\u01ED\x05(\x15\x02\u01E6\u01E8\x05" +
		"R*\x02\u01E7\u01E6\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01EA" +
		"\x03\x02\x02\x02\u01E9\u01EB\x05`1\x02\u01EA\u01E9\x03\x02\x02\x02\u01EA" +
		"\u01EB\x03\x02\x02\x02\u01EB\u01ED\x03\x02\x02\x02\u01EC\u01E5\x03\x02" +
		"\x02\x02\u01EC\u01E7\x03\x02\x02\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE" +
		"\u01E3\x03\x02\x02\x02\u01EE\u01E4\x03\x02\x02\x02\u01EF_\x03\x02\x02" +
		"\x02\u01F0\u01F2\x07\x10\x02\x02\u01F1\u01F3\x05T+\x02\u01F2\u01F1\x03" +
		"\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4" +
		"\u01F5\x07\x11\x02\x02\u01F5a\x03\x02\x02\x02\u01F6\u0204\x05d3\x02\u01F7" +
		"\u0204\x05h5\x02\u01F8\u0204\x05j6\x02\u01F9\u0204\x05n8\x02\u01FA\u0204" +
		"\x05p9\x02\u01FB\u0204\x05t;\x02\u01FC\u0204\x05r:\x02\u01FD\u0204\x05" +
		"v<\x02\u01FE\u0204\x07*\x02\x02\u01FF\u0201\x07=\x02\x02\u0200\u0202\x05" +
		"V,\x02\u0201\u0200\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0204" +
		"\x03\x02\x02\x02\u0203\u01F6\x03\x02\x02\x02\u0203\u01F7\x03\x02\x02\x02" +
		"\u0203\u01F8\x03\x02\x02\x02\u0203\u01F9\x03\x02\x02\x02\u0203\u01FA\x03" +
		"\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u0203\u01FB\x03\x02\x02\x02\u0203\u01FC\x03\x02\x02\x02\u0203" +
		"\u01FD\x03\x02\x02\x02\u0203\u01FE\x03\x02\x02\x02\u0203\u01FF\x03\x02" +
		"\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204c\x03\x02\x02\x02\u0205\u020B" +
		"\x05P)\x02\u0206\u0207\x07\x1D\x02\x02\u0207\u020C\x05V,\x02\u0208\u020A" +
		"\x05`1\x02\u0209\u0208\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A" +
		"\u020C\x03\x02\x02\x02\u020B\u0206\x03\x02\x02\x02\u020B\u0209\x03\x02" +
		"\x02\x02\u020Ce\x03\x02\x02\x02\u020D\u0212\x05b2\x02\u020E\u020F\x07" +
		"\x19\x02\x02\u020F\u0211\x05b2\x02\u0210\u020E\x03\x02\x02\x02\u0211\u0214" +
		"\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02" +
		"\u0213g\x03\x02\x02\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0216\x07.\x02" +
		"\x02\u0216\u0217\x05V,\x02\u0217\u0218\x07?\x02\x02\u0218\u0220\x05f4" +
		"\x02\u0219\u021A\x07(\x02\x02\u021A\u021B\x05V,\x02\u021B\u021C\x07?\x02" +
		"\x02\u021C\u021D\x05f4\x02\u021D\u021F\x03\x02\x02\x02\u021E\u0219\x03" +
		"\x02\x02\x02\u021F\u0222\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0220" +
		"\u0221\x03\x02\x02\x02\u0221\u0225\x03\x02\x02\x02\u0222\u0220\x03\x02" +
		"\x02\x02\u0223\u0224\x07\'\x02\x02\u0224\u0226\x05f4\x02\u0225\u0223\x03" +
		"\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227" +
		"\u0228\x07)\x02\x02\u0228i\x03\x02\x02\x02\u0229\u022A\x07\"\x02\x02\u022A" +
		"\u022B\x05V,\x02\u022B\u022C\x076\x02\x02\u022C\u0231\x05l7\x02\u022D" +
		"\u022E\x07\x1B\x02\x02\u022E\u0230\x05l7\x02\u022F\u022D\x03\x02\x02\x02" +
		"\u0230\u0233\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232\x03" +
		"\x02\x02\x02\u0232\u0236\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0234" +
		"\u0235\x07\'\x02\x02\u0235\u0237\x05f4\x02\u0236\u0234\x03\x02\x02\x02" +
		"\u0236\u0237\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\u0239\x07" +
		")\x02\x02\u0239k\x03\x02\x02\x02\u023A\u023B\x05B\"\x02\u023B\u023C\x07" +
		"\x1A\x02\x02\u023C\u023D\x05f4\x02\u023Dm\x03\x02\x02\x02\u023E\u023F" +
		"\x07D\x02\x02\u023F\u0240\x05V,\x02\u0240\u0241\x07&\x02\x02\u0241\u0242" +
		"\x05f4\x02\u0242\u0243\x07)\x02\x02\u0243o\x03\x02\x02\x02\u0244\u0245" +
		"\x07<\x02\x02\u0245\u0246\x05f4\x02\u0246\u0247\x07B\x02\x02\u0247\u0248" +
		"\x05V,\x02\u0248q\x03\x02\x02\x02\u0249\u024A\x07,\x02\x02\u024A\u024B" +
		"\x05\x02\x02\x02\u024B\u024C\x07\x1D\x02\x02\u024C\u024D\x05V,\x02\u024D" +
		"\u024E\x07@\x02\x02\u024E\u0251\x05V,\x02\u024F\u0250\x07!\x02\x02\u0250" +
		"\u0252\x05\x18\r\x02\u0251\u024F\x03\x02\x02\x02\u0251\u0252\x03\x02\x02" +
		"\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0254\x07&\x02\x02\u0254\u0255" +
		"\x05f4\x02\u0255\u0256\x07)\x02\x02\u0256s\x03\x02\x02\x02\u0257\u0258" +
		"\x072\x02\x02\u0258\u0259\x05f4\x02\u0259\u025A\x07)\x02\x02\u025Au\x03" +
		"\x02\x02\x02\u025B\u025C\x07E\x02\x02\u025C\u025D\x05P)\x02\u025D\u025E" +
		"\x07&\x02\x02\u025E\u025F\x05f4\x02\u025F\u0260\x07)\x02\x02\u0260w\x03" +
		"\x02\x02\x02\u0261\u0262\x05z>\x02\u0262\u0263\x07\x19\x02\x02\u0263\u0264" +
		"\x05|?\x02\u0264\u0265\x05\x02\x02\x02\u0265y\x03\x02\x02\x02\u0266\u0267" +
		"\x079\x02\x02\u0267\u0269\x05\x02\x02\x02\u0268\u026A\x05\x80A\x02\u0269" +
		"\u0268\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A{\x03\x02\x02" +
		"\x02\u026B\u026D\x05~@\x02\u026C\u026B\x03\x02\x02\x02\u026D\u0270\x03" +
		"\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F" +
		"\u0273\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0271\u0272\x07 \x02" +
		"\x02\u0272\u0274\x05f4\x02\u0273\u0271\x03\x02\x02\x02\u0273\u0274\x03" +
		"\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0276\x07)\x02\x02\u0276" +
		"}\x03\x02\x02\x02\u0277\u027D\x07#\x02\x02\u0278\u0279\x05\x16\f\x02\u0279" +
		"\u027A\x07\x19\x02\x02\u027A\u027C\x03\x02\x02\x02\u027B\u0278\x03\x02" +
		"\x02\x02\u027C\u027F\x03\x02\x02\x02\u027D\u027B\x03\x02\x02\x02\u027D" +
		"\u027E\x03\x02\x02\x02\u027E\u0299\x03\x02\x02\x02\u027F\u027D\x03\x02" +
		"\x02\x02\u0280\u0286\x07A\x02\x02\u0281\u0282\x05,\x17\x02\u0282\u0283" +
		"\x07\x19\x02\x02\u0283\u0285\x03\x02\x02\x02\u0284\u0281\x03\x02\x02\x02" +
		"\u0285\u0288\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02\u0286\u0287\x03" +
		"\x02\x02\x02\u0287\u0299\x03\x02\x02\x02\u0288\u0286\x03\x02\x02\x02\u0289" +
		"\u028F\x07C\x02\x02\u028A\u028B\x05N(\x02\u028B\u028C\x07\x19\x02\x02" +
		"\u028C\u028E\x03\x02\x02\x02\u028D\u028A\x03\x02\x02\x02\u028E\u0291\x03" +
		"\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290" +
		"\u0299\x03\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0292\u0293\x05x=\x02" +
		"\u0293\u0294\x07\x19\x02\x02\u0294\u0299\x03\x02\x02\x02\u0295\u0296\x05" +
		"\x86D\x02\u0296\u0297\x07\x19\x02\x02\u0297\u0299\x03\x02\x02\x02\u0298" +
		"\u0277\x03\x02\x02\x02\u0298\u0280\x03\x02\x02\x02\u0298\u0289\x03\x02" +
		"\x02\x02\u0298\u0292\x03\x02\x02\x02\u0298\u0295\x03\x02\x02\x02\u0299" +
		"\x7F\x03\x02\x02\x02\u029A\u02A3\x07\x10\x02\x02\u029B\u02A0\x05\x82B" +
		"\x02\u029C\u029D\x07\x19\x02\x02\u029D\u029F\x05\x82B\x02\u029E\u029C" +
		"\x03\x02\x02\x02\u029F\u02A2\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02" +
		"\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A4\x03\x02\x02\x02\u02A2\u02A0\x03" +
		"\x02\x02\x02\u02A3\u029B\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4" +
		"\u02A5\x03\x02\x02\x02\u02A5\u02A8\x07\x11\x02\x02\u02A6\u02A7\x07\x1A" +
		"\x02\x02\u02A7\u02A9\x05\x14\v\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9" +
		"\x03\x02\x02\x02\u02A9\x81\x03\x02\x02\x02\u02AA\u02AC\x07C\x02\x02\u02AB" +
		"\u02AA\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02AD\x03\x02" +
		"\x02\x02\u02AD\u02AE\x054\x1B\x02\u02AE\u02AF\x07\x1A\x02\x02\u02AF\u02B0" +
		"\x05\x84C\x02\u02B0\x83\x03\x02\x02\x02\u02B1\u02B2\x07\x1F\x02\x02\u02B2" +
		"\u02B4\x076\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B3\u02B4\x03\x02\x02" +
		"\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B6\x05\x14\v\x02\u02B6\x85\x03" +
		"\x02\x02\x02\u02B7\u02B8\x074\x02\x02\u02B8\u02BA\x05\x02\x02\x02\u02B9" +
		"\u02BB\x05\x88E\x02\u02BA\u02B9\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02" +
		"\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02C0\x07\x19\x02\x02\u02BD\u02BF" +
		"\x05\x8CG\x02\u02BE\u02BD\x03\x02\x02\x02\u02BF\u02C2\x03\x02\x02\x02" +
		"\u02C0\u02BE\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C4\x03" +
		"\x02\x02\x02\u02C2\u02C0\x03\x02\x02\x02\u02C3\u02C5\x05\x8AF\x02\u02C4" +
		"\u02C3\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02C6\x03\x02" +
		"\x02\x02\u02C6\u02C7\x05|?\x02\u02C7\u02C8\x05\x02\x02\x02\u02C8\x87\x03" +
		"\x02\x02\x02\u02C9\u02CA\x07\x17\x02\x02\u02CA\u02CB\x05\x18\r\x02\u02CB" +
		"\u02CC\x07\x18\x02\x02\u02CC\x89\x03\x02\x02\x02\u02CD\u02CF\x07+\x02" +
		"\x02\u02CE\u02D0\x07:\x02\x02\u02CF\u02CE\x03\x02\x02\x02\u02CF\u02D0" +
		"\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D2\x054\x1B\x02" +
		"\u02D2\u02D3\x07\x19\x02\x02\u02D3\x8B\x03\x02\x02\x02\u02D4\u02D5\x07" +
		"-\x02\x02\u02D5\u02D7\x05\x02\x02\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6" +
		"\u02D7\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x070\x02" +
		"\x02\u02D9\u02DA\x054\x1B\x02\u02DA\u02DB\x07\x19\x02\x02\u02DB\x8D\x03" +
		"\x02\x02\x02\u02DC\u02DD\x07$\x02\x02\u02DD\u02DE\x074\x02\x02\u02DE\u02DF" +
		"\x05\x02\x02\x02\u02DF\u02E3\x07\x19\x02\x02\u02E0\u02E2\x05\x8CG\x02" +
		"\u02E1\u02E0\x03\x02\x02\x02\u02E2\u02E5\x03\x02\x02\x02\u02E3\u02E1\x03" +
		"\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E7\x03\x02\x02\x02\u02E5" +
		"\u02E3\x03\x02\x02\x02\u02E6\u02E8\x05\x8AF\x02\u02E7\u02E6\x03\x02\x02" +
		"\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8\u02EC\x03\x02\x02\x02\u02E9\u02EB" +
		"\x05\x90I\x02\u02EA\u02E9\x03\x02\x02\x02\u02EB\u02EE\x03\x02\x02\x02" +
		"\u02EC\u02EA\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02EF\x03" +
		"\x02\x02\x02\u02EE\u02EC\x03\x02\x02\x02\u02EF\u02F0\x07)\x02\x02\u02F0" +
		"\u02F1\x05\x02\x02\x02\u02F1\u02F2\x07\x03\x02\x02\u02F2\x8F\x03\x02\x02" +
		"\x02\u02F3\u02F9\x07#\x02\x02\u02F4\u02F5\x05\x16\f\x02\u02F5\u02F6\x07" +
		"\x19\x02\x02\u02F6\u02F8\x03\x02\x02\x02\u02F7\u02F4\x03\x02\x02\x02\u02F8" +
		"\u02FB\x03\x02\x02\x02\u02F9\u02F7\x03\x02\x02\x02\u02F9\u02FA\x03\x02" +
		"\x02\x02\u02FA\u0316\x03\x02\x02\x02\u02FB\u02F9\x03\x02\x02\x02\u02FC" +
		"\u0306\x07A\x02\x02\u02FD\u0300\x05\x02\x02\x02\u02FE\u02FF\x07\x04\x02" +
		"\x02\u02FF\u0301\x05.\x18\x02\u0300\u02FE\x03\x02\x02\x02\u0300\u0301" +
		"\x03\x02\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302\u0303\x07\x19\x02\x02" +
		"\u0303\u0305\x03\x02\x02\x02\u0304\u02FD\x03\x02\x02\x02\u0305\u0308\x03" +
		"\x02\x02\x02\u0306\u0304\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307" +
		"\u0316\x03\x02\x02\x02\u0308\u0306\x03\x02\x02\x02\u0309\u030F\x07C\x02" +
		"\x02\u030A\u030B\x05N(\x02\u030B\u030C\x07\x19\x02\x02\u030C\u030E\x03" +
		"\x02\x02\x02\u030D\u030A\x03\x02\x02\x02\u030E\u0311\x03\x02\x02\x02\u030F" +
		"\u030D\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02\u0310\u0316\x03\x02" +
		"\x02\x02\u0311\u030F\x03\x02\x02\x02\u0312\u0313\x05z>\x02\u0313\u0314" +
		"\x07\x19\x02\x02\u0314\u0316\x03\x02\x02\x02\u0315\u02F3\x03\x02\x02\x02" +
		"\u0315\u02FC\x03\x02\x02\x02\u0315\u0309\x03\x02\x02\x02\u0315\u0312\x03" +
		"\x02\x02\x02\u0316\x91\x03\x02\x02\x02\u0317\u0318\x074\x02\x02\u0318" +
		"\u031A\x05\x02\x02\x02\u0319\u031B\x05\x88E\x02\u031A\u0319\x03\x02\x02" +
		"\x02\u031A\u031B\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C\u0320" +
		"\x07\x19\x02\x02\u031D\u031F\x05\x8CG\x02\u031E\u031D\x03\x02\x02\x02" +
		"\u031F\u0322\x03\x02\x02\x02\u0320\u031E\x03\x02\x02\x02\u0320\u0321\x03" +
		"\x02\x02\x02\u0321\u0323\x03\x02\x02\x02\u0322\u0320\x03\x02\x02\x02\u0323" +
		"\u0324\x05|?\x02\u0324\u0325\x05\x02\x02\x02\u0325\u0326\x07\x03\x02\x02" +
		"\u0326\x93\x03\x02\x02\x02\u0327\u032D\x05\x8EH\x02\u0328\u032A\x07/\x02" +
		"\x02\u0329\u0328\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A\u032B" +
		"\x03\x02\x02\x02\u032B\u032D\x05\x92J\x02\u032C\u0327\x03\x02\x02\x02" +
		"\u032C\u0329\x03\x02\x02\x02\u032D\x95\x03\x02\x02\x02X\xAD\xB8\xC3\xC8" +
		"\xD0\xDB\xEA\xED\xF2\xF4\xFC\xFF\u0106\u0112\u0117\u0122\u0131\u0140\u014C" +
		"\u014F\u0157\u015C\u0160\u016B\u0171\u017D\u0181\u0186\u018B\u018E\u0193" +
		"\u019B\u01A2\u01A8\u01AD\u01B4\u01BB\u01C0\u01C8\u01D1\u01DE\u01E1\u01E7" +
		"\u01EA\u01EC\u01EE\u01F2\u0201\u0203\u0209\u020B\u0212\u0220\u0225\u0231" +
		"\u0236\u0251\u0269\u026E\u0273\u027D\u0286\u028F\u0298\u02A0\u02A3\u02A8" +
		"\u02AB\u02B3\u02BA\u02C0\u02C4\u02CF\u02D6\u02E3\u02E7\u02EC\u02F9\u0300" +
		"\u0306\u030F\u0315\u031A\u0320\u0329\u032C";
	public static readonly _serializedATN: string = Utils.join(
		[
			m2pim4Parser._serializedATNSegment0,
			m2pim4Parser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!m2pim4Parser.__ATN) {
			m2pim4Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(m2pim4Parser._serializedATN));
		}

		return m2pim4Parser.__ATN;
	}

}

export class IdentContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(m2pim4Parser.IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_ident; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterIdent) {
			listener.enterIdent(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitIdent) {
			listener.exitIdent(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.INTEGER, 0); }
	public REAL(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.REAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_number; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(m2pim4Parser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_integer; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
}


export class RealContext extends ParserRuleContext {
	public REAL(): TerminalNode { return this.getToken(m2pim4Parser.REAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_real; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterReal) {
			listener.enterReal(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitReal) {
			listener.exitReal(this);
		}
	}
}


export class ScaleFactorContext extends ParserRuleContext {
	public SCALE_FACTOR(): TerminalNode { return this.getToken(m2pim4Parser.SCALE_FACTOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_scaleFactor; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterScaleFactor) {
			listener.enterScaleFactor(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitScaleFactor) {
			listener.exitScaleFactor(this);
		}
	}
}


export class HexDigitContext extends ParserRuleContext {
	public HEX_DIGIT(): TerminalNode { return this.getToken(m2pim4Parser.HEX_DIGIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_hexDigit; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterHexDigit) {
			listener.enterHexDigit(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitHexDigit) {
			listener.exitHexDigit(this);
		}
	}
}


export class DigitContext extends ParserRuleContext {
	public DIGIT(): TerminalNode { return this.getToken(m2pim4Parser.DIGIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_digit; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterDigit) {
			listener.enterDigit(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitDigit) {
			listener.exitDigit(this);
		}
	}
}


export class OctalDigitContext extends ParserRuleContext {
	public OCTAL_DIGIT(): TerminalNode { return this.getToken(m2pim4Parser.OCTAL_DIGIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_octalDigit; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterOctalDigit) {
			listener.enterOctalDigit(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitOctalDigit) {
			listener.exitOctalDigit(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(m2pim4Parser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_string; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class QualidentContext extends ParserRuleContext {
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_qualident; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterQualident) {
			listener.enterQualident(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitQualident) {
			listener.exitQualident(this);
		}
	}
}


export class ConstantDeclarationContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public constExpression(): ConstExpressionContext {
		return this.getRuleContext(0, ConstExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_constantDeclaration; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterConstantDeclaration) {
			listener.enterConstantDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitConstantDeclaration) {
			listener.exitConstantDeclaration(this);
		}
	}
}


export class ConstExpressionContext extends ParserRuleContext {
	public simpleConstExpr(): SimpleConstExprContext[];
	public simpleConstExpr(i: number): SimpleConstExprContext;
	public simpleConstExpr(i?: number): SimpleConstExprContext | SimpleConstExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleConstExprContext);
		} else {
			return this.getRuleContext(i, SimpleConstExprContext);
		}
	}
	public relation(): RelationContext | undefined {
		return this.tryGetRuleContext(0, RelationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_constExpression; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterConstExpression) {
			listener.enterConstExpression(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitConstExpression) {
			listener.exitConstExpression(this);
		}
	}
}


export class RelationContext extends ParserRuleContext {
	public IN(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.IN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_relation; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterRelation) {
			listener.enterRelation(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitRelation) {
			listener.exitRelation(this);
		}
	}
}


export class SimpleConstExprContext extends ParserRuleContext {
	public constTerm(): ConstTermContext[];
	public constTerm(i: number): ConstTermContext;
	public constTerm(i?: number): ConstTermContext | ConstTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstTermContext);
		} else {
			return this.getRuleContext(i, ConstTermContext);
		}
	}
	public addOperator(): AddOperatorContext[];
	public addOperator(i: number): AddOperatorContext;
	public addOperator(i?: number): AddOperatorContext | AddOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AddOperatorContext);
		} else {
			return this.getRuleContext(i, AddOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_simpleConstExpr; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterSimpleConstExpr) {
			listener.enterSimpleConstExpr(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitSimpleConstExpr) {
			listener.exitSimpleConstExpr(this);
		}
	}
}


export class AddOperatorContext extends ParserRuleContext {
	public OR(): TerminalNode { return this.getToken(m2pim4Parser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_addOperator; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterAddOperator) {
			listener.enterAddOperator(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitAddOperator) {
			listener.exitAddOperator(this);
		}
	}
}


export class ConstTermContext extends ParserRuleContext {
	public constFactor(): ConstFactorContext[];
	public constFactor(i: number): ConstFactorContext;
	public constFactor(i?: number): ConstFactorContext | ConstFactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstFactorContext);
		} else {
			return this.getRuleContext(i, ConstFactorContext);
		}
	}
	public mulOperator(): MulOperatorContext[];
	public mulOperator(i: number): MulOperatorContext;
	public mulOperator(i?: number): MulOperatorContext | MulOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MulOperatorContext);
		} else {
			return this.getRuleContext(i, MulOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_constTerm; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterConstTerm) {
			listener.enterConstTerm(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitConstTerm) {
			listener.exitConstTerm(this);
		}
	}
}


export class MulOperatorContext extends ParserRuleContext {
	public DIV(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.MOD, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_mulOperator; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterMulOperator) {
			listener.enterMulOperator(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitMulOperator) {
			listener.exitMulOperator(this);
		}
	}
}


export class ConstFactorContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public setOrQualident(): SetOrQualidentContext | undefined {
		return this.tryGetRuleContext(0, SetOrQualidentContext);
	}
	public constExpression(): ConstExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstExpressionContext);
	}
	public constFactor(): ConstFactorContext | undefined {
		return this.tryGetRuleContext(0, ConstFactorContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_constFactor; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterConstFactor) {
			listener.enterConstFactor(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitConstFactor) {
			listener.exitConstFactor(this);
		}
	}
}


export class SetOrQualidentContext extends ParserRuleContext {
	public set(): SetContext | undefined {
		return this.tryGetRuleContext(0, SetContext);
	}
	public qualident(): QualidentContext | undefined {
		return this.tryGetRuleContext(0, QualidentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_setOrQualident; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterSetOrQualident) {
			listener.enterSetOrQualident(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitSetOrQualident) {
			listener.exitSetOrQualident(this);
		}
	}
}


export class SetContext extends ParserRuleContext {
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_set; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterSet) {
			listener.enterSet(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitSet) {
			listener.exitSet(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public constExpression(): ConstExpressionContext[];
	public constExpression(i: number): ConstExpressionContext;
	public constExpression(i?: number): ConstExpressionContext | ConstExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstExpressionContext);
		} else {
			return this.getRuleContext(i, ConstExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_element; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public simpleType(): SimpleTypeContext | undefined {
		return this.tryGetRuleContext(0, SimpleTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public recordType(): RecordTypeContext | undefined {
		return this.tryGetRuleContext(0, RecordTypeContext);
	}
	public setType(): SetTypeContext | undefined {
		return this.tryGetRuleContext(0, SetTypeContext);
	}
	public pointerType(): PointerTypeContext | undefined {
		return this.tryGetRuleContext(0, PointerTypeContext);
	}
	public procedureType(): ProcedureTypeContext | undefined {
		return this.tryGetRuleContext(0, ProcedureTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_type; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
}


export class SimpleTypeContext extends ParserRuleContext {
	public qualident(): QualidentContext | undefined {
		return this.tryGetRuleContext(0, QualidentContext);
	}
	public enumeration(): EnumerationContext | undefined {
		return this.tryGetRuleContext(0, EnumerationContext);
	}
	public subrangeType(): SubrangeTypeContext | undefined {
		return this.tryGetRuleContext(0, SubrangeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_simpleType; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterSimpleType) {
			listener.enterSimpleType(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitSimpleType) {
			listener.exitSimpleType(this);
		}
	}
}


export class EnumerationContext extends ParserRuleContext {
	public identList(): IdentListContext {
		return this.getRuleContext(0, IdentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_enumeration; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterEnumeration) {
			listener.enterEnumeration(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitEnumeration) {
			listener.exitEnumeration(this);
		}
	}
}


export class IdentListContext extends ParserRuleContext {
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_identList; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterIdentList) {
			listener.enterIdentList(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitIdentList) {
			listener.exitIdentList(this);
		}
	}
}


export class SubrangeTypeContext extends ParserRuleContext {
	public constExpression(): ConstExpressionContext[];
	public constExpression(i: number): ConstExpressionContext;
	public constExpression(i?: number): ConstExpressionContext | ConstExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstExpressionContext);
		} else {
			return this.getRuleContext(i, ConstExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_subrangeType; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterSubrangeType) {
			listener.enterSubrangeType(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitSubrangeType) {
			listener.exitSubrangeType(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public ARRAY(): TerminalNode { return this.getToken(m2pim4Parser.ARRAY, 0); }
	public simpleType(): SimpleTypeContext[];
	public simpleType(i: number): SimpleTypeContext;
	public simpleType(i?: number): SimpleTypeContext | SimpleTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleTypeContext);
		} else {
			return this.getRuleContext(i, SimpleTypeContext);
		}
	}
	public OF(): TerminalNode { return this.getToken(m2pim4Parser.OF, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_arrayType; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
}


export class RecordTypeContext extends ParserRuleContext {
	public RECORD(): TerminalNode { return this.getToken(m2pim4Parser.RECORD, 0); }
	public fieldListSequence(): FieldListSequenceContext {
		return this.getRuleContext(0, FieldListSequenceContext);
	}
	public END(): TerminalNode { return this.getToken(m2pim4Parser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_recordType; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterRecordType) {
			listener.enterRecordType(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitRecordType) {
			listener.exitRecordType(this);
		}
	}
}


export class FieldListSequenceContext extends ParserRuleContext {
	public fieldList(): FieldListContext[];
	public fieldList(i: number): FieldListContext;
	public fieldList(i?: number): FieldListContext | FieldListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldListContext);
		} else {
			return this.getRuleContext(i, FieldListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_fieldListSequence; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterFieldListSequence) {
			listener.enterFieldListSequence(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitFieldListSequence) {
			listener.exitFieldListSequence(this);
		}
	}
}


export class FieldListContext extends ParserRuleContext {
	public identList(): IdentListContext | undefined {
		return this.tryGetRuleContext(0, IdentListContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public CASE(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.CASE, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public OF(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.OF, 0); }
	public variant(): VariantContext[];
	public variant(i: number): VariantContext;
	public variant(i?: number): VariantContext | VariantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariantContext);
		} else {
			return this.getRuleContext(i, VariantContext);
		}
	}
	public END(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.END, 0); }
	public qualident(): QualidentContext | undefined {
		return this.tryGetRuleContext(0, QualidentContext);
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.ELSE, 0); }
	public fieldListSequence(): FieldListSequenceContext | undefined {
		return this.tryGetRuleContext(0, FieldListSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_fieldList; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterFieldList) {
			listener.enterFieldList(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitFieldList) {
			listener.exitFieldList(this);
		}
	}
}


export class VariantContext extends ParserRuleContext {
	public caseLabelList(): CaseLabelListContext {
		return this.getRuleContext(0, CaseLabelListContext);
	}
	public fieldListSequence(): FieldListSequenceContext {
		return this.getRuleContext(0, FieldListSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_variant; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterVariant) {
			listener.enterVariant(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitVariant) {
			listener.exitVariant(this);
		}
	}
}


export class CaseLabelListContext extends ParserRuleContext {
	public caseLabels(): CaseLabelsContext[];
	public caseLabels(i: number): CaseLabelsContext;
	public caseLabels(i?: number): CaseLabelsContext | CaseLabelsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseLabelsContext);
		} else {
			return this.getRuleContext(i, CaseLabelsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_caseLabelList; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterCaseLabelList) {
			listener.enterCaseLabelList(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitCaseLabelList) {
			listener.exitCaseLabelList(this);
		}
	}
}


export class CaseLabelsContext extends ParserRuleContext {
	public constExpression(): ConstExpressionContext[];
	public constExpression(i: number): ConstExpressionContext;
	public constExpression(i?: number): ConstExpressionContext | ConstExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstExpressionContext);
		} else {
			return this.getRuleContext(i, ConstExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_caseLabels; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterCaseLabels) {
			listener.enterCaseLabels(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitCaseLabels) {
			listener.exitCaseLabels(this);
		}
	}
}


export class SetTypeContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(m2pim4Parser.SET, 0); }
	public OF(): TerminalNode { return this.getToken(m2pim4Parser.OF, 0); }
	public simpleType(): SimpleTypeContext {
		return this.getRuleContext(0, SimpleTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_setType; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterSetType) {
			listener.enterSetType(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitSetType) {
			listener.exitSetType(this);
		}
	}
}


export class PointerTypeContext extends ParserRuleContext {
	public POINTER(): TerminalNode { return this.getToken(m2pim4Parser.POINTER, 0); }
	public TO(): TerminalNode { return this.getToken(m2pim4Parser.TO, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_pointerType; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterPointerType) {
			listener.enterPointerType(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitPointerType) {
			listener.exitPointerType(this);
		}
	}
}


export class ProcedureTypeContext extends ParserRuleContext {
	public PROCEDURE(): TerminalNode { return this.getToken(m2pim4Parser.PROCEDURE, 0); }
	public formalTypeList(): FormalTypeListContext | undefined {
		return this.tryGetRuleContext(0, FormalTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_procedureType; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterProcedureType) {
			listener.enterProcedureType(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitProcedureType) {
			listener.exitProcedureType(this);
		}
	}
}


export class FormalTypeListContext extends ParserRuleContext {
	public formalType(): FormalTypeContext[];
	public formalType(i: number): FormalTypeContext;
	public formalType(i?: number): FormalTypeContext | FormalTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalTypeContext);
		} else {
			return this.getRuleContext(i, FormalTypeContext);
		}
	}
	public qualident(): QualidentContext | undefined {
		return this.tryGetRuleContext(0, QualidentContext);
	}
	public VAR(): TerminalNode[];
	public VAR(i: number): TerminalNode;
	public VAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(m2pim4Parser.VAR);
		} else {
			return this.getToken(m2pim4Parser.VAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_formalTypeList; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterFormalTypeList) {
			listener.enterFormalTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitFormalTypeList) {
			listener.exitFormalTypeList(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public identList(): IdentListContext {
		return this.getRuleContext(0, IdentListContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
}


export class DesignatorContext extends ParserRuleContext {
	public qualident(): QualidentContext {
		return this.getRuleContext(0, QualidentContext);
	}
	public designatorTail(): DesignatorTailContext | undefined {
		return this.tryGetRuleContext(0, DesignatorTailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_designator; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterDesignator) {
			listener.enterDesignator(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitDesignator) {
			listener.exitDesignator(this);
		}
	}
}


export class DesignatorTailContext extends ParserRuleContext {
	public expList(): ExpListContext[];
	public expList(i: number): ExpListContext;
	public expList(i?: number): ExpListContext | ExpListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpListContext);
		} else {
			return this.getRuleContext(i, ExpListContext);
		}
	}
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_designatorTail; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterDesignatorTail) {
			listener.enterDesignatorTail(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitDesignatorTail) {
			listener.exitDesignatorTail(this);
		}
	}
}


export class ExpListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_expList; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterExpList) {
			listener.enterExpList(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitExpList) {
			listener.exitExpList(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public simpleExpression(): SimpleExpressionContext[];
	public simpleExpression(i: number): SimpleExpressionContext;
	public simpleExpression(i?: number): SimpleExpressionContext | SimpleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleExpressionContext);
		} else {
			return this.getRuleContext(i, SimpleExpressionContext);
		}
	}
	public relation(): RelationContext | undefined {
		return this.tryGetRuleContext(0, RelationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_expression; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class SimpleExpressionContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public addOperator(): AddOperatorContext[];
	public addOperator(i: number): AddOperatorContext;
	public addOperator(i?: number): AddOperatorContext | AddOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AddOperatorContext);
		} else {
			return this.getRuleContext(i, AddOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_simpleExpression; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterSimpleExpression) {
			listener.enterSimpleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitSimpleExpression) {
			listener.exitSimpleExpression(this);
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
	public mulOperator(): MulOperatorContext[];
	public mulOperator(i: number): MulOperatorContext;
	public mulOperator(i?: number): MulOperatorContext | MulOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MulOperatorContext);
		} else {
			return this.getRuleContext(i, MulOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_term; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public setOrDesignatorOrProcCall(): SetOrDesignatorOrProcCallContext | undefined {
		return this.tryGetRuleContext(0, SetOrDesignatorOrProcCallContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_factor; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
}


export class SetOrDesignatorOrProcCallContext extends ParserRuleContext {
	public set(): SetContext | undefined {
		return this.tryGetRuleContext(0, SetContext);
	}
	public qualident(): QualidentContext | undefined {
		return this.tryGetRuleContext(0, QualidentContext);
	}
	public designatorTail(): DesignatorTailContext | undefined {
		return this.tryGetRuleContext(0, DesignatorTailContext);
	}
	public actualParameters(): ActualParametersContext | undefined {
		return this.tryGetRuleContext(0, ActualParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_setOrDesignatorOrProcCall; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterSetOrDesignatorOrProcCall) {
			listener.enterSetOrDesignatorOrProcCall(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitSetOrDesignatorOrProcCall) {
			listener.exitSetOrDesignatorOrProcCall(this);
		}
	}
}


export class ActualParametersContext extends ParserRuleContext {
	public expList(): ExpListContext | undefined {
		return this.tryGetRuleContext(0, ExpListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_actualParameters; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterActualParameters) {
			listener.enterActualParameters(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitActualParameters) {
			listener.exitActualParameters(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public assignmentOrProcCall(): AssignmentOrProcCallContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOrProcCallContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public caseStatement(): CaseStatementContext | undefined {
		return this.tryGetRuleContext(0, CaseStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public repeatStatement(): RepeatStatementContext | undefined {
		return this.tryGetRuleContext(0, RepeatStatementContext);
	}
	public loopStatement(): LoopStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public withStatement(): WithStatementContext | undefined {
		return this.tryGetRuleContext(0, WithStatementContext);
	}
	public EXIT(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.EXIT, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_statement; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class AssignmentOrProcCallContext extends ParserRuleContext {
	public designator(): DesignatorContext {
		return this.getRuleContext(0, DesignatorContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public actualParameters(): ActualParametersContext | undefined {
		return this.tryGetRuleContext(0, ActualParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_assignmentOrProcCall; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterAssignmentOrProcCall) {
			listener.enterAssignmentOrProcCall(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitAssignmentOrProcCall) {
			listener.exitAssignmentOrProcCall(this);
		}
	}
}


export class StatementSequenceContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return m2pim4Parser.RULE_statementSequence; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterStatementSequence) {
			listener.enterStatementSequence(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitStatementSequence) {
			listener.exitStatementSequence(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(m2pim4Parser.IF, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public THEN(): TerminalNode[];
	public THEN(i: number): TerminalNode;
	public THEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(m2pim4Parser.THEN);
		} else {
			return this.getToken(m2pim4Parser.THEN, i);
		}
	}
	public statementSequence(): StatementSequenceContext[];
	public statementSequence(i: number): StatementSequenceContext;
	public statementSequence(i?: number): StatementSequenceContext | StatementSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementSequenceContext);
		} else {
			return this.getRuleContext(i, StatementSequenceContext);
		}
	}
	public END(): TerminalNode { return this.getToken(m2pim4Parser.END, 0); }
	public ELSIF(): TerminalNode[];
	public ELSIF(i: number): TerminalNode;
	public ELSIF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(m2pim4Parser.ELSIF);
		} else {
			return this.getToken(m2pim4Parser.ELSIF, i);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
}


export class CaseStatementContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(m2pim4Parser.CASE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OF(): TerminalNode { return this.getToken(m2pim4Parser.OF, 0); }
	public ccase(): CcaseContext[];
	public ccase(i: number): CcaseContext;
	public ccase(i?: number): CcaseContext | CcaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CcaseContext);
		} else {
			return this.getRuleContext(i, CcaseContext);
		}
	}
	public END(): TerminalNode { return this.getToken(m2pim4Parser.END, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.ELSE, 0); }
	public statementSequence(): StatementSequenceContext | undefined {
		return this.tryGetRuleContext(0, StatementSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_caseStatement; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterCaseStatement) {
			listener.enterCaseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitCaseStatement) {
			listener.exitCaseStatement(this);
		}
	}
}


export class CcaseContext extends ParserRuleContext {
	public caseLabelList(): CaseLabelListContext {
		return this.getRuleContext(0, CaseLabelListContext);
	}
	public statementSequence(): StatementSequenceContext {
		return this.getRuleContext(0, StatementSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_ccase; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterCcase) {
			listener.enterCcase(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitCcase) {
			listener.exitCcase(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(m2pim4Parser.WHILE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DO(): TerminalNode { return this.getToken(m2pim4Parser.DO, 0); }
	public statementSequence(): StatementSequenceContext {
		return this.getRuleContext(0, StatementSequenceContext);
	}
	public END(): TerminalNode { return this.getToken(m2pim4Parser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
}


export class RepeatStatementContext extends ParserRuleContext {
	public REPEAT(): TerminalNode { return this.getToken(m2pim4Parser.REPEAT, 0); }
	public statementSequence(): StatementSequenceContext {
		return this.getRuleContext(0, StatementSequenceContext);
	}
	public UNTIL(): TerminalNode { return this.getToken(m2pim4Parser.UNTIL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_repeatStatement; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterRepeatStatement) {
			listener.enterRepeatStatement(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitRepeatStatement) {
			listener.exitRepeatStatement(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(m2pim4Parser.FOR, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public TO(): TerminalNode { return this.getToken(m2pim4Parser.TO, 0); }
	public DO(): TerminalNode { return this.getToken(m2pim4Parser.DO, 0); }
	public statementSequence(): StatementSequenceContext {
		return this.getRuleContext(0, StatementSequenceContext);
	}
	public END(): TerminalNode { return this.getToken(m2pim4Parser.END, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.BY, 0); }
	public constExpression(): ConstExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_forStatement; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
}


export class LoopStatementContext extends ParserRuleContext {
	public LOOP(): TerminalNode { return this.getToken(m2pim4Parser.LOOP, 0); }
	public statementSequence(): StatementSequenceContext {
		return this.getRuleContext(0, StatementSequenceContext);
	}
	public END(): TerminalNode { return this.getToken(m2pim4Parser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_loopStatement; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterLoopStatement) {
			listener.enterLoopStatement(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitLoopStatement) {
			listener.exitLoopStatement(this);
		}
	}
}


export class WithStatementContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(m2pim4Parser.WITH, 0); }
	public designator(): DesignatorContext {
		return this.getRuleContext(0, DesignatorContext);
	}
	public DO(): TerminalNode { return this.getToken(m2pim4Parser.DO, 0); }
	public statementSequence(): StatementSequenceContext {
		return this.getRuleContext(0, StatementSequenceContext);
	}
	public END(): TerminalNode { return this.getToken(m2pim4Parser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_withStatement; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterWithStatement) {
			listener.enterWithStatement(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitWithStatement) {
			listener.exitWithStatement(this);
		}
	}
}


export class ProcedureDeclarationContext extends ParserRuleContext {
	public procedureHeading(): ProcedureHeadingContext {
		return this.getRuleContext(0, ProcedureHeadingContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_procedureDeclaration; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterProcedureDeclaration) {
			listener.enterProcedureDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitProcedureDeclaration) {
			listener.exitProcedureDeclaration(this);
		}
	}
}


export class ProcedureHeadingContext extends ParserRuleContext {
	public PROCEDURE(): TerminalNode { return this.getToken(m2pim4Parser.PROCEDURE, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public formalParameters(): FormalParametersContext | undefined {
		return this.tryGetRuleContext(0, FormalParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_procedureHeading; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterProcedureHeading) {
			listener.enterProcedureHeading(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitProcedureHeading) {
			listener.exitProcedureHeading(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public END(): TerminalNode { return this.getToken(m2pim4Parser.END, 0); }
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	public BEGIN(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.BEGIN, 0); }
	public statementSequence(): StatementSequenceContext | undefined {
		return this.tryGetRuleContext(0, StatementSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_block; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public CONST(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.CONST, 0); }
	public constantDeclaration(): ConstantDeclarationContext[];
	public constantDeclaration(i: number): ConstantDeclarationContext;
	public constantDeclaration(i?: number): ConstantDeclarationContext | ConstantDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantDeclarationContext);
		} else {
			return this.getRuleContext(i, ConstantDeclarationContext);
		}
	}
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.TYPE, 0); }
	public typeDeclaration(): TypeDeclarationContext[];
	public typeDeclaration(i: number): TypeDeclarationContext;
	public typeDeclaration(i?: number): TypeDeclarationContext | TypeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDeclarationContext);
		} else {
			return this.getRuleContext(i, TypeDeclarationContext);
		}
	}
	public VAR(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.VAR, 0); }
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public procedureDeclaration(): ProcedureDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ProcedureDeclarationContext);
	}
	public moduleDeclaration(): ModuleDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ModuleDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_declaration; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public fpSection(): FpSectionContext[];
	public fpSection(i: number): FpSectionContext;
	public fpSection(i?: number): FpSectionContext | FpSectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FpSectionContext);
		} else {
			return this.getRuleContext(i, FpSectionContext);
		}
	}
	public qualident(): QualidentContext | undefined {
		return this.tryGetRuleContext(0, QualidentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_formalParameters; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterFormalParameters) {
			listener.enterFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitFormalParameters) {
			listener.exitFormalParameters(this);
		}
	}
}


export class FpSectionContext extends ParserRuleContext {
	public identList(): IdentListContext {
		return this.getRuleContext(0, IdentListContext);
	}
	public formalType(): FormalTypeContext {
		return this.getRuleContext(0, FormalTypeContext);
	}
	public VAR(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_fpSection; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterFpSection) {
			listener.enterFpSection(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitFpSection) {
			listener.exitFpSection(this);
		}
	}
}


export class FormalTypeContext extends ParserRuleContext {
	public qualident(): QualidentContext {
		return this.getRuleContext(0, QualidentContext);
	}
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.ARRAY, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.OF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_formalType; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterFormalType) {
			listener.enterFormalType(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitFormalType) {
			listener.exitFormalType(this);
		}
	}
}


export class ModuleDeclarationContext extends ParserRuleContext {
	public MODULE(): TerminalNode { return this.getToken(m2pim4Parser.MODULE, 0); }
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public priority(): PriorityContext | undefined {
		return this.tryGetRuleContext(0, PriorityContext);
	}
	public importList(): ImportListContext[];
	public importList(i: number): ImportListContext;
	public importList(i?: number): ImportListContext | ImportListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportListContext);
		} else {
			return this.getRuleContext(i, ImportListContext);
		}
	}
	public exportList(): ExportListContext | undefined {
		return this.tryGetRuleContext(0, ExportListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_moduleDeclaration; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterModuleDeclaration) {
			listener.enterModuleDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitModuleDeclaration) {
			listener.exitModuleDeclaration(this);
		}
	}
}


export class PriorityContext extends ParserRuleContext {
	public constExpression(): ConstExpressionContext {
		return this.getRuleContext(0, ConstExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_priority; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterPriority) {
			listener.enterPriority(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitPriority) {
			listener.exitPriority(this);
		}
	}
}


export class ExportListContext extends ParserRuleContext {
	public EXPORT(): TerminalNode { return this.getToken(m2pim4Parser.EXPORT, 0); }
	public identList(): IdentListContext {
		return this.getRuleContext(0, IdentListContext);
	}
	public QUALIFIED(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.QUALIFIED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_exportList; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterExportList) {
			listener.enterExportList(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitExportList) {
			listener.exitExportList(this);
		}
	}
}


export class ImportListContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(m2pim4Parser.IMPORT, 0); }
	public identList(): IdentListContext {
		return this.getRuleContext(0, IdentListContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.FROM, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_importList; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterImportList) {
			listener.enterImportList(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitImportList) {
			listener.exitImportList(this);
		}
	}
}


export class DefinitionModuleContext extends ParserRuleContext {
	public DEFINITION(): TerminalNode { return this.getToken(m2pim4Parser.DEFINITION, 0); }
	public MODULE(): TerminalNode { return this.getToken(m2pim4Parser.MODULE, 0); }
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public END(): TerminalNode { return this.getToken(m2pim4Parser.END, 0); }
	public importList(): ImportListContext[];
	public importList(i: number): ImportListContext;
	public importList(i?: number): ImportListContext | ImportListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportListContext);
		} else {
			return this.getRuleContext(i, ImportListContext);
		}
	}
	public exportList(): ExportListContext | undefined {
		return this.tryGetRuleContext(0, ExportListContext);
	}
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_definitionModule; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterDefinitionModule) {
			listener.enterDefinitionModule(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitDefinitionModule) {
			listener.exitDefinitionModule(this);
		}
	}
}


export class DefinitionContext extends ParserRuleContext {
	public CONST(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.CONST, 0); }
	public constantDeclaration(): ConstantDeclarationContext[];
	public constantDeclaration(i: number): ConstantDeclarationContext;
	public constantDeclaration(i?: number): ConstantDeclarationContext | ConstantDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantDeclarationContext);
		} else {
			return this.getRuleContext(i, ConstantDeclarationContext);
		}
	}
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.TYPE, 0); }
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public VAR(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.VAR, 0); }
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public procedureHeading(): ProcedureHeadingContext | undefined {
		return this.tryGetRuleContext(0, ProcedureHeadingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_definition; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterDefinition) {
			listener.enterDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitDefinition) {
			listener.exitDefinition(this);
		}
	}
}


export class ProgramModuleContext extends ParserRuleContext {
	public MODULE(): TerminalNode { return this.getToken(m2pim4Parser.MODULE, 0); }
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public priority(): PriorityContext | undefined {
		return this.tryGetRuleContext(0, PriorityContext);
	}
	public importList(): ImportListContext[];
	public importList(i: number): ImportListContext;
	public importList(i?: number): ImportListContext | ImportListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportListContext);
		} else {
			return this.getRuleContext(i, ImportListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_programModule; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterProgramModule) {
			listener.enterProgramModule(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitProgramModule) {
			listener.exitProgramModule(this);
		}
	}
}


export class CompilationUnitContext extends ParserRuleContext {
	public definitionModule(): DefinitionModuleContext | undefined {
		return this.tryGetRuleContext(0, DefinitionModuleContext);
	}
	public programModule(): ProgramModuleContext | undefined {
		return this.tryGetRuleContext(0, ProgramModuleContext);
	}
	public IMPLEMENTATION(): TerminalNode | undefined { return this.tryGetToken(m2pim4Parser.IMPLEMENTATION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return m2pim4Parser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: m2pim4Listener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: m2pim4Listener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
}


