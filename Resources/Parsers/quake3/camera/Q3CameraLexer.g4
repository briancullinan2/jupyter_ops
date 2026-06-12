lexer grammar Q3CameraLexer;

// =====================================================================
// 1. BLOCK IDENTIFIERS (Highest Priority Layout Boundaries)
// =====================================================================
BLOCK_TYPE
    : [cC][aA][mM][eE][rR][aA][pP][aA][tT][hH][dD][eE][fF]
    | [cC][aA][mM][eE][rR][aA] '_' [iI][nN][tT][eE][rR][pP][oO][lL][aA][tT][eE][dD]
    | [cC][aA][mM][eE][rR][aA] '_' [sS][pP][lL][iI][nN][eE]
    | [tT][aA][rR][gG][eE][tT] '_' [iI][nN][tT][eE][rR][pP][oO][lL][aA][tT][eE][dD]
    | [tT][aA][rR][gG][eE][tT] '_' [sS][pP][lL][iI][nN][eE]
    | [sS][pP][lL][iI][nN][eE]
    | [tT][aA][rR][gG][eE][tT]
    | [eE][vV][eE][nN][tT]
    | [fF][oO][vV]
    ;

// =====================================================================
// 2. PROPERTY KEYWORDS (Key-Value Key Definitions)
// =====================================================================
PROPERTY_KEYWORD
    : [sS][tT][aA][rR][tT][pP][oO][sS]
    | [eE][nN][dD][pP][oO][sS]
    | [gG][rR][aA][nN][uU][lL][aA][rR][iI][tT][yY]
    | [tT][iI][mM][eE]
    | [nN][aA][mM][eE]
    | [tT][yY][pP][eE]
    | [pP][aA][rR][aA][mM]
    ;

// =====================================================================
// 3. ATOM VALUES & FALLBACK IDENTIFIERS
// =====================================================================
NUMBER
    : '-'? [0-9]+ ('.' [0-9]+)?
    ;

STRING_LITERAL
    : '"' (~["\\\r\n] | '\\' .)* '"'
    ;

// Positioned below your concrete keyword strings to safely serve as a literal text value catch-all
IDENTIFIER
    : [a-zA-Z_][a-zA-Z0-9_]*
    ;

// =====================================================================
// 4. OPERATORS, STRUCTURAL DELIMITERS & HARD BOUNDARIES
// =====================================================================
LBRACE : '{' ;
RBRACE : '}' ;
LPAREN : '(' ;
RPAREN : ')' ;

// Consumes trailing carriage return elements explicitly to prevent token boundaries from corrupting
COMMENT
    : '//' ~[\r\n]* ([\r\n]+ | EOF) -> channel(HIDDEN)
    ;

BLOCK_COMMENT
    : '/*' .*? '*/' -> channel(HIDDEN)
    ;

WS
    : [ \t\r\n]+ -> channel(HIDDEN)
    ;