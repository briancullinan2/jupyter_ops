// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/objc/one-step-processing/ObjectiveCPreprocessorParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { ObjectiveCPreprocessorParserListener } from "./ObjectiveCPreprocessorParserListener";
import { ObjectiveCPreprocessorParserVisitor } from "./ObjectiveCPreprocessorParserVisitor";


export class ObjectiveCPreprocessorParser extends Parser {
	public static readonly AUTO = 1;
	public static readonly BREAK = 2;
	public static readonly CASE = 3;
	public static readonly CHAR = 4;
	public static readonly CONST = 5;
	public static readonly CONTINUE = 6;
	public static readonly DEFAULT = 7;
	public static readonly DO = 8;
	public static readonly DOUBLE = 9;
	public static readonly ELSE = 10;
	public static readonly ENUM = 11;
	public static readonly EXTERN = 12;
	public static readonly FLOAT = 13;
	public static readonly FOR = 14;
	public static readonly GOTO = 15;
	public static readonly IF = 16;
	public static readonly INLINE = 17;
	public static readonly INT = 18;
	public static readonly LONG = 19;
	public static readonly REGISTER = 20;
	public static readonly RESTRICT = 21;
	public static readonly RETURN = 22;
	public static readonly SHORT = 23;
	public static readonly SIGNED = 24;
	public static readonly SIZEOF = 25;
	public static readonly STATIC = 26;
	public static readonly STRUCT = 27;
	public static readonly SWITCH = 28;
	public static readonly TYPEDEF = 29;
	public static readonly UNION = 30;
	public static readonly UNSIGNED = 31;
	public static readonly VOID = 32;
	public static readonly VOLATILE = 33;
	public static readonly WHILE = 34;
	public static readonly BOOL_ = 35;
	public static readonly COMPLEX = 36;
	public static readonly IMAGINERY = 37;
	public static readonly TRUE = 38;
	public static readonly FALSE = 39;
	public static readonly BOOL = 40;
	public static readonly Class = 41;
	public static readonly BYCOPY = 42;
	public static readonly BYREF = 43;
	public static readonly ID = 44;
	public static readonly IMP = 45;
	public static readonly IN = 46;
	public static readonly INOUT = 47;
	public static readonly NIL = 48;
	public static readonly NO = 49;
	public static readonly NULL = 50;
	public static readonly ONEWAY = 51;
	public static readonly OUT = 52;
	public static readonly PROTOCOL_ = 53;
	public static readonly SEL = 54;
	public static readonly SELF = 55;
	public static readonly SUPER = 56;
	public static readonly YES = 57;
	public static readonly AUTORELEASEPOOL = 58;
	public static readonly CATCH = 59;
	public static readonly CLASS = 60;
	public static readonly DYNAMIC = 61;
	public static readonly ENCODE = 62;
	public static readonly END = 63;
	public static readonly FINALLY = 64;
	public static readonly IMPLEMENTATION = 65;
	public static readonly INTERFACE = 66;
	public static readonly IMPORT = 67;
	public static readonly PACKAGE = 68;
	public static readonly PROTOCOL = 69;
	public static readonly OPTIONAL = 70;
	public static readonly PRIVATE = 71;
	public static readonly PROPERTY = 72;
	public static readonly PROTECTED = 73;
	public static readonly PUBLIC = 74;
	public static readonly REQUIRED = 75;
	public static readonly SELECTOR = 76;
	public static readonly SYNCHRONIZED = 77;
	public static readonly SYNTHESIZE = 78;
	public static readonly THROW = 79;
	public static readonly TRY = 80;
	public static readonly ATOMIC = 81;
	public static readonly NONATOMIC = 82;
	public static readonly RETAIN = 83;
	public static readonly ATTRIBUTE = 84;
	public static readonly AUTORELEASING_QUALIFIER = 85;
	public static readonly BLOCK = 86;
	public static readonly BRIDGE = 87;
	public static readonly BRIDGE_RETAINED = 88;
	public static readonly BRIDGE_TRANSFER = 89;
	public static readonly COVARIANT = 90;
	public static readonly CONTRAVARIANT = 91;
	public static readonly DEPRECATED = 92;
	public static readonly KINDOF = 93;
	public static readonly STRONG_QUALIFIER = 94;
	public static readonly TYPEOF = 95;
	public static readonly UNSAFE_UNRETAINED_QUALIFIER = 96;
	public static readonly UNUSED = 97;
	public static readonly WEAK_QUALIFIER = 98;
	public static readonly NULL_UNSPECIFIED = 99;
	public static readonly NULLABLE = 100;
	public static readonly NONNULL = 101;
	public static readonly NULL_RESETTABLE = 102;
	public static readonly NS_INLINE = 103;
	public static readonly NS_ENUM = 104;
	public static readonly NS_OPTIONS = 105;
	public static readonly ASSIGN = 106;
	public static readonly COPY = 107;
	public static readonly GETTER = 108;
	public static readonly SETTER = 109;
	public static readonly STRONG = 110;
	public static readonly READONLY = 111;
	public static readonly READWRITE = 112;
	public static readonly WEAK = 113;
	public static readonly UNSAFE_UNRETAINED = 114;
	public static readonly IB_OUTLET = 115;
	public static readonly IB_OUTLET_COLLECTION = 116;
	public static readonly IB_INSPECTABLE = 117;
	public static readonly IB_DESIGNABLE = 118;
	public static readonly NS_ASSUME_NONNULL_BEGIN = 119;
	public static readonly NS_ASSUME_NONNULL_END = 120;
	public static readonly EXTERN_SUFFIX = 121;
	public static readonly IOS_SUFFIX = 122;
	public static readonly MAC_SUFFIX = 123;
	public static readonly TVOS_PROHIBITED = 124;
	public static readonly IDENTIFIER = 125;
	public static readonly LP = 126;
	public static readonly RP = 127;
	public static readonly LBRACE = 128;
	public static readonly RBRACE = 129;
	public static readonly LBRACK = 130;
	public static readonly RBRACK = 131;
	public static readonly SEMI = 132;
	public static readonly COMMA = 133;
	public static readonly DOT = 134;
	public static readonly STRUCTACCESS = 135;
	public static readonly AT = 136;
	public static readonly ASSIGNMENT = 137;
	public static readonly GT = 138;
	public static readonly LT = 139;
	public static readonly BANG = 140;
	public static readonly TILDE = 141;
	public static readonly QUESTION = 142;
	public static readonly COLON = 143;
	public static readonly EQUAL = 144;
	public static readonly LE = 145;
	public static readonly GE = 146;
	public static readonly NOTEQUAL = 147;
	public static readonly AND = 148;
	public static readonly OR = 149;
	public static readonly INC = 150;
	public static readonly DEC = 151;
	public static readonly ADD = 152;
	public static readonly SUB = 153;
	public static readonly MUL = 154;
	public static readonly DIV = 155;
	public static readonly BITAND = 156;
	public static readonly BITOR = 157;
	public static readonly BITXOR = 158;
	public static readonly MOD = 159;
	public static readonly ADD_ASSIGN = 160;
	public static readonly SUB_ASSIGN = 161;
	public static readonly MUL_ASSIGN = 162;
	public static readonly DIV_ASSIGN = 163;
	public static readonly AND_ASSIGN = 164;
	public static readonly OR_ASSIGN = 165;
	public static readonly XOR_ASSIGN = 166;
	public static readonly MOD_ASSIGN = 167;
	public static readonly LSHIFT_ASSIGN = 168;
	public static readonly RSHIFT_ASSIGN = 169;
	public static readonly ELIPSIS = 170;
	public static readonly CHARACTER_LITERAL = 171;
	public static readonly STRING_START = 172;
	public static readonly HEX_LITERAL = 173;
	public static readonly OCTAL_LITERAL = 174;
	public static readonly BINARY_LITERAL = 175;
	public static readonly DECIMAL_LITERAL = 176;
	public static readonly FLOATING_POINT_LITERAL = 177;
	public static readonly WS = 178;
	public static readonly MULTI_COMMENT = 179;
	public static readonly SINGLE_COMMENT = 180;
	public static readonly BACKSLASH = 181;
	public static readonly SHARP = 182;
	public static readonly STRING_NEWLINE = 183;
	public static readonly STRING_END = 184;
	public static readonly STRING_VALUE = 185;
	public static readonly DIRECTIVE_IMPORT = 186;
	public static readonly DIRECTIVE_INCLUDE = 187;
	public static readonly DIRECTIVE_PRAGMA = 188;
	public static readonly DIRECTIVE_DEFINE = 189;
	public static readonly DIRECTIVE_DEFINED = 190;
	public static readonly DIRECTIVE_IF = 191;
	public static readonly DIRECTIVE_ELIF = 192;
	public static readonly DIRECTIVE_ELSE = 193;
	public static readonly DIRECTIVE_UNDEF = 194;
	public static readonly DIRECTIVE_IFDEF = 195;
	public static readonly DIRECTIVE_IFNDEF = 196;
	public static readonly DIRECTIVE_ENDIF = 197;
	public static readonly DIRECTIVE_TRUE = 198;
	public static readonly DIRECTIVE_FALSE = 199;
	public static readonly DIRECTIVE_ERROR = 200;
	public static readonly DIRECTIVE_WARNING = 201;
	public static readonly DIRECTIVE_BANG = 202;
	public static readonly DIRECTIVE_LP = 203;
	public static readonly DIRECTIVE_RP = 204;
	public static readonly DIRECTIVE_EQUAL = 205;
	public static readonly DIRECTIVE_NOTEQUAL = 206;
	public static readonly DIRECTIVE_AND = 207;
	public static readonly DIRECTIVE_OR = 208;
	public static readonly DIRECTIVE_LT = 209;
	public static readonly DIRECTIVE_GT = 210;
	public static readonly DIRECTIVE_LE = 211;
	public static readonly DIRECTIVE_GE = 212;
	public static readonly DIRECTIVE_STRING = 213;
	public static readonly DIRECTIVE_ID = 214;
	public static readonly DIRECTIVE_DECIMAL_LITERAL = 215;
	public static readonly DIRECTIVE_FLOAT = 216;
	public static readonly DIRECTIVE_NEWLINE = 217;
	public static readonly DIRECTIVE_MULTI_COMMENT = 218;
	public static readonly DIRECTIVE_SINGLE_COMMENT = 219;
	public static readonly DIRECTIVE_BACKSLASH_NEWLINE = 220;
	public static readonly DIRECTIVE_TEXT_NEWLINE = 221;
	public static readonly DIRECTIVE_TEXT = 222;
	public static readonly RULE_directive = 0;
	public static readonly RULE_directiveText = 1;
	public static readonly RULE_preprocessorExpression = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"directive", "directiveText", "preprocessorExpression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'auto'", "'break'", "'case'", "'char'", "'const'", "'continue'", 
		"'default'", "'do'", "'double'", undefined, "'enum'", "'extern'", "'float'", 
		"'for'", "'goto'", undefined, "'inline'", "'int'", "'long'", "'register'", 
		"'restrict'", "'return'", "'short'", "'signed'", "'sizeof'", "'static'", 
		"'struct'", "'switch'", "'typedef'", "'union'", "'unsigned'", "'void'", 
		"'volatile'", "'while'", "'_Bool'", "'_Complex'", "'_Imaginery'", "'true'", 
		"'false'", "'BOOL'", "'Class'", "'bycopy'", "'byref'", "'id'", "'IMP'", 
		"'in'", "'inout'", "'nil'", "'NO'", "'NULL'", "'oneway'", "'out'", "'Protocol'", 
		"'SEL'", "'self'", "'super'", "'YES'", "'@autoreleasepool'", "'@catch'", 
		"'@class'", "'@dynamic'", "'@encode'", "'@end'", "'@finally'", "'@implementation'", 
		"'@interface'", "'@import'", "'@package'", "'@protocol'", "'@optional'", 
		"'@private'", "'@property'", "'@protected'", "'@public'", "'@required'", 
		"'@selector'", "'@synchronized'", "'@synthesize'", "'@throw'", "'@try'", 
		"'atomic'", "'nonatomic'", "'retain'", "'__attribute__'", "'__autoreleasing'", 
		"'__block'", "'__bridge'", "'__bridge_retained'", "'__bridge_transfer'", 
		"'__covariant'", "'__contravariant'", "'__deprecated'", "'__kindof'", 
		"'__strong'", undefined, "'__unsafe_unretained'", "'__unused'", "'__weak'", 
		undefined, undefined, undefined, "'null_resettable'", "'NS_INLINE'", "'NS_ENUM'", 
		"'NS_OPTIONS'", "'assign'", "'copy'", "'getter'", "'setter'", "'strong'", 
		"'readonly'", "'readwrite'", "'weak'", "'unsafe_unretained'", "'IBOutlet'", 
		"'IBOutletCollection'", "'IBInspectable'", "'IB_DESIGNABLE'", undefined, 
		undefined, undefined, undefined, undefined, "'__TVOS_PROHIBITED'", undefined, 
		undefined, undefined, "'{'", "'}'", "'['", "']'", "';'", "','", "'.'", 
		"'->'", "'@'", "'='", undefined, undefined, undefined, "'~'", "'?'", "':'", 
		undefined, undefined, undefined, undefined, undefined, undefined, "'++'", 
		"'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", "'%'", "'+='", 
		"'-='", "'*='", "'/='", "'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='", 
		"'...'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'\\'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'defined'", 
		undefined, "'elif'", undefined, "'undef'", "'ifdef'", "'ifndef'", "'endif'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "AUTO", "BREAK", "CASE", "CHAR", "CONST", "CONTINUE", "DEFAULT", 
		"DO", "DOUBLE", "ELSE", "ENUM", "EXTERN", "FLOAT", "FOR", "GOTO", "IF", 
		"INLINE", "INT", "LONG", "REGISTER", "RESTRICT", "RETURN", "SHORT", "SIGNED", 
		"SIZEOF", "STATIC", "STRUCT", "SWITCH", "TYPEDEF", "UNION", "UNSIGNED", 
		"VOID", "VOLATILE", "WHILE", "BOOL_", "COMPLEX", "IMAGINERY", "TRUE", 
		"FALSE", "BOOL", "Class", "BYCOPY", "BYREF", "ID", "IMP", "IN", "INOUT", 
		"NIL", "NO", "NULL", "ONEWAY", "OUT", "PROTOCOL_", "SEL", "SELF", "SUPER", 
		"YES", "AUTORELEASEPOOL", "CATCH", "CLASS", "DYNAMIC", "ENCODE", "END", 
		"FINALLY", "IMPLEMENTATION", "INTERFACE", "IMPORT", "PACKAGE", "PROTOCOL", 
		"OPTIONAL", "PRIVATE", "PROPERTY", "PROTECTED", "PUBLIC", "REQUIRED", 
		"SELECTOR", "SYNCHRONIZED", "SYNTHESIZE", "THROW", "TRY", "ATOMIC", "NONATOMIC", 
		"RETAIN", "ATTRIBUTE", "AUTORELEASING_QUALIFIER", "BLOCK", "BRIDGE", "BRIDGE_RETAINED", 
		"BRIDGE_TRANSFER", "COVARIANT", "CONTRAVARIANT", "DEPRECATED", "KINDOF", 
		"STRONG_QUALIFIER", "TYPEOF", "UNSAFE_UNRETAINED_QUALIFIER", "UNUSED", 
		"WEAK_QUALIFIER", "NULL_UNSPECIFIED", "NULLABLE", "NONNULL", "NULL_RESETTABLE", 
		"NS_INLINE", "NS_ENUM", "NS_OPTIONS", "ASSIGN", "COPY", "GETTER", "SETTER", 
		"STRONG", "READONLY", "READWRITE", "WEAK", "UNSAFE_UNRETAINED", "IB_OUTLET", 
		"IB_OUTLET_COLLECTION", "IB_INSPECTABLE", "IB_DESIGNABLE", "NS_ASSUME_NONNULL_BEGIN", 
		"NS_ASSUME_NONNULL_END", "EXTERN_SUFFIX", "IOS_SUFFIX", "MAC_SUFFIX", 
		"TVOS_PROHIBITED", "IDENTIFIER", "LP", "RP", "LBRACE", "RBRACE", "LBRACK", 
		"RBRACK", "SEMI", "COMMA", "DOT", "STRUCTACCESS", "AT", "ASSIGNMENT", 
		"GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL", "LE", "GE", 
		"NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL", "DIV", "BITAND", 
		"BITOR", "BITXOR", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", 
		"AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", 
		"RSHIFT_ASSIGN", "ELIPSIS", "CHARACTER_LITERAL", "STRING_START", "HEX_LITERAL", 
		"OCTAL_LITERAL", "BINARY_LITERAL", "DECIMAL_LITERAL", "FLOATING_POINT_LITERAL", 
		"WS", "MULTI_COMMENT", "SINGLE_COMMENT", "BACKSLASH", "SHARP", "STRING_NEWLINE", 
		"STRING_END", "STRING_VALUE", "DIRECTIVE_IMPORT", "DIRECTIVE_INCLUDE", 
		"DIRECTIVE_PRAGMA", "DIRECTIVE_DEFINE", "DIRECTIVE_DEFINED", "DIRECTIVE_IF", 
		"DIRECTIVE_ELIF", "DIRECTIVE_ELSE", "DIRECTIVE_UNDEF", "DIRECTIVE_IFDEF", 
		"DIRECTIVE_IFNDEF", "DIRECTIVE_ENDIF", "DIRECTIVE_TRUE", "DIRECTIVE_FALSE", 
		"DIRECTIVE_ERROR", "DIRECTIVE_WARNING", "DIRECTIVE_BANG", "DIRECTIVE_LP", 
		"DIRECTIVE_RP", "DIRECTIVE_EQUAL", "DIRECTIVE_NOTEQUAL", "DIRECTIVE_AND", 
		"DIRECTIVE_OR", "DIRECTIVE_LT", "DIRECTIVE_GT", "DIRECTIVE_LE", "DIRECTIVE_GE", 
		"DIRECTIVE_STRING", "DIRECTIVE_ID", "DIRECTIVE_DECIMAL_LITERAL", "DIRECTIVE_FLOAT", 
		"DIRECTIVE_NEWLINE", "DIRECTIVE_MULTI_COMMENT", "DIRECTIVE_SINGLE_COMMENT", 
		"DIRECTIVE_BACKSLASH_NEWLINE", "DIRECTIVE_TEXT_NEWLINE", "DIRECTIVE_TEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ObjectiveCPreprocessorParser._LITERAL_NAMES, ObjectiveCPreprocessorParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ObjectiveCPreprocessorParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ObjectiveCPreprocessorParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return ObjectiveCPreprocessorParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ObjectiveCPreprocessorParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ObjectiveCPreprocessorParser._ATN, this);
	}
	// @RuleVersion(0)
	public directive(): DirectiveContext {
		let _localctx: DirectiveContext = new DirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ObjectiveCPreprocessorParser.RULE_directive);
		let _la: number;
		try {
			this.state = 43;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				_localctx = new PreprocessorImportContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 6;
				this.match(ObjectiveCPreprocessorParser.SHARP);
				this.state = 7;
				_la = this._input.LA(1);
				if (!(_la === ObjectiveCPreprocessorParser.DIRECTIVE_IMPORT || _la === ObjectiveCPreprocessorParser.DIRECTIVE_INCLUDE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 8;
				this.directiveText();
				}
				break;

			case 2:
				_localctx = new PreprocessorConditionalContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 9;
				this.match(ObjectiveCPreprocessorParser.SHARP);
				this.state = 10;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_IF);
				this.state = 11;
				this.preprocessorExpression(0);
				}
				break;

			case 3:
				_localctx = new PreprocessorConditionalContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 12;
				this.match(ObjectiveCPreprocessorParser.SHARP);
				this.state = 13;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ELIF);
				this.state = 14;
				this.preprocessorExpression(0);
				}
				break;

			case 4:
				_localctx = new PreprocessorConditionalContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 15;
				this.match(ObjectiveCPreprocessorParser.SHARP);
				this.state = 16;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ELSE);
				}
				break;

			case 5:
				_localctx = new PreprocessorConditionalContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 17;
				this.match(ObjectiveCPreprocessorParser.SHARP);
				this.state = 18;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ENDIF);
				}
				break;

			case 6:
				_localctx = new PreprocessorDefContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 19;
				this.match(ObjectiveCPreprocessorParser.SHARP);
				this.state = 20;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_IFDEF);
				this.state = 21;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
				}
				break;

			case 7:
				_localctx = new PreprocessorDefContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 22;
				this.match(ObjectiveCPreprocessorParser.SHARP);
				this.state = 23;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_IFNDEF);
				this.state = 24;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
				}
				break;

			case 8:
				_localctx = new PreprocessorDefContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 25;
				this.match(ObjectiveCPreprocessorParser.SHARP);
				this.state = 26;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_UNDEF);
				this.state = 27;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
				}
				break;

			case 9:
				_localctx = new PreprocessorPragmaContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 28;
				this.match(ObjectiveCPreprocessorParser.SHARP);
				this.state = 29;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_PRAGMA);
				this.state = 30;
				this.directiveText();
				}
				break;

			case 10:
				_localctx = new PreprocessorErrorContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 31;
				this.match(ObjectiveCPreprocessorParser.SHARP);
				this.state = 32;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ERROR);
				this.state = 33;
				this.directiveText();
				}
				break;

			case 11:
				_localctx = new PreprocessorWarningContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 34;
				this.match(ObjectiveCPreprocessorParser.SHARP);
				this.state = 35;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_WARNING);
				this.state = 36;
				this.directiveText();
				}
				break;

			case 12:
				_localctx = new PreprocessorDefineContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 37;
				this.match(ObjectiveCPreprocessorParser.SHARP);
				this.state = 38;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_DEFINE);
				this.state = 39;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ObjectiveCPreprocessorParser.DIRECTIVE_TEXT_NEWLINE || _la === ObjectiveCPreprocessorParser.DIRECTIVE_TEXT) {
					{
					this.state = 40;
					this.directiveText();
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
	public directiveText(): DirectiveTextContext {
		let _localctx: DirectiveTextContext = new DirectiveTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ObjectiveCPreprocessorParser.RULE_directiveText);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 45;
				_la = this._input.LA(1);
				if (!(_la === ObjectiveCPreprocessorParser.DIRECTIVE_TEXT_NEWLINE || _la === ObjectiveCPreprocessorParser.DIRECTIVE_TEXT)) {
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
				this.state = 48;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ObjectiveCPreprocessorParser.DIRECTIVE_TEXT_NEWLINE || _la === ObjectiveCPreprocessorParser.DIRECTIVE_TEXT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public preprocessorExpression(): PreprocessorExpressionContext;
	public preprocessorExpression(_p: number): PreprocessorExpressionContext;
	// @RuleVersion(0)
	public preprocessorExpression(_p?: number): PreprocessorExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PreprocessorExpressionContext = new PreprocessorExpressionContext(this._ctx, _parentState);
		let _prevctx: PreprocessorExpressionContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, ObjectiveCPreprocessorParser.RULE_preprocessorExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ObjectiveCPreprocessorParser.DIRECTIVE_TRUE:
				{
				_localctx = new PreprocessorConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 51;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_TRUE);
				}
				break;
			case ObjectiveCPreprocessorParser.DIRECTIVE_FALSE:
				{
				_localctx = new PreprocessorConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 52;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_FALSE);
				}
				break;
			case ObjectiveCPreprocessorParser.DIRECTIVE_DECIMAL_LITERAL:
				{
				_localctx = new PreprocessorConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 53;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_DECIMAL_LITERAL);
				}
				break;
			case ObjectiveCPreprocessorParser.DIRECTIVE_STRING:
				{
				_localctx = new PreprocessorConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 54;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_STRING);
				}
				break;
			case ObjectiveCPreprocessorParser.DIRECTIVE_ID:
				{
				_localctx = new PreprocessorConditionalSymbolContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 55;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
				this.state = 60;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 56;
					this.match(ObjectiveCPreprocessorParser.DIRECTIVE_LP);
					this.state = 57;
					this.preprocessorExpression(0);
					this.state = 58;
					this.match(ObjectiveCPreprocessorParser.DIRECTIVE_RP);
					}
					break;
				}
				}
				break;
			case ObjectiveCPreprocessorParser.DIRECTIVE_LP:
				{
				_localctx = new PreprocessorParenthesisContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 62;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_LP);
				this.state = 63;
				this.preprocessorExpression(0);
				this.state = 64;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_RP);
				}
				break;
			case ObjectiveCPreprocessorParser.DIRECTIVE_BANG:
				{
				_localctx = new PreprocessorNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 66;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_BANG);
				this.state = 67;
				this.preprocessorExpression(6);
				}
				break;
			case ObjectiveCPreprocessorParser.DIRECTIVE_DEFINED:
				{
				_localctx = new PreprocessorDefinedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 68;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_DEFINED);
				this.state = 73;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ObjectiveCPreprocessorParser.DIRECTIVE_ID:
					{
					this.state = 69;
					this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
					}
					break;
				case ObjectiveCPreprocessorParser.DIRECTIVE_LP:
					{
					this.state = 70;
					this.match(ObjectiveCPreprocessorParser.DIRECTIVE_LP);
					this.state = 71;
					this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
					this.state = 72;
					this.match(ObjectiveCPreprocessorParser.DIRECTIVE_RP);
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
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 91;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 89;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						_localctx = new PreprocessorBinaryContext(new PreprocessorExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessorExpression);
						this.state = 77;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 78;
						(_localctx as PreprocessorBinaryContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ObjectiveCPreprocessorParser.DIRECTIVE_EQUAL || _la === ObjectiveCPreprocessorParser.DIRECTIVE_NOTEQUAL)) {
							(_localctx as PreprocessorBinaryContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 79;
						this.preprocessorExpression(6);
						}
						break;

					case 2:
						{
						_localctx = new PreprocessorBinaryContext(new PreprocessorExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessorExpression);
						this.state = 80;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 81;
						(_localctx as PreprocessorBinaryContext)._op = this.match(ObjectiveCPreprocessorParser.DIRECTIVE_AND);
						this.state = 82;
						this.preprocessorExpression(5);
						}
						break;

					case 3:
						{
						_localctx = new PreprocessorBinaryContext(new PreprocessorExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessorExpression);
						this.state = 83;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 84;
						(_localctx as PreprocessorBinaryContext)._op = this.match(ObjectiveCPreprocessorParser.DIRECTIVE_OR);
						this.state = 85;
						this.preprocessorExpression(4);
						}
						break;

					case 4:
						{
						_localctx = new PreprocessorBinaryContext(new PreprocessorExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessorExpression);
						this.state = 86;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 87;
						(_localctx as PreprocessorBinaryContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & ((1 << (ObjectiveCPreprocessorParser.DIRECTIVE_LT - 209)) | (1 << (ObjectiveCPreprocessorParser.DIRECTIVE_GT - 209)) | (1 << (ObjectiveCPreprocessorParser.DIRECTIVE_LE - 209)) | (1 << (ObjectiveCPreprocessorParser.DIRECTIVE_GE - 209)))) !== 0))) {
							(_localctx as PreprocessorBinaryContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 88;
						this.preprocessorExpression(3);
						}
						break;
					}
					}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.preprocessorExpression_sempred(_localctx as PreprocessorExpressionContext, predIndex);
		}
		return true;
	}
	private preprocessorExpression_sempred(_localctx: PreprocessorExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 4);

		case 2:
			return this.precpred(this._ctx, 3);

		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xE0a\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x05\x02,\n\x02\x05\x02.\n\x02\x03\x03\x06" +
		"\x031\n\x03\r\x03\x0E\x032\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04?\n\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x04L\n\x04\x05\x04N\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\\\n\x04\f" +
		"\x04\x0E\x04_\v\x04\x03\x04\x02\x02\x03\x06\x05\x02\x02\x04\x02\x06\x02" +
		"\x02\x06\x03\x02\xBC\xBD\x03\x02\xDF\xE0\x03\x02\xCF\xD0\x03\x02\xD3\xD6" +
		"\x02w\x02-\x03\x02\x02\x02\x040\x03\x02\x02\x02\x06M\x03\x02\x02\x02\b" +
		"\t\x07\xB8\x02\x02\t\n\t\x02\x02\x02\n.\x05\x04\x03\x02\v\f\x07\xB8\x02" +
		"\x02\f\r\x07\xC1\x02\x02\r.\x05\x06\x04\x02\x0E\x0F\x07\xB8\x02\x02\x0F" +
		"\x10\x07\xC2\x02\x02\x10.\x05\x06\x04\x02\x11\x12\x07\xB8\x02\x02\x12" +
		".\x07\xC3\x02\x02\x13\x14\x07\xB8\x02\x02\x14.\x07\xC7\x02\x02\x15\x16" +
		"\x07\xB8\x02\x02\x16\x17\x07\xC5\x02\x02\x17.\x07\xD8\x02\x02\x18\x19" +
		"\x07\xB8\x02\x02\x19\x1A\x07\xC6\x02\x02\x1A.\x07\xD8\x02\x02\x1B\x1C" +
		"\x07\xB8\x02\x02\x1C\x1D\x07\xC4\x02\x02\x1D.\x07\xD8\x02\x02\x1E\x1F" +
		"\x07\xB8\x02\x02\x1F \x07\xBE\x02\x02 .\x05\x04\x03\x02!\"\x07\xB8\x02" +
		"\x02\"#\x07\xCA\x02\x02#.\x05\x04\x03\x02$%\x07\xB8\x02\x02%&\x07\xCB" +
		"\x02\x02&.\x05\x04\x03\x02\'(\x07\xB8\x02\x02()\x07\xBF\x02\x02)+\x07" +
		"\xD8\x02\x02*,\x05\x04\x03\x02+*\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x03" +
		"\x02\x02\x02-\b\x03\x02\x02\x02-\v\x03\x02\x02\x02-\x0E\x03\x02\x02\x02" +
		"-\x11\x03\x02\x02\x02-\x13\x03\x02\x02\x02-\x15\x03\x02\x02\x02-\x18\x03" +
		"\x02\x02\x02-\x1B\x03\x02\x02\x02-\x1E\x03\x02\x02\x02-!\x03\x02\x02\x02" +
		"-$\x03\x02\x02\x02-\'\x03\x02\x02\x02.\x03\x03\x02\x02\x02/1\t\x03\x02" +
		"\x020/\x03\x02\x02\x0212\x03\x02\x02\x0220\x03\x02\x02\x0223\x03\x02\x02" +
		"\x023\x05\x03\x02\x02\x0245\b\x04\x01\x025N\x07\xC8\x02\x026N\x07\xC9" +
		"\x02\x027N\x07\xD9\x02\x028N\x07\xD7\x02\x029>\x07\xD8\x02\x02:;\x07\xCD" +
		"\x02\x02;<\x05\x06\x04\x02<=\x07\xCE\x02\x02=?\x03\x02\x02\x02>:\x03\x02" +
		"\x02\x02>?\x03\x02\x02\x02?N\x03\x02\x02\x02@A\x07\xCD\x02\x02AB\x05\x06" +
		"\x04\x02BC\x07\xCE\x02\x02CN\x03\x02\x02\x02DE\x07\xCC\x02\x02EN\x05\x06" +
		"\x04\bFK\x07\xC0\x02\x02GL\x07\xD8\x02\x02HI\x07\xCD\x02\x02IJ\x07\xD8" +
		"\x02\x02JL\x07\xCE\x02\x02KG\x03\x02\x02\x02KH\x03\x02\x02\x02LN\x03\x02" +
		"\x02\x02M4\x03\x02\x02\x02M6\x03\x02\x02\x02M7\x03\x02\x02\x02M8\x03\x02" +
		"\x02\x02M9\x03\x02\x02\x02M@\x03\x02\x02\x02MD\x03\x02\x02\x02MF\x03\x02" +
		"\x02\x02N]\x03\x02\x02\x02OP\f\x07\x02\x02PQ\t\x04\x02\x02Q\\\x05\x06" +
		"\x04\bRS\f\x06\x02\x02ST\x07\xD1\x02\x02T\\\x05\x06\x04\x07UV\f\x05\x02" +
		"\x02VW\x07\xD2\x02\x02W\\\x05\x06\x04\x06XY\f\x04\x02\x02YZ\t\x05\x02" +
		"\x02Z\\\x05\x06\x04\x05[O\x03\x02\x02\x02[R\x03\x02\x02\x02[U\x03\x02" +
		"\x02\x02[X\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03" +
		"\x02\x02\x02^\x07\x03\x02\x02\x02_]\x03\x02\x02\x02\n+-2>KM[]";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ObjectiveCPreprocessorParser.__ATN) {
			ObjectiveCPreprocessorParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ObjectiveCPreprocessorParser._serializedATN));
		}

		return ObjectiveCPreprocessorParser.__ATN;
	}

}

