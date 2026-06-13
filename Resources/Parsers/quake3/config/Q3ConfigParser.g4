parser grammar Q3ConfigParser;

options {
    tokenVocab = Q3ConfigLexer;
}

// =====================================================================
// PARSER RULES
// =====================================================================

configFile
    : statementList EOF
    ;

statementList
    : ( statement SEMICOLON* )*
    ;

statement
    : assignmentExpression
    | bindExpression
    | commandExpression
    ;

// Handles: set cvar "value" / seta sv_hostname WiseServer
assignmentExpression
    : ASSIGNMENT_KEYWORD targetCvar value
    ;

targetCvar
    : KNOWN_CVAR
    | IDENTIFIER 
    ;

// Handles: bind MOUSE1 +attack / bind = "weapon 12"
bindExpression
    : BIND_KEYWORD bindKey value
    ;

// Safely mapped to accept raw structural characters directly inside key sequences
bindKey
    : IDENTIFIER
    | NUMBER
    | EQUALS
    | BACKSLASH
    | BACKTICK
    | TILDE
    ;

// Handles standalone chaining or scripts: exec server.cfg / unbindall
commandExpression
    : COMMAND_KEYWORD value*
    | IDENTIFIER value* ;

// Shared variant parameter evaluations
value
    : STRING_LITERAL
    | NUMBER
    | IDENTIFIER
    | KNOWN_CVAR
    | ASSIGNMENT_KEYWORD
    | COMMAND_KEYWORD
    | EQUALS
    | BACKSLASH
    | BACKTICK
    | TILDE
    ;