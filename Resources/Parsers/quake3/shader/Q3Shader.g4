grammar Q3Shader;

// =====================================================================
// PARSER RULES
// =====================================================================

shaderFile
    : shader+ EOF
    ;

shader
    : shaderName '{' blockBody '}'
    ;

shaderName
    : PATH
    | IDENTIFIER
    | STRING_LITERAL
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
    | SURFACE_PARM_KEYWORD IDENTIFIER // Fallback for custom/unknown mods
    ;

deformStatement
    : DEFORM_VERTEXES_KEYWORD DEFORM_MODIFIER argument*
    ;

tcModStatement
    : TC_MOD_KEYWORD TC_MOD_MODIFIER argument*
    ;

// Bypassed Tool & Vendor Extensions (Parses gracefully but isolated)
bypassedExtensionStatement
    : TOOL_EXTENSION argument*
    ;

// Implicit structural block mappings (ydnar / Quake Live specs)
implicitMappingStatement
    : IMPLICIT_MAPPING_KEYWORD (PATH | IDENTIFIER)?
    ;

// Preprocessor & Control-Flow Conditional Brackets
conditionalBlock
    : CONDITIONAL_IF '(' conditionalExpression ')' '{' blockBody '}' ( conditionalElif | conditionalElse )*
    ;

conditionalElif
    : CONDITIONAL_ELIF '(' conditionalExpression ')' '{' blockBody '}'
    ;

conditionalElse
    : CONDITIONAL_ELSE '{' blockBody '}'
    ;

conditionalExpression
    : expressionTerm ( LOGICAL_OP expressionTerm )*
    ;

expressionTerm
    : ( L_VALUE | VARIABLE ) COMP_OP ( R_VALUE | NUMBER | STRING_LITERAL )
    | VARIABLE // Shorthand "not-zero" flags: if ( $cvar )
    ;

// Nested Stage Defs (CSS-style child declaration listings)
stageBlock
    : '{' stageBody '}'
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
    ;

commentLine
    : COMMENT
    ;


// =====================================================================
// LEXER RULES
// =====================================================================

// Top-Level Shader Scope Structural Keywords
GLOBAL_DIRECTIVE
    : [cC][uU][lL][lL]
    | [sS][oO][rR][tT]
    | [tT][eE][sS][sS][zZ][iI][zZ][eE]
    | [cC][lL][aA][mM][pP][tT][iI][mM][eE]
    | [pP][oO][lL][yY][gG][oO][nN][oO][fF][fF][sS][eE][tT]
    | [eE][nN][tT][iI][tT][yY][mM][eE][rR][gG][aA][bB][lL][eE]
    | [nN][oO][mM][iI][pP][mM][aA][pP][sS]
    | [nN][oO][pP][iI][cC][mM][iI][pP]
    | [nN][oO][vV][lL][cC][oO][lL][lL][aA][pP][sS][eE]
    | [nN][oO][cC][oO][mM][pP][rR][eE][sS][sS]
    | [tT][rR][aA][nN][sS][lL][uU][cC][eE][nN][tT]
    | [tT][wW][oO][sS][iI][d4][eE][d4]
    | [pP][oO][rR][tT][aA][lL]
    | [fF][oO][gG][pP][aA][rR][mM][sS]
    | [lL][iI][gG][hH][tT]
    | [sS][kK][yY][pP][aA][rR][mM][sS]
    | [pP][aA][lL][eE][tT][tT][eE]
    ;

SURFACE_PARM_KEYWORD
    : [sS][uU][rR][fF][aA][cC][eE][pP][aA][rR][mM]
    ;

DEFORM_VERTEXES_KEYWORD
    : [d4][eE][fF][oO][rR][mM][vV][eE][rR][tT][eE][xX][eE][sS]
    ;

TC_MOD_KEYWORD
    : [tT][cC][mM][oO][d4]
    ;

IMPLICIT_MAPPING_KEYWORD
    : [iI][mM][pP][lL][iI][cC][iI][tT][mM][aA][pP]
    | [iI][mM][pP][lL][iI][cC][iI][tT][mM][aA][sS][kK]
    | [iI][mM][pP][lL][iI][cC][iI][tT][bB][lL][eE][nN][d4]
    ;

