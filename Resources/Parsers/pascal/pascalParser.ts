// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pascal/pascal.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { pascalListener } from "./pascalListener";

export class pascalParser extends Parser {
	public static readonly AND = 1;
	public static readonly ARRAY = 2;
	public static readonly BEGIN = 3;
	public static readonly BOOLEAN = 4;
	public static readonly CASE = 5;
	public static readonly CHAR = 6;
	public static readonly CHR = 7;
	public static readonly CONST = 8;
	public static readonly DIV = 9;
	public static readonly DO = 10;
	public static readonly DOWNTO = 11;
	public static readonly ELSE = 12;
	public static readonly END = 13;
	public static readonly FILE = 14;
	public static readonly FOR = 15;
	public static readonly FUNCTION = 16;
	public static readonly GOTO = 17;
	public static readonly IF = 18;
	public static readonly IN = 19;
	public static readonly INTEGER = 20;
	public static readonly LABEL = 21;
	public static readonly MOD = 22;
	public static readonly NIL = 23;
	public static readonly NOT = 24;
	public static readonly OF = 25;
	public static readonly OR = 26;
	public static readonly PACKED = 27;
	public static readonly PROCEDURE = 28;
	public static readonly PROGRAM = 29;
	public static readonly REAL = 30;
	public static readonly RECORD = 31;
	public static readonly REPEAT = 32;
	public static readonly SET = 33;
	public static readonly THEN = 34;
	public static readonly TO = 35;
	public static readonly TYPE = 36;
	public static readonly UNTIL = 37;
	public static readonly VAR = 38;
	public static readonly WHILE = 39;
	public static readonly WITH = 40;
	public static readonly PLUS = 41;
	public static readonly MINUS = 42;
	public static readonly STAR = 43;
	public static readonly SLASH = 44;
	public static readonly ASSIGN = 45;
	public static readonly COMMA = 46;
	public static readonly SEMI = 47;
	public static readonly COLON = 48;
	public static readonly EQUAL = 49;
	public static readonly NOT_EQUAL = 50;
	public static readonly LT = 51;
	public static readonly LE = 52;
	public static readonly GE = 53;
	public static readonly GT = 54;
	public static readonly LPAREN = 55;
	public static readonly RPAREN = 56;
	public static readonly LBRACK = 57;
	public static readonly LBRACK2 = 58;
	public static readonly RBRACK = 59;
	public static readonly RBRACK2 = 60;
	public static readonly POINTER = 61;
	public static readonly AT = 62;
	public static readonly DOT = 63;
	public static readonly DOTDOT = 64;
	public static readonly LCURLY = 65;
	public static readonly RCURLY = 66;
	public static readonly UNIT = 67;
	public static readonly INTERFACE = 68;
	public static readonly USES = 69;
	public static readonly STRING = 70;
	public static readonly IMPLEMENTATION = 71;
	public static readonly TRUE = 72;
	public static readonly FALSE = 73;
	public static readonly WS = 74;
	public static readonly COMMENT_1 = 75;
	public static readonly COMMENT_2 = 76;
	public static readonly IDENT = 77;
	public static readonly STRING_LITERAL = 78;
	public static readonly NUM_INT = 79;
	public static readonly NUM_REAL = 80;
	public static readonly RULE_program = 0;
	public static readonly RULE_programHeading = 1;
	public static readonly RULE_identifier = 2;
	public static readonly RULE_block = 3;
	public static readonly RULE_usesUnitsPart = 4;
	public static readonly RULE_labelDeclarationPart = 5;
	public static readonly RULE_label = 6;
	public static readonly RULE_constantDefinitionPart = 7;
	public static readonly RULE_constantDefinition = 8;
	public static readonly RULE_constantChr = 9;
	public static readonly RULE_constant = 10;
	public static readonly RULE_unsignedNumber = 11;
	public static readonly RULE_unsignedInteger = 12;
	public static readonly RULE_unsignedReal = 13;
	public static readonly RULE_sign = 14;
	public static readonly RULE_bool = 15;
	public static readonly RULE_string = 16;
	public static readonly RULE_typeDefinitionPart = 17;
	public static readonly RULE_typeDefinition = 18;
	public static readonly RULE_functionType = 19;
	public static readonly RULE_procedureType = 20;
	public static readonly RULE_type = 21;
	public static readonly RULE_simpleType = 22;
	public static readonly RULE_scalarType = 23;
	public static readonly RULE_subrangeType = 24;
	public static readonly RULE_typeIdentifier = 25;
	public static readonly RULE_structuredType = 26;
	public static readonly RULE_unpackedStructuredType = 27;
	public static readonly RULE_stringtype = 28;
	public static readonly RULE_arrayType = 29;
	public static readonly RULE_typeList = 30;
	public static readonly RULE_indexType = 31;
	public static readonly RULE_componentType = 32;
	public static readonly RULE_recordType = 33;
	public static readonly RULE_fieldList = 34;
	public static readonly RULE_fixedPart = 35;
	public static readonly RULE_recordSection = 36;
	public static readonly RULE_variantPart = 37;
	public static readonly RULE_tag = 38;
	public static readonly RULE_variant = 39;
	public static readonly RULE_setType = 40;
	public static readonly RULE_baseType = 41;
	public static readonly RULE_fileType = 42;
	public static readonly RULE_pointerType = 43;
	public static readonly RULE_variableDeclarationPart = 44;
	public static readonly RULE_variableDeclaration = 45;
	public static readonly RULE_procedureAndFunctionDeclarationPart = 46;
	public static readonly RULE_procedureOrFunctionDeclaration = 47;
	public static readonly RULE_procedureDeclaration = 48;
	public static readonly RULE_formalParameterList = 49;
	public static readonly RULE_formalParameterSection = 50;
	public static readonly RULE_parameterGroup = 51;
	public static readonly RULE_identifierList = 52;
	public static readonly RULE_constList = 53;
	public static readonly RULE_functionDeclaration = 54;
	public static readonly RULE_resultType = 55;
	public static readonly RULE_statement = 56;
	public static readonly RULE_unlabelledStatement = 57;
	public static readonly RULE_simpleStatement = 58;
	public static readonly RULE_assignmentStatement = 59;
	public static readonly RULE_variable = 60;
	public static readonly RULE_expression = 61;
	public static readonly RULE_relationaloperator = 62;
	public static readonly RULE_simpleExpression = 63;
	public static readonly RULE_additiveoperator = 64;
	public static readonly RULE_term = 65;
	public static readonly RULE_multiplicativeoperator = 66;
	public static readonly RULE_signedFactor = 67;
	public static readonly RULE_factor = 68;
	public static readonly RULE_unsignedConstant = 69;
	public static readonly RULE_functionDesignator = 70;
	public static readonly RULE_parameterList = 71;
	public static readonly RULE_set = 72;
	public static readonly RULE_elementList = 73;
	public static readonly RULE_element = 74;
	public static readonly RULE_procedureStatement = 75;
	public static readonly RULE_actualParameter = 76;
	public static readonly RULE_parameterwidth = 77;
	public static readonly RULE_gotoStatement = 78;
	public static readonly RULE_emptyStatement = 79;
	public static readonly RULE_empty = 80;
	public static readonly RULE_structuredStatement = 81;
	public static readonly RULE_compoundStatement = 82;
	public static readonly RULE_statements = 83;
	public static readonly RULE_conditionalStatement = 84;
	public static readonly RULE_ifStatement = 85;
	public static readonly RULE_caseStatement = 86;
	public static readonly RULE_caseListElement = 87;
	public static readonly RULE_repetetiveStatement = 88;
	public static readonly RULE_whileStatement = 89;
	public static readonly RULE_repeatStatement = 90;
	public static readonly RULE_forStatement = 91;
	public static readonly RULE_forList = 92;
	public static readonly RULE_initialValue = 93;
	public static readonly RULE_finalValue = 94;
	public static readonly RULE_withStatement = 95;
	public static readonly RULE_recordVariableList = 96;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "programHeading", "identifier", "block", "usesUnitsPart", "labelDeclarationPart", 
		"label", "constantDefinitionPart", "constantDefinition", "constantChr", 
		"constant", "unsignedNumber", "unsignedInteger", "unsignedReal", "sign", 
		"bool", "string", "typeDefinitionPart", "typeDefinition", "functionType", 
		"procedureType", "type", "simpleType", "scalarType", "subrangeType", "typeIdentifier", 
		"structuredType", "unpackedStructuredType", "stringtype", "arrayType", 
		"typeList", "indexType", "componentType", "recordType", "fieldList", "fixedPart", 
		"recordSection", "variantPart", "tag", "variant", "setType", "baseType", 
		"fileType", "pointerType", "variableDeclarationPart", "variableDeclaration", 
		"procedureAndFunctionDeclarationPart", "procedureOrFunctionDeclaration", 
		"procedureDeclaration", "formalParameterList", "formalParameterSection", 
		"parameterGroup", "identifierList", "constList", "functionDeclaration", 
		"resultType", "statement", "unlabelledStatement", "simpleStatement", "assignmentStatement", 
		"variable", "expression", "relationaloperator", "simpleExpression", "additiveoperator", 
		"term", "multiplicativeoperator", "signedFactor", "factor", "unsignedConstant", 
		"functionDesignator", "parameterList", "set", "elementList", "element", 
		"procedureStatement", "actualParameter", "parameterwidth", "gotoStatement", 
		"emptyStatement", "empty", "structuredStatement", "compoundStatement", 
		"statements", "conditionalStatement", "ifStatement", "caseStatement", 
		"caseListElement", "repetetiveStatement", "whileStatement", "repeatStatement", 
		"forStatement", "forList", "initialValue", "finalValue", "withStatement", 
		"recordVariableList",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'+'", 
		"'-'", "'*'", "'/'", "':='", "','", "';'", "':'", "'='", "'<>'", "'<'", 
		"'<='", "'>='", "'>'", "'('", "')'", "'['", "'(.'", "']'", "'.)'", "'^'", 
		"'@'", "'.'", "'..'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "AND", "ARRAY", "BEGIN", "BOOLEAN", "CASE", "CHAR", "CHR", 
		"CONST", "DIV", "DO", "DOWNTO", "ELSE", "END", "FILE", "FOR", "FUNCTION", 
		"GOTO", "IF", "IN", "INTEGER", "LABEL", "MOD", "NIL", "NOT", "OF", "OR", 
		"PACKED", "PROCEDURE", "PROGRAM", "REAL", "RECORD", "REPEAT", "SET", "THEN", 
		"TO", "TYPE", "UNTIL", "VAR", "WHILE", "WITH", "PLUS", "MINUS", "STAR", 
		"SLASH", "ASSIGN", "COMMA", "SEMI", "COLON", "EQUAL", "NOT_EQUAL", "LT", 
		"LE", "GE", "GT", "LPAREN", "RPAREN", "LBRACK", "LBRACK2", "RBRACK", "RBRACK2", 
		"POINTER", "AT", "DOT", "DOTDOT", "LCURLY", "RCURLY", "UNIT", "INTERFACE", 
		"USES", "STRING", "IMPLEMENTATION", "TRUE", "FALSE", "WS", "COMMENT_1", 
		"COMMENT_2", "IDENT", "STRING_LITERAL", "NUM_INT", "NUM_REAL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(pascalParser._LITERAL_NAMES, pascalParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return pascalParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "pascal.g4"; }

