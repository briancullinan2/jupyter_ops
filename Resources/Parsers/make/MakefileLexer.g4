lexer grammar MakefileLexer;

// ==========================================
// LEXER RULES
// ==========================================

// --- GNU Make Function Keywords ---
FUNC_SUBST      : 'subst' ;
FUNC_PATSUBST   : 'patsubst' ;
FUNC_STRIP      : 'strip' ;
FUNC_FINDSTRING : 'findstring' ;
FUNC_FILTER     : 'filter' ;
FUNC_FILTER_OUT : 'filter-out' ;
FUNC_SORT       : 'sort' ;
FUNC_WORD       : 'word' ;
FUNC_WORDS      : 'words' ;
FUNC_WORDLIST   : 'wordlist' ;
FUNC_FIRSTWORD  : 'firstword' ;
FUNC_LASTWORD   : 'lastword' ;

FUNC_DIR        : 'dir' ;
FUNC_NOTDIR     : 'notdir' ;
FUNC_SUFFIX     : 'suffix' ;
FUNC_BASELINE   : 'basename' ;
FUNC_ADDSUFFIX  : 'addsuffix' ;
FUNC_ADDPREFIX  : 'addprefix' ;
FUNC_JOIN       : 'join' ;
FUNC_WILDCARD   : 'wildcard' ;
FUNC_REALPATH   : 'realpath' ;
FUNC_ABSPATH    : 'abspath' ;

FUNC_ERROR      : 'error' ;
FUNC_WARNING    : 'warning' ;
FUNC_INFO       : 'info' ;

FUNC_SHELL      : 'shell' ;
FUNC_FOREACH    : 'foreach' ;
FUNC_IF         : 'if' ;
FUNC_OR         : 'or' ;
FUNC_AND        : 'and' ;
FUNC_CALL       : 'call' ;
FUNC_EVAL       : 'eval' ;
FUNC_FILE       : 'file' ;
FUNC_VALUE      : 'value' ;
FUNC_ORIGIN     : 'origin' ;
FUNC_FLAVOR     : 'flavor' ;

// --- Directive Keywords (Defined before NAME) ---
DEFINE          : 'define' ;
ENDEF           : 'endef' ;
INCLUDE         : 'include' | '-include' | 'sinclude' ;
IFDEF           : 'ifdef' ;
IFNDEF          : 'ifndef' ;
IFEQ            : 'ifeq' ;
IFNEQ           : 'ifneq' ;
ELSE            : 'else' ;
ENDIF           : 'endif' ;
EXPORT          : 'export' ;
UNEXPORT        : 'unexport' ;
OVERRIDE        : 'override' ;
UNDEFINE        : 'undefine' ;
VPATH           : 'vpath' ;

// --- Operators & Symbols ---
ASSIGN          : '=' | ':=' | '::=' | '?=' | '+=' ;
COLON           : ':' ;
SEMICOLON       : ';' ;
PIPE            : '|' ;
DOLLAR          : '$' ;
LPAREN          : '(' ;
RPAREN          : ')' ;
LBRACE          : '{' ;
RBRACE          : '}' ;
COMMA           : ',' ;
EXCLAMATION     : '!' ;

// Automatic Make Variables ($@, $<, $^, $?, $*, etc.)
SPECIAL_VAR     : [@<^+*?] ;

// Indented Command Lines in Recipes
COMMAND         : '\t' ~[\r\n]* ;

COMMENT         : '#' ~[\r\n]* -> channel(HIDDEN) ;

STRING          : '"' ( '\\\\' | '\\"' | ~["\r\n] )* '"'
                | '\'' ( '\\\\' | '\\\'' | ~['\r\n] )* '\''
                ;

NAME            : [a-zA-Z0-9_.\-/%@<>*\\+!]+ ;

CONTINUATION    : '\\' [ \t]* '\r'? '\n' ;

NEWLINE         : '\r'? '\n' ;

WS              : [ \t]+ -> channel(HIDDEN) ;