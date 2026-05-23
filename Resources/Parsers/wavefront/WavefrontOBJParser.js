// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/wavefront/WavefrontOBJ.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import WavefrontOBJListener from './WavefrontOBJListener.js';
const serializedATN = [4,1,62,414,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,1,0,5,0,88,8,0,10,0,12,0,91,9,0,1,0,1,0,4,0,95,8,0,11,0,12,0,96,
1,0,3,0,100,8,0,4,0,102,8,0,11,0,12,0,103,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,3,1,137,8,1,1,2,1,2,5,2,141,8,2,10,2,12,2,144,9,2,
1,3,1,3,3,3,148,8,3,1,3,5,3,151,8,3,10,3,12,3,154,9,3,1,4,1,4,1,4,1,4,1,
4,3,4,161,8,4,1,5,1,5,1,5,3,5,166,8,5,1,5,3,5,169,8,5,1,6,1,6,1,6,1,6,1,
6,1,7,1,7,1,7,3,7,179,8,7,1,7,3,7,182,8,7,1,8,1,8,3,8,186,8,8,1,8,1,8,1,
9,1,9,1,9,3,9,193,8,9,1,10,1,10,1,10,4,10,198,8,10,11,10,12,10,199,1,11,
1,11,1,11,3,11,205,8,11,1,12,1,12,4,12,209,8,12,11,12,12,12,210,1,13,1,13,
4,13,215,8,13,11,13,12,13,216,1,14,1,14,4,14,221,8,14,11,14,12,14,222,1,
15,1,15,1,15,3,15,228,8,15,1,15,4,15,231,8,15,11,15,12,15,232,1,15,1,15,
1,15,1,15,1,15,3,15,240,8,15,1,15,4,15,243,8,15,11,15,12,15,244,5,15,247,
8,15,10,15,12,15,250,9,15,1,15,1,15,1,16,1,16,1,16,1,16,4,16,258,8,16,11,
16,12,16,259,1,17,1,17,1,17,4,17,265,8,17,11,17,12,17,266,1,18,1,18,1,18,
1,18,1,18,1,18,4,18,275,8,18,11,18,12,18,276,1,19,1,19,1,19,4,19,282,8,19,
11,19,12,19,283,1,20,1,20,1,20,1,20,1,20,4,20,291,8,20,11,20,12,20,292,1,
21,1,21,1,21,1,21,1,21,4,21,300,8,21,11,21,12,21,301,1,22,1,22,1,22,1,22,
1,22,4,22,309,8,22,11,22,12,22,310,1,23,1,23,4,23,315,8,23,11,23,12,23,316,
1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,4,
26,333,8,26,11,26,12,26,334,1,27,1,27,1,27,3,27,340,8,27,1,28,1,28,1,28,
1,28,3,28,346,8,28,1,29,1,29,1,29,1,30,1,30,1,30,1,31,1,31,1,31,1,32,1,32,
1,32,1,33,1,33,1,33,1,34,1,34,4,34,365,8,34,11,34,12,34,366,1,35,1,35,1,
35,3,35,372,8,35,1,36,1,36,1,36,1,37,1,37,1,37,1,38,1,38,1,38,1,39,1,39,
1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,3,40,395,8,40,1,41,1,41,
1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,3,41,410,8,41,1,42,
1,42,1,42,0,0,43,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,0,6,
1,0,8,12,2,0,2,2,15,15,2,0,52,52,54,54,1,0,52,54,2,0,32,32,36,36,1,0,54,
55,446,0,89,1,0,0,0,2,136,1,0,0,0,4,138,1,0,0,0,6,145,1,0,0,0,8,155,1,0,
0,0,10,162,1,0,0,0,12,170,1,0,0,0,14,175,1,0,0,0,16,183,1,0,0,0,18,189,1,
0,0,0,20,194,1,0,0,0,22,201,1,0,0,0,24,206,1,0,0,0,26,212,1,0,0,0,28,218,
1,0,0,0,30,227,1,0,0,0,32,253,1,0,0,0,34,261,1,0,0,0,36,268,1,0,0,0,38,278,
1,0,0,0,40,285,1,0,0,0,42,294,1,0,0,0,44,303,1,0,0,0,46,312,1,0,0,0,48,318,
1,0,0,0,50,320,1,0,0,0,52,330,1,0,0,0,54,336,1,0,0,0,56,341,1,0,0,0,58,347,
1,0,0,0,60,350,1,0,0,0,62,353,1,0,0,0,64,356,1,0,0,0,66,359,1,0,0,0,68,362,
1,0,0,0,70,368,1,0,0,0,72,373,1,0,0,0,74,376,1,0,0,0,76,379,1,0,0,0,78,382,
1,0,0,0,80,385,1,0,0,0,82,396,1,0,0,0,84,411,1,0,0,0,86,88,5,60,0,0,87,86,
1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,101,1,0,0,0,91,89,1,
0,0,0,92,99,3,2,1,0,93,95,5,60,0,0,94,93,1,0,0,0,95,96,1,0,0,0,96,94,1,0,
0,0,96,97,1,0,0,0,97,100,1,0,0,0,98,100,5,0,0,1,99,94,1,0,0,0,99,98,1,0,
0,0,100,102,1,0,0,0,101,92,1,0,0,0,102,103,1,0,0,0,103,101,1,0,0,0,103,104,
1,0,0,0,104,1,1,0,0,0,105,137,3,4,2,0,106,137,3,6,3,0,107,137,3,8,4,0,108,
137,3,12,6,0,109,137,3,14,7,0,110,137,3,10,5,0,111,137,3,24,12,0,112,137,
3,26,13,0,113,137,3,28,14,0,114,137,3,16,8,0,115,137,3,18,9,0,116,137,3,
20,10,0,117,137,3,22,11,0,118,137,3,30,15,0,119,137,3,50,25,0,120,137,3,
52,26,0,121,137,3,54,27,0,122,137,3,56,28,0,123,137,3,58,29,0,124,137,3,
60,30,0,125,137,3,62,31,0,126,137,3,64,32,0,127,137,3,66,33,0,128,137,3,
68,34,0,129,137,3,70,35,0,130,137,3,72,36,0,131,137,3,74,37,0,132,137,3,
76,38,0,133,137,3,78,39,0,134,137,3,80,40,0,135,137,3,82,41,0,136,105,1,
0,0,0,136,106,1,0,0,0,136,107,1,0,0,0,136,108,1,0,0,0,136,109,1,0,0,0,136,
110,1,0,0,0,136,111,1,0,0,0,136,112,1,0,0,0,136,113,1,0,0,0,136,114,1,0,
0,0,136,115,1,0,0,0,136,116,1,0,0,0,136,117,1,0,0,0,136,118,1,0,0,0,136,
119,1,0,0,0,136,120,1,0,0,0,136,121,1,0,0,0,136,122,1,0,0,0,136,123,1,0,
0,0,136,124,1,0,0,0,136,125,1,0,0,0,136,126,1,0,0,0,136,127,1,0,0,0,136,
128,1,0,0,0,136,129,1,0,0,0,136,130,1,0,0,0,136,131,1,0,0,0,136,132,1,0,
0,0,136,133,1,0,0,0,136,134,1,0,0,0,136,135,1,0,0,0,137,3,1,0,0,0,138,142,
5,58,0,0,139,141,5,62,0,0,140,139,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,
0,142,143,1,0,0,0,143,5,1,0,0,0,144,142,1,0,0,0,145,147,5,58,0,0,146,148,
5,1,0,0,147,146,1,0,0,0,147,148,1,0,0,0,148,152,1,0,0,0,149,151,5,62,0,0,
150,149,1,0,0,0,151,154,1,0,0,0,152,150,1,0,0,0,152,153,1,0,0,0,153,7,1,
0,0,0,154,152,1,0,0,0,155,156,5,2,0,0,156,157,3,84,42,0,157,158,3,84,42,
0,158,160,3,84,42,0,159,161,3,84,42,0,160,159,1,0,0,0,160,161,1,0,0,0,161,
9,1,0,0,0,162,163,5,3,0,0,163,165,3,84,42,0,164,166,3,84,42,0,165,164,1,
0,0,0,165,166,1,0,0,0,166,168,1,0,0,0,167,169,3,84,42,0,168,167,1,0,0,0,
168,169,1,0,0,0,169,11,1,0,0,0,170,171,5,4,0,0,171,172,3,84,42,0,172,173,
3,84,42,0,173,174,3,84,42,0,174,13,1,0,0,0,175,176,5,5,0,0,176,178,3,84,
42,0,177,179,3,84,42,0,178,177,1,0,0,0,178,179,1,0,0,0,179,181,1,0,0,0,180,
182,3,84,42,0,181,180,1,0,0,0,181,182,1,0,0,0,182,15,1,0,0,0,183,185,5,6,
0,0,184,186,5,7,0,0,185,184,1,0,0,0,185,186,1,0,0,0,186,187,1,0,0,0,187,
188,7,0,0,0,188,17,1,0,0,0,189,190,5,13,0,0,190,192,5,54,0,0,191,193,5,54,
0,0,192,191,1,0,0,0,192,193,1,0,0,0,193,19,1,0,0,0,194,195,5,14,0,0,195,
197,7,1,0,0,196,198,3,84,42,0,197,196,1,0,0,0,198,199,1,0,0,0,199,197,1,
0,0,0,199,200,1,0,0,0,200,21,1,0,0,0,201,202,5,16,0,0,202,204,5,54,0,0,203,
205,5,54,0,0,204,203,1,0,0,0,204,205,1,0,0,0,205,23,1,0,0,0,206,208,5,17,
0,0,207,209,5,54,0,0,208,207,1,0,0,0,209,210,1,0,0,0,210,208,1,0,0,0,210,
211,1,0,0,0,211,25,1,0,0,0,212,214,5,18,0,0,213,215,7,2,0,0,214,213,1,0,
0,0,215,216,1,0,0,0,216,214,1,0,0,0,216,217,1,0,0,0,217,27,1,0,0,0,218,220,
5,19,0,0,219,221,7,3,0,0,220,219,1,0,0,0,221,222,1,0,0,0,222,220,1,0,0,0,
222,223,1,0,0,0,223,29,1,0,0,0,224,228,3,32,16,0,225,228,3,34,17,0,226,228,
3,36,18,0,227,224,1,0,0,0,227,225,1,0,0,0,227,226,1,0,0,0,228,230,1,0,0,
0,229,231,5,60,0,0,230,229,1,0,0,0,231,232,1,0,0,0,232,230,1,0,0,0,232,233,
1,0,0,0,233,248,1,0,0,0,234,240,3,38,19,0,235,240,3,40,20,0,236,240,3,42,
21,0,237,240,3,44,22,0,238,240,3,46,23,0,239,234,1,0,0,0,239,235,1,0,0,0,
239,236,1,0,0,0,239,237,1,0,0,0,239,238,1,0,0,0,240,242,1,0,0,0,241,243,
5,60,0,0,242,241,1,0,0,0,243,244,1,0,0,0,244,242,1,0,0,0,244,245,1,0,0,0,
245,247,1,0,0,0,246,239,1,0,0,0,247,250,1,0,0,0,248,246,1,0,0,0,248,249,
1,0,0,0,249,251,1,0,0,0,250,248,1,0,0,0,251,252,3,48,24,0,252,31,1,0,0,0,
253,254,5,20,0,0,254,255,3,84,42,0,255,257,3,84,42,0,256,258,5,54,0,0,257,
256,1,0,0,0,258,259,1,0,0,0,259,257,1,0,0,0,259,260,1,0,0,0,260,33,1,0,0,
0,261,262,5,21,0,0,262,264,5,54,0,0,263,265,5,54,0,0,264,263,1,0,0,0,265,
266,1,0,0,0,266,264,1,0,0,0,266,267,1,0,0,0,267,35,1,0,0,0,268,269,5,22,
0,0,269,270,3,84,42,0,270,271,3,84,42,0,271,272,3,84,42,0,272,274,3,84,42,
0,273,275,7,3,0,0,274,273,1,0,0,0,275,276,1,0,0,0,276,274,1,0,0,0,276,277,
1,0,0,0,277,37,1,0,0,0,278,279,5,23,0,0,279,281,7,1,0,0,280,282,3,84,42,
0,281,280,1,0,0,0,282,283,1,0,0,0,283,281,1,0,0,0,283,284,1,0,0,0,284,39,
1,0,0,0,285,290,5,24,0,0,286,287,3,84,42,0,287,288,3,84,42,0,288,289,5,54,
0,0,289,291,1,0,0,0,290,286,1,0,0,0,291,292,1,0,0,0,292,290,1,0,0,0,292,
293,1,0,0,0,293,41,1,0,0,0,294,299,5,25,0,0,295,296,3,84,42,0,296,297,3,
84,42,0,297,298,5,54,0,0,298,300,1,0,0,0,299,295,1,0,0,0,300,301,1,0,0,0,
301,299,1,0,0,0,301,302,1,0,0,0,302,43,1,0,0,0,303,308,5,26,0,0,304,305,
3,84,42,0,305,306,3,84,42,0,306,307,5,54,0,0,307,309,1,0,0,0,308,304,1,0,
0,0,309,310,1,0,0,0,310,308,1,0,0,0,310,311,1,0,0,0,311,45,1,0,0,0,312,314,
5,27,0,0,313,315,5,54,0,0,314,313,1,0,0,0,315,316,1,0,0,0,316,314,1,0,0,
0,316,317,1,0,0,0,317,47,1,0,0,0,318,319,5,28,0,0,319,49,1,0,0,0,320,321,
5,29,0,0,321,322,5,54,0,0,322,323,3,84,42,0,323,324,3,84,42,0,324,325,5,
54,0,0,325,326,5,54,0,0,326,327,3,84,42,0,327,328,3,84,42,0,328,329,5,54,
0,0,329,51,1,0,0,0,330,332,5,30,0,0,331,333,5,57,0,0,332,331,1,0,0,0,333,
334,1,0,0,0,334,332,1,0,0,0,334,335,1,0,0,0,335,53,1,0,0,0,336,339,5,31,
0,0,337,340,5,54,0,0,338,340,5,32,0,0,339,337,1,0,0,0,339,338,1,0,0,0,340,
55,1,0,0,0,341,345,5,33,0,0,342,343,5,54,0,0,343,346,3,84,42,0,344,346,5,
32,0,0,345,342,1,0,0,0,345,344,1,0,0,0,346,57,1,0,0,0,347,348,5,34,0,0,348,
349,5,57,0,0,349,59,1,0,0,0,350,351,5,35,0,0,351,352,7,4,0,0,352,61,1,0,
0,0,353,354,5,37,0,0,354,355,7,4,0,0,355,63,1,0,0,0,356,357,5,38,0,0,357,
358,7,4,0,0,358,65,1,0,0,0,359,360,5,39,0,0,360,361,5,54,0,0,361,67,1,0,
0,0,362,364,5,40,0,0,363,365,5,58,0,0,364,363,1,0,0,0,365,366,1,0,0,0,366,
364,1,0,0,0,366,367,1,0,0,0,367,69,1,0,0,0,368,371,5,41,0,0,369,372,5,57,
0,0,370,372,5,32,0,0,371,369,1,0,0,0,371,370,1,0,0,0,372,71,1,0,0,0,373,
374,5,42,0,0,374,375,5,58,0,0,375,73,1,0,0,0,376,377,5,43,0,0,377,378,5,
57,0,0,378,75,1,0,0,0,379,380,5,44,0,0,380,381,5,58,0,0,381,77,1,0,0,0,382,
383,5,45,0,0,383,384,5,58,0,0,384,79,1,0,0,0,385,394,5,46,0,0,386,387,5,
47,0,0,387,395,3,84,42,0,388,389,5,48,0,0,389,395,3,84,42,0,390,391,5,20,
0,0,391,392,3,84,42,0,392,393,3,84,42,0,393,395,1,0,0,0,394,386,1,0,0,0,
394,388,1,0,0,0,394,390,1,0,0,0,395,81,1,0,0,0,396,409,5,49,0,0,397,398,
5,50,0,0,398,399,3,84,42,0,399,400,3,84,42,0,400,410,1,0,0,0,401,402,5,51,
0,0,402,410,3,84,42,0,403,404,5,48,0,0,404,410,3,84,42,0,405,406,5,20,0,
0,406,407,3,84,42,0,407,408,3,84,42,0,408,410,1,0,0,0,409,397,1,0,0,0,409,
401,1,0,0,0,409,403,1,0,0,0,409,405,1,0,0,0,410,83,1,0,0,0,411,412,7,5,0,
0,412,85,1,0,0,0,40,89,96,99,103,136,142,147,152,160,165,168,178,181,185,
192,199,204,210,216,222,227,232,239,244,248,259,266,276,283,292,301,310,
316,334,339,345,366,371,394,409];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class WavefrontOBJParser extends antlr4.Parser {

    static grammarFileName = "WavefrontOBJ.g4";
    static literalNames = [ null, "'-'", "'v'", "'vp'", "'vn'", "'vt'", 
                            "'cstype'", "'rat'", "'bmatrix'", "'bezier'", 
                            "'bspline'", "'cardinal'", "'taylor'", "'deg'", 
                            "'bmat'", "'u'", "'step'", "'p'", "'l'", "'f'", 
                            "'curv'", "'curv2'", "'surf'", "'parm'", "'trim'", 
                            "'hole'", "'scrv'", "'sp'", "'end'", "'con'", 
                            "'g'", "'s'", "'off'", "'mg'", "'o'", "'bevel'", 
                            "'on'", "'c_interp'", "'d_interp'", "'lod'", 
                            "'maplib'", "'usemap'", "'mtllib'", "'usemtl'", 
                            "'shadow_obj'", "'trace_obj'", "'ctech'", "'cparm'", 
                            "'cspace'", "'stech'", "'cparma'", "'cparmb'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "INTEGER_PAIR", "INTEGER_TRIPLET", 
                             "INTEGER", "DECIMAL", "COMMENT", "NAME", "FILENAME", 
                             "WS", "NL", "NON_NL", "NON_WS" ];
    static ruleNames = [ "start_", "statement", "call", "csh", "vertex", 
                         "vertex_parameter", "vertex_normal", "vertex_texture", 
                         "curve_surface_type", "degree", "basis_matrix", 
                         "step", "points", "lines", "faces", "free_form_surface", 
                         "curve", "curve2d", "surface", "parameter", "outer_trimming_loop", 
                         "inner_trimming_loop", "special_curve", "special_point", 
                         "end", "connectivity", "group", "smoothing_group", 
                         "merging_group", "object_name", "bevel", "color_interpolation", 
                         "dissolve_interpolation", "level_of_detail", "map_library", 
                         "use_map", "material_library", "use_material", 
                         "shadow_object", "trace_object", "curve_approximation_technique", 
                         "surface_approximation_technique", "decimal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = WavefrontOBJParser.ruleNames;
        this.literalNames = WavefrontOBJParser.literalNames;
        this.symbolicNames = WavefrontOBJParser.symbolicNames;
    }



	start_() {
	    let localctx = new Start_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, WavefrontOBJParser.RULE_start_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===60) {
	            this.state = 86;
	            this.match(WavefrontOBJParser.NL);
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 101; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 92;
	            this.statement();
	            this.state = 99;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 60:
	                this.state = 94; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 93;
	                    this.match(WavefrontOBJParser.NL);
	                    this.state = 96; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===60);
	                break;
	            case -1:
	                this.state = 98;
	                this.match(WavefrontOBJParser.EOF);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 103; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3766444156) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 33636343) !== 0));
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
	    this.enterRule(localctx, 2, WavefrontOBJParser.RULE_statement);
	    try {
	        this.state = 136;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            this.call();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 106;
	            this.csh();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 107;
	            this.vertex();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 108;
	            this.vertex_normal();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 109;
	            this.vertex_texture();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 110;
	            this.vertex_parameter();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 111;
	            this.points();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 112;
	            this.lines();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 113;
	            this.faces();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 114;
	            this.curve_surface_type();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 115;
	            this.degree();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 116;
	            this.basis_matrix();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 117;
	            this.step();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 118;
	            this.free_form_surface();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 119;
	            this.connectivity();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 120;
	            this.group();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 121;
	            this.smoothing_group();
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 122;
	            this.merging_group();
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 123;
	            this.object_name();
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 124;
	            this.bevel();
	            break;

	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 125;
	            this.color_interpolation();
	            break;

	        case 22:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 126;
	            this.dissolve_interpolation();
	            break;

	        case 23:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 127;
	            this.level_of_detail();
	            break;

	        case 24:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 128;
	            this.map_library();
	            break;

	        case 25:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 129;
	            this.use_map();
	            break;

	        case 26:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 130;
	            this.material_library();
	            break;

	        case 27:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 131;
	            this.use_material();
	            break;

	        case 28:
	            this.enterOuterAlt(localctx, 28);
	            this.state = 132;
	            this.shadow_object();
	            break;

	        case 29:
	            this.enterOuterAlt(localctx, 29);
	            this.state = 133;
	            this.trace_object();
	            break;

	        case 30:
	            this.enterOuterAlt(localctx, 30);
	            this.state = 134;
	            this.curve_approximation_technique();
	            break;

	        case 31:
	            this.enterOuterAlt(localctx, 31);
	            this.state = 135;
	            this.surface_approximation_technique();
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



	call() {
	    let localctx = new CallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, WavefrontOBJParser.RULE_call);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        localctx.filename = this.match(WavefrontOBJParser.FILENAME);
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===62) {
	            this.state = 139;
	            localctx.args = this.match(WavefrontOBJParser.NON_WS);
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



	csh() {
	    let localctx = new CshContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, WavefrontOBJParser.RULE_csh);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        localctx.command = this.match(WavefrontOBJParser.FILENAME);
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 146;
	            this.match(WavefrontOBJParser.T__0);
	        }

	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===62) {
	            this.state = 149;
	            localctx.args = this.match(WavefrontOBJParser.NON_WS);
	            this.state = 154;
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



	vertex() {
	    let localctx = new VertexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, WavefrontOBJParser.RULE_vertex);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(WavefrontOBJParser.T__1);
	        this.state = 156;
	        localctx.x = this.decimal();
	        this.state = 157;
	        localctx.y = this.decimal();
	        this.state = 158;
	        localctx.z = this.decimal();
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54 || _la===55) {
	            this.state = 159;
	            localctx.w = this.decimal();
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



	vertex_parameter() {
	    let localctx = new Vertex_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, WavefrontOBJParser.RULE_vertex_parameter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(WavefrontOBJParser.T__2);
	        this.state = 163;
	        localctx.u = this.decimal();
	        this.state = 165;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 164;
	            localctx.v = this.decimal();

	        }
	        this.state = 168;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54 || _la===55) {
	            this.state = 167;
	            localctx.w = this.decimal();
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



	vertex_normal() {
	    let localctx = new Vertex_normalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, WavefrontOBJParser.RULE_vertex_normal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.match(WavefrontOBJParser.T__3);
	        this.state = 171;
	        localctx.x = this.decimal();
	        this.state = 172;
	        localctx.y = this.decimal();
	        this.state = 173;
	        localctx.z = this.decimal();
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



	vertex_texture() {
	    let localctx = new Vertex_textureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, WavefrontOBJParser.RULE_vertex_texture);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.match(WavefrontOBJParser.T__4);
	        this.state = 176;
	        localctx.u = this.decimal();
	        this.state = 178;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 177;
	            localctx.v = this.decimal();

	        }
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54 || _la===55) {
	            this.state = 180;
	            localctx.w = this.decimal();
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



	curve_surface_type() {
	    let localctx = new Curve_surface_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, WavefrontOBJParser.RULE_curve_surface_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.match(WavefrontOBJParser.T__5);
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 184;
	            localctx.rational = this.match(WavefrontOBJParser.T__6);
	        }

	        this.state = 187;
	        localctx.cstype = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7936) !== 0))) {
	            localctx.cstype = this._errHandler.recoverInline(this);
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



	degree() {
	    let localctx = new DegreeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, WavefrontOBJParser.RULE_degree);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(WavefrontOBJParser.T__12);
	        this.state = 190;
	        localctx.u = this.match(WavefrontOBJParser.INTEGER);
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54) {
	            this.state = 191;
	            localctx.v = this.match(WavefrontOBJParser.INTEGER);
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



	basis_matrix() {
	    let localctx = new Basis_matrixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, WavefrontOBJParser.RULE_basis_matrix);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.match(WavefrontOBJParser.T__13);
	        this.state = 195;
	        _la = this._input.LA(1);
	        if(!(_la===2 || _la===15)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 197; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 196;
	            this.decimal();
	            this.state = 199; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===54 || _la===55);
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



	step() {
	    let localctx = new StepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, WavefrontOBJParser.RULE_step);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(WavefrontOBJParser.T__15);
	        this.state = 202;
	        localctx.u = this.match(WavefrontOBJParser.INTEGER);
	        this.state = 204;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54) {
	            this.state = 203;
	            localctx.v = this.match(WavefrontOBJParser.INTEGER);
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



	points() {
	    let localctx = new PointsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, WavefrontOBJParser.RULE_points);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(WavefrontOBJParser.T__16);
	        this.state = 208; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 207;
	            localctx.v = this.match(WavefrontOBJParser.INTEGER);
	            this.state = 210; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===54);
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



	lines() {
	    let localctx = new LinesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, WavefrontOBJParser.RULE_lines);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.match(WavefrontOBJParser.T__17);
	        this.state = 214; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 213;
	            localctx.v = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===52 || _la===54)) {
	                localctx.v = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 216; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===52 || _la===54);
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



	faces() {
	    let localctx = new FacesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, WavefrontOBJParser.RULE_faces);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        this.match(WavefrontOBJParser.T__18);
	        this.state = 220; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 219;
	            localctx.v = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 52)) & ~0x1f) === 0 && ((1 << (_la - 52)) & 7) !== 0))) {
	                localctx.v = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 222; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 52)) & ~0x1f) === 0 && ((1 << (_la - 52)) & 7) !== 0));
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



	free_form_surface() {
	    let localctx = new Free_form_surfaceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, WavefrontOBJParser.RULE_free_form_surface);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.state = 224;
	            this.curve();
	            break;
	        case 21:
	            this.state = 225;
	            this.curve2d();
	            break;
	        case 22:
	            this.state = 226;
	            this.surface();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 230; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 229;
	            this.match(WavefrontOBJParser.NL);
	            this.state = 232; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===60);
	        this.state = 248;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 260046848) !== 0)) {
	            this.state = 239;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 23:
	                this.state = 234;
	                this.parameter();
	                break;
	            case 24:
	                this.state = 235;
	                this.outer_trimming_loop();
	                break;
	            case 25:
	                this.state = 236;
	                this.inner_trimming_loop();
	                break;
	            case 26:
	                this.state = 237;
	                this.special_curve();
	                break;
	            case 27:
	                this.state = 238;
	                this.special_point();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 242; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 241;
	                this.match(WavefrontOBJParser.NL);
	                this.state = 244; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===60);
	            this.state = 250;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 251;
	        this.end();
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



	curve() {
	    let localctx = new CurveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, WavefrontOBJParser.RULE_curve);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(WavefrontOBJParser.T__19);
	        this.state = 254;
	        localctx.u0 = this.decimal();
	        this.state = 255;
	        localctx.u1 = this.decimal();
	        this.state = 257; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 256;
	            localctx.v = this.match(WavefrontOBJParser.INTEGER);
	            this.state = 259; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===54);
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



	curve2d() {
	    let localctx = new Curve2dContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, WavefrontOBJParser.RULE_curve2d);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.match(WavefrontOBJParser.T__20);
	        this.state = 262;
	        localctx.vp1 = this.match(WavefrontOBJParser.INTEGER);
	        this.state = 264; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 263;
	            localctx.vp2 = this.match(WavefrontOBJParser.INTEGER);
	            this.state = 266; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===54);
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



	surface() {
	    let localctx = new SurfaceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, WavefrontOBJParser.RULE_surface);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.match(WavefrontOBJParser.T__21);
	        this.state = 269;
	        localctx.s0 = this.decimal();
	        this.state = 270;
	        localctx.s1 = this.decimal();
	        this.state = 271;
	        localctx.t0 = this.decimal();
	        this.state = 272;
	        localctx.t1 = this.decimal();
	        this.state = 274; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 273;
	            localctx.v = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 52)) & ~0x1f) === 0 && ((1 << (_la - 52)) & 7) !== 0))) {
	                localctx.v = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 276; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 52)) & ~0x1f) === 0 && ((1 << (_la - 52)) & 7) !== 0));
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



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, WavefrontOBJParser.RULE_parameter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this.match(WavefrontOBJParser.T__22);
	        this.state = 279;
	        _la = this._input.LA(1);
	        if(!(_la===2 || _la===15)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 281; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 280;
	            localctx.p = this.decimal();
	            this.state = 283; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===54 || _la===55);
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



	outer_trimming_loop() {
	    let localctx = new Outer_trimming_loopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, WavefrontOBJParser.RULE_outer_trimming_loop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        this.match(WavefrontOBJParser.T__23);
	        this.state = 290; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 286;
	            localctx.u0 = this.decimal();
	            this.state = 287;
	            localctx.u1 = this.decimal();
	            this.state = 288;
	            localctx.curv2d = this.match(WavefrontOBJParser.INTEGER);
	            this.state = 292; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===54 || _la===55);
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



	inner_trimming_loop() {
	    let localctx = new Inner_trimming_loopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, WavefrontOBJParser.RULE_inner_trimming_loop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
	        this.match(WavefrontOBJParser.T__24);
	        this.state = 299; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 295;
	            localctx.u0 = this.decimal();
	            this.state = 296;
	            localctx.u1 = this.decimal();
	            this.state = 297;
	            localctx.curv2d = this.match(WavefrontOBJParser.INTEGER);
	            this.state = 301; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===54 || _la===55);
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



	special_curve() {
	    let localctx = new Special_curveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, WavefrontOBJParser.RULE_special_curve);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        this.match(WavefrontOBJParser.T__25);
	        this.state = 308; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 304;
	            localctx.u0 = this.decimal();
	            this.state = 305;
	            localctx.u1 = this.decimal();
	            this.state = 306;
	            localctx.curv2d = this.match(WavefrontOBJParser.INTEGER);
	            this.state = 310; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===54 || _la===55);
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



	special_point() {
	    let localctx = new Special_pointContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, WavefrontOBJParser.RULE_special_point);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        this.match(WavefrontOBJParser.T__26);
	        this.state = 314; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 313;
	            localctx.vp = this.match(WavefrontOBJParser.INTEGER);
	            this.state = 316; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===54);
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



	end() {
	    let localctx = new EndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, WavefrontOBJParser.RULE_end);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
	        this.match(WavefrontOBJParser.T__27);
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



	connectivity() {
	    let localctx = new ConnectivityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, WavefrontOBJParser.RULE_connectivity);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this.match(WavefrontOBJParser.T__28);
	        this.state = 321;
	        localctx.surf_1 = this.match(WavefrontOBJParser.INTEGER);
	        this.state = 322;
	        localctx.q0_1 = this.decimal();
	        this.state = 323;
	        localctx.q1_1 = this.decimal();
	        this.state = 324;
	        localctx.curv2d_1 = this.match(WavefrontOBJParser.INTEGER);
	        this.state = 325;
	        localctx.surf_2 = this.match(WavefrontOBJParser.INTEGER);
	        this.state = 326;
	        localctx.q0_2 = this.decimal();
	        this.state = 327;
	        localctx.q1_2 = this.decimal();
	        this.state = 328;
	        localctx.curv2d_2 = this.match(WavefrontOBJParser.INTEGER);
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



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, WavefrontOBJParser.RULE_group);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
	        this.match(WavefrontOBJParser.T__29);
	        this.state = 332; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 331;
	            localctx.group_name = this.match(WavefrontOBJParser.NAME);
	            this.state = 334; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===57);
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



	smoothing_group() {
	    let localctx = new Smoothing_groupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, WavefrontOBJParser.RULE_smoothing_group);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        this.match(WavefrontOBJParser.T__30);
	        this.state = 339;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 54:
	            this.state = 337;
	            localctx.group_number = this.match(WavefrontOBJParser.INTEGER);
	            break;
	        case 32:
	            this.state = 338;
	            this.match(WavefrontOBJParser.T__31);
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



	merging_group() {
	    let localctx = new Merging_groupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, WavefrontOBJParser.RULE_merging_group);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 341;
	        this.match(WavefrontOBJParser.T__32);
	        this.state = 345;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 54:
	            this.state = 342;
	            localctx.group_number = this.match(WavefrontOBJParser.INTEGER);
	            this.state = 343;
	            localctx.res = this.decimal();
	            break;
	        case 32:
	            this.state = 344;
	            this.match(WavefrontOBJParser.T__31);
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



	object_name() {
	    let localctx = new Object_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, WavefrontOBJParser.RULE_object_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        this.match(WavefrontOBJParser.T__33);
	        this.state = 348;
	        localctx.name = this.match(WavefrontOBJParser.NAME);
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



	bevel() {
	    let localctx = new BevelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, WavefrontOBJParser.RULE_bevel);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 350;
	        this.match(WavefrontOBJParser.T__34);
	        this.state = 351;
	        _la = this._input.LA(1);
	        if(!(_la===32 || _la===36)) {
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



	color_interpolation() {
	    let localctx = new Color_interpolationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, WavefrontOBJParser.RULE_color_interpolation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 353;
	        this.match(WavefrontOBJParser.T__36);
	        this.state = 354;
	        _la = this._input.LA(1);
	        if(!(_la===32 || _la===36)) {
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



	dissolve_interpolation() {
	    let localctx = new Dissolve_interpolationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, WavefrontOBJParser.RULE_dissolve_interpolation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356;
	        this.match(WavefrontOBJParser.T__37);
	        this.state = 357;
	        _la = this._input.LA(1);
	        if(!(_la===32 || _la===36)) {
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



	level_of_detail() {
	    let localctx = new Level_of_detailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, WavefrontOBJParser.RULE_level_of_detail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 359;
	        this.match(WavefrontOBJParser.T__38);
	        this.state = 360;
	        localctx.level = this.match(WavefrontOBJParser.INTEGER);
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



	map_library() {
	    let localctx = new Map_libraryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, WavefrontOBJParser.RULE_map_library);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 362;
	        this.match(WavefrontOBJParser.T__39);
	        this.state = 364; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 363;
	            localctx.filename = this.match(WavefrontOBJParser.FILENAME);
	            this.state = 366; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===58);
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



	use_map() {
	    let localctx = new Use_mapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, WavefrontOBJParser.RULE_use_map);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 368;
	        this.match(WavefrontOBJParser.T__40);
	        this.state = 371;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 57:
	            this.state = 369;
	            localctx.map_name = this.match(WavefrontOBJParser.NAME);
	            break;
	        case 32:
	            this.state = 370;
	            this.match(WavefrontOBJParser.T__31);
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



	material_library() {
	    let localctx = new Material_libraryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, WavefrontOBJParser.RULE_material_library);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        this.match(WavefrontOBJParser.T__41);
	        this.state = 374;
	        localctx.filename = this.match(WavefrontOBJParser.FILENAME);
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



	use_material() {
	    let localctx = new Use_materialContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, WavefrontOBJParser.RULE_use_material);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 376;
	        this.match(WavefrontOBJParser.T__42);
	        this.state = 377;
	        this.match(WavefrontOBJParser.NAME);
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



	shadow_object() {
	    let localctx = new Shadow_objectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, WavefrontOBJParser.RULE_shadow_object);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this.match(WavefrontOBJParser.T__43);
	        this.state = 380;
	        localctx.filename = this.match(WavefrontOBJParser.FILENAME);
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



	trace_object() {
	    let localctx = new Trace_objectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, WavefrontOBJParser.RULE_trace_object);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 382;
	        this.match(WavefrontOBJParser.T__44);
	        this.state = 383;
	        localctx.filename = this.match(WavefrontOBJParser.FILENAME);
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



	curve_approximation_technique() {
	    let localctx = new Curve_approximation_techniqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, WavefrontOBJParser.RULE_curve_approximation_technique);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 385;
	        this.match(WavefrontOBJParser.T__45);
	        this.state = 394;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 47:
	            this.state = 386;
	            this.match(WavefrontOBJParser.T__46);
	            this.state = 387;
	            localctx.res = this.decimal();
	            break;
	        case 48:
	            this.state = 388;
	            this.match(WavefrontOBJParser.T__47);
	            this.state = 389;
	            localctx.maxlength = this.decimal();
	            break;
	        case 20:
	            this.state = 390;
	            this.match(WavefrontOBJParser.T__19);
	            this.state = 391;
	            localctx.maxdist = this.decimal();
	            this.state = 392;
	            localctx.maxangle = this.decimal();
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



	surface_approximation_technique() {
	    let localctx = new Surface_approximation_techniqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, WavefrontOBJParser.RULE_surface_approximation_technique);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        this.match(WavefrontOBJParser.T__48);
	        this.state = 409;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 50:
	            this.state = 397;
	            this.match(WavefrontOBJParser.T__49);
	            this.state = 398;
	            localctx.ures = this.decimal();
	            this.state = 399;
	            localctx.vres = this.decimal();
	            break;
	        case 51:
	            this.state = 401;
	            this.match(WavefrontOBJParser.T__50);
	            this.state = 402;
	            localctx.uvres = this.decimal();
	            break;
	        case 48:
	            this.state = 403;
	            this.match(WavefrontOBJParser.T__47);
	            this.state = 404;
	            localctx.maxlength = this.decimal();
	            break;
	        case 20:
	            this.state = 405;
	            this.match(WavefrontOBJParser.T__19);
	            this.state = 406;
	            localctx.maxdist = this.decimal();
	            this.state = 407;
	            localctx.maxangle = this.decimal();
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



	decimal() {
	    let localctx = new DecimalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, WavefrontOBJParser.RULE_decimal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 411;
	        _la = this._input.LA(1);
	        if(!(_la===54 || _la===55)) {
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


}

WavefrontOBJParser.EOF = antlr4.Token.EOF;
WavefrontOBJParser.T__0 = 1;
WavefrontOBJParser.T__1 = 2;
WavefrontOBJParser.T__2 = 3;
WavefrontOBJParser.T__3 = 4;
WavefrontOBJParser.T__4 = 5;
WavefrontOBJParser.T__5 = 6;
WavefrontOBJParser.T__6 = 7;
WavefrontOBJParser.T__7 = 8;
WavefrontOBJParser.T__8 = 9;
WavefrontOBJParser.T__9 = 10;
WavefrontOBJParser.T__10 = 11;
WavefrontOBJParser.T__11 = 12;
WavefrontOBJParser.T__12 = 13;
WavefrontOBJParser.T__13 = 14;
WavefrontOBJParser.T__14 = 15;
WavefrontOBJParser.T__15 = 16;
WavefrontOBJParser.T__16 = 17;
WavefrontOBJParser.T__17 = 18;
WavefrontOBJParser.T__18 = 19;
WavefrontOBJParser.T__19 = 20;
WavefrontOBJParser.T__20 = 21;
WavefrontOBJParser.T__21 = 22;
WavefrontOBJParser.T__22 = 23;
WavefrontOBJParser.T__23 = 24;
WavefrontOBJParser.T__24 = 25;
WavefrontOBJParser.T__25 = 26;
WavefrontOBJParser.T__26 = 27;
WavefrontOBJParser.T__27 = 28;
WavefrontOBJParser.T__28 = 29;
WavefrontOBJParser.T__29 = 30;
WavefrontOBJParser.T__30 = 31;
WavefrontOBJParser.T__31 = 32;
WavefrontOBJParser.T__32 = 33;
WavefrontOBJParser.T__33 = 34;
WavefrontOBJParser.T__34 = 35;
WavefrontOBJParser.T__35 = 36;
WavefrontOBJParser.T__36 = 37;
WavefrontOBJParser.T__37 = 38;
WavefrontOBJParser.T__38 = 39;
WavefrontOBJParser.T__39 = 40;
WavefrontOBJParser.T__40 = 41;
WavefrontOBJParser.T__41 = 42;
WavefrontOBJParser.T__42 = 43;
WavefrontOBJParser.T__43 = 44;
WavefrontOBJParser.T__44 = 45;
WavefrontOBJParser.T__45 = 46;
WavefrontOBJParser.T__46 = 47;
WavefrontOBJParser.T__47 = 48;
WavefrontOBJParser.T__48 = 49;
WavefrontOBJParser.T__49 = 50;
WavefrontOBJParser.T__50 = 51;
WavefrontOBJParser.INTEGER_PAIR = 52;
WavefrontOBJParser.INTEGER_TRIPLET = 53;
WavefrontOBJParser.INTEGER = 54;
WavefrontOBJParser.DECIMAL = 55;
WavefrontOBJParser.COMMENT = 56;
WavefrontOBJParser.NAME = 57;
WavefrontOBJParser.FILENAME = 58;
WavefrontOBJParser.WS = 59;
WavefrontOBJParser.NL = 60;
WavefrontOBJParser.NON_NL = 61;
WavefrontOBJParser.NON_WS = 62;

WavefrontOBJParser.RULE_start_ = 0;
WavefrontOBJParser.RULE_statement = 1;
WavefrontOBJParser.RULE_call = 2;
WavefrontOBJParser.RULE_csh = 3;
WavefrontOBJParser.RULE_vertex = 4;
WavefrontOBJParser.RULE_vertex_parameter = 5;
WavefrontOBJParser.RULE_vertex_normal = 6;
WavefrontOBJParser.RULE_vertex_texture = 7;
WavefrontOBJParser.RULE_curve_surface_type = 8;
WavefrontOBJParser.RULE_degree = 9;
WavefrontOBJParser.RULE_basis_matrix = 10;
WavefrontOBJParser.RULE_step = 11;
WavefrontOBJParser.RULE_points = 12;
WavefrontOBJParser.RULE_lines = 13;
WavefrontOBJParser.RULE_faces = 14;
WavefrontOBJParser.RULE_free_form_surface = 15;
WavefrontOBJParser.RULE_curve = 16;
WavefrontOBJParser.RULE_curve2d = 17;
WavefrontOBJParser.RULE_surface = 18;
WavefrontOBJParser.RULE_parameter = 19;
WavefrontOBJParser.RULE_outer_trimming_loop = 20;
WavefrontOBJParser.RULE_inner_trimming_loop = 21;
WavefrontOBJParser.RULE_special_curve = 22;
WavefrontOBJParser.RULE_special_point = 23;
WavefrontOBJParser.RULE_end = 24;
WavefrontOBJParser.RULE_connectivity = 25;
WavefrontOBJParser.RULE_group = 26;
WavefrontOBJParser.RULE_smoothing_group = 27;
WavefrontOBJParser.RULE_merging_group = 28;
WavefrontOBJParser.RULE_object_name = 29;
WavefrontOBJParser.RULE_bevel = 30;
WavefrontOBJParser.RULE_color_interpolation = 31;
WavefrontOBJParser.RULE_dissolve_interpolation = 32;
WavefrontOBJParser.RULE_level_of_detail = 33;
WavefrontOBJParser.RULE_map_library = 34;
WavefrontOBJParser.RULE_use_map = 35;
WavefrontOBJParser.RULE_material_library = 36;
WavefrontOBJParser.RULE_use_material = 37;
WavefrontOBJParser.RULE_shadow_object = 38;
WavefrontOBJParser.RULE_trace_object = 39;
WavefrontOBJParser.RULE_curve_approximation_technique = 40;
WavefrontOBJParser.RULE_surface_approximation_technique = 41;
WavefrontOBJParser.RULE_decimal = 42;

class Start_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_start_;
    }

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.NL);
	    } else {
	        return this.getToken(WavefrontOBJParser.NL, i);
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

	EOF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.EOF);
	    } else {
	        return this.getToken(WavefrontOBJParser.EOF, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterStart_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitStart_(this);
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
        this.ruleIndex = WavefrontOBJParser.RULE_statement;
    }

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	csh() {
	    return this.getTypedRuleContext(CshContext,0);
	};

	vertex() {
	    return this.getTypedRuleContext(VertexContext,0);
	};

	vertex_normal() {
	    return this.getTypedRuleContext(Vertex_normalContext,0);
	};

	vertex_texture() {
	    return this.getTypedRuleContext(Vertex_textureContext,0);
	};

	vertex_parameter() {
	    return this.getTypedRuleContext(Vertex_parameterContext,0);
	};

	points() {
	    return this.getTypedRuleContext(PointsContext,0);
	};

	lines() {
	    return this.getTypedRuleContext(LinesContext,0);
	};

	faces() {
	    return this.getTypedRuleContext(FacesContext,0);
	};

	curve_surface_type() {
	    return this.getTypedRuleContext(Curve_surface_typeContext,0);
	};

	degree() {
	    return this.getTypedRuleContext(DegreeContext,0);
	};

	basis_matrix() {
	    return this.getTypedRuleContext(Basis_matrixContext,0);
	};

	step() {
	    return this.getTypedRuleContext(StepContext,0);
	};

	free_form_surface() {
	    return this.getTypedRuleContext(Free_form_surfaceContext,0);
	};

	connectivity() {
	    return this.getTypedRuleContext(ConnectivityContext,0);
	};

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	smoothing_group() {
	    return this.getTypedRuleContext(Smoothing_groupContext,0);
	};

	merging_group() {
	    return this.getTypedRuleContext(Merging_groupContext,0);
	};

	object_name() {
	    return this.getTypedRuleContext(Object_nameContext,0);
	};

	bevel() {
	    return this.getTypedRuleContext(BevelContext,0);
	};

	color_interpolation() {
	    return this.getTypedRuleContext(Color_interpolationContext,0);
	};

	dissolve_interpolation() {
	    return this.getTypedRuleContext(Dissolve_interpolationContext,0);
	};

	level_of_detail() {
	    return this.getTypedRuleContext(Level_of_detailContext,0);
	};

	map_library() {
	    return this.getTypedRuleContext(Map_libraryContext,0);
	};

	use_map() {
	    return this.getTypedRuleContext(Use_mapContext,0);
	};

	material_library() {
	    return this.getTypedRuleContext(Material_libraryContext,0);
	};

	use_material() {
	    return this.getTypedRuleContext(Use_materialContext,0);
	};

	shadow_object() {
	    return this.getTypedRuleContext(Shadow_objectContext,0);
	};

	trace_object() {
	    return this.getTypedRuleContext(Trace_objectContext,0);
	};

	curve_approximation_technique() {
	    return this.getTypedRuleContext(Curve_approximation_techniqueContext,0);
	};

	surface_approximation_technique() {
	    return this.getTypedRuleContext(Surface_approximation_techniqueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitStatement(this);
		}
	}


}



class CallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_call;
        this.filename = null;
        this.args = null;
    }

	FILENAME() {
	    return this.getToken(WavefrontOBJParser.FILENAME, 0);
	};

	NON_WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.NON_WS);
	    } else {
	        return this.getToken(WavefrontOBJParser.NON_WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitCall(this);
		}
	}


}



class CshContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_csh;
        this.command = null;
        this.args = null;
    }

	FILENAME() {
	    return this.getToken(WavefrontOBJParser.FILENAME, 0);
	};

	NON_WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.NON_WS);
	    } else {
	        return this.getToken(WavefrontOBJParser.NON_WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterCsh(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitCsh(this);
		}
	}


}



class VertexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_vertex;
        this.x = null;
        this.y = null;
        this.z = null;
        this.w = null;
    }

	decimal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DecimalContext);
	    } else {
	        return this.getTypedRuleContext(DecimalContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterVertex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitVertex(this);
		}
	}


}



class Vertex_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_vertex_parameter;
        this.u = null;
        this.v = null;
        this.w = null;
    }

	decimal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DecimalContext);
	    } else {
	        return this.getTypedRuleContext(DecimalContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterVertex_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitVertex_parameter(this);
		}
	}


}



class Vertex_normalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_vertex_normal;
        this.x = null;
        this.y = null;
        this.z = null;
    }

	decimal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DecimalContext);
	    } else {
	        return this.getTypedRuleContext(DecimalContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterVertex_normal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitVertex_normal(this);
		}
	}


}



class Vertex_textureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_vertex_texture;
        this.u = null;
        this.v = null;
        this.w = null;
    }

	decimal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DecimalContext);
	    } else {
	        return this.getTypedRuleContext(DecimalContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterVertex_texture(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitVertex_texture(this);
		}
	}


}



