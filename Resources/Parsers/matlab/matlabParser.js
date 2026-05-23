// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/matlab/matlab.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import matlabListener from './matlabListener.js';
const serializedATN = [4,1,45,435,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,1,0,3,0,72,8,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,3,1,89,8,1,1,2,1,2,1,2,3,2,94,8,2,1,2,1,2,1,2,1,2,5,2,100,8,2,10,2,
12,2,103,9,2,1,3,1,3,3,3,107,8,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,115,8,4,10,
4,12,4,118,9,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,3,6,129,8,6,1,7,1,7,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,160,8,8,10,8,12,8,163,9,8,1,9,1,9,
1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,174,8,9,10,9,12,9,177,9,9,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,194,8,10,
10,10,12,10,197,9,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,208,
8,11,10,11,12,11,211,9,11,1,12,1,12,1,12,1,12,1,12,1,12,5,12,219,8,12,10,
12,12,12,222,9,12,1,13,1,13,1,13,1,13,1,13,1,13,5,13,230,8,13,10,13,12,13,
233,9,13,1,14,1,14,1,14,1,14,1,14,1,14,5,14,241,8,14,10,14,12,14,244,9,14,
1,15,1,15,1,15,1,15,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,259,
8,17,1,18,1,18,1,18,1,18,1,18,5,18,266,8,18,10,18,12,18,269,9,18,1,19,1,
19,1,19,1,19,1,19,5,19,276,8,19,10,19,12,19,279,9,19,1,20,1,20,1,20,1,20,
1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,3,22,293,8,22,1,23,1,23,1,23,1,24,
1,24,3,24,300,8,24,1,25,1,25,1,25,1,25,1,25,5,25,307,8,25,10,25,12,25,310,
9,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,
26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,
1,26,1,26,3,26,342,8,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
5,27,354,8,27,10,27,12,27,357,9,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,
28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,
1,28,1,28,3,28,383,8,28,1,29,1,29,1,29,1,29,3,29,389,8,29,1,30,1,30,1,30,
1,30,1,30,1,30,3,30,397,8,30,1,31,1,31,1,31,1,31,1,31,1,31,5,31,405,8,31,
10,31,12,31,408,9,31,1,32,1,32,1,32,1,32,1,32,3,32,415,8,32,1,33,1,33,1,
33,1,33,1,33,1,33,1,33,1,33,1,33,3,33,426,8,33,1,34,1,34,1,34,1,34,1,34,
3,34,433,8,34,1,34,0,14,4,8,16,18,20,22,24,26,28,36,38,50,54,62,35,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
56,58,60,62,64,66,68,0,2,1,0,7,9,3,0,6,6,19,19,44,44,454,0,71,1,0,0,0,2,
88,1,0,0,0,4,93,1,0,0,0,6,106,1,0,0,0,8,108,1,0,0,0,10,119,1,0,0,0,12,128,
1,0,0,0,14,130,1,0,0,0,16,132,1,0,0,0,18,164,1,0,0,0,20,178,1,0,0,0,22,198,
1,0,0,0,24,212,1,0,0,0,26,223,1,0,0,0,28,234,1,0,0,0,30,245,1,0,0,0,32,249,
1,0,0,0,34,258,1,0,0,0,36,260,1,0,0,0,38,270,1,0,0,0,40,280,1,0,0,0,42,284,
1,0,0,0,44,292,1,0,0,0,46,294,1,0,0,0,48,299,1,0,0,0,50,301,1,0,0,0,52,341,
1,0,0,0,54,343,1,0,0,0,56,382,1,0,0,0,58,388,1,0,0,0,60,396,1,0,0,0,62,398,
1,0,0,0,64,414,1,0,0,0,66,425,1,0,0,0,68,432,1,0,0,0,70,72,3,36,18,0,71,
70,1,0,0,0,71,72,1,0,0,0,72,73,1,0,0,0,73,74,5,0,0,1,74,1,1,0,0,0,75,89,
5,42,0,0,76,89,5,43,0,0,77,89,5,41,0,0,78,79,5,1,0,0,79,80,3,28,14,0,80,
81,5,2,0,0,81,89,1,0,0,0,82,83,5,3,0,0,83,89,5,4,0,0,84,85,5,3,0,0,85,86,
3,50,25,0,86,87,5,4,0,0,87,89,1,0,0,0,88,75,1,0,0,0,88,76,1,0,0,0,88,77,
1,0,0,0,88,78,1,0,0,0,88,82,1,0,0,0,88,84,1,0,0,0,89,3,1,0,0,0,90,91,6,2,
-1,0,91,94,3,2,1,0,92,94,3,10,5,0,93,90,1,0,0,0,93,92,1,0,0,0,94,101,1,0,
0,0,95,96,10,2,0,0,96,100,5,39,0,0,97,98,10,1,0,0,98,100,5,40,0,0,99,95,
1,0,0,0,99,97,1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,
5,1,0,0,0,103,101,1,0,0,0,104,107,5,5,0,0,105,107,3,28,14,0,106,104,1,0,
0,0,106,105,1,0,0,0,107,7,1,0,0,0,108,109,6,4,-1,0,109,110,3,6,3,0,110,116,
1,0,0,0,111,112,10,1,0,0,112,113,5,6,0,0,113,115,3,6,3,0,114,111,1,0,0,0,
115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,9,1,0,0,0,118,116,1,
0,0,0,119,120,5,42,0,0,120,121,5,1,0,0,121,122,3,8,4,0,122,123,5,2,0,0,123,
11,1,0,0,0,124,129,3,4,2,0,125,126,3,14,7,0,126,127,3,4,2,0,127,129,1,0,
0,0,128,124,1,0,0,0,128,125,1,0,0,0,129,13,1,0,0,0,130,131,7,0,0,0,131,15,
1,0,0,0,132,133,6,8,-1,0,133,134,3,12,6,0,134,161,1,0,0,0,135,136,10,8,0,
0,136,137,5,10,0,0,137,160,3,12,6,0,138,139,10,7,0,0,139,140,5,11,0,0,140,
160,3,12,6,0,141,142,10,6,0,0,142,143,5,12,0,0,143,160,3,12,6,0,144,145,
10,5,0,0,145,146,5,13,0,0,146,160,3,12,6,0,147,148,10,4,0,0,148,149,5,20,
0,0,149,160,3,12,6,0,150,151,10,3,0,0,151,152,5,21,0,0,152,160,3,12,6,0,
153,154,10,2,0,0,154,155,5,22,0,0,155,160,3,12,6,0,156,157,10,1,0,0,157,
158,5,23,0,0,158,160,3,12,6,0,159,135,1,0,0,0,159,138,1,0,0,0,159,141,1,
0,0,0,159,144,1,0,0,0,159,147,1,0,0,0,159,150,1,0,0,0,159,153,1,0,0,0,159,
156,1,0,0,0,160,163,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,162,17,1,0,0,
0,163,161,1,0,0,0,164,165,6,9,-1,0,165,166,3,16,8,0,166,175,1,0,0,0,167,
168,10,2,0,0,168,169,5,7,0,0,169,174,3,16,8,0,170,171,10,1,0,0,171,172,5,
8,0,0,172,174,3,16,8,0,173,167,1,0,0,0,173,170,1,0,0,0,174,177,1,0,0,0,175,
173,1,0,0,0,175,176,1,0,0,0,176,19,1,0,0,0,177,175,1,0,0,0,178,179,6,10,
-1,0,179,180,3,18,9,0,180,195,1,0,0,0,181,182,10,4,0,0,182,183,5,14,0,0,
183,194,3,18,9,0,184,185,10,3,0,0,185,186,5,15,0,0,186,194,3,18,9,0,187,
188,10,2,0,0,188,189,5,35,0,0,189,194,3,18,9,0,190,191,10,1,0,0,191,192,
5,36,0,0,192,194,3,18,9,0,193,181,1,0,0,0,193,184,1,0,0,0,193,187,1,0,0,
0,193,190,1,0,0,0,194,197,1,0,0,0,195,193,1,0,0,0,195,196,1,0,0,0,196,21,
1,0,0,0,197,195,1,0,0,0,198,199,6,11,-1,0,199,200,3,20,10,0,200,209,1,0,
0,0,201,202,10,2,0,0,202,203,5,37,0,0,203,208,3,20,10,0,204,205,10,1,0,0,
205,206,5,38,0,0,206,208,3,20,10,0,207,201,1,0,0,0,207,204,1,0,0,0,208,211,
1,0,0,0,209,207,1,0,0,0,209,210,1,0,0,0,210,23,1,0,0,0,211,209,1,0,0,0,212,
213,6,12,-1,0,213,214,3,22,11,0,214,220,1,0,0,0,215,216,10,1,0,0,216,217,
5,16,0,0,217,219,3,22,11,0,218,215,1,0,0,0,219,222,1,0,0,0,220,218,1,0,0,
0,220,221,1,0,0,0,221,25,1,0,0,0,222,220,1,0,0,0,223,224,6,13,-1,0,224,225,
3,24,12,0,225,231,1,0,0,0,226,227,10,1,0,0,227,228,5,17,0,0,228,230,3,24,
12,0,229,226,1,0,0,0,230,233,1,0,0,0,231,229,1,0,0,0,231,232,1,0,0,0,232,
27,1,0,0,0,233,231,1,0,0,0,234,235,6,14,-1,0,235,236,3,26,13,0,236,242,1,
0,0,0,237,238,10,1,0,0,238,239,5,5,0,0,239,241,3,26,13,0,240,237,1,0,0,0,
241,244,1,0,0,0,242,240,1,0,0,0,242,243,1,0,0,0,243,29,1,0,0,0,244,242,1,
0,0,0,245,246,3,4,2,0,246,247,5,18,0,0,247,248,3,28,14,0,248,31,1,0,0,0,
249,250,7,1,0,0,250,33,1,0,0,0,251,259,3,40,20,0,252,259,3,42,21,0,253,259,
3,46,23,0,254,259,3,44,22,0,255,259,3,52,26,0,256,259,3,56,28,0,257,259,
3,58,29,0,258,251,1,0,0,0,258,252,1,0,0,0,258,253,1,0,0,0,258,254,1,0,0,
0,258,255,1,0,0,0,258,256,1,0,0,0,258,257,1,0,0,0,259,35,1,0,0,0,260,261,
6,18,-1,0,261,262,3,34,17,0,262,267,1,0,0,0,263,264,10,1,0,0,264,266,3,34,
17,0,265,263,1,0,0,0,266,269,1,0,0,0,267,265,1,0,0,0,267,268,1,0,0,0,268,
37,1,0,0,0,269,267,1,0,0,0,270,271,6,19,-1,0,271,272,5,42,0,0,272,277,1,
0,0,0,273,274,10,1,0,0,274,276,5,42,0,0,275,273,1,0,0,0,276,279,1,0,0,0,
277,275,1,0,0,0,277,278,1,0,0,0,278,39,1,0,0,0,279,277,1,0,0,0,280,281,5,
30,0,0,281,282,3,38,19,0,282,283,3,32,16,0,283,41,1,0,0,0,284,285,5,32,0,
0,285,286,3,38,19,0,286,287,3,32,16,0,287,43,1,0,0,0,288,293,3,32,16,0,289,
290,3,28,14,0,290,291,3,32,16,0,291,293,1,0,0,0,292,288,1,0,0,0,292,289,
1,0,0,0,293,45,1,0,0,0,294,295,3,30,15,0,295,296,3,32,16,0,296,47,1,0,0,
0,297,300,3,28,14,0,298,300,3,44,22,0,299,297,1,0,0,0,299,298,1,0,0,0,300,
49,1,0,0,0,301,302,6,25,-1,0,302,303,3,48,24,0,303,308,1,0,0,0,304,305,10,
1,0,0,305,307,3,48,24,0,306,304,1,0,0,0,307,310,1,0,0,0,308,306,1,0,0,0,
308,309,1,0,0,0,309,51,1,0,0,0,310,308,1,0,0,0,311,312,5,31,0,0,312,313,
3,28,14,0,313,314,3,36,18,0,314,315,5,29,0,0,315,316,3,32,16,0,316,342,1,
0,0,0,317,318,5,31,0,0,318,319,3,28,14,0,319,320,3,36,18,0,320,321,5,33,
0,0,321,322,3,36,18,0,322,323,5,29,0,0,323,324,3,32,16,0,324,342,1,0,0,0,
325,326,5,31,0,0,326,327,3,28,14,0,327,328,3,36,18,0,328,329,3,54,27,0,329,
330,5,29,0,0,330,331,3,32,16,0,331,342,1,0,0,0,332,333,5,31,0,0,333,334,
3,28,14,0,334,335,3,36,18,0,335,336,3,54,27,0,336,337,5,33,0,0,337,338,3,
36,18,0,338,339,5,29,0,0,339,340,3,32,16,0,340,342,1,0,0,0,341,311,1,0,0,
0,341,317,1,0,0,0,341,325,1,0,0,0,341,332,1,0,0,0,342,53,1,0,0,0,343,344,
6,27,-1,0,344,345,5,34,0,0,345,346,3,28,14,0,346,347,3,36,18,0,347,355,1,
0,0,0,348,349,10,1,0,0,349,350,5,34,0,0,350,351,3,28,14,0,351,352,3,36,18,
0,352,354,1,0,0,0,353,348,1,0,0,0,354,357,1,0,0,0,355,353,1,0,0,0,355,356,
1,0,0,0,356,55,1,0,0,0,357,355,1,0,0,0,358,359,5,28,0,0,359,360,3,28,14,
0,360,361,3,36,18,0,361,362,5,29,0,0,362,363,3,32,16,0,363,383,1,0,0,0,364,
365,5,27,0,0,365,366,5,42,0,0,366,367,5,18,0,0,367,368,3,28,14,0,368,369,
3,36,18,0,369,370,5,29,0,0,370,371,3,32,16,0,371,383,1,0,0,0,372,373,5,27,
0,0,373,374,5,1,0,0,374,375,5,42,0,0,375,376,5,18,0,0,376,377,3,28,14,0,
377,378,5,2,0,0,378,379,3,36,18,0,379,380,5,29,0,0,380,381,3,32,16,0,381,
383,1,0,0,0,382,358,1,0,0,0,382,364,1,0,0,0,382,372,1,0,0,0,383,57,1,0,0,
0,384,385,5,24,0,0,385,389,3,32,16,0,386,387,5,25,0,0,387,389,3,32,16,0,
388,384,1,0,0,0,388,386,1,0,0,0,389,59,1,0,0,0,390,397,3,36,18,0,391,392,
5,26,0,0,392,393,3,68,34,0,393,394,3,32,16,0,394,395,3,36,18,0,395,397,1,
0,0,0,396,390,1,0,0,0,396,391,1,0,0,0,397,61,1,0,0,0,398,399,6,31,-1,0,399,
400,5,42,0,0,400,406,1,0,0,0,401,402,10,1,0,0,402,403,5,6,0,0,403,405,5,
42,0,0,404,401,1,0,0,0,405,408,1,0,0,0,406,404,1,0,0,0,406,407,1,0,0,0,407,
63,1,0,0,0,408,406,1,0,0,0,409,415,5,42,0,0,410,411,5,3,0,0,411,412,3,62,
31,0,412,413,5,4,0,0,413,415,1,0,0,0,414,409,1,0,0,0,414,410,1,0,0,0,415,
65,1,0,0,0,416,426,5,42,0,0,417,418,5,42,0,0,418,419,5,1,0,0,419,426,5,2,
0,0,420,421,5,42,0,0,421,422,5,1,0,0,422,423,3,62,31,0,423,424,5,2,0,0,424,
426,1,0,0,0,425,416,1,0,0,0,425,417,1,0,0,0,425,420,1,0,0,0,426,67,1,0,0,
0,427,433,3,66,33,0,428,429,3,64,32,0,429,430,5,18,0,0,430,431,3,66,33,0,
431,433,1,0,0,0,432,427,1,0,0,0,432,428,1,0,0,0,433,69,1,0,0,0,34,71,88,
93,99,101,106,116,128,159,161,173,175,193,195,207,209,220,231,242,258,267,
277,292,299,308,341,355,382,388,396,406,414,425,432];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class matlabParser extends antlr4.Parser {

    static grammarFileName = "matlab.g4";
    static literalNames = [ null, "'('", "')'", "'['", "']'", "':'", "','", 
                            "'+'", "'-'", "'~'", "'*'", "'/'", "'\\'", "'^'", 
                            "'<'", "'>'", "'&'", "'|'", "'='", "';'", "'.*'", 
                            "'.\\'", "'./'", "'.^'", "'break'", "'return'", 
                            "'function'", "'for'", "'while'", "'end'", "'global'", 
                            "'if'", "'clear'", "'else'", "'elseif'", "'<='", 
                            "'>='", "'=='", "'~='", "'transpose'", "'.''" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "ARRAYMUL", "ARRAYDIV", 
                             "ARRAYRDIV", "ARRAYPOW", "BREAK", "RETURN", 
                             "FUNCTION", "FOR", "WHILE", "END", "GLOBAL", 
                             "IF", "CLEAR", "ELSE", "ELSEIF", "LE_OP", "GE_OP", 
                             "EQ_OP", "NE_OP", "TRANSPOSE", "NCTRANSPOSE", 
                             "STRING_LITERAL", "IDENTIFIER", "CONSTANT", 
                             "CR", "WS" ];
    static ruleNames = [ "file_", "primary_expression", "postfix_expression", 
                         "index_expression", "index_expression_list", "array_expression", 
                         "unary_expression", "unary_operator", "multiplicative_expression", 
                         "additive_expression", "relational_expression", 
                         "equality_expression", "and_expression", "or_expression", 
                         "expression", "assignment_expression", "eostmt", 
                         "statement", "statement_list", "identifier_list", 
                         "global_statement", "clear_statement", "expression_statement", 
                         "assignment_statement", "array_element", "array_list", 
                         "selection_statement", "elseif_clause", "iteration_statement", 
                         "jump_statement", "translation_unit", "func_ident_list", 
                         "func_return_list", "function_declare_lhs", "function_declare" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = matlabParser.ruleNames;
        this.literalNames = matlabParser.literalNames;
        this.symbolicNames = matlabParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.postfix_expression_sempred(localctx, predIndex);
    	case 4:
    	    		return this.index_expression_list_sempred(localctx, predIndex);
    	case 8:
    	    		return this.multiplicative_expression_sempred(localctx, predIndex);
    	case 9:
    	    		return this.additive_expression_sempred(localctx, predIndex);
    	case 10:
    	    		return this.relational_expression_sempred(localctx, predIndex);
    	case 11:
    	    		return this.equality_expression_sempred(localctx, predIndex);
    	case 12:
    	    		return this.and_expression_sempred(localctx, predIndex);
    	case 13:
    	    		return this.or_expression_sempred(localctx, predIndex);
    	case 14:
    	    		return this.expression_sempred(localctx, predIndex);
    	case 18:
    	    		return this.statement_list_sempred(localctx, predIndex);
    	case 19:
    	    		return this.identifier_list_sempred(localctx, predIndex);
    	case 25:
    	    		return this.array_list_sempred(localctx, predIndex);
    	case 27:
    	    		return this.elseif_clause_sempred(localctx, predIndex);
    	case 31:
    	    		return this.func_ident_list_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    postfix_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    index_expression_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    multiplicative_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 8);
    		case 4:
    			return this.precpred(this._ctx, 7);
    		case 5:
    			return this.precpred(this._ctx, 6);
    		case 6:
    			return this.precpred(this._ctx, 5);
    		case 7:
    			return this.precpred(this._ctx, 4);
    		case 8:
    			return this.precpred(this._ctx, 3);
    		case 9:
    			return this.precpred(this._ctx, 2);
    		case 10:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    additive_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 11:
    			return this.precpred(this._ctx, 2);
    		case 12:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    relational_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 13:
    			return this.precpred(this._ctx, 4);
    		case 14:
    			return this.precpred(this._ctx, 3);
    		case 15:
    			return this.precpred(this._ctx, 2);
    		case 16:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    equality_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 17:
    			return this.precpred(this._ctx, 2);
    		case 18:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    and_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 19:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    or_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 20:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 21:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    statement_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 22:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    identifier_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 23:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    array_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 24:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    elseif_clause_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 25:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    func_ident_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 26:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, matlabParser.RULE_file_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3674735562) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7681) !== 0)) {
	            this.state = 70;
	            this.statement_list(0);
	        }

	        this.state = 73;
	        this.match(matlabParser.EOF);
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



	primary_expression() {
	    let localctx = new Primary_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, matlabParser.RULE_primary_expression);
	    try {
	        this.state = 88;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this.match(matlabParser.IDENTIFIER);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
	            this.match(matlabParser.CONSTANT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 77;
	            this.match(matlabParser.STRING_LITERAL);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 78;
	            this.match(matlabParser.T__0);
	            this.state = 79;
	            this.expression(0);
	            this.state = 80;
	            this.match(matlabParser.T__1);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 82;
	            this.match(matlabParser.T__2);
	            this.state = 83;
	            this.match(matlabParser.T__3);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 84;
	            this.match(matlabParser.T__2);
	            this.state = 85;
	            this.array_list(0);
	            this.state = 86;
	            this.match(matlabParser.T__3);
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


	postfix_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Postfix_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, matlabParser.RULE_postfix_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 91;
	            this.primary_expression();
	            break;

	        case 2:
	            this.state = 92;
	            this.array_expression();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 101;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 99;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Postfix_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_postfix_expression);
	                    this.state = 95;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 96;
	                    this.match(matlabParser.TRANSPOSE);
	                    break;

	                case 2:
	                    localctx = new Postfix_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_postfix_expression);
	                    this.state = 97;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 98;
	                    this.match(matlabParser.NCTRANSPOSE);
	                    break;

	                } 
	            }
	            this.state = 103;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	index_expression() {
	    let localctx = new Index_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, matlabParser.RULE_index_expression);
	    try {
	        this.state = 106;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 104;
	            this.match(matlabParser.T__4);
	            break;
	        case 1:
	        case 3:
	        case 7:
	        case 8:
	        case 9:
	        case 41:
	        case 42:
	        case 43:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 105;
	            this.expression(0);
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


	index_expression_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Index_expression_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, matlabParser.RULE_index_expression_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.index_expression();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 116;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Index_expression_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_index_expression_list);
	                this.state = 111;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 112;
	                this.match(matlabParser.T__5);
	                this.state = 113;
	                this.index_expression(); 
	            }
	            this.state = 118;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	array_expression() {
	    let localctx = new Array_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, matlabParser.RULE_array_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(matlabParser.IDENTIFIER);
	        this.state = 120;
	        this.match(matlabParser.T__0);
	        this.state = 121;
	        this.index_expression_list(0);
	        this.state = 122;
	        this.match(matlabParser.T__1);
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



	unary_expression() {
	    let localctx = new Unary_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, matlabParser.RULE_unary_expression);
	    try {
	        this.state = 128;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 3:
	        case 41:
	        case 42:
	        case 43:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            this.postfix_expression(0);
	            break;
	        case 7:
	        case 8:
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 125;
	            this.unary_operator();
	            this.state = 126;
	            this.postfix_expression(0);
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



	unary_operator() {
	    let localctx = new Unary_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, matlabParser.RULE_unary_operator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 896) !== 0))) {
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


	multiplicative_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Multiplicative_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, matlabParser.RULE_multiplicative_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.unary_expression();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 161;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 159;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 135;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 136;
	                    this.match(matlabParser.T__9);
	                    this.state = 137;
	                    this.unary_expression();
	                    break;

	                case 2:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 138;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 139;
	                    this.match(matlabParser.T__10);
	                    this.state = 140;
	                    this.unary_expression();
	                    break;

	                case 3:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 141;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 142;
	                    this.match(matlabParser.T__11);
	                    this.state = 143;
	                    this.unary_expression();
	                    break;

	                case 4:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 144;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 145;
	                    this.match(matlabParser.T__12);
	                    this.state = 146;
	                    this.unary_expression();
	                    break;

	                case 5:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 147;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 148;
	                    this.match(matlabParser.ARRAYMUL);
	                    this.state = 149;
	                    this.unary_expression();
	                    break;

	                case 6:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 150;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 151;
	                    this.match(matlabParser.ARRAYDIV);
	                    this.state = 152;
	                    this.unary_expression();
	                    break;

	                case 7:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 153;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 154;
	                    this.match(matlabParser.ARRAYRDIV);
	                    this.state = 155;
	                    this.unary_expression();
	                    break;

	                case 8:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 156;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 157;
	                    this.match(matlabParser.ARRAYPOW);
	                    this.state = 158;
	                    this.unary_expression();
	                    break;

	                } 
	            }
	            this.state = 163;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	additive_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Additive_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, matlabParser.RULE_additive_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this.multiplicative_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 175;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 173;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Additive_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_additive_expression);
	                    this.state = 167;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 168;
	                    this.match(matlabParser.T__6);
	                    this.state = 169;
	                    this.multiplicative_expression(0);
	                    break;

	                case 2:
	                    localctx = new Additive_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_additive_expression);
	                    this.state = 170;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 171;
	                    this.match(matlabParser.T__7);
	                    this.state = 172;
	                    this.multiplicative_expression(0);
	                    break;

	                } 
	            }
	            this.state = 177;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	relational_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Relational_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, matlabParser.RULE_relational_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.additive_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 195;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 193;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Relational_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_relational_expression);
	                    this.state = 181;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 182;
	                    this.match(matlabParser.T__13);
	                    this.state = 183;
	                    this.additive_expression(0);
	                    break;

	                case 2:
	                    localctx = new Relational_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_relational_expression);
	                    this.state = 184;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 185;
	                    this.match(matlabParser.T__14);
	                    this.state = 186;
	                    this.additive_expression(0);
	                    break;

	                case 3:
	                    localctx = new Relational_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_relational_expression);
	                    this.state = 187;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 188;
	                    this.match(matlabParser.LE_OP);
	                    this.state = 189;
	                    this.additive_expression(0);
	                    break;

	                case 4:
	                    localctx = new Relational_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_relational_expression);
	                    this.state = 190;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 191;
	                    this.match(matlabParser.GE_OP);
	                    this.state = 192;
	                    this.additive_expression(0);
	                    break;

	                } 
	            }
	            this.state = 197;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	equality_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Equality_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, matlabParser.RULE_equality_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.relational_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 209;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 207;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Equality_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_equality_expression);
	                    this.state = 201;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 202;
	                    this.match(matlabParser.EQ_OP);
	                    this.state = 203;
	                    this.relational_expression(0);
	                    break;

	                case 2:
	                    localctx = new Equality_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_equality_expression);
	                    this.state = 204;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 205;
	                    this.match(matlabParser.NE_OP);
	                    this.state = 206;
	                    this.relational_expression(0);
	                    break;

	                } 
	            }
	            this.state = 211;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	and_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new And_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 24;
	    this.enterRecursionRule(localctx, 24, matlabParser.RULE_and_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.equality_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 220;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new And_expressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_and_expression);
	                this.state = 215;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 216;
	                this.match(matlabParser.T__15);
	                this.state = 217;
	                this.equality_expression(0); 
	            }
	            this.state = 222;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	or_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Or_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, matlabParser.RULE_or_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.and_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 231;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Or_expressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_or_expression);
	                this.state = 226;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 227;
	                this.match(matlabParser.T__16);
	                this.state = 228;
	                this.and_expression(0); 
	            }
	            this.state = 233;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 28;
	    this.enterRecursionRule(localctx, 28, matlabParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.or_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 242;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_expression);
	                this.state = 237;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 238;
	                this.match(matlabParser.T__4);
	                this.state = 239;
	                this.or_expression(0); 
	            }
	            this.state = 244;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	assignment_expression() {
	    let localctx = new Assignment_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, matlabParser.RULE_assignment_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        this.postfix_expression(0);
	        this.state = 246;
	        this.match(matlabParser.T__17);
	        this.state = 247;
	        this.expression(0);
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



	eostmt() {
	    let localctx = new EostmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, matlabParser.RULE_eostmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===19 || _la===44)) {
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, matlabParser.RULE_statement);
	    try {
	        this.state = 258;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 251;
	            this.global_statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 252;
	            this.clear_statement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 253;
	            this.assignment_statement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 254;
	            this.expression_statement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 255;
	            this.selection_statement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 256;
	            this.iteration_statement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 257;
	            this.jump_statement();
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


	statement_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Statement_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 36;
	    this.enterRecursionRule(localctx, 36, matlabParser.RULE_statement_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.statement();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 267;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Statement_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_statement_list);
	                this.state = 263;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 264;
	                this.statement(); 
	            }
	            this.state = 269;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	identifier_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Identifier_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 38;
	    this.enterRecursionRule(localctx, 38, matlabParser.RULE_identifier_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this.match(matlabParser.IDENTIFIER);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 277;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Identifier_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_identifier_list);
	                this.state = 273;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 274;
	                this.match(matlabParser.IDENTIFIER); 
	            }
	            this.state = 279;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	global_statement() {
	    let localctx = new Global_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, matlabParser.RULE_global_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.match(matlabParser.GLOBAL);
	        this.state = 281;
	        this.identifier_list(0);
	        this.state = 282;
	        this.eostmt();
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



	clear_statement() {
	    let localctx = new Clear_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, matlabParser.RULE_clear_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this.match(matlabParser.CLEAR);
	        this.state = 285;
	        this.identifier_list(0);
	        this.state = 286;
	        this.eostmt();
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



	expression_statement() {
	    let localctx = new Expression_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, matlabParser.RULE_expression_statement);
	    try {
	        this.state = 292;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	        case 19:
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 288;
	            this.eostmt();
	            break;
	        case 1:
	        case 3:
	        case 7:
	        case 8:
	        case 9:
	        case 41:
	        case 42:
	        case 43:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 289;
	            this.expression(0);
	            this.state = 290;
	            this.eostmt();
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



	assignment_statement() {
	    let localctx = new Assignment_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, matlabParser.RULE_assignment_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
	        this.assignment_expression();
	        this.state = 295;
	        this.eostmt();
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



	array_element() {
	    let localctx = new Array_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, matlabParser.RULE_array_element);
	    try {
	        this.state = 299;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 297;
	            this.expression(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 298;
	            this.expression_statement();
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


	array_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Array_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 50;
	    this.enterRecursionRule(localctx, 50, matlabParser.RULE_array_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.array_element();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 308;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Array_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_array_list);
	                this.state = 304;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 305;
	                this.array_element(); 
	            }
	            this.state = 310;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	selection_statement() {
	    let localctx = new Selection_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, matlabParser.RULE_selection_statement);
	    try {
	        this.state = 341;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 311;
	            this.match(matlabParser.IF);
	            this.state = 312;
	            this.expression(0);
	            this.state = 313;
	            this.statement_list(0);
	            this.state = 314;
	            this.match(matlabParser.END);
	            this.state = 315;
	            this.eostmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 317;
	            this.match(matlabParser.IF);
	            this.state = 318;
	            this.expression(0);
	            this.state = 319;
	            this.statement_list(0);
	            this.state = 320;
	            this.match(matlabParser.ELSE);
	            this.state = 321;
	            this.statement_list(0);
	            this.state = 322;
	            this.match(matlabParser.END);
	            this.state = 323;
	            this.eostmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 325;
	            this.match(matlabParser.IF);
	            this.state = 326;
	            this.expression(0);
	            this.state = 327;
	            this.statement_list(0);
	            this.state = 328;
	            this.elseif_clause(0);
	            this.state = 329;
	            this.match(matlabParser.END);
	            this.state = 330;
	            this.eostmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 332;
	            this.match(matlabParser.IF);
	            this.state = 333;
	            this.expression(0);
	            this.state = 334;
	            this.statement_list(0);
	            this.state = 335;
	            this.elseif_clause(0);
	            this.state = 336;
	            this.match(matlabParser.ELSE);
	            this.state = 337;
	            this.statement_list(0);
	            this.state = 338;
	            this.match(matlabParser.END);
	            this.state = 339;
	            this.eostmt();
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


	elseif_clause(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Elseif_clauseContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 54;
	    this.enterRecursionRule(localctx, 54, matlabParser.RULE_elseif_clause, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.match(matlabParser.ELSEIF);
	        this.state = 345;
	        this.expression(0);
	        this.state = 346;
	        this.statement_list(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 355;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Elseif_clauseContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_elseif_clause);
	                this.state = 348;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 349;
	                this.match(matlabParser.ELSEIF);
	                this.state = 350;
	                this.expression(0);
	                this.state = 351;
	                this.statement_list(0); 
	            }
	            this.state = 357;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	iteration_statement() {
	    let localctx = new Iteration_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, matlabParser.RULE_iteration_statement);
	    try {
	        this.state = 382;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 358;
	            this.match(matlabParser.WHILE);
	            this.state = 359;
	            this.expression(0);
	            this.state = 360;
	            this.statement_list(0);
	            this.state = 361;
	            this.match(matlabParser.END);
	            this.state = 362;
	            this.eostmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 364;
	            this.match(matlabParser.FOR);
	            this.state = 365;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 366;
	            this.match(matlabParser.T__17);
	            this.state = 367;
	            this.expression(0);
	            this.state = 368;
	            this.statement_list(0);
	            this.state = 369;
	            this.match(matlabParser.END);
	            this.state = 370;
	            this.eostmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 372;
	            this.match(matlabParser.FOR);
	            this.state = 373;
	            this.match(matlabParser.T__0);
	            this.state = 374;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 375;
	            this.match(matlabParser.T__17);
	            this.state = 376;
	            this.expression(0);
	            this.state = 377;
	            this.match(matlabParser.T__1);
	            this.state = 378;
	            this.statement_list(0);
	            this.state = 379;
	            this.match(matlabParser.END);
	            this.state = 380;
	            this.eostmt();
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



	jump_statement() {
	    let localctx = new Jump_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, matlabParser.RULE_jump_statement);
	    try {
	        this.state = 388;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 384;
	            this.match(matlabParser.BREAK);
	            this.state = 385;
	            this.eostmt();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 386;
	            this.match(matlabParser.RETURN);
	            this.state = 387;
	            this.eostmt();
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



	translation_unit() {
	    let localctx = new Translation_unitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, matlabParser.RULE_translation_unit);
	    try {
	        this.state = 396;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 3:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 19:
	        case 24:
	        case 25:
	        case 27:
	        case 28:
	        case 30:
	        case 31:
	        case 32:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 390;
	            this.statement_list(0);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 391;
	            this.match(matlabParser.FUNCTION);
	            this.state = 392;
	            this.function_declare();
	            this.state = 393;
	            this.eostmt();
	            this.state = 394;
	            this.statement_list(0);
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


	func_ident_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Func_ident_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 62;
	    this.enterRecursionRule(localctx, 62, matlabParser.RULE_func_ident_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 399;
	        this.match(matlabParser.IDENTIFIER);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 406;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Func_ident_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_func_ident_list);
	                this.state = 401;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 402;
	                this.match(matlabParser.T__5);
	                this.state = 403;
	                this.match(matlabParser.IDENTIFIER); 
	            }
	            this.state = 408;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	func_return_list() {
	    let localctx = new Func_return_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, matlabParser.RULE_func_return_list);
	    try {
	        this.state = 414;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 409;
	            this.match(matlabParser.IDENTIFIER);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 410;
	            this.match(matlabParser.T__2);
	            this.state = 411;
	            this.func_ident_list(0);
	            this.state = 412;
	            this.match(matlabParser.T__3);
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



	function_declare_lhs() {
	    let localctx = new Function_declare_lhsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, matlabParser.RULE_function_declare_lhs);
	    try {
	        this.state = 425;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 416;
	            this.match(matlabParser.IDENTIFIER);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 417;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 418;
	            this.match(matlabParser.T__0);
	            this.state = 419;
	            this.match(matlabParser.T__1);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 420;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 421;
	            this.match(matlabParser.T__0);
	            this.state = 422;
	            this.func_ident_list(0);
	            this.state = 423;
	            this.match(matlabParser.T__1);
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



	function_declare() {
	    let localctx = new Function_declareContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, matlabParser.RULE_function_declare);
	    try {
	        this.state = 432;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 427;
	            this.function_declare_lhs();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 428;
	            this.func_return_list();
	            this.state = 429;
	            this.match(matlabParser.T__17);
	            this.state = 430;
	            this.function_declare_lhs();
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


}

matlabParser.EOF = antlr4.Token.EOF;
matlabParser.T__0 = 1;
matlabParser.T__1 = 2;
matlabParser.T__2 = 3;
matlabParser.T__3 = 4;
matlabParser.T__4 = 5;
matlabParser.T__5 = 6;
matlabParser.T__6 = 7;
matlabParser.T__7 = 8;
matlabParser.T__8 = 9;
matlabParser.T__9 = 10;
matlabParser.T__10 = 11;
matlabParser.T__11 = 12;
matlabParser.T__12 = 13;
matlabParser.T__13 = 14;
matlabParser.T__14 = 15;
matlabParser.T__15 = 16;
matlabParser.T__16 = 17;
matlabParser.T__17 = 18;
matlabParser.T__18 = 19;
matlabParser.ARRAYMUL = 20;
matlabParser.ARRAYDIV = 21;
matlabParser.ARRAYRDIV = 22;
matlabParser.ARRAYPOW = 23;
matlabParser.BREAK = 24;
matlabParser.RETURN = 25;
matlabParser.FUNCTION = 26;
matlabParser.FOR = 27;
matlabParser.WHILE = 28;
matlabParser.END = 29;
matlabParser.GLOBAL = 30;
matlabParser.IF = 31;
matlabParser.CLEAR = 32;
matlabParser.ELSE = 33;
matlabParser.ELSEIF = 34;
matlabParser.LE_OP = 35;
matlabParser.GE_OP = 36;
matlabParser.EQ_OP = 37;
matlabParser.NE_OP = 38;
matlabParser.TRANSPOSE = 39;
matlabParser.NCTRANSPOSE = 40;
matlabParser.STRING_LITERAL = 41;
matlabParser.IDENTIFIER = 42;
matlabParser.CONSTANT = 43;
matlabParser.CR = 44;
matlabParser.WS = 45;

matlabParser.RULE_file_ = 0;
matlabParser.RULE_primary_expression = 1;
matlabParser.RULE_postfix_expression = 2;
matlabParser.RULE_index_expression = 3;
matlabParser.RULE_index_expression_list = 4;
matlabParser.RULE_array_expression = 5;
matlabParser.RULE_unary_expression = 6;
matlabParser.RULE_unary_operator = 7;
matlabParser.RULE_multiplicative_expression = 8;
matlabParser.RULE_additive_expression = 9;
matlabParser.RULE_relational_expression = 10;
matlabParser.RULE_equality_expression = 11;
matlabParser.RULE_and_expression = 12;
matlabParser.RULE_or_expression = 13;
matlabParser.RULE_expression = 14;
matlabParser.RULE_assignment_expression = 15;
matlabParser.RULE_eostmt = 16;
matlabParser.RULE_statement = 17;
matlabParser.RULE_statement_list = 18;
matlabParser.RULE_identifier_list = 19;
matlabParser.RULE_global_statement = 20;
matlabParser.RULE_clear_statement = 21;
matlabParser.RULE_expression_statement = 22;
matlabParser.RULE_assignment_statement = 23;
matlabParser.RULE_array_element = 24;
matlabParser.RULE_array_list = 25;
matlabParser.RULE_selection_statement = 26;
matlabParser.RULE_elseif_clause = 27;
matlabParser.RULE_iteration_statement = 28;
matlabParser.RULE_jump_statement = 29;
matlabParser.RULE_translation_unit = 30;
matlabParser.RULE_func_ident_list = 31;
matlabParser.RULE_func_return_list = 32;
matlabParser.RULE_function_declare_lhs = 33;
matlabParser.RULE_function_declare = 34;

class File_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_file_;
    }

	EOF() {
	    return this.getToken(matlabParser.EOF, 0);
	};

	statement_list() {
	    return this.getTypedRuleContext(Statement_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitFile_(this);
		}
	}


}



class Primary_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_primary_expression;
    }

	IDENTIFIER() {
	    return this.getToken(matlabParser.IDENTIFIER, 0);
	};

	CONSTANT() {
	    return this.getToken(matlabParser.CONSTANT, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(matlabParser.STRING_LITERAL, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	array_list() {
	    return this.getTypedRuleContext(Array_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterPrimary_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitPrimary_expression(this);
		}
	}


}



class Postfix_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_postfix_expression;
    }

	primary_expression() {
	    return this.getTypedRuleContext(Primary_expressionContext,0);
	};

	array_expression() {
	    return this.getTypedRuleContext(Array_expressionContext,0);
	};

	postfix_expression() {
	    return this.getTypedRuleContext(Postfix_expressionContext,0);
	};

	TRANSPOSE() {
	    return this.getToken(matlabParser.TRANSPOSE, 0);
	};

	NCTRANSPOSE() {
	    return this.getToken(matlabParser.NCTRANSPOSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterPostfix_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitPostfix_expression(this);
		}
	}


}



class Index_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_index_expression;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterIndex_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitIndex_expression(this);
		}
	}


}



class Index_expression_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_index_expression_list;
    }

	index_expression() {
	    return this.getTypedRuleContext(Index_expressionContext,0);
	};

	index_expression_list() {
	    return this.getTypedRuleContext(Index_expression_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterIndex_expression_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitIndex_expression_list(this);
		}
	}


}



class Array_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_array_expression;
    }

	IDENTIFIER() {
	    return this.getToken(matlabParser.IDENTIFIER, 0);
	};

	index_expression_list() {
	    return this.getTypedRuleContext(Index_expression_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterArray_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitArray_expression(this);
		}
	}


}



class Unary_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_unary_expression;
    }

	postfix_expression() {
	    return this.getTypedRuleContext(Postfix_expressionContext,0);
	};

	unary_operator() {
	    return this.getTypedRuleContext(Unary_operatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterUnary_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitUnary_expression(this);
		}
	}


}