CONDITIONAL_IF   : [iI][fF] ;
CONDITIONAL_ELIF : [eE][lL][iI][fF] ;
CONDITIONAL_ELSE : [eE][lL][sS][eE] ;

// Stage Specific Directives
STAGE_DIRECTIVE
    : [mM][aA][pP]
    | [cC][lL][aA][mM][pP][mM][aA][pP]
    | [aA][nN][iI][mM][mM][aA][pP]
    | [vV][iI][d4][eE][oO][mM][aA][pP]
    | [bB][lL][eE][nN][d4][fF][uU][nN][cC]
    | [rR][gG][bB][gG][eE][nN]
    | [aA][lL][pP][hH][aA][gG][eE][nN]
    | [tT][cC][gG][eE][nN]
    | [tT][eE][xX][gG][eE][nN]
    | [d4][eE][pP][tT][hH][fF][uU][nN][cC]
    | [d4][eE][pP][tT][hH][wW][rR][iI][tT][eE]
    | [d4][eE][pP][tT][hH][fF][rR][aA][gG][mM][eE][nN][tT]
    | [sS][tT][aA][gG][eE]
    | [d4][eE][tT][aA][iI][lL]
    | [aA][lL][pP][hH][aA][fF][uU][nN][cC]
    | [sS][pP][eE][cC][uU][lL][aA][rR][rR][eE][fF][lL][eE][cC][tT][aA][nN][cC][eE]
    | [sS][pP][eE][cC][uU][lL][aA][rR][eE][xX][pP][oO][nN][eE][nN][tT]
    | [gG][lL][oO][sS][sS]
    | [rR][oO][uU][gG][hH][nN][eE][sS][sS]
    | [pP][aA][rR][aA][lL][lL][aA][xX][d4][eE][pP][tT][hH]
    | [nN][oO][rR][mM][aA][lL][sS][cC][aA][lL][eE]
    | [sS][pP][eE][cC][uU][lL][aA][rR][sS][cC][aA][lL][eE]
    ;

// Fixed Tool and Asset Vendor Substrings 
TOOL_EXTENSION
    : [qQ][eE][rR]_[aA][zA-Z0-9_]+
    | [qQ][3M][mM][aA][pP]_[aA][zA-Z0-9_]+
    | [qQ][3G][gG][lL][2_][aA][zA-Z0-9_]+
    | [dD][pP]_[aA][zA-Z0-9_]+
    | [dD][pP][oO][fF][fF][sS][eE][tT][mM][aA][pP][pP][iI][nN][gG]
    | [dD][pP][gG][lL][oO][sS][sS][eE][xX][pP][oO][nN][eE][nN][tT][mM][oO][dD]
    | [dD][pP][gG][lL][oO][sS][sS][iI][nN][tT][eE][nN][sS][iI][tT][yY][mM][oO][dD]
    | [xX][oO][nN]_[nN][oO][wW][aA][rR][nN]
    | [dD][pP][rR][eE][fF][lL][eE][cC][tT][cC][uU][bB][eE]
    ;

