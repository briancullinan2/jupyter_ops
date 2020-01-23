// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cto/CtoParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { CtoParserListener } from "./CtoParserListener";

export class CtoParser extends Parser {
	public static readonly ABSTRACT = 1;
	public static readonly ASSET = 2;
	public static readonly CONCEPT = 3;
	public static readonly DEFAULT = 4;
	public static readonly ENUM = 5;
	public static readonly EVENT = 6;
	public static readonly EXTENDS = 7;
	public static readonly IDENTIFIED = 8;
	public static readonly IMPORT = 9;
	public static readonly NAMESPACE = 10;
	public static readonly OPTIONAL = 11;
	public static readonly PARTICIPANT = 12;
	public static readonly RANGE = 13;
	public static readonly REGEX = 14;
	public static readonly TRANSACTION = 15;
	public static readonly BOOLEAN = 16;
	public static readonly DATE_TIME = 17;
	public static readonly DOUBLE = 18;
	public static readonly INTEGER = 19;
	public static readonly LONG = 20;
	public static readonly STRING = 21;
	public static readonly LPAREN = 22;
	public static readonly RPAREN = 23;
	public static readonly LBRACE = 24;
	public static readonly RBRACE = 25;
	public static readonly LBRACK = 26;
	public static readonly RBRACK = 27;
	public static readonly SEMI = 28;
	public static readonly COMMA = 29;
	public static readonly DOT = 30;
	public static readonly COLON = 31;
	public static readonly ASSIGN = 32;
	public static readonly MUL = 33;
	public static readonly AT = 34;
	public static readonly ELLIPSIS = 35;
	public static readonly REF = 36;
	public static readonly VAR = 37;
	public static readonly DECIMAL_LITERAL = 38;
	public static readonly OCT_LITERAL = 39;
	public static readonly FLOAT_LITERAL = 40;
	public static readonly BOOL_LITERAL = 41;
	public static readonly DATE_TIME_LITERAL = 42;
	public static readonly WS = 43;
	public static readonly LINE_COMMENT = 44;
	public static readonly COMMENT = 45;
	public static readonly REGEX_EXPR = 46;
	public static readonly IDENTIFIER = 47;
	public static readonly CHAR_LITERAL = 48;
	public static readonly STRING_LITERAL = 49;
	public static readonly RULE_modelUnit = 0;
	public static readonly RULE_namespaceDeclaration = 1;
	public static readonly RULE_importDeclaration = 2;
	public static readonly RULE_typeDeclaration = 3;
	public static readonly RULE_classModifier = 4;
	public static readonly RULE_assetDeclaration = 5;
	public static readonly RULE_conceptDeclaration = 6;
	public static readonly RULE_enumDeclaration = 7;
	public static readonly RULE_enumConstant = 8;
	public static readonly RULE_eventDeclaration = 9;
	public static readonly RULE_participantDeclaration = 10;
	public static readonly RULE_transactionDeclaration = 11;
	public static readonly RULE_extendsOrIdentified = 12;
	public static readonly RULE_identified = 13;
	public static readonly RULE_classBody = 14;
	public static readonly RULE_classBodyDeclaration = 15;
	public static readonly RULE_fieldDeclaration = 16;
	public static readonly RULE_identifierField = 17;
	public static readonly RULE_numericField = 18;
	public static readonly RULE_numericPrimitive = 19;
	public static readonly RULE_booleanField = 20;
	public static readonly RULE_dateField = 21;
	public static readonly RULE_defaultDate = 22;
	public static readonly RULE_regexDeclaration = 23;
	public static readonly RULE_stringField = 24;
	public static readonly RULE_reference = 25;
	public static readonly RULE_qualifiedName = 26;
	public static readonly RULE_rangeValidation = 27;
	public static readonly RULE_rangeDeclaration = 28;
	public static readonly RULE_defaultBoolean = 29;
	public static readonly RULE_defaultString = 30;
	public static readonly RULE_defaultNumber = 31;
	public static readonly RULE_identifier = 32;
	public static readonly RULE_literal = 33;
	public static readonly RULE_numberLiteral = 34;
	public static readonly RULE_stringLiteral = 35;
	public static readonly RULE_integerLiteral = 36;
	public static readonly RULE_floatLiteral = 37;
	public static readonly RULE_decorator = 38;
	public static readonly RULE_elementValuePair = 39;
	public static readonly RULE_square = 40;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"modelUnit", "namespaceDeclaration", "importDeclaration", "typeDeclaration", 
		"classModifier", "assetDeclaration", "conceptDeclaration", "enumDeclaration", 
		"enumConstant", "eventDeclaration", "participantDeclaration", "transactionDeclaration", 
		"extendsOrIdentified", "identified", "classBody", "classBodyDeclaration", 
		"fieldDeclaration", "identifierField", "numericField", "numericPrimitive", 
		"booleanField", "dateField", "defaultDate", "regexDeclaration", "stringField", 
		"reference", "qualifiedName", "rangeValidation", "rangeDeclaration", "defaultBoolean", 
		"defaultString", "defaultNumber", "identifier", "literal", "numberLiteral", 
		"stringLiteral", "integerLiteral", "floatLiteral", "decorator", "elementValuePair", 
		"square",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'abstract'", "'asset'", "'concept'", "'default'", "'enum'", 
		"'event'", "'extends'", "'identified by'", "'import'", "'namespace'", 
		"'optional'", "'participant'", "'range'", "'regex'", "'transaction'", 
		"'Boolean'", "'DateTime'", "'Double'", "'Integer'", "'Long'", "'String'", 
		"'('", "')'", "'{'", "'}'", "'['", "']'", "';'", "','", "'.'", "':'", 
		"'='", "'*'", "'@'", "'...'", "'--> '", "'o '",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ABSTRACT", "ASSET", "CONCEPT", "DEFAULT", "ENUM", "EVENT", 
		"EXTENDS", "IDENTIFIED", "IMPORT", "NAMESPACE", "OPTIONAL", "PARTICIPANT", 
		"RANGE", "REGEX", "TRANSACTION", "BOOLEAN", "DATE_TIME", "DOUBLE", "INTEGER", 
		"LONG", "STRING", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", 
		"SEMI", "COMMA", "DOT", "COLON", "ASSIGN", "MUL", "AT", "ELLIPSIS", "REF", 
		"VAR", "DECIMAL_LITERAL", "OCT_LITERAL", "FLOAT_LITERAL", "BOOL_LITERAL", 
		"DATE_TIME_LITERAL", "WS", "LINE_COMMENT", "COMMENT", "REGEX_EXPR", "IDENTIFIER", 
		"CHAR_LITERAL", "STRING_LITERAL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CtoParser._LITERAL_NAMES, CtoParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CtoParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CtoParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CtoParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CtoParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CtoParser._ATN, this);
	}
	// @RuleVersion(0)
	public modelUnit(): ModelUnitContext {
		let _localctx: ModelUnitContext = new ModelUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CtoParser.RULE_modelUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.namespaceDeclaration();
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CtoParser.IMPORT) {
				{
				{
				this.state = 83;
				this.importDeclaration();
				}
				}
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CtoParser.ABSTRACT) | (1 << CtoParser.ASSET) | (1 << CtoParser.CONCEPT) | (1 << CtoParser.ENUM) | (1 << CtoParser.EVENT) | (1 << CtoParser.PARTICIPANT) | (1 << CtoParser.TRANSACTION))) !== 0) || _la === CtoParser.AT) {
				{
				{
				this.state = 89;
				this.typeDeclaration();
				}
				}
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 95;
			this.match(CtoParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceDeclaration(): NamespaceDeclarationContext {
		let _localctx: NamespaceDeclarationContext = new NamespaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CtoParser.RULE_namespaceDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(CtoParser.NAMESPACE);
			this.state = 98;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CtoParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.match(CtoParser.IMPORT);
			this.state = 101;
			this.qualifiedName();
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CtoParser.DOT) {
				{
				this.state = 102;
				this.match(CtoParser.DOT);
				this.state = 103;
				this.match(CtoParser.MUL);
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
		this.enterRule(_localctx, 6, CtoParser.RULE_typeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 106;
				this.assetDeclaration();
				}
				break;

			case 2:
				{
				this.state = 107;
				this.conceptDeclaration();
				}
				break;

			case 3:
				{
				this.state = 108;
				this.enumDeclaration();
				}
				break;

			case 4:
				{
				this.state = 109;
				this.participantDeclaration();
				}
				break;

			case 5:
				{
				this.state = 110;
				this.transactionDeclaration();
				}
				break;

			case 6:
				{
				this.state = 111;
				this.eventDeclaration();
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
	public classModifier(): ClassModifierContext {
		let _localctx: ClassModifierContext = new ClassModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CtoParser.RULE_classModifier);
		try {
			this.state = 116;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CtoParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 114;
				this.decorator();
				}
				break;
			case CtoParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 115;
				this.match(CtoParser.ABSTRACT);
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
	public assetDeclaration(): AssetDeclarationContext {
		let _localctx: AssetDeclarationContext = new AssetDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CtoParser.RULE_assetDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CtoParser.ABSTRACT || _la === CtoParser.AT) {
				{
				{
				this.state = 118;
				this.classModifier();
				}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 124;
			this.match(CtoParser.ASSET);
			this.state = 125;
			this.match(CtoParser.IDENTIFIER);
			this.state = 126;
			this.extendsOrIdentified();
			this.state = 127;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conceptDeclaration(): ConceptDeclarationContext {
		let _localctx: ConceptDeclarationContext = new ConceptDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CtoParser.RULE_conceptDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CtoParser.ABSTRACT || _la === CtoParser.AT) {
				{
				{
				this.state = 129;
				this.classModifier();
				}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 135;
			this.match(CtoParser.CONCEPT);
			this.state = 136;
			this.match(CtoParser.IDENTIFIER);
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CtoParser.EXTENDS) {
				{
				this.state = 137;
				this.match(CtoParser.EXTENDS);
				this.state = 138;
				this.match(CtoParser.IDENTIFIER);
				}
			}

			this.state = 141;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CtoParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(CtoParser.ENUM);
			this.state = 144;
			this.match(CtoParser.IDENTIFIER);
			this.state = 145;
			this.match(CtoParser.LBRACE);
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CtoParser.VAR) {
				{
				{
				this.state = 146;
				this.enumConstant();
				}
				}
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 152;
			this.match(CtoParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CtoParser.RULE_enumConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(CtoParser.VAR);
			this.state = 155;
			this.match(CtoParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventDeclaration(): EventDeclarationContext {
		let _localctx: EventDeclarationContext = new EventDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CtoParser.RULE_eventDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(CtoParser.EVENT);
			this.state = 158;
			this.match(CtoParser.IDENTIFIER);
			this.state = 159;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public participantDeclaration(): ParticipantDeclarationContext {
		let _localctx: ParticipantDeclarationContext = new ParticipantDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CtoParser.RULE_participantDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CtoParser.ABSTRACT || _la === CtoParser.AT) {
				{
				{
				this.state = 161;
				this.classModifier();
				}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 167;
			this.match(CtoParser.PARTICIPANT);
			this.state = 168;
			this.match(CtoParser.IDENTIFIER);
			this.state = 169;
			this.extendsOrIdentified();
			this.state = 170;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transactionDeclaration(): TransactionDeclarationContext {
		let _localctx: TransactionDeclarationContext = new TransactionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CtoParser.RULE_transactionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CtoParser.ABSTRACT || _la === CtoParser.AT) {
				{
				{
				this.state = 172;
				this.classModifier();
				}
				}
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 178;
			this.match(CtoParser.TRANSACTION);
			this.state = 179;
			this.match(CtoParser.IDENTIFIER);
			this.state = 180;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extendsOrIdentified(): ExtendsOrIdentifiedContext {
		let _localctx: ExtendsOrIdentifiedContext = new ExtendsOrIdentifiedContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CtoParser.RULE_extendsOrIdentified);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CtoParser.EXTENDS:
				{
				{
				this.state = 182;
				this.match(CtoParser.EXTENDS);
				this.state = 183;
				this.match(CtoParser.IDENTIFIER);
				}
				}
				break;
			case CtoParser.IDENTIFIED:
				{
				this.state = 184;
				this.identified();
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
	public identified(): IdentifiedContext {
		let _localctx: IdentifiedContext = new IdentifiedContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CtoParser.RULE_identified);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 187;
			this.match(CtoParser.IDENTIFIED);
			this.state = 188;
			this.match(CtoParser.IDENTIFIER);
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
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CtoParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.match(CtoParser.LBRACE);
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (CtoParser.SEMI - 28)) | (1 << (CtoParser.REF - 28)) | (1 << (CtoParser.VAR - 28)))) !== 0)) {
				{
				{
				this.state = 191;
				this.classBodyDeclaration();
				}
				}
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 197;
			this.match(CtoParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CtoParser.RULE_classBodyDeclaration);
		try {
			this.state = 201;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CtoParser.SEMI:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 199;
				this.match(CtoParser.SEMI);
				}
				break;
			case CtoParser.REF:
			case CtoParser.VAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 200;
				this.fieldDeclaration();
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
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CtoParser.RULE_fieldDeclaration);
		let _la: number;
		try {
			this.state = 247;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 203;
				this.stringField();
				this.state = 204;
				this.identifier();
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CtoParser.DEFAULT) {
					{
					this.state = 205;
					this.defaultString();
					}
				}

				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CtoParser.REGEX) {
					{
					this.state = 208;
					this.regexDeclaration();
					}
				}

				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CtoParser.OPTIONAL) {
					{
					this.state = 211;
					this.match(CtoParser.OPTIONAL);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 214;
				this.booleanField();
				this.state = 215;
				this.identifier();
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CtoParser.DEFAULT) {
					{
					this.state = 216;
					this.defaultBoolean();
					}
				}

				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CtoParser.OPTIONAL) {
					{
					this.state = 219;
					this.match(CtoParser.OPTIONAL);
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 222;
				this.numericField();
				this.state = 223;
				this.identifier();
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CtoParser.DEFAULT) {
					{
					this.state = 224;
					this.defaultNumber();
					}
				}

				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CtoParser.RANGE) {
					{
					this.state = 227;
					this.rangeValidation();
					}
				}

				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CtoParser.OPTIONAL) {
					{
					this.state = 230;
					this.match(CtoParser.OPTIONAL);
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 233;
				this.dateField();
				this.state = 234;
				this.identifier();
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CtoParser.DEFAULT) {
					{
					this.state = 235;
					this.defaultDate();
					}
				}

				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CtoParser.OPTIONAL) {
					{
					this.state = 238;
					this.match(CtoParser.OPTIONAL);
					}
				}

				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 241;
				this.identifierField();
				this.state = 242;
				this.identifier();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 244;
				this.reference();
				this.state = 245;
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
	public identifierField(): IdentifierFieldContext {
		let _localctx: IdentifierFieldContext = new IdentifierFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CtoParser.RULE_identifierField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(CtoParser.VAR);
			this.state = 250;
			this.match(CtoParser.IDENTIFIER);
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CtoParser.LBRACK) {
				{
				{
				this.state = 251;
				this.square();
				}
				}
				this.state = 256;
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
	public numericField(): NumericFieldContext {
		let _localctx: NumericFieldContext = new NumericFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CtoParser.RULE_numericField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.match(CtoParser.VAR);
			this.state = 258;
			this.numericPrimitive();
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CtoParser.LBRACK) {
				{
				{
				this.state = 259;
				this.square();
				}
				}
				this.state = 264;
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
	public numericPrimitive(): NumericPrimitiveContext {
		let _localctx: NumericPrimitiveContext = new NumericPrimitiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CtoParser.RULE_numericPrimitive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CtoParser.DOUBLE) | (1 << CtoParser.INTEGER) | (1 << CtoParser.LONG))) !== 0))) {
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
	public booleanField(): BooleanFieldContext {
		let _localctx: BooleanFieldContext = new BooleanFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CtoParser.RULE_booleanField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.match(CtoParser.VAR);
			this.state = 268;
			this.match(CtoParser.BOOLEAN);
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CtoParser.LBRACK) {
				{
				{
				this.state = 269;
				this.square();
				}
				}
				this.state = 274;
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
	public dateField(): DateFieldContext {
		let _localctx: DateFieldContext = new DateFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CtoParser.RULE_dateField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.match(CtoParser.VAR);
			this.state = 276;
			this.match(CtoParser.DATE_TIME);
			this.state = 280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CtoParser.LBRACK) {
				{
				{
				this.state = 277;
				this.square();
				}
				}
				this.state = 282;
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
	public defaultDate(): DefaultDateContext {
		let _localctx: DefaultDateContext = new DefaultDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CtoParser.RULE_defaultDate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(CtoParser.DEFAULT);
			this.state = 284;
			this.match(CtoParser.ASSIGN);
			this.state = 285;
			this.match(CtoParser.DATE_TIME_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public regexDeclaration(): RegexDeclarationContext {
		let _localctx: RegexDeclarationContext = new RegexDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CtoParser.RULE_regexDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(CtoParser.REGEX);
			this.state = 288;
			this.match(CtoParser.ASSIGN);
			this.state = 289;
			this.match(CtoParser.REGEX_EXPR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringField(): StringFieldContext {
		let _localctx: StringFieldContext = new StringFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CtoParser.RULE_stringField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this.match(CtoParser.VAR);
			this.state = 292;
			this.match(CtoParser.STRING);
			this.state = 296;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CtoParser.LBRACK) {
				{
				{
				this.state = 293;
				this.square();
				}
				}
				this.state = 298;
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
	public reference(): ReferenceContext {
		let _localctx: ReferenceContext = new ReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CtoParser.RULE_reference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(CtoParser.REF);
			this.state = 300;
			this.match(CtoParser.IDENTIFIER);
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CtoParser.LBRACK) {
				{
				{
				this.state = 301;
				this.square();
				}
				}
				this.state = 306;
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
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CtoParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(CtoParser.IDENTIFIER);
			this.state = 312;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 308;
					this.match(CtoParser.DOT);
					this.state = 309;
					this.match(CtoParser.IDENTIFIER);
					}
					}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
	public rangeValidation(): RangeValidationContext {
		let _localctx: RangeValidationContext = new RangeValidationContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CtoParser.RULE_rangeValidation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.match(CtoParser.RANGE);
			this.state = 316;
			this.match(CtoParser.ASSIGN);
			this.state = 317;
			this.rangeDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rangeDeclaration(): RangeDeclarationContext {
		let _localctx: RangeDeclarationContext = new RangeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CtoParser.RULE_rangeDeclaration);
		try {
			this.state = 335;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 319;
				this.match(CtoParser.LBRACK);
				this.state = 320;
				this.numberLiteral();
				this.state = 321;
				this.match(CtoParser.COMMA);
				this.state = 322;
				this.match(CtoParser.RBRACK);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 324;
				this.match(CtoParser.LBRACK);
				this.state = 325;
				this.match(CtoParser.COMMA);
				this.state = 326;
				this.numberLiteral();
				this.state = 327;
				this.match(CtoParser.RBRACK);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 329;
				this.match(CtoParser.LBRACK);
				this.state = 330;
				this.numberLiteral();
				this.state = 331;
				this.match(CtoParser.COMMA);
				this.state = 332;
				this.numberLiteral();
				this.state = 333;
				this.match(CtoParser.RBRACK);
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
	public defaultBoolean(): DefaultBooleanContext {
		let _localctx: DefaultBooleanContext = new DefaultBooleanContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CtoParser.RULE_defaultBoolean);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 337;
			this.match(CtoParser.DEFAULT);
			this.state = 338;
			this.match(CtoParser.ASSIGN);
			this.state = 339;
			this.match(CtoParser.BOOL_LITERAL);
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
	public defaultString(): DefaultStringContext {
		let _localctx: DefaultStringContext = new DefaultStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CtoParser.RULE_defaultString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 341;
			this.match(CtoParser.DEFAULT);
			this.state = 342;
			this.match(CtoParser.ASSIGN);
			this.state = 343;
			this.stringLiteral();
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
	public defaultNumber(): DefaultNumberContext {
		let _localctx: DefaultNumberContext = new DefaultNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CtoParser.RULE_defaultNumber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 345;
			this.match(CtoParser.DEFAULT);
			this.state = 346;
			this.match(CtoParser.ASSIGN);
			this.state = 347;
			this.numberLiteral();
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
		this.enterRule(_localctx, 64, CtoParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			_la = this._input.LA(1);
			if (!(_la === CtoParser.ASSET || _la === CtoParser.PARTICIPANT || _la === CtoParser.IDENTIFIER)) {
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CtoParser.RULE_literal);
		try {
			this.state = 354;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CtoParser.DECIMAL_LITERAL:
			case CtoParser.OCT_LITERAL:
			case CtoParser.FLOAT_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 351;
				this.numberLiteral();
				}
				break;
			case CtoParser.CHAR_LITERAL:
			case CtoParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 352;
				this.stringLiteral();
				}
				break;
			case CtoParser.BOOL_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 353;
				this.match(CtoParser.BOOL_LITERAL);
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
	public numberLiteral(): NumberLiteralContext {
		let _localctx: NumberLiteralContext = new NumberLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CtoParser.RULE_numberLiteral);
		try {
			this.state = 358;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CtoParser.DECIMAL_LITERAL:
			case CtoParser.OCT_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 356;
				this.integerLiteral();
				}
				break;
			case CtoParser.FLOAT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 357;
				this.floatLiteral();
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
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CtoParser.RULE_stringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			_la = this._input.LA(1);
			if (!(_la === CtoParser.CHAR_LITERAL || _la === CtoParser.STRING_LITERAL)) {
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
	public integerLiteral(): IntegerLiteralContext {
		let _localctx: IntegerLiteralContext = new IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CtoParser.RULE_integerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			_la = this._input.LA(1);
			if (!(_la === CtoParser.DECIMAL_LITERAL || _la === CtoParser.OCT_LITERAL)) {
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
	public floatLiteral(): FloatLiteralContext {
		let _localctx: FloatLiteralContext = new FloatLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CtoParser.RULE_floatLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this.match(CtoParser.FLOAT_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 76, CtoParser.RULE_decorator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(CtoParser.AT);
			this.state = 367;
			this.qualifiedName();
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CtoParser.LPAREN) {
				{
				this.state = 368;
				this.match(CtoParser.LPAREN);
				this.state = 369;
				this.elementValuePair();
				this.state = 370;
				this.match(CtoParser.RPAREN);
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
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CtoParser.RULE_elementValuePair);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.literal();
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CtoParser.COMMA) {
				{
				{
				this.state = 375;
				this.match(CtoParser.COMMA);
				this.state = 376;
				this.literal();
				}
				}
				this.state = 381;
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
	public square(): SquareContext {
		let _localctx: SquareContext = new SquareContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CtoParser.RULE_square);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.match(CtoParser.LBRACK);
			this.state = 383;
			this.match(CtoParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x033\u0184\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x03\x02" +
		"\x03\x02\x07\x02W\n\x02\f\x02\x0E\x02Z\v\x02\x03\x02\x07\x02]\n\x02\f" +
		"\x02\x0E\x02`\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04k\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05s\n\x05\x03\x06\x03\x06\x05\x06w\n\x06\x03\x07\x07" +
		"\x07z\n\x07\f\x07\x0E\x07}\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x07\b\x85\n\b\f\b\x0E\b\x88\v\b\x03\b\x03\b\x03\b\x03\b\x05\b\x8E" +
		"\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x07\t\x96\n\t\f\t\x0E\t\x99\v" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x07\f\xA5" +
		"\n\f\f\f\x0E\f\xA8\v\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x07\r\xB0\n" +
		"\r\f\r\x0E\r\xB3\v\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\xBC\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x07\x10\xC3\n\x10" +
		"\f\x10\x0E\x10\xC6\v\x10\x03\x10\x03\x10\x03\x11\x03\x11\x05\x11\xCC\n" +
		"\x11\x03\x12\x03\x12\x03\x12\x05\x12\xD1\n\x12\x03\x12\x05\x12\xD4\n\x12" +
		"\x03\x12\x05\x12\xD7\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\xDC\n\x12\x03" +
		"\x12\x05\x12\xDF\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\xE4\n\x12\x03\x12" +
		"\x05\x12\xE7\n\x12\x03\x12\x05\x12\xEA\n\x12\x03\x12\x03\x12\x03\x12\x05" +
		"\x12\xEF\n\x12\x03\x12\x05\x12\xF2\n\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x05\x12\xFA\n\x12\x03\x13\x03\x13\x03\x13\x07\x13\xFF" +
		"\n\x13\f\x13\x0E\x13\u0102\v\x13\x03\x14\x03\x14\x03\x14\x07\x14\u0107" +
		"\n\x14\f\x14\x0E\x14\u010A\v\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16" +
		"\x07\x16\u0111\n\x16\f\x16\x0E\x16\u0114\v\x16\x03\x17\x03\x17\x03\x17" +
		"\x07\x17\u0119\n\x17\f\x17\x0E\x17\u011C\v\x17\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x07\x1A" +
		"\u0129\n\x1A\f\x1A\x0E\x1A\u012C\v\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B" +
		"\u0131\n\x1B\f\x1B\x0E\x1B\u0134\v\x1B\x03\x1C\x03\x1C\x03\x1C\x07\x1C" +
		"\u0139\n\x1C\f\x1C\x0E\x1C\u013C\v\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0152" +
		"\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x03" +
		"!\x03!\x03\"\x03\"\x03#\x03#\x03#\x05#\u0165\n#\x03$\x03$\x05$\u0169\n" +
		"$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0177" +
		"\n(\x03)\x03)\x03)\x07)\u017C\n)\f)\x0E)\u017F\v)\x03*\x03*\x03*\x03*" +
		"\x02\x02\x02+\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02\x02\x06\x03\x02\x14\x16" +
		"\x05\x02\x04\x04\x0E\x0E11\x03\x0223\x03\x02()\x02\u0189\x02T\x03\x02" +
		"\x02\x02\x04c\x03\x02\x02\x02\x06f\x03\x02\x02\x02\br\x03\x02\x02\x02" +
		"\nv\x03\x02\x02\x02\f{\x03\x02\x02\x02\x0E\x86\x03\x02\x02\x02\x10\x91" +
		"\x03\x02\x02\x02\x12\x9C\x03\x02\x02\x02\x14\x9F\x03\x02\x02\x02\x16\xA6" +
		"\x03\x02\x02\x02\x18\xB1\x03\x02\x02\x02\x1A\xBB\x03\x02\x02\x02\x1C\xBD" +
		"\x03\x02\x02\x02\x1E\xC0\x03\x02\x02\x02 \xCB\x03\x02\x02\x02\"\xF9\x03" +
		"\x02\x02\x02$\xFB\x03\x02\x02\x02&\u0103\x03\x02\x02\x02(\u010B\x03\x02" +
		"\x02\x02*\u010D\x03\x02\x02\x02,\u0115\x03\x02\x02\x02.\u011D\x03\x02" +
		"\x02\x020\u0121\x03\x02\x02\x022\u0125\x03\x02\x02\x024\u012D\x03\x02" +
		"\x02\x026\u0135\x03\x02\x02\x028\u013D\x03\x02\x02\x02:\u0151\x03\x02" +
		"\x02\x02<\u0153\x03\x02\x02\x02>\u0157\x03\x02\x02\x02@\u015B\x03\x02" +
		"\x02\x02B\u015F\x03\x02\x02\x02D\u0164\x03\x02\x02\x02F\u0168\x03\x02" +
		"\x02\x02H\u016A\x03\x02\x02\x02J\u016C\x03\x02\x02\x02L\u016E\x03\x02" +
		"\x02\x02N\u0170\x03\x02\x02\x02P\u0178\x03\x02\x02\x02R\u0180\x03\x02" +
		"\x02\x02TX\x05\x04\x03\x02UW\x05\x06\x04\x02VU\x03\x02\x02\x02WZ\x03\x02" +
		"\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02Y^\x03\x02\x02\x02ZX\x03\x02" +
		"\x02\x02[]\x05\b\x05\x02\\[\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02" +
		"\x02\x02^_\x03\x02\x02\x02_a\x03\x02\x02\x02`^\x03\x02\x02\x02ab\x07\x02" +
		"\x02\x03b\x03\x03\x02\x02\x02cd\x07\f\x02\x02de\x056\x1C\x02e\x05\x03" +
		"\x02\x02\x02fg\x07\v\x02\x02gj\x056\x1C\x02hi\x07 \x02\x02ik\x07#\x02" +
		"\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02k\x07\x03\x02\x02\x02ls\x05\f" +
		"\x07\x02ms\x05\x0E\b\x02ns\x05\x10\t\x02os\x05\x16\f\x02ps\x05\x18\r\x02" +
		"qs\x05\x14\v\x02rl\x03\x02\x02\x02rm\x03\x02\x02\x02rn\x03\x02\x02\x02" +
		"ro\x03\x02\x02\x02rp\x03\x02\x02\x02rq\x03\x02\x02\x02s\t\x03\x02\x02" +
		"\x02tw\x05N(\x02uw\x07\x03\x02\x02vt\x03\x02\x02\x02vu\x03\x02\x02\x02" +
		"w\v\x03\x02\x02\x02xz\x05\n\x06\x02yx\x03\x02\x02\x02z}\x03\x02\x02\x02" +
		"{y\x03\x02\x02\x02{|\x03\x02\x02\x02|~\x03\x02\x02\x02}{\x03\x02\x02\x02" +
		"~\x7F\x07\x04\x02\x02\x7F\x80\x071\x02\x02\x80\x81\x05\x1A\x0E\x02\x81" +
		"\x82\x05\x1E\x10\x02\x82\r\x03\x02\x02\x02\x83\x85\x05\n\x06\x02\x84\x83" +
		"\x03\x02\x02\x02\x85\x88\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87" +
		"\x03\x02\x02\x02\x87\x89\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x89\x8A" +
		"\x07\x05\x02\x02\x8A\x8D\x071\x02\x02\x8B\x8C\x07\t\x02\x02\x8C\x8E\x07" +
		"1\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x03" +
		"\x02\x02\x02\x8F\x90\x05\x1E\x10\x02\x90\x0F\x03\x02\x02\x02\x91\x92\x07" +
		"\x07\x02\x02\x92\x93\x071\x02\x02\x93\x97\x07\x1A\x02\x02\x94\x96\x05" +
		"\x12\n\x02\x95\x94\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97\x95\x03" +
		"\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9A\x03\x02\x02\x02\x99\x97\x03" +
		"\x02\x02\x02\x9A\x9B\x07\x1B\x02\x02\x9B\x11\x03\x02\x02\x02\x9C\x9D\x07" +
		"\'\x02\x02\x9D\x9E\x071\x02\x02\x9E\x13\x03\x02\x02\x02\x9F\xA0\x07\b" +
		"\x02\x02\xA0\xA1\x071\x02\x02\xA1\xA2\x05\x1E\x10\x02\xA2\x15\x03\x02" +
		"\x02\x02\xA3\xA5\x05\n\x06\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA8\x03\x02" +
		"\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA9\x03\x02" +
		"\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAA\x07\x0E\x02\x02\xAA\xAB\x071" +
		"\x02\x02\xAB\xAC\x05\x1A\x0E\x02\xAC\xAD\x05\x1E\x10\x02\xAD\x17\x03\x02" +
		"\x02\x02\xAE\xB0\x05\n\x06\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB3\x03\x02" +
		"\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x03\x02" +
		"\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xB5\x07\x11\x02\x02\xB5\xB6\x071" +
		"\x02\x02\xB6\xB7\x05\x1E\x10\x02\xB7\x19\x03\x02\x02\x02\xB8\xB9\x07\t" +
		"\x02\x02\xB9\xBC\x071\x02\x02\xBA\xBC\x05\x1C\x0F\x02\xBB\xB8\x03\x02" +
		"\x02\x02\xBB\xBA\x03\x02\x02\x02\xBC\x1B\x03\x02\x02\x02\xBD\xBE\x07\n" +
		"\x02\x02\xBE\xBF\x071\x02\x02\xBF\x1D\x03\x02\x02\x02\xC0\xC4\x07\x1A" +
		"\x02\x02\xC1\xC3\x05 \x11\x02\xC2\xC1\x03\x02\x02\x02\xC3\xC6\x03\x02" +
		"\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC7\x03\x02" +
		"\x02\x02\xC6\xC4\x03\x02\x02\x02\xC7\xC8\x07\x1B\x02\x02\xC8\x1F\x03\x02" +
		"\x02\x02\xC9\xCC\x07\x1E\x02\x02\xCA\xCC\x05\"\x12\x02\xCB\xC9\x03\x02" +
		"\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC!\x03\x02\x02\x02\xCD\xCE\x052\x1A" +
		"\x02\xCE\xD0\x05B\"\x02\xCF\xD1\x05> \x02\xD0\xCF\x03\x02\x02\x02\xD0" +
		"\xD1\x03\x02\x02\x02\xD1\xD3\x03\x02\x02\x02\xD2\xD4\x050\x19\x02\xD3" +
		"\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5" +
		"\xD7\x07\r\x02\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7" +
		"\xFA\x03\x02\x02\x02\xD8\xD9\x05*\x16\x02\xD9\xDB\x05B\"\x02\xDA\xDC\x05" +
		"<\x1F\x02\xDB\xDA\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDE\x03" +
		"\x02\x02\x02\xDD\xDF\x07\r\x02\x02\xDE\xDD\x03\x02\x02\x02\xDE\xDF\x03" +
		"\x02\x02\x02\xDF\xFA\x03\x02\x02\x02\xE0\xE1\x05&\x14\x02\xE1\xE3\x05" +
		"B\"\x02\xE2\xE4\x05@!\x02\xE3\xE2\x03\x02\x02\x02\xE3\xE4\x03\x02\x02" +
		"\x02\xE4\xE6\x03\x02\x02\x02\xE5\xE7\x058\x1D\x02\xE6\xE5\x03\x02\x02" +
		"\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xEA\x07\r\x02" +
		"\x02\xE9\xE8\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xFA\x03\x02\x02" +
		"\x02\xEB\xEC\x05,\x17\x02\xEC\xEE\x05B\"\x02\xED\xEF\x05.\x18\x02\xEE" +
		"\xED\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1\x03\x02\x02\x02\xF0" +
		"\xF2\x07\r\x02\x02\xF1\xF0\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2" +
		"\xFA\x03\x02\x02\x02\xF3\xF4\x05$\x13\x02\xF4\xF5\x05B\"\x02\xF5\xFA\x03" +
		"\x02\x02\x02\xF6\xF7\x054\x1B\x02\xF7\xF8\x05B\"\x02\xF8\xFA\x03\x02\x02" +
		"\x02\xF9\xCD\x03\x02\x02\x02\xF9\xD8\x03\x02\x02\x02\xF9\xE0\x03\x02\x02" +
		"\x02\xF9\xEB\x03\x02\x02\x02\xF9\xF3\x03\x02\x02\x02\xF9\xF6\x03\x02\x02" +
		"\x02\xFA#\x03\x02\x02\x02\xFB\xFC\x07\'\x02\x02\xFC\u0100\x071\x02\x02" +
		"\xFD\xFF\x05R*\x02\xFE\xFD\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100" +
		"\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101%\x03\x02\x02\x02" +
		"\u0102\u0100\x03\x02\x02\x02\u0103\u0104\x07\'\x02\x02\u0104\u0108\x05" +
		"(\x15\x02\u0105\u0107\x05R*\x02\u0106\u0105\x03\x02\x02\x02\u0107\u010A" +
		"\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02" +
		"\u0109\'\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B\u010C\t\x02" +
		"\x02\x02\u010C)\x03\x02\x02\x02\u010D\u010E\x07\'\x02\x02\u010E\u0112" +
		"\x07\x12\x02\x02\u010F\u0111\x05R*\x02\u0110\u010F\x03\x02\x02\x02\u0111" +
		"\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0112\u0113\x03\x02" +
		"\x02\x02\u0113+\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0115\u0116" +
		"\x07\'\x02\x02\u0116\u011A\x07\x13\x02\x02\u0117\u0119\x05R*\x02\u0118" +
		"\u0117\x03\x02\x02\x02\u0119\u011C\x03\x02\x02\x02\u011A\u0118\x03\x02" +
		"\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B-\x03\x02\x02\x02\u011C\u011A" +
		"\x03\x02\x02\x02\u011D\u011E\x07\x06\x02\x02\u011E\u011F\x07\"\x02\x02" +
		"\u011F\u0120\x07,\x02\x02\u0120/\x03\x02\x02\x02\u0121\u0122\x07\x10\x02" +
		"\x02\u0122\u0123\x07\"\x02\x02\u0123\u0124\x070\x02\x02\u01241\x03\x02" +
		"\x02\x02\u0125\u0126\x07\'\x02\x02\u0126\u012A\x07\x17\x02\x02\u0127\u0129" +
		"\x05R*\x02\u0128\u0127\x03\x02\x02\x02\u0129\u012C\x03\x02\x02\x02\u012A" +
		"\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B3\x03\x02\x02" +
		"\x02\u012C\u012A\x03\x02\x02\x02\u012D\u012E\x07&\x02\x02\u012E\u0132" +
		"\x071\x02\x02\u012F\u0131\x05R*\x02\u0130\u012F\x03\x02\x02\x02\u0131" +
		"\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02" +
		"\x02\x02\u01335\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0135\u013A" +
		"\x071\x02\x02\u0136\u0137\x07 \x02\x02\u0137\u0139\x071\x02\x02\u0138" +
		"\u0136\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02" +
		"\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B7\x03\x02\x02\x02\u013C\u013A" +
		"\x03\x02\x02\x02\u013D\u013E\x07\x0F\x02\x02\u013E\u013F\x07\"\x02\x02" +
		"\u013F\u0140\x05:\x1E\x02\u01409\x03\x02\x02\x02\u0141\u0142\x07\x1C\x02" +
		"\x02\u0142\u0143\x05F$\x02\u0143\u0144\x07\x1F\x02\x02\u0144\u0145\x07" +
		"\x1D\x02\x02\u0145\u0152\x03\x02\x02\x02\u0146\u0147\x07\x1C\x02\x02\u0147" +
		"\u0148\x07\x1F\x02\x02\u0148\u0149\x05F$\x02\u0149\u014A\x07\x1D\x02\x02" +
		"\u014A\u0152\x03\x02\x02\x02\u014B\u014C\x07\x1C\x02\x02\u014C\u014D\x05" +
		"F$\x02\u014D\u014E\x07\x1F\x02\x02\u014E\u014F\x05F$\x02\u014F\u0150\x07" +
		"\x1D\x02\x02\u0150\u0152\x03\x02\x02\x02\u0151\u0141\x03\x02\x02\x02\u0151" +
		"\u0146\x03\x02\x02\x02\u0151\u014B\x03\x02\x02\x02\u0152;\x03\x02\x02" +
		"\x02\u0153\u0154\x07\x06\x02\x02\u0154\u0155\x07\"\x02\x02\u0155\u0156" +
		"\x07+\x02\x02\u0156=\x03\x02\x02\x02\u0157\u0158\x07\x06\x02\x02\u0158" +
		"\u0159\x07\"\x02\x02\u0159\u015A\x05H%\x02\u015A?\x03\x02\x02\x02\u015B" +
		"\u015C\x07\x06\x02\x02\u015C\u015D\x07\"\x02\x02\u015D\u015E\x05F$\x02" +
		"\u015EA\x03\x02\x02\x02\u015F\u0160\t\x03\x02\x02\u0160C\x03\x02\x02\x02" +
		"\u0161\u0165\x05F$\x02\u0162\u0165\x05H%\x02\u0163\u0165\x07+\x02\x02" +
		"\u0164\u0161\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0164\u0163\x03" +
		"\x02\x02\x02\u0165E\x03\x02\x02\x02\u0166\u0169\x05J&\x02\u0167\u0169" +
		"\x05L\'\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0167\x03\x02\x02\x02\u0169" +
		"G\x03\x02\x02\x02\u016A\u016B\t\x04\x02\x02\u016BI\x03\x02\x02\x02\u016C" +
		"\u016D\t\x05\x02\x02\u016DK\x03\x02\x02\x02\u016E\u016F\x07*\x02\x02\u016F" +
		"M\x03\x02\x02\x02\u0170\u0171\x07$\x02\x02\u0171\u0176\x056\x1C\x02\u0172" +
		"\u0173\x07\x18\x02\x02\u0173\u0174\x05P)\x02\u0174\u0175\x07\x19\x02\x02" +
		"\u0175\u0177\x03\x02\x02\x02\u0176\u0172\x03\x02\x02\x02\u0176\u0177\x03" +
		"\x02\x02\x02\u0177O\x03\x02\x02\x02\u0178\u017D\x05D#\x02\u0179\u017A" +
		"\x07\x1F\x02\x02\u017A\u017C\x05D#\x02\u017B\u0179\x03\x02\x02\x02\u017C" +
		"\u017F\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02" +
		"\x02\x02\u017EQ\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u0180\u0181" +
		"\x07\x1C\x02\x02\u0181\u0182\x07\x1D\x02\x02\u0182S\x03\x02\x02\x02\'" +
		"X^jrv{\x86\x8D\x97\xA6\xB1\xBB\xC4\xCB\xD0\xD3\xD6\xDB\xDE\xE3\xE6\xE9" +
		"\xEE\xF1\xF9\u0100\u0108\u0112\u011A\u012A\u0132\u013A\u0151\u0164\u0168" +
		"\u0176\u017D";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CtoParser.__ATN) {
			CtoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CtoParser._serializedATN));
		}

		return CtoParser.__ATN;
	}

}

export class ModelUnitContext extends ParserRuleContext {
	public namespaceDeclaration(): NamespaceDeclarationContext {
		return this.getRuleContext(0, NamespaceDeclarationContext);
	}
	public EOF(): TerminalNode { return this.getToken(CtoParser.EOF, 0); }
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	public typeDeclaration(): TypeDeclarationContext[];
	public typeDeclaration(i: number): TypeDeclarationContext;
	public typeDeclaration(i?: number): TypeDeclarationContext | TypeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDeclarationContext);
		} else {
			return this.getRuleContext(i, TypeDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_modelUnit; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterModelUnit) {
			listener.enterModelUnit(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitModelUnit) {
			listener.exitModelUnit(this);
		}
	}
}


export class NamespaceDeclarationContext extends ParserRuleContext {
	public NAMESPACE(): TerminalNode { return this.getToken(CtoParser.NAMESPACE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_namespaceDeclaration; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterNamespaceDeclaration) {
			listener.enterNamespaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitNamespaceDeclaration) {
			listener.exitNamespaceDeclaration(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(CtoParser.IMPORT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CtoParser.DOT, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CtoParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public assetDeclaration(): AssetDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AssetDeclarationContext);
	}
	public conceptDeclaration(): ConceptDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConceptDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public participantDeclaration(): ParticipantDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ParticipantDeclarationContext);
	}
	public transactionDeclaration(): TransactionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TransactionDeclarationContext);
	}
	public eventDeclaration(): EventDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EventDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
}


export class ClassModifierContext extends ParserRuleContext {
	public decorator(): DecoratorContext | undefined {
		return this.tryGetRuleContext(0, DecoratorContext);
	}
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(CtoParser.ABSTRACT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_classModifier; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterClassModifier) {
			listener.enterClassModifier(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitClassModifier) {
			listener.exitClassModifier(this);
		}
	}
}


export class AssetDeclarationContext extends ParserRuleContext {
	public ASSET(): TerminalNode { return this.getToken(CtoParser.ASSET, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CtoParser.IDENTIFIER, 0); }
	public extendsOrIdentified(): ExtendsOrIdentifiedContext {
		return this.getRuleContext(0, ExtendsOrIdentifiedContext);
	}
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_assetDeclaration; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterAssetDeclaration) {
			listener.enterAssetDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitAssetDeclaration) {
			listener.exitAssetDeclaration(this);
		}
	}
}


export class ConceptDeclarationContext extends ParserRuleContext {
	public CONCEPT(): TerminalNode { return this.getToken(CtoParser.CONCEPT, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CtoParser.IDENTIFIER);
		} else {
			return this.getToken(CtoParser.IDENTIFIER, i);
		}
	}
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CtoParser.EXTENDS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_conceptDeclaration; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterConceptDeclaration) {
			listener.enterConceptDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitConceptDeclaration) {
			listener.exitConceptDeclaration(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(CtoParser.ENUM, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CtoParser.IDENTIFIER, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CtoParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CtoParser.RBRACE, 0); }
	public enumConstant(): EnumConstantContext[];
	public enumConstant(i: number): EnumConstantContext;
	public enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext(i, EnumConstantContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_enumDeclaration; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(CtoParser.VAR, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CtoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_enumConstant; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterEnumConstant) {
			listener.enterEnumConstant(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitEnumConstant) {
			listener.exitEnumConstant(this);
		}
	}
}


export class EventDeclarationContext extends ParserRuleContext {
	public EVENT(): TerminalNode { return this.getToken(CtoParser.EVENT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CtoParser.IDENTIFIER, 0); }
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_eventDeclaration; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterEventDeclaration) {
			listener.enterEventDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitEventDeclaration) {
			listener.exitEventDeclaration(this);
		}
	}
}


export class ParticipantDeclarationContext extends ParserRuleContext {
	public PARTICIPANT(): TerminalNode { return this.getToken(CtoParser.PARTICIPANT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CtoParser.IDENTIFIER, 0); }
	public extendsOrIdentified(): ExtendsOrIdentifiedContext {
		return this.getRuleContext(0, ExtendsOrIdentifiedContext);
	}
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_participantDeclaration; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterParticipantDeclaration) {
			listener.enterParticipantDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitParticipantDeclaration) {
			listener.exitParticipantDeclaration(this);
		}
	}
}


export class TransactionDeclarationContext extends ParserRuleContext {
	public TRANSACTION(): TerminalNode { return this.getToken(CtoParser.TRANSACTION, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CtoParser.IDENTIFIER, 0); }
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_transactionDeclaration; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterTransactionDeclaration) {
			listener.enterTransactionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitTransactionDeclaration) {
			listener.exitTransactionDeclaration(this);
		}
	}
}


export class ExtendsOrIdentifiedContext extends ParserRuleContext {
	public identified(): IdentifiedContext | undefined {
		return this.tryGetRuleContext(0, IdentifiedContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CtoParser.EXTENDS, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(CtoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_extendsOrIdentified; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterExtendsOrIdentified) {
			listener.enterExtendsOrIdentified(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitExtendsOrIdentified) {
			listener.exitExtendsOrIdentified(this);
		}
	}
}


export class IdentifiedContext extends ParserRuleContext {
	public IDENTIFIED(): TerminalNode | undefined { return this.tryGetToken(CtoParser.IDENTIFIED, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(CtoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_identified; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterIdentified) {
			listener.enterIdentified(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitIdentified) {
			listener.exitIdentified(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(CtoParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CtoParser.RBRACE, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_classBody; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CtoParser.SEMI, 0); }
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_classBodyDeclaration; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterClassBodyDeclaration) {
			listener.enterClassBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitClassBodyDeclaration) {
			listener.exitClassBodyDeclaration(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public stringField(): StringFieldContext | undefined {
		return this.tryGetRuleContext(0, StringFieldContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public defaultString(): DefaultStringContext | undefined {
		return this.tryGetRuleContext(0, DefaultStringContext);
	}
	public regexDeclaration(): RegexDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RegexDeclarationContext);
	}
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(CtoParser.OPTIONAL, 0); }
	public booleanField(): BooleanFieldContext | undefined {
		return this.tryGetRuleContext(0, BooleanFieldContext);
	}
	public defaultBoolean(): DefaultBooleanContext | undefined {
		return this.tryGetRuleContext(0, DefaultBooleanContext);
	}
	public numericField(): NumericFieldContext | undefined {
		return this.tryGetRuleContext(0, NumericFieldContext);
	}
	public defaultNumber(): DefaultNumberContext | undefined {
		return this.tryGetRuleContext(0, DefaultNumberContext);
	}
	public rangeValidation(): RangeValidationContext | undefined {
		return this.tryGetRuleContext(0, RangeValidationContext);
	}
	public dateField(): DateFieldContext | undefined {
		return this.tryGetRuleContext(0, DateFieldContext);
	}
	public defaultDate(): DefaultDateContext | undefined {
		return this.tryGetRuleContext(0, DefaultDateContext);
	}
	public identifierField(): IdentifierFieldContext | undefined {
		return this.tryGetRuleContext(0, IdentifierFieldContext);
	}
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
}


export class IdentifierFieldContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(CtoParser.VAR, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CtoParser.IDENTIFIER, 0); }
	public square(): SquareContext[];
	public square(i: number): SquareContext;
	public square(i?: number): SquareContext | SquareContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SquareContext);
		} else {
			return this.getRuleContext(i, SquareContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_identifierField; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterIdentifierField) {
			listener.enterIdentifierField(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitIdentifierField) {
			listener.exitIdentifierField(this);
		}
	}
}


export class NumericFieldContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(CtoParser.VAR, 0); }
	public numericPrimitive(): NumericPrimitiveContext {
		return this.getRuleContext(0, NumericPrimitiveContext);
	}
	public square(): SquareContext[];
	public square(i: number): SquareContext;
	public square(i?: number): SquareContext | SquareContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SquareContext);
		} else {
			return this.getRuleContext(i, SquareContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_numericField; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterNumericField) {
			listener.enterNumericField(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitNumericField) {
			listener.exitNumericField(this);
		}
	}
}


export class NumericPrimitiveContext extends ParserRuleContext {
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(CtoParser.DOUBLE, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(CtoParser.INTEGER, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(CtoParser.LONG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_numericPrimitive; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterNumericPrimitive) {
			listener.enterNumericPrimitive(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitNumericPrimitive) {
			listener.exitNumericPrimitive(this);
		}
	}
}


export class BooleanFieldContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(CtoParser.VAR, 0); }
	public BOOLEAN(): TerminalNode { return this.getToken(CtoParser.BOOLEAN, 0); }
	public square(): SquareContext[];
	public square(i: number): SquareContext;
	public square(i?: number): SquareContext | SquareContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SquareContext);
		} else {
			return this.getRuleContext(i, SquareContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_booleanField; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterBooleanField) {
			listener.enterBooleanField(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitBooleanField) {
			listener.exitBooleanField(this);
		}
	}
}


export class DateFieldContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(CtoParser.VAR, 0); }
	public DATE_TIME(): TerminalNode { return this.getToken(CtoParser.DATE_TIME, 0); }
	public square(): SquareContext[];
	public square(i: number): SquareContext;
	public square(i?: number): SquareContext | SquareContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SquareContext);
		} else {
			return this.getRuleContext(i, SquareContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_dateField; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterDateField) {
			listener.enterDateField(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitDateField) {
			listener.exitDateField(this);
		}
	}
}


export class DefaultDateContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(CtoParser.DEFAULT, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(CtoParser.ASSIGN, 0); }
	public DATE_TIME_LITERAL(): TerminalNode { return this.getToken(CtoParser.DATE_TIME_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_defaultDate; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterDefaultDate) {
			listener.enterDefaultDate(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitDefaultDate) {
			listener.exitDefaultDate(this);
		}
	}
}


export class RegexDeclarationContext extends ParserRuleContext {
	public REGEX(): TerminalNode { return this.getToken(CtoParser.REGEX, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(CtoParser.ASSIGN, 0); }
	public REGEX_EXPR(): TerminalNode { return this.getToken(CtoParser.REGEX_EXPR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_regexDeclaration; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterRegexDeclaration) {
			listener.enterRegexDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitRegexDeclaration) {
			listener.exitRegexDeclaration(this);
		}
	}
}


export class StringFieldContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(CtoParser.VAR, 0); }
	public STRING(): TerminalNode { return this.getToken(CtoParser.STRING, 0); }
	public square(): SquareContext[];
	public square(i: number): SquareContext;
	public square(i?: number): SquareContext | SquareContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SquareContext);
		} else {
			return this.getRuleContext(i, SquareContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_stringField; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterStringField) {
			listener.enterStringField(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitStringField) {
			listener.exitStringField(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public REF(): TerminalNode { return this.getToken(CtoParser.REF, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CtoParser.IDENTIFIER, 0); }
	public square(): SquareContext[];
	public square(i: number): SquareContext;
	public square(i?: number): SquareContext | SquareContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SquareContext);
		} else {
			return this.getRuleContext(i, SquareContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_reference; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CtoParser.IDENTIFIER);
		} else {
			return this.getToken(CtoParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CtoParser.DOT);
		} else {
			return this.getToken(CtoParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
}


export class RangeValidationContext extends ParserRuleContext {
	public RANGE(): TerminalNode { return this.getToken(CtoParser.RANGE, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(CtoParser.ASSIGN, 0); }
	public rangeDeclaration(): RangeDeclarationContext {
		return this.getRuleContext(0, RangeDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_rangeValidation; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterRangeValidation) {
			listener.enterRangeValidation(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitRangeValidation) {
			listener.exitRangeValidation(this);
		}
	}
}


export class RangeDeclarationContext extends ParserRuleContext {
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(CtoParser.LBRACK, 0); }
	public numberLiteral(): NumberLiteralContext[];
	public numberLiteral(i: number): NumberLiteralContext;
	public numberLiteral(i?: number): NumberLiteralContext | NumberLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberLiteralContext);
		} else {
			return this.getRuleContext(i, NumberLiteralContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CtoParser.COMMA, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(CtoParser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_rangeDeclaration; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterRangeDeclaration) {
			listener.enterRangeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitRangeDeclaration) {
			listener.exitRangeDeclaration(this);
		}
	}
}


export class DefaultBooleanContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(CtoParser.DEFAULT, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CtoParser.ASSIGN, 0); }
	public BOOL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CtoParser.BOOL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_defaultBoolean; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterDefaultBoolean) {
			listener.enterDefaultBoolean(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitDefaultBoolean) {
			listener.exitDefaultBoolean(this);
		}
	}
}


