lexer grammar Q3MenuLexer;

// =====================================================================
// 1. BLOCK KEYWORDS (Highest Priority Layout Boundaries)
// =====================================================================

BLOCK_TYPE
    : [mM][eE][nN][uU][dD][eE][fF]
    | [iI][tT][eE][mM][dD][eE][fF]
    | [aA][sS][sS][eE][tT][gG][lL][oO][bB][aA][lL][dD][eE][fF]
    ;

// =====================================================================
// 2. PROPERTY AND CONFIGURATION KEYWORDS (Prefix Length Sorted)
// =====================================================================

PROPERTY_KEYWORD
    : [oU][uT][oO][fF][bB][oO][uU][nN][dD][sS][cC][lL][iI][cC][kK]
    | [hH][oO][rR][iI][zZ][oO][nN][tT][aA][lL][sS][cC][rR][oO][lL][lL]
    | [mM][oO][uU][sS][eE][eE][xX][iI][tT][tT][eE][xX][tT]
    | [mM][oO][uU][sS][eE][eE][nN][tT][eE][rR][tT][eE][xX][tT]
    | [sS][pP][eE][cC][iI][fY][cC][vV][aA][rR][sS][tT][rR]
    | [dD][iI][sS][aA][bB][lL][eE][cC][vV][aA][rR]
    | [dD][iI][sS][aA][bB][lL][eE][cC][oO][lL][oO][rR]
    | [iI][tT][eE][mM][fF][oO][cC][uU][sS][sS][oO][uU][nN][dD]
    | [nN][oO][tT][sS][eE][lL][eE][cC][tT][aA][bB][lL][eE]
    | [mM][aA][xX][pP][aA][iI][nN][tT][cC][hH][aA][rR][sS]
    | [gG][rR][aA][dD][iI][eE][nN][tT][bB][aA][rR]
    | [bB][oO][rR][dD][eE][rR][cC][oO][lL][oO][rR]
    | [fF][oO][cC][uU][sS][cC][oO][lL][oO][rR]
    | [fF][aA][dD][eE][aA][mM][oO][uU][nN][tT]
    | [fF][aA][dD][eE][cC][lL][aA][mM][pP]
    | [fF][aA][dD][eE][cC][yY][cC][lL][eE]
    | [bB][aA][cC][kK][sS][cC][oO][lL][oO][rR]
    | [bB][aA][cC][kK][cC][oO][lL][oO][rR]
    | [sS][hH][aA][dD][oO][wW][cC][oO][lL][oO][rR]
    | [bB][aA][cC][kK][gG][rR][oO][uU][nN][dD]
    | [oO][uU][tT][lL][iI][nN][eE][cC][oO][lL][oO][rR]
    | [aA][sS][sS][eE][tT] '_' [sS][hH][aA][dD][eE][rR]
    | [aA][sS][sS][eE][tT] '_' [mM][oO][dD][eE][lL]
    | [mM][oO][dD][eE][lL] '_' [rR][oO][tT][aA][tT][iI][oO][nN]
    | [mM][oO][dD][eE][lL] '_' [oO][rR][iI][gG][iN][nN]
    | [aA][uU][tT][oO][wW][rR][aA][pP][pP][eE][dD]
    | [eE][lL][eE][mM][eE][nN][tT][hH][eE][iI][gG][hH][tT]
    | [eE][lL][eE][mM][eE][nN][tT][wW][iI][dD][tT][hH]
    | [eE][lL][eE][mM][eE][nN][tT][tT][yY][pP][eE]
    | [cC][vV][aA][rR][fF][lL][oO][aA][tT][lL][iI][sS][tT]
    | [cC][vV][aA][rR][sS][tT][rR][lL][iI][sS][tT]
    | [aA][dD][dD][cC][oO][lL][oO][rR][rR][aA][nN][gG][eE]
    | [oO][wW][nN][eE][rR][dD][rR][aA][wW][fF][lL][aA][gG]
    | [tT][eE][xX][tT][aA][lL][iI][gG][nN][xX]
    | [tT][eE][xX][tT][aA][lL][iI][gG][nN][yY]
    | [tT][eE][xX][tT][aA][lL][iI][gG][nN]
    | [tT][eE][xX][tT][sS][cC][aA][lL][eE]
    | [cC][vV][aA][rR][tT][eE][sS][tT]
    | [cC][vV][aA][rR][fF][lL][oO][aA][tT]
    | [oO][wW][nN][eE][rR][dD][rR][aA][wW]
    | [vV][iI][sS][iI][bB][lL][eE]
    | [fF][uU][lL][lL][sS][cC][rR][eE][eE][nN]
    | [bB][oO][rR][dD][eE][rR][sS][iI][zZ][eE]
    | [bB][oO][rR][dD][eE][rR]
    | [fF][oO][rR][eE][cC][oO][lL][oO][rR]
    | [dD][eE][cC][oO][rR][aA][tT][iI][oO][nN]
    | [sS][mM][aA][lL][lL][fF][oO][nN][tT]
    | [bB][iI][gG][fF][oO][nN][tT]
    | [fF][oO][cC][uU][sS][sS][oO][uU][nN][dD]
    | [mM][oO][uU][sS][eE] '_' [fF][oO][vV][xX]
    | [mM][oO][uU][sS][eE] '_' [fF][oO][vV][yY]
    | [mM][oO][uU][sS][eE] '_' [aA][nN][gG][lL][eE]
    | [wW][rR][aA][pP][pP][eE][dD]
    | [cC][oO][lL][uU][mM][nN][sS]
    | [fF][eE][eE][dD][eE][rR]
    | [mM][aA][xX][cC][hH][aA][rR][sS]
    | [sS][oO][uU][nN][dD][lL][oO][oO][pP]
    | [nN][aA][mM][eE]
    | [rR][eE][cC][tT]
    | [sS][tT][yY][lL][eE]
    | [tT][eE][eE][xX][tT]
    | [tT][eE][xX][tT]
    | [tT][yY][pP][eE]
    | [fF][oO][nN][tT]
    | [cC][uU][rR][sS][oO][rR]
    | [cC][vV][aA][rR]
    | [pP][oO][pP][uU][pP]
    | [fF][aA][dD][eE]
    | [aA][lL][iI][gG][nN]
    ;

