parser grammar Q3ArenaParser;

options { tokenVocab = Q3ArenaLexer; }

arenaFile
    : arenaBlock* EOF
    ;

arenaBlock
    : LBRACE propertyStatement* RBRACE
    ;

propertyStatement
    : keyword=arenaKeyword value=(STRING_LITERAL | NUMBER | IDENTIFIER)
    ;

arenaKeyword
    : MAP_KEYWORD
    | LONGNAME_KEYWORD
    | BOTS_KEYWORD
    | FRAGLIMIT_KEYWORD
    | TYPE_KEYWORD
    | IDENTIFIER // Catch-all for non-standard mod additions
    ;