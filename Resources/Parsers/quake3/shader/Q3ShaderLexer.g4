lexer grammar Q3ShaderLexer;

// =====================================================================
// LEXER RULES
// =====================================================================

GLOBAL_DIRECTIVE
    : [cC][uU][lL][lL]
    | [sS][oO][rR][tT]
    | [tT][eE][sS][sS][zZ][iI][zZ][eE]
    | [cC][lL][aA][mM][pP][tT][iI][mM][eE]
    | [pP][oO][lL][yY][gG][oO][nN][oO][fF][fF][sS][eE][tT]
    | [eE][nN][tT][iI][tT][yY][mM][eE][rR][gG][aA][bB][lL][eE]
    | [nN][oO][mM][iI][pP][mM][aA][pP][sS]
    | [nN][oO][pP][iI][cC][mM][iI][pP]
    | [nN][oO][vV][lL][cC][oO][lL][lL][aA][pP][sS][eE]
    | [nN][oO][cC][oO][mM][pP][rR][eE][sS][sS]
    | [tT][rR][aA][nN][sS][lL][uU][cC][eE][nN][tT]
    | [tT][wW][oO][sS][iI][dD][eE][dD]
    | [pP][oO][rR][tT][aA][lL]
    | [fF][oO][gG][pP][aA][rR][mM][sS]
    | [lL][iI][gG][hH][tT]
    | [sS][kK][yY][pP][aA][rR][mM][sS]
    | [pP][aA][lL][eE][tT][tT][eE]
    ;

SURFACE_PARM_KEYWORD
    : [sS][uU][rR][fF][aA][cC][eE][pP][aA][rR][mM]
    ;

DEFORM_VERTEXES_KEYWORD
    : [dD][eE][fF][oO][rR][mM][vV][eE][rR][tT][eE][xX][eE][sS]
    ;

TC_MOD_KEYWORD
    : [tT][cC][mM][oO][dD]
    ;

IMPLICIT_MAPPING_KEYWORD
    : [iI][mM][pP][lL][iI][cC][iI][tT][mM][aA][pP]
    | [iI][mM][pP][lL][iI][cC][iI][tT][mM][aA][sS][kK]
    | [iI][mM][pP][lL][iI][cC][iI][tT][bB][lL][eE][nN][dD]
    ;

CONDITIONAL_IF   : [iI][fF] ;
CONDITIONAL_ELIF : [eE][lL][iI][fF] ;
CONDITIONAL_ELSE : [eE][lL][sS][eE] ;

STAGE_DIRECTIVE
    : [mM][aA][pP]
    | [cC][lL][aA][mM][pP][mM][aA][pP]
    | [aA][nN][iI][mM][mM][aA][pP]
    | [vV][iI][dD][eE][oO][mM][aA][pP]
    | [bB][lL][eE][nN][dD][fF][uU][nN][cC]
    | [rR][gG][bB][gG][eE][nN]
    | [aA][lL][pP][hH][aA][gG][eE][nN]
    | [tT][cC][gG][eE][nN]
    | [tT][eE][xX][gG][eE][nN]
    | [dD][eE][pP][tT][hH][fF][uU][nN][cC]
    | [dD][eE][pP][tT][hH][wW][rR][iI][tT][eE]
    | [dD][eE][pP][tT][hH][fF][rR][aA][gG][mM][eE][nN][tT]
    | [sS][tT][aA][gG][eE]
    | [dD][eE][tT][aA][iI][lL]
    | [aA][lL][pP][hH][aA][fF][uU][nN][cC]
    | [sS][pP][eE][cC][uU][lL][aA][rR][rR][eE][fF][lL][eE][cC][tT][aA][nN][cC][eE]
    | [sS][pP][eE][cC][uU][lL][aA][rR][eE][xX][pP][oO][nN][eE][nN][tT]
    | [gG][lL][oO][sS][sS]
    | [rR][oO][uU][gG][hH][nN][eE][sS][sS]
    | [pP][aA][rR][aA][lL][lL][aA][xX][dD][eE][pP][tT][hH]
    | [nN][oO][rR][mM][aA][lL][sS][cC][aA][lL][eE]
    | [sS][pP][eE][cC][uU][lL][aA][rR][sS][cC][aA][lL][eE]
    ;

TOOL_EXTENSION
    : [qQ][eE][rR] '_' [aA][zA-Z0-9_]+
    | [qQ] [3mM] [mM][aA][pP] '_' [aA][zA-Z0-9_]+
    | [qQ] [3gG] [gG][lL] [2_] [aA][zA-Z0-9_]+
    | [dD][pP] '_' [aA][zA-Z0-9_]+
    | [dD][pP][oO][fF][fF][sS][eE][tT][mM][aA][pP][pP][iI][nN][gG]
    | [dD][pP][gG][lL][oO][sS][sS][eE][xX][pP][oO][nN][eE][nN][tT][mM][oO][dD]
    | [dD][pP][gG][lL][oO][sS][sS][iI][nN][tT][eE][nN][sS][iI][tT][yY][mM][oO][dD]
    | [xX][oO][nN] '_' [nN][oO][wW][aA][rR][nN]
    | [dD][pP][rR][eE][fF][lL][eE][cC][tT][cC][uU][bB][eE]
    ;

