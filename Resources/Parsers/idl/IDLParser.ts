// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/idl/IDL.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { IDLListener } from "./IDLListener";
import { IDLVisitor } from "./IDLVisitor";


export class IDLParser extends Parser {
	public static readonly INTEGER_LITERAL = 1;
	public static readonly OCTAL_LITERAL = 2;
	public static readonly HEX_LITERAL = 3;
	public static readonly FLOATING_PT_LITERAL = 4;
	public static readonly FIXED_PT_LITERAL = 5;
	public static readonly WIDE_CHARACTER_LITERAL = 6;
	public static readonly CHARACTER_LITERAL = 7;
	public static readonly WIDE_STRING_LITERAL = 8;
	public static readonly STRING_LITERAL = 9;
	public static readonly BOOLEAN_LITERAL = 10;
	public static readonly SEMICOLON = 11;
	public static readonly COLON = 12;
	public static readonly COMA = 13;
	public static readonly LEFT_BRACE = 14;
	public static readonly RIGHT_BRACE = 15;
	public static readonly LEFT_BRACKET = 16;
	public static readonly RIGHT_BRACKET = 17;
	public static readonly LEFT_SQUARE_BRACKET = 18;
	public static readonly RIGHT_SQUARE_BRACKET = 19;
	public static readonly TILDE = 20;
	public static readonly SLASH = 21;
	public static readonly LEFT_ANG_BRACKET = 22;
	public static readonly RIGHT_ANG_BRACKET = 23;
	public static readonly STAR = 24;
	public static readonly PLUS = 25;
	public static readonly MINUS = 26;
	public static readonly CARET = 27;
	public static readonly AMPERSAND = 28;
	public static readonly PIPE = 29;
	public static readonly EQUAL = 30;
	public static readonly PERCENT = 31;
	public static readonly DOUBLE_COLON = 32;
	public static readonly RIGHT_SHIFT = 33;
	public static readonly LEFT_SHIFT = 34;
	public static readonly KW_SETRAISES = 35;
	public static readonly KW_OUT = 36;
	public static readonly KW_EMITS = 37;
	public static readonly KW_STRING = 38;
	public static readonly KW_SWITCH = 39;
	public static readonly KW_PUBLISHES = 40;
	public static readonly KW_TYPEDEF = 41;
	public static readonly KW_USES = 42;
	public static readonly KW_PRIMARYKEY = 43;
	public static readonly KW_CUSTOM = 44;
	public static readonly KW_OCTET = 45;
	public static readonly KW_SEQUENCE = 46;
	public static readonly KW_IMPORT = 47;
	public static readonly KW_STRUCT = 48;
	public static readonly KW_NATIVE = 49;
	public static readonly KW_READONLY = 50;
	public static readonly KW_FINDER = 51;
	public static readonly KW_RAISES = 52;
	public static readonly KW_VOID = 53;
	public static readonly KW_PRIVATE = 54;
	public static readonly KW_EVENTTYPE = 55;
	public static readonly KW_WCHAR = 56;
	public static readonly KW_IN = 57;
	public static readonly KW_DEFAULT = 58;
	public static readonly KW_PUBLIC = 59;
	public static readonly KW_SHORT = 60;
	public static readonly KW_LONG = 61;
	public static readonly KW_ENUM = 62;
	public static readonly KW_WSTRING = 63;
	public static readonly KW_CONTEXT = 64;
	public static readonly KW_HOME = 65;
	public static readonly KW_FACTORY = 66;
	public static readonly KW_EXCEPTION = 67;
	public static readonly KW_GETRAISES = 68;
	public static readonly KW_CONST = 69;
	public static readonly KW_VALUEBASE = 70;
	public static readonly KW_VALUETYPE = 71;
	public static readonly KW_SUPPORTS = 72;
	public static readonly KW_MODULE = 73;
	public static readonly KW_OBJECT = 74;
	public static readonly KW_TRUNCATABLE = 75;
	public static readonly KW_UNSIGNED = 76;
	public static readonly KW_FIXED = 77;
	public static readonly KW_UNION = 78;
	public static readonly KW_ONEWAY = 79;
	public static readonly KW_ANY = 80;
	public static readonly KW_CHAR = 81;
	public static readonly KW_CASE = 82;
	public static readonly KW_FLOAT = 83;
	public static readonly KW_BOOLEAN = 84;
	public static readonly KW_MULTIPLE = 85;
	public static readonly KW_ABSTRACT = 86;
	public static readonly KW_INOUT = 87;
	public static readonly KW_PROVIDES = 88;
	public static readonly KW_CONSUMES = 89;
	public static readonly KW_DOUBLE = 90;
	public static readonly KW_TYPEPREFIX = 91;
	public static readonly KW_TYPEID = 92;
	public static readonly KW_ATTRIBUTE = 93;
	public static readonly KW_LOCAL = 94;
	public static readonly KW_MANAGES = 95;
	public static readonly KW_INTERFACE = 96;
	public static readonly KW_COMPONENT = 97;
	public static readonly ID = 98;
	public static readonly WS = 99;
	public static readonly COMMENT = 100;
	public static readonly LINE_COMMENT = 101;
	public static readonly RULE_specification = 0;
	public static readonly RULE_definition = 1;
	public static readonly RULE_module = 2;
	public static readonly RULE_interface_or_forward_decl = 3;
	public static readonly RULE_interface_decl = 4;
	public static readonly RULE_forward_decl = 5;
	public static readonly RULE_interface_header = 6;
	public static readonly RULE_interface_body = 7;
	public static readonly RULE_export = 8;
	public static readonly RULE_interface_inheritance_spec = 9;
	public static readonly RULE_interface_name = 10;
	public static readonly RULE_scoped_name = 11;
	public static readonly RULE_value = 12;
	public static readonly RULE_value_forward_decl = 13;
	public static readonly RULE_value_box_decl = 14;
	public static readonly RULE_value_abs_decl = 15;
	public static readonly RULE_value_decl = 16;
	public static readonly RULE_value_header = 17;
	public static readonly RULE_value_inheritance_spec = 18;
	public static readonly RULE_value_name = 19;
	public static readonly RULE_value_element = 20;
	public static readonly RULE_state_member = 21;
	public static readonly RULE_init_decl = 22;
	public static readonly RULE_init_param_decls = 23;
	public static readonly RULE_init_param_decl = 24;
	public static readonly RULE_init_param_attribute = 25;
	public static readonly RULE_const_decl = 26;
	public static readonly RULE_const_type = 27;
	public static readonly RULE_const_exp = 28;
	public static readonly RULE_or_expr = 29;
	public static readonly RULE_xor_expr = 30;
	public static readonly RULE_and_expr = 31;
	public static readonly RULE_shift_expr = 32;
	public static readonly RULE_add_expr = 33;
	public static readonly RULE_mult_expr = 34;
	public static readonly RULE_unary_expr = 35;
	public static readonly RULE_unary_operator = 36;
	public static readonly RULE_primary_expr = 37;
	public static readonly RULE_literal = 38;
	public static readonly RULE_positive_int_const = 39;
	public static readonly RULE_type_decl = 40;
	public static readonly RULE_type_declarator = 41;
	public static readonly RULE_type_spec = 42;
	public static readonly RULE_simple_type_spec = 43;
	public static readonly RULE_base_type_spec = 44;
	public static readonly RULE_template_type_spec = 45;
	public static readonly RULE_constr_type_spec = 46;
	public static readonly RULE_declarators = 47;
	public static readonly RULE_declarator = 48;
	public static readonly RULE_simple_declarator = 49;
	public static readonly RULE_complex_declarator = 50;
	public static readonly RULE_floating_pt_type = 51;
	public static readonly RULE_integer_type = 52;
	public static readonly RULE_signed_int = 53;
	public static readonly RULE_signed_short_int = 54;
	public static readonly RULE_signed_long_int = 55;
	public static readonly RULE_signed_longlong_int = 56;
	public static readonly RULE_unsigned_int = 57;
	public static readonly RULE_unsigned_short_int = 58;
	public static readonly RULE_unsigned_long_int = 59;
	public static readonly RULE_unsigned_longlong_int = 60;
	public static readonly RULE_char_type = 61;
	public static readonly RULE_wide_char_type = 62;
	public static readonly RULE_boolean_type = 63;
	public static readonly RULE_octet_type = 64;
	public static readonly RULE_any_type = 65;
	public static readonly RULE_object_type = 66;
	public static readonly RULE_struct_type = 67;
	public static readonly RULE_member_list = 68;
	public static readonly RULE_member = 69;
	public static readonly RULE_union_type = 70;
	public static readonly RULE_switch_type_spec = 71;
	public static readonly RULE_switch_body = 72;
	public static readonly RULE_case_stmt = 73;
	public static readonly RULE_case_label = 74;
	public static readonly RULE_element_spec = 75;
	public static readonly RULE_enum_type = 76;
	public static readonly RULE_enumerator = 77;
	public static readonly RULE_sequence_type = 78;
	public static readonly RULE_string_type = 79;
	public static readonly RULE_wide_string_type = 80;
	public static readonly RULE_array_declarator = 81;
	public static readonly RULE_fixed_array_size = 82;
	public static readonly RULE_attr_decl = 83;
	public static readonly RULE_except_decl = 84;
	public static readonly RULE_op_decl = 85;
	public static readonly RULE_op_attribute = 86;
	public static readonly RULE_op_type_spec = 87;
	public static readonly RULE_parameter_decls = 88;
	public static readonly RULE_param_decl = 89;
	public static readonly RULE_param_attribute = 90;
	public static readonly RULE_raises_expr = 91;
	public static readonly RULE_context_expr = 92;
	public static readonly RULE_param_type_spec = 93;
	public static readonly RULE_fixed_pt_type = 94;
	public static readonly RULE_fixed_pt_const_type = 95;
	public static readonly RULE_value_base_type = 96;
	public static readonly RULE_constr_forward_decl = 97;
	public static readonly RULE_import_decl = 98;
	public static readonly RULE_imported_scope = 99;
	public static readonly RULE_type_id_decl = 100;
	public static readonly RULE_type_prefix_decl = 101;
	public static readonly RULE_readonly_attr_spec = 102;
	public static readonly RULE_readonly_attr_declarator = 103;
	public static readonly RULE_attr_spec = 104;
	public static readonly RULE_attr_declarator = 105;
	public static readonly RULE_attr_raises_expr = 106;
	public static readonly RULE_get_excep_expr = 107;
	public static readonly RULE_set_excep_expr = 108;
	public static readonly RULE_exception_list = 109;
	public static readonly RULE_component = 110;
	public static readonly RULE_component_forward_decl = 111;
	public static readonly RULE_component_decl = 112;
	public static readonly RULE_component_header = 113;
	public static readonly RULE_supported_interface_spec = 114;
	public static readonly RULE_component_inheritance_spec = 115;
	public static readonly RULE_component_body = 116;
	public static readonly RULE_component_export = 117;
	public static readonly RULE_provides_decl = 118;
	public static readonly RULE_interface_type = 119;
	public static readonly RULE_uses_decl = 120;
	public static readonly RULE_emits_decl = 121;
	public static readonly RULE_publishes_decl = 122;
	public static readonly RULE_consumes_decl = 123;
	public static readonly RULE_home_decl = 124;
	public static readonly RULE_home_header = 125;
	public static readonly RULE_home_inheritance_spec = 126;
	public static readonly RULE_primary_key_spec = 127;
	public static readonly RULE_home_body = 128;
	public static readonly RULE_home_export = 129;
	public static readonly RULE_factory_decl = 130;
	public static readonly RULE_finder_decl = 131;
	public static readonly RULE_event = 132;
	public static readonly RULE_event_forward_decl = 133;
	public static readonly RULE_event_abs_decl = 134;
	public static readonly RULE_event_decl = 135;
	public static readonly RULE_event_header = 136;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"specification", "definition", "module", "interface_or_forward_decl", 
		"interface_decl", "forward_decl", "interface_header", "interface_body", 
		"export", "interface_inheritance_spec", "interface_name", "scoped_name", 
		"value", "value_forward_decl", "value_box_decl", "value_abs_decl", "value_decl", 
		"value_header", "value_inheritance_spec", "value_name", "value_element", 
		"state_member", "init_decl", "init_param_decls", "init_param_decl", "init_param_attribute", 
		"const_decl", "const_type", "const_exp", "or_expr", "xor_expr", "and_expr", 
		"shift_expr", "add_expr", "mult_expr", "unary_expr", "unary_operator", 
		"primary_expr", "literal", "positive_int_const", "type_decl", "type_declarator", 
		"type_spec", "simple_type_spec", "base_type_spec", "template_type_spec", 
		"constr_type_spec", "declarators", "declarator", "simple_declarator", 
		"complex_declarator", "floating_pt_type", "integer_type", "signed_int", 
		"signed_short_int", "signed_long_int", "signed_longlong_int", "unsigned_int", 
		"unsigned_short_int", "unsigned_long_int", "unsigned_longlong_int", "char_type", 
		"wide_char_type", "boolean_type", "octet_type", "any_type", "object_type", 
		"struct_type", "member_list", "member", "union_type", "switch_type_spec", 
		"switch_body", "case_stmt", "case_label", "element_spec", "enum_type", 
		"enumerator", "sequence_type", "string_type", "wide_string_type", "array_declarator", 
		"fixed_array_size", "attr_decl", "except_decl", "op_decl", "op_attribute", 
		"op_type_spec", "parameter_decls", "param_decl", "param_attribute", "raises_expr", 
		"context_expr", "param_type_spec", "fixed_pt_type", "fixed_pt_const_type", 
		"value_base_type", "constr_forward_decl", "import_decl", "imported_scope", 
		"type_id_decl", "type_prefix_decl", "readonly_attr_spec", "readonly_attr_declarator", 
		"attr_spec", "attr_declarator", "attr_raises_expr", "get_excep_expr", 
		"set_excep_expr", "exception_list", "component", "component_forward_decl", 
		"component_decl", "component_header", "supported_interface_spec", "component_inheritance_spec", 
		"component_body", "component_export", "provides_decl", "interface_type", 
		"uses_decl", "emits_decl", "publishes_decl", "consumes_decl", "home_decl", 
		"home_header", "home_inheritance_spec", "primary_key_spec", "home_body", 
		"home_export", "factory_decl", "finder_decl", "event", "event_forward_decl", 
		"event_abs_decl", "event_decl", "event_header",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "';'", "':'", "','", "'{'", 
		"'}'", "'('", "')'", "'['", "']'", "'~'", "'/'", "'<'", "'>'", "'*'", 
		"'+'", "'-'", "'^'", "'&'", "'|'", "'='", "'%'", "'::'", "'>>'", "'<<'", 
		"'setraises'", "'out'", "'emits'", "'string'", "'switch'", "'publishes'", 
		"'typedef'", "'uses'", "'primarykey'", "'custom'", "'octet'", "'sequence'", 
		"'import'", "'struct'", "'native'", "'readonly'", "'finder'", "'raises'", 
		"'void'", "'private'", "'eventtype'", "'wchar'", "'in'", "'default'", 
		"'public'", "'short'", "'long'", "'enum'", "'wstring'", "'context'", "'home'", 
		"'factory'", "'exception'", "'getraises'", "'const'", "'ValueBase'", "'valuetype'", 
		"'supports'", "'module'", "'Object'", "'truncatable'", "'unsigned'", "'fixed'", 
		"'union'", "'oneway'", "'any'", "'char'", "'case'", "'float'", "'boolean'", 
		"'multiple'", "'abstract'", "'inout'", "'provides'", "'consumes'", "'double'", 
		"'typeprefix'", "'typeid'", "'attribute'", "'local'", "'manages'", "'interface'", 
		"'component'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INTEGER_LITERAL", "OCTAL_LITERAL", "HEX_LITERAL", "FLOATING_PT_LITERAL", 
		"FIXED_PT_LITERAL", "WIDE_CHARACTER_LITERAL", "CHARACTER_LITERAL", "WIDE_STRING_LITERAL", 
		"STRING_LITERAL", "BOOLEAN_LITERAL", "SEMICOLON", "COLON", "COMA", "LEFT_BRACE", 
		"RIGHT_BRACE", "LEFT_BRACKET", "RIGHT_BRACKET", "LEFT_SQUARE_BRACKET", 
		"RIGHT_SQUARE_BRACKET", "TILDE", "SLASH", "LEFT_ANG_BRACKET", "RIGHT_ANG_BRACKET", 
		"STAR", "PLUS", "MINUS", "CARET", "AMPERSAND", "PIPE", "EQUAL", "PERCENT", 
		"DOUBLE_COLON", "RIGHT_SHIFT", "LEFT_SHIFT", "KW_SETRAISES", "KW_OUT", 
		"KW_EMITS", "KW_STRING", "KW_SWITCH", "KW_PUBLISHES", "KW_TYPEDEF", "KW_USES", 
		"KW_PRIMARYKEY", "KW_CUSTOM", "KW_OCTET", "KW_SEQUENCE", "KW_IMPORT", 
		"KW_STRUCT", "KW_NATIVE", "KW_READONLY", "KW_FINDER", "KW_RAISES", "KW_VOID", 
		"KW_PRIVATE", "KW_EVENTTYPE", "KW_WCHAR", "KW_IN", "KW_DEFAULT", "KW_PUBLIC", 
		"KW_SHORT", "KW_LONG", "KW_ENUM", "KW_WSTRING", "KW_CONTEXT", "KW_HOME", 
		"KW_FACTORY", "KW_EXCEPTION", "KW_GETRAISES", "KW_CONST", "KW_VALUEBASE", 
		"KW_VALUETYPE", "KW_SUPPORTS", "KW_MODULE", "KW_OBJECT", "KW_TRUNCATABLE", 
		"KW_UNSIGNED", "KW_FIXED", "KW_UNION", "KW_ONEWAY", "KW_ANY", "KW_CHAR", 
		"KW_CASE", "KW_FLOAT", "KW_BOOLEAN", "KW_MULTIPLE", "KW_ABSTRACT", "KW_INOUT", 
		"KW_PROVIDES", "KW_CONSUMES", "KW_DOUBLE", "KW_TYPEPREFIX", "KW_TYPEID", 
		"KW_ATTRIBUTE", "KW_LOCAL", "KW_MANAGES", "KW_INTERFACE", "KW_COMPONENT", 
		"ID", "WS", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(IDLParser._LITERAL_NAMES, IDLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return IDLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "IDL.g4"; }

