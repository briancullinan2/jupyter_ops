// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/glsl/GLSLPreParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import GLSLPreParserListener from './GLSLPreParserListener.js';
const serializedATN = [4,1,307,243,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,1,0,5,0,
70,8,0,10,0,12,0,73,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,3,1,88,8,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,
6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,
10,1,10,1,11,1,11,1,12,1,12,5,12,127,8,12,10,12,12,12,130,9,12,1,13,1,13,
1,13,1,13,1,13,5,13,137,8,13,10,13,12,13,140,9,13,1,13,3,13,143,8,13,1,13,
1,13,1,14,1,14,1,14,1,14,1,14,5,14,152,8,14,10,14,12,14,155,9,14,1,14,3,
14,158,8,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,5,15,167,8,15,10,15,12,15,
170,9,15,1,15,3,15,173,8,15,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,18,
1,18,1,19,1,19,1,20,1,20,1,21,1,21,5,21,191,8,21,10,21,12,21,194,9,21,1,
22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,26,1,26,3,26,208,8,26,
1,26,1,26,1,27,1,27,1,27,1,27,1,27,3,27,217,8,27,1,28,1,28,1,28,1,28,3,28,
223,8,28,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,1,32,1,32,1,32,1,32,1,33,
1,33,1,33,1,33,3,33,241,8,33,1,33,0,0,34,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,0,0,236,
0,71,1,0,0,0,2,87,1,0,0,0,4,89,1,0,0,0,6,91,1,0,0,0,8,93,1,0,0,0,10,98,1,
0,0,0,12,103,1,0,0,0,14,107,1,0,0,0,16,110,1,0,0,0,18,114,1,0,0,0,20,116,
1,0,0,0,22,122,1,0,0,0,24,128,1,0,0,0,26,131,1,0,0,0,28,146,1,0,0,0,30,161,
1,0,0,0,32,176,1,0,0,0,34,180,1,0,0,0,36,182,1,0,0,0,38,184,1,0,0,0,40,186,
1,0,0,0,42,192,1,0,0,0,44,195,1,0,0,0,46,197,1,0,0,0,48,199,1,0,0,0,50,201,
1,0,0,0,52,203,1,0,0,0,54,211,1,0,0,0,56,218,1,0,0,0,58,226,1,0,0,0,60,228,
1,0,0,0,62,230,1,0,0,0,64,232,1,0,0,0,66,236,1,0,0,0,68,70,3,2,1,0,69,68,
1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,1,1,0,0,0,73,71,1,0,
0,0,74,88,3,8,4,0,75,88,3,10,5,0,76,88,3,12,6,0,77,88,3,14,7,0,78,88,3,16,
8,0,79,88,3,20,10,0,80,88,3,26,13,0,81,88,3,28,14,0,82,88,3,30,15,0,83,88,
3,32,16,0,84,88,3,54,27,0,85,88,3,64,32,0,86,88,3,66,33,0,87,74,1,0,0,0,
87,75,1,0,0,0,87,76,1,0,0,0,87,77,1,0,0,0,87,78,1,0,0,0,87,79,1,0,0,0,87,
80,1,0,0,0,87,81,1,0,0,0,87,82,1,0,0,0,87,83,1,0,0,0,87,84,1,0,0,0,87,85,
1,0,0,0,87,86,1,0,0,0,88,3,1,0,0,0,89,90,5,281,0,0,90,5,1,0,0,0,91,92,5,
277,0,0,92,7,1,0,0,0,93,94,5,230,0,0,94,95,5,259,0,0,95,96,3,40,20,0,96,
97,3,42,21,0,97,9,1,0,0,0,98,99,5,230,0,0,99,100,5,260,0,0,100,101,3,6,3,
0,101,102,3,24,12,0,102,11,1,0,0,0,103,104,5,230,0,0,104,105,5,261,0,0,105,
106,3,24,12,0,106,13,1,0,0,0,107,108,5,230,0,0,108,109,5,262,0,0,109,15,
1,0,0,0,110,111,5,230,0,0,111,112,5,263,0,0,112,113,3,18,9,0,113,17,1,0,
0,0,114,115,5,279,0,0,115,19,1,0,0,0,116,117,5,230,0,0,117,118,5,264,0,0,
118,119,3,22,11,0,119,120,5,210,0,0,120,121,3,4,2,0,121,21,1,0,0,0,122,123,
5,282,0,0,123,23,1,0,0,0,124,127,3,60,30,0,125,127,3,2,1,0,126,124,1,0,0,
0,126,125,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,25,
1,0,0,0,130,128,1,0,0,0,131,132,5,230,0,0,132,133,5,265,0,0,133,134,3,6,
3,0,134,138,3,24,12,0,135,137,3,10,5,0,136,135,1,0,0,0,137,140,1,0,0,0,138,
136,1,0,0,0,138,139,1,0,0,0,139,142,1,0,0,0,140,138,1,0,0,0,141,143,3,12,
6,0,142,141,1,0,0,0,142,143,1,0,0,0,143,144,1,0,0,0,144,145,3,14,7,0,145,
27,1,0,0,0,146,147,5,230,0,0,147,148,5,266,0,0,148,149,3,38,19,0,149,153,
3,24,12,0,150,152,3,10,5,0,151,150,1,0,0,0,152,155,1,0,0,0,153,151,1,0,0,
0,153,154,1,0,0,0,154,157,1,0,0,0,155,153,1,0,0,0,156,158,3,12,6,0,157,156,
1,0,0,0,157,158,1,0,0,0,158,159,1,0,0,0,159,160,3,14,7,0,160,29,1,0,0,0,
161,162,5,230,0,0,162,163,5,267,0,0,163,164,3,38,19,0,164,168,3,24,12,0,
165,167,3,10,5,0,166,165,1,0,0,0,167,170,1,0,0,0,168,166,1,0,0,0,168,169,
1,0,0,0,169,172,1,0,0,0,170,168,1,0,0,0,171,173,3,12,6,0,172,171,1,0,0,0,
172,173,1,0,0,0,173,174,1,0,0,0,174,175,3,14,7,0,175,31,1,0,0,0,176,177,
5,230,0,0,177,178,5,268,0,0,178,179,3,34,17,0,179,33,1,0,0,0,180,181,5,289,
0,0,181,35,1,0,0,0,182,183,5,291,0,0,183,37,1,0,0,0,184,185,5,286,0,0,185,
39,1,0,0,0,186,187,5,274,0,0,187,41,1,0,0,0,188,191,3,44,22,0,189,191,3,
36,18,0,190,188,1,0,0,0,190,189,1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,
192,193,1,0,0,0,193,43,1,0,0,0,194,192,1,0,0,0,195,196,5,292,0,0,196,45,
1,0,0,0,197,198,5,305,0,0,198,47,1,0,0,0,199,200,5,296,0,0,200,49,1,0,0,
0,201,202,5,297,0,0,202,51,1,0,0,0,203,204,5,294,0,0,204,207,5,226,0,0,205,
208,3,50,25,0,206,208,3,48,24,0,207,205,1,0,0,0,207,206,1,0,0,0,208,209,
1,0,0,0,209,210,5,241,0,0,210,53,1,0,0,0,211,212,5,230,0,0,212,216,5,269,
0,0,213,217,3,62,31,0,214,217,3,52,26,0,215,217,3,56,28,0,216,213,1,0,0,
0,216,214,1,0,0,0,216,215,1,0,0,0,217,55,1,0,0,0,218,219,5,298,0,0,219,222,
5,226,0,0,220,223,3,50,25,0,221,223,3,48,24,0,222,220,1,0,0,0,222,221,1,
0,0,0,223,224,1,0,0,0,224,225,5,241,0,0,225,57,1,0,0,0,226,227,5,306,0,0,
227,59,1,0,0,0,228,229,5,301,0,0,229,61,1,0,0,0,230,231,5,300,0,0,231,63,
1,0,0,0,232,233,5,230,0,0,233,234,5,270,0,0,234,235,3,38,19,0,235,65,1,0,
0,0,236,237,5,230,0,0,237,238,5,271,0,0,238,240,3,46,23,0,239,241,3,58,29,
0,240,239,1,0,0,0,240,241,1,0,0,0,241,67,1,0,0,0,16,71,87,126,128,138,142,
153,157,168,172,190,192,207,216,222,240];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GLSLPreParser extends antlr4.Parser {

    static grammarFileName = "GLSLPreParser.g4";
    static literalNames = [ null, "'atomic_uint'", "'attribute'", "'bool'", 
                            "'break'", "'buffer'", "'bvec2'", "'bvec3'", 
                            "'bvec4'", "'case'", "'centroid'", "'coherent'", 
                            "'const'", "'continue'", "'default'", "'discard'", 
                            "'dmat2'", "'dmat2x2'", "'dmat2x3'", "'dmat2x4'", 
                            "'dmat3'", "'dmat3x2'", "'dmat3x3'", "'dmat3x4'", 
                            "'dmat4'", "'dmat4x2'", "'dmat4x3'", "'dmat4x4'", 
                            "'do'", "'double'", "'dvec2'", "'dvec3'", "'dvec4'", 
                            "'else'", "'false'", "'flat'", "'float'", "'for'", 
                            "'highp'", "'if'", "'iimage1D'", "'iimage1DArray'", 
                            "'iimage2D'", "'iimage2DArray'", "'iimage2DMS'", 
                            "'iimage2DMSArray'", "'iimage2DRect'", "'iimage3D'", 
                            "'iimageBuffer'", "'iimageCube'", "'iimageCubeArray'", 
                            "'image1D'", "'image1DArray'", "'image2D'", 
                            "'image2DArray'", "'image2DMS'", "'image2DMSArray'", 
                            "'image2DRect'", "'image3D'", "'imageBuffer'", 
                            "'imageCube'", "'imageCubeArray'", "'in'", "'inout'", 
                            "'int'", "'invariant'", "'isampler1D'", "'isampler1DArray'", 
                            "'isampler2D'", "'isampler2DArray'", "'isampler2DMS'", 
                            "'isampler2DMSArray'", "'isampler2DRect'", "'isampler3D'", 
                            "'isamplerBuffer'", "'isamplerCube'", "'isamplerCubeArray'", 
                            "'isubpassInput'", "'isubpassInputMS'", "'itexture1D'", 
                            "'itexture1DArray'", "'itexture2D'", "'itexture2DArray'", 
                            "'itexture2DMS'", "'itexture2DMSArray'", "'itexture2DRect'", 
                            "'itexture3D'", "'itextureBuffer'", "'itextureCube'", 
                            "'itextureCubeArray'", "'ivec2'", "'ivec3'", 
                            "'ivec4'", "'layout'", "'lowp'", "'mat2'", "'mat2x2'", 
                            "'mat2x3'", "'mat2x4'", "'mat3'", "'mat3x2'", 
                            "'mat3x3'", "'mat3x4'", "'mat4'", "'mat4x2'", 
                            "'mat4x3'", "'mat4x4'", "'mediump'", "'noperspective'", 
                            "'out'", "'patch'", "'precise'", "'precision'", 
                            "'readonly'", "'restrict'", "'return'", "'sample'", 
                            "'sampler'", "'sampler1D'", "'sampler1DArray'", 
                            "'sampler1DArrayShadow'", "'sampler1DShadow'", 
                            "'sampler2D'", "'sampler2DArray'", "'sampler2DArrayShadow'", 
                            "'sampler2DMS'", "'sampler2DMSArray'", "'sampler2DRect'", 
                            "'sampler2DRectShadow'", "'sampler2DShadow'", 
                            "'sampler3D'", "'samplerBuffer'", "'samplerCube'", 
                            "'samplerCubeArray'", "'samplerCubeArrayShadow'", 
                            "'samplerCubeShadow'", "'samplerShadow'", "'shared'", 
                            "'smooth'", "'struct'", "'subpassInput'", "'subpassInputMS'", 
                            "'subroutine'", "'switch'", "'texture1D'", "'texture1DArray'", 
                            "'texture2D'", "'texture2DArray'", "'texture2DMS'", 
                            "'texture2DMSArray'", "'texture2DRect'", "'texture3D'", 
                            "'textureBuffer'", "'textureCube'", "'textureCubeArray'", 
                            "'true'", "'uimage1D'", "'uimage1DArray'", "'uimage2D'", 
                            "'uimage2DArray'", "'uimage2DMS'", "'uimage2DMSArray'", 
                            "'uimage2DRect'", "'uimage3D'", "'uimageBuffer'", 
                            "'uimageCube'", "'uimageCubeArray'", "'uint'", 
                            "'uniform'", "'usampler1D'", "'usampler1DArray'", 
                            "'usampler2D'", "'usampler2DArray'", "'usampler2DMS'", 
                            "'usampler2DMSArray'", "'usampler2DRect'", "'usampler3D'", 
                            "'usamplerBuffer'", "'usamplerCube'", "'usamplerCubeArray'", 
                            "'usubpassInput'", "'usubpassInputMS'", "'utexture1D'", 
                            "'utexture1DArray'", "'utexture2D'", "'utexture2DArray'", 
                            "'utexture2DMS'", "'utexture2DMSArray'", "'utexture2DRect'", 
                            "'utexture3D'", "'utextureBuffer'", "'utextureCube'", 
                            "'utextureCubeArray'", "'uvec2'", "'uvec3'", 
                            "'uvec4'", "'varying'", "'vec2'", "'vec3'", 
                            "'vec4'", "'void'", "'volatile'", "'while'", 
                            "'writeonly'", "'+='", "'&'", "'&='", "'&&'", 
                            "'!'", "'^'", "':'", "','", "'-'", "'--'", "'/='", 
                            "'.'", "'=='", "'='", "'>='", "'++'", "'<='", 
                            "'<'", "'<<='", "'{'", "'['", "'<<'", "'('", 
                            "'%='", "'*='", "'!='", null, "'|='", "'||'", 
                            "'%'", "'+'", "'?'", "'>'", "'>>='", "'}'", 
                            "']'", "'>>'", "')'", "';'", "'/'", "'*'", "'-='", 
                            "'~'", "'|'", "'^='", "'^^'", null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'debug'", null, "'off'", "'on'", "'optimize'", 
                            null, "'STDGL'" ];
    static symbolicNames = [ null, "ATOMIC_UINT", "ATTRIBUTE", "BOOL", "BREAK", 
                             "BUFFER", "BVEC2", "BVEC3", "BVEC4", "CASE", 
                             "CENTROID", "COHERENT", "CONST", "CONTINUE", 
                             "DEFAULT", "DISCARD", "DMAT2", "DMAT2X2", "DMAT2X3", 
                             "DMAT2X4", "DMAT3", "DMAT3X2", "DMAT3X3", "DMAT3X4", 
                             "DMAT4", "DMAT4X2", "DMAT4X3", "DMAT4X4", "DO", 
                             "DOUBLE", "DVEC2", "DVEC3", "DVEC4", "ELSE", 
                             "FALSE", "FLAT", "FLOAT", "FOR", "HIGHP", "IF", 
                             "IIMAGE1D", "IIMAGE1DARRAY", "IIMAGE2D", "IIMAGE2DARRAY", 
                             "IIMAGE2DMS", "IIMAGE2DMSARRAY", "IIMAGE2DRECT", 
                             "IIMAGE3D", "IIMAGEBUFFER", "IIMAGECUBE", "IIMAGECUBEARRAY", 
                             "IMAGE1D", "IMAGE1DARRAY", "IMAGE2D", "IMAGE2DARRAY", 
                             "IMAGE2DMS", "IMAGE2DMSARRAY", "IMAGE2DRECT", 
                             "IMAGE3D", "IMAGEBUFFER", "IMAGECUBE", "IMAGECUBEARRAY", 
                             "IN", "INOUT", "INT", "INVARIANT", "ISAMPLER1D", 
                             "ISAMPLER1DARRAY", "ISAMPLER2D", "ISAMPLER2DARRAY", 
                             "ISAMPLER2DMS", "ISAMPLER2DMSARRAY", "ISAMPLER2DRECT", 
                             "ISAMPLER3D", "ISAMPLERBUFFER", "ISAMPLERCUBE", 
                             "ISAMPLERCUBEARRAY", "ISUBPASSINPUT", "ISUBPASSINPUTMS", 
                             "ITEXTURE1D", "ITEXTURE1DARRAY", "ITEXTURE2D", 
                             "ITEXTURE2DARRAY", "ITEXTURE2DMS", "ITEXTURE2DMSARRAY", 
                             "ITEXTURE2DRECT", "ITEXTURE3D", "ITEXTUREBUFFER", 
                             "ITEXTURECUBE", "ITEXTURECUBEARRAY", "IVEC2", 
                             "IVEC3", "IVEC4", "LAYOUT", "LOWP", "MAT2", 
                             "MAT2X2", "MAT2X3", "MAT2X4", "MAT3", "MAT3X2", 
                             "MAT3X3", "MAT3X4", "MAT4", "MAT4X2", "MAT4X3", 
                             "MAT4X4", "MEDIUMP", "NOPERSPECTIVE", "OUT", 
                             "PATCH", "PRECISE", "PRECISION", "READONLY", 
                             "RESTRICT", "RETURN", "SAMPLE", "SAMPLER", 
                             "SAMPLER1D", "SAMPLER1DARRAY", "SAMPLER1DARRAYSHADOW", 
                             "SAMPLER1DSHADOW", "SAMPLER2D", "SAMPLER2DARRAY", 
                             "SAMPLER2DARRAYSHADOW", "SAMPLER2DMS", "SAMPLER2DMSARRAY", 
                             "SAMPLER2DRECT", "SAMPLER2DRECTSHADOW", "SAMPLER2DSHADOW", 
                             "SAMPLER3D", "SAMPLERBUFFER", "SAMPLERCUBE", 
                             "SAMPLERCUBEARRAY", "SAMPLERCUBEARRAYSHADOW", 
                             "SAMPLERCUBESHADOW", "SAMPLERSHADOW", "SHARED", 
                             "SMOOTH", "STRUCT", "SUBPASSINPUT", "SUBPASSINPUTMS", 
                             "SUBROUTINE", "SWITCH", "TEXTURE1D", "TEXTURE1DARRAY", 
                             "TEXTURE2D", "TEXTURE2DARRAY", "TEXTURE2DMS", 
                             "TEXTURE2DMSARRAY", "TEXTURE2DRECT", "TEXTURE3D", 
                             "TEXTUREBUFFER", "TEXTURECUBE", "TEXTURECUBEARRAY", 
                             "TRUE", "UIMAGE1D", "UIMAGE1DARRAY", "UIMAGE2D", 
                             "UIMAGE2DARRAY", "UIMAGE2DMS", "UIMAGE2DMSARRAY", 
                             "UIMAGE2DRECT", "UIMAGE3D", "UIMAGEBUFFER", 
                             "UIMAGECUBE", "UIMAGECUBEARRAY", "UINT", "UNIFORM", 
                             "USAMPLER1D", "USAMPLER1DARRAY", "USAMPLER2D", 
                             "USAMPLER2DARRAY", "USAMPLER2DMS", "USAMPLER2DMSARRAY", 
                             "USAMPLER2DRECT", "USAMPLER3D", "USAMPLERBUFFER", 
                             "USAMPLERCUBE", "USAMPLERCUBEARRAY", "USUBPASSINPUT", 
                             "USUBPASSINPUTMS", "UTEXTURE1D", "UTEXTURE1DARRAY", 
                             "UTEXTURE2D", "UTEXTURE2DARRAY", "UTEXTURE2DMS", 
                             "UTEXTURE2DMSARRAY", "UTEXTURE2DRECT", "UTEXTURE3D", 
                             "UTEXTUREBUFFER", "UTEXTURECUBE", "UTEXTURECUBEARRAY", 
                             "UVEC2", "UVEC3", "UVEC4", "VARYING", "VEC2", 
                             "VEC3", "VEC4", "VOID", "VOLATILE", "WHILE", 
                             "WRITEONLY", "ADD_ASSIGN", "AMPERSAND", "AND_ASSIGN", 
                             "AND_OP", "BANG", "CARET", "COLON", "COMMA", 
                             "DASH", "DEC_OP", "DIV_ASSIGN", "DOT", "EQ_OP", 
                             "EQUAL", "GE_OP", "INC_OP", "LE_OP", "LEFT_ANGLE", 
                             "LEFT_ASSIGN", "LEFT_BRACE", "LEFT_BRACKET", 
                             "LEFT_OP", "LEFT_PAREN", "MOD_ASSIGN", "MUL_ASSIGN", 
                             "NE_OP", "NUMBER_SIGN", "OR_ASSIGN", "OR_OP", 
                             "PERCENT", "PLUS", "QUESTION", "RIGHT_ANGLE", 
                             "RIGHT_ASSIGN", "RIGHT_BRACE", "RIGHT_BRACKET", 
                             "RIGHT_OP", "RIGHT_PAREN", "SEMICOLON", "SLASH", 
                             "STAR", "SUB_ASSIGN", "TILDE", "VERTICAL_BAR", 
                             "XOR_ASSIGN", "XOR_OP", "DOUBLECONSTANT", "FLOATCONSTANT", 
                             "INTCONSTANT", "UINTCONSTANT", "BLOCK_COMMENT", 
                             "LINE_COMMENT", "LINE_CONTINUATION", "IDENTIFIER", 
                             "WHITE_SPACE", "DEFINE_DIRECTIVE", "ELIF_DIRECTIVE", 
                             "ELSE_DIRECTIVE", "ENDIF_DIRECTIVE", "ERROR_DIRECTIVE", 
                             "EXTENSION_DIRECTIVE", "IF_DIRECTIVE", "IFDEF_DIRECTIVE", 
                             "IFNDEF_DIRECTIVE", "LINE_DIRECTIVE", "PRAGMA_DIRECTIVE", 
                             "UNDEF_DIRECTIVE", "VERSION_DIRECTIVE", "SPACE_TAB_0", 
                             "NEWLINE_0", "MACRO_NAME", "NEWLINE_1", "SPACE_TAB_1", 
                             "CONSTANT_EXPRESSION", "NEWLINE_2", "ERROR_MESSAGE", 
                             "NEWLINE_3", "BEHAVIOR", "EXTENSION_NAME", 
                             "NEWLINE_4", "SPACE_TAB_2", "NEWLINE_5", "MACRO_IDENTIFIER", 
                             "NEWLINE_6", "SPACE_TAB_3", "LINE_EXPRESSION", 
                             "NEWLINE_7", "MACRO_ESC_NEWLINE", "MACRO_TEXT", 
                             "NEWLINE_8", "DEBUG", "NEWLINE_9", "OFF", "ON", 
                             "OPTIMIZE", "SPACE_TAB_5", "STDGL", "PROGRAM_TEXT", 
                             "NEWLINE_10", "SPACE_TAB_6", "NEWLINE_11", 
                             "NUMBER", "PROFILE", "SPACE_TAB_7" ];
    static ruleNames = [ "translation_unit", "compiler_directive", "behavior", 
                         "constant_expression", "define_directive", "elif_directive", 
                         "else_directive", "endif_directive", "error_directive", 
                         "error_message", "extension_directive", "extension_name", 
                         "group_of_lines", "if_directive", "ifdef_directive", 
                         "ifndef_directive", "line_directive", "line_expression", 
                         "macro_esc_newline", "macro_identifier", "macro_name", 
                         "macro_text", "macro_text_", "number", "off", "on", 
                         "pragma_debug", "pragma_directive", "pragma_optimize", 
                         "profile", "program_text", "stdgl", "undef_directive", 
                         "version_directive" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GLSLPreParser.ruleNames;
        this.literalNames = GLSLPreParser.literalNames;
        this.symbolicNames = GLSLPreParser.symbolicNames;
    }



	translation_unit() {
	    let localctx = new Translation_unitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GLSLPreParser.RULE_translation_unit);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===230) {
	            this.state = 68;
	            this.compiler_directive();
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compiler_directive() {
	    let localctx = new Compiler_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GLSLPreParser.RULE_compiler_directive);
	    try {
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 74;
	            this.define_directive();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            this.elif_directive();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 76;
	            this.else_directive();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 77;
	            this.endif_directive();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 78;
	            this.error_directive();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 79;
	            this.extension_directive();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 80;
	            this.if_directive();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 81;
	            this.ifdef_directive();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 82;
	            this.ifndef_directive();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 83;
	            this.line_directive();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 84;
	            this.pragma_directive();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 85;
	            this.undef_directive();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 86;
	            this.version_directive();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	behavior() {
	    let localctx = new BehaviorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GLSLPreParser.RULE_behavior);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(GLSLPreParser.BEHAVIOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant_expression() {
	    let localctx = new Constant_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GLSLPreParser.RULE_constant_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(GLSLPreParser.CONSTANT_EXPRESSION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	define_directive() {
	    let localctx = new Define_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GLSLPreParser.RULE_define_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(GLSLPreParser.NUMBER_SIGN);
	        this.state = 94;
	        this.match(GLSLPreParser.DEFINE_DIRECTIVE);
	        this.state = 95;
	        this.macro_name();
	        this.state = 96;
	        this.macro_text();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elif_directive() {
	    let localctx = new Elif_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, GLSLPreParser.RULE_elif_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(GLSLPreParser.NUMBER_SIGN);
	        this.state = 99;
	        this.match(GLSLPreParser.ELIF_DIRECTIVE);
	        this.state = 100;
	        this.constant_expression();
	        this.state = 101;
	        this.group_of_lines();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	else_directive() {
	    let localctx = new Else_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, GLSLPreParser.RULE_else_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(GLSLPreParser.NUMBER_SIGN);
	        this.state = 104;
	        this.match(GLSLPreParser.ELSE_DIRECTIVE);
	        this.state = 105;
	        this.group_of_lines();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	endif_directive() {
	    let localctx = new Endif_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, GLSLPreParser.RULE_endif_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(GLSLPreParser.NUMBER_SIGN);
	        this.state = 108;
	        this.match(GLSLPreParser.ENDIF_DIRECTIVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	error_directive() {
	    let localctx = new Error_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, GLSLPreParser.RULE_error_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(GLSLPreParser.NUMBER_SIGN);
	        this.state = 111;
	        this.match(GLSLPreParser.ERROR_DIRECTIVE);
	        this.state = 112;
	        this.error_message();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	error_message() {
	    let localctx = new Error_messageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, GLSLPreParser.RULE_error_message);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(GLSLPreParser.ERROR_MESSAGE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	extension_directive() {
	    let localctx = new Extension_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, GLSLPreParser.RULE_extension_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(GLSLPreParser.NUMBER_SIGN);
	        this.state = 117;
	        this.match(GLSLPreParser.EXTENSION_DIRECTIVE);
	        this.state = 118;
	        this.extension_name();
	        this.state = 119;
	        this.match(GLSLPreParser.COLON);
	        this.state = 120;
	        this.behavior();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	extension_name() {
	    let localctx = new Extension_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, GLSLPreParser.RULE_extension_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(GLSLPreParser.EXTENSION_NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	group_of_lines() {
	    let localctx = new Group_of_linesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, GLSLPreParser.RULE_group_of_lines);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 126;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 301:
	                    this.state = 124;
	                    this.program_text();
	                    break;
	                case 230:
	                    this.state = 125;
	                    this.compiler_directive();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 130;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_directive() {
	    let localctx = new If_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, GLSLPreParser.RULE_if_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(GLSLPreParser.NUMBER_SIGN);
	        this.state = 132;
	        this.match(GLSLPreParser.IF_DIRECTIVE);
	        this.state = 133;
	        this.constant_expression();
	        this.state = 134;
	        this.group_of_lines();
	        this.state = 138;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 135;
	                this.elif_directive(); 
	            }
	            this.state = 140;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	        this.state = 142;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 141;
	            this.else_directive();

	        }
	        this.state = 144;
	        this.endif_directive();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifdef_directive() {
	    let localctx = new Ifdef_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, GLSLPreParser.RULE_ifdef_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(GLSLPreParser.NUMBER_SIGN);
	        this.state = 147;
	        this.match(GLSLPreParser.IFDEF_DIRECTIVE);
	        this.state = 148;
	        this.macro_identifier();
	        this.state = 149;
	        this.group_of_lines();
	        this.state = 153;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 150;
	                this.elif_directive(); 
	            }
	            this.state = 155;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	        this.state = 157;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 156;
	            this.else_directive();

	        }
	        this.state = 159;
	        this.endif_directive();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifndef_directive() {
	    let localctx = new Ifndef_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, GLSLPreParser.RULE_ifndef_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(GLSLPreParser.NUMBER_SIGN);
	        this.state = 162;
	        this.match(GLSLPreParser.IFNDEF_DIRECTIVE);
	        this.state = 163;
	        this.macro_identifier();
	        this.state = 164;
	        this.group_of_lines();
	        this.state = 168;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 165;
	                this.elif_directive(); 
	            }
	            this.state = 170;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	        this.state = 172;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 171;
	            this.else_directive();

	        }
	        this.state = 174;
	        this.endif_directive();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line_directive() {
	    let localctx = new Line_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, GLSLPreParser.RULE_line_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(GLSLPreParser.NUMBER_SIGN);
	        this.state = 177;
	        this.match(GLSLPreParser.LINE_DIRECTIVE);
	        this.state = 178;
	        this.line_expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line_expression() {
	    let localctx = new Line_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, GLSLPreParser.RULE_line_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.match(GLSLPreParser.LINE_EXPRESSION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	macro_esc_newline() {
	    let localctx = new Macro_esc_newlineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, GLSLPreParser.RULE_macro_esc_newline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(GLSLPreParser.MACRO_ESC_NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	macro_identifier() {
	    let localctx = new Macro_identifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, GLSLPreParser.RULE_macro_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(GLSLPreParser.MACRO_IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	macro_name() {
	    let localctx = new Macro_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, GLSLPreParser.RULE_macro_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(GLSLPreParser.MACRO_NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	macro_text() {
	    let localctx = new Macro_textContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, GLSLPreParser.RULE_macro_text);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===291 || _la===292) {
	            this.state = 190;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 292:
	                this.state = 188;
	                this.macro_text_();
	                break;
	            case 291:
	                this.state = 189;
	                this.macro_esc_newline();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 194;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	macro_text_() {
	    let localctx = new Macro_text_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, GLSLPreParser.RULE_macro_text_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(GLSLPreParser.MACRO_TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, GLSLPreParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.match(GLSLPreParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	off() {
	    let localctx = new OffContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, GLSLPreParser.RULE_off);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(GLSLPreParser.OFF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	on() {
	    let localctx = new OnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, GLSLPreParser.RULE_on);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(GLSLPreParser.ON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pragma_debug() {
	    let localctx = new Pragma_debugContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, GLSLPreParser.RULE_pragma_debug);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.match(GLSLPreParser.DEBUG);
	        this.state = 204;
	        this.match(GLSLPreParser.LEFT_PAREN);
	        this.state = 207;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 297:
	            this.state = 205;
	            this.on();
	            break;
	        case 296:
	            this.state = 206;
	            this.off();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 209;
	        this.match(GLSLPreParser.RIGHT_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pragma_directive() {
	    let localctx = new Pragma_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, GLSLPreParser.RULE_pragma_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        this.match(GLSLPreParser.NUMBER_SIGN);
	        this.state = 212;
	        this.match(GLSLPreParser.PRAGMA_DIRECTIVE);
	        this.state = 216;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 300:
	            this.state = 213;
	            this.stdgl();
	            break;
	        case 294:
	            this.state = 214;
	            this.pragma_debug();
	            break;
	        case 298:
	            this.state = 215;
	            this.pragma_optimize();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pragma_optimize() {
	    let localctx = new Pragma_optimizeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, GLSLPreParser.RULE_pragma_optimize);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        this.match(GLSLPreParser.OPTIMIZE);
	        this.state = 219;
	        this.match(GLSLPreParser.LEFT_PAREN);
	        this.state = 222;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 297:
	            this.state = 220;
	            this.on();
	            break;
	        case 296:
	            this.state = 221;
	            this.off();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 224;
	        this.match(GLSLPreParser.RIGHT_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	profile() {
	    let localctx = new ProfileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, GLSLPreParser.RULE_profile);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(GLSLPreParser.PROFILE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	program_text() {
	    let localctx = new Program_textContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, GLSLPreParser.RULE_program_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(GLSLPreParser.PROGRAM_TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stdgl() {
	    let localctx = new StdglContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, GLSLPreParser.RULE_stdgl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.match(GLSLPreParser.STDGL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	undef_directive() {
	    let localctx = new Undef_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, GLSLPreParser.RULE_undef_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(GLSLPreParser.NUMBER_SIGN);
	        this.state = 233;
	        this.match(GLSLPreParser.UNDEF_DIRECTIVE);
	        this.state = 234;
	        this.macro_identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	version_directive() {
	    let localctx = new Version_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, GLSLPreParser.RULE_version_directive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.match(GLSLPreParser.NUMBER_SIGN);
	        this.state = 237;
	        this.match(GLSLPreParser.VERSION_DIRECTIVE);
	        this.state = 238;
	        this.number();
	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===306) {
	            this.state = 239;
	            this.profile();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

GLSLPreParser.EOF = antlr4.Token.EOF;
GLSLPreParser.ATOMIC_UINT = 1;
GLSLPreParser.ATTRIBUTE = 2;
GLSLPreParser.BOOL = 3;
GLSLPreParser.BREAK = 4;
GLSLPreParser.BUFFER = 5;
GLSLPreParser.BVEC2 = 6;
GLSLPreParser.BVEC3 = 7;
GLSLPreParser.BVEC4 = 8;
GLSLPreParser.CASE = 9;
GLSLPreParser.CENTROID = 10;
GLSLPreParser.COHERENT = 11;
GLSLPreParser.CONST = 12;
GLSLPreParser.CONTINUE = 13;
GLSLPreParser.DEFAULT = 14;
GLSLPreParser.DISCARD = 15;
GLSLPreParser.DMAT2 = 16;
GLSLPreParser.DMAT2X2 = 17;
GLSLPreParser.DMAT2X3 = 18;
GLSLPreParser.DMAT2X4 = 19;
GLSLPreParser.DMAT3 = 20;
GLSLPreParser.DMAT3X2 = 21;
GLSLPreParser.DMAT3X3 = 22;
GLSLPreParser.DMAT3X4 = 23;
GLSLPreParser.DMAT4 = 24;
GLSLPreParser.DMAT4X2 = 25;
GLSLPreParser.DMAT4X3 = 26;
GLSLPreParser.DMAT4X4 = 27;
GLSLPreParser.DO = 28;
GLSLPreParser.DOUBLE = 29;
GLSLPreParser.DVEC2 = 30;
GLSLPreParser.DVEC3 = 31;
GLSLPreParser.DVEC4 = 32;
GLSLPreParser.ELSE = 33;
GLSLPreParser.FALSE = 34;
GLSLPreParser.FLAT = 35;
GLSLPreParser.FLOAT = 36;
GLSLPreParser.FOR = 37;
GLSLPreParser.HIGHP = 38;
GLSLPreParser.IF = 39;
GLSLPreParser.IIMAGE1D = 40;
GLSLPreParser.IIMAGE1DARRAY = 41;
GLSLPreParser.IIMAGE2D = 42;
GLSLPreParser.IIMAGE2DARRAY = 43;
GLSLPreParser.IIMAGE2DMS = 44;
GLSLPreParser.IIMAGE2DMSARRAY = 45;
GLSLPreParser.IIMAGE2DRECT = 46;
GLSLPreParser.IIMAGE3D = 47;
GLSLPreParser.IIMAGEBUFFER = 48;
GLSLPreParser.IIMAGECUBE = 49;
GLSLPreParser.IIMAGECUBEARRAY = 50;
GLSLPreParser.IMAGE1D = 51;
GLSLPreParser.IMAGE1DARRAY = 52;
GLSLPreParser.IMAGE2D = 53;
GLSLPreParser.IMAGE2DARRAY = 54;
GLSLPreParser.IMAGE2DMS = 55;
GLSLPreParser.IMAGE2DMSARRAY = 56;
GLSLPreParser.IMAGE2DRECT = 57;
GLSLPreParser.IMAGE3D = 58;
GLSLPreParser.IMAGEBUFFER = 59;
GLSLPreParser.IMAGECUBE = 60;
GLSLPreParser.IMAGECUBEARRAY = 61;
GLSLPreParser.IN = 62;
GLSLPreParser.INOUT = 63;
GLSLPreParser.INT = 64;
GLSLPreParser.INVARIANT = 65;
GLSLPreParser.ISAMPLER1D = 66;
GLSLPreParser.ISAMPLER1DARRAY = 67;
GLSLPreParser.ISAMPLER2D = 68;
GLSLPreParser.ISAMPLER2DARRAY = 69;
GLSLPreParser.ISAMPLER2DMS = 70;
GLSLPreParser.ISAMPLER2DMSARRAY = 71;
GLSLPreParser.ISAMPLER2DRECT = 72;
GLSLPreParser.ISAMPLER3D = 73;
GLSLPreParser.ISAMPLERBUFFER = 74;
GLSLPreParser.ISAMPLERCUBE = 75;
GLSLPreParser.ISAMPLERCUBEARRAY = 76;
GLSLPreParser.ISUBPASSINPUT = 77;
GLSLPreParser.ISUBPASSINPUTMS = 78;
GLSLPreParser.ITEXTURE1D = 79;
GLSLPreParser.ITEXTURE1DARRAY = 80;
GLSLPreParser.ITEXTURE2D = 81;
GLSLPreParser.ITEXTURE2DARRAY = 82;
GLSLPreParser.ITEXTURE2DMS = 83;
GLSLPreParser.ITEXTURE2DMSARRAY = 84;
GLSLPreParser.ITEXTURE2DRECT = 85;
GLSLPreParser.ITEXTURE3D = 86;
GLSLPreParser.ITEXTUREBUFFER = 87;
GLSLPreParser.ITEXTURECUBE = 88;
GLSLPreParser.ITEXTURECUBEARRAY = 89;
GLSLPreParser.IVEC2 = 90;
GLSLPreParser.IVEC3 = 91;
GLSLPreParser.IVEC4 = 92;
GLSLPreParser.LAYOUT = 93;
GLSLPreParser.LOWP = 94;
GLSLPreParser.MAT2 = 95;
GLSLPreParser.MAT2X2 = 96;
GLSLPreParser.MAT2X3 = 97;
GLSLPreParser.MAT2X4 = 98;
GLSLPreParser.MAT3 = 99;
GLSLPreParser.MAT3X2 = 100;
GLSLPreParser.MAT3X3 = 101;
GLSLPreParser.MAT3X4 = 102;
GLSLPreParser.MAT4 = 103;
GLSLPreParser.MAT4X2 = 104;
GLSLPreParser.MAT4X3 = 105;
GLSLPreParser.MAT4X4 = 106;
GLSLPreParser.MEDIUMP = 107;
GLSLPreParser.NOPERSPECTIVE = 108;
GLSLPreParser.OUT = 109;
GLSLPreParser.PATCH = 110;
GLSLPreParser.PRECISE = 111;
GLSLPreParser.PRECISION = 112;
GLSLPreParser.READONLY = 113;
GLSLPreParser.RESTRICT = 114;
GLSLPreParser.RETURN = 115;
GLSLPreParser.SAMPLE = 116;
GLSLPreParser.SAMPLER = 117;
GLSLPreParser.SAMPLER1D = 118;
GLSLPreParser.SAMPLER1DARRAY = 119;
GLSLPreParser.SAMPLER1DARRAYSHADOW = 120;
GLSLPreParser.SAMPLER1DSHADOW = 121;
GLSLPreParser.SAMPLER2D = 122;
GLSLPreParser.SAMPLER2DARRAY = 123;
GLSLPreParser.SAMPLER2DARRAYSHADOW = 124;
GLSLPreParser.SAMPLER2DMS = 125;
GLSLPreParser.SAMPLER2DMSARRAY = 126;
GLSLPreParser.SAMPLER2DRECT = 127;
GLSLPreParser.SAMPLER2DRECTSHADOW = 128;
GLSLPreParser.SAMPLER2DSHADOW = 129;
GLSLPreParser.SAMPLER3D = 130;
GLSLPreParser.SAMPLERBUFFER = 131;
GLSLPreParser.SAMPLERCUBE = 132;
GLSLPreParser.SAMPLERCUBEARRAY = 133;
GLSLPreParser.SAMPLERCUBEARRAYSHADOW = 134;
GLSLPreParser.SAMPLERCUBESHADOW = 135;
GLSLPreParser.SAMPLERSHADOW = 136;
GLSLPreParser.SHARED = 137;
GLSLPreParser.SMOOTH = 138;
GLSLPreParser.STRUCT = 139;
GLSLPreParser.SUBPASSINPUT = 140;
GLSLPreParser.SUBPASSINPUTMS = 141;
GLSLPreParser.SUBROUTINE = 142;
GLSLPreParser.SWITCH = 143;
GLSLPreParser.TEXTURE1D = 144;
GLSLPreParser.TEXTURE1DARRAY = 145;
GLSLPreParser.TEXTURE2D = 146;
GLSLPreParser.TEXTURE2DARRAY = 147;
GLSLPreParser.TEXTURE2DMS = 148;
GLSLPreParser.TEXTURE2DMSARRAY = 149;
GLSLPreParser.TEXTURE2DRECT = 150;
GLSLPreParser.TEXTURE3D = 151;
GLSLPreParser.TEXTUREBUFFER = 152;
GLSLPreParser.TEXTURECUBE = 153;
GLSLPreParser.TEXTURECUBEARRAY = 154;
GLSLPreParser.TRUE = 155;
GLSLPreParser.UIMAGE1D = 156;
GLSLPreParser.UIMAGE1DARRAY = 157;
GLSLPreParser.UIMAGE2D = 158;
GLSLPreParser.UIMAGE2DARRAY = 159;
GLSLPreParser.UIMAGE2DMS = 160;
GLSLPreParser.UIMAGE2DMSARRAY = 161;
GLSLPreParser.UIMAGE2DRECT = 162;
GLSLPreParser.UIMAGE3D = 163;
GLSLPreParser.UIMAGEBUFFER = 164;
GLSLPreParser.UIMAGECUBE = 165;
GLSLPreParser.UIMAGECUBEARRAY = 166;
GLSLPreParser.UINT = 167;
GLSLPreParser.UNIFORM = 168;
GLSLPreParser.USAMPLER1D = 169;
GLSLPreParser.USAMPLER1DARRAY = 170;
GLSLPreParser.USAMPLER2D = 171;
GLSLPreParser.USAMPLER2DARRAY = 172;
GLSLPreParser.USAMPLER2DMS = 173;
GLSLPreParser.USAMPLER2DMSARRAY = 174;
GLSLPreParser.USAMPLER2DRECT = 175;
GLSLPreParser.USAMPLER3D = 176;
GLSLPreParser.USAMPLERBUFFER = 177;
GLSLPreParser.USAMPLERCUBE = 178;
GLSLPreParser.USAMPLERCUBEARRAY = 179;
GLSLPreParser.USUBPASSINPUT = 180;
GLSLPreParser.USUBPASSINPUTMS = 181;
GLSLPreParser.UTEXTURE1D = 182;
GLSLPreParser.UTEXTURE1DARRAY = 183;
GLSLPreParser.UTEXTURE2D = 184;
GLSLPreParser.UTEXTURE2DARRAY = 185;
GLSLPreParser.UTEXTURE2DMS = 186;
GLSLPreParser.UTEXTURE2DMSARRAY = 187;
GLSLPreParser.UTEXTURE2DRECT = 188;
GLSLPreParser.UTEXTURE3D = 189;
GLSLPreParser.UTEXTUREBUFFER = 190;
GLSLPreParser.UTEXTURECUBE = 191;
GLSLPreParser.UTEXTURECUBEARRAY = 192;
GLSLPreParser.UVEC2 = 193;
GLSLPreParser.UVEC3 = 194;
GLSLPreParser.UVEC4 = 195;
GLSLPreParser.VARYING = 196;
GLSLPreParser.VEC2 = 197;
GLSLPreParser.VEC3 = 198;
GLSLPreParser.VEC4 = 199;
GLSLPreParser.VOID = 200;
GLSLPreParser.VOLATILE = 201;
GLSLPreParser.WHILE = 202;
GLSLPreParser.WRITEONLY = 203;
GLSLPreParser.ADD_ASSIGN = 204;
GLSLPreParser.AMPERSAND = 205;
GLSLPreParser.AND_ASSIGN = 206;
GLSLPreParser.AND_OP = 207;
GLSLPreParser.BANG = 208;
GLSLPreParser.CARET = 209;
GLSLPreParser.COLON = 210;
GLSLPreParser.COMMA = 211;
GLSLPreParser.DASH = 212;
GLSLPreParser.DEC_OP = 213;
GLSLPreParser.DIV_ASSIGN = 214;
GLSLPreParser.DOT = 215;
GLSLPreParser.EQ_OP = 216;
GLSLPreParser.EQUAL = 217;
GLSLPreParser.GE_OP = 218;
GLSLPreParser.INC_OP = 219;
GLSLPreParser.LE_OP = 220;
GLSLPreParser.LEFT_ANGLE = 221;
GLSLPreParser.LEFT_ASSIGN = 222;
GLSLPreParser.LEFT_BRACE = 223;
GLSLPreParser.LEFT_BRACKET = 224;
GLSLPreParser.LEFT_OP = 225;
GLSLPreParser.LEFT_PAREN = 226;
GLSLPreParser.MOD_ASSIGN = 227;
GLSLPreParser.MUL_ASSIGN = 228;
GLSLPreParser.NE_OP = 229;
GLSLPreParser.NUMBER_SIGN = 230;
GLSLPreParser.OR_ASSIGN = 231;
GLSLPreParser.OR_OP = 232;
GLSLPreParser.PERCENT = 233;
GLSLPreParser.PLUS = 234;
GLSLPreParser.QUESTION = 235;
GLSLPreParser.RIGHT_ANGLE = 236;
GLSLPreParser.RIGHT_ASSIGN = 237;
GLSLPreParser.RIGHT_BRACE = 238;
GLSLPreParser.RIGHT_BRACKET = 239;
GLSLPreParser.RIGHT_OP = 240;
GLSLPreParser.RIGHT_PAREN = 241;
GLSLPreParser.SEMICOLON = 242;
GLSLPreParser.SLASH = 243;
GLSLPreParser.STAR = 244;
GLSLPreParser.SUB_ASSIGN = 245;
GLSLPreParser.TILDE = 246;
GLSLPreParser.VERTICAL_BAR = 247;
GLSLPreParser.XOR_ASSIGN = 248;
GLSLPreParser.XOR_OP = 249;
GLSLPreParser.DOUBLECONSTANT = 250;
GLSLPreParser.FLOATCONSTANT = 251;
GLSLPreParser.INTCONSTANT = 252;
GLSLPreParser.UINTCONSTANT = 253;
GLSLPreParser.BLOCK_COMMENT = 254;
GLSLPreParser.LINE_COMMENT = 255;
GLSLPreParser.LINE_CONTINUATION = 256;
GLSLPreParser.IDENTIFIER = 257;
GLSLPreParser.WHITE_SPACE = 258;
GLSLPreParser.DEFINE_DIRECTIVE = 259;
GLSLPreParser.ELIF_DIRECTIVE = 260;
GLSLPreParser.ELSE_DIRECTIVE = 261;
GLSLPreParser.ENDIF_DIRECTIVE = 262;
GLSLPreParser.ERROR_DIRECTIVE = 263;
GLSLPreParser.EXTENSION_DIRECTIVE = 264;
GLSLPreParser.IF_DIRECTIVE = 265;
GLSLPreParser.IFDEF_DIRECTIVE = 266;
GLSLPreParser.IFNDEF_DIRECTIVE = 267;
GLSLPreParser.LINE_DIRECTIVE = 268;
GLSLPreParser.PRAGMA_DIRECTIVE = 269;
GLSLPreParser.UNDEF_DIRECTIVE = 270;
GLSLPreParser.VERSION_DIRECTIVE = 271;
GLSLPreParser.SPACE_TAB_0 = 272;
GLSLPreParser.NEWLINE_0 = 273;
GLSLPreParser.MACRO_NAME = 274;
GLSLPreParser.NEWLINE_1 = 275;
GLSLPreParser.SPACE_TAB_1 = 276;
GLSLPreParser.CONSTANT_EXPRESSION = 277;
GLSLPreParser.NEWLINE_2 = 278;
GLSLPreParser.ERROR_MESSAGE = 279;
GLSLPreParser.NEWLINE_3 = 280;
GLSLPreParser.BEHAVIOR = 281;
GLSLPreParser.EXTENSION_NAME = 282;
GLSLPreParser.NEWLINE_4 = 283;
GLSLPreParser.SPACE_TAB_2 = 284;
GLSLPreParser.NEWLINE_5 = 285;
GLSLPreParser.MACRO_IDENTIFIER = 286;
GLSLPreParser.NEWLINE_6 = 287;
GLSLPreParser.SPACE_TAB_3 = 288;
GLSLPreParser.LINE_EXPRESSION = 289;
GLSLPreParser.NEWLINE_7 = 290;
GLSLPreParser.MACRO_ESC_NEWLINE = 291;
GLSLPreParser.MACRO_TEXT = 292;
GLSLPreParser.NEWLINE_8 = 293;
GLSLPreParser.DEBUG = 294;
GLSLPreParser.NEWLINE_9 = 295;
GLSLPreParser.OFF = 296;
GLSLPreParser.ON = 297;
GLSLPreParser.OPTIMIZE = 298;
GLSLPreParser.SPACE_TAB_5 = 299;
GLSLPreParser.STDGL = 300;
GLSLPreParser.PROGRAM_TEXT = 301;
GLSLPreParser.NEWLINE_10 = 302;
GLSLPreParser.SPACE_TAB_6 = 303;
GLSLPreParser.NEWLINE_11 = 304;
GLSLPreParser.NUMBER = 305;
GLSLPreParser.PROFILE = 306;
GLSLPreParser.SPACE_TAB_7 = 307;

GLSLPreParser.RULE_translation_unit = 0;
GLSLPreParser.RULE_compiler_directive = 1;
GLSLPreParser.RULE_behavior = 2;
GLSLPreParser.RULE_constant_expression = 3;
GLSLPreParser.RULE_define_directive = 4;
GLSLPreParser.RULE_elif_directive = 5;
GLSLPreParser.RULE_else_directive = 6;
GLSLPreParser.RULE_endif_directive = 7;
GLSLPreParser.RULE_error_directive = 8;
GLSLPreParser.RULE_error_message = 9;
GLSLPreParser.RULE_extension_directive = 10;
GLSLPreParser.RULE_extension_name = 11;
GLSLPreParser.RULE_group_of_lines = 12;
GLSLPreParser.RULE_if_directive = 13;
GLSLPreParser.RULE_ifdef_directive = 14;
GLSLPreParser.RULE_ifndef_directive = 15;
GLSLPreParser.RULE_line_directive = 16;
GLSLPreParser.RULE_line_expression = 17;
GLSLPreParser.RULE_macro_esc_newline = 18;
GLSLPreParser.RULE_macro_identifier = 19;
GLSLPreParser.RULE_macro_name = 20;
GLSLPreParser.RULE_macro_text = 21;
GLSLPreParser.RULE_macro_text_ = 22;
GLSLPreParser.RULE_number = 23;
GLSLPreParser.RULE_off = 24;
GLSLPreParser.RULE_on = 25;
GLSLPreParser.RULE_pragma_debug = 26;
GLSLPreParser.RULE_pragma_directive = 27;
GLSLPreParser.RULE_pragma_optimize = 28;
GLSLPreParser.RULE_profile = 29;
GLSLPreParser.RULE_program_text = 30;
GLSLPreParser.RULE_stdgl = 31;
GLSLPreParser.RULE_undef_directive = 32;
GLSLPreParser.RULE_version_directive = 33;

class Translation_unitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_translation_unit;
    }

	compiler_directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Compiler_directiveContext);
	    } else {
	        return this.getTypedRuleContext(Compiler_directiveContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterTranslation_unit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitTranslation_unit(this);
		}
	}


}



class Compiler_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_compiler_directive;
    }

	define_directive() {
	    return this.getTypedRuleContext(Define_directiveContext,0);
	};

	elif_directive() {
	    return this.getTypedRuleContext(Elif_directiveContext,0);
	};

	else_directive() {
	    return this.getTypedRuleContext(Else_directiveContext,0);
	};

	endif_directive() {
	    return this.getTypedRuleContext(Endif_directiveContext,0);
	};

	error_directive() {
	    return this.getTypedRuleContext(Error_directiveContext,0);
	};

	extension_directive() {
	    return this.getTypedRuleContext(Extension_directiveContext,0);
	};

	if_directive() {
	    return this.getTypedRuleContext(If_directiveContext,0);
	};

	ifdef_directive() {
	    return this.getTypedRuleContext(Ifdef_directiveContext,0);
	};

	ifndef_directive() {
	    return this.getTypedRuleContext(Ifndef_directiveContext,0);
	};

	line_directive() {
	    return this.getTypedRuleContext(Line_directiveContext,0);
	};

	pragma_directive() {
	    return this.getTypedRuleContext(Pragma_directiveContext,0);
	};

	undef_directive() {
	    return this.getTypedRuleContext(Undef_directiveContext,0);
	};

	version_directive() {
	    return this.getTypedRuleContext(Version_directiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterCompiler_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitCompiler_directive(this);
		}
	}


}



class BehaviorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_behavior;
    }

	BEHAVIOR() {
	    return this.getToken(GLSLPreParser.BEHAVIOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterBehavior(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitBehavior(this);
		}
	}


}



class Constant_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_constant_expression;
    }

	CONSTANT_EXPRESSION() {
	    return this.getToken(GLSLPreParser.CONSTANT_EXPRESSION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterConstant_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitConstant_expression(this);
		}
	}


}



class Define_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_define_directive;
    }

	NUMBER_SIGN() {
	    return this.getToken(GLSLPreParser.NUMBER_SIGN, 0);
	};

	DEFINE_DIRECTIVE() {
	    return this.getToken(GLSLPreParser.DEFINE_DIRECTIVE, 0);
	};

	macro_name() {
	    return this.getTypedRuleContext(Macro_nameContext,0);
	};

	macro_text() {
	    return this.getTypedRuleContext(Macro_textContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterDefine_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitDefine_directive(this);
		}
	}


}



class Elif_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_elif_directive;
    }

	NUMBER_SIGN() {
	    return this.getToken(GLSLPreParser.NUMBER_SIGN, 0);
	};

	ELIF_DIRECTIVE() {
	    return this.getToken(GLSLPreParser.ELIF_DIRECTIVE, 0);
	};

	constant_expression() {
	    return this.getTypedRuleContext(Constant_expressionContext,0);
	};

	group_of_lines() {
	    return this.getTypedRuleContext(Group_of_linesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterElif_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitElif_directive(this);
		}
	}


}



class Else_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_else_directive;
    }

	NUMBER_SIGN() {
	    return this.getToken(GLSLPreParser.NUMBER_SIGN, 0);
	};

	ELSE_DIRECTIVE() {
	    return this.getToken(GLSLPreParser.ELSE_DIRECTIVE, 0);
	};

	group_of_lines() {
	    return this.getTypedRuleContext(Group_of_linesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterElse_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitElse_directive(this);
		}
	}


}



class Endif_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_endif_directive;
    }

	NUMBER_SIGN() {
	    return this.getToken(GLSLPreParser.NUMBER_SIGN, 0);
	};

	ENDIF_DIRECTIVE() {
	    return this.getToken(GLSLPreParser.ENDIF_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterEndif_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitEndif_directive(this);
		}
	}


}



class Error_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_error_directive;
    }

	NUMBER_SIGN() {
	    return this.getToken(GLSLPreParser.NUMBER_SIGN, 0);
	};

	ERROR_DIRECTIVE() {
	    return this.getToken(GLSLPreParser.ERROR_DIRECTIVE, 0);
	};

	error_message() {
	    return this.getTypedRuleContext(Error_messageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterError_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitError_directive(this);
		}
	}


}



class Error_messageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_error_message;
    }

	ERROR_MESSAGE() {
	    return this.getToken(GLSLPreParser.ERROR_MESSAGE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterError_message(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitError_message(this);
		}
	}


}



class Extension_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_extension_directive;
    }

	NUMBER_SIGN() {
	    return this.getToken(GLSLPreParser.NUMBER_SIGN, 0);
	};

	EXTENSION_DIRECTIVE() {
	    return this.getToken(GLSLPreParser.EXTENSION_DIRECTIVE, 0);
	};

	extension_name() {
	    return this.getTypedRuleContext(Extension_nameContext,0);
	};

	COLON() {
	    return this.getToken(GLSLPreParser.COLON, 0);
	};

	behavior() {
	    return this.getTypedRuleContext(BehaviorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterExtension_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitExtension_directive(this);
		}
	}


}



class Extension_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_extension_name;
    }

	EXTENSION_NAME() {
	    return this.getToken(GLSLPreParser.EXTENSION_NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterExtension_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitExtension_name(this);
		}
	}


}



class Group_of_linesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_group_of_lines;
    }

	program_text = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Program_textContext);
	    } else {
	        return this.getTypedRuleContext(Program_textContext,i);
	    }
	};

	compiler_directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Compiler_directiveContext);
	    } else {
	        return this.getTypedRuleContext(Compiler_directiveContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterGroup_of_lines(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitGroup_of_lines(this);
		}
	}


}



class If_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_if_directive;
    }

	NUMBER_SIGN() {
	    return this.getToken(GLSLPreParser.NUMBER_SIGN, 0);
	};

	IF_DIRECTIVE() {
	    return this.getToken(GLSLPreParser.IF_DIRECTIVE, 0);
	};

	constant_expression() {
	    return this.getTypedRuleContext(Constant_expressionContext,0);
	};

	group_of_lines() {
	    return this.getTypedRuleContext(Group_of_linesContext,0);
	};

	endif_directive() {
	    return this.getTypedRuleContext(Endif_directiveContext,0);
	};

	elif_directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Elif_directiveContext);
	    } else {
	        return this.getTypedRuleContext(Elif_directiveContext,i);
	    }
	};

	else_directive() {
	    return this.getTypedRuleContext(Else_directiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterIf_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitIf_directive(this);
		}
	}


}



class Ifdef_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_ifdef_directive;
    }

	NUMBER_SIGN() {
	    return this.getToken(GLSLPreParser.NUMBER_SIGN, 0);
	};

	IFDEF_DIRECTIVE() {
	    return this.getToken(GLSLPreParser.IFDEF_DIRECTIVE, 0);
	};

	macro_identifier() {
	    return this.getTypedRuleContext(Macro_identifierContext,0);
	};

	group_of_lines() {
	    return this.getTypedRuleContext(Group_of_linesContext,0);
	};

	endif_directive() {
	    return this.getTypedRuleContext(Endif_directiveContext,0);
	};

	elif_directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Elif_directiveContext);
	    } else {
	        return this.getTypedRuleContext(Elif_directiveContext,i);
	    }
	};

	else_directive() {
	    return this.getTypedRuleContext(Else_directiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterIfdef_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitIfdef_directive(this);
		}
	}


}