export class DirectiveContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ObjectiveCPreprocessorParser.RULE_directive; }
	public copyFrom(ctx: DirectiveContext): void {
		super.copyFrom(ctx);
	}
}
export class PreprocessorImportContext extends DirectiveContext {
	public SHARP(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0); }
	public directiveText(): DirectiveTextContext {
		return this.getRuleContext(0, DirectiveTextContext);
	}
	public DIRECTIVE_IMPORT(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_IMPORT, 0); }
	public DIRECTIVE_INCLUDE(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_INCLUDE, 0); }
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorImport) {
			listener.enterPreprocessorImport(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorImport) {
			listener.exitPreprocessorImport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorImport) {
			return visitor.visitPreprocessorImport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorConditionalContext extends DirectiveContext {
	public SHARP(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0); }
	public DIRECTIVE_IF(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_IF, 0); }
	public preprocessorExpression(): PreprocessorExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreprocessorExpressionContext);
	}
	public DIRECTIVE_ELIF(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_ELIF, 0); }
	public DIRECTIVE_ELSE(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_ELSE, 0); }
	public DIRECTIVE_ENDIF(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_ENDIF, 0); }
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorConditional) {
			listener.enterPreprocessorConditional(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorConditional) {
			listener.exitPreprocessorConditional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorConditional) {
			return visitor.visitPreprocessorConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorDefContext extends DirectiveContext {
	public SHARP(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0); }
	public DIRECTIVE_IFDEF(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_IFDEF, 0); }
	public DIRECTIVE_ID(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_ID, 0); }
	public DIRECTIVE_IFNDEF(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_IFNDEF, 0); }
	public DIRECTIVE_UNDEF(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_UNDEF, 0); }
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorDef) {
			listener.enterPreprocessorDef(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorDef) {
			listener.exitPreprocessorDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorDef) {
			return visitor.visitPreprocessorDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorPragmaContext extends DirectiveContext {
	public SHARP(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0); }
	public DIRECTIVE_PRAGMA(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_PRAGMA, 0); }
	public directiveText(): DirectiveTextContext {
		return this.getRuleContext(0, DirectiveTextContext);
	}
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorPragma) {
			listener.enterPreprocessorPragma(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorPragma) {
			listener.exitPreprocessorPragma(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorPragma) {
			return visitor.visitPreprocessorPragma(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorErrorContext extends DirectiveContext {
	public SHARP(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0); }
	public DIRECTIVE_ERROR(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_ERROR, 0); }
	public directiveText(): DirectiveTextContext {
		return this.getRuleContext(0, DirectiveTextContext);
	}
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorError) {
			listener.enterPreprocessorError(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorError) {
			listener.exitPreprocessorError(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorError) {
			return visitor.visitPreprocessorError(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorWarningContext extends DirectiveContext {
	public SHARP(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0); }
	public DIRECTIVE_WARNING(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_WARNING, 0); }
	public directiveText(): DirectiveTextContext {
		return this.getRuleContext(0, DirectiveTextContext);
	}
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorWarning) {
			listener.enterPreprocessorWarning(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorWarning) {
			listener.exitPreprocessorWarning(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorWarning) {
			return visitor.visitPreprocessorWarning(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorDefineContext extends DirectiveContext {
	public SHARP(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0); }
	public DIRECTIVE_DEFINE(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_DEFINE, 0); }
	public DIRECTIVE_ID(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_ID, 0); }
	public directiveText(): DirectiveTextContext | undefined {
		return this.tryGetRuleContext(0, DirectiveTextContext);
	}
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorDefine) {
			listener.enterPreprocessorDefine(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorDefine) {
			listener.exitPreprocessorDefine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorDefine) {
			return visitor.visitPreprocessorDefine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectiveTextContext extends ParserRuleContext {
	public DIRECTIVE_TEXT(): TerminalNode[];
	public DIRECTIVE_TEXT(i: number): TerminalNode;
	public DIRECTIVE_TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectiveCPreprocessorParser.DIRECTIVE_TEXT);
		} else {
			return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_TEXT, i);
		}
	}
	public DIRECTIVE_TEXT_NEWLINE(): TerminalNode[];
	public DIRECTIVE_TEXT_NEWLINE(i: number): TerminalNode;
	public DIRECTIVE_TEXT_NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectiveCPreprocessorParser.DIRECTIVE_TEXT_NEWLINE);
		} else {
			return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_TEXT_NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ObjectiveCPreprocessorParser.RULE_directiveText; }
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterDirectiveText) {
			listener.enterDirectiveText(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitDirectiveText) {
			listener.exitDirectiveText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitDirectiveText) {
			return visitor.visitDirectiveText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreprocessorExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ObjectiveCPreprocessorParser.RULE_preprocessorExpression; }
	public copyFrom(ctx: PreprocessorExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PreprocessorConstantContext extends PreprocessorExpressionContext {
	public DIRECTIVE_TRUE(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_TRUE, 0); }
	public DIRECTIVE_FALSE(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_FALSE, 0); }
	public DIRECTIVE_DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_DECIMAL_LITERAL, 0); }
	public DIRECTIVE_STRING(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_STRING, 0); }
	constructor(ctx: PreprocessorExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorConstant) {
			listener.enterPreprocessorConstant(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorConstant) {
			listener.exitPreprocessorConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorConstant) {
			return visitor.visitPreprocessorConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorConditionalSymbolContext extends PreprocessorExpressionContext {
	public DIRECTIVE_ID(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_ID, 0); }
	public DIRECTIVE_LP(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_LP, 0); }
	public preprocessorExpression(): PreprocessorExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreprocessorExpressionContext);
	}
	public DIRECTIVE_RP(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_RP, 0); }
	constructor(ctx: PreprocessorExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorConditionalSymbol) {
			listener.enterPreprocessorConditionalSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorConditionalSymbol) {
			listener.exitPreprocessorConditionalSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorConditionalSymbol) {
			return visitor.visitPreprocessorConditionalSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorParenthesisContext extends PreprocessorExpressionContext {
	public DIRECTIVE_LP(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_LP, 0); }
	public preprocessorExpression(): PreprocessorExpressionContext {
		return this.getRuleContext(0, PreprocessorExpressionContext);
	}
	public DIRECTIVE_RP(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_RP, 0); }
	constructor(ctx: PreprocessorExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorParenthesis) {
			listener.enterPreprocessorParenthesis(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorParenthesis) {
			listener.exitPreprocessorParenthesis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorParenthesis) {
			return visitor.visitPreprocessorParenthesis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorNotContext extends PreprocessorExpressionContext {
	public DIRECTIVE_BANG(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_BANG, 0); }
	public preprocessorExpression(): PreprocessorExpressionContext {
		return this.getRuleContext(0, PreprocessorExpressionContext);
	}
	constructor(ctx: PreprocessorExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorNot) {
			listener.enterPreprocessorNot(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorNot) {
			listener.exitPreprocessorNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorNot) {
			return visitor.visitPreprocessorNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorBinaryContext extends PreprocessorExpressionContext {
	public _op: Token;
	public preprocessorExpression(): PreprocessorExpressionContext[];
	public preprocessorExpression(i: number): PreprocessorExpressionContext;
	public preprocessorExpression(i?: number): PreprocessorExpressionContext | PreprocessorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PreprocessorExpressionContext);
		} else {
			return this.getRuleContext(i, PreprocessorExpressionContext);
		}
	}
	public DIRECTIVE_EQUAL(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_EQUAL, 0); }
	public DIRECTIVE_NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_NOTEQUAL, 0); }
	public DIRECTIVE_AND(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_AND, 0); }
	public DIRECTIVE_OR(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_OR, 0); }
	public DIRECTIVE_LT(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_LT, 0); }
	public DIRECTIVE_GT(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_GT, 0); }
	public DIRECTIVE_LE(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_LE, 0); }
	public DIRECTIVE_GE(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_GE, 0); }
	constructor(ctx: PreprocessorExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorBinary) {
			listener.enterPreprocessorBinary(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorBinary) {
			listener.exitPreprocessorBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorBinary) {
			return visitor.visitPreprocessorBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorDefinedContext extends PreprocessorExpressionContext {
	public DIRECTIVE_DEFINED(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_DEFINED, 0); }
	public DIRECTIVE_ID(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_ID, 0); }
	public DIRECTIVE_LP(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_LP, 0); }
	public DIRECTIVE_RP(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_RP, 0); }
	constructor(ctx: PreprocessorExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorDefined) {
			listener.enterPreprocessorDefined(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorDefined) {
			listener.exitPreprocessorDefined(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorDefined) {
			return visitor.visitPreprocessorDefined(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


