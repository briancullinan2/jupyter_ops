// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/less/LessParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LessParserListener from './LessParserListener.js';
const serializedATN = [4,1,143,371,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,1,0,5,0,76,8,0,10,0,12,0,79,9,0,1,0,1,0,1,1,1,1,1,
1,1,1,1,1,1,1,3,1,89,8,1,1,2,1,2,1,2,1,2,3,2,95,8,2,1,3,4,3,98,8,3,11,3,
12,3,99,1,3,3,3,103,8,3,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,3,6,118,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,129,8,6,1,7,1,7,
1,7,3,7,134,8,7,1,7,1,7,1,8,1,8,1,8,5,8,141,8,8,10,8,12,8,144,9,8,1,9,1,
9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,155,8,9,1,10,1,10,1,10,1,10,1,10,3,10,
162,8,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,5,12,173,8,12,10,12,
12,12,176,9,12,1,12,1,12,3,12,180,8,12,1,12,1,12,3,12,184,8,12,1,12,1,12,
1,13,1,13,1,14,1,14,1,14,1,14,3,14,194,8,14,1,15,1,15,1,15,5,15,199,8,15,
10,15,12,15,202,9,15,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,5,17,213,
8,17,10,17,12,17,216,9,17,1,17,3,17,219,8,17,1,17,1,17,1,18,1,18,1,18,1,
18,1,18,5,18,228,8,18,10,18,12,18,231,9,18,3,18,233,8,18,1,18,3,18,236,8,
18,1,18,1,18,3,18,240,8,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,3,20,249,8,
20,1,21,1,21,1,21,3,21,254,8,21,1,21,1,21,3,21,258,8,21,1,21,1,21,1,22,1,
22,1,22,5,22,265,8,22,10,22,12,22,268,9,22,1,23,4,23,271,8,23,11,23,12,23,
272,1,23,5,23,276,8,23,10,23,12,23,279,9,23,1,23,3,23,282,8,23,1,24,1,24,
1,24,1,24,1,24,3,24,289,8,24,1,24,1,24,1,25,1,25,1,25,1,25,3,25,297,8,25,
1,25,1,25,3,25,301,8,25,1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,
1,27,1,27,1,27,1,27,1,27,3,27,318,8,27,1,28,1,28,1,29,1,29,1,30,1,30,5,30,
326,8,30,10,30,12,30,329,9,30,1,30,1,30,1,30,1,30,5,30,335,8,30,10,30,12,
30,338,9,30,3,30,340,8,30,1,31,1,31,1,31,1,31,1,31,3,31,347,8,31,1,32,1,
32,1,33,1,33,1,33,1,33,1,34,1,34,1,34,5,34,358,8,34,10,34,12,34,361,9,34,
1,35,1,35,1,35,1,35,1,36,1,36,3,36,369,8,36,1,36,0,0,37,0,2,4,6,8,10,12,
14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,
62,64,66,68,70,72,0,9,1,0,24,28,2,0,17,17,52,52,4,0,12,12,14,14,30,31,33,
33,1,0,44,49,1,0,53,54,2,0,15,15,23,23,2,0,12,13,24,24,1,0,33,35,2,0,53,
53,143,143,388,0,77,1,0,0,0,2,88,1,0,0,0,4,94,1,0,0,0,6,97,1,0,0,0,8,104,
1,0,0,0,10,106,1,0,0,0,12,128,1,0,0,0,14,130,1,0,0,0,16,137,1,0,0,0,18,154,
1,0,0,0,20,161,1,0,0,0,22,163,1,0,0,0,24,167,1,0,0,0,26,187,1,0,0,0,28,193,
1,0,0,0,30,195,1,0,0,0,32,203,1,0,0,0,34,206,1,0,0,0,36,222,1,0,0,0,38,243,
1,0,0,0,40,248,1,0,0,0,42,250,1,0,0,0,44,261,1,0,0,0,46,270,1,0,0,0,48,283,
1,0,0,0,50,292,1,0,0,0,52,304,1,0,0,0,54,317,1,0,0,0,56,319,1,0,0,0,58,321,
1,0,0,0,60,339,1,0,0,0,62,346,1,0,0,0,64,348,1,0,0,0,66,350,1,0,0,0,68,354,
1,0,0,0,70,362,1,0,0,0,72,366,1,0,0,0,74,76,3,2,1,0,75,74,1,0,0,0,76,79,
1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,80,1,0,0,0,79,77,1,0,0,0,80,81,5,
0,0,1,81,1,1,0,0,0,82,89,3,24,12,0,83,89,3,32,16,0,84,85,3,22,11,0,85,86,
5,16,0,0,86,89,1,0,0,0,87,89,3,36,18,0,88,82,1,0,0,0,88,83,1,0,0,0,88,84,
1,0,0,0,88,87,1,0,0,0,89,3,1,0,0,0,90,91,5,20,0,0,91,95,3,4,2,0,92,93,5,
20,0,0,93,95,5,53,0,0,94,90,1,0,0,0,94,92,1,0,0,0,95,5,1,0,0,0,96,98,3,12,
6,0,97,96,1,0,0,0,98,99,1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,102,1,0,
0,0,101,103,3,10,5,0,102,101,1,0,0,0,102,103,1,0,0,0,103,7,1,0,0,0,104,105,
7,0,0,0,105,9,1,0,0,0,106,107,3,8,4,0,107,108,3,6,3,0,108,11,1,0,0,0,109,
129,3,72,36,0,110,111,3,60,30,0,111,112,5,41,0,0,112,129,1,0,0,0,113,129,
3,60,30,0,114,115,3,60,30,0,115,117,5,6,0,0,116,118,3,68,34,0,117,116,1,
0,0,0,117,118,1,0,0,0,118,119,1,0,0,0,119,120,5,7,0,0,120,129,1,0,0,0,121,
129,5,56,0,0,122,129,5,54,0,0,123,129,3,70,35,0,124,125,3,4,2,0,125,126,
5,41,0,0,126,129,1,0,0,0,127,129,3,4,2,0,128,109,1,0,0,0,128,110,1,0,0,0,
128,113,1,0,0,0,128,114,1,0,0,0,128,121,1,0,0,0,128,122,1,0,0,0,128,123,
1,0,0,0,128,124,1,0,0,0,128,127,1,0,0,0,129,13,1,0,0,0,130,131,5,60,0,0,
131,133,5,6,0,0,132,134,3,68,34,0,133,132,1,0,0,0,133,134,1,0,0,0,134,135,
1,0,0,0,135,136,5,7,0,0,136,15,1,0,0,0,137,142,3,18,9,0,138,139,7,1,0,0,
139,141,3,18,9,0,140,138,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,
1,0,0,0,143,17,1,0,0,0,144,142,1,0,0,0,145,146,5,6,0,0,146,147,3,20,10,0,
147,148,5,7,0,0,148,155,1,0,0,0,149,150,5,51,0,0,150,151,5,6,0,0,151,152,
3,20,10,0,152,153,5,7,0,0,153,155,1,0,0,0,154,145,1,0,0,0,154,149,1,0,0,
0,155,19,1,0,0,0,156,157,3,6,3,0,157,158,7,2,0,0,158,159,3,6,3,0,159,162,
1,0,0,0,160,162,3,6,3,0,161,156,1,0,0,0,161,160,1,0,0,0,162,21,1,0,0,0,163,
164,3,4,2,0,164,165,5,15,0,0,165,166,3,68,34,0,166,23,1,0,0,0,167,179,5,
38,0,0,168,169,5,6,0,0,169,174,3,26,13,0,170,171,5,17,0,0,171,173,3,26,13,
0,172,170,1,0,0,0,173,176,1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,175,177,
1,0,0,0,176,174,1,0,0,0,177,178,5,7,0,0,178,180,1,0,0,0,179,168,1,0,0,0,
179,180,1,0,0,0,180,181,1,0,0,0,181,183,3,28,14,0,182,184,3,30,15,0,183,
182,1,0,0,0,183,184,1,0,0,0,184,185,1,0,0,0,185,186,5,16,0,0,186,25,1,0,
0,0,187,188,7,3,0,0,188,27,1,0,0,0,189,194,5,54,0,0,190,191,5,37,0,0,191,
192,5,140,0,0,192,194,5,139,0,0,193,189,1,0,0,0,193,190,1,0,0,0,194,29,1,
0,0,0,195,200,5,53,0,0,196,197,5,17,0,0,197,199,5,53,0,0,198,196,1,0,0,0,
199,202,1,0,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,31,1,0,0,0,202,200,1,
0,0,0,203,204,3,44,22,0,204,205,3,34,17,0,205,33,1,0,0,0,206,214,5,8,0,0,
207,208,3,66,33,0,208,209,5,16,0,0,209,213,1,0,0,0,210,213,3,2,1,0,211,213,
3,42,21,0,212,207,1,0,0,0,212,210,1,0,0,0,212,211,1,0,0,0,213,216,1,0,0,
0,214,212,1,0,0,0,214,215,1,0,0,0,215,218,1,0,0,0,216,214,1,0,0,0,217,219,
3,66,33,0,218,217,1,0,0,0,218,219,1,0,0,0,219,220,1,0,0,0,220,221,5,9,0,
0,221,35,1,0,0,0,222,223,3,44,22,0,223,232,5,6,0,0,224,229,3,40,20,0,225,
226,5,16,0,0,226,228,3,40,20,0,227,225,1,0,0,0,228,231,1,0,0,0,229,227,1,
0,0,0,229,230,1,0,0,0,230,233,1,0,0,0,231,229,1,0,0,0,232,224,1,0,0,0,232,
233,1,0,0,0,233,235,1,0,0,0,234,236,5,4,0,0,235,234,1,0,0,0,235,236,1,0,
0,0,236,237,1,0,0,0,237,239,5,7,0,0,238,240,3,38,19,0,239,238,1,0,0,0,239,
240,1,0,0,0,240,241,1,0,0,0,241,242,3,34,17,0,242,37,1,0,0,0,243,244,5,50,
0,0,244,245,3,16,8,0,245,39,1,0,0,0,246,249,3,4,2,0,247,249,3,22,11,0,248,
246,1,0,0,0,248,247,1,0,0,0,249,41,1,0,0,0,250,251,3,46,23,0,251,253,5,6,
0,0,252,254,3,68,34,0,253,252,1,0,0,0,253,254,1,0,0,0,254,255,1,0,0,0,255,
257,5,7,0,0,256,258,5,41,0,0,257,256,1,0,0,0,257,258,1,0,0,0,258,259,1,0,
0,0,259,260,5,16,0,0,260,43,1,0,0,0,261,266,3,46,23,0,262,263,5,17,0,0,263,
265,3,46,23,0,264,262,1,0,0,0,265,268,1,0,0,0,266,264,1,0,0,0,266,267,1,
0,0,0,267,45,1,0,0,0,268,266,1,0,0,0,269,271,3,54,27,0,270,269,1,0,0,0,271,
272,1,0,0,0,272,270,1,0,0,0,272,273,1,0,0,0,273,277,1,0,0,0,274,276,3,48,
24,0,275,274,1,0,0,0,276,279,1,0,0,0,277,275,1,0,0,0,277,278,1,0,0,0,278,
281,1,0,0,0,279,277,1,0,0,0,280,282,3,52,26,0,281,280,1,0,0,0,281,282,1,
0,0,0,282,47,1,0,0,0,283,284,5,10,0,0,284,288,5,53,0,0,285,286,3,58,29,0,
286,287,7,4,0,0,287,289,1,0,0,0,288,285,1,0,0,0,288,289,1,0,0,0,289,290,
1,0,0,0,290,291,5,11,0,0,291,49,1,0,0,0,292,293,5,15,0,0,293,294,5,51,0,
0,294,296,5,6,0,0,295,297,5,10,0,0,296,295,1,0,0,0,296,297,1,0,0,0,297,298,
1,0,0,0,298,300,3,44,22,0,299,301,5,11,0,0,300,299,1,0,0,0,300,301,1,0,0,
0,301,302,1,0,0,0,302,303,5,7,0,0,303,51,1,0,0,0,304,305,7,5,0,0,305,306,
5,53,0,0,306,53,1,0,0,0,307,308,3,56,28,0,308,309,3,60,30,0,309,318,1,0,
0,0,310,318,3,60,30,0,311,312,5,22,0,0,312,318,3,60,30,0,313,318,3,52,26,
0,314,318,3,50,25,0,315,318,5,21,0,0,316,318,5,25,0,0,317,307,1,0,0,0,317,
310,1,0,0,0,317,311,1,0,0,0,317,313,1,0,0,0,317,314,1,0,0,0,317,315,1,0,
0,0,317,316,1,0,0,0,318,55,1,0,0,0,319,320,7,6,0,0,320,57,1,0,0,0,321,322,
7,7,0,0,322,59,1,0,0,0,323,327,5,53,0,0,324,326,3,62,31,0,325,324,1,0,0,
0,326,329,1,0,0,0,327,325,1,0,0,0,327,328,1,0,0,0,328,340,1,0,0,0,329,327,
1,0,0,0,330,331,5,5,0,0,331,332,3,64,32,0,332,336,5,9,0,0,333,335,3,62,31,
0,334,333,1,0,0,0,335,338,1,0,0,0,336,334,1,0,0,0,336,337,1,0,0,0,337,340,
1,0,0,0,338,336,1,0,0,0,339,323,1,0,0,0,339,330,1,0,0,0,340,61,1,0,0,0,341,
342,5,142,0,0,342,343,3,64,32,0,343,344,5,9,0,0,344,347,1,0,0,0,345,347,
5,143,0,0,346,341,1,0,0,0,346,345,1,0,0,0,347,63,1,0,0,0,348,349,7,8,0,0,
349,65,1,0,0,0,350,351,3,60,30,0,351,352,5,15,0,0,352,353,3,68,34,0,353,
67,1,0,0,0,354,359,3,6,3,0,355,356,5,17,0,0,356,358,3,6,3,0,357,355,1,0,
0,0,358,361,1,0,0,0,359,357,1,0,0,0,359,360,1,0,0,0,360,69,1,0,0,0,361,359,
1,0,0,0,362,363,5,37,0,0,363,364,5,140,0,0,364,365,5,139,0,0,365,71,1,0,
0,0,366,368,5,55,0,0,367,369,5,3,0,0,368,367,1,0,0,0,368,369,1,0,0,0,369,
73,1,0,0,0,40,77,88,94,99,102,117,128,133,142,154,161,174,179,183,193,200,
212,214,218,229,232,235,239,248,253,257,266,272,277,281,288,296,300,317,
327,336,339,346,359,368];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LessParser extends antlr4.Parser {

    static grammarFileName = "LessParser.g4";
    static literalNames = [ null, "'null'", "'in'", null, "'...'", null, 
                            "'('", "')'", "'{'", "'}'", "'['", "']'", "'>'", 
                            "'~'", "'<'", "':'", "';'", "','", "'.'", "'$'", 
                            "'@'", "'&'", "'#'", "'::'", "'+'", "'*'", "'/'", 
                            "'-'", null, "'=='", "'>='", "'<='", "'!='", 
                            "'='", "'|='", "'~='", "'url'", null, "'@import'", 
                            "'@media'", "':extend'", "'!important'", "'@arguments'", 
                            "'@rest'", "'reference'", "'inline'", "'less'", 
                            "'css'", "'once'", "'multiple'", "'when'", "'not'", 
                            "'and'", null, null, null, null, null, null, 
                            null, null, "'color'", "'convert'", "'data-uri'", 
                            "'default'", "'unit'", "'get-unit'", "'svg-gradient'", 
                            "'escape'", "'e'", null, "'replace'", "'length'", 
                            "'extract'", "'ceil'", "'floor'", "'percentage'", 
                            "'round'", "'sqrt'", "'abs'", "'sin'", "'asin'", 
                            "'cos'", "'acos'", "'tan'", "'atan'", "'pi'", 
                            "'pow'", "'mod'", "'min'", "'max'", "'isnumber'", 
                            "'isstring'", "'iscolor'", "'iskeyword'", "'isurl'", 
                            "'ispixel'", "'isem'", "'ispercentage'", "'isunit'", 
                            "'rgb'", "'rgba'", "'argb'", "'hsl'", "'hsla'", 
                            "'hsv'", "'hsva'", "'hue'", "'saturation'", 
                            "'lightness'", "'hsvhue'", "'hsvsaturation'", 
                            "'hsvvalue'", "'red'", "'green'", "'blue'", 
                            "'alpha'", "'luma'", "'luminance'", "'saturate'", 
                            "'desaturate'", "'lighten'", "'darken'", "'fadein'", 
                            "'fadeout'", "'fade'", "'spin'", "'mix'", "'greyscale'", 
                            "'contrast'", "'multiply'", "'screen'", "'overlay'", 
                            "'softlight'", "'hardlight'", "'difference'", 
                            "'exclusion'", "'average'", "'negation'" ];
    static symbolicNames = [ null, "NULL_", "IN", "Unit", "Ellipsis", "InterpolationStart", 
                             "LPAREN", "RPAREN", "BlockStart", "BlockEnd", 
                             "LBRACK", "RBRACK", "GT", "TIL", "LT", "COLON", 
                             "SEMI", "COMMA", "DOT", "DOLLAR", "AT", "PARENTREF", 
                             "HASH", "COLONCOLON", "PLUS", "TIMES", "DIV", 
                             "MINUS", "PERC", "EQEQ", "GTEQ", "LTEQ", "NOTEQ", 
                             "EQ", "PIPE_EQ", "TILD_EQ", "URL", "UrlStart", 
                             "IMPORT", "MEDIA", "EXTEND", "IMPORTANT", "ARGUMENTS", 
                             "REST", "REFERENCE", "INLINE", "LESS", "CSS", 
                             "ONCE", "MULTIPLE", "WHEN", "NOT", "AND", "Identifier", 
                             "StringLiteral", "Number", "Color", "WS", "SL_COMMENT", 
                             "COMMENT", "FUNCTION_NAME", "COLOR", "CONVERT", 
                             "DATA_URI", "DEFAULT", "UNIT", "GET_UNIT", 
                             "SVG_GRADIENT", "ESCAPE", "E", "FORMAT", "REPLACE", 
                             "LENGTH", "EXTRACT", "CEIL", "FLOOR", "PERCENTAGE", 
                             "ROUND", "SQRT", "ABS", "SIN", "ASIN", "COS", 
                             "ACOS", "TAN", "ATAN", "PI", "POW", "MOD", 
                             "MIN", "MAX", "ISNUMBER", "ISSTRING", "ISCOLOR", 
                             "ISKEYWORD", "ISURL", "ISPIXEL", "ISEM", "ISPERCENTAGE", 
                             "ISUNIT", "RGB", "RGBA", "ARGB", "HSL", "HSLA", 
                             "HSV", "HSVA", "HUE", "SATURATION", "LIGHTNESS", 
                             "HSVHUE", "HSVSATURATION", "HSVVALUE", "RED", 
                             "GREEN", "BLUE", "ALPHA", "LUMA", "LUMINANCE", 
                             "SATURATE", "DESATURATE", "LIGHTEN", "DARKEN", 
                             "FADEIN", "FADEOUT", "FADE", "SPIN", "MIX", 
                             "GREYSCALE", "CONTRAST", "MULTIPLY", "SCREEN", 
                             "OVERLAY", "SOFTLIGHT", "HARDLIGHT", "DIFFERENCE", 
                             "EXCLUSION", "AVERAGE", "NEGATION", "UrlEnd", 
                             "Url", "SPACE", "InterpolationStartAfter", 
                             "IdentifierAfter" ];
    static ruleNames = [ "stylesheet", "statement", "variableName", "commandStatement", 
                         "mathCharacter", "mathStatement", "expression", 
                         "function_", "conditions", "condition", "conditionStatement", 
                         "variableDeclaration", "importDeclaration", "importOption", 
                         "referenceUrl", "mediaTypes", "ruleset", "block", 
                         "mixinDefinition", "mixinGuard", "mixinDefinitionParam", 
                         "mixinReference", "selectors", "selector", "attrib", 
                         "negation", "pseudo", "element", "selectorPrefix", 
                         "attribRelate", "identifier", "identifierPart", 
                         "identifierVariableName", "property_", "values", 
                         "url", "measurement" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LessParser.ruleNames;
        this.literalNames = LessParser.literalNames;
        this.symbolicNames = LessParser.symbolicNames;
    }



	stylesheet() {
	    let localctx = new StylesheetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LessParser.RULE_stylesheet);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 66105376) !== 0) || _la===38 || _la===53) {
	            this.state = 74;
	            this.statement();
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 80;
	        this.match(LessParser.EOF);
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LessParser.RULE_statement);
	    try {
	        this.state = 88;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.importDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.ruleset();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 84;
	            this.variableDeclaration();
	            this.state = 85;
	            this.match(LessParser.SEMI);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 87;
	            this.mixinDefinition();
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



	variableName() {
	    let localctx = new VariableNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LessParser.RULE_variableName);
	    try {
	        this.state = 94;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            this.match(LessParser.AT);
	            this.state = 91;
	            this.variableName();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 92;
	            this.match(LessParser.AT);
	            this.state = 93;
	            this.match(LessParser.Identifier);
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



	commandStatement() {
	    let localctx = new CommandStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LessParser.RULE_commandStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 96;
	            this.expression();
	            this.state = 99; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===5 || _la===20 || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 983041) !== 0));
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 520093696) !== 0)) {
	            this.state = 101;
	            this.mathStatement();
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



	mathCharacter() {
	    let localctx = new MathCharacterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LessParser.RULE_mathCharacter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 520093696) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	mathStatement() {
	    let localctx = new MathStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LessParser.RULE_mathStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.mathCharacter();
	        this.state = 107;
	        this.commandStatement();
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LessParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.state = 128;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 109;
	            this.measurement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 110;
	            this.identifier();
	            this.state = 111;
	            this.match(LessParser.IMPORTANT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 113;
	            this.identifier();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 114;
	            this.identifier();
	            this.state = 115;
	            this.match(LessParser.LPAREN);
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || _la===20 || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 983041) !== 0)) {
	                this.state = 116;
	                this.values();
	            }

	            this.state = 119;
	            this.match(LessParser.RPAREN);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 121;
	            this.match(LessParser.Color);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 122;
	            this.match(LessParser.StringLiteral);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 123;
	            this.url();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 124;
	            this.variableName();
	            this.state = 125;
	            this.match(LessParser.IMPORTANT);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 127;
	            this.variableName();
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



	function_() {
	    let localctx = new Function_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LessParser.RULE_function_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(LessParser.FUNCTION_NAME);
	        this.state = 131;
	        this.match(LessParser.LPAREN);
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===20 || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 983041) !== 0)) {
	            this.state = 132;
	            this.values();
	        }

	        this.state = 135;
	        this.match(LessParser.RPAREN);
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



	conditions() {
	    let localctx = new ConditionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LessParser.RULE_conditions);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.condition();
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17 || _la===52) {
	            this.state = 138;
	            _la = this._input.LA(1);
	            if(!(_la===17 || _la===52)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 139;
	            this.condition();
	            this.state = 144;
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LessParser.RULE_condition);
	    try {
	        this.state = 154;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 145;
	            this.match(LessParser.LPAREN);
	            this.state = 146;
	            this.conditionStatement();
	            this.state = 147;
	            this.match(LessParser.RPAREN);
	            break;
	        case 51:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 149;
	            this.match(LessParser.NOT);
	            this.state = 150;
	            this.match(LessParser.LPAREN);
	            this.state = 151;
	            this.conditionStatement();
	            this.state = 152;
	            this.match(LessParser.RPAREN);
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



	conditionStatement() {
	    let localctx = new ConditionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LessParser.RULE_conditionStatement);
	    var _la = 0;
	    try {
	        this.state = 161;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 156;
	            this.commandStatement();
	            this.state = 157;
	            _la = this._input.LA(1);
	            if(!(((((_la - 12)) & ~0x1f) === 0 && ((1 << (_la - 12)) & 2883589) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 158;
	            this.commandStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 160;
	            this.commandStatement();
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



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LessParser.RULE_variableDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.variableName();
	        this.state = 164;
	        this.match(LessParser.COLON);
	        this.state = 165;
	        this.values();
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



	importDeclaration() {
	    let localctx = new ImportDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LessParser.RULE_importDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(LessParser.IMPORT);
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 168;
	            this.match(LessParser.LPAREN);

	            this.state = 169;
	            this.importOption();
	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===17) {
	                this.state = 170;
	                this.match(LessParser.COMMA);
	                this.state = 171;
	                this.importOption();
	                this.state = 176;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 177;
	            this.match(LessParser.RPAREN);
	        }

	        this.state = 181;
	        this.referenceUrl();
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===53) {
	            this.state = 182;
	            this.mediaTypes();
	        }

	        this.state = 185;
	        this.match(LessParser.SEMI);
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



	importOption() {
	    let localctx = new ImportOptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LessParser.RULE_importOption);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        _la = this._input.LA(1);
	        if(!(((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 63) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	referenceUrl() {
	    let localctx = new ReferenceUrlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LessParser.RULE_referenceUrl);
	    try {
	        this.state = 193;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 54:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 189;
	            this.match(LessParser.StringLiteral);
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 190;
	            this.match(LessParser.UrlStart);
	            this.state = 191;
	            this.match(LessParser.Url);
	            this.state = 192;
	            this.match(LessParser.UrlEnd);
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



	mediaTypes() {
	    let localctx = new MediaTypesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LessParser.RULE_mediaTypes);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(LessParser.Identifier);
	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 196;
	            this.match(LessParser.COMMA);
	            this.state = 197;
	            this.match(LessParser.Identifier);
	            this.state = 202;
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



	ruleset() {
	    let localctx = new RulesetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LessParser.RULE_ruleset);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.selectors();
	        this.state = 204;
	        this.block();
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, LessParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(LessParser.BlockStart);
	        this.state = 214;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 212;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 207;
	                    this.property_();
	                    this.state = 208;
	                    this.match(LessParser.SEMI);
	                    break;

	                case 2:
	                    this.state = 210;
	                    this.statement();
	                    break;

	                case 3:
	                    this.state = 211;
	                    this.mixinReference();
	                    break;

	                } 
	            }
	            this.state = 216;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	        this.state = 218;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===53) {
	            this.state = 217;
	            this.property_();
	        }

	        this.state = 220;
	        this.match(LessParser.BlockEnd);
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



	mixinDefinition() {
	    let localctx = new MixinDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, LessParser.RULE_mixinDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.selectors();
	        this.state = 223;
	        this.match(LessParser.LPAREN);
	        this.state = 232;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 224;
	            this.mixinDefinitionParam();
	            this.state = 229;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===16) {
	                this.state = 225;
	                this.match(LessParser.SEMI);
	                this.state = 226;
	                this.mixinDefinitionParam();
	                this.state = 231;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 235;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 234;
	            this.match(LessParser.Ellipsis);
	        }

	        this.state = 237;
	        this.match(LessParser.RPAREN);
	        this.state = 239;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===50) {
	            this.state = 238;
	            this.mixinGuard();
	        }

	        this.state = 241;
	        this.block();
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



	mixinGuard() {
	    let localctx = new MixinGuardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, LessParser.RULE_mixinGuard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.match(LessParser.WHEN);
	        this.state = 244;
	        this.conditions();
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



	mixinDefinitionParam() {
	    let localctx = new MixinDefinitionParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, LessParser.RULE_mixinDefinitionParam);
	    try {
	        this.state = 248;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 246;
	            this.variableName();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 247;
	            this.variableDeclaration();
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



	mixinReference() {
	    let localctx = new MixinReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, LessParser.RULE_mixinReference);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.selector();
	        this.state = 251;
	        this.match(LessParser.LPAREN);
	        this.state = 253;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===20 || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 983041) !== 0)) {
	            this.state = 252;
	            this.values();
	        }

	        this.state = 255;
	        this.match(LessParser.RPAREN);
	        this.state = 257;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 256;
	            this.match(LessParser.IMPORTANT);
	        }

	        this.state = 259;
	        this.match(LessParser.SEMI);
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



	selectors() {
	    let localctx = new SelectorsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, LessParser.RULE_selectors);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.selector();
	        this.state = 266;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 262;
	            this.match(LessParser.COMMA);
	            this.state = 263;
	            this.selector();
	            this.state = 268;
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



	selector() {
	    let localctx = new SelectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, LessParser.RULE_selector);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 269;
	        		this.element();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 272; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,27, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 277;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 274;
	            this.attrib();
	            this.state = 279;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 281;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15 || _la===23) {
	            this.state = 280;
	            this.pseudo();
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



	attrib() {
	    let localctx = new AttribContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, LessParser.RULE_attrib);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.match(LessParser.LBRACK);
	        this.state = 284;
	        this.match(LessParser.Identifier);
	        this.state = 288;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 7) !== 0)) {
	            this.state = 285;
	            this.attribRelate();
	            this.state = 286;
	            _la = this._input.LA(1);
	            if(!(_la===53 || _la===54)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 290;
	        this.match(LessParser.RBRACK);
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



	negation() {
	    let localctx = new NegationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, LessParser.RULE_negation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
	        this.match(LessParser.COLON);
	        this.state = 293;
	        this.match(LessParser.NOT);
	        this.state = 294;
	        this.match(LessParser.LPAREN);
	        this.state = 296;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 295;
	            this.match(LessParser.LBRACK);
	        }

	        this.state = 298;
	        this.selectors();
	        this.state = 300;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 299;
	            this.match(LessParser.RBRACK);
	        }

	        this.state = 302;
	        this.match(LessParser.RPAREN);
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



	pseudo() {
	    let localctx = new PseudoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, LessParser.RULE_pseudo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 304;
	        _la = this._input.LA(1);
	        if(!(_la===15 || _la===23)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 305;
	        this.match(LessParser.Identifier);
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



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, LessParser.RULE_element);
	    try {
	        this.state = 317;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 307;
	            this.selectorPrefix();
	            this.state = 308;
	            this.identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 310;
	            this.identifier();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 311;
	            this.match(LessParser.HASH);
	            this.state = 312;
	            this.identifier();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 313;
	            this.pseudo();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 314;
	            this.negation();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 315;
	            this.match(LessParser.PARENTREF);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 316;
	            this.match(LessParser.TIMES);
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



	selectorPrefix() {
	    let localctx = new SelectorPrefixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, LessParser.RULE_selectorPrefix);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 16789504) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	attribRelate() {
	    let localctx = new AttribRelateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, LessParser.RULE_attribRelate);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
	        _la = this._input.LA(1);
	        if(!(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, LessParser.RULE_identifier);
	    var _la = 0;
	    try {
	        this.state = 339;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 53:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 323;
	            this.match(LessParser.Identifier);
	            this.state = 327;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===142 || _la===143) {
	                this.state = 324;
	                this.identifierPart();
	                this.state = 329;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 330;
	            this.match(LessParser.InterpolationStart);
	            this.state = 331;
	            this.identifierVariableName();
	            this.state = 332;
	            this.match(LessParser.BlockEnd);
	            this.state = 336;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===142 || _la===143) {
	                this.state = 333;
	                this.identifierPart();
	                this.state = 338;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
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



	identifierPart() {
	    let localctx = new IdentifierPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, LessParser.RULE_identifierPart);
	    try {
	        this.state = 346;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 142:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 341;
	            this.match(LessParser.InterpolationStartAfter);
	            this.state = 342;
	            this.identifierVariableName();
	            this.state = 343;
	            this.match(LessParser.BlockEnd);
	            break;
	        case 143:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 345;
	            this.match(LessParser.IdentifierAfter);
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



	identifierVariableName() {
	    let localctx = new IdentifierVariableNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, LessParser.RULE_identifierVariableName);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 348;
	        _la = this._input.LA(1);
	        if(!(_la===53 || _la===143)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	property_() {
	    let localctx = new Property_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, LessParser.RULE_property_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 350;
	        this.identifier();
	        this.state = 351;
	        this.match(LessParser.COLON);
	        this.state = 352;
	        this.values();
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



	values() {
	    let localctx = new ValuesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, LessParser.RULE_values);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 354;
	        this.commandStatement();
	        this.state = 359;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 355;
	            this.match(LessParser.COMMA);
	            this.state = 356;
	            this.commandStatement();
	            this.state = 361;
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



	url() {
	    let localctx = new UrlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, LessParser.RULE_url);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 362;
	        this.match(LessParser.UrlStart);
	        this.state = 363;
	        this.match(LessParser.Url);
	        this.state = 364;
	        this.match(LessParser.UrlEnd);
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



	measurement() {
	    let localctx = new MeasurementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, LessParser.RULE_measurement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 366;
	        this.match(LessParser.Number);
	        this.state = 368;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 367;
	            this.match(LessParser.Unit);
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

LessParser.EOF = antlr4.Token.EOF;
LessParser.NULL_ = 1;
LessParser.IN = 2;
LessParser.Unit = 3;
LessParser.Ellipsis = 4;
LessParser.InterpolationStart = 5;
LessParser.LPAREN = 6;
LessParser.RPAREN = 7;
LessParser.BlockStart = 8;
LessParser.BlockEnd = 9;
LessParser.LBRACK = 10;
LessParser.RBRACK = 11;
LessParser.GT = 12;
LessParser.TIL = 13;
LessParser.LT = 14;
LessParser.COLON = 15;
LessParser.SEMI = 16;
LessParser.COMMA = 17;
LessParser.DOT = 18;
LessParser.DOLLAR = 19;
LessParser.AT = 20;
LessParser.PARENTREF = 21;
LessParser.HASH = 22;
LessParser.COLONCOLON = 23;
LessParser.PLUS = 24;
LessParser.TIMES = 25;
LessParser.DIV = 26;
LessParser.MINUS = 27;
LessParser.PERC = 28;
LessParser.EQEQ = 29;
LessParser.GTEQ = 30;
LessParser.LTEQ = 31;
LessParser.NOTEQ = 32;
LessParser.EQ = 33;
LessParser.PIPE_EQ = 34;
LessParser.TILD_EQ = 35;
LessParser.URL = 36;
LessParser.UrlStart = 37;
LessParser.IMPORT = 38;
LessParser.MEDIA = 39;
LessParser.EXTEND = 40;
LessParser.IMPORTANT = 41;
LessParser.ARGUMENTS = 42;
LessParser.REST = 43;
LessParser.REFERENCE = 44;
LessParser.INLINE = 45;
LessParser.LESS = 46;
LessParser.CSS = 47;
LessParser.ONCE = 48;
LessParser.MULTIPLE = 49;
LessParser.WHEN = 50;
LessParser.NOT = 51;
LessParser.AND = 52;
LessParser.Identifier = 53;
LessParser.StringLiteral = 54;
LessParser.Number = 55;
LessParser.Color = 56;
LessParser.WS = 57;
LessParser.SL_COMMENT = 58;
LessParser.COMMENT = 59;
LessParser.FUNCTION_NAME = 60;
LessParser.COLOR = 61;
LessParser.CONVERT = 62;
LessParser.DATA_URI = 63;
LessParser.DEFAULT = 64;
LessParser.UNIT = 65;
LessParser.GET_UNIT = 66;
LessParser.SVG_GRADIENT = 67;
LessParser.ESCAPE = 68;
LessParser.E = 69;
LessParser.FORMAT = 70;
LessParser.REPLACE = 71;
LessParser.LENGTH = 72;
LessParser.EXTRACT = 73;
LessParser.CEIL = 74;
LessParser.FLOOR = 75;
LessParser.PERCENTAGE = 76;
LessParser.ROUND = 77;
LessParser.SQRT = 78;
LessParser.ABS = 79;
LessParser.SIN = 80;
LessParser.ASIN = 81;
LessParser.COS = 82;
LessParser.ACOS = 83;
LessParser.TAN = 84;
LessParser.ATAN = 85;
LessParser.PI = 86;
LessParser.POW = 87;
LessParser.MOD = 88;
LessParser.MIN = 89;
LessParser.MAX = 90;
LessParser.ISNUMBER = 91;
LessParser.ISSTRING = 92;
LessParser.ISCOLOR = 93;
LessParser.ISKEYWORD = 94;
LessParser.ISURL = 95;
LessParser.ISPIXEL = 96;
LessParser.ISEM = 97;
LessParser.ISPERCENTAGE = 98;
LessParser.ISUNIT = 99;
LessParser.RGB = 100;
LessParser.RGBA = 101;
LessParser.ARGB = 102;
LessParser.HSL = 103;
LessParser.HSLA = 104;
LessParser.HSV = 105;
LessParser.HSVA = 106;
LessParser.HUE = 107;
LessParser.SATURATION = 108;
LessParser.LIGHTNESS = 109;
LessParser.HSVHUE = 110;
LessParser.HSVSATURATION = 111;
LessParser.HSVVALUE = 112;
LessParser.RED = 113;
LessParser.GREEN = 114;
LessParser.BLUE = 115;
LessParser.ALPHA = 116;
LessParser.LUMA = 117;
LessParser.LUMINANCE = 118;
LessParser.SATURATE = 119;
LessParser.DESATURATE = 120;
LessParser.LIGHTEN = 121;
LessParser.DARKEN = 122;
LessParser.FADEIN = 123;
LessParser.FADEOUT = 124;
LessParser.FADE = 125;
LessParser.SPIN = 126;
LessParser.MIX = 127;
LessParser.GREYSCALE = 128;
LessParser.CONTRAST = 129;
LessParser.MULTIPLY = 130;
LessParser.SCREEN = 131;
LessParser.OVERLAY = 132;
LessParser.SOFTLIGHT = 133;
LessParser.HARDLIGHT = 134;
LessParser.DIFFERENCE = 135;
LessParser.EXCLUSION = 136;
LessParser.AVERAGE = 137;
LessParser.NEGATION = 138;
LessParser.UrlEnd = 139;
LessParser.Url = 140;
LessParser.SPACE = 141;
LessParser.InterpolationStartAfter = 142;
LessParser.IdentifierAfter = 143;

LessParser.RULE_stylesheet = 0;
LessParser.RULE_statement = 1;
LessParser.RULE_variableName = 2;
LessParser.RULE_commandStatement = 3;
LessParser.RULE_mathCharacter = 4;
LessParser.RULE_mathStatement = 5;
LessParser.RULE_expression = 6;
LessParser.RULE_function_ = 7;
LessParser.RULE_conditions = 8;
LessParser.RULE_condition = 9;
LessParser.RULE_conditionStatement = 10;
LessParser.RULE_variableDeclaration = 11;
LessParser.RULE_importDeclaration = 12;
LessParser.RULE_importOption = 13;
LessParser.RULE_referenceUrl = 14;
LessParser.RULE_mediaTypes = 15;
LessParser.RULE_ruleset = 16;
LessParser.RULE_block = 17;
LessParser.RULE_mixinDefinition = 18;
LessParser.RULE_mixinGuard = 19;
LessParser.RULE_mixinDefinitionParam = 20;
LessParser.RULE_mixinReference = 21;
LessParser.RULE_selectors = 22;
LessParser.RULE_selector = 23;
LessParser.RULE_attrib = 24;
LessParser.RULE_negation = 25;
LessParser.RULE_pseudo = 26;
LessParser.RULE_element = 27;
LessParser.RULE_selectorPrefix = 28;
LessParser.RULE_attribRelate = 29;
LessParser.RULE_identifier = 30;
LessParser.RULE_identifierPart = 31;
LessParser.RULE_identifierVariableName = 32;
LessParser.RULE_property_ = 33;
LessParser.RULE_values = 34;
LessParser.RULE_url = 35;
LessParser.RULE_measurement = 36;

class StylesheetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_stylesheet;
    }

	EOF() {
	    return this.getToken(LessParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterStylesheet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitStylesheet(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_statement;
    }

	importDeclaration() {
	    return this.getTypedRuleContext(ImportDeclarationContext,0);
	};

	ruleset() {
	    return this.getTypedRuleContext(RulesetContext,0);
	};

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	SEMI() {
	    return this.getToken(LessParser.SEMI, 0);
	};

	mixinDefinition() {
	    return this.getTypedRuleContext(MixinDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitStatement(this);
		}
	}


}



class VariableNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_variableName;
    }

	AT() {
	    return this.getToken(LessParser.AT, 0);
	};

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
	};

	Identifier() {
	    return this.getToken(LessParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterVariableName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitVariableName(this);
		}
	}


}



class CommandStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_commandStatement;
    }

	mathStatement() {
	    return this.getTypedRuleContext(MathStatementContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterCommandStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitCommandStatement(this);
		}
	}


}



class MathCharacterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_mathCharacter;
    }

	TIMES() {
	    return this.getToken(LessParser.TIMES, 0);
	};

	PLUS() {
	    return this.getToken(LessParser.PLUS, 0);
	};

	DIV() {
	    return this.getToken(LessParser.DIV, 0);
	};

	MINUS() {
	    return this.getToken(LessParser.MINUS, 0);
	};

	PERC() {
	    return this.getToken(LessParser.PERC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterMathCharacter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitMathCharacter(this);
		}
	}


}



class MathStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_mathStatement;
    }

	mathCharacter() {
	    return this.getTypedRuleContext(MathCharacterContext,0);
	};

	commandStatement() {
	    return this.getTypedRuleContext(CommandStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterMathStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitMathStatement(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_expression;
    }

	measurement() {
	    return this.getTypedRuleContext(MeasurementContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IMPORTANT() {
	    return this.getToken(LessParser.IMPORTANT, 0);
	};

	LPAREN() {
	    return this.getToken(LessParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(LessParser.RPAREN, 0);
	};

	values() {
	    return this.getTypedRuleContext(ValuesContext,0);
	};

	Color() {
	    return this.getToken(LessParser.Color, 0);
	};

	StringLiteral() {
	    return this.getToken(LessParser.StringLiteral, 0);
	};

	url() {
	    return this.getTypedRuleContext(UrlContext,0);
	};

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitExpression(this);
		}
	}


}



class Function_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_function_;
    }

	FUNCTION_NAME() {
	    return this.getToken(LessParser.FUNCTION_NAME, 0);
	};

	LPAREN() {
	    return this.getToken(LessParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(LessParser.RPAREN, 0);
	};

	values() {
	    return this.getTypedRuleContext(ValuesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterFunction_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitFunction_(this);
		}
	}


}



class ConditionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_conditions;
    }

	condition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.AND);
	    } else {
	        return this.getToken(LessParser.AND, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.COMMA);
	    } else {
	        return this.getToken(LessParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterConditions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitConditions(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_condition;
    }

	LPAREN() {
	    return this.getToken(LessParser.LPAREN, 0);
	};

	conditionStatement() {
	    return this.getTypedRuleContext(ConditionStatementContext,0);
	};

	RPAREN() {
	    return this.getToken(LessParser.RPAREN, 0);
	};

	NOT() {
	    return this.getToken(LessParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitCondition(this);
		}
	}


}



class ConditionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_conditionStatement;
    }

	commandStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandStatementContext);
	    } else {
	        return this.getTypedRuleContext(CommandStatementContext,i);
	    }
	};

	EQ() {
	    return this.getToken(LessParser.EQ, 0);
	};

	LT() {
	    return this.getToken(LessParser.LT, 0);
	};

	GT() {
	    return this.getToken(LessParser.GT, 0);
	};

	GTEQ() {
	    return this.getToken(LessParser.GTEQ, 0);
	};

	LTEQ() {
	    return this.getToken(LessParser.LTEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterConditionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitConditionStatement(this);
		}
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_variableDeclaration;
    }

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
	};

	COLON() {
	    return this.getToken(LessParser.COLON, 0);
	};

	values() {
	    return this.getTypedRuleContext(ValuesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}


}



class ImportDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_importDeclaration;
    }

	IMPORT() {
	    return this.getToken(LessParser.IMPORT, 0);
	};

	referenceUrl() {
	    return this.getTypedRuleContext(ReferenceUrlContext,0);
	};

	SEMI() {
	    return this.getToken(LessParser.SEMI, 0);
	};

	LPAREN() {
	    return this.getToken(LessParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(LessParser.RPAREN, 0);
	};

	mediaTypes() {
	    return this.getTypedRuleContext(MediaTypesContext,0);
	};

	importOption = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportOptionContext);
	    } else {
	        return this.getTypedRuleContext(ImportOptionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.COMMA);
	    } else {
	        return this.getToken(LessParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterImportDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitImportDeclaration(this);
		}
	}


}



class ImportOptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_importOption;
    }

	REFERENCE() {
	    return this.getToken(LessParser.REFERENCE, 0);
	};

	INLINE() {
	    return this.getToken(LessParser.INLINE, 0);
	};

	LESS() {
	    return this.getToken(LessParser.LESS, 0);
	};

	CSS() {
	    return this.getToken(LessParser.CSS, 0);
	};

	ONCE() {
	    return this.getToken(LessParser.ONCE, 0);
	};

	MULTIPLE() {
	    return this.getToken(LessParser.MULTIPLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterImportOption(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitImportOption(this);
		}
	}


}



class ReferenceUrlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_referenceUrl;
    }

	StringLiteral() {
	    return this.getToken(LessParser.StringLiteral, 0);
	};

	UrlStart() {
	    return this.getToken(LessParser.UrlStart, 0);
	};

	Url() {
	    return this.getToken(LessParser.Url, 0);
	};

	UrlEnd() {
	    return this.getToken(LessParser.UrlEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterReferenceUrl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitReferenceUrl(this);
		}
	}


}



class MediaTypesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_mediaTypes;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.Identifier);
	    } else {
	        return this.getToken(LessParser.Identifier, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.COMMA);
	    } else {
	        return this.getToken(LessParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterMediaTypes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitMediaTypes(this);
		}
	}


}



class RulesetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_ruleset;
    }

	selectors() {
	    return this.getTypedRuleContext(SelectorsContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterRuleset(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitRuleset(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_block;
    }

	BlockStart() {
	    return this.getToken(LessParser.BlockStart, 0);
	};

	BlockEnd() {
	    return this.getToken(LessParser.BlockEnd, 0);
	};

	property_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Property_Context);
	    } else {
	        return this.getTypedRuleContext(Property_Context,i);
	    }
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.SEMI);
	    } else {
	        return this.getToken(LessParser.SEMI, i);
	    }
	};


	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	mixinReference = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MixinReferenceContext);
	    } else {
	        return this.getTypedRuleContext(MixinReferenceContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitBlock(this);
		}
	}


}



class MixinDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_mixinDefinition;
    }

	selectors() {
	    return this.getTypedRuleContext(SelectorsContext,0);
	};

	LPAREN() {
	    return this.getToken(LessParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(LessParser.RPAREN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	mixinDefinitionParam = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MixinDefinitionParamContext);
	    } else {
	        return this.getTypedRuleContext(MixinDefinitionParamContext,i);
	    }
	};

	Ellipsis() {
	    return this.getToken(LessParser.Ellipsis, 0);
	};

	mixinGuard() {
	    return this.getTypedRuleContext(MixinGuardContext,0);
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.SEMI);
	    } else {
	        return this.getToken(LessParser.SEMI, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterMixinDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitMixinDefinition(this);
		}
	}


}



class MixinGuardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_mixinGuard;
    }

	WHEN() {
	    return this.getToken(LessParser.WHEN, 0);
	};

	conditions() {
	    return this.getTypedRuleContext(ConditionsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterMixinGuard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitMixinGuard(this);
		}
	}


}



class MixinDefinitionParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_mixinDefinitionParam;
    }

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
	};

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterMixinDefinitionParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitMixinDefinitionParam(this);
		}
	}


}



class MixinReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_mixinReference;
    }

	selector() {
	    return this.getTypedRuleContext(SelectorContext,0);
	};

	LPAREN() {
	    return this.getToken(LessParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(LessParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(LessParser.SEMI, 0);
	};

	values() {
	    return this.getTypedRuleContext(ValuesContext,0);
	};

	IMPORTANT() {
	    return this.getToken(LessParser.IMPORTANT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterMixinReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitMixinReference(this);
		}
	}


}



class SelectorsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_selectors;
    }

	selector = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SelectorContext);
	    } else {
	        return this.getTypedRuleContext(SelectorContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.COMMA);
	    } else {
	        return this.getToken(LessParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterSelectors(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitSelectors(this);
		}
	}


}



class SelectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_selector;
    }

	element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementContext);
	    } else {
	        return this.getTypedRuleContext(ElementContext,i);
	    }
	};

	attrib = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttribContext);
	    } else {
	        return this.getTypedRuleContext(AttribContext,i);
	    }
	};

	pseudo() {
	    return this.getTypedRuleContext(PseudoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterSelector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitSelector(this);
		}
	}


}



class AttribContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_attrib;
    }

	LBRACK() {
	    return this.getToken(LessParser.LBRACK, 0);
	};

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.Identifier);
	    } else {
	        return this.getToken(LessParser.Identifier, i);
	    }
	};


	RBRACK() {
	    return this.getToken(LessParser.RBRACK, 0);
	};

	attribRelate() {
	    return this.getTypedRuleContext(AttribRelateContext,0);
	};

	StringLiteral() {
	    return this.getToken(LessParser.StringLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterAttrib(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitAttrib(this);
		}
	}


}



class NegationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_negation;
    }

	COLON() {
	    return this.getToken(LessParser.COLON, 0);
	};

	NOT() {
	    return this.getToken(LessParser.NOT, 0);
	};

	LPAREN() {
	    return this.getToken(LessParser.LPAREN, 0);
	};

	selectors() {
	    return this.getTypedRuleContext(SelectorsContext,0);
	};

	RPAREN() {
	    return this.getToken(LessParser.RPAREN, 0);
	};

	LBRACK() {
	    return this.getToken(LessParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(LessParser.RBRACK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterNegation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitNegation(this);
		}
	}


}



class PseudoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_pseudo;
    }

	Identifier() {
	    return this.getToken(LessParser.Identifier, 0);
	};

	COLON() {
	    return this.getToken(LessParser.COLON, 0);
	};

	COLONCOLON() {
	    return this.getToken(LessParser.COLONCOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterPseudo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitPseudo(this);
		}
	}


}



class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_element;
    }

	selectorPrefix() {
	    return this.getTypedRuleContext(SelectorPrefixContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	HASH() {
	    return this.getToken(LessParser.HASH, 0);
	};

	pseudo() {
	    return this.getTypedRuleContext(PseudoContext,0);
	};

	negation() {
	    return this.getTypedRuleContext(NegationContext,0);
	};

	PARENTREF() {
	    return this.getToken(LessParser.PARENTREF, 0);
	};

	TIMES() {
	    return this.getToken(LessParser.TIMES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitElement(this);
		}
	}


}



class SelectorPrefixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_selectorPrefix;
    }

	GT() {
	    return this.getToken(LessParser.GT, 0);
	};

	PLUS() {
	    return this.getToken(LessParser.PLUS, 0);
	};

	TIL() {
	    return this.getToken(LessParser.TIL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterSelectorPrefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitSelectorPrefix(this);
		}
	}


}



class AttribRelateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_attribRelate;
    }

	EQ() {
	    return this.getToken(LessParser.EQ, 0);
	};

	TILD_EQ() {
	    return this.getToken(LessParser.TILD_EQ, 0);
	};

	PIPE_EQ() {
	    return this.getToken(LessParser.PIPE_EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterAttribRelate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitAttribRelate(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_identifier;
    }

	Identifier() {
	    return this.getToken(LessParser.Identifier, 0);
	};

	identifierPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierPartContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierPartContext,i);
	    }
	};

	InterpolationStart() {
	    return this.getToken(LessParser.InterpolationStart, 0);
	};

	identifierVariableName() {
	    return this.getTypedRuleContext(IdentifierVariableNameContext,0);
	};

	BlockEnd() {
	    return this.getToken(LessParser.BlockEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class IdentifierPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_identifierPart;
    }

	InterpolationStartAfter() {
	    return this.getToken(LessParser.InterpolationStartAfter, 0);
	};

	identifierVariableName() {
	    return this.getTypedRuleContext(IdentifierVariableNameContext,0);
	};

	BlockEnd() {
	    return this.getToken(LessParser.BlockEnd, 0);
	};

	IdentifierAfter() {
	    return this.getToken(LessParser.IdentifierAfter, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterIdentifierPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitIdentifierPart(this);
		}
	}


}



class IdentifierVariableNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_identifierVariableName;
    }

	Identifier() {
	    return this.getToken(LessParser.Identifier, 0);
	};

	IdentifierAfter() {
	    return this.getToken(LessParser.IdentifierAfter, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterIdentifierVariableName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitIdentifierVariableName(this);
		}
	}


}



class Property_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_property_;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	COLON() {
	    return this.getToken(LessParser.COLON, 0);
	};

	values() {
	    return this.getTypedRuleContext(ValuesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterProperty_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitProperty_(this);
		}
	}


}



class ValuesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_values;
    }

	commandStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandStatementContext);
	    } else {
	        return this.getTypedRuleContext(CommandStatementContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LessParser.COMMA);
	    } else {
	        return this.getToken(LessParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterValues(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitValues(this);
		}
	}


}



class UrlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_url;
    }

	UrlStart() {
	    return this.getToken(LessParser.UrlStart, 0);
	};

	Url() {
	    return this.getToken(LessParser.Url, 0);
	};

	UrlEnd() {
	    return this.getToken(LessParser.UrlEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterUrl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitUrl(this);
		}
	}


}



class MeasurementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LessParser.RULE_measurement;
    }

	Number() {
	    return this.getToken(LessParser.Number, 0);
	};

	Unit() {
	    return this.getToken(LessParser.Unit, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.enterMeasurement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LessParserListener ) {
	        listener.exitMeasurement(this);
		}
	}


}