class Ifndef_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_ifndef_directive;
    }

	NUMBER_SIGN() {
	    return this.getToken(GLSLPreParser.NUMBER_SIGN, 0);
	};

	IFNDEF_DIRECTIVE() {
	    return this.getToken(GLSLPreParser.IFNDEF_DIRECTIVE, 0);
	};

	macro_identifier() {
	    return this.getTypedRuleContext(Macro_identifierContext,0);
	};

	group_of_lines() {
	    return this.getTypedRuleContext(Group_of_linesContext,0);
	};

	endif_directive() {
	    return this.getTypedRuleContext(Endif_directiveContext,0);
	};

	elif_directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Elif_directiveContext);
	    } else {
	        return this.getTypedRuleContext(Elif_directiveContext,i);
	    }
	};

	else_directive() {
	    return this.getTypedRuleContext(Else_directiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterIfndef_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitIfndef_directive(this);
		}
	}


}



class Line_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_line_directive;
    }

	NUMBER_SIGN() {
	    return this.getToken(GLSLPreParser.NUMBER_SIGN, 0);
	};

	LINE_DIRECTIVE() {
	    return this.getToken(GLSLPreParser.LINE_DIRECTIVE, 0);
	};

	line_expression() {
	    return this.getTypedRuleContext(Line_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterLine_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitLine_directive(this);
		}
	}


}



