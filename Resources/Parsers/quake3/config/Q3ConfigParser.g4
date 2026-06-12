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

// Handles: set cvar "value" / seta sv_hostname WiseServer / sets Admin "Wise"
assignmentExpression
    : ASSIGNMENT_KEYWORD targetCvar value
    ;

targetCvar
    : KNOWN_CVAR
    | IDENTIFIER // Fallback dynamically for custom mods or unlisted variables
    ;

// Handles: bind MOUSE1 +attack / bind CTRL "vstr rocketjump"
bindExpression
    : BIND_KEYWORD bindKey value
    ;

bindKey
    : IDENTIFIER
    | NUMBER
    ;

// Handles standalone chaining or scripts: exec server.cfg / map q3ctf1 / unbindall
commandExpression
    : COMMAND_KEYWORD value*
    | IDENTIFIER value* // Fallback to let engine extensions run unhindered
    ;

// Shared variant parameter evaluations
value
    : STRING_LITERAL
    | NUMBER
    | IDENTIFIER
    | KNOWN_CVAR
    | ASSIGNMENT_KEYWORD
    | COMMAND_KEYWORD
    ;