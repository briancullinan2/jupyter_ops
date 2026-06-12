lexer grammar Q3SkinLexer;

COMMA      : ',' ;
NEWLINE    : [\r\n]+ ;
PATH_CHAR  : [-a-zA-Z0-9_./] ;

// Surface identifiers inside an MD3 binary file
SURFACE_ID : [a-zA-Z_][a-zA-Z0-9_]* ;

// Texture file paths or engine shaders
ASSET_PATH : PATH_CHAR+ ;

COMMENT    : '//' ~[\r\n]* -> channel(HIDDEN) ;
WS         : [ \t]+ -> skip ; // Don't skip newlines, they delineate rules