class Line_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_line_expression;
    }

	LINE_EXPRESSION() {
	    return this.getToken(GLSLPreParser.LINE_EXPRESSION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterLine_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitLine_expression(this);
		}
	}


}



class Macro_esc_newlineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_macro_esc_newline;
    }

	MACRO_ESC_NEWLINE() {
	    return this.getToken(GLSLPreParser.MACRO_ESC_NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterMacro_esc_newline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitMacro_esc_newline(this);
		}
	}


}



class Macro_identifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_macro_identifier;
    }

	MACRO_IDENTIFIER() {
	    return this.getToken(GLSLPreParser.MACRO_IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterMacro_identifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitMacro_identifier(this);
		}
	}


}



class Macro_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_macro_name;
    }

	MACRO_NAME() {
	    return this.getToken(GLSLPreParser.MACRO_NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterMacro_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitMacro_name(this);
		}
	}


}



class Macro_textContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_macro_text;
    }

	macro_text_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Macro_text_Context);
	    } else {
	        return this.getTypedRuleContext(Macro_text_Context,i);
	    }
	};

	macro_esc_newline = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Macro_esc_newlineContext);
	    } else {
	        return this.getTypedRuleContext(Macro_esc_newlineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterMacro_text(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitMacro_text(this);
		}
	}


}



