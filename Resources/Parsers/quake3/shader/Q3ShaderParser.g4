parser grammar Q3ShaderParser;

options {
    tokenVocab = Q3ShaderLexer;
}

// =====================================================================
// PARSER RULES
// =====================================================================

shaderFile
    : shader+ EOF
    | EOF
    ;

shader
    : shaderName LBRACE blockBody RBRACE
    ;

shaderName
    : PATH
    | IDENTIFIER
    | STRING_LITERAL
    | NUMBER
    | GLOBAL_DIRECTIVE
    ;

blockBody
    : ( blockStatement | commentLine )*
    ;

blockStatement
    : globalDirectiveStatement
    | surfaceParmStatement
    | deformStatement
    | conditionalBlock
    | implicitMappingStatement
    | stageBlock
    | bypassedExtensionStatement
    | generalPaletteStatement
    ;

// =====================================================================
// GLOBAL COMPONENT DIRECTIVES (Outer Block Scope Only)
// =====================================================================

globalDirectiveStatement
    : GLOBAL_DIRECTIVE argument*
    ;

surfaceParmStatement
    : SURFACE_PARM_KEYWORD SURFACE_PARM_VALUE
    | SURFACE_PARM_KEYWORD IDENTIFIER 
    ;

deformStatement
    : DEFORM_VERTEXES_KEYWORD DEFORM_MODIFIER argument*
    ;

generalPaletteStatement
    : IDENTIFIER argument* // Captures "palette <file> <args>" loops
    ;

// Bypassed Tool, Darkplaces, & Vendor Extensions
bypassedExtensionStatement
    : TOOL_EXTENSION argument*
    ;

// Implicit structural block mappings (ydnar additions)
implicitMappingStatement
    : IMPLICIT_MAPPING_KEYWORD (PATH | IDENTIFIER | NUMBER)?
    ;

// =====================================================================
// CONDITIONS & PREPROCESSOR LAYOUTS
// =====================================================================

conditionalBlock
    : CONDITIONAL_IF conditionExpression executionBlock ( conditionalElif | conditionalElse )*
    ;

conditionalElif
    : CONDITIONAL_ELIF conditionExpression executionBlock
    ;

conditionalElse
    : CONDITIONAL_ELSE executionBlock
    ;

conditionExpression
    : LPAREN conditionalExpression RPAREN
    | argument
    ;

conditionalExpression
    : expressionTerm ( LOGICAL_OP expressionTerm )*
    ;

expressionTerm
    : ( L_VALUE | VARIABLE | IDENTIFIER ) COMP_OP ( R_VALUE | NUMBER | STRING_LITERAL | IDENTIFIER )
    | VARIABLE 
    | IDENTIFIER
    ;

// Supports both braced blocks and inline single-statement loops
executionBlock
    : LBRACE blockBody RBRACE
    | blockStatement
    ;

// =====================================================================
// NESTED RENDER STAGES (Texture Unit Block Scope)
// =====================================================================

stageBlock
    : LBRACE stageBody RBRACE
    ;

stageBody
    : ( stageStatement | commentLine )*
    ;

stageStatement
    : STAGE_DIRECTIVE argument*
    | tcModStatement              // Nested strictly inside stage paths
    ;

tcModStatement
    : TC_MOD_KEYWORD TC_MOD_MODIFIER argument*
    ;

// =====================================================================
// SHARED LEAF PARAMETERS & ATOM VALUES
// =====================================================================

argument
    : PATH
    | VARIABLE
    | IDENTIFIER
    | NUMBER
    | STRING_LITERAL
    | GL_CONSTANT
    | WAVE_FUNCTION
    | ENUM_MODIFIER
    | GLOBAL_DIRECTIVE
    | SURFACE_PARM_VALUE
    | DEFORM_MODIFIER
    | TC_MOD_MODIFIER
    | LPAREN                     // Exposed to satisfy ParseVector loops
    | RPAREN                     // Exposed to satisfy ParseVector loops
    ;

commentLine
    : COMMENT
    | BLOCK_COMMENT
    ;