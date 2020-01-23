// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asn/asn/ASN.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { ASNListener } from "./ASNListener";

export class ASNParser extends Parser {
	public static readonly A_ROND = 1;
	public static readonly STAR = 2;
	public static readonly ASSIGN_OP = 3;
	public static readonly BOOLEAN_LITERAL = 4;
	public static readonly TRUE_LITERAL = 5;
	public static readonly FALSE_LITERAL = 6;
	public static readonly DOT = 7;
	public static readonly DOUBLE_DOT = 8;
	public static readonly ELLIPSIS = 9;
	public static readonly APOSTROPHE = 10;
	public static readonly AMPERSAND = 11;
	public static readonly LESS_THAN = 12;
	public static readonly GREATER_THAN = 13;
	public static readonly LESS_THAN_SLASH = 14;
	public static readonly SLASH_GREATER_THAN = 15;
	public static readonly TRUE_SMALL_LITERAL = 16;
	public static readonly FALSE_SMALL_LITERAL = 17;
	public static readonly INTEGER_LITERAL = 18;
	public static readonly L_BRACE = 19;
	public static readonly R_BRACE = 20;
	public static readonly COMMA = 21;
	public static readonly L_PARAN = 22;
	public static readonly R_PARAN = 23;
	public static readonly MINUS = 24;
	public static readonly ENUMERATED_LITERAL = 25;
	public static readonly REAL_LITERAL = 26;
	public static readonly PLUS_INFINITY_LITERAL = 27;
	public static readonly MINUS_INFINITY_LITERAL = 28;
	public static readonly BIT_LITERAL = 29;
	public static readonly STRING_LITERAL = 30;
	public static readonly CONTAINING_LITERAL = 31;
	public static readonly OCTET_LITERAL = 32;
	public static readonly NULL_LITERAL = 33;
	public static readonly SEQUENCE_LITERAL = 34;
	public static readonly OPTIONAL_LITERAL = 35;
	public static readonly DEFAULT_LITERAL = 36;
	public static readonly COMPONENTS_LITERAL = 37;
	public static readonly OF_LITERAL = 38;
	public static readonly SET_LITERAL = 39;
	public static readonly EXCLAM = 40;
	public static readonly ALL_LITERAL = 41;
	public static readonly EXCEPT_LITERAL = 42;
	public static readonly POWER = 43;
	public static readonly PIPE = 44;
	public static readonly UNION_LITERAL = 45;
	public static readonly INTERSECTION_LITERAL = 46;
	public static readonly INCLUDES_LITERAL = 47;
	public static readonly MIN_LITERAL = 48;
	public static readonly MAX_LITERAL = 49;
	public static readonly SIZE_LITERAL = 50;
	public static readonly FROM_LITERAL = 51;
	public static readonly WITH_LITERAL = 52;
	public static readonly COMPONENT_LITERAL = 53;
	public static readonly PRESENT_LITERAL = 54;
	public static readonly ABSENT_LITERAL = 55;
	public static readonly PATTERN_LITERAL = 56;
	public static readonly TYPE_IDENTIFIER_LITERAL = 57;
	public static readonly ABSTRACT_SYNTAX_LITERAL = 58;
	public static readonly CLASS_LITERAL = 59;
	public static readonly UNIQUE_LITERAL = 60;
	public static readonly SYNTAX_LITERAL = 61;
	public static readonly L_BRACKET = 62;
	public static readonly R_BRACKET = 63;
	public static readonly INSTANCE_LITERAL = 64;
	public static readonly SEMI_COLON = 65;
	public static readonly IMPORTS_LITERAL = 66;
	public static readonly EXPORTS_LITERAL = 67;
	public static readonly EXTENSIBILITY_LITERAL = 68;
	public static readonly IMPLIED_LITERAL = 69;
	public static readonly EXPLICIT_LITERAL = 70;
	public static readonly TAGS_LITERAL = 71;
	public static readonly IMPLICIT_LITERAL = 72;
	public static readonly AUTOMATIC_LITERAL = 73;
	public static readonly DEFINITIONS_LITERAL = 74;
	public static readonly BEGIN_LITERAL = 75;
	public static readonly END_LITERAL = 76;
	public static readonly DOUBLE_L_BRACKET = 77;
	public static readonly DOUBLE_R_BRACKET = 78;
	public static readonly COLON = 79;
	public static readonly CHOICE_LITERAL = 80;
	public static readonly UNIVERSAL_LITERAL = 81;
	public static readonly APPLICATION_LITERAL = 82;
	public static readonly PRIVATE_LITERAL = 83;
	public static readonly EMBEDDED_LITERAL = 84;
	public static readonly PDV_LITERAL = 85;
	public static readonly EXTERNAL_LITERAL = 86;
	public static readonly OBJECT_LITERAL = 87;
	public static readonly IDENTIFIER_LITERAL = 88;
	public static readonly RELATIVE_OID_LITERAL = 89;
	public static readonly CHARACTER_LITERAL = 90;
	public static readonly CONSTRAINED_LITERAL = 91;
	public static readonly BY_LITERAL = 92;
	public static readonly A_ROND_DOT = 93;
	public static readonly ENCODED_LITERAL = 94;
	public static readonly COMMENT = 95;
	public static readonly UNRESTRICTEDCHARACTERSTRINGTYPE = 96;
	public static readonly EXTENSTIONENDMARKER = 97;
	public static readonly NUMBER = 98;
	public static readonly WS = 99;
	public static readonly LINE_COMMENT = 100;
	public static readonly BSTRING = 101;
	public static readonly HSTRING = 102;
	public static readonly CSTRING = 103;
	public static readonly IDENTIFIER = 104;
	public static readonly RULE_modules = 0;
	public static readonly RULE_moduleDefinition = 1;
	public static readonly RULE_tagDefault = 2;
	public static readonly RULE_extensionDefault = 3;
	public static readonly RULE_moduleBody = 4;
	public static readonly RULE_exports = 5;
	public static readonly RULE_symbolsExported = 6;
	public static readonly RULE_imports = 7;
	public static readonly RULE_symbolsImported = 8;
	public static readonly RULE_symbolsFromModuleList = 9;
	public static readonly RULE_symbolsFromModule = 10;
	public static readonly RULE_globalModuleReference = 11;
	public static readonly RULE_assignedIdentifier = 12;
	public static readonly RULE_symbolList = 13;
	public static readonly RULE_symbol = 14;
	public static readonly RULE_assignmentList = 15;
	public static readonly RULE_assignment = 16;
	public static readonly RULE_sequenceType = 17;
	public static readonly RULE_extensionAndException = 18;
	public static readonly RULE_optionalExtensionMarker = 19;
	public static readonly RULE_componentTypeLists = 20;
	public static readonly RULE_rootComponentTypeList = 21;
	public static readonly RULE_componentTypeList = 22;
	public static readonly RULE_componentType = 23;
	public static readonly RULE_extensionAdditions = 24;
	public static readonly RULE_extensionAdditionList = 25;
	public static readonly RULE_extensionAddition = 26;
	public static readonly RULE_extensionAdditionGroup = 27;
	public static readonly RULE_versionNumber = 28;
	public static readonly RULE_sequenceOfType = 29;
	public static readonly RULE_sizeConstraint = 30;
	public static readonly RULE_parameterizedAssignment = 31;
	public static readonly RULE_parameterList = 32;
	public static readonly RULE_parameter = 33;
	public static readonly RULE_paramGovernor = 34;
	public static readonly RULE_governor = 35;
	public static readonly RULE_objectClassAssignment = 36;
	public static readonly RULE_objectClass = 37;
	public static readonly RULE_definedObjectClass = 38;
	public static readonly RULE_usefulObjectClassReference = 39;
	public static readonly RULE_externalObjectClassReference = 40;
	public static readonly RULE_objectClassDefn = 41;
	public static readonly RULE_withSyntaxSpec = 42;
	public static readonly RULE_syntaxList = 43;
	public static readonly RULE_tokenOrGroupSpec = 44;
	public static readonly RULE_optionalGroup = 45;
	public static readonly RULE_requiredToken = 46;
	public static readonly RULE_literal = 47;
	public static readonly RULE_primitiveFieldName = 48;
	public static readonly RULE_fieldSpec = 49;
	public static readonly RULE_typeFieldSpec = 50;
	public static readonly RULE_typeOptionalitySpec = 51;
	public static readonly RULE_fixedTypeValueFieldSpec = 52;
	public static readonly RULE_valueOptionalitySpec = 53;
	public static readonly RULE_variableTypeValueFieldSpec = 54;
	public static readonly RULE_fixedTypeValueSetFieldSpec = 55;
	public static readonly RULE_valueSetOptionalitySpec = 56;
	public static readonly RULE_object = 57;
	public static readonly RULE_parameterizedObject = 58;
	public static readonly RULE_definedObject = 59;
	public static readonly RULE_objectSet = 60;
	public static readonly RULE_objectSetSpec = 61;
	public static readonly RULE_fieldName = 62;
	public static readonly RULE_valueSet = 63;
	public static readonly RULE_elementSetSpecs = 64;
	public static readonly RULE_rootElementSetSpec = 65;
	public static readonly RULE_additionalElementSetSpec = 66;
	public static readonly RULE_elementSetSpec = 67;
	public static readonly RULE_unions = 68;
	public static readonly RULE_exclusions = 69;
	public static readonly RULE_intersections = 70;
	public static readonly RULE_unionMark = 71;
	public static readonly RULE_intersectionMark = 72;
	public static readonly RULE_elements = 73;
	public static readonly RULE_objectSetElements = 74;
	public static readonly RULE_intersectionElements = 75;
	public static readonly RULE_subtypeElements = 76;
	public static readonly RULE_variableTypeValueSetFieldSpec = 77;
	public static readonly RULE_objectFieldSpec = 78;
	public static readonly RULE_objectOptionalitySpec = 79;
	public static readonly RULE_objectSetFieldSpec = 80;
	public static readonly RULE_objectSetOptionalitySpec = 81;
	public static readonly RULE_typeAssignment = 82;
	public static readonly RULE_valueAssignment = 83;
	public static readonly RULE_asnType = 84;
	public static readonly RULE_builtinType = 85;
	public static readonly RULE_objectClassFieldType = 86;
	public static readonly RULE_setType = 87;
	public static readonly RULE_setOfType = 88;
	public static readonly RULE_referencedType = 89;
	public static readonly RULE_definedType = 90;
	public static readonly RULE_constraint = 91;
	public static readonly RULE_constraintSpec = 92;
	public static readonly RULE_userDefinedConstraint = 93;
	public static readonly RULE_generalConstraint = 94;
	public static readonly RULE_userDefinedConstraintParameter = 95;
	public static readonly RULE_tableConstraint = 96;
	public static readonly RULE_simpleTableConstraint = 97;
	public static readonly RULE_contentsConstraint = 98;
	public static readonly RULE_componentPresenceLists = 99;
	public static readonly RULE_componentPresenceList = 100;
	public static readonly RULE_componentPresence = 101;
	public static readonly RULE_subtypeConstraint = 102;
	public static readonly RULE_value = 103;
	public static readonly RULE_builtinValue = 104;
	public static readonly RULE_objectIdentifierValue = 105;
	public static readonly RULE_objIdComponentsList = 106;
	public static readonly RULE_objIdComponents = 107;
	public static readonly RULE_integerValue = 108;
	public static readonly RULE_choiceValue = 109;
	public static readonly RULE_enumeratedValue = 110;
	public static readonly RULE_signedNumber = 111;
	public static readonly RULE_choiceType = 112;
	public static readonly RULE_alternativeTypeLists = 113;
	public static readonly RULE_extensionAdditionAlternatives = 114;
	public static readonly RULE_extensionAdditionAlternativesList = 115;
	public static readonly RULE_extensionAdditionAlternative = 116;
	public static readonly RULE_extensionAdditionAlternativesGroup = 117;
	public static readonly RULE_rootAlternativeTypeList = 118;
	public static readonly RULE_alternativeTypeList = 119;
	public static readonly RULE_namedType = 120;
	public static readonly RULE_enumeratedType = 121;
	public static readonly RULE_enumerations = 122;
	public static readonly RULE_rootEnumeration = 123;
	public static readonly RULE_enumeration = 124;
	public static readonly RULE_enumerationItem = 125;
	public static readonly RULE_namedNumber = 126;
	public static readonly RULE_definedValue = 127;
	public static readonly RULE_parameterizedValue = 128;
	public static readonly RULE_simpleDefinedValue = 129;
	public static readonly RULE_actualParameterList = 130;
	public static readonly RULE_actualParameter = 131;
	public static readonly RULE_exceptionSpec = 132;
	public static readonly RULE_exceptionIdentification = 133;
	public static readonly RULE_additionalEnumeration = 134;
	public static readonly RULE_integerType = 135;
	public static readonly RULE_namedNumberList = 136;
	public static readonly RULE_objectidentifiertype = 137;
	public static readonly RULE_componentRelationConstraint = 138;
	public static readonly RULE_atNotation = 139;
	public static readonly RULE_level = 140;
	public static readonly RULE_componentIdList = 141;
	public static readonly RULE_octetStringType = 142;
	public static readonly RULE_bitStringType = 143;
	public static readonly RULE_namedBitList = 144;
	public static readonly RULE_namedBit = 145;
	public static readonly RULE_booleanValue = 146;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"modules", "moduleDefinition", "tagDefault", "extensionDefault", "moduleBody", 
		"exports", "symbolsExported", "imports", "symbolsImported", "symbolsFromModuleList", 
		"symbolsFromModule", "globalModuleReference", "assignedIdentifier", "symbolList", 
		"symbol", "assignmentList", "assignment", "sequenceType", "extensionAndException", 
		"optionalExtensionMarker", "componentTypeLists", "rootComponentTypeList", 
		"componentTypeList", "componentType", "extensionAdditions", "extensionAdditionList", 
		"extensionAddition", "extensionAdditionGroup", "versionNumber", "sequenceOfType", 
		"sizeConstraint", "parameterizedAssignment", "parameterList", "parameter", 
		"paramGovernor", "governor", "objectClassAssignment", "objectClass", "definedObjectClass", 
		"usefulObjectClassReference", "externalObjectClassReference", "objectClassDefn", 
		"withSyntaxSpec", "syntaxList", "tokenOrGroupSpec", "optionalGroup", "requiredToken", 
		"literal", "primitiveFieldName", "fieldSpec", "typeFieldSpec", "typeOptionalitySpec", 
		"fixedTypeValueFieldSpec", "valueOptionalitySpec", "variableTypeValueFieldSpec", 
		"fixedTypeValueSetFieldSpec", "valueSetOptionalitySpec", "object", "parameterizedObject", 
		"definedObject", "objectSet", "objectSetSpec", "fieldName", "valueSet", 
		"elementSetSpecs", "rootElementSetSpec", "additionalElementSetSpec", "elementSetSpec", 
		"unions", "exclusions", "intersections", "unionMark", "intersectionMark", 
		"elements", "objectSetElements", "intersectionElements", "subtypeElements", 
		"variableTypeValueSetFieldSpec", "objectFieldSpec", "objectOptionalitySpec", 
		"objectSetFieldSpec", "objectSetOptionalitySpec", "typeAssignment", "valueAssignment", 
		"asnType", "builtinType", "objectClassFieldType", "setType", "setOfType", 
		"referencedType", "definedType", "constraint", "constraintSpec", "userDefinedConstraint", 
		"generalConstraint", "userDefinedConstraintParameter", "tableConstraint", 
		"simpleTableConstraint", "contentsConstraint", "componentPresenceLists", 
		"componentPresenceList", "componentPresence", "subtypeConstraint", "value", 
		"builtinValue", "objectIdentifierValue", "objIdComponentsList", "objIdComponents", 
		"integerValue", "choiceValue", "enumeratedValue", "signedNumber", "choiceType", 
		"alternativeTypeLists", "extensionAdditionAlternatives", "extensionAdditionAlternativesList", 
		"extensionAdditionAlternative", "extensionAdditionAlternativesGroup", 
		"rootAlternativeTypeList", "alternativeTypeList", "namedType", "enumeratedType", 
		"enumerations", "rootEnumeration", "enumeration", "enumerationItem", "namedNumber", 
		"definedValue", "parameterizedValue", "simpleDefinedValue", "actualParameterList", 
		"actualParameter", "exceptionSpec", "exceptionIdentification", "additionalEnumeration", 
		"integerType", "namedNumberList", "objectidentifiertype", "componentRelationConstraint", 
		"atNotation", "level", "componentIdList", "octetStringType", "bitStringType", 
		"namedBitList", "namedBit", "booleanValue",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'@'", "'*'", "'::='", "'BOOLEAN'", "'TRUE'", "'FALSE'", "'.'", 
		"'..'", "'...'", "'''", "'&'", "'<'", "'>'", "'</'", "'/>'", "'true'", 
		"'false'", "'INTEGER'", "'{'", "'}'", "','", "'('", "')'", "'-'", "'ENUMERATED'", 
		"'REAL'", "'PLUS-INFINITY'", "'MINUS-INFINITY'", "'BIT'", "'STRING'", 
		"'CONTAINING'", "'OCTET'", "'NULL'", "'SEQUENCE'", "'OPTIONAL'", "'DEFAULT'", 
		"'COMPONENTS'", "'OF'", "'SET'", "'!'", "'ALL'", "'EXCEPT'", "'^'", "'|'", 
		"'UNION'", "'INTERSECTION'", "'INCLUDES'", "'MIN'", "'MAX'", "'SIZE'", 
		"'FROM'", "'WITH'", "'COMPONENT'", "'PRESENT'", "'ABSENT'", "'PATTERN'", 
		"'TYPE-Identifier'", "'ABSTRACT-SYNTAX'", "'CLASS'", "'UNIQUE'", "'SYNTAX'", 
		"'['", "']'", "'INSTANCE'", "';'", "'IMPORTS'", "'EXPORTS'", "'EXTENSIBILITY'", 
		"'IMPLIED'", "'EXPLICIT'", "'TAGS'", "'IMPLICIT'", "'AUTOMATIC'", "'DEFINITIONS'", 
		"'BEGIN'", "'END'", "'[['", "']]'", "':'", "'CHOICE'", "'UNIVERSAL'", 
		"'APPLICATION'", "'PRIVATE'", "'EMBEDDED'", "'PDV'", "'EXTERNAL'", "'OBJECT'", 
		"'IDENTIFIER'", "'RELATIVE-OID'", "'CHARACTER'", "'CONSTRAINED'", "'BY'", 
		"'@.'", "'ENCODED'", "'--'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "A_ROND", "STAR", "ASSIGN_OP", "BOOLEAN_LITERAL", "TRUE_LITERAL", 
		"FALSE_LITERAL", "DOT", "DOUBLE_DOT", "ELLIPSIS", "APOSTROPHE", "AMPERSAND", 
		"LESS_THAN", "GREATER_THAN", "LESS_THAN_SLASH", "SLASH_GREATER_THAN", 
		"TRUE_SMALL_LITERAL", "FALSE_SMALL_LITERAL", "INTEGER_LITERAL", "L_BRACE", 
		"R_BRACE", "COMMA", "L_PARAN", "R_PARAN", "MINUS", "ENUMERATED_LITERAL", 
		"REAL_LITERAL", "PLUS_INFINITY_LITERAL", "MINUS_INFINITY_LITERAL", "BIT_LITERAL", 
		"STRING_LITERAL", "CONTAINING_LITERAL", "OCTET_LITERAL", "NULL_LITERAL", 
		"SEQUENCE_LITERAL", "OPTIONAL_LITERAL", "DEFAULT_LITERAL", "COMPONENTS_LITERAL", 
		"OF_LITERAL", "SET_LITERAL", "EXCLAM", "ALL_LITERAL", "EXCEPT_LITERAL", 
		"POWER", "PIPE", "UNION_LITERAL", "INTERSECTION_LITERAL", "INCLUDES_LITERAL", 
		"MIN_LITERAL", "MAX_LITERAL", "SIZE_LITERAL", "FROM_LITERAL", "WITH_LITERAL", 
		"COMPONENT_LITERAL", "PRESENT_LITERAL", "ABSENT_LITERAL", "PATTERN_LITERAL", 
		"TYPE_IDENTIFIER_LITERAL", "ABSTRACT_SYNTAX_LITERAL", "CLASS_LITERAL", 
		"UNIQUE_LITERAL", "SYNTAX_LITERAL", "L_BRACKET", "R_BRACKET", "INSTANCE_LITERAL", 
		"SEMI_COLON", "IMPORTS_LITERAL", "EXPORTS_LITERAL", "EXTENSIBILITY_LITERAL", 
		"IMPLIED_LITERAL", "EXPLICIT_LITERAL", "TAGS_LITERAL", "IMPLICIT_LITERAL", 
		"AUTOMATIC_LITERAL", "DEFINITIONS_LITERAL", "BEGIN_LITERAL", "END_LITERAL", 
		"DOUBLE_L_BRACKET", "DOUBLE_R_BRACKET", "COLON", "CHOICE_LITERAL", "UNIVERSAL_LITERAL", 
		"APPLICATION_LITERAL", "PRIVATE_LITERAL", "EMBEDDED_LITERAL", "PDV_LITERAL", 
		"EXTERNAL_LITERAL", "OBJECT_LITERAL", "IDENTIFIER_LITERAL", "RELATIVE_OID_LITERAL", 
		"CHARACTER_LITERAL", "CONSTRAINED_LITERAL", "BY_LITERAL", "A_ROND_DOT", 
		"ENCODED_LITERAL", "COMMENT", "UNRESTRICTEDCHARACTERSTRINGTYPE", "EXTENSTIONENDMARKER", 
		"NUMBER", "WS", "LINE_COMMENT", "BSTRING", "HSTRING", "CSTRING", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ASNParser._LITERAL_NAMES, ASNParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ASNParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ASN.g4"; }