export class DefaultStringContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(CtoParser.DEFAULT, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CtoParser.ASSIGN, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_defaultString; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterDefaultString) {
			listener.enterDefaultString(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitDefaultString) {
			listener.exitDefaultString(this);
		}
	}
}


export class DefaultNumberContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(CtoParser.DEFAULT, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CtoParser.ASSIGN, 0); }
	public numberLiteral(): NumberLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumberLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_defaultNumber; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterDefaultNumber) {
			listener.enterDefaultNumber(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitDefaultNumber) {
			listener.exitDefaultNumber(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(CtoParser.IDENTIFIER, 0); }
	public ASSET(): TerminalNode | undefined { return this.tryGetToken(CtoParser.ASSET, 0); }
	public PARTICIPANT(): TerminalNode | undefined { return this.tryGetToken(CtoParser.PARTICIPANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_identifier; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public numberLiteral(): NumberLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumberLiteralContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public BOOL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CtoParser.BOOL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_literal; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class NumberLiteralContext extends ParserRuleContext {
	public integerLiteral(): IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, IntegerLiteralContext);
	}
	public floatLiteral(): FloatLiteralContext | undefined {
		return this.tryGetRuleContext(0, FloatLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_numberLiteral; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterNumberLiteral) {
			listener.enterNumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitNumberLiteral) {
			listener.exitNumberLiteral(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public CHAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CtoParser.CHAR_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CtoParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	public DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CtoParser.DECIMAL_LITERAL, 0); }
	public OCT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CtoParser.OCT_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_integerLiteral; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
}


export class FloatLiteralContext extends ParserRuleContext {
	public FLOAT_LITERAL(): TerminalNode { return this.getToken(CtoParser.FLOAT_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_floatLiteral; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterFloatLiteral) {
			listener.enterFloatLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitFloatLiteral) {
			listener.exitFloatLiteral(this);
		}
	}
}


export class DecoratorContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(CtoParser.AT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CtoParser.LPAREN, 0); }
	public elementValuePair(): ElementValuePairContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CtoParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_decorator; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterDecorator) {
			listener.enterDecorator(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitDecorator) {
			listener.exitDecorator(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CtoParser.COMMA);
		} else {
			return this.getToken(CtoParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_elementValuePair; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterElementValuePair) {
			listener.enterElementValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitElementValuePair) {
			listener.exitElementValuePair(this);
		}
	}
}


export class SquareContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(CtoParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CtoParser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CtoParser.RULE_square; }
	// @Override
	public enterRule(listener: CtoParserListener): void {
		if (listener.enterSquare) {
			listener.enterSquare(this);
		}
	}
	// @Override
	public exitRule(listener: CtoParserListener): void {
		if (listener.exitSquare) {
			listener.exitSquare(this);
		}
	}
}


