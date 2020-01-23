// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/webidl/WebIDL.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { WebIDLListener } from "./WebIDLListener";

export class WebIDLParser extends Parser {
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
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly INTEGER_WEBIDL = 80;
	public static readonly FLOAT_WEBIDL = 81;
	public static readonly IDENTIFIER_WEBIDL = 82;
	public static readonly STRING_WEBIDL = 83;
	public static readonly WHITESPACE_WEBIDL = 84;
	public static readonly COMMENT_WEBIDL = 85;
	public static readonly OTHER_WEBIDL = 86;
	public static readonly RULE_webIDL = 0;
	public static readonly RULE_definitions = 1;
	public static readonly RULE_definition = 2;
	public static readonly RULE_callbackOrInterface = 3;
	public static readonly RULE_callbackRestOrInterface = 4;
	public static readonly RULE_interface_ = 5;
	public static readonly RULE_class_ = 6;
	public static readonly RULE_partial = 7;
	public static readonly RULE_partialDefinition = 8;
	public static readonly RULE_partialInterface = 9;
	public static readonly RULE_interfaceMembers = 10;
	public static readonly RULE_interfaceMember = 11;
	public static readonly RULE_dictionary = 12;
	public static readonly RULE_dictionaryMembers = 13;
	public static readonly RULE_dictionaryMember = 14;
	public static readonly RULE_required = 15;
	public static readonly RULE_partialDictionary = 16;
	public static readonly RULE_default_ = 17;
	public static readonly RULE_defaultValue = 18;
	public static readonly RULE_inheritance = 19;
	public static readonly RULE_extension = 20;
	public static readonly RULE_enum_ = 21;
	public static readonly RULE_enumValueList = 22;
	public static readonly RULE_enumValueListComma = 23;
	public static readonly RULE_enumValueListString = 24;
	public static readonly RULE_callbackRest = 25;
	public static readonly RULE_typedef = 26;
	public static readonly RULE_implementsStatement = 27;
	public static readonly RULE_const_ = 28;
	public static readonly RULE_constValue = 29;
	public static readonly RULE_booleanLiteral = 30;
	public static readonly RULE_floatLiteral = 31;
	public static readonly RULE_serializer = 32;
	public static readonly RULE_serializerRest = 33;
	public static readonly RULE_serializationPattern = 34;
	public static readonly RULE_serializationPatternMap = 35;
	public static readonly RULE_serializationPatternList = 36;
	public static readonly RULE_stringifier = 37;
	public static readonly RULE_stringifierRest = 38;
	public static readonly RULE_staticMember = 39;
	public static readonly RULE_staticMemberRest = 40;
	public static readonly RULE_readonlyMember = 41;
	public static readonly RULE_readonlyMemberRest = 42;
	public static readonly RULE_readWriteAttribute = 43;
	public static readonly RULE_attributeRest = 44;
	public static readonly RULE_attributeName = 45;
	public static readonly RULE_attributeNameKeyword = 46;
	public static readonly RULE_inherit = 47;
	public static readonly RULE_readOnly = 48;
	public static readonly RULE_operation = 49;
	public static readonly RULE_specialOperation = 50;
	public static readonly RULE_specials = 51;
	public static readonly RULE_special = 52;
	public static readonly RULE_operationRest = 53;
	public static readonly RULE_optionalIdentifier = 54;
	public static readonly RULE_argumentList = 55;
	public static readonly RULE_arguments = 56;
	public static readonly RULE_argument = 57;
	public static readonly RULE_optionalOrRequiredArgument = 58;
	public static readonly RULE_argumentName = 59;
	public static readonly RULE_ellipsis = 60;
	public static readonly RULE_iterable = 61;
	public static readonly RULE_optionalType = 62;
	public static readonly RULE_readWriteMaplike = 63;
	public static readonly RULE_readWriteSetlike = 64;
	public static readonly RULE_maplikeRest = 65;
	public static readonly RULE_setlikeRest = 66;
	public static readonly RULE_extendedAttributeList = 67;
	public static readonly RULE_extendedAttributes = 68;
	public static readonly RULE_extendedAttribute = 69;
	public static readonly RULE_extendedAttributeRest = 70;
	public static readonly RULE_extendedAttributeInner = 71;
	public static readonly RULE_other = 72;
	public static readonly RULE_argumentNameKeyword = 73;
	public static readonly RULE_otherOrComma = 74;
	public static readonly RULE_type = 75;
	public static readonly RULE_singleType = 76;
	public static readonly RULE_unionType = 77;
	public static readonly RULE_unionMemberType = 78;
	public static readonly RULE_unionMemberTypes = 79;
	public static readonly RULE_nonAnyType = 80;
	public static readonly RULE_bufferRelatedType = 81;
	public static readonly RULE_constType = 82;
	public static readonly RULE_primitiveType = 83;
	public static readonly RULE_unrestrictedFloatType = 84;
	public static readonly RULE_floatType = 85;
	public static readonly RULE_unsignedIntegerType = 86;
	public static readonly RULE_integerType = 87;
	public static readonly RULE_optionalLong = 88;
	public static readonly RULE_promiseType = 89;
	public static readonly RULE_null_ = 90;
	public static readonly RULE_returnType = 91;
	public static readonly RULE_identifierList = 92;
	public static readonly RULE_identifiers = 93;
	public static readonly RULE_extendedAttributeNoArgs = 94;
	public static readonly RULE_extendedAttributeArgList = 95;
	public static readonly RULE_extendedAttributeIdent = 96;
	public static readonly RULE_extendedAttributeIdentList = 97;
	public static readonly RULE_extendedAttributeNamedArgList = 98;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"webIDL", "definitions", "definition", "callbackOrInterface", "callbackRestOrInterface", 
		"interface_", "class_", "partial", "partialDefinition", "partialInterface", 
		"interfaceMembers", "interfaceMember", "dictionary", "dictionaryMembers", 
		"dictionaryMember", "required", "partialDictionary", "default_", "defaultValue", 
		"inheritance", "extension", "enum_", "enumValueList", "enumValueListComma", 
		"enumValueListString", "callbackRest", "typedef", "implementsStatement", 
		"const_", "constValue", "booleanLiteral", "floatLiteral", "serializer", 
		"serializerRest", "serializationPattern", "serializationPatternMap", "serializationPatternList", 
		"stringifier", "stringifierRest", "staticMember", "staticMemberRest", 
		"readonlyMember", "readonlyMemberRest", "readWriteAttribute", "attributeRest", 
		"attributeName", "attributeNameKeyword", "inherit", "readOnly", "operation", 
		"specialOperation", "specials", "special", "operationRest", "optionalIdentifier", 
		"argumentList", "arguments", "argument", "optionalOrRequiredArgument", 
		"argumentName", "ellipsis", "iterable", "optionalType", "readWriteMaplike", 
		"readWriteSetlike", "maplikeRest", "setlikeRest", "extendedAttributeList", 
		"extendedAttributes", "extendedAttribute", "extendedAttributeRest", "extendedAttributeInner", 
		"other", "argumentNameKeyword", "otherOrComma", "type", "singleType", 
		"unionType", "unionMemberType", "unionMemberTypes", "nonAnyType", "bufferRelatedType", 
		"constType", "primitiveType", "unrestrictedFloatType", "floatType", "unsignedIntegerType", 
		"integerType", "optionalLong", "promiseType", "null_", "returnType", "identifierList", 
		"identifiers", "extendedAttributeNoArgs", "extendedAttributeArgList", 
		"extendedAttributeIdent", "extendedAttributeIdentList", "extendedAttributeNamedArgList",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'callback'", "'interface'", "'{'", "'}'", "';'", "'class'", 
		"'partial'", "'dictionary'", "'required'", "'='", "'['", "']'", "':'", 
		"'extends'", "'enum'", "','", "'('", "')'", "'typedef'", "'implements'", 
		"'const'", "'null'", "'true'", "'false'", "'-Infinity'", "'Infinity'", 
		"'NaN'", "'serializer'", "'getter'", "'inherit'", "'stringifier'", "'static'", 
		"'readonly'", "'attribute'", "'setter'", "'deleter'", "'legacycaller'", 
		"'optional'", "'...'", "'iterable'", "'<'", "'>'", "'maplike'", "'setlike'", 
		"'-'", "'.'", "'?'", "'ByteString'", "'DOMString'", "'FrozenArray'", "'RegExp'", 
		"'USVString'", "'any'", "'boolean'", "'byte'", "'double'", "'float'", 
		"'long'", "'object'", "'octet'", "'or'", "'sequence'", "'short'", "'unsigned'", 
		"'void'", "'unrestricted'", "'DOMException'", "'ArrayBuffer'", "'DataView'", 
		"'Int8Array'", "'Int16Array'", "'Int32Array'", "'Uint8Array'", "'Uint16Array'", 
		"'Uint32Array'", "'Uint8ClampedArray'", "'Float32Array'", "'Float64Array'", 
		"'Promise'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "INTEGER_WEBIDL", "FLOAT_WEBIDL", "IDENTIFIER_WEBIDL", 
		"STRING_WEBIDL", "WHITESPACE_WEBIDL", "COMMENT_WEBIDL", "OTHER_WEBIDL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WebIDLParser._LITERAL_NAMES, WebIDLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return WebIDLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "WebIDL.g4"; }