class Macro_text_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_macro_text_;
    }

	MACRO_TEXT() {
	    return this.getToken(GLSLPreParser.MACRO_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterMacro_text_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitMacro_text_(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(GLSLPreParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitNumber(this);
		}
	}


}



class OffContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_off;
    }

	OFF() {
	    return this.getToken(GLSLPreParser.OFF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterOff(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitOff(this);
		}
	}


}



class OnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_on;
    }

	ON() {
	    return this.getToken(GLSLPreParser.ON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterOn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitOn(this);
		}
	}


}



class Pragma_debugContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_pragma_debug;
    }

	DEBUG() {
	    return this.getToken(GLSLPreParser.DEBUG, 0);
	};

	LEFT_PAREN() {
	    return this.getToken(GLSLPreParser.LEFT_PAREN, 0);
	};

	RIGHT_PAREN() {
	    return this.getToken(GLSLPreParser.RIGHT_PAREN, 0);
	};

	on() {
	    return this.getTypedRuleContext(OnContext,0);
	};

	off() {
	    return this.getTypedRuleContext(OffContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterPragma_debug(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitPragma_debug(this);
		}
	}


}



class Pragma_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_pragma_directive;
    }

	NUMBER_SIGN() {
	    return this.getToken(GLSLPreParser.NUMBER_SIGN, 0);
	};

	PRAGMA_DIRECTIVE() {
	    return this.getToken(GLSLPreParser.PRAGMA_DIRECTIVE, 0);
	};

	stdgl() {
	    return this.getTypedRuleContext(StdglContext,0);
	};

	pragma_debug() {
	    return this.getTypedRuleContext(Pragma_debugContext,0);
	};

	pragma_optimize() {
	    return this.getTypedRuleContext(Pragma_optimizeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterPragma_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitPragma_directive(this);
		}
	}


}