	// @Override
	public get ruleNames(): string[] { return pascalParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return pascalParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(pascalParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, pascalParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.programHeading();
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pascalParser.INTERFACE) {
				{
				this.state = 195;
				this.match(pascalParser.INTERFACE);
				}
			}

			this.state = 198;
			this.block();
			this.state = 199;
			this.match(pascalParser.DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public programHeading(): ProgramHeadingContext {
		let _localctx: ProgramHeadingContext = new ProgramHeadingContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, pascalParser.RULE_programHeading);
		let _la: number;
		try {
			this.state = 215;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.PROGRAM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 201;
				this.match(pascalParser.PROGRAM);
				this.state = 202;
				this.identifier();
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pascalParser.LPAREN) {
					{
					this.state = 203;
					this.match(pascalParser.LPAREN);
					this.state = 204;
					this.identifierList();
					this.state = 205;
					this.match(pascalParser.RPAREN);
					}
				}

				this.state = 209;
				this.match(pascalParser.SEMI);
				}
				break;
			case pascalParser.UNIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 211;
				this.match(pascalParser.UNIT);
				this.state = 212;
				this.identifier();
				this.state = 213;
				this.match(pascalParser.SEMI);
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, pascalParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.match(pascalParser.IDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 6, pascalParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (pascalParser.CONST - 8)) | (1 << (pascalParser.FUNCTION - 8)) | (1 << (pascalParser.LABEL - 8)) | (1 << (pascalParser.PROCEDURE - 8)) | (1 << (pascalParser.TYPE - 8)) | (1 << (pascalParser.VAR - 8)))) !== 0) || _la === pascalParser.USES || _la === pascalParser.IMPLEMENTATION) {
				{
				this.state = 226;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case pascalParser.LABEL:
					{
					this.state = 219;
					this.labelDeclarationPart();
					}
					break;
				case pascalParser.CONST:
					{
					this.state = 220;
					this.constantDefinitionPart();
					}
					break;
				case pascalParser.TYPE:
					{
					this.state = 221;
					this.typeDefinitionPart();
					}
					break;
				case pascalParser.VAR:
					{
					this.state = 222;
					this.variableDeclarationPart();
					}
					break;
				case pascalParser.FUNCTION:
				case pascalParser.PROCEDURE:
					{
					this.state = 223;
					this.procedureAndFunctionDeclarationPart();
					}
					break;
				case pascalParser.USES:
					{
					this.state = 224;
					this.usesUnitsPart();
					}
					break;
				case pascalParser.IMPLEMENTATION:
					{
					this.state = 225;
					this.match(pascalParser.IMPLEMENTATION);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 231;
			this.compoundStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usesUnitsPart(): UsesUnitsPartContext {
		let _localctx: UsesUnitsPartContext = new UsesUnitsPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, pascalParser.RULE_usesUnitsPart);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(pascalParser.USES);
			this.state = 234;
			this.identifierList();
			this.state = 235;
			this.match(pascalParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labelDeclarationPart(): LabelDeclarationPartContext {
		let _localctx: LabelDeclarationPartContext = new LabelDeclarationPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, pascalParser.RULE_labelDeclarationPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this.match(pascalParser.LABEL);
			this.state = 238;
			this.label();
			this.state = 243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pascalParser.COMMA) {
				{
				{
				this.state = 239;
				this.match(pascalParser.COMMA);
				this.state = 240;
				this.label();
				}
				}
				this.state = 245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 246;
			this.match(pascalParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 12, pascalParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this.unsignedInteger();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantDefinitionPart(): ConstantDefinitionPartContext {
		let _localctx: ConstantDefinitionPartContext = new ConstantDefinitionPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, pascalParser.RULE_constantDefinitionPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.match(pascalParser.CONST);
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 251;
				this.constantDefinition();
				this.state = 252;
				this.match(pascalParser.SEMI);
				}
				}
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === pascalParser.IDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantDefinition(): ConstantDefinitionContext {
		let _localctx: ConstantDefinitionContext = new ConstantDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, pascalParser.RULE_constantDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.identifier();
			this.state = 259;
			this.match(pascalParser.EQUAL);
			this.state = 260;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantChr(): ConstantChrContext {
		let _localctx: ConstantChrContext = new ConstantChrContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, pascalParser.RULE_constantChr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.match(pascalParser.CHR);
			this.state = 263;
			this.match(pascalParser.LPAREN);
			this.state = 264;
			this.unsignedInteger();
			this.state = 265;
			this.match(pascalParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, pascalParser.RULE_constant);
		try {
			this.state = 277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 267;
				this.unsignedNumber();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 268;
				this.sign();
				this.state = 269;
				this.unsignedNumber();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 271;
				this.identifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 272;
				this.sign();
				this.state = 273;
				this.identifier();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 275;
				this.string();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 276;
				this.constantChr();
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
	public unsignedNumber(): UnsignedNumberContext {
		let _localctx: UnsignedNumberContext = new UnsignedNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, pascalParser.RULE_unsignedNumber);
		try {
			this.state = 281;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.NUM_INT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 279;
				this.unsignedInteger();
				}
				break;
			case pascalParser.NUM_REAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 280;
				this.unsignedReal();
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
	public unsignedInteger(): UnsignedIntegerContext {
		let _localctx: UnsignedIntegerContext = new UnsignedIntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, pascalParser.RULE_unsignedInteger);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(pascalParser.NUM_INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unsignedReal(): UnsignedRealContext {
		let _localctx: UnsignedRealContext = new UnsignedRealContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, pascalParser.RULE_unsignedReal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.match(pascalParser.NUM_REAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sign(): SignContext {
		let _localctx: SignContext = new SignContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, pascalParser.RULE_sign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			_la = this._input.LA(1);
			if (!(_la === pascalParser.PLUS || _la === pascalParser.MINUS)) {
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
	public bool(): BoolContext {
		let _localctx: BoolContext = new BoolContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, pascalParser.RULE_bool);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			_la = this._input.LA(1);
			if (!(_la === pascalParser.TRUE || _la === pascalParser.FALSE)) {
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, pascalParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this.match(pascalParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDefinitionPart(): TypeDefinitionPartContext {
		let _localctx: TypeDefinitionPartContext = new TypeDefinitionPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, pascalParser.RULE_typeDefinitionPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.match(pascalParser.TYPE);
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 294;
				this.typeDefinition();
				this.state = 295;
				this.match(pascalParser.SEMI);
				}
				}
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === pascalParser.IDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDefinition(): TypeDefinitionContext {
		let _localctx: TypeDefinitionContext = new TypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, pascalParser.RULE_typeDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.identifier();
			this.state = 302;
			this.match(pascalParser.EQUAL);
			this.state = 306;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.ARRAY:
			case pascalParser.BOOLEAN:
			case pascalParser.CHAR:
			case pascalParser.CHR:
			case pascalParser.FILE:
			case pascalParser.INTEGER:
			case pascalParser.PACKED:
			case pascalParser.REAL:
			case pascalParser.RECORD:
			case pascalParser.SET:
			case pascalParser.PLUS:
			case pascalParser.MINUS:
			case pascalParser.LPAREN:
			case pascalParser.POINTER:
			case pascalParser.STRING:
			case pascalParser.IDENT:
			case pascalParser.STRING_LITERAL:
			case pascalParser.NUM_INT:
			case pascalParser.NUM_REAL:
				{
				this.state = 303;
				this.type();
				}
				break;
			case pascalParser.FUNCTION:
				{
				this.state = 304;
				this.functionType();
				}
				break;
			case pascalParser.PROCEDURE:
				{
				this.state = 305;
				this.procedureType();
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
	public functionType(): FunctionTypeContext {
		let _localctx: FunctionTypeContext = new FunctionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, pascalParser.RULE_functionType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this.match(pascalParser.FUNCTION);
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pascalParser.LPAREN) {
				{
				this.state = 309;
				this.formalParameterList();
				}
			}

			this.state = 312;
			this.match(pascalParser.COLON);
			this.state = 313;
			this.resultType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 40, pascalParser.RULE_procedureType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.match(pascalParser.PROCEDURE);
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pascalParser.LPAREN) {
				{
				this.state = 316;
				this.formalParameterList();
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, pascalParser.RULE_type);
		try {
			this.state = 322;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.BOOLEAN:
			case pascalParser.CHAR:
			case pascalParser.CHR:
			case pascalParser.INTEGER:
			case pascalParser.REAL:
			case pascalParser.PLUS:
			case pascalParser.MINUS:
			case pascalParser.LPAREN:
			case pascalParser.STRING:
			case pascalParser.IDENT:
			case pascalParser.STRING_LITERAL:
			case pascalParser.NUM_INT:
			case pascalParser.NUM_REAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 319;
				this.simpleType();
				}
				break;
			case pascalParser.ARRAY:
			case pascalParser.FILE:
			case pascalParser.PACKED:
			case pascalParser.RECORD:
			case pascalParser.SET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 320;
				this.structuredType();
				}
				break;
			case pascalParser.POINTER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 321;
				this.pointerType();
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
		this.enterRule(_localctx, 44, pascalParser.RULE_simpleType);
		try {
			this.state = 328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 324;
				this.scalarType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 325;
				this.subrangeType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 326;
				this.typeIdentifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 327;
				this.stringtype();
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
	public scalarType(): ScalarTypeContext {
		let _localctx: ScalarTypeContext = new ScalarTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, pascalParser.RULE_scalarType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.match(pascalParser.LPAREN);
			this.state = 331;
			this.identifierList();
			this.state = 332;
			this.match(pascalParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 48, pascalParser.RULE_subrangeType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.constant();
			this.state = 335;
			this.match(pascalParser.DOTDOT);
			this.state = 336;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeIdentifier(): TypeIdentifierContext {
		let _localctx: TypeIdentifierContext = new TypeIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, pascalParser.RULE_typeIdentifier);
		let _la: number;
		try {
			this.state = 340;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.IDENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 338;
				this.identifier();
				}
				break;
			case pascalParser.BOOLEAN:
			case pascalParser.CHAR:
			case pascalParser.INTEGER:
			case pascalParser.REAL:
			case pascalParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 339;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pascalParser.BOOLEAN) | (1 << pascalParser.CHAR) | (1 << pascalParser.INTEGER) | (1 << pascalParser.REAL))) !== 0) || _la === pascalParser.STRING)) {
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
	public structuredType(): StructuredTypeContext {
		let _localctx: StructuredTypeContext = new StructuredTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, pascalParser.RULE_structuredType);
		try {
			this.state = 345;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.PACKED:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 342;
				this.match(pascalParser.PACKED);
				this.state = 343;
				this.unpackedStructuredType();
				}
				break;
			case pascalParser.ARRAY:
			case pascalParser.FILE:
			case pascalParser.RECORD:
			case pascalParser.SET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 344;
				this.unpackedStructuredType();
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
	public unpackedStructuredType(): UnpackedStructuredTypeContext {
		let _localctx: UnpackedStructuredTypeContext = new UnpackedStructuredTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, pascalParser.RULE_unpackedStructuredType);
		try {
			this.state = 351;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.ARRAY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 347;
				this.arrayType();
				}
				break;
			case pascalParser.RECORD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 348;
				this.recordType();
				}
				break;
			case pascalParser.SET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 349;
				this.setType();
				}
				break;
			case pascalParser.FILE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 350;
				this.fileType();
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
	public stringtype(): StringtypeContext {
		let _localctx: StringtypeContext = new StringtypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, pascalParser.RULE_stringtype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this.match(pascalParser.STRING);
			this.state = 354;
			this.match(pascalParser.LBRACK);
			this.state = 357;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.IDENT:
				{
				this.state = 355;
				this.identifier();
				}
				break;
			case pascalParser.NUM_INT:
			case pascalParser.NUM_REAL:
				{
				this.state = 356;
				this.unsignedNumber();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 359;
			this.match(pascalParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 58, pascalParser.RULE_arrayType);
		try {
			this.state = 375;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 361;
				this.match(pascalParser.ARRAY);
				this.state = 362;
				this.match(pascalParser.LBRACK);
				this.state = 363;
				this.typeList();
				this.state = 364;
				this.match(pascalParser.RBRACK);
				this.state = 365;
				this.match(pascalParser.OF);
				this.state = 366;
				this.componentType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 368;
				this.match(pascalParser.ARRAY);
				this.state = 369;
				this.match(pascalParser.LBRACK2);
				this.state = 370;
				this.typeList();
				this.state = 371;
				this.match(pascalParser.RBRACK2);
				this.state = 372;
				this.match(pascalParser.OF);
				this.state = 373;
				this.componentType();
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
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, pascalParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.indexType();
			this.state = 382;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pascalParser.COMMA) {
				{
				{
				this.state = 378;
				this.match(pascalParser.COMMA);
				this.state = 379;
				this.indexType();
				}
				}
				this.state = 384;
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
	public indexType(): IndexTypeContext {
		let _localctx: IndexTypeContext = new IndexTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, pascalParser.RULE_indexType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
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
	public componentType(): ComponentTypeContext {
		let _localctx: ComponentTypeContext = new ComponentTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, pascalParser.RULE_componentType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
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
		this.enterRule(_localctx, 66, pascalParser.RULE_recordType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.match(pascalParser.RECORD);
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pascalParser.CASE || _la === pascalParser.IDENT) {
				{
				this.state = 390;
				this.fieldList();
				}
			}

			this.state = 393;
			this.match(pascalParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 68, pascalParser.RULE_fieldList);
		let _la: number;
		try {
			this.state = 401;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.IDENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 395;
				this.fixedPart();
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === pascalParser.SEMI) {
					{
					this.state = 396;
					this.match(pascalParser.SEMI);
					this.state = 397;
					this.variantPart();
					}
				}

				}
				break;
			case pascalParser.CASE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 400;
				this.variantPart();
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
	public fixedPart(): FixedPartContext {
		let _localctx: FixedPartContext = new FixedPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, pascalParser.RULE_fixedPart);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this.recordSection();
			this.state = 408;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 404;
					this.match(pascalParser.SEMI);
					this.state = 405;
					this.recordSection();
					}
					}
				}
				this.state = 410;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
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
	public recordSection(): RecordSectionContext {
		let _localctx: RecordSectionContext = new RecordSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, pascalParser.RULE_recordSection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.identifierList();
			this.state = 412;
			this.match(pascalParser.COLON);
			this.state = 413;
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
	public variantPart(): VariantPartContext {
		let _localctx: VariantPartContext = new VariantPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, pascalParser.RULE_variantPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.match(pascalParser.CASE);
			this.state = 416;
			this.tag();
			this.state = 417;
			this.match(pascalParser.OF);
			this.state = 418;
			this.variant();
			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pascalParser.SEMI) {
				{
				{
				this.state = 419;
				this.match(pascalParser.SEMI);
				this.state = 420;
				this.variant();
				}
				}
				this.state = 425;
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
	public tag(): TagContext {
		let _localctx: TagContext = new TagContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, pascalParser.RULE_tag);
		try {
			this.state = 431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 426;
				this.identifier();
				this.state = 427;
				this.match(pascalParser.COLON);
				this.state = 428;
				this.typeIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 430;
				this.typeIdentifier();
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
	public variant(): VariantContext {
		let _localctx: VariantContext = new VariantContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, pascalParser.RULE_variant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.constList();
			this.state = 434;
			this.match(pascalParser.COLON);
			this.state = 435;
			this.match(pascalParser.LPAREN);
			this.state = 436;
			this.fieldList();
			this.state = 437;
			this.match(pascalParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 80, pascalParser.RULE_setType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.match(pascalParser.SET);
			this.state = 440;
			this.match(pascalParser.OF);
			this.state = 441;
			this.baseType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseType(): BaseTypeContext {
		let _localctx: BaseTypeContext = new BaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, pascalParser.RULE_baseType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
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
	public fileType(): FileTypeContext {
		let _localctx: FileTypeContext = new FileTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, pascalParser.RULE_fileType);
		try {
			this.state = 449;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 445;
				this.match(pascalParser.FILE);
				this.state = 446;
				this.match(pascalParser.OF);
				this.state = 447;
				this.type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 448;
				this.match(pascalParser.FILE);
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
	public pointerType(): PointerTypeContext {
		let _localctx: PointerTypeContext = new PointerTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, pascalParser.RULE_pointerType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.match(pascalParser.POINTER);
			this.state = 452;
			this.typeIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationPart(): VariableDeclarationPartContext {
		let _localctx: VariableDeclarationPartContext = new VariableDeclarationPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, pascalParser.RULE_variableDeclarationPart);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.match(pascalParser.VAR);
			this.state = 455;
			this.variableDeclaration();
			this.state = 460;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 456;
					this.match(pascalParser.SEMI);
					this.state = 457;
					this.variableDeclaration();
					}
					}
				}
				this.state = 462;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 463;
			this.match(pascalParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 90, pascalParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this.identifierList();
			this.state = 466;
			this.match(pascalParser.COLON);
			this.state = 467;
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
	public procedureAndFunctionDeclarationPart(): ProcedureAndFunctionDeclarationPartContext {
		let _localctx: ProcedureAndFunctionDeclarationPartContext = new ProcedureAndFunctionDeclarationPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, pascalParser.RULE_procedureAndFunctionDeclarationPart);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this.procedureOrFunctionDeclaration();
			this.state = 470;
			this.match(pascalParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public procedureOrFunctionDeclaration(): ProcedureOrFunctionDeclarationContext {
		let _localctx: ProcedureOrFunctionDeclarationContext = new ProcedureOrFunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, pascalParser.RULE_procedureOrFunctionDeclaration);
		try {
			this.state = 474;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.PROCEDURE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 472;
				this.procedureDeclaration();
				}
				break;
			case pascalParser.FUNCTION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 473;
				this.functionDeclaration();
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
	public procedureDeclaration(): ProcedureDeclarationContext {
		let _localctx: ProcedureDeclarationContext = new ProcedureDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, pascalParser.RULE_procedureDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this.match(pascalParser.PROCEDURE);
			this.state = 477;
			this.identifier();
			this.state = 479;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pascalParser.LPAREN) {
				{
				this.state = 478;
				this.formalParameterList();
				}
			}

			this.state = 481;
			this.match(pascalParser.SEMI);
			this.state = 482;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, pascalParser.RULE_formalParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this.match(pascalParser.LPAREN);
			this.state = 485;
			this.formalParameterSection();
			this.state = 490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pascalParser.SEMI) {
				{
				{
				this.state = 486;
				this.match(pascalParser.SEMI);
				this.state = 487;
				this.formalParameterSection();
				}
				}
				this.state = 492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 493;
			this.match(pascalParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterSection(): FormalParameterSectionContext {
		let _localctx: FormalParameterSectionContext = new FormalParameterSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, pascalParser.RULE_formalParameterSection);
		try {
			this.state = 502;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.IDENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 495;
				this.parameterGroup();
				}
				break;
			case pascalParser.VAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 496;
				this.match(pascalParser.VAR);
				this.state = 497;
				this.parameterGroup();
				}
				break;
			case pascalParser.FUNCTION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 498;
				this.match(pascalParser.FUNCTION);
				this.state = 499;
				this.parameterGroup();
				}
				break;
			case pascalParser.PROCEDURE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 500;
				this.match(pascalParser.PROCEDURE);
				this.state = 501;
				this.parameterGroup();
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
	public parameterGroup(): ParameterGroupContext {
		let _localctx: ParameterGroupContext = new ParameterGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, pascalParser.RULE_parameterGroup);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this.identifierList();
			this.state = 505;
			this.match(pascalParser.COLON);
			this.state = 506;
			this.typeIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, pascalParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.identifier();
			this.state = 513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pascalParser.COMMA) {
				{
				{
				this.state = 509;
				this.match(pascalParser.COMMA);
				this.state = 510;
				this.identifier();
				}
				}
				this.state = 515;
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
	public constList(): ConstListContext {
		let _localctx: ConstListContext = new ConstListContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, pascalParser.RULE_constList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			this.constant();
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pascalParser.COMMA) {
				{
				{
				this.state = 517;
				this.match(pascalParser.COMMA);
				this.state = 518;
				this.constant();
				}
				}
				this.state = 523;
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
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, pascalParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this.match(pascalParser.FUNCTION);
			this.state = 525;
			this.identifier();
			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pascalParser.LPAREN) {
				{
				this.state = 526;
				this.formalParameterList();
				}
			}

			this.state = 529;
			this.match(pascalParser.COLON);
			this.state = 530;
			this.resultType();
			this.state = 531;
			this.match(pascalParser.SEMI);
			this.state = 532;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resultType(): ResultTypeContext {
		let _localctx: ResultTypeContext = new ResultTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, pascalParser.RULE_resultType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.typeIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 112, pascalParser.RULE_statement);
		try {
			this.state = 541;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.NUM_INT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 536;
				this.label();
				this.state = 537;
				this.match(pascalParser.COLON);
				this.state = 538;
				this.unlabelledStatement();
				}
				break;
			case pascalParser.BEGIN:
			case pascalParser.CASE:
			case pascalParser.ELSE:
			case pascalParser.END:
			case pascalParser.FOR:
			case pascalParser.GOTO:
			case pascalParser.IF:
			case pascalParser.REPEAT:
			case pascalParser.UNTIL:
			case pascalParser.WHILE:
			case pascalParser.WITH:
			case pascalParser.SEMI:
			case pascalParser.AT:
			case pascalParser.IDENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 540;
				this.unlabelledStatement();
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
	public unlabelledStatement(): UnlabelledStatementContext {
		let _localctx: UnlabelledStatementContext = new UnlabelledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, pascalParser.RULE_unlabelledStatement);
		try {
			this.state = 545;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.ELSE:
			case pascalParser.END:
			case pascalParser.GOTO:
			case pascalParser.UNTIL:
			case pascalParser.SEMI:
			case pascalParser.AT:
			case pascalParser.IDENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 543;
				this.simpleStatement();
				}
				break;
			case pascalParser.BEGIN:
			case pascalParser.CASE:
			case pascalParser.FOR:
			case pascalParser.IF:
			case pascalParser.REPEAT:
			case pascalParser.WHILE:
			case pascalParser.WITH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 544;
				this.structuredStatement();
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
	public simpleStatement(): SimpleStatementContext {
		let _localctx: SimpleStatementContext = new SimpleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, pascalParser.RULE_simpleStatement);
		try {
			this.state = 551;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 547;
				this.assignmentStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 548;
				this.procedureStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 549;
				this.gotoStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 550;
				this.emptyStatement();
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
	public assignmentStatement(): AssignmentStatementContext {
		let _localctx: AssignmentStatementContext = new AssignmentStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, pascalParser.RULE_assignmentStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 553;
			this.variable();
			this.state = 554;
			this.match(pascalParser.ASSIGN);
			this.state = 555;
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
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, pascalParser.RULE_variable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.AT:
				{
				this.state = 557;
				this.match(pascalParser.AT);
				this.state = 558;
				this.identifier();
				}
				break;
			case pascalParser.IDENT:
				{
				this.state = 559;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (pascalParser.LBRACK - 57)) | (1 << (pascalParser.LBRACK2 - 57)) | (1 << (pascalParser.POINTER - 57)) | (1 << (pascalParser.DOT - 57)))) !== 0)) {
				{
				this.state = 587;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case pascalParser.LBRACK:
					{
					this.state = 562;
					this.match(pascalParser.LBRACK);
					this.state = 563;
					this.expression();
					this.state = 568;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === pascalParser.COMMA) {
						{
						{
						this.state = 564;
						this.match(pascalParser.COMMA);
						this.state = 565;
						this.expression();
						}
						}
						this.state = 570;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 571;
					this.match(pascalParser.RBRACK);
					}
					break;
				case pascalParser.LBRACK2:
					{
					this.state = 573;
					this.match(pascalParser.LBRACK2);
					this.state = 574;
					this.expression();
					this.state = 579;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === pascalParser.COMMA) {
						{
						{
						this.state = 575;
						this.match(pascalParser.COMMA);
						this.state = 576;
						this.expression();
						}
						}
						this.state = 581;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 582;
					this.match(pascalParser.RBRACK2);
					}
					break;
				case pascalParser.DOT:
					{
					this.state = 584;
					this.match(pascalParser.DOT);
					this.state = 585;
					this.identifier();
					}
					break;
				case pascalParser.POINTER:
					{
					this.state = 586;
					this.match(pascalParser.POINTER);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 591;
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
		this.enterRule(_localctx, 122, pascalParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.simpleExpression();
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pascalParser.IN || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (pascalParser.EQUAL - 49)) | (1 << (pascalParser.NOT_EQUAL - 49)) | (1 << (pascalParser.LT - 49)) | (1 << (pascalParser.LE - 49)) | (1 << (pascalParser.GE - 49)) | (1 << (pascalParser.GT - 49)))) !== 0)) {
				{
				this.state = 593;
				this.relationaloperator();
				this.state = 594;
				this.expression();
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
	public relationaloperator(): RelationaloperatorContext {
		let _localctx: RelationaloperatorContext = new RelationaloperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, pascalParser.RULE_relationaloperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 598;
			_la = this._input.LA(1);
			if (!(_la === pascalParser.IN || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (pascalParser.EQUAL - 49)) | (1 << (pascalParser.NOT_EQUAL - 49)) | (1 << (pascalParser.LT - 49)) | (1 << (pascalParser.LE - 49)) | (1 << (pascalParser.GE - 49)) | (1 << (pascalParser.GT - 49)))) !== 0))) {
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
	public simpleExpression(): SimpleExpressionContext {
		let _localctx: SimpleExpressionContext = new SimpleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, pascalParser.RULE_simpleExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 600;
			this.term();
			this.state = 604;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (pascalParser.OR - 26)) | (1 << (pascalParser.PLUS - 26)) | (1 << (pascalParser.MINUS - 26)))) !== 0)) {
				{
				this.state = 601;
				this.additiveoperator();
				this.state = 602;
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
	public additiveoperator(): AdditiveoperatorContext {
		let _localctx: AdditiveoperatorContext = new AdditiveoperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, pascalParser.RULE_additiveoperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 606;
			_la = this._input.LA(1);
			if (!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (pascalParser.OR - 26)) | (1 << (pascalParser.PLUS - 26)) | (1 << (pascalParser.MINUS - 26)))) !== 0))) {
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
		this.enterRule(_localctx, 130, pascalParser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 608;
			this.signedFactor();
			this.state = 612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pascalParser.AND) | (1 << pascalParser.DIV) | (1 << pascalParser.MOD))) !== 0) || _la === pascalParser.STAR || _la === pascalParser.SLASH) {
				{
				this.state = 609;
				this.multiplicativeoperator();
				this.state = 610;
				this.term();
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
	public multiplicativeoperator(): MultiplicativeoperatorContext {
		let _localctx: MultiplicativeoperatorContext = new MultiplicativeoperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, pascalParser.RULE_multiplicativeoperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pascalParser.AND) | (1 << pascalParser.DIV) | (1 << pascalParser.MOD))) !== 0) || _la === pascalParser.STAR || _la === pascalParser.SLASH)) {
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
	public signedFactor(): SignedFactorContext {
		let _localctx: SignedFactorContext = new SignedFactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, pascalParser.RULE_signedFactor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pascalParser.PLUS || _la === pascalParser.MINUS) {
				{
				this.state = 616;
				_la = this._input.LA(1);
				if (!(_la === pascalParser.PLUS || _la === pascalParser.MINUS)) {
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

			this.state = 619;
			this.factor();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 136, pascalParser.RULE_factor);
		try {
			this.state = 632;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 621;
				this.variable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 622;
				this.match(pascalParser.LPAREN);
				this.state = 623;
				this.expression();
				this.state = 624;
				this.match(pascalParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 626;
				this.functionDesignator();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 627;
				this.unsignedConstant();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 628;
				this.set();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 629;
				this.match(pascalParser.NOT);
				this.state = 630;
				this.factor();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 631;
				this.bool();
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
	public unsignedConstant(): UnsignedConstantContext {
		let _localctx: UnsignedConstantContext = new UnsignedConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, pascalParser.RULE_unsignedConstant);
		try {
			this.state = 638;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.NUM_INT:
			case pascalParser.NUM_REAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 634;
				this.unsignedNumber();
				}
				break;
			case pascalParser.CHR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 635;
				this.constantChr();
				}
				break;
			case pascalParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 636;
				this.string();
				}
				break;
			case pascalParser.NIL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 637;
				this.match(pascalParser.NIL);
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
	public functionDesignator(): FunctionDesignatorContext {
		let _localctx: FunctionDesignatorContext = new FunctionDesignatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, pascalParser.RULE_functionDesignator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this.identifier();
			this.state = 641;
			this.match(pascalParser.LPAREN);
			this.state = 642;
			this.parameterList();
			this.state = 643;
			this.match(pascalParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, pascalParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			this.actualParameter();
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pascalParser.COMMA) {
				{
				{
				this.state = 646;
				this.match(pascalParser.COMMA);
				this.state = 647;
				this.actualParameter();
				}
				}
				this.state = 652;
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
	public set(): SetContext {
		let _localctx: SetContext = new SetContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, pascalParser.RULE_set);
		try {
			this.state = 661;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.LBRACK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 653;
				this.match(pascalParser.LBRACK);
				this.state = 654;
				this.elementList();
				this.state = 655;
				this.match(pascalParser.RBRACK);
				}
				break;
			case pascalParser.LBRACK2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 657;
				this.match(pascalParser.LBRACK2);
				this.state = 658;
				this.elementList();
				this.state = 659;
				this.match(pascalParser.RBRACK2);
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
	public elementList(): ElementListContext {
		let _localctx: ElementListContext = new ElementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, pascalParser.RULE_elementList);
		let _la: number;
		try {
			this.state = 672;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.CHR:
			case pascalParser.NIL:
			case pascalParser.NOT:
			case pascalParser.PLUS:
			case pascalParser.MINUS:
			case pascalParser.LPAREN:
			case pascalParser.LBRACK:
			case pascalParser.LBRACK2:
			case pascalParser.AT:
			case pascalParser.TRUE:
			case pascalParser.FALSE:
			case pascalParser.IDENT:
			case pascalParser.STRING_LITERAL:
			case pascalParser.NUM_INT:
			case pascalParser.NUM_REAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 663;
				this.element();
				this.state = 668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === pascalParser.COMMA) {
					{
					{
					this.state = 664;
					this.match(pascalParser.COMMA);
					this.state = 665;
					this.element();
					}
					}
					this.state = 670;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case pascalParser.RBRACK:
			case pascalParser.RBRACK2:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
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
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, pascalParser.RULE_element);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 674;
			this.expression();
			this.state = 677;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pascalParser.DOTDOT) {
				{
				this.state = 675;
				this.match(pascalParser.DOTDOT);
				this.state = 676;
				this.expression();
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
	public procedureStatement(): ProcedureStatementContext {
		let _localctx: ProcedureStatementContext = new ProcedureStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, pascalParser.RULE_procedureStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 679;
			this.identifier();
			this.state = 684;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pascalParser.LPAREN) {
				{
				this.state = 680;
				this.match(pascalParser.LPAREN);
				this.state = 681;
				this.parameterList();
				this.state = 682;
				this.match(pascalParser.RPAREN);
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
	public actualParameter(): ActualParameterContext {
		let _localctx: ActualParameterContext = new ActualParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, pascalParser.RULE_actualParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 686;
			this.expression();
			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pascalParser.COLON) {
				{
				{
				this.state = 687;
				this.parameterwidth();
				}
				}
				this.state = 692;
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
	public parameterwidth(): ParameterwidthContext {
		let _localctx: ParameterwidthContext = new ParameterwidthContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, pascalParser.RULE_parameterwidth);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 693;
			this.match(pascalParser.COLON);
			this.state = 694;
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
	public gotoStatement(): GotoStatementContext {
		let _localctx: GotoStatementContext = new GotoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, pascalParser.RULE_gotoStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 696;
			this.match(pascalParser.GOTO);
			this.state = 697;
			this.label();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, pascalParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public empty(): EmptyContext {
		let _localctx: EmptyContext = new EmptyContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, pascalParser.RULE_empty);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structuredStatement(): StructuredStatementContext {
		let _localctx: StructuredStatementContext = new StructuredStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, pascalParser.RULE_structuredStatement);
		try {
			this.state = 707;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.BEGIN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 703;
				this.compoundStatement();
				}
				break;
			case pascalParser.CASE:
			case pascalParser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 704;
				this.conditionalStatement();
				}
				break;
			case pascalParser.FOR:
			case pascalParser.REPEAT:
			case pascalParser.WHILE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 705;
				this.repetetiveStatement();
				}
				break;
			case pascalParser.WITH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 706;
				this.withStatement();
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
	public compoundStatement(): CompoundStatementContext {
		let _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, pascalParser.RULE_compoundStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this.match(pascalParser.BEGIN);
			this.state = 710;
			this.statements();
			this.state = 711;
			this.match(pascalParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, pascalParser.RULE_statements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 713;
			this.statement();
			this.state = 718;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pascalParser.SEMI) {
				{
				{
				this.state = 714;
				this.match(pascalParser.SEMI);
				this.state = 715;
				this.statement();
				}
				}
				this.state = 720;
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
	public conditionalStatement(): ConditionalStatementContext {
		let _localctx: ConditionalStatementContext = new ConditionalStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, pascalParser.RULE_conditionalStatement);
		try {
			this.state = 723;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 721;
				this.ifStatement();
				}
				break;
			case pascalParser.CASE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 722;
				this.caseStatement();
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
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, pascalParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
			this.match(pascalParser.IF);
			this.state = 726;
			this.expression();
			this.state = 727;
			this.match(pascalParser.THEN);
			this.state = 728;
			this.statement();
			this.state = 731;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 729;
				this.match(pascalParser.ELSE);
				this.state = 730;
				this.statement();
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
	public caseStatement(): CaseStatementContext {
		let _localctx: CaseStatementContext = new CaseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, pascalParser.RULE_caseStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 733;
			this.match(pascalParser.CASE);
			this.state = 734;
			this.expression();
			this.state = 735;
			this.match(pascalParser.OF);
			this.state = 736;
			this.caseListElement();
			this.state = 741;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 737;
					this.match(pascalParser.SEMI);
					this.state = 738;
					this.caseListElement();
					}
					}
				}
				this.state = 743;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			}
			this.state = 747;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pascalParser.SEMI) {
				{
				this.state = 744;
				this.match(pascalParser.SEMI);
				this.state = 745;
				this.match(pascalParser.ELSE);
				this.state = 746;
				this.statements();
				}
			}

			this.state = 749;
			this.match(pascalParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseListElement(): CaseListElementContext {
		let _localctx: CaseListElementContext = new CaseListElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, pascalParser.RULE_caseListElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 751;
			this.constList();
			this.state = 752;
			this.match(pascalParser.COLON);
			this.state = 753;
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
	public repetetiveStatement(): RepetetiveStatementContext {
		let _localctx: RepetetiveStatementContext = new RepetetiveStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, pascalParser.RULE_repetetiveStatement);
		try {
			this.state = 758;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pascalParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 755;
				this.whileStatement();
				}
				break;
			case pascalParser.REPEAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 756;
				this.repeatStatement();
				}
				break;
			case pascalParser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 757;
				this.forStatement();
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
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, pascalParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 760;
			this.match(pascalParser.WHILE);
			this.state = 761;
			this.expression();
			this.state = 762;
			this.match(pascalParser.DO);
			this.state = 763;
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
	public repeatStatement(): RepeatStatementContext {
		let _localctx: RepeatStatementContext = new RepeatStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, pascalParser.RULE_repeatStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 765;
			this.match(pascalParser.REPEAT);
			this.state = 766;
			this.statements();
			this.state = 767;
			this.match(pascalParser.UNTIL);
			this.state = 768;
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
		this.enterRule(_localctx, 182, pascalParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 770;
			this.match(pascalParser.FOR);
			this.state = 771;
			this.identifier();
			this.state = 772;
			this.match(pascalParser.ASSIGN);
			this.state = 773;
			this.forList();
			this.state = 774;
			this.match(pascalParser.DO);
			this.state = 775;
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
	public forList(): ForListContext {
		let _localctx: ForListContext = new ForListContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, pascalParser.RULE_forList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			this.initialValue();
			this.state = 778;
			_la = this._input.LA(1);
			if (!(_la === pascalParser.DOWNTO || _la === pascalParser.TO)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 779;
			this.finalValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initialValue(): InitialValueContext {
		let _localctx: InitialValueContext = new InitialValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, pascalParser.RULE_initialValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
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
	public finalValue(): FinalValueContext {
		let _localctx: FinalValueContext = new FinalValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, pascalParser.RULE_finalValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
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
	public withStatement(): WithStatementContext {
		let _localctx: WithStatementContext = new WithStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, pascalParser.RULE_withStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 785;
			this.match(pascalParser.WITH);
			this.state = 786;
			this.recordVariableList();
			this.state = 787;
			this.match(pascalParser.DO);
			this.state = 788;
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
	public recordVariableList(): RecordVariableListContext {
		let _localctx: RecordVariableListContext = new RecordVariableListContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, pascalParser.RULE_recordVariableList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			this.variable();
			this.state = 795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pascalParser.COMMA) {
				{
				{
				this.state = 791;
				this.match(pascalParser.COMMA);
				this.state = 792;
				this.variable();
				}
				}
				this.state = 797;
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03R\u0321\x04\x02" +
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
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x03\x02\x03\x02\x05\x02\xC7\n\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xD2\n\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xDA\n\x03\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07" +
		"\x05\xE5\n\x05\f\x05\x0E\x05\xE8\v\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\xF4\n\x07\f\x07" +
		"\x0E\x07\xF7\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t" +
		"\x06\t\u0101\n\t\r\t\x0E\t\u0102\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x05\f\u0118\n\f\x03\r\x03\r\x05\r\u011C\n\r\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x06\x13\u012C\n\x13\r\x13\x0E\x13\u012D\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x05\x14\u0135\n\x14\x03\x15\x03\x15\x05\x15\u0139" +
		"\n\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u0140\n\x16\x03" +
		"\x17\x03\x17\x03\x17\x05\x17\u0145\n\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x05\x18\u014B\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u0157\n\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x05\x1C\u015C\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0162\n\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0168\n\x1E\x03\x1E\x03\x1E\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u017A\n\x1F\x03 \x03 \x03" +
		" \x07 \u017F\n \f \x0E \u0182\v \x03!\x03!\x03\"\x03\"\x03#\x03#\x05#" +
		"\u018A\n#\x03#\x03#\x03$\x03$\x03$\x05$\u0191\n$\x03$\x05$\u0194\n$\x03" +
		"%\x03%\x03%\x07%\u0199\n%\f%\x0E%\u019C\v%\x03&\x03&\x03&\x03&\x03\'\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x07\'\u01A8\n\'\f\'\x0E\'\u01AB\v\'\x03(\x03" +
		"(\x03(\x03(\x03(\x05(\u01B2\n(\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03" +
		"*\x03*\x03*\x03+\x03+\x03,\x03,\x03,\x03,\x05,\u01C4\n,\x03-\x03-\x03" +
		"-\x03.\x03.\x03.\x03.\x07.\u01CD\n.\f.\x0E.\u01D0\v.\x03.\x03.\x03/\x03" +
		"/\x03/\x03/\x030\x030\x030\x031\x031\x051\u01DD\n1\x032\x032\x032\x05" +
		"2\u01E2\n2\x032\x032\x032\x033\x033\x033\x033\x073\u01EB\n3\f3\x0E3\u01EE" +
		"\v3\x033\x033\x034\x034\x034\x034\x034\x034\x034\x054\u01F9\n4\x035\x03" +
		"5\x035\x035\x036\x036\x036\x076\u0202\n6\f6\x0E6\u0205\v6\x037\x037\x03" +
		"7\x077\u020A\n7\f7\x0E7\u020D\v7\x038\x038\x038\x058\u0212\n8\x038\x03" +
		"8\x038\x038\x038\x039\x039\x03:\x03:\x03:\x03:\x03:\x05:\u0220\n:\x03" +
		";\x03;\x05;\u0224\n;\x03<\x03<\x03<\x03<\x05<\u022A\n<\x03=\x03=\x03=" +
		"\x03=\x03>\x03>\x03>\x05>\u0233\n>\x03>\x03>\x03>\x03>\x07>\u0239\n>\f" +
		">\x0E>\u023C\v>\x03>\x03>\x03>\x03>\x03>\x03>\x07>\u0244\n>\f>\x0E>\u0247" +
		"\v>\x03>\x03>\x03>\x03>\x03>\x07>\u024E\n>\f>\x0E>\u0251\v>\x03?\x03?" +
		"\x03?\x03?\x05?\u0257\n?\x03@\x03@\x03A\x03A\x03A\x03A\x05A\u025F\nA\x03" +
		"B\x03B\x03C\x03C\x03C\x03C\x05C\u0267\nC\x03D\x03D\x03E\x05E\u026C\nE" +
		"\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05" +
		"F\u027B\nF\x03G\x03G\x03G\x03G\x05G\u0281\nG\x03H\x03H\x03H\x03H\x03H" +
		"\x03I\x03I\x03I\x07I\u028B\nI\fI\x0EI\u028E\vI\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x05J\u0298\nJ\x03K\x03K\x03K\x07K\u029D\nK\fK\x0EK\u02A0" +
		"\vK\x03K\x05K\u02A3\nK\x03L\x03L\x03L\x05L\u02A8\nL\x03M\x03M\x03M\x03" +
		"M\x03M\x05M\u02AF\nM\x03N\x03N\x07N\u02B3\nN\fN\x0EN\u02B6\vN\x03O\x03" +
		"O\x03O\x03P\x03P\x03P\x03Q\x03Q\x03R\x03R\x03S\x03S\x03S\x03S\x05S\u02C6" +
		"\nS\x03T\x03T\x03T\x03T\x03U\x03U\x03U\x07U\u02CF\nU\fU\x0EU\u02D2\vU" +
		"\x03V\x03V\x05V\u02D6\nV\x03W\x03W\x03W\x03W\x03W\x03W\x05W\u02DE\nW\x03" +
		"X\x03X\x03X\x03X\x03X\x03X\x07X\u02E6\nX\fX\x0EX\u02E9\vX\x03X\x03X\x03" +
		"X\x05X\u02EE\nX\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x05Z\u02F9" +
		"\nZ\x03[\x03[\x03[\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x03\\\x03]\x03]\x03" +
		"]\x03]\x03]\x03]\x03]\x03^\x03^\x03^\x03^\x03_\x03_\x03`\x03`\x03a\x03" +
		"a\x03a\x03a\x03a\x03b\x03b\x03b\x07b\u031C\nb\fb\x0Eb\u031F\vb\x03b\x02" +
		"\x02\x02c\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
		"\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
		"\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
		"\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
		"\x02\t\x03\x02+,\x03\x02JK\x07\x02\x06\x06\b\b\x16\x16  HH\x04\x02\x15" +
		"\x1538\x04\x02\x1C\x1C+,\x06\x02\x03\x03\v\v\x18\x18-.\x04\x02\r\r%%\x02" +
		"\u031F\x02\xC4\x03\x02\x02\x02\x04\xD9\x03\x02\x02\x02\x06\xDB\x03\x02" +
		"\x02\x02\b\xE6\x03\x02\x02\x02\n\xEB\x03\x02\x02\x02\f\xEF\x03\x02\x02" +
		"\x02\x0E\xFA\x03\x02\x02\x02\x10\xFC\x03\x02\x02\x02\x12\u0104\x03\x02" +
		"\x02\x02\x14\u0108\x03\x02\x02\x02\x16\u0117\x03\x02\x02\x02\x18\u011B" +
		"\x03\x02\x02\x02\x1A\u011D\x03\x02\x02\x02\x1C\u011F\x03\x02\x02\x02\x1E" +
		"\u0121\x03\x02\x02\x02 \u0123\x03\x02\x02\x02\"\u0125\x03\x02\x02\x02" +
		"$\u0127\x03\x02\x02\x02&\u012F\x03\x02\x02\x02(\u0136\x03\x02\x02\x02" +
		"*\u013D\x03\x02\x02\x02,\u0144\x03\x02\x02\x02.\u014A\x03\x02\x02\x02" +
		"0\u014C\x03\x02\x02\x022\u0150\x03\x02\x02\x024\u0156\x03\x02\x02\x02" +
		"6\u015B\x03\x02\x02\x028\u0161\x03\x02\x02\x02:\u0163\x03\x02\x02\x02" +
		"<\u0179\x03\x02\x02\x02>\u017B\x03\x02\x02\x02@\u0183\x03\x02\x02\x02" +
		"B\u0185\x03\x02\x02\x02D\u0187\x03\x02\x02\x02F\u0193\x03\x02\x02\x02" +
		"H\u0195\x03\x02\x02\x02J\u019D\x03\x02\x02\x02L\u01A1\x03\x02\x02\x02" +
		"N\u01B1\x03\x02\x02\x02P\u01B3\x03\x02\x02\x02R\u01B9\x03\x02\x02\x02" +
		"T\u01BD\x03\x02\x02\x02V\u01C3\x03\x02\x02\x02X\u01C5\x03\x02\x02\x02" +
		"Z\u01C8\x03\x02\x02\x02\\\u01D3\x03\x02\x02\x02^\u01D7\x03\x02\x02\x02" +
		"`\u01DC\x03\x02\x02\x02b\u01DE\x03\x02\x02\x02d\u01E6\x03\x02\x02\x02" +
		"f\u01F8\x03\x02\x02\x02h\u01FA\x03\x02\x02\x02j\u01FE\x03\x02\x02\x02" +
		"l\u0206\x03\x02\x02\x02n\u020E\x03\x02\x02\x02p\u0218\x03\x02\x02\x02" +
		"r\u021F\x03\x02\x02\x02t\u0223\x03\x02\x02\x02v\u0229\x03\x02\x02\x02" +
		"x\u022B\x03\x02\x02\x02z\u0232\x03\x02\x02\x02|\u0252\x03\x02\x02\x02" +
		"~\u0258\x03\x02\x02\x02\x80\u025A\x03\x02\x02\x02\x82\u0260\x03\x02\x02" +
		"\x02\x84\u0262\x03\x02\x02\x02\x86\u0268\x03\x02\x02\x02\x88\u026B\x03" +
		"\x02\x02\x02\x8A\u027A\x03\x02\x02\x02\x8C\u0280\x03\x02\x02\x02\x8E\u0282" +
		"\x03\x02\x02\x02\x90\u0287\x03\x02\x02\x02\x92\u0297\x03\x02\x02\x02\x94" +
		"\u02A2\x03\x02\x02\x02\x96\u02A4\x03\x02\x02\x02\x98\u02A9\x03\x02\x02" +
		"\x02\x9A\u02B0\x03\x02\x02\x02\x9C\u02B7\x03\x02\x02\x02\x9E\u02BA\x03" +
		"\x02\x02\x02\xA0\u02BD\x03\x02\x02\x02\xA2\u02BF\x03\x02\x02\x02\xA4\u02C5" +
		"\x03\x02\x02\x02\xA6\u02C7\x03\x02\x02\x02\xA8\u02CB\x03\x02\x02\x02\xAA" +
		"\u02D5\x03\x02\x02\x02\xAC\u02D7\x03\x02\x02\x02\xAE\u02DF\x03\x02\x02" +
		"\x02\xB0\u02F1\x03\x02\x02\x02\xB2\u02F8\x03\x02\x02\x02\xB4\u02FA\x03" +
		"\x02\x02\x02\xB6\u02FF\x03\x02\x02\x02\xB8\u0304\x03\x02\x02\x02\xBA\u030B" +
		"\x03\x02\x02\x02\xBC\u030F\x03\x02\x02\x02\xBE\u0311\x03\x02\x02\x02\xC0" +
		"\u0313\x03\x02\x02\x02\xC2\u0318\x03\x02\x02\x02\xC4\xC6\x05\x04\x03\x02" +
		"\xC5\xC7\x07F\x02\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02" +
		"\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x05\b\x05\x02\xC9\xCA\x07A\x02\x02\xCA" +
		"\x03\x03\x02\x02\x02\xCB\xCC\x07\x1F\x02\x02\xCC\xD1\x05\x06\x04\x02\xCD" +
		"\xCE\x079\x02\x02\xCE\xCF\x05j6\x02\xCF\xD0\x07:\x02\x02\xD0\xD2\x03\x02" +
		"\x02\x02\xD1\xCD\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x03\x02" +
		"\x02\x02\xD3\xD4\x071\x02\x02\xD4\xDA\x03\x02\x02\x02\xD5\xD6\x07E\x02" +
		"\x02\xD6\xD7\x05\x06\x04\x02\xD7\xD8\x071\x02\x02\xD8\xDA\x03\x02\x02" +
		"\x02\xD9\xCB\x03\x02\x02\x02\xD9\xD5\x03\x02\x02\x02\xDA\x05\x03\x02\x02" +
		"\x02\xDB\xDC\x07O\x02\x02\xDC\x07\x03\x02\x02\x02\xDD\xE5\x05\f\x07\x02" +
		"\xDE\xE5\x05\x10\t\x02\xDF\xE5\x05$\x13\x02\xE0\xE5\x05Z.\x02\xE1\xE5" +
		"\x05^0\x02\xE2\xE5\x05\n\x06\x02\xE3\xE5\x07I\x02\x02\xE4\xDD\x03\x02" +
		"\x02\x02\xE4\xDE\x03\x02\x02\x02\xE4\xDF\x03\x02\x02\x02\xE4\xE0\x03\x02" +
		"\x02\x02\xE4\xE1\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE3\x03\x02" +
		"\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02" +
		"\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEA\x05\xA6" +
		"T\x02\xEA\t\x03\x02\x02\x02\xEB\xEC\x07G\x02\x02\xEC\xED\x05j6\x02\xED" +
		"\xEE\x071\x02\x02\xEE\v\x03\x02\x02\x02\xEF\xF0\x07\x17\x02\x02\xF0\xF5" +
		"\x05\x0E\b\x02\xF1\xF2\x070\x02\x02\xF2\xF4\x05\x0E\b\x02\xF3\xF1\x03" +
		"\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03" +
		"\x02\x02\x02\xF6\xF8\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xF9\x07" +
		"1\x02\x02\xF9\r\x03\x02\x02\x02\xFA\xFB\x05\x1A\x0E\x02\xFB\x0F\x03\x02" +
		"\x02\x02\xFC\u0100\x07\n\x02\x02\xFD\xFE\x05\x12\n\x02\xFE\xFF\x071\x02" +
		"\x02\xFF\u0101\x03\x02\x02\x02\u0100\xFD\x03\x02\x02\x02\u0101\u0102\x03" +
		"\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103" +
		"\x11\x03\x02\x02\x02\u0104\u0105\x05\x06\x04\x02\u0105\u0106\x073\x02" +
		"\x02\u0106\u0107\x05\x16\f\x02\u0107\x13\x03\x02\x02\x02\u0108\u0109\x07" +
		"\t\x02\x02\u0109\u010A\x079\x02\x02\u010A\u010B\x05\x1A\x0E\x02\u010B" +
		"\u010C\x07:\x02\x02\u010C\x15\x03\x02\x02\x02\u010D\u0118\x05\x18\r\x02" +
		"\u010E\u010F\x05\x1E\x10\x02\u010F\u0110\x05\x18\r\x02\u0110\u0118\x03" +
		"\x02\x02\x02\u0111\u0118\x05\x06\x04\x02\u0112\u0113\x05\x1E\x10\x02\u0113" +
		"\u0114\x05\x06\x04\x02\u0114\u0118\x03\x02\x02\x02\u0115\u0118\x05\"\x12" +
		"\x02\u0116\u0118\x05\x14\v\x02\u0117\u010D\x03\x02\x02\x02\u0117\u010E" +
		"\x03\x02\x02\x02\u0117\u0111\x03\x02\x02\x02\u0117\u0112\x03\x02\x02\x02" +
		"\u0117\u0115\x03\x02\x02\x02\u0117\u0116\x03\x02\x02\x02\u0118\x17\x03" +
		"\x02\x02\x02\u0119\u011C\x05\x1A\x0E\x02\u011A\u011C\x05\x1C\x0F\x02\u011B" +
		"\u0119\x03\x02\x02\x02\u011B\u011A\x03\x02\x02\x02\u011C\x19\x03\x02\x02" +
		"\x02\u011D\u011E\x07Q\x02\x02\u011E\x1B\x03\x02\x02\x02\u011F\u0120\x07" +
		"R\x02\x02\u0120\x1D\x03\x02\x02\x02\u0121\u0122\t\x02\x02\x02\u0122\x1F" +
		"\x03\x02\x02\x02\u0123\u0124\t\x03\x02\x02\u0124!\x03\x02\x02\x02\u0125" +
		"\u0126\x07P\x02\x02\u0126#\x03\x02\x02\x02\u0127\u012B\x07&\x02\x02\u0128" +
		"\u0129\x05&\x14\x02\u0129\u012A\x071\x02\x02\u012A\u012C\x03\x02\x02\x02" +
		"\u012B\u0128\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012B\x03" +
		"\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E%\x03\x02\x02\x02\u012F" +
		"\u0130\x05\x06\x04\x02\u0130\u0134\x073\x02\x02\u0131\u0135\x05,\x17\x02" +
		"\u0132\u0135\x05(\x15\x02\u0133\u0135\x05*\x16\x02\u0134\u0131\x03\x02" +
		"\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0133\x03\x02\x02\x02\u0135" +
		"\'\x03\x02\x02\x02\u0136\u0138\x07\x12\x02\x02\u0137\u0139\x05d3\x02\u0138" +
		"\u0137\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013A\x03\x02" +
		"\x02\x02\u013A\u013B\x072\x02\x02\u013B\u013C\x05p9\x02\u013C)\x03\x02" +
		"\x02\x02\u013D\u013F\x07\x1E\x02\x02\u013E\u0140\x05d3\x02\u013F\u013E" +
		"\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140+\x03\x02\x02\x02\u0141" +
		"\u0145\x05.\x18\x02\u0142\u0145\x056\x1C\x02\u0143\u0145\x05X-\x02\u0144" +
		"\u0141\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0143\x03\x02" +
		"\x02\x02\u0145-\x03\x02\x02\x02\u0146\u014B\x050\x19\x02\u0147\u014B\x05" +
		"2\x1A\x02\u0148\u014B\x054\x1B\x02\u0149\u014B\x05:\x1E\x02\u014A\u0146" +
		"\x03\x02\x02\x02\u014A\u0147\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02" +
		"\u014A\u0149\x03\x02\x02\x02\u014B/\x03\x02\x02\x02\u014C\u014D\x079\x02" +
		"\x02\u014D\u014E\x05j6\x02\u014E\u014F\x07:\x02\x02\u014F1\x03\x02\x02" +
		"\x02\u0150\u0151\x05\x16\f\x02\u0151\u0152\x07B\x02\x02\u0152\u0153\x05" +
		"\x16\f\x02\u01533\x03\x02\x02\x02\u0154\u0157\x05\x06\x04\x02\u0155\u0157" +
		"\t\x04\x02\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0155\x03\x02\x02\x02" +
		"\u01575\x03\x02\x02\x02\u0158\u0159\x07\x1D\x02\x02\u0159\u015C\x058\x1D" +
		"\x02\u015A\u015C\x058\x1D\x02\u015B\u0158\x03\x02\x02\x02\u015B\u015A" +
		"\x03\x02\x02\x02\u015C7\x03\x02\x02\x02\u015D\u0162\x05<\x1F\x02\u015E" +
		"\u0162\x05D#\x02\u015F\u0162\x05R*\x02\u0160\u0162\x05V,\x02\u0161\u015D" +
		"\x03\x02\x02\x02\u0161\u015E\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02" +
		"\u0161\u0160\x03\x02\x02\x02\u01629\x03\x02\x02\x02\u0163\u0164\x07H\x02" +
		"\x02\u0164\u0167\x07;\x02\x02\u0165\u0168\x05\x06\x04\x02\u0166\u0168" +
		"\x05\x18\r\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0166\x03\x02\x02\x02" +
		"\u0168\u0169\x03\x02\x02\x02\u0169\u016A\x07=\x02\x02\u016A;\x03\x02\x02" +
		"\x02\u016B\u016C\x07\x04\x02\x02\u016C\u016D\x07;\x02\x02\u016D\u016E" +
		"\x05> \x02\u016E\u016F\x07=\x02\x02\u016F\u0170\x07\x1B\x02\x02\u0170" +
		"\u0171\x05B\"\x02\u0171\u017A\x03\x02\x02\x02\u0172\u0173\x07\x04\x02" +
		"\x02\u0173\u0174\x07<\x02\x02\u0174\u0175\x05> \x02\u0175\u0176\x07>\x02" +
		"\x02\u0176\u0177\x07\x1B\x02\x02\u0177\u0178\x05B\"\x02\u0178\u017A\x03" +
		"\x02\x02\x02\u0179\u016B\x03\x02\x02\x02\u0179\u0172\x03\x02\x02\x02\u017A" +
		"=\x03\x02\x02\x02\u017B\u0180\x05@!\x02\u017C\u017D\x070\x02\x02\u017D" +
		"\u017F\x05@!\x02\u017E\u017C\x03\x02\x02\x02\u017F\u0182\x03\x02\x02\x02" +
		"\u0180\u017E\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181?\x03\x02" +
		"\x02\x02\u0182\u0180\x03\x02\x02\x02\u0183\u0184\x05.\x18\x02\u0184A\x03" +
		"\x02\x02\x02\u0185\u0186\x05,\x17\x02\u0186C\x03\x02\x02\x02\u0187\u0189" +
		"\x07!\x02\x02\u0188\u018A\x05F$\x02\u0189\u0188\x03\x02\x02\x02\u0189" +
		"\u018A\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018C\x07\x0F" +
		"\x02\x02\u018CE\x03\x02\x02\x02\u018D\u0190\x05H%\x02\u018E\u018F\x07" +
		"1\x02\x02\u018F\u0191\x05L\'\x02\u0190\u018E\x03\x02\x02\x02\u0190\u0191" +
		"\x03\x02\x02\x02\u0191\u0194\x03\x02\x02\x02\u0192\u0194\x05L\'\x02\u0193" +
		"\u018D\x03\x02\x02\x02\u0193\u0192\x03\x02\x02\x02\u0194G\x03\x02\x02" +
		"\x02\u0195\u019A\x05J&\x02\u0196\u0197\x071\x02\x02\u0197\u0199\x05J&" +
		"\x02\u0198\u0196\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A\u0198" +
		"\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019BI\x03\x02\x02\x02\u019C" +
		"\u019A\x03\x02\x02\x02\u019D\u019E\x05j6\x02\u019E\u019F\x072\x02\x02" +
		"\u019F\u01A0\x05,\x17\x02\u01A0K\x03\x02\x02\x02\u01A1\u01A2\x07\x07\x02" +
		"\x02\u01A2\u01A3\x05N(\x02\u01A3\u01A4\x07\x1B\x02\x02\u01A4\u01A9\x05" +
		"P)\x02\u01A5\u01A6\x071\x02\x02\u01A6\u01A8\x05P)\x02\u01A7\u01A5\x03" +
		"\x02\x02\x02\u01A8\u01AB\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9" +
		"\u01AA\x03\x02\x02\x02\u01AAM\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02" +
		"\x02\u01AC\u01AD\x05\x06\x04\x02\u01AD\u01AE\x072\x02\x02\u01AE\u01AF" +
		"\x054\x1B\x02\u01AF\u01B2\x03\x02\x02\x02\u01B0\u01B2\x054\x1B\x02\u01B1" +
		"\u01AC\x03\x02\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2O\x03\x02\x02" +
		"\x02\u01B3\u01B4\x05l7\x02\u01B4\u01B5\x072\x02\x02\u01B5\u01B6\x079\x02" +
		"\x02\u01B6\u01B7\x05F$\x02\u01B7\u01B8\x07:\x02\x02\u01B8Q\x03\x02\x02" +
		"\x02\u01B9\u01BA\x07#\x02\x02\u01BA\u01BB\x07\x1B\x02\x02\u01BB\u01BC" +
		"\x05T+\x02\u01BCS\x03\x02\x02\x02\u01BD\u01BE\x05.\x18\x02\u01BEU\x03" +
		"\x02\x02\x02\u01BF\u01C0\x07\x10\x02\x02\u01C0\u01C1\x07\x1B\x02\x02\u01C1" +
		"\u01C4\x05,\x17\x02\u01C2\u01C4\x07\x10\x02\x02\u01C3\u01BF\x03\x02\x02" +
		"\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4W\x03\x02\x02\x02\u01C5\u01C6\x07" +
		"?\x02\x02\u01C6\u01C7\x054\x1B\x02\u01C7Y\x03\x02\x02\x02\u01C8\u01C9" +
		"\x07(\x02\x02\u01C9\u01CE\x05\\/\x02\u01CA\u01CB\x071\x02\x02\u01CB\u01CD" +
		"\x05\\/\x02\u01CC\u01CA\x03\x02\x02\x02\u01CD\u01D0\x03\x02\x02\x02\u01CE" +
		"\u01CC\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D1\x03\x02" +
		"\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D1\u01D2\x071\x02\x02\u01D2[\x03" +
		"\x02\x02\x02\u01D3\u01D4\x05j6\x02\u01D4\u01D5\x072\x02\x02\u01D5\u01D6" +
		"\x05,\x17\x02\u01D6]\x03\x02\x02\x02\u01D7\u01D8\x05`1\x02\u01D8\u01D9" +
		"\x071\x02\x02\u01D9_\x03\x02\x02\x02\u01DA\u01DD\x05b2\x02\u01DB\u01DD" +
		"\x05n8\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DB\x03\x02\x02\x02\u01DD" +
		"a\x03\x02\x02\x02\u01DE\u01DF\x07\x1E\x02\x02\u01DF\u01E1\x05\x06\x04" +
		"\x02\u01E0\u01E2\x05d3\x02\u01E1\u01E0\x03\x02\x02\x02\u01E1\u01E2\x03" +
		"\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E4\x071\x02\x02\u01E4" +
		"\u01E5\x05\b\x05\x02\u01E5c\x03\x02\x02\x02\u01E6\u01E7\x079\x02\x02\u01E7" +
		"\u01EC\x05f4\x02\u01E8\u01E9\x071\x02\x02\u01E9\u01EB\x05f4\x02\u01EA" +
		"\u01E8\x03\x02\x02\x02\u01EB\u01EE\x03\x02\x02\x02\u01EC\u01EA\x03\x02" +
		"\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE" +
		"\u01EC\x03\x02\x02\x02\u01EF\u01F0\x07:\x02\x02\u01F0e\x03\x02\x02\x02" +
		"\u01F1\u01F9\x05h5\x02\u01F2\u01F3\x07(\x02\x02\u01F3\u01F9\x05h5\x02" +
		"\u01F4\u01F5\x07\x12\x02\x02\u01F5\u01F9\x05h5\x02\u01F6\u01F7\x07\x1E" +
		"\x02\x02\u01F7\u01F9\x05h5\x02\u01F8\u01F1\x03\x02\x02\x02\u01F8\u01F2" +
		"\x03\x02\x02\x02\u01F8\u01F4\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02" +
		"\u01F9g\x03\x02\x02\x02\u01FA\u01FB\x05j6\x02\u01FB\u01FC\x072\x02\x02" +
		"\u01FC\u01FD\x054\x1B\x02\u01FDi\x03\x02\x02\x02\u01FE\u0203\x05\x06\x04" +
		"\x02\u01FF\u0200\x070\x02\x02\u0200\u0202\x05\x06\x04\x02\u0201\u01FF" +
		"\x03\x02\x02\x02\u0202\u0205\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02" +
		"\u0203\u0204\x03\x02\x02\x02\u0204k\x03\x02\x02\x02\u0205\u0203\x03\x02" +
		"\x02\x02\u0206\u020B\x05\x16\f\x02\u0207\u0208\x070\x02\x02\u0208\u020A" +
		"\x05\x16\f\x02\u0209\u0207\x03\x02\x02\x02\u020A\u020D\x03\x02\x02\x02" +
		"\u020B\u0209\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020Cm\x03\x02" +
		"\x02\x02\u020D\u020B\x03\x02\x02\x02\u020E\u020F\x07\x12\x02\x02\u020F" +
		"\u0211\x05\x06\x04\x02\u0210\u0212\x05d3\x02\u0211\u0210\x03\x02\x02\x02" +
		"\u0211\u0212\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0214\x07" +
		"2\x02\x02\u0214\u0215\x05p9\x02\u0215\u0216\x071\x02\x02\u0216\u0217\x05" +
		"\b\x05\x02\u0217o\x03\x02\x02\x02\u0218\u0219\x054\x1B\x02\u0219q\x03" +
		"\x02\x02\x02\u021A\u021B\x05\x0E\b\x02\u021B\u021C\x072\x02\x02\u021C" +
		"\u021D\x05t;\x02\u021D\u0220\x03\x02\x02\x02\u021E\u0220\x05t;\x02\u021F" +
		"\u021A\x03\x02\x02\x02\u021F\u021E\x03\x02\x02\x02\u0220s\x03\x02\x02" +
		"\x02\u0221\u0224\x05v<\x02\u0222\u0224\x05\xA4S\x02\u0223\u0221\x03\x02" +
		"\x02\x02\u0223\u0222\x03\x02\x02\x02\u0224u\x03\x02\x02\x02\u0225\u022A" +
		"\x05x=\x02\u0226\u022A\x05\x98M\x02\u0227\u022A\x05\x9EP\x02\u0228\u022A" +
		"\x05\xA0Q\x02\u0229\u0225\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\u0229\u0226\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u0229" +
		"\u0228\x03\x02\x02\x02\u022Aw\x03\x02\x02\x02\u022B\u022C\x05z>\x02\u022C" +
		"\u022D\x07/\x02\x02\u022D\u022E\x05|?\x02\u022Ey\x03\x02\x02\x02\u022F" +
		"\u0230\x07@\x02\x02\u0230\u0233\x05\x06\x04\x02\u0231\u0233\x05\x06\x04" +
		"\x02\u0232\u022F\x03\x02\x02\x02\u0232\u0231\x03\x02\x02\x02\u0233\u024F" +
		"\x03\x02\x02\x02\u0234\u0235\x07;\x02\x02\u0235\u023A\x05|?\x02\u0236" +
		"\u0237\x070\x02\x02\u0237\u0239\x05|?\x02\u0238\u0236\x03\x02\x02\x02" +
		"\u0239\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03" +
		"\x02\x02\x02\u023B\u023D\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D" +
		"\u023E\x07=\x02\x02\u023E\u024E\x03\x02\x02\x02\u023F\u0240\x07<\x02\x02" +
		"\u0240\u0245\x05|?\x02\u0241\u0242\x070\x02\x02\u0242\u0244\x05|?\x02" +
		"\u0243\u0241\x03\x02\x02\x02\u0244\u0247\x03\x02\x02\x02\u0245\u0243\x03" +
		"\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0248\x03\x02\x02\x02\u0247" +
		"\u0245\x03\x02\x02\x02\u0248\u0249\x07>\x02\x02\u0249\u024E\x03\x02\x02" +
		"\x02\u024A\u024B\x07A\x02\x02\u024B\u024E\x05\x06\x04\x02\u024C\u024E" +
		"\x07?\x02\x02\u024D\u0234\x03\x02\x02\x02\u024D\u023F\x03\x02\x02\x02" +
		"\u024D\u024A\x03\x02\x02\x02\u024D\u024C\x03\x02\x02\x02\u024E\u0251\x03" +
		"\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250" +
		"{\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0252\u0256\x05\x80A\x02" +
		"\u0253\u0254\x05~@\x02\u0254\u0255\x05|?\x02\u0255\u0257\x03\x02\x02\x02" +
		"\u0256\u0253\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257}\x03\x02" +
		"\x02\x02\u0258\u0259\t\x05\x02\x02\u0259\x7F\x03\x02\x02\x02\u025A\u025E" +
		"\x05\x84C\x02\u025B\u025C\x05\x82B\x02\u025C\u025D\x05\x80A\x02\u025D" +
		"\u025F\x03\x02\x02\x02\u025E\u025B\x03\x02\x02\x02\u025E\u025F\x03\x02" +
		"\x02\x02\u025F\x81\x03\x02\x02\x02\u0260\u0261\t\x06\x02\x02\u0261\x83" +
		"\x03\x02\x02\x02\u0262\u0266\x05\x88E\x02\u0263\u0264\x05\x86D\x02\u0264" +
		"\u0265\x05\x84C\x02\u0265\u0267\x03\x02\x02\x02\u0266\u0263\x03\x02\x02" +
		"\x02\u0266\u0267\x03\x02\x02\x02\u0267\x85\x03\x02\x02\x02\u0268\u0269" +
		"\t\x07\x02\x02\u0269\x87\x03\x02\x02\x02\u026A\u026C\t\x02\x02\x02\u026B" +
		"\u026A\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C\u026D\x03\x02" +
		"\x02\x02\u026D\u026E\x05\x8AF\x02\u026E\x89\x03\x02\x02\x02\u026F\u027B" +
		"\x05z>\x02\u0270\u0271\x079\x02\x02\u0271\u0272\x05|?\x02\u0272\u0273" +
		"\x07:\x02\x02\u0273\u027B\x03\x02\x02\x02\u0274\u027B\x05\x8EH\x02\u0275" +
		"\u027B\x05\x8CG\x02\u0276\u027B\x05\x92J\x02\u0277\u0278\x07\x1A\x02\x02" +
		"\u0278\u027B\x05\x8AF\x02\u0279\u027B\x05 \x11\x02\u027A\u026F\x03\x02" +
		"\x02\x02\u027A\u0270\x03\x02\x02\x02\u027A\u0274\x03\x02\x02\x02\u027A" +
		"\u0275\x03\x02\x02\x02\u027A\u0276\x03\x02\x02\x02\u027A\u0277\x03\x02" +
		"\x02\x02\u027A\u0279\x03\x02\x02\x02\u027B\x8B\x03\x02\x02\x02\u027C\u0281" +
		"\x05\x18\r\x02\u027D\u0281\x05\x14\v\x02\u027E\u0281\x05\"\x12\x02\u027F" +
		"\u0281\x07\x19\x02\x02\u0280\u027C\x03\x02\x02\x02\u0280\u027D\x03\x02" +
		"\x02\x02\u0280\u027E\x03\x02\x02\x02\u0280\u027F\x03\x02\x02\x02\u0281" +
		"\x8D\x03\x02\x02\x02\u0282\u0283\x05\x06\x04\x02\u0283\u0284\x079\x02" +
		"\x02\u0284\u0285\x05\x90I\x02\u0285\u0286\x07:\x02\x02\u0286\x8F\x03\x02" +
		"\x02\x02\u0287\u028C\x05\x9AN\x02\u0288\u0289\x070\x02\x02\u0289\u028B" +
		"\x05\x9AN\x02\u028A\u0288\x03\x02\x02\x02\u028B\u028E\x03\x02\x02\x02" +
		"\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\x91\x03" +
		"\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F\u0290\x07;\x02\x02\u0290" +
		"\u0291\x05\x94K\x02\u0291\u0292\x07=\x02\x02\u0292\u0298\x03\x02\x02\x02" +
		"\u0293\u0294\x07<\x02\x02\u0294\u0295\x05\x94K\x02\u0295\u0296\x07>\x02" +
		"\x02\u0296\u0298\x03\x02\x02\x02\u0297\u028F\x03\x02\x02\x02\u0297\u0293" +
		"\x03\x02\x02\x02\u0298\x93\x03\x02\x02\x02\u0299\u029E\x05\x96L\x02\u029A" +
		"\u029B\x070\x02\x02\u029B\u029D\x05\x96L\x02\u029C\u029A\x03\x02\x02\x02" +
		"\u029D\u02A0\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029E\u029F\x03" +
		"\x02\x02\x02\u029F\u02A3\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02\u02A1" +
		"\u02A3\x03\x02\x02\x02\u02A2\u0299\x03\x02\x02\x02\u02A2\u02A1\x03\x02" +
		"\x02\x02\u02A3\x95\x03\x02\x02\x02\u02A4\u02A7\x05|?\x02\u02A5\u02A6\x07" +
		"B\x02\x02\u02A6\u02A8\x05|?\x02\u02A7\u02A5\x03\x02\x02\x02\u02A7\u02A8" +
		"\x03\x02\x02\x02\u02A8\x97\x03\x02\x02\x02\u02A9\u02AE\x05\x06\x04\x02" +
		"\u02AA\u02AB\x079\x02\x02\u02AB\u02AC\x05\x90I\x02\u02AC\u02AD\x07:\x02" +
		"\x02\u02AD\u02AF\x03\x02\x02\x02\u02AE\u02AA\x03\x02\x02\x02\u02AE\u02AF" +
		"\x03\x02\x02\x02\u02AF\x99\x03\x02\x02\x02\u02B0\u02B4\x05|?\x02\u02B1" +
		"\u02B3\x05\x9CO\x02\u02B2\u02B1\x03\x02\x02\x02\u02B3\u02B6\x03\x02\x02" +
		"\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\x9B" +
		"\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02B8\x072\x02\x02" +
		"\u02B8\u02B9\x05|?\x02\u02B9\x9D\x03\x02\x02\x02\u02BA\u02BB\x07\x13\x02" +
		"\x02\u02BB\u02BC\x05\x0E\b\x02\u02BC\x9F\x03\x02\x02\x02\u02BD\u02BE\x03" +
		"\x02\x02\x02\u02BE\xA1\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0" +
		"\xA3\x03\x02\x02\x02\u02C1\u02C6\x05\xA6T\x02\u02C2\u02C6\x05\xAAV\x02" +
		"\u02C3\u02C6\x05\xB2Z\x02\u02C4\u02C6\x05\xC0a\x02\u02C5\u02C1\x03\x02" +
		"\x02\x02\u02C5\u02C2\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5" +
		"\u02C4\x03\x02\x02\x02\u02C6\xA5\x03\x02\x02\x02\u02C7\u02C8\x07\x05\x02" +
		"\x02\u02C8\u02C9\x05\xA8U\x02\u02C9\u02CA\x07\x0F\x02\x02\u02CA\xA7\x03" +
		"\x02\x02\x02\u02CB\u02D0\x05r:\x02\u02CC\u02CD\x071\x02\x02\u02CD\u02CF" +
		"\x05r:\x02\u02CE\u02CC\x03\x02\x02\x02\u02CF\u02D2\x03\x02\x02\x02\u02D0" +
		"\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\xA9\x03\x02\x02" +
		"\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3\u02D6\x05\xACW\x02\u02D4\u02D6" +
		"\x05\xAEX\x02\u02D5\u02D3\x03\x02\x02\x02\u02D5\u02D4\x03\x02\x02\x02" +
		"\u02D6\xAB\x03\x02\x02\x02\u02D7\u02D8\x07\x14\x02\x02\u02D8\u02D9\x05" +
		"|?\x02\u02D9\u02DA\x07$\x02\x02\u02DA\u02DD\x05r:\x02\u02DB\u02DC\x07" +
		"\x0E\x02\x02\u02DC\u02DE\x05r:\x02\u02DD\u02DB\x03\x02\x02\x02\u02DD\u02DE" +
		"\x03\x02\x02\x02\u02DE\xAD\x03\x02\x02\x02\u02DF\u02E0\x07\x07\x02\x02" +
		"\u02E0\u02E1\x05|?\x02\u02E1\u02E2\x07\x1B\x02\x02\u02E2\u02E7\x05\xB0" +
		"Y\x02\u02E3\u02E4\x071\x02\x02\u02E4\u02E6\x05\xB0Y\x02\u02E5\u02E3\x03" +
		"\x02\x02\x02\u02E6\u02E9\x03\x02\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E7" +
		"\u02E8\x03\x02\x02\x02\u02E8\u02ED\x03\x02\x02\x02\u02E9\u02E7\x03\x02" +
		"\x02\x02\u02EA\u02EB\x071\x02\x02\u02EB\u02EC\x07\x0E\x02\x02\u02EC\u02EE" +
		"\x05\xA8U\x02\u02ED\u02EA\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02" +
		"\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F0\x07\x0F\x02\x02\u02F0\xAF\x03" +
		"\x02\x02\x02\u02F1\u02F2\x05l7\x02\u02F2\u02F3\x072\x02\x02\u02F3\u02F4" +
		"\x05r:\x02\u02F4\xB1\x03\x02\x02\x02\u02F5\u02F9\x05\xB4[\x02\u02F6\u02F9" +
		"\x05\xB6\\\x02\u02F7\u02F9\x05\xB8]\x02\u02F8\u02F5\x03\x02\x02\x02\u02F8" +
		"\u02F6\x03\x02\x02\x02\u02F8\u02F7\x03\x02\x02\x02\u02F9\xB3\x03\x02\x02" +
		"\x02\u02FA\u02FB\x07)\x02\x02\u02FB\u02FC\x05|?\x02\u02FC\u02FD\x07\f" +
		"\x02\x02\u02FD\u02FE\x05r:\x02\u02FE\xB5\x03\x02\x02\x02\u02FF\u0300\x07" +
		"\"\x02\x02\u0300\u0301\x05\xA8U\x02\u0301\u0302\x07\'\x02\x02\u0302\u0303" +
		"\x05|?\x02\u0303\xB7\x03\x02\x02\x02\u0304\u0305\x07\x11\x02\x02\u0305" +
		"\u0306\x05\x06\x04\x02\u0306\u0307\x07/\x02\x02\u0307\u0308\x05\xBA^\x02" +
		"\u0308\u0309\x07\f\x02\x02\u0309\u030A\x05r:\x02\u030A\xB9\x03\x02\x02" +
		"\x02\u030B\u030C\x05\xBC_\x02\u030C\u030D\t\b\x02\x02\u030D\u030E\x05" +
		"\xBE`\x02\u030E\xBB\x03\x02\x02\x02\u030F\u0310\x05|?\x02\u0310\xBD\x03" +
		"\x02\x02\x02\u0311\u0312\x05|?\x02\u0312\xBF\x03\x02\x02\x02\u0313\u0314" +
		"\x07*\x02\x02\u0314\u0315\x05\xC2b\x02\u0315\u0316\x07\f\x02\x02\u0316" +
		"\u0317\x05r:\x02\u0317\xC1\x03\x02\x02\x02\u0318\u031D\x05z>\x02\u0319" +
		"\u031A\x070\x02\x02\u031A\u031C\x05z>\x02\u031B\u0319\x03\x02\x02\x02" +
		"\u031C\u031F\x03\x02\x02\x02\u031D\u031B\x03\x02\x02\x02\u031D\u031E\x03" +
		"\x02\x02\x02\u031E\xC3\x03\x02\x02\x02\u031F\u031D\x03\x02\x02\x02C\xC6" +
		"\xD1\xD9\xE4\xE6\xF5\u0102\u0117\u011B\u012D\u0134\u0138\u013F\u0144\u014A" +
		"\u0156\u015B\u0161\u0167\u0179\u0180\u0189\u0190\u0193\u019A\u01A9\u01B1" +
		"\u01C3\u01CE\u01DC\u01E1\u01EC\u01F8\u0203\u020B\u0211\u021F\u0223\u0229" +
		"\u0232\u023A\u0245\u024D\u024F\u0256\u025E\u0266\u026B\u027A\u0280\u028C" +
		"\u0297\u029E\u02A2\u02A7\u02AE\u02B4\u02C5\u02D0\u02D5\u02DD\u02E7\u02ED" +
		"\u02F8\u031D";
	public static readonly _serializedATN: string = Utils.join(
		[
			pascalParser._serializedATNSegment0,
			pascalParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!pascalParser.__ATN) {
			pascalParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(pascalParser._serializedATN));
		}

		return pascalParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public programHeading(): ProgramHeadingContext {
		return this.getRuleContext(0, ProgramHeadingContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public DOT(): TerminalNode { return this.getToken(pascalParser.DOT, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(pascalParser.INTERFACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_program; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class ProgramHeadingContext extends ParserRuleContext {
	public PROGRAM(): TerminalNode | undefined { return this.tryGetToken(pascalParser.PROGRAM, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SEMI(): TerminalNode { return this.getToken(pascalParser.SEMI, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(pascalParser.LPAREN, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(pascalParser.RPAREN, 0); }
	public UNIT(): TerminalNode | undefined { return this.tryGetToken(pascalParser.UNIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_programHeading; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterProgramHeading) {
			listener.enterProgramHeading(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitProgramHeading) {
			listener.exitProgramHeading(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(pascalParser.IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_identifier; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	public labelDeclarationPart(): LabelDeclarationPartContext[];
	public labelDeclarationPart(i: number): LabelDeclarationPartContext;
	public labelDeclarationPart(i?: number): LabelDeclarationPartContext | LabelDeclarationPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelDeclarationPartContext);
		} else {
			return this.getRuleContext(i, LabelDeclarationPartContext);
		}
	}
	public constantDefinitionPart(): ConstantDefinitionPartContext[];
	public constantDefinitionPart(i: number): ConstantDefinitionPartContext;
	public constantDefinitionPart(i?: number): ConstantDefinitionPartContext | ConstantDefinitionPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantDefinitionPartContext);
		} else {
			return this.getRuleContext(i, ConstantDefinitionPartContext);
		}
	}
	public typeDefinitionPart(): TypeDefinitionPartContext[];
	public typeDefinitionPart(i: number): TypeDefinitionPartContext;
	public typeDefinitionPart(i?: number): TypeDefinitionPartContext | TypeDefinitionPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDefinitionPartContext);
		} else {
			return this.getRuleContext(i, TypeDefinitionPartContext);
		}
	}
	public variableDeclarationPart(): VariableDeclarationPartContext[];
	public variableDeclarationPart(i: number): VariableDeclarationPartContext;
	public variableDeclarationPart(i?: number): VariableDeclarationPartContext | VariableDeclarationPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationPartContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationPartContext);
		}
	}
	public procedureAndFunctionDeclarationPart(): ProcedureAndFunctionDeclarationPartContext[];
	public procedureAndFunctionDeclarationPart(i: number): ProcedureAndFunctionDeclarationPartContext;
	public procedureAndFunctionDeclarationPart(i?: number): ProcedureAndFunctionDeclarationPartContext | ProcedureAndFunctionDeclarationPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcedureAndFunctionDeclarationPartContext);
		} else {
			return this.getRuleContext(i, ProcedureAndFunctionDeclarationPartContext);
		}
	}
	public usesUnitsPart(): UsesUnitsPartContext[];
	public usesUnitsPart(i: number): UsesUnitsPartContext;
	public usesUnitsPart(i?: number): UsesUnitsPartContext | UsesUnitsPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UsesUnitsPartContext);
		} else {
			return this.getRuleContext(i, UsesUnitsPartContext);
		}
	}
	public IMPLEMENTATION(): TerminalNode[];
	public IMPLEMENTATION(i: number): TerminalNode;
	public IMPLEMENTATION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.IMPLEMENTATION);
		} else {
			return this.getToken(pascalParser.IMPLEMENTATION, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_block; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class UsesUnitsPartContext extends ParserRuleContext {
	public USES(): TerminalNode { return this.getToken(pascalParser.USES, 0); }
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public SEMI(): TerminalNode { return this.getToken(pascalParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_usesUnitsPart; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterUsesUnitsPart) {
			listener.enterUsesUnitsPart(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitUsesUnitsPart) {
			listener.exitUsesUnitsPart(this);
		}
	}
}


export class LabelDeclarationPartContext extends ParserRuleContext {
	public LABEL(): TerminalNode { return this.getToken(pascalParser.LABEL, 0); }
	public label(): LabelContext[];
	public label(i: number): LabelContext;
	public label(i?: number): LabelContext | LabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabelContext);
		} else {
			return this.getRuleContext(i, LabelContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(pascalParser.SEMI, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.COMMA);
		} else {
			return this.getToken(pascalParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_labelDeclarationPart; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterLabelDeclarationPart) {
			listener.enterLabelDeclarationPart(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitLabelDeclarationPart) {
			listener.exitLabelDeclarationPart(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public unsignedInteger(): UnsignedIntegerContext {
		return this.getRuleContext(0, UnsignedIntegerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_label; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
}


export class ConstantDefinitionPartContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(pascalParser.CONST, 0); }
	public constantDefinition(): ConstantDefinitionContext[];
	public constantDefinition(i: number): ConstantDefinitionContext;
	public constantDefinition(i?: number): ConstantDefinitionContext | ConstantDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantDefinitionContext);
		} else {
			return this.getRuleContext(i, ConstantDefinitionContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.SEMI);
		} else {
			return this.getToken(pascalParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_constantDefinitionPart; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterConstantDefinitionPart) {
			listener.enterConstantDefinitionPart(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitConstantDefinitionPart) {
			listener.exitConstantDefinitionPart(this);
		}
	}
}


export class ConstantDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQUAL(): TerminalNode { return this.getToken(pascalParser.EQUAL, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_constantDefinition; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterConstantDefinition) {
			listener.enterConstantDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitConstantDefinition) {
			listener.exitConstantDefinition(this);
		}
	}
}


export class ConstantChrContext extends ParserRuleContext {
	public CHR(): TerminalNode { return this.getToken(pascalParser.CHR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(pascalParser.LPAREN, 0); }
	public unsignedInteger(): UnsignedIntegerContext {
		return this.getRuleContext(0, UnsignedIntegerContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(pascalParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_constantChr; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterConstantChr) {
			listener.enterConstantChr(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitConstantChr) {
			listener.exitConstantChr(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public unsignedNumber(): UnsignedNumberContext | undefined {
		return this.tryGetRuleContext(0, UnsignedNumberContext);
	}
	public sign(): SignContext | undefined {
		return this.tryGetRuleContext(0, SignContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public constantChr(): ConstantChrContext | undefined {
		return this.tryGetRuleContext(0, ConstantChrContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_constant; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
}


export class UnsignedNumberContext extends ParserRuleContext {
	public unsignedInteger(): UnsignedIntegerContext | undefined {
		return this.tryGetRuleContext(0, UnsignedIntegerContext);
	}
	public unsignedReal(): UnsignedRealContext | undefined {
		return this.tryGetRuleContext(0, UnsignedRealContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_unsignedNumber; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterUnsignedNumber) {
			listener.enterUnsignedNumber(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitUnsignedNumber) {
			listener.exitUnsignedNumber(this);
		}
	}
}


export class UnsignedIntegerContext extends ParserRuleContext {
	public NUM_INT(): TerminalNode { return this.getToken(pascalParser.NUM_INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_unsignedInteger; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterUnsignedInteger) {
			listener.enterUnsignedInteger(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitUnsignedInteger) {
			listener.exitUnsignedInteger(this);
		}
	}
}


export class UnsignedRealContext extends ParserRuleContext {
	public NUM_REAL(): TerminalNode { return this.getToken(pascalParser.NUM_REAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_unsignedReal; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterUnsignedReal) {
			listener.enterUnsignedReal(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitUnsignedReal) {
			listener.exitUnsignedReal(this);
		}
	}
}


export class SignContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(pascalParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(pascalParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_sign; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterSign) {
			listener.enterSign(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitSign) {
			listener.exitSign(this);
		}
	}
}


export class BoolContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(pascalParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(pascalParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_bool; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(pascalParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_string; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class TypeDefinitionPartContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(pascalParser.TYPE, 0); }
	public typeDefinition(): TypeDefinitionContext[];
	public typeDefinition(i: number): TypeDefinitionContext;
	public typeDefinition(i?: number): TypeDefinitionContext | TypeDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDefinitionContext);
		} else {
			return this.getRuleContext(i, TypeDefinitionContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.SEMI);
		} else {
			return this.getToken(pascalParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_typeDefinitionPart; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterTypeDefinitionPart) {
			listener.enterTypeDefinitionPart(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitTypeDefinitionPart) {
			listener.exitTypeDefinitionPart(this);
		}
	}
}


export class TypeDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQUAL(): TerminalNode { return this.getToken(pascalParser.EQUAL, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public functionType(): FunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeContext);
	}
	public procedureType(): ProcedureTypeContext | undefined {
		return this.tryGetRuleContext(0, ProcedureTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_typeDefinition; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterTypeDefinition) {
			listener.enterTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitTypeDefinition) {
			listener.exitTypeDefinition(this);
		}
	}
}


export class FunctionTypeContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(pascalParser.FUNCTION, 0); }
	public COLON(): TerminalNode { return this.getToken(pascalParser.COLON, 0); }
	public resultType(): ResultTypeContext {
		return this.getRuleContext(0, ResultTypeContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_functionType; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterFunctionType) {
			listener.enterFunctionType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitFunctionType) {
			listener.exitFunctionType(this);
		}
	}
}


export class ProcedureTypeContext extends ParserRuleContext {
	public PROCEDURE(): TerminalNode { return this.getToken(pascalParser.PROCEDURE, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_procedureType; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterProcedureType) {
			listener.enterProcedureType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitProcedureType) {
			listener.exitProcedureType(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public simpleType(): SimpleTypeContext | undefined {
		return this.tryGetRuleContext(0, SimpleTypeContext);
	}
	public structuredType(): StructuredTypeContext | undefined {
		return this.tryGetRuleContext(0, StructuredTypeContext);
	}
	public pointerType(): PointerTypeContext | undefined {
		return this.tryGetRuleContext(0, PointerTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_type; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
}


export class SimpleTypeContext extends ParserRuleContext {
	public scalarType(): ScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeContext);
	}
	public subrangeType(): SubrangeTypeContext | undefined {
		return this.tryGetRuleContext(0, SubrangeTypeContext);
	}
	public typeIdentifier(): TypeIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TypeIdentifierContext);
	}
	public stringtype(): StringtypeContext | undefined {
		return this.tryGetRuleContext(0, StringtypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_simpleType; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterSimpleType) {
			listener.enterSimpleType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitSimpleType) {
			listener.exitSimpleType(this);
		}
	}
}


export class ScalarTypeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(pascalParser.LPAREN, 0); }
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(pascalParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_scalarType; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterScalarType) {
			listener.enterScalarType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitScalarType) {
			listener.exitScalarType(this);
		}
	}
}


export class SubrangeTypeContext extends ParserRuleContext {
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public DOTDOT(): TerminalNode { return this.getToken(pascalParser.DOTDOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_subrangeType; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterSubrangeType) {
			listener.enterSubrangeType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitSubrangeType) {
			listener.exitSubrangeType(this);
		}
	}
}


export class TypeIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(pascalParser.CHAR, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(pascalParser.BOOLEAN, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(pascalParser.INTEGER, 0); }
	public REAL(): TerminalNode | undefined { return this.tryGetToken(pascalParser.REAL, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(pascalParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_typeIdentifier; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterTypeIdentifier) {
			listener.enterTypeIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitTypeIdentifier) {
			listener.exitTypeIdentifier(this);
		}
	}
}


export class StructuredTypeContext extends ParserRuleContext {
	public PACKED(): TerminalNode | undefined { return this.tryGetToken(pascalParser.PACKED, 0); }
	public unpackedStructuredType(): UnpackedStructuredTypeContext {
		return this.getRuleContext(0, UnpackedStructuredTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_structuredType; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterStructuredType) {
			listener.enterStructuredType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitStructuredType) {
			listener.exitStructuredType(this);
		}
	}
}


export class UnpackedStructuredTypeContext extends ParserRuleContext {
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public recordType(): RecordTypeContext | undefined {
		return this.tryGetRuleContext(0, RecordTypeContext);
	}
	public setType(): SetTypeContext | undefined {
		return this.tryGetRuleContext(0, SetTypeContext);
	}
	public fileType(): FileTypeContext | undefined {
		return this.tryGetRuleContext(0, FileTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_unpackedStructuredType; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterUnpackedStructuredType) {
			listener.enterUnpackedStructuredType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitUnpackedStructuredType) {
			listener.exitUnpackedStructuredType(this);
		}
	}
}


export class StringtypeContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(pascalParser.STRING, 0); }
	public LBRACK(): TerminalNode { return this.getToken(pascalParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(pascalParser.RBRACK, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public unsignedNumber(): UnsignedNumberContext | undefined {
		return this.tryGetRuleContext(0, UnsignedNumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_stringtype; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterStringtype) {
			listener.enterStringtype(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitStringtype) {
			listener.exitStringtype(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public ARRAY(): TerminalNode { return this.getToken(pascalParser.ARRAY, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(pascalParser.LBRACK, 0); }
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(pascalParser.RBRACK, 0); }
	public OF(): TerminalNode { return this.getToken(pascalParser.OF, 0); }
	public componentType(): ComponentTypeContext {
		return this.getRuleContext(0, ComponentTypeContext);
	}
	public LBRACK2(): TerminalNode | undefined { return this.tryGetToken(pascalParser.LBRACK2, 0); }
	public RBRACK2(): TerminalNode | undefined { return this.tryGetToken(pascalParser.RBRACK2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_arrayType; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public indexType(): IndexTypeContext[];
	public indexType(i: number): IndexTypeContext;
	public indexType(i?: number): IndexTypeContext | IndexTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IndexTypeContext);
		} else {
			return this.getRuleContext(i, IndexTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.COMMA);
		} else {
			return this.getToken(pascalParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_typeList; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
}


export class IndexTypeContext extends ParserRuleContext {
	public simpleType(): SimpleTypeContext {
		return this.getRuleContext(0, SimpleTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_indexType; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterIndexType) {
			listener.enterIndexType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitIndexType) {
			listener.exitIndexType(this);
		}
	}
}


export class ComponentTypeContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_componentType; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterComponentType) {
			listener.enterComponentType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitComponentType) {
			listener.exitComponentType(this);
		}
	}
}


export class RecordTypeContext extends ParserRuleContext {
	public RECORD(): TerminalNode { return this.getToken(pascalParser.RECORD, 0); }
	public END(): TerminalNode { return this.getToken(pascalParser.END, 0); }
	public fieldList(): FieldListContext | undefined {
		return this.tryGetRuleContext(0, FieldListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_recordType; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterRecordType) {
			listener.enterRecordType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitRecordType) {
			listener.exitRecordType(this);
		}
	}
}


export class FieldListContext extends ParserRuleContext {
	public fixedPart(): FixedPartContext | undefined {
		return this.tryGetRuleContext(0, FixedPartContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(pascalParser.SEMI, 0); }
	public variantPart(): VariantPartContext | undefined {
		return this.tryGetRuleContext(0, VariantPartContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_fieldList; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterFieldList) {
			listener.enterFieldList(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitFieldList) {
			listener.exitFieldList(this);
		}
	}
}


export class FixedPartContext extends ParserRuleContext {
	public recordSection(): RecordSectionContext[];
	public recordSection(i: number): RecordSectionContext;
	public recordSection(i?: number): RecordSectionContext | RecordSectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RecordSectionContext);
		} else {
			return this.getRuleContext(i, RecordSectionContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.SEMI);
		} else {
			return this.getToken(pascalParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_fixedPart; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterFixedPart) {
			listener.enterFixedPart(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitFixedPart) {
			listener.exitFixedPart(this);
		}
	}
}


export class RecordSectionContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public COLON(): TerminalNode { return this.getToken(pascalParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_recordSection; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterRecordSection) {
			listener.enterRecordSection(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitRecordSection) {
			listener.exitRecordSection(this);
		}
	}
}


export class VariantPartContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(pascalParser.CASE, 0); }
	public tag(): TagContext {
		return this.getRuleContext(0, TagContext);
	}
	public OF(): TerminalNode { return this.getToken(pascalParser.OF, 0); }
	public variant(): VariantContext[];
	public variant(i: number): VariantContext;
	public variant(i?: number): VariantContext | VariantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariantContext);
		} else {
			return this.getRuleContext(i, VariantContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.SEMI);
		} else {
			return this.getToken(pascalParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_variantPart; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterVariantPart) {
			listener.enterVariantPart(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitVariantPart) {
			listener.exitVariantPart(this);
		}
	}
}


export class TagContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(pascalParser.COLON, 0); }
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_tag; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterTag) {
			listener.enterTag(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitTag) {
			listener.exitTag(this);
		}
	}
}


export class VariantContext extends ParserRuleContext {
	public constList(): ConstListContext {
		return this.getRuleContext(0, ConstListContext);
	}
	public COLON(): TerminalNode { return this.getToken(pascalParser.COLON, 0); }
	public LPAREN(): TerminalNode { return this.getToken(pascalParser.LPAREN, 0); }
	public fieldList(): FieldListContext {
		return this.getRuleContext(0, FieldListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(pascalParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_variant; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterVariant) {
			listener.enterVariant(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitVariant) {
			listener.exitVariant(this);
		}
	}
}


export class SetTypeContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(pascalParser.SET, 0); }
	public OF(): TerminalNode { return this.getToken(pascalParser.OF, 0); }
	public baseType(): BaseTypeContext {
		return this.getRuleContext(0, BaseTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_setType; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterSetType) {
			listener.enterSetType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitSetType) {
			listener.exitSetType(this);
		}
	}
}


export class BaseTypeContext extends ParserRuleContext {
	public simpleType(): SimpleTypeContext {
		return this.getRuleContext(0, SimpleTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_baseType; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterBaseType) {
			listener.enterBaseType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitBaseType) {
			listener.exitBaseType(this);
		}
	}
}


export class FileTypeContext extends ParserRuleContext {
	public FILE(): TerminalNode { return this.getToken(pascalParser.FILE, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(pascalParser.OF, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_fileType; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterFileType) {
			listener.enterFileType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitFileType) {
			listener.exitFileType(this);
		}
	}
}


export class PointerTypeContext extends ParserRuleContext {
	public POINTER(): TerminalNode { return this.getToken(pascalParser.POINTER, 0); }
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_pointerType; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterPointerType) {
			listener.enterPointerType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitPointerType) {
			listener.exitPointerType(this);
		}
	}
}


export class VariableDeclarationPartContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(pascalParser.VAR, 0); }
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.SEMI);
		} else {
			return this.getToken(pascalParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_variableDeclarationPart; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterVariableDeclarationPart) {
			listener.enterVariableDeclarationPart(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitVariableDeclarationPart) {
			listener.exitVariableDeclarationPart(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public COLON(): TerminalNode { return this.getToken(pascalParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
}


export class ProcedureAndFunctionDeclarationPartContext extends ParserRuleContext {
	public procedureOrFunctionDeclaration(): ProcedureOrFunctionDeclarationContext {
		return this.getRuleContext(0, ProcedureOrFunctionDeclarationContext);
	}
	public SEMI(): TerminalNode { return this.getToken(pascalParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_procedureAndFunctionDeclarationPart; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterProcedureAndFunctionDeclarationPart) {
			listener.enterProcedureAndFunctionDeclarationPart(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitProcedureAndFunctionDeclarationPart) {
			listener.exitProcedureAndFunctionDeclarationPart(this);
		}
	}
}


export class ProcedureOrFunctionDeclarationContext extends ParserRuleContext {
	public procedureDeclaration(): ProcedureDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ProcedureDeclarationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_procedureOrFunctionDeclaration; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterProcedureOrFunctionDeclaration) {
			listener.enterProcedureOrFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitProcedureOrFunctionDeclaration) {
			listener.exitProcedureOrFunctionDeclaration(this);
		}
	}
}


export class ProcedureDeclarationContext extends ParserRuleContext {
	public PROCEDURE(): TerminalNode { return this.getToken(pascalParser.PROCEDURE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SEMI(): TerminalNode { return this.getToken(pascalParser.SEMI, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_procedureDeclaration; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterProcedureDeclaration) {
			listener.enterProcedureDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitProcedureDeclaration) {
			listener.exitProcedureDeclaration(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(pascalParser.LPAREN, 0); }
	public formalParameterSection(): FormalParameterSectionContext[];
	public formalParameterSection(i: number): FormalParameterSectionContext;
	public formalParameterSection(i?: number): FormalParameterSectionContext | FormalParameterSectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterSectionContext);
		} else {
			return this.getRuleContext(i, FormalParameterSectionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(pascalParser.RPAREN, 0); }
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.SEMI);
		} else {
			return this.getToken(pascalParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
}


export class FormalParameterSectionContext extends ParserRuleContext {
	public parameterGroup(): ParameterGroupContext {
		return this.getRuleContext(0, ParameterGroupContext);
	}
	public VAR(): TerminalNode | undefined { return this.tryGetToken(pascalParser.VAR, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(pascalParser.FUNCTION, 0); }
	public PROCEDURE(): TerminalNode | undefined { return this.tryGetToken(pascalParser.PROCEDURE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_formalParameterSection; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterFormalParameterSection) {
			listener.enterFormalParameterSection(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitFormalParameterSection) {
			listener.exitFormalParameterSection(this);
		}
	}
}


export class ParameterGroupContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public COLON(): TerminalNode { return this.getToken(pascalParser.COLON, 0); }
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_parameterGroup; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterParameterGroup) {
			listener.enterParameterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitParameterGroup) {
			listener.exitParameterGroup(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.COMMA);
		} else {
			return this.getToken(pascalParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
}


export class ConstListContext extends ParserRuleContext {
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.COMMA);
		} else {
			return this.getToken(pascalParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_constList; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterConstList) {
			listener.enterConstList(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitConstList) {
			listener.exitConstList(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(pascalParser.FUNCTION, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(pascalParser.COLON, 0); }
	public resultType(): ResultTypeContext {
		return this.getRuleContext(0, ResultTypeContext);
	}
	public SEMI(): TerminalNode { return this.getToken(pascalParser.SEMI, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
}


export class ResultTypeContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_resultType; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterResultType) {
			listener.enterResultType(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitResultType) {
			listener.exitResultType(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(pascalParser.COLON, 0); }
	public unlabelledStatement(): UnlabelledStatementContext {
		return this.getRuleContext(0, UnlabelledStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_statement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class UnlabelledStatementContext extends ParserRuleContext {
	public simpleStatement(): SimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleStatementContext);
	}
	public structuredStatement(): StructuredStatementContext | undefined {
		return this.tryGetRuleContext(0, StructuredStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_unlabelledStatement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterUnlabelledStatement) {
			listener.enterUnlabelledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitUnlabelledStatement) {
			listener.exitUnlabelledStatement(this);
		}
	}
}


export class SimpleStatementContext extends ParserRuleContext {
	public assignmentStatement(): AssignmentStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignmentStatementContext);
	}
	public procedureStatement(): ProcedureStatementContext | undefined {
		return this.tryGetRuleContext(0, ProcedureStatementContext);
	}
	public gotoStatement(): GotoStatementContext | undefined {
		return this.tryGetRuleContext(0, GotoStatementContext);
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_simpleStatement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterSimpleStatement) {
			listener.enterSimpleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitSimpleStatement) {
			listener.exitSimpleStatement(this);
		}
	}
}


export class AssignmentStatementContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(pascalParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_assignmentStatement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterAssignmentStatement) {
			listener.enterAssignmentStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitAssignmentStatement) {
			listener.exitAssignmentStatement(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public AT(): TerminalNode | undefined { return this.tryGetToken(pascalParser.AT, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.LBRACK);
		} else {
			return this.getToken(pascalParser.LBRACK, i);
		}
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
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.RBRACK);
		} else {
			return this.getToken(pascalParser.RBRACK, i);
		}
	}
	public LBRACK2(): TerminalNode[];
	public LBRACK2(i: number): TerminalNode;
	public LBRACK2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.LBRACK2);
		} else {
			return this.getToken(pascalParser.LBRACK2, i);
		}
	}
	public RBRACK2(): TerminalNode[];
	public RBRACK2(i: number): TerminalNode;
	public RBRACK2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.RBRACK2);
		} else {
			return this.getToken(pascalParser.RBRACK2, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.DOT);
		} else {
			return this.getToken(pascalParser.DOT, i);
		}
	}
	public POINTER(): TerminalNode[];
	public POINTER(i: number): TerminalNode;
	public POINTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.POINTER);
		} else {
			return this.getToken(pascalParser.POINTER, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.COMMA);
		} else {
			return this.getToken(pascalParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_variable; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public simpleExpression(): SimpleExpressionContext {
		return this.getRuleContext(0, SimpleExpressionContext);
	}
	public relationaloperator(): RelationaloperatorContext | undefined {
		return this.tryGetRuleContext(0, RelationaloperatorContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_expression; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class RelationaloperatorContext extends ParserRuleContext {
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(pascalParser.EQUAL, 0); }
	public NOT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(pascalParser.NOT_EQUAL, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(pascalParser.LT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(pascalParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(pascalParser.GE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(pascalParser.GT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(pascalParser.IN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_relationaloperator; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterRelationaloperator) {
			listener.enterRelationaloperator(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitRelationaloperator) {
			listener.exitRelationaloperator(this);
		}
	}
}


export class SimpleExpressionContext extends ParserRuleContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public additiveoperator(): AdditiveoperatorContext | undefined {
		return this.tryGetRuleContext(0, AdditiveoperatorContext);
	}
	public simpleExpression(): SimpleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SimpleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_simpleExpression; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterSimpleExpression) {
			listener.enterSimpleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitSimpleExpression) {
			listener.exitSimpleExpression(this);
		}
	}
}


export class AdditiveoperatorContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(pascalParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(pascalParser.MINUS, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(pascalParser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_additiveoperator; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterAdditiveoperator) {
			listener.enterAdditiveoperator(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitAdditiveoperator) {
			listener.exitAdditiveoperator(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public signedFactor(): SignedFactorContext {
		return this.getRuleContext(0, SignedFactorContext);
	}
	public multiplicativeoperator(): MultiplicativeoperatorContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeoperatorContext);
	}
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_term; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class MultiplicativeoperatorContext extends ParserRuleContext {
	public STAR(): TerminalNode | undefined { return this.tryGetToken(pascalParser.STAR, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(pascalParser.SLASH, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(pascalParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(pascalParser.MOD, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(pascalParser.AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_multiplicativeoperator; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterMultiplicativeoperator) {
			listener.enterMultiplicativeoperator(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitMultiplicativeoperator) {
			listener.exitMultiplicativeoperator(this);
		}
	}
}


export class SignedFactorContext extends ParserRuleContext {
	public factor(): FactorContext {
		return this.getRuleContext(0, FactorContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(pascalParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(pascalParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_signedFactor; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterSignedFactor) {
			listener.enterSignedFactor(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitSignedFactor) {
			listener.exitSignedFactor(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(pascalParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(pascalParser.RPAREN, 0); }
	public functionDesignator(): FunctionDesignatorContext | undefined {
		return this.tryGetRuleContext(0, FunctionDesignatorContext);
	}
	public unsignedConstant(): UnsignedConstantContext | undefined {
		return this.tryGetRuleContext(0, UnsignedConstantContext);
	}
	public set(): SetContext | undefined {
		return this.tryGetRuleContext(0, SetContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(pascalParser.NOT, 0); }
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	public bool(): BoolContext | undefined {
		return this.tryGetRuleContext(0, BoolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_factor; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
}


export class UnsignedConstantContext extends ParserRuleContext {
	public unsignedNumber(): UnsignedNumberContext | undefined {
		return this.tryGetRuleContext(0, UnsignedNumberContext);
	}
	public constantChr(): ConstantChrContext | undefined {
		return this.tryGetRuleContext(0, ConstantChrContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public NIL(): TerminalNode | undefined { return this.tryGetToken(pascalParser.NIL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_unsignedConstant; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterUnsignedConstant) {
			listener.enterUnsignedConstant(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitUnsignedConstant) {
			listener.exitUnsignedConstant(this);
		}
	}
}


export class FunctionDesignatorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(pascalParser.LPAREN, 0); }
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(pascalParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_functionDesignator; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterFunctionDesignator) {
			listener.enterFunctionDesignator(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitFunctionDesignator) {
			listener.exitFunctionDesignator(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public actualParameter(): ActualParameterContext[];
	public actualParameter(i: number): ActualParameterContext;
	public actualParameter(i?: number): ActualParameterContext | ActualParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActualParameterContext);
		} else {
			return this.getRuleContext(i, ActualParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.COMMA);
		} else {
			return this.getToken(pascalParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
}


export class SetContext extends ParserRuleContext {
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(pascalParser.LBRACK, 0); }
	public elementList(): ElementListContext {
		return this.getRuleContext(0, ElementListContext);
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(pascalParser.RBRACK, 0); }
	public LBRACK2(): TerminalNode | undefined { return this.tryGetToken(pascalParser.LBRACK2, 0); }
	public RBRACK2(): TerminalNode | undefined { return this.tryGetToken(pascalParser.RBRACK2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_set; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterSet) {
			listener.enterSet(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitSet) {
			listener.exitSet(this);
		}
	}
}


export class ElementListContext extends ParserRuleContext {
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.COMMA);
		} else {
			return this.getToken(pascalParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_elementList; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterElementList) {
			listener.enterElementList(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitElementList) {
			listener.exitElementList(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DOTDOT(): TerminalNode | undefined { return this.tryGetToken(pascalParser.DOTDOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_element; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
}


export class ProcedureStatementContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(pascalParser.LPAREN, 0); }
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(pascalParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_procedureStatement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterProcedureStatement) {
			listener.enterProcedureStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitProcedureStatement) {
			listener.exitProcedureStatement(this);
		}
	}
}


export class ActualParameterContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public parameterwidth(): ParameterwidthContext[];
	public parameterwidth(i: number): ParameterwidthContext;
	public parameterwidth(i?: number): ParameterwidthContext | ParameterwidthContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterwidthContext);
		} else {
			return this.getRuleContext(i, ParameterwidthContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_actualParameter; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterActualParameter) {
			listener.enterActualParameter(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitActualParameter) {
			listener.exitActualParameter(this);
		}
	}
}


export class ParameterwidthContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(pascalParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_parameterwidth; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterParameterwidth) {
			listener.enterParameterwidth(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitParameterwidth) {
			listener.exitParameterwidth(this);
		}
	}
}


export class GotoStatementContext extends ParserRuleContext {
	public GOTO(): TerminalNode { return this.getToken(pascalParser.GOTO, 0); }
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_gotoStatement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterGotoStatement) {
			listener.enterGotoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitGotoStatement) {
			listener.exitGotoStatement(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_emptyStatement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitEmptyStatement) {
			listener.exitEmptyStatement(this);
		}
	}
}


export class EmptyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_empty; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterEmpty) {
			listener.enterEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitEmpty) {
			listener.exitEmpty(this);
		}
	}
}


export class StructuredStatementContext extends ParserRuleContext {
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public conditionalStatement(): ConditionalStatementContext | undefined {
		return this.tryGetRuleContext(0, ConditionalStatementContext);
	}
	public repetetiveStatement(): RepetetiveStatementContext | undefined {
		return this.tryGetRuleContext(0, RepetetiveStatementContext);
	}
	public withStatement(): WithStatementContext | undefined {
		return this.tryGetRuleContext(0, WithStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_structuredStatement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterStructuredStatement) {
			listener.enterStructuredStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitStructuredStatement) {
			listener.exitStructuredStatement(this);
		}
	}
}


export class CompoundStatementContext extends ParserRuleContext {
	public BEGIN(): TerminalNode { return this.getToken(pascalParser.BEGIN, 0); }
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public END(): TerminalNode { return this.getToken(pascalParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_compoundStatement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterCompoundStatement) {
			listener.enterCompoundStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitCompoundStatement) {
			listener.exitCompoundStatement(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.SEMI);
		} else {
			return this.getToken(pascalParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_statements; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterStatements) {
			listener.enterStatements(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitStatements) {
			listener.exitStatements(this);
		}
	}
}


export class ConditionalStatementContext extends ParserRuleContext {
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public caseStatement(): CaseStatementContext | undefined {
		return this.tryGetRuleContext(0, CaseStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_conditionalStatement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterConditionalStatement) {
			listener.enterConditionalStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitConditionalStatement) {
			listener.exitConditionalStatement(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(pascalParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public THEN(): TerminalNode { return this.getToken(pascalParser.THEN, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(pascalParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
}


export class CaseStatementContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(pascalParser.CASE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OF(): TerminalNode { return this.getToken(pascalParser.OF, 0); }
	public caseListElement(): CaseListElementContext[];
	public caseListElement(i: number): CaseListElementContext;
	public caseListElement(i?: number): CaseListElementContext | CaseListElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseListElementContext);
		} else {
			return this.getRuleContext(i, CaseListElementContext);
		}
	}
	public END(): TerminalNode { return this.getToken(pascalParser.END, 0); }
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.SEMI);
		} else {
			return this.getToken(pascalParser.SEMI, i);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(pascalParser.ELSE, 0); }
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_caseStatement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterCaseStatement) {
			listener.enterCaseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitCaseStatement) {
			listener.exitCaseStatement(this);
		}
	}
}


export class CaseListElementContext extends ParserRuleContext {
	public constList(): ConstListContext {
		return this.getRuleContext(0, ConstListContext);
	}
	public COLON(): TerminalNode { return this.getToken(pascalParser.COLON, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_caseListElement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterCaseListElement) {
			listener.enterCaseListElement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitCaseListElement) {
			listener.exitCaseListElement(this);
		}
	}
}


export class RepetetiveStatementContext extends ParserRuleContext {
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public repeatStatement(): RepeatStatementContext | undefined {
		return this.tryGetRuleContext(0, RepeatStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_repetetiveStatement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterRepetetiveStatement) {
			listener.enterRepetetiveStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitRepetetiveStatement) {
			listener.exitRepetetiveStatement(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(pascalParser.WHILE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DO(): TerminalNode { return this.getToken(pascalParser.DO, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
}


export class RepeatStatementContext extends ParserRuleContext {
	public REPEAT(): TerminalNode { return this.getToken(pascalParser.REPEAT, 0); }
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public UNTIL(): TerminalNode { return this.getToken(pascalParser.UNTIL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_repeatStatement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterRepeatStatement) {
			listener.enterRepeatStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitRepeatStatement) {
			listener.exitRepeatStatement(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(pascalParser.FOR, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(pascalParser.ASSIGN, 0); }
	public forList(): ForListContext {
		return this.getRuleContext(0, ForListContext);
	}
	public DO(): TerminalNode { return this.getToken(pascalParser.DO, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
}


export class ForListContext extends ParserRuleContext {
	public initialValue(): InitialValueContext {
		return this.getRuleContext(0, InitialValueContext);
	}
	public finalValue(): FinalValueContext {
		return this.getRuleContext(0, FinalValueContext);
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(pascalParser.TO, 0); }
	public DOWNTO(): TerminalNode | undefined { return this.tryGetToken(pascalParser.DOWNTO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_forList; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterForList) {
			listener.enterForList(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitForList) {
			listener.exitForList(this);
		}
	}
}


export class InitialValueContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_initialValue; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterInitialValue) {
			listener.enterInitialValue(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitInitialValue) {
			listener.exitInitialValue(this);
		}
	}
}


export class FinalValueContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_finalValue; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterFinalValue) {
			listener.enterFinalValue(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitFinalValue) {
			listener.exitFinalValue(this);
		}
	}
}


export class WithStatementContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(pascalParser.WITH, 0); }
	public recordVariableList(): RecordVariableListContext {
		return this.getRuleContext(0, RecordVariableListContext);
	}
	public DO(): TerminalNode { return this.getToken(pascalParser.DO, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_withStatement; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterWithStatement) {
			listener.enterWithStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitWithStatement) {
			listener.exitWithStatement(this);
		}
	}
}


export class RecordVariableListContext extends ParserRuleContext {
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(pascalParser.COMMA);
		} else {
			return this.getToken(pascalParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pascalParser.RULE_recordVariableList; }
	// @Override
	public enterRule(listener: pascalListener): void {
		if (listener.enterRecordVariableList) {
			listener.enterRecordVariableList(this);
		}
	}
	// @Override
	public exitRule(listener: pascalListener): void {
		if (listener.exitRecordVariableList) {
			listener.exitRecordVariableList(this);
		}
	}
}


