lexer grammar Q3ArenaLexer;


MAP_KEYWORD       : [mM][aA][pP] ;
LONGNAME_KEYWORD  : [lL][oO][nN][gG][nN][aA][mM][eE] ;
BOTS_KEYWORD      : [bB][oO][tT][sS] ;
FRAGLIMIT_KEYWORD : [fF][rR][aA][gG][lL][iI][mM][iI][tT] ;
TYPE_KEYWORD      : [tT][yY][pP][eE] ;

NUMBER            : '-'? [0-9]+ ('.' [0-9]+)? ;
STRING_LITERAL    : '"' (~["\\\r\n] | '\\' .)* '"' ;
IDENTIFIER        : [a-zA-Z_][a-zA-Z0-9_]* ;

LBRACE            : '{' ;
RBRACE            : '}' ;

COMMENT           : '//' ~[\r\n]* -> channel(HIDDEN) ;
WS                : [ \t\r\n]+ -> skip ;
