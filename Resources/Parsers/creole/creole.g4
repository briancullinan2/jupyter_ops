/*
* examples here: http://web.archive.org/web/20141011223900/http://svn.ez.no:80/svn/ezcomponents/trunk/Document/tests/files/wiki/creole/
*/

// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging

grammar creole;

document
    : (line? CR)* EOF
    ;

line
    : markup+
    ;

markup
    : bold
    | italics
    | href
    | title
    | hline
    | text_
    | listitem
    | image
    | tablerow
    | tableheader
    | nowiki
    ;

text_
    : (TEXT | RSLASH)+ ('\\\\' text_)*
    ;

bold
    : '**' markup+ '**'?
    ;

italics
    : RSLASH RSLASH markup+ RSLASH RSLASH
    ;

href
    : LBRACKET text_ ('|' markup+)? RBRACKET
    | LBRACE text_ '|' markup+ RBRACE
    ;

image
    : LBRACE text_ RBRACE
    ;

hline
    : '----'
    ;

listitem
    : ('*'+ markup)
    | ('#'+ markup)
    ;

tableheader
    : ('|=' markup+)+ '|' WS*
    ;

tablerow
    : ('|' markup+)+ '|' WS*
    ;

title
    : '='+ markup '='*
    ;

nowiki
    : NOWIKI_CREOLE
    | CODE_BLOCK
    ;

HASH
    : '#'
    ;

LBRACKET
    : '[['
    ;

RBRACKET
    : ']]'
    ;

LBRACE
    : '{{'
    ;

RBRACE
    : '}}'
    ;

CODE_BLOCK
    : '```' [ \t]* LANG_NAME? [ \t]* ('\r'? '\n')? .*? '```'
    | '`' [ \t]* LANG_NAME? [ \t]* .*? '`'
    ;

NOWIKI_CREOLE
    : '{{{' .*? '}}}'
    ;

TEXT
    : (LETTERS | DIGITS | SYMBOL | WS)+
    ;

WS
    : [ \t]
    ;

CR
    : '\r'? '\n'
    | EOF
    ;

RSLASH
    : '/'
    ;

fragment LANG_NAME
    : [a-zA-Z0-9_\-+]+
    ;

fragment LETTERS
    : [a-zA-Z]
    ;

fragment DIGITS
    : [0-9]
    ;

fragment SYMBOL
    : '.'
    | ';'
    | ':'
    | ','
    | '('
    | ')'
    | '-'
    | '\\'
    | '\''
    | '~'
    | '"'
    | '+'
    | '`'
    | '_'
    | '$'
    ;