// Content, Flags, and Physics values (surfaceParm arguments)
SURFACE_PARM_VALUE
    : [wW][aA][tT][eE][rR]
    | [sS][lL][iI][mM][eE]
    | [lL][aA][vV][aA]
    | [pP][lL][aA][yY][eE][rR][cC][lL][iI][pP]
    | [mM][oO][nN][sS][tT][eE][rR][cC][lL][iI][pP]
    | [sS][hH][oO][tT][cC][lL][iI][pP]
    | [nN][oO][dD][rR][oO][pP]
    | [nN][oO][nN][sS][oO][lL][iI][dD]
    | [oO][rR][iI][gG][iI][nN]
    | [tT][rR][aA][nN][sS]
    | [d4][eE][tT][aA][iI][lL]
    | [sS][tT][rR][uU][cC][tT][uU][rR][aA][lL]
    | [aA][rR][eE][aA][pP][oO][rR][tT][aA][lL]
    | [aA][nN][tT][iI][pP][oO][rR][tT][aA][lL]
    | [cC][lL][uU][sS][tT][eE][rR][pP][oO][rR][tT][aA][lL]
    | [d4][oO][nN][oO][tT][eE][nN][tT][eE][rR]
    | [fF][oO][gG]
    | [sS][kK][yY]
    | [lL][iI][gG][hH][tT][fF][iI][lL][tT][eE][rR]
    | [aA][lL][pP][hH][aA][sS][hH][aA][d4][oO][wW]
    | [hH][iI][nN][tT]
    | [sS][lL][iI][cC][kK]
    | [nN][oO][iI][mM][pP][aA][cC][tT]
    | [nN][oO][mM][aA][rR][kK][sS]
    | [lL][aA][d4][d4][eE][rR]
    | [nN][oO][d4][aA][mM][aA][gG][eE]
    | [mM][eE][tT][aA][lL][sS][tT][eE][pP][sS]
    | [fF][lL][eE][sS][hH]
    | [nN][oO][sS][tT][eE][pP][sS]
    | [nN][oO][d4][rR][aA][wW]
    | [pP][oO][iI][nN][tT][lL][iI][gG][hH][tT]
    | [nN][oO][lL][iI][gG][hH][tT][mM][aA][pP]
    | [nN][oO][d4][lL][iI][gG][hH][tT]
    | [d4][uU][sS][tT]
    | [tT][eE][rR][rR][aA][iI][nN]
    | [sS][kK][iI][pP]
    ;

// Specific Structural Deform Modifiers
DEFORM_MODIFIER
    : [pP][rR][oO][jJ][eE][cC][tT][iI][oO][nN][sS][hH][aA][d4][oO][wW]
    | [aA][uU][tT][oO][sS][pP][rR][iI][tT][eE]
    | [aA][uU][tT][oO][sS][pP][rR][iI][tT][eE]2
    | [bB][uU][lL][gG][eE]
    | [mM][oO][vV][eE]
    | [nN][oO][rR][mM][aA][lL]
    | [wW][aA][vV][eE]
    | [tT][eE][xX][tT][0-7]
    ;

// Shared Functional Modifiers (tcMod commands, coordinate configurations)
TC_MOD_MODIFIER
    : [tT][uU][rR][bB]
    | [sS][cC][aA][lL][eE]
    | [sS][cC][rR][oO][lL][lL]
    | [sS][tT][rR][eE][tT][cC][hH]
    | [tT][rR][aA][nN][sS][fF][oO][rR][mM]
    | [rR][oO][tT][aA][tT][eE]
    | [eE][nN][tT][iI][tT][yY][tT][rR][aA][nN][sS][lL][aA][tT][eE]
    ;

// Waveform Math functions
WAVE_FUNCTION
    : [sS][iI][nN]
    | [sS][qQ][uU][aA][rR][eE]
    | [tT][rR][iI][aA][nN][gG][lL][eE]
    | [sS][aA][wW][tT][oO][oO][tT][hH]
    | [iI][nN][vV][eE][rR][sS][eE][sS][aA][wW][tT][oO][oO][tT][hH]
    | [nN][oO][iI][sS][eE]
    ;

