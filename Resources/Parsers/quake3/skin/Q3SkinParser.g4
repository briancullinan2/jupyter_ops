parser grammar Q3SkinParser;

options { tokenVocab = Q3SkinLexer; }

skinFile
    : skinLine* EOF
    ;

skinLine
    : SURFACE_ID COMMA ASSET_PATH? NEWLINE+
    | NEWLINE+ // Allow blank padding lines
    ;