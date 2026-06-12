lexer grammar Q3ArenaLexer;

// =====================================================================
// 1. ARENA BLOCK KEYWORDS (Highest Priority Concrete Matches)
// =====================================================================

MAP_KEYWORD       : [mM][aA][pP] ;
LONGNAME_KEYWORD  : [lL][oO][nN][gG][nN][aA][mM][eE] ;
BOTS_KEYWORD      : [bB][oO][tT][sS] ;
FRAGLIMIT_KEYWORD : [fF][rR][aA][gG][lL][iI][mM][iI][tT] ;
TYPE_KEYWORD      : [tT][yY][pP][eE] ;

// =====================================================================
// 2. VALUES, STRINGS & FALLBACK LITERAL IDENTIFIERS
// =====================================================================

NUMBER            : '-'? [0-9]+ ('.' [0-9]+)? ;
STRING_LITERAL    : '"' (~["\\\r\n] | '\\' .)* '"' ;

// Positioned below your concrete keywords to prevent identifier collision loops
IDENTIFIER        : [a-zA-Z_][a-zA-Z0-9_]* ;

// =====================================================================
// 3. OPERATORS & STRUCTURAL LAYOUT BOUNDARIES
// =====================================================================

LBRACE            : '{' ;
RBRACE            : '}' ;

// Force single-line comments to consume line breaks explicitly to protect boundaries
COMMENT           : '//' ~[\r\n]* ([\r\n]+ | EOF) -> channel(HIDDEN) ;
WS                : [ \t\r\n]+                     -> channel(HIDDEN) ;