class Unary_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_unary_operator;
    }


	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterUnary_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitUnary_operator(this);
		}
	}


}



class Multiplicative_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_multiplicative_expression;
    }

	unary_expression() {
	    return this.getTypedRuleContext(Unary_expressionContext,0);
	};

	multiplicative_expression() {
	    return this.getTypedRuleContext(Multiplicative_expressionContext,0);
	};

	ARRAYMUL() {
	    return this.getToken(matlabParser.ARRAYMUL, 0);
	};

	ARRAYDIV() {
	    return this.getToken(matlabParser.ARRAYDIV, 0);
	};

	ARRAYRDIV() {
	    return this.getToken(matlabParser.ARRAYRDIV, 0);
	};

	ARRAYPOW() {
	    return this.getToken(matlabParser.ARRAYPOW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterMultiplicative_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitMultiplicative_expression(this);
		}
	}


}



class Additive_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_additive_expression;
    }

	multiplicative_expression() {
	    return this.getTypedRuleContext(Multiplicative_expressionContext,0);
	};

	additive_expression() {
	    return this.getTypedRuleContext(Additive_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAdditive_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAdditive_expression(this);
		}
	}


}



class Relational_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_relational_expression;
    }

	additive_expression() {
	    return this.getTypedRuleContext(Additive_expressionContext,0);
	};

	relational_expression() {
	    return this.getTypedRuleContext(Relational_expressionContext,0);
	};

	LE_OP() {
	    return this.getToken(matlabParser.LE_OP, 0);
	};

	GE_OP() {
	    return this.getToken(matlabParser.GE_OP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterRelational_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitRelational_expression(this);
		}
	}


}



