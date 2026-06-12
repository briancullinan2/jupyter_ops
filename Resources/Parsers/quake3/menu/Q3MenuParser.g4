parser grammar Q3MenuParser;

options {
    tokenVocab = Q3MenuLexer;
}

// =====================================================================
// PARSER RULES
// =====================================================================

menuFile
    : includeDirective* globalScopeWrapper EOF
    ;

includeDirective
    : PREPROCESSOR_DIRECTIVE STRING_LITERAL
    ;

// Captures the complete wrapping curly braces encompassing the asset components
globalScopeWrapper
    : LBRACE definitionBody RBRACE
    ;

definitionBody
    : ( blockDeclaration | includeDirective )*
    ;

blockDeclaration
    : BLOCK_TYPE LBRACE blockContentBody RBRACE
    ;

blockContentBody
    : ( propertyStatement | eventBlockStatement | blockDeclaration )*
    ;

// Handles explicit standard UI declarations: fullScreen MENU_TRUE / rect 0 0 640 480
propertyStatement
    : PROPERTY_KEYWORD argument+
    ;

// Handles real-time active logic script declarations: action { play "sound/x.wav" ; close main }
eventBlockStatement
    : EVENT_KEYWORD LBRACE actionScriptBody RBRACE
    | EVENT_KEYWORD actionCommandStatement // Option for single non-bracket inline instructions
    ;

actionScriptBody
    : ( actionCommandStatement SEMICOLON* )*
    ;

// Captures actionable internal methods: uiScript getCDKey / transition facebox 0 0 10 20
actionCommandStatement
    : ACTION_COMMAND argument*
    ;

// Leaf argument groupings to capture varying custom parameters
argument
    : IDENTIFIER
    | NUMBER
    | STRING_LITERAL
    | PROPERTY_KEYWORD
    | ACTION_COMMAND
    ;