	// @Override
	public get ruleNames(): string[] { return ASNParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ASNParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ASNParser._ATN, this);
	}
	// @RuleVersion(0)
	public modules(): ModulesContext {
		let _localctx: ModulesContext = new ModulesContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ASNParser.RULE_modules);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 294;
				this.moduleDefinition();
				}
				}
				this.state = 297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ASNParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleDefinition(): ModuleDefinitionContext {
		let _localctx: ModuleDefinitionContext = new ModuleDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ASNParser.RULE_moduleDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(ASNParser.IDENTIFIER);
			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.L_BRACE) {
				{
				this.state = 300;
				this.match(ASNParser.L_BRACE);
				this.state = 307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ASNParser.IDENTIFIER) {
					{
					{
					this.state = 301;
					this.match(ASNParser.IDENTIFIER);
					this.state = 302;
					this.match(ASNParser.L_PARAN);
					this.state = 303;
					this.match(ASNParser.NUMBER);
					this.state = 304;
					this.match(ASNParser.R_PARAN);
					}
					}
					this.state = 309;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 310;
				this.match(ASNParser.R_BRACE);
				}
			}

			this.state = 313;
			this.match(ASNParser.DEFINITIONS_LITERAL);
			this.state = 314;
			this.tagDefault();
			this.state = 315;
			this.extensionDefault();
			this.state = 316;
			this.match(ASNParser.ASSIGN_OP);
			this.state = 317;
			this.match(ASNParser.BEGIN_LITERAL);
			this.state = 318;
			this.moduleBody();
			this.state = 319;
			this.match(ASNParser.END_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagDefault(): TagDefaultContext {
		let _localctx: TagDefaultContext = new TagDefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ASNParser.RULE_tagDefault);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (ASNParser.EXPLICIT_LITERAL - 70)) | (1 << (ASNParser.IMPLICIT_LITERAL - 70)) | (1 << (ASNParser.AUTOMATIC_LITERAL - 70)))) !== 0)) {
				{
				this.state = 321;
				_la = this._input.LA(1);
				if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (ASNParser.EXPLICIT_LITERAL - 70)) | (1 << (ASNParser.IMPLICIT_LITERAL - 70)) | (1 << (ASNParser.AUTOMATIC_LITERAL - 70)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 322;
				this.match(ASNParser.TAGS_LITERAL);
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
	public extensionDefault(): ExtensionDefaultContext {
		let _localctx: ExtensionDefaultContext = new ExtensionDefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ASNParser.RULE_extensionDefault);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.EXTENSIBILITY_LITERAL) {
				{
				this.state = 325;
				this.match(ASNParser.EXTENSIBILITY_LITERAL);
				this.state = 326;
				this.match(ASNParser.IMPLIED_LITERAL);
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
	public moduleBody(): ModuleBodyContext {
		let _localctx: ModuleBodyContext = new ModuleBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ASNParser.RULE_moduleBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.IMPORTS_LITERAL || _la === ASNParser.EXPORTS_LITERAL || _la === ASNParser.IDENTIFIER) {
				{
				this.state = 329;
				this.exports();
				this.state = 330;
				this.imports();
				this.state = 331;
				this.assignmentList();
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
	public exports(): ExportsContext {
		let _localctx: ExportsContext = new ExportsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ASNParser.RULE_exports);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 335;
				this.match(ASNParser.EXPORTS_LITERAL);
				this.state = 336;
				this.symbolsExported();
				this.state = 337;
				this.match(ASNParser.SEMI_COLON);
				}
				break;

			case 2:
				{
				this.state = 339;
				this.match(ASNParser.EXPORTS_LITERAL);
				this.state = 340;
				this.match(ASNParser.ALL_LITERAL);
				this.state = 341;
				this.match(ASNParser.SEMI_COLON);
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
	public symbolsExported(): SymbolsExportedContext {
		let _localctx: SymbolsExportedContext = new SymbolsExportedContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ASNParser.RULE_symbolsExported);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.IDENTIFIER) {
				{
				this.state = 344;
				this.symbolList();
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
	public imports(): ImportsContext {
		let _localctx: ImportsContext = new ImportsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ASNParser.RULE_imports);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.IMPORTS_LITERAL) {
				{
				this.state = 347;
				this.match(ASNParser.IMPORTS_LITERAL);
				this.state = 348;
				this.symbolsImported();
				this.state = 349;
				this.match(ASNParser.SEMI_COLON);
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
	public symbolsImported(): SymbolsImportedContext {
		let _localctx: SymbolsImportedContext = new SymbolsImportedContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ASNParser.RULE_symbolsImported);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.IDENTIFIER) {
				{
				this.state = 353;
				this.symbolsFromModuleList();
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
	public symbolsFromModuleList(): SymbolsFromModuleListContext {
		let _localctx: SymbolsFromModuleListContext = new SymbolsFromModuleListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ASNParser.RULE_symbolsFromModuleList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 356;
			this.symbolsFromModule();
			}
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASNParser.IDENTIFIER) {
				{
				{
				this.state = 357;
				this.symbolsFromModule();
				}
				}
				this.state = 362;
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
	public symbolsFromModule(): SymbolsFromModuleContext {
		let _localctx: SymbolsFromModuleContext = new SymbolsFromModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ASNParser.RULE_symbolsFromModule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
			this.symbolList();
			this.state = 364;
			this.match(ASNParser.FROM_LITERAL);
			this.state = 365;
			this.globalModuleReference();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public globalModuleReference(): GlobalModuleReferenceContext {
		let _localctx: GlobalModuleReferenceContext = new GlobalModuleReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ASNParser.RULE_globalModuleReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			this.match(ASNParser.IDENTIFIER);
			this.state = 368;
			this.assignedIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignedIdentifier(): AssignedIdentifierContext {
		let _localctx: AssignedIdentifierContext = new AssignedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ASNParser.RULE_assignedIdentifier);
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
	public symbolList(): SymbolListContext {
		let _localctx: SymbolListContext = new SymbolListContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ASNParser.RULE_symbolList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 372;
			this.symbol();
			}
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASNParser.COMMA) {
				{
				{
				this.state = 373;
				this.match(ASNParser.COMMA);
				this.state = 374;
				this.symbol();
				}
				}
				this.state = 379;
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
	public symbol(): SymbolContext {
		let _localctx: SymbolContext = new SymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ASNParser.RULE_symbol);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.match(ASNParser.IDENTIFIER);
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.L_BRACE) {
				{
				{
				this.state = 381;
				this.match(ASNParser.L_BRACE);
				this.state = 382;
				this.match(ASNParser.R_BRACE);
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
	public assignmentList(): AssignmentListContext {
		let _localctx: AssignmentListContext = new AssignmentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ASNParser.RULE_assignmentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 385;
			this.assignment();
			}
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASNParser.IDENTIFIER) {
				{
				{
				this.state = 386;
				this.assignment();
				}
				}
				this.state = 391;
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ASNParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 392;
			this.match(ASNParser.IDENTIFIER);
			this.state = 397;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 393;
				this.valueAssignment();
				}
				break;

			case 2:
				{
				this.state = 394;
				this.typeAssignment();
				}
				break;

			case 3:
				{
				this.state = 395;
				this.parameterizedAssignment();
				}
				break;

			case 4:
				{
				this.state = 396;
				this.objectClassAssignment();
				}
				break;
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
	public sequenceType(): SequenceTypeContext {
		let _localctx: SequenceTypeContext = new SequenceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ASNParser.RULE_sequenceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this.match(ASNParser.SEQUENCE_LITERAL);
			this.state = 400;
			this.match(ASNParser.L_BRACE);
			this.state = 405;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 401;
				this.extensionAndException();
				this.state = 402;
				this.optionalExtensionMarker();
				}
				break;

			case 2:
				{
				this.state = 404;
				this.componentTypeLists();
				}
				break;
			}
			this.state = 407;
			this.match(ASNParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionAndException(): ExtensionAndExceptionContext {
		let _localctx: ExtensionAndExceptionContext = new ExtensionAndExceptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ASNParser.RULE_extensionAndException);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.match(ASNParser.ELLIPSIS);
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.EXCLAM) {
				{
				this.state = 410;
				this.exceptionSpec();
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
	public optionalExtensionMarker(): OptionalExtensionMarkerContext {
		let _localctx: OptionalExtensionMarkerContext = new OptionalExtensionMarkerContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ASNParser.RULE_optionalExtensionMarker);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.COMMA) {
				{
				this.state = 413;
				this.match(ASNParser.COMMA);
				this.state = 414;
				this.match(ASNParser.ELLIPSIS);
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
	public componentTypeLists(): ComponentTypeListsContext {
		let _localctx: ComponentTypeListsContext = new ComponentTypeListsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ASNParser.RULE_componentTypeLists);
		let _la: number;
		try {
			this.state = 437;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.COMPONENTS_LITERAL:
			case ASNParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 417;
				this.rootComponentTypeList();
				this.state = 427;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASNParser.COMMA) {
					{
					this.state = 418;
					this.match(ASNParser.COMMA);
					this.state = 419;
					this.extensionAndException();
					this.state = 420;
					this.extensionAdditions();
					this.state = 425;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ASNParser.R_BRACE:
					case ASNParser.COMMA:
						{
						this.state = 421;
						this.optionalExtensionMarker();
						}
						break;
					case ASNParser.EXTENSTIONENDMARKER:
						{
						{
						this.state = 422;
						this.match(ASNParser.EXTENSTIONENDMARKER);
						this.state = 423;
						this.match(ASNParser.COMMA);
						this.state = 424;
						this.rootComponentTypeList();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}

				}
				break;
			case ASNParser.ELLIPSIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 429;
				this.extensionAndException();
				this.state = 430;
				this.extensionAdditions();
				this.state = 435;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASNParser.R_BRACE:
				case ASNParser.COMMA:
					{
					this.state = 431;
					this.optionalExtensionMarker();
					}
					break;
				case ASNParser.EXTENSTIONENDMARKER:
					{
					{
					this.state = 432;
					this.match(ASNParser.EXTENSTIONENDMARKER);
					this.state = 433;
					this.match(ASNParser.COMMA);
					this.state = 434;
					this.rootComponentTypeList();
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
	public rootComponentTypeList(): RootComponentTypeListContext {
		let _localctx: RootComponentTypeListContext = new RootComponentTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ASNParser.RULE_rootComponentTypeList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.componentTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentTypeList(): ComponentTypeListContext {
		let _localctx: ComponentTypeListContext = new ComponentTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ASNParser.RULE_componentTypeList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 441;
			this.componentType();
			}
			this.state = 446;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 442;
					this.match(ASNParser.COMMA);
					this.state = 443;
					this.componentType();
					}
					}
				}
				this.state = 448;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
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
	public componentType(): ComponentTypeContext {
		let _localctx: ComponentTypeContext = new ComponentTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ASNParser.RULE_componentType);
		try {
			this.state = 458;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 449;
				this.namedType();
				this.state = 453;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASNParser.OPTIONAL_LITERAL:
					{
					this.state = 450;
					this.match(ASNParser.OPTIONAL_LITERAL);
					}
					break;
				case ASNParser.DEFAULT_LITERAL:
					{
					this.state = 451;
					this.match(ASNParser.DEFAULT_LITERAL);
					this.state = 452;
					this.value();
					}
					break;
				case ASNParser.R_BRACE:
				case ASNParser.COMMA:
				case ASNParser.DOUBLE_R_BRACKET:
				case ASNParser.EXTENSTIONENDMARKER:
					break;
				default:
					break;
				}
				}
				break;
			case ASNParser.COMPONENTS_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 455;
				this.match(ASNParser.COMPONENTS_LITERAL);
				this.state = 456;
				this.match(ASNParser.OF_LITERAL);
				this.state = 457;
				this.asnType();
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
	public extensionAdditions(): ExtensionAdditionsContext {
		let _localctx: ExtensionAdditionsContext = new ExtensionAdditionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ASNParser.RULE_extensionAdditions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 460;
				this.match(ASNParser.COMMA);
				this.state = 461;
				this.extensionAdditionList();
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
	public extensionAdditionList(): ExtensionAdditionListContext {
		let _localctx: ExtensionAdditionListContext = new ExtensionAdditionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ASNParser.RULE_extensionAdditionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 464;
			this.extensionAddition();
			}
			this.state = 469;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 465;
					this.match(ASNParser.COMMA);
					this.state = 466;
					this.extensionAddition();
					}
					}
				}
				this.state = 471;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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
	public extensionAddition(): ExtensionAdditionContext {
		let _localctx: ExtensionAdditionContext = new ExtensionAdditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ASNParser.RULE_extensionAddition);
		try {
			this.state = 474;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.COMPONENTS_LITERAL:
			case ASNParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 472;
				this.componentType();
				}
				break;
			case ASNParser.DOUBLE_L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 473;
				this.extensionAdditionGroup();
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
	public extensionAdditionGroup(): ExtensionAdditionGroupContext {
		let _localctx: ExtensionAdditionGroupContext = new ExtensionAdditionGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ASNParser.RULE_extensionAdditionGroup);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this.match(ASNParser.DOUBLE_L_BRACKET);
			this.state = 477;
			this.versionNumber();
			this.state = 478;
			this.componentTypeList();
			this.state = 479;
			this.match(ASNParser.DOUBLE_R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionNumber(): VersionNumberContext {
		let _localctx: VersionNumberContext = new VersionNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ASNParser.RULE_versionNumber);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.NUMBER) {
				{
				this.state = 481;
				this.match(ASNParser.NUMBER);
				this.state = 482;
				this.match(ASNParser.COLON);
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
	public sequenceOfType(): SequenceOfTypeContext {
		let _localctx: SequenceOfTypeContext = new SequenceOfTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ASNParser.RULE_sequenceOfType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this.match(ASNParser.SEQUENCE_LITERAL);
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.L_PARAN) {
				{
				this.state = 486;
				this.match(ASNParser.L_PARAN);
				this.state = 489;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASNParser.L_PARAN:
					{
					this.state = 487;
					this.constraint();
					}
					break;
				case ASNParser.SIZE_LITERAL:
					{
					this.state = 488;
					this.sizeConstraint();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 491;
				this.match(ASNParser.R_PARAN);
				}
			}

			this.state = 495;
			this.match(ASNParser.OF_LITERAL);
			this.state = 498;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 496;
				this.asnType();
				}
				break;

			case 2:
				{
				this.state = 497;
				this.namedType();
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
	public sizeConstraint(): SizeConstraintContext {
		let _localctx: SizeConstraintContext = new SizeConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ASNParser.RULE_sizeConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this.match(ASNParser.SIZE_LITERAL);
			this.state = 501;
			this.constraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterizedAssignment(): ParameterizedAssignmentContext {
		let _localctx: ParameterizedAssignmentContext = new ParameterizedAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ASNParser.RULE_parameterizedAssignment);
		try {
			this.state = 517;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.L_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 503;
				this.parameterList();
				{
				this.state = 504;
				this.match(ASNParser.ASSIGN_OP);
				this.state = 508;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 505;
					this.asnType();
					}
					break;

				case 2:
					{
					this.state = 506;
					this.value();
					}
					break;

				case 3:
					{
					this.state = 507;
					this.valueSet();
					}
					break;
				}
				}
				}
				break;
			case ASNParser.TYPE_IDENTIFIER_LITERAL:
			case ASNParser.ABSTRACT_SYNTAX_LITERAL:
			case ASNParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 510;
				this.definedObjectClass();
				this.state = 511;
				this.match(ASNParser.ASSIGN_OP);
				this.state = 515;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 512;
					this.object();
					}
					break;

				case 2:
					{
					this.state = 513;
					this.objectClass();
					}
					break;

				case 3:
					{
					this.state = 514;
					this.objectSet();
					}
					break;
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
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ASNParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 519;
			this.match(ASNParser.L_BRACE);
			this.state = 520;
			this.parameter();
			this.state = 525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASNParser.COMMA) {
				{
				{
				this.state = 521;
				this.match(ASNParser.COMMA);
				this.state = 522;
				this.parameter();
				}
				}
				this.state = 527;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 528;
			this.match(ASNParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ASNParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 530;
				this.paramGovernor();
				this.state = 531;
				this.match(ASNParser.COLON);
				}
				break;
			}
			this.state = 535;
			this.match(ASNParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramGovernor(): ParamGovernorContext {
		let _localctx: ParamGovernorContext = new ParamGovernorContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ASNParser.RULE_paramGovernor);
		try {
			this.state = 539;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 537;
				this.governor();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 538;
				this.match(ASNParser.IDENTIFIER);
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
	public governor(): GovernorContext {
		let _localctx: GovernorContext = new GovernorContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ASNParser.RULE_governor);
		try {
			this.state = 543;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 541;
				this.asnType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 542;
				this.definedObjectClass();
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
	public objectClassAssignment(): ObjectClassAssignmentContext {
		let _localctx: ObjectClassAssignmentContext = new ObjectClassAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ASNParser.RULE_objectClassAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 545;
			this.match(ASNParser.ASSIGN_OP);
			this.state = 546;
			this.objectClass();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectClass(): ObjectClassContext {
		let _localctx: ObjectClassContext = new ObjectClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ASNParser.RULE_objectClass);
		try {
			this.state = 550;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.TYPE_IDENTIFIER_LITERAL:
			case ASNParser.ABSTRACT_SYNTAX_LITERAL:
			case ASNParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 548;
				this.definedObjectClass();
				}
				break;
			case ASNParser.CLASS_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 549;
				this.objectClassDefn();
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
	public definedObjectClass(): DefinedObjectClassContext {
		let _localctx: DefinedObjectClassContext = new DefinedObjectClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ASNParser.RULE_definedObjectClass);
		try {
			this.state = 559;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 554;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 552;
					this.match(ASNParser.IDENTIFIER);
					this.state = 553;
					this.match(ASNParser.DOT);
					}
					break;
				}
				this.state = 556;
				this.match(ASNParser.IDENTIFIER);
				}
				break;
			case ASNParser.TYPE_IDENTIFIER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 557;
				this.match(ASNParser.TYPE_IDENTIFIER_LITERAL);
				}
				break;
			case ASNParser.ABSTRACT_SYNTAX_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 558;
				this.match(ASNParser.ABSTRACT_SYNTAX_LITERAL);
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
	public usefulObjectClassReference(): UsefulObjectClassReferenceContext {
		let _localctx: UsefulObjectClassReferenceContext = new UsefulObjectClassReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ASNParser.RULE_usefulObjectClassReference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			_la = this._input.LA(1);
			if (!(_la === ASNParser.TYPE_IDENTIFIER_LITERAL || _la === ASNParser.ABSTRACT_SYNTAX_LITERAL)) {
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
	public externalObjectClassReference(): ExternalObjectClassReferenceContext {
		let _localctx: ExternalObjectClassReferenceContext = new ExternalObjectClassReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ASNParser.RULE_externalObjectClassReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 563;
			this.match(ASNParser.IDENTIFIER);
			this.state = 564;
			this.match(ASNParser.DOT);
			this.state = 565;
			this.match(ASNParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectClassDefn(): ObjectClassDefnContext {
		let _localctx: ObjectClassDefnContext = new ObjectClassDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ASNParser.RULE_objectClassDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 567;
			this.match(ASNParser.CLASS_LITERAL);
			this.state = 568;
			this.match(ASNParser.L_BRACE);
			this.state = 569;
			this.fieldSpec();
			this.state = 574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASNParser.COMMA) {
				{
				{
				this.state = 570;
				this.match(ASNParser.COMMA);
				this.state = 571;
				this.fieldSpec();
				}
				}
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 577;
			this.match(ASNParser.R_BRACE);
			this.state = 579;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.WITH_LITERAL) {
				{
				this.state = 578;
				this.withSyntaxSpec();
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
	public withSyntaxSpec(): WithSyntaxSpecContext {
		let _localctx: WithSyntaxSpecContext = new WithSyntaxSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ASNParser.RULE_withSyntaxSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 581;
			this.match(ASNParser.WITH_LITERAL);
			this.state = 582;
			this.match(ASNParser.SYNTAX_LITERAL);
			this.state = 583;
			this.syntaxList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public syntaxList(): SyntaxListContext {
		let _localctx: SyntaxListContext = new SyntaxListContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ASNParser.RULE_syntaxList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this.match(ASNParser.L_BRACE);
			this.state = 587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 586;
				this.tokenOrGroupSpec();
				}
				}
				this.state = 589;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ASNParser.AMPERSAND || _la === ASNParser.COMMA || _la === ASNParser.L_BRACKET || _la === ASNParser.IDENTIFIER);
			this.state = 591;
			this.match(ASNParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokenOrGroupSpec(): TokenOrGroupSpecContext {
		let _localctx: TokenOrGroupSpecContext = new TokenOrGroupSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ASNParser.RULE_tokenOrGroupSpec);
		try {
			this.state = 595;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.AMPERSAND:
			case ASNParser.COMMA:
			case ASNParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 593;
				this.requiredToken();
				}
				break;
			case ASNParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 594;
				this.optionalGroup();
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
	public optionalGroup(): OptionalGroupContext {
		let _localctx: OptionalGroupContext = new OptionalGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ASNParser.RULE_optionalGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 597;
			this.match(ASNParser.L_BRACKET);
			this.state = 599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 598;
				this.tokenOrGroupSpec();
				}
				}
				this.state = 601;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ASNParser.AMPERSAND || _la === ASNParser.COMMA || _la === ASNParser.L_BRACKET || _la === ASNParser.IDENTIFIER);
			this.state = 603;
			this.match(ASNParser.R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public requiredToken(): RequiredTokenContext {
		let _localctx: RequiredTokenContext = new RequiredTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ASNParser.RULE_requiredToken);
		try {
			this.state = 607;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.COMMA:
			case ASNParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 605;
				this.literal();
				}
				break;
			case ASNParser.AMPERSAND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 606;
				this.primitiveFieldName();
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, ASNParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 609;
			_la = this._input.LA(1);
			if (!(_la === ASNParser.COMMA || _la === ASNParser.IDENTIFIER)) {
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
	public primitiveFieldName(): PrimitiveFieldNameContext {
		let _localctx: PrimitiveFieldNameContext = new PrimitiveFieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, ASNParser.RULE_primitiveFieldName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 611;
			this.match(ASNParser.AMPERSAND);
			this.state = 612;
			this.match(ASNParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldSpec(): FieldSpecContext {
		let _localctx: FieldSpecContext = new FieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, ASNParser.RULE_fieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this.match(ASNParser.AMPERSAND);
			this.state = 615;
			this.match(ASNParser.IDENTIFIER);
			this.state = 649;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 617;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASNParser.OPTIONAL_LITERAL || _la === ASNParser.DEFAULT_LITERAL) {
					{
					this.state = 616;
					this.typeOptionalitySpec();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 619;
				this.asnType();
				this.state = 629;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
				case 1:
					{
					this.state = 621;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASNParser.OPTIONAL_LITERAL || _la === ASNParser.DEFAULT_LITERAL) {
						{
						this.state = 620;
						this.valueSetOptionalitySpec();
						}
					}

					}
					break;

				case 2:
					{
					this.state = 624;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASNParser.UNIQUE_LITERAL) {
						{
						this.state = 623;
						this.match(ASNParser.UNIQUE_LITERAL);
						}
					}

					this.state = 627;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASNParser.OPTIONAL_LITERAL || _la === ASNParser.DEFAULT_LITERAL) {
						{
						this.state = 626;
						this.valueOptionalitySpec();
						}
					}

					}
					break;
				}
				}
				break;

			case 3:
				{
				this.state = 631;
				this.fieldName();
				this.state = 638;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASNParser.OPTIONAL_LITERAL:
					{
					this.state = 632;
					this.match(ASNParser.OPTIONAL_LITERAL);
					}
					break;
				case ASNParser.DEFAULT_LITERAL:
					{
					{
					this.state = 633;
					this.match(ASNParser.DEFAULT_LITERAL);
					this.state = 636;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
					case 1:
						{
						this.state = 634;
						this.valueSet();
						}
						break;

					case 2:
						{
						this.state = 635;
						this.value();
						}
						break;
					}
					}
					}
					break;
				case ASNParser.R_BRACE:
				case ASNParser.COMMA:
					break;
				default:
					break;
				}
				}
				break;

			case 4:
				{
				this.state = 640;
				this.definedObjectClass();
				this.state = 647;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASNParser.OPTIONAL_LITERAL:
					{
					this.state = 641;
					this.match(ASNParser.OPTIONAL_LITERAL);
					}
					break;
				case ASNParser.DEFAULT_LITERAL:
					{
					{
					this.state = 642;
					this.match(ASNParser.DEFAULT_LITERAL);
					this.state = 645;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ASNParser.L_BRACE:
						{
						this.state = 643;
						this.objectSet();
						}
						break;
					case ASNParser.IDENTIFIER:
						{
						this.state = 644;
						this.object();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					break;
				case ASNParser.R_BRACE:
				case ASNParser.COMMA:
					break;
				default:
					break;
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
	public typeFieldSpec(): TypeFieldSpecContext {
		let _localctx: TypeFieldSpecContext = new TypeFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, ASNParser.RULE_typeFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 651;
			this.match(ASNParser.AMPERSAND);
			this.state = 652;
			this.match(ASNParser.IDENTIFIER);
			this.state = 654;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.OPTIONAL_LITERAL || _la === ASNParser.DEFAULT_LITERAL) {
				{
				this.state = 653;
				this.typeOptionalitySpec();
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
	public typeOptionalitySpec(): TypeOptionalitySpecContext {
		let _localctx: TypeOptionalitySpecContext = new TypeOptionalitySpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, ASNParser.RULE_typeOptionalitySpec);
		try {
			this.state = 659;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.OPTIONAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 656;
				this.match(ASNParser.OPTIONAL_LITERAL);
				}
				break;
			case ASNParser.DEFAULT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 657;
				this.match(ASNParser.DEFAULT_LITERAL);
				this.state = 658;
				this.asnType();
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
	public fixedTypeValueFieldSpec(): FixedTypeValueFieldSpecContext {
		let _localctx: FixedTypeValueFieldSpecContext = new FixedTypeValueFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, ASNParser.RULE_fixedTypeValueFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.match(ASNParser.AMPERSAND);
			this.state = 662;
			this.match(ASNParser.IDENTIFIER);
			this.state = 663;
			this.asnType();
			this.state = 665;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.UNIQUE_LITERAL) {
				{
				this.state = 664;
				this.match(ASNParser.UNIQUE_LITERAL);
				}
			}

			this.state = 668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.OPTIONAL_LITERAL || _la === ASNParser.DEFAULT_LITERAL) {
				{
				this.state = 667;
				this.valueOptionalitySpec();
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
	public valueOptionalitySpec(): ValueOptionalitySpecContext {
		let _localctx: ValueOptionalitySpecContext = new ValueOptionalitySpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, ASNParser.RULE_valueOptionalitySpec);
		try {
			this.state = 673;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.OPTIONAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 670;
				this.match(ASNParser.OPTIONAL_LITERAL);
				}
				break;
			case ASNParser.DEFAULT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 671;
				this.match(ASNParser.DEFAULT_LITERAL);
				this.state = 672;
				this.value();
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
	public variableTypeValueFieldSpec(): VariableTypeValueFieldSpecContext {
		let _localctx: VariableTypeValueFieldSpecContext = new VariableTypeValueFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, ASNParser.RULE_variableTypeValueFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 675;
			this.match(ASNParser.AMPERSAND);
			this.state = 676;
			this.match(ASNParser.IDENTIFIER);
			this.state = 677;
			this.fieldName();
			this.state = 679;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.OPTIONAL_LITERAL || _la === ASNParser.DEFAULT_LITERAL) {
				{
				this.state = 678;
				this.valueOptionalitySpec();
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
	public fixedTypeValueSetFieldSpec(): FixedTypeValueSetFieldSpecContext {
		let _localctx: FixedTypeValueSetFieldSpecContext = new FixedTypeValueSetFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, ASNParser.RULE_fixedTypeValueSetFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			this.match(ASNParser.AMPERSAND);
			this.state = 682;
			this.match(ASNParser.IDENTIFIER);
			this.state = 683;
			this.asnType();
			this.state = 685;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.OPTIONAL_LITERAL || _la === ASNParser.DEFAULT_LITERAL) {
				{
				this.state = 684;
				this.valueSetOptionalitySpec();
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
	public valueSetOptionalitySpec(): ValueSetOptionalitySpecContext {
		let _localctx: ValueSetOptionalitySpecContext = new ValueSetOptionalitySpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, ASNParser.RULE_valueSetOptionalitySpec);
		try {
			this.state = 690;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.OPTIONAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 687;
				this.match(ASNParser.OPTIONAL_LITERAL);
				}
				break;
			case ASNParser.DEFAULT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 688;
				this.match(ASNParser.DEFAULT_LITERAL);
				this.state = 689;
				this.valueSet();
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
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, ASNParser.RULE_object);
		try {
			this.state = 694;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 692;
				this.definedObject();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 693;
				this.parameterizedObject();
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
	public parameterizedObject(): ParameterizedObjectContext {
		let _localctx: ParameterizedObjectContext = new ParameterizedObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, ASNParser.RULE_parameterizedObject);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 696;
			this.definedObject();
			this.state = 697;
			this.actualParameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definedObject(): DefinedObjectContext {
		let _localctx: DefinedObjectContext = new DefinedObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, ASNParser.RULE_definedObject);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 699;
			this.match(ASNParser.IDENTIFIER);
			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.DOT) {
				{
				this.state = 700;
				this.match(ASNParser.DOT);
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
	public objectSet(): ObjectSetContext {
		let _localctx: ObjectSetContext = new ObjectSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, ASNParser.RULE_objectSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 703;
			this.match(ASNParser.L_BRACE);
			this.state = 704;
			this.objectSetSpec();
			this.state = 705;
			this.match(ASNParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectSetSpec(): ObjectSetSpecContext {
		let _localctx: ObjectSetSpecContext = new ObjectSetSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, ASNParser.RULE_objectSetSpec);
		let _la: number;
		try {
			this.state = 721;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.TRUE_LITERAL:
			case ASNParser.FALSE_LITERAL:
			case ASNParser.TRUE_SMALL_LITERAL:
			case ASNParser.FALSE_SMALL_LITERAL:
			case ASNParser.L_BRACE:
			case ASNParser.MINUS:
			case ASNParser.ALL_LITERAL:
			case ASNParser.MIN_LITERAL:
			case ASNParser.SIZE_LITERAL:
			case ASNParser.PATTERN_LITERAL:
			case ASNParser.NUMBER:
			case ASNParser.BSTRING:
			case ASNParser.CSTRING:
			case ASNParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 707;
				this.rootElementSetSpec();
				this.state = 714;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASNParser.COMMA) {
					{
					this.state = 708;
					this.match(ASNParser.COMMA);
					this.state = 709;
					this.match(ASNParser.ELLIPSIS);
					this.state = 712;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASNParser.COMMA) {
						{
						this.state = 710;
						this.match(ASNParser.COMMA);
						this.state = 711;
						this.additionalElementSetSpec();
						}
					}

					}
				}

				}
				break;
			case ASNParser.ELLIPSIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 716;
				this.match(ASNParser.ELLIPSIS);
				this.state = 719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASNParser.COMMA) {
					{
					this.state = 717;
					this.match(ASNParser.COMMA);
					this.state = 718;
					this.additionalElementSetSpec();
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
	public fieldName(): FieldNameContext {
		let _localctx: FieldNameContext = new FieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, ASNParser.RULE_fieldName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 723;
			this.match(ASNParser.AMPERSAND);
			this.state = 724;
			this.match(ASNParser.IDENTIFIER);
			}
			this.state = 731;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASNParser.AMPERSAND) {
				{
				{
				this.state = 726;
				this.match(ASNParser.AMPERSAND);
				this.state = 727;
				this.match(ASNParser.IDENTIFIER);
				this.state = 728;
				this.match(ASNParser.DOT);
				}
				}
				this.state = 733;
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
	public valueSet(): ValueSetContext {
		let _localctx: ValueSetContext = new ValueSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, ASNParser.RULE_valueSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 734;
			this.match(ASNParser.L_BRACE);
			this.state = 735;
			this.elementSetSpecs();
			this.state = 736;
			this.match(ASNParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementSetSpecs(): ElementSetSpecsContext {
		let _localctx: ElementSetSpecsContext = new ElementSetSpecsContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, ASNParser.RULE_elementSetSpecs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 738;
			this.rootElementSetSpec();
			this.state = 745;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.COMMA) {
				{
				this.state = 739;
				this.match(ASNParser.COMMA);
				this.state = 740;
				this.match(ASNParser.ELLIPSIS);
				this.state = 743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASNParser.COMMA) {
					{
					this.state = 741;
					this.match(ASNParser.COMMA);
					this.state = 742;
					this.additionalElementSetSpec();
					}
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
	public rootElementSetSpec(): RootElementSetSpecContext {
		let _localctx: RootElementSetSpecContext = new RootElementSetSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, ASNParser.RULE_rootElementSetSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			this.elementSetSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additionalElementSetSpec(): AdditionalElementSetSpecContext {
		let _localctx: AdditionalElementSetSpecContext = new AdditionalElementSetSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, ASNParser.RULE_additionalElementSetSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 749;
			this.elementSetSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementSetSpec(): ElementSetSpecContext {
		let _localctx: ElementSetSpecContext = new ElementSetSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, ASNParser.RULE_elementSetSpec);
		try {
			this.state = 754;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.TRUE_LITERAL:
			case ASNParser.FALSE_LITERAL:
			case ASNParser.TRUE_SMALL_LITERAL:
			case ASNParser.FALSE_SMALL_LITERAL:
			case ASNParser.L_BRACE:
			case ASNParser.MINUS:
			case ASNParser.MIN_LITERAL:
			case ASNParser.SIZE_LITERAL:
			case ASNParser.PATTERN_LITERAL:
			case ASNParser.NUMBER:
			case ASNParser.BSTRING:
			case ASNParser.CSTRING:
			case ASNParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 751;
				this.unions();
				}
				break;
			case ASNParser.ALL_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 752;
				this.match(ASNParser.ALL_LITERAL);
				this.state = 753;
				this.exclusions();
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
	public unions(): UnionsContext {
		let _localctx: UnionsContext = new UnionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, ASNParser.RULE_unions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 756;
			this.intersections();
			}
			this.state = 762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASNParser.PIPE || _la === ASNParser.UNION_LITERAL) {
				{
				{
				this.state = 757;
				this.unionMark();
				this.state = 758;
				this.intersections();
				}
				}
				this.state = 764;
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
	public exclusions(): ExclusionsContext {
		let _localctx: ExclusionsContext = new ExclusionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, ASNParser.RULE_exclusions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 765;
			this.match(ASNParser.EXCEPT_LITERAL);
			this.state = 766;
			this.elements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intersections(): IntersectionsContext {
		let _localctx: IntersectionsContext = new IntersectionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, ASNParser.RULE_intersections);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 768;
			this.intersectionElements();
			}
			this.state = 774;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASNParser.POWER || _la === ASNParser.INTERSECTION_LITERAL) {
				{
				{
				this.state = 769;
				this.intersectionMark();
				this.state = 770;
				this.intersectionElements();
				}
				}
				this.state = 776;
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
	public unionMark(): UnionMarkContext {
		let _localctx: UnionMarkContext = new UnionMarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, ASNParser.RULE_unionMark);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			_la = this._input.LA(1);
			if (!(_la === ASNParser.PIPE || _la === ASNParser.UNION_LITERAL)) {
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
	public intersectionMark(): IntersectionMarkContext {
		let _localctx: IntersectionMarkContext = new IntersectionMarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, ASNParser.RULE_intersectionMark);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 779;
			_la = this._input.LA(1);
			if (!(_la === ASNParser.POWER || _la === ASNParser.INTERSECTION_LITERAL)) {
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
	public elements(): ElementsContext {
		let _localctx: ElementsContext = new ElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, ASNParser.RULE_elements);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
			this.subtypeElements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectSetElements(): ObjectSetElementsContext {
		let _localctx: ObjectSetElementsContext = new ObjectSetElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, ASNParser.RULE_objectSetElements);
		try {
			this.state = 785;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 783;
				this.object();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 784;
				this.definedObject();
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
	public intersectionElements(): IntersectionElementsContext {
		let _localctx: IntersectionElementsContext = new IntersectionElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, ASNParser.RULE_intersectionElements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 787;
			this.elements();
			this.state = 789;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.EXCEPT_LITERAL) {
				{
				this.state = 788;
				this.exclusions();
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
	public subtypeElements(): SubtypeElementsContext {
		let _localctx: SubtypeElementsContext = new SubtypeElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, ASNParser.RULE_subtypeElements);
		let _la: number;
		try {
			this.state = 810;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 793;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASNParser.TRUE_LITERAL:
				case ASNParser.FALSE_LITERAL:
				case ASNParser.TRUE_SMALL_LITERAL:
				case ASNParser.FALSE_SMALL_LITERAL:
				case ASNParser.L_BRACE:
				case ASNParser.MINUS:
				case ASNParser.NUMBER:
				case ASNParser.BSTRING:
				case ASNParser.CSTRING:
				case ASNParser.IDENTIFIER:
					{
					this.state = 791;
					this.value();
					}
					break;
				case ASNParser.MIN_LITERAL:
					{
					this.state = 792;
					this.match(ASNParser.MIN_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASNParser.LESS_THAN) {
					{
					this.state = 795;
					this.match(ASNParser.LESS_THAN);
					}
				}

				this.state = 798;
				this.match(ASNParser.DOUBLE_DOT);
				this.state = 800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASNParser.LESS_THAN) {
					{
					this.state = 799;
					this.match(ASNParser.LESS_THAN);
					}
				}

				this.state = 804;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASNParser.TRUE_LITERAL:
				case ASNParser.FALSE_LITERAL:
				case ASNParser.TRUE_SMALL_LITERAL:
				case ASNParser.FALSE_SMALL_LITERAL:
				case ASNParser.L_BRACE:
				case ASNParser.MINUS:
				case ASNParser.NUMBER:
				case ASNParser.BSTRING:
				case ASNParser.CSTRING:
				case ASNParser.IDENTIFIER:
					{
					this.state = 802;
					this.value();
					}
					break;
				case ASNParser.MAX_LITERAL:
					{
					this.state = 803;
					this.match(ASNParser.MAX_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 806;
				this.sizeConstraint();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 807;
				this.match(ASNParser.PATTERN_LITERAL);
				this.state = 808;
				this.value();
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 809;
				this.value();
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
	public variableTypeValueSetFieldSpec(): VariableTypeValueSetFieldSpecContext {
		let _localctx: VariableTypeValueSetFieldSpecContext = new VariableTypeValueSetFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, ASNParser.RULE_variableTypeValueSetFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 812;
			this.match(ASNParser.AMPERSAND);
			this.state = 813;
			this.match(ASNParser.IDENTIFIER);
			this.state = 814;
			this.fieldName();
			this.state = 816;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.OPTIONAL_LITERAL || _la === ASNParser.DEFAULT_LITERAL) {
				{
				this.state = 815;
				this.valueSetOptionalitySpec();
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
	public objectFieldSpec(): ObjectFieldSpecContext {
		let _localctx: ObjectFieldSpecContext = new ObjectFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, ASNParser.RULE_objectFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 818;
			this.match(ASNParser.AMPERSAND);
			this.state = 819;
			this.match(ASNParser.IDENTIFIER);
			this.state = 820;
			this.definedObjectClass();
			this.state = 822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.OPTIONAL_LITERAL || _la === ASNParser.DEFAULT_LITERAL) {
				{
				this.state = 821;
				this.objectOptionalitySpec();
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
	public objectOptionalitySpec(): ObjectOptionalitySpecContext {
		let _localctx: ObjectOptionalitySpecContext = new ObjectOptionalitySpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, ASNParser.RULE_objectOptionalitySpec);
		try {
			this.state = 827;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.OPTIONAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 824;
				this.match(ASNParser.OPTIONAL_LITERAL);
				}
				break;
			case ASNParser.DEFAULT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 825;
				this.match(ASNParser.DEFAULT_LITERAL);
				this.state = 826;
				this.object();
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
	public objectSetFieldSpec(): ObjectSetFieldSpecContext {
		let _localctx: ObjectSetFieldSpecContext = new ObjectSetFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, ASNParser.RULE_objectSetFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 829;
			this.match(ASNParser.AMPERSAND);
			this.state = 830;
			this.match(ASNParser.IDENTIFIER);
			this.state = 831;
			this.definedObjectClass();
			this.state = 833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.OPTIONAL_LITERAL || _la === ASNParser.DEFAULT_LITERAL) {
				{
				this.state = 832;
				this.objectSetOptionalitySpec();
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
	public objectSetOptionalitySpec(): ObjectSetOptionalitySpecContext {
		let _localctx: ObjectSetOptionalitySpecContext = new ObjectSetOptionalitySpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, ASNParser.RULE_objectSetOptionalitySpec);
		try {
			this.state = 838;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.OPTIONAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 835;
				this.match(ASNParser.OPTIONAL_LITERAL);
				}
				break;
			case ASNParser.DEFAULT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 836;
				this.match(ASNParser.DEFAULT_LITERAL);
				this.state = 837;
				this.objectSet();
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
	public typeAssignment(): TypeAssignmentContext {
		let _localctx: TypeAssignmentContext = new TypeAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, ASNParser.RULE_typeAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 840;
			this.match(ASNParser.ASSIGN_OP);
			this.state = 841;
			this.asnType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueAssignment(): ValueAssignmentContext {
		let _localctx: ValueAssignmentContext = new ValueAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, ASNParser.RULE_valueAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 843;
			this.asnType();
			this.state = 844;
			this.match(ASNParser.ASSIGN_OP);
			this.state = 845;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asnType(): AsnTypeContext {
		let _localctx: AsnTypeContext = new AsnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, ASNParser.RULE_asnType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 849;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 847;
				this.builtinType();
				}
				break;

			case 2:
				{
				this.state = 848;
				this.referencedType();
				}
				break;
			}
			this.state = 854;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 851;
					this.constraint();
					}
					}
				}
				this.state = 856;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
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
	public builtinType(): BuiltinTypeContext {
		let _localctx: BuiltinTypeContext = new BuiltinTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, ASNParser.RULE_builtinType);
		try {
			this.state = 870;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 857;
				this.octetStringType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 858;
				this.bitStringType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 859;
				this.choiceType();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 860;
				this.enumeratedType();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 861;
				this.integerType();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 862;
				this.sequenceType();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 863;
				this.sequenceOfType();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 864;
				this.setType();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 865;
				this.setOfType();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 866;
				this.objectidentifiertype();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 867;
				this.objectClassFieldType();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 868;
				this.match(ASNParser.BOOLEAN_LITERAL);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 869;
				this.match(ASNParser.NULL_LITERAL);
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
	public objectClassFieldType(): ObjectClassFieldTypeContext {
		let _localctx: ObjectClassFieldTypeContext = new ObjectClassFieldTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, ASNParser.RULE_objectClassFieldType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 872;
			this.definedObjectClass();
			this.state = 873;
			this.match(ASNParser.DOT);
			this.state = 874;
			this.fieldName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 174, ASNParser.RULE_setType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 876;
			this.match(ASNParser.SET_LITERAL);
			this.state = 877;
			this.match(ASNParser.L_BRACE);
			this.state = 882;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 878;
				this.extensionAndException();
				this.state = 879;
				this.optionalExtensionMarker();
				}
				break;

			case 2:
				{
				this.state = 881;
				this.componentTypeLists();
				}
				break;
			}
			this.state = 884;
			this.match(ASNParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setOfType(): SetOfTypeContext {
		let _localctx: SetOfTypeContext = new SetOfTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, ASNParser.RULE_setOfType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 886;
			this.match(ASNParser.SET_LITERAL);
			this.state = 889;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.L_PARAN:
				{
				this.state = 887;
				this.constraint();
				}
				break;
			case ASNParser.SIZE_LITERAL:
				{
				this.state = 888;
				this.sizeConstraint();
				}
				break;
			case ASNParser.OF_LITERAL:
				break;
			default:
				break;
			}
			this.state = 891;
			this.match(ASNParser.OF_LITERAL);
			this.state = 894;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 892;
				this.asnType();
				}
				break;

			case 2:
				{
				this.state = 893;
				this.namedType();
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
	public referencedType(): ReferencedTypeContext {
		let _localctx: ReferencedTypeContext = new ReferencedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, ASNParser.RULE_referencedType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 896;
			this.definedType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definedType(): DefinedTypeContext {
		let _localctx: DefinedTypeContext = new DefinedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, ASNParser.RULE_definedType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 898;
			this.match(ASNParser.IDENTIFIER);
			this.state = 901;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.DOT) {
				{
				this.state = 899;
				this.match(ASNParser.DOT);
				this.state = 900;
				this.match(ASNParser.IDENTIFIER);
				}
			}

			this.state = 904;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 903;
				this.actualParameterList();
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
	public constraint(): ConstraintContext {
		let _localctx: ConstraintContext = new ConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, ASNParser.RULE_constraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 906;
			this.match(ASNParser.L_PARAN);
			this.state = 907;
			this.constraintSpec();
			this.state = 909;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.EXCLAM) {
				{
				this.state = 908;
				this.exceptionSpec();
				}
			}

			this.state = 911;
			this.match(ASNParser.R_PARAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraintSpec(): ConstraintSpecContext {
		let _localctx: ConstraintSpecContext = new ConstraintSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, ASNParser.RULE_constraintSpec);
		try {
			this.state = 915;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 913;
				this.generalConstraint();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 914;
				this.subtypeConstraint();
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
	public userDefinedConstraint(): UserDefinedConstraintContext {
		let _localctx: UserDefinedConstraintContext = new UserDefinedConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, ASNParser.RULE_userDefinedConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 917;
			this.match(ASNParser.CONSTRAINED_LITERAL);
			this.state = 918;
			this.match(ASNParser.BY_LITERAL);
			this.state = 919;
			this.match(ASNParser.L_BRACE);
			this.state = 920;
			this.userDefinedConstraintParameter();
			this.state = 925;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASNParser.COMMA) {
				{
				{
				this.state = 921;
				this.match(ASNParser.COMMA);
				this.state = 922;
				this.userDefinedConstraintParameter();
				}
				}
				this.state = 927;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 928;
			this.match(ASNParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generalConstraint(): GeneralConstraintContext {
		let _localctx: GeneralConstraintContext = new GeneralConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, ASNParser.RULE_generalConstraint);
		try {
			this.state = 933;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.CONSTRAINED_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 930;
				this.userDefinedConstraint();
				}
				break;
			case ASNParser.L_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 931;
				this.tableConstraint();
				}
				break;
			case ASNParser.CONTAINING_LITERAL:
			case ASNParser.WITH_LITERAL:
			case ASNParser.ENCODED_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 932;
				this.contentsConstraint();
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
	public userDefinedConstraintParameter(): UserDefinedConstraintParameterContext {
		let _localctx: UserDefinedConstraintParameterContext = new UserDefinedConstraintParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, ASNParser.RULE_userDefinedConstraintParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 935;
			this.governor();
			this.state = 941;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 936;
				this.match(ASNParser.COLON);
				this.state = 937;
				this.value();
				}
				break;

			case 2:
				{
				this.state = 938;
				this.valueSet();
				}
				break;

			case 3:
				{
				this.state = 939;
				this.object();
				}
				break;

			case 4:
				{
				this.state = 940;
				this.objectSet();
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
	public tableConstraint(): TableConstraintContext {
		let _localctx: TableConstraintContext = new TableConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, ASNParser.RULE_tableConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 943;
			this.componentRelationConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleTableConstraint(): SimpleTableConstraintContext {
		let _localctx: SimpleTableConstraintContext = new SimpleTableConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, ASNParser.RULE_simpleTableConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 945;
			this.objectSet();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contentsConstraint(): ContentsConstraintContext {
		let _localctx: ContentsConstraintContext = new ContentsConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, ASNParser.RULE_contentsConstraint);
		try {
			this.state = 964;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 947;
				this.match(ASNParser.CONTAINING_LITERAL);
				this.state = 948;
				this.asnType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 949;
				this.match(ASNParser.ENCODED_LITERAL);
				this.state = 950;
				this.match(ASNParser.BY_LITERAL);
				this.state = 951;
				this.value();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 952;
				this.match(ASNParser.CONTAINING_LITERAL);
				this.state = 953;
				this.asnType();
				this.state = 954;
				this.match(ASNParser.ENCODED_LITERAL);
				this.state = 955;
				this.match(ASNParser.BY_LITERAL);
				this.state = 956;
				this.value();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 958;
				this.match(ASNParser.WITH_LITERAL);
				this.state = 959;
				this.match(ASNParser.COMPONENTS_LITERAL);
				this.state = 960;
				this.match(ASNParser.L_BRACE);
				this.state = 961;
				this.componentPresenceLists();
				this.state = 962;
				this.match(ASNParser.R_BRACE);
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
	public componentPresenceLists(): ComponentPresenceListsContext {
		let _localctx: ComponentPresenceListsContext = new ComponentPresenceListsContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, ASNParser.RULE_componentPresenceLists);
		let _la: number;
		try {
			this.state = 982;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.R_BRACE:
			case ASNParser.COMMA:
			case ASNParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 967;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASNParser.IDENTIFIER) {
					{
					this.state = 966;
					this.componentPresenceList();
					}
				}

				this.state = 975;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASNParser.COMMA) {
					{
					this.state = 969;
					this.match(ASNParser.COMMA);
					this.state = 970;
					this.match(ASNParser.ELLIPSIS);
					this.state = 973;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASNParser.COMMA) {
						{
						this.state = 971;
						this.match(ASNParser.COMMA);
						this.state = 972;
						this.componentPresenceList();
						}
					}

					}
				}

				}
				break;
			case ASNParser.ELLIPSIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 977;
				this.match(ASNParser.ELLIPSIS);
				this.state = 980;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASNParser.COMMA) {
					{
					this.state = 978;
					this.match(ASNParser.COMMA);
					this.state = 979;
					this.componentPresenceList();
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
	public componentPresenceList(): ComponentPresenceListContext {
		let _localctx: ComponentPresenceListContext = new ComponentPresenceListContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, ASNParser.RULE_componentPresenceList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 984;
			this.componentPresence();
			}
			this.state = 989;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 985;
					this.match(ASNParser.COMMA);
					this.state = 986;
					this.componentPresence();
					}
					}
				}
				this.state = 991;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
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
	public componentPresence(): ComponentPresenceContext {
		let _localctx: ComponentPresenceContext = new ComponentPresenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, ASNParser.RULE_componentPresence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 992;
			this.match(ASNParser.IDENTIFIER);
			this.state = 993;
			_la = this._input.LA(1);
			if (!(_la === ASNParser.PRESENT_LITERAL || _la === ASNParser.ABSENT_LITERAL)) {
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
	public subtypeConstraint(): SubtypeConstraintContext {
		let _localctx: SubtypeConstraintContext = new SubtypeConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, ASNParser.RULE_subtypeConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 995;
			this.elementSetSpecs();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, ASNParser.RULE_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 997;
			this.builtinValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public builtinValue(): BuiltinValueContext {
		let _localctx: BuiltinValueContext = new BuiltinValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, ASNParser.RULE_builtinValue);
		try {
			this.state = 1006;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 999;
				this.enumeratedValue();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1000;
				this.integerValue();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1001;
				this.choiceValue();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1002;
				this.objectIdentifierValue();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1003;
				this.booleanValue();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1004;
				this.match(ASNParser.CSTRING);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1005;
				this.match(ASNParser.BSTRING);
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
	public objectIdentifierValue(): ObjectIdentifierValueContext {
		let _localctx: ObjectIdentifierValueContext = new ObjectIdentifierValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, ASNParser.RULE_objectIdentifierValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1008;
			this.match(ASNParser.L_BRACE);
			this.state = 1009;
			this.objIdComponentsList();
			this.state = 1010;
			this.match(ASNParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objIdComponentsList(): ObjIdComponentsListContext {
		let _localctx: ObjIdComponentsListContext = new ObjIdComponentsListContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, ASNParser.RULE_objIdComponentsList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1012;
			this.objIdComponents();
			}
			this.state = 1016;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASNParser.NUMBER || _la === ASNParser.IDENTIFIER) {
				{
				{
				this.state = 1013;
				this.objIdComponents();
				}
				}
				this.state = 1018;
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
	public objIdComponents(): ObjIdComponentsContext {
		let _localctx: ObjIdComponentsContext = new ObjIdComponentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, ASNParser.RULE_objIdComponents);
		let _la: number;
		try {
			this.state = 1030;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1019;
				this.match(ASNParser.NUMBER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1020;
				this.match(ASNParser.IDENTIFIER);
				this.state = 1027;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASNParser.L_PARAN) {
					{
					this.state = 1021;
					this.match(ASNParser.L_PARAN);
					this.state = 1024;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ASNParser.NUMBER:
						{
						this.state = 1022;
						this.match(ASNParser.NUMBER);
						}
						break;
					case ASNParser.IDENTIFIER:
						{
						this.state = 1023;
						this.definedValue();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1026;
					this.match(ASNParser.R_PARAN);
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1029;
				this.definedValue();
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
	public integerValue(): IntegerValueContext {
		let _localctx: IntegerValueContext = new IntegerValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, ASNParser.RULE_integerValue);
		try {
			this.state = 1034;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.MINUS:
			case ASNParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1032;
				this.signedNumber();
				}
				break;
			case ASNParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1033;
				this.match(ASNParser.IDENTIFIER);
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
	public choiceValue(): ChoiceValueContext {
		let _localctx: ChoiceValueContext = new ChoiceValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, ASNParser.RULE_choiceValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1036;
			this.match(ASNParser.IDENTIFIER);
			this.state = 1037;
			this.match(ASNParser.COLON);
			this.state = 1038;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumeratedValue(): EnumeratedValueContext {
		let _localctx: EnumeratedValueContext = new EnumeratedValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, ASNParser.RULE_enumeratedValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1040;
			this.match(ASNParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signedNumber(): SignedNumberContext {
		let _localctx: SignedNumberContext = new SignedNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, ASNParser.RULE_signedNumber);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1043;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.MINUS) {
				{
				this.state = 1042;
				this.match(ASNParser.MINUS);
				}
			}

			this.state = 1045;
			this.match(ASNParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public choiceType(): ChoiceTypeContext {
		let _localctx: ChoiceTypeContext = new ChoiceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, ASNParser.RULE_choiceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1047;
			this.match(ASNParser.CHOICE_LITERAL);
			this.state = 1048;
			this.match(ASNParser.L_BRACE);
			this.state = 1049;
			this.alternativeTypeLists();
			this.state = 1050;
			this.match(ASNParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alternativeTypeLists(): AlternativeTypeListsContext {
		let _localctx: AlternativeTypeListsContext = new AlternativeTypeListsContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, ASNParser.RULE_alternativeTypeLists);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1052;
			this.rootAlternativeTypeList();
			this.state = 1058;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.COMMA) {
				{
				this.state = 1053;
				this.match(ASNParser.COMMA);
				this.state = 1054;
				this.extensionAndException();
				this.state = 1055;
				this.extensionAdditionAlternatives();
				this.state = 1056;
				this.optionalExtensionMarker();
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
	public extensionAdditionAlternatives(): ExtensionAdditionAlternativesContext {
		let _localctx: ExtensionAdditionAlternativesContext = new ExtensionAdditionAlternativesContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, ASNParser.RULE_extensionAdditionAlternatives);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1062;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				{
				this.state = 1060;
				this.match(ASNParser.COMMA);
				this.state = 1061;
				this.extensionAdditionAlternativesList();
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
	public extensionAdditionAlternativesList(): ExtensionAdditionAlternativesListContext {
		let _localctx: ExtensionAdditionAlternativesListContext = new ExtensionAdditionAlternativesListContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, ASNParser.RULE_extensionAdditionAlternativesList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1064;
			this.extensionAdditionAlternative();
			}
			this.state = 1069;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1065;
					this.match(ASNParser.COMMA);
					this.state = 1066;
					this.extensionAdditionAlternative();
					}
					}
				}
				this.state = 1071;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
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
	public extensionAdditionAlternative(): ExtensionAdditionAlternativeContext {
		let _localctx: ExtensionAdditionAlternativeContext = new ExtensionAdditionAlternativeContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, ASNParser.RULE_extensionAdditionAlternative);
		try {
			this.state = 1074;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.DOUBLE_L_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1072;
				this.extensionAdditionAlternativesGroup();
				}
				break;
			case ASNParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1073;
				this.namedType();
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
	public extensionAdditionAlternativesGroup(): ExtensionAdditionAlternativesGroupContext {
		let _localctx: ExtensionAdditionAlternativesGroupContext = new ExtensionAdditionAlternativesGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, ASNParser.RULE_extensionAdditionAlternativesGroup);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1076;
			this.match(ASNParser.DOUBLE_L_BRACKET);
			this.state = 1077;
			this.versionNumber();
			this.state = 1078;
			this.alternativeTypeList();
			this.state = 1079;
			this.match(ASNParser.DOUBLE_R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rootAlternativeTypeList(): RootAlternativeTypeListContext {
		let _localctx: RootAlternativeTypeListContext = new RootAlternativeTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, ASNParser.RULE_rootAlternativeTypeList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1081;
			this.alternativeTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alternativeTypeList(): AlternativeTypeListContext {
		let _localctx: AlternativeTypeListContext = new AlternativeTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, ASNParser.RULE_alternativeTypeList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1083;
			this.namedType();
			}
			this.state = 1088;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1084;
					this.match(ASNParser.COMMA);
					this.state = 1085;
					this.namedType();
					}
					}
				}
				this.state = 1090;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
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
	public namedType(): NamedTypeContext {
		let _localctx: NamedTypeContext = new NamedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, ASNParser.RULE_namedType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1091;
			this.match(ASNParser.IDENTIFIER);
			this.state = 1092;
			this.asnType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumeratedType(): EnumeratedTypeContext {
		let _localctx: EnumeratedTypeContext = new EnumeratedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, ASNParser.RULE_enumeratedType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1094;
			this.match(ASNParser.ENUMERATED_LITERAL);
			this.state = 1095;
			this.match(ASNParser.L_BRACE);
			this.state = 1096;
			this.enumerations();
			this.state = 1097;
			this.match(ASNParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumerations(): EnumerationsContext {
		let _localctx: EnumerationsContext = new EnumerationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, ASNParser.RULE_enumerations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1099;
			this.rootEnumeration();
			this.state = 1109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.COMMA) {
				{
				this.state = 1100;
				this.match(ASNParser.COMMA);
				this.state = 1101;
				this.match(ASNParser.ELLIPSIS);
				this.state = 1103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASNParser.EXCLAM) {
					{
					this.state = 1102;
					this.exceptionSpec();
					}
				}

				this.state = 1107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASNParser.COMMA) {
					{
					this.state = 1105;
					this.match(ASNParser.COMMA);
					this.state = 1106;
					this.additionalEnumeration();
					}
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
	public rootEnumeration(): RootEnumerationContext {
		let _localctx: RootEnumerationContext = new RootEnumerationContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, ASNParser.RULE_rootEnumeration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1111;
			this.enumeration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 248, ASNParser.RULE_enumeration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1113;
			this.enumerationItem();
			this.state = 1118;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1114;
					this.match(ASNParser.COMMA);
					this.state = 1115;
					this.enumerationItem();
					}
					}
				}
				this.state = 1120;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
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
	public enumerationItem(): EnumerationItemContext {
		let _localctx: EnumerationItemContext = new EnumerationItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, ASNParser.RULE_enumerationItem);
		try {
			this.state = 1124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1121;
				this.match(ASNParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1122;
				this.namedNumber();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1123;
				this.value();
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
	public namedNumber(): NamedNumberContext {
		let _localctx: NamedNumberContext = new NamedNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, ASNParser.RULE_namedNumber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1126;
			this.match(ASNParser.IDENTIFIER);
			this.state = 1127;
			this.match(ASNParser.L_PARAN);
			this.state = 1130;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.MINUS:
			case ASNParser.NUMBER:
				{
				this.state = 1128;
				this.signedNumber();
				}
				break;
			case ASNParser.IDENTIFIER:
				{
				this.state = 1129;
				this.definedValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1132;
			this.match(ASNParser.R_PARAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definedValue(): DefinedValueContext {
		let _localctx: DefinedValueContext = new DefinedValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, ASNParser.RULE_definedValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1134;
			this.parameterizedValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterizedValue(): ParameterizedValueContext {
		let _localctx: ParameterizedValueContext = new ParameterizedValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, ASNParser.RULE_parameterizedValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1136;
			this.simpleDefinedValue();
			this.state = 1138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.L_BRACE) {
				{
				this.state = 1137;
				this.actualParameterList();
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
	public simpleDefinedValue(): SimpleDefinedValueContext {
		let _localctx: SimpleDefinedValueContext = new SimpleDefinedValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, ASNParser.RULE_simpleDefinedValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1140;
			this.match(ASNParser.IDENTIFIER);
			this.state = 1143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.DOT) {
				{
				this.state = 1141;
				this.match(ASNParser.DOT);
				this.state = 1142;
				this.match(ASNParser.IDENTIFIER);
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
	public actualParameterList(): ActualParameterListContext {
		let _localctx: ActualParameterListContext = new ActualParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, ASNParser.RULE_actualParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1145;
			this.match(ASNParser.L_BRACE);
			this.state = 1146;
			this.actualParameter();
			this.state = 1151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASNParser.COMMA) {
				{
				{
				this.state = 1147;
				this.match(ASNParser.COMMA);
				this.state = 1148;
				this.actualParameter();
				}
				}
				this.state = 1153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1154;
			this.match(ASNParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 262, ASNParser.RULE_actualParameter);
		try {
			this.state = 1158;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1156;
				this.asnType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1157;
				this.value();
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
	public exceptionSpec(): ExceptionSpecContext {
		let _localctx: ExceptionSpecContext = new ExceptionSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, ASNParser.RULE_exceptionSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1160;
			this.match(ASNParser.EXCLAM);
			this.state = 1161;
			this.exceptionIdentification();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionIdentification(): ExceptionIdentificationContext {
		let _localctx: ExceptionIdentificationContext = new ExceptionIdentificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, ASNParser.RULE_exceptionIdentification);
		try {
			this.state = 1169;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1163;
				this.signedNumber();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1164;
				this.definedValue();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1165;
				this.asnType();
				this.state = 1166;
				this.match(ASNParser.COLON);
				this.state = 1167;
				this.value();
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
	public additionalEnumeration(): AdditionalEnumerationContext {
		let _localctx: AdditionalEnumerationContext = new AdditionalEnumerationContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, ASNParser.RULE_additionalEnumeration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1171;
			this.enumeration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerType(): IntegerTypeContext {
		let _localctx: IntegerTypeContext = new IntegerTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, ASNParser.RULE_integerType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1173;
			this.match(ASNParser.INTEGER_LITERAL);
			this.state = 1178;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				{
				this.state = 1174;
				this.match(ASNParser.L_BRACE);
				this.state = 1175;
				this.namedNumberList();
				this.state = 1176;
				this.match(ASNParser.R_BRACE);
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
	public namedNumberList(): NamedNumberListContext {
		let _localctx: NamedNumberListContext = new NamedNumberListContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, ASNParser.RULE_namedNumberList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1180;
			this.namedNumber();
			}
			this.state = 1185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASNParser.COMMA) {
				{
				{
				this.state = 1181;
				this.match(ASNParser.COMMA);
				this.state = 1182;
				this.namedNumber();
				}
				}
				this.state = 1187;
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
	public objectidentifiertype(): ObjectidentifiertypeContext {
		let _localctx: ObjectidentifiertypeContext = new ObjectidentifiertypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, ASNParser.RULE_objectidentifiertype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1188;
			this.match(ASNParser.OBJECT_LITERAL);
			this.state = 1189;
			this.match(ASNParser.IDENTIFIER_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentRelationConstraint(): ComponentRelationConstraintContext {
		let _localctx: ComponentRelationConstraintContext = new ComponentRelationConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, ASNParser.RULE_componentRelationConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1191;
			this.match(ASNParser.L_BRACE);
			{
			this.state = 1192;
			this.match(ASNParser.IDENTIFIER);
			this.state = 1195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.DOT) {
				{
				this.state = 1193;
				this.match(ASNParser.DOT);
				this.state = 1194;
				this.match(ASNParser.IDENTIFIER);
				}
			}

			}
			this.state = 1197;
			this.match(ASNParser.R_BRACE);
			this.state = 1209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.L_BRACE) {
				{
				this.state = 1198;
				this.match(ASNParser.L_BRACE);
				this.state = 1199;
				this.atNotation();
				this.state = 1204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ASNParser.COMMA) {
					{
					{
					this.state = 1200;
					this.match(ASNParser.COMMA);
					this.state = 1201;
					this.atNotation();
					}
					}
					this.state = 1206;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1207;
				this.match(ASNParser.R_BRACE);
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
	public atNotation(): AtNotationContext {
		let _localctx: AtNotationContext = new AtNotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, ASNParser.RULE_atNotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1214;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.A_ROND:
				{
				this.state = 1211;
				this.match(ASNParser.A_ROND);
				}
				break;
			case ASNParser.A_ROND_DOT:
				{
				{
				this.state = 1212;
				this.match(ASNParser.A_ROND_DOT);
				this.state = 1213;
				this.level();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1216;
			this.componentIdList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public level(): LevelContext {
		let _localctx: LevelContext = new LevelContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, ASNParser.RULE_level);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASNParser.DOT) {
				{
				this.state = 1218;
				this.match(ASNParser.DOT);
				this.state = 1219;
				this.level();
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
	public componentIdList(): ComponentIdListContext {
		let _localctx: ComponentIdListContext = new ComponentIdListContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, ASNParser.RULE_componentIdList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1222;
			this.match(ASNParser.IDENTIFIER);
			this.state = 1227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASNParser.DOT) {
				{
				{
				this.state = 1223;
				this.match(ASNParser.DOT);
				this.state = 1224;
				this.match(ASNParser.IDENTIFIER);
				}
				}
				this.state = 1229;
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
	public octetStringType(): OctetStringTypeContext {
		let _localctx: OctetStringTypeContext = new OctetStringTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, ASNParser.RULE_octetStringType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1230;
			this.match(ASNParser.OCTET_LITERAL);
			this.state = 1231;
			this.match(ASNParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitStringType(): BitStringTypeContext {
		let _localctx: BitStringTypeContext = new BitStringTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, ASNParser.RULE_bitStringType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1233;
			this.match(ASNParser.BIT_LITERAL);
			this.state = 1234;
			this.match(ASNParser.STRING_LITERAL);
			}
			this.state = 1240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1236;
				this.match(ASNParser.L_BRACE);
				this.state = 1237;
				this.namedBitList();
				this.state = 1238;
				this.match(ASNParser.R_BRACE);
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
	public namedBitList(): NamedBitListContext {
		let _localctx: NamedBitListContext = new NamedBitListContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, ASNParser.RULE_namedBitList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1242;
			this.namedBit();
			}
			this.state = 1247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASNParser.COMMA) {
				{
				{
				this.state = 1243;
				this.match(ASNParser.COMMA);
				this.state = 1244;
				this.namedBit();
				}
				}
				this.state = 1249;
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
	public namedBit(): NamedBitContext {
		let _localctx: NamedBitContext = new NamedBitContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, ASNParser.RULE_namedBit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1250;
			this.match(ASNParser.IDENTIFIER);
			this.state = 1251;
			this.match(ASNParser.L_PARAN);
			this.state = 1254;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASNParser.NUMBER:
				{
				this.state = 1252;
				this.match(ASNParser.NUMBER);
				}
				break;
			case ASNParser.IDENTIFIER:
				{
				this.state = 1253;
				this.definedValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1256;
			this.match(ASNParser.R_PARAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanValue(): BooleanValueContext {
		let _localctx: BooleanValueContext = new BooleanValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, ASNParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1258;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASNParser.TRUE_LITERAL) | (1 << ASNParser.FALSE_LITERAL) | (1 << ASNParser.TRUE_SMALL_LITERAL) | (1 << ASNParser.FALSE_SMALL_LITERAL))) !== 0))) {
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

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03j\u04EF\x04\x02" +
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
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x03\x02\x06\x02" +
		"\u012A\n\x02\r\x02\x0E\x02\u012B\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x07\x03\u0134\n\x03\f\x03\x0E\x03\u0137\v\x03\x03\x03\x05\x03" +
		"\u013A\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x05\x04\u0146\n\x04\x03\x05\x03\x05\x05\x05\u014A" +
		"\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0150\n\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0159\n\x07\x03\b" +
		"\x05\b\u015C\n\b\x03\t\x03\t\x03\t\x03\t\x05\t\u0162\n\t\x03\n\x05\n\u0165" +
		"\n\n\x03\v\x03\v\x07\v\u0169\n\v\f\v\x0E\v\u016C\v\v\x03\f\x03\f\x03\f" +
		"\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F" +
		"\u017A\n\x0F\f\x0F\x0E\x0F\u017D\v\x0F\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\u0182\n\x10\x03\x11\x03\x11\x07\x11\u0186\n\x11\f\x11\x0E\x11\u0189\v" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0190\n\x12\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0198\n\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x05\x14\u019E\n\x14\x03\x15\x03\x15\x05\x15\u01A2" +
		"\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x05\x16\u01AC\n\x16\x05\x16\u01AE\n\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x05\x16\u01B6\n\x16\x05\x16\u01B8\n\x16\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x18\x07\x18\u01BF\n\x18\f\x18\x0E\x18\u01C2\v\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01C8\n\x19\x03\x19\x03\x19\x03" +
		"\x19\x05\x19\u01CD\n\x19\x03\x1A\x03\x1A\x05\x1A\u01D1\n\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x07\x1B\u01D6\n\x1B\f\x1B\x0E\x1B\u01D9\v\x1B\x03\x1C\x03" +
		"\x1C\x05\x1C\u01DD\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x05\x1E\u01E6\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01EC" +
		"\n\x1F\x03\x1F\x03\x1F\x05\x1F\u01F0\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05" +
		"\x1F\u01F5\n\x1F\x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x05!\u01FF\n" +
		"!\x03!\x03!\x03!\x03!\x03!\x05!\u0206\n!\x05!\u0208\n!\x03\"\x03\"\x03" +
		"\"\x03\"\x07\"\u020E\n\"\f\"\x0E\"\u0211\v\"\x03\"\x03\"\x03#\x03#\x03" +
		"#\x05#\u0218\n#\x03#\x03#\x03$\x03$\x05$\u021E\n$\x03%\x03%\x05%\u0222" +
		"\n%\x03&\x03&\x03&\x03\'\x03\'\x05\'\u0229\n\'\x03(\x03(\x05(\u022D\n" +
		"(\x03(\x03(\x03(\x05(\u0232\n(\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x03" +
		"+\x03+\x03+\x03+\x07+\u023F\n+\f+\x0E+\u0242\v+\x03+\x03+\x05+\u0246\n" +
		"+\x03,\x03,\x03,\x03,\x03-\x03-\x06-\u024E\n-\r-\x0E-\u024F\x03-\x03-" +
		"\x03.\x03.\x05.\u0256\n.\x03/\x03/\x06/\u025A\n/\r/\x0E/\u025B\x03/\x03" +
		"/\x030\x030\x050\u0262\n0\x031\x031\x032\x032\x032\x033\x033\x033\x05" +
		"3\u026C\n3\x033\x033\x053\u0270\n3\x033\x053\u0273\n3\x033\x053\u0276" +
		"\n3\x053\u0278\n3\x033\x033\x033\x033\x033\x053\u027F\n3\x053\u0281\n" +
		"3\x033\x033\x033\x033\x033\x053\u0288\n3\x053\u028A\n3\x053\u028C\n3\x03" +
		"4\x034\x034\x054\u0291\n4\x035\x035\x035\x055\u0296\n5\x036\x036\x036" +
		"\x036\x056\u029C\n6\x036\x056\u029F\n6\x037\x037\x037\x057\u02A4\n7\x03" +
		"8\x038\x038\x038\x058\u02AA\n8\x039\x039\x039\x039\x059\u02B0\n9\x03:" +
		"\x03:\x03:\x05:\u02B5\n:\x03;\x03;\x05;\u02B9\n;\x03<\x03<\x03<\x03=\x03" +
		"=\x05=\u02C0\n=\x03>\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x05?\u02CB" +
		"\n?\x05?\u02CD\n?\x03?\x03?\x03?\x05?\u02D2\n?\x05?\u02D4\n?\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x07@\u02DC\n@\f@\x0E@\u02DF\v@\x03A\x03A\x03A\x03" +
		"A\x03B\x03B\x03B\x03B\x03B\x05B\u02EA\nB\x05B\u02EC\nB\x03C\x03C\x03D" +
		"\x03D\x03E\x03E\x03E\x05E\u02F5\nE\x03F\x03F\x03F\x03F\x07F\u02FB\nF\f" +
		"F\x0EF\u02FE\vF\x03G\x03G\x03G\x03H\x03H\x03H\x03H\x07H\u0307\nH\fH\x0E" +
		"H\u030A\vH\x03I\x03I\x03J\x03J\x03K\x03K\x03L\x03L\x05L\u0314\nL\x03M" +
		"\x03M\x05M\u0318\nM\x03N\x03N\x05N\u031C\nN\x03N\x05N\u031F\nN\x03N\x03" +
		"N\x05N\u0323\nN\x03N\x03N\x05N\u0327\nN\x03N\x03N\x03N\x03N\x05N\u032D" +
		"\nN\x03O\x03O\x03O\x03O\x05O\u0333\nO\x03P\x03P\x03P\x03P\x05P\u0339\n" +
		"P\x03Q\x03Q\x03Q\x05Q\u033E\nQ\x03R\x03R\x03R\x03R\x05R\u0344\nR\x03S" +
		"\x03S\x03S\x05S\u0349\nS\x03T\x03T\x03T\x03U\x03U\x03U\x03U\x03V\x03V" +
		"\x05V\u0354\nV\x03V\x07V\u0357\nV\fV\x0EV\u035A\vV\x03W\x03W\x03W\x03" +
		"W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x05W\u0369\nW\x03X\x03" +
		"X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u0375\nY\x03Y\x03Y\x03" +
		"Z\x03Z\x03Z\x05Z\u037C\nZ\x03Z\x03Z\x03Z\x05Z\u0381\nZ\x03[\x03[\x03\\" +
		"\x03\\\x03\\\x05\\\u0388\n\\\x03\\\x05\\\u038B\n\\\x03]\x03]\x03]\x05" +
		"]\u0390\n]\x03]\x03]\x03^\x03^\x05^\u0396\n^\x03_\x03_\x03_\x03_\x03_" +
		"\x03_\x07_\u039E\n_\f_\x0E_\u03A1\v_\x03_\x03_\x03`\x03`\x03`\x05`\u03A8" +
		"\n`\x03a\x03a\x03a\x03a\x03a\x03a\x05a\u03B0\na\x03b\x03b\x03c\x03c\x03" +
		"d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03" +
		"d\x03d\x03d\x05d\u03C7\nd\x03e\x05e\u03CA\ne\x03e\x03e\x03e\x03e\x05e" +
		"\u03D0\ne\x05e\u03D2\ne\x03e\x03e\x03e\x05e\u03D7\ne\x05e\u03D9\ne\x03" +
		"f\x03f\x03f\x07f\u03DE\nf\ff\x0Ef\u03E1\vf\x03g\x03g\x03g\x03h\x03h\x03" +
		"i\x03i\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x05j\u03F1\nj\x03k\x03k\x03" +
		"k\x03k\x03l\x03l\x07l\u03F9\nl\fl\x0El\u03FC\vl\x03m\x03m\x03m\x03m\x03" +
		"m\x05m\u0403\nm\x03m\x05m\u0406\nm\x03m\x05m\u0409\nm\x03n\x03n\x05n\u040D" +
		"\nn\x03o\x03o\x03o\x03o\x03p\x03p\x03q\x05q\u0416\nq\x03q\x03q\x03r\x03" +
		"r\x03r\x03r\x03r\x03s\x03s\x03s\x03s\x03s\x03s\x05s\u0425\ns\x03t\x03" +
		"t\x05t\u0429\nt\x03u\x03u\x03u\x07u\u042E\nu\fu\x0Eu\u0431\vu\x03v\x03" +
		"v\x05v\u0435\nv\x03w\x03w\x03w\x03w\x03w\x03x\x03x\x03y\x03y\x03y\x07" +
		"y\u0441\ny\fy\x0Ey\u0444\vy\x03z\x03z\x03z\x03{\x03{\x03{\x03{\x03{\x03" +
		"|\x03|\x03|\x03|\x05|\u0452\n|\x03|\x03|\x05|\u0456\n|\x05|\u0458\n|\x03" +
		"}\x03}\x03~\x03~\x03~\x07~\u045F\n~\f~\x0E~\u0462\v~\x03\x7F\x03\x7F\x03" +
		"\x7F\x05\x7F\u0467\n\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x05\x80\u046D" +
		"\n\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03\x82\x03\x82\x05\x82\u0475\n" +
		"\x82\x03\x83\x03\x83\x03\x83\x05\x83\u047A\n\x83\x03\x84\x03\x84\x03\x84" +
		"\x03\x84\x07\x84\u0480\n\x84\f\x84\x0E\x84\u0483\v\x84\x03\x84\x03\x84" +
		"\x03\x85\x03\x85\x05\x85\u0489\n\x85\x03\x86\x03\x86\x03\x86\x03\x87\x03" +
		"\x87\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87\u0494\n\x87\x03\x88\x03\x88" +
		"\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x05\x89\u049D\n\x89\x03\x8A\x03" +
		"\x8A\x03\x8A\x07\x8A\u04A2\n\x8A\f\x8A\x0E\x8A\u04A5\v\x8A\x03\x8B\x03" +
		"\x8B\x03\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u04AE\n\x8C\x03\x8C" +
		"\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x07\x8C\u04B5\n\x8C\f\x8C\x0E\x8C\u04B8" +
		"\v\x8C\x03\x8C\x03\x8C\x05\x8C\u04BC\n\x8C\x03\x8D\x03\x8D\x03\x8D\x05" +
		"\x8D\u04C1\n\x8D\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x05\x8E\u04C7\n\x8E\x03" +
		"\x8F\x03\x8F\x03\x8F\x07\x8F\u04CC\n\x8F\f\x8F\x0E\x8F\u04CF\v\x8F\x03" +
		"\x90\x03\x90\x03\x90\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03" +
		"\x91\x05\x91\u04DB\n\x91\x03\x92\x03\x92\x03\x92\x07\x92\u04E0\n\x92\f" +
		"\x92\x0E\x92\u04E3\v\x92\x03\x93\x03\x93\x03\x93\x03\x93\x05\x93\u04E9" +
		"\n\x93\x03\x93\x03\x93\x03\x94\x03\x94\x03\x94\x02\x02\x02\x95\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
		"\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6" +
		"\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8" +
		"\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA" +
		"\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC" +
		"\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE" +
		"\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A\x02\u010C" +
		"\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118\x02\u011A" +
		"\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\u0126\x02\x02\t" +
		"\x04\x02HHJK\x03\x02;<\x04\x02\x17\x17jj\x03\x02./\x04\x02--00\x03\x02" +
		"89\x04\x02\x07\b\x12\x13\x02\u0514\x02\u0129\x03\x02\x02\x02\x04\u012D" +
		"\x03\x02\x02\x02\x06\u0145\x03\x02\x02\x02\b\u0149\x03\x02\x02\x02\n\u014F" +
		"\x03\x02\x02\x02\f\u0158\x03\x02\x02\x02\x0E\u015B\x03\x02\x02\x02\x10" +
		"\u0161\x03\x02\x02\x02\x12\u0164\x03\x02\x02\x02\x14\u0166\x03\x02\x02" +
		"\x02\x16\u016D\x03\x02\x02\x02\x18\u0171\x03\x02\x02\x02\x1A\u0174\x03" +
		"\x02\x02\x02\x1C\u0176\x03\x02\x02\x02\x1E\u017E\x03\x02\x02\x02 \u0183" +
		"\x03\x02\x02\x02\"\u018A\x03\x02\x02\x02$\u0191\x03\x02\x02\x02&\u019B" +
		"\x03\x02\x02\x02(\u01A1\x03\x02\x02\x02*\u01B7\x03\x02\x02\x02,\u01B9" +
		"\x03\x02\x02\x02.\u01BB\x03\x02\x02\x020\u01CC\x03\x02\x02\x022\u01D0" +
		"\x03\x02\x02\x024\u01D2\x03\x02\x02\x026\u01DC\x03\x02\x02\x028\u01DE" +
		"\x03\x02\x02\x02:\u01E5\x03\x02\x02\x02<\u01E7\x03\x02\x02\x02>\u01F6" +
		"\x03\x02\x02\x02@\u0207\x03\x02\x02\x02B\u0209\x03\x02\x02\x02D\u0217" +
		"\x03\x02\x02\x02F\u021D\x03\x02\x02\x02H\u0221\x03\x02\x02\x02J\u0223" +
		"\x03\x02\x02\x02L\u0228\x03\x02\x02\x02N\u0231\x03\x02\x02\x02P\u0233" +
		"\x03\x02\x02\x02R\u0235\x03\x02\x02\x02T\u0239\x03\x02\x02\x02V\u0247" +
		"\x03\x02\x02\x02X\u024B\x03\x02\x02\x02Z\u0255\x03\x02\x02\x02\\\u0257" +
		"\x03\x02\x02\x02^\u0261\x03\x02\x02\x02`\u0263\x03\x02\x02\x02b\u0265" +
		"\x03\x02\x02\x02d\u0268\x03\x02\x02\x02f\u028D\x03\x02\x02\x02h\u0295" +
		"\x03\x02\x02\x02j\u0297\x03\x02\x02\x02l\u02A3\x03\x02\x02\x02n\u02A5" +
		"\x03\x02\x02\x02p\u02AB\x03\x02\x02\x02r\u02B4\x03\x02\x02\x02t\u02B8" +
		"\x03\x02\x02\x02v\u02BA\x03\x02\x02\x02x\u02BD\x03\x02\x02\x02z\u02C1" +
		"\x03\x02\x02\x02|\u02D3\x03\x02\x02\x02~\u02D5\x03\x02\x02\x02\x80\u02E0" +
		"\x03\x02\x02\x02\x82\u02E4\x03\x02\x02\x02\x84\u02ED\x03\x02\x02\x02\x86" +
		"\u02EF\x03\x02\x02\x02\x88\u02F4\x03\x02\x02\x02\x8A\u02F6\x03\x02\x02" +
		"\x02\x8C\u02FF\x03\x02\x02\x02\x8E\u0302\x03\x02\x02\x02\x90\u030B\x03" +
		"\x02\x02\x02\x92\u030D\x03\x02\x02\x02\x94\u030F\x03\x02\x02\x02\x96\u0313" +
		"\x03\x02\x02\x02\x98\u0315\x03\x02\x02\x02\x9A\u032C\x03\x02\x02\x02\x9C" +
		"\u032E\x03\x02\x02\x02\x9E\u0334\x03\x02\x02\x02\xA0\u033D\x03\x02\x02" +
		"\x02\xA2\u033F\x03\x02\x02\x02\xA4\u0348\x03\x02\x02\x02\xA6\u034A\x03" +
		"\x02\x02\x02\xA8\u034D\x03\x02\x02\x02\xAA\u0353\x03\x02\x02\x02\xAC\u0368" +
		"\x03\x02\x02\x02\xAE\u036A\x03\x02\x02\x02\xB0\u036E\x03\x02\x02\x02\xB2" +
		"\u0378\x03\x02\x02\x02\xB4\u0382\x03\x02\x02\x02\xB6\u0384\x03\x02\x02" +
		"\x02\xB8\u038C\x03\x02\x02\x02\xBA\u0395\x03\x02\x02\x02\xBC\u0397\x03" +
		"\x02\x02\x02\xBE\u03A7\x03\x02\x02\x02\xC0\u03A9\x03\x02\x02\x02\xC2\u03B1" +
		"\x03\x02\x02\x02\xC4\u03B3\x03\x02\x02\x02\xC6\u03C6\x03\x02\x02\x02\xC8" +
		"\u03D8\x03\x02\x02\x02\xCA\u03DA\x03\x02\x02\x02\xCC\u03E2\x03\x02\x02" +
		"\x02\xCE\u03E5\x03\x02\x02\x02\xD0\u03E7\x03\x02\x02\x02\xD2\u03F0\x03" +
		"\x02\x02\x02\xD4\u03F2\x03\x02\x02\x02\xD6\u03F6\x03\x02\x02\x02\xD8\u0408" +
		"\x03\x02\x02\x02\xDA\u040C\x03\x02\x02\x02\xDC\u040E\x03\x02\x02\x02\xDE" +
		"\u0412\x03\x02\x02\x02\xE0\u0415\x03\x02\x02\x02\xE2\u0419\x03\x02\x02" +
		"\x02\xE4\u041E\x03\x02\x02\x02\xE6\u0428\x03\x02\x02\x02\xE8\u042A\x03" +
		"\x02\x02\x02\xEA\u0434\x03\x02\x02\x02\xEC\u0436\x03\x02\x02\x02\xEE\u043B" +
		"\x03\x02\x02\x02\xF0\u043D\x03\x02\x02\x02\xF2\u0445\x03\x02\x02\x02\xF4" +
		"\u0448\x03\x02\x02\x02\xF6\u044D\x03\x02\x02\x02\xF8\u0459\x03\x02\x02" +
		"\x02\xFA\u045B\x03\x02\x02\x02\xFC\u0466\x03\x02\x02\x02\xFE\u0468\x03" +
		"\x02\x02\x02\u0100\u0470\x03\x02\x02\x02\u0102\u0472\x03\x02\x02\x02\u0104" +
		"\u0476\x03\x02\x02\x02\u0106\u047B\x03\x02\x02\x02\u0108\u0488\x03\x02" +
		"\x02\x02\u010A\u048A\x03\x02\x02\x02\u010C\u0493\x03\x02\x02\x02\u010E" +
		"\u0495\x03\x02\x02\x02\u0110\u0497\x03\x02\x02\x02\u0112\u049E\x03\x02" +
		"\x02\x02\u0114\u04A6\x03\x02\x02\x02\u0116\u04A9\x03\x02\x02\x02\u0118" +
		"\u04C0\x03\x02\x02\x02\u011A\u04C6\x03\x02\x02\x02\u011C\u04C8\x03\x02" +
		"\x02\x02\u011E\u04D0\x03\x02\x02\x02\u0120\u04D3\x03\x02\x02\x02\u0122" +
		"\u04DC\x03\x02\x02\x02\u0124\u04E4\x03\x02\x02\x02\u0126\u04EC\x03\x02" +
		"\x02\x02\u0128\u012A\x05\x04\x03\x02\u0129\u0128\x03\x02\x02\x02\u012A" +
		"\u012B\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012B\u012C\x03\x02" +
		"\x02\x02\u012C\x03\x03\x02\x02\x02\u012D\u0139\x07j\x02\x02\u012E\u0135" +
		"\x07\x15\x02\x02\u012F\u0130\x07j\x02\x02\u0130\u0131\x07\x18\x02\x02" +
		"\u0131\u0132\x07d\x02\x02\u0132\u0134\x07\x19\x02\x02\u0133\u012F\x03" +
		"\x02\x02\x02\u0134\u0137\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135" +
		"\u0136\x03\x02\x02\x02\u0136\u0138\x03\x02\x02\x02\u0137\u0135\x03\x02" +
		"\x02\x02\u0138\u013A\x07\x16\x02\x02\u0139\u012E\x03\x02\x02\x02\u0139" +
		"\u013A\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013C\x07L\x02" +
		"\x02\u013C\u013D\x05\x06\x04\x02\u013D\u013E\x05\b\x05\x02\u013E\u013F" +
		"\x07\x05\x02\x02\u013F\u0140\x07M\x02\x02\u0140\u0141\x05\n\x06\x02\u0141" +
		"\u0142\x07N\x02\x02\u0142\x05\x03\x02\x02\x02\u0143\u0144\t\x02\x02\x02" +
		"\u0144\u0146\x07I\x02\x02\u0145\u0143\x03\x02\x02\x02\u0145\u0146\x03" +
		"\x02\x02\x02\u0146\x07\x03\x02\x02\x02\u0147\u0148\x07F\x02\x02\u0148" +
		"\u014A\x07G\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02" +
		"\x02\u014A\t\x03\x02\x02\x02\u014B\u014C\x05\f\x07\x02\u014C\u014D\x05" +
		"\x10\t\x02\u014D\u014E\x05 \x11\x02\u014E\u0150\x03\x02\x02\x02\u014F" +
		"\u014B\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\v\x03\x02\x02" +
		"\x02\u0151\u0152\x07E\x02\x02\u0152\u0153\x05\x0E\b\x02\u0153\u0154\x07" +
		"C\x02\x02\u0154\u0159\x03\x02\x02\x02\u0155\u0156\x07E\x02\x02\u0156\u0157" +
		"\x07+\x02\x02\u0157\u0159\x07C\x02\x02\u0158\u0151\x03\x02\x02\x02\u0158" +
		"\u0155\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\r\x03\x02\x02" +
		"\x02\u015A\u015C\x05\x1C\x0F\x02\u015B\u015A\x03\x02\x02\x02\u015B\u015C" +
		"\x03\x02\x02\x02\u015C\x0F\x03\x02\x02\x02\u015D\u015E\x07D\x02\x02\u015E" +
		"\u015F\x05\x12\n\x02\u015F\u0160\x07C\x02\x02\u0160\u0162\x03\x02\x02" +
		"\x02\u0161\u015D\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\x11" +
		"\x03\x02\x02\x02\u0163\u0165\x05\x14\v\x02\u0164\u0163\x03\x02\x02\x02" +
		"\u0164\u0165\x03\x02\x02\x02\u0165\x13\x03\x02\x02\x02\u0166\u016A\x05" +
		"\x16\f\x02\u0167\u0169\x05\x16\f\x02\u0168\u0167\x03\x02\x02\x02\u0169" +
		"\u016C\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016A\u016B\x03\x02" +
		"\x02\x02\u016B\x15\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016D\u016E" +
		"\x05\x1C\x0F\x02\u016E\u016F\x075\x02\x02\u016F\u0170\x05\x18\r\x02\u0170" +
		"\x17\x03\x02\x02\x02\u0171\u0172\x07j\x02\x02\u0172\u0173\x05\x1A\x0E" +
		"\x02\u0173\x19\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\x1B\x03" +
		"\x02\x02\x02\u0176\u017B\x05\x1E\x10\x02\u0177\u0178\x07\x17\x02\x02\u0178" +
		"\u017A\x05\x1E\x10\x02\u0179\u0177\x03\x02\x02\x02\u017A\u017D\x03\x02" +
		"\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C" +
		"\x1D\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017E\u0181\x07j\x02" +
		"\x02\u017F\u0180\x07\x15\x02\x02\u0180\u0182\x07\x16\x02\x02\u0181\u017F" +
		"\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\x1F\x03\x02\x02\x02" +
		"\u0183\u0187\x05\"\x12\x02\u0184\u0186\x05\"\x12\x02\u0185\u0184\x03\x02" +
		"\x02\x02\u0186\u0189\x03\x02\x02\x02\u0187\u0185\x03\x02\x02\x02\u0187" +
		"\u0188\x03\x02\x02\x02\u0188!\x03\x02\x02\x02\u0189\u0187\x03\x02\x02" +
		"\x02\u018A\u018F\x07j\x02\x02\u018B\u0190\x05\xA8U\x02\u018C\u0190\x05" +
		"\xA6T\x02\u018D\u0190\x05@!\x02\u018E\u0190\x05J&\x02\u018F\u018B\x03" +
		"\x02\x02\x02\u018F\u018C\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u018F" +
		"\u018E\x03\x02\x02\x02\u0190#\x03\x02\x02\x02\u0191\u0192\x07$\x02\x02" +
		"\u0192\u0197\x07\x15\x02\x02\u0193\u0194\x05&\x14\x02\u0194\u0195\x05" +
		"(\x15\x02\u0195\u0198\x03\x02\x02\x02\u0196\u0198\x05*\x16\x02\u0197\u0193" +
		"\x03\x02\x02\x02\u0197\u0196\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02" +
		"\u0198\u0199\x03\x02\x02\x02\u0199\u019A\x07\x16\x02\x02\u019A%\x03\x02" +
		"\x02\x02\u019B\u019D\x07\v\x02\x02\u019C\u019E\x05\u010A\x86\x02\u019D" +
		"\u019C\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\'\x03\x02\x02" +
		"\x02\u019F\u01A0\x07\x17\x02\x02\u01A0\u01A2\x07\v\x02\x02\u01A1\u019F" +
		"\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2)\x03\x02\x02\x02\u01A3" +
		"\u01AD\x05,\x17\x02\u01A4\u01A5\x07\x17\x02\x02\u01A5\u01A6\x05&\x14\x02" +
		"\u01A6\u01AB\x052\x1A\x02\u01A7\u01AC\x05(\x15\x02\u01A8\u01A9\x07c\x02" +
		"\x02\u01A9\u01AA\x07\x17\x02\x02\u01AA\u01AC\x05,\x17\x02\u01AB\u01A7" +
		"\x03\x02\x02\x02\u01AB\u01A8\x03\x02\x02\x02\u01AC\u01AE\x03\x02\x02\x02" +
		"\u01AD\u01A4\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B8\x03" +
		"\x02\x02\x02\u01AF\u01B0\x05&\x14\x02\u01B0\u01B5\x052\x1A\x02\u01B1\u01B6" +
		"\x05(\x15\x02\u01B2\u01B3\x07c\x02\x02\u01B3\u01B4\x07\x17\x02\x02\u01B4" +
		"\u01B6\x05,\x17\x02\u01B5\u01B1\x03\x02\x02\x02\u01B5\u01B2\x03\x02\x02" +
		"\x02\u01B6\u01B8\x03\x02\x02\x02\u01B7\u01A3\x03\x02\x02\x02\u01B7\u01AF" +
		"\x03\x02\x02\x02\u01B8+\x03\x02\x02\x02\u01B9\u01BA\x05.\x18\x02\u01BA" +
		"-\x03\x02\x02\x02\u01BB\u01C0\x050\x19\x02\u01BC\u01BD\x07\x17\x02\x02" +
		"\u01BD\u01BF\x050\x19\x02\u01BE\u01BC\x03\x02\x02\x02\u01BF\u01C2\x03" +
		"\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C0\u01C1";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u01C1/\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C3" +
		"\u01C7\x05\xF2z\x02\u01C4\u01C8\x07%\x02\x02\u01C5\u01C6\x07&\x02\x02" +
		"\u01C6\u01C8\x05\xD0i\x02\u01C7\u01C4\x03\x02\x02\x02\u01C7\u01C5\x03" +
		"\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01CD\x03\x02\x02\x02\u01C9" +
		"\u01CA\x07\'\x02\x02\u01CA\u01CB\x07(\x02\x02\u01CB\u01CD\x05\xAAV\x02" +
		"\u01CC\u01C3\x03\x02\x02\x02\u01CC\u01C9\x03\x02\x02\x02\u01CD1\x03\x02" +
		"\x02\x02\u01CE\u01CF\x07\x17\x02\x02\u01CF\u01D1\x054\x1B\x02\u01D0\u01CE" +
		"\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D13\x03\x02\x02\x02\u01D2" +
		"\u01D7\x056\x1C\x02\u01D3\u01D4\x07\x17\x02\x02\u01D4\u01D6\x056\x1C\x02" +
		"\u01D5\u01D3\x03\x02\x02\x02\u01D6\u01D9\x03\x02\x02\x02\u01D7\u01D5\x03" +
		"\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D85\x03\x02\x02\x02\u01D9" +
		"\u01D7\x03\x02\x02\x02\u01DA\u01DD\x050\x19\x02\u01DB\u01DD\x058\x1D\x02" +
		"\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DB\x03\x02\x02\x02\u01DD7\x03\x02" +
		"\x02\x02\u01DE\u01DF\x07O\x02\x02\u01DF\u01E0\x05:\x1E\x02\u01E0\u01E1" +
		"\x05.\x18\x02\u01E1\u01E2\x07P\x02\x02\u01E29\x03\x02\x02\x02\u01E3\u01E4" +
		"\x07d\x02\x02\u01E4\u01E6\x07Q\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E5" +
		"\u01E6\x03\x02\x02\x02\u01E6;\x03\x02\x02\x02\u01E7\u01EF\x07$\x02\x02" +
		"\u01E8\u01EB\x07\x18\x02\x02\u01E9\u01EC\x05\xB8]\x02\u01EA\u01EC\x05" +
		"> \x02\u01EB\u01E9\x03\x02\x02\x02\u01EB\u01EA\x03\x02\x02\x02\u01EC\u01ED" +
		"\x03\x02\x02\x02\u01ED\u01EE\x07\x19\x02\x02\u01EE\u01F0\x03\x02\x02\x02" +
		"\u01EF\u01E8\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F1\x03" +
		"\x02\x02\x02\u01F1\u01F4\x07(\x02\x02\u01F2\u01F5\x05\xAAV\x02\u01F3\u01F5" +
		"\x05\xF2z\x02\u01F4\u01F2\x03\x02\x02\x02\u01F4\u01F3\x03\x02\x02\x02" +
		"\u01F5=\x03\x02\x02\x02\u01F6\u01F7\x074\x02\x02\u01F7\u01F8\x05\xB8]" +
		"\x02\u01F8?\x03\x02\x02\x02\u01F9\u01FA\x05B\"\x02\u01FA\u01FE\x07\x05" +
		"\x02\x02\u01FB\u01FF\x05\xAAV\x02\u01FC\u01FF\x05\xD0i\x02\u01FD\u01FF" +
		"\x05\x80A\x02\u01FE\u01FB\x03\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02" +
		"\u01FE\u01FD\x03\x02\x02\x02\u01FF\u0208\x03\x02\x02\x02\u0200\u0201\x05" +
		"N(\x02\u0201\u0205\x07\x05\x02\x02\u0202\u0206\x05t;\x02\u0203\u0206\x05" +
		"L\'\x02\u0204\u0206\x05z>\x02\u0205\u0202\x03\x02\x02\x02\u0205\u0203" +
		"\x03\x02\x02\x02\u0205\u0204\x03\x02\x02\x02\u0206\u0208\x03\x02\x02\x02" +
		"\u0207\u01F9\x03\x02\x02\x02\u0207\u0200\x03\x02\x02\x02\u0208A\x03\x02" +
		"\x02\x02\u0209\u020A\x07\x15\x02\x02\u020A\u020F\x05D#\x02\u020B\u020C" +
		"\x07\x17\x02\x02\u020C\u020E\x05D#\x02\u020D\u020B\x03\x02\x02\x02\u020E" +
		"\u0211\x03\x02\x02\x02\u020F\u020D\x03\x02\x02\x02\u020F\u0210\x03\x02" +
		"\x02\x02\u0210\u0212\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02\u0212" +
		"\u0213\x07\x16\x02\x02\u0213C\x03\x02\x02\x02\u0214\u0215\x05F$\x02\u0215" +
		"\u0216\x07Q\x02\x02\u0216\u0218\x03\x02\x02\x02\u0217\u0214\x03\x02\x02" +
		"\x02\u0217\u0218\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u021A" +
		"\x07j\x02\x02\u021AE\x03\x02\x02\x02\u021B\u021E\x05H%\x02\u021C\u021E" +
		"\x07j\x02\x02\u021D\u021B\x03\x02\x02\x02\u021D\u021C\x03\x02\x02\x02" +
		"\u021EG\x03\x02\x02\x02\u021F\u0222\x05\xAAV\x02\u0220\u0222\x05N(\x02" +
		"\u0221\u021F\x03\x02\x02\x02\u0221\u0220\x03\x02\x02\x02\u0222I\x03\x02" +
		"\x02\x02\u0223\u0224\x07\x05\x02\x02\u0224\u0225\x05L\'\x02\u0225K\x03" +
		"\x02\x02\x02\u0226\u0229\x05N(\x02\u0227\u0229\x05T+\x02\u0228\u0226\x03" +
		"\x02\x02\x02\u0228\u0227\x03\x02\x02\x02\u0229M\x03\x02\x02\x02\u022A" +
		"\u022B\x07j\x02\x02\u022B\u022D\x07\t\x02\x02\u022C\u022A\x03\x02\x02" +
		"\x02\u022C\u022D\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E\u0232" +
		"\x07j\x02\x02\u022F\u0232\x07;\x02\x02\u0230\u0232\x07<\x02\x02\u0231" +
		"\u022C\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0230\x03\x02" +
		"\x02\x02\u0232O\x03\x02\x02\x02\u0233\u0234\t\x03\x02\x02\u0234Q\x03\x02" +
		"\x02\x02\u0235\u0236\x07j\x02\x02\u0236\u0237\x07\t\x02\x02\u0237\u0238" +
		"\x07j\x02\x02\u0238S\x03\x02\x02\x02\u0239\u023A\x07=\x02\x02\u023A\u023B" +
		"\x07\x15\x02\x02\u023B\u0240\x05d3\x02\u023C\u023D\x07\x17\x02\x02\u023D" +
		"\u023F\x05d3\x02\u023E\u023C\x03\x02\x02\x02\u023F\u0242\x03\x02\x02\x02" +
		"\u0240\u023E\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u0243\x03" +
		"\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0243\u0245\x07\x16\x02\x02\u0244" +
		"\u0246\x05V,\x02\u0245\u0244\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02" +
		"\u0246U\x03\x02\x02\x02\u0247\u0248\x076\x02\x02\u0248\u0249\x07?\x02" +
		"\x02\u0249\u024A\x05X-\x02\u024AW\x03\x02\x02\x02\u024B\u024D\x07\x15" +
		"\x02\x02\u024C\u024E\x05Z.\x02\u024D\u024C\x03\x02\x02\x02\u024E\u024F" +
		"\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02" +
		"\u0250\u0251\x03\x02\x02\x02\u0251\u0252\x07\x16\x02\x02\u0252Y\x03\x02" +
		"\x02\x02\u0253\u0256\x05^0\x02\u0254\u0256\x05\\/\x02\u0255\u0253\x03" +
		"\x02\x02\x02\u0255\u0254\x03\x02\x02\x02\u0256[\x03\x02\x02\x02\u0257" +
		"\u0259\x07@\x02\x02\u0258\u025A\x05Z.\x02\u0259\u0258\x03\x02\x02\x02" +
		"\u025A\u025B\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025B\u025C\x03" +
		"\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025E\x07A\x02\x02\u025E" +
		"]\x03\x02\x02\x02\u025F\u0262\x05`1\x02\u0260\u0262\x05b2\x02\u0261\u025F" +
		"\x03\x02\x02\x02\u0261\u0260\x03\x02\x02\x02\u0262_\x03\x02\x02\x02\u0263" +
		"\u0264\t\x04\x02\x02\u0264a\x03\x02\x02\x02\u0265\u0266\x07\r\x02\x02" +
		"\u0266\u0267\x07j\x02\x02\u0267c\x03\x02\x02\x02\u0268\u0269\x07\r\x02" +
		"\x02\u0269\u028B\x07j\x02\x02\u026A\u026C\x05h5\x02\u026B\u026A\x03\x02" +
		"\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C\u028C\x03\x02\x02\x02\u026D" +
		"\u0277\x05\xAAV\x02\u026E\u0270\x05r:\x02\u026F\u026E\x03\x02\x02\x02" +
		"\u026F\u0270\x03\x02\x02\x02\u0270\u0278\x03\x02\x02\x02\u0271\u0273\x07" +
		">\x02\x02\u0272\u0271\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273" +
		"\u0275\x03\x02\x02\x02\u0274\u0276\x05l7\x02\u0275\u0274\x03\x02\x02\x02" +
		"\u0275\u0276\x03\x02\x02\x02\u0276\u0278\x03\x02\x02\x02\u0277\u026F\x03" +
		"\x02\x02\x02\u0277\u0272\x03\x02\x02\x02\u0278\u028C\x03\x02\x02\x02\u0279" +
		"\u0280\x05~@\x02\u027A\u0281\x07%\x02\x02\u027B\u027E\x07&\x02\x02\u027C" +
		"\u027F\x05\x80A\x02\u027D\u027F\x05\xD0i\x02\u027E\u027C\x03\x02\x02\x02" +
		"\u027E\u027D\x03\x02\x02\x02\u027F\u0281\x03\x02\x02\x02\u0280\u027A\x03" +
		"\x02\x02\x02\u0280\u027B\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281" +
		"\u028C\x03\x02\x02\x02\u0282\u0289\x05N(\x02\u0283\u028A\x07%\x02\x02" +
		"\u0284\u0287\x07&\x02\x02\u0285\u0288\x05z>\x02\u0286\u0288\x05t;\x02" +
		"\u0287\u0285\x03\x02\x02\x02\u0287\u0286\x03\x02\x02\x02\u0288\u028A\x03" +
		"\x02\x02\x02\u0289\u0283\x03\x02\x02\x02\u0289\u0284\x03\x02\x02\x02\u0289" +
		"\u028A\x03\x02\x02\x02\u028A\u028C\x03\x02\x02\x02\u028B\u026B\x03\x02" +
		"\x02\x02\u028B\u026D\x03\x02\x02\x02\u028B\u0279\x03\x02\x02\x02\u028B" +
		"\u0282\x03\x02\x02\x02\u028Ce\x03\x02\x02\x02\u028D\u028E\x07\r\x02\x02" +
		"\u028E\u0290\x07j\x02\x02\u028F\u0291\x05h5\x02\u0290\u028F\x03\x02\x02" +
		"\x02\u0290\u0291\x03\x02\x02\x02\u0291g\x03\x02\x02\x02\u0292\u0296\x07" +
		"%\x02\x02\u0293\u0294\x07&\x02\x02\u0294\u0296\x05\xAAV\x02\u0295\u0292" +
		"\x03\x02\x02\x02\u0295\u0293\x03\x02\x02\x02\u0296i\x03\x02\x02\x02\u0297" +
		"\u0298\x07\r\x02\x02\u0298\u0299\x07j\x02\x02\u0299\u029B\x05\xAAV\x02" +
		"\u029A\u029C\x07>\x02\x02\u029B\u029A\x03\x02\x02\x02\u029B\u029C\x03" +
		"\x02\x02\x02\u029C\u029E\x03\x02\x02\x02\u029D\u029F\x05l7\x02\u029E\u029D" +
		"\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029Fk\x03\x02\x02\x02\u02A0" +
		"\u02A4\x07%\x02\x02\u02A1\u02A2\x07&\x02\x02\u02A2\u02A4\x05\xD0i\x02" +
		"\u02A3\u02A0\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A4m\x03\x02" +
		"\x02\x02\u02A5\u02A6\x07\r\x02\x02\u02A6\u02A7\x07j\x02\x02\u02A7\u02A9" +
		"\x05~@\x02\u02A8\u02AA\x05l7\x02\u02A9\u02A8\x03\x02\x02\x02\u02A9\u02AA" +
		"\x03\x02\x02\x02\u02AAo\x03\x02\x02\x02\u02AB\u02AC\x07\r\x02\x02\u02AC" +
		"\u02AD\x07j\x02\x02\u02AD\u02AF\x05\xAAV\x02\u02AE\u02B0\x05r:\x02\u02AF" +
		"\u02AE\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0q\x03\x02\x02" +
		"\x02\u02B1\u02B5\x07%\x02\x02\u02B2\u02B3\x07&\x02\x02\u02B3\u02B5\x05" +
		"\x80A\x02\u02B4\u02B1\x03\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B5" +
		"s\x03\x02\x02\x02\u02B6\u02B9\x05x=\x02\u02B7\u02B9\x05v<\x02\u02B8\u02B6" +
		"\x03\x02\x02\x02\u02B8\u02B7\x03\x02\x02\x02\u02B9u\x03\x02\x02\x02\u02BA" +
		"\u02BB\x05x=\x02\u02BB\u02BC\x05\u0106\x84\x02\u02BCw\x03\x02\x02\x02" +
		"\u02BD\u02BF\x07j\x02\x02\u02BE\u02C0\x07\t\x02\x02\u02BF\u02BE\x03\x02" +
		"\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0y\x03\x02\x02\x02\u02C1\u02C2" +
		"\x07\x15\x02\x02\u02C2\u02C3\x05|?\x02\u02C3\u02C4\x07\x16\x02\x02\u02C4" +
		"{\x03\x02\x02\x02\u02C5\u02CC\x05\x84C\x02\u02C6\u02C7\x07\x17\x02\x02" +
		"\u02C7\u02CA\x07\v\x02\x02\u02C8\u02C9\x07\x17\x02\x02\u02C9\u02CB\x05" +
		"\x86D\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB" +
		"\u02CD\x03\x02\x02\x02\u02CC\u02C6\x03\x02\x02\x02\u02CC\u02CD\x03\x02" +
		"\x02\x02\u02CD\u02D4\x03\x02\x02\x02\u02CE\u02D1\x07\v\x02\x02\u02CF\u02D0" +
		"\x07\x17\x02\x02\u02D0\u02D2\x05\x86D\x02\u02D1\u02CF\x03\x02\x02\x02" +
		"\u02D1\u02D2\x03\x02\x02\x02\u02D2\u02D4\x03\x02\x02\x02\u02D3\u02C5\x03" +
		"\x02\x02\x02\u02D3\u02CE\x03\x02\x02\x02\u02D4}\x03\x02\x02\x02\u02D5" +
		"\u02D6\x07\r\x02\x02\u02D6\u02D7\x07j\x02\x02\u02D7\u02DD\x03\x02\x02" +
		"\x02\u02D8\u02D9\x07\r\x02\x02\u02D9\u02DA\x07j\x02\x02\u02DA\u02DC\x07" +
		"\t\x02\x02\u02DB\u02D8\x03\x02\x02\x02\u02DC\u02DF\x03\x02\x02\x02\u02DD" +
		"\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\x7F\x03\x02\x02" +
		"\x02\u02DF\u02DD\x03\x02\x02\x02\u02E0\u02E1\x07\x15\x02\x02\u02E1\u02E2" +
		"\x05\x82B\x02\u02E2\u02E3\x07\x16\x02\x02\u02E3\x81\x03\x02\x02\x02\u02E4" +
		"\u02EB\x05\x84C\x02\u02E5\u02E6\x07\x17\x02\x02\u02E6\u02E9\x07\v\x02" +
		"\x02\u02E7\u02E8\x07\x17\x02\x02\u02E8\u02EA\x05\x86D\x02\u02E9\u02E7" +
		"\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02EC\x03\x02\x02\x02" +
		"\u02EB\u02E5\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\x83\x03" +
		"\x02\x02\x02\u02ED\u02EE\x05\x88E\x02\u02EE\x85\x03\x02\x02\x02\u02EF" +
		"\u02F0\x05\x88E\x02\u02F0\x87\x03\x02\x02\x02\u02F1\u02F5\x05\x8AF\x02" +
		"\u02F2\u02F3\x07+\x02\x02\u02F3\u02F5\x05\x8CG\x02\u02F4\u02F1\x03\x02" +
		"\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F5\x89\x03\x02\x02\x02\u02F6\u02FC" +
		"\x05\x8EH\x02\u02F7\u02F8\x05\x90I\x02\u02F8\u02F9\x05\x8EH\x02\u02F9" +
		"\u02FB\x03\x02\x02\x02\u02FA\u02F7\x03\x02\x02\x02\u02FB\u02FE\x03\x02" +
		"\x02\x02\u02FC\u02FA\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD" +
		"\x8B\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FF\u0300\x07,\x02" +
		"\x02\u0300\u0301\x05\x94K\x02\u0301\x8D\x03\x02\x02\x02\u0302\u0308\x05" +
		"\x98M\x02\u0303\u0304\x05\x92J\x02\u0304\u0305\x05\x98M\x02\u0305\u0307" +
		"\x03\x02\x02\x02\u0306\u0303\x03\x02\x02\x02\u0307\u030A\x03\x02\x02\x02" +
		"\u0308\u0306\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\x8F\x03" +
		"\x02\x02\x02\u030A\u0308\x03\x02\x02\x02\u030B\u030C\t\x05\x02\x02\u030C" +
		"\x91\x03\x02\x02\x02\u030D\u030E\t\x06\x02\x02\u030E\x93\x03\x02\x02\x02" +
		"\u030F\u0310\x05\x9AN\x02\u0310\x95\x03\x02\x02\x02\u0311\u0314\x05t;" +
		"\x02\u0312\u0314\x05x=\x02\u0313\u0311\x03\x02\x02\x02\u0313\u0312\x03" +
		"\x02\x02\x02\u0314\x97\x03\x02\x02\x02\u0315\u0317\x05\x94K\x02\u0316" +
		"\u0318\x05\x8CG\x02\u0317\u0316\x03\x02\x02\x02\u0317\u0318\x03\x02\x02" +
		"\x02\u0318\x99\x03\x02\x02\x02\u0319\u031C\x05\xD0i\x02\u031A\u031C\x07" +
		"2\x02\x02\u031B\u0319\x03\x02\x02\x02\u031B\u031A\x03\x02\x02\x02\u031C" +
		"\u031E\x03\x02\x02\x02\u031D\u031F\x07\x0E\x02\x02\u031E\u031D\x03\x02" +
		"\x02\x02\u031E\u031F\x03\x02\x02\x02\u031F\u0320\x03\x02\x02\x02\u0320" +
		"\u0322\x07\n\x02\x02\u0321\u0323\x07\x0E\x02\x02\u0322\u0321\x03\x02\x02" +
		"\x02\u0322\u0323\x03\x02\x02\x02\u0323\u0326\x03\x02\x02\x02\u0324\u0327" +
		"\x05\xD0i\x02\u0325\u0327\x073\x02\x02\u0326\u0324\x03\x02\x02\x02\u0326" +
		"\u0325\x03\x02\x02\x02\u0327\u032D\x03\x02\x02\x02\u0328\u032D\x05> \x02" +
		"\u0329\u032A\x07:\x02\x02\u032A\u032D\x05\xD0i\x02\u032B\u032D\x05\xD0" +
		"i\x02\u032C\u031B\x03\x02\x02\x02\u032C\u0328\x03\x02\x02\x02\u032C\u0329" +
		"\x03\x02\x02\x02\u032C\u032B\x03\x02\x02\x02\u032D\x9B\x03\x02\x02\x02" +
		"\u032E\u032F\x07\r\x02\x02\u032F\u0330\x07j\x02\x02\u0330\u0332\x05~@" +
		"\x02\u0331\u0333\x05r:\x02\u0332\u0331\x03\x02\x02\x02\u0332\u0333\x03" +
		"\x02\x02\x02\u0333\x9D\x03\x02\x02\x02\u0334\u0335\x07\r\x02\x02\u0335" +
		"\u0336\x07j\x02\x02\u0336\u0338\x05N(\x02\u0337\u0339\x05\xA0Q\x02\u0338" +
		"\u0337\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\x9F\x03\x02\x02" +
		"\x02\u033A\u033E\x07%\x02\x02\u033B\u033C\x07&\x02\x02\u033C\u033E\x05" +
		"t;\x02\u033D\u033A\x03\x02\x02\x02\u033D\u033B\x03\x02\x02\x02\u033E\xA1" +
		"\x03\x02\x02\x02\u033F\u0340\x07\r\x02\x02\u0340\u0341\x07j\x02\x02\u0341" +
		"\u0343\x05N(\x02\u0342\u0344\x05\xA4S\x02\u0343\u0342\x03\x02\x02\x02" +
		"\u0343\u0344\x03\x02\x02\x02\u0344\xA3\x03\x02\x02\x02\u0345\u0349\x07" +
		"%\x02\x02\u0346\u0347\x07&\x02\x02\u0347\u0349\x05z>\x02\u0348\u0345\x03" +
		"\x02\x02\x02\u0348\u0346\x03\x02\x02\x02\u0349\xA5\x03\x02\x02\x02\u034A" +
		"\u034B\x07\x05\x02\x02\u034B\u034C\x05\xAAV\x02\u034C\xA7\x03\x02\x02" +
		"\x02\u034D\u034E\x05\xAAV\x02\u034E\u034F\x07\x05\x02\x02\u034F\u0350" +
		"\x05\xD0i\x02\u0350\xA9\x03\x02\x02\x02\u0351\u0354\x05\xACW\x02\u0352" +
		"\u0354\x05\xB4[\x02\u0353\u0351\x03\x02\x02\x02\u0353\u0352\x03\x02\x02" +
		"\x02\u0354\u0358\x03\x02\x02\x02\u0355\u0357\x05\xB8]\x02\u0356\u0355" +
		"\x03\x02\x02\x02\u0357\u035A\x03\x02\x02\x02\u0358\u0356\x03\x02\x02\x02" +
		"\u0358\u0359\x03\x02\x02\x02\u0359\xAB\x03\x02\x02\x02\u035A\u0358\x03" +
		"\x02\x02\x02\u035B\u0369\x05\u011E\x90\x02\u035C\u0369\x05\u0120\x91\x02" +
		"\u035D\u0369\x05\xE2r\x02\u035E\u0369\x05\xF4{\x02\u035F\u0369\x05\u0110" +
		"\x89\x02\u0360\u0369\x05$\x13\x02\u0361\u0369\x05<\x1F\x02\u0362\u0369" +
		"\x05\xB0Y\x02\u0363\u0369\x05\xB2Z\x02\u0364\u0369\x05\u0114\x8B\x02\u0365" +
		"\u0369\x05\xAEX\x02\u0366\u0369\x07\x06\x02\x02\u0367\u0369\x07#\x02\x02" +
		"\u0368\u035B\x03\x02\x02\x02\u0368\u035C\x03\x02\x02\x02\u0368\u035D\x03" +
		"\x02\x02\x02\u0368\u035E\x03\x02\x02\x02\u0368\u035F\x03\x02\x02\x02\u0368" +
		"\u0360\x03\x02\x02\x02\u0368\u0361\x03\x02\x02\x02\u0368\u0362\x03\x02" +
		"\x02\x02\u0368\u0363\x03\x02\x02\x02\u0368\u0364\x03\x02\x02\x02\u0368" +
		"\u0365\x03\x02\x02\x02\u0368\u0366\x03\x02\x02\x02\u0368\u0367\x03\x02" +
		"\x02\x02\u0369\xAD\x03\x02\x02\x02\u036A\u036B\x05N(\x02\u036B\u036C\x07" +
		"\t\x02\x02\u036C\u036D\x05~@\x02\u036D\xAF\x03\x02\x02\x02\u036E\u036F" +
		"\x07)\x02\x02\u036F\u0374\x07\x15\x02\x02\u0370\u0371\x05&\x14\x02\u0371" +
		"\u0372\x05(\x15\x02\u0372\u0375\x03\x02\x02\x02\u0373\u0375\x05*\x16\x02" +
		"\u0374\u0370\x03\x02\x02\x02\u0374\u0373\x03\x02\x02\x02\u0374\u0375\x03" +
		"\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u0377\x07\x16\x02\x02\u0377" +
		"\xB1\x03\x02\x02\x02\u0378\u037B\x07)\x02\x02\u0379\u037C\x05\xB8]\x02" +
		"\u037A\u037C\x05> \x02\u037B\u0379\x03\x02\x02\x02\u037B\u037A\x03\x02" +
		"\x02\x02\u037B\u037C\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D" +
		"\u0380\x07(\x02\x02\u037E\u0381\x05\xAAV\x02\u037F\u0381\x05\xF2z\x02" +
		"\u0380\u037E\x03\x02\x02\x02\u0380\u037F\x03\x02\x02\x02\u0381\xB3\x03" +
		"\x02\x02\x02\u0382\u0383\x05\xB6\\\x02\u0383\xB5\x03\x02\x02\x02\u0384" +
		"\u0387\x07j\x02\x02\u0385\u0386\x07\t\x02\x02\u0386\u0388\x07j\x02\x02" +
		"\u0387\u0385\x03\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388\u038A\x03" +
		"\x02\x02\x02\u0389\u038B\x05\u0106\x84\x02\u038A\u0389\x03\x02\x02\x02" +
		"\u038A\u038B\x03\x02\x02\x02\u038B\xB7\x03\x02\x02\x02\u038C\u038D\x07" +
		"\x18\x02\x02\u038D\u038F\x05\xBA^\x02\u038E\u0390\x05\u010A\x86\x02\u038F" +
		"\u038E\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390\u0391\x03\x02" +
		"\x02\x02\u0391\u0392\x07\x19\x02\x02\u0392\xB9\x03\x02\x02\x02\u0393\u0396" +
		"\x05\xBE`\x02\u0394\u0396\x05\xCEh\x02\u0395\u0393\x03\x02\x02\x02\u0395" +
		"\u0394\x03\x02\x02\x02\u0396\xBB\x03\x02\x02\x02\u0397\u0398\x07]\x02" +
		"\x02\u0398\u0399\x07^\x02\x02\u0399\u039A\x07\x15\x02\x02\u039A\u039F" +
		"\x05\xC0a\x02\u039B\u039C\x07\x17\x02\x02\u039C\u039E\x05\xC0a\x02\u039D" +
		"\u039B\x03\x02\x02\x02\u039E\u03A1\x03\x02\x02\x02\u039F\u039D\x03\x02" +
		"\x02\x02\u039F\u03A0\x03\x02\x02\x02\u03A0\u03A2\x03\x02\x02\x02\u03A1" +
		"\u039F\x03\x02\x02\x02\u03A2\u03A3\x07\x16\x02\x02\u03A3\xBD\x03\x02\x02" +
		"\x02\u03A4\u03A8\x05\xBC_\x02\u03A5\u03A8\x05\xC2b\x02\u03A6\u03A8\x05" +
		"\xC6d\x02\u03A7\u03A4\x03\x02\x02\x02\u03A7\u03A5\x03\x02\x02\x02\u03A7" +
		"\u03A6\x03\x02\x02\x02\u03A8\xBF\x03\x02\x02\x02\u03A9\u03AF\x05H%\x02" +
		"\u03AA\u03AB\x07Q\x02\x02\u03AB\u03B0\x05\xD0i\x02\u03AC\u03B0\x05\x80" +
		"A\x02\u03AD\u03B0\x05t;\x02\u03AE\u03B0\x05z>\x02\u03AF\u03AA\x03\x02" +
		"\x02\x02\u03AF\u03AC\x03\x02\x02\x02\u03AF\u03AD\x03\x02\x02\x02\u03AF" +
		"\u03AE\x03\x02\x02\x02\u03AF\u03B0\x03\x02\x02\x02\u03B0\xC1\x03\x02\x02" +
		"\x02\u03B1\u03B2\x05\u0116\x8C\x02\u03B2\xC3\x03\x02\x02\x02\u03B3\u03B4" +
		"\x05z>\x02\u03B4\xC5\x03\x02\x02\x02\u03B5\u03B6\x07!\x02\x02\u03B6\u03C7" +
		"\x05\xAAV\x02\u03B7\u03B8\x07`\x02\x02\u03B8\u03B9\x07^\x02\x02\u03B9" +
		"\u03C7\x05\xD0i\x02\u03BA\u03BB\x07!\x02\x02\u03BB\u03BC\x05\xAAV\x02" +
		"\u03BC\u03BD\x07`\x02\x02\u03BD\u03BE\x07^\x02\x02\u03BE\u03BF\x05\xD0" +
		"i\x02\u03BF\u03C7\x03\x02\x02\x02\u03C0\u03C1\x076\x02\x02\u03C1\u03C2" +
		"\x07\'\x02\x02\u03C2\u03C3\x07\x15\x02\x02\u03C3\u03C4\x05\xC8e\x02\u03C4" +
		"\u03C5\x07\x16\x02\x02\u03C5\u03C7\x03\x02\x02\x02\u03C6\u03B5\x03\x02" +
		"\x02\x02\u03C6\u03B7\x03\x02\x02\x02\u03C6\u03BA\x03\x02\x02\x02\u03C6" +
		"\u03C0\x03\x02\x02\x02\u03C7\xC7\x03\x02\x02\x02\u03C8\u03CA\x05\xCAf" +
		"\x02\u03C9\u03C8\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03D1" +
		"\x03\x02\x02\x02\u03CB\u03CC\x07\x17\x02\x02\u03CC\u03CF\x07\v\x02\x02" +
		"\u03CD\u03CE\x07\x17\x02\x02\u03CE\u03D0\x05\xCAf\x02\u03CF\u03CD\x03" +
		"\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02\u03D0\u03D2\x03\x02\x02\x02\u03D1" +
		"\u03CB\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2\u03D9\x03\x02" +
		"\x02\x02\u03D3\u03D6\x07\v\x02\x02\u03D4\u03D5\x07\x17\x02\x02\u03D5\u03D7" +
		"\x05\xCAf\x02\u03D6\u03D4\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02" +
		"\u03D7\u03D9\x03\x02\x02\x02\u03D8\u03C9\x03\x02\x02\x02\u03D8\u03D3\x03" +
		"\x02\x02\x02\u03D9\xC9\x03\x02\x02\x02\u03DA\u03DF\x05\xCCg\x02\u03DB" +
		"\u03DC\x07\x17\x02\x02\u03DC\u03DE\x05\xCCg\x02\u03DD\u03DB\x03\x02\x02" +
		"\x02\u03DE\u03E1\x03\x02\x02\x02\u03DF\u03DD\x03\x02\x02\x02\u03DF\u03E0" +
		"\x03\x02\x02\x02\u03E0\xCB\x03\x02\x02\x02\u03E1\u03DF\x03\x02\x02\x02" +
		"\u03E2\u03E3\x07j\x02\x02\u03E3\u03E4\t\x07\x02\x02\u03E4\xCD\x03\x02" +
		"\x02\x02\u03E5\u03E6\x05\x82B\x02\u03E6\xCF\x03\x02\x02\x02\u03E7\u03E8" +
		"\x05\xD2j\x02\u03E8\xD1\x03\x02\x02\x02\u03E9\u03F1\x05\xDEp\x02\u03EA" +
		"\u03F1\x05\xDAn\x02\u03EB\u03F1\x05\xDCo\x02\u03EC\u03F1\x05\xD4k\x02" +
		"\u03ED\u03F1\x05\u0126\x94\x02\u03EE\u03F1\x07i\x02\x02\u03EF\u03F1\x07" +
		"g\x02\x02\u03F0\u03E9\x03\x02\x02\x02\u03F0\u03EA\x03\x02\x02\x02\u03F0" +
		"\u03EB\x03\x02\x02\x02\u03F0\u03EC\x03\x02\x02\x02\u03F0\u03ED\x03\x02" +
		"\x02\x02\u03F0\u03EE\x03\x02\x02\x02\u03F0\u03EF\x03\x02\x02\x02\u03F1" +
		"\xD3\x03\x02\x02\x02\u03F2\u03F3\x07\x15\x02\x02\u03F3\u03F4\x05\xD6l" +
		"\x02\u03F4\u03F5\x07\x16\x02\x02\u03F5\xD5\x03\x02\x02\x02\u03F6\u03FA" +
		"\x05\xD8m\x02\u03F7\u03F9\x05\xD8m\x02\u03F8\u03F7\x03\x02\x02\x02\u03F9" +
		"\u03FC\x03\x02\x02\x02\u03FA\u03F8\x03\x02\x02\x02\u03FA\u03FB\x03\x02" +
		"\x02\x02\u03FB\xD7\x03\x02\x02\x02\u03FC\u03FA\x03\x02\x02\x02\u03FD\u0409" +
		"\x07d\x02\x02\u03FE\u0405\x07j\x02\x02\u03FF\u0402\x07\x18\x02\x02\u0400" +
		"\u0403\x07d\x02\x02\u0401\u0403\x05\u0100\x81\x02\u0402\u0400\x03\x02" +
		"\x02\x02\u0402\u0401\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404" +
		"\u0406\x07\x19\x02\x02\u0405\u03FF\x03\x02\x02\x02\u0405\u0406\x03\x02" +
		"\x02\x02\u0406\u0409\x03\x02\x02\x02\u0407\u0409\x05\u0100\x81\x02\u0408" +
		"\u03FD\x03\x02\x02\x02\u0408\u03FE\x03\x02\x02\x02\u0408\u0407\x03\x02" +
		"\x02\x02\u0409\xD9\x03\x02\x02\x02\u040A\u040D\x05\xE0q\x02\u040B\u040D" +
		"\x07j\x02\x02\u040C\u040A\x03\x02\x02\x02\u040C\u040B\x03\x02\x02\x02" +
		"\u040D\xDB\x03\x02\x02\x02\u040E\u040F\x07j\x02\x02\u040F\u0410\x07Q\x02" +
		"\x02\u0410\u0411\x05\xD0i\x02\u0411\xDD\x03\x02\x02\x02\u0412\u0413\x07" +
		"j\x02\x02\u0413\xDF\x03\x02\x02\x02\u0414\u0416\x07\x1A\x02\x02\u0415" +
		"\u0414\x03\x02\x02\x02\u0415\u0416\x03\x02\x02\x02\u0416\u0417\x03\x02" +
		"\x02\x02\u0417\u0418\x07d\x02\x02\u0418\xE1\x03\x02\x02\x02\u0419\u041A" +
		"\x07R\x02\x02\u041A\u041B\x07\x15\x02\x02\u041B\u041C\x05\xE4s\x02\u041C" +
		"\u041D\x07\x16\x02\x02\u041D\xE3\x03\x02\x02\x02\u041E\u0424\x05\xEEx" +
		"\x02\u041F\u0420\x07\x17\x02\x02\u0420\u0421\x05&\x14\x02\u0421\u0422" +
		"\x05\xE6t\x02\u0422\u0423\x05(\x15\x02\u0423\u0425\x03\x02\x02\x02\u0424" +
		"\u041F\x03\x02\x02\x02\u0424\u0425\x03\x02\x02\x02\u0425\xE5\x03\x02\x02" +
		"\x02\u0426\u0427\x07\x17\x02\x02\u0427\u0429\x05\xE8u\x02\u0428\u0426" +
		"\x03\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429\xE7\x03\x02\x02\x02" +
		"\u042A\u042F\x05\xEAv\x02\u042B\u042C\x07\x17\x02\x02\u042C\u042E\x05" +
		"\xEAv\x02\u042D\u042B\x03\x02\x02\x02\u042E\u0431\x03\x02\x02\x02\u042F" +
		"\u042D\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\xE9\x03\x02\x02" +
		"\x02\u0431\u042F\x03\x02\x02\x02\u0432\u0435\x05\xECw\x02\u0433\u0435" +
		"\x05\xF2z\x02\u0434\u0432\x03\x02\x02\x02\u0434\u0433\x03\x02\x02\x02" +
		"\u0435\xEB\x03\x02\x02\x02\u0436\u0437\x07O\x02\x02\u0437\u0438\x05:\x1E" +
		"\x02\u0438\u0439\x05\xF0y\x02\u0439\u043A\x07P\x02\x02\u043A\xED\x03\x02" +
		"\x02\x02\u043B\u043C\x05\xF0y\x02\u043C\xEF\x03\x02\x02\x02\u043D\u0442" +
		"\x05\xF2z\x02\u043E\u043F\x07\x17\x02\x02\u043F\u0441\x05\xF2z\x02\u0440" +
		"\u043E\x03\x02\x02\x02\u0441\u0444\x03\x02\x02\x02\u0442\u0440\x03\x02" +
		"\x02\x02\u0442\u0443\x03\x02\x02\x02\u0443\xF1\x03\x02\x02\x02\u0444\u0442" +
		"\x03\x02\x02\x02\u0445\u0446\x07j\x02\x02\u0446\u0447\x05\xAAV\x02\u0447" +
		"\xF3\x03\x02\x02\x02\u0448\u0449\x07\x1B\x02\x02\u0449\u044A\x07\x15\x02" +
		"\x02\u044A\u044B\x05\xF6|\x02\u044B\u044C\x07\x16\x02\x02\u044C\xF5\x03" +
		"\x02\x02\x02\u044D\u0457\x05\xF8}\x02\u044E\u044F\x07\x17\x02\x02\u044F" +
		"\u0451\x07\v\x02\x02\u0450\u0452\x05\u010A\x86\x02\u0451\u0450\x03\x02" +
		"\x02\x02\u0451\u0452\x03\x02\x02\x02\u0452\u0455\x03\x02\x02\x02\u0453" +
		"\u0454\x07\x17\x02\x02\u0454\u0456\x05\u010E\x88\x02\u0455\u0453\x03\x02" +
		"\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456\u0458\x03\x02\x02\x02\u0457" +
		"\u044E\x03\x02\x02\x02\u0457\u0458\x03\x02\x02\x02\u0458\xF7\x03\x02\x02" +
		"\x02\u0459\u045A\x05\xFA~\x02\u045A\xF9\x03\x02\x02\x02\u045B\u0460\x05" +
		"\xFC\x7F\x02\u045C\u045D\x07\x17\x02\x02\u045D\u045F\x05\xFC\x7F\x02\u045E" +
		"\u045C\x03\x02\x02\x02\u045F\u0462\x03\x02\x02\x02\u0460\u045E\x03\x02" +
		"\x02\x02\u0460\u0461\x03\x02\x02\x02\u0461\xFB\x03\x02\x02\x02\u0462\u0460" +
		"\x03\x02\x02\x02\u0463\u0467\x07j\x02\x02\u0464\u0467\x05\xFE\x80\x02" +
		"\u0465\u0467\x05\xD0i\x02\u0466\u0463\x03\x02\x02\x02\u0466\u0464\x03" +
		"\x02\x02\x02\u0466\u0465\x03\x02\x02\x02\u0467\xFD\x03\x02\x02\x02\u0468" +
		"\u0469\x07j\x02\x02\u0469\u046C\x07\x18\x02\x02\u046A\u046D\x05\xE0q\x02" +
		"\u046B\u046D\x05\u0100\x81\x02\u046C\u046A\x03\x02\x02\x02\u046C\u046B" +
		"\x03\x02\x02\x02\u046D\u046E\x03\x02\x02\x02\u046E\u046F\x07\x19\x02\x02" +
		"\u046F\xFF\x03\x02\x02\x02\u0470\u0471\x05\u0102\x82\x02\u0471\u0101\x03" +
		"\x02\x02\x02\u0472\u0474\x05\u0104\x83\x02\u0473\u0475\x05\u0106\x84\x02" +
		"\u0474\u0473\x03\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\u0474\u0475\x03\x02\x02\x02\u0475\u0103\x03\x02\x02\x02\u0476" +
		"\u0479\x07j\x02\x02\u0477\u0478\x07\t\x02\x02\u0478\u047A\x07j\x02\x02" +
		"\u0479\u0477\x03\x02\x02\x02\u0479\u047A\x03\x02\x02\x02\u047A\u0105\x03" +
		"\x02\x02\x02\u047B\u047C\x07\x15\x02\x02\u047C\u0481\x05\u0108\x85\x02" +
		"\u047D\u047E\x07\x17\x02\x02\u047E\u0480\x05\u0108\x85\x02\u047F\u047D" +
		"\x03\x02\x02\x02\u0480\u0483\x03\x02\x02\x02\u0481\u047F\x03\x02\x02\x02" +
		"\u0481\u0482\x03\x02\x02\x02\u0482\u0484\x03\x02\x02\x02\u0483\u0481\x03" +
		"\x02\x02\x02\u0484\u0485\x07\x16\x02\x02\u0485\u0107\x03\x02\x02\x02\u0486" +
		"\u0489\x05\xAAV\x02\u0487\u0489\x05\xD0i\x02\u0488\u0486\x03\x02\x02\x02" +
		"\u0488\u0487\x03\x02\x02\x02\u0489\u0109\x03\x02\x02\x02\u048A\u048B\x07" +
		"*\x02\x02\u048B\u048C\x05\u010C\x87\x02\u048C\u010B\x03\x02\x02\x02\u048D" +
		"\u0494\x05\xE0q\x02\u048E\u0494\x05\u0100\x81\x02\u048F\u0490\x05\xAA" +
		"V\x02\u0490\u0491\x07Q\x02\x02\u0491\u0492\x05\xD0i\x02\u0492\u0494\x03" +
		"\x02\x02\x02\u0493\u048D\x03\x02\x02\x02\u0493\u048E\x03\x02\x02\x02\u0493" +
		"\u048F\x03\x02\x02\x02\u0494\u010D\x03\x02\x02\x02\u0495\u0496\x05\xFA" +
		"~\x02\u0496\u010F\x03\x02\x02\x02\u0497\u049C\x07\x14\x02\x02\u0498\u0499" +
		"\x07\x15\x02\x02\u0499\u049A\x05\u0112\x8A\x02\u049A\u049B\x07\x16\x02" +
		"\x02\u049B\u049D\x03\x02\x02\x02\u049C\u0498\x03\x02\x02\x02\u049C\u049D" +
		"\x03\x02\x02\x02\u049D\u0111\x03\x02\x02\x02\u049E\u04A3\x05\xFE\x80\x02" +
		"\u049F\u04A0\x07\x17\x02\x02\u04A0\u04A2\x05\xFE\x80\x02\u04A1\u049F\x03" +
		"\x02\x02\x02\u04A2\u04A5\x03\x02\x02\x02\u04A3\u04A1\x03\x02\x02\x02\u04A3" +
		"\u04A4\x03\x02\x02\x02\u04A4\u0113\x03\x02\x02\x02\u04A5\u04A3\x03\x02" +
		"\x02\x02\u04A6\u04A7\x07Y\x02\x02\u04A7\u04A8\x07Z\x02\x02\u04A8\u0115" +
		"\x03\x02\x02\x02\u04A9\u04AA\x07\x15\x02\x02\u04AA\u04AD\x07j\x02\x02" +
		"\u04AB\u04AC\x07\t\x02\x02\u04AC\u04AE\x07j\x02\x02\u04AD\u04AB\x03\x02" +
		"\x02\x02\u04AD\u04AE\x03\x02\x02\x02\u04AE\u04AF\x03\x02\x02\x02\u04AF" +
		"\u04BB\x07\x16\x02\x02\u04B0\u04B1\x07\x15\x02\x02\u04B1\u04B6\x05\u0118" +
		"\x8D\x02\u04B2\u04B3\x07\x17\x02\x02\u04B3\u04B5\x05\u0118\x8D\x02\u04B4" +
		"\u04B2\x03\x02\x02\x02\u04B5\u04B8\x03\x02\x02\x02\u04B6\u04B4\x03\x02" +
		"\x02\x02\u04B6\u04B7\x03\x02\x02\x02\u04B7\u04B9\x03\x02\x02\x02\u04B8" +
		"\u04B6\x03\x02\x02\x02\u04B9\u04BA\x07\x16\x02\x02\u04BA\u04BC\x03\x02" +
		"\x02\x02\u04BB\u04B0\x03\x02\x02\x02\u04BB\u04BC\x03\x02\x02\x02\u04BC" +
		"\u0117\x03\x02\x02\x02\u04BD\u04C1\x07\x03\x02\x02\u04BE\u04BF\x07_\x02" +
		"\x02\u04BF\u04C1\x05\u011A\x8E\x02\u04C0\u04BD\x03\x02\x02\x02\u04C0\u04BE" +
		"\x03\x02\x02\x02\u04C1\u04C2\x03\x02\x02\x02\u04C2\u04C3\x05\u011C\x8F" +
		"\x02\u04C3\u0119\x03\x02\x02\x02\u04C4\u04C5\x07\t\x02\x02\u04C5\u04C7" +
		"\x05\u011A\x8E\x02\u04C6\u04C4\x03\x02\x02\x02\u04C6\u04C7\x03\x02\x02" +
		"\x02\u04C7\u011B\x03\x02\x02\x02\u04C8\u04CD\x07j\x02\x02\u04C9\u04CA" +
		"\x07\t\x02\x02\u04CA\u04CC\x07j\x02\x02\u04CB\u04C9\x03\x02\x02\x02\u04CC" +
		"\u04CF\x03\x02\x02\x02\u04CD\u04CB\x03\x02\x02\x02\u04CD\u04CE\x03\x02" +
		"\x02\x02\u04CE\u011D\x03\x02\x02\x02\u04CF\u04CD\x03\x02\x02\x02\u04D0" +
		"\u04D1\x07\"\x02\x02\u04D1\u04D2\x07 \x02\x02\u04D2\u011F\x03\x02\x02" +
		"\x02\u04D3\u04D4\x07\x1F\x02\x02\u04D4\u04D5\x07 \x02\x02\u04D5\u04DA" +
		"\x03\x02\x02\x02\u04D6\u04D7\x07\x15\x02\x02\u04D7\u04D8\x05\u0122\x92" +
		"\x02\u04D8\u04D9\x07\x16\x02\x02\u04D9\u04DB\x03\x02\x02\x02\u04DA\u04D6" +
		"\x03\x02\x02\x02\u04DA\u04DB\x03\x02\x02\x02\u04DB\u0121\x03\x02\x02\x02" +
		"\u04DC\u04E1\x05\u0124\x93\x02\u04DD\u04DE\x07\x17\x02\x02\u04DE\u04E0" +
		"\x05\u0124\x93\x02\u04DF\u04DD\x03\x02\x02\x02\u04E0\u04E3\x03\x02\x02" +
		"\x02\u04E1\u04DF\x03\x02\x02\x02\u04E1\u04E2\x03\x02\x02\x02\u04E2\u0123" +
		"\x03\x02\x02\x02\u04E3\u04E1\x03\x02\x02\x02\u04E4\u04E5\x07j\x02\x02" +
		"\u04E5\u04E8\x07\x18\x02\x02\u04E6\u04E9\x07d\x02\x02\u04E7\u04E9\x05" +
		"\u0100\x81\x02\u04E8\u04E6\x03\x02\x02\x02\u04E8\u04E7\x03\x02\x02\x02" +
		"\u04E9\u04EA\x03\x02\x02\x02\u04EA\u04EB\x07\x19\x02\x02\u04EB\u0125\x03" +
		"\x02\x02\x02\u04EC\u04ED\t\b\x02\x02\u04ED\u0127\x03\x02\x02\x02\x92\u012B" +
		"\u0135\u0139\u0145\u0149\u014F\u0158\u015B\u0161\u0164\u016A\u017B\u0181" +
		"\u0187\u018F\u0197\u019D\u01A1\u01AB\u01AD\u01B5\u01B7\u01C0\u01C7\u01CC" +
		"\u01D0\u01D7\u01DC\u01E5\u01EB\u01EF\u01F4\u01FE\u0205\u0207\u020F\u0217" +
		"\u021D\u0221\u0228\u022C\u0231\u0240\u0245\u024F\u0255\u025B\u0261\u026B" +
		"\u026F\u0272\u0275\u0277\u027E\u0280\u0287\u0289\u028B\u0290\u0295\u029B" +
		"\u029E\u02A3\u02A9\u02AF\u02B4\u02B8\u02BF\u02CA\u02CC\u02D1\u02D3\u02DD" +
		"\u02E9\u02EB\u02F4\u02FC\u0308\u0313\u0317\u031B\u031E\u0322\u0326\u032C" +
		"\u0332\u0338\u033D\u0343\u0348\u0353\u0358\u0368\u0374\u037B\u0380\u0387" +
		"\u038A\u038F\u0395\u039F\u03A7\u03AF\u03C6\u03C9\u03CF\u03D1\u03D6\u03D8" +
		"\u03DF\u03F0\u03FA\u0402\u0405\u0408\u040C\u0415\u0424\u0428\u042F\u0434" +
		"\u0442\u0451\u0455\u0457\u0460\u0466\u046C\u0474\u0479\u0481\u0488\u0493" +
		"\u049C\u04A3\u04AD\u04B6\u04BB\u04C0\u04C6\u04CD\u04DA\u04E1\u04E8";
	public static readonly _serializedATN: string = Utils.join(
		[
			ASNParser._serializedATNSegment0,
			ASNParser._serializedATNSegment1,
			ASNParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ASNParser.__ATN) {
			ASNParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ASNParser._serializedATN));
		}

		return ASNParser.__ATN;
	}

}

export class ModulesContext extends ParserRuleContext {
	public moduleDefinition(): ModuleDefinitionContext[];
	public moduleDefinition(i: number): ModuleDefinitionContext;
	public moduleDefinition(i?: number): ModuleDefinitionContext | ModuleDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleDefinitionContext);
		} else {
			return this.getRuleContext(i, ModuleDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_modules; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterModules) {
			listener.enterModules(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitModules) {
			listener.exitModules(this);
		}
	}
}


export class ModuleDefinitionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.IDENTIFIER);
		} else {
			return this.getToken(ASNParser.IDENTIFIER, i);
		}
	}
	public DEFINITIONS_LITERAL(): TerminalNode { return this.getToken(ASNParser.DEFINITIONS_LITERAL, 0); }
	public tagDefault(): TagDefaultContext {
		return this.getRuleContext(0, TagDefaultContext);
	}
	public extensionDefault(): ExtensionDefaultContext {
		return this.getRuleContext(0, ExtensionDefaultContext);
	}
	public ASSIGN_OP(): TerminalNode { return this.getToken(ASNParser.ASSIGN_OP, 0); }
	public BEGIN_LITERAL(): TerminalNode { return this.getToken(ASNParser.BEGIN_LITERAL, 0); }
	public moduleBody(): ModuleBodyContext {
		return this.getRuleContext(0, ModuleBodyContext);
	}
	public END_LITERAL(): TerminalNode { return this.getToken(ASNParser.END_LITERAL, 0); }
	public L_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASNParser.L_BRACE, 0); }
	public R_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASNParser.R_BRACE, 0); }
	public L_PARAN(): TerminalNode[];
	public L_PARAN(i: number): TerminalNode;
	public L_PARAN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.L_PARAN);
		} else {
			return this.getToken(ASNParser.L_PARAN, i);
		}
	}
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.NUMBER);
		} else {
			return this.getToken(ASNParser.NUMBER, i);
		}
	}
	public R_PARAN(): TerminalNode[];
	public R_PARAN(i: number): TerminalNode;
	public R_PARAN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.R_PARAN);
		} else {
			return this.getToken(ASNParser.R_PARAN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_moduleDefinition; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterModuleDefinition) {
			listener.enterModuleDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitModuleDefinition) {
			listener.exitModuleDefinition(this);
		}
	}
}


export class TagDefaultContext extends ParserRuleContext {
	public TAGS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.TAGS_LITERAL, 0); }
	public EXPLICIT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.EXPLICIT_LITERAL, 0); }
	public IMPLICIT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.IMPLICIT_LITERAL, 0); }
	public AUTOMATIC_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.AUTOMATIC_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_tagDefault; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterTagDefault) {
			listener.enterTagDefault(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitTagDefault) {
			listener.exitTagDefault(this);
		}
	}
}


export class ExtensionDefaultContext extends ParserRuleContext {
	public EXTENSIBILITY_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.EXTENSIBILITY_LITERAL, 0); }
	public IMPLIED_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.IMPLIED_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_extensionDefault; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterExtensionDefault) {
			listener.enterExtensionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitExtensionDefault) {
			listener.exitExtensionDefault(this);
		}
	}
}


export class ModuleBodyContext extends ParserRuleContext {
	public exports(): ExportsContext | undefined {
		return this.tryGetRuleContext(0, ExportsContext);
	}
	public imports(): ImportsContext | undefined {
		return this.tryGetRuleContext(0, ImportsContext);
	}
	public assignmentList(): AssignmentListContext | undefined {
		return this.tryGetRuleContext(0, AssignmentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_moduleBody; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterModuleBody) {
			listener.enterModuleBody(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitModuleBody) {
			listener.exitModuleBody(this);
		}
	}
}


export class ExportsContext extends ParserRuleContext {
	public EXPORTS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.EXPORTS_LITERAL, 0); }
	public symbolsExported(): SymbolsExportedContext | undefined {
		return this.tryGetRuleContext(0, SymbolsExportedContext);
	}
	public SEMI_COLON(): TerminalNode | undefined { return this.tryGetToken(ASNParser.SEMI_COLON, 0); }
	public ALL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.ALL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_exports; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterExports) {
			listener.enterExports(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitExports) {
			listener.exitExports(this);
		}
	}
}


export class SymbolsExportedContext extends ParserRuleContext {
	public symbolList(): SymbolListContext | undefined {
		return this.tryGetRuleContext(0, SymbolListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_symbolsExported; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSymbolsExported) {
			listener.enterSymbolsExported(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSymbolsExported) {
			listener.exitSymbolsExported(this);
		}
	}
}


export class ImportsContext extends ParserRuleContext {
	public IMPORTS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.IMPORTS_LITERAL, 0); }
	public symbolsImported(): SymbolsImportedContext | undefined {
		return this.tryGetRuleContext(0, SymbolsImportedContext);
	}
	public SEMI_COLON(): TerminalNode | undefined { return this.tryGetToken(ASNParser.SEMI_COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_imports; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterImports) {
			listener.enterImports(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitImports) {
			listener.exitImports(this);
		}
	}
}


export class SymbolsImportedContext extends ParserRuleContext {
	public symbolsFromModuleList(): SymbolsFromModuleListContext | undefined {
		return this.tryGetRuleContext(0, SymbolsFromModuleListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_symbolsImported; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSymbolsImported) {
			listener.enterSymbolsImported(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSymbolsImported) {
			listener.exitSymbolsImported(this);
		}
	}
}


export class SymbolsFromModuleListContext extends ParserRuleContext {
	public symbolsFromModule(): SymbolsFromModuleContext[];
	public symbolsFromModule(i: number): SymbolsFromModuleContext;
	public symbolsFromModule(i?: number): SymbolsFromModuleContext | SymbolsFromModuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SymbolsFromModuleContext);
		} else {
			return this.getRuleContext(i, SymbolsFromModuleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_symbolsFromModuleList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSymbolsFromModuleList) {
			listener.enterSymbolsFromModuleList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSymbolsFromModuleList) {
			listener.exitSymbolsFromModuleList(this);
		}
	}
}


export class SymbolsFromModuleContext extends ParserRuleContext {
	public symbolList(): SymbolListContext {
		return this.getRuleContext(0, SymbolListContext);
	}
	public FROM_LITERAL(): TerminalNode { return this.getToken(ASNParser.FROM_LITERAL, 0); }
	public globalModuleReference(): GlobalModuleReferenceContext {
		return this.getRuleContext(0, GlobalModuleReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_symbolsFromModule; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSymbolsFromModule) {
			listener.enterSymbolsFromModule(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSymbolsFromModule) {
			listener.exitSymbolsFromModule(this);
		}
	}
}


export class GlobalModuleReferenceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public assignedIdentifier(): AssignedIdentifierContext {
		return this.getRuleContext(0, AssignedIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_globalModuleReference; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterGlobalModuleReference) {
			listener.enterGlobalModuleReference(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitGlobalModuleReference) {
			listener.exitGlobalModuleReference(this);
		}
	}
}


export class AssignedIdentifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_assignedIdentifier; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterAssignedIdentifier) {
			listener.enterAssignedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitAssignedIdentifier) {
			listener.exitAssignedIdentifier(this);
		}
	}
}


export class SymbolListContext extends ParserRuleContext {
	public symbol(): SymbolContext[];
	public symbol(i: number): SymbolContext;
	public symbol(i?: number): SymbolContext | SymbolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SymbolContext);
		} else {
			return this.getRuleContext(i, SymbolContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_symbolList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSymbolList) {
			listener.enterSymbolList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSymbolList) {
			listener.exitSymbolList(this);
		}
	}
}


export class SymbolContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public L_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASNParser.L_BRACE, 0); }
	public R_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASNParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_symbol; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSymbol) {
			listener.enterSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSymbol) {
			listener.exitSymbol(this);
		}
	}
}


export class AssignmentListContext extends ParserRuleContext {
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_assignmentList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterAssignmentList) {
			listener.enterAssignmentList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitAssignmentList) {
			listener.exitAssignmentList(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASNParser.IDENTIFIER, 0); }
	public valueAssignment(): ValueAssignmentContext | undefined {
		return this.tryGetRuleContext(0, ValueAssignmentContext);
	}
	public typeAssignment(): TypeAssignmentContext | undefined {
		return this.tryGetRuleContext(0, TypeAssignmentContext);
	}
	public parameterizedAssignment(): ParameterizedAssignmentContext | undefined {
		return this.tryGetRuleContext(0, ParameterizedAssignmentContext);
	}
	public objectClassAssignment(): ObjectClassAssignmentContext | undefined {
		return this.tryGetRuleContext(0, ObjectClassAssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_assignment; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
}


export class SequenceTypeContext extends ParserRuleContext {
	public SEQUENCE_LITERAL(): TerminalNode { return this.getToken(ASNParser.SEQUENCE_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASNParser.L_BRACE, 0); }
	public R_BRACE(): TerminalNode { return this.getToken(ASNParser.R_BRACE, 0); }
	public extensionAndException(): ExtensionAndExceptionContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
	}
	public optionalExtensionMarker(): OptionalExtensionMarkerContext | undefined {
		return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
	}
	public componentTypeLists(): ComponentTypeListsContext | undefined {
		return this.tryGetRuleContext(0, ComponentTypeListsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_sequenceType; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSequenceType) {
			listener.enterSequenceType(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSequenceType) {
			listener.exitSequenceType(this);
		}
	}
}


export class ExtensionAndExceptionContext extends ParserRuleContext {
	public ELLIPSIS(): TerminalNode { return this.getToken(ASNParser.ELLIPSIS, 0); }
	public exceptionSpec(): ExceptionSpecContext | undefined {
		return this.tryGetRuleContext(0, ExceptionSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_extensionAndException; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterExtensionAndException) {
			listener.enterExtensionAndException(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitExtensionAndException) {
			listener.exitExtensionAndException(this);
		}
	}
}


export class OptionalExtensionMarkerContext extends ParserRuleContext {
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASNParser.COMMA, 0); }
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(ASNParser.ELLIPSIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_optionalExtensionMarker; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterOptionalExtensionMarker) {
			listener.enterOptionalExtensionMarker(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitOptionalExtensionMarker) {
			listener.exitOptionalExtensionMarker(this);
		}
	}
}


export class ComponentTypeListsContext extends ParserRuleContext {
	public rootComponentTypeList(): RootComponentTypeListContext[];
	public rootComponentTypeList(i: number): RootComponentTypeListContext;
	public rootComponentTypeList(i?: number): RootComponentTypeListContext | RootComponentTypeListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RootComponentTypeListContext);
		} else {
			return this.getRuleContext(i, RootComponentTypeListContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	public extensionAndException(): ExtensionAndExceptionContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
	}
	public extensionAdditions(): ExtensionAdditionsContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionsContext);
	}
	public optionalExtensionMarker(): OptionalExtensionMarkerContext | undefined {
		return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
	}
	public EXTENSTIONENDMARKER(): TerminalNode | undefined { return this.tryGetToken(ASNParser.EXTENSTIONENDMARKER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_componentTypeLists; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterComponentTypeLists) {
			listener.enterComponentTypeLists(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitComponentTypeLists) {
			listener.exitComponentTypeLists(this);
		}
	}
}


export class RootComponentTypeListContext extends ParserRuleContext {
	public componentTypeList(): ComponentTypeListContext {
		return this.getRuleContext(0, ComponentTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_rootComponentTypeList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterRootComponentTypeList) {
			listener.enterRootComponentTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitRootComponentTypeList) {
			listener.exitRootComponentTypeList(this);
		}
	}
}


export class ComponentTypeListContext extends ParserRuleContext {
	public componentType(): ComponentTypeContext[];
	public componentType(i: number): ComponentTypeContext;
	public componentType(i?: number): ComponentTypeContext | ComponentTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentTypeContext);
		} else {
			return this.getRuleContext(i, ComponentTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_componentTypeList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterComponentTypeList) {
			listener.enterComponentTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitComponentTypeList) {
			listener.exitComponentTypeList(this);
		}
	}
}


export class ComponentTypeContext extends ParserRuleContext {
	public namedType(): NamedTypeContext | undefined {
		return this.tryGetRuleContext(0, NamedTypeContext);
	}
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.DEFAULT_LITERAL, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public COMPONENTS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.COMPONENTS_LITERAL, 0); }
	public OF_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.OF_LITERAL, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_componentType; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterComponentType) {
			listener.enterComponentType(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitComponentType) {
			listener.exitComponentType(this);
		}
	}
}


export class ExtensionAdditionsContext extends ParserRuleContext {
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASNParser.COMMA, 0); }
	public extensionAdditionList(): ExtensionAdditionListContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_extensionAdditions; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterExtensionAdditions) {
			listener.enterExtensionAdditions(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitExtensionAdditions) {
			listener.exitExtensionAdditions(this);
		}
	}
}


export class ExtensionAdditionListContext extends ParserRuleContext {
	public extensionAddition(): ExtensionAdditionContext[];
	public extensionAddition(i: number): ExtensionAdditionContext;
	public extensionAddition(i?: number): ExtensionAdditionContext | ExtensionAdditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtensionAdditionContext);
		} else {
			return this.getRuleContext(i, ExtensionAdditionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_extensionAdditionList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterExtensionAdditionList) {
			listener.enterExtensionAdditionList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitExtensionAdditionList) {
			listener.exitExtensionAdditionList(this);
		}
	}
}


export class ExtensionAdditionContext extends ParserRuleContext {
	public componentType(): ComponentTypeContext | undefined {
		return this.tryGetRuleContext(0, ComponentTypeContext);
	}
	public extensionAdditionGroup(): ExtensionAdditionGroupContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionGroupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_extensionAddition; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterExtensionAddition) {
			listener.enterExtensionAddition(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitExtensionAddition) {
			listener.exitExtensionAddition(this);
		}
	}
}


export class ExtensionAdditionGroupContext extends ParserRuleContext {
	public DOUBLE_L_BRACKET(): TerminalNode { return this.getToken(ASNParser.DOUBLE_L_BRACKET, 0); }
	public versionNumber(): VersionNumberContext {
		return this.getRuleContext(0, VersionNumberContext);
	}
	public componentTypeList(): ComponentTypeListContext {
		return this.getRuleContext(0, ComponentTypeListContext);
	}
	public DOUBLE_R_BRACKET(): TerminalNode { return this.getToken(ASNParser.DOUBLE_R_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_extensionAdditionGroup; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterExtensionAdditionGroup) {
			listener.enterExtensionAdditionGroup(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitExtensionAdditionGroup) {
			listener.exitExtensionAdditionGroup(this);
		}
	}
}


export class VersionNumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ASNParser.NUMBER, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ASNParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_versionNumber; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterVersionNumber) {
			listener.enterVersionNumber(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitVersionNumber) {
			listener.exitVersionNumber(this);
		}
	}
}


export class SequenceOfTypeContext extends ParserRuleContext {
	public SEQUENCE_LITERAL(): TerminalNode { return this.getToken(ASNParser.SEQUENCE_LITERAL, 0); }
	public OF_LITERAL(): TerminalNode { return this.getToken(ASNParser.OF_LITERAL, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public namedType(): NamedTypeContext | undefined {
		return this.tryGetRuleContext(0, NamedTypeContext);
	}
	public L_PARAN(): TerminalNode | undefined { return this.tryGetToken(ASNParser.L_PARAN, 0); }
	public R_PARAN(): TerminalNode | undefined { return this.tryGetToken(ASNParser.R_PARAN, 0); }
	public constraint(): ConstraintContext | undefined {
		return this.tryGetRuleContext(0, ConstraintContext);
	}
	public sizeConstraint(): SizeConstraintContext | undefined {
		return this.tryGetRuleContext(0, SizeConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_sequenceOfType; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSequenceOfType) {
			listener.enterSequenceOfType(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSequenceOfType) {
			listener.exitSequenceOfType(this);
		}
	}
}


export class SizeConstraintContext extends ParserRuleContext {
	public SIZE_LITERAL(): TerminalNode { return this.getToken(ASNParser.SIZE_LITERAL, 0); }
	public constraint(): ConstraintContext {
		return this.getRuleContext(0, ConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_sizeConstraint; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSizeConstraint) {
			listener.enterSizeConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSizeConstraint) {
			listener.exitSizeConstraint(this);
		}
	}
}


export class ParameterizedAssignmentContext extends ParserRuleContext {
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public ASSIGN_OP(): TerminalNode | undefined { return this.tryGetToken(ASNParser.ASSIGN_OP, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public valueSet(): ValueSetContext | undefined {
		return this.tryGetRuleContext(0, ValueSetContext);
	}
	public definedObjectClass(): DefinedObjectClassContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectClassContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public objectClass(): ObjectClassContext | undefined {
		return this.tryGetRuleContext(0, ObjectClassContext);
	}
	public objectSet(): ObjectSetContext | undefined {
		return this.tryGetRuleContext(0, ObjectSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_parameterizedAssignment; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterParameterizedAssignment) {
			listener.enterParameterizedAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitParameterizedAssignment) {
			listener.exitParameterizedAssignment(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASNParser.L_BRACE, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASNParser.R_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public paramGovernor(): ParamGovernorContext | undefined {
		return this.tryGetRuleContext(0, ParamGovernorContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ASNParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_parameter; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
}


export class ParamGovernorContext extends ParserRuleContext {
	public governor(): GovernorContext | undefined {
		return this.tryGetRuleContext(0, GovernorContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASNParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_paramGovernor; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterParamGovernor) {
			listener.enterParamGovernor(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitParamGovernor) {
			listener.exitParamGovernor(this);
		}
	}
}


export class GovernorContext extends ParserRuleContext {
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public definedObjectClass(): DefinedObjectClassContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectClassContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_governor; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterGovernor) {
			listener.enterGovernor(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitGovernor) {
			listener.exitGovernor(this);
		}
	}
}


export class ObjectClassAssignmentContext extends ParserRuleContext {
	public ASSIGN_OP(): TerminalNode { return this.getToken(ASNParser.ASSIGN_OP, 0); }
	public objectClass(): ObjectClassContext {
		return this.getRuleContext(0, ObjectClassContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_objectClassAssignment; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterObjectClassAssignment) {
			listener.enterObjectClassAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitObjectClassAssignment) {
			listener.exitObjectClassAssignment(this);
		}
	}
}


export class ObjectClassContext extends ParserRuleContext {
	public definedObjectClass(): DefinedObjectClassContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectClassContext);
	}
	public objectClassDefn(): ObjectClassDefnContext | undefined {
		return this.tryGetRuleContext(0, ObjectClassDefnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_objectClass; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterObjectClass) {
			listener.enterObjectClass(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitObjectClass) {
			listener.exitObjectClass(this);
		}
	}
}


export class DefinedObjectClassContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.IDENTIFIER);
		} else {
			return this.getToken(ASNParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASNParser.DOT, 0); }
	public TYPE_IDENTIFIER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.TYPE_IDENTIFIER_LITERAL, 0); }
	public ABSTRACT_SYNTAX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.ABSTRACT_SYNTAX_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_definedObjectClass; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterDefinedObjectClass) {
			listener.enterDefinedObjectClass(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitDefinedObjectClass) {
			listener.exitDefinedObjectClass(this);
		}
	}
}


export class UsefulObjectClassReferenceContext extends ParserRuleContext {
	public TYPE_IDENTIFIER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.TYPE_IDENTIFIER_LITERAL, 0); }
	public ABSTRACT_SYNTAX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.ABSTRACT_SYNTAX_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_usefulObjectClassReference; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterUsefulObjectClassReference) {
			listener.enterUsefulObjectClassReference(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitUsefulObjectClassReference) {
			listener.exitUsefulObjectClassReference(this);
		}
	}
}


export class ExternalObjectClassReferenceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.IDENTIFIER);
		} else {
			return this.getToken(ASNParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(ASNParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_externalObjectClassReference; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterExternalObjectClassReference) {
			listener.enterExternalObjectClassReference(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitExternalObjectClassReference) {
			listener.exitExternalObjectClassReference(this);
		}
	}
}


export class ObjectClassDefnContext extends ParserRuleContext {
	public CLASS_LITERAL(): TerminalNode { return this.getToken(ASNParser.CLASS_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASNParser.L_BRACE, 0); }
	public fieldSpec(): FieldSpecContext[];
	public fieldSpec(i: number): FieldSpecContext;
	public fieldSpec(i?: number): FieldSpecContext | FieldSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldSpecContext);
		} else {
			return this.getRuleContext(i, FieldSpecContext);
		}
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASNParser.R_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	public withSyntaxSpec(): WithSyntaxSpecContext | undefined {
		return this.tryGetRuleContext(0, WithSyntaxSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_objectClassDefn; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterObjectClassDefn) {
			listener.enterObjectClassDefn(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitObjectClassDefn) {
			listener.exitObjectClassDefn(this);
		}
	}
}


export class WithSyntaxSpecContext extends ParserRuleContext {
	public WITH_LITERAL(): TerminalNode { return this.getToken(ASNParser.WITH_LITERAL, 0); }
	public SYNTAX_LITERAL(): TerminalNode { return this.getToken(ASNParser.SYNTAX_LITERAL, 0); }
	public syntaxList(): SyntaxListContext {
		return this.getRuleContext(0, SyntaxListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_withSyntaxSpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterWithSyntaxSpec) {
			listener.enterWithSyntaxSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitWithSyntaxSpec) {
			listener.exitWithSyntaxSpec(this);
		}
	}
}


export class SyntaxListContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASNParser.L_BRACE, 0); }
	public R_BRACE(): TerminalNode { return this.getToken(ASNParser.R_BRACE, 0); }
	public tokenOrGroupSpec(): TokenOrGroupSpecContext[];
	public tokenOrGroupSpec(i: number): TokenOrGroupSpecContext;
	public tokenOrGroupSpec(i?: number): TokenOrGroupSpecContext | TokenOrGroupSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokenOrGroupSpecContext);
		} else {
			return this.getRuleContext(i, TokenOrGroupSpecContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_syntaxList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSyntaxList) {
			listener.enterSyntaxList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSyntaxList) {
			listener.exitSyntaxList(this);
		}
	}
}


export class TokenOrGroupSpecContext extends ParserRuleContext {
	public requiredToken(): RequiredTokenContext | undefined {
		return this.tryGetRuleContext(0, RequiredTokenContext);
	}
	public optionalGroup(): OptionalGroupContext | undefined {
		return this.tryGetRuleContext(0, OptionalGroupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_tokenOrGroupSpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterTokenOrGroupSpec) {
			listener.enterTokenOrGroupSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitTokenOrGroupSpec) {
			listener.exitTokenOrGroupSpec(this);
		}
	}
}


export class OptionalGroupContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(ASNParser.L_BRACKET, 0); }
	public R_BRACKET(): TerminalNode { return this.getToken(ASNParser.R_BRACKET, 0); }
	public tokenOrGroupSpec(): TokenOrGroupSpecContext[];
	public tokenOrGroupSpec(i: number): TokenOrGroupSpecContext;
	public tokenOrGroupSpec(i?: number): TokenOrGroupSpecContext | TokenOrGroupSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokenOrGroupSpecContext);
		} else {
			return this.getRuleContext(i, TokenOrGroupSpecContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_optionalGroup; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterOptionalGroup) {
			listener.enterOptionalGroup(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitOptionalGroup) {
			listener.exitOptionalGroup(this);
		}
	}
}


export class RequiredTokenContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public primitiveFieldName(): PrimitiveFieldNameContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveFieldNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_requiredToken; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterRequiredToken) {
			listener.enterRequiredToken(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitRequiredToken) {
			listener.exitRequiredToken(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASNParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASNParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_literal; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class PrimitiveFieldNameContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASNParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_primitiveFieldName; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterPrimitiveFieldName) {
			listener.enterPrimitiveFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitPrimitiveFieldName) {
			listener.exitPrimitiveFieldName(this);
		}
	}
}


export class FieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASNParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public fieldName(): FieldNameContext | undefined {
		return this.tryGetRuleContext(0, FieldNameContext);
	}
	public definedObjectClass(): DefinedObjectClassContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectClassContext);
	}
	public typeOptionalitySpec(): TypeOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, TypeOptionalitySpecContext);
	}
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.OPTIONAL_LITERAL, 0); }
	public valueSetOptionalitySpec(): ValueSetOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueSetOptionalitySpecContext);
	}
	public UNIQUE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.UNIQUE_LITERAL, 0); }
	public valueOptionalitySpec(): ValueOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueOptionalitySpecContext);
	}
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.DEFAULT_LITERAL, 0); }
	public valueSet(): ValueSetContext | undefined {
		return this.tryGetRuleContext(0, ValueSetContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public objectSet(): ObjectSetContext | undefined {
		return this.tryGetRuleContext(0, ObjectSetContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_fieldSpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterFieldSpec) {
			listener.enterFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitFieldSpec) {
			listener.exitFieldSpec(this);
		}
	}
}


export class TypeFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASNParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public typeOptionalitySpec(): TypeOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, TypeOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_typeFieldSpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterTypeFieldSpec) {
			listener.enterTypeFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitTypeFieldSpec) {
			listener.exitTypeFieldSpec(this);
		}
	}
}


export class TypeOptionalitySpecContext extends ParserRuleContext {
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.DEFAULT_LITERAL, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_typeOptionalitySpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterTypeOptionalitySpec) {
			listener.enterTypeOptionalitySpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitTypeOptionalitySpec) {
			listener.exitTypeOptionalitySpec(this);
		}
	}
}


export class FixedTypeValueFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASNParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public asnType(): AsnTypeContext {
		return this.getRuleContext(0, AsnTypeContext);
	}
	public UNIQUE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.UNIQUE_LITERAL, 0); }
	public valueOptionalitySpec(): ValueOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_fixedTypeValueFieldSpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterFixedTypeValueFieldSpec) {
			listener.enterFixedTypeValueFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitFixedTypeValueFieldSpec) {
			listener.exitFixedTypeValueFieldSpec(this);
		}
	}
}


export class ValueOptionalitySpecContext extends ParserRuleContext {
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.DEFAULT_LITERAL, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_valueOptionalitySpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterValueOptionalitySpec) {
			listener.enterValueOptionalitySpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitValueOptionalitySpec) {
			listener.exitValueOptionalitySpec(this);
		}
	}
}