LessParser.StylesheetContext = StylesheetContext; 
LessParser.StatementContext = StatementContext; 
LessParser.VariableNameContext = VariableNameContext; 
LessParser.CommandStatementContext = CommandStatementContext; 
LessParser.MathCharacterContext = MathCharacterContext; 
LessParser.MathStatementContext = MathStatementContext; 
LessParser.ExpressionContext = ExpressionContext; 
LessParser.Function_Context = Function_Context; 
LessParser.ConditionsContext = ConditionsContext; 
LessParser.ConditionContext = ConditionContext; 
LessParser.ConditionStatementContext = ConditionStatementContext; 
LessParser.VariableDeclarationContext = VariableDeclarationContext; 
LessParser.ImportDeclarationContext = ImportDeclarationContext; 
LessParser.ImportOptionContext = ImportOptionContext; 
LessParser.ReferenceUrlContext = ReferenceUrlContext; 
LessParser.MediaTypesContext = MediaTypesContext; 
LessParser.RulesetContext = RulesetContext; 
LessParser.BlockContext = BlockContext; 
LessParser.MixinDefinitionContext = MixinDefinitionContext; 
LessParser.MixinGuardContext = MixinGuardContext; 
LessParser.MixinDefinitionParamContext = MixinDefinitionParamContext; 
LessParser.MixinReferenceContext = MixinReferenceContext; 
LessParser.SelectorsContext = SelectorsContext; 
LessParser.SelectorContext = SelectorContext; 
LessParser.AttribContext = AttribContext; 
LessParser.NegationContext = NegationContext; 
LessParser.PseudoContext = PseudoContext; 
LessParser.ElementContext = ElementContext; 
LessParser.SelectorPrefixContext = SelectorPrefixContext; 
LessParser.AttribRelateContext = AttribRelateContext; 
LessParser.IdentifierContext = IdentifierContext; 
LessParser.IdentifierPartContext = IdentifierPartContext; 
LessParser.IdentifierVariableNameContext = IdentifierVariableNameContext; 
LessParser.Property_Context = Property_Context; 
LessParser.ValuesContext = ValuesContext; 
LessParser.UrlContext = UrlContext; 
LessParser.MeasurementContext = MeasurementContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
