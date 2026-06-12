lexer grammar Q3ConfigLexer;

// =====================================================================
// 1. STRUCTURAL KEYWORDS & OPERATORS (Highest Priority)
// =====================================================================

ASSIGNMENT_KEYWORD
    : [sS][eE][tT][aA]
    | [sS][eE][tT][sS]
    | [sS][eE][tT][uU]
    | [sS][eE][tT][eE][nN][vV]
    | [sS][eE][tT][vV]
    | [sS][eE][tT]
    ;

BIND_KEYWORD
    : [bB][iI][nN][dD]
    ;

SEMICOLON : ';' ;

// =====================================================================
// 2. STANDALONE CONSOLE COMMANDS (Prefix Sorted)
// =====================================================================
COMMAND_KEYWORD
    : [uU][nN][bB][iI][nN][dD][aA][lL][lL]
    | [uU][nN][bB][iI][nN][dD]
    | [vV][iI][dD] '_' [rR][eE][sS][tT][aA][rR][tT]
    | [sS][nN][dD] '_' [rR][eE][sS][tT][aA][rR][tT]
    | [cC][vV][aA][rR] '_' [rR][eE][sS][tT][aA][rR][tT]
    | [iI][nN] '_' [rR][eE][sS][tT][aA][rR][tT]
    | [mM][aA][pP] '_' [rR][eE][sS][tT][aA][rR][tT]
    | [nN][eE][tT] '_' [rR][eE][sS][tT][aA][rR][tT]
    | [cC][aA][lL][lL][tT][eE][aA][mM][vV][oO][tT][eE]
    | [cC][aA][lL][lL][vV][oO][tT][eE]
    | [cC][lL][iI][eE][nN][tT][kK][iI][cC][kK]
    | [cC][vV][aA][rR][lL][iI][sS][tT]
    | [kK][iI][lL][lL][sS][eE][rR][vV][eE][rR]
    | [sS][eE][cC][tT][oO][rR][lL][iI][sS][tT]
    | [sS][eE][rR][vV][eE][rR][iI][nN][fF][oO]
    | [sS][eE][rR][vV][eE][rR][sS][tT][aA][tT][uU][sS]
    | [sS][tT][oO][pP][rR][eE][cC][oO][rR][dD]
    | [sS][tT][oO][pP][dD][eE][mM][oO]
    | [wW][rR][iI][tT][eE][cC][oO][nN][fF][iI][gG]
    | [vV][oO][sS][aA][yY] '_' [tT][eE][aA][mM]
    | [vV][sS][aA][yY] '_' [tT][eE][aA][mM]
    | [sS][aA][yY] '_' [tT][eE][aA][mM]
    | [dD][eE][vV][mM][aA][pP]
    | [dD][iI][sS][cC][oO][nN][nN][eE][cC][tT]
    | [nN][oO][cC][lL][iI][pP]
    | [nN][oO][tT][aA][rR][gG][eE][tT]
    | [rR][eE][cC][oO][nN][nN][eE][cC][tT]
    | [eE][xX][eE][cC]
    | [vV][sS][tT][rR]
    | [eE][cC][hH][oO]
    | [sS][aA][yY]
    | [tT][oO][gG][gG][lL][eE]
    | [eE][rR][rR][oO][rR]
    | [gG][iI][vV][eE]
    | [gG][oO][dD]
    | [hH][eE][aA][rR][tT][bB][eE][aA][tT]
    | [kK][iI][lL][lL]
    | [mM][aA][pP]
    | [pP][iI][nN][gG]
    | [qQ][uU][iI][tT]
    | [rR][cC][oO][nN]
    | [rR][eE][cC][oO][rR][dD]
    | [sS][tT][aA][tT][uU][sS]
    | [vV][oO][sS][aA][yY]
    | [vV][sS][aA][yY]
    | [vV][tT][aA][uU][nN][tT]
    ;