class Curve_surface_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_curve_surface_type;
        this.rational = null;
        this.cstype = null;
    }


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterCurve_surface_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitCurve_surface_type(this);
		}
	}


}



class DegreeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_degree;
        this.u = null;
        this.v = null;
    }

	INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterDegree(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitDegree(this);
		}
	}


}



class Basis_matrixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_basis_matrix;
    }

	decimal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DecimalContext);
	    } else {
	        return this.getTypedRuleContext(DecimalContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterBasis_matrix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitBasis_matrix(this);
		}
	}


}



class StepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_step;
        this.u = null;
        this.v = null;
    }

	INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterStep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitStep(this);
		}
	}


}



class PointsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_points;
        this.v = null;
    }

	INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterPoints(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitPoints(this);
		}
	}


}



class LinesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_lines;
        this.v = null;
    }

	INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER, i);
	    }
	};


	INTEGER_PAIR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER_PAIR);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER_PAIR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterLines(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitLines(this);
		}
	}


}



class FacesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_faces;
        this.v = null;
    }

	INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER, i);
	    }
	};


	INTEGER_PAIR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER_PAIR);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER_PAIR, i);
	    }
	};


	INTEGER_TRIPLET = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER_TRIPLET);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER_TRIPLET, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterFaces(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitFaces(this);
		}
	}


}