export class VariableTypeValueFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASNParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public valueOptionalitySpec(): ValueOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_variableTypeValueFieldSpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterVariableTypeValueFieldSpec) {
			listener.enterVariableTypeValueFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitVariableTypeValueFieldSpec) {
			listener.exitVariableTypeValueFieldSpec(this);
		}
	}
}


export class FixedTypeValueSetFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASNParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public asnType(): AsnTypeContext {
		return this.getRuleContext(0, AsnTypeContext);
	}
	public valueSetOptionalitySpec(): ValueSetOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueSetOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_fixedTypeValueSetFieldSpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterFixedTypeValueSetFieldSpec) {
			listener.enterFixedTypeValueSetFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitFixedTypeValueSetFieldSpec) {
			listener.exitFixedTypeValueSetFieldSpec(this);
		}
	}
}


export class ValueSetOptionalitySpecContext extends ParserRuleContext {
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.DEFAULT_LITERAL, 0); }
	public valueSet(): ValueSetContext | undefined {
		return this.tryGetRuleContext(0, ValueSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_valueSetOptionalitySpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterValueSetOptionalitySpec) {
			listener.enterValueSetOptionalitySpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitValueSetOptionalitySpec) {
			listener.exitValueSetOptionalitySpec(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	public definedObject(): DefinedObjectContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectContext);
	}
	public parameterizedObject(): ParameterizedObjectContext | undefined {
		return this.tryGetRuleContext(0, ParameterizedObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_object; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterObject) {
			listener.enterObject(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitObject) {
			listener.exitObject(this);
		}
	}
}


export class ParameterizedObjectContext extends ParserRuleContext {
	public definedObject(): DefinedObjectContext {
		return this.getRuleContext(0, DefinedObjectContext);
	}
	public actualParameterList(): ActualParameterListContext {
		return this.getRuleContext(0, ActualParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_parameterizedObject; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterParameterizedObject) {
			listener.enterParameterizedObject(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitParameterizedObject) {
			listener.exitParameterizedObject(this);
		}
	}
}


export class DefinedObjectContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASNParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_definedObject; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterDefinedObject) {
			listener.enterDefinedObject(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitDefinedObject) {
			listener.exitDefinedObject(this);
		}
	}
}


