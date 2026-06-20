grammar IllustriousSpatial;

// ==========================================
// PARSER RULES
// ==========================================

root
    : (block_sequence | empty_scene)? WS_OR_NL* EOF
    ;

empty_scene
    : '[]'
    ;

block_sequence
    : block (WS_OR_NL+ block)*
    ;

block
    : primitive (anchor? vector)?
    ;

primitive
    : '[' ID ']'
    ;

anchor
    : '[abs]'
    | '[' AT INT (',' WS? AT INT)* ']'
    ;

vector
    : '[' value (',' WS? value)* ']'
    ;

value
    : nested_array
    | parameter_assignment
    | expression
    | attribute
    | signed_num
    | boolean_flag
    | variable
    ;

nested_array
    : '[' value (',' WS? value)* ']'
    ;

parameter_assignment
    : ID '=(' WS? AXIS WS? ',' WS? signed_num WS? ')'
    | ID '(' WS? AXIS WS? ',' WS? NUM WS? ')'
    | ID '(' NUM ')'
    | ID '=' signed_num
    ;

expression
    : term (op term)*
    ;

term
    : variable ('*' (variable | signed_num))?
    | signed_num variable?
    | SIGN? variable
    | 'sym(' WS? expression WS? ')'
    ;

variable
    : VAR_KW
    | AT_IDX
    | AT INT
    ;

boolean_flag
    : BOOL_KW
    ;

attribute
    : ID '=' signed_num
    | ATTR_KW
    ;

signed_num
    : SIGN? POSITIVE_NUM
    | NEGATIVE_NUM
    ;

op
    : '+' | '-' | '*' | '/'
    ;

// ==========================================
// LEXER RULES
// ==========================================

// Keywords and Core Variables
VAR_KW    : 'fw' | 'hw' | 'fd' | 'hd' | 'fh' | 'hh' | 'bd' | 'bh';
BOOL_KW   : 'surf' | '-%';
ATTR_KW   : 'mesh';
AT_IDX    : '@idx';
AXIS      : [xyz];

// Structural Tokens
AT        : '@';
SIGN      : [+-];

// Numerical Tokens
fragment DIGIT : [0-9];
POSITIVE_NUM   : DIGIT+ ('.' DIGIT+)?;
NEGATIVE_NUM   : '-' DIGIT+ ('.' DIGIT+)?;
NUM            : POSITIVE_NUM | NEGATIVE_NUM;

// Identifiers
ID        : [a-zA-Z0-9_-]+;

// Fragmented Int for references
INT       : DIGIT+;

// Whitespace handling
WS        : [ \t]+;
WS_OR_NL  : [ \t\r\n]+;