class Free_form_surfaceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_free_form_surface;
    }

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	curve() {
	    return this.getTypedRuleContext(CurveContext,0);
	};

	curve2d() {
	    return this.getTypedRuleContext(Curve2dContext,0);
	};

	surface() {
	    return this.getTypedRuleContext(SurfaceContext,0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.NL);
	    } else {
	        return this.getToken(WavefrontOBJParser.NL, i);
	    }
	};


	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	outer_trimming_loop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Outer_trimming_loopContext);
	    } else {
	        return this.getTypedRuleContext(Outer_trimming_loopContext,i);
	    }
	};

	inner_trimming_loop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Inner_trimming_loopContext);
	    } else {
	        return this.getTypedRuleContext(Inner_trimming_loopContext,i);
	    }
	};

	special_curve = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Special_curveContext);
	    } else {
	        return this.getTypedRuleContext(Special_curveContext,i);
	    }
	};

	special_point = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Special_pointContext);
	    } else {
	        return this.getTypedRuleContext(Special_pointContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterFree_form_surface(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitFree_form_surface(this);
		}
	}


}



class CurveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_curve;
        this.u0 = null;
        this.u1 = null;
        this.v = null;
    }

	decimal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DecimalContext);
	    } else {
	        return this.getTypedRuleContext(DecimalContext,i);
	    }
	};

	INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterCurve(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitCurve(this);
		}
	}


}



