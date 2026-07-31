parser grammar MakefileParser;

options {
    tokenVocab = MakefileLexer;
}

// ==========================================
// PARSER RULES
// ==========================================

makefile
    : item* EOF
    ;

item
    : rule_
    | variable_assignment
    | define_directive
    | standalone_function
    | include_directive
    | conditional
    | export_directive
    | override_directive
    | undefine_directive
    | error_directive
    | vpath_directive
    | NEWLINE
    ;

// --- Rules & Targets ---
rule_
    : targets (COLON | double_colon) prerequisites (SEMICOLON recipe_command)? NEWLINE recipe*
    ;

double_colon
    : COLON COLON
    ;

targets
    : target+
    ;

target
    : NAME
    | variable_ref
    | SPECIAL_VAR
    ;

prerequisites
    : normal_prerequisites? (PIPE order_only_prerequisites)?
    ;

normal_prerequisites
    : prerequisite+
    ;

order_only_prerequisites
    : prerequisite+
    ;

prerequisite
    : NAME
    | variable_ref
    | SPECIAL_VAR
    ;

recipe
    : COMMAND NEWLINE
    ;

recipe_command
    : ~(NEWLINE)+
    ;

// --- Variable Assignments & Macro Definitions ---
variable_assignment
    : (EXPORT | OVERRIDE)? (NAME | SPECIAL_VAR) ASSIGN value? (NEWLINE | EOF)
    ;

define_directive
    : DEFINE (NAME | SPECIAL_VAR) ASSIGN? NEWLINE define_body* ENDEF NEWLINE
    ;

define_body
    : ~(ENDEF | EOF)+
    ;

value
    : (NAME | STRING | variable_ref | function_call | WS | ASSIGN | COLON | PIPE | SPECIAL_VAR | EXCLAMATION | COMMA | CONTINUATION)+
    ;

standalone_function
    : function_call NEWLINE
    ;

variable_ref
    : DOLLAR LPAREN (NAME | SPECIAL_VAR) RPAREN
    | DOLLAR LBRACE (NAME | SPECIAL_VAR) RBRACE
    | DOLLAR (NAME | SPECIAL_VAR)
    | DOLLAR DOLLAR
    | function_call
    ;

// --- GNU Make Built-in Functions ---
function_call
    : DOLLAR LPAREN builtin_function function_args? RPAREN
    | DOLLAR LBRACE builtin_function function_args? RBRACE
    ;

builtin_function
    : FUNC_SUBST
    | FUNC_PATSUBST
    | FUNC_STRIP
    | FUNC_FINDSTRING
    | FUNC_FILTER
    | FUNC_FILTER_OUT
    | FUNC_SORT
    | FUNC_WORD
    | FUNC_WORDS
    | FUNC_WORDLIST
    | FUNC_FIRSTWORD
    | FUNC_LASTWORD
    | FUNC_DIR
    | FUNC_NOTDIR
    | FUNC_SUFFIX
    | FUNC_BASELINE
    | FUNC_ADDSUFFIX
    | FUNC_ADDPREFIX
    | FUNC_JOIN
    | FUNC_WILDCARD
    | FUNC_REALPATH
    | FUNC_ABSPATH
    | FUNC_ERROR
    | FUNC_WARNING
    | FUNC_INFO
    | FUNC_SHELL
    | FUNC_FOREACH
    | FUNC_IF
    | FUNC_OR
    | FUNC_AND
    | FUNC_CALL
    | FUNC_EVAL
    | FUNC_FILE
    | FUNC_VALUE
    | FUNC_ORIGIN
    | FUNC_FLAVOR
    ;

function_args
    : arg (COMMA arg)*
    ;

arg
    : (NAME | STRING | variable_ref | function_call | WS | ASSIGN | COLON | PIPE | SPECIAL_VAR | EXCLAMATION | CONTINUATION)+
    ;

// --- Directives & Conditionals ---
include_directive
    : INCLUDE (NAME | variable_ref)+ NEWLINE
    ;

conditional
    : conditional_header item* (conditional_else item*)? conditional_endif
    ;

conditional_header
    : (IFDEF | IFNDEF) (NAME | variable_ref) NEWLINE
    | (IFEQ | IFNEQ) LPAREN value? COMMA value? RPAREN NEWLINE
    | (IFEQ | IFNEQ) WS+ value WS+ value NEWLINE
    ;

conditional_else
    : ELSE NEWLINE
    ;

conditional_endif
    : ENDIF NEWLINE
    ;

export_directive
    : (EXPORT | UNEXPORT) NAME? NEWLINE
    ;

override_directive
    : OVERRIDE variable_assignment
    ;

undefine_directive
    : UNDEFINE NAME NEWLINE
    ;

error_directive
    : (FUNC_ERROR | NAME) ~(NEWLINE)* NEWLINE
    ;

vpath_directive
    : VPATH (NAME NAME?)? NEWLINE
    ;