	// @Override
	public get ruleNames(): string[] { return WebIDLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return WebIDLParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(WebIDLParser._ATN, this);
	}
	// @RuleVersion(0)
	public webIDL(): WebIDLContext {
		let _localctx: WebIDLContext = new WebIDLContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, WebIDLParser.RULE_webIDL);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.definitions();
			this.state = 199;
			this.match(WebIDLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definitions(): DefinitionsContext {
		let _localctx: DefinitionsContext = new DefinitionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, WebIDLParser.RULE_definitions);
		try {
			this.state = 206;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__0:
			case WebIDLParser.T__1:
			case WebIDLParser.T__5:
			case WebIDLParser.T__6:
			case WebIDLParser.T__7:
			case WebIDLParser.T__8:
			case WebIDLParser.T__10:
			case WebIDLParser.T__14:
			case WebIDLParser.T__16:
			case WebIDLParser.T__18:
			case WebIDLParser.T__20:
			case WebIDLParser.T__27:
			case WebIDLParser.T__28:
			case WebIDLParser.T__29:
			case WebIDLParser.T__30:
			case WebIDLParser.T__31:
			case WebIDLParser.T__32:
			case WebIDLParser.T__33:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
			case WebIDLParser.T__37:
			case WebIDLParser.T__39:
			case WebIDLParser.T__42:
			case WebIDLParser.T__43:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__64:
			case WebIDLParser.T__65:
			case WebIDLParser.T__66:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.T__78:
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 201;
				this.extendedAttributeList();
				this.state = 202;
				this.definition();
				this.state = 203;
				this.definitions();
				}
				break;
			case WebIDLParser.EOF:
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, WebIDLParser.RULE_definition);
		try {
			this.state = 214;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__0:
			case WebIDLParser.T__1:
			case WebIDLParser.T__5:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 208;
				this.callbackOrInterface();
				}
				break;
			case WebIDLParser.T__6:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 209;
				this.partial();
				}
				break;
			case WebIDLParser.T__7:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 210;
				this.dictionary();
				}
				break;
			case WebIDLParser.T__14:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 211;
				this.enum_();
				}
				break;
			case WebIDLParser.T__18:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 212;
				this.typedef();
				}
				break;
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 213;
				this.implementsStatement();
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
	public callbackOrInterface(): CallbackOrInterfaceContext {
		let _localctx: CallbackOrInterfaceContext = new CallbackOrInterfaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, WebIDLParser.RULE_callbackOrInterface);
		try {
			this.state = 220;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 216;
				this.match(WebIDLParser.T__0);
				this.state = 217;
				this.callbackRestOrInterface();
				}
				break;
			case WebIDLParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 218;
				this.interface_();
				}
				break;
			case WebIDLParser.T__5:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 219;
				this.class_();
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
	public callbackRestOrInterface(): CallbackRestOrInterfaceContext {
		let _localctx: CallbackRestOrInterfaceContext = new CallbackRestOrInterfaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, WebIDLParser.RULE_callbackRestOrInterface);
		try {
			this.state = 224;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 222;
				this.callbackRest();
				}
				break;
			case WebIDLParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 223;
				this.interface_();
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
	public interface_(): Interface_Context {
		let _localctx: Interface_Context = new Interface_Context(this._ctx, this.state);
		this.enterRule(_localctx, 10, WebIDLParser.RULE_interface_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(WebIDLParser.T__1);
			this.state = 227;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 228;
			this.inheritance();
			this.state = 229;
			this.match(WebIDLParser.T__2);
			this.state = 230;
			this.interfaceMembers();
			this.state = 231;
			this.match(WebIDLParser.T__3);
			this.state = 232;
			this.match(WebIDLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public class_(): Class_Context {
		let _localctx: Class_Context = new Class_Context(this._ctx, this.state);
		this.enterRule(_localctx, 12, WebIDLParser.RULE_class_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.match(WebIDLParser.T__5);
			this.state = 235;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 236;
			this.extension();
			this.state = 237;
			this.match(WebIDLParser.T__2);
			this.state = 238;
			this.interfaceMembers();
			this.state = 239;
			this.match(WebIDLParser.T__3);
			this.state = 240;
			this.match(WebIDLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partial(): PartialContext {
		let _localctx: PartialContext = new PartialContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, WebIDLParser.RULE_partial);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(WebIDLParser.T__6);
			this.state = 243;
			this.partialDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partialDefinition(): PartialDefinitionContext {
		let _localctx: PartialDefinitionContext = new PartialDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, WebIDLParser.RULE_partialDefinition);
		try {
			this.state = 247;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 245;
				this.partialInterface();
				}
				break;
			case WebIDLParser.T__7:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 246;
				this.partialDictionary();
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
	public partialInterface(): PartialInterfaceContext {
		let _localctx: PartialInterfaceContext = new PartialInterfaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, WebIDLParser.RULE_partialInterface);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(WebIDLParser.T__1);
			this.state = 250;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 251;
			this.match(WebIDLParser.T__2);
			this.state = 252;
			this.interfaceMembers();
			this.state = 253;
			this.match(WebIDLParser.T__3);
			this.state = 254;
			this.match(WebIDLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMembers(): InterfaceMembersContext {
		let _localctx: InterfaceMembersContext = new InterfaceMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, WebIDLParser.RULE_interfaceMembers);
		try {
			this.state = 261;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__0:
			case WebIDLParser.T__1:
			case WebIDLParser.T__5:
			case WebIDLParser.T__6:
			case WebIDLParser.T__7:
			case WebIDLParser.T__8:
			case WebIDLParser.T__10:
			case WebIDLParser.T__14:
			case WebIDLParser.T__16:
			case WebIDLParser.T__18:
			case WebIDLParser.T__20:
			case WebIDLParser.T__27:
			case WebIDLParser.T__28:
			case WebIDLParser.T__29:
			case WebIDLParser.T__30:
			case WebIDLParser.T__31:
			case WebIDLParser.T__32:
			case WebIDLParser.T__33:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
			case WebIDLParser.T__37:
			case WebIDLParser.T__39:
			case WebIDLParser.T__42:
			case WebIDLParser.T__43:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__64:
			case WebIDLParser.T__65:
			case WebIDLParser.T__66:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.T__78:
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 256;
				this.extendedAttributeList();
				this.state = 257;
				this.interfaceMember();
				this.state = 258;
				this.interfaceMembers();
				}
				break;
			case WebIDLParser.T__3:
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
	public interfaceMember(): InterfaceMemberContext {
		let _localctx: InterfaceMemberContext = new InterfaceMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, WebIDLParser.RULE_interfaceMember);
		try {
			this.state = 273;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__20:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 263;
				this.const_();
				}
				break;
			case WebIDLParser.T__16:
			case WebIDLParser.T__28:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__64:
			case WebIDLParser.T__65:
			case WebIDLParser.T__66:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.T__78:
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 264;
				this.operation();
				}
				break;
			case WebIDLParser.T__27:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 265;
				this.serializer();
				}
				break;
			case WebIDLParser.T__30:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 266;
				this.stringifier();
				}
				break;
			case WebIDLParser.T__31:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 267;
				this.staticMember();
				}
				break;
			case WebIDLParser.T__39:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 268;
				this.iterable();
				}
				break;
			case WebIDLParser.T__32:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 269;
				this.readonlyMember();
				}
				break;
			case WebIDLParser.T__29:
			case WebIDLParser.T__33:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 270;
				this.readWriteAttribute();
				}
				break;
			case WebIDLParser.T__42:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 271;
				this.readWriteMaplike();
				}
				break;
			case WebIDLParser.T__43:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 272;
				this.readWriteSetlike();
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
	public dictionary(): DictionaryContext {
		let _localctx: DictionaryContext = new DictionaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, WebIDLParser.RULE_dictionary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.match(WebIDLParser.T__7);
			this.state = 276;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 277;
			this.inheritance();
			this.state = 278;
			this.match(WebIDLParser.T__2);
			this.state = 279;
			this.dictionaryMembers();
			this.state = 280;
			this.match(WebIDLParser.T__3);
			this.state = 281;
			this.match(WebIDLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dictionaryMembers(): DictionaryMembersContext {
		let _localctx: DictionaryMembersContext = new DictionaryMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, WebIDLParser.RULE_dictionaryMembers);
		try {
			this.state = 288;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__0:
			case WebIDLParser.T__1:
			case WebIDLParser.T__5:
			case WebIDLParser.T__6:
			case WebIDLParser.T__7:
			case WebIDLParser.T__8:
			case WebIDLParser.T__10:
			case WebIDLParser.T__14:
			case WebIDLParser.T__16:
			case WebIDLParser.T__18:
			case WebIDLParser.T__20:
			case WebIDLParser.T__27:
			case WebIDLParser.T__28:
			case WebIDLParser.T__29:
			case WebIDLParser.T__30:
			case WebIDLParser.T__31:
			case WebIDLParser.T__32:
			case WebIDLParser.T__33:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
			case WebIDLParser.T__37:
			case WebIDLParser.T__39:
			case WebIDLParser.T__42:
			case WebIDLParser.T__43:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__64:
			case WebIDLParser.T__65:
			case WebIDLParser.T__66:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.T__78:
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 283;
				this.extendedAttributeList();
				this.state = 284;
				this.dictionaryMember();
				this.state = 285;
				this.dictionaryMembers();
				}
				break;
			case WebIDLParser.T__3:
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
	public dictionaryMember(): DictionaryMemberContext {
		let _localctx: DictionaryMemberContext = new DictionaryMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, WebIDLParser.RULE_dictionaryMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this.required();
			this.state = 291;
			this.type();
			this.state = 292;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 293;
			this.default_();
			this.state = 294;
			this.match(WebIDLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public required(): RequiredContext {
		let _localctx: RequiredContext = new RequiredContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, WebIDLParser.RULE_required);
		try {
			this.state = 298;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__8:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 296;
				this.match(WebIDLParser.T__8);
				}
				break;
			case WebIDLParser.T__16:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__65:
			case WebIDLParser.T__66:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.T__78:
			case WebIDLParser.IDENTIFIER_WEBIDL:
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
	public partialDictionary(): PartialDictionaryContext {
		let _localctx: PartialDictionaryContext = new PartialDictionaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, WebIDLParser.RULE_partialDictionary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			this.match(WebIDLParser.T__7);
			this.state = 301;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 302;
			this.match(WebIDLParser.T__2);
			this.state = 303;
			this.dictionaryMembers();
			this.state = 304;
			this.match(WebIDLParser.T__3);
			this.state = 305;
			this.match(WebIDLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public default_(): Default_Context {
		let _localctx: Default_Context = new Default_Context(this._ctx, this.state);
		this.enterRule(_localctx, 34, WebIDLParser.RULE_default_);
		try {
			this.state = 310;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__9:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 307;
				this.match(WebIDLParser.T__9);
				this.state = 308;
				this.defaultValue();
				}
				break;
			case WebIDLParser.T__4:
			case WebIDLParser.T__15:
			case WebIDLParser.T__17:
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
	public defaultValue(): DefaultValueContext {
		let _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, WebIDLParser.RULE_defaultValue);
		try {
			this.state = 316;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__21:
			case WebIDLParser.T__22:
			case WebIDLParser.T__23:
			case WebIDLParser.T__24:
			case WebIDLParser.T__25:
			case WebIDLParser.T__26:
			case WebIDLParser.INTEGER_WEBIDL:
			case WebIDLParser.FLOAT_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 312;
				this.constValue();
				}
				break;
			case WebIDLParser.STRING_WEBIDL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 313;
				this.match(WebIDLParser.STRING_WEBIDL);
				}
				break;
			case WebIDLParser.T__10:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 314;
				this.match(WebIDLParser.T__10);
				this.state = 315;
				this.match(WebIDLParser.T__11);
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
	public inheritance(): InheritanceContext {
		let _localctx: InheritanceContext = new InheritanceContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, WebIDLParser.RULE_inheritance);
		try {
			this.state = 321;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__12:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 318;
				this.match(WebIDLParser.T__12);
				this.state = 319;
				this.match(WebIDLParser.IDENTIFIER_WEBIDL);
				}
				break;
			case WebIDLParser.T__2:
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
	public extension(): ExtensionContext {
		let _localctx: ExtensionContext = new ExtensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, WebIDLParser.RULE_extension);
		try {
			this.state = 326;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__13:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 323;
				this.match(WebIDLParser.T__13);
				this.state = 324;
				this.match(WebIDLParser.IDENTIFIER_WEBIDL);
				}
				break;
			case WebIDLParser.T__2:
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
	public enum_(): Enum_Context {
		let _localctx: Enum_Context = new Enum_Context(this._ctx, this.state);
		this.enterRule(_localctx, 42, WebIDLParser.RULE_enum_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(WebIDLParser.T__14);
			this.state = 329;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 330;
			this.match(WebIDLParser.T__2);
			this.state = 331;
			this.enumValueList();
			this.state = 332;
			this.match(WebIDLParser.T__3);
			this.state = 333;
			this.match(WebIDLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumValueList(): EnumValueListContext {
		let _localctx: EnumValueListContext = new EnumValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, WebIDLParser.RULE_enumValueList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.match(WebIDLParser.STRING_WEBIDL);
			this.state = 336;
			this.enumValueListComma();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumValueListComma(): EnumValueListCommaContext {
		let _localctx: EnumValueListCommaContext = new EnumValueListCommaContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, WebIDLParser.RULE_enumValueListComma);
		try {
			this.state = 341;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 338;
				this.match(WebIDLParser.T__15);
				this.state = 339;
				this.enumValueListString();
				}
				break;
			case WebIDLParser.T__3:
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
	public enumValueListString(): EnumValueListStringContext {
		let _localctx: EnumValueListStringContext = new EnumValueListStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, WebIDLParser.RULE_enumValueListString);
		try {
			this.state = 346;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.STRING_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 343;
				this.match(WebIDLParser.STRING_WEBIDL);
				this.state = 344;
				this.enumValueListComma();
				}
				break;
			case WebIDLParser.T__3:
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
	public callbackRest(): CallbackRestContext {
		let _localctx: CallbackRestContext = new CallbackRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, WebIDLParser.RULE_callbackRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 349;
			this.match(WebIDLParser.T__9);
			this.state = 350;
			this.returnType();
			this.state = 351;
			this.match(WebIDLParser.T__16);
			this.state = 352;
			this.argumentList();
			this.state = 353;
			this.match(WebIDLParser.T__17);
			this.state = 354;
			this.match(WebIDLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedef(): TypedefContext {
		let _localctx: TypedefContext = new TypedefContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, WebIDLParser.RULE_typedef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this.match(WebIDLParser.T__18);
			this.state = 357;
			this.type();
			this.state = 358;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 359;
			this.match(WebIDLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implementsStatement(): ImplementsStatementContext {
		let _localctx: ImplementsStatementContext = new ImplementsStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, WebIDLParser.RULE_implementsStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 361;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 362;
			this.match(WebIDLParser.T__19);
			this.state = 363;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 364;
			this.match(WebIDLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public const_(): Const_Context {
		let _localctx: Const_Context = new Const_Context(this._ctx, this.state);
		this.enterRule(_localctx, 56, WebIDLParser.RULE_const_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(WebIDLParser.T__20);
			this.state = 367;
			this.constType();
			this.state = 368;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 369;
			this.match(WebIDLParser.T__9);
			this.state = 370;
			this.constValue();
			this.state = 371;
			this.match(WebIDLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constValue(): ConstValueContext {
		let _localctx: ConstValueContext = new ConstValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, WebIDLParser.RULE_constValue);
		try {
			this.state = 377;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__22:
			case WebIDLParser.T__23:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 373;
				this.booleanLiteral();
				}
				break;
			case WebIDLParser.T__24:
			case WebIDLParser.T__25:
			case WebIDLParser.T__26:
			case WebIDLParser.FLOAT_WEBIDL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 374;
				this.floatLiteral();
				}
				break;
			case WebIDLParser.INTEGER_WEBIDL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 375;
				this.match(WebIDLParser.INTEGER_WEBIDL);
				}
				break;
			case WebIDLParser.T__21:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 376;
				this.match(WebIDLParser.T__21);
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
	public booleanLiteral(): BooleanLiteralContext {
		let _localctx: BooleanLiteralContext = new BooleanLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, WebIDLParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			_la = this._input.LA(1);
			if (!(_la === WebIDLParser.T__22 || _la === WebIDLParser.T__23)) {
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
		this.enterRule(_localctx, 62, WebIDLParser.RULE_floatLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WebIDLParser.T__24) | (1 << WebIDLParser.T__25) | (1 << WebIDLParser.T__26))) !== 0) || _la === WebIDLParser.FLOAT_WEBIDL)) {
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
	public serializer(): SerializerContext {
		let _localctx: SerializerContext = new SerializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, WebIDLParser.RULE_serializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.match(WebIDLParser.T__27);
			this.state = 384;
			this.serializerRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public serializerRest(): SerializerRestContext {
		let _localctx: SerializerRestContext = new SerializerRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, WebIDLParser.RULE_serializerRest);
		try {
			this.state = 392;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__16:
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 386;
				this.operationRest();
				}
				break;
			case WebIDLParser.T__9:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 387;
				this.match(WebIDLParser.T__9);
				this.state = 388;
				this.serializationPattern();
				this.state = 389;
				this.match(WebIDLParser.T__4);
				}
				break;
			case WebIDLParser.T__4:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 391;
				this.match(WebIDLParser.T__4);
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
	public serializationPattern(): SerializationPatternContext {
		let _localctx: SerializationPatternContext = new SerializationPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, WebIDLParser.RULE_serializationPattern);
		try {
			this.state = 403;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 394;
				this.match(WebIDLParser.T__2);
				this.state = 395;
				this.serializationPatternMap();
				this.state = 396;
				this.match(WebIDLParser.T__3);
				}
				break;
			case WebIDLParser.T__10:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 398;
				this.match(WebIDLParser.T__10);
				this.state = 399;
				this.serializationPatternList();
				this.state = 400;
				this.match(WebIDLParser.T__11);
				}
				break;
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 402;
				this.match(WebIDLParser.IDENTIFIER_WEBIDL);
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
	public serializationPatternMap(): SerializationPatternMapContext {
		let _localctx: SerializationPatternMapContext = new SerializationPatternMapContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, WebIDLParser.RULE_serializationPatternMap);
		try {
			this.state = 411;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__28:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 405;
				this.match(WebIDLParser.T__28);
				}
				break;
			case WebIDLParser.T__29:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 406;
				this.match(WebIDLParser.T__29);
				this.state = 407;
				this.identifiers();
				}
				break;
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 408;
				this.match(WebIDLParser.IDENTIFIER_WEBIDL);
				this.state = 409;
				this.identifiers();
				}
				break;
			case WebIDLParser.T__3:
				this.enterOuterAlt(_localctx, 4);
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
	public serializationPatternList(): SerializationPatternListContext {
		let _localctx: SerializationPatternListContext = new SerializationPatternListContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, WebIDLParser.RULE_serializationPatternList);
		try {
			this.state = 417;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__28:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 413;
				this.match(WebIDLParser.T__28);
				}
				break;
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 414;
				this.match(WebIDLParser.IDENTIFIER_WEBIDL);
				this.state = 415;
				this.identifiers();
				}
				break;
			case WebIDLParser.T__11:
				this.enterOuterAlt(_localctx, 3);
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
	public stringifier(): StringifierContext {
		let _localctx: StringifierContext = new StringifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, WebIDLParser.RULE_stringifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this.match(WebIDLParser.T__30);
			this.state = 420;
			this.stringifierRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringifierRest(): StringifierRestContext {
		let _localctx: StringifierRestContext = new StringifierRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, WebIDLParser.RULE_stringifierRest);
		try {
			this.state = 429;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__32:
			case WebIDLParser.T__33:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 422;
				this.readOnly();
				this.state = 423;
				this.attributeRest();
				}
				break;
			case WebIDLParser.T__16:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__64:
			case WebIDLParser.T__65:
			case WebIDLParser.T__66:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.T__78:
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 425;
				this.returnType();
				this.state = 426;
				this.operationRest();
				}
				break;
			case WebIDLParser.T__4:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 428;
				this.match(WebIDLParser.T__4);
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
	public staticMember(): StaticMemberContext {
		let _localctx: StaticMemberContext = new StaticMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, WebIDLParser.RULE_staticMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.match(WebIDLParser.T__31);
			this.state = 432;
			this.staticMemberRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticMemberRest(): StaticMemberRestContext {
		let _localctx: StaticMemberRestContext = new StaticMemberRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, WebIDLParser.RULE_staticMemberRest);
		try {
			this.state = 440;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__32:
			case WebIDLParser.T__33:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 434;
				this.readOnly();
				this.state = 435;
				this.attributeRest();
				}
				break;
			case WebIDLParser.T__16:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__64:
			case WebIDLParser.T__65:
			case WebIDLParser.T__66:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.T__78:
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 437;
				this.returnType();
				this.state = 438;
				this.operationRest();
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
	public readonlyMember(): ReadonlyMemberContext {
		let _localctx: ReadonlyMemberContext = new ReadonlyMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, WebIDLParser.RULE_readonlyMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this.match(WebIDLParser.T__32);
			this.state = 443;
			this.readonlyMemberRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public readonlyMemberRest(): ReadonlyMemberRestContext {
		let _localctx: ReadonlyMemberRestContext = new ReadonlyMemberRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, WebIDLParser.RULE_readonlyMemberRest);
		try {
			this.state = 448;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__33:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 445;
				this.attributeRest();
				}
				break;
			case WebIDLParser.T__42:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 446;
				this.readWriteMaplike();
				}
				break;
			case WebIDLParser.T__43:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 447;
				this.readWriteSetlike();
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
	public readWriteAttribute(): ReadWriteAttributeContext {
		let _localctx: ReadWriteAttributeContext = new ReadWriteAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, WebIDLParser.RULE_readWriteAttribute);
		try {
			this.state = 455;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__29:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 450;
				this.match(WebIDLParser.T__29);
				this.state = 451;
				this.readOnly();
				this.state = 452;
				this.attributeRest();
				}
				break;
			case WebIDLParser.T__33:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 454;
				this.attributeRest();
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
	public attributeRest(): AttributeRestContext {
		let _localctx: AttributeRestContext = new AttributeRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, WebIDLParser.RULE_attributeRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.match(WebIDLParser.T__33);
			this.state = 458;
			this.type();
			this.state = 459;
			this.attributeName();
			this.state = 460;
			this.match(WebIDLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeName(): AttributeNameContext {
		let _localctx: AttributeNameContext = new AttributeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, WebIDLParser.RULE_attributeName);
		try {
			this.state = 464;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__8:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 462;
				this.attributeNameKeyword();
				}
				break;
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 463;
				this.match(WebIDLParser.IDENTIFIER_WEBIDL);
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
	public attributeNameKeyword(): AttributeNameKeywordContext {
		let _localctx: AttributeNameKeywordContext = new AttributeNameKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, WebIDLParser.RULE_attributeNameKeyword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 466;
			this.match(WebIDLParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inherit(): InheritContext {
		let _localctx: InheritContext = new InheritContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, WebIDLParser.RULE_inherit);
		try {
			this.state = 470;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__29:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 468;
				this.match(WebIDLParser.T__29);
				}
				break;
			case WebIDLParser.EOF:
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
	public readOnly(): ReadOnlyContext {
		let _localctx: ReadOnlyContext = new ReadOnlyContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, WebIDLParser.RULE_readOnly);
		try {
			this.state = 474;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__32:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 472;
				this.match(WebIDLParser.T__32);
				}
				break;
			case WebIDLParser.T__33:
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
	public operation(): OperationContext {
		let _localctx: OperationContext = new OperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, WebIDLParser.RULE_operation);
		try {
			this.state = 480;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__16:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__64:
			case WebIDLParser.T__65:
			case WebIDLParser.T__66:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.T__78:
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 476;
				this.returnType();
				this.state = 477;
				this.operationRest();
				}
				break;
			case WebIDLParser.T__28:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 479;
				this.specialOperation();
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
	public specialOperation(): SpecialOperationContext {
		let _localctx: SpecialOperationContext = new SpecialOperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, WebIDLParser.RULE_specialOperation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this.special();
			this.state = 483;
			this.specials();
			this.state = 484;
			this.returnType();
			this.state = 485;
			this.operationRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specials(): SpecialsContext {
		let _localctx: SpecialsContext = new SpecialsContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, WebIDLParser.RULE_specials);
		try {
			this.state = 491;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__28:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 487;
				this.special();
				this.state = 488;
				this.specials();
				}
				break;
			case WebIDLParser.T__16:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__64:
			case WebIDLParser.T__65:
			case WebIDLParser.T__66:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.T__78:
			case WebIDLParser.IDENTIFIER_WEBIDL:
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
	public special(): SpecialContext {
		let _localctx: SpecialContext = new SpecialContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, WebIDLParser.RULE_special);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			_la = this._input.LA(1);
			if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (WebIDLParser.T__28 - 29)) | (1 << (WebIDLParser.T__34 - 29)) | (1 << (WebIDLParser.T__35 - 29)) | (1 << (WebIDLParser.T__36 - 29)))) !== 0))) {
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
	public operationRest(): OperationRestContext {
		let _localctx: OperationRestContext = new OperationRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, WebIDLParser.RULE_operationRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.optionalIdentifier();
			this.state = 496;
			this.match(WebIDLParser.T__16);
			this.state = 497;
			this.argumentList();
			this.state = 498;
			this.match(WebIDLParser.T__17);
			this.state = 499;
			this.match(WebIDLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalIdentifier(): OptionalIdentifierContext {
		let _localctx: OptionalIdentifierContext = new OptionalIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, WebIDLParser.RULE_optionalIdentifier);
		try {
			this.state = 503;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 501;
				this.match(WebIDLParser.IDENTIFIER_WEBIDL);
				}
				break;
			case WebIDLParser.T__16:
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
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, WebIDLParser.RULE_argumentList);
		try {
			this.state = 509;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__0:
			case WebIDLParser.T__1:
			case WebIDLParser.T__5:
			case WebIDLParser.T__6:
			case WebIDLParser.T__7:
			case WebIDLParser.T__8:
			case WebIDLParser.T__10:
			case WebIDLParser.T__14:
			case WebIDLParser.T__16:
			case WebIDLParser.T__18:
			case WebIDLParser.T__20:
			case WebIDLParser.T__27:
			case WebIDLParser.T__28:
			case WebIDLParser.T__29:
			case WebIDLParser.T__30:
			case WebIDLParser.T__31:
			case WebIDLParser.T__32:
			case WebIDLParser.T__33:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
			case WebIDLParser.T__37:
			case WebIDLParser.T__39:
			case WebIDLParser.T__42:
			case WebIDLParser.T__43:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__64:
			case WebIDLParser.T__65:
			case WebIDLParser.T__66:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.T__78:
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 505;
				this.argument();
				this.state = 506;
				this.arguments();
				}
				break;
			case WebIDLParser.T__17:
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, WebIDLParser.RULE_arguments);
		try {
			this.state = 516;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 511;
				this.match(WebIDLParser.T__15);
				this.state = 512;
				this.argument();
				this.state = 513;
				this.arguments();
				}
				break;
			case WebIDLParser.T__17:
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, WebIDLParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.extendedAttributeList();
			this.state = 519;
			this.optionalOrRequiredArgument();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalOrRequiredArgument(): OptionalOrRequiredArgumentContext {
		let _localctx: OptionalOrRequiredArgumentContext = new OptionalOrRequiredArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, WebIDLParser.RULE_optionalOrRequiredArgument);
		try {
			this.state = 530;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__37:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 521;
				this.match(WebIDLParser.T__37);
				this.state = 522;
				this.type();
				this.state = 523;
				this.argumentName();
				this.state = 524;
				this.default_();
				}
				break;
			case WebIDLParser.T__16:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__65:
			case WebIDLParser.T__66:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.T__78:
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 526;
				this.type();
				this.state = 527;
				this.ellipsis();
				this.state = 528;
				this.argumentName();
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
	public argumentName(): ArgumentNameContext {
		let _localctx: ArgumentNameContext = new ArgumentNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, WebIDLParser.RULE_argumentName);
		try {
			this.state = 534;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__0:
			case WebIDLParser.T__1:
			case WebIDLParser.T__6:
			case WebIDLParser.T__7:
			case WebIDLParser.T__8:
			case WebIDLParser.T__14:
			case WebIDLParser.T__18:
			case WebIDLParser.T__19:
			case WebIDLParser.T__20:
			case WebIDLParser.T__27:
			case WebIDLParser.T__28:
			case WebIDLParser.T__29:
			case WebIDLParser.T__30:
			case WebIDLParser.T__31:
			case WebIDLParser.T__33:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
			case WebIDLParser.T__39:
			case WebIDLParser.T__42:
			case WebIDLParser.T__43:
			case WebIDLParser.T__65:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 532;
				this.argumentNameKeyword();
				}
				break;
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 533;
				this.match(WebIDLParser.IDENTIFIER_WEBIDL);
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
	public ellipsis(): EllipsisContext {
		let _localctx: EllipsisContext = new EllipsisContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, WebIDLParser.RULE_ellipsis);
		try {
			this.state = 538;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__38:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 536;
				this.match(WebIDLParser.T__38);
				}
				break;
			case WebIDLParser.T__0:
			case WebIDLParser.T__1:
			case WebIDLParser.T__6:
			case WebIDLParser.T__7:
			case WebIDLParser.T__8:
			case WebIDLParser.T__14:
			case WebIDLParser.T__18:
			case WebIDLParser.T__19:
			case WebIDLParser.T__20:
			case WebIDLParser.T__27:
			case WebIDLParser.T__28:
			case WebIDLParser.T__29:
			case WebIDLParser.T__30:
			case WebIDLParser.T__31:
			case WebIDLParser.T__33:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
			case WebIDLParser.T__39:
			case WebIDLParser.T__42:
			case WebIDLParser.T__43:
			case WebIDLParser.T__65:
			case WebIDLParser.IDENTIFIER_WEBIDL:
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
	public iterable(): IterableContext {
		let _localctx: IterableContext = new IterableContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, WebIDLParser.RULE_iterable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.match(WebIDLParser.T__39);
			this.state = 541;
			this.match(WebIDLParser.T__40);
			this.state = 542;
			this.type();
			this.state = 543;
			this.optionalType();
			this.state = 544;
			this.match(WebIDLParser.T__41);
			this.state = 545;
			this.match(WebIDLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalType(): OptionalTypeContext {
		let _localctx: OptionalTypeContext = new OptionalTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, WebIDLParser.RULE_optionalType);
		try {
			this.state = 550;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 547;
				this.match(WebIDLParser.T__15);
				this.state = 548;
				this.type();
				}
				break;
			case WebIDLParser.T__41:
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
	public readWriteMaplike(): ReadWriteMaplikeContext {
		let _localctx: ReadWriteMaplikeContext = new ReadWriteMaplikeContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, WebIDLParser.RULE_readWriteMaplike);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this.maplikeRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public readWriteSetlike(): ReadWriteSetlikeContext {
		let _localctx: ReadWriteSetlikeContext = new ReadWriteSetlikeContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, WebIDLParser.RULE_readWriteSetlike);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			this.setlikeRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public maplikeRest(): MaplikeRestContext {
		let _localctx: MaplikeRestContext = new MaplikeRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, WebIDLParser.RULE_maplikeRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 556;
			this.match(WebIDLParser.T__42);
			this.state = 557;
			this.match(WebIDLParser.T__40);
			this.state = 558;
			this.type();
			this.state = 559;
			this.match(WebIDLParser.T__15);
			this.state = 560;
			this.type();
			this.state = 561;
			this.match(WebIDLParser.T__41);
			this.state = 562;
			this.match(WebIDLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setlikeRest(): SetlikeRestContext {
		let _localctx: SetlikeRestContext = new SetlikeRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, WebIDLParser.RULE_setlikeRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
			this.match(WebIDLParser.T__43);
			this.state = 565;
			this.match(WebIDLParser.T__40);
			this.state = 566;
			this.type();
			this.state = 567;
			this.match(WebIDLParser.T__41);
			this.state = 568;
			this.match(WebIDLParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extendedAttributeList(): ExtendedAttributeListContext {
		let _localctx: ExtendedAttributeListContext = new ExtendedAttributeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, WebIDLParser.RULE_extendedAttributeList);
		try {
			this.state = 576;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 570;
				this.match(WebIDLParser.T__10);
				this.state = 571;
				this.extendedAttribute();
				this.state = 572;
				this.extendedAttributes();
				this.state = 573;
				this.match(WebIDLParser.T__11);
				}
				break;
			case WebIDLParser.T__0:
			case WebIDLParser.T__1:
			case WebIDLParser.T__5:
			case WebIDLParser.T__6:
			case WebIDLParser.T__7:
			case WebIDLParser.T__8:
			case WebIDLParser.T__14:
			case WebIDLParser.T__16:
			case WebIDLParser.T__18:
			case WebIDLParser.T__20:
			case WebIDLParser.T__27:
			case WebIDLParser.T__28:
			case WebIDLParser.T__29:
			case WebIDLParser.T__30:
			case WebIDLParser.T__31:
			case WebIDLParser.T__32:
			case WebIDLParser.T__33:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
			case WebIDLParser.T__37:
			case WebIDLParser.T__39:
			case WebIDLParser.T__42:
			case WebIDLParser.T__43:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__64:
			case WebIDLParser.T__65:
			case WebIDLParser.T__66:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.T__78:
			case WebIDLParser.IDENTIFIER_WEBIDL:
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
	public extendedAttributes(): ExtendedAttributesContext {
		let _localctx: ExtendedAttributesContext = new ExtendedAttributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, WebIDLParser.RULE_extendedAttributes);
		try {
			this.state = 583;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 578;
				this.match(WebIDLParser.T__15);
				this.state = 579;
				this.extendedAttribute();
				this.state = 580;
				this.extendedAttributes();
				}
				break;
			case WebIDLParser.T__11:
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
	public extendedAttribute(): ExtendedAttributeContext {
		let _localctx: ExtendedAttributeContext = new ExtendedAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, WebIDLParser.RULE_extendedAttribute);
		try {
			this.state = 603;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__16:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 585;
				this.match(WebIDLParser.T__16);
				this.state = 586;
				this.extendedAttributeInner();
				this.state = 587;
				this.match(WebIDLParser.T__17);
				this.state = 588;
				this.extendedAttributeRest();
				}
				break;
			case WebIDLParser.T__10:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
				this.match(WebIDLParser.T__10);
				this.state = 591;
				this.extendedAttributeInner();
				this.state = 592;
				this.match(WebIDLParser.T__11);
				this.state = 593;
				this.extendedAttributeRest();
				}
				break;
			case WebIDLParser.T__2:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 595;
				this.match(WebIDLParser.T__2);
				this.state = 596;
				this.extendedAttributeInner();
				this.state = 597;
				this.match(WebIDLParser.T__3);
				this.state = 598;
				this.extendedAttributeRest();
				}
				break;
			case WebIDLParser.T__0:
			case WebIDLParser.T__1:
			case WebIDLParser.T__4:
			case WebIDLParser.T__6:
			case WebIDLParser.T__7:
			case WebIDLParser.T__8:
			case WebIDLParser.T__9:
			case WebIDLParser.T__12:
			case WebIDLParser.T__14:
			case WebIDLParser.T__18:
			case WebIDLParser.T__19:
			case WebIDLParser.T__20:
			case WebIDLParser.T__21:
			case WebIDLParser.T__22:
			case WebIDLParser.T__23:
			case WebIDLParser.T__24:
			case WebIDLParser.T__25:
			case WebIDLParser.T__26:
			case WebIDLParser.T__27:
			case WebIDLParser.T__28:
			case WebIDLParser.T__29:
			case WebIDLParser.T__30:
			case WebIDLParser.T__31:
			case WebIDLParser.T__33:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
			case WebIDLParser.T__37:
			case WebIDLParser.T__38:
			case WebIDLParser.T__39:
			case WebIDLParser.T__40:
			case WebIDLParser.T__41:
			case WebIDLParser.T__42:
			case WebIDLParser.T__43:
			case WebIDLParser.T__44:
			case WebIDLParser.T__45:
			case WebIDLParser.T__46:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__60:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__64:
			case WebIDLParser.T__65:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.INTEGER_WEBIDL:
			case WebIDLParser.FLOAT_WEBIDL:
			case WebIDLParser.IDENTIFIER_WEBIDL:
			case WebIDLParser.STRING_WEBIDL:
			case WebIDLParser.OTHER_WEBIDL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 600;
				this.other();
				this.state = 601;
				this.extendedAttributeRest();
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
	public extendedAttributeRest(): ExtendedAttributeRestContext {
		let _localctx: ExtendedAttributeRestContext = new ExtendedAttributeRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, WebIDLParser.RULE_extendedAttributeRest);
		try {
			this.state = 607;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__0:
			case WebIDLParser.T__1:
			case WebIDLParser.T__2:
			case WebIDLParser.T__4:
			case WebIDLParser.T__6:
			case WebIDLParser.T__7:
			case WebIDLParser.T__8:
			case WebIDLParser.T__9:
			case WebIDLParser.T__10:
			case WebIDLParser.T__12:
			case WebIDLParser.T__14:
			case WebIDLParser.T__16:
			case WebIDLParser.T__18:
			case WebIDLParser.T__19:
			case WebIDLParser.T__20:
			case WebIDLParser.T__21:
			case WebIDLParser.T__22:
			case WebIDLParser.T__23:
			case WebIDLParser.T__24:
			case WebIDLParser.T__25:
			case WebIDLParser.T__26:
			case WebIDLParser.T__27:
			case WebIDLParser.T__28:
			case WebIDLParser.T__29:
			case WebIDLParser.T__30:
			case WebIDLParser.T__31:
			case WebIDLParser.T__33:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
			case WebIDLParser.T__37:
			case WebIDLParser.T__38:
			case WebIDLParser.T__39:
			case WebIDLParser.T__40:
			case WebIDLParser.T__41:
			case WebIDLParser.T__42:
			case WebIDLParser.T__43:
			case WebIDLParser.T__44:
			case WebIDLParser.T__45:
			case WebIDLParser.T__46:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__60:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__64:
			case WebIDLParser.T__65:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.INTEGER_WEBIDL:
			case WebIDLParser.FLOAT_WEBIDL:
			case WebIDLParser.IDENTIFIER_WEBIDL:
			case WebIDLParser.STRING_WEBIDL:
			case WebIDLParser.OTHER_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 605;
				this.extendedAttribute();
				}
				break;
			case WebIDLParser.T__11:
			case WebIDLParser.T__15:
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
	public extendedAttributeInner(): ExtendedAttributeInnerContext {
		let _localctx: ExtendedAttributeInnerContext = new ExtendedAttributeInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, WebIDLParser.RULE_extendedAttributeInner);
		try {
			this.state = 628;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__16:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 609;
				this.match(WebIDLParser.T__16);
				this.state = 610;
				this.extendedAttributeInner();
				this.state = 611;
				this.match(WebIDLParser.T__17);
				this.state = 612;
				this.extendedAttributeInner();
				}
				break;
			case WebIDLParser.T__10:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 614;
				this.match(WebIDLParser.T__10);
				this.state = 615;
				this.extendedAttributeInner();
				this.state = 616;
				this.match(WebIDLParser.T__11);
				this.state = 617;
				this.extendedAttributeInner();
				}
				break;
			case WebIDLParser.T__2:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 619;
				this.match(WebIDLParser.T__2);
				this.state = 620;
				this.extendedAttributeInner();
				this.state = 621;
				this.match(WebIDLParser.T__3);
				this.state = 622;
				this.extendedAttributeInner();
				}
				break;
			case WebIDLParser.T__0:
			case WebIDLParser.T__1:
			case WebIDLParser.T__4:
			case WebIDLParser.T__6:
			case WebIDLParser.T__7:
			case WebIDLParser.T__8:
			case WebIDLParser.T__9:
			case WebIDLParser.T__12:
			case WebIDLParser.T__14:
			case WebIDLParser.T__15:
			case WebIDLParser.T__18:
			case WebIDLParser.T__19:
			case WebIDLParser.T__20:
			case WebIDLParser.T__21:
			case WebIDLParser.T__22:
			case WebIDLParser.T__23:
			case WebIDLParser.T__24:
			case WebIDLParser.T__25:
			case WebIDLParser.T__26:
			case WebIDLParser.T__27:
			case WebIDLParser.T__28:
			case WebIDLParser.T__29:
			case WebIDLParser.T__30:
			case WebIDLParser.T__31:
			case WebIDLParser.T__33:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
			case WebIDLParser.T__37:
			case WebIDLParser.T__38:
			case WebIDLParser.T__39:
			case WebIDLParser.T__40:
			case WebIDLParser.T__41:
			case WebIDLParser.T__42:
			case WebIDLParser.T__43:
			case WebIDLParser.T__44:
			case WebIDLParser.T__45:
			case WebIDLParser.T__46:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__60:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__64:
			case WebIDLParser.T__65:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.INTEGER_WEBIDL:
			case WebIDLParser.FLOAT_WEBIDL:
			case WebIDLParser.IDENTIFIER_WEBIDL:
			case WebIDLParser.STRING_WEBIDL:
			case WebIDLParser.OTHER_WEBIDL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 624;
				this.otherOrComma();
				this.state = 625;
				this.extendedAttributeInner();
				}
				break;
			case WebIDLParser.T__3:
			case WebIDLParser.T__11:
			case WebIDLParser.T__17:
				this.enterOuterAlt(_localctx, 5);
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
	public other(): OtherContext {
		let _localctx: OtherContext = new OtherContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, WebIDLParser.RULE_other);
		try {
			this.state = 671;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.INTEGER_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 630;
				this.match(WebIDLParser.INTEGER_WEBIDL);
				}
				break;
			case WebIDLParser.FLOAT_WEBIDL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 631;
				this.match(WebIDLParser.FLOAT_WEBIDL);
				}
				break;
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 632;
				this.match(WebIDLParser.IDENTIFIER_WEBIDL);
				}
				break;
			case WebIDLParser.STRING_WEBIDL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 633;
				this.match(WebIDLParser.STRING_WEBIDL);
				}
				break;
			case WebIDLParser.OTHER_WEBIDL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 634;
				this.match(WebIDLParser.OTHER_WEBIDL);
				}
				break;
			case WebIDLParser.T__44:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 635;
				this.match(WebIDLParser.T__44);
				}
				break;
			case WebIDLParser.T__24:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 636;
				this.match(WebIDLParser.T__24);
				}
				break;
			case WebIDLParser.T__45:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 637;
				this.match(WebIDLParser.T__45);
				}
				break;
			case WebIDLParser.T__38:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 638;
				this.match(WebIDLParser.T__38);
				}
				break;
			case WebIDLParser.T__12:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 639;
				this.match(WebIDLParser.T__12);
				}
				break;
			case WebIDLParser.T__4:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 640;
				this.match(WebIDLParser.T__4);
				}
				break;
			case WebIDLParser.T__40:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 641;
				this.match(WebIDLParser.T__40);
				}
				break;
			case WebIDLParser.T__9:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 642;
				this.match(WebIDLParser.T__9);
				}
				break;
			case WebIDLParser.T__41:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 643;
				this.match(WebIDLParser.T__41);
				}
				break;
			case WebIDLParser.T__46:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 644;
				this.match(WebIDLParser.T__46);
				}
				break;
			case WebIDLParser.T__47:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 645;
				this.match(WebIDLParser.T__47);
				}
				break;
			case WebIDLParser.T__48:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 646;
				this.match(WebIDLParser.T__48);
				}
				break;
			case WebIDLParser.T__49:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 647;
				this.match(WebIDLParser.T__49);
				}
				break;
			case WebIDLParser.T__25:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 648;
				this.match(WebIDLParser.T__25);
				}
				break;
			case WebIDLParser.T__26:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 649;
				this.match(WebIDLParser.T__26);
				}
				break;
			case WebIDLParser.T__50:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 650;
				this.match(WebIDLParser.T__50);
				}
				break;
			case WebIDLParser.T__51:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 651;
				this.match(WebIDLParser.T__51);
				}
				break;
			case WebIDLParser.T__52:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 652;
				this.match(WebIDLParser.T__52);
				}
				break;
			case WebIDLParser.T__53:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 653;
				this.match(WebIDLParser.T__53);
				}
				break;
			case WebIDLParser.T__54:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 654;
				this.match(WebIDLParser.T__54);
				}
				break;
			case WebIDLParser.T__55:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 655;
				this.match(WebIDLParser.T__55);
				}
				break;
			case WebIDLParser.T__23:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 656;
				this.match(WebIDLParser.T__23);
				}
				break;
			case WebIDLParser.T__56:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 657;
				this.match(WebIDLParser.T__56);
				}
				break;
			case WebIDLParser.T__57:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 658;
				this.match(WebIDLParser.T__57);
				}
				break;
			case WebIDLParser.T__21:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 659;
				this.match(WebIDLParser.T__21);
				}
				break;
			case WebIDLParser.T__58:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 660;
				this.match(WebIDLParser.T__58);
				}
				break;
			case WebIDLParser.T__59:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 661;
				this.match(WebIDLParser.T__59);
				}
				break;
			case WebIDLParser.T__60:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 662;
				this.match(WebIDLParser.T__60);
				}
				break;
			case WebIDLParser.T__37:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 663;
				this.match(WebIDLParser.T__37);
				}
				break;
			case WebIDLParser.T__61:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 664;
				this.match(WebIDLParser.T__61);
				}
				break;
			case WebIDLParser.T__62:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 665;
				this.match(WebIDLParser.T__62);
				}
				break;
			case WebIDLParser.T__22:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 666;
				this.match(WebIDLParser.T__22);
				}
				break;
			case WebIDLParser.T__63:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 667;
				this.match(WebIDLParser.T__63);
				}
				break;
			case WebIDLParser.T__64:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 668;
				this.match(WebIDLParser.T__64);
				}
				break;
			case WebIDLParser.T__0:
			case WebIDLParser.T__1:
			case WebIDLParser.T__6:
			case WebIDLParser.T__7:
			case WebIDLParser.T__8:
			case WebIDLParser.T__14:
			case WebIDLParser.T__18:
			case WebIDLParser.T__19:
			case WebIDLParser.T__20:
			case WebIDLParser.T__27:
			case WebIDLParser.T__28:
			case WebIDLParser.T__29:
			case WebIDLParser.T__30:
			case WebIDLParser.T__31:
			case WebIDLParser.T__33:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
			case WebIDLParser.T__39:
			case WebIDLParser.T__42:
			case WebIDLParser.T__43:
			case WebIDLParser.T__65:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 669;
				this.argumentNameKeyword();
				}
				break;
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 670;
				this.bufferRelatedType();
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
	public argumentNameKeyword(): ArgumentNameKeywordContext {
		let _localctx: ArgumentNameKeywordContext = new ArgumentNameKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, WebIDLParser.RULE_argumentNameKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 673;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WebIDLParser.T__0) | (1 << WebIDLParser.T__1) | (1 << WebIDLParser.T__6) | (1 << WebIDLParser.T__7) | (1 << WebIDLParser.T__8) | (1 << WebIDLParser.T__14) | (1 << WebIDLParser.T__18) | (1 << WebIDLParser.T__19) | (1 << WebIDLParser.T__20) | (1 << WebIDLParser.T__27) | (1 << WebIDLParser.T__28) | (1 << WebIDLParser.T__29) | (1 << WebIDLParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (WebIDLParser.T__31 - 32)) | (1 << (WebIDLParser.T__33 - 32)) | (1 << (WebIDLParser.T__34 - 32)) | (1 << (WebIDLParser.T__35 - 32)) | (1 << (WebIDLParser.T__36 - 32)) | (1 << (WebIDLParser.T__39 - 32)) | (1 << (WebIDLParser.T__42 - 32)) | (1 << (WebIDLParser.T__43 - 32)))) !== 0) || _la === WebIDLParser.T__65)) {
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
	public otherOrComma(): OtherOrCommaContext {
		let _localctx: OtherOrCommaContext = new OtherOrCommaContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, WebIDLParser.RULE_otherOrComma);
		try {
			this.state = 677;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__0:
			case WebIDLParser.T__1:
			case WebIDLParser.T__4:
			case WebIDLParser.T__6:
			case WebIDLParser.T__7:
			case WebIDLParser.T__8:
			case WebIDLParser.T__9:
			case WebIDLParser.T__12:
			case WebIDLParser.T__14:
			case WebIDLParser.T__18:
			case WebIDLParser.T__19:
			case WebIDLParser.T__20:
			case WebIDLParser.T__21:
			case WebIDLParser.T__22:
			case WebIDLParser.T__23:
			case WebIDLParser.T__24:
			case WebIDLParser.T__25:
			case WebIDLParser.T__26:
			case WebIDLParser.T__27:
			case WebIDLParser.T__28:
			case WebIDLParser.T__29:
			case WebIDLParser.T__30:
			case WebIDLParser.T__31:
			case WebIDLParser.T__33:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
			case WebIDLParser.T__37:
			case WebIDLParser.T__38:
			case WebIDLParser.T__39:
			case WebIDLParser.T__40:
			case WebIDLParser.T__41:
			case WebIDLParser.T__42:
			case WebIDLParser.T__43:
			case WebIDLParser.T__44:
			case WebIDLParser.T__45:
			case WebIDLParser.T__46:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__60:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__64:
			case WebIDLParser.T__65:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.INTEGER_WEBIDL:
			case WebIDLParser.FLOAT_WEBIDL:
			case WebIDLParser.IDENTIFIER_WEBIDL:
			case WebIDLParser.STRING_WEBIDL:
			case WebIDLParser.OTHER_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 675;
				this.other();
				}
				break;
			case WebIDLParser.T__15:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 676;
				this.match(WebIDLParser.T__15);
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, WebIDLParser.RULE_type);
		try {
			this.state = 683;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__65:
			case WebIDLParser.T__66:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.T__78:
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 679;
				this.singleType();
				}
				break;
			case WebIDLParser.T__16:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 680;
				this.unionType();
				this.state = 681;
				this.null_();
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
	public singleType(): SingleTypeContext {
		let _localctx: SingleTypeContext = new SingleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, WebIDLParser.RULE_singleType);
		try {
			this.state = 687;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__65:
			case WebIDLParser.T__66:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.T__78:
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 685;
				this.nonAnyType();
				}
				break;
			case WebIDLParser.T__52:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 686;
				this.match(WebIDLParser.T__52);
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
	public unionType(): UnionTypeContext {
		let _localctx: UnionTypeContext = new UnionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, WebIDLParser.RULE_unionType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 689;
			this.match(WebIDLParser.T__16);
			this.state = 690;
			this.unionMemberType();
			this.state = 691;
			this.match(WebIDLParser.T__60);
			this.state = 692;
			this.unionMemberType();
			this.state = 693;
			this.unionMemberTypes();
			this.state = 694;
			this.match(WebIDLParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unionMemberType(): UnionMemberTypeContext {
		let _localctx: UnionMemberTypeContext = new UnionMemberTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, WebIDLParser.RULE_unionMemberType);
		try {
			this.state = 700;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__65:
			case WebIDLParser.T__66:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.T__78:
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 696;
				this.nonAnyType();
				}
				break;
			case WebIDLParser.T__16:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 697;
				this.unionType();
				this.state = 698;
				this.null_();
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
	public unionMemberTypes(): UnionMemberTypesContext {
		let _localctx: UnionMemberTypesContext = new UnionMemberTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, WebIDLParser.RULE_unionMemberTypes);
		try {
			this.state = 707;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__60:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 702;
				this.match(WebIDLParser.T__60);
				this.state = 703;
				this.unionMemberType();
				this.state = 704;
				this.unionMemberTypes();
				}
				break;
			case WebIDLParser.T__17:
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
	public nonAnyType(): NonAnyTypeContext {
		let _localctx: NonAnyTypeContext = new NonAnyTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, WebIDLParser.RULE_nonAnyType);
		try {
			this.state = 744;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__59:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__65:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 709;
				this.primitiveType();
				this.state = 710;
				this.null_();
				}
				break;
			case WebIDLParser.T__78:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 712;
				this.promiseType();
				this.state = 713;
				this.null_();
				}
				break;
			case WebIDLParser.T__47:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 715;
				this.match(WebIDLParser.T__47);
				this.state = 716;
				this.null_();
				}
				break;
			case WebIDLParser.T__48:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 717;
				this.match(WebIDLParser.T__48);
				this.state = 718;
				this.null_();
				}
				break;
			case WebIDLParser.T__51:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 719;
				this.match(WebIDLParser.T__51);
				this.state = 720;
				this.null_();
				}
				break;
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 721;
				this.match(WebIDLParser.IDENTIFIER_WEBIDL);
				this.state = 722;
				this.null_();
				}
				break;
			case WebIDLParser.T__61:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 723;
				this.match(WebIDLParser.T__61);
				this.state = 724;
				this.match(WebIDLParser.T__40);
				this.state = 725;
				this.type();
				this.state = 726;
				this.match(WebIDLParser.T__41);
				this.state = 727;
				this.null_();
				}
				break;
			case WebIDLParser.T__58:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 729;
				this.match(WebIDLParser.T__58);
				this.state = 730;
				this.null_();
				}
				break;
			case WebIDLParser.T__50:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 731;
				this.match(WebIDLParser.T__50);
				this.state = 732;
				this.null_();
				}
				break;
			case WebIDLParser.T__66:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 733;
				this.match(WebIDLParser.T__66);
				this.state = 734;
				this.null_();
				}
				break;
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 735;
				this.bufferRelatedType();
				this.state = 736;
				this.null_();
				}
				break;
			case WebIDLParser.T__49:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 738;
				this.match(WebIDLParser.T__49);
				this.state = 739;
				this.match(WebIDLParser.T__40);
				this.state = 740;
				this.type();
				this.state = 741;
				this.match(WebIDLParser.T__41);
				this.state = 742;
				this.null_();
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
	public bufferRelatedType(): BufferRelatedTypeContext {
		let _localctx: BufferRelatedTypeContext = new BufferRelatedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, WebIDLParser.RULE_bufferRelatedType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 746;
			_la = this._input.LA(1);
			if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (WebIDLParser.T__67 - 68)) | (1 << (WebIDLParser.T__68 - 68)) | (1 << (WebIDLParser.T__69 - 68)) | (1 << (WebIDLParser.T__70 - 68)) | (1 << (WebIDLParser.T__71 - 68)) | (1 << (WebIDLParser.T__72 - 68)) | (1 << (WebIDLParser.T__73 - 68)) | (1 << (WebIDLParser.T__74 - 68)) | (1 << (WebIDLParser.T__75 - 68)) | (1 << (WebIDLParser.T__76 - 68)) | (1 << (WebIDLParser.T__77 - 68)))) !== 0))) {
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
	public constType(): ConstTypeContext {
		let _localctx: ConstTypeContext = new ConstTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, WebIDLParser.RULE_constType);
		try {
			this.state = 753;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__59:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__65:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 748;
				this.primitiveType();
				this.state = 749;
				this.null_();
				}
				break;
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 751;
				this.match(WebIDLParser.IDENTIFIER_WEBIDL);
				this.state = 752;
				this.null_();
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
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, WebIDLParser.RULE_primitiveType);
		try {
			this.state = 760;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__57:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 755;
				this.unsignedIntegerType();
				}
				break;
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__65:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 756;
				this.unrestrictedFloatType();
				}
				break;
			case WebIDLParser.T__53:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 757;
				this.match(WebIDLParser.T__53);
				}
				break;
			case WebIDLParser.T__54:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 758;
				this.match(WebIDLParser.T__54);
				}
				break;
			case WebIDLParser.T__59:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 759;
				this.match(WebIDLParser.T__59);
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
	public unrestrictedFloatType(): UnrestrictedFloatTypeContext {
		let _localctx: UnrestrictedFloatTypeContext = new UnrestrictedFloatTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, WebIDLParser.RULE_unrestrictedFloatType);
		try {
			this.state = 765;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__65:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 762;
				this.match(WebIDLParser.T__65);
				this.state = 763;
				this.floatType();
				}
				break;
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 764;
				this.floatType();
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
	public floatType(): FloatTypeContext {
		let _localctx: FloatTypeContext = new FloatTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, WebIDLParser.RULE_floatType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			_la = this._input.LA(1);
			if (!(_la === WebIDLParser.T__55 || _la === WebIDLParser.T__56)) {
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
	public unsignedIntegerType(): UnsignedIntegerTypeContext {
		let _localctx: UnsignedIntegerTypeContext = new UnsignedIntegerTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, WebIDLParser.RULE_unsignedIntegerType);
		try {
			this.state = 772;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__63:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 769;
				this.match(WebIDLParser.T__63);
				this.state = 770;
				this.integerType();
				}
				break;
			case WebIDLParser.T__57:
			case WebIDLParser.T__62:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 771;
				this.integerType();
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
	public integerType(): IntegerTypeContext {
		let _localctx: IntegerTypeContext = new IntegerTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, WebIDLParser.RULE_integerType);
		try {
			this.state = 777;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__62:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 774;
				this.match(WebIDLParser.T__62);
				}
				break;
			case WebIDLParser.T__57:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 775;
				this.match(WebIDLParser.T__57);
				this.state = 776;
				this.optionalLong();
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
	public optionalLong(): OptionalLongContext {
		let _localctx: OptionalLongContext = new OptionalLongContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, WebIDLParser.RULE_optionalLong);
		try {
			this.state = 781;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__57:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 779;
				this.match(WebIDLParser.T__57);
				}
				break;
			case WebIDLParser.T__0:
			case WebIDLParser.T__1:
			case WebIDLParser.T__6:
			case WebIDLParser.T__7:
			case WebIDLParser.T__8:
			case WebIDLParser.T__14:
			case WebIDLParser.T__15:
			case WebIDLParser.T__16:
			case WebIDLParser.T__17:
			case WebIDLParser.T__18:
			case WebIDLParser.T__19:
			case WebIDLParser.T__20:
			case WebIDLParser.T__27:
			case WebIDLParser.T__28:
			case WebIDLParser.T__29:
			case WebIDLParser.T__30:
			case WebIDLParser.T__31:
			case WebIDLParser.T__33:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
			case WebIDLParser.T__38:
			case WebIDLParser.T__39:
			case WebIDLParser.T__41:
			case WebIDLParser.T__42:
			case WebIDLParser.T__43:
			case WebIDLParser.T__46:
			case WebIDLParser.T__60:
			case WebIDLParser.T__65:
			case WebIDLParser.IDENTIFIER_WEBIDL:
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
	public promiseType(): PromiseTypeContext {
		let _localctx: PromiseTypeContext = new PromiseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, WebIDLParser.RULE_promiseType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
			this.match(WebIDLParser.T__78);
			this.state = 784;
			this.match(WebIDLParser.T__40);
			this.state = 785;
			this.returnType();
			this.state = 786;
			this.match(WebIDLParser.T__41);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public null_(): Null_Context {
		let _localctx: Null_Context = new Null_Context(this._ctx, this.state);
		this.enterRule(_localctx, 180, WebIDLParser.RULE_null_);
		try {
			this.state = 790;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__46:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 788;
				this.match(WebIDLParser.T__46);
				}
				break;
			case WebIDLParser.T__0:
			case WebIDLParser.T__1:
			case WebIDLParser.T__6:
			case WebIDLParser.T__7:
			case WebIDLParser.T__8:
			case WebIDLParser.T__14:
			case WebIDLParser.T__15:
			case WebIDLParser.T__16:
			case WebIDLParser.T__17:
			case WebIDLParser.T__18:
			case WebIDLParser.T__19:
			case WebIDLParser.T__20:
			case WebIDLParser.T__27:
			case WebIDLParser.T__28:
			case WebIDLParser.T__29:
			case WebIDLParser.T__30:
			case WebIDLParser.T__31:
			case WebIDLParser.T__33:
			case WebIDLParser.T__34:
			case WebIDLParser.T__35:
			case WebIDLParser.T__36:
			case WebIDLParser.T__38:
			case WebIDLParser.T__39:
			case WebIDLParser.T__41:
			case WebIDLParser.T__42:
			case WebIDLParser.T__43:
			case WebIDLParser.T__60:
			case WebIDLParser.T__65:
			case WebIDLParser.IDENTIFIER_WEBIDL:
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
	public returnType(): ReturnTypeContext {
		let _localctx: ReturnTypeContext = new ReturnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, WebIDLParser.RULE_returnType);
		try {
			this.state = 794;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__16:
			case WebIDLParser.T__47:
			case WebIDLParser.T__48:
			case WebIDLParser.T__49:
			case WebIDLParser.T__50:
			case WebIDLParser.T__51:
			case WebIDLParser.T__52:
			case WebIDLParser.T__53:
			case WebIDLParser.T__54:
			case WebIDLParser.T__55:
			case WebIDLParser.T__56:
			case WebIDLParser.T__57:
			case WebIDLParser.T__58:
			case WebIDLParser.T__59:
			case WebIDLParser.T__61:
			case WebIDLParser.T__62:
			case WebIDLParser.T__63:
			case WebIDLParser.T__65:
			case WebIDLParser.T__66:
			case WebIDLParser.T__67:
			case WebIDLParser.T__68:
			case WebIDLParser.T__69:
			case WebIDLParser.T__70:
			case WebIDLParser.T__71:
			case WebIDLParser.T__72:
			case WebIDLParser.T__73:
			case WebIDLParser.T__74:
			case WebIDLParser.T__75:
			case WebIDLParser.T__76:
			case WebIDLParser.T__77:
			case WebIDLParser.T__78:
			case WebIDLParser.IDENTIFIER_WEBIDL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 792;
				this.type();
				}
				break;
			case WebIDLParser.T__64:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 793;
				this.match(WebIDLParser.T__64);
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
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, WebIDLParser.RULE_identifierList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 796;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 797;
			this.identifiers();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifiers(): IdentifiersContext {
		let _localctx: IdentifiersContext = new IdentifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, WebIDLParser.RULE_identifiers);
		try {
			this.state = 803;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WebIDLParser.T__15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 799;
				this.match(WebIDLParser.T__15);
				this.state = 800;
				this.match(WebIDLParser.IDENTIFIER_WEBIDL);
				this.state = 801;
				this.identifiers();
				}
				break;
			case WebIDLParser.T__3:
			case WebIDLParser.T__11:
			case WebIDLParser.T__17:
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
	public extendedAttributeNoArgs(): ExtendedAttributeNoArgsContext {
		let _localctx: ExtendedAttributeNoArgsContext = new ExtendedAttributeNoArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, WebIDLParser.RULE_extendedAttributeNoArgs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 805;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extendedAttributeArgList(): ExtendedAttributeArgListContext {
		let _localctx: ExtendedAttributeArgListContext = new ExtendedAttributeArgListContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, WebIDLParser.RULE_extendedAttributeArgList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 807;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 808;
			this.match(WebIDLParser.T__16);
			this.state = 809;
			this.argumentList();
			this.state = 810;
			this.match(WebIDLParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extendedAttributeIdent(): ExtendedAttributeIdentContext {
		let _localctx: ExtendedAttributeIdentContext = new ExtendedAttributeIdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, WebIDLParser.RULE_extendedAttributeIdent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 812;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 813;
			this.match(WebIDLParser.T__9);
			this.state = 814;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extendedAttributeIdentList(): ExtendedAttributeIdentListContext {
		let _localctx: ExtendedAttributeIdentListContext = new ExtendedAttributeIdentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, WebIDLParser.RULE_extendedAttributeIdentList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 816;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 817;
			this.match(WebIDLParser.T__9);
			this.state = 818;
			this.match(WebIDLParser.T__16);
			this.state = 819;
			this.identifierList();
			this.state = 820;
			this.match(WebIDLParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extendedAttributeNamedArgList(): ExtendedAttributeNamedArgListContext {
		let _localctx: ExtendedAttributeNamedArgListContext = new ExtendedAttributeNamedArgListContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, WebIDLParser.RULE_extendedAttributeNamedArgList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 822;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 823;
			this.match(WebIDLParser.T__9);
			this.state = 824;
			this.match(WebIDLParser.IDENTIFIER_WEBIDL);
			this.state = 825;
			this.match(WebIDLParser.T__16);
			this.state = 826;
			this.argumentList();
			this.state = 827;
			this.match(WebIDLParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03X\u0340\x04\x02" +
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
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03\xD1\n\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x05\x04\xD9\n\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05\xDF\n\x05\x03\x06\x03\x06\x05\x06\xE3\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x05\n\xFA\n\n" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x05\f\u0108\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x05\r\u0114\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0123" +
		"\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x05\x11\u012D\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x05\x13\u0139\n\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x05\x14\u013F\n\x14\x03\x15\x03\x15\x03\x15\x05\x15\u0144\n\x15" +
		"\x03\x16\x03\x16\x03\x16\x05\x16\u0149\n\x16\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
		"\x19\x05\x19\u0158\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u015D\n\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u017C\n\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03\"" +
		"\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u018B\n#\x03$\x03$\x03$\x03$\x03$" +
		"\x03$\x03$\x03$\x03$\x05$\u0196\n$\x03%\x03%\x03%\x03%\x03%\x03%\x05%" +
		"\u019E\n%\x03&\x03&\x03&\x03&\x05&\u01A4\n&\x03\'\x03\'\x03\'\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x05(\u01B0\n(\x03)\x03)\x03)\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x05*\u01BB\n*\x03+\x03+\x03+\x03,\x03,\x03,\x05,\u01C3" +
		"\n,\x03-\x03-\x03-\x03-\x03-\x05-\u01CA\n-\x03.\x03.\x03.\x03.\x03.\x03" +
		"/\x03/\x05/\u01D3\n/\x030\x030\x031\x031\x051\u01D9\n1\x032\x032\x052" +
		"\u01DD\n2\x033\x033\x033\x033\x053\u01E3\n3\x034\x034\x034\x034\x034\x03" +
		"5\x035\x035\x035\x055\u01EE\n5\x036\x036\x037\x037\x037\x037\x037\x03" +
		"7\x038\x038\x058\u01FA\n8\x039\x039\x039\x039\x059\u0200\n9\x03:\x03:" +
		"\x03:\x03:\x03:\x05:\u0207\n:\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x03<" +
		"\x03<\x03<\x03<\x03<\x05<\u0215\n<\x03=\x03=\x05=\u0219\n=\x03>\x03>\x05" +
		">\u021D\n>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x05@\u0229" +
		"\n@\x03A\x03A\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u0243\nE\x03" +
		"F\x03F\x03F\x03F\x03F\x05F\u024A\nF\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u025E\n" +
		"G\x03H\x03H\x05H\u0262\nH\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u0277\nI\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u02A2" +
		"\nJ\x03K\x03K\x03L\x03L\x05L\u02A8\nL\x03M\x03M\x03M\x03M\x05M\u02AE\n" +
		"M\x03N\x03N\x05N\u02B2\nN\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03P\x03" +
		"P\x03P\x03P\x05P\u02BF\nP\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u02C6\nQ\x03R" +
		"\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03" +
		"R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03" +
		"R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u02EB\nR\x03S\x03S\x03T\x03T\x03" +
		"T\x03T\x03T\x05T\u02F4\nT\x03U\x03U\x03U\x03U\x03U\x05U\u02FB\nU\x03V" +
		"\x03V\x03V\x05V\u0300\nV\x03W\x03W\x03X\x03X\x03X\x05X\u0307\nX\x03Y\x03" +
		"Y\x03Y\x05Y\u030C\nY\x03Z\x03Z\x05Z\u0310\nZ\x03[\x03[\x03[\x03[\x03[" +
		"\x03\\\x03\\\x05\\\u0319\n\\\x03]\x03]\x05]\u031D\n]\x03^\x03^\x03^\x03" +
		"_\x03_\x03_\x03_\x05_\u0326\n_\x03`\x03`\x03a\x03a\x03a\x03a\x03a\x03" +
		"b\x03b\x03b\x03b\x03c\x03c\x03c\x03c\x03c\x03c\x03d\x03d\x03d\x03d\x03" +
		"d\x03d\x03d\x03d\x02\x02\x02e\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
		"\xC0\x02\xC2\x02\xC4\x02\xC6\x02\x02\b\x03\x02\x19\x1A\x04\x02\x1B\x1D" +
		"SS\x04\x02\x1F\x1F%\'\v\x02\x03\x04\t\v\x11\x11\x15\x17\x1E\"$\'**-.D" +
		"D\x03\x02FP\x03\x02:;\x02\u0365\x02\xC8\x03\x02\x02\x02\x04\xD0\x03\x02" +
		"\x02\x02\x06\xD8\x03\x02\x02\x02\b\xDE\x03\x02\x02\x02\n\xE2\x03\x02\x02" +
		"\x02\f\xE4\x03\x02\x02\x02\x0E\xEC\x03\x02\x02\x02\x10\xF4\x03\x02\x02" +
		"\x02\x12\xF9\x03\x02\x02\x02\x14\xFB\x03\x02\x02\x02\x16\u0107\x03\x02" +
		"\x02\x02\x18\u0113\x03\x02\x02\x02\x1A\u0115\x03\x02\x02\x02\x1C\u0122" +
		"\x03\x02\x02\x02\x1E\u0124\x03\x02\x02\x02 \u012C\x03\x02\x02\x02\"\u012E" +
		"\x03\x02\x02\x02$\u0138\x03\x02\x02\x02&\u013E\x03\x02\x02\x02(\u0143" +
		"\x03\x02\x02\x02*\u0148\x03\x02\x02\x02,\u014A\x03\x02\x02\x02.\u0151" +
		"\x03\x02\x02\x020\u0157\x03\x02\x02\x022\u015C\x03\x02\x02\x024\u015E" +
		"\x03\x02\x02\x026\u0166\x03\x02\x02\x028\u016B\x03\x02\x02\x02:\u0170" +
		"\x03\x02\x02\x02<\u017B\x03\x02\x02\x02>\u017D\x03\x02\x02\x02@\u017F" +
		"\x03\x02\x02\x02B\u0181\x03\x02\x02\x02D\u018A\x03\x02\x02\x02F\u0195" +
		"\x03\x02\x02\x02H\u019D\x03\x02\x02\x02J\u01A3\x03\x02\x02\x02L\u01A5" +
		"\x03\x02\x02\x02N\u01AF\x03\x02\x02\x02P\u01B1\x03\x02\x02\x02R\u01BA" +
		"\x03\x02\x02\x02T\u01BC\x03\x02\x02\x02V\u01C2\x03\x02\x02\x02X\u01C9" +
		"\x03\x02\x02\x02Z\u01CB\x03\x02\x02\x02\\\u01D2\x03\x02\x02\x02^\u01D4" +
		"\x03\x02\x02\x02`\u01D8\x03\x02\x02\x02b\u01DC\x03\x02\x02\x02d\u01E2" +
		"\x03\x02\x02\x02f\u01E4\x03\x02\x02\x02h\u01ED\x03\x02\x02\x02j\u01EF" +
		"\x03\x02\x02\x02l\u01F1\x03\x02\x02\x02n\u01F9\x03\x02\x02\x02p\u01FF" +
		"\x03\x02\x02\x02r\u0206\x03\x02\x02\x02t\u0208\x03\x02\x02\x02v\u0214" +
		"\x03\x02\x02\x02x\u0218\x03\x02\x02\x02z\u021C\x03\x02\x02\x02|\u021E" +
		"\x03\x02\x02\x02~\u0228\x03\x02\x02\x02\x80\u022A\x03\x02\x02\x02\x82" +
		"\u022C\x03\x02\x02\x02\x84\u022E\x03\x02\x02\x02\x86\u0236\x03\x02\x02" +
		"\x02\x88\u0242\x03\x02\x02\x02\x8A\u0249\x03\x02\x02\x02\x8C\u025D\x03" +
		"\x02\x02\x02\x8E\u0261\x03\x02\x02\x02\x90\u0276\x03\x02\x02\x02\x92\u02A1" +
		"\x03\x02\x02\x02\x94\u02A3\x03\x02\x02\x02\x96\u02A7\x03\x02\x02\x02\x98" +
		"\u02AD\x03\x02\x02\x02\x9A\u02B1\x03\x02\x02\x02\x9C\u02B3\x03\x02\x02" +
		"\x02\x9E\u02BE\x03\x02\x02\x02\xA0\u02C5\x03\x02\x02\x02\xA2\u02EA\x03" +
		"\x02\x02\x02\xA4\u02EC\x03\x02\x02\x02\xA6\u02F3\x03\x02\x02\x02\xA8\u02FA" +
		"\x03\x02\x02\x02\xAA\u02FF\x03\x02\x02\x02\xAC\u0301\x03\x02\x02\x02\xAE" +
		"\u0306\x03\x02\x02\x02\xB0\u030B\x03\x02\x02\x02\xB2\u030F\x03\x02\x02" +
		"\x02\xB4\u0311\x03\x02\x02\x02\xB6\u0318\x03\x02\x02\x02\xB8\u031C\x03" +
		"\x02\x02\x02\xBA\u031E\x03\x02\x02\x02\xBC\u0325\x03\x02\x02\x02\xBE\u0327" +
		"\x03\x02\x02\x02\xC0\u0329\x03\x02\x02\x02\xC2\u032E\x03\x02\x02\x02\xC4" +
		"\u0332\x03\x02\x02\x02\xC6\u0338\x03\x02\x02\x02\xC8\xC9\x05\x04\x03\x02" +
		"\xC9\xCA\x07\x02\x02\x03\xCA\x03\x03\x02\x02\x02\xCB\xCC\x05\x88E\x02" +
		"\xCC\xCD\x05\x06\x04\x02\xCD\xCE\x05\x04\x03\x02\xCE\xD1\x03\x02\x02\x02" +
		"\xCF\xD1\x03\x02\x02\x02\xD0\xCB\x03\x02\x02\x02\xD0\xCF\x03\x02\x02\x02" +
		"\xD1\x05\x03\x02\x02\x02\xD2\xD9\x05\b\x05\x02\xD3\xD9\x05\x10\t\x02\xD4" +
		"\xD9\x05\x1A\x0E\x02\xD5\xD9\x05,\x17\x02\xD6\xD9\x056\x1C\x02\xD7\xD9" +
		"\x058\x1D\x02\xD8\xD2\x03\x02\x02\x02\xD8\xD3\x03\x02\x02\x02\xD8\xD4" +
		"\x03\x02\x02\x02\xD8\xD5\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD7" +
		"\x03\x02\x02\x02\xD9\x07\x03\x02\x02\x02\xDA\xDB\x07\x03\x02\x02\xDB\xDF" +
		"\x05\n\x06\x02\xDC\xDF\x05\f\x07\x02\xDD\xDF\x05\x0E\b\x02\xDE\xDA\x03" +
		"\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDD\x03\x02\x02\x02\xDF\t\x03" +
		"\x02\x02\x02\xE0\xE3\x054\x1B\x02\xE1\xE3\x05\f\x07\x02\xE2\xE0\x03\x02" +
		"\x02\x02\xE2\xE1\x03\x02\x02\x02\xE3\v\x03\x02\x02\x02\xE4\xE5\x07\x04" +
		"\x02\x02\xE5\xE6\x07T\x02\x02\xE6\xE7\x05(\x15\x02\xE7\xE8\x07\x05\x02" +
		"\x02\xE8\xE9\x05\x16\f\x02\xE9\xEA\x07\x06\x02\x02\xEA\xEB\x07\x07\x02" +
		"\x02\xEB\r\x03\x02\x02\x02\xEC\xED\x07\b\x02\x02\xED\xEE\x07T\x02\x02" +
		"\xEE\xEF\x05*\x16\x02\xEF\xF0\x07\x05\x02\x02\xF0\xF1\x05\x16\f\x02\xF1" +
		"\xF2\x07\x06\x02\x02\xF2\xF3\x07\x07\x02\x02\xF3\x0F\x03\x02\x02\x02\xF4" +
		"\xF5\x07\t\x02\x02\xF5\xF6\x05\x12\n\x02\xF6\x11\x03\x02\x02\x02\xF7\xFA" +
		"\x05\x14\v\x02\xF8\xFA\x05\"\x12\x02\xF9\xF7\x03\x02\x02\x02\xF9\xF8\x03" +
		"\x02\x02\x02\xFA\x13\x03\x02\x02\x02\xFB\xFC\x07\x04\x02\x02\xFC\xFD\x07" +
		"T\x02\x02\xFD\xFE\x07\x05\x02\x02\xFE\xFF\x05\x16\f\x02\xFF\u0100\x07" +
		"\x06\x02\x02\u0100\u0101\x07\x07\x02\x02\u0101\x15\x03\x02\x02\x02\u0102" +
		"\u0103\x05\x88E\x02\u0103\u0104\x05\x18\r\x02\u0104\u0105\x05\x16\f\x02" +
		"\u0105\u0108\x03\x02\x02\x02\u0106\u0108\x03\x02\x02\x02\u0107\u0102\x03" +
		"\x02\x02\x02\u0107\u0106\x03\x02\x02\x02\u0108\x17\x03\x02\x02\x02\u0109" +
		"\u0114\x05:\x1E\x02\u010A\u0114\x05d3\x02\u010B\u0114\x05B\"\x02\u010C" +
		"\u0114\x05L\'\x02\u010D\u0114\x05P)\x02\u010E\u0114\x05|?\x02\u010F\u0114" +
		"\x05T+\x02\u0110\u0114\x05X-\x02\u0111\u0114\x05\x80A\x02\u0112\u0114" +
		"\x05\x82B\x02\u0113\u0109\x03\x02\x02\x02\u0113\u010A\x03\x02\x02\x02" +
		"\u0113\u010B\x03\x02\x02\x02\u0113\u010C\x03\x02\x02\x02\u0113\u010D\x03" +
		"\x02\x02\x02\u0113\u010E\x03\x02\x02\x02\u0113\u010F\x03\x02\x02\x02\u0113" +
		"\u0110\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0112\x03\x02" +
		"\x02\x02\u0114\x19\x03\x02\x02\x02\u0115\u0116\x07\n\x02\x02\u0116\u0117" +
		"\x07T\x02\x02\u0117\u0118\x05(\x15\x02\u0118\u0119\x07\x05\x02\x02\u0119" +
		"\u011A\x05\x1C\x0F\x02\u011A\u011B\x07\x06\x02\x02\u011B\u011C\x07\x07" +
		"\x02\x02\u011C\x1B\x03\x02\x02\x02\u011D\u011E\x05\x88E\x02\u011E\u011F" +
		"\x05\x1E\x10\x02\u011F\u0120\x05\x1C\x0F\x02\u0120\u0123\x03\x02\x02\x02" +
		"\u0121\u0123\x03\x02\x02\x02\u0122\u011D\x03\x02\x02\x02\u0122\u0121\x03" +
		"\x02\x02\x02\u0123\x1D\x03\x02\x02\x02\u0124\u0125\x05 \x11\x02\u0125" +
		"\u0126\x05\x98M\x02\u0126\u0127\x07T\x02\x02\u0127\u0128\x05$\x13\x02" +
		"\u0128\u0129\x07\x07\x02\x02\u0129\x1F\x03\x02\x02\x02\u012A\u012D\x07" +
		"\v\x02\x02\u012B\u012D\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C" +
		"\u012B\x03\x02\x02\x02\u012D!\x03\x02\x02\x02\u012E\u012F\x07\n\x02\x02" +
		"\u012F\u0130\x07T\x02\x02\u0130\u0131\x07\x05\x02\x02\u0131\u0132\x05" +
		"\x1C\x0F\x02\u0132\u0133\x07\x06\x02\x02\u0133\u0134\x07\x07\x02\x02\u0134" +
		"#\x03\x02\x02\x02\u0135\u0136\x07\f\x02\x02\u0136\u0139\x05&\x14\x02\u0137" +
		"\u0139\x03\x02\x02\x02\u0138\u0135\x03\x02\x02\x02\u0138\u0137\x03\x02" +
		"\x02\x02\u0139%\x03\x02\x02\x02\u013A\u013F\x05<\x1F\x02\u013B\u013F\x07" +
		"U\x02\x02\u013C\u013D\x07\r\x02\x02\u013D\u013F\x07\x0E\x02\x02\u013E" +
		"\u013A\x03\x02\x02\x02\u013E\u013B\x03\x02\x02\x02\u013E\u013C\x03\x02" +
		"\x02\x02\u013F\'\x03\x02\x02\x02\u0140\u0141\x07\x0F\x02\x02\u0141\u0144" +
		"\x07T\x02\x02\u0142\u0144\x03\x02\x02\x02\u0143\u0140\x03\x02\x02\x02" +
		"\u0143\u0142\x03\x02\x02\x02\u0144)\x03\x02\x02\x02\u0145\u0146\x07\x10" +
		"\x02\x02\u0146\u0149\x07T\x02\x02\u0147\u0149\x03\x02\x02\x02\u0148\u0145" +
		"\x03\x02\x02\x02\u0148\u0147\x03\x02\x02\x02\u0149+\x03\x02\x02\x02\u014A" +
		"\u014B\x07\x11\x02\x02\u014B\u014C\x07T\x02\x02\u014C\u014D\x07\x05\x02" +
		"\x02\u014D\u014E\x05.\x18\x02\u014E\u014F\x07\x06\x02\x02\u014F\u0150" +
		"\x07\x07\x02\x02\u0150-\x03\x02\x02\x02\u0151\u0152\x07U\x02\x02\u0152" +
		"\u0153\x050\x19\x02\u0153/\x03\x02\x02\x02\u0154\u0155\x07\x12\x02\x02" +
		"\u0155\u0158\x052\x1A\x02\u0156\u0158\x03\x02\x02\x02\u0157\u0154\x03" +
		"\x02\x02\x02\u0157\u0156\x03\x02\x02\x02\u01581\x03\x02\x02\x02\u0159" +
		"\u015A\x07U\x02\x02\u015A\u015D\x050\x19\x02\u015B\u015D\x03\x02\x02\x02" +
		"\u015C\u0159\x03\x02\x02\x02\u015C\u015B\x03\x02\x02\x02\u015D3\x03\x02" +
		"\x02\x02\u015E\u015F\x07T\x02\x02\u015F\u0160\x07\f\x02\x02\u0160\u0161" +
		"\x05\xB8]\x02\u0161\u0162\x07\x13\x02\x02\u0162\u0163\x05p9\x02\u0163" +
		"\u0164\x07\x14\x02\x02\u0164\u0165\x07\x07\x02\x02\u01655\x03\x02\x02" +
		"\x02\u0166\u0167\x07\x15\x02\x02\u0167\u0168\x05\x98M\x02\u0168\u0169" +
		"\x07T\x02\x02\u0169\u016A\x07\x07\x02\x02\u016A7\x03\x02\x02\x02\u016B" +
		"\u016C\x07T\x02\x02\u016C\u016D\x07\x16\x02\x02\u016D\u016E\x07T\x02\x02" +
		"\u016E\u016F\x07\x07\x02\x02\u016F9\x03\x02\x02\x02\u0170\u0171\x07\x17" +
		"\x02\x02\u0171\u0172\x05\xA6T\x02\u0172\u0173\x07T\x02\x02\u0173\u0174" +
		"\x07\f\x02\x02\u0174\u0175\x05<\x1F\x02\u0175\u0176\x07\x07\x02\x02\u0176" +
		";\x03\x02\x02\x02\u0177\u017C\x05> \x02\u0178\u017C\x05@!\x02\u0179\u017C" +
		"\x07R\x02\x02\u017A\u017C\x07\x18\x02\x02\u017B\u0177\x03\x02\x02\x02" +
		"\u017B\u0178\x03\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017A\x03" +
		"\x02\x02\x02\u017C=\x03\x02\x02\x02\u017D\u017E\t\x02\x02\x02\u017E?\x03" +
		"\x02\x02\x02\u017F\u0180\t\x03\x02\x02\u0180A\x03\x02\x02\x02\u0181\u0182" +
		"\x07\x1E\x02\x02\u0182\u0183\x05D#\x02\u0183C\x03\x02\x02\x02\u0184\u018B" +
		"\x05l7\x02\u0185\u0186\x07\f\x02\x02\u0186\u0187\x05F$\x02\u0187\u0188" +
		"\x07\x07\x02\x02\u0188\u018B\x03\x02\x02\x02\u0189\u018B\x07\x07\x02\x02" +
		"\u018A\u0184\x03\x02\x02\x02\u018A\u0185\x03\x02\x02\x02\u018A\u0189\x03" +
		"\x02\x02\x02\u018BE\x03\x02\x02\x02\u018C\u018D\x07\x05\x02\x02\u018D" +
		"\u018E\x05H%\x02\u018E\u018F\x07\x06\x02\x02\u018F\u0196\x03\x02\x02\x02" +
		"\u0190\u0191\x07\r\x02\x02\u0191\u0192\x05J&\x02\u0192\u0193\x07\x0E\x02" +
		"\x02\u0193\u0196\x03\x02\x02\x02\u0194\u0196\x07T\x02\x02\u0195\u018C" +
		"\x03\x02\x02\x02\u0195\u0190\x03\x02\x02\x02\u0195\u0194\x03\x02\x02\x02" +
		"\u0196G\x03\x02\x02\x02\u0197\u019E\x07\x1F\x02\x02\u0198\u0199\x07 \x02" +
		"\x02\u0199\u019E\x05\xBC_\x02\u019A\u019B\x07T\x02\x02\u019B\u019E\x05" +
		"\xBC_\x02\u019C\u019E\x03\x02\x02\x02\u019D\u0197\x03\x02\x02\x02\u019D" +
		"\u0198\x03\x02\x02\x02\u019D\u019A\x03\x02\x02\x02\u019D\u019C\x03\x02" +
		"\x02\x02\u019EI\x03\x02\x02\x02\u019F\u01A4\x07\x1F\x02\x02\u01A0\u01A1" +
		"\x07T\x02\x02\u01A1\u01A4\x05\xBC_\x02\u01A2\u01A4\x03\x02\x02\x02\u01A3" +
		"\u019F\x03\x02\x02\x02\u01A3\u01A0\x03\x02\x02\x02\u01A3\u01A2\x03\x02" +
		"\x02\x02\u01A4K\x03\x02\x02\x02\u01A5\u01A6\x07!\x02\x02\u01A6\u01A7\x05" +
		"N(\x02\u01A7M\x03\x02\x02\x02\u01A8\u01A9\x05b2\x02\u01A9\u01AA\x05Z." +
		"\x02\u01AA\u01B0\x03\x02\x02\x02\u01AB\u01AC\x05\xB8]\x02\u01AC\u01AD" +
		"\x05l7\x02\u01AD\u01B0\x03\x02\x02\x02\u01AE\u01B0\x07\x07\x02\x02\u01AF" +
		"\u01A8\x03\x02\x02\x02\u01AF\u01AB\x03\x02\x02\x02\u01AF\u01AE\x03\x02" +
		"\x02\x02\u01B0O\x03\x02\x02\x02\u01B1\u01B2\x07\"\x02\x02\u01B2\u01B3" +
		"\x05R*\x02\u01B3Q\x03\x02\x02\x02\u01B4\u01B5\x05b2\x02\u01B5\u01B6\x05" +
		"Z.\x02\u01B6\u01BB\x03\x02\x02\x02\u01B7\u01B8\x05\xB8]\x02\u01B8\u01B9" +
		"\x05l7\x02\u01B9\u01BB\x03\x02\x02\x02\u01BA\u01B4\x03\x02\x02\x02\u01BA" +
		"\u01B7\x03\x02\x02\x02\u01BBS\x03\x02\x02\x02\u01BC\u01BD\x07#\x02\x02" +
		"\u01BD\u01BE\x05V,\x02\u01BEU\x03\x02\x02\x02\u01BF\u01C3\x05Z.\x02\u01C0" +
		"\u01C3\x05\x80A\x02\u01C1\u01C3\x05\x82B\x02\u01C2\u01BF\x03\x02\x02\x02" +
		"\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C1\x03\x02\x02\x02\u01C3W\x03\x02" +
		"\x02\x02\u01C4\u01C5\x07 \x02\x02\u01C5\u01C6\x05b2\x02\u01C6\u01C7\x05" +
		"Z.\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01CA\x05Z.\x02\u01C9\u01C4\x03" +
		"\x02\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01CAY\x03\x02\x02\x02\u01CB" +
		"\u01CC\x07$\x02\x02\u01CC\u01CD\x05\x98M\x02\u01CD\u01CE\x05\\/\x02\u01CE" +
		"\u01CF\x07\x07\x02\x02\u01CF[\x03\x02\x02\x02\u01D0\u01D3\x05^0\x02\u01D1" +
		"\u01D3\x07T\x02\x02\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D1\x03\x02\x02" +
		"\x02\u01D3]\x03\x02\x02\x02\u01D4\u01D5\x07\v\x02\x02\u01D5_\x03\x02\x02" +
		"\x02\u01D6\u01D9\x07 \x02\x02\u01D7\u01D9\x03\x02\x02\x02\u01D8\u01D6" +
		"\x03\x02\x02\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9a\x03\x02\x02\x02\u01DA" +
		"\u01DD\x07#\x02\x02\u01DB\u01DD\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02" +
		"\x02\u01DC\u01DB\x03\x02\x02\x02\u01DDc\x03\x02\x02\x02\u01DE\u01DF\x05" +
		"\xB8]\x02\u01DF\u01E0\x05l7\x02\u01E0\u01E3\x03\x02\x02\x02\u01E1\u01E3" +
		"\x05f4\x02\u01E2\u01DE\x03\x02\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3" +
		"e\x03\x02\x02\x02\u01E4\u01E5\x05j6\x02\u01E5\u01E6\x05h5\x02\u01E6\u01E7" +
		"\x05\xB8]\x02\u01E7\u01E8\x05l7\x02\u01E8g\x03\x02\x02\x02\u01E9\u01EA" +
		"\x05j6\x02\u01EA\u01EB\x05h5\x02\u01EB\u01EE\x03\x02\x02\x02\u01EC\u01EE" +
		"\x03\x02\x02\x02\u01ED\u01E9\x03\x02\x02\x02\u01ED\u01EC\x03\x02\x02\x02" +
		"\u01EEi\x03\x02\x02\x02\u01EF\u01F0\t\x04\x02\x02\u01F0k\x03\x02\x02\x02" +
		"\u01F1\u01F2\x05n8\x02\u01F2\u01F3\x07\x13\x02\x02\u01F3\u01F4\x05p9\x02" +
		"\u01F4\u01F5\x07\x14\x02\x02\u01F5\u01F6\x07\x07\x02\x02\u01F6m\x03\x02" +
		"\x02\x02\u01F7\u01FA\x07T\x02\x02\u01F8\u01FA\x03\x02\x02\x02\u01F9\u01F7" +
		"\x03\x02\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01FAo\x03\x02\x02\x02\u01FB" +
		"\u01FC\x05t;\x02\u01FC\u01FD\x05r:\x02\u01FD\u0200\x03\x02\x02\x02\u01FE" +
		"\u0200\x03\x02\x02\x02\u01FF\u01FB\x03\x02\x02\x02\u01FF\u01FE\x03\x02" +
		"\x02\x02\u0200q\x03\x02\x02\x02\u0201\u0202\x07\x12\x02\x02\u0202\u0203" +
		"\x05t;\x02\u0203\u0204\x05r:\x02\u0204\u0207\x03\x02\x02\x02\u0205\u0207" +
		"\x03\x02\x02\x02\u0206\u0201\x03\x02\x02\x02\u0206\u0205\x03\x02\x02\x02" +
		"\u0207s\x03\x02\x02\x02\u0208\u0209\x05\x88E\x02\u0209\u020A\x05v<\x02" +
		"\u020Au\x03\x02\x02\x02\u020B\u020C\x07(\x02\x02\u020C\u020D\x05\x98M" +
		"\x02\u020D\u020E\x05x=\x02\u020E\u020F\x05$\x13\x02\u020F\u0215\x03\x02" +
		"\x02\x02\u0210\u0211\x05\x98M\x02\u0211\u0212\x05z>\x02\u0212\u0213\x05" +
		"x=\x02\u0213\u0215\x03\x02\x02\x02\u0214\u020B\x03\x02\x02\x02\u0214\u0210" +
		"\x03\x02\x02\x02\u0215w\x03\x02\x02\x02\u0216\u0219\x05\x94K\x02\u0217" +
		"\u0219\x07T\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0217\x03\x02\x02" +
		"\x02\u0219y\x03\x02\x02\x02\u021A\u021D\x07)\x02\x02\u021B\u021D\x03\x02" +
		"\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021B\x03\x02\x02\x02\u021D" +
		"{\x03\x02\x02\x02\u021E\u021F\x07*\x02\x02\u021F\u0220\x07+\x02\x02\u0220" +
		"\u0221\x05\x98M\x02\u0221\u0222\x05~@\x02\u0222\u0223\x07";
	private static readonly _serializedATNSegment1: string =
		",\x02\x02\u0223\u0224\x07\x07\x02\x02\u0224}\x03\x02\x02\x02\u0225\u0226" +
		"\x07\x12\x02\x02\u0226\u0229\x05\x98M\x02\u0227\u0229\x03\x02\x02\x02" +
		"\u0228\u0225\x03\x02\x02\x02\u0228\u0227\x03\x02\x02\x02\u0229\x7F\x03" +
		"\x02\x02\x02\u022A\u022B\x05\x84C\x02\u022B\x81\x03\x02\x02\x02\u022C" +
		"\u022D\x05\x86D\x02\u022D\x83\x03\x02\x02\x02\u022E\u022F\x07-\x02\x02" +
		"\u022F\u0230\x07+\x02\x02\u0230\u0231\x05\x98M\x02\u0231\u0232\x07\x12" +
		"\x02\x02\u0232\u0233\x05\x98M\x02\u0233\u0234\x07,\x02\x02\u0234\u0235" +
		"\x07\x07\x02\x02\u0235\x85\x03\x02\x02\x02\u0236\u0237\x07.\x02\x02\u0237" +
		"\u0238\x07+\x02\x02\u0238\u0239\x05\x98M\x02\u0239\u023A\x07,\x02\x02" +
		"\u023A\u023B\x07\x07\x02\x02\u023B\x87\x03\x02\x02\x02\u023C\u023D\x07" +
		"\r\x02\x02\u023D\u023E\x05\x8CG\x02\u023E\u023F\x05\x8AF\x02\u023F\u0240" +
		"\x07\x0E\x02\x02\u0240\u0243\x03\x02\x02\x02\u0241\u0243\x03\x02\x02\x02" +
		"\u0242\u023C\x03\x02\x02\x02\u0242\u0241\x03\x02\x02\x02\u0243\x89\x03" +
		"\x02\x02\x02\u0244\u0245\x07\x12\x02\x02\u0245\u0246\x05\x8CG\x02\u0246" +
		"\u0247\x05\x8AF\x02\u0247\u024A\x03\x02\x02\x02\u0248\u024A\x03\x02\x02" +
		"\x02\u0249\u0244\x03\x02\x02\x02\u0249\u0248\x03\x02\x02\x02\u024A\x8B" +
		"\x03\x02\x02\x02\u024B\u024C\x07\x13\x02\x02\u024C\u024D\x05\x90I\x02" +
		"\u024D\u024E\x07\x14\x02\x02\u024E\u024F\x05\x8EH\x02\u024F\u025E\x03" +
		"\x02\x02\x02\u0250\u0251\x07\r\x02\x02\u0251\u0252\x05\x90I\x02\u0252" +
		"\u0253\x07\x0E\x02\x02\u0253\u0254\x05\x8EH\x02\u0254\u025E\x03\x02\x02" +
		"\x02\u0255\u0256\x07\x05\x02\x02\u0256\u0257\x05\x90I\x02\u0257\u0258" +
		"\x07\x06\x02\x02\u0258\u0259\x05\x8EH\x02\u0259\u025E\x03\x02\x02\x02" +
		"\u025A\u025B\x05\x92J\x02\u025B\u025C\x05\x8EH\x02\u025C\u025E\x03\x02" +
		"\x02\x02\u025D\u024B\x03\x02\x02\x02\u025D\u0250\x03\x02\x02\x02\u025D" +
		"\u0255\x03\x02\x02\x02\u025D\u025A\x03\x02\x02\x02\u025E\x8D\x03\x02\x02" +
		"\x02\u025F\u0262\x05\x8CG\x02\u0260\u0262\x03\x02\x02\x02\u0261\u025F" +
		"\x03\x02\x02\x02\u0261\u0260\x03\x02\x02\x02\u0262\x8F\x03\x02\x02\x02" +
		"\u0263\u0264\x07\x13\x02\x02\u0264\u0265\x05\x90I\x02\u0265\u0266\x07" +
		"\x14\x02\x02\u0266\u0267\x05\x90I\x02\u0267\u0277\x03\x02\x02\x02\u0268" +
		"\u0269\x07\r\x02\x02\u0269\u026A\x05\x90I\x02\u026A\u026B\x07\x0E\x02" +
		"\x02\u026B\u026C\x05\x90I\x02\u026C\u0277\x03\x02\x02\x02\u026D\u026E" +
		"\x07\x05\x02\x02\u026E\u026F\x05\x90I\x02\u026F\u0270\x07\x06\x02\x02" +
		"\u0270\u0271\x05\x90I\x02\u0271\u0277\x03\x02\x02\x02\u0272\u0273\x05" +
		"\x96L\x02\u0273\u0274\x05\x90I\x02\u0274\u0277\x03\x02\x02\x02\u0275\u0277" +
		"\x03\x02\x02\x02\u0276\u0263\x03\x02\x02\x02\u0276\u0268\x03\x02\x02\x02" +
		"\u0276\u026D\x03\x02\x02\x02\u0276\u0272\x03\x02\x02\x02\u0276\u0275\x03" +
		"\x02\x02\x02\u0277\x91\x03\x02\x02\x02\u0278\u02A2\x07R\x02\x02\u0279" +
		"\u02A2\x07S\x02\x02\u027A\u02A2\x07T\x02\x02\u027B\u02A2\x07U\x02\x02" +
		"\u027C\u02A2\x07X\x02\x02\u027D\u02A2\x07/\x02\x02\u027E\u02A2\x07\x1B" +
		"\x02\x02\u027F\u02A2\x070\x02\x02\u0280\u02A2\x07)\x02\x02\u0281\u02A2" +
		"\x07\x0F\x02\x02\u0282\u02A2\x07\x07\x02\x02\u0283\u02A2\x07+\x02\x02" +
		"\u0284\u02A2\x07\f\x02\x02\u0285\u02A2\x07,\x02\x02\u0286\u02A2\x071\x02" +
		"\x02\u0287\u02A2\x072\x02\x02\u0288\u02A2\x073\x02\x02\u0289\u02A2\x07" +
		"4\x02\x02\u028A\u02A2\x07\x1C\x02\x02\u028B\u02A2\x07\x1D\x02\x02\u028C" +
		"\u02A2\x075\x02\x02\u028D\u02A2\x076\x02\x02\u028E\u02A2\x077\x02\x02" +
		"\u028F\u02A2\x078\x02\x02\u0290\u02A2\x079\x02\x02\u0291\u02A2\x07:\x02" +
		"\x02\u0292\u02A2\x07\x1A\x02\x02\u0293\u02A2\x07;\x02\x02\u0294\u02A2" +
		"\x07<\x02\x02\u0295\u02A2\x07\x18\x02\x02\u0296\u02A2\x07=\x02\x02\u0297" +
		"\u02A2\x07>\x02\x02\u0298\u02A2\x07?\x02\x02\u0299\u02A2\x07(\x02\x02" +
		"\u029A\u02A2\x07@\x02\x02\u029B\u02A2\x07A\x02\x02\u029C\u02A2\x07\x19" +
		"\x02\x02\u029D\u02A2\x07B\x02\x02\u029E\u02A2\x07C\x02\x02\u029F\u02A2" +
		"\x05\x94K\x02\u02A0\u02A2\x05\xA4S\x02\u02A1\u0278\x03\x02\x02\x02\u02A1" +
		"\u0279\x03\x02\x02\x02\u02A1\u027A\x03\x02\x02\x02\u02A1\u027B\x03\x02" +
		"\x02\x02\u02A1\u027C\x03\x02\x02\x02\u02A1\u027D\x03\x02\x02\x02\u02A1" +
		"\u027E\x03\x02\x02\x02\u02A1\u027F\x03\x02\x02\x02\u02A1\u0280\x03\x02" +
		"\x02\x02\u02A1\u0281\x03\x02\x02\x02\u02A1\u0282\x03\x02\x02\x02\u02A1" +
		"\u0283\x03\x02\x02\x02\u02A1\u0284\x03\x02\x02\x02\u02A1\u0285\x03\x02" +
		"\x02\x02\u02A1\u0286\x03\x02\x02\x02\u02A1\u0287\x03\x02\x02\x02\u02A1" +
		"\u0288\x03\x02\x02\x02\u02A1\u0289\x03\x02\x02\x02\u02A1\u028A\x03\x02" +
		"\x02\x02\u02A1\u028B\x03\x02\x02\x02\u02A1\u028C\x03\x02\x02\x02\u02A1" +
		"\u028D\x03\x02\x02\x02\u02A1\u028E\x03\x02\x02\x02\u02A1\u028F\x03\x02" +
		"\x02\x02\u02A1\u0290\x03\x02\x02\x02\u02A1\u0291\x03\x02\x02\x02\u02A1" +
		"\u0292\x03\x02\x02\x02\u02A1\u0293\x03\x02\x02\x02\u02A1\u0294\x03\x02" +
		"\x02\x02\u02A1\u0295\x03\x02\x02\x02\u02A1\u0296\x03\x02\x02\x02\u02A1" +
		"\u0297\x03\x02\x02\x02\u02A1\u0298\x03\x02\x02\x02\u02A1\u0299\x03\x02" +
		"\x02\x02\u02A1\u029A\x03\x02\x02\x02\u02A1\u029B\x03\x02\x02\x02\u02A1" +
		"\u029C\x03\x02\x02\x02\u02A1\u029D\x03\x02\x02\x02\u02A1\u029E\x03\x02" +
		"\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A1\u02A0\x03\x02\x02\x02\u02A2" +
		"\x93\x03\x02\x02\x02\u02A3\u02A4\t\x05\x02\x02\u02A4\x95\x03\x02\x02\x02" +
		"\u02A5\u02A8\x05\x92J\x02\u02A6\u02A8\x07\x12\x02\x02\u02A7\u02A5\x03" +
		"\x02\x02\x02\u02A7\u02A6\x03\x02\x02\x02\u02A8\x97\x03\x02\x02\x02\u02A9" +
		"\u02AE\x05\x9AN\x02\u02AA\u02AB\x05\x9CO\x02\u02AB\u02AC\x05\xB6\\\x02" +
		"\u02AC\u02AE\x03\x02\x02\x02\u02AD\u02A9\x03\x02\x02\x02\u02AD\u02AA\x03" +
		"\x02\x02\x02\u02AE\x99\x03\x02\x02\x02\u02AF\u02B2\x05\xA2R\x02\u02B0" +
		"\u02B2\x077\x02\x02\u02B1\u02AF\x03\x02\x02\x02\u02B1\u02B0\x03\x02\x02" +
		"\x02\u02B2\x9B\x03\x02\x02\x02\u02B3\u02B4\x07\x13\x02\x02\u02B4\u02B5" +
		"\x05\x9EP\x02\u02B5\u02B6\x07?\x02\x02\u02B6\u02B7\x05\x9EP\x02\u02B7" +
		"\u02B8\x05\xA0Q\x02\u02B8\u02B9\x07\x14\x02\x02\u02B9\x9D\x03\x02\x02" +
		"\x02\u02BA\u02BF\x05\xA2R\x02\u02BB\u02BC\x05\x9CO\x02\u02BC\u02BD\x05" +
		"\xB6\\\x02\u02BD\u02BF\x03\x02\x02\x02\u02BE\u02BA\x03\x02\x02\x02\u02BE" +
		"\u02BB\x03\x02\x02\x02\u02BF\x9F\x03\x02\x02\x02\u02C0\u02C1\x07?\x02" +
		"\x02\u02C1\u02C2\x05\x9EP\x02\u02C2\u02C3\x05\xA0Q\x02\u02C3\u02C6\x03" +
		"\x02\x02\x02\u02C4\u02C6\x03\x02\x02\x02\u02C5\u02C0\x03\x02\x02\x02\u02C5" +
		"\u02C4\x03\x02\x02\x02\u02C6\xA1\x03\x02\x02\x02\u02C7\u02C8\x05\xA8U" +
		"\x02\u02C8\u02C9\x05\xB6\\\x02\u02C9\u02EB\x03\x02\x02\x02\u02CA\u02CB" +
		"\x05\xB4[\x02\u02CB\u02CC\x05\xB6\\\x02\u02CC\u02EB\x03\x02\x02\x02\u02CD" +
		"\u02CE\x072\x02\x02\u02CE\u02EB\x05\xB6\\\x02\u02CF\u02D0\x073\x02\x02" +
		"\u02D0\u02EB\x05\xB6\\\x02\u02D1\u02D2\x076\x02\x02\u02D2\u02EB\x05\xB6" +
		"\\\x02\u02D3\u02D4\x07T\x02\x02\u02D4\u02EB\x05\xB6\\\x02\u02D5\u02D6" +
		"\x07@\x02\x02\u02D6\u02D7\x07+\x02\x02\u02D7\u02D8\x05\x98M\x02\u02D8" +
		"\u02D9\x07,\x02\x02\u02D9\u02DA\x05\xB6\\\x02\u02DA\u02EB\x03\x02\x02" +
		"\x02\u02DB\u02DC\x07=\x02\x02\u02DC\u02EB\x05\xB6\\\x02\u02DD\u02DE\x07" +
		"5\x02\x02\u02DE\u02EB\x05\xB6\\\x02\u02DF\u02E0\x07E\x02\x02\u02E0\u02EB" +
		"\x05\xB6\\\x02\u02E1\u02E2\x05\xA4S\x02\u02E2\u02E3\x05\xB6\\\x02\u02E3" +
		"\u02EB\x03\x02\x02\x02\u02E4\u02E5\x074\x02\x02\u02E5\u02E6\x07+\x02\x02" +
		"\u02E6\u02E7\x05\x98M\x02\u02E7\u02E8\x07,\x02\x02\u02E8\u02E9\x05\xB6" +
		"\\\x02\u02E9\u02EB\x03\x02\x02\x02\u02EA\u02C7\x03\x02\x02\x02\u02EA\u02CA" +
		"\x03\x02\x02\x02\u02EA\u02CD\x03\x02\x02\x02\u02EA\u02CF\x03\x02\x02\x02" +
		"\u02EA\u02D1\x03\x02\x02\x02\u02EA\u02D3\x03\x02\x02\x02\u02EA\u02D5\x03" +
		"\x02\x02\x02\u02EA\u02DB\x03\x02\x02\x02\u02EA\u02DD\x03\x02\x02\x02\u02EA" +
		"\u02DF\x03\x02\x02\x02\u02EA\u02E1\x03\x02\x02\x02\u02EA\u02E4\x03\x02" +
		"\x02\x02\u02EB\xA3\x03\x02\x02\x02\u02EC\u02ED\t\x06\x02\x02\u02ED\xA5" +
		"\x03\x02\x02\x02\u02EE\u02EF\x05\xA8U\x02\u02EF\u02F0\x05\xB6\\\x02\u02F0" +
		"\u02F4\x03\x02\x02\x02\u02F1\u02F2\x07T\x02\x02\u02F2\u02F4\x05\xB6\\" +
		"\x02\u02F3\u02EE\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F4\xA7" +
		"\x03\x02\x02\x02\u02F5\u02FB\x05\xAEX\x02\u02F6\u02FB\x05\xAAV\x02\u02F7" +
		"\u02FB\x078\x02\x02\u02F8\u02FB\x079\x02\x02\u02F9\u02FB\x07>\x02\x02" +
		"\u02FA\u02F5\x03\x02\x02\x02\u02FA\u02F6\x03\x02\x02\x02\u02FA\u02F7\x03" +
		"\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FA\u02F9\x03\x02\x02\x02\u02FB" +
		"\xA9\x03\x02\x02\x02\u02FC\u02FD\x07D\x02\x02\u02FD\u0300\x05\xACW\x02" +
		"\u02FE\u0300\x05\xACW\x02\u02FF\u02FC\x03\x02\x02\x02\u02FF\u02FE\x03" +
		"\x02\x02\x02\u0300\xAB\x03\x02\x02\x02\u0301\u0302\t\x07\x02\x02\u0302" +
		"\xAD\x03\x02\x02\x02\u0303\u0304\x07B\x02\x02\u0304\u0307\x05\xB0Y\x02" +
		"\u0305\u0307\x05\xB0Y\x02\u0306\u0303\x03\x02\x02\x02\u0306\u0305\x03" +
		"\x02\x02\x02\u0307\xAF\x03\x02\x02\x02\u0308\u030C\x07A\x02\x02\u0309" +
		"\u030A\x07<\x02\x02\u030A\u030C\x05\xB2Z\x02\u030B\u0308\x03\x02\x02\x02" +
		"\u030B\u0309\x03\x02\x02\x02\u030C\xB1\x03\x02\x02\x02\u030D\u0310\x07" +
		"<\x02\x02\u030E\u0310\x03\x02\x02\x02\u030F\u030D\x03\x02\x02\x02\u030F" +
		"\u030E\x03\x02\x02\x02\u0310\xB3\x03\x02\x02\x02\u0311\u0312\x07Q\x02" +
		"\x02\u0312\u0313\x07+\x02\x02\u0313\u0314\x05\xB8]\x02\u0314\u0315\x07" +
		",\x02\x02\u0315\xB5\x03\x02\x02\x02\u0316\u0319\x071\x02\x02\u0317\u0319" +
		"\x03\x02\x02\x02\u0318\u0316\x03\x02\x02\x02\u0318\u0317\x03\x02\x02\x02" +
		"\u0319\xB7\x03\x02\x02\x02\u031A\u031D\x05\x98M\x02\u031B\u031D\x07C\x02" +
		"\x02\u031C\u031A\x03\x02\x02\x02\u031C\u031B\x03\x02\x02\x02\u031D\xB9" +
		"\x03\x02\x02\x02\u031E\u031F\x07T\x02\x02\u031F\u0320\x05\xBC_\x02\u0320" +
		"\xBB\x03\x02\x02\x02\u0321\u0322\x07\x12\x02\x02\u0322\u0323\x07T\x02" +
		"\x02\u0323\u0326\x05\xBC_\x02\u0324\u0326\x03\x02\x02\x02\u0325\u0321" +
		"\x03\x02\x02\x02\u0325\u0324\x03\x02\x02\x02\u0326\xBD\x03\x02\x02\x02" +
		"\u0327\u0328\x07T\x02\x02\u0328\xBF\x03\x02\x02\x02\u0329\u032A\x07T\x02" +
		"\x02\u032A\u032B\x07\x13\x02\x02\u032B\u032C\x05p9\x02\u032C\u032D\x07" +
		"\x14\x02\x02\u032D\xC1\x03\x02\x02\x02\u032E\u032F\x07T\x02\x02\u032F" +
		"\u0330\x07\f\x02\x02\u0330\u0331\x07T\x02\x02\u0331\xC3\x03\x02\x02\x02" +
		"\u0332\u0333\x07T\x02\x02\u0333\u0334\x07\f\x02\x02\u0334\u0335\x07\x13" +
		"\x02\x02\u0335\u0336\x05\xBA^\x02\u0336\u0337\x07\x14\x02\x02\u0337\xC5" +
		"\x03\x02\x02\x02\u0338\u0339\x07T\x02\x02\u0339\u033A\x07\f\x02\x02\u033A" +
		"\u033B\x07T\x02\x02\u033B\u033C\x07\x13\x02\x02\u033C\u033D\x05p9\x02" +
		"\u033D\u033E\x07\x14\x02\x02\u033E\xC7\x03\x02\x02\x02;\xD0\xD8\xDE\xE2" +
		"\xF9\u0107\u0113\u0122\u012C\u0138\u013E\u0143\u0148\u0157\u015C\u017B" +
		"\u018A\u0195\u019D\u01A3\u01AF\u01BA\u01C2\u01C9\u01D2\u01D8\u01DC\u01E2" +
		"\u01ED\u01F9\u01FF\u0206\u0214\u0218\u021C\u0228\u0242\u0249\u025D\u0261" +
		"\u0276\u02A1\u02A7\u02AD\u02B1\u02BE\u02C5\u02EA\u02F3\u02FA\u02FF\u0306" +
		"\u030B\u030F\u0318\u031C\u0325";
	public static readonly _serializedATN: string = Utils.join(
		[
			WebIDLParser._serializedATNSegment0,
			WebIDLParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!WebIDLParser.__ATN) {
			WebIDLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WebIDLParser._serializedATN));
		}

		return WebIDLParser.__ATN;
	}

}

export class WebIDLContext extends ParserRuleContext {
	public definitions(): DefinitionsContext {
		return this.getRuleContext(0, DefinitionsContext);
	}
	public EOF(): TerminalNode { return this.getToken(WebIDLParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_webIDL; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterWebIDL) {
			listener.enterWebIDL(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitWebIDL) {
			listener.exitWebIDL(this);
		}
	}
}


export class DefinitionsContext extends ParserRuleContext {
	public extendedAttributeList(): ExtendedAttributeListContext | undefined {
		return this.tryGetRuleContext(0, ExtendedAttributeListContext);
	}
	public definition(): DefinitionContext | undefined {
		return this.tryGetRuleContext(0, DefinitionContext);
	}
	public definitions(): DefinitionsContext | undefined {
		return this.tryGetRuleContext(0, DefinitionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_definitions; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterDefinitions) {
			listener.enterDefinitions(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitDefinitions) {
			listener.exitDefinitions(this);
		}
	}
}


export class DefinitionContext extends ParserRuleContext {
	public callbackOrInterface(): CallbackOrInterfaceContext | undefined {
		return this.tryGetRuleContext(0, CallbackOrInterfaceContext);
	}
	public partial(): PartialContext | undefined {
		return this.tryGetRuleContext(0, PartialContext);
	}
	public dictionary(): DictionaryContext | undefined {
		return this.tryGetRuleContext(0, DictionaryContext);
	}
	public enum_(): Enum_Context | undefined {
		return this.tryGetRuleContext(0, Enum_Context);
	}
	public typedef(): TypedefContext | undefined {
		return this.tryGetRuleContext(0, TypedefContext);
	}
	public implementsStatement(): ImplementsStatementContext | undefined {
		return this.tryGetRuleContext(0, ImplementsStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_definition; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterDefinition) {
			listener.enterDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitDefinition) {
			listener.exitDefinition(this);
		}
	}
}


export class CallbackOrInterfaceContext extends ParserRuleContext {
	public callbackRestOrInterface(): CallbackRestOrInterfaceContext | undefined {
		return this.tryGetRuleContext(0, CallbackRestOrInterfaceContext);
	}
	public interface_(): Interface_Context | undefined {
		return this.tryGetRuleContext(0, Interface_Context);
	}
	public class_(): Class_Context | undefined {
		return this.tryGetRuleContext(0, Class_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_callbackOrInterface; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterCallbackOrInterface) {
			listener.enterCallbackOrInterface(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitCallbackOrInterface) {
			listener.exitCallbackOrInterface(this);
		}
	}
}


export class CallbackRestOrInterfaceContext extends ParserRuleContext {
	public callbackRest(): CallbackRestContext | undefined {
		return this.tryGetRuleContext(0, CallbackRestContext);
	}
	public interface_(): Interface_Context | undefined {
		return this.tryGetRuleContext(0, Interface_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_callbackRestOrInterface; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterCallbackRestOrInterface) {
			listener.enterCallbackRestOrInterface(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitCallbackRestOrInterface) {
			listener.exitCallbackRestOrInterface(this);
		}
	}
}


export class Interface_Context extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	public inheritance(): InheritanceContext {
		return this.getRuleContext(0, InheritanceContext);
	}
	public interfaceMembers(): InterfaceMembersContext {
		return this.getRuleContext(0, InterfaceMembersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_interface_; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterInterface_) {
			listener.enterInterface_(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitInterface_) {
			listener.exitInterface_(this);
		}
	}
}


export class Class_Context extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	public extension(): ExtensionContext {
		return this.getRuleContext(0, ExtensionContext);
	}
	public interfaceMembers(): InterfaceMembersContext {
		return this.getRuleContext(0, InterfaceMembersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_class_; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterClass_) {
			listener.enterClass_(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitClass_) {
			listener.exitClass_(this);
		}
	}
}


export class PartialContext extends ParserRuleContext {
	public partialDefinition(): PartialDefinitionContext {
		return this.getRuleContext(0, PartialDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_partial; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterPartial) {
			listener.enterPartial(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitPartial) {
			listener.exitPartial(this);
		}
	}
}


export class PartialDefinitionContext extends ParserRuleContext {
	public partialInterface(): PartialInterfaceContext | undefined {
		return this.tryGetRuleContext(0, PartialInterfaceContext);
	}
	public partialDictionary(): PartialDictionaryContext | undefined {
		return this.tryGetRuleContext(0, PartialDictionaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_partialDefinition; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterPartialDefinition) {
			listener.enterPartialDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitPartialDefinition) {
			listener.exitPartialDefinition(this);
		}
	}
}


export class PartialInterfaceContext extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	public interfaceMembers(): InterfaceMembersContext {
		return this.getRuleContext(0, InterfaceMembersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_partialInterface; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterPartialInterface) {
			listener.enterPartialInterface(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitPartialInterface) {
			listener.exitPartialInterface(this);
		}
	}
}


export class InterfaceMembersContext extends ParserRuleContext {
	public extendedAttributeList(): ExtendedAttributeListContext | undefined {
		return this.tryGetRuleContext(0, ExtendedAttributeListContext);
	}
	public interfaceMember(): InterfaceMemberContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMemberContext);
	}
	public interfaceMembers(): InterfaceMembersContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMembersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_interfaceMembers; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterInterfaceMembers) {
			listener.enterInterfaceMembers(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitInterfaceMembers) {
			listener.exitInterfaceMembers(this);
		}
	}
}


export class InterfaceMemberContext extends ParserRuleContext {
	public const_(): Const_Context | undefined {
		return this.tryGetRuleContext(0, Const_Context);
	}
	public operation(): OperationContext | undefined {
		return this.tryGetRuleContext(0, OperationContext);
	}
	public serializer(): SerializerContext | undefined {
		return this.tryGetRuleContext(0, SerializerContext);
	}
	public stringifier(): StringifierContext | undefined {
		return this.tryGetRuleContext(0, StringifierContext);
	}
	public staticMember(): StaticMemberContext | undefined {
		return this.tryGetRuleContext(0, StaticMemberContext);
	}
	public iterable(): IterableContext | undefined {
		return this.tryGetRuleContext(0, IterableContext);
	}
	public readonlyMember(): ReadonlyMemberContext | undefined {
		return this.tryGetRuleContext(0, ReadonlyMemberContext);
	}
	public readWriteAttribute(): ReadWriteAttributeContext | undefined {
		return this.tryGetRuleContext(0, ReadWriteAttributeContext);
	}
	public readWriteMaplike(): ReadWriteMaplikeContext | undefined {
		return this.tryGetRuleContext(0, ReadWriteMaplikeContext);
	}
	public readWriteSetlike(): ReadWriteSetlikeContext | undefined {
		return this.tryGetRuleContext(0, ReadWriteSetlikeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_interfaceMember; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterInterfaceMember) {
			listener.enterInterfaceMember(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitInterfaceMember) {
			listener.exitInterfaceMember(this);
		}
	}
}


export class DictionaryContext extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	public inheritance(): InheritanceContext {
		return this.getRuleContext(0, InheritanceContext);
	}
	public dictionaryMembers(): DictionaryMembersContext {
		return this.getRuleContext(0, DictionaryMembersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_dictionary; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterDictionary) {
			listener.enterDictionary(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitDictionary) {
			listener.exitDictionary(this);
		}
	}
}


export class DictionaryMembersContext extends ParserRuleContext {
	public extendedAttributeList(): ExtendedAttributeListContext | undefined {
		return this.tryGetRuleContext(0, ExtendedAttributeListContext);
	}
	public dictionaryMember(): DictionaryMemberContext | undefined {
		return this.tryGetRuleContext(0, DictionaryMemberContext);
	}
	public dictionaryMembers(): DictionaryMembersContext | undefined {
		return this.tryGetRuleContext(0, DictionaryMembersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_dictionaryMembers; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterDictionaryMembers) {
			listener.enterDictionaryMembers(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitDictionaryMembers) {
			listener.exitDictionaryMembers(this);
		}
	}
}


export class DictionaryMemberContext extends ParserRuleContext {
	public required(): RequiredContext {
		return this.getRuleContext(0, RequiredContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public IDENTIFIER_WEBIDL(): TerminalNode { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	public default_(): Default_Context {
		return this.getRuleContext(0, Default_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_dictionaryMember; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterDictionaryMember) {
			listener.enterDictionaryMember(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitDictionaryMember) {
			listener.exitDictionaryMember(this);
		}
	}
}


export class RequiredContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_required; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterRequired) {
			listener.enterRequired(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitRequired) {
			listener.exitRequired(this);
		}
	}
}


export class PartialDictionaryContext extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	public dictionaryMembers(): DictionaryMembersContext {
		return this.getRuleContext(0, DictionaryMembersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_partialDictionary; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterPartialDictionary) {
			listener.enterPartialDictionary(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitPartialDictionary) {
			listener.exitPartialDictionary(this);
		}
	}
}


export class Default_Context extends ParserRuleContext {
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_default_; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterDefault_) {
			listener.enterDefault_(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitDefault_) {
			listener.exitDefault_(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	public constValue(): ConstValueContext | undefined {
		return this.tryGetRuleContext(0, ConstValueContext);
	}
	public STRING_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.STRING_WEBIDL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_defaultValue; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterDefaultValue) {
			listener.enterDefaultValue(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitDefaultValue) {
			listener.exitDefaultValue(this);
		}
	}
}


export class InheritanceContext extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_inheritance; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterInheritance) {
			listener.enterInheritance(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitInheritance) {
			listener.exitInheritance(this);
		}
	}
}


export class ExtensionContext extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_extension; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterExtension) {
			listener.enterExtension(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitExtension) {
			listener.exitExtension(this);
		}
	}
}


export class Enum_Context extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	public enumValueList(): EnumValueListContext {
		return this.getRuleContext(0, EnumValueListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_enum_; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterEnum_) {
			listener.enterEnum_(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitEnum_) {
			listener.exitEnum_(this);
		}
	}
}


export class EnumValueListContext extends ParserRuleContext {
	public STRING_WEBIDL(): TerminalNode { return this.getToken(WebIDLParser.STRING_WEBIDL, 0); }
	public enumValueListComma(): EnumValueListCommaContext {
		return this.getRuleContext(0, EnumValueListCommaContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_enumValueList; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterEnumValueList) {
			listener.enterEnumValueList(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitEnumValueList) {
			listener.exitEnumValueList(this);
		}
	}
}


export class EnumValueListCommaContext extends ParserRuleContext {
	public enumValueListString(): EnumValueListStringContext | undefined {
		return this.tryGetRuleContext(0, EnumValueListStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_enumValueListComma; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterEnumValueListComma) {
			listener.enterEnumValueListComma(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitEnumValueListComma) {
			listener.exitEnumValueListComma(this);
		}
	}
}


export class EnumValueListStringContext extends ParserRuleContext {
	public STRING_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.STRING_WEBIDL, 0); }
	public enumValueListComma(): EnumValueListCommaContext | undefined {
		return this.tryGetRuleContext(0, EnumValueListCommaContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_enumValueListString; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterEnumValueListString) {
			listener.enterEnumValueListString(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitEnumValueListString) {
			listener.exitEnumValueListString(this);
		}
	}
}


export class CallbackRestContext extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	public returnType(): ReturnTypeContext {
		return this.getRuleContext(0, ReturnTypeContext);
	}
	public argumentList(): ArgumentListContext {
		return this.getRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_callbackRest; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterCallbackRest) {
			listener.enterCallbackRest(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitCallbackRest) {
			listener.exitCallbackRest(this);
		}
	}
}


export class TypedefContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public IDENTIFIER_WEBIDL(): TerminalNode { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_typedef; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterTypedef) {
			listener.enterTypedef(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitTypedef) {
			listener.exitTypedef(this);
		}
	}
}


export class ImplementsStatementContext extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode[];
	public IDENTIFIER_WEBIDL(i: number): TerminalNode;
	public IDENTIFIER_WEBIDL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WebIDLParser.IDENTIFIER_WEBIDL);
		} else {
			return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_implementsStatement; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterImplementsStatement) {
			listener.enterImplementsStatement(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitImplementsStatement) {
			listener.exitImplementsStatement(this);
		}
	}
}


export class Const_Context extends ParserRuleContext {
	public constType(): ConstTypeContext {
		return this.getRuleContext(0, ConstTypeContext);
	}
	public IDENTIFIER_WEBIDL(): TerminalNode { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	public constValue(): ConstValueContext {
		return this.getRuleContext(0, ConstValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_const_; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterConst_) {
			listener.enterConst_(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitConst_) {
			listener.exitConst_(this);
		}
	}
}


export class ConstValueContext extends ParserRuleContext {
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	public floatLiteral(): FloatLiteralContext | undefined {
		return this.tryGetRuleContext(0, FloatLiteralContext);
	}
	public INTEGER_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.INTEGER_WEBIDL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_constValue; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterConstValue) {
			listener.enterConstValue(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitConstValue) {
			listener.exitConstValue(this);
		}
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_booleanLiteral; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
}


export class FloatLiteralContext extends ParserRuleContext {
	public FLOAT_WEBIDL(): TerminalNode { return this.getToken(WebIDLParser.FLOAT_WEBIDL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_floatLiteral; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterFloatLiteral) {
			listener.enterFloatLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitFloatLiteral) {
			listener.exitFloatLiteral(this);
		}
	}
}


export class SerializerContext extends ParserRuleContext {
	public serializerRest(): SerializerRestContext {
		return this.getRuleContext(0, SerializerRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_serializer; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterSerializer) {
			listener.enterSerializer(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitSerializer) {
			listener.exitSerializer(this);
		}
	}
}


export class SerializerRestContext extends ParserRuleContext {
	public operationRest(): OperationRestContext | undefined {
		return this.tryGetRuleContext(0, OperationRestContext);
	}
	public serializationPattern(): SerializationPatternContext | undefined {
		return this.tryGetRuleContext(0, SerializationPatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_serializerRest; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterSerializerRest) {
			listener.enterSerializerRest(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitSerializerRest) {
			listener.exitSerializerRest(this);
		}
	}
}


export class SerializationPatternContext extends ParserRuleContext {
	public serializationPatternMap(): SerializationPatternMapContext | undefined {
		return this.tryGetRuleContext(0, SerializationPatternMapContext);
	}
	public serializationPatternList(): SerializationPatternListContext | undefined {
		return this.tryGetRuleContext(0, SerializationPatternListContext);
	}
	public IDENTIFIER_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_serializationPattern; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterSerializationPattern) {
			listener.enterSerializationPattern(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitSerializationPattern) {
			listener.exitSerializationPattern(this);
		}
	}
}


export class SerializationPatternMapContext extends ParserRuleContext {
	public identifiers(): IdentifiersContext | undefined {
		return this.tryGetRuleContext(0, IdentifiersContext);
	}
	public IDENTIFIER_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_serializationPatternMap; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterSerializationPatternMap) {
			listener.enterSerializationPatternMap(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitSerializationPatternMap) {
			listener.exitSerializationPatternMap(this);
		}
	}
}


export class SerializationPatternListContext extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	public identifiers(): IdentifiersContext | undefined {
		return this.tryGetRuleContext(0, IdentifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_serializationPatternList; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterSerializationPatternList) {
			listener.enterSerializationPatternList(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitSerializationPatternList) {
			listener.exitSerializationPatternList(this);
		}
	}
}


export class StringifierContext extends ParserRuleContext {
	public stringifierRest(): StringifierRestContext {
		return this.getRuleContext(0, StringifierRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_stringifier; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterStringifier) {
			listener.enterStringifier(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitStringifier) {
			listener.exitStringifier(this);
		}
	}
}


export class StringifierRestContext extends ParserRuleContext {
	public readOnly(): ReadOnlyContext | undefined {
		return this.tryGetRuleContext(0, ReadOnlyContext);
	}
	public attributeRest(): AttributeRestContext | undefined {
		return this.tryGetRuleContext(0, AttributeRestContext);
	}
	public returnType(): ReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, ReturnTypeContext);
	}
	public operationRest(): OperationRestContext | undefined {
		return this.tryGetRuleContext(0, OperationRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_stringifierRest; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterStringifierRest) {
			listener.enterStringifierRest(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitStringifierRest) {
			listener.exitStringifierRest(this);
		}
	}
}


export class StaticMemberContext extends ParserRuleContext {
	public staticMemberRest(): StaticMemberRestContext {
		return this.getRuleContext(0, StaticMemberRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_staticMember; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterStaticMember) {
			listener.enterStaticMember(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitStaticMember) {
			listener.exitStaticMember(this);
		}
	}
}


export class StaticMemberRestContext extends ParserRuleContext {
	public readOnly(): ReadOnlyContext | undefined {
		return this.tryGetRuleContext(0, ReadOnlyContext);
	}
	public attributeRest(): AttributeRestContext | undefined {
		return this.tryGetRuleContext(0, AttributeRestContext);
	}
	public returnType(): ReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, ReturnTypeContext);
	}
	public operationRest(): OperationRestContext | undefined {
		return this.tryGetRuleContext(0, OperationRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_staticMemberRest; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterStaticMemberRest) {
			listener.enterStaticMemberRest(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitStaticMemberRest) {
			listener.exitStaticMemberRest(this);
		}
	}
}


export class ReadonlyMemberContext extends ParserRuleContext {
	public readonlyMemberRest(): ReadonlyMemberRestContext {
		return this.getRuleContext(0, ReadonlyMemberRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_readonlyMember; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterReadonlyMember) {
			listener.enterReadonlyMember(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitReadonlyMember) {
			listener.exitReadonlyMember(this);
		}
	}
}


export class ReadonlyMemberRestContext extends ParserRuleContext {
	public attributeRest(): AttributeRestContext | undefined {
		return this.tryGetRuleContext(0, AttributeRestContext);
	}
	public readWriteMaplike(): ReadWriteMaplikeContext | undefined {
		return this.tryGetRuleContext(0, ReadWriteMaplikeContext);
	}
	public readWriteSetlike(): ReadWriteSetlikeContext | undefined {
		return this.tryGetRuleContext(0, ReadWriteSetlikeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_readonlyMemberRest; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterReadonlyMemberRest) {
			listener.enterReadonlyMemberRest(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitReadonlyMemberRest) {
			listener.exitReadonlyMemberRest(this);
		}
	}
}


export class ReadWriteAttributeContext extends ParserRuleContext {
	public readOnly(): ReadOnlyContext | undefined {
		return this.tryGetRuleContext(0, ReadOnlyContext);
	}
	public attributeRest(): AttributeRestContext {
		return this.getRuleContext(0, AttributeRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_readWriteAttribute; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterReadWriteAttribute) {
			listener.enterReadWriteAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitReadWriteAttribute) {
			listener.exitReadWriteAttribute(this);
		}
	}
}


export class AttributeRestContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public attributeName(): AttributeNameContext {
		return this.getRuleContext(0, AttributeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_attributeRest; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterAttributeRest) {
			listener.enterAttributeRest(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitAttributeRest) {
			listener.exitAttributeRest(this);
		}
	}
}


export class AttributeNameContext extends ParserRuleContext {
	public attributeNameKeyword(): AttributeNameKeywordContext | undefined {
		return this.tryGetRuleContext(0, AttributeNameKeywordContext);
	}
	public IDENTIFIER_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_attributeName; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterAttributeName) {
			listener.enterAttributeName(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitAttributeName) {
			listener.exitAttributeName(this);
		}
	}
}


export class AttributeNameKeywordContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_attributeNameKeyword; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterAttributeNameKeyword) {
			listener.enterAttributeNameKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitAttributeNameKeyword) {
			listener.exitAttributeNameKeyword(this);
		}
	}
}


export class InheritContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_inherit; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterInherit) {
			listener.enterInherit(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitInherit) {
			listener.exitInherit(this);
		}
	}
}


export class ReadOnlyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_readOnly; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterReadOnly) {
			listener.enterReadOnly(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitReadOnly) {
			listener.exitReadOnly(this);
		}
	}
}


export class OperationContext extends ParserRuleContext {
	public returnType(): ReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, ReturnTypeContext);
	}
	public operationRest(): OperationRestContext | undefined {
		return this.tryGetRuleContext(0, OperationRestContext);
	}
	public specialOperation(): SpecialOperationContext | undefined {
		return this.tryGetRuleContext(0, SpecialOperationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_operation; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterOperation) {
			listener.enterOperation(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitOperation) {
			listener.exitOperation(this);
		}
	}
}


export class SpecialOperationContext extends ParserRuleContext {
	public special(): SpecialContext {
		return this.getRuleContext(0, SpecialContext);
	}
	public specials(): SpecialsContext {
		return this.getRuleContext(0, SpecialsContext);
	}
	public returnType(): ReturnTypeContext {
		return this.getRuleContext(0, ReturnTypeContext);
	}
	public operationRest(): OperationRestContext {
		return this.getRuleContext(0, OperationRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_specialOperation; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterSpecialOperation) {
			listener.enterSpecialOperation(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitSpecialOperation) {
			listener.exitSpecialOperation(this);
		}
	}
}


export class SpecialsContext extends ParserRuleContext {
	public special(): SpecialContext | undefined {
		return this.tryGetRuleContext(0, SpecialContext);
	}
	public specials(): SpecialsContext | undefined {
		return this.tryGetRuleContext(0, SpecialsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_specials; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterSpecials) {
			listener.enterSpecials(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitSpecials) {
			listener.exitSpecials(this);
		}
	}
}


export class SpecialContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_special; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterSpecial) {
			listener.enterSpecial(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitSpecial) {
			listener.exitSpecial(this);
		}
	}
}


export class OperationRestContext extends ParserRuleContext {
	public optionalIdentifier(): OptionalIdentifierContext {
		return this.getRuleContext(0, OptionalIdentifierContext);
	}
	public argumentList(): ArgumentListContext {
		return this.getRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_operationRest; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterOperationRest) {
			listener.enterOperationRest(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitOperationRest) {
			listener.exitOperationRest(this);
		}
	}
}


export class OptionalIdentifierContext extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_optionalIdentifier; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterOptionalIdentifier) {
			listener.enterOptionalIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitOptionalIdentifier) {
			listener.exitOptionalIdentifier(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public argument(): ArgumentContext | undefined {
		return this.tryGetRuleContext(0, ArgumentContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public argument(): ArgumentContext | undefined {
		return this.tryGetRuleContext(0, ArgumentContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_arguments; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public extendedAttributeList(): ExtendedAttributeListContext {
		return this.getRuleContext(0, ExtendedAttributeListContext);
	}
	public optionalOrRequiredArgument(): OptionalOrRequiredArgumentContext {
		return this.getRuleContext(0, OptionalOrRequiredArgumentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_argument; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
}


export class OptionalOrRequiredArgumentContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public argumentName(): ArgumentNameContext {
		return this.getRuleContext(0, ArgumentNameContext);
	}
	public default_(): Default_Context | undefined {
		return this.tryGetRuleContext(0, Default_Context);
	}
	public ellipsis(): EllipsisContext | undefined {
		return this.tryGetRuleContext(0, EllipsisContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_optionalOrRequiredArgument; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterOptionalOrRequiredArgument) {
			listener.enterOptionalOrRequiredArgument(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitOptionalOrRequiredArgument) {
			listener.exitOptionalOrRequiredArgument(this);
		}
	}
}


export class ArgumentNameContext extends ParserRuleContext {
	public argumentNameKeyword(): ArgumentNameKeywordContext | undefined {
		return this.tryGetRuleContext(0, ArgumentNameKeywordContext);
	}
	public IDENTIFIER_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_argumentName; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterArgumentName) {
			listener.enterArgumentName(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitArgumentName) {
			listener.exitArgumentName(this);
		}
	}
}


export class EllipsisContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_ellipsis; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterEllipsis) {
			listener.enterEllipsis(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitEllipsis) {
			listener.exitEllipsis(this);
		}
	}
}


export class IterableContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public optionalType(): OptionalTypeContext {
		return this.getRuleContext(0, OptionalTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_iterable; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterIterable) {
			listener.enterIterable(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitIterable) {
			listener.exitIterable(this);
		}
	}
}


export class OptionalTypeContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_optionalType; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterOptionalType) {
			listener.enterOptionalType(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitOptionalType) {
			listener.exitOptionalType(this);
		}
	}
}


export class ReadWriteMaplikeContext extends ParserRuleContext {
	public maplikeRest(): MaplikeRestContext {
		return this.getRuleContext(0, MaplikeRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_readWriteMaplike; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterReadWriteMaplike) {
			listener.enterReadWriteMaplike(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitReadWriteMaplike) {
			listener.exitReadWriteMaplike(this);
		}
	}
}


export class ReadWriteSetlikeContext extends ParserRuleContext {
	public setlikeRest(): SetlikeRestContext {
		return this.getRuleContext(0, SetlikeRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_readWriteSetlike; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterReadWriteSetlike) {
			listener.enterReadWriteSetlike(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitReadWriteSetlike) {
			listener.exitReadWriteSetlike(this);
		}
	}
}


export class MaplikeRestContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_maplikeRest; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterMaplikeRest) {
			listener.enterMaplikeRest(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitMaplikeRest) {
			listener.exitMaplikeRest(this);
		}
	}
}


export class SetlikeRestContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_setlikeRest; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterSetlikeRest) {
			listener.enterSetlikeRest(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitSetlikeRest) {
			listener.exitSetlikeRest(this);
		}
	}
}


export class ExtendedAttributeListContext extends ParserRuleContext {
	public extendedAttribute(): ExtendedAttributeContext | undefined {
		return this.tryGetRuleContext(0, ExtendedAttributeContext);
	}
	public extendedAttributes(): ExtendedAttributesContext | undefined {
		return this.tryGetRuleContext(0, ExtendedAttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_extendedAttributeList; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterExtendedAttributeList) {
			listener.enterExtendedAttributeList(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitExtendedAttributeList) {
			listener.exitExtendedAttributeList(this);
		}
	}
}


export class ExtendedAttributesContext extends ParserRuleContext {
	public extendedAttribute(): ExtendedAttributeContext | undefined {
		return this.tryGetRuleContext(0, ExtendedAttributeContext);
	}
	public extendedAttributes(): ExtendedAttributesContext | undefined {
		return this.tryGetRuleContext(0, ExtendedAttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_extendedAttributes; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterExtendedAttributes) {
			listener.enterExtendedAttributes(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitExtendedAttributes) {
			listener.exitExtendedAttributes(this);
		}
	}
}


export class ExtendedAttributeContext extends ParserRuleContext {
	public extendedAttributeInner(): ExtendedAttributeInnerContext | undefined {
		return this.tryGetRuleContext(0, ExtendedAttributeInnerContext);
	}
	public extendedAttributeRest(): ExtendedAttributeRestContext {
		return this.getRuleContext(0, ExtendedAttributeRestContext);
	}
	public other(): OtherContext | undefined {
		return this.tryGetRuleContext(0, OtherContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_extendedAttribute; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterExtendedAttribute) {
			listener.enterExtendedAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitExtendedAttribute) {
			listener.exitExtendedAttribute(this);
		}
	}
}


export class ExtendedAttributeRestContext extends ParserRuleContext {
	public extendedAttribute(): ExtendedAttributeContext | undefined {
		return this.tryGetRuleContext(0, ExtendedAttributeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_extendedAttributeRest; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterExtendedAttributeRest) {
			listener.enterExtendedAttributeRest(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitExtendedAttributeRest) {
			listener.exitExtendedAttributeRest(this);
		}
	}
}


export class ExtendedAttributeInnerContext extends ParserRuleContext {
	public extendedAttributeInner(): ExtendedAttributeInnerContext[];
	public extendedAttributeInner(i: number): ExtendedAttributeInnerContext;
	public extendedAttributeInner(i?: number): ExtendedAttributeInnerContext | ExtendedAttributeInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtendedAttributeInnerContext);
		} else {
			return this.getRuleContext(i, ExtendedAttributeInnerContext);
		}
	}
	public otherOrComma(): OtherOrCommaContext | undefined {
		return this.tryGetRuleContext(0, OtherOrCommaContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_extendedAttributeInner; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterExtendedAttributeInner) {
			listener.enterExtendedAttributeInner(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitExtendedAttributeInner) {
			listener.exitExtendedAttributeInner(this);
		}
	}
}


export class OtherContext extends ParserRuleContext {
	public INTEGER_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.INTEGER_WEBIDL, 0); }
	public FLOAT_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.FLOAT_WEBIDL, 0); }
	public IDENTIFIER_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	public STRING_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.STRING_WEBIDL, 0); }
	public OTHER_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.OTHER_WEBIDL, 0); }
	public argumentNameKeyword(): ArgumentNameKeywordContext | undefined {
		return this.tryGetRuleContext(0, ArgumentNameKeywordContext);
	}
	public bufferRelatedType(): BufferRelatedTypeContext | undefined {
		return this.tryGetRuleContext(0, BufferRelatedTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_other; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterOther) {
			listener.enterOther(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitOther) {
			listener.exitOther(this);
		}
	}
}