class Pragma_optimizeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_pragma_optimize;
    }

	OPTIMIZE() {
	    return this.getToken(GLSLPreParser.OPTIMIZE, 0);
	};

	LEFT_PAREN() {
	    return this.getToken(GLSLPreParser.LEFT_PAREN, 0);
	};

	RIGHT_PAREN() {
	    return this.getToken(GLSLPreParser.RIGHT_PAREN, 0);
	};

	on() {
	    return this.getTypedRuleContext(OnContext,0);
	};

	off() {
	    return this.getTypedRuleContext(OffContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterPragma_optimize(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitPragma_optimize(this);
		}
	}


}



class ProfileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_profile;
    }

	PROFILE() {
	    return this.getToken(GLSLPreParser.PROFILE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterProfile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitProfile(this);
		}
	}


}



class Program_textContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_program_text;
    }

	PROGRAM_TEXT() {
	    return this.getToken(GLSLPreParser.PROGRAM_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterProgram_text(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitProgram_text(this);
		}
	}


}



class StdglContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_stdgl;
    }

	STDGL() {
	    return this.getToken(GLSLPreParser.STDGL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterStdgl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitStdgl(this);
		}
	}


}



class Undef_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_undef_directive;
    }

	NUMBER_SIGN() {
	    return this.getToken(GLSLPreParser.NUMBER_SIGN, 0);
	};

	UNDEF_DIRECTIVE() {
	    return this.getToken(GLSLPreParser.UNDEF_DIRECTIVE, 0);
	};

	macro_identifier() {
	    return this.getTypedRuleContext(Macro_identifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterUndef_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitUndef_directive(this);
		}
	}


}