class Curve2dContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_curve2d;
        this.vp1 = null;
        this.vp2 = null;
    }

	INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterCurve2d(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitCurve2d(this);
		}
	}


}



class SurfaceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_surface;
        this.s0 = null;
        this.s1 = null;
        this.t0 = null;
        this.t1 = null;
        this.v = null;
    }

	decimal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DecimalContext);
	    } else {
	        return this.getTypedRuleContext(DecimalContext,i);
	    }
	};

	INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER, i);
	    }
	};


	INTEGER_PAIR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER_PAIR);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER_PAIR, i);
	    }
	};


	INTEGER_TRIPLET = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER_TRIPLET);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER_TRIPLET, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterSurface(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitSurface(this);
		}
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_parameter;
        this.p = null;
    }

	decimal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DecimalContext);
	    } else {
	        return this.getTypedRuleContext(DecimalContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitParameter(this);
		}
	}


}



class Outer_trimming_loopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_outer_trimming_loop;
        this.u0 = null;
        this.u1 = null;
        this.curv2d = null;
    }

	decimal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DecimalContext);
	    } else {
	        return this.getTypedRuleContext(DecimalContext,i);
	    }
	};

	INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterOuter_trimming_loop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitOuter_trimming_loop(this);
		}
	}


}