export class ObjectSetContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASNParser.L_BRACE, 0); }
	public objectSetSpec(): ObjectSetSpecContext {
		return this.getRuleContext(0, ObjectSetSpecContext);
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASNParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_objectSet; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterObjectSet) {
			listener.enterObjectSet(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitObjectSet) {
			listener.exitObjectSet(this);
		}
	}
}


export class ObjectSetSpecContext extends ParserRuleContext {
	public rootElementSetSpec(): RootElementSetSpecContext | undefined {
		return this.tryGetRuleContext(0, RootElementSetSpecContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(ASNParser.ELLIPSIS, 0); }
	public additionalElementSetSpec(): AdditionalElementSetSpecContext | undefined {
		return this.tryGetRuleContext(0, AdditionalElementSetSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_objectSetSpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterObjectSetSpec) {
			listener.enterObjectSetSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitObjectSetSpec) {
			listener.exitObjectSetSpec(this);
		}
	}
}


export class FieldNameContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode[];
	public AMPERSAND(i: number): TerminalNode;
	public AMPERSAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.AMPERSAND);
		} else {
			return this.getToken(ASNParser.AMPERSAND, i);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.IDENTIFIER);
		} else {
			return this.getToken(ASNParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.DOT);
		} else {
			return this.getToken(ASNParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_fieldName; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterFieldName) {
			listener.enterFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitFieldName) {
			listener.exitFieldName(this);
		}
	}
}


