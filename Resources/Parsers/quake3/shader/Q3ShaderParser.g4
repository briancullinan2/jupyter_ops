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
    | tcModStatement
    | conditionalBlock
    | implicitMappingStatement
    | stageBlock
    | bypassedExtensionStatement
    ;

// Global Root Directives
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

tcModStatement
    : TC_MOD_KEYWORD TC_MOD_MODIFIER argument*
    ;

// Bypassed Tool & Vendor Extensions
bypassedExtensionStatement
    : TOOL_EXTENSION argument*
    ;

// Implicit structural block mappings
implicitMappingStatement
    : IMPLICIT_MAPPING_KEYWORD (PATH | IDENTIFIER)?
    ;

// Preprocessor & Control-Flow Conditional Brackets
conditionalBlock
    : CONDITIONAL_IF LPAREN conditionalExpression RPAREN LBRACE blockBody RBRACE ( conditionalElif | conditionalElse )*
    | CONDITIONAL_IF argument LBRACE blockBody RBRACE ( conditionalElif | conditionalElse )*
    ;

conditionalElif
    : CONDITIONAL_ELIF LPAREN conditionalExpression RPAREN LBRACE blockBody RBRACE
    | CONDITIONAL_ELIF argument LBRACE blockBody RBRACE
    ;

conditionalElse
    : CONDITIONAL_ELSE LBRACE blockBody RBRACE
    ;

conditionalExpression
    : expressionTerm ( LOGICAL_OP expressionTerm )*
    ;

expressionTerm
    : ( L_VALUE | VARIABLE | IDENTIFIER ) COMP_OP ( R_VALUE | NUMBER | STRING_LITERAL | IDENTIFIER )
    | VARIABLE 
    | IDENTIFIER
    ;

// Nested Stage Defs
stageBlock
    : LBRACE stageBody RBRACE
    ;

stageBody
    : ( stageStatement | commentLine )*
    ;

stageStatement
    : STAGE_DIRECTIVE argument*
    ;

// Shared Leaf Parameters
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
    ;

commentLine
    : COMMENT
    | BLOCK_COMMENT
    ;