class Inner_trimming_loopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_inner_trimming_loop;
        this.u0 = null;
        this.u1 = null;
        this.curv2d = null;
    }

	decimal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DecimalContext);
	    } else {
	        return this.getTypedRuleContext(DecimalContext,i);
	    }
	};

	INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterInner_trimming_loop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitInner_trimming_loop(this);
		}
	}


}



class Special_curveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_special_curve;
        this.u0 = null;
        this.u1 = null;
        this.curv2d = null;
    }

	decimal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DecimalContext);
	    } else {
	        return this.getTypedRuleContext(DecimalContext,i);
	    }
	};

	INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterSpecial_curve(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitSpecial_curve(this);
		}
	}


}



class Special_pointContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_special_point;
        this.vp = null;
    }

	INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterSpecial_point(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitSpecial_point(this);
		}
	}


}



class EndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_end;
    }


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterEnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitEnd(this);
		}
	}


}



class ConnectivityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_connectivity;
        this.surf_1 = null;
        this.q0_1 = null;
        this.q1_1 = null;
        this.curv2d_1 = null;
        this.surf_2 = null;
        this.q0_2 = null;
        this.q1_2 = null;
        this.curv2d_2 = null;
    }

	INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.INTEGER);
	    } else {
	        return this.getToken(WavefrontOBJParser.INTEGER, i);
	    }
	};


	decimal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DecimalContext);
	    } else {
	        return this.getTypedRuleContext(DecimalContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterConnectivity(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitConnectivity(this);
		}
	}


}