export class ValueSetContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASNParser.L_BRACE, 0); }
	public elementSetSpecs(): ElementSetSpecsContext {
		return this.getRuleContext(0, ElementSetSpecsContext);
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASNParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_valueSet; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterValueSet) {
			listener.enterValueSet(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitValueSet) {
			listener.exitValueSet(this);
		}
	}
}


export class ElementSetSpecsContext extends ParserRuleContext {
	public rootElementSetSpec(): RootElementSetSpecContext {
		return this.getRuleContext(0, RootElementSetSpecContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(ASNParser.ELLIPSIS, 0); }
	public additionalElementSetSpec(): AdditionalElementSetSpecContext | undefined {
		return this.tryGetRuleContext(0, AdditionalElementSetSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_elementSetSpecs; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterElementSetSpecs) {
			listener.enterElementSetSpecs(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitElementSetSpecs) {
			listener.exitElementSetSpecs(this);
		}
	}
}


export class RootElementSetSpecContext extends ParserRuleContext {
	public elementSetSpec(): ElementSetSpecContext {
		return this.getRuleContext(0, ElementSetSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_rootElementSetSpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterRootElementSetSpec) {
			listener.enterRootElementSetSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitRootElementSetSpec) {
			listener.exitRootElementSetSpec(this);
		}
	}
}


export class AdditionalElementSetSpecContext extends ParserRuleContext {
	public elementSetSpec(): ElementSetSpecContext {
		return this.getRuleContext(0, ElementSetSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_additionalElementSetSpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterAdditionalElementSetSpec) {
			listener.enterAdditionalElementSetSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitAdditionalElementSetSpec) {
			listener.exitAdditionalElementSetSpec(this);
		}
	}
}


export class ElementSetSpecContext extends ParserRuleContext {
	public unions(): UnionsContext | undefined {
		return this.tryGetRuleContext(0, UnionsContext);
	}
	public ALL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.ALL_LITERAL, 0); }
	public exclusions(): ExclusionsContext | undefined {
		return this.tryGetRuleContext(0, ExclusionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_elementSetSpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterElementSetSpec) {
			listener.enterElementSetSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitElementSetSpec) {
			listener.exitElementSetSpec(this);
		}
	}
}


