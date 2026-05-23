// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/turing/turing.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import turingListener from './turingListener.js';
const serializedATN = [4,1,64,670,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,1,0,4,0,108,8,0,11,0,12,0,109,1,0,
1,0,1,1,1,1,1,1,3,1,117,8,1,1,2,1,2,1,2,3,2,122,8,2,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,3,3,133,8,3,1,3,1,3,1,3,3,3,138,8,3,1,4,1,4,1,4,1,4,1,4,
1,4,5,4,146,8,4,10,4,12,4,149,9,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,157,8,5,10,
5,12,5,160,9,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,169,8,5,10,5,12,5,172,9,5,
1,5,1,5,1,5,1,5,3,5,178,8,5,3,5,180,8,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,
1,7,1,7,3,7,192,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,202,8,8,3,8,204,
8,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,5,10,214,8,10,10,10,12,10,217,9,
10,1,10,1,10,1,10,1,11,1,11,3,11,224,8,11,1,12,1,12,1,12,1,12,5,12,230,8,
12,10,12,12,12,233,9,12,1,12,1,12,1,12,1,12,1,12,5,12,240,8,12,10,12,12,
12,243,9,12,1,12,1,12,1,12,5,12,248,8,12,10,12,12,12,251,9,12,1,12,1,12,
1,12,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,5,15,267,8,15,
10,15,12,15,270,9,15,1,15,1,15,3,15,274,8,15,1,15,1,15,1,15,1,15,1,15,1,
15,5,15,282,8,15,10,15,12,15,285,9,15,1,15,1,15,3,15,289,8,15,1,15,1,15,
1,15,1,16,3,16,295,8,16,1,16,1,16,1,16,5,16,300,8,16,10,16,12,16,303,9,16,
1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
17,1,17,1,17,1,17,5,17,323,8,17,10,17,12,17,326,9,17,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,5,17,340,8,17,10,17,12,17,343,9,
17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,351,8,17,1,18,1,18,1,18,1,18,1,19,
5,19,358,8,19,10,19,12,19,361,9,19,1,20,1,20,3,20,365,8,20,1,21,1,21,1,21,
1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,381,8,21,1,21,
1,21,1,21,1,21,1,21,1,21,3,21,389,8,21,1,22,1,22,1,23,1,23,1,23,1,23,1,23,
1,23,1,23,1,23,1,23,5,23,402,8,23,10,23,12,23,405,9,23,1,23,1,23,3,23,409,
8,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,
25,1,25,5,25,426,8,25,10,25,12,25,429,9,25,1,25,1,25,1,25,1,25,1,25,1,25,
5,25,437,8,25,10,25,12,25,440,9,25,1,25,1,25,1,25,5,25,445,8,25,10,25,12,
25,448,9,25,1,25,1,25,1,25,3,25,453,8,25,1,25,1,25,1,25,1,26,1,26,1,26,1,
26,1,26,1,26,1,26,1,26,3,26,466,8,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,
1,26,1,26,1,26,1,26,1,26,1,26,3,26,481,8,26,1,26,1,26,1,26,1,26,3,26,487,
8,26,1,27,1,27,1,27,1,27,1,27,3,27,494,8,27,1,27,1,27,1,27,5,27,499,8,27,
10,27,12,27,502,9,27,1,27,3,27,505,8,27,1,28,1,28,1,28,1,28,1,28,1,28,1,
28,3,28,514,8,28,3,28,516,8,28,3,28,518,8,28,1,28,3,28,521,8,28,1,29,1,29,
1,29,1,29,1,29,3,29,528,8,29,1,29,1,29,1,29,5,29,533,8,29,10,29,12,29,536,
9,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,548,8,30,1,31,
1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,5,31,559,8,31,10,31,12,31,562,9,
31,1,32,1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,37,1,37,
1,38,1,38,1,39,1,39,1,40,1,40,1,40,1,41,1,41,1,41,3,41,588,8,41,1,42,1,42,
1,42,1,42,5,42,594,8,42,10,42,12,42,597,9,42,1,42,1,42,1,42,1,42,3,42,603,
8,42,1,43,1,43,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,
45,1,45,3,45,620,8,45,1,45,1,45,1,45,1,45,5,45,626,8,45,10,45,12,45,629,
9,45,1,46,1,46,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
48,1,48,1,48,1,48,1,48,1,48,3,48,650,8,48,1,49,1,49,1,50,1,50,1,50,1,50,
1,50,3,50,659,8,50,1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,0,1,
90,53,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,
96,98,100,102,104,0,3,2,0,36,36,38,38,2,0,42,43,59,61,2,0,44,45,58,58,710,
0,107,1,0,0,0,2,116,1,0,0,0,4,121,1,0,0,0,6,137,1,0,0,0,8,139,1,0,0,0,10,
179,1,0,0,0,12,181,1,0,0,0,14,191,1,0,0,0,16,203,1,0,0,0,18,205,1,0,0,0,
20,209,1,0,0,0,22,223,1,0,0,0,24,225,1,0,0,0,26,255,1,0,0,0,28,257,1,0,0,
0,30,260,1,0,0,0,32,294,1,0,0,0,34,350,1,0,0,0,36,352,1,0,0,0,38,359,1,0,
0,0,40,364,1,0,0,0,42,388,1,0,0,0,44,390,1,0,0,0,46,392,1,0,0,0,48,413,1,
0,0,0,50,418,1,0,0,0,52,486,1,0,0,0,54,488,1,0,0,0,56,520,1,0,0,0,58,522,
1,0,0,0,60,547,1,0,0,0,62,549,1,0,0,0,64,563,1,0,0,0,66,565,1,0,0,0,68,569,
1,0,0,0,70,571,1,0,0,0,72,573,1,0,0,0,74,575,1,0,0,0,76,577,1,0,0,0,78,579,
1,0,0,0,80,581,1,0,0,0,82,587,1,0,0,0,84,602,1,0,0,0,86,604,1,0,0,0,88,606,
1,0,0,0,90,619,1,0,0,0,92,630,1,0,0,0,94,632,1,0,0,0,96,649,1,0,0,0,98,651,
1,0,0,0,100,653,1,0,0,0,102,662,1,0,0,0,104,667,1,0,0,0,106,108,3,2,1,0,
107,106,1,0,0,0,108,109,1,0,0,0,109,107,1,0,0,0,109,110,1,0,0,0,110,111,
1,0,0,0,111,112,5,0,0,1,112,1,1,0,0,0,113,117,3,4,2,0,114,117,3,42,21,0,
115,117,3,28,14,0,116,113,1,0,0,0,116,114,1,0,0,0,116,115,1,0,0,0,117,3,
1,0,0,0,118,122,3,6,3,0,119,122,3,10,5,0,120,122,3,12,6,0,121,118,1,0,0,
0,121,119,1,0,0,0,121,120,1,0,0,0,122,5,1,0,0,0,123,124,5,1,0,0,124,125,
3,104,52,0,125,126,5,2,0,0,126,127,3,90,45,0,127,138,1,0,0,0,128,129,5,1,
0,0,129,132,3,104,52,0,130,131,5,3,0,0,131,133,3,14,7,0,132,130,1,0,0,0,
132,133,1,0,0,0,133,134,1,0,0,0,134,135,5,2,0,0,135,136,3,8,4,0,136,138,
1,0,0,0,137,123,1,0,0,0,137,128,1,0,0,0,138,7,1,0,0,0,139,140,3,90,45,0,
140,141,5,4,0,0,141,142,5,5,0,0,142,147,3,8,4,0,143,144,5,6,0,0,144,146,
3,8,4,0,145,143,1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,
148,150,1,0,0,0,149,147,1,0,0,0,150,151,5,7,0,0,151,9,1,0,0,0,152,153,5,
8,0,0,153,158,3,104,52,0,154,155,5,6,0,0,155,157,3,104,52,0,156,154,1,0,
0,0,157,160,1,0,0,0,158,156,1,0,0,0,158,159,1,0,0,0,159,161,1,0,0,0,160,
158,1,0,0,0,161,162,5,2,0,0,162,163,3,90,45,0,163,180,1,0,0,0,164,165,5,
8,0,0,165,170,3,104,52,0,166,167,5,6,0,0,167,169,3,104,52,0,168,166,1,0,
0,0,169,172,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,173,1,0,0,0,172,
170,1,0,0,0,173,174,5,3,0,0,174,177,3,14,7,0,175,176,5,2,0,0,176,178,3,8,
4,0,177,175,1,0,0,0,177,178,1,0,0,0,178,180,1,0,0,0,179,152,1,0,0,0,179,
164,1,0,0,0,180,11,1,0,0,0,181,182,5,9,0,0,182,183,3,104,52,0,183,184,5,
3,0,0,184,185,3,14,7,0,185,13,1,0,0,0,186,192,3,16,8,0,187,192,3,18,9,0,
188,192,3,20,10,0,189,192,3,24,12,0,190,192,3,26,13,0,191,186,1,0,0,0,191,
187,1,0,0,0,191,188,1,0,0,0,191,189,1,0,0,0,191,190,1,0,0,0,192,15,1,0,0,
0,193,204,5,10,0,0,194,204,5,11,0,0,195,204,5,12,0,0,196,201,5,13,0,0,197,
198,5,4,0,0,198,199,3,88,44,0,199,200,5,7,0,0,200,202,1,0,0,0,201,197,1,
0,0,0,201,202,1,0,0,0,202,204,1,0,0,0,203,193,1,0,0,0,203,194,1,0,0,0,203,
195,1,0,0,0,203,196,1,0,0,0,204,17,1,0,0,0,205,206,3,88,44,0,206,207,5,14,
0,0,207,208,3,90,45,0,208,19,1,0,0,0,209,210,5,15,0,0,210,215,3,22,11,0,
211,212,5,6,0,0,212,214,3,22,11,0,213,211,1,0,0,0,214,217,1,0,0,0,215,213,
1,0,0,0,215,216,1,0,0,0,216,218,1,0,0,0,217,215,1,0,0,0,218,219,5,16,0,0,
219,220,3,14,7,0,220,21,1,0,0,0,221,224,3,18,9,0,222,224,3,26,13,0,223,221,
1,0,0,0,223,222,1,0,0,0,224,23,1,0,0,0,225,226,5,17,0,0,226,231,3,104,52,
0,227,228,5,6,0,0,228,230,3,104,52,0,229,227,1,0,0,0,230,233,1,0,0,0,231,
229,1,0,0,0,231,232,1,0,0,0,232,234,1,0,0,0,233,231,1,0,0,0,234,235,5,3,
0,0,235,249,3,14,7,0,236,241,3,104,52,0,237,238,5,6,0,0,238,240,3,104,52,
0,239,237,1,0,0,0,240,243,1,0,0,0,241,239,1,0,0,0,241,242,1,0,0,0,242,244,
1,0,0,0,243,241,1,0,0,0,244,245,5,3,0,0,245,246,3,14,7,0,246,248,1,0,0,0,
247,236,1,0,0,0,248,251,1,0,0,0,249,247,1,0,0,0,249,250,1,0,0,0,250,252,
1,0,0,0,251,249,1,0,0,0,252,253,5,18,0,0,253,254,5,17,0,0,254,25,1,0,0,0,
255,256,3,104,52,0,256,27,1,0,0,0,257,258,3,30,15,0,258,259,3,36,18,0,259,
29,1,0,0,0,260,261,5,19,0,0,261,273,3,104,52,0,262,263,5,4,0,0,263,268,3,
32,16,0,264,265,5,6,0,0,265,267,3,32,16,0,266,264,1,0,0,0,267,270,1,0,0,
0,268,266,1,0,0,0,268,269,1,0,0,0,269,271,1,0,0,0,270,268,1,0,0,0,271,272,
5,7,0,0,272,274,1,0,0,0,273,262,1,0,0,0,273,274,1,0,0,0,274,275,1,0,0,0,
275,276,5,20,0,0,276,288,3,104,52,0,277,278,5,4,0,0,278,283,3,32,16,0,279,
280,5,6,0,0,280,282,3,32,16,0,281,279,1,0,0,0,282,285,1,0,0,0,283,281,1,
0,0,0,283,284,1,0,0,0,284,286,1,0,0,0,285,283,1,0,0,0,286,287,5,7,0,0,287,
289,1,0,0,0,288,277,1,0,0,0,288,289,1,0,0,0,289,290,1,0,0,0,290,291,5,3,
0,0,291,292,3,14,7,0,292,31,1,0,0,0,293,295,5,8,0,0,294,293,1,0,0,0,294,
295,1,0,0,0,295,296,1,0,0,0,296,301,3,104,52,0,297,298,5,6,0,0,298,300,3,
104,52,0,299,297,1,0,0,0,300,303,1,0,0,0,301,299,1,0,0,0,301,302,1,0,0,0,
302,304,1,0,0,0,303,301,1,0,0,0,304,305,5,3,0,0,305,306,3,34,17,0,306,33,
1,0,0,0,307,308,5,3,0,0,308,351,3,14,7,0,309,310,5,13,0,0,310,311,5,4,0,
0,311,312,5,21,0,0,312,351,5,7,0,0,313,314,5,15,0,0,314,315,3,88,44,0,315,
316,5,14,0,0,316,324,5,21,0,0,317,318,5,6,0,0,318,319,3,88,44,0,319,320,
5,14,0,0,320,321,5,21,0,0,321,323,1,0,0,0,322,317,1,0,0,0,323,326,1,0,0,
0,324,322,1,0,0,0,324,325,1,0,0,0,325,327,1,0,0,0,326,324,1,0,0,0,327,328,
5,16,0,0,328,329,3,14,7,0,329,351,1,0,0,0,330,331,5,15,0,0,331,332,3,88,
44,0,332,333,5,14,0,0,333,341,5,21,0,0,334,335,5,6,0,0,335,336,3,88,44,0,
336,337,5,14,0,0,337,338,5,21,0,0,338,340,1,0,0,0,339,334,1,0,0,0,340,343,
1,0,0,0,341,339,1,0,0,0,341,342,1,0,0,0,342,344,1,0,0,0,343,341,1,0,0,0,
344,345,5,16,0,0,345,346,3,92,46,0,346,347,5,4,0,0,347,348,5,21,0,0,348,
349,5,7,0,0,349,351,1,0,0,0,350,307,1,0,0,0,350,309,1,0,0,0,350,313,1,0,
0,0,350,330,1,0,0,0,351,35,1,0,0,0,352,353,3,38,19,0,353,354,5,18,0,0,354,
355,3,104,52,0,355,37,1,0,0,0,356,358,3,40,20,0,357,356,1,0,0,0,358,361,
1,0,0,0,359,357,1,0,0,0,359,360,1,0,0,0,360,39,1,0,0,0,361,359,1,0,0,0,362,
365,3,4,2,0,363,365,3,42,21,0,364,362,1,0,0,0,364,363,1,0,0,0,365,41,1,0,
0,0,366,367,3,78,39,0,367,368,5,2,0,0,368,369,3,90,45,0,369,389,1,0,0,0,
370,389,3,44,22,0,371,372,5,22,0,0,372,389,3,86,43,0,373,374,5,23,0,0,374,
389,3,90,45,0,375,389,3,46,23,0,376,389,3,48,24,0,377,380,5,24,0,0,378,379,
5,25,0,0,379,381,3,86,43,0,380,378,1,0,0,0,380,381,1,0,0,0,381,389,1,0,0,
0,382,389,3,50,25,0,383,389,3,52,26,0,384,389,3,54,27,0,385,389,3,58,29,
0,386,389,3,62,31,0,387,389,3,66,33,0,388,366,1,0,0,0,388,370,1,0,0,0,388,
371,1,0,0,0,388,373,1,0,0,0,388,375,1,0,0,0,388,376,1,0,0,0,388,377,1,0,
0,0,388,382,1,0,0,0,388,383,1,0,0,0,388,384,1,0,0,0,388,385,1,0,0,0,388,
386,1,0,0,0,388,387,1,0,0,0,389,43,1,0,0,0,390,391,3,80,40,0,391,45,1,0,
0,0,392,393,5,26,0,0,393,394,3,86,43,0,394,395,5,27,0,0,395,403,3,38,19,
0,396,397,5,28,0,0,397,398,3,86,43,0,398,399,5,27,0,0,399,400,3,38,19,0,
400,402,1,0,0,0,401,396,1,0,0,0,402,405,1,0,0,0,403,401,1,0,0,0,403,404,
1,0,0,0,404,408,1,0,0,0,405,403,1,0,0,0,406,407,5,29,0,0,407,409,3,38,19,
0,408,406,1,0,0,0,408,409,1,0,0,0,409,410,1,0,0,0,410,411,5,18,0,0,411,412,
5,26,0,0,412,47,1,0,0,0,413,414,5,30,0,0,414,415,3,38,19,0,415,416,5,18,
0,0,416,417,5,30,0,0,417,49,1,0,0,0,418,419,5,31,0,0,419,420,3,90,45,0,420,
421,5,16,0,0,421,422,5,32,0,0,422,427,3,88,44,0,423,424,5,6,0,0,424,426,
3,88,44,0,425,423,1,0,0,0,426,429,1,0,0,0,427,425,1,0,0,0,427,428,1,0,0,
0,428,430,1,0,0,0,429,427,1,0,0,0,430,431,5,3,0,0,431,446,3,38,19,0,432,
433,5,32,0,0,433,438,3,88,44,0,434,435,5,6,0,0,435,437,3,88,44,0,436,434,
1,0,0,0,437,440,1,0,0,0,438,436,1,0,0,0,438,439,1,0,0,0,439,441,1,0,0,0,
440,438,1,0,0,0,441,442,5,3,0,0,442,443,3,38,19,0,443,445,1,0,0,0,444,432,
1,0,0,0,445,448,1,0,0,0,446,444,1,0,0,0,446,447,1,0,0,0,447,452,1,0,0,0,
448,446,1,0,0,0,449,450,5,32,0,0,450,451,5,3,0,0,451,453,3,38,19,0,452,449,
1,0,0,0,452,453,1,0,0,0,453,454,1,0,0,0,454,455,5,18,0,0,455,456,5,31,0,
0,456,51,1,0,0,0,457,458,5,33,0,0,458,459,3,104,52,0,459,460,5,3,0,0,460,
461,3,90,45,0,461,462,5,14,0,0,462,465,3,90,45,0,463,464,5,34,0,0,464,466,
3,90,45,0,465,463,1,0,0,0,465,466,1,0,0,0,466,467,1,0,0,0,467,468,3,38,19,
0,468,469,5,18,0,0,469,470,5,33,0,0,470,487,1,0,0,0,471,472,5,33,0,0,472,
473,5,35,0,0,473,474,3,104,52,0,474,475,5,3,0,0,475,476,3,90,45,0,476,477,
5,14,0,0,477,480,3,90,45,0,478,479,5,34,0,0,479,481,3,90,45,0,480,478,1,
0,0,0,480,481,1,0,0,0,481,482,1,0,0,0,482,483,3,38,19,0,483,484,5,18,0,0,
484,485,5,33,0,0,485,487,1,0,0,0,486,457,1,0,0,0,486,471,1,0,0,0,487,53,
1,0,0,0,488,493,5,36,0,0,489,490,5,3,0,0,490,491,3,68,34,0,491,492,5,6,0,
0,492,494,1,0,0,0,493,489,1,0,0,0,493,494,1,0,0,0,494,495,1,0,0,0,495,500,
3,56,28,0,496,497,5,6,0,0,497,499,3,56,28,0,498,496,1,0,0,0,499,502,1,0,
0,0,500,498,1,0,0,0,500,501,1,0,0,0,501,504,1,0,0,0,502,500,1,0,0,0,503,
505,5,14,0,0,504,503,1,0,0,0,504,505,1,0,0,0,505,55,1,0,0,0,506,517,3,90,
45,0,507,508,5,3,0,0,508,515,3,70,35,0,509,510,5,3,0,0,510,513,3,72,36,0,
511,512,5,3,0,0,512,514,3,74,37,0,513,511,1,0,0,0,513,514,1,0,0,0,514,516,
1,0,0,0,515,509,1,0,0,0,515,516,1,0,0,0,516,518,1,0,0,0,517,507,1,0,0,0,
517,518,1,0,0,0,518,521,1,0,0,0,519,521,5,37,0,0,520,506,1,0,0,0,520,519,
1,0,0,0,521,57,1,0,0,0,522,527,5,38,0,0,523,524,5,3,0,0,524,525,3,68,34,
0,525,526,5,6,0,0,526,528,1,0,0,0,527,523,1,0,0,0,527,528,1,0,0,0,528,529,
1,0,0,0,529,534,3,60,30,0,530,531,5,6,0,0,531,533,3,60,30,0,532,530,1,0,
0,0,533,536,1,0,0,0,534,532,1,0,0,0,534,535,1,0,0,0,535,59,1,0,0,0,536,534,
1,0,0,0,537,548,3,78,39,0,538,539,5,37,0,0,539,540,3,78,39,0,540,541,5,3,
0,0,541,542,5,21,0,0,542,548,1,0,0,0,543,544,3,78,39,0,544,545,5,3,0,0,545,
546,3,70,35,0,546,548,1,0,0,0,547,537,1,0,0,0,547,538,1,0,0,0,547,543,1,
0,0,0,548,61,1,0,0,0,549,550,5,39,0,0,550,551,5,3,0,0,551,552,3,76,38,0,
552,553,5,6,0,0,553,554,3,92,46,0,554,555,5,6,0,0,555,560,3,64,32,0,556,
557,5,6,0,0,557,559,3,64,32,0,558,556,1,0,0,0,559,562,1,0,0,0,560,558,1,
0,0,0,560,561,1,0,0,0,561,63,1,0,0,0,562,560,1,0,0,0,563,564,7,0,0,0,564,
65,1,0,0,0,565,566,5,40,0,0,566,567,5,3,0,0,567,568,3,76,38,0,568,67,1,0,
0,0,569,570,3,90,45,0,570,69,1,0,0,0,571,572,3,90,45,0,572,71,1,0,0,0,573,
574,3,90,45,0,574,73,1,0,0,0,575,576,3,90,45,0,576,75,1,0,0,0,577,578,3,
90,45,0,578,77,1,0,0,0,579,580,3,80,40,0,580,79,1,0,0,0,581,582,3,104,52,
0,582,583,3,82,41,0,583,81,1,0,0,0,584,585,3,84,42,0,585,586,3,82,41,0,586,
588,1,0,0,0,587,584,1,0,0,0,587,588,1,0,0,0,588,83,1,0,0,0,589,590,5,4,0,
0,590,595,3,90,45,0,591,592,5,6,0,0,592,594,3,90,45,0,593,591,1,0,0,0,594,
597,1,0,0,0,595,593,1,0,0,0,595,596,1,0,0,0,596,598,1,0,0,0,597,595,1,0,
0,0,598,599,5,7,0,0,599,603,1,0,0,0,600,601,5,41,0,0,601,603,3,104,52,0,
602,589,1,0,0,0,602,600,1,0,0,0,603,85,1,0,0,0,604,605,3,90,45,0,605,87,
1,0,0,0,606,607,3,90,45,0,607,89,1,0,0,0,608,609,6,45,-1,0,609,620,3,80,
40,0,610,620,3,94,47,0,611,620,3,100,50,0,612,613,3,98,49,0,613,614,3,90,
45,2,614,620,1,0,0,0,615,616,5,4,0,0,616,617,3,90,45,0,617,618,5,7,0,0,618,
620,1,0,0,0,619,608,1,0,0,0,619,610,1,0,0,0,619,611,1,0,0,0,619,612,1,0,
0,0,619,615,1,0,0,0,620,627,1,0,0,0,621,622,10,3,0,0,622,623,3,96,48,0,623,
624,3,90,45,4,624,626,1,0,0,0,625,621,1,0,0,0,626,629,1,0,0,0,627,625,1,
0,0,0,627,628,1,0,0,0,628,91,1,0,0,0,629,627,1,0,0,0,630,631,5,61,0,0,631,
93,1,0,0,0,632,633,7,1,0,0,633,95,1,0,0,0,634,650,5,44,0,0,635,650,5,45,
0,0,636,650,5,21,0,0,637,638,5,46,0,0,638,650,5,47,0,0,639,650,5,48,0,0,
640,650,5,49,0,0,641,650,5,50,0,0,642,650,5,51,0,0,643,650,5,52,0,0,644,
650,5,53,0,0,645,650,5,54,0,0,646,650,5,55,0,0,647,650,5,56,0,0,648,650,
5,57,0,0,649,634,1,0,0,0,649,635,1,0,0,0,649,636,1,0,0,0,649,637,1,0,0,0,
649,639,1,0,0,0,649,640,1,0,0,0,649,641,1,0,0,0,649,642,1,0,0,0,649,643,
1,0,0,0,649,644,1,0,0,0,649,645,1,0,0,0,649,646,1,0,0,0,649,647,1,0,0,0,
649,648,1,0,0,0,650,97,1,0,0,0,651,652,7,2,0,0,652,99,1,0,0,0,653,654,3,
80,40,0,654,655,5,4,0,0,655,658,3,102,51,0,656,657,5,14,0,0,657,659,3,102,
51,0,658,656,1,0,0,0,658,659,1,0,0,0,659,660,1,0,0,0,660,661,5,7,0,0,661,
101,1,0,0,0,662,663,3,90,45,0,663,664,5,21,0,0,664,665,5,45,0,0,665,666,
3,90,45,0,666,103,1,0,0,0,667,668,5,62,0,0,668,105,1,0,0,0,58,109,116,121,
132,137,147,158,170,177,179,191,201,203,215,223,231,241,249,268,273,283,
288,294,301,324,341,350,359,364,380,388,403,408,427,438,446,452,465,480,
486,493,500,504,513,515,517,520,527,534,547,560,587,595,602,619,627,649,
658];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class turingParser extends antlr4.Parser {

    static grammarFileName = "turing.g4";
    static literalNames = [ null, "'const'", "':='", "':'", "'('", "'init'", 
                            "','", "')'", "'var'", "'type'", "'int'", "'real'", 
                            "'boolean'", "'string'", "'..'", "'array'", 
                            "'of'", "'record'", "'end'", "'procedure'", 
                            "'function'", "'*'", "'assert'", "'result'", 
                            "'exit'", "'when'", "'if'", "'then'", "'elsif'", 
                            "'else'", "'loop'", "'case'", "'label'", "'for'", 
                            "'by'", "'decreasing'", "'put'", "'skip'", "'get'", 
                            "'open'", "'close'", "'.'", "'true'", "'false'", 
                            "'+'", "'\\u2013'", "'/'", "'div'", "'mod'", 
                            "'**'", "'<'", "'>'", "'='", "'<='", "'>='", 
                            "'not='", "'and'", "'or'", "'not'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "ExplicitUnsignedIntegerConstant", 
                             "ExplicitUnsignedRealConstant", "ExplicitStringConstant", 
                             "IDENTIFIER", "COMMENT", "WS" ];
    static ruleNames = [ "program", "declarationOrStatementInMainProgram", 
                         "declaration", "constantDeclaration", "initializingValue", 
                         "variableDeclaration", "typeDeclaration", "typeSpec", 
                         "standardType", "subrangeType", "arrayType", "indexType", 
                         "recordType", "namedType", "subprogramDeclaration", 
                         "subprogramHeader", "parameterDeclaration", "parameterType", 
                         "subprogramBody", "declarationsAndStatements", 
                         "declarationOrStatement", "statement", "procedureCall", 
                         "ifStatement", "loopStatement", "caseStatement", 
                         "forStatement", "putStatement", "putItem", "getStatement", 
                         "getItem", "openStatement", "capability", "closeStatement", 
                         "streamNumber", "widthExpn", "fractionWidth", "exponentWidth", 
                         "fileNumber", "variableReference", "reference", 
                         "reference_2", "componentSelector", "booleanExpn", 
                         "compileTimeExpn", "expn", "string", "explicitConstant", 
                         "infixOperator", "prefixOperator", "substring", 
                         "substringPosition", "id_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = turingParser.ruleNames;
        this.literalNames = turingParser.literalNames;
        this.symbolicNames = turingParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 45:
    	    		return this.expn_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expn_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, turingParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 106;
	            this.declarationOrStatementInMainProgram();
	            this.state = 109; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3318219522) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 536871145) !== 0));
	        this.state = 111;
	        this.match(turingParser.EOF);
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



	declarationOrStatementInMainProgram() {
	    let localctx = new DeclarationOrStatementInMainProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, turingParser.RULE_declarationOrStatementInMainProgram);
	    try {
	        this.state = 116;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 8:
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 113;
	            this.declaration();
	            break;
	        case 22:
	        case 23:
	        case 24:
	        case 26:
	        case 30:
	        case 31:
	        case 33:
	        case 36:
	        case 38:
	        case 39:
	        case 40:
	        case 62:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 114;
	            this.statement();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 115;
	            this.subprogramDeclaration();
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



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, turingParser.RULE_declaration);
	    try {
	        this.state = 121;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 118;
	            this.constantDeclaration();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 119;
	            this.variableDeclaration();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 120;
	            this.typeDeclaration();
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



	constantDeclaration() {
	    let localctx = new ConstantDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, turingParser.RULE_constantDeclaration);
	    var _la = 0;
	    try {
	        this.state = 137;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 123;
	            this.match(turingParser.T__0);
	            this.state = 124;
	            this.id_();
	            this.state = 125;
	            this.match(turingParser.T__1);
	            this.state = 126;
	            this.expn(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 128;
	            this.match(turingParser.T__0);
	            this.state = 129;
	            this.id_();
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===3) {
	                this.state = 130;
	                this.match(turingParser.T__2);
	                this.state = 131;
	                this.typeSpec();
	            }

	            this.state = 134;
	            this.match(turingParser.T__1);
	            this.state = 135;
	            this.initializingValue();
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



	initializingValue() {
	    let localctx = new InitializingValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, turingParser.RULE_initializingValue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.expn(0);
	        this.state = 140;
	        this.match(turingParser.T__3);
	        this.state = 141;
	        this.match(turingParser.T__4);

	        this.state = 142;
	        this.initializingValue();
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 143;
	            this.match(turingParser.T__5);
	            this.state = 144;
	            this.initializingValue();
	            this.state = 149;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 150;
	        this.match(turingParser.T__6);
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
	    this.enterRule(localctx, 10, turingParser.RULE_variableDeclaration);
	    var _la = 0;
	    try {
	        this.state = 179;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 152;
	            this.match(turingParser.T__7);
	            this.state = 153;
	            this.id_();
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 154;
	                this.match(turingParser.T__5);
	                this.state = 155;
	                this.id_();
	                this.state = 160;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 161;
	            this.match(turingParser.T__1);
	            this.state = 162;
	            this.expn(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 164;
	            this.match(turingParser.T__7);
	            this.state = 165;
	            this.id_();
	            this.state = 170;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 166;
	                this.match(turingParser.T__5);
	                this.state = 167;
	                this.id_();
	                this.state = 172;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 173;
	            this.match(turingParser.T__2);
	            this.state = 174;
	            this.typeSpec();
	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 175;
	                this.match(turingParser.T__1);
	                this.state = 176;
	                this.initializingValue();
	            }

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



	typeDeclaration() {
	    let localctx = new TypeDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, turingParser.RULE_typeDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this.match(turingParser.T__8);
	        this.state = 182;
	        this.id_();
	        this.state = 183;
	        this.match(turingParser.T__2);
	        this.state = 184;
	        this.typeSpec();
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



	typeSpec() {
	    let localctx = new TypeSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, turingParser.RULE_typeSpec);
	    try {
	        this.state = 191;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 186;
	            this.standardType();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 187;
	            this.subrangeType();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 188;
	            this.arrayType();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 189;
	            this.recordType();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 190;
	            this.namedType();
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



	standardType() {
	    let localctx = new StandardTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, turingParser.RULE_standardType);
	    var _la = 0;
	    try {
	        this.state = 203;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 193;
	            this.match(turingParser.T__9);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 194;
	            this.match(turingParser.T__10);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 195;
	            this.match(turingParser.T__11);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 196;
	            this.match(turingParser.T__12);
	            this.state = 201;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 197;
	                this.match(turingParser.T__3);
	                this.state = 198;
	                this.compileTimeExpn();
	                this.state = 199;
	                this.match(turingParser.T__6);
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



	subrangeType() {
	    let localctx = new SubrangeTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, turingParser.RULE_subrangeType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.compileTimeExpn();
	        this.state = 206;
	        this.match(turingParser.T__13);
	        this.state = 207;
	        this.expn(0);
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



	arrayType() {
	    let localctx = new ArrayTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, turingParser.RULE_arrayType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.match(turingParser.T__14);
	        this.state = 210;
	        this.indexType();
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 211;
	            this.match(turingParser.T__5);
	            this.state = 212;
	            this.indexType();
	            this.state = 217;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 218;
	        this.match(turingParser.T__15);
	        this.state = 219;
	        this.typeSpec();
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



	indexType() {
	    let localctx = new IndexTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, turingParser.RULE_indexType);
	    try {
	        this.state = 223;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 221;
	            this.subrangeType();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 222;
	            this.namedType();
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



	recordType() {
	    let localctx = new RecordTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, turingParser.RULE_recordType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.match(turingParser.T__16);
	        this.state = 226;
	        this.id_();
	        this.state = 231;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 227;
	            this.match(turingParser.T__5);
	            this.state = 228;
	            this.id_();
	            this.state = 233;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 234;
	        this.match(turingParser.T__2);
	        this.state = 235;
	        this.typeSpec();
	        this.state = 249;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===62) {
	            this.state = 236;
	            this.id_();
	            this.state = 241;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 237;
	                this.match(turingParser.T__5);
	                this.state = 238;
	                this.id_();
	                this.state = 243;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 244;
	            this.match(turingParser.T__2);
	            this.state = 245;
	            this.typeSpec();
	            this.state = 251;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 252;
	        this.match(turingParser.T__17);
	        this.state = 253;
	        this.match(turingParser.T__16);
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



	namedType() {
	    let localctx = new NamedTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, turingParser.RULE_namedType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 255;
	        this.id_();
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



	subprogramDeclaration() {
	    let localctx = new SubprogramDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, turingParser.RULE_subprogramDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.subprogramHeader();
	        this.state = 258;
	        this.subprogramBody();
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



	subprogramHeader() {
	    let localctx = new SubprogramHeaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, turingParser.RULE_subprogramHeader);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(turingParser.T__18);
	        this.state = 261;
	        this.id_();
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 262;
	            this.match(turingParser.T__3);
	            this.state = 263;
	            this.parameterDeclaration();
	            this.state = 268;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 264;
	                this.match(turingParser.T__5);
	                this.state = 265;
	                this.parameterDeclaration();
	                this.state = 270;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 271;
	            this.match(turingParser.T__6);
	        }

	        this.state = 275;
	        this.match(turingParser.T__19);
	        this.state = 276;
	        this.id_();
	        this.state = 288;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 277;
	            this.match(turingParser.T__3);
	            this.state = 278;
	            this.parameterDeclaration();
	            this.state = 283;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 279;
	                this.match(turingParser.T__5);
	                this.state = 280;
	                this.parameterDeclaration();
	                this.state = 285;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 286;
	            this.match(turingParser.T__6);
	        }

	        this.state = 290;
	        this.match(turingParser.T__2);
	        this.state = 291;
	        this.typeSpec();
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



	parameterDeclaration() {
	    let localctx = new ParameterDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, turingParser.RULE_parameterDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 293;
	            this.match(turingParser.T__7);
	        }

	        this.state = 296;
	        this.id_();
	        this.state = 301;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 297;
	            this.match(turingParser.T__5);
	            this.state = 298;
	            this.id_();
	            this.state = 303;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 304;
	        this.match(turingParser.T__2);
	        this.state = 305;
	        this.parameterType();
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



	parameterType() {
	    let localctx = new ParameterTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, turingParser.RULE_parameterType);
	    var _la = 0;
	    try {
	        this.state = 350;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 307;
	            this.match(turingParser.T__2);
	            this.state = 308;
	            this.typeSpec();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 309;
	            this.match(turingParser.T__12);
	            this.state = 310;
	            this.match(turingParser.T__3);
	            this.state = 311;
	            this.match(turingParser.T__20);
	            this.state = 312;
	            this.match(turingParser.T__6);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 313;
	            this.match(turingParser.T__14);
	            this.state = 314;
	            this.compileTimeExpn();
	            this.state = 315;
	            this.match(turingParser.T__13);
	            this.state = 316;
	            this.match(turingParser.T__20);
	            this.state = 324;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 317;
	                this.match(turingParser.T__5);
	                this.state = 318;
	                this.compileTimeExpn();
	                this.state = 319;
	                this.match(turingParser.T__13);
	                this.state = 320;
	                this.match(turingParser.T__20);
	                this.state = 326;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 327;
	            this.match(turingParser.T__15);
	            this.state = 328;
	            this.typeSpec();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 330;
	            this.match(turingParser.T__14);
	            this.state = 331;
	            this.compileTimeExpn();
	            this.state = 332;
	            this.match(turingParser.T__13);
	            this.state = 333;
	            this.match(turingParser.T__20);
	            this.state = 341;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 334;
	                this.match(turingParser.T__5);
	                this.state = 335;
	                this.compileTimeExpn();
	                this.state = 336;
	                this.match(turingParser.T__13);
	                this.state = 337;
	                this.match(turingParser.T__20);
	                this.state = 343;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 344;
	            this.match(turingParser.T__15);
	            this.state = 345;
	            this.string();
	            this.state = 346;
	            this.match(turingParser.T__3);
	            this.state = 347;
	            this.match(turingParser.T__20);
	            this.state = 348;
	            this.match(turingParser.T__6);
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



	subprogramBody() {
	    let localctx = new SubprogramBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, turingParser.RULE_subprogramBody);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        this.declarationsAndStatements();
	        this.state = 353;
	        this.match(turingParser.T__17);
	        this.state = 354;
	        this.id_();
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



	declarationsAndStatements() {
	    let localctx = new DeclarationsAndStatementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, turingParser.RULE_declarationsAndStatements);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 359;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3317695234) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 536871145) !== 0)) {
	            this.state = 356;
	            this.declarationOrStatement();
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



	declarationOrStatement() {
	    let localctx = new DeclarationOrStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, turingParser.RULE_declarationOrStatement);
	    try {
	        this.state = 364;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 8:
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 362;
	            this.declaration();
	            break;
	        case 22:
	        case 23:
	        case 24:
	        case 26:
	        case 30:
	        case 31:
	        case 33:
	        case 36:
	        case 38:
	        case 39:
	        case 40:
	        case 62:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 363;
	            this.statement();
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, turingParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 388;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 366;
	            this.variableReference();
	            this.state = 367;
	            this.match(turingParser.T__1);
	            this.state = 368;
	            this.expn(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 370;
	            this.procedureCall();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 371;
	            this.match(turingParser.T__21);
	            this.state = 372;
	            this.booleanExpn();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 373;
	            this.match(turingParser.T__22);
	            this.state = 374;
	            this.expn(0);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 375;
	            this.ifStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 376;
	            this.loopStatement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 377;
	            this.match(turingParser.T__23);
	            this.state = 380;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 378;
	                this.match(turingParser.T__24);
	                this.state = 379;
	                this.booleanExpn();
	            }

	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 382;
	            this.caseStatement();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 383;
	            this.forStatement();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 384;
	            this.putStatement();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 385;
	            this.getStatement();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 386;
	            this.openStatement();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 387;
	            this.closeStatement();
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



	procedureCall() {
	    let localctx = new ProcedureCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, turingParser.RULE_procedureCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 390;
	        this.reference();
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



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, turingParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 392;
	        this.match(turingParser.T__25);
	        this.state = 393;
	        this.booleanExpn();
	        this.state = 394;
	        this.match(turingParser.T__26);
	        this.state = 395;
	        this.declarationsAndStatements();
	        this.state = 403;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 396;
	            this.match(turingParser.T__27);
	            this.state = 397;
	            this.booleanExpn();
	            this.state = 398;
	            this.match(turingParser.T__26);
	            this.state = 399;
	            this.declarationsAndStatements();
	            this.state = 405;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 408;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 406;
	            this.match(turingParser.T__28);
	            this.state = 407;
	            this.declarationsAndStatements();
	        }

	        this.state = 410;
	        this.match(turingParser.T__17);
	        this.state = 411;
	        this.match(turingParser.T__25);
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



	loopStatement() {
	    let localctx = new LoopStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, turingParser.RULE_loopStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 413;
	        this.match(turingParser.T__29);
	        this.state = 414;
	        this.declarationsAndStatements();
	        this.state = 415;
	        this.match(turingParser.T__17);
	        this.state = 416;
	        this.match(turingParser.T__29);
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



	caseStatement() {
	    let localctx = new CaseStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, turingParser.RULE_caseStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 418;
	        this.match(turingParser.T__30);
	        this.state = 419;
	        this.expn(0);
	        this.state = 420;
	        this.match(turingParser.T__15);
	        this.state = 421;
	        this.match(turingParser.T__31);
	        this.state = 422;
	        this.compileTimeExpn();
	        this.state = 427;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 423;
	            this.match(turingParser.T__5);
	            this.state = 424;
	            this.compileTimeExpn();
	            this.state = 429;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 430;
	        this.match(turingParser.T__2);
	        this.state = 431;
	        this.declarationsAndStatements();
	        this.state = 446;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 432;
	                this.match(turingParser.T__31);
	                this.state = 433;
	                this.compileTimeExpn();
	                this.state = 438;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===6) {
	                    this.state = 434;
	                    this.match(turingParser.T__5);
	                    this.state = 435;
	                    this.compileTimeExpn();
	                    this.state = 440;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 441;
	                this.match(turingParser.T__2);
	                this.state = 442;
	                this.declarationsAndStatements(); 
	            }
	            this.state = 448;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
	        }

	        this.state = 452;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 449;
	            this.match(turingParser.T__31);
	            this.state = 450;
	            this.match(turingParser.T__2);
	            this.state = 451;
	            this.declarationsAndStatements();
	        }

	        this.state = 454;
	        this.match(turingParser.T__17);
	        this.state = 455;
	        this.match(turingParser.T__30);
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



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, turingParser.RULE_forStatement);
	    var _la = 0;
	    try {
	        this.state = 486;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 457;
	            this.match(turingParser.T__32);
	            this.state = 458;
	            this.id_();
	            this.state = 459;
	            this.match(turingParser.T__2);
	            this.state = 460;
	            this.expn(0);
	            this.state = 461;
	            this.match(turingParser.T__13);
	            this.state = 462;
	            this.expn(0);
	            this.state = 465;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===34) {
	                this.state = 463;
	                this.match(turingParser.T__33);
	                this.state = 464;
	                this.expn(0);
	            }

	            this.state = 467;
	            this.declarationsAndStatements();
	            this.state = 468;
	            this.match(turingParser.T__17);
	            this.state = 469;
	            this.match(turingParser.T__32);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 471;
	            this.match(turingParser.T__32);
	            this.state = 472;
	            this.match(turingParser.T__34);
	            this.state = 473;
	            this.id_();
	            this.state = 474;
	            this.match(turingParser.T__2);
	            this.state = 475;
	            this.expn(0);
	            this.state = 476;
	            this.match(turingParser.T__13);
	            this.state = 477;
	            this.expn(0);
	            this.state = 480;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===34) {
	                this.state = 478;
	                this.match(turingParser.T__33);
	                this.state = 479;
	                this.expn(0);
	            }

	            this.state = 482;
	            this.declarationsAndStatements();
	            this.state = 483;
	            this.match(turingParser.T__17);
	            this.state = 484;
	            this.match(turingParser.T__32);
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



	putStatement() {
	    let localctx = new PutStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, turingParser.RULE_putStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 488;
	        this.match(turingParser.T__35);
	        this.state = 493;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 489;
	            this.match(turingParser.T__2);
	            this.state = 490;
	            this.streamNumber();
	            this.state = 491;
	            this.match(turingParser.T__5);
	        }

	        this.state = 495;
	        this.putItem();
	        this.state = 500;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 496;
	            this.match(turingParser.T__5);
	            this.state = 497;
	            this.putItem();
	            this.state = 502;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 504;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 503;
	            this.match(turingParser.T__13);
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



	putItem() {
	    let localctx = new PutItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, turingParser.RULE_putItem);
	    var _la = 0;
	    try {
	        this.state = 520;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 506;
	            this.expn(0);
	            this.state = 517;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===3) {
	                this.state = 507;
	                this.match(turingParser.T__2);
	                this.state = 508;
	                this.widthExpn();
	                this.state = 515;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===3) {
	                    this.state = 509;
	                    this.match(turingParser.T__2);
	                    this.state = 510;
	                    this.fractionWidth();
	                    this.state = 513;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===3) {
	                        this.state = 511;
	                        this.match(turingParser.T__2);
	                        this.state = 512;
	                        this.exponentWidth();
	                    }

	                }

	            }

	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 519;
	            this.match(turingParser.T__36);
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



	getStatement() {
	    let localctx = new GetStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, turingParser.RULE_getStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 522;
	        this.match(turingParser.T__37);
	        this.state = 527;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 523;
	            this.match(turingParser.T__2);
	            this.state = 524;
	            this.streamNumber();
	            this.state = 525;
	            this.match(turingParser.T__5);
	        }

	        this.state = 529;
	        this.getItem();
	        this.state = 534;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 530;
	            this.match(turingParser.T__5);
	            this.state = 531;
	            this.getItem();
	            this.state = 536;
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



	getItem() {
	    let localctx = new GetItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, turingParser.RULE_getItem);
	    try {
	        this.state = 547;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 537;
	            this.variableReference();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 538;
	            this.match(turingParser.T__36);
	            this.state = 539;
	            this.variableReference();
	            this.state = 540;
	            this.match(turingParser.T__2);
	            this.state = 541;
	            this.match(turingParser.T__20);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 543;
	            this.variableReference();
	            this.state = 544;
	            this.match(turingParser.T__2);
	            this.state = 545;
	            this.widthExpn();
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



	openStatement() {
	    let localctx = new OpenStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, turingParser.RULE_openStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 549;
	        this.match(turingParser.T__38);
	        this.state = 550;
	        this.match(turingParser.T__2);
	        this.state = 551;
	        this.fileNumber();
	        this.state = 552;
	        this.match(turingParser.T__5);
	        this.state = 553;
	        this.string();
	        this.state = 554;
	        this.match(turingParser.T__5);
	        this.state = 555;
	        this.capability();
	        this.state = 560;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 556;
	            this.match(turingParser.T__5);
	            this.state = 557;
	            this.capability();
	            this.state = 562;
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



	capability() {
	    let localctx = new CapabilityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, turingParser.RULE_capability);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 563;
	        _la = this._input.LA(1);
	        if(!(_la===36 || _la===38)) {
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



	closeStatement() {
	    let localctx = new CloseStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, turingParser.RULE_closeStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 565;
	        this.match(turingParser.T__39);
	        this.state = 566;
	        this.match(turingParser.T__2);
	        this.state = 567;
	        this.fileNumber();
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



	streamNumber() {
	    let localctx = new StreamNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, turingParser.RULE_streamNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 569;
	        this.expn(0);
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



	widthExpn() {
	    let localctx = new WidthExpnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, turingParser.RULE_widthExpn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 571;
	        this.expn(0);
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



	fractionWidth() {
	    let localctx = new FractionWidthContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, turingParser.RULE_fractionWidth);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 573;
	        this.expn(0);
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



	exponentWidth() {
	    let localctx = new ExponentWidthContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, turingParser.RULE_exponentWidth);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 575;
	        this.expn(0);
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



	fileNumber() {
	    let localctx = new FileNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, turingParser.RULE_fileNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 577;
	        this.expn(0);
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



	variableReference() {
	    let localctx = new VariableReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, turingParser.RULE_variableReference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 579;
	        this.reference();
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



	reference() {
	    let localctx = new ReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, turingParser.RULE_reference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 581;
	        this.id_();
	        this.state = 582;
	        this.reference_2();
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



	reference_2() {
	    let localctx = new Reference_2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, turingParser.RULE_reference_2);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 587;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	        if(la_===1) {
	            this.state = 584;
	            this.componentSelector();
	            this.state = 585;
	            this.reference_2();

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



	componentSelector() {
	    let localctx = new ComponentSelectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, turingParser.RULE_componentSelector);
	    var _la = 0;
	    try {
	        this.state = 602;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 589;
	            this.match(turingParser.T__3);
	            this.state = 590;
	            this.expn(0);
	            this.state = 595;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 591;
	                this.match(turingParser.T__5);
	                this.state = 592;
	                this.expn(0);
	                this.state = 597;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 598;
	            this.match(turingParser.T__6);
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 600;
	            this.match(turingParser.T__40);
	            this.state = 601;
	            this.id_();
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



	booleanExpn() {
	    let localctx = new BooleanExpnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, turingParser.RULE_booleanExpn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 604;
	        this.expn(0);
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



	compileTimeExpn() {
	    let localctx = new CompileTimeExpnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, turingParser.RULE_compileTimeExpn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 606;
	        this.expn(0);
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


	expn(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpnContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 90;
	    this.enterRecursionRule(localctx, 90, turingParser.RULE_expn, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 619;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 609;
	            this.reference();
	            break;

	        case 2:
	            this.state = 610;
	            this.explicitConstant();
	            break;

	        case 3:
	            this.state = 611;
	            this.substring();
	            break;

	        case 4:
	            this.state = 612;
	            this.prefixOperator();
	            this.state = 613;
	            this.expn(2);
	            break;

	        case 5:
	            this.state = 615;
	            this.match(turingParser.T__3);
	            this.state = 616;
	            this.expn(0);
	            this.state = 617;
	            this.match(turingParser.T__6);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 627;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,55,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpnContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, turingParser.RULE_expn);
	                this.state = 621;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 622;
	                this.infixOperator();
	                this.state = 623;
	                this.expn(4); 
	            }
	            this.state = 629;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,55,this._ctx);
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, turingParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 630;
	        this.match(turingParser.ExplicitStringConstant);
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



	explicitConstant() {
	    let localctx = new ExplicitConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, turingParser.RULE_explicitConstant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 632;
	        _la = this._input.LA(1);
	        if(!(((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 917507) !== 0))) {
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



	infixOperator() {
	    let localctx = new InfixOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, turingParser.RULE_infixOperator);
	    try {
	        this.state = 649;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 634;
	            this.match(turingParser.T__43);
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 635;
	            this.match(turingParser.T__44);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 636;
	            this.match(turingParser.T__20);
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 637;
	            this.match(turingParser.T__45);
	            this.state = 638;
	            this.match(turingParser.T__46);
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 639;
	            this.match(turingParser.T__47);
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 640;
	            this.match(turingParser.T__48);
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 641;
	            this.match(turingParser.T__49);
	            break;
	        case 51:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 642;
	            this.match(turingParser.T__50);
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 643;
	            this.match(turingParser.T__51);
	            break;
	        case 53:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 644;
	            this.match(turingParser.T__52);
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 645;
	            this.match(turingParser.T__53);
	            break;
	        case 55:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 646;
	            this.match(turingParser.T__54);
	            break;
	        case 56:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 647;
	            this.match(turingParser.T__55);
	            break;
	        case 57:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 648;
	            this.match(turingParser.T__56);
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



	prefixOperator() {
	    let localctx = new PrefixOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, turingParser.RULE_prefixOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 651;
	        _la = this._input.LA(1);
	        if(!(((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 16387) !== 0))) {
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



	substring() {
	    let localctx = new SubstringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, turingParser.RULE_substring);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 653;
	        this.reference();
	        this.state = 654;
	        this.match(turingParser.T__3);
	        this.state = 655;
	        this.substringPosition();
	        this.state = 658;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 656;
	            this.match(turingParser.T__13);
	            this.state = 657;
	            this.substringPosition();
	        }

	        this.state = 660;
	        this.match(turingParser.T__6);
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



	substringPosition() {
	    let localctx = new SubstringPositionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, turingParser.RULE_substringPosition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 662;
	        this.expn(0);

	        this.state = 663;
	        this.match(turingParser.T__20);

	        this.state = 664;
	        this.match(turingParser.T__44);
	        this.state = 665;
	        this.expn(0);
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



	id_() {
	    let localctx = new Id_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, turingParser.RULE_id_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 667;
	        this.match(turingParser.IDENTIFIER);
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

turingParser.EOF = antlr4.Token.EOF;
turingParser.T__0 = 1;
turingParser.T__1 = 2;
turingParser.T__2 = 3;
turingParser.T__3 = 4;
turingParser.T__4 = 5;
turingParser.T__5 = 6;
turingParser.T__6 = 7;
turingParser.T__7 = 8;
turingParser.T__8 = 9;
turingParser.T__9 = 10;
turingParser.T__10 = 11;
turingParser.T__11 = 12;
turingParser.T__12 = 13;
turingParser.T__13 = 14;
turingParser.T__14 = 15;
turingParser.T__15 = 16;
turingParser.T__16 = 17;
turingParser.T__17 = 18;
turingParser.T__18 = 19;
turingParser.T__19 = 20;
turingParser.T__20 = 21;
turingParser.T__21 = 22;
turingParser.T__22 = 23;
turingParser.T__23 = 24;
turingParser.T__24 = 25;
turingParser.T__25 = 26;
turingParser.T__26 = 27;
turingParser.T__27 = 28;
turingParser.T__28 = 29;
turingParser.T__29 = 30;
turingParser.T__30 = 31;
turingParser.T__31 = 32;
turingParser.T__32 = 33;
turingParser.T__33 = 34;
turingParser.T__34 = 35;
turingParser.T__35 = 36;
turingParser.T__36 = 37;
turingParser.T__37 = 38;
turingParser.T__38 = 39;
turingParser.T__39 = 40;
turingParser.T__40 = 41;
turingParser.T__41 = 42;
turingParser.T__42 = 43;
turingParser.T__43 = 44;
turingParser.T__44 = 45;
turingParser.T__45 = 46;
turingParser.T__46 = 47;
turingParser.T__47 = 48;
turingParser.T__48 = 49;
turingParser.T__49 = 50;
turingParser.T__50 = 51;
turingParser.T__51 = 52;
turingParser.T__52 = 53;
turingParser.T__53 = 54;
turingParser.T__54 = 55;
turingParser.T__55 = 56;
turingParser.T__56 = 57;
turingParser.T__57 = 58;
turingParser.ExplicitUnsignedIntegerConstant = 59;
turingParser.ExplicitUnsignedRealConstant = 60;
turingParser.ExplicitStringConstant = 61;
turingParser.IDENTIFIER = 62;
turingParser.COMMENT = 63;
turingParser.WS = 64;

turingParser.RULE_program = 0;
turingParser.RULE_declarationOrStatementInMainProgram = 1;
turingParser.RULE_declaration = 2;
turingParser.RULE_constantDeclaration = 3;
turingParser.RULE_initializingValue = 4;
turingParser.RULE_variableDeclaration = 5;
turingParser.RULE_typeDeclaration = 6;
turingParser.RULE_typeSpec = 7;
turingParser.RULE_standardType = 8;
turingParser.RULE_subrangeType = 9;
turingParser.RULE_arrayType = 10;
turingParser.RULE_indexType = 11;
turingParser.RULE_recordType = 12;
turingParser.RULE_namedType = 13;
turingParser.RULE_subprogramDeclaration = 14;
turingParser.RULE_subprogramHeader = 15;
turingParser.RULE_parameterDeclaration = 16;
turingParser.RULE_parameterType = 17;
turingParser.RULE_subprogramBody = 18;
turingParser.RULE_declarationsAndStatements = 19;
turingParser.RULE_declarationOrStatement = 20;
turingParser.RULE_statement = 21;
turingParser.RULE_procedureCall = 22;
turingParser.RULE_ifStatement = 23;
turingParser.RULE_loopStatement = 24;
turingParser.RULE_caseStatement = 25;
turingParser.RULE_forStatement = 26;
turingParser.RULE_putStatement = 27;
turingParser.RULE_putItem = 28;
turingParser.RULE_getStatement = 29;
turingParser.RULE_getItem = 30;
turingParser.RULE_openStatement = 31;
turingParser.RULE_capability = 32;
turingParser.RULE_closeStatement = 33;
turingParser.RULE_streamNumber = 34;
turingParser.RULE_widthExpn = 35;
turingParser.RULE_fractionWidth = 36;
turingParser.RULE_exponentWidth = 37;
turingParser.RULE_fileNumber = 38;
turingParser.RULE_variableReference = 39;
turingParser.RULE_reference = 40;
turingParser.RULE_reference_2 = 41;
turingParser.RULE_componentSelector = 42;
turingParser.RULE_booleanExpn = 43;
turingParser.RULE_compileTimeExpn = 44;
turingParser.RULE_expn = 45;
turingParser.RULE_string = 46;
turingParser.RULE_explicitConstant = 47;
turingParser.RULE_infixOperator = 48;
turingParser.RULE_prefixOperator = 49;
turingParser.RULE_substring = 50;
turingParser.RULE_substringPosition = 51;
turingParser.RULE_id_ = 52;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_program;
    }

	EOF() {
	    return this.getToken(turingParser.EOF, 0);
	};

	declarationOrStatementInMainProgram = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationOrStatementInMainProgramContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationOrStatementInMainProgramContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitProgram(this);
		}
	}


}



class DeclarationOrStatementInMainProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_declarationOrStatementInMainProgram;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	subprogramDeclaration() {
	    return this.getTypedRuleContext(SubprogramDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterDeclarationOrStatementInMainProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitDeclarationOrStatementInMainProgram(this);
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
        this.ruleIndex = turingParser.RULE_declaration;
    }

	constantDeclaration() {
	    return this.getTypedRuleContext(ConstantDeclarationContext,0);
	};

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	typeDeclaration() {
	    return this.getTypedRuleContext(TypeDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitDeclaration(this);
		}
	}


}



class ConstantDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_constantDeclaration;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	initializingValue() {
	    return this.getTypedRuleContext(InitializingValueContext,0);
	};

	typeSpec() {
	    return this.getTypedRuleContext(TypeSpecContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterConstantDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitConstantDeclaration(this);
		}
	}


}



class InitializingValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_initializingValue;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	initializingValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InitializingValueContext);
	    } else {
	        return this.getTypedRuleContext(InitializingValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterInitializingValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitInitializingValue(this);
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
        this.ruleIndex = turingParser.RULE_variableDeclaration;
    }

	id_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Id_Context);
	    } else {
	        return this.getTypedRuleContext(Id_Context,i);
	    }
	};

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	typeSpec() {
	    return this.getTypedRuleContext(TypeSpecContext,0);
	};

	initializingValue() {
	    return this.getTypedRuleContext(InitializingValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}


}



class TypeDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_typeDeclaration;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	typeSpec() {
	    return this.getTypedRuleContext(TypeSpecContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterTypeDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitTypeDeclaration(this);
		}
	}


}



class TypeSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_typeSpec;
    }

	standardType() {
	    return this.getTypedRuleContext(StandardTypeContext,0);
	};

	subrangeType() {
	    return this.getTypedRuleContext(SubrangeTypeContext,0);
	};

	arrayType() {
	    return this.getTypedRuleContext(ArrayTypeContext,0);
	};

	recordType() {
	    return this.getTypedRuleContext(RecordTypeContext,0);
	};

	namedType() {
	    return this.getTypedRuleContext(NamedTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterTypeSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitTypeSpec(this);
		}
	}


}



class StandardTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_standardType;
    }

	compileTimeExpn() {
	    return this.getTypedRuleContext(CompileTimeExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterStandardType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitStandardType(this);
		}
	}


}



class SubrangeTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_subrangeType;
    }

	compileTimeExpn() {
	    return this.getTypedRuleContext(CompileTimeExpnContext,0);
	};

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterSubrangeType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitSubrangeType(this);
		}
	}


}



class ArrayTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_arrayType;
    }

	indexType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IndexTypeContext);
	    } else {
	        return this.getTypedRuleContext(IndexTypeContext,i);
	    }
	};

	typeSpec() {
	    return this.getTypedRuleContext(TypeSpecContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterArrayType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitArrayType(this);
		}
	}


}



class IndexTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_indexType;
    }

	subrangeType() {
	    return this.getTypedRuleContext(SubrangeTypeContext,0);
	};

	namedType() {
	    return this.getTypedRuleContext(NamedTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterIndexType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitIndexType(this);
		}
	}


}



class RecordTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_recordType;
    }

	id_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Id_Context);
	    } else {
	        return this.getTypedRuleContext(Id_Context,i);
	    }
	};

	typeSpec = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeSpecContext);
	    } else {
	        return this.getTypedRuleContext(TypeSpecContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterRecordType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitRecordType(this);
		}
	}


}



class NamedTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_namedType;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterNamedType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitNamedType(this);
		}
	}


}



class SubprogramDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_subprogramDeclaration;
    }

	subprogramHeader() {
	    return this.getTypedRuleContext(SubprogramHeaderContext,0);
	};

	subprogramBody() {
	    return this.getTypedRuleContext(SubprogramBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterSubprogramDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitSubprogramDeclaration(this);
		}
	}


}



class SubprogramHeaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_subprogramHeader;
    }

	id_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Id_Context);
	    } else {
	        return this.getTypedRuleContext(Id_Context,i);
	    }
	};

	typeSpec() {
	    return this.getTypedRuleContext(TypeSpecContext,0);
	};

	parameterDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(ParameterDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterSubprogramHeader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitSubprogramHeader(this);
		}
	}


}



class ParameterDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_parameterDeclaration;
    }

	id_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Id_Context);
	    } else {
	        return this.getTypedRuleContext(Id_Context,i);
	    }
	};

	parameterType() {
	    return this.getTypedRuleContext(ParameterTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterParameterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitParameterDeclaration(this);
		}
	}


}



class ParameterTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_parameterType;
    }

	typeSpec() {
	    return this.getTypedRuleContext(TypeSpecContext,0);
	};

	compileTimeExpn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CompileTimeExpnContext);
	    } else {
	        return this.getTypedRuleContext(CompileTimeExpnContext,i);
	    }
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterParameterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitParameterType(this);
		}
	}


}



class SubprogramBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_subprogramBody;
    }

	declarationsAndStatements() {
	    return this.getTypedRuleContext(DeclarationsAndStatementsContext,0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterSubprogramBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitSubprogramBody(this);
		}
	}


}



class DeclarationsAndStatementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_declarationsAndStatements;
    }

	declarationOrStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationOrStatementContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationOrStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterDeclarationsAndStatements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitDeclarationsAndStatements(this);
		}
	}


}



class DeclarationOrStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_declarationOrStatement;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterDeclarationOrStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitDeclarationOrStatement(this);
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
        this.ruleIndex = turingParser.RULE_statement;
    }

	variableReference() {
	    return this.getTypedRuleContext(VariableReferenceContext,0);
	};

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	procedureCall() {
	    return this.getTypedRuleContext(ProcedureCallContext,0);
	};

	booleanExpn() {
	    return this.getTypedRuleContext(BooleanExpnContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	loopStatement() {
	    return this.getTypedRuleContext(LoopStatementContext,0);
	};

	caseStatement() {
	    return this.getTypedRuleContext(CaseStatementContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	putStatement() {
	    return this.getTypedRuleContext(PutStatementContext,0);
	};

	getStatement() {
	    return this.getTypedRuleContext(GetStatementContext,0);
	};

	openStatement() {
	    return this.getTypedRuleContext(OpenStatementContext,0);
	};

	closeStatement() {
	    return this.getTypedRuleContext(CloseStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitStatement(this);
		}
	}


}



class ProcedureCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_procedureCall;
    }

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterProcedureCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitProcedureCall(this);
		}
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_ifStatement;
    }

	booleanExpn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BooleanExpnContext);
	    } else {
	        return this.getTypedRuleContext(BooleanExpnContext,i);
	    }
	};

	declarationsAndStatements = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationsAndStatementsContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationsAndStatementsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitIfStatement(this);
		}
	}


}



class LoopStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_loopStatement;
    }

	declarationsAndStatements() {
	    return this.getTypedRuleContext(DeclarationsAndStatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterLoopStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitLoopStatement(this);
		}
	}


}



class CaseStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_caseStatement;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	compileTimeExpn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CompileTimeExpnContext);
	    } else {
	        return this.getTypedRuleContext(CompileTimeExpnContext,i);
	    }
	};

	declarationsAndStatements = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationsAndStatementsContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationsAndStatementsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterCaseStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitCaseStatement(this);
		}
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_forStatement;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	expn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpnContext);
	    } else {
	        return this.getTypedRuleContext(ExpnContext,i);
	    }
	};

	declarationsAndStatements() {
	    return this.getTypedRuleContext(DeclarationsAndStatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitForStatement(this);
		}
	}


}



class PutStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_putStatement;
    }

	putItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PutItemContext);
	    } else {
	        return this.getTypedRuleContext(PutItemContext,i);
	    }
	};

	streamNumber() {
	    return this.getTypedRuleContext(StreamNumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterPutStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitPutStatement(this);
		}
	}


}



class PutItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_putItem;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	widthExpn() {
	    return this.getTypedRuleContext(WidthExpnContext,0);
	};

	fractionWidth() {
	    return this.getTypedRuleContext(FractionWidthContext,0);
	};

	exponentWidth() {
	    return this.getTypedRuleContext(ExponentWidthContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterPutItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitPutItem(this);
		}
	}


}



class GetStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_getStatement;
    }

	getItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GetItemContext);
	    } else {
	        return this.getTypedRuleContext(GetItemContext,i);
	    }
	};

	streamNumber() {
	    return this.getTypedRuleContext(StreamNumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterGetStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitGetStatement(this);
		}
	}


}



class GetItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_getItem;
    }

	variableReference() {
	    return this.getTypedRuleContext(VariableReferenceContext,0);
	};

	widthExpn() {
	    return this.getTypedRuleContext(WidthExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterGetItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitGetItem(this);
		}
	}


}



class OpenStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_openStatement;
    }

	fileNumber() {
	    return this.getTypedRuleContext(FileNumberContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	capability = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CapabilityContext);
	    } else {
	        return this.getTypedRuleContext(CapabilityContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterOpenStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitOpenStatement(this);
		}
	}


}



class CapabilityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_capability;
    }


	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterCapability(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitCapability(this);
		}
	}


}



class CloseStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_closeStatement;
    }

	fileNumber() {
	    return this.getTypedRuleContext(FileNumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterCloseStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitCloseStatement(this);
		}
	}


}



class StreamNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_streamNumber;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterStreamNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitStreamNumber(this);
		}
	}


}



class WidthExpnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_widthExpn;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterWidthExpn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitWidthExpn(this);
		}
	}


}



class FractionWidthContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_fractionWidth;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterFractionWidth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitFractionWidth(this);
		}
	}


}



class ExponentWidthContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_exponentWidth;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterExponentWidth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitExponentWidth(this);
		}
	}


}



class FileNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_fileNumber;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterFileNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitFileNumber(this);
		}
	}


}



class VariableReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_variableReference;
    }

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterVariableReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitVariableReference(this);
		}
	}


}



class ReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_reference;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	reference_2() {
	    return this.getTypedRuleContext(Reference_2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitReference(this);
		}
	}


}



class Reference_2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_reference_2;
    }

	componentSelector() {
	    return this.getTypedRuleContext(ComponentSelectorContext,0);
	};

	reference_2() {
	    return this.getTypedRuleContext(Reference_2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterReference_2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitReference_2(this);
		}
	}


}



class ComponentSelectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_componentSelector;
    }

	expn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpnContext);
	    } else {
	        return this.getTypedRuleContext(ExpnContext,i);
	    }
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterComponentSelector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitComponentSelector(this);
		}
	}


}



class BooleanExpnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_booleanExpn;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterBooleanExpn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitBooleanExpn(this);
		}
	}


}



class CompileTimeExpnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_compileTimeExpn;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterCompileTimeExpn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitCompileTimeExpn(this);
		}
	}


}



class ExpnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_expn;
    }

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	explicitConstant() {
	    return this.getTypedRuleContext(ExplicitConstantContext,0);
	};

	substring() {
	    return this.getTypedRuleContext(SubstringContext,0);
	};

	prefixOperator() {
	    return this.getTypedRuleContext(PrefixOperatorContext,0);
	};

	expn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpnContext);
	    } else {
	        return this.getTypedRuleContext(ExpnContext,i);
	    }
	};

	infixOperator() {
	    return this.getTypedRuleContext(InfixOperatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterExpn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitExpn(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_string;
    }

	ExplicitStringConstant() {
	    return this.getToken(turingParser.ExplicitStringConstant, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitString(this);
		}
	}


}



class ExplicitConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_explicitConstant;
    }

	ExplicitUnsignedIntegerConstant() {
	    return this.getToken(turingParser.ExplicitUnsignedIntegerConstant, 0);
	};

	ExplicitUnsignedRealConstant() {
	    return this.getToken(turingParser.ExplicitUnsignedRealConstant, 0);
	};

	ExplicitStringConstant() {
	    return this.getToken(turingParser.ExplicitStringConstant, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterExplicitConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitExplicitConstant(this);
		}
	}


}



class InfixOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_infixOperator;
    }


	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterInfixOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitInfixOperator(this);
		}
	}


}



class PrefixOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_prefixOperator;
    }


	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterPrefixOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitPrefixOperator(this);
		}
	}


}



class SubstringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_substring;
    }

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	substringPosition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubstringPositionContext);
	    } else {
	        return this.getTypedRuleContext(SubstringPositionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterSubstring(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitSubstring(this);
		}
	}


}



class SubstringPositionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_substringPosition;
    }

	expn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpnContext);
	    } else {
	        return this.getTypedRuleContext(ExpnContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterSubstringPosition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitSubstringPosition(this);
		}
	}


}



class Id_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_id_;
    }

	IDENTIFIER() {
	    return this.getToken(turingParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterId_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitId_(this);
		}
	}


}




turingParser.ProgramContext = ProgramContext; 
turingParser.DeclarationOrStatementInMainProgramContext = DeclarationOrStatementInMainProgramContext; 
turingParser.DeclarationContext = DeclarationContext; 
turingParser.ConstantDeclarationContext = ConstantDeclarationContext; 
turingParser.InitializingValueContext = InitializingValueContext; 
turingParser.VariableDeclarationContext = VariableDeclarationContext; 
turingParser.TypeDeclarationContext = TypeDeclarationContext; 
turingParser.TypeSpecContext = TypeSpecContext; 
turingParser.StandardTypeContext = StandardTypeContext; 
turingParser.SubrangeTypeContext = SubrangeTypeContext; 
turingParser.ArrayTypeContext = ArrayTypeContext; 
turingParser.IndexTypeContext = IndexTypeContext; 
turingParser.RecordTypeContext = RecordTypeContext; 
turingParser.NamedTypeContext = NamedTypeContext; 
turingParser.SubprogramDeclarationContext = SubprogramDeclarationContext; 
turingParser.SubprogramHeaderContext = SubprogramHeaderContext; 
turingParser.ParameterDeclarationContext = ParameterDeclarationContext; 
turingParser.ParameterTypeContext = ParameterTypeContext; 
turingParser.SubprogramBodyContext = SubprogramBodyContext; 
turingParser.DeclarationsAndStatementsContext = DeclarationsAndStatementsContext; 
turingParser.DeclarationOrStatementContext = DeclarationOrStatementContext; 
turingParser.StatementContext = StatementContext; 
turingParser.ProcedureCallContext = ProcedureCallContext; 
turingParser.IfStatementContext = IfStatementContext; 
turingParser.LoopStatementContext = LoopStatementContext; 
turingParser.CaseStatementContext = CaseStatementContext; 
turingParser.ForStatementContext = ForStatementContext; 
turingParser.PutStatementContext = PutStatementContext; 
turingParser.PutItemContext = PutItemContext; 
turingParser.GetStatementContext = GetStatementContext; 
turingParser.GetItemContext = GetItemContext; 
turingParser.OpenStatementContext = OpenStatementContext; 
turingParser.CapabilityContext = CapabilityContext; 
turingParser.CloseStatementContext = CloseStatementContext; 
turingParser.StreamNumberContext = StreamNumberContext; 
turingParser.WidthExpnContext = WidthExpnContext; 
turingParser.FractionWidthContext = FractionWidthContext; 
turingParser.ExponentWidthContext = ExponentWidthContext; 
turingParser.FileNumberContext = FileNumberContext; 
turingParser.VariableReferenceContext = VariableReferenceContext; 
turingParser.ReferenceContext = ReferenceContext; 
turingParser.Reference_2Context = Reference_2Context; 
turingParser.ComponentSelectorContext = ComponentSelectorContext; 
turingParser.BooleanExpnContext = BooleanExpnContext; 
turingParser.CompileTimeExpnContext = CompileTimeExpnContext; 
turingParser.ExpnContext = ExpnContext; 
turingParser.StringContext = StringContext; 
turingParser.ExplicitConstantContext = ExplicitConstantContext; 
turingParser.InfixOperatorContext = InfixOperatorContext; 
turingParser.PrefixOperatorContext = PrefixOperatorContext; 
turingParser.SubstringContext = SubstringContext; 
turingParser.SubstringPositionContext = SubstringPositionContext; 
turingParser.Id_Context = Id_Context; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
