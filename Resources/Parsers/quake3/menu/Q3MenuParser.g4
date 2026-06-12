parser grammar Q3MenuParser;

options {
    tokenVocab = Q3MenuLexer;
}

// =====================================================================
// PRIMARY STRUCTURAL ENTRY POINTS
// =====================================================================

// Files are linear, flat sequences of directives and top-level definitions
menuFile
    : ( includeDirective | blockDeclaration )* EOF
    ;

includeDirective
    : PREPROCESSOR_DIRECTIVE STRING_LITERAL
    ;

// Handles top-level asset descriptors: menuDef, itemDef, assetGlobalDef
blockDeclaration
    : BLOCK_TYPE LBRACE blockContentBody RBRACE
    ;

blockContentBody
    : ( propertyStatement | eventBlockStatement | blockDeclaration | initializationList | commentLine )*
    ;

// =====================================================================
// PROPERTY STATEMENTS & DATA LISTS
// =====================================================================

// Handles standard assignments: rect 0 0 640 480 / visible 1
propertyStatement
    : PROPERTY_KEYWORD argument+
    ;

// Handles custom list descriptors: cvarStrList { "A", "1", "B", "2" }
initializationList
    : PROPERTY_KEYWORD LBRACE ( argument | COMMA | SEMICOLON )* RBRACE
    ;

// =====================================================================
// ENGINE LOGIC SCRIPT CONTROLS
// =====================================================================

// Handles event triggers: action { play "sound.wav" ; close main }
eventBlockStatement
    : EVENT_KEYWORD LBRACE actionScriptBody RBRACE
    | EVENT_KEYWORD actionCommandStatement // Support for single non-braced inline commands
    ;

actionScriptBody
    : ( actionCommandStatement ( SEMICOLON )* | commentLine )*
    ;

// Captures executable engine instructions: uiScript getCDKey / close main
actionCommandStatement
    : ACTION_COMMAND argument*
    ;

// =====================================================================
// SHARED LEAF PARAMETERS
// =====================================================================

argument
    : IDENTIFIER
    | NUMBER
    | STRING_LITERAL
    | PROPERTY_KEYWORD
    | ACTION_COMMAND
    | EVENT_KEYWORD
    | BLOCK_TYPE
    ;

commentLine
    : COMMENT
    | LINE_COMMENT_SL
    | LINE_COMMENT_BS
    | BLOCK_COMMENT
    ;