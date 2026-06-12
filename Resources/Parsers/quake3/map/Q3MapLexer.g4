lexer grammar Q3MapLexer;


NUMBER         : '-'? [0-9]+ ('.' [0-9]+)? ;
STRING_LITERAL : '"' (~["\\\r\n] | '\\' .)* '"' ;

// Textures can include pathing slashes, extensions, and math characters
TEXTURE_NAME   : [-a-zA-Z0-9_./+]+ ;

LBRACE         : '{' ;
RBRACE         : '}' ;
LPAREN         : '(' ;
RPAREN         : ')' ;

COMMENT        : '//' ~[\r\n]* -> channel(HIDDEN) ;
WS             : [ \t\r\n]+ -> skip ;