EVENT_KEYWORD
    : [oO][nN][oO][pP][eE][nN]
    | [oO][nN][eE][sS][cC]
    | [oO][nN][cC][lL][oO][sS][eE]
    | [mM][oO][uU][sS][eE][eE][nN][tT][eE][rR]
    | [mM][oO][uU][sS][eE][eE][xX][iI][tT]
    | [aA][cC][tT][iI][oO][nN]
    | [oO][nN][fF][oO][cC][uU][sS]
    | [lL][eE][aA][vV][eE][fF][oO][cC][uU][sS]
    ;

ACTION_COMMAND
    : [sS][eE][tT][iI][tT][eE][mM][cC][oO][lL][oO][rR]
    | [tT][rR][aA][nN][sS][iI][tT][iI][oO][nN]
    | [uU][iI][sS][cC][rR][iI][pP][tT]
    | [fF][aA][dD][eE][iI][nN]
    | [fF][aA][dD][eE][oO][uU][tT]
    | [sS][eE][tT][cC][vV][aA][rR]
    | [oO][pP][eE][nN]
    | [cC][lL][oO][sS][eE]
    | [eE][xX][eE][cC]
    | [pP][lL][aA][yY]
    ;

// =====================================================================
// 3. ATOM VALUES, PREPROCESSORS & VARIABLE LITERALS
// =====================================================================

NUMBER
    : '-'? [0-9]+ ('.' [0-9]+)?
    | '-'? '.' [0-9]+
    ;

STRING_LITERAL
    : '"' (~["\\\r\n] | '\\' .)* '"'
    ;

PREPROCESSOR_DIRECTIVE
    : '#' [ \t]* [a-zA-Z_][a-zA-Z0-9_]*
    ;

IDENTIFIER
    : [a-zA-Z_][a-zA-Z0-9_]*
    ;

// =====================================================================
// 4. OPERATORS, STRUCTURAL DELIMITERS & COMMENTS
// =====================================================================

LBRACE    : '{' ;
RBRACE    : '}' ;
COMMA     : ',' ;
SEMICOLON : ';' ;

COMMENT
    : '//' ~[\r\n]* ([\r\n]+ | EOF) -> channel(HIDDEN)
    ;

LINE_COMMENT_SL
    : '//' ~[\r\n]* ([\r\n]+ | EOF) -> channel(HIDDEN)
    ;

LINE_COMMENT_BS
    : '\\\\' ~[\r\n]* ([\r\n]+ | EOF) -> channel(HIDDEN)
    ;

BLOCK_COMMENT
    : '/*' .*? '*/' -> channel(HIDDEN)
    ;

WS
    : [ \t\r\n]+ -> channel(HIDDEN)
    ;