class Version_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GLSLPreParser.RULE_version_directive;
    }

	NUMBER_SIGN() {
	    return this.getToken(GLSLPreParser.NUMBER_SIGN, 0);
	};

	VERSION_DIRECTIVE() {
	    return this.getToken(GLSLPreParser.VERSION_DIRECTIVE, 0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	profile() {
	    return this.getTypedRuleContext(ProfileContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.enterVersion_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GLSLPreParserListener ) {
	        listener.exitVersion_directive(this);
		}
	}


}




GLSLPreParser.Translation_unitContext = Translation_unitContext; 
GLSLPreParser.Compiler_directiveContext = Compiler_directiveContext; 
GLSLPreParser.BehaviorContext = BehaviorContext; 
GLSLPreParser.Constant_expressionContext = Constant_expressionContext; 
GLSLPreParser.Define_directiveContext = Define_directiveContext; 
GLSLPreParser.Elif_directiveContext = Elif_directiveContext; 
GLSLPreParser.Else_directiveContext = Else_directiveContext; 
GLSLPreParser.Endif_directiveContext = Endif_directiveContext; 
GLSLPreParser.Error_directiveContext = Error_directiveContext; 
GLSLPreParser.Error_messageContext = Error_messageContext; 
GLSLPreParser.Extension_directiveContext = Extension_directiveContext; 
GLSLPreParser.Extension_nameContext = Extension_nameContext; 
GLSLPreParser.Group_of_linesContext = Group_of_linesContext; 
GLSLPreParser.If_directiveContext = If_directiveContext; 
GLSLPreParser.Ifdef_directiveContext = Ifdef_directiveContext; 
GLSLPreParser.Ifndef_directiveContext = Ifndef_directiveContext; 
GLSLPreParser.Line_directiveContext = Line_directiveContext; 
GLSLPreParser.Line_expressionContext = Line_expressionContext; 
GLSLPreParser.Macro_esc_newlineContext = Macro_esc_newlineContext; 
GLSLPreParser.Macro_identifierContext = Macro_identifierContext; 
GLSLPreParser.Macro_nameContext = Macro_nameContext; 
GLSLPreParser.Macro_textContext = Macro_textContext; 
GLSLPreParser.Macro_text_Context = Macro_text_Context; 
GLSLPreParser.NumberContext = NumberContext; 
GLSLPreParser.OffContext = OffContext; 
GLSLPreParser.OnContext = OnContext; 
GLSLPreParser.Pragma_debugContext = Pragma_debugContext; 
GLSLPreParser.Pragma_directiveContext = Pragma_directiveContext; 
GLSLPreParser.Pragma_optimizeContext = Pragma_optimizeContext; 
GLSLPreParser.ProfileContext = ProfileContext; 
GLSLPreParser.Program_textContext = Program_textContext; 
GLSLPreParser.StdglContext = StdglContext; 
GLSLPreParser.Undef_directiveContext = Undef_directiveContext; 
GLSLPreParser.Version_directiveContext = Version_directiveContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
