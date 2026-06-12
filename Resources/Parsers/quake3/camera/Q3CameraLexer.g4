lexer grammar Q3CameraLexer;


// =====================================================================
// BLOCK IDENTIFIERS (Case-insensitive block headers)
// =====================================================================
BLOCK_TYPE
    : [cC][aA][mM][eE][rR][aA][pP][aA][tT][hH][dD][eE][fF]
    | [sS][pP][lL][iI][nN][eE] // Match standalone 'spline' variants if needed
    | [cC][aA][mM][eE][rR][aA] '_' [iI][nN][tT][eE][rR][pP][oO][lL][aA][tT][eE][dD]
    | [cC][aA][mM][eE][rR][aA] '_' [sS][pP][lL][iI][nN][eE]
    | [tT][aA][rR][gG][eE][tT] '_' [iI][nN][tT][eE][rR][pP][oO][lL][aA][tT][eE][dD]
    | [tT][aA][rR][gG][eE][tT] '_' [sS][pP][lL][iI][nN][eE]
    | [tT][aA][rR][gG][eE][tT]
    | [eE][vV][eE][nN][tT]
    | [fF][oO][vV]
    ;

// =====================================================================
// PROPERTY KEYWORDS (Key-value data parameters)
// =====================================================================
PROPERTY_KEYWORD
    : [tT][iI][mM][eE]
    | [nN][aA][mM][eE]
    | [sS][tT][aA][rR][tT][pP][oO][sS]
    | [eE][nN][dD][pP][oO][sS]
    | [gG][rR][aA][nN][uU][lL][aA][rR][iI][tT][yY]
    | [tT][yY][pP][eE]
    | [pP][aA][rR][aA][mM]
    ;

// =====================================================================
// VALUES & LITERAL EXPRESSIONS
// =====================================================================
NUMBER
    : '-'? [0-9]+ ('.' [0-9]+)?
    ;

STRING_LITERAL
    : '"' (~["\\\r\n] | '\\' .)* '"'
    ;

// Fallback plain-text variables (e.g., property parameter values like 'position')
IDENTIFIER
    : [a-zA-Z_][a-zA-Z0-9_]*
    ;

LBRACE : '{' ;
RBRACE : '}' ;
LPAREN : '(' ;
RPAREN : ')' ;

// =====================================================================
// DISCARDED & HIDDEN UTILITIES
// =====================================================================
COMMENT
    : '//' ~[\r\n]* -> channel(HIDDEN)
    ;

BLOCK_COMMENT
    : '/*' .*? '*/' -> channel(HIDDEN)
    ;

WS
    : [ \t\r\n]+ -> skip
    ;