class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_group;
        this.group_name = null;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.NAME);
	    } else {
	        return this.getToken(WavefrontOBJParser.NAME, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitGroup(this);
		}
	}


}



class Smoothing_groupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_smoothing_group;
        this.group_number = null;
    }

	INTEGER() {
	    return this.getToken(WavefrontOBJParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterSmoothing_group(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitSmoothing_group(this);
		}
	}


}



class Merging_groupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_merging_group;
        this.group_number = null;
        this.res = null;
    }

	INTEGER() {
	    return this.getToken(WavefrontOBJParser.INTEGER, 0);
	};

	decimal() {
	    return this.getTypedRuleContext(DecimalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterMerging_group(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitMerging_group(this);
		}
	}


}



class Object_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_object_name;
        this.name = null;
    }

	NAME() {
	    return this.getToken(WavefrontOBJParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterObject_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitObject_name(this);
		}
	}


}



class BevelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_bevel;
    }


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterBevel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitBevel(this);
		}
	}


}



class Color_interpolationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_color_interpolation;
    }


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterColor_interpolation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitColor_interpolation(this);
		}
	}


}



class Dissolve_interpolationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_dissolve_interpolation;
    }


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterDissolve_interpolation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitDissolve_interpolation(this);
		}
	}


}



class Level_of_detailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_level_of_detail;
        this.level = null;
    }

	INTEGER() {
	    return this.getToken(WavefrontOBJParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterLevel_of_detail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitLevel_of_detail(this);
		}
	}


}



