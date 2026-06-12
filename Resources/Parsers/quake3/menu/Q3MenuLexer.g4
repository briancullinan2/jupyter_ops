lexer grammar Q3MenuLexer;


// =====================================================================
// BLOCK KEYWORDS (Top-Level & Nested Structural wrappers)
// =====================================================================
BLOCK_TYPE
    : [mM][eE][nN][uU][dD][eE][fF]
    | [iI][tT][eE][mM][dD][eE][fF]
    | [aA][sS][sS][eE][tT][gG][lL][oO][bB][aA][lL][dD][eE][fF]
    ;

// =====================================================================
// PROPERTY AND TRIGGER KEYWORDS
// =====================================================================
PROPERTY_KEYWORD
    : [nN][aA][mM][eE]
    | [vV][iI][sS][iI][bB][lL][eE]
    | [fF][uU][lL][lL][sS][cC][rR][eE][eE][nN]
    | [oO][uU][tT][oO][fF][bB][oO][uU][nN][dD][sS][cC][lL][iI][cC][kK]
    | [rR][eE][cC][tT]
    | [fF][oO][cC][uU][sS][cC][oO][lL][oO][rR]
    | [dD][iI][sS][aA][bB][lL][eE][cC][oO][lL][oO][rR]
    | [sS][tT][yY][lL][eE]
    | [bB][oO][rR][dD][eE][rR]
    | [bB][oO][rR][dD][eE][rR][cC][oO][lL][oO][rR]
    | [fF][oO][rR][eE][cC][oO][lL][oO][rR]
    | [bB][aA][cC][kK][sS][cC][oO][lL][oO][rR] // accounts for backcolor properties
    | [bB][aA][cC][kK][cC][oO][lL][oO][rR]
    | [dD][eE][cC][oO][rR][aA][tT][iI][oO][nN]
    | [tT][eE][eE][xX][tT] // accounts for text/textstyle variants
    | [tT][eE][xX][tT]
    | [tT][yY][pP][eE]
    | [bB][aA][cC][kK][gG][rR][oO][uU][nN][dD]
    | [tT][eE][xX][tT][aA][lL][iI][gG][nN]
    | [tT][eE][xX][tT][aA][lL][iI][gG][nN][xX]
    | [tT][eE][xX][tT][aA][lL][iI][gG][nN][yY]
    | [tT][eE][xX][tT][sS][cC][aA][lL][eE]
    | [cC][vV][aA][rR][tT][eE][sS][tT]
    | [dD][iI][sS][aA][bB][lL][eE][cC][vV][aA][rR]
    | [fF][oO][nN][tT]
    | [sS][mM][aA][lL][lL][fF][oO][nN][tT]
    | [bB][iI][gG][fF][oO][nN][tT]
    | [cC][uU][rR][sS][oO][rR]
    | [gG][rR][aA][dD][iI][eE][nN][tT][bB][aA][rR]
    | [iI][tT][eE][mM][fF][oO][cC][uU][sS][sS][oO][uU][nN][dD]
    | [fF][aA][dD][eE][cC][lL][aA][mM][pP]
    | [fF][aA][dD][eE][cC][yY][cC][lL][eE]
    | [fF][aA][dD][eE][aA][mM][oO][uU][nN][tT]
    | [sS][hH][aA][dD][oO][wW][cC][oO][lL][oO][rR]
    | [oO][wW][n2][eE][rR][dD][rR][aA][wW]
    ;

EVENT_KEYWORD
    : [oO][nN][oO][pP][eE][n2]
    | [oO][nN][eE][sS][cC]
    | [oO][nN][cC][lL][oO][sS][eE]
    | [mM][oO][uU][sS][eE][eE][n2][tT][eE][rR]
    | [mM][oO][uU][sS][eE][eE][xX][iI][tT]
    | [aA][cC][tT][iI][oO][n2]
    ;

ACTION_COMMAND
    : [oO][pP][eE][n2]
    | [cC][lL][oO][sS][eE]
    | [sS][eE][tT][iI][tT][eE][mM][cC][oO][lL][oO][rR]
    | [fF][aA][dD][eE][iI][n2]
    | [fF][aA][dD][eE][oO][uU][tT]
    | [sS][eE][tT][cC][vV][aA][rR]
    | [tT][rR][aA][n2][sS][iI][tT][iI][oO][n2]
    | [eE][xX][eE][cC]
    | [uU][iI][sS][cC][rR][iI][pP][tT]
    | [pP][lL][aA][yY]
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

// Preprocessor targets matching lines like: #include "ui/menudef.h"
PREPROCESSOR_DIRECTIVE
    : '#' [ \t]* [a-zA-Z_][a-zA-Z0-9_]*
    ;

// Structural macro hooks, constant variables, or plain fallback identities
IDENTIFIER
    : [a-zA-Z_][a-zA-Z0-9_]*
    ;

// =====================================================================
// STRUCTURAL DELIMITERS
// =====================================================================
LBRACE    : '{' ;
RBRACE    : '}' ;
SEMICOLON : ';' ;

// =====================================================================
// DISCARDED & HIDDEN UTILITIES
// =====================================================================

// Double slash engine layouts and vintage '\\' single line remarks
// Replace your old COMMENT rule block with these distinct definitions:

LINE_COMMENT_SL
    : '//' ~[\r\n]* -> channel(HIDDEN)
    ;

LINE_COMMENT_BS
    : '\\\\' ~[\r\n]* -> channel(HIDDEN)
    ;

BLOCK_COMMENT
    : '/*' .*? '*/' -> channel(HIDDEN)
    ;

WS
    : [ \t\r\n]+ -> skip
    ;