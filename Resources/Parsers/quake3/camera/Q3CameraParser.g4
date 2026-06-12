parser grammar Q3CameraParser;

options {
    tokenVocab = Q3CameraLexer;
}

// =====================================================================
// PARSER RULES
// =====================================================================

cameraFile
    : cameraBlock* EOF
    ;

// Top-Level wrapper: cameraPathDef { ... }
cameraBlock
    : BLOCK_TYPE LBRACE blockBody RBRACE
    ;

blockBody
    : elementStatement*
    ;

// A block element is either a key-value property configuration, a nested block definition, or a plain vector array
elementStatement
    : propertyStatement
    | nestedBlock
    | vectorGroup
    ;

// Handles explicit key-values: time 7.500000 / type 4 / param "target1"
propertyStatement
    : PROPERTY_KEYWORD value
    ;

// Handles recursive nested structures: target_Spline { ... } / target { ... }
nestedBlock
    : (BLOCK_TYPE | PROPERTY_KEYWORD) LBRACE blockBody RBRACE
    ;

// Handles vector coordinates: ( -328.727203 958.092957 40.125 )
vectorGroup
    : LPAREN NUMBER NUMBER NUMBER RPAREN
    ;

// Flexible placeholder assignments
value
    : NUMBER
    | STRING_LITERAL
    | IDENTIFIER
    | BLOCK_TYPE
    ;