class Equality_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_equality_expression;
    }

	relational_expression() {
	    return this.getTypedRuleContext(Relational_expressionContext,0);
	};

	equality_expression() {
	    return this.getTypedRuleContext(Equality_expressionContext,0);
	};

	EQ_OP() {
	    return this.getToken(matlabParser.EQ_OP, 0);
	};

	NE_OP() {
	    return this.getToken(matlabParser.NE_OP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterEquality_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitEquality_expression(this);
		}
	}


}



class And_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_and_expression;
    }

	equality_expression() {
	    return this.getTypedRuleContext(Equality_expressionContext,0);
	};

	and_expression() {
	    return this.getTypedRuleContext(And_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAnd_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAnd_expression(this);
		}
	}


}



class Or_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_or_expression;
    }

	and_expression() {
	    return this.getTypedRuleContext(And_expressionContext,0);
	};

	or_expression() {
	    return this.getTypedRuleContext(Or_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterOr_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitOr_expression(this);
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
        this.ruleIndex = matlabParser.RULE_expression;
    }

	or_expression() {
	    return this.getTypedRuleContext(Or_expressionContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitExpression(this);
		}
	}


}



class Assignment_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_assignment_expression;
    }

	postfix_expression() {
	    return this.getTypedRuleContext(Postfix_expressionContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAssignment_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAssignment_expression(this);
		}
	}


}



class EostmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_eostmt;
    }

	CR() {
	    return this.getToken(matlabParser.CR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterEostmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitEostmt(this);
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
        this.ruleIndex = matlabParser.RULE_statement;
    }

	global_statement() {
	    return this.getTypedRuleContext(Global_statementContext,0);
	};

	clear_statement() {
	    return this.getTypedRuleContext(Clear_statementContext,0);
	};

	assignment_statement() {
	    return this.getTypedRuleContext(Assignment_statementContext,0);
	};

	expression_statement() {
	    return this.getTypedRuleContext(Expression_statementContext,0);
	};

	selection_statement() {
	    return this.getTypedRuleContext(Selection_statementContext,0);
	};

	iteration_statement() {
	    return this.getTypedRuleContext(Iteration_statementContext,0);
	};

	jump_statement() {
	    return this.getTypedRuleContext(Jump_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitStatement(this);
		}
	}


}



class Statement_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_statement_list;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	statement_list() {
	    return this.getTypedRuleContext(Statement_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterStatement_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitStatement_list(this);
		}
	}


}



class Identifier_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_identifier_list;
    }

	IDENTIFIER() {
	    return this.getToken(matlabParser.IDENTIFIER, 0);
	};

	identifier_list() {
	    return this.getTypedRuleContext(Identifier_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterIdentifier_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitIdentifier_list(this);
		}
	}


}



