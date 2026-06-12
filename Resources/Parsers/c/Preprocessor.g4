grammar Preprocessor;

// ==========================================
// PARSER RULES
// ==========================================

/* The source file is a series of elements: either a directive block, 
   a plain line of code, or an identified structural block */
sourceFile
    : element* EOF
    ;

element
    : ifdefBlock
    | structuralBlock
    | plainCodeLine
    ;

/* Recursive block matching to correctly capture nested #ifdef hierarchies */
ifdefBlock
    : IFDEF condition directiveLine* (ELSE directiveLine*)? ENDIF
    ;

condition
    : IDENTIFIER
    ;

directiveLine
    : element
    | DIRECTIVE_CONTENT
    ;

/* The "Rosetta" non-intrusive structural fallback blocks */
structuralBlock
    : STRUCTURAL_OPEN genericContent* STRUCTURAL_CLOSE
    ;

genericContent
    : structuralBlock
    | PLAIN_TEXT_LINE
    | DIRECTIVE_CONTENT
    ;

plainCodeLine
    : PLAIN_TEXT_LINE
    ;


// ==========================================
// LEXER RULES & MODES
// ==========================================

// --- DEFAULT MODE: Looking for Directives at Line Starts ---

// Match directives optionally preceded by indentation
IFDEF : ' '* '#' 'if' 'def'? ' '+ -> pushMode(DIRECTIVE_MODE);
ELSE  : ' '* '#' 'else' ' '* '\r'? '\n' ;
ENDIF : ' '* '#' 'endif' ' '* '\r'? '\n' ;

// If a line doesn't start with a directive, route it to universal block matching
LINE_START_FALLBACK : ' ' | '\t' | ~[#\r\n] -> type(PLAIN_TEXT_LINE), pushMode(UNIVERSAL_FALLBACK_MODE);

// Catch-all for stray newlines in the base stream
NEWLINE : '\r'? '\n' ;


// --- MODE 1: Extracting Directive Variables ---
mode DIRECTIVE_MODE;

IDENTIFIER : [a-zA-Z_][a-zA-Z0-9_]* ;
WS         : [ \t]+ -> channel(HIDDEN) ;
DIRECTIVE_END : '\r'? '\n' -> popMode;


// --- MODE 2: Universal Fallback Bounded Block Parsing ---
mode UNIVERSAL_FALLBACK_MODE;

/* Match typical opening brackets '{', '[', '(' or your Rosetta regex matches.
   Because ANTLR favors the longest match, we explicitly capture structural brackets. */
STRUCTURAL_OPEN
    : '{'
    | '['
    | '('
    | [ \t]* 'function' [ \t]+ [a-zA-Z_][a-zA-Z0-9_]* [ \t]* '(' [^)]* ')' // JS/PHP/Go signatures
    ;

STRUCTURAL_CLOSE
    : '}'
    | ']'
    | ')'
    ;

/* Fallback token capturing regular file code line-by-line without throwing syntax errors */
PLAIN_TEXT_LINE : [^\r\n]* '\r'? '\n' -> popMode;

// --- Add to UNIVERSAL_FALLBACK_MODE inside Preprocessor.g4 ---

// Detect Python structural headers (def, class)
PYTHON_OPEN
    : [ \t]* ('def'|'class') [ \t]+ [a-zA-Z_][a-zA-Z0-9_]* [ \t]* '(' [^)]* ')' [ \t]* ':' 
    ;

// Capture the exact whitespace prefix of ANY plain text line
PLAIN_TEXT_LINE 
    : INDENTATION_STR [^\r\n]* '\r'? '\n' -> popMode
    ;

fragment INDENTATION_STR
    : [ \t]*
    ;