export class UnionsContext extends ParserRuleContext {
	public intersections(): IntersectionsContext[];
	public intersections(i: number): IntersectionsContext;
	public intersections(i?: number): IntersectionsContext | IntersectionsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntersectionsContext);
		} else {
			return this.getRuleContext(i, IntersectionsContext);
		}
	}
	public unionMark(): UnionMarkContext[];
	public unionMark(i: number): UnionMarkContext;
	public unionMark(i?: number): UnionMarkContext | UnionMarkContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnionMarkContext);
		} else {
			return this.getRuleContext(i, UnionMarkContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_unions; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterUnions) {
			listener.enterUnions(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitUnions) {
			listener.exitUnions(this);
		}
	}
}


export class ExclusionsContext extends ParserRuleContext {
	public EXCEPT_LITERAL(): TerminalNode { return this.getToken(ASNParser.EXCEPT_LITERAL, 0); }
	public elements(): ElementsContext {
		return this.getRuleContext(0, ElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_exclusions; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterExclusions) {
			listener.enterExclusions(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitExclusions) {
			listener.exitExclusions(this);
		}
	}
}


export class IntersectionsContext extends ParserRuleContext {
	public intersectionElements(): IntersectionElementsContext[];
	public intersectionElements(i: number): IntersectionElementsContext;
	public intersectionElements(i?: number): IntersectionElementsContext | IntersectionElementsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntersectionElementsContext);
		} else {
			return this.getRuleContext(i, IntersectionElementsContext);
		}
	}
	public intersectionMark(): IntersectionMarkContext[];
	public intersectionMark(i: number): IntersectionMarkContext;
	public intersectionMark(i?: number): IntersectionMarkContext | IntersectionMarkContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntersectionMarkContext);
		} else {
			return this.getRuleContext(i, IntersectionMarkContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_intersections; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterIntersections) {
			listener.enterIntersections(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitIntersections) {
			listener.exitIntersections(this);
		}
	}
}


