// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/swift/swift2/Swift2.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { Swift2Listener } from "./Swift2Listener";
import { Swift2Visitor } from "./Swift2Visitor";


export class Swift2Parser extends Parser {
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
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly T__90 = 91;
	public static readonly T__91 = 92;
	public static readonly T__92 = 93;
	public static readonly T__93 = 94;
	public static readonly T__94 = 95;
	public static readonly T__95 = 96;
	public static readonly T__96 = 97;
	public static readonly T__97 = 98;
	public static readonly T__98 = 99;
	public static readonly T__99 = 100;
	public static readonly T__100 = 101;
	public static readonly Platform = 102;
	public static readonly Identifier = 103;
	public static readonly DOT = 104;
	public static readonly LCURLY = 105;
	public static readonly LPAREN = 106;
	public static readonly LBRACK = 107;
	public static readonly RCURLY = 108;
	public static readonly RPAREN = 109;
	public static readonly RBRACK = 110;
	public static readonly COMMA = 111;
	public static readonly COLON = 112;
	public static readonly SEMI = 113;
	public static readonly LT = 114;
	public static readonly GT = 115;
	public static readonly UNDERSCORE = 116;
	public static readonly BANG = 117;
	public static readonly QUESTION = 118;
	public static readonly AT = 119;
	public static readonly AND = 120;
	public static readonly SUB = 121;
	public static readonly EQUAL = 122;
	public static readonly OR = 123;
	public static readonly DIV = 124;
	public static readonly ADD = 125;
	public static readonly MUL = 126;
	public static readonly MOD = 127;
	public static readonly CARET = 128;
	public static readonly TILDE = 129;
	public static readonly Operator_head_other = 130;
	public static readonly Operator_following_character = 131;
	public static readonly Implicit_parameter_name = 132;
	public static readonly Binary_literal = 133;
	public static readonly Octal_literal = 134;
	public static readonly Decimal_literal = 135;
	public static readonly Pure_decimal_digits = 136;
	public static readonly Hexadecimal_literal = 137;
	public static readonly Floating_point_literal = 138;
	public static readonly Static_string_literal = 139;
	public static readonly Interpolated_string_literal = 140;
	public static readonly WS = 141;
	public static readonly Block_comment = 142;
	public static readonly Line_comment = 143;
	public static readonly RULE_top_level = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_statements = 2;
	public static readonly RULE_loop_statement = 3;
	public static readonly RULE_for_statement = 4;
	public static readonly RULE_for_init = 5;
	public static readonly RULE_for_in_statement = 6;
	public static readonly RULE_while_statement = 7;
	public static readonly RULE_condition_clause = 8;
	public static readonly RULE_condition_list = 9;
	public static readonly RULE_condition = 10;
	public static readonly RULE_case_condition = 11;
	public static readonly RULE_optional_binding_condition = 12;
	public static readonly RULE_optional_binding_head = 13;
	public static readonly RULE_optional_binding_continuation_list = 14;
	public static readonly RULE_optional_binding_continuation = 15;
	public static readonly RULE_repeat_while_statement = 16;
	public static readonly RULE_branch_statement = 17;
	public static readonly RULE_if_statement = 18;
	public static readonly RULE_else_clause = 19;
	public static readonly RULE_guard_statement = 20;
	public static readonly RULE_switch_statement = 21;
	public static readonly RULE_switch_cases = 22;
	public static readonly RULE_switch_case = 23;
	public static readonly RULE_case_label = 24;
	public static readonly RULE_case_item_list = 25;
	public static readonly RULE_default_label = 26;
	public static readonly RULE_where_clause = 27;
	public static readonly RULE_where_expression = 28;
	public static readonly RULE_labeled_statement = 29;
	public static readonly RULE_statement_label = 30;
	public static readonly RULE_label_name = 31;
	public static readonly RULE_control_transfer_statement = 32;
	public static readonly RULE_break_statement = 33;
	public static readonly RULE_continue_statement = 34;
	public static readonly RULE_fallthrough_statement = 35;
	public static readonly RULE_return_statement = 36;
	public static readonly RULE_availability_condition = 37;
	public static readonly RULE_availability_arguments = 38;
	public static readonly RULE_availability_argument = 39;
	public static readonly RULE_throw_statement = 40;
	public static readonly RULE_defer_statement = 41;
	public static readonly RULE_do_statement = 42;
	public static readonly RULE_catch_clauses = 43;
	public static readonly RULE_catch_clause = 44;
	public static readonly RULE_compiler_control_statement = 45;
	public static readonly RULE_build_configuration_statement = 46;
	public static readonly RULE_build_configuration_elseif_clauses = 47;
	public static readonly RULE_build_configuration_elseif_clause = 48;
	public static readonly RULE_build_configuration_else_clause = 49;
	public static readonly RULE_build_configuration = 50;
	public static readonly RULE_platform_testing_function = 51;
	public static readonly RULE_operating_system = 52;
	public static readonly RULE_architecture = 53;
	public static readonly RULE_line_control_statement = 54;
	public static readonly RULE_line_number = 55;
	public static readonly RULE_file_name = 56;
	public static readonly RULE_generic_parameter_clause = 57;
	public static readonly RULE_generic_parameter_list = 58;
	public static readonly RULE_generic_parameter = 59;
	public static readonly RULE_requirement_clause = 60;
	public static readonly RULE_requirement_list = 61;
	public static readonly RULE_requirement = 62;
	public static readonly RULE_conformance_requirement = 63;
	public static readonly RULE_same_type_requirement = 64;
	public static readonly RULE_generic_argument_clause = 65;
	public static readonly RULE_generic_argument_list = 66;
	public static readonly RULE_generic_argument = 67;
	public static readonly RULE_declaration = 68;
	public static readonly RULE_declarations = 69;
	public static readonly RULE_top_level_declaration = 70;
	public static readonly RULE_code_block = 71;
	public static readonly RULE_import_declaration = 72;
	public static readonly RULE_import_kind = 73;
	public static readonly RULE_import_path = 74;
	public static readonly RULE_import_path_identifier = 75;
	public static readonly RULE_constant_declaration = 76;
	public static readonly RULE_pattern_initializer_list = 77;
	public static readonly RULE_pattern_initializer = 78;
	public static readonly RULE_initializer = 79;
	public static readonly RULE_variable_declaration = 80;
	public static readonly RULE_variable_declaration_head = 81;
	public static readonly RULE_variable_name = 82;
	public static readonly RULE_getter_setter_block = 83;
	public static readonly RULE_getter_clause = 84;
	public static readonly RULE_setter_clause = 85;
	public static readonly RULE_setter_name = 86;
	public static readonly RULE_getter_setter_keyword_block = 87;
	public static readonly RULE_getter_keyword_clause = 88;
	public static readonly RULE_setter_keyword_clause = 89;
	public static readonly RULE_willSet_didSet_block = 90;
	public static readonly RULE_willSet_clause = 91;
	public static readonly RULE_didSet_clause = 92;
	public static readonly RULE_typealias_declaration = 93;
	public static readonly RULE_typealias_head = 94;
	public static readonly RULE_typealias_name = 95;
	public static readonly RULE_typealias_assignment = 96;
	public static readonly RULE_function_declaration = 97;
	public static readonly RULE_function_head = 98;
	public static readonly RULE_function_name = 99;
	public static readonly RULE_function_signature = 100;
	public static readonly RULE_function_result = 101;
	public static readonly RULE_function_body = 102;
	public static readonly RULE_parameter_clauses = 103;
	public static readonly RULE_parameter_clause = 104;
	public static readonly RULE_parameter_list = 105;
	public static readonly RULE_parameter = 106;
	public static readonly RULE_external_parameter_name = 107;
	public static readonly RULE_local_parameter_name = 108;
	public static readonly RULE_default_argument_clause = 109;
	public static readonly RULE_enum_declaration = 110;
	public static readonly RULE_union_style_enum = 111;
	public static readonly RULE_union_style_enum_members = 112;
	public static readonly RULE_union_style_enum_member = 113;
	public static readonly RULE_union_style_enum_case_clause = 114;
	public static readonly RULE_union_style_enum_case_list = 115;
	public static readonly RULE_union_style_enum_case = 116;
	public static readonly RULE_enum_name = 117;
	public static readonly RULE_enum_case_name = 118;
	public static readonly RULE_raw_value_style_enum = 119;
	public static readonly RULE_raw_value_style_enum_members = 120;
	public static readonly RULE_raw_value_style_enum_member = 121;
	public static readonly RULE_raw_value_style_enum_case_clause = 122;
	public static readonly RULE_raw_value_style_enum_case_list = 123;
	public static readonly RULE_raw_value_style_enum_case = 124;
	public static readonly RULE_raw_value_assignment = 125;
	public static readonly RULE_raw_value_literal = 126;
	public static readonly RULE_struct_declaration = 127;
	public static readonly RULE_struct_name = 128;
	public static readonly RULE_struct_body = 129;
	public static readonly RULE_class_declaration = 130;
	public static readonly RULE_class_name = 131;
	public static readonly RULE_class_body = 132;
	public static readonly RULE_protocol_declaration = 133;
	public static readonly RULE_protocol_name = 134;
	public static readonly RULE_protocol_body = 135;
	public static readonly RULE_protocol_member_declaration = 136;
	public static readonly RULE_protocol_member_declarations = 137;
	public static readonly RULE_protocol_property_declaration = 138;
	public static readonly RULE_protocol_method_declaration = 139;
	public static readonly RULE_protocol_initializer_declaration = 140;
	public static readonly RULE_protocol_subscript_declaration = 141;
	public static readonly RULE_protocol_associated_type_declaration = 142;
	public static readonly RULE_initializer_declaration = 143;
	public static readonly RULE_initializer_head = 144;
	public static readonly RULE_initializer_body = 145;
	public static readonly RULE_deinitializer_declaration = 146;
	public static readonly RULE_extension_declaration = 147;
	public static readonly RULE_extension_body = 148;
	public static readonly RULE_subscript_declaration = 149;
	public static readonly RULE_subscript_head = 150;
	public static readonly RULE_subscript_result = 151;
	public static readonly RULE_operator_declaration = 152;
	public static readonly RULE_prefix_operator_declaration = 153;
	public static readonly RULE_postfix_operator_declaration = 154;
	public static readonly RULE_infix_operator_declaration = 155;
	public static readonly RULE_infix_operator_attributes = 156;
	public static readonly RULE_precedence_clause = 157;
	public static readonly RULE_precedence_level = 158;
	public static readonly RULE_associativity_clause = 159;
	public static readonly RULE_associativity = 160;
	public static readonly RULE_declaration_modifier = 161;
	public static readonly RULE_declaration_modifiers = 162;
	public static readonly RULE_access_level_modifier = 163;
	public static readonly RULE_pattern = 164;
	public static readonly RULE_wildcard_pattern = 165;
	public static readonly RULE_identifier_pattern = 166;
	public static readonly RULE_value_binding_pattern = 167;
	public static readonly RULE_tuple_pattern = 168;
	public static readonly RULE_tuple_pattern_element_list = 169;
	public static readonly RULE_tuple_pattern_element = 170;
	public static readonly RULE_enum_case_pattern = 171;
	public static readonly RULE_optional_pattern = 172;
	public static readonly RULE_expression_pattern = 173;
	public static readonly RULE_attribute = 174;
	public static readonly RULE_attribute_name = 175;
	public static readonly RULE_attribute_argument_clause = 176;
	public static readonly RULE_attributes = 177;
	public static readonly RULE_balanced_tokens = 178;
	public static readonly RULE_balanced_token = 179;
	public static readonly RULE_expression = 180;
	public static readonly RULE_expression_list = 181;
	public static readonly RULE_prefix_expression = 182;
	public static readonly RULE_in_out_expression = 183;
	public static readonly RULE_try_operator = 184;
	public static readonly RULE_binary_expression = 185;
	public static readonly RULE_binary_expressions = 186;
	public static readonly RULE_conditional_operator = 187;
	public static readonly RULE_type_casting_operator = 188;
	public static readonly RULE_primary_expression = 189;
	public static readonly RULE_implicit_member_expression = 190;
	public static readonly RULE_literal_expression = 191;
	public static readonly RULE_array_literal = 192;
	public static readonly RULE_array_literal_items = 193;
	public static readonly RULE_array_literal_item = 194;
	public static readonly RULE_dictionary_literal = 195;
	public static readonly RULE_dictionary_literal_items = 196;
	public static readonly RULE_dictionary_literal_item = 197;
	public static readonly RULE_self_expression = 198;
	public static readonly RULE_superclass_expression = 199;
	public static readonly RULE_superclass_method_expression = 200;
	public static readonly RULE_superclass_subscript_expression = 201;
	public static readonly RULE_superclass_initializer_expression = 202;
	public static readonly RULE_closure_expression = 203;
	public static readonly RULE_closure_signature = 204;
	public static readonly RULE_capture_list = 205;
	public static readonly RULE_capture_list_items = 206;
	public static readonly RULE_capture_list_item = 207;
	public static readonly RULE_capture_specifier = 208;
	public static readonly RULE_parenthesized_expression = 209;
	public static readonly RULE_expression_element_list = 210;
	public static readonly RULE_expression_element = 211;
	public static readonly RULE_wildcard_expression = 212;
	public static readonly RULE_selector_expression = 213;
	public static readonly RULE_postfix_expression = 214;
	public static readonly RULE_argument_names = 215;
	public static readonly RULE_argument_name = 216;
	public static readonly RULE_trailing_closure = 217;
	public static readonly RULE_type = 218;
	public static readonly RULE_type_annotation = 219;
	public static readonly RULE_type_identifier = 220;
	public static readonly RULE_type_name = 221;
	public static readonly RULE_tuple_type = 222;
	public static readonly RULE_tuple_type_body = 223;
	public static readonly RULE_tuple_type_element_list = 224;
	public static readonly RULE_tuple_type_element = 225;
	public static readonly RULE_element_name = 226;
	public static readonly RULE_protocol_composition_type = 227;
	public static readonly RULE_protocol_identifier_list = 228;
	public static readonly RULE_protocol_identifier = 229;
	public static readonly RULE_type_inheritance_clause = 230;
	public static readonly RULE_type_inheritance_list = 231;
	public static readonly RULE_class_requirement = 232;
	public static readonly RULE_identifier = 233;
	public static readonly RULE_identifier_list = 234;
	public static readonly RULE_context_sensitive_keyword = 235;
	public static readonly RULE_assignment_operator = 236;
	public static readonly RULE_negate_prefix_operator = 237;
	public static readonly RULE_build_AND = 238;
	public static readonly RULE_build_OR = 239;
	public static readonly RULE_arrow_operator = 240;
	public static readonly RULE_range_operator = 241;
	public static readonly RULE_same_type_equals = 242;
	public static readonly RULE_binary_operator = 243;
	public static readonly RULE_prefix_operator = 244;
	public static readonly RULE_postfix_operator = 245;
	public static readonly RULE_operator = 246;
	public static readonly RULE_operator_character = 247;
	public static readonly RULE_operator_head = 248;
	public static readonly RULE_dot_operator_head = 249;
	public static readonly RULE_dot_operator_character = 250;
	public static readonly RULE_literal = 251;
	public static readonly RULE_numeric_literal = 252;
	public static readonly RULE_boolean_literal = 253;
	public static readonly RULE_nil_literal = 254;
	public static readonly RULE_integer_literal = 255;
	public static readonly RULE_string_literal = 256;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"top_level", "statement", "statements", "loop_statement", "for_statement", 
		"for_init", "for_in_statement", "while_statement", "condition_clause", 
		"condition_list", "condition", "case_condition", "optional_binding_condition", 
		"optional_binding_head", "optional_binding_continuation_list", "optional_binding_continuation", 
		"repeat_while_statement", "branch_statement", "if_statement", "else_clause", 
		"guard_statement", "switch_statement", "switch_cases", "switch_case", 
		"case_label", "case_item_list", "default_label", "where_clause", "where_expression", 
		"labeled_statement", "statement_label", "label_name", "control_transfer_statement", 
		"break_statement", "continue_statement", "fallthrough_statement", "return_statement", 
		"availability_condition", "availability_arguments", "availability_argument", 
		"throw_statement", "defer_statement", "do_statement", "catch_clauses", 
		"catch_clause", "compiler_control_statement", "build_configuration_statement", 
		"build_configuration_elseif_clauses", "build_configuration_elseif_clause", 
		"build_configuration_else_clause", "build_configuration", "platform_testing_function", 
		"operating_system", "architecture", "line_control_statement", "line_number", 
		"file_name", "generic_parameter_clause", "generic_parameter_list", "generic_parameter", 
		"requirement_clause", "requirement_list", "requirement", "conformance_requirement", 
		"same_type_requirement", "generic_argument_clause", "generic_argument_list", 
		"generic_argument", "declaration", "declarations", "top_level_declaration", 
		"code_block", "import_declaration", "import_kind", "import_path", "import_path_identifier", 
		"constant_declaration", "pattern_initializer_list", "pattern_initializer", 
		"initializer", "variable_declaration", "variable_declaration_head", "variable_name", 
		"getter_setter_block", "getter_clause", "setter_clause", "setter_name", 
		"getter_setter_keyword_block", "getter_keyword_clause", "setter_keyword_clause", 
		"willSet_didSet_block", "willSet_clause", "didSet_clause", "typealias_declaration", 
		"typealias_head", "typealias_name", "typealias_assignment", "function_declaration", 
		"function_head", "function_name", "function_signature", "function_result", 
		"function_body", "parameter_clauses", "parameter_clause", "parameter_list", 
		"parameter", "external_parameter_name", "local_parameter_name", "default_argument_clause", 
		"enum_declaration", "union_style_enum", "union_style_enum_members", "union_style_enum_member", 
		"union_style_enum_case_clause", "union_style_enum_case_list", "union_style_enum_case", 
		"enum_name", "enum_case_name", "raw_value_style_enum", "raw_value_style_enum_members", 
		"raw_value_style_enum_member", "raw_value_style_enum_case_clause", "raw_value_style_enum_case_list", 
		"raw_value_style_enum_case", "raw_value_assignment", "raw_value_literal", 
		"struct_declaration", "struct_name", "struct_body", "class_declaration", 
		"class_name", "class_body", "protocol_declaration", "protocol_name", "protocol_body", 
		"protocol_member_declaration", "protocol_member_declarations", "protocol_property_declaration", 
		"protocol_method_declaration", "protocol_initializer_declaration", "protocol_subscript_declaration", 
		"protocol_associated_type_declaration", "initializer_declaration", "initializer_head", 
		"initializer_body", "deinitializer_declaration", "extension_declaration", 
		"extension_body", "subscript_declaration", "subscript_head", "subscript_result", 
		"operator_declaration", "prefix_operator_declaration", "postfix_operator_declaration", 
		"infix_operator_declaration", "infix_operator_attributes", "precedence_clause", 
		"precedence_level", "associativity_clause", "associativity", "declaration_modifier", 
		"declaration_modifiers", "access_level_modifier", "pattern", "wildcard_pattern", 
		"identifier_pattern", "value_binding_pattern", "tuple_pattern", "tuple_pattern_element_list", 
		"tuple_pattern_element", "enum_case_pattern", "optional_pattern", "expression_pattern", 
		"attribute", "attribute_name", "attribute_argument_clause", "attributes", 
		"balanced_tokens", "balanced_token", "expression", "expression_list", 
		"prefix_expression", "in_out_expression", "try_operator", "binary_expression", 
		"binary_expressions", "conditional_operator", "type_casting_operator", 
		"primary_expression", "implicit_member_expression", "literal_expression", 
		"array_literal", "array_literal_items", "array_literal_item", "dictionary_literal", 
		"dictionary_literal_items", "dictionary_literal_item", "self_expression", 
		"superclass_expression", "superclass_method_expression", "superclass_subscript_expression", 
		"superclass_initializer_expression", "closure_expression", "closure_signature", 
		"capture_list", "capture_list_items", "capture_list_item", "capture_specifier", 
		"parenthesized_expression", "expression_element_list", "expression_element", 
		"wildcard_expression", "selector_expression", "postfix_expression", "argument_names", 
		"argument_name", "trailing_closure", "type", "type_annotation", "type_identifier", 
		"type_name", "tuple_type", "tuple_type_body", "tuple_type_element_list", 
		"tuple_type_element", "element_name", "protocol_composition_type", "protocol_identifier_list", 
		"protocol_identifier", "type_inheritance_clause", "type_inheritance_list", 
		"class_requirement", "identifier", "identifier_list", "context_sensitive_keyword", 
		"assignment_operator", "negate_prefix_operator", "build_AND", "build_OR", 
		"arrow_operator", "range_operator", "same_type_equals", "binary_operator", 
		"prefix_operator", "postfix_operator", "operator", "operator_character", 
		"operator_head", "dot_operator_head", "dot_operator_character", "literal", 
		"numeric_literal", "boolean_literal", "nil_literal", "integer_literal", 
		"string_literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'for'", "'case'", "'in'", "'while'", "'let'", "'var'", "'repeat'", 
		"'if'", "'else'", "'guard'", "'switch'", "'default'", "'where'", "'break'", 
		"'continue'", "'fallthrough'", "'return'", "'#available'", "'throw'", 
		"'defer'", "'do'", "'catch'", "'#if'", "'#endif'", "'#elseif'", "'#else'", 
		"'os'", "'arch'", "'OSX'", "'iOS'", "'watchOS'", "'tvOS'", "'i386'", "'x86_64'", 
		"'arm'", "'arm64'", "'#line'", "'import'", "'typealias'", "'struct'", 
		"'class'", "'enum'", "'protocol'", "'func'", "'get'", "'set'", "'willSet'", 
		"'didSet'", "'throws'", "'rethrows'", "'inout'", "'indirect'", "'associatedtype'", 
		"'init'", "'deinit'", "'extension'", "'subscript'", "'prefix'", "'operator'", 
		"'postfix'", "'infix'", "'precedence'", "'associativity'", "'left'", "'right'", 
		"'none'", "'convenience'", "'dynamic'", "'final'", "'lazy'", "'mutating'", 
		"'nonmutating'", "'optional'", "'override'", "'required'", "'static'", 
		"'unowned'", "'safe'", "'unsafe'", "'weak'", "'internal'", "'private'", 
		"'public'", "'is'", "'as'", "'try'", "'__FILE__'", "'__LINE__'", "'__COLUMN__'", 
		"'__FUNCTION__'", "'self'", "'super'", "'unowned(safe)'", "'unowned(unsafe)'", 
		"'#selector'", "'dynamicType'", "'Type'", "'Protocol'", "'true'", "'false'", 
		"'nil'", undefined, undefined, "'.'", "'{'", "'('", "'['", "'}'", "')'", 
		"']'", "','", "':'", "';'", "'<'", "'>'", "'_'", "'!'", "'?'", "'@'", 
		"'&'", "'-'", "'='", "'|'", "'/'", "'+'", "'*'", "'%'", "'^'", "'~'",
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
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "Platform", "Identifier", 
		"DOT", "LCURLY", "LPAREN", "LBRACK", "RCURLY", "RPAREN", "RBRACK", "COMMA", 
		"COLON", "SEMI", "LT", "GT", "UNDERSCORE", "BANG", "QUESTION", "AT", "AND", 
		"SUB", "EQUAL", "OR", "DIV", "ADD", "MUL", "MOD", "CARET", "TILDE", "Operator_head_other", 
		"Operator_following_character", "Implicit_parameter_name", "Binary_literal", 
		"Octal_literal", "Decimal_literal", "Pure_decimal_digits", "Hexadecimal_literal", 
		"Floating_point_literal", "Static_string_literal", "Interpolated_string_literal", 
		"WS", "Block_comment", "Line_comment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Swift2Parser._LITERAL_NAMES, Swift2Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Swift2Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Swift2.g4"; }

	// @Override
	public get ruleNames(): string[] { return Swift2Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Swift2Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Swift2Parser._ATN, this);
	}
	// @RuleVersion(0)
	public top_level(): Top_levelContext {
		let _localctx: Top_levelContext = new Top_levelContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Swift2Parser.RULE_top_level);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 514;
					this.statement();
					}
					}
				}
				this.state = 519;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 520;
			this.match(Swift2Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, Swift2Parser.RULE_statement);
		try {
			this.state = 555;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 522;
				this.expression();
				this.state = 524;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 523;
					this.match(Swift2Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 526;
				this.declaration();
				this.state = 528;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 527;
					this.match(Swift2Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 530;
				this.loop_statement();
				this.state = 532;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 531;
					this.match(Swift2Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 534;
				this.branch_statement();
				this.state = 536;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 535;
					this.match(Swift2Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 538;
				this.labeled_statement();
				this.state = 540;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 539;
					this.match(Swift2Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 542;
				this.control_transfer_statement();
				this.state = 544;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 543;
					this.match(Swift2Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 546;
				this.defer_statement();
				this.state = 548;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 547;
					this.match(Swift2Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 550;
				this.do_statement();
				this.state = 552;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 551;
					this.match(Swift2Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 554;
				this.compiler_control_statement();
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
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Swift2Parser.RULE_statements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 557;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 560;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
	public loop_statement(): Loop_statementContext {
		let _localctx: Loop_statementContext = new Loop_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Swift2Parser.RULE_loop_statement);
		try {
			this.state = 566;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 562;
				this.for_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 563;
				this.for_in_statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 564;
				this.while_statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 565;
				this.repeat_while_statement();
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
	public for_statement(): For_statementContext {
		let _localctx: For_statementContext = new For_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Swift2Parser.RULE_for_statement);
		try {
			this.state = 596;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 568;
				this.match(Swift2Parser.T__0);
				this.state = 570;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 569;
					this.for_init();
					}
					break;
				}
				this.state = 572;
				this.match(Swift2Parser.SEMI);
				this.state = 574;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 573;
					this.expression();
					}
					break;
				}
				this.state = 576;
				this.match(Swift2Parser.SEMI);
				this.state = 578;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 577;
					this.expression();
					}
					break;
				}
				this.state = 580;
				this.code_block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 581;
				this.match(Swift2Parser.T__0);
				this.state = 582;
				this.match(Swift2Parser.LPAREN);
				this.state = 584;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 583;
					this.for_init();
					}
					break;
				}
				this.state = 586;
				this.match(Swift2Parser.SEMI);
				this.state = 588;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 587;
					this.expression();
					}
					break;
				}
				this.state = 590;
				this.match(Swift2Parser.SEMI);
				this.state = 592;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 591;
					this.expression();
					}
					break;
				}
				this.state = 594;
				this.match(Swift2Parser.RPAREN);
				this.state = 595;
				this.code_block();
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
	public for_init(): For_initContext {
		let _localctx: For_initContext = new For_initContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Swift2Parser.RULE_for_init);
		try {
			this.state = 600;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 598;
				this.variable_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 599;
				this.expression_list();
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
	public for_in_statement(): For_in_statementContext {
		let _localctx: For_in_statementContext = new For_in_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Swift2Parser.RULE_for_in_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 602;
			this.match(Swift2Parser.T__0);
			this.state = 604;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 603;
				this.match(Swift2Parser.T__1);
				}
				break;
			}
			this.state = 606;
			this.pattern(0);
			this.state = 607;
			this.match(Swift2Parser.T__2);
			this.state = 608;
			this.expression();
			this.state = 610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__12) {
				{
				this.state = 609;
				this.where_clause();
				}
			}

			this.state = 612;
			this.code_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public while_statement(): While_statementContext {
		let _localctx: While_statementContext = new While_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Swift2Parser.RULE_while_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this.match(Swift2Parser.T__3);
			this.state = 615;
			this.condition_clause();
			this.state = 616;
			this.code_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condition_clause(): Condition_clauseContext {
		let _localctx: Condition_clauseContext = new Condition_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Swift2Parser.RULE_condition_clause);
		try {
			this.state = 628;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 618;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 619;
				this.expression();
				this.state = 620;
				this.match(Swift2Parser.COMMA);
				this.state = 621;
				this.condition_list();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 623;
				this.condition_list();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 624;
				this.availability_condition();
				this.state = 625;
				this.match(Swift2Parser.COMMA);
				this.state = 626;
				this.expression();
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
	public condition_list(): Condition_listContext {
		let _localctx: Condition_listContext = new Condition_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Swift2Parser.RULE_condition_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 630;
			this.condition();
			this.state = 635;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift2Parser.COMMA) {
				{
				{
				this.state = 631;
				this.match(Swift2Parser.COMMA);
				this.state = 632;
				this.condition();
				}
				}
				this.state = 637;
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
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Swift2Parser.RULE_condition);
		try {
			this.state = 641;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.T__17:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 638;
				this.availability_condition();
				}
				break;
			case Swift2Parser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 639;
				this.case_condition();
				}
				break;
			case Swift2Parser.T__4:
			case Swift2Parser.T__5:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 640;
				this.optional_binding_condition();
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
	public case_condition(): Case_conditionContext {
		let _localctx: Case_conditionContext = new Case_conditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Swift2Parser.RULE_case_condition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 643;
			this.match(Swift2Parser.T__1);
			this.state = 644;
			this.pattern(0);
			this.state = 645;
			this.initializer();
			this.state = 647;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__12) {
				{
				this.state = 646;
				this.where_clause();
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
	public optional_binding_condition(): Optional_binding_conditionContext {
		let _localctx: Optional_binding_conditionContext = new Optional_binding_conditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Swift2Parser.RULE_optional_binding_condition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 649;
			this.optional_binding_head();
			this.state = 651;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 650;
				this.optional_binding_continuation_list();
				}
				break;
			}
			this.state = 654;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__12) {
				{
				this.state = 653;
				this.where_clause();
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
	public optional_binding_head(): Optional_binding_headContext {
		let _localctx: Optional_binding_headContext = new Optional_binding_headContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Swift2Parser.RULE_optional_binding_head);
		try {
			this.state = 664;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 656;
				this.match(Swift2Parser.T__4);
				this.state = 657;
				this.pattern(0);
				this.state = 658;
				this.initializer();
				}
				break;
			case Swift2Parser.T__5:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 660;
				this.match(Swift2Parser.T__5);
				this.state = 661;
				this.pattern(0);
				this.state = 662;
				this.initializer();
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
	public optional_binding_continuation_list(): Optional_binding_continuation_listContext {
		let _localctx: Optional_binding_continuation_listContext = new Optional_binding_continuation_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Swift2Parser.RULE_optional_binding_continuation_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 666;
			this.match(Swift2Parser.COMMA);
			this.state = 667;
			this.optional_binding_continuation();
			this.state = 672;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 668;
					this.match(Swift2Parser.COMMA);
					this.state = 669;
					this.optional_binding_continuation();
					}
					}
				}
				this.state = 674;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
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
	public optional_binding_continuation(): Optional_binding_continuationContext {
		let _localctx: Optional_binding_continuationContext = new Optional_binding_continuationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Swift2Parser.RULE_optional_binding_continuation);
		try {
			this.state = 679;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 675;
				this.pattern(0);
				this.state = 676;
				this.initializer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 678;
				this.optional_binding_head();
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
	public repeat_while_statement(): Repeat_while_statementContext {
		let _localctx: Repeat_while_statementContext = new Repeat_while_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Swift2Parser.RULE_repeat_while_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			this.match(Swift2Parser.T__6);
			this.state = 682;
			this.code_block();
			this.state = 683;
			this.match(Swift2Parser.T__3);
			this.state = 684;
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
	public branch_statement(): Branch_statementContext {
		let _localctx: Branch_statementContext = new Branch_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Swift2Parser.RULE_branch_statement);
		try {
			this.state = 689;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.T__7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 686;
				this.if_statement();
				}
				break;
			case Swift2Parser.T__9:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 687;
				this.guard_statement();
				}
				break;
			case Swift2Parser.T__10:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 688;
				this.switch_statement();
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
	public if_statement(): If_statementContext {
		let _localctx: If_statementContext = new If_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Swift2Parser.RULE_if_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 691;
			this.match(Swift2Parser.T__7);
			this.state = 692;
			this.condition_clause();
			this.state = 693;
			this.code_block();
			this.state = 695;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 694;
				this.else_clause();
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
	public else_clause(): Else_clauseContext {
		let _localctx: Else_clauseContext = new Else_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Swift2Parser.RULE_else_clause);
		try {
			this.state = 701;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 697;
				this.match(Swift2Parser.T__8);
				this.state = 698;
				this.code_block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 699;
				this.match(Swift2Parser.T__8);
				this.state = 700;
				this.if_statement();
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
	public guard_statement(): Guard_statementContext {
		let _localctx: Guard_statementContext = new Guard_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Swift2Parser.RULE_guard_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 703;
			this.match(Swift2Parser.T__9);
			this.state = 704;
			this.condition_clause();
			this.state = 705;
			this.match(Swift2Parser.T__8);
			this.state = 706;
			this.code_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switch_statement(): Switch_statementContext {
		let _localctx: Switch_statementContext = new Switch_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Swift2Parser.RULE_switch_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this.match(Swift2Parser.T__10);
			this.state = 709;
			this.expression();
			this.state = 710;
			this.match(Swift2Parser.LCURLY);
			this.state = 712;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__1 || _la === Swift2Parser.T__11) {
				{
				this.state = 711;
				this.switch_cases();
				}
			}

			this.state = 714;
			this.match(Swift2Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switch_cases(): Switch_casesContext {
		let _localctx: Switch_casesContext = new Switch_casesContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Swift2Parser.RULE_switch_cases);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this.switch_case();
			this.state = 718;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__1 || _la === Swift2Parser.T__11) {
				{
				this.state = 717;
				this.switch_cases();
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
	public switch_case(): Switch_caseContext {
		let _localctx: Switch_caseContext = new Switch_caseContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Swift2Parser.RULE_switch_case);
		try {
			this.state = 726;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 720;
				this.case_label();
				this.state = 721;
				this.statements();
				}
				break;
			case Swift2Parser.T__11:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 723;
				this.default_label();
				this.state = 724;
				this.statements();
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
	public case_label(): Case_labelContext {
		let _localctx: Case_labelContext = new Case_labelContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Swift2Parser.RULE_case_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this.match(Swift2Parser.T__1);
			this.state = 729;
			this.case_item_list();
			this.state = 730;
			this.match(Swift2Parser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public case_item_list(): Case_item_listContext {
		let _localctx: Case_item_listContext = new Case_item_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, Swift2Parser.RULE_case_item_list);
		let _la: number;
		try {
			this.state = 743;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 732;
				this.pattern(0);
				this.state = 734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift2Parser.T__12) {
					{
					this.state = 733;
					this.where_clause();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 736;
				this.pattern(0);
				this.state = 738;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift2Parser.T__12) {
					{
					this.state = 737;
					this.where_clause();
					}
				}

				this.state = 740;
				this.match(Swift2Parser.COMMA);
				this.state = 741;
				this.case_item_list();
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
	public default_label(): Default_labelContext {
		let _localctx: Default_labelContext = new Default_labelContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, Swift2Parser.RULE_default_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 745;
			this.match(Swift2Parser.T__11);
			this.state = 746;
			this.match(Swift2Parser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public where_clause(): Where_clauseContext {
		let _localctx: Where_clauseContext = new Where_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Swift2Parser.RULE_where_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 748;
			this.match(Swift2Parser.T__12);
			this.state = 749;
			this.where_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public where_expression(): Where_expressionContext {
		let _localctx: Where_expressionContext = new Where_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, Swift2Parser.RULE_where_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 751;
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
	public labeled_statement(): Labeled_statementContext {
		let _localctx: Labeled_statementContext = new Labeled_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, Swift2Parser.RULE_labeled_statement);
		try {
			this.state = 762;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 753;
				this.statement_label();
				this.state = 754;
				this.loop_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 756;
				this.statement_label();
				this.state = 757;
				this.if_statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 759;
				this.statement_label();
				this.state = 760;
				this.switch_statement();
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
	public statement_label(): Statement_labelContext {
		let _localctx: Statement_labelContext = new Statement_labelContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Swift2Parser.RULE_statement_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 764;
			this.label_name();
			this.state = 765;
			this.match(Swift2Parser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label_name(): Label_nameContext {
		let _localctx: Label_nameContext = new Label_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, Swift2Parser.RULE_label_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
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
	public control_transfer_statement(): Control_transfer_statementContext {
		let _localctx: Control_transfer_statementContext = new Control_transfer_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, Swift2Parser.RULE_control_transfer_statement);
		try {
			this.state = 774;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.T__13:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 769;
				this.break_statement();
				}
				break;
			case Swift2Parser.T__14:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 770;
				this.continue_statement();
				}
				break;
			case Swift2Parser.T__15:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 771;
				this.fallthrough_statement();
				}
				break;
			case Swift2Parser.T__16:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 772;
				this.return_statement();
				}
				break;
			case Swift2Parser.T__18:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 773;
				this.throw_statement();
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
	public break_statement(): Break_statementContext {
		let _localctx: Break_statementContext = new Break_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, Swift2Parser.RULE_break_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 776;
			this.match(Swift2Parser.T__13);
			this.state = 778;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 777;
				this.label_name();
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
	public continue_statement(): Continue_statementContext {
		let _localctx: Continue_statementContext = new Continue_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Swift2Parser.RULE_continue_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			this.match(Swift2Parser.T__14);
			this.state = 782;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 781;
				this.label_name();
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
	public fallthrough_statement(): Fallthrough_statementContext {
		let _localctx: Fallthrough_statementContext = new Fallthrough_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, Swift2Parser.RULE_fallthrough_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 784;
			this.match(Swift2Parser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public return_statement(): Return_statementContext {
		let _localctx: Return_statementContext = new Return_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, Swift2Parser.RULE_return_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 786;
			this.match(Swift2Parser.T__16);
			this.state = 788;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 787;
				this.expression();
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
	public availability_condition(): Availability_conditionContext {
		let _localctx: Availability_conditionContext = new Availability_conditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Swift2Parser.RULE_availability_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			this.match(Swift2Parser.T__17);
			this.state = 791;
			this.match(Swift2Parser.LPAREN);
			this.state = 792;
			this.availability_arguments();
			this.state = 793;
			this.match(Swift2Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public availability_arguments(): Availability_argumentsContext {
		let _localctx: Availability_argumentsContext = new Availability_argumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Swift2Parser.RULE_availability_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 795;
			this.availability_argument();
			this.state = 800;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift2Parser.COMMA) {
				{
				{
				this.state = 796;
				this.match(Swift2Parser.COMMA);
				this.state = 797;
				this.availability_argument();
				}
				}
				this.state = 802;
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
	public availability_argument(): Availability_argumentContext {
		let _localctx: Availability_argumentContext = new Availability_argumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, Swift2Parser.RULE_availability_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 803;
			_la = this._input.LA(1);
			if (!(_la === Swift2Parser.Platform || _la === Swift2Parser.MUL)) {
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
	public throw_statement(): Throw_statementContext {
		let _localctx: Throw_statementContext = new Throw_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, Swift2Parser.RULE_throw_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 805;
			this.match(Swift2Parser.T__18);
			this.state = 806;
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
	public defer_statement(): Defer_statementContext {
		let _localctx: Defer_statementContext = new Defer_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Swift2Parser.RULE_defer_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 808;
			this.match(Swift2Parser.T__19);
			this.state = 809;
			this.code_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public do_statement(): Do_statementContext {
		let _localctx: Do_statementContext = new Do_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Swift2Parser.RULE_do_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 811;
			this.match(Swift2Parser.T__20);
			this.state = 812;
			this.code_block();
			this.state = 814;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 813;
				this.catch_clauses();
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
	public catch_clauses(): Catch_clausesContext {
		let _localctx: Catch_clausesContext = new Catch_clausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Swift2Parser.RULE_catch_clauses);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 816;
			this.catch_clause();
			this.state = 818;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 817;
				this.catch_clauses();
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
	public catch_clause(): Catch_clauseContext {
		let _localctx: Catch_clauseContext = new Catch_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, Swift2Parser.RULE_catch_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 820;
			this.match(Swift2Parser.T__21);
			this.state = 822;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 821;
				this.pattern(0);
				}
				break;
			}
			this.state = 825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__12) {
				{
				this.state = 824;
				this.where_clause();
				}
			}

			this.state = 827;
			this.code_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compiler_control_statement(): Compiler_control_statementContext {
		let _localctx: Compiler_control_statementContext = new Compiler_control_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, Swift2Parser.RULE_compiler_control_statement);
		try {
			this.state = 831;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.T__22:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 829;
				this.build_configuration_statement();
				}
				break;
			case Swift2Parser.T__36:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 830;
				this.line_control_statement();
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
	public build_configuration_statement(): Build_configuration_statementContext {
		let _localctx: Build_configuration_statementContext = new Build_configuration_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, Swift2Parser.RULE_build_configuration_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 833;
			this.match(Swift2Parser.T__22);
			this.state = 834;
			this.build_configuration(0);
			this.state = 836;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 835;
				this.statements();
				}
				break;
			}
			this.state = 839;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__24) {
				{
				this.state = 838;
				this.build_configuration_elseif_clauses();
				}
			}

			this.state = 842;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__25) {
				{
				this.state = 841;
				this.build_configuration_else_clause();
				}
			}

			this.state = 844;
			this.match(Swift2Parser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public build_configuration_elseif_clauses(): Build_configuration_elseif_clausesContext {
		let _localctx: Build_configuration_elseif_clausesContext = new Build_configuration_elseif_clausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Swift2Parser.RULE_build_configuration_elseif_clauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 846;
			this.build_configuration_elseif_clause();
			this.state = 848;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__24) {
				{
				this.state = 847;
				this.build_configuration_elseif_clauses();
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
	public build_configuration_elseif_clause(): Build_configuration_elseif_clauseContext {
		let _localctx: Build_configuration_elseif_clauseContext = new Build_configuration_elseif_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Swift2Parser.RULE_build_configuration_elseif_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 850;
			this.match(Swift2Parser.T__24);
			this.state = 851;
			this.build_configuration(0);
			this.state = 853;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 852;
				this.statements();
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
	public build_configuration_else_clause(): Build_configuration_else_clauseContext {
		let _localctx: Build_configuration_else_clauseContext = new Build_configuration_else_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, Swift2Parser.RULE_build_configuration_else_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 855;
			this.match(Swift2Parser.T__25);
			this.state = 857;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 856;
				this.statements();
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

	public build_configuration(): Build_configurationContext;
	public build_configuration(_p: number): Build_configurationContext;
	// @RuleVersion(0)
	public build_configuration(_p?: number): Build_configurationContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Build_configurationContext = new Build_configurationContext(this._ctx, _parentState);
		let _prevctx: Build_configurationContext = _localctx;
		let _startState: number = 100;
		this.enterRecursionRule(_localctx, 100, Swift2Parser.RULE_build_configuration, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 869;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.T__26:
			case Swift2Parser.T__27:
				{
				this.state = 860;
				this.platform_testing_function();
				}
				break;
			case Swift2Parser.T__44:
			case Swift2Parser.T__45:
			case Swift2Parser.T__46:
			case Swift2Parser.T__47:
			case Swift2Parser.T__51:
			case Swift2Parser.T__57:
			case Swift2Parser.T__58:
			case Swift2Parser.T__59:
			case Swift2Parser.T__60:
			case Swift2Parser.T__61:
			case Swift2Parser.T__62:
			case Swift2Parser.T__63:
			case Swift2Parser.T__64:
			case Swift2Parser.T__65:
			case Swift2Parser.T__66:
			case Swift2Parser.T__67:
			case Swift2Parser.T__68:
			case Swift2Parser.T__69:
			case Swift2Parser.T__70:
			case Swift2Parser.T__71:
			case Swift2Parser.T__72:
			case Swift2Parser.T__73:
			case Swift2Parser.T__74:
			case Swift2Parser.T__76:
			case Swift2Parser.T__79:
			case Swift2Parser.T__96:
			case Swift2Parser.T__97:
			case Swift2Parser.Identifier:
				{
				this.state = 861;
				this.identifier();
				}
				break;
			case Swift2Parser.T__98:
			case Swift2Parser.T__99:
				{
				this.state = 862;
				this.boolean_literal();
				}
				break;
			case Swift2Parser.LPAREN:
				{
				this.state = 863;
				this.match(Swift2Parser.LPAREN);
				this.state = 864;
				this.build_configuration(0);
				this.state = 865;
				this.match(Swift2Parser.RPAREN);
				}
				break;
			case Swift2Parser.BANG:
				{
				this.state = 867;
				this.match(Swift2Parser.BANG);
				this.state = 868;
				this.build_configuration(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 881;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 879;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
					case 1:
						{
						_localctx = new Build_configurationContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_build_configuration);
						this.state = 871;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 872;
						this.build_AND();
						this.state = 873;
						this.build_configuration(3);
						}
						break;

					case 2:
						{
						_localctx = new Build_configurationContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_build_configuration);
						this.state = 875;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 876;
						this.build_OR();
						this.state = 877;
						this.build_configuration(2);
						}
						break;
					}
					}
				}
				this.state = 883;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
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
	public platform_testing_function(): Platform_testing_functionContext {
		let _localctx: Platform_testing_functionContext = new Platform_testing_functionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, Swift2Parser.RULE_platform_testing_function);
		try {
			this.state = 894;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.T__26:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 884;
				this.match(Swift2Parser.T__26);
				this.state = 885;
				this.match(Swift2Parser.LPAREN);
				this.state = 886;
				this.operating_system();
				this.state = 887;
				this.match(Swift2Parser.RPAREN);
				}
				break;
			case Swift2Parser.T__27:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 889;
				this.match(Swift2Parser.T__27);
				this.state = 890;
				this.match(Swift2Parser.LPAREN);
				this.state = 891;
				this.architecture();
				this.state = 892;
				this.match(Swift2Parser.RPAREN);
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
	public operating_system(): Operating_systemContext {
		let _localctx: Operating_systemContext = new Operating_systemContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, Swift2Parser.RULE_operating_system);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 896;
			_la = this._input.LA(1);
			if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (Swift2Parser.T__28 - 29)) | (1 << (Swift2Parser.T__29 - 29)) | (1 << (Swift2Parser.T__30 - 29)) | (1 << (Swift2Parser.T__31 - 29)))) !== 0))) {
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
	public architecture(): ArchitectureContext {
		let _localctx: ArchitectureContext = new ArchitectureContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, Swift2Parser.RULE_architecture);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 898;
			_la = this._input.LA(1);
			if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Swift2Parser.T__32 - 33)) | (1 << (Swift2Parser.T__33 - 33)) | (1 << (Swift2Parser.T__34 - 33)) | (1 << (Swift2Parser.T__35 - 33)))) !== 0))) {
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
	public line_control_statement(): Line_control_statementContext {
		let _localctx: Line_control_statementContext = new Line_control_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, Swift2Parser.RULE_line_control_statement);
		try {
			this.state = 905;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 900;
				this.match(Swift2Parser.T__36);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 901;
				this.match(Swift2Parser.T__36);
				this.state = 902;
				this.line_number();
				this.state = 903;
				this.file_name();
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
	public line_number(): Line_numberContext {
		let _localctx: Line_numberContext = new Line_numberContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, Swift2Parser.RULE_line_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 907;
			this.integer_literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public file_name(): File_nameContext {
		let _localctx: File_nameContext = new File_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, Swift2Parser.RULE_file_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 909;
			this.match(Swift2Parser.Static_string_literal);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generic_parameter_clause(): Generic_parameter_clauseContext {
		let _localctx: Generic_parameter_clauseContext = new Generic_parameter_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, Swift2Parser.RULE_generic_parameter_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 911;
			this.match(Swift2Parser.LT);
			this.state = 912;
			this.generic_parameter_list();
			this.state = 914;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__12) {
				{
				this.state = 913;
				this.requirement_clause();
				}
			}

			this.state = 916;
			this.match(Swift2Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generic_parameter_list(): Generic_parameter_listContext {
		let _localctx: Generic_parameter_listContext = new Generic_parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, Swift2Parser.RULE_generic_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 918;
			this.generic_parameter();
			this.state = 923;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift2Parser.COMMA) {
				{
				{
				this.state = 919;
				this.match(Swift2Parser.COMMA);
				this.state = 920;
				this.generic_parameter();
				}
				}
				this.state = 925;
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
	public generic_parameter(): Generic_parameterContext {
		let _localctx: Generic_parameterContext = new Generic_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, Swift2Parser.RULE_generic_parameter);
		try {
			this.state = 935;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 926;
				this.type_name();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 927;
				this.type_name();
				this.state = 928;
				this.match(Swift2Parser.COLON);
				this.state = 929;
				this.type_identifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 931;
				this.type_name();
				this.state = 932;
				this.match(Swift2Parser.COLON);
				this.state = 933;
				this.protocol_composition_type();
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
	public requirement_clause(): Requirement_clauseContext {
		let _localctx: Requirement_clauseContext = new Requirement_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, Swift2Parser.RULE_requirement_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 937;
			this.match(Swift2Parser.T__12);
			this.state = 938;
			this.requirement_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public requirement_list(): Requirement_listContext {
		let _localctx: Requirement_listContext = new Requirement_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, Swift2Parser.RULE_requirement_list);
		try {
			this.state = 945;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 940;
				this.requirement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 941;
				this.requirement();
				this.state = 942;
				this.match(Swift2Parser.COMMA);
				this.state = 943;
				this.requirement_list();
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
	public requirement(): RequirementContext {
		let _localctx: RequirementContext = new RequirementContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, Swift2Parser.RULE_requirement);
		try {
			this.state = 949;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 947;
				this.conformance_requirement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 948;
				this.same_type_requirement();
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
	public conformance_requirement(): Conformance_requirementContext {
		let _localctx: Conformance_requirementContext = new Conformance_requirementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, Swift2Parser.RULE_conformance_requirement);
		try {
			this.state = 959;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 951;
				this.type_identifier();
				this.state = 952;
				this.match(Swift2Parser.COLON);
				this.state = 953;
				this.type_identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 955;
				this.type_identifier();
				this.state = 956;
				this.match(Swift2Parser.COLON);
				this.state = 957;
				this.protocol_composition_type();
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
	public same_type_requirement(): Same_type_requirementContext {
		let _localctx: Same_type_requirementContext = new Same_type_requirementContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, Swift2Parser.RULE_same_type_requirement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 961;
			this.type_identifier();
			this.state = 962;
			this.same_type_equals();
			this.state = 963;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generic_argument_clause(): Generic_argument_clauseContext {
		let _localctx: Generic_argument_clauseContext = new Generic_argument_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, Swift2Parser.RULE_generic_argument_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 965;
			this.match(Swift2Parser.LT);
			this.state = 966;
			this.generic_argument_list();
			this.state = 967;
			this.match(Swift2Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generic_argument_list(): Generic_argument_listContext {
		let _localctx: Generic_argument_listContext = new Generic_argument_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, Swift2Parser.RULE_generic_argument_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 969;
			this.generic_argument();
			this.state = 974;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift2Parser.COMMA) {
				{
				{
				this.state = 970;
				this.match(Swift2Parser.COMMA);
				this.state = 971;
				this.generic_argument();
				}
				}
				this.state = 976;
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
	public generic_argument(): Generic_argumentContext {
		let _localctx: Generic_argumentContext = new Generic_argumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, Swift2Parser.RULE_generic_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 977;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 136, Swift2Parser.RULE_declaration);
		try {
			this.state = 993;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 979;
				this.import_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 980;
				this.constant_declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 981;
				this.variable_declaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 982;
				this.typealias_declaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 983;
				this.function_declaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 984;
				this.enum_declaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 985;
				this.struct_declaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 986;
				this.class_declaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 987;
				this.protocol_declaration();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 988;
				this.initializer_declaration();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 989;
				this.deinitializer_declaration();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 990;
				this.extension_declaration();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 991;
				this.subscript_declaration();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 992;
				this.operator_declaration();
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
	public declarations(): DeclarationsContext {
		let _localctx: DeclarationsContext = new DeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, Swift2Parser.RULE_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 996;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 995;
				this.declaration();
				}
				}
				this.state = 998;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === Swift2Parser.T__4 || _la === Swift2Parser.T__5 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Swift2Parser.T__37 - 38)) | (1 << (Swift2Parser.T__38 - 38)) | (1 << (Swift2Parser.T__39 - 38)) | (1 << (Swift2Parser.T__40 - 38)) | (1 << (Swift2Parser.T__41 - 38)) | (1 << (Swift2Parser.T__42 - 38)) | (1 << (Swift2Parser.T__43 - 38)) | (1 << (Swift2Parser.T__44 - 38)) | (1 << (Swift2Parser.T__45 - 38)) | (1 << (Swift2Parser.T__46 - 38)) | (1 << (Swift2Parser.T__47 - 38)) | (1 << (Swift2Parser.T__51 - 38)) | (1 << (Swift2Parser.T__53 - 38)) | (1 << (Swift2Parser.T__54 - 38)) | (1 << (Swift2Parser.T__55 - 38)) | (1 << (Swift2Parser.T__56 - 38)) | (1 << (Swift2Parser.T__57 - 38)) | (1 << (Swift2Parser.T__58 - 38)) | (1 << (Swift2Parser.T__59 - 38)) | (1 << (Swift2Parser.T__60 - 38)) | (1 << (Swift2Parser.T__61 - 38)) | (1 << (Swift2Parser.T__62 - 38)) | (1 << (Swift2Parser.T__63 - 38)) | (1 << (Swift2Parser.T__64 - 38)) | (1 << (Swift2Parser.T__65 - 38)) | (1 << (Swift2Parser.T__66 - 38)) | (1 << (Swift2Parser.T__67 - 38)) | (1 << (Swift2Parser.T__68 - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (Swift2Parser.T__69 - 70)) | (1 << (Swift2Parser.T__70 - 70)) | (1 << (Swift2Parser.T__71 - 70)) | (1 << (Swift2Parser.T__72 - 70)) | (1 << (Swift2Parser.T__73 - 70)) | (1 << (Swift2Parser.T__74 - 70)) | (1 << (Swift2Parser.T__75 - 70)) | (1 << (Swift2Parser.T__76 - 70)) | (1 << (Swift2Parser.T__79 - 70)) | (1 << (Swift2Parser.T__80 - 70)) | (1 << (Swift2Parser.T__81 - 70)) | (1 << (Swift2Parser.T__82 - 70)) | (1 << (Swift2Parser.T__96 - 70)) | (1 << (Swift2Parser.T__97 - 70)))) !== 0) || _la === Swift2Parser.Identifier || _la === Swift2Parser.AT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public top_level_declaration(): Top_level_declarationContext {
		let _localctx: Top_level_declarationContext = new Top_level_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, Swift2Parser.RULE_top_level_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1001;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 1000;
				this.statements();
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
	public code_block(): Code_blockContext {
		let _localctx: Code_blockContext = new Code_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, Swift2Parser.RULE_code_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1003;
			this.match(Swift2Parser.LCURLY);
			this.state = 1005;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 1004;
				this.statements();
				}
				break;
			}
			this.state = 1007;
			this.match(Swift2Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_declaration(): Import_declarationContext {
		let _localctx: Import_declarationContext = new Import_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, Swift2Parser.RULE_import_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1010;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Swift2Parser.T__44 - 45)) | (1 << (Swift2Parser.T__45 - 45)) | (1 << (Swift2Parser.T__46 - 45)) | (1 << (Swift2Parser.T__47 - 45)) | (1 << (Swift2Parser.T__51 - 45)) | (1 << (Swift2Parser.T__57 - 45)) | (1 << (Swift2Parser.T__58 - 45)) | (1 << (Swift2Parser.T__59 - 45)) | (1 << (Swift2Parser.T__60 - 45)) | (1 << (Swift2Parser.T__61 - 45)) | (1 << (Swift2Parser.T__62 - 45)) | (1 << (Swift2Parser.T__63 - 45)) | (1 << (Swift2Parser.T__64 - 45)) | (1 << (Swift2Parser.T__65 - 45)) | (1 << (Swift2Parser.T__66 - 45)) | (1 << (Swift2Parser.T__67 - 45)) | (1 << (Swift2Parser.T__68 - 45)) | (1 << (Swift2Parser.T__69 - 45)) | (1 << (Swift2Parser.T__70 - 45)) | (1 << (Swift2Parser.T__71 - 45)) | (1 << (Swift2Parser.T__72 - 45)) | (1 << (Swift2Parser.T__73 - 45)) | (1 << (Swift2Parser.T__74 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__96 - 77)) | (1 << (Swift2Parser.T__97 - 77)) | (1 << (Swift2Parser.Identifier - 77)))) !== 0) || _la === Swift2Parser.AT) {
				{
				this.state = 1009;
				this.attributes();
				}
			}

			this.state = 1012;
			this.match(Swift2Parser.T__37);
			this.state = 1014;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__5 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Swift2Parser.T__38 - 39)) | (1 << (Swift2Parser.T__39 - 39)) | (1 << (Swift2Parser.T__40 - 39)) | (1 << (Swift2Parser.T__41 - 39)) | (1 << (Swift2Parser.T__42 - 39)) | (1 << (Swift2Parser.T__43 - 39)))) !== 0)) {
				{
				this.state = 1013;
				this.import_kind();
				}
			}

			this.state = 1016;
			this.import_path();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_kind(): Import_kindContext {
		let _localctx: Import_kindContext = new Import_kindContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, Swift2Parser.RULE_import_kind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1018;
			_la = this._input.LA(1);
			if (!(_la === Swift2Parser.T__5 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Swift2Parser.T__38 - 39)) | (1 << (Swift2Parser.T__39 - 39)) | (1 << (Swift2Parser.T__40 - 39)) | (1 << (Swift2Parser.T__41 - 39)) | (1 << (Swift2Parser.T__42 - 39)) | (1 << (Swift2Parser.T__43 - 39)))) !== 0))) {
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
	public import_path(): Import_pathContext {
		let _localctx: Import_pathContext = new Import_pathContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, Swift2Parser.RULE_import_path);
		try {
			this.state = 1025;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1020;
				this.import_path_identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1021;
				this.import_path_identifier();
				this.state = 1022;
				this.match(Swift2Parser.DOT);
				this.state = 1023;
				this.import_path();
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
	public import_path_identifier(): Import_path_identifierContext {
		let _localctx: Import_path_identifierContext = new Import_path_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, Swift2Parser.RULE_import_path_identifier);
		try {
			this.state = 1029;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.T__44:
			case Swift2Parser.T__45:
			case Swift2Parser.T__46:
			case Swift2Parser.T__47:
			case Swift2Parser.T__51:
			case Swift2Parser.T__57:
			case Swift2Parser.T__58:
			case Swift2Parser.T__59:
			case Swift2Parser.T__60:
			case Swift2Parser.T__61:
			case Swift2Parser.T__62:
			case Swift2Parser.T__63:
			case Swift2Parser.T__64:
			case Swift2Parser.T__65:
			case Swift2Parser.T__66:
			case Swift2Parser.T__67:
			case Swift2Parser.T__68:
			case Swift2Parser.T__69:
			case Swift2Parser.T__70:
			case Swift2Parser.T__71:
			case Swift2Parser.T__72:
			case Swift2Parser.T__73:
			case Swift2Parser.T__74:
			case Swift2Parser.T__76:
			case Swift2Parser.T__79:
			case Swift2Parser.T__96:
			case Swift2Parser.T__97:
			case Swift2Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1027;
				this.identifier();
				}
				break;
			case Swift2Parser.DOT:
			case Swift2Parser.LT:
			case Swift2Parser.GT:
			case Swift2Parser.BANG:
			case Swift2Parser.QUESTION:
			case Swift2Parser.AND:
			case Swift2Parser.SUB:
			case Swift2Parser.EQUAL:
			case Swift2Parser.OR:
			case Swift2Parser.DIV:
			case Swift2Parser.ADD:
			case Swift2Parser.MUL:
			case Swift2Parser.MOD:
			case Swift2Parser.CARET:
			case Swift2Parser.TILDE:
			case Swift2Parser.Operator_head_other:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1028;
				this.operator();
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
	public constant_declaration(): Constant_declarationContext {
		let _localctx: Constant_declarationContext = new Constant_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, Swift2Parser.RULE_constant_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1032;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 1031;
				this.attributes();
				}
				break;
			}
			this.state = 1035;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Swift2Parser.T__40 - 41)) | (1 << (Swift2Parser.T__57 - 41)) | (1 << (Swift2Parser.T__59 - 41)) | (1 << (Swift2Parser.T__60 - 41)) | (1 << (Swift2Parser.T__66 - 41)) | (1 << (Swift2Parser.T__67 - 41)) | (1 << (Swift2Parser.T__68 - 41)) | (1 << (Swift2Parser.T__69 - 41)) | (1 << (Swift2Parser.T__70 - 41)) | (1 << (Swift2Parser.T__71 - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (Swift2Parser.T__72 - 73)) | (1 << (Swift2Parser.T__73 - 73)) | (1 << (Swift2Parser.T__74 - 73)) | (1 << (Swift2Parser.T__75 - 73)) | (1 << (Swift2Parser.T__76 - 73)) | (1 << (Swift2Parser.T__79 - 73)) | (1 << (Swift2Parser.T__80 - 73)) | (1 << (Swift2Parser.T__81 - 73)) | (1 << (Swift2Parser.T__82 - 73)))) !== 0)) {
				{
				this.state = 1034;
				this.declaration_modifiers();
				}
			}

			this.state = 1037;
			this.match(Swift2Parser.T__4);
			this.state = 1038;
			this.pattern_initializer_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pattern_initializer_list(): Pattern_initializer_listContext {
		let _localctx: Pattern_initializer_listContext = new Pattern_initializer_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, Swift2Parser.RULE_pattern_initializer_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1040;
			this.pattern_initializer();
			this.state = 1045;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1041;
					this.match(Swift2Parser.COMMA);
					this.state = 1042;
					this.pattern_initializer();
					}
					}
				}
				this.state = 1047;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
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
	public pattern_initializer(): Pattern_initializerContext {
		let _localctx: Pattern_initializerContext = new Pattern_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, Swift2Parser.RULE_pattern_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1048;
			this.pattern(0);
			this.state = 1050;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 1049;
				this.initializer();
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
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, Swift2Parser.RULE_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1052;
			this.assignment_operator();
			this.state = 1053;
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
	public variable_declaration(): Variable_declarationContext {
		let _localctx: Variable_declarationContext = new Variable_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, Swift2Parser.RULE_variable_declaration);
		try {
			this.state = 1090;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1055;
				this.variable_declaration_head();
				this.state = 1056;
				this.pattern_initializer_list();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1058;
				this.variable_declaration_head();
				this.state = 1059;
				this.variable_name();
				this.state = 1060;
				this.type_annotation();
				this.state = 1061;
				this.code_block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1063;
				this.variable_declaration_head();
				this.state = 1064;
				this.variable_name();
				this.state = 1065;
				this.type_annotation();
				this.state = 1066;
				this.getter_setter_block();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1068;
				this.variable_declaration_head();
				this.state = 1069;
				this.variable_name();
				this.state = 1070;
				this.type_annotation();
				this.state = 1071;
				this.getter_setter_keyword_block();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1073;
				this.variable_declaration_head();
				this.state = 1074;
				this.variable_name();
				this.state = 1075;
				this.type_annotation();
				this.state = 1077;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
				case 1:
					{
					this.state = 1076;
					this.initializer();
					}
					break;
				}
				this.state = 1079;
				this.willSet_didSet_block();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1081;
				this.variable_declaration_head();
				this.state = 1082;
				this.variable_name();
				this.state = 1083;
				this.type_annotation();
				this.state = 1084;
				this.type_annotation();
				this.state = 1086;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
				case 1:
					{
					this.state = 1085;
					this.initializer();
					}
					break;
				}
				this.state = 1088;
				this.willSet_didSet_block();
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
	public variable_declaration_head(): Variable_declaration_headContext {
		let _localctx: Variable_declaration_headContext = new Variable_declaration_headContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, Swift2Parser.RULE_variable_declaration_head);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1093;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 1092;
				this.attributes();
				}
				break;
			}
			this.state = 1096;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Swift2Parser.T__40 - 41)) | (1 << (Swift2Parser.T__57 - 41)) | (1 << (Swift2Parser.T__59 - 41)) | (1 << (Swift2Parser.T__60 - 41)) | (1 << (Swift2Parser.T__66 - 41)) | (1 << (Swift2Parser.T__67 - 41)) | (1 << (Swift2Parser.T__68 - 41)) | (1 << (Swift2Parser.T__69 - 41)) | (1 << (Swift2Parser.T__70 - 41)) | (1 << (Swift2Parser.T__71 - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (Swift2Parser.T__72 - 73)) | (1 << (Swift2Parser.T__73 - 73)) | (1 << (Swift2Parser.T__74 - 73)) | (1 << (Swift2Parser.T__75 - 73)) | (1 << (Swift2Parser.T__76 - 73)) | (1 << (Swift2Parser.T__79 - 73)) | (1 << (Swift2Parser.T__80 - 73)) | (1 << (Swift2Parser.T__81 - 73)) | (1 << (Swift2Parser.T__82 - 73)))) !== 0)) {
				{
				this.state = 1095;
				this.declaration_modifiers();
				}
			}

			this.state = 1098;
			this.match(Swift2Parser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable_name(): Variable_nameContext {
		let _localctx: Variable_nameContext = new Variable_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, Swift2Parser.RULE_variable_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1100;
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
	public getter_setter_block(): Getter_setter_blockContext {
		let _localctx: Getter_setter_blockContext = new Getter_setter_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, Swift2Parser.RULE_getter_setter_block);
		let _la: number;
		try {
			this.state = 1114;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1102;
				this.match(Swift2Parser.LCURLY);
				this.state = 1103;
				this.getter_clause();
				this.state = 1105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Swift2Parser.T__44 - 45)) | (1 << (Swift2Parser.T__45 - 45)) | (1 << (Swift2Parser.T__46 - 45)) | (1 << (Swift2Parser.T__47 - 45)) | (1 << (Swift2Parser.T__51 - 45)) | (1 << (Swift2Parser.T__57 - 45)) | (1 << (Swift2Parser.T__58 - 45)) | (1 << (Swift2Parser.T__59 - 45)) | (1 << (Swift2Parser.T__60 - 45)) | (1 << (Swift2Parser.T__61 - 45)) | (1 << (Swift2Parser.T__62 - 45)) | (1 << (Swift2Parser.T__63 - 45)) | (1 << (Swift2Parser.T__64 - 45)) | (1 << (Swift2Parser.T__65 - 45)) | (1 << (Swift2Parser.T__66 - 45)) | (1 << (Swift2Parser.T__67 - 45)) | (1 << (Swift2Parser.T__68 - 45)) | (1 << (Swift2Parser.T__69 - 45)) | (1 << (Swift2Parser.T__70 - 45)) | (1 << (Swift2Parser.T__71 - 45)) | (1 << (Swift2Parser.T__72 - 45)) | (1 << (Swift2Parser.T__73 - 45)) | (1 << (Swift2Parser.T__74 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__96 - 77)) | (1 << (Swift2Parser.T__97 - 77)) | (1 << (Swift2Parser.Identifier - 77)))) !== 0) || _la === Swift2Parser.AT) {
					{
					this.state = 1104;
					this.setter_clause();
					}
				}

				this.state = 1107;
				this.match(Swift2Parser.RCURLY);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1109;
				this.match(Swift2Parser.LCURLY);
				this.state = 1110;
				this.setter_clause();
				this.state = 1111;
				this.getter_clause();
				this.state = 1112;
				this.match(Swift2Parser.RCURLY);
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
	public getter_clause(): Getter_clauseContext {
		let _localctx: Getter_clauseContext = new Getter_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, Swift2Parser.RULE_getter_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1117;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 1116;
				this.attributes();
				}
				break;
			}
			this.state = 1119;
			this.match(Swift2Parser.T__44);
			this.state = 1120;
			this.code_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setter_clause(): Setter_clauseContext {
		let _localctx: Setter_clauseContext = new Setter_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, Swift2Parser.RULE_setter_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 1122;
				this.attributes();
				}
				break;
			}
			this.state = 1125;
			this.match(Swift2Parser.T__45);
			this.state = 1127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.LPAREN) {
				{
				this.state = 1126;
				this.setter_name();
				}
			}

			this.state = 1129;
			this.code_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setter_name(): Setter_nameContext {
		let _localctx: Setter_nameContext = new Setter_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, Swift2Parser.RULE_setter_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1131;
			this.match(Swift2Parser.LPAREN);
			this.state = 1132;
			this.identifier();
			this.state = 1133;
			this.match(Swift2Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getter_setter_keyword_block(): Getter_setter_keyword_blockContext {
		let _localctx: Getter_setter_keyword_blockContext = new Getter_setter_keyword_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, Swift2Parser.RULE_getter_setter_keyword_block);
		let _la: number;
		try {
			this.state = 1147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1135;
				this.match(Swift2Parser.LCURLY);
				this.state = 1136;
				this.getter_keyword_clause();
				this.state = 1138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Swift2Parser.T__44 - 45)) | (1 << (Swift2Parser.T__45 - 45)) | (1 << (Swift2Parser.T__46 - 45)) | (1 << (Swift2Parser.T__47 - 45)) | (1 << (Swift2Parser.T__51 - 45)) | (1 << (Swift2Parser.T__57 - 45)) | (1 << (Swift2Parser.T__58 - 45)) | (1 << (Swift2Parser.T__59 - 45)) | (1 << (Swift2Parser.T__60 - 45)) | (1 << (Swift2Parser.T__61 - 45)) | (1 << (Swift2Parser.T__62 - 45)) | (1 << (Swift2Parser.T__63 - 45)) | (1 << (Swift2Parser.T__64 - 45)) | (1 << (Swift2Parser.T__65 - 45)) | (1 << (Swift2Parser.T__66 - 45)) | (1 << (Swift2Parser.T__67 - 45)) | (1 << (Swift2Parser.T__68 - 45)) | (1 << (Swift2Parser.T__69 - 45)) | (1 << (Swift2Parser.T__70 - 45)) | (1 << (Swift2Parser.T__71 - 45)) | (1 << (Swift2Parser.T__72 - 45)) | (1 << (Swift2Parser.T__73 - 45)) | (1 << (Swift2Parser.T__74 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__96 - 77)) | (1 << (Swift2Parser.T__97 - 77)) | (1 << (Swift2Parser.Identifier - 77)))) !== 0) || _la === Swift2Parser.AT) {
					{
					this.state = 1137;
					this.setter_keyword_clause();
					}
				}

				this.state = 1140;
				this.match(Swift2Parser.RCURLY);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1142;
				this.match(Swift2Parser.LCURLY);
				this.state = 1143;
				this.setter_keyword_clause();
				this.state = 1144;
				this.getter_keyword_clause();
				this.state = 1145;
				this.match(Swift2Parser.RCURLY);
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
	public getter_keyword_clause(): Getter_keyword_clauseContext {
		let _localctx: Getter_keyword_clauseContext = new Getter_keyword_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, Swift2Parser.RULE_getter_keyword_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1150;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 1149;
				this.attributes();
				}
				break;
			}
			this.state = 1152;
			this.match(Swift2Parser.T__44);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setter_keyword_clause(): Setter_keyword_clauseContext {
		let _localctx: Setter_keyword_clauseContext = new Setter_keyword_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, Swift2Parser.RULE_setter_keyword_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1155;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				{
				this.state = 1154;
				this.attributes();
				}
				break;
			}
			this.state = 1157;
			this.match(Swift2Parser.T__45);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public willSet_didSet_block(): WillSet_didSet_blockContext {
		let _localctx: WillSet_didSet_blockContext = new WillSet_didSet_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, Swift2Parser.RULE_willSet_didSet_block);
		let _la: number;
		try {
			this.state = 1171;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1159;
				this.match(Swift2Parser.LCURLY);
				this.state = 1160;
				this.willSet_clause();
				this.state = 1162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Swift2Parser.T__44 - 45)) | (1 << (Swift2Parser.T__45 - 45)) | (1 << (Swift2Parser.T__46 - 45)) | (1 << (Swift2Parser.T__47 - 45)) | (1 << (Swift2Parser.T__51 - 45)) | (1 << (Swift2Parser.T__57 - 45)) | (1 << (Swift2Parser.T__58 - 45)) | (1 << (Swift2Parser.T__59 - 45)) | (1 << (Swift2Parser.T__60 - 45)) | (1 << (Swift2Parser.T__61 - 45)) | (1 << (Swift2Parser.T__62 - 45)) | (1 << (Swift2Parser.T__63 - 45)) | (1 << (Swift2Parser.T__64 - 45)) | (1 << (Swift2Parser.T__65 - 45)) | (1 << (Swift2Parser.T__66 - 45)) | (1 << (Swift2Parser.T__67 - 45)) | (1 << (Swift2Parser.T__68 - 45)) | (1 << (Swift2Parser.T__69 - 45)) | (1 << (Swift2Parser.T__70 - 45)) | (1 << (Swift2Parser.T__71 - 45)) | (1 << (Swift2Parser.T__72 - 45)) | (1 << (Swift2Parser.T__73 - 45)) | (1 << (Swift2Parser.T__74 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__96 - 77)) | (1 << (Swift2Parser.T__97 - 77)) | (1 << (Swift2Parser.Identifier - 77)))) !== 0) || _la === Swift2Parser.AT) {
					{
					this.state = 1161;
					this.didSet_clause();
					}
				}

				this.state = 1164;
				this.match(Swift2Parser.RCURLY);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1166;
				this.match(Swift2Parser.LCURLY);
				this.state = 1167;
				this.didSet_clause();
				this.state = 1168;
				this.willSet_clause();
				this.state = 1169;
				this.match(Swift2Parser.RCURLY);
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
	public willSet_clause(): WillSet_clauseContext {
		let _localctx: WillSet_clauseContext = new WillSet_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, Swift2Parser.RULE_willSet_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1174;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 1173;
				this.attributes();
				}
				break;
			}
			this.state = 1176;
			this.match(Swift2Parser.T__46);
			this.state = 1178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.LPAREN) {
				{
				this.state = 1177;
				this.setter_name();
				}
			}

			this.state = 1180;
			this.code_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public didSet_clause(): DidSet_clauseContext {
		let _localctx: DidSet_clauseContext = new DidSet_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, Swift2Parser.RULE_didSet_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1183;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				{
				this.state = 1182;
				this.attributes();
				}
				break;
			}
			this.state = 1185;
			this.match(Swift2Parser.T__47);
			this.state = 1187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.LPAREN) {
				{
				this.state = 1186;
				this.setter_name();
				}
			}

			this.state = 1189;
			this.code_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typealias_declaration(): Typealias_declarationContext {
		let _localctx: Typealias_declarationContext = new Typealias_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, Swift2Parser.RULE_typealias_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1191;
			this.typealias_head();
			this.state = 1192;
			this.typealias_assignment();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typealias_head(): Typealias_headContext {
		let _localctx: Typealias_headContext = new Typealias_headContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, Swift2Parser.RULE_typealias_head);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Swift2Parser.T__44 - 45)) | (1 << (Swift2Parser.T__45 - 45)) | (1 << (Swift2Parser.T__46 - 45)) | (1 << (Swift2Parser.T__47 - 45)) | (1 << (Swift2Parser.T__51 - 45)) | (1 << (Swift2Parser.T__57 - 45)) | (1 << (Swift2Parser.T__58 - 45)) | (1 << (Swift2Parser.T__59 - 45)) | (1 << (Swift2Parser.T__60 - 45)) | (1 << (Swift2Parser.T__61 - 45)) | (1 << (Swift2Parser.T__62 - 45)) | (1 << (Swift2Parser.T__63 - 45)) | (1 << (Swift2Parser.T__64 - 45)) | (1 << (Swift2Parser.T__65 - 45)) | (1 << (Swift2Parser.T__66 - 45)) | (1 << (Swift2Parser.T__67 - 45)) | (1 << (Swift2Parser.T__68 - 45)) | (1 << (Swift2Parser.T__69 - 45)) | (1 << (Swift2Parser.T__70 - 45)) | (1 << (Swift2Parser.T__71 - 45)) | (1 << (Swift2Parser.T__72 - 45)) | (1 << (Swift2Parser.T__73 - 45)) | (1 << (Swift2Parser.T__74 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__96 - 77)) | (1 << (Swift2Parser.T__97 - 77)) | (1 << (Swift2Parser.Identifier - 77)))) !== 0) || _la === Swift2Parser.AT) {
				{
				this.state = 1194;
				this.attributes();
				}
			}

			this.state = 1198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (Swift2Parser.T__80 - 81)) | (1 << (Swift2Parser.T__81 - 81)) | (1 << (Swift2Parser.T__82 - 81)))) !== 0)) {
				{
				this.state = 1197;
				this.access_level_modifier();
				}
			}

			this.state = 1200;
			this.match(Swift2Parser.T__38);
			this.state = 1201;
			this.typealias_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typealias_name(): Typealias_nameContext {
		let _localctx: Typealias_nameContext = new Typealias_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, Swift2Parser.RULE_typealias_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1203;
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
	public typealias_assignment(): Typealias_assignmentContext {
		let _localctx: Typealias_assignmentContext = new Typealias_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, Swift2Parser.RULE_typealias_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1205;
			this.assignment_operator();
			this.state = 1206;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_declaration(): Function_declarationContext {
		let _localctx: Function_declarationContext = new Function_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, Swift2Parser.RULE_function_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1208;
			this.function_head();
			this.state = 1209;
			this.function_name();
			this.state = 1211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.LT) {
				{
				this.state = 1210;
				this.generic_parameter_clause();
				}
			}

			this.state = 1213;
			this.function_signature();
			this.state = 1215;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				{
				this.state = 1214;
				this.function_body();
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
	public function_head(): Function_headContext {
		let _localctx: Function_headContext = new Function_headContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, Swift2Parser.RULE_function_head);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1218;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 1217;
				this.attributes();
				}
				break;
			}
			this.state = 1221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Swift2Parser.T__40 - 41)) | (1 << (Swift2Parser.T__57 - 41)) | (1 << (Swift2Parser.T__59 - 41)) | (1 << (Swift2Parser.T__60 - 41)) | (1 << (Swift2Parser.T__66 - 41)) | (1 << (Swift2Parser.T__67 - 41)) | (1 << (Swift2Parser.T__68 - 41)) | (1 << (Swift2Parser.T__69 - 41)) | (1 << (Swift2Parser.T__70 - 41)) | (1 << (Swift2Parser.T__71 - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (Swift2Parser.T__72 - 73)) | (1 << (Swift2Parser.T__73 - 73)) | (1 << (Swift2Parser.T__74 - 73)) | (1 << (Swift2Parser.T__75 - 73)) | (1 << (Swift2Parser.T__76 - 73)) | (1 << (Swift2Parser.T__79 - 73)) | (1 << (Swift2Parser.T__80 - 73)) | (1 << (Swift2Parser.T__81 - 73)) | (1 << (Swift2Parser.T__82 - 73)))) !== 0)) {
				{
				this.state = 1220;
				this.declaration_modifiers();
				}
			}

			this.state = 1223;
			this.match(Swift2Parser.T__43);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_name(): Function_nameContext {
		let _localctx: Function_nameContext = new Function_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, Swift2Parser.RULE_function_name);
		try {
			this.state = 1227;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.T__44:
			case Swift2Parser.T__45:
			case Swift2Parser.T__46:
			case Swift2Parser.T__47:
			case Swift2Parser.T__51:
			case Swift2Parser.T__57:
			case Swift2Parser.T__58:
			case Swift2Parser.T__59:
			case Swift2Parser.T__60:
			case Swift2Parser.T__61:
			case Swift2Parser.T__62:
			case Swift2Parser.T__63:
			case Swift2Parser.T__64:
			case Swift2Parser.T__65:
			case Swift2Parser.T__66:
			case Swift2Parser.T__67:
			case Swift2Parser.T__68:
			case Swift2Parser.T__69:
			case Swift2Parser.T__70:
			case Swift2Parser.T__71:
			case Swift2Parser.T__72:
			case Swift2Parser.T__73:
			case Swift2Parser.T__74:
			case Swift2Parser.T__76:
			case Swift2Parser.T__79:
			case Swift2Parser.T__96:
			case Swift2Parser.T__97:
			case Swift2Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1225;
				this.identifier();
				}
				break;
			case Swift2Parser.DOT:
			case Swift2Parser.LT:
			case Swift2Parser.GT:
			case Swift2Parser.BANG:
			case Swift2Parser.QUESTION:
			case Swift2Parser.AND:
			case Swift2Parser.SUB:
			case Swift2Parser.EQUAL:
			case Swift2Parser.OR:
			case Swift2Parser.DIV:
			case Swift2Parser.ADD:
			case Swift2Parser.MUL:
			case Swift2Parser.MOD:
			case Swift2Parser.CARET:
			case Swift2Parser.TILDE:
			case Swift2Parser.Operator_head_other:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1226;
				this.operator();
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
	public function_signature(): Function_signatureContext {
		let _localctx: Function_signatureContext = new Function_signatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, Swift2Parser.RULE_function_signature);
		try {
			this.state = 1241;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1229;
				this.parameter_clauses();
				this.state = 1231;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
				case 1:
					{
					this.state = 1230;
					this.match(Swift2Parser.T__48);
					}
					break;
				}
				this.state = 1234;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 1233;
					this.function_result();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1236;
				this.parameter_clauses();
				this.state = 1237;
				this.match(Swift2Parser.T__49);
				this.state = 1239;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
				case 1:
					{
					this.state = 1238;
					this.function_result();
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
	public function_result(): Function_resultContext {
		let _localctx: Function_resultContext = new Function_resultContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, Swift2Parser.RULE_function_result);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1243;
			this.arrow_operator();
			this.state = 1245;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				this.state = 1244;
				this.attributes();
				}
				break;
			}
			this.state = 1247;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_body(): Function_bodyContext {
		let _localctx: Function_bodyContext = new Function_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, Swift2Parser.RULE_function_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1249;
			this.code_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter_clauses(): Parameter_clausesContext {
		let _localctx: Parameter_clausesContext = new Parameter_clausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, Swift2Parser.RULE_parameter_clauses);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1251;
			this.parameter_clause();
			this.state = 1253;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				{
				this.state = 1252;
				this.parameter_clauses();
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
	public parameter_clause(): Parameter_clauseContext {
		let _localctx: Parameter_clauseContext = new Parameter_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, Swift2Parser.RULE_parameter_clause);
		try {
			this.state = 1261;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1255;
				this.match(Swift2Parser.LPAREN);
				this.state = 1256;
				this.match(Swift2Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1257;
				this.match(Swift2Parser.LPAREN);
				this.state = 1258;
				this.parameter_list();
				this.state = 1259;
				this.match(Swift2Parser.RPAREN);
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
	public parameter_list(): Parameter_listContext {
		let _localctx: Parameter_listContext = new Parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, Swift2Parser.RULE_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1263;
			this.parameter();
			this.state = 1268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift2Parser.COMMA) {
				{
				{
				this.state = 1264;
				this.match(Swift2Parser.COMMA);
				this.state = 1265;
				this.parameter();
				}
				}
				this.state = 1270;
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, Swift2Parser.RULE_parameter);
		let _la: number;
		try {
			this.state = 1309;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift2Parser.T__4) {
					{
					this.state = 1271;
					this.match(Swift2Parser.T__4);
					}
				}

				this.state = 1275;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
				case 1:
					{
					this.state = 1274;
					this.external_parameter_name();
					}
					break;
				}
				this.state = 1277;
				this.local_parameter_name();
				this.state = 1279;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
				case 1:
					{
					this.state = 1278;
					this.type_annotation();
					}
					break;
				}
				this.state = 1282;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
				case 1:
					{
					this.state = 1281;
					this.default_argument_clause();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1284;
				this.match(Swift2Parser.T__5);
				this.state = 1286;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
				case 1:
					{
					this.state = 1285;
					this.external_parameter_name();
					}
					break;
				}
				this.state = 1288;
				this.local_parameter_name();
				this.state = 1290;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
				case 1:
					{
					this.state = 1289;
					this.type_annotation();
					}
					break;
				}
				this.state = 1293;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
				case 1:
					{
					this.state = 1292;
					this.default_argument_clause();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1295;
				this.match(Swift2Parser.T__50);
				this.state = 1297;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 1296;
					this.external_parameter_name();
					}
					break;
				}
				this.state = 1299;
				this.local_parameter_name();
				this.state = 1300;
				this.type_annotation();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1303;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
				case 1:
					{
					this.state = 1302;
					this.external_parameter_name();
					}
					break;
				}
				this.state = 1305;
				this.local_parameter_name();
				this.state = 1306;
				this.type_annotation();
				this.state = 1307;
				this.range_operator();
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
	public external_parameter_name(): External_parameter_nameContext {
		let _localctx: External_parameter_nameContext = new External_parameter_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, Swift2Parser.RULE_external_parameter_name);
		try {
			this.state = 1313;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.T__44:
			case Swift2Parser.T__45:
			case Swift2Parser.T__46:
			case Swift2Parser.T__47:
			case Swift2Parser.T__51:
			case Swift2Parser.T__57:
			case Swift2Parser.T__58:
			case Swift2Parser.T__59:
			case Swift2Parser.T__60:
			case Swift2Parser.T__61:
			case Swift2Parser.T__62:
			case Swift2Parser.T__63:
			case Swift2Parser.T__64:
			case Swift2Parser.T__65:
			case Swift2Parser.T__66:
			case Swift2Parser.T__67:
			case Swift2Parser.T__68:
			case Swift2Parser.T__69:
			case Swift2Parser.T__70:
			case Swift2Parser.T__71:
			case Swift2Parser.T__72:
			case Swift2Parser.T__73:
			case Swift2Parser.T__74:
			case Swift2Parser.T__76:
			case Swift2Parser.T__79:
			case Swift2Parser.T__96:
			case Swift2Parser.T__97:
			case Swift2Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1311;
				this.identifier();
				}
				break;
			case Swift2Parser.UNDERSCORE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1312;
				this.match(Swift2Parser.UNDERSCORE);
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
	public local_parameter_name(): Local_parameter_nameContext {
		let _localctx: Local_parameter_nameContext = new Local_parameter_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, Swift2Parser.RULE_local_parameter_name);
		try {
			this.state = 1317;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.T__44:
			case Swift2Parser.T__45:
			case Swift2Parser.T__46:
			case Swift2Parser.T__47:
			case Swift2Parser.T__51:
			case Swift2Parser.T__57:
			case Swift2Parser.T__58:
			case Swift2Parser.T__59:
			case Swift2Parser.T__60:
			case Swift2Parser.T__61:
			case Swift2Parser.T__62:
			case Swift2Parser.T__63:
			case Swift2Parser.T__64:
			case Swift2Parser.T__65:
			case Swift2Parser.T__66:
			case Swift2Parser.T__67:
			case Swift2Parser.T__68:
			case Swift2Parser.T__69:
			case Swift2Parser.T__70:
			case Swift2Parser.T__71:
			case Swift2Parser.T__72:
			case Swift2Parser.T__73:
			case Swift2Parser.T__74:
			case Swift2Parser.T__76:
			case Swift2Parser.T__79:
			case Swift2Parser.T__96:
			case Swift2Parser.T__97:
			case Swift2Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1315;
				this.identifier();
				}
				break;
			case Swift2Parser.UNDERSCORE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1316;
				this.match(Swift2Parser.UNDERSCORE);
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
	public default_argument_clause(): Default_argument_clauseContext {
		let _localctx: Default_argument_clauseContext = new Default_argument_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, Swift2Parser.RULE_default_argument_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1319;
			this.assignment_operator();
			this.state = 1320;
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
	public enum_declaration(): Enum_declarationContext {
		let _localctx: Enum_declarationContext = new Enum_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, Swift2Parser.RULE_enum_declaration);
		let _la: number;
		try {
			this.state = 1336;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1323;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 1322;
					this.attributes();
					}
					break;
				}
				this.state = 1326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (Swift2Parser.T__80 - 81)) | (1 << (Swift2Parser.T__81 - 81)) | (1 << (Swift2Parser.T__82 - 81)))) !== 0)) {
					{
					this.state = 1325;
					this.access_level_modifier();
					}
				}

				this.state = 1328;
				this.union_style_enum();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Swift2Parser.T__44 - 45)) | (1 << (Swift2Parser.T__45 - 45)) | (1 << (Swift2Parser.T__46 - 45)) | (1 << (Swift2Parser.T__47 - 45)) | (1 << (Swift2Parser.T__51 - 45)) | (1 << (Swift2Parser.T__57 - 45)) | (1 << (Swift2Parser.T__58 - 45)) | (1 << (Swift2Parser.T__59 - 45)) | (1 << (Swift2Parser.T__60 - 45)) | (1 << (Swift2Parser.T__61 - 45)) | (1 << (Swift2Parser.T__62 - 45)) | (1 << (Swift2Parser.T__63 - 45)) | (1 << (Swift2Parser.T__64 - 45)) | (1 << (Swift2Parser.T__65 - 45)) | (1 << (Swift2Parser.T__66 - 45)) | (1 << (Swift2Parser.T__67 - 45)) | (1 << (Swift2Parser.T__68 - 45)) | (1 << (Swift2Parser.T__69 - 45)) | (1 << (Swift2Parser.T__70 - 45)) | (1 << (Swift2Parser.T__71 - 45)) | (1 << (Swift2Parser.T__72 - 45)) | (1 << (Swift2Parser.T__73 - 45)) | (1 << (Swift2Parser.T__74 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__96 - 77)) | (1 << (Swift2Parser.T__97 - 77)) | (1 << (Swift2Parser.Identifier - 77)))) !== 0) || _la === Swift2Parser.AT) {
					{
					this.state = 1329;
					this.attributes();
					}
				}

				this.state = 1333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (Swift2Parser.T__80 - 81)) | (1 << (Swift2Parser.T__81 - 81)) | (1 << (Swift2Parser.T__82 - 81)))) !== 0)) {
					{
					this.state = 1332;
					this.access_level_modifier();
					}
				}

				this.state = 1335;
				this.raw_value_style_enum();
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
	public union_style_enum(): Union_style_enumContext {
		let _localctx: Union_style_enumContext = new Union_style_enumContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, Swift2Parser.RULE_union_style_enum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__51) {
				{
				this.state = 1338;
				this.match(Swift2Parser.T__51);
				}
			}

			this.state = 1341;
			this.match(Swift2Parser.T__41);
			this.state = 1342;
			this.enum_name();
			this.state = 1344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.LT) {
				{
				this.state = 1343;
				this.generic_parameter_clause();
				}
			}

			this.state = 1347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.COLON) {
				{
				this.state = 1346;
				this.type_inheritance_clause();
				}
			}

			this.state = 1349;
			this.match(Swift2Parser.LCURLY);
			this.state = 1351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Swift2Parser.T__1) | (1 << Swift2Parser.T__4) | (1 << Swift2Parser.T__5))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Swift2Parser.T__37 - 38)) | (1 << (Swift2Parser.T__38 - 38)) | (1 << (Swift2Parser.T__39 - 38)) | (1 << (Swift2Parser.T__40 - 38)) | (1 << (Swift2Parser.T__41 - 38)) | (1 << (Swift2Parser.T__42 - 38)) | (1 << (Swift2Parser.T__43 - 38)) | (1 << (Swift2Parser.T__44 - 38)) | (1 << (Swift2Parser.T__45 - 38)) | (1 << (Swift2Parser.T__46 - 38)) | (1 << (Swift2Parser.T__47 - 38)) | (1 << (Swift2Parser.T__51 - 38)) | (1 << (Swift2Parser.T__53 - 38)) | (1 << (Swift2Parser.T__54 - 38)) | (1 << (Swift2Parser.T__55 - 38)) | (1 << (Swift2Parser.T__56 - 38)) | (1 << (Swift2Parser.T__57 - 38)) | (1 << (Swift2Parser.T__58 - 38)) | (1 << (Swift2Parser.T__59 - 38)) | (1 << (Swift2Parser.T__60 - 38)) | (1 << (Swift2Parser.T__61 - 38)) | (1 << (Swift2Parser.T__62 - 38)) | (1 << (Swift2Parser.T__63 - 38)) | (1 << (Swift2Parser.T__64 - 38)) | (1 << (Swift2Parser.T__65 - 38)) | (1 << (Swift2Parser.T__66 - 38)) | (1 << (Swift2Parser.T__67 - 38)) | (1 << (Swift2Parser.T__68 - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (Swift2Parser.T__69 - 70)) | (1 << (Swift2Parser.T__70 - 70)) | (1 << (Swift2Parser.T__71 - 70)) | (1 << (Swift2Parser.T__72 - 70)) | (1 << (Swift2Parser.T__73 - 70)) | (1 << (Swift2Parser.T__74 - 70)) | (1 << (Swift2Parser.T__75 - 70)) | (1 << (Swift2Parser.T__76 - 70)) | (1 << (Swift2Parser.T__79 - 70)) | (1 << (Swift2Parser.T__80 - 70)) | (1 << (Swift2Parser.T__81 - 70)) | (1 << (Swift2Parser.T__82 - 70)) | (1 << (Swift2Parser.T__96 - 70)) | (1 << (Swift2Parser.T__97 - 70)))) !== 0) || _la === Swift2Parser.Identifier || _la === Swift2Parser.AT) {
				{
				this.state = 1350;
				this.union_style_enum_members();
				}
			}

			this.state = 1353;
			this.match(Swift2Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public union_style_enum_members(): Union_style_enum_membersContext {
		let _localctx: Union_style_enum_membersContext = new Union_style_enum_membersContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, Swift2Parser.RULE_union_style_enum_members);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1355;
			this.union_style_enum_member();
			this.state = 1357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Swift2Parser.T__1) | (1 << Swift2Parser.T__4) | (1 << Swift2Parser.T__5))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Swift2Parser.T__37 - 38)) | (1 << (Swift2Parser.T__38 - 38)) | (1 << (Swift2Parser.T__39 - 38)) | (1 << (Swift2Parser.T__40 - 38)) | (1 << (Swift2Parser.T__41 - 38)) | (1 << (Swift2Parser.T__42 - 38)) | (1 << (Swift2Parser.T__43 - 38)) | (1 << (Swift2Parser.T__44 - 38)) | (1 << (Swift2Parser.T__45 - 38)) | (1 << (Swift2Parser.T__46 - 38)) | (1 << (Swift2Parser.T__47 - 38)) | (1 << (Swift2Parser.T__51 - 38)) | (1 << (Swift2Parser.T__53 - 38)) | (1 << (Swift2Parser.T__54 - 38)) | (1 << (Swift2Parser.T__55 - 38)) | (1 << (Swift2Parser.T__56 - 38)) | (1 << (Swift2Parser.T__57 - 38)) | (1 << (Swift2Parser.T__58 - 38)) | (1 << (Swift2Parser.T__59 - 38)) | (1 << (Swift2Parser.T__60 - 38)) | (1 << (Swift2Parser.T__61 - 38)) | (1 << (Swift2Parser.T__62 - 38)) | (1 << (Swift2Parser.T__63 - 38)) | (1 << (Swift2Parser.T__64 - 38)) | (1 << (Swift2Parser.T__65 - 38)) | (1 << (Swift2Parser.T__66 - 38)) | (1 << (Swift2Parser.T__67 - 38)) | (1 << (Swift2Parser.T__68 - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (Swift2Parser.T__69 - 70)) | (1 << (Swift2Parser.T__70 - 70)) | (1 << (Swift2Parser.T__71 - 70)) | (1 << (Swift2Parser.T__72 - 70)) | (1 << (Swift2Parser.T__73 - 70)) | (1 << (Swift2Parser.T__74 - 70)) | (1 << (Swift2Parser.T__75 - 70)) | (1 << (Swift2Parser.T__76 - 70)) | (1 << (Swift2Parser.T__79 - 70)) | (1 << (Swift2Parser.T__80 - 70)) | (1 << (Swift2Parser.T__81 - 70)) | (1 << (Swift2Parser.T__82 - 70)) | (1 << (Swift2Parser.T__96 - 70)) | (1 << (Swift2Parser.T__97 - 70)))) !== 0) || _la === Swift2Parser.Identifier || _la === Swift2Parser.AT) {
				{
				this.state = 1356;
				this.union_style_enum_members();
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
	public union_style_enum_member(): Union_style_enum_memberContext {
		let _localctx: Union_style_enum_memberContext = new Union_style_enum_memberContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, Swift2Parser.RULE_union_style_enum_member);
		try {
			this.state = 1361;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1359;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1360;
				this.union_style_enum_case_clause();
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
	public union_style_enum_case_clause(): Union_style_enum_case_clauseContext {
		let _localctx: Union_style_enum_case_clauseContext = new Union_style_enum_case_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, Swift2Parser.RULE_union_style_enum_case_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1364;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				{
				this.state = 1363;
				this.attributes();
				}
				break;
			}
			this.state = 1367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__51) {
				{
				this.state = 1366;
				this.match(Swift2Parser.T__51);
				}
			}

			this.state = 1369;
			this.match(Swift2Parser.T__1);
			this.state = 1370;
			this.union_style_enum_case_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public union_style_enum_case_list(): Union_style_enum_case_listContext {
		let _localctx: Union_style_enum_case_listContext = new Union_style_enum_case_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, Swift2Parser.RULE_union_style_enum_case_list);
		try {
			this.state = 1377;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1372;
				this.union_style_enum_case();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1373;
				this.union_style_enum_case();
				this.state = 1374;
				this.match(Swift2Parser.COMMA);
				this.state = 1375;
				this.union_style_enum_case_list();
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
	public union_style_enum_case(): Union_style_enum_caseContext {
		let _localctx: Union_style_enum_caseContext = new Union_style_enum_caseContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, Swift2Parser.RULE_union_style_enum_case);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1379;
			this.enum_case_name();
			this.state = 1381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.LPAREN) {
				{
				this.state = 1380;
				this.tuple_type();
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
	public enum_name(): Enum_nameContext {
		let _localctx: Enum_nameContext = new Enum_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, Swift2Parser.RULE_enum_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1383;
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
	public enum_case_name(): Enum_case_nameContext {
		let _localctx: Enum_case_nameContext = new Enum_case_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, Swift2Parser.RULE_enum_case_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1385;
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
	public raw_value_style_enum(): Raw_value_style_enumContext {
		let _localctx: Raw_value_style_enumContext = new Raw_value_style_enumContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, Swift2Parser.RULE_raw_value_style_enum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1387;
			this.match(Swift2Parser.T__41);
			this.state = 1388;
			this.enum_name();
			this.state = 1390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.LT) {
				{
				this.state = 1389;
				this.generic_parameter_clause();
				}
			}

			this.state = 1392;
			this.type_inheritance_clause();
			this.state = 1393;
			this.match(Swift2Parser.LCURLY);
			this.state = 1394;
			this.raw_value_style_enum_members();
			this.state = 1395;
			this.match(Swift2Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public raw_value_style_enum_members(): Raw_value_style_enum_membersContext {
		let _localctx: Raw_value_style_enum_membersContext = new Raw_value_style_enum_membersContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, Swift2Parser.RULE_raw_value_style_enum_members);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1397;
			this.raw_value_style_enum_member();
			this.state = 1399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Swift2Parser.T__1) | (1 << Swift2Parser.T__4) | (1 << Swift2Parser.T__5))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Swift2Parser.T__37 - 38)) | (1 << (Swift2Parser.T__38 - 38)) | (1 << (Swift2Parser.T__39 - 38)) | (1 << (Swift2Parser.T__40 - 38)) | (1 << (Swift2Parser.T__41 - 38)) | (1 << (Swift2Parser.T__42 - 38)) | (1 << (Swift2Parser.T__43 - 38)) | (1 << (Swift2Parser.T__44 - 38)) | (1 << (Swift2Parser.T__45 - 38)) | (1 << (Swift2Parser.T__46 - 38)) | (1 << (Swift2Parser.T__47 - 38)) | (1 << (Swift2Parser.T__51 - 38)) | (1 << (Swift2Parser.T__53 - 38)) | (1 << (Swift2Parser.T__54 - 38)) | (1 << (Swift2Parser.T__55 - 38)) | (1 << (Swift2Parser.T__56 - 38)) | (1 << (Swift2Parser.T__57 - 38)) | (1 << (Swift2Parser.T__58 - 38)) | (1 << (Swift2Parser.T__59 - 38)) | (1 << (Swift2Parser.T__60 - 38)) | (1 << (Swift2Parser.T__61 - 38)) | (1 << (Swift2Parser.T__62 - 38)) | (1 << (Swift2Parser.T__63 - 38)) | (1 << (Swift2Parser.T__64 - 38)) | (1 << (Swift2Parser.T__65 - 38)) | (1 << (Swift2Parser.T__66 - 38)) | (1 << (Swift2Parser.T__67 - 38)) | (1 << (Swift2Parser.T__68 - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (Swift2Parser.T__69 - 70)) | (1 << (Swift2Parser.T__70 - 70)) | (1 << (Swift2Parser.T__71 - 70)) | (1 << (Swift2Parser.T__72 - 70)) | (1 << (Swift2Parser.T__73 - 70)) | (1 << (Swift2Parser.T__74 - 70)) | (1 << (Swift2Parser.T__75 - 70)) | (1 << (Swift2Parser.T__76 - 70)) | (1 << (Swift2Parser.T__79 - 70)) | (1 << (Swift2Parser.T__80 - 70)) | (1 << (Swift2Parser.T__81 - 70)) | (1 << (Swift2Parser.T__82 - 70)) | (1 << (Swift2Parser.T__96 - 70)) | (1 << (Swift2Parser.T__97 - 70)))) !== 0) || _la === Swift2Parser.Identifier || _la === Swift2Parser.AT) {
				{
				this.state = 1398;
				this.raw_value_style_enum_members();
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
	public raw_value_style_enum_member(): Raw_value_style_enum_memberContext {
		let _localctx: Raw_value_style_enum_memberContext = new Raw_value_style_enum_memberContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, Swift2Parser.RULE_raw_value_style_enum_member);
		try {
			this.state = 1403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1401;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1402;
				this.raw_value_style_enum_case_clause();
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
	public raw_value_style_enum_case_clause(): Raw_value_style_enum_case_clauseContext {
		let _localctx: Raw_value_style_enum_case_clauseContext = new Raw_value_style_enum_case_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, Swift2Parser.RULE_raw_value_style_enum_case_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1406;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Swift2Parser.T__44 - 45)) | (1 << (Swift2Parser.T__45 - 45)) | (1 << (Swift2Parser.T__46 - 45)) | (1 << (Swift2Parser.T__47 - 45)) | (1 << (Swift2Parser.T__51 - 45)) | (1 << (Swift2Parser.T__57 - 45)) | (1 << (Swift2Parser.T__58 - 45)) | (1 << (Swift2Parser.T__59 - 45)) | (1 << (Swift2Parser.T__60 - 45)) | (1 << (Swift2Parser.T__61 - 45)) | (1 << (Swift2Parser.T__62 - 45)) | (1 << (Swift2Parser.T__63 - 45)) | (1 << (Swift2Parser.T__64 - 45)) | (1 << (Swift2Parser.T__65 - 45)) | (1 << (Swift2Parser.T__66 - 45)) | (1 << (Swift2Parser.T__67 - 45)) | (1 << (Swift2Parser.T__68 - 45)) | (1 << (Swift2Parser.T__69 - 45)) | (1 << (Swift2Parser.T__70 - 45)) | (1 << (Swift2Parser.T__71 - 45)) | (1 << (Swift2Parser.T__72 - 45)) | (1 << (Swift2Parser.T__73 - 45)) | (1 << (Swift2Parser.T__74 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__96 - 77)) | (1 << (Swift2Parser.T__97 - 77)) | (1 << (Swift2Parser.Identifier - 77)))) !== 0) || _la === Swift2Parser.AT) {
				{
				this.state = 1405;
				this.attributes();
				}
			}

			this.state = 1408;
			this.match(Swift2Parser.T__1);
			this.state = 1409;
			this.raw_value_style_enum_case_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public raw_value_style_enum_case_list(): Raw_value_style_enum_case_listContext {
		let _localctx: Raw_value_style_enum_case_listContext = new Raw_value_style_enum_case_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, Swift2Parser.RULE_raw_value_style_enum_case_list);
		try {
			this.state = 1416;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1411;
				this.raw_value_style_enum_case();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1412;
				this.raw_value_style_enum_case();
				this.state = 1413;
				this.match(Swift2Parser.COMMA);
				this.state = 1414;
				this.raw_value_style_enum_case_list();
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
	public raw_value_style_enum_case(): Raw_value_style_enum_caseContext {
		let _localctx: Raw_value_style_enum_caseContext = new Raw_value_style_enum_caseContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, Swift2Parser.RULE_raw_value_style_enum_case);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1418;
			this.enum_case_name();
			this.state = 1420;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				{
				this.state = 1419;
				this.raw_value_assignment();
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
	public raw_value_assignment(): Raw_value_assignmentContext {
		let _localctx: Raw_value_assignmentContext = new Raw_value_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, Swift2Parser.RULE_raw_value_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1422;
			this.assignment_operator();
			this.state = 1423;
			this.raw_value_literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public raw_value_literal(): Raw_value_literalContext {
		let _localctx: Raw_value_literalContext = new Raw_value_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, Swift2Parser.RULE_raw_value_literal);
		try {
			this.state = 1428;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1425;
				this.numeric_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1426;
				this.match(Swift2Parser.Static_string_literal);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1427;
				this.boolean_literal();
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
	public struct_declaration(): Struct_declarationContext {
		let _localctx: Struct_declarationContext = new Struct_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, Swift2Parser.RULE_struct_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1431;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Swift2Parser.T__44 - 45)) | (1 << (Swift2Parser.T__45 - 45)) | (1 << (Swift2Parser.T__46 - 45)) | (1 << (Swift2Parser.T__47 - 45)) | (1 << (Swift2Parser.T__51 - 45)) | (1 << (Swift2Parser.T__57 - 45)) | (1 << (Swift2Parser.T__58 - 45)) | (1 << (Swift2Parser.T__59 - 45)) | (1 << (Swift2Parser.T__60 - 45)) | (1 << (Swift2Parser.T__61 - 45)) | (1 << (Swift2Parser.T__62 - 45)) | (1 << (Swift2Parser.T__63 - 45)) | (1 << (Swift2Parser.T__64 - 45)) | (1 << (Swift2Parser.T__65 - 45)) | (1 << (Swift2Parser.T__66 - 45)) | (1 << (Swift2Parser.T__67 - 45)) | (1 << (Swift2Parser.T__68 - 45)) | (1 << (Swift2Parser.T__69 - 45)) | (1 << (Swift2Parser.T__70 - 45)) | (1 << (Swift2Parser.T__71 - 45)) | (1 << (Swift2Parser.T__72 - 45)) | (1 << (Swift2Parser.T__73 - 45)) | (1 << (Swift2Parser.T__74 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__96 - 77)) | (1 << (Swift2Parser.T__97 - 77)) | (1 << (Swift2Parser.Identifier - 77)))) !== 0) || _la === Swift2Parser.AT) {
				{
				this.state = 1430;
				this.attributes();
				}
			}

			this.state = 1434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (Swift2Parser.T__80 - 81)) | (1 << (Swift2Parser.T__81 - 81)) | (1 << (Swift2Parser.T__82 - 81)))) !== 0)) {
				{
				this.state = 1433;
				this.access_level_modifier();
				}
			}

			this.state = 1436;
			this.match(Swift2Parser.T__39);
			this.state = 1437;
			this.struct_name();
			this.state = 1439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.LT) {
				{
				this.state = 1438;
				this.generic_parameter_clause();
				}
			}

			this.state = 1442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.COLON) {
				{
				this.state = 1441;
				this.type_inheritance_clause();
				}
			}

			this.state = 1444;
			this.struct_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public struct_name(): Struct_nameContext {
		let _localctx: Struct_nameContext = new Struct_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, Swift2Parser.RULE_struct_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1446;
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
	public struct_body(): Struct_bodyContext {
		let _localctx: Struct_bodyContext = new Struct_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, Swift2Parser.RULE_struct_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1448;
			this.match(Swift2Parser.LCURLY);
			this.state = 1450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__4 || _la === Swift2Parser.T__5 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Swift2Parser.T__37 - 38)) | (1 << (Swift2Parser.T__38 - 38)) | (1 << (Swift2Parser.T__39 - 38)) | (1 << (Swift2Parser.T__40 - 38)) | (1 << (Swift2Parser.T__41 - 38)) | (1 << (Swift2Parser.T__42 - 38)) | (1 << (Swift2Parser.T__43 - 38)) | (1 << (Swift2Parser.T__44 - 38)) | (1 << (Swift2Parser.T__45 - 38)) | (1 << (Swift2Parser.T__46 - 38)) | (1 << (Swift2Parser.T__47 - 38)) | (1 << (Swift2Parser.T__51 - 38)) | (1 << (Swift2Parser.T__53 - 38)) | (1 << (Swift2Parser.T__54 - 38)) | (1 << (Swift2Parser.T__55 - 38)) | (1 << (Swift2Parser.T__56 - 38)) | (1 << (Swift2Parser.T__57 - 38)) | (1 << (Swift2Parser.T__58 - 38)) | (1 << (Swift2Parser.T__59 - 38)) | (1 << (Swift2Parser.T__60 - 38)) | (1 << (Swift2Parser.T__61 - 38)) | (1 << (Swift2Parser.T__62 - 38)) | (1 << (Swift2Parser.T__63 - 38)) | (1 << (Swift2Parser.T__64 - 38)) | (1 << (Swift2Parser.T__65 - 38)) | (1 << (Swift2Parser.T__66 - 38)) | (1 << (Swift2Parser.T__67 - 38)) | (1 << (Swift2Parser.T__68 - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (Swift2Parser.T__69 - 70)) | (1 << (Swift2Parser.T__70 - 70)) | (1 << (Swift2Parser.T__71 - 70)) | (1 << (Swift2Parser.T__72 - 70)) | (1 << (Swift2Parser.T__73 - 70)) | (1 << (Swift2Parser.T__74 - 70)) | (1 << (Swift2Parser.T__75 - 70)) | (1 << (Swift2Parser.T__76 - 70)) | (1 << (Swift2Parser.T__79 - 70)) | (1 << (Swift2Parser.T__80 - 70)) | (1 << (Swift2Parser.T__81 - 70)) | (1 << (Swift2Parser.T__82 - 70)) | (1 << (Swift2Parser.T__96 - 70)) | (1 << (Swift2Parser.T__97 - 70)))) !== 0) || _la === Swift2Parser.Identifier || _la === Swift2Parser.AT) {
				{
				this.state = 1449;
				this.declarations();
				}
			}

			this.state = 1452;
			this.match(Swift2Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public class_declaration(): Class_declarationContext {
		let _localctx: Class_declarationContext = new Class_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, Swift2Parser.RULE_class_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Swift2Parser.T__44 - 45)) | (1 << (Swift2Parser.T__45 - 45)) | (1 << (Swift2Parser.T__46 - 45)) | (1 << (Swift2Parser.T__47 - 45)) | (1 << (Swift2Parser.T__51 - 45)) | (1 << (Swift2Parser.T__57 - 45)) | (1 << (Swift2Parser.T__58 - 45)) | (1 << (Swift2Parser.T__59 - 45)) | (1 << (Swift2Parser.T__60 - 45)) | (1 << (Swift2Parser.T__61 - 45)) | (1 << (Swift2Parser.T__62 - 45)) | (1 << (Swift2Parser.T__63 - 45)) | (1 << (Swift2Parser.T__64 - 45)) | (1 << (Swift2Parser.T__65 - 45)) | (1 << (Swift2Parser.T__66 - 45)) | (1 << (Swift2Parser.T__67 - 45)) | (1 << (Swift2Parser.T__68 - 45)) | (1 << (Swift2Parser.T__69 - 45)) | (1 << (Swift2Parser.T__70 - 45)) | (1 << (Swift2Parser.T__71 - 45)) | (1 << (Swift2Parser.T__72 - 45)) | (1 << (Swift2Parser.T__73 - 45)) | (1 << (Swift2Parser.T__74 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__96 - 77)) | (1 << (Swift2Parser.T__97 - 77)) | (1 << (Swift2Parser.Identifier - 77)))) !== 0) || _la === Swift2Parser.AT) {
				{
				this.state = 1454;
				this.attributes();
				}
			}

			this.state = 1458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (Swift2Parser.T__80 - 81)) | (1 << (Swift2Parser.T__81 - 81)) | (1 << (Swift2Parser.T__82 - 81)))) !== 0)) {
				{
				this.state = 1457;
				this.access_level_modifier();
				}
			}

			this.state = 1460;
			this.match(Swift2Parser.T__40);
			this.state = 1461;
			this.class_name();
			this.state = 1463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.LT) {
				{
				this.state = 1462;
				this.generic_parameter_clause();
				}
			}

			this.state = 1466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.COLON) {
				{
				this.state = 1465;
				this.type_inheritance_clause();
				}
			}

			this.state = 1468;
			this.class_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public class_name(): Class_nameContext {
		let _localctx: Class_nameContext = new Class_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, Swift2Parser.RULE_class_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1470;
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
	public class_body(): Class_bodyContext {
		let _localctx: Class_bodyContext = new Class_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, Swift2Parser.RULE_class_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1472;
			this.match(Swift2Parser.LCURLY);
			this.state = 1474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__4 || _la === Swift2Parser.T__5 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Swift2Parser.T__37 - 38)) | (1 << (Swift2Parser.T__38 - 38)) | (1 << (Swift2Parser.T__39 - 38)) | (1 << (Swift2Parser.T__40 - 38)) | (1 << (Swift2Parser.T__41 - 38)) | (1 << (Swift2Parser.T__42 - 38)) | (1 << (Swift2Parser.T__43 - 38)) | (1 << (Swift2Parser.T__44 - 38)) | (1 << (Swift2Parser.T__45 - 38)) | (1 << (Swift2Parser.T__46 - 38)) | (1 << (Swift2Parser.T__47 - 38)) | (1 << (Swift2Parser.T__51 - 38)) | (1 << (Swift2Parser.T__53 - 38)) | (1 << (Swift2Parser.T__54 - 38)) | (1 << (Swift2Parser.T__55 - 38)) | (1 << (Swift2Parser.T__56 - 38)) | (1 << (Swift2Parser.T__57 - 38)) | (1 << (Swift2Parser.T__58 - 38)) | (1 << (Swift2Parser.T__59 - 38)) | (1 << (Swift2Parser.T__60 - 38)) | (1 << (Swift2Parser.T__61 - 38)) | (1 << (Swift2Parser.T__62 - 38)) | (1 << (Swift2Parser.T__63 - 38)) | (1 << (Swift2Parser.T__64 - 38)) | (1 << (Swift2Parser.T__65 - 38)) | (1 << (Swift2Parser.T__66 - 38)) | (1 << (Swift2Parser.T__67 - 38)) | (1 << (Swift2Parser.T__68 - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (Swift2Parser.T__69 - 70)) | (1 << (Swift2Parser.T__70 - 70)) | (1 << (Swift2Parser.T__71 - 70)) | (1 << (Swift2Parser.T__72 - 70)) | (1 << (Swift2Parser.T__73 - 70)) | (1 << (Swift2Parser.T__74 - 70)) | (1 << (Swift2Parser.T__75 - 70)) | (1 << (Swift2Parser.T__76 - 70)) | (1 << (Swift2Parser.T__79 - 70)) | (1 << (Swift2Parser.T__80 - 70)) | (1 << (Swift2Parser.T__81 - 70)) | (1 << (Swift2Parser.T__82 - 70)) | (1 << (Swift2Parser.T__96 - 70)) | (1 << (Swift2Parser.T__97 - 70)))) !== 0) || _la === Swift2Parser.Identifier || _la === Swift2Parser.AT) {
				{
				this.state = 1473;
				this.declarations();
				}
			}

			this.state = 1476;
			this.match(Swift2Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocol_declaration(): Protocol_declarationContext {
		let _localctx: Protocol_declarationContext = new Protocol_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, Swift2Parser.RULE_protocol_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1479;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Swift2Parser.T__44 - 45)) | (1 << (Swift2Parser.T__45 - 45)) | (1 << (Swift2Parser.T__46 - 45)) | (1 << (Swift2Parser.T__47 - 45)) | (1 << (Swift2Parser.T__51 - 45)) | (1 << (Swift2Parser.T__57 - 45)) | (1 << (Swift2Parser.T__58 - 45)) | (1 << (Swift2Parser.T__59 - 45)) | (1 << (Swift2Parser.T__60 - 45)) | (1 << (Swift2Parser.T__61 - 45)) | (1 << (Swift2Parser.T__62 - 45)) | (1 << (Swift2Parser.T__63 - 45)) | (1 << (Swift2Parser.T__64 - 45)) | (1 << (Swift2Parser.T__65 - 45)) | (1 << (Swift2Parser.T__66 - 45)) | (1 << (Swift2Parser.T__67 - 45)) | (1 << (Swift2Parser.T__68 - 45)) | (1 << (Swift2Parser.T__69 - 45)) | (1 << (Swift2Parser.T__70 - 45)) | (1 << (Swift2Parser.T__71 - 45)) | (1 << (Swift2Parser.T__72 - 45)) | (1 << (Swift2Parser.T__73 - 45)) | (1 << (Swift2Parser.T__74 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__96 - 77)) | (1 << (Swift2Parser.T__97 - 77)) | (1 << (Swift2Parser.Identifier - 77)))) !== 0) || _la === Swift2Parser.AT) {
				{
				this.state = 1478;
				this.attributes();
				}
			}

			this.state = 1482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (Swift2Parser.T__80 - 81)) | (1 << (Swift2Parser.T__81 - 81)) | (1 << (Swift2Parser.T__82 - 81)))) !== 0)) {
				{
				this.state = 1481;
				this.access_level_modifier();
				}
			}

			this.state = 1484;
			this.match(Swift2Parser.T__42);
			this.state = 1485;
			this.protocol_name();
			this.state = 1487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.COLON) {
				{
				this.state = 1486;
				this.type_inheritance_clause();
				}
			}

			this.state = 1489;
			this.protocol_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocol_name(): Protocol_nameContext {
		let _localctx: Protocol_nameContext = new Protocol_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, Swift2Parser.RULE_protocol_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1491;
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
	public protocol_body(): Protocol_bodyContext {
		let _localctx: Protocol_bodyContext = new Protocol_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, Swift2Parser.RULE_protocol_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1493;
			this.match(Swift2Parser.LCURLY);
			this.state = 1495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__5 || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Swift2Parser.T__40 - 41)) | (1 << (Swift2Parser.T__43 - 41)) | (1 << (Swift2Parser.T__44 - 41)) | (1 << (Swift2Parser.T__45 - 41)) | (1 << (Swift2Parser.T__46 - 41)) | (1 << (Swift2Parser.T__47 - 41)) | (1 << (Swift2Parser.T__51 - 41)) | (1 << (Swift2Parser.T__52 - 41)) | (1 << (Swift2Parser.T__53 - 41)) | (1 << (Swift2Parser.T__56 - 41)) | (1 << (Swift2Parser.T__57 - 41)) | (1 << (Swift2Parser.T__58 - 41)) | (1 << (Swift2Parser.T__59 - 41)) | (1 << (Swift2Parser.T__60 - 41)) | (1 << (Swift2Parser.T__61 - 41)) | (1 << (Swift2Parser.T__62 - 41)) | (1 << (Swift2Parser.T__63 - 41)) | (1 << (Swift2Parser.T__64 - 41)) | (1 << (Swift2Parser.T__65 - 41)) | (1 << (Swift2Parser.T__66 - 41)) | (1 << (Swift2Parser.T__67 - 41)) | (1 << (Swift2Parser.T__68 - 41)) | (1 << (Swift2Parser.T__69 - 41)) | (1 << (Swift2Parser.T__70 - 41)) | (1 << (Swift2Parser.T__71 - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (Swift2Parser.T__72 - 73)) | (1 << (Swift2Parser.T__73 - 73)) | (1 << (Swift2Parser.T__74 - 73)) | (1 << (Swift2Parser.T__75 - 73)) | (1 << (Swift2Parser.T__76 - 73)) | (1 << (Swift2Parser.T__79 - 73)) | (1 << (Swift2Parser.T__80 - 73)) | (1 << (Swift2Parser.T__81 - 73)) | (1 << (Swift2Parser.T__82 - 73)) | (1 << (Swift2Parser.T__96 - 73)) | (1 << (Swift2Parser.T__97 - 73)) | (1 << (Swift2Parser.Identifier - 73)))) !== 0) || _la === Swift2Parser.AT) {
				{
				this.state = 1494;
				this.protocol_member_declarations();
				}
			}

			this.state = 1497;
			this.match(Swift2Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocol_member_declaration(): Protocol_member_declarationContext {
		let _localctx: Protocol_member_declarationContext = new Protocol_member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, Swift2Parser.RULE_protocol_member_declaration);
		try {
			this.state = 1504;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1499;
				this.protocol_property_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1500;
				this.protocol_method_declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1501;
				this.protocol_initializer_declaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1502;
				this.protocol_subscript_declaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1503;
				this.protocol_associated_type_declaration();
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
	public protocol_member_declarations(): Protocol_member_declarationsContext {
		let _localctx: Protocol_member_declarationsContext = new Protocol_member_declarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, Swift2Parser.RULE_protocol_member_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1506;
			this.protocol_member_declaration();
			this.state = 1508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__5 || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Swift2Parser.T__40 - 41)) | (1 << (Swift2Parser.T__43 - 41)) | (1 << (Swift2Parser.T__44 - 41)) | (1 << (Swift2Parser.T__45 - 41)) | (1 << (Swift2Parser.T__46 - 41)) | (1 << (Swift2Parser.T__47 - 41)) | (1 << (Swift2Parser.T__51 - 41)) | (1 << (Swift2Parser.T__52 - 41)) | (1 << (Swift2Parser.T__53 - 41)) | (1 << (Swift2Parser.T__56 - 41)) | (1 << (Swift2Parser.T__57 - 41)) | (1 << (Swift2Parser.T__58 - 41)) | (1 << (Swift2Parser.T__59 - 41)) | (1 << (Swift2Parser.T__60 - 41)) | (1 << (Swift2Parser.T__61 - 41)) | (1 << (Swift2Parser.T__62 - 41)) | (1 << (Swift2Parser.T__63 - 41)) | (1 << (Swift2Parser.T__64 - 41)) | (1 << (Swift2Parser.T__65 - 41)) | (1 << (Swift2Parser.T__66 - 41)) | (1 << (Swift2Parser.T__67 - 41)) | (1 << (Swift2Parser.T__68 - 41)) | (1 << (Swift2Parser.T__69 - 41)) | (1 << (Swift2Parser.T__70 - 41)) | (1 << (Swift2Parser.T__71 - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (Swift2Parser.T__72 - 73)) | (1 << (Swift2Parser.T__73 - 73)) | (1 << (Swift2Parser.T__74 - 73)) | (1 << (Swift2Parser.T__75 - 73)) | (1 << (Swift2Parser.T__76 - 73)) | (1 << (Swift2Parser.T__79 - 73)) | (1 << (Swift2Parser.T__80 - 73)) | (1 << (Swift2Parser.T__81 - 73)) | (1 << (Swift2Parser.T__82 - 73)) | (1 << (Swift2Parser.T__96 - 73)) | (1 << (Swift2Parser.T__97 - 73)) | (1 << (Swift2Parser.Identifier - 73)))) !== 0) || _la === Swift2Parser.AT) {
				{
				this.state = 1507;
				this.protocol_member_declarations();
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
	public protocol_property_declaration(): Protocol_property_declarationContext {
		let _localctx: Protocol_property_declarationContext = new Protocol_property_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, Swift2Parser.RULE_protocol_property_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1510;
			this.variable_declaration_head();
			this.state = 1511;
			this.variable_name();
			this.state = 1512;
			this.type_annotation();
			this.state = 1513;
			this.getter_setter_keyword_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocol_method_declaration(): Protocol_method_declarationContext {
		let _localctx: Protocol_method_declarationContext = new Protocol_method_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, Swift2Parser.RULE_protocol_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1515;
			this.function_head();
			this.state = 1516;
			this.function_name();
			this.state = 1518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.LT) {
				{
				this.state = 1517;
				this.generic_parameter_clause();
				}
			}

			this.state = 1520;
			this.function_signature();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocol_initializer_declaration(): Protocol_initializer_declarationContext {
		let _localctx: Protocol_initializer_declarationContext = new Protocol_initializer_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, Swift2Parser.RULE_protocol_initializer_declaration);
		let _la: number;
		try {
			this.state = 1537;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1522;
				this.initializer_head();
				this.state = 1524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift2Parser.LT) {
					{
					this.state = 1523;
					this.generic_parameter_clause();
					}
				}

				this.state = 1526;
				this.parameter_clause();
				this.state = 1528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift2Parser.T__48) {
					{
					this.state = 1527;
					this.match(Swift2Parser.T__48);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1530;
				this.initializer_head();
				this.state = 1532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift2Parser.LT) {
					{
					this.state = 1531;
					this.generic_parameter_clause();
					}
				}

				this.state = 1534;
				this.parameter_clause();
				this.state = 1535;
				this.match(Swift2Parser.T__49);
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
	public protocol_subscript_declaration(): Protocol_subscript_declarationContext {
		let _localctx: Protocol_subscript_declarationContext = new Protocol_subscript_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, Swift2Parser.RULE_protocol_subscript_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1539;
			this.subscript_head();
			this.state = 1540;
			this.subscript_result();
			this.state = 1541;
			this.getter_setter_keyword_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocol_associated_type_declaration(): Protocol_associated_type_declarationContext {
		let _localctx: Protocol_associated_type_declarationContext = new Protocol_associated_type_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, Swift2Parser.RULE_protocol_associated_type_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Swift2Parser.T__44 - 45)) | (1 << (Swift2Parser.T__45 - 45)) | (1 << (Swift2Parser.T__46 - 45)) | (1 << (Swift2Parser.T__47 - 45)) | (1 << (Swift2Parser.T__51 - 45)) | (1 << (Swift2Parser.T__57 - 45)) | (1 << (Swift2Parser.T__58 - 45)) | (1 << (Swift2Parser.T__59 - 45)) | (1 << (Swift2Parser.T__60 - 45)) | (1 << (Swift2Parser.T__61 - 45)) | (1 << (Swift2Parser.T__62 - 45)) | (1 << (Swift2Parser.T__63 - 45)) | (1 << (Swift2Parser.T__64 - 45)) | (1 << (Swift2Parser.T__65 - 45)) | (1 << (Swift2Parser.T__66 - 45)) | (1 << (Swift2Parser.T__67 - 45)) | (1 << (Swift2Parser.T__68 - 45)) | (1 << (Swift2Parser.T__69 - 45)) | (1 << (Swift2Parser.T__70 - 45)) | (1 << (Swift2Parser.T__71 - 45)) | (1 << (Swift2Parser.T__72 - 45)) | (1 << (Swift2Parser.T__73 - 45)) | (1 << (Swift2Parser.T__74 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__96 - 77)) | (1 << (Swift2Parser.T__97 - 77)) | (1 << (Swift2Parser.Identifier - 77)))) !== 0) || _la === Swift2Parser.AT) {
				{
				this.state = 1543;
				this.attributes();
				}
			}

			this.state = 1547;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (Swift2Parser.T__80 - 81)) | (1 << (Swift2Parser.T__81 - 81)) | (1 << (Swift2Parser.T__82 - 81)))) !== 0)) {
				{
				this.state = 1546;
				this.access_level_modifier();
				}
			}

			this.state = 1549;
			this.match(Swift2Parser.T__52);
			this.state = 1550;
			this.typealias_name();
			this.state = 1552;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				{
				this.state = 1551;
				this.type_inheritance_clause();
				}
				break;
			}
			this.state = 1555;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				{
				this.state = 1554;
				this.typealias_assignment();
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
	public initializer_declaration(): Initializer_declarationContext {
		let _localctx: Initializer_declarationContext = new Initializer_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, Swift2Parser.RULE_initializer_declaration);
		let _la: number;
		try {
			this.state = 1575;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1557;
				this.initializer_head();
				this.state = 1559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift2Parser.LT) {
					{
					this.state = 1558;
					this.generic_parameter_clause();
					}
				}

				this.state = 1561;
				this.parameter_clause();
				this.state = 1563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift2Parser.T__48) {
					{
					this.state = 1562;
					this.match(Swift2Parser.T__48);
					}
				}

				this.state = 1565;
				this.initializer_body();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1567;
				this.initializer_head();
				this.state = 1569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift2Parser.LT) {
					{
					this.state = 1568;
					this.generic_parameter_clause();
					}
				}

				this.state = 1571;
				this.parameter_clause();
				this.state = 1572;
				this.match(Swift2Parser.T__49);
				this.state = 1573;
				this.initializer_body();
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
	public initializer_head(): Initializer_headContext {
		let _localctx: Initializer_headContext = new Initializer_headContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, Swift2Parser.RULE_initializer_head);
		let _la: number;
		try {
			this.state = 1600;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1578;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
				case 1:
					{
					this.state = 1577;
					this.attributes();
					}
					break;
				}
				this.state = 1581;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Swift2Parser.T__40 - 41)) | (1 << (Swift2Parser.T__57 - 41)) | (1 << (Swift2Parser.T__59 - 41)) | (1 << (Swift2Parser.T__60 - 41)) | (1 << (Swift2Parser.T__66 - 41)) | (1 << (Swift2Parser.T__67 - 41)) | (1 << (Swift2Parser.T__68 - 41)) | (1 << (Swift2Parser.T__69 - 41)) | (1 << (Swift2Parser.T__70 - 41)) | (1 << (Swift2Parser.T__71 - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (Swift2Parser.T__72 - 73)) | (1 << (Swift2Parser.T__73 - 73)) | (1 << (Swift2Parser.T__74 - 73)) | (1 << (Swift2Parser.T__75 - 73)) | (1 << (Swift2Parser.T__76 - 73)) | (1 << (Swift2Parser.T__79 - 73)) | (1 << (Swift2Parser.T__80 - 73)) | (1 << (Swift2Parser.T__81 - 73)) | (1 << (Swift2Parser.T__82 - 73)))) !== 0)) {
					{
					this.state = 1580;
					this.declaration_modifiers();
					}
				}

				this.state = 1583;
				this.match(Swift2Parser.T__53);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1585;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
				case 1:
					{
					this.state = 1584;
					this.attributes();
					}
					break;
				}
				this.state = 1588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Swift2Parser.T__40 - 41)) | (1 << (Swift2Parser.T__57 - 41)) | (1 << (Swift2Parser.T__59 - 41)) | (1 << (Swift2Parser.T__60 - 41)) | (1 << (Swift2Parser.T__66 - 41)) | (1 << (Swift2Parser.T__67 - 41)) | (1 << (Swift2Parser.T__68 - 41)) | (1 << (Swift2Parser.T__69 - 41)) | (1 << (Swift2Parser.T__70 - 41)) | (1 << (Swift2Parser.T__71 - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (Swift2Parser.T__72 - 73)) | (1 << (Swift2Parser.T__73 - 73)) | (1 << (Swift2Parser.T__74 - 73)) | (1 << (Swift2Parser.T__75 - 73)) | (1 << (Swift2Parser.T__76 - 73)) | (1 << (Swift2Parser.T__79 - 73)) | (1 << (Swift2Parser.T__80 - 73)) | (1 << (Swift2Parser.T__81 - 73)) | (1 << (Swift2Parser.T__82 - 73)))) !== 0)) {
					{
					this.state = 1587;
					this.declaration_modifiers();
					}
				}

				this.state = 1590;
				this.match(Swift2Parser.T__53);
				this.state = 1591;
				this.match(Swift2Parser.QUESTION);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1593;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
				case 1:
					{
					this.state = 1592;
					this.attributes();
					}
					break;
				}
				this.state = 1596;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Swift2Parser.T__40 - 41)) | (1 << (Swift2Parser.T__57 - 41)) | (1 << (Swift2Parser.T__59 - 41)) | (1 << (Swift2Parser.T__60 - 41)) | (1 << (Swift2Parser.T__66 - 41)) | (1 << (Swift2Parser.T__67 - 41)) | (1 << (Swift2Parser.T__68 - 41)) | (1 << (Swift2Parser.T__69 - 41)) | (1 << (Swift2Parser.T__70 - 41)) | (1 << (Swift2Parser.T__71 - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (Swift2Parser.T__72 - 73)) | (1 << (Swift2Parser.T__73 - 73)) | (1 << (Swift2Parser.T__74 - 73)) | (1 << (Swift2Parser.T__75 - 73)) | (1 << (Swift2Parser.T__76 - 73)) | (1 << (Swift2Parser.T__79 - 73)) | (1 << (Swift2Parser.T__80 - 73)) | (1 << (Swift2Parser.T__81 - 73)) | (1 << (Swift2Parser.T__82 - 73)))) !== 0)) {
					{
					this.state = 1595;
					this.declaration_modifiers();
					}
				}

				this.state = 1598;
				this.match(Swift2Parser.T__53);
				this.state = 1599;
				this.match(Swift2Parser.BANG);
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
	public initializer_body(): Initializer_bodyContext {
		let _localctx: Initializer_bodyContext = new Initializer_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, Swift2Parser.RULE_initializer_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1602;
			this.code_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public deinitializer_declaration(): Deinitializer_declarationContext {
		let _localctx: Deinitializer_declarationContext = new Deinitializer_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, Swift2Parser.RULE_deinitializer_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1605;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Swift2Parser.T__44 - 45)) | (1 << (Swift2Parser.T__45 - 45)) | (1 << (Swift2Parser.T__46 - 45)) | (1 << (Swift2Parser.T__47 - 45)) | (1 << (Swift2Parser.T__51 - 45)) | (1 << (Swift2Parser.T__57 - 45)) | (1 << (Swift2Parser.T__58 - 45)) | (1 << (Swift2Parser.T__59 - 45)) | (1 << (Swift2Parser.T__60 - 45)) | (1 << (Swift2Parser.T__61 - 45)) | (1 << (Swift2Parser.T__62 - 45)) | (1 << (Swift2Parser.T__63 - 45)) | (1 << (Swift2Parser.T__64 - 45)) | (1 << (Swift2Parser.T__65 - 45)) | (1 << (Swift2Parser.T__66 - 45)) | (1 << (Swift2Parser.T__67 - 45)) | (1 << (Swift2Parser.T__68 - 45)) | (1 << (Swift2Parser.T__69 - 45)) | (1 << (Swift2Parser.T__70 - 45)) | (1 << (Swift2Parser.T__71 - 45)) | (1 << (Swift2Parser.T__72 - 45)) | (1 << (Swift2Parser.T__73 - 45)) | (1 << (Swift2Parser.T__74 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__96 - 77)) | (1 << (Swift2Parser.T__97 - 77)) | (1 << (Swift2Parser.Identifier - 77)))) !== 0) || _la === Swift2Parser.AT) {
				{
				this.state = 1604;
				this.attributes();
				}
			}

			this.state = 1607;
			this.match(Swift2Parser.T__54);
			this.state = 1608;
			this.code_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extension_declaration(): Extension_declarationContext {
		let _localctx: Extension_declarationContext = new Extension_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, Swift2Parser.RULE_extension_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (Swift2Parser.T__80 - 81)) | (1 << (Swift2Parser.T__81 - 81)) | (1 << (Swift2Parser.T__82 - 81)))) !== 0)) {
				{
				this.state = 1610;
				this.access_level_modifier();
				}
			}

			this.state = 1613;
			this.match(Swift2Parser.T__55);
			this.state = 1614;
			this.type_identifier();
			this.state = 1616;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.COLON) {
				{
				this.state = 1615;
				this.type_inheritance_clause();
				}
			}

			this.state = 1618;
			this.extension_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extension_body(): Extension_bodyContext {
		let _localctx: Extension_bodyContext = new Extension_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, Swift2Parser.RULE_extension_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1620;
			this.match(Swift2Parser.LCURLY);
			this.state = 1622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__4 || _la === Swift2Parser.T__5 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Swift2Parser.T__37 - 38)) | (1 << (Swift2Parser.T__38 - 38)) | (1 << (Swift2Parser.T__39 - 38)) | (1 << (Swift2Parser.T__40 - 38)) | (1 << (Swift2Parser.T__41 - 38)) | (1 << (Swift2Parser.T__42 - 38)) | (1 << (Swift2Parser.T__43 - 38)) | (1 << (Swift2Parser.T__44 - 38)) | (1 << (Swift2Parser.T__45 - 38)) | (1 << (Swift2Parser.T__46 - 38)) | (1 << (Swift2Parser.T__47 - 38)) | (1 << (Swift2Parser.T__51 - 38)) | (1 << (Swift2Parser.T__53 - 38)) | (1 << (Swift2Parser.T__54 - 38)) | (1 << (Swift2Parser.T__55 - 38)) | (1 << (Swift2Parser.T__56 - 38)) | (1 << (Swift2Parser.T__57 - 38)) | (1 << (Swift2Parser.T__58 - 38)) | (1 << (Swift2Parser.T__59 - 38)) | (1 << (Swift2Parser.T__60 - 38)) | (1 << (Swift2Parser.T__61 - 38)) | (1 << (Swift2Parser.T__62 - 38)) | (1 << (Swift2Parser.T__63 - 38)) | (1 << (Swift2Parser.T__64 - 38)) | (1 << (Swift2Parser.T__65 - 38)) | (1 << (Swift2Parser.T__66 - 38)) | (1 << (Swift2Parser.T__67 - 38)) | (1 << (Swift2Parser.T__68 - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (Swift2Parser.T__69 - 70)) | (1 << (Swift2Parser.T__70 - 70)) | (1 << (Swift2Parser.T__71 - 70)) | (1 << (Swift2Parser.T__72 - 70)) | (1 << (Swift2Parser.T__73 - 70)) | (1 << (Swift2Parser.T__74 - 70)) | (1 << (Swift2Parser.T__75 - 70)) | (1 << (Swift2Parser.T__76 - 70)) | (1 << (Swift2Parser.T__79 - 70)) | (1 << (Swift2Parser.T__80 - 70)) | (1 << (Swift2Parser.T__81 - 70)) | (1 << (Swift2Parser.T__82 - 70)) | (1 << (Swift2Parser.T__96 - 70)) | (1 << (Swift2Parser.T__97 - 70)))) !== 0) || _la === Swift2Parser.Identifier || _la === Swift2Parser.AT) {
				{
				this.state = 1621;
				this.declarations();
				}
			}

			this.state = 1624;
			this.match(Swift2Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subscript_declaration(): Subscript_declarationContext {
		let _localctx: Subscript_declarationContext = new Subscript_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, Swift2Parser.RULE_subscript_declaration);
		try {
			this.state = 1638;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1626;
				this.subscript_head();
				this.state = 1627;
				this.subscript_result();
				this.state = 1628;
				this.code_block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1630;
				this.subscript_head();
				this.state = 1631;
				this.subscript_result();
				this.state = 1632;
				this.getter_setter_block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1634;
				this.subscript_head();
				this.state = 1635;
				this.subscript_result();
				this.state = 1636;
				this.getter_setter_keyword_block();
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
	public subscript_head(): Subscript_headContext {
		let _localctx: Subscript_headContext = new Subscript_headContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, Swift2Parser.RULE_subscript_head);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1641;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				{
				this.state = 1640;
				this.attributes();
				}
				break;
			}
			this.state = 1644;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Swift2Parser.T__40 - 41)) | (1 << (Swift2Parser.T__57 - 41)) | (1 << (Swift2Parser.T__59 - 41)) | (1 << (Swift2Parser.T__60 - 41)) | (1 << (Swift2Parser.T__66 - 41)) | (1 << (Swift2Parser.T__67 - 41)) | (1 << (Swift2Parser.T__68 - 41)) | (1 << (Swift2Parser.T__69 - 41)) | (1 << (Swift2Parser.T__70 - 41)) | (1 << (Swift2Parser.T__71 - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (Swift2Parser.T__72 - 73)) | (1 << (Swift2Parser.T__73 - 73)) | (1 << (Swift2Parser.T__74 - 73)) | (1 << (Swift2Parser.T__75 - 73)) | (1 << (Swift2Parser.T__76 - 73)) | (1 << (Swift2Parser.T__79 - 73)) | (1 << (Swift2Parser.T__80 - 73)) | (1 << (Swift2Parser.T__81 - 73)) | (1 << (Swift2Parser.T__82 - 73)))) !== 0)) {
				{
				this.state = 1643;
				this.declaration_modifiers();
				}
			}

			this.state = 1646;
			this.match(Swift2Parser.T__56);
			this.state = 1647;
			this.parameter_clause();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subscript_result(): Subscript_resultContext {
		let _localctx: Subscript_resultContext = new Subscript_resultContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, Swift2Parser.RULE_subscript_result);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1649;
			this.arrow_operator();
			this.state = 1651;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 193, this._ctx) ) {
			case 1:
				{
				this.state = 1650;
				this.attributes();
				}
				break;
			}
			this.state = 1653;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operator_declaration(): Operator_declarationContext {
		let _localctx: Operator_declarationContext = new Operator_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, Swift2Parser.RULE_operator_declaration);
		try {
			this.state = 1658;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.T__57:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1655;
				this.prefix_operator_declaration();
				}
				break;
			case Swift2Parser.T__59:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1656;
				this.postfix_operator_declaration();
				}
				break;
			case Swift2Parser.T__60:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1657;
				this.infix_operator_declaration();
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
	public prefix_operator_declaration(): Prefix_operator_declarationContext {
		let _localctx: Prefix_operator_declarationContext = new Prefix_operator_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, Swift2Parser.RULE_prefix_operator_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1660;
			this.match(Swift2Parser.T__57);
			this.state = 1661;
			this.match(Swift2Parser.T__58);
			this.state = 1662;
			this.operator();
			this.state = 1663;
			this.match(Swift2Parser.LCURLY);
			this.state = 1664;
			this.match(Swift2Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfix_operator_declaration(): Postfix_operator_declarationContext {
		let _localctx: Postfix_operator_declarationContext = new Postfix_operator_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, Swift2Parser.RULE_postfix_operator_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1666;
			this.match(Swift2Parser.T__59);
			this.state = 1667;
			this.match(Swift2Parser.T__58);
			this.state = 1668;
			this.operator();
			this.state = 1669;
			this.match(Swift2Parser.LCURLY);
			this.state = 1670;
			this.match(Swift2Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public infix_operator_declaration(): Infix_operator_declarationContext {
		let _localctx: Infix_operator_declarationContext = new Infix_operator_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, Swift2Parser.RULE_infix_operator_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1672;
			this.match(Swift2Parser.T__60);
			this.state = 1673;
			this.match(Swift2Parser.T__58);
			this.state = 1674;
			this.operator();
			this.state = 1675;
			this.match(Swift2Parser.LCURLY);
			this.state = 1676;
			this.infix_operator_attributes();
			this.state = 1677;
			this.match(Swift2Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public infix_operator_attributes(): Infix_operator_attributesContext {
		let _localctx: Infix_operator_attributesContext = new Infix_operator_attributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, Swift2Parser.RULE_infix_operator_attributes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__61) {
				{
				this.state = 1679;
				this.precedence_clause();
				}
			}

			this.state = 1683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.T__62) {
				{
				this.state = 1682;
				this.associativity_clause();
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
	public precedence_clause(): Precedence_clauseContext {
		let _localctx: Precedence_clauseContext = new Precedence_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, Swift2Parser.RULE_precedence_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1685;
			this.match(Swift2Parser.T__61);
			this.state = 1686;
			this.precedence_level();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public precedence_level(): Precedence_levelContext {
		let _localctx: Precedence_levelContext = new Precedence_levelContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, Swift2Parser.RULE_precedence_level);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1688;
			this.integer_literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public associativity_clause(): Associativity_clauseContext {
		let _localctx: Associativity_clauseContext = new Associativity_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, Swift2Parser.RULE_associativity_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1690;
			this.match(Swift2Parser.T__62);
			this.state = 1691;
			this.associativity();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public associativity(): AssociativityContext {
		let _localctx: AssociativityContext = new AssociativityContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, Swift2Parser.RULE_associativity);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1693;
			_la = this._input.LA(1);
			if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (Swift2Parser.T__63 - 64)) | (1 << (Swift2Parser.T__64 - 64)) | (1 << (Swift2Parser.T__65 - 64)))) !== 0))) {
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
	public declaration_modifier(): Declaration_modifierContext {
		let _localctx: Declaration_modifierContext = new Declaration_modifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, Swift2Parser.RULE_declaration_modifier);
		try {
			this.state = 1720;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1695;
				this.match(Swift2Parser.T__40);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1696;
				this.match(Swift2Parser.T__66);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1697;
				this.match(Swift2Parser.T__67);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1698;
				this.match(Swift2Parser.T__68);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1699;
				this.match(Swift2Parser.T__60);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1700;
				this.match(Swift2Parser.T__69);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1701;
				this.match(Swift2Parser.T__70);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1702;
				this.match(Swift2Parser.T__71);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1703;
				this.match(Swift2Parser.T__72);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1704;
				this.match(Swift2Parser.T__73);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1705;
				this.match(Swift2Parser.T__59);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1706;
				this.match(Swift2Parser.T__57);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1707;
				this.match(Swift2Parser.T__74);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1708;
				this.match(Swift2Parser.T__75);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1709;
				this.match(Swift2Parser.T__76);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1710;
				this.match(Swift2Parser.T__76);
				this.state = 1711;
				this.match(Swift2Parser.LPAREN);
				this.state = 1712;
				this.match(Swift2Parser.T__77);
				this.state = 1713;
				this.match(Swift2Parser.RPAREN);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1714;
				this.match(Swift2Parser.T__76);
				this.state = 1715;
				this.match(Swift2Parser.LPAREN);
				this.state = 1716;
				this.match(Swift2Parser.T__78);
				this.state = 1717;
				this.match(Swift2Parser.RPAREN);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1718;
				this.match(Swift2Parser.T__79);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1719;
				this.access_level_modifier();
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
	public declaration_modifiers(): Declaration_modifiersContext {
		let _localctx: Declaration_modifiersContext = new Declaration_modifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, Swift2Parser.RULE_declaration_modifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1722;
			this.declaration_modifier();
			this.state = 1724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Swift2Parser.T__40 - 41)) | (1 << (Swift2Parser.T__57 - 41)) | (1 << (Swift2Parser.T__59 - 41)) | (1 << (Swift2Parser.T__60 - 41)) | (1 << (Swift2Parser.T__66 - 41)) | (1 << (Swift2Parser.T__67 - 41)) | (1 << (Swift2Parser.T__68 - 41)) | (1 << (Swift2Parser.T__69 - 41)) | (1 << (Swift2Parser.T__70 - 41)) | (1 << (Swift2Parser.T__71 - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (Swift2Parser.T__72 - 73)) | (1 << (Swift2Parser.T__73 - 73)) | (1 << (Swift2Parser.T__74 - 73)) | (1 << (Swift2Parser.T__75 - 73)) | (1 << (Swift2Parser.T__76 - 73)) | (1 << (Swift2Parser.T__79 - 73)) | (1 << (Swift2Parser.T__80 - 73)) | (1 << (Swift2Parser.T__81 - 73)) | (1 << (Swift2Parser.T__82 - 73)))) !== 0)) {
				{
				this.state = 1723;
				this.declaration_modifiers();
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
	public access_level_modifier(): Access_level_modifierContext {
		let _localctx: Access_level_modifierContext = new Access_level_modifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, Swift2Parser.RULE_access_level_modifier);
		try {
			this.state = 1741;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1726;
				this.match(Swift2Parser.T__80);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1727;
				this.match(Swift2Parser.T__80);
				this.state = 1728;
				this.match(Swift2Parser.LPAREN);
				this.state = 1729;
				this.match(Swift2Parser.T__45);
				this.state = 1730;
				this.match(Swift2Parser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1731;
				this.match(Swift2Parser.T__81);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1732;
				this.match(Swift2Parser.T__81);
				this.state = 1733;
				this.match(Swift2Parser.LPAREN);
				this.state = 1734;
				this.match(Swift2Parser.T__45);
				this.state = 1735;
				this.match(Swift2Parser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1736;
				this.match(Swift2Parser.T__82);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1737;
				this.match(Swift2Parser.T__82);
				this.state = 1738;
				this.match(Swift2Parser.LPAREN);
				this.state = 1739;
				this.match(Swift2Parser.T__45);
				this.state = 1740;
				this.match(Swift2Parser.RPAREN);
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

	public pattern(): PatternContext;
	public pattern(_p: number): PatternContext;
	// @RuleVersion(0)
	public pattern(_p?: number): PatternContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PatternContext = new PatternContext(this._ctx, _parentState);
		let _prevctx: PatternContext = _localctx;
		let _startState: number = 328;
		this.enterRecursionRule(_localctx, 328, Swift2Parser.RULE_pattern, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1762;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				{
				this.state = 1744;
				this.wildcard_pattern();
				this.state = 1746;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 200, this._ctx) ) {
				case 1:
					{
					this.state = 1745;
					this.type_annotation();
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 1748;
				this.identifier_pattern();
				this.state = 1750;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 201, this._ctx) ) {
				case 1:
					{
					this.state = 1749;
					this.type_annotation();
					}
					break;
				}
				}
				break;

			case 3:
				{
				this.state = 1752;
				this.value_binding_pattern();
				}
				break;

			case 4:
				{
				this.state = 1753;
				this.tuple_pattern();
				this.state = 1755;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
				case 1:
					{
					this.state = 1754;
					this.type_annotation();
					}
					break;
				}
				}
				break;

			case 5:
				{
				this.state = 1757;
				this.enum_case_pattern();
				}
				break;

			case 6:
				{
				this.state = 1758;
				this.optional_pattern();
				}
				break;

			case 7:
				{
				this.state = 1759;
				this.match(Swift2Parser.T__83);
				this.state = 1760;
				this.type(0);
				}
				break;

			case 8:
				{
				this.state = 1761;
				this.expression_pattern();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1769;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PatternContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_pattern);
					this.state = 1764;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 1765;
					this.match(Swift2Parser.T__84);
					this.state = 1766;
					this.type(0);
					}
					}
				}
				this.state = 1771;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
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
	public wildcard_pattern(): Wildcard_patternContext {
		let _localctx: Wildcard_patternContext = new Wildcard_patternContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, Swift2Parser.RULE_wildcard_pattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1772;
			this.match(Swift2Parser.UNDERSCORE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier_pattern(): Identifier_patternContext {
		let _localctx: Identifier_patternContext = new Identifier_patternContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, Swift2Parser.RULE_identifier_pattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1774;
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
	public value_binding_pattern(): Value_binding_patternContext {
		let _localctx: Value_binding_patternContext = new Value_binding_patternContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, Swift2Parser.RULE_value_binding_pattern);
		try {
			this.state = 1780;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.T__5:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1776;
				this.match(Swift2Parser.T__5);
				this.state = 1777;
				this.pattern(0);
				}
				break;
			case Swift2Parser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1778;
				this.match(Swift2Parser.T__4);
				this.state = 1779;
				this.pattern(0);
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
	public tuple_pattern(): Tuple_patternContext {
		let _localctx: Tuple_patternContext = new Tuple_patternContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, Swift2Parser.RULE_tuple_pattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1782;
			this.match(Swift2Parser.LPAREN);
			this.state = 1784;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				{
				this.state = 1783;
				this.tuple_pattern_element_list();
				}
				break;
			}
			this.state = 1786;
			this.match(Swift2Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tuple_pattern_element_list(): Tuple_pattern_element_listContext {
		let _localctx: Tuple_pattern_element_listContext = new Tuple_pattern_element_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, Swift2Parser.RULE_tuple_pattern_element_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1788;
			this.tuple_pattern_element();
			this.state = 1793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift2Parser.COMMA) {
				{
				{
				this.state = 1789;
				this.match(Swift2Parser.COMMA);
				this.state = 1790;
				this.tuple_pattern_element();
				}
				}
				this.state = 1795;
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
	public tuple_pattern_element(): Tuple_pattern_elementContext {
		let _localctx: Tuple_pattern_elementContext = new Tuple_pattern_elementContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, Swift2Parser.RULE_tuple_pattern_element);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1796;
			this.pattern(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enum_case_pattern(): Enum_case_patternContext {
		let _localctx: Enum_case_patternContext = new Enum_case_patternContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, Swift2Parser.RULE_enum_case_pattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Swift2Parser.T__44 - 45)) | (1 << (Swift2Parser.T__45 - 45)) | (1 << (Swift2Parser.T__46 - 45)) | (1 << (Swift2Parser.T__47 - 45)) | (1 << (Swift2Parser.T__51 - 45)) | (1 << (Swift2Parser.T__57 - 45)) | (1 << (Swift2Parser.T__58 - 45)) | (1 << (Swift2Parser.T__59 - 45)) | (1 << (Swift2Parser.T__60 - 45)) | (1 << (Swift2Parser.T__61 - 45)) | (1 << (Swift2Parser.T__62 - 45)) | (1 << (Swift2Parser.T__63 - 45)) | (1 << (Swift2Parser.T__64 - 45)) | (1 << (Swift2Parser.T__65 - 45)) | (1 << (Swift2Parser.T__66 - 45)) | (1 << (Swift2Parser.T__67 - 45)) | (1 << (Swift2Parser.T__68 - 45)) | (1 << (Swift2Parser.T__69 - 45)) | (1 << (Swift2Parser.T__70 - 45)) | (1 << (Swift2Parser.T__71 - 45)) | (1 << (Swift2Parser.T__72 - 45)) | (1 << (Swift2Parser.T__73 - 45)) | (1 << (Swift2Parser.T__74 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__96 - 77)) | (1 << (Swift2Parser.T__97 - 77)) | (1 << (Swift2Parser.Identifier - 77)))) !== 0)) {
				{
				this.state = 1798;
				this.type_identifier();
				}
			}

			this.state = 1801;
			this.match(Swift2Parser.DOT);
			this.state = 1802;
			this.enum_case_name();
			this.state = 1804;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				{
				this.state = 1803;
				this.tuple_pattern();
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
	public optional_pattern(): Optional_patternContext {
		let _localctx: Optional_patternContext = new Optional_patternContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, Swift2Parser.RULE_optional_pattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1806;
			this.identifier_pattern();
			this.state = 1807;
			this.match(Swift2Parser.QUESTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression_pattern(): Expression_patternContext {
		let _localctx: Expression_patternContext = new Expression_patternContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, Swift2Parser.RULE_expression_pattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1809;
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
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, Swift2Parser.RULE_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.AT) {
				{
				this.state = 1811;
				this.match(Swift2Parser.AT);
				}
			}

			this.state = 1814;
			this.attribute_name();
			this.state = 1816;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				{
				this.state = 1815;
				this.attribute_argument_clause();
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
	public attribute_name(): Attribute_nameContext {
		let _localctx: Attribute_nameContext = new Attribute_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, Swift2Parser.RULE_attribute_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1818;
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
	public attribute_argument_clause(): Attribute_argument_clauseContext {
		let _localctx: Attribute_argument_clauseContext = new Attribute_argument_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, Swift2Parser.RULE_attribute_argument_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1820;
			this.match(Swift2Parser.LPAREN);
			this.state = 1822;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 212, this._ctx) ) {
			case 1:
				{
				this.state = 1821;
				this.balanced_tokens();
				}
				break;
			}
			this.state = 1824;
			this.match(Swift2Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributes(): AttributesContext {
		let _localctx: AttributesContext = new AttributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, Swift2Parser.RULE_attributes);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1827;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1826;
					this.attribute();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1829;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
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
	public balanced_tokens(): Balanced_tokensContext {
		let _localctx: Balanced_tokensContext = new Balanced_tokensContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, Swift2Parser.RULE_balanced_tokens);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1832;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1831;
					this.balanced_token();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1834;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
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
	public balanced_token(): Balanced_tokenContext {
		let _localctx: Balanced_tokenContext = new Balanced_tokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, Swift2Parser.RULE_balanced_token);
		try {
			this.state = 1856;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1836;
				this.match(Swift2Parser.LPAREN);
				this.state = 1838;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 215, this._ctx) ) {
				case 1:
					{
					this.state = 1837;
					this.balanced_tokens();
					}
					break;
				}
				this.state = 1840;
				this.match(Swift2Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1841;
				this.match(Swift2Parser.LBRACK);
				this.state = 1843;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
				case 1:
					{
					this.state = 1842;
					this.balanced_tokens();
					}
					break;
				}
				this.state = 1845;
				this.match(Swift2Parser.RBRACK);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1846;
				this.match(Swift2Parser.LCURLY);
				this.state = 1848;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 217, this._ctx) ) {
				case 1:
					{
					this.state = 1847;
					this.balanced_tokens();
					}
					break;
				}
				this.state = 1850;
				this.match(Swift2Parser.RCURLY);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1851;
				this.identifier();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1852;
				this.expression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1853;
				this.context_sensitive_keyword();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1854;
				this.literal();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1855;
				this.operator();
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, Swift2Parser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1859;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				{
				this.state = 1858;
				this.try_operator();
				}
				break;
			}
			this.state = 1861;
			this.prefix_expression();
			this.state = 1863;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 220, this._ctx) ) {
			case 1:
				{
				this.state = 1862;
				this.binary_expressions();
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
	public expression_list(): Expression_listContext {
		let _localctx: Expression_listContext = new Expression_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, Swift2Parser.RULE_expression_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1865;
			this.expression();
			this.state = 1870;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift2Parser.COMMA) {
				{
				{
				this.state = 1866;
				this.match(Swift2Parser.COMMA);
				this.state = 1867;
				this.expression();
				}
				}
				this.state = 1872;
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
	public prefix_expression(): Prefix_expressionContext {
		let _localctx: Prefix_expressionContext = new Prefix_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, Swift2Parser.RULE_prefix_expression);
		try {
			this.state = 1878;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1873;
				this.prefix_operator();
				this.state = 1874;
				this.postfix_expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1876;
				this.postfix_expression(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1877;
				this.in_out_expression();
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
	public in_out_expression(): In_out_expressionContext {
		let _localctx: In_out_expressionContext = new In_out_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, Swift2Parser.RULE_in_out_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1880;
			this.match(Swift2Parser.AND);
			this.state = 1881;
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
	public try_operator(): Try_operatorContext {
		let _localctx: Try_operatorContext = new Try_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, Swift2Parser.RULE_try_operator);
		try {
			this.state = 1888;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 223, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1883;
				this.match(Swift2Parser.T__85);
				this.state = 1884;
				this.match(Swift2Parser.QUESTION);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1885;
				this.match(Swift2Parser.T__85);
				this.state = 1886;
				this.match(Swift2Parser.BANG);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1887;
				this.match(Swift2Parser.T__85);
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
	public binary_expression(): Binary_expressionContext {
		let _localctx: Binary_expressionContext = new Binary_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, Swift2Parser.RULE_binary_expression);
		try {
			this.state = 1900;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 225, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1890;
				this.binary_operator();
				this.state = 1891;
				this.prefix_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1893;
				this.conditional_operator();
				this.state = 1895;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
				case 1:
					{
					this.state = 1894;
					this.try_operator();
					}
					break;
				}
				this.state = 1897;
				this.prefix_expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1899;
				this.type_casting_operator();
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
	public binary_expressions(): Binary_expressionsContext {
		let _localctx: Binary_expressionsContext = new Binary_expressionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, Swift2Parser.RULE_binary_expressions);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1903;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1902;
					this.binary_expression();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1905;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
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
	public conditional_operator(): Conditional_operatorContext {
		let _localctx: Conditional_operatorContext = new Conditional_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, Swift2Parser.RULE_conditional_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1907;
			this.match(Swift2Parser.QUESTION);
			this.state = 1909;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 227, this._ctx) ) {
			case 1:
				{
				this.state = 1908;
				this.try_operator();
				}
				break;
			}
			this.state = 1911;
			this.expression();
			this.state = 1912;
			this.match(Swift2Parser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_casting_operator(): Type_casting_operatorContext {
		let _localctx: Type_casting_operatorContext = new Type_casting_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, Swift2Parser.RULE_type_casting_operator);
		try {
			this.state = 1924;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1914;
				this.match(Swift2Parser.T__83);
				this.state = 1915;
				this.type(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1916;
				this.match(Swift2Parser.T__84);
				this.state = 1917;
				this.type(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1918;
				this.match(Swift2Parser.T__84);
				this.state = 1919;
				this.match(Swift2Parser.QUESTION);
				this.state = 1920;
				this.type(0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1921;
				this.match(Swift2Parser.T__84);
				this.state = 1922;
				this.match(Swift2Parser.BANG);
				this.state = 1923;
				this.type(0);
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
	public primary_expression(): Primary_expressionContext {
		let _localctx: Primary_expressionContext = new Primary_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, Swift2Parser.RULE_primary_expression);
		try {
			this.state = 1938;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1926;
				this.identifier();
				this.state = 1928;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 229, this._ctx) ) {
				case 1:
					{
					this.state = 1927;
					this.generic_argument_clause();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1930;
				this.literal_expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1931;
				this.self_expression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1932;
				this.superclass_expression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1933;
				this.closure_expression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1934;
				this.parenthesized_expression();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1935;
				this.implicit_member_expression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1936;
				this.wildcard_expression();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1937;
				this.selector_expression();
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
	public implicit_member_expression(): Implicit_member_expressionContext {
		let _localctx: Implicit_member_expressionContext = new Implicit_member_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, Swift2Parser.RULE_implicit_member_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1940;
			this.match(Swift2Parser.DOT);
			this.state = 1941;
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
	public literal_expression(): Literal_expressionContext {
		let _localctx: Literal_expressionContext = new Literal_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, Swift2Parser.RULE_literal_expression);
		try {
			this.state = 1950;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1943;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1944;
				this.array_literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1945;
				this.dictionary_literal();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1946;
				this.match(Swift2Parser.T__86);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1947;
				this.match(Swift2Parser.T__87);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1948;
				this.match(Swift2Parser.T__88);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1949;
				this.match(Swift2Parser.T__89);
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
	public array_literal(): Array_literalContext {
		let _localctx: Array_literalContext = new Array_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, Swift2Parser.RULE_array_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1952;
			this.match(Swift2Parser.LBRACK);
			this.state = 1954;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 232, this._ctx) ) {
			case 1:
				{
				this.state = 1953;
				this.array_literal_items();
				}
				break;
			}
			this.state = 1956;
			this.match(Swift2Parser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array_literal_items(): Array_literal_itemsContext {
		let _localctx: Array_literal_itemsContext = new Array_literal_itemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, Swift2Parser.RULE_array_literal_items);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1958;
			this.array_literal_item();
			this.state = 1963;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 233, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1959;
					this.match(Swift2Parser.COMMA);
					this.state = 1960;
					this.array_literal_item();
					}
					}
				}
				this.state = 1965;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 233, this._ctx);
			}
			this.state = 1967;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.COMMA) {
				{
				this.state = 1966;
				this.match(Swift2Parser.COMMA);
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
	public array_literal_item(): Array_literal_itemContext {
		let _localctx: Array_literal_itemContext = new Array_literal_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, Swift2Parser.RULE_array_literal_item);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1969;
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
	public dictionary_literal(): Dictionary_literalContext {
		let _localctx: Dictionary_literalContext = new Dictionary_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, Swift2Parser.RULE_dictionary_literal);
		try {
			this.state = 1978;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 235, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1971;
				this.match(Swift2Parser.LBRACK);
				this.state = 1972;
				this.dictionary_literal_items();
				this.state = 1973;
				this.match(Swift2Parser.RBRACK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1975;
				this.match(Swift2Parser.LBRACK);
				this.state = 1976;
				this.match(Swift2Parser.COLON);
				this.state = 1977;
				this.match(Swift2Parser.RBRACK);
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
	public dictionary_literal_items(): Dictionary_literal_itemsContext {
		let _localctx: Dictionary_literal_itemsContext = new Dictionary_literal_itemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, Swift2Parser.RULE_dictionary_literal_items);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1980;
			this.dictionary_literal_item();
			this.state = 1985;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 236, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1981;
					this.match(Swift2Parser.COMMA);
					this.state = 1982;
					this.dictionary_literal_item();
					}
					}
				}
				this.state = 1987;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 236, this._ctx);
			}
			this.state = 1989;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift2Parser.COMMA) {
				{
				this.state = 1988;
				this.match(Swift2Parser.COMMA);
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
	public dictionary_literal_item(): Dictionary_literal_itemContext {
		let _localctx: Dictionary_literal_itemContext = new Dictionary_literal_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 394, Swift2Parser.RULE_dictionary_literal_item);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1991;
			this.expression();
			this.state = 1992;
			this.match(Swift2Parser.COLON);
			this.state = 1993;
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
	public self_expression(): Self_expressionContext {
		let _localctx: Self_expressionContext = new Self_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, Swift2Parser.RULE_self_expression);
		try {
			this.state = 2007;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1995;
				this.match(Swift2Parser.T__90);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1996;
				this.match(Swift2Parser.T__90);
				this.state = 1997;
				this.match(Swift2Parser.DOT);
				this.state = 1998;
				this.identifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1999;
				this.match(Swift2Parser.T__90);
				this.state = 2000;
				this.match(Swift2Parser.LBRACK);
				this.state = 2001;
				this.expression_list();
				this.state = 2002;
				this.match(Swift2Parser.RBRACK);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2004;
				this.match(Swift2Parser.T__90);
				this.state = 2005;
				this.match(Swift2Parser.DOT);
				this.state = 2006;
				this.match(Swift2Parser.T__53);
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
	public superclass_expression(): Superclass_expressionContext {
		let _localctx: Superclass_expressionContext = new Superclass_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 398, Swift2Parser.RULE_superclass_expression);
		try {
			this.state = 2012;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2009;
				this.superclass_method_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2010;
				this.superclass_subscript_expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2011;
				this.superclass_initializer_expression();
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
	public superclass_method_expression(): Superclass_method_expressionContext {
		let _localctx: Superclass_method_expressionContext = new Superclass_method_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, Swift2Parser.RULE_superclass_method_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2014;
			this.match(Swift2Parser.T__91);
			this.state = 2015;
			this.match(Swift2Parser.DOT);
			this.state = 2016;
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
	public superclass_subscript_expression(): Superclass_subscript_expressionContext {
		let _localctx: Superclass_subscript_expressionContext = new Superclass_subscript_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 402, Swift2Parser.RULE_superclass_subscript_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2018;
			this.match(Swift2Parser.T__91);
			this.state = 2019;
			this.match(Swift2Parser.LBRACK);
			this.state = 2020;
			this.expression();
			this.state = 2021;
			this.match(Swift2Parser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public superclass_initializer_expression(): Superclass_initializer_expressionContext {
		let _localctx: Superclass_initializer_expressionContext = new Superclass_initializer_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 404, Swift2Parser.RULE_superclass_initializer_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2023;
			this.match(Swift2Parser.T__91);
			this.state = 2024;
			this.match(Swift2Parser.DOT);
			this.state = 2025;
			this.match(Swift2Parser.T__53);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public closure_expression(): Closure_expressionContext {
		let _localctx: Closure_expressionContext = new Closure_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 406, Swift2Parser.RULE_closure_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2027;
			this.match(Swift2Parser.LCURLY);
			this.state = 2029;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				{
				this.state = 2028;
				this.closure_signature();
				}
				break;
			}
			this.state = 2032;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
			case 1:
				{
				this.state = 2031;
				this.statements();
				}
				break;
			}
			this.state = 2034;
			this.match(Swift2Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public closure_signature(): Closure_signatureContext {
		let _localctx: Closure_signatureContext = new Closure_signatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 408, Swift2Parser.RULE_closure_signature);
		try {
			this.state = 2065;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 246, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2036;
				this.parameter_clause();
				this.state = 2038;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
				case 1:
					{
					this.state = 2037;
					this.function_result();
					}
					break;
				}
				this.state = 2040;
				this.match(Swift2Parser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2042;
				this.identifier_list();
				this.state = 2044;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 243, this._ctx) ) {
				case 1:
					{
					this.state = 2043;
					this.function_result();
					}
					break;
				}
				this.state = 2046;
				this.match(Swift2Parser.T__2);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2048;
				this.capture_list();
				this.state = 2049;
				this.parameter_clause();
				this.state = 2051;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
				case 1:
					{
					this.state = 2050;
					this.function_result();
					}
					break;
				}
				this.state = 2053;
				this.match(Swift2Parser.T__2);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2055;
				this.capture_list();
				this.state = 2056;
				this.identifier_list();
				this.state = 2058;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 245, this._ctx) ) {
				case 1:
					{
					this.state = 2057;
					this.function_result();
					}
					break;
				}
				this.state = 2060;
				this.match(Swift2Parser.T__2);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2062;
				this.capture_list();
				this.state = 2063;
				this.match(Swift2Parser.T__2);
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
	public capture_list(): Capture_listContext {
		let _localctx: Capture_listContext = new Capture_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 410, Swift2Parser.RULE_capture_list);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2067;
			this.match(Swift2Parser.LBRACK);
			this.state = 2068;
			this.capture_list_items();
			this.state = 2069;
			this.match(Swift2Parser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public capture_list_items(): Capture_list_itemsContext {
		let _localctx: Capture_list_itemsContext = new Capture_list_itemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 412, Swift2Parser.RULE_capture_list_items);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2071;
			this.capture_list_item();
			this.state = 2076;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift2Parser.COMMA) {
				{
				{
				this.state = 2072;
				this.match(Swift2Parser.COMMA);
				this.state = 2073;
				this.capture_list_item();
				}
				}
				this.state = 2078;
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
	public capture_list_item(): Capture_list_itemContext {
		let _localctx: Capture_list_itemContext = new Capture_list_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 414, Swift2Parser.RULE_capture_list_item);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2080;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 248, this._ctx) ) {
			case 1:
				{
				this.state = 2079;
				this.capture_specifier();
				}
				break;
			}
			this.state = 2082;
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
	public capture_specifier(): Capture_specifierContext {
		let _localctx: Capture_specifierContext = new Capture_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 416, Swift2Parser.RULE_capture_specifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2084;
			_la = this._input.LA(1);
			if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__92 - 77)) | (1 << (Swift2Parser.T__93 - 77)))) !== 0))) {
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
	public parenthesized_expression(): Parenthesized_expressionContext {
		let _localctx: Parenthesized_expressionContext = new Parenthesized_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 418, Swift2Parser.RULE_parenthesized_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2086;
			this.match(Swift2Parser.LPAREN);
			this.state = 2088;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 249, this._ctx) ) {
			case 1:
				{
				this.state = 2087;
				this.expression_element_list();
				}
				break;
			}
			this.state = 2090;
			this.match(Swift2Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression_element_list(): Expression_element_listContext {
		let _localctx: Expression_element_listContext = new Expression_element_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 420, Swift2Parser.RULE_expression_element_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2092;
			this.expression_element();
			this.state = 2097;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift2Parser.COMMA) {
				{
				{
				this.state = 2093;
				this.match(Swift2Parser.COMMA);
				this.state = 2094;
				this.expression_element();
				}
				}
				this.state = 2099;
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
	public expression_element(): Expression_elementContext {
		let _localctx: Expression_elementContext = new Expression_elementContext(this._ctx, this.state);
		this.enterRule(_localctx, 422, Swift2Parser.RULE_expression_element);
		try {
			this.state = 2105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 251, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2100;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2101;
				this.identifier();
				this.state = 2102;
				this.match(Swift2Parser.COLON);
				this.state = 2103;
				this.expression();
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
	public wildcard_expression(): Wildcard_expressionContext {
		let _localctx: Wildcard_expressionContext = new Wildcard_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 424, Swift2Parser.RULE_wildcard_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2107;
			this.match(Swift2Parser.UNDERSCORE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selector_expression(): Selector_expressionContext {
		let _localctx: Selector_expressionContext = new Selector_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 426, Swift2Parser.RULE_selector_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2109;
			this.match(Swift2Parser.T__94);
			this.state = 2110;
			this.match(Swift2Parser.LPAREN);
			this.state = 2111;
			this.expression();
			this.state = 2112;
			this.match(Swift2Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public postfix_expression(): Postfix_expressionContext;
	public postfix_expression(_p: number): Postfix_expressionContext;
	// @RuleVersion(0)
	public postfix_expression(_p?: number): Postfix_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Postfix_expressionContext = new Postfix_expressionContext(this._ctx, _parentState);
		let _prevctx: Postfix_expressionContext = _localctx;
		let _startState: number = 428;
		this.enterRecursionRule(_localctx, 428, Swift2Parser.RULE_postfix_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PrimaryContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 2115;
			this.primary_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2170;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2168;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 254, this._ctx) ) {
					case 1:
						{
						_localctx = new Postfix_operationContext(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_postfix_expression);
						this.state = 2117;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 2118;
						this.postfix_operator();
						}
						break;

					case 2:
						{
						_localctx = new Function_call_expressionContext(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_postfix_expression);
						this.state = 2119;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 2120;
						this.parenthesized_expression();
						}
						break;

					case 3:
						{
						_localctx = new Function_call_with_closure_expressionContext(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_postfix_expression);
						this.state = 2121;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 2123;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Swift2Parser.LPAREN) {
							{
							this.state = 2122;
							this.parenthesized_expression();
							}
						}

						this.state = 2125;
						this.trailing_closure();
						}
						break;

					case 4:
						{
						_localctx = new Initializer_expressionContext(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_postfix_expression);
						this.state = 2126;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 2127;
						this.match(Swift2Parser.DOT);
						this.state = 2128;
						this.match(Swift2Parser.T__53);
						}
						break;

					case 5:
						{
						_localctx = new Initializer_expression_with_argsContext(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_postfix_expression);
						this.state = 2129;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 2130;
						this.match(Swift2Parser.DOT);
						this.state = 2131;
						this.match(Swift2Parser.T__53);
						this.state = 2132;
						this.match(Swift2Parser.LPAREN);
						this.state = 2133;
						this.argument_names();
						this.state = 2134;
						this.match(Swift2Parser.RPAREN);
						}
						break;

					case 6:
						{
						_localctx = new Explicit_member_expression1Context(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_postfix_expression);
						this.state = 2136;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 2137;
						this.match(Swift2Parser.DOT);
						this.state = 2138;
						this.match(Swift2Parser.Pure_decimal_digits);
						}
						break;

					case 7:
						{
						_localctx = new Explicit_member_expression2Context(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_postfix_expression);
						this.state = 2139;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 2140;
						this.match(Swift2Parser.DOT);
						this.state = 2141;
						this.identifier();
						this.state = 2143;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 253, this._ctx) ) {
						case 1:
							{
							this.state = 2142;
							this.generic_argument_clause();
							}
							break;
						}
						}
						break;

					case 8:
						{
						_localctx = new Explicit_member_expression3Context(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_postfix_expression);
						this.state = 2145;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 2146;
						this.match(Swift2Parser.DOT);
						this.state = 2147;
						this.identifier();
						this.state = 2148;
						this.match(Swift2Parser.LPAREN);
						this.state = 2149;
						this.argument_names();
						this.state = 2150;
						this.match(Swift2Parser.RPAREN);
						}
						break;

					case 9:
						{
						_localctx = new Explicit_member_expression4Context(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_postfix_expression);
						this.state = 2152;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 2153;
						this.match(Swift2Parser.LPAREN);
						this.state = 2154;
						this.argument_names();
						this.state = 2155;
						this.match(Swift2Parser.RPAREN);
						}
						break;

					case 10:
						{
						_localctx = new Postfix_self_expressionContext(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_postfix_expression);
						this.state = 2157;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 2158;
						this.match(Swift2Parser.DOT);
						this.state = 2159;
						this.match(Swift2Parser.T__90);
						}
						break;

					case 11:
						{
						_localctx = new Dynamic_type_expressionContext(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_postfix_expression);
						this.state = 2160;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 2161;
						this.match(Swift2Parser.DOT);
						this.state = 2162;
						this.match(Swift2Parser.T__95);
						}
						break;

					case 12:
						{
						_localctx = new Subscript_expressionContext(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_postfix_expression);
						this.state = 2163;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 2164;
						this.match(Swift2Parser.LBRACK);
						this.state = 2165;
						this.expression_list();
						this.state = 2166;
						this.match(Swift2Parser.RBRACK);
						}
						break;
					}
					}
				}
				this.state = 2172;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
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
	public argument_names(): Argument_namesContext {
		let _localctx: Argument_namesContext = new Argument_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 430, Swift2Parser.RULE_argument_names);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2173;
			this.argument_name();
			this.state = 2175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Swift2Parser.T__44 - 45)) | (1 << (Swift2Parser.T__45 - 45)) | (1 << (Swift2Parser.T__46 - 45)) | (1 << (Swift2Parser.T__47 - 45)) | (1 << (Swift2Parser.T__51 - 45)) | (1 << (Swift2Parser.T__57 - 45)) | (1 << (Swift2Parser.T__58 - 45)) | (1 << (Swift2Parser.T__59 - 45)) | (1 << (Swift2Parser.T__60 - 45)) | (1 << (Swift2Parser.T__61 - 45)) | (1 << (Swift2Parser.T__62 - 45)) | (1 << (Swift2Parser.T__63 - 45)) | (1 << (Swift2Parser.T__64 - 45)) | (1 << (Swift2Parser.T__65 - 45)) | (1 << (Swift2Parser.T__66 - 45)) | (1 << (Swift2Parser.T__67 - 45)) | (1 << (Swift2Parser.T__68 - 45)) | (1 << (Swift2Parser.T__69 - 45)) | (1 << (Swift2Parser.T__70 - 45)) | (1 << (Swift2Parser.T__71 - 45)) | (1 << (Swift2Parser.T__72 - 45)) | (1 << (Swift2Parser.T__73 - 45)) | (1 << (Swift2Parser.T__74 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__96 - 77)) | (1 << (Swift2Parser.T__97 - 77)) | (1 << (Swift2Parser.Identifier - 77)))) !== 0)) {
				{
				this.state = 2174;
				this.argument_names();
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
	public argument_name(): Argument_nameContext {
		let _localctx: Argument_nameContext = new Argument_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 432, Swift2Parser.RULE_argument_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2177;
			this.identifier();
			this.state = 2178;
			this.match(Swift2Parser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trailing_closure(): Trailing_closureContext {
		let _localctx: Trailing_closureContext = new Trailing_closureContext(this._ctx, this.state);
		this.enterRule(_localctx, 434, Swift2Parser.RULE_trailing_closure);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2180;
			this.closure_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 436;
		this.enterRecursionRule(_localctx, 436, Swift2Parser.RULE_type, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				{
				this.state = 2183;
				this.match(Swift2Parser.LBRACK);
				this.state = 2184;
				this.type(0);
				this.state = 2185;
				this.match(Swift2Parser.RBRACK);
				}
				break;

			case 2:
				{
				this.state = 2187;
				this.match(Swift2Parser.LBRACK);
				this.state = 2188;
				this.type(0);
				this.state = 2189;
				this.match(Swift2Parser.COLON);
				this.state = 2190;
				this.type(0);
				this.state = 2191;
				this.match(Swift2Parser.RBRACK);
				}
				break;

			case 3:
				{
				this.state = 2193;
				this.type_identifier();
				}
				break;

			case 4:
				{
				this.state = 2194;
				this.tuple_type();
				}
				break;

			case 5:
				{
				this.state = 2195;
				this.protocol_composition_type();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2222;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 260, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2220;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 259, this._ctx) ) {
					case 1:
						{
						_localctx = new TypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_type);
						this.state = 2198;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 2200;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 258, this._ctx) ) {
						case 1:
							{
							this.state = 2199;
							this.match(Swift2Parser.T__48);
							}
							break;
						}
						this.state = 2202;
						this.arrow_operator();
						this.state = 2203;
						this.type(10);
						}
						break;

					case 2:
						{
						_localctx = new TypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_type);
						this.state = 2205;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 2206;
						this.match(Swift2Parser.T__49);
						this.state = 2207;
						this.arrow_operator();
						this.state = 2208;
						this.type(9);
						}
						break;

					case 3:
						{
						_localctx = new TypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_type);
						this.state = 2210;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 2211;
						this.match(Swift2Parser.QUESTION);
						}
						break;

					case 4:
						{
						_localctx = new TypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_type);
						this.state = 2212;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 2213;
						this.match(Swift2Parser.BANG);
						}
						break;

					case 5:
						{
						_localctx = new TypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_type);
						this.state = 2214;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 2215;
						this.match(Swift2Parser.DOT);
						this.state = 2216;
						this.match(Swift2Parser.T__96);
						}
						break;

					case 6:
						{
						_localctx = new TypeContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Swift2Parser.RULE_type);
						this.state = 2217;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 2218;
						this.match(Swift2Parser.DOT);
						this.state = 2219;
						this.match(Swift2Parser.T__97);
						}
						break;
					}
					}
				}
				this.state = 2224;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 260, this._ctx);
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
	public type_annotation(): Type_annotationContext {
		let _localctx: Type_annotationContext = new Type_annotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 438, Swift2Parser.RULE_type_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2225;
			this.match(Swift2Parser.COLON);
			this.state = 2227;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 261, this._ctx) ) {
			case 1:
				{
				this.state = 2226;
				this.attributes();
				}
				break;
			}
			this.state = 2229;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_identifier(): Type_identifierContext {
		let _localctx: Type_identifierContext = new Type_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 440, Swift2Parser.RULE_type_identifier);
		let _la: number;
		try {
			this.state = 2242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 264, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2231;
				this.type_name();
				this.state = 2233;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
				case 1:
					{
					this.state = 2232;
					this.generic_argument_clause();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2235;
				this.type_name();
				this.state = 2237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift2Parser.LT) {
					{
					this.state = 2236;
					this.generic_argument_clause();
					}
				}

				this.state = 2239;
				this.match(Swift2Parser.DOT);
				this.state = 2240;
				this.type_identifier();
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
	public type_name(): Type_nameContext {
		let _localctx: Type_nameContext = new Type_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 442, Swift2Parser.RULE_type_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2244;
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
	public tuple_type(): Tuple_typeContext {
		let _localctx: Tuple_typeContext = new Tuple_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 444, Swift2Parser.RULE_tuple_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2246;
			this.match(Swift2Parser.LPAREN);
			this.state = 2248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (Swift2Parser.T__42 - 43)) | (1 << (Swift2Parser.T__44 - 43)) | (1 << (Swift2Parser.T__45 - 43)) | (1 << (Swift2Parser.T__46 - 43)) | (1 << (Swift2Parser.T__47 - 43)) | (1 << (Swift2Parser.T__50 - 43)) | (1 << (Swift2Parser.T__51 - 43)) | (1 << (Swift2Parser.T__57 - 43)) | (1 << (Swift2Parser.T__58 - 43)) | (1 << (Swift2Parser.T__59 - 43)) | (1 << (Swift2Parser.T__60 - 43)) | (1 << (Swift2Parser.T__61 - 43)) | (1 << (Swift2Parser.T__62 - 43)) | (1 << (Swift2Parser.T__63 - 43)) | (1 << (Swift2Parser.T__64 - 43)) | (1 << (Swift2Parser.T__65 - 43)) | (1 << (Swift2Parser.T__66 - 43)) | (1 << (Swift2Parser.T__67 - 43)) | (1 << (Swift2Parser.T__68 - 43)) | (1 << (Swift2Parser.T__69 - 43)) | (1 << (Swift2Parser.T__70 - 43)) | (1 << (Swift2Parser.T__71 - 43)) | (1 << (Swift2Parser.T__72 - 43)) | (1 << (Swift2Parser.T__73 - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (Swift2Parser.T__74 - 75)) | (1 << (Swift2Parser.T__76 - 75)) | (1 << (Swift2Parser.T__79 - 75)) | (1 << (Swift2Parser.T__96 - 75)) | (1 << (Swift2Parser.T__97 - 75)) | (1 << (Swift2Parser.Identifier - 75)) | (1 << (Swift2Parser.LPAREN - 75)))) !== 0) || _la === Swift2Parser.LBRACK || _la === Swift2Parser.AT) {
				{
				this.state = 2247;
				this.tuple_type_body();
				}
			}

			this.state = 2250;
			this.match(Swift2Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tuple_type_body(): Tuple_type_bodyContext {
		let _localctx: Tuple_type_bodyContext = new Tuple_type_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 446, Swift2Parser.RULE_tuple_type_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2252;
			this.tuple_type_element_list();
			this.state = 2254;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 266, this._ctx) ) {
			case 1:
				{
				this.state = 2253;
				this.range_operator();
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
	public tuple_type_element_list(): Tuple_type_element_listContext {
		let _localctx: Tuple_type_element_listContext = new Tuple_type_element_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 448, Swift2Parser.RULE_tuple_type_element_list);
		try {
			this.state = 2261;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 267, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2256;
				this.tuple_type_element();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2257;
				this.tuple_type_element();
				this.state = 2258;
				this.match(Swift2Parser.COMMA);
				this.state = 2259;
				this.tuple_type_element_list();
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
	public tuple_type_element(): Tuple_type_elementContext {
		let _localctx: Tuple_type_elementContext = new Tuple_type_elementContext(this._ctx, this.state);
		this.enterRule(_localctx, 450, Swift2Parser.RULE_tuple_type_element);
		let _la: number;
		try {
			this.state = 2276;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 271, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2264;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 268, this._ctx) ) {
				case 1:
					{
					this.state = 2263;
					this.attributes();
					}
					break;
				}
				this.state = 2267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift2Parser.T__50) {
					{
					this.state = 2266;
					this.match(Swift2Parser.T__50);
					}
				}

				this.state = 2269;
				this.type(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift2Parser.T__50) {
					{
					this.state = 2270;
					this.match(Swift2Parser.T__50);
					}
				}

				this.state = 2273;
				this.element_name();
				this.state = 2274;
				this.type_annotation();
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
	public element_name(): Element_nameContext {
		let _localctx: Element_nameContext = new Element_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 452, Swift2Parser.RULE_element_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2278;
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
	public protocol_composition_type(): Protocol_composition_typeContext {
		let _localctx: Protocol_composition_typeContext = new Protocol_composition_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 454, Swift2Parser.RULE_protocol_composition_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2280;
			this.match(Swift2Parser.T__42);
			this.state = 2281;
			this.match(Swift2Parser.LT);
			this.state = 2283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Swift2Parser.T__44 - 45)) | (1 << (Swift2Parser.T__45 - 45)) | (1 << (Swift2Parser.T__46 - 45)) | (1 << (Swift2Parser.T__47 - 45)) | (1 << (Swift2Parser.T__51 - 45)) | (1 << (Swift2Parser.T__57 - 45)) | (1 << (Swift2Parser.T__58 - 45)) | (1 << (Swift2Parser.T__59 - 45)) | (1 << (Swift2Parser.T__60 - 45)) | (1 << (Swift2Parser.T__61 - 45)) | (1 << (Swift2Parser.T__62 - 45)) | (1 << (Swift2Parser.T__63 - 45)) | (1 << (Swift2Parser.T__64 - 45)) | (1 << (Swift2Parser.T__65 - 45)) | (1 << (Swift2Parser.T__66 - 45)) | (1 << (Swift2Parser.T__67 - 45)) | (1 << (Swift2Parser.T__68 - 45)) | (1 << (Swift2Parser.T__69 - 45)) | (1 << (Swift2Parser.T__70 - 45)) | (1 << (Swift2Parser.T__71 - 45)) | (1 << (Swift2Parser.T__72 - 45)) | (1 << (Swift2Parser.T__73 - 45)) | (1 << (Swift2Parser.T__74 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__96 - 77)) | (1 << (Swift2Parser.T__97 - 77)) | (1 << (Swift2Parser.Identifier - 77)))) !== 0) || _la === Swift2Parser.COMMA) {
				{
				this.state = 2282;
				this.protocol_identifier_list();
				}
			}

			this.state = 2285;
			this.match(Swift2Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocol_identifier_list(): Protocol_identifier_listContext {
		let _localctx: Protocol_identifier_listContext = new Protocol_identifier_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 456, Swift2Parser.RULE_protocol_identifier_list);
		let _la: number;
		try {
			this.state = 2294;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.T__44:
			case Swift2Parser.T__45:
			case Swift2Parser.T__46:
			case Swift2Parser.T__47:
			case Swift2Parser.T__51:
			case Swift2Parser.T__57:
			case Swift2Parser.T__58:
			case Swift2Parser.T__59:
			case Swift2Parser.T__60:
			case Swift2Parser.T__61:
			case Swift2Parser.T__62:
			case Swift2Parser.T__63:
			case Swift2Parser.T__64:
			case Swift2Parser.T__65:
			case Swift2Parser.T__66:
			case Swift2Parser.T__67:
			case Swift2Parser.T__68:
			case Swift2Parser.T__69:
			case Swift2Parser.T__70:
			case Swift2Parser.T__71:
			case Swift2Parser.T__72:
			case Swift2Parser.T__73:
			case Swift2Parser.T__74:
			case Swift2Parser.T__76:
			case Swift2Parser.T__79:
			case Swift2Parser.T__96:
			case Swift2Parser.T__97:
			case Swift2Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2287;
				this.protocol_identifier();
				}
				break;
			case Swift2Parser.COMMA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2288;
					this.match(Swift2Parser.COMMA);
					this.state = 2289;
					this.protocol_identifier();
					}
					}
					this.state = 2292;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === Swift2Parser.COMMA);
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
	public protocol_identifier(): Protocol_identifierContext {
		let _localctx: Protocol_identifierContext = new Protocol_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 458, Swift2Parser.RULE_protocol_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2296;
			this.type_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_inheritance_clause(): Type_inheritance_clauseContext {
		let _localctx: Type_inheritance_clauseContext = new Type_inheritance_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 460, Swift2Parser.RULE_type_inheritance_clause);
		try {
			this.state = 2307;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2298;
				this.match(Swift2Parser.COLON);
				this.state = 2299;
				this.class_requirement();
				this.state = 2300;
				this.match(Swift2Parser.COMMA);
				this.state = 2301;
				this.type_inheritance_list();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2303;
				this.match(Swift2Parser.COLON);
				this.state = 2304;
				this.class_requirement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2305;
				this.match(Swift2Parser.COLON);
				this.state = 2306;
				this.type_inheritance_list();
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
	public type_inheritance_list(): Type_inheritance_listContext {
		let _localctx: Type_inheritance_listContext = new Type_inheritance_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 462, Swift2Parser.RULE_type_inheritance_list);
		try {
			this.state = 2314;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 276, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2309;
				this.type_identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2310;
				this.type_identifier();
				this.state = 2311;
				this.match(Swift2Parser.COMMA);
				this.state = 2312;
				this.type_inheritance_list();
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
	public class_requirement(): Class_requirementContext {
		let _localctx: Class_requirementContext = new Class_requirementContext(this._ctx, this.state);
		this.enterRule(_localctx, 464, Swift2Parser.RULE_class_requirement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2316;
			this.match(Swift2Parser.T__40);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 466, Swift2Parser.RULE_identifier);
		try {
			this.state = 2320;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2318;
				this.match(Swift2Parser.Identifier);
				}
				break;
			case Swift2Parser.T__44:
			case Swift2Parser.T__45:
			case Swift2Parser.T__46:
			case Swift2Parser.T__47:
			case Swift2Parser.T__51:
			case Swift2Parser.T__57:
			case Swift2Parser.T__58:
			case Swift2Parser.T__59:
			case Swift2Parser.T__60:
			case Swift2Parser.T__61:
			case Swift2Parser.T__62:
			case Swift2Parser.T__63:
			case Swift2Parser.T__64:
			case Swift2Parser.T__65:
			case Swift2Parser.T__66:
			case Swift2Parser.T__67:
			case Swift2Parser.T__68:
			case Swift2Parser.T__69:
			case Swift2Parser.T__70:
			case Swift2Parser.T__71:
			case Swift2Parser.T__72:
			case Swift2Parser.T__73:
			case Swift2Parser.T__74:
			case Swift2Parser.T__76:
			case Swift2Parser.T__79:
			case Swift2Parser.T__96:
			case Swift2Parser.T__97:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2319;
				this.context_sensitive_keyword();
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
	public identifier_list(): Identifier_listContext {
		let _localctx: Identifier_listContext = new Identifier_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 468, Swift2Parser.RULE_identifier_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2322;
			this.identifier();
			this.state = 2327;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 278, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2323;
					this.match(Swift2Parser.COMMA);
					this.state = 2324;
					this.identifier();
					}
					}
				}
				this.state = 2329;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 278, this._ctx);
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
	public context_sensitive_keyword(): Context_sensitive_keywordContext {
		let _localctx: Context_sensitive_keywordContext = new Context_sensitive_keywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 470, Swift2Parser.RULE_context_sensitive_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2330;
			_la = this._input.LA(1);
			if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Swift2Parser.T__44 - 45)) | (1 << (Swift2Parser.T__45 - 45)) | (1 << (Swift2Parser.T__46 - 45)) | (1 << (Swift2Parser.T__47 - 45)) | (1 << (Swift2Parser.T__51 - 45)) | (1 << (Swift2Parser.T__57 - 45)) | (1 << (Swift2Parser.T__58 - 45)) | (1 << (Swift2Parser.T__59 - 45)) | (1 << (Swift2Parser.T__60 - 45)) | (1 << (Swift2Parser.T__61 - 45)) | (1 << (Swift2Parser.T__62 - 45)) | (1 << (Swift2Parser.T__63 - 45)) | (1 << (Swift2Parser.T__64 - 45)) | (1 << (Swift2Parser.T__65 - 45)) | (1 << (Swift2Parser.T__66 - 45)) | (1 << (Swift2Parser.T__67 - 45)) | (1 << (Swift2Parser.T__68 - 45)) | (1 << (Swift2Parser.T__69 - 45)) | (1 << (Swift2Parser.T__70 - 45)) | (1 << (Swift2Parser.T__71 - 45)) | (1 << (Swift2Parser.T__72 - 45)) | (1 << (Swift2Parser.T__73 - 45)) | (1 << (Swift2Parser.T__74 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (Swift2Parser.T__76 - 77)) | (1 << (Swift2Parser.T__79 - 77)) | (1 << (Swift2Parser.T__96 - 77)) | (1 << (Swift2Parser.T__97 - 77)))) !== 0))) {
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
	public assignment_operator(): Assignment_operatorContext {
		let _localctx: Assignment_operatorContext = new Assignment_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 472, Swift2Parser.RULE_assignment_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2332;
			if (!(SwiftSupport.isBinaryOp(_input))) {
				throw new FailedPredicateException(this, "SwiftSupport.isBinaryOp(_input)");
			}
			this.state = 2333;
			this.match(Swift2Parser.EQUAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public negate_prefix_operator(): Negate_prefix_operatorContext {
		let _localctx: Negate_prefix_operatorContext = new Negate_prefix_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 474, Swift2Parser.RULE_negate_prefix_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2335;
			if (!(SwiftSupport.isPrefixOp(_input))) {
				throw new FailedPredicateException(this, "SwiftSupport.isPrefixOp(_input)");
			}
			this.state = 2336;
			this.match(Swift2Parser.SUB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public build_AND(): Build_ANDContext {
		let _localctx: Build_ANDContext = new Build_ANDContext(this._ctx, this.state);
		this.enterRule(_localctx, 476, Swift2Parser.RULE_build_AND);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2338;
			if (!(SwiftSupport.isOperator(_input,"&&"))) {
				throw new FailedPredicateException(this, "SwiftSupport.isOperator(_input,\"&&\")");
			}
			this.state = 2339;
			this.match(Swift2Parser.AND);
			this.state = 2340;
			this.match(Swift2Parser.AND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public build_OR(): Build_ORContext {
		let _localctx: Build_ORContext = new Build_ORContext(this._ctx, this.state);
		this.enterRule(_localctx, 478, Swift2Parser.RULE_build_OR);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2342;
			if (!(SwiftSupport.isOperator(_input,"||"))) {
				throw new FailedPredicateException(this, "SwiftSupport.isOperator(_input,\"||\")");
			}
			this.state = 2343;
			this.match(Swift2Parser.OR);
			this.state = 2344;
			this.match(Swift2Parser.OR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrow_operator(): Arrow_operatorContext {
		let _localctx: Arrow_operatorContext = new Arrow_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 480, Swift2Parser.RULE_arrow_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2346;
			if (!(SwiftSupport.isOperator(_input,"->"))) {
				throw new FailedPredicateException(this, "SwiftSupport.isOperator(_input,\"->\")");
			}
			this.state = 2347;
			this.match(Swift2Parser.SUB);
			this.state = 2348;
			this.match(Swift2Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public range_operator(): Range_operatorContext {
		let _localctx: Range_operatorContext = new Range_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 482, Swift2Parser.RULE_range_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2350;
			if (!(SwiftSupport.isOperator(_input,"..."))) {
				throw new FailedPredicateException(this, "SwiftSupport.isOperator(_input,\"...\")");
			}
			this.state = 2351;
			this.match(Swift2Parser.DOT);
			this.state = 2352;
			this.match(Swift2Parser.DOT);
			this.state = 2353;
			this.match(Swift2Parser.DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public same_type_equals(): Same_type_equalsContext {
		let _localctx: Same_type_equalsContext = new Same_type_equalsContext(this._ctx, this.state);
		this.enterRule(_localctx, 484, Swift2Parser.RULE_same_type_equals);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2355;
			if (!(SwiftSupport.isOperator(_input,"=="))) {
				throw new FailedPredicateException(this, "SwiftSupport.isOperator(_input,\"==\")");
			}
			this.state = 2356;
			this.match(Swift2Parser.EQUAL);
			this.state = 2357;
			this.match(Swift2Parser.EQUAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binary_operator(): Binary_operatorContext {
		let _localctx: Binary_operatorContext = new Binary_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 486, Swift2Parser.RULE_binary_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2359;
			if (!(SwiftSupport.isBinaryOp(_input))) {
				throw new FailedPredicateException(this, "SwiftSupport.isBinaryOp(_input)");
			}
			this.state = 2360;
			this.operator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prefix_operator(): Prefix_operatorContext {
		let _localctx: Prefix_operatorContext = new Prefix_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 488, Swift2Parser.RULE_prefix_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2362;
			if (!(SwiftSupport.isPrefixOp(_input))) {
				throw new FailedPredicateException(this, "SwiftSupport.isPrefixOp(_input)");
			}
			this.state = 2363;
			this.operator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfix_operator(): Postfix_operatorContext {
		let _localctx: Postfix_operatorContext = new Postfix_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 490, Swift2Parser.RULE_postfix_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2365;
			if (!(SwiftSupport.isPostfixOp(_input))) {
				throw new FailedPredicateException(this, "SwiftSupport.isPostfixOp(_input)");
			}
			this.state = 2366;
			this.operator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 492, Swift2Parser.RULE_operator);
		try {
			let _alt: number;
			this.state = 2384;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.LT:
			case Swift2Parser.GT:
			case Swift2Parser.BANG:
			case Swift2Parser.QUESTION:
			case Swift2Parser.AND:
			case Swift2Parser.SUB:
			case Swift2Parser.EQUAL:
			case Swift2Parser.OR:
			case Swift2Parser.DIV:
			case Swift2Parser.ADD:
			case Swift2Parser.MUL:
			case Swift2Parser.MOD:
			case Swift2Parser.CARET:
			case Swift2Parser.TILDE:
			case Swift2Parser.Operator_head_other:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2368;
				this.operator_head();
				this.state = 2373;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2369;
						if (!(_input.get(_input.index()-1).getType()!=WS)) {
							throw new FailedPredicateException(this, "_input.get(_input.index()-1).getType()!=WS");
						}
						this.state = 2370;
						this.operator_character();
						}
						}
					}
					this.state = 2375;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
				}
				}
				break;
			case Swift2Parser.DOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2376;
				this.dot_operator_head();
				this.state = 2381;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 280, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2377;
						if (!(_input.get(_input.index()-1).getType()!=WS)) {
							throw new FailedPredicateException(this, "_input.get(_input.index()-1).getType()!=WS");
						}
						this.state = 2378;
						this.dot_operator_character();
						}
						}
					}
					this.state = 2383;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 280, this._ctx);
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
	public operator_character(): Operator_characterContext {
		let _localctx: Operator_characterContext = new Operator_characterContext(this._ctx, this.state);
		this.enterRule(_localctx, 494, Swift2Parser.RULE_operator_character);
		try {
			this.state = 2388;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.LT:
			case Swift2Parser.GT:
			case Swift2Parser.BANG:
			case Swift2Parser.QUESTION:
			case Swift2Parser.AND:
			case Swift2Parser.SUB:
			case Swift2Parser.EQUAL:
			case Swift2Parser.OR:
			case Swift2Parser.DIV:
			case Swift2Parser.ADD:
			case Swift2Parser.MUL:
			case Swift2Parser.MOD:
			case Swift2Parser.CARET:
			case Swift2Parser.TILDE:
			case Swift2Parser.Operator_head_other:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2386;
				this.operator_head();
				}
				break;
			case Swift2Parser.Operator_following_character:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2387;
				this.match(Swift2Parser.Operator_following_character);
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
	public operator_head(): Operator_headContext {
		let _localctx: Operator_headContext = new Operator_headContext(this._ctx, this.state);
		this.enterRule(_localctx, 496, Swift2Parser.RULE_operator_head);
		let _la: number;
		try {
			this.state = 2392;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.LT:
			case Swift2Parser.GT:
			case Swift2Parser.BANG:
			case Swift2Parser.QUESTION:
			case Swift2Parser.AND:
			case Swift2Parser.SUB:
			case Swift2Parser.EQUAL:
			case Swift2Parser.OR:
			case Swift2Parser.DIV:
			case Swift2Parser.ADD:
			case Swift2Parser.MUL:
			case Swift2Parser.MOD:
			case Swift2Parser.CARET:
			case Swift2Parser.TILDE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2390;
				_la = this._input.LA(1);
				if (!(((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (Swift2Parser.LT - 114)) | (1 << (Swift2Parser.GT - 114)) | (1 << (Swift2Parser.BANG - 114)) | (1 << (Swift2Parser.QUESTION - 114)) | (1 << (Swift2Parser.AND - 114)) | (1 << (Swift2Parser.SUB - 114)) | (1 << (Swift2Parser.EQUAL - 114)) | (1 << (Swift2Parser.OR - 114)) | (1 << (Swift2Parser.DIV - 114)) | (1 << (Swift2Parser.ADD - 114)) | (1 << (Swift2Parser.MUL - 114)) | (1 << (Swift2Parser.MOD - 114)) | (1 << (Swift2Parser.CARET - 114)) | (1 << (Swift2Parser.TILDE - 114)))) !== 0))) {
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
			case Swift2Parser.Operator_head_other:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2391;
				this.match(Swift2Parser.Operator_head_other);
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
	public dot_operator_head(): Dot_operator_headContext {
		let _localctx: Dot_operator_headContext = new Dot_operator_headContext(this._ctx, this.state);
		this.enterRule(_localctx, 498, Swift2Parser.RULE_dot_operator_head);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2394;
			this.match(Swift2Parser.DOT);
			this.state = 2395;
			this.match(Swift2Parser.DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dot_operator_character(): Dot_operator_characterContext {
		let _localctx: Dot_operator_characterContext = new Dot_operator_characterContext(this._ctx, this.state);
		this.enterRule(_localctx, 500, Swift2Parser.RULE_dot_operator_character);
		try {
			this.state = 2399;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift2Parser.DOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2397;
				this.match(Swift2Parser.DOT);
				}
				break;
			case Swift2Parser.LT:
			case Swift2Parser.GT:
			case Swift2Parser.BANG:
			case Swift2Parser.QUESTION:
			case Swift2Parser.AND:
			case Swift2Parser.SUB:
			case Swift2Parser.EQUAL:
			case Swift2Parser.OR:
			case Swift2Parser.DIV:
			case Swift2Parser.ADD:
			case Swift2Parser.MUL:
			case Swift2Parser.MOD:
			case Swift2Parser.CARET:
			case Swift2Parser.TILDE:
			case Swift2Parser.Operator_head_other:
			case Swift2Parser.Operator_following_character:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2398;
				this.operator_character();
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
		this.enterRule(_localctx, 502, Swift2Parser.RULE_literal);
		try {
			this.state = 2405;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 285, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2401;
				this.numeric_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2402;
				this.string_literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2403;
				this.boolean_literal();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2404;
				this.nil_literal();
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
	public numeric_literal(): Numeric_literalContext {
		let _localctx: Numeric_literalContext = new Numeric_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 504, Swift2Parser.RULE_numeric_literal);
		try {
			this.state = 2415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 288, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2408;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 286, this._ctx) ) {
				case 1:
					{
					this.state = 2407;
					this.negate_prefix_operator();
					}
					break;
				}
				this.state = 2410;
				this.integer_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2412;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 287, this._ctx) ) {
				case 1:
					{
					this.state = 2411;
					this.negate_prefix_operator();
					}
					break;
				}
				this.state = 2414;
				this.match(Swift2Parser.Floating_point_literal);
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
	public boolean_literal(): Boolean_literalContext {
		let _localctx: Boolean_literalContext = new Boolean_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 506, Swift2Parser.RULE_boolean_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2417;
			_la = this._input.LA(1);
			if (!(_la === Swift2Parser.T__98 || _la === Swift2Parser.T__99)) {
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
	public nil_literal(): Nil_literalContext {
		let _localctx: Nil_literalContext = new Nil_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 508, Swift2Parser.RULE_nil_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2419;
			this.match(Swift2Parser.T__100);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer_literal(): Integer_literalContext {
		let _localctx: Integer_literalContext = new Integer_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 510, Swift2Parser.RULE_integer_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2421;
			_la = this._input.LA(1);
			if (!(((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (Swift2Parser.Binary_literal - 133)) | (1 << (Swift2Parser.Octal_literal - 133)) | (1 << (Swift2Parser.Decimal_literal - 133)) | (1 << (Swift2Parser.Pure_decimal_digits - 133)) | (1 << (Swift2Parser.Hexadecimal_literal - 133)))) !== 0))) {
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
	public string_literal(): String_literalContext {
		let _localctx: String_literalContext = new String_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 512, Swift2Parser.RULE_string_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2423;
			_la = this._input.LA(1);
			if (!(_la === Swift2Parser.Static_string_literal || _la === Swift2Parser.Interpolated_string_literal)) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 50:
			return this.build_configuration_sempred(_localctx as Build_configurationContext, predIndex);

		case 164:
			return this.pattern_sempred(_localctx as PatternContext, predIndex);

		case 214:
			return this.postfix_expression_sempred(_localctx as Postfix_expressionContext, predIndex);

		case 218:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 236:
			return this.assignment_operator_sempred(_localctx as Assignment_operatorContext, predIndex);

		case 237:
			return this.negate_prefix_operator_sempred(_localctx as Negate_prefix_operatorContext, predIndex);

		case 238:
			return this.build_AND_sempred(_localctx as Build_ANDContext, predIndex);

		case 239:
			return this.build_OR_sempred(_localctx as Build_ORContext, predIndex);

		case 240:
			return this.arrow_operator_sempred(_localctx as Arrow_operatorContext, predIndex);

		case 241:
			return this.range_operator_sempred(_localctx as Range_operatorContext, predIndex);

		case 242:
			return this.same_type_equals_sempred(_localctx as Same_type_equalsContext, predIndex);

		case 243:
			return this.binary_operator_sempred(_localctx as Binary_operatorContext, predIndex);

		case 244:
			return this.prefix_operator_sempred(_localctx as Prefix_operatorContext, predIndex);

		case 245:
			return this.postfix_operator_sempred(_localctx as Postfix_operatorContext, predIndex);

		case 246:
			return this.operator_sempred(_localctx as OperatorContext, predIndex);
		}
		return true;
	}
	private build_configuration_sempred(_localctx: Build_configurationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private pattern_sempred(_localctx: PatternContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private postfix_expression_sempred(_localctx: Postfix_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 12);

		case 4:
			return this.precpred(this._ctx, 11);

		case 5:
			return this.precpred(this._ctx, 10);

		case 6:
			return this.precpred(this._ctx, 9);

		case 7:
			return this.precpred(this._ctx, 8);

		case 8:
			return this.precpred(this._ctx, 7);

		case 9:
			return this.precpred(this._ctx, 6);

		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 3);

		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 9);

		case 16:
			return this.precpred(this._ctx, 8);

		case 17:
			return this.precpred(this._ctx, 5);

		case 18:
			return this.precpred(this._ctx, 4);

		case 19:
			return this.precpred(this._ctx, 2);

		case 20:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private assignment_operator_sempred(_localctx: Assignment_operatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 21:
			return SwiftSupport.isBinaryOp(_input);
		}
		return true;
	}
	private negate_prefix_operator_sempred(_localctx: Negate_prefix_operatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 22:
			return SwiftSupport.isPrefixOp(_input);
		}
		return true;
	}
	private build_AND_sempred(_localctx: Build_ANDContext, predIndex: number): boolean {
		switch (predIndex) {
		case 23:
			return SwiftSupport.isOperator(_input,"&&");
		}
		return true;
	}
	private build_OR_sempred(_localctx: Build_ORContext, predIndex: number): boolean {
		switch (predIndex) {
		case 24:
			return SwiftSupport.isOperator(_input,"||");
		}
		return true;
	}
	private arrow_operator_sempred(_localctx: Arrow_operatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 25:
			return SwiftSupport.isOperator(_input,"->");
		}
		return true;
	}
	private range_operator_sempred(_localctx: Range_operatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 26:
			return SwiftSupport.isOperator(_input,"...");
		}
		return true;
	}
	private same_type_equals_sempred(_localctx: Same_type_equalsContext, predIndex: number): boolean {
		switch (predIndex) {
		case 27:
			return SwiftSupport.isOperator(_input,"==");
		}
		return true;
	}
	private binary_operator_sempred(_localctx: Binary_operatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 28:
			return SwiftSupport.isBinaryOp(_input);
		}
		return true;
	}
	private prefix_operator_sempred(_localctx: Prefix_operatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 29:
			return SwiftSupport.isPrefixOp(_input);
		}
		return true;
	}
	private postfix_operator_sempred(_localctx: Postfix_operatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 30:
			return SwiftSupport.isPostfixOp(_input);
		}
		return true;
	}
	private operator_sempred(_localctx: OperatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 31:
			return _input.get(_input.index()-1).getType()!=WS;

		case 32:
			return _input.get(_input.index()-1).getType()!=WS;
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x91\u097C\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
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
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7" +
		"\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x04\xCC\t\xCC" +
		"\x04\xCD\t\xCD\x04\xCE\t\xCE\x04\xCF\t\xCF\x04\xD0\t\xD0\x04\xD1\t\xD1" +
		"\x04\xD2\t\xD2\x04\xD3\t\xD3\x04\xD4\t\xD4\x04\xD5\t\xD5\x04\xD6\t\xD6" +
		"\x04\xD7\t\xD7\x04\xD8\t\xD8\x04\xD9\t\xD9\x04\xDA\t\xDA\x04\xDB\t\xDB" +
		"\x04\xDC\t\xDC\x04\xDD\t\xDD\x04\xDE\t\xDE\x04\xDF\t\xDF\x04\xE0\t\xE0" +
		"\x04\xE1\t\xE1\x04\xE2\t\xE2\x04\xE3\t\xE3\x04\xE4\t\xE4\x04\xE5\t\xE5" +
		"\x04\xE6\t\xE6\x04\xE7\t\xE7\x04\xE8\t\xE8\x04\xE9\t\xE9\x04\xEA\t\xEA" +
		"\x04\xEB\t\xEB\x04\xEC\t\xEC\x04\xED\t\xED\x04\xEE\t\xEE\x04\xEF\t\xEF" +
		"\x04\xF0\t\xF0\x04\xF1\t\xF1\x04\xF2\t\xF2\x04\xF3\t\xF3\x04\xF4\t\xF4" +
		"\x04\xF5\t\xF5\x04\xF6\t\xF6\x04\xF7\t\xF7\x04\xF8\t\xF8\x04\xF9\t\xF9" +
		"\x04\xFA\t\xFA\x04\xFB\t\xFB\x04\xFC\t\xFC\x04\xFD\t\xFD\x04\xFE\t\xFE" +
		"\x04\xFF\t\xFF\x04\u0100\t\u0100\x04\u0101\t\u0101\x04\u0102\t\u0102\x03" +
		"\x02\x07\x02\u0206\n\x02\f\x02\x0E\x02\u0209\v\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x05\x03\u020F\n\x03\x03\x03\x03\x03\x05\x03\u0213\n\x03\x03" +
		"\x03\x03\x03\x05\x03\u0217\n\x03\x03\x03\x03\x03\x05\x03\u021B\n\x03\x03" +
		"\x03\x03\x03\x05\x03\u021F\n\x03\x03\x03\x03\x03\x05\x03\u0223\n\x03\x03" +
		"\x03\x03\x03\x05\x03\u0227\n\x03\x03\x03\x03\x03\x05\x03\u022B\n\x03\x03" +
		"\x03\x05\x03\u022E\n\x03\x03\x04\x06\x04\u0231\n\x04\r\x04\x0E\x04\u0232" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0239\n\x05\x03\x06\x03\x06\x05" +
		"\x06\u023D\n\x06\x03\x06\x03\x06\x05\x06\u0241\n\x06\x03\x06\x03\x06\x05" +
		"\x06\u0245\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u024B\n\x06\x03" +
		"\x06\x03\x06\x05\x06\u024F\n\x06\x03\x06\x03\x06\x05\x06\u0253\n\x06\x03" +
		"\x06\x03\x06\x05\x06\u0257\n\x06\x03\x07\x03\x07\x05\x07\u025B\n\x07\x03" +
		"\b\x03\b\x05\b\u025F\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0265\n\b\x03\b" +
		"\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x05\n\u0277\n\n\x03\v\x03\v\x03\v\x07\v\u027C\n\v" +
		"\f\v\x0E\v\u027F\v\v\x03\f\x03\f\x03\f\x05\f\u0284\n\f\x03\r\x03\r\x03" +
		"\r\x03\r\x05\r\u028A\n\r\x03\x0E\x03\x0E\x05\x0E\u028E\n\x0E\x03\x0E\x05" +
		"\x0E\u0291\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\u029B\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u02A1" +
		"\n\x10\f\x10\x0E\x10\u02A4\v\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11" +
		"\u02AA\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
		"\x13\x05\x13\u02B4\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u02BA" +
		"\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u02C0\n\x15\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u02CB" +
		"\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x05\x18\u02D1\n\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u02D9\n\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u02E1\n\x1B\x03\x1B\x03\x1B\x05" +
		"\x1B\u02E5\n\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u02EA\n\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u02FD\n\x1F" +
		"\x03 \x03 \x03 \x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0309\n" +
		"\"\x03#\x03#\x05#\u030D\n#\x03$\x03$\x05$\u0311\n$\x03%\x03%\x03&\x03" +
		"&\x05&\u0317\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x07(\u0321" +
		"\n(\f(\x0E(\u0324\v(\x03)\x03)\x03*\x03*\x03*\x03+\x03+\x03+\x03,\x03" +
		",\x03,\x05,\u0331\n,\x03-\x03-\x05-\u0335\n-\x03.\x03.\x05.\u0339\n.\x03" +
		".\x05.\u033C\n.\x03.\x03.\x03/\x03/\x05/\u0342\n/\x030\x030\x030\x050" +
		"\u0347\n0\x030\x050\u034A\n0\x030\x050\u034D\n0\x030\x030\x031\x031\x05" +
		"1\u0353\n1\x032\x032\x032\x052\u0358\n2\x033\x033\x053\u035C\n3\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x034\x054\u0368\n4\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x074\u0372\n4\f4\x0E4\u0375\v4\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x055\u0381\n5\x036\x036\x037\x03" +
		"7\x038\x038\x038\x038\x038\x058\u038C\n8\x039\x039\x03:\x03:\x03;\x03" +
		";\x03;\x05;\u0395\n;\x03;\x03;\x03<\x03<\x03<\x07<\u039C\n<\f<\x0E<\u039F" +
		"\v<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x05=\u03AA\n=\x03>\x03" +
		">\x03>\x03?\x03?\x03?\x03?\x03?\x05?\u03B4\n?\x03@\x03@\x05@\u03B8\n@" +
		"\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u03C2\nA\x03B\x03B\x03B" +
		"\x03B\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x07D\u03CF\nD\fD\x0ED\u03D2\v" +
		"D\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x03F\x03F\x05F\u03E4\nF\x03G\x06G\u03E7\nG\rG\x0EG\u03E8\x03H\x05H\u03EC" +
		"\nH\x03I\x03I\x05I\u03F0\nI\x03I\x03I\x03J\x05J\u03F5\nJ\x03J\x03J\x05" +
		"J\u03F9\nJ\x03J\x03J\x03K\x03K\x03L\x03L\x03L\x03L\x03L\x05L\u0404\nL" +
		"\x03M\x03M\x05M\u0408\nM\x03N\x05N\u040B\nN\x03N\x05N\u040E\nN\x03N\x03" +
		"N\x03N\x03O\x03O\x03O\x07O\u0416\nO\fO\x0EO\u0419\vO\x03P\x03P\x05P\u041D" +
		"\nP\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03" +
		"R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u0438\n" +
		"R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u0441\nR\x03R\x03R\x05R\u0445" +
		"\nR\x03S\x05S\u0448\nS\x03S\x05S\u044B\nS\x03S\x03S\x03T\x03T\x03U\x03" +
		"U\x03U\x05U\u0454\nU\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x05U\u045D\nU" +
		"\x03V\x05V\u0460\nV\x03V\x03V\x03V\x03W\x05W\u0466\nW\x03W\x03W\x05W\u046A" +
		"\nW\x03W\x03W\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x05Y\u0475\nY\x03Y\x03" +
		"Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u047E\nY\x03Z\x05Z\u0481\nZ\x03Z\x03Z" +
		"\x03[\x05[\u0486\n[\x03[\x03[\x03\\\x03\\\x03\\\x05\\\u048D\n\\\x03\\" +
		"\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x05\\\u0496\n\\\x03]\x05]\u0499\n" +
		"]\x03]\x03]\x05]\u049D\n]\x03]\x03]\x03^\x05^\u04A2\n^\x03^\x03^\x05^" +
		"\u04A6\n^\x03^\x03^\x03_\x03_\x03_\x03`\x05`\u04AE\n`\x03`\x05`\u04B1" +
		"\n`\x03`\x03`\x03`\x03a\x03a\x03b\x03b\x03b\x03c\x03c\x03c\x05c\u04BE" +
		"\nc\x03c\x03c\x05c\u04C2\nc\x03d\x05d\u04C5\nd\x03d\x05d\u04C8\nd\x03" +
		"d\x03d\x03e\x03e\x05e\u04CE\ne\x03f\x03f\x05f\u04D2\nf\x03f\x05f\u04D5" +
		"\nf\x03f\x03f\x03f\x05f\u04DA\nf\x05f\u04DC\nf\x03g\x03g\x05g\u04E0\n" +
		"g\x03g\x03g\x03h\x03h\x03i\x03i\x05i\u04E8\ni\x03j\x03j\x03j\x03j\x03" +
		"j\x03j\x05j\u04F0\nj\x03k\x03k\x03k\x07k\u04F5\nk\fk\x0Ek\u04F8\vk\x03" +
		"l\x05l\u04FB\nl\x03l\x05l\u04FE\nl\x03l\x03l\x05l\u0502\nl\x03l\x05l\u0505" +
		"\nl\x03l\x03l\x05l\u0509\nl\x03l\x03l\x05l\u050D\nl\x03l\x05l\u0510\n" +
		"l\x03l\x03l\x05l\u0514\nl\x03l\x03l\x03l\x03l\x05l\u051A\nl\x03l\x03l" +
		"\x03l\x03l\x05l\u0520\nl\x03m\x03m\x05m\u0524\nm\x03n\x03n\x05n\u0528" +
		"\nn\x03o\x03o\x03o\x03p\x05p\u052E\np\x03p\x05p\u0531\np\x03p\x03p\x05" +
		"p\u0535\np\x03p\x05p\u0538\np\x03p\x05p\u053B\np\x03q\x05q\u053E\nq\x03" +
		"q\x03q\x03q\x05q\u0543\nq\x03q\x05q\u0546\nq\x03q\x03q\x05q\u054A\nq\x03" +
		"q\x03q\x03r\x03r\x05r\u0550\nr\x03s\x03s\x05s\u0554\ns\x03t\x05t\u0557" +
		"\nt\x03t\x05t\u055A\nt\x03t\x03t\x03t\x03u\x03u\x03u\x03u\x03u\x05u\u0564" +
		"\nu\x03v\x03v\x05v\u0568\nv\x03w\x03w\x03x\x03x\x03y\x03y\x03y\x05y\u0571" +
		"\ny\x03y\x03y\x03y\x03y\x03y\x03z\x03z\x05z\u057A\nz\x03{\x03{\x05{\u057E" +
		"\n{\x03|\x05|\u0581\n|\x03|\x03|\x03|\x03}\x03}\x03}\x03}\x03}\x05}\u058B" +
		"\n}\x03~\x03~\x05~\u058F\n~\x03\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80\x03" +
		"\x80\x05\x80\u0597\n\x80\x03\x81\x05\x81\u059A\n\x81\x03\x81\x05\x81\u059D" +
		"\n\x81\x03\x81\x03\x81\x03\x81\x05\x81\u05A2\n\x81\x03\x81\x05\x81\u05A5" +
		"\n\x81\x03\x81\x03\x81\x03\x82\x03\x82\x03\x83\x03\x83\x05\x83\u05AD\n" +
		"\x83\x03\x83\x03\x83\x03\x84\x05\x84\u05B2\n\x84\x03\x84\x05\x84\u05B5" +
		"\n\x84\x03\x84\x03\x84\x03\x84\x05\x84\u05BA\n\x84\x03\x84\x05\x84\u05BD" +
		"\n\x84\x03\x84\x03\x84\x03\x85\x03\x85\x03\x86\x03\x86\x05\x86\u05C5\n" +
		"\x86\x03\x86\x03\x86\x03\x87\x05\x87\u05CA\n\x87\x03\x87\x05\x87\u05CD" +
		"\n\x87\x03\x87\x03\x87\x03\x87\x05\x87\u05D2\n\x87\x03\x87\x03\x87\x03" +
		"\x88\x03\x88\x03\x89\x03\x89\x05\x89\u05DA\n\x89\x03\x89\x03\x89\x03\x8A" +
		"\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u05E3\n\x8A\x03\x8B\x03\x8B\x05" +
		"\x8B\u05E7\n\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8D\x03\x8D" +
		"\x03\x8D\x05\x8D\u05F1\n\x8D\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x05\x8E\u05F7" +
		"\n\x8E\x03\x8E\x03\x8E\x05\x8E\u05FB\n\x8E\x03\x8E\x03\x8E\x05\x8E\u05FF" +
		"\n\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u0604\n\x8E\x03\x8F\x03\x8F\x03" +
		"\x8F\x03\x8F\x03\x90\x05\x90\u060B\n\x90\x03\x90\x05\x90\u060E\n\x90\x03" +
		"\x90\x03\x90\x03\x90\x05\x90\u0613\n\x90\x03\x90\x05\x90\u0616\n\x90\x03" +
		"\x91\x03\x91\x05\x91\u061A\n\x91\x03\x91\x03\x91\x05\x91\u061E\n\x91\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x05\x91\u0624\n\x91\x03\x91\x03\x91\x03\x91" +
		"\x03\x91\x05\x91\u062A\n\x91\x03\x92\x05\x92\u062D\n\x92\x03\x92\x05\x92" +
		"\u0630\n\x92\x03\x92\x03\x92\x05\x92\u0634\n\x92\x03\x92\x05\x92\u0637" +
		"\n\x92\x03\x92\x03\x92\x03\x92\x05\x92\u063C\n\x92\x03\x92\x05\x92\u063F" +
		"\n\x92\x03\x92\x03\x92\x05\x92\u0643\n\x92\x03\x93\x03\x93\x03\x94\x05" +
		"\x94\u0648\n\x94\x03\x94\x03\x94\x03\x94\x03\x95\x05\x95\u064E\n\x95\x03" +
		"\x95\x03\x95\x03\x95\x05\x95\u0653\n\x95\x03\x95\x03\x95\x03\x96\x03\x96" +
		"\x05\x96\u0659\n\x96\x03\x96\x03\x96\x03\x97\x03\x97\x03\x97\x03\x97\x03" +
		"\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x05\x97\u0669" +
		"\n\x97\x03\x98\x05\x98\u066C\n\x98\x03\x98\x05\x98\u066F\n\x98\x03\x98" +
		"\x03\x98\x03\x98\x03\x99\x03\x99\x05\x99\u0676\n\x99\x03\x99\x03\x99\x03" +
		"\x9A\x03\x9A\x03\x9A\x05\x9A\u067D\n\x9A\x03\x9B\x03\x9B\x03\x9B\x03\x9B" +
		"\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9D" +
		"\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9E\x05\x9E\u0693" +
		"\n\x9E\x03\x9E\x05\x9E\u0696\n\x9E\x03\x9F\x03\x9F\x03\x9F\x03\xA0\x03" +
		"\xA0\x03\xA1\x03\xA1\x03\xA1\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA3\x03" +
		"\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03" +
		"\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03" +
		"\xA3\x03\xA3\x03\xA3\x03\xA3\x05\xA3\u06BB\n\xA3\x03\xA4\x03\xA4\x05\xA4" +
		"\u06BF\n\xA4\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03" +
		"\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x05\xA5\u06D0" +
		"\n\xA5\x03\xA6\x03\xA6\x03\xA6\x05\xA6\u06D5\n\xA6\x03\xA6\x03\xA6\x05" +
		"\xA6\u06D9\n\xA6\x03\xA6\x03\xA6\x03\xA6\x05\xA6\u06DE\n\xA6\x03\xA6\x03" +
		"\xA6\x03\xA6\x03\xA6\x03\xA6\x05\xA6\u06E5\n\xA6\x03\xA6\x03\xA6\x03\xA6" +
		"\x07\xA6\u06EA\n\xA6\f\xA6\x0E\xA6\u06ED\v\xA6\x03\xA7\x03\xA7\x03\xA8" +
		"\x03\xA8\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x05\xA9\u06F7\n\xA9\x03\xAA\x03" +
		"\xAA\x05\xAA\u06FB\n\xAA\x03\xAA\x03\xAA\x03\xAB\x03\xAB\x03\xAB\x07\xAB" +
		"\u0702\n\xAB\f\xAB\x0E\xAB\u0705\v\xAB\x03\xAC\x03\xAC\x03\xAD\x05\xAD" +
		"\u070A\n\xAD\x03\xAD\x03\xAD\x03\xAD\x05\xAD\u070F\n\xAD\x03\xAE\x03\xAE" +
		"\x03\xAE\x03\xAF\x03\xAF\x03\xB0\x05\xB0\u0717\n\xB0\x03\xB0\x03\xB0\x05" +
		"\xB0\u071B\n\xB0\x03\xB1\x03\xB1\x03\xB2\x03\xB2\x05\xB2\u0721\n\xB2\x03" +
		"\xB2\x03\xB2\x03\xB3\x06\xB3\u0726\n\xB3\r\xB3\x0E\xB3\u0727\x03\xB4\x06" +
		"\xB4\u072B\n\xB4\r\xB4\x0E\xB4\u072C\x03\xB5\x03\xB5\x05\xB5\u0731\n\xB5" +
		"\x03\xB5\x03\xB5\x03\xB5\x05\xB5\u0736\n\xB5\x03\xB5\x03\xB5\x03\xB5\x05" +
		"\xB5\u073B\n\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x05\xB5" +
		"\u0743\n\xB5\x03\xB6\x05\xB6\u0746\n\xB6\x03\xB6\x03\xB6\x05\xB6\u074A" +
		"\n\xB6\x03\xB7\x03\xB7\x03\xB7\x07\xB7\u074F\n\xB7\f\xB7\x0E\xB7\u0752" +
		"\v\xB7\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x05\xB8\u0759\n\xB8\x03" +
		"\xB9\x03\xB9\x03\xB9\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x05\xBA\u0763" +
		"\n\xBA\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x05\xBB\u076A\n\xBB\x03" +
		"\xBB\x03\xBB\x03\xBB\x05\xBB\u076F\n\xBB\x03\xBC\x06\xBC\u0772\n\xBC\r" +
		"\xBC\x0E\xBC\u0773\x03\xBD\x03\xBD\x05\xBD\u0778\n\xBD\x03\xBD\x03\xBD" +
		"\x03\xBD\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE" +
		"\x03\xBE\x03\xBE\x05\xBE\u0787\n\xBE\x03\xBF\x03\xBF\x05\xBF\u078B\n\xBF" +
		"\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x05\xBF" +
		"\u0795\n\xBF\x03\xC0\x03\xC0\x03\xC0\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03" +
		"\xC1\x03\xC1\x03\xC1\x05\xC1\u07A1\n\xC1\x03\xC2\x03\xC2\x05\xC2\u07A5" +
		"\n\xC2\x03\xC2\x03\xC2\x03\xC3\x03\xC3\x03\xC3\x07\xC3\u07AC\n\xC3\f\xC3" +
		"\x0E\xC3\u07AF\v\xC3\x03\xC3\x05\xC3\u07B2\n\xC3\x03\xC4\x03\xC4\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u07BD\n\xC5\x03" +
		"\xC6\x03\xC6\x03\xC6\x07\xC6\u07C2\n\xC6\f\xC6\x0E\xC6\u07C5\v\xC6\x03" +
		"\xC6\x05\xC6\u07C8\n\xC6\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC8\x03\xC8" +
		"\x03\xC8\x03\xC8\x03\xC8\x03\xC8\x03\xC8\x03\xC8\x03\xC8\x03\xC8\x03\xC8" +
		"\x03\xC8\x05\xC8\u07DA\n\xC8\x03\xC9\x03\xC9\x03\xC9\x05\xC9\u07DF\n\xC9" +
		"\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB" +
		"\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCD\x03\xCD\x05\xCD\u07F0\n\xCD\x03" +
		"\xCD\x05\xCD\u07F3\n\xCD\x03\xCD\x03\xCD\x03\xCE\x03\xCE\x05\xCE\u07F9" +
		"\n\xCE\x03\xCE\x03\xCE\x03\xCE\x03\xCE\x05\xCE\u07FF\n\xCE\x03\xCE\x03" +
		"\xCE\x03\xCE\x03\xCE\x03\xCE\x05\xCE\u0806\n\xCE\x03\xCE\x03\xCE\x03\xCE" +
		"\x03\xCE\x03\xCE\x05\xCE\u080D\n\xCE\x03\xCE\x03\xCE\x03\xCE\x03\xCE\x03" +
		"\xCE\x05\xCE\u0814\n\xCE\x03\xCF\x03\xCF\x03\xCF\x03\xCF\x03\xD0\x03\xD0" +
		"\x03\xD0\x07\xD0\u081D\n\xD0\f\xD0\x0E\xD0\u0820\v\xD0\x03\xD1\x05\xD1" +
		"\u0823\n\xD1\x03\xD1\x03\xD1\x03\xD2\x03\xD2\x03\xD3\x03\xD3\x05\xD3\u082B" +
		"\n\xD3\x03\xD3\x03\xD3\x03\xD4\x03\xD4\x03\xD4\x07\xD4\u0832\n\xD4\f\xD4" +
		"\x0E\xD4\u0835\v\xD4\x03\xD5\x03\xD5\x03\xD5\x03\xD5\x03\xD5\x05\xD5\u083C" +
		"\n\xD5\x03\xD6\x03\xD6\x03\xD7\x03\xD7\x03\xD7\x03\xD7\x03\xD7\x03\xD8" +
		"\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x05\xD8" +
		"\u084E\n\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03" +
		"\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03" +
		"\xD8\x03\xD8\x05\xD8\u0862\n\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8" +
		"\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8" +
		"\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8" +
		"\x07\xD8\u087B\n\xD8\f\xD8\x0E\xD8\u087E\v\xD8\x03\xD9\x03\xD9\x05\xD9" +
		"\u0882\n\xD9\x03\xDA\x03\xDA\x03\xDA\x03\xDB\x03\xDB\x03\xDC\x03\xDC\x03" +
		"\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03" +
		"\xDC\x03\xDC\x03\xDC\x05\xDC\u0897\n\xDC\x03\xDC\x03\xDC\x05\xDC\u089B" +
		"\n\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC" +
		"\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC" +
		"\x03\xDC\x07\xDC\u08AF\n\xDC\f\xDC\x0E\xDC\u08B2\v\xDC\x03\xDD\x03\xDD" +
		"\x05\xDD\u08B6\n\xDD\x03\xDD\x03\xDD\x03\xDE\x03\xDE\x05\xDE\u08BC\n\xDE" +
		"\x03\xDE\x03\xDE\x05\xDE\u08C0\n\xDE\x03\xDE\x03\xDE\x03\xDE\x05\xDE\u08C5" +
		"\n\xDE\x03\xDF\x03\xDF\x03\xE0\x03\xE0\x05\xE0\u08CB\n\xE0\x03\xE0\x03" +
		"\xE0\x03\xE1\x03\xE1\x05\xE1\u08D1\n\xE1\x03\xE2\x03\xE2\x03\xE2\x03\xE2" +
		"\x03\xE2\x05\xE2\u08D8\n\xE2\x03\xE3\x05\xE3\u08DB\n\xE3\x03\xE3\x05\xE3" +
		"\u08DE\n\xE3\x03\xE3\x03\xE3\x05\xE3\u08E2\n\xE3\x03\xE3\x03\xE3\x03\xE3" +
		"\x05\xE3\u08E7\n\xE3\x03\xE4\x03\xE4\x03\xE5\x03\xE5\x03\xE5\x05\xE5\u08EE" +
		"\n\xE5\x03\xE5\x03\xE5\x03\xE6\x03\xE6\x03\xE6\x06\xE6\u08F5\n\xE6\r\xE6" +
		"\x0E\xE6\u08F6\x05\xE6\u08F9\n\xE6\x03\xE7\x03\xE7\x03\xE8\x03\xE8\x03" +
		"\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x05\xE8\u0906\n\xE8" +
		"\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x05\xE9\u090D\n\xE9\x03\xEA\x03" +
		"\xEA\x03\xEB\x03\xEB\x05\xEB\u0913\n\xEB\x03\xEC\x03\xEC\x03\xEC\x07\xEC" +
		"\u0918\n\xEC\f\xEC\x0E\xEC\u091B\v\xEC\x03\xED\x03\xED\x03\xEE\x03\xEE" +
		"\x03\xEE\x03\xEF\x03\xEF\x03\xEF\x03\xF0\x03\xF0\x03\xF0\x03\xF0\x03\xF1" +
		"\x03";
	private static readonly _serializedATNSegment1: string =
		"\xF1\x03\xF1\x03\xF1\x03\xF2\x03\xF2\x03\xF2\x03\xF2\x03\xF3\x03\xF3\x03" +
		"\xF3\x03\xF3\x03\xF3\x03\xF4\x03\xF4\x03\xF4\x03\xF4\x03\xF5\x03\xF5\x03" +
		"\xF5\x03\xF6\x03\xF6\x03\xF6\x03\xF7\x03\xF7\x03\xF7\x03\xF8\x03\xF8\x03" +
		"\xF8\x07\xF8\u0946\n\xF8\f\xF8\x0E\xF8\u0949\v\xF8\x03\xF8\x03\xF8\x03" +
		"\xF8\x07\xF8\u094E\n\xF8\f\xF8\x0E\xF8\u0951\v\xF8\x05\xF8\u0953\n\xF8" +
		"\x03\xF9\x03\xF9\x05\xF9\u0957\n\xF9\x03\xFA\x03\xFA\x05\xFA\u095B\n\xFA" +
		"\x03\xFB\x03\xFB\x03\xFB\x03\xFC\x03\xFC\x05\xFC\u0962\n\xFC\x03\xFD\x03" +
		"\xFD\x03\xFD\x03\xFD\x05\xFD\u0968\n\xFD\x03\xFE\x05\xFE\u096B\n\xFE\x03" +
		"\xFE\x03\xFE\x05\xFE\u096F\n\xFE\x03\xFE\x05\xFE\u0972\n\xFE\x03\xFF\x03" +
		"\xFF\x03\u0100\x03\u0100\x03\u0101\x03\u0101\x03\u0102\x03\u0102\x03\u0102" +
		"\x02\x02\x06f\u014A\u01AE\u01B6\u0103\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
		"\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
		"\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02" +
		"\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02" +
		"\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02" +
		"\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02" +
		"\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102" +
		"\x02\u0104\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110" +
		"\x02\u0112\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E" +
		"\x02\u0120\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C" +
		"\x02\u012E\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A" +
		"\x02\u013C\x02\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148" +
		"\x02\u014A\x02\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156" +
		"\x02\u0158\x02\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164" +
		"\x02\u0166\x02\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172" +
		"\x02\u0174\x02\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\u0180" +
		"\x02\u0182\x02\u0184\x02\u0186\x02\u0188\x02\u018A\x02\u018C\x02\u018E" +
		"\x02\u0190\x02\u0192\x02\u0194\x02\u0196\x02\u0198\x02\u019A\x02\u019C" +
		"\x02\u019E\x02\u01A0\x02\u01A2\x02\u01A4\x02\u01A6\x02\u01A8\x02\u01AA" +
		"\x02\u01AC\x02\u01AE\x02\u01B0\x02\u01B2\x02\u01B4\x02\u01B6\x02\u01B8" +
		"\x02\u01BA\x02\u01BC\x02\u01BE\x02\u01C0\x02\u01C2\x02\u01C4\x02\u01C6" +
		"\x02\u01C8\x02\u01CA\x02\u01CC\x02\u01CE\x02\u01D0\x02\u01D2\x02\u01D4" +
		"\x02\u01D6\x02\u01D8\x02\u01DA\x02\u01DC\x02\u01DE\x02\u01E0\x02\u01E2" +
		"\x02\u01E4\x02\u01E6\x02\u01E8\x02\u01EA\x02\u01EC\x02\u01EE\x02\u01F0" +
		"\x02\u01F2\x02\u01F4\x02\u01F6\x02\u01F8\x02\u01FA\x02\u01FC\x02\u01FE" +
		"\x02\u0200\x02\u0202\x02\x02\r\x04\x02hh\x80\x80\x03\x02\x1F\"\x03\x02" +
		"#&\x04\x02\b\b).\x03\x02BD\x05\x02OORR_`\b\x02/266<MOORRcd\x05\x02tuw" +
		"xz\x83\x03\x02ef\x03\x02\x87\x8B\x03\x02\x8D\x8E\x02\u0A15\x02\u0207\x03" +
		"\x02\x02\x02\x04\u022D\x03\x02\x02\x02\x06\u0230\x03\x02\x02\x02\b\u0238" +
		"\x03\x02\x02\x02\n\u0256\x03\x02\x02\x02\f\u025A\x03\x02\x02\x02\x0E\u025C" +
		"\x03\x02\x02\x02\x10\u0268\x03\x02\x02\x02\x12\u0276\x03\x02\x02\x02\x14" +
		"\u0278\x03\x02\x02\x02\x16\u0283\x03\x02\x02\x02\x18\u0285\x03\x02\x02" +
		"\x02\x1A\u028B\x03\x02\x02\x02\x1C\u029A\x03\x02\x02\x02\x1E\u029C\x03" +
		"\x02\x02\x02 \u02A9\x03\x02\x02\x02\"\u02AB\x03\x02\x02\x02$\u02B3\x03" +
		"\x02\x02\x02&\u02B5\x03\x02\x02\x02(\u02BF\x03\x02\x02\x02*\u02C1\x03" +
		"\x02\x02\x02,\u02C6\x03\x02\x02\x02.\u02CE\x03\x02\x02\x020\u02D8\x03" +
		"\x02\x02\x022\u02DA\x03\x02\x02\x024\u02E9\x03\x02\x02\x026\u02EB\x03" +
		"\x02\x02\x028\u02EE\x03\x02\x02\x02:\u02F1\x03\x02\x02\x02<\u02FC\x03" +
		"\x02\x02\x02>\u02FE\x03\x02\x02\x02@\u0301\x03\x02\x02\x02B\u0308\x03" +
		"\x02\x02\x02D\u030A\x03\x02\x02\x02F\u030E\x03\x02\x02\x02H\u0312\x03" +
		"\x02\x02\x02J\u0314\x03\x02\x02\x02L\u0318\x03\x02\x02\x02N\u031D\x03" +
		"\x02\x02\x02P\u0325\x03\x02\x02\x02R\u0327\x03\x02\x02\x02T\u032A\x03" +
		"\x02\x02\x02V\u032D\x03\x02\x02\x02X\u0332\x03\x02\x02\x02Z\u0336\x03" +
		"\x02\x02\x02\\\u0341\x03\x02\x02\x02^\u0343\x03\x02\x02\x02`\u0350\x03" +
		"\x02\x02\x02b\u0354\x03\x02\x02\x02d\u0359\x03\x02\x02\x02f\u0367\x03" +
		"\x02\x02\x02h\u0380\x03\x02\x02\x02j\u0382\x03\x02\x02\x02l\u0384\x03" +
		"\x02\x02\x02n\u038B\x03\x02\x02\x02p\u038D\x03\x02\x02\x02r\u038F\x03" +
		"\x02\x02\x02t\u0391\x03\x02\x02\x02v\u0398\x03\x02\x02\x02x\u03A9\x03" +
		"\x02\x02\x02z\u03AB\x03\x02\x02\x02|\u03B3\x03\x02\x02\x02~\u03B7\x03" +
		"\x02\x02\x02\x80\u03C1\x03\x02\x02\x02\x82\u03C3\x03\x02\x02\x02\x84\u03C7" +
		"\x03\x02\x02\x02\x86\u03CB\x03\x02\x02\x02\x88\u03D3\x03\x02\x02\x02\x8A" +
		"\u03E3\x03\x02\x02\x02\x8C\u03E6\x03\x02\x02\x02\x8E\u03EB\x03\x02\x02" +
		"\x02\x90\u03ED\x03\x02\x02\x02\x92\u03F4\x03\x02\x02\x02\x94\u03FC\x03" +
		"\x02\x02\x02\x96\u0403\x03\x02\x02\x02\x98\u0407\x03\x02\x02\x02\x9A\u040A" +
		"\x03\x02\x02\x02\x9C\u0412\x03\x02\x02\x02\x9E\u041A\x03\x02\x02\x02\xA0" +
		"\u041E\x03\x02\x02\x02\xA2\u0444\x03\x02\x02\x02\xA4\u0447\x03\x02\x02" +
		"\x02\xA6\u044E\x03\x02\x02\x02\xA8\u045C\x03\x02\x02\x02\xAA\u045F\x03" +
		"\x02\x02\x02\xAC\u0465\x03\x02\x02\x02\xAE\u046D\x03\x02\x02\x02\xB0\u047D" +
		"\x03\x02\x02\x02\xB2\u0480\x03\x02\x02\x02\xB4\u0485\x03\x02\x02\x02\xB6" +
		"\u0495\x03\x02\x02\x02\xB8\u0498\x03\x02\x02\x02\xBA\u04A1\x03\x02\x02" +
		"\x02\xBC\u04A9\x03\x02\x02\x02\xBE\u04AD\x03\x02\x02\x02\xC0\u04B5\x03" +
		"\x02\x02\x02\xC2\u04B7\x03\x02\x02\x02\xC4\u04BA\x03\x02\x02\x02\xC6\u04C4" +
		"\x03\x02\x02\x02\xC8\u04CD\x03\x02\x02\x02\xCA\u04DB\x03\x02\x02\x02\xCC" +
		"\u04DD\x03\x02\x02\x02\xCE\u04E3\x03\x02\x02\x02\xD0\u04E5\x03\x02\x02" +
		"\x02\xD2\u04EF\x03\x02\x02\x02\xD4\u04F1\x03\x02\x02\x02\xD6\u051F\x03" +
		"\x02\x02\x02\xD8\u0523\x03\x02\x02\x02\xDA\u0527\x03\x02\x02\x02\xDC\u0529" +
		"\x03\x02\x02\x02\xDE\u053A\x03\x02\x02\x02\xE0\u053D\x03\x02\x02\x02\xE2" +
		"\u054D\x03\x02\x02\x02\xE4\u0553\x03\x02\x02\x02\xE6\u0556\x03\x02\x02" +
		"\x02\xE8\u0563\x03\x02\x02\x02\xEA\u0565\x03\x02\x02\x02\xEC\u0569\x03" +
		"\x02\x02\x02\xEE\u056B\x03\x02\x02\x02\xF0\u056D\x03\x02\x02\x02\xF2\u0577" +
		"\x03\x02\x02\x02\xF4\u057D\x03\x02\x02\x02\xF6\u0580\x03\x02\x02\x02\xF8" +
		"\u058A\x03\x02\x02\x02\xFA\u058C\x03\x02\x02\x02\xFC\u0590\x03\x02\x02" +
		"\x02\xFE\u0596\x03\x02\x02\x02\u0100\u0599\x03\x02\x02\x02\u0102\u05A8" +
		"\x03\x02\x02\x02\u0104\u05AA\x03\x02\x02\x02\u0106\u05B1\x03\x02\x02\x02" +
		"\u0108\u05C0\x03\x02\x02\x02\u010A\u05C2\x03\x02\x02\x02\u010C\u05C9\x03" +
		"\x02\x02\x02\u010E\u05D5\x03\x02\x02\x02\u0110\u05D7\x03\x02\x02\x02\u0112" +
		"\u05E2\x03\x02\x02\x02\u0114\u05E4\x03\x02\x02\x02\u0116\u05E8\x03\x02" +
		"\x02\x02\u0118\u05ED\x03\x02\x02\x02\u011A\u0603\x03\x02\x02\x02\u011C" +
		"\u0605\x03\x02\x02\x02\u011E\u060A\x03\x02\x02\x02\u0120\u0629\x03\x02" +
		"\x02\x02\u0122\u0642\x03\x02\x02\x02\u0124\u0644\x03\x02\x02\x02\u0126" +
		"\u0647\x03\x02\x02\x02\u0128\u064D\x03\x02\x02\x02\u012A\u0656\x03\x02" +
		"\x02\x02\u012C\u0668\x03\x02\x02\x02\u012E\u066B\x03\x02\x02\x02\u0130" +
		"\u0673\x03\x02\x02\x02\u0132\u067C\x03\x02\x02\x02\u0134\u067E\x03\x02" +
		"\x02\x02\u0136\u0684\x03\x02\x02\x02\u0138\u068A\x03\x02\x02\x02\u013A" +
		"\u0692\x03\x02\x02\x02\u013C\u0697\x03\x02\x02\x02\u013E\u069A\x03\x02" +
		"\x02\x02\u0140\u069C\x03\x02\x02\x02\u0142\u069F\x03\x02\x02\x02\u0144" +
		"\u06BA\x03\x02\x02\x02\u0146\u06BC\x03\x02\x02\x02\u0148\u06CF\x03\x02" +
		"\x02\x02\u014A\u06E4\x03\x02\x02\x02\u014C\u06EE\x03\x02\x02\x02\u014E" +
		"\u06F0\x03\x02\x02\x02\u0150\u06F6\x03\x02\x02\x02\u0152\u06F8\x03\x02" +
		"\x02\x02\u0154\u06FE\x03\x02\x02\x02\u0156\u0706\x03\x02\x02\x02\u0158" +
		"\u0709\x03\x02\x02\x02\u015A\u0710\x03\x02\x02\x02\u015C\u0713\x03\x02" +
		"\x02\x02\u015E\u0716\x03\x02\x02\x02\u0160\u071C\x03\x02\x02\x02\u0162" +
		"\u071E\x03\x02\x02\x02\u0164\u0725\x03\x02\x02\x02\u0166\u072A\x03\x02" +
		"\x02\x02\u0168\u0742\x03\x02\x02\x02\u016A\u0745\x03\x02\x02\x02\u016C" +
		"\u074B\x03\x02\x02\x02\u016E\u0758\x03\x02\x02\x02\u0170\u075A\x03\x02" +
		"\x02\x02\u0172\u0762\x03\x02\x02\x02\u0174\u076E\x03\x02\x02\x02\u0176" +
		"\u0771\x03\x02\x02\x02\u0178\u0775\x03\x02\x02\x02\u017A\u0786\x03\x02" +
		"\x02\x02\u017C\u0794\x03\x02\x02\x02\u017E\u0796\x03\x02\x02\x02\u0180" +
		"\u07A0\x03\x02\x02\x02\u0182\u07A2\x03\x02\x02\x02\u0184\u07A8\x03\x02" +
		"\x02\x02\u0186\u07B3\x03\x02\x02\x02\u0188\u07BC\x03\x02\x02\x02\u018A" +
		"\u07BE\x03\x02\x02\x02\u018C\u07C9\x03\x02\x02\x02\u018E\u07D9\x03\x02" +
		"\x02\x02\u0190\u07DE\x03\x02\x02\x02\u0192\u07E0\x03\x02\x02\x02\u0194" +
		"\u07E4\x03\x02\x02\x02\u0196\u07E9\x03\x02\x02\x02\u0198\u07ED\x03\x02" +
		"\x02\x02\u019A\u0813\x03\x02\x02\x02\u019C\u0815\x03\x02\x02\x02\u019E" +
		"\u0819\x03\x02\x02\x02\u01A0\u0822\x03\x02\x02\x02\u01A2\u0826\x03\x02" +
		"\x02\x02\u01A4\u0828\x03\x02\x02\x02\u01A6\u082E\x03\x02\x02\x02\u01A8" +
		"\u083B\x03\x02\x02\x02\u01AA\u083D\x03\x02\x02\x02\u01AC\u083F\x03\x02" +
		"\x02\x02\u01AE\u0844\x03\x02\x02\x02\u01B0\u087F\x03\x02\x02\x02\u01B2" +
		"\u0883\x03\x02\x02\x02\u01B4\u0886\x03\x02\x02\x02\u01B6\u0896\x03\x02" +
		"\x02\x02\u01B8\u08B3\x03\x02\x02\x02\u01BA\u08C4\x03\x02\x02\x02\u01BC" +
		"\u08C6\x03\x02\x02\x02\u01BE\u08C8\x03\x02\x02\x02\u01C0\u08CE\x03\x02" +
		"\x02\x02\u01C2\u08D7\x03\x02\x02\x02\u01C4\u08E6\x03\x02\x02\x02\u01C6" +
		"\u08E8\x03\x02\x02\x02\u01C8\u08EA\x03\x02\x02\x02\u01CA\u08F8\x03\x02" +
		"\x02\x02\u01CC\u08FA\x03\x02\x02\x02\u01CE\u0905\x03\x02\x02\x02\u01D0" +
		"\u090C\x03\x02\x02\x02\u01D2\u090E\x03\x02\x02\x02\u01D4\u0912\x03\x02" +
		"\x02\x02\u01D6\u0914\x03\x02\x02\x02\u01D8\u091C\x03\x02\x02\x02\u01DA" +
		"\u091E\x03\x02\x02\x02\u01DC\u0921\x03\x02\x02\x02\u01DE\u0924\x03\x02" +
		"\x02\x02\u01E0\u0928\x03\x02\x02\x02\u01E2\u092C\x03\x02\x02\x02\u01E4" +
		"\u0930\x03\x02\x02\x02\u01E6\u0935\x03\x02\x02\x02\u01E8\u0939\x03\x02" +
		"\x02\x02\u01EA\u093C\x03\x02\x02\x02\u01EC\u093F\x03\x02\x02\x02\u01EE" +
		"\u0952\x03\x02\x02\x02\u01F0\u0956\x03\x02\x02\x02\u01F2\u095A\x03\x02" +
		"\x02\x02\u01F4\u095C\x03\x02\x02\x02\u01F6\u0961\x03\x02\x02\x02\u01F8" +
		"\u0967\x03\x02\x02\x02\u01FA\u0971\x03\x02\x02\x02\u01FC\u0973\x03\x02" +
		"\x02\x02\u01FE\u0975\x03\x02\x02\x02\u0200\u0977\x03\x02\x02\x02\u0202" +
		"\u0979\x03\x02\x02\x02\u0204\u0206\x05\x04\x03\x02\u0205\u0204\x03\x02" +
		"\x02\x02\u0206\u0209\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0207" +
		"\u0208\x03\x02\x02\x02\u0208\u020A\x03\x02\x02\x02\u0209\u0207\x03\x02" +
		"\x02\x02\u020A\u020B\x07\x02\x02\x03\u020B\x03\x03\x02\x02\x02\u020C\u020E" +
		"\x05\u016A\xB6\x02\u020D\u020F\x07s\x02\x02\u020E\u020D\x03\x02\x02\x02" +
		"\u020E\u020F\x03\x02\x02\x02\u020F\u022E\x03\x02\x02\x02\u0210\u0212\x05" +
		"\x8AF\x02\u0211\u0213\x07s\x02\x02\u0212\u0211\x03\x02\x02\x02\u0212\u0213" +
		"\x03\x02\x02\x02\u0213\u022E\x03\x02\x02\x02\u0214\u0216\x05\b\x05\x02" +
		"\u0215\u0217\x07s\x02\x02\u0216\u0215\x03\x02\x02\x02\u0216\u0217\x03" +
		"\x02\x02\x02\u0217\u022E\x03\x02\x02\x02\u0218\u021A\x05$\x13\x02\u0219" +
		"\u021B\x07s\x02\x02\u021A\u0219\x03\x02\x02\x02\u021A\u021B\x03\x02\x02" +
		"\x02\u021B\u022E\x03\x02\x02\x02\u021C\u021E\x05<\x1F\x02\u021D\u021F" +
		"\x07s\x02\x02\u021E\u021D\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02" +
		"\u021F\u022E\x03\x02\x02\x02\u0220\u0222\x05B\"\x02\u0221\u0223\x07s\x02" +
		"\x02\u0222\u0221\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u022E" +
		"\x03\x02\x02\x02\u0224\u0226\x05T+\x02\u0225\u0227\x07s\x02\x02\u0226" +
		"\u0225\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u022E\x03\x02" +
		"\x02\x02\u0228\u022A\x05V,\x02\u0229\u022B\x07s\x02\x02\u022A\u0229\x03" +
		"\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022E\x03\x02\x02\x02\u022C" +
		"\u022E\x05\\/\x02\u022D\u020C\x03\x02\x02\x02\u022D\u0210\x03\x02\x02" +
		"\x02\u022D\u0214\x03\x02\x02\x02\u022D\u0218\x03\x02\x02\x02\u022D\u021C" +
		"\x03\x02\x02\x02\u022D\u0220\x03\x02\x02\x02\u022D\u0224\x03\x02\x02\x02" +
		"\u022D\u0228\x03\x02\x02\x02\u022D\u022C\x03\x02\x02\x02\u022E\x05\x03" +
		"\x02\x02\x02\u022F\u0231\x05\x04\x03\x02\u0230\u022F\x03\x02\x02\x02\u0231" +
		"\u0232\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02" +
		"\x02\x02\u0233\x07\x03\x02\x02\x02\u0234\u0239\x05\n\x06\x02\u0235\u0239" +
		"\x05\x0E\b\x02\u0236\u0239\x05\x10\t\x02\u0237\u0239\x05\"\x12\x02\u0238" +
		"\u0234\x03\x02\x02\x02\u0238\u0235\x03\x02\x02\x02\u0238\u0236\x03\x02" +
		"\x02\x02\u0238\u0237\x03\x02\x02\x02\u0239\t\x03\x02\x02\x02\u023A\u023C" +
		"\x07\x03\x02\x02\u023B\u023D\x05\f\x07\x02\u023C\u023B\x03\x02\x02\x02" +
		"\u023C\u023D\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u0240\x07" +
		"s\x02\x02\u023F\u0241\x05\u016A\xB6\x02\u0240\u023F\x03\x02\x02\x02\u0240" +
		"\u0241\x03\x02\x02\x02\u0241\u0242\x03\x02\x02\x02\u0242\u0244\x07s\x02" +
		"\x02\u0243\u0245\x05\u016A\xB6\x02\u0244\u0243\x03\x02\x02\x02\u0244\u0245" +
		"\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0257\x05\x90I\x02" +
		"\u0247\u0248\x07\x03\x02\x02\u0248\u024A\x07l\x02\x02\u0249\u024B\x05" +
		"\f\x07\x02\u024A\u0249\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B" +
		"\u024C\x03\x02\x02\x02\u024C\u024E\x07s\x02\x02\u024D\u024F\x05\u016A" +
		"\xB6\x02\u024E\u024D\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F" +
		"\u0250\x03\x02\x02\x02\u0250\u0252\x07s\x02\x02\u0251\u0253\x05\u016A" +
		"\xB6\x02\u0252\u0251\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253" +
		"\u0254\x03\x02\x02\x02\u0254\u0255\x07o\x02\x02\u0255\u0257\x05\x90I\x02" +
		"\u0256\u023A\x03\x02\x02\x02\u0256\u0247\x03\x02\x02\x02\u0257\v\x03\x02" +
		"\x02\x02\u0258\u025B\x05\xA2R\x02\u0259\u025B\x05\u016C\xB7\x02\u025A" +
		"\u0258\x03\x02\x02\x02\u025A\u0259\x03\x02\x02\x02\u025B\r\x03\x02\x02" +
		"\x02\u025C\u025E\x07\x03\x02\x02\u025D\u025F\x07\x04\x02\x02\u025E\u025D" +
		"\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02" +
		"\u0260\u0261\x05\u014A\xA6\x02\u0261\u0262\x07\x05\x02\x02\u0262\u0264" +
		"\x05\u016A\xB6\x02\u0263\u0265\x058\x1D\x02\u0264\u0263\x03\x02\x02\x02" +
		"\u0264\u0265\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266\u0267\x05" +
		"\x90I\x02\u0267\x0F\x03\x02\x02\x02\u0268\u0269\x07\x06\x02\x02\u0269" +
		"\u026A\x05\x12\n\x02\u026A\u026B\x05\x90I\x02\u026B\x11\x03\x02\x02\x02" +
		"\u026C\u0277\x05\u016A\xB6\x02\u026D\u026E\x05\u016A\xB6\x02\u026E\u026F" +
		"\x07q\x02\x02\u026F\u0270\x05\x14\v\x02\u0270\u0277\x03\x02\x02\x02\u0271" +
		"\u0277\x05\x14\v\x02\u0272\u0273\x05L\'\x02\u0273\u0274\x07q\x02\x02\u0274" +
		"\u0275\x05\u016A\xB6\x02\u0275\u0277\x03\x02\x02\x02\u0276\u026C\x03\x02" +
		"\x02\x02\u0276\u026D\x03\x02\x02\x02\u0276\u0271\x03\x02\x02\x02\u0276" +
		"\u0272\x03\x02\x02\x02\u0277\x13\x03\x02\x02\x02\u0278\u027D\x05\x16\f" +
		"\x02\u0279\u027A\x07q\x02\x02\u027A\u027C\x05\x16\f\x02\u027B\u0279\x03" +
		"\x02\x02\x02\u027C\u027F\x03\x02\x02\x02\u027D\u027B\x03\x02\x02\x02\u027D" +
		"\u027E\x03\x02\x02\x02\u027E\x15\x03\x02\x02\x02\u027F\u027D\x03\x02\x02" +
		"\x02\u0280\u0284\x05L\'\x02\u0281\u0284\x05\x18\r\x02\u0282\u0284\x05" +
		"\x1A\x0E\x02\u0283\u0280\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0283" +
		"\u0282\x03\x02\x02\x02\u0284\x17\x03\x02\x02\x02\u0285\u0286\x07\x04\x02" +
		"\x02\u0286\u0287\x05\u014A\xA6\x02\u0287\u0289\x05\xA0Q\x02\u0288\u028A" +
		"\x058\x1D\x02\u0289\u0288\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02" +
		"\u028A\x19\x03\x02\x02\x02\u028B\u028D\x05\x1C\x0F\x02\u028C\u028E\x05" +
		"\x1E\x10\x02\u028D\u028C\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E" +
		"\u0290\x03\x02\x02\x02\u028F\u0291\x058\x1D\x02\u0290\u028F\x03\x02\x02" +
		"\x02\u0290\u0291\x03\x02\x02\x02\u0291\x1B\x03\x02\x02\x02\u0292\u0293" +
		"\x07\x07\x02\x02\u0293\u0294\x05\u014A\xA6\x02\u0294\u0295\x05\xA0Q\x02" +
		"\u0295\u029B\x03\x02\x02\x02\u0296\u0297\x07\b\x02\x02\u0297\u0298\x05" +
		"\u014A\xA6\x02\u0298\u0299\x05\xA0Q\x02\u0299\u029B\x03\x02\x02\x02\u029A" +
		"\u0292\x03\x02\x02\x02\u029A\u0296\x03\x02\x02\x02\u029B\x1D\x03\x02\x02" +
		"\x02\u029C\u029D\x07q\x02\x02\u029D\u02A2\x05 \x11\x02\u029E\u029F\x07" +
		"q\x02\x02\u029F\u02A1\x05 \x11\x02\u02A0\u029E\x03\x02\x02\x02\u02A1\u02A4" +
		"\x03\x02\x02\x02\u02A2\u02A0\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02" +
		"\u02A3\x1F\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A5\u02A6\x05" +
		"\u014A\xA6\x02\u02A6\u02A7\x05\xA0Q\x02\u02A7\u02AA\x03\x02\x02\x02\u02A8" +
		"\u02AA\x05\x1C\x0F\x02\u02A9\u02A5\x03\x02\x02\x02\u02A9\u02A8\x03\x02" +
		"\x02\x02\u02AA!\x03\x02\x02\x02\u02AB\u02AC\x07\t\x02\x02\u02AC\u02AD" +
		"\x05\x90I\x02\u02AD\u02AE\x07\x06\x02\x02\u02AE\u02AF\x05\u016A\xB6\x02" +
		"\u02AF#\x03\x02\x02\x02\u02B0\u02B4\x05&\x14\x02\u02B1\u02B4\x05*\x16" +
		"\x02\u02B2\u02B4\x05,\x17\x02\u02B3\u02B0\x03\x02\x02\x02\u02B3\u02B1" +
		"\x03\x02\x02\x02\u02B3\u02B2\x03\x02\x02\x02\u02B4%\x03\x02\x02\x02\u02B5" +
		"\u02B6\x07\n\x02\x02\u02B6\u02B7\x05\x12\n\x02\u02B7\u02B9\x05\x90I\x02" +
		"\u02B8\u02BA\x05(\x15\x02\u02B9\u02B8\x03\x02\x02\x02\u02B9\u02BA\x03" +
		"\x02\x02\x02\u02BA\'\x03\x02\x02\x02\u02BB\u02BC\x07\v\x02\x02\u02BC\u02C0" +
		"\x05\x90I\x02\u02BD\u02BE\x07\v\x02\x02\u02BE\u02C0\x05&\x14\x02\u02BF" +
		"\u02BB\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02C0)\x03\x02\x02" +
		"\x02\u02C1\u02C2\x07\f\x02\x02\u02C2\u02C3\x05\x12\n\x02\u02C3\u02C4\x07" +
		"\v\x02\x02\u02C4\u02C5\x05\x90I\x02\u02C5+\x03\x02\x02\x02\u02C6\u02C7" +
		"\x07\r\x02\x02\u02C7\u02C8\x05\u016A\xB6\x02\u02C8\u02CA\x07k\x02\x02" +
		"\u02C9\u02CB\x05.\x18\x02\u02CA\u02C9\x03\x02\x02\x02\u02CA\u02CB\x03" +
		"\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02CD\x07n\x02\x02\u02CD" +
		"-\x03\x02\x02\x02\u02CE\u02D0\x050\x19\x02\u02CF\u02D1\x05.\x18\x02\u02D0" +
		"\u02CF\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1/\x03\x02\x02" +
		"\x02\u02D2\u02D3\x052\x1A\x02\u02D3\u02D4\x05\x06\x04\x02\u02D4\u02D9" +
		"\x03\x02\x02\x02\u02D5\u02D6\x056\x1C\x02\u02D6\u02D7\x05\x06\x04\x02" +
		"\u02D7\u02D9\x03\x02\x02\x02\u02D8\u02D2\x03\x02\x02\x02\u02D8\u02D5\x03" +
		"\x02\x02\x02\u02D91\x03\x02\x02\x02\u02DA\u02DB\x07\x04\x02\x02\u02DB" +
		"\u02DC\x054\x1B\x02\u02DC\u02DD\x07r\x02\x02\u02DD3\x03\x02\x02\x02\u02DE" +
		"\u02E0\x05\u014A\xA6\x02\u02DF\u02E1\x058\x1D\x02\u02E0\u02DF\x03\x02" +
		"\x02\x02\u02E0\u02E1\x03\x02\x02\x02\u02E1\u02EA\x03\x02\x02\x02\u02E2" +
		"\u02E4\x05\u014A\xA6\x02\u02E3\u02E5\x058\x1D\x02\u02E4\u02E3\x03\x02" +
		"\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6" +
		"\u02E7\x07q\x02\x02\u02E7\u02E8\x054\x1B\x02\u02E8\u02EA\x03\x02\x02\x02" +
		"\u02E9\u02DE\x03\x02\x02\x02\u02E9\u02E2\x03\x02\x02\x02\u02EA5\x03\x02" +
		"\x02\x02\u02EB\u02EC\x07\x0E\x02\x02\u02EC\u02ED\x07r\x02\x02\u02ED7\x03" +
		"\x02\x02\x02\u02EE\u02EF\x07\x0F\x02\x02\u02EF\u02F0\x05:\x1E\x02\u02F0" +
		"9\x03\x02\x02\x02\u02F1\u02F2\x05\u016A\xB6\x02\u02F2;\x03\x02\x02\x02" +
		"\u02F3\u02F4\x05> \x02\u02F4\u02F5\x05\b\x05\x02\u02F5\u02FD\x03\x02\x02" +
		"\x02\u02F6\u02F7\x05> \x02\u02F7\u02F8\x05&\x14\x02\u02F8\u02FD\x03\x02" +
		"\x02\x02\u02F9\u02FA\x05> \x02\u02FA\u02FB\x05,\x17\x02\u02FB\u02FD\x03" +
		"\x02\x02\x02\u02FC\u02F3\x03\x02\x02\x02\u02FC\u02F6\x03\x02\x02\x02\u02FC" +
		"\u02F9\x03\x02\x02\x02\u02FD=\x03\x02\x02\x02\u02FE\u02FF\x05@!\x02\u02FF" +
		"\u0300\x07r\x02\x02\u0300?\x03\x02\x02\x02\u0301\u0302\x05\u01D4\xEB\x02" +
		"\u0302A\x03\x02\x02\x02\u0303\u0309\x05D#\x02\u0304\u0309\x05F$\x02\u0305" +
		"\u0309\x05H%\x02\u0306\u0309\x05J&\x02\u0307\u0309\x05R*\x02\u0308\u0303" +
		"\x03\x02\x02\x02\u0308\u0304\x03\x02\x02\x02\u0308\u0305\x03\x02\x02\x02" +
		"\u0308\u0306\x03\x02\x02\x02\u0308\u0307\x03\x02\x02\x02\u0309C\x03\x02" +
		"\x02\x02\u030A\u030C\x07\x10\x02\x02\u030B\u030D\x05@!\x02\u030C\u030B" +
		"\x03\x02\x02\x02\u030C\u030D\x03\x02\x02\x02\u030DE\x03\x02\x02\x02\u030E" +
		"\u0310\x07\x11\x02\x02\u030F\u0311\x05@!\x02\u0310\u030F\x03\x02\x02\x02" +
		"\u0310\u0311\x03\x02\x02\x02\u0311G\x03\x02\x02\x02\u0312\u0313\x07\x12" +
		"\x02\x02\u0313I\x03\x02\x02\x02\u0314\u0316\x07\x13\x02\x02\u0315\u0317" +
		"\x05\u016A\xB6\x02\u0316\u0315\x03\x02\x02\x02\u0316\u0317\x03\x02\x02" +
		"\x02\u0317K\x03\x02\x02\x02\u0318\u0319\x07\x14\x02\x02\u0319\u031A\x07" +
		"l\x02\x02\u031A\u031B\x05N(\x02\u031B\u031C\x07o\x02\x02\u031CM\x03\x02" +
		"\x02\x02\u031D\u0322\x05P)\x02\u031E\u031F\x07q\x02\x02\u031F\u0321\x05" +
		"P)\x02\u0320\u031E\x03\x02\x02\x02\u0321\u0324\x03\x02\x02\x02\u0322\u0320" +
		"\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323O\x03\x02\x02\x02\u0324" +
		"\u0322\x03\x02\x02\x02\u0325\u0326\t\x02\x02\x02\u0326Q\x03\x02\x02\x02" +
		"\u0327\u0328\x07\x15\x02\x02\u0328\u0329\x05\u016A\xB6\x02\u0329S\x03" +
		"\x02\x02\x02\u032A\u032B\x07\x16\x02\x02\u032B\u032C\x05\x90I\x02\u032C" +
		"U\x03\x02\x02\x02\u032D\u032E\x07\x17\x02\x02\u032E\u0330\x05\x90I\x02" +
		"\u032F\u0331\x05X-\x02\u0330\u032F\x03\x02\x02\x02\u0330\u0331\x03\x02" +
		"\x02\x02\u0331W\x03\x02\x02\x02\u0332\u0334\x05Z.\x02\u0333\u0335\x05" +
		"X-\x02\u0334\u0333\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335Y" +
		"\x03\x02\x02\x02\u0336\u0338\x07\x18\x02\x02\u0337\u0339\x05\u014A\xA6" +
		"\x02\u0338\u0337\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\u033B" +
		"\x03\x02\x02\x02\u033A\u033C\x058\x1D\x02\u033B\u033A\x03\x02\x02\x02" +
		"\u033B\u033C\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D\u033E\x05" +
		"\x90I\x02\u033E[\x03\x02\x02\x02\u033F\u0342\x05^0\x02\u0340\u0342\x05" +
		"n8\x02\u0341\u033F\x03\x02\x02\x02\u0341\u0340\x03\x02\x02\x02\u0342]" +
		"\x03\x02\x02\x02\u0343\u0344\x07\x19\x02\x02\u0344\u0346\x05f4\x02\u0345" +
		"\u0347\x05\x06\x04\x02\u0346\u0345\x03\x02\x02\x02\u0346\u0347\x03\x02" +
		"\x02\x02\u0347\u0349\x03\x02\x02\x02\u0348\u034A\x05`1\x02\u0349\u0348" +
		"\x03\x02\x02\x02\u0349\u034A\x03\x02\x02\x02\u034A\u034C\x03\x02\x02\x02" +
		"\u034B\u034D\x05d3\x02\u034C\u034B\x03\x02\x02\x02\u034C\u034D\x03\x02" +
		"\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E\u034F\x07\x1A\x02\x02\u034F" +
		"_\x03\x02\x02\x02\u0350\u0352\x05b2\x02\u0351\u0353\x05`1\x02\u0352\u0351" +
		"\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353a\x03\x02\x02\x02\u0354" +
		"\u0355\x07\x1B\x02\x02\u0355\u0357\x05f4\x02\u0356\u0358\x05\x06\x04\x02" +
		"\u0357\u0356\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358c\x03\x02" +
		"\x02\x02\u0359\u035B\x07\x1C\x02\x02\u035A\u035C\x05\x06\x04\x02\u035B" +
		"\u035A\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035Ce\x03\x02\x02" +
		"\x02\u035D\u035E\b4\x01\x02\u035E\u0368\x05h5\x02\u035F\u0368\x05\u01D4" +
		"\xEB\x02\u0360\u0368\x05\u01FC\xFF\x02\u0361\u0362\x07l\x02\x02\u0362" +
		"\u0363\x05f4\x02\u0363\u0364\x07o\x02\x02\u0364\u0368\x03\x02\x02\x02" +
		"\u0365\u0366\x07w\x02\x02\u0366\u0368\x05f4\x05\u0367\u035D\x03\x02\x02" +
		"\x02\u0367\u035F\x03\x02\x02\x02\u0367\u0360\x03\x02\x02\x02\u0367\u0361" +
		"\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0368\u0373\x03\x02\x02\x02" +
		"\u0369\u036A\f\x04\x02\x02\u036A\u036B\x05\u01DE\xF0\x02\u036B\u036C\x05" +
		"f4\x05\u036C\u0372\x03\x02\x02\x02\u036D\u036E\f\x03\x02\x02\u036E\u036F" +
		"\x05\u01E0\xF1\x02\u036F\u0370\x05f4\x04\u0370\u0372\x03\x02\x02\x02\u0371" +
		"\u0369\x03\x02\x02\x02\u0371\u036D\x03\x02\x02\x02\u0372\u0375\x03\x02" +
		"\x02\x02\u0373\u0371\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374";
	private static readonly _serializedATNSegment2: string =
		"g\x03\x02\x02\x02\u0375\u0373\x03\x02\x02\x02\u0376\u0377\x07\x1D\x02" +
		"\x02\u0377\u0378\x07l\x02\x02\u0378\u0379\x05j6\x02\u0379\u037A\x07o\x02" +
		"\x02\u037A\u0381\x03\x02\x02\x02\u037B\u037C\x07\x1E\x02\x02\u037C\u037D" +
		"\x07l\x02\x02\u037D\u037E\x05l7\x02\u037E\u037F\x07o\x02\x02\u037F\u0381" +
		"\x03\x02\x02\x02\u0380\u0376\x03\x02\x02\x02\u0380\u037B\x03\x02\x02\x02" +
		"\u0381i\x03\x02\x02\x02\u0382\u0383\t\x03\x02\x02\u0383k\x03\x02\x02\x02" +
		"\u0384\u0385\t\x04\x02\x02\u0385m\x03\x02\x02\x02\u0386\u038C\x07\'\x02" +
		"\x02\u0387\u0388\x07\'\x02\x02\u0388\u0389\x05p9\x02\u0389\u038A\x05r" +
		":\x02\u038A\u038C\x03\x02\x02\x02\u038B\u0386\x03\x02\x02\x02\u038B\u0387" +
		"\x03\x02\x02\x02\u038Co\x03\x02\x02\x02\u038D\u038E\x05\u0200\u0101\x02" +
		"\u038Eq\x03\x02\x02\x02\u038F\u0390\x07\x8D\x02\x02\u0390s\x03\x02\x02" +
		"\x02\u0391\u0392\x07t\x02\x02\u0392\u0394\x05v<\x02\u0393\u0395\x05z>" +
		"\x02\u0394\u0393\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395\u0396" +
		"\x03\x02\x02\x02\u0396\u0397\x07u\x02\x02\u0397u\x03\x02\x02\x02\u0398" +
		"\u039D\x05x=\x02\u0399\u039A\x07q\x02\x02\u039A\u039C\x05x=\x02\u039B" +
		"\u0399\x03\x02\x02\x02\u039C\u039F\x03\x02\x02\x02\u039D\u039B\x03\x02" +
		"\x02\x02\u039D\u039E\x03\x02\x02\x02\u039Ew\x03\x02\x02\x02\u039F\u039D" +
		"\x03\x02\x02\x02\u03A0\u03AA\x05\u01BC\xDF\x02\u03A1\u03A2\x05\u01BC\xDF" +
		"\x02\u03A2\u03A3\x07r\x02\x02\u03A3\u03A4\x05\u01BA\xDE\x02\u03A4\u03AA" +
		"\x03\x02\x02\x02\u03A5\u03A6\x05\u01BC\xDF\x02\u03A6\u03A7\x07r\x02\x02" +
		"\u03A7\u03A8\x05\u01C8\xE5\x02\u03A8\u03AA\x03\x02\x02\x02\u03A9\u03A0" +
		"\x03\x02\x02\x02\u03A9\u03A1\x03\x02\x02\x02\u03A9\u03A5\x03\x02\x02\x02" +
		"\u03AAy\x03\x02\x02\x02\u03AB\u03AC\x07\x0F\x02\x02\u03AC\u03AD\x05|?" +
		"\x02\u03AD{\x03\x02\x02\x02\u03AE\u03B4\x05~@\x02\u03AF\u03B0\x05~@\x02" +
		"\u03B0\u03B1\x07q\x02\x02\u03B1\u03B2\x05|?\x02\u03B2\u03B4\x03\x02\x02" +
		"\x02\u03B3\u03AE\x03\x02\x02\x02\u03B3\u03AF\x03\x02\x02\x02\u03B4}\x03" +
		"\x02\x02\x02\u03B5\u03B8\x05\x80A\x02\u03B6\u03B8\x05\x82B\x02\u03B7\u03B5" +
		"\x03\x02\x02\x02\u03B7\u03B6\x03\x02\x02\x02\u03B8\x7F\x03\x02\x02\x02" +
		"\u03B9\u03BA\x05\u01BA\xDE\x02\u03BA\u03BB\x07r\x02\x02\u03BB\u03BC\x05" +
		"\u01BA\xDE\x02\u03BC\u03C2\x03\x02\x02\x02\u03BD\u03BE\x05\u01BA\xDE\x02" +
		"\u03BE\u03BF\x07r\x02\x02\u03BF\u03C0\x05\u01C8\xE5\x02\u03C0\u03C2\x03" +
		"\x02\x02\x02\u03C1\u03B9\x03\x02\x02\x02\u03C1\u03BD\x03\x02\x02\x02\u03C2" +
		"\x81\x03\x02\x02\x02\u03C3\u03C4\x05\u01BA\xDE\x02\u03C4\u03C5\x05\u01E6" +
		"\xF4\x02\u03C5\u03C6\x05\u01B6\xDC\x02\u03C6\x83\x03\x02\x02\x02\u03C7" +
		"\u03C8\x07t\x02\x02\u03C8\u03C9\x05\x86D\x02\u03C9\u03CA\x07u\x02\x02" +
		"\u03CA\x85\x03\x02\x02\x02\u03CB\u03D0\x05\x88E\x02\u03CC\u03CD\x07q\x02" +
		"\x02\u03CD\u03CF\x05\x88E\x02\u03CE\u03CC\x03\x02\x02\x02\u03CF\u03D2" +
		"\x03\x02\x02\x02\u03D0\u03CE\x03\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02" +
		"\u03D1\x87\x03\x02\x02\x02\u03D2\u03D0\x03\x02\x02\x02\u03D3\u03D4\x05" +
		"\u01B6\xDC\x02\u03D4\x89\x03\x02\x02\x02\u03D5\u03E4\x05\x92J\x02\u03D6" +
		"\u03E4\x05\x9AN\x02\u03D7\u03E4\x05\xA2R\x02\u03D8\u03E4\x05\xBC_\x02" +
		"\u03D9\u03E4\x05\xC4c\x02\u03DA\u03E4\x05\xDEp\x02\u03DB\u03E4\x05\u0100" +
		"\x81\x02\u03DC\u03E4\x05\u0106\x84\x02\u03DD\u03E4\x05\u010C\x87\x02\u03DE" +
		"\u03E4\x05\u0120\x91\x02\u03DF\u03E4\x05\u0126\x94\x02\u03E0\u03E4\x05" +
		"\u0128\x95\x02\u03E1\u03E4\x05\u012C\x97\x02\u03E2\u03E4\x05\u0132\x9A" +
		"\x02\u03E3\u03D5\x03\x02\x02\x02\u03E3\u03D6\x03\x02\x02\x02\u03E3\u03D7" +
		"\x03\x02\x02\x02\u03E3\u03D8\x03\x02\x02\x02\u03E3\u03D9\x03\x02\x02\x02" +
		"\u03E3\u03DA\x03\x02\x02\x02\u03E3\u03DB\x03\x02\x02\x02\u03E3\u03DC\x03" +
		"\x02\x02\x02\u03E3\u03DD\x03\x02\x02\x02\u03E3\u03DE\x03\x02\x02\x02\u03E3" +
		"\u03DF\x03\x02\x02\x02\u03E3\u03E0\x03\x02\x02\x02\u03E3\u03E1\x03\x02" +
		"\x02\x02\u03E3\u03E2\x03\x02\x02\x02\u03E4\x8B\x03\x02\x02\x02\u03E5\u03E7" +
		"\x05\x8AF\x02\u03E6\u03E5\x03\x02\x02\x02\u03E7\u03E8\x03\x02\x02\x02" +
		"\u03E8\u03E6\x03\x02\x02\x02\u03E8\u03E9\x03\x02\x02\x02\u03E9\x8D\x03" +
		"\x02\x02\x02\u03EA\u03EC\x05\x06\x04\x02\u03EB\u03EA\x03\x02\x02\x02\u03EB" +
		"\u03EC\x03\x02\x02\x02\u03EC\x8F\x03\x02\x02\x02\u03ED\u03EF\x07k\x02" +
		"\x02\u03EE\u03F0\x05\x06\x04\x02\u03EF\u03EE\x03\x02\x02\x02\u03EF\u03F0" +
		"\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03F2\x07n\x02\x02" +
		"\u03F2\x91\x03\x02\x02\x02\u03F3\u03F5\x05\u0164\xB3\x02\u03F4\u03F3\x03" +
		"\x02\x02\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6" +
		"\u03F8\x07(\x02\x02\u03F7\u03F9\x05\x94K\x02\u03F8\u03F7\x03\x02\x02\x02" +
		"\u03F8\u03F9\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA\u03FB\x05" +
		"\x96L\x02\u03FB\x93\x03\x02\x02\x02\u03FC\u03FD\t\x05\x02\x02\u03FD\x95" +
		"\x03\x02\x02\x02\u03FE\u0404\x05\x98M\x02\u03FF\u0400\x05\x98M\x02\u0400" +
		"\u0401\x07j\x02\x02\u0401\u0402\x05\x96L\x02\u0402\u0404\x03\x02\x02\x02" +
		"\u0403\u03FE\x03\x02\x02\x02\u0403\u03FF\x03\x02\x02\x02\u0404\x97\x03" +
		"\x02\x02\x02\u0405\u0408\x05\u01D4\xEB\x02\u0406\u0408\x05\u01EE\xF8\x02" +
		"\u0407\u0405\x03\x02\x02\x02\u0407\u0406\x03\x02\x02\x02\u0408\x99\x03" +
		"\x02\x02\x02\u0409\u040B\x05\u0164\xB3\x02\u040A\u0409\x03\x02\x02\x02" +
		"\u040A\u040B\x03\x02\x02\x02\u040B\u040D\x03\x02\x02\x02\u040C\u040E\x05" +
		"\u0146\xA4\x02\u040D\u040C\x03\x02\x02\x02\u040D\u040E\x03\x02\x02\x02" +
		"\u040E\u040F\x03\x02\x02\x02\u040F\u0410\x07\x07\x02\x02\u0410\u0411\x05" +
		"\x9CO\x02\u0411\x9B\x03\x02\x02\x02\u0412\u0417\x05\x9EP\x02\u0413\u0414" +
		"\x07q\x02\x02\u0414\u0416\x05\x9EP\x02\u0415\u0413\x03\x02\x02\x02\u0416" +
		"\u0419\x03\x02\x02\x02\u0417\u0415\x03\x02\x02\x02\u0417\u0418\x03\x02" +
		"\x02\x02\u0418\x9D\x03\x02\x02\x02\u0419\u0417\x03\x02\x02\x02\u041A\u041C" +
		"\x05\u014A\xA6\x02\u041B\u041D\x05\xA0Q\x02\u041C\u041B\x03\x02\x02\x02" +
		"\u041C\u041D\x03\x02\x02\x02\u041D\x9F\x03\x02\x02\x02\u041E\u041F\x05" +
		"\u01DA\xEE\x02\u041F\u0420\x05\u016A\xB6\x02\u0420\xA1\x03\x02\x02\x02" +
		"\u0421\u0422\x05\xA4S\x02\u0422\u0423\x05\x9CO\x02\u0423\u0445\x03\x02" +
		"\x02\x02\u0424\u0425\x05\xA4S\x02\u0425\u0426\x05\xA6T\x02\u0426\u0427" +
		"\x05\u01B8\xDD\x02\u0427\u0428\x05\x90I\x02\u0428\u0445\x03\x02\x02\x02" +
		"\u0429\u042A\x05\xA4S\x02\u042A\u042B\x05\xA6T\x02\u042B\u042C\x05\u01B8" +
		"\xDD\x02\u042C\u042D\x05\xA8U\x02\u042D\u0445\x03\x02\x02\x02\u042E\u042F" +
		"\x05\xA4S\x02\u042F\u0430\x05\xA6T\x02\u0430\u0431\x05\u01B8\xDD\x02\u0431" +
		"\u0432\x05\xB0Y\x02\u0432\u0445\x03\x02\x02\x02\u0433\u0434\x05\xA4S\x02" +
		"\u0434\u0435\x05\xA6T\x02\u0435\u0437\x05\u01B8\xDD\x02\u0436\u0438\x05" +
		"\xA0Q\x02\u0437\u0436\x03\x02\x02\x02\u0437\u0438\x03\x02\x02\x02\u0438" +
		"\u0439\x03\x02\x02\x02\u0439\u043A\x05\xB6\\\x02\u043A\u0445\x03\x02\x02" +
		"\x02\u043B\u043C\x05\xA4S\x02\u043C\u043D\x05\xA6T\x02\u043D\u043E\x05" +
		"\u01B8\xDD\x02\u043E\u0440\x05\u01B8\xDD\x02\u043F\u0441\x05\xA0Q\x02" +
		"\u0440\u043F\x03\x02\x02\x02\u0440\u0441\x03\x02\x02\x02\u0441\u0442\x03" +
		"\x02\x02\x02\u0442\u0443\x05\xB6\\\x02\u0443\u0445\x03\x02\x02\x02\u0444" +
		"\u0421\x03\x02\x02\x02\u0444\u0424\x03\x02\x02\x02\u0444\u0429\x03\x02" +
		"\x02\x02\u0444\u042E\x03\x02\x02\x02\u0444\u0433\x03\x02\x02\x02\u0444" +
		"\u043B\x03\x02\x02\x02\u0445\xA3\x03\x02\x02\x02\u0446\u0448\x05\u0164" +
		"\xB3\x02\u0447\u0446\x03\x02\x02\x02\u0447\u0448\x03\x02\x02\x02\u0448" +
		"\u044A\x03\x02\x02\x02\u0449\u044B\x05\u0146\xA4\x02\u044A\u0449\x03\x02" +
		"\x02\x02\u044A\u044B\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C" +
		"\u044D\x07\b\x02\x02\u044D\xA5\x03\x02\x02\x02\u044E\u044F\x05\u01D4\xEB" +
		"\x02\u044F\xA7\x03\x02\x02\x02\u0450\u0451\x07k\x02\x02\u0451\u0453\x05" +
		"\xAAV\x02\u0452\u0454\x05\xACW\x02\u0453\u0452\x03\x02\x02\x02\u0453\u0454" +
		"\x03\x02\x02\x02\u0454\u0455\x03\x02\x02\x02\u0455\u0456\x07n\x02\x02" +
		"\u0456\u045D\x03\x02\x02\x02\u0457\u0458\x07k\x02\x02\u0458\u0459\x05" +
		"\xACW\x02\u0459\u045A\x05\xAAV\x02\u045A\u045B\x07n\x02\x02\u045B\u045D" +
		"\x03\x02\x02\x02\u045C\u0450\x03\x02\x02\x02\u045C\u0457\x03\x02\x02\x02" +
		"\u045D\xA9\x03\x02\x02\x02\u045E\u0460\x05\u0164\xB3\x02\u045F\u045E\x03" +
		"\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460\u0461\x03\x02\x02\x02\u0461" +
		"\u0462\x07/\x02\x02\u0462\u0463\x05\x90I\x02\u0463\xAB\x03\x02\x02\x02" +
		"\u0464\u0466\x05\u0164\xB3\x02\u0465\u0464\x03\x02\x02\x02\u0465\u0466" +
		"\x03\x02\x02\x02\u0466\u0467\x03\x02\x02\x02\u0467\u0469\x070\x02\x02" +
		"\u0468\u046A\x05\xAEX\x02\u0469\u0468\x03\x02\x02\x02\u0469\u046A\x03" +
		"\x02\x02\x02\u046A\u046B\x03\x02\x02\x02\u046B\u046C\x05\x90I\x02\u046C" +
		"\xAD\x03\x02\x02\x02\u046D\u046E\x07l\x02\x02\u046E\u046F\x05\u01D4\xEB" +
		"\x02\u046F\u0470\x07o\x02\x02\u0470\xAF\x03\x02\x02\x02\u0471\u0472\x07" +
		"k\x02\x02\u0472\u0474\x05\xB2Z\x02\u0473\u0475\x05\xB4[\x02\u0474\u0473" +
		"\x03\x02\x02\x02\u0474\u0475\x03\x02\x02\x02\u0475\u0476\x03\x02\x02\x02" +
		"\u0476\u0477\x07n\x02\x02\u0477\u047E\x03\x02\x02\x02\u0478\u0479\x07" +
		"k\x02\x02\u0479\u047A\x05\xB4[\x02\u047A\u047B\x05\xB2Z\x02\u047B\u047C" +
		"\x07n\x02\x02\u047C\u047E\x03\x02\x02\x02\u047D\u0471\x03\x02\x02\x02" +
		"\u047D\u0478\x03\x02\x02\x02\u047E\xB1\x03\x02\x02\x02\u047F\u0481\x05" +
		"\u0164\xB3\x02\u0480\u047F\x03\x02\x02\x02\u0480\u0481\x03\x02\x02\x02" +
		"\u0481\u0482\x03\x02\x02\x02\u0482\u0483\x07/\x02\x02\u0483\xB3\x03\x02" +
		"\x02\x02\u0484\u0486\x05\u0164\xB3\x02\u0485\u0484\x03\x02\x02\x02\u0485" +
		"\u0486\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487\u0488\x070\x02" +
		"\x02\u0488\xB5\x03\x02\x02\x02\u0489\u048A\x07k\x02\x02\u048A\u048C\x05" +
		"\xB8]\x02\u048B\u048D\x05\xBA^\x02\u048C\u048B\x03\x02\x02\x02\u048C\u048D" +
		"\x03\x02\x02\x02\u048D\u048E\x03\x02\x02\x02\u048E\u048F\x07n\x02\x02" +
		"\u048F\u0496\x03\x02\x02\x02\u0490\u0491\x07k\x02\x02\u0491\u0492\x05" +
		"\xBA^\x02\u0492\u0493\x05\xB8]\x02\u0493\u0494\x07n\x02\x02\u0494\u0496" +
		"\x03\x02\x02\x02\u0495\u0489\x03\x02\x02\x02\u0495\u0490\x03\x02\x02\x02" +
		"\u0496\xB7\x03\x02\x02\x02\u0497\u0499\x05\u0164\xB3\x02\u0498\u0497\x03" +
		"\x02\x02\x02\u0498\u0499\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A" +
		"\u049C\x071\x02\x02\u049B\u049D\x05\xAEX\x02\u049C\u049B\x03\x02\x02\x02" +
		"\u049C\u049D\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E\u049F\x05" +
		"\x90I\x02\u049F\xB9\x03\x02\x02\x02\u04A0\u04A2\x05\u0164\xB3\x02\u04A1" +
		"\u04A0\x03\x02\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2\u04A3\x03\x02" +
		"\x02\x02\u04A3\u04A5\x072\x02\x02\u04A4\u04A6\x05\xAEX\x02\u04A5\u04A4" +
		"\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02" +
		"\u04A7\u04A8\x05\x90I\x02\u04A8\xBB\x03\x02\x02\x02\u04A9\u04AA\x05\xBE" +
		"`\x02\u04AA\u04AB\x05\xC2b\x02\u04AB\xBD\x03\x02\x02\x02\u04AC\u04AE\x05" +
		"\u0164\xB3\x02\u04AD\u04AC\x03\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02" +
		"\u04AE\u04B0\x03\x02\x02\x02\u04AF\u04B1\x05\u0148\xA5\x02\u04B0\u04AF" +
		"\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04B2\x03\x02\x02\x02" +
		"\u04B2\u04B3\x07)\x02\x02\u04B3\u04B4\x05\xC0a\x02\u04B4\xBF\x03\x02\x02" +
		"\x02\u04B5\u04B6\x05\u01D4\xEB\x02\u04B6\xC1\x03\x02\x02\x02\u04B7\u04B8" +
		"\x05\u01DA\xEE\x02\u04B8\u04B9\x05\u01B6\xDC\x02\u04B9\xC3\x03\x02\x02" +
		"\x02\u04BA\u04BB\x05\xC6d\x02\u04BB\u04BD\x05\xC8e\x02\u04BC\u04BE\x05" +
		"t;\x02\u04BD\u04BC\x03\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02\u04BE\u04BF" +
		"\x03\x02\x02\x02\u04BF\u04C1\x05\xCAf\x02\u04C0\u04C2\x05\xCEh\x02\u04C1" +
		"\u04C0\x03\x02\x02\x02\u04C1\u04C2\x03\x02\x02\x02\u04C2\xC5\x03\x02\x02" +
		"\x02\u04C3\u04C5\x05\u0164\xB3\x02\u04C4\u04C3\x03\x02\x02\x02\u04C4\u04C5" +
		"\x03\x02\x02\x02\u04C5\u04C7\x03\x02\x02\x02\u04C6\u04C8\x05\u0146\xA4" +
		"\x02\u04C7\u04C6\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C8\u04C9" +
		"\x03\x02\x02\x02\u04C9\u04CA\x07.\x02\x02\u04CA\xC7\x03\x02\x02\x02\u04CB" +
		"\u04CE\x05\u01D4\xEB\x02\u04CC\u04CE\x05\u01EE\xF8\x02\u04CD\u04CB\x03" +
		"\x02\x02\x02\u04CD\u04CC\x03\x02\x02\x02\u04CE\xC9\x03\x02\x02\x02\u04CF" +
		"\u04D1\x05\xD0i\x02\u04D0\u04D2\x073\x02\x02\u04D1\u04D0\x03\x02\x02\x02" +
		"\u04D1\u04D2\x03\x02\x02\x02\u04D2\u04D4\x03\x02\x02\x02\u04D3\u04D5\x05" +
		"\xCCg\x02\u04D4\u04D3\x03\x02\x02\x02\u04D4\u04D5\x03\x02\x02\x02\u04D5" +
		"\u04DC\x03\x02\x02\x02\u04D6\u04D7\x05\xD0i\x02\u04D7\u04D9\x074\x02\x02" +
		"\u04D8\u04DA\x05\xCCg\x02\u04D9\u04D8\x03\x02\x02\x02\u04D9\u04DA\x03" +
		"\x02\x02\x02\u04DA\u04DC\x03\x02\x02\x02\u04DB\u04CF\x03\x02\x02\x02\u04DB" +
		"\u04D6\x03\x02\x02\x02\u04DC\xCB\x03\x02\x02\x02\u04DD\u04DF\x05\u01E2" +
		"\xF2\x02\u04DE\u04E0\x05\u0164\xB3\x02\u04DF\u04DE\x03\x02\x02\x02\u04DF" +
		"\u04E0\x03\x02\x02\x02\u04E0\u04E1\x03\x02\x02\x02\u04E1\u04E2\x05\u01B6" +
		"\xDC\x02\u04E2\xCD\x03\x02\x02\x02\u04E3\u04E4\x05\x90I\x02\u04E4\xCF" +
		"\x03\x02\x02\x02\u04E5\u04E7\x05\xD2j\x02\u04E6\u04E8\x05\xD0i\x02\u04E7" +
		"\u04E6\x03\x02\x02\x02\u04E7\u04E8\x03\x02\x02\x02\u04E8\xD1\x03\x02\x02" +
		"\x02\u04E9\u04EA\x07l\x02\x02\u04EA\u04F0\x07o\x02\x02\u04EB\u04EC\x07" +
		"l\x02\x02\u04EC\u04ED\x05\xD4k\x02\u04ED\u04EE\x07o\x02\x02\u04EE\u04F0" +
		"\x03\x02\x02\x02\u04EF\u04E9\x03\x02\x02\x02\u04EF\u04EB\x03\x02\x02\x02" +
		"\u04F0\xD3\x03\x02\x02\x02\u04F1\u04F6\x05\xD6l\x02\u04F2\u04F3\x07q\x02" +
		"\x02\u04F3\u04F5\x05\xD6l\x02\u04F4\u04F2\x03\x02\x02\x02\u04F5\u04F8" +
		"\x03\x02\x02\x02\u04F6\u04F4\x03\x02\x02\x02\u04F6\u04F7\x03\x02\x02\x02" +
		"\u04F7\xD5\x03\x02\x02\x02\u04F8\u04F6\x03\x02\x02\x02\u04F9\u04FB\x07" +
		"\x07\x02\x02\u04FA\u04F9\x03\x02\x02\x02\u04FA\u04FB\x03\x02\x02\x02\u04FB" +
		"\u04FD\x03\x02\x02\x02\u04FC\u04FE\x05\xD8m\x02\u04FD\u04FC\x03\x02\x02" +
		"\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE\u04FF\x03\x02\x02\x02\u04FF\u0501" +
		"\x05\xDAn\x02\u0500\u0502\x05\u01B8\xDD\x02\u0501\u0500\x03\x02\x02\x02" +
		"\u0501\u0502\x03\x02\x02\x02\u0502\u0504\x03\x02\x02\x02\u0503\u0505\x05" +
		"\xDCo\x02\u0504\u0503\x03\x02\x02\x02\u0504\u0505\x03\x02\x02\x02\u0505" +
		"\u0520\x03\x02\x02\x02\u0506\u0508\x07\b\x02\x02\u0507\u0509\x05\xD8m" +
		"\x02\u0508\u0507\x03\x02\x02\x02\u0508\u0509\x03\x02\x02\x02\u0509\u050A" +
		"\x03\x02\x02\x02\u050A\u050C\x05\xDAn\x02\u050B\u050D\x05\u01B8\xDD\x02" +
		"\u050C\u050B\x03\x02\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\u050F\x03" +
		"\x02\x02\x02\u050E\u0510\x05\xDCo\x02\u050F\u050E\x03\x02\x02\x02\u050F" +
		"\u0510\x03\x02\x02\x02\u0510\u0520\x03\x02\x02\x02\u0511\u0513\x075\x02" +
		"\x02\u0512\u0514\x05\xD8m\x02\u0513\u0512\x03\x02\x02\x02\u0513\u0514" +
		"\x03\x02\x02\x02\u0514\u0515\x03\x02\x02\x02\u0515\u0516\x05\xDAn\x02" +
		"\u0516\u0517\x05\u01B8\xDD\x02\u0517\u0520\x03\x02\x02\x02\u0518\u051A" +
		"\x05\xD8m\x02\u0519\u0518\x03\x02\x02\x02\u0519\u051A\x03\x02\x02\x02" +
		"\u051A\u051B\x03\x02\x02\x02\u051B\u051C\x05\xDAn\x02\u051C\u051D\x05" +
		"\u01B8\xDD\x02\u051D\u051E\x05\u01E4\xF3\x02\u051E\u0520\x03\x02\x02\x02" +
		"\u051F\u04FA\x03\x02\x02\x02\u051F\u0506\x03\x02\x02\x02\u051F\u0511\x03" +
		"\x02\x02\x02\u051F\u0519\x03\x02\x02\x02\u0520\xD7\x03\x02\x02\x02\u0521" +
		"\u0524\x05\u01D4\xEB\x02\u0522\u0524\x07v\x02\x02\u0523\u0521\x03\x02" +
		"\x02\x02\u0523\u0522\x03\x02\x02\x02\u0524\xD9\x03\x02\x02\x02\u0525\u0528" +
		"\x05\u01D4\xEB\x02\u0526\u0528\x07v\x02\x02\u0527\u0525\x03\x02\x02\x02" +
		"\u0527\u0526\x03\x02\x02\x02\u0528\xDB\x03\x02\x02\x02\u0529\u052A\x05" +
		"\u01DA\xEE\x02\u052A\u052B\x05\u016A\xB6\x02\u052B\xDD\x03\x02\x02\x02" +
		"\u052C\u052E\x05\u0164\xB3\x02\u052D\u052C\x03\x02\x02\x02\u052D\u052E" +
		"\x03\x02\x02\x02\u052E\u0530\x03\x02\x02\x02\u052F\u0531\x05\u0148\xA5" +
		"\x02\u0530\u052F\x03\x02\x02\x02\u0530\u0531\x03\x02\x02\x02\u0531\u0532" +
		"\x03\x02\x02\x02\u0532\u053B\x05\xE0q\x02\u0533\u0535\x05\u0164\xB3\x02" +
		"\u0534\u0533\x03\x02\x02\x02\u0534\u0535\x03\x02\x02\x02\u0535\u0537\x03" +
		"\x02\x02\x02\u0536\u0538\x05\u0148\xA5\x02\u0537\u0536\x03\x02\x02\x02" +
		"\u0537\u0538\x03\x02\x02\x02\u0538\u0539\x03\x02\x02\x02\u0539\u053B\x05" +
		"\xF0y\x02\u053A\u052D\x03\x02\x02\x02\u053A\u0534\x03\x02\x02\x02\u053B" +
		"\xDF\x03\x02\x02\x02\u053C\u053E\x076\x02\x02\u053D\u053C\x03\x02\x02" +
		"\x02\u053D\u053E\x03\x02\x02\x02\u053E\u053F\x03\x02\x02\x02\u053F\u0540" +
		"\x07,\x02\x02\u0540\u0542\x05\xECw\x02\u0541\u0543\x05t;\x02\u0542\u0541" +
		"\x03\x02\x02\x02\u0542\u0543\x03\x02\x02\x02\u0543\u0545\x03\x02\x02\x02" +
		"\u0544\u0546\x05\u01CE\xE8\x02\u0545\u0544\x03\x02\x02\x02\u0545\u0546" +
		"\x03\x02\x02\x02\u0546\u0547\x03\x02\x02\x02\u0547\u0549\x07k\x02\x02" +
		"\u0548\u054A\x05\xE2r\x02\u0549\u0548\x03\x02\x02\x02\u0549\u054A\x03" +
		"\x02\x02\x02\u054A\u054B\x03\x02\x02\x02\u054B\u054C\x07n\x02\x02\u054C" +
		"\xE1\x03\x02\x02\x02\u054D\u054F\x05\xE4s\x02\u054E\u0550\x05\xE2r\x02" +
		"\u054F\u054E\x03\x02\x02\x02\u054F\u0550\x03\x02\x02\x02\u0550\xE3\x03" +
		"\x02\x02\x02\u0551\u0554\x05\x8AF\x02\u0552\u0554\x05\xE6t\x02\u0553\u0551" +
		"\x03\x02\x02\x02\u0553\u0552\x03\x02\x02\x02\u0554\xE5\x03\x02\x02\x02" +
		"\u0555\u0557\x05\u0164\xB3\x02\u0556\u0555\x03\x02\x02\x02\u0556\u0557" +
		"\x03\x02\x02\x02\u0557\u0559\x03\x02\x02\x02\u0558\u055A\x076\x02\x02" +
		"\u0559\u0558\x03\x02\x02\x02\u0559\u055A\x03\x02\x02\x02\u055A\u055B\x03" +
		"\x02\x02\x02\u055B\u055C\x07\x04\x02\x02\u055C\u055D\x05\xE8u\x02\u055D" +
		"\xE7\x03\x02\x02\x02\u055E\u0564\x05\xEAv\x02\u055F\u0560\x05\xEAv\x02" +
		"\u0560\u0561\x07q\x02\x02\u0561\u0562\x05\xE8u\x02\u0562\u0564\x03\x02" +
		"\x02\x02\u0563\u055E\x03\x02\x02\x02\u0563\u055F\x03\x02\x02\x02\u0564" +
		"\xE9\x03\x02\x02\x02\u0565\u0567\x05\xEEx\x02\u0566\u0568\x05\u01BE\xE0" +
		"\x02\u0567\u0566\x03\x02\x02\x02\u0567\u0568\x03\x02\x02\x02\u0568\xEB" +
		"\x03\x02\x02\x02\u0569\u056A\x05\u01D4\xEB\x02\u056A\xED\x03\x02\x02\x02" +
		"\u056B\u056C\x05\u01D4\xEB\x02\u056C\xEF\x03\x02\x02\x02\u056D\u056E\x07" +
		",\x02\x02\u056E\u0570\x05\xECw\x02\u056F\u0571\x05t;\x02\u0570\u056F\x03" +
		"\x02\x02\x02\u0570\u0571\x03\x02\x02\x02\u0571\u0572\x03\x02\x02\x02\u0572" +
		"\u0573\x05\u01CE\xE8\x02\u0573\u0574\x07k\x02\x02\u0574\u0575\x05\xF2" +
		"z\x02\u0575\u0576\x07n\x02\x02\u0576\xF1\x03\x02\x02\x02\u0577\u0579\x05" +
		"\xF4{\x02\u0578\u057A\x05\xF2z\x02\u0579\u0578\x03\x02\x02\x02\u0579\u057A" +
		"\x03\x02\x02\x02\u057A\xF3\x03\x02\x02\x02\u057B\u057E\x05\x8AF\x02\u057C" +
		"\u057E\x05\xF6|\x02\u057D\u057B\x03\x02\x02\x02\u057D\u057C\x03\x02\x02" +
		"\x02\u057E\xF5\x03\x02\x02\x02\u057F\u0581\x05\u0164\xB3\x02\u0580\u057F" +
		"\x03\x02\x02\x02\u0580\u0581\x03\x02\x02\x02\u0581\u0582\x03\x02\x02\x02" +
		"\u0582\u0583\x07\x04\x02\x02\u0583\u0584\x05\xF8}\x02\u0584\xF7\x03\x02" +
		"\x02\x02\u0585\u058B\x05\xFA~\x02\u0586\u0587\x05\xFA~\x02\u0587\u0588" +
		"\x07q\x02\x02\u0588\u0589\x05\xF8}\x02\u0589\u058B\x03\x02\x02\x02\u058A" +
		"\u0585\x03\x02\x02\x02\u058A\u0586\x03\x02\x02\x02\u058B\xF9\x03\x02\x02" +
		"\x02\u058C\u058E\x05\xEEx\x02\u058D\u058F\x05\xFC\x7F\x02\u058E\u058D" +
		"\x03\x02\x02\x02\u058E\u058F\x03\x02\x02\x02\u058F\xFB\x03\x02\x02\x02" +
		"\u0590\u0591\x05\u01DA\xEE\x02\u0591\u0592\x05\xFE\x80\x02\u0592\xFD\x03" +
		"\x02\x02\x02\u0593\u0597\x05\u01FA\xFE\x02\u0594\u0597\x07\x8D\x02\x02" +
		"\u0595\u0597\x05\u01FC\xFF\x02\u0596\u0593\x03\x02\x02\x02\u0596\u0594" +
		"\x03\x02\x02\x02\u0596\u0595\x03\x02\x02\x02\u0597\xFF\x03\x02\x02\x02" +
		"\u0598\u059A\x05\u0164\xB3\x02\u0599\u0598\x03\x02\x02\x02\u0599\u059A" +
		"\x03\x02\x02\x02\u059A\u059C\x03\x02\x02\x02\u059B\u059D\x05\u0148\xA5" +
		"\x02\u059C\u059B\x03\x02\x02\x02\u059C\u059D\x03\x02\x02\x02\u059D\u059E" +
		"\x03\x02\x02\x02\u059E\u059F\x07*\x02\x02\u059F\u05A1\x05\u0102\x82\x02" +
		"\u05A0\u05A2\x05t;\x02\u05A1\u05A0\x03\x02\x02\x02\u05A1\u05A2\x03\x02" +
		"\x02\x02\u05A2\u05A4\x03\x02\x02\x02\u05A3\u05A5\x05\u01CE\xE8\x02\u05A4" +
		"\u05A3\x03\x02\x02\x02\u05A4\u05A5\x03\x02\x02\x02\u05A5\u05A6\x03\x02" +
		"\x02\x02\u05A6\u05A7\x05\u0104\x83\x02\u05A7\u0101\x03\x02\x02\x02\u05A8" +
		"\u05A9\x05\u01D4\xEB\x02\u05A9\u0103\x03\x02\x02\x02\u05AA\u05AC\x07k" +
		"\x02\x02\u05AB\u05AD\x05\x8CG\x02\u05AC\u05AB\x03\x02\x02\x02\u05AC\u05AD" +
		"\x03\x02\x02\x02\u05AD\u05AE\x03\x02\x02\x02\u05AE\u05AF\x07n\x02\x02" +
		"\u05AF\u0105\x03\x02\x02\x02\u05B0\u05B2\x05\u0164\xB3\x02\u05B1\u05B0" +
		"\x03\x02\x02\x02\u05B1\u05B2\x03\x02\x02\x02\u05B2\u05B4\x03\x02\x02\x02" +
		"\u05B3\u05B5\x05\u0148\xA5\x02\u05B4\u05B3\x03\x02\x02\x02\u05B4\u05B5" +
		"\x03\x02\x02\x02\u05B5\u05B6\x03\x02\x02\x02\u05B6\u05B7\x07+\x02\x02" +
		"\u05B7\u05B9\x05\u0108\x85\x02\u05B8\u05BA\x05t;\x02\u05B9\u05B8\x03\x02" +
		"\x02\x02\u05B9\u05BA\x03\x02\x02\x02\u05BA\u05BC\x03\x02\x02\x02\u05BB" +
		"\u05BD\x05\u01CE\xE8\x02\u05BC\u05BB\x03\x02\x02\x02\u05BC\u05BD\x03\x02" +
		"\x02\x02\u05BD\u05BE\x03\x02\x02\x02\u05BE\u05BF\x05\u010A\x86\x02\u05BF" +
		"\u0107\x03\x02\x02\x02\u05C0\u05C1\x05\u01D4\xEB\x02\u05C1\u0109\x03\x02" +
		"\x02\x02\u05C2\u05C4\x07k\x02\x02\u05C3\u05C5\x05\x8CG\x02\u05C4\u05C3" +
		"\x03\x02\x02\x02\u05C4\u05C5\x03\x02\x02\x02\u05C5\u05C6\x03\x02\x02\x02" +
		"\u05C6\u05C7\x07n\x02\x02\u05C7\u010B\x03\x02\x02\x02\u05C8\u05CA\x05" +
		"\u0164\xB3\x02\u05C9\u05C8\x03\x02\x02\x02\u05C9\u05CA\x03\x02\x02\x02" +
		"\u05CA\u05CC\x03\x02\x02\x02\u05CB\u05CD\x05\u0148\xA5\x02\u05CC\u05CB" +
		"\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02\u05CD\u05CE\x03\x02\x02\x02" +
		"\u05CE\u05CF\x07-\x02\x02\u05CF\u05D1\x05\u010E\x88\x02\u05D0\u05D2\x05" +
		"\u01CE\xE8\x02\u05D1\u05D0\x03\x02\x02\x02\u05D1\u05D2\x03\x02\x02\x02" +
		"\u05D2\u05D3\x03\x02\x02\x02\u05D3\u05D4\x05\u0110\x89\x02\u05D4\u010D" +
		"\x03\x02\x02\x02\u05D5\u05D6\x05\u01D4\xEB\x02\u05D6\u010F\x03\x02\x02" +
		"\x02\u05D7\u05D9\x07k\x02\x02\u05D8\u05DA\x05\u0114\x8B\x02\u05D9\u05D8" +
		"\x03\x02\x02\x02\u05D9\u05DA\x03\x02\x02\x02\u05DA\u05DB\x03\x02\x02\x02" +
		"\u05DB\u05DC\x07n\x02\x02\u05DC\u0111\x03\x02\x02\x02\u05DD\u05E3\x05" +
		"\u0116\x8C\x02\u05DE\u05E3\x05\u0118\x8D\x02\u05DF\u05E3\x05\u011A\x8E" +
		"\x02\u05E0\u05E3\x05\u011C\x8F\x02\u05E1\u05E3\x05\u011E\x90\x02\u05E2" +
		"\u05DD\x03\x02\x02\x02\u05E2\u05DE\x03\x02\x02\x02\u05E2\u05DF\x03\x02" +
		"\x02\x02\u05E2\u05E0\x03\x02\x02\x02\u05E2\u05E1\x03\x02\x02\x02\u05E3" +
		"\u0113\x03\x02\x02\x02\u05E4\u05E6\x05\u0112\x8A\x02\u05E5\u05E7\x05\u0114" +
		"\x8B\x02\u05E6\u05E5\x03\x02\x02\x02\u05E6\u05E7\x03\x02\x02\x02\u05E7" +
		"\u0115\x03\x02\x02\x02\u05E8\u05E9\x05\xA4S\x02\u05E9\u05EA\x05\xA6T\x02" +
		"\u05EA\u05EB\x05\u01B8\xDD\x02\u05EB\u05EC\x05\xB0Y\x02\u05EC\u0117\x03" +
		"\x02\x02\x02\u05ED\u05EE\x05\xC6d\x02\u05EE\u05F0\x05\xC8e\x02\u05EF\u05F1" +
		"\x05t;\x02\u05F0\u05EF\x03\x02\x02\x02\u05F0\u05F1\x03\x02\x02\x02\u05F1" +
		"\u05F2\x03\x02\x02\x02\u05F2\u05F3\x05\xCAf\x02\u05F3\u0119\x03\x02\x02" +
		"\x02\u05F4\u05F6\x05\u0122\x92\x02\u05F5\u05F7\x05t;\x02\u05F6\u05F5\x03" +
		"\x02\x02\x02\u05F6\u05F7\x03\x02\x02\x02\u05F7\u05F8\x03\x02\x02\x02\u05F8" +
		"\u05FA\x05\xD2j\x02\u05F9\u05FB\x073\x02\x02\u05FA\u05F9\x03\x02\x02\x02" +
		"\u05FA\u05FB\x03\x02\x02\x02\u05FB\u0604\x03\x02\x02\x02\u05FC\u05FE\x05" +
		"\u0122\x92\x02\u05FD\u05FF\x05t;\x02\u05FE\u05FD\x03\x02\x02\x02\u05FE" +
		"\u05FF\x03\x02\x02\x02\u05FF\u0600\x03\x02\x02\x02\u0600\u0601\x05\xD2" +
		"j\x02\u0601\u0602\x074\x02\x02\u0602\u0604\x03\x02\x02\x02\u0603\u05F4" +
		"\x03\x02\x02\x02\u0603\u05FC\x03\x02\x02\x02\u0604\u011B\x03\x02\x02\x02" +
		"\u0605\u0606\x05\u012E\x98\x02\u0606\u0607\x05\u0130\x99\x02\u0607\u0608" +
		"\x05\xB0Y\x02\u0608\u011D\x03\x02\x02\x02\u0609\u060B\x05\u0164\xB3\x02" +
		"\u060A\u0609\x03\x02\x02\x02\u060A\u060B\x03\x02\x02\x02\u060B\u060D\x03" +
		"\x02\x02\x02\u060C\u060E\x05\u0148\xA5\x02\u060D\u060C\x03\x02\x02\x02" +
		"\u060D\u060E\x03\x02\x02\x02\u060E\u060F\x03\x02\x02\x02\u060F\u0610\x07" +
		"7\x02\x02\u0610\u0612\x05\xC0a\x02\u0611\u0613\x05\u01CE\xE8\x02\u0612" +
		"\u0611\x03\x02\x02\x02\u0612\u0613\x03\x02\x02\x02\u0613\u0615\x03\x02" +
		"\x02\x02\u0614\u0616\x05\xC2b\x02\u0615\u0614\x03\x02\x02\x02\u0615\u0616" +
		"\x03\x02\x02\x02\u0616\u011F\x03\x02\x02\x02\u0617\u0619\x05\u0122\x92" +
		"\x02\u0618\u061A\x05t;\x02\u0619\u0618\x03\x02\x02\x02\u0619\u061A\x03" +
		"\x02\x02\x02\u061A\u061B\x03\x02\x02\x02\u061B\u061D\x05\xD2j\x02\u061C" +
		"\u061E\x073\x02\x02\u061D\u061C\x03\x02\x02\x02\u061D\u061E\x03\x02\x02" +
		"\x02\u061E\u061F\x03\x02\x02\x02\u061F\u0620\x05\u0124\x93\x02\u0620\u062A" +
		"\x03\x02\x02\x02\u0621\u0623\x05\u0122\x92\x02\u0622\u0624\x05t;\x02\u0623" +
		"\u0622\x03\x02\x02\x02\u0623\u0624\x03\x02\x02\x02\u0624\u0625\x03\x02" +
		"\x02\x02\u0625\u0626\x05\xD2j\x02\u0626\u0627\x074\x02\x02\u0627\u0628" +
		"\x05\u0124\x93\x02\u0628\u062A\x03";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\x02\u0629\u0617\x03\x02\x02\x02\u0629\u0621\x03\x02\x02\x02\u062A" +
		"\u0121\x03\x02\x02\x02\u062B\u062D\x05\u0164\xB3\x02\u062C\u062B\x03\x02" +
		"\x02\x02\u062C\u062D\x03\x02\x02\x02\u062D\u062F\x03\x02\x02\x02\u062E" +
		"\u0630\x05\u0146\xA4\x02\u062F\u062E\x03\x02\x02\x02\u062F\u0630\x03\x02" +
		"\x02\x02\u0630\u0631\x03\x02\x02\x02\u0631\u0643\x078\x02\x02\u0632\u0634" +
		"\x05\u0164\xB3\x02\u0633\u0632\x03\x02\x02\x02\u0633\u0634\x03\x02\x02" +
		"\x02\u0634\u0636\x03\x02\x02\x02\u0635\u0637\x05\u0146\xA4\x02\u0636\u0635" +
		"\x03\x02\x02\x02\u0636\u0637\x03\x02\x02\x02\u0637\u0638\x03\x02\x02\x02" +
		"\u0638\u0639\x078\x02\x02\u0639\u0643\x07x\x02\x02\u063A\u063C\x05\u0164" +
		"\xB3\x02\u063B\u063A\x03\x02\x02\x02\u063B\u063C\x03\x02\x02\x02\u063C" +
		"\u063E\x03\x02\x02\x02\u063D\u063F\x05\u0146\xA4\x02\u063E\u063D\x03\x02" +
		"\x02\x02\u063E\u063F\x03\x02\x02\x02\u063F\u0640\x03\x02\x02\x02\u0640" +
		"\u0641\x078\x02\x02\u0641\u0643\x07w\x02\x02\u0642\u062C\x03\x02\x02\x02" +
		"\u0642\u0633\x03\x02\x02\x02\u0642\u063B\x03\x02\x02\x02\u0643\u0123\x03" +
		"\x02\x02\x02\u0644\u0645\x05\x90I\x02\u0645\u0125\x03\x02\x02\x02\u0646" +
		"\u0648\x05\u0164\xB3\x02\u0647\u0646\x03\x02\x02\x02\u0647\u0648\x03\x02" +
		"\x02\x02\u0648\u0649\x03\x02\x02\x02\u0649\u064A\x079\x02\x02\u064A\u064B" +
		"\x05\x90I\x02\u064B\u0127\x03\x02\x02\x02\u064C\u064E\x05\u0148\xA5\x02" +
		"\u064D\u064C\x03\x02\x02\x02\u064D\u064E\x03\x02\x02\x02\u064E\u064F\x03" +
		"\x02\x02\x02\u064F\u0650\x07:\x02\x02\u0650\u0652\x05\u01BA\xDE\x02\u0651" +
		"\u0653\x05\u01CE\xE8\x02\u0652\u0651\x03\x02\x02\x02\u0652\u0653\x03\x02" +
		"\x02\x02\u0653\u0654\x03\x02\x02\x02\u0654\u0655\x05\u012A\x96\x02\u0655" +
		"\u0129\x03\x02\x02\x02\u0656\u0658\x07k\x02\x02\u0657\u0659\x05\x8CG\x02" +
		"\u0658\u0657\x03\x02\x02\x02\u0658\u0659\x03\x02\x02\x02\u0659\u065A\x03" +
		"\x02\x02\x02\u065A\u065B\x07n\x02\x02\u065B\u012B\x03\x02\x02\x02\u065C" +
		"\u065D\x05\u012E\x98\x02\u065D\u065E\x05\u0130\x99\x02\u065E\u065F\x05" +
		"\x90I\x02\u065F\u0669\x03\x02\x02\x02\u0660\u0661\x05\u012E\x98\x02\u0661" +
		"\u0662\x05\u0130\x99\x02\u0662\u0663\x05\xA8U\x02\u0663\u0669\x03\x02" +
		"\x02\x02\u0664\u0665\x05\u012E\x98\x02\u0665\u0666\x05\u0130\x99\x02\u0666" +
		"\u0667\x05\xB0Y\x02\u0667\u0669\x03\x02\x02\x02\u0668\u065C\x03\x02\x02" +
		"\x02\u0668\u0660\x03\x02\x02\x02\u0668\u0664\x03\x02\x02\x02\u0669\u012D" +
		"\x03\x02\x02\x02\u066A\u066C\x05\u0164\xB3\x02\u066B\u066A\x03\x02\x02" +
		"\x02\u066B\u066C\x03\x02\x02\x02\u066C\u066E\x03\x02\x02\x02\u066D\u066F" +
		"\x05\u0146\xA4\x02\u066E\u066D\x03\x02\x02\x02\u066E\u066F\x03\x02\x02" +
		"\x02\u066F\u0670\x03\x02\x02\x02\u0670\u0671\x07;\x02\x02\u0671\u0672" +
		"\x05\xD2j\x02\u0672\u012F\x03\x02\x02\x02\u0673\u0675\x05\u01E2\xF2\x02" +
		"\u0674\u0676\x05\u0164\xB3\x02\u0675\u0674\x03\x02\x02\x02\u0675\u0676" +
		"\x03\x02\x02\x02\u0676\u0677\x03\x02\x02\x02\u0677\u0678\x05\u01B6\xDC" +
		"\x02\u0678\u0131\x03\x02\x02\x02\u0679\u067D\x05\u0134\x9B\x02\u067A\u067D" +
		"\x05\u0136\x9C\x02\u067B\u067D\x05\u0138\x9D\x02\u067C\u0679\x03\x02\x02" +
		"\x02\u067C\u067A\x03\x02\x02\x02\u067C\u067B\x03\x02\x02\x02\u067D\u0133" +
		"\x03\x02\x02\x02\u067E\u067F\x07<\x02\x02\u067F\u0680\x07=\x02\x02\u0680" +
		"\u0681\x05\u01EE\xF8\x02\u0681\u0682\x07k\x02\x02\u0682\u0683\x07n\x02" +
		"\x02\u0683\u0135\x03\x02\x02\x02\u0684\u0685\x07>\x02\x02\u0685\u0686" +
		"\x07=\x02\x02\u0686\u0687\x05\u01EE\xF8\x02\u0687\u0688\x07k\x02\x02\u0688" +
		"\u0689\x07n\x02\x02\u0689\u0137\x03\x02\x02\x02\u068A\u068B\x07?\x02\x02" +
		"\u068B\u068C\x07=\x02\x02\u068C\u068D\x05\u01EE\xF8\x02\u068D\u068E\x07" +
		"k\x02\x02\u068E\u068F\x05\u013A\x9E\x02\u068F\u0690\x07n\x02\x02\u0690" +
		"\u0139\x03\x02\x02\x02\u0691\u0693\x05\u013C\x9F\x02\u0692\u0691\x03\x02" +
		"\x02\x02\u0692\u0693\x03\x02\x02\x02\u0693\u0695\x03\x02\x02\x02\u0694" +
		"\u0696\x05\u0140\xA1\x02\u0695\u0694\x03\x02\x02\x02\u0695\u0696\x03\x02" +
		"\x02\x02\u0696\u013B\x03\x02\x02\x02\u0697\u0698\x07@\x02\x02\u0698\u0699" +
		"\x05\u013E\xA0\x02\u0699\u013D\x03\x02\x02\x02\u069A\u069B\x05\u0200\u0101" +
		"\x02\u069B\u013F\x03\x02\x02\x02\u069C\u069D\x07A\x02\x02\u069D\u069E" +
		"\x05\u0142\xA2\x02\u069E\u0141\x03\x02\x02\x02\u069F\u06A0\t\x06\x02\x02" +
		"\u06A0\u0143\x03\x02\x02\x02\u06A1\u06BB\x07+\x02\x02\u06A2\u06BB\x07" +
		"E\x02\x02\u06A3\u06BB\x07F\x02\x02\u06A4\u06BB\x07G\x02\x02\u06A5\u06BB" +
		"\x07?\x02\x02\u06A6\u06BB\x07H\x02\x02\u06A7\u06BB\x07I\x02\x02\u06A8" +
		"\u06BB\x07J\x02\x02\u06A9\u06BB\x07K\x02\x02\u06AA\u06BB\x07L\x02\x02" +
		"\u06AB\u06BB\x07>\x02\x02\u06AC\u06BB\x07<\x02\x02\u06AD\u06BB\x07M\x02" +
		"\x02\u06AE\u06BB\x07N\x02\x02\u06AF\u06BB\x07O\x02\x02\u06B0\u06B1\x07" +
		"O\x02\x02\u06B1\u06B2\x07l\x02\x02\u06B2\u06B3\x07P\x02\x02\u06B3\u06BB" +
		"\x07o\x02\x02\u06B4\u06B5\x07O\x02\x02\u06B5\u06B6\x07l\x02\x02\u06B6" +
		"\u06B7\x07Q\x02\x02\u06B7\u06BB\x07o\x02\x02\u06B8\u06BB\x07R\x02\x02" +
		"\u06B9\u06BB\x05\u0148\xA5\x02\u06BA\u06A1\x03\x02\x02\x02\u06BA\u06A2" +
		"\x03\x02\x02\x02\u06BA\u06A3\x03\x02\x02\x02\u06BA\u06A4\x03\x02\x02\x02" +
		"\u06BA\u06A5\x03\x02\x02\x02\u06BA\u06A6\x03\x02\x02\x02\u06BA\u06A7\x03" +
		"\x02\x02\x02\u06BA\u06A8\x03\x02\x02\x02\u06BA\u06A9\x03\x02\x02\x02\u06BA" +
		"\u06AA\x03\x02\x02\x02\u06BA\u06AB\x03\x02\x02\x02\u06BA\u06AC\x03\x02" +
		"\x02\x02\u06BA\u06AD\x03\x02\x02\x02\u06BA\u06AE\x03\x02\x02\x02\u06BA" +
		"\u06AF\x03\x02\x02\x02\u06BA\u06B0\x03\x02\x02\x02\u06BA\u06B4\x03\x02" +
		"\x02\x02\u06BA\u06B8\x03\x02\x02\x02\u06BA\u06B9\x03\x02\x02\x02\u06BB" +
		"\u0145\x03\x02\x02\x02\u06BC\u06BE\x05\u0144\xA3\x02\u06BD\u06BF\x05\u0146" +
		"\xA4\x02\u06BE\u06BD\x03\x02\x02\x02\u06BE\u06BF\x03\x02\x02\x02\u06BF" +
		"\u0147\x03\x02\x02\x02\u06C0\u06D0\x07S\x02\x02\u06C1\u06C2\x07S\x02\x02" +
		"\u06C2\u06C3\x07l\x02\x02\u06C3\u06C4\x070\x02\x02\u06C4\u06D0\x07o\x02" +
		"\x02\u06C5\u06D0\x07T\x02\x02\u06C6\u06C7\x07T\x02\x02\u06C7\u06C8\x07" +
		"l\x02\x02\u06C8\u06C9\x070\x02\x02\u06C9\u06D0\x07o\x02\x02\u06CA\u06D0" +
		"\x07U\x02\x02\u06CB\u06CC\x07U\x02\x02\u06CC\u06CD\x07l\x02\x02\u06CD" +
		"\u06CE\x070\x02\x02\u06CE\u06D0\x07o\x02\x02\u06CF\u06C0\x03\x02\x02\x02" +
		"\u06CF\u06C1\x03\x02\x02\x02\u06CF\u06C5\x03\x02\x02\x02\u06CF\u06C6\x03" +
		"\x02\x02\x02\u06CF\u06CA\x03\x02\x02\x02\u06CF\u06CB\x03\x02\x02\x02\u06D0" +
		"\u0149\x03\x02\x02\x02\u06D1\u06D2\b\xA6\x01\x02\u06D2\u06D4\x05\u014C" +
		"\xA7\x02\u06D3\u06D5\x05\u01B8\xDD\x02\u06D4\u06D3\x03\x02\x02\x02\u06D4" +
		"\u06D5\x03\x02\x02\x02\u06D5\u06E5\x03\x02\x02\x02\u06D6\u06D8\x05\u014E" +
		"\xA8\x02\u06D7\u06D9\x05\u01B8\xDD\x02\u06D8\u06D7\x03\x02\x02\x02\u06D8" +
		"\u06D9\x03\x02\x02\x02\u06D9\u06E5\x03\x02\x02\x02\u06DA\u06E5\x05\u0150" +
		"\xA9\x02\u06DB\u06DD\x05\u0152\xAA\x02\u06DC\u06DE\x05\u01B8\xDD\x02\u06DD" +
		"\u06DC\x03\x02\x02\x02\u06DD\u06DE\x03\x02\x02\x02\u06DE\u06E5\x03\x02" +
		"\x02\x02\u06DF\u06E5\x05\u0158\xAD\x02\u06E0\u06E5\x05\u015A\xAE\x02\u06E1" +
		"\u06E2\x07V\x02\x02\u06E2\u06E5\x05\u01B6\xDC\x02\u06E3\u06E5\x05\u015C" +
		"\xAF\x02\u06E4\u06D1\x03\x02\x02\x02\u06E4\u06D6\x03\x02\x02\x02\u06E4" +
		"\u06DA\x03\x02\x02\x02\u06E4\u06DB\x03\x02\x02\x02\u06E4\u06DF\x03\x02" +
		"\x02\x02\u06E4\u06E0\x03\x02\x02\x02\u06E4\u06E1\x03\x02\x02\x02\u06E4" +
		"\u06E3\x03\x02\x02\x02\u06E5\u06EB\x03\x02\x02\x02\u06E6\u06E7\f\x04\x02" +
		"\x02\u06E7\u06E8\x07W\x02\x02\u06E8\u06EA\x05\u01B6\xDC\x02\u06E9\u06E6" +
		"\x03\x02\x02\x02\u06EA\u06ED\x03\x02\x02\x02\u06EB\u06E9\x03\x02\x02\x02" +
		"\u06EB\u06EC\x03\x02\x02\x02\u06EC\u014B\x03\x02\x02\x02\u06ED\u06EB\x03" +
		"\x02\x02\x02\u06EE\u06EF\x07v\x02\x02\u06EF\u014D\x03\x02\x02\x02\u06F0" +
		"\u06F1\x05\u01D4\xEB\x02\u06F1\u014F\x03\x02\x02\x02\u06F2\u06F3\x07\b" +
		"\x02\x02\u06F3\u06F7\x05\u014A\xA6\x02\u06F4\u06F5\x07\x07\x02\x02\u06F5" +
		"\u06F7\x05\u014A\xA6\x02\u06F6\u06F2\x03\x02\x02\x02\u06F6\u06F4\x03\x02" +
		"\x02\x02\u06F7\u0151\x03\x02\x02\x02\u06F8\u06FA\x07l\x02\x02\u06F9\u06FB" +
		"\x05\u0154\xAB\x02\u06FA\u06F9\x03\x02\x02\x02\u06FA\u06FB\x03\x02\x02" +
		"\x02\u06FB\u06FC\x03\x02\x02\x02\u06FC\u06FD\x07o\x02\x02\u06FD\u0153" +
		"\x03\x02\x02\x02\u06FE\u0703\x05\u0156\xAC\x02\u06FF\u0700\x07q\x02\x02" +
		"\u0700\u0702\x05\u0156\xAC\x02\u0701\u06FF\x03\x02\x02\x02\u0702\u0705" +
		"\x03\x02\x02\x02\u0703\u0701\x03\x02\x02\x02\u0703\u0704\x03\x02\x02\x02" +
		"\u0704\u0155\x03\x02\x02\x02\u0705\u0703\x03\x02\x02\x02\u0706\u0707\x05" +
		"\u014A\xA6\x02\u0707\u0157\x03\x02\x02\x02\u0708\u070A\x05\u01BA\xDE\x02" +
		"\u0709\u0708\x03\x02\x02\x02\u0709\u070A\x03\x02\x02\x02\u070A\u070B\x03" +
		"\x02\x02\x02\u070B\u070C\x07j\x02\x02\u070C\u070E\x05\xEEx\x02\u070D\u070F" +
		"\x05\u0152\xAA\x02\u070E\u070D\x03\x02\x02\x02\u070E\u070F\x03\x02\x02" +
		"\x02\u070F\u0159\x03\x02\x02\x02\u0710\u0711\x05\u014E\xA8\x02\u0711\u0712" +
		"\x07x\x02\x02\u0712\u015B\x03\x02\x02\x02\u0713\u0714\x05\u016A\xB6\x02" +
		"\u0714\u015D\x03\x02\x02\x02\u0715\u0717\x07y\x02\x02\u0716\u0715\x03" +
		"\x02\x02\x02\u0716\u0717\x03\x02\x02\x02\u0717\u0718\x03\x02\x02\x02\u0718" +
		"\u071A\x05\u0160\xB1\x02\u0719\u071B\x05\u0162\xB2\x02\u071A\u0719\x03" +
		"\x02\x02\x02\u071A\u071B\x03\x02\x02\x02\u071B\u015F\x03\x02\x02\x02\u071C" +
		"\u071D\x05\u01D4\xEB\x02\u071D\u0161\x03\x02\x02\x02\u071E\u0720\x07l" +
		"\x02\x02\u071F\u0721\x05\u0166\xB4\x02\u0720\u071F\x03\x02\x02\x02\u0720" +
		"\u0721\x03\x02\x02\x02\u0721\u0722\x03\x02\x02\x02\u0722\u0723\x07o\x02" +
		"\x02\u0723\u0163\x03\x02\x02\x02\u0724\u0726\x05\u015E\xB0\x02\u0725\u0724" +
		"\x03\x02\x02\x02\u0726\u0727\x03\x02\x02\x02\u0727\u0725\x03\x02\x02\x02" +
		"\u0727\u0728\x03\x02\x02\x02\u0728\u0165\x03\x02\x02\x02\u0729\u072B\x05" +
		"\u0168\xB5\x02\u072A\u0729\x03\x02\x02\x02\u072B\u072C\x03\x02\x02\x02" +
		"\u072C\u072A\x03\x02\x02\x02\u072C\u072D\x03\x02\x02\x02\u072D\u0167\x03" +
		"\x02\x02\x02\u072E\u0730\x07l\x02\x02\u072F\u0731\x05\u0166\xB4\x02\u0730" +
		"\u072F\x03\x02\x02\x02\u0730\u0731\x03\x02\x02\x02\u0731\u0732\x03\x02" +
		"\x02\x02\u0732\u0743\x07o\x02\x02\u0733\u0735\x07m\x02\x02\u0734\u0736" +
		"\x05\u0166\xB4\x02\u0735\u0734\x03\x02\x02\x02\u0735\u0736\x03\x02\x02" +
		"\x02\u0736\u0737\x03\x02\x02\x02\u0737\u0743\x07p\x02\x02\u0738\u073A" +
		"\x07k\x02\x02\u0739\u073B\x05\u0166\xB4\x02\u073A\u0739\x03\x02\x02\x02" +
		"\u073A\u073B\x03\x02\x02\x02\u073B\u073C\x03\x02\x02\x02\u073C\u0743\x07" +
		"n\x02\x02\u073D\u0743\x05\u01D4\xEB\x02\u073E\u0743\x05\u016A\xB6\x02" +
		"\u073F\u0743\x05\u01D8\xED\x02\u0740\u0743\x05\u01F8\xFD\x02\u0741\u0743" +
		"\x05\u01EE\xF8\x02\u0742\u072E\x03\x02\x02\x02\u0742\u0733\x03\x02\x02" +
		"\x02\u0742\u0738\x03\x02\x02\x02\u0742\u073D\x03\x02\x02\x02\u0742\u073E" +
		"\x03\x02\x02\x02\u0742\u073F\x03\x02\x02\x02\u0742\u0740\x03\x02\x02\x02" +
		"\u0742\u0741\x03\x02\x02\x02\u0743\u0169\x03\x02\x02\x02\u0744\u0746\x05" +
		"\u0172\xBA\x02\u0745\u0744\x03\x02\x02\x02\u0745\u0746\x03\x02\x02\x02" +
		"\u0746\u0747\x03\x02\x02\x02\u0747\u0749\x05\u016E\xB8\x02\u0748\u074A" +
		"\x05\u0176\xBC\x02\u0749\u0748\x03\x02\x02\x02\u0749\u074A\x03\x02\x02" +
		"\x02\u074A\u016B\x03\x02\x02\x02\u074B\u0750\x05\u016A\xB6\x02\u074C\u074D" +
		"\x07q\x02\x02\u074D\u074F\x05\u016A\xB6\x02\u074E\u074C\x03\x02\x02\x02" +
		"\u074F\u0752\x03\x02\x02\x02\u0750\u074E\x03\x02\x02\x02\u0750\u0751\x03" +
		"\x02\x02\x02\u0751\u016D\x03\x02\x02\x02\u0752\u0750\x03\x02\x02\x02\u0753" +
		"\u0754\x05\u01EA\xF6\x02\u0754\u0755\x05\u01AE\xD8\x02\u0755\u0759\x03" +
		"\x02\x02\x02\u0756\u0759\x05\u01AE\xD8\x02\u0757\u0759\x05\u0170\xB9\x02" +
		"\u0758\u0753\x03\x02\x02\x02\u0758\u0756\x03\x02\x02\x02\u0758\u0757\x03" +
		"\x02\x02\x02\u0759\u016F\x03\x02\x02\x02\u075A\u075B\x07z\x02\x02\u075B" +
		"\u075C\x05\u01D4\xEB\x02\u075C\u0171\x03\x02\x02\x02\u075D\u075E\x07X" +
		"\x02\x02\u075E\u0763\x07x\x02\x02\u075F\u0760\x07X\x02\x02\u0760\u0763" +
		"\x07w\x02\x02\u0761\u0763\x07X\x02\x02\u0762\u075D\x03\x02\x02\x02\u0762" +
		"\u075F\x03\x02\x02\x02\u0762\u0761\x03\x02\x02\x02\u0763\u0173\x03\x02" +
		"\x02\x02\u0764\u0765\x05\u01E8\xF5\x02\u0765\u0766\x05\u016E\xB8\x02\u0766" +
		"\u076F\x03\x02\x02\x02\u0767\u0769\x05\u0178\xBD\x02\u0768\u076A\x05\u0172" +
		"\xBA\x02\u0769\u0768\x03\x02\x02\x02\u0769\u076A\x03\x02\x02\x02\u076A" +
		"\u076B\x03\x02\x02\x02\u076B\u076C\x05\u016E\xB8\x02\u076C\u076F\x03\x02" +
		"\x02\x02\u076D\u076F\x05\u017A\xBE\x02\u076E\u0764\x03\x02\x02\x02\u076E" +
		"\u0767\x03\x02\x02\x02\u076E\u076D\x03\x02\x02\x02\u076F\u0175\x03\x02" +
		"\x02\x02\u0770\u0772\x05\u0174\xBB\x02\u0771\u0770\x03\x02\x02\x02\u0772" +
		"\u0773\x03\x02\x02\x02\u0773\u0771\x03\x02\x02\x02\u0773\u0774\x03\x02" +
		"\x02\x02\u0774\u0177\x03\x02\x02\x02\u0775\u0777\x07x\x02\x02\u0776\u0778" +
		"\x05\u0172\xBA\x02\u0777\u0776\x03\x02\x02\x02\u0777\u0778\x03\x02\x02" +
		"\x02\u0778\u0779\x03\x02\x02\x02\u0779\u077A\x05\u016A\xB6\x02\u077A\u077B" +
		"\x07r\x02\x02\u077B\u0179\x03\x02\x02\x02\u077C\u077D\x07V\x02\x02\u077D" +
		"\u0787\x05\u01B6\xDC\x02\u077E\u077F\x07W\x02\x02\u077F\u0787\x05\u01B6" +
		"\xDC\x02\u0780\u0781\x07W\x02\x02\u0781\u0782\x07x\x02\x02\u0782\u0787" +
		"\x05\u01B6\xDC\x02\u0783\u0784\x07W\x02\x02\u0784\u0785\x07w\x02\x02\u0785" +
		"\u0787\x05\u01B6\xDC\x02\u0786\u077C\x03\x02\x02\x02\u0786\u077E\x03\x02" +
		"\x02\x02\u0786\u0780\x03\x02\x02\x02\u0786\u0783\x03\x02\x02\x02\u0787" +
		"\u017B\x03\x02\x02\x02\u0788\u078A\x05\u01D4\xEB\x02\u0789\u078B\x05\x84" +
		"C\x02\u078A\u0789\x03\x02\x02\x02\u078A\u078B\x03\x02\x02\x02\u078B\u0795" +
		"\x03\x02\x02\x02\u078C\u0795\x05\u0180\xC1\x02\u078D\u0795\x05\u018E\xC8" +
		"\x02\u078E\u0795\x05\u0190\xC9\x02\u078F\u0795\x05\u0198\xCD\x02\u0790" +
		"\u0795\x05\u01A4\xD3\x02\u0791\u0795\x05\u017E\xC0\x02\u0792\u0795\x05" +
		"\u01AA\xD6\x02\u0793\u0795\x05\u01AC\xD7\x02\u0794\u0788\x03\x02\x02\x02" +
		"\u0794\u078C\x03\x02\x02\x02\u0794\u078D\x03\x02\x02\x02\u0794\u078E\x03" +
		"\x02\x02\x02\u0794\u078F\x03\x02\x02\x02\u0794\u0790\x03\x02\x02\x02\u0794" +
		"\u0791\x03\x02\x02\x02\u0794\u0792\x03\x02\x02\x02\u0794\u0793\x03\x02" +
		"\x02\x02\u0795\u017D\x03\x02\x02\x02\u0796\u0797\x07j\x02\x02\u0797\u0798" +
		"\x05\u01D4\xEB\x02\u0798\u017F\x03\x02\x02\x02\u0799\u07A1\x05\u01F8\xFD" +
		"\x02\u079A\u07A1\x05\u0182\xC2\x02\u079B\u07A1\x05\u0188\xC5\x02\u079C" +
		"\u07A1\x07Y\x02\x02\u079D\u07A1\x07Z\x02\x02\u079E\u07A1\x07[\x02\x02" +
		"\u079F\u07A1\x07\\\x02\x02\u07A0\u0799\x03\x02\x02\x02\u07A0\u079A\x03" +
		"\x02\x02\x02\u07A0\u079B\x03\x02\x02\x02\u07A0\u079C\x03\x02\x02\x02\u07A0" +
		"\u079D\x03\x02\x02\x02\u07A0\u079E\x03\x02\x02\x02\u07A0\u079F\x03\x02" +
		"\x02\x02\u07A1\u0181\x03\x02\x02\x02\u07A2\u07A4\x07m\x02\x02\u07A3\u07A5" +
		"\x05\u0184\xC3\x02\u07A4\u07A3\x03\x02\x02\x02\u07A4\u07A5\x03\x02\x02" +
		"\x02\u07A5\u07A6\x03\x02\x02\x02\u07A6\u07A7\x07p\x02\x02\u07A7\u0183" +
		"\x03\x02\x02\x02\u07A8\u07AD\x05\u0186\xC4\x02\u07A9\u07AA\x07q\x02\x02" +
		"\u07AA\u07AC\x05\u0186\xC4\x02\u07AB\u07A9\x03\x02\x02\x02\u07AC\u07AF" +
		"\x03\x02\x02\x02\u07AD\u07AB\x03\x02\x02\x02\u07AD\u07AE\x03\x02\x02\x02" +
		"\u07AE\u07B1\x03\x02\x02\x02\u07AF\u07AD\x03\x02\x02\x02\u07B0\u07B2\x07" +
		"q\x02\x02\u07B1\u07B0\x03\x02\x02\x02\u07B1\u07B2\x03\x02\x02\x02\u07B2" +
		"\u0185\x03\x02\x02\x02\u07B3\u07B4\x05\u016A\xB6\x02\u07B4\u0187\x03\x02" +
		"\x02\x02\u07B5\u07B6\x07m\x02\x02\u07B6\u07B7\x05\u018A\xC6\x02\u07B7" +
		"\u07B8\x07p\x02\x02\u07B8\u07BD\x03\x02\x02\x02\u07B9\u07BA\x07m\x02\x02" +
		"\u07BA\u07BB\x07r\x02\x02\u07BB\u07BD\x07p\x02\x02\u07BC\u07B5\x03\x02" +
		"\x02\x02\u07BC\u07B9\x03\x02\x02\x02\u07BD\u0189\x03\x02\x02\x02\u07BE" +
		"\u07C3\x05\u018C\xC7\x02\u07BF\u07C0\x07q\x02\x02\u07C0\u07C2\x05\u018C" +
		"\xC7\x02\u07C1\u07BF\x03\x02\x02\x02\u07C2\u07C5\x03\x02\x02\x02\u07C3" +
		"\u07C1\x03\x02\x02\x02\u07C3\u07C4\x03\x02\x02\x02\u07C4\u07C7\x03\x02" +
		"\x02\x02\u07C5\u07C3\x03\x02\x02\x02\u07C6\u07C8\x07q\x02\x02\u07C7\u07C6" +
		"\x03\x02\x02\x02\u07C7\u07C8\x03\x02\x02\x02\u07C8\u018B\x03\x02\x02\x02" +
		"\u07C9\u07CA\x05\u016A\xB6\x02\u07CA\u07CB\x07r\x02\x02\u07CB\u07CC\x05" +
		"\u016A\xB6\x02\u07CC\u018D\x03\x02\x02\x02\u07CD\u07DA\x07]\x02\x02\u07CE" +
		"\u07CF\x07]\x02\x02\u07CF\u07D0\x07j\x02\x02\u07D0\u07DA\x05\u01D4\xEB" +
		"\x02\u07D1\u07D2\x07]\x02\x02\u07D2\u07D3\x07m\x02\x02\u07D3\u07D4\x05" +
		"\u016C\xB7\x02\u07D4\u07D5\x07p\x02\x02\u07D5\u07DA\x03\x02\x02\x02\u07D6" +
		"\u07D7\x07]\x02\x02\u07D7\u07D8\x07j\x02\x02\u07D8\u07DA\x078\x02\x02" +
		"\u07D9\u07CD\x03\x02\x02\x02\u07D9\u07CE\x03\x02\x02\x02\u07D9\u07D1\x03" +
		"\x02\x02\x02\u07D9\u07D6\x03\x02\x02\x02\u07DA\u018F\x03\x02\x02\x02\u07DB" +
		"\u07DF\x05\u0192\xCA\x02\u07DC\u07DF\x05\u0194\xCB\x02\u07DD\u07DF\x05" +
		"\u0196\xCC\x02\u07DE\u07DB\x03\x02\x02\x02\u07DE\u07DC\x03\x02\x02\x02" +
		"\u07DE\u07DD\x03\x02\x02\x02\u07DF\u0191\x03\x02\x02\x02\u07E0\u07E1\x07" +
		"^\x02\x02\u07E1\u07E2\x07j\x02\x02\u07E2\u07E3\x05\u01D4\xEB\x02\u07E3" +
		"\u0193\x03\x02\x02\x02\u07E4\u07E5\x07^\x02\x02\u07E5\u07E6\x07m\x02\x02" +
		"\u07E6\u07E7\x05\u016A\xB6\x02\u07E7\u07E8\x07p\x02\x02\u07E8\u0195\x03" +
		"\x02\x02\x02\u07E9\u07EA\x07^\x02\x02\u07EA\u07EB\x07j\x02\x02\u07EB\u07EC" +
		"\x078\x02\x02\u07EC\u0197\x03\x02\x02\x02\u07ED\u07EF\x07k\x02\x02\u07EE" +
		"\u07F0\x05\u019A\xCE\x02\u07EF\u07EE\x03\x02\x02\x02\u07EF\u07F0\x03\x02" +
		"\x02\x02\u07F0\u07F2\x03\x02\x02\x02\u07F1\u07F3\x05\x06\x04\x02\u07F2" +
		"\u07F1\x03\x02\x02\x02\u07F2\u07F3\x03\x02\x02\x02\u07F3\u07F4\x03\x02" +
		"\x02\x02\u07F4\u07F5\x07n\x02\x02\u07F5\u0199\x03\x02\x02\x02\u07F6\u07F8" +
		"\x05\xD2j\x02\u07F7\u07F9\x05\xCCg\x02\u07F8\u07F7\x03\x02\x02\x02\u07F8" +
		"\u07F9\x03\x02\x02\x02\u07F9\u07FA\x03\x02\x02\x02\u07FA\u07FB\x07\x05" +
		"\x02\x02\u07FB\u0814\x03\x02\x02\x02\u07FC\u07FE\x05\u01D6\xEC\x02\u07FD" +
		"\u07FF\x05\xCCg\x02\u07FE\u07FD\x03\x02\x02\x02\u07FE\u07FF\x03\x02\x02" +
		"\x02\u07FF\u0800\x03\x02\x02\x02\u0800\u0801\x07\x05\x02\x02\u0801\u0814" +
		"\x03\x02\x02\x02\u0802\u0803\x05\u019C\xCF\x02\u0803\u0805\x05\xD2j\x02" +
		"\u0804\u0806\x05\xCCg\x02\u0805\u0804\x03\x02\x02\x02\u0805\u0806\x03" +
		"\x02\x02\x02\u0806\u0807\x03\x02\x02\x02\u0807\u0808\x07\x05\x02\x02\u0808" +
		"\u0814\x03\x02\x02\x02\u0809\u080A\x05\u019C\xCF\x02\u080A\u080C\x05\u01D6" +
		"\xEC\x02\u080B\u080D\x05\xCCg\x02\u080C\u080B\x03\x02\x02\x02\u080C\u080D" +
		"\x03\x02\x02\x02\u080D\u080E\x03\x02\x02\x02\u080E\u080F\x07\x05\x02\x02" +
		"\u080F\u0814\x03\x02\x02\x02\u0810\u0811\x05\u019C\xCF\x02\u0811\u0812" +
		"\x07\x05\x02\x02\u0812\u0814\x03\x02\x02\x02\u0813\u07F6\x03\x02\x02\x02" +
		"\u0813\u07FC\x03\x02\x02\x02\u0813\u0802\x03\x02\x02\x02\u0813\u0809\x03" +
		"\x02\x02\x02\u0813\u0810\x03\x02\x02\x02\u0814\u019B\x03\x02\x02\x02\u0815" +
		"\u0816\x07m\x02\x02\u0816\u0817\x05\u019E\xD0\x02\u0817\u0818\x07p\x02" +
		"\x02\u0818\u019D\x03\x02\x02\x02\u0819\u081E\x05\u01A0\xD1\x02\u081A\u081B" +
		"\x07q\x02\x02\u081B\u081D\x05\u01A0\xD1\x02\u081C\u081A\x03\x02\x02\x02" +
		"\u081D\u0820\x03\x02\x02\x02\u081E\u081C\x03\x02\x02\x02\u081E\u081F\x03" +
		"\x02\x02\x02\u081F\u019F\x03\x02\x02\x02\u0820\u081E\x03\x02\x02\x02\u0821" +
		"\u0823\x05\u01A2\xD2\x02\u0822\u0821\x03\x02\x02\x02\u0822\u0823\x03\x02" +
		"\x02\x02\u0823\u0824\x03\x02\x02\x02\u0824\u0825\x05\u016A\xB6\x02\u0825" +
		"\u01A1\x03\x02\x02\x02\u0826\u0827\t\x07\x02\x02\u0827\u01A3\x03\x02\x02" +
		"\x02\u0828\u082A\x07l\x02\x02\u0829\u082B\x05\u01A6\xD4\x02\u082A\u0829" +
		"\x03\x02\x02\x02\u082A\u082B\x03\x02\x02\x02\u082B\u082C\x03\x02\x02\x02" +
		"\u082C\u082D\x07o\x02\x02\u082D\u01A5\x03\x02\x02\x02\u082E\u0833\x05" +
		"\u01A8\xD5\x02\u082F\u0830\x07q\x02\x02\u0830\u0832\x05\u01A8\xD5\x02" +
		"\u0831\u082F\x03\x02\x02\x02\u0832\u0835\x03\x02\x02\x02\u0833\u0831\x03" +
		"\x02\x02\x02\u0833\u0834\x03\x02\x02\x02\u0834\u01A7\x03\x02\x02\x02\u0835" +
		"\u0833\x03\x02\x02\x02\u0836\u083C\x05\u016A\xB6\x02\u0837\u0838\x05\u01D4" +
		"\xEB\x02\u0838\u0839\x07r\x02\x02\u0839\u083A\x05\u016A\xB6\x02\u083A" +
		"\u083C\x03\x02\x02\x02\u083B\u0836\x03\x02\x02\x02\u083B\u0837\x03\x02" +
		"\x02\x02\u083C\u01A9\x03\x02\x02\x02\u083D\u083E\x07v\x02\x02\u083E\u01AB" +
		"\x03\x02\x02\x02\u083F\u0840\x07a\x02\x02\u0840\u0841\x07l\x02\x02\u0841" +
		"\u0842\x05\u016A\xB6\x02\u0842\u0843\x07o\x02\x02\u0843\u01AD\x03\x02" +
		"\x02\x02\u0844\u0845\b\xD8\x01\x02\u0845\u0846\x05\u017C\xBF\x02\u0846" +
		"\u087C\x03\x02\x02\x02\u0847\u0848\f\x0E\x02\x02\u0848\u087B\x05\u01EC" +
		"\xF7\x02\u0849\u084A\f\r\x02\x02\u084A\u087B\x05\u01A4\xD3\x02\u084B\u084D" +
		"\f\f\x02\x02\u084C\u084E\x05\u01A4\xD3\x02\u084D\u084C\x03\x02\x02\x02" +
		"\u084D\u084E\x03\x02\x02\x02\u084E\u084F\x03\x02\x02\x02\u084F\u087B\x05" +
		"\u01B4\xDB\x02\u0850\u0851\f\v\x02\x02\u0851\u0852\x07j\x02\x02\u0852" +
		"\u087B\x078\x02\x02\u0853\u0854\f\n\x02\x02\u0854\u0855\x07j\x02\x02\u0855" +
		"\u0856\x078\x02\x02\u0856\u0857\x07l\x02\x02\u0857\u0858\x05\u01B0\xD9" +
		"\x02\u0858\u0859\x07o\x02\x02\u0859\u087B\x03\x02\x02\x02\u085A\u085B" +
		"\f\t\x02\x02\u085B\u085C\x07j\x02\x02\u085C\u087B\x07\x8A\x02\x02\u085D" +
		"\u085E\f\b\x02\x02\u085E\u085F\x07j\x02\x02\u085F\u0861\x05\u01D4\xEB" +
		"\x02\u0860\u0862\x05\x84C\x02\u0861\u0860\x03\x02\x02\x02\u0861\u0862" +
		"\x03\x02\x02\x02\u0862\u087B\x03\x02\x02\x02\u0863\u0864\f\x07\x02\x02" +
		"\u0864\u0865\x07j\x02\x02\u0865\u0866\x05\u01D4\xEB\x02\u0866\u0867\x07" +
		"l\x02\x02\u0867\u0868\x05\u01B0\xD9\x02\u0868\u0869\x07o\x02\x02\u0869" +
		"\u087B\x03\x02\x02\x02\u086A\u086B\f\x06\x02\x02\u086B\u086C\x07l\x02" +
		"\x02\u086C\u086D\x05\u01B0\xD9\x02\u086D\u086E\x07o\x02\x02\u086E\u087B" +
		"\x03\x02\x02\x02\u086F\u0870\f\x05\x02\x02\u0870\u0871\x07j\x02\x02\u0871" +
		"\u087B\x07]\x02\x02\u0872\u0873\f\x04\x02\x02\u0873\u0874\x07j\x02\x02" +
		"\u0874\u087B\x07b\x02\x02\u0875\u0876\f\x03\x02\x02\u0876\u0877\x07m\x02" +
		"\x02\u0877\u0878\x05\u016C\xB7\x02\u0878\u0879\x07p\x02\x02\u0879\u087B" +
		"\x03\x02\x02\x02\u087A\u0847\x03\x02\x02\x02\u087A\u0849\x03\x02\x02\x02" +
		"\u087A\u084B\x03\x02\x02\x02\u087A\u0850\x03\x02\x02\x02\u087A\u0853\x03" +
		"\x02\x02\x02\u087A\u085A\x03\x02\x02\x02\u087A\u085D\x03\x02\x02\x02\u087A" +
		"\u0863\x03\x02\x02\x02\u087A\u086A\x03\x02\x02\x02\u087A\u086F\x03\x02" +
		"\x02\x02\u087A\u0872\x03\x02\x02\x02\u087A\u0875\x03\x02\x02\x02\u087B" +
		"\u087E\x03\x02\x02\x02\u087C\u087A\x03\x02\x02\x02\u087C\u087D\x03\x02" +
		"\x02\x02\u087D\u01AF\x03\x02\x02\x02\u087E\u087C\x03\x02\x02\x02\u087F" +
		"\u0881\x05\u01B2\xDA\x02\u0880\u0882\x05\u01B0\xD9\x02\u0881\u0880\x03" +
		"\x02\x02\x02\u0881\u0882\x03\x02\x02\x02\u0882\u01B1\x03\x02\x02\x02\u0883" +
		"\u0884\x05\u01D4\xEB\x02\u0884\u0885\x07r\x02\x02\u0885\u01B3\x03\x02" +
		"\x02\x02\u0886\u0887\x05\u0198\xCD\x02\u0887\u01B5\x03\x02\x02\x02\u0888" +
		"\u0889\b\xDC\x01\x02\u0889\u088A\x07m\x02\x02\u088A\u088B\x05\u01B6\xDC" +
		"\x02\u088B\u088C\x07p\x02\x02\u088C\u0897\x03\x02\x02\x02\u088D\u088E" +
		"\x07m\x02\x02\u088E\u088F\x05\u01B6\xDC\x02\u088F\u0890\x07r\x02\x02\u0890" +
		"\u0891\x05\u01B6\xDC\x02\u0891\u0892\x07p\x02\x02\u0892\u0897\x03\x02" +
		"\x02\x02\u0893\u0897\x05\u01BA\xDE\x02\u0894\u0897\x05\u01BE\xE0\x02\u0895" +
		"\u0897\x05\u01C8\xE5\x02\u0896\u0888\x03\x02\x02\x02\u0896\u088D\x03\x02" +
		"\x02\x02\u0896\u0893\x03\x02\x02\x02\u0896\u0894\x03\x02\x02\x02\u0896" +
		"\u0895\x03\x02\x02\x02\u0897\u08B0\x03\x02\x02\x02\u0898\u089A\f\v\x02" +
		"\x02\u0899\u089B\x073\x02\x02\u089A\u0899\x03\x02\x02\x02\u089A\u089B" +
		"\x03\x02\x02\x02\u089B\u089C\x03\x02\x02\x02\u089C\u089D\x05\u01E2\xF2" +
		"\x02\u089D\u089E\x05\u01B6\xDC\f\u089E\u08AF\x03\x02\x02\x02\u089F\u08A0" +
		"\f\n\x02\x02\u08A0\u08A1\x074\x02\x02\u08A1\u08A2\x05\u01E2\xF2\x02\u08A2" +
		"\u08A3\x05\u01B6\xDC\v\u08A3\u08AF\x03\x02\x02\x02\u08A4\u08A5\f\x07\x02" +
		"\x02\u08A5\u08AF\x07x\x02\x02\u08A6\u08A7\f\x06\x02\x02\u08A7\u08AF\x07" +
		"w\x02\x02\u08A8\u08A9\f\x04\x02\x02\u08A9\u08AA\x07j\x02\x02\u08AA\u08AF" +
		"\x07c\x02\x02\u08AB\u08AC\f\x03\x02\x02\u08AC\u08AD\x07j\x02\x02\u08AD" +
		"\u08AF\x07d\x02\x02\u08AE\u0898\x03\x02\x02\x02\u08AE\u089F\x03\x02\x02" +
		"\x02\u08AE\u08A4\x03\x02\x02\x02\u08AE\u08A6\x03\x02\x02\x02\u08AE\u08A8" +
		"\x03\x02\x02\x02\u08AE\u08AB\x03\x02\x02\x02\u08AF\u08B2\x03\x02\x02\x02" +
		"\u08B0\u08AE\x03\x02\x02\x02\u08B0\u08B1\x03\x02\x02\x02\u08B1\u01B7\x03" +
		"\x02\x02\x02\u08B2\u08B0\x03\x02\x02\x02\u08B3\u08B5\x07r\x02\x02\u08B4" +
		"\u08B6\x05\u0164\xB3\x02\u08B5\u08B4\x03\x02\x02\x02\u08B5\u08B6\x03\x02" +
		"\x02\x02\u08B6\u08B7\x03\x02\x02\x02\u08B7\u08B8\x05\u01B6\xDC\x02\u08B8" +
		"\u01B9\x03\x02\x02\x02\u08B9\u08BB\x05\u01BC\xDF\x02\u08BA\u08BC\x05\x84" +
		"C\x02\u08BB\u08BA\x03\x02\x02\x02\u08BB\u08BC\x03\x02\x02\x02\u08BC\u08C5" +
		"\x03\x02\x02\x02\u08BD\u08BF\x05\u01BC\xDF\x02\u08BE\u08C0\x05\x84C\x02" +
		"\u08BF\u08BE\x03\x02\x02\x02\u08BF\u08C0\x03\x02\x02\x02\u08C0\u08C1\x03" +
		"\x02\x02\x02\u08C1\u08C2\x07j\x02\x02\u08C2\u08C3\x05\u01BA\xDE\x02\u08C3" +
		"\u08C5\x03\x02\x02\x02\u08C4\u08B9\x03\x02\x02\x02\u08C4\u08BD\x03\x02" +
		"\x02\x02\u08C5\u01BB\x03\x02\x02\x02\u08C6\u08C7\x05\u01D4\xEB";
	private static readonly _serializedATNSegment4: string =
		"\x02\u08C7\u01BD\x03\x02\x02\x02\u08C8\u08CA\x07l\x02\x02\u08C9\u08CB" +
		"\x05\u01C0\xE1\x02\u08CA\u08C9\x03\x02\x02\x02\u08CA\u08CB\x03\x02\x02" +
		"\x02\u08CB\u08CC\x03\x02\x02\x02\u08CC\u08CD\x07o\x02\x02\u08CD\u01BF" +
		"\x03\x02\x02\x02\u08CE\u08D0\x05\u01C2\xE2\x02\u08CF\u08D1\x05\u01E4\xF3" +
		"\x02\u08D0\u08CF\x03\x02\x02\x02\u08D0\u08D1\x03\x02\x02\x02\u08D1\u01C1" +
		"\x03\x02\x02\x02\u08D2\u08D8\x05\u01C4\xE3\x02\u08D3\u08D4\x05\u01C4\xE3" +
		"\x02\u08D4\u08D5\x07q\x02\x02\u08D5\u08D6\x05\u01C2\xE2\x02\u08D6\u08D8" +
		"\x03\x02\x02\x02\u08D7\u08D2\x03\x02\x02\x02\u08D7\u08D3\x03\x02\x02\x02" +
		"\u08D8\u01C3\x03\x02\x02\x02\u08D9\u08DB\x05\u0164\xB3\x02\u08DA\u08D9" +
		"\x03\x02\x02\x02\u08DA\u08DB\x03\x02\x02\x02\u08DB\u08DD\x03\x02\x02\x02" +
		"\u08DC\u08DE\x075\x02\x02\u08DD\u08DC\x03\x02\x02\x02\u08DD\u08DE\x03" +
		"\x02\x02\x02\u08DE\u08DF\x03\x02\x02\x02\u08DF\u08E7\x05\u01B6\xDC\x02" +
		"\u08E0\u08E2\x075\x02\x02\u08E1\u08E0\x03\x02\x02\x02\u08E1\u08E2\x03" +
		"\x02\x02\x02\u08E2\u08E3\x03\x02\x02\x02\u08E3\u08E4\x05\u01C6\xE4\x02" +
		"\u08E4\u08E5\x05\u01B8\xDD\x02\u08E5\u08E7\x03\x02\x02\x02\u08E6\u08DA" +
		"\x03\x02\x02\x02\u08E6\u08E1\x03\x02\x02\x02\u08E7\u01C5\x03\x02\x02\x02" +
		"\u08E8\u08E9\x05\u01D4\xEB\x02\u08E9\u01C7\x03\x02\x02\x02\u08EA\u08EB" +
		"\x07-\x02\x02\u08EB\u08ED\x07t\x02\x02\u08EC\u08EE\x05\u01CA\xE6\x02\u08ED" +
		"\u08EC\x03\x02\x02\x02\u08ED\u08EE\x03\x02\x02\x02\u08EE\u08EF\x03\x02" +
		"\x02\x02\u08EF\u08F0\x07u\x02\x02\u08F0\u01C9\x03\x02\x02\x02\u08F1\u08F9" +
		"\x05\u01CC\xE7\x02\u08F2\u08F3\x07q\x02\x02\u08F3\u08F5\x05\u01CC\xE7" +
		"\x02\u08F4\u08F2\x03\x02\x02\x02\u08F5\u08F6\x03\x02\x02\x02\u08F6\u08F4" +
		"\x03\x02\x02\x02\u08F6\u08F7\x03\x02\x02\x02\u08F7\u08F9\x03\x02\x02\x02" +
		"\u08F8\u08F1\x03\x02\x02\x02\u08F8\u08F4\x03\x02\x02\x02\u08F9\u01CB\x03" +
		"\x02\x02\x02\u08FA\u08FB\x05\u01BA\xDE\x02\u08FB\u01CD\x03\x02\x02\x02" +
		"\u08FC\u08FD\x07r\x02\x02\u08FD\u08FE\x05\u01D2\xEA\x02\u08FE\u08FF\x07" +
		"q\x02\x02\u08FF\u0900\x05\u01D0\xE9\x02\u0900\u0906\x03\x02\x02\x02\u0901" +
		"\u0902\x07r\x02\x02\u0902\u0906\x05\u01D2\xEA\x02\u0903\u0904\x07r\x02" +
		"\x02\u0904\u0906\x05\u01D0\xE9\x02\u0905\u08FC\x03\x02\x02\x02\u0905\u0901" +
		"\x03\x02\x02\x02\u0905\u0903\x03\x02\x02\x02\u0906\u01CF\x03\x02\x02\x02" +
		"\u0907\u090D\x05\u01BA\xDE\x02\u0908\u0909\x05\u01BA\xDE\x02\u0909\u090A" +
		"\x07q\x02\x02\u090A\u090B\x05\u01D0\xE9\x02\u090B\u090D\x03\x02\x02\x02" +
		"\u090C\u0907\x03\x02\x02\x02\u090C\u0908\x03\x02\x02\x02\u090D\u01D1\x03" +
		"\x02\x02\x02\u090E\u090F\x07+\x02\x02\u090F\u01D3\x03\x02\x02\x02\u0910" +
		"\u0913\x07i\x02\x02\u0911\u0913\x05\u01D8\xED\x02\u0912\u0910\x03\x02" +
		"\x02\x02\u0912\u0911\x03\x02\x02\x02\u0913\u01D5\x03\x02\x02\x02\u0914" +
		"\u0919\x05\u01D4\xEB\x02\u0915\u0916\x07q\x02\x02\u0916\u0918\x05\u01D4" +
		"\xEB\x02\u0917\u0915\x03\x02\x02\x02\u0918\u091B\x03\x02\x02\x02\u0919" +
		"\u0917\x03\x02\x02\x02\u0919\u091A\x03\x02\x02\x02\u091A\u01D7\x03\x02" +
		"\x02\x02\u091B\u0919\x03\x02\x02\x02\u091C\u091D\t\b\x02\x02\u091D\u01D9" +
		"\x03\x02\x02\x02\u091E\u091F\x06\xEE\x17\x02\u091F\u0920\x07|\x02\x02" +
		"\u0920\u01DB\x03\x02\x02\x02\u0921\u0922\x06\xEF\x18\x02\u0922\u0923\x07" +
		"{\x02\x02\u0923\u01DD\x03\x02\x02\x02\u0924\u0925\x06\xF0\x19\x02\u0925" +
		"\u0926\x07z\x02\x02\u0926\u0927\x07z\x02\x02\u0927\u01DF\x03\x02\x02\x02" +
		"\u0928\u0929\x06\xF1\x1A\x02\u0929\u092A\x07}\x02\x02\u092A\u092B\x07" +
		"}\x02\x02\u092B\u01E1\x03\x02\x02\x02\u092C\u092D\x06\xF2\x1B\x02\u092D" +
		"\u092E\x07{\x02\x02\u092E\u092F\x07u\x02\x02\u092F\u01E3\x03\x02\x02\x02" +
		"\u0930\u0931\x06\xF3\x1C\x02\u0931\u0932\x07j\x02\x02\u0932\u0933\x07" +
		"j\x02\x02\u0933\u0934\x07j\x02\x02\u0934\u01E5\x03\x02\x02\x02\u0935\u0936" +
		"\x06\xF4\x1D\x02\u0936\u0937\x07|\x02\x02\u0937\u0938\x07|\x02\x02\u0938" +
		"\u01E7\x03\x02\x02\x02\u0939\u093A\x06\xF5\x1E\x02\u093A\u093B\x05\u01EE" +
		"\xF8\x02\u093B\u01E9\x03\x02\x02\x02\u093C\u093D\x06\xF6\x1F\x02\u093D" +
		"\u093E\x05\u01EE\xF8\x02\u093E\u01EB\x03\x02\x02\x02\u093F\u0940\x06\xF7" +
		" \x02\u0940\u0941\x05\u01EE\xF8\x02\u0941\u01ED\x03\x02\x02\x02\u0942" +
		"\u0947\x05\u01F2\xFA\x02\u0943\u0944\x06\xF8!\x02\u0944\u0946\x05\u01F0" +
		"\xF9\x02\u0945\u0943\x03\x02\x02\x02\u0946\u0949\x03\x02\x02\x02\u0947" +
		"\u0945\x03\x02\x02\x02\u0947\u0948\x03\x02\x02\x02\u0948\u0953\x03\x02" +
		"\x02\x02\u0949\u0947\x03\x02\x02\x02\u094A\u094F\x05\u01F4\xFB\x02\u094B" +
		"\u094C\x06\xF8\"\x02\u094C\u094E\x05\u01F6\xFC\x02\u094D\u094B\x03\x02" +
		"\x02\x02\u094E\u0951\x03\x02\x02\x02\u094F\u094D\x03\x02\x02\x02\u094F" +
		"\u0950\x03\x02\x02\x02\u0950\u0953\x03\x02\x02\x02\u0951\u094F\x03\x02" +
		"\x02\x02\u0952\u0942\x03\x02\x02\x02\u0952\u094A\x03\x02\x02\x02\u0953" +
		"\u01EF\x03\x02\x02\x02\u0954\u0957\x05\u01F2\xFA\x02\u0955\u0957\x07\x85" +
		"\x02\x02\u0956\u0954\x03\x02\x02\x02\u0956\u0955\x03\x02\x02\x02\u0957" +
		"\u01F1\x03\x02\x02\x02\u0958\u095B\t\t\x02\x02\u0959\u095B\x07\x84\x02" +
		"\x02\u095A\u0958\x03\x02\x02\x02\u095A\u0959\x03\x02\x02\x02\u095B\u01F3" +
		"\x03\x02\x02\x02\u095C\u095D\x07j\x02\x02\u095D\u095E\x07j\x02\x02\u095E" +
		"\u01F5\x03\x02\x02\x02\u095F\u0962\x07j\x02\x02\u0960\u0962\x05\u01F0" +
		"\xF9\x02\u0961\u095F\x03\x02\x02\x02\u0961\u0960\x03\x02\x02\x02\u0962" +
		"\u01F7\x03\x02\x02\x02\u0963\u0968\x05\u01FA\xFE\x02\u0964\u0968\x05\u0202" +
		"\u0102\x02\u0965\u0968\x05\u01FC\xFF\x02\u0966\u0968\x05\u01FE\u0100\x02" +
		"\u0967\u0963\x03\x02\x02\x02\u0967\u0964\x03\x02\x02\x02\u0967\u0965\x03" +
		"\x02\x02\x02\u0967\u0966\x03\x02\x02\x02\u0968\u01F9\x03\x02\x02\x02\u0969" +
		"\u096B\x05\u01DC\xEF\x02\u096A\u0969\x03\x02\x02\x02\u096A\u096B\x03\x02" +
		"\x02\x02\u096B\u096C\x03\x02\x02\x02\u096C\u0972\x05\u0200\u0101\x02\u096D" +
		"\u096F\x05\u01DC\xEF\x02\u096E\u096D\x03\x02\x02\x02\u096E\u096F\x03\x02" +
		"\x02\x02\u096F\u0970\x03\x02\x02\x02\u0970\u0972\x07\x8C\x02\x02\u0971" +
		"\u096A\x03\x02\x02\x02\u0971\u096E\x03\x02\x02\x02\u0972\u01FB\x03\x02" +
		"\x02\x02\u0973\u0974\t\n\x02\x02\u0974\u01FD\x03\x02\x02\x02\u0975\u0976" +
		"\x07g\x02\x02\u0976\u01FF\x03\x02\x02\x02\u0977\u0978\t\v\x02\x02\u0978" +
		"\u0201\x03\x02\x02\x02\u0979\u097A\t\f\x02\x02\u097A\u0203\x03\x02\x02" +
		"\x02\u0123\u0207\u020E\u0212\u0216\u021A\u021E\u0222\u0226\u022A\u022D" +
		"\u0232\u0238\u023C\u0240\u0244\u024A\u024E\u0252\u0256\u025A\u025E\u0264" +
		"\u0276\u027D\u0283\u0289\u028D\u0290\u029A\u02A2\u02A9\u02B3\u02B9\u02BF" +
		"\u02CA\u02D0\u02D8\u02E0\u02E4\u02E9\u02FC\u0308\u030C\u0310\u0316\u0322" +
		"\u0330\u0334\u0338\u033B\u0341\u0346\u0349\u034C\u0352\u0357\u035B\u0367" +
		"\u0371\u0373\u0380\u038B\u0394\u039D\u03A9\u03B3\u03B7\u03C1\u03D0\u03E3" +
		"\u03E8\u03EB\u03EF\u03F4\u03F8\u0403\u0407\u040A\u040D\u0417\u041C\u0437" +
		"\u0440\u0444\u0447\u044A\u0453\u045C\u045F\u0465\u0469\u0474\u047D\u0480" +
		"\u0485\u048C\u0495\u0498\u049C\u04A1\u04A5\u04AD\u04B0\u04BD\u04C1\u04C4" +
		"\u04C7\u04CD\u04D1\u04D4\u04D9\u04DB\u04DF\u04E7\u04EF\u04F6\u04FA\u04FD" +
		"\u0501\u0504\u0508\u050C\u050F\u0513\u0519\u051F\u0523\u0527\u052D\u0530" +
		"\u0534\u0537\u053A\u053D\u0542\u0545\u0549\u054F\u0553\u0556\u0559\u0563" +
		"\u0567\u0570\u0579\u057D\u0580\u058A\u058E\u0596\u0599\u059C\u05A1\u05A4" +
		"\u05AC\u05B1\u05B4\u05B9\u05BC\u05C4\u05C9\u05CC\u05D1\u05D9\u05E2\u05E6" +
		"\u05F0\u05F6\u05FA\u05FE\u0603\u060A\u060D\u0612\u0615\u0619\u061D\u0623" +
		"\u0629\u062C\u062F\u0633\u0636\u063B\u063E\u0642\u0647\u064D\u0652\u0658" +
		"\u0668\u066B\u066E\u0675\u067C\u0692\u0695\u06BA\u06BE\u06CF\u06D4\u06D8" +
		"\u06DD\u06E4\u06EB\u06F6\u06FA\u0703\u0709\u070E\u0716\u071A\u0720\u0727" +
		"\u072C\u0730\u0735\u073A\u0742\u0745\u0749\u0750\u0758\u0762\u0769\u076E" +
		"\u0773\u0777\u0786\u078A\u0794\u07A0\u07A4\u07AD\u07B1\u07BC\u07C3\u07C7" +
		"\u07D9\u07DE\u07EF\u07F2\u07F8\u07FE\u0805\u080C\u0813\u081E\u0822\u082A" +
		"\u0833\u083B\u084D\u0861\u087A\u087C\u0881\u0896\u089A\u08AE\u08B0\u08B5" +
		"\u08BB\u08BF\u08C4\u08CA\u08D0\u08D7\u08DA\u08DD\u08E1\u08E6\u08ED\u08F6" +
		"\u08F8\u0905\u090C\u0912\u0919\u0947\u094F\u0952\u0956\u095A\u0961\u0967" +
		"\u096A\u096E\u0971";
	public static readonly _serializedATN: string = Utils.join(
		[
			Swift2Parser._serializedATNSegment0,
			Swift2Parser._serializedATNSegment1,
			Swift2Parser._serializedATNSegment2,
			Swift2Parser._serializedATNSegment3,
			Swift2Parser._serializedATNSegment4,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Swift2Parser.__ATN) {
			Swift2Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Swift2Parser._serializedATN));
		}

		return Swift2Parser.__ATN;
	}

}

export class Top_levelContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(Swift2Parser.EOF, 0); }
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
	public get ruleIndex(): number { return Swift2Parser.RULE_top_level; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterTop_level) {
			listener.enterTop_level(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitTop_level) {
			listener.exitTop_level(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitTop_level) {
			return visitor.visitTop_level(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.SEMI, 0); }
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public loop_statement(): Loop_statementContext | undefined {
		return this.tryGetRuleContext(0, Loop_statementContext);
	}
	public branch_statement(): Branch_statementContext | undefined {
		return this.tryGetRuleContext(0, Branch_statementContext);
	}
	public labeled_statement(): Labeled_statementContext | undefined {
		return this.tryGetRuleContext(0, Labeled_statementContext);
	}
	public control_transfer_statement(): Control_transfer_statementContext | undefined {
		return this.tryGetRuleContext(0, Control_transfer_statementContext);
	}
	public defer_statement(): Defer_statementContext | undefined {
		return this.tryGetRuleContext(0, Defer_statementContext);
	}
	public do_statement(): Do_statementContext | undefined {
		return this.tryGetRuleContext(0, Do_statementContext);
	}
	public compiler_control_statement(): Compiler_control_statementContext | undefined {
		return this.tryGetRuleContext(0, Compiler_control_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_statements; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterStatements) {
			listener.enterStatements(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitStatements) {
			listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Loop_statementContext extends ParserRuleContext {
	public for_statement(): For_statementContext | undefined {
		return this.tryGetRuleContext(0, For_statementContext);
	}
	public for_in_statement(): For_in_statementContext | undefined {
		return this.tryGetRuleContext(0, For_in_statementContext);
	}
	public while_statement(): While_statementContext | undefined {
		return this.tryGetRuleContext(0, While_statementContext);
	}
	public repeat_while_statement(): Repeat_while_statementContext | undefined {
		return this.tryGetRuleContext(0, Repeat_while_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_loop_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterLoop_statement) {
			listener.enterLoop_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitLoop_statement) {
			listener.exitLoop_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitLoop_statement) {
			return visitor.visitLoop_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_statementContext extends ParserRuleContext {
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.SEMI);
		} else {
			return this.getToken(Swift2Parser.SEMI, i);
		}
	}
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	public for_init(): For_initContext | undefined {
		return this.tryGetRuleContext(0, For_initContext);
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
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_for_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterFor_statement) {
			listener.enterFor_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitFor_statement) {
			listener.exitFor_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitFor_statement) {
			return visitor.visitFor_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_initContext extends ParserRuleContext {
	public variable_declaration(): Variable_declarationContext | undefined {
		return this.tryGetRuleContext(0, Variable_declarationContext);
	}
	public expression_list(): Expression_listContext | undefined {
		return this.tryGetRuleContext(0, Expression_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_for_init; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterFor_init) {
			listener.enterFor_init(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitFor_init) {
			listener.exitFor_init(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitFor_init) {
			return visitor.visitFor_init(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_in_statementContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	public where_clause(): Where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Where_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_for_in_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterFor_in_statement) {
			listener.enterFor_in_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitFor_in_statement) {
			listener.exitFor_in_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitFor_in_statement) {
			return visitor.visitFor_in_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class While_statementContext extends ParserRuleContext {
	public condition_clause(): Condition_clauseContext {
		return this.getRuleContext(0, Condition_clauseContext);
	}
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_while_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterWhile_statement) {
			listener.enterWhile_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitWhile_statement) {
			listener.exitWhile_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitWhile_statement) {
			return visitor.visitWhile_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Condition_clauseContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.COMMA, 0); }
	public condition_list(): Condition_listContext | undefined {
		return this.tryGetRuleContext(0, Condition_listContext);
	}
	public availability_condition(): Availability_conditionContext | undefined {
		return this.tryGetRuleContext(0, Availability_conditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_condition_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterCondition_clause) {
			listener.enterCondition_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitCondition_clause) {
			listener.exitCondition_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitCondition_clause) {
			return visitor.visitCondition_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Condition_listContext extends ParserRuleContext {
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.COMMA);
		} else {
			return this.getToken(Swift2Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_condition_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterCondition_list) {
			listener.enterCondition_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitCondition_list) {
			listener.exitCondition_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitCondition_list) {
			return visitor.visitCondition_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public availability_condition(): Availability_conditionContext | undefined {
		return this.tryGetRuleContext(0, Availability_conditionContext);
	}
	public case_condition(): Case_conditionContext | undefined {
		return this.tryGetRuleContext(0, Case_conditionContext);
	}
	public optional_binding_condition(): Optional_binding_conditionContext | undefined {
		return this.tryGetRuleContext(0, Optional_binding_conditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_condition; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_conditionContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public initializer(): InitializerContext {
		return this.getRuleContext(0, InitializerContext);
	}
	public where_clause(): Where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Where_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_case_condition; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterCase_condition) {
			listener.enterCase_condition(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitCase_condition) {
			listener.exitCase_condition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitCase_condition) {
			return visitor.visitCase_condition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Optional_binding_conditionContext extends ParserRuleContext {
	public optional_binding_head(): Optional_binding_headContext {
		return this.getRuleContext(0, Optional_binding_headContext);
	}
	public optional_binding_continuation_list(): Optional_binding_continuation_listContext | undefined {
		return this.tryGetRuleContext(0, Optional_binding_continuation_listContext);
	}
	public where_clause(): Where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Where_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_optional_binding_condition; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterOptional_binding_condition) {
			listener.enterOptional_binding_condition(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitOptional_binding_condition) {
			listener.exitOptional_binding_condition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitOptional_binding_condition) {
			return visitor.visitOptional_binding_condition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Optional_binding_headContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public initializer(): InitializerContext {
		return this.getRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_optional_binding_head; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterOptional_binding_head) {
			listener.enterOptional_binding_head(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitOptional_binding_head) {
			listener.exitOptional_binding_head(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitOptional_binding_head) {
			return visitor.visitOptional_binding_head(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Optional_binding_continuation_listContext extends ParserRuleContext {
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.COMMA);
		} else {
			return this.getToken(Swift2Parser.COMMA, i);
		}
	}
	public optional_binding_continuation(): Optional_binding_continuationContext[];
	public optional_binding_continuation(i: number): Optional_binding_continuationContext;
	public optional_binding_continuation(i?: number): Optional_binding_continuationContext | Optional_binding_continuationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Optional_binding_continuationContext);
		} else {
			return this.getRuleContext(i, Optional_binding_continuationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_optional_binding_continuation_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterOptional_binding_continuation_list) {
			listener.enterOptional_binding_continuation_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitOptional_binding_continuation_list) {
			listener.exitOptional_binding_continuation_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitOptional_binding_continuation_list) {
			return visitor.visitOptional_binding_continuation_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Optional_binding_continuationContext extends ParserRuleContext {
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	public optional_binding_head(): Optional_binding_headContext | undefined {
		return this.tryGetRuleContext(0, Optional_binding_headContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_optional_binding_continuation; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterOptional_binding_continuation) {
			listener.enterOptional_binding_continuation(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitOptional_binding_continuation) {
			listener.exitOptional_binding_continuation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitOptional_binding_continuation) {
			return visitor.visitOptional_binding_continuation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Repeat_while_statementContext extends ParserRuleContext {
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_repeat_while_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterRepeat_while_statement) {
			listener.enterRepeat_while_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitRepeat_while_statement) {
			listener.exitRepeat_while_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitRepeat_while_statement) {
			return visitor.visitRepeat_while_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Branch_statementContext extends ParserRuleContext {
	public if_statement(): If_statementContext | undefined {
		return this.tryGetRuleContext(0, If_statementContext);
	}
	public guard_statement(): Guard_statementContext | undefined {
		return this.tryGetRuleContext(0, Guard_statementContext);
	}
	public switch_statement(): Switch_statementContext | undefined {
		return this.tryGetRuleContext(0, Switch_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_branch_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterBranch_statement) {
			listener.enterBranch_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitBranch_statement) {
			listener.exitBranch_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitBranch_statement) {
			return visitor.visitBranch_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_statementContext extends ParserRuleContext {
	public condition_clause(): Condition_clauseContext {
		return this.getRuleContext(0, Condition_clauseContext);
	}
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	public else_clause(): Else_clauseContext | undefined {
		return this.tryGetRuleContext(0, Else_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_if_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterIf_statement) {
			listener.enterIf_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitIf_statement) {
			listener.exitIf_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitIf_statement) {
			return visitor.visitIf_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Else_clauseContext extends ParserRuleContext {
	public code_block(): Code_blockContext | undefined {
		return this.tryGetRuleContext(0, Code_blockContext);
	}
	public if_statement(): If_statementContext | undefined {
		return this.tryGetRuleContext(0, If_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_else_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterElse_clause) {
			listener.enterElse_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitElse_clause) {
			listener.exitElse_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitElse_clause) {
			return visitor.visitElse_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Guard_statementContext extends ParserRuleContext {
	public condition_clause(): Condition_clauseContext {
		return this.getRuleContext(0, Condition_clauseContext);
	}
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_guard_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterGuard_statement) {
			listener.enterGuard_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitGuard_statement) {
			listener.exitGuard_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitGuard_statement) {
			return visitor.visitGuard_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_statementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LCURLY(): TerminalNode { return this.getToken(Swift2Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift2Parser.RCURLY, 0); }
	public switch_cases(): Switch_casesContext | undefined {
		return this.tryGetRuleContext(0, Switch_casesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_switch_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSwitch_statement) {
			listener.enterSwitch_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSwitch_statement) {
			listener.exitSwitch_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSwitch_statement) {
			return visitor.visitSwitch_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_casesContext extends ParserRuleContext {
	public switch_case(): Switch_caseContext {
		return this.getRuleContext(0, Switch_caseContext);
	}
	public switch_cases(): Switch_casesContext | undefined {
		return this.tryGetRuleContext(0, Switch_casesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_switch_cases; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSwitch_cases) {
			listener.enterSwitch_cases(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSwitch_cases) {
			listener.exitSwitch_cases(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSwitch_cases) {
			return visitor.visitSwitch_cases(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_caseContext extends ParserRuleContext {
	public case_label(): Case_labelContext | undefined {
		return this.tryGetRuleContext(0, Case_labelContext);
	}
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public default_label(): Default_labelContext | undefined {
		return this.tryGetRuleContext(0, Default_labelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_switch_case; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSwitch_case) {
			listener.enterSwitch_case(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSwitch_case) {
			listener.exitSwitch_case(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSwitch_case) {
			return visitor.visitSwitch_case(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_labelContext extends ParserRuleContext {
	public case_item_list(): Case_item_listContext {
		return this.getRuleContext(0, Case_item_listContext);
	}
	public COLON(): TerminalNode { return this.getToken(Swift2Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_case_label; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterCase_label) {
			listener.enterCase_label(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitCase_label) {
			listener.exitCase_label(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitCase_label) {
			return visitor.visitCase_label(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_item_listContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public where_clause(): Where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Where_clauseContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.COMMA, 0); }
	public case_item_list(): Case_item_listContext | undefined {
		return this.tryGetRuleContext(0, Case_item_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_case_item_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterCase_item_list) {
			listener.enterCase_item_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitCase_item_list) {
			listener.exitCase_item_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitCase_item_list) {
			return visitor.visitCase_item_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Default_labelContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(Swift2Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_default_label; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterDefault_label) {
			listener.enterDefault_label(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitDefault_label) {
			listener.exitDefault_label(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitDefault_label) {
			return visitor.visitDefault_label(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Where_clauseContext extends ParserRuleContext {
	public where_expression(): Where_expressionContext {
		return this.getRuleContext(0, Where_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_where_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterWhere_clause) {
			listener.enterWhere_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitWhere_clause) {
			listener.exitWhere_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitWhere_clause) {
			return visitor.visitWhere_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Where_expressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_where_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterWhere_expression) {
			listener.enterWhere_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitWhere_expression) {
			listener.exitWhere_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitWhere_expression) {
			return visitor.visitWhere_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Labeled_statementContext extends ParserRuleContext {
	public statement_label(): Statement_labelContext {
		return this.getRuleContext(0, Statement_labelContext);
	}
	public loop_statement(): Loop_statementContext | undefined {
		return this.tryGetRuleContext(0, Loop_statementContext);
	}
	public if_statement(): If_statementContext | undefined {
		return this.tryGetRuleContext(0, If_statementContext);
	}
	public switch_statement(): Switch_statementContext | undefined {
		return this.tryGetRuleContext(0, Switch_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_labeled_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterLabeled_statement) {
			listener.enterLabeled_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitLabeled_statement) {
			listener.exitLabeled_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitLabeled_statement) {
			return visitor.visitLabeled_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Statement_labelContext extends ParserRuleContext {
	public label_name(): Label_nameContext {
		return this.getRuleContext(0, Label_nameContext);
	}
	public COLON(): TerminalNode { return this.getToken(Swift2Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_statement_label; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterStatement_label) {
			listener.enterStatement_label(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitStatement_label) {
			listener.exitStatement_label(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitStatement_label) {
			return visitor.visitStatement_label(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Label_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_label_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterLabel_name) {
			listener.enterLabel_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitLabel_name) {
			listener.exitLabel_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitLabel_name) {
			return visitor.visitLabel_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Control_transfer_statementContext extends ParserRuleContext {
	public break_statement(): Break_statementContext | undefined {
		return this.tryGetRuleContext(0, Break_statementContext);
	}
	public continue_statement(): Continue_statementContext | undefined {
		return this.tryGetRuleContext(0, Continue_statementContext);
	}
	public fallthrough_statement(): Fallthrough_statementContext | undefined {
		return this.tryGetRuleContext(0, Fallthrough_statementContext);
	}
	public return_statement(): Return_statementContext | undefined {
		return this.tryGetRuleContext(0, Return_statementContext);
	}
	public throw_statement(): Throw_statementContext | undefined {
		return this.tryGetRuleContext(0, Throw_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_control_transfer_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterControl_transfer_statement) {
			listener.enterControl_transfer_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitControl_transfer_statement) {
			listener.exitControl_transfer_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitControl_transfer_statement) {
			return visitor.visitControl_transfer_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Break_statementContext extends ParserRuleContext {
	public label_name(): Label_nameContext | undefined {
		return this.tryGetRuleContext(0, Label_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_break_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterBreak_statement) {
			listener.enterBreak_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitBreak_statement) {
			listener.exitBreak_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitBreak_statement) {
			return visitor.visitBreak_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Continue_statementContext extends ParserRuleContext {
	public label_name(): Label_nameContext | undefined {
		return this.tryGetRuleContext(0, Label_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_continue_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterContinue_statement) {
			listener.enterContinue_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitContinue_statement) {
			listener.exitContinue_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitContinue_statement) {
			return visitor.visitContinue_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fallthrough_statementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_fallthrough_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterFallthrough_statement) {
			listener.enterFallthrough_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitFallthrough_statement) {
			listener.exitFallthrough_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitFallthrough_statement) {
			return visitor.visitFallthrough_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_statementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_return_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterReturn_statement) {
			listener.enterReturn_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitReturn_statement) {
			listener.exitReturn_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitReturn_statement) {
			return visitor.visitReturn_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Availability_conditionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift2Parser.LPAREN, 0); }
	public availability_arguments(): Availability_argumentsContext {
		return this.getRuleContext(0, Availability_argumentsContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift2Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_availability_condition; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterAvailability_condition) {
			listener.enterAvailability_condition(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitAvailability_condition) {
			listener.exitAvailability_condition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitAvailability_condition) {
			return visitor.visitAvailability_condition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Availability_argumentsContext extends ParserRuleContext {
	public availability_argument(): Availability_argumentContext[];
	public availability_argument(i: number): Availability_argumentContext;
	public availability_argument(i?: number): Availability_argumentContext | Availability_argumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Availability_argumentContext);
		} else {
			return this.getRuleContext(i, Availability_argumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.COMMA);
		} else {
			return this.getToken(Swift2Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_availability_arguments; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterAvailability_arguments) {
			listener.enterAvailability_arguments(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitAvailability_arguments) {
			listener.exitAvailability_arguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitAvailability_arguments) {
			return visitor.visitAvailability_arguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Availability_argumentContext extends ParserRuleContext {
	public Platform(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.Platform, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_availability_argument; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterAvailability_argument) {
			listener.enterAvailability_argument(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitAvailability_argument) {
			listener.exitAvailability_argument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitAvailability_argument) {
			return visitor.visitAvailability_argument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Throw_statementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_throw_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterThrow_statement) {
			listener.enterThrow_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitThrow_statement) {
			listener.exitThrow_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitThrow_statement) {
			return visitor.visitThrow_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Defer_statementContext extends ParserRuleContext {
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_defer_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterDefer_statement) {
			listener.enterDefer_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitDefer_statement) {
			listener.exitDefer_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitDefer_statement) {
			return visitor.visitDefer_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Do_statementContext extends ParserRuleContext {
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	public catch_clauses(): Catch_clausesContext | undefined {
		return this.tryGetRuleContext(0, Catch_clausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_do_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterDo_statement) {
			listener.enterDo_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitDo_statement) {
			listener.exitDo_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitDo_statement) {
			return visitor.visitDo_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Catch_clausesContext extends ParserRuleContext {
	public catch_clause(): Catch_clauseContext {
		return this.getRuleContext(0, Catch_clauseContext);
	}
	public catch_clauses(): Catch_clausesContext | undefined {
		return this.tryGetRuleContext(0, Catch_clausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_catch_clauses; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterCatch_clauses) {
			listener.enterCatch_clauses(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitCatch_clauses) {
			listener.exitCatch_clauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitCatch_clauses) {
			return visitor.visitCatch_clauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Catch_clauseContext extends ParserRuleContext {
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	public where_clause(): Where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Where_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_catch_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterCatch_clause) {
			listener.enterCatch_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitCatch_clause) {
			listener.exitCatch_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitCatch_clause) {
			return visitor.visitCatch_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compiler_control_statementContext extends ParserRuleContext {
	public build_configuration_statement(): Build_configuration_statementContext | undefined {
		return this.tryGetRuleContext(0, Build_configuration_statementContext);
	}
	public line_control_statement(): Line_control_statementContext | undefined {
		return this.tryGetRuleContext(0, Line_control_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_compiler_control_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterCompiler_control_statement) {
			listener.enterCompiler_control_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitCompiler_control_statement) {
			listener.exitCompiler_control_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitCompiler_control_statement) {
			return visitor.visitCompiler_control_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Build_configuration_statementContext extends ParserRuleContext {
	public build_configuration(): Build_configurationContext {
		return this.getRuleContext(0, Build_configurationContext);
	}
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	public build_configuration_elseif_clauses(): Build_configuration_elseif_clausesContext | undefined {
		return this.tryGetRuleContext(0, Build_configuration_elseif_clausesContext);
	}
	public build_configuration_else_clause(): Build_configuration_else_clauseContext | undefined {
		return this.tryGetRuleContext(0, Build_configuration_else_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_build_configuration_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterBuild_configuration_statement) {
			listener.enterBuild_configuration_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitBuild_configuration_statement) {
			listener.exitBuild_configuration_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitBuild_configuration_statement) {
			return visitor.visitBuild_configuration_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Build_configuration_elseif_clausesContext extends ParserRuleContext {
	public build_configuration_elseif_clause(): Build_configuration_elseif_clauseContext {
		return this.getRuleContext(0, Build_configuration_elseif_clauseContext);
	}
	public build_configuration_elseif_clauses(): Build_configuration_elseif_clausesContext | undefined {
		return this.tryGetRuleContext(0, Build_configuration_elseif_clausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_build_configuration_elseif_clauses; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterBuild_configuration_elseif_clauses) {
			listener.enterBuild_configuration_elseif_clauses(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitBuild_configuration_elseif_clauses) {
			listener.exitBuild_configuration_elseif_clauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitBuild_configuration_elseif_clauses) {
			return visitor.visitBuild_configuration_elseif_clauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Build_configuration_elseif_clauseContext extends ParserRuleContext {
	public build_configuration(): Build_configurationContext {
		return this.getRuleContext(0, Build_configurationContext);
	}
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_build_configuration_elseif_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterBuild_configuration_elseif_clause) {
			listener.enterBuild_configuration_elseif_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitBuild_configuration_elseif_clause) {
			listener.exitBuild_configuration_elseif_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitBuild_configuration_elseif_clause) {
			return visitor.visitBuild_configuration_elseif_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Build_configuration_else_clauseContext extends ParserRuleContext {
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_build_configuration_else_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterBuild_configuration_else_clause) {
			listener.enterBuild_configuration_else_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitBuild_configuration_else_clause) {
			listener.exitBuild_configuration_else_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitBuild_configuration_else_clause) {
			return visitor.visitBuild_configuration_else_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Build_configurationContext extends ParserRuleContext {
	public platform_testing_function(): Platform_testing_functionContext | undefined {
		return this.tryGetRuleContext(0, Platform_testing_functionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public boolean_literal(): Boolean_literalContext | undefined {
		return this.tryGetRuleContext(0, Boolean_literalContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.LPAREN, 0); }
	public build_configuration(): Build_configurationContext[];
	public build_configuration(i: number): Build_configurationContext;
	public build_configuration(i?: number): Build_configurationContext | Build_configurationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Build_configurationContext);
		} else {
			return this.getRuleContext(i, Build_configurationContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.RPAREN, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.BANG, 0); }
	public build_AND(): Build_ANDContext | undefined {
		return this.tryGetRuleContext(0, Build_ANDContext);
	}
	public build_OR(): Build_ORContext | undefined {
		return this.tryGetRuleContext(0, Build_ORContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_build_configuration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterBuild_configuration) {
			listener.enterBuild_configuration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitBuild_configuration) {
			listener.exitBuild_configuration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitBuild_configuration) {
			return visitor.visitBuild_configuration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Platform_testing_functionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift2Parser.LPAREN, 0); }
	public operating_system(): Operating_systemContext | undefined {
		return this.tryGetRuleContext(0, Operating_systemContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift2Parser.RPAREN, 0); }
	public architecture(): ArchitectureContext | undefined {
		return this.tryGetRuleContext(0, ArchitectureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_platform_testing_function; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterPlatform_testing_function) {
			listener.enterPlatform_testing_function(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitPlatform_testing_function) {
			listener.exitPlatform_testing_function(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitPlatform_testing_function) {
			return visitor.visitPlatform_testing_function(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operating_systemContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_operating_system; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterOperating_system) {
			listener.enterOperating_system(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitOperating_system) {
			listener.exitOperating_system(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitOperating_system) {
			return visitor.visitOperating_system(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArchitectureContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_architecture; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterArchitecture) {
			listener.enterArchitecture(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitArchitecture) {
			listener.exitArchitecture(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitArchitecture) {
			return visitor.visitArchitecture(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Line_control_statementContext extends ParserRuleContext {
	public line_number(): Line_numberContext | undefined {
		return this.tryGetRuleContext(0, Line_numberContext);
	}
	public file_name(): File_nameContext | undefined {
		return this.tryGetRuleContext(0, File_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_line_control_statement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterLine_control_statement) {
			listener.enterLine_control_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitLine_control_statement) {
			listener.exitLine_control_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitLine_control_statement) {
			return visitor.visitLine_control_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Line_numberContext extends ParserRuleContext {
	public integer_literal(): Integer_literalContext {
		return this.getRuleContext(0, Integer_literalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_line_number; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterLine_number) {
			listener.enterLine_number(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitLine_number) {
			listener.exitLine_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitLine_number) {
			return visitor.visitLine_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class File_nameContext extends ParserRuleContext {
	public Static_string_literal(): TerminalNode { return this.getToken(Swift2Parser.Static_string_literal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_file_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterFile_name) {
			listener.enterFile_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitFile_name) {
			listener.exitFile_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitFile_name) {
			return visitor.visitFile_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Generic_parameter_clauseContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(Swift2Parser.LT, 0); }
	public generic_parameter_list(): Generic_parameter_listContext {
		return this.getRuleContext(0, Generic_parameter_listContext);
	}
	public GT(): TerminalNode { return this.getToken(Swift2Parser.GT, 0); }
	public requirement_clause(): Requirement_clauseContext | undefined {
		return this.tryGetRuleContext(0, Requirement_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_generic_parameter_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterGeneric_parameter_clause) {
			listener.enterGeneric_parameter_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitGeneric_parameter_clause) {
			listener.exitGeneric_parameter_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitGeneric_parameter_clause) {
			return visitor.visitGeneric_parameter_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Generic_parameter_listContext extends ParserRuleContext {
	public generic_parameter(): Generic_parameterContext[];
	public generic_parameter(i: number): Generic_parameterContext;
	public generic_parameter(i?: number): Generic_parameterContext | Generic_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Generic_parameterContext);
		} else {
			return this.getRuleContext(i, Generic_parameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.COMMA);
		} else {
			return this.getToken(Swift2Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_generic_parameter_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterGeneric_parameter_list) {
			listener.enterGeneric_parameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitGeneric_parameter_list) {
			listener.exitGeneric_parameter_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitGeneric_parameter_list) {
			return visitor.visitGeneric_parameter_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Generic_parameterContext extends ParserRuleContext {
	public type_name(): Type_nameContext {
		return this.getRuleContext(0, Type_nameContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.COLON, 0); }
	public type_identifier(): Type_identifierContext | undefined {
		return this.tryGetRuleContext(0, Type_identifierContext);
	}
	public protocol_composition_type(): Protocol_composition_typeContext | undefined {
		return this.tryGetRuleContext(0, Protocol_composition_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_generic_parameter; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterGeneric_parameter) {
			listener.enterGeneric_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitGeneric_parameter) {
			listener.exitGeneric_parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitGeneric_parameter) {
			return visitor.visitGeneric_parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Requirement_clauseContext extends ParserRuleContext {
	public requirement_list(): Requirement_listContext {
		return this.getRuleContext(0, Requirement_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_requirement_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterRequirement_clause) {
			listener.enterRequirement_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitRequirement_clause) {
			listener.exitRequirement_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitRequirement_clause) {
			return visitor.visitRequirement_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Requirement_listContext extends ParserRuleContext {
	public requirement(): RequirementContext {
		return this.getRuleContext(0, RequirementContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.COMMA, 0); }
	public requirement_list(): Requirement_listContext | undefined {
		return this.tryGetRuleContext(0, Requirement_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_requirement_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterRequirement_list) {
			listener.enterRequirement_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitRequirement_list) {
			listener.exitRequirement_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitRequirement_list) {
			return visitor.visitRequirement_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RequirementContext extends ParserRuleContext {
	public conformance_requirement(): Conformance_requirementContext | undefined {
		return this.tryGetRuleContext(0, Conformance_requirementContext);
	}
	public same_type_requirement(): Same_type_requirementContext | undefined {
		return this.tryGetRuleContext(0, Same_type_requirementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_requirement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterRequirement) {
			listener.enterRequirement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitRequirement) {
			listener.exitRequirement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitRequirement) {
			return visitor.visitRequirement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conformance_requirementContext extends ParserRuleContext {
	public type_identifier(): Type_identifierContext[];
	public type_identifier(i: number): Type_identifierContext;
	public type_identifier(i?: number): Type_identifierContext | Type_identifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_identifierContext);
		} else {
			return this.getRuleContext(i, Type_identifierContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(Swift2Parser.COLON, 0); }
	public protocol_composition_type(): Protocol_composition_typeContext | undefined {
		return this.tryGetRuleContext(0, Protocol_composition_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_conformance_requirement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterConformance_requirement) {
			listener.enterConformance_requirement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitConformance_requirement) {
			listener.exitConformance_requirement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitConformance_requirement) {
			return visitor.visitConformance_requirement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Same_type_requirementContext extends ParserRuleContext {
	public type_identifier(): Type_identifierContext {
		return this.getRuleContext(0, Type_identifierContext);
	}
	public same_type_equals(): Same_type_equalsContext {
		return this.getRuleContext(0, Same_type_equalsContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_same_type_requirement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSame_type_requirement) {
			listener.enterSame_type_requirement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSame_type_requirement) {
			listener.exitSame_type_requirement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSame_type_requirement) {
			return visitor.visitSame_type_requirement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Generic_argument_clauseContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(Swift2Parser.LT, 0); }
	public generic_argument_list(): Generic_argument_listContext {
		return this.getRuleContext(0, Generic_argument_listContext);
	}
	public GT(): TerminalNode { return this.getToken(Swift2Parser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_generic_argument_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterGeneric_argument_clause) {
			listener.enterGeneric_argument_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitGeneric_argument_clause) {
			listener.exitGeneric_argument_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitGeneric_argument_clause) {
			return visitor.visitGeneric_argument_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Generic_argument_listContext extends ParserRuleContext {
	public generic_argument(): Generic_argumentContext[];
	public generic_argument(i: number): Generic_argumentContext;
	public generic_argument(i?: number): Generic_argumentContext | Generic_argumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Generic_argumentContext);
		} else {
			return this.getRuleContext(i, Generic_argumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.COMMA);
		} else {
			return this.getToken(Swift2Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_generic_argument_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterGeneric_argument_list) {
			listener.enterGeneric_argument_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitGeneric_argument_list) {
			listener.exitGeneric_argument_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitGeneric_argument_list) {
			return visitor.visitGeneric_argument_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Generic_argumentContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_generic_argument; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterGeneric_argument) {
			listener.enterGeneric_argument(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitGeneric_argument) {
			listener.exitGeneric_argument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitGeneric_argument) {
			return visitor.visitGeneric_argument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public import_declaration(): Import_declarationContext | undefined {
		return this.tryGetRuleContext(0, Import_declarationContext);
	}
	public constant_declaration(): Constant_declarationContext | undefined {
		return this.tryGetRuleContext(0, Constant_declarationContext);
	}
	public variable_declaration(): Variable_declarationContext | undefined {
		return this.tryGetRuleContext(0, Variable_declarationContext);
	}
	public typealias_declaration(): Typealias_declarationContext | undefined {
		return this.tryGetRuleContext(0, Typealias_declarationContext);
	}
	public function_declaration(): Function_declarationContext | undefined {
		return this.tryGetRuleContext(0, Function_declarationContext);
	}
	public enum_declaration(): Enum_declarationContext | undefined {
		return this.tryGetRuleContext(0, Enum_declarationContext);
	}
	public struct_declaration(): Struct_declarationContext | undefined {
		return this.tryGetRuleContext(0, Struct_declarationContext);
	}
	public class_declaration(): Class_declarationContext | undefined {
		return this.tryGetRuleContext(0, Class_declarationContext);
	}
	public protocol_declaration(): Protocol_declarationContext | undefined {
		return this.tryGetRuleContext(0, Protocol_declarationContext);
	}
	public initializer_declaration(): Initializer_declarationContext | undefined {
		return this.tryGetRuleContext(0, Initializer_declarationContext);
	}
	public deinitializer_declaration(): Deinitializer_declarationContext | undefined {
		return this.tryGetRuleContext(0, Deinitializer_declarationContext);
	}
	public extension_declaration(): Extension_declarationContext | undefined {
		return this.tryGetRuleContext(0, Extension_declarationContext);
	}
	public subscript_declaration(): Subscript_declarationContext | undefined {
		return this.tryGetRuleContext(0, Subscript_declarationContext);
	}
	public operator_declaration(): Operator_declarationContext | undefined {
		return this.tryGetRuleContext(0, Operator_declarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationsContext extends ParserRuleContext {
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_declarations; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterDeclarations) {
			listener.enterDeclarations(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitDeclarations) {
			listener.exitDeclarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitDeclarations) {
			return visitor.visitDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Top_level_declarationContext extends ParserRuleContext {
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_top_level_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterTop_level_declaration) {
			listener.enterTop_level_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitTop_level_declaration) {
			listener.exitTop_level_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitTop_level_declaration) {
			return visitor.visitTop_level_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Code_blockContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift2Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift2Parser.RCURLY, 0); }
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_code_block; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterCode_block) {
			listener.enterCode_block(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitCode_block) {
			listener.exitCode_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitCode_block) {
			return visitor.visitCode_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_declarationContext extends ParserRuleContext {
	public import_path(): Import_pathContext {
		return this.getRuleContext(0, Import_pathContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public import_kind(): Import_kindContext | undefined {
		return this.tryGetRuleContext(0, Import_kindContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_import_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterImport_declaration) {
			listener.enterImport_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitImport_declaration) {
			listener.exitImport_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitImport_declaration) {
			return visitor.visitImport_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_kindContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_import_kind; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterImport_kind) {
			listener.enterImport_kind(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitImport_kind) {
			listener.exitImport_kind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitImport_kind) {
			return visitor.visitImport_kind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_pathContext extends ParserRuleContext {
	public import_path_identifier(): Import_path_identifierContext {
		return this.getRuleContext(0, Import_path_identifierContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.DOT, 0); }
	public import_path(): Import_pathContext | undefined {
		return this.tryGetRuleContext(0, Import_pathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_import_path; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterImport_path) {
			listener.enterImport_path(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitImport_path) {
			listener.exitImport_path(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitImport_path) {
			return visitor.visitImport_path(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_path_identifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_import_path_identifier; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterImport_path_identifier) {
			listener.enterImport_path_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitImport_path_identifier) {
			listener.exitImport_path_identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitImport_path_identifier) {
			return visitor.visitImport_path_identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constant_declarationContext extends ParserRuleContext {
	public pattern_initializer_list(): Pattern_initializer_listContext {
		return this.getRuleContext(0, Pattern_initializer_listContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public declaration_modifiers(): Declaration_modifiersContext | undefined {
		return this.tryGetRuleContext(0, Declaration_modifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_constant_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterConstant_declaration) {
			listener.enterConstant_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitConstant_declaration) {
			listener.exitConstant_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitConstant_declaration) {
			return visitor.visitConstant_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pattern_initializer_listContext extends ParserRuleContext {
	public pattern_initializer(): Pattern_initializerContext[];
	public pattern_initializer(i: number): Pattern_initializerContext;
	public pattern_initializer(i?: number): Pattern_initializerContext | Pattern_initializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pattern_initializerContext);
		} else {
			return this.getRuleContext(i, Pattern_initializerContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.COMMA);
		} else {
			return this.getToken(Swift2Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_pattern_initializer_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterPattern_initializer_list) {
			listener.enterPattern_initializer_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitPattern_initializer_list) {
			listener.exitPattern_initializer_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitPattern_initializer_list) {
			return visitor.visitPattern_initializer_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pattern_initializerContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_pattern_initializer; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterPattern_initializer) {
			listener.enterPattern_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitPattern_initializer) {
			listener.exitPattern_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitPattern_initializer) {
			return visitor.visitPattern_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerContext extends ParserRuleContext {
	public assignment_operator(): Assignment_operatorContext {
		return this.getRuleContext(0, Assignment_operatorContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_initializer; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterInitializer) {
			listener.enterInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitInitializer) {
			listener.exitInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitInitializer) {
			return visitor.visitInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variable_declarationContext extends ParserRuleContext {
	public variable_declaration_head(): Variable_declaration_headContext {
		return this.getRuleContext(0, Variable_declaration_headContext);
	}
	public pattern_initializer_list(): Pattern_initializer_listContext | undefined {
		return this.tryGetRuleContext(0, Pattern_initializer_listContext);
	}
	public variable_name(): Variable_nameContext | undefined {
		return this.tryGetRuleContext(0, Variable_nameContext);
	}
	public type_annotation(): Type_annotationContext[];
	public type_annotation(i: number): Type_annotationContext;
	public type_annotation(i?: number): Type_annotationContext | Type_annotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_annotationContext);
		} else {
			return this.getRuleContext(i, Type_annotationContext);
		}
	}
	public code_block(): Code_blockContext | undefined {
		return this.tryGetRuleContext(0, Code_blockContext);
	}
	public getter_setter_block(): Getter_setter_blockContext | undefined {
		return this.tryGetRuleContext(0, Getter_setter_blockContext);
	}
	public getter_setter_keyword_block(): Getter_setter_keyword_blockContext | undefined {
		return this.tryGetRuleContext(0, Getter_setter_keyword_blockContext);
	}
	public willSet_didSet_block(): WillSet_didSet_blockContext | undefined {
		return this.tryGetRuleContext(0, WillSet_didSet_blockContext);
	}
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_variable_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterVariable_declaration) {
			listener.enterVariable_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitVariable_declaration) {
			listener.exitVariable_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitVariable_declaration) {
			return visitor.visitVariable_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variable_declaration_headContext extends ParserRuleContext {
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public declaration_modifiers(): Declaration_modifiersContext | undefined {
		return this.tryGetRuleContext(0, Declaration_modifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_variable_declaration_head; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterVariable_declaration_head) {
			listener.enterVariable_declaration_head(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitVariable_declaration_head) {
			listener.exitVariable_declaration_head(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitVariable_declaration_head) {
			return visitor.visitVariable_declaration_head(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variable_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_variable_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterVariable_name) {
			listener.enterVariable_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitVariable_name) {
			listener.exitVariable_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitVariable_name) {
			return visitor.visitVariable_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Getter_setter_blockContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift2Parser.LCURLY, 0); }
	public getter_clause(): Getter_clauseContext {
		return this.getRuleContext(0, Getter_clauseContext);
	}
	public RCURLY(): TerminalNode { return this.getToken(Swift2Parser.RCURLY, 0); }
	public setter_clause(): Setter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Setter_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_getter_setter_block; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterGetter_setter_block) {
			listener.enterGetter_setter_block(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitGetter_setter_block) {
			listener.exitGetter_setter_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitGetter_setter_block) {
			return visitor.visitGetter_setter_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Getter_clauseContext extends ParserRuleContext {
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_getter_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterGetter_clause) {
			listener.enterGetter_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitGetter_clause) {
			listener.exitGetter_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitGetter_clause) {
			return visitor.visitGetter_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Setter_clauseContext extends ParserRuleContext {
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public setter_name(): Setter_nameContext | undefined {
		return this.tryGetRuleContext(0, Setter_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_setter_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSetter_clause) {
			listener.enterSetter_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSetter_clause) {
			listener.exitSetter_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSetter_clause) {
			return visitor.visitSetter_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Setter_nameContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift2Parser.LPAREN, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift2Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_setter_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSetter_name) {
			listener.enterSetter_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSetter_name) {
			listener.exitSetter_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSetter_name) {
			return visitor.visitSetter_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Getter_setter_keyword_blockContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift2Parser.LCURLY, 0); }
	public getter_keyword_clause(): Getter_keyword_clauseContext {
		return this.getRuleContext(0, Getter_keyword_clauseContext);
	}
	public RCURLY(): TerminalNode { return this.getToken(Swift2Parser.RCURLY, 0); }
	public setter_keyword_clause(): Setter_keyword_clauseContext | undefined {
		return this.tryGetRuleContext(0, Setter_keyword_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_getter_setter_keyword_block; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterGetter_setter_keyword_block) {
			listener.enterGetter_setter_keyword_block(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitGetter_setter_keyword_block) {
			listener.exitGetter_setter_keyword_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitGetter_setter_keyword_block) {
			return visitor.visitGetter_setter_keyword_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Getter_keyword_clauseContext extends ParserRuleContext {
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_getter_keyword_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterGetter_keyword_clause) {
			listener.enterGetter_keyword_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitGetter_keyword_clause) {
			listener.exitGetter_keyword_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitGetter_keyword_clause) {
			return visitor.visitGetter_keyword_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Setter_keyword_clauseContext extends ParserRuleContext {
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_setter_keyword_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSetter_keyword_clause) {
			listener.enterSetter_keyword_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSetter_keyword_clause) {
			listener.exitSetter_keyword_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSetter_keyword_clause) {
			return visitor.visitSetter_keyword_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WillSet_didSet_blockContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift2Parser.LCURLY, 0); }
	public willSet_clause(): WillSet_clauseContext {
		return this.getRuleContext(0, WillSet_clauseContext);
	}
	public RCURLY(): TerminalNode { return this.getToken(Swift2Parser.RCURLY, 0); }
	public didSet_clause(): DidSet_clauseContext | undefined {
		return this.tryGetRuleContext(0, DidSet_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_willSet_didSet_block; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterWillSet_didSet_block) {
			listener.enterWillSet_didSet_block(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitWillSet_didSet_block) {
			listener.exitWillSet_didSet_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitWillSet_didSet_block) {
			return visitor.visitWillSet_didSet_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WillSet_clauseContext extends ParserRuleContext {
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public setter_name(): Setter_nameContext | undefined {
		return this.tryGetRuleContext(0, Setter_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_willSet_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterWillSet_clause) {
			listener.enterWillSet_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitWillSet_clause) {
			listener.exitWillSet_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitWillSet_clause) {
			return visitor.visitWillSet_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DidSet_clauseContext extends ParserRuleContext {
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public setter_name(): Setter_nameContext | undefined {
		return this.tryGetRuleContext(0, Setter_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_didSet_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterDidSet_clause) {
			listener.enterDidSet_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitDidSet_clause) {
			listener.exitDidSet_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitDidSet_clause) {
			return visitor.visitDidSet_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Typealias_declarationContext extends ParserRuleContext {
	public typealias_head(): Typealias_headContext {
		return this.getRuleContext(0, Typealias_headContext);
	}
	public typealias_assignment(): Typealias_assignmentContext {
		return this.getRuleContext(0, Typealias_assignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_typealias_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterTypealias_declaration) {
			listener.enterTypealias_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitTypealias_declaration) {
			listener.exitTypealias_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitTypealias_declaration) {
			return visitor.visitTypealias_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Typealias_headContext extends ParserRuleContext {
	public typealias_name(): Typealias_nameContext {
		return this.getRuleContext(0, Typealias_nameContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public access_level_modifier(): Access_level_modifierContext | undefined {
		return this.tryGetRuleContext(0, Access_level_modifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_typealias_head; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterTypealias_head) {
			listener.enterTypealias_head(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitTypealias_head) {
			listener.exitTypealias_head(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitTypealias_head) {
			return visitor.visitTypealias_head(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Typealias_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_typealias_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterTypealias_name) {
			listener.enterTypealias_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitTypealias_name) {
			listener.exitTypealias_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitTypealias_name) {
			return visitor.visitTypealias_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Typealias_assignmentContext extends ParserRuleContext {
	public assignment_operator(): Assignment_operatorContext {
		return this.getRuleContext(0, Assignment_operatorContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_typealias_assignment; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterTypealias_assignment) {
			listener.enterTypealias_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitTypealias_assignment) {
			listener.exitTypealias_assignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitTypealias_assignment) {
			return visitor.visitTypealias_assignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_declarationContext extends ParserRuleContext {
	public function_head(): Function_headContext {
		return this.getRuleContext(0, Function_headContext);
	}
	public function_name(): Function_nameContext {
		return this.getRuleContext(0, Function_nameContext);
	}
	public function_signature(): Function_signatureContext {
		return this.getRuleContext(0, Function_signatureContext);
	}
	public generic_parameter_clause(): Generic_parameter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_parameter_clauseContext);
	}
	public function_body(): Function_bodyContext | undefined {
		return this.tryGetRuleContext(0, Function_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_function_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterFunction_declaration) {
			listener.enterFunction_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitFunction_declaration) {
			listener.exitFunction_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitFunction_declaration) {
			return visitor.visitFunction_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_headContext extends ParserRuleContext {
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public declaration_modifiers(): Declaration_modifiersContext | undefined {
		return this.tryGetRuleContext(0, Declaration_modifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_function_head; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterFunction_head) {
			listener.enterFunction_head(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitFunction_head) {
			listener.exitFunction_head(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitFunction_head) {
			return visitor.visitFunction_head(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_function_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterFunction_name) {
			listener.enterFunction_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitFunction_name) {
			listener.exitFunction_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitFunction_name) {
			return visitor.visitFunction_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_signatureContext extends ParserRuleContext {
	public parameter_clauses(): Parameter_clausesContext {
		return this.getRuleContext(0, Parameter_clausesContext);
	}
	public function_result(): Function_resultContext | undefined {
		return this.tryGetRuleContext(0, Function_resultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_function_signature; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterFunction_signature) {
			listener.enterFunction_signature(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitFunction_signature) {
			listener.exitFunction_signature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitFunction_signature) {
			return visitor.visitFunction_signature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_resultContext extends ParserRuleContext {
	public arrow_operator(): Arrow_operatorContext {
		return this.getRuleContext(0, Arrow_operatorContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_function_result; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterFunction_result) {
			listener.enterFunction_result(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitFunction_result) {
			listener.exitFunction_result(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitFunction_result) {
			return visitor.visitFunction_result(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_bodyContext extends ParserRuleContext {
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_function_body; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterFunction_body) {
			listener.enterFunction_body(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitFunction_body) {
			listener.exitFunction_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitFunction_body) {
			return visitor.visitFunction_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_clausesContext extends ParserRuleContext {
	public parameter_clause(): Parameter_clauseContext {
		return this.getRuleContext(0, Parameter_clauseContext);
	}
	public parameter_clauses(): Parameter_clausesContext | undefined {
		return this.tryGetRuleContext(0, Parameter_clausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_parameter_clauses; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterParameter_clauses) {
			listener.enterParameter_clauses(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitParameter_clauses) {
			listener.exitParameter_clauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitParameter_clauses) {
			return visitor.visitParameter_clauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_clauseContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift2Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Swift2Parser.RPAREN, 0); }
	public parameter_list(): Parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Parameter_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_parameter_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterParameter_clause) {
			listener.enterParameter_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitParameter_clause) {
			listener.exitParameter_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitParameter_clause) {
			return visitor.visitParameter_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_listContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.COMMA);
		} else {
			return this.getToken(Swift2Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_parameter_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterParameter_list) {
			listener.enterParameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitParameter_list) {
			listener.exitParameter_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitParameter_list) {
			return visitor.visitParameter_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public local_parameter_name(): Local_parameter_nameContext {
		return this.getRuleContext(0, Local_parameter_nameContext);
	}
	public external_parameter_name(): External_parameter_nameContext | undefined {
		return this.tryGetRuleContext(0, External_parameter_nameContext);
	}
	public type_annotation(): Type_annotationContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationContext);
	}
	public default_argument_clause(): Default_argument_clauseContext | undefined {
		return this.tryGetRuleContext(0, Default_argument_clauseContext);
	}
	public range_operator(): Range_operatorContext | undefined {
		return this.tryGetRuleContext(0, Range_operatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_parameter; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class External_parameter_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public UNDERSCORE(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.UNDERSCORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_external_parameter_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterExternal_parameter_name) {
			listener.enterExternal_parameter_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitExternal_parameter_name) {
			listener.exitExternal_parameter_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitExternal_parameter_name) {
			return visitor.visitExternal_parameter_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Local_parameter_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public UNDERSCORE(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.UNDERSCORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_local_parameter_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterLocal_parameter_name) {
			listener.enterLocal_parameter_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitLocal_parameter_name) {
			listener.exitLocal_parameter_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitLocal_parameter_name) {
			return visitor.visitLocal_parameter_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Default_argument_clauseContext extends ParserRuleContext {
	public assignment_operator(): Assignment_operatorContext {
		return this.getRuleContext(0, Assignment_operatorContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_default_argument_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterDefault_argument_clause) {
			listener.enterDefault_argument_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitDefault_argument_clause) {
			listener.exitDefault_argument_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitDefault_argument_clause) {
			return visitor.visitDefault_argument_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_declarationContext extends ParserRuleContext {
	public union_style_enum(): Union_style_enumContext | undefined {
		return this.tryGetRuleContext(0, Union_style_enumContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public access_level_modifier(): Access_level_modifierContext | undefined {
		return this.tryGetRuleContext(0, Access_level_modifierContext);
	}
	public raw_value_style_enum(): Raw_value_style_enumContext | undefined {
		return this.tryGetRuleContext(0, Raw_value_style_enumContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_enum_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterEnum_declaration) {
			listener.enterEnum_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitEnum_declaration) {
			listener.exitEnum_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitEnum_declaration) {
			return visitor.visitEnum_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Union_style_enumContext extends ParserRuleContext {
	public enum_name(): Enum_nameContext {
		return this.getRuleContext(0, Enum_nameContext);
	}
	public LCURLY(): TerminalNode { return this.getToken(Swift2Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift2Parser.RCURLY, 0); }
	public generic_parameter_clause(): Generic_parameter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_parameter_clauseContext);
	}
	public type_inheritance_clause(): Type_inheritance_clauseContext | undefined {
		return this.tryGetRuleContext(0, Type_inheritance_clauseContext);
	}
	public union_style_enum_members(): Union_style_enum_membersContext | undefined {
		return this.tryGetRuleContext(0, Union_style_enum_membersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_union_style_enum; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterUnion_style_enum) {
			listener.enterUnion_style_enum(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitUnion_style_enum) {
			listener.exitUnion_style_enum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitUnion_style_enum) {
			return visitor.visitUnion_style_enum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Union_style_enum_membersContext extends ParserRuleContext {
	public union_style_enum_member(): Union_style_enum_memberContext {
		return this.getRuleContext(0, Union_style_enum_memberContext);
	}
	public union_style_enum_members(): Union_style_enum_membersContext | undefined {
		return this.tryGetRuleContext(0, Union_style_enum_membersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_union_style_enum_members; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterUnion_style_enum_members) {
			listener.enterUnion_style_enum_members(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitUnion_style_enum_members) {
			listener.exitUnion_style_enum_members(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitUnion_style_enum_members) {
			return visitor.visitUnion_style_enum_members(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Union_style_enum_memberContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public union_style_enum_case_clause(): Union_style_enum_case_clauseContext | undefined {
		return this.tryGetRuleContext(0, Union_style_enum_case_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_union_style_enum_member; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterUnion_style_enum_member) {
			listener.enterUnion_style_enum_member(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitUnion_style_enum_member) {
			listener.exitUnion_style_enum_member(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitUnion_style_enum_member) {
			return visitor.visitUnion_style_enum_member(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Union_style_enum_case_clauseContext extends ParserRuleContext {
	public union_style_enum_case_list(): Union_style_enum_case_listContext {
		return this.getRuleContext(0, Union_style_enum_case_listContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_union_style_enum_case_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterUnion_style_enum_case_clause) {
			listener.enterUnion_style_enum_case_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitUnion_style_enum_case_clause) {
			listener.exitUnion_style_enum_case_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitUnion_style_enum_case_clause) {
			return visitor.visitUnion_style_enum_case_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Union_style_enum_case_listContext extends ParserRuleContext {
	public union_style_enum_case(): Union_style_enum_caseContext {
		return this.getRuleContext(0, Union_style_enum_caseContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.COMMA, 0); }
	public union_style_enum_case_list(): Union_style_enum_case_listContext | undefined {
		return this.tryGetRuleContext(0, Union_style_enum_case_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_union_style_enum_case_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterUnion_style_enum_case_list) {
			listener.enterUnion_style_enum_case_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitUnion_style_enum_case_list) {
			listener.exitUnion_style_enum_case_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitUnion_style_enum_case_list) {
			return visitor.visitUnion_style_enum_case_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Union_style_enum_caseContext extends ParserRuleContext {
	public enum_case_name(): Enum_case_nameContext {
		return this.getRuleContext(0, Enum_case_nameContext);
	}
	public tuple_type(): Tuple_typeContext | undefined {
		return this.tryGetRuleContext(0, Tuple_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_union_style_enum_case; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterUnion_style_enum_case) {
			listener.enterUnion_style_enum_case(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitUnion_style_enum_case) {
			listener.exitUnion_style_enum_case(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitUnion_style_enum_case) {
			return visitor.visitUnion_style_enum_case(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_enum_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterEnum_name) {
			listener.enterEnum_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitEnum_name) {
			listener.exitEnum_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitEnum_name) {
			return visitor.visitEnum_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_case_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_enum_case_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterEnum_case_name) {
			listener.enterEnum_case_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitEnum_case_name) {
			listener.exitEnum_case_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitEnum_case_name) {
			return visitor.visitEnum_case_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raw_value_style_enumContext extends ParserRuleContext {
	public enum_name(): Enum_nameContext {
		return this.getRuleContext(0, Enum_nameContext);
	}
	public type_inheritance_clause(): Type_inheritance_clauseContext {
		return this.getRuleContext(0, Type_inheritance_clauseContext);
	}
	public LCURLY(): TerminalNode { return this.getToken(Swift2Parser.LCURLY, 0); }
	public raw_value_style_enum_members(): Raw_value_style_enum_membersContext {
		return this.getRuleContext(0, Raw_value_style_enum_membersContext);
	}
	public RCURLY(): TerminalNode { return this.getToken(Swift2Parser.RCURLY, 0); }
	public generic_parameter_clause(): Generic_parameter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_parameter_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_raw_value_style_enum; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterRaw_value_style_enum) {
			listener.enterRaw_value_style_enum(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitRaw_value_style_enum) {
			listener.exitRaw_value_style_enum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitRaw_value_style_enum) {
			return visitor.visitRaw_value_style_enum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raw_value_style_enum_membersContext extends ParserRuleContext {
	public raw_value_style_enum_member(): Raw_value_style_enum_memberContext {
		return this.getRuleContext(0, Raw_value_style_enum_memberContext);
	}
	public raw_value_style_enum_members(): Raw_value_style_enum_membersContext | undefined {
		return this.tryGetRuleContext(0, Raw_value_style_enum_membersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_raw_value_style_enum_members; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterRaw_value_style_enum_members) {
			listener.enterRaw_value_style_enum_members(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitRaw_value_style_enum_members) {
			listener.exitRaw_value_style_enum_members(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitRaw_value_style_enum_members) {
			return visitor.visitRaw_value_style_enum_members(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raw_value_style_enum_memberContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public raw_value_style_enum_case_clause(): Raw_value_style_enum_case_clauseContext | undefined {
		return this.tryGetRuleContext(0, Raw_value_style_enum_case_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_raw_value_style_enum_member; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterRaw_value_style_enum_member) {
			listener.enterRaw_value_style_enum_member(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitRaw_value_style_enum_member) {
			listener.exitRaw_value_style_enum_member(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitRaw_value_style_enum_member) {
			return visitor.visitRaw_value_style_enum_member(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raw_value_style_enum_case_clauseContext extends ParserRuleContext {
	public raw_value_style_enum_case_list(): Raw_value_style_enum_case_listContext {
		return this.getRuleContext(0, Raw_value_style_enum_case_listContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_raw_value_style_enum_case_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterRaw_value_style_enum_case_clause) {
			listener.enterRaw_value_style_enum_case_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitRaw_value_style_enum_case_clause) {
			listener.exitRaw_value_style_enum_case_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitRaw_value_style_enum_case_clause) {
			return visitor.visitRaw_value_style_enum_case_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raw_value_style_enum_case_listContext extends ParserRuleContext {
	public raw_value_style_enum_case(): Raw_value_style_enum_caseContext {
		return this.getRuleContext(0, Raw_value_style_enum_caseContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.COMMA, 0); }
	public raw_value_style_enum_case_list(): Raw_value_style_enum_case_listContext | undefined {
		return this.tryGetRuleContext(0, Raw_value_style_enum_case_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_raw_value_style_enum_case_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterRaw_value_style_enum_case_list) {
			listener.enterRaw_value_style_enum_case_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitRaw_value_style_enum_case_list) {
			listener.exitRaw_value_style_enum_case_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitRaw_value_style_enum_case_list) {
			return visitor.visitRaw_value_style_enum_case_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raw_value_style_enum_caseContext extends ParserRuleContext {
	public enum_case_name(): Enum_case_nameContext {
		return this.getRuleContext(0, Enum_case_nameContext);
	}
	public raw_value_assignment(): Raw_value_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Raw_value_assignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_raw_value_style_enum_case; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterRaw_value_style_enum_case) {
			listener.enterRaw_value_style_enum_case(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitRaw_value_style_enum_case) {
			listener.exitRaw_value_style_enum_case(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitRaw_value_style_enum_case) {
			return visitor.visitRaw_value_style_enum_case(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raw_value_assignmentContext extends ParserRuleContext {
	public assignment_operator(): Assignment_operatorContext {
		return this.getRuleContext(0, Assignment_operatorContext);
	}
	public raw_value_literal(): Raw_value_literalContext {
		return this.getRuleContext(0, Raw_value_literalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_raw_value_assignment; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterRaw_value_assignment) {
			listener.enterRaw_value_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitRaw_value_assignment) {
			listener.exitRaw_value_assignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitRaw_value_assignment) {
			return visitor.visitRaw_value_assignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raw_value_literalContext extends ParserRuleContext {
	public numeric_literal(): Numeric_literalContext | undefined {
		return this.tryGetRuleContext(0, Numeric_literalContext);
	}
	public Static_string_literal(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.Static_string_literal, 0); }
	public boolean_literal(): Boolean_literalContext | undefined {
		return this.tryGetRuleContext(0, Boolean_literalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_raw_value_literal; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterRaw_value_literal) {
			listener.enterRaw_value_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitRaw_value_literal) {
			listener.exitRaw_value_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitRaw_value_literal) {
			return visitor.visitRaw_value_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_declarationContext extends ParserRuleContext {
	public struct_name(): Struct_nameContext {
		return this.getRuleContext(0, Struct_nameContext);
	}
	public struct_body(): Struct_bodyContext {
		return this.getRuleContext(0, Struct_bodyContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public access_level_modifier(): Access_level_modifierContext | undefined {
		return this.tryGetRuleContext(0, Access_level_modifierContext);
	}
	public generic_parameter_clause(): Generic_parameter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_parameter_clauseContext);
	}
	public type_inheritance_clause(): Type_inheritance_clauseContext | undefined {
		return this.tryGetRuleContext(0, Type_inheritance_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_struct_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterStruct_declaration) {
			listener.enterStruct_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitStruct_declaration) {
			listener.exitStruct_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitStruct_declaration) {
			return visitor.visitStruct_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_struct_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterStruct_name) {
			listener.enterStruct_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitStruct_name) {
			listener.exitStruct_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitStruct_name) {
			return visitor.visitStruct_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_bodyContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift2Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift2Parser.RCURLY, 0); }
	public declarations(): DeclarationsContext | undefined {
		return this.tryGetRuleContext(0, DeclarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_struct_body; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterStruct_body) {
			listener.enterStruct_body(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitStruct_body) {
			listener.exitStruct_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitStruct_body) {
			return visitor.visitStruct_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_declarationContext extends ParserRuleContext {
	public class_name(): Class_nameContext {
		return this.getRuleContext(0, Class_nameContext);
	}
	public class_body(): Class_bodyContext {
		return this.getRuleContext(0, Class_bodyContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public access_level_modifier(): Access_level_modifierContext | undefined {
		return this.tryGetRuleContext(0, Access_level_modifierContext);
	}
	public generic_parameter_clause(): Generic_parameter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_parameter_clauseContext);
	}
	public type_inheritance_clause(): Type_inheritance_clauseContext | undefined {
		return this.tryGetRuleContext(0, Type_inheritance_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_class_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterClass_declaration) {
			listener.enterClass_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitClass_declaration) {
			listener.exitClass_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitClass_declaration) {
			return visitor.visitClass_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_class_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterClass_name) {
			listener.enterClass_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitClass_name) {
			listener.exitClass_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitClass_name) {
			return visitor.visitClass_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_bodyContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift2Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift2Parser.RCURLY, 0); }
	public declarations(): DeclarationsContext | undefined {
		return this.tryGetRuleContext(0, DeclarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_class_body; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterClass_body) {
			listener.enterClass_body(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitClass_body) {
			listener.exitClass_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitClass_body) {
			return visitor.visitClass_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Protocol_declarationContext extends ParserRuleContext {
	public protocol_name(): Protocol_nameContext {
		return this.getRuleContext(0, Protocol_nameContext);
	}
	public protocol_body(): Protocol_bodyContext {
		return this.getRuleContext(0, Protocol_bodyContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public access_level_modifier(): Access_level_modifierContext | undefined {
		return this.tryGetRuleContext(0, Access_level_modifierContext);
	}
	public type_inheritance_clause(): Type_inheritance_clauseContext | undefined {
		return this.tryGetRuleContext(0, Type_inheritance_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_protocol_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterProtocol_declaration) {
			listener.enterProtocol_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitProtocol_declaration) {
			listener.exitProtocol_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitProtocol_declaration) {
			return visitor.visitProtocol_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Protocol_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_protocol_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterProtocol_name) {
			listener.enterProtocol_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitProtocol_name) {
			listener.exitProtocol_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitProtocol_name) {
			return visitor.visitProtocol_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Protocol_bodyContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift2Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift2Parser.RCURLY, 0); }
	public protocol_member_declarations(): Protocol_member_declarationsContext | undefined {
		return this.tryGetRuleContext(0, Protocol_member_declarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_protocol_body; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterProtocol_body) {
			listener.enterProtocol_body(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitProtocol_body) {
			listener.exitProtocol_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitProtocol_body) {
			return visitor.visitProtocol_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Protocol_member_declarationContext extends ParserRuleContext {
	public protocol_property_declaration(): Protocol_property_declarationContext | undefined {
		return this.tryGetRuleContext(0, Protocol_property_declarationContext);
	}
	public protocol_method_declaration(): Protocol_method_declarationContext | undefined {
		return this.tryGetRuleContext(0, Protocol_method_declarationContext);
	}
	public protocol_initializer_declaration(): Protocol_initializer_declarationContext | undefined {
		return this.tryGetRuleContext(0, Protocol_initializer_declarationContext);
	}
	public protocol_subscript_declaration(): Protocol_subscript_declarationContext | undefined {
		return this.tryGetRuleContext(0, Protocol_subscript_declarationContext);
	}
	public protocol_associated_type_declaration(): Protocol_associated_type_declarationContext | undefined {
		return this.tryGetRuleContext(0, Protocol_associated_type_declarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_protocol_member_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterProtocol_member_declaration) {
			listener.enterProtocol_member_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitProtocol_member_declaration) {
			listener.exitProtocol_member_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitProtocol_member_declaration) {
			return visitor.visitProtocol_member_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Protocol_member_declarationsContext extends ParserRuleContext {
	public protocol_member_declaration(): Protocol_member_declarationContext {
		return this.getRuleContext(0, Protocol_member_declarationContext);
	}
	public protocol_member_declarations(): Protocol_member_declarationsContext | undefined {
		return this.tryGetRuleContext(0, Protocol_member_declarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_protocol_member_declarations; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterProtocol_member_declarations) {
			listener.enterProtocol_member_declarations(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitProtocol_member_declarations) {
			listener.exitProtocol_member_declarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitProtocol_member_declarations) {
			return visitor.visitProtocol_member_declarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Protocol_property_declarationContext extends ParserRuleContext {
	public variable_declaration_head(): Variable_declaration_headContext {
		return this.getRuleContext(0, Variable_declaration_headContext);
	}
	public variable_name(): Variable_nameContext {
		return this.getRuleContext(0, Variable_nameContext);
	}
	public type_annotation(): Type_annotationContext {
		return this.getRuleContext(0, Type_annotationContext);
	}
	public getter_setter_keyword_block(): Getter_setter_keyword_blockContext {
		return this.getRuleContext(0, Getter_setter_keyword_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_protocol_property_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterProtocol_property_declaration) {
			listener.enterProtocol_property_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitProtocol_property_declaration) {
			listener.exitProtocol_property_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitProtocol_property_declaration) {
			return visitor.visitProtocol_property_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Protocol_method_declarationContext extends ParserRuleContext {
	public function_head(): Function_headContext {
		return this.getRuleContext(0, Function_headContext);
	}
	public function_name(): Function_nameContext {
		return this.getRuleContext(0, Function_nameContext);
	}
	public function_signature(): Function_signatureContext {
		return this.getRuleContext(0, Function_signatureContext);
	}
	public generic_parameter_clause(): Generic_parameter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_parameter_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_protocol_method_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterProtocol_method_declaration) {
			listener.enterProtocol_method_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitProtocol_method_declaration) {
			listener.exitProtocol_method_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitProtocol_method_declaration) {
			return visitor.visitProtocol_method_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Protocol_initializer_declarationContext extends ParserRuleContext {
	public initializer_head(): Initializer_headContext {
		return this.getRuleContext(0, Initializer_headContext);
	}
	public parameter_clause(): Parameter_clauseContext {
		return this.getRuleContext(0, Parameter_clauseContext);
	}
	public generic_parameter_clause(): Generic_parameter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_parameter_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_protocol_initializer_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterProtocol_initializer_declaration) {
			listener.enterProtocol_initializer_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitProtocol_initializer_declaration) {
			listener.exitProtocol_initializer_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitProtocol_initializer_declaration) {
			return visitor.visitProtocol_initializer_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Protocol_subscript_declarationContext extends ParserRuleContext {
	public subscript_head(): Subscript_headContext {
		return this.getRuleContext(0, Subscript_headContext);
	}
	public subscript_result(): Subscript_resultContext {
		return this.getRuleContext(0, Subscript_resultContext);
	}
	public getter_setter_keyword_block(): Getter_setter_keyword_blockContext {
		return this.getRuleContext(0, Getter_setter_keyword_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_protocol_subscript_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterProtocol_subscript_declaration) {
			listener.enterProtocol_subscript_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitProtocol_subscript_declaration) {
			listener.exitProtocol_subscript_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitProtocol_subscript_declaration) {
			return visitor.visitProtocol_subscript_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Protocol_associated_type_declarationContext extends ParserRuleContext {
	public typealias_name(): Typealias_nameContext {
		return this.getRuleContext(0, Typealias_nameContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public access_level_modifier(): Access_level_modifierContext | undefined {
		return this.tryGetRuleContext(0, Access_level_modifierContext);
	}
	public type_inheritance_clause(): Type_inheritance_clauseContext | undefined {
		return this.tryGetRuleContext(0, Type_inheritance_clauseContext);
	}
	public typealias_assignment(): Typealias_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Typealias_assignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_protocol_associated_type_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterProtocol_associated_type_declaration) {
			listener.enterProtocol_associated_type_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitProtocol_associated_type_declaration) {
			listener.exitProtocol_associated_type_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitProtocol_associated_type_declaration) {
			return visitor.visitProtocol_associated_type_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Initializer_declarationContext extends ParserRuleContext {
	public initializer_head(): Initializer_headContext {
		return this.getRuleContext(0, Initializer_headContext);
	}
	public parameter_clause(): Parameter_clauseContext {
		return this.getRuleContext(0, Parameter_clauseContext);
	}
	public initializer_body(): Initializer_bodyContext {
		return this.getRuleContext(0, Initializer_bodyContext);
	}
	public generic_parameter_clause(): Generic_parameter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_parameter_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_initializer_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterInitializer_declaration) {
			listener.enterInitializer_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitInitializer_declaration) {
			listener.exitInitializer_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitInitializer_declaration) {
			return visitor.visitInitializer_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Initializer_headContext extends ParserRuleContext {
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public declaration_modifiers(): Declaration_modifiersContext | undefined {
		return this.tryGetRuleContext(0, Declaration_modifiersContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.QUESTION, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.BANG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_initializer_head; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterInitializer_head) {
			listener.enterInitializer_head(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitInitializer_head) {
			listener.exitInitializer_head(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitInitializer_head) {
			return visitor.visitInitializer_head(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Initializer_bodyContext extends ParserRuleContext {
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_initializer_body; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterInitializer_body) {
			listener.enterInitializer_body(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitInitializer_body) {
			listener.exitInitializer_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitInitializer_body) {
			return visitor.visitInitializer_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Deinitializer_declarationContext extends ParserRuleContext {
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_deinitializer_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterDeinitializer_declaration) {
			listener.enterDeinitializer_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitDeinitializer_declaration) {
			listener.exitDeinitializer_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitDeinitializer_declaration) {
			return visitor.visitDeinitializer_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Extension_declarationContext extends ParserRuleContext {
	public type_identifier(): Type_identifierContext {
		return this.getRuleContext(0, Type_identifierContext);
	}
	public extension_body(): Extension_bodyContext {
		return this.getRuleContext(0, Extension_bodyContext);
	}
	public access_level_modifier(): Access_level_modifierContext | undefined {
		return this.tryGetRuleContext(0, Access_level_modifierContext);
	}
	public type_inheritance_clause(): Type_inheritance_clauseContext | undefined {
		return this.tryGetRuleContext(0, Type_inheritance_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_extension_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterExtension_declaration) {
			listener.enterExtension_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitExtension_declaration) {
			listener.exitExtension_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitExtension_declaration) {
			return visitor.visitExtension_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Extension_bodyContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift2Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift2Parser.RCURLY, 0); }
	public declarations(): DeclarationsContext | undefined {
		return this.tryGetRuleContext(0, DeclarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_extension_body; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterExtension_body) {
			listener.enterExtension_body(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitExtension_body) {
			listener.exitExtension_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitExtension_body) {
			return visitor.visitExtension_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Subscript_declarationContext extends ParserRuleContext {
	public subscript_head(): Subscript_headContext {
		return this.getRuleContext(0, Subscript_headContext);
	}
	public subscript_result(): Subscript_resultContext {
		return this.getRuleContext(0, Subscript_resultContext);
	}
	public code_block(): Code_blockContext | undefined {
		return this.tryGetRuleContext(0, Code_blockContext);
	}
	public getter_setter_block(): Getter_setter_blockContext | undefined {
		return this.tryGetRuleContext(0, Getter_setter_blockContext);
	}
	public getter_setter_keyword_block(): Getter_setter_keyword_blockContext | undefined {
		return this.tryGetRuleContext(0, Getter_setter_keyword_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_subscript_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSubscript_declaration) {
			listener.enterSubscript_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSubscript_declaration) {
			listener.exitSubscript_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSubscript_declaration) {
			return visitor.visitSubscript_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Subscript_headContext extends ParserRuleContext {
	public parameter_clause(): Parameter_clauseContext {
		return this.getRuleContext(0, Parameter_clauseContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public declaration_modifiers(): Declaration_modifiersContext | undefined {
		return this.tryGetRuleContext(0, Declaration_modifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_subscript_head; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSubscript_head) {
			listener.enterSubscript_head(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSubscript_head) {
			listener.exitSubscript_head(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSubscript_head) {
			return visitor.visitSubscript_head(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Subscript_resultContext extends ParserRuleContext {
	public arrow_operator(): Arrow_operatorContext {
		return this.getRuleContext(0, Arrow_operatorContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_subscript_result; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSubscript_result) {
			listener.enterSubscript_result(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSubscript_result) {
			listener.exitSubscript_result(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSubscript_result) {
			return visitor.visitSubscript_result(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operator_declarationContext extends ParserRuleContext {
	public prefix_operator_declaration(): Prefix_operator_declarationContext | undefined {
		return this.tryGetRuleContext(0, Prefix_operator_declarationContext);
	}
	public postfix_operator_declaration(): Postfix_operator_declarationContext | undefined {
		return this.tryGetRuleContext(0, Postfix_operator_declarationContext);
	}
	public infix_operator_declaration(): Infix_operator_declarationContext | undefined {
		return this.tryGetRuleContext(0, Infix_operator_declarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_operator_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterOperator_declaration) {
			listener.enterOperator_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitOperator_declaration) {
			listener.exitOperator_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitOperator_declaration) {
			return visitor.visitOperator_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Prefix_operator_declarationContext extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public LCURLY(): TerminalNode { return this.getToken(Swift2Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift2Parser.RCURLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_prefix_operator_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterPrefix_operator_declaration) {
			listener.enterPrefix_operator_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitPrefix_operator_declaration) {
			listener.exitPrefix_operator_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitPrefix_operator_declaration) {
			return visitor.visitPrefix_operator_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Postfix_operator_declarationContext extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public LCURLY(): TerminalNode { return this.getToken(Swift2Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift2Parser.RCURLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_postfix_operator_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterPostfix_operator_declaration) {
			listener.enterPostfix_operator_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitPostfix_operator_declaration) {
			listener.exitPostfix_operator_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitPostfix_operator_declaration) {
			return visitor.visitPostfix_operator_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Infix_operator_declarationContext extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public LCURLY(): TerminalNode { return this.getToken(Swift2Parser.LCURLY, 0); }
	public infix_operator_attributes(): Infix_operator_attributesContext {
		return this.getRuleContext(0, Infix_operator_attributesContext);
	}
	public RCURLY(): TerminalNode { return this.getToken(Swift2Parser.RCURLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_infix_operator_declaration; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterInfix_operator_declaration) {
			listener.enterInfix_operator_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitInfix_operator_declaration) {
			listener.exitInfix_operator_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitInfix_operator_declaration) {
			return visitor.visitInfix_operator_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Infix_operator_attributesContext extends ParserRuleContext {
	public precedence_clause(): Precedence_clauseContext | undefined {
		return this.tryGetRuleContext(0, Precedence_clauseContext);
	}
	public associativity_clause(): Associativity_clauseContext | undefined {
		return this.tryGetRuleContext(0, Associativity_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_infix_operator_attributes; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterInfix_operator_attributes) {
			listener.enterInfix_operator_attributes(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitInfix_operator_attributes) {
			listener.exitInfix_operator_attributes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitInfix_operator_attributes) {
			return visitor.visitInfix_operator_attributes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Precedence_clauseContext extends ParserRuleContext {
	public precedence_level(): Precedence_levelContext {
		return this.getRuleContext(0, Precedence_levelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_precedence_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterPrecedence_clause) {
			listener.enterPrecedence_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitPrecedence_clause) {
			listener.exitPrecedence_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitPrecedence_clause) {
			return visitor.visitPrecedence_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Precedence_levelContext extends ParserRuleContext {
	public integer_literal(): Integer_literalContext {
		return this.getRuleContext(0, Integer_literalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_precedence_level; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterPrecedence_level) {
			listener.enterPrecedence_level(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitPrecedence_level) {
			listener.exitPrecedence_level(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitPrecedence_level) {
			return visitor.visitPrecedence_level(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Associativity_clauseContext extends ParserRuleContext {
	public associativity(): AssociativityContext {
		return this.getRuleContext(0, AssociativityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_associativity_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterAssociativity_clause) {
			listener.enterAssociativity_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitAssociativity_clause) {
			listener.exitAssociativity_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitAssociativity_clause) {
			return visitor.visitAssociativity_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssociativityContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_associativity; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterAssociativity) {
			listener.enterAssociativity(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitAssociativity) {
			listener.exitAssociativity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitAssociativity) {
			return visitor.visitAssociativity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declaration_modifierContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.RPAREN, 0); }
	public access_level_modifier(): Access_level_modifierContext | undefined {
		return this.tryGetRuleContext(0, Access_level_modifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_declaration_modifier; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterDeclaration_modifier) {
			listener.enterDeclaration_modifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitDeclaration_modifier) {
			listener.exitDeclaration_modifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitDeclaration_modifier) {
			return visitor.visitDeclaration_modifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declaration_modifiersContext extends ParserRuleContext {
	public declaration_modifier(): Declaration_modifierContext {
		return this.getRuleContext(0, Declaration_modifierContext);
	}
	public declaration_modifiers(): Declaration_modifiersContext | undefined {
		return this.tryGetRuleContext(0, Declaration_modifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_declaration_modifiers; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterDeclaration_modifiers) {
			listener.enterDeclaration_modifiers(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitDeclaration_modifiers) {
			listener.exitDeclaration_modifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitDeclaration_modifiers) {
			return visitor.visitDeclaration_modifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Access_level_modifierContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_access_level_modifier; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterAccess_level_modifier) {
			listener.enterAccess_level_modifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitAccess_level_modifier) {
			listener.exitAccess_level_modifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitAccess_level_modifier) {
			return visitor.visitAccess_level_modifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	public wildcard_pattern(): Wildcard_patternContext | undefined {
		return this.tryGetRuleContext(0, Wildcard_patternContext);
	}
	public type_annotation(): Type_annotationContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationContext);
	}
	public identifier_pattern(): Identifier_patternContext | undefined {
		return this.tryGetRuleContext(0, Identifier_patternContext);
	}
	public value_binding_pattern(): Value_binding_patternContext | undefined {
		return this.tryGetRuleContext(0, Value_binding_patternContext);
	}
	public tuple_pattern(): Tuple_patternContext | undefined {
		return this.tryGetRuleContext(0, Tuple_patternContext);
	}
	public enum_case_pattern(): Enum_case_patternContext | undefined {
		return this.tryGetRuleContext(0, Enum_case_patternContext);
	}
	public optional_pattern(): Optional_patternContext | undefined {
		return this.tryGetRuleContext(0, Optional_patternContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	public expression_pattern(): Expression_patternContext | undefined {
		return this.tryGetRuleContext(0, Expression_patternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_pattern; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterPattern) {
			listener.enterPattern(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitPattern) {
			listener.exitPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitPattern) {
			return visitor.visitPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Wildcard_patternContext extends ParserRuleContext {
	public UNDERSCORE(): TerminalNode { return this.getToken(Swift2Parser.UNDERSCORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_wildcard_pattern; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterWildcard_pattern) {
			listener.enterWildcard_pattern(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitWildcard_pattern) {
			listener.exitWildcard_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitWildcard_pattern) {
			return visitor.visitWildcard_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Identifier_patternContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_identifier_pattern; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterIdentifier_pattern) {
			listener.enterIdentifier_pattern(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitIdentifier_pattern) {
			listener.exitIdentifier_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitIdentifier_pattern) {
			return visitor.visitIdentifier_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_binding_patternContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_value_binding_pattern; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterValue_binding_pattern) {
			listener.enterValue_binding_pattern(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitValue_binding_pattern) {
			listener.exitValue_binding_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitValue_binding_pattern) {
			return visitor.visitValue_binding_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tuple_patternContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift2Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Swift2Parser.RPAREN, 0); }
	public tuple_pattern_element_list(): Tuple_pattern_element_listContext | undefined {
		return this.tryGetRuleContext(0, Tuple_pattern_element_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_tuple_pattern; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterTuple_pattern) {
			listener.enterTuple_pattern(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitTuple_pattern) {
			listener.exitTuple_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitTuple_pattern) {
			return visitor.visitTuple_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tuple_pattern_element_listContext extends ParserRuleContext {
	public tuple_pattern_element(): Tuple_pattern_elementContext[];
	public tuple_pattern_element(i: number): Tuple_pattern_elementContext;
	public tuple_pattern_element(i?: number): Tuple_pattern_elementContext | Tuple_pattern_elementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Tuple_pattern_elementContext);
		} else {
			return this.getRuleContext(i, Tuple_pattern_elementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.COMMA);
		} else {
			return this.getToken(Swift2Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_tuple_pattern_element_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterTuple_pattern_element_list) {
			listener.enterTuple_pattern_element_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitTuple_pattern_element_list) {
			listener.exitTuple_pattern_element_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitTuple_pattern_element_list) {
			return visitor.visitTuple_pattern_element_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tuple_pattern_elementContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_tuple_pattern_element; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterTuple_pattern_element) {
			listener.enterTuple_pattern_element(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitTuple_pattern_element) {
			listener.exitTuple_pattern_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitTuple_pattern_element) {
			return visitor.visitTuple_pattern_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_case_patternContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(Swift2Parser.DOT, 0); }
	public enum_case_name(): Enum_case_nameContext {
		return this.getRuleContext(0, Enum_case_nameContext);
	}
	public type_identifier(): Type_identifierContext | undefined {
		return this.tryGetRuleContext(0, Type_identifierContext);
	}
	public tuple_pattern(): Tuple_patternContext | undefined {
		return this.tryGetRuleContext(0, Tuple_patternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_enum_case_pattern; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterEnum_case_pattern) {
			listener.enterEnum_case_pattern(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitEnum_case_pattern) {
			listener.exitEnum_case_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitEnum_case_pattern) {
			return visitor.visitEnum_case_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Optional_patternContext extends ParserRuleContext {
	public identifier_pattern(): Identifier_patternContext {
		return this.getRuleContext(0, Identifier_patternContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(Swift2Parser.QUESTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_optional_pattern; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterOptional_pattern) {
			listener.enterOptional_pattern(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitOptional_pattern) {
			listener.exitOptional_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitOptional_pattern) {
			return visitor.visitOptional_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expression_patternContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_expression_pattern; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterExpression_pattern) {
			listener.enterExpression_pattern(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitExpression_pattern) {
			listener.exitExpression_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitExpression_pattern) {
			return visitor.visitExpression_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public attribute_name(): Attribute_nameContext {
		return this.getRuleContext(0, Attribute_nameContext);
	}
	public AT(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.AT, 0); }
	public attribute_argument_clause(): Attribute_argument_clauseContext | undefined {
		return this.tryGetRuleContext(0, Attribute_argument_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_attribute; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attribute_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_attribute_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterAttribute_name) {
			listener.enterAttribute_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitAttribute_name) {
			listener.exitAttribute_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitAttribute_name) {
			return visitor.visitAttribute_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attribute_argument_clauseContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift2Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Swift2Parser.RPAREN, 0); }
	public balanced_tokens(): Balanced_tokensContext | undefined {
		return this.tryGetRuleContext(0, Balanced_tokensContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_attribute_argument_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterAttribute_argument_clause) {
			listener.enterAttribute_argument_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitAttribute_argument_clause) {
			listener.exitAttribute_argument_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitAttribute_argument_clause) {
			return visitor.visitAttribute_argument_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributesContext extends ParserRuleContext {
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_attributes; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterAttributes) {
			listener.enterAttributes(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitAttributes) {
			listener.exitAttributes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitAttributes) {
			return visitor.visitAttributes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Balanced_tokensContext extends ParserRuleContext {
	public balanced_token(): Balanced_tokenContext[];
	public balanced_token(i: number): Balanced_tokenContext;
	public balanced_token(i?: number): Balanced_tokenContext | Balanced_tokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Balanced_tokenContext);
		} else {
			return this.getRuleContext(i, Balanced_tokenContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_balanced_tokens; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterBalanced_tokens) {
			listener.enterBalanced_tokens(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitBalanced_tokens) {
			listener.exitBalanced_tokens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitBalanced_tokens) {
			return visitor.visitBalanced_tokens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Balanced_tokenContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.RPAREN, 0); }
	public balanced_tokens(): Balanced_tokensContext | undefined {
		return this.tryGetRuleContext(0, Balanced_tokensContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.RBRACK, 0); }
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.RCURLY, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public context_sensitive_keyword(): Context_sensitive_keywordContext | undefined {
		return this.tryGetRuleContext(0, Context_sensitive_keywordContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_balanced_token; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterBalanced_token) {
			listener.enterBalanced_token(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitBalanced_token) {
			listener.exitBalanced_token(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitBalanced_token) {
			return visitor.visitBalanced_token(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public prefix_expression(): Prefix_expressionContext {
		return this.getRuleContext(0, Prefix_expressionContext);
	}
	public try_operator(): Try_operatorContext | undefined {
		return this.tryGetRuleContext(0, Try_operatorContext);
	}
	public binary_expressions(): Binary_expressionsContext | undefined {
		return this.tryGetRuleContext(0, Binary_expressionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expression_listContext extends ParserRuleContext {
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
			return this.getTokens(Swift2Parser.COMMA);
		} else {
			return this.getToken(Swift2Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_expression_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterExpression_list) {
			listener.enterExpression_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitExpression_list) {
			listener.exitExpression_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitExpression_list) {
			return visitor.visitExpression_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Prefix_expressionContext extends ParserRuleContext {
	public prefix_operator(): Prefix_operatorContext | undefined {
		return this.tryGetRuleContext(0, Prefix_operatorContext);
	}
	public postfix_expression(): Postfix_expressionContext | undefined {
		return this.tryGetRuleContext(0, Postfix_expressionContext);
	}
	public in_out_expression(): In_out_expressionContext | undefined {
		return this.tryGetRuleContext(0, In_out_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_prefix_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterPrefix_expression) {
			listener.enterPrefix_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitPrefix_expression) {
			listener.exitPrefix_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitPrefix_expression) {
			return visitor.visitPrefix_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class In_out_expressionContext extends ParserRuleContext {
	public AND(): TerminalNode { return this.getToken(Swift2Parser.AND, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_in_out_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterIn_out_expression) {
			listener.enterIn_out_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitIn_out_expression) {
			listener.exitIn_out_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitIn_out_expression) {
			return visitor.visitIn_out_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Try_operatorContext extends ParserRuleContext {
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.QUESTION, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.BANG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_try_operator; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterTry_operator) {
			listener.enterTry_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitTry_operator) {
			listener.exitTry_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitTry_operator) {
			return visitor.visitTry_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Binary_expressionContext extends ParserRuleContext {
	public binary_operator(): Binary_operatorContext | undefined {
		return this.tryGetRuleContext(0, Binary_operatorContext);
	}
	public prefix_expression(): Prefix_expressionContext | undefined {
		return this.tryGetRuleContext(0, Prefix_expressionContext);
	}
	public conditional_operator(): Conditional_operatorContext | undefined {
		return this.tryGetRuleContext(0, Conditional_operatorContext);
	}
	public try_operator(): Try_operatorContext | undefined {
		return this.tryGetRuleContext(0, Try_operatorContext);
	}
	public type_casting_operator(): Type_casting_operatorContext | undefined {
		return this.tryGetRuleContext(0, Type_casting_operatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_binary_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterBinary_expression) {
			listener.enterBinary_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitBinary_expression) {
			listener.exitBinary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitBinary_expression) {
			return visitor.visitBinary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Binary_expressionsContext extends ParserRuleContext {
	public binary_expression(): Binary_expressionContext[];
	public binary_expression(i: number): Binary_expressionContext;
	public binary_expression(i?: number): Binary_expressionContext | Binary_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Binary_expressionContext);
		} else {
			return this.getRuleContext(i, Binary_expressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_binary_expressions; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterBinary_expressions) {
			listener.enterBinary_expressions(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitBinary_expressions) {
			listener.exitBinary_expressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitBinary_expressions) {
			return visitor.visitBinary_expressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_operatorContext extends ParserRuleContext {
	public QUESTION(): TerminalNode { return this.getToken(Swift2Parser.QUESTION, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode { return this.getToken(Swift2Parser.COLON, 0); }
	public try_operator(): Try_operatorContext | undefined {
		return this.tryGetRuleContext(0, Try_operatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_conditional_operator; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterConditional_operator) {
			listener.enterConditional_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitConditional_operator) {
			listener.exitConditional_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitConditional_operator) {
			return visitor.visitConditional_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_casting_operatorContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.QUESTION, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.BANG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_type_casting_operator; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterType_casting_operator) {
			listener.enterType_casting_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitType_casting_operator) {
			listener.exitType_casting_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitType_casting_operator) {
			return visitor.visitType_casting_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primary_expressionContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public generic_argument_clause(): Generic_argument_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_argument_clauseContext);
	}
	public literal_expression(): Literal_expressionContext | undefined {
		return this.tryGetRuleContext(0, Literal_expressionContext);
	}
	public self_expression(): Self_expressionContext | undefined {
		return this.tryGetRuleContext(0, Self_expressionContext);
	}
	public superclass_expression(): Superclass_expressionContext | undefined {
		return this.tryGetRuleContext(0, Superclass_expressionContext);
	}
	public closure_expression(): Closure_expressionContext | undefined {
		return this.tryGetRuleContext(0, Closure_expressionContext);
	}
	public parenthesized_expression(): Parenthesized_expressionContext | undefined {
		return this.tryGetRuleContext(0, Parenthesized_expressionContext);
	}
	public implicit_member_expression(): Implicit_member_expressionContext | undefined {
		return this.tryGetRuleContext(0, Implicit_member_expressionContext);
	}
	public wildcard_expression(): Wildcard_expressionContext | undefined {
		return this.tryGetRuleContext(0, Wildcard_expressionContext);
	}
	public selector_expression(): Selector_expressionContext | undefined {
		return this.tryGetRuleContext(0, Selector_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_primary_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterPrimary_expression) {
			listener.enterPrimary_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitPrimary_expression) {
			listener.exitPrimary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitPrimary_expression) {
			return visitor.visitPrimary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Implicit_member_expressionContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(Swift2Parser.DOT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_implicit_member_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterImplicit_member_expression) {
			listener.enterImplicit_member_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitImplicit_member_expression) {
			listener.exitImplicit_member_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitImplicit_member_expression) {
			return visitor.visitImplicit_member_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Literal_expressionContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public array_literal(): Array_literalContext | undefined {
		return this.tryGetRuleContext(0, Array_literalContext);
	}
	public dictionary_literal(): Dictionary_literalContext | undefined {
		return this.tryGetRuleContext(0, Dictionary_literalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_literal_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterLiteral_expression) {
			listener.enterLiteral_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitLiteral_expression) {
			listener.exitLiteral_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitLiteral_expression) {
			return visitor.visitLiteral_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_literalContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(Swift2Parser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(Swift2Parser.RBRACK, 0); }
	public array_literal_items(): Array_literal_itemsContext | undefined {
		return this.tryGetRuleContext(0, Array_literal_itemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_array_literal; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterArray_literal) {
			listener.enterArray_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitArray_literal) {
			listener.exitArray_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitArray_literal) {
			return visitor.visitArray_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_literal_itemsContext extends ParserRuleContext {
	public array_literal_item(): Array_literal_itemContext[];
	public array_literal_item(i: number): Array_literal_itemContext;
	public array_literal_item(i?: number): Array_literal_itemContext | Array_literal_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Array_literal_itemContext);
		} else {
			return this.getRuleContext(i, Array_literal_itemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.COMMA);
		} else {
			return this.getToken(Swift2Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_array_literal_items; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterArray_literal_items) {
			listener.enterArray_literal_items(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitArray_literal_items) {
			listener.exitArray_literal_items(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitArray_literal_items) {
			return visitor.visitArray_literal_items(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_literal_itemContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_array_literal_item; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterArray_literal_item) {
			listener.enterArray_literal_item(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitArray_literal_item) {
			listener.exitArray_literal_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitArray_literal_item) {
			return visitor.visitArray_literal_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dictionary_literalContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(Swift2Parser.LBRACK, 0); }
	public dictionary_literal_items(): Dictionary_literal_itemsContext | undefined {
		return this.tryGetRuleContext(0, Dictionary_literal_itemsContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(Swift2Parser.RBRACK, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_dictionary_literal; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterDictionary_literal) {
			listener.enterDictionary_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitDictionary_literal) {
			listener.exitDictionary_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitDictionary_literal) {
			return visitor.visitDictionary_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dictionary_literal_itemsContext extends ParserRuleContext {
	public dictionary_literal_item(): Dictionary_literal_itemContext[];
	public dictionary_literal_item(i: number): Dictionary_literal_itemContext;
	public dictionary_literal_item(i?: number): Dictionary_literal_itemContext | Dictionary_literal_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Dictionary_literal_itemContext);
		} else {
			return this.getRuleContext(i, Dictionary_literal_itemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.COMMA);
		} else {
			return this.getToken(Swift2Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_dictionary_literal_items; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterDictionary_literal_items) {
			listener.enterDictionary_literal_items(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitDictionary_literal_items) {
			listener.exitDictionary_literal_items(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitDictionary_literal_items) {
			return visitor.visitDictionary_literal_items(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dictionary_literal_itemContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(Swift2Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_dictionary_literal_item; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterDictionary_literal_item) {
			listener.enterDictionary_literal_item(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitDictionary_literal_item) {
			listener.exitDictionary_literal_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitDictionary_literal_item) {
			return visitor.visitDictionary_literal_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Self_expressionContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.DOT, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.LBRACK, 0); }
	public expression_list(): Expression_listContext | undefined {
		return this.tryGetRuleContext(0, Expression_listContext);
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_self_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSelf_expression) {
			listener.enterSelf_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSelf_expression) {
			listener.exitSelf_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSelf_expression) {
			return visitor.visitSelf_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Superclass_expressionContext extends ParserRuleContext {
	public superclass_method_expression(): Superclass_method_expressionContext | undefined {
		return this.tryGetRuleContext(0, Superclass_method_expressionContext);
	}
	public superclass_subscript_expression(): Superclass_subscript_expressionContext | undefined {
		return this.tryGetRuleContext(0, Superclass_subscript_expressionContext);
	}
	public superclass_initializer_expression(): Superclass_initializer_expressionContext | undefined {
		return this.tryGetRuleContext(0, Superclass_initializer_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_superclass_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSuperclass_expression) {
			listener.enterSuperclass_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSuperclass_expression) {
			listener.exitSuperclass_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSuperclass_expression) {
			return visitor.visitSuperclass_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Superclass_method_expressionContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(Swift2Parser.DOT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_superclass_method_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSuperclass_method_expression) {
			listener.enterSuperclass_method_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSuperclass_method_expression) {
			listener.exitSuperclass_method_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSuperclass_method_expression) {
			return visitor.visitSuperclass_method_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Superclass_subscript_expressionContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(Swift2Parser.LBRACK, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(Swift2Parser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_superclass_subscript_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSuperclass_subscript_expression) {
			listener.enterSuperclass_subscript_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSuperclass_subscript_expression) {
			listener.exitSuperclass_subscript_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSuperclass_subscript_expression) {
			return visitor.visitSuperclass_subscript_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Superclass_initializer_expressionContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(Swift2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_superclass_initializer_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSuperclass_initializer_expression) {
			listener.enterSuperclass_initializer_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSuperclass_initializer_expression) {
			listener.exitSuperclass_initializer_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSuperclass_initializer_expression) {
			return visitor.visitSuperclass_initializer_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Closure_expressionContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift2Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift2Parser.RCURLY, 0); }
	public closure_signature(): Closure_signatureContext | undefined {
		return this.tryGetRuleContext(0, Closure_signatureContext);
	}
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_closure_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterClosure_expression) {
			listener.enterClosure_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitClosure_expression) {
			listener.exitClosure_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitClosure_expression) {
			return visitor.visitClosure_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Closure_signatureContext extends ParserRuleContext {
	public parameter_clause(): Parameter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Parameter_clauseContext);
	}
	public function_result(): Function_resultContext | undefined {
		return this.tryGetRuleContext(0, Function_resultContext);
	}
	public identifier_list(): Identifier_listContext | undefined {
		return this.tryGetRuleContext(0, Identifier_listContext);
	}
	public capture_list(): Capture_listContext | undefined {
		return this.tryGetRuleContext(0, Capture_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_closure_signature; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterClosure_signature) {
			listener.enterClosure_signature(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitClosure_signature) {
			listener.exitClosure_signature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitClosure_signature) {
			return visitor.visitClosure_signature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Capture_listContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(Swift2Parser.LBRACK, 0); }
	public capture_list_items(): Capture_list_itemsContext {
		return this.getRuleContext(0, Capture_list_itemsContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(Swift2Parser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_capture_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterCapture_list) {
			listener.enterCapture_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitCapture_list) {
			listener.exitCapture_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitCapture_list) {
			return visitor.visitCapture_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Capture_list_itemsContext extends ParserRuleContext {
	public capture_list_item(): Capture_list_itemContext[];
	public capture_list_item(i: number): Capture_list_itemContext;
	public capture_list_item(i?: number): Capture_list_itemContext | Capture_list_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Capture_list_itemContext);
		} else {
			return this.getRuleContext(i, Capture_list_itemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.COMMA);
		} else {
			return this.getToken(Swift2Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_capture_list_items; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterCapture_list_items) {
			listener.enterCapture_list_items(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitCapture_list_items) {
			listener.exitCapture_list_items(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitCapture_list_items) {
			return visitor.visitCapture_list_items(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Capture_list_itemContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public capture_specifier(): Capture_specifierContext | undefined {
		return this.tryGetRuleContext(0, Capture_specifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_capture_list_item; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterCapture_list_item) {
			listener.enterCapture_list_item(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitCapture_list_item) {
			listener.exitCapture_list_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitCapture_list_item) {
			return visitor.visitCapture_list_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Capture_specifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_capture_specifier; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterCapture_specifier) {
			listener.enterCapture_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitCapture_specifier) {
			listener.exitCapture_specifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitCapture_specifier) {
			return visitor.visitCapture_specifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parenthesized_expressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift2Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Swift2Parser.RPAREN, 0); }
	public expression_element_list(): Expression_element_listContext | undefined {
		return this.tryGetRuleContext(0, Expression_element_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_parenthesized_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterParenthesized_expression) {
			listener.enterParenthesized_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitParenthesized_expression) {
			listener.exitParenthesized_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitParenthesized_expression) {
			return visitor.visitParenthesized_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expression_element_listContext extends ParserRuleContext {
	public expression_element(): Expression_elementContext[];
	public expression_element(i: number): Expression_elementContext;
	public expression_element(i?: number): Expression_elementContext | Expression_elementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Expression_elementContext);
		} else {
			return this.getRuleContext(i, Expression_elementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.COMMA);
		} else {
			return this.getToken(Swift2Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_expression_element_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterExpression_element_list) {
			listener.enterExpression_element_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitExpression_element_list) {
			listener.exitExpression_element_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitExpression_element_list) {
			return visitor.visitExpression_element_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expression_elementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_expression_element; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterExpression_element) {
			listener.enterExpression_element(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitExpression_element) {
			listener.exitExpression_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitExpression_element) {
			return visitor.visitExpression_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Wildcard_expressionContext extends ParserRuleContext {
	public UNDERSCORE(): TerminalNode { return this.getToken(Swift2Parser.UNDERSCORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_wildcard_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterWildcard_expression) {
			listener.enterWildcard_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitWildcard_expression) {
			listener.exitWildcard_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitWildcard_expression) {
			return visitor.visitWildcard_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Selector_expressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift2Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift2Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_selector_expression; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSelector_expression) {
			listener.enterSelector_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSelector_expression) {
			listener.exitSelector_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSelector_expression) {
			return visitor.visitSelector_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Postfix_expressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_postfix_expression; }
	public copyFrom(ctx: Postfix_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PrimaryContext extends Postfix_expressionContext {
	public primary_expression(): Primary_expressionContext {
		return this.getRuleContext(0, Primary_expressionContext);
	}
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Postfix_operationContext extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public postfix_operator(): Postfix_operatorContext {
		return this.getRuleContext(0, Postfix_operatorContext);
	}
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterPostfix_operation) {
			listener.enterPostfix_operation(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitPostfix_operation) {
			listener.exitPostfix_operation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitPostfix_operation) {
			return visitor.visitPostfix_operation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Function_call_expressionContext extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public parenthesized_expression(): Parenthesized_expressionContext {
		return this.getRuleContext(0, Parenthesized_expressionContext);
	}
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterFunction_call_expression) {
			listener.enterFunction_call_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitFunction_call_expression) {
			listener.exitFunction_call_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitFunction_call_expression) {
			return visitor.visitFunction_call_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Function_call_with_closure_expressionContext extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public trailing_closure(): Trailing_closureContext {
		return this.getRuleContext(0, Trailing_closureContext);
	}
	public parenthesized_expression(): Parenthesized_expressionContext | undefined {
		return this.tryGetRuleContext(0, Parenthesized_expressionContext);
	}
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterFunction_call_with_closure_expression) {
			listener.enterFunction_call_with_closure_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitFunction_call_with_closure_expression) {
			listener.exitFunction_call_with_closure_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitFunction_call_with_closure_expression) {
			return visitor.visitFunction_call_with_closure_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Initializer_expressionContext extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(Swift2Parser.DOT, 0); }
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterInitializer_expression) {
			listener.enterInitializer_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitInitializer_expression) {
			listener.exitInitializer_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitInitializer_expression) {
			return visitor.visitInitializer_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Initializer_expression_with_argsContext extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(Swift2Parser.DOT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Swift2Parser.LPAREN, 0); }
	public argument_names(): Argument_namesContext {
		return this.getRuleContext(0, Argument_namesContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift2Parser.RPAREN, 0); }
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterInitializer_expression_with_args) {
			listener.enterInitializer_expression_with_args(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitInitializer_expression_with_args) {
			listener.exitInitializer_expression_with_args(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitInitializer_expression_with_args) {
			return visitor.visitInitializer_expression_with_args(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Explicit_member_expression1Context extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(Swift2Parser.DOT, 0); }
	public Pure_decimal_digits(): TerminalNode { return this.getToken(Swift2Parser.Pure_decimal_digits, 0); }
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterExplicit_member_expression1) {
			listener.enterExplicit_member_expression1(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitExplicit_member_expression1) {
			listener.exitExplicit_member_expression1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitExplicit_member_expression1) {
			return visitor.visitExplicit_member_expression1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Explicit_member_expression2Context extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(Swift2Parser.DOT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public generic_argument_clause(): Generic_argument_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_argument_clauseContext);
	}
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterExplicit_member_expression2) {
			listener.enterExplicit_member_expression2(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitExplicit_member_expression2) {
			listener.exitExplicit_member_expression2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitExplicit_member_expression2) {
			return visitor.visitExplicit_member_expression2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Explicit_member_expression3Context extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(Swift2Parser.DOT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Swift2Parser.LPAREN, 0); }
	public argument_names(): Argument_namesContext {
		return this.getRuleContext(0, Argument_namesContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift2Parser.RPAREN, 0); }
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterExplicit_member_expression3) {
			listener.enterExplicit_member_expression3(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitExplicit_member_expression3) {
			listener.exitExplicit_member_expression3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitExplicit_member_expression3) {
			return visitor.visitExplicit_member_expression3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Explicit_member_expression4Context extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Swift2Parser.LPAREN, 0); }
	public argument_names(): Argument_namesContext {
		return this.getRuleContext(0, Argument_namesContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift2Parser.RPAREN, 0); }
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterExplicit_member_expression4) {
			listener.enterExplicit_member_expression4(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitExplicit_member_expression4) {
			listener.exitExplicit_member_expression4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitExplicit_member_expression4) {
			return visitor.visitExplicit_member_expression4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Postfix_self_expressionContext extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(Swift2Parser.DOT, 0); }
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterPostfix_self_expression) {
			listener.enterPostfix_self_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitPostfix_self_expression) {
			listener.exitPostfix_self_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitPostfix_self_expression) {
			return visitor.visitPostfix_self_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Dynamic_type_expressionContext extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(Swift2Parser.DOT, 0); }
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterDynamic_type_expression) {
			listener.enterDynamic_type_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitDynamic_type_expression) {
			listener.exitDynamic_type_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitDynamic_type_expression) {
			return visitor.visitDynamic_type_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Subscript_expressionContext extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public LBRACK(): TerminalNode { return this.getToken(Swift2Parser.LBRACK, 0); }
	public expression_list(): Expression_listContext {
		return this.getRuleContext(0, Expression_listContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(Swift2Parser.RBRACK, 0); }
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSubscript_expression) {
			listener.enterSubscript_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSubscript_expression) {
			listener.exitSubscript_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSubscript_expression) {
			return visitor.visitSubscript_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Argument_namesContext extends ParserRuleContext {
	public argument_name(): Argument_nameContext {
		return this.getRuleContext(0, Argument_nameContext);
	}
	public argument_names(): Argument_namesContext | undefined {
		return this.tryGetRuleContext(0, Argument_namesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_argument_names; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterArgument_names) {
			listener.enterArgument_names(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitArgument_names) {
			listener.exitArgument_names(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitArgument_names) {
			return visitor.visitArgument_names(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Argument_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(Swift2Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_argument_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterArgument_name) {
			listener.enterArgument_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitArgument_name) {
			listener.exitArgument_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitArgument_name) {
			return visitor.visitArgument_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Trailing_closureContext extends ParserRuleContext {
	public closure_expression(): Closure_expressionContext {
		return this.getRuleContext(0, Closure_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_trailing_closure; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterTrailing_closure) {
			listener.enterTrailing_closure(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitTrailing_closure) {
			listener.exitTrailing_closure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitTrailing_closure) {
			return visitor.visitTrailing_closure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.LBRACK, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.RBRACK, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.COLON, 0); }
	public arrow_operator(): Arrow_operatorContext | undefined {
		return this.tryGetRuleContext(0, Arrow_operatorContext);
	}
	public type_identifier(): Type_identifierContext | undefined {
		return this.tryGetRuleContext(0, Type_identifierContext);
	}
	public tuple_type(): Tuple_typeContext | undefined {
		return this.tryGetRuleContext(0, Tuple_typeContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.QUESTION, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.BANG, 0); }
	public protocol_composition_type(): Protocol_composition_typeContext | undefined {
		return this.tryGetRuleContext(0, Protocol_composition_typeContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_type; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_annotationContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(Swift2Parser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_type_annotation; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterType_annotation) {
			listener.enterType_annotation(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitType_annotation) {
			listener.exitType_annotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitType_annotation) {
			return visitor.visitType_annotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_identifierContext extends ParserRuleContext {
	public type_name(): Type_nameContext {
		return this.getRuleContext(0, Type_nameContext);
	}
	public generic_argument_clause(): Generic_argument_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_argument_clauseContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.DOT, 0); }
	public type_identifier(): Type_identifierContext | undefined {
		return this.tryGetRuleContext(0, Type_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_type_identifier; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterType_identifier) {
			listener.enterType_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitType_identifier) {
			listener.exitType_identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitType_identifier) {
			return visitor.visitType_identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_type_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterType_name) {
			listener.enterType_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitType_name) {
			listener.exitType_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitType_name) {
			return visitor.visitType_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tuple_typeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift2Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Swift2Parser.RPAREN, 0); }
	public tuple_type_body(): Tuple_type_bodyContext | undefined {
		return this.tryGetRuleContext(0, Tuple_type_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_tuple_type; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterTuple_type) {
			listener.enterTuple_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitTuple_type) {
			listener.exitTuple_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitTuple_type) {
			return visitor.visitTuple_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tuple_type_bodyContext extends ParserRuleContext {
	public tuple_type_element_list(): Tuple_type_element_listContext {
		return this.getRuleContext(0, Tuple_type_element_listContext);
	}
	public range_operator(): Range_operatorContext | undefined {
		return this.tryGetRuleContext(0, Range_operatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_tuple_type_body; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterTuple_type_body) {
			listener.enterTuple_type_body(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitTuple_type_body) {
			listener.exitTuple_type_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitTuple_type_body) {
			return visitor.visitTuple_type_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tuple_type_element_listContext extends ParserRuleContext {
	public tuple_type_element(): Tuple_type_elementContext {
		return this.getRuleContext(0, Tuple_type_elementContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.COMMA, 0); }
	public tuple_type_element_list(): Tuple_type_element_listContext | undefined {
		return this.tryGetRuleContext(0, Tuple_type_element_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_tuple_type_element_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterTuple_type_element_list) {
			listener.enterTuple_type_element_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitTuple_type_element_list) {
			listener.exitTuple_type_element_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitTuple_type_element_list) {
			return visitor.visitTuple_type_element_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tuple_type_elementContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public element_name(): Element_nameContext | undefined {
		return this.tryGetRuleContext(0, Element_nameContext);
	}
	public type_annotation(): Type_annotationContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_tuple_type_element; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterTuple_type_element) {
			listener.enterTuple_type_element(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitTuple_type_element) {
			listener.exitTuple_type_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitTuple_type_element) {
			return visitor.visitTuple_type_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Element_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_element_name; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterElement_name) {
			listener.enterElement_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitElement_name) {
			listener.exitElement_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitElement_name) {
			return visitor.visitElement_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Protocol_composition_typeContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(Swift2Parser.LT, 0); }
	public GT(): TerminalNode { return this.getToken(Swift2Parser.GT, 0); }
	public protocol_identifier_list(): Protocol_identifier_listContext | undefined {
		return this.tryGetRuleContext(0, Protocol_identifier_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_protocol_composition_type; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterProtocol_composition_type) {
			listener.enterProtocol_composition_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitProtocol_composition_type) {
			listener.exitProtocol_composition_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitProtocol_composition_type) {
			return visitor.visitProtocol_composition_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Protocol_identifier_listContext extends ParserRuleContext {
	public protocol_identifier(): Protocol_identifierContext[];
	public protocol_identifier(i: number): Protocol_identifierContext;
	public protocol_identifier(i?: number): Protocol_identifierContext | Protocol_identifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Protocol_identifierContext);
		} else {
			return this.getRuleContext(i, Protocol_identifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.COMMA);
		} else {
			return this.getToken(Swift2Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_protocol_identifier_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterProtocol_identifier_list) {
			listener.enterProtocol_identifier_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitProtocol_identifier_list) {
			listener.exitProtocol_identifier_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitProtocol_identifier_list) {
			return visitor.visitProtocol_identifier_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Protocol_identifierContext extends ParserRuleContext {
	public type_identifier(): Type_identifierContext {
		return this.getRuleContext(0, Type_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_protocol_identifier; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterProtocol_identifier) {
			listener.enterProtocol_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitProtocol_identifier) {
			listener.exitProtocol_identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitProtocol_identifier) {
			return visitor.visitProtocol_identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_inheritance_clauseContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(Swift2Parser.COLON, 0); }
	public class_requirement(): Class_requirementContext | undefined {
		return this.tryGetRuleContext(0, Class_requirementContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.COMMA, 0); }
	public type_inheritance_list(): Type_inheritance_listContext | undefined {
		return this.tryGetRuleContext(0, Type_inheritance_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_type_inheritance_clause; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterType_inheritance_clause) {
			listener.enterType_inheritance_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitType_inheritance_clause) {
			listener.exitType_inheritance_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitType_inheritance_clause) {
			return visitor.visitType_inheritance_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_inheritance_listContext extends ParserRuleContext {
	public type_identifier(): Type_identifierContext {
		return this.getRuleContext(0, Type_identifierContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.COMMA, 0); }
	public type_inheritance_list(): Type_inheritance_listContext | undefined {
		return this.tryGetRuleContext(0, Type_inheritance_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_type_inheritance_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterType_inheritance_list) {
			listener.enterType_inheritance_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitType_inheritance_list) {
			listener.exitType_inheritance_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitType_inheritance_list) {
			return visitor.visitType_inheritance_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_requirementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_class_requirement; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterClass_requirement) {
			listener.enterClass_requirement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitClass_requirement) {
			listener.exitClass_requirement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitClass_requirement) {
			return visitor.visitClass_requirement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.Identifier, 0); }
	public context_sensitive_keyword(): Context_sensitive_keywordContext | undefined {
		return this.tryGetRuleContext(0, Context_sensitive_keywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_identifier; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Identifier_listContext extends ParserRuleContext {
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
			return this.getTokens(Swift2Parser.COMMA);
		} else {
			return this.getToken(Swift2Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_identifier_list; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterIdentifier_list) {
			listener.enterIdentifier_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitIdentifier_list) {
			listener.exitIdentifier_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitIdentifier_list) {
			return visitor.visitIdentifier_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Context_sensitive_keywordContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_context_sensitive_keyword; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterContext_sensitive_keyword) {
			listener.enterContext_sensitive_keyword(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitContext_sensitive_keyword) {
			listener.exitContext_sensitive_keyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitContext_sensitive_keyword) {
			return visitor.visitContext_sensitive_keyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_operatorContext extends ParserRuleContext {
	public EQUAL(): TerminalNode { return this.getToken(Swift2Parser.EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_assignment_operator; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterAssignment_operator) {
			listener.enterAssignment_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitAssignment_operator) {
			listener.exitAssignment_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitAssignment_operator) {
			return visitor.visitAssignment_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Negate_prefix_operatorContext extends ParserRuleContext {
	public SUB(): TerminalNode { return this.getToken(Swift2Parser.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_negate_prefix_operator; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterNegate_prefix_operator) {
			listener.enterNegate_prefix_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitNegate_prefix_operator) {
			listener.exitNegate_prefix_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitNegate_prefix_operator) {
			return visitor.visitNegate_prefix_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Build_ANDContext extends ParserRuleContext {
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.AND);
		} else {
			return this.getToken(Swift2Parser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_build_AND; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterBuild_AND) {
			listener.enterBuild_AND(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitBuild_AND) {
			listener.exitBuild_AND(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitBuild_AND) {
			return visitor.visitBuild_AND(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Build_ORContext extends ParserRuleContext {
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.OR);
		} else {
			return this.getToken(Swift2Parser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_build_OR; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterBuild_OR) {
			listener.enterBuild_OR(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitBuild_OR) {
			listener.exitBuild_OR(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitBuild_OR) {
			return visitor.visitBuild_OR(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Arrow_operatorContext extends ParserRuleContext {
	public SUB(): TerminalNode { return this.getToken(Swift2Parser.SUB, 0); }
	public GT(): TerminalNode { return this.getToken(Swift2Parser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_arrow_operator; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterArrow_operator) {
			listener.enterArrow_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitArrow_operator) {
			listener.exitArrow_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitArrow_operator) {
			return visitor.visitArrow_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Range_operatorContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.DOT);
		} else {
			return this.getToken(Swift2Parser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_range_operator; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterRange_operator) {
			listener.enterRange_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitRange_operator) {
			listener.exitRange_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitRange_operator) {
			return visitor.visitRange_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Same_type_equalsContext extends ParserRuleContext {
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.EQUAL);
		} else {
			return this.getToken(Swift2Parser.EQUAL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_same_type_equals; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterSame_type_equals) {
			listener.enterSame_type_equals(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitSame_type_equals) {
			listener.exitSame_type_equals(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitSame_type_equals) {
			return visitor.visitSame_type_equals(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Binary_operatorContext extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_binary_operator; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterBinary_operator) {
			listener.enterBinary_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitBinary_operator) {
			listener.exitBinary_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitBinary_operator) {
			return visitor.visitBinary_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Prefix_operatorContext extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_prefix_operator; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterPrefix_operator) {
			listener.enterPrefix_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitPrefix_operator) {
			listener.exitPrefix_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitPrefix_operator) {
			return visitor.visitPrefix_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Postfix_operatorContext extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_postfix_operator; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterPostfix_operator) {
			listener.enterPostfix_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitPostfix_operator) {
			listener.exitPostfix_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitPostfix_operator) {
			return visitor.visitPostfix_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	public operator_head(): Operator_headContext | undefined {
		return this.tryGetRuleContext(0, Operator_headContext);
	}
	public operator_character(): Operator_characterContext[];
	public operator_character(i: number): Operator_characterContext;
	public operator_character(i?: number): Operator_characterContext | Operator_characterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Operator_characterContext);
		} else {
			return this.getRuleContext(i, Operator_characterContext);
		}
	}
	public dot_operator_head(): Dot_operator_headContext | undefined {
		return this.tryGetRuleContext(0, Dot_operator_headContext);
	}
	public dot_operator_character(): Dot_operator_characterContext[];
	public dot_operator_character(i: number): Dot_operator_characterContext;
	public dot_operator_character(i?: number): Dot_operator_characterContext | Dot_operator_characterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Dot_operator_characterContext);
		} else {
			return this.getRuleContext(i, Dot_operator_characterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_operator; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterOperator) {
			listener.enterOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitOperator) {
			listener.exitOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitOperator) {
			return visitor.visitOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operator_characterContext extends ParserRuleContext {
	public operator_head(): Operator_headContext | undefined {
		return this.tryGetRuleContext(0, Operator_headContext);
	}
	public Operator_following_character(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.Operator_following_character, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_operator_character; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterOperator_character) {
			listener.enterOperator_character(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitOperator_character) {
			listener.exitOperator_character(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitOperator_character) {
			return visitor.visitOperator_character(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operator_headContext extends ParserRuleContext {
	public DIV(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.DIV, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.EQUAL, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.SUB, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.ADD, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.BANG, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.MUL, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.MOD, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.OR, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.GT, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.CARET, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.TILDE, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.QUESTION, 0); }
	public Operator_head_other(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.Operator_head_other, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_operator_head; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterOperator_head) {
			listener.enterOperator_head(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitOperator_head) {
			listener.exitOperator_head(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitOperator_head) {
			return visitor.visitOperator_head(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dot_operator_headContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift2Parser.DOT);
		} else {
			return this.getToken(Swift2Parser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_dot_operator_head; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterDot_operator_head) {
			listener.enterDot_operator_head(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitDot_operator_head) {
			listener.exitDot_operator_head(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitDot_operator_head) {
			return visitor.visitDot_operator_head(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dot_operator_characterContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.DOT, 0); }
	public operator_character(): Operator_characterContext | undefined {
		return this.tryGetRuleContext(0, Operator_characterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_dot_operator_character; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterDot_operator_character) {
			listener.enterDot_operator_character(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitDot_operator_character) {
			listener.exitDot_operator_character(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitDot_operator_character) {
			return visitor.visitDot_operator_character(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public numeric_literal(): Numeric_literalContext | undefined {
		return this.tryGetRuleContext(0, Numeric_literalContext);
	}
	public string_literal(): String_literalContext | undefined {
		return this.tryGetRuleContext(0, String_literalContext);
	}
	public boolean_literal(): Boolean_literalContext | undefined {
		return this.tryGetRuleContext(0, Boolean_literalContext);
	}
	public nil_literal(): Nil_literalContext | undefined {
		return this.tryGetRuleContext(0, Nil_literalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_literal; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Numeric_literalContext extends ParserRuleContext {
	public integer_literal(): Integer_literalContext | undefined {
		return this.tryGetRuleContext(0, Integer_literalContext);
	}
	public negate_prefix_operator(): Negate_prefix_operatorContext | undefined {
		return this.tryGetRuleContext(0, Negate_prefix_operatorContext);
	}
	public Floating_point_literal(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.Floating_point_literal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_numeric_literal; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterNumeric_literal) {
			listener.enterNumeric_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitNumeric_literal) {
			listener.exitNumeric_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitNumeric_literal) {
			return visitor.visitNumeric_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Boolean_literalContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_boolean_literal; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterBoolean_literal) {
			listener.enterBoolean_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitBoolean_literal) {
			listener.exitBoolean_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitBoolean_literal) {
			return visitor.visitBoolean_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Nil_literalContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_nil_literal; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterNil_literal) {
			listener.enterNil_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitNil_literal) {
			listener.exitNil_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitNil_literal) {
			return visitor.visitNil_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Integer_literalContext extends ParserRuleContext {
	public Binary_literal(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.Binary_literal, 0); }
	public Octal_literal(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.Octal_literal, 0); }
	public Decimal_literal(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.Decimal_literal, 0); }
	public Pure_decimal_digits(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.Pure_decimal_digits, 0); }
	public Hexadecimal_literal(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.Hexadecimal_literal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_integer_literal; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterInteger_literal) {
			listener.enterInteger_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitInteger_literal) {
			listener.exitInteger_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitInteger_literal) {
			return visitor.visitInteger_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_literalContext extends ParserRuleContext {
	public Static_string_literal(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.Static_string_literal, 0); }
	public Interpolated_string_literal(): TerminalNode | undefined { return this.tryGetToken(Swift2Parser.Interpolated_string_literal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift2Parser.RULE_string_literal; }
	// @Override
	public enterRule(listener: Swift2Listener): void {
		if (listener.enterString_literal) {
			listener.enterString_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift2Listener): void {
		if (listener.exitString_literal) {
			listener.exitString_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Swift2Visitor<Result>): Result {
		if (visitor.visitString_literal) {
			return visitor.visitString_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


