// Generated from ./less/LessParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LessParserListener from './LessParserListener.js';
const serializedATN = [4,1,143,369,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,1,0,5,0,76,8,0,10,0,12,0,79,9,0,1,1,1,1,1,1,1,1,1,
1,1,1,3,1,87,8,1,1,2,1,2,1,2,1,2,3,2,93,8,2,1,3,4,3,96,8,3,11,3,12,3,97,
1,3,3,3,101,8,3,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,
116,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,127,8,6,1,7,1,7,1,7,3,7,
132,8,7,1,7,1,7,1,8,1,8,1,8,5,8,139,8,8,10,8,12,8,142,9,8,1,9,1,9,1,9,1,
9,1,9,1,9,1,9,1,9,1,9,3,9,153,8,9,1,10,1,10,1,10,1,10,1,10,3,10,160,8,10,
1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,5,12,171,8,12,10,12,12,12,174,
9,12,1,12,1,12,3,12,178,8,12,1,12,1,12,3,12,182,8,12,1,12,1,12,1,13,1,13,
1,14,1,14,1,14,1,14,3,14,192,8,14,1,15,1,15,1,15,5,15,197,8,15,10,15,12,
15,200,9,15,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,5,17,211,8,17,10,
17,12,17,214,9,17,1,17,3,17,217,8,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,
5,18,226,8,18,10,18,12,18,229,9,18,3,18,231,8,18,1,18,3,18,234,8,18,1,18,
1,18,3,18,238,8,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,3,20,247,8,20,1,21,
1,21,1,21,3,21,252,8,21,1,21,1,21,3,21,256,8,21,1,21,1,21,1,22,1,22,1,22,
5,22,263,8,22,10,22,12,22,266,9,22,1,23,4,23,269,8,23,11,23,12,23,270,1,
23,5,23,274,8,23,10,23,12,23,277,9,23,1,23,3,23,280,8,23,1,24,1,24,1,24,
1,24,1,24,3,24,287,8,24,1,24,1,24,1,25,1,25,1,25,1,25,3,25,295,8,25,1,25,
1,25,3,25,299,8,25,1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,
1,27,1,27,1,27,1,27,3,27,316,8,27,1,28,1,28,1,29,1,29,1,30,1,30,5,30,324,
8,30,10,30,12,30,327,9,30,1,30,1,30,1,30,1,30,5,30,333,8,30,10,30,12,30,
336,9,30,3,30,338,8,30,1,31,1,31,1,31,1,31,1,31,3,31,345,8,31,1,32,1,32,
1,33,1,33,1,33,1,33,1,34,1,34,1,34,5,34,356,8,34,10,34,12,34,359,9,34,1,
35,1,35,1,35,1,35,1,36,1,36,3,36,367,8,36,1,36,0,0,37,0,2,4,6,8,10,12,14,
16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,
64,66,68,70,72,0,9,1,0,24,28,2,0,17,17,52,52,4,0,12,12,14,14,30,31,33,33,
1,0,44,49,1,0,53,54,2,0,15,15,23,23,2,0,12,13,24,24,1,0,33,35,2,0,53,53,
143,143,386,0,77,1,0,0,0,2,86,1,0,0,0,4,92,1,0,0,0,6,95,1,0,0,0,8,102,1,
0,0,0,10,104,1,0,0,0,12,126,1,0,0,0,14,128,1,0,0,0,16,135,1,0,0,0,18,152,
1,0,0,0,20,159,1,0,0,0,22,161,1,0,0,0,24,165,1,0,0,0,26,185,1,0,0,0,28,191,
1,0,0,0,30,193,1,0,0,0,32,201,1,0,0,0,34,204,1,0,0,0,36,220,1,0,0,0,38,241,
1,0,0,0,40,246,1,0,0,0,42,248,1,0,0,0,44,259,1,0,0,0,46,268,1,0,0,0,48,281,
1,0,0,0,50,290,1,0,0,0,52,302,1,0,0,0,54,315,1,0,0,0,56,317,1,0,0,0,58,319,
1,0,0,0,60,337,1,0,0,0,62,344,1,0,0,0,64,346,1,0,0,0,66,348,1,0,0,0,68,352,
1,0,0,0,70,360,1,0,0,0,72,364,1,0,0,0,74,76,3,2,1,0,75,74,1,0,0,0,76,79,
1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,1,1,0,0,0,79,77,1,0,0,0,80,87,3,24,
12,0,81,87,3,32,16,0,82,83,3,22,11,0,83,84,5,16,0,0,84,87,1,0,0,0,85,87,
3,36,18,0,86,80,1,0,0,0,86,81,1,0,0,0,86,82,1,0,0,0,86,85,1,0,0,0,87,3,1,
0,0,0,88,89,5,20,0,0,89,93,3,4,2,0,90,91,5,20,0,0,91,93,5,53,0,0,92,88,1,
0,0,0,92,90,1,0,0,0,93,5,1,0,0,0,94,96,3,12,6,0,95,94,1,0,0,0,96,97,1,0,
0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,100,1,0,0,0,99,101,3,10,5,0,100,99,1,
0,0,0,100,101,1,0,0,0,101,7,1,0,0,0,102,103,7,0,0,0,103,9,1,0,0,0,104,105,
3,8,4,0,105,106,3,6,3,0,106,11,1,0,0,0,107,127,3,72,36,0,108,109,3,60,30,
0,109,110,5,41,0,0,110,127,1,0,0,0,111,127,3,60,30,0,112,113,3,60,30,0,113,
115,5,6,0,0,114,116,3,68,34,0,115,114,1,0,0,0,115,116,1,0,0,0,116,117,1,
0,0,0,117,118,5,7,0,0,118,127,1,0,0,0,119,127,5,56,0,0,120,127,5,54,0,0,
121,127,3,70,35,0,122,123,3,4,2,0,123,124,5,41,0,0,124,127,1,0,0,0,125,127,
3,4,2,0,126,107,1,0,0,0,126,108,1,0,0,0,126,111,1,0,0,0,126,112,1,0,0,0,
126,119,1,0,0,0,126,120,1,0,0,0,126,121,1,0,0,0,126,122,1,0,0,0,126,125,
1,0,0,0,127,13,1,0,0,0,128,129,5,60,0,0,129,131,5,6,0,0,130,132,3,68,34,
0,131,130,1,0,0,0,131,132,1,0,0,0,132,133,1,0,0,0,133,134,5,7,0,0,134,15,
1,0,0,0,135,140,3,18,9,0,136,137,7,1,0,0,137,139,3,18,9,0,138,136,1,0,0,
0,139,142,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,17,1,0,0,0,142,140,
1,0,0,0,143,144,5,6,0,0,144,145,3,20,10,0,145,146,5,7,0,0,146,153,1,0,0,
0,147,148,5,51,0,0,148,149,5,6,0,0,149,150,3,20,10,0,150,151,5,7,0,0,151,
153,1,0,0,0,152,143,1,0,0,0,152,147,1,0,0,0,153,19,1,0,0,0,154,155,3,6,3,
0,155,156,7,2,0,0,156,157,3,6,3,0,157,160,1,0,0,0,158,160,3,6,3,0,159,154,
1,0,0,0,159,158,1,0,0,0,160,21,1,0,0,0,161,162,3,4,2,0,162,163,5,15,0,0,
163,164,3,68,34,0,164,23,1,0,0,0,165,177,5,38,0,0,166,167,5,6,0,0,167,172,
3,26,13,0,168,169,5,17,0,0,169,171,3,26,13,0,170,168,1,0,0,0,171,174,1,0,
0,0,172,170,1,0,0,0,172,173,1,0,0,0,173,175,1,0,0,0,174,172,1,0,0,0,175,
176,5,7,0,0,176,178,1,0,0,0,177,166,1,0,0,0,177,178,1,0,0,0,178,179,1,0,
0,0,179,181,3,28,14,0,180,182,3,30,15,0,181,180,1,0,0,0,181,182,1,0,0,0,
182,183,1,0,0,0,183,184,5,16,0,0,184,25,1,0,0,0,185,186,7,3,0,0,186,27,1,
0,0,0,187,192,5,54,0,0,188,189,5,37,0,0,189,190,5,140,0,0,190,192,5,139,
0,0,191,187,1,0,0,0,191,188,1,0,0,0,192,29,1,0,0,0,193,198,5,53,0,0,194,
195,5,17,0,0,195,197,5,53,0,0,196,194,1,0,0,0,197,200,1,0,0,0,198,196,1,
0,0,0,198,199,1,0,0,0,199,31,1,0,0,0,200,198,1,0,0,0,201,202,3,44,22,0,202,
203,3,34,17,0,203,33,1,0,0,0,204,212,5,8,0,0,205,206,3,66,33,0,206,207,5,
16,0,0,207,211,1,0,0,0,208,211,3,2,1,0,209,211,3,42,21,0,210,205,1,0,0,0,
210,208,1,0,0,0,210,209,1,0,0,0,211,214,1,0,0,0,212,210,1,0,0,0,212,213,
1,0,0,0,213,216,1,0,0,0,214,212,1,0,0,0,215,217,3,66,33,0,216,215,1,0,0,
0,216,217,1,0,0,0,217,218,1,0,0,0,218,219,5,9,0,0,219,35,1,0,0,0,220,221,
3,44,22,0,221,230,5,6,0,0,222,227,3,40,20,0,223,224,5,16,0,0,224,226,3,40,
20,0,225,223,1,0,0,0,226,229,1,0,0,0,227,225,1,0,0,0,227,228,1,0,0,0,228,
231,1,0,0,0,229,227,1,0,0,0,230,222,1,0,0,0,230,231,1,0,0,0,231,233,1,0,
0,0,232,234,5,4,0,0,233,232,1,0,0,0,233,234,1,0,0,0,234,235,1,0,0,0,235,
237,5,7,0,0,236,238,3,38,19,0,237,236,1,0,0,0,237,238,1,0,0,0,238,239,1,
0,0,0,239,240,3,34,17,0,240,37,1,0,0,0,241,242,5,50,0,0,242,243,3,16,8,0,
243,39,1,0,0,0,244,247,3,4,2,0,245,247,3,22,11,0,246,244,1,0,0,0,246,245,
1,0,0,0,247,41,1,0,0,0,248,249,3,46,23,0,249,251,5,6,0,0,250,252,3,68,34,
0,251,250,1,0,0,0,251,252,1,0,0,0,252,253,1,0,0,0,253,255,5,7,0,0,254,256,
5,41,0,0,255,254,1,0,0,0,255,256,1,0,0,0,256,257,1,0,0,0,257,258,5,16,0,
0,258,43,1,0,0,0,259,264,3,46,23,0,260,261,5,17,0,0,261,263,3,46,23,0,262,
260,1,0,0,0,263,266,1,0,0,0,264,262,1,0,0,0,264,265,1,0,0,0,265,45,1,0,0,
0,266,264,1,0,0,0,267,269,3,54,27,0,268,267,1,0,0,0,269,270,1,0,0,0,270,
268,1,0,0,0,270,271,1,0,0,0,271,275,1,0,0,0,272,274,3,48,24,0,273,272,1,
0,0,0,274,277,1,0,0,0,275,273,1,0,0,0,275,276,1,0,0,0,276,279,1,0,0,0,277,
275,1,0,0,0,278,280,3,52,26,0,279,278,1,0,0,0,279,280,1,0,0,0,280,47,1,0,
0,0,281,282,5,10,0,0,282,286,5,53,0,0,283,284,3,58,29,0,284,285,7,4,0,0,
285,287,1,0,0,0,286,283,1,0,0,0,286,287,1,0,0,0,287,288,1,0,0,0,288,289,
5,11,0,0,289,49,1,0,0,0,290,291,5,15,0,0,291,292,5,51,0,0,292,294,5,6,0,
0,293,295,5,10,0,0,294,293,1,0,0,0,294,295,1,0,0,0,295,296,1,0,0,0,296,298,
3,44,22,0,297,299,5,11,0,0,298,297,1,0,0,0,298,299,1,0,0,0,299,300,1,0,0,
0,300,301,5,7,0,0,301,51,1,0,0,0,302,303,7,5,0,0,303,304,5,53,0,0,304,53,
1,0,0,0,305,306,3,56,28,0,306,307,3,60,30,0,307,316,1,0,0,0,308,316,3,60,
30,0,309,310,5,22,0,0,310,316,3,60,30,0,311,316,3,52,26,0,312,316,3,50,25,
0,313,316,5,21,0,0,314,316,5,25,0,0,315,305,1,0,0,0,315,308,1,0,0,0,315,
309,1,0,0,0,315,311,1,0,0,0,315,312,1,0,0,0,315,313,1,0,0,0,315,314,1,0,
0,0,316,55,1,0,0,0,317,318,7,6,0,0,318,57,1,0,0,0,319,320,7,7,0,0,320,59,
1,0,0,0,321,325,5,53,0,0,322,324,3,62,31,0,323,322,1,0,0,0,324,327,1,0,0,
0,325,323,1,0,0,0,325,326,1,0,0,0,326,338,1,0,0,0,327,325,1,0,0,0,328,329,
5,5,0,0,329,330,3,64,32,0,330,334,5,9,0,0,331,333,3,62,31,0,332,331,1,0,
0,0,333,336,1,0,0,0,334,332,1,0,0,0,334,335,1,0,0,0,335,338,1,0,0,0,336,
334,1,0,0,0,337,321,1,0,0,0,337,328,1,0,0,0,338,61,1,0,0,0,339,340,5,142,
0,0,340,341,3,64,32,0,341,342,5,9,0,0,342,345,1,0,0,0,343,345,5,143,0,0,
344,339,1,0,0,0,344,343,1,0,0,0,345,63,1,0,0,0,346,347,7,8,0,0,347,65,1,
0,0,0,348,349,3,60,30,0,349,350,5,15,0,0,350,351,3,68,34,0,351,67,1,0,0,
0,352,357,3,6,3,0,353,354,5,17,0,0,354,356,3,6,3,0,355,353,1,0,0,0,356,359,
1,0,0,0,357,355,1,0,0,0,357,358,1,0,0,0,358,69,1,0,0,0,359,357,1,0,0,0,360,
361,5,37,0,0,361,362,5,140,0,0,362,363,5,139,0,0,363,71,1,0,0,0,364,366,
5,55,0,0,365,367,5,3,0,0,366,365,1,0,0,0,366,367,1,0,0,0,367,73,1,0,0,0,
40,77,86,92,97,100,115,126,131,140,152,159,172,177,181,191,198,210,212,216,
227,230,233,237,246,251,255,264,270,275,279,286,294,298,315,325,334,337,
344,357,366];


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

    get atn() {
        return atn;
    }



	stylesheet() {
	    let localctx = new StylesheetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LessParser.RULE_stylesheet);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LessParser.InterpolationStart) | (1 << LessParser.GT) | (1 << LessParser.TIL) | (1 << LessParser.COLON) | (1 << LessParser.AT) | (1 << LessParser.PARENTREF) | (1 << LessParser.HASH) | (1 << LessParser.COLONCOLON) | (1 << LessParser.PLUS) | (1 << LessParser.TIMES))) !== 0) || _la===LessParser.IMPORT || _la===LessParser.Identifier) {
	            this.state = 74;
	            this.statement();
	            this.state = 79;
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LessParser.RULE_statement);
	    try {
	        this.state = 86;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 80;
	            this.importDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
	            this.ruleset();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 82;
	            this.variableDeclaration();
	            this.state = 83;
	            this.match(LessParser.SEMI);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 85;
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
	        this.state = 92;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88;
	            this.match(LessParser.AT);
	            this.state = 89;
	            this.variableName();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
	            this.match(LessParser.AT);
	            this.state = 91;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 94;
	            this.expression();
	            this.state = 97; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===LessParser.InterpolationStart || _la===LessParser.AT || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0));
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LessParser.PLUS) | (1 << LessParser.TIMES) | (1 << LessParser.DIV) | (1 << LessParser.MINUS) | (1 << LessParser.PERC))) !== 0)) {
	            this.state = 99;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LessParser.PLUS) | (1 << LessParser.TIMES) | (1 << LessParser.DIV) | (1 << LessParser.MINUS) | (1 << LessParser.PERC))) !== 0))) {
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
	        this.state = 104;
	        this.mathCharacter();
	        this.state = 105;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 126;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 107;
	            this.measurement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 108;
	            this.identifier();
	            this.state = 109;
	            this.match(LessParser.IMPORTANT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 111;
	            this.identifier();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 112;
	            this.identifier();
	            this.state = 113;
	            this.match(LessParser.LPAREN);
	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===LessParser.InterpolationStart || _la===LessParser.AT || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0)) {
	                this.state = 114;
	                this.values();
	            }

	            this.state = 117;
	            this.match(LessParser.RPAREN);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 119;
	            this.match(LessParser.Color);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 120;
	            this.match(LessParser.StringLiteral);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 121;
	            this.url();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 122;
	            this.variableName();
	            this.state = 123;
	            this.match(LessParser.IMPORTANT);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 125;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(LessParser.FUNCTION_NAME);
	        this.state = 129;
	        this.match(LessParser.LPAREN);
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.InterpolationStart || _la===LessParser.AT || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0)) {
	            this.state = 130;
	            this.values();
	        }

	        this.state = 133;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.condition();
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LessParser.COMMA || _la===LessParser.AND) {
	            this.state = 136;
	            _la = this._input.LA(1);
	            if(!(_la===LessParser.COMMA || _la===LessParser.AND)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 137;
	            this.condition();
	            this.state = 142;
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
	        this.state = 152;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LessParser.LPAREN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 143;
	            this.match(LessParser.LPAREN);
	            this.state = 144;
	            this.conditionStatement();
	            this.state = 145;
	            this.match(LessParser.RPAREN);
	            break;
	        case LessParser.NOT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 147;
	            this.match(LessParser.NOT);
	            this.state = 148;
	            this.match(LessParser.LPAREN);
	            this.state = 149;
	            this.conditionStatement();
	            this.state = 150;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 159;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 154;
	            this.commandStatement();
	            this.state = 155;
	            _la = this._input.LA(1);
	            if(!(((((_la - 12)) & ~0x1f) == 0 && ((1 << (_la - 12)) & ((1 << (LessParser.GT - 12)) | (1 << (LessParser.LT - 12)) | (1 << (LessParser.GTEQ - 12)) | (1 << (LessParser.LTEQ - 12)) | (1 << (LessParser.EQ - 12)))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 156;
	            this.commandStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 158;
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
	        this.state = 161;
	        this.variableName();
	        this.state = 162;
	        this.match(LessParser.COLON);
	        this.state = 163;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this.match(LessParser.IMPORT);
	        this.state = 177;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.LPAREN) {
	            this.state = 166;
	            this.match(LessParser.LPAREN);

	            this.state = 167;
	            this.importOption();
	            this.state = 172;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LessParser.COMMA) {
	                this.state = 168;
	                this.match(LessParser.COMMA);
	                this.state = 169;
	                this.importOption();
	                this.state = 174;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 175;
	            this.match(LessParser.RPAREN);
	        }

	        this.state = 179;
	        this.referenceUrl();
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.Identifier) {
	            this.state = 180;
	            this.mediaTypes();
	        }

	        this.state = 183;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        _la = this._input.LA(1);
	        if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (LessParser.REFERENCE - 44)) | (1 << (LessParser.INLINE - 44)) | (1 << (LessParser.LESS - 44)) | (1 << (LessParser.CSS - 44)) | (1 << (LessParser.ONCE - 44)) | (1 << (LessParser.MULTIPLE - 44)))) !== 0))) {
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
	        this.state = 191;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LessParser.StringLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 187;
	            this.match(LessParser.StringLiteral);
	            break;
	        case LessParser.UrlStart:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 188;
	            this.match(LessParser.UrlStart);
	            this.state = 189;
	            this.match(LessParser.Url);
	            this.state = 190;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(LessParser.Identifier);
	        this.state = 198;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LessParser.COMMA) {
	            this.state = 194;
	            this.match(LessParser.COMMA);
	            this.state = 195;
	            this.match(LessParser.Identifier);
	            this.state = 200;
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
	        this.state = 201;
	        this.selectors();
	        this.state = 202;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.match(LessParser.BlockStart);
	        this.state = 212;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 210;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 205;
	                    this.property_();
	                    this.state = 206;
	                    this.match(LessParser.SEMI);
	                    break;

	                case 2:
	                    this.state = 208;
	                    this.statement();
	                    break;

	                case 3:
	                    this.state = 209;
	                    this.mixinReference();
	                    break;

	                } 
	            }
	            this.state = 214;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	        this.state = 216;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.InterpolationStart || _la===LessParser.Identifier) {
	            this.state = 215;
	            this.property_();
	        }

	        this.state = 218;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.selectors();
	        this.state = 221;
	        this.match(LessParser.LPAREN);
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.AT) {
	            this.state = 222;
	            this.mixinDefinitionParam();
	            this.state = 227;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LessParser.SEMI) {
	                this.state = 223;
	                this.match(LessParser.SEMI);
	                this.state = 224;
	                this.mixinDefinitionParam();
	                this.state = 229;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 233;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.Ellipsis) {
	            this.state = 232;
	            this.match(LessParser.Ellipsis);
	        }

	        this.state = 235;
	        this.match(LessParser.RPAREN);
	        this.state = 237;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.WHEN) {
	            this.state = 236;
	            this.mixinGuard();
	        }

	        this.state = 239;
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
	        this.state = 241;
	        this.match(LessParser.WHEN);
	        this.state = 242;
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
	        this.state = 246;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 244;
	            this.variableName();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 245;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.selector();
	        this.state = 249;
	        this.match(LessParser.LPAREN);
	        this.state = 251;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.InterpolationStart || _la===LessParser.AT || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0)) {
	            this.state = 250;
	            this.values();
	        }

	        this.state = 253;
	        this.match(LessParser.RPAREN);
	        this.state = 255;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.IMPORTANT) {
	            this.state = 254;
	            this.match(LessParser.IMPORTANT);
	        }

	        this.state = 257;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.selector();
	        this.state = 264;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LessParser.COMMA) {
	            this.state = 260;
	            this.match(LessParser.COMMA);
	            this.state = 261;
	            this.selector();
	            this.state = 266;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 267;
	        		this.element();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 270; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,27, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 275;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LessParser.LBRACK) {
	            this.state = 272;
	            this.attrib();
	            this.state = 277;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 279;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.COLON || _la===LessParser.COLONCOLON) {
	            this.state = 278;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this.match(LessParser.LBRACK);
	        this.state = 282;
	        this.match(LessParser.Identifier);
	        this.state = 286;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (LessParser.EQ - 33)) | (1 << (LessParser.PIPE_EQ - 33)) | (1 << (LessParser.TILD_EQ - 33)))) !== 0)) {
	            this.state = 283;
	            this.attribRelate();
	            this.state = 284;
	            _la = this._input.LA(1);
	            if(!(_la===LessParser.Identifier || _la===LessParser.StringLiteral)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 288;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.match(LessParser.COLON);
	        this.state = 291;
	        this.match(LessParser.NOT);
	        this.state = 292;
	        this.match(LessParser.LPAREN);
	        this.state = 294;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.LBRACK) {
	            this.state = 293;
	            this.match(LessParser.LBRACK);
	        }

	        this.state = 296;
	        this.selectors();
	        this.state = 298;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.RBRACK) {
	            this.state = 297;
	            this.match(LessParser.RBRACK);
	        }

	        this.state = 300;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        _la = this._input.LA(1);
	        if(!(_la===LessParser.COLON || _la===LessParser.COLONCOLON)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 303;
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
	        this.state = 315;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 305;
	            this.selectorPrefix();
	            this.state = 306;
	            this.identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 308;
	            this.identifier();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 309;
	            this.match(LessParser.HASH);
	            this.state = 310;
	            this.identifier();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 311;
	            this.pseudo();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 312;
	            this.negation();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 313;
	            this.match(LessParser.PARENTREF);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 314;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 317;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LessParser.GT) | (1 << LessParser.TIL) | (1 << LessParser.PLUS))) !== 0))) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        _la = this._input.LA(1);
	        if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (LessParser.EQ - 33)) | (1 << (LessParser.PIPE_EQ - 33)) | (1 << (LessParser.TILD_EQ - 33)))) !== 0))) {
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
	    var _la = 0; // Token type
	    try {
	        this.state = 337;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LessParser.Identifier:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 321;
	            this.match(LessParser.Identifier);
	            this.state = 325;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LessParser.InterpolationStartAfter || _la===LessParser.IdentifierAfter) {
	                this.state = 322;
	                this.identifierPart();
	                this.state = 327;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case LessParser.InterpolationStart:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 328;
	            this.match(LessParser.InterpolationStart);
	            this.state = 329;
	            this.identifierVariableName();
	            this.state = 330;
	            this.match(LessParser.BlockEnd);
	            this.state = 334;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LessParser.InterpolationStartAfter || _la===LessParser.IdentifierAfter) {
	                this.state = 331;
	                this.identifierPart();
	                this.state = 336;
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
	        this.state = 344;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LessParser.InterpolationStartAfter:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 339;
	            this.match(LessParser.InterpolationStartAfter);
	            this.state = 340;
	            this.identifierVariableName();
	            this.state = 341;
	            this.match(LessParser.BlockEnd);
	            break;
	        case LessParser.IdentifierAfter:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 343;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
	        _la = this._input.LA(1);
	        if(!(_la===LessParser.Identifier || _la===LessParser.IdentifierAfter)) {
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
	        this.state = 348;
	        this.identifier();
	        this.state = 349;
	        this.match(LessParser.COLON);
	        this.state = 350;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        this.commandStatement();
	        this.state = 357;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LessParser.COMMA) {
	            this.state = 353;
	            this.match(LessParser.COMMA);
	            this.state = 354;
	            this.commandStatement();
	            this.state = 359;
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
	        this.state = 360;
	        this.match(LessParser.UrlStart);
	        this.state = 361;
	        this.match(LessParser.Url);
	        this.state = 362;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this.match(LessParser.Number);
	        this.state = 366;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LessParser.Unit) {
	            this.state = 365;
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