export class UnionMarkContext extends ParserRuleContext {
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(ASNParser.PIPE, 0); }
	public UNION_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.UNION_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_unionMark; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterUnionMark) {
			listener.enterUnionMark(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitUnionMark) {
			listener.exitUnionMark(this);
		}
	}
}


export class IntersectionMarkContext extends ParserRuleContext {
	public POWER(): TerminalNode | undefined { return this.tryGetToken(ASNParser.POWER, 0); }
	public INTERSECTION_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.INTERSECTION_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_intersectionMark; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterIntersectionMark) {
			listener.enterIntersectionMark(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitIntersectionMark) {
			listener.exitIntersectionMark(this);
		}
	}
}


export class ElementsContext extends ParserRuleContext {
	public subtypeElements(): SubtypeElementsContext {
		return this.getRuleContext(0, SubtypeElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_elements; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterElements) {
			listener.enterElements(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitElements) {
			listener.exitElements(this);
		}
	}
}


export class ObjectSetElementsContext extends ParserRuleContext {
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public definedObject(): DefinedObjectContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_objectSetElements; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterObjectSetElements) {
			listener.enterObjectSetElements(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitObjectSetElements) {
			listener.exitObjectSetElements(this);
		}
	}
}


export class IntersectionElementsContext extends ParserRuleContext {
	public elements(): ElementsContext {
		return this.getRuleContext(0, ElementsContext);
	}
	public exclusions(): ExclusionsContext | undefined {
		return this.tryGetRuleContext(0, ExclusionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_intersectionElements; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterIntersectionElements) {
			listener.enterIntersectionElements(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitIntersectionElements) {
			listener.exitIntersectionElements(this);
		}
	}
}


export class SubtypeElementsContext extends ParserRuleContext {
	public DOUBLE_DOT(): TerminalNode | undefined { return this.tryGetToken(ASNParser.DOUBLE_DOT, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public MIN_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.MIN_LITERAL, 0); }
	public MAX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.MAX_LITERAL, 0); }
	public LESS_THAN(): TerminalNode[];
	public LESS_THAN(i: number): TerminalNode;
	public LESS_THAN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.LESS_THAN);
		} else {
			return this.getToken(ASNParser.LESS_THAN, i);
		}
	}
	public sizeConstraint(): SizeConstraintContext | undefined {
		return this.tryGetRuleContext(0, SizeConstraintContext);
	}
	public PATTERN_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.PATTERN_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_subtypeElements; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSubtypeElements) {
			listener.enterSubtypeElements(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSubtypeElements) {
			listener.exitSubtypeElements(this);
		}
	}
}


export class VariableTypeValueSetFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASNParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public valueSetOptionalitySpec(): ValueSetOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueSetOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_variableTypeValueSetFieldSpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterVariableTypeValueSetFieldSpec) {
			listener.enterVariableTypeValueSetFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitVariableTypeValueSetFieldSpec) {
			listener.exitVariableTypeValueSetFieldSpec(this);
		}
	}
}


export class ObjectFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASNParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public definedObjectClass(): DefinedObjectClassContext {
		return this.getRuleContext(0, DefinedObjectClassContext);
	}
	public objectOptionalitySpec(): ObjectOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ObjectOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_objectFieldSpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterObjectFieldSpec) {
			listener.enterObjectFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitObjectFieldSpec) {
			listener.exitObjectFieldSpec(this);
		}
	}
}


export class ObjectOptionalitySpecContext extends ParserRuleContext {
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.DEFAULT_LITERAL, 0); }
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_objectOptionalitySpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterObjectOptionalitySpec) {
			listener.enterObjectOptionalitySpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitObjectOptionalitySpec) {
			listener.exitObjectOptionalitySpec(this);
		}
	}
}


export class ObjectSetFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASNParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public definedObjectClass(): DefinedObjectClassContext {
		return this.getRuleContext(0, DefinedObjectClassContext);
	}
	public objectSetOptionalitySpec(): ObjectSetOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ObjectSetOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_objectSetFieldSpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterObjectSetFieldSpec) {
			listener.enterObjectSetFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitObjectSetFieldSpec) {
			listener.exitObjectSetFieldSpec(this);
		}
	}
}


export class ObjectSetOptionalitySpecContext extends ParserRuleContext {
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.DEFAULT_LITERAL, 0); }
	public objectSet(): ObjectSetContext | undefined {
		return this.tryGetRuleContext(0, ObjectSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_objectSetOptionalitySpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterObjectSetOptionalitySpec) {
			listener.enterObjectSetOptionalitySpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitObjectSetOptionalitySpec) {
			listener.exitObjectSetOptionalitySpec(this);
		}
	}
}


export class TypeAssignmentContext extends ParserRuleContext {
	public ASSIGN_OP(): TerminalNode { return this.getToken(ASNParser.ASSIGN_OP, 0); }
	public asnType(): AsnTypeContext {
		return this.getRuleContext(0, AsnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_typeAssignment; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterTypeAssignment) {
			listener.enterTypeAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitTypeAssignment) {
			listener.exitTypeAssignment(this);
		}
	}
}


export class ValueAssignmentContext extends ParserRuleContext {
	public asnType(): AsnTypeContext {
		return this.getRuleContext(0, AsnTypeContext);
	}
	public ASSIGN_OP(): TerminalNode { return this.getToken(ASNParser.ASSIGN_OP, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_valueAssignment; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterValueAssignment) {
			listener.enterValueAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitValueAssignment) {
			listener.exitValueAssignment(this);
		}
	}
}


export class AsnTypeContext extends ParserRuleContext {
	public builtinType(): BuiltinTypeContext | undefined {
		return this.tryGetRuleContext(0, BuiltinTypeContext);
	}
	public referencedType(): ReferencedTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferencedTypeContext);
	}
	public constraint(): ConstraintContext[];
	public constraint(i: number): ConstraintContext;
	public constraint(i?: number): ConstraintContext | ConstraintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstraintContext);
		} else {
			return this.getRuleContext(i, ConstraintContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_asnType; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterAsnType) {
			listener.enterAsnType(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitAsnType) {
			listener.exitAsnType(this);
		}
	}
}


export class BuiltinTypeContext extends ParserRuleContext {
	public octetStringType(): OctetStringTypeContext | undefined {
		return this.tryGetRuleContext(0, OctetStringTypeContext);
	}
	public bitStringType(): BitStringTypeContext | undefined {
		return this.tryGetRuleContext(0, BitStringTypeContext);
	}
	public choiceType(): ChoiceTypeContext | undefined {
		return this.tryGetRuleContext(0, ChoiceTypeContext);
	}
	public enumeratedType(): EnumeratedTypeContext | undefined {
		return this.tryGetRuleContext(0, EnumeratedTypeContext);
	}
	public integerType(): IntegerTypeContext | undefined {
		return this.tryGetRuleContext(0, IntegerTypeContext);
	}
	public sequenceType(): SequenceTypeContext | undefined {
		return this.tryGetRuleContext(0, SequenceTypeContext);
	}
	public sequenceOfType(): SequenceOfTypeContext | undefined {
		return this.tryGetRuleContext(0, SequenceOfTypeContext);
	}
	public setType(): SetTypeContext | undefined {
		return this.tryGetRuleContext(0, SetTypeContext);
	}
	public setOfType(): SetOfTypeContext | undefined {
		return this.tryGetRuleContext(0, SetOfTypeContext);
	}
	public objectidentifiertype(): ObjectidentifiertypeContext | undefined {
		return this.tryGetRuleContext(0, ObjectidentifiertypeContext);
	}
	public objectClassFieldType(): ObjectClassFieldTypeContext | undefined {
		return this.tryGetRuleContext(0, ObjectClassFieldTypeContext);
	}
	public BOOLEAN_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.BOOLEAN_LITERAL, 0); }
	public NULL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.NULL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_builtinType; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterBuiltinType) {
			listener.enterBuiltinType(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitBuiltinType) {
			listener.exitBuiltinType(this);
		}
	}
}