SURFACE_PARM_VALUE
    : [wW][aA][tT][eE][rR]
    | [sS][lL][iI][mM][eE]
    | [lL][aA][vV][aA]
    | [pP][lL][aA][yY][eE][rR][cC][lL][iI][pP]
    | [mM][oO][nN][sS][tT][eE][rR][cC][lL][iI][pP]
    | [sS][hH][oO][tT][cC][lL][iI][pP]
    | [nN][oO][dD][rR][oO][pP]
    | [nN][oO][nN][sS][oO][lL][iI][dD]
    | [oO][rR][iI][gG][iI][nN]
    | [tT][rR][aA][nN][sS]
    | [dD][eE][tT][aA][iI][lL]
    | [sS][tT][rR][uU][cC][tT][uU][rR][aA][lL]
    | [aA][rR][eE][aA][pP][oO][rR][tT][aA][lL]
    | [aA][nN][tT][iI][pP][oO][rR][tT][aA][lL]
    | [cC][lL][uU][sS][tT][eE][rR][pP][oO][rR][tT][aA][lL]
    | [dD][oO][nN][oO][tT][eE][nN][tT][eE][rR]
    | [fF][oO][gG]
    | [sS][kK][yY]
    | [lL][iI][gG][hH][tT][fF][iI][lL][tT][eE][rR]
    | [aA][lL][pP][hH][aA][sS][hH][aA][dD][oO][wW]
    | [hH][iI][nN][tT]
    | [sS][lL][iI][cC][kK]
    | [nN][oO][iI][mM][pP][aA][cC][tT]
    | [nN][oO][mM][aA][rR][kK][sS]
    | [lL][aA][dD][dD][eE][rR]
    | [nN][oO][dD][aA][mM][aA][gG][eE]
    | [mM][eE][tT][aA][lL][sS][tT][eE][pP][sS]
    | [fF][lL][eE][sS][hH]
    | [nN][oO][sS][tT][eE][pP][sS]
    | [nN][oO][dD][rR][aA][wW]
    | [pP][oO][iI][nN][tT][lL][iI][gG][hH][tT]
    | [nN][oO][lL][iI][gG][hH][tT][mM][aA][pP]
    | [nN][oO][dD][lL][iI][gG][hH][tT]
    | [dD][uU][sS][tT]
    | [tT][eE][rR][rR][aA][iI][nN]
    | [sS][kK][iI][pP]
    ;

DEFORM_MODIFIER
    : [pP][rR][oO][jJ][eE][cC][tT][iI][oO][nN][sS][hH][aA][dD][oO][wW]
    | [aA][uU][tT][oO][sS][pP][rR][iI][tT][eE] '2'?
    | [bB][uU][lL][gG][eE]
    | [mM][oO][vV][eE]
    | [nN][oO][rR][mM][aA][lL]
    | [wW][aA][vV][eE]
    | [tT][eE][xX][tT] [0-7]
    ;

TC_MOD_MODIFIER
    : [tT][uU][rR][bB]
    | [sS][cC][aA][lL][eE]
    | [sS][cC][rR][oO][lL][lL]
    | [sS][tT][rR][eE][tT][cC][hH]
    | [tT][rR][aA][nN][sS][fF][oO][rR][mM]
    | [rR][oO][tT][aA][tT][eE]
    | [eE][nN][tT][iI][tT][yY][tT][rR][aA][nN][sS][lL][aA][tT][eE]
    ;

WAVE_FUNCTION
    : [sS][iI][nN]
    | [sS][qQ][uU][aA][rR][eE]
    | [tT][rR][iI][aA][nN][gG][lL][eE]
    | [sS][aA][wW][tT][oO][oO][tT][hH]
    | [iI][nN][vV][eE][rR][sS][eE][sS][aA][wW][tT][oO][oO][tT][hH]
    | [nN][oO][iI][sS][eE]
    ;