class Global_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_global_statement;
    }

	GLOBAL() {
	    return this.getToken(matlabParser.GLOBAL, 0);
	};

	identifier_list() {
	    return this.getTypedRuleContext(Identifier_listContext,0);
	};

	eostmt() {
	    return this.getTypedRuleContext(EostmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterGlobal_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitGlobal_statement(this);
		}
	}


}



class Clear_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_clear_statement;
    }

	CLEAR() {
	    return this.getToken(matlabParser.CLEAR, 0);
	};

	identifier_list() {
	    return this.getTypedRuleContext(Identifier_listContext,0);
	};

	eostmt() {
	    return this.getTypedRuleContext(EostmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterClear_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitClear_statement(this);
		}
	}


}



class Expression_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_expression_statement;
    }

	eostmt() {
	    return this.getTypedRuleContext(EostmtContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterExpression_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitExpression_statement(this);
		}
	}


}



class Assignment_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_assignment_statement;
    }

	assignment_expression() {
	    return this.getTypedRuleContext(Assignment_expressionContext,0);
	};

	eostmt() {
	    return this.getTypedRuleContext(EostmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAssignment_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAssignment_statement(this);
		}
	}


}



class Array_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_array_element;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	expression_statement() {
	    return this.getTypedRuleContext(Expression_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterArray_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitArray_element(this);
		}
	}


}



