parser grammar Q3MapParser;

options { tokenVocab = Q3MapLexer; }

mapFile
    : entityBlock* EOF
    ;

entityBlock
    : LBRACE entityContent* RBRACE
    ;

entityContent
    : epair
    | brushBlock
    ;

// Key-value metadata definition pairings (e.g. "classname" "worldspawn")
epair
    : key=STRING_LITERAL value=STRING_LITERAL
    ;

brushBlock
    : LBRACE faceDefinition+ RBRACE
    ;

// Complete tracking of 3 planes forming a side with alignment metrics
faceDefinition
    : planeDef planeDef planeDef TEXTURE_NAME texShiftX texShiftY texRot texScaleX texScaleY
    ;

// 3D Point coordinate array: ( X Y Z )
planeDef
    : LPAREN NUMBER NUMBER NUMBER RPAREN
    ;

// Contextual wrappers for numeric plane attributes
texShiftX : NUMBER ;
texShiftY : NUMBER ;
texRot    : NUMBER ;
texScaleX : NUMBER ;
texScaleY : NUMBER ;