export class ObjectClassFieldTypeContext extends ParserRuleContext {
	public definedObjectClass(): DefinedObjectClassContext {
		return this.getRuleContext(0, DefinedObjectClassContext);
	}
	public DOT(): TerminalNode { return this.getToken(ASNParser.DOT, 0); }
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_objectClassFieldType; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterObjectClassFieldType) {
			listener.enterObjectClassFieldType(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitObjectClassFieldType) {
			listener.exitObjectClassFieldType(this);
		}
	}
}


export class SetTypeContext extends ParserRuleContext {
	public SET_LITERAL(): TerminalNode { return this.getToken(ASNParser.SET_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASNParser.L_BRACE, 0); }
	public R_BRACE(): TerminalNode { return this.getToken(ASNParser.R_BRACE, 0); }
	public extensionAndException(): ExtensionAndExceptionContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
	}
	public optionalExtensionMarker(): OptionalExtensionMarkerContext | undefined {
		return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
	}
	public componentTypeLists(): ComponentTypeListsContext | undefined {
		return this.tryGetRuleContext(0, ComponentTypeListsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_setType; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSetType) {
			listener.enterSetType(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSetType) {
			listener.exitSetType(this);
		}
	}
}


export class SetOfTypeContext extends ParserRuleContext {
	public SET_LITERAL(): TerminalNode { return this.getToken(ASNParser.SET_LITERAL, 0); }
	public OF_LITERAL(): TerminalNode { return this.getToken(ASNParser.OF_LITERAL, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public namedType(): NamedTypeContext | undefined {
		return this.tryGetRuleContext(0, NamedTypeContext);
	}
	public constraint(): ConstraintContext | undefined {
		return this.tryGetRuleContext(0, ConstraintContext);
	}
	public sizeConstraint(): SizeConstraintContext | undefined {
		return this.tryGetRuleContext(0, SizeConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_setOfType; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSetOfType) {
			listener.enterSetOfType(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSetOfType) {
			listener.exitSetOfType(this);
		}
	}
}


export class ReferencedTypeContext extends ParserRuleContext {
	public definedType(): DefinedTypeContext {
		return this.getRuleContext(0, DefinedTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_referencedType; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterReferencedType) {
			listener.enterReferencedType(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitReferencedType) {
			listener.exitReferencedType(this);
		}
	}
}


export class DefinedTypeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.IDENTIFIER);
		} else {
			return this.getToken(ASNParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASNParser.DOT, 0); }
	public actualParameterList(): ActualParameterListContext | undefined {
		return this.tryGetRuleContext(0, ActualParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_definedType; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterDefinedType) {
			listener.enterDefinedType(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitDefinedType) {
			listener.exitDefinedType(this);
		}
	}
}


export class ConstraintContext extends ParserRuleContext {
	public L_PARAN(): TerminalNode { return this.getToken(ASNParser.L_PARAN, 0); }
	public constraintSpec(): ConstraintSpecContext {
		return this.getRuleContext(0, ConstraintSpecContext);
	}
	public R_PARAN(): TerminalNode { return this.getToken(ASNParser.R_PARAN, 0); }
	public exceptionSpec(): ExceptionSpecContext | undefined {
		return this.tryGetRuleContext(0, ExceptionSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_constraint; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterConstraint) {
			listener.enterConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitConstraint) {
			listener.exitConstraint(this);
		}
	}
}


export class ConstraintSpecContext extends ParserRuleContext {
	public generalConstraint(): GeneralConstraintContext | undefined {
		return this.tryGetRuleContext(0, GeneralConstraintContext);
	}
	public subtypeConstraint(): SubtypeConstraintContext | undefined {
		return this.tryGetRuleContext(0, SubtypeConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_constraintSpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterConstraintSpec) {
			listener.enterConstraintSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitConstraintSpec) {
			listener.exitConstraintSpec(this);
		}
	}
}


export class UserDefinedConstraintContext extends ParserRuleContext {
	public CONSTRAINED_LITERAL(): TerminalNode { return this.getToken(ASNParser.CONSTRAINED_LITERAL, 0); }
	public BY_LITERAL(): TerminalNode { return this.getToken(ASNParser.BY_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASNParser.L_BRACE, 0); }
	public userDefinedConstraintParameter(): UserDefinedConstraintParameterContext[];
	public userDefinedConstraintParameter(i: number): UserDefinedConstraintParameterContext;
	public userDefinedConstraintParameter(i?: number): UserDefinedConstraintParameterContext | UserDefinedConstraintParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UserDefinedConstraintParameterContext);
		} else {
			return this.getRuleContext(i, UserDefinedConstraintParameterContext);
		}
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASNParser.R_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_userDefinedConstraint; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterUserDefinedConstraint) {
			listener.enterUserDefinedConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitUserDefinedConstraint) {
			listener.exitUserDefinedConstraint(this);
		}
	}
}


export class GeneralConstraintContext extends ParserRuleContext {
	public userDefinedConstraint(): UserDefinedConstraintContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedConstraintContext);
	}
	public tableConstraint(): TableConstraintContext | undefined {
		return this.tryGetRuleContext(0, TableConstraintContext);
	}
	public contentsConstraint(): ContentsConstraintContext | undefined {
		return this.tryGetRuleContext(0, ContentsConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_generalConstraint; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterGeneralConstraint) {
			listener.enterGeneralConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitGeneralConstraint) {
			listener.exitGeneralConstraint(this);
		}
	}
}


export class UserDefinedConstraintParameterContext extends ParserRuleContext {
	public governor(): GovernorContext {
		return this.getRuleContext(0, GovernorContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ASNParser.COLON, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public valueSet(): ValueSetContext | undefined {
		return this.tryGetRuleContext(0, ValueSetContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public objectSet(): ObjectSetContext | undefined {
		return this.tryGetRuleContext(0, ObjectSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_userDefinedConstraintParameter; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterUserDefinedConstraintParameter) {
			listener.enterUserDefinedConstraintParameter(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitUserDefinedConstraintParameter) {
			listener.exitUserDefinedConstraintParameter(this);
		}
	}
}


export class TableConstraintContext extends ParserRuleContext {
	public componentRelationConstraint(): ComponentRelationConstraintContext {
		return this.getRuleContext(0, ComponentRelationConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_tableConstraint; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterTableConstraint) {
			listener.enterTableConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitTableConstraint) {
			listener.exitTableConstraint(this);
		}
	}
}


export class SimpleTableConstraintContext extends ParserRuleContext {
	public objectSet(): ObjectSetContext {
		return this.getRuleContext(0, ObjectSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_simpleTableConstraint; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSimpleTableConstraint) {
			listener.enterSimpleTableConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSimpleTableConstraint) {
			listener.exitSimpleTableConstraint(this);
		}
	}
}


export class ContentsConstraintContext extends ParserRuleContext {
	public CONTAINING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.CONTAINING_LITERAL, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public ENCODED_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.ENCODED_LITERAL, 0); }
	public BY_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.BY_LITERAL, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public WITH_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.WITH_LITERAL, 0); }
	public COMPONENTS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.COMPONENTS_LITERAL, 0); }
	public L_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASNParser.L_BRACE, 0); }
	public componentPresenceLists(): ComponentPresenceListsContext | undefined {
		return this.tryGetRuleContext(0, ComponentPresenceListsContext);
	}
	public R_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASNParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_contentsConstraint; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterContentsConstraint) {
			listener.enterContentsConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitContentsConstraint) {
			listener.exitContentsConstraint(this);
		}
	}
}


export class ComponentPresenceListsContext extends ParserRuleContext {
	public componentPresenceList(): ComponentPresenceListContext[];
	public componentPresenceList(i: number): ComponentPresenceListContext;
	public componentPresenceList(i?: number): ComponentPresenceListContext | ComponentPresenceListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentPresenceListContext);
		} else {
			return this.getRuleContext(i, ComponentPresenceListContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(ASNParser.ELLIPSIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_componentPresenceLists; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterComponentPresenceLists) {
			listener.enterComponentPresenceLists(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitComponentPresenceLists) {
			listener.exitComponentPresenceLists(this);
		}
	}
}


export class ComponentPresenceListContext extends ParserRuleContext {
	public componentPresence(): ComponentPresenceContext[];
	public componentPresence(i: number): ComponentPresenceContext;
	public componentPresence(i?: number): ComponentPresenceContext | ComponentPresenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentPresenceContext);
		} else {
			return this.getRuleContext(i, ComponentPresenceContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_componentPresenceList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterComponentPresenceList) {
			listener.enterComponentPresenceList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitComponentPresenceList) {
			listener.exitComponentPresenceList(this);
		}
	}
}


export class ComponentPresenceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public ABSENT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.ABSENT_LITERAL, 0); }
	public PRESENT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.PRESENT_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_componentPresence; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterComponentPresence) {
			listener.enterComponentPresence(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitComponentPresence) {
			listener.exitComponentPresence(this);
		}
	}
}


export class SubtypeConstraintContext extends ParserRuleContext {
	public elementSetSpecs(): ElementSetSpecsContext {
		return this.getRuleContext(0, ElementSetSpecsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_subtypeConstraint; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSubtypeConstraint) {
			listener.enterSubtypeConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSubtypeConstraint) {
			listener.exitSubtypeConstraint(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public builtinValue(): BuiltinValueContext {
		return this.getRuleContext(0, BuiltinValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_value; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
}


export class BuiltinValueContext extends ParserRuleContext {
	public enumeratedValue(): EnumeratedValueContext | undefined {
		return this.tryGetRuleContext(0, EnumeratedValueContext);
	}
	public integerValue(): IntegerValueContext | undefined {
		return this.tryGetRuleContext(0, IntegerValueContext);
	}
	public choiceValue(): ChoiceValueContext | undefined {
		return this.tryGetRuleContext(0, ChoiceValueContext);
	}
	public objectIdentifierValue(): ObjectIdentifierValueContext | undefined {
		return this.tryGetRuleContext(0, ObjectIdentifierValueContext);
	}
	public booleanValue(): BooleanValueContext | undefined {
		return this.tryGetRuleContext(0, BooleanValueContext);
	}
	public CSTRING(): TerminalNode | undefined { return this.tryGetToken(ASNParser.CSTRING, 0); }
	public BSTRING(): TerminalNode | undefined { return this.tryGetToken(ASNParser.BSTRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_builtinValue; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterBuiltinValue) {
			listener.enterBuiltinValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitBuiltinValue) {
			listener.exitBuiltinValue(this);
		}
	}
}


export class ObjectIdentifierValueContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASNParser.L_BRACE, 0); }
	public objIdComponentsList(): ObjIdComponentsListContext {
		return this.getRuleContext(0, ObjIdComponentsListContext);
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASNParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_objectIdentifierValue; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterObjectIdentifierValue) {
			listener.enterObjectIdentifierValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitObjectIdentifierValue) {
			listener.exitObjectIdentifierValue(this);
		}
	}
}


export class ObjIdComponentsListContext extends ParserRuleContext {
	public objIdComponents(): ObjIdComponentsContext[];
	public objIdComponents(i: number): ObjIdComponentsContext;
	public objIdComponents(i?: number): ObjIdComponentsContext | ObjIdComponentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjIdComponentsContext);
		} else {
			return this.getRuleContext(i, ObjIdComponentsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_objIdComponentsList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterObjIdComponentsList) {
			listener.enterObjIdComponentsList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitObjIdComponentsList) {
			listener.exitObjIdComponentsList(this);
		}
	}
}


export class ObjIdComponentsContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ASNParser.NUMBER, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASNParser.IDENTIFIER, 0); }
	public L_PARAN(): TerminalNode | undefined { return this.tryGetToken(ASNParser.L_PARAN, 0); }
	public R_PARAN(): TerminalNode | undefined { return this.tryGetToken(ASNParser.R_PARAN, 0); }
	public definedValue(): DefinedValueContext | undefined {
		return this.tryGetRuleContext(0, DefinedValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_objIdComponents; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterObjIdComponents) {
			listener.enterObjIdComponents(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitObjIdComponents) {
			listener.exitObjIdComponents(this);
		}
	}
}


export class IntegerValueContext extends ParserRuleContext {
	public signedNumber(): SignedNumberContext | undefined {
		return this.tryGetRuleContext(0, SignedNumberContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASNParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_integerValue; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterIntegerValue) {
			listener.enterIntegerValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitIntegerValue) {
			listener.exitIntegerValue(this);
		}
	}
}


export class ChoiceValueContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode { return this.getToken(ASNParser.COLON, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_choiceValue; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterChoiceValue) {
			listener.enterChoiceValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitChoiceValue) {
			listener.exitChoiceValue(this);
		}
	}
}


export class EnumeratedValueContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_enumeratedValue; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterEnumeratedValue) {
			listener.enterEnumeratedValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitEnumeratedValue) {
			listener.exitEnumeratedValue(this);
		}
	}
}


export class SignedNumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(ASNParser.NUMBER, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ASNParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_signedNumber; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSignedNumber) {
			listener.enterSignedNumber(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSignedNumber) {
			listener.exitSignedNumber(this);
		}
	}
}


export class ChoiceTypeContext extends ParserRuleContext {
	public CHOICE_LITERAL(): TerminalNode { return this.getToken(ASNParser.CHOICE_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASNParser.L_BRACE, 0); }
	public alternativeTypeLists(): AlternativeTypeListsContext {
		return this.getRuleContext(0, AlternativeTypeListsContext);
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASNParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_choiceType; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterChoiceType) {
			listener.enterChoiceType(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitChoiceType) {
			listener.exitChoiceType(this);
		}
	}
}


export class AlternativeTypeListsContext extends ParserRuleContext {
	public rootAlternativeTypeList(): RootAlternativeTypeListContext {
		return this.getRuleContext(0, RootAlternativeTypeListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASNParser.COMMA, 0); }
	public extensionAndException(): ExtensionAndExceptionContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
	}
	public extensionAdditionAlternatives(): ExtensionAdditionAlternativesContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionAlternativesContext);
	}
	public optionalExtensionMarker(): OptionalExtensionMarkerContext | undefined {
		return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_alternativeTypeLists; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterAlternativeTypeLists) {
			listener.enterAlternativeTypeLists(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitAlternativeTypeLists) {
			listener.exitAlternativeTypeLists(this);
		}
	}
}


export class ExtensionAdditionAlternativesContext extends ParserRuleContext {
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASNParser.COMMA, 0); }
	public extensionAdditionAlternativesList(): ExtensionAdditionAlternativesListContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionAlternativesListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_extensionAdditionAlternatives; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterExtensionAdditionAlternatives) {
			listener.enterExtensionAdditionAlternatives(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitExtensionAdditionAlternatives) {
			listener.exitExtensionAdditionAlternatives(this);
		}
	}
}


export class ExtensionAdditionAlternativesListContext extends ParserRuleContext {
	public extensionAdditionAlternative(): ExtensionAdditionAlternativeContext[];
	public extensionAdditionAlternative(i: number): ExtensionAdditionAlternativeContext;
	public extensionAdditionAlternative(i?: number): ExtensionAdditionAlternativeContext | ExtensionAdditionAlternativeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtensionAdditionAlternativeContext);
		} else {
			return this.getRuleContext(i, ExtensionAdditionAlternativeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_extensionAdditionAlternativesList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterExtensionAdditionAlternativesList) {
			listener.enterExtensionAdditionAlternativesList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitExtensionAdditionAlternativesList) {
			listener.exitExtensionAdditionAlternativesList(this);
		}
	}
}


export class ExtensionAdditionAlternativeContext extends ParserRuleContext {
	public extensionAdditionAlternativesGroup(): ExtensionAdditionAlternativesGroupContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionAlternativesGroupContext);
	}
	public namedType(): NamedTypeContext | undefined {
		return this.tryGetRuleContext(0, NamedTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_extensionAdditionAlternative; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterExtensionAdditionAlternative) {
			listener.enterExtensionAdditionAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitExtensionAdditionAlternative) {
			listener.exitExtensionAdditionAlternative(this);
		}
	}
}


export class ExtensionAdditionAlternativesGroupContext extends ParserRuleContext {
	public DOUBLE_L_BRACKET(): TerminalNode { return this.getToken(ASNParser.DOUBLE_L_BRACKET, 0); }
	public versionNumber(): VersionNumberContext {
		return this.getRuleContext(0, VersionNumberContext);
	}
	public alternativeTypeList(): AlternativeTypeListContext {
		return this.getRuleContext(0, AlternativeTypeListContext);
	}
	public DOUBLE_R_BRACKET(): TerminalNode { return this.getToken(ASNParser.DOUBLE_R_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_extensionAdditionAlternativesGroup; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterExtensionAdditionAlternativesGroup) {
			listener.enterExtensionAdditionAlternativesGroup(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitExtensionAdditionAlternativesGroup) {
			listener.exitExtensionAdditionAlternativesGroup(this);
		}
	}
}


export class RootAlternativeTypeListContext extends ParserRuleContext {
	public alternativeTypeList(): AlternativeTypeListContext {
		return this.getRuleContext(0, AlternativeTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_rootAlternativeTypeList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterRootAlternativeTypeList) {
			listener.enterRootAlternativeTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitRootAlternativeTypeList) {
			listener.exitRootAlternativeTypeList(this);
		}
	}
}


export class AlternativeTypeListContext extends ParserRuleContext {
	public namedType(): NamedTypeContext[];
	public namedType(i: number): NamedTypeContext;
	public namedType(i?: number): NamedTypeContext | NamedTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedTypeContext);
		} else {
			return this.getRuleContext(i, NamedTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_alternativeTypeList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterAlternativeTypeList) {
			listener.enterAlternativeTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitAlternativeTypeList) {
			listener.exitAlternativeTypeList(this);
		}
	}
}


export class NamedTypeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public asnType(): AsnTypeContext {
		return this.getRuleContext(0, AsnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_namedType; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterNamedType) {
			listener.enterNamedType(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitNamedType) {
			listener.exitNamedType(this);
		}
	}
}


export class EnumeratedTypeContext extends ParserRuleContext {
	public ENUMERATED_LITERAL(): TerminalNode { return this.getToken(ASNParser.ENUMERATED_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASNParser.L_BRACE, 0); }
	public enumerations(): EnumerationsContext {
		return this.getRuleContext(0, EnumerationsContext);
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASNParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_enumeratedType; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterEnumeratedType) {
			listener.enterEnumeratedType(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitEnumeratedType) {
			listener.exitEnumeratedType(this);
		}
	}
}


export class EnumerationsContext extends ParserRuleContext {
	public rootEnumeration(): RootEnumerationContext {
		return this.getRuleContext(0, RootEnumerationContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(ASNParser.ELLIPSIS, 0); }
	public exceptionSpec(): ExceptionSpecContext | undefined {
		return this.tryGetRuleContext(0, ExceptionSpecContext);
	}
	public additionalEnumeration(): AdditionalEnumerationContext | undefined {
		return this.tryGetRuleContext(0, AdditionalEnumerationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_enumerations; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterEnumerations) {
			listener.enterEnumerations(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitEnumerations) {
			listener.exitEnumerations(this);
		}
	}
}


export class RootEnumerationContext extends ParserRuleContext {
	public enumeration(): EnumerationContext {
		return this.getRuleContext(0, EnumerationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_rootEnumeration; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterRootEnumeration) {
			listener.enterRootEnumeration(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitRootEnumeration) {
			listener.exitRootEnumeration(this);
		}
	}
}


export class EnumerationContext extends ParserRuleContext {
	public enumerationItem(): EnumerationItemContext[];
	public enumerationItem(i: number): EnumerationItemContext;
	public enumerationItem(i?: number): EnumerationItemContext | EnumerationItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumerationItemContext);
		} else {
			return this.getRuleContext(i, EnumerationItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_enumeration; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterEnumeration) {
			listener.enterEnumeration(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitEnumeration) {
			listener.exitEnumeration(this);
		}
	}
}


export class EnumerationItemContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASNParser.IDENTIFIER, 0); }
	public namedNumber(): NamedNumberContext | undefined {
		return this.tryGetRuleContext(0, NamedNumberContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_enumerationItem; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterEnumerationItem) {
			listener.enterEnumerationItem(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitEnumerationItem) {
			listener.exitEnumerationItem(this);
		}
	}
}


export class NamedNumberContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public L_PARAN(): TerminalNode { return this.getToken(ASNParser.L_PARAN, 0); }
	public R_PARAN(): TerminalNode { return this.getToken(ASNParser.R_PARAN, 0); }
	public signedNumber(): SignedNumberContext | undefined {
		return this.tryGetRuleContext(0, SignedNumberContext);
	}
	public definedValue(): DefinedValueContext | undefined {
		return this.tryGetRuleContext(0, DefinedValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_namedNumber; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterNamedNumber) {
			listener.enterNamedNumber(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitNamedNumber) {
			listener.exitNamedNumber(this);
		}
	}
}


export class DefinedValueContext extends ParserRuleContext {
	public parameterizedValue(): ParameterizedValueContext {
		return this.getRuleContext(0, ParameterizedValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_definedValue; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterDefinedValue) {
			listener.enterDefinedValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitDefinedValue) {
			listener.exitDefinedValue(this);
		}
	}
}


export class ParameterizedValueContext extends ParserRuleContext {
	public simpleDefinedValue(): SimpleDefinedValueContext {
		return this.getRuleContext(0, SimpleDefinedValueContext);
	}
	public actualParameterList(): ActualParameterListContext | undefined {
		return this.tryGetRuleContext(0, ActualParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_parameterizedValue; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterParameterizedValue) {
			listener.enterParameterizedValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitParameterizedValue) {
			listener.exitParameterizedValue(this);
		}
	}
}


export class SimpleDefinedValueContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.IDENTIFIER);
		} else {
			return this.getToken(ASNParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASNParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_simpleDefinedValue; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterSimpleDefinedValue) {
			listener.enterSimpleDefinedValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitSimpleDefinedValue) {
			listener.exitSimpleDefinedValue(this);
		}
	}
}


export class ActualParameterListContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASNParser.L_BRACE, 0); }
	public actualParameter(): ActualParameterContext[];
	public actualParameter(i: number): ActualParameterContext;
	public actualParameter(i?: number): ActualParameterContext | ActualParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActualParameterContext);
		} else {
			return this.getRuleContext(i, ActualParameterContext);
		}
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASNParser.R_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_actualParameterList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterActualParameterList) {
			listener.enterActualParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitActualParameterList) {
			listener.exitActualParameterList(this);
		}
	}
}


export class ActualParameterContext extends ParserRuleContext {
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_actualParameter; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterActualParameter) {
			listener.enterActualParameter(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitActualParameter) {
			listener.exitActualParameter(this);
		}
	}
}


export class ExceptionSpecContext extends ParserRuleContext {
	public EXCLAM(): TerminalNode { return this.getToken(ASNParser.EXCLAM, 0); }
	public exceptionIdentification(): ExceptionIdentificationContext {
		return this.getRuleContext(0, ExceptionIdentificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_exceptionSpec; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterExceptionSpec) {
			listener.enterExceptionSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitExceptionSpec) {
			listener.exitExceptionSpec(this);
		}
	}
}


export class ExceptionIdentificationContext extends ParserRuleContext {
	public signedNumber(): SignedNumberContext | undefined {
		return this.tryGetRuleContext(0, SignedNumberContext);
	}
	public definedValue(): DefinedValueContext | undefined {
		return this.tryGetRuleContext(0, DefinedValueContext);
	}
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ASNParser.COLON, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_exceptionIdentification; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterExceptionIdentification) {
			listener.enterExceptionIdentification(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitExceptionIdentification) {
			listener.exitExceptionIdentification(this);
		}
	}
}


export class AdditionalEnumerationContext extends ParserRuleContext {
	public enumeration(): EnumerationContext {
		return this.getRuleContext(0, EnumerationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_additionalEnumeration; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterAdditionalEnumeration) {
			listener.enterAdditionalEnumeration(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitAdditionalEnumeration) {
			listener.exitAdditionalEnumeration(this);
		}
	}
}


export class IntegerTypeContext extends ParserRuleContext {
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(ASNParser.INTEGER_LITERAL, 0); }
	public L_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASNParser.L_BRACE, 0); }
	public namedNumberList(): NamedNumberListContext | undefined {
		return this.tryGetRuleContext(0, NamedNumberListContext);
	}
	public R_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASNParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_integerType; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterIntegerType) {
			listener.enterIntegerType(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitIntegerType) {
			listener.exitIntegerType(this);
		}
	}
}


export class NamedNumberListContext extends ParserRuleContext {
	public namedNumber(): NamedNumberContext[];
	public namedNumber(i: number): NamedNumberContext;
	public namedNumber(i?: number): NamedNumberContext | NamedNumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedNumberContext);
		} else {
			return this.getRuleContext(i, NamedNumberContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_namedNumberList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterNamedNumberList) {
			listener.enterNamedNumberList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitNamedNumberList) {
			listener.exitNamedNumberList(this);
		}
	}
}


export class ObjectidentifiertypeContext extends ParserRuleContext {
	public OBJECT_LITERAL(): TerminalNode { return this.getToken(ASNParser.OBJECT_LITERAL, 0); }
	public IDENTIFIER_LITERAL(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_objectidentifiertype; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterObjectidentifiertype) {
			listener.enterObjectidentifiertype(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitObjectidentifiertype) {
			listener.exitObjectidentifiertype(this);
		}
	}
}


export class ComponentRelationConstraintContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode[];
	public L_BRACE(i: number): TerminalNode;
	public L_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.L_BRACE);
		} else {
			return this.getToken(ASNParser.L_BRACE, i);
		}
	}
	public R_BRACE(): TerminalNode[];
	public R_BRACE(i: number): TerminalNode;
	public R_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.R_BRACE);
		} else {
			return this.getToken(ASNParser.R_BRACE, i);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.IDENTIFIER);
		} else {
			return this.getToken(ASNParser.IDENTIFIER, i);
		}
	}
	public atNotation(): AtNotationContext[];
	public atNotation(i: number): AtNotationContext;
	public atNotation(i?: number): AtNotationContext | AtNotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtNotationContext);
		} else {
			return this.getRuleContext(i, AtNotationContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASNParser.DOT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_componentRelationConstraint; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterComponentRelationConstraint) {
			listener.enterComponentRelationConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitComponentRelationConstraint) {
			listener.exitComponentRelationConstraint(this);
		}
	}
}


export class AtNotationContext extends ParserRuleContext {
	public componentIdList(): ComponentIdListContext {
		return this.getRuleContext(0, ComponentIdListContext);
	}
	public A_ROND(): TerminalNode | undefined { return this.tryGetToken(ASNParser.A_ROND, 0); }
	public A_ROND_DOT(): TerminalNode | undefined { return this.tryGetToken(ASNParser.A_ROND_DOT, 0); }
	public level(): LevelContext | undefined {
		return this.tryGetRuleContext(0, LevelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_atNotation; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterAtNotation) {
			listener.enterAtNotation(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitAtNotation) {
			listener.exitAtNotation(this);
		}
	}
}


export class LevelContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASNParser.DOT, 0); }
	public level(): LevelContext | undefined {
		return this.tryGetRuleContext(0, LevelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_level; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterLevel) {
			listener.enterLevel(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitLevel) {
			listener.exitLevel(this);
		}
	}
}


export class ComponentIdListContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.IDENTIFIER);
		} else {
			return this.getToken(ASNParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.DOT);
		} else {
			return this.getToken(ASNParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_componentIdList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterComponentIdList) {
			listener.enterComponentIdList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitComponentIdList) {
			listener.exitComponentIdList(this);
		}
	}
}


export class OctetStringTypeContext extends ParserRuleContext {
	public OCTET_LITERAL(): TerminalNode { return this.getToken(ASNParser.OCTET_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(ASNParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_octetStringType; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterOctetStringType) {
			listener.enterOctetStringType(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitOctetStringType) {
			listener.exitOctetStringType(this);
		}
	}
}


export class BitStringTypeContext extends ParserRuleContext {
	public BIT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.BIT_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.STRING_LITERAL, 0); }
	public L_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASNParser.L_BRACE, 0); }
	public namedBitList(): NamedBitListContext | undefined {
		return this.tryGetRuleContext(0, NamedBitListContext);
	}
	public R_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASNParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_bitStringType; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterBitStringType) {
			listener.enterBitStringType(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitBitStringType) {
			listener.exitBitStringType(this);
		}
	}
}


export class NamedBitListContext extends ParserRuleContext {
	public namedBit(): NamedBitContext[];
	public namedBit(i: number): NamedBitContext;
	public namedBit(i?: number): NamedBitContext | NamedBitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedBitContext);
		} else {
			return this.getRuleContext(i, NamedBitContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASNParser.COMMA);
		} else {
			return this.getToken(ASNParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_namedBitList; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterNamedBitList) {
			listener.enterNamedBitList(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitNamedBitList) {
			listener.exitNamedBitList(this);
		}
	}
}


export class NamedBitContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASNParser.IDENTIFIER, 0); }
	public L_PARAN(): TerminalNode { return this.getToken(ASNParser.L_PARAN, 0); }
	public R_PARAN(): TerminalNode { return this.getToken(ASNParser.R_PARAN, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ASNParser.NUMBER, 0); }
	public definedValue(): DefinedValueContext | undefined {
		return this.tryGetRuleContext(0, DefinedValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_namedBit; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterNamedBit) {
			listener.enterNamedBit(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitNamedBit) {
			listener.exitNamedBit(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	public TRUE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.TRUE_LITERAL, 0); }
	public FALSE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.FALSE_LITERAL, 0); }
	public TRUE_SMALL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.TRUE_SMALL_LITERAL, 0); }
	public FALSE_SMALL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASNParser.FALSE_SMALL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASNParser.RULE_booleanValue; }
	// @Override
	public enterRule(listener: ASNListener): void {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASNListener): void {
		if (listener.exitBooleanValue) {
			listener.exitBooleanValue(this);
		}
	}
}