// Core Evaluation & Target Parameter Arguments
ENUM_MODIFIER
    : [iI][d4][eE][nN][tT][iI][tT][yY]
    | [iI][d4][eE][nN][tT][iI][tT][yY][lL][iI][gG][hH][tT][iI][nN][gG]
    | [eE][nN][tT][iI][tT][yY]
    | [oO][nN][eE][mM][iI][nN][uU][sS][eE][nN][tT][iI][tT][yY]
    | [vV][eE][rR][tT][eE][xX]
    | [eE][xX][aA][cC][tT][vV][eE][rR][tT][eE][xX]
    | [vV][eE][rR][tT][eE][xX][lL][iI][tT]
    | [eE][xX][aA][cC][tT][vV][eE][rR][tT][eE][xX][lL][iI][tT]
    | [lL][iI][gG][hH][tT][iI][nN][gG][d4][iI][fF][fF][uU][sS][eE]
    | [oO][nN][eE][mM][iI][nN][uU][sS][vV][eE][rR][tT][eE][xX]
    | [lL][iI][gG][hH][tT][iI][nN][gG][sS][pP][eE][cC][uU][lL][aA][rR]
    | [eE][nN][vV][iI][rR][oO][nN][mM][eE][nN][tT]
    | [fF][iI][rR][sS][tT][pP][eE][rR][sS][oO][nN]
    | [lL][iI][gG][hH][tT][mM][aA][pP]
    | [tT][eE][xX][tT][uU][rR][eE]
    | [bB][aA][sS][eE]
    | [vV][eE][cC][tT][oO][rR]
    | [aA][d4][d4]
    | [fF][iI][lL][tT][eE][rR]
    | [bB][lL][eE][nN][ d4]
    | [gG][tT]0
    | [lL][tT]128
    | [gG][eE]128
    | [lL][eE][qQ][uU][aA][lL]
    | [eE][qQ][uU][aA][lL]
    | [d4][iI][sS][aA][bB][lL][eE]
    | [nN][oO][nN][eE]
    | [bB][aA][cC][kK]
    | [bB][aA][cC][kK][sS][iI][d4][eE]
    | [bB][aA][cC][kK][sS][iI][d4][eE][d4]
    | [oO][pP][aA][qQ][uU][eE]
    | [d4][eE][cC][aA][lL]
    | [sS][eE][eE][tT][hH][rR][oO][uU][gG][hH]
    | [bB][aA][nN][nN][eE][rR]
    | [aA][d4][d4][iI][tT][iI][vV][eE]
    | [nN][eE][aA][rR][eE][sS][tT]
    | [uU][nN][d4][eE][rR][wW][aA][tT][eE][rR]
    ;

// Core OpenGL Blending Constant Options
GL_CONSTANT
    : [gG][lL]_[oO][nN][eE]
    | [gG][lL]_[zZ][eE][rR][oO]
    | [gG][lL]_[dD][sS][tT]_[cC][oO][lL][oO][rR]
    | [gG][lL]_[sS][rR][cC]_[cC][oO][lL][oO][rR]
    | [gG][lL]_[oO][nN][eE]_[mM][iI][nN][uU][sS]_[dD][sS][tT]_[cC][oO][lL][oO][rR]
    | [gG][lL]_[oO][nN][eE]_[mM][iI][nN][uU][sS]_[sS][rR][cC]_[cC][oO][lL][oO][rR]
    | [gG][lL]_[dD][sS][tT]_[aA][lL][pP][hH][aA]
    | [gG][lL]_[sS][rR][cC]_[aA][lL][pP][hH][aA]
    | [gG][lL]_[oO][nN][eE]_[mM][iI][nN][uU][sS]_[dD][sS][tT]_[aA][lL][pP][hH][aA]
    | [gG][lL]_[oO][nN][eE]_[mM][iI][nN][uU][sS]_[sS][rR][cC]_[aA][lL][pP][hH][aA]
    | [gG][lL]_[sS][rR][cC]_[aA][lL][pP][hH][aA]_[sS][aA][tT][uU][rR][aA][tT][eE]
    ;

// Functional Internal assets references
VARIABLE
    : '$'[a-zA-Z0-9_]+
    ;

// Basic Value Matching
IDENTIFIER
    : [a-zA-Z_][a-zA-Z0-9_]*
    ;

L_VALUE
    : [a-zA-Z0-9_]+
    ;

R_VALUE
    : [a-zA-Z0-9_]+
    ;

NUMBER
    : '-'? [0-9]+ ('.' [0-9]+)?
    ;

// Strict and Extensionless paths (e.g. textures/base_wall/iron.tga or textures/liquids/water1)
PATH
    : [a-zA-Z0-9_\-\/.]+ '\.' [a-zA-Z0-9]+
    | [a-zA-Z0-9_\-\/]+ '/' [a-zA-Z0-9_\-\/.]+
    ;

STRING_LITERAL
    : '"' (~['"\r\n])* '"'
    ;

// Conditional Logic Operators
LOGICAL_OP
    : '&&' | '||'
    ;

COMP_OP
    : '==' | '!=' | '>' | '>=' | '<' | '<='
    ;

// Ignored structural elements
COMMENT
    : '//' ~[\r\n]* -> skip
    ;

WS
    : [ \t\r\n]+ -> skip
    ;