ENUM_MODIFIER
    : [iI][dD][eE][nN][tT][iI][tT][yY]
    | [iI][dD][eE][nN][tT][iI][tT][yY][lL][iI][gG][hH][tT][iI][nN][gG]
    | [eE][nN][tT][iI][tT][yY]
    | [oO][nN][eE][mM][iI][nN][uU][sS][eE][nN][tT][iI][tT][yY]
    | [vV][eE][rR][tT][eE][xX]
    | [eE][xX][aA][cC][tT][vV][eE][rR][tT][eE][xX]
    | [vV][eE][rR][tT][eE][xX][lL][iI][tT]
    | [eE][xX][aA][cC][tT][vV][eE][rR][tT][eE][xX][lL][iI][tT]
    | [lL][iI][gG][hH][tT][iI][nN][gG][dD][iI][fF][fF][uU][sS][eE]
    | [oO][nN][eE][mM][iI][nN][uU][sS][vV][eE][rR][tT][eE][xX]
    | [lL][iI][gG][hH][tT][iI][nN][gG][sS][pP][eE][cC][uU][lL][aA][rR]
    | [eE][nN][vV][iI][rR][oO][nN][mM][eE][nN][tT]
    | [fF][iI][rR][sS][tT][pP][eE][rR][sS][oO][nN]
    | [lL][iI][gG][hH][tT][mM][aA][pP]
    | [tT][eE][xX][tT][uU][rR][eE]
    | [bB][aA][sS][eE]
    | [vV][eE][cC][tT][oO][rR]
    | [aA][dD][dD]
    | [fF][iI][lL][tT][eE][rR]
    | [bB][lL][eE][nN][dD]
    | [gG][tT] '0'
    | [lL][tT] '128'
    | [gG][eE] '128'
    | [lL][eE][qQ][uU][aA][lL]
    | [eE][qQ][uU][aA][lL]
    | [dD][iI][sS][aA][bB][lL][eE]
    | [nN][oO][nN][eE]
    | [bB][aA][cC][kK]
    | [bB][aA][cC][kK][sS][iI][dD][eE]
    | [bB][aA][cC][kK][sS][iI][dD][eE][dD]
    | [oO][pP][aA][qQ][uU][eE]
    | [dD][eE][cC][aA][lL]
    | [sS][eE][eE][tT][hH][rR][oO][uU][gG][hH]
    | [bB][aA][nN][nN][eE][rR]
    | [aA][dD][dD][iI][tT][iI][vV][eE]
    | [nN][eE][aA][rR][eE][sS][tT]
    | [uU][nN][dD][eE][rR][wW][aA][tT][eE][rR]
    ;

GL_CONSTANT
    : [gG][lL] '_' [oO][nN][eE]
    | [gG][lL] '_' [zZ][eE][rR][oO]
    | [gG][lL] '_' [dD][sS][tT] '_' [cC][oO][lL][oO][rR]
    | [gG][lL] '_' [sS][rR][cC] '_' [cC][oO][lL][oO][rR]
    | [gG][lL] '_' [oO][nN][eE] '_' [mM][iI][nN][uU][sS] '_' [dD][sS][tT] '_' [cC][oO][lL][oO][rR]
    | [gG][lL] '_' [oO][nN][eE] '_' [mM][iI][nN][uU][sS] '_' [sS][rR][cC] '_' [cC][oO][lL][oO][rR]
    | [gG][lL] '_' [dD][sS][tT] '_' [aA][lL][pP][hH][aA]
    | [gG][lL] '_' [sS][rR][cC] '_' [aA][lL][pP][hH][aA]
    | [gG][lL] '_' [oO][nN][eE] '_' [mM][iI][nN][uU][sS] '_' [dD][sS][tT] '_' [aA][lL][pP][hH][aA]
    | [gG][lL] '_' [oO][nN][eE] '_' [mM][iI][nN][uU][sS] '_' [sS][rR][cC] '_' [cC][oO][lL][oO][rR]
    | [gG][lL] '_' [sS][rR][cC] '_' [aA][lL][pP][hH][aA] '_' [sS][aA][tT][uU][rR][aA][tT][eE]
    ;

VARIABLE: '$'[a-zA-Z0-9_]+ ;

IDENTIFIER
    : [a-zA-Z_][a-zA-Z0-9_]*
    | [0-9]+ [a-zA-Z_] [a-zA-Z0-9_]*
    ;

L_VALUE     : [a-zA-Z0-9_]+ ;
R_VALUE     : [a-zA-Z0-9_]+ ;
NUMBER      : '-'? [0-9]+ ('.' [0-9]+)? ;
STRING_LITERAL : '"' (~["\r\n])* '"' ;

PATH
    : [-a-zA-Z0-9_/. ]+ '.' [a-zA-Z0-9]+
    | [-a-zA-Z0-9_/ ]+ '/' [-a-zA-Z0-9_/. ]+
    ;

LOGICAL_OP
    : '&&' | '||'
    | [aA][nN][dD]
    | [oO][rR]
    ;

COMP_OP : '==' | '!=' | '>' | '>=' | '<' | '<=' ;


LBRACE    : '{' ;
RBRACE    : '}' ;
LPAREN    : '(' ;
RPAREN    : ')' ;

COMMENT       : '//' ~[\r\n]* -> channel(HIDDEN) ;
BLOCK_COMMENT : '/*' .*? '*/' -> channel(HIDDEN) ;
WS            : [ \t\r\n]+    -> skip ;

