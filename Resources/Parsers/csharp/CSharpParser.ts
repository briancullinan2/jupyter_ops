// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/csharp/CSharpParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { CSharpParserListener } from "./CSharpParserListener";

export class CSharpParser extends Parser {
	public static readonly BYTE_ORDER_MARK = 1;
	public static readonly SINGLE_LINE_DOC_COMMENT = 2;
	public static readonly DELIMITED_DOC_COMMENT = 3;
	public static readonly SINGLE_LINE_COMMENT = 4;
	public static readonly DELIMITED_COMMENT = 5;
	public static readonly WHITESPACES = 6;
	public static readonly SHARP = 7;
	public static readonly ABSTRACT = 8;
	public static readonly ADD = 9;
	public static readonly ALIAS = 10;
	public static readonly ARGLIST = 11;
	public static readonly AS = 12;
	public static readonly ASCENDING = 13;
	public static readonly ASYNC = 14;
	public static readonly AWAIT = 15;
	public static readonly BASE = 16;
	public static readonly BOOL = 17;
	public static readonly BREAK = 18;
	public static readonly BY = 19;
	public static readonly BYTE = 20;
	public static readonly CASE = 21;
	public static readonly CATCH = 22;
	public static readonly CHAR = 23;
	public static readonly CHECKED = 24;
	public static readonly CLASS = 25;
	public static readonly CONST = 26;
	public static readonly CONTINUE = 27;
	public static readonly DECIMAL = 28;
	public static readonly DEFAULT = 29;
	public static readonly DELEGATE = 30;
	public static readonly DESCENDING = 31;
	public static readonly DO = 32;
	public static readonly DOUBLE = 33;
	public static readonly DYNAMIC = 34;
	public static readonly ELSE = 35;
	public static readonly ENUM = 36;
	public static readonly EQUALS = 37;
	public static readonly EVENT = 38;
	public static readonly EXPLICIT = 39;
	public static readonly EXTERN = 40;
	public static readonly FALSE = 41;
	public static readonly FINALLY = 42;
	public static readonly FIXED = 43;
	public static readonly FLOAT = 44;
	public static readonly FOR = 45;
	public static readonly FOREACH = 46;
	public static readonly FROM = 47;
	public static readonly GET = 48;
	public static readonly GOTO = 49;
	public static readonly GROUP = 50;
	public static readonly IF = 51;
	public static readonly IMPLICIT = 52;
	public static readonly IN = 53;
	public static readonly INT = 54;
	public static readonly INTERFACE = 55;
	public static readonly INTERNAL = 56;
	public static readonly INTO = 57;
	public static readonly IS = 58;
	public static readonly JOIN = 59;
	public static readonly LET = 60;
	public static readonly LOCK = 61;
	public static readonly LONG = 62;
	public static readonly NAMEOF = 63;
	public static readonly NAMESPACE = 64;
	public static readonly NEW = 65;
	public static readonly NULL = 66;
	public static readonly OBJECT = 67;
	public static readonly ON = 68;
	public static readonly OPERATOR = 69;
	public static readonly ORDERBY = 70;
	public static readonly OUT = 71;
	public static readonly OVERRIDE = 72;
	public static readonly PARAMS = 73;
	public static readonly PARTIAL = 74;
	public static readonly PRIVATE = 75;
	public static readonly PROTECTED = 76;
	public static readonly PUBLIC = 77;
	public static readonly READONLY = 78;
	public static readonly REF = 79;
	public static readonly REMOVE = 80;
	public static readonly RETURN = 81;
	public static readonly SBYTE = 82;
	public static readonly SEALED = 83;
	public static readonly SELECT = 84;
	public static readonly SET = 85;
	public static readonly SHORT = 86;
	public static readonly SIZEOF = 87;
	public static readonly STACKALLOC = 88;
	public static readonly STATIC = 89;
	public static readonly STRING = 90;
	public static readonly STRUCT = 91;
	public static readonly SWITCH = 92;
	public static readonly THIS = 93;
	public static readonly THROW = 94;
	public static readonly TRUE = 95;
	public static readonly TRY = 96;
	public static readonly TYPEOF = 97;
	public static readonly UINT = 98;
	public static readonly ULONG = 99;
	public static readonly UNCHECKED = 100;
	public static readonly UNSAFE = 101;
	public static readonly USHORT = 102;
	public static readonly USING = 103;
	public static readonly VAR = 104;
	public static readonly VIRTUAL = 105;
	public static readonly VOID = 106;
	public static readonly VOLATILE = 107;
	public static readonly WHEN = 108;
	public static readonly WHERE = 109;
	public static readonly WHILE = 110;
	public static readonly YIELD = 111;
	public static readonly IDENTIFIER = 112;
	public static readonly LITERAL_ACCESS = 113;
	public static readonly INTEGER_LITERAL = 114;
	public static readonly HEX_INTEGER_LITERAL = 115;
	public static readonly REAL_LITERAL = 116;
	public static readonly CHARACTER_LITERAL = 117;
	public static readonly REGULAR_STRING = 118;
	public static readonly VERBATIUM_STRING = 119;
	public static readonly INTERPOLATED_REGULAR_STRING_START = 120;
	public static readonly INTERPOLATED_VERBATIUM_STRING_START = 121;
	public static readonly OPEN_BRACE = 122;
	public static readonly CLOSE_BRACE = 123;
	public static readonly OPEN_BRACKET = 124;
	public static readonly CLOSE_BRACKET = 125;
	public static readonly OPEN_PARENS = 126;
	public static readonly CLOSE_PARENS = 127;
	public static readonly DOT = 128;
	public static readonly COMMA = 129;
	public static readonly COLON = 130;
	public static readonly SEMICOLON = 131;
	public static readonly PLUS = 132;
	public static readonly MINUS = 133;
	public static readonly STAR = 134;
	public static readonly DIV = 135;
	public static readonly PERCENT = 136;
	public static readonly AMP = 137;
	public static readonly BITWISE_OR = 138;
	public static readonly CARET = 139;
	public static readonly BANG = 140;
	public static readonly TILDE = 141;
	public static readonly ASSIGNMENT = 142;
	public static readonly LT = 143;
	public static readonly GT = 144;
	public static readonly INTERR = 145;
	public static readonly DOUBLE_COLON = 146;
	public static readonly OP_COALESCING = 147;
	public static readonly OP_INC = 148;
	public static readonly OP_DEC = 149;
	public static readonly OP_AND = 150;
	public static readonly OP_OR = 151;
	public static readonly OP_PTR = 152;
	public static readonly OP_EQ = 153;
	public static readonly OP_NE = 154;
	public static readonly OP_LE = 155;
	public static readonly OP_GE = 156;
	public static readonly OP_ADD_ASSIGNMENT = 157;
	public static readonly OP_SUB_ASSIGNMENT = 158;
	public static readonly OP_MULT_ASSIGNMENT = 159;
	public static readonly OP_DIV_ASSIGNMENT = 160;
	public static readonly OP_MOD_ASSIGNMENT = 161;
	public static readonly OP_AND_ASSIGNMENT = 162;
	public static readonly OP_OR_ASSIGNMENT = 163;
	public static readonly OP_XOR_ASSIGNMENT = 164;
	public static readonly OP_LEFT_SHIFT = 165;
	public static readonly OP_LEFT_SHIFT_ASSIGNMENT = 166;
	public static readonly DOUBLE_CURLY_INSIDE = 167;
	public static readonly OPEN_BRACE_INSIDE = 168;
	public static readonly REGULAR_CHAR_INSIDE = 169;
	public static readonly VERBATIUM_DOUBLE_QUOTE_INSIDE = 170;
	public static readonly DOUBLE_QUOTE_INSIDE = 171;
	public static readonly REGULAR_STRING_INSIDE = 172;
	public static readonly VERBATIUM_INSIDE_STRING = 173;
	public static readonly CLOSE_BRACE_INSIDE = 174;
	public static readonly FORMAT_STRING = 175;
	public static readonly DIRECTIVE_WHITESPACES = 176;
	public static readonly DIGITS = 177;
	public static readonly DEFINE = 178;
	public static readonly UNDEF = 179;
	public static readonly ELIF = 180;
	public static readonly ENDIF = 181;
	public static readonly LINE = 182;
	public static readonly ERROR = 183;
	public static readonly WARNING = 184;
	public static readonly REGION = 185;
	public static readonly ENDREGION = 186;
	public static readonly PRAGMA = 187;
	public static readonly DIRECTIVE_HIDDEN = 188;
	public static readonly CONDITIONAL_SYMBOL = 189;
	public static readonly DIRECTIVE_NEW_LINE = 190;
	public static readonly TEXT = 191;
	public static readonly DOUBLE_CURLY_CLOSE_INSIDE = 192;
	public static readonly RULE_compilation_unit = 0;
	public static readonly RULE_namespace_or_type_name = 1;
	public static readonly RULE_type_ = 2;
	public static readonly RULE_base_type = 3;
	public static readonly RULE_simple_type = 4;
	public static readonly RULE_numeric_type = 5;
	public static readonly RULE_integral_type = 6;
	public static readonly RULE_floating_point_type = 7;
	public static readonly RULE_class_type = 8;
	public static readonly RULE_type_argument_list = 9;
	public static readonly RULE_argument_list = 10;
	public static readonly RULE_argument = 11;
	public static readonly RULE_expression = 12;
	public static readonly RULE_non_assignment_expression = 13;
	public static readonly RULE_assignment = 14;
	public static readonly RULE_assignment_operator = 15;
	public static readonly RULE_conditional_expression = 16;
	public static readonly RULE_null_coalescing_expression = 17;
	public static readonly RULE_conditional_or_expression = 18;
	public static readonly RULE_conditional_and_expression = 19;
	public static readonly RULE_inclusive_or_expression = 20;
	public static readonly RULE_exclusive_or_expression = 21;
	public static readonly RULE_and_expression = 22;
	public static readonly RULE_equality_expression = 23;
	public static readonly RULE_relational_expression = 24;
	public static readonly RULE_shift_expression = 25;
	public static readonly RULE_additive_expression = 26;
	public static readonly RULE_multiplicative_expression = 27;
	public static readonly RULE_unary_expression = 28;
	public static readonly RULE_primary_expression = 29;
	public static readonly RULE_primary_expression_start = 30;
	public static readonly RULE_member_access = 31;
	public static readonly RULE_bracket_expression = 32;
	public static readonly RULE_indexer_argument = 33;
	public static readonly RULE_predefined_type = 34;
	public static readonly RULE_expression_list = 35;
	public static readonly RULE_object_or_collection_initializer = 36;
	public static readonly RULE_object_initializer = 37;
	public static readonly RULE_member_initializer_list = 38;
	public static readonly RULE_member_initializer = 39;
	public static readonly RULE_initializer_value = 40;
	public static readonly RULE_collection_initializer = 41;
	public static readonly RULE_element_initializer = 42;
	public static readonly RULE_anonymous_object_initializer = 43;
	public static readonly RULE_member_declarator_list = 44;
	public static readonly RULE_member_declarator = 45;
	public static readonly RULE_unbound_type_name = 46;
	public static readonly RULE_generic_dimension_specifier = 47;
	public static readonly RULE_isType = 48;
	public static readonly RULE_lambda_expression = 49;
	public static readonly RULE_anonymous_function_signature = 50;
	public static readonly RULE_explicit_anonymous_function_parameter_list = 51;
	public static readonly RULE_explicit_anonymous_function_parameter = 52;
	public static readonly RULE_implicit_anonymous_function_parameter_list = 53;
	public static readonly RULE_anonymous_function_body = 54;
	public static readonly RULE_query_expression = 55;
	public static readonly RULE_from_clause = 56;
	public static readonly RULE_query_body = 57;
	public static readonly RULE_query_body_clause = 58;
	public static readonly RULE_let_clause = 59;
	public static readonly RULE_where_clause = 60;
	public static readonly RULE_combined_join_clause = 61;
	public static readonly RULE_orderby_clause = 62;
	public static readonly RULE_ordering = 63;
	public static readonly RULE_select_or_group_clause = 64;
	public static readonly RULE_query_continuation = 65;
	public static readonly RULE_statement = 66;
	public static readonly RULE_labeled_Statement = 67;
	public static readonly RULE_embedded_statement = 68;
	public static readonly RULE_simple_embedded_statement = 69;
	public static readonly RULE_block = 70;
	public static readonly RULE_local_variable_declaration = 71;
	public static readonly RULE_local_variable_type = 72;
	public static readonly RULE_local_variable_declarator = 73;
	public static readonly RULE_local_variable_initializer = 74;
	public static readonly RULE_local_constant_declaration = 75;
	public static readonly RULE_if_body = 76;
	public static readonly RULE_switch_section = 77;
	public static readonly RULE_switch_label = 78;
	public static readonly RULE_statement_list = 79;
	public static readonly RULE_for_initializer = 80;
	public static readonly RULE_for_iterator = 81;
	public static readonly RULE_catch_clauses = 82;
	public static readonly RULE_specific_catch_clause = 83;
	public static readonly RULE_general_catch_clause = 84;
	public static readonly RULE_exception_filter = 85;
	public static readonly RULE_finally_clause = 86;
	public static readonly RULE_resource_acquisition = 87;
	public static readonly RULE_namespace_declaration = 88;
	public static readonly RULE_qualified_identifier = 89;
	public static readonly RULE_namespace_body = 90;
	public static readonly RULE_extern_alias_directives = 91;
	public static readonly RULE_extern_alias_directive = 92;
	public static readonly RULE_using_directives = 93;
	public static readonly RULE_using_directive = 94;
	public static readonly RULE_namespace_member_declarations = 95;
	public static readonly RULE_namespace_member_declaration = 96;
	public static readonly RULE_type_declaration = 97;
	public static readonly RULE_qualified_alias_member = 98;
	public static readonly RULE_type_parameter_list = 99;
	public static readonly RULE_type_parameter = 100;
	public static readonly RULE_class_base = 101;
	public static readonly RULE_interface_type_list = 102;
	public static readonly RULE_type_parameter_constraints_clauses = 103;
	public static readonly RULE_type_parameter_constraints_clause = 104;
	public static readonly RULE_type_parameter_constraints = 105;
	public static readonly RULE_primary_constraint = 106;
	public static readonly RULE_secondary_constraints = 107;
	public static readonly RULE_constructor_constraint = 108;
	public static readonly RULE_class_body = 109;
	public static readonly RULE_class_member_declarations = 110;
	public static readonly RULE_class_member_declaration = 111;
	public static readonly RULE_all_member_modifiers = 112;
	public static readonly RULE_all_member_modifier = 113;
	public static readonly RULE_common_member_declaration = 114;
	public static readonly RULE_typed_member_declaration = 115;
	public static readonly RULE_constant_declarators = 116;
	public static readonly RULE_constant_declarator = 117;
	public static readonly RULE_variable_declarators = 118;
	public static readonly RULE_variable_declarator = 119;
	public static readonly RULE_variable_initializer = 120;
	public static readonly RULE_return_type = 121;
	public static readonly RULE_member_name = 122;
	public static readonly RULE_method_body = 123;
	public static readonly RULE_formal_parameter_list = 124;
	public static readonly RULE_fixed_parameters = 125;
	public static readonly RULE_fixed_parameter = 126;
	public static readonly RULE_parameter_modifier = 127;
	public static readonly RULE_parameter_array = 128;
	public static readonly RULE_accessor_declarations = 129;
	public static readonly RULE_get_accessor_declaration = 130;
	public static readonly RULE_set_accessor_declaration = 131;
	public static readonly RULE_accessor_modifier = 132;
	public static readonly RULE_accessor_body = 133;
	public static readonly RULE_event_accessor_declarations = 134;
	public static readonly RULE_add_accessor_declaration = 135;
	public static readonly RULE_remove_accessor_declaration = 136;
	public static readonly RULE_overloadable_operator = 137;
	public static readonly RULE_conversion_operator_declarator = 138;
	public static readonly RULE_constructor_initializer = 139;
	public static readonly RULE_body = 140;
	public static readonly RULE_struct_interfaces = 141;
	public static readonly RULE_struct_body = 142;
	public static readonly RULE_struct_member_declaration = 143;
	public static readonly RULE_array_type = 144;
	public static readonly RULE_rank_specifier = 145;
	public static readonly RULE_array_initializer = 146;
	public static readonly RULE_variant_type_parameter_list = 147;
	public static readonly RULE_variant_type_parameter = 148;
	public static readonly RULE_variance_annotation = 149;
	public static readonly RULE_interface_base = 150;
	public static readonly RULE_interface_body = 151;
	public static readonly RULE_interface_member_declaration = 152;
	public static readonly RULE_interface_accessors = 153;
	public static readonly RULE_enum_base = 154;
	public static readonly RULE_enum_body = 155;
	public static readonly RULE_enum_member_declaration = 156;
	public static readonly RULE_global_attribute_section = 157;
	public static readonly RULE_global_attribute_target = 158;
	public static readonly RULE_attributes = 159;
	public static readonly RULE_attribute_section = 160;
	public static readonly RULE_attribute_target = 161;
	public static readonly RULE_attribute_list = 162;
	public static readonly RULE_attribute = 163;
	public static readonly RULE_attribute_argument = 164;
	public static readonly RULE_pointer_type = 165;
	public static readonly RULE_fixed_pointer_declarators = 166;
	public static readonly RULE_fixed_pointer_declarator = 167;
	public static readonly RULE_fixed_pointer_initializer = 168;
	public static readonly RULE_fixed_size_buffer_declarator = 169;
	public static readonly RULE_local_variable_initializer_unsafe = 170;
	public static readonly RULE_right_arrow = 171;
	public static readonly RULE_right_shift = 172;
	public static readonly RULE_right_shift_assignment = 173;
	public static readonly RULE_literal = 174;
	public static readonly RULE_boolean_literal = 175;
	public static readonly RULE_string_literal = 176;
	public static readonly RULE_interpolated_regular_string = 177;
	public static readonly RULE_interpolated_verbatium_string = 178;
	public static readonly RULE_interpolated_regular_string_part = 179;
	public static readonly RULE_interpolated_verbatium_string_part = 180;
	public static readonly RULE_interpolated_string_expression = 181;
	public static readonly RULE_keyword = 182;
	public static readonly RULE_class_definition = 183;
	public static readonly RULE_struct_definition = 184;
	public static readonly RULE_interface_definition = 185;
	public static readonly RULE_enum_definition = 186;
	public static readonly RULE_delegate_definition = 187;
	public static readonly RULE_event_declaration = 188;
	public static readonly RULE_field_declaration = 189;
	public static readonly RULE_property_declaration = 190;
	public static readonly RULE_constant_declaration = 191;
	public static readonly RULE_indexer_declaration = 192;
	public static readonly RULE_destructor_definition = 193;
	public static readonly RULE_constructor_declaration = 194;
	public static readonly RULE_method_declaration = 195;
	public static readonly RULE_method_member_name = 196;
	public static readonly RULE_operator_declaration = 197;
	public static readonly RULE_arg_declaration = 198;
	public static readonly RULE_method_invocation = 199;
	public static readonly RULE_object_creation_expression = 200;
	public static readonly RULE_identifier = 201;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilation_unit", "namespace_or_type_name", "type_", "base_type", "simple_type", 
		"numeric_type", "integral_type", "floating_point_type", "class_type", 
		"type_argument_list", "argument_list", "argument", "expression", "non_assignment_expression", 
		"assignment", "assignment_operator", "conditional_expression", "null_coalescing_expression", 
		"conditional_or_expression", "conditional_and_expression", "inclusive_or_expression", 
		"exclusive_or_expression", "and_expression", "equality_expression", "relational_expression", 
		"shift_expression", "additive_expression", "multiplicative_expression", 
		"unary_expression", "primary_expression", "primary_expression_start", 
		"member_access", "bracket_expression", "indexer_argument", "predefined_type", 
		"expression_list", "object_or_collection_initializer", "object_initializer", 
		"member_initializer_list", "member_initializer", "initializer_value", 
		"collection_initializer", "element_initializer", "anonymous_object_initializer", 
		"member_declarator_list", "member_declarator", "unbound_type_name", "generic_dimension_specifier", 
		"isType", "lambda_expression", "anonymous_function_signature", "explicit_anonymous_function_parameter_list", 
		"explicit_anonymous_function_parameter", "implicit_anonymous_function_parameter_list", 
		"anonymous_function_body", "query_expression", "from_clause", "query_body", 
		"query_body_clause", "let_clause", "where_clause", "combined_join_clause", 
		"orderby_clause", "ordering", "select_or_group_clause", "query_continuation", 
		"statement", "labeled_Statement", "embedded_statement", "simple_embedded_statement", 
		"block", "local_variable_declaration", "local_variable_type", "local_variable_declarator", 
		"local_variable_initializer", "local_constant_declaration", "if_body", 
		"switch_section", "switch_label", "statement_list", "for_initializer", 
		"for_iterator", "catch_clauses", "specific_catch_clause", "general_catch_clause", 
		"exception_filter", "finally_clause", "resource_acquisition", "namespace_declaration", 
		"qualified_identifier", "namespace_body", "extern_alias_directives", "extern_alias_directive", 
		"using_directives", "using_directive", "namespace_member_declarations", 
		"namespace_member_declaration", "type_declaration", "qualified_alias_member", 
		"type_parameter_list", "type_parameter", "class_base", "interface_type_list", 
		"type_parameter_constraints_clauses", "type_parameter_constraints_clause", 
		"type_parameter_constraints", "primary_constraint", "secondary_constraints", 
		"constructor_constraint", "class_body", "class_member_declarations", "class_member_declaration", 
		"all_member_modifiers", "all_member_modifier", "common_member_declaration", 
		"typed_member_declaration", "constant_declarators", "constant_declarator", 
		"variable_declarators", "variable_declarator", "variable_initializer", 
		"return_type", "member_name", "method_body", "formal_parameter_list", 
		"fixed_parameters", "fixed_parameter", "parameter_modifier", "parameter_array", 
		"accessor_declarations", "get_accessor_declaration", "set_accessor_declaration", 
		"accessor_modifier", "accessor_body", "event_accessor_declarations", "add_accessor_declaration", 
		"remove_accessor_declaration", "overloadable_operator", "conversion_operator_declarator", 
		"constructor_initializer", "body", "struct_interfaces", "struct_body", 
		"struct_member_declaration", "array_type", "rank_specifier", "array_initializer", 
		"variant_type_parameter_list", "variant_type_parameter", "variance_annotation", 
		"interface_base", "interface_body", "interface_member_declaration", "interface_accessors", 
		"enum_base", "enum_body", "enum_member_declaration", "global_attribute_section", 
		"global_attribute_target", "attributes", "attribute_section", "attribute_target", 
		"attribute_list", "attribute", "attribute_argument", "pointer_type", "fixed_pointer_declarators", 
		"fixed_pointer_declarator", "fixed_pointer_initializer", "fixed_size_buffer_declarator", 
		"local_variable_initializer_unsafe", "right_arrow", "right_shift", "right_shift_assignment", 
		"literal", "boolean_literal", "string_literal", "interpolated_regular_string", 
		"interpolated_verbatium_string", "interpolated_regular_string_part", "interpolated_verbatium_string_part", 
		"interpolated_string_expression", "keyword", "class_definition", "struct_definition", 
		"interface_definition", "enum_definition", "delegate_definition", "event_declaration", 
		"field_declaration", "property_declaration", "constant_declaration", "indexer_declaration", 
		"destructor_definition", "constructor_declaration", "method_declaration", 
		"method_member_name", "operator_declaration", "arg_declaration", "method_invocation", 
		"object_creation_expression", "identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\u00EFu00BB\u00BF'", undefined, undefined, undefined, undefined, 
		undefined, "'#'", "'abstract'", "'add'", "'alias'", "'__arglist'", "'as'", 
		"'ascending'", "'async'", "'await'", "'base'", "'bool'", "'break'", "'by'", 
		"'byte'", "'case'", "'catch'", "'char'", "'checked'", "'class'", "'const'", 
		"'continue'", "'decimal'", "'default'", "'delegate'", "'descending'", 
		"'do'", "'double'", "'dynamic'", "'else'", "'enum'", "'equals'", "'event'", 
		"'explicit'", "'extern'", "'false'", "'finally'", "'fixed'", "'float'", 
		"'for'", "'foreach'", "'from'", "'get'", "'goto'", "'group'", "'if'", 
		"'implicit'", "'in'", "'int'", "'interface'", "'internal'", "'into'", 
		"'is'", "'join'", "'let'", "'lock'", "'long'", "'nameof'", "'namespace'", 
		"'new'", "'null'", "'object'", "'on'", "'operator'", "'orderby'", "'out'", 
		"'override'", "'params'", "'partial'", "'private'", "'protected'", "'public'", 
		"'readonly'", "'ref'", "'remove'", "'return'", "'sbyte'", "'sealed'", 
		"'select'", "'set'", "'short'", "'sizeof'", "'stackalloc'", "'static'", 
		"'string'", "'struct'", "'switch'", "'this'", "'throw'", "'true'", "'try'", 
		"'typeof'", "'uint'", "'ulong'", "'unchecked'", "'unsafe'", "'ushort'", 
		"'using'", "'var'", "'virtual'", "'void'", "'volatile'", "'when'", "'where'", 
		"'while'", "'yield'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'{'", "'}'", "'['", 
		"']'", "'('", "')'", "'.'", "','", "':'", "';'", "'+'", "'-'", "'*'", 
		"'/'", "'%'", "'&'", "'|'", "'^'", "'!'", "'~'", "'='", "'<'", "'>'", 
		"'?'", "'::'", "'??'", "'++'", "'--'", "'&&'", "'||'", "'->'", "'=='", 
		"'!='", "'<='", "'>='", "'+='", "'-='", "'*='", "'/='", "'%='", "'&='", 
		"'|='", "'^='", "'<<'", "'<<='", "'{{'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'define'", "'undef'", "'elif'", "'endif'", "'line'", undefined, undefined, 
		undefined, undefined, undefined, "'hidden'", undefined, undefined, undefined, 
		"'}}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BYTE_ORDER_MARK", "SINGLE_LINE_DOC_COMMENT", "DELIMITED_DOC_COMMENT", 
		"SINGLE_LINE_COMMENT", "DELIMITED_COMMENT", "WHITESPACES", "SHARP", "ABSTRACT", 
		"ADD", "ALIAS", "ARGLIST", "AS", "ASCENDING", "ASYNC", "AWAIT", "BASE", 
		"BOOL", "BREAK", "BY", "BYTE", "CASE", "CATCH", "CHAR", "CHECKED", "CLASS", 
		"CONST", "CONTINUE", "DECIMAL", "DEFAULT", "DELEGATE", "DESCENDING", "DO", 
		"DOUBLE", "DYNAMIC", "ELSE", "ENUM", "EQUALS", "EVENT", "EXPLICIT", "EXTERN", 
		"FALSE", "FINALLY", "FIXED", "FLOAT", "FOR", "FOREACH", "FROM", "GET", 
		"GOTO", "GROUP", "IF", "IMPLICIT", "IN", "INT", "INTERFACE", "INTERNAL", 
		"INTO", "IS", "JOIN", "LET", "LOCK", "LONG", "NAMEOF", "NAMESPACE", "NEW", 
		"NULL", "OBJECT", "ON", "OPERATOR", "ORDERBY", "OUT", "OVERRIDE", "PARAMS", 
		"PARTIAL", "PRIVATE", "PROTECTED", "PUBLIC", "READONLY", "REF", "REMOVE", 
		"RETURN", "SBYTE", "SEALED", "SELECT", "SET", "SHORT", "SIZEOF", "STACKALLOC", 
		"STATIC", "STRING", "STRUCT", "SWITCH", "THIS", "THROW", "TRUE", "TRY", 
		"TYPEOF", "UINT", "ULONG", "UNCHECKED", "UNSAFE", "USHORT", "USING", "VAR", 
		"VIRTUAL", "VOID", "VOLATILE", "WHEN", "WHERE", "WHILE", "YIELD", "IDENTIFIER", 
		"LITERAL_ACCESS", "INTEGER_LITERAL", "HEX_INTEGER_LITERAL", "REAL_LITERAL", 
		"CHARACTER_LITERAL", "REGULAR_STRING", "VERBATIUM_STRING", "INTERPOLATED_REGULAR_STRING_START", 
		"INTERPOLATED_VERBATIUM_STRING_START", "OPEN_BRACE", "CLOSE_BRACE", "OPEN_BRACKET", 
		"CLOSE_BRACKET", "OPEN_PARENS", "CLOSE_PARENS", "DOT", "COMMA", "COLON", 
		"SEMICOLON", "PLUS", "MINUS", "STAR", "DIV", "PERCENT", "AMP", "BITWISE_OR", 
		"CARET", "BANG", "TILDE", "ASSIGNMENT", "LT", "GT", "INTERR", "DOUBLE_COLON", 
		"OP_COALESCING", "OP_INC", "OP_DEC", "OP_AND", "OP_OR", "OP_PTR", "OP_EQ", 
		"OP_NE", "OP_LE", "OP_GE", "OP_ADD_ASSIGNMENT", "OP_SUB_ASSIGNMENT", "OP_MULT_ASSIGNMENT", 
		"OP_DIV_ASSIGNMENT", "OP_MOD_ASSIGNMENT", "OP_AND_ASSIGNMENT", "OP_OR_ASSIGNMENT", 
		"OP_XOR_ASSIGNMENT", "OP_LEFT_SHIFT", "OP_LEFT_SHIFT_ASSIGNMENT", "DOUBLE_CURLY_INSIDE", 
		"OPEN_BRACE_INSIDE", "REGULAR_CHAR_INSIDE", "VERBATIUM_DOUBLE_QUOTE_INSIDE", 
		"DOUBLE_QUOTE_INSIDE", "REGULAR_STRING_INSIDE", "VERBATIUM_INSIDE_STRING", 
		"CLOSE_BRACE_INSIDE", "FORMAT_STRING", "DIRECTIVE_WHITESPACES", "DIGITS", 
		"DEFINE", "UNDEF", "ELIF", "ENDIF", "LINE", "ERROR", "WARNING", "REGION", 
		"ENDREGION", "PRAGMA", "DIRECTIVE_HIDDEN", "CONDITIONAL_SYMBOL", "DIRECTIVE_NEW_LINE", 
		"TEXT", "DOUBLE_CURLY_CLOSE_INSIDE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CSharpParser._LITERAL_NAMES, CSharpParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CSharpParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CSharpParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CSharpParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CSharpParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CSharpParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilation_unit(): Compilation_unitContext {
		let _localctx: Compilation_unitContext = new Compilation_unitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CSharpParser.RULE_compilation_unit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.BYTE_ORDER_MARK) {
				{
				this.state = 404;
				this.match(CSharpParser.BYTE_ORDER_MARK);
				}
			}

			this.state = 408;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 407;
				this.extern_alias_directives();
				}
				break;
			}
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.USING) {
				{
				this.state = 410;
				this.using_directives();
				}
			}

			this.state = 416;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 413;
					this.global_attribute_section();
					}
					}
				}
				this.state = 418;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ABSTRACT) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.CLASS) | (1 << CSharpParser.DELEGATE))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (CSharpParser.ENUM - 36)) | (1 << (CSharpParser.EXTERN - 36)) | (1 << (CSharpParser.INTERFACE - 36)) | (1 << (CSharpParser.INTERNAL - 36)) | (1 << (CSharpParser.NAMESPACE - 36)) | (1 << (CSharpParser.NEW - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CSharpParser.OVERRIDE - 72)) | (1 << (CSharpParser.PARTIAL - 72)) | (1 << (CSharpParser.PRIVATE - 72)) | (1 << (CSharpParser.PROTECTED - 72)) | (1 << (CSharpParser.PUBLIC - 72)) | (1 << (CSharpParser.READONLY - 72)) | (1 << (CSharpParser.SEALED - 72)) | (1 << (CSharpParser.STATIC - 72)) | (1 << (CSharpParser.STRUCT - 72)) | (1 << (CSharpParser.UNSAFE - 72)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CSharpParser.VIRTUAL - 105)) | (1 << (CSharpParser.VOLATILE - 105)) | (1 << (CSharpParser.OPEN_BRACKET - 105)))) !== 0)) {
				{
				this.state = 419;
				this.namespace_member_declarations();
				}
			}

			this.state = 422;
			this.match(CSharpParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespace_or_type_name(): Namespace_or_type_nameContext {
		let _localctx: Namespace_or_type_nameContext = new Namespace_or_type_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CSharpParser.RULE_namespace_or_type_name);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 424;
				this.identifier();
				this.state = 426;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 425;
					this.type_argument_list();
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 428;
				this.qualified_alias_member();
				}
				break;
			}
			this.state = 438;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 431;
					this.match(CSharpParser.DOT);
					this.state = 432;
					this.identifier();
					this.state = 434;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						this.state = 433;
						this.type_argument_list();
						}
						break;
					}
					}
					}
				}
				this.state = 440;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 4, CSharpParser.RULE_type_);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this.base_type();
			this.state = 447;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 445;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CSharpParser.INTERR:
						{
						this.state = 442;
						this.match(CSharpParser.INTERR);
						}
						break;
					case CSharpParser.OPEN_BRACKET:
						{
						this.state = 443;
						this.rank_specifier();
						}
						break;
					case CSharpParser.STAR:
						{
						this.state = 444;
						this.match(CSharpParser.STAR);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 449;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public base_type(): Base_typeContext {
		let _localctx: Base_typeContext = new Base_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CSharpParser.RULE_base_type);
		try {
			this.state = 454;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.BOOL:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.DECIMAL:
			case CSharpParser.DOUBLE:
			case CSharpParser.FLOAT:
			case CSharpParser.INT:
			case CSharpParser.LONG:
			case CSharpParser.SBYTE:
			case CSharpParser.SHORT:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.USHORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 450;
				this.simple_type();
				}
				break;
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BY:
			case CSharpParser.DESCENDING:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.NAMEOF:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.STRING:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 451;
				this.class_type();
				}
				break;
			case CSharpParser.VOID:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 452;
				this.match(CSharpParser.VOID);
				this.state = 453;
				this.match(CSharpParser.STAR);
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
	public simple_type(): Simple_typeContext {
		let _localctx: Simple_typeContext = new Simple_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CSharpParser.RULE_simple_type);
		try {
			this.state = 458;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.DECIMAL:
			case CSharpParser.DOUBLE:
			case CSharpParser.FLOAT:
			case CSharpParser.INT:
			case CSharpParser.LONG:
			case CSharpParser.SBYTE:
			case CSharpParser.SHORT:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.USHORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 456;
				this.numeric_type();
				}
				break;
			case CSharpParser.BOOL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 457;
				this.match(CSharpParser.BOOL);
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
	public numeric_type(): Numeric_typeContext {
		let _localctx: Numeric_typeContext = new Numeric_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CSharpParser.RULE_numeric_type);
		try {
			this.state = 463;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.INT:
			case CSharpParser.LONG:
			case CSharpParser.SBYTE:
			case CSharpParser.SHORT:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.USHORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 460;
				this.integral_type();
				}
				break;
			case CSharpParser.DOUBLE:
			case CSharpParser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 461;
				this.floating_point_type();
				}
				break;
			case CSharpParser.DECIMAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 462;
				this.match(CSharpParser.DECIMAL);
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
	public integral_type(): Integral_typeContext {
		let _localctx: Integral_typeContext = new Integral_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CSharpParser.RULE_integral_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			_la = this._input.LA(1);
			if (!(_la === CSharpParser.BYTE || _la === CSharpParser.CHAR || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CSharpParser.INT - 54)) | (1 << (CSharpParser.LONG - 54)) | (1 << (CSharpParser.SBYTE - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (CSharpParser.SHORT - 86)) | (1 << (CSharpParser.UINT - 86)) | (1 << (CSharpParser.ULONG - 86)) | (1 << (CSharpParser.USHORT - 86)))) !== 0))) {
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
	public floating_point_type(): Floating_point_typeContext {
		let _localctx: Floating_point_typeContext = new Floating_point_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CSharpParser.RULE_floating_point_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			_la = this._input.LA(1);
			if (!(_la === CSharpParser.DOUBLE || _la === CSharpParser.FLOAT)) {
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
	public class_type(): Class_typeContext {
		let _localctx: Class_typeContext = new Class_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CSharpParser.RULE_class_type);
		try {
			this.state = 473;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 469;
				this.namespace_or_type_name();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 470;
				this.match(CSharpParser.OBJECT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 471;
				this.match(CSharpParser.DYNAMIC);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 472;
				this.match(CSharpParser.STRING);
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
	public type_argument_list(): Type_argument_listContext {
		let _localctx: Type_argument_listContext = new Type_argument_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CSharpParser.RULE_type_argument_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.match(CSharpParser.LT);
			this.state = 476;
			this.type_();
			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 477;
				this.match(CSharpParser.COMMA);
				this.state = 478;
				this.type_();
				}
				}
				this.state = 483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 484;
			this.match(CSharpParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument_list(): Argument_listContext {
		let _localctx: Argument_listContext = new Argument_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CSharpParser.RULE_argument_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this.argument();
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 487;
				this.match(CSharpParser.COMMA);
				this.state = 488;
				this.argument();
				}
				}
				this.state = 493;
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CSharpParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 494;
				this.identifier();
				this.state = 495;
				this.match(CSharpParser.COLON);
				}
				break;
			}
			this.state = 500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OUT || _la === CSharpParser.REF) {
				{
				this.state = 499;
				_localctx._refout = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === CSharpParser.OUT || _la === CSharpParser.REF)) {
					_localctx._refout = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 504;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 502;
				this.match(CSharpParser.VAR);
				}
				break;

			case 2:
				{
				this.state = 503;
				this.type_();
				}
				break;
			}
			this.state = 506;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CSharpParser.RULE_expression);
		try {
			this.state = 510;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 508;
				this.assignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 509;
				this.non_assignment_expression();
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
	public non_assignment_expression(): Non_assignment_expressionContext {
		let _localctx: Non_assignment_expressionContext = new Non_assignment_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CSharpParser.RULE_non_assignment_expression);
		try {
			this.state = 515;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 512;
				this.lambda_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 513;
				this.query_expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 514;
				this.conditional_expression();
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CSharpParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.unary_expression();
			this.state = 518;
			this.assignment_operator();
			this.state = 519;
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
	public assignment_operator(): Assignment_operatorContext {
		let _localctx: Assignment_operatorContext = new Assignment_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CSharpParser.RULE_assignment_operator);
		try {
			this.state = 532;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ASSIGNMENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 521;
				this.match(CSharpParser.ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_ADD_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 522;
				this.match(CSharpParser.OP_ADD_ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_SUB_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 523;
				this.match(CSharpParser.OP_SUB_ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_MULT_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 524;
				this.match(CSharpParser.OP_MULT_ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_DIV_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 525;
				this.match(CSharpParser.OP_DIV_ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_MOD_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 526;
				this.match(CSharpParser.OP_MOD_ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_AND_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 527;
				this.match(CSharpParser.OP_AND_ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_OR_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 528;
				this.match(CSharpParser.OP_OR_ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_XOR_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 529;
				this.match(CSharpParser.OP_XOR_ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_LEFT_SHIFT_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 530;
				this.match(CSharpParser.OP_LEFT_SHIFT_ASSIGNMENT);
				}
				break;
			case CSharpParser.GT:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 531;
				this.right_shift_assignment();
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
	public conditional_expression(): Conditional_expressionContext {
		let _localctx: Conditional_expressionContext = new Conditional_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CSharpParser.RULE_conditional_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.null_coalescing_expression();
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.INTERR) {
				{
				this.state = 535;
				this.match(CSharpParser.INTERR);
				this.state = 536;
				this.expression();
				this.state = 537;
				this.match(CSharpParser.COLON);
				this.state = 538;
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
	public null_coalescing_expression(): Null_coalescing_expressionContext {
		let _localctx: Null_coalescing_expressionContext = new Null_coalescing_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CSharpParser.RULE_null_coalescing_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this.conditional_or_expression();
			this.state = 545;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OP_COALESCING) {
				{
				this.state = 543;
				this.match(CSharpParser.OP_COALESCING);
				this.state = 544;
				this.null_coalescing_expression();
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
	public conditional_or_expression(): Conditional_or_expressionContext {
		let _localctx: Conditional_or_expressionContext = new Conditional_or_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CSharpParser.RULE_conditional_or_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			this.conditional_and_expression();
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.OP_OR) {
				{
				{
				this.state = 548;
				this.match(CSharpParser.OP_OR);
				this.state = 549;
				this.conditional_and_expression();
				}
				}
				this.state = 554;
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
	public conditional_and_expression(): Conditional_and_expressionContext {
		let _localctx: Conditional_and_expressionContext = new Conditional_and_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CSharpParser.RULE_conditional_and_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			this.inclusive_or_expression();
			this.state = 560;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.OP_AND) {
				{
				{
				this.state = 556;
				this.match(CSharpParser.OP_AND);
				this.state = 557;
				this.inclusive_or_expression();
				}
				}
				this.state = 562;
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
	public inclusive_or_expression(): Inclusive_or_expressionContext {
		let _localctx: Inclusive_or_expressionContext = new Inclusive_or_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CSharpParser.RULE_inclusive_or_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 563;
			this.exclusive_or_expression();
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.BITWISE_OR) {
				{
				{
				this.state = 564;
				this.match(CSharpParser.BITWISE_OR);
				this.state = 565;
				this.exclusive_or_expression();
				}
				}
				this.state = 570;
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
	public exclusive_or_expression(): Exclusive_or_expressionContext {
		let _localctx: Exclusive_or_expressionContext = new Exclusive_or_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CSharpParser.RULE_exclusive_or_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 571;
			this.and_expression();
			this.state = 576;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.CARET) {
				{
				{
				this.state = 572;
				this.match(CSharpParser.CARET);
				this.state = 573;
				this.and_expression();
				}
				}
				this.state = 578;
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
	public and_expression(): And_expressionContext {
		let _localctx: And_expressionContext = new And_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CSharpParser.RULE_and_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 579;
			this.equality_expression();
			this.state = 584;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 580;
					this.match(CSharpParser.AMP);
					this.state = 581;
					this.equality_expression();
					}
					}
				}
				this.state = 586;
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
	public equality_expression(): Equality_expressionContext {
		let _localctx: Equality_expressionContext = new Equality_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CSharpParser.RULE_equality_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			this.relational_expression();
			this.state = 592;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.OP_EQ || _la === CSharpParser.OP_NE) {
				{
				{
				this.state = 588;
				_la = this._input.LA(1);
				if (!(_la === CSharpParser.OP_EQ || _la === CSharpParser.OP_NE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 589;
				this.relational_expression();
				}
				}
				this.state = 594;
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
	public relational_expression(): Relational_expressionContext {
		let _localctx: Relational_expressionContext = new Relational_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CSharpParser.RULE_relational_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this.shift_expression();
			this.state = 604;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.AS || _la === CSharpParser.IS || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & ((1 << (CSharpParser.LT - 143)) | (1 << (CSharpParser.GT - 143)) | (1 << (CSharpParser.OP_LE - 143)) | (1 << (CSharpParser.OP_GE - 143)))) !== 0)) {
				{
				this.state = 602;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.LT:
				case CSharpParser.GT:
				case CSharpParser.OP_LE:
				case CSharpParser.OP_GE:
					{
					this.state = 596;
					_la = this._input.LA(1);
					if (!(((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & ((1 << (CSharpParser.LT - 143)) | (1 << (CSharpParser.GT - 143)) | (1 << (CSharpParser.OP_LE - 143)) | (1 << (CSharpParser.OP_GE - 143)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 597;
					this.shift_expression();
					}
					break;
				case CSharpParser.IS:
					{
					this.state = 598;
					this.match(CSharpParser.IS);
					this.state = 599;
					this.isType();
					}
					break;
				case CSharpParser.AS:
					{
					this.state = 600;
					this.match(CSharpParser.AS);
					this.state = 601;
					this.type_();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 606;
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
	public shift_expression(): Shift_expressionContext {
		let _localctx: Shift_expressionContext = new Shift_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CSharpParser.RULE_shift_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this.additive_expression();
			this.state = 615;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 610;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CSharpParser.OP_LEFT_SHIFT:
						{
						this.state = 608;
						this.match(CSharpParser.OP_LEFT_SHIFT);
						}
						break;
					case CSharpParser.GT:
						{
						this.state = 609;
						this.right_shift();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 612;
					this.additive_expression();
					}
					}
				}
				this.state = 617;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additive_expression(): Additive_expressionContext {
		let _localctx: Additive_expressionContext = new Additive_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CSharpParser.RULE_additive_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 618;
			this.multiplicative_expression();
			this.state = 623;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 619;
					_la = this._input.LA(1);
					if (!(_la === CSharpParser.PLUS || _la === CSharpParser.MINUS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 620;
					this.multiplicative_expression();
					}
					}
				}
				this.state = 625;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicative_expression(): Multiplicative_expressionContext {
		let _localctx: Multiplicative_expressionContext = new Multiplicative_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CSharpParser.RULE_multiplicative_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 626;
			this.unary_expression();
			this.state = 631;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 627;
					_la = this._input.LA(1);
					if (!(((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (CSharpParser.STAR - 134)) | (1 << (CSharpParser.DIV - 134)) | (1 << (CSharpParser.PERCENT - 134)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 628;
					this.unary_expression();
					}
					}
				}
				this.state = 633;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unary_expression(): Unary_expressionContext {
		let _localctx: Unary_expressionContext = new Unary_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CSharpParser.RULE_unary_expression);
		try {
			this.state = 658;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 634;
				this.primary_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 635;
				this.match(CSharpParser.PLUS);
				this.state = 636;
				this.unary_expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 637;
				this.match(CSharpParser.MINUS);
				this.state = 638;
				this.unary_expression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 639;
				this.match(CSharpParser.BANG);
				this.state = 640;
				this.unary_expression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 641;
				this.match(CSharpParser.TILDE);
				this.state = 642;
				this.unary_expression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 643;
				this.match(CSharpParser.OP_INC);
				this.state = 644;
				this.unary_expression();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 645;
				this.match(CSharpParser.OP_DEC);
				this.state = 646;
				this.unary_expression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 647;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 648;
				this.type_();
				this.state = 649;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 650;
				this.unary_expression();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 652;
				this.match(CSharpParser.AWAIT);
				this.state = 653;
				this.unary_expression();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 654;
				this.match(CSharpParser.AMP);
				this.state = 655;
				this.unary_expression();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 656;
				this.match(CSharpParser.STAR);
				this.state = 657;
				this.unary_expression();
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
		this.enterRule(_localctx, 58, CSharpParser.RULE_primary_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 660;
			_localctx._pe = this.primary_expression_start();
			this.state = 664;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 661;
					this.bracket_expression();
					}
					}
				}
				this.state = 666;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 683;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 673;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CSharpParser.DOT:
					case CSharpParser.INTERR:
						{
						this.state = 667;
						this.member_access();
						}
						break;
					case CSharpParser.OPEN_PARENS:
						{
						this.state = 668;
						this.method_invocation();
						}
						break;
					case CSharpParser.OP_INC:
						{
						this.state = 669;
						this.match(CSharpParser.OP_INC);
						}
						break;
					case CSharpParser.OP_DEC:
						{
						this.state = 670;
						this.match(CSharpParser.OP_DEC);
						}
						break;
					case CSharpParser.OP_PTR:
						{
						this.state = 671;
						this.match(CSharpParser.OP_PTR);
						this.state = 672;
						this.identifier();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 678;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 675;
							this.bracket_expression();
							}
							}
						}
						this.state = 680;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
					}
					}
					}
				}
				this.state = 685;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary_expression_start(): Primary_expression_startContext {
		let _localctx: Primary_expression_startContext = new Primary_expression_startContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CSharpParser.RULE_primary_expression_start);
		let _la: number;
		try {
			let _alt: number;
			this.state = 795;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				_localctx = new LiteralExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 686;
				this.literal();
				}
				break;

			case 2:
				_localctx = new SimpleNameExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 687;
				this.identifier();
				this.state = 689;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
				case 1:
					{
					this.state = 688;
					this.type_argument_list();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new ParenthesisExpressionsContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 691;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 692;
				this.expression();
				this.state = 693;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 4:
				_localctx = new MemberAccessExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 695;
				this.predefined_type();
				}
				break;

			case 5:
				_localctx = new MemberAccessExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 696;
				this.qualified_alias_member();
				}
				break;

			case 6:
				_localctx = new LiteralAccessExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 697;
				this.match(CSharpParser.LITERAL_ACCESS);
				}
				break;

			case 7:
				_localctx = new ThisReferenceExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 698;
				this.match(CSharpParser.THIS);
				}
				break;

			case 8:
				_localctx = new BaseAccessExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 699;
				this.match(CSharpParser.BASE);
				this.state = 709;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.DOT:
					{
					this.state = 700;
					this.match(CSharpParser.DOT);
					this.state = 701;
					this.identifier();
					this.state = 703;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
					case 1:
						{
						this.state = 702;
						this.type_argument_list();
						}
						break;
					}
					}
					break;
				case CSharpParser.OPEN_BRACKET:
					{
					this.state = 705;
					this.match(CSharpParser.OPEN_BRACKET);
					this.state = 706;
					this.expression_list();
					this.state = 707;
					this.match(CSharpParser.CLOSE_BRACKET);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 9:
				_localctx = new ObjectCreationExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 711;
				this.match(CSharpParser.NEW);
				this.state = 740;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.ADD:
				case CSharpParser.ALIAS:
				case CSharpParser.ARGLIST:
				case CSharpParser.ASCENDING:
				case CSharpParser.ASYNC:
				case CSharpParser.AWAIT:
				case CSharpParser.BOOL:
				case CSharpParser.BY:
				case CSharpParser.BYTE:
				case CSharpParser.CHAR:
				case CSharpParser.DECIMAL:
				case CSharpParser.DESCENDING:
				case CSharpParser.DOUBLE:
				case CSharpParser.DYNAMIC:
				case CSharpParser.EQUALS:
				case CSharpParser.FLOAT:
				case CSharpParser.FROM:
				case CSharpParser.GET:
				case CSharpParser.GROUP:
				case CSharpParser.INT:
				case CSharpParser.INTO:
				case CSharpParser.JOIN:
				case CSharpParser.LET:
				case CSharpParser.LONG:
				case CSharpParser.NAMEOF:
				case CSharpParser.OBJECT:
				case CSharpParser.ON:
				case CSharpParser.ORDERBY:
				case CSharpParser.PARTIAL:
				case CSharpParser.REMOVE:
				case CSharpParser.SBYTE:
				case CSharpParser.SELECT:
				case CSharpParser.SET:
				case CSharpParser.SHORT:
				case CSharpParser.STRING:
				case CSharpParser.UINT:
				case CSharpParser.ULONG:
				case CSharpParser.USHORT:
				case CSharpParser.VAR:
				case CSharpParser.VOID:
				case CSharpParser.WHEN:
				case CSharpParser.WHERE:
				case CSharpParser.YIELD:
				case CSharpParser.IDENTIFIER:
					{
					this.state = 712;
					this.type_();
					this.state = 734;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
					case 1:
						{
						this.state = 713;
						this.object_creation_expression();
						}
						break;

					case 2:
						{
						this.state = 714;
						this.object_or_collection_initializer();
						}
						break;

					case 3:
						{
						this.state = 715;
						this.match(CSharpParser.OPEN_BRACKET);
						this.state = 716;
						this.expression_list();
						this.state = 717;
						this.match(CSharpParser.CLOSE_BRACKET);
						this.state = 721;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 718;
								this.rank_specifier();
								}
								}
							}
							this.state = 723;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
						}
						this.state = 725;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CSharpParser.OPEN_BRACE) {
							{
							this.state = 724;
							this.array_initializer();
							}
						}

						}
						break;

					case 4:
						{
						this.state = 728;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 727;
							this.rank_specifier();
							}
							}
							this.state = 730;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === CSharpParser.OPEN_BRACKET);
						this.state = 732;
						this.array_initializer();
						}
						break;
					}
					}
					break;
				case CSharpParser.OPEN_BRACE:
					{
					this.state = 736;
					this.anonymous_object_initializer();
					}
					break;
				case CSharpParser.OPEN_BRACKET:
					{
					this.state = 737;
					this.rank_specifier();
					this.state = 738;
					this.array_initializer();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 10:
				_localctx = new TypeofExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 742;
				this.match(CSharpParser.TYPEOF);
				this.state = 743;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 747;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
				case 1:
					{
					this.state = 744;
					this.unbound_type_name();
					}
					break;

				case 2:
					{
					this.state = 745;
					this.type_();
					}
					break;

				case 3:
					{
					this.state = 746;
					this.match(CSharpParser.VOID);
					}
					break;
				}
				this.state = 749;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 11:
				_localctx = new CheckedExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 750;
				this.match(CSharpParser.CHECKED);
				this.state = 751;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 752;
				this.expression();
				this.state = 753;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 12:
				_localctx = new UncheckedExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 755;
				this.match(CSharpParser.UNCHECKED);
				this.state = 756;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 757;
				this.expression();
				this.state = 758;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 13:
				_localctx = new DefaultValueExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 760;
				this.match(CSharpParser.DEFAULT);
				this.state = 761;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 762;
				this.type_();
				this.state = 763;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 14:
				_localctx = new AnonymousMethodExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 766;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.ASYNC) {
					{
					this.state = 765;
					this.match(CSharpParser.ASYNC);
					}
				}

				this.state = 768;
				this.match(CSharpParser.DELEGATE);
				this.state = 774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.OPEN_PARENS) {
					{
					this.state = 769;
					this.match(CSharpParser.OPEN_PARENS);
					this.state = 771;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CSharpParser.OBJECT - 67)) | (1 << (CSharpParser.ON - 67)) | (1 << (CSharpParser.ORDERBY - 67)) | (1 << (CSharpParser.OUT - 67)) | (1 << (CSharpParser.PARTIAL - 67)) | (1 << (CSharpParser.REF - 67)) | (1 << (CSharpParser.REMOVE - 67)) | (1 << (CSharpParser.SBYTE - 67)) | (1 << (CSharpParser.SELECT - 67)) | (1 << (CSharpParser.SET - 67)) | (1 << (CSharpParser.SHORT - 67)) | (1 << (CSharpParser.STRING - 67)) | (1 << (CSharpParser.UINT - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)))) !== 0)) {
						{
						this.state = 770;
						this.explicit_anonymous_function_parameter_list();
						}
					}

					this.state = 773;
					this.match(CSharpParser.CLOSE_PARENS);
					}
				}

				this.state = 776;
				this.block();
				}
				break;

			case 15:
				_localctx = new SizeofExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 777;
				this.match(CSharpParser.SIZEOF);
				this.state = 778;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 779;
				this.type_();
				this.state = 780;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 16:
				_localctx = new NameofExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 782;
				this.match(CSharpParser.NAMEOF);
				this.state = 783;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 789;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 784;
						this.identifier();
						this.state = 785;
						this.match(CSharpParser.DOT);
						}
						}
					}
					this.state = 791;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				}
				this.state = 792;
				this.identifier();
				this.state = 793;
				this.match(CSharpParser.CLOSE_PARENS);
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
	public member_access(): Member_accessContext {
		let _localctx: Member_accessContext = new Member_accessContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CSharpParser.RULE_member_access);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.INTERR) {
				{
				this.state = 797;
				this.match(CSharpParser.INTERR);
				}
			}

			this.state = 800;
			this.match(CSharpParser.DOT);
			this.state = 801;
			this.identifier();
			this.state = 803;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 802;
				this.type_argument_list();
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
	public bracket_expression(): Bracket_expressionContext {
		let _localctx: Bracket_expressionContext = new Bracket_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CSharpParser.RULE_bracket_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.INTERR) {
				{
				this.state = 805;
				this.match(CSharpParser.INTERR);
				}
			}

			this.state = 808;
			this.match(CSharpParser.OPEN_BRACKET);
			this.state = 809;
			this.indexer_argument();
			this.state = 814;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 810;
				this.match(CSharpParser.COMMA);
				this.state = 811;
				this.indexer_argument();
				}
				}
				this.state = 816;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 817;
			this.match(CSharpParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexer_argument(): Indexer_argumentContext {
		let _localctx: Indexer_argumentContext = new Indexer_argumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CSharpParser.RULE_indexer_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 822;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 819;
				this.identifier();
				this.state = 820;
				this.match(CSharpParser.COLON);
				}
				break;
			}
			this.state = 824;
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
	public predefined_type(): Predefined_typeContext {
		let _localctx: Predefined_typeContext = new Predefined_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CSharpParser.RULE_predefined_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 826;
			_la = this._input.LA(1);
			if (!(((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (CSharpParser.BOOL - 17)) | (1 << (CSharpParser.BYTE - 17)) | (1 << (CSharpParser.CHAR - 17)) | (1 << (CSharpParser.DECIMAL - 17)) | (1 << (CSharpParser.DOUBLE - 17)) | (1 << (CSharpParser.FLOAT - 17)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CSharpParser.INT - 54)) | (1 << (CSharpParser.LONG - 54)) | (1 << (CSharpParser.OBJECT - 54)) | (1 << (CSharpParser.SBYTE - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (CSharpParser.SHORT - 86)) | (1 << (CSharpParser.STRING - 86)) | (1 << (CSharpParser.UINT - 86)) | (1 << (CSharpParser.ULONG - 86)) | (1 << (CSharpParser.USHORT - 86)))) !== 0))) {
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
	public expression_list(): Expression_listContext {
		let _localctx: Expression_listContext = new Expression_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CSharpParser.RULE_expression_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 828;
			this.expression();
			this.state = 833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 829;
				this.match(CSharpParser.COMMA);
				this.state = 830;
				this.expression();
				}
				}
				this.state = 835;
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
	public object_or_collection_initializer(): Object_or_collection_initializerContext {
		let _localctx: Object_or_collection_initializerContext = new Object_or_collection_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CSharpParser.RULE_object_or_collection_initializer);
		try {
			this.state = 838;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 836;
				this.object_initializer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 837;
				this.collection_initializer();
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
	public object_initializer(): Object_initializerContext {
		let _localctx: Object_initializerContext = new Object_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CSharpParser.RULE_object_initializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 840;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 845;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BY) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CSharpParser.DYNAMIC - 34)) | (1 << (CSharpParser.EQUALS - 34)) | (1 << (CSharpParser.FROM - 34)) | (1 << (CSharpParser.GET - 34)) | (1 << (CSharpParser.GROUP - 34)) | (1 << (CSharpParser.INTO - 34)) | (1 << (CSharpParser.JOIN - 34)) | (1 << (CSharpParser.LET - 34)) | (1 << (CSharpParser.NAMEOF - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (CSharpParser.ON - 68)) | (1 << (CSharpParser.ORDERBY - 68)) | (1 << (CSharpParser.PARTIAL - 68)) | (1 << (CSharpParser.REMOVE - 68)) | (1 << (CSharpParser.SELECT - 68)) | (1 << (CSharpParser.SET - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (CSharpParser.VAR - 104)) | (1 << (CSharpParser.WHEN - 104)) | (1 << (CSharpParser.WHERE - 104)) | (1 << (CSharpParser.YIELD - 104)) | (1 << (CSharpParser.IDENTIFIER - 104)) | (1 << (CSharpParser.OPEN_BRACKET - 104)))) !== 0)) {
				{
				this.state = 841;
				this.member_initializer_list();
				this.state = 843;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.COMMA) {
					{
					this.state = 842;
					this.match(CSharpParser.COMMA);
					}
				}

				}
			}

			this.state = 847;
			this.match(CSharpParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public member_initializer_list(): Member_initializer_listContext {
		let _localctx: Member_initializer_listContext = new Member_initializer_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CSharpParser.RULE_member_initializer_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 849;
			this.member_initializer();
			this.state = 854;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 850;
					this.match(CSharpParser.COMMA);
					this.state = 851;
					this.member_initializer();
					}
					}
				}
				this.state = 856;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public member_initializer(): Member_initializerContext {
		let _localctx: Member_initializerContext = new Member_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CSharpParser.RULE_member_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 862;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BY:
			case CSharpParser.DESCENDING:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.NAMEOF:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
				{
				this.state = 857;
				this.identifier();
				}
				break;
			case CSharpParser.OPEN_BRACKET:
				{
				this.state = 858;
				this.match(CSharpParser.OPEN_BRACKET);
				this.state = 859;
				this.expression();
				this.state = 860;
				this.match(CSharpParser.CLOSE_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 864;
			this.match(CSharpParser.ASSIGNMENT);
			this.state = 865;
			this.initializer_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializer_value(): Initializer_valueContext {
		let _localctx: Initializer_valueContext = new Initializer_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CSharpParser.RULE_initializer_value);
		try {
			this.state = 869;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 867;
				this.expression();
				}
				break;
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 868;
				this.object_or_collection_initializer();
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
	public collection_initializer(): Collection_initializerContext {
		let _localctx: Collection_initializerContext = new Collection_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CSharpParser.RULE_collection_initializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 871;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 872;
			this.element_initializer();
			this.state = 877;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 873;
					this.match(CSharpParser.COMMA);
					this.state = 874;
					this.element_initializer();
					}
					}
				}
				this.state = 879;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			}
			this.state = 881;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COMMA) {
				{
				this.state = 880;
				this.match(CSharpParser.COMMA);
				}
			}

			this.state = 883;
			this.match(CSharpParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element_initializer(): Element_initializerContext {
		let _localctx: Element_initializerContext = new Element_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CSharpParser.RULE_element_initializer);
		try {
			this.state = 890;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 885;
				this.non_assignment_expression();
				}
				break;
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 886;
				this.match(CSharpParser.OPEN_BRACE);
				this.state = 887;
				this.expression_list();
				this.state = 888;
				this.match(CSharpParser.CLOSE_BRACE);
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
	public anonymous_object_initializer(): Anonymous_object_initializerContext {
		let _localctx: Anonymous_object_initializerContext = new Anonymous_object_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CSharpParser.RULE_anonymous_object_initializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 892;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 897;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FALSE - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.NULL - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.SIZEOF - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.THIS - 65)) | (1 << (CSharpParser.TRUE - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CSharpParser.TYPEOF - 97)) | (1 << (CSharpParser.UINT - 97)) | (1 << (CSharpParser.ULONG - 97)) | (1 << (CSharpParser.UNCHECKED - 97)) | (1 << (CSharpParser.USHORT - 97)) | (1 << (CSharpParser.VAR - 97)) | (1 << (CSharpParser.WHEN - 97)) | (1 << (CSharpParser.WHERE - 97)) | (1 << (CSharpParser.YIELD - 97)) | (1 << (CSharpParser.IDENTIFIER - 97)) | (1 << (CSharpParser.LITERAL_ACCESS - 97)) | (1 << (CSharpParser.INTEGER_LITERAL - 97)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 97)) | (1 << (CSharpParser.REAL_LITERAL - 97)) | (1 << (CSharpParser.CHARACTER_LITERAL - 97)) | (1 << (CSharpParser.REGULAR_STRING - 97)) | (1 << (CSharpParser.VERBATIUM_STRING - 97)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 97)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 97)) | (1 << (CSharpParser.OPEN_PARENS - 97)))) !== 0)) {
				{
				this.state = 893;
				this.member_declarator_list();
				this.state = 895;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.COMMA) {
					{
					this.state = 894;
					this.match(CSharpParser.COMMA);
					}
				}

				}
			}

			this.state = 899;
			this.match(CSharpParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public member_declarator_list(): Member_declarator_listContext {
		let _localctx: Member_declarator_listContext = new Member_declarator_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CSharpParser.RULE_member_declarator_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 901;
			this.member_declarator();
			this.state = 906;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 902;
					this.match(CSharpParser.COMMA);
					this.state = 903;
					this.member_declarator();
					}
					}
				}
				this.state = 908;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public member_declarator(): Member_declaratorContext {
		let _localctx: Member_declaratorContext = new Member_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CSharpParser.RULE_member_declarator);
		try {
			this.state = 914;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 909;
				this.primary_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 910;
				this.identifier();
				this.state = 911;
				this.match(CSharpParser.ASSIGNMENT);
				this.state = 912;
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
	public unbound_type_name(): Unbound_type_nameContext {
		let _localctx: Unbound_type_nameContext = new Unbound_type_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CSharpParser.RULE_unbound_type_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 916;
			this.identifier();
			this.state = 925;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.CLOSE_PARENS:
			case CSharpParser.DOT:
			case CSharpParser.LT:
				{
				this.state = 918;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.LT) {
					{
					this.state = 917;
					this.generic_dimension_specifier();
					}
				}

				}
				break;
			case CSharpParser.DOUBLE_COLON:
				{
				this.state = 920;
				this.match(CSharpParser.DOUBLE_COLON);
				this.state = 921;
				this.identifier();
				this.state = 923;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.LT) {
					{
					this.state = 922;
					this.generic_dimension_specifier();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 934;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.DOT) {
				{
				{
				this.state = 927;
				this.match(CSharpParser.DOT);
				this.state = 928;
				this.identifier();
				this.state = 930;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.LT) {
					{
					this.state = 929;
					this.generic_dimension_specifier();
					}
				}

				}
				}
				this.state = 936;
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
	public generic_dimension_specifier(): Generic_dimension_specifierContext {
		let _localctx: Generic_dimension_specifierContext = new Generic_dimension_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CSharpParser.RULE_generic_dimension_specifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 937;
			this.match(CSharpParser.LT);
			this.state = 941;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 938;
				this.match(CSharpParser.COMMA);
				}
				}
				this.state = 943;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 944;
			this.match(CSharpParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public isType(): IsTypeContext {
		let _localctx: IsTypeContext = new IsTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CSharpParser.RULE_isType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 946;
			this.base_type();
			this.state = 951;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 949;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CSharpParser.OPEN_BRACKET:
						{
						this.state = 947;
						this.rank_specifier();
						}
						break;
					case CSharpParser.STAR:
						{
						this.state = 948;
						this.match(CSharpParser.STAR);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 953;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			}
			this.state = 955;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 954;
				this.match(CSharpParser.INTERR);
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
	public lambda_expression(): Lambda_expressionContext {
		let _localctx: Lambda_expressionContext = new Lambda_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CSharpParser.RULE_lambda_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 958;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 957;
				this.match(CSharpParser.ASYNC);
				}
				break;
			}
			this.state = 960;
			this.anonymous_function_signature();
			this.state = 961;
			this.right_arrow();
			this.state = 962;
			this.anonymous_function_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anonymous_function_signature(): Anonymous_function_signatureContext {
		let _localctx: Anonymous_function_signatureContext = new Anonymous_function_signatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CSharpParser.RULE_anonymous_function_signature);
		try {
			this.state = 975;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 964;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 965;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 966;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 967;
				this.explicit_anonymous_function_parameter_list();
				this.state = 968;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 970;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 971;
				this.implicit_anonymous_function_parameter_list();
				this.state = 972;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 974;
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
	public explicit_anonymous_function_parameter_list(): Explicit_anonymous_function_parameter_listContext {
		let _localctx: Explicit_anonymous_function_parameter_listContext = new Explicit_anonymous_function_parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CSharpParser.RULE_explicit_anonymous_function_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 977;
			this.explicit_anonymous_function_parameter();
			this.state = 982;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 978;
				this.match(CSharpParser.COMMA);
				this.state = 979;
				this.explicit_anonymous_function_parameter();
				}
				}
				this.state = 984;
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
	public explicit_anonymous_function_parameter(): Explicit_anonymous_function_parameterContext {
		let _localctx: Explicit_anonymous_function_parameterContext = new Explicit_anonymous_function_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CSharpParser.RULE_explicit_anonymous_function_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 986;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OUT || _la === CSharpParser.REF) {
				{
				this.state = 985;
				_localctx._refout = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === CSharpParser.OUT || _la === CSharpParser.REF)) {
					_localctx._refout = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 988;
			this.type_();
			this.state = 989;
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
	public implicit_anonymous_function_parameter_list(): Implicit_anonymous_function_parameter_listContext {
		let _localctx: Implicit_anonymous_function_parameter_listContext = new Implicit_anonymous_function_parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CSharpParser.RULE_implicit_anonymous_function_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 991;
			this.identifier();
			this.state = 996;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 992;
				this.match(CSharpParser.COMMA);
				this.state = 993;
				this.identifier();
				}
				}
				this.state = 998;
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
	public anonymous_function_body(): Anonymous_function_bodyContext {
		let _localctx: Anonymous_function_bodyContext = new Anonymous_function_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CSharpParser.RULE_anonymous_function_body);
		try {
			this.state = 1001;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 999;
				this.expression();
				}
				break;
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1000;
				this.block();
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
	public query_expression(): Query_expressionContext {
		let _localctx: Query_expressionContext = new Query_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CSharpParser.RULE_query_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1003;
			this.from_clause();
			this.state = 1004;
			this.query_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public from_clause(): From_clauseContext {
		let _localctx: From_clauseContext = new From_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CSharpParser.RULE_from_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1006;
			this.match(CSharpParser.FROM);
			this.state = 1008;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 1007;
				this.type_();
				}
				break;
			}
			this.state = 1010;
			this.identifier();
			this.state = 1011;
			this.match(CSharpParser.IN);
			this.state = 1012;
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
	public query_body(): Query_bodyContext {
		let _localctx: Query_bodyContext = new Query_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CSharpParser.RULE_query_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1017;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (CSharpParser.FROM - 47)) | (1 << (CSharpParser.JOIN - 47)) | (1 << (CSharpParser.LET - 47)) | (1 << (CSharpParser.ORDERBY - 47)))) !== 0) || _la === CSharpParser.WHERE) {
				{
				{
				this.state = 1014;
				this.query_body_clause();
				}
				}
				this.state = 1019;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1020;
			this.select_or_group_clause();
			this.state = 1022;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 1021;
				this.query_continuation();
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
	public query_body_clause(): Query_body_clauseContext {
		let _localctx: Query_body_clauseContext = new Query_body_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CSharpParser.RULE_query_body_clause);
		try {
			this.state = 1029;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.FROM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1024;
				this.from_clause();
				}
				break;
			case CSharpParser.LET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1025;
				this.let_clause();
				}
				break;
			case CSharpParser.WHERE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1026;
				this.where_clause();
				}
				break;
			case CSharpParser.JOIN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1027;
				this.combined_join_clause();
				}
				break;
			case CSharpParser.ORDERBY:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1028;
				this.orderby_clause();
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
	public let_clause(): Let_clauseContext {
		let _localctx: Let_clauseContext = new Let_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CSharpParser.RULE_let_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1031;
			this.match(CSharpParser.LET);
			this.state = 1032;
			this.identifier();
			this.state = 1033;
			this.match(CSharpParser.ASSIGNMENT);
			this.state = 1034;
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
	public where_clause(): Where_clauseContext {
		let _localctx: Where_clauseContext = new Where_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CSharpParser.RULE_where_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1036;
			this.match(CSharpParser.WHERE);
			this.state = 1037;
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
	public combined_join_clause(): Combined_join_clauseContext {
		let _localctx: Combined_join_clauseContext = new Combined_join_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CSharpParser.RULE_combined_join_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1039;
			this.match(CSharpParser.JOIN);
			this.state = 1041;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				{
				this.state = 1040;
				this.type_();
				}
				break;
			}
			this.state = 1043;
			this.identifier();
			this.state = 1044;
			this.match(CSharpParser.IN);
			this.state = 1045;
			this.expression();
			this.state = 1046;
			this.match(CSharpParser.ON);
			this.state = 1047;
			this.expression();
			this.state = 1048;
			this.match(CSharpParser.EQUALS);
			this.state = 1049;
			this.expression();
			this.state = 1052;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.INTO) {
				{
				this.state = 1050;
				this.match(CSharpParser.INTO);
				this.state = 1051;
				this.identifier();
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
	public orderby_clause(): Orderby_clauseContext {
		let _localctx: Orderby_clauseContext = new Orderby_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CSharpParser.RULE_orderby_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1054;
			this.match(CSharpParser.ORDERBY);
			this.state = 1055;
			this.ordering();
			this.state = 1060;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1056;
				this.match(CSharpParser.COMMA);
				this.state = 1057;
				this.ordering();
				}
				}
				this.state = 1062;
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
	public ordering(): OrderingContext {
		let _localctx: OrderingContext = new OrderingContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CSharpParser.RULE_ordering);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1063;
			this.expression();
			this.state = 1065;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.ASCENDING || _la === CSharpParser.DESCENDING) {
				{
				this.state = 1064;
				_localctx._dir = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === CSharpParser.ASCENDING || _la === CSharpParser.DESCENDING)) {
					_localctx._dir = this._errHandler.recoverInline(this);
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
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public select_or_group_clause(): Select_or_group_clauseContext {
		let _localctx: Select_or_group_clauseContext = new Select_or_group_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CSharpParser.RULE_select_or_group_clause);
		try {
			this.state = 1074;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.SELECT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1067;
				this.match(CSharpParser.SELECT);
				this.state = 1068;
				this.expression();
				}
				break;
			case CSharpParser.GROUP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1069;
				this.match(CSharpParser.GROUP);
				this.state = 1070;
				this.expression();
				this.state = 1071;
				this.match(CSharpParser.BY);
				this.state = 1072;
				this.expression();
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
	public query_continuation(): Query_continuationContext {
		let _localctx: Query_continuationContext = new Query_continuationContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CSharpParser.RULE_query_continuation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1076;
			this.match(CSharpParser.INTO);
			this.state = 1077;
			this.identifier();
			this.state = 1078;
			this.query_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 132, CSharpParser.RULE_statement);
		try {
			this.state = 1088;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				_localctx = new LabeledStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1080;
				this.labeled_Statement();
				}
				break;

			case 2:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1083;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.ADD:
				case CSharpParser.ALIAS:
				case CSharpParser.ARGLIST:
				case CSharpParser.ASCENDING:
				case CSharpParser.ASYNC:
				case CSharpParser.AWAIT:
				case CSharpParser.BOOL:
				case CSharpParser.BY:
				case CSharpParser.BYTE:
				case CSharpParser.CHAR:
				case CSharpParser.DECIMAL:
				case CSharpParser.DESCENDING:
				case CSharpParser.DOUBLE:
				case CSharpParser.DYNAMIC:
				case CSharpParser.EQUALS:
				case CSharpParser.FLOAT:
				case CSharpParser.FROM:
				case CSharpParser.GET:
				case CSharpParser.GROUP:
				case CSharpParser.INT:
				case CSharpParser.INTO:
				case CSharpParser.JOIN:
				case CSharpParser.LET:
				case CSharpParser.LONG:
				case CSharpParser.NAMEOF:
				case CSharpParser.OBJECT:
				case CSharpParser.ON:
				case CSharpParser.ORDERBY:
				case CSharpParser.PARTIAL:
				case CSharpParser.REMOVE:
				case CSharpParser.SBYTE:
				case CSharpParser.SELECT:
				case CSharpParser.SET:
				case CSharpParser.SHORT:
				case CSharpParser.STRING:
				case CSharpParser.UINT:
				case CSharpParser.ULONG:
				case CSharpParser.USHORT:
				case CSharpParser.VAR:
				case CSharpParser.VOID:
				case CSharpParser.WHEN:
				case CSharpParser.WHERE:
				case CSharpParser.YIELD:
				case CSharpParser.IDENTIFIER:
					{
					this.state = 1081;
					this.local_variable_declaration();
					}
					break;
				case CSharpParser.CONST:
					{
					this.state = 1082;
					this.local_constant_declaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1085;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 3:
				_localctx = new EmbeddedStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1087;
				this.embedded_statement();
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
	public labeled_Statement(): Labeled_StatementContext {
		let _localctx: Labeled_StatementContext = new Labeled_StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CSharpParser.RULE_labeled_Statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1090;
			this.identifier();
			this.state = 1091;
			this.match(CSharpParser.COLON);
			this.state = 1092;
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
	public embedded_statement(): Embedded_statementContext {
		let _localctx: Embedded_statementContext = new Embedded_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CSharpParser.RULE_embedded_statement);
		try {
			this.state = 1096;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1094;
				this.block();
				}
				break;
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BREAK:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.CONTINUE:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DO:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FIXED:
			case CSharpParser.FLOAT:
			case CSharpParser.FOR:
			case CSharpParser.FOREACH:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GOTO:
			case CSharpParser.GROUP:
			case CSharpParser.IF:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LOCK:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.RETURN:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.SWITCH:
			case CSharpParser.THIS:
			case CSharpParser.THROW:
			case CSharpParser.TRUE:
			case CSharpParser.TRY:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.UNSAFE:
			case CSharpParser.USHORT:
			case CSharpParser.USING:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.WHILE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.SEMICOLON:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1095;
				this.simple_embedded_statement();
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
	public simple_embedded_statement(): Simple_embedded_statementContext {
		let _localctx: Simple_embedded_statementContext = new Simple_embedded_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CSharpParser.RULE_simple_embedded_statement);
		let _la: number;
		try {
			this.state = 1225;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				_localctx = new TheEmptyStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1098;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 2:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1099;
				this.expression();
				this.state = 1100;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 3:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1102;
				this.match(CSharpParser.IF);
				this.state = 1103;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1104;
				this.expression();
				this.state = 1105;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1106;
				this.if_body();
				this.state = 1109;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 1107;
					this.match(CSharpParser.ELSE);
					this.state = 1108;
					this.if_body();
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new SwitchStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1111;
				this.match(CSharpParser.SWITCH);
				this.state = 1112;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1113;
				this.expression();
				this.state = 1114;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1115;
				this.match(CSharpParser.OPEN_BRACE);
				this.state = 1119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CSharpParser.CASE || _la === CSharpParser.DEFAULT) {
					{
					{
					this.state = 1116;
					this.switch_section();
					}
					}
					this.state = 1121;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1122;
				this.match(CSharpParser.CLOSE_BRACE);
				}
				break;

			case 5:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1124;
				this.match(CSharpParser.WHILE);
				this.state = 1125;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1126;
				this.expression();
				this.state = 1127;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1128;
				this.embedded_statement();
				}
				break;

			case 6:
				_localctx = new DoStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1130;
				this.match(CSharpParser.DO);
				this.state = 1131;
				this.embedded_statement();
				this.state = 1132;
				this.match(CSharpParser.WHILE);
				this.state = 1133;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1134;
				this.expression();
				this.state = 1135;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1136;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 7:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1138;
				this.match(CSharpParser.FOR);
				this.state = 1139;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FALSE - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.NULL - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.SIZEOF - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.THIS - 65)) | (1 << (CSharpParser.TRUE - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CSharpParser.TYPEOF - 97)) | (1 << (CSharpParser.UINT - 97)) | (1 << (CSharpParser.ULONG - 97)) | (1 << (CSharpParser.UNCHECKED - 97)) | (1 << (CSharpParser.USHORT - 97)) | (1 << (CSharpParser.VAR - 97)) | (1 << (CSharpParser.VOID - 97)) | (1 << (CSharpParser.WHEN - 97)) | (1 << (CSharpParser.WHERE - 97)) | (1 << (CSharpParser.YIELD - 97)) | (1 << (CSharpParser.IDENTIFIER - 97)) | (1 << (CSharpParser.LITERAL_ACCESS - 97)) | (1 << (CSharpParser.INTEGER_LITERAL - 97)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 97)) | (1 << (CSharpParser.REAL_LITERAL - 97)) | (1 << (CSharpParser.CHARACTER_LITERAL - 97)) | (1 << (CSharpParser.REGULAR_STRING - 97)) | (1 << (CSharpParser.VERBATIUM_STRING - 97)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 97)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 97)) | (1 << (CSharpParser.OPEN_PARENS - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (CSharpParser.PLUS - 132)) | (1 << (CSharpParser.MINUS - 132)) | (1 << (CSharpParser.STAR - 132)) | (1 << (CSharpParser.AMP - 132)) | (1 << (CSharpParser.BANG - 132)) | (1 << (CSharpParser.TILDE - 132)) | (1 << (CSharpParser.OP_INC - 132)) | (1 << (CSharpParser.OP_DEC - 132)))) !== 0)) {
					{
					this.state = 1140;
					this.for_initializer();
					}
				}

				this.state = 1143;
				this.match(CSharpParser.SEMICOLON);
				this.state = 1145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FALSE - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.NULL - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.SIZEOF - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.THIS - 65)) | (1 << (CSharpParser.TRUE - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CSharpParser.TYPEOF - 97)) | (1 << (CSharpParser.UINT - 97)) | (1 << (CSharpParser.ULONG - 97)) | (1 << (CSharpParser.UNCHECKED - 97)) | (1 << (CSharpParser.USHORT - 97)) | (1 << (CSharpParser.VAR - 97)) | (1 << (CSharpParser.WHEN - 97)) | (1 << (CSharpParser.WHERE - 97)) | (1 << (CSharpParser.YIELD - 97)) | (1 << (CSharpParser.IDENTIFIER - 97)) | (1 << (CSharpParser.LITERAL_ACCESS - 97)) | (1 << (CSharpParser.INTEGER_LITERAL - 97)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 97)) | (1 << (CSharpParser.REAL_LITERAL - 97)) | (1 << (CSharpParser.CHARACTER_LITERAL - 97)) | (1 << (CSharpParser.REGULAR_STRING - 97)) | (1 << (CSharpParser.VERBATIUM_STRING - 97)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 97)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 97)) | (1 << (CSharpParser.OPEN_PARENS - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (CSharpParser.PLUS - 132)) | (1 << (CSharpParser.MINUS - 132)) | (1 << (CSharpParser.STAR - 132)) | (1 << (CSharpParser.AMP - 132)) | (1 << (CSharpParser.BANG - 132)) | (1 << (CSharpParser.TILDE - 132)) | (1 << (CSharpParser.OP_INC - 132)) | (1 << (CSharpParser.OP_DEC - 132)))) !== 0)) {
					{
					this.state = 1144;
					this.expression();
					}
				}

				this.state = 1147;
				this.match(CSharpParser.SEMICOLON);
				this.state = 1149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FALSE - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.NULL - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.SIZEOF - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.THIS - 65)) | (1 << (CSharpParser.TRUE - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CSharpParser.TYPEOF - 97)) | (1 << (CSharpParser.UINT - 97)) | (1 << (CSharpParser.ULONG - 97)) | (1 << (CSharpParser.UNCHECKED - 97)) | (1 << (CSharpParser.USHORT - 97)) | (1 << (CSharpParser.VAR - 97)) | (1 << (CSharpParser.WHEN - 97)) | (1 << (CSharpParser.WHERE - 97)) | (1 << (CSharpParser.YIELD - 97)) | (1 << (CSharpParser.IDENTIFIER - 97)) | (1 << (CSharpParser.LITERAL_ACCESS - 97)) | (1 << (CSharpParser.INTEGER_LITERAL - 97)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 97)) | (1 << (CSharpParser.REAL_LITERAL - 97)) | (1 << (CSharpParser.CHARACTER_LITERAL - 97)) | (1 << (CSharpParser.REGULAR_STRING - 97)) | (1 << (CSharpParser.VERBATIUM_STRING - 97)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 97)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 97)) | (1 << (CSharpParser.OPEN_PARENS - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (CSharpParser.PLUS - 132)) | (1 << (CSharpParser.MINUS - 132)) | (1 << (CSharpParser.STAR - 132)) | (1 << (CSharpParser.AMP - 132)) | (1 << (CSharpParser.BANG - 132)) | (1 << (CSharpParser.TILDE - 132)) | (1 << (CSharpParser.OP_INC - 132)) | (1 << (CSharpParser.OP_DEC - 132)))) !== 0)) {
					{
					this.state = 1148;
					this.for_iterator();
					}
				}

				this.state = 1151;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1152;
				this.embedded_statement();
				}
				break;

			case 8:
				_localctx = new ForeachStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1153;
				this.match(CSharpParser.FOREACH);
				this.state = 1154;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1155;
				this.local_variable_type();
				this.state = 1156;
				this.identifier();
				this.state = 1157;
				this.match(CSharpParser.IN);
				this.state = 1158;
				this.expression();
				this.state = 1159;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1160;
				this.embedded_statement();
				}
				break;

			case 9:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1162;
				this.match(CSharpParser.BREAK);
				this.state = 1163;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 10:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1164;
				this.match(CSharpParser.CONTINUE);
				this.state = 1165;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 11:
				_localctx = new GotoStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1166;
				this.match(CSharpParser.GOTO);
				this.state = 1171;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.ADD:
				case CSharpParser.ALIAS:
				case CSharpParser.ARGLIST:
				case CSharpParser.ASCENDING:
				case CSharpParser.ASYNC:
				case CSharpParser.AWAIT:
				case CSharpParser.BY:
				case CSharpParser.DESCENDING:
				case CSharpParser.DYNAMIC:
				case CSharpParser.EQUALS:
				case CSharpParser.FROM:
				case CSharpParser.GET:
				case CSharpParser.GROUP:
				case CSharpParser.INTO:
				case CSharpParser.JOIN:
				case CSharpParser.LET:
				case CSharpParser.NAMEOF:
				case CSharpParser.ON:
				case CSharpParser.ORDERBY:
				case CSharpParser.PARTIAL:
				case CSharpParser.REMOVE:
				case CSharpParser.SELECT:
				case CSharpParser.SET:
				case CSharpParser.VAR:
				case CSharpParser.WHEN:
				case CSharpParser.WHERE:
				case CSharpParser.YIELD:
				case CSharpParser.IDENTIFIER:
					{
					this.state = 1167;
					this.identifier();
					}
					break;
				case CSharpParser.CASE:
					{
					this.state = 1168;
					this.match(CSharpParser.CASE);
					this.state = 1169;
					this.expression();
					}
					break;
				case CSharpParser.DEFAULT:
					{
					this.state = 1170;
					this.match(CSharpParser.DEFAULT);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1173;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 12:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1174;
				this.match(CSharpParser.RETURN);
				this.state = 1176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FALSE - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.NULL - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.SIZEOF - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.THIS - 65)) | (1 << (CSharpParser.TRUE - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CSharpParser.TYPEOF - 97)) | (1 << (CSharpParser.UINT - 97)) | (1 << (CSharpParser.ULONG - 97)) | (1 << (CSharpParser.UNCHECKED - 97)) | (1 << (CSharpParser.USHORT - 97)) | (1 << (CSharpParser.VAR - 97)) | (1 << (CSharpParser.WHEN - 97)) | (1 << (CSharpParser.WHERE - 97)) | (1 << (CSharpParser.YIELD - 97)) | (1 << (CSharpParser.IDENTIFIER - 97)) | (1 << (CSharpParser.LITERAL_ACCESS - 97)) | (1 << (CSharpParser.INTEGER_LITERAL - 97)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 97)) | (1 << (CSharpParser.REAL_LITERAL - 97)) | (1 << (CSharpParser.CHARACTER_LITERAL - 97)) | (1 << (CSharpParser.REGULAR_STRING - 97)) | (1 << (CSharpParser.VERBATIUM_STRING - 97)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 97)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 97)) | (1 << (CSharpParser.OPEN_PARENS - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (CSharpParser.PLUS - 132)) | (1 << (CSharpParser.MINUS - 132)) | (1 << (CSharpParser.STAR - 132)) | (1 << (CSharpParser.AMP - 132)) | (1 << (CSharpParser.BANG - 132)) | (1 << (CSharpParser.TILDE - 132)) | (1 << (CSharpParser.OP_INC - 132)) | (1 << (CSharpParser.OP_DEC - 132)))) !== 0)) {
					{
					this.state = 1175;
					this.expression();
					}
				}

				this.state = 1178;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 13:
				_localctx = new ThrowStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1179;
				this.match(CSharpParser.THROW);
				this.state = 1181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FALSE - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.NULL - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.SIZEOF - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.THIS - 65)) | (1 << (CSharpParser.TRUE - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CSharpParser.TYPEOF - 97)) | (1 << (CSharpParser.UINT - 97)) | (1 << (CSharpParser.ULONG - 97)) | (1 << (CSharpParser.UNCHECKED - 97)) | (1 << (CSharpParser.USHORT - 97)) | (1 << (CSharpParser.VAR - 97)) | (1 << (CSharpParser.WHEN - 97)) | (1 << (CSharpParser.WHERE - 97)) | (1 << (CSharpParser.YIELD - 97)) | (1 << (CSharpParser.IDENTIFIER - 97)) | (1 << (CSharpParser.LITERAL_ACCESS - 97)) | (1 << (CSharpParser.INTEGER_LITERAL - 97)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 97)) | (1 << (CSharpParser.REAL_LITERAL - 97)) | (1 << (CSharpParser.CHARACTER_LITERAL - 97)) | (1 << (CSharpParser.REGULAR_STRING - 97)) | (1 << (CSharpParser.VERBATIUM_STRING - 97)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 97)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 97)) | (1 << (CSharpParser.OPEN_PARENS - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (CSharpParser.PLUS - 132)) | (1 << (CSharpParser.MINUS - 132)) | (1 << (CSharpParser.STAR - 132)) | (1 << (CSharpParser.AMP - 132)) | (1 << (CSharpParser.BANG - 132)) | (1 << (CSharpParser.TILDE - 132)) | (1 << (CSharpParser.OP_INC - 132)) | (1 << (CSharpParser.OP_DEC - 132)))) !== 0)) {
					{
					this.state = 1180;
					this.expression();
					}
				}

				this.state = 1183;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 14:
				_localctx = new TryStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1184;
				this.match(CSharpParser.TRY);
				this.state = 1185;
				this.block();
				this.state = 1191;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.CATCH:
					{
					this.state = 1186;
					this.catch_clauses();
					this.state = 1188;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CSharpParser.FINALLY) {
						{
						this.state = 1187;
						this.finally_clause();
						}
					}

					}
					break;
				case CSharpParser.FINALLY:
					{
					this.state = 1190;
					this.finally_clause();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 15:
				_localctx = new CheckedStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1193;
				this.match(CSharpParser.CHECKED);
				this.state = 1194;
				this.block();
				}
				break;

			case 16:
				_localctx = new UncheckedStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1195;
				this.match(CSharpParser.UNCHECKED);
				this.state = 1196;
				this.block();
				}
				break;

			case 17:
				_localctx = new LockStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1197;
				this.match(CSharpParser.LOCK);
				this.state = 1198;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1199;
				this.expression();
				this.state = 1200;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1201;
				this.embedded_statement();
				}
				break;

			case 18:
				_localctx = new UsingStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1203;
				this.match(CSharpParser.USING);
				this.state = 1204;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1205;
				this.resource_acquisition();
				this.state = 1206;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1207;
				this.embedded_statement();
				}
				break;

			case 19:
				_localctx = new YieldStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1209;
				this.match(CSharpParser.YIELD);
				this.state = 1213;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.RETURN:
					{
					this.state = 1210;
					this.match(CSharpParser.RETURN);
					this.state = 1211;
					this.expression();
					}
					break;
				case CSharpParser.BREAK:
					{
					this.state = 1212;
					this.match(CSharpParser.BREAK);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1215;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 20:
				_localctx = new UnsafeStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1216;
				this.match(CSharpParser.UNSAFE);
				this.state = 1217;
				this.block();
				}
				break;

			case 21:
				_localctx = new FixedStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1218;
				this.match(CSharpParser.FIXED);
				this.state = 1219;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1220;
				this.pointer_type();
				this.state = 1221;
				this.fixed_pointer_declarators();
				this.state = 1222;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1223;
				this.embedded_statement();
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CSharpParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1227;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 1229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BREAK) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.CONST) | (1 << CSharpParser.CONTINUE) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DO - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FALSE - 32)) | (1 << (CSharpParser.FIXED - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FOR - 32)) | (1 << (CSharpParser.FOREACH - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GOTO - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.IF - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)) | (1 << (CSharpParser.LOCK - 32)) | (1 << (CSharpParser.LONG - 32)) | (1 << (CSharpParser.NAMEOF - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.NULL - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.RETURN - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.SIZEOF - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.SWITCH - 65)) | (1 << (CSharpParser.THIS - 65)) | (1 << (CSharpParser.THROW - 65)) | (1 << (CSharpParser.TRUE - 65)) | (1 << (CSharpParser.TRY - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CSharpParser.TYPEOF - 97)) | (1 << (CSharpParser.UINT - 97)) | (1 << (CSharpParser.ULONG - 97)) | (1 << (CSharpParser.UNCHECKED - 97)) | (1 << (CSharpParser.UNSAFE - 97)) | (1 << (CSharpParser.USHORT - 97)) | (1 << (CSharpParser.USING - 97)) | (1 << (CSharpParser.VAR - 97)) | (1 << (CSharpParser.VOID - 97)) | (1 << (CSharpParser.WHEN - 97)) | (1 << (CSharpParser.WHERE - 97)) | (1 << (CSharpParser.WHILE - 97)) | (1 << (CSharpParser.YIELD - 97)) | (1 << (CSharpParser.IDENTIFIER - 97)) | (1 << (CSharpParser.LITERAL_ACCESS - 97)) | (1 << (CSharpParser.INTEGER_LITERAL - 97)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 97)) | (1 << (CSharpParser.REAL_LITERAL - 97)) | (1 << (CSharpParser.CHARACTER_LITERAL - 97)) | (1 << (CSharpParser.REGULAR_STRING - 97)) | (1 << (CSharpParser.VERBATIUM_STRING - 97)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 97)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 97)) | (1 << (CSharpParser.OPEN_BRACE - 97)) | (1 << (CSharpParser.OPEN_PARENS - 97)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (CSharpParser.SEMICOLON - 131)) | (1 << (CSharpParser.PLUS - 131)) | (1 << (CSharpParser.MINUS - 131)) | (1 << (CSharpParser.STAR - 131)) | (1 << (CSharpParser.AMP - 131)) | (1 << (CSharpParser.BANG - 131)) | (1 << (CSharpParser.TILDE - 131)) | (1 << (CSharpParser.OP_INC - 131)) | (1 << (CSharpParser.OP_DEC - 131)))) !== 0)) {
				{
				this.state = 1228;
				this.statement_list();
				}
			}

			this.state = 1231;
			this.match(CSharpParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public local_variable_declaration(): Local_variable_declarationContext {
		let _localctx: Local_variable_declarationContext = new Local_variable_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, CSharpParser.RULE_local_variable_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1233;
			this.local_variable_type();
			this.state = 1234;
			this.local_variable_declarator();
			this.state = 1239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1235;
				this.match(CSharpParser.COMMA);
				this.state = 1236;
				this.local_variable_declarator();
				}
				}
				this.state = 1241;
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
	public local_variable_type(): Local_variable_typeContext {
		let _localctx: Local_variable_typeContext = new Local_variable_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, CSharpParser.RULE_local_variable_type);
		try {
			this.state = 1244;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1242;
				this.match(CSharpParser.VAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1243;
				this.type_();
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
	public local_variable_declarator(): Local_variable_declaratorContext {
		let _localctx: Local_variable_declaratorContext = new Local_variable_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, CSharpParser.RULE_local_variable_declarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1246;
			this.identifier();
			this.state = 1249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.ASSIGNMENT) {
				{
				this.state = 1247;
				this.match(CSharpParser.ASSIGNMENT);
				this.state = 1248;
				this.local_variable_initializer();
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
	public local_variable_initializer(): Local_variable_initializerContext {
		let _localctx: Local_variable_initializerContext = new Local_variable_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, CSharpParser.RULE_local_variable_initializer);
		try {
			this.state = 1254;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1251;
				this.expression();
				}
				break;
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1252;
				this.array_initializer();
				}
				break;
			case CSharpParser.STACKALLOC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1253;
				this.local_variable_initializer_unsafe();
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
	public local_constant_declaration(): Local_constant_declarationContext {
		let _localctx: Local_constant_declarationContext = new Local_constant_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, CSharpParser.RULE_local_constant_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1256;
			this.match(CSharpParser.CONST);
			this.state = 1257;
			this.type_();
			this.state = 1258;
			this.constant_declarators();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_body(): If_bodyContext {
		let _localctx: If_bodyContext = new If_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, CSharpParser.RULE_if_body);
		try {
			this.state = 1262;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1260;
				this.block();
				}
				break;
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BREAK:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.CONTINUE:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DO:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FIXED:
			case CSharpParser.FLOAT:
			case CSharpParser.FOR:
			case CSharpParser.FOREACH:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GOTO:
			case CSharpParser.GROUP:
			case CSharpParser.IF:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LOCK:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.RETURN:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.SWITCH:
			case CSharpParser.THIS:
			case CSharpParser.THROW:
			case CSharpParser.TRUE:
			case CSharpParser.TRY:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.UNSAFE:
			case CSharpParser.USHORT:
			case CSharpParser.USING:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.WHILE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.SEMICOLON:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1261;
				this.simple_embedded_statement();
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
	public switch_section(): Switch_sectionContext {
		let _localctx: Switch_sectionContext = new Switch_sectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, CSharpParser.RULE_switch_section);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1265;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1264;
					this.switch_label();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1267;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1269;
			this.statement_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switch_label(): Switch_labelContext {
		let _localctx: Switch_labelContext = new Switch_labelContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, CSharpParser.RULE_switch_label);
		try {
			this.state = 1277;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1271;
				this.match(CSharpParser.CASE);
				this.state = 1272;
				this.expression();
				this.state = 1273;
				this.match(CSharpParser.COLON);
				}
				break;
			case CSharpParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1275;
				this.match(CSharpParser.DEFAULT);
				this.state = 1276;
				this.match(CSharpParser.COLON);
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
	public statement_list(): Statement_listContext {
		let _localctx: Statement_listContext = new Statement_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, CSharpParser.RULE_statement_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1280;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1279;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1282;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
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
	public for_initializer(): For_initializerContext {
		let _localctx: For_initializerContext = new For_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, CSharpParser.RULE_for_initializer);
		let _la: number;
		try {
			this.state = 1293;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1284;
				this.local_variable_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1285;
				this.expression();
				this.state = 1290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CSharpParser.COMMA) {
					{
					{
					this.state = 1286;
					this.match(CSharpParser.COMMA);
					this.state = 1287;
					this.expression();
					}
					}
					this.state = 1292;
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
	public for_iterator(): For_iteratorContext {
		let _localctx: For_iteratorContext = new For_iteratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, CSharpParser.RULE_for_iterator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1295;
			this.expression();
			this.state = 1300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1296;
				this.match(CSharpParser.COMMA);
				this.state = 1297;
				this.expression();
				}
				}
				this.state = 1302;
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
	public catch_clauses(): Catch_clausesContext {
		let _localctx: Catch_clausesContext = new Catch_clausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, CSharpParser.RULE_catch_clauses);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1314;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1303;
				this.specific_catch_clause();
				this.state = 1307;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1304;
						this.specific_catch_clause();
						}
						}
					}
					this.state = 1309;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
				}
				this.state = 1311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.CATCH) {
					{
					this.state = 1310;
					this.general_catch_clause();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1313;
				this.general_catch_clause();
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
	public specific_catch_clause(): Specific_catch_clauseContext {
		let _localctx: Specific_catch_clauseContext = new Specific_catch_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, CSharpParser.RULE_specific_catch_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1316;
			this.match(CSharpParser.CATCH);
			this.state = 1317;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 1318;
			this.class_type();
			this.state = 1320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BY) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CSharpParser.DYNAMIC - 34)) | (1 << (CSharpParser.EQUALS - 34)) | (1 << (CSharpParser.FROM - 34)) | (1 << (CSharpParser.GET - 34)) | (1 << (CSharpParser.GROUP - 34)) | (1 << (CSharpParser.INTO - 34)) | (1 << (CSharpParser.JOIN - 34)) | (1 << (CSharpParser.LET - 34)) | (1 << (CSharpParser.NAMEOF - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (CSharpParser.ON - 68)) | (1 << (CSharpParser.ORDERBY - 68)) | (1 << (CSharpParser.PARTIAL - 68)) | (1 << (CSharpParser.REMOVE - 68)) | (1 << (CSharpParser.SELECT - 68)) | (1 << (CSharpParser.SET - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (CSharpParser.VAR - 104)) | (1 << (CSharpParser.WHEN - 104)) | (1 << (CSharpParser.WHERE - 104)) | (1 << (CSharpParser.YIELD - 104)) | (1 << (CSharpParser.IDENTIFIER - 104)))) !== 0)) {
				{
				this.state = 1319;
				this.identifier();
				}
			}

			this.state = 1322;
			this.match(CSharpParser.CLOSE_PARENS);
			this.state = 1324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.WHEN) {
				{
				this.state = 1323;
				this.exception_filter();
				}
			}

			this.state = 1326;
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
	public general_catch_clause(): General_catch_clauseContext {
		let _localctx: General_catch_clauseContext = new General_catch_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, CSharpParser.RULE_general_catch_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1328;
			this.match(CSharpParser.CATCH);
			this.state = 1330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.WHEN) {
				{
				this.state = 1329;
				this.exception_filter();
				}
			}

			this.state = 1332;
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
	public exception_filter(): Exception_filterContext {
		let _localctx: Exception_filterContext = new Exception_filterContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, CSharpParser.RULE_exception_filter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1334;
			this.match(CSharpParser.WHEN);
			this.state = 1335;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 1336;
			this.expression();
			this.state = 1337;
			this.match(CSharpParser.CLOSE_PARENS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finally_clause(): Finally_clauseContext {
		let _localctx: Finally_clauseContext = new Finally_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, CSharpParser.RULE_finally_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1339;
			this.match(CSharpParser.FINALLY);
			this.state = 1340;
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
	public resource_acquisition(): Resource_acquisitionContext {
		let _localctx: Resource_acquisitionContext = new Resource_acquisitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, CSharpParser.RULE_resource_acquisition);
		try {
			this.state = 1344;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1342;
				this.local_variable_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1343;
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
	public namespace_declaration(): Namespace_declarationContext {
		let _localctx: Namespace_declarationContext = new Namespace_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, CSharpParser.RULE_namespace_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1346;
			this.match(CSharpParser.NAMESPACE);
			this.state = 1347;
			_localctx._qi = this.qualified_identifier();
			this.state = 1348;
			this.namespace_body();
			this.state = 1350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.SEMICOLON) {
				{
				this.state = 1349;
				this.match(CSharpParser.SEMICOLON);
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
	public qualified_identifier(): Qualified_identifierContext {
		let _localctx: Qualified_identifierContext = new Qualified_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, CSharpParser.RULE_qualified_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1352;
			this.identifier();
			this.state = 1357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.DOT) {
				{
				{
				this.state = 1353;
				this.match(CSharpParser.DOT);
				this.state = 1354;
				this.identifier();
				}
				}
				this.state = 1359;
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
	public namespace_body(): Namespace_bodyContext {
		let _localctx: Namespace_bodyContext = new Namespace_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, CSharpParser.RULE_namespace_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1360;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 1362;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				{
				this.state = 1361;
				this.extern_alias_directives();
				}
				break;
			}
			this.state = 1365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.USING) {
				{
				this.state = 1364;
				this.using_directives();
				}
			}

			this.state = 1368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ABSTRACT) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.CLASS) | (1 << CSharpParser.DELEGATE))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (CSharpParser.ENUM - 36)) | (1 << (CSharpParser.EXTERN - 36)) | (1 << (CSharpParser.INTERFACE - 36)) | (1 << (CSharpParser.INTERNAL - 36)) | (1 << (CSharpParser.NAMESPACE - 36)) | (1 << (CSharpParser.NEW - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CSharpParser.OVERRIDE - 72)) | (1 << (CSharpParser.PARTIAL - 72)) | (1 << (CSharpParser.PRIVATE - 72)) | (1 << (CSharpParser.PROTECTED - 72)) | (1 << (CSharpParser.PUBLIC - 72)) | (1 << (CSharpParser.READONLY - 72)) | (1 << (CSharpParser.SEALED - 72)) | (1 << (CSharpParser.STATIC - 72)) | (1 << (CSharpParser.STRUCT - 72)) | (1 << (CSharpParser.UNSAFE - 72)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CSharpParser.VIRTUAL - 105)) | (1 << (CSharpParser.VOLATILE - 105)) | (1 << (CSharpParser.OPEN_BRACKET - 105)))) !== 0)) {
				{
				this.state = 1367;
				this.namespace_member_declarations();
				}
			}

			this.state = 1370;
			this.match(CSharpParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extern_alias_directives(): Extern_alias_directivesContext {
		let _localctx: Extern_alias_directivesContext = new Extern_alias_directivesContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, CSharpParser.RULE_extern_alias_directives);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1373;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1372;
					this.extern_alias_directive();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1375;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
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
	public extern_alias_directive(): Extern_alias_directiveContext {
		let _localctx: Extern_alias_directiveContext = new Extern_alias_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, CSharpParser.RULE_extern_alias_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1377;
			this.match(CSharpParser.EXTERN);
			this.state = 1378;
			this.match(CSharpParser.ALIAS);
			this.state = 1379;
			this.identifier();
			this.state = 1380;
			this.match(CSharpParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public using_directives(): Using_directivesContext {
		let _localctx: Using_directivesContext = new Using_directivesContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, CSharpParser.RULE_using_directives);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1382;
				this.using_directive();
				}
				}
				this.state = 1385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CSharpParser.USING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public using_directive(): Using_directiveContext {
		let _localctx: Using_directiveContext = new Using_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, CSharpParser.RULE_using_directive);
		try {
			this.state = 1402;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				_localctx = new UsingAliasDirectiveContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1387;
				this.match(CSharpParser.USING);
				this.state = 1388;
				this.identifier();
				this.state = 1389;
				this.match(CSharpParser.ASSIGNMENT);
				this.state = 1390;
				this.namespace_or_type_name();
				this.state = 1391;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 2:
				_localctx = new UsingNamespaceDirectiveContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1393;
				this.match(CSharpParser.USING);
				this.state = 1394;
				this.namespace_or_type_name();
				this.state = 1395;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 3:
				_localctx = new UsingStaticDirectiveContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1397;
				this.match(CSharpParser.USING);
				this.state = 1398;
				this.match(CSharpParser.STATIC);
				this.state = 1399;
				this.namespace_or_type_name();
				this.state = 1400;
				this.match(CSharpParser.SEMICOLON);
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
	public namespace_member_declarations(): Namespace_member_declarationsContext {
		let _localctx: Namespace_member_declarationsContext = new Namespace_member_declarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, CSharpParser.RULE_namespace_member_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1404;
				this.namespace_member_declaration();
				}
				}
				this.state = 1407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ABSTRACT) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.CLASS) | (1 << CSharpParser.DELEGATE))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (CSharpParser.ENUM - 36)) | (1 << (CSharpParser.EXTERN - 36)) | (1 << (CSharpParser.INTERFACE - 36)) | (1 << (CSharpParser.INTERNAL - 36)) | (1 << (CSharpParser.NAMESPACE - 36)) | (1 << (CSharpParser.NEW - 36)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CSharpParser.OVERRIDE - 72)) | (1 << (CSharpParser.PARTIAL - 72)) | (1 << (CSharpParser.PRIVATE - 72)) | (1 << (CSharpParser.PROTECTED - 72)) | (1 << (CSharpParser.PUBLIC - 72)) | (1 << (CSharpParser.READONLY - 72)) | (1 << (CSharpParser.SEALED - 72)) | (1 << (CSharpParser.STATIC - 72)) | (1 << (CSharpParser.STRUCT - 72)) | (1 << (CSharpParser.UNSAFE - 72)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CSharpParser.VIRTUAL - 105)) | (1 << (CSharpParser.VOLATILE - 105)) | (1 << (CSharpParser.OPEN_BRACKET - 105)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespace_member_declaration(): Namespace_member_declarationContext {
		let _localctx: Namespace_member_declarationContext = new Namespace_member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, CSharpParser.RULE_namespace_member_declaration);
		try {
			this.state = 1411;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.NAMESPACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1409;
				this.namespace_declaration();
				}
				break;
			case CSharpParser.ABSTRACT:
			case CSharpParser.ASYNC:
			case CSharpParser.CLASS:
			case CSharpParser.DELEGATE:
			case CSharpParser.ENUM:
			case CSharpParser.EXTERN:
			case CSharpParser.INTERFACE:
			case CSharpParser.INTERNAL:
			case CSharpParser.NEW:
			case CSharpParser.OVERRIDE:
			case CSharpParser.PARTIAL:
			case CSharpParser.PRIVATE:
			case CSharpParser.PROTECTED:
			case CSharpParser.PUBLIC:
			case CSharpParser.READONLY:
			case CSharpParser.SEALED:
			case CSharpParser.STATIC:
			case CSharpParser.STRUCT:
			case CSharpParser.UNSAFE:
			case CSharpParser.VIRTUAL:
			case CSharpParser.VOLATILE:
			case CSharpParser.OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1410;
				this.type_declaration();
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
	public type_declaration(): Type_declarationContext {
		let _localctx: Type_declarationContext = new Type_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, CSharpParser.RULE_type_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1413;
				this.attributes();
				}
			}

			this.state = 1417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.ABSTRACT || _la === CSharpParser.ASYNC || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CSharpParser.EXTERN - 40)) | (1 << (CSharpParser.INTERNAL - 40)) | (1 << (CSharpParser.NEW - 40)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CSharpParser.OVERRIDE - 72)) | (1 << (CSharpParser.PARTIAL - 72)) | (1 << (CSharpParser.PRIVATE - 72)) | (1 << (CSharpParser.PROTECTED - 72)) | (1 << (CSharpParser.PUBLIC - 72)) | (1 << (CSharpParser.READONLY - 72)) | (1 << (CSharpParser.SEALED - 72)) | (1 << (CSharpParser.STATIC - 72)) | (1 << (CSharpParser.UNSAFE - 72)))) !== 0) || _la === CSharpParser.VIRTUAL || _la === CSharpParser.VOLATILE) {
				{
				this.state = 1416;
				this.all_member_modifiers();
				}
			}

			this.state = 1424;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.CLASS:
				{
				this.state = 1419;
				this.class_definition();
				}
				break;
			case CSharpParser.STRUCT:
				{
				this.state = 1420;
				this.struct_definition();
				}
				break;
			case CSharpParser.INTERFACE:
				{
				this.state = 1421;
				this.interface_definition();
				}
				break;
			case CSharpParser.ENUM:
				{
				this.state = 1422;
				this.enum_definition();
				}
				break;
			case CSharpParser.DELEGATE:
				{
				this.state = 1423;
				this.delegate_definition();
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
	public qualified_alias_member(): Qualified_alias_memberContext {
		let _localctx: Qualified_alias_memberContext = new Qualified_alias_memberContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, CSharpParser.RULE_qualified_alias_member);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1426;
			this.identifier();
			this.state = 1427;
			this.match(CSharpParser.DOUBLE_COLON);
			this.state = 1428;
			this.identifier();
			this.state = 1430;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1429;
				this.type_argument_list();
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
	public type_parameter_list(): Type_parameter_listContext {
		let _localctx: Type_parameter_listContext = new Type_parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, CSharpParser.RULE_type_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1432;
			this.match(CSharpParser.LT);
			this.state = 1433;
			this.type_parameter();
			this.state = 1438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1434;
				this.match(CSharpParser.COMMA);
				this.state = 1435;
				this.type_parameter();
				}
				}
				this.state = 1440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1441;
			this.match(CSharpParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_parameter(): Type_parameterContext {
		let _localctx: Type_parameterContext = new Type_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, CSharpParser.RULE_type_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1443;
				this.attributes();
				}
			}

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
	public class_base(): Class_baseContext {
		let _localctx: Class_baseContext = new Class_baseContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, CSharpParser.RULE_class_base);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1448;
			this.match(CSharpParser.COLON);
			this.state = 1449;
			this.class_type();
			this.state = 1454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1450;
				this.match(CSharpParser.COMMA);
				this.state = 1451;
				this.namespace_or_type_name();
				}
				}
				this.state = 1456;
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
	public interface_type_list(): Interface_type_listContext {
		let _localctx: Interface_type_listContext = new Interface_type_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, CSharpParser.RULE_interface_type_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1457;
			this.namespace_or_type_name();
			this.state = 1462;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1458;
				this.match(CSharpParser.COMMA);
				this.state = 1459;
				this.namespace_or_type_name();
				}
				}
				this.state = 1464;
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
	public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext {
		let _localctx: Type_parameter_constraints_clausesContext = new Type_parameter_constraints_clausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, CSharpParser.RULE_type_parameter_constraints_clauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1465;
				this.type_parameter_constraints_clause();
				}
				}
				this.state = 1468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CSharpParser.WHERE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_parameter_constraints_clause(): Type_parameter_constraints_clauseContext {
		let _localctx: Type_parameter_constraints_clauseContext = new Type_parameter_constraints_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, CSharpParser.RULE_type_parameter_constraints_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1470;
			this.match(CSharpParser.WHERE);
			this.state = 1471;
			this.identifier();
			this.state = 1472;
			this.match(CSharpParser.COLON);
			this.state = 1473;
			this.type_parameter_constraints();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_parameter_constraints(): Type_parameter_constraintsContext {
		let _localctx: Type_parameter_constraintsContext = new Type_parameter_constraintsContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, CSharpParser.RULE_type_parameter_constraints);
		let _la: number;
		try {
			this.state = 1485;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.NEW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1475;
				this.constructor_constraint();
				}
				break;
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BY:
			case CSharpParser.CLASS:
			case CSharpParser.DESCENDING:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.NAMEOF:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.STRING:
			case CSharpParser.STRUCT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1476;
				this.primary_constraint();
				this.state = 1479;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
				case 1:
					{
					this.state = 1477;
					this.match(CSharpParser.COMMA);
					this.state = 1478;
					this.secondary_constraints();
					}
					break;
				}
				this.state = 1483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.COMMA) {
					{
					this.state = 1481;
					this.match(CSharpParser.COMMA);
					this.state = 1482;
					this.constructor_constraint();
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
	public primary_constraint(): Primary_constraintContext {
		let _localctx: Primary_constraintContext = new Primary_constraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, CSharpParser.RULE_primary_constraint);
		try {
			this.state = 1490;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BY:
			case CSharpParser.DESCENDING:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.NAMEOF:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.STRING:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1487;
				this.class_type();
				}
				break;
			case CSharpParser.CLASS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1488;
				this.match(CSharpParser.CLASS);
				}
				break;
			case CSharpParser.STRUCT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1489;
				this.match(CSharpParser.STRUCT);
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
	public secondary_constraints(): Secondary_constraintsContext {
		let _localctx: Secondary_constraintsContext = new Secondary_constraintsContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, CSharpParser.RULE_secondary_constraints);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1492;
			this.namespace_or_type_name();
			this.state = 1497;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1493;
					this.match(CSharpParser.COMMA);
					this.state = 1494;
					this.namespace_or_type_name();
					}
					}
				}
				this.state = 1499;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructor_constraint(): Constructor_constraintContext {
		let _localctx: Constructor_constraintContext = new Constructor_constraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, CSharpParser.RULE_constructor_constraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1500;
			this.match(CSharpParser.NEW);
			this.state = 1501;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 1502;
			this.match(CSharpParser.CLOSE_PARENS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 218, CSharpParser.RULE_class_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1504;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 1506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ABSTRACT) | (1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CLASS) | (1 << CSharpParser.CONST) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.ENUM - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.EVENT - 33)) | (1 << (CSharpParser.EXPLICIT - 33)) | (1 << (CSharpParser.EXTERN - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.IMPLICIT - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTERFACE - 33)) | (1 << (CSharpParser.INTERNAL - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.OVERRIDE - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.PRIVATE - 65)) | (1 << (CSharpParser.PROTECTED - 65)) | (1 << (CSharpParser.PUBLIC - 65)) | (1 << (CSharpParser.READONLY - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SEALED - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.STATIC - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.STRUCT - 65)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (CSharpParser.UINT - 98)) | (1 << (CSharpParser.ULONG - 98)) | (1 << (CSharpParser.UNSAFE - 98)) | (1 << (CSharpParser.USHORT - 98)) | (1 << (CSharpParser.VAR - 98)) | (1 << (CSharpParser.VIRTUAL - 98)) | (1 << (CSharpParser.VOID - 98)) | (1 << (CSharpParser.VOLATILE - 98)) | (1 << (CSharpParser.WHEN - 98)) | (1 << (CSharpParser.WHERE - 98)) | (1 << (CSharpParser.YIELD - 98)) | (1 << (CSharpParser.IDENTIFIER - 98)) | (1 << (CSharpParser.OPEN_BRACKET - 98)))) !== 0) || _la === CSharpParser.TILDE) {
				{
				this.state = 1505;
				this.class_member_declarations();
				}
			}

			this.state = 1508;
			this.match(CSharpParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public class_member_declarations(): Class_member_declarationsContext {
		let _localctx: Class_member_declarationsContext = new Class_member_declarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, CSharpParser.RULE_class_member_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1510;
				this.class_member_declaration();
				}
				}
				this.state = 1513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ABSTRACT) | (1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CLASS) | (1 << CSharpParser.CONST) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.ENUM - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.EVENT - 33)) | (1 << (CSharpParser.EXPLICIT - 33)) | (1 << (CSharpParser.EXTERN - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.IMPLICIT - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTERFACE - 33)) | (1 << (CSharpParser.INTERNAL - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.OVERRIDE - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.PRIVATE - 65)) | (1 << (CSharpParser.PROTECTED - 65)) | (1 << (CSharpParser.PUBLIC - 65)) | (1 << (CSharpParser.READONLY - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SEALED - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.STATIC - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.STRUCT - 65)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (CSharpParser.UINT - 98)) | (1 << (CSharpParser.ULONG - 98)) | (1 << (CSharpParser.UNSAFE - 98)) | (1 << (CSharpParser.USHORT - 98)) | (1 << (CSharpParser.VAR - 98)) | (1 << (CSharpParser.VIRTUAL - 98)) | (1 << (CSharpParser.VOID - 98)) | (1 << (CSharpParser.VOLATILE - 98)) | (1 << (CSharpParser.WHEN - 98)) | (1 << (CSharpParser.WHERE - 98)) | (1 << (CSharpParser.YIELD - 98)) | (1 << (CSharpParser.IDENTIFIER - 98)) | (1 << (CSharpParser.OPEN_BRACKET - 98)))) !== 0) || _la === CSharpParser.TILDE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public class_member_declaration(): Class_member_declarationContext {
		let _localctx: Class_member_declarationContext = new Class_member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, CSharpParser.RULE_class_member_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1515;
				this.attributes();
				}
			}

			this.state = 1519;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				{
				this.state = 1518;
				this.all_member_modifiers();
				}
				break;
			}
			this.state = 1523;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CLASS:
			case CSharpParser.CONST:
			case CSharpParser.DECIMAL:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.ENUM:
			case CSharpParser.EQUALS:
			case CSharpParser.EVENT:
			case CSharpParser.EXPLICIT:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.IMPLICIT:
			case CSharpParser.INT:
			case CSharpParser.INTERFACE:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.STRING:
			case CSharpParser.STRUCT:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.VOID:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
				{
				this.state = 1521;
				this.common_member_declaration();
				}
				break;
			case CSharpParser.TILDE:
				{
				this.state = 1522;
				this.destructor_definition();
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
	public all_member_modifiers(): All_member_modifiersContext {
		let _localctx: All_member_modifiersContext = new All_member_modifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, CSharpParser.RULE_all_member_modifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1526;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1525;
					this.all_member_modifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1528;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
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
	public all_member_modifier(): All_member_modifierContext {
		let _localctx: All_member_modifierContext = new All_member_modifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, CSharpParser.RULE_all_member_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1530;
			_la = this._input.LA(1);
			if (!(_la === CSharpParser.ABSTRACT || _la === CSharpParser.ASYNC || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CSharpParser.EXTERN - 40)) | (1 << (CSharpParser.INTERNAL - 40)) | (1 << (CSharpParser.NEW - 40)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CSharpParser.OVERRIDE - 72)) | (1 << (CSharpParser.PARTIAL - 72)) | (1 << (CSharpParser.PRIVATE - 72)) | (1 << (CSharpParser.PROTECTED - 72)) | (1 << (CSharpParser.PUBLIC - 72)) | (1 << (CSharpParser.READONLY - 72)) | (1 << (CSharpParser.SEALED - 72)) | (1 << (CSharpParser.STATIC - 72)) | (1 << (CSharpParser.UNSAFE - 72)))) !== 0) || _la === CSharpParser.VIRTUAL || _la === CSharpParser.VOLATILE)) {
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
	public common_member_declaration(): Common_member_declarationContext {
		let _localctx: Common_member_declarationContext = new Common_member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, CSharpParser.RULE_common_member_declaration);
		try {
			this.state = 1551;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1532;
				this.constant_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1533;
				this.typed_member_declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1534;
				this.event_declaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1535;
				this.conversion_operator_declarator();
				this.state = 1541;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.OPEN_BRACE:
				case CSharpParser.SEMICOLON:
					{
					this.state = 1536;
					this.body();
					}
					break;
				case CSharpParser.ASSIGNMENT:
					{
					this.state = 1537;
					this.right_arrow();
					this.state = 1538;
					this.expression();
					this.state = 1539;
					this.match(CSharpParser.SEMICOLON);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1543;
				this.constructor_declaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1544;
				this.match(CSharpParser.VOID);
				this.state = 1545;
				this.method_declaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1546;
				this.class_definition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1547;
				this.struct_definition();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1548;
				this.interface_definition();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1549;
				this.enum_definition();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1550;
				this.delegate_definition();
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
	public typed_member_declaration(): Typed_member_declarationContext {
		let _localctx: Typed_member_declarationContext = new Typed_member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, CSharpParser.RULE_typed_member_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1553;
			this.type_();
			this.state = 1563;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
			case 1:
				{
				this.state = 1554;
				this.namespace_or_type_name();
				this.state = 1555;
				this.match(CSharpParser.DOT);
				this.state = 1556;
				this.indexer_declaration();
				}
				break;

			case 2:
				{
				this.state = 1558;
				this.method_declaration();
				}
				break;

			case 3:
				{
				this.state = 1559;
				this.property_declaration();
				}
				break;

			case 4:
				{
				this.state = 1560;
				this.indexer_declaration();
				}
				break;

			case 5:
				{
				this.state = 1561;
				this.operator_declaration();
				}
				break;

			case 6:
				{
				this.state = 1562;
				this.field_declaration();
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
	public constant_declarators(): Constant_declaratorsContext {
		let _localctx: Constant_declaratorsContext = new Constant_declaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, CSharpParser.RULE_constant_declarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1565;
			this.constant_declarator();
			this.state = 1570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1566;
				this.match(CSharpParser.COMMA);
				this.state = 1567;
				this.constant_declarator();
				}
				}
				this.state = 1572;
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
	public constant_declarator(): Constant_declaratorContext {
		let _localctx: Constant_declaratorContext = new Constant_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, CSharpParser.RULE_constant_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1573;
			this.identifier();
			this.state = 1574;
			this.match(CSharpParser.ASSIGNMENT);
			this.state = 1575;
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
	public variable_declarators(): Variable_declaratorsContext {
		let _localctx: Variable_declaratorsContext = new Variable_declaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, CSharpParser.RULE_variable_declarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1577;
			this.variable_declarator();
			this.state = 1582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1578;
				this.match(CSharpParser.COMMA);
				this.state = 1579;
				this.variable_declarator();
				}
				}
				this.state = 1584;
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
	public variable_declarator(): Variable_declaratorContext {
		let _localctx: Variable_declaratorContext = new Variable_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, CSharpParser.RULE_variable_declarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1585;
			this.identifier();
			this.state = 1588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.ASSIGNMENT) {
				{
				this.state = 1586;
				this.match(CSharpParser.ASSIGNMENT);
				this.state = 1587;
				this.variable_initializer();
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
	public variable_initializer(): Variable_initializerContext {
		let _localctx: Variable_initializerContext = new Variable_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, CSharpParser.RULE_variable_initializer);
		try {
			this.state = 1592;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1590;
				this.expression();
				}
				break;
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1591;
				this.array_initializer();
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
	public return_type(): Return_typeContext {
		let _localctx: Return_typeContext = new Return_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, CSharpParser.RULE_return_type);
		try {
			this.state = 1596;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1594;
				this.type_();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1595;
				this.match(CSharpParser.VOID);
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
	public member_name(): Member_nameContext {
		let _localctx: Member_nameContext = new Member_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, CSharpParser.RULE_member_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1598;
			this.namespace_or_type_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public method_body(): Method_bodyContext {
		let _localctx: Method_bodyContext = new Method_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, CSharpParser.RULE_method_body);
		try {
			this.state = 1602;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1600;
				this.block();
				}
				break;
			case CSharpParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1601;
				this.match(CSharpParser.SEMICOLON);
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
	public formal_parameter_list(): Formal_parameter_listContext {
		let _localctx: Formal_parameter_listContext = new Formal_parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, CSharpParser.RULE_formal_parameter_list);
		let _la: number;
		try {
			this.state = 1610;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1604;
				this.parameter_array();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1605;
				this.fixed_parameters();
				this.state = 1608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.COMMA) {
					{
					this.state = 1606;
					this.match(CSharpParser.COMMA);
					this.state = 1607;
					this.parameter_array();
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
	public fixed_parameters(): Fixed_parametersContext {
		let _localctx: Fixed_parametersContext = new Fixed_parametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, CSharpParser.RULE_fixed_parameters);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1612;
			this.fixed_parameter();
			this.state = 1617;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1613;
					this.match(CSharpParser.COMMA);
					this.state = 1614;
					this.fixed_parameter();
					}
					}
				}
				this.state = 1619;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fixed_parameter(): Fixed_parameterContext {
		let _localctx: Fixed_parameterContext = new Fixed_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, CSharpParser.RULE_fixed_parameter);
		let _la: number;
		try {
			this.state = 1628;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1621;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.OPEN_BRACKET) {
					{
					this.state = 1620;
					this.attributes();
					}
				}

				this.state = 1624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CSharpParser.OUT - 71)) | (1 << (CSharpParser.REF - 71)) | (1 << (CSharpParser.THIS - 71)))) !== 0)) {
					{
					this.state = 1623;
					this.parameter_modifier();
					}
				}

				this.state = 1626;
				this.arg_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1627;
				this.match(CSharpParser.ARGLIST);
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
	public parameter_modifier(): Parameter_modifierContext {
		let _localctx: Parameter_modifierContext = new Parameter_modifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, CSharpParser.RULE_parameter_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1630;
			_la = this._input.LA(1);
			if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CSharpParser.OUT - 71)) | (1 << (CSharpParser.REF - 71)) | (1 << (CSharpParser.THIS - 71)))) !== 0))) {
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
	public parameter_array(): Parameter_arrayContext {
		let _localctx: Parameter_arrayContext = new Parameter_arrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, CSharpParser.RULE_parameter_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1633;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1632;
				this.attributes();
				}
			}

			this.state = 1635;
			this.match(CSharpParser.PARAMS);
			this.state = 1636;
			this.array_type();
			this.state = 1637;
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
	public accessor_declarations(): Accessor_declarationsContext {
		let _localctx: Accessor_declarationsContext = new Accessor_declarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, CSharpParser.RULE_accessor_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1640;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1639;
				_localctx._attrs = this.attributes();
				}
			}

			this.state = 1643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (CSharpParser.INTERNAL - 56)) | (1 << (CSharpParser.PRIVATE - 56)) | (1 << (CSharpParser.PROTECTED - 56)))) !== 0)) {
				{
				this.state = 1642;
				_localctx._mods = this.accessor_modifier();
				}
			}

			this.state = 1655;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.GET:
				{
				this.state = 1645;
				this.match(CSharpParser.GET);
				this.state = 1646;
				this.accessor_body();
				this.state = 1648;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (CSharpParser.INTERNAL - 56)) | (1 << (CSharpParser.PRIVATE - 56)) | (1 << (CSharpParser.PROTECTED - 56)) | (1 << (CSharpParser.SET - 56)))) !== 0) || _la === CSharpParser.OPEN_BRACKET) {
					{
					this.state = 1647;
					this.set_accessor_declaration();
					}
				}

				}
				break;
			case CSharpParser.SET:
				{
				this.state = 1650;
				this.match(CSharpParser.SET);
				this.state = 1651;
				this.accessor_body();
				this.state = 1653;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CSharpParser.GET - 48)) | (1 << (CSharpParser.INTERNAL - 48)) | (1 << (CSharpParser.PRIVATE - 48)) | (1 << (CSharpParser.PROTECTED - 48)))) !== 0) || _la === CSharpParser.OPEN_BRACKET) {
					{
					this.state = 1652;
					this.get_accessor_declaration();
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
	public get_accessor_declaration(): Get_accessor_declarationContext {
		let _localctx: Get_accessor_declarationContext = new Get_accessor_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, CSharpParser.RULE_get_accessor_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1658;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1657;
				this.attributes();
				}
			}

			this.state = 1661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (CSharpParser.INTERNAL - 56)) | (1 << (CSharpParser.PRIVATE - 56)) | (1 << (CSharpParser.PROTECTED - 56)))) !== 0)) {
				{
				this.state = 1660;
				this.accessor_modifier();
				}
			}

			this.state = 1663;
			this.match(CSharpParser.GET);
			this.state = 1664;
			this.accessor_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public set_accessor_declaration(): Set_accessor_declarationContext {
		let _localctx: Set_accessor_declarationContext = new Set_accessor_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, CSharpParser.RULE_set_accessor_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1667;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1666;
				this.attributes();
				}
			}

			this.state = 1670;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (CSharpParser.INTERNAL - 56)) | (1 << (CSharpParser.PRIVATE - 56)) | (1 << (CSharpParser.PROTECTED - 56)))) !== 0)) {
				{
				this.state = 1669;
				this.accessor_modifier();
				}
			}

			this.state = 1672;
			this.match(CSharpParser.SET);
			this.state = 1673;
			this.accessor_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public accessor_modifier(): Accessor_modifierContext {
		let _localctx: Accessor_modifierContext = new Accessor_modifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, CSharpParser.RULE_accessor_modifier);
		try {
			this.state = 1682;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1675;
				this.match(CSharpParser.PROTECTED);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1676;
				this.match(CSharpParser.INTERNAL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1677;
				this.match(CSharpParser.PRIVATE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1678;
				this.match(CSharpParser.PROTECTED);
				this.state = 1679;
				this.match(CSharpParser.INTERNAL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1680;
				this.match(CSharpParser.INTERNAL);
				this.state = 1681;
				this.match(CSharpParser.PROTECTED);
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
	public accessor_body(): Accessor_bodyContext {
		let _localctx: Accessor_bodyContext = new Accessor_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, CSharpParser.RULE_accessor_body);
		try {
			this.state = 1686;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1684;
				this.block();
				}
				break;
			case CSharpParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1685;
				this.match(CSharpParser.SEMICOLON);
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
	public event_accessor_declarations(): Event_accessor_declarationsContext {
		let _localctx: Event_accessor_declarationsContext = new Event_accessor_declarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, CSharpParser.RULE_event_accessor_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1689;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1688;
				this.attributes();
				}
			}

			this.state = 1699;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
				{
				this.state = 1691;
				this.match(CSharpParser.ADD);
				this.state = 1692;
				this.block();
				this.state = 1693;
				this.remove_accessor_declaration();
				}
				break;
			case CSharpParser.REMOVE:
				{
				this.state = 1695;
				this.match(CSharpParser.REMOVE);
				this.state = 1696;
				this.block();
				this.state = 1697;
				this.add_accessor_declaration();
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
	public add_accessor_declaration(): Add_accessor_declarationContext {
		let _localctx: Add_accessor_declarationContext = new Add_accessor_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, CSharpParser.RULE_add_accessor_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1701;
				this.attributes();
				}
			}

			this.state = 1704;
			this.match(CSharpParser.ADD);
			this.state = 1705;
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
	public remove_accessor_declaration(): Remove_accessor_declarationContext {
		let _localctx: Remove_accessor_declarationContext = new Remove_accessor_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, CSharpParser.RULE_remove_accessor_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1707;
				this.attributes();
				}
			}

			this.state = 1710;
			this.match(CSharpParser.REMOVE);
			this.state = 1711;
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
	public overloadable_operator(): Overloadable_operatorContext {
		let _localctx: Overloadable_operatorContext = new Overloadable_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, CSharpParser.RULE_overloadable_operator);
		try {
			this.state = 1735;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1713;
				this.match(CSharpParser.PLUS);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1714;
				this.match(CSharpParser.MINUS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1715;
				this.match(CSharpParser.BANG);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1716;
				this.match(CSharpParser.TILDE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1717;
				this.match(CSharpParser.OP_INC);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1718;
				this.match(CSharpParser.OP_DEC);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1719;
				this.match(CSharpParser.TRUE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1720;
				this.match(CSharpParser.FALSE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1721;
				this.match(CSharpParser.STAR);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1722;
				this.match(CSharpParser.DIV);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1723;
				this.match(CSharpParser.PERCENT);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1724;
				this.match(CSharpParser.AMP);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1725;
				this.match(CSharpParser.BITWISE_OR);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1726;
				this.match(CSharpParser.CARET);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1727;
				this.match(CSharpParser.OP_LEFT_SHIFT);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1728;
				this.right_shift();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1729;
				this.match(CSharpParser.OP_EQ);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1730;
				this.match(CSharpParser.OP_NE);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1731;
				this.match(CSharpParser.GT);
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1732;
				this.match(CSharpParser.LT);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1733;
				this.match(CSharpParser.OP_GE);
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1734;
				this.match(CSharpParser.OP_LE);
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
	public conversion_operator_declarator(): Conversion_operator_declaratorContext {
		let _localctx: Conversion_operator_declaratorContext = new Conversion_operator_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, CSharpParser.RULE_conversion_operator_declarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1737;
			_la = this._input.LA(1);
			if (!(_la === CSharpParser.EXPLICIT || _la === CSharpParser.IMPLICIT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1738;
			this.match(CSharpParser.OPERATOR);
			this.state = 1739;
			this.type_();
			this.state = 1740;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 1741;
			this.arg_declaration();
			this.state = 1742;
			this.match(CSharpParser.CLOSE_PARENS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructor_initializer(): Constructor_initializerContext {
		let _localctx: Constructor_initializerContext = new Constructor_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, CSharpParser.RULE_constructor_initializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1744;
			this.match(CSharpParser.COLON);
			this.state = 1745;
			_la = this._input.LA(1);
			if (!(_la === CSharpParser.BASE || _la === CSharpParser.THIS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1746;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 1748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FALSE - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.NULL - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.OUT - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.REF - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.SIZEOF - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.THIS - 65)) | (1 << (CSharpParser.TRUE - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CSharpParser.TYPEOF - 97)) | (1 << (CSharpParser.UINT - 97)) | (1 << (CSharpParser.ULONG - 97)) | (1 << (CSharpParser.UNCHECKED - 97)) | (1 << (CSharpParser.USHORT - 97)) | (1 << (CSharpParser.VAR - 97)) | (1 << (CSharpParser.VOID - 97)) | (1 << (CSharpParser.WHEN - 97)) | (1 << (CSharpParser.WHERE - 97)) | (1 << (CSharpParser.YIELD - 97)) | (1 << (CSharpParser.IDENTIFIER - 97)) | (1 << (CSharpParser.LITERAL_ACCESS - 97)) | (1 << (CSharpParser.INTEGER_LITERAL - 97)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 97)) | (1 << (CSharpParser.REAL_LITERAL - 97)) | (1 << (CSharpParser.CHARACTER_LITERAL - 97)) | (1 << (CSharpParser.REGULAR_STRING - 97)) | (1 << (CSharpParser.VERBATIUM_STRING - 97)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 97)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 97)) | (1 << (CSharpParser.OPEN_PARENS - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (CSharpParser.PLUS - 132)) | (1 << (CSharpParser.MINUS - 132)) | (1 << (CSharpParser.STAR - 132)) | (1 << (CSharpParser.AMP - 132)) | (1 << (CSharpParser.BANG - 132)) | (1 << (CSharpParser.TILDE - 132)) | (1 << (CSharpParser.OP_INC - 132)) | (1 << (CSharpParser.OP_DEC - 132)))) !== 0)) {
				{
				this.state = 1747;
				this.argument_list();
				}
			}

			this.state = 1750;
			this.match(CSharpParser.CLOSE_PARENS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, CSharpParser.RULE_body);
		try {
			this.state = 1754;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1752;
				this.block();
				}
				break;
			case CSharpParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1753;
				this.match(CSharpParser.SEMICOLON);
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
	public struct_interfaces(): Struct_interfacesContext {
		let _localctx: Struct_interfacesContext = new Struct_interfacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, CSharpParser.RULE_struct_interfaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1756;
			this.match(CSharpParser.COLON);
			this.state = 1757;
			this.interface_type_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 284, CSharpParser.RULE_struct_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1759;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 1763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ABSTRACT) | (1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CLASS) | (1 << CSharpParser.CONST) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.ENUM - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.EVENT - 33)) | (1 << (CSharpParser.EXPLICIT - 33)) | (1 << (CSharpParser.EXTERN - 33)) | (1 << (CSharpParser.FIXED - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.IMPLICIT - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTERFACE - 33)) | (1 << (CSharpParser.INTERNAL - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.OVERRIDE - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.PRIVATE - 65)) | (1 << (CSharpParser.PROTECTED - 65)) | (1 << (CSharpParser.PUBLIC - 65)) | (1 << (CSharpParser.READONLY - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SEALED - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.STATIC - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.STRUCT - 65)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (CSharpParser.UINT - 98)) | (1 << (CSharpParser.ULONG - 98)) | (1 << (CSharpParser.UNSAFE - 98)) | (1 << (CSharpParser.USHORT - 98)) | (1 << (CSharpParser.VAR - 98)) | (1 << (CSharpParser.VIRTUAL - 98)) | (1 << (CSharpParser.VOID - 98)) | (1 << (CSharpParser.VOLATILE - 98)) | (1 << (CSharpParser.WHEN - 98)) | (1 << (CSharpParser.WHERE - 98)) | (1 << (CSharpParser.YIELD - 98)) | (1 << (CSharpParser.IDENTIFIER - 98)) | (1 << (CSharpParser.OPEN_BRACKET - 98)))) !== 0)) {
				{
				{
				this.state = 1760;
				this.struct_member_declaration();
				}
				}
				this.state = 1765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1766;
			this.match(CSharpParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public struct_member_declaration(): Struct_member_declarationContext {
		let _localctx: Struct_member_declarationContext = new Struct_member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, CSharpParser.RULE_struct_member_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1769;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1768;
				this.attributes();
				}
			}

			this.state = 1772;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				{
				this.state = 1771;
				this.all_member_modifiers();
				}
				break;
			}
			this.state = 1784;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CLASS:
			case CSharpParser.CONST:
			case CSharpParser.DECIMAL:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.ENUM:
			case CSharpParser.EQUALS:
			case CSharpParser.EVENT:
			case CSharpParser.EXPLICIT:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.IMPLICIT:
			case CSharpParser.INT:
			case CSharpParser.INTERFACE:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.STRING:
			case CSharpParser.STRUCT:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.VOID:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
				{
				this.state = 1774;
				this.common_member_declaration();
				}
				break;
			case CSharpParser.FIXED:
				{
				this.state = 1775;
				this.match(CSharpParser.FIXED);
				this.state = 1776;
				this.type_();
				this.state = 1778;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1777;
					this.fixed_size_buffer_declarator();
					}
					}
					this.state = 1780;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BY) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CSharpParser.DYNAMIC - 34)) | (1 << (CSharpParser.EQUALS - 34)) | (1 << (CSharpParser.FROM - 34)) | (1 << (CSharpParser.GET - 34)) | (1 << (CSharpParser.GROUP - 34)) | (1 << (CSharpParser.INTO - 34)) | (1 << (CSharpParser.JOIN - 34)) | (1 << (CSharpParser.LET - 34)) | (1 << (CSharpParser.NAMEOF - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (CSharpParser.ON - 68)) | (1 << (CSharpParser.ORDERBY - 68)) | (1 << (CSharpParser.PARTIAL - 68)) | (1 << (CSharpParser.REMOVE - 68)) | (1 << (CSharpParser.SELECT - 68)) | (1 << (CSharpParser.SET - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (CSharpParser.VAR - 104)) | (1 << (CSharpParser.WHEN - 104)) | (1 << (CSharpParser.WHERE - 104)) | (1 << (CSharpParser.YIELD - 104)) | (1 << (CSharpParser.IDENTIFIER - 104)))) !== 0));
				this.state = 1782;
				this.match(CSharpParser.SEMICOLON);
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
	public array_type(): Array_typeContext {
		let _localctx: Array_typeContext = new Array_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, CSharpParser.RULE_array_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1786;
			this.base_type();
			this.state = 1794;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1790;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CSharpParser.STAR || _la === CSharpParser.INTERR) {
					{
					{
					this.state = 1787;
					_la = this._input.LA(1);
					if (!(_la === CSharpParser.STAR || _la === CSharpParser.INTERR)) {
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
					this.state = 1792;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1793;
				this.rank_specifier();
				}
				}
				this.state = 1796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (CSharpParser.OPEN_BRACKET - 124)) | (1 << (CSharpParser.STAR - 124)) | (1 << (CSharpParser.INTERR - 124)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rank_specifier(): Rank_specifierContext {
		let _localctx: Rank_specifierContext = new Rank_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, CSharpParser.RULE_rank_specifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1798;
			this.match(CSharpParser.OPEN_BRACKET);
			this.state = 1802;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1799;
				this.match(CSharpParser.COMMA);
				}
				}
				this.state = 1804;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1805;
			this.match(CSharpParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array_initializer(): Array_initializerContext {
		let _localctx: Array_initializerContext = new Array_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, CSharpParser.RULE_array_initializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1807;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 1819;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FALSE - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.NULL - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.SIZEOF - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.THIS - 65)) | (1 << (CSharpParser.TRUE - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CSharpParser.TYPEOF - 97)) | (1 << (CSharpParser.UINT - 97)) | (1 << (CSharpParser.ULONG - 97)) | (1 << (CSharpParser.UNCHECKED - 97)) | (1 << (CSharpParser.USHORT - 97)) | (1 << (CSharpParser.VAR - 97)) | (1 << (CSharpParser.WHEN - 97)) | (1 << (CSharpParser.WHERE - 97)) | (1 << (CSharpParser.YIELD - 97)) | (1 << (CSharpParser.IDENTIFIER - 97)) | (1 << (CSharpParser.LITERAL_ACCESS - 97)) | (1 << (CSharpParser.INTEGER_LITERAL - 97)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 97)) | (1 << (CSharpParser.REAL_LITERAL - 97)) | (1 << (CSharpParser.CHARACTER_LITERAL - 97)) | (1 << (CSharpParser.REGULAR_STRING - 97)) | (1 << (CSharpParser.VERBATIUM_STRING - 97)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 97)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 97)) | (1 << (CSharpParser.OPEN_BRACE - 97)) | (1 << (CSharpParser.OPEN_PARENS - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (CSharpParser.PLUS - 132)) | (1 << (CSharpParser.MINUS - 132)) | (1 << (CSharpParser.STAR - 132)) | (1 << (CSharpParser.AMP - 132)) | (1 << (CSharpParser.BANG - 132)) | (1 << (CSharpParser.TILDE - 132)) | (1 << (CSharpParser.OP_INC - 132)) | (1 << (CSharpParser.OP_DEC - 132)))) !== 0)) {
				{
				this.state = 1808;
				this.variable_initializer();
				this.state = 1813;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 205, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1809;
						this.match(CSharpParser.COMMA);
						this.state = 1810;
						this.variable_initializer();
						}
						}
					}
					this.state = 1815;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 205, this._ctx);
				}
				this.state = 1817;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.COMMA) {
					{
					this.state = 1816;
					this.match(CSharpParser.COMMA);
					}
				}

				}
			}

			this.state = 1821;
			this.match(CSharpParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variant_type_parameter_list(): Variant_type_parameter_listContext {
		let _localctx: Variant_type_parameter_listContext = new Variant_type_parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, CSharpParser.RULE_variant_type_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1823;
			this.match(CSharpParser.LT);
			this.state = 1824;
			this.variant_type_parameter();
			this.state = 1829;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1825;
				this.match(CSharpParser.COMMA);
				this.state = 1826;
				this.variant_type_parameter();
				}
				}
				this.state = 1831;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1832;
			this.match(CSharpParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variant_type_parameter(): Variant_type_parameterContext {
		let _localctx: Variant_type_parameterContext = new Variant_type_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, CSharpParser.RULE_variant_type_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1835;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1834;
				this.attributes();
				}
			}

			this.state = 1838;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.IN || _la === CSharpParser.OUT) {
				{
				this.state = 1837;
				this.variance_annotation();
				}
			}

			this.state = 1840;
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
	public variance_annotation(): Variance_annotationContext {
		let _localctx: Variance_annotationContext = new Variance_annotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, CSharpParser.RULE_variance_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1842;
			_la = this._input.LA(1);
			if (!(_la === CSharpParser.IN || _la === CSharpParser.OUT)) {
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
	public interface_base(): Interface_baseContext {
		let _localctx: Interface_baseContext = new Interface_baseContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, CSharpParser.RULE_interface_base);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1844;
			this.match(CSharpParser.COLON);
			this.state = 1845;
			this.interface_type_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 302, CSharpParser.RULE_interface_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1847;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 1851;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.EVENT - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.STRING - 65)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (CSharpParser.UINT - 98)) | (1 << (CSharpParser.ULONG - 98)) | (1 << (CSharpParser.UNSAFE - 98)) | (1 << (CSharpParser.USHORT - 98)) | (1 << (CSharpParser.VAR - 98)) | (1 << (CSharpParser.VOID - 98)) | (1 << (CSharpParser.WHEN - 98)) | (1 << (CSharpParser.WHERE - 98)) | (1 << (CSharpParser.YIELD - 98)) | (1 << (CSharpParser.IDENTIFIER - 98)) | (1 << (CSharpParser.OPEN_BRACKET - 98)))) !== 0)) {
				{
				{
				this.state = 1848;
				this.interface_member_declaration();
				}
				}
				this.state = 1853;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1854;
			this.match(CSharpParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interface_member_declaration(): Interface_member_declarationContext {
		let _localctx: Interface_member_declarationContext = new Interface_member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, CSharpParser.RULE_interface_member_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1857;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1856;
				this.attributes();
				}
			}

			this.state = 1860;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.NEW) {
				{
				this.state = 1859;
				this.match(CSharpParser.NEW);
				}
			}

			this.state = 1918;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 223, this._ctx) ) {
			case 1:
				{
				this.state = 1863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.UNSAFE) {
					{
					this.state = 1862;
					this.match(CSharpParser.UNSAFE);
					}
				}

				this.state = 1865;
				this.type_();
				this.state = 1893;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 218, this._ctx) ) {
				case 1:
					{
					this.state = 1866;
					this.identifier();
					this.state = 1868;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CSharpParser.LT) {
						{
						this.state = 1867;
						this.type_parameter_list();
						}
					}

					this.state = 1870;
					this.match(CSharpParser.OPEN_PARENS);
					this.state = 1872;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CSharpParser.OBJECT - 67)) | (1 << (CSharpParser.ON - 67)) | (1 << (CSharpParser.ORDERBY - 67)) | (1 << (CSharpParser.OUT - 67)) | (1 << (CSharpParser.PARAMS - 67)) | (1 << (CSharpParser.PARTIAL - 67)) | (1 << (CSharpParser.REF - 67)) | (1 << (CSharpParser.REMOVE - 67)) | (1 << (CSharpParser.SBYTE - 67)) | (1 << (CSharpParser.SELECT - 67)) | (1 << (CSharpParser.SET - 67)) | (1 << (CSharpParser.SHORT - 67)) | (1 << (CSharpParser.STRING - 67)) | (1 << (CSharpParser.THIS - 67)) | (1 << (CSharpParser.UINT - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_BRACKET - 99)))) !== 0)) {
						{
						this.state = 1871;
						this.formal_parameter_list();
						}
					}

					this.state = 1874;
					this.match(CSharpParser.CLOSE_PARENS);
					this.state = 1876;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CSharpParser.WHERE) {
						{
						this.state = 1875;
						this.type_parameter_constraints_clauses();
						}
					}

					this.state = 1878;
					this.match(CSharpParser.SEMICOLON);
					}
					break;

				case 2:
					{
					this.state = 1880;
					this.identifier();
					this.state = 1881;
					this.match(CSharpParser.OPEN_BRACE);
					this.state = 1882;
					this.interface_accessors();
					this.state = 1883;
					this.match(CSharpParser.CLOSE_BRACE);
					}
					break;

				case 3:
					{
					this.state = 1885;
					this.match(CSharpParser.THIS);
					this.state = 1886;
					this.match(CSharpParser.OPEN_BRACKET);
					this.state = 1887;
					this.formal_parameter_list();
					this.state = 1888;
					this.match(CSharpParser.CLOSE_BRACKET);
					this.state = 1889;
					this.match(CSharpParser.OPEN_BRACE);
					this.state = 1890;
					this.interface_accessors();
					this.state = 1891;
					this.match(CSharpParser.CLOSE_BRACE);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 1896;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.UNSAFE) {
					{
					this.state = 1895;
					this.match(CSharpParser.UNSAFE);
					}
				}

				this.state = 1898;
				this.match(CSharpParser.VOID);
				this.state = 1899;
				this.identifier();
				this.state = 1901;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.LT) {
					{
					this.state = 1900;
					this.type_parameter_list();
					}
				}

				this.state = 1903;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CSharpParser.OBJECT - 67)) | (1 << (CSharpParser.ON - 67)) | (1 << (CSharpParser.ORDERBY - 67)) | (1 << (CSharpParser.OUT - 67)) | (1 << (CSharpParser.PARAMS - 67)) | (1 << (CSharpParser.PARTIAL - 67)) | (1 << (CSharpParser.REF - 67)) | (1 << (CSharpParser.REMOVE - 67)) | (1 << (CSharpParser.SBYTE - 67)) | (1 << (CSharpParser.SELECT - 67)) | (1 << (CSharpParser.SET - 67)) | (1 << (CSharpParser.SHORT - 67)) | (1 << (CSharpParser.STRING - 67)) | (1 << (CSharpParser.THIS - 67)) | (1 << (CSharpParser.UINT - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_BRACKET - 99)))) !== 0)) {
					{
					this.state = 1904;
					this.formal_parameter_list();
					}
				}

				this.state = 1907;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1909;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.WHERE) {
					{
					this.state = 1908;
					this.type_parameter_constraints_clauses();
					}
				}

				this.state = 1911;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 3:
				{
				this.state = 1913;
				this.match(CSharpParser.EVENT);
				this.state = 1914;
				this.type_();
				this.state = 1915;
				this.identifier();
				this.state = 1916;
				this.match(CSharpParser.SEMICOLON);
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
	public interface_accessors(): Interface_accessorsContext {
		let _localctx: Interface_accessorsContext = new Interface_accessorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, CSharpParser.RULE_interface_accessors);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1920;
				this.attributes();
				}
			}

			this.state = 1941;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.GET:
				{
				this.state = 1923;
				this.match(CSharpParser.GET);
				this.state = 1924;
				this.match(CSharpParser.SEMICOLON);
				this.state = 1930;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.SET || _la === CSharpParser.OPEN_BRACKET) {
					{
					this.state = 1926;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CSharpParser.OPEN_BRACKET) {
						{
						this.state = 1925;
						this.attributes();
						}
					}

					this.state = 1928;
					this.match(CSharpParser.SET);
					this.state = 1929;
					this.match(CSharpParser.SEMICOLON);
					}
				}

				}
				break;
			case CSharpParser.SET:
				{
				this.state = 1932;
				this.match(CSharpParser.SET);
				this.state = 1933;
				this.match(CSharpParser.SEMICOLON);
				this.state = 1939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.GET || _la === CSharpParser.OPEN_BRACKET) {
					{
					this.state = 1935;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CSharpParser.OPEN_BRACKET) {
						{
						this.state = 1934;
						this.attributes();
						}
					}

					this.state = 1937;
					this.match(CSharpParser.GET);
					this.state = 1938;
					this.match(CSharpParser.SEMICOLON);
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
	public enum_base(): Enum_baseContext {
		let _localctx: Enum_baseContext = new Enum_baseContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, CSharpParser.RULE_enum_base);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1943;
			this.match(CSharpParser.COLON);
			this.state = 1944;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enum_body(): Enum_bodyContext {
		let _localctx: Enum_bodyContext = new Enum_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, CSharpParser.RULE_enum_body);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1946;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 1958;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BY) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CSharpParser.DYNAMIC - 34)) | (1 << (CSharpParser.EQUALS - 34)) | (1 << (CSharpParser.FROM - 34)) | (1 << (CSharpParser.GET - 34)) | (1 << (CSharpParser.GROUP - 34)) | (1 << (CSharpParser.INTO - 34)) | (1 << (CSharpParser.JOIN - 34)) | (1 << (CSharpParser.LET - 34)) | (1 << (CSharpParser.NAMEOF - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (CSharpParser.ON - 68)) | (1 << (CSharpParser.ORDERBY - 68)) | (1 << (CSharpParser.PARTIAL - 68)) | (1 << (CSharpParser.REMOVE - 68)) | (1 << (CSharpParser.SELECT - 68)) | (1 << (CSharpParser.SET - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (CSharpParser.VAR - 104)) | (1 << (CSharpParser.WHEN - 104)) | (1 << (CSharpParser.WHERE - 104)) | (1 << (CSharpParser.YIELD - 104)) | (1 << (CSharpParser.IDENTIFIER - 104)) | (1 << (CSharpParser.OPEN_BRACKET - 104)))) !== 0)) {
				{
				this.state = 1947;
				this.enum_member_declaration();
				this.state = 1952;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 230, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1948;
						this.match(CSharpParser.COMMA);
						this.state = 1949;
						this.enum_member_declaration();
						}
						}
					}
					this.state = 1954;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 230, this._ctx);
				}
				this.state = 1956;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.COMMA) {
					{
					this.state = 1955;
					this.match(CSharpParser.COMMA);
					}
				}

				}
			}

			this.state = 1960;
			this.match(CSharpParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enum_member_declaration(): Enum_member_declarationContext {
		let _localctx: Enum_member_declarationContext = new Enum_member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, CSharpParser.RULE_enum_member_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1962;
				this.attributes();
				}
			}

			this.state = 1965;
			this.identifier();
			this.state = 1968;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.ASSIGNMENT) {
				{
				this.state = 1966;
				this.match(CSharpParser.ASSIGNMENT);
				this.state = 1967;
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
	public global_attribute_section(): Global_attribute_sectionContext {
		let _localctx: Global_attribute_sectionContext = new Global_attribute_sectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, CSharpParser.RULE_global_attribute_section);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1970;
			this.match(CSharpParser.OPEN_BRACKET);
			this.state = 1971;
			this.global_attribute_target();
			this.state = 1972;
			this.match(CSharpParser.COLON);
			this.state = 1973;
			this.attribute_list();
			this.state = 1975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COMMA) {
				{
				this.state = 1974;
				this.match(CSharpParser.COMMA);
				}
			}

			this.state = 1977;
			this.match(CSharpParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public global_attribute_target(): Global_attribute_targetContext {
		let _localctx: Global_attribute_targetContext = new Global_attribute_targetContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, CSharpParser.RULE_global_attribute_target);
		try {
			this.state = 1981;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ABSTRACT:
			case CSharpParser.AS:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BREAK:
			case CSharpParser.BYTE:
			case CSharpParser.CASE:
			case CSharpParser.CATCH:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.CLASS:
			case CSharpParser.CONST:
			case CSharpParser.CONTINUE:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DO:
			case CSharpParser.DOUBLE:
			case CSharpParser.ELSE:
			case CSharpParser.ENUM:
			case CSharpParser.EVENT:
			case CSharpParser.EXPLICIT:
			case CSharpParser.EXTERN:
			case CSharpParser.FALSE:
			case CSharpParser.FINALLY:
			case CSharpParser.FIXED:
			case CSharpParser.FLOAT:
			case CSharpParser.FOR:
			case CSharpParser.FOREACH:
			case CSharpParser.GOTO:
			case CSharpParser.IF:
			case CSharpParser.IMPLICIT:
			case CSharpParser.IN:
			case CSharpParser.INT:
			case CSharpParser.INTERFACE:
			case CSharpParser.INTERNAL:
			case CSharpParser.IS:
			case CSharpParser.LOCK:
			case CSharpParser.LONG:
			case CSharpParser.NAMESPACE:
			case CSharpParser.NEW:
			case CSharpParser.NULL:
			case CSharpParser.OBJECT:
			case CSharpParser.OPERATOR:
			case CSharpParser.OUT:
			case CSharpParser.OVERRIDE:
			case CSharpParser.PARAMS:
			case CSharpParser.PRIVATE:
			case CSharpParser.PROTECTED:
			case CSharpParser.PUBLIC:
			case CSharpParser.READONLY:
			case CSharpParser.REF:
			case CSharpParser.RETURN:
			case CSharpParser.SBYTE:
			case CSharpParser.SEALED:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STACKALLOC:
			case CSharpParser.STATIC:
			case CSharpParser.STRING:
			case CSharpParser.STRUCT:
			case CSharpParser.SWITCH:
			case CSharpParser.THIS:
			case CSharpParser.THROW:
			case CSharpParser.TRUE:
			case CSharpParser.TRY:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.UNSAFE:
			case CSharpParser.USHORT:
			case CSharpParser.USING:
			case CSharpParser.VIRTUAL:
			case CSharpParser.VOID:
			case CSharpParser.VOLATILE:
			case CSharpParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1979;
				this.keyword();
				}
				break;
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BY:
			case CSharpParser.DESCENDING:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.NAMEOF:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1980;
				this.identifier();
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
	public attributes(): AttributesContext {
		let _localctx: AttributesContext = new AttributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, CSharpParser.RULE_attributes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1984;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1983;
				this.attribute_section();
				}
				}
				this.state = 1986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CSharpParser.OPEN_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute_section(): Attribute_sectionContext {
		let _localctx: Attribute_sectionContext = new Attribute_sectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, CSharpParser.RULE_attribute_section);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1988;
			this.match(CSharpParser.OPEN_BRACKET);
			this.state = 1992;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				{
				this.state = 1989;
				this.attribute_target();
				this.state = 1990;
				this.match(CSharpParser.COLON);
				}
				break;
			}
			this.state = 1994;
			this.attribute_list();
			this.state = 1996;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COMMA) {
				{
				this.state = 1995;
				this.match(CSharpParser.COMMA);
				}
			}

			this.state = 1998;
			this.match(CSharpParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute_target(): Attribute_targetContext {
		let _localctx: Attribute_targetContext = new Attribute_targetContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, CSharpParser.RULE_attribute_target);
		try {
			this.state = 2002;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ABSTRACT:
			case CSharpParser.AS:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BREAK:
			case CSharpParser.BYTE:
			case CSharpParser.CASE:
			case CSharpParser.CATCH:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.CLASS:
			case CSharpParser.CONST:
			case CSharpParser.CONTINUE:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DO:
			case CSharpParser.DOUBLE:
			case CSharpParser.ELSE:
			case CSharpParser.ENUM:
			case CSharpParser.EVENT:
			case CSharpParser.EXPLICIT:
			case CSharpParser.EXTERN:
			case CSharpParser.FALSE:
			case CSharpParser.FINALLY:
			case CSharpParser.FIXED:
			case CSharpParser.FLOAT:
			case CSharpParser.FOR:
			case CSharpParser.FOREACH:
			case CSharpParser.GOTO:
			case CSharpParser.IF:
			case CSharpParser.IMPLICIT:
			case CSharpParser.IN:
			case CSharpParser.INT:
			case CSharpParser.INTERFACE:
			case CSharpParser.INTERNAL:
			case CSharpParser.IS:
			case CSharpParser.LOCK:
			case CSharpParser.LONG:
			case CSharpParser.NAMESPACE:
			case CSharpParser.NEW:
			case CSharpParser.NULL:
			case CSharpParser.OBJECT:
			case CSharpParser.OPERATOR:
			case CSharpParser.OUT:
			case CSharpParser.OVERRIDE:
			case CSharpParser.PARAMS:
			case CSharpParser.PRIVATE:
			case CSharpParser.PROTECTED:
			case CSharpParser.PUBLIC:
			case CSharpParser.READONLY:
			case CSharpParser.REF:
			case CSharpParser.RETURN:
			case CSharpParser.SBYTE:
			case CSharpParser.SEALED:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STACKALLOC:
			case CSharpParser.STATIC:
			case CSharpParser.STRING:
			case CSharpParser.STRUCT:
			case CSharpParser.SWITCH:
			case CSharpParser.THIS:
			case CSharpParser.THROW:
			case CSharpParser.TRUE:
			case CSharpParser.TRY:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.UNSAFE:
			case CSharpParser.USHORT:
			case CSharpParser.USING:
			case CSharpParser.VIRTUAL:
			case CSharpParser.VOID:
			case CSharpParser.VOLATILE:
			case CSharpParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2000;
				this.keyword();
				}
				break;
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BY:
			case CSharpParser.DESCENDING:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.NAMEOF:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2001;
				this.identifier();
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
	public attribute_list(): Attribute_listContext {
		let _localctx: Attribute_listContext = new Attribute_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, CSharpParser.RULE_attribute_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2004;
			this.attribute();
			this.state = 2009;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 241, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2005;
					this.match(CSharpParser.COMMA);
					this.state = 2006;
					this.attribute();
					}
					}
				}
				this.state = 2011;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 241, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 326, CSharpParser.RULE_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2012;
			this.namespace_or_type_name();
			this.state = 2025;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_PARENS) {
				{
				this.state = 2013;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 2022;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FALSE - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.NULL - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.SIZEOF - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.THIS - 65)) | (1 << (CSharpParser.TRUE - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CSharpParser.TYPEOF - 97)) | (1 << (CSharpParser.UINT - 97)) | (1 << (CSharpParser.ULONG - 97)) | (1 << (CSharpParser.UNCHECKED - 97)) | (1 << (CSharpParser.USHORT - 97)) | (1 << (CSharpParser.VAR - 97)) | (1 << (CSharpParser.WHEN - 97)) | (1 << (CSharpParser.WHERE - 97)) | (1 << (CSharpParser.YIELD - 97)) | (1 << (CSharpParser.IDENTIFIER - 97)) | (1 << (CSharpParser.LITERAL_ACCESS - 97)) | (1 << (CSharpParser.INTEGER_LITERAL - 97)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 97)) | (1 << (CSharpParser.REAL_LITERAL - 97)) | (1 << (CSharpParser.CHARACTER_LITERAL - 97)) | (1 << (CSharpParser.REGULAR_STRING - 97)) | (1 << (CSharpParser.VERBATIUM_STRING - 97)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 97)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 97)) | (1 << (CSharpParser.OPEN_PARENS - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (CSharpParser.PLUS - 132)) | (1 << (CSharpParser.MINUS - 132)) | (1 << (CSharpParser.STAR - 132)) | (1 << (CSharpParser.AMP - 132)) | (1 << (CSharpParser.BANG - 132)) | (1 << (CSharpParser.TILDE - 132)) | (1 << (CSharpParser.OP_INC - 132)) | (1 << (CSharpParser.OP_DEC - 132)))) !== 0)) {
					{
					this.state = 2014;
					this.attribute_argument();
					this.state = 2019;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CSharpParser.COMMA) {
						{
						{
						this.state = 2015;
						this.match(CSharpParser.COMMA);
						this.state = 2016;
						this.attribute_argument();
						}
						}
						this.state = 2021;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2024;
				this.match(CSharpParser.CLOSE_PARENS);
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
	public attribute_argument(): Attribute_argumentContext {
		let _localctx: Attribute_argumentContext = new Attribute_argumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, CSharpParser.RULE_attribute_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2030;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 245, this._ctx) ) {
			case 1:
				{
				this.state = 2027;
				this.identifier();
				this.state = 2028;
				this.match(CSharpParser.COLON);
				}
				break;
			}
			this.state = 2032;
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
	public pointer_type(): Pointer_typeContext {
		let _localctx: Pointer_typeContext = new Pointer_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, CSharpParser.RULE_pointer_type);
		let _la: number;
		try {
			this.state = 2049;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.DECIMAL:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.STRING:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2036;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.BOOL:
				case CSharpParser.BYTE:
				case CSharpParser.CHAR:
				case CSharpParser.DECIMAL:
				case CSharpParser.DOUBLE:
				case CSharpParser.FLOAT:
				case CSharpParser.INT:
				case CSharpParser.LONG:
				case CSharpParser.SBYTE:
				case CSharpParser.SHORT:
				case CSharpParser.UINT:
				case CSharpParser.ULONG:
				case CSharpParser.USHORT:
					{
					this.state = 2034;
					this.simple_type();
					}
					break;
				case CSharpParser.ADD:
				case CSharpParser.ALIAS:
				case CSharpParser.ARGLIST:
				case CSharpParser.ASCENDING:
				case CSharpParser.ASYNC:
				case CSharpParser.AWAIT:
				case CSharpParser.BY:
				case CSharpParser.DESCENDING:
				case CSharpParser.DYNAMIC:
				case CSharpParser.EQUALS:
				case CSharpParser.FROM:
				case CSharpParser.GET:
				case CSharpParser.GROUP:
				case CSharpParser.INTO:
				case CSharpParser.JOIN:
				case CSharpParser.LET:
				case CSharpParser.NAMEOF:
				case CSharpParser.OBJECT:
				case CSharpParser.ON:
				case CSharpParser.ORDERBY:
				case CSharpParser.PARTIAL:
				case CSharpParser.REMOVE:
				case CSharpParser.SELECT:
				case CSharpParser.SET:
				case CSharpParser.STRING:
				case CSharpParser.VAR:
				case CSharpParser.WHEN:
				case CSharpParser.WHERE:
				case CSharpParser.YIELD:
				case CSharpParser.IDENTIFIER:
					{
					this.state = 2035;
					this.class_type();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2042;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CSharpParser.OPEN_BRACKET || _la === CSharpParser.INTERR) {
					{
					this.state = 2040;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CSharpParser.OPEN_BRACKET:
						{
						this.state = 2038;
						this.rank_specifier();
						}
						break;
					case CSharpParser.INTERR:
						{
						this.state = 2039;
						this.match(CSharpParser.INTERR);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 2044;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2045;
				this.match(CSharpParser.STAR);
				}
				break;
			case CSharpParser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2047;
				this.match(CSharpParser.VOID);
				this.state = 2048;
				this.match(CSharpParser.STAR);
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
	public fixed_pointer_declarators(): Fixed_pointer_declaratorsContext {
		let _localctx: Fixed_pointer_declaratorsContext = new Fixed_pointer_declaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, CSharpParser.RULE_fixed_pointer_declarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2051;
			this.fixed_pointer_declarator();
			this.state = 2056;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 2052;
				this.match(CSharpParser.COMMA);
				this.state = 2053;
				this.fixed_pointer_declarator();
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
	public fixed_pointer_declarator(): Fixed_pointer_declaratorContext {
		let _localctx: Fixed_pointer_declaratorContext = new Fixed_pointer_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, CSharpParser.RULE_fixed_pointer_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2059;
			this.identifier();
			this.state = 2060;
			this.match(CSharpParser.ASSIGNMENT);
			this.state = 2061;
			this.fixed_pointer_initializer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fixed_pointer_initializer(): Fixed_pointer_initializerContext {
		let _localctx: Fixed_pointer_initializerContext = new Fixed_pointer_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, CSharpParser.RULE_fixed_pointer_initializer);
		try {
			this.state = 2068;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2064;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 251, this._ctx) ) {
				case 1:
					{
					this.state = 2063;
					this.match(CSharpParser.AMP);
					}
					break;
				}
				this.state = 2066;
				this.expression();
				}
				break;
			case CSharpParser.STACKALLOC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2067;
				this.local_variable_initializer_unsafe();
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
	public fixed_size_buffer_declarator(): Fixed_size_buffer_declaratorContext {
		let _localctx: Fixed_size_buffer_declaratorContext = new Fixed_size_buffer_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, CSharpParser.RULE_fixed_size_buffer_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2070;
			this.identifier();
			this.state = 2071;
			this.match(CSharpParser.OPEN_BRACKET);
			this.state = 2072;
			this.expression();
			this.state = 2073;
			this.match(CSharpParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public local_variable_initializer_unsafe(): Local_variable_initializer_unsafeContext {
		let _localctx: Local_variable_initializer_unsafeContext = new Local_variable_initializer_unsafeContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, CSharpParser.RULE_local_variable_initializer_unsafe);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2075;
			this.match(CSharpParser.STACKALLOC);
			this.state = 2076;
			this.type_();
			this.state = 2077;
			this.match(CSharpParser.OPEN_BRACKET);
			this.state = 2078;
			this.expression();
			this.state = 2079;
			this.match(CSharpParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public right_arrow(): Right_arrowContext {
		let _localctx: Right_arrowContext = new Right_arrowContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, CSharpParser.RULE_right_arrow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2081;
			_localctx._first = this.match(CSharpParser.ASSIGNMENT);
			this.state = 2082;
			_localctx._second = this.match(CSharpParser.GT);
			this.state = 2083;
			if (!((_localctx._first != null ? _localctx._first.tokenIndex : 0) + 1 == (_localctx._second != null ? _localctx._second.tokenIndex : 0))) {
				throw new FailedPredicateException(this, "$first.index + 1 == $second.index");
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public right_shift(): Right_shiftContext {
		let _localctx: Right_shiftContext = new Right_shiftContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, CSharpParser.RULE_right_shift);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2085;
			_localctx._first = this.match(CSharpParser.GT);
			this.state = 2086;
			_localctx._second = this.match(CSharpParser.GT);
			this.state = 2087;
			if (!((_localctx._first != null ? _localctx._first.tokenIndex : 0) + 1 == (_localctx._second != null ? _localctx._second.tokenIndex : 0))) {
				throw new FailedPredicateException(this, "$first.index + 1 == $second.index");
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public right_shift_assignment(): Right_shift_assignmentContext {
		let _localctx: Right_shift_assignmentContext = new Right_shift_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, CSharpParser.RULE_right_shift_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2089;
			_localctx._first = this.match(CSharpParser.GT);
			this.state = 2090;
			_localctx._second = this.match(CSharpParser.OP_GE);
			this.state = 2091;
			if (!((_localctx._first != null ? _localctx._first.tokenIndex : 0) + 1 == (_localctx._second != null ? _localctx._second.tokenIndex : 0))) {
				throw new FailedPredicateException(this, "$first.index + 1 == $second.index");
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 348, CSharpParser.RULE_literal);
		try {
			this.state = 2100;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.FALSE:
			case CSharpParser.TRUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2093;
				this.boolean_literal();
				}
				break;
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2094;
				this.string_literal();
				}
				break;
			case CSharpParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2095;
				this.match(CSharpParser.INTEGER_LITERAL);
				}
				break;
			case CSharpParser.HEX_INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2096;
				this.match(CSharpParser.HEX_INTEGER_LITERAL);
				}
				break;
			case CSharpParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2097;
				this.match(CSharpParser.REAL_LITERAL);
				}
				break;
			case CSharpParser.CHARACTER_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2098;
				this.match(CSharpParser.CHARACTER_LITERAL);
				}
				break;
			case CSharpParser.NULL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2099;
				this.match(CSharpParser.NULL);
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
	public boolean_literal(): Boolean_literalContext {
		let _localctx: Boolean_literalContext = new Boolean_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, CSharpParser.RULE_boolean_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2102;
			_la = this._input.LA(1);
			if (!(_la === CSharpParser.FALSE || _la === CSharpParser.TRUE)) {
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
		this.enterRule(_localctx, 352, CSharpParser.RULE_string_literal);
		try {
			this.state = 2108;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2104;
				this.interpolated_regular_string();
				}
				break;
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2105;
				this.interpolated_verbatium_string();
				}
				break;
			case CSharpParser.REGULAR_STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2106;
				this.match(CSharpParser.REGULAR_STRING);
				}
				break;
			case CSharpParser.VERBATIUM_STRING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2107;
				this.match(CSharpParser.VERBATIUM_STRING);
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
	public interpolated_regular_string(): Interpolated_regular_stringContext {
		let _localctx: Interpolated_regular_stringContext = new Interpolated_regular_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, CSharpParser.RULE_interpolated_regular_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2110;
			this.match(CSharpParser.INTERPOLATED_REGULAR_STRING_START);
			this.state = 2114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FALSE - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.NULL - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.SIZEOF - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.THIS - 65)) | (1 << (CSharpParser.TRUE - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CSharpParser.TYPEOF - 97)) | (1 << (CSharpParser.UINT - 97)) | (1 << (CSharpParser.ULONG - 97)) | (1 << (CSharpParser.UNCHECKED - 97)) | (1 << (CSharpParser.USHORT - 97)) | (1 << (CSharpParser.VAR - 97)) | (1 << (CSharpParser.WHEN - 97)) | (1 << (CSharpParser.WHERE - 97)) | (1 << (CSharpParser.YIELD - 97)) | (1 << (CSharpParser.IDENTIFIER - 97)) | (1 << (CSharpParser.LITERAL_ACCESS - 97)) | (1 << (CSharpParser.INTEGER_LITERAL - 97)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 97)) | (1 << (CSharpParser.REAL_LITERAL - 97)) | (1 << (CSharpParser.CHARACTER_LITERAL - 97)) | (1 << (CSharpParser.REGULAR_STRING - 97)) | (1 << (CSharpParser.VERBATIUM_STRING - 97)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 97)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 97)) | (1 << (CSharpParser.OPEN_PARENS - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (CSharpParser.PLUS - 132)) | (1 << (CSharpParser.MINUS - 132)) | (1 << (CSharpParser.STAR - 132)) | (1 << (CSharpParser.AMP - 132)) | (1 << (CSharpParser.BANG - 132)) | (1 << (CSharpParser.TILDE - 132)) | (1 << (CSharpParser.OP_INC - 132)) | (1 << (CSharpParser.OP_DEC - 132)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (CSharpParser.DOUBLE_CURLY_INSIDE - 167)) | (1 << (CSharpParser.REGULAR_CHAR_INSIDE - 167)) | (1 << (CSharpParser.REGULAR_STRING_INSIDE - 167)))) !== 0)) {
				{
				{
				this.state = 2111;
				this.interpolated_regular_string_part();
				}
				}
				this.state = 2116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2117;
			this.match(CSharpParser.DOUBLE_QUOTE_INSIDE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interpolated_verbatium_string(): Interpolated_verbatium_stringContext {
		let _localctx: Interpolated_verbatium_stringContext = new Interpolated_verbatium_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, CSharpParser.RULE_interpolated_verbatium_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2119;
			this.match(CSharpParser.INTERPOLATED_VERBATIUM_STRING_START);
			this.state = 2123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FALSE - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.NULL - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.SIZEOF - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.THIS - 65)) | (1 << (CSharpParser.TRUE - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CSharpParser.TYPEOF - 97)) | (1 << (CSharpParser.UINT - 97)) | (1 << (CSharpParser.ULONG - 97)) | (1 << (CSharpParser.UNCHECKED - 97)) | (1 << (CSharpParser.USHORT - 97)) | (1 << (CSharpParser.VAR - 97)) | (1 << (CSharpParser.WHEN - 97)) | (1 << (CSharpParser.WHERE - 97)) | (1 << (CSharpParser.YIELD - 97)) | (1 << (CSharpParser.IDENTIFIER - 97)) | (1 << (CSharpParser.LITERAL_ACCESS - 97)) | (1 << (CSharpParser.INTEGER_LITERAL - 97)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 97)) | (1 << (CSharpParser.REAL_LITERAL - 97)) | (1 << (CSharpParser.CHARACTER_LITERAL - 97)) | (1 << (CSharpParser.REGULAR_STRING - 97)) | (1 << (CSharpParser.VERBATIUM_STRING - 97)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 97)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 97)) | (1 << (CSharpParser.OPEN_PARENS - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (CSharpParser.PLUS - 132)) | (1 << (CSharpParser.MINUS - 132)) | (1 << (CSharpParser.STAR - 132)) | (1 << (CSharpParser.AMP - 132)) | (1 << (CSharpParser.BANG - 132)) | (1 << (CSharpParser.TILDE - 132)) | (1 << (CSharpParser.OP_INC - 132)) | (1 << (CSharpParser.OP_DEC - 132)))) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & ((1 << (CSharpParser.DOUBLE_CURLY_INSIDE - 167)) | (1 << (CSharpParser.VERBATIUM_DOUBLE_QUOTE_INSIDE - 167)) | (1 << (CSharpParser.VERBATIUM_INSIDE_STRING - 167)))) !== 0)) {
				{
				{
				this.state = 2120;
				this.interpolated_verbatium_string_part();
				}
				}
				this.state = 2125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2126;
			this.match(CSharpParser.DOUBLE_QUOTE_INSIDE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interpolated_regular_string_part(): Interpolated_regular_string_partContext {
		let _localctx: Interpolated_regular_string_partContext = new Interpolated_regular_string_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, CSharpParser.RULE_interpolated_regular_string_part);
		try {
			this.state = 2132;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2128;
				this.interpolated_string_expression();
				}
				break;
			case CSharpParser.DOUBLE_CURLY_INSIDE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2129;
				this.match(CSharpParser.DOUBLE_CURLY_INSIDE);
				}
				break;
			case CSharpParser.REGULAR_CHAR_INSIDE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2130;
				this.match(CSharpParser.REGULAR_CHAR_INSIDE);
				}
				break;
			case CSharpParser.REGULAR_STRING_INSIDE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2131;
				this.match(CSharpParser.REGULAR_STRING_INSIDE);
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
	public interpolated_verbatium_string_part(): Interpolated_verbatium_string_partContext {
		let _localctx: Interpolated_verbatium_string_partContext = new Interpolated_verbatium_string_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, CSharpParser.RULE_interpolated_verbatium_string_part);
		try {
			this.state = 2138;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2134;
				this.interpolated_string_expression();
				}
				break;
			case CSharpParser.DOUBLE_CURLY_INSIDE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2135;
				this.match(CSharpParser.DOUBLE_CURLY_INSIDE);
				}
				break;
			case CSharpParser.VERBATIUM_DOUBLE_QUOTE_INSIDE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2136;
				this.match(CSharpParser.VERBATIUM_DOUBLE_QUOTE_INSIDE);
				}
				break;
			case CSharpParser.VERBATIUM_INSIDE_STRING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2137;
				this.match(CSharpParser.VERBATIUM_INSIDE_STRING);
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
	public interpolated_string_expression(): Interpolated_string_expressionContext {
		let _localctx: Interpolated_string_expressionContext = new Interpolated_string_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, CSharpParser.RULE_interpolated_string_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2140;
			this.expression();
			this.state = 2145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 2141;
				this.match(CSharpParser.COMMA);
				this.state = 2142;
				this.expression();
				}
				}
				this.state = 2147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COLON) {
				{
				this.state = 2148;
				this.match(CSharpParser.COLON);
				this.state = 2150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2149;
					this.match(CSharpParser.FORMAT_STRING);
					}
					}
					this.state = 2152;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CSharpParser.FORMAT_STRING);
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
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, CSharpParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2156;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ABSTRACT) | (1 << CSharpParser.AS) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BREAK) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CASE) | (1 << CSharpParser.CATCH) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.CLASS) | (1 << CSharpParser.CONST) | (1 << CSharpParser.CONTINUE) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DO - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.ELSE - 32)) | (1 << (CSharpParser.ENUM - 32)) | (1 << (CSharpParser.EVENT - 32)) | (1 << (CSharpParser.EXPLICIT - 32)) | (1 << (CSharpParser.EXTERN - 32)) | (1 << (CSharpParser.FALSE - 32)) | (1 << (CSharpParser.FINALLY - 32)) | (1 << (CSharpParser.FIXED - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FOR - 32)) | (1 << (CSharpParser.FOREACH - 32)) | (1 << (CSharpParser.GOTO - 32)) | (1 << (CSharpParser.IF - 32)) | (1 << (CSharpParser.IMPLICIT - 32)) | (1 << (CSharpParser.IN - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTERFACE - 32)) | (1 << (CSharpParser.INTERNAL - 32)) | (1 << (CSharpParser.IS - 32)) | (1 << (CSharpParser.LOCK - 32)) | (1 << (CSharpParser.LONG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMESPACE - 64)) | (1 << (CSharpParser.NEW - 64)) | (1 << (CSharpParser.NULL - 64)) | (1 << (CSharpParser.OBJECT - 64)) | (1 << (CSharpParser.OPERATOR - 64)) | (1 << (CSharpParser.OUT - 64)) | (1 << (CSharpParser.OVERRIDE - 64)) | (1 << (CSharpParser.PARAMS - 64)) | (1 << (CSharpParser.PRIVATE - 64)) | (1 << (CSharpParser.PROTECTED - 64)) | (1 << (CSharpParser.PUBLIC - 64)) | (1 << (CSharpParser.READONLY - 64)) | (1 << (CSharpParser.REF - 64)) | (1 << (CSharpParser.RETURN - 64)) | (1 << (CSharpParser.SBYTE - 64)) | (1 << (CSharpParser.SEALED - 64)) | (1 << (CSharpParser.SHORT - 64)) | (1 << (CSharpParser.SIZEOF - 64)) | (1 << (CSharpParser.STACKALLOC - 64)) | (1 << (CSharpParser.STATIC - 64)) | (1 << (CSharpParser.STRING - 64)) | (1 << (CSharpParser.STRUCT - 64)) | (1 << (CSharpParser.SWITCH - 64)) | (1 << (CSharpParser.THIS - 64)) | (1 << (CSharpParser.THROW - 64)) | (1 << (CSharpParser.TRUE - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CSharpParser.TRY - 96)) | (1 << (CSharpParser.TYPEOF - 96)) | (1 << (CSharpParser.UINT - 96)) | (1 << (CSharpParser.ULONG - 96)) | (1 << (CSharpParser.UNCHECKED - 96)) | (1 << (CSharpParser.UNSAFE - 96)) | (1 << (CSharpParser.USHORT - 96)) | (1 << (CSharpParser.USING - 96)) | (1 << (CSharpParser.VIRTUAL - 96)) | (1 << (CSharpParser.VOID - 96)) | (1 << (CSharpParser.VOLATILE - 96)) | (1 << (CSharpParser.WHILE - 96)))) !== 0))) {
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
	public class_definition(): Class_definitionContext {
		let _localctx: Class_definitionContext = new Class_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, CSharpParser.RULE_class_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2158;
			this.match(CSharpParser.CLASS);
			this.state = 2159;
			this.identifier();
			this.state = 2161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.LT) {
				{
				this.state = 2160;
				this.type_parameter_list();
				}
			}

			this.state = 2164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COLON) {
				{
				this.state = 2163;
				this.class_base();
				}
			}

			this.state = 2167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.WHERE) {
				{
				this.state = 2166;
				this.type_parameter_constraints_clauses();
				}
			}

			this.state = 2169;
			this.class_body();
			this.state = 2171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.SEMICOLON) {
				{
				this.state = 2170;
				this.match(CSharpParser.SEMICOLON);
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
	public struct_definition(): Struct_definitionContext {
		let _localctx: Struct_definitionContext = new Struct_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, CSharpParser.RULE_struct_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2173;
			this.match(CSharpParser.STRUCT);
			this.state = 2174;
			this.identifier();
			this.state = 2176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.LT) {
				{
				this.state = 2175;
				this.type_parameter_list();
				}
			}

			this.state = 2179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COLON) {
				{
				this.state = 2178;
				this.struct_interfaces();
				}
			}

			this.state = 2182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.WHERE) {
				{
				this.state = 2181;
				this.type_parameter_constraints_clauses();
				}
			}

			this.state = 2184;
			this.struct_body();
			this.state = 2186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.SEMICOLON) {
				{
				this.state = 2185;
				this.match(CSharpParser.SEMICOLON);
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
	public interface_definition(): Interface_definitionContext {
		let _localctx: Interface_definitionContext = new Interface_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, CSharpParser.RULE_interface_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2188;
			this.match(CSharpParser.INTERFACE);
			this.state = 2189;
			this.identifier();
			this.state = 2191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.LT) {
				{
				this.state = 2190;
				this.variant_type_parameter_list();
				}
			}

			this.state = 2194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COLON) {
				{
				this.state = 2193;
				this.interface_base();
				}
			}

			this.state = 2197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.WHERE) {
				{
				this.state = 2196;
				this.type_parameter_constraints_clauses();
				}
			}

			this.state = 2199;
			this.interface_body();
			this.state = 2201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.SEMICOLON) {
				{
				this.state = 2200;
				this.match(CSharpParser.SEMICOLON);
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
	public enum_definition(): Enum_definitionContext {
		let _localctx: Enum_definitionContext = new Enum_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, CSharpParser.RULE_enum_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2203;
			this.match(CSharpParser.ENUM);
			this.state = 2204;
			this.identifier();
			this.state = 2206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COLON) {
				{
				this.state = 2205;
				this.enum_base();
				}
			}

			this.state = 2208;
			this.enum_body();
			this.state = 2210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.SEMICOLON) {
				{
				this.state = 2209;
				this.match(CSharpParser.SEMICOLON);
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
	public delegate_definition(): Delegate_definitionContext {
		let _localctx: Delegate_definitionContext = new Delegate_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, CSharpParser.RULE_delegate_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2212;
			this.match(CSharpParser.DELEGATE);
			this.state = 2213;
			this.return_type();
			this.state = 2214;
			this.identifier();
			this.state = 2216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.LT) {
				{
				this.state = 2215;
				this.variant_type_parameter_list();
				}
			}

			this.state = 2218;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 2220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CSharpParser.OBJECT - 67)) | (1 << (CSharpParser.ON - 67)) | (1 << (CSharpParser.ORDERBY - 67)) | (1 << (CSharpParser.OUT - 67)) | (1 << (CSharpParser.PARAMS - 67)) | (1 << (CSharpParser.PARTIAL - 67)) | (1 << (CSharpParser.REF - 67)) | (1 << (CSharpParser.REMOVE - 67)) | (1 << (CSharpParser.SBYTE - 67)) | (1 << (CSharpParser.SELECT - 67)) | (1 << (CSharpParser.SET - 67)) | (1 << (CSharpParser.SHORT - 67)) | (1 << (CSharpParser.STRING - 67)) | (1 << (CSharpParser.THIS - 67)) | (1 << (CSharpParser.UINT - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_BRACKET - 99)))) !== 0)) {
				{
				this.state = 2219;
				this.formal_parameter_list();
				}
			}

			this.state = 2222;
			this.match(CSharpParser.CLOSE_PARENS);
			this.state = 2224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.WHERE) {
				{
				this.state = 2223;
				this.type_parameter_constraints_clauses();
				}
			}

			this.state = 2226;
			this.match(CSharpParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public event_declaration(): Event_declarationContext {
		let _localctx: Event_declarationContext = new Event_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, CSharpParser.RULE_event_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2228;
			this.match(CSharpParser.EVENT);
			this.state = 2229;
			this.type_();
			this.state = 2238;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 279, this._ctx) ) {
			case 1:
				{
				this.state = 2230;
				this.variable_declarators();
				this.state = 2231;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 2:
				{
				this.state = 2233;
				this.member_name();
				this.state = 2234;
				this.match(CSharpParser.OPEN_BRACE);
				this.state = 2235;
				this.event_accessor_declarations();
				this.state = 2236;
				this.match(CSharpParser.CLOSE_BRACE);
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
	public field_declaration(): Field_declarationContext {
		let _localctx: Field_declarationContext = new Field_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, CSharpParser.RULE_field_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2240;
			this.variable_declarators();
			this.state = 2241;
			this.match(CSharpParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public property_declaration(): Property_declarationContext {
		let _localctx: Property_declarationContext = new Property_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, CSharpParser.RULE_property_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2243;
			this.member_name();
			this.state = 2257;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
				{
				this.state = 2244;
				this.match(CSharpParser.OPEN_BRACE);
				this.state = 2245;
				this.accessor_declarations();
				this.state = 2246;
				this.match(CSharpParser.CLOSE_BRACE);
				this.state = 2251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.ASSIGNMENT) {
					{
					this.state = 2247;
					this.match(CSharpParser.ASSIGNMENT);
					this.state = 2248;
					this.variable_initializer();
					this.state = 2249;
					this.match(CSharpParser.SEMICOLON);
					}
				}

				}
				break;
			case CSharpParser.ASSIGNMENT:
				{
				this.state = 2253;
				this.right_arrow();
				this.state = 2254;
				this.expression();
				this.state = 2255;
				this.match(CSharpParser.SEMICOLON);
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
	public constant_declaration(): Constant_declarationContext {
		let _localctx: Constant_declarationContext = new Constant_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, CSharpParser.RULE_constant_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2259;
			this.match(CSharpParser.CONST);
			this.state = 2260;
			this.type_();
			this.state = 2261;
			this.constant_declarators();
			this.state = 2262;
			this.match(CSharpParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexer_declaration(): Indexer_declarationContext {
		let _localctx: Indexer_declarationContext = new Indexer_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, CSharpParser.RULE_indexer_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2264;
			this.match(CSharpParser.THIS);
			this.state = 2265;
			this.match(CSharpParser.OPEN_BRACKET);
			this.state = 2266;
			this.formal_parameter_list();
			this.state = 2267;
			this.match(CSharpParser.CLOSE_BRACKET);
			this.state = 2276;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
				{
				this.state = 2268;
				this.match(CSharpParser.OPEN_BRACE);
				this.state = 2269;
				this.accessor_declarations();
				this.state = 2270;
				this.match(CSharpParser.CLOSE_BRACE);
				}
				break;
			case CSharpParser.ASSIGNMENT:
				{
				this.state = 2272;
				this.right_arrow();
				this.state = 2273;
				this.expression();
				this.state = 2274;
				this.match(CSharpParser.SEMICOLON);
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
	public destructor_definition(): Destructor_definitionContext {
		let _localctx: Destructor_definitionContext = new Destructor_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, CSharpParser.RULE_destructor_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2278;
			this.match(CSharpParser.TILDE);
			this.state = 2279;
			this.identifier();
			this.state = 2280;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 2281;
			this.match(CSharpParser.CLOSE_PARENS);
			this.state = 2282;
			this.body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructor_declaration(): Constructor_declarationContext {
		let _localctx: Constructor_declarationContext = new Constructor_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, CSharpParser.RULE_constructor_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2284;
			this.identifier();
			this.state = 2285;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 2287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CSharpParser.OBJECT - 67)) | (1 << (CSharpParser.ON - 67)) | (1 << (CSharpParser.ORDERBY - 67)) | (1 << (CSharpParser.OUT - 67)) | (1 << (CSharpParser.PARAMS - 67)) | (1 << (CSharpParser.PARTIAL - 67)) | (1 << (CSharpParser.REF - 67)) | (1 << (CSharpParser.REMOVE - 67)) | (1 << (CSharpParser.SBYTE - 67)) | (1 << (CSharpParser.SELECT - 67)) | (1 << (CSharpParser.SET - 67)) | (1 << (CSharpParser.SHORT - 67)) | (1 << (CSharpParser.STRING - 67)) | (1 << (CSharpParser.THIS - 67)) | (1 << (CSharpParser.UINT - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_BRACKET - 99)))) !== 0)) {
				{
				this.state = 2286;
				this.formal_parameter_list();
				}
			}

			this.state = 2289;
			this.match(CSharpParser.CLOSE_PARENS);
			this.state = 2291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COLON) {
				{
				this.state = 2290;
				this.constructor_initializer();
				}
			}

			this.state = 2293;
			this.body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public method_declaration(): Method_declarationContext {
		let _localctx: Method_declarationContext = new Method_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, CSharpParser.RULE_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2295;
			this.method_member_name();
			this.state = 2297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.LT) {
				{
				this.state = 2296;
				this.type_parameter_list();
				}
			}

			this.state = 2299;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 2301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CSharpParser.OBJECT - 67)) | (1 << (CSharpParser.ON - 67)) | (1 << (CSharpParser.ORDERBY - 67)) | (1 << (CSharpParser.OUT - 67)) | (1 << (CSharpParser.PARAMS - 67)) | (1 << (CSharpParser.PARTIAL - 67)) | (1 << (CSharpParser.REF - 67)) | (1 << (CSharpParser.REMOVE - 67)) | (1 << (CSharpParser.SBYTE - 67)) | (1 << (CSharpParser.SELECT - 67)) | (1 << (CSharpParser.SET - 67)) | (1 << (CSharpParser.SHORT - 67)) | (1 << (CSharpParser.STRING - 67)) | (1 << (CSharpParser.THIS - 67)) | (1 << (CSharpParser.UINT - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_BRACKET - 99)))) !== 0)) {
				{
				this.state = 2300;
				this.formal_parameter_list();
				}
			}

			this.state = 2303;
			this.match(CSharpParser.CLOSE_PARENS);
			this.state = 2305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.WHERE) {
				{
				this.state = 2304;
				this.type_parameter_constraints_clauses();
				}
			}

			this.state = 2312;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
			case CSharpParser.SEMICOLON:
				{
				this.state = 2307;
				this.method_body();
				}
				break;
			case CSharpParser.ASSIGNMENT:
				{
				this.state = 2308;
				this.right_arrow();
				this.state = 2309;
				this.expression();
				this.state = 2310;
				this.match(CSharpParser.SEMICOLON);
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
	public method_member_name(): Method_member_nameContext {
		let _localctx: Method_member_nameContext = new Method_member_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, CSharpParser.RULE_method_member_name);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2319;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 289, this._ctx) ) {
			case 1:
				{
				this.state = 2314;
				this.identifier();
				}
				break;

			case 2:
				{
				this.state = 2315;
				this.identifier();
				this.state = 2316;
				this.match(CSharpParser.DOUBLE_COLON);
				this.state = 2317;
				this.identifier();
				}
				break;
			}
			this.state = 2328;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 291, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2322;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CSharpParser.LT) {
						{
						this.state = 2321;
						this.type_argument_list();
						}
					}

					this.state = 2324;
					this.match(CSharpParser.DOT);
					this.state = 2325;
					this.identifier();
					}
					}
				}
				this.state = 2330;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 291, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 394, CSharpParser.RULE_operator_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2331;
			this.match(CSharpParser.OPERATOR);
			this.state = 2332;
			this.overloadable_operator();
			this.state = 2333;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 2334;
			this.arg_declaration();
			this.state = 2337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COMMA) {
				{
				this.state = 2335;
				this.match(CSharpParser.COMMA);
				this.state = 2336;
				this.arg_declaration();
				}
			}

			this.state = 2339;
			this.match(CSharpParser.CLOSE_PARENS);
			this.state = 2345;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
			case CSharpParser.SEMICOLON:
				{
				this.state = 2340;
				this.body();
				}
				break;
			case CSharpParser.ASSIGNMENT:
				{
				this.state = 2341;
				this.right_arrow();
				this.state = 2342;
				this.expression();
				this.state = 2343;
				this.match(CSharpParser.SEMICOLON);
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
	public arg_declaration(): Arg_declarationContext {
		let _localctx: Arg_declarationContext = new Arg_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, CSharpParser.RULE_arg_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2347;
			this.type_();
			this.state = 2348;
			this.identifier();
			this.state = 2351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.ASSIGNMENT) {
				{
				this.state = 2349;
				this.match(CSharpParser.ASSIGNMENT);
				this.state = 2350;
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
	public method_invocation(): Method_invocationContext {
		let _localctx: Method_invocationContext = new Method_invocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 398, CSharpParser.RULE_method_invocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2353;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 2355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FALSE - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.NULL - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.OUT - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.REF - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.SIZEOF - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.THIS - 65)) | (1 << (CSharpParser.TRUE - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CSharpParser.TYPEOF - 97)) | (1 << (CSharpParser.UINT - 97)) | (1 << (CSharpParser.ULONG - 97)) | (1 << (CSharpParser.UNCHECKED - 97)) | (1 << (CSharpParser.USHORT - 97)) | (1 << (CSharpParser.VAR - 97)) | (1 << (CSharpParser.VOID - 97)) | (1 << (CSharpParser.WHEN - 97)) | (1 << (CSharpParser.WHERE - 97)) | (1 << (CSharpParser.YIELD - 97)) | (1 << (CSharpParser.IDENTIFIER - 97)) | (1 << (CSharpParser.LITERAL_ACCESS - 97)) | (1 << (CSharpParser.INTEGER_LITERAL - 97)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 97)) | (1 << (CSharpParser.REAL_LITERAL - 97)) | (1 << (CSharpParser.CHARACTER_LITERAL - 97)) | (1 << (CSharpParser.REGULAR_STRING - 97)) | (1 << (CSharpParser.VERBATIUM_STRING - 97)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 97)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 97)) | (1 << (CSharpParser.OPEN_PARENS - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (CSharpParser.PLUS - 132)) | (1 << (CSharpParser.MINUS - 132)) | (1 << (CSharpParser.STAR - 132)) | (1 << (CSharpParser.AMP - 132)) | (1 << (CSharpParser.BANG - 132)) | (1 << (CSharpParser.TILDE - 132)) | (1 << (CSharpParser.OP_INC - 132)) | (1 << (CSharpParser.OP_DEC - 132)))) !== 0)) {
				{
				this.state = 2354;
				this.argument_list();
				}
			}

			this.state = 2357;
			this.match(CSharpParser.CLOSE_PARENS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public object_creation_expression(): Object_creation_expressionContext {
		let _localctx: Object_creation_expressionContext = new Object_creation_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, CSharpParser.RULE_object_creation_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2359;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 2361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.DYNAMIC - 33)) | (1 << (CSharpParser.EQUALS - 33)) | (1 << (CSharpParser.FALSE - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FROM - 33)) | (1 << (CSharpParser.GET - 33)) | (1 << (CSharpParser.GROUP - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTO - 33)) | (1 << (CSharpParser.JOIN - 33)) | (1 << (CSharpParser.LET - 33)) | (1 << (CSharpParser.LONG - 33)) | (1 << (CSharpParser.NAMEOF - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.NULL - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.ON - 65)) | (1 << (CSharpParser.ORDERBY - 65)) | (1 << (CSharpParser.OUT - 65)) | (1 << (CSharpParser.PARTIAL - 65)) | (1 << (CSharpParser.REF - 65)) | (1 << (CSharpParser.REMOVE - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SELECT - 65)) | (1 << (CSharpParser.SET - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.SIZEOF - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.THIS - 65)) | (1 << (CSharpParser.TRUE - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CSharpParser.TYPEOF - 97)) | (1 << (CSharpParser.UINT - 97)) | (1 << (CSharpParser.ULONG - 97)) | (1 << (CSharpParser.UNCHECKED - 97)) | (1 << (CSharpParser.USHORT - 97)) | (1 << (CSharpParser.VAR - 97)) | (1 << (CSharpParser.VOID - 97)) | (1 << (CSharpParser.WHEN - 97)) | (1 << (CSharpParser.WHERE - 97)) | (1 << (CSharpParser.YIELD - 97)) | (1 << (CSharpParser.IDENTIFIER - 97)) | (1 << (CSharpParser.LITERAL_ACCESS - 97)) | (1 << (CSharpParser.INTEGER_LITERAL - 97)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 97)) | (1 << (CSharpParser.REAL_LITERAL - 97)) | (1 << (CSharpParser.CHARACTER_LITERAL - 97)) | (1 << (CSharpParser.REGULAR_STRING - 97)) | (1 << (CSharpParser.VERBATIUM_STRING - 97)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 97)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 97)) | (1 << (CSharpParser.OPEN_PARENS - 97)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (CSharpParser.PLUS - 132)) | (1 << (CSharpParser.MINUS - 132)) | (1 << (CSharpParser.STAR - 132)) | (1 << (CSharpParser.AMP - 132)) | (1 << (CSharpParser.BANG - 132)) | (1 << (CSharpParser.TILDE - 132)) | (1 << (CSharpParser.OP_INC - 132)) | (1 << (CSharpParser.OP_DEC - 132)))) !== 0)) {
				{
				this.state = 2360;
				this.argument_list();
				}
			}

			this.state = 2363;
			this.match(CSharpParser.CLOSE_PARENS);
			this.state = 2365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACE) {
				{
				this.state = 2364;
				this.object_or_collection_initializer();
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 402, CSharpParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2367;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BY) | (1 << CSharpParser.DESCENDING))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CSharpParser.DYNAMIC - 34)) | (1 << (CSharpParser.EQUALS - 34)) | (1 << (CSharpParser.FROM - 34)) | (1 << (CSharpParser.GET - 34)) | (1 << (CSharpParser.GROUP - 34)) | (1 << (CSharpParser.INTO - 34)) | (1 << (CSharpParser.JOIN - 34)) | (1 << (CSharpParser.LET - 34)) | (1 << (CSharpParser.NAMEOF - 34)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (CSharpParser.ON - 68)) | (1 << (CSharpParser.ORDERBY - 68)) | (1 << (CSharpParser.PARTIAL - 68)) | (1 << (CSharpParser.REMOVE - 68)) | (1 << (CSharpParser.SELECT - 68)) | (1 << (CSharpParser.SET - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (CSharpParser.VAR - 104)) | (1 << (CSharpParser.WHEN - 104)) | (1 << (CSharpParser.WHERE - 104)) | (1 << (CSharpParser.YIELD - 104)) | (1 << (CSharpParser.IDENTIFIER - 104)))) !== 0))) {
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
		case 171:
			return this.right_arrow_sempred(_localctx as Right_arrowContext, predIndex);

		case 172:
			return this.right_shift_sempred(_localctx as Right_shiftContext, predIndex);

		case 173:
			return this.right_shift_assignment_sempred(_localctx as Right_shift_assignmentContext, predIndex);
		}
		return true;
	}
	private right_arrow_sempred(_localctx: Right_arrowContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return (_localctx._first != null ? _localctx._first.tokenIndex : 0) + 1 == (_localctx._second != null ? _localctx._second.tokenIndex : 0);
		}
		return true;
	}
	private right_shift_sempred(_localctx: Right_shiftContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return (_localctx._first != null ? _localctx._first.tokenIndex : 0) + 1 == (_localctx._second != null ? _localctx._second.tokenIndex : 0);
		}
		return true;
	}
	private right_shift_assignment_sempred(_localctx: Right_shift_assignmentContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return (_localctx._first != null ? _localctx._first.tokenIndex : 0) + 1 == (_localctx._second != null ? _localctx._second.tokenIndex : 0);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xC2\u0944\x04" +
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
		"\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x03\x02\x05\x02" +
		"\u0198\n\x02\x03\x02\x05\x02\u019B\n\x02\x03\x02\x05\x02\u019E\n\x02\x03" +
		"\x02\x07\x02\u01A1\n\x02\f\x02\x0E\x02\u01A4\v\x02\x03\x02\x05\x02\u01A7" +
		"\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\u01AD\n\x03\x03\x03\x05" +
		"\x03\u01B0\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\u01B5\n\x03\x07\x03\u01B7" +
		"\n\x03\f\x03\x0E\x03\u01BA\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04" +
		"\u01C0\n\x04\f\x04\x0E\x04\u01C3\v\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x05\x05\u01C9\n\x05\x03\x06\x03\x06\x05\x06\u01CD\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\u01D2\n\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n" +
		"\x03\n\x05\n\u01DC\n\n\x03\v\x03\v\x03\v\x03\v\x07\v\u01E2\n\v\f\v\x0E" +
		"\v\u01E5\v\v\x03\v\x03\v\x03\f\x03\f\x03\f\x07\f\u01EC\n\f\f\f\x0E\f\u01EF" +
		"\v\f\x03\r\x03\r\x03\r\x05\r\u01F4\n\r\x03\r\x05\r\u01F7\n\r\x03\r\x03" +
		"\r\x05\r\u01FB\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\u0201\n\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\u0206\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\u0217\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\u021F\n\x12\x03\x13\x03\x13\x03\x13\x05\x13\u0224" +
		"\n\x13\x03\x14\x03\x14\x03\x14\x07\x14\u0229\n\x14\f\x14\x0E\x14\u022C" +
		"\v\x14\x03\x15\x03\x15\x03\x15\x07\x15\u0231\n\x15\f\x15\x0E\x15\u0234" +
		"\v\x15\x03\x16\x03\x16\x03\x16\x07\x16\u0239\n\x16\f\x16\x0E\x16\u023C" +
		"\v\x16\x03\x17\x03\x17\x03\x17\x07\x17\u0241\n\x17\f\x17\x0E\x17\u0244" +
		"\v\x17\x03\x18\x03\x18\x03\x18\x07\x18\u0249\n\x18\f\x18\x0E\x18\u024C" +
		"\v\x18\x03\x19\x03\x19\x03\x19\x07\x19\u0251\n\x19\f\x19\x0E\x19\u0254" +
		"\v\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A" +
		"\u025D\n\x1A\f\x1A\x0E\x1A\u0260\v\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B" +
		"\u0265\n\x1B\x03\x1B\x07\x1B\u0268\n\x1B\f\x1B\x0E\x1B\u026B\v\x1B\x03" +
		"\x1C\x03\x1C\x03\x1C\x07\x1C\u0270\n\x1C\f\x1C\x0E\x1C\u0273\v\x1C\x03" +
		"\x1D\x03\x1D\x03\x1D\x07\x1D\u0278\n\x1D\f\x1D\x0E\x1D\u027B\v\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0295\n\x1E\x03\x1F" +
		"\x03\x1F\x07\x1F\u0299\n\x1F\f\x1F\x0E\x1F\u029C\v\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u02A4\n\x1F\x03\x1F\x07\x1F\u02A7" +
		"\n\x1F\f\x1F\x0E\x1F\u02AA\v\x1F\x07\x1F\u02AC\n\x1F\f\x1F\x0E\x1F\u02AF" +
		"\v\x1F\x03 \x03 \x03 \x05 \u02B4\n \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x05 \u02C2\n \x03 \x03 \x03 \x03 \x05 \u02C8" +
		"\n \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x07 \u02D2\n \f \x0E \u02D5" +
		"\v \x03 \x05 \u02D8\n \x03 \x06 \u02DB\n \r \x0E \u02DC\x03 \x03 \x05" +
		" \u02E1\n \x03 \x03 \x03 \x03 \x05 \u02E7\n \x03 \x03 \x03 \x03 \x03 " +
		"\x05 \u02EE\n \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 " +
		"\x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0301\n \x03 \x03 \x03 \x05 \u0306" +
		"\n \x03 \x05 \u0309\n \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x07 \u0316\n \f \x0E \u0319\v \x03 \x03 \x03 \x05 \u031E\n \x03" +
		"!\x05!\u0321\n!\x03!\x03!\x03!\x05!\u0326\n!\x03\"\x05\"\u0329\n\"\x03" +
		"\"\x03\"\x03\"\x03\"\x07\"\u032F\n\"\f\"\x0E\"\u0332\v\"\x03\"\x03\"\x03" +
		"#\x03#\x03#\x05#\u0339\n#\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x07%\u0342" +
		"\n%\f%\x0E%\u0345\v%\x03&\x03&\x05&\u0349\n&\x03\'\x03\'\x03\'\x05\'\u034E" +
		"\n\'\x05\'\u0350\n\'\x03\'\x03\'\x03(\x03(\x03(\x07(\u0357\n(\f(\x0E(" +
		"\u035A\v(\x03)\x03)\x03)\x03)\x03)\x05)\u0361\n)\x03)\x03)\x03)\x03*\x03" +
		"*\x05*\u0368\n*\x03+\x03+\x03+\x03+\x07+\u036E\n+\f+\x0E+\u0371\v+\x03" +
		"+\x05+\u0374\n+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x05,\u037D\n,\x03-" +
		"\x03-\x03-\x05-\u0382\n-\x05-\u0384\n-\x03-\x03-\x03.\x03.\x03.\x07.\u038B" +
		"\n.\f.\x0E.\u038E\v.\x03/\x03/\x03/\x03/\x03/\x05/\u0395\n/\x030\x030" +
		"\x050\u0399\n0\x030\x030\x030\x050\u039E\n0\x050\u03A0\n0\x030\x030\x03" +
		"0\x050\u03A5\n0\x070\u03A7\n0\f0\x0E0\u03AA\v0\x031\x031\x071\u03AE\n" +
		"1\f1\x0E1\u03B1\v1\x031\x031\x032\x032\x032\x072\u03B8\n2\f2\x0E2\u03BB" +
		"\v2\x032\x052\u03BE\n2\x033\x053\u03C1\n3\x033\x033\x033\x033\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x054\u03D2\n4\x035\x03" +
		"5\x035\x075\u03D7\n5\f5\x0E5\u03DA\v5\x036\x056\u03DD\n6\x036\x036\x03" +
		"6\x037\x037\x037\x077\u03E5\n7\f7\x0E7\u03E8\v7\x038\x038\x058\u03EC\n" +
		"8\x039\x039\x039\x03:\x03:\x05:\u03F3\n:\x03:\x03:\x03:\x03:\x03;\x07" +
		";\u03FA\n;\f;\x0E;\u03FD\v;\x03;\x03;\x05;\u0401\n;\x03<\x03<\x03<\x03" +
		"<\x03<\x05<\u0408\n<\x03=\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03?\x03" +
		"?\x05?\u0414\n?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u041F" +
		"\n?\x03@\x03@\x03@\x03@\x07@\u0425\n@\f@\x0E@\u0428\v@\x03A\x03A\x05A" +
		"\u042C\nA\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u0435\nB\x03C\x03C\x03" +
		"C\x03C\x03D\x03D\x03D\x05D\u043E\nD\x03D\x03D\x03D\x05D\u0443\nD\x03E" +
		"\x03E\x03E\x03E\x03F\x03F\x05F\u044B\nF\x03G\x03G\x03G\x03G\x03G\x03G" +
		"\x03G\x03G\x03G\x03G\x03G\x05G\u0458\nG\x03G\x03G\x03G\x03G\x03G\x03G" +
		"\x07G\u0460\nG\fG\x0EG\u0463\vG\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u0478\n" +
		"G\x03G\x03G\x05G\u047C\nG\x03G\x03G\x05G\u0480\nG\x03G\x03G\x03G\x03G" +
		"\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x05G\u0496\nG\x03G\x03G\x03G\x05G\u049B\nG\x03G\x03G\x03G" +
		"\x05G\u04A0\nG\x03G\x03G\x03G\x03G\x03G\x05G\u04A7\nG\x03G\x05G\u04AA" +
		"\nG\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u04C0\nG\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x05G\u04CC\nG\x03H\x03H\x05H\u04D0\nH\x03H" +
		"\x03H\x03I\x03I\x03I\x03I\x07I\u04D8\nI\fI\x0EI\u04DB\vI\x03J\x03J\x05" +
		"J\u04DF\nJ\x03K\x03K\x03K\x05K\u04E4\nK\x03L\x03L\x03L\x05L\u04E9\nL\x03" +
		"M\x03M\x03M\x03M\x03N\x03N\x05N\u04F1\nN\x03O\x06O\u04F4\nO\rO\x0EO\u04F5" +
		"\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u0500\nP\x03Q\x06Q\u0503" +
		"\nQ\rQ\x0EQ\u0504\x03R\x03R\x03R\x03R\x07R\u050B\nR\fR\x0ER\u050E\vR\x05" +
		"R\u0510\nR\x03S\x03S\x03S\x07S\u0515\nS\fS\x0ES\u0518\vS\x03T\x03T\x07" +
		"T\u051C\nT\fT\x0ET\u051F\vT\x03T\x05T\u0522\nT\x03T\x05T\u0525\nT\x03" +
		"U\x03U\x03U\x03U\x05U\u052B\nU\x03U\x03U\x05U\u052F\nU\x03U\x03U\x03V" +
		"\x03V\x05V\u0535\nV\x03V\x03V\x03W\x03W\x03W\x03W\x03W\x03X\x03X\x03X" +
		"\x03Y\x03Y\x05Y\u0543\nY\x03Z\x03Z\x03Z\x03Z\x05Z\u0549\nZ\x03[\x03[\x03" +
		"[\x07[\u054E\n[\f[\x0E[\u0551\v[\x03\\\x03\\\x05\\\u0555\n\\\x03\\\x05" +
		"\\\u0558\n\\\x03\\\x05\\\u055B\n\\\x03\\\x03\\\x03]\x06]\u0560\n]\r]\x0E" +
		"]\u0561\x03^\x03^\x03^\x03^\x03^\x03_\x06_\u056A\n_\r_\x0E_\u056B\x03" +
		"`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03" +
		"`\x05`\u057D\n`\x03a\x06a\u0580\na\ra\x0Ea\u0581\x03b\x03b\x05b\u0586" +
		"\nb\x03c\x05c\u0589\nc\x03c\x05c\u058C\nc\x03c\x03c\x03c\x03c\x03c\x05" +
		"c\u0593\nc\x03d\x03d\x03d\x03d\x05d\u0599\nd\x03e\x03e\x03e\x03e\x07e" +
		"\u059F\ne\fe\x0Ee\u05A2\ve\x03e\x03e\x03f\x05f\u05A7\nf\x03f\x03f\x03" +
		"g\x03g\x03g\x03g\x07g\u05AF\ng\fg\x0Eg\u05B2\vg\x03h\x03h\x03h\x07h\u05B7" +
		"\nh\fh\x0Eh\u05BA\vh\x03i\x06i\u05BD\ni\ri\x0Ei\u05BE\x03j\x03j\x03j\x03" +
		"j\x03j\x03k\x03k\x03k\x03k\x05k\u05CA\nk\x03k\x03k\x05k\u05CE\nk\x05k" +
		"\u05D0\nk\x03l\x03l\x03l\x05l\u05D5\nl\x03m\x03m\x03m\x07m\u05DA\nm\f" +
		"m\x0Em\u05DD\vm\x03n\x03n\x03n\x03n\x03o\x03o\x05o\u05E5\no\x03o\x03o" +
		"\x03p\x06p\u05EA\np\rp\x0Ep\u05EB\x03q\x05q\u05EF\nq\x03q\x05q\u05F2\n" +
		"q\x03q\x03q\x05q\u05F6\nq\x03r\x06r\u05F9\nr\rr\x0Er\u05FA\x03s\x03s\x03" +
		"t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x05t\u0608\nt\x03t\x03t\x03" +
		"t\x03t\x03t\x03t\x03t\x03t\x05t\u0612\nt\x03u\x03u\x03u\x03u\x03u\x03" +
		"u\x03u\x03u\x03u\x03u\x05u\u061E\nu\x03v\x03v\x03v\x07v\u0623\nv\fv\x0E" +
		"v\u0626\vv\x03w\x03w\x03w\x03w\x03x\x03x\x03x\x07x\u062F\nx\fx\x0Ex\u0632" +
		"\vx\x03y\x03y\x03y\x05y\u0637\ny\x03z\x03z\x05z\u063B\nz\x03{\x03{\x05" +
		"{\u063F\n{\x03|\x03|\x03}\x03}\x05}\u0645\n}\x03~\x03~\x03~\x03~\x05~" +
		"\u064B\n~\x05~\u064D\n~\x03\x7F\x03\x7F\x03\x7F\x07\x7F\u0652\n\x7F\f" +
		"\x7F\x0E\x7F\u0655\v\x7F\x03\x80\x05\x80\u0658\n\x80\x03\x80\x05\x80\u065B" +
		"\n\x80\x03\x80\x03\x80\x05\x80\u065F\n\x80\x03\x81\x03\x81\x03\x82\x05" +
		"\x82\u0664\n\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x83\x05\x83\u066B" +
		"\n\x83\x03\x83\x05\x83\u066E\n\x83\x03\x83\x03\x83\x03\x83\x05\x83\u0673" +
		"\n\x83\x03\x83\x03\x83\x03\x83\x05\x83\u0678\n\x83\x05\x83\u067A\n\x83" +
		"\x03\x84\x05\x84\u067D\n\x84\x03\x84\x05\x84\u0680\n\x84\x03\x84\x03\x84" +
		"\x03\x84\x03\x85\x05\x85\u0686\n\x85\x03\x85\x05\x85\u0689\n\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86" +
		"\x05\x86\u0695\n\x86\x03\x87\x03\x87\x05\x87\u0699\n\x87\x03\x88\x05\x88" +
		"\u069C\n\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03" +
		"\x88\x05\x88\u06A6\n\x88\x03\x89\x05\x89\u06A9\n\x89\x03\x89\x03\x89\x03" +
		"\x89\x03\x8A\x05\x8A\u06AF\n\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x05\x8B\u06CA\n\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03" +
		"\x8C\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x05\x8D\u06D7\n\x8D" +
		"\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x05\x8E\u06DD\n\x8E\x03\x8F\x03\x8F\x03" +
		"\x8F\x03\x90\x03\x90\x07\x90\u06E4\n\x90\f\x90\x0E\x90\u06E7\v\x90\x03" +
		"\x90\x03\x90\x03\x91\x05\x91\u06EC\n\x91\x03\x91\x05\x91\u06EF\n\x91\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x06\x91\u06F5\n\x91\r\x91\x0E\x91\u06F6\x03" +
		"\x91\x03\x91\x05\x91\u06FB\n\x91\x03\x92\x03\x92\x07\x92\u06FF\n\x92\f" +
		"\x92\x0E\x92\u0702\v\x92\x03\x92\x06\x92\u0705\n\x92\r\x92\x0E\x92\u0706" +
		"\x03\x93\x03\x93\x07\x93\u070B\n\x93\f\x93\x0E\x93\u070E\v\x93\x03\x93" +
		"\x03\x93\x03\x94\x03\x94\x03\x94\x03\x94\x07\x94\u0716\n\x94\f\x94\x0E" +
		"\x94\u0719\v\x94\x03\x94\x05\x94\u071C\n\x94\x05\x94\u071E\n\x94\x03\x94" +
		"\x03\x94\x03\x95\x03\x95\x03\x95\x03\x95\x07\x95\u0726\n\x95\f\x95\x0E" +
		"\x95\u0729\v\x95\x03\x95\x03\x95\x03\x96\x05\x96\u072E\n\x96\x03\x96\x05" +
		"\x96\u0731\n\x96\x03\x96\x03\x96\x03\x97\x03\x97\x03\x98\x03\x98\x03\x98" +
		"\x03\x99\x03\x99\x07\x99\u073C\n\x99\f\x99\x0E\x99\u073F\v\x99\x03\x99" +
		"\x03\x99\x03\x9A\x05\x9A\u0744\n\x9A\x03\x9A\x05\x9A\u0747\n\x9A\x03\x9A" +
		"\x05\x9A\u074A\n\x9A\x03\x9A\x03\x9A\x03\x9A\x05\x9A\u074F\n\x9A\x03\x9A" +
		"\x03\x9A\x05\x9A\u0753\n\x9A\x03\x9A\x03\x9A\x05\x9A\u0757\n\x9A\x03\x9A" +
		"\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A" +
		"\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x05\x9A\u0768\n\x9A\x03\x9A\x05" +
		"\x9A\u076B\n\x9A\x03\x9A\x03\x9A\x03\x9A\x05\x9A\u0770\n\x9A\x03\x9A\x03" +
		"\x9A\x05\x9A\u0774\n\x9A\x03\x9A\x03\x9A\x05\x9A\u0778\n\x9A\x03\x9A\x03" +
		"\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x05\x9A\u0781\n\x9A\x03\x9B" +
		"\x05\x9B\u0784\n\x9B\x03\x9B\x03\x9B\x03\x9B\x05\x9B\u0789\n\x9B\x03\x9B" +
		"\x03\x9B\x05\x9B\u078D\n\x9B\x03\x9B\x03\x9B\x03\x9B\x05\x9B\u0792\n\x9B" +
		"\x03\x9B\x03\x9B\x05\x9B\u0796\n\x9B\x05\x9B\u0798\n\x9B\x03\x9C\x03\x9C" +
		"\x03\x9C\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x07\x9D\u07A1\n\x9D\f\x9D\x0E" +
		"\x9D\u07A4\v\x9D\x03\x9D\x05\x9D\u07A7\n\x9D\x05\x9D\u07A9\n\x9D\x03\x9D" +
		"\x03\x9D\x03\x9E\x05\x9E\u07AE\n\x9E\x03\x9E\x03\x9E\x03\x9E\x05\x9E\u07B3" +
		"\n\x9E\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x05\x9F\u07BA\n\x9F\x03" +
		"\x9F\x03\x9F\x03\xA0\x03\xA0\x05\xA0\u07C0\n\xA0\x03\xA1\x06\xA1\u07C3" +
		"\n\xA1\r\xA1\x0E\xA1\u07C4\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x05\xA2\u07CB" +
		"\n\xA2\x03\xA2\x03\xA2\x05\xA2\u07CF\n\xA2\x03\xA2\x03\xA2\x03\xA3\x03" +
		"\xA3\x05\xA3\u07D5\n\xA3\x03\xA4\x03\xA4\x03\xA4\x07\xA4\u07DA\n\xA4\f" +
		"\xA4\x0E\xA4\u07DD\v\xA4\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x07\xA5" +
		"\u07E4\n\xA5\f\xA5\x0E\xA5\u07E7\v\xA5\x05\xA5\u07E9\n\xA5\x03\xA5\x05" +
		"\xA5\u07EC\n\xA5\x03\xA6\x03\xA6\x03\xA6\x05\xA6\u07F1\n\xA6\x03\xA6\x03" +
		"\xA6\x03\xA7\x03\xA7\x05\xA7\u07F7\n\xA7\x03\xA7\x03\xA7\x07\xA7\u07FB" +
		"\n\xA7\f\xA7\x0E\xA7\u07FE\v\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x05\xA7" +
		"\u0804\n\xA7\x03\xA8\x03\xA8\x03\xA8\x07\xA8\u0809\n\xA8\f\xA8\x0E\xA8" +
		"\u080C\v\xA8\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xAA\x05\xAA\u0813\n\xAA" +
		"\x03\xAA\x03\xAA\x05\xAA\u0817\n\xAA\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03" +
		"\xAB\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAD\x03\xAD\x03" +
		"\xAD\x03\xAD\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03\xAF\x03\xAF\x03\xAF\x03" +
		"\xAF\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x05\xB0\u0837" +
		"\n\xB0\x03\xB1\x03\xB1\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x05\xB2\u083F\n" +
		"\xB2\x03\xB3\x03\xB3\x07\xB3\u0843\n\xB3\f\xB3\x0E\xB3\u0846\v\xB3\x03" +
		"\xB3\x03\xB3\x03\xB4\x03\xB4\x07\xB4\u084C\n\xB4\f\xB4\x0E\xB4\u084F\v" +
		"\xB4\x03\xB4\x03\xB4\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x05\xB5\u0857\n\xB5" +
		"\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x05\xB6\u085D\n\xB6\x03\xB7\x03\xB7\x03" +
		"\xB7\x07\xB7\u0862\n\xB7\f\xB7\x0E\xB7\u0865\v\xB7\x03\xB7\x03\xB7\x06" +
		"\xB7\u0869\n\xB7\r\xB7\x0E\xB7\u086A\x05\xB7\u086D\n\xB7\x03\xB8\x03\xB8" +
		"\x03\xB9\x03\xB9\x03\xB9\x05\xB9\u0874\n\xB9\x03\xB9\x05\xB9\u0877\n\xB9" +
		"\x03\xB9\x05\xB9\u087A\n\xB9\x03\xB9\x03\xB9\x05\xB9\u087E\n\xB9\x03\xBA" +
		"\x03\xBA\x03\xBA\x05\xBA\u0883\n\xBA\x03\xBA\x05\xBA\u0886\n\xBA\x03\xBA" +
		"\x05\xBA\u0889\n\xBA\x03\xBA\x03\xBA\x05\xBA\u088D\n\xBA\x03\xBB\x03\xBB" +
		"\x03\xBB\x05\xBB\u0892\n\xBB\x03\xBB\x05\xBB\u0895\n\xBB\x03\xBB\x05\xBB" +
		"\u0898\n\xBB\x03\xBB\x03\xBB\x05\xBB\u089C\n\xBB\x03\xBC\x03\xBC\x03\xBC" +
		"\x05\xBC\u08A1\n\xBC\x03\xBC\x03\xBC\x05\xBC\u08A5\n\xBC\x03\xBD\x03\xBD" +
		"\x03\xBD\x03\xBD\x05\xBD\u08AB\n\xBD\x03\xBD\x03\xBD\x05\xBD\u08AF\n\xBD" +
		"\x03\xBD\x03\xBD\x05\xBD\u08B3\n\xBD\x03\xBD\x03\xBD\x03\xBE\x03\xBE\x03" +
		"\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x05\xBE\u08C1" +
		"\n\xBE\x03\xBF\x03\xBF\x03\xBF\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0" +
		"\x03\xC0\x03\xC0\x03\xC0\x05\xC0\u08CE\n\xC0\x03\xC0\x03\xC0\x03\xC0\x03" +
		"\xC0\x05\xC0\u08D4\n\xC0\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC2" +
		"\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2" +
		"\x03\xC2\x03\xC2\x05\xC2\u08E7\n\xC2\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03" +
		"\xC3\x03\xC3\x03\xC4\x03\xC4\x03\xC4\x05\xC4\u08F2\n\xC4\x03\xC4\x03\xC4" +
		"\x05\xC4\u08F6\n\xC4\x03\xC4\x03\xC4\x03\xC5\x03\xC5\x05\xC5\u08FC\n\xC5" +
		"\x03\xC5\x03\xC5\x05\xC5\u0900\n\xC5\x03\xC5\x03\xC5\x05\xC5\u0904\n\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u090B\n\xC5\x03\xC6\x03";
	private static readonly _serializedATNSegment1: string =
		"\xC6\x03\xC6\x03\xC6\x03\xC6\x05\xC6\u0912\n\xC6\x03\xC6\x05\xC6\u0915" +
		"\n\xC6\x03\xC6\x03\xC6\x07\xC6\u0919\n\xC6\f\xC6\x0E\xC6\u091C\v\xC6\x03" +
		"\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x05\xC7\u0924\n\xC7\x03\xC7" +
		"\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x05\xC7\u092C\n\xC7\x03\xC8\x03" +
		"\xC8\x03\xC8\x03\xC8\x05\xC8\u0932\n\xC8\x03\xC9\x03\xC9\x05\xC9\u0936" +
		"\n\xC9\x03\xC9\x03\xC9\x03\xCA\x03\xCA\x05\xCA\u093C\n\xCA\x03\xCA\x03" +
		"\xCA\x05\xCA\u0940\n\xCA\x03\xCB\x03\xCB\x03\xCB\x02\x02\x02\xCC\x02\x02" +
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
		"\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\u0126\x02\u0128" +
		"\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02\u0134\x02\u0136" +
		"\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02\u0142\x02\u0144" +
		"\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E\x02\u0150\x02\u0152" +
		"\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C\x02\u015E\x02\u0160" +
		"\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A\x02\u016C\x02\u016E" +
		"\x02\u0170\x02\u0172\x02\u0174\x02\u0176\x02\u0178\x02\u017A\x02\u017C" +
		"\x02\u017E\x02\u0180\x02\u0182\x02\u0184\x02\u0186\x02\u0188\x02\u018A" +
		"\x02\u018C\x02\u018E\x02\u0190\x02\u0192\x02\u0194\x02\x02\x14\n\x02\x16" +
		"\x16\x19\x1988@@TTXXdehh\x04\x02##..\x04\x02IIQQ\x03\x02\x9B\x9C\x04\x02" +
		"\x91\x92\x9D\x9E\x03\x02\x86\x87\x03\x02\x88\x8A\x10\x02\x13\x13\x16\x16" +
		"\x19\x19\x1E\x1E##..88@@EETTXX\\\\dehh\x04\x02\x0F\x0F!!\x0E\x02\n\n\x10" +
		"\x10**::CCJJLPUU[[ggkkmm\x05\x02IIQQ__\x04\x02))66\x04\x02\x12\x12__\x04" +
		"\x02\x88\x88\x93\x93\x04\x0277II\x04\x02++aa\x15\x02\n\n\x0E\x0E\x12\x14" +
		"\x16 \"#%&(0335:<<?@BEGGIKMQSUXikmpp\x15\x02\v\r\x0F\x11\x15\x15!!$$\'" +
		"\'1244;;=>AAFFHHLLRRVWjjnoqr\x02\u0A23\x02\u0197\x03\x02\x02\x02\x04\u01AF" +
		"\x03\x02\x02\x02\x06\u01BB\x03\x02\x02\x02\b\u01C8\x03\x02\x02\x02\n\u01CC" +
		"\x03\x02\x02\x02\f\u01D1\x03\x02\x02\x02\x0E\u01D3\x03\x02\x02\x02\x10" +
		"\u01D5\x03\x02\x02\x02\x12\u01DB\x03\x02\x02\x02\x14\u01DD\x03\x02\x02" +
		"\x02\x16\u01E8\x03\x02\x02\x02\x18\u01F3\x03\x02\x02\x02\x1A\u0200\x03" +
		"\x02\x02\x02\x1C\u0205\x03\x02\x02\x02\x1E\u0207\x03\x02\x02\x02 \u0216" +
		"\x03\x02\x02\x02\"\u0218\x03\x02\x02\x02$\u0220\x03\x02\x02\x02&\u0225" +
		"\x03\x02\x02\x02(\u022D\x03\x02\x02\x02*\u0235\x03\x02\x02\x02,\u023D" +
		"\x03\x02\x02\x02.\u0245\x03\x02\x02\x020\u024D\x03\x02\x02\x022\u0255" +
		"\x03\x02\x02\x024\u0261\x03\x02\x02\x026\u026C\x03\x02\x02\x028\u0274" +
		"\x03\x02\x02\x02:\u0294\x03\x02\x02\x02<\u0296\x03\x02\x02\x02>\u031D" +
		"\x03\x02\x02\x02@\u0320\x03\x02\x02\x02B\u0328\x03\x02\x02\x02D\u0338" +
		"\x03\x02\x02\x02F\u033C\x03\x02\x02\x02H\u033E\x03\x02\x02\x02J\u0348" +
		"\x03\x02\x02\x02L\u034A\x03\x02\x02\x02N\u0353\x03\x02\x02\x02P\u0360" +
		"\x03\x02\x02\x02R\u0367\x03\x02\x02\x02T\u0369\x03\x02\x02\x02V\u037C" +
		"\x03\x02\x02\x02X\u037E\x03\x02\x02\x02Z\u0387\x03\x02\x02\x02\\\u0394" +
		"\x03\x02\x02\x02^\u0396\x03\x02\x02\x02`\u03AB\x03\x02\x02\x02b\u03B4" +
		"\x03\x02\x02\x02d\u03C0\x03\x02\x02\x02f\u03D1\x03\x02\x02\x02h\u03D3" +
		"\x03\x02\x02\x02j\u03DC\x03\x02\x02\x02l\u03E1\x03\x02\x02\x02n\u03EB" +
		"\x03\x02\x02\x02p\u03ED\x03\x02\x02\x02r\u03F0\x03\x02\x02\x02t\u03FB" +
		"\x03\x02\x02\x02v\u0407\x03\x02\x02\x02x\u0409\x03\x02\x02\x02z\u040E" +
		"\x03\x02\x02\x02|\u0411\x03\x02\x02\x02~\u0420\x03\x02\x02\x02\x80\u0429" +
		"\x03\x02\x02\x02\x82\u0434\x03\x02\x02\x02\x84\u0436\x03\x02\x02\x02\x86" +
		"\u0442\x03\x02\x02\x02\x88\u0444\x03\x02\x02\x02\x8A\u044A\x03\x02\x02" +
		"\x02\x8C\u04CB\x03\x02\x02\x02\x8E\u04CD\x03\x02\x02\x02\x90\u04D3\x03" +
		"\x02\x02\x02\x92\u04DE\x03\x02\x02\x02\x94\u04E0\x03\x02\x02\x02\x96\u04E8" +
		"\x03\x02\x02\x02\x98\u04EA\x03\x02\x02\x02\x9A\u04F0\x03\x02\x02\x02\x9C" +
		"\u04F3\x03\x02\x02\x02\x9E\u04FF\x03\x02\x02\x02\xA0\u0502\x03\x02\x02" +
		"\x02\xA2\u050F\x03\x02\x02\x02\xA4\u0511\x03\x02\x02\x02\xA6\u0524\x03" +
		"\x02\x02\x02\xA8\u0526\x03\x02\x02\x02\xAA\u0532\x03\x02\x02\x02\xAC\u0538" +
		"\x03\x02\x02\x02\xAE\u053D\x03\x02\x02\x02\xB0\u0542\x03\x02\x02\x02\xB2" +
		"\u0544\x03\x02\x02\x02\xB4\u054A\x03\x02\x02\x02\xB6\u0552\x03\x02\x02" +
		"\x02\xB8\u055F\x03\x02\x02\x02\xBA\u0563\x03\x02\x02\x02\xBC\u0569\x03" +
		"\x02\x02\x02\xBE\u057C\x03\x02\x02\x02\xC0\u057F\x03\x02\x02\x02\xC2\u0585" +
		"\x03\x02\x02\x02\xC4\u0588\x03\x02\x02\x02\xC6\u0594\x03\x02\x02\x02\xC8" +
		"\u059A\x03\x02\x02\x02\xCA\u05A6\x03\x02\x02\x02\xCC\u05AA\x03\x02\x02" +
		"\x02\xCE\u05B3\x03\x02\x02\x02\xD0\u05BC\x03\x02\x02\x02\xD2\u05C0\x03" +
		"\x02\x02\x02\xD4\u05CF\x03\x02\x02\x02\xD6\u05D4\x03\x02\x02\x02\xD8\u05D6" +
		"\x03\x02\x02\x02\xDA\u05DE\x03\x02\x02\x02\xDC\u05E2\x03\x02\x02\x02\xDE" +
		"\u05E9\x03\x02\x02\x02\xE0\u05EE\x03\x02\x02\x02\xE2\u05F8\x03\x02\x02" +
		"\x02\xE4\u05FC\x03\x02\x02\x02\xE6\u0611\x03\x02\x02\x02\xE8\u0613\x03" +
		"\x02\x02\x02\xEA\u061F\x03\x02\x02\x02\xEC\u0627\x03\x02\x02\x02\xEE\u062B" +
		"\x03\x02\x02\x02\xF0\u0633\x03\x02\x02\x02\xF2\u063A\x03\x02\x02\x02\xF4" +
		"\u063E\x03\x02\x02\x02\xF6\u0640\x03\x02\x02\x02\xF8\u0644\x03\x02\x02" +
		"\x02\xFA\u064C\x03\x02\x02\x02\xFC\u064E\x03\x02\x02\x02\xFE\u065E\x03" +
		"\x02\x02\x02\u0100\u0660\x03\x02\x02\x02\u0102\u0663\x03\x02\x02\x02\u0104" +
		"\u066A\x03\x02\x02\x02\u0106\u067C\x03\x02\x02\x02\u0108\u0685\x03\x02" +
		"\x02\x02\u010A\u0694\x03\x02\x02\x02\u010C\u0698\x03\x02\x02\x02\u010E" +
		"\u069B\x03\x02\x02\x02\u0110\u06A8\x03\x02\x02\x02\u0112\u06AE\x03\x02" +
		"\x02\x02\u0114\u06C9\x03\x02\x02\x02\u0116\u06CB\x03\x02\x02\x02\u0118" +
		"\u06D2\x03\x02\x02\x02\u011A\u06DC\x03\x02\x02\x02\u011C\u06DE\x03\x02" +
		"\x02\x02\u011E\u06E1\x03\x02\x02\x02\u0120\u06EB\x03\x02\x02\x02\u0122" +
		"\u06FC\x03\x02\x02\x02\u0124\u0708\x03\x02\x02\x02\u0126\u0711\x03\x02" +
		"\x02\x02\u0128\u0721\x03\x02\x02\x02\u012A\u072D\x03\x02\x02\x02\u012C" +
		"\u0734\x03\x02\x02\x02\u012E\u0736\x03\x02\x02\x02\u0130\u0739\x03\x02" +
		"\x02\x02\u0132\u0743\x03\x02\x02\x02\u0134\u0783\x03\x02\x02\x02\u0136" +
		"\u0799\x03\x02\x02\x02\u0138\u079C\x03\x02\x02\x02\u013A\u07AD\x03\x02" +
		"\x02\x02\u013C\u07B4\x03\x02\x02\x02\u013E\u07BF\x03\x02\x02\x02\u0140" +
		"\u07C2\x03\x02\x02\x02\u0142\u07C6\x03\x02\x02\x02\u0144\u07D4\x03\x02" +
		"\x02\x02\u0146\u07D6\x03\x02\x02\x02\u0148\u07DE\x03\x02\x02\x02\u014A" +
		"\u07F0\x03\x02\x02\x02\u014C\u0803\x03\x02\x02\x02\u014E\u0805\x03\x02" +
		"\x02\x02\u0150\u080D\x03\x02\x02\x02\u0152\u0816\x03\x02\x02\x02\u0154" +
		"\u0818\x03\x02\x02\x02\u0156\u081D\x03\x02\x02\x02\u0158\u0823\x03\x02" +
		"\x02\x02\u015A\u0827\x03\x02\x02\x02\u015C\u082B\x03\x02\x02\x02\u015E" +
		"\u0836\x03\x02\x02\x02\u0160\u0838\x03\x02\x02\x02\u0162\u083E\x03\x02" +
		"\x02\x02\u0164\u0840\x03\x02\x02\x02\u0166\u0849\x03\x02\x02\x02\u0168" +
		"\u0856\x03\x02\x02\x02\u016A\u085C\x03\x02\x02\x02\u016C\u085E\x03\x02" +
		"\x02\x02\u016E\u086E\x03\x02\x02\x02\u0170\u0870\x03\x02\x02\x02\u0172" +
		"\u087F\x03\x02\x02\x02\u0174\u088E\x03\x02\x02\x02\u0176\u089D\x03\x02" +
		"\x02\x02\u0178\u08A6\x03\x02\x02\x02\u017A\u08B6\x03\x02\x02\x02\u017C" +
		"\u08C2\x03\x02\x02\x02\u017E\u08C5\x03\x02\x02\x02\u0180\u08D5\x03\x02" +
		"\x02\x02\u0182\u08DA\x03\x02\x02\x02\u0184\u08E8\x03\x02\x02\x02\u0186" +
		"\u08EE\x03\x02\x02\x02\u0188\u08F9\x03\x02\x02\x02\u018A\u0911\x03\x02" +
		"\x02\x02\u018C\u091D\x03\x02\x02\x02\u018E\u092D\x03\x02\x02\x02\u0190" +
		"\u0933\x03\x02\x02\x02\u0192\u0939\x03\x02\x02\x02\u0194\u0941\x03\x02" +
		"\x02\x02\u0196\u0198\x07\x03\x02\x02\u0197\u0196\x03\x02\x02\x02\u0197" +
		"\u0198\x03\x02\x02\x02\u0198\u019A\x03\x02\x02\x02\u0199\u019B\x05\xB8" +
		"]\x02\u019A\u0199\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019D" +
		"\x03\x02\x02\x02\u019C\u019E\x05\xBC_\x02\u019D\u019C\x03\x02\x02\x02" +
		"\u019D\u019E\x03\x02\x02\x02\u019E\u01A2\x03\x02\x02\x02\u019F\u01A1\x05" +
		"\u013C\x9F\x02\u01A0\u019F\x03\x02\x02\x02\u01A1\u01A4\x03\x02\x02\x02" +
		"\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A6\x03" +
		"\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A5\u01A7\x05\xC0a\x02\u01A6" +
		"\u01A5\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A8\x03\x02" +
		"\x02\x02\u01A8\u01A9\x07\x02\x02\x03\u01A9\x03\x03\x02\x02\x02\u01AA\u01AC" +
		"\x05\u0194\xCB\x02\u01AB\u01AD\x05\x14\v\x02\u01AC\u01AB\x03\x02\x02\x02" +
		"\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01B0\x03\x02\x02\x02\u01AE\u01B0\x05" +
		"\xC6d\x02\u01AF\u01AA\x03\x02\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01B0" +
		"\u01B8\x03\x02\x02\x02\u01B1\u01B2\x07\x82\x02\x02\u01B2\u01B4\x05\u0194" +
		"\xCB\x02\u01B3\u01B5\x05\x14\v\x02\u01B4\u01B3\x03\x02\x02\x02\u01B4\u01B5" +
		"\x03\x02\x02\x02\u01B5\u01B7\x03\x02\x02\x02\u01B6\u01B1\x03\x02\x02\x02" +
		"\u01B7\u01BA\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B9\x03" +
		"\x02\x02\x02\u01B9\x05\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BB" +
		"\u01C1\x05\b\x05\x02\u01BC\u01C0\x07\x93\x02\x02\u01BD\u01C0\x05\u0124" +
		"\x93\x02\u01BE\u01C0\x07\x88\x02\x02\u01BF\u01BC\x03\x02\x02\x02\u01BF" +
		"\u01BD\x03\x02\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0\u01C3\x03\x02" +
		"\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2" +
		"\x07\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4\u01C9\x05\n\x06" +
		"\x02\u01C5\u01C9\x05\x12\n\x02\u01C6\u01C7\x07l\x02\x02\u01C7\u01C9\x07" +
		"\x88\x02\x02\u01C8\u01C4\x03\x02\x02\x02\u01C8\u01C5\x03\x02\x02\x02\u01C8" +
		"\u01C6\x03\x02\x02\x02\u01C9\t\x03\x02\x02\x02\u01CA\u01CD\x05\f\x07\x02" +
		"\u01CB\u01CD\x07\x13\x02\x02\u01CC\u01CA\x03\x02\x02\x02\u01CC\u01CB\x03" +
		"\x02\x02\x02\u01CD\v\x03\x02\x02\x02\u01CE\u01D2\x05\x0E\b\x02\u01CF\u01D2" +
		"\x05\x10\t\x02\u01D0\u01D2\x07\x1E\x02\x02\u01D1\u01CE\x03\x02\x02\x02" +
		"\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D0\x03\x02\x02\x02\u01D2\r\x03\x02" +
		"\x02\x02\u01D3\u01D4\t\x02\x02\x02\u01D4\x0F\x03\x02\x02\x02\u01D5\u01D6" +
		"\t\x03\x02\x02\u01D6\x11\x03\x02\x02\x02\u01D7\u01DC\x05\x04\x03\x02\u01D8" +
		"\u01DC\x07E\x02\x02\u01D9\u01DC\x07$\x02\x02\u01DA\u01DC\x07\\\x02\x02" +
		"\u01DB\u01D7\x03\x02\x02\x02\u01DB\u01D8\x03\x02\x02\x02\u01DB\u01D9\x03" +
		"\x02\x02\x02\u01DB\u01DA\x03\x02\x02\x02\u01DC\x13\x03\x02\x02\x02\u01DD" +
		"\u01DE\x07\x91\x02\x02\u01DE\u01E3\x05\x06\x04\x02\u01DF\u01E0\x07\x83" +
		"\x02\x02\u01E0\u01E2\x05\x06\x04\x02\u01E1\u01DF\x03\x02\x02\x02\u01E2" +
		"\u01E5\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03\x02" +
		"\x02\x02\u01E4\u01E6\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E6" +
		"\u01E7\x07\x92\x02\x02\u01E7\x15\x03\x02\x02\x02\u01E8\u01ED\x05\x18\r" +
		"\x02\u01E9\u01EA\x07\x83\x02\x02\u01EA\u01EC\x05\x18\r\x02\u01EB\u01E9" +
		"\x03\x02\x02\x02\u01EC\u01EF\x03\x02\x02\x02\u01ED\u01EB\x03\x02\x02\x02" +
		"\u01ED\u01EE\x03\x02\x02\x02\u01EE\x17\x03\x02\x02\x02\u01EF\u01ED\x03" +
		"\x02\x02\x02\u01F0\u01F1\x05\u0194\xCB\x02\u01F1\u01F2\x07\x84\x02\x02" +
		"\u01F2\u01F4\x03\x02\x02\x02\u01F3\u01F0\x03\x02\x02\x02\u01F3\u01F4\x03" +
		"\x02\x02\x02\u01F4\u01F6\x03\x02\x02\x02\u01F5\u01F7\t\x04\x02\x02\u01F6" +
		"\u01F5\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01FA\x03\x02" +
		"\x02\x02\u01F8\u01FB\x07j\x02\x02\u01F9\u01FB\x05\x06\x04\x02\u01FA\u01F8" +
		"\x03\x02\x02\x02\u01FA\u01F9\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02" +
		"\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FD\x05\x1A\x0E\x02\u01FD\x19\x03" +
		"\x02\x02\x02\u01FE\u0201\x05\x1E\x10\x02\u01FF\u0201\x05\x1C\x0F\x02\u0200" +
		"\u01FE\x03\x02\x02\x02\u0200\u01FF\x03\x02\x02\x02\u0201\x1B\x03\x02\x02" +
		"\x02\u0202\u0206\x05d3\x02\u0203\u0206\x05p9\x02\u0204\u0206\x05\"\x12" +
		"\x02\u0205\u0202\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0204" +
		"\x03\x02\x02\x02\u0206\x1D\x03\x02\x02\x02\u0207\u0208\x05:\x1E\x02\u0208" +
		"\u0209\x05 \x11\x02\u0209\u020A\x05\x1A\x0E\x02\u020A\x1F\x03\x02\x02" +
		"\x02\u020B\u0217\x07\x90\x02\x02\u020C\u0217\x07\x9F\x02\x02\u020D\u0217" +
		"\x07\xA0\x02\x02\u020E\u0217\x07\xA1\x02\x02\u020F\u0217\x07\xA2\x02\x02" +
		"\u0210\u0217\x07\xA3\x02\x02\u0211\u0217\x07\xA4\x02\x02\u0212\u0217\x07" +
		"\xA5\x02\x02\u0213\u0217\x07\xA6\x02\x02\u0214\u0217\x07\xA8\x02\x02\u0215" +
		"\u0217\x05\u015C\xAF\x02\u0216\u020B\x03\x02\x02\x02\u0216\u020C\x03\x02" +
		"\x02\x02\u0216\u020D\x03\x02\x02\x02\u0216\u020E\x03\x02\x02\x02\u0216" +
		"\u020F\x03\x02\x02\x02\u0216\u0210\x03\x02\x02\x02\u0216\u0211\x03\x02" +
		"\x02\x02\u0216\u0212\x03\x02\x02\x02\u0216\u0213\x03\x02\x02\x02\u0216" +
		"\u0214\x03\x02\x02\x02\u0216\u0215\x03\x02\x02\x02\u0217!\x03\x02\x02" +
		"\x02\u0218\u021E\x05$\x13\x02\u0219\u021A\x07\x93\x02\x02\u021A\u021B" +
		"\x05\x1A\x0E\x02\u021B\u021C\x07\x84\x02\x02\u021C\u021D\x05\x1A\x0E\x02" +
		"\u021D\u021F\x03\x02\x02\x02\u021E\u0219\x03\x02\x02\x02\u021E\u021F\x03" +
		"\x02\x02\x02\u021F#\x03\x02\x02\x02\u0220\u0223\x05&\x14\x02\u0221\u0222" +
		"\x07\x95\x02\x02\u0222\u0224\x05$\x13\x02\u0223\u0221\x03\x02\x02\x02" +
		"\u0223\u0224\x03\x02\x02\x02\u0224%\x03\x02\x02\x02\u0225\u022A\x05(\x15" +
		"\x02\u0226\u0227\x07\x99\x02\x02\u0227\u0229\x05(\x15\x02\u0228\u0226" +
		"\x03\x02\x02\x02\u0229\u022C\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02" +
		"\u022A\u022B\x03\x02\x02\x02\u022B\'\x03\x02\x02\x02\u022C\u022A\x03\x02" +
		"\x02\x02\u022D\u0232\x05*\x16\x02\u022E\u022F\x07\x98\x02\x02\u022F\u0231" +
		"\x05*\x16\x02\u0230\u022E\x03\x02\x02\x02\u0231\u0234\x03\x02\x02\x02" +
		"\u0232\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233)\x03\x02" +
		"\x02\x02\u0234\u0232\x03\x02\x02\x02\u0235\u023A\x05,\x17\x02\u0236\u0237" +
		"\x07\x8C\x02\x02\u0237\u0239\x05,\x17\x02\u0238\u0236\x03\x02\x02\x02" +
		"\u0239\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03" +
		"\x02\x02\x02\u023B+\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D" +
		"\u0242\x05.\x18\x02\u023E\u023F\x07\x8D\x02\x02\u023F\u0241\x05.\x18\x02" +
		"\u0240\u023E\x03\x02\x02\x02\u0241\u0244\x03\x02\x02\x02\u0242\u0240\x03" +
		"\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243-\x03\x02\x02\x02\u0244" +
		"\u0242\x03\x02\x02\x02\u0245\u024A\x050\x19\x02\u0246\u0247\x07\x8B\x02" +
		"\x02\u0247\u0249\x050\x19\x02\u0248\u0246\x03\x02\x02\x02\u0249\u024C" +
		"\x03\x02\x02\x02\u024A\u0248\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02" +
		"\u024B/\x03\x02\x02\x02\u024C\u024A\x03\x02\x02\x02\u024D\u0252\x052\x1A" +
		"\x02\u024E\u024F\t\x05\x02\x02\u024F\u0251\x052\x1A\x02\u0250\u024E\x03" +
		"\x02\x02\x02\u0251\u0254\x03\x02\x02\x02\u0252\u0250\x03\x02\x02\x02\u0252" +
		"\u0253\x03\x02\x02\x02\u02531\x03\x02\x02\x02\u0254\u0252\x03\x02\x02" +
		"\x02\u0255\u025E\x054\x1B\x02\u0256\u0257\t\x06\x02\x02\u0257\u025D\x05" +
		"4\x1B\x02\u0258\u0259\x07<\x02\x02\u0259\u025D\x05b2\x02\u025A\u025B\x07" +
		"\x0E\x02\x02\u025B\u025D\x05\x06\x04\x02\u025C\u0256\x03\x02\x02\x02\u025C" +
		"\u0258\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025D\u0260\x03\x02" +
		"\x02\x02\u025E\u025C\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F" +
		"3\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0261\u0269\x056\x1C\x02" +
		"\u0262\u0265\x07\xA7\x02\x02\u0263\u0265\x05\u015A\xAE\x02\u0264\u0262" +
		"\x03\x02\x02\x02\u0264\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02" +
		"\u0266\u0268\x056\x1C\x02\u0267\u0264\x03\x02\x02\x02\u0268\u026B\x03" +
		"\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A" +
		"5\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026C\u0271\x058\x1D\x02" +
		"\u026D\u026E\t\x07\x02\x02\u026E\u0270\x058\x1D\x02\u026F\u026D\x03\x02" +
		"\x02\x02\u0270\u0273\x03\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0271" +
		"\u0272\x03\x02\x02\x02\u02727\x03\x02\x02\x02\u0273\u0271\x03\x02\x02" +
		"\x02\u0274\u0279\x05:\x1E\x02\u0275\u0276\t\b\x02\x02\u0276\u0278\x05" +
		":\x1E\x02\u0277\u0275\x03\x02\x02\x02\u0278\u027B\x03\x02\x02\x02\u0279" +
		"\u0277\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A9\x03\x02\x02" +
		"\x02\u027B\u0279\x03\x02\x02\x02\u027C\u0295\x05<\x1F\x02\u027D\u027E" +
		"\x07\x86\x02\x02\u027E\u0295\x05:\x1E\x02\u027F\u0280\x07\x87\x02\x02" +
		"\u0280\u0295\x05:\x1E\x02\u0281\u0282\x07\x8E\x02\x02\u0282\u0295\x05" +
		":\x1E\x02\u0283\u0284\x07\x8F\x02\x02\u0284\u0295\x05:\x1E\x02\u0285\u0286" +
		"\x07\x96\x02\x02\u0286\u0295\x05:\x1E\x02\u0287\u0288\x07\x97\x02\x02" +
		"\u0288\u0295\x05:\x1E\x02\u0289\u028A\x07\x80\x02\x02\u028A\u028B\x05" +
		"\x06\x04\x02\u028B\u028C\x07\x81\x02\x02\u028C\u028D\x05:\x1E\x02\u028D" +
		"\u0295\x03\x02\x02\x02\u028E\u028F\x07\x11\x02\x02\u028F\u0295\x05:\x1E" +
		"\x02\u0290\u0291\x07\x8B\x02\x02\u0291\u0295\x05:\x1E\x02\u0292\u0293" +
		"\x07\x88\x02\x02\u0293\u0295\x05:\x1E\x02\u0294\u027C\x03\x02\x02\x02" +
		"\u0294\u027D\x03\x02\x02\x02\u0294\u027F\x03\x02\x02\x02\u0294\u0281\x03" +
		"\x02\x02\x02\u0294\u0283\x03\x02\x02\x02\u0294\u0285\x03\x02\x02\x02\u0294" +
		"\u0287\x03\x02\x02\x02\u0294\u0289\x03\x02\x02\x02\u0294\u028E\x03\x02" +
		"\x02\x02\u0294\u0290\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0295" +
		";\x03\x02\x02\x02\u0296\u029A\x05> \x02\u0297\u0299\x05B\"\x02\u0298\u0297" +
		"\x03\x02\x02\x02\u0299\u029C\x03\x02\x02\x02\u029A\u0298\x03\x02\x02\x02" +
		"\u029A\u029B\x03\x02\x02\x02\u029B\u02AD\x03\x02\x02\x02\u029C\u029A\x03" +
		"\x02\x02\x02\u029D\u02A4\x05@!\x02\u029E\u02A4\x05\u0190\xC9\x02\u029F" +
		"\u02A4\x07\x96\x02\x02\u02A0\u02A4\x07\x97\x02\x02\u02A1\u02A2\x07\x9A" +
		"\x02\x02\u02A2\u02A4\x05\u0194\xCB\x02\u02A3\u029D\x03\x02\x02\x02\u02A3" +
		"\u029E\x03\x02\x02\x02\u02A3\u029F\x03\x02\x02\x02\u02A3\u02A0\x03\x02" +
		"\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A4\u02A8\x03\x02\x02\x02\u02A5" +
		"\u02A7\x05B\"\x02\u02A6\u02A5\x03\x02\x02\x02\u02A7\u02AA\x03\x02\x02" +
		"\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02AC" +
		"\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AB\u02A3\x03\x02\x02\x02" +
		"\u02AC\u02AF\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AD\u02AE\x03" +
		"\x02\x02\x02\u02AE=\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02\x02\u02B0" +
		"\u031E\x05\u015E\xB0\x02\u02B1\u02B3\x05\u0194\xCB\x02\u02B2\u02B4\x05" +
		"\x14\v\x02\u02B3\u02B2\x03\x02\x02\x02\u02B3\u02B4\x03\x02\x02\x02\u02B4" +
		"\u031E\x03\x02\x02\x02\u02B5\u02B6\x07\x80\x02\x02\u02B6\u02B7\x05\x1A" +
		"\x0E\x02\u02B7\u02B8\x07\x81\x02\x02\u02B8\u031E\x03\x02\x02\x02\u02B9" +
		"\u031E\x05F$\x02\u02BA\u031E\x05\xC6d\x02\u02BB\u031E\x07s\x02\x02\u02BC" +
		"\u031E\x07_\x02\x02\u02BD\u02C7\x07\x12\x02\x02\u02BE\u02BF\x07\x82\x02" +
		"\x02\u02BF\u02C1\x05\u0194\xCB\x02\u02C0\u02C2\x05\x14\v\x02\u02C1\u02C0" +
		"\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2\u02C8\x03\x02\x02\x02" +
		"\u02C3\u02C4\x07~\x02\x02\u02C4\u02C5\x05H%\x02\u02C5\u02C6\x07\x7F\x02" +
		"\x02\u02C6\u02C8\x03\x02\x02\x02\u02C7\u02BE\x03\x02\x02\x02\u02C7\u02C3" +
		"\x03\x02\x02\x02\u02C8\u031E\x03\x02\x02\x02\u02C9\u02E6\x07C\x02\x02" +
		"\u02CA\u02E0\x05\x06\x04\x02\u02CB\u02E1\x05\u0192\xCA\x02\u02CC\u02E1" +
		"\x05J&\x02\u02CD\u02CE\x07~\x02\x02\u02CE\u02CF\x05H%\x02\u02CF\u02D3" +
		"\x07\x7F\x02\x02\u02D0\u02D2\x05\u0124\x93\x02\u02D1\u02D0\x03\x02\x02" +
		"\x02\u02D2\u02D5\x03\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D3\u02D4" +
		"\x03\x02\x02\x02\u02D4\u02D7\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02" +
		"\u02D6\u02D8\x05\u0126\x94\x02\u02D7\u02D6\x03\x02\x02\x02\u02D7\u02D8" +
		"\x03\x02\x02\x02\u02D8\u02E1\x03\x02\x02\x02\u02D9\u02DB\x05\u0124\x93" +
		"\x02\u02DA\u02D9\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DA" +
		"\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02" +
		"\u02DE\u02DF\x05\u0126\x94\x02\u02DF\u02E1\x03\x02\x02\x02\u02E0\u02CB" +
		"\x03\x02\x02\x02\u02E0\u02CC\x03\x02\x02\x02\u02E0\u02CD\x03\x02\x02\x02" +
		"\u02E0\u02DA\x03\x02\x02\x02\u02E1\u02E7\x03\x02\x02\x02\u02E2\u02E7\x05" +
		"X-\x02\u02E3\u02E4\x05\u0124\x93\x02\u02E4\u02E5\x05\u0126\x94\x02\u02E5" +
		"\u02E7\x03\x02\x02\x02\u02E6\u02CA\x03\x02\x02\x02\u02E6\u02E2\x03\x02" +
		"\x02\x02\u02E6\u02E3\x03\x02\x02\x02\u02E7\u031E\x03\x02\x02\x02\u02E8" +
		"\u02E9\x07c\x02\x02\u02E9\u02ED\x07\x80\x02\x02\u02EA\u02EE\x05^0\x02" +
		"\u02EB\u02EE\x05\x06\x04\x02\u02EC\u02EE\x07l\x02\x02\u02ED\u02EA\x03" +
		"\x02\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02ED\u02EC\x03\x02\x02\x02\u02EE" +
		"\u02EF\x03\x02\x02\x02\u02EF\u031E\x07\x81\x02\x02\u02F0\u02F1\x07\x1A" +
		"\x02\x02\u02F1\u02F2\x07\x80\x02\x02\u02F2\u02F3\x05\x1A\x0E\x02\u02F3" +
		"\u02F4\x07\x81\x02\x02\u02F4\u031E\x03\x02\x02\x02\u02F5\u02F6\x07f\x02" +
		"\x02\u02F6\u02F7\x07\x80\x02\x02\u02F7\u02F8\x05\x1A\x0E\x02\u02F8\u02F9" +
		"\x07\x81\x02\x02\u02F9\u031E\x03\x02\x02\x02\u02FA\u02FB\x07\x1F\x02\x02" +
		"\u02FB\u02FC\x07\x80\x02\x02\u02FC\u02FD\x05\x06\x04\x02\u02FD\u02FE\x07" +
		"\x81\x02\x02\u02FE\u031E\x03\x02\x02\x02\u02FF\u0301\x07\x10\x02\x02\u0300" +
		"\u02FF\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301\u0302\x03\x02" +
		"\x02\x02\u0302\u0308\x07 \x02\x02\u0303\u0305\x07\x80\x02\x02\u0304\u0306" +
		"\x05h5\x02\u0305\u0304\x03\x02\x02\x02\u0305\u0306\x03\x02\x02\x02\u0306" +
		"\u0307\x03\x02\x02\x02\u0307\u0309\x07\x81\x02\x02\u0308\u0303\x03\x02" +
		"\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A" +
		"\u031E\x05\x8EH\x02\u030B\u030C\x07Y\x02\x02\u030C\u030D\x07\x80\x02\x02" +
		"\u030D\u030E\x05\x06\x04\x02\u030E\u030F\x07\x81\x02\x02\u030F\u031E\x03" +
		"\x02\x02\x02\u0310\u0311\x07A\x02\x02\u0311\u0317\x07\x80\x02\x02\u0312" +
		"\u0313\x05\u0194\xCB\x02\u0313\u0314\x07\x82\x02\x02\u0314\u0316\x03\x02" +
		"\x02\x02\u0315\u0312\x03\x02\x02\x02\u0316\u0319\x03\x02\x02\x02\u0317" +
		"\u0315\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02\u0318\u031A\x03\x02" +
		"\x02\x02\u0319\u0317\x03\x02\x02\x02\u031A\u031B\x05\u0194\xCB\x02\u031B" +
		"\u031C\x07\x81\x02\x02\u031C\u031E\x03\x02\x02\x02\u031D\u02B0\x03\x02" +
		"\x02\x02\u031D\u02B1\x03\x02\x02\x02\u031D\u02B5\x03\x02\x02\x02\u031D" +
		"\u02B9\x03\x02\x02\x02\u031D\u02BA\x03\x02\x02\x02\u031D\u02BB\x03\x02" +
		"\x02\x02\u031D\u02BC\x03\x02\x02\x02\u031D\u02BD\x03\x02\x02\x02\u031D" +
		"\u02C9\x03\x02\x02\x02\u031D\u02E8\x03\x02\x02\x02\u031D\u02F0\x03\x02" +
		"\x02\x02\u031D\u02F5\x03\x02\x02\x02\u031D\u02FA\x03\x02\x02\x02\u031D" +
		"\u0300\x03\x02\x02\x02\u031D\u030B\x03\x02\x02\x02\u031D\u0310\x03\x02" +
		"\x02\x02\u031E?\x03\x02\x02\x02\u031F\u0321\x07\x93\x02\x02\u0320\u031F" +
		"\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0322\x03\x02\x02\x02" +
		"\u0322\u0323\x07\x82\x02\x02\u0323\u0325\x05\u0194\xCB\x02\u0324\u0326" +
		"\x05\x14\v\x02\u0325\u0324\x03\x02\x02\x02\u0325\u0326\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u0326A\x03\x02\x02\x02\u0327\u0329\x07\x93\x02\x02\u0328\u0327\x03" +
		"\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A" +
		"\u032B\x07~\x02\x02\u032B\u0330\x05D#\x02\u032C\u032D\x07\x83\x02\x02" +
		"\u032D\u032F\x05D#\x02\u032E\u032C\x03\x02\x02\x02\u032F\u0332\x03\x02" +
		"\x02\x02\u0330\u032E\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331" +
		"\u0333\x03\x02\x02\x02\u0332\u0330\x03\x02\x02\x02\u0333\u0334\x07\x7F" +
		"\x02\x02\u0334C\x03\x02\x02\x02\u0335\u0336\x05\u0194\xCB\x02\u0336\u0337" +
		"\x07\x84\x02\x02\u0337\u0339\x03\x02\x02\x02\u0338\u0335\x03\x02\x02\x02" +
		"\u0338\u0339\x03\x02\x02\x02\u0339\u033A\x03\x02\x02\x02\u033A\u033B\x05" +
		"\x1A\x0E\x02\u033BE\x03\x02\x02\x02\u033C\u033D\t\t\x02\x02\u033DG\x03" +
		"\x02\x02\x02\u033E\u0343\x05\x1A\x0E\x02\u033F\u0340\x07\x83\x02\x02\u0340" +
		"\u0342\x05\x1A\x0E\x02\u0341\u033F\x03\x02\x02\x02\u0342\u0345\x03\x02" +
		"\x02\x02\u0343\u0341\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344" +
		"I\x03\x02\x02\x02\u0345\u0343\x03\x02\x02\x02\u0346\u0349\x05L\'\x02\u0347" +
		"\u0349\x05T+\x02\u0348\u0346\x03\x02\x02\x02\u0348\u0347\x03\x02\x02\x02" +
		"\u0349K\x03\x02\x02\x02\u034A\u034F\x07|\x02\x02\u034B\u034D\x05N(\x02" +
		"\u034C\u034E\x07\x83\x02\x02\u034D\u034C\x03\x02\x02\x02\u034D\u034E\x03" +
		"\x02\x02\x02\u034E\u0350\x03\x02\x02\x02\u034F\u034B\x03\x02\x02\x02\u034F" +
		"\u0350\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351\u0352\x07}\x02" +
		"\x02\u0352M\x03\x02\x02\x02\u0353\u0358\x05P)\x02\u0354\u0355\x07\x83" +
		"\x02\x02\u0355\u0357\x05P)\x02\u0356\u0354\x03\x02\x02\x02\u0357\u035A" +
		"\x03\x02\x02\x02\u0358\u0356\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02" +
		"\u0359O\x03\x02\x02\x02\u035A\u0358\x03\x02\x02\x02\u035B\u0361\x05\u0194" +
		"\xCB\x02\u035C\u035D\x07~\x02\x02\u035D\u035E\x05\x1A\x0E\x02\u035E\u035F" +
		"\x07\x7F\x02\x02\u035F\u0361\x03\x02\x02\x02\u0360\u035B\x03\x02\x02\x02" +
		"\u0360\u035C\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02\u0362\u0363\x07" +
		"\x90\x02\x02\u0363\u0364\x05R*\x02\u0364Q\x03\x02\x02\x02\u0365\u0368" +
		"\x05\x1A\x0E\x02\u0366\u0368\x05J&\x02\u0367\u0365\x03\x02\x02\x02\u0367" +
		"\u0366\x03\x02\x02\x02\u0368S\x03\x02\x02\x02\u0369\u036A\x07|\x02\x02" +
		"\u036A\u036F\x05V,\x02\u036B\u036C\x07\x83\x02\x02\u036C\u036E\x05V,\x02" +
		"\u036D\u036B\x03\x02\x02\x02\u036E\u0371\x03\x02\x02\x02\u036F\u036D\x03" +
		"\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\u0373\x03\x02\x02\x02\u0371" +
		"\u036F\x03\x02\x02\x02\u0372\u0374\x07\x83\x02\x02\u0373\u0372\x03\x02" +
		"\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\u0375\x03\x02\x02\x02\u0375" +
		"\u0376\x07}\x02\x02\u0376U\x03\x02\x02\x02\u0377\u037D\x05\x1C\x0F\x02" +
		"\u0378\u0379\x07|\x02\x02\u0379\u037A\x05H%\x02\u037A\u037B\x07}\x02\x02" +
		"\u037B\u037D\x03\x02\x02\x02\u037C\u0377\x03\x02\x02\x02\u037C\u0378\x03" +
		"\x02\x02\x02\u037DW\x03\x02\x02\x02\u037E\u0383\x07|\x02\x02\u037F\u0381" +
		"\x05Z.\x02\u0380\u0382\x07\x83\x02\x02\u0381\u0380\x03\x02\x02\x02\u0381" +
		"\u0382\x03\x02\x02\x02\u0382\u0384\x03\x02\x02\x02\u0383\u037F\x03\x02" +
		"\x02\x02\u0383\u0384\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385" +
		"\u0386\x07}\x02\x02\u0386Y\x03\x02\x02\x02\u0387\u038C\x05\\/\x02\u0388" +
		"\u0389\x07\x83\x02\x02\u0389\u038B\x05\\/\x02\u038A\u0388\x03\x02\x02" +
		"\x02\u038B\u038E\x03\x02\x02\x02\u038C\u038A\x03\x02\x02\x02\u038C\u038D" +
		"\x03\x02\x02\x02\u038D[\x03\x02\x02\x02\u038E\u038C\x03\x02\x02\x02\u038F" +
		"\u0395\x05<\x1F\x02\u0390\u0391\x05\u0194\xCB\x02\u0391\u0392\x07\x90" +
		"\x02\x02\u0392\u0393\x05\x1A\x0E\x02\u0393\u0395\x03\x02\x02\x02\u0394" +
		"\u038F\x03\x02\x02\x02\u0394\u0390\x03\x02\x02\x02\u0395]\x03\x02\x02" +
		"\x02\u0396\u039F\x05\u0194\xCB\x02\u0397\u0399\x05`1\x02\u0398\u0397\x03" +
		"\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\u03A0\x03\x02\x02\x02\u039A" +
		"\u039B\x07\x94\x02\x02\u039B\u039D\x05\u0194\xCB\x02\u039C\u039E\x05`" +
		"1\x02\u039D\u039C\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\u03A0" +
		"\x03\x02\x02\x02\u039F\u0398\x03\x02\x02\x02\u039F\u039A\x03\x02\x02\x02" +
		"\u03A0\u03A8\x03\x02\x02\x02\u03A1\u03A2\x07\x82\x02\x02\u03A2\u03A4\x05" +
		"\u0194\xCB\x02\u03A3\u03A5\x05`1\x02\u03A4\u03A3\x03\x02\x02\x02\u03A4" +
		"\u03A5\x03\x02\x02\x02\u03A5\u03A7\x03\x02\x02\x02\u03A6\u03A1\x03\x02" +
		"\x02\x02\u03A7\u03AA\x03\x02\x02\x02\u03A8\u03A6\x03\x02\x02\x02\u03A8" +
		"\u03A9\x03\x02\x02\x02\u03A9_\x03\x02\x02\x02\u03AA\u03A8\x03\x02\x02" +
		"\x02\u03AB\u03AF\x07\x91\x02\x02\u03AC\u03AE\x07\x83\x02\x02\u03AD\u03AC" +
		"\x03\x02\x02\x02\u03AE\u03B1\x03\x02\x02\x02\u03AF\u03AD\x03\x02\x02\x02" +
		"\u03AF\u03B0\x03\x02\x02\x02\u03B0\u03B2\x03\x02\x02\x02\u03B1\u03AF\x03" +
		"\x02\x02\x02\u03B2\u03B3\x07\x92\x02\x02\u03B3a\x03\x02\x02\x02\u03B4" +
		"\u03B9\x05\b\x05\x02\u03B5\u03B8\x05\u0124\x93\x02\u03B6\u03B8\x07\x88" +
		"\x02\x02\u03B7\u03B5\x03\x02\x02\x02\u03B7\u03B6\x03\x02\x02\x02\u03B8" +
		"\u03BB\x03\x02\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03B9\u03BA\x03\x02" +
		"\x02\x02\u03BA\u03BD\x03\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02\u03BC" +
		"\u03BE\x07\x93\x02\x02\u03BD\u03BC\x03\x02\x02\x02\u03BD\u03BE\x03\x02" +
		"\x02\x02\u03BEc\x03\x02\x02\x02\u03BF\u03C1\x07\x10\x02\x02\u03C0\u03BF" +
		"\x03\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02" +
		"\u03C2\u03C3\x05f4\x02\u03C3\u03C4\x05\u0158\xAD\x02\u03C4\u03C5\x05n" +
		"8\x02\u03C5e\x03\x02\x02\x02\u03C6\u03C7\x07\x80\x02\x02\u03C7\u03D2\x07" +
		"\x81\x02\x02\u03C8\u03C9\x07\x80\x02\x02\u03C9\u03CA\x05h5\x02\u03CA\u03CB" +
		"\x07\x81\x02\x02\u03CB\u03D2\x03\x02\x02\x02\u03CC\u03CD\x07\x80\x02\x02" +
		"\u03CD\u03CE\x05l7\x02\u03CE\u03CF\x07\x81\x02\x02\u03CF\u03D2\x03\x02" +
		"\x02\x02\u03D0\u03D2\x05\u0194\xCB\x02\u03D1\u03C6\x03\x02\x02\x02\u03D1" +
		"\u03C8\x03\x02\x02\x02\u03D1\u03CC\x03\x02\x02\x02\u03D1\u03D0\x03\x02" +
		"\x02\x02\u03D2g\x03\x02\x02\x02\u03D3\u03D8\x05j6\x02\u03D4\u03D5\x07" +
		"\x83\x02\x02\u03D5\u03D7\x05j6\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7\u03DA" +
		"\x03\x02\x02\x02\u03D8\u03D6\x03\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02" +
		"\u03D9i\x03\x02\x02\x02\u03DA\u03D8\x03\x02\x02\x02\u03DB\u03DD\t\x04" +
		"\x02\x02\u03DC\u03DB\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD" +
		"\u03DE\x03\x02\x02\x02\u03DE\u03DF\x05\x06\x04\x02\u03DF\u03E0\x05\u0194" +
		"\xCB\x02\u03E0k\x03\x02\x02\x02\u03E1\u03E6\x05\u0194\xCB\x02\u03E2\u03E3" +
		"\x07\x83\x02\x02\u03E3\u03E5\x05\u0194\xCB\x02\u03E4\u03E2\x03\x02\x02" +
		"\x02\u03E5\u03E8\x03\x02\x02\x02\u03E6\u03E4\x03\x02\x02\x02\u03E6\u03E7" +
		"\x03\x02\x02\x02\u03E7m\x03\x02\x02\x02\u03E8\u03E6\x03\x02\x02\x02\u03E9" +
		"\u03EC\x05\x1A\x0E\x02\u03EA\u03EC\x05\x8EH\x02\u03EB\u03E9\x03\x02\x02" +
		"\x02\u03EB\u03EA\x03\x02\x02\x02\u03ECo\x03\x02\x02\x02\u03ED\u03EE\x05" +
		"r:\x02\u03EE\u03EF\x05t;\x02\u03EFq\x03\x02\x02\x02\u03F0\u03F2\x071\x02" +
		"\x02\u03F1\u03F3\x05\x06\x04\x02\u03F2\u03F1\x03\x02\x02\x02\u03F2\u03F3" +
		"\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02\u03F4\u03F5\x05\u0194\xCB" +
		"\x02\u03F5\u03F6\x077\x02\x02\u03F6\u03F7\x05\x1A\x0E\x02\u03F7s\x03\x02" +
		"\x02\x02\u03F8\u03FA\x05v<\x02\u03F9\u03F8\x03\x02\x02\x02\u03FA\u03FD" +
		"\x03\x02\x02\x02\u03FB\u03F9\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02" +
		"\u03FC\u03FE\x03\x02\x02\x02\u03FD\u03FB\x03\x02\x02\x02\u03FE\u0400\x05" +
		"\x82B\x02\u03FF\u0401\x05\x84C\x02\u0400\u03FF\x03\x02\x02\x02\u0400\u0401" +
		"\x03\x02\x02\x02\u0401u\x03\x02\x02\x02\u0402\u0408\x05r:\x02\u0403\u0408" +
		"\x05x=\x02\u0404\u0408\x05z>\x02\u0405\u0408\x05|?\x02\u0406\u0408\x05" +
		"~@\x02\u0407\u0402\x03\x02\x02\x02\u0407\u0403\x03\x02\x02\x02\u0407\u0404" +
		"\x03\x02\x02\x02\u0407\u0405\x03\x02\x02\x02\u0407\u0406\x03\x02\x02\x02" +
		"\u0408w\x03\x02\x02\x02\u0409\u040A\x07>\x02\x02\u040A\u040B\x05\u0194" +
		"\xCB\x02\u040B\u040C\x07\x90\x02\x02\u040C\u040D\x05\x1A\x0E\x02\u040D" +
		"y\x03\x02\x02\x02\u040E\u040F\x07o\x02\x02\u040F\u0410\x05\x1A\x0E\x02" +
		"\u0410{\x03\x02\x02\x02\u0411\u0413\x07=\x02\x02\u0412\u0414\x05\x06\x04" +
		"\x02\u0413\u0412\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0414\u0415" +
		"\x03\x02\x02\x02\u0415\u0416\x05\u0194\xCB\x02\u0416\u0417\x077\x02\x02" +
		"\u0417\u0418\x05\x1A\x0E\x02\u0418\u0419\x07F\x02\x02\u0419\u041A\x05" +
		"\x1A\x0E\x02\u041A\u041B\x07\'\x02\x02\u041B\u041E\x05\x1A\x0E\x02\u041C" +
		"\u041D\x07;\x02\x02\u041D\u041F\x05\u0194\xCB\x02\u041E\u041C\x03\x02" +
		"\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F}\x03\x02\x02\x02\u0420\u0421" +
		"\x07H\x02\x02\u0421\u0426\x05\x80A\x02\u0422\u0423\x07\x83\x02\x02\u0423" +
		"\u0425\x05\x80A\x02\u0424\u0422\x03\x02\x02\x02\u0425\u0428\x03\x02\x02" +
		"\x02\u0426\u0424\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427\x7F" +
		"\x03\x02\x02\x02\u0428\u0426\x03\x02\x02\x02\u0429\u042B\x05\x1A\x0E\x02" +
		"\u042A\u042C\t\n\x02\x02\u042B\u042A\x03\x02\x02\x02\u042B\u042C\x03\x02" +
		"\x02\x02\u042C\x81\x03\x02\x02\x02\u042D\u042E\x07V\x02\x02\u042E\u0435" +
		"\x05\x1A\x0E\x02\u042F\u0430\x074\x02\x02\u0430\u0431\x05\x1A\x0E\x02" +
		"\u0431\u0432\x07\x15\x02\x02\u0432\u0433\x05\x1A\x0E\x02\u0433\u0435\x03" +
		"\x02\x02\x02\u0434\u042D\x03\x02\x02\x02\u0434\u042F\x03\x02\x02\x02\u0435" +
		"\x83\x03\x02\x02\x02\u0436\u0437\x07;\x02\x02\u0437\u0438\x05\u0194\xCB" +
		"\x02\u0438\u0439\x05t;\x02\u0439\x85\x03\x02\x02\x02\u043A\u0443\x05\x88" +
		"E\x02\u043B\u043E\x05\x90I\x02\u043C\u043E\x05\x98M\x02\u043D\u043B\x03" +
		"\x02\x02\x02\u043D\u043C\x03\x02\x02\x02\u043E\u043F\x03\x02\x02\x02\u043F" +
		"\u0440\x07\x85\x02\x02\u0440\u0443\x03\x02\x02\x02\u0441\u0443\x05\x8A" +
		"F\x02\u0442\u043A\x03\x02\x02\x02\u0442\u043D\x03\x02\x02\x02\u0442\u0441" +
		"\x03\x02\x02\x02\u0443\x87\x03\x02\x02\x02\u0444\u0445\x05\u0194\xCB\x02" +
		"\u0445\u0446\x07\x84\x02\x02\u0446\u0447\x05\x86D\x02\u0447\x89\x03\x02" +
		"\x02\x02\u0448\u044B\x05\x8EH\x02\u0449\u044B\x05\x8CG\x02\u044A\u0448" +
		"\x03\x02\x02\x02\u044A\u0449\x03\x02\x02\x02\u044B\x8B\x03\x02\x02\x02" +
		"\u044C\u04CC\x07\x85\x02\x02\u044D\u044E\x05\x1A\x0E\x02\u044E\u044F\x07" +
		"\x85\x02\x02\u044F\u04CC\x03\x02\x02\x02\u0450\u0451\x075\x02\x02\u0451" +
		"\u0452\x07\x80\x02\x02\u0452\u0453\x05\x1A\x0E\x02\u0453\u0454\x07\x81" +
		"\x02\x02\u0454\u0457\x05\x9AN\x02\u0455\u0456\x07%\x02\x02\u0456\u0458" +
		"\x05\x9AN\x02\u0457\u0455\x03\x02\x02\x02\u0457\u0458\x03\x02\x02\x02" +
		"\u0458\u04CC\x03\x02\x02\x02\u0459\u045A\x07^\x02\x02\u045A\u045B\x07" +
		"\x80\x02\x02\u045B\u045C\x05\x1A\x0E\x02\u045C\u045D\x07\x81\x02\x02\u045D" +
		"\u0461\x07|\x02\x02\u045E\u0460\x05\x9CO\x02\u045F\u045E\x03\x02\x02\x02" +
		"\u0460\u0463\x03\x02\x02\x02\u0461\u045F\x03\x02\x02\x02\u0461\u0462\x03" +
		"\x02\x02\x02\u0462\u0464\x03\x02\x02\x02\u0463\u0461\x03\x02\x02\x02\u0464" +
		"\u0465\x07}\x02\x02\u0465\u04CC\x03\x02\x02\x02\u0466\u0467\x07p\x02\x02" +
		"\u0467\u0468\x07\x80\x02\x02\u0468\u0469\x05\x1A\x0E\x02\u0469\u046A\x07" +
		"\x81\x02\x02\u046A\u046B\x05\x8AF\x02\u046B\u04CC\x03\x02\x02\x02\u046C" +
		"\u046D\x07\"\x02\x02\u046D\u046E\x05\x8AF\x02\u046E\u046F\x07p\x02\x02" +
		"\u046F\u0470\x07\x80\x02\x02\u0470\u0471\x05\x1A\x0E\x02\u0471\u0472\x07" +
		"\x81\x02\x02\u0472\u0473\x07\x85\x02\x02\u0473\u04CC\x03\x02\x02\x02\u0474" +
		"\u0475\x07/\x02\x02\u0475\u0477\x07\x80\x02\x02\u0476\u0478\x05\xA2R\x02" +
		"\u0477\u0476\x03\x02\x02\x02\u0477\u0478\x03\x02\x02\x02\u0478\u0479\x03" +
		"\x02\x02\x02\u0479\u047B\x07\x85\x02\x02\u047A\u047C\x05\x1A\x0E\x02\u047B" +
		"\u047A\x03\x02\x02\x02\u047B\u047C\x03\x02\x02\x02\u047C\u047D\x03\x02" +
		"\x02\x02\u047D\u047F\x07\x85\x02\x02\u047E\u0480\x05\xA4S\x02\u047F\u047E" +
		"\x03\x02\x02\x02\u047F\u0480\x03\x02\x02\x02\u0480\u0481\x03\x02\x02\x02" +
		"\u0481\u0482\x07\x81\x02\x02\u0482\u04CC\x05\x8AF\x02\u0483\u0484\x07" +
		"0\x02\x02\u0484\u0485\x07\x80\x02\x02\u0485\u0486\x05\x92J\x02\u0486\u0487" +
		"\x05\u0194\xCB\x02\u0487\u0488\x077\x02\x02\u0488\u0489\x05\x1A\x0E\x02" +
		"\u0489\u048A\x07\x81\x02\x02\u048A\u048B\x05\x8AF\x02\u048B\u04CC\x03" +
		"\x02\x02\x02\u048C\u048D\x07\x14\x02\x02\u048D\u04CC\x07\x85\x02\x02\u048E" +
		"\u048F\x07\x1D\x02\x02\u048F\u04CC\x07\x85\x02\x02\u0490\u0495\x073\x02" +
		"\x02\u0491\u0496\x05\u0194\xCB\x02\u0492\u0493\x07\x17\x02\x02\u0493\u0496" +
		"\x05\x1A\x0E\x02\u0494\u0496\x07\x1F\x02\x02\u0495\u0491\x03\x02\x02\x02" +
		"\u0495\u0492\x03\x02\x02\x02\u0495\u0494\x03\x02\x02\x02\u0496\u0497\x03" +
		"\x02\x02\x02\u0497\u04CC\x07\x85\x02\x02\u0498\u049A\x07S\x02\x02\u0499" +
		"\u049B\x05\x1A\x0E\x02\u049A\u0499\x03\x02\x02\x02\u049A\u049B\x03\x02" +
		"\x02\x02\u049B\u049C\x03\x02\x02\x02\u049C\u04CC\x07\x85\x02\x02\u049D" +
		"\u049F\x07`\x02\x02\u049E\u04A0\x05\x1A\x0E\x02\u049F\u049E\x03\x02\x02" +
		"\x02\u049F\u04A0\x03\x02\x02\x02\u04A0\u04A1\x03\x02\x02\x02\u04A1\u04CC" +
		"\x07\x85\x02\x02\u04A2\u04A3\x07b\x02\x02\u04A3\u04A9\x05\x8EH\x02\u04A4" +
		"\u04A6\x05\xA6T\x02\u04A5\u04A7\x05\xAEX\x02\u04A6\u04A5\x03\x02\x02\x02" +
		"\u04A6\u04A7\x03\x02\x02\x02\u04A7\u04AA\x03\x02\x02\x02\u04A8\u04AA\x05" +
		"\xAEX\x02\u04A9\u04A4\x03\x02\x02\x02\u04A9\u04A8\x03\x02\x02\x02\u04AA" +
		"\u04CC\x03\x02\x02\x02\u04AB\u04AC\x07\x1A\x02\x02\u04AC\u04CC\x05\x8E" +
		"H\x02\u04AD\u04AE\x07f\x02\x02\u04AE\u04CC\x05\x8EH\x02\u04AF\u04B0\x07" +
		"?\x02\x02\u04B0\u04B1\x07\x80\x02\x02\u04B1\u04B2\x05\x1A\x0E\x02\u04B2" +
		"\u04B3\x07\x81\x02\x02\u04B3\u04B4\x05\x8AF\x02\u04B4\u04CC\x03\x02\x02" +
		"\x02\u04B5\u04B6\x07i\x02\x02\u04B6\u04B7\x07\x80\x02\x02\u04B7\u04B8" +
		"\x05\xB0Y\x02\u04B8\u04B9\x07\x81\x02\x02\u04B9\u04BA\x05\x8AF\x02\u04BA" +
		"\u04CC\x03\x02\x02\x02\u04BB\u04BF\x07q\x02\x02\u04BC\u04BD\x07S\x02\x02" +
		"\u04BD\u04C0\x05\x1A\x0E\x02\u04BE\u04C0\x07\x14\x02\x02\u04BF\u04BC\x03" +
		"\x02\x02\x02\u04BF\u04BE\x03\x02\x02\x02\u04C0\u04C1\x03\x02\x02\x02\u04C1" +
		"\u04CC\x07\x85\x02\x02\u04C2\u04C3\x07g\x02\x02\u04C3\u04CC\x05\x8EH\x02" +
		"\u04C4\u04C5\x07-\x02\x02\u04C5\u04C6\x07\x80\x02\x02\u04C6\u04C7\x05" +
		"\u014C\xA7\x02\u04C7\u04C8\x05\u014E\xA8\x02\u04C8\u04C9\x07\x81\x02\x02" +
		"\u04C9\u04CA\x05\x8AF\x02\u04CA\u04CC\x03\x02\x02\x02\u04CB\u044C\x03" +
		"\x02\x02\x02\u04CB\u044D\x03\x02\x02\x02\u04CB\u0450\x03\x02\x02\x02\u04CB" +
		"\u0459\x03\x02\x02\x02\u04CB\u0466\x03\x02\x02\x02\u04CB\u046C\x03\x02" +
		"\x02\x02\u04CB\u0474\x03\x02\x02\x02\u04CB\u0483\x03\x02\x02\x02\u04CB" +
		"\u048C\x03\x02\x02\x02\u04CB\u048E\x03\x02\x02\x02\u04CB\u0490\x03\x02" +
		"\x02\x02\u04CB\u0498\x03\x02\x02\x02\u04CB\u049D\x03\x02\x02\x02\u04CB" +
		"\u04A2\x03\x02\x02\x02\u04CB\u04AB\x03\x02\x02\x02\u04CB\u04AD\x03\x02" +
		"\x02\x02\u04CB\u04AF\x03\x02\x02\x02\u04CB\u04B5\x03\x02\x02\x02\u04CB" +
		"\u04BB\x03\x02\x02\x02\u04CB\u04C2\x03\x02\x02\x02\u04CB\u04C4\x03\x02" +
		"\x02\x02\u04CC\x8D\x03\x02\x02\x02\u04CD\u04CF\x07|\x02\x02\u04CE\u04D0" +
		"\x05\xA0Q\x02\u04CF\u04CE\x03\x02\x02\x02\u04CF\u04D0\x03\x02\x02\x02" +
		"\u04D0\u04D1\x03\x02\x02\x02\u04D1\u04D2\x07}\x02\x02\u04D2\x8F\x03\x02" +
		"\x02\x02\u04D3\u04D4\x05\x92J\x02\u04D4\u04D9\x05\x94K\x02\u04D5\u04D6" +
		"\x07\x83\x02\x02\u04D6\u04D8\x05\x94K\x02\u04D7\u04D5\x03\x02\x02\x02" +
		"\u04D8\u04DB\x03\x02\x02\x02\u04D9\u04D7\x03\x02\x02\x02\u04D9\u04DA\x03" +
		"\x02\x02\x02\u04DA\x91\x03\x02\x02\x02\u04DB\u04D9\x03\x02\x02\x02\u04DC" +
		"\u04DF\x07j\x02\x02\u04DD\u04DF\x05\x06\x04\x02\u04DE\u04DC\x03\x02\x02" +
		"\x02\u04DE\u04DD\x03\x02\x02\x02\u04DF\x93\x03\x02\x02\x02\u04E0\u04E3" +
		"\x05\u0194\xCB\x02\u04E1\u04E2\x07\x90\x02\x02\u04E2\u04E4\x05\x96L\x02" +
		"\u04E3\u04E1\x03\x02\x02\x02\u04E3\u04E4\x03\x02\x02\x02\u04E4\x95\x03" +
		"\x02\x02\x02\u04E5\u04E9\x05\x1A\x0E\x02\u04E6\u04E9\x05\u0126\x94\x02" +
		"\u04E7\u04E9\x05\u0156\xAC\x02\u04E8\u04E5\x03\x02\x02\x02\u04E8\u04E6" +
		"\x03\x02\x02\x02\u04E8\u04E7\x03\x02\x02\x02\u04E9\x97\x03\x02\x02\x02" +
		"\u04EA\u04EB\x07\x1C\x02\x02\u04EB\u04EC\x05\x06\x04\x02\u04EC\u04ED\x05" +
		"\xEAv\x02\u04ED\x99\x03\x02\x02\x02\u04EE\u04F1\x05\x8EH\x02\u04EF\u04F1" +
		"\x05\x8CG\x02\u04F0\u04EE\x03\x02\x02\x02\u04F0\u04EF\x03\x02\x02\x02" +
		"\u04F1\x9B\x03\x02\x02\x02\u04F2\u04F4\x05\x9EP\x02\u04F3\u04F2\x03\x02" +
		"\x02\x02\u04F4\u04F5\x03\x02\x02\x02\u04F5\u04F3\x03\x02\x02\x02\u04F5" +
		"\u04F6\x03\x02\x02\x02\u04F6\u04F7\x03\x02\x02\x02\u04F7\u04F8\x05\xA0" +
		"Q\x02\u04F8\x9D\x03\x02\x02\x02\u04F9\u04FA\x07\x17\x02\x02\u04FA\u04FB" +
		"\x05\x1A\x0E\x02\u04FB\u04FC\x07\x84\x02\x02\u04FC\u0500\x03\x02\x02\x02" +
		"\u04FD\u04FE\x07\x1F\x02\x02\u04FE\u0500\x07\x84\x02\x02\u04FF\u04F9\x03" +
		"\x02\x02\x02\u04FF\u04FD\x03\x02\x02\x02\u0500\x9F\x03\x02\x02\x02\u0501" +
		"\u0503\x05\x86D\x02\u0502\u0501\x03\x02\x02\x02\u0503\u0504\x03\x02\x02" +
		"\x02\u0504\u0502\x03\x02\x02\x02\u0504\u0505\x03\x02\x02\x02\u0505\xA1" +
		"\x03\x02\x02\x02\u0506\u0510\x05\x90I\x02\u0507\u050C\x05\x1A\x0E\x02" +
		"\u0508\u0509\x07\x83\x02\x02\u0509\u050B\x05\x1A\x0E\x02\u050A\u0508\x03" +
		"\x02\x02\x02\u050B\u050E\x03\x02\x02\x02\u050C\u050A\x03\x02\x02\x02\u050C" +
		"\u050D\x03\x02\x02\x02\u050D\u0510\x03\x02\x02\x02\u050E\u050C\x03\x02" +
		"\x02\x02\u050F\u0506\x03\x02\x02\x02\u050F\u0507\x03\x02\x02\x02\u0510" +
		"\xA3\x03\x02\x02\x02\u0511\u0516\x05\x1A\x0E\x02\u0512\u0513\x07\x83\x02" +
		"\x02\u0513\u0515\x05\x1A\x0E\x02\u0514\u0512\x03\x02\x02\x02\u0515\u0518" +
		"\x03\x02\x02\x02\u0516\u0514\x03\x02\x02\x02\u0516\u0517\x03\x02\x02\x02" +
		"\u0517\xA5\x03\x02\x02\x02\u0518\u0516\x03\x02\x02\x02\u0519\u051D\x05" +
		"\xA8U\x02\u051A\u051C\x05\xA8U\x02\u051B\u051A\x03\x02\x02\x02\u051C\u051F" +
		"\x03\x02\x02\x02\u051D\u051B\x03\x02\x02\x02\u051D\u051E\x03\x02\x02\x02" +
		"\u051E\u0521\x03\x02\x02\x02\u051F\u051D\x03\x02\x02\x02\u0520\u0522\x05" +
		"\xAAV\x02\u0521\u0520\x03\x02\x02\x02\u0521\u0522\x03\x02\x02\x02\u0522" +
		"\u0525\x03\x02\x02\x02\u0523\u0525\x05\xAAV\x02\u0524\u0519\x03\x02\x02" +
		"\x02\u0524\u0523\x03\x02\x02\x02\u0525\xA7\x03\x02\x02\x02\u0526\u0527" +
		"\x07\x18\x02\x02\u0527\u0528\x07\x80\x02\x02\u0528\u052A\x05\x12\n\x02" +
		"\u0529\u052B\x05\u0194\xCB\x02\u052A\u0529\x03\x02\x02\x02\u052A\u052B" +
		"\x03\x02\x02\x02\u052B\u052C\x03\x02\x02\x02\u052C\u052E\x07\x81\x02\x02" +
		"\u052D\u052F\x05\xACW\x02\u052E\u052D\x03\x02\x02\x02\u052E\u052F\x03" +
		"\x02\x02\x02\u052F\u0530\x03\x02\x02\x02\u0530\u0531\x05\x8EH\x02\u0531" +
		"\xA9\x03\x02\x02\x02\u0532\u0534\x07\x18\x02\x02\u0533\u0535\x05\xACW" +
		"\x02\u0534\u0533\x03\x02\x02\x02\u0534\u0535\x03\x02\x02\x02\u0535\u0536" +
		"\x03\x02\x02\x02\u0536\u0537\x05\x8EH\x02\u0537\xAB\x03\x02\x02\x02\u0538" +
		"\u0539\x07n\x02\x02\u0539\u053A\x07\x80\x02\x02\u053A\u053B\x05\x1A\x0E" +
		"\x02\u053B\u053C\x07\x81\x02\x02\u053C\xAD\x03\x02\x02\x02\u053D\u053E" +
		"\x07,\x02\x02\u053E\u053F\x05\x8EH\x02\u053F\xAF\x03\x02\x02\x02\u0540" +
		"\u0543\x05\x90I\x02\u0541\u0543\x05\x1A\x0E\x02\u0542\u0540\x03\x02\x02" +
		"\x02\u0542\u0541\x03\x02\x02\x02\u0543\xB1\x03\x02\x02\x02\u0544\u0545" +
		"\x07B\x02\x02\u0545\u0546\x05\xB4[\x02\u0546\u0548\x05\xB6\\\x02\u0547" +
		"\u0549\x07\x85\x02\x02\u0548\u0547\x03\x02\x02\x02\u0548\u0549\x03\x02" +
		"\x02\x02\u0549\xB3\x03\x02\x02\x02\u054A\u054F\x05\u0194\xCB\x02\u054B" +
		"\u054C\x07\x82\x02\x02\u054C\u054E\x05\u0194\xCB\x02\u054D\u054B\x03\x02" +
		"\x02\x02\u054E\u0551\x03\x02\x02\x02\u054F\u054D\x03\x02\x02\x02\u054F" +
		"\u0550\x03\x02\x02\x02\u0550\xB5\x03\x02\x02\x02\u0551\u054F\x03\x02\x02" +
		"\x02\u0552\u0554\x07|\x02\x02\u0553\u0555\x05\xB8]\x02\u0554\u0553\x03" +
		"\x02\x02\x02\u0554\u0555\x03\x02\x02\x02\u0555\u0557\x03\x02\x02\x02\u0556" +
		"\u0558\x05\xBC_\x02\u0557\u0556\x03\x02\x02\x02\u0557\u0558\x03\x02\x02" +
		"\x02\u0558\u055A\x03\x02\x02\x02\u0559\u055B\x05\xC0a\x02\u055A\u0559" +
		"\x03\x02\x02\x02\u055A\u055B\x03\x02\x02\x02\u055B\u055C\x03\x02\x02\x02" +
		"\u055C\u055D\x07}\x02\x02\u055D\xB7\x03\x02\x02\x02\u055E\u0560\x05\xBA" +
		"^\x02\u055F\u055E\x03\x02\x02\x02\u0560\u0561\x03\x02\x02\x02\u0561\u055F" +
		"\x03\x02\x02\x02\u0561\u0562\x03\x02\x02\x02\u0562\xB9\x03\x02\x02\x02" +
		"\u0563\u0564\x07*\x02\x02\u0564\u0565\x07\f\x02\x02\u0565\u0566\x05\u0194" +
		"\xCB\x02\u0566\u0567\x07\x85\x02\x02\u0567\xBB\x03\x02\x02\x02\u0568\u056A" +
		"\x05\xBE`\x02\u0569\u0568\x03\x02\x02\x02\u056A\u056B\x03\x02\x02\x02" +
		"\u056B\u0569\x03\x02\x02\x02\u056B\u056C\x03\x02\x02\x02\u056C\xBD\x03" +
		"\x02\x02\x02\u056D\u056E\x07i\x02\x02\u056E\u056F\x05\u0194\xCB\x02\u056F" +
		"\u0570\x07\x90\x02\x02\u0570\u0571\x05\x04\x03\x02\u0571\u0572\x07\x85" +
		"\x02\x02\u0572\u057D\x03\x02\x02\x02\u0573\u0574\x07i\x02\x02\u0574\u0575" +
		"\x05\x04\x03\x02\u0575\u0576\x07\x85\x02\x02\u0576\u057D\x03\x02\x02\x02" +
		"\u0577\u0578\x07i\x02\x02\u0578\u0579\x07[\x02\x02\u0579\u057A\x05\x04" +
		"\x03\x02\u057A\u057B\x07\x85\x02\x02\u057B\u057D\x03\x02\x02\x02\u057C" +
		"\u056D\x03\x02\x02\x02\u057C\u0573\x03\x02\x02\x02\u057C\u0577\x03\x02" +
		"\x02\x02\u057D\xBF\x03\x02\x02\x02\u057E\u0580\x05\xC2b\x02\u057F\u057E" +
		"\x03\x02\x02\x02\u0580\u0581\x03\x02\x02\x02\u0581\u057F\x03\x02\x02\x02" +
		"\u0581\u0582\x03\x02\x02\x02\u0582\xC1\x03\x02\x02\x02\u0583\u0586\x05" +
		"\xB2Z\x02\u0584\u0586\x05\xC4c\x02\u0585\u0583\x03\x02\x02\x02\u0585\u0584" +
		"\x03\x02\x02\x02\u0586\xC3\x03\x02\x02\x02\u0587\u0589\x05\u0140\xA1\x02" +
		"\u0588\u0587\x03\x02\x02\x02\u0588\u0589\x03\x02\x02\x02\u0589\u058B\x03" +
		"\x02\x02\x02\u058A\u058C\x05\xE2r\x02\u058B\u058A\x03\x02\x02\x02\u058B" +
		"\u058C\x03\x02\x02\x02\u058C\u0592\x03\x02\x02\x02\u058D\u0593\x05\u0170" +
		"\xB9\x02\u058E\u0593\x05\u0172\xBA\x02\u058F\u0593\x05\u0174\xBB\x02\u0590" +
		"\u0593\x05\u0176\xBC\x02\u0591\u0593\x05\u0178\xBD\x02\u0592\u058D\x03" +
		"\x02\x02\x02\u0592\u058E\x03\x02\x02\x02\u0592\u058F\x03\x02\x02\x02\u0592" +
		"\u0590\x03\x02\x02\x02\u0592\u0591\x03\x02\x02\x02\u0593\xC5\x03\x02\x02" +
		"\x02\u0594\u0595\x05\u0194\xCB\x02\u0595\u0596\x07\x94\x02\x02\u0596\u0598" +
		"\x05\u0194\xCB\x02\u0597\u0599\x05\x14\v\x02\u0598\u0597\x03\x02\x02\x02" +
		"\u0598\u0599\x03\x02\x02\x02\u0599\xC7\x03\x02\x02\x02\u059A\u059B\x07" +
		"\x91\x02\x02\u059B\u05A0\x05\xCAf\x02\u059C\u059D\x07\x83\x02\x02\u059D" +
		"\u059F\x05\xCAf\x02\u059E\u059C\x03\x02\x02\x02\u059F\u05A2\x03\x02\x02" +
		"\x02\u05A0\u059E\x03\x02\x02\x02\u05A0\u05A1\x03\x02\x02\x02\u05A1\u05A3" +
		"\x03\x02\x02\x02\u05A2\u05A0\x03\x02\x02\x02\u05A3\u05A4\x07\x92\x02\x02" +
		"\u05A4\xC9\x03\x02\x02\x02\u05A5\u05A7\x05\u0140\xA1\x02\u05A6\u05A5\x03" +
		"\x02\x02\x02\u05A6\u05A7\x03\x02\x02\x02\u05A7\u05A8\x03\x02\x02\x02\u05A8" +
		"\u05A9\x05\u0194\xCB\x02\u05A9\xCB\x03\x02\x02\x02\u05AA\u05AB\x07\x84" +
		"\x02\x02\u05AB\u05B0\x05\x12\n\x02\u05AC\u05AD\x07\x83\x02\x02\u05AD\u05AF" +
		"\x05\x04\x03\x02\u05AE\u05AC\x03\x02\x02\x02\u05AF\u05B2\x03\x02\x02\x02" +
		"\u05B0\u05AE\x03\x02\x02\x02\u05B0\u05B1\x03\x02\x02\x02\u05B1\xCD\x03" +
		"\x02\x02\x02\u05B2\u05B0\x03\x02\x02\x02\u05B3\u05B8\x05\x04\x03\x02\u05B4" +
		"\u05B5\x07\x83\x02\x02\u05B5\u05B7\x05\x04\x03\x02\u05B6\u05B4\x03\x02" +
		"\x02\x02\u05B7\u05BA\x03\x02\x02\x02\u05B8\u05B6\x03\x02\x02\x02\u05B8" +
		"\u05B9\x03\x02\x02\x02\u05B9\xCF\x03\x02\x02\x02\u05BA\u05B8\x03\x02\x02" +
		"\x02\u05BB\u05BD\x05\xD2j\x02\u05BC\u05BB\x03\x02\x02\x02\u05BD\u05BE" +
		"\x03\x02\x02\x02\u05BE\u05BC\x03\x02\x02\x02\u05BE\u05BF\x03\x02\x02\x02" +
		"\u05BF\xD1\x03\x02\x02\x02\u05C0\u05C1\x07o\x02\x02\u05C1\u05C2\x05\u0194" +
		"\xCB\x02\u05C2\u05C3\x07\x84\x02\x02\u05C3\u05C4\x05\xD4k\x02\u05C4\xD3" +
		"\x03\x02\x02\x02\u05C5\u05D0\x05\xDAn\x02\u05C6\u05C9\x05\xD6l\x02\u05C7" +
		"\u05C8\x07\x83\x02\x02\u05C8\u05CA\x05\xD8m\x02\u05C9\u05C7\x03\x02\x02" +
		"\x02\u05C9\u05CA\x03\x02\x02\x02\u05CA\u05CD\x03\x02\x02\x02\u05CB\u05CC" +
		"\x07\x83\x02\x02\u05CC\u05CE\x05\xDAn\x02\u05CD\u05CB\x03\x02\x02\x02" +
		"\u05CD\u05CE\x03\x02\x02\x02\u05CE\u05D0\x03\x02\x02\x02\u05CF\u05C5\x03" +
		"\x02\x02\x02\u05CF\u05C6\x03\x02\x02\x02\u05D0\xD5\x03\x02\x02\x02\u05D1" +
		"\u05D5\x05\x12\n\x02\u05D2\u05D5\x07\x1B\x02\x02\u05D3\u05D5\x07]\x02" +
		"\x02\u05D4\u05D1\x03\x02\x02\x02\u05D4\u05D2\x03\x02\x02\x02\u05D4\u05D3" +
		"\x03\x02\x02\x02\u05D5\xD7\x03\x02\x02\x02\u05D6\u05DB\x05\x04\x03\x02" +
		"\u05D7\u05D8\x07\x83\x02\x02\u05D8\u05DA\x05\x04\x03\x02\u05D9\u05D7\x03" +
		"\x02\x02\x02\u05DA\u05DD\x03\x02\x02\x02\u05DB\u05D9\x03\x02\x02\x02\u05DB" +
		"\u05DC\x03\x02\x02\x02\u05DC\xD9\x03\x02\x02\x02\u05DD\u05DB\x03\x02\x02" +
		"\x02\u05DE\u05DF\x07C\x02\x02\u05DF\u05E0\x07\x80\x02\x02\u05E0\u05E1" +
		"\x07\x81\x02\x02\u05E1\xDB\x03\x02\x02\x02\u05E2\u05E4\x07|\x02\x02\u05E3" +
		"\u05E5\x05\xDEp\x02\u05E4";
	private static readonly _serializedATNSegment3: string =
		"\u05E3\x03\x02\x02\x02\u05E4\u05E5\x03\x02\x02\x02\u05E5\u05E6\x03\x02" +
		"\x02\x02\u05E6\u05E7\x07}\x02\x02\u05E7\xDD\x03\x02\x02\x02\u05E8\u05EA" +
		"\x05\xE0q\x02\u05E9\u05E8\x03\x02\x02\x02\u05EA\u05EB\x03\x02\x02\x02" +
		"\u05EB\u05E9\x03\x02\x02\x02\u05EB\u05EC\x03\x02\x02\x02\u05EC\xDF\x03" +
		"\x02\x02\x02\u05ED\u05EF\x05\u0140\xA1\x02\u05EE\u05ED\x03\x02\x02\x02" +
		"\u05EE\u05EF\x03\x02\x02\x02\u05EF\u05F1\x03\x02\x02\x02\u05F0\u05F2\x05" +
		"\xE2r\x02\u05F1\u05F0\x03\x02\x02\x02\u05F1\u05F2\x03\x02\x02\x02\u05F2" +
		"\u05F5\x03\x02\x02\x02\u05F3\u05F6\x05\xE6t\x02\u05F4\u05F6\x05\u0184" +
		"\xC3\x02\u05F5\u05F3\x03\x02\x02\x02\u05F5\u05F4\x03\x02\x02\x02\u05F6" +
		"\xE1\x03\x02\x02\x02\u05F7\u05F9\x05\xE4s\x02\u05F8\u05F7\x03\x02\x02" +
		"\x02\u05F9\u05FA\x03\x02\x02\x02\u05FA\u05F8\x03\x02\x02\x02\u05FA\u05FB" +
		"\x03\x02\x02\x02\u05FB\xE3\x03\x02\x02\x02\u05FC\u05FD\t\v\x02\x02\u05FD" +
		"\xE5\x03\x02\x02\x02\u05FE\u0612\x05\u0180\xC1\x02\u05FF\u0612\x05\xE8" +
		"u\x02\u0600\u0612\x05\u017A\xBE\x02\u0601\u0607\x05\u0116\x8C\x02\u0602" +
		"\u0608\x05\u011A\x8E\x02\u0603\u0604\x05\u0158\xAD\x02\u0604\u0605\x05" +
		"\x1A\x0E\x02\u0605\u0606\x07\x85\x02\x02\u0606\u0608\x03\x02\x02\x02\u0607" +
		"\u0602\x03\x02\x02\x02\u0607\u0603\x03\x02\x02\x02\u0608\u0612\x03\x02" +
		"\x02\x02\u0609\u0612\x05\u0186\xC4\x02\u060A\u060B\x07l\x02\x02\u060B" +
		"\u0612\x05\u0188\xC5\x02\u060C\u0612\x05\u0170\xB9\x02\u060D\u0612\x05" +
		"\u0172\xBA\x02\u060E\u0612\x05\u0174\xBB\x02\u060F\u0612\x05\u0176\xBC" +
		"\x02\u0610\u0612\x05\u0178\xBD\x02\u0611\u05FE\x03\x02\x02\x02\u0611\u05FF" +
		"\x03\x02\x02\x02\u0611\u0600\x03\x02\x02\x02\u0611\u0601\x03\x02\x02\x02" +
		"\u0611\u0609\x03\x02\x02\x02\u0611\u060A\x03\x02\x02\x02\u0611\u060C\x03" +
		"\x02\x02\x02\u0611\u060D\x03\x02\x02\x02\u0611\u060E\x03\x02\x02\x02\u0611" +
		"\u060F\x03\x02\x02\x02\u0611\u0610\x03\x02\x02\x02\u0612\xE7\x03\x02\x02" +
		"\x02\u0613\u061D\x05\x06\x04\x02\u0614\u0615\x05\x04\x03\x02\u0615\u0616" +
		"\x07\x82\x02\x02\u0616\u0617\x05\u0182\xC2\x02\u0617\u061E\x03\x02\x02" +
		"\x02\u0618\u061E\x05\u0188\xC5\x02\u0619\u061E\x05\u017E\xC0\x02\u061A" +
		"\u061E\x05\u0182\xC2\x02\u061B\u061E\x05\u018C\xC7\x02\u061C\u061E\x05" +
		"\u017C\xBF\x02\u061D\u0614\x03\x02\x02\x02\u061D\u0618\x03\x02\x02\x02" +
		"\u061D\u0619\x03\x02\x02\x02\u061D\u061A\x03\x02\x02\x02\u061D\u061B\x03" +
		"\x02\x02\x02\u061D\u061C\x03\x02\x02\x02\u061E\xE9\x03\x02\x02\x02\u061F" +
		"\u0624\x05\xECw\x02\u0620\u0621\x07\x83\x02\x02\u0621\u0623\x05\xECw\x02" +
		"\u0622\u0620\x03\x02\x02\x02\u0623\u0626\x03\x02\x02\x02\u0624\u0622\x03" +
		"\x02\x02\x02\u0624\u0625\x03\x02\x02\x02\u0625\xEB\x03\x02\x02\x02\u0626" +
		"\u0624\x03\x02\x02\x02\u0627\u0628\x05\u0194\xCB\x02\u0628\u0629\x07\x90" +
		"\x02\x02\u0629\u062A\x05\x1A\x0E\x02\u062A\xED\x03\x02\x02\x02\u062B\u0630" +
		"\x05\xF0y\x02\u062C\u062D\x07\x83\x02\x02\u062D\u062F\x05\xF0y\x02\u062E" +
		"\u062C\x03\x02\x02\x02\u062F\u0632\x03\x02\x02\x02\u0630\u062E\x03\x02" +
		"\x02\x02\u0630\u0631\x03\x02\x02\x02\u0631\xEF\x03\x02\x02\x02\u0632\u0630" +
		"\x03\x02\x02\x02\u0633\u0636\x05\u0194\xCB\x02\u0634\u0635\x07\x90\x02" +
		"\x02\u0635\u0637\x05\xF2z\x02\u0636\u0634\x03\x02\x02\x02\u0636\u0637" +
		"\x03\x02\x02\x02\u0637\xF1\x03\x02\x02\x02\u0638\u063B\x05\x1A\x0E\x02" +
		"\u0639\u063B\x05\u0126\x94\x02\u063A\u0638\x03\x02\x02\x02\u063A\u0639" +
		"\x03\x02\x02\x02\u063B\xF3\x03\x02\x02\x02\u063C\u063F\x05\x06\x04\x02" +
		"\u063D\u063F\x07l\x02\x02\u063E\u063C\x03\x02\x02\x02\u063E\u063D\x03" +
		"\x02\x02\x02\u063F\xF5\x03\x02\x02\x02\u0640\u0641\x05\x04\x03\x02\u0641" +
		"\xF7\x03\x02\x02\x02\u0642\u0645\x05\x8EH\x02\u0643\u0645\x07\x85\x02" +
		"\x02\u0644\u0642\x03\x02\x02\x02\u0644\u0643\x03\x02\x02\x02\u0645\xF9" +
		"\x03\x02\x02\x02\u0646\u064D\x05\u0102\x82\x02\u0647\u064A\x05\xFC\x7F" +
		"\x02\u0648\u0649\x07\x83\x02\x02\u0649\u064B\x05\u0102\x82\x02\u064A\u0648" +
		"\x03\x02\x02\x02\u064A\u064B\x03\x02\x02\x02\u064B\u064D\x03\x02\x02\x02" +
		"\u064C\u0646\x03\x02\x02\x02\u064C\u0647\x03\x02\x02\x02\u064D\xFB\x03" +
		"\x02\x02\x02\u064E\u0653\x05\xFE\x80\x02\u064F\u0650\x07\x83\x02\x02\u0650" +
		"\u0652\x05\xFE\x80\x02\u0651\u064F\x03\x02\x02\x02\u0652\u0655\x03\x02" +
		"\x02\x02\u0653\u0651\x03\x02\x02\x02\u0653\u0654\x03\x02\x02\x02\u0654" +
		"\xFD\x03\x02\x02\x02\u0655\u0653\x03\x02\x02\x02\u0656\u0658\x05\u0140" +
		"\xA1\x02\u0657\u0656\x03\x02\x02\x02\u0657\u0658\x03\x02\x02\x02\u0658" +
		"\u065A\x03\x02\x02\x02\u0659\u065B\x05\u0100\x81\x02\u065A\u0659\x03\x02" +
		"\x02\x02\u065A\u065B\x03\x02\x02\x02\u065B\u065C\x03\x02\x02\x02\u065C" +
		"\u065F\x05\u018E\xC8\x02\u065D\u065F\x07\r\x02\x02\u065E\u0657\x03\x02" +
		"\x02\x02\u065E\u065D\x03\x02\x02\x02\u065F\xFF\x03\x02\x02\x02\u0660\u0661" +
		"\t\f\x02\x02\u0661\u0101\x03\x02\x02\x02\u0662\u0664\x05\u0140\xA1\x02" +
		"\u0663\u0662\x03\x02\x02\x02\u0663\u0664\x03\x02\x02\x02\u0664\u0665\x03" +
		"\x02\x02\x02\u0665\u0666\x07K\x02\x02\u0666\u0667\x05\u0122\x92\x02\u0667" +
		"\u0668\x05\u0194\xCB\x02\u0668\u0103\x03\x02\x02\x02\u0669\u066B\x05\u0140" +
		"\xA1\x02\u066A\u0669\x03\x02\x02\x02\u066A\u066B\x03\x02\x02\x02\u066B" +
		"\u066D\x03\x02\x02\x02\u066C\u066E\x05\u010A\x86\x02\u066D\u066C\x03\x02" +
		"\x02\x02\u066D\u066E\x03\x02\x02\x02\u066E\u0679\x03\x02\x02\x02\u066F" +
		"\u0670\x072\x02\x02\u0670\u0672\x05\u010C\x87\x02\u0671\u0673\x05\u0108" +
		"\x85\x02\u0672\u0671\x03\x02\x02\x02\u0672\u0673\x03\x02\x02\x02\u0673" +
		"\u067A\x03\x02\x02\x02\u0674\u0675\x07W\x02\x02\u0675\u0677\x05\u010C" +
		"\x87\x02\u0676\u0678\x05\u0106\x84\x02\u0677\u0676\x03\x02\x02\x02\u0677" +
		"\u0678\x03\x02\x02\x02\u0678\u067A\x03\x02\x02\x02\u0679\u066F\x03\x02" +
		"\x02\x02\u0679\u0674\x03\x02\x02\x02\u067A\u0105\x03\x02\x02\x02\u067B" +
		"\u067D\x05\u0140\xA1\x02\u067C\u067B\x03\x02\x02\x02\u067C\u067D\x03\x02" +
		"\x02\x02\u067D\u067F\x03\x02\x02\x02\u067E\u0680\x05\u010A\x86\x02\u067F" +
		"\u067E\x03\x02\x02\x02\u067F\u0680\x03\x02\x02\x02\u0680\u0681\x03\x02" +
		"\x02\x02\u0681\u0682\x072\x02\x02\u0682\u0683\x05\u010C\x87\x02\u0683" +
		"\u0107\x03\x02\x02\x02\u0684\u0686\x05\u0140\xA1\x02\u0685\u0684\x03\x02" +
		"\x02\x02\u0685\u0686\x03\x02\x02\x02\u0686\u0688\x03\x02\x02\x02\u0687" +
		"\u0689\x05\u010A\x86\x02\u0688\u0687\x03\x02\x02\x02\u0688\u0689\x03\x02" +
		"\x02\x02\u0689\u068A\x03\x02\x02\x02\u068A\u068B\x07W\x02\x02\u068B\u068C" +
		"\x05\u010C\x87\x02\u068C\u0109\x03\x02\x02\x02\u068D\u0695\x07N\x02\x02" +
		"\u068E\u0695\x07:\x02\x02\u068F\u0695\x07M\x02\x02\u0690\u0691\x07N\x02" +
		"\x02\u0691\u0695\x07:\x02\x02\u0692\u0693\x07:\x02\x02\u0693\u0695\x07" +
		"N\x02\x02\u0694\u068D\x03\x02\x02\x02\u0694\u068E\x03\x02\x02\x02\u0694" +
		"\u068F\x03\x02\x02\x02\u0694\u0690\x03\x02\x02\x02\u0694\u0692\x03\x02" +
		"\x02\x02\u0695\u010B\x03\x02\x02\x02\u0696\u0699\x05\x8EH\x02\u0697\u0699" +
		"\x07\x85\x02\x02\u0698\u0696\x03\x02\x02\x02\u0698\u0697\x03\x02\x02\x02" +
		"\u0699\u010D\x03\x02\x02\x02\u069A\u069C\x05\u0140\xA1\x02\u069B\u069A" +
		"\x03\x02\x02\x02\u069B\u069C\x03\x02\x02\x02\u069C\u06A5\x03\x02\x02\x02" +
		"\u069D\u069E\x07\v\x02\x02\u069E\u069F\x05\x8EH\x02\u069F\u06A0\x05\u0112" +
		"\x8A\x02\u06A0\u06A6\x03\x02\x02\x02\u06A1\u06A2\x07R\x02\x02\u06A2\u06A3" +
		"\x05\x8EH\x02\u06A3\u06A4\x05\u0110\x89\x02\u06A4\u06A6\x03\x02\x02\x02" +
		"\u06A5\u069D\x03\x02\x02\x02\u06A5\u06A1\x03\x02\x02\x02\u06A6\u010F\x03" +
		"\x02\x02\x02\u06A7\u06A9\x05\u0140\xA1\x02\u06A8\u06A7\x03\x02\x02\x02" +
		"\u06A8\u06A9\x03\x02\x02\x02\u06A9\u06AA\x03\x02\x02\x02\u06AA\u06AB\x07" +
		"\v\x02\x02\u06AB\u06AC\x05\x8EH\x02\u06AC\u0111\x03\x02\x02\x02\u06AD" +
		"\u06AF\x05\u0140\xA1\x02\u06AE\u06AD\x03\x02\x02\x02\u06AE\u06AF\x03\x02" +
		"\x02\x02\u06AF\u06B0\x03\x02\x02\x02\u06B0\u06B1\x07R\x02\x02\u06B1\u06B2" +
		"\x05\x8EH\x02\u06B2\u0113\x03\x02\x02\x02\u06B3\u06CA\x07\x86\x02\x02" +
		"\u06B4\u06CA\x07\x87\x02\x02\u06B5\u06CA\x07\x8E\x02\x02\u06B6\u06CA\x07" +
		"\x8F\x02\x02\u06B7\u06CA\x07\x96\x02\x02\u06B8\u06CA\x07\x97\x02\x02\u06B9" +
		"\u06CA\x07a\x02\x02\u06BA\u06CA\x07+\x02\x02\u06BB\u06CA\x07\x88\x02\x02" +
		"\u06BC\u06CA\x07\x89\x02\x02\u06BD\u06CA\x07\x8A\x02\x02\u06BE\u06CA\x07" +
		"\x8B\x02\x02\u06BF\u06CA\x07\x8C\x02\x02\u06C0\u06CA\x07\x8D\x02\x02\u06C1" +
		"\u06CA\x07\xA7\x02\x02\u06C2\u06CA\x05\u015A\xAE\x02\u06C3\u06CA\x07\x9B" +
		"\x02\x02\u06C4\u06CA\x07\x9C\x02\x02\u06C5\u06CA\x07\x92\x02\x02\u06C6" +
		"\u06CA\x07\x91\x02\x02\u06C7\u06CA\x07\x9E\x02\x02\u06C8\u06CA\x07\x9D" +
		"\x02\x02\u06C9\u06B3\x03\x02\x02\x02\u06C9\u06B4\x03\x02\x02\x02\u06C9" +
		"\u06B5\x03\x02\x02\x02\u06C9\u06B6\x03\x02\x02\x02\u06C9\u06B7\x03\x02" +
		"\x02\x02\u06C9\u06B8\x03\x02\x02\x02\u06C9\u06B9\x03\x02\x02\x02\u06C9" +
		"\u06BA\x03\x02\x02\x02\u06C9\u06BB\x03\x02\x02\x02\u06C9\u06BC\x03\x02" +
		"\x02\x02\u06C9\u06BD\x03\x02\x02\x02\u06C9\u06BE\x03\x02\x02\x02\u06C9" +
		"\u06BF\x03\x02\x02\x02\u06C9\u06C0\x03\x02\x02\x02\u06C9\u06C1\x03\x02" +
		"\x02\x02\u06C9\u06C2\x03\x02\x02\x02\u06C9\u06C3\x03\x02\x02\x02\u06C9" +
		"\u06C4\x03\x02\x02\x02\u06C9\u06C5\x03\x02\x02\x02\u06C9\u06C6\x03\x02" +
		"\x02\x02\u06C9\u06C7\x03\x02\x02\x02\u06C9\u06C8\x03\x02\x02\x02\u06CA" +
		"\u0115\x03\x02\x02\x02\u06CB\u06CC\t\r\x02\x02\u06CC\u06CD\x07G\x02\x02" +
		"\u06CD\u06CE\x05\x06\x04\x02\u06CE\u06CF\x07\x80\x02\x02\u06CF\u06D0\x05" +
		"\u018E\xC8\x02\u06D0\u06D1\x07\x81\x02\x02\u06D1\u0117\x03\x02\x02\x02" +
		"\u06D2\u06D3\x07\x84\x02\x02\u06D3\u06D4\t\x0E\x02\x02\u06D4\u06D6\x07" +
		"\x80\x02\x02\u06D5\u06D7\x05\x16\f\x02\u06D6\u06D5\x03\x02\x02\x02\u06D6" +
		"\u06D7\x03\x02\x02\x02\u06D7\u06D8\x03\x02\x02\x02\u06D8\u06D9\x07\x81" +
		"\x02\x02\u06D9\u0119\x03\x02\x02\x02\u06DA\u06DD\x05\x8EH\x02\u06DB\u06DD" +
		"\x07\x85\x02\x02\u06DC\u06DA\x03\x02\x02\x02\u06DC\u06DB\x03\x02\x02\x02" +
		"\u06DD\u011B\x03\x02\x02\x02\u06DE\u06DF\x07\x84\x02\x02\u06DF\u06E0\x05" +
		"\xCEh\x02\u06E0\u011D\x03\x02\x02\x02\u06E1\u06E5\x07|\x02\x02\u06E2\u06E4" +
		"\x05\u0120\x91\x02\u06E3\u06E2\x03\x02\x02\x02\u06E4\u06E7\x03\x02\x02" +
		"\x02\u06E5\u06E3\x03\x02\x02\x02\u06E5\u06E6\x03\x02\x02\x02\u06E6\u06E8" +
		"\x03\x02\x02\x02\u06E7\u06E5\x03\x02\x02\x02\u06E8\u06E9\x07}\x02\x02" +
		"\u06E9\u011F\x03\x02\x02\x02\u06EA\u06EC\x05\u0140\xA1\x02\u06EB\u06EA" +
		"\x03\x02\x02\x02\u06EB\u06EC\x03\x02\x02\x02\u06EC\u06EE\x03\x02\x02\x02" +
		"\u06ED\u06EF\x05\xE2r\x02\u06EE\u06ED\x03\x02\x02\x02\u06EE\u06EF\x03" +
		"\x02\x02\x02\u06EF\u06FA\x03\x02\x02\x02\u06F0\u06FB\x05\xE6t\x02\u06F1" +
		"\u06F2\x07-\x02\x02\u06F2\u06F4\x05\x06\x04\x02\u06F3\u06F5\x05\u0154" +
		"\xAB\x02\u06F4\u06F3\x03\x02\x02\x02\u06F5\u06F6\x03\x02\x02\x02\u06F6" +
		"\u06F4\x03\x02\x02\x02\u06F6\u06F7\x03\x02\x02\x02\u06F7\u06F8\x03\x02" +
		"\x02\x02\u06F8\u06F9\x07\x85\x02\x02\u06F9\u06FB\x03\x02\x02\x02\u06FA" +
		"\u06F0\x03\x02\x02\x02\u06FA\u06F1\x03\x02\x02\x02\u06FB\u0121\x03\x02" +
		"\x02\x02\u06FC\u0704\x05\b\x05\x02\u06FD\u06FF\t\x0F\x02\x02\u06FE\u06FD" +
		"\x03\x02\x02\x02\u06FF\u0702\x03\x02\x02\x02\u0700\u06FE\x03\x02\x02\x02" +
		"\u0700\u0701\x03\x02\x02\x02\u0701\u0703\x03\x02\x02\x02\u0702\u0700\x03" +
		"\x02\x02\x02\u0703\u0705\x05\u0124\x93\x02\u0704\u0700\x03\x02\x02\x02" +
		"\u0705\u0706\x03\x02\x02\x02\u0706\u0704\x03\x02\x02\x02\u0706\u0707\x03" +
		"\x02\x02\x02\u0707\u0123\x03\x02\x02\x02\u0708\u070C\x07~\x02\x02\u0709" +
		"\u070B\x07\x83\x02\x02\u070A\u0709\x03\x02\x02\x02\u070B\u070E\x03\x02" +
		"\x02\x02\u070C\u070A\x03\x02\x02\x02\u070C\u070D\x03\x02\x02\x02\u070D" +
		"\u070F\x03\x02\x02\x02\u070E\u070C\x03\x02\x02\x02\u070F\u0710\x07\x7F" +
		"\x02\x02\u0710\u0125\x03\x02\x02\x02\u0711\u071D\x07|\x02\x02\u0712\u0717" +
		"\x05\xF2z\x02\u0713\u0714\x07\x83\x02\x02\u0714\u0716\x05\xF2z\x02\u0715" +
		"\u0713\x03\x02\x02\x02\u0716\u0719\x03\x02\x02\x02\u0717\u0715\x03\x02" +
		"\x02\x02\u0717\u0718\x03\x02\x02\x02\u0718\u071B\x03\x02\x02\x02\u0719" +
		"\u0717\x03\x02\x02\x02\u071A\u071C\x07\x83\x02\x02\u071B\u071A\x03\x02" +
		"\x02\x02\u071B\u071C\x03\x02\x02\x02\u071C\u071E\x03\x02\x02\x02\u071D" +
		"\u0712\x03\x02\x02\x02\u071D\u071E\x03\x02\x02\x02\u071E\u071F\x03\x02" +
		"\x02\x02\u071F\u0720\x07}\x02\x02\u0720\u0127\x03\x02\x02\x02\u0721\u0722" +
		"\x07\x91\x02\x02\u0722\u0727\x05\u012A\x96\x02\u0723\u0724\x07\x83\x02" +
		"\x02\u0724\u0726\x05\u012A\x96\x02\u0725\u0723\x03\x02\x02\x02\u0726\u0729" +
		"\x03\x02\x02\x02\u0727\u0725\x03\x02\x02\x02\u0727\u0728\x03\x02\x02\x02" +
		"\u0728\u072A\x03\x02\x02\x02\u0729\u0727\x03\x02\x02\x02\u072A\u072B\x07" +
		"\x92\x02\x02\u072B\u0129\x03\x02\x02\x02\u072C\u072E\x05\u0140\xA1\x02" +
		"\u072D\u072C\x03\x02\x02\x02\u072D\u072E\x03\x02\x02\x02\u072E\u0730\x03" +
		"\x02\x02\x02\u072F\u0731\x05\u012C\x97\x02\u0730\u072F\x03\x02\x02\x02" +
		"\u0730\u0731\x03\x02\x02\x02\u0731\u0732\x03\x02\x02\x02\u0732\u0733\x05" +
		"\u0194\xCB\x02\u0733\u012B\x03\x02\x02\x02\u0734\u0735\t\x10\x02\x02\u0735" +
		"\u012D\x03\x02\x02\x02\u0736\u0737\x07\x84\x02\x02\u0737\u0738\x05\xCE" +
		"h\x02\u0738\u012F\x03\x02\x02\x02\u0739\u073D\x07|\x02\x02\u073A\u073C" +
		"\x05\u0132\x9A\x02\u073B\u073A\x03\x02\x02\x02\u073C\u073F\x03\x02\x02" +
		"\x02\u073D\u073B\x03\x02\x02\x02\u073D\u073E\x03\x02\x02\x02\u073E\u0740" +
		"\x03\x02\x02\x02\u073F\u073D\x03\x02\x02\x02\u0740\u0741\x07}\x02\x02" +
		"\u0741\u0131\x03\x02\x02\x02\u0742\u0744\x05\u0140\xA1\x02\u0743\u0742" +
		"\x03\x02\x02\x02\u0743\u0744\x03\x02\x02\x02\u0744\u0746\x03\x02\x02\x02" +
		"\u0745\u0747\x07C\x02\x02\u0746\u0745\x03\x02\x02\x02\u0746\u0747\x03" +
		"\x02\x02\x02\u0747\u0780\x03\x02\x02\x02\u0748\u074A\x07g\x02\x02\u0749" +
		"\u0748\x03\x02\x02\x02\u0749\u074A\x03\x02\x02\x02\u074A\u074B\x03\x02" +
		"\x02\x02\u074B\u0767\x05\x06\x04\x02\u074C\u074E\x05\u0194\xCB\x02\u074D" +
		"\u074F\x05\xC8e\x02\u074E\u074D\x03\x02\x02\x02\u074E\u074F\x03\x02\x02" +
		"\x02\u074F\u0750\x03\x02\x02\x02\u0750\u0752\x07\x80\x02\x02\u0751\u0753" +
		"\x05\xFA~\x02\u0752\u0751\x03\x02\x02\x02\u0752\u0753\x03\x02\x02\x02" +
		"\u0753\u0754\x03\x02\x02\x02\u0754\u0756\x07\x81\x02\x02\u0755\u0757\x05" +
		"\xD0i\x02\u0756\u0755\x03\x02\x02\x02\u0756\u0757\x03\x02\x02\x02\u0757" +
		"\u0758\x03\x02\x02\x02\u0758\u0759\x07\x85\x02\x02\u0759\u0768\x03\x02" +
		"\x02\x02\u075A\u075B\x05\u0194\xCB\x02\u075B\u075C\x07|\x02\x02\u075C" +
		"\u075D\x05\u0134\x9B\x02\u075D\u075E\x07}\x02\x02\u075E\u0768\x03\x02" +
		"\x02\x02\u075F\u0760\x07_\x02\x02\u0760\u0761\x07~\x02\x02\u0761\u0762" +
		"\x05\xFA~\x02\u0762\u0763\x07\x7F\x02\x02\u0763\u0764\x07|\x02\x02\u0764" +
		"\u0765\x05\u0134\x9B\x02\u0765\u0766\x07}\x02\x02\u0766\u0768\x03\x02" +
		"\x02\x02\u0767\u074C\x03\x02\x02\x02\u0767\u075A\x03\x02\x02\x02\u0767" +
		"\u075F\x03\x02\x02\x02\u0768\u0781\x03\x02\x02\x02\u0769\u076B\x07g\x02" +
		"\x02\u076A\u0769\x03\x02\x02\x02\u076A\u076B\x03\x02\x02\x02\u076B\u076C" +
		"\x03\x02\x02\x02\u076C\u076D\x07l\x02\x02\u076D\u076F\x05\u0194\xCB\x02" +
		"\u076E\u0770\x05\xC8e\x02\u076F\u076E\x03\x02\x02\x02\u076F\u0770\x03" +
		"\x02\x02\x02\u0770\u0771\x03\x02\x02\x02\u0771\u0773\x07\x80\x02\x02\u0772" +
		"\u0774\x05\xFA~\x02\u0773\u0772\x03\x02\x02\x02\u0773\u0774\x03\x02\x02" +
		"\x02\u0774\u0775\x03\x02\x02\x02\u0775\u0777\x07\x81\x02\x02\u0776\u0778" +
		"\x05\xD0i\x02\u0777\u0776\x03\x02\x02\x02\u0777\u0778\x03\x02\x02\x02" +
		"\u0778\u0779\x03\x02\x02\x02\u0779\u077A\x07\x85\x02\x02\u077A\u0781\x03" +
		"\x02\x02\x02\u077B\u077C\x07(\x02\x02\u077C\u077D\x05\x06\x04\x02\u077D" +
		"\u077E\x05\u0194\xCB\x02\u077E\u077F\x07\x85\x02\x02\u077F\u0781\x03\x02" +
		"\x02\x02\u0780\u0749\x03\x02\x02\x02\u0780\u076A\x03\x02\x02\x02\u0780" +
		"\u077B\x03\x02\x02\x02\u0781\u0133\x03\x02\x02\x02\u0782\u0784\x05\u0140" +
		"\xA1\x02\u0783\u0782\x03\x02\x02\x02\u0783\u0784\x03\x02\x02\x02\u0784" +
		"\u0797\x03\x02\x02\x02\u0785\u0786\x072\x02\x02\u0786\u078C\x07\x85\x02" +
		"\x02\u0787\u0789\x05\u0140\xA1\x02\u0788\u0787\x03\x02\x02\x02\u0788\u0789" +
		"\x03\x02\x02\x02\u0789\u078A\x03\x02\x02\x02\u078A\u078B\x07W\x02\x02" +
		"\u078B\u078D\x07\x85\x02\x02\u078C\u0788\x03\x02\x02\x02\u078C\u078D\x03" +
		"\x02\x02\x02\u078D\u0798\x03\x02\x02\x02\u078E\u078F\x07W\x02\x02\u078F" +
		"\u0795\x07\x85\x02\x02\u0790\u0792\x05\u0140\xA1\x02\u0791\u0790\x03\x02" +
		"\x02\x02\u0791\u0792\x03\x02\x02\x02\u0792\u0793\x03\x02\x02\x02\u0793" +
		"\u0794\x072\x02\x02\u0794\u0796\x07\x85\x02\x02\u0795\u0791\x03\x02\x02" +
		"\x02\u0795\u0796\x03\x02\x02\x02\u0796\u0798\x03\x02\x02\x02\u0797\u0785" +
		"\x03\x02\x02\x02\u0797\u078E\x03\x02\x02\x02\u0798\u0135\x03\x02\x02\x02" +
		"\u0799\u079A\x07\x84\x02\x02\u079A\u079B\x05\x06\x04\x02\u079B\u0137\x03" +
		"\x02\x02\x02\u079C\u07A8\x07|\x02\x02\u079D\u07A2\x05\u013A\x9E\x02\u079E" +
		"\u079F\x07\x83\x02\x02\u079F\u07A1\x05\u013A\x9E\x02\u07A0\u079E\x03\x02" +
		"\x02\x02\u07A1\u07A4\x03\x02\x02\x02\u07A2\u07A0\x03\x02\x02\x02\u07A2" +
		"\u07A3\x03\x02\x02\x02\u07A3\u07A6\x03\x02\x02\x02\u07A4\u07A2\x03\x02" +
		"\x02\x02\u07A5\u07A7\x07\x83\x02\x02\u07A6\u07A5\x03\x02\x02\x02\u07A6" +
		"\u07A7\x03\x02\x02\x02\u07A7\u07A9\x03\x02\x02\x02\u07A8\u079D\x03\x02" +
		"\x02\x02\u07A8\u07A9\x03\x02\x02\x02\u07A9\u07AA\x03\x02\x02\x02\u07AA" +
		"\u07AB\x07}\x02\x02\u07AB\u0139\x03\x02\x02\x02\u07AC\u07AE\x05\u0140" +
		"\xA1\x02\u07AD\u07AC\x03\x02\x02\x02\u07AD\u07AE\x03\x02\x02\x02\u07AE" +
		"\u07AF\x03\x02\x02\x02\u07AF\u07B2\x05\u0194\xCB\x02\u07B0\u07B1\x07\x90" +
		"\x02\x02\u07B1\u07B3\x05\x1A\x0E\x02\u07B2\u07B0\x03\x02\x02\x02\u07B2" +
		"\u07B3\x03\x02\x02\x02\u07B3\u013B\x03\x02\x02\x02\u07B4\u07B5\x07~\x02" +
		"\x02\u07B5\u07B6\x05\u013E\xA0\x02\u07B6\u07B7\x07\x84\x02\x02\u07B7\u07B9" +
		"\x05\u0146\xA4\x02\u07B8\u07BA\x07\x83\x02\x02\u07B9\u07B8\x03\x02\x02" +
		"\x02\u07B9\u07BA\x03\x02\x02\x02\u07BA\u07BB\x03\x02\x02\x02\u07BB\u07BC" +
		"\x07\x7F\x02\x02\u07BC\u013D\x03\x02\x02\x02\u07BD\u07C0\x05\u016E\xB8" +
		"\x02\u07BE\u07C0\x05\u0194\xCB\x02\u07BF\u07BD\x03\x02\x02\x02\u07BF\u07BE" +
		"\x03\x02\x02\x02\u07C0\u013F\x03\x02\x02\x02\u07C1\u07C3\x05\u0142\xA2" +
		"\x02\u07C2\u07C1\x03\x02\x02\x02\u07C3\u07C4\x03\x02\x02\x02\u07C4\u07C2" +
		"\x03\x02\x02\x02\u07C4\u07C5\x03\x02\x02\x02\u07C5\u0141\x03\x02\x02\x02" +
		"\u07C6\u07CA\x07~\x02\x02\u07C7\u07C8\x05\u0144\xA3\x02\u07C8\u07C9\x07" +
		"\x84\x02\x02\u07C9\u07CB\x03\x02\x02\x02\u07CA\u07C7\x03\x02\x02\x02\u07CA" +
		"\u07CB\x03\x02\x02\x02\u07CB\u07CC\x03\x02\x02\x02\u07CC\u07CE\x05\u0146" +
		"\xA4\x02\u07CD\u07CF\x07\x83\x02\x02\u07CE\u07CD\x03\x02\x02\x02\u07CE" +
		"\u07CF\x03\x02\x02\x02\u07CF\u07D0\x03\x02\x02\x02\u07D0\u07D1\x07\x7F" +
		"\x02\x02\u07D1\u0143\x03\x02\x02\x02\u07D2\u07D5\x05\u016E\xB8\x02\u07D3" +
		"\u07D5\x05\u0194\xCB\x02\u07D4\u07D2\x03\x02\x02\x02\u07D4\u07D3\x03\x02" +
		"\x02\x02\u07D5\u0145\x03\x02\x02\x02\u07D6\u07DB\x05\u0148\xA5\x02\u07D7" +
		"\u07D8\x07\x83\x02\x02\u07D8\u07DA\x05\u0148\xA5\x02\u07D9\u07D7\x03\x02" +
		"\x02\x02\u07DA\u07DD\x03\x02\x02\x02\u07DB\u07D9\x03\x02\x02\x02\u07DB" +
		"\u07DC\x03\x02\x02\x02\u07DC\u0147\x03\x02\x02\x02\u07DD\u07DB\x03\x02" +
		"\x02\x02\u07DE\u07EB\x05\x04\x03\x02\u07DF\u07E8\x07\x80\x02\x02\u07E0" +
		"\u07E5\x05\u014A\xA6\x02\u07E1\u07E2\x07\x83\x02\x02\u07E2\u07E4\x05\u014A" +
		"\xA6\x02\u07E3\u07E1\x03\x02\x02\x02\u07E4\u07E7\x03\x02\x02\x02\u07E5" +
		"\u07E3\x03\x02\x02\x02\u07E5\u07E6\x03\x02\x02\x02\u07E6\u07E9\x03\x02" +
		"\x02\x02\u07E7\u07E5\x03\x02\x02\x02\u07E8\u07E0\x03\x02\x02\x02\u07E8" +
		"\u07E9\x03\x02\x02\x02\u07E9\u07EA\x03\x02\x02\x02\u07EA\u07EC\x07\x81" +
		"\x02\x02\u07EB\u07DF\x03\x02\x02\x02\u07EB\u07EC\x03\x02\x02\x02\u07EC" +
		"\u0149\x03\x02\x02\x02\u07ED\u07EE\x05\u0194\xCB\x02\u07EE\u07EF\x07\x84" +
		"\x02\x02\u07EF\u07F1\x03\x02\x02\x02\u07F0\u07ED\x03\x02\x02\x02\u07F0" +
		"\u07F1\x03\x02\x02\x02\u07F1\u07F2\x03\x02\x02\x02\u07F2\u07F3\x05\x1A" +
		"\x0E\x02\u07F3\u014B\x03\x02\x02\x02\u07F4\u07F7\x05\n\x06\x02\u07F5\u07F7" +
		"\x05\x12\n\x02\u07F6\u07F4\x03\x02\x02\x02\u07F6\u07F5\x03\x02\x02\x02" +
		"\u07F7\u07FC\x03\x02\x02\x02\u07F8\u07FB\x05\u0124\x93\x02\u07F9\u07FB" +
		"\x07\x93\x02\x02\u07FA\u07F8\x03\x02\x02\x02\u07FA\u07F9\x03\x02\x02\x02" +
		"\u07FB\u07FE\x03\x02\x02\x02\u07FC\u07FA\x03\x02\x02\x02\u07FC\u07FD\x03" +
		"\x02\x02\x02\u07FD\u07FF\x03\x02\x02\x02\u07FE\u07FC\x03\x02\x02\x02\u07FF" +
		"\u0800\x07\x88\x02\x02\u0800\u0804\x03\x02\x02\x02\u0801\u0802\x07l\x02" +
		"\x02\u0802\u0804\x07\x88\x02\x02\u0803\u07F6\x03\x02\x02\x02\u0803\u0801" +
		"\x03\x02\x02\x02\u0804\u014D\x03\x02\x02\x02\u0805\u080A\x05\u0150\xA9" +
		"\x02\u0806\u0807\x07\x83\x02\x02\u0807\u0809\x05\u0150\xA9\x02\u0808\u0806" +
		"\x03\x02\x02\x02\u0809\u080C\x03\x02\x02\x02\u080A\u0808\x03\x02\x02\x02" +
		"\u080A\u080B\x03\x02\x02\x02\u080B\u014F\x03\x02\x02\x02\u080C\u080A\x03" +
		"\x02\x02\x02\u080D\u080E\x05\u0194\xCB\x02\u080E\u080F\x07\x90\x02\x02" +
		"\u080F\u0810\x05\u0152\xAA\x02\u0810\u0151\x03\x02\x02\x02\u0811\u0813" +
		"\x07\x8B\x02\x02\u0812\u0811\x03\x02\x02\x02\u0812\u0813\x03\x02\x02\x02" +
		"\u0813\u0814\x03\x02\x02\x02\u0814\u0817\x05\x1A\x0E\x02\u0815\u0817\x05" +
		"\u0156\xAC\x02\u0816\u0812\x03\x02\x02\x02\u0816\u0815\x03\x02\x02\x02" +
		"\u0817\u0153\x03\x02\x02\x02\u0818\u0819\x05\u0194\xCB\x02\u0819\u081A" +
		"\x07~\x02\x02\u081A\u081B\x05\x1A\x0E\x02\u081B\u081C\x07\x7F\x02\x02" +
		"\u081C\u0155\x03\x02\x02\x02\u081D\u081E\x07Z\x02\x02\u081E\u081F\x05" +
		"\x06\x04\x02\u081F\u0820\x07~\x02\x02\u0820\u0821\x05\x1A\x0E\x02\u0821" +
		"\u0822\x07\x7F\x02\x02\u0822\u0157\x03\x02\x02\x02\u0823\u0824\x07\x90" +
		"\x02\x02\u0824\u0825\x07\x92\x02\x02\u0825\u0826\x06\xAD\x02\x03\u0826" +
		"\u0159\x03\x02\x02\x02\u0827\u0828\x07\x92\x02\x02\u0828\u0829\x07\x92" +
		"\x02\x02\u0829\u082A\x06\xAE\x03\x03\u082A\u015B\x03\x02\x02\x02\u082B" +
		"\u082C\x07\x92\x02\x02\u082C\u082D\x07\x9E\x02\x02\u082D\u082E\x06\xAF" +
		"\x04\x03\u082E\u015D\x03\x02\x02\x02\u082F\u0837\x05\u0160\xB1\x02\u0830" +
		"\u0837\x05\u0162\xB2\x02\u0831\u0837\x07t\x02\x02\u0832\u0837\x07u\x02" +
		"\x02\u0833\u0837\x07v\x02\x02\u0834\u0837\x07w\x02\x02\u0835\u0837\x07" +
		"D\x02\x02\u0836\u082F\x03\x02\x02\x02\u0836\u0830\x03\x02\x02\x02\u0836" +
		"\u0831\x03\x02\x02\x02\u0836\u0832\x03\x02\x02\x02\u0836\u0833\x03\x02" +
		"\x02\x02\u0836\u0834\x03\x02\x02\x02\u0836\u0835\x03\x02\x02\x02\u0837" +
		"\u015F\x03\x02\x02\x02\u0838\u0839\t\x11\x02\x02\u0839\u0161\x03\x02\x02" +
		"\x02\u083A\u083F\x05\u0164\xB3\x02\u083B\u083F\x05\u0166\xB4\x02\u083C" +
		"\u083F\x07x\x02\x02\u083D\u083F\x07y\x02\x02\u083E\u083A\x03\x02\x02\x02" +
		"\u083E\u083B\x03\x02\x02\x02\u083E\u083C\x03\x02\x02\x02\u083E\u083D\x03" +
		"\x02\x02\x02\u083F\u0163\x03\x02\x02\x02\u0840\u0844\x07z\x02\x02\u0841" +
		"\u0843\x05\u0168\xB5\x02\u0842\u0841\x03\x02\x02\x02\u0843\u0846\x03\x02" +
		"\x02\x02\u0844\u0842\x03\x02\x02\x02\u0844\u0845\x03\x02\x02\x02\u0845" +
		"\u0847\x03\x02\x02\x02\u0846\u0844\x03\x02\x02\x02\u0847\u0848\x07\xAD" +
		"\x02\x02\u0848\u0165\x03\x02\x02\x02\u0849\u084D\x07{\x02\x02\u084A\u084C" +
		"\x05\u016A\xB6\x02\u084B\u084A\x03\x02\x02\x02\u084C\u084F\x03\x02\x02" +
		"\x02\u084D\u084B\x03\x02\x02\x02\u084D\u084E\x03\x02\x02\x02\u084E\u0850" +
		"\x03\x02\x02\x02\u084F\u084D\x03\x02\x02\x02\u0850\u0851\x07\xAD\x02\x02" +
		"\u0851\u0167\x03\x02\x02\x02\u0852\u0857\x05\u016C\xB7\x02\u0853\u0857" +
		"\x07\xA9\x02\x02\u0854\u0857\x07\xAB\x02\x02\u0855\u0857\x07\xAE\x02\x02" +
		"\u0856\u0852\x03\x02\x02\x02\u0856\u0853\x03\x02\x02\x02\u0856\u0854\x03" +
		"\x02\x02\x02\u0856\u0855\x03\x02\x02\x02\u0857\u0169\x03\x02\x02\x02\u0858" +
		"\u085D\x05\u016C\xB7\x02\u0859\u085D\x07\xA9\x02\x02\u085A\u085D\x07\xAC" +
		"\x02\x02\u085B\u085D\x07\xAF\x02\x02\u085C\u0858\x03\x02\x02\x02\u085C" +
		"\u0859\x03\x02\x02\x02\u085C\u085A\x03\x02\x02\x02\u085C\u085B\x03\x02" +
		"\x02\x02\u085D\u016B\x03\x02\x02\x02\u085E\u0863\x05\x1A\x0E\x02\u085F" +
		"\u0860\x07\x83\x02\x02\u0860\u0862\x05\x1A\x0E\x02\u0861\u085F\x03\x02" +
		"\x02\x02\u0862\u0865\x03\x02\x02\x02\u0863\u0861\x03\x02\x02\x02\u0863" +
		"\u0864\x03\x02\x02\x02\u0864\u086C\x03\x02\x02\x02\u0865\u0863\x03\x02" +
		"\x02\x02\u0866\u0868\x07\x84\x02\x02\u0867\u0869\x07\xB1\x02\x02\u0868" +
		"\u0867\x03\x02\x02\x02\u0869\u086A\x03\x02\x02\x02\u086A\u0868\x03\x02" +
		"\x02\x02\u086A\u086B\x03\x02\x02\x02\u086B\u086D\x03\x02\x02\x02\u086C" +
		"\u0866\x03\x02\x02\x02\u086C\u086D\x03\x02\x02\x02\u086D\u016D\x03\x02" +
		"\x02\x02\u086E\u086F\t\x12\x02\x02\u086F\u016F\x03\x02\x02\x02\u0870\u0871" +
		"\x07\x1B\x02\x02\u0871\u0873\x05\u0194\xCB\x02\u0872\u0874\x05\xC8e\x02" +
		"\u0873\u0872\x03\x02\x02\x02\u0873\u0874\x03\x02\x02\x02\u0874\u0876\x03" +
		"\x02\x02\x02\u0875\u0877\x05\xCCg\x02\u0876\u0875\x03\x02\x02\x02\u0876" +
		"\u0877\x03\x02\x02\x02\u0877\u0879\x03\x02\x02\x02\u0878\u087A\x05\xD0" +
		"i\x02\u0879\u0878\x03\x02\x02\x02\u0879\u087A\x03\x02\x02\x02\u087A\u087B" +
		"\x03\x02\x02\x02\u087B\u087D\x05\xDCo\x02\u087C\u087E\x07\x85\x02\x02" +
		"\u087D\u087C\x03\x02\x02\x02\u087D\u087E\x03\x02\x02\x02\u087E\u0171\x03" +
		"\x02\x02\x02\u087F\u0880\x07]\x02\x02\u0880\u0882\x05\u0194\xCB\x02\u0881" +
		"\u0883\x05\xC8e\x02\u0882\u0881\x03\x02\x02\x02\u0882\u0883\x03\x02\x02" +
		"\x02\u0883\u0885\x03\x02\x02\x02\u0884\u0886\x05\u011C\x8F\x02\u0885\u0884" +
		"\x03\x02\x02\x02\u0885\u0886\x03";
	private static readonly _serializedATNSegment4: string =
		"\x02\x02\x02\u0886\u0888\x03\x02\x02\x02\u0887\u0889\x05\xD0i\x02\u0888" +
		"\u0887\x03\x02\x02\x02\u0888\u0889\x03\x02\x02\x02\u0889\u088A\x03\x02" +
		"\x02\x02\u088A\u088C\x05\u011E\x90\x02\u088B\u088D\x07\x85\x02\x02\u088C" +
		"\u088B\x03\x02\x02\x02\u088C\u088D\x03\x02\x02\x02\u088D\u0173\x03\x02" +
		"\x02\x02\u088E\u088F\x079\x02\x02\u088F\u0891\x05\u0194\xCB\x02\u0890" +
		"\u0892\x05\u0128\x95\x02\u0891\u0890\x03\x02\x02\x02\u0891\u0892\x03\x02" +
		"\x02\x02\u0892\u0894\x03\x02\x02\x02\u0893\u0895\x05\u012E\x98\x02\u0894" +
		"\u0893\x03\x02\x02\x02\u0894\u0895\x03\x02\x02\x02\u0895\u0897\x03\x02" +
		"\x02\x02\u0896\u0898\x05\xD0i\x02\u0897\u0896\x03\x02\x02\x02\u0897\u0898" +
		"\x03\x02\x02\x02\u0898\u0899\x03\x02\x02\x02\u0899\u089B\x05\u0130\x99" +
		"\x02\u089A\u089C\x07\x85\x02\x02\u089B\u089A\x03\x02\x02\x02\u089B\u089C" +
		"\x03\x02\x02\x02\u089C\u0175\x03\x02\x02\x02\u089D\u089E\x07&\x02\x02" +
		"\u089E\u08A0\x05\u0194\xCB\x02\u089F\u08A1\x05\u0136\x9C\x02\u08A0\u089F" +
		"\x03\x02\x02\x02\u08A0\u08A1\x03\x02\x02\x02\u08A1\u08A2\x03\x02\x02\x02" +
		"\u08A2\u08A4\x05\u0138\x9D\x02\u08A3\u08A5\x07\x85\x02\x02\u08A4\u08A3" +
		"\x03\x02\x02\x02\u08A4\u08A5\x03\x02\x02\x02\u08A5\u0177\x03\x02\x02\x02" +
		"\u08A6\u08A7\x07 \x02\x02\u08A7\u08A8\x05\xF4{\x02\u08A8\u08AA\x05\u0194" +
		"\xCB\x02\u08A9\u08AB\x05\u0128\x95\x02\u08AA\u08A9\x03\x02\x02\x02\u08AA" +
		"\u08AB\x03\x02\x02\x02\u08AB\u08AC\x03\x02\x02\x02\u08AC\u08AE\x07\x80" +
		"\x02\x02\u08AD\u08AF\x05\xFA~\x02\u08AE\u08AD\x03\x02\x02\x02\u08AE\u08AF" +
		"\x03\x02\x02\x02\u08AF\u08B0\x03\x02\x02\x02\u08B0\u08B2\x07\x81\x02\x02" +
		"\u08B1\u08B3\x05\xD0i\x02\u08B2\u08B1\x03\x02\x02\x02\u08B2\u08B3\x03" +
		"\x02\x02\x02\u08B3\u08B4\x03\x02\x02\x02\u08B4\u08B5\x07\x85\x02\x02\u08B5" +
		"\u0179\x03\x02\x02\x02\u08B6\u08B7\x07(\x02\x02\u08B7\u08C0\x05\x06\x04" +
		"\x02\u08B8\u08B9\x05\xEEx\x02\u08B9\u08BA\x07\x85\x02\x02\u08BA\u08C1" +
		"\x03\x02\x02\x02\u08BB\u08BC\x05\xF6|\x02\u08BC\u08BD\x07|\x02\x02\u08BD" +
		"\u08BE\x05\u010E\x88\x02\u08BE\u08BF\x07}\x02\x02\u08BF\u08C1\x03\x02" +
		"\x02\x02\u08C0\u08B8\x03\x02\x02\x02\u08C0\u08BB\x03\x02\x02\x02\u08C1" +
		"\u017B\x03\x02\x02\x02\u08C2\u08C3\x05\xEEx\x02\u08C3\u08C4\x07\x85\x02" +
		"\x02\u08C4\u017D\x03\x02\x02\x02\u08C5\u08D3\x05\xF6|\x02\u08C6\u08C7" +
		"\x07|\x02\x02\u08C7\u08C8\x05\u0104\x83\x02\u08C8\u08CD\x07}\x02\x02\u08C9" +
		"\u08CA\x07\x90\x02\x02\u08CA\u08CB\x05\xF2z\x02\u08CB\u08CC\x07\x85\x02" +
		"\x02\u08CC\u08CE\x03\x02\x02\x02\u08CD\u08C9\x03\x02\x02\x02\u08CD\u08CE" +
		"\x03\x02\x02\x02\u08CE\u08D4\x03\x02\x02\x02\u08CF\u08D0\x05\u0158\xAD" +
		"\x02\u08D0\u08D1\x05\x1A\x0E\x02\u08D1\u08D2\x07\x85\x02\x02\u08D2\u08D4" +
		"\x03\x02\x02\x02\u08D3\u08C6\x03\x02\x02\x02\u08D3\u08CF\x03\x02\x02\x02" +
		"\u08D4\u017F\x03\x02\x02\x02\u08D5\u08D6\x07\x1C\x02\x02\u08D6\u08D7\x05" +
		"\x06\x04\x02\u08D7\u08D8\x05\xEAv\x02\u08D8\u08D9\x07\x85\x02\x02\u08D9" +
		"\u0181\x03\x02\x02\x02\u08DA\u08DB\x07_\x02\x02\u08DB\u08DC\x07~\x02\x02" +
		"\u08DC\u08DD\x05\xFA~\x02\u08DD\u08E6\x07\x7F\x02\x02\u08DE\u08DF\x07" +
		"|\x02\x02\u08DF\u08E0\x05\u0104\x83\x02\u08E0\u08E1\x07}\x02\x02\u08E1" +
		"\u08E7\x03\x02\x02\x02\u08E2\u08E3\x05\u0158\xAD\x02\u08E3\u08E4\x05\x1A" +
		"\x0E\x02\u08E4\u08E5\x07\x85\x02\x02\u08E5\u08E7\x03\x02\x02\x02\u08E6" +
		"\u08DE\x03\x02\x02\x02\u08E6\u08E2\x03\x02\x02\x02\u08E7\u0183\x03\x02" +
		"\x02\x02\u08E8\u08E9\x07\x8F\x02\x02\u08E9\u08EA\x05\u0194\xCB\x02\u08EA" +
		"\u08EB\x07\x80\x02\x02\u08EB\u08EC\x07\x81\x02\x02\u08EC\u08ED\x05\u011A" +
		"\x8E\x02\u08ED\u0185\x03\x02\x02\x02\u08EE\u08EF\x05\u0194\xCB\x02\u08EF" +
		"\u08F1\x07\x80\x02\x02\u08F0\u08F2\x05\xFA~\x02\u08F1\u08F0\x03\x02\x02" +
		"\x02\u08F1\u08F2\x03\x02\x02\x02\u08F2\u08F3\x03\x02\x02\x02\u08F3\u08F5" +
		"\x07\x81\x02\x02\u08F4\u08F6\x05\u0118\x8D\x02\u08F5\u08F4\x03\x02\x02" +
		"\x02\u08F5\u08F6\x03\x02\x02\x02\u08F6\u08F7\x03\x02\x02\x02\u08F7\u08F8" +
		"\x05\u011A\x8E\x02\u08F8\u0187\x03\x02\x02\x02\u08F9\u08FB\x05\u018A\xC6" +
		"\x02\u08FA\u08FC\x05\xC8e\x02\u08FB\u08FA\x03\x02\x02\x02\u08FB\u08FC" +
		"\x03\x02\x02\x02\u08FC\u08FD\x03\x02\x02\x02\u08FD\u08FF\x07\x80\x02\x02" +
		"\u08FE\u0900\x05\xFA~\x02\u08FF\u08FE\x03\x02\x02\x02\u08FF\u0900\x03" +
		"\x02\x02\x02\u0900\u0901\x03\x02\x02\x02\u0901\u0903\x07\x81\x02\x02\u0902" +
		"\u0904\x05\xD0i\x02\u0903\u0902\x03\x02\x02\x02\u0903\u0904\x03\x02\x02" +
		"\x02\u0904\u090A\x03\x02\x02\x02\u0905\u090B\x05\xF8}\x02\u0906\u0907" +
		"\x05\u0158\xAD\x02\u0907\u0908\x05\x1A\x0E\x02\u0908\u0909\x07\x85\x02" +
		"\x02\u0909\u090B\x03\x02\x02\x02\u090A\u0905\x03\x02\x02\x02\u090A\u0906" +
		"\x03\x02\x02\x02\u090B\u0189\x03\x02\x02\x02\u090C\u0912\x05\u0194\xCB" +
		"\x02\u090D\u090E\x05\u0194\xCB\x02\u090E\u090F\x07\x94\x02\x02\u090F\u0910" +
		"\x05\u0194\xCB\x02\u0910\u0912\x03\x02\x02\x02\u0911\u090C\x03\x02\x02" +
		"\x02\u0911\u090D\x03\x02\x02\x02\u0912\u091A\x03\x02\x02\x02\u0913\u0915" +
		"\x05\x14\v\x02\u0914\u0913\x03\x02\x02\x02\u0914\u0915\x03\x02\x02\x02" +
		"\u0915\u0916\x03\x02\x02\x02\u0916\u0917\x07\x82\x02\x02\u0917\u0919\x05" +
		"\u0194\xCB\x02\u0918\u0914\x03\x02\x02\x02\u0919\u091C\x03\x02\x02\x02" +
		"\u091A\u0918\x03\x02\x02\x02\u091A\u091B\x03\x02\x02\x02\u091B\u018B\x03" +
		"\x02\x02\x02\u091C\u091A\x03\x02\x02\x02\u091D\u091E\x07G\x02\x02\u091E" +
		"\u091F\x05\u0114\x8B\x02\u091F\u0920\x07\x80\x02\x02\u0920\u0923\x05\u018E" +
		"\xC8\x02\u0921\u0922\x07\x83\x02\x02\u0922\u0924\x05\u018E\xC8\x02\u0923" +
		"\u0921\x03\x02\x02\x02\u0923\u0924\x03\x02\x02\x02\u0924\u0925\x03\x02" +
		"\x02\x02\u0925\u092B\x07\x81\x02\x02\u0926\u092C\x05\u011A\x8E\x02\u0927" +
		"\u0928\x05\u0158\xAD\x02\u0928\u0929\x05\x1A\x0E\x02\u0929\u092A\x07\x85" +
		"\x02\x02\u092A\u092C\x03\x02\x02\x02\u092B\u0926\x03\x02\x02\x02\u092B" +
		"\u0927\x03\x02\x02\x02\u092C\u018D\x03\x02\x02\x02\u092D\u092E\x05\x06" +
		"\x04\x02\u092E\u0931\x05\u0194\xCB\x02\u092F\u0930\x07\x90\x02\x02\u0930" +
		"\u0932\x05\x1A\x0E\x02\u0931\u092F\x03\x02\x02\x02\u0931\u0932\x03\x02" +
		"\x02\x02\u0932\u018F\x03\x02\x02\x02\u0933\u0935\x07\x80\x02\x02\u0934" +
		"\u0936\x05\x16\f\x02\u0935\u0934\x03\x02\x02\x02\u0935\u0936\x03\x02\x02" +
		"\x02\u0936\u0937\x03\x02\x02\x02\u0937\u0938\x07\x81\x02\x02\u0938\u0191" +
		"\x03\x02\x02\x02\u0939\u093B\x07\x80\x02\x02\u093A\u093C\x05\x16\f\x02" +
		"\u093B\u093A\x03\x02\x02\x02\u093B\u093C\x03\x02\x02\x02\u093C\u093D\x03" +
		"\x02\x02\x02\u093D\u093F\x07\x81\x02\x02\u093E\u0940\x05J&\x02\u093F\u093E" +
		"\x03\x02\x02\x02\u093F\u0940\x03\x02\x02\x02\u0940\u0193\x03\x02\x02\x02" +
		"\u0941\u0942\t\x13\x02\x02\u0942\u0195\x03\x02\x02\x02\u012C\u0197\u019A" +
		"\u019D\u01A2\u01A6\u01AC\u01AF\u01B4\u01B8\u01BF\u01C1\u01C8\u01CC\u01D1" +
		"\u01DB\u01E3\u01ED\u01F3\u01F6\u01FA\u0200\u0205\u0216\u021E\u0223\u022A" +
		"\u0232\u023A\u0242\u024A\u0252\u025C\u025E\u0264\u0269\u0271\u0279\u0294" +
		"\u029A\u02A3\u02A8\u02AD\u02B3\u02C1\u02C7\u02D3\u02D7\u02DC\u02E0\u02E6" +
		"\u02ED\u0300\u0305\u0308\u0317\u031D\u0320\u0325\u0328\u0330\u0338\u0343" +
		"\u0348\u034D\u034F\u0358\u0360\u0367\u036F\u0373\u037C\u0381\u0383\u038C" +
		"\u0394\u0398\u039D\u039F\u03A4\u03A8\u03AF\u03B7\u03B9\u03BD\u03C0\u03D1" +
		"\u03D8\u03DC\u03E6\u03EB\u03F2\u03FB\u0400\u0407\u0413\u041E\u0426\u042B" +
		"\u0434\u043D\u0442\u044A\u0457\u0461\u0477\u047B\u047F\u0495\u049A\u049F" +
		"\u04A6\u04A9\u04BF\u04CB\u04CF\u04D9\u04DE\u04E3\u04E8\u04F0\u04F5\u04FF" +
		"\u0504\u050C\u050F\u0516\u051D\u0521\u0524\u052A\u052E\u0534\u0542\u0548" +
		"\u054F\u0554\u0557\u055A\u0561\u056B\u057C\u0581\u0585\u0588\u058B\u0592" +
		"\u0598\u05A0\u05A6\u05B0\u05B8\u05BE\u05C9\u05CD\u05CF\u05D4\u05DB\u05E4" +
		"\u05EB\u05EE\u05F1\u05F5\u05FA\u0607\u0611\u061D\u0624\u0630\u0636\u063A" +
		"\u063E\u0644\u064A\u064C\u0653\u0657\u065A\u065E\u0663\u066A\u066D\u0672" +
		"\u0677\u0679\u067C\u067F\u0685\u0688\u0694\u0698\u069B\u06A5\u06A8\u06AE" +
		"\u06C9\u06D6\u06DC\u06E5\u06EB\u06EE\u06F6\u06FA\u0700\u0706\u070C\u0717" +
		"\u071B\u071D\u0727\u072D\u0730\u073D\u0743\u0746\u0749\u074E\u0752\u0756" +
		"\u0767\u076A\u076F\u0773\u0777\u0780\u0783\u0788\u078C\u0791\u0795\u0797" +
		"\u07A2\u07A6\u07A8\u07AD\u07B2\u07B9\u07BF\u07C4\u07CA\u07CE\u07D4\u07DB" +
		"\u07E5\u07E8\u07EB\u07F0\u07F6\u07FA\u07FC\u0803\u080A\u0812\u0816\u0836" +
		"\u083E\u0844\u084D\u0856\u085C\u0863\u086A\u086C\u0873\u0876\u0879\u087D" +
		"\u0882\u0885\u0888\u088C\u0891\u0894\u0897\u089B\u08A0\u08A4\u08AA\u08AE" +
		"\u08B2\u08C0\u08CD\u08D3\u08E6\u08F1\u08F5\u08FB\u08FF\u0903\u090A\u0911" +
		"\u0914\u091A\u0923\u092B\u0931\u0935\u093B\u093F";
	public static readonly _serializedATN: string = Utils.join(
		[
			CSharpParser._serializedATNSegment0,
			CSharpParser._serializedATNSegment1,
			CSharpParser._serializedATNSegment2,
			CSharpParser._serializedATNSegment3,
			CSharpParser._serializedATNSegment4,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CSharpParser.__ATN) {
			CSharpParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CSharpParser._serializedATN));
		}

		return CSharpParser.__ATN;
	}

}

export class Compilation_unitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CSharpParser.EOF, 0); }
	public BYTE_ORDER_MARK(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BYTE_ORDER_MARK, 0); }
	public extern_alias_directives(): Extern_alias_directivesContext | undefined {
		return this.tryGetRuleContext(0, Extern_alias_directivesContext);
	}
	public using_directives(): Using_directivesContext | undefined {
		return this.tryGetRuleContext(0, Using_directivesContext);
	}
	public global_attribute_section(): Global_attribute_sectionContext[];
	public global_attribute_section(i: number): Global_attribute_sectionContext;
	public global_attribute_section(i?: number): Global_attribute_sectionContext | Global_attribute_sectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Global_attribute_sectionContext);
		} else {
			return this.getRuleContext(i, Global_attribute_sectionContext);
		}
	}
	public namespace_member_declarations(): Namespace_member_declarationsContext | undefined {
		return this.tryGetRuleContext(0, Namespace_member_declarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_compilation_unit; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterCompilation_unit) {
			listener.enterCompilation_unit(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitCompilation_unit) {
			listener.exitCompilation_unit(this);
		}
	}
}


export class Namespace_or_type_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public qualified_alias_member(): Qualified_alias_memberContext | undefined {
		return this.tryGetRuleContext(0, Qualified_alias_memberContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.DOT);
		} else {
			return this.getToken(CSharpParser.DOT, i);
		}
	}
	public type_argument_list(): Type_argument_listContext[];
	public type_argument_list(i: number): Type_argument_listContext;
	public type_argument_list(i?: number): Type_argument_listContext | Type_argument_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_argument_listContext);
		} else {
			return this.getRuleContext(i, Type_argument_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_namespace_or_type_name; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNamespace_or_type_name) {
			listener.enterNamespace_or_type_name(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNamespace_or_type_name) {
			listener.exitNamespace_or_type_name(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	public base_type(): Base_typeContext {
		return this.getRuleContext(0, Base_typeContext);
	}
	public INTERR(): TerminalNode[];
	public INTERR(i: number): TerminalNode;
	public INTERR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.INTERR);
		} else {
			return this.getToken(CSharpParser.INTERR, i);
		}
	}
	public rank_specifier(): Rank_specifierContext[];
	public rank_specifier(i: number): Rank_specifierContext;
	public rank_specifier(i?: number): Rank_specifierContext | Rank_specifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rank_specifierContext);
		} else {
			return this.getRuleContext(i, Rank_specifierContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.STAR);
		} else {
			return this.getToken(CSharpParser.STAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_type_; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterType_) {
			listener.enterType_(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitType_) {
			listener.exitType_(this);
		}
	}
}


export class Base_typeContext extends ParserRuleContext {
	public simple_type(): Simple_typeContext | undefined {
		return this.tryGetRuleContext(0, Simple_typeContext);
	}
	public class_type(): Class_typeContext | undefined {
		return this.tryGetRuleContext(0, Class_typeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOID, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_base_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterBase_type) {
			listener.enterBase_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitBase_type) {
			listener.exitBase_type(this);
		}
	}
}


export class Simple_typeContext extends ParserRuleContext {
	public numeric_type(): Numeric_typeContext | undefined {
		return this.tryGetRuleContext(0, Numeric_typeContext);
	}
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BOOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_simple_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSimple_type) {
			listener.enterSimple_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSimple_type) {
			listener.exitSimple_type(this);
		}
	}
}


export class Numeric_typeContext extends ParserRuleContext {
	public integral_type(): Integral_typeContext | undefined {
		return this.tryGetRuleContext(0, Integral_typeContext);
	}
	public floating_point_type(): Floating_point_typeContext | undefined {
		return this.tryGetRuleContext(0, Floating_point_typeContext);
	}
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DECIMAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_numeric_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNumeric_type) {
			listener.enterNumeric_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNumeric_type) {
			listener.exitNumeric_type(this);
		}
	}
}


export class Integral_typeContext extends ParserRuleContext {
	public SBYTE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SBYTE, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BYTE, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SHORT, 0); }
	public USHORT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.USHORT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INT, 0); }
	public UINT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UINT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.LONG, 0); }
	public ULONG(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ULONG, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_integral_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterIntegral_type) {
			listener.enterIntegral_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitIntegral_type) {
			listener.exitIntegral_type(this);
		}
	}
}


export class Floating_point_typeContext extends ParserRuleContext {
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FLOAT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_floating_point_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFloating_point_type) {
			listener.enterFloating_point_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFloating_point_type) {
			listener.exitFloating_point_type(this);
		}
	}
}


export class Class_typeContext extends ParserRuleContext {
	public namespace_or_type_name(): Namespace_or_type_nameContext | undefined {
		return this.tryGetRuleContext(0, Namespace_or_type_nameContext);
	}
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OBJECT, 0); }
	public DYNAMIC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DYNAMIC, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_class_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterClass_type) {
			listener.enterClass_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitClass_type) {
			listener.exitClass_type(this);
		}
	}
}


export class Type_argument_listContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(CSharpParser.LT, 0); }
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	public GT(): TerminalNode { return this.getToken(CSharpParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_type_argument_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterType_argument_list) {
			listener.enterType_argument_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitType_argument_list) {
			listener.exitType_argument_list(this);
		}
	}
}


export class Argument_listContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_argument_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterArgument_list) {
			listener.enterArgument_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitArgument_list) {
			listener.exitArgument_list(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public _refout: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COLON, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VAR, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public REF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REF, 0); }
	public OUT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_argument; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public non_assignment_expression(): Non_assignment_expressionContext | undefined {
		return this.tryGetRuleContext(0, Non_assignment_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class Non_assignment_expressionContext extends ParserRuleContext {
	public lambda_expression(): Lambda_expressionContext | undefined {
		return this.tryGetRuleContext(0, Lambda_expressionContext);
	}
	public query_expression(): Query_expressionContext | undefined {
		return this.tryGetRuleContext(0, Query_expressionContext);
	}
	public conditional_expression(): Conditional_expressionContext | undefined {
		return this.tryGetRuleContext(0, Conditional_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_non_assignment_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNon_assignment_expression) {
			listener.enterNon_assignment_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNon_assignment_expression) {
			listener.exitNon_assignment_expression(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public unary_expression(): Unary_expressionContext {
		return this.getRuleContext(0, Unary_expressionContext);
	}
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
	public get ruleIndex(): number { return CSharpParser.RULE_assignment; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
}


export class Assignment_operatorContext extends ParserRuleContext {
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASSIGNMENT, 0); }
	public OP_ADD_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_ADD_ASSIGNMENT, 0); }
	public OP_SUB_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_SUB_ASSIGNMENT, 0); }
	public OP_MULT_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_MULT_ASSIGNMENT, 0); }
	public OP_DIV_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_DIV_ASSIGNMENT, 0); }
	public OP_MOD_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_MOD_ASSIGNMENT, 0); }
	public OP_AND_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_AND_ASSIGNMENT, 0); }
	public OP_OR_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_OR_ASSIGNMENT, 0); }
	public OP_XOR_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_XOR_ASSIGNMENT, 0); }
	public OP_LEFT_SHIFT_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_LEFT_SHIFT_ASSIGNMENT, 0); }
	public right_shift_assignment(): Right_shift_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Right_shift_assignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_assignment_operator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAssignment_operator) {
			listener.enterAssignment_operator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAssignment_operator) {
			listener.exitAssignment_operator(this);
		}
	}
}


export class Conditional_expressionContext extends ParserRuleContext {
	public null_coalescing_expression(): Null_coalescing_expressionContext {
		return this.getRuleContext(0, Null_coalescing_expressionContext);
	}
	public INTERR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERR, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_conditional_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConditional_expression) {
			listener.enterConditional_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConditional_expression) {
			listener.exitConditional_expression(this);
		}
	}
}


export class Null_coalescing_expressionContext extends ParserRuleContext {
	public conditional_or_expression(): Conditional_or_expressionContext {
		return this.getRuleContext(0, Conditional_or_expressionContext);
	}
	public OP_COALESCING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_COALESCING, 0); }
	public null_coalescing_expression(): Null_coalescing_expressionContext | undefined {
		return this.tryGetRuleContext(0, Null_coalescing_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_null_coalescing_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNull_coalescing_expression) {
			listener.enterNull_coalescing_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNull_coalescing_expression) {
			listener.exitNull_coalescing_expression(this);
		}
	}
}


export class Conditional_or_expressionContext extends ParserRuleContext {
	public conditional_and_expression(): Conditional_and_expressionContext[];
	public conditional_and_expression(i: number): Conditional_and_expressionContext;
	public conditional_and_expression(i?: number): Conditional_and_expressionContext | Conditional_and_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Conditional_and_expressionContext);
		} else {
			return this.getRuleContext(i, Conditional_and_expressionContext);
		}
	}
	public OP_OR(): TerminalNode[];
	public OP_OR(i: number): TerminalNode;
	public OP_OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_OR);
		} else {
			return this.getToken(CSharpParser.OP_OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_conditional_or_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConditional_or_expression) {
			listener.enterConditional_or_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConditional_or_expression) {
			listener.exitConditional_or_expression(this);
		}
	}
}


export class Conditional_and_expressionContext extends ParserRuleContext {
	public inclusive_or_expression(): Inclusive_or_expressionContext[];
	public inclusive_or_expression(i: number): Inclusive_or_expressionContext;
	public inclusive_or_expression(i?: number): Inclusive_or_expressionContext | Inclusive_or_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Inclusive_or_expressionContext);
		} else {
			return this.getRuleContext(i, Inclusive_or_expressionContext);
		}
	}
	public OP_AND(): TerminalNode[];
	public OP_AND(i: number): TerminalNode;
	public OP_AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_AND);
		} else {
			return this.getToken(CSharpParser.OP_AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_conditional_and_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConditional_and_expression) {
			listener.enterConditional_and_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConditional_and_expression) {
			listener.exitConditional_and_expression(this);
		}
	}
}


export class Inclusive_or_expressionContext extends ParserRuleContext {
	public exclusive_or_expression(): Exclusive_or_expressionContext[];
	public exclusive_or_expression(i: number): Exclusive_or_expressionContext;
	public exclusive_or_expression(i?: number): Exclusive_or_expressionContext | Exclusive_or_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Exclusive_or_expressionContext);
		} else {
			return this.getRuleContext(i, Exclusive_or_expressionContext);
		}
	}
	public BITWISE_OR(): TerminalNode[];
	public BITWISE_OR(i: number): TerminalNode;
	public BITWISE_OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.BITWISE_OR);
		} else {
			return this.getToken(CSharpParser.BITWISE_OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_inclusive_or_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInclusive_or_expression) {
			listener.enterInclusive_or_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInclusive_or_expression) {
			listener.exitInclusive_or_expression(this);
		}
	}
}


export class Exclusive_or_expressionContext extends ParserRuleContext {
	public and_expression(): And_expressionContext[];
	public and_expression(i: number): And_expressionContext;
	public and_expression(i?: number): And_expressionContext | And_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_expressionContext);
		} else {
			return this.getRuleContext(i, And_expressionContext);
		}
	}
	public CARET(): TerminalNode[];
	public CARET(i: number): TerminalNode;
	public CARET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.CARET);
		} else {
			return this.getToken(CSharpParser.CARET, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_exclusive_or_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterExclusive_or_expression) {
			listener.enterExclusive_or_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitExclusive_or_expression) {
			listener.exitExclusive_or_expression(this);
		}
	}
}


export class And_expressionContext extends ParserRuleContext {
	public equality_expression(): Equality_expressionContext[];
	public equality_expression(i: number): Equality_expressionContext;
	public equality_expression(i?: number): Equality_expressionContext | Equality_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Equality_expressionContext);
		} else {
			return this.getRuleContext(i, Equality_expressionContext);
		}
	}
	public AMP(): TerminalNode[];
	public AMP(i: number): TerminalNode;
	public AMP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.AMP);
		} else {
			return this.getToken(CSharpParser.AMP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_and_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAnd_expression) {
			listener.enterAnd_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAnd_expression) {
			listener.exitAnd_expression(this);
		}
	}
}


export class Equality_expressionContext extends ParserRuleContext {
	public relational_expression(): Relational_expressionContext[];
	public relational_expression(i: number): Relational_expressionContext;
	public relational_expression(i?: number): Relational_expressionContext | Relational_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Relational_expressionContext);
		} else {
			return this.getRuleContext(i, Relational_expressionContext);
		}
	}
	public OP_EQ(): TerminalNode[];
	public OP_EQ(i: number): TerminalNode;
	public OP_EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_EQ);
		} else {
			return this.getToken(CSharpParser.OP_EQ, i);
		}
	}
	public OP_NE(): TerminalNode[];
	public OP_NE(i: number): TerminalNode;
	public OP_NE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_NE);
		} else {
			return this.getToken(CSharpParser.OP_NE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_equality_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEquality_expression) {
			listener.enterEquality_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEquality_expression) {
			listener.exitEquality_expression(this);
		}
	}
}


export class Relational_expressionContext extends ParserRuleContext {
	public shift_expression(): Shift_expressionContext[];
	public shift_expression(i: number): Shift_expressionContext;
	public shift_expression(i?: number): Shift_expressionContext | Shift_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Shift_expressionContext);
		} else {
			return this.getRuleContext(i, Shift_expressionContext);
		}
	}
	public IS(): TerminalNode[];
	public IS(i: number): TerminalNode;
	public IS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.IS);
		} else {
			return this.getToken(CSharpParser.IS, i);
		}
	}
	public isType(): IsTypeContext[];
	public isType(i: number): IsTypeContext;
	public isType(i?: number): IsTypeContext | IsTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IsTypeContext);
		} else {
			return this.getRuleContext(i, IsTypeContext);
		}
	}
	public AS(): TerminalNode[];
	public AS(i: number): TerminalNode;
	public AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.AS);
		} else {
			return this.getToken(CSharpParser.AS, i);
		}
	}
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.LT);
		} else {
			return this.getToken(CSharpParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.GT);
		} else {
			return this.getToken(CSharpParser.GT, i);
		}
	}
	public OP_LE(): TerminalNode[];
	public OP_LE(i: number): TerminalNode;
	public OP_LE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_LE);
		} else {
			return this.getToken(CSharpParser.OP_LE, i);
		}
	}
	public OP_GE(): TerminalNode[];
	public OP_GE(i: number): TerminalNode;
	public OP_GE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_GE);
		} else {
			return this.getToken(CSharpParser.OP_GE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_relational_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterRelational_expression) {
			listener.enterRelational_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitRelational_expression) {
			listener.exitRelational_expression(this);
		}
	}
}


export class Shift_expressionContext extends ParserRuleContext {
	public additive_expression(): Additive_expressionContext[];
	public additive_expression(i: number): Additive_expressionContext;
	public additive_expression(i?: number): Additive_expressionContext | Additive_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Additive_expressionContext);
		} else {
			return this.getRuleContext(i, Additive_expressionContext);
		}
	}
	public OP_LEFT_SHIFT(): TerminalNode[];
	public OP_LEFT_SHIFT(i: number): TerminalNode;
	public OP_LEFT_SHIFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_LEFT_SHIFT);
		} else {
			return this.getToken(CSharpParser.OP_LEFT_SHIFT, i);
		}
	}
	public right_shift(): Right_shiftContext[];
	public right_shift(i: number): Right_shiftContext;
	public right_shift(i?: number): Right_shiftContext | Right_shiftContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Right_shiftContext);
		} else {
			return this.getRuleContext(i, Right_shiftContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_shift_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterShift_expression) {
			listener.enterShift_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitShift_expression) {
			listener.exitShift_expression(this);
		}
	}
}


export class Additive_expressionContext extends ParserRuleContext {
	public multiplicative_expression(): Multiplicative_expressionContext[];
	public multiplicative_expression(i: number): Multiplicative_expressionContext;
	public multiplicative_expression(i?: number): Multiplicative_expressionContext | Multiplicative_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Multiplicative_expressionContext);
		} else {
			return this.getRuleContext(i, Multiplicative_expressionContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.PLUS);
		} else {
			return this.getToken(CSharpParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.MINUS);
		} else {
			return this.getToken(CSharpParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_additive_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAdditive_expression) {
			listener.enterAdditive_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAdditive_expression) {
			listener.exitAdditive_expression(this);
		}
	}
}


export class Multiplicative_expressionContext extends ParserRuleContext {
	public unary_expression(): Unary_expressionContext[];
	public unary_expression(i: number): Unary_expressionContext;
	public unary_expression(i?: number): Unary_expressionContext | Unary_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unary_expressionContext);
		} else {
			return this.getRuleContext(i, Unary_expressionContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.STAR);
		} else {
			return this.getToken(CSharpParser.STAR, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.DIV);
		} else {
			return this.getToken(CSharpParser.DIV, i);
		}
	}
	public PERCENT(): TerminalNode[];
	public PERCENT(i: number): TerminalNode;
	public PERCENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.PERCENT);
		} else {
			return this.getToken(CSharpParser.PERCENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_multiplicative_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMultiplicative_expression) {
			listener.enterMultiplicative_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMultiplicative_expression) {
			listener.exitMultiplicative_expression(this);
		}
	}
}


export class Unary_expressionContext extends ParserRuleContext {
	public primary_expression(): Primary_expressionContext | undefined {
		return this.tryGetRuleContext(0, Primary_expressionContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PLUS, 0); }
	public unary_expression(): Unary_expressionContext | undefined {
		return this.tryGetRuleContext(0, Unary_expressionContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.MINUS, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BANG, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.TILDE, 0); }
	public OP_INC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_INC, 0); }
	public OP_DEC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_DEC, 0); }
	public OPEN_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_PARENS, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public CLOSE_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_PARENS, 0); }
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.AWAIT, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.AMP, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_unary_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUnary_expression) {
			listener.enterUnary_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUnary_expression) {
			listener.exitUnary_expression(this);
		}
	}
}


export class Primary_expressionContext extends ParserRuleContext {
	public _pe: Primary_expression_startContext;
	public primary_expression_start(): Primary_expression_startContext {
		return this.getRuleContext(0, Primary_expression_startContext);
	}
	public bracket_expression(): Bracket_expressionContext[];
	public bracket_expression(i: number): Bracket_expressionContext;
	public bracket_expression(i?: number): Bracket_expressionContext | Bracket_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bracket_expressionContext);
		} else {
			return this.getRuleContext(i, Bracket_expressionContext);
		}
	}
	public member_access(): Member_accessContext[];
	public member_access(i: number): Member_accessContext;
	public member_access(i?: number): Member_accessContext | Member_accessContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Member_accessContext);
		} else {
			return this.getRuleContext(i, Member_accessContext);
		}
	}
	public method_invocation(): Method_invocationContext[];
	public method_invocation(i: number): Method_invocationContext;
	public method_invocation(i?: number): Method_invocationContext | Method_invocationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Method_invocationContext);
		} else {
			return this.getRuleContext(i, Method_invocationContext);
		}
	}
	public OP_INC(): TerminalNode[];
	public OP_INC(i: number): TerminalNode;
	public OP_INC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_INC);
		} else {
			return this.getToken(CSharpParser.OP_INC, i);
		}
	}
	public OP_DEC(): TerminalNode[];
	public OP_DEC(i: number): TerminalNode;
	public OP_DEC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_DEC);
		} else {
			return this.getToken(CSharpParser.OP_DEC, i);
		}
	}
	public OP_PTR(): TerminalNode[];
	public OP_PTR(i: number): TerminalNode;
	public OP_PTR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_PTR);
		} else {
			return this.getToken(CSharpParser.OP_PTR, i);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_primary_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterPrimary_expression) {
			listener.enterPrimary_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitPrimary_expression) {
			listener.exitPrimary_expression(this);
		}
	}
}


export class Primary_expression_startContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_primary_expression_start; }
	public copyFrom(ctx: Primary_expression_startContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralExpressionContext extends Primary_expression_startContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
}
export class SimpleNameExpressionContext extends Primary_expression_startContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public type_argument_list(): Type_argument_listContext | undefined {
		return this.tryGetRuleContext(0, Type_argument_listContext);
	}
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSimpleNameExpression) {
			listener.enterSimpleNameExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSimpleNameExpression) {
			listener.exitSimpleNameExpression(this);
		}
	}
}
export class ParenthesisExpressionsContext extends Primary_expression_startContext {
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterParenthesisExpressions) {
			listener.enterParenthesisExpressions(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitParenthesisExpressions) {
			listener.exitParenthesisExpressions(this);
		}
	}
}
export class MemberAccessExpressionContext extends Primary_expression_startContext {
	public predefined_type(): Predefined_typeContext | undefined {
		return this.tryGetRuleContext(0, Predefined_typeContext);
	}
	public qualified_alias_member(): Qualified_alias_memberContext | undefined {
		return this.tryGetRuleContext(0, Qualified_alias_memberContext);
	}
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMemberAccessExpression) {
			listener.enterMemberAccessExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMemberAccessExpression) {
			listener.exitMemberAccessExpression(this);
		}
	}
}
export class LiteralAccessExpressionContext extends Primary_expression_startContext {
	public LITERAL_ACCESS(): TerminalNode { return this.getToken(CSharpParser.LITERAL_ACCESS, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLiteralAccessExpression) {
			listener.enterLiteralAccessExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLiteralAccessExpression) {
			listener.exitLiteralAccessExpression(this);
		}
	}
}
export class ThisReferenceExpressionContext extends Primary_expression_startContext {
	public THIS(): TerminalNode { return this.getToken(CSharpParser.THIS, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterThisReferenceExpression) {
			listener.enterThisReferenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitThisReferenceExpression) {
			listener.exitThisReferenceExpression(this);
		}
	}
}
export class BaseAccessExpressionContext extends Primary_expression_startContext {
	public BASE(): TerminalNode { return this.getToken(CSharpParser.BASE, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOT, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACKET, 0); }
	public expression_list(): Expression_listContext | undefined {
		return this.tryGetRuleContext(0, Expression_listContext);
	}
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACKET, 0); }
	public type_argument_list(): Type_argument_listContext | undefined {
		return this.tryGetRuleContext(0, Type_argument_listContext);
	}
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterBaseAccessExpression) {
			listener.enterBaseAccessExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitBaseAccessExpression) {
			listener.exitBaseAccessExpression(this);
		}
	}
}
export class ObjectCreationExpressionContext extends Primary_expression_startContext {
	public NEW(): TerminalNode { return this.getToken(CSharpParser.NEW, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public anonymous_object_initializer(): Anonymous_object_initializerContext | undefined {
		return this.tryGetRuleContext(0, Anonymous_object_initializerContext);
	}
	public rank_specifier(): Rank_specifierContext[];
	public rank_specifier(i: number): Rank_specifierContext;
	public rank_specifier(i?: number): Rank_specifierContext | Rank_specifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rank_specifierContext);
		} else {
			return this.getRuleContext(i, Rank_specifierContext);
		}
	}
	public array_initializer(): Array_initializerContext | undefined {
		return this.tryGetRuleContext(0, Array_initializerContext);
	}
	public object_creation_expression(): Object_creation_expressionContext | undefined {
		return this.tryGetRuleContext(0, Object_creation_expressionContext);
	}
	public object_or_collection_initializer(): Object_or_collection_initializerContext | undefined {
		return this.tryGetRuleContext(0, Object_or_collection_initializerContext);
	}
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACKET, 0); }
	public expression_list(): Expression_listContext | undefined {
		return this.tryGetRuleContext(0, Expression_listContext);
	}
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACKET, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterObjectCreationExpression) {
			listener.enterObjectCreationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitObjectCreationExpression) {
			listener.exitObjectCreationExpression(this);
		}
	}
}
export class TypeofExpressionContext extends Primary_expression_startContext {
	public TYPEOF(): TerminalNode { return this.getToken(CSharpParser.TYPEOF, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public unbound_type_name(): Unbound_type_nameContext | undefined {
		return this.tryGetRuleContext(0, Unbound_type_nameContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOID, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterTypeofExpression) {
			listener.enterTypeofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitTypeofExpression) {
			listener.exitTypeofExpression(this);
		}
	}
}
export class CheckedExpressionContext extends Primary_expression_startContext {
	public CHECKED(): TerminalNode { return this.getToken(CSharpParser.CHECKED, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterCheckedExpression) {
			listener.enterCheckedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitCheckedExpression) {
			listener.exitCheckedExpression(this);
		}
	}
}
export class UncheckedExpressionContext extends Primary_expression_startContext {
	public UNCHECKED(): TerminalNode { return this.getToken(CSharpParser.UNCHECKED, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUncheckedExpression) {
			listener.enterUncheckedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUncheckedExpression) {
			listener.exitUncheckedExpression(this);
		}
	}
}
export class DefaultValueExpressionContext extends Primary_expression_startContext {
	public DEFAULT(): TerminalNode { return this.getToken(CSharpParser.DEFAULT, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterDefaultValueExpression) {
			listener.enterDefaultValueExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitDefaultValueExpression) {
			listener.exitDefaultValueExpression(this);
		}
	}
}
export class AnonymousMethodExpressionContext extends Primary_expression_startContext {
	public DELEGATE(): TerminalNode { return this.getToken(CSharpParser.DELEGATE, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASYNC, 0); }
	public OPEN_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_PARENS, 0); }
	public explicit_anonymous_function_parameter_list(): Explicit_anonymous_function_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Explicit_anonymous_function_parameter_listContext);
	}
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAnonymousMethodExpression) {
			listener.enterAnonymousMethodExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAnonymousMethodExpression) {
			listener.exitAnonymousMethodExpression(this);
		}
	}
}
export class SizeofExpressionContext extends Primary_expression_startContext {
	public SIZEOF(): TerminalNode { return this.getToken(CSharpParser.SIZEOF, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSizeofExpression) {
			listener.enterSizeofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSizeofExpression) {
			listener.exitSizeofExpression(this);
		}
	}
}
export class NameofExpressionContext extends Primary_expression_startContext {
	public NAMEOF(): TerminalNode { return this.getToken(CSharpParser.NAMEOF, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.DOT);
		} else {
			return this.getToken(CSharpParser.DOT, i);
		}
	}
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNameofExpression) {
			listener.enterNameofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNameofExpression) {
			listener.exitNameofExpression(this);
		}
	}
}


export class Member_accessContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(CSharpParser.DOT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public INTERR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERR, 0); }
	public type_argument_list(): Type_argument_listContext | undefined {
		return this.tryGetRuleContext(0, Type_argument_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_member_access; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMember_access) {
			listener.enterMember_access(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMember_access) {
			listener.exitMember_access(this);
		}
	}
}


export class Bracket_expressionContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACKET, 0); }
	public indexer_argument(): Indexer_argumentContext[];
	public indexer_argument(i: number): Indexer_argumentContext;
	public indexer_argument(i?: number): Indexer_argumentContext | Indexer_argumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Indexer_argumentContext);
		} else {
			return this.getRuleContext(i, Indexer_argumentContext);
		}
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACKET, 0); }
	public INTERR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_bracket_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterBracket_expression) {
			listener.enterBracket_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitBracket_expression) {
			listener.exitBracket_expression(this);
		}
	}
}


export class Indexer_argumentContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_indexer_argument; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterIndexer_argument) {
			listener.enterIndexer_argument(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitIndexer_argument) {
			listener.exitIndexer_argument(this);
		}
	}
}


export class Predefined_typeContext extends ParserRuleContext {
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BOOL, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BYTE, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CHAR, 0); }
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DECIMAL, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOUBLE, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FLOAT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.LONG, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OBJECT, 0); }
	public SBYTE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SBYTE, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SHORT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STRING, 0); }
	public UINT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UINT, 0); }
	public ULONG(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ULONG, 0); }
	public USHORT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.USHORT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_predefined_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterPredefined_type) {
			listener.enterPredefined_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitPredefined_type) {
			listener.exitPredefined_type(this);
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
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_expression_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterExpression_list) {
			listener.enterExpression_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitExpression_list) {
			listener.exitExpression_list(this);
		}
	}
}


export class Object_or_collection_initializerContext extends ParserRuleContext {
	public object_initializer(): Object_initializerContext | undefined {
		return this.tryGetRuleContext(0, Object_initializerContext);
	}
	public collection_initializer(): Collection_initializerContext | undefined {
		return this.tryGetRuleContext(0, Collection_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_object_or_collection_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterObject_or_collection_initializer) {
			listener.enterObject_or_collection_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitObject_or_collection_initializer) {
			listener.exitObject_or_collection_initializer(this);
		}
	}
}


export class Object_initializerContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public member_initializer_list(): Member_initializer_listContext | undefined {
		return this.tryGetRuleContext(0, Member_initializer_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_object_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterObject_initializer) {
			listener.enterObject_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitObject_initializer) {
			listener.exitObject_initializer(this);
		}
	}
}


export class Member_initializer_listContext extends ParserRuleContext {
	public member_initializer(): Member_initializerContext[];
	public member_initializer(i: number): Member_initializerContext;
	public member_initializer(i?: number): Member_initializerContext | Member_initializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Member_initializerContext);
		} else {
			return this.getRuleContext(i, Member_initializerContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_member_initializer_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMember_initializer_list) {
			listener.enterMember_initializer_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMember_initializer_list) {
			listener.exitMember_initializer_list(this);
		}
	}
}


export class Member_initializerContext extends ParserRuleContext {
	public ASSIGNMENT(): TerminalNode { return this.getToken(CSharpParser.ASSIGNMENT, 0); }
	public initializer_value(): Initializer_valueContext {
		return this.getRuleContext(0, Initializer_valueContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACKET, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_member_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMember_initializer) {
			listener.enterMember_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMember_initializer) {
			listener.exitMember_initializer(this);
		}
	}
}


export class Initializer_valueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public object_or_collection_initializer(): Object_or_collection_initializerContext | undefined {
		return this.tryGetRuleContext(0, Object_or_collection_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_initializer_value; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInitializer_value) {
			listener.enterInitializer_value(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInitializer_value) {
			listener.exitInitializer_value(this);
		}
	}
}


export class Collection_initializerContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public element_initializer(): Element_initializerContext[];
	public element_initializer(i: number): Element_initializerContext;
	public element_initializer(i?: number): Element_initializerContext | Element_initializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Element_initializerContext);
		} else {
			return this.getRuleContext(i, Element_initializerContext);
		}
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_collection_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterCollection_initializer) {
			listener.enterCollection_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitCollection_initializer) {
			listener.exitCollection_initializer(this);
		}
	}
}


export class Element_initializerContext extends ParserRuleContext {
	public non_assignment_expression(): Non_assignment_expressionContext | undefined {
		return this.tryGetRuleContext(0, Non_assignment_expressionContext);
	}
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACE, 0); }
	public expression_list(): Expression_listContext | undefined {
		return this.tryGetRuleContext(0, Expression_listContext);
	}
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_element_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterElement_initializer) {
			listener.enterElement_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitElement_initializer) {
			listener.exitElement_initializer(this);
		}
	}
}


export class Anonymous_object_initializerContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public member_declarator_list(): Member_declarator_listContext | undefined {
		return this.tryGetRuleContext(0, Member_declarator_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_anonymous_object_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAnonymous_object_initializer) {
			listener.enterAnonymous_object_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAnonymous_object_initializer) {
			listener.exitAnonymous_object_initializer(this);
		}
	}
}


export class Member_declarator_listContext extends ParserRuleContext {
	public member_declarator(): Member_declaratorContext[];
	public member_declarator(i: number): Member_declaratorContext;
	public member_declarator(i?: number): Member_declaratorContext | Member_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Member_declaratorContext);
		} else {
			return this.getRuleContext(i, Member_declaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_member_declarator_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMember_declarator_list) {
			listener.enterMember_declarator_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMember_declarator_list) {
			listener.exitMember_declarator_list(this);
		}
	}
}


export class Member_declaratorContext extends ParserRuleContext {
	public primary_expression(): Primary_expressionContext | undefined {
		return this.tryGetRuleContext(0, Primary_expressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_member_declarator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMember_declarator) {
			listener.enterMember_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMember_declarator) {
			listener.exitMember_declarator(this);
		}
	}
}


export class Unbound_type_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOUBLE_COLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOUBLE_COLON, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.DOT);
		} else {
			return this.getToken(CSharpParser.DOT, i);
		}
	}
	public generic_dimension_specifier(): Generic_dimension_specifierContext[];
	public generic_dimension_specifier(i: number): Generic_dimension_specifierContext;
	public generic_dimension_specifier(i?: number): Generic_dimension_specifierContext | Generic_dimension_specifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Generic_dimension_specifierContext);
		} else {
			return this.getRuleContext(i, Generic_dimension_specifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_unbound_type_name; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUnbound_type_name) {
			listener.enterUnbound_type_name(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUnbound_type_name) {
			listener.exitUnbound_type_name(this);
		}
	}
}


export class Generic_dimension_specifierContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(CSharpParser.LT, 0); }
	public GT(): TerminalNode { return this.getToken(CSharpParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_generic_dimension_specifier; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterGeneric_dimension_specifier) {
			listener.enterGeneric_dimension_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitGeneric_dimension_specifier) {
			listener.exitGeneric_dimension_specifier(this);
		}
	}
}


export class IsTypeContext extends ParserRuleContext {
	public base_type(): Base_typeContext {
		return this.getRuleContext(0, Base_typeContext);
	}
	public rank_specifier(): Rank_specifierContext[];
	public rank_specifier(i: number): Rank_specifierContext;
	public rank_specifier(i?: number): Rank_specifierContext | Rank_specifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rank_specifierContext);
		} else {
			return this.getRuleContext(i, Rank_specifierContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.STAR);
		} else {
			return this.getToken(CSharpParser.STAR, i);
		}
	}
	public INTERR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_isType; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterIsType) {
			listener.enterIsType(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitIsType) {
			listener.exitIsType(this);
		}
	}
}


export class Lambda_expressionContext extends ParserRuleContext {
	public anonymous_function_signature(): Anonymous_function_signatureContext {
		return this.getRuleContext(0, Anonymous_function_signatureContext);
	}
	public right_arrow(): Right_arrowContext {
		return this.getRuleContext(0, Right_arrowContext);
	}
	public anonymous_function_body(): Anonymous_function_bodyContext {
		return this.getRuleContext(0, Anonymous_function_bodyContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_lambda_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLambda_expression) {
			listener.enterLambda_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLambda_expression) {
			listener.exitLambda_expression(this);
		}
	}
}


export class Anonymous_function_signatureContext extends ParserRuleContext {
	public OPEN_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_PARENS, 0); }
	public explicit_anonymous_function_parameter_list(): Explicit_anonymous_function_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Explicit_anonymous_function_parameter_listContext);
	}
	public implicit_anonymous_function_parameter_list(): Implicit_anonymous_function_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Implicit_anonymous_function_parameter_listContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_anonymous_function_signature; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAnonymous_function_signature) {
			listener.enterAnonymous_function_signature(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAnonymous_function_signature) {
			listener.exitAnonymous_function_signature(this);
		}
	}
}


export class Explicit_anonymous_function_parameter_listContext extends ParserRuleContext {
	public explicit_anonymous_function_parameter(): Explicit_anonymous_function_parameterContext[];
	public explicit_anonymous_function_parameter(i: number): Explicit_anonymous_function_parameterContext;
	public explicit_anonymous_function_parameter(i?: number): Explicit_anonymous_function_parameterContext | Explicit_anonymous_function_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Explicit_anonymous_function_parameterContext);
		} else {
			return this.getRuleContext(i, Explicit_anonymous_function_parameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_explicit_anonymous_function_parameter_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterExplicit_anonymous_function_parameter_list) {
			listener.enterExplicit_anonymous_function_parameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitExplicit_anonymous_function_parameter_list) {
			listener.exitExplicit_anonymous_function_parameter_list(this);
		}
	}
}


export class Explicit_anonymous_function_parameterContext extends ParserRuleContext {
	public _refout: Token;
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public REF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REF, 0); }
	public OUT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_explicit_anonymous_function_parameter; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterExplicit_anonymous_function_parameter) {
			listener.enterExplicit_anonymous_function_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitExplicit_anonymous_function_parameter) {
			listener.exitExplicit_anonymous_function_parameter(this);
		}
	}
}


export class Implicit_anonymous_function_parameter_listContext extends ParserRuleContext {
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
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_implicit_anonymous_function_parameter_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterImplicit_anonymous_function_parameter_list) {
			listener.enterImplicit_anonymous_function_parameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitImplicit_anonymous_function_parameter_list) {
			listener.exitImplicit_anonymous_function_parameter_list(this);
		}
	}
}


export class Anonymous_function_bodyContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_anonymous_function_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAnonymous_function_body) {
			listener.enterAnonymous_function_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAnonymous_function_body) {
			listener.exitAnonymous_function_body(this);
		}
	}
}


export class Query_expressionContext extends ParserRuleContext {
	public from_clause(): From_clauseContext {
		return this.getRuleContext(0, From_clauseContext);
	}
	public query_body(): Query_bodyContext {
		return this.getRuleContext(0, Query_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_query_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterQuery_expression) {
			listener.enterQuery_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitQuery_expression) {
			listener.exitQuery_expression(this);
		}
	}
}


export class From_clauseContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(CSharpParser.FROM, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public IN(): TerminalNode { return this.getToken(CSharpParser.IN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_from_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFrom_clause) {
			listener.enterFrom_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFrom_clause) {
			listener.exitFrom_clause(this);
		}
	}
}


export class Query_bodyContext extends ParserRuleContext {
	public select_or_group_clause(): Select_or_group_clauseContext {
		return this.getRuleContext(0, Select_or_group_clauseContext);
	}
	public query_body_clause(): Query_body_clauseContext[];
	public query_body_clause(i: number): Query_body_clauseContext;
	public query_body_clause(i?: number): Query_body_clauseContext | Query_body_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Query_body_clauseContext);
		} else {
			return this.getRuleContext(i, Query_body_clauseContext);
		}
	}
	public query_continuation(): Query_continuationContext | undefined {
		return this.tryGetRuleContext(0, Query_continuationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_query_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterQuery_body) {
			listener.enterQuery_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitQuery_body) {
			listener.exitQuery_body(this);
		}
	}
}


export class Query_body_clauseContext extends ParserRuleContext {
	public from_clause(): From_clauseContext | undefined {
		return this.tryGetRuleContext(0, From_clauseContext);
	}
	public let_clause(): Let_clauseContext | undefined {
		return this.tryGetRuleContext(0, Let_clauseContext);
	}
	public where_clause(): Where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Where_clauseContext);
	}
	public combined_join_clause(): Combined_join_clauseContext | undefined {
		return this.tryGetRuleContext(0, Combined_join_clauseContext);
	}
	public orderby_clause(): Orderby_clauseContext | undefined {
		return this.tryGetRuleContext(0, Orderby_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_query_body_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterQuery_body_clause) {
			listener.enterQuery_body_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitQuery_body_clause) {
			listener.exitQuery_body_clause(this);
		}
	}
}


export class Let_clauseContext extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(CSharpParser.LET, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode { return this.getToken(CSharpParser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_let_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLet_clause) {
			listener.enterLet_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLet_clause) {
			listener.exitLet_clause(this);
		}
	}
}


export class Where_clauseContext extends ParserRuleContext {
	public WHERE(): TerminalNode { return this.getToken(CSharpParser.WHERE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_where_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterWhere_clause) {
			listener.enterWhere_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitWhere_clause) {
			listener.exitWhere_clause(this);
		}
	}
}


export class Combined_join_clauseContext extends ParserRuleContext {
	public JOIN(): TerminalNode { return this.getToken(CSharpParser.JOIN, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public IN(): TerminalNode { return this.getToken(CSharpParser.IN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ON(): TerminalNode { return this.getToken(CSharpParser.ON, 0); }
	public EQUALS(): TerminalNode { return this.getToken(CSharpParser.EQUALS, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public INTO(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_combined_join_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterCombined_join_clause) {
			listener.enterCombined_join_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitCombined_join_clause) {
			listener.exitCombined_join_clause(this);
		}
	}
}


export class Orderby_clauseContext extends ParserRuleContext {
	public ORDERBY(): TerminalNode { return this.getToken(CSharpParser.ORDERBY, 0); }
	public ordering(): OrderingContext[];
	public ordering(i: number): OrderingContext;
	public ordering(i?: number): OrderingContext | OrderingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrderingContext);
		} else {
			return this.getRuleContext(i, OrderingContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_orderby_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterOrderby_clause) {
			listener.enterOrderby_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitOrderby_clause) {
			listener.exitOrderby_clause(this);
		}
	}
}


export class OrderingContext extends ParserRuleContext {
	public _dir: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ASCENDING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASCENDING, 0); }
	public DESCENDING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DESCENDING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_ordering; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterOrdering) {
			listener.enterOrdering(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitOrdering) {
			listener.exitOrdering(this);
		}
	}
}


export class Select_or_group_clauseContext extends ParserRuleContext {
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SELECT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.GROUP, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_select_or_group_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSelect_or_group_clause) {
			listener.enterSelect_or_group_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSelect_or_group_clause) {
			listener.exitSelect_or_group_clause(this);
		}
	}
}


export class Query_continuationContext extends ParserRuleContext {
	public INTO(): TerminalNode { return this.getToken(CSharpParser.INTO, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public query_body(): Query_bodyContext {
		return this.getRuleContext(0, Query_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_query_continuation; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterQuery_continuation) {
			listener.enterQuery_continuation(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitQuery_continuation) {
			listener.exitQuery_continuation(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class LabeledStatementContext extends StatementContext {
	public labeled_Statement(): Labeled_StatementContext {
		return this.getRuleContext(0, Labeled_StatementContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLabeledStatement) {
			listener.enterLabeledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLabeledStatement) {
			listener.exitLabeledStatement(this);
		}
	}
}
export class DeclarationStatementContext extends StatementContext {
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	public local_variable_declaration(): Local_variable_declarationContext | undefined {
		return this.tryGetRuleContext(0, Local_variable_declarationContext);
	}
	public local_constant_declaration(): Local_constant_declarationContext | undefined {
		return this.tryGetRuleContext(0, Local_constant_declarationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterDeclarationStatement) {
			listener.enterDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitDeclarationStatement) {
			listener.exitDeclarationStatement(this);
		}
	}
}
export class EmbeddedStatementContext extends StatementContext {
	public embedded_statement(): Embedded_statementContext {
		return this.getRuleContext(0, Embedded_statementContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEmbeddedStatement) {
			listener.enterEmbeddedStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEmbeddedStatement) {
			listener.exitEmbeddedStatement(this);
		}
	}
}


export class Labeled_StatementContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_labeled_Statement; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLabeled_Statement) {
			listener.enterLabeled_Statement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLabeled_Statement) {
			listener.exitLabeled_Statement(this);
		}
	}
}


export class Embedded_statementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public simple_embedded_statement(): Simple_embedded_statementContext | undefined {
		return this.tryGetRuleContext(0, Simple_embedded_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_embedded_statement; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEmbedded_statement) {
			listener.enterEmbedded_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEmbedded_statement) {
			listener.exitEmbedded_statement(this);
		}
	}
}


export class Simple_embedded_statementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_simple_embedded_statement; }
	public copyFrom(ctx: Simple_embedded_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class TheEmptyStatementContext extends Simple_embedded_statementContext {
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterTheEmptyStatement) {
			listener.enterTheEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitTheEmptyStatement) {
			listener.exitTheEmptyStatement(this);
		}
	}
}
export class ExpressionStatementContext extends Simple_embedded_statementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
}
export class IfStatementContext extends Simple_embedded_statementContext {
	public IF(): TerminalNode { return this.getToken(CSharpParser.IF, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public if_body(): If_bodyContext[];
	public if_body(i: number): If_bodyContext;
	public if_body(i?: number): If_bodyContext | If_bodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(If_bodyContext);
		} else {
			return this.getRuleContext(i, If_bodyContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ELSE, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
}
export class SwitchStatementContext extends Simple_embedded_statementContext {
	public SWITCH(): TerminalNode { return this.getToken(CSharpParser.SWITCH, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public switch_section(): Switch_sectionContext[];
	public switch_section(i: number): Switch_sectionContext;
	public switch_section(i?: number): Switch_sectionContext | Switch_sectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Switch_sectionContext);
		} else {
			return this.getRuleContext(i, Switch_sectionContext);
		}
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
}
export class WhileStatementContext extends Simple_embedded_statementContext {
	public WHILE(): TerminalNode { return this.getToken(CSharpParser.WHILE, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public embedded_statement(): Embedded_statementContext {
		return this.getRuleContext(0, Embedded_statementContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
}
export class DoStatementContext extends Simple_embedded_statementContext {
	public DO(): TerminalNode { return this.getToken(CSharpParser.DO, 0); }
	public embedded_statement(): Embedded_statementContext {
		return this.getRuleContext(0, Embedded_statementContext);
	}
	public WHILE(): TerminalNode { return this.getToken(CSharpParser.WHILE, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterDoStatement) {
			listener.enterDoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitDoStatement) {
			listener.exitDoStatement(this);
		}
	}
}
export class ForStatementContext extends Simple_embedded_statementContext {
	public FOR(): TerminalNode { return this.getToken(CSharpParser.FOR, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.SEMICOLON);
		} else {
			return this.getToken(CSharpParser.SEMICOLON, i);
		}
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public embedded_statement(): Embedded_statementContext {
		return this.getRuleContext(0, Embedded_statementContext);
	}
	public for_initializer(): For_initializerContext | undefined {
		return this.tryGetRuleContext(0, For_initializerContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public for_iterator(): For_iteratorContext | undefined {
		return this.tryGetRuleContext(0, For_iteratorContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
}
export class ForeachStatementContext extends Simple_embedded_statementContext {
	public FOREACH(): TerminalNode { return this.getToken(CSharpParser.FOREACH, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public local_variable_type(): Local_variable_typeContext {
		return this.getRuleContext(0, Local_variable_typeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public IN(): TerminalNode { return this.getToken(CSharpParser.IN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public embedded_statement(): Embedded_statementContext {
		return this.getRuleContext(0, Embedded_statementContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterForeachStatement) {
			listener.enterForeachStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitForeachStatement) {
			listener.exitForeachStatement(this);
		}
	}
}
export class BreakStatementContext extends Simple_embedded_statementContext {
	public BREAK(): TerminalNode { return this.getToken(CSharpParser.BREAK, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
}
export class ContinueStatementContext extends Simple_embedded_statementContext {
	public CONTINUE(): TerminalNode { return this.getToken(CSharpParser.CONTINUE, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
}
export class GotoStatementContext extends Simple_embedded_statementContext {
	public GOTO(): TerminalNode { return this.getToken(CSharpParser.GOTO, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public CASE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CASE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DEFAULT, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterGotoStatement) {
			listener.enterGotoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitGotoStatement) {
			listener.exitGotoStatement(this);
		}
	}
}
export class ReturnStatementContext extends Simple_embedded_statementContext {
	public RETURN(): TerminalNode { return this.getToken(CSharpParser.RETURN, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
}
export class ThrowStatementContext extends Simple_embedded_statementContext {
	public THROW(): TerminalNode { return this.getToken(CSharpParser.THROW, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
}
export class TryStatementContext extends Simple_embedded_statementContext {
	public TRY(): TerminalNode { return this.getToken(CSharpParser.TRY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public catch_clauses(): Catch_clausesContext | undefined {
		return this.tryGetRuleContext(0, Catch_clausesContext);
	}
	public finally_clause(): Finally_clauseContext | undefined {
		return this.tryGetRuleContext(0, Finally_clauseContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
}
export class CheckedStatementContext extends Simple_embedded_statementContext {
	public CHECKED(): TerminalNode { return this.getToken(CSharpParser.CHECKED, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterCheckedStatement) {
			listener.enterCheckedStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitCheckedStatement) {
			listener.exitCheckedStatement(this);
		}
	}
}
export class UncheckedStatementContext extends Simple_embedded_statementContext {
	public UNCHECKED(): TerminalNode { return this.getToken(CSharpParser.UNCHECKED, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUncheckedStatement) {
			listener.enterUncheckedStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUncheckedStatement) {
			listener.exitUncheckedStatement(this);
		}
	}
}
export class LockStatementContext extends Simple_embedded_statementContext {
	public LOCK(): TerminalNode { return this.getToken(CSharpParser.LOCK, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public embedded_statement(): Embedded_statementContext {
		return this.getRuleContext(0, Embedded_statementContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLockStatement) {
			listener.enterLockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLockStatement) {
			listener.exitLockStatement(this);
		}
	}
}
export class UsingStatementContext extends Simple_embedded_statementContext {
	public USING(): TerminalNode { return this.getToken(CSharpParser.USING, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public resource_acquisition(): Resource_acquisitionContext {
		return this.getRuleContext(0, Resource_acquisitionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public embedded_statement(): Embedded_statementContext {
		return this.getRuleContext(0, Embedded_statementContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUsingStatement) {
			listener.enterUsingStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUsingStatement) {
			listener.exitUsingStatement(this);
		}
	}
}
export class YieldStatementContext extends Simple_embedded_statementContext {
	public YIELD(): TerminalNode { return this.getToken(CSharpParser.YIELD, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BREAK, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterYieldStatement) {
			listener.enterYieldStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitYieldStatement) {
			listener.exitYieldStatement(this);
		}
	}
}
export class UnsafeStatementContext extends Simple_embedded_statementContext {
	public UNSAFE(): TerminalNode { return this.getToken(CSharpParser.UNSAFE, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUnsafeStatement) {
			listener.enterUnsafeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUnsafeStatement) {
			listener.exitUnsafeStatement(this);
		}
	}
}
export class FixedStatementContext extends Simple_embedded_statementContext {
	public FIXED(): TerminalNode { return this.getToken(CSharpParser.FIXED, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public pointer_type(): Pointer_typeContext {
		return this.getRuleContext(0, Pointer_typeContext);
	}
	public fixed_pointer_declarators(): Fixed_pointer_declaratorsContext {
		return this.getRuleContext(0, Fixed_pointer_declaratorsContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public embedded_statement(): Embedded_statementContext {
		return this.getRuleContext(0, Embedded_statementContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFixedStatement) {
			listener.enterFixedStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFixedStatement) {
			listener.exitFixedStatement(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public statement_list(): Statement_listContext | undefined {
		return this.tryGetRuleContext(0, Statement_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_block; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class Local_variable_declarationContext extends ParserRuleContext {
	public local_variable_type(): Local_variable_typeContext {
		return this.getRuleContext(0, Local_variable_typeContext);
	}
	public local_variable_declarator(): Local_variable_declaratorContext[];
	public local_variable_declarator(i: number): Local_variable_declaratorContext;
	public local_variable_declarator(i?: number): Local_variable_declaratorContext | Local_variable_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Local_variable_declaratorContext);
		} else {
			return this.getRuleContext(i, Local_variable_declaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_local_variable_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLocal_variable_declaration) {
			listener.enterLocal_variable_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLocal_variable_declaration) {
			listener.exitLocal_variable_declaration(this);
		}
	}
}


export class Local_variable_typeContext extends ParserRuleContext {
	public VAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VAR, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_local_variable_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLocal_variable_type) {
			listener.enterLocal_variable_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLocal_variable_type) {
			listener.exitLocal_variable_type(this);
		}
	}
}


export class Local_variable_declaratorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASSIGNMENT, 0); }
	public local_variable_initializer(): Local_variable_initializerContext | undefined {
		return this.tryGetRuleContext(0, Local_variable_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_local_variable_declarator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLocal_variable_declarator) {
			listener.enterLocal_variable_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLocal_variable_declarator) {
			listener.exitLocal_variable_declarator(this);
		}
	}
}


export class Local_variable_initializerContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public array_initializer(): Array_initializerContext | undefined {
		return this.tryGetRuleContext(0, Array_initializerContext);
	}
	public local_variable_initializer_unsafe(): Local_variable_initializer_unsafeContext | undefined {
		return this.tryGetRuleContext(0, Local_variable_initializer_unsafeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_local_variable_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLocal_variable_initializer) {
			listener.enterLocal_variable_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLocal_variable_initializer) {
			listener.exitLocal_variable_initializer(this);
		}
	}
}


export class Local_constant_declarationContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(CSharpParser.CONST, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public constant_declarators(): Constant_declaratorsContext {
		return this.getRuleContext(0, Constant_declaratorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_local_constant_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLocal_constant_declaration) {
			listener.enterLocal_constant_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLocal_constant_declaration) {
			listener.exitLocal_constant_declaration(this);
		}
	}
}


export class If_bodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public simple_embedded_statement(): Simple_embedded_statementContext | undefined {
		return this.tryGetRuleContext(0, Simple_embedded_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_if_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterIf_body) {
			listener.enterIf_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitIf_body) {
			listener.exitIf_body(this);
		}
	}
}


export class Switch_sectionContext extends ParserRuleContext {
	public statement_list(): Statement_listContext {
		return this.getRuleContext(0, Statement_listContext);
	}
	public switch_label(): Switch_labelContext[];
	public switch_label(i: number): Switch_labelContext;
	public switch_label(i?: number): Switch_labelContext | Switch_labelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Switch_labelContext);
		} else {
			return this.getRuleContext(i, Switch_labelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_switch_section; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSwitch_section) {
			listener.enterSwitch_section(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSwitch_section) {
			listener.exitSwitch_section(this);
		}
	}
}


export class Switch_labelContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CASE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_switch_label; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSwitch_label) {
			listener.enterSwitch_label(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSwitch_label) {
			listener.exitSwitch_label(this);
		}
	}
}


export class Statement_listContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return CSharpParser.RULE_statement_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterStatement_list) {
			listener.enterStatement_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitStatement_list) {
			listener.exitStatement_list(this);
		}
	}
}


export class For_initializerContext extends ParserRuleContext {
	public local_variable_declaration(): Local_variable_declarationContext | undefined {
		return this.tryGetRuleContext(0, Local_variable_declarationContext);
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
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_for_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFor_initializer) {
			listener.enterFor_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFor_initializer) {
			listener.exitFor_initializer(this);
		}
	}
}


export class For_iteratorContext extends ParserRuleContext {
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
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_for_iterator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFor_iterator) {
			listener.enterFor_iterator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFor_iterator) {
			listener.exitFor_iterator(this);
		}
	}
}


export class Catch_clausesContext extends ParserRuleContext {
	public specific_catch_clause(): Specific_catch_clauseContext[];
	public specific_catch_clause(i: number): Specific_catch_clauseContext;
	public specific_catch_clause(i?: number): Specific_catch_clauseContext | Specific_catch_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Specific_catch_clauseContext);
		} else {
			return this.getRuleContext(i, Specific_catch_clauseContext);
		}
	}
	public general_catch_clause(): General_catch_clauseContext | undefined {
		return this.tryGetRuleContext(0, General_catch_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_catch_clauses; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterCatch_clauses) {
			listener.enterCatch_clauses(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitCatch_clauses) {
			listener.exitCatch_clauses(this);
		}
	}
}


export class Specific_catch_clauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(CSharpParser.CATCH, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public class_type(): Class_typeContext {
		return this.getRuleContext(0, Class_typeContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public exception_filter(): Exception_filterContext | undefined {
		return this.tryGetRuleContext(0, Exception_filterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_specific_catch_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSpecific_catch_clause) {
			listener.enterSpecific_catch_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSpecific_catch_clause) {
			listener.exitSpecific_catch_clause(this);
		}
	}
}


export class General_catch_clauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(CSharpParser.CATCH, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public exception_filter(): Exception_filterContext | undefined {
		return this.tryGetRuleContext(0, Exception_filterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_general_catch_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterGeneral_catch_clause) {
			listener.enterGeneral_catch_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitGeneral_catch_clause) {
			listener.exitGeneral_catch_clause(this);
		}
	}
}


export class Exception_filterContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(CSharpParser.WHEN, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_exception_filter; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterException_filter) {
			listener.enterException_filter(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitException_filter) {
			listener.exitException_filter(this);
		}
	}
}


export class Finally_clauseContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(CSharpParser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_finally_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFinally_clause) {
			listener.enterFinally_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFinally_clause) {
			listener.exitFinally_clause(this);
		}
	}
}


export class Resource_acquisitionContext extends ParserRuleContext {
	public local_variable_declaration(): Local_variable_declarationContext | undefined {
		return this.tryGetRuleContext(0, Local_variable_declarationContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_resource_acquisition; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterResource_acquisition) {
			listener.enterResource_acquisition(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitResource_acquisition) {
			listener.exitResource_acquisition(this);
		}
	}
}


export class Namespace_declarationContext extends ParserRuleContext {
	public _qi: Qualified_identifierContext;
	public NAMESPACE(): TerminalNode { return this.getToken(CSharpParser.NAMESPACE, 0); }
	public namespace_body(): Namespace_bodyContext {
		return this.getRuleContext(0, Namespace_bodyContext);
	}
	public qualified_identifier(): Qualified_identifierContext {
		return this.getRuleContext(0, Qualified_identifierContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_namespace_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNamespace_declaration) {
			listener.enterNamespace_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNamespace_declaration) {
			listener.exitNamespace_declaration(this);
		}
	}
}


export class Qualified_identifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.DOT);
		} else {
			return this.getToken(CSharpParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_qualified_identifier; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterQualified_identifier) {
			listener.enterQualified_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitQualified_identifier) {
			listener.exitQualified_identifier(this);
		}
	}
}


export class Namespace_bodyContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public extern_alias_directives(): Extern_alias_directivesContext | undefined {
		return this.tryGetRuleContext(0, Extern_alias_directivesContext);
	}
	public using_directives(): Using_directivesContext | undefined {
		return this.tryGetRuleContext(0, Using_directivesContext);
	}
	public namespace_member_declarations(): Namespace_member_declarationsContext | undefined {
		return this.tryGetRuleContext(0, Namespace_member_declarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_namespace_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNamespace_body) {
			listener.enterNamespace_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNamespace_body) {
			listener.exitNamespace_body(this);
		}
	}
}


export class Extern_alias_directivesContext extends ParserRuleContext {
	public extern_alias_directive(): Extern_alias_directiveContext[];
	public extern_alias_directive(i: number): Extern_alias_directiveContext;
	public extern_alias_directive(i?: number): Extern_alias_directiveContext | Extern_alias_directiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Extern_alias_directiveContext);
		} else {
			return this.getRuleContext(i, Extern_alias_directiveContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_extern_alias_directives; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterExtern_alias_directives) {
			listener.enterExtern_alias_directives(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitExtern_alias_directives) {
			listener.exitExtern_alias_directives(this);
		}
	}
}


export class Extern_alias_directiveContext extends ParserRuleContext {
	public EXTERN(): TerminalNode { return this.getToken(CSharpParser.EXTERN, 0); }
	public ALIAS(): TerminalNode { return this.getToken(CSharpParser.ALIAS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_extern_alias_directive; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterExtern_alias_directive) {
			listener.enterExtern_alias_directive(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitExtern_alias_directive) {
			listener.exitExtern_alias_directive(this);
		}
	}
}


export class Using_directivesContext extends ParserRuleContext {
	public using_directive(): Using_directiveContext[];
	public using_directive(i: number): Using_directiveContext;
	public using_directive(i?: number): Using_directiveContext | Using_directiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Using_directiveContext);
		} else {
			return this.getRuleContext(i, Using_directiveContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_using_directives; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUsing_directives) {
			listener.enterUsing_directives(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUsing_directives) {
			listener.exitUsing_directives(this);
		}
	}
}


export class Using_directiveContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_using_directive; }
	public copyFrom(ctx: Using_directiveContext): void {
		super.copyFrom(ctx);
	}
}
export class UsingAliasDirectiveContext extends Using_directiveContext {
	public USING(): TerminalNode { return this.getToken(CSharpParser.USING, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode { return this.getToken(CSharpParser.ASSIGNMENT, 0); }
	public namespace_or_type_name(): Namespace_or_type_nameContext {
		return this.getRuleContext(0, Namespace_or_type_nameContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(ctx: Using_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUsingAliasDirective) {
			listener.enterUsingAliasDirective(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUsingAliasDirective) {
			listener.exitUsingAliasDirective(this);
		}
	}
}
export class UsingNamespaceDirectiveContext extends Using_directiveContext {
	public USING(): TerminalNode { return this.getToken(CSharpParser.USING, 0); }
	public namespace_or_type_name(): Namespace_or_type_nameContext {
		return this.getRuleContext(0, Namespace_or_type_nameContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(ctx: Using_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUsingNamespaceDirective) {
			listener.enterUsingNamespaceDirective(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUsingNamespaceDirective) {
			listener.exitUsingNamespaceDirective(this);
		}
	}
}
export class UsingStaticDirectiveContext extends Using_directiveContext {
	public USING(): TerminalNode { return this.getToken(CSharpParser.USING, 0); }
	public STATIC(): TerminalNode { return this.getToken(CSharpParser.STATIC, 0); }
	public namespace_or_type_name(): Namespace_or_type_nameContext {
		return this.getRuleContext(0, Namespace_or_type_nameContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(ctx: Using_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUsingStaticDirective) {
			listener.enterUsingStaticDirective(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUsingStaticDirective) {
			listener.exitUsingStaticDirective(this);
		}
	}
}


export class Namespace_member_declarationsContext extends ParserRuleContext {
	public namespace_member_declaration(): Namespace_member_declarationContext[];
	public namespace_member_declaration(i: number): Namespace_member_declarationContext;
	public namespace_member_declaration(i?: number): Namespace_member_declarationContext | Namespace_member_declarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Namespace_member_declarationContext);
		} else {
			return this.getRuleContext(i, Namespace_member_declarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_namespace_member_declarations; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNamespace_member_declarations) {
			listener.enterNamespace_member_declarations(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNamespace_member_declarations) {
			listener.exitNamespace_member_declarations(this);
		}
	}
}


export class Namespace_member_declarationContext extends ParserRuleContext {
	public namespace_declaration(): Namespace_declarationContext | undefined {
		return this.tryGetRuleContext(0, Namespace_declarationContext);
	}
	public type_declaration(): Type_declarationContext | undefined {
		return this.tryGetRuleContext(0, Type_declarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_namespace_member_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNamespace_member_declaration) {
			listener.enterNamespace_member_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNamespace_member_declaration) {
			listener.exitNamespace_member_declaration(this);
		}
	}
}


export class Type_declarationContext extends ParserRuleContext {
	public class_definition(): Class_definitionContext | undefined {
		return this.tryGetRuleContext(0, Class_definitionContext);
	}
	public struct_definition(): Struct_definitionContext | undefined {
		return this.tryGetRuleContext(0, Struct_definitionContext);
	}
	public interface_definition(): Interface_definitionContext | undefined {
		return this.tryGetRuleContext(0, Interface_definitionContext);
	}
	public enum_definition(): Enum_definitionContext | undefined {
		return this.tryGetRuleContext(0, Enum_definitionContext);
	}
	public delegate_definition(): Delegate_definitionContext | undefined {
		return this.tryGetRuleContext(0, Delegate_definitionContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public all_member_modifiers(): All_member_modifiersContext | undefined {
		return this.tryGetRuleContext(0, All_member_modifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_type_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterType_declaration) {
			listener.enterType_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitType_declaration) {
			listener.exitType_declaration(this);
		}
	}
}


export class Qualified_alias_memberContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOUBLE_COLON(): TerminalNode { return this.getToken(CSharpParser.DOUBLE_COLON, 0); }
	public type_argument_list(): Type_argument_listContext | undefined {
		return this.tryGetRuleContext(0, Type_argument_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_qualified_alias_member; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterQualified_alias_member) {
			listener.enterQualified_alias_member(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitQualified_alias_member) {
			listener.exitQualified_alias_member(this);
		}
	}
}


export class Type_parameter_listContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(CSharpParser.LT, 0); }
	public type_parameter(): Type_parameterContext[];
	public type_parameter(i: number): Type_parameterContext;
	public type_parameter(i?: number): Type_parameterContext | Type_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_parameterContext);
		} else {
			return this.getRuleContext(i, Type_parameterContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(CSharpParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_type_parameter_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterType_parameter_list) {
			listener.enterType_parameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitType_parameter_list) {
			listener.exitType_parameter_list(this);
		}
	}
}


export class Type_parameterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_type_parameter; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterType_parameter) {
			listener.enterType_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitType_parameter) {
			listener.exitType_parameter(this);
		}
	}
}


export class Class_baseContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public class_type(): Class_typeContext {
		return this.getRuleContext(0, Class_typeContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	public namespace_or_type_name(): Namespace_or_type_nameContext[];
	public namespace_or_type_name(i: number): Namespace_or_type_nameContext;
	public namespace_or_type_name(i?: number): Namespace_or_type_nameContext | Namespace_or_type_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Namespace_or_type_nameContext);
		} else {
			return this.getRuleContext(i, Namespace_or_type_nameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_class_base; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterClass_base) {
			listener.enterClass_base(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitClass_base) {
			listener.exitClass_base(this);
		}
	}
}


export class Interface_type_listContext extends ParserRuleContext {
	public namespace_or_type_name(): Namespace_or_type_nameContext[];
	public namespace_or_type_name(i: number): Namespace_or_type_nameContext;
	public namespace_or_type_name(i?: number): Namespace_or_type_nameContext | Namespace_or_type_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Namespace_or_type_nameContext);
		} else {
			return this.getRuleContext(i, Namespace_or_type_nameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interface_type_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterface_type_list) {
			listener.enterInterface_type_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterface_type_list) {
			listener.exitInterface_type_list(this);
		}
	}
}


export class Type_parameter_constraints_clausesContext extends ParserRuleContext {
	public type_parameter_constraints_clause(): Type_parameter_constraints_clauseContext[];
	public type_parameter_constraints_clause(i: number): Type_parameter_constraints_clauseContext;
	public type_parameter_constraints_clause(i?: number): Type_parameter_constraints_clauseContext | Type_parameter_constraints_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_parameter_constraints_clauseContext);
		} else {
			return this.getRuleContext(i, Type_parameter_constraints_clauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_type_parameter_constraints_clauses; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterType_parameter_constraints_clauses) {
			listener.enterType_parameter_constraints_clauses(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitType_parameter_constraints_clauses) {
			listener.exitType_parameter_constraints_clauses(this);
		}
	}
}


export class Type_parameter_constraints_clauseContext extends ParserRuleContext {
	public WHERE(): TerminalNode { return this.getToken(CSharpParser.WHERE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public type_parameter_constraints(): Type_parameter_constraintsContext {
		return this.getRuleContext(0, Type_parameter_constraintsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_type_parameter_constraints_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterType_parameter_constraints_clause) {
			listener.enterType_parameter_constraints_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitType_parameter_constraints_clause) {
			listener.exitType_parameter_constraints_clause(this);
		}
	}
}


export class Type_parameter_constraintsContext extends ParserRuleContext {
	public constructor_constraint(): Constructor_constraintContext | undefined {
		return this.tryGetRuleContext(0, Constructor_constraintContext);
	}
	public primary_constraint(): Primary_constraintContext | undefined {
		return this.tryGetRuleContext(0, Primary_constraintContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	public secondary_constraints(): Secondary_constraintsContext | undefined {
		return this.tryGetRuleContext(0, Secondary_constraintsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_type_parameter_constraints; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterType_parameter_constraints) {
			listener.enterType_parameter_constraints(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitType_parameter_constraints) {
			listener.exitType_parameter_constraints(this);
		}
	}
}


export class Primary_constraintContext extends ParserRuleContext {
	public class_type(): Class_typeContext | undefined {
		return this.tryGetRuleContext(0, Class_typeContext);
	}
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLASS, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STRUCT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_primary_constraint; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterPrimary_constraint) {
			listener.enterPrimary_constraint(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitPrimary_constraint) {
			listener.exitPrimary_constraint(this);
		}
	}
}


export class Secondary_constraintsContext extends ParserRuleContext {
	public namespace_or_type_name(): Namespace_or_type_nameContext[];
	public namespace_or_type_name(i: number): Namespace_or_type_nameContext;
	public namespace_or_type_name(i?: number): Namespace_or_type_nameContext | Namespace_or_type_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Namespace_or_type_nameContext);
		} else {
			return this.getRuleContext(i, Namespace_or_type_nameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_secondary_constraints; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSecondary_constraints) {
			listener.enterSecondary_constraints(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSecondary_constraints) {
			listener.exitSecondary_constraints(this);
		}
	}
}


export class Constructor_constraintContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(CSharpParser.NEW, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_constructor_constraint; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConstructor_constraint) {
			listener.enterConstructor_constraint(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConstructor_constraint) {
			listener.exitConstructor_constraint(this);
		}
	}
}


export class Class_bodyContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public class_member_declarations(): Class_member_declarationsContext | undefined {
		return this.tryGetRuleContext(0, Class_member_declarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_class_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterClass_body) {
			listener.enterClass_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitClass_body) {
			listener.exitClass_body(this);
		}
	}
}


export class Class_member_declarationsContext extends ParserRuleContext {
	public class_member_declaration(): Class_member_declarationContext[];
	public class_member_declaration(i: number): Class_member_declarationContext;
	public class_member_declaration(i?: number): Class_member_declarationContext | Class_member_declarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Class_member_declarationContext);
		} else {
			return this.getRuleContext(i, Class_member_declarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_class_member_declarations; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterClass_member_declarations) {
			listener.enterClass_member_declarations(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitClass_member_declarations) {
			listener.exitClass_member_declarations(this);
		}
	}
}


export class Class_member_declarationContext extends ParserRuleContext {
	public common_member_declaration(): Common_member_declarationContext | undefined {
		return this.tryGetRuleContext(0, Common_member_declarationContext);
	}
	public destructor_definition(): Destructor_definitionContext | undefined {
		return this.tryGetRuleContext(0, Destructor_definitionContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public all_member_modifiers(): All_member_modifiersContext | undefined {
		return this.tryGetRuleContext(0, All_member_modifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_class_member_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterClass_member_declaration) {
			listener.enterClass_member_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitClass_member_declaration) {
			listener.exitClass_member_declaration(this);
		}
	}
}


export class All_member_modifiersContext extends ParserRuleContext {
	public all_member_modifier(): All_member_modifierContext[];
	public all_member_modifier(i: number): All_member_modifierContext;
	public all_member_modifier(i?: number): All_member_modifierContext | All_member_modifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(All_member_modifierContext);
		} else {
			return this.getRuleContext(i, All_member_modifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_all_member_modifiers; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAll_member_modifiers) {
			listener.enterAll_member_modifiers(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAll_member_modifiers) {
			listener.exitAll_member_modifiers(this);
		}
	}
}


export class All_member_modifierContext extends ParserRuleContext {
	public NEW(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.NEW, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PROTECTED, 0); }
	public INTERNAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERNAL, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PRIVATE, 0); }
	public READONLY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.READONLY, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOLATILE, 0); }
	public VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VIRTUAL, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEALED, 0); }
	public OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OVERRIDE, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ABSTRACT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STATIC, 0); }
	public UNSAFE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UNSAFE, 0); }
	public EXTERN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.EXTERN, 0); }
	public PARTIAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PARTIAL, 0); }
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_all_member_modifier; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAll_member_modifier) {
			listener.enterAll_member_modifier(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAll_member_modifier) {
			listener.exitAll_member_modifier(this);
		}
	}
}


export class Common_member_declarationContext extends ParserRuleContext {
	public constant_declaration(): Constant_declarationContext | undefined {
		return this.tryGetRuleContext(0, Constant_declarationContext);
	}
	public typed_member_declaration(): Typed_member_declarationContext | undefined {
		return this.tryGetRuleContext(0, Typed_member_declarationContext);
	}
	public event_declaration(): Event_declarationContext | undefined {
		return this.tryGetRuleContext(0, Event_declarationContext);
	}
	public conversion_operator_declarator(): Conversion_operator_declaratorContext | undefined {
		return this.tryGetRuleContext(0, Conversion_operator_declaratorContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public right_arrow(): Right_arrowContext | undefined {
		return this.tryGetRuleContext(0, Right_arrowContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	public constructor_declaration(): Constructor_declarationContext | undefined {
		return this.tryGetRuleContext(0, Constructor_declarationContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOID, 0); }
	public method_declaration(): Method_declarationContext | undefined {
		return this.tryGetRuleContext(0, Method_declarationContext);
	}
	public class_definition(): Class_definitionContext | undefined {
		return this.tryGetRuleContext(0, Class_definitionContext);
	}
	public struct_definition(): Struct_definitionContext | undefined {
		return this.tryGetRuleContext(0, Struct_definitionContext);
	}
	public interface_definition(): Interface_definitionContext | undefined {
		return this.tryGetRuleContext(0, Interface_definitionContext);
	}
	public enum_definition(): Enum_definitionContext | undefined {
		return this.tryGetRuleContext(0, Enum_definitionContext);
	}
	public delegate_definition(): Delegate_definitionContext | undefined {
		return this.tryGetRuleContext(0, Delegate_definitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_common_member_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterCommon_member_declaration) {
			listener.enterCommon_member_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitCommon_member_declaration) {
			listener.exitCommon_member_declaration(this);
		}
	}
}


export class Typed_member_declarationContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public namespace_or_type_name(): Namespace_or_type_nameContext | undefined {
		return this.tryGetRuleContext(0, Namespace_or_type_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOT, 0); }
	public indexer_declaration(): Indexer_declarationContext | undefined {
		return this.tryGetRuleContext(0, Indexer_declarationContext);
	}
	public method_declaration(): Method_declarationContext | undefined {
		return this.tryGetRuleContext(0, Method_declarationContext);
	}
	public property_declaration(): Property_declarationContext | undefined {
		return this.tryGetRuleContext(0, Property_declarationContext);
	}
	public operator_declaration(): Operator_declarationContext | undefined {
		return this.tryGetRuleContext(0, Operator_declarationContext);
	}
	public field_declaration(): Field_declarationContext | undefined {
		return this.tryGetRuleContext(0, Field_declarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_typed_member_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterTyped_member_declaration) {
			listener.enterTyped_member_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitTyped_member_declaration) {
			listener.exitTyped_member_declaration(this);
		}
	}
}


export class Constant_declaratorsContext extends ParserRuleContext {
	public constant_declarator(): Constant_declaratorContext[];
	public constant_declarator(i: number): Constant_declaratorContext;
	public constant_declarator(i?: number): Constant_declaratorContext | Constant_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Constant_declaratorContext);
		} else {
			return this.getRuleContext(i, Constant_declaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_constant_declarators; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConstant_declarators) {
			listener.enterConstant_declarators(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConstant_declarators) {
			listener.exitConstant_declarators(this);
		}
	}
}


export class Constant_declaratorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode { return this.getToken(CSharpParser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_constant_declarator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConstant_declarator) {
			listener.enterConstant_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConstant_declarator) {
			listener.exitConstant_declarator(this);
		}
	}
}


export class Variable_declaratorsContext extends ParserRuleContext {
	public variable_declarator(): Variable_declaratorContext[];
	public variable_declarator(i: number): Variable_declaratorContext;
	public variable_declarator(i?: number): Variable_declaratorContext | Variable_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Variable_declaratorContext);
		} else {
			return this.getRuleContext(i, Variable_declaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_variable_declarators; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterVariable_declarators) {
			listener.enterVariable_declarators(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitVariable_declarators) {
			listener.exitVariable_declarators(this);
		}
	}
}


export class Variable_declaratorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASSIGNMENT, 0); }
	public variable_initializer(): Variable_initializerContext | undefined {
		return this.tryGetRuleContext(0, Variable_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_variable_declarator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterVariable_declarator) {
			listener.enterVariable_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitVariable_declarator) {
			listener.exitVariable_declarator(this);
		}
	}
}


export class Variable_initializerContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public array_initializer(): Array_initializerContext | undefined {
		return this.tryGetRuleContext(0, Array_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_variable_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterVariable_initializer) {
			listener.enterVariable_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitVariable_initializer) {
			listener.exitVariable_initializer(this);
		}
	}
}


export class Return_typeContext extends ParserRuleContext {
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_return_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterReturn_type) {
			listener.enterReturn_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitReturn_type) {
			listener.exitReturn_type(this);
		}
	}
}


export class Member_nameContext extends ParserRuleContext {
	public namespace_or_type_name(): Namespace_or_type_nameContext {
		return this.getRuleContext(0, Namespace_or_type_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_member_name; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMember_name) {
			listener.enterMember_name(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMember_name) {
			listener.exitMember_name(this);
		}
	}
}


export class Method_bodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_method_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMethod_body) {
			listener.enterMethod_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMethod_body) {
			listener.exitMethod_body(this);
		}
	}
}


export class Formal_parameter_listContext extends ParserRuleContext {
	public parameter_array(): Parameter_arrayContext | undefined {
		return this.tryGetRuleContext(0, Parameter_arrayContext);
	}
	public fixed_parameters(): Fixed_parametersContext | undefined {
		return this.tryGetRuleContext(0, Fixed_parametersContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_formal_parameter_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFormal_parameter_list) {
			listener.enterFormal_parameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFormal_parameter_list) {
			listener.exitFormal_parameter_list(this);
		}
	}
}


export class Fixed_parametersContext extends ParserRuleContext {
	public fixed_parameter(): Fixed_parameterContext[];
	public fixed_parameter(i: number): Fixed_parameterContext;
	public fixed_parameter(i?: number): Fixed_parameterContext | Fixed_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fixed_parameterContext);
		} else {
			return this.getRuleContext(i, Fixed_parameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_fixed_parameters; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFixed_parameters) {
			listener.enterFixed_parameters(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFixed_parameters) {
			listener.exitFixed_parameters(this);
		}
	}
}


export class Fixed_parameterContext extends ParserRuleContext {
	public arg_declaration(): Arg_declarationContext | undefined {
		return this.tryGetRuleContext(0, Arg_declarationContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public parameter_modifier(): Parameter_modifierContext | undefined {
		return this.tryGetRuleContext(0, Parameter_modifierContext);
	}
	public ARGLIST(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ARGLIST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_fixed_parameter; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFixed_parameter) {
			listener.enterFixed_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFixed_parameter) {
			listener.exitFixed_parameter(this);
		}
	}
}


export class Parameter_modifierContext extends ParserRuleContext {
	public REF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REF, 0); }
	public OUT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OUT, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.THIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_parameter_modifier; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterParameter_modifier) {
			listener.enterParameter_modifier(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitParameter_modifier) {
			listener.exitParameter_modifier(this);
		}
	}
}


export class Parameter_arrayContext extends ParserRuleContext {
	public PARAMS(): TerminalNode { return this.getToken(CSharpParser.PARAMS, 0); }
	public array_type(): Array_typeContext {
		return this.getRuleContext(0, Array_typeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_parameter_array; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterParameter_array) {
			listener.enterParameter_array(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitParameter_array) {
			listener.exitParameter_array(this);
		}
	}
}


export class Accessor_declarationsContext extends ParserRuleContext {
	public _attrs: AttributesContext;
	public _mods: Accessor_modifierContext;
	public GET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.GET, 0); }
	public accessor_body(): Accessor_bodyContext | undefined {
		return this.tryGetRuleContext(0, Accessor_bodyContext);
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SET, 0); }
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public accessor_modifier(): Accessor_modifierContext | undefined {
		return this.tryGetRuleContext(0, Accessor_modifierContext);
	}
	public set_accessor_declaration(): Set_accessor_declarationContext | undefined {
		return this.tryGetRuleContext(0, Set_accessor_declarationContext);
	}
	public get_accessor_declaration(): Get_accessor_declarationContext | undefined {
		return this.tryGetRuleContext(0, Get_accessor_declarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_accessor_declarations; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAccessor_declarations) {
			listener.enterAccessor_declarations(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAccessor_declarations) {
			listener.exitAccessor_declarations(this);
		}
	}
}


export class Get_accessor_declarationContext extends ParserRuleContext {
	public GET(): TerminalNode { return this.getToken(CSharpParser.GET, 0); }
	public accessor_body(): Accessor_bodyContext {
		return this.getRuleContext(0, Accessor_bodyContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public accessor_modifier(): Accessor_modifierContext | undefined {
		return this.tryGetRuleContext(0, Accessor_modifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_get_accessor_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterGet_accessor_declaration) {
			listener.enterGet_accessor_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitGet_accessor_declaration) {
			listener.exitGet_accessor_declaration(this);
		}
	}
}


export class Set_accessor_declarationContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(CSharpParser.SET, 0); }
	public accessor_body(): Accessor_bodyContext {
		return this.getRuleContext(0, Accessor_bodyContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public accessor_modifier(): Accessor_modifierContext | undefined {
		return this.tryGetRuleContext(0, Accessor_modifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_set_accessor_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSet_accessor_declaration) {
			listener.enterSet_accessor_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSet_accessor_declaration) {
			listener.exitSet_accessor_declaration(this);
		}
	}
}


export class Accessor_modifierContext extends ParserRuleContext {
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PROTECTED, 0); }
	public INTERNAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERNAL, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PRIVATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_accessor_modifier; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAccessor_modifier) {
			listener.enterAccessor_modifier(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAccessor_modifier) {
			listener.exitAccessor_modifier(this);
		}
	}
}


export class Accessor_bodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_accessor_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAccessor_body) {
			listener.enterAccessor_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAccessor_body) {
			listener.exitAccessor_body(this);
		}
	}
}


export class Event_accessor_declarationsContext extends ParserRuleContext {
	public ADD(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ADD, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public remove_accessor_declaration(): Remove_accessor_declarationContext | undefined {
		return this.tryGetRuleContext(0, Remove_accessor_declarationContext);
	}
	public REMOVE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REMOVE, 0); }
	public add_accessor_declaration(): Add_accessor_declarationContext | undefined {
		return this.tryGetRuleContext(0, Add_accessor_declarationContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_event_accessor_declarations; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEvent_accessor_declarations) {
			listener.enterEvent_accessor_declarations(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEvent_accessor_declarations) {
			listener.exitEvent_accessor_declarations(this);
		}
	}
}


export class Add_accessor_declarationContext extends ParserRuleContext {
	public ADD(): TerminalNode { return this.getToken(CSharpParser.ADD, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_add_accessor_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAdd_accessor_declaration) {
			listener.enterAdd_accessor_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAdd_accessor_declaration) {
			listener.exitAdd_accessor_declaration(this);
		}
	}
}


export class Remove_accessor_declarationContext extends ParserRuleContext {
	public REMOVE(): TerminalNode { return this.getToken(CSharpParser.REMOVE, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_remove_accessor_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterRemove_accessor_declaration) {
			listener.enterRemove_accessor_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitRemove_accessor_declaration) {
			listener.exitRemove_accessor_declaration(this);
		}
	}
}


export class Overloadable_operatorContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.MINUS, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BANG, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.TILDE, 0); }
	public OP_INC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_INC, 0); }
	public OP_DEC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_DEC, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FALSE, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STAR, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DIV, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PERCENT, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.AMP, 0); }
	public BITWISE_OR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BITWISE_OR, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CARET, 0); }
	public OP_LEFT_SHIFT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_LEFT_SHIFT, 0); }
	public right_shift(): Right_shiftContext | undefined {
		return this.tryGetRuleContext(0, Right_shiftContext);
	}
	public OP_EQ(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_EQ, 0); }
	public OP_NE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_NE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.LT, 0); }
	public OP_GE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_GE, 0); }
	public OP_LE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_LE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_overloadable_operator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterOverloadable_operator) {
			listener.enterOverloadable_operator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitOverloadable_operator) {
			listener.exitOverloadable_operator(this);
		}
	}
}


export class Conversion_operator_declaratorContext extends ParserRuleContext {
	public OPERATOR(): TerminalNode { return this.getToken(CSharpParser.OPERATOR, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public arg_declaration(): Arg_declarationContext {
		return this.getRuleContext(0, Arg_declarationContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public IMPLICIT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IMPLICIT, 0); }
	public EXPLICIT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.EXPLICIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_conversion_operator_declarator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConversion_operator_declarator) {
			listener.enterConversion_operator_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConversion_operator_declarator) {
			listener.exitConversion_operator_declarator(this);
		}
	}
}


export class Constructor_initializerContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public BASE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BASE, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.THIS, 0); }
	public argument_list(): Argument_listContext | undefined {
		return this.tryGetRuleContext(0, Argument_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_constructor_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConstructor_initializer) {
			listener.enterConstructor_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConstructor_initializer) {
			listener.exitConstructor_initializer(this);
		}
	}
}


export class BodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterBody) {
			listener.enterBody(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitBody) {
			listener.exitBody(this);
		}
	}
}


export class Struct_interfacesContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public interface_type_list(): Interface_type_listContext {
		return this.getRuleContext(0, Interface_type_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_struct_interfaces; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterStruct_interfaces) {
			listener.enterStruct_interfaces(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitStruct_interfaces) {
			listener.exitStruct_interfaces(this);
		}
	}
}


export class Struct_bodyContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public struct_member_declaration(): Struct_member_declarationContext[];
	public struct_member_declaration(i: number): Struct_member_declarationContext;
	public struct_member_declaration(i?: number): Struct_member_declarationContext | Struct_member_declarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Struct_member_declarationContext);
		} else {
			return this.getRuleContext(i, Struct_member_declarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_struct_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterStruct_body) {
			listener.enterStruct_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitStruct_body) {
			listener.exitStruct_body(this);
		}
	}
}


export class Struct_member_declarationContext extends ParserRuleContext {
	public common_member_declaration(): Common_member_declarationContext | undefined {
		return this.tryGetRuleContext(0, Common_member_declarationContext);
	}
	public FIXED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FIXED, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public all_member_modifiers(): All_member_modifiersContext | undefined {
		return this.tryGetRuleContext(0, All_member_modifiersContext);
	}
	public fixed_size_buffer_declarator(): Fixed_size_buffer_declaratorContext[];
	public fixed_size_buffer_declarator(i: number): Fixed_size_buffer_declaratorContext;
	public fixed_size_buffer_declarator(i?: number): Fixed_size_buffer_declaratorContext | Fixed_size_buffer_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fixed_size_buffer_declaratorContext);
		} else {
			return this.getRuleContext(i, Fixed_size_buffer_declaratorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_struct_member_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterStruct_member_declaration) {
			listener.enterStruct_member_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitStruct_member_declaration) {
			listener.exitStruct_member_declaration(this);
		}
	}
}


export class Array_typeContext extends ParserRuleContext {
	public base_type(): Base_typeContext {
		return this.getRuleContext(0, Base_typeContext);
	}
	public rank_specifier(): Rank_specifierContext[];
	public rank_specifier(i: number): Rank_specifierContext;
	public rank_specifier(i?: number): Rank_specifierContext | Rank_specifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rank_specifierContext);
		} else {
			return this.getRuleContext(i, Rank_specifierContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.STAR);
		} else {
			return this.getToken(CSharpParser.STAR, i);
		}
	}
	public INTERR(): TerminalNode[];
	public INTERR(i: number): TerminalNode;
	public INTERR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.INTERR);
		} else {
			return this.getToken(CSharpParser.INTERR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_array_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterArray_type) {
			listener.enterArray_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitArray_type) {
			listener.exitArray_type(this);
		}
	}
}


export class Rank_specifierContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_rank_specifier; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterRank_specifier) {
			listener.enterRank_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitRank_specifier) {
			listener.exitRank_specifier(this);
		}
	}
}


export class Array_initializerContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public variable_initializer(): Variable_initializerContext[];
	public variable_initializer(i: number): Variable_initializerContext;
	public variable_initializer(i?: number): Variable_initializerContext | Variable_initializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Variable_initializerContext);
		} else {
			return this.getRuleContext(i, Variable_initializerContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_array_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterArray_initializer) {
			listener.enterArray_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitArray_initializer) {
			listener.exitArray_initializer(this);
		}
	}
}


export class Variant_type_parameter_listContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(CSharpParser.LT, 0); }
	public variant_type_parameter(): Variant_type_parameterContext[];
	public variant_type_parameter(i: number): Variant_type_parameterContext;
	public variant_type_parameter(i?: number): Variant_type_parameterContext | Variant_type_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Variant_type_parameterContext);
		} else {
			return this.getRuleContext(i, Variant_type_parameterContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(CSharpParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_variant_type_parameter_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterVariant_type_parameter_list) {
			listener.enterVariant_type_parameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitVariant_type_parameter_list) {
			listener.exitVariant_type_parameter_list(this);
		}
	}
}


export class Variant_type_parameterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public variance_annotation(): Variance_annotationContext | undefined {
		return this.tryGetRuleContext(0, Variance_annotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_variant_type_parameter; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterVariant_type_parameter) {
			listener.enterVariant_type_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitVariant_type_parameter) {
			listener.exitVariant_type_parameter(this);
		}
	}
}


export class Variance_annotationContext extends ParserRuleContext {
	public IN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IN, 0); }
	public OUT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_variance_annotation; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterVariance_annotation) {
			listener.enterVariance_annotation(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitVariance_annotation) {
			listener.exitVariance_annotation(this);
		}
	}
}


export class Interface_baseContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public interface_type_list(): Interface_type_listContext {
		return this.getRuleContext(0, Interface_type_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interface_base; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterface_base) {
			listener.enterInterface_base(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterface_base) {
			listener.exitInterface_base(this);
		}
	}
}


export class Interface_bodyContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public interface_member_declaration(): Interface_member_declarationContext[];
	public interface_member_declaration(i: number): Interface_member_declarationContext;
	public interface_member_declaration(i?: number): Interface_member_declarationContext | Interface_member_declarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Interface_member_declarationContext);
		} else {
			return this.getRuleContext(i, Interface_member_declarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interface_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterface_body) {
			listener.enterInterface_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterface_body) {
			listener.exitInterface_body(this);
		}
	}
}


export class Interface_member_declarationContext extends ParserRuleContext {
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOID, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public OPEN_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_PARENS, 0); }
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.EVENT, 0); }
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.NEW, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACE, 0); }
	public interface_accessors(): Interface_accessorsContext | undefined {
		return this.tryGetRuleContext(0, Interface_accessorsContext);
	}
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACE, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.THIS, 0); }
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACKET, 0); }
	public formal_parameter_list(): Formal_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Formal_parameter_listContext);
	}
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACKET, 0); }
	public UNSAFE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UNSAFE, 0); }
	public type_parameter_list(): Type_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_listContext);
	}
	public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_constraints_clausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interface_member_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterface_member_declaration) {
			listener.enterInterface_member_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterface_member_declaration) {
			listener.exitInterface_member_declaration(this);
		}
	}
}


export class Interface_accessorsContext extends ParserRuleContext {
	public GET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.GET, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.SEMICOLON);
		} else {
			return this.getToken(CSharpParser.SEMICOLON, i);
		}
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SET, 0); }
	public attributes(): AttributesContext[];
	public attributes(i: number): AttributesContext;
	public attributes(i?: number): AttributesContext | AttributesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributesContext);
		} else {
			return this.getRuleContext(i, AttributesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interface_accessors; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterface_accessors) {
			listener.enterInterface_accessors(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterface_accessors) {
			listener.exitInterface_accessors(this);
		}
	}
}


export class Enum_baseContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_enum_base; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEnum_base) {
			listener.enterEnum_base(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEnum_base) {
			listener.exitEnum_base(this);
		}
	}
}


export class Enum_bodyContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public enum_member_declaration(): Enum_member_declarationContext[];
	public enum_member_declaration(i: number): Enum_member_declarationContext;
	public enum_member_declaration(i?: number): Enum_member_declarationContext | Enum_member_declarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Enum_member_declarationContext);
		} else {
			return this.getRuleContext(i, Enum_member_declarationContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_enum_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEnum_body) {
			listener.enterEnum_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEnum_body) {
			listener.exitEnum_body(this);
		}
	}
}


export class Enum_member_declarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_enum_member_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEnum_member_declaration) {
			listener.enterEnum_member_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEnum_member_declaration) {
			listener.exitEnum_member_declaration(this);
		}
	}
}


export class Global_attribute_sectionContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACKET, 0); }
	public global_attribute_target(): Global_attribute_targetContext {
		return this.getRuleContext(0, Global_attribute_targetContext);
	}
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public attribute_list(): Attribute_listContext {
		return this.getRuleContext(0, Attribute_listContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACKET, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_global_attribute_section; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterGlobal_attribute_section) {
			listener.enterGlobal_attribute_section(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitGlobal_attribute_section) {
			listener.exitGlobal_attribute_section(this);
		}
	}
}


export class Global_attribute_targetContext extends ParserRuleContext {
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_global_attribute_target; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterGlobal_attribute_target) {
			listener.enterGlobal_attribute_target(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitGlobal_attribute_target) {
			listener.exitGlobal_attribute_target(this);
		}
	}
}


export class AttributesContext extends ParserRuleContext {
	public attribute_section(): Attribute_sectionContext[];
	public attribute_section(i: number): Attribute_sectionContext;
	public attribute_section(i?: number): Attribute_sectionContext | Attribute_sectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Attribute_sectionContext);
		} else {
			return this.getRuleContext(i, Attribute_sectionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_attributes; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAttributes) {
			listener.enterAttributes(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAttributes) {
			listener.exitAttributes(this);
		}
	}
}


export class Attribute_sectionContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACKET, 0); }
	public attribute_list(): Attribute_listContext {
		return this.getRuleContext(0, Attribute_listContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACKET, 0); }
	public attribute_target(): Attribute_targetContext | undefined {
		return this.tryGetRuleContext(0, Attribute_targetContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COLON, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_attribute_section; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAttribute_section) {
			listener.enterAttribute_section(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAttribute_section) {
			listener.exitAttribute_section(this);
		}
	}
}


export class Attribute_targetContext extends ParserRuleContext {
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_attribute_target; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAttribute_target) {
			listener.enterAttribute_target(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAttribute_target) {
			listener.exitAttribute_target(this);
		}
	}
}


export class Attribute_listContext extends ParserRuleContext {
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_attribute_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAttribute_list) {
			listener.enterAttribute_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAttribute_list) {
			listener.exitAttribute_list(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public namespace_or_type_name(): Namespace_or_type_nameContext {
		return this.getRuleContext(0, Namespace_or_type_nameContext);
	}
	public OPEN_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_PARENS, 0); }
	public attribute_argument(): Attribute_argumentContext[];
	public attribute_argument(i: number): Attribute_argumentContext;
	public attribute_argument(i?: number): Attribute_argumentContext | Attribute_argumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Attribute_argumentContext);
		} else {
			return this.getRuleContext(i, Attribute_argumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_attribute; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
}


export class Attribute_argumentContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_attribute_argument; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAttribute_argument) {
			listener.enterAttribute_argument(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAttribute_argument) {
			listener.exitAttribute_argument(this);
		}
	}
}


export class Pointer_typeContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(CSharpParser.STAR, 0); }
	public simple_type(): Simple_typeContext | undefined {
		return this.tryGetRuleContext(0, Simple_typeContext);
	}
	public class_type(): Class_typeContext | undefined {
		return this.tryGetRuleContext(0, Class_typeContext);
	}
	public rank_specifier(): Rank_specifierContext[];
	public rank_specifier(i: number): Rank_specifierContext;
	public rank_specifier(i?: number): Rank_specifierContext | Rank_specifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rank_specifierContext);
		} else {
			return this.getRuleContext(i, Rank_specifierContext);
		}
	}
	public INTERR(): TerminalNode[];
	public INTERR(i: number): TerminalNode;
	public INTERR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.INTERR);
		} else {
			return this.getToken(CSharpParser.INTERR, i);
		}
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_pointer_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterPointer_type) {
			listener.enterPointer_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitPointer_type) {
			listener.exitPointer_type(this);
		}
	}
}


export class Fixed_pointer_declaratorsContext extends ParserRuleContext {
	public fixed_pointer_declarator(): Fixed_pointer_declaratorContext[];
	public fixed_pointer_declarator(i: number): Fixed_pointer_declaratorContext;
	public fixed_pointer_declarator(i?: number): Fixed_pointer_declaratorContext | Fixed_pointer_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fixed_pointer_declaratorContext);
		} else {
			return this.getRuleContext(i, Fixed_pointer_declaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_fixed_pointer_declarators; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFixed_pointer_declarators) {
			listener.enterFixed_pointer_declarators(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFixed_pointer_declarators) {
			listener.exitFixed_pointer_declarators(this);
		}
	}
}


export class Fixed_pointer_declaratorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode { return this.getToken(CSharpParser.ASSIGNMENT, 0); }
	public fixed_pointer_initializer(): Fixed_pointer_initializerContext {
		return this.getRuleContext(0, Fixed_pointer_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_fixed_pointer_declarator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFixed_pointer_declarator) {
			listener.enterFixed_pointer_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFixed_pointer_declarator) {
			listener.exitFixed_pointer_declarator(this);
		}
	}
}


export class Fixed_pointer_initializerContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public AMP(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.AMP, 0); }
	public local_variable_initializer_unsafe(): Local_variable_initializer_unsafeContext | undefined {
		return this.tryGetRuleContext(0, Local_variable_initializer_unsafeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_fixed_pointer_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFixed_pointer_initializer) {
			listener.enterFixed_pointer_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFixed_pointer_initializer) {
			listener.exitFixed_pointer_initializer(this);
		}
	}
}


export class Fixed_size_buffer_declaratorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OPEN_BRACKET(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_fixed_size_buffer_declarator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFixed_size_buffer_declarator) {
			listener.enterFixed_size_buffer_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFixed_size_buffer_declarator) {
			listener.exitFixed_size_buffer_declarator(this);
		}
	}
}


export class Local_variable_initializer_unsafeContext extends ParserRuleContext {
	public STACKALLOC(): TerminalNode { return this.getToken(CSharpParser.STACKALLOC, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public OPEN_BRACKET(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_local_variable_initializer_unsafe; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLocal_variable_initializer_unsafe) {
			listener.enterLocal_variable_initializer_unsafe(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLocal_variable_initializer_unsafe) {
			listener.exitLocal_variable_initializer_unsafe(this);
		}
	}
}


export class Right_arrowContext extends ParserRuleContext {
	public _first: Token;
	public _second: Token;
	public ASSIGNMENT(): TerminalNode { return this.getToken(CSharpParser.ASSIGNMENT, 0); }
	public GT(): TerminalNode { return this.getToken(CSharpParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_right_arrow; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterRight_arrow) {
			listener.enterRight_arrow(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitRight_arrow) {
			listener.exitRight_arrow(this);
		}
	}
}


export class Right_shiftContext extends ParserRuleContext {
	public _first: Token;
	public _second: Token;
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.GT);
		} else {
			return this.getToken(CSharpParser.GT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_right_shift; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterRight_shift) {
			listener.enterRight_shift(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitRight_shift) {
			listener.exitRight_shift(this);
		}
	}
}


export class Right_shift_assignmentContext extends ParserRuleContext {
	public _first: Token;
	public _second: Token;
	public GT(): TerminalNode { return this.getToken(CSharpParser.GT, 0); }
	public OP_GE(): TerminalNode { return this.getToken(CSharpParser.OP_GE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_right_shift_assignment; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterRight_shift_assignment) {
			listener.enterRight_shift_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitRight_shift_assignment) {
			listener.exitRight_shift_assignment(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public boolean_literal(): Boolean_literalContext | undefined {
		return this.tryGetRuleContext(0, Boolean_literalContext);
	}
	public string_literal(): String_literalContext | undefined {
		return this.tryGetRuleContext(0, String_literalContext);
	}
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTEGER_LITERAL, 0); }
	public HEX_INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.HEX_INTEGER_LITERAL, 0); }
	public REAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REAL_LITERAL, 0); }
	public CHARACTER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CHARACTER_LITERAL, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_literal; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class Boolean_literalContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_boolean_literal; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterBoolean_literal) {
			listener.enterBoolean_literal(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitBoolean_literal) {
			listener.exitBoolean_literal(this);
		}
	}
}


export class String_literalContext extends ParserRuleContext {
	public interpolated_regular_string(): Interpolated_regular_stringContext | undefined {
		return this.tryGetRuleContext(0, Interpolated_regular_stringContext);
	}
	public interpolated_verbatium_string(): Interpolated_verbatium_stringContext | undefined {
		return this.tryGetRuleContext(0, Interpolated_verbatium_stringContext);
	}
	public REGULAR_STRING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REGULAR_STRING, 0); }
	public VERBATIUM_STRING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VERBATIUM_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_string_literal; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterString_literal) {
			listener.enterString_literal(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitString_literal) {
			listener.exitString_literal(this);
		}
	}
}


export class Interpolated_regular_stringContext extends ParserRuleContext {
	public INTERPOLATED_REGULAR_STRING_START(): TerminalNode { return this.getToken(CSharpParser.INTERPOLATED_REGULAR_STRING_START, 0); }
	public DOUBLE_QUOTE_INSIDE(): TerminalNode { return this.getToken(CSharpParser.DOUBLE_QUOTE_INSIDE, 0); }
	public interpolated_regular_string_part(): Interpolated_regular_string_partContext[];
	public interpolated_regular_string_part(i: number): Interpolated_regular_string_partContext;
	public interpolated_regular_string_part(i?: number): Interpolated_regular_string_partContext | Interpolated_regular_string_partContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Interpolated_regular_string_partContext);
		} else {
			return this.getRuleContext(i, Interpolated_regular_string_partContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interpolated_regular_string; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterpolated_regular_string) {
			listener.enterInterpolated_regular_string(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterpolated_regular_string) {
			listener.exitInterpolated_regular_string(this);
		}
	}
}


export class Interpolated_verbatium_stringContext extends ParserRuleContext {
	public INTERPOLATED_VERBATIUM_STRING_START(): TerminalNode { return this.getToken(CSharpParser.INTERPOLATED_VERBATIUM_STRING_START, 0); }
	public DOUBLE_QUOTE_INSIDE(): TerminalNode { return this.getToken(CSharpParser.DOUBLE_QUOTE_INSIDE, 0); }
	public interpolated_verbatium_string_part(): Interpolated_verbatium_string_partContext[];
	public interpolated_verbatium_string_part(i: number): Interpolated_verbatium_string_partContext;
	public interpolated_verbatium_string_part(i?: number): Interpolated_verbatium_string_partContext | Interpolated_verbatium_string_partContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Interpolated_verbatium_string_partContext);
		} else {
			return this.getRuleContext(i, Interpolated_verbatium_string_partContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interpolated_verbatium_string; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterpolated_verbatium_string) {
			listener.enterInterpolated_verbatium_string(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterpolated_verbatium_string) {
			listener.exitInterpolated_verbatium_string(this);
		}
	}
}


export class Interpolated_regular_string_partContext extends ParserRuleContext {
	public interpolated_string_expression(): Interpolated_string_expressionContext | undefined {
		return this.tryGetRuleContext(0, Interpolated_string_expressionContext);
	}
	public DOUBLE_CURLY_INSIDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOUBLE_CURLY_INSIDE, 0); }
	public REGULAR_CHAR_INSIDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REGULAR_CHAR_INSIDE, 0); }
	public REGULAR_STRING_INSIDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REGULAR_STRING_INSIDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interpolated_regular_string_part; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterpolated_regular_string_part) {
			listener.enterInterpolated_regular_string_part(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterpolated_regular_string_part) {
			listener.exitInterpolated_regular_string_part(this);
		}
	}
}


export class Interpolated_verbatium_string_partContext extends ParserRuleContext {
	public interpolated_string_expression(): Interpolated_string_expressionContext | undefined {
		return this.tryGetRuleContext(0, Interpolated_string_expressionContext);
	}
	public DOUBLE_CURLY_INSIDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOUBLE_CURLY_INSIDE, 0); }
	public VERBATIUM_DOUBLE_QUOTE_INSIDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VERBATIUM_DOUBLE_QUOTE_INSIDE, 0); }
	public VERBATIUM_INSIDE_STRING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VERBATIUM_INSIDE_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interpolated_verbatium_string_part; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterpolated_verbatium_string_part) {
			listener.enterInterpolated_verbatium_string_part(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterpolated_verbatium_string_part) {
			listener.exitInterpolated_verbatium_string_part(this);
		}
	}
}


export class Interpolated_string_expressionContext extends ParserRuleContext {
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
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COLON, 0); }
	public FORMAT_STRING(): TerminalNode[];
	public FORMAT_STRING(i: number): TerminalNode;
	public FORMAT_STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.FORMAT_STRING);
		} else {
			return this.getToken(CSharpParser.FORMAT_STRING, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interpolated_string_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterpolated_string_expression) {
			listener.enterInterpolated_string_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterpolated_string_expression) {
			listener.exitInterpolated_string_expression(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ABSTRACT, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.AS, 0); }
	public BASE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BASE, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BOOL, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BREAK, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BYTE, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CASE, 0); }
	public CATCH(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CATCH, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CHAR, 0); }
	public CHECKED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CHECKED, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLASS, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CONST, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CONTINUE, 0); }
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DECIMAL, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DEFAULT, 0); }
	public DELEGATE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DELEGATE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DO, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOUBLE, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ELSE, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ENUM, 0); }
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.EVENT, 0); }
	public EXPLICIT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.EXPLICIT, 0); }
	public EXTERN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.EXTERN, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FALSE, 0); }
	public FINALLY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FINALLY, 0); }
	public FIXED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FIXED, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FLOAT, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FOR, 0); }
	public FOREACH(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FOREACH, 0); }
	public GOTO(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.GOTO, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IF, 0); }
	public IMPLICIT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IMPLICIT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IN, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INT, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERFACE, 0); }
	public INTERNAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERNAL, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IS, 0); }
	public LOCK(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.LOCK, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.LONG, 0); }
	public NAMESPACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.NAMESPACE, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.NEW, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.NULL, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OBJECT, 0); }
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPERATOR, 0); }
	public OUT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OUT, 0); }
	public OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OVERRIDE, 0); }
	public PARAMS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PARAMS, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PRIVATE, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PROTECTED, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PUBLIC, 0); }
	public READONLY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.READONLY, 0); }
	public REF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REF, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.RETURN, 0); }
	public SBYTE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SBYTE, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEALED, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SHORT, 0); }
	public SIZEOF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SIZEOF, 0); }
	public STACKALLOC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STACKALLOC, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STATIC, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STRING, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STRUCT, 0); }
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SWITCH, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.THIS, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.THROW, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.TRUE, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.TRY, 0); }
	public TYPEOF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.TYPEOF, 0); }
	public UINT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UINT, 0); }
	public ULONG(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ULONG, 0); }
	public UNCHECKED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UNCHECKED, 0); }
	public UNSAFE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UNSAFE, 0); }
	public USHORT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.USHORT, 0); }
	public USING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.USING, 0); }
	public VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VIRTUAL, 0); }
	public VOID(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOID, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOLATILE, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.WHILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_keyword; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
}


export class Class_definitionContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(CSharpParser.CLASS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public class_body(): Class_bodyContext {
		return this.getRuleContext(0, Class_bodyContext);
	}
	public type_parameter_list(): Type_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_listContext);
	}
	public class_base(): Class_baseContext | undefined {
		return this.tryGetRuleContext(0, Class_baseContext);
	}
	public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_constraints_clausesContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_class_definition; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterClass_definition) {
			listener.enterClass_definition(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitClass_definition) {
			listener.exitClass_definition(this);
		}
	}
}


export class Struct_definitionContext extends ParserRuleContext {
	public STRUCT(): TerminalNode { return this.getToken(CSharpParser.STRUCT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public struct_body(): Struct_bodyContext {
		return this.getRuleContext(0, Struct_bodyContext);
	}
	public type_parameter_list(): Type_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_listContext);
	}
	public struct_interfaces(): Struct_interfacesContext | undefined {
		return this.tryGetRuleContext(0, Struct_interfacesContext);
	}
	public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_constraints_clausesContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_struct_definition; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterStruct_definition) {
			listener.enterStruct_definition(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitStruct_definition) {
			listener.exitStruct_definition(this);
		}
	}
}


export class Interface_definitionContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(CSharpParser.INTERFACE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public interface_body(): Interface_bodyContext {
		return this.getRuleContext(0, Interface_bodyContext);
	}
	public variant_type_parameter_list(): Variant_type_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Variant_type_parameter_listContext);
	}
	public interface_base(): Interface_baseContext | undefined {
		return this.tryGetRuleContext(0, Interface_baseContext);
	}
	public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_constraints_clausesContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interface_definition; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterface_definition) {
			listener.enterInterface_definition(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterface_definition) {
			listener.exitInterface_definition(this);
		}
	}
}


export class Enum_definitionContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(CSharpParser.ENUM, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public enum_body(): Enum_bodyContext {
		return this.getRuleContext(0, Enum_bodyContext);
	}
	public enum_base(): Enum_baseContext | undefined {
		return this.tryGetRuleContext(0, Enum_baseContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_enum_definition; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEnum_definition) {
			listener.enterEnum_definition(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEnum_definition) {
			listener.exitEnum_definition(this);
		}
	}
}


export class Delegate_definitionContext extends ParserRuleContext {
	public DELEGATE(): TerminalNode { return this.getToken(CSharpParser.DELEGATE, 0); }
	public return_type(): Return_typeContext {
		return this.getRuleContext(0, Return_typeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	public variant_type_parameter_list(): Variant_type_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Variant_type_parameter_listContext);
	}
	public formal_parameter_list(): Formal_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Formal_parameter_listContext);
	}
	public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_constraints_clausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_delegate_definition; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterDelegate_definition) {
			listener.enterDelegate_definition(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitDelegate_definition) {
			listener.exitDelegate_definition(this);
		}
	}
}


export class Event_declarationContext extends ParserRuleContext {
	public EVENT(): TerminalNode { return this.getToken(CSharpParser.EVENT, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public variable_declarators(): Variable_declaratorsContext | undefined {
		return this.tryGetRuleContext(0, Variable_declaratorsContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	public member_name(): Member_nameContext | undefined {
		return this.tryGetRuleContext(0, Member_nameContext);
	}
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACE, 0); }
	public event_accessor_declarations(): Event_accessor_declarationsContext | undefined {
		return this.tryGetRuleContext(0, Event_accessor_declarationsContext);
	}
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_event_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEvent_declaration) {
			listener.enterEvent_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEvent_declaration) {
			listener.exitEvent_declaration(this);
		}
	}
}


export class Field_declarationContext extends ParserRuleContext {
	public variable_declarators(): Variable_declaratorsContext {
		return this.getRuleContext(0, Variable_declaratorsContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_field_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterField_declaration) {
			listener.enterField_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitField_declaration) {
			listener.exitField_declaration(this);
		}
	}
}


export class Property_declarationContext extends ParserRuleContext {
	public member_name(): Member_nameContext {
		return this.getRuleContext(0, Member_nameContext);
	}
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACE, 0); }
	public accessor_declarations(): Accessor_declarationsContext | undefined {
		return this.tryGetRuleContext(0, Accessor_declarationsContext);
	}
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACE, 0); }
	public right_arrow(): Right_arrowContext | undefined {
		return this.tryGetRuleContext(0, Right_arrowContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASSIGNMENT, 0); }
	public variable_initializer(): Variable_initializerContext | undefined {
		return this.tryGetRuleContext(0, Variable_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_property_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterProperty_declaration) {
			listener.enterProperty_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitProperty_declaration) {
			listener.exitProperty_declaration(this);
		}
	}
}


export class Constant_declarationContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(CSharpParser.CONST, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public constant_declarators(): Constant_declaratorsContext {
		return this.getRuleContext(0, Constant_declaratorsContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_constant_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConstant_declaration) {
			listener.enterConstant_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConstant_declaration) {
			listener.exitConstant_declaration(this);
		}
	}
}


export class Indexer_declarationContext extends ParserRuleContext {
	public THIS(): TerminalNode { return this.getToken(CSharpParser.THIS, 0); }
	public OPEN_BRACKET(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACKET, 0); }
	public formal_parameter_list(): Formal_parameter_listContext {
		return this.getRuleContext(0, Formal_parameter_listContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACKET, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACE, 0); }
	public accessor_declarations(): Accessor_declarationsContext | undefined {
		return this.tryGetRuleContext(0, Accessor_declarationsContext);
	}
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACE, 0); }
	public right_arrow(): Right_arrowContext | undefined {
		return this.tryGetRuleContext(0, Right_arrowContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_indexer_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterIndexer_declaration) {
			listener.enterIndexer_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitIndexer_declaration) {
			listener.exitIndexer_declaration(this);
		}
	}
}


export class Destructor_definitionContext extends ParserRuleContext {
	public TILDE(): TerminalNode { return this.getToken(CSharpParser.TILDE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_destructor_definition; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterDestructor_definition) {
			listener.enterDestructor_definition(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitDestructor_definition) {
			listener.exitDestructor_definition(this);
		}
	}
}


export class Constructor_declarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public formal_parameter_list(): Formal_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Formal_parameter_listContext);
	}
	public constructor_initializer(): Constructor_initializerContext | undefined {
		return this.tryGetRuleContext(0, Constructor_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_constructor_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConstructor_declaration) {
			listener.enterConstructor_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConstructor_declaration) {
			listener.exitConstructor_declaration(this);
		}
	}
}


export class Method_declarationContext extends ParserRuleContext {
	public method_member_name(): Method_member_nameContext {
		return this.getRuleContext(0, Method_member_nameContext);
	}
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public method_body(): Method_bodyContext | undefined {
		return this.tryGetRuleContext(0, Method_bodyContext);
	}
	public right_arrow(): Right_arrowContext | undefined {
		return this.tryGetRuleContext(0, Right_arrowContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	public type_parameter_list(): Type_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_listContext);
	}
	public formal_parameter_list(): Formal_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Formal_parameter_listContext);
	}
	public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_constraints_clausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_method_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMethod_declaration) {
			listener.enterMethod_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMethod_declaration) {
			listener.exitMethod_declaration(this);
		}
	}
}


export class Method_member_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOUBLE_COLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOUBLE_COLON, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.DOT);
		} else {
			return this.getToken(CSharpParser.DOT, i);
		}
	}
	public type_argument_list(): Type_argument_listContext[];
	public type_argument_list(i: number): Type_argument_listContext;
	public type_argument_list(i?: number): Type_argument_listContext | Type_argument_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_argument_listContext);
		} else {
			return this.getRuleContext(i, Type_argument_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_method_member_name; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMethod_member_name) {
			listener.enterMethod_member_name(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMethod_member_name) {
			listener.exitMethod_member_name(this);
		}
	}
}


export class Operator_declarationContext extends ParserRuleContext {
	public OPERATOR(): TerminalNode { return this.getToken(CSharpParser.OPERATOR, 0); }
	public overloadable_operator(): Overloadable_operatorContext {
		return this.getRuleContext(0, Overloadable_operatorContext);
	}
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public arg_declaration(): Arg_declarationContext[];
	public arg_declaration(i: number): Arg_declarationContext;
	public arg_declaration(i?: number): Arg_declarationContext | Arg_declarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Arg_declarationContext);
		} else {
			return this.getRuleContext(i, Arg_declarationContext);
		}
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public right_arrow(): Right_arrowContext | undefined {
		return this.tryGetRuleContext(0, Right_arrowContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_operator_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterOperator_declaration) {
			listener.enterOperator_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitOperator_declaration) {
			listener.exitOperator_declaration(this);
		}
	}
}


export class Arg_declarationContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_arg_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterArg_declaration) {
			listener.enterArg_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitArg_declaration) {
			listener.exitArg_declaration(this);
		}
	}
}


export class Method_invocationContext extends ParserRuleContext {
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public argument_list(): Argument_listContext | undefined {
		return this.tryGetRuleContext(0, Argument_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_method_invocation; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMethod_invocation) {
			listener.enterMethod_invocation(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMethod_invocation) {
			listener.exitMethod_invocation(this);
		}
	}
}


export class Object_creation_expressionContext extends ParserRuleContext {
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public argument_list(): Argument_listContext | undefined {
		return this.tryGetRuleContext(0, Argument_listContext);
	}
	public object_or_collection_initializer(): Object_or_collection_initializerContext | undefined {
		return this.tryGetRuleContext(0, Object_or_collection_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_object_creation_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterObject_creation_expression) {
			listener.enterObject_creation_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitObject_creation_expression) {
			listener.exitObject_creation_expression(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IDENTIFIER, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ADD, 0); }
	public ALIAS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ALIAS, 0); }
	public ARGLIST(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ARGLIST, 0); }
	public ASCENDING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASCENDING, 0); }
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASYNC, 0); }
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.AWAIT, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BY, 0); }
	public DESCENDING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DESCENDING, 0); }
	public DYNAMIC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DYNAMIC, 0); }
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.EQUALS, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FROM, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.GET, 0); }
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.GROUP, 0); }
	public INTO(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTO, 0); }
	public JOIN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.JOIN, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.LET, 0); }
	public NAMEOF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.NAMEOF, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ON, 0); }
	public ORDERBY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ORDERBY, 0); }
	public PARTIAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PARTIAL, 0); }
	public REMOVE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REMOVE, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SELECT, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SET, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VAR, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.WHEN, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.WHERE, 0); }
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.YIELD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_identifier; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}


