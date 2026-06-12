lexer grammar Q3MapLexer;

// =====================================================================
// 1. NUMERIC PRIMITIVES (Highest Priority to Stop Texture Collisions)
// =====================================================================

NUMBER
    : '-'? [0-9]+ ('.' [0-9]+)?
    ;

// =====================================================================
// 2. STRINGS, MATRICES & TEXTURE FILEPATH ATOMS
// =====================================================================

STRING_LITERAL
    : '"' (~["\\\r\n] | '\\' .)* '"'
    ;

// Explicit asset paths (e.g., textures/base_floor/techfloor2)
// Enforces strict non-space delimiters matching a standard engine line tokenizer
TEXTURE_NAME
    : [-a-zA-Z0-9_./+]+
    ;

// Fallback for entity property keys or map header flags
IDENTIFIER
    : [a-zA-Z_][a-zA-Z0-9_]*
    ;

// =====================================================================
// 3. STRUCTURAL CONTROLS & LAYOUT BOUNDARIES
// =====================================================================

LBRACE : '{' ;
RBRACE : '}' ;
LPAREN : '(' ;
RPAREN : ')' ;

// =====================================================================
// 4. COMMENTS & HIDDEN CHANNEL WHITESPACE
// =====================================================================

COMMENT
    : '//' ~[\r\n]* ([\r\n]+ | EOF) -> channel(HIDDEN)
    ;

LINE_COMMENT_SL
    : '//' ~[\r\n]* ([\r\n]+ | EOF) -> channel(HIDDEN)
    ;

LINE_COMMENT_BS
    : '\\\\' ~[\r\n]* ([\r\n]+ | EOF) -> channel(HIDDEN)
    ;

WS
    : [ \t\r\n]+ -> channel(HIDDEN)
    ;