/*
* Combined Creole + GitHub Markdown Grammar
*/

// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging

grammar creole;

// ==========================================
// PARSER RULES
// ==========================================

document
    : (line? CR)* EOF
    ;

line
    : markup+
    ;

markup
    : bold
    | italics
    | strikethrough
    | inline_code
    | href
    | url_autolink
    | title
    | hline
    | task_listitem
    | listitem
    | image
    | tablerow
    | tableheader
    | nowiki
    | text_
    ;

text_
    : (TEXT | RSLASH | COLON)+ ('\\\\' text_)*
    ;

bold
    : '**' markup+ '**'?
    | '__' markup+ '__'?
    ;

italics
    : RSLASH RSLASH markup+ RSLASH RSLASH
    | '*' markup+ '*'?
    | '_' markup+ '_'?
    ;

strikethrough
    : '~~' markup+ '~~'?
    ;

inline_code
    : CODE_INLINE
    ;

href
    : LBRACKET text_ ('|' markup+)? RBRACKET
    | LBRACE text_ '|' markup+ RBRACE
    ;

url_autolink
    : URL_LINK
    ;

image
    : LBRACE text_ RBRACE
    ;

hline
    : '----'
    | '***'
    | '___'
    ;

task_listitem
    : ('*'+ | '#'+ | '-') WS* '[ ]' markup+
    | ('*'+ | '#'+ | '-') WS* '[x]' markup+
    | ('*'+ | '#'+ | '-') WS* '[X]' markup+
    ;

listitem
    : ('*'+ markup)
    | ('#'+ markup)
    | ('-'+ markup)
    ;

tableheader
    : ('|=' markup+)+ '|' WS*
    ;

tablerow
    : ('|' markup+)+ '|' WS*
    ;

title
    : '='+ markup '='*               // Creole style: = Title =
    | HASH+ markup                  // GitHub style: # Title / ## Subtitle
    ;

nowiki
    : NOWIKI_CREOLE
    | CODE_BLOCK
    ;


// ==========================================
// LEXER RULES
// ==========================================

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

COLON
    : ':'
    ;

URL_LINK
    : ('http' 's'? | 'ftp' | 'mailto') '://' ~[ \t\r\n<>()"']+
    ;

CODE_BLOCK
    : '```' [ \t]* LANG_NAME? [ \t]* ('\r'? '\n')? .*? '```'
    ;

CODE_INLINE
    : '`' ~[\r\n`]+ '`'
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
    | ','
    | '('
    | ')'
    | '-'
    | '\\'
    | '\''
    | '~'
    | '"'
    | '+'
    | '_'
    | '$'
    ;