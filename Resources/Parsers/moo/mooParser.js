// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/moo/moo.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import mooListener from './mooListener.js';
const serializedATN = [4,1,68,435,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,1,
0,4,0,100,8,0,11,0,12,0,101,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,3,1,120,8,1,1,2,1,2,1,2,1,2,1,2,4,2,127,8,2,11,2,12,
2,128,1,2,1,2,1,3,1,3,3,3,135,8,3,1,4,1,4,1,4,1,4,1,4,1,4,4,4,143,8,4,11,
4,12,4,144,1,4,3,4,148,8,4,1,5,1,5,3,5,152,8,5,1,6,1,6,1,6,3,6,157,8,6,1,
6,3,6,160,8,6,1,6,3,6,163,8,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,
9,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,
1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,
17,5,17,205,8,17,10,17,12,17,208,9,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,3,18,222,8,18,1,19,1,19,1,19,4,19,227,8,19,11,19,
12,19,228,1,19,1,19,1,19,4,19,234,8,19,11,19,12,19,235,3,19,238,8,19,1,19,
1,19,4,19,242,8,19,11,19,12,19,243,3,19,246,8,19,1,19,1,19,3,19,250,8,19,
1,20,1,20,1,20,4,20,255,8,20,11,20,12,20,256,1,21,1,21,4,21,261,8,21,11,
21,12,21,262,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,4,22,273,8,22,11,22,
12,22,274,1,22,1,22,1,23,1,23,4,23,281,8,23,11,23,12,23,282,1,23,1,23,1,
23,4,23,288,8,23,11,23,12,23,289,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,25,
1,25,1,25,1,25,1,25,5,25,304,8,25,10,25,12,25,307,9,25,1,25,1,25,1,26,1,
26,1,27,1,27,1,27,5,27,316,8,27,10,27,12,27,319,9,27,1,28,1,28,1,28,5,28,
324,8,28,10,28,12,28,327,9,28,1,29,1,29,1,29,5,29,332,8,29,10,29,12,29,335,
9,29,1,30,1,30,1,30,5,30,340,8,30,10,30,12,30,343,9,30,1,31,1,31,1,31,1,
31,1,31,3,31,350,8,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
1,32,1,32,1,32,1,32,3,32,366,8,32,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,35,
1,35,3,35,377,8,35,1,36,1,36,3,36,381,8,36,1,37,1,37,1,37,1,37,1,38,1,38,
1,38,3,38,390,8,38,1,38,3,38,393,8,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,
5,39,402,8,39,10,39,12,39,405,9,39,1,40,1,40,3,40,409,8,40,1,41,1,41,3,41,
413,8,41,1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,45,3,45,425,8,45,
1,46,1,46,3,46,429,8,46,1,47,1,47,1,48,1,48,1,48,0,0,49,0,2,4,6,8,10,12,
14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,
62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,0,6,1,0,5,6,1,0,7,
8,1,0,11,12,1,0,48,55,1,0,43,44,1,0,45,47,451,0,99,1,0,0,0,2,119,1,0,0,0,
4,121,1,0,0,0,6,134,1,0,0,0,8,136,1,0,0,0,10,151,1,0,0,0,12,153,1,0,0,0,
14,164,1,0,0,0,16,167,1,0,0,0,18,172,1,0,0,0,20,175,1,0,0,0,22,178,1,0,0,
0,24,181,1,0,0,0,26,186,1,0,0,0,28,189,1,0,0,0,30,192,1,0,0,0,32,197,1,0,
0,0,34,200,1,0,0,0,36,221,1,0,0,0,38,223,1,0,0,0,40,251,1,0,0,0,42,258,1,
0,0,0,44,267,1,0,0,0,46,278,1,0,0,0,48,293,1,0,0,0,50,298,1,0,0,0,52,310,
1,0,0,0,54,312,1,0,0,0,56,320,1,0,0,0,58,328,1,0,0,0,60,336,1,0,0,0,62,349,
1,0,0,0,64,365,1,0,0,0,66,367,1,0,0,0,68,369,1,0,0,0,70,376,1,0,0,0,72,378,
1,0,0,0,74,382,1,0,0,0,76,386,1,0,0,0,78,394,1,0,0,0,80,408,1,0,0,0,82,410,
1,0,0,0,84,416,1,0,0,0,86,418,1,0,0,0,88,420,1,0,0,0,90,424,1,0,0,0,92,426,
1,0,0,0,94,430,1,0,0,0,96,432,1,0,0,0,98,100,3,2,1,0,99,98,1,0,0,0,100,101,
1,0,0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,103,1,0,0,0,103,104,5,0,0,1,104,
1,1,0,0,0,105,120,3,4,2,0,106,120,3,8,4,0,107,120,3,12,6,0,108,120,3,14,
7,0,109,120,3,16,8,0,110,120,3,18,9,0,111,120,3,20,10,0,112,120,3,22,11,
0,113,120,3,24,12,0,114,120,3,26,13,0,115,120,3,28,14,0,116,120,3,30,15,
0,117,120,3,32,16,0,118,120,3,34,17,0,119,105,1,0,0,0,119,106,1,0,0,0,119,
107,1,0,0,0,119,108,1,0,0,0,119,109,1,0,0,0,119,110,1,0,0,0,119,111,1,0,
0,0,119,112,1,0,0,0,119,113,1,0,0,0,119,114,1,0,0,0,119,115,1,0,0,0,119,
116,1,0,0,0,119,117,1,0,0,0,119,118,1,0,0,0,120,3,1,0,0,0,121,122,5,1,0,
0,122,123,3,6,3,0,123,124,5,2,0,0,124,126,3,90,45,0,125,127,3,36,18,0,126,
125,1,0,0,0,127,128,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,130,1,0,
0,0,130,131,5,3,0,0,131,5,1,0,0,0,132,135,3,90,45,0,133,135,3,84,42,0,134,
132,1,0,0,0,134,133,1,0,0,0,135,7,1,0,0,0,136,137,5,4,0,0,137,138,3,10,5,
0,138,139,5,2,0,0,139,140,3,90,45,0,140,142,1,0,0,0,141,143,3,90,45,0,142,
141,1,0,0,0,143,144,1,0,0,0,144,142,1,0,0,0,144,145,1,0,0,0,145,147,1,0,
0,0,146,148,3,96,48,0,147,146,1,0,0,0,147,148,1,0,0,0,148,9,1,0,0,0,149,
152,3,90,45,0,150,152,3,84,42,0,151,149,1,0,0,0,151,150,1,0,0,0,152,11,1,
0,0,0,153,154,7,0,0,0,154,156,3,78,39,0,155,157,5,58,0,0,156,155,1,0,0,0,
156,157,1,0,0,0,157,159,1,0,0,0,158,160,3,56,28,0,159,158,1,0,0,0,159,160,
1,0,0,0,160,162,1,0,0,0,161,163,3,96,48,0,162,161,1,0,0,0,162,163,1,0,0,
0,163,13,1,0,0,0,164,165,7,1,0,0,165,166,3,90,45,0,166,15,1,0,0,0,167,168,
5,9,0,0,168,169,3,78,39,0,169,170,5,10,0,0,170,171,3,56,28,0,171,17,1,0,
0,0,172,173,7,2,0,0,173,174,3,78,39,0,174,19,1,0,0,0,175,176,5,13,0,0,176,
177,3,90,45,0,177,21,1,0,0,0,178,179,5,14,0,0,179,180,3,90,45,0,180,23,1,
0,0,0,181,182,5,15,0,0,182,183,3,78,39,0,183,184,5,16,0,0,184,185,3,56,28,
0,185,25,1,0,0,0,186,187,5,17,0,0,187,188,3,90,45,0,188,27,1,0,0,0,189,190,
5,18,0,0,190,191,3,78,39,0,191,29,1,0,0,0,192,193,5,19,0,0,193,194,3,92,
46,0,194,195,5,20,0,0,195,196,3,54,27,0,196,31,1,0,0,0,197,198,5,21,0,0,
198,199,3,78,39,0,199,33,1,0,0,0,200,201,5,22,0,0,201,206,3,90,45,0,202,
203,5,57,0,0,203,205,3,90,45,0,204,202,1,0,0,0,205,208,1,0,0,0,206,204,1,
0,0,0,206,207,1,0,0,0,207,209,1,0,0,0,208,206,1,0,0,0,209,210,5,10,0,0,210,
211,3,56,28,0,211,35,1,0,0,0,212,222,3,38,19,0,213,222,3,40,20,0,214,222,
3,42,21,0,215,222,3,44,22,0,216,222,3,48,24,0,217,222,3,46,23,0,218,219,
3,70,35,0,219,220,5,59,0,0,220,222,1,0,0,0,221,212,1,0,0,0,221,213,1,0,0,
0,221,214,1,0,0,0,221,215,1,0,0,0,221,216,1,0,0,0,221,217,1,0,0,0,221,218,
1,0,0,0,222,37,1,0,0,0,223,224,5,23,0,0,224,226,3,50,25,0,225,227,3,36,18,
0,226,225,1,0,0,0,227,228,1,0,0,0,228,226,1,0,0,0,228,229,1,0,0,0,229,237,
1,0,0,0,230,231,5,24,0,0,231,233,3,50,25,0,232,234,3,36,18,0,233,232,1,0,
0,0,234,235,1,0,0,0,235,233,1,0,0,0,235,236,1,0,0,0,236,238,1,0,0,0,237,
230,1,0,0,0,237,238,1,0,0,0,238,245,1,0,0,0,239,241,5,25,0,0,240,242,3,36,
18,0,241,240,1,0,0,0,242,243,1,0,0,0,243,241,1,0,0,0,243,244,1,0,0,0,244,
246,1,0,0,0,245,239,1,0,0,0,245,246,1,0,0,0,246,247,1,0,0,0,247,249,5,26,
0,0,248,250,5,59,0,0,249,248,1,0,0,0,249,250,1,0,0,0,250,39,1,0,0,0,251,
252,5,27,0,0,252,254,3,50,25,0,253,255,3,36,18,0,254,253,1,0,0,0,255,256,
1,0,0,0,256,254,1,0,0,0,256,257,1,0,0,0,257,41,1,0,0,0,258,260,5,28,0,0,
259,261,3,36,18,0,260,259,1,0,0,0,261,262,1,0,0,0,262,260,1,0,0,0,262,263,
1,0,0,0,263,264,1,0,0,0,264,265,5,27,0,0,265,266,3,50,25,0,266,43,1,0,0,
0,267,268,5,29,0,0,268,269,3,90,45,0,269,270,5,30,0,0,270,272,3,56,28,0,
271,273,3,36,18,0,272,271,1,0,0,0,273,274,1,0,0,0,274,272,1,0,0,0,274,275,
1,0,0,0,275,276,1,0,0,0,276,277,5,31,0,0,277,45,1,0,0,0,278,280,5,32,0,0,
279,281,3,36,18,0,280,279,1,0,0,0,281,282,1,0,0,0,282,280,1,0,0,0,282,283,
1,0,0,0,283,284,1,0,0,0,284,285,5,33,0,0,285,287,3,78,39,0,286,288,3,36,
18,0,287,286,1,0,0,0,288,289,1,0,0,0,289,287,1,0,0,0,289,290,1,0,0,0,290,
291,1,0,0,0,291,292,5,34,0,0,292,47,1,0,0,0,293,294,3,78,39,0,294,295,5,
58,0,0,295,296,3,56,28,0,296,297,5,59,0,0,297,49,1,0,0,0,298,299,5,41,0,
0,299,305,3,56,28,0,300,301,3,52,26,0,301,302,3,56,28,0,302,304,1,0,0,0,
303,300,1,0,0,0,304,307,1,0,0,0,305,303,1,0,0,0,305,306,1,0,0,0,306,308,
1,0,0,0,307,305,1,0,0,0,308,309,5,42,0,0,309,51,1,0,0,0,310,311,7,3,0,0,
311,53,1,0,0,0,312,317,3,56,28,0,313,314,5,57,0,0,314,316,3,56,28,0,315,
313,1,0,0,0,316,319,1,0,0,0,317,315,1,0,0,0,317,318,1,0,0,0,318,55,1,0,0,
0,319,317,1,0,0,0,320,325,3,58,29,0,321,322,7,4,0,0,322,324,3,58,29,0,323,
321,1,0,0,0,324,327,1,0,0,0,325,323,1,0,0,0,325,326,1,0,0,0,326,57,1,0,0,
0,327,325,1,0,0,0,328,333,3,60,30,0,329,330,7,5,0,0,330,332,3,60,30,0,331,
329,1,0,0,0,332,335,1,0,0,0,333,331,1,0,0,0,333,334,1,0,0,0,334,59,1,0,0,
0,335,333,1,0,0,0,336,341,3,62,31,0,337,338,5,56,0,0,338,340,3,62,31,0,339,
337,1,0,0,0,340,343,1,0,0,0,341,339,1,0,0,0,341,342,1,0,0,0,342,61,1,0,0,
0,343,341,1,0,0,0,344,345,5,43,0,0,345,350,3,62,31,0,346,347,5,44,0,0,347,
350,3,62,31,0,348,350,3,64,32,0,349,344,1,0,0,0,349,346,1,0,0,0,349,348,
1,0,0,0,350,63,1,0,0,0,351,366,3,84,42,0,352,366,3,68,34,0,353,366,3,74,
37,0,354,366,3,78,39,0,355,366,3,86,43,0,356,366,3,88,44,0,357,366,3,82,
41,0,358,366,3,66,33,0,359,360,5,41,0,0,360,361,3,56,28,0,361,362,5,42,0,
0,362,366,1,0,0,0,363,364,5,35,0,0,364,366,3,56,28,0,365,351,1,0,0,0,365,
352,1,0,0,0,365,353,1,0,0,0,365,354,1,0,0,0,365,355,1,0,0,0,365,356,1,0,
0,0,365,357,1,0,0,0,365,358,1,0,0,0,365,359,1,0,0,0,365,363,1,0,0,0,366,
65,1,0,0,0,367,368,5,61,0,0,368,67,1,0,0,0,369,370,3,90,45,0,370,371,5,41,
0,0,371,372,3,54,27,0,372,373,5,42,0,0,373,69,1,0,0,0,374,377,3,74,37,0,
375,377,3,72,36,0,376,374,1,0,0,0,376,375,1,0,0,0,377,71,1,0,0,0,378,380,
5,36,0,0,379,381,3,56,28,0,380,379,1,0,0,0,380,381,1,0,0,0,381,73,1,0,0,
0,382,383,3,78,39,0,383,384,5,2,0,0,384,385,3,76,38,0,385,75,1,0,0,0,386,
392,3,90,45,0,387,389,5,41,0,0,388,390,3,54,27,0,389,388,1,0,0,0,389,390,
1,0,0,0,390,391,1,0,0,0,391,393,5,42,0,0,392,387,1,0,0,0,392,393,1,0,0,0,
393,77,1,0,0,0,394,403,3,80,40,0,395,396,5,3,0,0,396,402,3,90,45,0,397,398,
5,37,0,0,398,399,3,56,28,0,399,400,5,38,0,0,400,402,1,0,0,0,401,395,1,0,
0,0,401,397,1,0,0,0,402,405,1,0,0,0,403,401,1,0,0,0,403,404,1,0,0,0,404,
79,1,0,0,0,405,403,1,0,0,0,406,409,3,90,45,0,407,409,3,84,42,0,408,406,1,
0,0,0,408,407,1,0,0,0,409,81,1,0,0,0,410,412,5,39,0,0,411,413,3,54,27,0,
412,411,1,0,0,0,412,413,1,0,0,0,413,414,1,0,0,0,414,415,5,40,0,0,415,83,
1,0,0,0,416,417,5,64,0,0,417,85,1,0,0,0,418,419,5,65,0,0,419,87,1,0,0,0,
420,421,5,66,0,0,421,89,1,0,0,0,422,425,3,94,47,0,423,425,3,92,46,0,424,
422,1,0,0,0,424,423,1,0,0,0,425,91,1,0,0,0,426,428,5,60,0,0,427,429,5,63,
0,0,428,427,1,0,0,0,428,429,1,0,0,0,429,93,1,0,0,0,430,431,5,63,0,0,431,
95,1,0,0,0,432,433,5,62,0,0,433,97,1,0,0,0,40,101,119,128,134,144,147,151,
156,159,162,206,221,228,235,237,243,245,249,256,262,274,282,289,305,317,
325,333,341,349,365,376,380,389,392,401,403,408,412,424,428];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class mooParser extends antlr4.Parser {

    static grammarFileName = "moo.g4";
    static literalNames = [ null, "'@program'", "':'", "'.'", "'@verb'", 
                            "'@property'", "'@prop'", "'@rmproperty'", "'@rmprop'", 
                            "'@set'", "'to'", "'@display'", "'@disp'", "'@kids'", 
                            "'@parent'", "'@describe'", "'as'", "'@contents'", 
                            "'@notedit'", "'@create'", "'called'", "'@edit'", 
                            "'@addalias'", "'if'", "'elseif'", "'else'", 
                            "'endif'", "'while'", "'do'", "'for'", "'in'", 
                            "'endfor'", "'try'", "'except'", "'endtry'", 
                            "'!'", "'return'", "'['", "']'", "'{'", "'}'", 
                            "'('", "')'", "'+'", "'-'", "'*'", "'%'", "'/'", 
                            "'>'", "'<'", "'>='", "'<='", "'=='", "'&&'", 
                            "'||'", "'!='", "'^'", "','", "'='", "';'", 
                            "'$'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "LPAREN", "RPAREN", "PLUS", "MINUS", 
                             "TIMES", "MOD", "DIV", "GT", "LT", "GTE", "LTE", 
                             "EQ", "AND", "OR", "NEQ", "POW", "COMMA", "ASSIGN", 
                             "SEMICOLON", "DOLLAR", "OBJREF", "PERMISSIONS", 
                             "STRING", "STRINGLITERAL", "INTEGER", "REAL", 
                             "COMMENT", "WS" ];
    static ruleNames = [ "prog", "declaration", "programdecl", "programname", 
                         "verbdecl", "verbname", "propertydecl", "rmpropertydecl", 
                         "setpropertydecl", "displaypropertydecl", "kidsdecl", 
                         "parentdecl", "describedecl", "contentsdecl", "noteditdecl", 
                         "createdecl", "editdecl", "addaliasdecl", "statement", 
                         "ifblock", "whileblock", "doblock", "forblock", 
                         "tryblock", "assignblock", "condition", "relop", 
                         "expressionlist", "expression", "term", "factor", 
                         "signedAtom", "atom", "objref", "functioninvocation", 
                         "command", "returncommand", "verbinvocation", "verb", 
                         "property_", "propertyname", "list_", "stringliteral", 
                         "integer", "real", "name", "sysname", "username", 
                         "permissions" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = mooParser.ruleNames;
        this.literalNames = mooParser.literalNames;
        this.symbolicNames = mooParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, mooParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 98;
	            this.declaration();
	            this.state = 101; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 7273458) !== 0));
	        this.state = 103;
	        this.match(mooParser.EOF);
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



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, mooParser.RULE_declaration);
	    try {
	        this.state = 119;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            this.programdecl();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 106;
	            this.verbdecl();
	            break;
	        case 5:
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 107;
	            this.propertydecl();
	            break;
	        case 7:
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 108;
	            this.rmpropertydecl();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 109;
	            this.setpropertydecl();
	            break;
	        case 11:
	        case 12:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 110;
	            this.displaypropertydecl();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 111;
	            this.kidsdecl();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 112;
	            this.parentdecl();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 113;
	            this.describedecl();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 114;
	            this.contentsdecl();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 115;
	            this.noteditdecl();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 116;
	            this.createdecl();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 117;
	            this.editdecl();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 118;
	            this.addaliasdecl();
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



	programdecl() {
	    let localctx = new ProgramdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, mooParser.RULE_programdecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(mooParser.T__0);
	        this.state = 122;
	        this.programname();
	        this.state = 123;
	        this.match(mooParser.T__1);
	        this.state = 124;
	        this.name();
	        this.state = 126; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 125;
	            this.statement();
	            this.state = 128; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 23)) & ~0x1f) === 0 && ((1 << (_la - 23)) & 8817) !== 0) || ((((_la - 60)) & ~0x1f) === 0 && ((1 << (_la - 60)) & 25) !== 0));
	        this.state = 130;
	        this.match(mooParser.T__2);
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



	programname() {
	    let localctx = new ProgramnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, mooParser.RULE_programname);
	    try {
	        this.state = 134;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 60:
	        case 63:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 132;
	            this.name();
	            break;
	        case 64:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
	            this.stringliteral();
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



	verbdecl() {
	    let localctx = new VerbdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, mooParser.RULE_verbdecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(mooParser.T__3);

	        this.state = 137;
	        this.verbname();
	        this.state = 138;
	        this.match(mooParser.T__1);
	        this.state = 139;
	        this.name();
	        this.state = 142; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 141;
	            this.name();
	            this.state = 144; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===60 || _la===63);
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===62) {
	            this.state = 146;
	            this.permissions();
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



	verbname() {
	    let localctx = new VerbnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, mooParser.RULE_verbname);
	    try {
	        this.state = 151;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 60:
	        case 63:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 149;
	            this.name();
	            break;
	        case 64:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 150;
	            this.stringliteral();
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



	propertydecl() {
	    let localctx = new PropertydeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, mooParser.RULE_propertydecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 154;
	        this.property_();
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===58) {
	            this.state = 155;
	            this.match(mooParser.ASSIGN);
	        }

	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 4127195985) !== 0)) {
	            this.state = 158;
	            this.expression();
	        }

	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===62) {
	            this.state = 161;
	            this.permissions();
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



	rmpropertydecl() {
	    let localctx = new RmpropertydeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, mooParser.RULE_rmpropertydecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 165;
	        this.name();
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



	setpropertydecl() {
	    let localctx = new SetpropertydeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, mooParser.RULE_setpropertydecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(mooParser.T__8);
	        this.state = 168;
	        this.property_();
	        this.state = 169;
	        this.match(mooParser.T__9);
	        this.state = 170;
	        this.expression();
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



	displaypropertydecl() {
	    let localctx = new DisplaypropertydeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, mooParser.RULE_displaypropertydecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===12)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 173;
	        this.property_();
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



	kidsdecl() {
	    let localctx = new KidsdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, mooParser.RULE_kidsdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.match(mooParser.T__12);
	        this.state = 176;
	        this.name();
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



	parentdecl() {
	    let localctx = new ParentdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, mooParser.RULE_parentdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(mooParser.T__13);
	        this.state = 179;
	        this.name();
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



	describedecl() {
	    let localctx = new DescribedeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, mooParser.RULE_describedecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this.match(mooParser.T__14);
	        this.state = 182;
	        this.property_();
	        this.state = 183;
	        this.match(mooParser.T__15);
	        this.state = 184;
	        this.expression();
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



	contentsdecl() {
	    let localctx = new ContentsdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, mooParser.RULE_contentsdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(mooParser.T__16);
	        this.state = 187;
	        this.name();
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



	noteditdecl() {
	    let localctx = new NoteditdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, mooParser.RULE_noteditdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(mooParser.T__17);
	        this.state = 190;
	        this.property_();
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



	createdecl() {
	    let localctx = new CreatedeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, mooParser.RULE_createdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(mooParser.T__18);
	        this.state = 193;
	        this.sysname();
	        this.state = 194;
	        this.match(mooParser.T__19);
	        this.state = 195;
	        this.expressionlist();
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



	editdecl() {
	    let localctx = new EditdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, mooParser.RULE_editdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.match(mooParser.T__20);
	        this.state = 198;
	        this.property_();
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



	addaliasdecl() {
	    let localctx = new AddaliasdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, mooParser.RULE_addaliasdecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.match(mooParser.T__21);
	        this.state = 201;
	        this.name();
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===57) {
	            this.state = 202;
	            this.match(mooParser.COMMA);
	            this.state = 203;
	            this.name();
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 209;
	        this.match(mooParser.T__9);
	        this.state = 210;
	        this.expression();
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
	    this.enterRule(localctx, 36, mooParser.RULE_statement);
	    try {
	        this.state = 221;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 212;
	            this.ifblock();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 213;
	            this.whileblock();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 214;
	            this.doblock();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 215;
	            this.forblock();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 216;
	            this.assignblock();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 217;
	            this.tryblock();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 218;
	            this.command();
	            this.state = 219;
	            this.match(mooParser.SEMICOLON);
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



	ifblock() {
	    let localctx = new IfblockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, mooParser.RULE_ifblock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(mooParser.T__22);
	        this.state = 224;
	        this.condition();
	        this.state = 226; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 225;
	            this.statement();
	            this.state = 228; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 23)) & ~0x1f) === 0 && ((1 << (_la - 23)) & 8817) !== 0) || ((((_la - 60)) & ~0x1f) === 0 && ((1 << (_la - 60)) & 25) !== 0));
	        this.state = 237;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 230;
	            this.match(mooParser.T__23);
	            this.state = 231;
	            this.condition();
	            this.state = 233; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 232;
	                this.statement();
	                this.state = 235; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 23)) & ~0x1f) === 0 && ((1 << (_la - 23)) & 8817) !== 0) || ((((_la - 60)) & ~0x1f) === 0 && ((1 << (_la - 60)) & 25) !== 0));
	        }

	        this.state = 245;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 239;
	            this.match(mooParser.T__24);
	            this.state = 241; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 240;
	                this.statement();
	                this.state = 243; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 23)) & ~0x1f) === 0 && ((1 << (_la - 23)) & 8817) !== 0) || ((((_la - 60)) & ~0x1f) === 0 && ((1 << (_la - 60)) & 25) !== 0));
	        }

	        this.state = 247;
	        this.match(mooParser.T__25);
	        this.state = 249;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===59) {
	            this.state = 248;
	            this.match(mooParser.SEMICOLON);
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



	whileblock() {
	    let localctx = new WhileblockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, mooParser.RULE_whileblock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        this.match(mooParser.T__26);
	        this.state = 252;
	        this.condition();
	        this.state = 254; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 253;
	        		this.statement();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 256; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,18, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	doblock() {
	    let localctx = new DoblockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, mooParser.RULE_doblock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(mooParser.T__27);
	        this.state = 260; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 259;
	        		this.statement();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 262; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,19, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 264;
	        this.match(mooParser.T__26);
	        this.state = 265;
	        this.condition();
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



	forblock() {
	    let localctx = new ForblockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, mooParser.RULE_forblock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this.match(mooParser.T__28);
	        this.state = 268;
	        this.name();
	        this.state = 269;
	        this.match(mooParser.T__29);
	        this.state = 270;
	        this.expression();
	        this.state = 272; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 271;
	            this.statement();
	            this.state = 274; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 23)) & ~0x1f) === 0 && ((1 << (_la - 23)) & 8817) !== 0) || ((((_la - 60)) & ~0x1f) === 0 && ((1 << (_la - 60)) & 25) !== 0));
	        this.state = 276;
	        this.match(mooParser.T__30);
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



	tryblock() {
	    let localctx = new TryblockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, mooParser.RULE_tryblock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this.match(mooParser.T__31);
	        this.state = 280; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 279;
	            this.statement();
	            this.state = 282; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 23)) & ~0x1f) === 0 && ((1 << (_la - 23)) & 8817) !== 0) || ((((_la - 60)) & ~0x1f) === 0 && ((1 << (_la - 60)) & 25) !== 0));
	        this.state = 284;
	        this.match(mooParser.T__32);
	        this.state = 285;
	        this.property_();
	        this.state = 287; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 286;
	            this.statement();
	            this.state = 289; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 23)) & ~0x1f) === 0 && ((1 << (_la - 23)) & 8817) !== 0) || ((((_la - 60)) & ~0x1f) === 0 && ((1 << (_la - 60)) & 25) !== 0));
	        this.state = 291;
	        this.match(mooParser.T__33);
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



	assignblock() {
	    let localctx = new AssignblockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, mooParser.RULE_assignblock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
	        this.property_();
	        this.state = 294;
	        this.match(mooParser.ASSIGN);
	        this.state = 295;
	        this.expression();
	        this.state = 296;
	        this.match(mooParser.SEMICOLON);
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
	    this.enterRule(localctx, 50, mooParser.RULE_condition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this.match(mooParser.LPAREN);
	        this.state = 299;
	        this.expression();
	        this.state = 305;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 48)) & ~0x1f) === 0 && ((1 << (_la - 48)) & 255) !== 0)) {
	            this.state = 300;
	            this.relop();
	            this.state = 301;
	            this.expression();
	            this.state = 307;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 308;
	        this.match(mooParser.RPAREN);
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



	relop() {
	    let localctx = new RelopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, mooParser.RULE_relop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        _la = this._input.LA(1);
	        if(!(((((_la - 48)) & ~0x1f) === 0 && ((1 << (_la - 48)) & 255) !== 0))) {
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



	expressionlist() {
	    let localctx = new ExpressionlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, mooParser.RULE_expressionlist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        this.expression();
	        this.state = 317;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===57) {
	            this.state = 313;
	            this.match(mooParser.COMMA);
	            this.state = 314;
	            this.expression();
	            this.state = 319;
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, mooParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this.term();
	        this.state = 325;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 321;
	                _la = this._input.LA(1);
	                if(!(_la===43 || _la===44)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 322;
	                this.term(); 
	            }
	            this.state = 327;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, mooParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
	        this.factor();
	        this.state = 333;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 329;
	                _la = this._input.LA(1);
	                if(!(((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 7) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 330;
	                this.factor(); 
	            }
	            this.state = 335;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
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



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, mooParser.RULE_factor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        this.signedAtom();
	        this.state = 341;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 337;
	                this.match(mooParser.POW);
	                this.state = 338;
	                this.signedAtom(); 
	            }
	            this.state = 343;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
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



	signedAtom() {
	    let localctx = new SignedAtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, mooParser.RULE_signedAtom);
	    try {
	        this.state = 349;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 43:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 344;
	            this.match(mooParser.PLUS);
	            this.state = 345;
	            this.signedAtom();
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 346;
	            this.match(mooParser.MINUS);
	            this.state = 347;
	            this.signedAtom();
	            break;
	        case 35:
	        case 39:
	        case 41:
	        case 60:
	        case 61:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 348;
	            this.atom();
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, mooParser.RULE_atom);
	    try {
	        this.state = 365;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 351;
	            this.stringliteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 352;
	            this.functioninvocation();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 353;
	            this.verbinvocation();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 354;
	            this.property_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 355;
	            this.integer();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 356;
	            this.real();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 357;
	            this.list_();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 358;
	            this.objref();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 359;
	            this.match(mooParser.LPAREN);
	            this.state = 360;
	            this.expression();
	            this.state = 361;
	            this.match(mooParser.RPAREN);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 363;
	            this.match(mooParser.T__34);
	            this.state = 364;
	            this.expression();
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



	objref() {
	    let localctx = new ObjrefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, mooParser.RULE_objref);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 367;
	        this.match(mooParser.OBJREF);
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



	functioninvocation() {
	    let localctx = new FunctioninvocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, mooParser.RULE_functioninvocation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 369;
	        this.name();
	        this.state = 370;
	        this.match(mooParser.LPAREN);
	        this.state = 371;
	        this.expressionlist();
	        this.state = 372;
	        this.match(mooParser.RPAREN);
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



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, mooParser.RULE_command);
	    try {
	        this.state = 376;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 60:
	        case 63:
	        case 64:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 374;
	            this.verbinvocation();
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 375;
	            this.returncommand();
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



	returncommand() {
	    let localctx = new ReturncommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, mooParser.RULE_returncommand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 378;
	        this.match(mooParser.T__35);
	        this.state = 380;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 4127195985) !== 0)) {
	            this.state = 379;
	            this.expression();
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



	verbinvocation() {
	    let localctx = new VerbinvocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, mooParser.RULE_verbinvocation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 382;
	        this.property_();
	        this.state = 383;
	        this.match(mooParser.T__1);
	        this.state = 384;
	        this.verb();
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



	verb() {
	    let localctx = new VerbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, mooParser.RULE_verb);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 386;
	        this.name();
	        this.state = 392;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 387;
	            this.match(mooParser.LPAREN);
	            this.state = 389;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 4127195985) !== 0)) {
	                this.state = 388;
	                this.expressionlist();
	            }

	            this.state = 391;
	            this.match(mooParser.RPAREN);
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
	    this.enterRule(localctx, 78, mooParser.RULE_property_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 394;
	        this.propertyname();
	        this.state = 403;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===37) {
	            this.state = 401;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 3:
	                this.state = 395;
	                this.match(mooParser.T__2);
	                this.state = 396;
	                this.name();
	                break;
	            case 37:
	                this.state = 397;
	                this.match(mooParser.T__36);
	                this.state = 398;
	                this.expression();
	                this.state = 399;
	                this.match(mooParser.T__37);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 405;
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



	propertyname() {
	    let localctx = new PropertynameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, mooParser.RULE_propertyname);
	    try {
	        this.state = 408;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 60:
	        case 63:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 406;
	            this.name();
	            break;
	        case 64:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 407;
	            this.stringliteral();
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



	list_() {
	    let localctx = new List_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, mooParser.RULE_list_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 410;
	        this.match(mooParser.T__38);
	        this.state = 412;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 4127195985) !== 0)) {
	            this.state = 411;
	            this.expressionlist();
	        }

	        this.state = 414;
	        this.match(mooParser.T__39);
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



	stringliteral() {
	    let localctx = new StringliteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, mooParser.RULE_stringliteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 416;
	        this.match(mooParser.STRINGLITERAL);
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



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, mooParser.RULE_integer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 418;
	        this.match(mooParser.INTEGER);
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



	real() {
	    let localctx = new RealContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, mooParser.RULE_real);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 420;
	        this.match(mooParser.REAL);
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, mooParser.RULE_name);
	    try {
	        this.state = 424;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 63:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 422;
	            this.username();
	            break;
	        case 60:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 423;
	            this.sysname();
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



	sysname() {
	    let localctx = new SysnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, mooParser.RULE_sysname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 426;
	        this.match(mooParser.DOLLAR);
	        this.state = 428;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        if(la_===1) {
	            this.state = 427;
	            this.match(mooParser.STRING);

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



	username() {
	    let localctx = new UsernameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, mooParser.RULE_username);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 430;
	        this.match(mooParser.STRING);
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



	permissions() {
	    let localctx = new PermissionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, mooParser.RULE_permissions);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 432;
	        this.match(mooParser.PERMISSIONS);
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

mooParser.EOF = antlr4.Token.EOF;
mooParser.T__0 = 1;
mooParser.T__1 = 2;
mooParser.T__2 = 3;
mooParser.T__3 = 4;
mooParser.T__4 = 5;
mooParser.T__5 = 6;
mooParser.T__6 = 7;
mooParser.T__7 = 8;
mooParser.T__8 = 9;
mooParser.T__9 = 10;
mooParser.T__10 = 11;
mooParser.T__11 = 12;
mooParser.T__12 = 13;
mooParser.T__13 = 14;
mooParser.T__14 = 15;
mooParser.T__15 = 16;
mooParser.T__16 = 17;
mooParser.T__17 = 18;
mooParser.T__18 = 19;
mooParser.T__19 = 20;
mooParser.T__20 = 21;
mooParser.T__21 = 22;
mooParser.T__22 = 23;
mooParser.T__23 = 24;
mooParser.T__24 = 25;
mooParser.T__25 = 26;
mooParser.T__26 = 27;
mooParser.T__27 = 28;
mooParser.T__28 = 29;
mooParser.T__29 = 30;
mooParser.T__30 = 31;
mooParser.T__31 = 32;
mooParser.T__32 = 33;
mooParser.T__33 = 34;
mooParser.T__34 = 35;
mooParser.T__35 = 36;
mooParser.T__36 = 37;
mooParser.T__37 = 38;
mooParser.T__38 = 39;
mooParser.T__39 = 40;
mooParser.LPAREN = 41;
mooParser.RPAREN = 42;
mooParser.PLUS = 43;
mooParser.MINUS = 44;
mooParser.TIMES = 45;
mooParser.MOD = 46;
mooParser.DIV = 47;
mooParser.GT = 48;
mooParser.LT = 49;
mooParser.GTE = 50;
mooParser.LTE = 51;
mooParser.EQ = 52;
mooParser.AND = 53;
mooParser.OR = 54;
mooParser.NEQ = 55;
mooParser.POW = 56;
mooParser.COMMA = 57;
mooParser.ASSIGN = 58;
mooParser.SEMICOLON = 59;
mooParser.DOLLAR = 60;
mooParser.OBJREF = 61;
mooParser.PERMISSIONS = 62;
mooParser.STRING = 63;
mooParser.STRINGLITERAL = 64;
mooParser.INTEGER = 65;
mooParser.REAL = 66;
mooParser.COMMENT = 67;
mooParser.WS = 68;

mooParser.RULE_prog = 0;
mooParser.RULE_declaration = 1;
mooParser.RULE_programdecl = 2;
mooParser.RULE_programname = 3;
mooParser.RULE_verbdecl = 4;
mooParser.RULE_verbname = 5;
mooParser.RULE_propertydecl = 6;
mooParser.RULE_rmpropertydecl = 7;
mooParser.RULE_setpropertydecl = 8;
mooParser.RULE_displaypropertydecl = 9;
mooParser.RULE_kidsdecl = 10;
mooParser.RULE_parentdecl = 11;
mooParser.RULE_describedecl = 12;
mooParser.RULE_contentsdecl = 13;
mooParser.RULE_noteditdecl = 14;
mooParser.RULE_createdecl = 15;
mooParser.RULE_editdecl = 16;
mooParser.RULE_addaliasdecl = 17;
mooParser.RULE_statement = 18;
mooParser.RULE_ifblock = 19;
mooParser.RULE_whileblock = 20;
mooParser.RULE_doblock = 21;
mooParser.RULE_forblock = 22;
mooParser.RULE_tryblock = 23;
mooParser.RULE_assignblock = 24;
mooParser.RULE_condition = 25;
mooParser.RULE_relop = 26;
mooParser.RULE_expressionlist = 27;
mooParser.RULE_expression = 28;
mooParser.RULE_term = 29;
mooParser.RULE_factor = 30;
mooParser.RULE_signedAtom = 31;
mooParser.RULE_atom = 32;
mooParser.RULE_objref = 33;
mooParser.RULE_functioninvocation = 34;
mooParser.RULE_command = 35;
mooParser.RULE_returncommand = 36;
mooParser.RULE_verbinvocation = 37;
mooParser.RULE_verb = 38;
mooParser.RULE_property_ = 39;
mooParser.RULE_propertyname = 40;
mooParser.RULE_list_ = 41;
mooParser.RULE_stringliteral = 42;
mooParser.RULE_integer = 43;
mooParser.RULE_real = 44;
mooParser.RULE_name = 45;
mooParser.RULE_sysname = 46;
mooParser.RULE_username = 47;
mooParser.RULE_permissions = 48;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(mooParser.EOF, 0);
	};

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitProg(this);
		}
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_declaration;
    }

	programdecl() {
	    return this.getTypedRuleContext(ProgramdeclContext,0);
	};

	verbdecl() {
	    return this.getTypedRuleContext(VerbdeclContext,0);
	};

	propertydecl() {
	    return this.getTypedRuleContext(PropertydeclContext,0);
	};

	rmpropertydecl() {
	    return this.getTypedRuleContext(RmpropertydeclContext,0);
	};

	setpropertydecl() {
	    return this.getTypedRuleContext(SetpropertydeclContext,0);
	};

	displaypropertydecl() {
	    return this.getTypedRuleContext(DisplaypropertydeclContext,0);
	};

	kidsdecl() {
	    return this.getTypedRuleContext(KidsdeclContext,0);
	};

	parentdecl() {
	    return this.getTypedRuleContext(ParentdeclContext,0);
	};

	describedecl() {
	    return this.getTypedRuleContext(DescribedeclContext,0);
	};

	contentsdecl() {
	    return this.getTypedRuleContext(ContentsdeclContext,0);
	};

	noteditdecl() {
	    return this.getTypedRuleContext(NoteditdeclContext,0);
	};

	createdecl() {
	    return this.getTypedRuleContext(CreatedeclContext,0);
	};

	editdecl() {
	    return this.getTypedRuleContext(EditdeclContext,0);
	};

	addaliasdecl() {
	    return this.getTypedRuleContext(AddaliasdeclContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitDeclaration(this);
		}
	}


}



class ProgramdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_programdecl;
    }

	programname() {
	    return this.getTypedRuleContext(ProgramnameContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
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
	    if(listener instanceof mooListener ) {
	        listener.enterProgramdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitProgramdecl(this);
		}
	}


}



class ProgramnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_programname;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	stringliteral() {
	    return this.getTypedRuleContext(StringliteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterProgramname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitProgramname(this);
		}
	}


}



class VerbdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_verbdecl;
    }

	verbname() {
	    return this.getTypedRuleContext(VerbnameContext,0);
	};

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	permissions() {
	    return this.getTypedRuleContext(PermissionsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterVerbdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitVerbdecl(this);
		}
	}


}



class VerbnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_verbname;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	stringliteral() {
	    return this.getTypedRuleContext(StringliteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterVerbname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitVerbname(this);
		}
	}


}



class PropertydeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_propertydecl;
    }

	property_() {
	    return this.getTypedRuleContext(Property_Context,0);
	};

	ASSIGN() {
	    return this.getToken(mooParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	permissions() {
	    return this.getTypedRuleContext(PermissionsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterPropertydecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitPropertydecl(this);
		}
	}


}



class RmpropertydeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_rmpropertydecl;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterRmpropertydecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitRmpropertydecl(this);
		}
	}


}



class SetpropertydeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_setpropertydecl;
    }

	property_() {
	    return this.getTypedRuleContext(Property_Context,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterSetpropertydecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitSetpropertydecl(this);
		}
	}


}



class DisplaypropertydeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_displaypropertydecl;
    }

	property_() {
	    return this.getTypedRuleContext(Property_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterDisplaypropertydecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitDisplaypropertydecl(this);
		}
	}


}



class KidsdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_kidsdecl;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterKidsdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitKidsdecl(this);
		}
	}


}



class ParentdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_parentdecl;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterParentdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitParentdecl(this);
		}
	}


}



class DescribedeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_describedecl;
    }

	property_() {
	    return this.getTypedRuleContext(Property_Context,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterDescribedecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitDescribedecl(this);
		}
	}


}



class ContentsdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_contentsdecl;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterContentsdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitContentsdecl(this);
		}
	}


}



class NoteditdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_noteditdecl;
    }

	property_() {
	    return this.getTypedRuleContext(Property_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterNoteditdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitNoteditdecl(this);
		}
	}


}



class CreatedeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_createdecl;
    }

	sysname() {
	    return this.getTypedRuleContext(SysnameContext,0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterCreatedecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitCreatedecl(this);
		}
	}


}



class EditdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_editdecl;
    }

	property_() {
	    return this.getTypedRuleContext(Property_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterEditdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitEditdecl(this);
		}
	}


}



class AddaliasdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_addaliasdecl;
    }

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mooParser.COMMA);
	    } else {
	        return this.getToken(mooParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterAddaliasdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitAddaliasdecl(this);
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
        this.ruleIndex = mooParser.RULE_statement;
    }

	ifblock() {
	    return this.getTypedRuleContext(IfblockContext,0);
	};

	whileblock() {
	    return this.getTypedRuleContext(WhileblockContext,0);
	};

	doblock() {
	    return this.getTypedRuleContext(DoblockContext,0);
	};

	forblock() {
	    return this.getTypedRuleContext(ForblockContext,0);
	};

	assignblock() {
	    return this.getTypedRuleContext(AssignblockContext,0);
	};

	tryblock() {
	    return this.getTypedRuleContext(TryblockContext,0);
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	SEMICOLON() {
	    return this.getToken(mooParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitStatement(this);
		}
	}


}



class IfblockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_ifblock;
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

	SEMICOLON() {
	    return this.getToken(mooParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterIfblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitIfblock(this);
		}
	}


}



class WhileblockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_whileblock;
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
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
	    if(listener instanceof mooListener ) {
	        listener.enterWhileblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitWhileblock(this);
		}
	}


}



class DoblockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_doblock;
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
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
	    if(listener instanceof mooListener ) {
	        listener.enterDoblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitDoblock(this);
		}
	}


}



class ForblockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_forblock;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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
	    if(listener instanceof mooListener ) {
	        listener.enterForblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitForblock(this);
		}
	}


}



class TryblockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_tryblock;
    }

	property_() {
	    return this.getTypedRuleContext(Property_Context,0);
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
	    if(listener instanceof mooListener ) {
	        listener.enterTryblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitTryblock(this);
		}
	}


}



class AssignblockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_assignblock;
    }

	property_() {
	    return this.getTypedRuleContext(Property_Context,0);
	};

	ASSIGN() {
	    return this.getToken(mooParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMICOLON() {
	    return this.getToken(mooParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterAssignblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitAssignblock(this);
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
        this.ruleIndex = mooParser.RULE_condition;
    }

	LPAREN() {
	    return this.getToken(mooParser.LPAREN, 0);
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

	RPAREN() {
	    return this.getToken(mooParser.RPAREN, 0);
	};

	relop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelopContext);
	    } else {
	        return this.getTypedRuleContext(RelopContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitCondition(this);
		}
	}


}



class RelopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_relop;
    }

	EQ() {
	    return this.getToken(mooParser.EQ, 0);
	};

	NEQ() {
	    return this.getToken(mooParser.NEQ, 0);
	};

	GT() {
	    return this.getToken(mooParser.GT, 0);
	};

	GTE() {
	    return this.getToken(mooParser.GTE, 0);
	};

	LT() {
	    return this.getToken(mooParser.LT, 0);
	};

	LTE() {
	    return this.getToken(mooParser.LTE, 0);
	};

	AND() {
	    return this.getToken(mooParser.AND, 0);
	};

	OR() {
	    return this.getToken(mooParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterRelop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitRelop(this);
		}
	}


}



class ExpressionlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_expressionlist;
    }

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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mooParser.COMMA);
	    } else {
	        return this.getToken(mooParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterExpressionlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitExpressionlist(this);
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
        this.ruleIndex = mooParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mooParser.PLUS);
	    } else {
	        return this.getToken(mooParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mooParser.MINUS);
	    } else {
	        return this.getToken(mooParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitExpression(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	TIMES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mooParser.TIMES);
	    } else {
	        return this.getToken(mooParser.TIMES, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mooParser.DIV);
	    } else {
	        return this.getToken(mooParser.DIV, i);
	    }
	};


	MOD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mooParser.MOD);
	    } else {
	        return this.getToken(mooParser.MOD, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitTerm(this);
		}
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_factor;
    }

	signedAtom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SignedAtomContext);
	    } else {
	        return this.getTypedRuleContext(SignedAtomContext,i);
	    }
	};

	POW = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mooParser.POW);
	    } else {
	        return this.getToken(mooParser.POW, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitFactor(this);
		}
	}


}



class SignedAtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_signedAtom;
    }

	PLUS() {
	    return this.getToken(mooParser.PLUS, 0);
	};

	signedAtom() {
	    return this.getTypedRuleContext(SignedAtomContext,0);
	};

	MINUS() {
	    return this.getToken(mooParser.MINUS, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterSignedAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitSignedAtom(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_atom;
    }

	stringliteral() {
	    return this.getTypedRuleContext(StringliteralContext,0);
	};

	functioninvocation() {
	    return this.getTypedRuleContext(FunctioninvocationContext,0);
	};

	verbinvocation() {
	    return this.getTypedRuleContext(VerbinvocationContext,0);
	};

	property_() {
	    return this.getTypedRuleContext(Property_Context,0);
	};

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	real() {
	    return this.getTypedRuleContext(RealContext,0);
	};

	list_() {
	    return this.getTypedRuleContext(List_Context,0);
	};

	objref() {
	    return this.getTypedRuleContext(ObjrefContext,0);
	};

	LPAREN() {
	    return this.getToken(mooParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(mooParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitAtom(this);
		}
	}


}



class ObjrefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_objref;
    }

	OBJREF() {
	    return this.getToken(mooParser.OBJREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterObjref(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitObjref(this);
		}
	}


}



class FunctioninvocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_functioninvocation;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	LPAREN() {
	    return this.getToken(mooParser.LPAREN, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	RPAREN() {
	    return this.getToken(mooParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterFunctioninvocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitFunctioninvocation(this);
		}
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_command;
    }

	verbinvocation() {
	    return this.getTypedRuleContext(VerbinvocationContext,0);
	};

	returncommand() {
	    return this.getTypedRuleContext(ReturncommandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitCommand(this);
		}
	}


}



class ReturncommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_returncommand;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterReturncommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitReturncommand(this);
		}
	}


}



class VerbinvocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_verbinvocation;
    }

	property_() {
	    return this.getTypedRuleContext(Property_Context,0);
	};

	verb() {
	    return this.getTypedRuleContext(VerbContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterVerbinvocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitVerbinvocation(this);
		}
	}


}



class VerbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_verb;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	LPAREN() {
	    return this.getToken(mooParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(mooParser.RPAREN, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterVerb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitVerb(this);
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
        this.ruleIndex = mooParser.RULE_property_;
    }

	propertyname() {
	    return this.getTypedRuleContext(PropertynameContext,0);
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

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterProperty_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitProperty_(this);
		}
	}


}



class PropertynameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_propertyname;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	stringliteral() {
	    return this.getTypedRuleContext(StringliteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterPropertyname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitPropertyname(this);
		}
	}


}



class List_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_list_;
    }

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterList_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitList_(this);
		}
	}


}



class StringliteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_stringliteral;
    }

	STRINGLITERAL() {
	    return this.getToken(mooParser.STRINGLITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterStringliteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitStringliteral(this);
		}
	}


}



class IntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_integer;
    }

	INTEGER() {
	    return this.getToken(mooParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitInteger(this);
		}
	}


}



class RealContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_real;
    }

	REAL() {
	    return this.getToken(mooParser.REAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterReal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitReal(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_name;
    }

	username() {
	    return this.getTypedRuleContext(UsernameContext,0);
	};

	sysname() {
	    return this.getTypedRuleContext(SysnameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitName(this);
		}
	}


}



class SysnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_sysname;
    }

	DOLLAR() {
	    return this.getToken(mooParser.DOLLAR, 0);
	};

	STRING() {
	    return this.getToken(mooParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterSysname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitSysname(this);
		}
	}


}



class UsernameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_username;
    }

	STRING() {
	    return this.getToken(mooParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterUsername(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitUsername(this);
		}
	}


}



class PermissionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mooParser.RULE_permissions;
    }

	PERMISSIONS() {
	    return this.getToken(mooParser.PERMISSIONS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.enterPermissions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mooListener ) {
	        listener.exitPermissions(this);
		}
	}


}




mooParser.ProgContext = ProgContext; 
mooParser.DeclarationContext = DeclarationContext; 
mooParser.ProgramdeclContext = ProgramdeclContext; 
mooParser.ProgramnameContext = ProgramnameContext; 
mooParser.VerbdeclContext = VerbdeclContext; 
mooParser.VerbnameContext = VerbnameContext; 
mooParser.PropertydeclContext = PropertydeclContext; 
mooParser.RmpropertydeclContext = RmpropertydeclContext; 
mooParser.SetpropertydeclContext = SetpropertydeclContext; 
mooParser.DisplaypropertydeclContext = DisplaypropertydeclContext; 
mooParser.KidsdeclContext = KidsdeclContext; 
mooParser.ParentdeclContext = ParentdeclContext; 
mooParser.DescribedeclContext = DescribedeclContext; 
mooParser.ContentsdeclContext = ContentsdeclContext; 
mooParser.NoteditdeclContext = NoteditdeclContext; 
mooParser.CreatedeclContext = CreatedeclContext; 
mooParser.EditdeclContext = EditdeclContext; 
mooParser.AddaliasdeclContext = AddaliasdeclContext; 
mooParser.StatementContext = StatementContext; 
mooParser.IfblockContext = IfblockContext; 
mooParser.WhileblockContext = WhileblockContext; 
mooParser.DoblockContext = DoblockContext; 
mooParser.ForblockContext = ForblockContext; 
mooParser.TryblockContext = TryblockContext; 
mooParser.AssignblockContext = AssignblockContext; 
mooParser.ConditionContext = ConditionContext; 
mooParser.RelopContext = RelopContext; 
mooParser.ExpressionlistContext = ExpressionlistContext; 
mooParser.ExpressionContext = ExpressionContext; 
mooParser.TermContext = TermContext; 
mooParser.FactorContext = FactorContext; 
mooParser.SignedAtomContext = SignedAtomContext; 
mooParser.AtomContext = AtomContext; 
mooParser.ObjrefContext = ObjrefContext; 
mooParser.FunctioninvocationContext = FunctioninvocationContext; 
mooParser.CommandContext = CommandContext; 
mooParser.ReturncommandContext = ReturncommandContext; 
mooParser.VerbinvocationContext = VerbinvocationContext; 
mooParser.VerbContext = VerbContext; 
mooParser.Property_Context = Property_Context; 
mooParser.PropertynameContext = PropertynameContext; 
mooParser.List_Context = List_Context; 
mooParser.StringliteralContext = StringliteralContext; 
mooParser.IntegerContext = IntegerContext; 
mooParser.RealContext = RealContext; 
mooParser.NameContext = NameContext; 
mooParser.SysnameContext = SysnameContext; 
mooParser.UsernameContext = UsernameContext; 
mooParser.PermissionsContext = PermissionsContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
