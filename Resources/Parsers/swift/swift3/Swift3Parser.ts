// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/swift/swift3/Swift3.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { Swift3Listener } from "./Swift3Listener";

export class Swift3Parser extends Parser {
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
	public static readonly T__101 = 102;
	public static readonly T__102 = 103;
	public static readonly T__103 = 104;
	public static readonly T__104 = 105;
	public static readonly T__105 = 106;
	public static readonly T__106 = 107;
	public static readonly T__107 = 108;
	public static readonly T__108 = 109;
	public static readonly T__109 = 110;
	public static readonly T__110 = 111;
	public static readonly T__111 = 112;
	public static readonly T__112 = 113;
	public static readonly T__113 = 114;
	public static readonly T__114 = 115;
	public static readonly T__115 = 116;
	public static readonly T__116 = 117;
	public static readonly T__117 = 118;
	public static readonly T__118 = 119;
	public static readonly T__119 = 120;
	public static readonly T__120 = 121;
	public static readonly T__121 = 122;
	public static readonly T__122 = 123;
	public static readonly T__123 = 124;
	public static readonly T__124 = 125;
	public static readonly T__125 = 126;
	public static readonly T__126 = 127;
	public static readonly T__127 = 128;
	public static readonly T__128 = 129;
	public static readonly Platform_name_platform_version = 130;
	public static readonly Identifier = 131;
	public static readonly DOT = 132;
	public static readonly LCURLY = 133;
	public static readonly LPAREN = 134;
	public static readonly LBRACK = 135;
	public static readonly RCURLY = 136;
	public static readonly RPAREN = 137;
	public static readonly RBRACK = 138;
	public static readonly COMMA = 139;
	public static readonly COLON = 140;
	public static readonly SEMI = 141;
	public static readonly LT = 142;
	public static readonly GT = 143;
	public static readonly UNDERSCORE = 144;
	public static readonly BANG = 145;
	public static readonly QUESTION = 146;
	public static readonly AT = 147;
	public static readonly AND = 148;
	public static readonly SUB = 149;
	public static readonly EQUAL = 150;
	public static readonly OR = 151;
	public static readonly DIV = 152;
	public static readonly ADD = 153;
	public static readonly MUL = 154;
	public static readonly MOD = 155;
	public static readonly CARET = 156;
	public static readonly TILDE = 157;
	public static readonly Operator_head_other = 158;
	public static readonly Operator_following_character = 159;
	public static readonly Implicit_parameter_name = 160;
	public static readonly Binary_literal = 161;
	public static readonly Octal_literal = 162;
	public static readonly Decimal_literal = 163;
	public static readonly Pure_decimal_digits = 164;
	public static readonly Hexadecimal_literal = 165;
	public static readonly Floating_point_literal = 166;
	public static readonly Static_string_literal = 167;
	public static readonly Interpolated_string_literal = 168;
	public static readonly WS = 169;
	public static readonly Block_comment = 170;
	public static readonly Line_comment = 171;
	public static readonly RULE_top_level = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_statements = 2;
	public static readonly RULE_statements_impl = 3;
	public static readonly RULE_loop_statement = 4;
	public static readonly RULE_for_statement = 5;
	public static readonly RULE_for_init = 6;
	public static readonly RULE_for_in_statement = 7;
	public static readonly RULE_while_statement = 8;
	public static readonly RULE_condition_list = 9;
	public static readonly RULE_condition = 10;
	public static readonly RULE_case_condition = 11;
	public static readonly RULE_optional_binding_condition = 12;
	public static readonly RULE_repeat_while_statement = 13;
	public static readonly RULE_branch_statement = 14;
	public static readonly RULE_if_statement = 15;
	public static readonly RULE_else_clause = 16;
	public static readonly RULE_guard_statement = 17;
	public static readonly RULE_switch_statement = 18;
	public static readonly RULE_switch_cases = 19;
	public static readonly RULE_switch_case = 20;
	public static readonly RULE_case_label = 21;
	public static readonly RULE_case_item_list = 22;
	public static readonly RULE_default_label = 23;
	public static readonly RULE_where_clause = 24;
	public static readonly RULE_where_expression = 25;
	public static readonly RULE_labeled_statement = 26;
	public static readonly RULE_statement_label = 27;
	public static readonly RULE_label_name = 28;
	public static readonly RULE_control_transfer_statement = 29;
	public static readonly RULE_break_statement = 30;
	public static readonly RULE_continue_statement = 31;
	public static readonly RULE_fallthrough_statement = 32;
	public static readonly RULE_return_statement = 33;
	public static readonly RULE_throw_statement = 34;
	public static readonly RULE_defer_statement = 35;
	public static readonly RULE_do_statement = 36;
	public static readonly RULE_catch_clauses = 37;
	public static readonly RULE_catch_clause = 38;
	public static readonly RULE_compiler_control_statement = 39;
	public static readonly RULE_conditional_compilation_block = 40;
	public static readonly RULE_if_directive_clause = 41;
	public static readonly RULE_elseif_directive_clauses = 42;
	public static readonly RULE_elseif_directive_clause = 43;
	public static readonly RULE_else_directive_clause = 44;
	public static readonly RULE_if_directive = 45;
	public static readonly RULE_elseif_directive = 46;
	public static readonly RULE_else_directive = 47;
	public static readonly RULE_endif_directive = 48;
	public static readonly RULE_compilation_condition = 49;
	public static readonly RULE_platform_condition = 50;
	public static readonly RULE_swift_version = 51;
	public static readonly RULE_operating_system = 52;
	public static readonly RULE_architecture = 53;
	public static readonly RULE_line_control_statement = 54;
	public static readonly RULE_line_number = 55;
	public static readonly RULE_file_name = 56;
	public static readonly RULE_availability_condition = 57;
	public static readonly RULE_availability_arguments = 58;
	public static readonly RULE_availability_argument = 59;
	public static readonly RULE_generic_parameter_clause = 60;
	public static readonly RULE_generic_parameter_list = 61;
	public static readonly RULE_generic_parameter = 62;
	public static readonly RULE_generic_where_clause = 63;
	public static readonly RULE_requirement_list = 64;
	public static readonly RULE_requirement = 65;
	public static readonly RULE_conformance_requirement = 66;
	public static readonly RULE_same_type_requirement = 67;
	public static readonly RULE_generic_argument_clause = 68;
	public static readonly RULE_generic_argument_list = 69;
	public static readonly RULE_generic_argument = 70;
	public static readonly RULE_declaration = 71;
	public static readonly RULE_declarations = 72;
	public static readonly RULE_top_level_declaration = 73;
	public static readonly RULE_code_block = 74;
	public static readonly RULE_import_declaration = 75;
	public static readonly RULE_import_kind = 76;
	public static readonly RULE_import_path = 77;
	public static readonly RULE_import_path_identifier = 78;
	public static readonly RULE_constant_declaration = 79;
	public static readonly RULE_pattern_initializer_list = 80;
	public static readonly RULE_pattern_initializer = 81;
	public static readonly RULE_initializer = 82;
	public static readonly RULE_variable_declaration = 83;
	public static readonly RULE_variable_declaration_head = 84;
	public static readonly RULE_variable_name = 85;
	public static readonly RULE_getter_setter_block = 86;
	public static readonly RULE_getter_clause = 87;
	public static readonly RULE_setter_clause = 88;
	public static readonly RULE_setter_name = 89;
	public static readonly RULE_getter_setter_keyword_block = 90;
	public static readonly RULE_getter_keyword_clause = 91;
	public static readonly RULE_setter_keyword_clause = 92;
	public static readonly RULE_willSet_didSet_block = 93;
	public static readonly RULE_willSet_clause = 94;
	public static readonly RULE_didSet_clause = 95;
	public static readonly RULE_typealias_declaration = 96;
	public static readonly RULE_typealias_name = 97;
	public static readonly RULE_typealias_assignment = 98;
	public static readonly RULE_function_declaration = 99;
	public static readonly RULE_function_head = 100;
	public static readonly RULE_function_name = 101;
	public static readonly RULE_function_signature = 102;
	public static readonly RULE_function_result = 103;
	public static readonly RULE_function_body = 104;
	public static readonly RULE_parameter_clause = 105;
	public static readonly RULE_parameter_list = 106;
	public static readonly RULE_parameter = 107;
	public static readonly RULE_external_parameter_name = 108;
	public static readonly RULE_local_parameter_name = 109;
	public static readonly RULE_default_argument_clause = 110;
	public static readonly RULE_enum_declaration = 111;
	public static readonly RULE_union_style_enum = 112;
	public static readonly RULE_union_style_enum_members = 113;
	public static readonly RULE_union_style_enum_member = 114;
	public static readonly RULE_union_style_enum_case_clause = 115;
	public static readonly RULE_union_style_enum_case_list = 116;
	public static readonly RULE_union_style_enum_case = 117;
	public static readonly RULE_enum_name = 118;
	public static readonly RULE_enum_case_name = 119;
	public static readonly RULE_raw_value_style_enum = 120;
	public static readonly RULE_raw_value_style_enum_members = 121;
	public static readonly RULE_raw_value_style_enum_member = 122;
	public static readonly RULE_raw_value_style_enum_case_clause = 123;
	public static readonly RULE_raw_value_style_enum_case_list = 124;
	public static readonly RULE_raw_value_style_enum_case = 125;
	public static readonly RULE_raw_value_assignment = 126;
	public static readonly RULE_raw_value_literal = 127;
	public static readonly RULE_struct_declaration = 128;
	public static readonly RULE_struct_name = 129;
	public static readonly RULE_struct_body = 130;
	public static readonly RULE_struct_member = 131;
	public static readonly RULE_class_declaration = 132;
	public static readonly RULE_class_name = 133;
	public static readonly RULE_class_body = 134;
	public static readonly RULE_class_member = 135;
	public static readonly RULE_protocol_declaration = 136;
	public static readonly RULE_protocol_name = 137;
	public static readonly RULE_protocol_body = 138;
	public static readonly RULE_protocol_member = 139;
	public static readonly RULE_protocol_member_declaration = 140;
	public static readonly RULE_protocol_property_declaration = 141;
	public static readonly RULE_protocol_method_declaration = 142;
	public static readonly RULE_protocol_initializer_declaration = 143;
	public static readonly RULE_protocol_subscript_declaration = 144;
	public static readonly RULE_protocol_associated_type_declaration = 145;
	public static readonly RULE_initializer_declaration = 146;
	public static readonly RULE_initializer_head = 147;
	public static readonly RULE_initializer_body = 148;
	public static readonly RULE_deinitializer_declaration = 149;
	public static readonly RULE_extension_declaration = 150;
	public static readonly RULE_extension_body = 151;
	public static readonly RULE_extension_member = 152;
	public static readonly RULE_subscript_declaration = 153;
	public static readonly RULE_subscript_head = 154;
	public static readonly RULE_subscript_result = 155;
	public static readonly RULE_operator_declaration = 156;
	public static readonly RULE_prefix_operator_declaration = 157;
	public static readonly RULE_postfix_operator_declaration = 158;
	public static readonly RULE_infix_operator_declaration = 159;
	public static readonly RULE_infix_operator_group = 160;
	public static readonly RULE_precedence_group_declaration = 161;
	public static readonly RULE_precedence_group_attribute = 162;
	public static readonly RULE_precedence_group_relation = 163;
	public static readonly RULE_precedence_group_assignment = 164;
	public static readonly RULE_precedence_group_associativity = 165;
	public static readonly RULE_associativity = 166;
	public static readonly RULE_precedence_group_names = 167;
	public static readonly RULE_precedence_group_name = 168;
	public static readonly RULE_declaration_modifier = 169;
	public static readonly RULE_declaration_modifiers = 170;
	public static readonly RULE_access_level_modifier = 171;
	public static readonly RULE_mutation_modifier = 172;
	public static readonly RULE_pattern = 173;
	public static readonly RULE_wildcard_pattern = 174;
	public static readonly RULE_identifier_pattern = 175;
	public static readonly RULE_value_binding_pattern = 176;
	public static readonly RULE_tuple_pattern = 177;
	public static readonly RULE_tuple_pattern_element_list = 178;
	public static readonly RULE_tuple_pattern_element = 179;
	public static readonly RULE_enum_case_pattern = 180;
	public static readonly RULE_optional_pattern = 181;
	public static readonly RULE_expression_pattern = 182;
	public static readonly RULE_attribute = 183;
	public static readonly RULE_attribute_name = 184;
	public static readonly RULE_attribute_argument_clause = 185;
	public static readonly RULE_attributes = 186;
	public static readonly RULE_balanced_tokens = 187;
	public static readonly RULE_balanced_token = 188;
	public static readonly RULE_any_punctuation_for_balanced_token = 189;
	public static readonly RULE_expression = 190;
	public static readonly RULE_expression_list = 191;
	public static readonly RULE_prefix_expression = 192;
	public static readonly RULE_in_out_expression = 193;
	public static readonly RULE_try_operator = 194;
	public static readonly RULE_binary_expression = 195;
	public static readonly RULE_binary_expressions = 196;
	public static readonly RULE_conditional_operator = 197;
	public static readonly RULE_type_casting_operator = 198;
	public static readonly RULE_primary_expression = 199;
	public static readonly RULE_literal_expression = 200;
	public static readonly RULE_array_literal = 201;
	public static readonly RULE_array_literal_items = 202;
	public static readonly RULE_array_literal_item = 203;
	public static readonly RULE_dictionary_literal = 204;
	public static readonly RULE_dictionary_literal_items = 205;
	public static readonly RULE_dictionary_literal_item = 206;
	public static readonly RULE_playground_literal = 207;
	public static readonly RULE_self_expression = 208;
	public static readonly RULE_superclass_expression = 209;
	public static readonly RULE_superclass_method_expression = 210;
	public static readonly RULE_superclass_subscript_expression = 211;
	public static readonly RULE_superclass_initializer_expression = 212;
	public static readonly RULE_closure_expression = 213;
	public static readonly RULE_closure_signature = 214;
	public static readonly RULE_closure_parameter_clause = 215;
	public static readonly RULE_closure_parameter_clause_identifier_list = 216;
	public static readonly RULE_closure_parameter_list = 217;
	public static readonly RULE_closure_parameter = 218;
	public static readonly RULE_closure_parameter_name = 219;
	public static readonly RULE_capture_list = 220;
	public static readonly RULE_capture_list_items = 221;
	public static readonly RULE_capture_list_item = 222;
	public static readonly RULE_capture_specifier = 223;
	public static readonly RULE_implicit_member_expression = 224;
	public static readonly RULE_parenthesized_expression = 225;
	public static readonly RULE_tuple_expression = 226;
	public static readonly RULE_tuple_element = 227;
	public static readonly RULE_wildcard_expression = 228;
	public static readonly RULE_selector_expression = 229;
	public static readonly RULE_key_path_expression = 230;
	public static readonly RULE_postfix_expression = 231;
	public static readonly RULE_function_call_argument_clause = 232;
	public static readonly RULE_function_call_argument_list = 233;
	public static readonly RULE_function_call_argument = 234;
	public static readonly RULE_trailing_closure = 235;
	public static readonly RULE_argument_names = 236;
	public static readonly RULE_argument_name = 237;
	public static readonly RULE_dynamic_type_expression = 238;
	public static readonly RULE_type = 239;
	public static readonly RULE_type_annotation = 240;
	public static readonly RULE_type_identifier = 241;
	public static readonly RULE_type_name = 242;
	public static readonly RULE_tuple_type = 243;
	public static readonly RULE_tuple_type_element_list = 244;
	public static readonly RULE_tuple_type_element = 245;
	public static readonly RULE_element_name = 246;
	public static readonly RULE_function_type = 247;
	public static readonly RULE_function_type_argument_clause = 248;
	public static readonly RULE_function_type_argument_list = 249;
	public static readonly RULE_function_type_argument = 250;
	public static readonly RULE_argument_label = 251;
	public static readonly RULE_array_type = 252;
	public static readonly RULE_dictionary_type = 253;
	public static readonly RULE_protocol_composition_type = 254;
	public static readonly RULE_protocol_identifier = 255;
	public static readonly RULE_type_inheritance_clause = 256;
	public static readonly RULE_type_inheritance_list = 257;
	public static readonly RULE_class_requirement = 258;
	public static readonly RULE_declaration_identifier = 259;
	public static readonly RULE_label_identifier = 260;
	public static readonly RULE_keyword_as_identifier_in_declarations = 261;
	public static readonly RULE_keyword_as_identifier_in_labels = 262;
	public static readonly RULE_assignment_operator = 263;
	public static readonly RULE_negate_prefix_operator = 264;
	public static readonly RULE_compilation_condition_AND = 265;
	public static readonly RULE_compilation_condition_OR = 266;
	public static readonly RULE_compilation_condition_GE = 267;
	public static readonly RULE_arrow_operator = 268;
	public static readonly RULE_range_operator = 269;
	public static readonly RULE_same_type_equals = 270;
	public static readonly RULE_binary_operator = 271;
	public static readonly RULE_prefix_operator = 272;
	public static readonly RULE_postfix_operator = 273;
	public static readonly RULE_operator = 274;
	public static readonly RULE_operator_character = 275;
	public static readonly RULE_operator_head = 276;
	public static readonly RULE_dot_operator_head = 277;
	public static readonly RULE_dot_operator_character = 278;
	public static readonly RULE_literal = 279;
	public static readonly RULE_numeric_literal = 280;
	public static readonly RULE_boolean_literal = 281;
	public static readonly RULE_nil_literal = 282;
	public static readonly RULE_integer_literal = 283;
	public static readonly RULE_string_literal = 284;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"top_level", "statement", "statements", "statements_impl", "loop_statement", 
		"for_statement", "for_init", "for_in_statement", "while_statement", "condition_list", 
		"condition", "case_condition", "optional_binding_condition", "repeat_while_statement", 
		"branch_statement", "if_statement", "else_clause", "guard_statement", 
		"switch_statement", "switch_cases", "switch_case", "case_label", "case_item_list", 
		"default_label", "where_clause", "where_expression", "labeled_statement", 
		"statement_label", "label_name", "control_transfer_statement", "break_statement", 
		"continue_statement", "fallthrough_statement", "return_statement", "throw_statement", 
		"defer_statement", "do_statement", "catch_clauses", "catch_clause", "compiler_control_statement", 
		"conditional_compilation_block", "if_directive_clause", "elseif_directive_clauses", 
		"elseif_directive_clause", "else_directive_clause", "if_directive", "elseif_directive", 
		"else_directive", "endif_directive", "compilation_condition", "platform_condition", 
		"swift_version", "operating_system", "architecture", "line_control_statement", 
		"line_number", "file_name", "availability_condition", "availability_arguments", 
		"availability_argument", "generic_parameter_clause", "generic_parameter_list", 
		"generic_parameter", "generic_where_clause", "requirement_list", "requirement", 
		"conformance_requirement", "same_type_requirement", "generic_argument_clause", 
		"generic_argument_list", "generic_argument", "declaration", "declarations", 
		"top_level_declaration", "code_block", "import_declaration", "import_kind", 
		"import_path", "import_path_identifier", "constant_declaration", "pattern_initializer_list", 
		"pattern_initializer", "initializer", "variable_declaration", "variable_declaration_head", 
		"variable_name", "getter_setter_block", "getter_clause", "setter_clause", 
		"setter_name", "getter_setter_keyword_block", "getter_keyword_clause", 
		"setter_keyword_clause", "willSet_didSet_block", "willSet_clause", "didSet_clause", 
		"typealias_declaration", "typealias_name", "typealias_assignment", "function_declaration", 
		"function_head", "function_name", "function_signature", "function_result", 
		"function_body", "parameter_clause", "parameter_list", "parameter", "external_parameter_name", 
		"local_parameter_name", "default_argument_clause", "enum_declaration", 
		"union_style_enum", "union_style_enum_members", "union_style_enum_member", 
		"union_style_enum_case_clause", "union_style_enum_case_list", "union_style_enum_case", 
		"enum_name", "enum_case_name", "raw_value_style_enum", "raw_value_style_enum_members", 
		"raw_value_style_enum_member", "raw_value_style_enum_case_clause", "raw_value_style_enum_case_list", 
		"raw_value_style_enum_case", "raw_value_assignment", "raw_value_literal", 
		"struct_declaration", "struct_name", "struct_body", "struct_member", "class_declaration", 
		"class_name", "class_body", "class_member", "protocol_declaration", "protocol_name", 
		"protocol_body", "protocol_member", "protocol_member_declaration", "protocol_property_declaration", 
		"protocol_method_declaration", "protocol_initializer_declaration", "protocol_subscript_declaration", 
		"protocol_associated_type_declaration", "initializer_declaration", "initializer_head", 
		"initializer_body", "deinitializer_declaration", "extension_declaration", 
		"extension_body", "extension_member", "subscript_declaration", "subscript_head", 
		"subscript_result", "operator_declaration", "prefix_operator_declaration", 
		"postfix_operator_declaration", "infix_operator_declaration", "infix_operator_group", 
		"precedence_group_declaration", "precedence_group_attribute", "precedence_group_relation", 
		"precedence_group_assignment", "precedence_group_associativity", "associativity", 
		"precedence_group_names", "precedence_group_name", "declaration_modifier", 
		"declaration_modifiers", "access_level_modifier", "mutation_modifier", 
		"pattern", "wildcard_pattern", "identifier_pattern", "value_binding_pattern", 
		"tuple_pattern", "tuple_pattern_element_list", "tuple_pattern_element", 
		"enum_case_pattern", "optional_pattern", "expression_pattern", "attribute", 
		"attribute_name", "attribute_argument_clause", "attributes", "balanced_tokens", 
		"balanced_token", "any_punctuation_for_balanced_token", "expression", 
		"expression_list", "prefix_expression", "in_out_expression", "try_operator", 
		"binary_expression", "binary_expressions", "conditional_operator", "type_casting_operator", 
		"primary_expression", "literal_expression", "array_literal", "array_literal_items", 
		"array_literal_item", "dictionary_literal", "dictionary_literal_items", 
		"dictionary_literal_item", "playground_literal", "self_expression", "superclass_expression", 
		"superclass_method_expression", "superclass_subscript_expression", "superclass_initializer_expression", 
		"closure_expression", "closure_signature", "closure_parameter_clause", 
		"closure_parameter_clause_identifier_list", "closure_parameter_list", 
		"closure_parameter", "closure_parameter_name", "capture_list", "capture_list_items", 
		"capture_list_item", "capture_specifier", "implicit_member_expression", 
		"parenthesized_expression", "tuple_expression", "tuple_element", "wildcard_expression", 
		"selector_expression", "key_path_expression", "postfix_expression", "function_call_argument_clause", 
		"function_call_argument_list", "function_call_argument", "trailing_closure", 
		"argument_names", "argument_name", "dynamic_type_expression", "type", 
		"type_annotation", "type_identifier", "type_name", "tuple_type", "tuple_type_element_list", 
		"tuple_type_element", "element_name", "function_type", "function_type_argument_clause", 
		"function_type_argument_list", "function_type_argument", "argument_label", 
		"array_type", "dictionary_type", "protocol_composition_type", "protocol_identifier", 
		"type_inheritance_clause", "type_inheritance_list", "class_requirement", 
		"declaration_identifier", "label_identifier", "keyword_as_identifier_in_declarations", 
		"keyword_as_identifier_in_labels", "assignment_operator", "negate_prefix_operator", 
		"compilation_condition_AND", "compilation_condition_OR", "compilation_condition_GE", 
		"arrow_operator", "range_operator", "same_type_equals", "binary_operator", 
		"prefix_operator", "postfix_operator", "operator", "operator_character", 
		"operator_head", "dot_operator_head", "dot_operator_character", "literal", 
		"numeric_literal", "boolean_literal", "nil_literal", "integer_literal", 
		"string_literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'for'", "'case'", "'in'", "'while'", "'let'", "'var'", "'repeat'", 
		"'if'", "'else'", "'guard'", "'switch'", "'default'", "'where'", "'break'", 
		"'continue'", "'fallthrough'", "'return'", "'throw'", "'defer'", "'do'", 
		"'catch'", "'#if'", "'#elseif'", "'#else'", "'#endif'", "'os'", "'arch'", 
		"'swift'", "'#sourceLocation'", "'file'", "'line'", "'#available'", "'import'", 
		"'typealias'", "'struct'", "'class'", "'enum'", "'protocol'", "'func'", 
		"'get'", "'set'", "'willSet'", "'didSet'", "'throws'", "'rethrows'", "'indirect'", 
		"'final'", "'associatedtype'", "'init'", "'deinit'", "'extension'", "'subscript'", 
		"'prefix'", "'operator'", "'postfix'", "'infix'", "'precedencegroup'", 
		"'higherThan'", "'lowerThan'", "'assignment'", "'associativity'", "'left'", 
		"'right'", "'none'", "'convenience'", "'dynamic'", "'lazy'", "'optional'", 
		"'override'", "'required'", "'static'", "'unowned'", "'safe'", "'unsafe'", 
		"'weak'", "'private'", "'fileprivate'", "'internal'", "'public'", "'open'", 
		"'mutating'", "'nonmutating'", "'is'", "'as'", "'#'", "'`'", "'try'", 
		"'#file'", "'#line'", "'#column'", "'#function'", "'#dsohandle'", "'#colorLiteral'", 
		"'red'", "'green'", "'blue'", "'alpha'", "'#fileLiteral'", "'resourceName'", 
		"'#imageLiteral'", "'self'", "'Self'", "'super'", "'unowned(safe)'", "'unowned(unsafe)'", 
		"'#selector'", "'getter:'", "'setter:'", "'#keyPath'", "'type'", "'of'", 
		"'Type'", "'Protocol'", "'Any'", "'inout'", "'arm'", "'arm64'", "'i386'", 
		"'iOS'", "'iOSApplicationExtension'", "'macOS'", "'macOSApplicationExtension'", 
		"'precedence'", "'tvOS'", "'watchOS'", "'x86_64'", "'false'", "'nil'", 
		"'true'", undefined, undefined, "'.'", "'{'", "'('", "'['", "'}'", "')'", 
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
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "Platform_name_platform_version", 
		"Identifier", "DOT", "LCURLY", "LPAREN", "LBRACK", "RCURLY", "RPAREN", 
		"RBRACK", "COMMA", "COLON", "SEMI", "LT", "GT", "UNDERSCORE", "BANG", 
		"QUESTION", "AT", "AND", "SUB", "EQUAL", "OR", "DIV", "ADD", "MUL", "MOD", 
		"CARET", "TILDE", "Operator_head_other", "Operator_following_character", 
		"Implicit_parameter_name", "Binary_literal", "Octal_literal", "Decimal_literal", 
		"Pure_decimal_digits", "Hexadecimal_literal", "Floating_point_literal", 
		"Static_string_literal", "Interpolated_string_literal", "WS", "Block_comment", 
		"Line_comment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Swift3Parser._LITERAL_NAMES, Swift3Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Swift3Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Swift3.g4"; }

	// @Override
	public get ruleNames(): string[] { return Swift3Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Swift3Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Swift3Parser._ATN, this);
	}
	// @RuleVersion(0)
	public top_level(): Top_levelContext {
		let _localctx: Top_levelContext = new Top_levelContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Swift3Parser.RULE_top_level);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 571;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 570;
				this.statements();
				}
				break;
			}
			this.state = 573;
			this.match(Swift3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, Swift3Parser.RULE_statement);
		try {
			this.state = 611;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 575;
				this.expression();
				this.state = 577;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 576;
					this.match(Swift3Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 579;
				this.declaration();
				this.state = 581;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 580;
					this.match(Swift3Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 583;
				this.loop_statement();
				this.state = 585;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 584;
					this.match(Swift3Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 587;
				this.branch_statement();
				this.state = 589;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 588;
					this.match(Swift3Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 591;
				this.labeled_statement();
				this.state = 593;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 592;
					this.match(Swift3Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 595;
				this.control_transfer_statement();
				this.state = 597;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 596;
					this.match(Swift3Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 599;
				this.defer_statement();
				this.state = 601;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 600;
					this.match(Swift3Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 603;
				this.do_statement();
				this.state = 605;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 604;
					this.match(Swift3Parser.SEMI);
					}
					break;
				}
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 607;
				this.compiler_control_statement();
				this.state = 609;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 608;
					this.match(Swift3Parser.SEMI);
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
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Swift3Parser.RULE_statements);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 613;
			this.statements_impl(-1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statements_impl(indexBefore: int): Statements_implContext {
		let _localctx: Statements_implContext = new Statements_implContext(this._ctx, this.state, indexBefore);
		this.enterRule(_localctx, 6, Swift3Parser.RULE_statements_impl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 615;
			if (!(SwiftSupport.isSeparatedStatement(_input, _localctx.indexBefore))) {
				throw new FailedPredicateException(this, "SwiftSupport.isSeparatedStatement(_input, $indexBefore)");
			}
			this.state = 616;
			this.statement();
			_localctx.indexAfter =  _input.index();
			this.state = 619;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 618;
				this.statements_impl(_localctx.indexAfter);
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
	public loop_statement(): Loop_statementContext {
		let _localctx: Loop_statementContext = new Loop_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Swift3Parser.RULE_loop_statement);
		try {
			this.state = 625;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 621;
				this.for_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 622;
				this.for_in_statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 623;
				this.while_statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 624;
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
		this.enterRule(_localctx, 10, Swift3Parser.RULE_for_statement);
		try {
			this.state = 655;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 627;
				this.match(Swift3Parser.T__0);
				this.state = 629;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 628;
					this.for_init();
					}
					break;
				}
				this.state = 631;
				this.match(Swift3Parser.SEMI);
				this.state = 633;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 632;
					this.expression();
					}
					break;
				}
				this.state = 635;
				this.match(Swift3Parser.SEMI);
				this.state = 637;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 636;
					this.expression();
					}
					break;
				}
				this.state = 639;
				this.code_block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 640;
				this.match(Swift3Parser.T__0);
				this.state = 641;
				this.match(Swift3Parser.LPAREN);
				this.state = 643;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 642;
					this.for_init();
					}
					break;
				}
				this.state = 645;
				this.match(Swift3Parser.SEMI);
				this.state = 647;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 646;
					this.expression();
					}
					break;
				}
				this.state = 649;
				this.match(Swift3Parser.SEMI);
				this.state = 651;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 650;
					this.expression();
					}
					break;
				}
				this.state = 653;
				this.match(Swift3Parser.RPAREN);
				this.state = 654;
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
		this.enterRule(_localctx, 12, Swift3Parser.RULE_for_init);
		try {
			this.state = 659;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 657;
				this.variable_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 658;
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
		this.enterRule(_localctx, 14, Swift3Parser.RULE_for_in_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.match(Swift3Parser.T__0);
			this.state = 663;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 662;
				this.match(Swift3Parser.T__1);
				}
				break;
			}
			this.state = 665;
			this.pattern(0);
			this.state = 666;
			this.match(Swift3Parser.T__2);
			this.state = 667;
			this.expression();
			this.state = 669;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__12) {
				{
				this.state = 668;
				this.where_clause();
				}
			}

			this.state = 671;
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
		this.enterRule(_localctx, 16, Swift3Parser.RULE_while_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 673;
			this.match(Swift3Parser.T__3);
			this.state = 674;
			this.condition_list();
			this.state = 675;
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
	public condition_list(): Condition_listContext {
		let _localctx: Condition_listContext = new Condition_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Swift3Parser.RULE_condition_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 677;
			this.condition();
			this.state = 682;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift3Parser.COMMA) {
				{
				{
				this.state = 678;
				this.match(Swift3Parser.COMMA);
				this.state = 679;
				this.condition();
				}
				}
				this.state = 684;
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
		this.enterRule(_localctx, 20, Swift3Parser.RULE_condition);
		try {
			this.state = 689;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 685;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 686;
				this.availability_condition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 687;
				this.case_condition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 688;
				this.optional_binding_condition();
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
	public case_condition(): Case_conditionContext {
		let _localctx: Case_conditionContext = new Case_conditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Swift3Parser.RULE_case_condition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 691;
			this.match(Swift3Parser.T__1);
			this.state = 692;
			this.pattern(0);
			this.state = 693;
			this.initializer();
			this.state = 695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__12) {
				{
				this.state = 694;
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
		this.enterRule(_localctx, 24, Swift3Parser.RULE_optional_binding_condition);
		try {
			this.state = 705;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 697;
				this.match(Swift3Parser.T__4);
				this.state = 698;
				this.pattern(0);
				this.state = 699;
				this.initializer();
				}
				break;
			case Swift3Parser.T__5:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 701;
				this.match(Swift3Parser.T__5);
				this.state = 702;
				this.pattern(0);
				this.state = 703;
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
	public repeat_while_statement(): Repeat_while_statementContext {
		let _localctx: Repeat_while_statementContext = new Repeat_while_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Swift3Parser.RULE_repeat_while_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this.match(Swift3Parser.T__6);
			this.state = 708;
			this.code_block();
			this.state = 709;
			this.match(Swift3Parser.T__3);
			this.state = 710;
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
		this.enterRule(_localctx, 28, Swift3Parser.RULE_branch_statement);
		try {
			this.state = 715;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 712;
				this.if_statement();
				}
				break;
			case Swift3Parser.T__9:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 713;
				this.guard_statement();
				}
				break;
			case Swift3Parser.T__10:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 714;
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
		this.enterRule(_localctx, 30, Swift3Parser.RULE_if_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 717;
			this.match(Swift3Parser.T__7);
			this.state = 718;
			this.condition_list();
			this.state = 719;
			this.code_block();
			this.state = 721;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 720;
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
		this.enterRule(_localctx, 32, Swift3Parser.RULE_else_clause);
		try {
			this.state = 727;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 723;
				this.match(Swift3Parser.T__8);
				this.state = 724;
				this.code_block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 725;
				this.match(Swift3Parser.T__8);
				this.state = 726;
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
		this.enterRule(_localctx, 34, Swift3Parser.RULE_guard_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 729;
			this.match(Swift3Parser.T__9);
			this.state = 730;
			this.condition_list();
			this.state = 731;
			this.match(Swift3Parser.T__8);
			this.state = 732;
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
		this.enterRule(_localctx, 36, Swift3Parser.RULE_switch_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 734;
			this.match(Swift3Parser.T__10);
			this.state = 735;
			this.expression();
			this.state = 736;
			this.match(Swift3Parser.LCURLY);
			this.state = 738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__1 || _la === Swift3Parser.T__11) {
				{
				this.state = 737;
				this.switch_cases();
				}
			}

			this.state = 740;
			this.match(Swift3Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 38, Swift3Parser.RULE_switch_cases);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 742;
			this.switch_case();
			this.state = 744;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__1 || _la === Swift3Parser.T__11) {
				{
				this.state = 743;
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
		this.enterRule(_localctx, 40, Swift3Parser.RULE_switch_case);
		try {
			this.state = 752;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 746;
				this.case_label();
				this.state = 747;
				this.statements();
				}
				break;
			case Swift3Parser.T__11:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 749;
				this.default_label();
				this.state = 750;
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
		this.enterRule(_localctx, 42, Swift3Parser.RULE_case_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			this.match(Swift3Parser.T__1);
			this.state = 755;
			this.case_item_list();
			this.state = 756;
			this.match(Swift3Parser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 44, Swift3Parser.RULE_case_item_list);
		let _la: number;
		try {
			this.state = 769;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 758;
				this.pattern(0);
				this.state = 760;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.T__12) {
					{
					this.state = 759;
					this.where_clause();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 762;
				this.pattern(0);
				this.state = 764;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.T__12) {
					{
					this.state = 763;
					this.where_clause();
					}
				}

				this.state = 766;
				this.match(Swift3Parser.COMMA);
				this.state = 767;
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
		this.enterRule(_localctx, 46, Swift3Parser.RULE_default_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 771;
			this.match(Swift3Parser.T__11);
			this.state = 772;
			this.match(Swift3Parser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 48, Swift3Parser.RULE_where_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 774;
			this.match(Swift3Parser.T__12);
			this.state = 775;
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
		this.enterRule(_localctx, 50, Swift3Parser.RULE_where_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
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
		this.enterRule(_localctx, 52, Swift3Parser.RULE_labeled_statement);
		try {
			this.state = 791;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 779;
				this.statement_label();
				this.state = 780;
				this.loop_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 782;
				this.statement_label();
				this.state = 783;
				this.if_statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 785;
				this.statement_label();
				this.state = 786;
				this.switch_statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 788;
				this.statement_label();
				this.state = 789;
				this.do_statement();
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
		this.enterRule(_localctx, 54, Swift3Parser.RULE_statement_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 793;
			this.label_name();
			this.state = 794;
			this.match(Swift3Parser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 56, Swift3Parser.RULE_label_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 796;
			this.declaration_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 58, Swift3Parser.RULE_control_transfer_statement);
		try {
			this.state = 803;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__13:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 798;
				this.break_statement();
				}
				break;
			case Swift3Parser.T__14:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 799;
				this.continue_statement();
				}
				break;
			case Swift3Parser.T__15:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 800;
				this.fallthrough_statement();
				}
				break;
			case Swift3Parser.T__16:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 801;
				this.return_statement();
				}
				break;
			case Swift3Parser.T__17:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 802;
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
		this.enterRule(_localctx, 60, Swift3Parser.RULE_break_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 805;
			this.match(Swift3Parser.T__13);
			this.state = 807;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 806;
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
		this.enterRule(_localctx, 62, Swift3Parser.RULE_continue_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 809;
			this.match(Swift3Parser.T__14);
			this.state = 811;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 810;
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
		this.enterRule(_localctx, 64, Swift3Parser.RULE_fallthrough_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 813;
			this.match(Swift3Parser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 66, Swift3Parser.RULE_return_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 815;
			this.match(Swift3Parser.T__16);
			this.state = 817;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 816;
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
	public throw_statement(): Throw_statementContext {
		let _localctx: Throw_statementContext = new Throw_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Swift3Parser.RULE_throw_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 819;
			this.match(Swift3Parser.T__17);
			this.state = 820;
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
		this.enterRule(_localctx, 70, Swift3Parser.RULE_defer_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 822;
			this.match(Swift3Parser.T__18);
			this.state = 823;
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
		this.enterRule(_localctx, 72, Swift3Parser.RULE_do_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 825;
			this.match(Swift3Parser.T__19);
			this.state = 826;
			this.code_block();
			this.state = 828;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 827;
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
		this.enterRule(_localctx, 74, Swift3Parser.RULE_catch_clauses);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
			this.catch_clause();
			this.state = 832;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 831;
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
		this.enterRule(_localctx, 76, Swift3Parser.RULE_catch_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 834;
			this.match(Swift3Parser.T__20);
			this.state = 836;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 835;
				this.pattern(0);
				}
				break;
			}
			this.state = 839;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__12) {
				{
				this.state = 838;
				this.where_clause();
				}
			}

			this.state = 841;
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
		this.enterRule(_localctx, 78, Swift3Parser.RULE_compiler_control_statement);
		try {
			this.state = 845;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__21:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 843;
				this.conditional_compilation_block();
				}
				break;
			case Swift3Parser.T__28:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 844;
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
	public conditional_compilation_block(): Conditional_compilation_blockContext {
		let _localctx: Conditional_compilation_blockContext = new Conditional_compilation_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, Swift3Parser.RULE_conditional_compilation_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 847;
			this.if_directive_clause();
			this.state = 849;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__22) {
				{
				this.state = 848;
				this.elseif_directive_clauses();
				}
			}

			this.state = 852;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__23) {
				{
				this.state = 851;
				this.else_directive_clause();
				}
			}

			this.state = 854;
			this.endif_directive();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_directive_clause(): If_directive_clauseContext {
		let _localctx: If_directive_clauseContext = new If_directive_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Swift3Parser.RULE_if_directive_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 856;
			this.if_directive();
			this.state = 857;
			this.compilation_condition(0);
			this.state = 859;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 858;
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
	public elseif_directive_clauses(): Elseif_directive_clausesContext {
		let _localctx: Elseif_directive_clausesContext = new Elseif_directive_clausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Swift3Parser.RULE_elseif_directive_clauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 862;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 861;
				this.elseif_directive_clause();
				}
				}
				this.state = 864;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === Swift3Parser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseif_directive_clause(): Elseif_directive_clauseContext {
		let _localctx: Elseif_directive_clauseContext = new Elseif_directive_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Swift3Parser.RULE_elseif_directive_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 866;
			this.elseif_directive();
			this.state = 867;
			this.compilation_condition(0);
			this.state = 869;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 868;
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
	public else_directive_clause(): Else_directive_clauseContext {
		let _localctx: Else_directive_clauseContext = new Else_directive_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, Swift3Parser.RULE_else_directive_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 871;
			this.else_directive();
			this.state = 873;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 872;
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
	public if_directive(): If_directiveContext {
		let _localctx: If_directiveContext = new If_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, Swift3Parser.RULE_if_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 875;
			this.match(Swift3Parser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseif_directive(): Elseif_directiveContext {
		let _localctx: Elseif_directiveContext = new Elseif_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, Swift3Parser.RULE_elseif_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 877;
			this.match(Swift3Parser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public else_directive(): Else_directiveContext {
		let _localctx: Else_directiveContext = new Else_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Swift3Parser.RULE_else_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 879;
			this.match(Swift3Parser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endif_directive(): Endif_directiveContext {
		let _localctx: Endif_directiveContext = new Endif_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Swift3Parser.RULE_endif_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 881;
			this.match(Swift3Parser.T__24);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public compilation_condition(): Compilation_conditionContext;
	public compilation_condition(_p: number): Compilation_conditionContext;
	// @RuleVersion(0)
	public compilation_condition(_p?: number): Compilation_conditionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Compilation_conditionContext = new Compilation_conditionContext(this._ctx, _parentState);
		let _prevctx: Compilation_conditionContext = _localctx;
		let _startState: number = 98;
		this.enterRecursionRule(_localctx, 98, Swift3Parser.RULE_compilation_condition, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 893;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 884;
				this.platform_condition();
				}
				break;

			case 2:
				{
				this.state = 885;
				this.label_identifier();
				}
				break;

			case 3:
				{
				this.state = 886;
				this.boolean_literal();
				}
				break;

			case 4:
				{
				this.state = 887;
				this.match(Swift3Parser.LPAREN);
				this.state = 888;
				this.compilation_condition(0);
				this.state = 889;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 5:
				{
				this.state = 891;
				this.match(Swift3Parser.BANG);
				this.state = 892;
				this.compilation_condition(3);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 905;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 903;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
					case 1:
						{
						_localctx = new Compilation_conditionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_compilation_condition);
						this.state = 895;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 896;
						this.compilation_condition_AND();
						this.state = 897;
						this.compilation_condition(3);
						}
						break;

					case 2:
						{
						_localctx = new Compilation_conditionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_compilation_condition);
						this.state = 899;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 900;
						this.compilation_condition_OR();
						this.state = 901;
						this.compilation_condition(2);
						}
						break;
					}
					}
				}
				this.state = 907;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
	public platform_condition(): Platform_conditionContext {
		let _localctx: Platform_conditionContext = new Platform_conditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, Swift3Parser.RULE_platform_condition);
		try {
			this.state = 924;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__25:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 908;
				this.match(Swift3Parser.T__25);
				this.state = 909;
				this.match(Swift3Parser.LPAREN);
				this.state = 910;
				this.operating_system();
				this.state = 911;
				this.match(Swift3Parser.RPAREN);
				}
				break;
			case Swift3Parser.T__26:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 913;
				this.match(Swift3Parser.T__26);
				this.state = 914;
				this.match(Swift3Parser.LPAREN);
				this.state = 915;
				this.architecture();
				this.state = 916;
				this.match(Swift3Parser.RPAREN);
				}
				break;
			case Swift3Parser.T__27:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 918;
				this.match(Swift3Parser.T__27);
				this.state = 919;
				this.match(Swift3Parser.LPAREN);
				this.state = 920;
				this.compilation_condition_GE();
				this.state = 921;
				this.swift_version();
				this.state = 922;
				this.match(Swift3Parser.RPAREN);
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
	public swift_version(): Swift_versionContext {
		let _localctx: Swift_versionContext = new Swift_versionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, Swift3Parser.RULE_swift_version);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 926;
			this.match(Swift3Parser.Pure_decimal_digits);
			this.state = 927;
			this.match(Swift3Parser.DOT);
			this.state = 928;
			this.match(Swift3Parser.Pure_decimal_digits);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 104, Swift3Parser.RULE_operating_system);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 930;
			this.declaration_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 106, Swift3Parser.RULE_architecture);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 932;
			this.declaration_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 108, Swift3Parser.RULE_line_control_statement);
		try {
			this.state = 948;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 934;
				this.match(Swift3Parser.T__28);
				this.state = 935;
				this.match(Swift3Parser.LPAREN);
				this.state = 936;
				this.match(Swift3Parser.T__29);
				this.state = 937;
				this.match(Swift3Parser.COLON);
				this.state = 938;
				this.file_name();
				this.state = 939;
				this.match(Swift3Parser.COMMA);
				this.state = 940;
				this.match(Swift3Parser.T__30);
				this.state = 941;
				this.match(Swift3Parser.COLON);
				this.state = 942;
				this.line_number();
				this.state = 943;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 945;
				this.match(Swift3Parser.T__28);
				this.state = 946;
				this.match(Swift3Parser.LPAREN);
				this.state = 947;
				this.match(Swift3Parser.RPAREN);
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
		this.enterRule(_localctx, 110, Swift3Parser.RULE_line_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 950;
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
		this.enterRule(_localctx, 112, Swift3Parser.RULE_file_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 952;
			this.match(Swift3Parser.Static_string_literal);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 114, Swift3Parser.RULE_availability_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 954;
			this.match(Swift3Parser.T__31);
			this.state = 955;
			this.match(Swift3Parser.LPAREN);
			this.state = 956;
			this.availability_arguments();
			this.state = 957;
			this.match(Swift3Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 116, Swift3Parser.RULE_availability_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 959;
			this.availability_argument();
			this.state = 964;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift3Parser.COMMA) {
				{
				{
				this.state = 960;
				this.match(Swift3Parser.COMMA);
				this.state = 961;
				this.availability_argument();
				}
				}
				this.state = 966;
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
		this.enterRule(_localctx, 118, Swift3Parser.RULE_availability_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 967;
			_la = this._input.LA(1);
			if (!(_la === Swift3Parser.Platform_name_platform_version || _la === Swift3Parser.MUL)) {
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
	public generic_parameter_clause(): Generic_parameter_clauseContext {
		let _localctx: Generic_parameter_clauseContext = new Generic_parameter_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, Swift3Parser.RULE_generic_parameter_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 969;
			this.match(Swift3Parser.LT);
			this.state = 970;
			this.generic_parameter_list();
			this.state = 971;
			this.match(Swift3Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 122, Swift3Parser.RULE_generic_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 973;
			this.generic_parameter();
			this.state = 978;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift3Parser.COMMA) {
				{
				{
				this.state = 974;
				this.match(Swift3Parser.COMMA);
				this.state = 975;
				this.generic_parameter();
				}
				}
				this.state = 980;
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
		this.enterRule(_localctx, 124, Swift3Parser.RULE_generic_parameter);
		try {
			this.state = 990;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 981;
				this.type_name();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 982;
				this.type_name();
				this.state = 983;
				this.match(Swift3Parser.COLON);
				this.state = 984;
				this.type_identifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 986;
				this.type_name();
				this.state = 987;
				this.match(Swift3Parser.COLON);
				this.state = 988;
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
	public generic_where_clause(): Generic_where_clauseContext {
		let _localctx: Generic_where_clauseContext = new Generic_where_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, Swift3Parser.RULE_generic_where_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 992;
			this.match(Swift3Parser.T__12);
			this.state = 993;
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
		this.enterRule(_localctx, 128, Swift3Parser.RULE_requirement_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 995;
			this.requirement();
			this.state = 1000;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 996;
					this.match(Swift3Parser.COMMA);
					this.state = 997;
					this.requirement();
					}
					}
				}
				this.state = 1002;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
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
	public requirement(): RequirementContext {
		let _localctx: RequirementContext = new RequirementContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, Swift3Parser.RULE_requirement);
		try {
			this.state = 1005;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1003;
				this.conformance_requirement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1004;
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
		this.enterRule(_localctx, 132, Swift3Parser.RULE_conformance_requirement);
		try {
			this.state = 1015;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1007;
				this.type_identifier();
				this.state = 1008;
				this.match(Swift3Parser.COLON);
				this.state = 1009;
				this.type_identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1011;
				this.type_identifier();
				this.state = 1012;
				this.match(Swift3Parser.COLON);
				this.state = 1013;
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
		this.enterRule(_localctx, 134, Swift3Parser.RULE_same_type_requirement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1017;
			this.type_identifier();
			this.state = 1018;
			this.same_type_equals();
			this.state = 1019;
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
		this.enterRule(_localctx, 136, Swift3Parser.RULE_generic_argument_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1021;
			this.match(Swift3Parser.LT);
			this.state = 1022;
			this.generic_argument_list();
			this.state = 1023;
			this.match(Swift3Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 138, Swift3Parser.RULE_generic_argument_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1025;
			this.generic_argument();
			this.state = 1030;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift3Parser.COMMA) {
				{
				{
				this.state = 1026;
				this.match(Swift3Parser.COMMA);
				this.state = 1027;
				this.generic_argument();
				}
				}
				this.state = 1032;
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
		this.enterRule(_localctx, 140, Swift3Parser.RULE_generic_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1033;
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
		this.enterRule(_localctx, 142, Swift3Parser.RULE_declaration);
		try {
			this.state = 1051;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1035;
				this.import_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1036;
				this.constant_declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1037;
				this.variable_declaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1038;
				this.typealias_declaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1039;
				this.function_declaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1040;
				this.enum_declaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1041;
				this.struct_declaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1042;
				this.class_declaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1043;
				this.protocol_declaration();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1044;
				this.initializer_declaration();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1045;
				this.deinitializer_declaration();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1046;
				this.extension_declaration();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1047;
				this.subscript_declaration();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1048;
				this.operator_declaration();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1049;
				this.operator_declaration();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1050;
				this.precedence_group_declaration();
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
		this.enterRule(_localctx, 144, Swift3Parser.RULE_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1054;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1053;
				this.declaration();
				}
				}
				this.state = 1056;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === Swift3Parser.T__4 || _la === Swift3Parser.T__5 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Swift3Parser.T__32 - 33)) | (1 << (Swift3Parser.T__33 - 33)) | (1 << (Swift3Parser.T__34 - 33)) | (1 << (Swift3Parser.T__35 - 33)) | (1 << (Swift3Parser.T__36 - 33)) | (1 << (Swift3Parser.T__37 - 33)) | (1 << (Swift3Parser.T__38 - 33)) | (1 << (Swift3Parser.T__45 - 33)) | (1 << (Swift3Parser.T__46 - 33)) | (1 << (Swift3Parser.T__48 - 33)) | (1 << (Swift3Parser.T__49 - 33)) | (1 << (Swift3Parser.T__50 - 33)) | (1 << (Swift3Parser.T__51 - 33)) | (1 << (Swift3Parser.T__52 - 33)) | (1 << (Swift3Parser.T__54 - 33)) | (1 << (Swift3Parser.T__55 - 33)) | (1 << (Swift3Parser.T__56 - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Swift3Parser.T__64 - 65)) | (1 << (Swift3Parser.T__65 - 65)) | (1 << (Swift3Parser.T__66 - 65)) | (1 << (Swift3Parser.T__67 - 65)) | (1 << (Swift3Parser.T__68 - 65)) | (1 << (Swift3Parser.T__69 - 65)) | (1 << (Swift3Parser.T__70 - 65)) | (1 << (Swift3Parser.T__71 - 65)) | (1 << (Swift3Parser.T__74 - 65)) | (1 << (Swift3Parser.T__75 - 65)) | (1 << (Swift3Parser.T__76 - 65)) | (1 << (Swift3Parser.T__77 - 65)) | (1 << (Swift3Parser.T__78 - 65)) | (1 << (Swift3Parser.T__79 - 65)) | (1 << (Swift3Parser.T__80 - 65)) | (1 << (Swift3Parser.T__81 - 65)))) !== 0) || _la === Swift3Parser.AT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 146, Swift3Parser.RULE_top_level_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1059;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 1058;
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
		this.enterRule(_localctx, 148, Swift3Parser.RULE_code_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1061;
			this.match(Swift3Parser.LCURLY);
			this.state = 1063;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 1062;
				this.statements();
				}
				break;
			}
			this.state = 1065;
			this.match(Swift3Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 150, Swift3Parser.RULE_import_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1068;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1067;
				this.attributes();
				}
			}

			this.state = 1070;
			this.match(Swift3Parser.T__32);
			this.state = 1072;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__5 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Swift3Parser.T__33 - 34)) | (1 << (Swift3Parser.T__34 - 34)) | (1 << (Swift3Parser.T__35 - 34)) | (1 << (Swift3Parser.T__36 - 34)) | (1 << (Swift3Parser.T__37 - 34)) | (1 << (Swift3Parser.T__38 - 34)))) !== 0)) {
				{
				this.state = 1071;
				this.import_kind();
				}
			}

			this.state = 1074;
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
		this.enterRule(_localctx, 152, Swift3Parser.RULE_import_kind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1076;
			_la = this._input.LA(1);
			if (!(_la === Swift3Parser.T__5 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Swift3Parser.T__33 - 34)) | (1 << (Swift3Parser.T__34 - 34)) | (1 << (Swift3Parser.T__35 - 34)) | (1 << (Swift3Parser.T__36 - 34)) | (1 << (Swift3Parser.T__37 - 34)) | (1 << (Swift3Parser.T__38 - 34)))) !== 0))) {
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
		this.enterRule(_localctx, 154, Swift3Parser.RULE_import_path);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1078;
			this.import_path_identifier();
			this.state = 1083;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1079;
					this.match(Swift3Parser.DOT);
					this.state = 1080;
					this.import_path_identifier();
					}
					}
				}
				this.state = 1085;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
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
	public import_path_identifier(): Import_path_identifierContext {
		let _localctx: Import_path_identifierContext = new Import_path_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, Swift3Parser.RULE_import_path_identifier);
		try {
			this.state = 1088;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__25:
			case Swift3Parser.T__26:
			case Swift3Parser.T__27:
			case Swift3Parser.T__29:
			case Swift3Parser.T__30:
			case Swift3Parser.T__39:
			case Swift3Parser.T__40:
			case Swift3Parser.T__41:
			case Swift3Parser.T__42:
			case Swift3Parser.T__45:
			case Swift3Parser.T__46:
			case Swift3Parser.T__52:
			case Swift3Parser.T__54:
			case Swift3Parser.T__55:
			case Swift3Parser.T__57:
			case Swift3Parser.T__58:
			case Swift3Parser.T__59:
			case Swift3Parser.T__60:
			case Swift3Parser.T__61:
			case Swift3Parser.T__62:
			case Swift3Parser.T__63:
			case Swift3Parser.T__64:
			case Swift3Parser.T__65:
			case Swift3Parser.T__66:
			case Swift3Parser.T__67:
			case Swift3Parser.T__68:
			case Swift3Parser.T__69:
			case Swift3Parser.T__71:
			case Swift3Parser.T__72:
			case Swift3Parser.T__73:
			case Swift3Parser.T__74:
			case Swift3Parser.T__79:
			case Swift3Parser.T__80:
			case Swift3Parser.T__81:
			case Swift3Parser.T__93:
			case Swift3Parser.T__94:
			case Swift3Parser.T__95:
			case Swift3Parser.T__96:
			case Swift3Parser.T__98:
			case Swift3Parser.T__109:
			case Swift3Parser.T__110:
			case Swift3Parser.T__111:
			case Swift3Parser.T__112:
			case Swift3Parser.T__115:
			case Swift3Parser.T__116:
			case Swift3Parser.T__117:
			case Swift3Parser.T__118:
			case Swift3Parser.T__119:
			case Swift3Parser.T__120:
			case Swift3Parser.T__121:
			case Swift3Parser.T__122:
			case Swift3Parser.T__123:
			case Swift3Parser.T__124:
			case Swift3Parser.T__125:
			case Swift3Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1086;
				this.declaration_identifier();
				}
				break;
			case Swift3Parser.DOT:
			case Swift3Parser.LT:
			case Swift3Parser.GT:
			case Swift3Parser.BANG:
			case Swift3Parser.QUESTION:
			case Swift3Parser.AND:
			case Swift3Parser.SUB:
			case Swift3Parser.EQUAL:
			case Swift3Parser.OR:
			case Swift3Parser.DIV:
			case Swift3Parser.ADD:
			case Swift3Parser.MUL:
			case Swift3Parser.MOD:
			case Swift3Parser.CARET:
			case Swift3Parser.TILDE:
			case Swift3Parser.Operator_head_other:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1087;
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
		this.enterRule(_localctx, 158, Swift3Parser.RULE_constant_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1091;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1090;
				this.attributes();
				}
			}

			this.state = 1094;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (Swift3Parser.T__35 - 36)) | (1 << (Swift3Parser.T__46 - 36)) | (1 << (Swift3Parser.T__52 - 36)) | (1 << (Swift3Parser.T__54 - 36)) | (1 << (Swift3Parser.T__55 - 36)) | (1 << (Swift3Parser.T__64 - 36)) | (1 << (Swift3Parser.T__65 - 36)) | (1 << (Swift3Parser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (Swift3Parser.T__67 - 68)) | (1 << (Swift3Parser.T__68 - 68)) | (1 << (Swift3Parser.T__69 - 68)) | (1 << (Swift3Parser.T__70 - 68)) | (1 << (Swift3Parser.T__71 - 68)) | (1 << (Swift3Parser.T__74 - 68)) | (1 << (Swift3Parser.T__75 - 68)) | (1 << (Swift3Parser.T__76 - 68)) | (1 << (Swift3Parser.T__77 - 68)) | (1 << (Swift3Parser.T__78 - 68)) | (1 << (Swift3Parser.T__79 - 68)) | (1 << (Swift3Parser.T__80 - 68)) | (1 << (Swift3Parser.T__81 - 68)))) !== 0)) {
				{
				this.state = 1093;
				this.declaration_modifiers();
				}
			}

			this.state = 1096;
			this.match(Swift3Parser.T__4);
			this.state = 1097;
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
		this.enterRule(_localctx, 160, Swift3Parser.RULE_pattern_initializer_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1099;
			this.pattern_initializer();
			this.state = 1104;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1100;
					this.match(Swift3Parser.COMMA);
					this.state = 1101;
					this.pattern_initializer();
					}
					}
				}
				this.state = 1106;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
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
		this.enterRule(_localctx, 162, Swift3Parser.RULE_pattern_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1107;
			this.pattern(0);
			this.state = 1109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 1108;
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
		this.enterRule(_localctx, 164, Swift3Parser.RULE_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1111;
			this.assignment_operator();
			this.state = 1112;
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
		this.enterRule(_localctx, 166, Swift3Parser.RULE_variable_declaration);
		try {
			this.state = 1149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1114;
				this.variable_declaration_head();
				this.state = 1115;
				this.variable_name();
				this.state = 1116;
				this.type_annotation();
				this.state = 1117;
				this.code_block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1119;
				this.variable_declaration_head();
				this.state = 1120;
				this.variable_name();
				this.state = 1121;
				this.type_annotation();
				this.state = 1122;
				this.getter_setter_block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1124;
				this.variable_declaration_head();
				this.state = 1125;
				this.variable_name();
				this.state = 1126;
				this.type_annotation();
				this.state = 1127;
				this.getter_setter_keyword_block();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1129;
				this.variable_declaration_head();
				this.state = 1130;
				this.variable_name();
				this.state = 1131;
				this.type_annotation();
				this.state = 1133;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
				case 1:
					{
					this.state = 1132;
					this.initializer();
					}
					break;
				}
				this.state = 1135;
				this.willSet_didSet_block();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1137;
				this.variable_declaration_head();
				this.state = 1138;
				this.variable_name();
				this.state = 1139;
				this.type_annotation();
				this.state = 1140;
				this.type_annotation();
				this.state = 1142;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
				case 1:
					{
					this.state = 1141;
					this.initializer();
					}
					break;
				}
				this.state = 1144;
				this.willSet_didSet_block();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1146;
				this.variable_declaration_head();
				this.state = 1147;
				this.pattern_initializer_list();
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
		this.enterRule(_localctx, 168, Swift3Parser.RULE_variable_declaration_head);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1151;
				this.attributes();
				}
			}

			this.state = 1155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (Swift3Parser.T__35 - 36)) | (1 << (Swift3Parser.T__46 - 36)) | (1 << (Swift3Parser.T__52 - 36)) | (1 << (Swift3Parser.T__54 - 36)) | (1 << (Swift3Parser.T__55 - 36)) | (1 << (Swift3Parser.T__64 - 36)) | (1 << (Swift3Parser.T__65 - 36)) | (1 << (Swift3Parser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (Swift3Parser.T__67 - 68)) | (1 << (Swift3Parser.T__68 - 68)) | (1 << (Swift3Parser.T__69 - 68)) | (1 << (Swift3Parser.T__70 - 68)) | (1 << (Swift3Parser.T__71 - 68)) | (1 << (Swift3Parser.T__74 - 68)) | (1 << (Swift3Parser.T__75 - 68)) | (1 << (Swift3Parser.T__76 - 68)) | (1 << (Swift3Parser.T__77 - 68)) | (1 << (Swift3Parser.T__78 - 68)) | (1 << (Swift3Parser.T__79 - 68)) | (1 << (Swift3Parser.T__80 - 68)) | (1 << (Swift3Parser.T__81 - 68)))) !== 0)) {
				{
				this.state = 1154;
				this.declaration_modifiers();
				}
			}

			this.state = 1157;
			this.match(Swift3Parser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 170, Swift3Parser.RULE_variable_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1159;
			this.declaration_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 172, Swift3Parser.RULE_getter_setter_block);
		let _la: number;
		try {
			this.state = 1173;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1161;
				this.match(Swift3Parser.LCURLY);
				this.state = 1162;
				this.getter_clause();
				this.state = 1164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.T__40 || _la === Swift3Parser.T__80 || _la === Swift3Parser.T__81 || _la === Swift3Parser.AT) {
					{
					this.state = 1163;
					this.setter_clause();
					}
				}

				this.state = 1166;
				this.match(Swift3Parser.RCURLY);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1168;
				this.match(Swift3Parser.LCURLY);
				this.state = 1169;
				this.setter_clause();
				this.state = 1170;
				this.getter_clause();
				this.state = 1171;
				this.match(Swift3Parser.RCURLY);
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
		this.enterRule(_localctx, 174, Swift3Parser.RULE_getter_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1175;
				this.attributes();
				}
			}

			this.state = 1179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__80 || _la === Swift3Parser.T__81) {
				{
				this.state = 1178;
				this.mutation_modifier();
				}
			}

			this.state = 1181;
			this.match(Swift3Parser.T__39);
			this.state = 1182;
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
		this.enterRule(_localctx, 176, Swift3Parser.RULE_setter_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1184;
				this.attributes();
				}
			}

			this.state = 1188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__80 || _la === Swift3Parser.T__81) {
				{
				this.state = 1187;
				this.mutation_modifier();
				}
			}

			this.state = 1190;
			this.match(Swift3Parser.T__40);
			this.state = 1192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.LPAREN) {
				{
				this.state = 1191;
				this.setter_name();
				}
			}

			this.state = 1194;
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
		this.enterRule(_localctx, 178, Swift3Parser.RULE_setter_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1196;
			this.match(Swift3Parser.LPAREN);
			this.state = 1197;
			this.declaration_identifier();
			this.state = 1198;
			this.match(Swift3Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 180, Swift3Parser.RULE_getter_setter_keyword_block);
		let _la: number;
		try {
			this.state = 1212;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1200;
				this.match(Swift3Parser.LCURLY);
				this.state = 1201;
				this.getter_keyword_clause();
				this.state = 1203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.T__40 || _la === Swift3Parser.T__80 || _la === Swift3Parser.T__81 || _la === Swift3Parser.AT) {
					{
					this.state = 1202;
					this.setter_keyword_clause();
					}
				}

				this.state = 1205;
				this.match(Swift3Parser.RCURLY);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1207;
				this.match(Swift3Parser.LCURLY);
				this.state = 1208;
				this.setter_keyword_clause();
				this.state = 1209;
				this.getter_keyword_clause();
				this.state = 1210;
				this.match(Swift3Parser.RCURLY);
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
		this.enterRule(_localctx, 182, Swift3Parser.RULE_getter_keyword_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1214;
				this.attributes();
				}
			}

			this.state = 1218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__80 || _la === Swift3Parser.T__81) {
				{
				this.state = 1217;
				this.mutation_modifier();
				}
			}

			this.state = 1220;
			this.match(Swift3Parser.T__39);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 184, Swift3Parser.RULE_setter_keyword_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1222;
				this.attributes();
				}
			}

			this.state = 1226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__80 || _la === Swift3Parser.T__81) {
				{
				this.state = 1225;
				this.mutation_modifier();
				}
			}

			this.state = 1228;
			this.match(Swift3Parser.T__40);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 186, Swift3Parser.RULE_willSet_didSet_block);
		let _la: number;
		try {
			this.state = 1242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1230;
				this.match(Swift3Parser.LCURLY);
				this.state = 1231;
				this.willSet_clause();
				this.state = 1233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.T__42 || _la === Swift3Parser.AT) {
					{
					this.state = 1232;
					this.didSet_clause();
					}
				}

				this.state = 1235;
				this.match(Swift3Parser.RCURLY);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1237;
				this.match(Swift3Parser.LCURLY);
				this.state = 1238;
				this.didSet_clause();
				this.state = 1239;
				this.willSet_clause();
				this.state = 1240;
				this.match(Swift3Parser.RCURLY);
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
		this.enterRule(_localctx, 188, Swift3Parser.RULE_willSet_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1244;
				this.attributes();
				}
			}

			this.state = 1247;
			this.match(Swift3Parser.T__41);
			this.state = 1249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.LPAREN) {
				{
				this.state = 1248;
				this.setter_name();
				}
			}

			this.state = 1251;
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
		this.enterRule(_localctx, 190, Swift3Parser.RULE_didSet_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1253;
				this.attributes();
				}
			}

			this.state = 1256;
			this.match(Swift3Parser.T__42);
			this.state = 1258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.LPAREN) {
				{
				this.state = 1257;
				this.setter_name();
				}
			}

			this.state = 1260;
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
		this.enterRule(_localctx, 192, Swift3Parser.RULE_typealias_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1262;
				this.attributes();
				}
			}

			this.state = 1266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (Swift3Parser.T__75 - 76)) | (1 << (Swift3Parser.T__76 - 76)) | (1 << (Swift3Parser.T__77 - 76)) | (1 << (Swift3Parser.T__78 - 76)) | (1 << (Swift3Parser.T__79 - 76)))) !== 0)) {
				{
				this.state = 1265;
				this.access_level_modifier();
				}
			}

			this.state = 1268;
			this.match(Swift3Parser.T__33);
			this.state = 1269;
			this.typealias_name();
			this.state = 1271;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 1270;
				this.generic_parameter_clause();
				}
				break;
			}
			this.state = 1273;
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
	public typealias_name(): Typealias_nameContext {
		let _localctx: Typealias_nameContext = new Typealias_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, Swift3Parser.RULE_typealias_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1275;
			this.declaration_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 196, Swift3Parser.RULE_typealias_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1277;
			this.assignment_operator();
			this.state = 1278;
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
		this.enterRule(_localctx, 198, Swift3Parser.RULE_function_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1280;
			this.function_head();
			this.state = 1281;
			this.function_name();
			this.state = 1283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.LT) {
				{
				this.state = 1282;
				this.generic_parameter_clause();
				}
			}

			this.state = 1285;
			this.function_signature();
			this.state = 1287;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				{
				this.state = 1286;
				this.generic_where_clause();
				}
				break;
			}
			this.state = 1290;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 1289;
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
		this.enterRule(_localctx, 200, Swift3Parser.RULE_function_head);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1292;
				this.attributes();
				}
			}

			this.state = 1296;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (Swift3Parser.T__35 - 36)) | (1 << (Swift3Parser.T__46 - 36)) | (1 << (Swift3Parser.T__52 - 36)) | (1 << (Swift3Parser.T__54 - 36)) | (1 << (Swift3Parser.T__55 - 36)) | (1 << (Swift3Parser.T__64 - 36)) | (1 << (Swift3Parser.T__65 - 36)) | (1 << (Swift3Parser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (Swift3Parser.T__67 - 68)) | (1 << (Swift3Parser.T__68 - 68)) | (1 << (Swift3Parser.T__69 - 68)) | (1 << (Swift3Parser.T__70 - 68)) | (1 << (Swift3Parser.T__71 - 68)) | (1 << (Swift3Parser.T__74 - 68)) | (1 << (Swift3Parser.T__75 - 68)) | (1 << (Swift3Parser.T__76 - 68)) | (1 << (Swift3Parser.T__77 - 68)) | (1 << (Swift3Parser.T__78 - 68)) | (1 << (Swift3Parser.T__79 - 68)) | (1 << (Swift3Parser.T__80 - 68)) | (1 << (Swift3Parser.T__81 - 68)))) !== 0)) {
				{
				this.state = 1295;
				this.declaration_modifiers();
				}
			}

			this.state = 1298;
			this.match(Swift3Parser.T__38);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 202, Swift3Parser.RULE_function_name);
		try {
			this.state = 1302;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__25:
			case Swift3Parser.T__26:
			case Swift3Parser.T__27:
			case Swift3Parser.T__29:
			case Swift3Parser.T__30:
			case Swift3Parser.T__39:
			case Swift3Parser.T__40:
			case Swift3Parser.T__41:
			case Swift3Parser.T__42:
			case Swift3Parser.T__45:
			case Swift3Parser.T__46:
			case Swift3Parser.T__52:
			case Swift3Parser.T__54:
			case Swift3Parser.T__55:
			case Swift3Parser.T__57:
			case Swift3Parser.T__58:
			case Swift3Parser.T__59:
			case Swift3Parser.T__60:
			case Swift3Parser.T__61:
			case Swift3Parser.T__62:
			case Swift3Parser.T__63:
			case Swift3Parser.T__64:
			case Swift3Parser.T__65:
			case Swift3Parser.T__66:
			case Swift3Parser.T__67:
			case Swift3Parser.T__68:
			case Swift3Parser.T__69:
			case Swift3Parser.T__71:
			case Swift3Parser.T__72:
			case Swift3Parser.T__73:
			case Swift3Parser.T__74:
			case Swift3Parser.T__79:
			case Swift3Parser.T__80:
			case Swift3Parser.T__81:
			case Swift3Parser.T__93:
			case Swift3Parser.T__94:
			case Swift3Parser.T__95:
			case Swift3Parser.T__96:
			case Swift3Parser.T__98:
			case Swift3Parser.T__109:
			case Swift3Parser.T__110:
			case Swift3Parser.T__111:
			case Swift3Parser.T__112:
			case Swift3Parser.T__115:
			case Swift3Parser.T__116:
			case Swift3Parser.T__117:
			case Swift3Parser.T__118:
			case Swift3Parser.T__119:
			case Swift3Parser.T__120:
			case Swift3Parser.T__121:
			case Swift3Parser.T__122:
			case Swift3Parser.T__123:
			case Swift3Parser.T__124:
			case Swift3Parser.T__125:
			case Swift3Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1300;
				this.declaration_identifier();
				}
				break;
			case Swift3Parser.DOT:
			case Swift3Parser.LT:
			case Swift3Parser.GT:
			case Swift3Parser.BANG:
			case Swift3Parser.QUESTION:
			case Swift3Parser.AND:
			case Swift3Parser.SUB:
			case Swift3Parser.EQUAL:
			case Swift3Parser.OR:
			case Swift3Parser.DIV:
			case Swift3Parser.ADD:
			case Swift3Parser.MUL:
			case Swift3Parser.MOD:
			case Swift3Parser.CARET:
			case Swift3Parser.TILDE:
			case Swift3Parser.Operator_head_other:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1301;
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
		this.enterRule(_localctx, 204, Swift3Parser.RULE_function_signature);
		try {
			this.state = 1316;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1304;
				this.parameter_clause();
				this.state = 1306;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 1305;
					this.match(Swift3Parser.T__43);
					}
					break;
				}
				this.state = 1309;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
				case 1:
					{
					this.state = 1308;
					this.function_result();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1311;
				this.parameter_clause();
				this.state = 1312;
				this.match(Swift3Parser.T__44);
				this.state = 1314;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
				case 1:
					{
					this.state = 1313;
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
		this.enterRule(_localctx, 206, Swift3Parser.RULE_function_result);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1318;
			this.arrow_operator();
			this.state = 1320;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				{
				this.state = 1319;
				this.attributes();
				}
				break;
			}
			this.state = 1322;
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
		this.enterRule(_localctx, 208, Swift3Parser.RULE_function_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1324;
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
	public parameter_clause(): Parameter_clauseContext {
		let _localctx: Parameter_clauseContext = new Parameter_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, Swift3Parser.RULE_parameter_clause);
		try {
			this.state = 1332;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1326;
				this.match(Swift3Parser.LPAREN);
				this.state = 1327;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1328;
				this.match(Swift3Parser.LPAREN);
				this.state = 1329;
				this.parameter_list();
				this.state = 1330;
				this.match(Swift3Parser.RPAREN);
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
		this.enterRule(_localctx, 212, Swift3Parser.RULE_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1334;
			this.parameter();
			this.state = 1339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift3Parser.COMMA) {
				{
				{
				this.state = 1335;
				this.match(Swift3Parser.COMMA);
				this.state = 1336;
				this.parameter();
				}
				}
				this.state = 1341;
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
		this.enterRule(_localctx, 214, Swift3Parser.RULE_parameter);
		try {
			this.state = 1363;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1343;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
				case 1:
					{
					this.state = 1342;
					this.external_parameter_name();
					}
					break;
				}
				this.state = 1345;
				this.local_parameter_name();
				this.state = 1346;
				this.type_annotation();
				this.state = 1348;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
				case 1:
					{
					this.state = 1347;
					this.default_argument_clause();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1351;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
				case 1:
					{
					this.state = 1350;
					this.external_parameter_name();
					}
					break;
				}
				this.state = 1353;
				this.local_parameter_name();
				this.state = 1354;
				this.type_annotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1357;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
				case 1:
					{
					this.state = 1356;
					this.external_parameter_name();
					}
					break;
				}
				this.state = 1359;
				this.local_parameter_name();
				this.state = 1360;
				this.type_annotation();
				this.state = 1361;
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
		this.enterRule(_localctx, 216, Swift3Parser.RULE_external_parameter_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1365;
			this.label_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 218, Swift3Parser.RULE_local_parameter_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1367;
			this.label_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 220, Swift3Parser.RULE_default_argument_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1369;
			this.assignment_operator();
			this.state = 1370;
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
		this.enterRule(_localctx, 222, Swift3Parser.RULE_enum_declaration);
		let _la: number;
		try {
			this.state = 1386;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.AT) {
					{
					this.state = 1372;
					this.attributes();
					}
				}

				this.state = 1376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (Swift3Parser.T__75 - 76)) | (1 << (Swift3Parser.T__76 - 76)) | (1 << (Swift3Parser.T__77 - 76)) | (1 << (Swift3Parser.T__78 - 76)) | (1 << (Swift3Parser.T__79 - 76)))) !== 0)) {
					{
					this.state = 1375;
					this.access_level_modifier();
					}
				}

				this.state = 1378;
				this.union_style_enum();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.AT) {
					{
					this.state = 1379;
					this.attributes();
					}
				}

				this.state = 1383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (Swift3Parser.T__75 - 76)) | (1 << (Swift3Parser.T__76 - 76)) | (1 << (Swift3Parser.T__77 - 76)) | (1 << (Swift3Parser.T__78 - 76)) | (1 << (Swift3Parser.T__79 - 76)))) !== 0)) {
					{
					this.state = 1382;
					this.access_level_modifier();
					}
				}

				this.state = 1385;
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
		this.enterRule(_localctx, 224, Swift3Parser.RULE_union_style_enum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__45) {
				{
				this.state = 1388;
				this.match(Swift3Parser.T__45);
				}
			}

			this.state = 1391;
			this.match(Swift3Parser.T__36);
			this.state = 1392;
			this.enum_name();
			this.state = 1394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.LT) {
				{
				this.state = 1393;
				this.generic_parameter_clause();
				}
			}

			this.state = 1397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.COLON) {
				{
				this.state = 1396;
				this.type_inheritance_clause();
				}
			}

			this.state = 1400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__12) {
				{
				this.state = 1399;
				this.generic_where_clause();
				}
			}

			this.state = 1402;
			this.match(Swift3Parser.LCURLY);
			this.state = 1404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Swift3Parser.T__1) | (1 << Swift3Parser.T__4) | (1 << Swift3Parser.T__5) | (1 << Swift3Parser.T__21) | (1 << Swift3Parser.T__28))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Swift3Parser.T__32 - 33)) | (1 << (Swift3Parser.T__33 - 33)) | (1 << (Swift3Parser.T__34 - 33)) | (1 << (Swift3Parser.T__35 - 33)) | (1 << (Swift3Parser.T__36 - 33)) | (1 << (Swift3Parser.T__37 - 33)) | (1 << (Swift3Parser.T__38 - 33)) | (1 << (Swift3Parser.T__45 - 33)) | (1 << (Swift3Parser.T__46 - 33)) | (1 << (Swift3Parser.T__48 - 33)) | (1 << (Swift3Parser.T__49 - 33)) | (1 << (Swift3Parser.T__50 - 33)) | (1 << (Swift3Parser.T__51 - 33)) | (1 << (Swift3Parser.T__52 - 33)) | (1 << (Swift3Parser.T__54 - 33)) | (1 << (Swift3Parser.T__55 - 33)) | (1 << (Swift3Parser.T__56 - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Swift3Parser.T__64 - 65)) | (1 << (Swift3Parser.T__65 - 65)) | (1 << (Swift3Parser.T__66 - 65)) | (1 << (Swift3Parser.T__67 - 65)) | (1 << (Swift3Parser.T__68 - 65)) | (1 << (Swift3Parser.T__69 - 65)) | (1 << (Swift3Parser.T__70 - 65)) | (1 << (Swift3Parser.T__71 - 65)) | (1 << (Swift3Parser.T__74 - 65)) | (1 << (Swift3Parser.T__75 - 65)) | (1 << (Swift3Parser.T__76 - 65)) | (1 << (Swift3Parser.T__77 - 65)) | (1 << (Swift3Parser.T__78 - 65)) | (1 << (Swift3Parser.T__79 - 65)) | (1 << (Swift3Parser.T__80 - 65)) | (1 << (Swift3Parser.T__81 - 65)))) !== 0) || _la === Swift3Parser.AT) {
				{
				this.state = 1403;
				this.union_style_enum_members();
				}
			}

			this.state = 1406;
			this.match(Swift3Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 226, Swift3Parser.RULE_union_style_enum_members);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1408;
			this.union_style_enum_member();
			this.state = 1410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Swift3Parser.T__1) | (1 << Swift3Parser.T__4) | (1 << Swift3Parser.T__5) | (1 << Swift3Parser.T__21) | (1 << Swift3Parser.T__28))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Swift3Parser.T__32 - 33)) | (1 << (Swift3Parser.T__33 - 33)) | (1 << (Swift3Parser.T__34 - 33)) | (1 << (Swift3Parser.T__35 - 33)) | (1 << (Swift3Parser.T__36 - 33)) | (1 << (Swift3Parser.T__37 - 33)) | (1 << (Swift3Parser.T__38 - 33)) | (1 << (Swift3Parser.T__45 - 33)) | (1 << (Swift3Parser.T__46 - 33)) | (1 << (Swift3Parser.T__48 - 33)) | (1 << (Swift3Parser.T__49 - 33)) | (1 << (Swift3Parser.T__50 - 33)) | (1 << (Swift3Parser.T__51 - 33)) | (1 << (Swift3Parser.T__52 - 33)) | (1 << (Swift3Parser.T__54 - 33)) | (1 << (Swift3Parser.T__55 - 33)) | (1 << (Swift3Parser.T__56 - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Swift3Parser.T__64 - 65)) | (1 << (Swift3Parser.T__65 - 65)) | (1 << (Swift3Parser.T__66 - 65)) | (1 << (Swift3Parser.T__67 - 65)) | (1 << (Swift3Parser.T__68 - 65)) | (1 << (Swift3Parser.T__69 - 65)) | (1 << (Swift3Parser.T__70 - 65)) | (1 << (Swift3Parser.T__71 - 65)) | (1 << (Swift3Parser.T__74 - 65)) | (1 << (Swift3Parser.T__75 - 65)) | (1 << (Swift3Parser.T__76 - 65)) | (1 << (Swift3Parser.T__77 - 65)) | (1 << (Swift3Parser.T__78 - 65)) | (1 << (Swift3Parser.T__79 - 65)) | (1 << (Swift3Parser.T__80 - 65)) | (1 << (Swift3Parser.T__81 - 65)))) !== 0) || _la === Swift3Parser.AT) {
				{
				this.state = 1409;
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
		this.enterRule(_localctx, 228, Swift3Parser.RULE_union_style_enum_member);
		try {
			this.state = 1415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1412;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1413;
				this.union_style_enum_case_clause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1414;
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
	public union_style_enum_case_clause(): Union_style_enum_case_clauseContext {
		let _localctx: Union_style_enum_case_clauseContext = new Union_style_enum_case_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, Swift3Parser.RULE_union_style_enum_case_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1417;
				this.attributes();
				}
			}

			this.state = 1421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__45) {
				{
				this.state = 1420;
				this.match(Swift3Parser.T__45);
				}
			}

			this.state = 1423;
			this.match(Swift3Parser.T__1);
			this.state = 1424;
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
		this.enterRule(_localctx, 232, Swift3Parser.RULE_union_style_enum_case_list);
		try {
			this.state = 1431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1426;
				this.union_style_enum_case();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1427;
				this.union_style_enum_case();
				this.state = 1428;
				this.match(Swift3Parser.COMMA);
				this.state = 1429;
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
		this.enterRule(_localctx, 234, Swift3Parser.RULE_union_style_enum_case);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1433;
			this.enum_case_name();
			this.state = 1435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.LPAREN) {
				{
				this.state = 1434;
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
		this.enterRule(_localctx, 236, Swift3Parser.RULE_enum_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1437;
			this.declaration_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 238, Swift3Parser.RULE_enum_case_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1439;
			this.declaration_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 240, Swift3Parser.RULE_raw_value_style_enum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1441;
			this.match(Swift3Parser.T__36);
			this.state = 1442;
			this.enum_name();
			this.state = 1444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.LT) {
				{
				this.state = 1443;
				this.generic_parameter_clause();
				}
			}

			this.state = 1446;
			this.type_inheritance_clause();
			this.state = 1448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__12) {
				{
				this.state = 1447;
				this.generic_where_clause();
				}
			}

			this.state = 1450;
			this.match(Swift3Parser.LCURLY);
			this.state = 1451;
			this.raw_value_style_enum_members();
			this.state = 1452;
			this.match(Swift3Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 242, Swift3Parser.RULE_raw_value_style_enum_members);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1454;
			this.raw_value_style_enum_member();
			this.state = 1456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Swift3Parser.T__1) | (1 << Swift3Parser.T__4) | (1 << Swift3Parser.T__5) | (1 << Swift3Parser.T__21) | (1 << Swift3Parser.T__28))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Swift3Parser.T__32 - 33)) | (1 << (Swift3Parser.T__33 - 33)) | (1 << (Swift3Parser.T__34 - 33)) | (1 << (Swift3Parser.T__35 - 33)) | (1 << (Swift3Parser.T__36 - 33)) | (1 << (Swift3Parser.T__37 - 33)) | (1 << (Swift3Parser.T__38 - 33)) | (1 << (Swift3Parser.T__45 - 33)) | (1 << (Swift3Parser.T__46 - 33)) | (1 << (Swift3Parser.T__48 - 33)) | (1 << (Swift3Parser.T__49 - 33)) | (1 << (Swift3Parser.T__50 - 33)) | (1 << (Swift3Parser.T__51 - 33)) | (1 << (Swift3Parser.T__52 - 33)) | (1 << (Swift3Parser.T__54 - 33)) | (1 << (Swift3Parser.T__55 - 33)) | (1 << (Swift3Parser.T__56 - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Swift3Parser.T__64 - 65)) | (1 << (Swift3Parser.T__65 - 65)) | (1 << (Swift3Parser.T__66 - 65)) | (1 << (Swift3Parser.T__67 - 65)) | (1 << (Swift3Parser.T__68 - 65)) | (1 << (Swift3Parser.T__69 - 65)) | (1 << (Swift3Parser.T__70 - 65)) | (1 << (Swift3Parser.T__71 - 65)) | (1 << (Swift3Parser.T__74 - 65)) | (1 << (Swift3Parser.T__75 - 65)) | (1 << (Swift3Parser.T__76 - 65)) | (1 << (Swift3Parser.T__77 - 65)) | (1 << (Swift3Parser.T__78 - 65)) | (1 << (Swift3Parser.T__79 - 65)) | (1 << (Swift3Parser.T__80 - 65)) | (1 << (Swift3Parser.T__81 - 65)))) !== 0) || _la === Swift3Parser.AT) {
				{
				this.state = 1455;
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
		this.enterRule(_localctx, 244, Swift3Parser.RULE_raw_value_style_enum_member);
		try {
			this.state = 1461;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1458;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1459;
				this.raw_value_style_enum_case_clause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1460;
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
	public raw_value_style_enum_case_clause(): Raw_value_style_enum_case_clauseContext {
		let _localctx: Raw_value_style_enum_case_clauseContext = new Raw_value_style_enum_case_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, Swift3Parser.RULE_raw_value_style_enum_case_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1463;
				this.attributes();
				}
			}

			this.state = 1466;
			this.match(Swift3Parser.T__1);
			this.state = 1467;
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
		this.enterRule(_localctx, 248, Swift3Parser.RULE_raw_value_style_enum_case_list);
		try {
			this.state = 1474;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1469;
				this.raw_value_style_enum_case();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1470;
				this.raw_value_style_enum_case();
				this.state = 1471;
				this.match(Swift3Parser.COMMA);
				this.state = 1472;
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
		this.enterRule(_localctx, 250, Swift3Parser.RULE_raw_value_style_enum_case);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1476;
			this.enum_case_name();
			this.state = 1478;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 1477;
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
		this.enterRule(_localctx, 252, Swift3Parser.RULE_raw_value_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1480;
			this.assignment_operator();
			this.state = 1481;
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
		this.enterRule(_localctx, 254, Swift3Parser.RULE_raw_value_literal);
		try {
			this.state = 1486;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1483;
				this.numeric_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1484;
				this.match(Swift3Parser.Static_string_literal);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1485;
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
		this.enterRule(_localctx, 256, Swift3Parser.RULE_struct_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1488;
				this.attributes();
				}
			}

			this.state = 1492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (Swift3Parser.T__75 - 76)) | (1 << (Swift3Parser.T__76 - 76)) | (1 << (Swift3Parser.T__77 - 76)) | (1 << (Swift3Parser.T__78 - 76)) | (1 << (Swift3Parser.T__79 - 76)))) !== 0)) {
				{
				this.state = 1491;
				this.access_level_modifier();
				}
			}

			this.state = 1494;
			this.match(Swift3Parser.T__34);
			this.state = 1495;
			this.struct_name();
			this.state = 1497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.LT) {
				{
				this.state = 1496;
				this.generic_parameter_clause();
				}
			}

			this.state = 1500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.COLON) {
				{
				this.state = 1499;
				this.type_inheritance_clause();
				}
			}

			this.state = 1503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__12) {
				{
				this.state = 1502;
				this.generic_where_clause();
				}
			}

			this.state = 1505;
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
		this.enterRule(_localctx, 258, Swift3Parser.RULE_struct_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1507;
			this.declaration_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 260, Swift3Parser.RULE_struct_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1509;
			this.match(Swift3Parser.LCURLY);
			this.state = 1513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Swift3Parser.T__4) | (1 << Swift3Parser.T__5) | (1 << Swift3Parser.T__21) | (1 << Swift3Parser.T__28))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Swift3Parser.T__32 - 33)) | (1 << (Swift3Parser.T__33 - 33)) | (1 << (Swift3Parser.T__34 - 33)) | (1 << (Swift3Parser.T__35 - 33)) | (1 << (Swift3Parser.T__36 - 33)) | (1 << (Swift3Parser.T__37 - 33)) | (1 << (Swift3Parser.T__38 - 33)) | (1 << (Swift3Parser.T__45 - 33)) | (1 << (Swift3Parser.T__46 - 33)) | (1 << (Swift3Parser.T__48 - 33)) | (1 << (Swift3Parser.T__49 - 33)) | (1 << (Swift3Parser.T__50 - 33)) | (1 << (Swift3Parser.T__51 - 33)) | (1 << (Swift3Parser.T__52 - 33)) | (1 << (Swift3Parser.T__54 - 33)) | (1 << (Swift3Parser.T__55 - 33)) | (1 << (Swift3Parser.T__56 - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Swift3Parser.T__64 - 65)) | (1 << (Swift3Parser.T__65 - 65)) | (1 << (Swift3Parser.T__66 - 65)) | (1 << (Swift3Parser.T__67 - 65)) | (1 << (Swift3Parser.T__68 - 65)) | (1 << (Swift3Parser.T__69 - 65)) | (1 << (Swift3Parser.T__70 - 65)) | (1 << (Swift3Parser.T__71 - 65)) | (1 << (Swift3Parser.T__74 - 65)) | (1 << (Swift3Parser.T__75 - 65)) | (1 << (Swift3Parser.T__76 - 65)) | (1 << (Swift3Parser.T__77 - 65)) | (1 << (Swift3Parser.T__78 - 65)) | (1 << (Swift3Parser.T__79 - 65)) | (1 << (Swift3Parser.T__80 - 65)) | (1 << (Swift3Parser.T__81 - 65)))) !== 0) || _la === Swift3Parser.AT) {
				{
				{
				this.state = 1510;
				this.struct_member();
				}
				}
				this.state = 1515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1516;
			this.match(Swift3Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public struct_member(): Struct_memberContext {
		let _localctx: Struct_memberContext = new Struct_memberContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, Swift3Parser.RULE_struct_member);
		try {
			this.state = 1520;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__4:
			case Swift3Parser.T__5:
			case Swift3Parser.T__32:
			case Swift3Parser.T__33:
			case Swift3Parser.T__34:
			case Swift3Parser.T__35:
			case Swift3Parser.T__36:
			case Swift3Parser.T__37:
			case Swift3Parser.T__38:
			case Swift3Parser.T__45:
			case Swift3Parser.T__46:
			case Swift3Parser.T__48:
			case Swift3Parser.T__49:
			case Swift3Parser.T__50:
			case Swift3Parser.T__51:
			case Swift3Parser.T__52:
			case Swift3Parser.T__54:
			case Swift3Parser.T__55:
			case Swift3Parser.T__56:
			case Swift3Parser.T__64:
			case Swift3Parser.T__65:
			case Swift3Parser.T__66:
			case Swift3Parser.T__67:
			case Swift3Parser.T__68:
			case Swift3Parser.T__69:
			case Swift3Parser.T__70:
			case Swift3Parser.T__71:
			case Swift3Parser.T__74:
			case Swift3Parser.T__75:
			case Swift3Parser.T__76:
			case Swift3Parser.T__77:
			case Swift3Parser.T__78:
			case Swift3Parser.T__79:
			case Swift3Parser.T__80:
			case Swift3Parser.T__81:
			case Swift3Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1518;
				this.declaration();
				}
				break;
			case Swift3Parser.T__21:
			case Swift3Parser.T__28:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1519;
				this.compiler_control_statement();
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
	public class_declaration(): Class_declarationContext {
		let _localctx: Class_declarationContext = new Class_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, Swift3Parser.RULE_class_declaration);
		let _la: number;
		try {
			this.state = 1567;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.AT) {
					{
					this.state = 1522;
					this.attributes();
					}
				}

				this.state = 1526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (Swift3Parser.T__75 - 76)) | (1 << (Swift3Parser.T__76 - 76)) | (1 << (Swift3Parser.T__77 - 76)) | (1 << (Swift3Parser.T__78 - 76)) | (1 << (Swift3Parser.T__79 - 76)))) !== 0)) {
					{
					this.state = 1525;
					this.access_level_modifier();
					}
				}

				this.state = 1529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.T__46) {
					{
					this.state = 1528;
					this.match(Swift3Parser.T__46);
					}
				}

				this.state = 1531;
				this.match(Swift3Parser.T__35);
				this.state = 1532;
				this.class_name();
				this.state = 1534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.LT) {
					{
					this.state = 1533;
					this.generic_parameter_clause();
					}
				}

				this.state = 1537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.COLON) {
					{
					this.state = 1536;
					this.type_inheritance_clause();
					}
				}

				this.state = 1540;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.T__12) {
					{
					this.state = 1539;
					this.generic_where_clause();
					}
				}

				this.state = 1542;
				this.class_body();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.AT) {
					{
					this.state = 1544;
					this.attributes();
					}
				}

				this.state = 1548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (Swift3Parser.T__75 - 76)) | (1 << (Swift3Parser.T__76 - 76)) | (1 << (Swift3Parser.T__77 - 76)) | (1 << (Swift3Parser.T__78 - 76)) | (1 << (Swift3Parser.T__79 - 76)))) !== 0)) {
					{
					this.state = 1547;
					this.access_level_modifier();
					}
				}

				this.state = 1550;
				this.match(Swift3Parser.T__46);
				this.state = 1552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (Swift3Parser.T__75 - 76)) | (1 << (Swift3Parser.T__76 - 76)) | (1 << (Swift3Parser.T__77 - 76)) | (1 << (Swift3Parser.T__78 - 76)) | (1 << (Swift3Parser.T__79 - 76)))) !== 0)) {
					{
					this.state = 1551;
					this.access_level_modifier();
					}
				}

				this.state = 1554;
				this.match(Swift3Parser.T__35);
				this.state = 1555;
				this.class_name();
				this.state = 1557;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.LT) {
					{
					this.state = 1556;
					this.generic_parameter_clause();
					}
				}

				this.state = 1560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.COLON) {
					{
					this.state = 1559;
					this.type_inheritance_clause();
					}
				}

				this.state = 1563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.T__12) {
					{
					this.state = 1562;
					this.generic_where_clause();
					}
				}

				this.state = 1565;
				this.class_body();
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
	public class_name(): Class_nameContext {
		let _localctx: Class_nameContext = new Class_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, Swift3Parser.RULE_class_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1569;
			this.declaration_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 268, Swift3Parser.RULE_class_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1571;
			this.match(Swift3Parser.LCURLY);
			this.state = 1575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Swift3Parser.T__4) | (1 << Swift3Parser.T__5) | (1 << Swift3Parser.T__21) | (1 << Swift3Parser.T__28))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Swift3Parser.T__32 - 33)) | (1 << (Swift3Parser.T__33 - 33)) | (1 << (Swift3Parser.T__34 - 33)) | (1 << (Swift3Parser.T__35 - 33)) | (1 << (Swift3Parser.T__36 - 33)) | (1 << (Swift3Parser.T__37 - 33)) | (1 << (Swift3Parser.T__38 - 33)) | (1 << (Swift3Parser.T__45 - 33)) | (1 << (Swift3Parser.T__46 - 33)) | (1 << (Swift3Parser.T__48 - 33)) | (1 << (Swift3Parser.T__49 - 33)) | (1 << (Swift3Parser.T__50 - 33)) | (1 << (Swift3Parser.T__51 - 33)) | (1 << (Swift3Parser.T__52 - 33)) | (1 << (Swift3Parser.T__54 - 33)) | (1 << (Swift3Parser.T__55 - 33)) | (1 << (Swift3Parser.T__56 - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Swift3Parser.T__64 - 65)) | (1 << (Swift3Parser.T__65 - 65)) | (1 << (Swift3Parser.T__66 - 65)) | (1 << (Swift3Parser.T__67 - 65)) | (1 << (Swift3Parser.T__68 - 65)) | (1 << (Swift3Parser.T__69 - 65)) | (1 << (Swift3Parser.T__70 - 65)) | (1 << (Swift3Parser.T__71 - 65)) | (1 << (Swift3Parser.T__74 - 65)) | (1 << (Swift3Parser.T__75 - 65)) | (1 << (Swift3Parser.T__76 - 65)) | (1 << (Swift3Parser.T__77 - 65)) | (1 << (Swift3Parser.T__78 - 65)) | (1 << (Swift3Parser.T__79 - 65)) | (1 << (Swift3Parser.T__80 - 65)) | (1 << (Swift3Parser.T__81 - 65)))) !== 0) || _la === Swift3Parser.AT) {
				{
				{
				this.state = 1572;
				this.class_member();
				}
				}
				this.state = 1577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1578;
			this.match(Swift3Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public class_member(): Class_memberContext {
		let _localctx: Class_memberContext = new Class_memberContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, Swift3Parser.RULE_class_member);
		try {
			this.state = 1582;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__4:
			case Swift3Parser.T__5:
			case Swift3Parser.T__32:
			case Swift3Parser.T__33:
			case Swift3Parser.T__34:
			case Swift3Parser.T__35:
			case Swift3Parser.T__36:
			case Swift3Parser.T__37:
			case Swift3Parser.T__38:
			case Swift3Parser.T__45:
			case Swift3Parser.T__46:
			case Swift3Parser.T__48:
			case Swift3Parser.T__49:
			case Swift3Parser.T__50:
			case Swift3Parser.T__51:
			case Swift3Parser.T__52:
			case Swift3Parser.T__54:
			case Swift3Parser.T__55:
			case Swift3Parser.T__56:
			case Swift3Parser.T__64:
			case Swift3Parser.T__65:
			case Swift3Parser.T__66:
			case Swift3Parser.T__67:
			case Swift3Parser.T__68:
			case Swift3Parser.T__69:
			case Swift3Parser.T__70:
			case Swift3Parser.T__71:
			case Swift3Parser.T__74:
			case Swift3Parser.T__75:
			case Swift3Parser.T__76:
			case Swift3Parser.T__77:
			case Swift3Parser.T__78:
			case Swift3Parser.T__79:
			case Swift3Parser.T__80:
			case Swift3Parser.T__81:
			case Swift3Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1580;
				this.declaration();
				}
				break;
			case Swift3Parser.T__21:
			case Swift3Parser.T__28:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1581;
				this.compiler_control_statement();
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
	public protocol_declaration(): Protocol_declarationContext {
		let _localctx: Protocol_declarationContext = new Protocol_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, Swift3Parser.RULE_protocol_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1584;
				this.attributes();
				}
			}

			this.state = 1588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (Swift3Parser.T__75 - 76)) | (1 << (Swift3Parser.T__76 - 76)) | (1 << (Swift3Parser.T__77 - 76)) | (1 << (Swift3Parser.T__78 - 76)) | (1 << (Swift3Parser.T__79 - 76)))) !== 0)) {
				{
				this.state = 1587;
				this.access_level_modifier();
				}
			}

			this.state = 1590;
			this.match(Swift3Parser.T__37);
			this.state = 1591;
			this.protocol_name();
			this.state = 1593;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.COLON) {
				{
				this.state = 1592;
				this.type_inheritance_clause();
				}
			}

			this.state = 1595;
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
		this.enterRule(_localctx, 274, Swift3Parser.RULE_protocol_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1597;
			this.declaration_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 276, Swift3Parser.RULE_protocol_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1599;
			this.match(Swift3Parser.LCURLY);
			this.state = 1603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Swift3Parser.T__5) | (1 << Swift3Parser.T__21) | (1 << Swift3Parser.T__28))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Swift3Parser.T__33 - 34)) | (1 << (Swift3Parser.T__35 - 34)) | (1 << (Swift3Parser.T__38 - 34)) | (1 << (Swift3Parser.T__46 - 34)) | (1 << (Swift3Parser.T__47 - 34)) | (1 << (Swift3Parser.T__48 - 34)) | (1 << (Swift3Parser.T__51 - 34)) | (1 << (Swift3Parser.T__52 - 34)) | (1 << (Swift3Parser.T__54 - 34)) | (1 << (Swift3Parser.T__55 - 34)) | (1 << (Swift3Parser.T__64 - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (Swift3Parser.T__65 - 66)) | (1 << (Swift3Parser.T__66 - 66)) | (1 << (Swift3Parser.T__67 - 66)) | (1 << (Swift3Parser.T__68 - 66)) | (1 << (Swift3Parser.T__69 - 66)) | (1 << (Swift3Parser.T__70 - 66)) | (1 << (Swift3Parser.T__71 - 66)) | (1 << (Swift3Parser.T__74 - 66)) | (1 << (Swift3Parser.T__75 - 66)) | (1 << (Swift3Parser.T__76 - 66)) | (1 << (Swift3Parser.T__77 - 66)) | (1 << (Swift3Parser.T__78 - 66)) | (1 << (Swift3Parser.T__79 - 66)) | (1 << (Swift3Parser.T__80 - 66)) | (1 << (Swift3Parser.T__81 - 66)))) !== 0) || _la === Swift3Parser.AT) {
				{
				{
				this.state = 1600;
				this.protocol_member();
				}
				}
				this.state = 1605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1606;
			this.match(Swift3Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocol_member(): Protocol_memberContext {
		let _localctx: Protocol_memberContext = new Protocol_memberContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, Swift3Parser.RULE_protocol_member);
		try {
			this.state = 1610;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__5:
			case Swift3Parser.T__33:
			case Swift3Parser.T__35:
			case Swift3Parser.T__38:
			case Swift3Parser.T__46:
			case Swift3Parser.T__47:
			case Swift3Parser.T__48:
			case Swift3Parser.T__51:
			case Swift3Parser.T__52:
			case Swift3Parser.T__54:
			case Swift3Parser.T__55:
			case Swift3Parser.T__64:
			case Swift3Parser.T__65:
			case Swift3Parser.T__66:
			case Swift3Parser.T__67:
			case Swift3Parser.T__68:
			case Swift3Parser.T__69:
			case Swift3Parser.T__70:
			case Swift3Parser.T__71:
			case Swift3Parser.T__74:
			case Swift3Parser.T__75:
			case Swift3Parser.T__76:
			case Swift3Parser.T__77:
			case Swift3Parser.T__78:
			case Swift3Parser.T__79:
			case Swift3Parser.T__80:
			case Swift3Parser.T__81:
			case Swift3Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1608;
				this.protocol_member_declaration();
				}
				break;
			case Swift3Parser.T__21:
			case Swift3Parser.T__28:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1609;
				this.compiler_control_statement();
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
	public protocol_member_declaration(): Protocol_member_declarationContext {
		let _localctx: Protocol_member_declarationContext = new Protocol_member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, Swift3Parser.RULE_protocol_member_declaration);
		try {
			this.state = 1618;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1612;
				this.protocol_property_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1613;
				this.protocol_method_declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1614;
				this.protocol_initializer_declaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1615;
				this.protocol_subscript_declaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1616;
				this.protocol_associated_type_declaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1617;
				this.typealias_declaration();
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
	public protocol_property_declaration(): Protocol_property_declarationContext {
		let _localctx: Protocol_property_declarationContext = new Protocol_property_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, Swift3Parser.RULE_protocol_property_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1620;
			this.variable_declaration_head();
			this.state = 1621;
			this.variable_name();
			this.state = 1622;
			this.type_annotation();
			this.state = 1623;
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
		this.enterRule(_localctx, 284, Swift3Parser.RULE_protocol_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1625;
			this.function_head();
			this.state = 1626;
			this.function_name();
			this.state = 1628;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.LT) {
				{
				this.state = 1627;
				this.generic_parameter_clause();
				}
			}

			this.state = 1630;
			this.function_signature();
			this.state = 1632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__12) {
				{
				this.state = 1631;
				this.generic_where_clause();
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
	public protocol_initializer_declaration(): Protocol_initializer_declarationContext {
		let _localctx: Protocol_initializer_declarationContext = new Protocol_initializer_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, Swift3Parser.RULE_protocol_initializer_declaration);
		let _la: number;
		try {
			this.state = 1654;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1634;
				this.initializer_head();
				this.state = 1636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.LT) {
					{
					this.state = 1635;
					this.generic_parameter_clause();
					}
				}

				this.state = 1638;
				this.parameter_clause();
				this.state = 1640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.T__43) {
					{
					this.state = 1639;
					this.match(Swift3Parser.T__43);
					}
				}

				this.state = 1643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.T__12) {
					{
					this.state = 1642;
					this.generic_where_clause();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1645;
				this.initializer_head();
				this.state = 1647;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.LT) {
					{
					this.state = 1646;
					this.generic_parameter_clause();
					}
				}

				this.state = 1649;
				this.parameter_clause();
				this.state = 1650;
				this.match(Swift3Parser.T__44);
				this.state = 1652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.T__12) {
					{
					this.state = 1651;
					this.generic_where_clause();
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
	public protocol_subscript_declaration(): Protocol_subscript_declarationContext {
		let _localctx: Protocol_subscript_declarationContext = new Protocol_subscript_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, Swift3Parser.RULE_protocol_subscript_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1656;
			this.subscript_head();
			this.state = 1657;
			this.subscript_result();
			this.state = 1658;
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
		this.enterRule(_localctx, 290, Swift3Parser.RULE_protocol_associated_type_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1660;
				this.attributes();
				}
			}

			this.state = 1664;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (Swift3Parser.T__75 - 76)) | (1 << (Swift3Parser.T__76 - 76)) | (1 << (Swift3Parser.T__77 - 76)) | (1 << (Swift3Parser.T__78 - 76)) | (1 << (Swift3Parser.T__79 - 76)))) !== 0)) {
				{
				this.state = 1663;
				this.access_level_modifier();
				}
			}

			this.state = 1666;
			this.match(Swift3Parser.T__47);
			this.state = 1667;
			this.typealias_name();
			this.state = 1669;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
			case 1:
				{
				this.state = 1668;
				this.type_inheritance_clause();
				}
				break;
			}
			this.state = 1672;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
			case 1:
				{
				this.state = 1671;
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
		this.enterRule(_localctx, 292, Swift3Parser.RULE_initializer_declaration);
		let _la: number;
		try {
			this.state = 1698;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1674;
				this.initializer_head();
				this.state = 1676;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.LT) {
					{
					this.state = 1675;
					this.generic_parameter_clause();
					}
				}

				this.state = 1678;
				this.parameter_clause();
				this.state = 1680;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.T__43) {
					{
					this.state = 1679;
					this.match(Swift3Parser.T__43);
					}
				}

				this.state = 1683;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.T__12) {
					{
					this.state = 1682;
					this.generic_where_clause();
					}
				}

				this.state = 1685;
				this.initializer_body();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1687;
				this.initializer_head();
				this.state = 1689;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.LT) {
					{
					this.state = 1688;
					this.generic_parameter_clause();
					}
				}

				this.state = 1691;
				this.parameter_clause();
				this.state = 1692;
				this.match(Swift3Parser.T__44);
				this.state = 1694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.T__12) {
					{
					this.state = 1693;
					this.generic_where_clause();
					}
				}

				this.state = 1696;
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
		this.enterRule(_localctx, 294, Swift3Parser.RULE_initializer_head);
		let _la: number;
		try {
			this.state = 1723;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1701;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.AT) {
					{
					this.state = 1700;
					this.attributes();
					}
				}

				this.state = 1704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (Swift3Parser.T__35 - 36)) | (1 << (Swift3Parser.T__46 - 36)) | (1 << (Swift3Parser.T__52 - 36)) | (1 << (Swift3Parser.T__54 - 36)) | (1 << (Swift3Parser.T__55 - 36)) | (1 << (Swift3Parser.T__64 - 36)) | (1 << (Swift3Parser.T__65 - 36)) | (1 << (Swift3Parser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (Swift3Parser.T__67 - 68)) | (1 << (Swift3Parser.T__68 - 68)) | (1 << (Swift3Parser.T__69 - 68)) | (1 << (Swift3Parser.T__70 - 68)) | (1 << (Swift3Parser.T__71 - 68)) | (1 << (Swift3Parser.T__74 - 68)) | (1 << (Swift3Parser.T__75 - 68)) | (1 << (Swift3Parser.T__76 - 68)) | (1 << (Swift3Parser.T__77 - 68)) | (1 << (Swift3Parser.T__78 - 68)) | (1 << (Swift3Parser.T__79 - 68)) | (1 << (Swift3Parser.T__80 - 68)) | (1 << (Swift3Parser.T__81 - 68)))) !== 0)) {
					{
					this.state = 1703;
					this.declaration_modifiers();
					}
				}

				this.state = 1706;
				this.match(Swift3Parser.T__48);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1708;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.AT) {
					{
					this.state = 1707;
					this.attributes();
					}
				}

				this.state = 1711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (Swift3Parser.T__35 - 36)) | (1 << (Swift3Parser.T__46 - 36)) | (1 << (Swift3Parser.T__52 - 36)) | (1 << (Swift3Parser.T__54 - 36)) | (1 << (Swift3Parser.T__55 - 36)) | (1 << (Swift3Parser.T__64 - 36)) | (1 << (Swift3Parser.T__65 - 36)) | (1 << (Swift3Parser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (Swift3Parser.T__67 - 68)) | (1 << (Swift3Parser.T__68 - 68)) | (1 << (Swift3Parser.T__69 - 68)) | (1 << (Swift3Parser.T__70 - 68)) | (1 << (Swift3Parser.T__71 - 68)) | (1 << (Swift3Parser.T__74 - 68)) | (1 << (Swift3Parser.T__75 - 68)) | (1 << (Swift3Parser.T__76 - 68)) | (1 << (Swift3Parser.T__77 - 68)) | (1 << (Swift3Parser.T__78 - 68)) | (1 << (Swift3Parser.T__79 - 68)) | (1 << (Swift3Parser.T__80 - 68)) | (1 << (Swift3Parser.T__81 - 68)))) !== 0)) {
					{
					this.state = 1710;
					this.declaration_modifiers();
					}
				}

				this.state = 1713;
				this.match(Swift3Parser.T__48);
				this.state = 1714;
				this.match(Swift3Parser.QUESTION);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1716;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.AT) {
					{
					this.state = 1715;
					this.attributes();
					}
				}

				this.state = 1719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (Swift3Parser.T__35 - 36)) | (1 << (Swift3Parser.T__46 - 36)) | (1 << (Swift3Parser.T__52 - 36)) | (1 << (Swift3Parser.T__54 - 36)) | (1 << (Swift3Parser.T__55 - 36)) | (1 << (Swift3Parser.T__64 - 36)) | (1 << (Swift3Parser.T__65 - 36)) | (1 << (Swift3Parser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (Swift3Parser.T__67 - 68)) | (1 << (Swift3Parser.T__68 - 68)) | (1 << (Swift3Parser.T__69 - 68)) | (1 << (Swift3Parser.T__70 - 68)) | (1 << (Swift3Parser.T__71 - 68)) | (1 << (Swift3Parser.T__74 - 68)) | (1 << (Swift3Parser.T__75 - 68)) | (1 << (Swift3Parser.T__76 - 68)) | (1 << (Swift3Parser.T__77 - 68)) | (1 << (Swift3Parser.T__78 - 68)) | (1 << (Swift3Parser.T__79 - 68)) | (1 << (Swift3Parser.T__80 - 68)) | (1 << (Swift3Parser.T__81 - 68)))) !== 0)) {
					{
					this.state = 1718;
					this.declaration_modifiers();
					}
				}

				this.state = 1721;
				this.match(Swift3Parser.T__48);
				this.state = 1722;
				this.match(Swift3Parser.BANG);
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
		this.enterRule(_localctx, 296, Swift3Parser.RULE_initializer_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1725;
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
		this.enterRule(_localctx, 298, Swift3Parser.RULE_deinitializer_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1727;
				this.attributes();
				}
			}

			this.state = 1730;
			this.match(Swift3Parser.T__49);
			this.state = 1731;
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
		this.enterRule(_localctx, 300, Swift3Parser.RULE_extension_declaration);
		let _la: number;
		try {
			this.state = 1757;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 204, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.AT) {
					{
					this.state = 1733;
					this.attributes();
					}
				}

				this.state = 1737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (Swift3Parser.T__75 - 76)) | (1 << (Swift3Parser.T__76 - 76)) | (1 << (Swift3Parser.T__77 - 76)) | (1 << (Swift3Parser.T__78 - 76)) | (1 << (Swift3Parser.T__79 - 76)))) !== 0)) {
					{
					this.state = 1736;
					this.access_level_modifier();
					}
				}

				this.state = 1739;
				this.match(Swift3Parser.T__50);
				this.state = 1740;
				this.type_identifier();
				this.state = 1742;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.COLON) {
					{
					this.state = 1741;
					this.type_inheritance_clause();
					}
				}

				this.state = 1744;
				this.extension_body();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1747;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.AT) {
					{
					this.state = 1746;
					this.attributes();
					}
				}

				this.state = 1750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (Swift3Parser.T__75 - 76)) | (1 << (Swift3Parser.T__76 - 76)) | (1 << (Swift3Parser.T__77 - 76)) | (1 << (Swift3Parser.T__78 - 76)) | (1 << (Swift3Parser.T__79 - 76)))) !== 0)) {
					{
					this.state = 1749;
					this.access_level_modifier();
					}
				}

				this.state = 1752;
				this.match(Swift3Parser.T__50);
				this.state = 1753;
				this.type_identifier();
				this.state = 1754;
				this.generic_where_clause();
				this.state = 1755;
				this.extension_body();
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
	public extension_body(): Extension_bodyContext {
		let _localctx: Extension_bodyContext = new Extension_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, Swift3Parser.RULE_extension_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1759;
			this.match(Swift3Parser.LCURLY);
			this.state = 1763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Swift3Parser.T__4) | (1 << Swift3Parser.T__5) | (1 << Swift3Parser.T__21) | (1 << Swift3Parser.T__28))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Swift3Parser.T__32 - 33)) | (1 << (Swift3Parser.T__33 - 33)) | (1 << (Swift3Parser.T__34 - 33)) | (1 << (Swift3Parser.T__35 - 33)) | (1 << (Swift3Parser.T__36 - 33)) | (1 << (Swift3Parser.T__37 - 33)) | (1 << (Swift3Parser.T__38 - 33)) | (1 << (Swift3Parser.T__45 - 33)) | (1 << (Swift3Parser.T__46 - 33)) | (1 << (Swift3Parser.T__48 - 33)) | (1 << (Swift3Parser.T__49 - 33)) | (1 << (Swift3Parser.T__50 - 33)) | (1 << (Swift3Parser.T__51 - 33)) | (1 << (Swift3Parser.T__52 - 33)) | (1 << (Swift3Parser.T__54 - 33)) | (1 << (Swift3Parser.T__55 - 33)) | (1 << (Swift3Parser.T__56 - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Swift3Parser.T__64 - 65)) | (1 << (Swift3Parser.T__65 - 65)) | (1 << (Swift3Parser.T__66 - 65)) | (1 << (Swift3Parser.T__67 - 65)) | (1 << (Swift3Parser.T__68 - 65)) | (1 << (Swift3Parser.T__69 - 65)) | (1 << (Swift3Parser.T__70 - 65)) | (1 << (Swift3Parser.T__71 - 65)) | (1 << (Swift3Parser.T__74 - 65)) | (1 << (Swift3Parser.T__75 - 65)) | (1 << (Swift3Parser.T__76 - 65)) | (1 << (Swift3Parser.T__77 - 65)) | (1 << (Swift3Parser.T__78 - 65)) | (1 << (Swift3Parser.T__79 - 65)) | (1 << (Swift3Parser.T__80 - 65)) | (1 << (Swift3Parser.T__81 - 65)))) !== 0) || _la === Swift3Parser.AT) {
				{
				{
				this.state = 1760;
				this.extension_member();
				}
				}
				this.state = 1765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1766;
			this.match(Swift3Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extension_member(): Extension_memberContext {
		let _localctx: Extension_memberContext = new Extension_memberContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, Swift3Parser.RULE_extension_member);
		try {
			this.state = 1770;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__4:
			case Swift3Parser.T__5:
			case Swift3Parser.T__32:
			case Swift3Parser.T__33:
			case Swift3Parser.T__34:
			case Swift3Parser.T__35:
			case Swift3Parser.T__36:
			case Swift3Parser.T__37:
			case Swift3Parser.T__38:
			case Swift3Parser.T__45:
			case Swift3Parser.T__46:
			case Swift3Parser.T__48:
			case Swift3Parser.T__49:
			case Swift3Parser.T__50:
			case Swift3Parser.T__51:
			case Swift3Parser.T__52:
			case Swift3Parser.T__54:
			case Swift3Parser.T__55:
			case Swift3Parser.T__56:
			case Swift3Parser.T__64:
			case Swift3Parser.T__65:
			case Swift3Parser.T__66:
			case Swift3Parser.T__67:
			case Swift3Parser.T__68:
			case Swift3Parser.T__69:
			case Swift3Parser.T__70:
			case Swift3Parser.T__71:
			case Swift3Parser.T__74:
			case Swift3Parser.T__75:
			case Swift3Parser.T__76:
			case Swift3Parser.T__77:
			case Swift3Parser.T__78:
			case Swift3Parser.T__79:
			case Swift3Parser.T__80:
			case Swift3Parser.T__81:
			case Swift3Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1768;
				this.declaration();
				}
				break;
			case Swift3Parser.T__21:
			case Swift3Parser.T__28:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1769;
				this.compiler_control_statement();
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
	public subscript_declaration(): Subscript_declarationContext {
		let _localctx: Subscript_declarationContext = new Subscript_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, Swift3Parser.RULE_subscript_declaration);
		try {
			this.state = 1784;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 207, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1772;
				this.subscript_head();
				this.state = 1773;
				this.subscript_result();
				this.state = 1774;
				this.code_block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1776;
				this.subscript_head();
				this.state = 1777;
				this.subscript_result();
				this.state = 1778;
				this.getter_setter_block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1780;
				this.subscript_head();
				this.state = 1781;
				this.subscript_result();
				this.state = 1782;
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
		this.enterRule(_localctx, 308, Swift3Parser.RULE_subscript_head);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1787;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.AT) {
				{
				this.state = 1786;
				this.attributes();
				}
			}

			this.state = 1790;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (Swift3Parser.T__35 - 36)) | (1 << (Swift3Parser.T__46 - 36)) | (1 << (Swift3Parser.T__52 - 36)) | (1 << (Swift3Parser.T__54 - 36)) | (1 << (Swift3Parser.T__55 - 36)) | (1 << (Swift3Parser.T__64 - 36)) | (1 << (Swift3Parser.T__65 - 36)) | (1 << (Swift3Parser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (Swift3Parser.T__67 - 68)) | (1 << (Swift3Parser.T__68 - 68)) | (1 << (Swift3Parser.T__69 - 68)) | (1 << (Swift3Parser.T__70 - 68)) | (1 << (Swift3Parser.T__71 - 68)) | (1 << (Swift3Parser.T__74 - 68)) | (1 << (Swift3Parser.T__75 - 68)) | (1 << (Swift3Parser.T__76 - 68)) | (1 << (Swift3Parser.T__77 - 68)) | (1 << (Swift3Parser.T__78 - 68)) | (1 << (Swift3Parser.T__79 - 68)) | (1 << (Swift3Parser.T__80 - 68)) | (1 << (Swift3Parser.T__81 - 68)))) !== 0)) {
				{
				this.state = 1789;
				this.declaration_modifiers();
				}
			}

			this.state = 1792;
			this.match(Swift3Parser.T__51);
			this.state = 1793;
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
		this.enterRule(_localctx, 310, Swift3Parser.RULE_subscript_result);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1795;
			this.arrow_operator();
			this.state = 1797;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 210, this._ctx) ) {
			case 1:
				{
				this.state = 1796;
				this.attributes();
				}
				break;
			}
			this.state = 1799;
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
		this.enterRule(_localctx, 312, Swift3Parser.RULE_operator_declaration);
		try {
			this.state = 1804;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__52:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1801;
				this.prefix_operator_declaration();
				}
				break;
			case Swift3Parser.T__54:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1802;
				this.postfix_operator_declaration();
				}
				break;
			case Swift3Parser.T__55:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1803;
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
		this.enterRule(_localctx, 314, Swift3Parser.RULE_prefix_operator_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1806;
			this.match(Swift3Parser.T__52);
			this.state = 1807;
			this.match(Swift3Parser.T__53);
			this.state = 1808;
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
	public postfix_operator_declaration(): Postfix_operator_declarationContext {
		let _localctx: Postfix_operator_declarationContext = new Postfix_operator_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, Swift3Parser.RULE_postfix_operator_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1810;
			this.match(Swift3Parser.T__54);
			this.state = 1811;
			this.match(Swift3Parser.T__53);
			this.state = 1812;
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
	public infix_operator_declaration(): Infix_operator_declarationContext {
		let _localctx: Infix_operator_declarationContext = new Infix_operator_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, Swift3Parser.RULE_infix_operator_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1814;
			this.match(Swift3Parser.T__55);
			this.state = 1815;
			this.match(Swift3Parser.T__53);
			this.state = 1816;
			this.operator();
			this.state = 1818;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 212, this._ctx) ) {
			case 1:
				{
				this.state = 1817;
				this.infix_operator_group();
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
	public infix_operator_group(): Infix_operator_groupContext {
		let _localctx: Infix_operator_groupContext = new Infix_operator_groupContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, Swift3Parser.RULE_infix_operator_group);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1820;
			this.match(Swift3Parser.COLON);
			this.state = 1821;
			this.precedence_group_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public precedence_group_declaration(): Precedence_group_declarationContext {
		let _localctx: Precedence_group_declarationContext = new Precedence_group_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, Swift3Parser.RULE_precedence_group_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1823;
			this.match(Swift3Parser.T__56);
			this.state = 1824;
			this.precedence_group_name();
			this.state = 1825;
			this.match(Swift3Parser.LCURLY);
			this.state = 1829;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (Swift3Parser.T__57 - 58)) | (1 << (Swift3Parser.T__58 - 58)) | (1 << (Swift3Parser.T__59 - 58)) | (1 << (Swift3Parser.T__60 - 58)))) !== 0)) {
				{
				{
				this.state = 1826;
				this.precedence_group_attribute();
				}
				}
				this.state = 1831;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1832;
			this.match(Swift3Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public precedence_group_attribute(): Precedence_group_attributeContext {
		let _localctx: Precedence_group_attributeContext = new Precedence_group_attributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, Swift3Parser.RULE_precedence_group_attribute);
		try {
			this.state = 1837;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__57:
			case Swift3Parser.T__58:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1834;
				this.precedence_group_relation();
				}
				break;
			case Swift3Parser.T__59:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1835;
				this.precedence_group_assignment();
				}
				break;
			case Swift3Parser.T__60:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1836;
				this.precedence_group_associativity();
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
	public precedence_group_relation(): Precedence_group_relationContext {
		let _localctx: Precedence_group_relationContext = new Precedence_group_relationContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, Swift3Parser.RULE_precedence_group_relation);
		try {
			this.state = 1845;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__57:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1839;
				this.match(Swift3Parser.T__57);
				this.state = 1840;
				this.match(Swift3Parser.COLON);
				this.state = 1841;
				this.precedence_group_names();
				}
				break;
			case Swift3Parser.T__58:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1842;
				this.match(Swift3Parser.T__58);
				this.state = 1843;
				this.match(Swift3Parser.COLON);
				this.state = 1844;
				this.precedence_group_names();
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
	public precedence_group_assignment(): Precedence_group_assignmentContext {
		let _localctx: Precedence_group_assignmentContext = new Precedence_group_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, Swift3Parser.RULE_precedence_group_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1847;
			this.match(Swift3Parser.T__59);
			this.state = 1848;
			this.match(Swift3Parser.COLON);
			this.state = 1849;
			this.boolean_literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public precedence_group_associativity(): Precedence_group_associativityContext {
		let _localctx: Precedence_group_associativityContext = new Precedence_group_associativityContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, Swift3Parser.RULE_precedence_group_associativity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1851;
			this.match(Swift3Parser.T__60);
			this.state = 1852;
			this.match(Swift3Parser.COLON);
			this.state = 1853;
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
		this.enterRule(_localctx, 332, Swift3Parser.RULE_associativity);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1855;
			_la = this._input.LA(1);
			if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (Swift3Parser.T__61 - 62)) | (1 << (Swift3Parser.T__62 - 62)) | (1 << (Swift3Parser.T__63 - 62)))) !== 0))) {
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
	public precedence_group_names(): Precedence_group_namesContext {
		let _localctx: Precedence_group_namesContext = new Precedence_group_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, Swift3Parser.RULE_precedence_group_names);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1857;
			this.precedence_group_name();
			this.state = 1862;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift3Parser.COMMA) {
				{
				{
				this.state = 1858;
				this.match(Swift3Parser.COMMA);
				this.state = 1859;
				this.precedence_group_name();
				}
				}
				this.state = 1864;
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
	public precedence_group_name(): Precedence_group_nameContext {
		let _localctx: Precedence_group_nameContext = new Precedence_group_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, Swift3Parser.RULE_precedence_group_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1865;
			this.declaration_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 338, Swift3Parser.RULE_declaration_modifier);
		try {
			this.state = 1891;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1867;
				this.match(Swift3Parser.T__35);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1868;
				this.match(Swift3Parser.T__64);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1869;
				this.match(Swift3Parser.T__65);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1870;
				this.match(Swift3Parser.T__46);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1871;
				this.match(Swift3Parser.T__55);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1872;
				this.match(Swift3Parser.T__66);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1873;
				this.match(Swift3Parser.T__67);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1874;
				this.match(Swift3Parser.T__68);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1875;
				this.match(Swift3Parser.T__54);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1876;
				this.match(Swift3Parser.T__52);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1877;
				this.match(Swift3Parser.T__69);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1878;
				this.match(Swift3Parser.T__70);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1879;
				this.match(Swift3Parser.T__71);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1880;
				this.match(Swift3Parser.T__71);
				this.state = 1881;
				this.match(Swift3Parser.LPAREN);
				this.state = 1882;
				this.match(Swift3Parser.T__72);
				this.state = 1883;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1884;
				this.match(Swift3Parser.T__71);
				this.state = 1885;
				this.match(Swift3Parser.LPAREN);
				this.state = 1886;
				this.match(Swift3Parser.T__73);
				this.state = 1887;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1888;
				this.match(Swift3Parser.T__74);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1889;
				this.access_level_modifier();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1890;
				this.mutation_modifier();
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
		this.enterRule(_localctx, 340, Swift3Parser.RULE_declaration_modifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1894;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1893;
				this.declaration_modifier();
				}
				}
				this.state = 1896;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (Swift3Parser.T__35 - 36)) | (1 << (Swift3Parser.T__46 - 36)) | (1 << (Swift3Parser.T__52 - 36)) | (1 << (Swift3Parser.T__54 - 36)) | (1 << (Swift3Parser.T__55 - 36)) | (1 << (Swift3Parser.T__64 - 36)) | (1 << (Swift3Parser.T__65 - 36)) | (1 << (Swift3Parser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (Swift3Parser.T__67 - 68)) | (1 << (Swift3Parser.T__68 - 68)) | (1 << (Swift3Parser.T__69 - 68)) | (1 << (Swift3Parser.T__70 - 68)) | (1 << (Swift3Parser.T__71 - 68)) | (1 << (Swift3Parser.T__74 - 68)) | (1 << (Swift3Parser.T__75 - 68)) | (1 << (Swift3Parser.T__76 - 68)) | (1 << (Swift3Parser.T__77 - 68)) | (1 << (Swift3Parser.T__78 - 68)) | (1 << (Swift3Parser.T__79 - 68)) | (1 << (Swift3Parser.T__80 - 68)) | (1 << (Swift3Parser.T__81 - 68)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 342, Swift3Parser.RULE_access_level_modifier);
		try {
			this.state = 1923;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1898;
				this.match(Swift3Parser.T__75);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1899;
				this.match(Swift3Parser.T__75);
				this.state = 1900;
				this.match(Swift3Parser.LPAREN);
				this.state = 1901;
				this.match(Swift3Parser.T__40);
				this.state = 1902;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1903;
				this.match(Swift3Parser.T__76);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1904;
				this.match(Swift3Parser.T__76);
				this.state = 1905;
				this.match(Swift3Parser.LPAREN);
				this.state = 1906;
				this.match(Swift3Parser.T__40);
				this.state = 1907;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1908;
				this.match(Swift3Parser.T__77);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1909;
				this.match(Swift3Parser.T__77);
				this.state = 1910;
				this.match(Swift3Parser.LPAREN);
				this.state = 1911;
				this.match(Swift3Parser.T__40);
				this.state = 1912;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1913;
				this.match(Swift3Parser.T__78);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1914;
				this.match(Swift3Parser.T__78);
				this.state = 1915;
				this.match(Swift3Parser.LPAREN);
				this.state = 1916;
				this.match(Swift3Parser.T__40);
				this.state = 1917;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1918;
				this.match(Swift3Parser.T__79);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1919;
				this.match(Swift3Parser.T__79);
				this.state = 1920;
				this.match(Swift3Parser.LPAREN);
				this.state = 1921;
				this.match(Swift3Parser.T__40);
				this.state = 1922;
				this.match(Swift3Parser.RPAREN);
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
	public mutation_modifier(): Mutation_modifierContext {
		let _localctx: Mutation_modifierContext = new Mutation_modifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, Swift3Parser.RULE_mutation_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1925;
			_la = this._input.LA(1);
			if (!(_la === Swift3Parser.T__80 || _la === Swift3Parser.T__81)) {
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
		let _startState: number = 346;
		this.enterRecursionRule(_localctx, 346, Swift3Parser.RULE_pattern, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1946;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 223, this._ctx) ) {
			case 1:
				{
				this.state = 1928;
				this.wildcard_pattern();
				this.state = 1930;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 220, this._ctx) ) {
				case 1:
					{
					this.state = 1929;
					this.type_annotation();
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 1932;
				this.identifier_pattern();
				this.state = 1934;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 221, this._ctx) ) {
				case 1:
					{
					this.state = 1933;
					this.type_annotation();
					}
					break;
				}
				}
				break;

			case 3:
				{
				this.state = 1936;
				this.value_binding_pattern();
				}
				break;

			case 4:
				{
				this.state = 1937;
				this.tuple_pattern();
				this.state = 1939;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 222, this._ctx) ) {
				case 1:
					{
					this.state = 1938;
					this.type_annotation();
					}
					break;
				}
				}
				break;

			case 5:
				{
				this.state = 1941;
				this.enum_case_pattern();
				}
				break;

			case 6:
				{
				this.state = 1942;
				this.optional_pattern();
				}
				break;

			case 7:
				{
				this.state = 1943;
				this.match(Swift3Parser.T__82);
				this.state = 1944;
				this.type(0);
				}
				break;

			case 8:
				{
				this.state = 1945;
				this.expression_pattern();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1953;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PatternContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_pattern);
					this.state = 1948;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 1949;
					this.match(Swift3Parser.T__83);
					this.state = 1950;
					this.type(0);
					}
					}
				}
				this.state = 1955;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
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
		this.enterRule(_localctx, 348, Swift3Parser.RULE_wildcard_pattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1956;
			this.match(Swift3Parser.UNDERSCORE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 350, Swift3Parser.RULE_identifier_pattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1958;
			this.declaration_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 352, Swift3Parser.RULE_value_binding_pattern);
		try {
			this.state = 1964;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__5:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1960;
				this.match(Swift3Parser.T__5);
				this.state = 1961;
				this.pattern(0);
				}
				break;
			case Swift3Parser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1962;
				this.match(Swift3Parser.T__4);
				this.state = 1963;
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
		this.enterRule(_localctx, 354, Swift3Parser.RULE_tuple_pattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1966;
			this.match(Swift3Parser.LPAREN);
			this.state = 1968;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 226, this._ctx) ) {
			case 1:
				{
				this.state = 1967;
				this.tuple_pattern_element_list();
				}
				break;
			}
			this.state = 1970;
			this.match(Swift3Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 356, Swift3Parser.RULE_tuple_pattern_element_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1972;
			this.tuple_pattern_element();
			this.state = 1977;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift3Parser.COMMA) {
				{
				{
				this.state = 1973;
				this.match(Swift3Parser.COMMA);
				this.state = 1974;
				this.tuple_pattern_element();
				}
				}
				this.state = 1979;
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
		this.enterRule(_localctx, 358, Swift3Parser.RULE_tuple_pattern_element);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1980;
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
		this.enterRule(_localctx, 360, Swift3Parser.RULE_enum_case_pattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1983;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Swift3Parser.T__25) | (1 << Swift3Parser.T__26) | (1 << Swift3Parser.T__27) | (1 << Swift3Parser.T__29) | (1 << Swift3Parser.T__30))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (Swift3Parser.T__39 - 40)) | (1 << (Swift3Parser.T__40 - 40)) | (1 << (Swift3Parser.T__41 - 40)) | (1 << (Swift3Parser.T__42 - 40)) | (1 << (Swift3Parser.T__45 - 40)) | (1 << (Swift3Parser.T__46 - 40)) | (1 << (Swift3Parser.T__52 - 40)) | (1 << (Swift3Parser.T__54 - 40)) | (1 << (Swift3Parser.T__55 - 40)) | (1 << (Swift3Parser.T__57 - 40)) | (1 << (Swift3Parser.T__58 - 40)) | (1 << (Swift3Parser.T__59 - 40)) | (1 << (Swift3Parser.T__60 - 40)) | (1 << (Swift3Parser.T__61 - 40)) | (1 << (Swift3Parser.T__62 - 40)) | (1 << (Swift3Parser.T__63 - 40)) | (1 << (Swift3Parser.T__64 - 40)) | (1 << (Swift3Parser.T__65 - 40)) | (1 << (Swift3Parser.T__66 - 40)) | (1 << (Swift3Parser.T__67 - 40)) | (1 << (Swift3Parser.T__68 - 40)) | (1 << (Swift3Parser.T__69 - 40)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (Swift3Parser.T__71 - 72)) | (1 << (Swift3Parser.T__72 - 72)) | (1 << (Swift3Parser.T__73 - 72)) | (1 << (Swift3Parser.T__74 - 72)) | (1 << (Swift3Parser.T__79 - 72)) | (1 << (Swift3Parser.T__80 - 72)) | (1 << (Swift3Parser.T__81 - 72)) | (1 << (Swift3Parser.T__93 - 72)) | (1 << (Swift3Parser.T__94 - 72)) | (1 << (Swift3Parser.T__95 - 72)) | (1 << (Swift3Parser.T__96 - 72)) | (1 << (Swift3Parser.T__98 - 72)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (Swift3Parser.T__109 - 110)) | (1 << (Swift3Parser.T__110 - 110)) | (1 << (Swift3Parser.T__111 - 110)) | (1 << (Swift3Parser.T__112 - 110)) | (1 << (Swift3Parser.T__115 - 110)) | (1 << (Swift3Parser.T__116 - 110)) | (1 << (Swift3Parser.T__117 - 110)) | (1 << (Swift3Parser.T__118 - 110)) | (1 << (Swift3Parser.T__119 - 110)) | (1 << (Swift3Parser.T__120 - 110)) | (1 << (Swift3Parser.T__121 - 110)) | (1 << (Swift3Parser.T__122 - 110)) | (1 << (Swift3Parser.T__123 - 110)) | (1 << (Swift3Parser.T__124 - 110)) | (1 << (Swift3Parser.T__125 - 110)) | (1 << (Swift3Parser.Identifier - 110)))) !== 0)) {
				{
				this.state = 1982;
				this.type_identifier();
				}
			}

			this.state = 1985;
			this.match(Swift3Parser.DOT);
			this.state = 1986;
			this.enum_case_name();
			this.state = 1988;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 229, this._ctx) ) {
			case 1:
				{
				this.state = 1987;
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
		this.enterRule(_localctx, 362, Swift3Parser.RULE_optional_pattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1990;
			this.identifier_pattern();
			this.state = 1991;
			this.match(Swift3Parser.QUESTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 364, Swift3Parser.RULE_expression_pattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
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
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, Swift3Parser.RULE_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1995;
			this.match(Swift3Parser.AT);
			this.state = 1996;
			this.attribute_name();
			this.state = 1998;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				{
				this.state = 1997;
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
		this.enterRule(_localctx, 368, Swift3Parser.RULE_attribute_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2000;
			this.declaration_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 370, Swift3Parser.RULE_attribute_argument_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2002;
			this.match(Swift3Parser.LPAREN);
			this.state = 2003;
			this.balanced_tokens();
			this.state = 2004;
			this.match(Swift3Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 372, Swift3Parser.RULE_attributes);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2007;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2006;
					this.attribute();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2009;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
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
		this.enterRule(_localctx, 374, Swift3Parser.RULE_balanced_tokens);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2014;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2011;
					this.balanced_token();
					}
					}
				}
				this.state = 2016;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
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
	public balanced_token(): Balanced_tokenContext {
		let _localctx: Balanced_tokenContext = new Balanced_tokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, Swift3Parser.RULE_balanced_token);
		try {
			this.state = 2034;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2017;
				this.match(Swift3Parser.LPAREN);
				this.state = 2018;
				this.balanced_tokens();
				this.state = 2019;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2021;
				this.match(Swift3Parser.LBRACK);
				this.state = 2022;
				this.balanced_tokens();
				this.state = 2023;
				this.match(Swift3Parser.RBRACK);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2025;
				this.match(Swift3Parser.LCURLY);
				this.state = 2026;
				this.balanced_tokens();
				this.state = 2027;
				this.match(Swift3Parser.RCURLY);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2029;
				this.label_identifier();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2030;
				this.literal();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2031;
				this.operator();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2032;
				this.match(Swift3Parser.Platform_name_platform_version);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2033;
				this.any_punctuation_for_balanced_token();
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
	public any_punctuation_for_balanced_token(): Any_punctuation_for_balanced_tokenContext {
		let _localctx: Any_punctuation_for_balanced_tokenContext = new Any_punctuation_for_balanced_tokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, Swift3Parser.RULE_any_punctuation_for_balanced_token);
		let _la: number;
		try {
			this.state = 2042;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 234, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2036;
				_la = this._input.LA(1);
				if (!(_la === Swift3Parser.T__84 || _la === Swift3Parser.T__85 || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (Swift3Parser.DOT - 132)) | (1 << (Swift3Parser.COMMA - 132)) | (1 << (Swift3Parser.COLON - 132)) | (1 << (Swift3Parser.SEMI - 132)) | (1 << (Swift3Parser.QUESTION - 132)) | (1 << (Swift3Parser.AT - 132)) | (1 << (Swift3Parser.EQUAL - 132)))) !== 0))) {
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

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2037;
				this.arrow_operator();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2038;
				if (!(SwiftSupport.isPrefixOp(_input))) {
					throw new FailedPredicateException(this, "SwiftSupport.isPrefixOp(_input)");
				}
				this.state = 2039;
				this.match(Swift3Parser.AND);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2040;
				if (!(SwiftSupport.isPostfixOp(_input))) {
					throw new FailedPredicateException(this, "SwiftSupport.isPostfixOp(_input)");
				}
				this.state = 2041;
				this.match(Swift3Parser.BANG);
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
		this.enterRule(_localctx, 380, Swift3Parser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2045;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 235, this._ctx) ) {
			case 1:
				{
				this.state = 2044;
				this.try_operator();
				}
				break;
			}
			this.state = 2047;
			this.prefix_expression();
			this.state = 2049;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 236, this._ctx) ) {
			case 1:
				{
				this.state = 2048;
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
		this.enterRule(_localctx, 382, Swift3Parser.RULE_expression_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2051;
			this.expression();
			this.state = 2056;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift3Parser.COMMA) {
				{
				{
				this.state = 2052;
				this.match(Swift3Parser.COMMA);
				this.state = 2053;
				this.expression();
				}
				}
				this.state = 2058;
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
		this.enterRule(_localctx, 384, Swift3Parser.RULE_prefix_expression);
		try {
			this.state = 2064;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2059;
				this.prefix_operator();
				this.state = 2060;
				this.postfix_expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2062;
				this.postfix_expression(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2063;
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
		this.enterRule(_localctx, 386, Swift3Parser.RULE_in_out_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2066;
			this.match(Swift3Parser.AND);
			this.state = 2067;
			this.declaration_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 388, Swift3Parser.RULE_try_operator);
		try {
			this.state = 2074;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2069;
				this.match(Swift3Parser.T__86);
				this.state = 2070;
				this.match(Swift3Parser.QUESTION);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2071;
				this.match(Swift3Parser.T__86);
				this.state = 2072;
				this.match(Swift3Parser.BANG);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2073;
				this.match(Swift3Parser.T__86);
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
		this.enterRule(_localctx, 390, Swift3Parser.RULE_binary_expression);
		try {
			this.state = 2092;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2076;
				this.binary_operator();
				this.state = 2077;
				this.prefix_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2079;
				this.assignment_operator();
				this.state = 2081;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
				case 1:
					{
					this.state = 2080;
					this.try_operator();
					}
					break;
				}
				this.state = 2083;
				this.prefix_expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2085;
				this.conditional_operator();
				this.state = 2087;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
				case 1:
					{
					this.state = 2086;
					this.try_operator();
					}
					break;
				}
				this.state = 2089;
				this.prefix_expression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2091;
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
		this.enterRule(_localctx, 392, Swift3Parser.RULE_binary_expressions);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2095;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2094;
					this.binary_expression();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2097;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 243, this._ctx);
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
		this.enterRule(_localctx, 394, Swift3Parser.RULE_conditional_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2099;
			this.match(Swift3Parser.QUESTION);
			this.state = 2101;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				{
				this.state = 2100;
				this.try_operator();
				}
				break;
			}
			this.state = 2103;
			this.expression();
			this.state = 2104;
			this.match(Swift3Parser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 396, Swift3Parser.RULE_type_casting_operator);
		try {
			this.state = 2116;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 245, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2106;
				this.match(Swift3Parser.T__82);
				this.state = 2107;
				this.type(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2108;
				this.match(Swift3Parser.T__83);
				this.state = 2109;
				this.type(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2110;
				this.match(Swift3Parser.T__83);
				this.state = 2111;
				this.match(Swift3Parser.QUESTION);
				this.state = 2112;
				this.type(0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2113;
				this.match(Swift3Parser.T__83);
				this.state = 2114;
				this.match(Swift3Parser.BANG);
				this.state = 2115;
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
		this.enterRule(_localctx, 398, Swift3Parser.RULE_primary_expression);
		try {
			this.state = 2132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 247, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2118;
				this.declaration_identifier();
				this.state = 2120;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 246, this._ctx) ) {
				case 1:
					{
					this.state = 2119;
					this.generic_argument_clause();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2122;
				this.literal_expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2123;
				this.self_expression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2124;
				this.superclass_expression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2125;
				this.closure_expression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2126;
				this.parenthesized_expression();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2127;
				this.tuple_expression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2128;
				this.implicit_member_expression();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2129;
				this.wildcard_expression();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2130;
				this.selector_expression();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2131;
				this.key_path_expression();
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
	public literal_expression(): Literal_expressionContext {
		let _localctx: Literal_expressionContext = new Literal_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, Swift3Parser.RULE_literal_expression);
		try {
			this.state = 2142;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 248, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2134;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2135;
				this.array_literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2136;
				this.dictionary_literal();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2137;
				this.match(Swift3Parser.T__87);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2138;
				this.match(Swift3Parser.T__88);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2139;
				this.match(Swift3Parser.T__89);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2140;
				this.match(Swift3Parser.T__90);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2141;
				this.match(Swift3Parser.T__91);
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
		this.enterRule(_localctx, 402, Swift3Parser.RULE_array_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2144;
			this.match(Swift3Parser.LBRACK);
			this.state = 2146;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 249, this._ctx) ) {
			case 1:
				{
				this.state = 2145;
				this.array_literal_items();
				}
				break;
			}
			this.state = 2148;
			this.match(Swift3Parser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 404, Swift3Parser.RULE_array_literal_items);
		let _la: number;
		try {
			this.state = 2158;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 251, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2150;
				this.array_literal_item();
				this.state = 2152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.COMMA) {
					{
					this.state = 2151;
					this.match(Swift3Parser.COMMA);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2154;
				this.array_literal_item();
				this.state = 2155;
				this.match(Swift3Parser.COMMA);
				this.state = 2156;
				this.array_literal_items();
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
	public array_literal_item(): Array_literal_itemContext {
		let _localctx: Array_literal_itemContext = new Array_literal_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 406, Swift3Parser.RULE_array_literal_item);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2160;
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
		this.enterRule(_localctx, 408, Swift3Parser.RULE_dictionary_literal);
		try {
			this.state = 2169;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 252, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2162;
				this.match(Swift3Parser.LBRACK);
				this.state = 2163;
				this.dictionary_literal_items();
				this.state = 2164;
				this.match(Swift3Parser.RBRACK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2166;
				this.match(Swift3Parser.LBRACK);
				this.state = 2167;
				this.match(Swift3Parser.COLON);
				this.state = 2168;
				this.match(Swift3Parser.RBRACK);
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
		this.enterRule(_localctx, 410, Swift3Parser.RULE_dictionary_literal_items);
		let _la: number;
		try {
			this.state = 2179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 254, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2171;
				this.dictionary_literal_item();
				this.state = 2173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.COMMA) {
					{
					this.state = 2172;
					this.match(Swift3Parser.COMMA);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2175;
				this.dictionary_literal_item();
				this.state = 2176;
				this.match(Swift3Parser.COMMA);
				this.state = 2177;
				this.dictionary_literal_items();
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
	public dictionary_literal_item(): Dictionary_literal_itemContext {
		let _localctx: Dictionary_literal_itemContext = new Dictionary_literal_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 412, Swift3Parser.RULE_dictionary_literal_item);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2181;
			this.expression();
			this.state = 2182;
			this.match(Swift3Parser.COLON);
			this.state = 2183;
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
	public playground_literal(): Playground_literalContext {
		let _localctx: Playground_literalContext = new Playground_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 414, Swift3Parser.RULE_playground_literal);
		try {
			this.state = 2218;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.T__92:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2185;
				this.match(Swift3Parser.T__92);
				this.state = 2186;
				this.match(Swift3Parser.LPAREN);
				this.state = 2187;
				this.match(Swift3Parser.T__93);
				this.state = 2188;
				this.match(Swift3Parser.COLON);
				this.state = 2189;
				this.expression();
				this.state = 2190;
				this.match(Swift3Parser.COMMA);
				this.state = 2191;
				this.match(Swift3Parser.T__94);
				this.state = 2192;
				this.match(Swift3Parser.COLON);
				this.state = 2193;
				this.expression();
				this.state = 2194;
				this.match(Swift3Parser.COMMA);
				this.state = 2195;
				this.match(Swift3Parser.T__95);
				this.state = 2196;
				this.match(Swift3Parser.COLON);
				this.state = 2197;
				this.expression();
				this.state = 2198;
				this.match(Swift3Parser.COMMA);
				this.state = 2199;
				this.match(Swift3Parser.T__96);
				this.state = 2200;
				this.match(Swift3Parser.COLON);
				this.state = 2201;
				this.expression();
				this.state = 2202;
				this.match(Swift3Parser.RPAREN);
				}
				break;
			case Swift3Parser.T__97:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2204;
				this.match(Swift3Parser.T__97);
				this.state = 2205;
				this.match(Swift3Parser.LPAREN);
				this.state = 2206;
				this.match(Swift3Parser.T__98);
				this.state = 2207;
				this.match(Swift3Parser.COLON);
				this.state = 2208;
				this.expression();
				this.state = 2209;
				this.match(Swift3Parser.RPAREN);
				}
				break;
			case Swift3Parser.T__99:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2211;
				this.match(Swift3Parser.T__99);
				this.state = 2212;
				this.match(Swift3Parser.LPAREN);
				this.state = 2213;
				this.match(Swift3Parser.T__98);
				this.state = 2214;
				this.match(Swift3Parser.COLON);
				this.state = 2215;
				this.expression();
				this.state = 2216;
				this.match(Swift3Parser.RPAREN);
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
	public self_expression(): Self_expressionContext {
		let _localctx: Self_expressionContext = new Self_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 416, Swift3Parser.RULE_self_expression);
		try {
			this.state = 2239;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 256, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2220;
				this.match(Swift3Parser.T__100);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2221;
				this.match(Swift3Parser.T__100);
				this.state = 2222;
				this.match(Swift3Parser.DOT);
				this.state = 2223;
				this.declaration_identifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2224;
				this.match(Swift3Parser.T__100);
				this.state = 2225;
				this.match(Swift3Parser.LBRACK);
				this.state = 2226;
				this.expression_list();
				this.state = 2227;
				this.match(Swift3Parser.RBRACK);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2229;
				this.match(Swift3Parser.T__100);
				this.state = 2230;
				this.match(Swift3Parser.DOT);
				this.state = 2231;
				this.match(Swift3Parser.T__48);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2232;
				this.match(Swift3Parser.T__101);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2233;
				this.match(Swift3Parser.T__101);
				this.state = 2234;
				this.match(Swift3Parser.DOT);
				this.state = 2235;
				this.declaration_identifier();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2236;
				this.match(Swift3Parser.T__101);
				this.state = 2237;
				this.match(Swift3Parser.DOT);
				this.state = 2238;
				this.match(Swift3Parser.T__48);
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
		this.enterRule(_localctx, 418, Swift3Parser.RULE_superclass_expression);
		try {
			this.state = 2244;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2241;
				this.superclass_method_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2242;
				this.superclass_subscript_expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2243;
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
		this.enterRule(_localctx, 420, Swift3Parser.RULE_superclass_method_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2246;
			this.match(Swift3Parser.T__102);
			this.state = 2247;
			this.match(Swift3Parser.DOT);
			this.state = 2248;
			this.declaration_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 422, Swift3Parser.RULE_superclass_subscript_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2250;
			this.match(Swift3Parser.T__102);
			this.state = 2251;
			this.match(Swift3Parser.LBRACK);
			this.state = 2252;
			this.expression();
			this.state = 2253;
			this.match(Swift3Parser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 424, Swift3Parser.RULE_superclass_initializer_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2255;
			this.match(Swift3Parser.T__102);
			this.state = 2256;
			this.match(Swift3Parser.DOT);
			this.state = 2257;
			this.match(Swift3Parser.T__48);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 426, Swift3Parser.RULE_closure_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2259;
			this.match(Swift3Parser.LCURLY);
			this.state = 2261;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 258, this._ctx) ) {
			case 1:
				{
				this.state = 2260;
				this.closure_signature();
				}
				break;
			}
			this.state = 2264;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 259, this._ctx) ) {
			case 1:
				{
				this.state = 2263;
				this.statements();
				}
				break;
			}
			this.state = 2266;
			this.match(Swift3Parser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 428, Swift3Parser.RULE_closure_signature);
		let _la: number;
		try {
			this.state = 2283;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 263, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.LBRACK) {
					{
					this.state = 2268;
					this.capture_list();
					}
				}

				this.state = 2271;
				this.closure_parameter_clause();
				this.state = 2273;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 261, this._ctx) ) {
				case 1:
					{
					this.state = 2272;
					this.match(Swift3Parser.T__43);
					}
					break;
				}
				this.state = 2276;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
				case 1:
					{
					this.state = 2275;
					this.function_result();
					}
					break;
				}
				this.state = 2278;
				this.match(Swift3Parser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2280;
				this.capture_list();
				this.state = 2281;
				this.match(Swift3Parser.T__2);
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
	public closure_parameter_clause(): Closure_parameter_clauseContext {
		let _localctx: Closure_parameter_clauseContext = new Closure_parameter_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 430, Swift3Parser.RULE_closure_parameter_clause);
		try {
			this.state = 2292;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 264, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2285;
				this.match(Swift3Parser.LPAREN);
				this.state = 2286;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2287;
				this.match(Swift3Parser.LPAREN);
				this.state = 2288;
				this.closure_parameter_list();
				this.state = 2289;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2291;
				this.closure_parameter_clause_identifier_list();
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
	public closure_parameter_clause_identifier_list(): Closure_parameter_clause_identifier_listContext {
		let _localctx: Closure_parameter_clause_identifier_listContext = new Closure_parameter_clause_identifier_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 432, Swift3Parser.RULE_closure_parameter_clause_identifier_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2294;
			this.declaration_identifier();
			this.state = 2299;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 265, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2295;
					this.match(Swift3Parser.COMMA);
					this.state = 2296;
					this.declaration_identifier();
					}
					}
				}
				this.state = 2301;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 265, this._ctx);
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
	public closure_parameter_list(): Closure_parameter_listContext {
		let _localctx: Closure_parameter_listContext = new Closure_parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 434, Swift3Parser.RULE_closure_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2302;
			this.closure_parameter();
			this.state = 2307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift3Parser.COMMA) {
				{
				{
				this.state = 2303;
				this.match(Swift3Parser.COMMA);
				this.state = 2304;
				this.closure_parameter();
				}
				}
				this.state = 2309;
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
	public closure_parameter(): Closure_parameterContext {
		let _localctx: Closure_parameterContext = new Closure_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 436, Swift3Parser.RULE_closure_parameter);
		let _la: number;
		try {
			this.state = 2318;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 268, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2310;
				this.closure_parameter_name();
				this.state = 2312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.COLON) {
					{
					this.state = 2311;
					this.type_annotation();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2314;
				this.closure_parameter_name();
				this.state = 2315;
				this.type_annotation();
				this.state = 2316;
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
	public closure_parameter_name(): Closure_parameter_nameContext {
		let _localctx: Closure_parameter_nameContext = new Closure_parameter_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 438, Swift3Parser.RULE_closure_parameter_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2320;
			this.label_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 440, Swift3Parser.RULE_capture_list);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2322;
			this.match(Swift3Parser.LBRACK);
			this.state = 2323;
			this.capture_list_items();
			this.state = 2324;
			this.match(Swift3Parser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 442, Swift3Parser.RULE_capture_list_items);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2326;
			this.capture_list_item();
			this.state = 2331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift3Parser.COMMA) {
				{
				{
				this.state = 2327;
				this.match(Swift3Parser.COMMA);
				this.state = 2328;
				this.capture_list_item();
				}
				}
				this.state = 2333;
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
		this.enterRule(_localctx, 444, Swift3Parser.RULE_capture_list_item);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2335;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 270, this._ctx) ) {
			case 1:
				{
				this.state = 2334;
				this.capture_specifier();
				}
				break;
			}
			this.state = 2337;
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
		this.enterRule(_localctx, 446, Swift3Parser.RULE_capture_specifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2339;
			_la = this._input.LA(1);
			if (!(_la === Swift3Parser.T__71 || _la === Swift3Parser.T__74 || _la === Swift3Parser.T__103 || _la === Swift3Parser.T__104)) {
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
	public implicit_member_expression(): Implicit_member_expressionContext {
		let _localctx: Implicit_member_expressionContext = new Implicit_member_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 448, Swift3Parser.RULE_implicit_member_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2341;
			this.match(Swift3Parser.DOT);
			this.state = 2342;
			this.label_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 450, Swift3Parser.RULE_parenthesized_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2344;
			this.match(Swift3Parser.LPAREN);
			this.state = 2345;
			this.expression();
			this.state = 2346;
			this.match(Swift3Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tuple_expression(): Tuple_expressionContext {
		let _localctx: Tuple_expressionContext = new Tuple_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 452, Swift3Parser.RULE_tuple_expression);
		let _la: number;
		try {
			this.state = 2360;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 272, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2348;
				this.match(Swift3Parser.LPAREN);
				this.state = 2349;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2350;
				this.match(Swift3Parser.LPAREN);
				this.state = 2351;
				this.tuple_element();
				this.state = 2354;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2352;
					this.match(Swift3Parser.COMMA);
					this.state = 2353;
					this.tuple_element();
					}
					}
					this.state = 2356;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === Swift3Parser.COMMA);
				this.state = 2358;
				this.match(Swift3Parser.RPAREN);
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
	public tuple_element(): Tuple_elementContext {
		let _localctx: Tuple_elementContext = new Tuple_elementContext(this._ctx, this.state);
		this.enterRule(_localctx, 454, Swift3Parser.RULE_tuple_element);
		try {
			this.state = 2367;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 273, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2362;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2363;
				this.label_identifier();
				this.state = 2364;
				this.match(Swift3Parser.COLON);
				this.state = 2365;
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
		this.enterRule(_localctx, 456, Swift3Parser.RULE_wildcard_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2369;
			this.match(Swift3Parser.UNDERSCORE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 458, Swift3Parser.RULE_selector_expression);
		try {
			this.state = 2388;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 274, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2371;
				this.match(Swift3Parser.T__105);
				this.state = 2372;
				this.match(Swift3Parser.LPAREN);
				this.state = 2373;
				this.expression();
				this.state = 2374;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2376;
				this.match(Swift3Parser.T__105);
				this.state = 2377;
				this.match(Swift3Parser.LPAREN);
				this.state = 2378;
				this.match(Swift3Parser.T__106);
				this.state = 2379;
				this.expression();
				this.state = 2380;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2382;
				this.match(Swift3Parser.T__105);
				this.state = 2383;
				this.match(Swift3Parser.LPAREN);
				this.state = 2384;
				this.match(Swift3Parser.T__107);
				this.state = 2385;
				this.expression();
				this.state = 2386;
				this.match(Swift3Parser.RPAREN);
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
	public key_path_expression(): Key_path_expressionContext {
		let _localctx: Key_path_expressionContext = new Key_path_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 460, Swift3Parser.RULE_key_path_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2390;
			this.match(Swift3Parser.T__108);
			this.state = 2391;
			this.match(Swift3Parser.LPAREN);
			this.state = 2392;
			this.expression();
			this.state = 2393;
			this.match(Swift3Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		let _startState: number = 462;
		this.enterRecursionRule(_localctx, 462, Swift3Parser.RULE_postfix_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2398;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				{
				_localctx = new PrimaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2396;
				this.primary_expression();
				}
				break;

			case 2:
				{
				_localctx = new Dynamic_typeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2397;
				this.dynamic_type_expression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2450;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2448;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 278, this._ctx) ) {
					case 1:
						{
						_localctx = new Postfix_operationContext(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_postfix_expression);
						this.state = 2400;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 2401;
						this.postfix_operator();
						}
						break;

					case 2:
						{
						_localctx = new Function_call_expressionContext(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_postfix_expression);
						this.state = 2402;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 2403;
						this.function_call_argument_clause();
						}
						break;

					case 3:
						{
						_localctx = new Function_call_expression_with_closureContext(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_postfix_expression);
						this.state = 2404;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 2406;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === Swift3Parser.LPAREN) {
							{
							this.state = 2405;
							this.function_call_argument_clause();
							}
						}

						this.state = 2408;
						this.trailing_closure();
						}
						break;

					case 4:
						{
						_localctx = new Initializer_expressionContext(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_postfix_expression);
						this.state = 2409;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 2410;
						this.match(Swift3Parser.DOT);
						this.state = 2411;
						this.match(Swift3Parser.T__48);
						}
						break;

					case 5:
						{
						_localctx = new Initializer_expression_with_argsContext(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_postfix_expression);
						this.state = 2412;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 2413;
						this.match(Swift3Parser.DOT);
						this.state = 2414;
						this.match(Swift3Parser.T__48);
						this.state = 2415;
						this.match(Swift3Parser.LPAREN);
						this.state = 2416;
						this.argument_names();
						this.state = 2417;
						this.match(Swift3Parser.RPAREN);
						}
						break;

					case 6:
						{
						_localctx = new Explicit_member_expression1Context(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_postfix_expression);
						this.state = 2419;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 2420;
						this.match(Swift3Parser.DOT);
						this.state = 2421;
						this.match(Swift3Parser.Pure_decimal_digits);
						}
						break;

					case 7:
						{
						_localctx = new Explicit_member_expression2Context(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_postfix_expression);
						this.state = 2422;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 2423;
						this.match(Swift3Parser.DOT);
						this.state = 2424;
						this.declaration_identifier();
						this.state = 2426;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 277, this._ctx) ) {
						case 1:
							{
							this.state = 2425;
							this.generic_argument_clause();
							}
							break;
						}
						}
						break;

					case 8:
						{
						_localctx = new Explicit_member_expression3Context(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_postfix_expression);
						this.state = 2428;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 2429;
						this.match(Swift3Parser.DOT);
						this.state = 2430;
						this.declaration_identifier();
						this.state = 2431;
						this.match(Swift3Parser.LPAREN);
						this.state = 2432;
						this.argument_names();
						this.state = 2433;
						this.match(Swift3Parser.RPAREN);
						}
						break;

					case 9:
						{
						_localctx = new Explicit_member_expression4Context(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_postfix_expression);
						this.state = 2435;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 2436;
						this.match(Swift3Parser.LPAREN);
						this.state = 2437;
						this.argument_names();
						this.state = 2438;
						this.match(Swift3Parser.RPAREN);
						}
						break;

					case 10:
						{
						_localctx = new Postfix_self_expressionContext(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_postfix_expression);
						this.state = 2440;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 2441;
						this.match(Swift3Parser.DOT);
						this.state = 2442;
						this.match(Swift3Parser.T__100);
						}
						break;

					case 11:
						{
						_localctx = new Subscript_expressionContext(new Postfix_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_postfix_expression);
						this.state = 2443;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 2444;
						this.match(Swift3Parser.LBRACK);
						this.state = 2445;
						this.expression_list();
						this.state = 2446;
						this.match(Swift3Parser.RBRACK);
						}
						break;
					}
					}
				}
				this.state = 2452;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
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
	public function_call_argument_clause(): Function_call_argument_clauseContext {
		let _localctx: Function_call_argument_clauseContext = new Function_call_argument_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 464, Swift3Parser.RULE_function_call_argument_clause);
		try {
			this.state = 2459;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 280, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2453;
				this.match(Swift3Parser.LPAREN);
				this.state = 2454;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2455;
				this.match(Swift3Parser.LPAREN);
				this.state = 2456;
				this.function_call_argument_list();
				this.state = 2457;
				this.match(Swift3Parser.RPAREN);
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
	public function_call_argument_list(): Function_call_argument_listContext {
		let _localctx: Function_call_argument_listContext = new Function_call_argument_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 466, Swift3Parser.RULE_function_call_argument_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2461;
			this.function_call_argument();
			this.state = 2466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Swift3Parser.COMMA) {
				{
				{
				this.state = 2462;
				this.match(Swift3Parser.COMMA);
				this.state = 2463;
				this.function_call_argument();
				}
				}
				this.state = 2468;
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
	public function_call_argument(): Function_call_argumentContext {
		let _localctx: Function_call_argumentContext = new Function_call_argumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 468, Swift3Parser.RULE_function_call_argument);
		try {
			this.state = 2479;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 282, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2469;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2470;
				this.label_identifier();
				this.state = 2471;
				this.match(Swift3Parser.COLON);
				this.state = 2472;
				this.expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2474;
				this.operator();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2475;
				this.label_identifier();
				this.state = 2476;
				this.match(Swift3Parser.COLON);
				this.state = 2477;
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
	public trailing_closure(): Trailing_closureContext {
		let _localctx: Trailing_closureContext = new Trailing_closureContext(this._ctx, this.state);
		this.enterRule(_localctx, 470, Swift3Parser.RULE_trailing_closure);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2481;
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
	// @RuleVersion(0)
	public argument_names(): Argument_namesContext {
		let _localctx: Argument_namesContext = new Argument_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 472, Swift3Parser.RULE_argument_names);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2483;
			this.argument_name();
			this.state = 2487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Swift3Parser.T__0) | (1 << Swift3Parser.T__1) | (1 << Swift3Parser.T__2) | (1 << Swift3Parser.T__3) | (1 << Swift3Parser.T__6) | (1 << Swift3Parser.T__7) | (1 << Swift3Parser.T__8) | (1 << Swift3Parser.T__9) | (1 << Swift3Parser.T__10) | (1 << Swift3Parser.T__11) | (1 << Swift3Parser.T__12) | (1 << Swift3Parser.T__13) | (1 << Swift3Parser.T__14) | (1 << Swift3Parser.T__15) | (1 << Swift3Parser.T__16) | (1 << Swift3Parser.T__17) | (1 << Swift3Parser.T__18) | (1 << Swift3Parser.T__19) | (1 << Swift3Parser.T__20) | (1 << Swift3Parser.T__25) | (1 << Swift3Parser.T__26) | (1 << Swift3Parser.T__27) | (1 << Swift3Parser.T__29) | (1 << Swift3Parser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Swift3Parser.T__32 - 33)) | (1 << (Swift3Parser.T__33 - 33)) | (1 << (Swift3Parser.T__34 - 33)) | (1 << (Swift3Parser.T__35 - 33)) | (1 << (Swift3Parser.T__36 - 33)) | (1 << (Swift3Parser.T__37 - 33)) | (1 << (Swift3Parser.T__38 - 33)) | (1 << (Swift3Parser.T__39 - 33)) | (1 << (Swift3Parser.T__40 - 33)) | (1 << (Swift3Parser.T__41 - 33)) | (1 << (Swift3Parser.T__42 - 33)) | (1 << (Swift3Parser.T__43 - 33)) | (1 << (Swift3Parser.T__44 - 33)) | (1 << (Swift3Parser.T__45 - 33)) | (1 << (Swift3Parser.T__46 - 33)) | (1 << (Swift3Parser.T__47 - 33)) | (1 << (Swift3Parser.T__48 - 33)) | (1 << (Swift3Parser.T__49 - 33)) | (1 << (Swift3Parser.T__50 - 33)) | (1 << (Swift3Parser.T__51 - 33)) | (1 << (Swift3Parser.T__52 - 33)) | (1 << (Swift3Parser.T__53 - 33)) | (1 << (Swift3Parser.T__54 - 33)) | (1 << (Swift3Parser.T__55 - 33)) | (1 << (Swift3Parser.T__56 - 33)) | (1 << (Swift3Parser.T__57 - 33)) | (1 << (Swift3Parser.T__58 - 33)) | (1 << (Swift3Parser.T__59 - 33)) | (1 << (Swift3Parser.T__60 - 33)) | (1 << (Swift3Parser.T__61 - 33)) | (1 << (Swift3Parser.T__62 - 33)) | (1 << (Swift3Parser.T__63 - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Swift3Parser.T__64 - 65)) | (1 << (Swift3Parser.T__65 - 65)) | (1 << (Swift3Parser.T__66 - 65)) | (1 << (Swift3Parser.T__67 - 65)) | (1 << (Swift3Parser.T__68 - 65)) | (1 << (Swift3Parser.T__69 - 65)) | (1 << (Swift3Parser.T__70 - 65)) | (1 << (Swift3Parser.T__71 - 65)) | (1 << (Swift3Parser.T__72 - 65)) | (1 << (Swift3Parser.T__73 - 65)) | (1 << (Swift3Parser.T__74 - 65)) | (1 << (Swift3Parser.T__75 - 65)) | (1 << (Swift3Parser.T__76 - 65)) | (1 << (Swift3Parser.T__77 - 65)) | (1 << (Swift3Parser.T__78 - 65)) | (1 << (Swift3Parser.T__79 - 65)) | (1 << (Swift3Parser.T__80 - 65)) | (1 << (Swift3Parser.T__81 - 65)) | (1 << (Swift3Parser.T__82 - 65)) | (1 << (Swift3Parser.T__83 - 65)) | (1 << (Swift3Parser.T__86 - 65)) | (1 << (Swift3Parser.T__93 - 65)) | (1 << (Swift3Parser.T__94 - 65)) | (1 << (Swift3Parser.T__95 - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (Swift3Parser.T__96 - 97)) | (1 << (Swift3Parser.T__98 - 97)) | (1 << (Swift3Parser.T__100 - 97)) | (1 << (Swift3Parser.T__101 - 97)) | (1 << (Swift3Parser.T__102 - 97)) | (1 << (Swift3Parser.T__109 - 97)) | (1 << (Swift3Parser.T__110 - 97)) | (1 << (Swift3Parser.T__111 - 97)) | (1 << (Swift3Parser.T__112 - 97)) | (1 << (Swift3Parser.T__113 - 97)) | (1 << (Swift3Parser.T__115 - 97)) | (1 << (Swift3Parser.T__116 - 97)) | (1 << (Swift3Parser.T__117 - 97)) | (1 << (Swift3Parser.T__118 - 97)) | (1 << (Swift3Parser.T__119 - 97)) | (1 << (Swift3Parser.T__120 - 97)) | (1 << (Swift3Parser.T__121 - 97)) | (1 << (Swift3Parser.T__122 - 97)) | (1 << (Swift3Parser.T__123 - 97)) | (1 << (Swift3Parser.T__124 - 97)) | (1 << (Swift3Parser.T__125 - 97)) | (1 << (Swift3Parser.T__126 - 97)) | (1 << (Swift3Parser.T__127 - 97)))) !== 0) || _la === Swift3Parser.T__128 || _la === Swift3Parser.Identifier) {
				{
				{
				this.state = 2484;
				this.argument_name();
				}
				}
				this.state = 2489;
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
	public argument_name(): Argument_nameContext {
		let _localctx: Argument_nameContext = new Argument_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 474, Swift3Parser.RULE_argument_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2490;
			this.label_identifier();
			this.state = 2491;
			this.match(Swift3Parser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dynamic_type_expression(): Dynamic_type_expressionContext {
		let _localctx: Dynamic_type_expressionContext = new Dynamic_type_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 476, Swift3Parser.RULE_dynamic_type_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2493;
			this.match(Swift3Parser.T__109);
			this.state = 2494;
			this.match(Swift3Parser.LPAREN);
			this.state = 2495;
			this.match(Swift3Parser.T__110);
			this.state = 2496;
			this.match(Swift3Parser.COLON);
			this.state = 2497;
			this.expression();
			this.state = 2498;
			this.match(Swift3Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		let _startState: number = 478;
		this.enterRecursionRule(_localctx, 478, Swift3Parser.RULE_type, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2509;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 284, this._ctx) ) {
			case 1:
				{
				_localctx = new The_array_typeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2501;
				this.array_type();
				}
				break;

			case 2:
				{
				_localctx = new The_dictionary_typeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2502;
				this.dictionary_type();
				}
				break;

			case 3:
				{
				_localctx = new The_function_typeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2503;
				this.function_type();
				}
				break;

			case 4:
				{
				_localctx = new The_type_identifierContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2504;
				this.type_identifier();
				}
				break;

			case 5:
				{
				_localctx = new The_tuple_typeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2505;
				this.tuple_type();
				}
				break;

			case 6:
				{
				_localctx = new The_protocol_composition_typeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2506;
				this.protocol_composition_type();
				}
				break;

			case 7:
				{
				_localctx = new The_any_typeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2507;
				this.match(Swift3Parser.T__113);
				}
				break;

			case 8:
				{
				_localctx = new The_self_typeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2508;
				this.match(Swift3Parser.T__101);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2523;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 286, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2521;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 285, this._ctx) ) {
					case 1:
						{
						_localctx = new The_optional_typeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_type);
						this.state = 2511;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 2512;
						this.match(Swift3Parser.QUESTION);
						}
						break;

					case 2:
						{
						_localctx = new The_implicitly_unwrapped_optional_typeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_type);
						this.state = 2513;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 2514;
						this.match(Swift3Parser.BANG);
						}
						break;

					case 3:
						{
						_localctx = new The_metatype_type_typeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_type);
						this.state = 2515;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 2516;
						this.match(Swift3Parser.DOT);
						this.state = 2517;
						this.match(Swift3Parser.T__111);
						}
						break;

					case 4:
						{
						_localctx = new The_metatype_protocol_typeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, Swift3Parser.RULE_type);
						this.state = 2518;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 2519;
						this.match(Swift3Parser.DOT);
						this.state = 2520;
						this.match(Swift3Parser.T__112);
						}
						break;
					}
					}
				}
				this.state = 2525;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 286, this._ctx);
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
		this.enterRule(_localctx, 480, Swift3Parser.RULE_type_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2526;
			this.match(Swift3Parser.COLON);
			this.state = 2528;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 287, this._ctx) ) {
			case 1:
				{
				this.state = 2527;
				this.attributes();
				}
				break;
			}
			this.state = 2531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Swift3Parser.T__114) {
				{
				this.state = 2530;
				this.match(Swift3Parser.T__114);
				}
			}

			this.state = 2533;
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
		this.enterRule(_localctx, 482, Swift3Parser.RULE_type_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2535;
			this.type_name();
			this.state = 2537;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 289, this._ctx) ) {
			case 1:
				{
				this.state = 2536;
				this.generic_argument_clause();
				}
				break;
			}
			this.state = 2541;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 290, this._ctx) ) {
			case 1:
				{
				this.state = 2539;
				this.match(Swift3Parser.DOT);
				this.state = 2540;
				this.type_identifier();
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
	public type_name(): Type_nameContext {
		let _localctx: Type_nameContext = new Type_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 484, Swift3Parser.RULE_type_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2543;
			this.declaration_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 486, Swift3Parser.RULE_tuple_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2545;
			this.match(Swift3Parser.LPAREN);
			this.state = 2547;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Swift3Parser.T__0) | (1 << Swift3Parser.T__1) | (1 << Swift3Parser.T__2) | (1 << Swift3Parser.T__3) | (1 << Swift3Parser.T__6) | (1 << Swift3Parser.T__7) | (1 << Swift3Parser.T__8) | (1 << Swift3Parser.T__9) | (1 << Swift3Parser.T__10) | (1 << Swift3Parser.T__11) | (1 << Swift3Parser.T__12) | (1 << Swift3Parser.T__13) | (1 << Swift3Parser.T__14) | (1 << Swift3Parser.T__15) | (1 << Swift3Parser.T__16) | (1 << Swift3Parser.T__17) | (1 << Swift3Parser.T__18) | (1 << Swift3Parser.T__19) | (1 << Swift3Parser.T__20) | (1 << Swift3Parser.T__25) | (1 << Swift3Parser.T__26) | (1 << Swift3Parser.T__27) | (1 << Swift3Parser.T__29) | (1 << Swift3Parser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Swift3Parser.T__32 - 33)) | (1 << (Swift3Parser.T__33 - 33)) | (1 << (Swift3Parser.T__34 - 33)) | (1 << (Swift3Parser.T__35 - 33)) | (1 << (Swift3Parser.T__36 - 33)) | (1 << (Swift3Parser.T__37 - 33)) | (1 << (Swift3Parser.T__38 - 33)) | (1 << (Swift3Parser.T__39 - 33)) | (1 << (Swift3Parser.T__40 - 33)) | (1 << (Swift3Parser.T__41 - 33)) | (1 << (Swift3Parser.T__42 - 33)) | (1 << (Swift3Parser.T__43 - 33)) | (1 << (Swift3Parser.T__44 - 33)) | (1 << (Swift3Parser.T__45 - 33)) | (1 << (Swift3Parser.T__46 - 33)) | (1 << (Swift3Parser.T__47 - 33)) | (1 << (Swift3Parser.T__48 - 33)) | (1 << (Swift3Parser.T__49 - 33)) | (1 << (Swift3Parser.T__50 - 33)) | (1 << (Swift3Parser.T__51 - 33)) | (1 << (Swift3Parser.T__52 - 33)) | (1 << (Swift3Parser.T__53 - 33)) | (1 << (Swift3Parser.T__54 - 33)) | (1 << (Swift3Parser.T__55 - 33)) | (1 << (Swift3Parser.T__56 - 33)) | (1 << (Swift3Parser.T__57 - 33)) | (1 << (Swift3Parser.T__58 - 33)) | (1 << (Swift3Parser.T__59 - 33)) | (1 << (Swift3Parser.T__60 - 33)) | (1 << (Swift3Parser.T__61 - 33)) | (1 << (Swift3Parser.T__62 - 33)) | (1 << (Swift3Parser.T__63 - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Swift3Parser.T__64 - 65)) | (1 << (Swift3Parser.T__65 - 65)) | (1 << (Swift3Parser.T__66 - 65)) | (1 << (Swift3Parser.T__67 - 65)) | (1 << (Swift3Parser.T__68 - 65)) | (1 << (Swift3Parser.T__69 - 65)) | (1 << (Swift3Parser.T__70 - 65)) | (1 << (Swift3Parser.T__71 - 65)) | (1 << (Swift3Parser.T__72 - 65)) | (1 << (Swift3Parser.T__73 - 65)) | (1 << (Swift3Parser.T__74 - 65)) | (1 << (Swift3Parser.T__75 - 65)) | (1 << (Swift3Parser.T__76 - 65)) | (1 << (Swift3Parser.T__77 - 65)) | (1 << (Swift3Parser.T__78 - 65)) | (1 << (Swift3Parser.T__79 - 65)) | (1 << (Swift3Parser.T__80 - 65)) | (1 << (Swift3Parser.T__81 - 65)) | (1 << (Swift3Parser.T__82 - 65)) | (1 << (Swift3Parser.T__83 - 65)) | (1 << (Swift3Parser.T__86 - 65)) | (1 << (Swift3Parser.T__93 - 65)) | (1 << (Swift3Parser.T__94 - 65)) | (1 << (Swift3Parser.T__95 - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (Swift3Parser.T__96 - 97)) | (1 << (Swift3Parser.T__98 - 97)) | (1 << (Swift3Parser.T__100 - 97)) | (1 << (Swift3Parser.T__101 - 97)) | (1 << (Swift3Parser.T__102 - 97)) | (1 << (Swift3Parser.T__109 - 97)) | (1 << (Swift3Parser.T__110 - 97)) | (1 << (Swift3Parser.T__111 - 97)) | (1 << (Swift3Parser.T__112 - 97)) | (1 << (Swift3Parser.T__113 - 97)) | (1 << (Swift3Parser.T__115 - 97)) | (1 << (Swift3Parser.T__116 - 97)) | (1 << (Swift3Parser.T__117 - 97)) | (1 << (Swift3Parser.T__118 - 97)) | (1 << (Swift3Parser.T__119 - 97)) | (1 << (Swift3Parser.T__120 - 97)) | (1 << (Swift3Parser.T__121 - 97)) | (1 << (Swift3Parser.T__122 - 97)) | (1 << (Swift3Parser.T__123 - 97)) | (1 << (Swift3Parser.T__124 - 97)) | (1 << (Swift3Parser.T__125 - 97)) | (1 << (Swift3Parser.T__126 - 97)) | (1 << (Swift3Parser.T__127 - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (Swift3Parser.T__128 - 129)) | (1 << (Swift3Parser.Identifier - 129)) | (1 << (Swift3Parser.LPAREN - 129)) | (1 << (Swift3Parser.LBRACK - 129)) | (1 << (Swift3Parser.AT - 129)))) !== 0)) {
				{
				this.state = 2546;
				this.tuple_type_element_list();
				}
			}

			this.state = 2549;
			this.match(Swift3Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 488, Swift3Parser.RULE_tuple_type_element_list);
		try {
			this.state = 2556;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 292, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2551;
				this.tuple_type_element();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2552;
				this.tuple_type_element();
				this.state = 2553;
				this.match(Swift3Parser.COMMA);
				this.state = 2554;
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
		this.enterRule(_localctx, 490, Swift3Parser.RULE_tuple_type_element);
		try {
			this.state = 2562;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 293, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2558;
				this.element_name();
				this.state = 2559;
				this.type_annotation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2561;
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
	public element_name(): Element_nameContext {
		let _localctx: Element_nameContext = new Element_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 492, Swift3Parser.RULE_element_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2564;
			this.label_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_type(): Function_typeContext {
		let _localctx: Function_typeContext = new Function_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 494, Swift3Parser.RULE_function_type);
		let _la: number;
		try {
			this.state = 2584;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 297, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.AT) {
					{
					this.state = 2566;
					this.attributes();
					}
				}

				this.state = 2569;
				this.function_type_argument_clause();
				this.state = 2571;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 295, this._ctx) ) {
				case 1:
					{
					this.state = 2570;
					this.match(Swift3Parser.T__43);
					}
					break;
				}
				this.state = 2573;
				this.arrow_operator();
				this.state = 2574;
				this.type(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.AT) {
					{
					this.state = 2576;
					this.attributes();
					}
				}

				this.state = 2579;
				this.function_type_argument_clause();
				this.state = 2580;
				this.match(Swift3Parser.T__44);
				this.state = 2581;
				this.arrow_operator();
				this.state = 2582;
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
	public function_type_argument_clause(): Function_type_argument_clauseContext {
		let _localctx: Function_type_argument_clauseContext = new Function_type_argument_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 496, Swift3Parser.RULE_function_type_argument_clause);
		try {
			this.state = 2595;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 299, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2586;
				this.match(Swift3Parser.LPAREN);
				this.state = 2587;
				this.match(Swift3Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2588;
				this.match(Swift3Parser.LPAREN);
				this.state = 2589;
				this.function_type_argument_list();
				this.state = 2591;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 298, this._ctx) ) {
				case 1:
					{
					this.state = 2590;
					this.range_operator();
					}
					break;
				}
				this.state = 2593;
				this.match(Swift3Parser.RPAREN);
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
	public function_type_argument_list(): Function_type_argument_listContext {
		let _localctx: Function_type_argument_listContext = new Function_type_argument_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 498, Swift3Parser.RULE_function_type_argument_list);
		try {
			this.state = 2602;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 300, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2597;
				this.function_type_argument();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2598;
				this.function_type_argument();
				this.state = 2599;
				this.match(Swift3Parser.COMMA);
				this.state = 2600;
				this.function_type_argument_list();
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
	public function_type_argument(): Function_type_argumentContext {
		let _localctx: Function_type_argumentContext = new Function_type_argumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 500, Swift3Parser.RULE_function_type_argument);
		let _la: number;
		try {
			this.state = 2614;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 303, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2605;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 301, this._ctx) ) {
				case 1:
					{
					this.state = 2604;
					this.attributes();
					}
					break;
				}
				this.state = 2608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Swift3Parser.T__114) {
					{
					this.state = 2607;
					this.match(Swift3Parser.T__114);
					}
				}

				this.state = 2610;
				this.type(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2611;
				this.argument_label();
				this.state = 2612;
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
	public argument_label(): Argument_labelContext {
		let _localctx: Argument_labelContext = new Argument_labelContext(this._ctx, this.state);
		this.enterRule(_localctx, 502, Swift3Parser.RULE_argument_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2616;
			this.label_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array_type(): Array_typeContext {
		let _localctx: Array_typeContext = new Array_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 504, Swift3Parser.RULE_array_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2618;
			this.match(Swift3Parser.LBRACK);
			this.state = 2619;
			this.type(0);
			this.state = 2620;
			this.match(Swift3Parser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dictionary_type(): Dictionary_typeContext {
		let _localctx: Dictionary_typeContext = new Dictionary_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 506, Swift3Parser.RULE_dictionary_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2622;
			this.match(Swift3Parser.LBRACK);
			this.state = 2623;
			this.type(0);
			this.state = 2624;
			this.match(Swift3Parser.COLON);
			this.state = 2625;
			this.type(0);
			this.state = 2626;
			this.match(Swift3Parser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 508, Swift3Parser.RULE_protocol_composition_type);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2628;
			this.protocol_identifier();
			this.state = 2631;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2629;
					this.match(Swift3Parser.AND);
					this.state = 2630;
					this.protocol_identifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2633;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
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
	public protocol_identifier(): Protocol_identifierContext {
		let _localctx: Protocol_identifierContext = new Protocol_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 510, Swift3Parser.RULE_protocol_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2635;
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
		this.enterRule(_localctx, 512, Swift3Parser.RULE_type_inheritance_clause);
		try {
			this.state = 2646;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 305, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2637;
				this.match(Swift3Parser.COLON);
				this.state = 2638;
				this.class_requirement();
				this.state = 2639;
				this.match(Swift3Parser.COMMA);
				this.state = 2640;
				this.type_inheritance_list();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2642;
				this.match(Swift3Parser.COLON);
				this.state = 2643;
				this.class_requirement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2644;
				this.match(Swift3Parser.COLON);
				this.state = 2645;
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
		this.enterRule(_localctx, 514, Swift3Parser.RULE_type_inheritance_list);
		try {
			this.state = 2653;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 306, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2648;
				this.type_identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2649;
				this.type_identifier();
				this.state = 2650;
				this.match(Swift3Parser.COMMA);
				this.state = 2651;
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
		this.enterRule(_localctx, 516, Swift3Parser.RULE_class_requirement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2655;
			this.match(Swift3Parser.T__35);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration_identifier(): Declaration_identifierContext {
		let _localctx: Declaration_identifierContext = new Declaration_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 518, Swift3Parser.RULE_declaration_identifier);
		try {
			this.state = 2659;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2657;
				this.match(Swift3Parser.Identifier);
				}
				break;
			case Swift3Parser.T__25:
			case Swift3Parser.T__26:
			case Swift3Parser.T__27:
			case Swift3Parser.T__29:
			case Swift3Parser.T__30:
			case Swift3Parser.T__39:
			case Swift3Parser.T__40:
			case Swift3Parser.T__41:
			case Swift3Parser.T__42:
			case Swift3Parser.T__45:
			case Swift3Parser.T__46:
			case Swift3Parser.T__52:
			case Swift3Parser.T__54:
			case Swift3Parser.T__55:
			case Swift3Parser.T__57:
			case Swift3Parser.T__58:
			case Swift3Parser.T__59:
			case Swift3Parser.T__60:
			case Swift3Parser.T__61:
			case Swift3Parser.T__62:
			case Swift3Parser.T__63:
			case Swift3Parser.T__64:
			case Swift3Parser.T__65:
			case Swift3Parser.T__66:
			case Swift3Parser.T__67:
			case Swift3Parser.T__68:
			case Swift3Parser.T__69:
			case Swift3Parser.T__71:
			case Swift3Parser.T__72:
			case Swift3Parser.T__73:
			case Swift3Parser.T__74:
			case Swift3Parser.T__79:
			case Swift3Parser.T__80:
			case Swift3Parser.T__81:
			case Swift3Parser.T__93:
			case Swift3Parser.T__94:
			case Swift3Parser.T__95:
			case Swift3Parser.T__96:
			case Swift3Parser.T__98:
			case Swift3Parser.T__109:
			case Swift3Parser.T__110:
			case Swift3Parser.T__111:
			case Swift3Parser.T__112:
			case Swift3Parser.T__115:
			case Swift3Parser.T__116:
			case Swift3Parser.T__117:
			case Swift3Parser.T__118:
			case Swift3Parser.T__119:
			case Swift3Parser.T__120:
			case Swift3Parser.T__121:
			case Swift3Parser.T__122:
			case Swift3Parser.T__123:
			case Swift3Parser.T__124:
			case Swift3Parser.T__125:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2658;
				this.keyword_as_identifier_in_declarations();
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
	public label_identifier(): Label_identifierContext {
		let _localctx: Label_identifierContext = new Label_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 520, Swift3Parser.RULE_label_identifier);
		try {
			this.state = 2663;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2661;
				this.match(Swift3Parser.Identifier);
				}
				break;
			case Swift3Parser.T__0:
			case Swift3Parser.T__1:
			case Swift3Parser.T__2:
			case Swift3Parser.T__3:
			case Swift3Parser.T__6:
			case Swift3Parser.T__7:
			case Swift3Parser.T__8:
			case Swift3Parser.T__9:
			case Swift3Parser.T__10:
			case Swift3Parser.T__11:
			case Swift3Parser.T__12:
			case Swift3Parser.T__13:
			case Swift3Parser.T__14:
			case Swift3Parser.T__15:
			case Swift3Parser.T__16:
			case Swift3Parser.T__17:
			case Swift3Parser.T__18:
			case Swift3Parser.T__19:
			case Swift3Parser.T__20:
			case Swift3Parser.T__25:
			case Swift3Parser.T__26:
			case Swift3Parser.T__27:
			case Swift3Parser.T__29:
			case Swift3Parser.T__30:
			case Swift3Parser.T__32:
			case Swift3Parser.T__33:
			case Swift3Parser.T__34:
			case Swift3Parser.T__35:
			case Swift3Parser.T__36:
			case Swift3Parser.T__37:
			case Swift3Parser.T__38:
			case Swift3Parser.T__39:
			case Swift3Parser.T__40:
			case Swift3Parser.T__41:
			case Swift3Parser.T__42:
			case Swift3Parser.T__43:
			case Swift3Parser.T__44:
			case Swift3Parser.T__45:
			case Swift3Parser.T__46:
			case Swift3Parser.T__47:
			case Swift3Parser.T__48:
			case Swift3Parser.T__49:
			case Swift3Parser.T__50:
			case Swift3Parser.T__51:
			case Swift3Parser.T__52:
			case Swift3Parser.T__53:
			case Swift3Parser.T__54:
			case Swift3Parser.T__55:
			case Swift3Parser.T__56:
			case Swift3Parser.T__57:
			case Swift3Parser.T__58:
			case Swift3Parser.T__59:
			case Swift3Parser.T__60:
			case Swift3Parser.T__61:
			case Swift3Parser.T__62:
			case Swift3Parser.T__63:
			case Swift3Parser.T__64:
			case Swift3Parser.T__65:
			case Swift3Parser.T__66:
			case Swift3Parser.T__67:
			case Swift3Parser.T__68:
			case Swift3Parser.T__69:
			case Swift3Parser.T__70:
			case Swift3Parser.T__71:
			case Swift3Parser.T__72:
			case Swift3Parser.T__73:
			case Swift3Parser.T__74:
			case Swift3Parser.T__75:
			case Swift3Parser.T__76:
			case Swift3Parser.T__77:
			case Swift3Parser.T__78:
			case Swift3Parser.T__79:
			case Swift3Parser.T__80:
			case Swift3Parser.T__81:
			case Swift3Parser.T__82:
			case Swift3Parser.T__83:
			case Swift3Parser.T__86:
			case Swift3Parser.T__93:
			case Swift3Parser.T__94:
			case Swift3Parser.T__95:
			case Swift3Parser.T__96:
			case Swift3Parser.T__98:
			case Swift3Parser.T__100:
			case Swift3Parser.T__101:
			case Swift3Parser.T__102:
			case Swift3Parser.T__109:
			case Swift3Parser.T__110:
			case Swift3Parser.T__111:
			case Swift3Parser.T__112:
			case Swift3Parser.T__113:
			case Swift3Parser.T__115:
			case Swift3Parser.T__116:
			case Swift3Parser.T__117:
			case Swift3Parser.T__118:
			case Swift3Parser.T__119:
			case Swift3Parser.T__120:
			case Swift3Parser.T__121:
			case Swift3Parser.T__122:
			case Swift3Parser.T__123:
			case Swift3Parser.T__124:
			case Swift3Parser.T__125:
			case Swift3Parser.T__126:
			case Swift3Parser.T__127:
			case Swift3Parser.T__128:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2662;
				this.keyword_as_identifier_in_labels();
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
	public keyword_as_identifier_in_declarations(): Keyword_as_identifier_in_declarationsContext {
		let _localctx: Keyword_as_identifier_in_declarationsContext = new Keyword_as_identifier_in_declarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 522, Swift3Parser.RULE_keyword_as_identifier_in_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2665;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Swift3Parser.T__25) | (1 << Swift3Parser.T__26) | (1 << Swift3Parser.T__27) | (1 << Swift3Parser.T__29) | (1 << Swift3Parser.T__30))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (Swift3Parser.T__39 - 40)) | (1 << (Swift3Parser.T__40 - 40)) | (1 << (Swift3Parser.T__41 - 40)) | (1 << (Swift3Parser.T__42 - 40)) | (1 << (Swift3Parser.T__45 - 40)) | (1 << (Swift3Parser.T__46 - 40)) | (1 << (Swift3Parser.T__52 - 40)) | (1 << (Swift3Parser.T__54 - 40)) | (1 << (Swift3Parser.T__55 - 40)) | (1 << (Swift3Parser.T__57 - 40)) | (1 << (Swift3Parser.T__58 - 40)) | (1 << (Swift3Parser.T__59 - 40)) | (1 << (Swift3Parser.T__60 - 40)) | (1 << (Swift3Parser.T__61 - 40)) | (1 << (Swift3Parser.T__62 - 40)) | (1 << (Swift3Parser.T__63 - 40)) | (1 << (Swift3Parser.T__64 - 40)) | (1 << (Swift3Parser.T__65 - 40)) | (1 << (Swift3Parser.T__66 - 40)) | (1 << (Swift3Parser.T__67 - 40)) | (1 << (Swift3Parser.T__68 - 40)) | (1 << (Swift3Parser.T__69 - 40)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (Swift3Parser.T__71 - 72)) | (1 << (Swift3Parser.T__72 - 72)) | (1 << (Swift3Parser.T__73 - 72)) | (1 << (Swift3Parser.T__74 - 72)) | (1 << (Swift3Parser.T__79 - 72)) | (1 << (Swift3Parser.T__80 - 72)) | (1 << (Swift3Parser.T__81 - 72)) | (1 << (Swift3Parser.T__93 - 72)) | (1 << (Swift3Parser.T__94 - 72)) | (1 << (Swift3Parser.T__95 - 72)) | (1 << (Swift3Parser.T__96 - 72)) | (1 << (Swift3Parser.T__98 - 72)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (Swift3Parser.T__109 - 110)) | (1 << (Swift3Parser.T__110 - 110)) | (1 << (Swift3Parser.T__111 - 110)) | (1 << (Swift3Parser.T__112 - 110)) | (1 << (Swift3Parser.T__115 - 110)) | (1 << (Swift3Parser.T__116 - 110)) | (1 << (Swift3Parser.T__117 - 110)) | (1 << (Swift3Parser.T__118 - 110)) | (1 << (Swift3Parser.T__119 - 110)) | (1 << (Swift3Parser.T__120 - 110)) | (1 << (Swift3Parser.T__121 - 110)) | (1 << (Swift3Parser.T__122 - 110)) | (1 << (Swift3Parser.T__123 - 110)) | (1 << (Swift3Parser.T__124 - 110)) | (1 << (Swift3Parser.T__125 - 110)))) !== 0))) {
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
	public keyword_as_identifier_in_labels(): Keyword_as_identifier_in_labelsContext {
		let _localctx: Keyword_as_identifier_in_labelsContext = new Keyword_as_identifier_in_labelsContext(this._ctx, this.state);
		this.enterRule(_localctx, 524, Swift3Parser.RULE_keyword_as_identifier_in_labels);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2667;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Swift3Parser.T__0) | (1 << Swift3Parser.T__1) | (1 << Swift3Parser.T__2) | (1 << Swift3Parser.T__3) | (1 << Swift3Parser.T__6) | (1 << Swift3Parser.T__7) | (1 << Swift3Parser.T__8) | (1 << Swift3Parser.T__9) | (1 << Swift3Parser.T__10) | (1 << Swift3Parser.T__11) | (1 << Swift3Parser.T__12) | (1 << Swift3Parser.T__13) | (1 << Swift3Parser.T__14) | (1 << Swift3Parser.T__15) | (1 << Swift3Parser.T__16) | (1 << Swift3Parser.T__17) | (1 << Swift3Parser.T__18) | (1 << Swift3Parser.T__19) | (1 << Swift3Parser.T__20) | (1 << Swift3Parser.T__25) | (1 << Swift3Parser.T__26) | (1 << Swift3Parser.T__27) | (1 << Swift3Parser.T__29) | (1 << Swift3Parser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Swift3Parser.T__32 - 33)) | (1 << (Swift3Parser.T__33 - 33)) | (1 << (Swift3Parser.T__34 - 33)) | (1 << (Swift3Parser.T__35 - 33)) | (1 << (Swift3Parser.T__36 - 33)) | (1 << (Swift3Parser.T__37 - 33)) | (1 << (Swift3Parser.T__38 - 33)) | (1 << (Swift3Parser.T__39 - 33)) | (1 << (Swift3Parser.T__40 - 33)) | (1 << (Swift3Parser.T__41 - 33)) | (1 << (Swift3Parser.T__42 - 33)) | (1 << (Swift3Parser.T__43 - 33)) | (1 << (Swift3Parser.T__44 - 33)) | (1 << (Swift3Parser.T__45 - 33)) | (1 << (Swift3Parser.T__46 - 33)) | (1 << (Swift3Parser.T__47 - 33)) | (1 << (Swift3Parser.T__48 - 33)) | (1 << (Swift3Parser.T__49 - 33)) | (1 << (Swift3Parser.T__50 - 33)) | (1 << (Swift3Parser.T__51 - 33)) | (1 << (Swift3Parser.T__52 - 33)) | (1 << (Swift3Parser.T__53 - 33)) | (1 << (Swift3Parser.T__54 - 33)) | (1 << (Swift3Parser.T__55 - 33)) | (1 << (Swift3Parser.T__56 - 33)) | (1 << (Swift3Parser.T__57 - 33)) | (1 << (Swift3Parser.T__58 - 33)) | (1 << (Swift3Parser.T__59 - 33)) | (1 << (Swift3Parser.T__60 - 33)) | (1 << (Swift3Parser.T__61 - 33)) | (1 << (Swift3Parser.T__62 - 33)) | (1 << (Swift3Parser.T__63 - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Swift3Parser.T__64 - 65)) | (1 << (Swift3Parser.T__65 - 65)) | (1 << (Swift3Parser.T__66 - 65)) | (1 << (Swift3Parser.T__67 - 65)) | (1 << (Swift3Parser.T__68 - 65)) | (1 << (Swift3Parser.T__69 - 65)) | (1 << (Swift3Parser.T__70 - 65)) | (1 << (Swift3Parser.T__71 - 65)) | (1 << (Swift3Parser.T__72 - 65)) | (1 << (Swift3Parser.T__73 - 65)) | (1 << (Swift3Parser.T__74 - 65)) | (1 << (Swift3Parser.T__75 - 65)) | (1 << (Swift3Parser.T__76 - 65)) | (1 << (Swift3Parser.T__77 - 65)) | (1 << (Swift3Parser.T__78 - 65)) | (1 << (Swift3Parser.T__79 - 65)) | (1 << (Swift3Parser.T__80 - 65)) | (1 << (Swift3Parser.T__81 - 65)) | (1 << (Swift3Parser.T__82 - 65)) | (1 << (Swift3Parser.T__83 - 65)) | (1 << (Swift3Parser.T__86 - 65)) | (1 << (Swift3Parser.T__93 - 65)) | (1 << (Swift3Parser.T__94 - 65)) | (1 << (Swift3Parser.T__95 - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (Swift3Parser.T__96 - 97)) | (1 << (Swift3Parser.T__98 - 97)) | (1 << (Swift3Parser.T__100 - 97)) | (1 << (Swift3Parser.T__101 - 97)) | (1 << (Swift3Parser.T__102 - 97)) | (1 << (Swift3Parser.T__109 - 97)) | (1 << (Swift3Parser.T__110 - 97)) | (1 << (Swift3Parser.T__111 - 97)) | (1 << (Swift3Parser.T__112 - 97)) | (1 << (Swift3Parser.T__113 - 97)) | (1 << (Swift3Parser.T__115 - 97)) | (1 << (Swift3Parser.T__116 - 97)) | (1 << (Swift3Parser.T__117 - 97)) | (1 << (Swift3Parser.T__118 - 97)) | (1 << (Swift3Parser.T__119 - 97)) | (1 << (Swift3Parser.T__120 - 97)) | (1 << (Swift3Parser.T__121 - 97)) | (1 << (Swift3Parser.T__122 - 97)) | (1 << (Swift3Parser.T__123 - 97)) | (1 << (Swift3Parser.T__124 - 97)) | (1 << (Swift3Parser.T__125 - 97)) | (1 << (Swift3Parser.T__126 - 97)) | (1 << (Swift3Parser.T__127 - 97)))) !== 0) || _la === Swift3Parser.T__128)) {
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
		this.enterRule(_localctx, 526, Swift3Parser.RULE_assignment_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2669;
			if (!(SwiftSupport.isBinaryOp(_input))) {
				throw new FailedPredicateException(this, "SwiftSupport.isBinaryOp(_input)");
			}
			this.state = 2670;
			this.match(Swift3Parser.EQUAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 528, Swift3Parser.RULE_negate_prefix_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2672;
			if (!(SwiftSupport.isPrefixOp(_input))) {
				throw new FailedPredicateException(this, "SwiftSupport.isPrefixOp(_input)");
			}
			this.state = 2673;
			this.match(Swift3Parser.SUB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compilation_condition_AND(): Compilation_condition_ANDContext {
		let _localctx: Compilation_condition_ANDContext = new Compilation_condition_ANDContext(this._ctx, this.state);
		this.enterRule(_localctx, 530, Swift3Parser.RULE_compilation_condition_AND);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2675;
			if (!(SwiftSupport.isOperator(_input,"&&"))) {
				throw new FailedPredicateException(this, "SwiftSupport.isOperator(_input,\"&&\")");
			}
			this.state = 2676;
			this.match(Swift3Parser.AND);
			this.state = 2677;
			this.match(Swift3Parser.AND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compilation_condition_OR(): Compilation_condition_ORContext {
		let _localctx: Compilation_condition_ORContext = new Compilation_condition_ORContext(this._ctx, this.state);
		this.enterRule(_localctx, 532, Swift3Parser.RULE_compilation_condition_OR);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2679;
			if (!(SwiftSupport.isOperator(_input,"||"))) {
				throw new FailedPredicateException(this, "SwiftSupport.isOperator(_input,\"||\")");
			}
			this.state = 2680;
			this.match(Swift3Parser.OR);
			this.state = 2681;
			this.match(Swift3Parser.OR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compilation_condition_GE(): Compilation_condition_GEContext {
		let _localctx: Compilation_condition_GEContext = new Compilation_condition_GEContext(this._ctx, this.state);
		this.enterRule(_localctx, 534, Swift3Parser.RULE_compilation_condition_GE);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2683;
			if (!(SwiftSupport.isOperator(_input,">="))) {
				throw new FailedPredicateException(this, "SwiftSupport.isOperator(_input,\">=\")");
			}
			this.state = 2684;
			this.match(Swift3Parser.GT);
			this.state = 2685;
			this.match(Swift3Parser.EQUAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 536, Swift3Parser.RULE_arrow_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2687;
			if (!(SwiftSupport.isOperator(_input,"->"))) {
				throw new FailedPredicateException(this, "SwiftSupport.isOperator(_input,\"->\")");
			}
			this.state = 2688;
			this.match(Swift3Parser.SUB);
			this.state = 2689;
			this.match(Swift3Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 538, Swift3Parser.RULE_range_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2691;
			if (!(SwiftSupport.isOperator(_input,"..."))) {
				throw new FailedPredicateException(this, "SwiftSupport.isOperator(_input,\"...\")");
			}
			this.state = 2692;
			this.match(Swift3Parser.DOT);
			this.state = 2693;
			this.match(Swift3Parser.DOT);
			this.state = 2694;
			this.match(Swift3Parser.DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 540, Swift3Parser.RULE_same_type_equals);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2696;
			if (!(SwiftSupport.isOperator(_input,"=="))) {
				throw new FailedPredicateException(this, "SwiftSupport.isOperator(_input,\"==\")");
			}
			this.state = 2697;
			this.match(Swift3Parser.EQUAL);
			this.state = 2698;
			this.match(Swift3Parser.EQUAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 542, Swift3Parser.RULE_binary_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2700;
			if (!(SwiftSupport.isBinaryOp(_input))) {
				throw new FailedPredicateException(this, "SwiftSupport.isBinaryOp(_input)");
			}
			this.state = 2701;
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
		this.enterRule(_localctx, 544, Swift3Parser.RULE_prefix_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2703;
			if (!(SwiftSupport.isPrefixOp(_input))) {
				throw new FailedPredicateException(this, "SwiftSupport.isPrefixOp(_input)");
			}
			this.state = 2704;
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
		this.enterRule(_localctx, 546, Swift3Parser.RULE_postfix_operator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2706;
			if (!(SwiftSupport.isPostfixOp(_input))) {
				throw new FailedPredicateException(this, "SwiftSupport.isPostfixOp(_input)");
			}
			this.state = 2707;
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
		this.enterRule(_localctx, 548, Swift3Parser.RULE_operator);
		try {
			let _alt: number;
			this.state = 2725;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.LT:
			case Swift3Parser.GT:
			case Swift3Parser.BANG:
			case Swift3Parser.QUESTION:
			case Swift3Parser.AND:
			case Swift3Parser.SUB:
			case Swift3Parser.EQUAL:
			case Swift3Parser.OR:
			case Swift3Parser.DIV:
			case Swift3Parser.ADD:
			case Swift3Parser.MUL:
			case Swift3Parser.MOD:
			case Swift3Parser.CARET:
			case Swift3Parser.TILDE:
			case Swift3Parser.Operator_head_other:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2709;
				this.operator_head();
				this.state = 2714;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 309, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2710;
						if (!(_input.get(_input.index()-1).getType()!=WS)) {
							throw new FailedPredicateException(this, "_input.get(_input.index()-1).getType()!=WS");
						}
						this.state = 2711;
						this.operator_character();
						}
						}
					}
					this.state = 2716;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 309, this._ctx);
				}
				}
				break;
			case Swift3Parser.DOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2717;
				this.dot_operator_head();
				this.state = 2722;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 310, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2718;
						if (!(_input.get(_input.index()-1).getType()!=WS)) {
							throw new FailedPredicateException(this, "_input.get(_input.index()-1).getType()!=WS");
						}
						this.state = 2719;
						this.dot_operator_character();
						}
						}
					}
					this.state = 2724;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 310, this._ctx);
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
		this.enterRule(_localctx, 550, Swift3Parser.RULE_operator_character);
		try {
			this.state = 2729;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.LT:
			case Swift3Parser.GT:
			case Swift3Parser.BANG:
			case Swift3Parser.QUESTION:
			case Swift3Parser.AND:
			case Swift3Parser.SUB:
			case Swift3Parser.EQUAL:
			case Swift3Parser.OR:
			case Swift3Parser.DIV:
			case Swift3Parser.ADD:
			case Swift3Parser.MUL:
			case Swift3Parser.MOD:
			case Swift3Parser.CARET:
			case Swift3Parser.TILDE:
			case Swift3Parser.Operator_head_other:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2727;
				this.operator_head();
				}
				break;
			case Swift3Parser.Operator_following_character:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2728;
				this.match(Swift3Parser.Operator_following_character);
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
		this.enterRule(_localctx, 552, Swift3Parser.RULE_operator_head);
		let _la: number;
		try {
			this.state = 2733;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.LT:
			case Swift3Parser.GT:
			case Swift3Parser.BANG:
			case Swift3Parser.QUESTION:
			case Swift3Parser.AND:
			case Swift3Parser.SUB:
			case Swift3Parser.EQUAL:
			case Swift3Parser.OR:
			case Swift3Parser.DIV:
			case Swift3Parser.ADD:
			case Swift3Parser.MUL:
			case Swift3Parser.MOD:
			case Swift3Parser.CARET:
			case Swift3Parser.TILDE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2731;
				_la = this._input.LA(1);
				if (!(((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (Swift3Parser.LT - 142)) | (1 << (Swift3Parser.GT - 142)) | (1 << (Swift3Parser.BANG - 142)) | (1 << (Swift3Parser.QUESTION - 142)) | (1 << (Swift3Parser.AND - 142)) | (1 << (Swift3Parser.SUB - 142)) | (1 << (Swift3Parser.EQUAL - 142)) | (1 << (Swift3Parser.OR - 142)) | (1 << (Swift3Parser.DIV - 142)) | (1 << (Swift3Parser.ADD - 142)) | (1 << (Swift3Parser.MUL - 142)) | (1 << (Swift3Parser.MOD - 142)) | (1 << (Swift3Parser.CARET - 142)) | (1 << (Swift3Parser.TILDE - 142)))) !== 0))) {
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
			case Swift3Parser.Operator_head_other:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2732;
				this.match(Swift3Parser.Operator_head_other);
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
		this.enterRule(_localctx, 554, Swift3Parser.RULE_dot_operator_head);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2735;
			this.match(Swift3Parser.DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 556, Swift3Parser.RULE_dot_operator_character);
		try {
			this.state = 2739;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Swift3Parser.DOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2737;
				this.match(Swift3Parser.DOT);
				}
				break;
			case Swift3Parser.LT:
			case Swift3Parser.GT:
			case Swift3Parser.BANG:
			case Swift3Parser.QUESTION:
			case Swift3Parser.AND:
			case Swift3Parser.SUB:
			case Swift3Parser.EQUAL:
			case Swift3Parser.OR:
			case Swift3Parser.DIV:
			case Swift3Parser.ADD:
			case Swift3Parser.MUL:
			case Swift3Parser.MOD:
			case Swift3Parser.CARET:
			case Swift3Parser.TILDE:
			case Swift3Parser.Operator_head_other:
			case Swift3Parser.Operator_following_character:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2738;
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
		this.enterRule(_localctx, 558, Swift3Parser.RULE_literal);
		try {
			this.state = 2745;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 315, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2741;
				this.numeric_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2742;
				this.string_literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2743;
				this.boolean_literal();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2744;
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
		this.enterRule(_localctx, 560, Swift3Parser.RULE_numeric_literal);
		try {
			this.state = 2755;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 318, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2748;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 316, this._ctx) ) {
				case 1:
					{
					this.state = 2747;
					this.negate_prefix_operator();
					}
					break;
				}
				this.state = 2750;
				this.integer_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2752;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 317, this._ctx) ) {
				case 1:
					{
					this.state = 2751;
					this.negate_prefix_operator();
					}
					break;
				}
				this.state = 2754;
				this.match(Swift3Parser.Floating_point_literal);
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
		this.enterRule(_localctx, 562, Swift3Parser.RULE_boolean_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2757;
			_la = this._input.LA(1);
			if (!(_la === Swift3Parser.T__126 || _la === Swift3Parser.T__128)) {
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
		this.enterRule(_localctx, 564, Swift3Parser.RULE_nil_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2759;
			this.match(Swift3Parser.T__127);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 566, Swift3Parser.RULE_integer_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2761;
			_la = this._input.LA(1);
			if (!(((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (Swift3Parser.Binary_literal - 161)) | (1 << (Swift3Parser.Octal_literal - 161)) | (1 << (Swift3Parser.Decimal_literal - 161)) | (1 << (Swift3Parser.Pure_decimal_digits - 161)) | (1 << (Swift3Parser.Hexadecimal_literal - 161)))) !== 0))) {
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
		this.enterRule(_localctx, 568, Swift3Parser.RULE_string_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2763;
			_la = this._input.LA(1);
			if (!(_la === Swift3Parser.Static_string_literal || _la === Swift3Parser.Interpolated_string_literal)) {
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
		case 3:
			return this.statements_impl_sempred(_localctx as Statements_implContext, predIndex);

		case 49:
			return this.compilation_condition_sempred(_localctx as Compilation_conditionContext, predIndex);

		case 173:
			return this.pattern_sempred(_localctx as PatternContext, predIndex);

		case 189:
			return this.any_punctuation_for_balanced_token_sempred(_localctx as Any_punctuation_for_balanced_tokenContext, predIndex);

		case 231:
			return this.postfix_expression_sempred(_localctx as Postfix_expressionContext, predIndex);

		case 239:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 263:
			return this.assignment_operator_sempred(_localctx as Assignment_operatorContext, predIndex);

		case 264:
			return this.negate_prefix_operator_sempred(_localctx as Negate_prefix_operatorContext, predIndex);

		case 265:
			return this.compilation_condition_AND_sempred(_localctx as Compilation_condition_ANDContext, predIndex);

		case 266:
			return this.compilation_condition_OR_sempred(_localctx as Compilation_condition_ORContext, predIndex);

		case 267:
			return this.compilation_condition_GE_sempred(_localctx as Compilation_condition_GEContext, predIndex);

		case 268:
			return this.arrow_operator_sempred(_localctx as Arrow_operatorContext, predIndex);

		case 269:
			return this.range_operator_sempred(_localctx as Range_operatorContext, predIndex);

		case 270:
			return this.same_type_equals_sempred(_localctx as Same_type_equalsContext, predIndex);

		case 271:
			return this.binary_operator_sempred(_localctx as Binary_operatorContext, predIndex);

		case 272:
			return this.prefix_operator_sempred(_localctx as Prefix_operatorContext, predIndex);

		case 273:
			return this.postfix_operator_sempred(_localctx as Postfix_operatorContext, predIndex);

		case 274:
			return this.operator_sempred(_localctx as OperatorContext, predIndex);
		}
		return true;
	}
	private statements_impl_sempred(_localctx: Statements_implContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return SwiftSupport.isSeparatedStatement(_input, _localctx.indexBefore);
		}
		return true;
	}
	private compilation_condition_sempred(_localctx: Compilation_conditionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);

		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private pattern_sempred(_localctx: PatternContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private any_punctuation_for_balanced_token_sempred(_localctx: Any_punctuation_for_balanced_tokenContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return SwiftSupport.isPrefixOp(_input);

		case 5:
			return SwiftSupport.isPostfixOp(_input);
		}
		return true;
	}
	private postfix_expression_sempred(_localctx: Postfix_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 12);

		case 7:
			return this.precpred(this._ctx, 11);

		case 8:
			return this.precpred(this._ctx, 10);

		case 9:
			return this.precpred(this._ctx, 9);

		case 10:
			return this.precpred(this._ctx, 8);

		case 11:
			return this.precpred(this._ctx, 7);

		case 12:
			return this.precpred(this._ctx, 6);

		case 13:
			return this.precpred(this._ctx, 5);

		case 14:
			return this.precpred(this._ctx, 4);

		case 15:
			return this.precpred(this._ctx, 3);

		case 16:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 17:
			return this.precpred(this._ctx, 7);

		case 18:
			return this.precpred(this._ctx, 6);

		case 19:
			return this.precpred(this._ctx, 4);

		case 20:
			return this.precpred(this._ctx, 3);
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
	private compilation_condition_AND_sempred(_localctx: Compilation_condition_ANDContext, predIndex: number): boolean {
		switch (predIndex) {
		case 23:
			return SwiftSupport.isOperator(_input,"&&");
		}
		return true;
	}
	private compilation_condition_OR_sempred(_localctx: Compilation_condition_ORContext, predIndex: number): boolean {
		switch (predIndex) {
		case 24:
			return SwiftSupport.isOperator(_input,"||");
		}
		return true;
	}
	private compilation_condition_GE_sempred(_localctx: Compilation_condition_GEContext, predIndex: number): boolean {
		switch (predIndex) {
		case 25:
			return SwiftSupport.isOperator(_input,">=");
		}
		return true;
	}
	private arrow_operator_sempred(_localctx: Arrow_operatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 26:
			return SwiftSupport.isOperator(_input,"->");
		}
		return true;
	}
	private range_operator_sempred(_localctx: Range_operatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 27:
			return SwiftSupport.isOperator(_input,"...");
		}
		return true;
	}
	private same_type_equals_sempred(_localctx: Same_type_equalsContext, predIndex: number): boolean {
		switch (predIndex) {
		case 28:
			return SwiftSupport.isOperator(_input,"==");
		}
		return true;
	}
	private binary_operator_sempred(_localctx: Binary_operatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 29:
			return SwiftSupport.isBinaryOp(_input);
		}
		return true;
	}
	private prefix_operator_sempred(_localctx: Prefix_operatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 30:
			return SwiftSupport.isPrefixOp(_input);
		}
		return true;
	}
	private postfix_operator_sempred(_localctx: Postfix_operatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 31:
			return SwiftSupport.isPostfixOp(_input);
		}
		return true;
	}
	private operator_sempred(_localctx: OperatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 32:
			return _input.get(_input.index()-1).getType()!=WS;

		case 33:
			return _input.get(_input.index()-1).getType()!=WS;
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xAD\u0AD0\x04" +
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
		"\x04\xFF\t\xFF\x04\u0100\t\u0100\x04\u0101\t\u0101\x04\u0102\t\u0102\x04" +
		"\u0103\t\u0103\x04\u0104\t\u0104\x04\u0105\t\u0105\x04\u0106\t\u0106\x04" +
		"\u0107\t\u0107\x04\u0108\t\u0108\x04\u0109\t\u0109\x04\u010A\t\u010A\x04" +
		"\u010B\t\u010B\x04\u010C\t\u010C\x04\u010D\t\u010D\x04\u010E\t\u010E\x04" +
		"\u010F\t\u010F\x04\u0110\t\u0110\x04\u0111\t\u0111\x04\u0112\t\u0112\x04" +
		"\u0113\t\u0113\x04\u0114\t\u0114\x04\u0115\t\u0115\x04\u0116\t\u0116\x04" +
		"\u0117\t\u0117\x04\u0118\t\u0118\x04\u0119\t\u0119\x04\u011A\t\u011A\x04" +
		"\u011B\t\u011B\x04\u011C\t\u011C\x04\u011D\t\u011D\x04\u011E\t\u011E\x03" +
		"\x02\x05\x02\u023E\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\u0244" +
		"\n\x03\x03\x03\x03\x03\x05\x03\u0248\n\x03\x03\x03\x03\x03\x05\x03\u024C" +
		"\n\x03\x03\x03\x03\x03\x05\x03\u0250\n\x03\x03\x03\x03\x03\x05\x03\u0254" +
		"\n\x03\x03\x03\x03\x03\x05\x03\u0258\n\x03\x03\x03\x03\x03\x05\x03\u025C" +
		"\n\x03\x03\x03\x03\x03\x05\x03\u0260\n\x03\x03\x03\x03\x03\x05\x03\u0264" +
		"\n\x03\x05\x03\u0266\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05\u026E\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0274" +
		"\n\x06\x03\x07\x03\x07\x05\x07\u0278\n\x07\x03\x07\x03\x07\x05\x07\u027C" +
		"\n\x07\x03\x07\x03\x07\x05\x07\u0280\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\u0286\n\x07\x03\x07\x03\x07\x05\x07\u028A\n\x07\x03\x07\x03" +
		"\x07\x05\x07\u028E\n\x07\x03\x07\x03\x07\x05\x07\u0292\n\x07\x03\b\x03" +
		"\b\x05\b\u0296\n\b\x03\t\x03\t\x05\t\u029A\n\t\x03\t\x03\t\x03\t\x03\t" +
		"\x05\t\u02A0\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v" +
		"\x07\v\u02AB\n\v\f\v\x0E\v\u02AE\v\v\x03\f\x03\f\x03\f\x03\f\x05\f\u02B4" +
		"\n\f\x03\r\x03\r\x03\r\x03\r\x05\r\u02BA\n\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u02C4\n\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u02CE\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x05\x11\u02D4\n\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x05\x12\u02DA\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x05\x14\u02E5\n\x14\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x05\x15\u02EB\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x05\x16\u02F3\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x05\x18\u02FB\n\x18\x03\x18\x03\x18\x05\x18\u02FF\n\x18\x03\x18\x03\x18" +
		"\x03\x18\x05\x18\u0304\n\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u031A\n\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x05\x1F\u0326\n\x1F\x03 \x03 \x05 \u032A\n \x03!\x03!\x05!\u032E\n!\x03" +
		"\"\x03\"\x03#\x03#\x05#\u0334\n#\x03$\x03$\x03$\x03%\x03%\x03%\x03&\x03" +
		"&\x03&\x05&\u033F\n&\x03\'\x03\'\x05\'\u0343\n\'\x03(\x03(\x05(\u0347" +
		"\n(\x03(\x05(\u034A\n(\x03(\x03(\x03)\x03)\x05)\u0350\n)\x03*\x03*\x05" +
		"*\u0354\n*\x03*\x05*\u0357\n*\x03*\x03*\x03+\x03+\x03+\x05+\u035E\n+\x03" +
		",\x06,\u0361\n,\r,\x0E,\u0362\x03-\x03-\x03-\x05-\u0368\n-\x03.\x03.\x05" +
		".\u036C\n.\x03/\x03/\x030\x030\x031\x031\x032\x032\x033\x033\x033\x03" +
		"3\x033\x033\x033\x033\x033\x033\x053\u0380\n3\x033\x033\x033\x033\x03" +
		"3\x033\x033\x033\x073\u038A\n3\f3\x0E3\u038D\v3\x034\x034\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x054\u039F\n" +
		"4\x035\x035\x035\x035\x036\x036\x037\x037\x038\x038\x038\x038\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x038\x038\x058\u03B7\n8\x039\x039\x03" +
		":\x03:\x03;\x03;\x03;\x03;\x03;\x03<\x03<\x03<\x07<\u03C5\n<\f<\x0E<\u03C8" +
		"\v<\x03=\x03=\x03>\x03>\x03>\x03>\x03?\x03?\x03?\x07?\u03D3\n?\f?\x0E" +
		"?\u03D6\v?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u03E1\n@" +
		"\x03A\x03A\x03A\x03B\x03B\x03B\x07B\u03E9\nB\fB\x0EB\u03EC\vB\x03C\x03" +
		"C\x05C\u03F0\nC\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u03FA\nD" +
		"\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03G\x03G\x03G\x07G\u0407\nG" +
		"\fG\x0EG\u040A\vG\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u041E\nI\x03J\x06J\u0421\nJ" +
		"\rJ\x0EJ\u0422\x03K\x05K\u0426\nK\x03L\x03L\x05L\u042A\nL\x03L\x03L\x03" +
		"M\x05M\u042F\nM\x03M\x03M\x05M\u0433\nM\x03M\x03M\x03N\x03N\x03O\x03O" +
		"\x03O\x07O\u043C\nO\fO\x0EO\u043F\vO\x03P\x03P\x05P\u0443\nP\x03Q\x05" +
		"Q\u0446\nQ\x03Q\x05Q\u0449\nQ\x03Q\x03Q\x03Q\x03R\x03R\x03R\x07R\u0451" +
		"\nR\fR\x0ER\u0454\vR\x03S\x03S\x05S\u0458\nS\x03T\x03T\x03T\x03U\x03U" +
		"\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
		"U\x03U\x03U\x03U\x05U\u0470\nU\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x05" +
		"U\u0479\nU\x03U\x03U\x03U\x03U\x03U\x05U\u0480\nU\x03V\x05V\u0483\nV\x03" +
		"V\x05V\u0486\nV\x03V\x03V\x03W\x03W\x03X\x03X\x03X\x05X\u048F\nX\x03X" +
		"\x03X\x03X\x03X\x03X\x03X\x03X\x05X\u0498\nX\x03Y\x05Y\u049B\nY\x03Y\x05" +
		"Y\u049E\nY\x03Y\x03Y\x03Y\x03Z\x05Z\u04A4\nZ\x03Z\x05Z\u04A7\nZ\x03Z\x03" +
		"Z\x05Z\u04AB\nZ\x03Z\x03Z\x03[\x03[\x03[\x03[\x03\\\x03\\\x03\\\x05\\" +
		"\u04B6\n\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x05\\\u04BF\n\\\x03" +
		"]\x05]\u04C2\n]\x03]\x05]\u04C5\n]\x03]\x03]\x03^\x05^\u04CA\n^\x03^\x05" +
		"^\u04CD\n^\x03^\x03^\x03_\x03_\x03_\x05_\u04D4\n_\x03_\x03_\x03_\x03_" +
		"\x03_\x03_\x03_\x05_\u04DD\n_\x03`\x05`\u04E0\n`\x03`\x03`\x05`\u04E4" +
		"\n`\x03`\x03`\x03a\x05a\u04E9\na\x03a\x03a\x05a\u04ED\na\x03a\x03a\x03" +
		"b\x05b\u04F2\nb\x03b\x05b\u04F5\nb\x03b\x03b\x03b\x05b\u04FA\nb\x03b\x03" +
		"b\x03c\x03c\x03d\x03d\x03d\x03e\x03e\x03e\x05e\u0506\ne\x03e\x03e\x05" +
		"e\u050A\ne\x03e\x05e\u050D\ne\x03f\x05f\u0510\nf\x03f\x05f\u0513\nf\x03" +
		"f\x03f\x03g\x03g\x05g\u0519\ng\x03h\x03h\x05h\u051D\nh\x03h\x05h\u0520" +
		"\nh\x03h\x03h\x03h\x05h\u0525\nh\x05h\u0527\nh\x03i\x03i\x05i\u052B\n" +
		"i\x03i\x03i\x03j\x03j\x03k\x03k\x03k\x03k\x03k\x03k\x05k\u0537\nk\x03" +
		"l\x03l\x03l\x07l\u053C\nl\fl\x0El\u053F\vl\x03m\x05m\u0542\nm\x03m\x03" +
		"m\x03m\x05m\u0547\nm\x03m\x05m\u054A\nm\x03m\x03m\x03m\x03m\x05m\u0550" +
		"\nm\x03m\x03m\x03m\x03m\x05m\u0556\nm\x03n\x03n\x03o\x03o\x03p\x03p\x03" +
		"p\x03q\x05q\u0560\nq\x03q\x05q\u0563\nq\x03q\x03q\x05q\u0567\nq\x03q\x05" +
		"q\u056A\nq\x03q\x05q\u056D\nq\x03r\x05r\u0570\nr\x03r\x03r\x03r\x05r\u0575" +
		"\nr\x03r\x05r\u0578\nr\x03r\x05r\u057B\nr\x03r\x03r\x05r\u057F\nr\x03" +
		"r\x03r\x03s\x03s\x05s\u0585\ns\x03t\x03t\x03t\x05t\u058A\nt\x03u\x05u" +
		"\u058D\nu\x03u\x05u\u0590\nu\x03u\x03u\x03u\x03v\x03v\x03v\x03v\x03v\x05" +
		"v\u059A\nv\x03w\x03w\x05w\u059E\nw\x03x\x03x\x03y\x03y\x03z\x03z\x03z" +
		"\x05z\u05A7\nz\x03z\x03z\x05z\u05AB\nz\x03z\x03z\x03z\x03z\x03{\x03{\x05" +
		"{\u05B3\n{\x03|\x03|\x03|\x05|\u05B8\n|\x03}\x05}\u05BB\n}\x03}\x03}\x03" +
		"}\x03~\x03~\x03~\x03~\x03~\x05~\u05C5\n~\x03\x7F\x03\x7F\x05\x7F\u05C9" +
		"\n\x7F\x03\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x05\x81\u05D1\n" +
		"\x81\x03\x82\x05\x82\u05D4\n\x82\x03\x82\x05\x82\u05D7\n\x82\x03\x82\x03" +
		"\x82\x03\x82\x05\x82\u05DC\n\x82\x03\x82\x05\x82\u05DF\n\x82\x03\x82\x05" +
		"\x82\u05E2\n\x82\x03\x82\x03\x82\x03\x83\x03\x83\x03\x84\x03\x84\x07\x84" +
		"\u05EA\n\x84\f\x84\x0E\x84\u05ED\v\x84\x03\x84\x03\x84\x03\x85\x03\x85" +
		"\x05\x85\u05F3\n\x85\x03\x86\x05\x86\u05F6\n\x86\x03\x86\x05\x86\u05F9" +
		"\n\x86\x03\x86\x05\x86\u05FC\n\x86\x03\x86\x03\x86\x03\x86\x05\x86\u0601" +
		"\n\x86\x03\x86\x05\x86\u0604\n\x86\x03\x86\x05\x86\u0607\n\x86\x03\x86" +
		"\x03\x86\x03\x86\x05\x86\u060C\n\x86\x03\x86\x05\x86\u060F\n\x86\x03\x86" +
		"\x03\x86\x05\x86\u0613\n\x86\x03\x86\x03\x86\x03\x86\x05\x86\u0618\n\x86" +
		"\x03\x86\x05\x86\u061B\n\x86\x03\x86\x05\x86\u061E\n\x86\x03\x86\x03\x86" +
		"\x05\x86\u0622\n\x86\x03\x87\x03\x87\x03\x88\x03\x88\x07\x88\u0628\n\x88" +
		"\f\x88\x0E\x88\u062B\v\x88\x03\x88\x03\x88\x03\x89\x03\x89\x05\x89\u0631" +
		"\n\x89\x03\x8A\x05\x8A\u0634\n\x8A\x03\x8A\x05\x8A\u0637\n\x8A\x03\x8A" +
		"\x03\x8A\x03\x8A\x05\x8A\u063C\n\x8A\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x03" +
		"\x8C\x03\x8C\x07\x8C\u0644\n\x8C\f\x8C\x0E\x8C\u0647\v\x8C\x03\x8C\x03" +
		"\x8C\x03\x8D\x03\x8D\x05\x8D\u064D\n\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x05\x8E\u0655\n\x8E\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03" +
		"\x8F\x03\x90\x03\x90\x03\x90\x05\x90\u065F\n\x90\x03\x90\x03\x90\x05\x90" +
		"\u0663\n\x90\x03\x91\x03\x91\x05\x91\u0667\n\x91\x03\x91\x03\x91\x05\x91" +
		"\u066B\n\x91\x03\x91\x05\x91\u066E\n\x91\x03\x91\x03\x91\x05\x91\u0672" +
		"\n\x91\x03\x91\x03\x91\x03\x91\x05\x91\u0677\n\x91\x05\x91\u0679\n\x91" +
		"\x03\x92\x03\x92\x03\x92\x03\x92\x03\x93\x05\x93\u0680\n\x93\x03\x93\x05" +
		"\x93\u0683\n\x93\x03\x93\x03\x93\x03\x93\x05\x93\u0688\n\x93\x03\x93\x05" +
		"\x93\u068B\n\x93\x03\x94\x03\x94\x05\x94\u068F\n\x94\x03\x94\x03\x94\x05" +
		"\x94\u0693\n\x94\x03\x94\x05\x94\u0696\n\x94\x03\x94\x03\x94\x03\x94\x03" +
		"\x94\x05\x94\u069C\n\x94\x03\x94\x03\x94\x03\x94\x05\x94\u06A1\n\x94\x03" +
		"\x94\x03\x94\x05\x94\u06A5\n\x94\x03\x95\x05\x95\u06A8\n\x95\x03\x95\x05" +
		"\x95\u06AB\n\x95\x03\x95\x03\x95\x05\x95\u06AF\n\x95\x03\x95\x05\x95\u06B2" +
		"\n\x95\x03\x95\x03\x95\x03\x95\x05\x95\u06B7\n\x95\x03\x95\x05\x95\u06BA" +
		"\n\x95\x03\x95\x03\x95\x05\x95\u06BE\n\x95\x03\x96\x03\x96\x03\x97\x05" +
		"\x97\u06C3\n\x97\x03\x97\x03\x97\x03\x97\x03\x98\x05\x98\u06C9\n\x98\x03" +
		"\x98\x05\x98\u06CC\n\x98\x03\x98\x03\x98\x03\x98\x05\x98\u06D1\n\x98\x03" +
		"\x98\x03\x98\x03\x98\x05\x98\u06D6\n\x98\x03\x98\x05\x98\u06D9\n\x98\x03" +
		"\x98\x03\x98\x03\x98\x03\x98\x03\x98\x05\x98\u06E0\n\x98\x03\x99\x03\x99" +
		"\x07\x99\u06E4\n\x99\f\x99\x0E\x99\u06E7\v\x99\x03\x99\x03\x99\x03\x9A" +
		"\x03\x9A\x05\x9A\u06ED\n\x9A\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03" +
		"\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x05\x9B\u06FB\n\x9B" +
		"\x03\x9C\x05\x9C\u06FE\n\x9C\x03\x9C\x05\x9C\u0701\n\x9C\x03\x9C\x03\x9C" +
		"\x03\x9C\x03\x9D\x03\x9D\x05\x9D\u0708\n\x9D\x03\x9D\x03\x9D\x03\x9E\x03" +
		"\x9E\x03\x9E\x05\x9E\u070F\n\x9E\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\xA0" +
		"\x03\xA0\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x05\xA1\u071D" +
		"\n\xA1\x03\xA2\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x07\xA3" +
		"\u0726\n\xA3\f\xA3\x0E\xA3\u0729\v\xA3\x03\xA3\x03\xA3\x03\xA4\x03\xA4" +
		"\x03\xA4\x05\xA4\u0730\n\xA4\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03" +
		"\xA5\x05\xA5\u0738\n\xA5\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA7\x03\xA7" +
		"\x03\xA7\x03\xA7\x03\xA8\x03\xA8\x03\xA9\x03\xA9\x03\xA9\x07\xA9\u0747" +
		"\n\xA9\f\xA9\x0E\xA9\u074A\v\xA9\x03\xAA\x03\xAA\x03\xAB\x03\xAB\x03\xAB" +
		"\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB" +
		"\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB" +
		"\x03\xAB\x03\xAB\x03\xAB\x05\xAB\u0766\n\xAB\x03\xAC\x06\xAC\u0769\n\xAC" +
		"\r\xAC\x0E\xAC\u076A\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03" +
		"\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03" +
		"\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03" +
		"\xAD\x05\xAD\u0786\n\xAD\x03\xAE\x03\xAE\x03\xAF\x03\xAF\x03\xAF\x05\xAF" +
		"\u078D\n\xAF\x03\xAF\x03\xAF\x05\xAF\u0791\n\xAF\x03\xAF\x03\xAF\x03\xAF" +
		"\x05\xAF\u0796\n\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x05\xAF\u079D" +
		"\n\xAF\x03\xAF\x03\xAF\x03\xAF\x07\xAF\u07A2\n\xAF\f\xAF\x0E\xAF\u07A5" +
		"\v\xAF\x03\xB0\x03\xB0\x03\xB1\x03\xB1\x03\xB2\x03\xB2\x03\xB2\x03\xB2" +
		"\x05\xB2\u07AF\n\xB2\x03\xB3\x03\xB3\x05\xB3\u07B3\n\xB3\x03\xB3\x03\xB3" +
		"\x03\xB4\x03\xB4\x03\xB4\x07\xB4\u07BA\n\xB4\f\xB4\x0E\xB4\u07BD\v\xB4" +
		"\x03\xB5\x03\xB5\x03\xB6\x05\xB6\u07C2\n\xB6\x03\xB6\x03\xB6\x03\xB6\x05" +
		"\xB6\u07C7\n\xB6\x03\xB7\x03\xB7\x03\xB7\x03\xB8\x03\xB8\x03\xB9\x03\xB9" +
		"\x03\xB9\x05\xB9\u07D1\n\xB9\x03\xBA\x03\xBA\x03\xBB\x03\xBB\x03\xBB\x03" +
		"\xBB\x03\xBC\x06\xBC\u07DA\n\xBC\r\xBC\x0E\xBC\u07DB\x03\xBD\x07\xBD\u07DF" +
		"\n\xBD\f\xBD\x0E\xBD\u07E2\v\xBD\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE" +
		"\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE" +
		"\x03\xBE\x03\xBE\x03\xBE\x05\xBE\u07F5\n\xBE\x03\xBF\x03\xBF\x03\xBF\x03" +
		"\xBF\x03\xBF\x03\xBF\x05\xBF\u07FD\n\xBF\x03\xC0\x05\xC0\u0800\n\xC0\x03" +
		"\xC0\x03\xC0\x05\xC0\u0804\n\xC0\x03\xC1\x03\xC1\x03\xC1\x07\xC1\u0809" +
		"\n\xC1\f\xC1\x0E\xC1\u080C\v\xC1\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2" +
		"\x05\xC2\u0813\n\xC2\x03\xC3\x03\xC3\x03\xC3\x03\xC4\x03\xC4\x03\xC4\x03" +
		"\xC4\x03\xC4\x05\xC4\u081D\n\xC4\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x05\xC5\u0824\n\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u082A\n\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u082F\n\xC5\x03\xC6\x06\xC6\u0832\n\xC6" +
		"\r\xC6\x0E\xC6\u0833\x03\xC7\x03\xC7\x05\xC7\u0838\n\xC7\x03\xC7\x03\xC7" +
		"\x03\xC7\x03\xC8\x03\xC8\x03\xC8\x03\xC8\x03\xC8\x03\xC8\x03\xC8\x03\xC8" +
		"\x03\xC8\x03\xC8\x05\xC8\u0847\n\xC8\x03\xC9\x03\xC9\x05\xC9\u084B\n\xC9" +
		"\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9" +
		"\x03\xC9\x05\xC9\u0857\n\xC9\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03" +
		"\xCA\x03\xCA\x03\xCA\x05\xCA\u0861\n\xCA\x03\xCB\x03\xCB\x05\xCB\u0865" +
		"\n\xCB\x03\xCB\x03\xCB\x03\xCC\x03\xCC\x05\xCC\u086B\n\xCC\x03\xCC\x03" +
		"\xCC\x03\xCC\x03\xCC\x05\xCC\u0871\n\xCC\x03\xCD\x03\xCD\x03\xCE\x03\xCE" +
		"\x03\xCE\x03\xCE\x03\xCE\x03\xCE\x03\xCE\x05\xCE\u087C\n\xCE\x03\xCF\x03" +
		"\xCF\x05\xCF\u0880\n\xCF\x03\xCF\x03\xCF\x03\xCF\x03\xCF\x05\xCF\u0886" +
		"\n\xCF\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD1\x03\xD1\x03\xD1\x03\xD1" +
		"\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1" +
		"\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1" +
		"\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1" +
		"\x03\xD1\x03\xD1\x05\xD1\u08AD\n\xD1\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x03" +
		"\xD2\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x03" +
		"\xD2\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x05\xD2\u08C2\n\xD2\x03\xD3" +
		"\x03\xD3\x03\xD3\x05\xD3\u08C7\n\xD3\x03\xD4\x03\xD4\x03\xD4\x03\xD4\x03" +
		"\xD5\x03\xD5\x03\xD5\x03\xD5\x03\xD5\x03\xD6\x03\xD6\x03\xD6\x03\xD6\x03" +
		"\xD7\x03\xD7\x05\xD7\u08D8\n\xD7\x03\xD7\x05\xD7\u08DB\n\xD7\x03\xD7\x03" +
		"\xD7\x03\xD8\x05\xD8\u08E0\n\xD8\x03\xD8\x03\xD8\x05\xD8\u08E4\n\xD8\x03" +
		"\xD8\x05\xD8\u08E7\n\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x05\xD8" +
		"\u08EE\n\xD8\x03\xD9\x03\xD9\x03\xD9\x03\xD9\x03\xD9\x03\xD9\x03\xD9\x05" +
		"\xD9\u08F7\n\xD9\x03\xDA\x03\xDA\x03\xDA\x07\xDA\u08FC\n\xDA\f\xDA\x0E" +
		"\xDA\u08FF\v\xDA\x03\xDB\x03\xDB\x03\xDB\x07\xDB\u0904\n\xDB\f\xDB\x0E" +
		"\xDB\u0907\v\xDB\x03\xDC\x03\xDC\x05\xDC\u090B\n\xDC\x03\xDC\x03\xDC\x03" +
		"\xDC\x03\xDC\x05\xDC\u0911\n\xDC\x03\xDD\x03\xDD\x03\xDE\x03\xDE\x03\xDE" +
		"\x03\xDE\x03\xDF\x03\xDF\x03\xDF\x07\xDF\u091C\n\xDF\f\xDF\x0E\xDF\u091F" +
		"\v\xDF\x03\xE0\x05\xE0\u0922\n\xE0\x03\xE0\x03\xE0\x03\xE1\x03\xE1\x03" +
		"\xE2\x03\xE2\x03\xE2\x03\xE3\x03";
	private static readonly _serializedATNSegment1: string =
		"\xE3\x03\xE3\x03\xE3\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x06" +
		"\xE4\u0935\n\xE4\r\xE4\x0E\xE4\u0936\x03\xE4\x03\xE4\x05\xE4\u093B\n\xE4" +
		"\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x05\xE5\u0942\n\xE5\x03\xE6\x03" +
		"\xE6\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03" +
		"\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x05" +
		"\xE7\u0957\n\xE7\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE9\x03\xE9" +
		"\x03\xE9\x05\xE9\u0961\n\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03" +
		"\xE9\x05\xE9\u0969\n\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9" +
		"\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9" +
		"\x03\xE9\x03\xE9\x03\xE9\x05\xE9\u097D\n\xE9\x03\xE9\x03\xE9\x03\xE9\x03" +
		"\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03" +
		"\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x07\xE9\u0993" +
		"\n\xE9\f\xE9\x0E\xE9\u0996\v\xE9\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA" +
		"\x03\xEA\x05\xEA\u099E\n\xEA\x03\xEB\x03\xEB\x03\xEB\x07\xEB\u09A3\n\xEB" +
		"\f\xEB\x0E\xEB\u09A6\v\xEB\x03\xEC\x03\xEC\x03\xEC\x03\xEC\x03\xEC\x03" +
		"\xEC\x03\xEC\x03\xEC\x03\xEC\x03\xEC\x05\xEC\u09B2\n\xEC\x03\xED\x03\xED" +
		"\x03\xEE\x03\xEE\x07\xEE\u09B8\n\xEE\f\xEE\x0E\xEE\u09BB\v\xEE\x03\xEF" +
		"\x03\xEF\x03\xEF\x03\xF0\x03\xF0\x03\xF0\x03\xF0\x03\xF0\x03\xF0\x03\xF0" +
		"\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1" +
		"\x05\xF1\u09D0\n\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x03" +
		"\xF1\x03\xF1\x03\xF1\x03\xF1\x07\xF1\u09DC\n\xF1\f\xF1\x0E\xF1\u09DF\v" +
		"\xF1\x03\xF2\x03\xF2\x05\xF2\u09E3\n\xF2\x03\xF2\x05\xF2\u09E6\n\xF2\x03" +
		"\xF2\x03\xF2\x03\xF3\x03\xF3\x05\xF3\u09EC\n\xF3\x03\xF3\x03\xF3\x05\xF3" +
		"\u09F0\n\xF3\x03\xF4\x03\xF4\x03\xF5\x03\xF5\x05\xF5\u09F6\n\xF5\x03\xF5" +
		"\x03\xF5\x03\xF6\x03\xF6\x03\xF6\x03\xF6\x03\xF6\x05\xF6\u09FF\n\xF6\x03" +
		"\xF7\x03\xF7\x03\xF7\x03\xF7\x05\xF7\u0A05\n\xF7\x03\xF8\x03\xF8\x03\xF9" +
		"\x05\xF9\u0A0A\n\xF9\x03\xF9\x03\xF9\x05\xF9\u0A0E\n\xF9\x03\xF9\x03\xF9" +
		"\x03\xF9\x03\xF9\x05\xF9\u0A14\n\xF9\x03\xF9\x03\xF9\x03\xF9\x03\xF9\x03" +
		"\xF9\x05\xF9\u0A1B\n\xF9\x03\xFA\x03\xFA\x03\xFA\x03\xFA\x03\xFA\x05\xFA" +
		"\u0A22\n\xFA\x03\xFA\x03\xFA\x05\xFA\u0A26\n\xFA\x03\xFB\x03\xFB\x03\xFB" +
		"\x03\xFB\x03\xFB\x05\xFB\u0A2D\n\xFB\x03\xFC\x05\xFC\u0A30\n\xFC\x03\xFC" +
		"\x05\xFC\u0A33\n\xFC\x03\xFC\x03\xFC\x03\xFC\x03\xFC\x05\xFC\u0A39\n\xFC" +
		"\x03\xFD\x03\xFD\x03\xFE\x03\xFE\x03\xFE\x03\xFE\x03\xFF\x03\xFF\x03\xFF" +
		"\x03\xFF\x03\xFF\x03\xFF\x03\u0100\x03\u0100\x03\u0100\x06\u0100\u0A4A" +
		"\n\u0100\r\u0100\x0E\u0100\u0A4B\x03\u0101\x03\u0101\x03\u0102\x03\u0102" +
		"\x03\u0102\x03\u0102\x03\u0102\x03\u0102\x03\u0102\x03\u0102\x03\u0102" +
		"\x05\u0102\u0A59\n\u0102\x03\u0103\x03\u0103\x03\u0103\x03\u0103\x03\u0103" +
		"\x05\u0103\u0A60\n\u0103\x03\u0104\x03\u0104\x03\u0105\x03\u0105\x05\u0105" +
		"\u0A66\n\u0105\x03\u0106\x03\u0106\x05\u0106\u0A6A\n\u0106\x03\u0107\x03" +
		"\u0107\x03\u0108\x03\u0108\x03\u0109\x03\u0109\x03\u0109\x03\u010A\x03" +
		"\u010A\x03\u010A\x03\u010B\x03\u010B\x03\u010B\x03\u010B\x03\u010C\x03" +
		"\u010C\x03\u010C\x03\u010C\x03\u010D\x03\u010D\x03\u010D\x03\u010D\x03" +
		"\u010E\x03\u010E\x03\u010E\x03\u010E\x03\u010F\x03\u010F\x03\u010F\x03" +
		"\u010F\x03\u010F\x03\u0110\x03\u0110\x03\u0110\x03\u0110\x03\u0111\x03" +
		"\u0111\x03\u0111\x03\u0112\x03\u0112\x03\u0112\x03\u0113\x03\u0113\x03" +
		"\u0113\x03\u0114\x03\u0114\x03\u0114\x07\u0114\u0A9B\n\u0114\f\u0114\x0E" +
		"\u0114\u0A9E\v\u0114\x03\u0114\x03\u0114\x03\u0114\x07\u0114\u0AA3\n\u0114" +
		"\f\u0114\x0E\u0114\u0AA6\v\u0114\x05\u0114\u0AA8\n\u0114\x03\u0115\x03" +
		"\u0115\x05\u0115\u0AAC\n\u0115\x03\u0116\x03\u0116\x05\u0116\u0AB0\n\u0116" +
		"\x03\u0117\x03\u0117\x03\u0118\x03\u0118\x05\u0118\u0AB6\n\u0118\x03\u0119" +
		"\x03\u0119\x03\u0119\x03\u0119\x05\u0119\u0ABC\n\u0119\x03\u011A\x05\u011A" +
		"\u0ABF\n\u011A\x03\u011A\x03\u011A\x05\u011A\u0AC3\n\u011A\x03\u011A\x05" +
		"\u011A\u0AC6\n\u011A\x03\u011B\x03\u011B\x03\u011C\x03\u011C\x03\u011D" +
		"\x03\u011D\x03\u011E\x03\u011E\x03\u011E\x02\x02\x06d\u015C\u01D0\u01E0" +
		"\u011F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
		"`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02" +
		"|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E" +
		"\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0" +
		"\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2" +
		"\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4" +
		"\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6" +
		"\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8" +
		"\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA" +
		"\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02" +
		"\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02" +
		"\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02" +
		"\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02" +
		"\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02" +
		"\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E\x02" +
		"\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C\x02" +
		"\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A\x02" +
		"\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176\x02\u0178\x02" +
		"\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02\u0184\x02\u0186\x02" +
		"\u0188\x02\u018A\x02\u018C\x02\u018E\x02\u0190\x02\u0192\x02\u0194\x02" +
		"\u0196\x02\u0198\x02\u019A\x02\u019C\x02\u019E\x02\u01A0\x02\u01A2\x02" +
		"\u01A4\x02\u01A6\x02\u01A8\x02\u01AA\x02\u01AC\x02\u01AE\x02\u01B0\x02" +
		"\u01B2\x02\u01B4\x02\u01B6\x02\u01B8\x02\u01BA\x02\u01BC\x02\u01BE\x02" +
		"\u01C0\x02\u01C2\x02\u01C4\x02\u01C6\x02\u01C8\x02\u01CA\x02\u01CC\x02" +
		"\u01CE\x02\u01D0\x02\u01D2\x02\u01D4\x02\u01D6\x02\u01D8\x02\u01DA\x02" +
		"\u01DC\x02\u01DE\x02\u01E0\x02\u01E2\x02\u01E4\x02\u01E6\x02\u01E8\x02" +
		"\u01EA\x02\u01EC\x02\u01EE\x02\u01F0\x02\u01F2\x02\u01F4\x02\u01F6\x02" +
		"\u01F8\x02\u01FA\x02\u01FC\x02\u01FE\x02\u0200\x02\u0202\x02\u0204\x02" +
		"\u0206\x02\u0208\x02\u020A\x02\u020C\x02\u020E\x02\u0210\x02\u0212\x02" +
		"\u0214\x02\u0216\x02\u0218\x02\u021A\x02\u021C\x02\u021E\x02\u0220\x02" +
		"\u0222\x02\u0224\x02\u0226\x02\u0228\x02\u022A\x02\u022C\x02\u022E\x02" +
		"\u0230\x02\u0232\x02\u0234\x02\u0236\x02\u0238\x02\u023A\x02\x02\x0E\x04" +
		"\x02\x84\x84\x9C\x9C\x04\x02\b\b$)\x03\x02@B\x03\x02ST\x07\x02WX\x86\x86" +
		"\x8D\x8F\x94\x95\x98\x98\x05\x02JJMMjk\x0F\x02\x1C\x1E !*-01779:<HJMR" +
		"T`ceepsv\x80\r\x02\x03\x06\t\x17\x1C\x1E !#VYY`ceegiptv\x83\x05\x02\x90" +
		"\x91\x93\x94\x96\x9F\x04\x02\x81\x81\x83\x83\x03\x02\xA3\xA7\x03\x02\xA9" +
		"\xAA\x02\u0B7F\x02\u023D\x03\x02\x02\x02\x04\u0265\x03\x02\x02\x02\x06" +
		"\u0267\x03\x02\x02\x02\b\u0269\x03\x02\x02\x02\n\u0273\x03\x02\x02\x02" +
		"\f\u0291\x03\x02\x02\x02\x0E\u0295\x03\x02\x02\x02\x10\u0297\x03\x02\x02" +
		"\x02\x12\u02A3\x03\x02\x02\x02\x14\u02A7\x03\x02\x02\x02\x16\u02B3\x03" +
		"\x02\x02\x02\x18\u02B5\x03\x02\x02\x02\x1A\u02C3\x03\x02\x02\x02\x1C\u02C5" +
		"\x03\x02\x02\x02\x1E\u02CD\x03\x02\x02\x02 \u02CF\x03\x02\x02\x02\"\u02D9" +
		"\x03\x02\x02\x02$\u02DB\x03\x02\x02\x02&\u02E0\x03\x02\x02\x02(\u02E8" +
		"\x03\x02\x02\x02*\u02F2\x03\x02\x02\x02,\u02F4\x03\x02\x02\x02.\u0303" +
		"\x03\x02\x02\x020\u0305\x03\x02\x02\x022\u0308\x03\x02\x02\x024\u030B" +
		"\x03\x02\x02\x026\u0319\x03\x02\x02\x028\u031B\x03\x02\x02\x02:\u031E" +
		"\x03\x02\x02\x02<\u0325\x03\x02\x02\x02>\u0327\x03\x02\x02\x02@\u032B" +
		"\x03\x02\x02\x02B\u032F\x03\x02\x02\x02D\u0331\x03\x02\x02\x02F\u0335" +
		"\x03\x02\x02\x02H\u0338\x03\x02\x02\x02J\u033B\x03\x02\x02\x02L\u0340" +
		"\x03\x02\x02\x02N\u0344\x03\x02\x02\x02P\u034F\x03\x02\x02\x02R\u0351" +
		"\x03\x02\x02\x02T\u035A\x03\x02\x02\x02V\u0360\x03\x02\x02\x02X\u0364" +
		"\x03\x02\x02\x02Z\u0369\x03\x02\x02\x02\\\u036D\x03\x02\x02\x02^\u036F" +
		"\x03\x02\x02\x02`\u0371\x03\x02\x02\x02b\u0373\x03\x02\x02\x02d\u037F" +
		"\x03\x02\x02\x02f\u039E\x03\x02\x02\x02h\u03A0\x03\x02\x02\x02j\u03A4" +
		"\x03\x02\x02\x02l\u03A6\x03\x02\x02\x02n\u03B6\x03\x02\x02\x02p\u03B8" +
		"\x03\x02\x02\x02r\u03BA\x03\x02\x02\x02t\u03BC\x03\x02\x02\x02v\u03C1" +
		"\x03\x02\x02\x02x\u03C9\x03\x02\x02\x02z\u03CB\x03\x02\x02\x02|\u03CF" +
		"\x03\x02\x02\x02~\u03E0\x03\x02\x02\x02\x80\u03E2\x03\x02\x02\x02\x82" +
		"\u03E5\x03\x02\x02\x02\x84\u03EF\x03\x02\x02\x02\x86\u03F9\x03\x02\x02" +
		"\x02\x88\u03FB\x03\x02\x02\x02\x8A\u03FF\x03\x02\x02\x02\x8C\u0403\x03" +
		"\x02\x02\x02\x8E\u040B\x03\x02\x02\x02\x90\u041D\x03\x02\x02\x02\x92\u0420" +
		"\x03\x02\x02\x02\x94\u0425\x03\x02\x02\x02\x96\u0427\x03\x02\x02\x02\x98" +
		"\u042E\x03\x02\x02\x02\x9A\u0436\x03\x02\x02\x02\x9C\u0438\x03\x02\x02" +
		"\x02\x9E\u0442\x03\x02\x02\x02\xA0\u0445\x03\x02\x02\x02\xA2\u044D\x03" +
		"\x02\x02\x02\xA4\u0455\x03\x02\x02\x02\xA6\u0459\x03\x02\x02\x02\xA8\u047F" +
		"\x03\x02\x02\x02\xAA\u0482\x03\x02\x02\x02\xAC\u0489\x03\x02\x02\x02\xAE" +
		"\u0497\x03\x02\x02\x02\xB0\u049A\x03\x02\x02\x02\xB2\u04A3\x03\x02\x02" +
		"\x02\xB4\u04AE\x03\x02\x02\x02\xB6\u04BE\x03\x02\x02\x02\xB8\u04C1\x03" +
		"\x02\x02\x02\xBA\u04C9\x03\x02\x02\x02\xBC\u04DC\x03\x02\x02\x02\xBE\u04DF" +
		"\x03\x02\x02\x02\xC0\u04E8\x03\x02\x02\x02\xC2\u04F1\x03\x02\x02\x02\xC4" +
		"\u04FD\x03\x02\x02\x02\xC6\u04FF\x03\x02\x02\x02\xC8\u0502\x03\x02\x02" +
		"\x02\xCA\u050F\x03\x02\x02\x02\xCC\u0518\x03\x02\x02\x02\xCE\u0526\x03" +
		"\x02\x02\x02\xD0\u0528\x03\x02\x02\x02\xD2\u052E\x03\x02\x02\x02\xD4\u0536" +
		"\x03\x02\x02\x02\xD6\u0538\x03\x02\x02\x02\xD8\u0555\x03\x02\x02\x02\xDA" +
		"\u0557\x03\x02\x02\x02\xDC\u0559\x03\x02\x02\x02\xDE\u055B\x03\x02\x02" +
		"\x02\xE0\u056C\x03\x02\x02\x02\xE2\u056F\x03\x02\x02\x02\xE4\u0582\x03" +
		"\x02\x02\x02\xE6\u0589\x03\x02\x02\x02\xE8\u058C\x03\x02\x02\x02\xEA\u0599" +
		"\x03\x02\x02\x02\xEC\u059B\x03\x02\x02\x02\xEE\u059F\x03\x02\x02\x02\xF0" +
		"\u05A1\x03\x02\x02\x02\xF2\u05A3\x03\x02\x02\x02\xF4\u05B0\x03\x02\x02" +
		"\x02\xF6\u05B7\x03\x02\x02\x02\xF8\u05BA\x03\x02\x02\x02\xFA\u05C4\x03" +
		"\x02\x02\x02\xFC\u05C6\x03\x02\x02\x02\xFE\u05CA\x03\x02\x02\x02\u0100" +
		"\u05D0\x03\x02\x02\x02\u0102\u05D3\x03\x02\x02\x02\u0104\u05E5\x03\x02" +
		"\x02\x02\u0106\u05E7\x03\x02\x02\x02\u0108\u05F2\x03\x02\x02\x02\u010A" +
		"\u0621\x03\x02\x02\x02\u010C\u0623\x03\x02\x02\x02\u010E\u0625\x03\x02" +
		"\x02\x02\u0110\u0630\x03\x02\x02\x02\u0112\u0633\x03\x02\x02\x02\u0114" +
		"\u063F\x03\x02\x02\x02\u0116\u0641\x03\x02\x02\x02\u0118\u064C\x03\x02" +
		"\x02\x02\u011A\u0654\x03\x02\x02\x02\u011C\u0656\x03\x02\x02\x02\u011E" +
		"\u065B\x03\x02\x02\x02\u0120\u0678\x03\x02\x02\x02\u0122\u067A\x03\x02" +
		"\x02\x02\u0124\u067F\x03\x02\x02\x02\u0126\u06A4\x03\x02\x02\x02\u0128" +
		"\u06BD\x03\x02\x02\x02\u012A\u06BF\x03\x02\x02\x02\u012C\u06C2\x03\x02" +
		"\x02\x02\u012E\u06DF\x03\x02\x02\x02\u0130\u06E1\x03\x02\x02\x02\u0132" +
		"\u06EC\x03\x02\x02\x02\u0134\u06FA\x03\x02\x02\x02\u0136\u06FD\x03\x02" +
		"\x02\x02\u0138\u0705\x03\x02\x02\x02\u013A\u070E\x03\x02\x02\x02\u013C" +
		"\u0710\x03\x02\x02\x02\u013E\u0714\x03\x02\x02\x02\u0140\u0718\x03\x02" +
		"\x02\x02\u0142\u071E\x03\x02\x02\x02\u0144\u0721\x03\x02\x02\x02\u0146" +
		"\u072F\x03\x02\x02\x02\u0148\u0737\x03\x02\x02\x02\u014A\u0739\x03\x02" +
		"\x02\x02\u014C\u073D\x03\x02\x02\x02\u014E\u0741\x03\x02\x02\x02\u0150" +
		"\u0743\x03\x02\x02\x02\u0152\u074B\x03\x02\x02\x02\u0154\u0765\x03\x02" +
		"\x02\x02\u0156\u0768\x03\x02\x02\x02\u0158\u0785\x03\x02\x02\x02\u015A" +
		"\u0787\x03\x02\x02\x02\u015C\u079C\x03\x02\x02\x02\u015E\u07A6\x03\x02" +
		"\x02\x02\u0160\u07A8\x03\x02\x02\x02\u0162\u07AE\x03\x02\x02\x02\u0164" +
		"\u07B0\x03\x02\x02\x02\u0166\u07B6\x03\x02\x02\x02\u0168\u07BE\x03\x02" +
		"\x02\x02\u016A\u07C1\x03\x02\x02\x02\u016C\u07C8\x03\x02\x02\x02\u016E" +
		"\u07CB\x03\x02\x02\x02\u0170\u07CD\x03\x02\x02\x02\u0172\u07D2\x03\x02" +
		"\x02\x02\u0174\u07D4\x03\x02\x02\x02\u0176\u07D9\x03\x02\x02\x02\u0178" +
		"\u07E0\x03\x02\x02\x02\u017A\u07F4\x03\x02\x02\x02\u017C\u07FC\x03\x02" +
		"\x02\x02\u017E\u07FF\x03\x02\x02\x02\u0180\u0805\x03\x02\x02\x02\u0182" +
		"\u0812\x03\x02\x02\x02\u0184\u0814\x03\x02\x02\x02\u0186\u081C\x03\x02" +
		"\x02\x02\u0188\u082E\x03\x02\x02\x02\u018A\u0831\x03\x02\x02\x02\u018C" +
		"\u0835\x03\x02\x02\x02\u018E\u0846\x03\x02\x02\x02\u0190\u0856\x03\x02" +
		"\x02\x02\u0192\u0860\x03\x02\x02\x02\u0194\u0862\x03\x02\x02\x02\u0196" +
		"\u0870\x03\x02\x02\x02\u0198\u0872\x03\x02\x02\x02\u019A\u087B\x03\x02" +
		"\x02\x02\u019C\u0885\x03\x02\x02\x02\u019E\u0887\x03\x02\x02\x02\u01A0" +
		"\u08AC\x03\x02\x02\x02\u01A2\u08C1\x03\x02\x02\x02\u01A4\u08C6\x03\x02" +
		"\x02\x02\u01A6\u08C8\x03\x02\x02\x02\u01A8\u08CC\x03\x02\x02\x02\u01AA" +
		"\u08D1\x03\x02\x02\x02\u01AC\u08D5\x03\x02\x02\x02\u01AE\u08ED\x03\x02" +
		"\x02\x02\u01B0\u08F6\x03\x02\x02\x02\u01B2\u08F8\x03\x02\x02\x02\u01B4" +
		"\u0900\x03\x02\x02\x02\u01B6\u0910\x03\x02\x02\x02\u01B8\u0912\x03\x02" +
		"\x02\x02\u01BA\u0914\x03\x02\x02\x02\u01BC\u0918\x03\x02\x02\x02\u01BE" +
		"\u0921\x03\x02\x02\x02\u01C0\u0925\x03\x02\x02\x02\u01C2\u0927\x03\x02" +
		"\x02\x02\u01C4\u092A\x03\x02\x02\x02\u01C6\u093A\x03\x02\x02\x02\u01C8" +
		"\u0941\x03\x02\x02\x02\u01CA\u0943\x03\x02\x02\x02\u01CC\u0956\x03\x02" +
		"\x02\x02\u01CE\u0958\x03\x02\x02\x02\u01D0\u0960\x03\x02\x02\x02\u01D2" +
		"\u099D\x03\x02\x02\x02\u01D4\u099F\x03\x02\x02\x02\u01D6\u09B1\x03\x02" +
		"\x02\x02\u01D8\u09B3\x03\x02\x02\x02\u01DA\u09B5\x03\x02\x02\x02\u01DC" +
		"\u09BC\x03\x02\x02\x02\u01DE\u09BF\x03\x02\x02\x02\u01E0\u09CF\x03\x02" +
		"\x02\x02\u01E2\u09E0\x03\x02\x02\x02\u01E4\u09E9\x03\x02\x02\x02\u01E6" +
		"\u09F1\x03\x02\x02\x02\u01E8\u09F3\x03\x02\x02\x02\u01EA\u09FE\x03\x02" +
		"\x02\x02\u01EC\u0A04\x03\x02\x02\x02\u01EE\u0A06\x03\x02\x02\x02\u01F0" +
		"\u0A1A\x03\x02\x02\x02\u01F2\u0A25\x03\x02\x02\x02\u01F4\u0A2C\x03\x02" +
		"\x02\x02\u01F6\u0A38\x03\x02\x02\x02\u01F8\u0A3A\x03\x02\x02\x02\u01FA" +
		"\u0A3C\x03\x02\x02\x02\u01FC\u0A40\x03\x02\x02\x02\u01FE\u0A46\x03\x02" +
		"\x02\x02\u0200\u0A4D\x03\x02\x02\x02\u0202\u0A58\x03\x02\x02\x02\u0204" +
		"\u0A5F\x03\x02\x02\x02\u0206\u0A61\x03\x02\x02\x02\u0208\u0A65\x03\x02" +
		"\x02\x02\u020A\u0A69\x03\x02\x02\x02\u020C\u0A6B\x03\x02\x02\x02\u020E" +
		"\u0A6D\x03\x02\x02\x02\u0210\u0A6F\x03\x02\x02\x02\u0212\u0A72\x03\x02" +
		"\x02\x02\u0214\u0A75\x03\x02\x02\x02\u0216\u0A79\x03\x02\x02\x02\u0218" +
		"\u0A7D\x03\x02\x02\x02\u021A\u0A81\x03\x02\x02\x02\u021C\u0A85\x03\x02" +
		"\x02\x02\u021E\u0A8A\x03\x02\x02\x02\u0220\u0A8E\x03\x02\x02\x02\u0222" +
		"\u0A91\x03\x02\x02\x02\u0224\u0A94\x03\x02\x02\x02\u0226\u0AA7\x03\x02" +
		"\x02\x02\u0228\u0AAB\x03\x02\x02\x02\u022A\u0AAF\x03\x02\x02\x02\u022C" +
		"\u0AB1\x03\x02\x02\x02\u022E\u0AB5\x03\x02\x02\x02\u0230\u0ABB\x03\x02" +
		"\x02\x02\u0232\u0AC5\x03\x02\x02\x02\u0234\u0AC7\x03\x02\x02\x02\u0236" +
		"\u0AC9\x03\x02\x02\x02\u0238\u0ACB\x03\x02\x02\x02\u023A\u0ACD\x03\x02" +
		"\x02\x02\u023C\u023E\x05\x06\x04\x02\u023D\u023C\x03\x02\x02\x02\u023D" +
		"\u023E\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u0240\x07\x02" +
		"\x02\x03\u0240\x03\x03\x02\x02\x02\u0241\u0243\x05\u017E\xC0\x02\u0242" +
		"\u0244\x07\x8F\x02\x02\u0243\u0242\x03\x02\x02\x02\u0243\u0244\x03\x02" +
		"\x02\x02\u0244\u0266\x03\x02\x02\x02\u0245\u0247\x05\x90I\x02\u0246\u0248" +
		"\x07\x8F\x02\x02\u0247\u0246\x03\x02\x02\x02\u0247\u0248\x03\x02\x02\x02" +
		"\u0248\u0266\x03\x02\x02\x02\u0249\u024B\x05\n\x06\x02\u024A\u024C\x07" +
		"\x8F\x02\x02\u024B\u024A\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C" +
		"\u0266\x03\x02\x02\x02\u024D\u024F\x05\x1E\x10\x02\u024E\u0250\x07\x8F" +
		"\x02\x02\u024F\u024E\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250" +
		"\u0266\x03\x02\x02\x02\u0251\u0253\x056\x1C\x02\u0252\u0254\x07\x8F\x02" +
		"\x02\u0253\u0252\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0266" +
		"\x03\x02\x02\x02\u0255\u0257\x05<\x1F\x02\u0256\u0258\x07\x8F\x02\x02" +
		"\u0257\u0256\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u0266\x03" +
		"\x02\x02\x02\u0259\u025B\x05H%\x02\u025A\u025C\x07\x8F\x02\x02\u025B\u025A" +
		"\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C\u0266\x03\x02\x02\x02" +
		"\u025D\u025F\x05J&\x02\u025E\u0260\x07\x8F\x02\x02\u025F\u025E\x03\x02" +
		"\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\u0266\x03\x02\x02\x02\u0261" +
		"\u0263\x05P)\x02\u0262\u0264\x07\x8F\x02\x02\u0263\u0262\x03\x02\x02\x02" +
		"\u0263\u0264\x03\x02\x02\x02\u0264\u0266\x03\x02\x02\x02\u0265\u0241\x03" +
		"\x02\x02\x02\u0265\u0245\x03\x02\x02\x02\u0265\u0249\x03\x02\x02\x02\u0265" +
		"\u024D\x03\x02\x02\x02\u0265\u0251\x03\x02\x02\x02\u0265\u0255\x03\x02" +
		"\x02\x02\u0265\u0259\x03\x02\x02\x02\u0265\u025D\x03\x02\x02\x02\u0265" +
		"\u0261\x03\x02\x02\x02\u0266\x05\x03\x02\x02\x02\u0267\u0268\x05\b\x05" +
		"\x02\u0268\x07\x03\x02\x02\x02\u0269\u026A\x06\x05\x02\x03\u026A\u026B" +
		"\x05\x04\x03\x02\u026B\u026D\b\x05\x01\x02\u026C\u026E\x05\b\x05\x02\u026D" +
		"\u026C\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\t\x03\x02\x02" +
		"\x02\u026F\u0274\x05\f\x07\x02\u0270\u0274\x05\x10\t\x02\u0271\u0274\x05" +
		"\x12\n\x02\u0272\u0274\x05\x1C\x0F\x02\u0273\u026F\x03\x02\x02\x02\u0273" +
		"\u0270\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0273\u0272\x03\x02" +
		"\x02\x02\u0274\v\x03\x02\x02\x02\u0275\u0277\x07\x03\x02\x02\u0276\u0278" +
		"\x05\x0E\b\x02\u0277\u0276\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02" +
		"\u0278\u0279\x03\x02\x02\x02\u0279\u027B\x07\x8F\x02\x02\u027A\u027C\x05" +
		"\u017E\xC0\x02\u027B\u027A\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02" +
		"\u027C\u027D\x03\x02\x02\x02\u027D\u027F\x07\x8F\x02\x02\u027E\u0280\x05" +
		"\u017E\xC0\x02\u027F\u027E\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02" +
		"\u0280\u0281\x03\x02\x02\x02\u0281\u0292\x05\x96L\x02\u0282\u0283\x07" +
		"\x03\x02\x02\u0283\u0285\x07\x88\x02\x02\u0284\u0286\x05\x0E\b\x02\u0285" +
		"\u0284\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0287\x03\x02" +
		"\x02\x02\u0287\u0289\x07\x8F\x02\x02\u0288\u028A\x05\u017E\xC0\x02\u0289" +
		"\u0288\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u028B\x03\x02" +
		"\x02\x02\u028B\u028D\x07\x8F\x02\x02\u028C\u028E\x05\u017E\xC0\x02\u028D" +
		"\u028C\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u028F\x03\x02" +
		"\x02\x02\u028F\u0290\x07\x8B\x02\x02\u0290\u0292\x05\x96L\x02\u0291\u0275" +
		"\x03\x02\x02\x02\u0291\u0282\x03\x02\x02\x02\u0292\r\x03\x02\x02\x02\u0293" +
		"\u0296\x05\xA8U\x02\u0294\u0296\x05\u0180\xC1\x02\u0295\u0293\x03\x02" +
		"\x02\x02\u0295\u0294\x03\x02\x02\x02\u0296\x0F\x03\x02\x02\x02\u0297\u0299" +
		"\x07\x03\x02\x02\u0298\u029A\x07\x04\x02\x02\u0299\u0298\x03\x02\x02\x02" +
		"\u0299\u029A\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B\u029C\x05" +
		"\u015C\xAF\x02\u029C\u029D\x07\x05\x02\x02\u029D\u029F\x05\u017E\xC0\x02" +
		"\u029E\u02A0\x052\x1A\x02\u029F\u029E\x03\x02\x02\x02\u029F\u02A0\x03" +
		"\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A2\x05\x96L\x02\u02A2" +
		"\x11\x03\x02\x02\x02\u02A3\u02A4\x07\x06\x02\x02\u02A4\u02A5\x05\x14\v" +
		"\x02\u02A5\u02A6\x05\x96L\x02\u02A6\x13\x03\x02\x02\x02\u02A7\u02AC\x05" +
		"\x16\f\x02\u02A8\u02A9\x07\x8D\x02\x02\u02A9\u02AB\x05\x16\f\x02\u02AA" +
		"\u02A8\x03\x02\x02\x02\u02AB\u02AE\x03\x02\x02\x02\u02AC\u02AA\x03\x02" +
		"\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD\x15\x03\x02\x02\x02\u02AE\u02AC" +
		"\x03\x02\x02\x02\u02AF\u02B4\x05\u017E\xC0\x02\u02B0\u02B4\x05t;\x02\u02B1" +
		"\u02B4\x05\x18\r\x02\u02B2\u02B4\x05\x1A\x0E\x02\u02B3\u02AF\x03\x02\x02" +
		"\x02\u02B3\u02B0\x03\x02\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B3\u02B2" +
		"\x03\x02\x02\x02\u02B4\x17\x03\x02\x02\x02\u02B5\u02B6\x07\x04\x02\x02" +
		"\u02B6\u02B7\x05\u015C\xAF\x02\u02B7\u02B9\x05\xA6T\x02\u02B8\u02BA\x05" +
		"2\x1A\x02\u02B9\u02B8\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA" +
		"\x19\x03\x02\x02\x02\u02BB\u02BC\x07\x07\x02\x02\u02BC\u02BD\x05\u015C" +
		"\xAF\x02\u02BD\u02BE\x05\xA6T\x02\u02BE\u02C4\x03\x02\x02\x02\u02BF\u02C0" +
		"\x07\b\x02\x02\u02C0\u02C1\x05\u015C\xAF\x02\u02C1\u02C2\x05\xA6T\x02" +
		"\u02C2\u02C4\x03\x02\x02\x02\u02C3\u02BB\x03\x02\x02\x02\u02C3\u02BF\x03" +
		"\x02\x02\x02\u02C4\x1B\x03\x02\x02\x02\u02C5\u02C6\x07\t\x02\x02\u02C6" +
		"\u02C7\x05\x96L\x02\u02C7\u02C8\x07\x06\x02\x02\u02C8\u02C9\x05\u017E" +
		"\xC0\x02\u02C9\x1D\x03\x02\x02\x02\u02CA\u02CE\x05 \x11\x02\u02CB\u02CE" +
		"\x05$\x13\x02\u02CC\u02CE\x05&\x14\x02\u02CD\u02CA\x03\x02\x02\x02\u02CD" +
		"\u02CB\x03\x02\x02\x02\u02CD\u02CC\x03\x02\x02\x02\u02CE\x1F\x03\x02\x02" +
		"\x02\u02CF\u02D0\x07\n\x02\x02\u02D0\u02D1\x05\x14\v\x02\u02D1\u02D3\x05" +
		"\x96L\x02\u02D2\u02D4\x05\"\x12\x02\u02D3\u02D2\x03\x02\x02\x02\u02D3" +
		"\u02D4\x03\x02\x02\x02\u02D4!\x03\x02\x02\x02\u02D5\u02D6\x07\v\x02\x02" +
		"\u02D6\u02DA\x05\x96L\x02\u02D7\u02D8\x07\v\x02\x02\u02D8\u02DA\x05 \x11" +
		"\x02\u02D9\u02D5\x03\x02\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02DA#\x03" +
		"\x02\x02\x02\u02DB\u02DC\x07\f\x02\x02\u02DC\u02DD\x05\x14\v\x02\u02DD" +
		"\u02DE\x07\v\x02\x02\u02DE\u02DF\x05\x96L\x02\u02DF%\x03\x02\x02\x02\u02E0" +
		"\u02E1\x07\r\x02\x02\u02E1\u02E2\x05\u017E\xC0\x02\u02E2\u02E4\x07\x87" +
		"\x02\x02\u02E3\u02E5\x05(\x15\x02\u02E4\u02E3\x03\x02\x02\x02\u02E4\u02E5" +
		"\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E7\x07\x8A\x02\x02" +
		"\u02E7\'\x03\x02\x02\x02\u02E8\u02EA\x05*\x16\x02\u02E9\u02EB\x05(\x15" +
		"\x02\u02EA\u02E9\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB)\x03" +
		"\x02\x02\x02\u02EC\u02ED\x05,\x17\x02\u02ED\u02EE\x05\x06\x04\x02\u02EE" +
		"\u02F3\x03\x02\x02\x02\u02EF\u02F0\x050\x19\x02\u02F0\u02F1\x05\x06\x04" +
		"\x02\u02F1\u02F3\x03\x02\x02\x02\u02F2\u02EC\x03\x02\x02\x02\u02F2\u02EF" +
		"\x03\x02\x02\x02\u02F3+\x03\x02\x02\x02\u02F4\u02F5\x07\x04\x02\x02\u02F5" +
		"\u02F6\x05.\x18\x02\u02F6\u02F7\x07\x8E\x02\x02\u02F7-\x03\x02\x02\x02" +
		"\u02F8\u02FA\x05\u015C\xAF\x02\u02F9\u02FB\x052\x1A\x02\u02FA\u02F9\x03" +
		"\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u0304\x03\x02\x02\x02\u02FC" +
		"\u02FE\x05\u015C\xAF\x02\u02FD\u02FF\x052\x1A\x02\u02FE\u02FD\x03\x02" +
		"\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300" +
		"\u0301\x07\x8D\x02\x02\u0301\u0302\x05.\x18\x02\u0302\u0304\x03\x02\x02" +
		"\x02\u0303\u02F8\x03\x02\x02\x02\u0303\u02FC\x03\x02\x02\x02\u0304/\x03" +
		"\x02\x02\x02\u0305\u0306\x07\x0E\x02\x02\u0306\u0307\x07\x8E\x02\x02\u0307" +
		"1\x03\x02\x02\x02\u0308\u0309\x07\x0F\x02\x02\u0309\u030A\x054\x1B\x02" +
		"\u030A3\x03\x02\x02\x02\u030B\u030C\x05\u017E\xC0\x02\u030C5\x03\x02\x02" +
		"\x02\u030D\u030E\x058\x1D\x02\u030E\u030F\x05\n\x06\x02\u030F\u031A\x03" +
		"\x02\x02\x02\u0310\u0311\x058\x1D\x02\u0311\u0312\x05 \x11\x02\u0312\u031A" +
		"\x03\x02\x02\x02\u0313\u0314\x058\x1D\x02\u0314\u0315\x05&\x14\x02\u0315" +
		"\u031A\x03\x02\x02\x02\u0316\u0317\x058\x1D\x02\u0317\u0318\x05J&\x02" +
		"\u0318\u031A\x03\x02\x02\x02\u0319\u030D\x03\x02\x02\x02\u0319\u0310\x03" +
		"\x02\x02\x02\u0319\u0313\x03\x02\x02\x02\u0319\u0316\x03\x02\x02\x02\u031A" +
		"7\x03\x02\x02\x02\u031B\u031C\x05:\x1E\x02\u031C\u031D\x07\x8E\x02\x02" +
		"\u031D9\x03\x02\x02\x02\u031E\u031F\x05\u0208\u0105\x02\u031F;\x03\x02" +
		"\x02\x02\u0320\u0326\x05> \x02\u0321\u0326\x05@!\x02\u0322\u0326\x05B" +
		"\"\x02\u0323\u0326\x05D#\x02\u0324";
	private static readonly _serializedATNSegment2: string =
		"\u0326\x05F$\x02\u0325\u0320\x03\x02\x02\x02\u0325\u0321\x03\x02\x02\x02" +
		"\u0325\u0322\x03\x02\x02\x02\u0325\u0323\x03\x02\x02\x02\u0325\u0324\x03" +
		"\x02\x02\x02\u0326=\x03\x02\x02\x02\u0327\u0329\x07\x10\x02\x02\u0328" +
		"\u032A\x05:\x1E\x02\u0329\u0328\x03\x02\x02\x02\u0329\u032A\x03\x02\x02" +
		"\x02\u032A?\x03\x02\x02\x02\u032B\u032D\x07\x11\x02\x02\u032C\u032E\x05" +
		":\x1E\x02\u032D\u032C\x03\x02\x02\x02\u032D\u032E\x03\x02\x02\x02\u032E" +
		"A\x03\x02\x02\x02\u032F\u0330\x07\x12\x02\x02\u0330C\x03\x02\x02\x02\u0331" +
		"\u0333\x07\x13\x02\x02\u0332\u0334\x05\u017E\xC0\x02\u0333\u0332\x03\x02" +
		"\x02\x02\u0333\u0334\x03\x02\x02\x02\u0334E\x03\x02\x02\x02\u0335\u0336" +
		"\x07\x14\x02\x02\u0336\u0337\x05\u017E\xC0\x02\u0337G\x03\x02\x02\x02" +
		"\u0338\u0339\x07\x15\x02\x02\u0339\u033A\x05\x96L\x02\u033AI\x03\x02\x02" +
		"\x02\u033B\u033C\x07\x16\x02\x02\u033C\u033E\x05\x96L\x02\u033D\u033F" +
		"\x05L\'\x02\u033E\u033D\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033F" +
		"K\x03\x02\x02\x02\u0340\u0342\x05N(\x02\u0341\u0343\x05L\'\x02\u0342\u0341" +
		"\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343M\x03\x02\x02\x02\u0344" +
		"\u0346\x07\x17\x02\x02\u0345\u0347\x05\u015C\xAF\x02\u0346\u0345\x03\x02" +
		"\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347\u0349\x03\x02\x02\x02\u0348" +
		"\u034A\x052\x1A\x02\u0349\u0348\x03\x02\x02\x02\u0349\u034A\x03\x02\x02" +
		"\x02\u034A\u034B\x03\x02\x02\x02\u034B\u034C\x05\x96L\x02\u034CO\x03\x02" +
		"\x02\x02\u034D\u0350\x05R*\x02\u034E\u0350\x05n8\x02\u034F\u034D\x03\x02" +
		"\x02\x02\u034F\u034E\x03\x02\x02\x02\u0350Q\x03\x02\x02\x02\u0351\u0353" +
		"\x05T+\x02\u0352\u0354\x05V,\x02\u0353\u0352\x03\x02\x02\x02\u0353\u0354" +
		"\x03\x02\x02\x02\u0354\u0356\x03\x02\x02\x02\u0355\u0357\x05Z.\x02\u0356" +
		"\u0355\x03\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357\u0358\x03\x02" +
		"\x02\x02\u0358\u0359\x05b2\x02\u0359S\x03\x02\x02\x02\u035A\u035B\x05" +
		"\\/\x02\u035B\u035D\x05d3\x02\u035C\u035E\x05\x06\x04\x02\u035D\u035C" +
		"\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035EU\x03\x02\x02\x02\u035F" +
		"\u0361\x05X-\x02\u0360\u035F\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02" +
		"\u0362\u0360\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363W\x03\x02" +
		"\x02\x02\u0364\u0365\x05^0\x02\u0365\u0367\x05d3\x02\u0366\u0368\x05\x06" +
		"\x04\x02\u0367\u0366\x03\x02\x02\x02\u0367\u0368\x03\x02\x02\x02\u0368" +
		"Y\x03\x02\x02\x02\u0369\u036B\x05`1\x02\u036A\u036C\x05\x06\x04\x02\u036B" +
		"\u036A\x03\x02\x02\x02\u036B\u036C\x03\x02\x02\x02\u036C[\x03\x02\x02" +
		"\x02\u036D\u036E\x07\x18\x02\x02\u036E]\x03\x02\x02\x02\u036F\u0370\x07" +
		"\x19\x02\x02\u0370_\x03\x02\x02\x02\u0371\u0372\x07\x1A\x02\x02\u0372" +
		"a\x03\x02\x02\x02\u0373\u0374\x07\x1B\x02\x02\u0374c\x03\x02\x02\x02\u0375" +
		"\u0376\b3\x01\x02\u0376\u0380\x05f4\x02\u0377\u0380\x05\u020A\u0106\x02" +
		"\u0378\u0380\x05\u0234\u011B\x02\u0379\u037A\x07\x88\x02\x02\u037A\u037B" +
		"\x05d3\x02\u037B\u037C\x07\x8B\x02\x02\u037C\u0380\x03\x02\x02\x02\u037D" +
		"\u037E\x07\x93\x02\x02\u037E\u0380\x05d3\x05\u037F\u0375\x03\x02\x02\x02" +
		"\u037F\u0377\x03\x02\x02\x02\u037F\u0378\x03\x02\x02\x02\u037F\u0379\x03" +
		"\x02\x02\x02\u037F\u037D\x03\x02\x02\x02\u0380\u038B\x03\x02\x02\x02\u0381" +
		"\u0382\f\x04\x02\x02\u0382\u0383\x05\u0214\u010B\x02\u0383\u0384\x05d" +
		"3\x05\u0384\u038A\x03\x02\x02\x02\u0385\u0386\f\x03\x02\x02\u0386\u0387" +
		"\x05\u0216\u010C\x02\u0387\u0388\x05d3\x04\u0388\u038A\x03\x02\x02\x02" +
		"\u0389\u0381\x03\x02\x02\x02\u0389\u0385\x03\x02\x02\x02\u038A\u038D\x03" +
		"\x02\x02\x02\u038B\u0389\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C" +
		"e\x03\x02\x02\x02\u038D\u038B\x03\x02\x02\x02\u038E\u038F\x07\x1C\x02" +
		"\x02\u038F\u0390\x07\x88\x02\x02\u0390\u0391\x05j6\x02\u0391\u0392\x07" +
		"\x8B\x02\x02\u0392\u039F\x03\x02\x02\x02\u0393\u0394\x07\x1D\x02\x02\u0394" +
		"\u0395\x07\x88\x02\x02\u0395\u0396\x05l7\x02\u0396\u0397\x07\x8B\x02\x02" +
		"\u0397\u039F\x03\x02\x02\x02\u0398\u0399\x07\x1E\x02\x02\u0399\u039A\x07" +
		"\x88\x02\x02\u039A\u039B\x05\u0218\u010D\x02\u039B\u039C\x05h5\x02\u039C" +
		"\u039D\x07\x8B\x02\x02\u039D\u039F\x03\x02\x02\x02\u039E\u038E\x03\x02" +
		"\x02\x02\u039E\u0393\x03\x02\x02\x02\u039E\u0398\x03\x02\x02\x02\u039F" +
		"g\x03\x02\x02\x02\u03A0\u03A1\x07\xA6\x02\x02\u03A1\u03A2\x07\x86\x02" +
		"\x02\u03A2\u03A3\x07\xA6\x02\x02\u03A3i\x03\x02\x02\x02\u03A4\u03A5\x05" +
		"\u0208\u0105\x02\u03A5k\x03\x02\x02\x02\u03A6\u03A7\x05\u0208\u0105\x02" +
		"\u03A7m\x03\x02\x02\x02\u03A8\u03A9\x07\x1F\x02\x02\u03A9\u03AA\x07\x88" +
		"\x02\x02\u03AA\u03AB\x07 \x02\x02\u03AB\u03AC\x07\x8E\x02\x02\u03AC\u03AD" +
		"\x05r:\x02\u03AD\u03AE\x07\x8D\x02\x02\u03AE\u03AF\x07!\x02\x02\u03AF" +
		"\u03B0\x07\x8E\x02\x02\u03B0\u03B1\x05p9\x02\u03B1\u03B2\x07\x8B\x02\x02" +
		"\u03B2\u03B7\x03\x02\x02\x02\u03B3\u03B4\x07\x1F\x02\x02\u03B4\u03B5\x07" +
		"\x88\x02\x02\u03B5\u03B7\x07\x8B\x02\x02\u03B6\u03A8\x03\x02\x02\x02\u03B6" +
		"\u03B3\x03\x02\x02\x02\u03B7o\x03\x02\x02\x02\u03B8\u03B9\x05\u0238\u011D" +
		"\x02\u03B9q\x03\x02\x02\x02\u03BA\u03BB\x07\xA9\x02\x02\u03BBs\x03\x02" +
		"\x02\x02\u03BC\u03BD\x07\"\x02\x02\u03BD\u03BE\x07\x88\x02\x02\u03BE\u03BF" +
		"\x05v<\x02\u03BF\u03C0\x07\x8B\x02\x02\u03C0u\x03\x02\x02\x02\u03C1\u03C6" +
		"\x05x=\x02\u03C2\u03C3\x07\x8D\x02\x02\u03C3\u03C5\x05x=\x02\u03C4\u03C2" +
		"\x03\x02\x02\x02\u03C5\u03C8\x03\x02\x02\x02\u03C6\u03C4\x03\x02\x02\x02" +
		"\u03C6\u03C7\x03\x02\x02\x02\u03C7w\x03\x02\x02\x02\u03C8\u03C6\x03\x02" +
		"\x02\x02\u03C9\u03CA\t\x02\x02\x02\u03CAy\x03\x02\x02\x02\u03CB\u03CC" +
		"\x07\x90\x02\x02\u03CC\u03CD\x05|?\x02\u03CD\u03CE\x07\x91\x02\x02\u03CE" +
		"{\x03\x02\x02\x02\u03CF\u03D4\x05~@\x02\u03D0\u03D1\x07\x8D\x02\x02\u03D1" +
		"\u03D3\x05~@\x02\u03D2\u03D0\x03\x02\x02\x02\u03D3\u03D6\x03\x02\x02\x02" +
		"\u03D4\u03D2\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5}\x03\x02" +
		"\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7\u03E1\x05\u01E6\xF4\x02\u03D8" +
		"\u03D9\x05\u01E6\xF4\x02\u03D9\u03DA\x07\x8E\x02\x02\u03DA\u03DB\x05\u01E4" +
		"\xF3\x02\u03DB\u03E1\x03\x02\x02\x02\u03DC\u03DD\x05\u01E6\xF4\x02\u03DD" +
		"\u03DE\x07\x8E\x02\x02\u03DE\u03DF\x05\u01FE\u0100\x02\u03DF\u03E1\x03" +
		"\x02\x02\x02\u03E0\u03D7\x03\x02\x02\x02\u03E0\u03D8\x03\x02\x02\x02\u03E0" +
		"\u03DC\x03\x02\x02\x02\u03E1\x7F\x03\x02\x02\x02\u03E2\u03E3\x07\x0F\x02" +
		"\x02\u03E3\u03E4\x05\x82B\x02\u03E4\x81\x03\x02\x02\x02\u03E5\u03EA\x05" +
		"\x84C\x02\u03E6\u03E7\x07\x8D\x02\x02\u03E7\u03E9\x05\x84C\x02\u03E8\u03E6" +
		"\x03\x02\x02\x02\u03E9\u03EC\x03\x02\x02\x02\u03EA\u03E8\x03\x02\x02\x02" +
		"\u03EA\u03EB\x03\x02\x02\x02\u03EB\x83\x03\x02\x02\x02\u03EC\u03EA\x03" +
		"\x02\x02\x02\u03ED\u03F0\x05\x86D\x02\u03EE\u03F0\x05\x88E\x02\u03EF\u03ED" +
		"\x03\x02\x02\x02\u03EF\u03EE\x03\x02\x02\x02\u03F0\x85\x03\x02\x02\x02" +
		"\u03F1\u03F2\x05\u01E4\xF3\x02\u03F2\u03F3\x07\x8E\x02\x02\u03F3\u03F4" +
		"\x05\u01E4\xF3\x02\u03F4\u03FA\x03\x02\x02\x02\u03F5\u03F6\x05\u01E4\xF3" +
		"\x02\u03F6\u03F7\x07\x8E\x02\x02\u03F7\u03F8\x05\u01FE\u0100\x02\u03F8" +
		"\u03FA\x03\x02\x02\x02\u03F9\u03F1\x03\x02\x02\x02\u03F9\u03F5\x03\x02" +
		"\x02\x02\u03FA\x87\x03\x02\x02\x02\u03FB\u03FC\x05\u01E4\xF3\x02\u03FC" +
		"\u03FD\x05\u021E\u0110\x02\u03FD\u03FE\x05\u01E0\xF1\x02\u03FE\x89\x03" +
		"\x02\x02\x02\u03FF\u0400\x07\x90\x02\x02\u0400\u0401\x05\x8CG\x02\u0401" +
		"\u0402\x07\x91\x02\x02\u0402\x8B\x03\x02\x02\x02\u0403\u0408\x05\x8EH" +
		"\x02\u0404\u0405\x07\x8D\x02\x02\u0405\u0407\x05\x8EH\x02\u0406\u0404" +
		"\x03\x02\x02\x02\u0407\u040A\x03\x02\x02\x02\u0408\u0406\x03\x02\x02\x02" +
		"\u0408\u0409\x03\x02\x02\x02\u0409\x8D\x03\x02\x02\x02\u040A\u0408\x03" +
		"\x02\x02\x02\u040B\u040C\x05\u01E0\xF1\x02\u040C\x8F\x03\x02\x02\x02\u040D" +
		"\u041E\x05\x98M\x02\u040E\u041E\x05\xA0Q\x02\u040F\u041E\x05\xA8U\x02" +
		"\u0410\u041E\x05\xC2b\x02\u0411\u041E\x05\xC8e\x02\u0412\u041E\x05\xE0" +
		"q\x02\u0413\u041E\x05\u0102\x82\x02\u0414\u041E\x05\u010A\x86\x02\u0415" +
		"\u041E\x05\u0112\x8A\x02\u0416\u041E\x05\u0126\x94\x02\u0417\u041E\x05" +
		"\u012C\x97\x02\u0418\u041E\x05\u012E\x98\x02\u0419\u041E\x05\u0134\x9B" +
		"\x02\u041A\u041E\x05\u013A\x9E\x02\u041B\u041E\x05\u013A\x9E\x02\u041C" +
		"\u041E\x05\u0144\xA3\x02\u041D\u040D\x03\x02\x02\x02\u041D\u040E\x03\x02" +
		"\x02\x02\u041D\u040F\x03\x02\x02\x02\u041D\u0410\x03\x02\x02\x02\u041D" +
		"\u0411\x03\x02\x02\x02\u041D\u0412\x03\x02\x02\x02\u041D\u0413\x03\x02" +
		"\x02\x02\u041D\u0414\x03\x02\x02\x02\u041D\u0415\x03\x02\x02\x02\u041D" +
		"\u0416\x03\x02\x02\x02\u041D\u0417\x03\x02\x02\x02\u041D\u0418\x03\x02" +
		"\x02\x02\u041D\u0419\x03\x02\x02\x02\u041D\u041A\x03\x02\x02\x02\u041D" +
		"\u041B\x03\x02\x02\x02\u041D\u041C\x03\x02\x02\x02\u041E\x91\x03\x02\x02" +
		"\x02\u041F\u0421\x05\x90I\x02\u0420\u041F\x03\x02\x02\x02\u0421\u0422" +
		"\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02" +
		"\u0423\x93\x03\x02\x02\x02\u0424\u0426\x05\x06\x04\x02\u0425\u0424\x03" +
		"\x02\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426\x95\x03\x02\x02\x02\u0427" +
		"\u0429\x07\x87\x02\x02\u0428\u042A\x05\x06\x04\x02\u0429\u0428\x03\x02" +
		"\x02\x02\u0429\u042A\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B" +
		"\u042C\x07\x8A\x02\x02\u042C\x97\x03\x02\x02\x02\u042D\u042F\x05\u0176" +
		"\xBC\x02\u042E\u042D\x03\x02\x02\x02\u042E\u042F\x03\x02\x02\x02\u042F" +
		"\u0430\x03\x02\x02\x02\u0430\u0432\x07#\x02\x02\u0431\u0433\x05\x9AN\x02" +
		"\u0432\u0431\x03\x02\x02\x02\u0432\u0433\x03\x02\x02\x02\u0433\u0434\x03" +
		"\x02\x02\x02\u0434\u0435\x05\x9CO\x02\u0435\x99\x03\x02\x02\x02\u0436" +
		"\u0437\t\x03\x02\x02\u0437\x9B\x03\x02\x02\x02\u0438\u043D\x05\x9EP\x02" +
		"\u0439\u043A\x07\x86\x02\x02\u043A\u043C\x05\x9EP\x02\u043B\u0439\x03" +
		"\x02\x02\x02\u043C\u043F\x03\x02\x02\x02\u043D\u043B\x03\x02\x02\x02\u043D" +
		"\u043E\x03\x02\x02\x02\u043E\x9D\x03\x02\x02\x02\u043F\u043D\x03\x02\x02" +
		"\x02\u0440\u0443\x05\u0208\u0105\x02\u0441\u0443\x05\u0226\u0114\x02\u0442" +
		"\u0440\x03\x02\x02\x02\u0442\u0441\x03\x02\x02\x02\u0443\x9F\x03\x02\x02" +
		"\x02\u0444\u0446\x05\u0176\xBC\x02\u0445\u0444\x03\x02\x02\x02\u0445\u0446" +
		"\x03\x02\x02\x02\u0446\u0448\x03\x02\x02\x02\u0447\u0449\x05\u0156\xAC" +
		"\x02\u0448\u0447\x03\x02\x02\x02\u0448\u0449\x03\x02\x02\x02\u0449\u044A" +
		"\x03\x02\x02\x02\u044A\u044B\x07\x07\x02\x02\u044B\u044C\x05\xA2R\x02" +
		"\u044C\xA1\x03\x02\x02\x02\u044D\u0452\x05\xA4S\x02\u044E\u044F\x07\x8D" +
		"\x02\x02\u044F\u0451\x05\xA4S\x02\u0450\u044E\x03\x02\x02\x02\u0451\u0454" +
		"\x03\x02\x02\x02\u0452\u0450\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02" +
		"\u0453\xA3\x03\x02\x02\x02\u0454\u0452\x03\x02\x02\x02\u0455\u0457\x05" +
		"\u015C\xAF\x02\u0456\u0458\x05\xA6T\x02\u0457\u0456\x03\x02\x02\x02\u0457" +
		"\u0458\x03\x02\x02\x02\u0458\xA5\x03\x02\x02\x02\u0459\u045A\x05\u0210" +
		"\u0109\x02\u045A\u045B\x05\u017E\xC0\x02\u045B\xA7\x03\x02\x02\x02\u045C" +
		"\u045D\x05\xAAV\x02\u045D\u045E\x05\xACW\x02\u045E\u045F\x05\u01E2\xF2" +
		"\x02\u045F\u0460\x05\x96L\x02\u0460\u0480\x03\x02\x02\x02\u0461\u0462" +
		"\x05\xAAV\x02\u0462\u0463\x05\xACW\x02\u0463\u0464\x05\u01E2\xF2\x02\u0464" +
		"\u0465\x05\xAEX\x02\u0465\u0480\x03\x02\x02\x02\u0466\u0467\x05\xAAV\x02" +
		"\u0467\u0468\x05\xACW\x02\u0468\u0469\x05\u01E2\xF2\x02\u0469\u046A\x05" +
		"\xB6\\\x02\u046A\u0480\x03\x02\x02\x02\u046B\u046C\x05\xAAV\x02\u046C" +
		"\u046D\x05\xACW\x02\u046D\u046F\x05\u01E2\xF2\x02\u046E\u0470\x05\xA6" +
		"T\x02\u046F\u046E\x03\x02\x02\x02\u046F\u0470\x03\x02\x02\x02\u0470\u0471" +
		"\x03\x02\x02\x02\u0471\u0472\x05\xBC_\x02\u0472\u0480\x03\x02\x02\x02" +
		"\u0473\u0474\x05\xAAV\x02\u0474\u0475\x05\xACW\x02\u0475\u0476\x05\u01E2" +
		"\xF2\x02\u0476\u0478\x05\u01E2\xF2\x02\u0477\u0479\x05\xA6T\x02\u0478" +
		"\u0477\x03\x02\x02\x02\u0478\u0479\x03\x02\x02\x02\u0479\u047A\x03\x02" +
		"\x02\x02\u047A\u047B\x05\xBC_\x02\u047B\u0480\x03\x02\x02\x02\u047C\u047D" +
		"\x05\xAAV\x02\u047D\u047E\x05\xA2R\x02\u047E\u0480\x03\x02\x02\x02\u047F" +
		"\u045C\x03\x02\x02\x02\u047F\u0461\x03\x02\x02\x02\u047F\u0466\x03\x02" +
		"\x02\x02\u047F\u046B\x03\x02\x02\x02\u047F\u0473\x03\x02\x02\x02\u047F" +
		"\u047C\x03\x02\x02\x02\u0480\xA9\x03\x02\x02\x02\u0481\u0483\x05\u0176" +
		"\xBC\x02\u0482\u0481\x03\x02\x02\x02\u0482\u0483\x03\x02\x02\x02\u0483" +
		"\u0485\x03\x02\x02\x02\u0484\u0486\x05\u0156\xAC\x02\u0485\u0484\x03\x02" +
		"\x02\x02\u0485\u0486\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487" +
		"\u0488\x07\b\x02\x02\u0488\xAB\x03\x02\x02\x02\u0489\u048A\x05\u0208\u0105" +
		"\x02\u048A\xAD\x03\x02\x02\x02\u048B\u048C\x07\x87\x02\x02\u048C\u048E" +
		"\x05\xB0Y\x02\u048D\u048F\x05\xB2Z\x02\u048E\u048D\x03\x02\x02\x02\u048E" +
		"\u048F\x03\x02\x02\x02\u048F\u0490\x03\x02\x02\x02\u0490\u0491\x07\x8A" +
		"\x02\x02\u0491\u0498\x03\x02\x02\x02\u0492\u0493\x07\x87\x02\x02\u0493" +
		"\u0494\x05\xB2Z\x02\u0494\u0495\x05\xB0Y\x02\u0495\u0496\x07\x8A\x02\x02" +
		"\u0496\u0498\x03\x02\x02\x02\u0497\u048B\x03\x02\x02\x02\u0497\u0492\x03" +
		"\x02\x02\x02\u0498\xAF\x03\x02\x02\x02\u0499\u049B\x05\u0176\xBC\x02\u049A" +
		"\u0499\x03\x02\x02\x02\u049A\u049B\x03\x02\x02\x02\u049B\u049D\x03\x02" +
		"\x02\x02\u049C\u049E\x05\u015A\xAE\x02\u049D\u049C\x03\x02\x02\x02\u049D" +
		"\u049E\x03\x02\x02\x02\u049E\u049F\x03\x02\x02\x02\u049F\u04A0\x07*\x02" +
		"\x02\u04A0\u04A1\x05\x96L\x02\u04A1\xB1\x03\x02\x02\x02\u04A2\u04A4\x05" +
		"\u0176\xBC\x02\u04A3\u04A2\x03\x02\x02\x02\u04A3\u04A4\x03\x02\x02\x02" +
		"\u04A4\u04A6\x03\x02\x02\x02\u04A5\u04A7\x05\u015A\xAE\x02\u04A6\u04A5" +
		"\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7\u04A8\x03\x02\x02\x02" +
		"\u04A8\u04AA\x07+\x02\x02\u04A9\u04AB\x05\xB4[\x02\u04AA\u04A9\x03\x02" +
		"\x02\x02\u04AA\u04AB\x03\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02\u04AC" +
		"\u04AD\x05\x96L\x02\u04AD\xB3\x03\x02\x02\x02\u04AE\u04AF\x07\x88\x02" +
		"\x02\u04AF\u04B0\x05\u0208\u0105\x02\u04B0\u04B1\x07\x8B\x02\x02\u04B1" +
		"\xB5\x03\x02\x02\x02\u04B2\u04B3\x07\x87\x02\x02\u04B3\u04B5\x05\xB8]" +
		"\x02\u04B4\u04B6\x05\xBA^\x02\u04B5\u04B4\x03\x02\x02\x02\u04B5\u04B6" +
		"\x03\x02\x02\x02\u04B6\u04B7\x03\x02\x02\x02\u04B7\u04B8\x07\x8A\x02\x02" +
		"\u04B8\u04BF\x03\x02\x02\x02\u04B9\u04BA\x07\x87\x02\x02\u04BA\u04BB\x05" +
		"\xBA^\x02\u04BB\u04BC\x05\xB8]\x02\u04BC\u04BD\x07\x8A\x02\x02\u04BD\u04BF" +
		"\x03\x02\x02\x02\u04BE\u04B2\x03\x02\x02\x02\u04BE\u04B9\x03\x02\x02\x02" +
		"\u04BF\xB7\x03\x02\x02\x02\u04C0\u04C2\x05\u0176\xBC\x02\u04C1\u04C0\x03" +
		"\x02\x02\x02\u04C1\u04C2\x03\x02\x02\x02\u04C2\u04C4\x03\x02\x02\x02\u04C3" +
		"\u04C5\x05\u015A\xAE\x02\u04C4\u04C3\x03\x02\x02\x02\u04C4\u04C5\x03\x02" +
		"\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6\u04C7\x07*\x02\x02\u04C7\xB9" +
		"\x03\x02\x02\x02\u04C8\u04CA\x05\u0176\xBC\x02\u04C9\u04C8\x03\x02\x02" +
		"\x02\u04C9\u04CA\x03\x02\x02\x02\u04CA\u04CC\x03\x02\x02\x02\u04CB\u04CD" +
		"\x05\u015A\xAE\x02\u04CC\u04CB\x03\x02\x02\x02\u04CC\u04CD\x03\x02\x02" +
		"\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE\u04CF\x07+\x02\x02\u04CF\xBB\x03" +
		"\x02\x02\x02\u04D0\u04D1\x07\x87\x02\x02\u04D1\u04D3\x05\xBE`\x02\u04D2" +
		"\u04D4\x05\xC0a\x02\u04D3\u04D2\x03\x02\x02\x02\u04D3\u04D4\x03\x02\x02" +
		"\x02\u04D4\u04D5\x03\x02\x02\x02\u04D5\u04D6\x07\x8A\x02\x02\u04D6\u04DD" +
		"\x03\x02\x02\x02\u04D7\u04D8\x07\x87\x02\x02\u04D8\u04D9\x05\xC0a\x02" +
		"\u04D9\u04DA\x05\xBE`\x02\u04DA\u04DB\x07\x8A\x02\x02\u04DB\u04DD\x03" +
		"\x02\x02\x02\u04DC\u04D0\x03\x02\x02\x02\u04DC\u04D7\x03\x02\x02\x02\u04DD" +
		"\xBD\x03\x02\x02\x02\u04DE\u04E0\x05\u0176\xBC\x02\u04DF\u04DE\x03\x02" +
		"\x02\x02\u04DF\u04E0\x03\x02\x02\x02\u04E0\u04E1\x03\x02\x02\x02\u04E1" +
		"\u04E3\x07,\x02\x02\u04E2\u04E4\x05\xB4[\x02\u04E3\u04E2\x03\x02\x02\x02" +
		"\u04E3\u04E4\x03\x02\x02\x02\u04E4\u04E5\x03\x02\x02\x02\u04E5\u04E6\x05" +
		"\x96L\x02\u04E6\xBF\x03\x02\x02\x02\u04E7\u04E9\x05\u0176\xBC\x02\u04E8" +
		"\u04E7\x03\x02\x02\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9\u04EA\x03\x02" +
		"\x02\x02\u04EA\u04EC\x07-\x02\x02\u04EB\u04ED\x05\xB4[\x02\u04EC\u04EB" +
		"\x03\x02\x02\x02\u04EC\u04ED\x03\x02\x02\x02\u04ED\u04EE\x03\x02\x02\x02" +
		"\u04EE\u04EF\x05\x96L\x02\u04EF\xC1\x03\x02\x02\x02\u04F0\u04F2\x05\u0176" +
		"\xBC\x02\u04F1\u04F0\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2" +
		"\u04F4\x03\x02\x02\x02\u04F3\u04F5\x05\u0158\xAD\x02\u04F4\u04F3\x03\x02" +
		"\x02\x02\u04F4\u04F5\x03\x02\x02\x02\u04F5\u04F6\x03\x02\x02\x02\u04F6" +
		"\u04F7\x07$\x02\x02\u04F7\u04F9\x05\xC4c\x02\u04F8\u04FA\x05z>\x02\u04F9" +
		"\u04F8\x03\x02\x02\x02\u04F9\u04FA\x03\x02\x02\x02\u04FA\u04FB\x03\x02" +
		"\x02\x02\u04FB\u04FC\x05\xC6d\x02\u04FC\xC3\x03\x02\x02\x02\u04FD\u04FE" +
		"\x05\u0208\u0105\x02\u04FE\xC5\x03\x02\x02\x02\u04FF\u0500\x05\u0210\u0109" +
		"\x02\u0500\u0501\x05\u01E0\xF1\x02\u0501\xC7\x03\x02\x02\x02\u0502\u0503" +
		"\x05\xCAf\x02\u0503\u0505\x05\xCCg\x02\u0504\u0506\x05z>\x02\u0505\u0504" +
		"\x03\x02\x02\x02\u0505\u0506\x03\x02\x02\x02\u0506\u0507\x03\x02\x02\x02" +
		"\u0507\u0509\x05\xCEh\x02\u0508\u050A\x05\x80A\x02\u0509\u0508\x03\x02" +
		"\x02\x02\u0509\u050A\x03\x02\x02\x02\u050A\u050C\x03\x02\x02\x02\u050B" +
		"\u050D\x05\xD2j\x02\u050C\u050B\x03\x02\x02\x02\u050C\u050D\x03\x02\x02" +
		"\x02\u050D\xC9\x03\x02\x02\x02\u050E\u0510\x05\u0176\xBC\x02\u050F\u050E" +
		"\x03\x02\x02\x02\u050F\u0510\x03\x02\x02\x02\u0510\u0512\x03\x02\x02\x02" +
		"\u0511\u0513\x05\u0156\xAC\x02\u0512\u0511\x03\x02\x02\x02\u0512\u0513" +
		"\x03\x02\x02\x02\u0513\u0514\x03\x02\x02\x02\u0514\u0515\x07)\x02\x02" +
		"\u0515\xCB\x03\x02\x02\x02\u0516\u0519\x05\u0208\u0105\x02\u0517\u0519" +
		"\x05\u0226\u0114\x02\u0518\u0516\x03\x02\x02\x02\u0518\u0517\x03\x02\x02" +
		"\x02\u0519\xCD\x03\x02\x02\x02\u051A\u051C\x05\xD4k\x02\u051B\u051D\x07" +
		".\x02\x02\u051C\u051B\x03\x02\x02\x02\u051C\u051D\x03\x02\x02\x02\u051D" +
		"\u051F\x03\x02\x02\x02\u051E\u0520\x05\xD0i\x02\u051F\u051E\x03\x02\x02" +
		"\x02\u051F\u0520\x03\x02\x02\x02\u0520\u0527\x03\x02\x02\x02\u0521\u0522" +
		"\x05\xD4k\x02\u0522\u0524\x07/\x02\x02\u0523\u0525\x05\xD0i\x02\u0524" +
		"\u0523\x03\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525\u0527\x03\x02" +
		"\x02\x02\u0526\u051A\x03\x02\x02\x02\u0526\u0521\x03\x02\x02\x02\u0527" +
		"\xCF\x03\x02\x02\x02\u0528\u052A\x05\u021A\u010E\x02\u0529\u052B\x05\u0176" +
		"\xBC\x02\u052A\u0529\x03\x02\x02\x02\u052A\u052B\x03\x02\x02\x02\u052B" +
		"\u052C\x03\x02\x02\x02\u052C\u052D\x05\u01E0\xF1\x02\u052D\xD1\x03\x02" +
		"\x02\x02\u052E\u052F\x05\x96L\x02\u052F\xD3\x03\x02\x02\x02\u0530\u0531" +
		"\x07\x88\x02\x02\u0531\u0537\x07\x8B\x02\x02\u0532\u0533\x07\x88\x02\x02" +
		"\u0533\u0534\x05\xD6l\x02\u0534\u0535\x07\x8B\x02\x02\u0535\u0537\x03" +
		"\x02\x02\x02\u0536\u0530\x03\x02\x02\x02\u0536\u0532\x03\x02\x02\x02\u0537" +
		"\xD5\x03\x02\x02\x02\u0538\u053D\x05\xD8m\x02\u0539\u053A\x07\x8D\x02" +
		"\x02\u053A\u053C\x05\xD8m\x02\u053B\u0539\x03\x02\x02\x02\u053C\u053F" +
		"\x03\x02\x02\x02\u053D\u053B\x03\x02\x02\x02\u053D\u053E\x03\x02\x02\x02" +
		"\u053E\xD7\x03\x02\x02\x02\u053F\u053D\x03\x02\x02\x02\u0540\u0542\x05" +
		"\xDAn\x02\u0541\u0540\x03\x02\x02\x02\u0541\u0542\x03\x02\x02\x02\u0542" +
		"\u0543\x03\x02\x02\x02\u0543\u0544\x05\xDCo\x02\u0544\u0546\x05\u01E2" +
		"\xF2\x02\u0545\u0547\x05\xDEp\x02\u0546\u0545\x03\x02\x02\x02\u0546\u0547" +
		"\x03\x02\x02\x02\u0547\u0556\x03\x02\x02\x02\u0548\u054A\x05\xDAn\x02" +
		"\u0549\u0548\x03\x02\x02\x02\u0549\u054A\x03\x02\x02\x02\u054A\u054B\x03" +
		"\x02\x02\x02\u054B\u054C\x05\xDCo\x02\u054C\u054D\x05\u01E2\xF2\x02\u054D" +
		"\u0556\x03\x02\x02\x02\u054E\u0550\x05\xDAn\x02\u054F\u054E\x03\x02\x02" +
		"\x02\u054F\u0550\x03\x02\x02\x02\u0550\u0551\x03\x02\x02\x02\u0551\u0552" +
		"\x05\xDCo\x02\u0552\u0553\x05\u01E2\xF2\x02\u0553\u0554\x05\u021C\u010F" +
		"\x02\u0554\u0556\x03\x02\x02\x02\u0555\u0541\x03\x02\x02\x02\u0555\u0549" +
		"\x03\x02\x02\x02\u0555\u054F\x03\x02\x02\x02\u0556\xD9\x03\x02\x02\x02" +
		"\u0557\u0558\x05\u020A\u0106\x02\u0558\xDB\x03\x02\x02\x02\u0559\u055A" +
		"\x05\u020A\u0106\x02\u055A\xDD\x03\x02\x02\x02\u055B\u055C\x05\u0210\u0109" +
		"\x02\u055C\u055D\x05\u017E\xC0\x02\u055D\xDF\x03\x02\x02\x02\u055E\u0560" +
		"\x05\u0176\xBC\x02\u055F\u055E\x03\x02\x02\x02\u055F\u0560\x03\x02\x02" +
		"\x02\u0560\u0562\x03\x02\x02\x02\u0561\u0563\x05\u0158\xAD\x02\u0562\u0561" +
		"\x03\x02\x02\x02\u0562\u0563\x03\x02\x02\x02\u0563\u0564\x03\x02\x02\x02" +
		"\u0564\u056D\x05\xE2r\x02\u0565\u0567\x05\u0176\xBC\x02\u0566\u0565\x03" +
		"\x02\x02\x02\u0566\u0567\x03\x02\x02\x02\u0567\u0569\x03\x02\x02\x02\u0568" +
		"\u056A\x05\u0158\xAD\x02\u0569\u0568\x03\x02\x02\x02\u0569\u056A\x03\x02" +
		"\x02\x02\u056A\u056B\x03\x02\x02\x02\u056B\u056D\x05\xF2z\x02\u056C\u055F" +
		"\x03\x02\x02\x02\u056C\u0566\x03\x02\x02\x02\u056D\xE1\x03\x02\x02\x02" +
		"\u056E\u0570\x070\x02\x02\u056F\u056E\x03\x02\x02\x02\u056F\u0570\x03" +
		"\x02\x02\x02\u0570\u0571\x03\x02\x02\x02\u0571\u0572\x07\'\x02\x02\u0572" +
		"\u0574\x05\xEEx\x02\u0573\u0575\x05z>\x02\u0574\u0573\x03\x02\x02\x02" +
		"\u0574\u0575\x03\x02\x02\x02\u0575\u0577\x03\x02\x02\x02\u0576\u0578\x05" +
		"\u0202\u0102\x02\u0577\u0576\x03\x02\x02\x02\u0577\u0578\x03\x02\x02\x02" +
		"\u0578\u057A\x03\x02\x02\x02\u0579\u057B\x05\x80A\x02\u057A\u0579\x03" +
		"\x02\x02\x02\u057A\u057B\x03\x02\x02\x02\u057B\u057C\x03\x02\x02\x02\u057C" +
		"\u057E\x07\x87\x02\x02\u057D\u057F\x05\xE4s\x02\u057E\u057D\x03\x02\x02" +
		"\x02\u057E\u057F\x03\x02\x02\x02\u057F\u0580\x03\x02\x02\x02\u0580\u0581" +
		"\x07\x8A\x02\x02\u0581\xE3\x03\x02\x02\x02\u0582\u0584\x05\xE6t\x02\u0583" +
		"\u0585\x05\xE4s\x02\u0584\u0583\x03\x02\x02\x02\u0584\u0585\x03\x02\x02" +
		"\x02\u0585\xE5\x03\x02\x02\x02\u0586\u058A\x05\x90I\x02\u0587\u058A\x05" +
		"\xE8u\x02\u0588\u058A\x05P)\x02\u0589\u0586\x03\x02\x02\x02\u0589\u0587" +
		"\x03\x02\x02\x02\u0589\u0588\x03\x02\x02\x02\u058A\xE7\x03\x02\x02\x02" +
		"\u058B\u058D\x05\u0176\xBC\x02\u058C\u058B\x03\x02\x02\x02\u058C\u058D" +
		"\x03\x02\x02\x02\u058D\u058F\x03\x02\x02\x02\u058E\u0590\x070\x02\x02" +
		"\u058F\u058E\x03\x02\x02\x02\u058F\u0590\x03\x02\x02\x02\u0590\u0591\x03" +
		"\x02\x02\x02\u0591\u0592\x07\x04\x02\x02\u0592\u0593\x05\xEAv\x02\u0593" +
		"\xE9\x03\x02\x02\x02\u0594\u059A\x05\xECw\x02\u0595\u0596\x05\xECw\x02" +
		"\u0596\u0597\x07\x8D\x02\x02\u0597\u0598\x05\xEAv\x02\u0598\u059A\x03" +
		"\x02\x02\x02\u0599\u0594\x03\x02\x02\x02\u0599\u0595\x03\x02\x02\x02\u059A" +
		"\xEB\x03\x02\x02\x02\u059B\u059D\x05\xF0y\x02\u059C\u059E\x05\u01E8\xF5" +
		"\x02\u059D\u059C\x03\x02\x02\x02\u059D\u059E\x03\x02\x02\x02\u059E\xED" +
		"\x03\x02\x02\x02\u059F\u05A0\x05\u0208\u0105\x02\u05A0\xEF\x03\x02\x02" +
		"\x02\u05A1\u05A2\x05\u0208\u0105\x02\u05A2\xF1\x03\x02\x02\x02\u05A3\u05A4" +
		"\x07\'\x02\x02\u05A4\u05A6\x05\xEEx\x02\u05A5\u05A7\x05z>\x02\u05A6\u05A5" +
		"\x03\x02\x02\x02\u05A6\u05A7\x03\x02\x02\x02\u05A7\u05A8\x03\x02\x02\x02" +
		"\u05A8\u05AA\x05\u0202\u0102\x02\u05A9\u05AB\x05\x80A\x02\u05AA\u05A9" +
		"\x03\x02\x02\x02\u05AA\u05AB\x03\x02\x02\x02\u05AB\u05AC\x03\x02\x02\x02" +
		"\u05AC\u05AD\x07\x87\x02\x02\u05AD\u05AE\x05\xF4{\x02\u05AE\u05AF\x07" +
		"\x8A\x02\x02\u05AF\xF3\x03\x02\x02\x02\u05B0\u05B2\x05\xF6|\x02\u05B1" +
		"\u05B3\x05\xF4{\x02\u05B2\u05B1\x03\x02\x02\x02\u05B2\u05B3\x03\x02\x02" +
		"\x02\u05B3\xF5\x03\x02\x02\x02\u05B4\u05B8\x05\x90I\x02\u05B5\u05B8\x05" +
		"\xF8}\x02\u05B6\u05B8\x05P)\x02\u05B7\u05B4\x03\x02\x02\x02\u05B7\u05B5" +
		"\x03\x02\x02\x02\u05B7\u05B6\x03\x02\x02\x02\u05B8\xF7\x03\x02\x02\x02" +
		"\u05B9\u05BB\x05\u0176\xBC\x02\u05BA\u05B9\x03\x02\x02\x02\u05BA\u05BB" +
		"\x03\x02\x02\x02\u05BB\u05BC\x03\x02\x02\x02\u05BC\u05BD\x07\x04\x02\x02" +
		"\u05BD\u05BE\x05\xFA~\x02\u05BE\xF9\x03\x02\x02\x02\u05BF\u05C5\x05\xFC" +
		"\x7F\x02\u05C0\u05C1\x05\xFC\x7F\x02\u05C1\u05C2\x07\x8D\x02\x02\u05C2" +
		"\u05C3\x05\xFA~\x02\u05C3\u05C5\x03\x02\x02\x02\u05C4\u05BF\x03\x02\x02" +
		"\x02\u05C4\u05C0\x03\x02\x02\x02\u05C5\xFB\x03\x02\x02\x02\u05C6\u05C8" +
		"\x05\xF0y\x02\u05C7\u05C9\x05\xFE\x80\x02\u05C8\u05C7\x03\x02\x02\x02" +
		"\u05C8\u05C9\x03\x02\x02\x02\u05C9\xFD\x03\x02\x02\x02\u05CA\u05CB\x05" +
		"\u0210\u0109\x02\u05CB\u05CC\x05\u0100\x81\x02\u05CC\xFF\x03\x02\x02\x02" +
		"\u05CD\u05D1\x05\u0232\u011A\x02\u05CE\u05D1\x07\xA9\x02\x02\u05CF\u05D1" +
		"\x05\u0234\u011B\x02\u05D0\u05CD\x03\x02\x02\x02\u05D0\u05CE\x03\x02\x02" +
		"\x02\u05D0\u05CF\x03\x02\x02\x02\u05D1\u0101\x03\x02\x02\x02\u05D2\u05D4" +
		"\x05\u0176\xBC\x02\u05D3\u05D2\x03\x02\x02\x02\u05D3\u05D4\x03\x02\x02" +
		"\x02\u05D4\u05D6\x03\x02\x02\x02\u05D5\u05D7\x05\u0158\xAD\x02\u05D6\u05D5" +
		"\x03\x02\x02\x02\u05D6\u05D7\x03\x02\x02\x02\u05D7\u05D8\x03\x02\x02\x02" +
		"\u05D8\u05D9\x07%\x02\x02\u05D9\u05DB\x05";
	private static readonly _serializedATNSegment3: string =
		"\u0104\x83\x02\u05DA\u05DC\x05z>\x02\u05DB\u05DA\x03\x02\x02\x02\u05DB" +
		"\u05DC\x03\x02\x02\x02\u05DC\u05DE\x03\x02\x02\x02\u05DD\u05DF\x05\u0202" +
		"\u0102\x02\u05DE\u05DD\x03\x02\x02\x02\u05DE\u05DF\x03\x02\x02\x02\u05DF" +
		"\u05E1\x03\x02\x02\x02\u05E0\u05E2\x05\x80A\x02\u05E1\u05E0\x03\x02\x02" +
		"\x02\u05E1\u05E2\x03\x02\x02\x02\u05E2\u05E3\x03\x02\x02\x02\u05E3\u05E4" +
		"\x05\u0106\x84\x02\u05E4\u0103\x03\x02\x02\x02\u05E5\u05E6\x05\u0208\u0105" +
		"\x02\u05E6\u0105\x03\x02\x02\x02\u05E7\u05EB\x07\x87\x02\x02\u05E8\u05EA" +
		"\x05\u0108\x85\x02\u05E9\u05E8\x03\x02\x02\x02\u05EA\u05ED\x03\x02\x02" +
		"\x02\u05EB\u05E9\x03\x02\x02\x02\u05EB\u05EC\x03\x02\x02\x02\u05EC\u05EE" +
		"\x03\x02\x02\x02\u05ED\u05EB\x03\x02\x02\x02\u05EE\u05EF\x07\x8A\x02\x02" +
		"\u05EF\u0107\x03\x02\x02\x02\u05F0\u05F3\x05\x90I\x02\u05F1\u05F3\x05" +
		"P)\x02\u05F2\u05F0\x03\x02\x02\x02\u05F2\u05F1\x03\x02\x02\x02\u05F3\u0109" +
		"\x03\x02\x02\x02\u05F4\u05F6\x05\u0176\xBC\x02\u05F5\u05F4\x03\x02\x02" +
		"\x02\u05F5\u05F6\x03\x02\x02\x02\u05F6\u05F8\x03\x02\x02\x02\u05F7\u05F9" +
		"\x05\u0158\xAD\x02\u05F8\u05F7\x03\x02\x02\x02\u05F8\u05F9\x03\x02\x02" +
		"\x02\u05F9\u05FB\x03\x02\x02\x02\u05FA\u05FC\x071\x02\x02\u05FB\u05FA" +
		"\x03\x02\x02\x02\u05FB\u05FC\x03\x02\x02\x02\u05FC\u05FD\x03\x02\x02\x02" +
		"\u05FD\u05FE\x07&\x02\x02\u05FE\u0600\x05\u010C\x87\x02\u05FF\u0601\x05" +
		"z>\x02\u0600\u05FF\x03\x02\x02\x02\u0600\u0601\x03\x02\x02\x02\u0601\u0603" +
		"\x03\x02\x02\x02\u0602\u0604\x05\u0202\u0102\x02\u0603\u0602\x03\x02\x02" +
		"\x02\u0603\u0604\x03\x02\x02\x02\u0604\u0606\x03\x02\x02\x02\u0605\u0607" +
		"\x05\x80A\x02\u0606\u0605\x03\x02\x02\x02\u0606\u0607\x03\x02\x02\x02" +
		"\u0607\u0608\x03\x02\x02\x02\u0608\u0609\x05\u010E\x88\x02\u0609\u0622" +
		"\x03\x02\x02\x02\u060A\u060C\x05\u0176\xBC\x02\u060B\u060A\x03\x02\x02" +
		"\x02\u060B\u060C\x03\x02\x02\x02\u060C\u060E\x03\x02\x02\x02\u060D\u060F" +
		"\x05\u0158\xAD\x02\u060E\u060D\x03\x02\x02\x02\u060E\u060F\x03\x02\x02" +
		"\x02\u060F\u0610\x03\x02\x02\x02\u0610\u0612\x071\x02\x02\u0611\u0613" +
		"\x05\u0158\xAD\x02\u0612\u0611\x03\x02\x02\x02\u0612\u0613\x03\x02\x02" +
		"\x02\u0613\u0614\x03\x02\x02\x02\u0614\u0615\x07&\x02\x02\u0615\u0617" +
		"\x05\u010C\x87\x02\u0616\u0618\x05z>\x02\u0617\u0616\x03\x02\x02\x02\u0617" +
		"\u0618\x03\x02\x02\x02\u0618\u061A\x03\x02\x02\x02\u0619\u061B\x05\u0202" +
		"\u0102\x02\u061A\u0619\x03\x02\x02\x02\u061A\u061B\x03\x02\x02\x02\u061B" +
		"\u061D\x03\x02\x02\x02\u061C\u061E\x05\x80A\x02\u061D\u061C\x03\x02\x02" +
		"\x02\u061D\u061E\x03\x02\x02\x02\u061E\u061F\x03\x02\x02\x02\u061F\u0620" +
		"\x05\u010E\x88\x02\u0620\u0622\x03\x02\x02\x02\u0621\u05F5\x03\x02\x02" +
		"\x02\u0621\u060B\x03\x02\x02\x02\u0622\u010B\x03\x02\x02\x02\u0623\u0624" +
		"\x05\u0208\u0105\x02\u0624\u010D\x03\x02\x02\x02\u0625\u0629\x07\x87\x02" +
		"\x02\u0626\u0628\x05\u0110\x89\x02\u0627\u0626\x03\x02\x02\x02\u0628\u062B" +
		"\x03\x02\x02\x02\u0629\u0627\x03\x02\x02\x02\u0629\u062A\x03\x02\x02\x02" +
		"\u062A\u062C\x03\x02\x02\x02\u062B\u0629\x03\x02\x02\x02\u062C\u062D\x07" +
		"\x8A\x02\x02\u062D\u010F\x03\x02\x02\x02\u062E\u0631\x05\x90I\x02\u062F" +
		"\u0631\x05P)\x02\u0630\u062E\x03\x02\x02\x02\u0630\u062F\x03\x02\x02\x02" +
		"\u0631\u0111\x03\x02\x02\x02\u0632\u0634\x05\u0176\xBC\x02\u0633\u0632" +
		"\x03\x02\x02\x02\u0633\u0634\x03\x02\x02\x02\u0634\u0636\x03\x02\x02\x02" +
		"\u0635\u0637\x05\u0158\xAD\x02\u0636\u0635\x03\x02\x02\x02\u0636\u0637" +
		"\x03\x02\x02\x02\u0637\u0638\x03\x02\x02\x02\u0638\u0639\x07(\x02\x02" +
		"\u0639\u063B\x05\u0114\x8B\x02\u063A\u063C\x05\u0202\u0102\x02\u063B\u063A" +
		"\x03\x02\x02\x02\u063B\u063C\x03\x02\x02\x02\u063C\u063D\x03\x02\x02\x02" +
		"\u063D\u063E\x05\u0116\x8C\x02\u063E\u0113\x03\x02\x02\x02\u063F\u0640" +
		"\x05\u0208\u0105\x02\u0640\u0115\x03\x02\x02\x02\u0641\u0645\x07\x87\x02" +
		"\x02\u0642\u0644\x05\u0118\x8D\x02\u0643\u0642\x03\x02\x02\x02\u0644\u0647" +
		"\x03\x02\x02\x02\u0645\u0643\x03\x02\x02\x02\u0645\u0646\x03\x02\x02\x02" +
		"\u0646\u0648\x03\x02\x02\x02\u0647\u0645\x03\x02\x02\x02\u0648\u0649\x07" +
		"\x8A\x02\x02\u0649\u0117\x03\x02\x02\x02\u064A\u064D\x05\u011A\x8E\x02" +
		"\u064B\u064D\x05P)\x02\u064C\u064A\x03\x02\x02\x02\u064C\u064B\x03\x02" +
		"\x02\x02\u064D\u0119\x03\x02\x02\x02\u064E\u0655\x05\u011C\x8F\x02\u064F" +
		"\u0655\x05\u011E\x90\x02\u0650\u0655\x05\u0120\x91\x02\u0651\u0655\x05" +
		"\u0122\x92\x02\u0652\u0655\x05\u0124\x93\x02\u0653\u0655\x05\xC2b\x02" +
		"\u0654\u064E\x03\x02\x02\x02\u0654\u064F\x03\x02\x02\x02\u0654\u0650\x03" +
		"\x02\x02\x02\u0654\u0651\x03\x02\x02\x02\u0654\u0652\x03\x02\x02\x02\u0654" +
		"\u0653\x03\x02\x02\x02\u0655\u011B\x03\x02\x02\x02\u0656\u0657\x05\xAA" +
		"V\x02\u0657\u0658\x05\xACW\x02\u0658\u0659\x05\u01E2\xF2\x02\u0659\u065A" +
		"\x05\xB6\\\x02\u065A\u011D\x03\x02\x02\x02\u065B\u065C\x05\xCAf\x02\u065C" +
		"\u065E\x05\xCCg\x02\u065D\u065F\x05z>\x02\u065E\u065D\x03\x02\x02\x02" +
		"\u065E\u065F\x03\x02\x02\x02\u065F\u0660\x03\x02\x02\x02\u0660\u0662\x05" +
		"\xCEh\x02\u0661\u0663\x05\x80A\x02\u0662\u0661\x03\x02\x02\x02\u0662\u0663" +
		"\x03\x02\x02\x02\u0663\u011F\x03\x02\x02\x02\u0664\u0666\x05\u0128\x95" +
		"\x02\u0665\u0667\x05z>\x02\u0666\u0665\x03\x02\x02\x02\u0666\u0667\x03" +
		"\x02\x02\x02\u0667\u0668\x03\x02\x02\x02\u0668\u066A\x05\xD4k\x02\u0669" +
		"\u066B\x07.\x02\x02\u066A\u0669\x03\x02\x02\x02\u066A\u066B\x03\x02\x02" +
		"\x02\u066B\u066D\x03\x02\x02\x02\u066C\u066E\x05\x80A\x02\u066D\u066C" +
		"\x03\x02\x02\x02\u066D\u066E\x03\x02\x02\x02\u066E\u0679\x03\x02\x02\x02" +
		"\u066F\u0671\x05\u0128\x95\x02\u0670\u0672\x05z>\x02\u0671\u0670\x03\x02" +
		"\x02\x02\u0671\u0672\x03\x02\x02\x02\u0672\u0673\x03\x02\x02\x02\u0673" +
		"\u0674\x05\xD4k\x02\u0674\u0676\x07/\x02\x02\u0675\u0677\x05\x80A\x02" +
		"\u0676\u0675\x03\x02\x02\x02\u0676\u0677\x03\x02\x02\x02\u0677\u0679\x03" +
		"\x02\x02\x02\u0678\u0664\x03\x02\x02\x02\u0678\u066F\x03\x02\x02\x02\u0679" +
		"\u0121\x03\x02\x02\x02\u067A\u067B\x05\u0136\x9C\x02\u067B\u067C\x05\u0138" +
		"\x9D\x02\u067C\u067D\x05\xB6\\\x02\u067D\u0123\x03\x02\x02\x02\u067E\u0680" +
		"\x05\u0176\xBC\x02\u067F\u067E\x03\x02\x02\x02\u067F\u0680\x03\x02\x02" +
		"\x02\u0680\u0682\x03\x02\x02\x02\u0681\u0683\x05\u0158\xAD\x02\u0682\u0681" +
		"\x03\x02\x02\x02\u0682\u0683\x03\x02\x02\x02\u0683\u0684\x03\x02\x02\x02" +
		"\u0684\u0685\x072\x02\x02\u0685\u0687\x05\xC4c\x02\u0686\u0688\x05\u0202" +
		"\u0102\x02\u0687\u0686\x03\x02\x02\x02\u0687\u0688\x03\x02\x02\x02\u0688" +
		"\u068A\x03\x02\x02\x02\u0689\u068B\x05\xC6d\x02\u068A\u0689\x03\x02\x02" +
		"\x02\u068A\u068B\x03\x02\x02\x02\u068B\u0125\x03\x02\x02\x02\u068C\u068E" +
		"\x05\u0128\x95\x02\u068D\u068F\x05z>\x02\u068E\u068D\x03\x02\x02\x02\u068E" +
		"\u068F\x03\x02\x02\x02\u068F\u0690\x03\x02\x02\x02\u0690\u0692\x05\xD4" +
		"k\x02\u0691\u0693\x07.\x02\x02\u0692\u0691\x03\x02\x02\x02\u0692\u0693" +
		"\x03\x02\x02\x02\u0693\u0695\x03\x02\x02\x02\u0694\u0696\x05\x80A\x02" +
		"\u0695\u0694\x03\x02\x02\x02\u0695\u0696\x03\x02\x02\x02\u0696\u0697\x03" +
		"\x02\x02\x02\u0697\u0698\x05\u012A\x96\x02\u0698\u06A5\x03\x02\x02\x02" +
		"\u0699\u069B\x05\u0128\x95\x02\u069A\u069C\x05z>\x02\u069B\u069A\x03\x02" +
		"\x02\x02\u069B\u069C\x03\x02\x02\x02\u069C\u069D\x03\x02\x02\x02\u069D" +
		"\u069E\x05\xD4k\x02\u069E\u06A0\x07/\x02\x02\u069F\u06A1\x05\x80A\x02" +
		"\u06A0\u069F\x03\x02\x02\x02\u06A0\u06A1\x03\x02\x02\x02\u06A1\u06A2\x03" +
		"\x02\x02\x02\u06A2\u06A3\x05\u012A\x96\x02\u06A3\u06A5\x03\x02\x02\x02" +
		"\u06A4\u068C\x03\x02\x02\x02\u06A4\u0699\x03\x02\x02\x02\u06A5\u0127\x03" +
		"\x02\x02\x02\u06A6\u06A8\x05\u0176\xBC\x02\u06A7\u06A6\x03\x02\x02\x02" +
		"\u06A7\u06A8\x03\x02\x02\x02\u06A8\u06AA\x03\x02\x02\x02\u06A9\u06AB\x05" +
		"\u0156\xAC\x02\u06AA\u06A9\x03\x02\x02\x02\u06AA\u06AB\x03\x02\x02\x02" +
		"\u06AB\u06AC\x03\x02\x02\x02\u06AC\u06BE\x073\x02\x02\u06AD\u06AF\x05" +
		"\u0176\xBC\x02\u06AE\u06AD\x03\x02\x02\x02\u06AE\u06AF\x03\x02\x02\x02" +
		"\u06AF\u06B1\x03\x02\x02\x02\u06B0\u06B2\x05\u0156\xAC\x02\u06B1\u06B0" +
		"\x03\x02\x02\x02\u06B1\u06B2\x03\x02\x02\x02\u06B2\u06B3\x03\x02\x02\x02" +
		"\u06B3\u06B4\x073\x02\x02\u06B4\u06BE\x07\x94\x02\x02\u06B5\u06B7\x05" +
		"\u0176\xBC\x02\u06B6\u06B5\x03\x02\x02\x02\u06B6\u06B7\x03\x02\x02\x02" +
		"\u06B7\u06B9\x03\x02\x02\x02\u06B8\u06BA\x05\u0156\xAC\x02\u06B9\u06B8" +
		"\x03\x02\x02\x02\u06B9\u06BA\x03\x02\x02\x02\u06BA\u06BB\x03\x02\x02\x02" +
		"\u06BB\u06BC\x073\x02\x02\u06BC\u06BE\x07\x93\x02\x02\u06BD\u06A7\x03" +
		"\x02\x02\x02\u06BD\u06AE\x03\x02\x02\x02\u06BD\u06B6\x03\x02\x02\x02\u06BE" +
		"\u0129\x03\x02\x02\x02\u06BF\u06C0\x05\x96L\x02\u06C0\u012B\x03\x02\x02" +
		"\x02\u06C1\u06C3\x05\u0176\xBC\x02\u06C2\u06C1\x03\x02\x02\x02\u06C2\u06C3" +
		"\x03\x02\x02\x02\u06C3\u06C4\x03\x02\x02\x02\u06C4\u06C5\x074\x02\x02" +
		"\u06C5\u06C6\x05\x96L\x02\u06C6\u012D\x03\x02\x02\x02\u06C7\u06C9\x05" +
		"\u0176\xBC\x02\u06C8\u06C7\x03\x02\x02\x02\u06C8\u06C9\x03\x02\x02\x02" +
		"\u06C9\u06CB\x03\x02\x02\x02\u06CA\u06CC\x05\u0158\xAD\x02\u06CB\u06CA" +
		"\x03\x02\x02\x02\u06CB\u06CC\x03\x02\x02\x02\u06CC\u06CD\x03\x02\x02\x02" +
		"\u06CD\u06CE\x075\x02\x02\u06CE\u06D0\x05\u01E4\xF3\x02\u06CF\u06D1\x05" +
		"\u0202\u0102\x02\u06D0\u06CF\x03\x02\x02\x02\u06D0\u06D1\x03\x02\x02\x02" +
		"\u06D1\u06D2\x03\x02\x02\x02\u06D2\u06D3\x05\u0130\x99\x02\u06D3\u06E0" +
		"\x03\x02\x02\x02\u06D4\u06D6\x05\u0176\xBC\x02\u06D5\u06D4\x03\x02\x02" +
		"\x02\u06D5\u06D6\x03\x02\x02\x02\u06D6\u06D8\x03\x02\x02\x02\u06D7\u06D9" +
		"\x05\u0158\xAD\x02\u06D8\u06D7\x03\x02\x02\x02\u06D8\u06D9\x03\x02\x02" +
		"\x02\u06D9\u06DA\x03\x02\x02\x02\u06DA\u06DB\x075\x02\x02\u06DB\u06DC" +
		"\x05\u01E4\xF3\x02\u06DC\u06DD\x05\x80A\x02\u06DD\u06DE\x05\u0130\x99" +
		"\x02\u06DE\u06E0\x03\x02\x02\x02\u06DF\u06C8\x03\x02\x02\x02\u06DF\u06D5" +
		"\x03\x02\x02\x02\u06E0\u012F\x03\x02\x02\x02\u06E1\u06E5\x07\x87\x02\x02" +
		"\u06E2\u06E4\x05\u0132\x9A\x02\u06E3\u06E2\x03\x02\x02\x02\u06E4\u06E7" +
		"\x03\x02\x02\x02\u06E5\u06E3\x03\x02\x02\x02\u06E5\u06E6\x03\x02\x02\x02" +
		"\u06E6\u06E8\x03\x02\x02\x02\u06E7\u06E5\x03\x02\x02\x02\u06E8\u06E9\x07" +
		"\x8A\x02\x02\u06E9\u0131\x03\x02\x02\x02\u06EA\u06ED\x05\x90I\x02\u06EB" +
		"\u06ED\x05P)\x02\u06EC\u06EA\x03\x02\x02\x02\u06EC\u06EB\x03\x02\x02\x02" +
		"\u06ED\u0133\x03\x02\x02\x02\u06EE\u06EF\x05\u0136\x9C\x02\u06EF\u06F0" +
		"\x05\u0138\x9D\x02\u06F0\u06F1\x05\x96L\x02\u06F1\u06FB\x03\x02\x02\x02" +
		"\u06F2\u06F3\x05\u0136\x9C\x02\u06F3\u06F4\x05\u0138\x9D\x02\u06F4\u06F5" +
		"\x05\xAEX\x02\u06F5\u06FB\x03\x02\x02\x02\u06F6\u06F7\x05\u0136\x9C\x02" +
		"\u06F7\u06F8\x05\u0138\x9D\x02\u06F8\u06F9\x05\xB6\\\x02\u06F9\u06FB\x03" +
		"\x02\x02\x02\u06FA\u06EE\x03\x02\x02\x02\u06FA\u06F2\x03\x02\x02\x02\u06FA" +
		"\u06F6\x03\x02\x02\x02\u06FB\u0135\x03\x02\x02\x02\u06FC\u06FE\x05\u0176" +
		"\xBC\x02\u06FD\u06FC\x03\x02\x02\x02\u06FD\u06FE\x03\x02\x02\x02\u06FE" +
		"\u0700\x03\x02\x02\x02\u06FF\u0701\x05\u0156\xAC\x02\u0700\u06FF\x03\x02" +
		"\x02\x02\u0700\u0701\x03\x02\x02\x02\u0701\u0702\x03\x02\x02\x02\u0702" +
		"\u0703\x076\x02\x02\u0703\u0704\x05\xD4k\x02\u0704\u0137\x03\x02\x02\x02" +
		"\u0705\u0707\x05\u021A\u010E\x02\u0706\u0708\x05\u0176\xBC\x02\u0707\u0706" +
		"\x03\x02\x02\x02\u0707\u0708\x03\x02\x02\x02\u0708\u0709\x03\x02\x02\x02" +
		"\u0709\u070A\x05\u01E0\xF1\x02\u070A\u0139\x03\x02\x02\x02\u070B\u070F" +
		"\x05\u013C\x9F\x02\u070C\u070F\x05\u013E\xA0\x02\u070D\u070F\x05\u0140" +
		"\xA1\x02\u070E\u070B\x03\x02\x02\x02\u070E\u070C\x03\x02\x02\x02\u070E" +
		"\u070D\x03\x02\x02\x02\u070F\u013B\x03\x02\x02\x02\u0710\u0711\x077\x02" +
		"\x02\u0711\u0712\x078\x02\x02\u0712\u0713\x05\u0226\u0114\x02\u0713\u013D" +
		"\x03\x02\x02\x02\u0714\u0715\x079\x02\x02\u0715\u0716\x078\x02\x02\u0716" +
		"\u0717\x05\u0226\u0114\x02\u0717\u013F\x03\x02\x02\x02\u0718\u0719\x07" +
		":\x02\x02\u0719\u071A\x078\x02\x02\u071A\u071C\x05\u0226\u0114\x02\u071B" +
		"\u071D\x05\u0142\xA2\x02\u071C\u071B\x03\x02\x02\x02\u071C\u071D\x03\x02" +
		"\x02\x02\u071D\u0141\x03\x02\x02\x02\u071E\u071F\x07\x8E\x02\x02\u071F" +
		"\u0720\x05\u0152\xAA\x02\u0720\u0143\x03\x02\x02\x02\u0721\u0722\x07;" +
		"\x02\x02\u0722\u0723\x05\u0152\xAA\x02\u0723\u0727\x07\x87\x02\x02\u0724" +
		"\u0726\x05\u0146\xA4\x02\u0725\u0724\x03\x02\x02\x02\u0726\u0729\x03\x02" +
		"\x02\x02\u0727\u0725\x03\x02\x02\x02\u0727\u0728\x03\x02\x02\x02\u0728" +
		"\u072A\x03\x02\x02\x02\u0729\u0727\x03\x02\x02\x02\u072A\u072B\x07\x8A" +
		"\x02\x02\u072B\u0145\x03\x02\x02\x02\u072C\u0730\x05\u0148\xA5\x02\u072D" +
		"\u0730\x05\u014A\xA6\x02\u072E\u0730\x05\u014C\xA7\x02\u072F\u072C\x03" +
		"\x02\x02\x02\u072F\u072D\x03\x02\x02\x02\u072F\u072E\x03\x02\x02\x02\u0730" +
		"\u0147\x03\x02\x02\x02\u0731\u0732\x07<\x02\x02\u0732\u0733\x07\x8E\x02" +
		"\x02\u0733\u0738\x05\u0150\xA9\x02\u0734\u0735\x07=\x02\x02\u0735\u0736" +
		"\x07\x8E\x02\x02\u0736\u0738\x05\u0150\xA9\x02\u0737\u0731\x03\x02\x02" +
		"\x02\u0737\u0734\x03\x02\x02\x02\u0738\u0149\x03\x02\x02\x02\u0739\u073A" +
		"\x07>\x02\x02\u073A\u073B\x07\x8E\x02\x02\u073B\u073C\x05\u0234\u011B" +
		"\x02\u073C\u014B\x03\x02\x02\x02\u073D\u073E\x07?\x02\x02\u073E\u073F" +
		"\x07\x8E\x02\x02\u073F\u0740\x05\u014E\xA8\x02\u0740\u014D\x03\x02\x02" +
		"\x02\u0741\u0742\t\x04\x02\x02\u0742\u014F\x03\x02\x02\x02\u0743\u0748" +
		"\x05\u0152\xAA\x02\u0744\u0745\x07\x8D\x02\x02\u0745\u0747\x05\u0152\xAA" +
		"\x02\u0746\u0744\x03\x02\x02\x02\u0747\u074A\x03\x02\x02\x02\u0748\u0746" +
		"\x03\x02\x02\x02\u0748\u0749\x03\x02\x02\x02\u0749\u0151\x03\x02\x02\x02" +
		"\u074A\u0748\x03\x02\x02\x02\u074B\u074C\x05\u0208\u0105\x02\u074C\u0153" +
		"\x03\x02\x02\x02\u074D\u0766\x07&\x02\x02\u074E\u0766\x07C\x02\x02\u074F" +
		"\u0766\x07D\x02\x02\u0750\u0766\x071\x02\x02\u0751\u0766\x07:\x02\x02" +
		"\u0752\u0766\x07E\x02\x02\u0753\u0766\x07F\x02\x02\u0754\u0766\x07G\x02" +
		"\x02\u0755\u0766\x079\x02\x02\u0756\u0766\x077\x02\x02\u0757\u0766\x07" +
		"H\x02\x02\u0758\u0766\x07I\x02\x02\u0759\u0766\x07J\x02\x02\u075A\u075B" +
		"\x07J\x02\x02\u075B\u075C\x07\x88\x02\x02\u075C\u075D\x07K\x02\x02\u075D" +
		"\u0766\x07\x8B\x02\x02\u075E\u075F\x07J\x02\x02\u075F\u0760\x07\x88\x02" +
		"\x02\u0760\u0761\x07L\x02\x02\u0761\u0766\x07\x8B\x02\x02\u0762\u0766" +
		"\x07M\x02\x02\u0763\u0766\x05\u0158\xAD\x02\u0764\u0766\x05\u015A\xAE" +
		"\x02\u0765\u074D\x03\x02\x02\x02\u0765\u074E\x03\x02\x02\x02\u0765\u074F" +
		"\x03\x02\x02\x02\u0765\u0750\x03\x02\x02\x02\u0765\u0751\x03\x02\x02\x02" +
		"\u0765\u0752\x03\x02\x02\x02\u0765\u0753\x03\x02\x02\x02\u0765\u0754\x03" +
		"\x02\x02\x02\u0765\u0755\x03\x02\x02\x02\u0765\u0756\x03\x02\x02\x02\u0765" +
		"\u0757\x03\x02\x02\x02\u0765\u0758\x03\x02\x02\x02\u0765\u0759\x03\x02" +
		"\x02\x02\u0765\u075A\x03\x02\x02\x02\u0765\u075E\x03\x02\x02\x02\u0765" +
		"\u0762\x03\x02\x02\x02\u0765\u0763\x03\x02\x02\x02\u0765\u0764\x03\x02" +
		"\x02\x02\u0766\u0155\x03\x02\x02\x02\u0767\u0769\x05\u0154\xAB\x02\u0768" +
		"\u0767\x03\x02\x02\x02\u0769\u076A\x03\x02\x02\x02\u076A\u0768\x03\x02" +
		"\x02\x02\u076A\u076B\x03\x02\x02\x02\u076B\u0157\x03\x02\x02\x02\u076C" +
		"\u0786\x07N\x02\x02\u076D\u076E\x07N\x02\x02\u076E\u076F\x07\x88\x02\x02" +
		"\u076F\u0770\x07+\x02\x02\u0770\u0786\x07\x8B\x02\x02\u0771\u0786\x07" +
		"O\x02\x02\u0772\u0773\x07O\x02\x02\u0773\u0774\x07\x88\x02\x02\u0774\u0775" +
		"\x07+\x02\x02\u0775\u0786\x07\x8B\x02\x02\u0776\u0786\x07P\x02\x02\u0777" +
		"\u0778\x07P\x02\x02\u0778\u0779\x07\x88\x02\x02\u0779\u077A\x07+\x02\x02" +
		"\u077A\u0786\x07\x8B\x02\x02\u077B\u0786\x07Q\x02\x02\u077C\u077D\x07" +
		"Q\x02\x02\u077D\u077E\x07\x88\x02\x02\u077E\u077F\x07+\x02\x02\u077F\u0786" +
		"\x07\x8B\x02\x02\u0780\u0786\x07R\x02\x02\u0781\u0782\x07R\x02\x02\u0782" +
		"\u0783\x07\x88\x02\x02\u0783\u0784\x07+\x02\x02\u0784\u0786\x07\x8B\x02" +
		"\x02\u0785\u076C\x03\x02\x02\x02\u0785\u076D\x03\x02\x02\x02\u0785\u0771" +
		"\x03\x02\x02\x02\u0785\u0772\x03\x02\x02\x02\u0785\u0776\x03\x02\x02\x02" +
		"\u0785\u0777\x03\x02\x02\x02\u0785\u077B\x03\x02\x02\x02\u0785\u077C\x03" +
		"\x02\x02\x02\u0785\u0780\x03\x02\x02\x02\u0785\u0781\x03\x02\x02\x02\u0786" +
		"\u0159\x03\x02\x02\x02\u0787\u0788\t\x05\x02\x02\u0788\u015B\x03\x02\x02" +
		"\x02\u0789\u078A\b\xAF\x01\x02\u078A\u078C\x05\u015E\xB0\x02\u078B\u078D" +
		"\x05\u01E2\xF2\x02\u078C\u078B\x03\x02\x02\x02\u078C\u078D\x03\x02\x02" +
		"\x02\u078D\u079D\x03\x02\x02\x02\u078E\u0790\x05\u0160\xB1\x02\u078F\u0791" +
		"\x05\u01E2\xF2\x02\u0790\u078F\x03\x02\x02\x02\u0790\u0791\x03\x02\x02" +
		"\x02\u0791\u079D\x03\x02\x02\x02\u0792\u079D\x05\u0162\xB2\x02\u0793\u0795" +
		"\x05\u0164\xB3\x02\u0794\u0796\x05\u01E2\xF2\x02\u0795\u0794\x03\x02\x02" +
		"\x02\u0795\u0796\x03\x02\x02\x02\u0796\u079D\x03\x02\x02\x02\u0797\u079D" +
		"\x05\u016A\xB6\x02\u0798\u079D\x05\u016C\xB7\x02\u0799\u079A\x07U\x02" +
		"\x02\u079A\u079D\x05\u01E0\xF1\x02\u079B\u079D\x05\u016E\xB8\x02\u079C" +
		"\u0789\x03\x02\x02\x02\u079C\u078E\x03\x02\x02\x02\u079C\u0792\x03\x02" +
		"\x02\x02\u079C\u0793\x03\x02\x02\x02\u079C\u0797\x03\x02\x02\x02\u079C" +
		"\u0798\x03\x02\x02\x02\u079C\u0799\x03\x02\x02\x02\u079C\u079B\x03\x02" +
		"\x02\x02\u079D\u07A3\x03\x02\x02\x02\u079E\u079F\f\x04\x02\x02\u079F\u07A0" +
		"\x07V\x02\x02\u07A0\u07A2\x05\u01E0\xF1\x02\u07A1\u079E\x03\x02\x02\x02" +
		"\u07A2\u07A5\x03\x02\x02\x02\u07A3\u07A1\x03\x02\x02\x02\u07A3\u07A4\x03" +
		"\x02\x02\x02\u07A4\u015D\x03\x02\x02\x02\u07A5\u07A3\x03\x02\x02\x02\u07A6" +
		"\u07A7\x07\x92\x02\x02\u07A7\u015F\x03\x02\x02\x02\u07A8\u07A9\x05\u0208" +
		"\u0105\x02\u07A9\u0161\x03\x02\x02\x02\u07AA\u07AB\x07\b\x02\x02\u07AB" +
		"\u07AF\x05\u015C\xAF\x02\u07AC\u07AD\x07\x07\x02\x02\u07AD\u07AF\x05\u015C" +
		"\xAF\x02\u07AE\u07AA\x03\x02\x02\x02\u07AE\u07AC\x03\x02\x02\x02\u07AF" +
		"\u0163\x03\x02\x02\x02\u07B0\u07B2\x07\x88\x02\x02\u07B1\u07B3\x05\u0166" +
		"\xB4\x02\u07B2\u07B1\x03\x02\x02\x02\u07B2\u07B3\x03\x02\x02\x02\u07B3" +
		"\u07B4\x03\x02\x02\x02\u07B4\u07B5\x07\x8B\x02\x02\u07B5\u0165\x03\x02" +
		"\x02\x02\u07B6\u07BB\x05\u0168\xB5\x02\u07B7\u07B8\x07\x8D\x02\x02\u07B8" +
		"\u07BA\x05\u0168\xB5\x02\u07B9\u07B7\x03\x02\x02\x02\u07BA\u07BD\x03\x02" +
		"\x02\x02\u07BB\u07B9\x03\x02\x02\x02\u07BB\u07BC\x03\x02\x02\x02\u07BC" +
		"\u0167\x03\x02\x02\x02\u07BD\u07BB\x03\x02\x02\x02\u07BE\u07BF\x05\u015C" +
		"\xAF\x02\u07BF\u0169\x03\x02\x02\x02\u07C0\u07C2\x05\u01E4\xF3\x02\u07C1" +
		"\u07C0\x03\x02\x02\x02\u07C1\u07C2\x03\x02\x02\x02\u07C2\u07C3\x03\x02" +
		"\x02\x02\u07C3\u07C4\x07\x86\x02\x02\u07C4\u07C6\x05\xF0y\x02\u07C5\u07C7" +
		"\x05\u0164\xB3\x02\u07C6\u07C5\x03\x02\x02\x02\u07C6\u07C7\x03\x02\x02" +
		"\x02\u07C7\u016B\x03\x02\x02\x02\u07C8\u07C9\x05\u0160\xB1\x02\u07C9\u07CA" +
		"\x07\x94\x02\x02\u07CA\u016D\x03\x02\x02\x02\u07CB\u07CC\x05\u017E\xC0" +
		"\x02\u07CC\u016F\x03\x02\x02\x02\u07CD\u07CE\x07\x95\x02\x02\u07CE\u07D0" +
		"\x05\u0172\xBA\x02\u07CF\u07D1\x05\u0174\xBB\x02\u07D0\u07CF\x03\x02\x02" +
		"\x02\u07D0\u07D1\x03\x02\x02\x02\u07D1\u0171\x03\x02\x02\x02\u07D2\u07D3" +
		"\x05\u0208\u0105\x02\u07D3\u0173\x03\x02\x02\x02\u07D4\u07D5\x07\x88\x02" +
		"\x02\u07D5\u07D6\x05\u0178\xBD\x02\u07D6\u07D7\x07\x8B\x02\x02\u07D7\u0175" +
		"\x03\x02\x02\x02\u07D8\u07DA\x05\u0170\xB9\x02\u07D9\u07D8\x03\x02\x02" +
		"\x02\u07DA\u07DB\x03\x02\x02\x02\u07DB\u07D9\x03\x02\x02\x02\u07DB\u07DC" +
		"\x03\x02\x02\x02\u07DC\u0177\x03\x02\x02\x02\u07DD\u07DF\x05\u017A\xBE" +
		"\x02\u07DE\u07DD\x03\x02\x02\x02\u07DF\u07E2\x03\x02\x02\x02\u07E0\u07DE" +
		"\x03\x02\x02\x02\u07E0\u07E1\x03\x02\x02\x02\u07E1\u0179\x03\x02\x02\x02" +
		"\u07E2\u07E0\x03\x02\x02\x02\u07E3\u07E4\x07\x88\x02\x02\u07E4\u07E5\x05" +
		"\u0178\xBD\x02\u07E5\u07E6\x07\x8B\x02\x02\u07E6\u07F5\x03\x02\x02\x02" +
		"\u07E7\u07E8\x07\x89\x02\x02\u07E8\u07E9\x05\u0178\xBD\x02\u07E9\u07EA" +
		"\x07\x8C\x02\x02\u07EA\u07F5\x03\x02\x02\x02\u07EB\u07EC\x07\x87\x02\x02" +
		"\u07EC\u07ED\x05\u0178\xBD\x02\u07ED\u07EE\x07\x8A\x02\x02\u07EE\u07F5" +
		"\x03\x02\x02\x02\u07EF\u07F5\x05\u020A\u0106\x02\u07F0\u07F5\x05\u0230" +
		"\u0119\x02\u07F1\u07F5\x05\u0226\u0114\x02\u07F2\u07F5\x07\x84\x02\x02" +
		"\u07F3\u07F5\x05\u017C\xBF\x02\u07F4\u07E3\x03\x02\x02\x02\u07F4\u07E7" +
		"\x03\x02\x02\x02\u07F4\u07EB\x03\x02\x02\x02\u07F4\u07EF\x03\x02\x02\x02" +
		"\u07F4\u07F0\x03\x02\x02\x02\u07F4\u07F1\x03\x02\x02\x02\u07F4\u07F2\x03" +
		"\x02\x02\x02\u07F4\u07F3\x03\x02\x02\x02\u07F5\u017B\x03\x02\x02\x02\u07F6" +
		"\u07FD\t\x06\x02\x02\u07F7\u07FD\x05\u021A\u010E\x02\u07F8\u07F9\x06\xBF" +
		"\x06\x02\u07F9\u07FD\x07\x96\x02\x02\u07FA\u07FB\x06\xBF\x07\x02\u07FB" +
		"\u07FD\x07\x93\x02\x02\u07FC\u07F6\x03\x02\x02\x02\u07FC\u07F7\x03\x02" +
		"\x02\x02\u07FC\u07F8\x03\x02\x02\x02\u07FC\u07FA\x03\x02\x02\x02\u07FD" +
		"\u017D\x03\x02\x02\x02\u07FE\u0800\x05\u0186\xC4\x02\u07FF\u07FE\x03\x02" +
		"\x02\x02\u07FF\u0800\x03\x02\x02\x02\u0800\u0801\x03\x02\x02\x02\u0801" +
		"\u0803\x05\u0182\xC2\x02\u0802\u0804\x05\u018A\xC6\x02\u0803\u0802\x03" +
		"\x02\x02\x02\u0803\u0804\x03\x02\x02\x02\u0804\u017F\x03\x02\x02\x02\u0805" +
		"\u080A\x05\u017E\xC0\x02\u0806\u0807\x07\x8D\x02\x02\u0807\u0809\x05\u017E" +
		"\xC0\x02\u0808\u0806\x03\x02\x02\x02\u0809\u080C\x03\x02\x02\x02\u080A" +
		"\u0808\x03\x02\x02\x02\u080A\u080B\x03\x02\x02\x02\u080B\u0181\x03\x02" +
		"\x02\x02\u080C\u080A\x03\x02\x02\x02\u080D\u080E\x05\u0222\u0112\x02\u080E" +
		"\u080F\x05\u01D0\xE9\x02\u080F\u0813\x03\x02\x02\x02\u0810\u0813\x05\u01D0" +
		"\xE9\x02\u0811\u0813\x05\u0184\xC3\x02\u0812\u080D\x03\x02\x02\x02\u0812" +
		"\u0810\x03\x02\x02\x02\u0812\u0811\x03\x02\x02\x02\u0813\u0183\x03\x02" +
		"\x02\x02\u0814\u0815\x07\x96\x02\x02\u0815\u0816\x05\u0208\u0105\x02\u0816" +
		"\u0185\x03\x02\x02\x02\u0817\u0818\x07Y\x02\x02\u0818\u081D\x07\x94\x02" +
		"\x02\u0819\u081A\x07Y\x02\x02\u081A\u081D\x07\x93\x02\x02\u081B\u081D" +
		"\x07Y\x02\x02\u081C\u0817\x03\x02\x02\x02\u081C\u0819\x03\x02\x02\x02" +
		"\u081C\u081B\x03\x02\x02\x02\u081D\u0187\x03\x02\x02\x02\u081E\u081F\x05" +
		"\u0220\u0111\x02\u081F\u0820\x05\u0182\xC2\x02\u0820\u082F\x03\x02\x02" +
		"\x02\u0821\u0823\x05\u0210\u0109\x02\u0822\u0824\x05\u0186\xC4\x02\u0823" +
		"\u0822\x03\x02\x02\x02\u0823\u0824\x03\x02\x02\x02\u0824\u0825\x03\x02" +
		"\x02\x02\u0825\u0826\x05\u0182\xC2\x02\u0826\u082F\x03\x02\x02\x02\u0827" +
		"\u0829\x05\u018C\xC7\x02\u0828\u082A\x05\u0186\xC4\x02\u0829\u0828\x03" +
		"\x02\x02\x02\u0829\u082A\x03\x02\x02\x02\u082A\u082B\x03\x02\x02\x02\u082B" +
		"\u082C\x05\u0182\xC2\x02\u082C\u082F\x03\x02\x02\x02\u082D\u082F\x05\u018E" +
		"\xC8\x02\u082E\u081E\x03\x02\x02\x02\u082E\u0821\x03\x02\x02\x02\u082E" +
		"\u0827\x03\x02\x02\x02\u082E\u082D\x03\x02\x02\x02\u082F\u0189\x03\x02" +
		"\x02\x02\u0830\u0832\x05\u0188\xC5\x02\u0831\u0830\x03\x02\x02\x02\u0832" +
		"\u0833\x03\x02\x02\x02\u0833\u0831\x03\x02\x02\x02\u0833\u0834\x03\x02" +
		"\x02\x02\u0834\u018B\x03\x02\x02\x02\u0835\u0837\x07\x94\x02\x02\u0836" +
		"\u0838\x05\u0186\xC4\x02\u0837\u0836\x03\x02\x02\x02\u0837\u0838\x03\x02" +
		"\x02\x02\u0838\u0839\x03\x02\x02\x02\u0839\u083A\x05\u017E\xC0\x02\u083A" +
		"\u083B\x07\x8E\x02\x02\u083B\u018D\x03\x02\x02\x02\u083C\u083D\x07U\x02" +
		"\x02\u083D\u0847\x05\u01E0\xF1\x02\u083E\u083F\x07V\x02\x02\u083F\u0847" +
		"\x05\u01E0\xF1\x02\u0840\u0841\x07V\x02\x02\u0841\u0842\x07\x94\x02\x02" +
		"\u0842\u0847\x05\u01E0\xF1\x02\u0843\u0844\x07V\x02\x02\u0844\u0845\x07" +
		"\x93\x02\x02\u0845\u0847\x05\u01E0\xF1\x02\u0846\u083C\x03\x02\x02\x02" +
		"\u0846\u083E\x03\x02\x02\x02\u0846\u0840\x03\x02\x02\x02\u0846\u0843\x03" +
		"\x02\x02\x02\u0847\u018F\x03\x02\x02\x02\u0848\u084A\x05\u0208\u0105\x02" +
		"\u0849\u084B\x05\x8AF\x02\u084A\u0849\x03\x02\x02\x02\u084A\u084B\x03" +
		"\x02\x02\x02\u084B\u0857\x03\x02\x02\x02\u084C\u0857\x05\u0192\xCA\x02" +
		"\u084D\u0857\x05\u01A2\xD2\x02\u084E\u0857\x05\u01A4\xD3\x02\u084F\u0857" +
		"\x05\u01AC\xD7\x02\u0850\u0857\x05\u01C4\xE3\x02\u0851\u0857\x05\u01C6" +
		"\xE4\x02\u0852\u0857\x05\u01C2\xE2\x02\u0853\u0857\x05\u01CA\xE6\x02\u0854" +
		"\u0857\x05\u01CC\xE7\x02\u0855\u0857\x05\u01CE\xE8\x02\u0856\u0848\x03" +
		"\x02\x02\x02\u0856\u084C\x03\x02\x02\x02\u0856\u084D\x03\x02\x02\x02\u0856" +
		"\u084E\x03\x02\x02\x02\u0856\u084F\x03\x02\x02\x02\u0856\u0850\x03\x02" +
		"\x02\x02\u0856\u0851\x03\x02\x02\x02\u0856\u0852\x03\x02\x02\x02\u0856" +
		"\u0853\x03\x02\x02\x02\u0856\u0854\x03\x02\x02\x02\u0856\u0855\x03\x02" +
		"\x02\x02\u0857\u0191\x03\x02\x02\x02\u0858\u0861\x05\u0230\u0119\x02\u0859" +
		"\u0861\x05\u0194\xCB\x02\u085A\u0861\x05\u019A\xCE\x02\u085B\u0861\x07" +
		"Z\x02\x02\u085C\u0861\x07[\x02\x02\u085D\u0861\x07\\\x02\x02\u085E\u0861" +
		"\x07]\x02\x02\u085F\u0861\x07^\x02\x02\u0860\u0858\x03\x02\x02\x02\u0860" +
		"\u0859\x03\x02\x02\x02\u0860\u085A\x03\x02\x02\x02\u0860\u085B\x03\x02" +
		"\x02\x02\u0860\u085C\x03\x02\x02\x02\u0860\u085D\x03\x02\x02\x02\u0860" +
		"\u085E\x03\x02\x02\x02\u0860\u085F\x03\x02\x02\x02\u0861\u0193\x03\x02" +
		"\x02\x02\u0862\u0864\x07\x89\x02\x02\u0863\u0865\x05\u0196\xCC\x02\u0864" +
		"\u0863\x03\x02\x02\x02\u0864\u0865\x03\x02\x02\x02\u0865\u0866\x03\x02" +
		"\x02\x02\u0866\u0867\x07\x8C\x02\x02\u0867\u0195\x03\x02\x02\x02\u0868" +
		"\u086A\x05\u0198\xCD\x02\u0869\u086B\x07\x8D\x02\x02\u086A\u0869\x03\x02" +
		"\x02\x02\u086A\u086B\x03\x02\x02\x02\u086B\u0871\x03\x02\x02\x02\u086C" +
		"\u086D\x05\u0198\xCD\x02\u086D\u086E\x07\x8D\x02\x02\u086E\u086F\x05\u0196" +
		"\xCC\x02\u086F\u0871\x03\x02\x02";
	private static readonly _serializedATNSegment4: string =
		"\x02\u0870\u0868\x03\x02\x02\x02\u0870\u086C\x03\x02\x02\x02\u0871\u0197" +
		"\x03\x02\x02\x02\u0872\u0873\x05\u017E\xC0\x02\u0873\u0199\x03\x02\x02" +
		"\x02\u0874\u0875\x07\x89\x02\x02\u0875\u0876\x05\u019C\xCF\x02\u0876\u0877" +
		"\x07\x8C\x02\x02\u0877\u087C\x03\x02\x02\x02\u0878\u0879\x07\x89\x02\x02" +
		"\u0879\u087A\x07\x8E\x02\x02\u087A\u087C\x07\x8C\x02\x02\u087B\u0874\x03" +
		"\x02\x02\x02\u087B\u0878\x03\x02\x02\x02\u087C\u019B\x03\x02\x02\x02\u087D" +
		"\u087F\x05\u019E\xD0\x02\u087E\u0880\x07\x8D\x02\x02\u087F\u087E\x03\x02" +
		"\x02\x02\u087F\u0880\x03\x02\x02\x02\u0880\u0886\x03\x02\x02\x02\u0881" +
		"\u0882\x05\u019E\xD0\x02\u0882\u0883\x07\x8D\x02\x02\u0883\u0884\x05\u019C" +
		"\xCF\x02\u0884\u0886\x03\x02\x02\x02\u0885\u087D\x03\x02\x02\x02\u0885" +
		"\u0881\x03\x02\x02\x02\u0886\u019D\x03\x02\x02\x02\u0887\u0888\x05\u017E" +
		"\xC0\x02\u0888\u0889\x07\x8E\x02\x02\u0889\u088A\x05\u017E\xC0\x02\u088A" +
		"\u019F\x03\x02\x02\x02\u088B\u088C\x07_\x02\x02\u088C\u088D\x07\x88\x02" +
		"\x02\u088D\u088E\x07`\x02\x02\u088E\u088F\x07\x8E\x02\x02\u088F\u0890" +
		"\x05\u017E\xC0\x02\u0890\u0891\x07\x8D\x02\x02\u0891\u0892\x07a\x02\x02" +
		"\u0892\u0893\x07\x8E\x02\x02\u0893\u0894\x05\u017E\xC0\x02\u0894\u0895" +
		"\x07\x8D\x02\x02\u0895\u0896\x07b\x02\x02\u0896\u0897\x07\x8E\x02\x02" +
		"\u0897\u0898\x05\u017E\xC0\x02\u0898\u0899\x07\x8D\x02\x02\u0899\u089A" +
		"\x07c\x02\x02\u089A\u089B\x07\x8E\x02\x02\u089B\u089C\x05\u017E\xC0\x02" +
		"\u089C\u089D\x07\x8B\x02\x02\u089D\u08AD\x03\x02\x02\x02\u089E\u089F\x07" +
		"d\x02\x02\u089F\u08A0\x07\x88\x02\x02\u08A0\u08A1\x07e\x02\x02\u08A1\u08A2" +
		"\x07\x8E\x02\x02\u08A2\u08A3\x05\u017E\xC0\x02\u08A3\u08A4\x07\x8B\x02" +
		"\x02\u08A4\u08AD\x03\x02\x02\x02\u08A5\u08A6\x07f\x02\x02\u08A6\u08A7" +
		"\x07\x88\x02\x02\u08A7\u08A8\x07e\x02\x02\u08A8\u08A9\x07\x8E\x02\x02" +
		"\u08A9\u08AA\x05\u017E\xC0\x02\u08AA\u08AB\x07\x8B\x02\x02\u08AB\u08AD" +
		"\x03\x02\x02\x02\u08AC\u088B\x03\x02\x02\x02\u08AC\u089E\x03\x02\x02\x02" +
		"\u08AC\u08A5\x03\x02\x02\x02\u08AD\u01A1\x03\x02\x02\x02\u08AE\u08C2\x07" +
		"g\x02\x02\u08AF\u08B0\x07g\x02\x02\u08B0\u08B1\x07\x86\x02\x02\u08B1\u08C2" +
		"\x05\u0208\u0105\x02\u08B2\u08B3\x07g\x02\x02\u08B3\u08B4\x07\x89\x02" +
		"\x02\u08B4\u08B5\x05\u0180\xC1\x02\u08B5\u08B6\x07\x8C\x02\x02\u08B6\u08C2" +
		"\x03\x02\x02\x02\u08B7\u08B8\x07g\x02\x02\u08B8\u08B9\x07\x86\x02\x02" +
		"\u08B9\u08C2\x073\x02\x02\u08BA\u08C2\x07h\x02\x02\u08BB\u08BC\x07h\x02" +
		"\x02\u08BC\u08BD\x07\x86\x02\x02\u08BD\u08C2\x05\u0208\u0105\x02\u08BE" +
		"\u08BF\x07h\x02\x02\u08BF\u08C0\x07\x86\x02\x02\u08C0\u08C2\x073\x02\x02" +
		"\u08C1\u08AE\x03\x02\x02\x02\u08C1\u08AF\x03\x02\x02\x02\u08C1\u08B2\x03" +
		"\x02\x02\x02\u08C1\u08B7\x03\x02\x02\x02\u08C1\u08BA\x03\x02\x02\x02\u08C1" +
		"\u08BB\x03\x02\x02\x02\u08C1\u08BE\x03\x02\x02\x02\u08C2\u01A3\x03\x02" +
		"\x02\x02\u08C3\u08C7\x05\u01A6\xD4\x02\u08C4\u08C7\x05\u01A8\xD5\x02\u08C5" +
		"\u08C7\x05\u01AA\xD6\x02\u08C6\u08C3\x03\x02\x02\x02\u08C6\u08C4\x03\x02" +
		"\x02\x02\u08C6\u08C5\x03\x02\x02\x02\u08C7\u01A5\x03\x02\x02\x02\u08C8" +
		"\u08C9\x07i\x02\x02\u08C9\u08CA\x07\x86\x02\x02\u08CA\u08CB\x05\u0208" +
		"\u0105\x02\u08CB\u01A7\x03\x02\x02\x02\u08CC\u08CD\x07i\x02\x02\u08CD" +
		"\u08CE\x07\x89\x02\x02\u08CE\u08CF\x05\u017E\xC0\x02\u08CF\u08D0\x07\x8C" +
		"\x02\x02\u08D0\u01A9\x03\x02\x02\x02\u08D1\u08D2\x07i\x02\x02\u08D2\u08D3" +
		"\x07\x86\x02\x02\u08D3\u08D4\x073\x02\x02\u08D4\u01AB\x03\x02\x02\x02" +
		"\u08D5\u08D7\x07\x87\x02\x02\u08D6\u08D8\x05\u01AE\xD8\x02\u08D7\u08D6" +
		"\x03\x02\x02\x02\u08D7\u08D8\x03\x02\x02\x02\u08D8\u08DA\x03\x02\x02\x02" +
		"\u08D9\u08DB\x05\x06\x04\x02\u08DA\u08D9\x03\x02\x02\x02\u08DA\u08DB\x03" +
		"\x02\x02\x02\u08DB\u08DC\x03\x02\x02\x02\u08DC\u08DD\x07\x8A\x02\x02\u08DD" +
		"\u01AD\x03\x02\x02\x02\u08DE\u08E0\x05\u01BA\xDE\x02\u08DF\u08DE\x03\x02" +
		"\x02\x02\u08DF\u08E0\x03\x02\x02\x02\u08E0\u08E1\x03\x02\x02\x02\u08E1" +
		"\u08E3\x05\u01B0\xD9\x02\u08E2\u08E4\x07.\x02\x02\u08E3\u08E2\x03\x02" +
		"\x02\x02\u08E3\u08E4\x03\x02\x02\x02\u08E4\u08E6\x03\x02\x02\x02\u08E5" +
		"\u08E7\x05\xD0i\x02\u08E6\u08E5\x03\x02\x02\x02\u08E6\u08E7\x03\x02\x02" +
		"\x02\u08E7\u08E8\x03\x02\x02\x02\u08E8\u08E9\x07\x05\x02\x02\u08E9\u08EE" +
		"\x03\x02\x02\x02\u08EA\u08EB\x05\u01BA\xDE\x02\u08EB\u08EC\x07\x05\x02" +
		"\x02\u08EC\u08EE\x03\x02\x02\x02\u08ED\u08DF\x03\x02\x02\x02\u08ED\u08EA" +
		"\x03\x02\x02\x02\u08EE\u01AF\x03\x02\x02\x02\u08EF\u08F0\x07\x88\x02\x02" +
		"\u08F0\u08F7\x07\x8B\x02\x02\u08F1\u08F2\x07\x88\x02\x02\u08F2\u08F3\x05" +
		"\u01B4\xDB\x02\u08F3\u08F4\x07\x8B\x02\x02\u08F4\u08F7\x03\x02\x02\x02" +
		"\u08F5\u08F7\x05\u01B2\xDA\x02\u08F6\u08EF\x03\x02\x02\x02\u08F6\u08F1" +
		"\x03\x02\x02\x02\u08F6\u08F5\x03\x02\x02\x02\u08F7\u01B1\x03\x02\x02\x02" +
		"\u08F8\u08FD\x05\u0208\u0105\x02\u08F9\u08FA\x07\x8D\x02\x02\u08FA\u08FC" +
		"\x05\u0208\u0105\x02\u08FB\u08F9\x03\x02\x02\x02\u08FC\u08FF\x03\x02\x02" +
		"\x02\u08FD\u08FB\x03\x02\x02\x02\u08FD\u08FE\x03\x02\x02\x02\u08FE\u01B3" +
		"\x03\x02\x02\x02\u08FF\u08FD\x03\x02\x02\x02\u0900\u0905\x05\u01B6\xDC" +
		"\x02\u0901\u0902\x07\x8D\x02\x02\u0902\u0904\x05\u01B6\xDC\x02\u0903\u0901" +
		"\x03\x02\x02\x02\u0904\u0907\x03\x02\x02\x02\u0905\u0903\x03\x02\x02\x02" +
		"\u0905\u0906\x03\x02\x02\x02\u0906\u01B5\x03\x02\x02\x02\u0907\u0905\x03" +
		"\x02\x02\x02\u0908\u090A\x05\u01B8\xDD\x02\u0909\u090B\x05\u01E2\xF2\x02" +
		"\u090A\u0909\x03\x02\x02\x02\u090A\u090B\x03\x02\x02\x02\u090B\u0911\x03" +
		"\x02\x02\x02\u090C\u090D\x05\u01B8\xDD\x02\u090D\u090E\x05\u01E2\xF2\x02" +
		"\u090E\u090F\x05\u021C\u010F\x02\u090F\u0911\x03\x02\x02\x02\u0910\u0908" +
		"\x03\x02\x02\x02\u0910\u090C\x03\x02\x02\x02\u0911\u01B7\x03\x02\x02\x02" +
		"\u0912\u0913\x05\u020A\u0106\x02\u0913\u01B9\x03\x02\x02\x02\u0914\u0915" +
		"\x07\x89\x02\x02\u0915\u0916\x05\u01BC\xDF\x02\u0916\u0917\x07\x8C\x02" +
		"\x02\u0917\u01BB\x03\x02\x02\x02\u0918\u091D\x05\u01BE\xE0\x02\u0919\u091A" +
		"\x07\x8D\x02\x02\u091A\u091C\x05\u01BE\xE0\x02\u091B\u0919\x03\x02\x02" +
		"\x02\u091C\u091F\x03\x02\x02\x02\u091D\u091B\x03\x02\x02\x02\u091D\u091E" +
		"\x03\x02\x02\x02\u091E\u01BD\x03\x02\x02\x02\u091F\u091D\x03\x02\x02\x02" +
		"\u0920\u0922\x05\u01C0\xE1\x02\u0921\u0920\x03\x02\x02\x02\u0921\u0922" +
		"\x03\x02\x02\x02\u0922\u0923\x03\x02\x02\x02\u0923\u0924\x05\u017E\xC0" +
		"\x02\u0924\u01BF\x03\x02\x02\x02\u0925\u0926\t\x07\x02\x02\u0926\u01C1" +
		"\x03\x02\x02\x02\u0927\u0928\x07\x86\x02\x02\u0928\u0929\x05\u020A\u0106" +
		"\x02\u0929\u01C3\x03\x02\x02\x02\u092A\u092B\x07\x88\x02\x02\u092B\u092C" +
		"\x05\u017E\xC0\x02\u092C\u092D\x07\x8B\x02\x02\u092D\u01C5\x03\x02\x02" +
		"\x02\u092E\u092F\x07\x88\x02\x02\u092F\u093B\x07\x8B\x02\x02\u0930\u0931" +
		"\x07\x88\x02\x02\u0931\u0934\x05\u01C8\xE5\x02\u0932\u0933\x07\x8D\x02" +
		"\x02\u0933\u0935\x05\u01C8\xE5\x02\u0934\u0932\x03\x02\x02\x02\u0935\u0936" +
		"\x03\x02\x02\x02\u0936\u0934\x03\x02\x02\x02\u0936\u0937\x03\x02\x02\x02" +
		"\u0937\u0938\x03\x02\x02\x02\u0938\u0939\x07\x8B\x02\x02\u0939\u093B\x03" +
		"\x02\x02\x02\u093A\u092E\x03\x02\x02\x02\u093A\u0930\x03\x02\x02\x02\u093B" +
		"\u01C7\x03\x02\x02\x02\u093C\u0942\x05\u017E\xC0\x02\u093D\u093E\x05\u020A" +
		"\u0106\x02\u093E\u093F\x07\x8E\x02\x02\u093F\u0940\x05\u017E\xC0\x02\u0940" +
		"\u0942\x03\x02\x02\x02\u0941\u093C\x03\x02\x02\x02\u0941\u093D\x03\x02" +
		"\x02\x02\u0942\u01C9\x03\x02\x02\x02\u0943\u0944\x07\x92\x02\x02\u0944" +
		"\u01CB\x03\x02\x02\x02\u0945\u0946\x07l\x02\x02\u0946\u0947\x07\x88\x02" +
		"\x02\u0947\u0948\x05\u017E\xC0\x02\u0948\u0949\x07\x8B\x02\x02\u0949\u0957" +
		"\x03\x02\x02\x02\u094A\u094B\x07l\x02\x02\u094B\u094C\x07\x88\x02\x02" +
		"\u094C\u094D\x07m\x02\x02\u094D\u094E\x05\u017E\xC0\x02\u094E\u094F\x07" +
		"\x8B\x02\x02\u094F\u0957\x03\x02\x02\x02\u0950\u0951\x07l\x02\x02\u0951" +
		"\u0952\x07\x88\x02\x02\u0952\u0953\x07n\x02\x02\u0953\u0954\x05\u017E" +
		"\xC0\x02\u0954\u0955\x07\x8B\x02\x02\u0955\u0957\x03\x02\x02\x02\u0956" +
		"\u0945\x03\x02\x02\x02\u0956\u094A\x03\x02\x02\x02\u0956\u0950\x03\x02" +
		"\x02\x02\u0957\u01CD\x03\x02\x02\x02\u0958\u0959\x07o\x02\x02\u0959\u095A" +
		"\x07\x88\x02\x02\u095A\u095B\x05\u017E\xC0\x02\u095B\u095C\x07\x8B\x02" +
		"\x02\u095C\u01CF\x03\x02\x02\x02\u095D\u095E\b\xE9\x01\x02\u095E\u0961" +
		"\x05\u0190\xC9\x02\u095F\u0961\x05\u01DE\xF0\x02\u0960\u095D\x03\x02\x02" +
		"\x02\u0960\u095F\x03\x02\x02\x02\u0961\u0994\x03\x02\x02\x02\u0962\u0963" +
		"\f\x0E\x02\x02\u0963\u0993\x05\u0224\u0113\x02\u0964\u0965\f\r\x02\x02" +
		"\u0965\u0993\x05\u01D2\xEA\x02\u0966\u0968\f\f\x02\x02\u0967\u0969\x05" +
		"\u01D2\xEA\x02\u0968\u0967\x03\x02\x02\x02\u0968\u0969\x03\x02\x02\x02" +
		"\u0969\u096A\x03\x02\x02\x02\u096A\u0993\x05\u01D8\xED\x02\u096B\u096C" +
		"\f\v\x02\x02\u096C\u096D\x07\x86\x02\x02\u096D\u0993\x073\x02\x02\u096E" +
		"\u096F\f\n\x02\x02\u096F\u0970\x07\x86\x02\x02\u0970\u0971\x073\x02\x02" +
		"\u0971\u0972\x07\x88\x02\x02\u0972\u0973\x05\u01DA\xEE\x02\u0973\u0974" +
		"\x07\x8B\x02\x02\u0974\u0993\x03\x02\x02\x02\u0975\u0976\f\t\x02\x02\u0976" +
		"\u0977\x07\x86\x02\x02\u0977\u0993\x07\xA6\x02\x02\u0978\u0979\f\b\x02" +
		"\x02\u0979\u097A\x07\x86\x02\x02\u097A\u097C\x05\u0208\u0105\x02\u097B" +
		"\u097D\x05\x8AF\x02\u097C\u097B\x03\x02\x02\x02\u097C\u097D\x03\x02\x02" +
		"\x02\u097D\u0993\x03\x02\x02\x02\u097E\u097F\f\x07\x02\x02\u097F\u0980" +
		"\x07\x86\x02\x02\u0980\u0981\x05\u0208\u0105\x02\u0981\u0982\x07\x88\x02" +
		"\x02\u0982\u0983\x05\u01DA\xEE\x02\u0983\u0984\x07\x8B\x02\x02\u0984\u0993" +
		"\x03\x02\x02\x02\u0985\u0986\f\x06\x02\x02\u0986\u0987\x07\x88\x02\x02" +
		"\u0987\u0988\x05\u01DA\xEE\x02\u0988\u0989\x07\x8B\x02\x02\u0989\u0993" +
		"\x03\x02\x02\x02\u098A\u098B\f\x05\x02\x02\u098B\u098C\x07\x86\x02\x02" +
		"\u098C\u0993\x07g\x02\x02\u098D\u098E\f\x03\x02\x02\u098E\u098F\x07\x89" +
		"\x02\x02\u098F\u0990\x05\u0180\xC1\x02\u0990\u0991\x07\x8C\x02\x02\u0991" +
		"\u0993\x03\x02\x02\x02\u0992\u0962\x03\x02\x02\x02\u0992\u0964\x03\x02" +
		"\x02\x02\u0992\u0966\x03\x02\x02\x02\u0992\u096B\x03\x02\x02\x02\u0992" +
		"\u096E\x03\x02\x02\x02\u0992\u0975\x03\x02\x02\x02\u0992\u0978\x03\x02" +
		"\x02\x02\u0992\u097E\x03\x02\x02\x02\u0992\u0985\x03\x02\x02\x02\u0992" +
		"\u098A\x03\x02\x02\x02\u0992\u098D\x03\x02\x02\x02\u0993\u0996\x03\x02" +
		"\x02\x02\u0994\u0992\x03\x02\x02\x02\u0994\u0995\x03\x02\x02\x02\u0995" +
		"\u01D1\x03\x02\x02\x02\u0996\u0994\x03\x02\x02\x02\u0997\u0998\x07\x88" +
		"\x02\x02\u0998\u099E\x07\x8B\x02\x02\u0999\u099A\x07\x88\x02\x02\u099A" +
		"\u099B\x05\u01D4\xEB\x02\u099B\u099C\x07\x8B\x02\x02\u099C\u099E\x03\x02" +
		"\x02\x02\u099D\u0997\x03\x02\x02\x02\u099D\u0999\x03\x02\x02\x02\u099E" +
		"\u01D3\x03\x02\x02\x02\u099F\u09A4\x05\u01D6\xEC\x02\u09A0\u09A1\x07\x8D" +
		"\x02\x02\u09A1\u09A3\x05\u01D6\xEC\x02\u09A2\u09A0\x03\x02\x02\x02\u09A3" +
		"\u09A6\x03\x02\x02\x02\u09A4\u09A2\x03\x02\x02\x02\u09A4\u09A5\x03\x02" +
		"\x02\x02\u09A5\u01D5\x03\x02\x02\x02\u09A6\u09A4\x03\x02\x02\x02\u09A7" +
		"\u09B2\x05\u017E\xC0\x02\u09A8\u09A9\x05\u020A\u0106\x02\u09A9\u09AA\x07" +
		"\x8E\x02\x02\u09AA\u09AB\x05\u017E\xC0\x02\u09AB\u09B2\x03\x02\x02\x02" +
		"\u09AC\u09B2\x05\u0226\u0114\x02\u09AD\u09AE\x05\u020A\u0106\x02\u09AE" +
		"\u09AF\x07\x8E\x02\x02\u09AF\u09B0\x05\u0226\u0114\x02\u09B0\u09B2\x03" +
		"\x02\x02\x02\u09B1\u09A7\x03\x02\x02\x02\u09B1\u09A8\x03\x02\x02\x02\u09B1" +
		"\u09AC\x03\x02\x02\x02\u09B1\u09AD\x03\x02\x02\x02\u09B2\u01D7\x03\x02" +
		"\x02\x02\u09B3\u09B4\x05\u01AC\xD7\x02\u09B4\u01D9\x03\x02\x02\x02\u09B5" +
		"\u09B9\x05\u01DC\xEF\x02\u09B6\u09B8\x05\u01DC\xEF\x02\u09B7\u09B6\x03" +
		"\x02\x02\x02\u09B8\u09BB\x03\x02\x02\x02\u09B9\u09B7\x03\x02\x02\x02\u09B9" +
		"\u09BA\x03\x02\x02\x02\u09BA\u01DB\x03\x02\x02\x02\u09BB\u09B9\x03\x02" +
		"\x02\x02\u09BC\u09BD\x05\u020A\u0106\x02\u09BD\u09BE\x07\x8E\x02\x02\u09BE" +
		"\u01DD\x03\x02\x02\x02\u09BF\u09C0\x07p\x02\x02\u09C0\u09C1\x07\x88\x02" +
		"\x02\u09C1\u09C2\x07q\x02\x02\u09C2\u09C3\x07\x8E\x02\x02\u09C3\u09C4" +
		"\x05\u017E\xC0\x02\u09C4\u09C5\x07\x8B\x02\x02\u09C5\u01DF\x03\x02\x02" +
		"\x02\u09C6\u09C7\b\xF1\x01\x02\u09C7\u09D0\x05\u01FA\xFE\x02\u09C8\u09D0" +
		"\x05\u01FC\xFF\x02\u09C9\u09D0\x05\u01F0\xF9\x02\u09CA\u09D0\x05\u01E4" +
		"\xF3\x02\u09CB\u09D0\x05\u01E8\xF5\x02\u09CC\u09D0\x05\u01FE\u0100\x02" +
		"\u09CD\u09D0\x07t\x02\x02\u09CE\u09D0\x07h\x02\x02\u09CF\u09C6\x03\x02" +
		"\x02\x02\u09CF\u09C8\x03\x02\x02\x02\u09CF\u09C9\x03\x02\x02\x02\u09CF" +
		"\u09CA\x03\x02\x02\x02\u09CF\u09CB\x03\x02\x02\x02\u09CF\u09CC\x03\x02" +
		"\x02\x02\u09CF\u09CD\x03\x02\x02\x02\u09CF\u09CE\x03\x02\x02\x02\u09D0" +
		"\u09DD\x03\x02\x02\x02\u09D1\u09D2\f\t\x02\x02\u09D2\u09DC\x07\x94\x02" +
		"\x02\u09D3\u09D4\f\b\x02\x02\u09D4\u09DC\x07\x93\x02\x02\u09D5\u09D6\f" +
		"\x06\x02\x02\u09D6\u09D7\x07\x86\x02\x02\u09D7\u09DC\x07r\x02\x02\u09D8" +
		"\u09D9\f\x05\x02\x02\u09D9\u09DA\x07\x86\x02\x02\u09DA\u09DC\x07s\x02" +
		"\x02\u09DB\u09D1\x03\x02\x02\x02\u09DB\u09D3\x03\x02\x02\x02\u09DB\u09D5" +
		"\x03\x02\x02\x02\u09DB\u09D8\x03\x02\x02\x02\u09DC\u09DF\x03\x02\x02\x02" +
		"\u09DD\u09DB\x03\x02\x02\x02\u09DD\u09DE\x03\x02\x02\x02\u09DE\u01E1\x03" +
		"\x02\x02\x02\u09DF\u09DD\x03\x02\x02\x02\u09E0\u09E2\x07\x8E\x02\x02\u09E1" +
		"\u09E3\x05\u0176\xBC\x02\u09E2\u09E1\x03\x02\x02\x02\u09E2\u09E3\x03\x02" +
		"\x02\x02\u09E3\u09E5\x03\x02\x02\x02\u09E4\u09E6\x07u\x02\x02\u09E5\u09E4" +
		"\x03\x02\x02\x02\u09E5\u09E6\x03\x02\x02\x02\u09E6\u09E7\x03\x02\x02\x02" +
		"\u09E7\u09E8\x05\u01E0\xF1\x02\u09E8\u01E3\x03\x02\x02\x02\u09E9\u09EB" +
		"\x05\u01E6\xF4\x02\u09EA\u09EC\x05\x8AF\x02\u09EB\u09EA\x03\x02\x02\x02" +
		"\u09EB\u09EC\x03\x02\x02\x02\u09EC\u09EF\x03\x02\x02\x02\u09ED\u09EE\x07" +
		"\x86\x02\x02\u09EE\u09F0\x05\u01E4\xF3\x02\u09EF\u09ED\x03\x02\x02\x02" +
		"\u09EF\u09F0\x03\x02\x02\x02\u09F0\u01E5\x03\x02\x02\x02\u09F1\u09F2\x05" +
		"\u0208\u0105\x02\u09F2\u01E7\x03\x02\x02\x02\u09F3\u09F5\x07\x88\x02\x02" +
		"\u09F4\u09F6\x05\u01EA\xF6\x02\u09F5\u09F4\x03\x02\x02\x02\u09F5\u09F6" +
		"\x03\x02\x02\x02\u09F6\u09F7\x03\x02\x02\x02\u09F7\u09F8\x07\x8B\x02\x02" +
		"\u09F8\u01E9\x03\x02\x02\x02\u09F9\u09FF\x05\u01EC\xF7\x02\u09FA\u09FB" +
		"\x05\u01EC\xF7\x02\u09FB\u09FC\x07\x8D\x02\x02\u09FC\u09FD\x05\u01EA\xF6" +
		"\x02\u09FD\u09FF\x03\x02\x02\x02\u09FE\u09F9\x03\x02\x02\x02\u09FE\u09FA" +
		"\x03\x02\x02\x02\u09FF\u01EB\x03\x02\x02\x02\u0A00\u0A01\x05\u01EE\xF8" +
		"\x02\u0A01\u0A02\x05\u01E2\xF2\x02\u0A02\u0A05\x03\x02\x02\x02\u0A03\u0A05" +
		"\x05\u01E0\xF1\x02\u0A04\u0A00\x03\x02\x02\x02\u0A04\u0A03\x03\x02\x02" +
		"\x02\u0A05\u01ED\x03\x02\x02\x02\u0A06\u0A07\x05\u020A\u0106\x02\u0A07" +
		"\u01EF\x03\x02\x02\x02\u0A08\u0A0A\x05\u0176\xBC\x02\u0A09\u0A08\x03\x02" +
		"\x02\x02\u0A09\u0A0A\x03\x02\x02\x02\u0A0A\u0A0B\x03\x02\x02\x02\u0A0B" +
		"\u0A0D\x05\u01F2\xFA\x02\u0A0C\u0A0E\x07.\x02\x02\u0A0D\u0A0C\x03\x02" +
		"\x02\x02\u0A0D\u0A0E\x03\x02\x02\x02\u0A0E\u0A0F\x03\x02\x02\x02\u0A0F" +
		"\u0A10\x05\u021A\u010E\x02\u0A10\u0A11\x05\u01E0\xF1\x02\u0A11\u0A1B\x03" +
		"\x02\x02\x02\u0A12\u0A14\x05\u0176\xBC\x02\u0A13\u0A12\x03\x02\x02\x02" +
		"\u0A13\u0A14\x03\x02\x02\x02\u0A14\u0A15\x03\x02\x02\x02\u0A15\u0A16\x05" +
		"\u01F2\xFA\x02\u0A16\u0A17\x07/\x02\x02\u0A17\u0A18\x05\u021A\u010E\x02" +
		"\u0A18\u0A19\x05\u01E0\xF1\x02\u0A19\u0A1B\x03\x02\x02\x02\u0A1A\u0A09" +
		"\x03\x02\x02\x02\u0A1A\u0A13\x03\x02\x02\x02\u0A1B\u01F1\x03\x02\x02\x02" +
		"\u0A1C\u0A1D\x07\x88\x02\x02\u0A1D\u0A26\x07\x8B\x02\x02\u0A1E\u0A1F\x07" +
		"\x88\x02\x02\u0A1F\u0A21\x05\u01F4\xFB\x02\u0A20\u0A22\x05\u021C\u010F" +
		"\x02\u0A21\u0A20\x03\x02\x02\x02\u0A21\u0A22\x03\x02\x02\x02\u0A22\u0A23" +
		"\x03\x02\x02\x02\u0A23\u0A24\x07\x8B\x02\x02\u0A24\u0A26\x03\x02\x02\x02" +
		"\u0A25\u0A1C\x03\x02\x02\x02\u0A25\u0A1E\x03\x02\x02\x02\u0A26\u01F3\x03" +
		"\x02\x02\x02\u0A27\u0A2D\x05\u01F6\xFC\x02\u0A28\u0A29\x05\u01F6\xFC\x02" +
		"\u0A29\u0A2A\x07\x8D\x02\x02\u0A2A\u0A2B\x05\u01F4\xFB\x02\u0A2B\u0A2D" +
		"\x03\x02\x02\x02\u0A2C\u0A27\x03\x02\x02\x02\u0A2C\u0A28\x03\x02\x02\x02" +
		"\u0A2D\u01F5\x03\x02\x02\x02\u0A2E\u0A30\x05\u0176\xBC\x02\u0A2F\u0A2E" +
		"\x03\x02\x02\x02\u0A2F\u0A30\x03\x02\x02\x02\u0A30\u0A32\x03\x02\x02\x02" +
		"\u0A31\u0A33\x07u\x02\x02\u0A32\u0A31\x03\x02\x02\x02\u0A32\u0A33\x03" +
		"\x02\x02\x02\u0A33\u0A34\x03\x02\x02\x02\u0A34\u0A39\x05\u01E0\xF1\x02" +
		"\u0A35\u0A36\x05\u01F8\xFD\x02\u0A36\u0A37\x05\u01E2\xF2\x02\u0A37\u0A39" +
		"\x03\x02\x02\x02\u0A38\u0A2F\x03\x02\x02\x02\u0A38\u0A35\x03\x02\x02\x02" +
		"\u0A39\u01F7\x03\x02\x02\x02\u0A3A\u0A3B\x05\u020A\u0106\x02\u0A3B\u01F9" +
		"\x03\x02\x02\x02\u0A3C\u0A3D\x07\x89\x02\x02\u0A3D\u0A3E\x05\u01E0\xF1" +
		"\x02\u0A3E\u0A3F\x07\x8C\x02\x02\u0A3F\u01FB\x03\x02\x02\x02\u0A40\u0A41" +
		"\x07\x89\x02\x02\u0A41\u0A42\x05\u01E0\xF1\x02\u0A42\u0A43\x07\x8E\x02" +
		"\x02\u0A43\u0A44\x05\u01E0\xF1\x02\u0A44\u0A45\x07\x8C\x02\x02\u0A45\u01FD" +
		"\x03\x02\x02\x02\u0A46\u0A49\x05\u0200\u0101\x02\u0A47\u0A48\x07\x96\x02" +
		"\x02\u0A48\u0A4A\x05\u0200\u0101\x02\u0A49\u0A47\x03\x02\x02\x02\u0A4A" +
		"\u0A4B\x03\x02\x02\x02\u0A4B\u0A49\x03\x02\x02\x02\u0A4B\u0A4C\x03\x02" +
		"\x02\x02\u0A4C\u01FF\x03\x02\x02\x02\u0A4D\u0A4E\x05\u01E4\xF3\x02\u0A4E" +
		"\u0201\x03\x02\x02\x02\u0A4F\u0A50\x07\x8E\x02\x02\u0A50\u0A51\x05\u0206" +
		"\u0104\x02\u0A51\u0A52\x07\x8D\x02\x02\u0A52\u0A53\x05\u0204\u0103\x02" +
		"\u0A53\u0A59\x03\x02\x02\x02\u0A54\u0A55\x07\x8E\x02\x02\u0A55\u0A59\x05" +
		"\u0206\u0104\x02\u0A56\u0A57\x07\x8E\x02\x02\u0A57\u0A59\x05\u0204\u0103" +
		"\x02\u0A58\u0A4F\x03\x02\x02\x02\u0A58\u0A54\x03\x02\x02\x02\u0A58\u0A56" +
		"\x03\x02\x02\x02\u0A59\u0203\x03\x02\x02\x02\u0A5A\u0A60\x05\u01E4\xF3" +
		"\x02\u0A5B\u0A5C\x05\u01E4\xF3\x02\u0A5C\u0A5D\x07\x8D\x02\x02\u0A5D\u0A5E" +
		"\x05\u0204\u0103\x02\u0A5E\u0A60\x03\x02\x02\x02\u0A5F\u0A5A\x03\x02\x02" +
		"\x02\u0A5F\u0A5B\x03\x02\x02\x02\u0A60\u0205\x03\x02\x02\x02\u0A61\u0A62" +
		"\x07&\x02\x02\u0A62\u0207\x03\x02\x02\x02\u0A63\u0A66\x07\x85\x02\x02" +
		"\u0A64\u0A66\x05\u020C\u0107\x02\u0A65\u0A63\x03\x02\x02\x02\u0A65\u0A64" +
		"\x03\x02\x02\x02\u0A66\u0209\x03\x02\x02\x02\u0A67\u0A6A\x07\x85\x02\x02" +
		"\u0A68\u0A6A\x05\u020E\u0108\x02\u0A69\u0A67\x03\x02\x02\x02\u0A69\u0A68" +
		"\x03\x02\x02\x02\u0A6A\u020B\x03\x02\x02\x02\u0A6B\u0A6C\t\b\x02\x02\u0A6C" +
		"\u020D\x03\x02\x02\x02\u0A6D\u0A6E\t\t\x02\x02\u0A6E\u020F\x03\x02\x02" +
		"\x02\u0A6F\u0A70\x06\u0109\x17\x02\u0A70\u0A71\x07\x98\x02\x02\u0A71\u0211" +
		"\x03\x02\x02\x02\u0A72\u0A73\x06\u010A\x18\x02\u0A73\u0A74\x07\x97\x02" +
		"\x02\u0A74\u0213\x03\x02\x02\x02\u0A75\u0A76\x06\u010B\x19\x02\u0A76\u0A77" +
		"\x07\x96\x02\x02\u0A77\u0A78\x07\x96\x02\x02\u0A78\u0215\x03\x02\x02\x02" +
		"\u0A79\u0A7A\x06\u010C\x1A\x02\u0A7A\u0A7B\x07\x99\x02\x02\u0A7B\u0A7C" +
		"\x07\x99\x02\x02\u0A7C\u0217\x03\x02\x02\x02\u0A7D\u0A7E\x06\u010D\x1B" +
		"\x02\u0A7E\u0A7F\x07\x91\x02\x02\u0A7F\u0A80\x07\x98\x02\x02\u0A80\u0219" +
		"\x03\x02\x02\x02\u0A81\u0A82\x06\u010E\x1C\x02\u0A82\u0A83\x07\x97\x02" +
		"\x02\u0A83\u0A84\x07\x91\x02\x02\u0A84\u021B\x03\x02\x02\x02\u0A85\u0A86" +
		"\x06\u010F\x1D\x02\u0A86\u0A87\x07\x86\x02\x02\u0A87\u0A88\x07\x86\x02" +
		"\x02\u0A88\u0A89\x07\x86\x02\x02\u0A89\u021D\x03\x02\x02\x02\u0A8A\u0A8B" +
		"\x06\u0110\x1E\x02\u0A8B\u0A8C\x07\x98\x02\x02\u0A8C\u0A8D\x07\x98\x02" +
		"\x02\u0A8D\u021F\x03\x02\x02\x02\u0A8E\u0A8F\x06\u0111\x1F\x02\u0A8F\u0A90" +
		"\x05\u0226\u0114\x02\u0A90\u0221\x03\x02\x02\x02\u0A91\u0A92\x06\u0112" +
		" \x02\u0A92\u0A93\x05\u0226\u0114\x02\u0A93\u0223\x03\x02\x02\x02\u0A94" +
		"\u0A95\x06\u0113!\x02\u0A95\u0A96\x05\u0226\u0114\x02\u0A96\u0225\x03" +
		"\x02\x02\x02\u0A97\u0A9C\x05\u022A\u0116\x02\u0A98\u0A99\x06\u0114\"\x02" +
		"\u0A99\u0A9B\x05\u0228\u0115\x02\u0A9A\u0A98\x03\x02\x02\x02\u0A9B\u0A9E" +
		"\x03\x02\x02\x02\u0A9C\u0A9A\x03\x02\x02\x02\u0A9C\u0A9D\x03\x02\x02\x02" +
		"\u0A9D\u0AA8\x03\x02\x02\x02\u0A9E\u0A9C\x03\x02\x02\x02\u0A9F\u0AA4\x05" +
		"\u022C\u0117\x02\u0AA0\u0AA1\x06\u0114#\x02\u0AA1\u0AA3\x05\u022E\u0118" +
		"\x02\u0AA2\u0AA0\x03\x02\x02\x02\u0AA3\u0AA6\x03\x02\x02\x02\u0AA4\u0AA2" +
		"\x03\x02\x02\x02\u0AA4\u0AA5\x03\x02\x02\x02\u0AA5\u0AA8\x03\x02\x02\x02" +
		"\u0AA6\u0AA4\x03\x02\x02\x02\u0AA7\u0A97\x03\x02\x02\x02\u0AA7\u0A9F\x03" +
		"\x02\x02\x02\u0AA8\u0227\x03\x02\x02\x02\u0AA9\u0AAC\x05\u022A\u0116\x02" +
		"\u0AAA\u0AAC\x07\xA1\x02\x02\u0AAB\u0AA9\x03\x02\x02\x02\u0AAB\u0AAA\x03" +
		"\x02\x02\x02\u0AAC\u0229\x03\x02\x02\x02\u0AAD\u0AB0\t\n\x02\x02\u0AAE" +
		"\u0AB0\x07\xA0\x02\x02\u0AAF\u0AAD\x03\x02\x02\x02\u0AAF\u0AAE\x03\x02" +
		"\x02\x02\u0AB0\u022B\x03\x02\x02\x02\u0AB1\u0AB2\x07\x86\x02\x02\u0AB2" +
		"\u022D\x03\x02\x02\x02\u0AB3\u0AB6\x07\x86\x02\x02\u0AB4\u0AB6\x05\u0228" +
		"\u0115\x02\u0AB5\u0AB3\x03\x02\x02\x02\u0AB5\u0AB4\x03\x02\x02\x02\u0AB6" +
		"\u022F\x03\x02\x02\x02\u0AB7\u0ABC\x05\u0232\u011A\x02\u0AB8\u0ABC\x05" +
		"\u023A\u011E\x02\u0AB9\u0ABC\x05\u0234\u011B\x02\u0ABA\u0ABC\x05\u0236" +
		"\u011C\x02\u0ABB\u0AB7\x03\x02\x02\x02\u0ABB\u0AB8\x03\x02\x02\x02\u0ABB" +
		"\u0AB9\x03\x02\x02\x02\u0ABB\u0ABA\x03\x02\x02\x02\u0ABC\u0231\x03\x02" +
		"\x02\x02\u0ABD\u0ABF\x05\u0212\u010A\x02\u0ABE\u0ABD\x03\x02\x02\x02\u0ABE" +
		"\u0ABF\x03\x02\x02\x02\u0ABF\u0AC0\x03\x02\x02\x02\u0AC0\u0AC6\x05\u0238" +
		"\u011D\x02\u0AC1\u0AC3\x05\u0212\u010A\x02\u0AC2\u0AC1\x03\x02\x02\x02" +
		"\u0AC2\u0AC3\x03\x02\x02\x02\u0AC3\u0AC4\x03\x02\x02\x02\u0AC4\u0AC6\x07" +
		"\xA8\x02\x02\u0AC5\u0ABE\x03\x02\x02\x02\u0AC5\u0AC2\x03\x02\x02\x02\u0AC6" +
		"\u0233\x03\x02\x02\x02\u0AC7\u0AC8\t\v\x02\x02\u0AC8\u0235\x03\x02\x02" +
		"\x02\u0AC9\u0ACA\x07\x82\x02\x02\u0ACA\u0237\x03\x02\x02\x02\u0ACB\u0ACC" +
		"\t\f\x02\x02\u0ACC\u0239\x03\x02\x02\x02\u0ACD\u0ACE\t\r\x02\x02\u0ACE" +
		"\u023B\x03\x02\x02\x02\u0141\u023D\u0243\u0247\u024B\u024F\u0253\u0257" +
		"\u025B\u025F\u0263\u0265\u026D\u0273\u0277\u027B\u027F\u0285\u0289\u028D" +
		"\u0291\u0295\u0299\u029F\u02AC\u02B3\u02B9\u02C3\u02CD\u02D3\u02D9\u02E4" +
		"\u02EA\u02F2\u02FA\u02FE\u0303\u0319\u0325\u0329\u032D\u0333\u033E\u0342" +
		"\u0346\u0349\u034F\u0353\u0356\u035D\u0362\u0367\u036B\u037F\u0389\u038B" +
		"\u039E\u03B6\u03C6\u03D4\u03E0\u03EA\u03EF\u03F9\u0408\u041D\u0422\u0425" +
		"\u0429\u042E\u0432\u043D\u0442\u0445\u0448\u0452\u0457\u046F\u0478\u047F" +
		"\u0482\u0485\u048E\u0497\u049A\u049D\u04A3\u04A6\u04AA\u04B5\u04BE\u04C1" +
		"\u04C4\u04C9\u04CC\u04D3\u04DC\u04DF\u04E3\u04E8\u04EC\u04F1\u04F4\u04F9" +
		"\u0505\u0509\u050C\u050F\u0512\u0518\u051C\u051F\u0524\u0526\u052A\u0536" +
		"\u053D\u0541\u0546\u0549\u054F\u0555\u055F\u0562\u0566\u0569\u056C\u056F" +
		"\u0574\u0577\u057A\u057E\u0584\u0589\u058C\u058F\u0599\u059D\u05A6\u05AA" +
		"\u05B2\u05B7\u05BA\u05C4\u05C8\u05D0\u05D3\u05D6\u05DB\u05DE\u05E1\u05EB" +
		"\u05F2\u05F5\u05F8\u05FB\u0600\u0603\u0606\u060B\u060E\u0612\u0617\u061A" +
		"\u061D\u0621\u0629\u0630\u0633\u0636\u063B\u0645\u064C\u0654\u065E\u0662" +
		"\u0666\u066A\u066D\u0671\u0676\u0678\u067F\u0682\u0687\u068A\u068E\u0692" +
		"\u0695\u069B\u06A0\u06A4\u06A7\u06AA\u06AE\u06B1\u06B6\u06B9\u06BD\u06C2" +
		"\u06C8\u06CB\u06D0\u06D5\u06D8\u06DF\u06E5\u06EC\u06FA\u06FD\u0700\u0707" +
		"\u070E\u071C\u0727\u072F\u0737\u0748\u0765\u076A\u0785\u078C\u0790\u0795" +
		"\u079C\u07A3\u07AE\u07B2\u07BB\u07C1\u07C6\u07D0\u07DB\u07E0\u07F4\u07FC" +
		"\u07FF\u0803\u080A\u0812\u081C\u0823\u0829\u082E\u0833\u0837\u0846\u084A" +
		"\u0856\u0860\u0864\u086A\u0870\u087B\u087F\u0885\u08AC\u08C1\u08C6\u08D7" +
		"\u08DA\u08DF\u08E3\u08E6\u08ED\u08F6\u08FD\u0905\u090A\u0910\u091D\u0921" +
		"\u0936\u093A\u0941\u0956\u0960\u0968\u097C\u0992\u0994\u099D\u09A4\u09B1" +
		"\u09B9\u09CF\u09DB\u09DD\u09E2\u09E5\u09EB\u09EF\u09F5\u09FE\u0A04\u0A09" +
		"\u0A0D\u0A13\u0A1A\u0A21\u0A25\u0A2C\u0A2F\u0A32\u0A38\u0A4B\u0A58\u0A5F" +
		"\u0A65\u0A69\u0A9C\u0AA4\u0AA7\u0AAB\u0AAF\u0AB5\u0ABB\u0ABE\u0AC2\u0AC5";
	public static readonly _serializedATN: string = Utils.join(
		[
			Swift3Parser._serializedATNSegment0,
			Swift3Parser._serializedATNSegment1,
			Swift3Parser._serializedATNSegment2,
			Swift3Parser._serializedATNSegment3,
			Swift3Parser._serializedATNSegment4,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Swift3Parser.__ATN) {
			Swift3Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Swift3Parser._serializedATN));
		}

		return Swift3Parser.__ATN;
	}

}

export class Top_levelContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(Swift3Parser.EOF, 0); }
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_top_level; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterTop_level) {
			listener.enterTop_level(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitTop_level) {
			listener.exitTop_level(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.SEMI, 0); }
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
	public get ruleIndex(): number { return Swift3Parser.RULE_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	public statements_impl(): Statements_implContext {
		return this.getRuleContext(0, Statements_implContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_statements; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterStatements) {
			listener.enterStatements(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitStatements) {
			listener.exitStatements(this);
		}
	}
}


export class Statements_implContext extends ParserRuleContext {
	public indexBefore: int;
	public indexAfter: int = -1;
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public statements_impl(): Statements_implContext | undefined {
		return this.tryGetRuleContext(0, Statements_implContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number, indexBefore: int) {
		super(parent, invokingState);
		this.indexBefore = indexBefore;
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_statements_impl; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterStatements_impl) {
			listener.enterStatements_impl(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitStatements_impl) {
			listener.exitStatements_impl(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_loop_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterLoop_statement) {
			listener.enterLoop_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitLoop_statement) {
			listener.exitLoop_statement(this);
		}
	}
}


export class For_statementContext extends ParserRuleContext {
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.SEMI);
		} else {
			return this.getToken(Swift3Parser.SEMI, i);
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
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_for_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFor_statement) {
			listener.enterFor_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFor_statement) {
			listener.exitFor_statement(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_for_init; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFor_init) {
			listener.enterFor_init(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFor_init) {
			listener.exitFor_init(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_for_in_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFor_in_statement) {
			listener.enterFor_in_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFor_in_statement) {
			listener.exitFor_in_statement(this);
		}
	}
}


export class While_statementContext extends ParserRuleContext {
	public condition_list(): Condition_listContext {
		return this.getRuleContext(0, Condition_listContext);
	}
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_while_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterWhile_statement) {
			listener.enterWhile_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitWhile_statement) {
			listener.exitWhile_statement(this);
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
			return this.getTokens(Swift3Parser.COMMA);
		} else {
			return this.getToken(Swift3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_condition_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCondition_list) {
			listener.enterCondition_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCondition_list) {
			listener.exitCondition_list(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
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
	public get ruleIndex(): number { return Swift3Parser.RULE_condition; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_case_condition; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCase_condition) {
			listener.enterCase_condition(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCase_condition) {
			listener.exitCase_condition(this);
		}
	}
}


export class Optional_binding_conditionContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return Swift3Parser.RULE_optional_binding_condition; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterOptional_binding_condition) {
			listener.enterOptional_binding_condition(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitOptional_binding_condition) {
			listener.exitOptional_binding_condition(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_repeat_while_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterRepeat_while_statement) {
			listener.enterRepeat_while_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitRepeat_while_statement) {
			listener.exitRepeat_while_statement(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_branch_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterBranch_statement) {
			listener.enterBranch_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitBranch_statement) {
			listener.exitBranch_statement(this);
		}
	}
}


export class If_statementContext extends ParserRuleContext {
	public condition_list(): Condition_listContext {
		return this.getRuleContext(0, Condition_listContext);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_if_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterIf_statement) {
			listener.enterIf_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitIf_statement) {
			listener.exitIf_statement(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_else_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterElse_clause) {
			listener.enterElse_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitElse_clause) {
			listener.exitElse_clause(this);
		}
	}
}


export class Guard_statementContext extends ParserRuleContext {
	public condition_list(): Condition_listContext {
		return this.getRuleContext(0, Condition_listContext);
	}
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_guard_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterGuard_statement) {
			listener.enterGuard_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitGuard_statement) {
			listener.exitGuard_statement(this);
		}
	}
}


export class Switch_statementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LCURLY(): TerminalNode { return this.getToken(Swift3Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift3Parser.RCURLY, 0); }
	public switch_cases(): Switch_casesContext | undefined {
		return this.tryGetRuleContext(0, Switch_casesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_switch_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSwitch_statement) {
			listener.enterSwitch_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSwitch_statement) {
			listener.exitSwitch_statement(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_switch_cases; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSwitch_cases) {
			listener.enterSwitch_cases(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSwitch_cases) {
			listener.exitSwitch_cases(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_switch_case; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSwitch_case) {
			listener.enterSwitch_case(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSwitch_case) {
			listener.exitSwitch_case(this);
		}
	}
}


export class Case_labelContext extends ParserRuleContext {
	public case_item_list(): Case_item_listContext {
		return this.getRuleContext(0, Case_item_listContext);
	}
	public COLON(): TerminalNode { return this.getToken(Swift3Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_case_label; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCase_label) {
			listener.enterCase_label(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCase_label) {
			listener.exitCase_label(this);
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
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.COMMA, 0); }
	public case_item_list(): Case_item_listContext | undefined {
		return this.tryGetRuleContext(0, Case_item_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_case_item_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCase_item_list) {
			listener.enterCase_item_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCase_item_list) {
			listener.exitCase_item_list(this);
		}
	}
}


export class Default_labelContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(Swift3Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_default_label; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDefault_label) {
			listener.enterDefault_label(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDefault_label) {
			listener.exitDefault_label(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_where_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterWhere_clause) {
			listener.enterWhere_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitWhere_clause) {
			listener.exitWhere_clause(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_where_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterWhere_expression) {
			listener.enterWhere_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitWhere_expression) {
			listener.exitWhere_expression(this);
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
	public do_statement(): Do_statementContext | undefined {
		return this.tryGetRuleContext(0, Do_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_labeled_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterLabeled_statement) {
			listener.enterLabeled_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitLabeled_statement) {
			listener.exitLabeled_statement(this);
		}
	}
}


export class Statement_labelContext extends ParserRuleContext {
	public label_name(): Label_nameContext {
		return this.getRuleContext(0, Label_nameContext);
	}
	public COLON(): TerminalNode { return this.getToken(Swift3Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_statement_label; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterStatement_label) {
			listener.enterStatement_label(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitStatement_label) {
			listener.exitStatement_label(this);
		}
	}
}


export class Label_nameContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_label_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterLabel_name) {
			listener.enterLabel_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitLabel_name) {
			listener.exitLabel_name(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_control_transfer_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterControl_transfer_statement) {
			listener.enterControl_transfer_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitControl_transfer_statement) {
			listener.exitControl_transfer_statement(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_break_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterBreak_statement) {
			listener.enterBreak_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitBreak_statement) {
			listener.exitBreak_statement(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_continue_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterContinue_statement) {
			listener.enterContinue_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitContinue_statement) {
			listener.exitContinue_statement(this);
		}
	}
}


export class Fallthrough_statementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_fallthrough_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFallthrough_statement) {
			listener.enterFallthrough_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFallthrough_statement) {
			listener.exitFallthrough_statement(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_return_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterReturn_statement) {
			listener.enterReturn_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitReturn_statement) {
			listener.exitReturn_statement(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_throw_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterThrow_statement) {
			listener.enterThrow_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitThrow_statement) {
			listener.exitThrow_statement(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_defer_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDefer_statement) {
			listener.enterDefer_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDefer_statement) {
			listener.exitDefer_statement(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_do_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDo_statement) {
			listener.enterDo_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDo_statement) {
			listener.exitDo_statement(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_catch_clauses; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCatch_clauses) {
			listener.enterCatch_clauses(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCatch_clauses) {
			listener.exitCatch_clauses(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_catch_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCatch_clause) {
			listener.enterCatch_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCatch_clause) {
			listener.exitCatch_clause(this);
		}
	}
}


export class Compiler_control_statementContext extends ParserRuleContext {
	public conditional_compilation_block(): Conditional_compilation_blockContext | undefined {
		return this.tryGetRuleContext(0, Conditional_compilation_blockContext);
	}
	public line_control_statement(): Line_control_statementContext | undefined {
		return this.tryGetRuleContext(0, Line_control_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_compiler_control_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCompiler_control_statement) {
			listener.enterCompiler_control_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCompiler_control_statement) {
			listener.exitCompiler_control_statement(this);
		}
	}
}


export class Conditional_compilation_blockContext extends ParserRuleContext {
	public if_directive_clause(): If_directive_clauseContext {
		return this.getRuleContext(0, If_directive_clauseContext);
	}
	public endif_directive(): Endif_directiveContext {
		return this.getRuleContext(0, Endif_directiveContext);
	}
	public elseif_directive_clauses(): Elseif_directive_clausesContext | undefined {
		return this.tryGetRuleContext(0, Elseif_directive_clausesContext);
	}
	public else_directive_clause(): Else_directive_clauseContext | undefined {
		return this.tryGetRuleContext(0, Else_directive_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_conditional_compilation_block; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterConditional_compilation_block) {
			listener.enterConditional_compilation_block(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitConditional_compilation_block) {
			listener.exitConditional_compilation_block(this);
		}
	}
}


export class If_directive_clauseContext extends ParserRuleContext {
	public if_directive(): If_directiveContext {
		return this.getRuleContext(0, If_directiveContext);
	}
	public compilation_condition(): Compilation_conditionContext {
		return this.getRuleContext(0, Compilation_conditionContext);
	}
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_if_directive_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterIf_directive_clause) {
			listener.enterIf_directive_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitIf_directive_clause) {
			listener.exitIf_directive_clause(this);
		}
	}
}


export class Elseif_directive_clausesContext extends ParserRuleContext {
	public elseif_directive_clause(): Elseif_directive_clauseContext[];
	public elseif_directive_clause(i: number): Elseif_directive_clauseContext;
	public elseif_directive_clause(i?: number): Elseif_directive_clauseContext | Elseif_directive_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Elseif_directive_clauseContext);
		} else {
			return this.getRuleContext(i, Elseif_directive_clauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_elseif_directive_clauses; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterElseif_directive_clauses) {
			listener.enterElseif_directive_clauses(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitElseif_directive_clauses) {
			listener.exitElseif_directive_clauses(this);
		}
	}
}


export class Elseif_directive_clauseContext extends ParserRuleContext {
	public elseif_directive(): Elseif_directiveContext {
		return this.getRuleContext(0, Elseif_directiveContext);
	}
	public compilation_condition(): Compilation_conditionContext {
		return this.getRuleContext(0, Compilation_conditionContext);
	}
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_elseif_directive_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterElseif_directive_clause) {
			listener.enterElseif_directive_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitElseif_directive_clause) {
			listener.exitElseif_directive_clause(this);
		}
	}
}


export class Else_directive_clauseContext extends ParserRuleContext {
	public else_directive(): Else_directiveContext {
		return this.getRuleContext(0, Else_directiveContext);
	}
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_else_directive_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterElse_directive_clause) {
			listener.enterElse_directive_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitElse_directive_clause) {
			listener.exitElse_directive_clause(this);
		}
	}
}


export class If_directiveContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_if_directive; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterIf_directive) {
			listener.enterIf_directive(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitIf_directive) {
			listener.exitIf_directive(this);
		}
	}
}


export class Elseif_directiveContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_elseif_directive; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterElseif_directive) {
			listener.enterElseif_directive(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitElseif_directive) {
			listener.exitElseif_directive(this);
		}
	}
}


export class Else_directiveContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_else_directive; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterElse_directive) {
			listener.enterElse_directive(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitElse_directive) {
			listener.exitElse_directive(this);
		}
	}
}


export class Endif_directiveContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_endif_directive; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterEndif_directive) {
			listener.enterEndif_directive(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitEndif_directive) {
			listener.exitEndif_directive(this);
		}
	}
}


export class Compilation_conditionContext extends ParserRuleContext {
	public platform_condition(): Platform_conditionContext | undefined {
		return this.tryGetRuleContext(0, Platform_conditionContext);
	}
	public label_identifier(): Label_identifierContext | undefined {
		return this.tryGetRuleContext(0, Label_identifierContext);
	}
	public boolean_literal(): Boolean_literalContext | undefined {
		return this.tryGetRuleContext(0, Boolean_literalContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.LPAREN, 0); }
	public compilation_condition(): Compilation_conditionContext[];
	public compilation_condition(i: number): Compilation_conditionContext;
	public compilation_condition(i?: number): Compilation_conditionContext | Compilation_conditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Compilation_conditionContext);
		} else {
			return this.getRuleContext(i, Compilation_conditionContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.RPAREN, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.BANG, 0); }
	public compilation_condition_AND(): Compilation_condition_ANDContext | undefined {
		return this.tryGetRuleContext(0, Compilation_condition_ANDContext);
	}
	public compilation_condition_OR(): Compilation_condition_ORContext | undefined {
		return this.tryGetRuleContext(0, Compilation_condition_ORContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_compilation_condition; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCompilation_condition) {
			listener.enterCompilation_condition(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCompilation_condition) {
			listener.exitCompilation_condition(this);
		}
	}
}


export class Platform_conditionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public operating_system(): Operating_systemContext | undefined {
		return this.tryGetRuleContext(0, Operating_systemContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	public architecture(): ArchitectureContext | undefined {
		return this.tryGetRuleContext(0, ArchitectureContext);
	}
	public compilation_condition_GE(): Compilation_condition_GEContext | undefined {
		return this.tryGetRuleContext(0, Compilation_condition_GEContext);
	}
	public swift_version(): Swift_versionContext | undefined {
		return this.tryGetRuleContext(0, Swift_versionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_platform_condition; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPlatform_condition) {
			listener.enterPlatform_condition(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPlatform_condition) {
			listener.exitPlatform_condition(this);
		}
	}
}


export class Swift_versionContext extends ParserRuleContext {
	public Pure_decimal_digits(): TerminalNode[];
	public Pure_decimal_digits(i: number): TerminalNode;
	public Pure_decimal_digits(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.Pure_decimal_digits);
		} else {
			return this.getToken(Swift3Parser.Pure_decimal_digits, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(Swift3Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_swift_version; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSwift_version) {
			listener.enterSwift_version(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSwift_version) {
			listener.exitSwift_version(this);
		}
	}
}


export class Operating_systemContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_operating_system; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterOperating_system) {
			listener.enterOperating_system(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitOperating_system) {
			listener.exitOperating_system(this);
		}
	}
}


export class ArchitectureContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_architecture; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterArchitecture) {
			listener.enterArchitecture(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitArchitecture) {
			listener.exitArchitecture(this);
		}
	}
}


export class Line_control_statementContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.COLON);
		} else {
			return this.getToken(Swift3Parser.COLON, i);
		}
	}
	public file_name(): File_nameContext | undefined {
		return this.tryGetRuleContext(0, File_nameContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.COMMA, 0); }
	public line_number(): Line_numberContext | undefined {
		return this.tryGetRuleContext(0, Line_numberContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_line_control_statement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterLine_control_statement) {
			listener.enterLine_control_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitLine_control_statement) {
			listener.exitLine_control_statement(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_line_number; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterLine_number) {
			listener.enterLine_number(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitLine_number) {
			listener.exitLine_number(this);
		}
	}
}


export class File_nameContext extends ParserRuleContext {
	public Static_string_literal(): TerminalNode { return this.getToken(Swift3Parser.Static_string_literal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_file_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFile_name) {
			listener.enterFile_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFile_name) {
			listener.exitFile_name(this);
		}
	}
}


export class Availability_conditionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public availability_arguments(): Availability_argumentsContext {
		return this.getRuleContext(0, Availability_argumentsContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_availability_condition; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterAvailability_condition) {
			listener.enterAvailability_condition(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitAvailability_condition) {
			listener.exitAvailability_condition(this);
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
			return this.getTokens(Swift3Parser.COMMA);
		} else {
			return this.getToken(Swift3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_availability_arguments; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterAvailability_arguments) {
			listener.enterAvailability_arguments(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitAvailability_arguments) {
			listener.exitAvailability_arguments(this);
		}
	}
}


export class Availability_argumentContext extends ParserRuleContext {
	public Platform_name_platform_version(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.Platform_name_platform_version, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_availability_argument; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterAvailability_argument) {
			listener.enterAvailability_argument(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitAvailability_argument) {
			listener.exitAvailability_argument(this);
		}
	}
}


export class Generic_parameter_clauseContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(Swift3Parser.LT, 0); }
	public generic_parameter_list(): Generic_parameter_listContext {
		return this.getRuleContext(0, Generic_parameter_listContext);
	}
	public GT(): TerminalNode { return this.getToken(Swift3Parser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_generic_parameter_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterGeneric_parameter_clause) {
			listener.enterGeneric_parameter_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitGeneric_parameter_clause) {
			listener.exitGeneric_parameter_clause(this);
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
			return this.getTokens(Swift3Parser.COMMA);
		} else {
			return this.getToken(Swift3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_generic_parameter_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterGeneric_parameter_list) {
			listener.enterGeneric_parameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitGeneric_parameter_list) {
			listener.exitGeneric_parameter_list(this);
		}
	}
}


export class Generic_parameterContext extends ParserRuleContext {
	public type_name(): Type_nameContext {
		return this.getRuleContext(0, Type_nameContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.COLON, 0); }
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
	public get ruleIndex(): number { return Swift3Parser.RULE_generic_parameter; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterGeneric_parameter) {
			listener.enterGeneric_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitGeneric_parameter) {
			listener.exitGeneric_parameter(this);
		}
	}
}


export class Generic_where_clauseContext extends ParserRuleContext {
	public requirement_list(): Requirement_listContext {
		return this.getRuleContext(0, Requirement_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_generic_where_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterGeneric_where_clause) {
			listener.enterGeneric_where_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitGeneric_where_clause) {
			listener.exitGeneric_where_clause(this);
		}
	}
}


export class Requirement_listContext extends ParserRuleContext {
	public requirement(): RequirementContext[];
	public requirement(i: number): RequirementContext;
	public requirement(i?: number): RequirementContext | RequirementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RequirementContext);
		} else {
			return this.getRuleContext(i, RequirementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.COMMA);
		} else {
			return this.getToken(Swift3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_requirement_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterRequirement_list) {
			listener.enterRequirement_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitRequirement_list) {
			listener.exitRequirement_list(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_requirement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterRequirement) {
			listener.enterRequirement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitRequirement) {
			listener.exitRequirement(this);
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
	public COLON(): TerminalNode { return this.getToken(Swift3Parser.COLON, 0); }
	public protocol_composition_type(): Protocol_composition_typeContext | undefined {
		return this.tryGetRuleContext(0, Protocol_composition_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_conformance_requirement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterConformance_requirement) {
			listener.enterConformance_requirement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitConformance_requirement) {
			listener.exitConformance_requirement(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_same_type_requirement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSame_type_requirement) {
			listener.enterSame_type_requirement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSame_type_requirement) {
			listener.exitSame_type_requirement(this);
		}
	}
}


export class Generic_argument_clauseContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(Swift3Parser.LT, 0); }
	public generic_argument_list(): Generic_argument_listContext {
		return this.getRuleContext(0, Generic_argument_listContext);
	}
	public GT(): TerminalNode { return this.getToken(Swift3Parser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_generic_argument_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterGeneric_argument_clause) {
			listener.enterGeneric_argument_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitGeneric_argument_clause) {
			listener.exitGeneric_argument_clause(this);
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
			return this.getTokens(Swift3Parser.COMMA);
		} else {
			return this.getToken(Swift3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_generic_argument_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterGeneric_argument_list) {
			listener.enterGeneric_argument_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitGeneric_argument_list) {
			listener.exitGeneric_argument_list(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_generic_argument; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterGeneric_argument) {
			listener.enterGeneric_argument(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitGeneric_argument) {
			listener.exitGeneric_argument(this);
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
	public precedence_group_declaration(): Precedence_group_declarationContext | undefined {
		return this.tryGetRuleContext(0, Precedence_group_declarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_declarations; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDeclarations) {
			listener.enterDeclarations(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDeclarations) {
			listener.exitDeclarations(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_top_level_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterTop_level_declaration) {
			listener.enterTop_level_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitTop_level_declaration) {
			listener.exitTop_level_declaration(this);
		}
	}
}


export class Code_blockContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift3Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift3Parser.RCURLY, 0); }
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_code_block; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCode_block) {
			listener.enterCode_block(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCode_block) {
			listener.exitCode_block(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_import_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterImport_declaration) {
			listener.enterImport_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitImport_declaration) {
			listener.exitImport_declaration(this);
		}
	}
}


export class Import_kindContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_import_kind; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterImport_kind) {
			listener.enterImport_kind(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitImport_kind) {
			listener.exitImport_kind(this);
		}
	}
}


export class Import_pathContext extends ParserRuleContext {
	public import_path_identifier(): Import_path_identifierContext[];
	public import_path_identifier(i: number): Import_path_identifierContext;
	public import_path_identifier(i?: number): Import_path_identifierContext | Import_path_identifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Import_path_identifierContext);
		} else {
			return this.getRuleContext(i, Import_path_identifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.DOT);
		} else {
			return this.getToken(Swift3Parser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_import_path; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterImport_path) {
			listener.enterImport_path(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitImport_path) {
			listener.exitImport_path(this);
		}
	}
}


export class Import_path_identifierContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext | undefined {
		return this.tryGetRuleContext(0, Declaration_identifierContext);
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_import_path_identifier; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterImport_path_identifier) {
			listener.enterImport_path_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitImport_path_identifier) {
			listener.exitImport_path_identifier(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_constant_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterConstant_declaration) {
			listener.enterConstant_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitConstant_declaration) {
			listener.exitConstant_declaration(this);
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
			return this.getTokens(Swift3Parser.COMMA);
		} else {
			return this.getToken(Swift3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_pattern_initializer_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPattern_initializer_list) {
			listener.enterPattern_initializer_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPattern_initializer_list) {
			listener.exitPattern_initializer_list(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_pattern_initializer; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPattern_initializer) {
			listener.enterPattern_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPattern_initializer) {
			listener.exitPattern_initializer(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_initializer; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterInitializer) {
			listener.enterInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitInitializer) {
			listener.exitInitializer(this);
		}
	}
}


export class Variable_declarationContext extends ParserRuleContext {
	public variable_declaration_head(): Variable_declaration_headContext {
		return this.getRuleContext(0, Variable_declaration_headContext);
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
	public pattern_initializer_list(): Pattern_initializer_listContext | undefined {
		return this.tryGetRuleContext(0, Pattern_initializer_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_variable_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterVariable_declaration) {
			listener.enterVariable_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitVariable_declaration) {
			listener.exitVariable_declaration(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_variable_declaration_head; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterVariable_declaration_head) {
			listener.enterVariable_declaration_head(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitVariable_declaration_head) {
			listener.exitVariable_declaration_head(this);
		}
	}
}


export class Variable_nameContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_variable_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterVariable_name) {
			listener.enterVariable_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitVariable_name) {
			listener.exitVariable_name(this);
		}
	}
}


export class Getter_setter_blockContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift3Parser.LCURLY, 0); }
	public getter_clause(): Getter_clauseContext {
		return this.getRuleContext(0, Getter_clauseContext);
	}
	public RCURLY(): TerminalNode { return this.getToken(Swift3Parser.RCURLY, 0); }
	public setter_clause(): Setter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Setter_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_getter_setter_block; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterGetter_setter_block) {
			listener.enterGetter_setter_block(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitGetter_setter_block) {
			listener.exitGetter_setter_block(this);
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
	public mutation_modifier(): Mutation_modifierContext | undefined {
		return this.tryGetRuleContext(0, Mutation_modifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_getter_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterGetter_clause) {
			listener.enterGetter_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitGetter_clause) {
			listener.exitGetter_clause(this);
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
	public mutation_modifier(): Mutation_modifierContext | undefined {
		return this.tryGetRuleContext(0, Mutation_modifierContext);
	}
	public setter_name(): Setter_nameContext | undefined {
		return this.tryGetRuleContext(0, Setter_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_setter_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSetter_clause) {
			listener.enterSetter_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSetter_clause) {
			listener.exitSetter_clause(this);
		}
	}
}


export class Setter_nameContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_setter_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSetter_name) {
			listener.enterSetter_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSetter_name) {
			listener.exitSetter_name(this);
		}
	}
}


export class Getter_setter_keyword_blockContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift3Parser.LCURLY, 0); }
	public getter_keyword_clause(): Getter_keyword_clauseContext {
		return this.getRuleContext(0, Getter_keyword_clauseContext);
	}
	public RCURLY(): TerminalNode { return this.getToken(Swift3Parser.RCURLY, 0); }
	public setter_keyword_clause(): Setter_keyword_clauseContext | undefined {
		return this.tryGetRuleContext(0, Setter_keyword_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_getter_setter_keyword_block; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterGetter_setter_keyword_block) {
			listener.enterGetter_setter_keyword_block(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitGetter_setter_keyword_block) {
			listener.exitGetter_setter_keyword_block(this);
		}
	}
}


export class Getter_keyword_clauseContext extends ParserRuleContext {
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public mutation_modifier(): Mutation_modifierContext | undefined {
		return this.tryGetRuleContext(0, Mutation_modifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_getter_keyword_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterGetter_keyword_clause) {
			listener.enterGetter_keyword_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitGetter_keyword_clause) {
			listener.exitGetter_keyword_clause(this);
		}
	}
}


export class Setter_keyword_clauseContext extends ParserRuleContext {
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public mutation_modifier(): Mutation_modifierContext | undefined {
		return this.tryGetRuleContext(0, Mutation_modifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_setter_keyword_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSetter_keyword_clause) {
			listener.enterSetter_keyword_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSetter_keyword_clause) {
			listener.exitSetter_keyword_clause(this);
		}
	}
}


export class WillSet_didSet_blockContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift3Parser.LCURLY, 0); }
	public willSet_clause(): WillSet_clauseContext {
		return this.getRuleContext(0, WillSet_clauseContext);
	}
	public RCURLY(): TerminalNode { return this.getToken(Swift3Parser.RCURLY, 0); }
	public didSet_clause(): DidSet_clauseContext | undefined {
		return this.tryGetRuleContext(0, DidSet_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_willSet_didSet_block; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterWillSet_didSet_block) {
			listener.enterWillSet_didSet_block(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitWillSet_didSet_block) {
			listener.exitWillSet_didSet_block(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_willSet_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterWillSet_clause) {
			listener.enterWillSet_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitWillSet_clause) {
			listener.exitWillSet_clause(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_didSet_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDidSet_clause) {
			listener.enterDidSet_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDidSet_clause) {
			listener.exitDidSet_clause(this);
		}
	}
}


export class Typealias_declarationContext extends ParserRuleContext {
	public typealias_name(): Typealias_nameContext {
		return this.getRuleContext(0, Typealias_nameContext);
	}
	public typealias_assignment(): Typealias_assignmentContext {
		return this.getRuleContext(0, Typealias_assignmentContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_typealias_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterTypealias_declaration) {
			listener.enterTypealias_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitTypealias_declaration) {
			listener.exitTypealias_declaration(this);
		}
	}
}


export class Typealias_nameContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_typealias_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterTypealias_name) {
			listener.enterTypealias_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitTypealias_name) {
			listener.exitTypealias_name(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_typealias_assignment; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterTypealias_assignment) {
			listener.enterTypealias_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitTypealias_assignment) {
			listener.exitTypealias_assignment(this);
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
	public generic_where_clause(): Generic_where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_where_clauseContext);
	}
	public function_body(): Function_bodyContext | undefined {
		return this.tryGetRuleContext(0, Function_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_function_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFunction_declaration) {
			listener.enterFunction_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFunction_declaration) {
			listener.exitFunction_declaration(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_function_head; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFunction_head) {
			listener.enterFunction_head(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFunction_head) {
			listener.exitFunction_head(this);
		}
	}
}


export class Function_nameContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext | undefined {
		return this.tryGetRuleContext(0, Declaration_identifierContext);
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_function_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFunction_name) {
			listener.enterFunction_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFunction_name) {
			listener.exitFunction_name(this);
		}
	}
}


export class Function_signatureContext extends ParserRuleContext {
	public parameter_clause(): Parameter_clauseContext {
		return this.getRuleContext(0, Parameter_clauseContext);
	}
	public function_result(): Function_resultContext | undefined {
		return this.tryGetRuleContext(0, Function_resultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_function_signature; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFunction_signature) {
			listener.enterFunction_signature(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFunction_signature) {
			listener.exitFunction_signature(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_function_result; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFunction_result) {
			listener.enterFunction_result(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFunction_result) {
			listener.exitFunction_result(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_function_body; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFunction_body) {
			listener.enterFunction_body(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFunction_body) {
			listener.exitFunction_body(this);
		}
	}
}


export class Parameter_clauseContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	public parameter_list(): Parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Parameter_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_parameter_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterParameter_clause) {
			listener.enterParameter_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitParameter_clause) {
			listener.exitParameter_clause(this);
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
			return this.getTokens(Swift3Parser.COMMA);
		} else {
			return this.getToken(Swift3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_parameter_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterParameter_list) {
			listener.enterParameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitParameter_list) {
			listener.exitParameter_list(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public local_parameter_name(): Local_parameter_nameContext {
		return this.getRuleContext(0, Local_parameter_nameContext);
	}
	public type_annotation(): Type_annotationContext {
		return this.getRuleContext(0, Type_annotationContext);
	}
	public external_parameter_name(): External_parameter_nameContext | undefined {
		return this.tryGetRuleContext(0, External_parameter_nameContext);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_parameter; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
}


export class External_parameter_nameContext extends ParserRuleContext {
	public label_identifier(): Label_identifierContext {
		return this.getRuleContext(0, Label_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_external_parameter_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterExternal_parameter_name) {
			listener.enterExternal_parameter_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitExternal_parameter_name) {
			listener.exitExternal_parameter_name(this);
		}
	}
}


export class Local_parameter_nameContext extends ParserRuleContext {
	public label_identifier(): Label_identifierContext {
		return this.getRuleContext(0, Label_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_local_parameter_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterLocal_parameter_name) {
			listener.enterLocal_parameter_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitLocal_parameter_name) {
			listener.exitLocal_parameter_name(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_default_argument_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDefault_argument_clause) {
			listener.enterDefault_argument_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDefault_argument_clause) {
			listener.exitDefault_argument_clause(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_enum_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterEnum_declaration) {
			listener.enterEnum_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitEnum_declaration) {
			listener.exitEnum_declaration(this);
		}
	}
}


export class Union_style_enumContext extends ParserRuleContext {
	public enum_name(): Enum_nameContext {
		return this.getRuleContext(0, Enum_nameContext);
	}
	public LCURLY(): TerminalNode { return this.getToken(Swift3Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift3Parser.RCURLY, 0); }
	public generic_parameter_clause(): Generic_parameter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_parameter_clauseContext);
	}
	public type_inheritance_clause(): Type_inheritance_clauseContext | undefined {
		return this.tryGetRuleContext(0, Type_inheritance_clauseContext);
	}
	public generic_where_clause(): Generic_where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_where_clauseContext);
	}
	public union_style_enum_members(): Union_style_enum_membersContext | undefined {
		return this.tryGetRuleContext(0, Union_style_enum_membersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_union_style_enum; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterUnion_style_enum) {
			listener.enterUnion_style_enum(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitUnion_style_enum) {
			listener.exitUnion_style_enum(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_union_style_enum_members; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterUnion_style_enum_members) {
			listener.enterUnion_style_enum_members(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitUnion_style_enum_members) {
			listener.exitUnion_style_enum_members(this);
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
	public compiler_control_statement(): Compiler_control_statementContext | undefined {
		return this.tryGetRuleContext(0, Compiler_control_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_union_style_enum_member; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterUnion_style_enum_member) {
			listener.enterUnion_style_enum_member(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitUnion_style_enum_member) {
			listener.exitUnion_style_enum_member(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_union_style_enum_case_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterUnion_style_enum_case_clause) {
			listener.enterUnion_style_enum_case_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitUnion_style_enum_case_clause) {
			listener.exitUnion_style_enum_case_clause(this);
		}
	}
}


export class Union_style_enum_case_listContext extends ParserRuleContext {
	public union_style_enum_case(): Union_style_enum_caseContext {
		return this.getRuleContext(0, Union_style_enum_caseContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.COMMA, 0); }
	public union_style_enum_case_list(): Union_style_enum_case_listContext | undefined {
		return this.tryGetRuleContext(0, Union_style_enum_case_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_union_style_enum_case_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterUnion_style_enum_case_list) {
			listener.enterUnion_style_enum_case_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitUnion_style_enum_case_list) {
			listener.exitUnion_style_enum_case_list(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_union_style_enum_case; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterUnion_style_enum_case) {
			listener.enterUnion_style_enum_case(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitUnion_style_enum_case) {
			listener.exitUnion_style_enum_case(this);
		}
	}
}


export class Enum_nameContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_enum_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterEnum_name) {
			listener.enterEnum_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitEnum_name) {
			listener.exitEnum_name(this);
		}
	}
}


export class Enum_case_nameContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_enum_case_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterEnum_case_name) {
			listener.enterEnum_case_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitEnum_case_name) {
			listener.exitEnum_case_name(this);
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
	public LCURLY(): TerminalNode { return this.getToken(Swift3Parser.LCURLY, 0); }
	public raw_value_style_enum_members(): Raw_value_style_enum_membersContext {
		return this.getRuleContext(0, Raw_value_style_enum_membersContext);
	}
	public RCURLY(): TerminalNode { return this.getToken(Swift3Parser.RCURLY, 0); }
	public generic_parameter_clause(): Generic_parameter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_parameter_clauseContext);
	}
	public generic_where_clause(): Generic_where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_where_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_raw_value_style_enum; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterRaw_value_style_enum) {
			listener.enterRaw_value_style_enum(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitRaw_value_style_enum) {
			listener.exitRaw_value_style_enum(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_raw_value_style_enum_members; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterRaw_value_style_enum_members) {
			listener.enterRaw_value_style_enum_members(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitRaw_value_style_enum_members) {
			listener.exitRaw_value_style_enum_members(this);
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
	public compiler_control_statement(): Compiler_control_statementContext | undefined {
		return this.tryGetRuleContext(0, Compiler_control_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_raw_value_style_enum_member; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterRaw_value_style_enum_member) {
			listener.enterRaw_value_style_enum_member(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitRaw_value_style_enum_member) {
			listener.exitRaw_value_style_enum_member(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_raw_value_style_enum_case_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterRaw_value_style_enum_case_clause) {
			listener.enterRaw_value_style_enum_case_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitRaw_value_style_enum_case_clause) {
			listener.exitRaw_value_style_enum_case_clause(this);
		}
	}
}


export class Raw_value_style_enum_case_listContext extends ParserRuleContext {
	public raw_value_style_enum_case(): Raw_value_style_enum_caseContext {
		return this.getRuleContext(0, Raw_value_style_enum_caseContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.COMMA, 0); }
	public raw_value_style_enum_case_list(): Raw_value_style_enum_case_listContext | undefined {
		return this.tryGetRuleContext(0, Raw_value_style_enum_case_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_raw_value_style_enum_case_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterRaw_value_style_enum_case_list) {
			listener.enterRaw_value_style_enum_case_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitRaw_value_style_enum_case_list) {
			listener.exitRaw_value_style_enum_case_list(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_raw_value_style_enum_case; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterRaw_value_style_enum_case) {
			listener.enterRaw_value_style_enum_case(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitRaw_value_style_enum_case) {
			listener.exitRaw_value_style_enum_case(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_raw_value_assignment; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterRaw_value_assignment) {
			listener.enterRaw_value_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitRaw_value_assignment) {
			listener.exitRaw_value_assignment(this);
		}
	}
}


export class Raw_value_literalContext extends ParserRuleContext {
	public numeric_literal(): Numeric_literalContext | undefined {
		return this.tryGetRuleContext(0, Numeric_literalContext);
	}
	public Static_string_literal(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.Static_string_literal, 0); }
	public boolean_literal(): Boolean_literalContext | undefined {
		return this.tryGetRuleContext(0, Boolean_literalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_raw_value_literal; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterRaw_value_literal) {
			listener.enterRaw_value_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitRaw_value_literal) {
			listener.exitRaw_value_literal(this);
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
	public generic_where_clause(): Generic_where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_where_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_struct_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterStruct_declaration) {
			listener.enterStruct_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitStruct_declaration) {
			listener.exitStruct_declaration(this);
		}
	}
}


export class Struct_nameContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_struct_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterStruct_name) {
			listener.enterStruct_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitStruct_name) {
			listener.exitStruct_name(this);
		}
	}
}


export class Struct_bodyContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift3Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift3Parser.RCURLY, 0); }
	public struct_member(): Struct_memberContext[];
	public struct_member(i: number): Struct_memberContext;
	public struct_member(i?: number): Struct_memberContext | Struct_memberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Struct_memberContext);
		} else {
			return this.getRuleContext(i, Struct_memberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_struct_body; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterStruct_body) {
			listener.enterStruct_body(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitStruct_body) {
			listener.exitStruct_body(this);
		}
	}
}


export class Struct_memberContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public compiler_control_statement(): Compiler_control_statementContext | undefined {
		return this.tryGetRuleContext(0, Compiler_control_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_struct_member; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterStruct_member) {
			listener.enterStruct_member(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitStruct_member) {
			listener.exitStruct_member(this);
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
	public access_level_modifier(): Access_level_modifierContext[];
	public access_level_modifier(i: number): Access_level_modifierContext;
	public access_level_modifier(i?: number): Access_level_modifierContext | Access_level_modifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Access_level_modifierContext);
		} else {
			return this.getRuleContext(i, Access_level_modifierContext);
		}
	}
	public generic_parameter_clause(): Generic_parameter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_parameter_clauseContext);
	}
	public type_inheritance_clause(): Type_inheritance_clauseContext | undefined {
		return this.tryGetRuleContext(0, Type_inheritance_clauseContext);
	}
	public generic_where_clause(): Generic_where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_where_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_class_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterClass_declaration) {
			listener.enterClass_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitClass_declaration) {
			listener.exitClass_declaration(this);
		}
	}
}


export class Class_nameContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_class_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterClass_name) {
			listener.enterClass_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitClass_name) {
			listener.exitClass_name(this);
		}
	}
}


export class Class_bodyContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift3Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift3Parser.RCURLY, 0); }
	public class_member(): Class_memberContext[];
	public class_member(i: number): Class_memberContext;
	public class_member(i?: number): Class_memberContext | Class_memberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Class_memberContext);
		} else {
			return this.getRuleContext(i, Class_memberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_class_body; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterClass_body) {
			listener.enterClass_body(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitClass_body) {
			listener.exitClass_body(this);
		}
	}
}


export class Class_memberContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public compiler_control_statement(): Compiler_control_statementContext | undefined {
		return this.tryGetRuleContext(0, Compiler_control_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_class_member; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterClass_member) {
			listener.enterClass_member(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitClass_member) {
			listener.exitClass_member(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_protocol_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterProtocol_declaration) {
			listener.enterProtocol_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitProtocol_declaration) {
			listener.exitProtocol_declaration(this);
		}
	}
}


export class Protocol_nameContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_protocol_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterProtocol_name) {
			listener.enterProtocol_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitProtocol_name) {
			listener.exitProtocol_name(this);
		}
	}
}


export class Protocol_bodyContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift3Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift3Parser.RCURLY, 0); }
	public protocol_member(): Protocol_memberContext[];
	public protocol_member(i: number): Protocol_memberContext;
	public protocol_member(i?: number): Protocol_memberContext | Protocol_memberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Protocol_memberContext);
		} else {
			return this.getRuleContext(i, Protocol_memberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_protocol_body; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterProtocol_body) {
			listener.enterProtocol_body(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitProtocol_body) {
			listener.exitProtocol_body(this);
		}
	}
}


export class Protocol_memberContext extends ParserRuleContext {
	public protocol_member_declaration(): Protocol_member_declarationContext | undefined {
		return this.tryGetRuleContext(0, Protocol_member_declarationContext);
	}
	public compiler_control_statement(): Compiler_control_statementContext | undefined {
		return this.tryGetRuleContext(0, Compiler_control_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_protocol_member; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterProtocol_member) {
			listener.enterProtocol_member(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitProtocol_member) {
			listener.exitProtocol_member(this);
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
	public typealias_declaration(): Typealias_declarationContext | undefined {
		return this.tryGetRuleContext(0, Typealias_declarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_protocol_member_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterProtocol_member_declaration) {
			listener.enterProtocol_member_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitProtocol_member_declaration) {
			listener.exitProtocol_member_declaration(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_protocol_property_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterProtocol_property_declaration) {
			listener.enterProtocol_property_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitProtocol_property_declaration) {
			listener.exitProtocol_property_declaration(this);
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
	public generic_where_clause(): Generic_where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_where_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_protocol_method_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterProtocol_method_declaration) {
			listener.enterProtocol_method_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitProtocol_method_declaration) {
			listener.exitProtocol_method_declaration(this);
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
	public generic_where_clause(): Generic_where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_where_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_protocol_initializer_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterProtocol_initializer_declaration) {
			listener.enterProtocol_initializer_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitProtocol_initializer_declaration) {
			listener.exitProtocol_initializer_declaration(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_protocol_subscript_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterProtocol_subscript_declaration) {
			listener.enterProtocol_subscript_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitProtocol_subscript_declaration) {
			listener.exitProtocol_subscript_declaration(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_protocol_associated_type_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterProtocol_associated_type_declaration) {
			listener.enterProtocol_associated_type_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitProtocol_associated_type_declaration) {
			listener.exitProtocol_associated_type_declaration(this);
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
	public generic_where_clause(): Generic_where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_where_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_initializer_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterInitializer_declaration) {
			listener.enterInitializer_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitInitializer_declaration) {
			listener.exitInitializer_declaration(this);
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
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.QUESTION, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.BANG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_initializer_head; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterInitializer_head) {
			listener.enterInitializer_head(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitInitializer_head) {
			listener.exitInitializer_head(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_initializer_body; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterInitializer_body) {
			listener.enterInitializer_body(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitInitializer_body) {
			listener.exitInitializer_body(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_deinitializer_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDeinitializer_declaration) {
			listener.enterDeinitializer_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDeinitializer_declaration) {
			listener.exitDeinitializer_declaration(this);
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
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public access_level_modifier(): Access_level_modifierContext | undefined {
		return this.tryGetRuleContext(0, Access_level_modifierContext);
	}
	public type_inheritance_clause(): Type_inheritance_clauseContext | undefined {
		return this.tryGetRuleContext(0, Type_inheritance_clauseContext);
	}
	public generic_where_clause(): Generic_where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_where_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_extension_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterExtension_declaration) {
			listener.enterExtension_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitExtension_declaration) {
			listener.exitExtension_declaration(this);
		}
	}
}


export class Extension_bodyContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift3Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift3Parser.RCURLY, 0); }
	public extension_member(): Extension_memberContext[];
	public extension_member(i: number): Extension_memberContext;
	public extension_member(i?: number): Extension_memberContext | Extension_memberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Extension_memberContext);
		} else {
			return this.getRuleContext(i, Extension_memberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_extension_body; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterExtension_body) {
			listener.enterExtension_body(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitExtension_body) {
			listener.exitExtension_body(this);
		}
	}
}


export class Extension_memberContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public compiler_control_statement(): Compiler_control_statementContext | undefined {
		return this.tryGetRuleContext(0, Compiler_control_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_extension_member; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterExtension_member) {
			listener.enterExtension_member(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitExtension_member) {
			listener.exitExtension_member(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_subscript_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSubscript_declaration) {
			listener.enterSubscript_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSubscript_declaration) {
			listener.exitSubscript_declaration(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_subscript_head; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSubscript_head) {
			listener.enterSubscript_head(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSubscript_head) {
			listener.exitSubscript_head(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_subscript_result; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSubscript_result) {
			listener.enterSubscript_result(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSubscript_result) {
			listener.exitSubscript_result(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_operator_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterOperator_declaration) {
			listener.enterOperator_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitOperator_declaration) {
			listener.exitOperator_declaration(this);
		}
	}
}


export class Prefix_operator_declarationContext extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_prefix_operator_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPrefix_operator_declaration) {
			listener.enterPrefix_operator_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPrefix_operator_declaration) {
			listener.exitPrefix_operator_declaration(this);
		}
	}
}


export class Postfix_operator_declarationContext extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_postfix_operator_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPostfix_operator_declaration) {
			listener.enterPostfix_operator_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPostfix_operator_declaration) {
			listener.exitPostfix_operator_declaration(this);
		}
	}
}


export class Infix_operator_declarationContext extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public infix_operator_group(): Infix_operator_groupContext | undefined {
		return this.tryGetRuleContext(0, Infix_operator_groupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_infix_operator_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterInfix_operator_declaration) {
			listener.enterInfix_operator_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitInfix_operator_declaration) {
			listener.exitInfix_operator_declaration(this);
		}
	}
}


export class Infix_operator_groupContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(Swift3Parser.COLON, 0); }
	public precedence_group_name(): Precedence_group_nameContext {
		return this.getRuleContext(0, Precedence_group_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_infix_operator_group; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterInfix_operator_group) {
			listener.enterInfix_operator_group(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitInfix_operator_group) {
			listener.exitInfix_operator_group(this);
		}
	}
}


export class Precedence_group_declarationContext extends ParserRuleContext {
	public precedence_group_name(): Precedence_group_nameContext {
		return this.getRuleContext(0, Precedence_group_nameContext);
	}
	public LCURLY(): TerminalNode { return this.getToken(Swift3Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift3Parser.RCURLY, 0); }
	public precedence_group_attribute(): Precedence_group_attributeContext[];
	public precedence_group_attribute(i: number): Precedence_group_attributeContext;
	public precedence_group_attribute(i?: number): Precedence_group_attributeContext | Precedence_group_attributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Precedence_group_attributeContext);
		} else {
			return this.getRuleContext(i, Precedence_group_attributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_precedence_group_declaration; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPrecedence_group_declaration) {
			listener.enterPrecedence_group_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPrecedence_group_declaration) {
			listener.exitPrecedence_group_declaration(this);
		}
	}
}


export class Precedence_group_attributeContext extends ParserRuleContext {
	public precedence_group_relation(): Precedence_group_relationContext | undefined {
		return this.tryGetRuleContext(0, Precedence_group_relationContext);
	}
	public precedence_group_assignment(): Precedence_group_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Precedence_group_assignmentContext);
	}
	public precedence_group_associativity(): Precedence_group_associativityContext | undefined {
		return this.tryGetRuleContext(0, Precedence_group_associativityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_precedence_group_attribute; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPrecedence_group_attribute) {
			listener.enterPrecedence_group_attribute(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPrecedence_group_attribute) {
			listener.exitPrecedence_group_attribute(this);
		}
	}
}


export class Precedence_group_relationContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(Swift3Parser.COLON, 0); }
	public precedence_group_names(): Precedence_group_namesContext {
		return this.getRuleContext(0, Precedence_group_namesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_precedence_group_relation; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPrecedence_group_relation) {
			listener.enterPrecedence_group_relation(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPrecedence_group_relation) {
			listener.exitPrecedence_group_relation(this);
		}
	}
}


export class Precedence_group_assignmentContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(Swift3Parser.COLON, 0); }
	public boolean_literal(): Boolean_literalContext {
		return this.getRuleContext(0, Boolean_literalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_precedence_group_assignment; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPrecedence_group_assignment) {
			listener.enterPrecedence_group_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPrecedence_group_assignment) {
			listener.exitPrecedence_group_assignment(this);
		}
	}
}


export class Precedence_group_associativityContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(Swift3Parser.COLON, 0); }
	public associativity(): AssociativityContext {
		return this.getRuleContext(0, AssociativityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_precedence_group_associativity; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPrecedence_group_associativity) {
			listener.enterPrecedence_group_associativity(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPrecedence_group_associativity) {
			listener.exitPrecedence_group_associativity(this);
		}
	}
}


export class AssociativityContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_associativity; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterAssociativity) {
			listener.enterAssociativity(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitAssociativity) {
			listener.exitAssociativity(this);
		}
	}
}


export class Precedence_group_namesContext extends ParserRuleContext {
	public precedence_group_name(): Precedence_group_nameContext[];
	public precedence_group_name(i: number): Precedence_group_nameContext;
	public precedence_group_name(i?: number): Precedence_group_nameContext | Precedence_group_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Precedence_group_nameContext);
		} else {
			return this.getRuleContext(i, Precedence_group_nameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.COMMA);
		} else {
			return this.getToken(Swift3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_precedence_group_names; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPrecedence_group_names) {
			listener.enterPrecedence_group_names(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPrecedence_group_names) {
			listener.exitPrecedence_group_names(this);
		}
	}
}


export class Precedence_group_nameContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_precedence_group_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPrecedence_group_name) {
			listener.enterPrecedence_group_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPrecedence_group_name) {
			listener.exitPrecedence_group_name(this);
		}
	}
}


export class Declaration_modifierContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.RPAREN, 0); }
	public access_level_modifier(): Access_level_modifierContext | undefined {
		return this.tryGetRuleContext(0, Access_level_modifierContext);
	}
	public mutation_modifier(): Mutation_modifierContext | undefined {
		return this.tryGetRuleContext(0, Mutation_modifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_declaration_modifier; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDeclaration_modifier) {
			listener.enterDeclaration_modifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDeclaration_modifier) {
			listener.exitDeclaration_modifier(this);
		}
	}
}


export class Declaration_modifiersContext extends ParserRuleContext {
	public declaration_modifier(): Declaration_modifierContext[];
	public declaration_modifier(i: number): Declaration_modifierContext;
	public declaration_modifier(i?: number): Declaration_modifierContext | Declaration_modifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Declaration_modifierContext);
		} else {
			return this.getRuleContext(i, Declaration_modifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_declaration_modifiers; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDeclaration_modifiers) {
			listener.enterDeclaration_modifiers(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDeclaration_modifiers) {
			listener.exitDeclaration_modifiers(this);
		}
	}
}


export class Access_level_modifierContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_access_level_modifier; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterAccess_level_modifier) {
			listener.enterAccess_level_modifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitAccess_level_modifier) {
			listener.exitAccess_level_modifier(this);
		}
	}
}


export class Mutation_modifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_mutation_modifier; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterMutation_modifier) {
			listener.enterMutation_modifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitMutation_modifier) {
			listener.exitMutation_modifier(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_pattern; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPattern) {
			listener.enterPattern(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPattern) {
			listener.exitPattern(this);
		}
	}
}


export class Wildcard_patternContext extends ParserRuleContext {
	public UNDERSCORE(): TerminalNode { return this.getToken(Swift3Parser.UNDERSCORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_wildcard_pattern; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterWildcard_pattern) {
			listener.enterWildcard_pattern(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitWildcard_pattern) {
			listener.exitWildcard_pattern(this);
		}
	}
}


export class Identifier_patternContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_identifier_pattern; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterIdentifier_pattern) {
			listener.enterIdentifier_pattern(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitIdentifier_pattern) {
			listener.exitIdentifier_pattern(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_value_binding_pattern; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterValue_binding_pattern) {
			listener.enterValue_binding_pattern(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitValue_binding_pattern) {
			listener.exitValue_binding_pattern(this);
		}
	}
}


export class Tuple_patternContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	public tuple_pattern_element_list(): Tuple_pattern_element_listContext | undefined {
		return this.tryGetRuleContext(0, Tuple_pattern_element_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_tuple_pattern; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterTuple_pattern) {
			listener.enterTuple_pattern(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitTuple_pattern) {
			listener.exitTuple_pattern(this);
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
			return this.getTokens(Swift3Parser.COMMA);
		} else {
			return this.getToken(Swift3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_tuple_pattern_element_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterTuple_pattern_element_list) {
			listener.enterTuple_pattern_element_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitTuple_pattern_element_list) {
			listener.exitTuple_pattern_element_list(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_tuple_pattern_element; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterTuple_pattern_element) {
			listener.enterTuple_pattern_element(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitTuple_pattern_element) {
			listener.exitTuple_pattern_element(this);
		}
	}
}


export class Enum_case_patternContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(Swift3Parser.DOT, 0); }
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
	public get ruleIndex(): number { return Swift3Parser.RULE_enum_case_pattern; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterEnum_case_pattern) {
			listener.enterEnum_case_pattern(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitEnum_case_pattern) {
			listener.exitEnum_case_pattern(this);
		}
	}
}


export class Optional_patternContext extends ParserRuleContext {
	public identifier_pattern(): Identifier_patternContext {
		return this.getRuleContext(0, Identifier_patternContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(Swift3Parser.QUESTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_optional_pattern; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterOptional_pattern) {
			listener.enterOptional_pattern(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitOptional_pattern) {
			listener.exitOptional_pattern(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_expression_pattern; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterExpression_pattern) {
			listener.enterExpression_pattern(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitExpression_pattern) {
			listener.exitExpression_pattern(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(Swift3Parser.AT, 0); }
	public attribute_name(): Attribute_nameContext {
		return this.getRuleContext(0, Attribute_nameContext);
	}
	public attribute_argument_clause(): Attribute_argument_clauseContext | undefined {
		return this.tryGetRuleContext(0, Attribute_argument_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_attribute; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
}


export class Attribute_nameContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_attribute_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterAttribute_name) {
			listener.enterAttribute_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitAttribute_name) {
			listener.exitAttribute_name(this);
		}
	}
}


export class Attribute_argument_clauseContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public balanced_tokens(): Balanced_tokensContext {
		return this.getRuleContext(0, Balanced_tokensContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_attribute_argument_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterAttribute_argument_clause) {
			listener.enterAttribute_argument_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitAttribute_argument_clause) {
			listener.exitAttribute_argument_clause(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_attributes; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterAttributes) {
			listener.enterAttributes(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitAttributes) {
			listener.exitAttributes(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_balanced_tokens; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterBalanced_tokens) {
			listener.enterBalanced_tokens(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitBalanced_tokens) {
			listener.exitBalanced_tokens(this);
		}
	}
}


export class Balanced_tokenContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.LPAREN, 0); }
	public balanced_tokens(): Balanced_tokensContext | undefined {
		return this.tryGetRuleContext(0, Balanced_tokensContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.RPAREN, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.RBRACK, 0); }
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.RCURLY, 0); }
	public label_identifier(): Label_identifierContext | undefined {
		return this.tryGetRuleContext(0, Label_identifierContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	public Platform_name_platform_version(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.Platform_name_platform_version, 0); }
	public any_punctuation_for_balanced_token(): Any_punctuation_for_balanced_tokenContext | undefined {
		return this.tryGetRuleContext(0, Any_punctuation_for_balanced_tokenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_balanced_token; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterBalanced_token) {
			listener.enterBalanced_token(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitBalanced_token) {
			listener.exitBalanced_token(this);
		}
	}
}


export class Any_punctuation_for_balanced_tokenContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.DOT, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.COMMA, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.COLON, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.SEMI, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.EQUAL, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.AT, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.QUESTION, 0); }
	public arrow_operator(): Arrow_operatorContext | undefined {
		return this.tryGetRuleContext(0, Arrow_operatorContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.AND, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.BANG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_any_punctuation_for_balanced_token; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterAny_punctuation_for_balanced_token) {
			listener.enterAny_punctuation_for_balanced_token(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitAny_punctuation_for_balanced_token) {
			listener.exitAny_punctuation_for_balanced_token(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
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
			return this.getTokens(Swift3Parser.COMMA);
		} else {
			return this.getToken(Swift3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_expression_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterExpression_list) {
			listener.enterExpression_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitExpression_list) {
			listener.exitExpression_list(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_prefix_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPrefix_expression) {
			listener.enterPrefix_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPrefix_expression) {
			listener.exitPrefix_expression(this);
		}
	}
}


export class In_out_expressionContext extends ParserRuleContext {
	public AND(): TerminalNode { return this.getToken(Swift3Parser.AND, 0); }
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_in_out_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterIn_out_expression) {
			listener.enterIn_out_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitIn_out_expression) {
			listener.exitIn_out_expression(this);
		}
	}
}


export class Try_operatorContext extends ParserRuleContext {
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.QUESTION, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.BANG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_try_operator; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterTry_operator) {
			listener.enterTry_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitTry_operator) {
			listener.exitTry_operator(this);
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
	public assignment_operator(): Assignment_operatorContext | undefined {
		return this.tryGetRuleContext(0, Assignment_operatorContext);
	}
	public try_operator(): Try_operatorContext | undefined {
		return this.tryGetRuleContext(0, Try_operatorContext);
	}
	public conditional_operator(): Conditional_operatorContext | undefined {
		return this.tryGetRuleContext(0, Conditional_operatorContext);
	}
	public type_casting_operator(): Type_casting_operatorContext | undefined {
		return this.tryGetRuleContext(0, Type_casting_operatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_binary_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterBinary_expression) {
			listener.enterBinary_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitBinary_expression) {
			listener.exitBinary_expression(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_binary_expressions; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterBinary_expressions) {
			listener.enterBinary_expressions(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitBinary_expressions) {
			listener.exitBinary_expressions(this);
		}
	}
}


export class Conditional_operatorContext extends ParserRuleContext {
	public QUESTION(): TerminalNode { return this.getToken(Swift3Parser.QUESTION, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode { return this.getToken(Swift3Parser.COLON, 0); }
	public try_operator(): Try_operatorContext | undefined {
		return this.tryGetRuleContext(0, Try_operatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_conditional_operator; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterConditional_operator) {
			listener.enterConditional_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitConditional_operator) {
			listener.exitConditional_operator(this);
		}
	}
}


export class Type_casting_operatorContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.QUESTION, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.BANG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_type_casting_operator; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterType_casting_operator) {
			listener.enterType_casting_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitType_casting_operator) {
			listener.exitType_casting_operator(this);
		}
	}
}


export class Primary_expressionContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext | undefined {
		return this.tryGetRuleContext(0, Declaration_identifierContext);
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
	public tuple_expression(): Tuple_expressionContext | undefined {
		return this.tryGetRuleContext(0, Tuple_expressionContext);
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
	public key_path_expression(): Key_path_expressionContext | undefined {
		return this.tryGetRuleContext(0, Key_path_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_primary_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPrimary_expression) {
			listener.enterPrimary_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPrimary_expression) {
			listener.exitPrimary_expression(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_literal_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterLiteral_expression) {
			listener.enterLiteral_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitLiteral_expression) {
			listener.exitLiteral_expression(this);
		}
	}
}


export class Array_literalContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(Swift3Parser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(Swift3Parser.RBRACK, 0); }
	public array_literal_items(): Array_literal_itemsContext | undefined {
		return this.tryGetRuleContext(0, Array_literal_itemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_array_literal; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterArray_literal) {
			listener.enterArray_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitArray_literal) {
			listener.exitArray_literal(this);
		}
	}
}


export class Array_literal_itemsContext extends ParserRuleContext {
	public array_literal_item(): Array_literal_itemContext {
		return this.getRuleContext(0, Array_literal_itemContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.COMMA, 0); }
	public array_literal_items(): Array_literal_itemsContext | undefined {
		return this.tryGetRuleContext(0, Array_literal_itemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_array_literal_items; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterArray_literal_items) {
			listener.enterArray_literal_items(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitArray_literal_items) {
			listener.exitArray_literal_items(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_array_literal_item; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterArray_literal_item) {
			listener.enterArray_literal_item(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitArray_literal_item) {
			listener.exitArray_literal_item(this);
		}
	}
}


export class Dictionary_literalContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(Swift3Parser.LBRACK, 0); }
	public dictionary_literal_items(): Dictionary_literal_itemsContext | undefined {
		return this.tryGetRuleContext(0, Dictionary_literal_itemsContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(Swift3Parser.RBRACK, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_dictionary_literal; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDictionary_literal) {
			listener.enterDictionary_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDictionary_literal) {
			listener.exitDictionary_literal(this);
		}
	}
}


export class Dictionary_literal_itemsContext extends ParserRuleContext {
	public dictionary_literal_item(): Dictionary_literal_itemContext {
		return this.getRuleContext(0, Dictionary_literal_itemContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.COMMA, 0); }
	public dictionary_literal_items(): Dictionary_literal_itemsContext | undefined {
		return this.tryGetRuleContext(0, Dictionary_literal_itemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_dictionary_literal_items; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDictionary_literal_items) {
			listener.enterDictionary_literal_items(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDictionary_literal_items) {
			listener.exitDictionary_literal_items(this);
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
	public COLON(): TerminalNode { return this.getToken(Swift3Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_dictionary_literal_item; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDictionary_literal_item) {
			listener.enterDictionary_literal_item(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDictionary_literal_item) {
			listener.exitDictionary_literal_item(this);
		}
	}
}


export class Playground_literalContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.COLON);
		} else {
			return this.getToken(Swift3Parser.COLON, i);
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
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.COMMA);
		} else {
			return this.getToken(Swift3Parser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_playground_literal; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPlayground_literal) {
			listener.enterPlayground_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPlayground_literal) {
			listener.exitPlayground_literal(this);
		}
	}
}


export class Self_expressionContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.DOT, 0); }
	public declaration_identifier(): Declaration_identifierContext | undefined {
		return this.tryGetRuleContext(0, Declaration_identifierContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.LBRACK, 0); }
	public expression_list(): Expression_listContext | undefined {
		return this.tryGetRuleContext(0, Expression_listContext);
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_self_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSelf_expression) {
			listener.enterSelf_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSelf_expression) {
			listener.exitSelf_expression(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_superclass_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSuperclass_expression) {
			listener.enterSuperclass_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSuperclass_expression) {
			listener.exitSuperclass_expression(this);
		}
	}
}


export class Superclass_method_expressionContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(Swift3Parser.DOT, 0); }
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_superclass_method_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSuperclass_method_expression) {
			listener.enterSuperclass_method_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSuperclass_method_expression) {
			listener.exitSuperclass_method_expression(this);
		}
	}
}


export class Superclass_subscript_expressionContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(Swift3Parser.LBRACK, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(Swift3Parser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_superclass_subscript_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSuperclass_subscript_expression) {
			listener.enterSuperclass_subscript_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSuperclass_subscript_expression) {
			listener.exitSuperclass_subscript_expression(this);
		}
	}
}


export class Superclass_initializer_expressionContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(Swift3Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_superclass_initializer_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSuperclass_initializer_expression) {
			listener.enterSuperclass_initializer_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSuperclass_initializer_expression) {
			listener.exitSuperclass_initializer_expression(this);
		}
	}
}


export class Closure_expressionContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(Swift3Parser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(Swift3Parser.RCURLY, 0); }
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
	public get ruleIndex(): number { return Swift3Parser.RULE_closure_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterClosure_expression) {
			listener.enterClosure_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitClosure_expression) {
			listener.exitClosure_expression(this);
		}
	}
}


export class Closure_signatureContext extends ParserRuleContext {
	public closure_parameter_clause(): Closure_parameter_clauseContext | undefined {
		return this.tryGetRuleContext(0, Closure_parameter_clauseContext);
	}
	public capture_list(): Capture_listContext | undefined {
		return this.tryGetRuleContext(0, Capture_listContext);
	}
	public function_result(): Function_resultContext | undefined {
		return this.tryGetRuleContext(0, Function_resultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_closure_signature; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterClosure_signature) {
			listener.enterClosure_signature(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitClosure_signature) {
			listener.exitClosure_signature(this);
		}
	}
}


export class Closure_parameter_clauseContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.RPAREN, 0); }
	public closure_parameter_list(): Closure_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Closure_parameter_listContext);
	}
	public closure_parameter_clause_identifier_list(): Closure_parameter_clause_identifier_listContext | undefined {
		return this.tryGetRuleContext(0, Closure_parameter_clause_identifier_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_closure_parameter_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterClosure_parameter_clause) {
			listener.enterClosure_parameter_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitClosure_parameter_clause) {
			listener.exitClosure_parameter_clause(this);
		}
	}
}


export class Closure_parameter_clause_identifier_listContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext[];
	public declaration_identifier(i: number): Declaration_identifierContext;
	public declaration_identifier(i?: number): Declaration_identifierContext | Declaration_identifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Declaration_identifierContext);
		} else {
			return this.getRuleContext(i, Declaration_identifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.COMMA);
		} else {
			return this.getToken(Swift3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_closure_parameter_clause_identifier_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterClosure_parameter_clause_identifier_list) {
			listener.enterClosure_parameter_clause_identifier_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitClosure_parameter_clause_identifier_list) {
			listener.exitClosure_parameter_clause_identifier_list(this);
		}
	}
}


export class Closure_parameter_listContext extends ParserRuleContext {
	public closure_parameter(): Closure_parameterContext[];
	public closure_parameter(i: number): Closure_parameterContext;
	public closure_parameter(i?: number): Closure_parameterContext | Closure_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Closure_parameterContext);
		} else {
			return this.getRuleContext(i, Closure_parameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.COMMA);
		} else {
			return this.getToken(Swift3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_closure_parameter_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterClosure_parameter_list) {
			listener.enterClosure_parameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitClosure_parameter_list) {
			listener.exitClosure_parameter_list(this);
		}
	}
}


export class Closure_parameterContext extends ParserRuleContext {
	public closure_parameter_name(): Closure_parameter_nameContext {
		return this.getRuleContext(0, Closure_parameter_nameContext);
	}
	public type_annotation(): Type_annotationContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationContext);
	}
	public range_operator(): Range_operatorContext | undefined {
		return this.tryGetRuleContext(0, Range_operatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_closure_parameter; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterClosure_parameter) {
			listener.enterClosure_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitClosure_parameter) {
			listener.exitClosure_parameter(this);
		}
	}
}


export class Closure_parameter_nameContext extends ParserRuleContext {
	public label_identifier(): Label_identifierContext {
		return this.getRuleContext(0, Label_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_closure_parameter_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterClosure_parameter_name) {
			listener.enterClosure_parameter_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitClosure_parameter_name) {
			listener.exitClosure_parameter_name(this);
		}
	}
}


export class Capture_listContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(Swift3Parser.LBRACK, 0); }
	public capture_list_items(): Capture_list_itemsContext {
		return this.getRuleContext(0, Capture_list_itemsContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(Swift3Parser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_capture_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCapture_list) {
			listener.enterCapture_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCapture_list) {
			listener.exitCapture_list(this);
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
			return this.getTokens(Swift3Parser.COMMA);
		} else {
			return this.getToken(Swift3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_capture_list_items; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCapture_list_items) {
			listener.enterCapture_list_items(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCapture_list_items) {
			listener.exitCapture_list_items(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_capture_list_item; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCapture_list_item) {
			listener.enterCapture_list_item(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCapture_list_item) {
			listener.exitCapture_list_item(this);
		}
	}
}


export class Capture_specifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_capture_specifier; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCapture_specifier) {
			listener.enterCapture_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCapture_specifier) {
			listener.exitCapture_specifier(this);
		}
	}
}


export class Implicit_member_expressionContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(Swift3Parser.DOT, 0); }
	public label_identifier(): Label_identifierContext {
		return this.getRuleContext(0, Label_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_implicit_member_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterImplicit_member_expression) {
			listener.enterImplicit_member_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitImplicit_member_expression) {
			listener.exitImplicit_member_expression(this);
		}
	}
}


export class Parenthesized_expressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_parenthesized_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterParenthesized_expression) {
			listener.enterParenthesized_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitParenthesized_expression) {
			listener.exitParenthesized_expression(this);
		}
	}
}


export class Tuple_expressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	public tuple_element(): Tuple_elementContext[];
	public tuple_element(i: number): Tuple_elementContext;
	public tuple_element(i?: number): Tuple_elementContext | Tuple_elementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Tuple_elementContext);
		} else {
			return this.getRuleContext(i, Tuple_elementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.COMMA);
		} else {
			return this.getToken(Swift3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_tuple_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterTuple_expression) {
			listener.enterTuple_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitTuple_expression) {
			listener.exitTuple_expression(this);
		}
	}
}


export class Tuple_elementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public label_identifier(): Label_identifierContext | undefined {
		return this.tryGetRuleContext(0, Label_identifierContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_tuple_element; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterTuple_element) {
			listener.enterTuple_element(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitTuple_element) {
			listener.exitTuple_element(this);
		}
	}
}


export class Wildcard_expressionContext extends ParserRuleContext {
	public UNDERSCORE(): TerminalNode { return this.getToken(Swift3Parser.UNDERSCORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_wildcard_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterWildcard_expression) {
			listener.enterWildcard_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitWildcard_expression) {
			listener.exitWildcard_expression(this);
		}
	}
}


export class Selector_expressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_selector_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSelector_expression) {
			listener.enterSelector_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSelector_expression) {
			listener.exitSelector_expression(this);
		}
	}
}


export class Key_path_expressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_key_path_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterKey_path_expression) {
			listener.enterKey_path_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitKey_path_expression) {
			listener.exitKey_path_expression(this);
		}
	}
}


export class Postfix_expressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_postfix_expression; }
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
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
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
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPostfix_operation) {
			listener.enterPostfix_operation(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPostfix_operation) {
			listener.exitPostfix_operation(this);
		}
	}
}
export class Function_call_expressionContext extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public function_call_argument_clause(): Function_call_argument_clauseContext {
		return this.getRuleContext(0, Function_call_argument_clauseContext);
	}
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFunction_call_expression) {
			listener.enterFunction_call_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFunction_call_expression) {
			listener.exitFunction_call_expression(this);
		}
	}
}
export class Function_call_expression_with_closureContext extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public trailing_closure(): Trailing_closureContext {
		return this.getRuleContext(0, Trailing_closureContext);
	}
	public function_call_argument_clause(): Function_call_argument_clauseContext | undefined {
		return this.tryGetRuleContext(0, Function_call_argument_clauseContext);
	}
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFunction_call_expression_with_closure) {
			listener.enterFunction_call_expression_with_closure(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFunction_call_expression_with_closure) {
			listener.exitFunction_call_expression_with_closure(this);
		}
	}
}
export class Initializer_expressionContext extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(Swift3Parser.DOT, 0); }
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterInitializer_expression) {
			listener.enterInitializer_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitInitializer_expression) {
			listener.exitInitializer_expression(this);
		}
	}
}
export class Initializer_expression_with_argsContext extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(Swift3Parser.DOT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public argument_names(): Argument_namesContext {
		return this.getRuleContext(0, Argument_namesContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterInitializer_expression_with_args) {
			listener.enterInitializer_expression_with_args(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitInitializer_expression_with_args) {
			listener.exitInitializer_expression_with_args(this);
		}
	}
}
export class Explicit_member_expression1Context extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(Swift3Parser.DOT, 0); }
	public Pure_decimal_digits(): TerminalNode { return this.getToken(Swift3Parser.Pure_decimal_digits, 0); }
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterExplicit_member_expression1) {
			listener.enterExplicit_member_expression1(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitExplicit_member_expression1) {
			listener.exitExplicit_member_expression1(this);
		}
	}
}
export class Explicit_member_expression2Context extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(Swift3Parser.DOT, 0); }
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	public generic_argument_clause(): Generic_argument_clauseContext | undefined {
		return this.tryGetRuleContext(0, Generic_argument_clauseContext);
	}
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterExplicit_member_expression2) {
			listener.enterExplicit_member_expression2(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitExplicit_member_expression2) {
			listener.exitExplicit_member_expression2(this);
		}
	}
}
export class Explicit_member_expression3Context extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(Swift3Parser.DOT, 0); }
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public argument_names(): Argument_namesContext {
		return this.getRuleContext(0, Argument_namesContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterExplicit_member_expression3) {
			listener.enterExplicit_member_expression3(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitExplicit_member_expression3) {
			listener.exitExplicit_member_expression3(this);
		}
	}
}
export class Explicit_member_expression4Context extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public argument_names(): Argument_namesContext {
		return this.getRuleContext(0, Argument_namesContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterExplicit_member_expression4) {
			listener.enterExplicit_member_expression4(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitExplicit_member_expression4) {
			listener.exitExplicit_member_expression4(this);
		}
	}
}
export class Postfix_self_expressionContext extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(Swift3Parser.DOT, 0); }
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPostfix_self_expression) {
			listener.enterPostfix_self_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPostfix_self_expression) {
			listener.exitPostfix_self_expression(this);
		}
	}
}
export class Dynamic_typeContext extends Postfix_expressionContext {
	public dynamic_type_expression(): Dynamic_type_expressionContext {
		return this.getRuleContext(0, Dynamic_type_expressionContext);
	}
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDynamic_type) {
			listener.enterDynamic_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDynamic_type) {
			listener.exitDynamic_type(this);
		}
	}
}
export class Subscript_expressionContext extends Postfix_expressionContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public LBRACK(): TerminalNode { return this.getToken(Swift3Parser.LBRACK, 0); }
	public expression_list(): Expression_listContext {
		return this.getRuleContext(0, Expression_listContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(Swift3Parser.RBRACK, 0); }
	constructor(ctx: Postfix_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSubscript_expression) {
			listener.enterSubscript_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSubscript_expression) {
			listener.exitSubscript_expression(this);
		}
	}
}


export class Function_call_argument_clauseContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	public function_call_argument_list(): Function_call_argument_listContext | undefined {
		return this.tryGetRuleContext(0, Function_call_argument_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_function_call_argument_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFunction_call_argument_clause) {
			listener.enterFunction_call_argument_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFunction_call_argument_clause) {
			listener.exitFunction_call_argument_clause(this);
		}
	}
}


export class Function_call_argument_listContext extends ParserRuleContext {
	public function_call_argument(): Function_call_argumentContext[];
	public function_call_argument(i: number): Function_call_argumentContext;
	public function_call_argument(i?: number): Function_call_argumentContext | Function_call_argumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_call_argumentContext);
		} else {
			return this.getRuleContext(i, Function_call_argumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.COMMA);
		} else {
			return this.getToken(Swift3Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_function_call_argument_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFunction_call_argument_list) {
			listener.enterFunction_call_argument_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFunction_call_argument_list) {
			listener.exitFunction_call_argument_list(this);
		}
	}
}


export class Function_call_argumentContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public label_identifier(): Label_identifierContext | undefined {
		return this.tryGetRuleContext(0, Label_identifierContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.COLON, 0); }
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_function_call_argument; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFunction_call_argument) {
			listener.enterFunction_call_argument(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFunction_call_argument) {
			listener.exitFunction_call_argument(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_trailing_closure; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterTrailing_closure) {
			listener.enterTrailing_closure(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitTrailing_closure) {
			listener.exitTrailing_closure(this);
		}
	}
}


export class Argument_namesContext extends ParserRuleContext {
	public argument_name(): Argument_nameContext[];
	public argument_name(i: number): Argument_nameContext;
	public argument_name(i?: number): Argument_nameContext | Argument_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Argument_nameContext);
		} else {
			return this.getRuleContext(i, Argument_nameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_argument_names; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterArgument_names) {
			listener.enterArgument_names(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitArgument_names) {
			listener.exitArgument_names(this);
		}
	}
}


export class Argument_nameContext extends ParserRuleContext {
	public label_identifier(): Label_identifierContext {
		return this.getRuleContext(0, Label_identifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(Swift3Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_argument_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterArgument_name) {
			listener.enterArgument_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitArgument_name) {
			listener.exitArgument_name(this);
		}
	}
}


export class Dynamic_type_expressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public COLON(): TerminalNode { return this.getToken(Swift3Parser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_dynamic_type_expression; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDynamic_type_expression) {
			listener.enterDynamic_type_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDynamic_type_expression) {
			listener.exitDynamic_type_expression(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class The_array_typeContext extends TypeContext {
	public array_type(): Array_typeContext {
		return this.getRuleContext(0, Array_typeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterThe_array_type) {
			listener.enterThe_array_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitThe_array_type) {
			listener.exitThe_array_type(this);
		}
	}
}
export class The_dictionary_typeContext extends TypeContext {
	public dictionary_type(): Dictionary_typeContext {
		return this.getRuleContext(0, Dictionary_typeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterThe_dictionary_type) {
			listener.enterThe_dictionary_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitThe_dictionary_type) {
			listener.exitThe_dictionary_type(this);
		}
	}
}
export class The_function_typeContext extends TypeContext {
	public function_type(): Function_typeContext {
		return this.getRuleContext(0, Function_typeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterThe_function_type) {
			listener.enterThe_function_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitThe_function_type) {
			listener.exitThe_function_type(this);
		}
	}
}
export class The_type_identifierContext extends TypeContext {
	public type_identifier(): Type_identifierContext {
		return this.getRuleContext(0, Type_identifierContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterThe_type_identifier) {
			listener.enterThe_type_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitThe_type_identifier) {
			listener.exitThe_type_identifier(this);
		}
	}
}
export class The_tuple_typeContext extends TypeContext {
	public tuple_type(): Tuple_typeContext {
		return this.getRuleContext(0, Tuple_typeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterThe_tuple_type) {
			listener.enterThe_tuple_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitThe_tuple_type) {
			listener.exitThe_tuple_type(this);
		}
	}
}
export class The_optional_typeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(Swift3Parser.QUESTION, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterThe_optional_type) {
			listener.enterThe_optional_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitThe_optional_type) {
			listener.exitThe_optional_type(this);
		}
	}
}
export class The_implicitly_unwrapped_optional_typeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public BANG(): TerminalNode { return this.getToken(Swift3Parser.BANG, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterThe_implicitly_unwrapped_optional_type) {
			listener.enterThe_implicitly_unwrapped_optional_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitThe_implicitly_unwrapped_optional_type) {
			listener.exitThe_implicitly_unwrapped_optional_type(this);
		}
	}
}
export class The_protocol_composition_typeContext extends TypeContext {
	public protocol_composition_type(): Protocol_composition_typeContext {
		return this.getRuleContext(0, Protocol_composition_typeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterThe_protocol_composition_type) {
			listener.enterThe_protocol_composition_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitThe_protocol_composition_type) {
			listener.exitThe_protocol_composition_type(this);
		}
	}
}
export class The_metatype_type_typeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public DOT(): TerminalNode { return this.getToken(Swift3Parser.DOT, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterThe_metatype_type_type) {
			listener.enterThe_metatype_type_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitThe_metatype_type_type) {
			listener.exitThe_metatype_type_type(this);
		}
	}
}
export class The_metatype_protocol_typeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public DOT(): TerminalNode { return this.getToken(Swift3Parser.DOT, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterThe_metatype_protocol_type) {
			listener.enterThe_metatype_protocol_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitThe_metatype_protocol_type) {
			listener.exitThe_metatype_protocol_type(this);
		}
	}
}
export class The_any_typeContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterThe_any_type) {
			listener.enterThe_any_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitThe_any_type) {
			listener.exitThe_any_type(this);
		}
	}
}
export class The_self_typeContext extends TypeContext {
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterThe_self_type) {
			listener.enterThe_self_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitThe_self_type) {
			listener.exitThe_self_type(this);
		}
	}
}


export class Type_annotationContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(Swift3Parser.COLON, 0); }
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
	public get ruleIndex(): number { return Swift3Parser.RULE_type_annotation; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterType_annotation) {
			listener.enterType_annotation(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitType_annotation) {
			listener.exitType_annotation(this);
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
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.DOT, 0); }
	public type_identifier(): Type_identifierContext | undefined {
		return this.tryGetRuleContext(0, Type_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_type_identifier; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterType_identifier) {
			listener.enterType_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitType_identifier) {
			listener.exitType_identifier(this);
		}
	}
}


export class Type_nameContext extends ParserRuleContext {
	public declaration_identifier(): Declaration_identifierContext {
		return this.getRuleContext(0, Declaration_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_type_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterType_name) {
			listener.enterType_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitType_name) {
			listener.exitType_name(this);
		}
	}
}


export class Tuple_typeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	public tuple_type_element_list(): Tuple_type_element_listContext | undefined {
		return this.tryGetRuleContext(0, Tuple_type_element_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_tuple_type; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterTuple_type) {
			listener.enterTuple_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitTuple_type) {
			listener.exitTuple_type(this);
		}
	}
}


export class Tuple_type_element_listContext extends ParserRuleContext {
	public tuple_type_element(): Tuple_type_elementContext {
		return this.getRuleContext(0, Tuple_type_elementContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.COMMA, 0); }
	public tuple_type_element_list(): Tuple_type_element_listContext | undefined {
		return this.tryGetRuleContext(0, Tuple_type_element_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_tuple_type_element_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterTuple_type_element_list) {
			listener.enterTuple_type_element_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitTuple_type_element_list) {
			listener.exitTuple_type_element_list(this);
		}
	}
}


export class Tuple_type_elementContext extends ParserRuleContext {
	public element_name(): Element_nameContext | undefined {
		return this.tryGetRuleContext(0, Element_nameContext);
	}
	public type_annotation(): Type_annotationContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_tuple_type_element; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterTuple_type_element) {
			listener.enterTuple_type_element(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitTuple_type_element) {
			listener.exitTuple_type_element(this);
		}
	}
}


export class Element_nameContext extends ParserRuleContext {
	public label_identifier(): Label_identifierContext {
		return this.getRuleContext(0, Label_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_element_name; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterElement_name) {
			listener.enterElement_name(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitElement_name) {
			listener.exitElement_name(this);
		}
	}
}


export class Function_typeContext extends ParserRuleContext {
	public function_type_argument_clause(): Function_type_argument_clauseContext {
		return this.getRuleContext(0, Function_type_argument_clauseContext);
	}
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
	public get ruleIndex(): number { return Swift3Parser.RULE_function_type; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFunction_type) {
			listener.enterFunction_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFunction_type) {
			listener.exitFunction_type(this);
		}
	}
}


export class Function_type_argument_clauseContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Swift3Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Swift3Parser.RPAREN, 0); }
	public function_type_argument_list(): Function_type_argument_listContext | undefined {
		return this.tryGetRuleContext(0, Function_type_argument_listContext);
	}
	public range_operator(): Range_operatorContext | undefined {
		return this.tryGetRuleContext(0, Range_operatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_function_type_argument_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFunction_type_argument_clause) {
			listener.enterFunction_type_argument_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFunction_type_argument_clause) {
			listener.exitFunction_type_argument_clause(this);
		}
	}
}


export class Function_type_argument_listContext extends ParserRuleContext {
	public function_type_argument(): Function_type_argumentContext {
		return this.getRuleContext(0, Function_type_argumentContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.COMMA, 0); }
	public function_type_argument_list(): Function_type_argument_listContext | undefined {
		return this.tryGetRuleContext(0, Function_type_argument_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_function_type_argument_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFunction_type_argument_list) {
			listener.enterFunction_type_argument_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFunction_type_argument_list) {
			listener.exitFunction_type_argument_list(this);
		}
	}
}


export class Function_type_argumentContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public argument_label(): Argument_labelContext | undefined {
		return this.tryGetRuleContext(0, Argument_labelContext);
	}
	public type_annotation(): Type_annotationContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_function_type_argument; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterFunction_type_argument) {
			listener.enterFunction_type_argument(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitFunction_type_argument) {
			listener.exitFunction_type_argument(this);
		}
	}
}


export class Argument_labelContext extends ParserRuleContext {
	public label_identifier(): Label_identifierContext {
		return this.getRuleContext(0, Label_identifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_argument_label; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterArgument_label) {
			listener.enterArgument_label(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitArgument_label) {
			listener.exitArgument_label(this);
		}
	}
}


export class Array_typeContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(Swift3Parser.LBRACK, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(Swift3Parser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_array_type; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterArray_type) {
			listener.enterArray_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitArray_type) {
			listener.exitArray_type(this);
		}
	}
}


export class Dictionary_typeContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(Swift3Parser.LBRACK, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(Swift3Parser.COLON, 0); }
	public RBRACK(): TerminalNode { return this.getToken(Swift3Parser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_dictionary_type; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDictionary_type) {
			listener.enterDictionary_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDictionary_type) {
			listener.exitDictionary_type(this);
		}
	}
}


export class Protocol_composition_typeContext extends ParserRuleContext {
	public protocol_identifier(): Protocol_identifierContext[];
	public protocol_identifier(i: number): Protocol_identifierContext;
	public protocol_identifier(i?: number): Protocol_identifierContext | Protocol_identifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Protocol_identifierContext);
		} else {
			return this.getRuleContext(i, Protocol_identifierContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.AND);
		} else {
			return this.getToken(Swift3Parser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_protocol_composition_type; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterProtocol_composition_type) {
			listener.enterProtocol_composition_type(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitProtocol_composition_type) {
			listener.exitProtocol_composition_type(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_protocol_identifier; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterProtocol_identifier) {
			listener.enterProtocol_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitProtocol_identifier) {
			listener.exitProtocol_identifier(this);
		}
	}
}


export class Type_inheritance_clauseContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(Swift3Parser.COLON, 0); }
	public class_requirement(): Class_requirementContext | undefined {
		return this.tryGetRuleContext(0, Class_requirementContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.COMMA, 0); }
	public type_inheritance_list(): Type_inheritance_listContext | undefined {
		return this.tryGetRuleContext(0, Type_inheritance_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_type_inheritance_clause; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterType_inheritance_clause) {
			listener.enterType_inheritance_clause(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitType_inheritance_clause) {
			listener.exitType_inheritance_clause(this);
		}
	}
}


export class Type_inheritance_listContext extends ParserRuleContext {
	public type_identifier(): Type_identifierContext {
		return this.getRuleContext(0, Type_identifierContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.COMMA, 0); }
	public type_inheritance_list(): Type_inheritance_listContext | undefined {
		return this.tryGetRuleContext(0, Type_inheritance_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_type_inheritance_list; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterType_inheritance_list) {
			listener.enterType_inheritance_list(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitType_inheritance_list) {
			listener.exitType_inheritance_list(this);
		}
	}
}


export class Class_requirementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_class_requirement; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterClass_requirement) {
			listener.enterClass_requirement(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitClass_requirement) {
			listener.exitClass_requirement(this);
		}
	}
}


export class Declaration_identifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.Identifier, 0); }
	public keyword_as_identifier_in_declarations(): Keyword_as_identifier_in_declarationsContext | undefined {
		return this.tryGetRuleContext(0, Keyword_as_identifier_in_declarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_declaration_identifier; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDeclaration_identifier) {
			listener.enterDeclaration_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDeclaration_identifier) {
			listener.exitDeclaration_identifier(this);
		}
	}
}


export class Label_identifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.Identifier, 0); }
	public keyword_as_identifier_in_labels(): Keyword_as_identifier_in_labelsContext | undefined {
		return this.tryGetRuleContext(0, Keyword_as_identifier_in_labelsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_label_identifier; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterLabel_identifier) {
			listener.enterLabel_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitLabel_identifier) {
			listener.exitLabel_identifier(this);
		}
	}
}


export class Keyword_as_identifier_in_declarationsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_keyword_as_identifier_in_declarations; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterKeyword_as_identifier_in_declarations) {
			listener.enterKeyword_as_identifier_in_declarations(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitKeyword_as_identifier_in_declarations) {
			listener.exitKeyword_as_identifier_in_declarations(this);
		}
	}
}


export class Keyword_as_identifier_in_labelsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_keyword_as_identifier_in_labels; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterKeyword_as_identifier_in_labels) {
			listener.enterKeyword_as_identifier_in_labels(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitKeyword_as_identifier_in_labels) {
			listener.exitKeyword_as_identifier_in_labels(this);
		}
	}
}


export class Assignment_operatorContext extends ParserRuleContext {
	public EQUAL(): TerminalNode { return this.getToken(Swift3Parser.EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_assignment_operator; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterAssignment_operator) {
			listener.enterAssignment_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitAssignment_operator) {
			listener.exitAssignment_operator(this);
		}
	}
}


export class Negate_prefix_operatorContext extends ParserRuleContext {
	public SUB(): TerminalNode { return this.getToken(Swift3Parser.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_negate_prefix_operator; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterNegate_prefix_operator) {
			listener.enterNegate_prefix_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitNegate_prefix_operator) {
			listener.exitNegate_prefix_operator(this);
		}
	}
}


export class Compilation_condition_ANDContext extends ParserRuleContext {
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.AND);
		} else {
			return this.getToken(Swift3Parser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_compilation_condition_AND; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCompilation_condition_AND) {
			listener.enterCompilation_condition_AND(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCompilation_condition_AND) {
			listener.exitCompilation_condition_AND(this);
		}
	}
}


export class Compilation_condition_ORContext extends ParserRuleContext {
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.OR);
		} else {
			return this.getToken(Swift3Parser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_compilation_condition_OR; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCompilation_condition_OR) {
			listener.enterCompilation_condition_OR(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCompilation_condition_OR) {
			listener.exitCompilation_condition_OR(this);
		}
	}
}


export class Compilation_condition_GEContext extends ParserRuleContext {
	public GT(): TerminalNode { return this.getToken(Swift3Parser.GT, 0); }
	public EQUAL(): TerminalNode { return this.getToken(Swift3Parser.EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_compilation_condition_GE; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterCompilation_condition_GE) {
			listener.enterCompilation_condition_GE(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitCompilation_condition_GE) {
			listener.exitCompilation_condition_GE(this);
		}
	}
}


export class Arrow_operatorContext extends ParserRuleContext {
	public SUB(): TerminalNode { return this.getToken(Swift3Parser.SUB, 0); }
	public GT(): TerminalNode { return this.getToken(Swift3Parser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_arrow_operator; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterArrow_operator) {
			listener.enterArrow_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitArrow_operator) {
			listener.exitArrow_operator(this);
		}
	}
}


export class Range_operatorContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.DOT);
		} else {
			return this.getToken(Swift3Parser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_range_operator; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterRange_operator) {
			listener.enterRange_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitRange_operator) {
			listener.exitRange_operator(this);
		}
	}
}


export class Same_type_equalsContext extends ParserRuleContext {
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Swift3Parser.EQUAL);
		} else {
			return this.getToken(Swift3Parser.EQUAL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_same_type_equals; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterSame_type_equals) {
			listener.enterSame_type_equals(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitSame_type_equals) {
			listener.exitSame_type_equals(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_binary_operator; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterBinary_operator) {
			listener.enterBinary_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitBinary_operator) {
			listener.exitBinary_operator(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_prefix_operator; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPrefix_operator) {
			listener.enterPrefix_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPrefix_operator) {
			listener.exitPrefix_operator(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_postfix_operator; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterPostfix_operator) {
			listener.enterPostfix_operator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitPostfix_operator) {
			listener.exitPostfix_operator(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_operator; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterOperator) {
			listener.enterOperator(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitOperator) {
			listener.exitOperator(this);
		}
	}
}


export class Operator_characterContext extends ParserRuleContext {
	public operator_head(): Operator_headContext | undefined {
		return this.tryGetRuleContext(0, Operator_headContext);
	}
	public Operator_following_character(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.Operator_following_character, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_operator_character; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterOperator_character) {
			listener.enterOperator_character(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitOperator_character) {
			listener.exitOperator_character(this);
		}
	}
}


export class Operator_headContext extends ParserRuleContext {
	public DIV(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.DIV, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.EQUAL, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.SUB, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.ADD, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.BANG, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.MUL, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.MOD, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.OR, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.GT, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.CARET, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.TILDE, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.QUESTION, 0); }
	public Operator_head_other(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.Operator_head_other, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_operator_head; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterOperator_head) {
			listener.enterOperator_head(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitOperator_head) {
			listener.exitOperator_head(this);
		}
	}
}


export class Dot_operator_headContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(Swift3Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_dot_operator_head; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDot_operator_head) {
			listener.enterDot_operator_head(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDot_operator_head) {
			listener.exitDot_operator_head(this);
		}
	}
}


export class Dot_operator_characterContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.DOT, 0); }
	public operator_character(): Operator_characterContext | undefined {
		return this.tryGetRuleContext(0, Operator_characterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_dot_operator_character; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterDot_operator_character) {
			listener.enterDot_operator_character(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitDot_operator_character) {
			listener.exitDot_operator_character(this);
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
	public get ruleIndex(): number { return Swift3Parser.RULE_literal; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
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
	public Floating_point_literal(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.Floating_point_literal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_numeric_literal; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterNumeric_literal) {
			listener.enterNumeric_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitNumeric_literal) {
			listener.exitNumeric_literal(this);
		}
	}
}


export class Boolean_literalContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_boolean_literal; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterBoolean_literal) {
			listener.enterBoolean_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitBoolean_literal) {
			listener.exitBoolean_literal(this);
		}
	}
}


export class Nil_literalContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_nil_literal; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterNil_literal) {
			listener.enterNil_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitNil_literal) {
			listener.exitNil_literal(this);
		}
	}
}


export class Integer_literalContext extends ParserRuleContext {
	public Binary_literal(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.Binary_literal, 0); }
	public Octal_literal(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.Octal_literal, 0); }
	public Decimal_literal(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.Decimal_literal, 0); }
	public Pure_decimal_digits(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.Pure_decimal_digits, 0); }
	public Hexadecimal_literal(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.Hexadecimal_literal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_integer_literal; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterInteger_literal) {
			listener.enterInteger_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitInteger_literal) {
			listener.exitInteger_literal(this);
		}
	}
}


export class String_literalContext extends ParserRuleContext {
	public Static_string_literal(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.Static_string_literal, 0); }
	public Interpolated_string_literal(): TerminalNode | undefined { return this.tryGetToken(Swift3Parser.Interpolated_string_literal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Swift3Parser.RULE_string_literal; }
	// @Override
	public enterRule(listener: Swift3Listener): void {
		if (listener.enterString_literal) {
			listener.enterString_literal(this);
		}
	}
	// @Override
	public exitRule(listener: Swift3Listener): void {
		if (listener.exitString_literal) {
			listener.exitString_literal(this);
		}
	}
}