	// @Override
	public get ruleNames(): string[] { return IDLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return IDLParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(IDLParser._ATN, this);
	}
	// @RuleVersion(0)
	public specification(): SpecificationContext {
		let _localctx: SpecificationContext = new SpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, IDLParser.RULE_specification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IDLParser.KW_IMPORT) {
				{
				{
				this.state = 274;
				this.import_decl();
				}
				}
				this.state = 279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 280;
				this.definition();
				}
				}
				this.state = 283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (IDLParser.KW_TYPEDEF - 41)) | (1 << (IDLParser.KW_CUSTOM - 41)) | (1 << (IDLParser.KW_STRUCT - 41)) | (1 << (IDLParser.KW_NATIVE - 41)) | (1 << (IDLParser.KW_EVENTTYPE - 41)) | (1 << (IDLParser.KW_ENUM - 41)) | (1 << (IDLParser.KW_HOME - 41)) | (1 << (IDLParser.KW_EXCEPTION - 41)) | (1 << (IDLParser.KW_CONST - 41)) | (1 << (IDLParser.KW_VALUETYPE - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (IDLParser.KW_MODULE - 73)) | (1 << (IDLParser.KW_UNION - 73)) | (1 << (IDLParser.KW_ABSTRACT - 73)) | (1 << (IDLParser.KW_TYPEPREFIX - 73)) | (1 << (IDLParser.KW_TYPEID - 73)) | (1 << (IDLParser.KW_LOCAL - 73)) | (1 << (IDLParser.KW_INTERFACE - 73)) | (1 << (IDLParser.KW_COMPONENT - 73)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, IDLParser.RULE_definition);
		try {
			this.state = 318;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 285;
				this.type_decl();
				this.state = 286;
				this.match(IDLParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 288;
				this.const_decl();
				this.state = 289;
				this.match(IDLParser.SEMICOLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 291;
				this.except_decl();
				this.state = 292;
				this.match(IDLParser.SEMICOLON);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 294;
				this.interface_or_forward_decl();
				this.state = 295;
				this.match(IDLParser.SEMICOLON);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 297;
				this.module();
				this.state = 298;
				this.match(IDLParser.SEMICOLON);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 300;
				this.value();
				this.state = 301;
				this.match(IDLParser.SEMICOLON);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 303;
				this.type_id_decl();
				this.state = 304;
				this.match(IDLParser.SEMICOLON);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 306;
				this.type_prefix_decl();
				this.state = 307;
				this.match(IDLParser.SEMICOLON);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 309;
				this.event();
				this.state = 310;
				this.match(IDLParser.SEMICOLON);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 312;
				this.component();
				this.state = 313;
				this.match(IDLParser.SEMICOLON);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 315;
				this.home_decl();
				this.state = 316;
				this.match(IDLParser.SEMICOLON);
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
	public module(): ModuleContext {
		let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, IDLParser.RULE_module);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.match(IDLParser.KW_MODULE);
			this.state = 321;
			this.match(IDLParser.ID);
			this.state = 322;
			this.match(IDLParser.LEFT_BRACE);
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 323;
				this.definition();
				}
				}
				this.state = 326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (IDLParser.KW_TYPEDEF - 41)) | (1 << (IDLParser.KW_CUSTOM - 41)) | (1 << (IDLParser.KW_STRUCT - 41)) | (1 << (IDLParser.KW_NATIVE - 41)) | (1 << (IDLParser.KW_EVENTTYPE - 41)) | (1 << (IDLParser.KW_ENUM - 41)) | (1 << (IDLParser.KW_HOME - 41)) | (1 << (IDLParser.KW_EXCEPTION - 41)) | (1 << (IDLParser.KW_CONST - 41)) | (1 << (IDLParser.KW_VALUETYPE - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (IDLParser.KW_MODULE - 73)) | (1 << (IDLParser.KW_UNION - 73)) | (1 << (IDLParser.KW_ABSTRACT - 73)) | (1 << (IDLParser.KW_TYPEPREFIX - 73)) | (1 << (IDLParser.KW_TYPEID - 73)) | (1 << (IDLParser.KW_LOCAL - 73)) | (1 << (IDLParser.KW_INTERFACE - 73)) | (1 << (IDLParser.KW_COMPONENT - 73)))) !== 0));
			this.state = 328;
			this.match(IDLParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interface_or_forward_decl(): Interface_or_forward_declContext {
		let _localctx: Interface_or_forward_declContext = new Interface_or_forward_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, IDLParser.RULE_interface_or_forward_decl);
		try {
			this.state = 332;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 330;
				this.interface_decl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 331;
				this.forward_decl();
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
	public interface_decl(): Interface_declContext {
		let _localctx: Interface_declContext = new Interface_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, IDLParser.RULE_interface_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.interface_header();
			this.state = 335;
			this.match(IDLParser.LEFT_BRACE);
			this.state = 336;
			this.interface_body();
			this.state = 337;
			this.match(IDLParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forward_decl(): Forward_declContext {
		let _localctx: Forward_declContext = new Forward_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, IDLParser.RULE_forward_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_ABSTRACT || _la === IDLParser.KW_LOCAL) {
				{
				this.state = 339;
				_la = this._input.LA(1);
				if (!(_la === IDLParser.KW_ABSTRACT || _la === IDLParser.KW_LOCAL)) {
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

			this.state = 342;
			this.match(IDLParser.KW_INTERFACE);
			this.state = 343;
			this.match(IDLParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interface_header(): Interface_headerContext {
		let _localctx: Interface_headerContext = new Interface_headerContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, IDLParser.RULE_interface_header);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_ABSTRACT || _la === IDLParser.KW_LOCAL) {
				{
				this.state = 345;
				_la = this._input.LA(1);
				if (!(_la === IDLParser.KW_ABSTRACT || _la === IDLParser.KW_LOCAL)) {
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

			this.state = 348;
			this.match(IDLParser.KW_INTERFACE);
			this.state = 349;
			this.match(IDLParser.ID);
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.COLON) {
				{
				this.state = 350;
				this.interface_inheritance_spec();
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
	public interface_body(): Interface_bodyContext {
		let _localctx: Interface_bodyContext = new Interface_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, IDLParser.RULE_interface_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IDLParser.DOUBLE_COLON - 32)) | (1 << (IDLParser.KW_STRING - 32)) | (1 << (IDLParser.KW_TYPEDEF - 32)) | (1 << (IDLParser.KW_OCTET - 32)) | (1 << (IDLParser.KW_STRUCT - 32)) | (1 << (IDLParser.KW_NATIVE - 32)) | (1 << (IDLParser.KW_READONLY - 32)) | (1 << (IDLParser.KW_VOID - 32)) | (1 << (IDLParser.KW_WCHAR - 32)) | (1 << (IDLParser.KW_SHORT - 32)) | (1 << (IDLParser.KW_LONG - 32)) | (1 << (IDLParser.KW_ENUM - 32)) | (1 << (IDLParser.KW_WSTRING - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (IDLParser.KW_EXCEPTION - 67)) | (1 << (IDLParser.KW_CONST - 67)) | (1 << (IDLParser.KW_VALUEBASE - 67)) | (1 << (IDLParser.KW_OBJECT - 67)) | (1 << (IDLParser.KW_UNSIGNED - 67)) | (1 << (IDLParser.KW_UNION - 67)) | (1 << (IDLParser.KW_ONEWAY - 67)) | (1 << (IDLParser.KW_ANY - 67)) | (1 << (IDLParser.KW_CHAR - 67)) | (1 << (IDLParser.KW_FLOAT - 67)) | (1 << (IDLParser.KW_BOOLEAN - 67)) | (1 << (IDLParser.KW_DOUBLE - 67)) | (1 << (IDLParser.KW_TYPEPREFIX - 67)) | (1 << (IDLParser.KW_TYPEID - 67)) | (1 << (IDLParser.KW_ATTRIBUTE - 67)) | (1 << (IDLParser.ID - 67)))) !== 0)) {
				{
				{
				this.state = 353;
				this.export();
				}
				}
				this.state = 358;
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
	public export(): ExportContext {
		let _localctx: ExportContext = new ExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, IDLParser.RULE_export);
		try {
			this.state = 380;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.KW_TYPEDEF:
			case IDLParser.KW_STRUCT:
			case IDLParser.KW_NATIVE:
			case IDLParser.KW_ENUM:
			case IDLParser.KW_UNION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 359;
				this.type_decl();
				this.state = 360;
				this.match(IDLParser.SEMICOLON);
				}
				break;
			case IDLParser.KW_CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 362;
				this.const_decl();
				this.state = 363;
				this.match(IDLParser.SEMICOLON);
				}
				break;
			case IDLParser.KW_EXCEPTION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 365;
				this.except_decl();
				this.state = 366;
				this.match(IDLParser.SEMICOLON);
				}
				break;
			case IDLParser.KW_READONLY:
			case IDLParser.KW_ATTRIBUTE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 368;
				this.attr_decl();
				this.state = 369;
				this.match(IDLParser.SEMICOLON);
				}
				break;
			case IDLParser.DOUBLE_COLON:
			case IDLParser.KW_STRING:
			case IDLParser.KW_OCTET:
			case IDLParser.KW_VOID:
			case IDLParser.KW_WCHAR:
			case IDLParser.KW_SHORT:
			case IDLParser.KW_LONG:
			case IDLParser.KW_WSTRING:
			case IDLParser.KW_VALUEBASE:
			case IDLParser.KW_OBJECT:
			case IDLParser.KW_UNSIGNED:
			case IDLParser.KW_ONEWAY:
			case IDLParser.KW_ANY:
			case IDLParser.KW_CHAR:
			case IDLParser.KW_FLOAT:
			case IDLParser.KW_BOOLEAN:
			case IDLParser.KW_DOUBLE:
			case IDLParser.ID:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 371;
				this.op_decl();
				this.state = 372;
				this.match(IDLParser.SEMICOLON);
				}
				break;
			case IDLParser.KW_TYPEID:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 374;
				this.type_id_decl();
				this.state = 375;
				this.match(IDLParser.SEMICOLON);
				}
				break;
			case IDLParser.KW_TYPEPREFIX:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 377;
				this.type_prefix_decl();
				this.state = 378;
				this.match(IDLParser.SEMICOLON);
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
	public interface_inheritance_spec(): Interface_inheritance_specContext {
		let _localctx: Interface_inheritance_specContext = new Interface_inheritance_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, IDLParser.RULE_interface_inheritance_spec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.match(IDLParser.COLON);
			this.state = 383;
			this.interface_name();
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IDLParser.COMA) {
				{
				{
				this.state = 384;
				this.match(IDLParser.COMA);
				this.state = 385;
				this.interface_name();
				}
				}
				this.state = 390;
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
	public interface_name(): Interface_nameContext {
		let _localctx: Interface_nameContext = new Interface_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, IDLParser.RULE_interface_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 391;
			this.scoped_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scoped_name(): Scoped_nameContext {
		let _localctx: Scoped_nameContext = new Scoped_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, IDLParser.RULE_scoped_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.DOUBLE_COLON) {
				{
				this.state = 393;
				this.match(IDLParser.DOUBLE_COLON);
				}
			}

			this.state = 396;
			this.match(IDLParser.ID);
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IDLParser.DOUBLE_COLON) {
				{
				{
				this.state = 397;
				this.match(IDLParser.DOUBLE_COLON);
				this.state = 398;
				this.match(IDLParser.ID);
				}
				}
				this.state = 403;
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, IDLParser.RULE_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 404;
				this.value_decl();
				}
				break;

			case 2:
				{
				this.state = 405;
				this.value_abs_decl();
				}
				break;

			case 3:
				{
				this.state = 406;
				this.value_box_decl();
				}
				break;

			case 4:
				{
				this.state = 407;
				this.value_forward_decl();
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
	public value_forward_decl(): Value_forward_declContext {
		let _localctx: Value_forward_declContext = new Value_forward_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, IDLParser.RULE_value_forward_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_ABSTRACT) {
				{
				this.state = 410;
				this.match(IDLParser.KW_ABSTRACT);
				}
			}

			this.state = 413;
			this.match(IDLParser.KW_VALUETYPE);
			this.state = 414;
			this.match(IDLParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value_box_decl(): Value_box_declContext {
		let _localctx: Value_box_declContext = new Value_box_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, IDLParser.RULE_value_box_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this.match(IDLParser.KW_VALUETYPE);
			this.state = 417;
			this.match(IDLParser.ID);
			this.state = 418;
			this.type_spec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value_abs_decl(): Value_abs_declContext {
		let _localctx: Value_abs_declContext = new Value_abs_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, IDLParser.RULE_value_abs_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			this.match(IDLParser.KW_ABSTRACT);
			this.state = 421;
			this.match(IDLParser.KW_VALUETYPE);
			this.state = 422;
			this.match(IDLParser.ID);
			this.state = 423;
			this.value_inheritance_spec();
			this.state = 424;
			this.match(IDLParser.LEFT_BRACE);
			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IDLParser.DOUBLE_COLON - 32)) | (1 << (IDLParser.KW_STRING - 32)) | (1 << (IDLParser.KW_TYPEDEF - 32)) | (1 << (IDLParser.KW_OCTET - 32)) | (1 << (IDLParser.KW_STRUCT - 32)) | (1 << (IDLParser.KW_NATIVE - 32)) | (1 << (IDLParser.KW_READONLY - 32)) | (1 << (IDLParser.KW_VOID - 32)) | (1 << (IDLParser.KW_WCHAR - 32)) | (1 << (IDLParser.KW_SHORT - 32)) | (1 << (IDLParser.KW_LONG - 32)) | (1 << (IDLParser.KW_ENUM - 32)) | (1 << (IDLParser.KW_WSTRING - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (IDLParser.KW_EXCEPTION - 67)) | (1 << (IDLParser.KW_CONST - 67)) | (1 << (IDLParser.KW_VALUEBASE - 67)) | (1 << (IDLParser.KW_OBJECT - 67)) | (1 << (IDLParser.KW_UNSIGNED - 67)) | (1 << (IDLParser.KW_UNION - 67)) | (1 << (IDLParser.KW_ONEWAY - 67)) | (1 << (IDLParser.KW_ANY - 67)) | (1 << (IDLParser.KW_CHAR - 67)) | (1 << (IDLParser.KW_FLOAT - 67)) | (1 << (IDLParser.KW_BOOLEAN - 67)) | (1 << (IDLParser.KW_DOUBLE - 67)) | (1 << (IDLParser.KW_TYPEPREFIX - 67)) | (1 << (IDLParser.KW_TYPEID - 67)) | (1 << (IDLParser.KW_ATTRIBUTE - 67)) | (1 << (IDLParser.ID - 67)))) !== 0)) {
				{
				{
				this.state = 425;
				this.export();
				}
				}
				this.state = 430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 431;
			this.match(IDLParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value_decl(): Value_declContext {
		let _localctx: Value_declContext = new Value_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, IDLParser.RULE_value_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.value_header();
			this.state = 434;
			this.match(IDLParser.LEFT_BRACE);
			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IDLParser.DOUBLE_COLON - 32)) | (1 << (IDLParser.KW_STRING - 32)) | (1 << (IDLParser.KW_TYPEDEF - 32)) | (1 << (IDLParser.KW_OCTET - 32)) | (1 << (IDLParser.KW_STRUCT - 32)) | (1 << (IDLParser.KW_NATIVE - 32)) | (1 << (IDLParser.KW_READONLY - 32)) | (1 << (IDLParser.KW_VOID - 32)) | (1 << (IDLParser.KW_PRIVATE - 32)) | (1 << (IDLParser.KW_WCHAR - 32)) | (1 << (IDLParser.KW_PUBLIC - 32)) | (1 << (IDLParser.KW_SHORT - 32)) | (1 << (IDLParser.KW_LONG - 32)) | (1 << (IDLParser.KW_ENUM - 32)) | (1 << (IDLParser.KW_WSTRING - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (IDLParser.KW_FACTORY - 66)) | (1 << (IDLParser.KW_EXCEPTION - 66)) | (1 << (IDLParser.KW_CONST - 66)) | (1 << (IDLParser.KW_VALUEBASE - 66)) | (1 << (IDLParser.KW_OBJECT - 66)) | (1 << (IDLParser.KW_UNSIGNED - 66)) | (1 << (IDLParser.KW_UNION - 66)) | (1 << (IDLParser.KW_ONEWAY - 66)) | (1 << (IDLParser.KW_ANY - 66)) | (1 << (IDLParser.KW_CHAR - 66)) | (1 << (IDLParser.KW_FLOAT - 66)) | (1 << (IDLParser.KW_BOOLEAN - 66)) | (1 << (IDLParser.KW_DOUBLE - 66)) | (1 << (IDLParser.KW_TYPEPREFIX - 66)) | (1 << (IDLParser.KW_TYPEID - 66)) | (1 << (IDLParser.KW_ATTRIBUTE - 66)))) !== 0) || _la === IDLParser.ID) {
				{
				{
				this.state = 435;
				this.value_element();
				}
				}
				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 441;
			this.match(IDLParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value_header(): Value_headerContext {
		let _localctx: Value_headerContext = new Value_headerContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, IDLParser.RULE_value_header);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_CUSTOM) {
				{
				this.state = 443;
				this.match(IDLParser.KW_CUSTOM);
				}
			}

			this.state = 446;
			this.match(IDLParser.KW_VALUETYPE);
			this.state = 447;
			this.match(IDLParser.ID);
			this.state = 448;
			this.value_inheritance_spec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value_inheritance_spec(): Value_inheritance_specContext {
		let _localctx: Value_inheritance_specContext = new Value_inheritance_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, IDLParser.RULE_value_inheritance_spec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.COLON) {
				{
				this.state = 450;
				this.match(IDLParser.COLON);
				this.state = 452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === IDLParser.KW_TRUNCATABLE) {
					{
					this.state = 451;
					this.match(IDLParser.KW_TRUNCATABLE);
					}
				}

				this.state = 454;
				this.value_name();
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === IDLParser.COMA) {
					{
					{
					this.state = 455;
					this.match(IDLParser.COMA);
					this.state = 456;
					this.value_name();
					}
					}
					this.state = 461;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_SUPPORTS) {
				{
				this.state = 464;
				this.match(IDLParser.KW_SUPPORTS);
				this.state = 465;
				this.interface_name();
				this.state = 470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === IDLParser.COMA) {
					{
					{
					this.state = 466;
					this.match(IDLParser.COMA);
					this.state = 467;
					this.interface_name();
					}
					}
					this.state = 472;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
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
	public value_name(): Value_nameContext {
		let _localctx: Value_nameContext = new Value_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, IDLParser.RULE_value_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.scoped_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value_element(): Value_elementContext {
		let _localctx: Value_elementContext = new Value_elementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, IDLParser.RULE_value_element);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.DOUBLE_COLON:
			case IDLParser.KW_STRING:
			case IDLParser.KW_TYPEDEF:
			case IDLParser.KW_OCTET:
			case IDLParser.KW_STRUCT:
			case IDLParser.KW_NATIVE:
			case IDLParser.KW_READONLY:
			case IDLParser.KW_VOID:
			case IDLParser.KW_WCHAR:
			case IDLParser.KW_SHORT:
			case IDLParser.KW_LONG:
			case IDLParser.KW_ENUM:
			case IDLParser.KW_WSTRING:
			case IDLParser.KW_EXCEPTION:
			case IDLParser.KW_CONST:
			case IDLParser.KW_VALUEBASE:
			case IDLParser.KW_OBJECT:
			case IDLParser.KW_UNSIGNED:
			case IDLParser.KW_UNION:
			case IDLParser.KW_ONEWAY:
			case IDLParser.KW_ANY:
			case IDLParser.KW_CHAR:
			case IDLParser.KW_FLOAT:
			case IDLParser.KW_BOOLEAN:
			case IDLParser.KW_DOUBLE:
			case IDLParser.KW_TYPEPREFIX:
			case IDLParser.KW_TYPEID:
			case IDLParser.KW_ATTRIBUTE:
			case IDLParser.ID:
				{
				this.state = 477;
				this.export();
				}
				break;
			case IDLParser.KW_PRIVATE:
			case IDLParser.KW_PUBLIC:
				{
				this.state = 478;
				this.state_member();
				}
				break;
			case IDLParser.KW_FACTORY:
				{
				this.state = 479;
				this.init_decl();
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
	public state_member(): State_memberContext {
		let _localctx: State_memberContext = new State_memberContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, IDLParser.RULE_state_member);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			_la = this._input.LA(1);
			if (!(_la === IDLParser.KW_PRIVATE || _la === IDLParser.KW_PUBLIC)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 483;
			this.type_spec();
			this.state = 484;
			this.declarators();
			this.state = 485;
			this.match(IDLParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public init_decl(): Init_declContext {
		let _localctx: Init_declContext = new Init_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, IDLParser.RULE_init_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.match(IDLParser.KW_FACTORY);
			this.state = 488;
			this.match(IDLParser.ID);
			this.state = 489;
			this.match(IDLParser.LEFT_BRACKET);
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_IN) {
				{
				this.state = 490;
				this.init_param_decls();
				}
			}

			this.state = 493;
			this.match(IDLParser.RIGHT_BRACKET);
			this.state = 495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_RAISES) {
				{
				this.state = 494;
				this.raises_expr();
				}
			}

			this.state = 497;
			this.match(IDLParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public init_param_decls(): Init_param_declsContext {
		let _localctx: Init_param_declsContext = new Init_param_declsContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, IDLParser.RULE_init_param_decls);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 499;
			this.init_param_decl();
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IDLParser.COMA) {
				{
				{
				this.state = 500;
				this.match(IDLParser.COMA);
				this.state = 501;
				this.init_param_decl();
				}
				}
				this.state = 506;
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
	public init_param_decl(): Init_param_declContext {
		let _localctx: Init_param_declContext = new Init_param_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, IDLParser.RULE_init_param_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this.init_param_attribute();
			this.state = 508;
			this.param_type_spec();
			this.state = 509;
			this.simple_declarator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public init_param_attribute(): Init_param_attributeContext {
		let _localctx: Init_param_attributeContext = new Init_param_attributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, IDLParser.RULE_init_param_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.match(IDLParser.KW_IN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public const_decl(): Const_declContext {
		let _localctx: Const_declContext = new Const_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, IDLParser.RULE_const_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this.match(IDLParser.KW_CONST);
			this.state = 514;
			this.const_type();
			this.state = 515;
			this.match(IDLParser.ID);
			this.state = 516;
			this.match(IDLParser.EQUAL);
			this.state = 517;
			this.const_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public const_type(): Const_typeContext {
		let _localctx: Const_typeContext = new Const_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, IDLParser.RULE_const_type);
		try {
			this.state = 529;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 519;
				this.integer_type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 520;
				this.char_type();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 521;
				this.wide_char_type();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 522;
				this.boolean_type();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 523;
				this.floating_pt_type();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 524;
				this.string_type();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 525;
				this.wide_string_type();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 526;
				this.fixed_pt_const_type();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 527;
				this.scoped_name();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 528;
				this.octet_type();
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
	public const_exp(): Const_expContext {
		let _localctx: Const_expContext = new Const_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, IDLParser.RULE_const_exp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			this.or_expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public or_expr(): Or_exprContext {
		let _localctx: Or_exprContext = new Or_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, IDLParser.RULE_or_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
			this.xor_expr();
			this.state = 538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IDLParser.PIPE) {
				{
				{
				this.state = 534;
				this.match(IDLParser.PIPE);
				this.state = 535;
				this.xor_expr();
				}
				}
				this.state = 540;
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
	public xor_expr(): Xor_exprContext {
		let _localctx: Xor_exprContext = new Xor_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, IDLParser.RULE_xor_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this.and_expr();
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IDLParser.CARET) {
				{
				{
				this.state = 542;
				this.match(IDLParser.CARET);
				this.state = 543;
				this.and_expr();
				}
				}
				this.state = 548;
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
	public and_expr(): And_exprContext {
		let _localctx: And_exprContext = new And_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, IDLParser.RULE_and_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this.shift_expr();
			this.state = 554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IDLParser.AMPERSAND) {
				{
				{
				this.state = 550;
				this.match(IDLParser.AMPERSAND);
				this.state = 551;
				this.shift_expr();
				}
				}
				this.state = 556;
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
	public shift_expr(): Shift_exprContext {
		let _localctx: Shift_exprContext = new Shift_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, IDLParser.RULE_shift_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 557;
			this.add_expr();
			this.state = 562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IDLParser.RIGHT_SHIFT || _la === IDLParser.LEFT_SHIFT) {
				{
				{
				this.state = 558;
				_la = this._input.LA(1);
				if (!(_la === IDLParser.RIGHT_SHIFT || _la === IDLParser.LEFT_SHIFT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 559;
				this.add_expr();
				}
				}
				this.state = 564;
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
	public add_expr(): Add_exprContext {
		let _localctx: Add_exprContext = new Add_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, IDLParser.RULE_add_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
			this.mult_expr();
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IDLParser.PLUS || _la === IDLParser.MINUS) {
				{
				{
				this.state = 566;
				_la = this._input.LA(1);
				if (!(_la === IDLParser.PLUS || _la === IDLParser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 567;
				this.mult_expr();
				}
				}
				this.state = 572;
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
	public mult_expr(): Mult_exprContext {
		let _localctx: Mult_exprContext = new Mult_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, IDLParser.RULE_mult_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 573;
			this.unary_expr();
			this.state = 578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IDLParser.SLASH) | (1 << IDLParser.STAR) | (1 << IDLParser.PERCENT))) !== 0)) {
				{
				{
				this.state = 574;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IDLParser.SLASH) | (1 << IDLParser.STAR) | (1 << IDLParser.PERCENT))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 575;
				this.unary_expr();
				}
				}
				this.state = 580;
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
	public unary_expr(): Unary_exprContext {
		let _localctx: Unary_exprContext = new Unary_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, IDLParser.RULE_unary_expr);
		try {
			this.state = 585;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.TILDE:
			case IDLParser.PLUS:
			case IDLParser.MINUS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 581;
				this.unary_operator();
				this.state = 582;
				this.primary_expr();
				}
				break;
			case IDLParser.INTEGER_LITERAL:
			case IDLParser.HEX_LITERAL:
			case IDLParser.FLOATING_PT_LITERAL:
			case IDLParser.FIXED_PT_LITERAL:
			case IDLParser.WIDE_CHARACTER_LITERAL:
			case IDLParser.CHARACTER_LITERAL:
			case IDLParser.WIDE_STRING_LITERAL:
			case IDLParser.STRING_LITERAL:
			case IDLParser.BOOLEAN_LITERAL:
			case IDLParser.LEFT_BRACKET:
			case IDLParser.DOUBLE_COLON:
			case IDLParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 584;
				this.primary_expr();
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
	public unary_operator(): Unary_operatorContext {
		let _localctx: Unary_operatorContext = new Unary_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, IDLParser.RULE_unary_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IDLParser.TILDE) | (1 << IDLParser.PLUS) | (1 << IDLParser.MINUS))) !== 0))) {
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
	public primary_expr(): Primary_exprContext {
		let _localctx: Primary_exprContext = new Primary_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, IDLParser.RULE_primary_expr);
		try {
			this.state = 595;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.DOUBLE_COLON:
			case IDLParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 589;
				this.scoped_name();
				}
				break;
			case IDLParser.INTEGER_LITERAL:
			case IDLParser.HEX_LITERAL:
			case IDLParser.FLOATING_PT_LITERAL:
			case IDLParser.FIXED_PT_LITERAL:
			case IDLParser.WIDE_CHARACTER_LITERAL:
			case IDLParser.CHARACTER_LITERAL:
			case IDLParser.WIDE_STRING_LITERAL:
			case IDLParser.STRING_LITERAL:
			case IDLParser.BOOLEAN_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
				this.literal();
				}
				break;
			case IDLParser.LEFT_BRACKET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 591;
				this.match(IDLParser.LEFT_BRACKET);
				this.state = 592;
				this.const_exp();
				this.state = 593;
				this.match(IDLParser.RIGHT_BRACKET);
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
		this.enterRule(_localctx, 76, IDLParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 597;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IDLParser.INTEGER_LITERAL) | (1 << IDLParser.HEX_LITERAL) | (1 << IDLParser.FLOATING_PT_LITERAL) | (1 << IDLParser.FIXED_PT_LITERAL) | (1 << IDLParser.WIDE_CHARACTER_LITERAL) | (1 << IDLParser.CHARACTER_LITERAL) | (1 << IDLParser.WIDE_STRING_LITERAL) | (1 << IDLParser.STRING_LITERAL) | (1 << IDLParser.BOOLEAN_LITERAL))) !== 0))) {
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
	public positive_int_const(): Positive_int_constContext {
		let _localctx: Positive_int_constContext = new Positive_int_constContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, IDLParser.RULE_positive_int_const);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
			this.const_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_decl(): Type_declContext {
		let _localctx: Type_declContext = new Type_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, IDLParser.RULE_type_decl);
		try {
			this.state = 609;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 601;
				this.match(IDLParser.KW_TYPEDEF);
				this.state = 602;
				this.type_declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 603;
				this.struct_type();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 604;
				this.union_type();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 605;
				this.enum_type();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 606;
				this.match(IDLParser.KW_NATIVE);
				this.state = 607;
				this.simple_declarator();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 608;
				this.constr_forward_decl();
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
	public type_declarator(): Type_declaratorContext {
		let _localctx: Type_declaratorContext = new Type_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, IDLParser.RULE_type_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 611;
			this.type_spec();
			this.state = 612;
			this.declarators();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_spec(): Type_specContext {
		let _localctx: Type_specContext = new Type_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, IDLParser.RULE_type_spec);
		try {
			this.state = 616;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.DOUBLE_COLON:
			case IDLParser.KW_STRING:
			case IDLParser.KW_OCTET:
			case IDLParser.KW_SEQUENCE:
			case IDLParser.KW_WCHAR:
			case IDLParser.KW_SHORT:
			case IDLParser.KW_LONG:
			case IDLParser.KW_WSTRING:
			case IDLParser.KW_VALUEBASE:
			case IDLParser.KW_OBJECT:
			case IDLParser.KW_UNSIGNED:
			case IDLParser.KW_FIXED:
			case IDLParser.KW_ANY:
			case IDLParser.KW_CHAR:
			case IDLParser.KW_FLOAT:
			case IDLParser.KW_BOOLEAN:
			case IDLParser.KW_DOUBLE:
			case IDLParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 614;
				this.simple_type_spec();
				}
				break;
			case IDLParser.KW_STRUCT:
			case IDLParser.KW_ENUM:
			case IDLParser.KW_UNION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 615;
				this.constr_type_spec();
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
	public simple_type_spec(): Simple_type_specContext {
		let _localctx: Simple_type_specContext = new Simple_type_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, IDLParser.RULE_simple_type_spec);
		try {
			this.state = 621;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.KW_OCTET:
			case IDLParser.KW_WCHAR:
			case IDLParser.KW_SHORT:
			case IDLParser.KW_LONG:
			case IDLParser.KW_VALUEBASE:
			case IDLParser.KW_OBJECT:
			case IDLParser.KW_UNSIGNED:
			case IDLParser.KW_ANY:
			case IDLParser.KW_CHAR:
			case IDLParser.KW_FLOAT:
			case IDLParser.KW_BOOLEAN:
			case IDLParser.KW_DOUBLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 618;
				this.base_type_spec();
				}
				break;
			case IDLParser.KW_STRING:
			case IDLParser.KW_SEQUENCE:
			case IDLParser.KW_WSTRING:
			case IDLParser.KW_FIXED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 619;
				this.template_type_spec();
				}
				break;
			case IDLParser.DOUBLE_COLON:
			case IDLParser.ID:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 620;
				this.scoped_name();
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
	public base_type_spec(): Base_type_specContext {
		let _localctx: Base_type_specContext = new Base_type_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, IDLParser.RULE_base_type_spec);
		try {
			this.state = 632;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 623;
				this.floating_pt_type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 624;
				this.integer_type();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 625;
				this.char_type();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 626;
				this.wide_char_type();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 627;
				this.boolean_type();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 628;
				this.octet_type();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 629;
				this.any_type();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 630;
				this.object_type();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 631;
				this.value_base_type();
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
	public template_type_spec(): Template_type_specContext {
		let _localctx: Template_type_specContext = new Template_type_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, IDLParser.RULE_template_type_spec);
		try {
			this.state = 638;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.KW_SEQUENCE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 634;
				this.sequence_type();
				}
				break;
			case IDLParser.KW_STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 635;
				this.string_type();
				}
				break;
			case IDLParser.KW_WSTRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 636;
				this.wide_string_type();
				}
				break;
			case IDLParser.KW_FIXED:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 637;
				this.fixed_pt_type();
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
	public constr_type_spec(): Constr_type_specContext {
		let _localctx: Constr_type_specContext = new Constr_type_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, IDLParser.RULE_constr_type_spec);
		try {
			this.state = 643;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.KW_STRUCT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 640;
				this.struct_type();
				}
				break;
			case IDLParser.KW_UNION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 641;
				this.union_type();
				}
				break;
			case IDLParser.KW_ENUM:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 642;
				this.enum_type();
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
	public declarators(): DeclaratorsContext {
		let _localctx: DeclaratorsContext = new DeclaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, IDLParser.RULE_declarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			this.declarator();
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IDLParser.COMA) {
				{
				{
				this.state = 646;
				this.match(IDLParser.COMA);
				this.state = 647;
				this.declarator();
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
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, IDLParser.RULE_declarator);
		try {
			this.state = 655;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 653;
				this.simple_declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 654;
				this.complex_declarator();
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
	public simple_declarator(): Simple_declaratorContext {
		let _localctx: Simple_declaratorContext = new Simple_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, IDLParser.RULE_simple_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 657;
			this.match(IDLParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public complex_declarator(): Complex_declaratorContext {
		let _localctx: Complex_declaratorContext = new Complex_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, IDLParser.RULE_complex_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 659;
			this.array_declarator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floating_pt_type(): Floating_pt_typeContext {
		let _localctx: Floating_pt_typeContext = new Floating_pt_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, IDLParser.RULE_floating_pt_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 665;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.KW_FLOAT:
				{
				this.state = 661;
				this.match(IDLParser.KW_FLOAT);
				}
				break;
			case IDLParser.KW_DOUBLE:
				{
				this.state = 662;
				this.match(IDLParser.KW_DOUBLE);
				}
				break;
			case IDLParser.KW_LONG:
				{
				this.state = 663;
				this.match(IDLParser.KW_LONG);
				this.state = 664;
				this.match(IDLParser.KW_DOUBLE);
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
	public integer_type(): Integer_typeContext {
		let _localctx: Integer_typeContext = new Integer_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, IDLParser.RULE_integer_type);
		try {
			this.state = 669;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.KW_SHORT:
			case IDLParser.KW_LONG:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 667;
				this.signed_int();
				}
				break;
			case IDLParser.KW_UNSIGNED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 668;
				this.unsigned_int();
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
	public signed_int(): Signed_intContext {
		let _localctx: Signed_intContext = new Signed_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, IDLParser.RULE_signed_int);
		try {
			this.state = 674;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 671;
				this.signed_short_int();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 672;
				this.signed_long_int();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 673;
				this.signed_longlong_int();
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
	public signed_short_int(): Signed_short_intContext {
		let _localctx: Signed_short_intContext = new Signed_short_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, IDLParser.RULE_signed_short_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 676;
			this.match(IDLParser.KW_SHORT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signed_long_int(): Signed_long_intContext {
		let _localctx: Signed_long_intContext = new Signed_long_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, IDLParser.RULE_signed_long_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 678;
			this.match(IDLParser.KW_LONG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signed_longlong_int(): Signed_longlong_intContext {
		let _localctx: Signed_longlong_intContext = new Signed_longlong_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, IDLParser.RULE_signed_longlong_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 680;
			this.match(IDLParser.KW_LONG);
			this.state = 681;
			this.match(IDLParser.KW_LONG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unsigned_int(): Unsigned_intContext {
		let _localctx: Unsigned_intContext = new Unsigned_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, IDLParser.RULE_unsigned_int);
		try {
			this.state = 686;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 683;
				this.unsigned_short_int();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 684;
				this.unsigned_long_int();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 685;
				this.unsigned_longlong_int();
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
	public unsigned_short_int(): Unsigned_short_intContext {
		let _localctx: Unsigned_short_intContext = new Unsigned_short_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, IDLParser.RULE_unsigned_short_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 688;
			this.match(IDLParser.KW_UNSIGNED);
			this.state = 689;
			this.match(IDLParser.KW_SHORT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unsigned_long_int(): Unsigned_long_intContext {
		let _localctx: Unsigned_long_intContext = new Unsigned_long_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, IDLParser.RULE_unsigned_long_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 691;
			this.match(IDLParser.KW_UNSIGNED);
			this.state = 692;
			this.match(IDLParser.KW_LONG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unsigned_longlong_int(): Unsigned_longlong_intContext {
		let _localctx: Unsigned_longlong_intContext = new Unsigned_longlong_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, IDLParser.RULE_unsigned_longlong_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 694;
			this.match(IDLParser.KW_UNSIGNED);
			this.state = 695;
			this.match(IDLParser.KW_LONG);
			this.state = 696;
			this.match(IDLParser.KW_LONG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public char_type(): Char_typeContext {
		let _localctx: Char_typeContext = new Char_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, IDLParser.RULE_char_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 698;
			this.match(IDLParser.KW_CHAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wide_char_type(): Wide_char_typeContext {
		let _localctx: Wide_char_typeContext = new Wide_char_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, IDLParser.RULE_wide_char_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
			this.match(IDLParser.KW_WCHAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolean_type(): Boolean_typeContext {
		let _localctx: Boolean_typeContext = new Boolean_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, IDLParser.RULE_boolean_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 702;
			this.match(IDLParser.KW_BOOLEAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public octet_type(): Octet_typeContext {
		let _localctx: Octet_typeContext = new Octet_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, IDLParser.RULE_octet_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 704;
			this.match(IDLParser.KW_OCTET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public any_type(): Any_typeContext {
		let _localctx: Any_typeContext = new Any_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, IDLParser.RULE_any_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 706;
			this.match(IDLParser.KW_ANY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public object_type(): Object_typeContext {
		let _localctx: Object_typeContext = new Object_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, IDLParser.RULE_object_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this.match(IDLParser.KW_OBJECT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public struct_type(): Struct_typeContext {
		let _localctx: Struct_typeContext = new Struct_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, IDLParser.RULE_struct_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			this.match(IDLParser.KW_STRUCT);
			this.state = 711;
			this.match(IDLParser.ID);
			this.state = 712;
			this.match(IDLParser.LEFT_BRACE);
			this.state = 713;
			this.member_list();
			this.state = 714;
			this.match(IDLParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public member_list(): Member_listContext {
		let _localctx: Member_listContext = new Member_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, IDLParser.RULE_member_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 717;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 716;
				this.member();
				}
				}
				this.state = 719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IDLParser.DOUBLE_COLON - 32)) | (1 << (IDLParser.KW_STRING - 32)) | (1 << (IDLParser.KW_OCTET - 32)) | (1 << (IDLParser.KW_SEQUENCE - 32)) | (1 << (IDLParser.KW_STRUCT - 32)) | (1 << (IDLParser.KW_WCHAR - 32)) | (1 << (IDLParser.KW_SHORT - 32)) | (1 << (IDLParser.KW_LONG - 32)) | (1 << (IDLParser.KW_ENUM - 32)) | (1 << (IDLParser.KW_WSTRING - 32)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (IDLParser.KW_VALUEBASE - 70)) | (1 << (IDLParser.KW_OBJECT - 70)) | (1 << (IDLParser.KW_UNSIGNED - 70)) | (1 << (IDLParser.KW_FIXED - 70)) | (1 << (IDLParser.KW_UNION - 70)) | (1 << (IDLParser.KW_ANY - 70)) | (1 << (IDLParser.KW_CHAR - 70)) | (1 << (IDLParser.KW_FLOAT - 70)) | (1 << (IDLParser.KW_BOOLEAN - 70)) | (1 << (IDLParser.KW_DOUBLE - 70)) | (1 << (IDLParser.ID - 70)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public member(): MemberContext {
		let _localctx: MemberContext = new MemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, IDLParser.RULE_member);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 721;
			this.type_spec();
			this.state = 722;
			this.declarators();
			this.state = 723;
			this.match(IDLParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public union_type(): Union_typeContext {
		let _localctx: Union_typeContext = new Union_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, IDLParser.RULE_union_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
			this.match(IDLParser.KW_UNION);
			this.state = 726;
			this.match(IDLParser.ID);
			this.state = 727;
			this.match(IDLParser.KW_SWITCH);
			this.state = 728;
			this.match(IDLParser.LEFT_BRACKET);
			this.state = 729;
			this.switch_type_spec();
			this.state = 730;
			this.match(IDLParser.RIGHT_BRACKET);
			this.state = 731;
			this.match(IDLParser.LEFT_BRACE);
			this.state = 732;
			this.switch_body();
			this.state = 733;
			this.match(IDLParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switch_type_spec(): Switch_type_specContext {
		let _localctx: Switch_type_specContext = new Switch_type_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, IDLParser.RULE_switch_type_spec);
		try {
			this.state = 740;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.KW_SHORT:
			case IDLParser.KW_LONG:
			case IDLParser.KW_UNSIGNED:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 735;
				this.integer_type();
				}
				break;
			case IDLParser.KW_CHAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 736;
				this.char_type();
				}
				break;
			case IDLParser.KW_BOOLEAN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 737;
				this.boolean_type();
				}
				break;
			case IDLParser.KW_ENUM:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 738;
				this.enum_type();
				}
				break;
			case IDLParser.DOUBLE_COLON:
			case IDLParser.ID:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 739;
				this.scoped_name();
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
	public switch_body(): Switch_bodyContext {
		let _localctx: Switch_bodyContext = new Switch_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, IDLParser.RULE_switch_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 742;
				this.case_stmt();
				}
				}
				this.state = 745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === IDLParser.KW_DEFAULT || _la === IDLParser.KW_CASE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public case_stmt(): Case_stmtContext {
		let _localctx: Case_stmtContext = new Case_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, IDLParser.RULE_case_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 747;
				this.case_label();
				}
				}
				this.state = 750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === IDLParser.KW_DEFAULT || _la === IDLParser.KW_CASE);
			this.state = 752;
			this.element_spec();
			this.state = 753;
			this.match(IDLParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public case_label(): Case_labelContext {
		let _localctx: Case_labelContext = new Case_labelContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, IDLParser.RULE_case_label);
		try {
			this.state = 761;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.KW_CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 755;
				this.match(IDLParser.KW_CASE);
				this.state = 756;
				this.const_exp();
				this.state = 757;
				this.match(IDLParser.COLON);
				}
				break;
			case IDLParser.KW_DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 759;
				this.match(IDLParser.KW_DEFAULT);
				this.state = 760;
				this.match(IDLParser.COLON);
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
	public element_spec(): Element_specContext {
		let _localctx: Element_specContext = new Element_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, IDLParser.RULE_element_spec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 763;
			this.type_spec();
			this.state = 764;
			this.declarator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enum_type(): Enum_typeContext {
		let _localctx: Enum_typeContext = new Enum_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, IDLParser.RULE_enum_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 766;
			this.match(IDLParser.KW_ENUM);
			this.state = 767;
			this.match(IDLParser.ID);
			this.state = 768;
			this.match(IDLParser.LEFT_BRACE);
			this.state = 769;
			this.enumerator();
			this.state = 774;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IDLParser.COMA) {
				{
				{
				this.state = 770;
				this.match(IDLParser.COMA);
				this.state = 771;
				this.enumerator();
				}
				}
				this.state = 776;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 777;
			this.match(IDLParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumerator(): EnumeratorContext {
		let _localctx: EnumeratorContext = new EnumeratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, IDLParser.RULE_enumerator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 779;
			this.match(IDLParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sequence_type(): Sequence_typeContext {
		let _localctx: Sequence_typeContext = new Sequence_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, IDLParser.RULE_sequence_type);
		try {
			this.state = 793;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 781;
				this.match(IDLParser.KW_SEQUENCE);
				this.state = 782;
				this.match(IDLParser.LEFT_ANG_BRACKET);
				this.state = 783;
				this.simple_type_spec();
				this.state = 784;
				this.match(IDLParser.COMA);
				this.state = 785;
				this.positive_int_const();
				this.state = 786;
				this.match(IDLParser.RIGHT_ANG_BRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 788;
				this.match(IDLParser.KW_SEQUENCE);
				this.state = 789;
				this.match(IDLParser.LEFT_ANG_BRACKET);
				this.state = 790;
				this.simple_type_spec();
				this.state = 791;
				this.match(IDLParser.RIGHT_ANG_BRACKET);
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
	public string_type(): String_typeContext {
		let _localctx: String_typeContext = new String_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, IDLParser.RULE_string_type);
		try {
			this.state = 801;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 795;
				this.match(IDLParser.KW_STRING);
				this.state = 796;
				this.match(IDLParser.LEFT_ANG_BRACKET);
				this.state = 797;
				this.positive_int_const();
				this.state = 798;
				this.match(IDLParser.RIGHT_ANG_BRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 800;
				this.match(IDLParser.KW_STRING);
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
	public wide_string_type(): Wide_string_typeContext {
		let _localctx: Wide_string_typeContext = new Wide_string_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, IDLParser.RULE_wide_string_type);
		try {
			this.state = 809;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 803;
				this.match(IDLParser.KW_WSTRING);
				this.state = 804;
				this.match(IDLParser.LEFT_ANG_BRACKET);
				this.state = 805;
				this.positive_int_const();
				this.state = 806;
				this.match(IDLParser.RIGHT_ANG_BRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 808;
				this.match(IDLParser.KW_WSTRING);
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
	public array_declarator(): Array_declaratorContext {
		let _localctx: Array_declaratorContext = new Array_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, IDLParser.RULE_array_declarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 811;
			this.match(IDLParser.ID);
			this.state = 813;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 812;
				this.fixed_array_size();
				}
				}
				this.state = 815;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === IDLParser.LEFT_SQUARE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fixed_array_size(): Fixed_array_sizeContext {
		let _localctx: Fixed_array_sizeContext = new Fixed_array_sizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, IDLParser.RULE_fixed_array_size);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 817;
			this.match(IDLParser.LEFT_SQUARE_BRACKET);
			this.state = 818;
			this.positive_int_const();
			this.state = 819;
			this.match(IDLParser.RIGHT_SQUARE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attr_decl(): Attr_declContext {
		let _localctx: Attr_declContext = new Attr_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, IDLParser.RULE_attr_decl);
		try {
			this.state = 823;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.KW_READONLY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 821;
				this.readonly_attr_spec();
				}
				break;
			case IDLParser.KW_ATTRIBUTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 822;
				this.attr_spec();
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
	public except_decl(): Except_declContext {
		let _localctx: Except_declContext = new Except_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, IDLParser.RULE_except_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 825;
			this.match(IDLParser.KW_EXCEPTION);
			this.state = 826;
			this.match(IDLParser.ID);
			this.state = 827;
			this.match(IDLParser.LEFT_BRACE);
			this.state = 831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IDLParser.DOUBLE_COLON - 32)) | (1 << (IDLParser.KW_STRING - 32)) | (1 << (IDLParser.KW_OCTET - 32)) | (1 << (IDLParser.KW_SEQUENCE - 32)) | (1 << (IDLParser.KW_STRUCT - 32)) | (1 << (IDLParser.KW_WCHAR - 32)) | (1 << (IDLParser.KW_SHORT - 32)) | (1 << (IDLParser.KW_LONG - 32)) | (1 << (IDLParser.KW_ENUM - 32)) | (1 << (IDLParser.KW_WSTRING - 32)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (IDLParser.KW_VALUEBASE - 70)) | (1 << (IDLParser.KW_OBJECT - 70)) | (1 << (IDLParser.KW_UNSIGNED - 70)) | (1 << (IDLParser.KW_FIXED - 70)) | (1 << (IDLParser.KW_UNION - 70)) | (1 << (IDLParser.KW_ANY - 70)) | (1 << (IDLParser.KW_CHAR - 70)) | (1 << (IDLParser.KW_FLOAT - 70)) | (1 << (IDLParser.KW_BOOLEAN - 70)) | (1 << (IDLParser.KW_DOUBLE - 70)) | (1 << (IDLParser.ID - 70)))) !== 0)) {
				{
				{
				this.state = 828;
				this.member();
				}
				}
				this.state = 833;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 834;
			this.match(IDLParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public op_decl(): Op_declContext {
		let _localctx: Op_declContext = new Op_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, IDLParser.RULE_op_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 837;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_ONEWAY) {
				{
				this.state = 836;
				this.op_attribute();
				}
			}

			this.state = 839;
			this.op_type_spec();
			this.state = 840;
			this.match(IDLParser.ID);
			this.state = 841;
			this.parameter_decls();
			this.state = 843;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_RAISES) {
				{
				this.state = 842;
				this.raises_expr();
				}
			}

			this.state = 846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_CONTEXT) {
				{
				this.state = 845;
				this.context_expr();
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
	public op_attribute(): Op_attributeContext {
		let _localctx: Op_attributeContext = new Op_attributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, IDLParser.RULE_op_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 848;
			this.match(IDLParser.KW_ONEWAY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public op_type_spec(): Op_type_specContext {
		let _localctx: Op_type_specContext = new Op_type_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, IDLParser.RULE_op_type_spec);
		try {
			this.state = 852;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.DOUBLE_COLON:
			case IDLParser.KW_STRING:
			case IDLParser.KW_OCTET:
			case IDLParser.KW_WCHAR:
			case IDLParser.KW_SHORT:
			case IDLParser.KW_LONG:
			case IDLParser.KW_WSTRING:
			case IDLParser.KW_VALUEBASE:
			case IDLParser.KW_OBJECT:
			case IDLParser.KW_UNSIGNED:
			case IDLParser.KW_ANY:
			case IDLParser.KW_CHAR:
			case IDLParser.KW_FLOAT:
			case IDLParser.KW_BOOLEAN:
			case IDLParser.KW_DOUBLE:
			case IDLParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 850;
				this.param_type_spec();
				}
				break;
			case IDLParser.KW_VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 851;
				this.match(IDLParser.KW_VOID);
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
	public parameter_decls(): Parameter_declsContext {
		let _localctx: Parameter_declsContext = new Parameter_declsContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, IDLParser.RULE_parameter_decls);
		let _la: number;
		try {
			this.state = 867;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 854;
				this.match(IDLParser.LEFT_BRACKET);
				this.state = 855;
				this.param_decl();
				this.state = 860;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === IDLParser.COMA) {
					{
					{
					this.state = 856;
					this.match(IDLParser.COMA);
					this.state = 857;
					this.param_decl();
					}
					}
					this.state = 862;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 863;
				this.match(IDLParser.RIGHT_BRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 865;
				this.match(IDLParser.LEFT_BRACKET);
				this.state = 866;
				this.match(IDLParser.RIGHT_BRACKET);
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
	public param_decl(): Param_declContext {
		let _localctx: Param_declContext = new Param_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, IDLParser.RULE_param_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 869;
			this.param_attribute();
			this.state = 870;
			this.param_type_spec();
			this.state = 871;
			this.simple_declarator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param_attribute(): Param_attributeContext {
		let _localctx: Param_attributeContext = new Param_attributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, IDLParser.RULE_param_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 873;
			_la = this._input.LA(1);
			if (!(_la === IDLParser.KW_OUT || _la === IDLParser.KW_IN || _la === IDLParser.KW_INOUT)) {
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
	public raises_expr(): Raises_exprContext {
		let _localctx: Raises_exprContext = new Raises_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, IDLParser.RULE_raises_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 875;
			this.match(IDLParser.KW_RAISES);
			this.state = 876;
			this.match(IDLParser.LEFT_BRACKET);
			this.state = 877;
			this.scoped_name();
			this.state = 882;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IDLParser.COMA) {
				{
				{
				this.state = 878;
				this.match(IDLParser.COMA);
				this.state = 879;
				this.scoped_name();
				}
				}
				this.state = 884;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 885;
			this.match(IDLParser.RIGHT_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public context_expr(): Context_exprContext {
		let _localctx: Context_exprContext = new Context_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, IDLParser.RULE_context_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 887;
			this.match(IDLParser.KW_CONTEXT);
			this.state = 888;
			this.match(IDLParser.LEFT_BRACKET);
			this.state = 889;
			this.match(IDLParser.STRING_LITERAL);
			this.state = 894;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IDLParser.COMA) {
				{
				{
				this.state = 890;
				this.match(IDLParser.COMA);
				this.state = 891;
				this.match(IDLParser.STRING_LITERAL);
				}
				}
				this.state = 896;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 897;
			this.match(IDLParser.RIGHT_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param_type_spec(): Param_type_specContext {
		let _localctx: Param_type_specContext = new Param_type_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, IDLParser.RULE_param_type_spec);
		try {
			this.state = 903;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.KW_OCTET:
			case IDLParser.KW_WCHAR:
			case IDLParser.KW_SHORT:
			case IDLParser.KW_LONG:
			case IDLParser.KW_VALUEBASE:
			case IDLParser.KW_OBJECT:
			case IDLParser.KW_UNSIGNED:
			case IDLParser.KW_ANY:
			case IDLParser.KW_CHAR:
			case IDLParser.KW_FLOAT:
			case IDLParser.KW_BOOLEAN:
			case IDLParser.KW_DOUBLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 899;
				this.base_type_spec();
				}
				break;
			case IDLParser.KW_STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 900;
				this.string_type();
				}
				break;
			case IDLParser.KW_WSTRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 901;
				this.wide_string_type();
				}
				break;
			case IDLParser.DOUBLE_COLON:
			case IDLParser.ID:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 902;
				this.scoped_name();
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
	public fixed_pt_type(): Fixed_pt_typeContext {
		let _localctx: Fixed_pt_typeContext = new Fixed_pt_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, IDLParser.RULE_fixed_pt_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 905;
			this.match(IDLParser.KW_FIXED);
			this.state = 906;
			this.match(IDLParser.LEFT_ANG_BRACKET);
			this.state = 907;
			this.positive_int_const();
			this.state = 908;
			this.match(IDLParser.COMA);
			this.state = 909;
			this.positive_int_const();
			this.state = 910;
			this.match(IDLParser.RIGHT_ANG_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fixed_pt_const_type(): Fixed_pt_const_typeContext {
		let _localctx: Fixed_pt_const_typeContext = new Fixed_pt_const_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, IDLParser.RULE_fixed_pt_const_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 912;
			this.match(IDLParser.KW_FIXED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value_base_type(): Value_base_typeContext {
		let _localctx: Value_base_typeContext = new Value_base_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, IDLParser.RULE_value_base_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 914;
			this.match(IDLParser.KW_VALUEBASE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constr_forward_decl(): Constr_forward_declContext {
		let _localctx: Constr_forward_declContext = new Constr_forward_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, IDLParser.RULE_constr_forward_decl);
		try {
			this.state = 920;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.KW_STRUCT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 916;
				this.match(IDLParser.KW_STRUCT);
				this.state = 917;
				this.match(IDLParser.ID);
				}
				break;
			case IDLParser.KW_UNION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 918;
				this.match(IDLParser.KW_UNION);
				this.state = 919;
				this.match(IDLParser.ID);
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
	public import_decl(): Import_declContext {
		let _localctx: Import_declContext = new Import_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, IDLParser.RULE_import_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 922;
			this.match(IDLParser.KW_IMPORT);
			this.state = 923;
			this.imported_scope();
			this.state = 924;
			this.match(IDLParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imported_scope(): Imported_scopeContext {
		let _localctx: Imported_scopeContext = new Imported_scopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, IDLParser.RULE_imported_scope);
		try {
			this.state = 928;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.DOUBLE_COLON:
			case IDLParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 926;
				this.scoped_name();
				}
				break;
			case IDLParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 927;
				this.match(IDLParser.STRING_LITERAL);
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
	public type_id_decl(): Type_id_declContext {
		let _localctx: Type_id_declContext = new Type_id_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, IDLParser.RULE_type_id_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 930;
			this.match(IDLParser.KW_TYPEID);
			this.state = 931;
			this.scoped_name();
			this.state = 932;
			this.match(IDLParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_prefix_decl(): Type_prefix_declContext {
		let _localctx: Type_prefix_declContext = new Type_prefix_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, IDLParser.RULE_type_prefix_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 934;
			this.match(IDLParser.KW_TYPEPREFIX);
			this.state = 935;
			this.scoped_name();
			this.state = 936;
			this.match(IDLParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public readonly_attr_spec(): Readonly_attr_specContext {
		let _localctx: Readonly_attr_specContext = new Readonly_attr_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, IDLParser.RULE_readonly_attr_spec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 938;
			this.match(IDLParser.KW_READONLY);
			this.state = 939;
			this.match(IDLParser.KW_ATTRIBUTE);
			this.state = 940;
			this.param_type_spec();
			this.state = 941;
			this.readonly_attr_declarator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public readonly_attr_declarator(): Readonly_attr_declaratorContext {
		let _localctx: Readonly_attr_declaratorContext = new Readonly_attr_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, IDLParser.RULE_readonly_attr_declarator);
		let _la: number;
		try {
			this.state = 954;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 943;
				this.simple_declarator();
				this.state = 944;
				this.raises_expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 946;
				this.simple_declarator();
				this.state = 951;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === IDLParser.COMA) {
					{
					{
					this.state = 947;
					this.match(IDLParser.COMA);
					this.state = 948;
					this.simple_declarator();
					}
					}
					this.state = 953;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
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
	public attr_spec(): Attr_specContext {
		let _localctx: Attr_specContext = new Attr_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, IDLParser.RULE_attr_spec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 956;
			this.match(IDLParser.KW_ATTRIBUTE);
			this.state = 957;
			this.param_type_spec();
			this.state = 958;
			this.attr_declarator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attr_declarator(): Attr_declaratorContext {
		let _localctx: Attr_declaratorContext = new Attr_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, IDLParser.RULE_attr_declarator);
		let _la: number;
		try {
			this.state = 971;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 960;
				this.simple_declarator();
				this.state = 961;
				this.attr_raises_expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 963;
				this.simple_declarator();
				this.state = 968;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === IDLParser.COMA) {
					{
					{
					this.state = 964;
					this.match(IDLParser.COMA);
					this.state = 965;
					this.simple_declarator();
					}
					}
					this.state = 970;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
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
	public attr_raises_expr(): Attr_raises_exprContext {
		let _localctx: Attr_raises_exprContext = new Attr_raises_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, IDLParser.RULE_attr_raises_expr);
		let _la: number;
		try {
			this.state = 978;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.KW_GETRAISES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 973;
				this.get_excep_expr();
				this.state = 975;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === IDLParser.KW_SETRAISES) {
					{
					this.state = 974;
					this.set_excep_expr();
					}
				}

				}
				break;
			case IDLParser.KW_SETRAISES:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 977;
				this.set_excep_expr();
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
	public get_excep_expr(): Get_excep_exprContext {
		let _localctx: Get_excep_exprContext = new Get_excep_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, IDLParser.RULE_get_excep_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 980;
			this.match(IDLParser.KW_GETRAISES);
			this.state = 981;
			this.exception_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public set_excep_expr(): Set_excep_exprContext {
		let _localctx: Set_excep_exprContext = new Set_excep_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, IDLParser.RULE_set_excep_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 983;
			this.match(IDLParser.KW_SETRAISES);
			this.state = 984;
			this.exception_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exception_list(): Exception_listContext {
		let _localctx: Exception_listContext = new Exception_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, IDLParser.RULE_exception_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 986;
			this.match(IDLParser.LEFT_BRACKET);
			this.state = 987;
			this.scoped_name();
			this.state = 992;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IDLParser.COMA) {
				{
				{
				this.state = 988;
				this.match(IDLParser.COMA);
				this.state = 989;
				this.scoped_name();
				}
				}
				this.state = 994;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 995;
			this.match(IDLParser.RIGHT_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public component(): ComponentContext {
		let _localctx: ComponentContext = new ComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, IDLParser.RULE_component);
		try {
			this.state = 999;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 997;
				this.component_decl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 998;
				this.component_forward_decl();
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
	public component_forward_decl(): Component_forward_declContext {
		let _localctx: Component_forward_declContext = new Component_forward_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, IDLParser.RULE_component_forward_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1001;
			this.match(IDLParser.KW_COMPONENT);
			this.state = 1002;
			this.match(IDLParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public component_decl(): Component_declContext {
		let _localctx: Component_declContext = new Component_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, IDLParser.RULE_component_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1004;
			this.component_header();
			this.state = 1005;
			this.match(IDLParser.LEFT_BRACE);
			this.state = 1006;
			this.component_body();
			this.state = 1007;
			this.match(IDLParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public component_header(): Component_headerContext {
		let _localctx: Component_headerContext = new Component_headerContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, IDLParser.RULE_component_header);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1009;
			this.match(IDLParser.KW_COMPONENT);
			this.state = 1010;
			this.match(IDLParser.ID);
			this.state = 1012;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.COLON) {
				{
				this.state = 1011;
				this.component_inheritance_spec();
				}
			}

			this.state = 1015;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_SUPPORTS) {
				{
				this.state = 1014;
				this.supported_interface_spec();
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
	public supported_interface_spec(): Supported_interface_specContext {
		let _localctx: Supported_interface_specContext = new Supported_interface_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, IDLParser.RULE_supported_interface_spec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1017;
			this.match(IDLParser.KW_SUPPORTS);
			this.state = 1018;
			this.scoped_name();
			this.state = 1023;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IDLParser.COMA) {
				{
				{
				this.state = 1019;
				this.match(IDLParser.COMA);
				this.state = 1020;
				this.scoped_name();
				}
				}
				this.state = 1025;
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
	public component_inheritance_spec(): Component_inheritance_specContext {
		let _localctx: Component_inheritance_specContext = new Component_inheritance_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, IDLParser.RULE_component_inheritance_spec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1026;
			this.match(IDLParser.COLON);
			this.state = 1027;
			this.scoped_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public component_body(): Component_bodyContext {
		let _localctx: Component_bodyContext = new Component_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, IDLParser.RULE_component_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1032;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (IDLParser.KW_EMITS - 37)) | (1 << (IDLParser.KW_PUBLISHES - 37)) | (1 << (IDLParser.KW_USES - 37)) | (1 << (IDLParser.KW_READONLY - 37)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (IDLParser.KW_PROVIDES - 88)) | (1 << (IDLParser.KW_CONSUMES - 88)) | (1 << (IDLParser.KW_ATTRIBUTE - 88)))) !== 0)) {
				{
				{
				this.state = 1029;
				this.component_export();
				}
				}
				this.state = 1034;
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
	public component_export(): Component_exportContext {
		let _localctx: Component_exportContext = new Component_exportContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, IDLParser.RULE_component_export);
		try {
			this.state = 1053;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.KW_PROVIDES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1035;
				this.provides_decl();
				this.state = 1036;
				this.match(IDLParser.SEMICOLON);
				}
				break;
			case IDLParser.KW_USES:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1038;
				this.uses_decl();
				this.state = 1039;
				this.match(IDLParser.SEMICOLON);
				}
				break;
			case IDLParser.KW_EMITS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1041;
				this.emits_decl();
				this.state = 1042;
				this.match(IDLParser.SEMICOLON);
				}
				break;
			case IDLParser.KW_PUBLISHES:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1044;
				this.publishes_decl();
				this.state = 1045;
				this.match(IDLParser.SEMICOLON);
				}
				break;
			case IDLParser.KW_CONSUMES:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1047;
				this.consumes_decl();
				this.state = 1048;
				this.match(IDLParser.SEMICOLON);
				}
				break;
			case IDLParser.KW_READONLY:
			case IDLParser.KW_ATTRIBUTE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1050;
				this.attr_decl();
				this.state = 1051;
				this.match(IDLParser.SEMICOLON);
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
	public provides_decl(): Provides_declContext {
		let _localctx: Provides_declContext = new Provides_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, IDLParser.RULE_provides_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1055;
			this.match(IDLParser.KW_PROVIDES);
			this.state = 1056;
			this.interface_type();
			this.state = 1057;
			this.match(IDLParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interface_type(): Interface_typeContext {
		let _localctx: Interface_typeContext = new Interface_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, IDLParser.RULE_interface_type);
		try {
			this.state = 1061;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.DOUBLE_COLON:
			case IDLParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1059;
				this.scoped_name();
				}
				break;
			case IDLParser.KW_OBJECT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1060;
				this.match(IDLParser.KW_OBJECT);
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
	public uses_decl(): Uses_declContext {
		let _localctx: Uses_declContext = new Uses_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, IDLParser.RULE_uses_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1063;
			this.match(IDLParser.KW_USES);
			this.state = 1065;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_MULTIPLE) {
				{
				this.state = 1064;
				this.match(IDLParser.KW_MULTIPLE);
				}
			}

			this.state = 1067;
			this.interface_type();
			this.state = 1068;
			this.match(IDLParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emits_decl(): Emits_declContext {
		let _localctx: Emits_declContext = new Emits_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, IDLParser.RULE_emits_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1070;
			this.match(IDLParser.KW_EMITS);
			this.state = 1071;
			this.scoped_name();
			this.state = 1072;
			this.match(IDLParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public publishes_decl(): Publishes_declContext {
		let _localctx: Publishes_declContext = new Publishes_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, IDLParser.RULE_publishes_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1074;
			this.match(IDLParser.KW_PUBLISHES);
			this.state = 1075;
			this.scoped_name();
			this.state = 1076;
			this.match(IDLParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public consumes_decl(): Consumes_declContext {
		let _localctx: Consumes_declContext = new Consumes_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, IDLParser.RULE_consumes_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1078;
			this.match(IDLParser.KW_CONSUMES);
			this.state = 1079;
			this.scoped_name();
			this.state = 1080;
			this.match(IDLParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public home_decl(): Home_declContext {
		let _localctx: Home_declContext = new Home_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, IDLParser.RULE_home_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1082;
			this.home_header();
			this.state = 1083;
			this.home_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public home_header(): Home_headerContext {
		let _localctx: Home_headerContext = new Home_headerContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, IDLParser.RULE_home_header);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1085;
			this.match(IDLParser.KW_HOME);
			this.state = 1086;
			this.match(IDLParser.ID);
			this.state = 1088;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.COLON) {
				{
				this.state = 1087;
				this.home_inheritance_spec();
				}
			}

			this.state = 1091;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_SUPPORTS) {
				{
				this.state = 1090;
				this.supported_interface_spec();
				}
			}

			this.state = 1093;
			this.match(IDLParser.KW_MANAGES);
			this.state = 1094;
			this.scoped_name();
			this.state = 1096;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_PRIMARYKEY) {
				{
				this.state = 1095;
				this.primary_key_spec();
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
	public home_inheritance_spec(): Home_inheritance_specContext {
		let _localctx: Home_inheritance_specContext = new Home_inheritance_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, IDLParser.RULE_home_inheritance_spec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1098;
			this.match(IDLParser.COLON);
			this.state = 1099;
			this.scoped_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary_key_spec(): Primary_key_specContext {
		let _localctx: Primary_key_specContext = new Primary_key_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, IDLParser.RULE_primary_key_spec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1101;
			this.match(IDLParser.KW_PRIMARYKEY);
			this.state = 1102;
			this.scoped_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public home_body(): Home_bodyContext {
		let _localctx: Home_bodyContext = new Home_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, IDLParser.RULE_home_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1104;
			this.match(IDLParser.LEFT_BRACE);
			this.state = 1108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IDLParser.DOUBLE_COLON - 32)) | (1 << (IDLParser.KW_STRING - 32)) | (1 << (IDLParser.KW_TYPEDEF - 32)) | (1 << (IDLParser.KW_OCTET - 32)) | (1 << (IDLParser.KW_STRUCT - 32)) | (1 << (IDLParser.KW_NATIVE - 32)) | (1 << (IDLParser.KW_READONLY - 32)) | (1 << (IDLParser.KW_FINDER - 32)) | (1 << (IDLParser.KW_VOID - 32)) | (1 << (IDLParser.KW_WCHAR - 32)) | (1 << (IDLParser.KW_SHORT - 32)) | (1 << (IDLParser.KW_LONG - 32)) | (1 << (IDLParser.KW_ENUM - 32)) | (1 << (IDLParser.KW_WSTRING - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (IDLParser.KW_FACTORY - 66)) | (1 << (IDLParser.KW_EXCEPTION - 66)) | (1 << (IDLParser.KW_CONST - 66)) | (1 << (IDLParser.KW_VALUEBASE - 66)) | (1 << (IDLParser.KW_OBJECT - 66)) | (1 << (IDLParser.KW_UNSIGNED - 66)) | (1 << (IDLParser.KW_UNION - 66)) | (1 << (IDLParser.KW_ONEWAY - 66)) | (1 << (IDLParser.KW_ANY - 66)) | (1 << (IDLParser.KW_CHAR - 66)) | (1 << (IDLParser.KW_FLOAT - 66)) | (1 << (IDLParser.KW_BOOLEAN - 66)) | (1 << (IDLParser.KW_DOUBLE - 66)) | (1 << (IDLParser.KW_TYPEPREFIX - 66)) | (1 << (IDLParser.KW_TYPEID - 66)) | (1 << (IDLParser.KW_ATTRIBUTE - 66)))) !== 0) || _la === IDLParser.ID) {
				{
				{
				this.state = 1105;
				this.home_export();
				}
				}
				this.state = 1110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1111;
			this.match(IDLParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public home_export(): Home_exportContext {
		let _localctx: Home_exportContext = new Home_exportContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, IDLParser.RULE_home_export);
		try {
			this.state = 1120;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IDLParser.DOUBLE_COLON:
			case IDLParser.KW_STRING:
			case IDLParser.KW_TYPEDEF:
			case IDLParser.KW_OCTET:
			case IDLParser.KW_STRUCT:
			case IDLParser.KW_NATIVE:
			case IDLParser.KW_READONLY:
			case IDLParser.KW_VOID:
			case IDLParser.KW_WCHAR:
			case IDLParser.KW_SHORT:
			case IDLParser.KW_LONG:
			case IDLParser.KW_ENUM:
			case IDLParser.KW_WSTRING:
			case IDLParser.KW_EXCEPTION:
			case IDLParser.KW_CONST:
			case IDLParser.KW_VALUEBASE:
			case IDLParser.KW_OBJECT:
			case IDLParser.KW_UNSIGNED:
			case IDLParser.KW_UNION:
			case IDLParser.KW_ONEWAY:
			case IDLParser.KW_ANY:
			case IDLParser.KW_CHAR:
			case IDLParser.KW_FLOAT:
			case IDLParser.KW_BOOLEAN:
			case IDLParser.KW_DOUBLE:
			case IDLParser.KW_TYPEPREFIX:
			case IDLParser.KW_TYPEID:
			case IDLParser.KW_ATTRIBUTE:
			case IDLParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1113;
				this.export();
				}
				break;
			case IDLParser.KW_FACTORY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1114;
				this.factory_decl();
				this.state = 1115;
				this.match(IDLParser.SEMICOLON);
				}
				break;
			case IDLParser.KW_FINDER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1117;
				this.finder_decl();
				this.state = 1118;
				this.match(IDLParser.SEMICOLON);
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
	public factory_decl(): Factory_declContext {
		let _localctx: Factory_declContext = new Factory_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, IDLParser.RULE_factory_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1122;
			this.match(IDLParser.KW_FACTORY);
			this.state = 1123;
			this.match(IDLParser.ID);
			this.state = 1124;
			this.match(IDLParser.LEFT_BRACKET);
			this.state = 1126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_IN) {
				{
				this.state = 1125;
				this.init_param_decls();
				}
			}

			this.state = 1128;
			this.match(IDLParser.RIGHT_BRACKET);
			this.state = 1130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_RAISES) {
				{
				this.state = 1129;
				this.raises_expr();
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
	public finder_decl(): Finder_declContext {
		let _localctx: Finder_declContext = new Finder_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, IDLParser.RULE_finder_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1132;
			this.match(IDLParser.KW_FINDER);
			this.state = 1133;
			this.match(IDLParser.ID);
			this.state = 1134;
			this.match(IDLParser.LEFT_BRACKET);
			this.state = 1136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_IN) {
				{
				this.state = 1135;
				this.init_param_decls();
				}
			}

			this.state = 1138;
			this.match(IDLParser.RIGHT_BRACKET);
			this.state = 1140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_RAISES) {
				{
				this.state = 1139;
				this.raises_expr();
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
	public event(): EventContext {
		let _localctx: EventContext = new EventContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, IDLParser.RULE_event);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1145;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 1142;
				this.event_decl();
				}
				break;

			case 2:
				{
				this.state = 1143;
				this.event_abs_decl();
				}
				break;

			case 3:
				{
				this.state = 1144;
				this.event_forward_decl();
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
	public event_forward_decl(): Event_forward_declContext {
		let _localctx: Event_forward_declContext = new Event_forward_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, IDLParser.RULE_event_forward_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_ABSTRACT) {
				{
				this.state = 1147;
				this.match(IDLParser.KW_ABSTRACT);
				}
			}

			this.state = 1150;
			this.match(IDLParser.KW_EVENTTYPE);
			this.state = 1151;
			this.match(IDLParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public event_abs_decl(): Event_abs_declContext {
		let _localctx: Event_abs_declContext = new Event_abs_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, IDLParser.RULE_event_abs_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1153;
			this.match(IDLParser.KW_ABSTRACT);
			this.state = 1154;
			this.match(IDLParser.KW_EVENTTYPE);
			this.state = 1155;
			this.match(IDLParser.ID);
			this.state = 1156;
			this.value_inheritance_spec();
			this.state = 1157;
			this.match(IDLParser.LEFT_BRACE);
			this.state = 1161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IDLParser.DOUBLE_COLON - 32)) | (1 << (IDLParser.KW_STRING - 32)) | (1 << (IDLParser.KW_TYPEDEF - 32)) | (1 << (IDLParser.KW_OCTET - 32)) | (1 << (IDLParser.KW_STRUCT - 32)) | (1 << (IDLParser.KW_NATIVE - 32)) | (1 << (IDLParser.KW_READONLY - 32)) | (1 << (IDLParser.KW_VOID - 32)) | (1 << (IDLParser.KW_WCHAR - 32)) | (1 << (IDLParser.KW_SHORT - 32)) | (1 << (IDLParser.KW_LONG - 32)) | (1 << (IDLParser.KW_ENUM - 32)) | (1 << (IDLParser.KW_WSTRING - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (IDLParser.KW_EXCEPTION - 67)) | (1 << (IDLParser.KW_CONST - 67)) | (1 << (IDLParser.KW_VALUEBASE - 67)) | (1 << (IDLParser.KW_OBJECT - 67)) | (1 << (IDLParser.KW_UNSIGNED - 67)) | (1 << (IDLParser.KW_UNION - 67)) | (1 << (IDLParser.KW_ONEWAY - 67)) | (1 << (IDLParser.KW_ANY - 67)) | (1 << (IDLParser.KW_CHAR - 67)) | (1 << (IDLParser.KW_FLOAT - 67)) | (1 << (IDLParser.KW_BOOLEAN - 67)) | (1 << (IDLParser.KW_DOUBLE - 67)) | (1 << (IDLParser.KW_TYPEPREFIX - 67)) | (1 << (IDLParser.KW_TYPEID - 67)) | (1 << (IDLParser.KW_ATTRIBUTE - 67)) | (1 << (IDLParser.ID - 67)))) !== 0)) {
				{
				{
				this.state = 1158;
				this.export();
				}
				}
				this.state = 1163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1164;
			this.match(IDLParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public event_decl(): Event_declContext {
		let _localctx: Event_declContext = new Event_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, IDLParser.RULE_event_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1166;
			this.event_header();
			this.state = 1167;
			this.match(IDLParser.LEFT_BRACE);
			this.state = 1171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IDLParser.DOUBLE_COLON - 32)) | (1 << (IDLParser.KW_STRING - 32)) | (1 << (IDLParser.KW_TYPEDEF - 32)) | (1 << (IDLParser.KW_OCTET - 32)) | (1 << (IDLParser.KW_STRUCT - 32)) | (1 << (IDLParser.KW_NATIVE - 32)) | (1 << (IDLParser.KW_READONLY - 32)) | (1 << (IDLParser.KW_VOID - 32)) | (1 << (IDLParser.KW_PRIVATE - 32)) | (1 << (IDLParser.KW_WCHAR - 32)) | (1 << (IDLParser.KW_PUBLIC - 32)) | (1 << (IDLParser.KW_SHORT - 32)) | (1 << (IDLParser.KW_LONG - 32)) | (1 << (IDLParser.KW_ENUM - 32)) | (1 << (IDLParser.KW_WSTRING - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (IDLParser.KW_FACTORY - 66)) | (1 << (IDLParser.KW_EXCEPTION - 66)) | (1 << (IDLParser.KW_CONST - 66)) | (1 << (IDLParser.KW_VALUEBASE - 66)) | (1 << (IDLParser.KW_OBJECT - 66)) | (1 << (IDLParser.KW_UNSIGNED - 66)) | (1 << (IDLParser.KW_UNION - 66)) | (1 << (IDLParser.KW_ONEWAY - 66)) | (1 << (IDLParser.KW_ANY - 66)) | (1 << (IDLParser.KW_CHAR - 66)) | (1 << (IDLParser.KW_FLOAT - 66)) | (1 << (IDLParser.KW_BOOLEAN - 66)) | (1 << (IDLParser.KW_DOUBLE - 66)) | (1 << (IDLParser.KW_TYPEPREFIX - 66)) | (1 << (IDLParser.KW_TYPEID - 66)) | (1 << (IDLParser.KW_ATTRIBUTE - 66)))) !== 0) || _la === IDLParser.ID) {
				{
				{
				this.state = 1168;
				this.value_element();
				}
				}
				this.state = 1173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1174;
			this.match(IDLParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public event_header(): Event_headerContext {
		let _localctx: Event_headerContext = new Event_headerContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, IDLParser.RULE_event_header);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IDLParser.KW_CUSTOM) {
				{
				this.state = 1176;
				this.match(IDLParser.KW_CUSTOM);
				}
			}

			this.state = 1179;
			this.match(IDLParser.KW_EVENTTYPE);
			this.state = 1180;
			this.match(IDLParser.ID);
			this.state = 1181;
			this.value_inheritance_spec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03g\u04A2\x04\x02" +
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
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x03\x02\x07\x02" +
		"\u0116\n\x02\f\x02\x0E\x02\u0119\v\x02\x03\x02\x06\x02\u011C\n\x02\r\x02" +
		"\x0E\x02\u011D\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"\u0141\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04\u0147\n\x04\r\x04" +
		"\x0E\x04\u0148\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05\u014F\n\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x05\x07\u0157\n\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\b\x05\b\u015D\n\b\x03\b\x03\b\x03\b\x05\b\u0162\n" +
		"\b\x03\t\x07\t\u0165\n\t\f\t\x0E\t\u0168\v\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x05\n\u017F\n\n\x03\v\x03\v\x03\v\x03\v\x07" +
		"\v\u0185\n\v\f\v\x0E\v\u0188\v\v\x03\f\x03\f\x03\r\x05\r\u018D\n\r\x03" +
		"\r\x03\r\x03\r\x07\r\u0192\n\r\f\r\x0E\r\u0195\v\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u019B\n\x0E\x03\x0F\x05\x0F\u019E\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x07\x11\u01AD\n\x11\f\x11\x0E\x11\u01B0\v\x11\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\u01B7\n\x12\f\x12\x0E\x12" +
		"\u01BA\v\x12\x03\x12\x03\x12\x03\x13\x05\x13\u01BF\n\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\u01C7\n\x14\x03\x14\x03\x14\x03" +
		"\x14\x07\x14\u01CC\n\x14\f\x14\x0E\x14\u01CF\v\x14\x05\x14\u01D1\n\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u01D7\n\x14\f\x14\x0E\x14\u01DA" +
		"\v\x14\x05\x14\u01DC\n\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\u01E3\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u01EE\n\x18\x03\x18\x03\x18\x05\x18\u01F2\n\x18" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x07\x19\u01F9\n\x19\f\x19\x0E" +
		"\x19\u01FC\v\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0214\n\x1D\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u021B\n\x1F\f\x1F\x0E\x1F" +
		"\u021E\v\x1F\x03 \x03 \x03 \x07 \u0223\n \f \x0E \u0226\v \x03!\x03!\x03" +
		"!\x07!\u022B\n!\f!\x0E!\u022E\v!\x03\"\x03\"\x03\"\x07\"\u0233\n\"\f\"" +
		"\x0E\"\u0236\v\"\x03#\x03#\x03#\x07#\u023B\n#\f#\x0E#\u023E\v#\x03$\x03" +
		"$\x03$\x07$\u0243\n$\f$\x0E$\u0246\v$\x03%\x03%\x03%\x03%\x05%\u024C\n" +
		"%\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0256\n\'\x03(\x03" +
		"(\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u0264\n*\x03" +
		"+\x03+\x03+\x03,\x03,\x05,\u026B\n,\x03-\x03-\x03-\x05-\u0270\n-\x03." +
		"\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u027B\n.\x03/\x03/\x03/" +
		"\x03/\x05/\u0281\n/\x030\x030\x030\x050\u0286\n0\x031\x031\x031\x071\u028B" +
		"\n1\f1\x0E1\u028E\v1\x032\x032\x052\u0292\n2\x033\x033\x034\x034\x035" +
		"\x035\x035\x035\x055\u029C\n5\x036\x036\x056\u02A0\n6\x037\x037\x037\x05" +
		"7\u02A5\n7\x038\x038\x039\x039\x03:\x03:\x03:\x03;\x03;\x03;\x05;\u02B1" +
		"\n;\x03<\x03<\x03<\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03?\x03?\x03@\x03" +
		"@\x03A\x03A\x03B\x03B\x03C\x03C\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03F\x06F\u02D0\nF\rF\x0EF\u02D1\x03G\x03G\x03G\x03G\x03H\x03H\x03H" +
		"\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x05I\u02E7" +
		"\nI\x03J\x06J\u02EA\nJ\rJ\x0EJ\u02EB\x03K\x06K\u02EF\nK\rK\x0EK\u02F0" +
		"\x03K\x03K\x03K\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u02FC\nL\x03M\x03M" +
		"\x03M\x03N\x03N\x03N\x03N\x03N\x03N\x07N\u0307\nN\fN\x0EN\u030A\vN\x03" +
		"N\x03N\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03" +
		"P\x03P\x05P\u031C\nP\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u0324\nQ\x03R" +
		"\x03R\x03R\x03R\x03R\x03R\x05R\u032C\nR\x03S\x03S\x06S\u0330\nS\rS\x0E" +
		"S\u0331\x03T\x03T\x03T\x03T\x03U\x03U\x05U\u033A\nU\x03V\x03V\x03V\x03" +
		"V\x07V\u0340\nV\fV\x0EV\u0343\vV\x03V\x03V\x03W\x05W\u0348\nW\x03W\x03" +
		"W\x03W\x03W\x05W\u034E\nW\x03W\x05W\u0351\nW\x03X\x03X\x03Y\x03Y\x05Y" +
		"\u0357\nY\x03Z\x03Z\x03Z\x03Z\x07Z\u035D\nZ\fZ\x0EZ\u0360\vZ\x03Z\x03" +
		"Z\x03Z\x03Z\x05Z\u0366\nZ\x03[\x03[\x03[\x03[\x03\\\x03\\\x03]\x03]\x03" +
		"]\x03]\x03]\x07]\u0373\n]\f]\x0E]\u0376\v]\x03]\x03]\x03^\x03^\x03^\x03" +
		"^\x03^\x07^\u037F\n^\f^\x0E^\u0382\v^\x03^\x03^\x03_\x03_\x03_\x03_\x05" +
		"_\u038A\n_\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03a\x03a\x03b\x03b\x03" +
		"c\x03c\x03c\x03c\x05c\u039B\nc\x03d\x03d\x03d\x03d\x03e\x03e\x05e\u03A3" +
		"\ne\x03f\x03f\x03f\x03f\x03g\x03g\x03g\x03g\x03h\x03h\x03h\x03h\x03h\x03" +
		"i\x03i\x03i\x03i\x03i\x03i\x07i\u03B8\ni\fi\x0Ei\u03BB\vi\x05i\u03BD\n" +
		"i\x03j\x03j\x03j\x03j\x03k\x03k\x03k\x03k\x03k\x03k\x07k\u03C9\nk\fk\x0E" +
		"k\u03CC\vk\x05k\u03CE\nk\x03l\x03l\x05l\u03D2\nl\x03l\x05l\u03D5\nl\x03" +
		"m\x03m\x03m\x03n\x03n\x03n\x03o\x03o\x03o\x03o\x07o\u03E1\no\fo\x0Eo\u03E4" +
		"\vo\x03o\x03o\x03p\x03p\x05p\u03EA\np\x03q\x03q\x03q\x03r\x03r\x03r\x03" +
		"r\x03r\x03s\x03s\x03s\x05s\u03F7\ns\x03s\x05s\u03FA\ns\x03t\x03t\x03t" +
		"\x03t\x07t\u0400\nt\ft\x0Et\u0403\vt\x03u\x03u\x03u\x03v\x07v\u0409\n" +
		"v\fv\x0Ev\u040C\vv\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03" +
		"w\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x05w\u0420\nw\x03x\x03x\x03x\x03" +
		"x\x03y\x03y\x05y\u0428\ny\x03z\x03z\x05z\u042C\nz\x03z\x03z\x03z\x03{" +
		"\x03{\x03{\x03{\x03|\x03|\x03|\x03|\x03}\x03}\x03}\x03}\x03~\x03~\x03" +
		"~\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u0443\n\x7F\x03\x7F\x05\x7F\u0446\n" +
		"\x7F\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u044B\n\x7F\x03\x80\x03\x80\x03\x80" +
		"\x03\x81\x03\x81\x03\x81\x03\x82\x03\x82\x07\x82\u0455\n\x82\f\x82\x0E" +
		"\x82\u0458\v\x82\x03\x82\x03\x82\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83" +
		"\x03\x83\x03\x83\x05\x83\u0463\n\x83\x03\x84\x03\x84\x03\x84\x03\x84\x05" +
		"\x84\u0469\n\x84\x03\x84\x03\x84\x05\x84\u046D\n\x84\x03\x85\x03\x85\x03" +
		"\x85\x03\x85\x05\x85\u0473\n\x85\x03\x85\x03\x85\x05\x85\u0477\n\x85\x03" +
		"\x86\x03\x86\x03\x86\x05\x86\u047C\n\x86\x03\x87\x05\x87\u047F\n\x87\x03" +
		"\x87\x03\x87\x03\x87\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x07" +
		"\x88\u048A\n\x88\f\x88\x0E\x88\u048D\v\x88\x03\x88\x03\x88\x03\x89\x03" +
		"\x89\x03\x89\x07\x89\u0494\n\x89\f\x89\x0E\x89\u0497\v\x89\x03\x89\x03" +
		"\x89\x03\x8A\x05\x8A\u049C\n\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A" +
		"\x02\x02\x02\x8B\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
		"\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
		"\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0" +
		"\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2" +
		"\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4" +
		"\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6" +
		"\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8" +
		"\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108" +
		"\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\x02\n\x04\x02X" +
		"X``\x04\x0288==\x03\x02#$\x03\x02\x1B\x1C\x05\x02\x17\x17\x1A\x1A!!\x04" +
		"\x02\x16\x16\x1B\x1C\x04\x02\x03\x03\x05\f\x05\x02&&;;YY\x02\u04B3\x02" +
		"\u0117\x03\x02\x02\x02\x04\u0140\x03\x02\x02\x02\x06\u0142\x03\x02\x02" +
		"\x02\b\u014E\x03\x02\x02\x02\n\u0150\x03\x02\x02\x02\f\u0156\x03\x02\x02" +
		"\x02\x0E\u015C\x03\x02\x02\x02\x10\u0166\x03\x02\x02\x02\x12\u017E\x03" +
		"\x02\x02\x02\x14\u0180\x03\x02\x02\x02\x16\u0189\x03\x02\x02\x02\x18\u018C" +
		"\x03\x02\x02\x02\x1A\u019A\x03\x02\x02\x02\x1C\u019D\x03\x02\x02\x02\x1E" +
		"\u01A2\x03\x02\x02\x02 \u01A6\x03\x02\x02\x02\"\u01B3\x03\x02\x02\x02" +
		"$\u01BE\x03\x02\x02\x02&\u01D0\x03\x02\x02\x02(\u01DD\x03\x02\x02\x02" +
		"*\u01E2\x03\x02\x02\x02,\u01E4\x03\x02\x02\x02.\u01E9\x03\x02\x02\x02" +
		"0\u01F5\x03\x02\x02\x022\u01FD\x03\x02\x02\x024\u0201\x03\x02\x02\x02" +
		"6\u0203\x03\x02\x02\x028\u0213\x03\x02\x02\x02:\u0215\x03\x02\x02\x02" +
		"<\u0217\x03\x02\x02\x02>\u021F\x03\x02\x02\x02@\u0227\x03\x02\x02\x02" +
		"B\u022F\x03\x02\x02\x02D\u0237\x03\x02\x02\x02F\u023F\x03\x02\x02\x02" +
		"H\u024B\x03\x02\x02\x02J\u024D\x03\x02\x02\x02L\u0255\x03\x02\x02\x02" +
		"N\u0257\x03\x02\x02\x02P\u0259\x03\x02\x02\x02R\u0263\x03\x02\x02\x02" +
		"T\u0265\x03\x02\x02\x02V\u026A\x03\x02\x02\x02X\u026F\x03\x02\x02\x02" +
		"Z\u027A\x03\x02\x02\x02\\\u0280\x03\x02\x02\x02^\u0285\x03\x02\x02\x02" +
		"`\u0287\x03\x02\x02\x02b\u0291\x03\x02\x02\x02d\u0293\x03\x02\x02\x02" +
		"f\u0295\x03\x02\x02\x02h\u029B\x03\x02\x02\x02j\u029F\x03\x02\x02\x02" +
		"l\u02A4\x03\x02\x02\x02n\u02A6\x03\x02\x02\x02p\u02A8\x03\x02\x02\x02" +
		"r\u02AA\x03\x02\x02\x02t\u02B0\x03\x02\x02\x02v\u02B2\x03\x02\x02\x02" +
		"x\u02B5\x03\x02\x02\x02z\u02B8\x03\x02\x02\x02|\u02BC\x03\x02\x02\x02" +
		"~\u02BE\x03\x02\x02\x02\x80\u02C0\x03\x02\x02\x02\x82\u02C2\x03\x02\x02" +
		"\x02\x84\u02C4\x03\x02\x02\x02\x86\u02C6\x03\x02\x02\x02\x88\u02C8\x03" +
		"\x02\x02\x02\x8A\u02CF\x03\x02\x02\x02\x8C\u02D3\x03\x02\x02\x02\x8E\u02D7" +
		"\x03\x02\x02\x02\x90\u02E6\x03\x02\x02\x02\x92\u02E9\x03\x02\x02\x02\x94" +
		"\u02EE\x03\x02\x02\x02\x96\u02FB\x03\x02\x02\x02\x98\u02FD\x03\x02\x02" +
		"\x02\x9A\u0300\x03\x02\x02\x02\x9C\u030D\x03\x02\x02\x02\x9E\u031B\x03" +
		"\x02\x02\x02\xA0\u0323\x03\x02\x02\x02\xA2\u032B\x03\x02\x02\x02\xA4\u032D" +
		"\x03\x02\x02\x02\xA6\u0333\x03\x02\x02\x02\xA8\u0339\x03\x02\x02\x02\xAA" +
		"\u033B\x03\x02\x02\x02\xAC\u0347\x03\x02\x02\x02\xAE\u0352\x03\x02\x02" +
		"\x02\xB0\u0356\x03\x02\x02\x02\xB2\u0365\x03\x02\x02\x02\xB4\u0367\x03" +
		"\x02\x02\x02\xB6\u036B\x03\x02\x02\x02\xB8\u036D\x03\x02\x02\x02\xBA\u0379" +
		"\x03\x02\x02\x02\xBC\u0389\x03\x02\x02\x02\xBE\u038B\x03\x02\x02\x02\xC0" +
		"\u0392\x03\x02\x02\x02\xC2\u0394\x03\x02\x02\x02\xC4\u039A\x03\x02\x02" +
		"\x02\xC6\u039C\x03\x02\x02\x02\xC8\u03A2\x03\x02\x02\x02\xCA\u03A4\x03" +
		"\x02\x02\x02\xCC\u03A8\x03\x02\x02\x02\xCE\u03AC\x03\x02\x02\x02\xD0\u03BC" +
		"\x03\x02\x02\x02\xD2\u03BE\x03\x02\x02\x02\xD4\u03CD\x03\x02\x02\x02\xD6" +
		"\u03D4\x03\x02\x02\x02\xD8\u03D6\x03\x02\x02\x02\xDA\u03D9\x03\x02\x02" +
		"\x02\xDC\u03DC\x03\x02\x02\x02\xDE\u03E9\x03\x02\x02\x02\xE0\u03EB\x03" +
		"\x02\x02\x02\xE2\u03EE\x03\x02\x02\x02\xE4\u03F3\x03\x02\x02\x02\xE6\u03FB" +
		"\x03\x02\x02\x02\xE8\u0404\x03\x02\x02\x02\xEA\u040A\x03\x02\x02\x02\xEC" +
		"\u041F\x03\x02\x02\x02\xEE\u0421\x03\x02\x02\x02\xF0\u0427\x03\x02\x02" +
		"\x02\xF2\u0429\x03\x02\x02\x02\xF4\u0430\x03\x02\x02\x02\xF6\u0434\x03" +
		"\x02\x02\x02\xF8\u0438\x03\x02\x02\x02\xFA\u043C\x03\x02\x02\x02\xFC\u043F" +
		"\x03\x02\x02\x02\xFE\u044C\x03\x02\x02\x02\u0100\u044F\x03\x02\x02\x02" +
		"\u0102\u0452\x03\x02\x02\x02\u0104\u0462\x03\x02\x02\x02\u0106\u0464\x03" +
		"\x02\x02\x02\u0108\u046E\x03\x02\x02\x02\u010A\u047B\x03\x02\x02\x02\u010C" +
		"\u047E\x03\x02\x02\x02\u010E\u0483\x03\x02\x02\x02\u0110\u0490\x03\x02" +
		"\x02\x02\u0112\u049B\x03\x02\x02\x02\u0114\u0116\x05\xC6d\x02\u0115\u0114" +
		"\x03\x02\x02\x02\u0116\u0119\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02" +
		"\u0117\u0118\x03\x02\x02\x02\u0118\u011B\x03\x02\x02\x02\u0119\u0117\x03" +
		"\x02\x02\x02\u011A\u011C\x05\x04\x03\x02\u011B\u011A\x03\x02\x02\x02\u011C" +
		"\u011D\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02" +
		"\x02\x02\u011E\x03\x03\x02\x02\x02\u011F\u0120\x05R*\x02\u0120\u0121\x07" +
		"\r\x02\x02\u0121\u0141\x03\x02\x02\x02\u0122\u0123\x056\x1C\x02\u0123" +
		"\u0124\x07\r\x02\x02\u0124\u0141\x03\x02\x02\x02\u0125\u0126\x05\xAAV" +
		"\x02\u0126\u0127\x07\r\x02\x02\u0127\u0141\x03\x02\x02\x02\u0128\u0129" +
		"\x05\b\x05\x02\u0129\u012A\x07\r\x02\x02\u012A\u0141\x03\x02\x02\x02\u012B" +
		"\u012C\x05\x06\x04\x02\u012C\u012D\x07\r\x02\x02\u012D\u0141\x03\x02\x02" +
		"\x02\u012E\u012F\x05\x1A\x0E\x02\u012F\u0130\x07\r\x02\x02\u0130\u0141" +
		"\x03\x02\x02\x02\u0131\u0132\x05\xCAf\x02\u0132\u0133\x07\r\x02\x02\u0133" +
		"\u0141\x03\x02\x02\x02\u0134\u0135\x05\xCCg\x02\u0135\u0136\x07\r\x02" +
		"\x02\u0136\u0141\x03\x02\x02\x02\u0137\u0138\x05\u010A\x86\x02\u0138\u0139" +
		"\x07\r\x02\x02\u0139\u0141\x03\x02\x02\x02\u013A\u013B\x05\xDEp\x02\u013B" +
		"\u013C\x07\r\x02\x02\u013C\u0141\x03\x02\x02\x02\u013D\u013E\x05\xFA~" +
		"\x02\u013E\u013F\x07\r\x02\x02\u013F\u0141\x03\x02\x02\x02\u0140\u011F" +
		"\x03\x02\x02\x02\u0140\u0122\x03\x02\x02\x02\u0140\u0125\x03\x02\x02\x02" +
		"\u0140\u0128\x03\x02\x02\x02\u0140\u012B\x03\x02\x02\x02\u0140\u012E\x03" +
		"\x02\x02\x02\u0140\u0131\x03\x02\x02\x02\u0140\u0134\x03\x02\x02\x02\u0140" +
		"\u0137\x03\x02\x02\x02\u0140\u013A\x03\x02\x02\x02\u0140\u013D\x03\x02" +
		"\x02\x02\u0141\x05\x03\x02\x02\x02\u0142\u0143\x07K\x02\x02\u0143\u0144" +
		"\x07d\x02\x02\u0144\u0146\x07\x10\x02\x02\u0145\u0147\x05\x04\x03\x02" +
		"\u0146\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u0146\x03" +
		"\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A" +
		"\u014B\x07\x11\x02\x02\u014B\x07\x03\x02\x02\x02\u014C\u014F\x05\n\x06" +
		"\x02\u014D\u014F\x05\f\x07\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014D" +
		"\x03\x02\x02\x02\u014F\t\x03\x02\x02\x02\u0150\u0151\x05\x0E\b\x02\u0151" +
		"\u0152\x07\x10\x02\x02\u0152\u0153\x05\x10\t\x02\u0153\u0154\x07\x11\x02" +
		"\x02\u0154\v\x03\x02\x02\x02\u0155\u0157\t\x02\x02\x02\u0156\u0155\x03" +
		"\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158" +
		"\u0159\x07b\x02\x02\u0159\u015A\x07d\x02\x02\u015A\r\x03\x02\x02\x02\u015B" +
		"\u015D\t\x02\x02\x02\u015C\u015B\x03\x02\x02\x02\u015C\u015D\x03\x02\x02" +
		"\x02\u015D\u015E\x03\x02\x02\x02\u015E\u015F\x07b\x02\x02\u015F\u0161" +
		"\x07d\x02\x02\u0160\u0162\x05\x14\v\x02\u0161\u0160\x03\x02\x02\x02\u0161" +
		"\u0162\x03\x02\x02\x02\u0162\x0F\x03\x02\x02\x02\u0163\u0165\x05\x12\n" +
		"\x02\u0164\u0163\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164" +
		"\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\x11\x03\x02\x02\x02" +
		"\u0168\u0166\x03\x02\x02\x02\u0169\u016A\x05R*\x02\u016A\u016B\x07\r\x02" +
		"\x02\u016B\u017F\x03\x02\x02\x02\u016C\u016D\x056\x1C\x02\u016D\u016E" +
		"\x07\r\x02\x02\u016E\u017F\x03\x02\x02\x02\u016F\u0170\x05\xAAV\x02\u0170" +
		"\u0171\x07\r\x02\x02\u0171\u017F\x03\x02\x02\x02\u0172\u0173\x05\xA8U" +
		"\x02\u0173\u0174\x07\r\x02\x02\u0174\u017F\x03\x02\x02\x02\u0175\u0176" +
		"\x05\xACW\x02\u0176\u0177\x07\r\x02\x02\u0177\u017F\x03\x02\x02\x02\u0178" +
		"\u0179\x05\xCAf\x02\u0179\u017A\x07\r\x02\x02\u017A\u017F\x03\x02\x02" +
		"\x02\u017B\u017C\x05\xCCg\x02\u017C\u017D\x07\r\x02\x02\u017D\u017F\x03" +
		"\x02\x02\x02\u017E\u0169\x03\x02\x02\x02\u017E\u016C\x03\x02\x02\x02\u017E" +
		"\u016F\x03\x02\x02\x02\u017E\u0172\x03\x02\x02\x02\u017E\u0175\x03\x02" +
		"\x02\x02\u017E\u0178\x03\x02\x02\x02\u017E\u017B\x03\x02\x02\x02\u017F" +
		"\x13\x03\x02\x02\x02\u0180\u0181\x07\x0E\x02\x02\u0181\u0186\x05\x16\f" +
		"\x02\u0182\u0183\x07\x0F\x02\x02\u0183\u0185\x05\x16\f\x02\u0184\u0182" +
		"\x03\x02\x02\x02\u0185\u0188\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02" +
		"\u0186\u0187\x03\x02\x02\x02\u0187\x15\x03\x02\x02\x02\u0188\u0186\x03" +
		"\x02\x02\x02\u0189\u018A\x05\x18\r\x02\u018A\x17\x03\x02\x02\x02\u018B" +
		"\u018D\x07\"\x02\x02\u018C\u018B\x03\x02\x02\x02\u018C\u018D\x03\x02\x02" +
		"\x02\u018D\u018E\x03\x02\x02\x02\u018E\u0193\x07d\x02\x02\u018F\u0190" +
		"\x07\"\x02\x02\u0190\u0192\x07d\x02\x02\u0191\u018F\x03\x02\x02\x02\u0192" +
		"\u0195\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02" +
		"\x02\x02\u0194\x19\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196\u019B" +
		"\x05\"\x12\x02\u0197\u019B\x05 \x11\x02\u0198\u019B\x05\x1E\x10\x02\u0199" +
		"\u019B\x05\x1C\x0F\x02\u019A\u0196\x03\x02\x02\x02\u019A\u0197\x03\x02" +
		"\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u0199\x03\x02\x02\x02\u019B" +
		"\x1B\x03\x02\x02\x02\u019C\u019E\x07X\x02\x02\u019D\u019C\x03\x02\x02" +
		"\x02\u019D\u019E\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A0" +
		"\x07I\x02\x02\u01A0\u01A1\x07d\x02\x02\u01A1\x1D\x03\x02\x02\x02\u01A2" +
		"\u01A3\x07I\x02\x02\u01A3\u01A4\x07d\x02\x02\u01A4\u01A5\x05V,\x02\u01A5" +
		"\x1F\x03\x02\x02\x02\u01A6\u01A7\x07X\x02\x02\u01A7\u01A8\x07I\x02\x02" +
		"\u01A8\u01A9\x07d\x02\x02\u01A9\u01AA\x05&\x14\x02\u01AA\u01AE\x07\x10" +
		"\x02\x02\u01AB\u01AD\x05\x12\n\x02\u01AC\u01AB\x03\x02\x02\x02\u01AD\u01B0" +
		"\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02" +
		"\u01AF\u01B1\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B1\u01B2\x07" +
		"\x11\x02\x02\u01B2!\x03\x02\x02\x02\u01B3\u01B4\x05$\x13\x02\u01B4\u01B8" +
		"\x07\x10\x02\x02\u01B5\u01B7\x05*\x16\x02\u01B6\u01B5\x03\x02\x02\x02" +
		"\u01B7\u01BA\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B9\x03" +
		"\x02\x02\x02\u01B9\u01BB\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BB" +
		"\u01BC\x07\x11\x02\x02\u01BC#\x03\x02\x02\x02\u01BD\u01BF\x07.\x02\x02" +
		"\u01BE\u01BD\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C0\x03" +
		"\x02\x02\x02\u01C0\u01C1\x07I\x02\x02\u01C1\u01C2\x07d\x02\x02\u01C2\u01C3" +
		"\x05&\x14\x02\u01C3%\x03\x02\x02\x02\u01C4\u01C6\x07\x0E\x02\x02\u01C5" +
		"\u01C7\x07M\x02\x02\u01C6\u01C5\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02" +
		"\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01CD\x05(\x15\x02\u01C9\u01CA" +
		"\x07\x0F\x02\x02\u01CA\u01CC\x05(\x15\x02\u01CB\u01C9\x03\x02\x02\x02" +
		"\u01CC\u01CF\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03" +
		"\x02\x02\x02\u01CE";
	private static readonly _serializedATNSegment1: string =
		"\u01D1\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01D0\u01C4\x03\x02" +
		"\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01DB\x03\x02\x02\x02\u01D2" +
		"\u01D3\x07J\x02\x02\u01D3\u01D8\x05\x16\f\x02\u01D4\u01D5\x07\x0F\x02" +
		"\x02\u01D5\u01D7\x05\x16\f\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01DA" +
		"\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02" +
		"\u01D9\u01DC\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01D2\x03" +
		"\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\'\x03\x02\x02\x02\u01DD" +
		"\u01DE\x05\x18\r\x02\u01DE)\x03\x02\x02\x02\u01DF\u01E3\x05\x12\n\x02" +
		"\u01E0\u01E3\x05,\x17\x02\u01E1\u01E3\x05.\x18\x02\u01E2\u01DF\x03\x02" +
		"\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3" +
		"+\x03\x02\x02\x02\u01E4\u01E5\t\x03\x02\x02\u01E5\u01E6\x05V,\x02\u01E6" +
		"\u01E7\x05`1\x02\u01E7\u01E8\x07\r\x02\x02\u01E8-\x03\x02\x02\x02\u01E9" +
		"\u01EA\x07D\x02\x02\u01EA\u01EB\x07d\x02\x02\u01EB\u01ED\x07\x12\x02\x02" +
		"\u01EC\u01EE\x050\x19\x02\u01ED\u01EC\x03\x02\x02\x02\u01ED\u01EE\x03" +
		"\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F1\x07\x13\x02\x02\u01F0" +
		"\u01F2\x05\xB8]\x02\u01F1\u01F0\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02" +
		"\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F4\x07\r\x02\x02\u01F4/\x03" +
		"\x02\x02\x02\u01F5\u01FA\x052\x1A\x02\u01F6\u01F7\x07\x0F\x02\x02\u01F7" +
		"\u01F9\x052\x1A\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FC\x03\x02\x02" +
		"\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB1\x03" +
		"\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD\u01FE\x054\x1B\x02\u01FE" +
		"\u01FF\x05\xBC_\x02\u01FF\u0200\x05d3\x02\u02003\x03\x02\x02\x02\u0201" +
		"\u0202\x07;\x02\x02\u02025\x03\x02\x02\x02\u0203\u0204\x07G\x02\x02\u0204" +
		"\u0205\x058\x1D\x02\u0205\u0206\x07d\x02\x02\u0206\u0207\x07 \x02\x02" +
		"\u0207\u0208\x05:\x1E\x02\u02087\x03\x02\x02\x02\u0209\u0214\x05j6\x02" +
		"\u020A\u0214\x05|?\x02\u020B\u0214\x05~@\x02\u020C\u0214\x05\x80A\x02" +
		"\u020D\u0214\x05h5\x02\u020E\u0214\x05\xA0Q\x02\u020F\u0214\x05\xA2R\x02" +
		"\u0210\u0214\x05\xC0a\x02\u0211\u0214\x05\x18\r\x02\u0212\u0214\x05\x82" +
		"B\x02\u0213\u0209\x03\x02\x02\x02\u0213\u020A\x03\x02\x02\x02\u0213\u020B" +
		"\x03\x02\x02\x02\u0213\u020C\x03\x02\x02\x02\u0213\u020D\x03\x02\x02\x02" +
		"\u0213\u020E\x03\x02\x02\x02\u0213\u020F\x03\x02\x02\x02\u0213\u0210\x03" +
		"\x02\x02\x02\u0213\u0211\x03\x02\x02\x02\u0213\u0212\x03\x02\x02\x02\u0214" +
		"9\x03\x02\x02\x02\u0215\u0216\x05<\x1F\x02\u0216;\x03\x02\x02\x02\u0217" +
		"\u021C\x05> \x02\u0218\u0219\x07\x1F\x02\x02\u0219\u021B\x05> \x02\u021A" +
		"\u0218\x03\x02\x02\x02\u021B\u021E\x03\x02\x02\x02\u021C\u021A\x03\x02" +
		"\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D=\x03\x02\x02\x02\u021E\u021C" +
		"\x03\x02\x02\x02\u021F\u0224\x05@!\x02\u0220\u0221\x07\x1D\x02\x02\u0221" +
		"\u0223\x05@!\x02\u0222\u0220\x03\x02\x02\x02\u0223\u0226\x03\x02\x02\x02" +
		"\u0224\u0222\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225?\x03\x02" +
		"\x02\x02\u0226\u0224\x03\x02\x02\x02\u0227\u022C\x05B\"\x02\u0228\u0229" +
		"\x07\x1E\x02\x02\u0229\u022B\x05B\"\x02\u022A\u0228\x03\x02\x02\x02\u022B" +
		"\u022E\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022C\u022D\x03\x02" +
		"\x02\x02\u022DA\x03\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022F\u0234" +
		"\x05D#\x02\u0230\u0231\t\x04\x02\x02\u0231\u0233\x05D#\x02\u0232\u0230" +
		"\x03\x02\x02\x02\u0233\u0236\x03\x02\x02\x02\u0234\u0232\x03\x02\x02\x02" +
		"\u0234\u0235\x03\x02\x02\x02\u0235C\x03\x02\x02\x02\u0236\u0234\x03\x02" +
		"\x02\x02\u0237\u023C\x05F$\x02\u0238\u0239\t\x05\x02\x02\u0239\u023B\x05" +
		"F$\x02\u023A\u0238\x03\x02\x02\x02\u023B\u023E\x03\x02\x02\x02\u023C\u023A" +
		"\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023DE\x03\x02\x02\x02\u023E" +
		"\u023C\x03\x02\x02\x02\u023F\u0244\x05H%\x02\u0240\u0241\t\x06\x02\x02" +
		"\u0241\u0243\x05H%\x02\u0242\u0240\x03\x02\x02\x02\u0243\u0246\x03\x02" +
		"\x02\x02\u0244\u0242\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245" +
		"G\x03\x02\x02\x02\u0246\u0244\x03\x02\x02\x02\u0247\u0248\x05J&\x02\u0248" +
		"\u0249\x05L\'\x02\u0249\u024C\x03\x02\x02\x02\u024A\u024C\x05L\'\x02\u024B" +
		"\u0247\x03\x02\x02\x02\u024B\u024A\x03\x02\x02\x02\u024CI\x03\x02\x02" +
		"\x02\u024D\u024E\t\x07\x02\x02\u024EK\x03\x02\x02\x02\u024F\u0256\x05" +
		"\x18\r\x02\u0250\u0256\x05N(\x02\u0251\u0252\x07\x12\x02\x02\u0252\u0253" +
		"\x05:\x1E\x02\u0253\u0254\x07\x13\x02\x02\u0254\u0256\x03\x02\x02\x02" +
		"\u0255\u024F\x03\x02\x02\x02\u0255\u0250\x03\x02\x02\x02\u0255\u0251\x03" +
		"\x02\x02\x02\u0256M\x03\x02\x02\x02\u0257\u0258\t\b\x02\x02\u0258O\x03" +
		"\x02\x02\x02\u0259\u025A\x05:\x1E\x02\u025AQ\x03\x02\x02\x02\u025B\u025C" +
		"\x07+\x02\x02\u025C\u0264\x05T+\x02\u025D\u0264\x05\x88E\x02\u025E\u0264" +
		"\x05\x8EH\x02\u025F\u0264\x05\x9AN\x02\u0260\u0261\x073\x02\x02\u0261" +
		"\u0264\x05d3\x02\u0262\u0264\x05\xC4c\x02\u0263\u025B\x03\x02\x02\x02" +
		"\u0263\u025D\x03\x02\x02\x02\u0263\u025E\x03\x02\x02\x02\u0263\u025F\x03" +
		"\x02\x02\x02\u0263\u0260\x03\x02\x02\x02\u0263\u0262\x03\x02\x02\x02\u0264" +
		"S\x03\x02\x02\x02\u0265\u0266\x05V,\x02\u0266\u0267\x05`1\x02\u0267U\x03" +
		"\x02\x02\x02\u0268\u026B\x05X-\x02\u0269\u026B\x05^0\x02\u026A\u0268\x03" +
		"\x02\x02\x02\u026A\u0269\x03\x02\x02\x02\u026BW\x03\x02\x02\x02\u026C" +
		"\u0270\x05Z.\x02\u026D\u0270\x05\\/\x02\u026E\u0270\x05\x18\r\x02\u026F" +
		"\u026C\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F\u026E\x03\x02" +
		"\x02\x02\u0270Y\x03\x02\x02\x02\u0271\u027B\x05h5\x02\u0272\u027B\x05" +
		"j6\x02\u0273\u027B\x05|?\x02\u0274\u027B\x05~@\x02\u0275\u027B\x05\x80" +
		"A\x02\u0276\u027B\x05\x82B\x02\u0277\u027B\x05\x84C\x02\u0278\u027B\x05" +
		"\x86D\x02\u0279\u027B\x05\xC2b\x02\u027A\u0271\x03\x02\x02\x02\u027A\u0272" +
		"\x03\x02\x02\x02\u027A\u0273\x03\x02\x02\x02\u027A\u0274\x03\x02\x02\x02" +
		"\u027A\u0275\x03\x02\x02\x02\u027A\u0276\x03\x02\x02\x02\u027A\u0277\x03" +
		"\x02\x02\x02\u027A\u0278\x03\x02\x02\x02\u027A\u0279\x03\x02\x02\x02\u027B" +
		"[\x03\x02\x02\x02\u027C\u0281\x05\x9EP\x02\u027D\u0281\x05\xA0Q\x02\u027E" +
		"\u0281\x05\xA2R\x02\u027F\u0281\x05\xBE`\x02\u0280\u027C\x03\x02\x02\x02" +
		"\u0280\u027D\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0280\u027F\x03" +
		"\x02\x02\x02\u0281]\x03\x02\x02\x02\u0282\u0286\x05\x88E\x02\u0283\u0286" +
		"\x05\x8EH\x02\u0284\u0286\x05\x9AN\x02\u0285\u0282\x03\x02\x02\x02\u0285" +
		"\u0283\x03\x02\x02\x02\u0285\u0284\x03\x02\x02\x02\u0286_\x03\x02\x02" +
		"\x02\u0287\u028C\x05b2\x02\u0288\u0289\x07\x0F\x02\x02\u0289\u028B\x05" +
		"b2\x02\u028A\u0288\x03\x02\x02\x02\u028B\u028E\x03\x02\x02\x02\u028C\u028A" +
		"\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028Da\x03\x02\x02\x02\u028E" +
		"\u028C\x03\x02\x02\x02\u028F\u0292\x05d3\x02\u0290\u0292\x05f4\x02\u0291" +
		"\u028F\x03\x02\x02\x02\u0291\u0290\x03\x02\x02\x02\u0292c\x03\x02\x02" +
		"\x02\u0293\u0294\x07d\x02\x02\u0294e\x03\x02\x02\x02\u0295\u0296\x05\xA4" +
		"S\x02\u0296g\x03\x02\x02\x02\u0297\u029C\x07U\x02\x02\u0298\u029C\x07" +
		"\\\x02\x02\u0299\u029A\x07?\x02\x02\u029A\u029C\x07\\\x02\x02\u029B\u0297" +
		"\x03\x02\x02\x02\u029B\u0298\x03\x02\x02\x02\u029B\u0299\x03\x02\x02\x02" +
		"\u029Ci\x03\x02\x02\x02\u029D\u02A0\x05l7\x02\u029E\u02A0\x05t;\x02\u029F" +
		"\u029D\x03\x02\x02\x02\u029F\u029E\x03\x02\x02\x02\u02A0k\x03\x02\x02" +
		"\x02\u02A1\u02A5\x05n8\x02\u02A2\u02A5\x05p9\x02\u02A3\u02A5\x05r:\x02" +
		"\u02A4\u02A1\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4\u02A3\x03" +
		"\x02\x02\x02\u02A5m\x03\x02\x02\x02\u02A6\u02A7\x07>\x02\x02\u02A7o\x03" +
		"\x02\x02\x02\u02A8\u02A9\x07?\x02\x02\u02A9q\x03\x02\x02\x02\u02AA\u02AB" +
		"\x07?\x02\x02\u02AB\u02AC\x07?\x02\x02\u02ACs\x03\x02\x02\x02\u02AD\u02B1" +
		"\x05v<\x02\u02AE\u02B1\x05x=\x02\u02AF\u02B1\x05z>\x02\u02B0\u02AD\x03" +
		"\x02\x02\x02\u02B0\u02AE\x03\x02\x02\x02\u02B0\u02AF\x03\x02\x02\x02\u02B1" +
		"u\x03\x02\x02\x02\u02B2\u02B3\x07N\x02\x02\u02B3\u02B4\x07>\x02\x02\u02B4" +
		"w\x03\x02\x02\x02\u02B5\u02B6\x07N\x02\x02\u02B6\u02B7\x07?\x02\x02\u02B7" +
		"y\x03\x02\x02\x02\u02B8\u02B9\x07N\x02\x02\u02B9\u02BA\x07?\x02\x02\u02BA" +
		"\u02BB\x07?\x02\x02\u02BB{\x03\x02\x02\x02\u02BC\u02BD\x07S\x02\x02\u02BD" +
		"}\x03\x02\x02\x02\u02BE\u02BF\x07:\x02\x02\u02BF\x7F\x03\x02\x02\x02\u02C0" +
		"\u02C1\x07V\x02\x02\u02C1\x81\x03\x02\x02\x02\u02C2\u02C3\x07/\x02\x02" +
		"\u02C3\x83\x03\x02\x02\x02\u02C4\u02C5\x07R\x02\x02\u02C5\x85\x03\x02" +
		"\x02\x02\u02C6\u02C7\x07L\x02\x02\u02C7\x87\x03\x02\x02\x02\u02C8\u02C9" +
		"\x072\x02\x02\u02C9\u02CA\x07d\x02\x02\u02CA\u02CB\x07\x10\x02\x02\u02CB" +
		"\u02CC\x05\x8AF\x02\u02CC\u02CD\x07\x11\x02\x02\u02CD\x89\x03\x02\x02" +
		"\x02\u02CE\u02D0\x05\x8CG\x02\u02CF\u02CE\x03\x02\x02\x02\u02D0\u02D1" +
		"\x03\x02\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02" +
		"\u02D2\x8B\x03\x02\x02\x02\u02D3\u02D4\x05V,\x02\u02D4\u02D5\x05`1\x02" +
		"\u02D5\u02D6\x07\r\x02\x02\u02D6\x8D\x03\x02\x02\x02\u02D7\u02D8\x07P" +
		"\x02\x02\u02D8\u02D9\x07d\x02\x02\u02D9\u02DA\x07)\x02\x02\u02DA\u02DB" +
		"\x07\x12\x02\x02\u02DB\u02DC\x05\x90I\x02\u02DC\u02DD\x07\x13\x02\x02" +
		"\u02DD\u02DE\x07\x10\x02\x02\u02DE\u02DF\x05\x92J\x02\u02DF\u02E0\x07" +
		"\x11\x02\x02\u02E0\x8F\x03\x02\x02\x02\u02E1\u02E7\x05j6\x02\u02E2\u02E7" +
		"\x05|?\x02\u02E3\u02E7\x05\x80A\x02\u02E4\u02E7\x05\x9AN\x02\u02E5\u02E7" +
		"\x05\x18\r\x02\u02E6\u02E1\x03\x02\x02\x02\u02E6\u02E2\x03\x02\x02\x02" +
		"\u02E6\u02E3\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E6\u02E5\x03" +
		"\x02\x02\x02\u02E7\x91\x03\x02\x02\x02\u02E8\u02EA\x05\x94K\x02\u02E9" +
		"\u02E8\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02E9\x03\x02" +
		"\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\x93\x03\x02\x02\x02\u02ED\u02EF" +
		"\x05\x96L\x02\u02EE\u02ED\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02" +
		"\u02F0\u02EE\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2\x03" +
		"\x02\x02\x02\u02F2\u02F3\x05\x98M\x02\u02F3\u02F4\x07\r\x02\x02\u02F4" +
		"\x95\x03\x02\x02\x02\u02F5\u02F6\x07T\x02\x02\u02F6\u02F7\x05:\x1E\x02" +
		"\u02F7\u02F8\x07\x0E\x02\x02\u02F8\u02FC\x03\x02\x02\x02\u02F9\u02FA\x07" +
		"<\x02\x02\u02FA\u02FC\x07\x0E\x02\x02\u02FB\u02F5\x03\x02\x02\x02\u02FB" +
		"\u02F9\x03\x02\x02\x02\u02FC\x97\x03\x02\x02\x02\u02FD\u02FE\x05V,\x02" +
		"\u02FE\u02FF\x05b2\x02\u02FF\x99\x03\x02\x02\x02\u0300\u0301\x07@\x02" +
		"\x02\u0301\u0302\x07d\x02\x02\u0302\u0303\x07\x10\x02\x02\u0303\u0308" +
		"\x05\x9CO\x02\u0304\u0305\x07\x0F\x02\x02\u0305\u0307\x05\x9CO\x02\u0306" +
		"\u0304\x03\x02\x02\x02\u0307\u030A\x03\x02\x02\x02\u0308\u0306\x03\x02" +
		"\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030B\x03\x02\x02\x02\u030A" +
		"\u0308\x03\x02\x02\x02\u030B\u030C\x07\x11\x02\x02\u030C\x9B\x03\x02\x02" +
		"\x02\u030D\u030E\x07d\x02\x02\u030E\x9D\x03\x02\x02\x02\u030F\u0310\x07" +
		"0\x02\x02\u0310\u0311\x07\x18\x02\x02\u0311\u0312\x05X-\x02\u0312\u0313" +
		"\x07\x0F\x02\x02\u0313\u0314\x05P)\x02\u0314\u0315\x07\x19\x02\x02\u0315" +
		"\u031C\x03\x02\x02\x02\u0316\u0317\x070\x02\x02\u0317\u0318\x07\x18\x02" +
		"\x02\u0318\u0319\x05X-\x02\u0319\u031A\x07\x19\x02\x02\u031A\u031C\x03" +
		"\x02\x02\x02\u031B\u030F\x03\x02\x02\x02\u031B\u0316\x03\x02\x02\x02\u031C" +
		"\x9F\x03\x02\x02\x02\u031D\u031E\x07(\x02\x02\u031E\u031F\x07\x18\x02" +
		"\x02\u031F\u0320\x05P)\x02\u0320\u0321\x07\x19\x02\x02\u0321\u0324\x03" +
		"\x02\x02\x02\u0322\u0324\x07(\x02\x02\u0323\u031D\x03\x02\x02\x02\u0323" +
		"\u0322\x03\x02\x02\x02\u0324\xA1\x03\x02\x02\x02\u0325\u0326\x07A\x02" +
		"\x02\u0326\u0327\x07\x18\x02\x02\u0327\u0328\x05P)\x02\u0328\u0329\x07" +
		"\x19\x02\x02\u0329\u032C\x03\x02\x02\x02\u032A\u032C\x07A\x02\x02\u032B" +
		"\u0325\x03\x02\x02\x02\u032B\u032A\x03\x02\x02\x02\u032C\xA3\x03\x02\x02" +
		"\x02\u032D\u032F\x07d\x02\x02\u032E\u0330\x05\xA6T\x02\u032F\u032E\x03" +
		"\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0331" +
		"\u0332\x03\x02\x02\x02\u0332\xA5\x03\x02\x02\x02\u0333\u0334\x07\x14\x02" +
		"\x02\u0334\u0335\x05P)\x02\u0335\u0336\x07\x15\x02\x02\u0336\xA7\x03\x02" +
		"\x02\x02\u0337\u033A\x05\xCEh\x02\u0338\u033A\x05\xD2j\x02\u0339\u0337" +
		"\x03\x02\x02\x02\u0339\u0338\x03\x02\x02\x02\u033A\xA9\x03\x02\x02\x02" +
		"\u033B\u033C\x07E\x02\x02\u033C\u033D\x07d\x02\x02\u033D\u0341\x07\x10" +
		"\x02\x02\u033E\u0340\x05\x8CG\x02\u033F\u033E\x03\x02\x02\x02\u0340\u0343" +
		"\x03\x02\x02\x02\u0341\u033F\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02" +
		"\u0342\u0344\x03\x02\x02\x02\u0343\u0341\x03\x02\x02\x02\u0344\u0345\x07" +
		"\x11\x02\x02\u0345\xAB\x03\x02\x02\x02\u0346\u0348\x05\xAEX\x02\u0347" +
		"\u0346\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348\u0349\x03\x02" +
		"\x02\x02\u0349\u034A\x05\xB0Y\x02\u034A\u034B\x07d\x02\x02\u034B\u034D" +
		"\x05\xB2Z\x02\u034C\u034E\x05\xB8]\x02\u034D\u034C\x03\x02\x02\x02\u034D" +
		"\u034E\x03\x02\x02\x02\u034E\u0350\x03\x02\x02\x02\u034F\u0351\x05\xBA" +
		"^\x02\u0350\u034F\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351\xAD" +
		"\x03\x02\x02\x02\u0352\u0353\x07Q\x02\x02\u0353\xAF\x03\x02\x02\x02\u0354" +
		"\u0357\x05\xBC_\x02\u0355\u0357\x077\x02\x02\u0356\u0354\x03\x02\x02\x02" +
		"\u0356\u0355\x03\x02\x02\x02\u0357\xB1\x03\x02\x02\x02\u0358\u0359\x07" +
		"\x12\x02\x02\u0359\u035E\x05\xB4[\x02\u035A\u035B\x07\x0F\x02\x02\u035B" +
		"\u035D\x05\xB4[\x02\u035C\u035A\x03\x02\x02\x02\u035D\u0360\x03\x02\x02" +
		"\x02\u035E\u035C\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u0361" +
		"\x03\x02\x02\x02\u0360\u035E\x03\x02\x02\x02\u0361\u0362\x07\x13\x02\x02" +
		"\u0362\u0366\x03\x02\x02\x02\u0363\u0364\x07\x12\x02\x02\u0364\u0366\x07" +
		"\x13\x02\x02\u0365\u0358\x03\x02\x02\x02\u0365\u0363\x03\x02\x02\x02\u0366" +
		"\xB3\x03\x02\x02\x02\u0367\u0368\x05\xB6\\\x02\u0368\u0369\x05\xBC_\x02" +
		"\u0369\u036A\x05d3\x02\u036A\xB5\x03\x02\x02\x02\u036B\u036C\t\t\x02\x02" +
		"\u036C\xB7\x03\x02\x02\x02\u036D\u036E\x076\x02\x02\u036E\u036F\x07\x12" +
		"\x02\x02\u036F\u0374\x05\x18\r\x02\u0370\u0371\x07\x0F\x02\x02\u0371\u0373" +
		"\x05\x18\r\x02\u0372\u0370\x03\x02\x02\x02\u0373\u0376\x03\x02\x02\x02" +
		"\u0374\u0372\x03\x02\x02\x02\u0374\u0375\x03\x02\x02\x02\u0375\u0377\x03" +
		"\x02\x02\x02\u0376\u0374\x03\x02\x02\x02\u0377\u0378\x07\x13\x02\x02\u0378" +
		"\xB9\x03\x02\x02\x02\u0379\u037A\x07B\x02\x02\u037A\u037B\x07\x12\x02" +
		"\x02\u037B\u0380\x07\v\x02\x02\u037C\u037D\x07\x0F\x02\x02\u037D\u037F" +
		"\x07\v\x02\x02\u037E\u037C\x03\x02\x02\x02\u037F\u0382\x03\x02\x02\x02" +
		"\u0380\u037E\x03\x02\x02\x02\u0380\u0381\x03\x02\x02\x02\u0381\u0383\x03" +
		"\x02\x02\x02\u0382\u0380\x03\x02\x02\x02\u0383\u0384\x07\x13\x02\x02\u0384" +
		"\xBB\x03\x02\x02\x02\u0385\u038A\x05Z.\x02\u0386\u038A\x05\xA0Q\x02\u0387" +
		"\u038A\x05\xA2R\x02\u0388\u038A\x05\x18\r\x02\u0389\u0385\x03\x02\x02" +
		"\x02\u0389\u0386\x03\x02\x02\x02\u0389\u0387\x03\x02\x02\x02\u0389\u0388" +
		"\x03\x02\x02\x02\u038A\xBD\x03\x02\x02\x02\u038B\u038C\x07O\x02\x02\u038C" +
		"\u038D\x07\x18\x02\x02\u038D\u038E\x05P)\x02\u038E\u038F\x07\x0F\x02\x02" +
		"\u038F\u0390\x05P)\x02\u0390\u0391\x07\x19\x02\x02\u0391\xBF\x03\x02\x02" +
		"\x02\u0392\u0393\x07O\x02\x02\u0393\xC1\x03\x02\x02\x02\u0394\u0395\x07" +
		"H\x02\x02\u0395\xC3\x03\x02\x02\x02\u0396\u0397\x072\x02\x02\u0397\u039B" +
		"\x07d\x02\x02\u0398\u0399\x07P\x02\x02\u0399\u039B\x07d\x02\x02\u039A" +
		"\u0396\x03\x02\x02\x02\u039A\u0398\x03\x02\x02\x02\u039B\xC5\x03\x02\x02" +
		"\x02\u039C\u039D\x071\x02\x02\u039D\u039E\x05\xC8e\x02\u039E\u039F\x07" +
		"\r\x02\x02\u039F\xC7\x03\x02\x02\x02\u03A0\u03A3\x05\x18\r\x02\u03A1\u03A3" +
		"\x07\v\x02\x02\u03A2\u03A0\x03\x02\x02\x02\u03A2\u03A1\x03\x02\x02\x02" +
		"\u03A3\xC9\x03\x02\x02\x02\u03A4\u03A5\x07^\x02\x02\u03A5\u03A6\x05\x18" +
		"\r\x02\u03A6\u03A7\x07\v\x02\x02\u03A7\xCB\x03\x02\x02\x02\u03A8\u03A9" +
		"\x07]\x02\x02\u03A9\u03AA\x05\x18\r\x02\u03AA\u03AB\x07\v\x02\x02\u03AB" +
		"\xCD\x03\x02\x02\x02\u03AC\u03AD\x074\x02\x02\u03AD\u03AE\x07_\x02\x02" +
		"\u03AE\u03AF\x05\xBC_\x02\u03AF\u03B0\x05\xD0i\x02\u03B0\xCF\x03\x02\x02" +
		"\x02\u03B1\u03B2\x05d3\x02\u03B2\u03B3\x05\xB8]\x02\u03B3\u03BD\x03\x02" +
		"\x02\x02\u03B4\u03B9\x05d3\x02\u03B5\u03B6\x07\x0F\x02\x02\u03B6\u03B8" +
		"\x05d3\x02\u03B7\u03B5\x03\x02\x02\x02\u03B8\u03BB\x03\x02\x02\x02\u03B9" +
		"\u03B7\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA\u03BD\x03\x02" +
		"\x02\x02\u03BB\u03B9\x03\x02\x02\x02\u03BC\u03B1\x03\x02\x02\x02\u03BC" +
		"\u03B4\x03\x02\x02\x02\u03BD\xD1\x03\x02\x02\x02\u03BE\u03BF\x07_\x02" +
		"\x02\u03BF\u03C0\x05\xBC_\x02\u03C0\u03C1\x05\xD4k\x02\u03C1\xD3\x03\x02" +
		"\x02\x02\u03C2\u03C3\x05d3\x02\u03C3\u03C4\x05\xD6l\x02\u03C4\u03CE\x03" +
		"\x02\x02\x02\u03C5\u03CA\x05d3\x02\u03C6\u03C7\x07\x0F\x02\x02\u03C7\u03C9" +
		"\x05d3\x02\u03C8\u03C6\x03\x02\x02\x02\u03C9\u03CC\x03\x02\x02\x02\u03CA" +
		"\u03C8\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB\u03CE\x03\x02" +
		"\x02\x02\u03CC\u03CA\x03\x02\x02\x02\u03CD\u03C2\x03\x02\x02\x02\u03CD" +
		"\u03C5\x03\x02\x02\x02\u03CE\xD5\x03\x02\x02\x02\u03CF\u03D1\x05\xD8m" +
		"\x02\u03D0\u03D2\x05\xDAn\x02\u03D1\u03D0\x03\x02\x02\x02\u03D1\u03D2" +
		"\x03\x02\x02\x02\u03D2\u03D5\x03\x02\x02\x02\u03D3\u03D5\x05\xDAn\x02" +
		"\u03D4\u03CF\x03\x02\x02\x02\u03D4\u03D3\x03\x02\x02\x02\u03D5\xD7\x03" +
		"\x02\x02\x02\u03D6\u03D7\x07F\x02\x02\u03D7\u03D8\x05\xDCo\x02\u03D8\xD9" +
		"\x03\x02\x02\x02\u03D9\u03DA\x07%\x02\x02\u03DA\u03DB\x05\xDCo\x02\u03DB" +
		"\xDB\x03\x02\x02\x02\u03DC\u03DD\x07\x12\x02\x02\u03DD\u03E2\x05\x18\r" +
		"\x02\u03DE\u03DF\x07\x0F\x02\x02\u03DF\u03E1\x05\x18\r\x02\u03E0\u03DE" +
		"\x03\x02\x02\x02\u03E1\u03E4\x03\x02\x02\x02\u03E2\u03E0\x03\x02\x02\x02" +
		"\u03E2\u03E3\x03\x02\x02\x02\u03E3\u03E5\x03\x02\x02\x02\u03E4\u03E2\x03" +
		"\x02\x02\x02\u03E5\u03E6\x07\x13\x02\x02\u03E6\xDD\x03\x02\x02\x02\u03E7" +
		"\u03EA\x05\xE2r\x02\u03E8\u03EA\x05\xE0q\x02\u03E9\u03E7\x03\x02\x02\x02" +
		"\u03E9\u03E8\x03\x02\x02\x02\u03EA\xDF\x03\x02\x02\x02\u03EB\u03EC\x07" +
		"c\x02\x02\u03EC\u03ED\x07d\x02\x02\u03ED\xE1\x03\x02\x02\x02\u03EE\u03EF" +
		"\x05\xE4s\x02\u03EF\u03F0\x07\x10\x02\x02\u03F0\u03F1\x05\xEAv\x02\u03F1" +
		"\u03F2\x07\x11\x02\x02\u03F2\xE3\x03\x02\x02\x02\u03F3\u03F4\x07c\x02" +
		"\x02\u03F4\u03F6\x07d\x02\x02\u03F5\u03F7\x05\xE8u\x02\u03F6\u03F5\x03" +
		"\x02\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7\u03F9\x03\x02\x02\x02\u03F8" +
		"\u03FA\x05\xE6t\x02\u03F9\u03F8\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02" +
		"\x02\u03FA\xE5\x03\x02\x02\x02\u03FB\u03FC\x07J\x02\x02\u03FC\u0401\x05" +
		"\x18\r\x02\u03FD\u03FE\x07\x0F\x02\x02\u03FE\u0400\x05\x18\r\x02\u03FF" +
		"\u03FD\x03\x02\x02\x02\u0400\u0403\x03\x02\x02\x02\u0401\u03FF\x03\x02" +
		"\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\xE7\x03\x02\x02\x02\u0403\u0401" +
		"\x03\x02\x02\x02\u0404\u0405\x07\x0E\x02\x02\u0405\u0406\x05\x18\r\x02" +
		"\u0406\xE9\x03\x02\x02\x02\u0407\u0409\x05\xECw\x02\u0408\u0407\x03\x02" +
		"\x02\x02\u0409\u040C\x03\x02\x02\x02\u040A\u0408\x03\x02\x02\x02\u040A" +
		"\u040B\x03\x02\x02\x02\u040B\xEB\x03\x02\x02\x02\u040C\u040A\x03\x02\x02" +
		"\x02\u040D\u040E\x05\xEEx\x02\u040E\u040F\x07\r\x02\x02\u040F\u0420\x03" +
		"\x02\x02\x02\u0410\u0411\x05\xF2z\x02\u0411\u0412\x07\r\x02\x02\u0412" +
		"\u0420\x03\x02\x02\x02\u0413\u0414\x05\xF4{\x02\u0414\u0415\x07\r\x02" +
		"\x02\u0415\u0420\x03\x02\x02\x02\u0416\u0417\x05\xF6|\x02\u0417\u0418" +
		"\x07\r\x02\x02\u0418\u0420\x03\x02\x02\x02\u0419\u041A\x05\xF8}\x02\u041A" +
		"\u041B\x07\r\x02\x02\u041B\u0420\x03\x02\x02\x02\u041C\u041D\x05\xA8U" +
		"\x02\u041D\u041E\x07\r\x02\x02\u041E\u0420\x03\x02\x02\x02\u041F\u040D" +
		"\x03\x02\x02\x02\u041F\u0410\x03\x02\x02\x02\u041F\u0413\x03\x02\x02\x02" +
		"\u041F\u0416\x03\x02\x02\x02\u041F\u0419\x03\x02\x02\x02\u041F\u041C\x03" +
		"\x02\x02\x02\u0420\xED\x03\x02\x02\x02\u0421\u0422\x07Z\x02\x02\u0422" +
		"\u0423\x05\xF0y\x02\u0423\u0424\x07d\x02\x02\u0424\xEF\x03\x02\x02\x02" +
		"\u0425\u0428\x05\x18\r\x02\u0426\u0428\x07L\x02\x02\u0427\u0425\x03\x02" +
		"\x02\x02\u0427\u0426\x03\x02\x02\x02\u0428\xF1\x03\x02\x02\x02\u0429\u042B" +
		"\x07,\x02\x02\u042A\u042C\x07W\x02\x02\u042B\u042A\x03\x02\x02\x02\u042B" +
		"\u042C\x03\x02\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D\u042E\x05\xF0" +
		"y\x02\u042E\u042F\x07d\x02\x02\u042F\xF3\x03\x02\x02\x02\u0430\u0431\x07" +
		"\'\x02\x02\u0431\u0432\x05\x18\r\x02\u0432\u0433\x07d\x02\x02\u0433\xF5" +
		"\x03\x02\x02\x02\u0434\u0435\x07*\x02\x02\u0435\u0436\x05\x18\r\x02\u0436" +
		"\u0437\x07d\x02\x02\u0437\xF7\x03\x02\x02\x02\u0438\u0439\x07[\x02\x02" +
		"\u0439\u043A\x05\x18\r\x02\u043A\u043B\x07d\x02\x02\u043B\xF9\x03\x02" +
		"\x02\x02\u043C\u043D\x05\xFC\x7F\x02\u043D\u043E\x05\u0102\x82\x02\u043E" +
		"\xFB\x03\x02\x02\x02\u043F\u0440\x07C\x02\x02\u0440\u0442\x07d\x02\x02" +
		"\u0441\u0443\x05\xFE\x80\x02\u0442\u0441\x03\x02\x02\x02\u0442\u0443\x03" +
		"\x02\x02\x02\u0443\u0445\x03\x02\x02\x02\u0444\u0446\x05\xE6t\x02\u0445" +
		"\u0444\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446\u0447\x03\x02" +
		"\x02\x02\u0447\u0448\x07a\x02\x02\u0448\u044A\x05\x18\r\x02\u0449\u044B" +
		"\x05\u0100\x81\x02\u044A\u0449\x03\x02\x02\x02\u044A\u044B\x03\x02\x02" +
		"\x02\u044B\xFD\x03\x02\x02\x02\u044C\u044D\x07\x0E\x02\x02\u044D\u044E" +
		"\x05\x18\r\x02\u044E\xFF\x03\x02\x02\x02\u044F\u0450\x07-\x02\x02\u0450" +
		"\u0451\x05\x18\r\x02\u0451\u0101\x03\x02\x02\x02\u0452\u0456\x07\x10\x02" +
		"\x02\u0453\u0455\x05\u0104\x83\x02\u0454\u0453\x03\x02\x02\x02\u0455\u0458" +
		"\x03\x02\x02\x02\u0456\u0454\x03\x02\x02\x02\u0456\u0457\x03\x02\x02\x02" +
		"\u0457\u0459\x03\x02\x02\x02\u0458\u0456\x03\x02\x02\x02\u0459\u045A\x07" +
		"\x11\x02\x02\u045A\u0103\x03\x02\x02\x02\u045B\u0463\x05\x12\n\x02\u045C" +
		"\u045D\x05\u0106\x84\x02\u045D\u045E\x07\r\x02\x02\u045E\u0463\x03\x02" +
		"\x02\x02\u045F\u0460\x05\u0108\x85\x02\u0460\u0461\x07\r\x02\x02\u0461" +
		"\u0463\x03\x02\x02\x02\u0462\u045B\x03\x02\x02\x02\u0462\u045C\x03\x02" +
		"\x02\x02\u0462\u045F\x03\x02\x02\x02\u0463\u0105\x03\x02\x02\x02\u0464" +
		"\u0465\x07D\x02\x02\u0465\u0466\x07d\x02\x02\u0466\u0468\x07\x12\x02\x02" +
		"\u0467\u0469\x050\x19\x02\u0468\u0467\x03\x02\x02\x02\u0468\u0469\x03" +
		"\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A\u046C\x07\x13\x02\x02\u046B" +
		"\u046D\x05\xB8]\x02\u046C\u046B\x03\x02\x02\x02\u046C\u046D\x03\x02\x02" +
		"\x02\u046D\u0107\x03\x02\x02\x02\u046E\u046F\x075\x02\x02\u046F\u0470" +
		"\x07d\x02\x02\u0470\u0472\x07\x12\x02\x02\u0471\u0473\x050\x19\x02\u0472" +
		"\u0471\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473\u0474\x03\x02" +
		"\x02\x02\u0474\u0476\x07\x13\x02\x02\u0475\u0477\x05\xB8]\x02\u0476\u0475" +
		"\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477\u0109\x03\x02\x02\x02" +
		"\u0478\u047C\x05\u0110\x89\x02\u0479\u047C\x05\u010E\x88\x02\u047A\u047C" +
		"\x05\u010C\x87\x02\u047B\u0478\x03\x02\x02\x02\u047B\u0479\x03\x02\x02" +
		"\x02\u047B\u047A\x03\x02\x02\x02\u047C\u010B\x03\x02\x02\x02\u047D\u047F" +
		"\x07X\x02\x02\u047E\u047D\x03\x02\x02\x02\u047E\u047F\x03\x02\x02\x02" +
		"\u047F\u0480\x03\x02\x02\x02\u0480\u0481\x079\x02\x02\u0481\u0482\x07" +
		"d\x02\x02\u0482\u010D\x03\x02\x02\x02\u0483\u0484\x07X\x02\x02\u0484\u0485" +
		"\x079\x02\x02\u0485\u0486\x07d\x02\x02\u0486\u0487\x05&\x14\x02\u0487" +
		"\u048B\x07\x10\x02\x02\u0488\u048A\x05\x12\n\x02\u0489\u0488\x03\x02\x02" +
		"\x02\u048A\u048D\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048B\u048C" +
		"\x03\x02\x02\x02\u048C\u048E\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02" +
		"\u048E\u048F\x07\x11\x02\x02\u048F\u010F\x03\x02\x02\x02\u0490\u0491\x05" +
		"\u0112\x8A\x02\u0491\u0495\x07\x10\x02\x02\u0492\u0494\x05*\x16\x02\u0493" +
		"\u0492\x03\x02\x02\x02\u0494\u0497\x03\x02\x02\x02\u0495\u0493\x03\x02" +
		"\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496\u0498\x03\x02\x02\x02\u0497" +
		"\u0495\x03\x02\x02\x02\u0498\u0499\x07\x11\x02\x02\u0499\u0111\x03";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\x02\u049A\u049C\x07.\x02\x02\u049B\u049A\x03\x02\x02\x02\u049B" +
		"\u049C\x03\x02\x02\x02\u049C\u049D\x03\x02\x02\x02\u049D\u049E\x079\x02" +
		"\x02\u049E\u049F\x07d\x02\x02\u049F\u04A0\x05&\x14\x02\u04A0\u0113\x03" +
		"\x02\x02\x02f\u0117\u011D\u0140\u0148\u014E\u0156\u015C\u0161\u0166\u017E" +
		"\u0186\u018C\u0193\u019A\u019D\u01AE\u01B8\u01BE\u01C6\u01CD\u01D0\u01D8" +
		"\u01DB\u01E2\u01ED\u01F1\u01FA\u0213\u021C\u0224\u022C\u0234\u023C\u0244" +
		"\u024B\u0255\u0263\u026A\u026F\u027A\u0280\u0285\u028C\u0291\u029B\u029F" +
		"\u02A4\u02B0\u02D1\u02E6\u02EB\u02F0\u02FB\u0308\u031B\u0323\u032B\u0331" +
		"\u0339\u0341\u0347\u034D\u0350\u0356\u035E\u0365\u0374\u0380\u0389\u039A" +
		"\u03A2\u03B9\u03BC\u03CA\u03CD\u03D1\u03D4\u03E2\u03E9\u03F6\u03F9\u0401" +
		"\u040A\u041F\u0427\u042B\u0442\u0445\u044A\u0456\u0462\u0468\u046C\u0472" +
		"\u0476\u047B\u047E\u048B\u0495\u049B";
	public static readonly _serializedATN: string = Utils.join(
		[
			IDLParser._serializedATNSegment0,
			IDLParser._serializedATNSegment1,
			IDLParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!IDLParser.__ATN) {
			IDLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(IDLParser._serializedATN));
		}

		return IDLParser.__ATN;
	}

}

export class SpecificationContext extends ParserRuleContext {
	public import_decl(): Import_declContext[];
	public import_decl(i: number): Import_declContext;
	public import_decl(i?: number): Import_declContext | Import_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Import_declContext);
		} else {
			return this.getRuleContext(i, Import_declContext);
		}
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
	public get ruleIndex(): number { return IDLParser.RULE_specification; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterSpecification) {
			listener.enterSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitSpecification) {
			listener.exitSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitSpecification) {
			return visitor.visitSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitionContext extends ParserRuleContext {
	public type_decl(): Type_declContext | undefined {
		return this.tryGetRuleContext(0, Type_declContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(IDLParser.SEMICOLON, 0); }
	public const_decl(): Const_declContext | undefined {
		return this.tryGetRuleContext(0, Const_declContext);
	}
	public except_decl(): Except_declContext | undefined {
		return this.tryGetRuleContext(0, Except_declContext);
	}
	public interface_or_forward_decl(): Interface_or_forward_declContext | undefined {
		return this.tryGetRuleContext(0, Interface_or_forward_declContext);
	}
	public module(): ModuleContext | undefined {
		return this.tryGetRuleContext(0, ModuleContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public type_id_decl(): Type_id_declContext | undefined {
		return this.tryGetRuleContext(0, Type_id_declContext);
	}
	public type_prefix_decl(): Type_prefix_declContext | undefined {
		return this.tryGetRuleContext(0, Type_prefix_declContext);
	}
	public event(): EventContext | undefined {
		return this.tryGetRuleContext(0, EventContext);
	}
	public component(): ComponentContext | undefined {
		return this.tryGetRuleContext(0, ComponentContext);
	}
	public home_decl(): Home_declContext | undefined {
		return this.tryGetRuleContext(0, Home_declContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_definition; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterDefinition) {
			listener.enterDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitDefinition) {
			listener.exitDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitDefinition) {
			return visitor.visitDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleContext extends ParserRuleContext {
	public KW_MODULE(): TerminalNode { return this.getToken(IDLParser.KW_MODULE, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public LEFT_BRACE(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACE, 0); }
	public RIGHT_BRACE(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACE, 0); }
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
	public get ruleIndex(): number { return IDLParser.RULE_module; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterModule) {
			listener.enterModule(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitModule) {
			listener.exitModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitModule) {
			return visitor.visitModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_or_forward_declContext extends ParserRuleContext {
	public interface_decl(): Interface_declContext | undefined {
		return this.tryGetRuleContext(0, Interface_declContext);
	}
	public forward_decl(): Forward_declContext | undefined {
		return this.tryGetRuleContext(0, Forward_declContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_interface_or_forward_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterInterface_or_forward_decl) {
			listener.enterInterface_or_forward_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitInterface_or_forward_decl) {
			listener.exitInterface_or_forward_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitInterface_or_forward_decl) {
			return visitor.visitInterface_or_forward_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_declContext extends ParserRuleContext {
	public interface_header(): Interface_headerContext {
		return this.getRuleContext(0, Interface_headerContext);
	}
	public LEFT_BRACE(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACE, 0); }
	public interface_body(): Interface_bodyContext {
		return this.getRuleContext(0, Interface_bodyContext);
	}
	public RIGHT_BRACE(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_interface_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterInterface_decl) {
			listener.enterInterface_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitInterface_decl) {
			listener.exitInterface_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitInterface_decl) {
			return visitor.visitInterface_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Forward_declContext extends ParserRuleContext {
	public KW_INTERFACE(): TerminalNode { return this.getToken(IDLParser.KW_INTERFACE, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public KW_ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_ABSTRACT, 0); }
	public KW_LOCAL(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_LOCAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_forward_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterForward_decl) {
			listener.enterForward_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitForward_decl) {
			listener.exitForward_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitForward_decl) {
			return visitor.visitForward_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_headerContext extends ParserRuleContext {
	public KW_INTERFACE(): TerminalNode { return this.getToken(IDLParser.KW_INTERFACE, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public interface_inheritance_spec(): Interface_inheritance_specContext | undefined {
		return this.tryGetRuleContext(0, Interface_inheritance_specContext);
	}
	public KW_ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_ABSTRACT, 0); }
	public KW_LOCAL(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_LOCAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_interface_header; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterInterface_header) {
			listener.enterInterface_header(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitInterface_header) {
			listener.exitInterface_header(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitInterface_header) {
			return visitor.visitInterface_header(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_bodyContext extends ParserRuleContext {
	public export(): ExportContext[];
	public export(i: number): ExportContext;
	public export(i?: number): ExportContext | ExportContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExportContext);
		} else {
			return this.getRuleContext(i, ExportContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_interface_body; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterInterface_body) {
			listener.enterInterface_body(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitInterface_body) {
			listener.exitInterface_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitInterface_body) {
			return visitor.visitInterface_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportContext extends ParserRuleContext {
	public type_decl(): Type_declContext | undefined {
		return this.tryGetRuleContext(0, Type_declContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(IDLParser.SEMICOLON, 0); }
	public const_decl(): Const_declContext | undefined {
		return this.tryGetRuleContext(0, Const_declContext);
	}
	public except_decl(): Except_declContext | undefined {
		return this.tryGetRuleContext(0, Except_declContext);
	}
	public attr_decl(): Attr_declContext | undefined {
		return this.tryGetRuleContext(0, Attr_declContext);
	}
	public op_decl(): Op_declContext | undefined {
		return this.tryGetRuleContext(0, Op_declContext);
	}
	public type_id_decl(): Type_id_declContext | undefined {
		return this.tryGetRuleContext(0, Type_id_declContext);
	}
	public type_prefix_decl(): Type_prefix_declContext | undefined {
		return this.tryGetRuleContext(0, Type_prefix_declContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_export; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterExport) {
			listener.enterExport(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitExport) {
			listener.exitExport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitExport) {
			return visitor.visitExport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_inheritance_specContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(IDLParser.COLON, 0); }
	public interface_name(): Interface_nameContext[];
	public interface_name(i: number): Interface_nameContext;
	public interface_name(i?: number): Interface_nameContext | Interface_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Interface_nameContext);
		} else {
			return this.getRuleContext(i, Interface_nameContext);
		}
	}
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.COMA);
		} else {
			return this.getToken(IDLParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_interface_inheritance_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterInterface_inheritance_spec) {
			listener.enterInterface_inheritance_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitInterface_inheritance_spec) {
			listener.exitInterface_inheritance_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitInterface_inheritance_spec) {
			return visitor.visitInterface_inheritance_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_nameContext extends ParserRuleContext {
	public scoped_name(): Scoped_nameContext {
		return this.getRuleContext(0, Scoped_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_interface_name; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterInterface_name) {
			listener.enterInterface_name(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitInterface_name) {
			listener.exitInterface_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitInterface_name) {
			return visitor.visitInterface_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Scoped_nameContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.ID);
		} else {
			return this.getToken(IDLParser.ID, i);
		}
	}
	public DOUBLE_COLON(): TerminalNode[];
	public DOUBLE_COLON(i: number): TerminalNode;
	public DOUBLE_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.DOUBLE_COLON);
		} else {
			return this.getToken(IDLParser.DOUBLE_COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_scoped_name; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterScoped_name) {
			listener.enterScoped_name(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitScoped_name) {
			listener.exitScoped_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitScoped_name) {
			return visitor.visitScoped_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public value_decl(): Value_declContext | undefined {
		return this.tryGetRuleContext(0, Value_declContext);
	}
	public value_abs_decl(): Value_abs_declContext | undefined {
		return this.tryGetRuleContext(0, Value_abs_declContext);
	}
	public value_box_decl(): Value_box_declContext | undefined {
		return this.tryGetRuleContext(0, Value_box_declContext);
	}
	public value_forward_decl(): Value_forward_declContext | undefined {
		return this.tryGetRuleContext(0, Value_forward_declContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_value; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_forward_declContext extends ParserRuleContext {
	public KW_VALUETYPE(): TerminalNode { return this.getToken(IDLParser.KW_VALUETYPE, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public KW_ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_ABSTRACT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_value_forward_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterValue_forward_decl) {
			listener.enterValue_forward_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitValue_forward_decl) {
			listener.exitValue_forward_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitValue_forward_decl) {
			return visitor.visitValue_forward_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_box_declContext extends ParserRuleContext {
	public KW_VALUETYPE(): TerminalNode { return this.getToken(IDLParser.KW_VALUETYPE, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public type_spec(): Type_specContext {
		return this.getRuleContext(0, Type_specContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_value_box_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterValue_box_decl) {
			listener.enterValue_box_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitValue_box_decl) {
			listener.exitValue_box_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitValue_box_decl) {
			return visitor.visitValue_box_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_abs_declContext extends ParserRuleContext {
	public KW_ABSTRACT(): TerminalNode { return this.getToken(IDLParser.KW_ABSTRACT, 0); }
	public KW_VALUETYPE(): TerminalNode { return this.getToken(IDLParser.KW_VALUETYPE, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public value_inheritance_spec(): Value_inheritance_specContext {
		return this.getRuleContext(0, Value_inheritance_specContext);
	}
	public LEFT_BRACE(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACE, 0); }
	public RIGHT_BRACE(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACE, 0); }
	public export(): ExportContext[];
	public export(i: number): ExportContext;
	public export(i?: number): ExportContext | ExportContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExportContext);
		} else {
			return this.getRuleContext(i, ExportContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_value_abs_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterValue_abs_decl) {
			listener.enterValue_abs_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitValue_abs_decl) {
			listener.exitValue_abs_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitValue_abs_decl) {
			return visitor.visitValue_abs_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_declContext extends ParserRuleContext {
	public value_header(): Value_headerContext {
		return this.getRuleContext(0, Value_headerContext);
	}
	public LEFT_BRACE(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACE, 0); }
	public RIGHT_BRACE(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACE, 0); }
	public value_element(): Value_elementContext[];
	public value_element(i: number): Value_elementContext;
	public value_element(i?: number): Value_elementContext | Value_elementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_elementContext);
		} else {
			return this.getRuleContext(i, Value_elementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_value_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterValue_decl) {
			listener.enterValue_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitValue_decl) {
			listener.exitValue_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitValue_decl) {
			return visitor.visitValue_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_headerContext extends ParserRuleContext {
	public KW_VALUETYPE(): TerminalNode { return this.getToken(IDLParser.KW_VALUETYPE, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public value_inheritance_spec(): Value_inheritance_specContext {
		return this.getRuleContext(0, Value_inheritance_specContext);
	}
	public KW_CUSTOM(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_CUSTOM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_value_header; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterValue_header) {
			listener.enterValue_header(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitValue_header) {
			listener.exitValue_header(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitValue_header) {
			return visitor.visitValue_header(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_inheritance_specContext extends ParserRuleContext {
	public COLON(): TerminalNode | undefined { return this.tryGetToken(IDLParser.COLON, 0); }
	public value_name(): Value_nameContext[];
	public value_name(i: number): Value_nameContext;
	public value_name(i?: number): Value_nameContext | Value_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_nameContext);
		} else {
			return this.getRuleContext(i, Value_nameContext);
		}
	}
	public KW_SUPPORTS(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_SUPPORTS, 0); }
	public interface_name(): Interface_nameContext[];
	public interface_name(i: number): Interface_nameContext;
	public interface_name(i?: number): Interface_nameContext | Interface_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Interface_nameContext);
		} else {
			return this.getRuleContext(i, Interface_nameContext);
		}
	}
	public KW_TRUNCATABLE(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_TRUNCATABLE, 0); }
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.COMA);
		} else {
			return this.getToken(IDLParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_value_inheritance_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterValue_inheritance_spec) {
			listener.enterValue_inheritance_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitValue_inheritance_spec) {
			listener.exitValue_inheritance_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitValue_inheritance_spec) {
			return visitor.visitValue_inheritance_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_nameContext extends ParserRuleContext {
	public scoped_name(): Scoped_nameContext {
		return this.getRuleContext(0, Scoped_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_value_name; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterValue_name) {
			listener.enterValue_name(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitValue_name) {
			listener.exitValue_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitValue_name) {
			return visitor.visitValue_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_elementContext extends ParserRuleContext {
	public export(): ExportContext | undefined {
		return this.tryGetRuleContext(0, ExportContext);
	}
	public state_member(): State_memberContext | undefined {
		return this.tryGetRuleContext(0, State_memberContext);
	}
	public init_decl(): Init_declContext | undefined {
		return this.tryGetRuleContext(0, Init_declContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_value_element; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterValue_element) {
			listener.enterValue_element(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitValue_element) {
			listener.exitValue_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitValue_element) {
			return visitor.visitValue_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class State_memberContext extends ParserRuleContext {
	public type_spec(): Type_specContext {
		return this.getRuleContext(0, Type_specContext);
	}
	public declarators(): DeclaratorsContext {
		return this.getRuleContext(0, DeclaratorsContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(IDLParser.SEMICOLON, 0); }
	public KW_PUBLIC(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_PUBLIC, 0); }
	public KW_PRIVATE(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_PRIVATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_state_member; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterState_member) {
			listener.enterState_member(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitState_member) {
			listener.exitState_member(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitState_member) {
			return visitor.visitState_member(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Init_declContext extends ParserRuleContext {
	public KW_FACTORY(): TerminalNode { return this.getToken(IDLParser.KW_FACTORY, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public LEFT_BRACKET(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACKET, 0); }
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACKET, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(IDLParser.SEMICOLON, 0); }
	public init_param_decls(): Init_param_declsContext | undefined {
		return this.tryGetRuleContext(0, Init_param_declsContext);
	}
	public raises_expr(): Raises_exprContext | undefined {
		return this.tryGetRuleContext(0, Raises_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_init_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterInit_decl) {
			listener.enterInit_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitInit_decl) {
			listener.exitInit_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitInit_decl) {
			return visitor.visitInit_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Init_param_declsContext extends ParserRuleContext {
	public init_param_decl(): Init_param_declContext[];
	public init_param_decl(i: number): Init_param_declContext;
	public init_param_decl(i?: number): Init_param_declContext | Init_param_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Init_param_declContext);
		} else {
			return this.getRuleContext(i, Init_param_declContext);
		}
	}
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.COMA);
		} else {
			return this.getToken(IDLParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_init_param_decls; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterInit_param_decls) {
			listener.enterInit_param_decls(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitInit_param_decls) {
			listener.exitInit_param_decls(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitInit_param_decls) {
			return visitor.visitInit_param_decls(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Init_param_declContext extends ParserRuleContext {
	public init_param_attribute(): Init_param_attributeContext {
		return this.getRuleContext(0, Init_param_attributeContext);
	}
	public param_type_spec(): Param_type_specContext {
		return this.getRuleContext(0, Param_type_specContext);
	}
	public simple_declarator(): Simple_declaratorContext {
		return this.getRuleContext(0, Simple_declaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_init_param_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterInit_param_decl) {
			listener.enterInit_param_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitInit_param_decl) {
			listener.exitInit_param_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitInit_param_decl) {
			return visitor.visitInit_param_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Init_param_attributeContext extends ParserRuleContext {
	public KW_IN(): TerminalNode { return this.getToken(IDLParser.KW_IN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_init_param_attribute; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterInit_param_attribute) {
			listener.enterInit_param_attribute(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitInit_param_attribute) {
			listener.exitInit_param_attribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitInit_param_attribute) {
			return visitor.visitInit_param_attribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Const_declContext extends ParserRuleContext {
	public KW_CONST(): TerminalNode { return this.getToken(IDLParser.KW_CONST, 0); }
	public const_type(): Const_typeContext {
		return this.getRuleContext(0, Const_typeContext);
	}
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public EQUAL(): TerminalNode { return this.getToken(IDLParser.EQUAL, 0); }
	public const_exp(): Const_expContext {
		return this.getRuleContext(0, Const_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_const_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterConst_decl) {
			listener.enterConst_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitConst_decl) {
			listener.exitConst_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitConst_decl) {
			return visitor.visitConst_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Const_typeContext extends ParserRuleContext {
	public integer_type(): Integer_typeContext | undefined {
		return this.tryGetRuleContext(0, Integer_typeContext);
	}
	public char_type(): Char_typeContext | undefined {
		return this.tryGetRuleContext(0, Char_typeContext);
	}
	public wide_char_type(): Wide_char_typeContext | undefined {
		return this.tryGetRuleContext(0, Wide_char_typeContext);
	}
	public boolean_type(): Boolean_typeContext | undefined {
		return this.tryGetRuleContext(0, Boolean_typeContext);
	}
	public floating_pt_type(): Floating_pt_typeContext | undefined {
		return this.tryGetRuleContext(0, Floating_pt_typeContext);
	}
	public string_type(): String_typeContext | undefined {
		return this.tryGetRuleContext(0, String_typeContext);
	}
	public wide_string_type(): Wide_string_typeContext | undefined {
		return this.tryGetRuleContext(0, Wide_string_typeContext);
	}
	public fixed_pt_const_type(): Fixed_pt_const_typeContext | undefined {
		return this.tryGetRuleContext(0, Fixed_pt_const_typeContext);
	}
	public scoped_name(): Scoped_nameContext | undefined {
		return this.tryGetRuleContext(0, Scoped_nameContext);
	}
	public octet_type(): Octet_typeContext | undefined {
		return this.tryGetRuleContext(0, Octet_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_const_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterConst_type) {
			listener.enterConst_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitConst_type) {
			listener.exitConst_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitConst_type) {
			return visitor.visitConst_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Const_expContext extends ParserRuleContext {
	public or_expr(): Or_exprContext {
		return this.getRuleContext(0, Or_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_const_exp; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterConst_exp) {
			listener.enterConst_exp(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitConst_exp) {
			listener.exitConst_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitConst_exp) {
			return visitor.visitConst_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Or_exprContext extends ParserRuleContext {
	public xor_expr(): Xor_exprContext[];
	public xor_expr(i: number): Xor_exprContext;
	public xor_expr(i?: number): Xor_exprContext | Xor_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Xor_exprContext);
		} else {
			return this.getRuleContext(i, Xor_exprContext);
		}
	}
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.PIPE);
		} else {
			return this.getToken(IDLParser.PIPE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_or_expr; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterOr_expr) {
			listener.enterOr_expr(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitOr_expr) {
			listener.exitOr_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitOr_expr) {
			return visitor.visitOr_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xor_exprContext extends ParserRuleContext {
	public and_expr(): And_exprContext[];
	public and_expr(i: number): And_exprContext;
	public and_expr(i?: number): And_exprContext | And_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_exprContext);
		} else {
			return this.getRuleContext(i, And_exprContext);
		}
	}
	public CARET(): TerminalNode[];
	public CARET(i: number): TerminalNode;
	public CARET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.CARET);
		} else {
			return this.getToken(IDLParser.CARET, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_xor_expr; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterXor_expr) {
			listener.enterXor_expr(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitXor_expr) {
			listener.exitXor_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitXor_expr) {
			return visitor.visitXor_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class And_exprContext extends ParserRuleContext {
	public shift_expr(): Shift_exprContext[];
	public shift_expr(i: number): Shift_exprContext;
	public shift_expr(i?: number): Shift_exprContext | Shift_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Shift_exprContext);
		} else {
			return this.getRuleContext(i, Shift_exprContext);
		}
	}
	public AMPERSAND(): TerminalNode[];
	public AMPERSAND(i: number): TerminalNode;
	public AMPERSAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.AMPERSAND);
		} else {
			return this.getToken(IDLParser.AMPERSAND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_and_expr; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterAnd_expr) {
			listener.enterAnd_expr(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitAnd_expr) {
			listener.exitAnd_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitAnd_expr) {
			return visitor.visitAnd_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Shift_exprContext extends ParserRuleContext {
	public add_expr(): Add_exprContext[];
	public add_expr(i: number): Add_exprContext;
	public add_expr(i?: number): Add_exprContext | Add_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Add_exprContext);
		} else {
			return this.getRuleContext(i, Add_exprContext);
		}
	}
	public RIGHT_SHIFT(): TerminalNode[];
	public RIGHT_SHIFT(i: number): TerminalNode;
	public RIGHT_SHIFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.RIGHT_SHIFT);
		} else {
			return this.getToken(IDLParser.RIGHT_SHIFT, i);
		}
	}
	public LEFT_SHIFT(): TerminalNode[];
	public LEFT_SHIFT(i: number): TerminalNode;
	public LEFT_SHIFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.LEFT_SHIFT);
		} else {
			return this.getToken(IDLParser.LEFT_SHIFT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_shift_expr; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterShift_expr) {
			listener.enterShift_expr(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitShift_expr) {
			listener.exitShift_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitShift_expr) {
			return visitor.visitShift_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Add_exprContext extends ParserRuleContext {
	public mult_expr(): Mult_exprContext[];
	public mult_expr(i: number): Mult_exprContext;
	public mult_expr(i?: number): Mult_exprContext | Mult_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Mult_exprContext);
		} else {
			return this.getRuleContext(i, Mult_exprContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.PLUS);
		} else {
			return this.getToken(IDLParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.MINUS);
		} else {
			return this.getToken(IDLParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_add_expr; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterAdd_expr) {
			listener.enterAdd_expr(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitAdd_expr) {
			listener.exitAdd_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitAdd_expr) {
			return visitor.visitAdd_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mult_exprContext extends ParserRuleContext {
	public unary_expr(): Unary_exprContext[];
	public unary_expr(i: number): Unary_exprContext;
	public unary_expr(i?: number): Unary_exprContext | Unary_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unary_exprContext);
		} else {
			return this.getRuleContext(i, Unary_exprContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.STAR);
		} else {
			return this.getToken(IDLParser.STAR, i);
		}
	}
	public SLASH(): TerminalNode[];
	public SLASH(i: number): TerminalNode;
	public SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.SLASH);
		} else {
			return this.getToken(IDLParser.SLASH, i);
		}
	}
	public PERCENT(): TerminalNode[];
	public PERCENT(i: number): TerminalNode;
	public PERCENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.PERCENT);
		} else {
			return this.getToken(IDLParser.PERCENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_mult_expr; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterMult_expr) {
			listener.enterMult_expr(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitMult_expr) {
			listener.exitMult_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitMult_expr) {
			return visitor.visitMult_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unary_exprContext extends ParserRuleContext {
	public unary_operator(): Unary_operatorContext | undefined {
		return this.tryGetRuleContext(0, Unary_operatorContext);
	}
	public primary_expr(): Primary_exprContext {
		return this.getRuleContext(0, Primary_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_unary_expr; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterUnary_expr) {
			listener.enterUnary_expr(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitUnary_expr) {
			listener.exitUnary_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitUnary_expr) {
			return visitor.visitUnary_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unary_operatorContext extends ParserRuleContext {
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(IDLParser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(IDLParser.PLUS, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(IDLParser.TILDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_unary_operator; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterUnary_operator) {
			listener.enterUnary_operator(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitUnary_operator) {
			listener.exitUnary_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitUnary_operator) {
			return visitor.visitUnary_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primary_exprContext extends ParserRuleContext {
	public scoped_name(): Scoped_nameContext | undefined {
		return this.tryGetRuleContext(0, Scoped_nameContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public LEFT_BRACKET(): TerminalNode | undefined { return this.tryGetToken(IDLParser.LEFT_BRACKET, 0); }
	public const_exp(): Const_expContext | undefined {
		return this.tryGetRuleContext(0, Const_expContext);
	}
	public RIGHT_BRACKET(): TerminalNode | undefined { return this.tryGetToken(IDLParser.RIGHT_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_primary_expr; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterPrimary_expr) {
			listener.enterPrimary_expr(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitPrimary_expr) {
			listener.exitPrimary_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitPrimary_expr) {
			return visitor.visitPrimary_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public HEX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(IDLParser.HEX_LITERAL, 0); }
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(IDLParser.INTEGER_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(IDLParser.STRING_LITERAL, 0); }
	public WIDE_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(IDLParser.WIDE_STRING_LITERAL, 0); }
	public CHARACTER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(IDLParser.CHARACTER_LITERAL, 0); }
	public WIDE_CHARACTER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(IDLParser.WIDE_CHARACTER_LITERAL, 0); }
	public FIXED_PT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(IDLParser.FIXED_PT_LITERAL, 0); }
	public FLOATING_PT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(IDLParser.FLOATING_PT_LITERAL, 0); }
	public BOOLEAN_LITERAL(): TerminalNode | undefined { return this.tryGetToken(IDLParser.BOOLEAN_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_literal; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Positive_int_constContext extends ParserRuleContext {
	public const_exp(): Const_expContext {
		return this.getRuleContext(0, Const_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_positive_int_const; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterPositive_int_const) {
			listener.enterPositive_int_const(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitPositive_int_const) {
			listener.exitPositive_int_const(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitPositive_int_const) {
			return visitor.visitPositive_int_const(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_declContext extends ParserRuleContext {
	public KW_TYPEDEF(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_TYPEDEF, 0); }
	public type_declarator(): Type_declaratorContext | undefined {
		return this.tryGetRuleContext(0, Type_declaratorContext);
	}
	public struct_type(): Struct_typeContext | undefined {
		return this.tryGetRuleContext(0, Struct_typeContext);
	}
	public union_type(): Union_typeContext | undefined {
		return this.tryGetRuleContext(0, Union_typeContext);
	}
	public enum_type(): Enum_typeContext | undefined {
		return this.tryGetRuleContext(0, Enum_typeContext);
	}
	public KW_NATIVE(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_NATIVE, 0); }
	public simple_declarator(): Simple_declaratorContext | undefined {
		return this.tryGetRuleContext(0, Simple_declaratorContext);
	}
	public constr_forward_decl(): Constr_forward_declContext | undefined {
		return this.tryGetRuleContext(0, Constr_forward_declContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_type_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterType_decl) {
			listener.enterType_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitType_decl) {
			listener.exitType_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitType_decl) {
			return visitor.visitType_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_declaratorContext extends ParserRuleContext {
	public type_spec(): Type_specContext {
		return this.getRuleContext(0, Type_specContext);
	}
	public declarators(): DeclaratorsContext {
		return this.getRuleContext(0, DeclaratorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_type_declarator; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterType_declarator) {
			listener.enterType_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitType_declarator) {
			listener.exitType_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitType_declarator) {
			return visitor.visitType_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_specContext extends ParserRuleContext {
	public simple_type_spec(): Simple_type_specContext | undefined {
		return this.tryGetRuleContext(0, Simple_type_specContext);
	}
	public constr_type_spec(): Constr_type_specContext | undefined {
		return this.tryGetRuleContext(0, Constr_type_specContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_type_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterType_spec) {
			listener.enterType_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitType_spec) {
			listener.exitType_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitType_spec) {
			return visitor.visitType_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_type_specContext extends ParserRuleContext {
	public base_type_spec(): Base_type_specContext | undefined {
		return this.tryGetRuleContext(0, Base_type_specContext);
	}
	public template_type_spec(): Template_type_specContext | undefined {
		return this.tryGetRuleContext(0, Template_type_specContext);
	}
	public scoped_name(): Scoped_nameContext | undefined {
		return this.tryGetRuleContext(0, Scoped_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_simple_type_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterSimple_type_spec) {
			listener.enterSimple_type_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitSimple_type_spec) {
			listener.exitSimple_type_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitSimple_type_spec) {
			return visitor.visitSimple_type_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Base_type_specContext extends ParserRuleContext {
	public floating_pt_type(): Floating_pt_typeContext | undefined {
		return this.tryGetRuleContext(0, Floating_pt_typeContext);
	}
	public integer_type(): Integer_typeContext | undefined {
		return this.tryGetRuleContext(0, Integer_typeContext);
	}
	public char_type(): Char_typeContext | undefined {
		return this.tryGetRuleContext(0, Char_typeContext);
	}
	public wide_char_type(): Wide_char_typeContext | undefined {
		return this.tryGetRuleContext(0, Wide_char_typeContext);
	}
	public boolean_type(): Boolean_typeContext | undefined {
		return this.tryGetRuleContext(0, Boolean_typeContext);
	}
	public octet_type(): Octet_typeContext | undefined {
		return this.tryGetRuleContext(0, Octet_typeContext);
	}
	public any_type(): Any_typeContext | undefined {
		return this.tryGetRuleContext(0, Any_typeContext);
	}
	public object_type(): Object_typeContext | undefined {
		return this.tryGetRuleContext(0, Object_typeContext);
	}
	public value_base_type(): Value_base_typeContext | undefined {
		return this.tryGetRuleContext(0, Value_base_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_base_type_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterBase_type_spec) {
			listener.enterBase_type_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitBase_type_spec) {
			listener.exitBase_type_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitBase_type_spec) {
			return visitor.visitBase_type_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Template_type_specContext extends ParserRuleContext {
	public sequence_type(): Sequence_typeContext | undefined {
		return this.tryGetRuleContext(0, Sequence_typeContext);
	}
	public string_type(): String_typeContext | undefined {
		return this.tryGetRuleContext(0, String_typeContext);
	}
	public wide_string_type(): Wide_string_typeContext | undefined {
		return this.tryGetRuleContext(0, Wide_string_typeContext);
	}
	public fixed_pt_type(): Fixed_pt_typeContext | undefined {
		return this.tryGetRuleContext(0, Fixed_pt_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_template_type_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterTemplate_type_spec) {
			listener.enterTemplate_type_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitTemplate_type_spec) {
			listener.exitTemplate_type_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitTemplate_type_spec) {
			return visitor.visitTemplate_type_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constr_type_specContext extends ParserRuleContext {
	public struct_type(): Struct_typeContext | undefined {
		return this.tryGetRuleContext(0, Struct_typeContext);
	}
	public union_type(): Union_typeContext | undefined {
		return this.tryGetRuleContext(0, Union_typeContext);
	}
	public enum_type(): Enum_typeContext | undefined {
		return this.tryGetRuleContext(0, Enum_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_constr_type_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterConstr_type_spec) {
			listener.enterConstr_type_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitConstr_type_spec) {
			listener.exitConstr_type_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitConstr_type_spec) {
			return visitor.visitConstr_type_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaratorsContext extends ParserRuleContext {
	public declarator(): DeclaratorContext[];
	public declarator(i: number): DeclaratorContext;
	public declarator(i?: number): DeclaratorContext | DeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclaratorContext);
		} else {
			return this.getRuleContext(i, DeclaratorContext);
		}
	}
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.COMA);
		} else {
			return this.getToken(IDLParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_declarators; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterDeclarators) {
			listener.enterDeclarators(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitDeclarators) {
			listener.exitDeclarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitDeclarators) {
			return visitor.visitDeclarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaratorContext extends ParserRuleContext {
	public simple_declarator(): Simple_declaratorContext | undefined {
		return this.tryGetRuleContext(0, Simple_declaratorContext);
	}
	public complex_declarator(): Complex_declaratorContext | undefined {
		return this.tryGetRuleContext(0, Complex_declaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_declarator; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterDeclarator) {
			listener.enterDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitDeclarator) {
			listener.exitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitDeclarator) {
			return visitor.visitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_declaratorContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_simple_declarator; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterSimple_declarator) {
			listener.enterSimple_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitSimple_declarator) {
			listener.exitSimple_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitSimple_declarator) {
			return visitor.visitSimple_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Complex_declaratorContext extends ParserRuleContext {
	public array_declarator(): Array_declaratorContext {
		return this.getRuleContext(0, Array_declaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_complex_declarator; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterComplex_declarator) {
			listener.enterComplex_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitComplex_declarator) {
			listener.exitComplex_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitComplex_declarator) {
			return visitor.visitComplex_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Floating_pt_typeContext extends ParserRuleContext {
	public KW_FLOAT(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_FLOAT, 0); }
	public KW_DOUBLE(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_DOUBLE, 0); }
	public KW_LONG(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_LONG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_floating_pt_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterFloating_pt_type) {
			listener.enterFloating_pt_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitFloating_pt_type) {
			listener.exitFloating_pt_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitFloating_pt_type) {
			return visitor.visitFloating_pt_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Integer_typeContext extends ParserRuleContext {
	public signed_int(): Signed_intContext | undefined {
		return this.tryGetRuleContext(0, Signed_intContext);
	}
	public unsigned_int(): Unsigned_intContext | undefined {
		return this.tryGetRuleContext(0, Unsigned_intContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_integer_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterInteger_type) {
			listener.enterInteger_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitInteger_type) {
			listener.exitInteger_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitInteger_type) {
			return visitor.visitInteger_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Signed_intContext extends ParserRuleContext {
	public signed_short_int(): Signed_short_intContext | undefined {
		return this.tryGetRuleContext(0, Signed_short_intContext);
	}
	public signed_long_int(): Signed_long_intContext | undefined {
		return this.tryGetRuleContext(0, Signed_long_intContext);
	}
	public signed_longlong_int(): Signed_longlong_intContext | undefined {
		return this.tryGetRuleContext(0, Signed_longlong_intContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_signed_int; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterSigned_int) {
			listener.enterSigned_int(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitSigned_int) {
			listener.exitSigned_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitSigned_int) {
			return visitor.visitSigned_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Signed_short_intContext extends ParserRuleContext {
	public KW_SHORT(): TerminalNode { return this.getToken(IDLParser.KW_SHORT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_signed_short_int; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterSigned_short_int) {
			listener.enterSigned_short_int(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitSigned_short_int) {
			listener.exitSigned_short_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitSigned_short_int) {
			return visitor.visitSigned_short_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Signed_long_intContext extends ParserRuleContext {
	public KW_LONG(): TerminalNode { return this.getToken(IDLParser.KW_LONG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_signed_long_int; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterSigned_long_int) {
			listener.enterSigned_long_int(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitSigned_long_int) {
			listener.exitSigned_long_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitSigned_long_int) {
			return visitor.visitSigned_long_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Signed_longlong_intContext extends ParserRuleContext {
	public KW_LONG(): TerminalNode[];
	public KW_LONG(i: number): TerminalNode;
	public KW_LONG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.KW_LONG);
		} else {
			return this.getToken(IDLParser.KW_LONG, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_signed_longlong_int; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterSigned_longlong_int) {
			listener.enterSigned_longlong_int(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitSigned_longlong_int) {
			listener.exitSigned_longlong_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitSigned_longlong_int) {
			return visitor.visitSigned_longlong_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unsigned_intContext extends ParserRuleContext {
	public unsigned_short_int(): Unsigned_short_intContext | undefined {
		return this.tryGetRuleContext(0, Unsigned_short_intContext);
	}
	public unsigned_long_int(): Unsigned_long_intContext | undefined {
		return this.tryGetRuleContext(0, Unsigned_long_intContext);
	}
	public unsigned_longlong_int(): Unsigned_longlong_intContext | undefined {
		return this.tryGetRuleContext(0, Unsigned_longlong_intContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_unsigned_int; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterUnsigned_int) {
			listener.enterUnsigned_int(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitUnsigned_int) {
			listener.exitUnsigned_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitUnsigned_int) {
			return visitor.visitUnsigned_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unsigned_short_intContext extends ParserRuleContext {
	public KW_UNSIGNED(): TerminalNode { return this.getToken(IDLParser.KW_UNSIGNED, 0); }
	public KW_SHORT(): TerminalNode { return this.getToken(IDLParser.KW_SHORT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_unsigned_short_int; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterUnsigned_short_int) {
			listener.enterUnsigned_short_int(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitUnsigned_short_int) {
			listener.exitUnsigned_short_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitUnsigned_short_int) {
			return visitor.visitUnsigned_short_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unsigned_long_intContext extends ParserRuleContext {
	public KW_UNSIGNED(): TerminalNode { return this.getToken(IDLParser.KW_UNSIGNED, 0); }
	public KW_LONG(): TerminalNode { return this.getToken(IDLParser.KW_LONG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_unsigned_long_int; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterUnsigned_long_int) {
			listener.enterUnsigned_long_int(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitUnsigned_long_int) {
			listener.exitUnsigned_long_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitUnsigned_long_int) {
			return visitor.visitUnsigned_long_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unsigned_longlong_intContext extends ParserRuleContext {
	public KW_UNSIGNED(): TerminalNode { return this.getToken(IDLParser.KW_UNSIGNED, 0); }
	public KW_LONG(): TerminalNode[];
	public KW_LONG(i: number): TerminalNode;
	public KW_LONG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.KW_LONG);
		} else {
			return this.getToken(IDLParser.KW_LONG, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_unsigned_longlong_int; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterUnsigned_longlong_int) {
			listener.enterUnsigned_longlong_int(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitUnsigned_longlong_int) {
			listener.exitUnsigned_longlong_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitUnsigned_longlong_int) {
			return visitor.visitUnsigned_longlong_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Char_typeContext extends ParserRuleContext {
	public KW_CHAR(): TerminalNode { return this.getToken(IDLParser.KW_CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_char_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterChar_type) {
			listener.enterChar_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitChar_type) {
			listener.exitChar_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitChar_type) {
			return visitor.visitChar_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Wide_char_typeContext extends ParserRuleContext {
	public KW_WCHAR(): TerminalNode { return this.getToken(IDLParser.KW_WCHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_wide_char_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterWide_char_type) {
			listener.enterWide_char_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitWide_char_type) {
			listener.exitWide_char_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitWide_char_type) {
			return visitor.visitWide_char_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Boolean_typeContext extends ParserRuleContext {
	public KW_BOOLEAN(): TerminalNode { return this.getToken(IDLParser.KW_BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_boolean_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterBoolean_type) {
			listener.enterBoolean_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitBoolean_type) {
			listener.exitBoolean_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitBoolean_type) {
			return visitor.visitBoolean_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Octet_typeContext extends ParserRuleContext {
	public KW_OCTET(): TerminalNode { return this.getToken(IDLParser.KW_OCTET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_octet_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterOctet_type) {
			listener.enterOctet_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitOctet_type) {
			listener.exitOctet_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitOctet_type) {
			return visitor.visitOctet_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Any_typeContext extends ParserRuleContext {
	public KW_ANY(): TerminalNode { return this.getToken(IDLParser.KW_ANY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_any_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterAny_type) {
			listener.enterAny_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitAny_type) {
			listener.exitAny_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitAny_type) {
			return visitor.visitAny_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Object_typeContext extends ParserRuleContext {
	public KW_OBJECT(): TerminalNode { return this.getToken(IDLParser.KW_OBJECT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_object_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterObject_type) {
			listener.enterObject_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitObject_type) {
			listener.exitObject_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitObject_type) {
			return visitor.visitObject_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_typeContext extends ParserRuleContext {
	public KW_STRUCT(): TerminalNode { return this.getToken(IDLParser.KW_STRUCT, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public LEFT_BRACE(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACE, 0); }
	public member_list(): Member_listContext {
		return this.getRuleContext(0, Member_listContext);
	}
	public RIGHT_BRACE(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_struct_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterStruct_type) {
			listener.enterStruct_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitStruct_type) {
			listener.exitStruct_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitStruct_type) {
			return visitor.visitStruct_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Member_listContext extends ParserRuleContext {
	public member(): MemberContext[];
	public member(i: number): MemberContext;
	public member(i?: number): MemberContext | MemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberContext);
		} else {
			return this.getRuleContext(i, MemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_member_list; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterMember_list) {
			listener.enterMember_list(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitMember_list) {
			listener.exitMember_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitMember_list) {
			return visitor.visitMember_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberContext extends ParserRuleContext {
	public type_spec(): Type_specContext {
		return this.getRuleContext(0, Type_specContext);
	}
	public declarators(): DeclaratorsContext {
		return this.getRuleContext(0, DeclaratorsContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(IDLParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_member; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterMember) {
			listener.enterMember(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitMember) {
			listener.exitMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitMember) {
			return visitor.visitMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Union_typeContext extends ParserRuleContext {
	public KW_UNION(): TerminalNode { return this.getToken(IDLParser.KW_UNION, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public KW_SWITCH(): TerminalNode { return this.getToken(IDLParser.KW_SWITCH, 0); }
	public LEFT_BRACKET(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACKET, 0); }
	public switch_type_spec(): Switch_type_specContext {
		return this.getRuleContext(0, Switch_type_specContext);
	}
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACKET, 0); }
	public LEFT_BRACE(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACE, 0); }
	public switch_body(): Switch_bodyContext {
		return this.getRuleContext(0, Switch_bodyContext);
	}
	public RIGHT_BRACE(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_union_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterUnion_type) {
			listener.enterUnion_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitUnion_type) {
			listener.exitUnion_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitUnion_type) {
			return visitor.visitUnion_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_type_specContext extends ParserRuleContext {
	public integer_type(): Integer_typeContext | undefined {
		return this.tryGetRuleContext(0, Integer_typeContext);
	}
	public char_type(): Char_typeContext | undefined {
		return this.tryGetRuleContext(0, Char_typeContext);
	}
	public boolean_type(): Boolean_typeContext | undefined {
		return this.tryGetRuleContext(0, Boolean_typeContext);
	}
	public enum_type(): Enum_typeContext | undefined {
		return this.tryGetRuleContext(0, Enum_typeContext);
	}
	public scoped_name(): Scoped_nameContext | undefined {
		return this.tryGetRuleContext(0, Scoped_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_switch_type_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterSwitch_type_spec) {
			listener.enterSwitch_type_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitSwitch_type_spec) {
			listener.exitSwitch_type_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitSwitch_type_spec) {
			return visitor.visitSwitch_type_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_bodyContext extends ParserRuleContext {
	public case_stmt(): Case_stmtContext[];
	public case_stmt(i: number): Case_stmtContext;
	public case_stmt(i?: number): Case_stmtContext | Case_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Case_stmtContext);
		} else {
			return this.getRuleContext(i, Case_stmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_switch_body; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterSwitch_body) {
			listener.enterSwitch_body(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitSwitch_body) {
			listener.exitSwitch_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitSwitch_body) {
			return visitor.visitSwitch_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_stmtContext extends ParserRuleContext {
	public element_spec(): Element_specContext {
		return this.getRuleContext(0, Element_specContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(IDLParser.SEMICOLON, 0); }
	public case_label(): Case_labelContext[];
	public case_label(i: number): Case_labelContext;
	public case_label(i?: number): Case_labelContext | Case_labelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Case_labelContext);
		} else {
			return this.getRuleContext(i, Case_labelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_case_stmt; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterCase_stmt) {
			listener.enterCase_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitCase_stmt) {
			listener.exitCase_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitCase_stmt) {
			return visitor.visitCase_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_labelContext extends ParserRuleContext {
	public KW_CASE(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_CASE, 0); }
	public const_exp(): Const_expContext | undefined {
		return this.tryGetRuleContext(0, Const_expContext);
	}
	public COLON(): TerminalNode { return this.getToken(IDLParser.COLON, 0); }
	public KW_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_case_label; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterCase_label) {
			listener.enterCase_label(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitCase_label) {
			listener.exitCase_label(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitCase_label) {
			return visitor.visitCase_label(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Element_specContext extends ParserRuleContext {
	public type_spec(): Type_specContext {
		return this.getRuleContext(0, Type_specContext);
	}
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_element_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterElement_spec) {
			listener.enterElement_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitElement_spec) {
			listener.exitElement_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitElement_spec) {
			return visitor.visitElement_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_typeContext extends ParserRuleContext {
	public KW_ENUM(): TerminalNode { return this.getToken(IDLParser.KW_ENUM, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public LEFT_BRACE(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACE, 0); }
	public enumerator(): EnumeratorContext[];
	public enumerator(i: number): EnumeratorContext;
	public enumerator(i?: number): EnumeratorContext | EnumeratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumeratorContext);
		} else {
			return this.getRuleContext(i, EnumeratorContext);
		}
	}
	public RIGHT_BRACE(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACE, 0); }
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.COMA);
		} else {
			return this.getToken(IDLParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_enum_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterEnum_type) {
			listener.enterEnum_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitEnum_type) {
			listener.exitEnum_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitEnum_type) {
			return visitor.visitEnum_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumeratorContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_enumerator; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterEnumerator) {
			listener.enterEnumerator(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitEnumerator) {
			listener.exitEnumerator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitEnumerator) {
			return visitor.visitEnumerator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Sequence_typeContext extends ParserRuleContext {
	public KW_SEQUENCE(): TerminalNode { return this.getToken(IDLParser.KW_SEQUENCE, 0); }
	public LEFT_ANG_BRACKET(): TerminalNode { return this.getToken(IDLParser.LEFT_ANG_BRACKET, 0); }
	public simple_type_spec(): Simple_type_specContext {
		return this.getRuleContext(0, Simple_type_specContext);
	}
	public COMA(): TerminalNode | undefined { return this.tryGetToken(IDLParser.COMA, 0); }
	public positive_int_const(): Positive_int_constContext | undefined {
		return this.tryGetRuleContext(0, Positive_int_constContext);
	}
	public RIGHT_ANG_BRACKET(): TerminalNode { return this.getToken(IDLParser.RIGHT_ANG_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_sequence_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterSequence_type) {
			listener.enterSequence_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitSequence_type) {
			listener.exitSequence_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitSequence_type) {
			return visitor.visitSequence_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_typeContext extends ParserRuleContext {
	public KW_STRING(): TerminalNode { return this.getToken(IDLParser.KW_STRING, 0); }
	public LEFT_ANG_BRACKET(): TerminalNode | undefined { return this.tryGetToken(IDLParser.LEFT_ANG_BRACKET, 0); }
	public positive_int_const(): Positive_int_constContext | undefined {
		return this.tryGetRuleContext(0, Positive_int_constContext);
	}
	public RIGHT_ANG_BRACKET(): TerminalNode | undefined { return this.tryGetToken(IDLParser.RIGHT_ANG_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_string_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterString_type) {
			listener.enterString_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitString_type) {
			listener.exitString_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitString_type) {
			return visitor.visitString_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Wide_string_typeContext extends ParserRuleContext {
	public KW_WSTRING(): TerminalNode { return this.getToken(IDLParser.KW_WSTRING, 0); }
	public LEFT_ANG_BRACKET(): TerminalNode | undefined { return this.tryGetToken(IDLParser.LEFT_ANG_BRACKET, 0); }
	public positive_int_const(): Positive_int_constContext | undefined {
		return this.tryGetRuleContext(0, Positive_int_constContext);
	}
	public RIGHT_ANG_BRACKET(): TerminalNode | undefined { return this.tryGetToken(IDLParser.RIGHT_ANG_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_wide_string_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterWide_string_type) {
			listener.enterWide_string_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitWide_string_type) {
			listener.exitWide_string_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitWide_string_type) {
			return visitor.visitWide_string_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_declaratorContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public fixed_array_size(): Fixed_array_sizeContext[];
	public fixed_array_size(i: number): Fixed_array_sizeContext;
	public fixed_array_size(i?: number): Fixed_array_sizeContext | Fixed_array_sizeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fixed_array_sizeContext);
		} else {
			return this.getRuleContext(i, Fixed_array_sizeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_array_declarator; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterArray_declarator) {
			listener.enterArray_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitArray_declarator) {
			listener.exitArray_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitArray_declarator) {
			return visitor.visitArray_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fixed_array_sizeContext extends ParserRuleContext {
	public LEFT_SQUARE_BRACKET(): TerminalNode { return this.getToken(IDLParser.LEFT_SQUARE_BRACKET, 0); }
	public positive_int_const(): Positive_int_constContext {
		return this.getRuleContext(0, Positive_int_constContext);
	}
	public RIGHT_SQUARE_BRACKET(): TerminalNode { return this.getToken(IDLParser.RIGHT_SQUARE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_fixed_array_size; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterFixed_array_size) {
			listener.enterFixed_array_size(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitFixed_array_size) {
			listener.exitFixed_array_size(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitFixed_array_size) {
			return visitor.visitFixed_array_size(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attr_declContext extends ParserRuleContext {
	public readonly_attr_spec(): Readonly_attr_specContext | undefined {
		return this.tryGetRuleContext(0, Readonly_attr_specContext);
	}
	public attr_spec(): Attr_specContext | undefined {
		return this.tryGetRuleContext(0, Attr_specContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_attr_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterAttr_decl) {
			listener.enterAttr_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitAttr_decl) {
			listener.exitAttr_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitAttr_decl) {
			return visitor.visitAttr_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Except_declContext extends ParserRuleContext {
	public KW_EXCEPTION(): TerminalNode { return this.getToken(IDLParser.KW_EXCEPTION, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public LEFT_BRACE(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACE, 0); }
	public RIGHT_BRACE(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACE, 0); }
	public member(): MemberContext[];
	public member(i: number): MemberContext;
	public member(i?: number): MemberContext | MemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberContext);
		} else {
			return this.getRuleContext(i, MemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_except_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterExcept_decl) {
			listener.enterExcept_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitExcept_decl) {
			listener.exitExcept_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitExcept_decl) {
			return visitor.visitExcept_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Op_declContext extends ParserRuleContext {
	public op_type_spec(): Op_type_specContext {
		return this.getRuleContext(0, Op_type_specContext);
	}
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public parameter_decls(): Parameter_declsContext {
		return this.getRuleContext(0, Parameter_declsContext);
	}
	public op_attribute(): Op_attributeContext | undefined {
		return this.tryGetRuleContext(0, Op_attributeContext);
	}
	public raises_expr(): Raises_exprContext | undefined {
		return this.tryGetRuleContext(0, Raises_exprContext);
	}
	public context_expr(): Context_exprContext | undefined {
		return this.tryGetRuleContext(0, Context_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_op_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterOp_decl) {
			listener.enterOp_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitOp_decl) {
			listener.exitOp_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitOp_decl) {
			return visitor.visitOp_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Op_attributeContext extends ParserRuleContext {
	public KW_ONEWAY(): TerminalNode { return this.getToken(IDLParser.KW_ONEWAY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_op_attribute; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterOp_attribute) {
			listener.enterOp_attribute(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitOp_attribute) {
			listener.exitOp_attribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitOp_attribute) {
			return visitor.visitOp_attribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Op_type_specContext extends ParserRuleContext {
	public param_type_spec(): Param_type_specContext | undefined {
		return this.tryGetRuleContext(0, Param_type_specContext);
	}
	public KW_VOID(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_op_type_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterOp_type_spec) {
			listener.enterOp_type_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitOp_type_spec) {
			listener.exitOp_type_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitOp_type_spec) {
			return visitor.visitOp_type_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_declsContext extends ParserRuleContext {
	public LEFT_BRACKET(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACKET, 0); }
	public param_decl(): Param_declContext[];
	public param_decl(i: number): Param_declContext;
	public param_decl(i?: number): Param_declContext | Param_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Param_declContext);
		} else {
			return this.getRuleContext(i, Param_declContext);
		}
	}
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACKET, 0); }
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.COMA);
		} else {
			return this.getToken(IDLParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_parameter_decls; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterParameter_decls) {
			listener.enterParameter_decls(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitParameter_decls) {
			listener.exitParameter_decls(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitParameter_decls) {
			return visitor.visitParameter_decls(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_declContext extends ParserRuleContext {
	public param_attribute(): Param_attributeContext {
		return this.getRuleContext(0, Param_attributeContext);
	}
	public param_type_spec(): Param_type_specContext {
		return this.getRuleContext(0, Param_type_specContext);
	}
	public simple_declarator(): Simple_declaratorContext {
		return this.getRuleContext(0, Simple_declaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_param_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterParam_decl) {
			listener.enterParam_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitParam_decl) {
			listener.exitParam_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitParam_decl) {
			return visitor.visitParam_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_attributeContext extends ParserRuleContext {
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_IN, 0); }
	public KW_OUT(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_OUT, 0); }
	public KW_INOUT(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_INOUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_param_attribute; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterParam_attribute) {
			listener.enterParam_attribute(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitParam_attribute) {
			listener.exitParam_attribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitParam_attribute) {
			return visitor.visitParam_attribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raises_exprContext extends ParserRuleContext {
	public KW_RAISES(): TerminalNode { return this.getToken(IDLParser.KW_RAISES, 0); }
	public LEFT_BRACKET(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACKET, 0); }
	public scoped_name(): Scoped_nameContext[];
	public scoped_name(i: number): Scoped_nameContext;
	public scoped_name(i?: number): Scoped_nameContext | Scoped_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Scoped_nameContext);
		} else {
			return this.getRuleContext(i, Scoped_nameContext);
		}
	}
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACKET, 0); }
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.COMA);
		} else {
			return this.getToken(IDLParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_raises_expr; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterRaises_expr) {
			listener.enterRaises_expr(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitRaises_expr) {
			listener.exitRaises_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitRaises_expr) {
			return visitor.visitRaises_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Context_exprContext extends ParserRuleContext {
	public KW_CONTEXT(): TerminalNode { return this.getToken(IDLParser.KW_CONTEXT, 0); }
	public LEFT_BRACKET(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACKET, 0); }
	public STRING_LITERAL(): TerminalNode[];
	public STRING_LITERAL(i: number): TerminalNode;
	public STRING_LITERAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.STRING_LITERAL);
		} else {
			return this.getToken(IDLParser.STRING_LITERAL, i);
		}
	}
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACKET, 0); }
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.COMA);
		} else {
			return this.getToken(IDLParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_context_expr; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterContext_expr) {
			listener.enterContext_expr(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitContext_expr) {
			listener.exitContext_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitContext_expr) {
			return visitor.visitContext_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_type_specContext extends ParserRuleContext {
	public base_type_spec(): Base_type_specContext | undefined {
		return this.tryGetRuleContext(0, Base_type_specContext);
	}
	public string_type(): String_typeContext | undefined {
		return this.tryGetRuleContext(0, String_typeContext);
	}
	public wide_string_type(): Wide_string_typeContext | undefined {
		return this.tryGetRuleContext(0, Wide_string_typeContext);
	}
	public scoped_name(): Scoped_nameContext | undefined {
		return this.tryGetRuleContext(0, Scoped_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_param_type_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterParam_type_spec) {
			listener.enterParam_type_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitParam_type_spec) {
			listener.exitParam_type_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitParam_type_spec) {
			return visitor.visitParam_type_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fixed_pt_typeContext extends ParserRuleContext {
	public KW_FIXED(): TerminalNode { return this.getToken(IDLParser.KW_FIXED, 0); }
	public LEFT_ANG_BRACKET(): TerminalNode { return this.getToken(IDLParser.LEFT_ANG_BRACKET, 0); }
	public positive_int_const(): Positive_int_constContext[];
	public positive_int_const(i: number): Positive_int_constContext;
	public positive_int_const(i?: number): Positive_int_constContext | Positive_int_constContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Positive_int_constContext);
		} else {
			return this.getRuleContext(i, Positive_int_constContext);
		}
	}
	public COMA(): TerminalNode { return this.getToken(IDLParser.COMA, 0); }
	public RIGHT_ANG_BRACKET(): TerminalNode { return this.getToken(IDLParser.RIGHT_ANG_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_fixed_pt_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterFixed_pt_type) {
			listener.enterFixed_pt_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitFixed_pt_type) {
			listener.exitFixed_pt_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitFixed_pt_type) {
			return visitor.visitFixed_pt_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fixed_pt_const_typeContext extends ParserRuleContext {
	public KW_FIXED(): TerminalNode { return this.getToken(IDLParser.KW_FIXED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_fixed_pt_const_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterFixed_pt_const_type) {
			listener.enterFixed_pt_const_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitFixed_pt_const_type) {
			listener.exitFixed_pt_const_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitFixed_pt_const_type) {
			return visitor.visitFixed_pt_const_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_base_typeContext extends ParserRuleContext {
	public KW_VALUEBASE(): TerminalNode { return this.getToken(IDLParser.KW_VALUEBASE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_value_base_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterValue_base_type) {
			listener.enterValue_base_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitValue_base_type) {
			listener.exitValue_base_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitValue_base_type) {
			return visitor.visitValue_base_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constr_forward_declContext extends ParserRuleContext {
	public KW_STRUCT(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_STRUCT, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public KW_UNION(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_UNION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_constr_forward_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterConstr_forward_decl) {
			listener.enterConstr_forward_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitConstr_forward_decl) {
			listener.exitConstr_forward_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitConstr_forward_decl) {
			return visitor.visitConstr_forward_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_declContext extends ParserRuleContext {
	public KW_IMPORT(): TerminalNode { return this.getToken(IDLParser.KW_IMPORT, 0); }
	public imported_scope(): Imported_scopeContext {
		return this.getRuleContext(0, Imported_scopeContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(IDLParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_import_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterImport_decl) {
			listener.enterImport_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitImport_decl) {
			listener.exitImport_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitImport_decl) {
			return visitor.visitImport_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Imported_scopeContext extends ParserRuleContext {
	public scoped_name(): Scoped_nameContext | undefined {
		return this.tryGetRuleContext(0, Scoped_nameContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(IDLParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_imported_scope; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterImported_scope) {
			listener.enterImported_scope(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitImported_scope) {
			listener.exitImported_scope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitImported_scope) {
			return visitor.visitImported_scope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_id_declContext extends ParserRuleContext {
	public KW_TYPEID(): TerminalNode { return this.getToken(IDLParser.KW_TYPEID, 0); }
	public scoped_name(): Scoped_nameContext {
		return this.getRuleContext(0, Scoped_nameContext);
	}
	public STRING_LITERAL(): TerminalNode { return this.getToken(IDLParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_type_id_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterType_id_decl) {
			listener.enterType_id_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitType_id_decl) {
			listener.exitType_id_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitType_id_decl) {
			return visitor.visitType_id_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_prefix_declContext extends ParserRuleContext {
	public KW_TYPEPREFIX(): TerminalNode { return this.getToken(IDLParser.KW_TYPEPREFIX, 0); }
	public scoped_name(): Scoped_nameContext {
		return this.getRuleContext(0, Scoped_nameContext);
	}
	public STRING_LITERAL(): TerminalNode { return this.getToken(IDLParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_type_prefix_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterType_prefix_decl) {
			listener.enterType_prefix_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitType_prefix_decl) {
			listener.exitType_prefix_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitType_prefix_decl) {
			return visitor.visitType_prefix_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Readonly_attr_specContext extends ParserRuleContext {
	public KW_READONLY(): TerminalNode { return this.getToken(IDLParser.KW_READONLY, 0); }
	public KW_ATTRIBUTE(): TerminalNode { return this.getToken(IDLParser.KW_ATTRIBUTE, 0); }
	public param_type_spec(): Param_type_specContext {
		return this.getRuleContext(0, Param_type_specContext);
	}
	public readonly_attr_declarator(): Readonly_attr_declaratorContext {
		return this.getRuleContext(0, Readonly_attr_declaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_readonly_attr_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterReadonly_attr_spec) {
			listener.enterReadonly_attr_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitReadonly_attr_spec) {
			listener.exitReadonly_attr_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitReadonly_attr_spec) {
			return visitor.visitReadonly_attr_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Readonly_attr_declaratorContext extends ParserRuleContext {
	public simple_declarator(): Simple_declaratorContext[];
	public simple_declarator(i: number): Simple_declaratorContext;
	public simple_declarator(i?: number): Simple_declaratorContext | Simple_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Simple_declaratorContext);
		} else {
			return this.getRuleContext(i, Simple_declaratorContext);
		}
	}
	public raises_expr(): Raises_exprContext | undefined {
		return this.tryGetRuleContext(0, Raises_exprContext);
	}
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.COMA);
		} else {
			return this.getToken(IDLParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_readonly_attr_declarator; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterReadonly_attr_declarator) {
			listener.enterReadonly_attr_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitReadonly_attr_declarator) {
			listener.exitReadonly_attr_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitReadonly_attr_declarator) {
			return visitor.visitReadonly_attr_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attr_specContext extends ParserRuleContext {
	public KW_ATTRIBUTE(): TerminalNode { return this.getToken(IDLParser.KW_ATTRIBUTE, 0); }
	public param_type_spec(): Param_type_specContext {
		return this.getRuleContext(0, Param_type_specContext);
	}
	public attr_declarator(): Attr_declaratorContext {
		return this.getRuleContext(0, Attr_declaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_attr_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterAttr_spec) {
			listener.enterAttr_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitAttr_spec) {
			listener.exitAttr_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitAttr_spec) {
			return visitor.visitAttr_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attr_declaratorContext extends ParserRuleContext {
	public simple_declarator(): Simple_declaratorContext[];
	public simple_declarator(i: number): Simple_declaratorContext;
	public simple_declarator(i?: number): Simple_declaratorContext | Simple_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Simple_declaratorContext);
		} else {
			return this.getRuleContext(i, Simple_declaratorContext);
		}
	}
	public attr_raises_expr(): Attr_raises_exprContext | undefined {
		return this.tryGetRuleContext(0, Attr_raises_exprContext);
	}
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.COMA);
		} else {
			return this.getToken(IDLParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_attr_declarator; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterAttr_declarator) {
			listener.enterAttr_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitAttr_declarator) {
			listener.exitAttr_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitAttr_declarator) {
			return visitor.visitAttr_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attr_raises_exprContext extends ParserRuleContext {
	public get_excep_expr(): Get_excep_exprContext | undefined {
		return this.tryGetRuleContext(0, Get_excep_exprContext);
	}
	public set_excep_expr(): Set_excep_exprContext | undefined {
		return this.tryGetRuleContext(0, Set_excep_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_attr_raises_expr; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterAttr_raises_expr) {
			listener.enterAttr_raises_expr(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitAttr_raises_expr) {
			listener.exitAttr_raises_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitAttr_raises_expr) {
			return visitor.visitAttr_raises_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Get_excep_exprContext extends ParserRuleContext {
	public KW_GETRAISES(): TerminalNode { return this.getToken(IDLParser.KW_GETRAISES, 0); }
	public exception_list(): Exception_listContext {
		return this.getRuleContext(0, Exception_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_get_excep_expr; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterGet_excep_expr) {
			listener.enterGet_excep_expr(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitGet_excep_expr) {
			listener.exitGet_excep_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitGet_excep_expr) {
			return visitor.visitGet_excep_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Set_excep_exprContext extends ParserRuleContext {
	public KW_SETRAISES(): TerminalNode { return this.getToken(IDLParser.KW_SETRAISES, 0); }
	public exception_list(): Exception_listContext {
		return this.getRuleContext(0, Exception_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_set_excep_expr; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterSet_excep_expr) {
			listener.enterSet_excep_expr(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitSet_excep_expr) {
			listener.exitSet_excep_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitSet_excep_expr) {
			return visitor.visitSet_excep_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exception_listContext extends ParserRuleContext {
	public LEFT_BRACKET(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACKET, 0); }
	public scoped_name(): Scoped_nameContext[];
	public scoped_name(i: number): Scoped_nameContext;
	public scoped_name(i?: number): Scoped_nameContext | Scoped_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Scoped_nameContext);
		} else {
			return this.getRuleContext(i, Scoped_nameContext);
		}
	}
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACKET, 0); }
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.COMA);
		} else {
			return this.getToken(IDLParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_exception_list; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterException_list) {
			listener.enterException_list(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitException_list) {
			listener.exitException_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitException_list) {
			return visitor.visitException_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentContext extends ParserRuleContext {
	public component_decl(): Component_declContext | undefined {
		return this.tryGetRuleContext(0, Component_declContext);
	}
	public component_forward_decl(): Component_forward_declContext | undefined {
		return this.tryGetRuleContext(0, Component_forward_declContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_component; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterComponent) {
			listener.enterComponent(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitComponent) {
			listener.exitComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitComponent) {
			return visitor.visitComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Component_forward_declContext extends ParserRuleContext {
	public KW_COMPONENT(): TerminalNode { return this.getToken(IDLParser.KW_COMPONENT, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_component_forward_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterComponent_forward_decl) {
			listener.enterComponent_forward_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitComponent_forward_decl) {
			listener.exitComponent_forward_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitComponent_forward_decl) {
			return visitor.visitComponent_forward_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Component_declContext extends ParserRuleContext {
	public component_header(): Component_headerContext {
		return this.getRuleContext(0, Component_headerContext);
	}
	public LEFT_BRACE(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACE, 0); }
	public component_body(): Component_bodyContext {
		return this.getRuleContext(0, Component_bodyContext);
	}
	public RIGHT_BRACE(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_component_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterComponent_decl) {
			listener.enterComponent_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitComponent_decl) {
			listener.exitComponent_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitComponent_decl) {
			return visitor.visitComponent_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Component_headerContext extends ParserRuleContext {
	public KW_COMPONENT(): TerminalNode { return this.getToken(IDLParser.KW_COMPONENT, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public component_inheritance_spec(): Component_inheritance_specContext | undefined {
		return this.tryGetRuleContext(0, Component_inheritance_specContext);
	}
	public supported_interface_spec(): Supported_interface_specContext | undefined {
		return this.tryGetRuleContext(0, Supported_interface_specContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_component_header; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterComponent_header) {
			listener.enterComponent_header(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitComponent_header) {
			listener.exitComponent_header(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitComponent_header) {
			return visitor.visitComponent_header(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Supported_interface_specContext extends ParserRuleContext {
	public KW_SUPPORTS(): TerminalNode { return this.getToken(IDLParser.KW_SUPPORTS, 0); }
	public scoped_name(): Scoped_nameContext[];
	public scoped_name(i: number): Scoped_nameContext;
	public scoped_name(i?: number): Scoped_nameContext | Scoped_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Scoped_nameContext);
		} else {
			return this.getRuleContext(i, Scoped_nameContext);
		}
	}
	public COMA(): TerminalNode[];
	public COMA(i: number): TerminalNode;
	public COMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IDLParser.COMA);
		} else {
			return this.getToken(IDLParser.COMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_supported_interface_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterSupported_interface_spec) {
			listener.enterSupported_interface_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitSupported_interface_spec) {
			listener.exitSupported_interface_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitSupported_interface_spec) {
			return visitor.visitSupported_interface_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Component_inheritance_specContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(IDLParser.COLON, 0); }
	public scoped_name(): Scoped_nameContext {
		return this.getRuleContext(0, Scoped_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_component_inheritance_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterComponent_inheritance_spec) {
			listener.enterComponent_inheritance_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitComponent_inheritance_spec) {
			listener.exitComponent_inheritance_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitComponent_inheritance_spec) {
			return visitor.visitComponent_inheritance_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Component_bodyContext extends ParserRuleContext {
	public component_export(): Component_exportContext[];
	public component_export(i: number): Component_exportContext;
	public component_export(i?: number): Component_exportContext | Component_exportContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Component_exportContext);
		} else {
			return this.getRuleContext(i, Component_exportContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_component_body; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterComponent_body) {
			listener.enterComponent_body(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitComponent_body) {
			listener.exitComponent_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitComponent_body) {
			return visitor.visitComponent_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Component_exportContext extends ParserRuleContext {
	public provides_decl(): Provides_declContext | undefined {
		return this.tryGetRuleContext(0, Provides_declContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(IDLParser.SEMICOLON, 0); }
	public uses_decl(): Uses_declContext | undefined {
		return this.tryGetRuleContext(0, Uses_declContext);
	}
	public emits_decl(): Emits_declContext | undefined {
		return this.tryGetRuleContext(0, Emits_declContext);
	}
	public publishes_decl(): Publishes_declContext | undefined {
		return this.tryGetRuleContext(0, Publishes_declContext);
	}
	public consumes_decl(): Consumes_declContext | undefined {
		return this.tryGetRuleContext(0, Consumes_declContext);
	}
	public attr_decl(): Attr_declContext | undefined {
		return this.tryGetRuleContext(0, Attr_declContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_component_export; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterComponent_export) {
			listener.enterComponent_export(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitComponent_export) {
			listener.exitComponent_export(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitComponent_export) {
			return visitor.visitComponent_export(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Provides_declContext extends ParserRuleContext {
	public KW_PROVIDES(): TerminalNode { return this.getToken(IDLParser.KW_PROVIDES, 0); }
	public interface_type(): Interface_typeContext {
		return this.getRuleContext(0, Interface_typeContext);
	}
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_provides_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterProvides_decl) {
			listener.enterProvides_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitProvides_decl) {
			listener.exitProvides_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitProvides_decl) {
			return visitor.visitProvides_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_typeContext extends ParserRuleContext {
	public scoped_name(): Scoped_nameContext | undefined {
		return this.tryGetRuleContext(0, Scoped_nameContext);
	}
	public KW_OBJECT(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_OBJECT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_interface_type; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterInterface_type) {
			listener.enterInterface_type(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitInterface_type) {
			listener.exitInterface_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitInterface_type) {
			return visitor.visitInterface_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Uses_declContext extends ParserRuleContext {
	public KW_USES(): TerminalNode { return this.getToken(IDLParser.KW_USES, 0); }
	public interface_type(): Interface_typeContext {
		return this.getRuleContext(0, Interface_typeContext);
	}
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public KW_MULTIPLE(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_MULTIPLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_uses_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterUses_decl) {
			listener.enterUses_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitUses_decl) {
			listener.exitUses_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitUses_decl) {
			return visitor.visitUses_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Emits_declContext extends ParserRuleContext {
	public KW_EMITS(): TerminalNode { return this.getToken(IDLParser.KW_EMITS, 0); }
	public scoped_name(): Scoped_nameContext {
		return this.getRuleContext(0, Scoped_nameContext);
	}
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_emits_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterEmits_decl) {
			listener.enterEmits_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitEmits_decl) {
			listener.exitEmits_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitEmits_decl) {
			return visitor.visitEmits_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Publishes_declContext extends ParserRuleContext {
	public KW_PUBLISHES(): TerminalNode { return this.getToken(IDLParser.KW_PUBLISHES, 0); }
	public scoped_name(): Scoped_nameContext {
		return this.getRuleContext(0, Scoped_nameContext);
	}
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_publishes_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterPublishes_decl) {
			listener.enterPublishes_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitPublishes_decl) {
			listener.exitPublishes_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitPublishes_decl) {
			return visitor.visitPublishes_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Consumes_declContext extends ParserRuleContext {
	public KW_CONSUMES(): TerminalNode { return this.getToken(IDLParser.KW_CONSUMES, 0); }
	public scoped_name(): Scoped_nameContext {
		return this.getRuleContext(0, Scoped_nameContext);
	}
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_consumes_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterConsumes_decl) {
			listener.enterConsumes_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitConsumes_decl) {
			listener.exitConsumes_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitConsumes_decl) {
			return visitor.visitConsumes_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Home_declContext extends ParserRuleContext {
	public home_header(): Home_headerContext {
		return this.getRuleContext(0, Home_headerContext);
	}
	public home_body(): Home_bodyContext {
		return this.getRuleContext(0, Home_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_home_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterHome_decl) {
			listener.enterHome_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitHome_decl) {
			listener.exitHome_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitHome_decl) {
			return visitor.visitHome_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Home_headerContext extends ParserRuleContext {
	public KW_HOME(): TerminalNode { return this.getToken(IDLParser.KW_HOME, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public KW_MANAGES(): TerminalNode { return this.getToken(IDLParser.KW_MANAGES, 0); }
	public scoped_name(): Scoped_nameContext {
		return this.getRuleContext(0, Scoped_nameContext);
	}
	public home_inheritance_spec(): Home_inheritance_specContext | undefined {
		return this.tryGetRuleContext(0, Home_inheritance_specContext);
	}
	public supported_interface_spec(): Supported_interface_specContext | undefined {
		return this.tryGetRuleContext(0, Supported_interface_specContext);
	}
	public primary_key_spec(): Primary_key_specContext | undefined {
		return this.tryGetRuleContext(0, Primary_key_specContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_home_header; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterHome_header) {
			listener.enterHome_header(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitHome_header) {
			listener.exitHome_header(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitHome_header) {
			return visitor.visitHome_header(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Home_inheritance_specContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(IDLParser.COLON, 0); }
	public scoped_name(): Scoped_nameContext {
		return this.getRuleContext(0, Scoped_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_home_inheritance_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterHome_inheritance_spec) {
			listener.enterHome_inheritance_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitHome_inheritance_spec) {
			listener.exitHome_inheritance_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitHome_inheritance_spec) {
			return visitor.visitHome_inheritance_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primary_key_specContext extends ParserRuleContext {
	public KW_PRIMARYKEY(): TerminalNode { return this.getToken(IDLParser.KW_PRIMARYKEY, 0); }
	public scoped_name(): Scoped_nameContext {
		return this.getRuleContext(0, Scoped_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_primary_key_spec; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterPrimary_key_spec) {
			listener.enterPrimary_key_spec(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitPrimary_key_spec) {
			listener.exitPrimary_key_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitPrimary_key_spec) {
			return visitor.visitPrimary_key_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Home_bodyContext extends ParserRuleContext {
	public LEFT_BRACE(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACE, 0); }
	public RIGHT_BRACE(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACE, 0); }
	public home_export(): Home_exportContext[];
	public home_export(i: number): Home_exportContext;
	public home_export(i?: number): Home_exportContext | Home_exportContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Home_exportContext);
		} else {
			return this.getRuleContext(i, Home_exportContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_home_body; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterHome_body) {
			listener.enterHome_body(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitHome_body) {
			listener.exitHome_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitHome_body) {
			return visitor.visitHome_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Home_exportContext extends ParserRuleContext {
	public export(): ExportContext | undefined {
		return this.tryGetRuleContext(0, ExportContext);
	}
	public factory_decl(): Factory_declContext | undefined {
		return this.tryGetRuleContext(0, Factory_declContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(IDLParser.SEMICOLON, 0); }
	public finder_decl(): Finder_declContext | undefined {
		return this.tryGetRuleContext(0, Finder_declContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_home_export; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterHome_export) {
			listener.enterHome_export(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitHome_export) {
			listener.exitHome_export(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitHome_export) {
			return visitor.visitHome_export(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Factory_declContext extends ParserRuleContext {
	public KW_FACTORY(): TerminalNode { return this.getToken(IDLParser.KW_FACTORY, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public LEFT_BRACKET(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACKET, 0); }
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACKET, 0); }
	public init_param_decls(): Init_param_declsContext | undefined {
		return this.tryGetRuleContext(0, Init_param_declsContext);
	}
	public raises_expr(): Raises_exprContext | undefined {
		return this.tryGetRuleContext(0, Raises_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_factory_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterFactory_decl) {
			listener.enterFactory_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitFactory_decl) {
			listener.exitFactory_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitFactory_decl) {
			return visitor.visitFactory_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Finder_declContext extends ParserRuleContext {
	public KW_FINDER(): TerminalNode { return this.getToken(IDLParser.KW_FINDER, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public LEFT_BRACKET(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACKET, 0); }
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACKET, 0); }
	public init_param_decls(): Init_param_declsContext | undefined {
		return this.tryGetRuleContext(0, Init_param_declsContext);
	}
	public raises_expr(): Raises_exprContext | undefined {
		return this.tryGetRuleContext(0, Raises_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_finder_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterFinder_decl) {
			listener.enterFinder_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitFinder_decl) {
			listener.exitFinder_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitFinder_decl) {
			return visitor.visitFinder_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventContext extends ParserRuleContext {
	public event_decl(): Event_declContext | undefined {
		return this.tryGetRuleContext(0, Event_declContext);
	}
	public event_abs_decl(): Event_abs_declContext | undefined {
		return this.tryGetRuleContext(0, Event_abs_declContext);
	}
	public event_forward_decl(): Event_forward_declContext | undefined {
		return this.tryGetRuleContext(0, Event_forward_declContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_event; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterEvent) {
			listener.enterEvent(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitEvent) {
			listener.exitEvent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitEvent) {
			return visitor.visitEvent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Event_forward_declContext extends ParserRuleContext {
	public KW_EVENTTYPE(): TerminalNode { return this.getToken(IDLParser.KW_EVENTTYPE, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public KW_ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_ABSTRACT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_event_forward_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterEvent_forward_decl) {
			listener.enterEvent_forward_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitEvent_forward_decl) {
			listener.exitEvent_forward_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitEvent_forward_decl) {
			return visitor.visitEvent_forward_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Event_abs_declContext extends ParserRuleContext {
	public KW_ABSTRACT(): TerminalNode { return this.getToken(IDLParser.KW_ABSTRACT, 0); }
	public KW_EVENTTYPE(): TerminalNode { return this.getToken(IDLParser.KW_EVENTTYPE, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public value_inheritance_spec(): Value_inheritance_specContext {
		return this.getRuleContext(0, Value_inheritance_specContext);
	}
	public LEFT_BRACE(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACE, 0); }
	public RIGHT_BRACE(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACE, 0); }
	public export(): ExportContext[];
	public export(i: number): ExportContext;
	public export(i?: number): ExportContext | ExportContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExportContext);
		} else {
			return this.getRuleContext(i, ExportContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_event_abs_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterEvent_abs_decl) {
			listener.enterEvent_abs_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitEvent_abs_decl) {
			listener.exitEvent_abs_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitEvent_abs_decl) {
			return visitor.visitEvent_abs_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Event_declContext extends ParserRuleContext {
	public event_header(): Event_headerContext {
		return this.getRuleContext(0, Event_headerContext);
	}
	public LEFT_BRACE(): TerminalNode { return this.getToken(IDLParser.LEFT_BRACE, 0); }
	public RIGHT_BRACE(): TerminalNode { return this.getToken(IDLParser.RIGHT_BRACE, 0); }
	public value_element(): Value_elementContext[];
	public value_element(i: number): Value_elementContext;
	public value_element(i?: number): Value_elementContext | Value_elementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Value_elementContext);
		} else {
			return this.getRuleContext(i, Value_elementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_event_decl; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterEvent_decl) {
			listener.enterEvent_decl(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitEvent_decl) {
			listener.exitEvent_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitEvent_decl) {
			return visitor.visitEvent_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Event_headerContext extends ParserRuleContext {
	public KW_EVENTTYPE(): TerminalNode { return this.getToken(IDLParser.KW_EVENTTYPE, 0); }
	public ID(): TerminalNode { return this.getToken(IDLParser.ID, 0); }
	public value_inheritance_spec(): Value_inheritance_specContext {
		return this.getRuleContext(0, Value_inheritance_specContext);
	}
	public KW_CUSTOM(): TerminalNode | undefined { return this.tryGetToken(IDLParser.KW_CUSTOM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IDLParser.RULE_event_header; }
	// @Override
	public enterRule(listener: IDLListener): void {
		if (listener.enterEvent_header) {
			listener.enterEvent_header(this);
		}
	}
	// @Override
	public exitRule(listener: IDLListener): void {
		if (listener.exitEvent_header) {
			listener.exitEvent_header(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IDLVisitor<Result>): Result {
		if (visitor.visitEvent_header) {
			return visitor.visitEvent_header(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


