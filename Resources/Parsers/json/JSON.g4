grammar JSON;

json
    : jsonValue EOF
    ;

obj
    : '{' pair (',' pair)* '}'
    | '{' '}'
    ;

pair
    : jsonKey ':' jsonValue
    ;

jsonKey
    : STRING                     // Walks a dedicated path. Parser rule = "jsonKey"
    ;

jsonValue
    : STRING                     // Walks an explicit value path. Parser rule = "jsonValue"
    | NUMBER
    | obj
    | arr
    | 'true'
    | 'false'
    | 'null'
    ;

arr
    : '[' jsonValue (',' jsonValue)* ']'  // Fixed: Points to your context values!
    | '[' ']'
    ;

// =====================================================================
// LEXER TERMINAL CORE (STAYS FULLY ENCAPSULATED)
// =====================================================================

STRING
    : '"' (ESC | SAFECODEPOINT)* '"'
    ;

fragment ESC
    : '\\' (["\\/bfnrt] | UNICODE)
    ;

fragment UNICODE
    : 'u' HEX HEX HEX HEX
    ;

fragment HEX
    : [0-9a-fA-F]
    ;

fragment SAFECODEPOINT
    : ~ ["\\\u0000-\u001F]
    ;

NUMBER
    : '-'? INT ('.' [0-9]+)? EXP?
    ;

fragment INT
    : '0'
    | [1-9] [0-9]*
    ;

fragment EXP
    : [Ee] [+-]? [0-9]+
    ;

WS
    : [ \t\n\r]+ -> channel(HIDDEN) // Safely routing to hidden channel 1
    ;