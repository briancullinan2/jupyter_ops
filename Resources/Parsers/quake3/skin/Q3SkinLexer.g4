lexer grammar Q3SkinLexer;

COMMA      : ',' ;
NEWLINE    : [\r\n]+ ;
PATH_CHAR  : [-a-zA-Z0-9_./] ;

// Surface identifiers inside an MD3 binary file
SURFACE_ID : [a-zA-Z_][a-zA-Z0-9_]* ;

// Texture file paths or engine shaders
ASSET_PATH : PATH_CHAR+ ;

COMMENT
    : '//' ~[\r\n]* ([\r\n]+ | EOF) -> channel(HIDDEN)
    ;

LINE_COMMENT_SL
    : '//' ~[\r\n]* ([\r\n]+ | EOF) -> channel(HIDDEN)
    ;

LINE_COMMENT_BS
    : '\\\\' ~[\r\n]* ([\r\n]+ | EOF) -> channel(HIDDEN)
    ;

WS         : [ \t]+ -> channel(HIDDEN) ; // Don't skip newlines, they delineate rules