// =====================================================================
// 3. KNOWN ENGINE REGISTERED CVARS
// =====================================================================
KNOWN_CVAR
    : [sS][vV] '_' ([hH][oO][sS][tT][n2][aA][mM][eE]|[mM][aA][xX][cC][lL][iI][eE][n2][tT][sS]|[pP][rR][iI][vV][aA][tT][eE][cC][lL][iI][eE][n2][tT][sS]|[pP][uU][rR][eE]|[mM][aA][xX][rR][aA][tT][eE]|[cC][hH][eE][aA][tT][sS]|[fF][lL][oO][oO][dD][pP][rR][oO][tT][eE][cC][tT]|[fF][pP][sS]|[pP][aA][uU][sS][eE][dD]|[pP][rR][iI][vV][aA][tT][eE][pP][aA][sS][sS][wW][oO][rR][dD]|[tT][iI][mM][eE][oO][uU][tT]|[zZ][oO][mB][iI][eE][tT][iI][mM][eE])
    | [gG] '_' ([mM][oO][tT][dD]|[gG][aA][mM][eE][tT][yY][pP][eE]|[rR][eE][fF][eE][rR][eE][eE]|[rR][eE][fF][n2][oO][bB][aA][n2]|[aA][rR][iI][eE][sS]|[fF][rR][iI][eE][n2][dD][lL][yY] '_' [fF][iI][rR][eE]|[mM][aA][xX][tT][eE][aA][mM][kK][iI][lL][lL][sS]|[tT][eE][aA][mM][kK][iI][lL][lL][sS][fF][oO][rR][gG][iI][vV][eE][tT][iI][mM][eE][rR]|[mM][aA][iI][n2][tT][aA][iI][n2] '_' [tT][eE][aA][mM]|[fF][oO][lL][lL][oO][wW] '_' [eE][n2][eE][mM][yY]|[tT][eE][aA][mM] '_' [fF][oO][rR][cC][eE] '_' [bB][aA][lL][aA][n2][cC][eE]|[sS][uU][rR][vV][iI][vV][oO][rR] '_' [rR][oO][uU][n2][dD] '_' [dD][eE][lL][aA][yY]|[sS][uU][rR][vV][iI][vV][oO][rR] '_' [rR][oO][uU][n2][dD] '_' [tT][iI][mM][eE]|[rR][eE][fF] '_' [pP][aA][sS][sS]|[dD][oO] '_' [wW][aA][rR][mM][uU][pP]|[wW][aA][rR][mM][uU][pP]|[rR][eE][sS][pP][aA][wW][n2] '_' [dD][eE][lL][aA][yY]|[rR][eE][sS][pP][aA][wW][n2] '_' [pP][rR][oO][tT][eE][cC][tT][iI][oO][n2]|[pP][rR][eE][cC][iI][pP] '_' [aA][mM][oO][uU][n2][tT]|[eE][n2][aA][bB][lL][eE] '_' [pP][rR][eE][cC][iI][pP]|[sS][pP][sS][kK][iI][lL][lL]|[aA][lL][lL][oO][wW] '_' [vV][oO][tT][eE]|[lL][oO][gG] '_' [sS][yY][n2][cC]|[lL][oO][gG]|[iI][n2][aA][cC][tT][iI][vV][iI][tT][yY]|[mM][aA][pP][cC][yY][cC][lL][eE])
    | [cC][gG] '_' ([bB][oO][bB][pP][iI][tT][cC][hH]|[bB][oO][bB][rR][oO][lL][lL]|[bB][oO][bB][uU][pP]|[bB][rR][aA][sS][sS] '_' [tT][iI][mM][eE]|[cC][rR][oO][sS][sS][hH][aA][iI][rR] '_' [sS][iI][zZ][eE]|[dD][rR][aA][wW] '2' [dD]|[dD][rR][aA][wW][cC][rR][oO][sS][sS][hH][aA][iI][rR]|[dD][rR][aA][wW][fF][pP][sS]|[dD][rR][aA][wW] '_' [gG][uU][n2]|[fF][oO][rR][cC][eE] '_' [mM][oO][dD][eE][lL]|[fF][oO][vV]|[lL][aA][gG][oO][mM][eE][tT][eE][rR]|[mM][aA][rR][kK][sS]|[pP][rR][eE][dD][iI][cC][tT] '_' [iI][tT][eE][mM][sS]|[rR][aA][iI][lL] '_' [tT][rR][aA][iI][lL] '_' [tT][iI][mM][eE]|[sS][hH][aA][dD][oO][wW][sS]|[tT][eE][aA][mM] '_' [cC][hH][aA][tT] '_' [tT][iI][mM][eE]|[tT][hH][iI][rR][dD] '_' [pP][eE][rR][sS][oO][n2]|[tT][rR][uU][eE] '_' [lL][iI][gG][hH][tT][n2][iI][n2][gG]|[vV][iI][eE][wW][sS][iI][zZ][eE]|[zZ][oO][oO][mM] '_' [fF][oO][vV])
    | [cC][lL] '_' ([aA][lL][lL][oO][wW] '_' [dD][oO][wW][n2][lL][oO][aA][dD]|[cC][dD][kK][eE][yY]|[fF][rR][eE][eE][lL][oO][oO][kK]|[mM][aA][xX][pP][aA][cC][kK][eE][tT][sS]|[pP][aA][uU][sS][eE][dD]|[rR][uU][n2]|[sS][hH][oO][wW][fF][pP][sS])
    | [rR] '_' ([cC][oO][lL][oO][rR][bB][iI][tT][sS]|[dD][eE][pP][tT][hH][bB][iI][tT][sS]|[dD][yY][n2][aA][mM][iI][cC][lL][iI][gG][hH][tT]|[fF][aA][sS][tT][sS][kK][yY]|[fF][uU][lL][lL][sS][cC][rR][eE][eE][n2]|[gG][aA][mM][mM][aA]|[gG][lL] '_' [dD][rR][iI][vV][eE][rR]|[iI][n2] '_' [gG][aA][mM][eE] '_' [vV][iI][dE][oO]|[mM][oO][dD][eE]|[pP][iI][cC][mM][iI][pP]|[sS][uU][bB][dD][iI][vV][iI][sS][iI][oO][n2][sS]|[tT][eE][xX][tT][uU][rR][eE] '_' [bB][iI][tT][sS]|[vV][eE][rR][tT][eE][xX] '_' [lL][iI][gG][hH][tT])
    | [sS] '_' ([vV][oO][lL][uU][mM][eE]|[mM][uU][sS][iI][cC][vV][oO][uU][mM][eE]|[kK][hH][zZ]|[mM][iI][xX][aA][hH][eE][aA][dD])
    | [tT][iI][mM][eE][lL][iI][mM][iI][tT]
    | [fF][rR][aA][gG][lL][iI][mM][iI][tT]
    | [cC][aA][pP][tT][uU][rR][eE][lL][iI][mM][iI][tT]
    | [rR][oO][uU][n2][dD][tT][iI][mM][eE][lL][iI][mM][iI][tT]
    | [sS][eE][n2][sS][iI][tT][iI][vV][iI][tT][yY]
    | [lL][oO][gG][fF][iI][lL][eE]
    ;

// =====================================================================
// 4. ATOM VALUES & FALLBACK IDENTIFIERS
// =====================================================================

NUMBER
    : '-'? [0-9]+ ('.' [0-9]+)?
    ;

STRING_LITERAL
    : '"' (~["\\\r\n] | '\\' .)* '"'
    ;

// Safely positioned at the bottom of the value match stack to act as a fallback text literal string
IDENTIFIER
    : [-a-zA-Z_0-9/.:+\u005B\u005D]+
    ;

// =====================================================================
// 5. COMMENTS & HIDDEN CHANNEL WHITESPACE
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