class Array_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_array_list;
    }

	array_element() {
	    return this.getTypedRuleContext(Array_elementContext,0);
	};

	array_list() {
	    return this.getTypedRuleContext(Array_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterArray_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitArray_list(this);
		}
	}


}



class Selection_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_selection_statement;
    }

	IF() {
	    return this.getToken(matlabParser.IF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Statement_listContext);
	    } else {
	        return this.getTypedRuleContext(Statement_listContext,i);
	    }
	};

	END() {
	    return this.getToken(matlabParser.END, 0);
	};

	eostmt() {
	    return this.getTypedRuleContext(EostmtContext,0);
	};

	ELSE() {
	    return this.getToken(matlabParser.ELSE, 0);
	};

	elseif_clause() {
	    return this.getTypedRuleContext(Elseif_clauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterSelection_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitSelection_statement(this);
		}
	}


}



class Elseif_clauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_elseif_clause;
    }

	ELSEIF() {
	    return this.getToken(matlabParser.ELSEIF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement_list() {
	    return this.getTypedRuleContext(Statement_listContext,0);
	};

	elseif_clause() {
	    return this.getTypedRuleContext(Elseif_clauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterElseif_clause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitElseif_clause(this);
		}
	}


}



class Iteration_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_iteration_statement;
    }

	WHILE() {
	    return this.getToken(matlabParser.WHILE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement_list() {
	    return this.getTypedRuleContext(Statement_listContext,0);
	};

	END() {
	    return this.getToken(matlabParser.END, 0);
	};

	eostmt() {
	    return this.getTypedRuleContext(EostmtContext,0);
	};

	FOR() {
	    return this.getToken(matlabParser.FOR, 0);
	};

	IDENTIFIER() {
	    return this.getToken(matlabParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterIteration_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitIteration_statement(this);
		}
	}


}



class Jump_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_jump_statement;
    }

	BREAK() {
	    return this.getToken(matlabParser.BREAK, 0);
	};

	eostmt() {
	    return this.getTypedRuleContext(EostmtContext,0);
	};

	RETURN() {
	    return this.getToken(matlabParser.RETURN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterJump_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitJump_statement(this);
		}
	}


}



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
        this.ruleIndex = matlabParser.RULE_translation_unit;
    }

	statement_list() {
	    return this.getTypedRuleContext(Statement_listContext,0);
	};

	FUNCTION() {
	    return this.getToken(matlabParser.FUNCTION, 0);
	};

	function_declare() {
	    return this.getTypedRuleContext(Function_declareContext,0);
	};

	eostmt() {
	    return this.getTypedRuleContext(EostmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterTranslation_unit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitTranslation_unit(this);
		}
	}


}