export class ArgumentNameKeywordContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_argumentNameKeyword; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterArgumentNameKeyword) {
			listener.enterArgumentNameKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitArgumentNameKeyword) {
			listener.exitArgumentNameKeyword(this);
		}
	}
}


export class OtherOrCommaContext extends ParserRuleContext {
	public other(): OtherContext | undefined {
		return this.tryGetRuleContext(0, OtherContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_otherOrComma; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterOtherOrComma) {
			listener.enterOtherOrComma(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitOtherOrComma) {
			listener.exitOtherOrComma(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public singleType(): SingleTypeContext | undefined {
		return this.tryGetRuleContext(0, SingleTypeContext);
	}
	public unionType(): UnionTypeContext | undefined {
		return this.tryGetRuleContext(0, UnionTypeContext);
	}
	public null_(): Null_Context | undefined {
		return this.tryGetRuleContext(0, Null_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_type; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
}


export class SingleTypeContext extends ParserRuleContext {
	public nonAnyType(): NonAnyTypeContext | undefined {
		return this.tryGetRuleContext(0, NonAnyTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_singleType; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterSingleType) {
			listener.enterSingleType(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitSingleType) {
			listener.exitSingleType(this);
		}
	}
}


export class UnionTypeContext extends ParserRuleContext {
	public unionMemberType(): UnionMemberTypeContext[];
	public unionMemberType(i: number): UnionMemberTypeContext;
	public unionMemberType(i?: number): UnionMemberTypeContext | UnionMemberTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnionMemberTypeContext);
		} else {
			return this.getRuleContext(i, UnionMemberTypeContext);
		}
	}
	public unionMemberTypes(): UnionMemberTypesContext {
		return this.getRuleContext(0, UnionMemberTypesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_unionType; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterUnionType) {
			listener.enterUnionType(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitUnionType) {
			listener.exitUnionType(this);
		}
	}
}


export class UnionMemberTypeContext extends ParserRuleContext {
	public nonAnyType(): NonAnyTypeContext | undefined {
		return this.tryGetRuleContext(0, NonAnyTypeContext);
	}
	public unionType(): UnionTypeContext | undefined {
		return this.tryGetRuleContext(0, UnionTypeContext);
	}
	public null_(): Null_Context | undefined {
		return this.tryGetRuleContext(0, Null_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_unionMemberType; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterUnionMemberType) {
			listener.enterUnionMemberType(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitUnionMemberType) {
			listener.exitUnionMemberType(this);
		}
	}
}


export class UnionMemberTypesContext extends ParserRuleContext {
	public unionMemberType(): UnionMemberTypeContext | undefined {
		return this.tryGetRuleContext(0, UnionMemberTypeContext);
	}
	public unionMemberTypes(): UnionMemberTypesContext | undefined {
		return this.tryGetRuleContext(0, UnionMemberTypesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_unionMemberTypes; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterUnionMemberTypes) {
			listener.enterUnionMemberTypes(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitUnionMemberTypes) {
			listener.exitUnionMemberTypes(this);
		}
	}
}


export class NonAnyTypeContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public null_(): Null_Context {
		return this.getRuleContext(0, Null_Context);
	}
	public promiseType(): PromiseTypeContext | undefined {
		return this.tryGetRuleContext(0, PromiseTypeContext);
	}
	public IDENTIFIER_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public bufferRelatedType(): BufferRelatedTypeContext | undefined {
		return this.tryGetRuleContext(0, BufferRelatedTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_nonAnyType; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterNonAnyType) {
			listener.enterNonAnyType(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitNonAnyType) {
			listener.exitNonAnyType(this);
		}
	}
}


export class BufferRelatedTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_bufferRelatedType; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterBufferRelatedType) {
			listener.enterBufferRelatedType(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitBufferRelatedType) {
			listener.exitBufferRelatedType(this);
		}
	}
}


export class ConstTypeContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public null_(): Null_Context {
		return this.getRuleContext(0, Null_Context);
	}
	public IDENTIFIER_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_constType; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterConstType) {
			listener.enterConstType(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitConstType) {
			listener.exitConstType(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public unsignedIntegerType(): UnsignedIntegerTypeContext | undefined {
		return this.tryGetRuleContext(0, UnsignedIntegerTypeContext);
	}
	public unrestrictedFloatType(): UnrestrictedFloatTypeContext | undefined {
		return this.tryGetRuleContext(0, UnrestrictedFloatTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
}


export class UnrestrictedFloatTypeContext extends ParserRuleContext {
	public floatType(): FloatTypeContext {
		return this.getRuleContext(0, FloatTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_unrestrictedFloatType; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterUnrestrictedFloatType) {
			listener.enterUnrestrictedFloatType(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitUnrestrictedFloatType) {
			listener.exitUnrestrictedFloatType(this);
		}
	}
}


export class FloatTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_floatType; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterFloatType) {
			listener.enterFloatType(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitFloatType) {
			listener.exitFloatType(this);
		}
	}
}


export class UnsignedIntegerTypeContext extends ParserRuleContext {
	public integerType(): IntegerTypeContext {
		return this.getRuleContext(0, IntegerTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_unsignedIntegerType; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterUnsignedIntegerType) {
			listener.enterUnsignedIntegerType(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitUnsignedIntegerType) {
			listener.exitUnsignedIntegerType(this);
		}
	}
}


export class IntegerTypeContext extends ParserRuleContext {
	public optionalLong(): OptionalLongContext | undefined {
		return this.tryGetRuleContext(0, OptionalLongContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_integerType; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterIntegerType) {
			listener.enterIntegerType(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitIntegerType) {
			listener.exitIntegerType(this);
		}
	}
}


export class OptionalLongContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_optionalLong; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterOptionalLong) {
			listener.enterOptionalLong(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitOptionalLong) {
			listener.exitOptionalLong(this);
		}
	}
}


export class PromiseTypeContext extends ParserRuleContext {
	public returnType(): ReturnTypeContext {
		return this.getRuleContext(0, ReturnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_promiseType; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterPromiseType) {
			listener.enterPromiseType(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitPromiseType) {
			listener.exitPromiseType(this);
		}
	}
}


export class Null_Context extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_null_; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterNull_) {
			listener.enterNull_(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitNull_) {
			listener.exitNull_(this);
		}
	}
}


export class ReturnTypeContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_returnType; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterReturnType) {
			listener.enterReturnType(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitReturnType) {
			listener.exitReturnType(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	public identifiers(): IdentifiersContext {
		return this.getRuleContext(0, IdentifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
}


export class IdentifiersContext extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode | undefined { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	public identifiers(): IdentifiersContext | undefined {
		return this.tryGetRuleContext(0, IdentifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_identifiers; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterIdentifiers) {
			listener.enterIdentifiers(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitIdentifiers) {
			listener.exitIdentifiers(this);
		}
	}
}


export class ExtendedAttributeNoArgsContext extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_extendedAttributeNoArgs; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterExtendedAttributeNoArgs) {
			listener.enterExtendedAttributeNoArgs(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitExtendedAttributeNoArgs) {
			listener.exitExtendedAttributeNoArgs(this);
		}
	}
}


export class ExtendedAttributeArgListContext extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	public argumentList(): ArgumentListContext {
		return this.getRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_extendedAttributeArgList; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterExtendedAttributeArgList) {
			listener.enterExtendedAttributeArgList(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitExtendedAttributeArgList) {
			listener.exitExtendedAttributeArgList(this);
		}
	}
}


export class ExtendedAttributeIdentContext extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode[];
	public IDENTIFIER_WEBIDL(i: number): TerminalNode;
	public IDENTIFIER_WEBIDL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WebIDLParser.IDENTIFIER_WEBIDL);
		} else {
			return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_extendedAttributeIdent; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterExtendedAttributeIdent) {
			listener.enterExtendedAttributeIdent(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitExtendedAttributeIdent) {
			listener.exitExtendedAttributeIdent(this);
		}
	}
}


export class ExtendedAttributeIdentListContext extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); }
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_extendedAttributeIdentList; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterExtendedAttributeIdentList) {
			listener.enterExtendedAttributeIdentList(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitExtendedAttributeIdentList) {
			listener.exitExtendedAttributeIdentList(this);
		}
	}
}


export class ExtendedAttributeNamedArgListContext extends ParserRuleContext {
	public IDENTIFIER_WEBIDL(): TerminalNode[];
	public IDENTIFIER_WEBIDL(i: number): TerminalNode;
	public IDENTIFIER_WEBIDL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WebIDLParser.IDENTIFIER_WEBIDL);
		} else {
			return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, i);
		}
	}
	public argumentList(): ArgumentListContext {
		return this.getRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WebIDLParser.RULE_extendedAttributeNamedArgList; }
	// @Override
	public enterRule(listener: WebIDLListener): void {
		if (listener.enterExtendedAttributeNamedArgList) {
			listener.enterExtendedAttributeNamedArgList(this);
		}
	}
	// @Override
	public exitRule(listener: WebIDLListener): void {
		if (listener.exitExtendedAttributeNamedArgList) {
			listener.exitExtendedAttributeNamedArgList(this);
		}
	}
}