class Map_libraryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_map_library;
        this.filename = null;
    }

	FILENAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WavefrontOBJParser.FILENAME);
	    } else {
	        return this.getToken(WavefrontOBJParser.FILENAME, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterMap_library(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitMap_library(this);
		}
	}


}



class Use_mapContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_use_map;
        this.map_name = null;
    }

	NAME() {
	    return this.getToken(WavefrontOBJParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterUse_map(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitUse_map(this);
		}
	}


}



class Material_libraryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_material_library;
        this.filename = null;
    }

	FILENAME() {
	    return this.getToken(WavefrontOBJParser.FILENAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterMaterial_library(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitMaterial_library(this);
		}
	}


}



class Use_materialContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_use_material;
    }

	NAME() {
	    return this.getToken(WavefrontOBJParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterUse_material(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitUse_material(this);
		}
	}


}



class Shadow_objectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_shadow_object;
        this.filename = null;
    }

	FILENAME() {
	    return this.getToken(WavefrontOBJParser.FILENAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterShadow_object(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitShadow_object(this);
		}
	}


}



class Trace_objectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_trace_object;
        this.filename = null;
    }

	FILENAME() {
	    return this.getToken(WavefrontOBJParser.FILENAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterTrace_object(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitTrace_object(this);
		}
	}


}



class Curve_approximation_techniqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_curve_approximation_technique;
        this.res = null;
        this.maxlength = null;
        this.maxdist = null;
        this.maxangle = null;
    }

	decimal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DecimalContext);
	    } else {
	        return this.getTypedRuleContext(DecimalContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterCurve_approximation_technique(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitCurve_approximation_technique(this);
		}
	}


}



class Surface_approximation_techniqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_surface_approximation_technique;
        this.ures = null;
        this.vres = null;
        this.uvres = null;
        this.maxlength = null;
        this.maxdist = null;
        this.maxangle = null;
    }

	decimal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DecimalContext);
	    } else {
	        return this.getTypedRuleContext(DecimalContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterSurface_approximation_technique(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitSurface_approximation_technique(this);
		}
	}


}



class DecimalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WavefrontOBJParser.RULE_decimal;
    }

	DECIMAL() {
	    return this.getToken(WavefrontOBJParser.DECIMAL, 0);
	};

	INTEGER() {
	    return this.getToken(WavefrontOBJParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.enterDecimal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WavefrontOBJListener ) {
	        listener.exitDecimal(this);
		}
	}


}




WavefrontOBJParser.Start_Context = Start_Context; 
WavefrontOBJParser.StatementContext = StatementContext; 
WavefrontOBJParser.CallContext = CallContext; 
WavefrontOBJParser.CshContext = CshContext; 
WavefrontOBJParser.VertexContext = VertexContext; 
WavefrontOBJParser.Vertex_parameterContext = Vertex_parameterContext; 
WavefrontOBJParser.Vertex_normalContext = Vertex_normalContext; 
WavefrontOBJParser.Vertex_textureContext = Vertex_textureContext; 
WavefrontOBJParser.Curve_surface_typeContext = Curve_surface_typeContext; 
WavefrontOBJParser.DegreeContext = DegreeContext; 
WavefrontOBJParser.Basis_matrixContext = Basis_matrixContext; 
WavefrontOBJParser.StepContext = StepContext; 
WavefrontOBJParser.PointsContext = PointsContext; 
WavefrontOBJParser.LinesContext = LinesContext; 
WavefrontOBJParser.FacesContext = FacesContext; 
WavefrontOBJParser.Free_form_surfaceContext = Free_form_surfaceContext; 
WavefrontOBJParser.CurveContext = CurveContext; 
WavefrontOBJParser.Curve2dContext = Curve2dContext; 
WavefrontOBJParser.SurfaceContext = SurfaceContext; 
WavefrontOBJParser.ParameterContext = ParameterContext; 
WavefrontOBJParser.Outer_trimming_loopContext = Outer_trimming_loopContext; 
WavefrontOBJParser.Inner_trimming_loopContext = Inner_trimming_loopContext; 
WavefrontOBJParser.Special_curveContext = Special_curveContext; 
WavefrontOBJParser.Special_pointContext = Special_pointContext; 
WavefrontOBJParser.EndContext = EndContext; 
WavefrontOBJParser.ConnectivityContext = ConnectivityContext; 
WavefrontOBJParser.GroupContext = GroupContext; 
WavefrontOBJParser.Smoothing_groupContext = Smoothing_groupContext; 
WavefrontOBJParser.Merging_groupContext = Merging_groupContext; 
WavefrontOBJParser.Object_nameContext = Object_nameContext; 
WavefrontOBJParser.BevelContext = BevelContext; 
WavefrontOBJParser.Color_interpolationContext = Color_interpolationContext; 
WavefrontOBJParser.Dissolve_interpolationContext = Dissolve_interpolationContext; 
WavefrontOBJParser.Level_of_detailContext = Level_of_detailContext; 
WavefrontOBJParser.Map_libraryContext = Map_libraryContext; 
WavefrontOBJParser.Use_mapContext = Use_mapContext; 
WavefrontOBJParser.Material_libraryContext = Material_libraryContext; 
WavefrontOBJParser.Use_materialContext = Use_materialContext; 
WavefrontOBJParser.Shadow_objectContext = Shadow_objectContext; 
WavefrontOBJParser.Trace_objectContext = Trace_objectContext; 
WavefrontOBJParser.Curve_approximation_techniqueContext = Curve_approximation_techniqueContext; 
WavefrontOBJParser.Surface_approximation_techniqueContext = Surface_approximation_techniqueContext; 
WavefrontOBJParser.DecimalContext = DecimalContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