class Func_ident_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_func_ident_list;
    }

	IDENTIFIER() {
	    return this.getToken(matlabParser.IDENTIFIER, 0);
	};

	func_ident_list() {
	    return this.getTypedRuleContext(Func_ident_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterFunc_ident_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitFunc_ident_list(this);
		}
	}


}



class Func_return_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_func_return_list;
    }

	IDENTIFIER() {
	    return this.getToken(matlabParser.IDENTIFIER, 0);
	};

	func_ident_list() {
	    return this.getTypedRuleContext(Func_ident_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterFunc_return_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitFunc_return_list(this);
		}
	}


}



class Function_declare_lhsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_function_declare_lhs;
    }

	IDENTIFIER() {
	    return this.getToken(matlabParser.IDENTIFIER, 0);
	};

	func_ident_list() {
	    return this.getTypedRuleContext(Func_ident_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterFunction_declare_lhs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitFunction_declare_lhs(this);
		}
	}


}



class Function_declareContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_function_declare;
    }

	function_declare_lhs() {
	    return this.getTypedRuleContext(Function_declare_lhsContext,0);
	};

	func_return_list() {
	    return this.getTypedRuleContext(Func_return_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterFunction_declare(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitFunction_declare(this);
		}
	}


}




matlabParser.File_Context = File_Context; 
matlabParser.Primary_expressionContext = Primary_expressionContext; 
matlabParser.Postfix_expressionContext = Postfix_expressionContext; 
matlabParser.Index_expressionContext = Index_expressionContext; 
matlabParser.Index_expression_listContext = Index_expression_listContext; 
matlabParser.Array_expressionContext = Array_expressionContext; 
matlabParser.Unary_expressionContext = Unary_expressionContext; 
matlabParser.Unary_operatorContext = Unary_operatorContext; 
matlabParser.Multiplicative_expressionContext = Multiplicative_expressionContext; 
matlabParser.Additive_expressionContext = Additive_expressionContext; 
matlabParser.Relational_expressionContext = Relational_expressionContext; 
matlabParser.Equality_expressionContext = Equality_expressionContext; 
matlabParser.And_expressionContext = And_expressionContext; 
matlabParser.Or_expressionContext = Or_expressionContext; 
matlabParser.ExpressionContext = ExpressionContext; 
matlabParser.Assignment_expressionContext = Assignment_expressionContext; 
matlabParser.EostmtContext = EostmtContext; 
matlabParser.StatementContext = StatementContext; 
matlabParser.Statement_listContext = Statement_listContext; 
matlabParser.Identifier_listContext = Identifier_listContext; 
matlabParser.Global_statementContext = Global_statementContext; 
matlabParser.Clear_statementContext = Clear_statementContext; 
matlabParser.Expression_statementContext = Expression_statementContext; 
matlabParser.Assignment_statementContext = Assignment_statementContext; 
matlabParser.Array_elementContext = Array_elementContext; 
matlabParser.Array_listContext = Array_listContext; 
matlabParser.Selection_statementContext = Selection_statementContext; 
matlabParser.Elseif_clauseContext = Elseif_clauseContext; 
matlabParser.Iteration_statementContext = Iteration_statementContext; 
matlabParser.Jump_statementContext = Jump_statementContext; 
matlabParser.Translation_unitContext = Translation_unitContext; 
matlabParser.Func_ident_listContext = Func_ident_listContext; 
matlabParser.Func_return_listContext = Func_return_listContext; 
matlabParser.Function_declare_lhsContext = Function_declare_lhsContext; 
matlabParser.Function_declareContext = Function_declareContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
