// Generated from ./iri/IRI.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import IRIListener from './IRIListener.js';
const serializedATN = [4,1,63,559,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,93,8,1,1,1,1,1,3,1,97,8,1,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,3,2,106,8,2,1,3,1,3,3,3,110,8,3,1,4,1,4,1,4,1,4,1,4,3,
4,117,8,4,1,5,1,5,1,5,3,5,122,8,5,1,5,1,5,3,5,126,8,5,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,3,6,135,8,6,1,7,1,7,1,7,3,7,140,8,7,1,7,1,7,1,7,3,7,145,8,7,1,
8,1,8,1,8,1,8,5,8,151,8,8,10,8,12,8,154,9,8,1,9,1,9,1,9,3,9,159,8,9,1,10,
1,10,1,10,5,10,164,8,10,10,10,12,10,167,9,10,1,11,1,11,1,11,1,11,1,11,3,
11,174,8,11,1,12,1,12,5,12,178,8,12,10,12,12,12,181,9,12,1,13,1,13,1,13,
1,13,5,13,187,8,13,10,13,12,13,190,9,13,3,13,192,8,13,1,14,1,14,1,14,5,14,
197,8,14,10,14,12,14,200,9,14,1,15,1,15,1,15,5,15,205,8,15,10,15,12,15,208,
9,15,1,16,1,16,1,17,5,17,213,8,17,10,17,12,17,216,9,17,1,18,4,18,219,8,18,
11,18,12,18,220,1,19,1,19,1,19,1,19,4,19,227,8,19,11,19,12,19,228,1,20,1,
20,1,20,1,20,3,20,235,8,20,1,21,1,21,5,21,239,8,21,10,21,12,21,242,9,21,
1,22,1,22,5,22,246,8,22,10,22,12,22,249,9,22,1,23,1,23,1,23,3,23,254,8,23,
1,24,1,24,1,24,1,24,5,24,260,8,24,10,24,12,24,263,9,24,1,25,5,25,266,8,25,
10,25,12,25,269,9,25,1,26,1,26,1,26,3,26,274,8,26,1,26,1,26,1,27,1,27,4,
27,280,8,27,11,27,12,27,281,1,27,1,27,1,27,1,27,4,27,288,8,27,11,27,12,27,
289,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,
1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,
28,320,8,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,
1,28,1,28,3,28,336,8,28,1,28,3,28,339,8,28,1,28,1,28,1,28,1,28,1,28,1,28,
1,28,1,28,1,28,1,28,1,28,1,28,3,28,353,8,28,1,28,1,28,1,28,3,28,358,8,28,
1,28,3,28,361,8,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,
373,8,28,1,28,1,28,1,28,3,28,378,8,28,1,28,1,28,1,28,3,28,383,8,28,1,28,
3,28,386,8,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,396,8,28,1,28,
1,28,1,28,3,28,401,8,28,1,28,1,28,1,28,3,28,406,8,28,1,28,1,28,1,28,3,28,
411,8,28,1,28,3,28,414,8,28,1,28,1,28,1,28,1,28,1,28,3,28,421,8,28,1,28,
1,28,1,28,3,28,426,8,28,1,28,1,28,1,28,3,28,431,8,28,1,28,1,28,1,28,3,28,
436,8,28,1,28,1,28,1,28,3,28,441,8,28,1,28,3,28,444,8,28,1,28,1,28,1,28,
1,28,1,28,3,28,451,8,28,1,28,1,28,1,28,3,28,456,8,28,1,28,1,28,1,28,3,28,
461,8,28,1,28,1,28,1,28,3,28,466,8,28,1,28,1,28,1,28,3,28,471,8,28,1,28,
1,28,1,28,3,28,476,8,28,1,28,3,28,479,8,28,1,28,3,28,482,8,28,1,29,1,29,
1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,497,8,29,1,30,
1,30,1,30,1,30,1,30,3,30,504,8,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,
1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,
32,528,8,32,1,33,1,33,1,33,1,33,1,34,1,34,1,34,3,34,537,8,34,1,35,1,35,3,
35,541,8,35,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,39,3,39,551,8,39,1,40,1,
40,3,40,555,8,40,1,41,1,41,1,41,0,0,42,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,
74,76,78,80,82,0,13,2,0,40,40,63,63,2,0,2,2,58,59,1,0,58,59,3,0,1,1,41,41,
43,45,3,0,41,41,43,43,53,53,1,0,3,7,1,0,3,8,2,0,41,41,43,45,2,0,40,40,58,
63,1,0,46,56,1,0,13,38,1,0,13,18,1,0,4,12,621,0,84,1,0,0,0,2,87,1,0,0,0,
4,105,1,0,0,0,6,109,1,0,0,0,8,111,1,0,0,0,10,118,1,0,0,0,12,134,1,0,0,0,
14,139,1,0,0,0,16,152,1,0,0,0,18,158,1,0,0,0,20,165,1,0,0,0,22,173,1,0,0,
0,24,179,1,0,0,0,26,182,1,0,0,0,28,193,1,0,0,0,30,201,1,0,0,0,32,209,1,0,
0,0,34,214,1,0,0,0,36,218,1,0,0,0,38,226,1,0,0,0,40,234,1,0,0,0,42,240,1,
0,0,0,44,247,1,0,0,0,46,253,1,0,0,0,48,255,1,0,0,0,50,267,1,0,0,0,52,270,
1,0,0,0,54,277,1,0,0,0,56,481,1,0,0,0,58,496,1,0,0,0,60,503,1,0,0,0,62,505,
1,0,0,0,64,527,1,0,0,0,66,529,1,0,0,0,68,536,1,0,0,0,70,540,1,0,0,0,72,542,
1,0,0,0,74,544,1,0,0,0,76,546,1,0,0,0,78,550,1,0,0,0,80,554,1,0,0,0,82,556,
1,0,0,0,84,85,3,2,1,0,85,86,5,0,0,1,86,1,1,0,0,0,87,88,3,48,24,0,88,89,5,
40,0,0,89,92,3,4,2,0,90,91,5,59,0,0,91,93,3,42,21,0,92,90,1,0,0,0,92,93,
1,0,0,0,93,96,1,0,0,0,94,95,5,60,0,0,95,97,3,44,22,0,96,94,1,0,0,0,96,97,
1,0,0,0,97,3,1,0,0,0,98,99,5,57,0,0,99,100,3,14,7,0,100,101,3,24,12,0,101,
106,1,0,0,0,102,106,3,26,13,0,103,106,3,30,15,0,104,106,3,32,16,0,105,98,
1,0,0,0,105,102,1,0,0,0,105,103,1,0,0,0,105,104,1,0,0,0,106,5,1,0,0,0,107,
110,3,2,1,0,108,110,3,10,5,0,109,107,1,0,0,0,109,108,1,0,0,0,110,7,1,0,0,
0,111,112,3,48,24,0,112,113,5,40,0,0,113,116,3,4,2,0,114,115,5,59,0,0,115,
117,3,42,21,0,116,114,1,0,0,0,116,117,1,0,0,0,117,9,1,0,0,0,118,121,3,12,
6,0,119,120,5,59,0,0,120,122,3,42,21,0,121,119,1,0,0,0,121,122,1,0,0,0,122,
125,1,0,0,0,123,124,5,60,0,0,124,126,3,44,22,0,125,123,1,0,0,0,125,126,1,
0,0,0,126,11,1,0,0,0,127,128,5,57,0,0,128,129,3,14,7,0,129,130,3,24,12,0,
130,135,1,0,0,0,131,135,3,26,13,0,132,135,3,28,14,0,133,135,3,32,16,0,134,
127,1,0,0,0,134,131,1,0,0,0,134,132,1,0,0,0,134,133,1,0,0,0,135,13,1,0,0,
0,136,137,3,16,8,0,137,138,5,63,0,0,138,140,1,0,0,0,139,136,1,0,0,0,139,
140,1,0,0,0,140,141,1,0,0,0,141,144,3,18,9,0,142,143,5,40,0,0,143,145,3,
50,25,0,144,142,1,0,0,0,144,145,1,0,0,0,145,15,1,0,0,0,146,151,3,46,23,0,
147,151,3,66,33,0,148,151,3,74,37,0,149,151,5,40,0,0,150,146,1,0,0,0,150,
147,1,0,0,0,150,148,1,0,0,0,150,149,1,0,0,0,151,154,1,0,0,0,152,150,1,0,
0,0,152,153,1,0,0,0,153,17,1,0,0,0,154,152,1,0,0,0,155,159,3,52,26,0,156,
159,3,62,31,0,157,159,3,20,10,0,158,155,1,0,0,0,158,156,1,0,0,0,158,157,
1,0,0,0,159,19,1,0,0,0,160,164,3,46,23,0,161,164,3,66,33,0,162,164,3,74,
37,0,163,160,1,0,0,0,163,161,1,0,0,0,163,162,1,0,0,0,164,167,1,0,0,0,165,
163,1,0,0,0,165,166,1,0,0,0,166,21,1,0,0,0,167,165,1,0,0,0,168,174,3,24,
12,0,169,174,3,26,13,0,170,174,3,28,14,0,171,174,3,30,15,0,172,174,3,32,
16,0,173,168,1,0,0,0,173,169,1,0,0,0,173,170,1,0,0,0,173,171,1,0,0,0,173,
172,1,0,0,0,174,23,1,0,0,0,175,176,5,58,0,0,176,178,3,34,17,0,177,175,1,
0,0,0,178,181,1,0,0,0,179,177,1,0,0,0,179,180,1,0,0,0,180,25,1,0,0,0,181,
179,1,0,0,0,182,191,5,58,0,0,183,188,3,36,18,0,184,185,5,58,0,0,185,187,
3,34,17,0,186,184,1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,
0,189,192,1,0,0,0,190,188,1,0,0,0,191,183,1,0,0,0,191,192,1,0,0,0,192,27,
1,0,0,0,193,198,3,38,19,0,194,195,5,58,0,0,195,197,3,34,17,0,196,194,1,0,
0,0,197,200,1,0,0,0,198,196,1,0,0,0,198,199,1,0,0,0,199,29,1,0,0,0,200,198,
1,0,0,0,201,206,3,36,18,0,202,203,5,58,0,0,203,205,3,34,17,0,204,202,1,0,
0,0,205,208,1,0,0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,31,1,0,0,0,208,206,
1,0,0,0,209,210,1,0,0,0,210,33,1,0,0,0,211,213,3,40,20,0,212,211,1,0,0,0,
213,216,1,0,0,0,214,212,1,0,0,0,214,215,1,0,0,0,215,35,1,0,0,0,216,214,1,
0,0,0,217,219,3,40,20,0,218,217,1,0,0,0,219,220,1,0,0,0,220,218,1,0,0,0,
220,221,1,0,0,0,221,37,1,0,0,0,222,227,3,46,23,0,223,227,3,66,33,0,224,227,
3,74,37,0,225,227,5,63,0,0,226,222,1,0,0,0,226,223,1,0,0,0,226,224,1,0,0,
0,226,225,1,0,0,0,227,228,1,0,0,0,228,226,1,0,0,0,228,229,1,0,0,0,229,39,
1,0,0,0,230,235,3,46,23,0,231,235,3,66,33,0,232,235,3,74,37,0,233,235,7,
0,0,0,234,230,1,0,0,0,234,231,1,0,0,0,234,232,1,0,0,0,234,233,1,0,0,0,235,
41,1,0,0,0,236,239,3,40,20,0,237,239,7,1,0,0,238,236,1,0,0,0,238,237,1,0,
0,0,239,242,1,0,0,0,240,238,1,0,0,0,240,241,1,0,0,0,241,43,1,0,0,0,242,240,
1,0,0,0,243,246,3,40,20,0,244,246,7,2,0,0,245,243,1,0,0,0,245,244,1,0,0,
0,246,249,1,0,0,0,247,245,1,0,0,0,247,248,1,0,0,0,248,45,1,0,0,0,249,247,
1,0,0,0,250,254,3,76,38,0,251,254,3,80,40,0,252,254,7,3,0,0,253,250,1,0,
0,0,253,251,1,0,0,0,253,252,1,0,0,0,254,47,1,0,0,0,255,261,3,76,38,0,256,
260,3,76,38,0,257,260,3,80,40,0,258,260,7,4,0,0,259,256,1,0,0,0,259,257,
1,0,0,0,259,258,1,0,0,0,260,263,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,
262,49,1,0,0,0,263,261,1,0,0,0,264,266,3,80,40,0,265,264,1,0,0,0,266,269,
1,0,0,0,267,265,1,0,0,0,267,268,1,0,0,0,268,51,1,0,0,0,269,267,1,0,0,0,270,
273,5,61,0,0,271,274,3,56,28,0,272,274,3,54,27,0,273,271,1,0,0,0,273,272,
1,0,0,0,274,275,1,0,0,0,275,276,5,62,0,0,276,53,1,0,0,0,277,279,5,34,0,0,
278,280,3,78,39,0,279,278,1,0,0,0,280,281,1,0,0,0,281,279,1,0,0,0,281,282,
1,0,0,0,282,283,1,0,0,0,283,287,5,41,0,0,284,288,3,68,34,0,285,288,3,74,
37,0,286,288,5,40,0,0,287,284,1,0,0,0,287,285,1,0,0,0,287,286,1,0,0,0,288,
289,1,0,0,0,289,287,1,0,0,0,289,290,1,0,0,0,290,55,1,0,0,0,291,292,3,58,
29,0,292,293,5,40,0,0,293,294,3,58,29,0,294,295,5,40,0,0,295,296,3,58,29,
0,296,297,5,40,0,0,297,298,3,58,29,0,298,299,5,40,0,0,299,300,3,58,29,0,
300,301,5,40,0,0,301,302,3,58,29,0,302,303,5,40,0,0,303,304,3,60,30,0,304,
482,1,0,0,0,305,306,5,39,0,0,306,307,3,58,29,0,307,308,5,40,0,0,308,309,
3,58,29,0,309,310,5,40,0,0,310,311,3,58,29,0,311,312,5,40,0,0,312,313,3,
58,29,0,313,314,5,40,0,0,314,315,3,58,29,0,315,316,5,40,0,0,316,317,3,60,
30,0,317,482,1,0,0,0,318,320,3,58,29,0,319,318,1,0,0,0,319,320,1,0,0,0,320,
321,1,0,0,0,321,322,5,39,0,0,322,323,3,58,29,0,323,324,5,40,0,0,324,325,
3,58,29,0,325,326,5,40,0,0,326,327,3,58,29,0,327,328,5,40,0,0,328,329,3,
58,29,0,329,330,5,40,0,0,330,331,3,60,30,0,331,482,1,0,0,0,332,333,3,58,
29,0,333,334,5,40,0,0,334,336,1,0,0,0,335,332,1,0,0,0,335,336,1,0,0,0,336,
337,1,0,0,0,337,339,3,58,29,0,338,335,1,0,0,0,338,339,1,0,0,0,339,340,1,
0,0,0,340,341,5,39,0,0,341,342,3,58,29,0,342,343,5,40,0,0,343,344,3,58,29,
0,344,345,5,40,0,0,345,346,3,58,29,0,346,347,5,40,0,0,347,348,3,60,30,0,
348,482,1,0,0,0,349,350,3,58,29,0,350,351,5,40,0,0,351,353,1,0,0,0,352,349,
1,0,0,0,352,353,1,0,0,0,353,354,1,0,0,0,354,355,3,58,29,0,355,356,5,40,0,
0,356,358,1,0,0,0,357,352,1,0,0,0,357,358,1,0,0,0,358,359,1,0,0,0,359,361,
3,58,29,0,360,357,1,0,0,0,360,361,1,0,0,0,361,362,1,0,0,0,362,363,5,39,0,
0,363,364,3,58,29,0,364,365,5,40,0,0,365,366,3,58,29,0,366,367,5,40,0,0,
367,368,3,60,30,0,368,482,1,0,0,0,369,370,3,58,29,0,370,371,5,40,0,0,371,
373,1,0,0,0,372,369,1,0,0,0,372,373,1,0,0,0,373,374,1,0,0,0,374,375,3,58,
29,0,375,376,5,40,0,0,376,378,1,0,0,0,377,372,1,0,0,0,377,378,1,0,0,0,378,
379,1,0,0,0,379,380,3,58,29,0,380,381,5,40,0,0,381,383,1,0,0,0,382,377,1,
0,0,0,382,383,1,0,0,0,383,384,1,0,0,0,384,386,3,58,29,0,385,382,1,0,0,0,
385,386,1,0,0,0,386,387,1,0,0,0,387,388,5,39,0,0,388,389,3,58,29,0,389,390,
5,40,0,0,390,391,3,60,30,0,391,482,1,0,0,0,392,393,3,58,29,0,393,394,5,40,
0,0,394,396,1,0,0,0,395,392,1,0,0,0,395,396,1,0,0,0,396,397,1,0,0,0,397,
398,3,58,29,0,398,399,5,40,0,0,399,401,1,0,0,0,400,395,1,0,0,0,400,401,1,
0,0,0,401,402,1,0,0,0,402,403,3,58,29,0,403,404,5,40,0,0,404,406,1,0,0,0,
405,400,1,0,0,0,405,406,1,0,0,0,406,407,1,0,0,0,407,408,3,58,29,0,408,409,
5,40,0,0,409,411,1,0,0,0,410,405,1,0,0,0,410,411,1,0,0,0,411,412,1,0,0,0,
412,414,3,58,29,0,413,410,1,0,0,0,413,414,1,0,0,0,414,415,1,0,0,0,415,416,
5,39,0,0,416,482,3,60,30,0,417,418,3,58,29,0,418,419,5,40,0,0,419,421,1,
0,0,0,420,417,1,0,0,0,420,421,1,0,0,0,421,422,1,0,0,0,422,423,3,58,29,0,
423,424,5,40,0,0,424,426,1,0,0,0,425,420,1,0,0,0,425,426,1,0,0,0,426,427,
1,0,0,0,427,428,3,58,29,0,428,429,5,40,0,0,429,431,1,0,0,0,430,425,1,0,0,
0,430,431,1,0,0,0,431,432,1,0,0,0,432,433,3,58,29,0,433,434,5,40,0,0,434,
436,1,0,0,0,435,430,1,0,0,0,435,436,1,0,0,0,436,437,1,0,0,0,437,438,3,58,
29,0,438,439,5,40,0,0,439,441,1,0,0,0,440,435,1,0,0,0,440,441,1,0,0,0,441,
442,1,0,0,0,442,444,3,58,29,0,443,440,1,0,0,0,443,444,1,0,0,0,444,445,1,
0,0,0,445,446,5,39,0,0,446,482,3,58,29,0,447,448,3,58,29,0,448,449,5,40,
0,0,449,451,1,0,0,0,450,447,1,0,0,0,450,451,1,0,0,0,451,452,1,0,0,0,452,
453,3,58,29,0,453,454,5,40,0,0,454,456,1,0,0,0,455,450,1,0,0,0,455,456,1,
0,0,0,456,457,1,0,0,0,457,458,3,58,29,0,458,459,5,40,0,0,459,461,1,0,0,0,
460,455,1,0,0,0,460,461,1,0,0,0,461,462,1,0,0,0,462,463,3,58,29,0,463,464,
5,40,0,0,464,466,1,0,0,0,465,460,1,0,0,0,465,466,1,0,0,0,466,467,1,0,0,0,
467,468,3,58,29,0,468,469,5,40,0,0,469,471,1,0,0,0,470,465,1,0,0,0,470,471,
1,0,0,0,471,472,1,0,0,0,472,473,3,58,29,0,473,474,5,40,0,0,474,476,1,0,0,
0,475,470,1,0,0,0,475,476,1,0,0,0,476,477,1,0,0,0,477,479,3,58,29,0,478,
475,1,0,0,0,478,479,1,0,0,0,479,480,1,0,0,0,480,482,5,39,0,0,481,291,1,0,
0,0,481,305,1,0,0,0,481,319,1,0,0,0,481,338,1,0,0,0,481,360,1,0,0,0,481,
385,1,0,0,0,481,413,1,0,0,0,481,443,1,0,0,0,481,478,1,0,0,0,482,57,1,0,0,
0,483,484,3,78,39,0,484,485,3,78,39,0,485,486,3,78,39,0,486,487,3,78,39,
0,487,497,1,0,0,0,488,489,3,78,39,0,489,490,3,78,39,0,490,491,3,78,39,0,
491,497,1,0,0,0,492,493,3,78,39,0,493,494,3,78,39,0,494,497,1,0,0,0,495,
497,3,78,39,0,496,483,1,0,0,0,496,488,1,0,0,0,496,492,1,0,0,0,496,495,1,
0,0,0,497,59,1,0,0,0,498,499,3,58,29,0,499,500,5,40,0,0,500,501,3,58,29,
0,501,504,1,0,0,0,502,504,3,62,31,0,503,498,1,0,0,0,503,502,1,0,0,0,504,
61,1,0,0,0,505,506,3,64,32,0,506,507,5,41,0,0,507,508,3,64,32,0,508,509,
5,41,0,0,509,510,3,64,32,0,510,511,5,41,0,0,511,512,3,64,32,0,512,63,1,0,
0,0,513,528,3,80,40,0,514,515,3,82,41,0,515,516,3,80,40,0,516,528,1,0,0,
0,517,518,5,4,0,0,518,519,3,80,40,0,519,520,3,80,40,0,520,528,1,0,0,0,521,
522,5,5,0,0,522,523,7,5,0,0,523,528,3,80,40,0,524,525,5,5,0,0,525,526,5,
8,0,0,526,528,7,6,0,0,527,513,1,0,0,0,527,514,1,0,0,0,527,517,1,0,0,0,527,
521,1,0,0,0,527,524,1,0,0,0,528,65,1,0,0,0,529,530,5,42,0,0,530,531,3,78,
39,0,531,532,3,78,39,0,532,67,1,0,0,0,533,537,3,76,38,0,534,537,3,80,40,
0,535,537,7,7,0,0,536,533,1,0,0,0,536,534,1,0,0,0,536,535,1,0,0,0,537,69,
1,0,0,0,538,541,3,72,36,0,539,541,3,74,37,0,540,538,1,0,0,0,540,539,1,0,
0,0,541,71,1,0,0,0,542,543,7,8,0,0,543,73,1,0,0,0,544,545,7,9,0,0,545,75,
1,0,0,0,546,547,7,10,0,0,547,77,1,0,0,0,548,551,3,80,40,0,549,551,7,11,0,
0,550,548,1,0,0,0,550,549,1,0,0,0,551,79,1,0,0,0,552,555,5,3,0,0,553,555,
3,82,41,0,554,552,1,0,0,0,554,553,1,0,0,0,555,81,1,0,0,0,556,557,7,12,0,
0,557,83,1,0,0,0,74,92,96,105,109,116,121,125,134,139,144,150,152,158,163,
165,173,179,188,191,198,206,214,220,226,228,234,238,240,245,247,253,259,
261,267,273,281,287,289,319,335,338,352,357,360,372,377,382,385,395,400,
405,410,413,420,425,430,435,440,443,450,455,460,465,470,475,478,481,496,
503,527,536,540,550,554];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class IRIParser extends antlr4.Parser {

    static grammarFileName = "IRI.g4";
    static literalNames = [ null, null, null, "'0'", "'1'", "'2'", "'3'", 
                            "'4'", "'5'", "'6'", "'7'", "'8'", "'9'", null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'::'", "':'", "'.'", "'%'", "'-'", "'~'", 
                            "'_'", "'!'", "'$'", "'&'", "'''", "'('", "')'", 
                            "'*'", "'+'", "','", "';'", "'='", "'//'", "'/'", 
                            "'?'", "'#'", "'['", "']'", "'@'" ];
    static symbolicNames = [ null, "UCSCHAR", "IPRIVATE", "D0", "D1", "D2", 
                             "D3", "D4", "D5", "D6", "D7", "D8", "D9", "A", 
                             "B", "C", "D", "E", "F", "G", "H", "I", "J", 
                             "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
                             "T", "U", "V", "W", "X", "Y", "Z", "COL2", 
                             "COL", "DOT", "PERCENT", "HYPHEN", "TILDE", 
                             "USCORE", "EXCL", "DOLLAR", "AMP", "SQUOTE", 
                             "OPAREN", "CPAREN", "STAR", "PLUS", "COMMA", 
                             "SCOL", "EQUALS", "FSLASH2", "FSLASH", "QMARK", 
                             "HASH", "OBRACK", "CBRACK", "AT" ];
    static ruleNames = [ "parse", "iri", "ihier_part", "iri_reference", 
                         "absolute_iri", "irelative_ref", "irelative_part", 
                         "iauthority", "iuserinfo", "ihost", "ireg_name", 
                         "ipath", "ipath_abempty", "ipath_absolute", "ipath_noscheme", 
                         "ipath_rootless", "ipath_empty", "isegment", "isegment_nz", 
                         "isegment_nz_nc", "ipchar", "iquery", "ifragment", 
                         "iunreserved", "scheme", "port", "ip_literal", 
                         "ip_v_future", "ip_v6_address", "h16", "ls32", 
                         "ip_v4_address", "dec_octet", "pct_encoded", "unreserved", 
                         "reserved", "gen_delims", "sub_delims", "alpha", 
                         "hexdig", "digit", "non_zero_digit" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = IRIParser.ruleNames;
        this.literalNames = IRIParser.literalNames;
        this.symbolicNames = IRIParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, IRIParser.RULE_parse);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.iri();
	        this.state = 85;
	        this.match(IRIParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	iri() {
	    let localctx = new IriContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, IRIParser.RULE_iri);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.scheme();
	        this.state = 88;
	        this.match(IRIParser.COL);
	        this.state = 89;
	        this.ihier_part();
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===IRIParser.QMARK) {
	            this.state = 90;
	            this.match(IRIParser.QMARK);
	            this.state = 91;
	            this.iquery();
	        }

	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===IRIParser.HASH) {
	            this.state = 94;
	            this.match(IRIParser.HASH);
	            this.state = 95;
	            this.ifragment();
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



	ihier_part() {
	    let localctx = new Ihier_partContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, IRIParser.RULE_ihier_part);
	    try {
	        this.state = 105;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case IRIParser.FSLASH2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 98;
	            this.match(IRIParser.FSLASH2);
	            this.state = 99;
	            this.iauthority();
	            this.state = 100;
	            this.ipath_abempty();
	            break;
	        case IRIParser.FSLASH:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 102;
	            this.ipath_absolute();
	            break;
	        case IRIParser.UCSCHAR:
	        case IRIParser.D0:
	        case IRIParser.D1:
	        case IRIParser.D2:
	        case IRIParser.D3:
	        case IRIParser.D4:
	        case IRIParser.D5:
	        case IRIParser.D6:
	        case IRIParser.D7:
	        case IRIParser.D8:
	        case IRIParser.D9:
	        case IRIParser.A:
	        case IRIParser.B:
	        case IRIParser.C:
	        case IRIParser.D:
	        case IRIParser.E:
	        case IRIParser.F:
	        case IRIParser.G:
	        case IRIParser.H:
	        case IRIParser.I:
	        case IRIParser.J:
	        case IRIParser.K:
	        case IRIParser.L:
	        case IRIParser.M:
	        case IRIParser.N:
	        case IRIParser.O:
	        case IRIParser.P:
	        case IRIParser.Q:
	        case IRIParser.R:
	        case IRIParser.S:
	        case IRIParser.T:
	        case IRIParser.U:
	        case IRIParser.V:
	        case IRIParser.W:
	        case IRIParser.X:
	        case IRIParser.Y:
	        case IRIParser.Z:
	        case IRIParser.COL:
	        case IRIParser.DOT:
	        case IRIParser.PERCENT:
	        case IRIParser.HYPHEN:
	        case IRIParser.TILDE:
	        case IRIParser.USCORE:
	        case IRIParser.EXCL:
	        case IRIParser.DOLLAR:
	        case IRIParser.AMP:
	        case IRIParser.SQUOTE:
	        case IRIParser.OPAREN:
	        case IRIParser.CPAREN:
	        case IRIParser.STAR:
	        case IRIParser.PLUS:
	        case IRIParser.COMMA:
	        case IRIParser.SCOL:
	        case IRIParser.EQUALS:
	        case IRIParser.AT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 103;
	            this.ipath_rootless();
	            break;
	        case IRIParser.EOF:
	        case IRIParser.QMARK:
	        case IRIParser.HASH:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 104;
	            this.ipath_empty();
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



	iri_reference() {
	    let localctx = new Iri_referenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, IRIParser.RULE_iri_reference);
	    try {
	        this.state = 109;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 107;
	            this.iri();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 108;
	            this.irelative_ref();
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



	absolute_iri() {
	    let localctx = new Absolute_iriContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, IRIParser.RULE_absolute_iri);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.scheme();
	        this.state = 112;
	        this.match(IRIParser.COL);
	        this.state = 113;
	        this.ihier_part();
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===IRIParser.QMARK) {
	            this.state = 114;
	            this.match(IRIParser.QMARK);
	            this.state = 115;
	            this.iquery();
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



	irelative_ref() {
	    let localctx = new Irelative_refContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, IRIParser.RULE_irelative_ref);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.irelative_part();
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===IRIParser.QMARK) {
	            this.state = 119;
	            this.match(IRIParser.QMARK);
	            this.state = 120;
	            this.iquery();
	        }

	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===IRIParser.HASH) {
	            this.state = 123;
	            this.match(IRIParser.HASH);
	            this.state = 124;
	            this.ifragment();
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



	irelative_part() {
	    let localctx = new Irelative_partContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, IRIParser.RULE_irelative_part);
	    try {
	        this.state = 134;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case IRIParser.FSLASH2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 127;
	            this.match(IRIParser.FSLASH2);
	            this.state = 128;
	            this.iauthority();
	            this.state = 129;
	            this.ipath_abempty();
	            break;
	        case IRIParser.FSLASH:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 131;
	            this.ipath_absolute();
	            break;
	        case IRIParser.UCSCHAR:
	        case IRIParser.D0:
	        case IRIParser.D1:
	        case IRIParser.D2:
	        case IRIParser.D3:
	        case IRIParser.D4:
	        case IRIParser.D5:
	        case IRIParser.D6:
	        case IRIParser.D7:
	        case IRIParser.D8:
	        case IRIParser.D9:
	        case IRIParser.A:
	        case IRIParser.B:
	        case IRIParser.C:
	        case IRIParser.D:
	        case IRIParser.E:
	        case IRIParser.F:
	        case IRIParser.G:
	        case IRIParser.H:
	        case IRIParser.I:
	        case IRIParser.J:
	        case IRIParser.K:
	        case IRIParser.L:
	        case IRIParser.M:
	        case IRIParser.N:
	        case IRIParser.O:
	        case IRIParser.P:
	        case IRIParser.Q:
	        case IRIParser.R:
	        case IRIParser.S:
	        case IRIParser.T:
	        case IRIParser.U:
	        case IRIParser.V:
	        case IRIParser.W:
	        case IRIParser.X:
	        case IRIParser.Y:
	        case IRIParser.Z:
	        case IRIParser.DOT:
	        case IRIParser.PERCENT:
	        case IRIParser.HYPHEN:
	        case IRIParser.TILDE:
	        case IRIParser.USCORE:
	        case IRIParser.EXCL:
	        case IRIParser.DOLLAR:
	        case IRIParser.AMP:
	        case IRIParser.SQUOTE:
	        case IRIParser.OPAREN:
	        case IRIParser.CPAREN:
	        case IRIParser.STAR:
	        case IRIParser.PLUS:
	        case IRIParser.COMMA:
	        case IRIParser.SCOL:
	        case IRIParser.EQUALS:
	        case IRIParser.AT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 132;
	            this.ipath_noscheme();
	            break;
	        case IRIParser.EOF:
	        case IRIParser.QMARK:
	        case IRIParser.HASH:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 133;
	            this.ipath_empty();
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



	iauthority() {
	    let localctx = new IauthorityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, IRIParser.RULE_iauthority);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 136;
	            this.iuserinfo();
	            this.state = 137;
	            this.match(IRIParser.AT);

	        }
	        this.state = 141;
	        this.ihost();
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===IRIParser.COL) {
	            this.state = 142;
	            this.match(IRIParser.COL);
	            this.state = 143;
	            this.port();
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



	iuserinfo() {
	    let localctx = new IuserinfoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, IRIParser.RULE_iuserinfo);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)))) !== 0)) {
	            this.state = 150;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case IRIParser.UCSCHAR:
	            case IRIParser.D0:
	            case IRIParser.D1:
	            case IRIParser.D2:
	            case IRIParser.D3:
	            case IRIParser.D4:
	            case IRIParser.D5:
	            case IRIParser.D6:
	            case IRIParser.D7:
	            case IRIParser.D8:
	            case IRIParser.D9:
	            case IRIParser.A:
	            case IRIParser.B:
	            case IRIParser.C:
	            case IRIParser.D:
	            case IRIParser.E:
	            case IRIParser.F:
	            case IRIParser.G:
	            case IRIParser.H:
	            case IRIParser.I:
	            case IRIParser.J:
	            case IRIParser.K:
	            case IRIParser.L:
	            case IRIParser.M:
	            case IRIParser.N:
	            case IRIParser.O:
	            case IRIParser.P:
	            case IRIParser.Q:
	            case IRIParser.R:
	            case IRIParser.S:
	            case IRIParser.T:
	            case IRIParser.U:
	            case IRIParser.V:
	            case IRIParser.W:
	            case IRIParser.X:
	            case IRIParser.Y:
	            case IRIParser.Z:
	            case IRIParser.DOT:
	            case IRIParser.HYPHEN:
	            case IRIParser.TILDE:
	            case IRIParser.USCORE:
	                this.state = 146;
	                this.iunreserved();
	                break;
	            case IRIParser.PERCENT:
	                this.state = 147;
	                this.pct_encoded();
	                break;
	            case IRIParser.EXCL:
	            case IRIParser.DOLLAR:
	            case IRIParser.AMP:
	            case IRIParser.SQUOTE:
	            case IRIParser.OPAREN:
	            case IRIParser.CPAREN:
	            case IRIParser.STAR:
	            case IRIParser.PLUS:
	            case IRIParser.COMMA:
	            case IRIParser.SCOL:
	            case IRIParser.EQUALS:
	                this.state = 148;
	                this.sub_delims();
	                break;
	            case IRIParser.COL:
	                this.state = 149;
	                this.match(IRIParser.COL);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
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



	ihost() {
	    let localctx = new IhostContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, IRIParser.RULE_ihost);
	    try {
	        this.state = 158;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 155;
	            this.ip_literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 156;
	            this.ip_v4_address();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 157;
	            this.ireg_name();
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



	ireg_name() {
	    let localctx = new Ireg_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, IRIParser.RULE_ireg_name);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)))) !== 0)) {
	            this.state = 163;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case IRIParser.UCSCHAR:
	            case IRIParser.D0:
	            case IRIParser.D1:
	            case IRIParser.D2:
	            case IRIParser.D3:
	            case IRIParser.D4:
	            case IRIParser.D5:
	            case IRIParser.D6:
	            case IRIParser.D7:
	            case IRIParser.D8:
	            case IRIParser.D9:
	            case IRIParser.A:
	            case IRIParser.B:
	            case IRIParser.C:
	            case IRIParser.D:
	            case IRIParser.E:
	            case IRIParser.F:
	            case IRIParser.G:
	            case IRIParser.H:
	            case IRIParser.I:
	            case IRIParser.J:
	            case IRIParser.K:
	            case IRIParser.L:
	            case IRIParser.M:
	            case IRIParser.N:
	            case IRIParser.O:
	            case IRIParser.P:
	            case IRIParser.Q:
	            case IRIParser.R:
	            case IRIParser.S:
	            case IRIParser.T:
	            case IRIParser.U:
	            case IRIParser.V:
	            case IRIParser.W:
	            case IRIParser.X:
	            case IRIParser.Y:
	            case IRIParser.Z:
	            case IRIParser.DOT:
	            case IRIParser.HYPHEN:
	            case IRIParser.TILDE:
	            case IRIParser.USCORE:
	                this.state = 160;
	                this.iunreserved();
	                break;
	            case IRIParser.PERCENT:
	                this.state = 161;
	                this.pct_encoded();
	                break;
	            case IRIParser.EXCL:
	            case IRIParser.DOLLAR:
	            case IRIParser.AMP:
	            case IRIParser.SQUOTE:
	            case IRIParser.OPAREN:
	            case IRIParser.CPAREN:
	            case IRIParser.STAR:
	            case IRIParser.PLUS:
	            case IRIParser.COMMA:
	            case IRIParser.SCOL:
	            case IRIParser.EQUALS:
	                this.state = 162;
	                this.sub_delims();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 167;
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



	ipath() {
	    let localctx = new IpathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, IRIParser.RULE_ipath);
	    try {
	        this.state = 173;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 168;
	            this.ipath_abempty();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 169;
	            this.ipath_absolute();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 170;
	            this.ipath_noscheme();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 171;
	            this.ipath_rootless();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 172;
	            this.ipath_empty();
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



	ipath_abempty() {
	    let localctx = new Ipath_abemptyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, IRIParser.RULE_ipath_abempty);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===IRIParser.FSLASH) {
	            this.state = 175;
	            this.match(IRIParser.FSLASH);
	            this.state = 176;
	            this.isegment();
	            this.state = 181;
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



	ipath_absolute() {
	    let localctx = new Ipath_absoluteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, IRIParser.RULE_ipath_absolute);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(IRIParser.FSLASH);
	        this.state = 191;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.AT - 32)))) !== 0)) {
	            this.state = 183;
	            this.isegment_nz();
	            this.state = 188;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===IRIParser.FSLASH) {
	                this.state = 184;
	                this.match(IRIParser.FSLASH);
	                this.state = 185;
	                this.isegment();
	                this.state = 190;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
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



	ipath_noscheme() {
	    let localctx = new Ipath_noschemeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, IRIParser.RULE_ipath_noscheme);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.isegment_nz_nc();
	        this.state = 198;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===IRIParser.FSLASH) {
	            this.state = 194;
	            this.match(IRIParser.FSLASH);
	            this.state = 195;
	            this.isegment();
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



	ipath_rootless() {
	    let localctx = new Ipath_rootlessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, IRIParser.RULE_ipath_rootless);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.isegment_nz();
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===IRIParser.FSLASH) {
	            this.state = 202;
	            this.match(IRIParser.FSLASH);
	            this.state = 203;
	            this.isegment();
	            this.state = 208;
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



	ipath_empty() {
	    let localctx = new Ipath_emptyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, IRIParser.RULE_ipath_empty);
	    try {
	        this.enterOuterAlt(localctx, 1);

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	isegment() {
	    let localctx = new IsegmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, IRIParser.RULE_isegment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.AT - 32)))) !== 0)) {
	            this.state = 211;
	            this.ipchar();
	            this.state = 216;
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



	isegment_nz() {
	    let localctx = new Isegment_nzContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, IRIParser.RULE_isegment_nz);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 217;
	            this.ipchar();
	            this.state = 220; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.AT - 32)))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	isegment_nz_nc() {
	    let localctx = new Isegment_nz_ncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, IRIParser.RULE_isegment_nz_nc);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 226;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case IRIParser.UCSCHAR:
	            case IRIParser.D0:
	            case IRIParser.D1:
	            case IRIParser.D2:
	            case IRIParser.D3:
	            case IRIParser.D4:
	            case IRIParser.D5:
	            case IRIParser.D6:
	            case IRIParser.D7:
	            case IRIParser.D8:
	            case IRIParser.D9:
	            case IRIParser.A:
	            case IRIParser.B:
	            case IRIParser.C:
	            case IRIParser.D:
	            case IRIParser.E:
	            case IRIParser.F:
	            case IRIParser.G:
	            case IRIParser.H:
	            case IRIParser.I:
	            case IRIParser.J:
	            case IRIParser.K:
	            case IRIParser.L:
	            case IRIParser.M:
	            case IRIParser.N:
	            case IRIParser.O:
	            case IRIParser.P:
	            case IRIParser.Q:
	            case IRIParser.R:
	            case IRIParser.S:
	            case IRIParser.T:
	            case IRIParser.U:
	            case IRIParser.V:
	            case IRIParser.W:
	            case IRIParser.X:
	            case IRIParser.Y:
	            case IRIParser.Z:
	            case IRIParser.DOT:
	            case IRIParser.HYPHEN:
	            case IRIParser.TILDE:
	            case IRIParser.USCORE:
	                this.state = 222;
	                this.iunreserved();
	                break;
	            case IRIParser.PERCENT:
	                this.state = 223;
	                this.pct_encoded();
	                break;
	            case IRIParser.EXCL:
	            case IRIParser.DOLLAR:
	            case IRIParser.AMP:
	            case IRIParser.SQUOTE:
	            case IRIParser.OPAREN:
	            case IRIParser.CPAREN:
	            case IRIParser.STAR:
	            case IRIParser.PLUS:
	            case IRIParser.COMMA:
	            case IRIParser.SCOL:
	            case IRIParser.EQUALS:
	                this.state = 224;
	                this.sub_delims();
	                break;
	            case IRIParser.AT:
	                this.state = 225;
	                this.match(IRIParser.AT);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 228; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.AT - 32)))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ipchar() {
	    let localctx = new IpcharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, IRIParser.RULE_ipchar);
	    var _la = 0; // Token type
	    try {
	        this.state = 234;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case IRIParser.UCSCHAR:
	        case IRIParser.D0:
	        case IRIParser.D1:
	        case IRIParser.D2:
	        case IRIParser.D3:
	        case IRIParser.D4:
	        case IRIParser.D5:
	        case IRIParser.D6:
	        case IRIParser.D7:
	        case IRIParser.D8:
	        case IRIParser.D9:
	        case IRIParser.A:
	        case IRIParser.B:
	        case IRIParser.C:
	        case IRIParser.D:
	        case IRIParser.E:
	        case IRIParser.F:
	        case IRIParser.G:
	        case IRIParser.H:
	        case IRIParser.I:
	        case IRIParser.J:
	        case IRIParser.K:
	        case IRIParser.L:
	        case IRIParser.M:
	        case IRIParser.N:
	        case IRIParser.O:
	        case IRIParser.P:
	        case IRIParser.Q:
	        case IRIParser.R:
	        case IRIParser.S:
	        case IRIParser.T:
	        case IRIParser.U:
	        case IRIParser.V:
	        case IRIParser.W:
	        case IRIParser.X:
	        case IRIParser.Y:
	        case IRIParser.Z:
	        case IRIParser.DOT:
	        case IRIParser.HYPHEN:
	        case IRIParser.TILDE:
	        case IRIParser.USCORE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 230;
	            this.iunreserved();
	            break;
	        case IRIParser.PERCENT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 231;
	            this.pct_encoded();
	            break;
	        case IRIParser.EXCL:
	        case IRIParser.DOLLAR:
	        case IRIParser.AMP:
	        case IRIParser.SQUOTE:
	        case IRIParser.OPAREN:
	        case IRIParser.CPAREN:
	        case IRIParser.STAR:
	        case IRIParser.PLUS:
	        case IRIParser.COMMA:
	        case IRIParser.SCOL:
	        case IRIParser.EQUALS:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 232;
	            this.sub_delims();
	            break;
	        case IRIParser.COL:
	        case IRIParser.AT:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 233;
	            _la = this._input.LA(1);
	            if(!(_la===IRIParser.COL || _la===IRIParser.AT)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
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



	iquery() {
	    let localctx = new IqueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, IRIParser.RULE_iquery);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.IPRIVATE) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.FSLASH - 32)) | (1 << (IRIParser.QMARK - 32)) | (1 << (IRIParser.AT - 32)))) !== 0)) {
	            this.state = 238;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case IRIParser.UCSCHAR:
	            case IRIParser.D0:
	            case IRIParser.D1:
	            case IRIParser.D2:
	            case IRIParser.D3:
	            case IRIParser.D4:
	            case IRIParser.D5:
	            case IRIParser.D6:
	            case IRIParser.D7:
	            case IRIParser.D8:
	            case IRIParser.D9:
	            case IRIParser.A:
	            case IRIParser.B:
	            case IRIParser.C:
	            case IRIParser.D:
	            case IRIParser.E:
	            case IRIParser.F:
	            case IRIParser.G:
	            case IRIParser.H:
	            case IRIParser.I:
	            case IRIParser.J:
	            case IRIParser.K:
	            case IRIParser.L:
	            case IRIParser.M:
	            case IRIParser.N:
	            case IRIParser.O:
	            case IRIParser.P:
	            case IRIParser.Q:
	            case IRIParser.R:
	            case IRIParser.S:
	            case IRIParser.T:
	            case IRIParser.U:
	            case IRIParser.V:
	            case IRIParser.W:
	            case IRIParser.X:
	            case IRIParser.Y:
	            case IRIParser.Z:
	            case IRIParser.COL:
	            case IRIParser.DOT:
	            case IRIParser.PERCENT:
	            case IRIParser.HYPHEN:
	            case IRIParser.TILDE:
	            case IRIParser.USCORE:
	            case IRIParser.EXCL:
	            case IRIParser.DOLLAR:
	            case IRIParser.AMP:
	            case IRIParser.SQUOTE:
	            case IRIParser.OPAREN:
	            case IRIParser.CPAREN:
	            case IRIParser.STAR:
	            case IRIParser.PLUS:
	            case IRIParser.COMMA:
	            case IRIParser.SCOL:
	            case IRIParser.EQUALS:
	            case IRIParser.AT:
	                this.state = 236;
	                this.ipchar();
	                break;
	            case IRIParser.IPRIVATE:
	            case IRIParser.FSLASH:
	            case IRIParser.QMARK:
	                this.state = 237;
	                _la = this._input.LA(1);
	                if(!(_la===IRIParser.IPRIVATE || _la===IRIParser.FSLASH || _la===IRIParser.QMARK)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 242;
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



	ifragment() {
	    let localctx = new IfragmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, IRIParser.RULE_ifragment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.FSLASH - 32)) | (1 << (IRIParser.QMARK - 32)) | (1 << (IRIParser.AT - 32)))) !== 0)) {
	            this.state = 245;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case IRIParser.UCSCHAR:
	            case IRIParser.D0:
	            case IRIParser.D1:
	            case IRIParser.D2:
	            case IRIParser.D3:
	            case IRIParser.D4:
	            case IRIParser.D5:
	            case IRIParser.D6:
	            case IRIParser.D7:
	            case IRIParser.D8:
	            case IRIParser.D9:
	            case IRIParser.A:
	            case IRIParser.B:
	            case IRIParser.C:
	            case IRIParser.D:
	            case IRIParser.E:
	            case IRIParser.F:
	            case IRIParser.G:
	            case IRIParser.H:
	            case IRIParser.I:
	            case IRIParser.J:
	            case IRIParser.K:
	            case IRIParser.L:
	            case IRIParser.M:
	            case IRIParser.N:
	            case IRIParser.O:
	            case IRIParser.P:
	            case IRIParser.Q:
	            case IRIParser.R:
	            case IRIParser.S:
	            case IRIParser.T:
	            case IRIParser.U:
	            case IRIParser.V:
	            case IRIParser.W:
	            case IRIParser.X:
	            case IRIParser.Y:
	            case IRIParser.Z:
	            case IRIParser.COL:
	            case IRIParser.DOT:
	            case IRIParser.PERCENT:
	            case IRIParser.HYPHEN:
	            case IRIParser.TILDE:
	            case IRIParser.USCORE:
	            case IRIParser.EXCL:
	            case IRIParser.DOLLAR:
	            case IRIParser.AMP:
	            case IRIParser.SQUOTE:
	            case IRIParser.OPAREN:
	            case IRIParser.CPAREN:
	            case IRIParser.STAR:
	            case IRIParser.PLUS:
	            case IRIParser.COMMA:
	            case IRIParser.SCOL:
	            case IRIParser.EQUALS:
	            case IRIParser.AT:
	                this.state = 243;
	                this.ipchar();
	                break;
	            case IRIParser.FSLASH:
	            case IRIParser.QMARK:
	                this.state = 244;
	                _la = this._input.LA(1);
	                if(!(_la===IRIParser.FSLASH || _la===IRIParser.QMARK)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 249;
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



	iunreserved() {
	    let localctx = new IunreservedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, IRIParser.RULE_iunreserved);
	    var _la = 0; // Token type
	    try {
	        this.state = 253;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case IRIParser.A:
	        case IRIParser.B:
	        case IRIParser.C:
	        case IRIParser.D:
	        case IRIParser.E:
	        case IRIParser.F:
	        case IRIParser.G:
	        case IRIParser.H:
	        case IRIParser.I:
	        case IRIParser.J:
	        case IRIParser.K:
	        case IRIParser.L:
	        case IRIParser.M:
	        case IRIParser.N:
	        case IRIParser.O:
	        case IRIParser.P:
	        case IRIParser.Q:
	        case IRIParser.R:
	        case IRIParser.S:
	        case IRIParser.T:
	        case IRIParser.U:
	        case IRIParser.V:
	        case IRIParser.W:
	        case IRIParser.X:
	        case IRIParser.Y:
	        case IRIParser.Z:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 250;
	            this.alpha();
	            break;
	        case IRIParser.D0:
	        case IRIParser.D1:
	        case IRIParser.D2:
	        case IRIParser.D3:
	        case IRIParser.D4:
	        case IRIParser.D5:
	        case IRIParser.D6:
	        case IRIParser.D7:
	        case IRIParser.D8:
	        case IRIParser.D9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 251;
	            this.digit();
	            break;
	        case IRIParser.UCSCHAR:
	        case IRIParser.DOT:
	        case IRIParser.HYPHEN:
	        case IRIParser.TILDE:
	        case IRIParser.USCORE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 252;
	            _la = this._input.LA(1);
	            if(!(_la===IRIParser.UCSCHAR || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (IRIParser.DOT - 41)) | (1 << (IRIParser.HYPHEN - 41)) | (1 << (IRIParser.TILDE - 41)) | (1 << (IRIParser.USCORE - 41)))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
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



	scheme() {
	    let localctx = new SchemeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, IRIParser.RULE_scheme);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 255;
	        this.alpha();
	        this.state = 261;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.PLUS - 32)))) !== 0)) {
	            this.state = 259;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case IRIParser.A:
	            case IRIParser.B:
	            case IRIParser.C:
	            case IRIParser.D:
	            case IRIParser.E:
	            case IRIParser.F:
	            case IRIParser.G:
	            case IRIParser.H:
	            case IRIParser.I:
	            case IRIParser.J:
	            case IRIParser.K:
	            case IRIParser.L:
	            case IRIParser.M:
	            case IRIParser.N:
	            case IRIParser.O:
	            case IRIParser.P:
	            case IRIParser.Q:
	            case IRIParser.R:
	            case IRIParser.S:
	            case IRIParser.T:
	            case IRIParser.U:
	            case IRIParser.V:
	            case IRIParser.W:
	            case IRIParser.X:
	            case IRIParser.Y:
	            case IRIParser.Z:
	                this.state = 256;
	                this.alpha();
	                break;
	            case IRIParser.D0:
	            case IRIParser.D1:
	            case IRIParser.D2:
	            case IRIParser.D3:
	            case IRIParser.D4:
	            case IRIParser.D5:
	            case IRIParser.D6:
	            case IRIParser.D7:
	            case IRIParser.D8:
	            case IRIParser.D9:
	                this.state = 257;
	                this.digit();
	                break;
	            case IRIParser.DOT:
	            case IRIParser.HYPHEN:
	            case IRIParser.PLUS:
	                this.state = 258;
	                _la = this._input.LA(1);
	                if(!(((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (IRIParser.DOT - 41)) | (1 << (IRIParser.HYPHEN - 41)) | (1 << (IRIParser.PLUS - 41)))) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 263;
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



	port() {
	    let localctx = new PortContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, IRIParser.RULE_port);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9))) !== 0)) {
	            this.state = 264;
	            this.digit();
	            this.state = 269;
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



	ip_literal() {
	    let localctx = new Ip_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, IRIParser.RULE_ip_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.match(IRIParser.OBRACK);
	        this.state = 273;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case IRIParser.D0:
	        case IRIParser.D1:
	        case IRIParser.D2:
	        case IRIParser.D3:
	        case IRIParser.D4:
	        case IRIParser.D5:
	        case IRIParser.D6:
	        case IRIParser.D7:
	        case IRIParser.D8:
	        case IRIParser.D9:
	        case IRIParser.A:
	        case IRIParser.B:
	        case IRIParser.C:
	        case IRIParser.D:
	        case IRIParser.E:
	        case IRIParser.F:
	        case IRIParser.COL2:
	            this.state = 271;
	            this.ip_v6_address();
	            break;
	        case IRIParser.V:
	            this.state = 272;
	            this.ip_v_future();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 275;
	        this.match(IRIParser.CBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ip_v_future() {
	    let localctx = new Ip_v_futureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, IRIParser.RULE_ip_v_future);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.match(IRIParser.V);
	        this.state = 279; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 278;
	            this.hexdig();
	            this.state = 281; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0));
	        this.state = 283;
	        this.match(IRIParser.DOT);
	        this.state = 287; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 287;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case IRIParser.D0:
	            case IRIParser.D1:
	            case IRIParser.D2:
	            case IRIParser.D3:
	            case IRIParser.D4:
	            case IRIParser.D5:
	            case IRIParser.D6:
	            case IRIParser.D7:
	            case IRIParser.D8:
	            case IRIParser.D9:
	            case IRIParser.A:
	            case IRIParser.B:
	            case IRIParser.C:
	            case IRIParser.D:
	            case IRIParser.E:
	            case IRIParser.F:
	            case IRIParser.G:
	            case IRIParser.H:
	            case IRIParser.I:
	            case IRIParser.J:
	            case IRIParser.K:
	            case IRIParser.L:
	            case IRIParser.M:
	            case IRIParser.N:
	            case IRIParser.O:
	            case IRIParser.P:
	            case IRIParser.Q:
	            case IRIParser.R:
	            case IRIParser.S:
	            case IRIParser.T:
	            case IRIParser.U:
	            case IRIParser.V:
	            case IRIParser.W:
	            case IRIParser.X:
	            case IRIParser.Y:
	            case IRIParser.Z:
	            case IRIParser.DOT:
	            case IRIParser.HYPHEN:
	            case IRIParser.TILDE:
	            case IRIParser.USCORE:
	                this.state = 284;
	                this.unreserved();
	                break;
	            case IRIParser.EXCL:
	            case IRIParser.DOLLAR:
	            case IRIParser.AMP:
	            case IRIParser.SQUOTE:
	            case IRIParser.OPAREN:
	            case IRIParser.CPAREN:
	            case IRIParser.STAR:
	            case IRIParser.PLUS:
	            case IRIParser.COMMA:
	            case IRIParser.SCOL:
	            case IRIParser.EQUALS:
	                this.state = 285;
	                this.sub_delims();
	                break;
	            case IRIParser.COL:
	                this.state = 286;
	                this.match(IRIParser.COL);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 289; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ip_v6_address() {
	    let localctx = new Ip_v6_addressContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, IRIParser.RULE_ip_v6_address);
	    var _la = 0; // Token type
	    try {
	        this.state = 481;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,66,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 291;
	            this.h16();
	            this.state = 292;
	            this.match(IRIParser.COL);
	            this.state = 293;
	            this.h16();
	            this.state = 294;
	            this.match(IRIParser.COL);
	            this.state = 295;
	            this.h16();
	            this.state = 296;
	            this.match(IRIParser.COL);
	            this.state = 297;
	            this.h16();
	            this.state = 298;
	            this.match(IRIParser.COL);
	            this.state = 299;
	            this.h16();
	            this.state = 300;
	            this.match(IRIParser.COL);
	            this.state = 301;
	            this.h16();
	            this.state = 302;
	            this.match(IRIParser.COL);
	            this.state = 303;
	            this.ls32();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 305;
	            this.match(IRIParser.COL2);
	            this.state = 306;
	            this.h16();
	            this.state = 307;
	            this.match(IRIParser.COL);
	            this.state = 308;
	            this.h16();
	            this.state = 309;
	            this.match(IRIParser.COL);
	            this.state = 310;
	            this.h16();
	            this.state = 311;
	            this.match(IRIParser.COL);
	            this.state = 312;
	            this.h16();
	            this.state = 313;
	            this.match(IRIParser.COL);
	            this.state = 314;
	            this.h16();
	            this.state = 315;
	            this.match(IRIParser.COL);
	            this.state = 316;
	            this.ls32();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 319;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
	                this.state = 318;
	                this.h16();
	            }

	            this.state = 321;
	            this.match(IRIParser.COL2);
	            this.state = 322;
	            this.h16();
	            this.state = 323;
	            this.match(IRIParser.COL);
	            this.state = 324;
	            this.h16();
	            this.state = 325;
	            this.match(IRIParser.COL);
	            this.state = 326;
	            this.h16();
	            this.state = 327;
	            this.match(IRIParser.COL);
	            this.state = 328;
	            this.h16();
	            this.state = 329;
	            this.match(IRIParser.COL);
	            this.state = 330;
	            this.ls32();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 338;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
	                this.state = 335;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	                if(la_===1) {
	                    this.state = 332;
	                    this.h16();
	                    this.state = 333;
	                    this.match(IRIParser.COL);

	                }
	                this.state = 337;
	                this.h16();
	            }

	            this.state = 340;
	            this.match(IRIParser.COL2);
	            this.state = 341;
	            this.h16();
	            this.state = 342;
	            this.match(IRIParser.COL);
	            this.state = 343;
	            this.h16();
	            this.state = 344;
	            this.match(IRIParser.COL);
	            this.state = 345;
	            this.h16();
	            this.state = 346;
	            this.match(IRIParser.COL);
	            this.state = 347;
	            this.ls32();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 360;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
	                this.state = 357;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	                if(la_===1) {
	                    this.state = 352;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
	                    if(la_===1) {
	                        this.state = 349;
	                        this.h16();
	                        this.state = 350;
	                        this.match(IRIParser.COL);

	                    }
	                    this.state = 354;
	                    this.h16();
	                    this.state = 355;
	                    this.match(IRIParser.COL);

	                }
	                this.state = 359;
	                this.h16();
	            }

	            this.state = 362;
	            this.match(IRIParser.COL2);
	            this.state = 363;
	            this.h16();
	            this.state = 364;
	            this.match(IRIParser.COL);
	            this.state = 365;
	            this.h16();
	            this.state = 366;
	            this.match(IRIParser.COL);
	            this.state = 367;
	            this.ls32();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 385;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
	                this.state = 382;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	                if(la_===1) {
	                    this.state = 377;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
	                    if(la_===1) {
	                        this.state = 372;
	                        this._errHandler.sync(this);
	                        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	                        if(la_===1) {
	                            this.state = 369;
	                            this.h16();
	                            this.state = 370;
	                            this.match(IRIParser.COL);

	                        }
	                        this.state = 374;
	                        this.h16();
	                        this.state = 375;
	                        this.match(IRIParser.COL);

	                    }
	                    this.state = 379;
	                    this.h16();
	                    this.state = 380;
	                    this.match(IRIParser.COL);

	                }
	                this.state = 384;
	                this.h16();
	            }

	            this.state = 387;
	            this.match(IRIParser.COL2);
	            this.state = 388;
	            this.h16();
	            this.state = 389;
	            this.match(IRIParser.COL);
	            this.state = 390;
	            this.ls32();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 413;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
	                this.state = 410;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	                if(la_===1) {
	                    this.state = 405;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	                    if(la_===1) {
	                        this.state = 400;
	                        this._errHandler.sync(this);
	                        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	                        if(la_===1) {
	                            this.state = 395;
	                            this._errHandler.sync(this);
	                            var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	                            if(la_===1) {
	                                this.state = 392;
	                                this.h16();
	                                this.state = 393;
	                                this.match(IRIParser.COL);

	                            }
	                            this.state = 397;
	                            this.h16();
	                            this.state = 398;
	                            this.match(IRIParser.COL);

	                        }
	                        this.state = 402;
	                        this.h16();
	                        this.state = 403;
	                        this.match(IRIParser.COL);

	                    }
	                    this.state = 407;
	                    this.h16();
	                    this.state = 408;
	                    this.match(IRIParser.COL);

	                }
	                this.state = 412;
	                this.h16();
	            }

	            this.state = 415;
	            this.match(IRIParser.COL2);
	            this.state = 416;
	            this.ls32();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 443;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
	                this.state = 440;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,57,this._ctx);
	                if(la_===1) {
	                    this.state = 435;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
	                    if(la_===1) {
	                        this.state = 430;
	                        this._errHandler.sync(this);
	                        var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
	                        if(la_===1) {
	                            this.state = 425;
	                            this._errHandler.sync(this);
	                            var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	                            if(la_===1) {
	                                this.state = 420;
	                                this._errHandler.sync(this);
	                                var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
	                                if(la_===1) {
	                                    this.state = 417;
	                                    this.h16();
	                                    this.state = 418;
	                                    this.match(IRIParser.COL);

	                                }
	                                this.state = 422;
	                                this.h16();
	                                this.state = 423;
	                                this.match(IRIParser.COL);

	                            }
	                            this.state = 427;
	                            this.h16();
	                            this.state = 428;
	                            this.match(IRIParser.COL);

	                        }
	                        this.state = 432;
	                        this.h16();
	                        this.state = 433;
	                        this.match(IRIParser.COL);

	                    }
	                    this.state = 437;
	                    this.h16();
	                    this.state = 438;
	                    this.match(IRIParser.COL);

	                }
	                this.state = 442;
	                this.h16();
	            }

	            this.state = 445;
	            this.match(IRIParser.COL2);
	            this.state = 446;
	            this.h16();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 478;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
	                this.state = 475;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
	                if(la_===1) {
	                    this.state = 470;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
	                    if(la_===1) {
	                        this.state = 465;
	                        this._errHandler.sync(this);
	                        var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
	                        if(la_===1) {
	                            this.state = 460;
	                            this._errHandler.sync(this);
	                            var la_ = this._interp.adaptivePredict(this._input,61,this._ctx);
	                            if(la_===1) {
	                                this.state = 455;
	                                this._errHandler.sync(this);
	                                var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
	                                if(la_===1) {
	                                    this.state = 450;
	                                    this._errHandler.sync(this);
	                                    var la_ = this._interp.adaptivePredict(this._input,59,this._ctx);
	                                    if(la_===1) {
	                                        this.state = 447;
	                                        this.h16();
	                                        this.state = 448;
	                                        this.match(IRIParser.COL);

	                                    }
	                                    this.state = 452;
	                                    this.h16();
	                                    this.state = 453;
	                                    this.match(IRIParser.COL);

	                                }
	                                this.state = 457;
	                                this.h16();
	                                this.state = 458;
	                                this.match(IRIParser.COL);

	                            }
	                            this.state = 462;
	                            this.h16();
	                            this.state = 463;
	                            this.match(IRIParser.COL);

	                        }
	                        this.state = 467;
	                        this.h16();
	                        this.state = 468;
	                        this.match(IRIParser.COL);

	                    }
	                    this.state = 472;
	                    this.h16();
	                    this.state = 473;
	                    this.match(IRIParser.COL);

	                }
	                this.state = 477;
	                this.h16();
	            }

	            this.state = 480;
	            this.match(IRIParser.COL2);
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



	h16() {
	    let localctx = new H16Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, IRIParser.RULE_h16);
	    try {
	        this.state = 496;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,67,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 483;
	            this.hexdig();
	            this.state = 484;
	            this.hexdig();
	            this.state = 485;
	            this.hexdig();
	            this.state = 486;
	            this.hexdig();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 488;
	            this.hexdig();
	            this.state = 489;
	            this.hexdig();
	            this.state = 490;
	            this.hexdig();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 492;
	            this.hexdig();
	            this.state = 493;
	            this.hexdig();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 495;
	            this.hexdig();
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



	ls32() {
	    let localctx = new Ls32Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, IRIParser.RULE_ls32);
	    try {
	        this.state = 503;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,68,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 498;
	            this.h16();
	            this.state = 499;
	            this.match(IRIParser.COL);
	            this.state = 500;
	            this.h16();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 502;
	            this.ip_v4_address();
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



	ip_v4_address() {
	    let localctx = new Ip_v4_addressContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, IRIParser.RULE_ip_v4_address);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 505;
	        this.dec_octet();
	        this.state = 506;
	        this.match(IRIParser.DOT);
	        this.state = 507;
	        this.dec_octet();
	        this.state = 508;
	        this.match(IRIParser.DOT);
	        this.state = 509;
	        this.dec_octet();
	        this.state = 510;
	        this.match(IRIParser.DOT);
	        this.state = 511;
	        this.dec_octet();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dec_octet() {
	    let localctx = new Dec_octetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, IRIParser.RULE_dec_octet);
	    var _la = 0; // Token type
	    try {
	        this.state = 527;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,69,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 513;
	            this.digit();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 514;
	            this.non_zero_digit();
	            this.state = 515;
	            this.digit();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 517;
	            this.match(IRIParser.D1);
	            this.state = 518;
	            this.digit();
	            this.state = 519;
	            this.digit();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 521;
	            this.match(IRIParser.D2);
	            this.state = 522;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 523;
	            this.digit();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 524;
	            this.match(IRIParser.D2);
	            this.state = 525;
	            this.match(IRIParser.D5);
	            this.state = 526;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
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



	pct_encoded() {
	    let localctx = new Pct_encodedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, IRIParser.RULE_pct_encoded);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 529;
	        this.match(IRIParser.PERCENT);
	        this.state = 530;
	        this.hexdig();
	        this.state = 531;
	        this.hexdig();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unreserved() {
	    let localctx = new UnreservedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, IRIParser.RULE_unreserved);
	    var _la = 0; // Token type
	    try {
	        this.state = 536;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case IRIParser.A:
	        case IRIParser.B:
	        case IRIParser.C:
	        case IRIParser.D:
	        case IRIParser.E:
	        case IRIParser.F:
	        case IRIParser.G:
	        case IRIParser.H:
	        case IRIParser.I:
	        case IRIParser.J:
	        case IRIParser.K:
	        case IRIParser.L:
	        case IRIParser.M:
	        case IRIParser.N:
	        case IRIParser.O:
	        case IRIParser.P:
	        case IRIParser.Q:
	        case IRIParser.R:
	        case IRIParser.S:
	        case IRIParser.T:
	        case IRIParser.U:
	        case IRIParser.V:
	        case IRIParser.W:
	        case IRIParser.X:
	        case IRIParser.Y:
	        case IRIParser.Z:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 533;
	            this.alpha();
	            break;
	        case IRIParser.D0:
	        case IRIParser.D1:
	        case IRIParser.D2:
	        case IRIParser.D3:
	        case IRIParser.D4:
	        case IRIParser.D5:
	        case IRIParser.D6:
	        case IRIParser.D7:
	        case IRIParser.D8:
	        case IRIParser.D9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 534;
	            this.digit();
	            break;
	        case IRIParser.DOT:
	        case IRIParser.HYPHEN:
	        case IRIParser.TILDE:
	        case IRIParser.USCORE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 535;
	            _la = this._input.LA(1);
	            if(!(((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (IRIParser.DOT - 41)) | (1 << (IRIParser.HYPHEN - 41)) | (1 << (IRIParser.TILDE - 41)) | (1 << (IRIParser.USCORE - 41)))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
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



	reserved() {
	    let localctx = new ReservedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, IRIParser.RULE_reserved);
	    try {
	        this.state = 540;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case IRIParser.COL:
	        case IRIParser.FSLASH:
	        case IRIParser.QMARK:
	        case IRIParser.HASH:
	        case IRIParser.OBRACK:
	        case IRIParser.CBRACK:
	        case IRIParser.AT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 538;
	            this.gen_delims();
	            break;
	        case IRIParser.EXCL:
	        case IRIParser.DOLLAR:
	        case IRIParser.AMP:
	        case IRIParser.SQUOTE:
	        case IRIParser.OPAREN:
	        case IRIParser.CPAREN:
	        case IRIParser.STAR:
	        case IRIParser.PLUS:
	        case IRIParser.COMMA:
	        case IRIParser.SCOL:
	        case IRIParser.EQUALS:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 539;
	            this.sub_delims();
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



	gen_delims() {
	    let localctx = new Gen_delimsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, IRIParser.RULE_gen_delims);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 542;
	        _la = this._input.LA(1);
	        if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (IRIParser.COL - 40)) | (1 << (IRIParser.FSLASH - 40)) | (1 << (IRIParser.QMARK - 40)) | (1 << (IRIParser.HASH - 40)) | (1 << (IRIParser.OBRACK - 40)) | (1 << (IRIParser.CBRACK - 40)) | (1 << (IRIParser.AT - 40)))) !== 0))) {
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



	sub_delims() {
	    let localctx = new Sub_delimsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, IRIParser.RULE_sub_delims);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 544;
	        _la = this._input.LA(1);
	        if(!(((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (IRIParser.EXCL - 46)) | (1 << (IRIParser.DOLLAR - 46)) | (1 << (IRIParser.AMP - 46)) | (1 << (IRIParser.SQUOTE - 46)) | (1 << (IRIParser.OPAREN - 46)) | (1 << (IRIParser.CPAREN - 46)) | (1 << (IRIParser.STAR - 46)) | (1 << (IRIParser.PLUS - 46)) | (1 << (IRIParser.COMMA - 46)) | (1 << (IRIParser.SCOL - 46)) | (1 << (IRIParser.EQUALS - 46)))) !== 0))) {
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



	alpha() {
	    let localctx = new AlphaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, IRIParser.RULE_alpha);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 546;
	        _la = this._input.LA(1);
	        if(!(((((_la - 13)) & ~0x1f) == 0 && ((1 << (_la - 13)) & ((1 << (IRIParser.A - 13)) | (1 << (IRIParser.B - 13)) | (1 << (IRIParser.C - 13)) | (1 << (IRIParser.D - 13)) | (1 << (IRIParser.E - 13)) | (1 << (IRIParser.F - 13)) | (1 << (IRIParser.G - 13)) | (1 << (IRIParser.H - 13)) | (1 << (IRIParser.I - 13)) | (1 << (IRIParser.J - 13)) | (1 << (IRIParser.K - 13)) | (1 << (IRIParser.L - 13)) | (1 << (IRIParser.M - 13)) | (1 << (IRIParser.N - 13)) | (1 << (IRIParser.O - 13)) | (1 << (IRIParser.P - 13)) | (1 << (IRIParser.Q - 13)) | (1 << (IRIParser.R - 13)) | (1 << (IRIParser.S - 13)) | (1 << (IRIParser.T - 13)) | (1 << (IRIParser.U - 13)) | (1 << (IRIParser.V - 13)) | (1 << (IRIParser.W - 13)) | (1 << (IRIParser.X - 13)) | (1 << (IRIParser.Y - 13)) | (1 << (IRIParser.Z - 13)))) !== 0))) {
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



	hexdig() {
	    let localctx = new HexdigContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, IRIParser.RULE_hexdig);
	    var _la = 0; // Token type
	    try {
	        this.state = 550;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case IRIParser.D0:
	        case IRIParser.D1:
	        case IRIParser.D2:
	        case IRIParser.D3:
	        case IRIParser.D4:
	        case IRIParser.D5:
	        case IRIParser.D6:
	        case IRIParser.D7:
	        case IRIParser.D8:
	        case IRIParser.D9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 548;
	            this.digit();
	            break;
	        case IRIParser.A:
	        case IRIParser.B:
	        case IRIParser.C:
	        case IRIParser.D:
	        case IRIParser.E:
	        case IRIParser.F:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 549;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
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



	digit() {
	    let localctx = new DigitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, IRIParser.RULE_digit);
	    try {
	        this.state = 554;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case IRIParser.D0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 552;
	            this.match(IRIParser.D0);
	            break;
	        case IRIParser.D1:
	        case IRIParser.D2:
	        case IRIParser.D3:
	        case IRIParser.D4:
	        case IRIParser.D5:
	        case IRIParser.D6:
	        case IRIParser.D7:
	        case IRIParser.D8:
	        case IRIParser.D9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 553;
	            this.non_zero_digit();
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



	non_zero_digit() {
	    let localctx = new Non_zero_digitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, IRIParser.RULE_non_zero_digit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 556;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9))) !== 0))) {
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

IRIParser.EOF = antlr4.Token.EOF;
IRIParser.UCSCHAR = 1;
IRIParser.IPRIVATE = 2;
IRIParser.D0 = 3;
IRIParser.D1 = 4;
IRIParser.D2 = 5;
IRIParser.D3 = 6;
IRIParser.D4 = 7;
IRIParser.D5 = 8;
IRIParser.D6 = 9;
IRIParser.D7 = 10;
IRIParser.D8 = 11;
IRIParser.D9 = 12;
IRIParser.A = 13;
IRIParser.B = 14;
IRIParser.C = 15;
IRIParser.D = 16;
IRIParser.E = 17;
IRIParser.F = 18;
IRIParser.G = 19;
IRIParser.H = 20;
IRIParser.I = 21;
IRIParser.J = 22;
IRIParser.K = 23;
IRIParser.L = 24;
IRIParser.M = 25;
IRIParser.N = 26;
IRIParser.O = 27;
IRIParser.P = 28;
IRIParser.Q = 29;
IRIParser.R = 30;
IRIParser.S = 31;
IRIParser.T = 32;
IRIParser.U = 33;
IRIParser.V = 34;
IRIParser.W = 35;
IRIParser.X = 36;
IRIParser.Y = 37;
IRIParser.Z = 38;
IRIParser.COL2 = 39;
IRIParser.COL = 40;
IRIParser.DOT = 41;
IRIParser.PERCENT = 42;
IRIParser.HYPHEN = 43;
IRIParser.TILDE = 44;
IRIParser.USCORE = 45;
IRIParser.EXCL = 46;
IRIParser.DOLLAR = 47;
IRIParser.AMP = 48;
IRIParser.SQUOTE = 49;
IRIParser.OPAREN = 50;
IRIParser.CPAREN = 51;
IRIParser.STAR = 52;
IRIParser.PLUS = 53;
IRIParser.COMMA = 54;
IRIParser.SCOL = 55;
IRIParser.EQUALS = 56;
IRIParser.FSLASH2 = 57;
IRIParser.FSLASH = 58;
IRIParser.QMARK = 59;
IRIParser.HASH = 60;
IRIParser.OBRACK = 61;
IRIParser.CBRACK = 62;
IRIParser.AT = 63;

IRIParser.RULE_parse = 0;
IRIParser.RULE_iri = 1;
IRIParser.RULE_ihier_part = 2;
IRIParser.RULE_iri_reference = 3;
IRIParser.RULE_absolute_iri = 4;
IRIParser.RULE_irelative_ref = 5;
IRIParser.RULE_irelative_part = 6;
IRIParser.RULE_iauthority = 7;
IRIParser.RULE_iuserinfo = 8;
IRIParser.RULE_ihost = 9;
IRIParser.RULE_ireg_name = 10;
IRIParser.RULE_ipath = 11;
IRIParser.RULE_ipath_abempty = 12;
IRIParser.RULE_ipath_absolute = 13;
IRIParser.RULE_ipath_noscheme = 14;
IRIParser.RULE_ipath_rootless = 15;
IRIParser.RULE_ipath_empty = 16;
IRIParser.RULE_isegment = 17;
IRIParser.RULE_isegment_nz = 18;
IRIParser.RULE_isegment_nz_nc = 19;
IRIParser.RULE_ipchar = 20;
IRIParser.RULE_iquery = 21;
IRIParser.RULE_ifragment = 22;
IRIParser.RULE_iunreserved = 23;
IRIParser.RULE_scheme = 24;
IRIParser.RULE_port = 25;
IRIParser.RULE_ip_literal = 26;
IRIParser.RULE_ip_v_future = 27;
IRIParser.RULE_ip_v6_address = 28;
IRIParser.RULE_h16 = 29;
IRIParser.RULE_ls32 = 30;
IRIParser.RULE_ip_v4_address = 31;
IRIParser.RULE_dec_octet = 32;
IRIParser.RULE_pct_encoded = 33;
IRIParser.RULE_unreserved = 34;
IRIParser.RULE_reserved = 35;
IRIParser.RULE_gen_delims = 36;
IRIParser.RULE_sub_delims = 37;
IRIParser.RULE_alpha = 38;
IRIParser.RULE_hexdig = 39;
IRIParser.RULE_digit = 40;
IRIParser.RULE_non_zero_digit = 41;

class ParseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_parse;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	EOF() {
	    return this.getToken(IRIParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterParse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitParse(this);
		}
	}


}



class IriContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_iri;
    }

	scheme() {
	    return this.getTypedRuleContext(SchemeContext,0);
	};

	COL() {
	    return this.getToken(IRIParser.COL, 0);
	};

	ihier_part() {
	    return this.getTypedRuleContext(Ihier_partContext,0);
	};

	QMARK() {
	    return this.getToken(IRIParser.QMARK, 0);
	};

	iquery() {
	    return this.getTypedRuleContext(IqueryContext,0);
	};

	HASH() {
	    return this.getToken(IRIParser.HASH, 0);
	};

	ifragment() {
	    return this.getTypedRuleContext(IfragmentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIri(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIri(this);
		}
	}


}



class Ihier_partContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_ihier_part;
    }

	FSLASH2() {
	    return this.getToken(IRIParser.FSLASH2, 0);
	};

	iauthority() {
	    return this.getTypedRuleContext(IauthorityContext,0);
	};

	ipath_abempty() {
	    return this.getTypedRuleContext(Ipath_abemptyContext,0);
	};

	ipath_absolute() {
	    return this.getTypedRuleContext(Ipath_absoluteContext,0);
	};

	ipath_rootless() {
	    return this.getTypedRuleContext(Ipath_rootlessContext,0);
	};

	ipath_empty() {
	    return this.getTypedRuleContext(Ipath_emptyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIhier_part(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIhier_part(this);
		}
	}


}



class Iri_referenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_iri_reference;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	irelative_ref() {
	    return this.getTypedRuleContext(Irelative_refContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIri_reference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIri_reference(this);
		}
	}


}



class Absolute_iriContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_absolute_iri;
    }

	scheme() {
	    return this.getTypedRuleContext(SchemeContext,0);
	};

	COL() {
	    return this.getToken(IRIParser.COL, 0);
	};

	ihier_part() {
	    return this.getTypedRuleContext(Ihier_partContext,0);
	};

	QMARK() {
	    return this.getToken(IRIParser.QMARK, 0);
	};

	iquery() {
	    return this.getTypedRuleContext(IqueryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterAbsolute_iri(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitAbsolute_iri(this);
		}
	}


}



class Irelative_refContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_irelative_ref;
    }

	irelative_part() {
	    return this.getTypedRuleContext(Irelative_partContext,0);
	};

	QMARK() {
	    return this.getToken(IRIParser.QMARK, 0);
	};

	iquery() {
	    return this.getTypedRuleContext(IqueryContext,0);
	};

	HASH() {
	    return this.getToken(IRIParser.HASH, 0);
	};

	ifragment() {
	    return this.getTypedRuleContext(IfragmentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIrelative_ref(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIrelative_ref(this);
		}
	}


}



class Irelative_partContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_irelative_part;
    }

	FSLASH2() {
	    return this.getToken(IRIParser.FSLASH2, 0);
	};

	iauthority() {
	    return this.getTypedRuleContext(IauthorityContext,0);
	};

	ipath_abempty() {
	    return this.getTypedRuleContext(Ipath_abemptyContext,0);
	};

	ipath_absolute() {
	    return this.getTypedRuleContext(Ipath_absoluteContext,0);
	};

	ipath_noscheme() {
	    return this.getTypedRuleContext(Ipath_noschemeContext,0);
	};

	ipath_empty() {
	    return this.getTypedRuleContext(Ipath_emptyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIrelative_part(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIrelative_part(this);
		}
	}


}



class IauthorityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_iauthority;
    }

	ihost() {
	    return this.getTypedRuleContext(IhostContext,0);
	};

	iuserinfo() {
	    return this.getTypedRuleContext(IuserinfoContext,0);
	};

	AT() {
	    return this.getToken(IRIParser.AT, 0);
	};

	COL() {
	    return this.getToken(IRIParser.COL, 0);
	};

	port() {
	    return this.getTypedRuleContext(PortContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIauthority(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIauthority(this);
		}
	}


}



class IuserinfoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_iuserinfo;
    }

	iunreserved = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IunreservedContext);
	    } else {
	        return this.getTypedRuleContext(IunreservedContext,i);
	    }
	};

	pct_encoded = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Pct_encodedContext);
	    } else {
	        return this.getTypedRuleContext(Pct_encodedContext,i);
	    }
	};

	sub_delims = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sub_delimsContext);
	    } else {
	        return this.getTypedRuleContext(Sub_delimsContext,i);
	    }
	};

	COL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.COL);
	    } else {
	        return this.getToken(IRIParser.COL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIuserinfo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIuserinfo(this);
		}
	}


}



class IhostContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_ihost;
    }

	ip_literal() {
	    return this.getTypedRuleContext(Ip_literalContext,0);
	};

	ip_v4_address() {
	    return this.getTypedRuleContext(Ip_v4_addressContext,0);
	};

	ireg_name() {
	    return this.getTypedRuleContext(Ireg_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIhost(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIhost(this);
		}
	}


}



class Ireg_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_ireg_name;
    }

	iunreserved = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IunreservedContext);
	    } else {
	        return this.getTypedRuleContext(IunreservedContext,i);
	    }
	};

	pct_encoded = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Pct_encodedContext);
	    } else {
	        return this.getTypedRuleContext(Pct_encodedContext,i);
	    }
	};

	sub_delims = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sub_delimsContext);
	    } else {
	        return this.getTypedRuleContext(Sub_delimsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIreg_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIreg_name(this);
		}
	}


}



class IpathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_ipath;
    }

	ipath_abempty() {
	    return this.getTypedRuleContext(Ipath_abemptyContext,0);
	};

	ipath_absolute() {
	    return this.getTypedRuleContext(Ipath_absoluteContext,0);
	};

	ipath_noscheme() {
	    return this.getTypedRuleContext(Ipath_noschemeContext,0);
	};

	ipath_rootless() {
	    return this.getTypedRuleContext(Ipath_rootlessContext,0);
	};

	ipath_empty() {
	    return this.getTypedRuleContext(Ipath_emptyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIpath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIpath(this);
		}
	}


}



class Ipath_abemptyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_ipath_abempty;
    }

	FSLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.FSLASH);
	    } else {
	        return this.getToken(IRIParser.FSLASH, i);
	    }
	};


	isegment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IsegmentContext);
	    } else {
	        return this.getTypedRuleContext(IsegmentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIpath_abempty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIpath_abempty(this);
		}
	}


}



class Ipath_absoluteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_ipath_absolute;
    }

	FSLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.FSLASH);
	    } else {
	        return this.getToken(IRIParser.FSLASH, i);
	    }
	};


	isegment_nz() {
	    return this.getTypedRuleContext(Isegment_nzContext,0);
	};

	isegment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IsegmentContext);
	    } else {
	        return this.getTypedRuleContext(IsegmentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIpath_absolute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIpath_absolute(this);
		}
	}


}



class Ipath_noschemeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_ipath_noscheme;
    }

	isegment_nz_nc() {
	    return this.getTypedRuleContext(Isegment_nz_ncContext,0);
	};

	FSLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.FSLASH);
	    } else {
	        return this.getToken(IRIParser.FSLASH, i);
	    }
	};


	isegment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IsegmentContext);
	    } else {
	        return this.getTypedRuleContext(IsegmentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIpath_noscheme(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIpath_noscheme(this);
		}
	}


}



class Ipath_rootlessContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_ipath_rootless;
    }

	isegment_nz() {
	    return this.getTypedRuleContext(Isegment_nzContext,0);
	};

	FSLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.FSLASH);
	    } else {
	        return this.getToken(IRIParser.FSLASH, i);
	    }
	};


	isegment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IsegmentContext);
	    } else {
	        return this.getTypedRuleContext(IsegmentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIpath_rootless(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIpath_rootless(this);
		}
	}


}



class Ipath_emptyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_ipath_empty;
    }


	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIpath_empty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIpath_empty(this);
		}
	}


}



class IsegmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_isegment;
    }

	ipchar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IpcharContext);
	    } else {
	        return this.getTypedRuleContext(IpcharContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIsegment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIsegment(this);
		}
	}


}



class Isegment_nzContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_isegment_nz;
    }

	ipchar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IpcharContext);
	    } else {
	        return this.getTypedRuleContext(IpcharContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIsegment_nz(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIsegment_nz(this);
		}
	}


}



class Isegment_nz_ncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_isegment_nz_nc;
    }

	iunreserved = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IunreservedContext);
	    } else {
	        return this.getTypedRuleContext(IunreservedContext,i);
	    }
	};

	pct_encoded = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Pct_encodedContext);
	    } else {
	        return this.getTypedRuleContext(Pct_encodedContext,i);
	    }
	};

	sub_delims = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sub_delimsContext);
	    } else {
	        return this.getTypedRuleContext(Sub_delimsContext,i);
	    }
	};

	AT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.AT);
	    } else {
	        return this.getToken(IRIParser.AT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIsegment_nz_nc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIsegment_nz_nc(this);
		}
	}


}



class IpcharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_ipchar;
    }

	iunreserved() {
	    return this.getTypedRuleContext(IunreservedContext,0);
	};

	pct_encoded() {
	    return this.getTypedRuleContext(Pct_encodedContext,0);
	};

	sub_delims() {
	    return this.getTypedRuleContext(Sub_delimsContext,0);
	};

	COL() {
	    return this.getToken(IRIParser.COL, 0);
	};

	AT() {
	    return this.getToken(IRIParser.AT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIpchar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIpchar(this);
		}
	}


}



class IqueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_iquery;
    }

	ipchar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IpcharContext);
	    } else {
	        return this.getTypedRuleContext(IpcharContext,i);
	    }
	};

	IPRIVATE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.IPRIVATE);
	    } else {
	        return this.getToken(IRIParser.IPRIVATE, i);
	    }
	};


	FSLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.FSLASH);
	    } else {
	        return this.getToken(IRIParser.FSLASH, i);
	    }
	};


	QMARK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.QMARK);
	    } else {
	        return this.getToken(IRIParser.QMARK, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIquery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIquery(this);
		}
	}


}



class IfragmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_ifragment;
    }

	ipchar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IpcharContext);
	    } else {
	        return this.getTypedRuleContext(IpcharContext,i);
	    }
	};

	FSLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.FSLASH);
	    } else {
	        return this.getToken(IRIParser.FSLASH, i);
	    }
	};


	QMARK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.QMARK);
	    } else {
	        return this.getToken(IRIParser.QMARK, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIfragment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIfragment(this);
		}
	}


}



class IunreservedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_iunreserved;
    }

	alpha() {
	    return this.getTypedRuleContext(AlphaContext,0);
	};

	digit() {
	    return this.getTypedRuleContext(DigitContext,0);
	};

	HYPHEN() {
	    return this.getToken(IRIParser.HYPHEN, 0);
	};

	DOT() {
	    return this.getToken(IRIParser.DOT, 0);
	};

	USCORE() {
	    return this.getToken(IRIParser.USCORE, 0);
	};

	TILDE() {
	    return this.getToken(IRIParser.TILDE, 0);
	};

	UCSCHAR() {
	    return this.getToken(IRIParser.UCSCHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIunreserved(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIunreserved(this);
		}
	}


}



class SchemeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_scheme;
    }

	alpha = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AlphaContext);
	    } else {
	        return this.getTypedRuleContext(AlphaContext,i);
	    }
	};

	digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DigitContext);
	    } else {
	        return this.getTypedRuleContext(DigitContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.PLUS);
	    } else {
	        return this.getToken(IRIParser.PLUS, i);
	    }
	};


	HYPHEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.HYPHEN);
	    } else {
	        return this.getToken(IRIParser.HYPHEN, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.DOT);
	    } else {
	        return this.getToken(IRIParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterScheme(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitScheme(this);
		}
	}


}



class PortContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_port;
    }

	digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DigitContext);
	    } else {
	        return this.getTypedRuleContext(DigitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterPort(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitPort(this);
		}
	}


}



class Ip_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_ip_literal;
    }

	OBRACK() {
	    return this.getToken(IRIParser.OBRACK, 0);
	};

	CBRACK() {
	    return this.getToken(IRIParser.CBRACK, 0);
	};

	ip_v6_address() {
	    return this.getTypedRuleContext(Ip_v6_addressContext,0);
	};

	ip_v_future() {
	    return this.getTypedRuleContext(Ip_v_futureContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIp_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIp_literal(this);
		}
	}


}



class Ip_v_futureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_ip_v_future;
    }

	V() {
	    return this.getToken(IRIParser.V, 0);
	};

	DOT() {
	    return this.getToken(IRIParser.DOT, 0);
	};

	hexdig = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HexdigContext);
	    } else {
	        return this.getTypedRuleContext(HexdigContext,i);
	    }
	};

	unreserved = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnreservedContext);
	    } else {
	        return this.getTypedRuleContext(UnreservedContext,i);
	    }
	};

	sub_delims = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sub_delimsContext);
	    } else {
	        return this.getTypedRuleContext(Sub_delimsContext,i);
	    }
	};

	COL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.COL);
	    } else {
	        return this.getToken(IRIParser.COL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIp_v_future(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIp_v_future(this);
		}
	}


}



class Ip_v6_addressContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_ip_v6_address;
    }

	h16 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(H16Context);
	    } else {
	        return this.getTypedRuleContext(H16Context,i);
	    }
	};

	COL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.COL);
	    } else {
	        return this.getToken(IRIParser.COL, i);
	    }
	};


	ls32() {
	    return this.getTypedRuleContext(Ls32Context,0);
	};

	COL2() {
	    return this.getToken(IRIParser.COL2, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIp_v6_address(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIp_v6_address(this);
		}
	}


}



class H16Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_h16;
    }

	hexdig = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HexdigContext);
	    } else {
	        return this.getTypedRuleContext(HexdigContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterH16(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitH16(this);
		}
	}


}



class Ls32Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_ls32;
    }

	h16 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(H16Context);
	    } else {
	        return this.getTypedRuleContext(H16Context,i);
	    }
	};

	COL() {
	    return this.getToken(IRIParser.COL, 0);
	};

	ip_v4_address() {
	    return this.getTypedRuleContext(Ip_v4_addressContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterLs32(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitLs32(this);
		}
	}


}



class Ip_v4_addressContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_ip_v4_address;
    }

	dec_octet = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dec_octetContext);
	    } else {
	        return this.getTypedRuleContext(Dec_octetContext,i);
	    }
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.DOT);
	    } else {
	        return this.getToken(IRIParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterIp_v4_address(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitIp_v4_address(this);
		}
	}


}



class Dec_octetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_dec_octet;
    }

	digit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DigitContext);
	    } else {
	        return this.getTypedRuleContext(DigitContext,i);
	    }
	};

	non_zero_digit() {
	    return this.getTypedRuleContext(Non_zero_digitContext,0);
	};

	D1() {
	    return this.getToken(IRIParser.D1, 0);
	};

	D2 = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.D2);
	    } else {
	        return this.getToken(IRIParser.D2, i);
	    }
	};


	D0() {
	    return this.getToken(IRIParser.D0, 0);
	};

	D3() {
	    return this.getToken(IRIParser.D3, 0);
	};

	D4() {
	    return this.getToken(IRIParser.D4, 0);
	};

	D5 = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IRIParser.D5);
	    } else {
	        return this.getToken(IRIParser.D5, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterDec_octet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitDec_octet(this);
		}
	}


}



class Pct_encodedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_pct_encoded;
    }

	PERCENT() {
	    return this.getToken(IRIParser.PERCENT, 0);
	};

	hexdig = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HexdigContext);
	    } else {
	        return this.getTypedRuleContext(HexdigContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterPct_encoded(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitPct_encoded(this);
		}
	}


}



class UnreservedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_unreserved;
    }

	alpha() {
	    return this.getTypedRuleContext(AlphaContext,0);
	};

	digit() {
	    return this.getTypedRuleContext(DigitContext,0);
	};

	HYPHEN() {
	    return this.getToken(IRIParser.HYPHEN, 0);
	};

	DOT() {
	    return this.getToken(IRIParser.DOT, 0);
	};

	USCORE() {
	    return this.getToken(IRIParser.USCORE, 0);
	};

	TILDE() {
	    return this.getToken(IRIParser.TILDE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterUnreserved(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitUnreserved(this);
		}
	}


}



class ReservedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_reserved;
    }

	gen_delims() {
	    return this.getTypedRuleContext(Gen_delimsContext,0);
	};

	sub_delims() {
	    return this.getTypedRuleContext(Sub_delimsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterReserved(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitReserved(this);
		}
	}


}



class Gen_delimsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_gen_delims;
    }

	COL() {
	    return this.getToken(IRIParser.COL, 0);
	};

	FSLASH() {
	    return this.getToken(IRIParser.FSLASH, 0);
	};

	QMARK() {
	    return this.getToken(IRIParser.QMARK, 0);
	};

	HASH() {
	    return this.getToken(IRIParser.HASH, 0);
	};

	OBRACK() {
	    return this.getToken(IRIParser.OBRACK, 0);
	};

	CBRACK() {
	    return this.getToken(IRIParser.CBRACK, 0);
	};

	AT() {
	    return this.getToken(IRIParser.AT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterGen_delims(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitGen_delims(this);
		}
	}


}



class Sub_delimsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_sub_delims;
    }

	EXCL() {
	    return this.getToken(IRIParser.EXCL, 0);
	};

	DOLLAR() {
	    return this.getToken(IRIParser.DOLLAR, 0);
	};

	AMP() {
	    return this.getToken(IRIParser.AMP, 0);
	};

	SQUOTE() {
	    return this.getToken(IRIParser.SQUOTE, 0);
	};

	OPAREN() {
	    return this.getToken(IRIParser.OPAREN, 0);
	};

	CPAREN() {
	    return this.getToken(IRIParser.CPAREN, 0);
	};

	STAR() {
	    return this.getToken(IRIParser.STAR, 0);
	};

	PLUS() {
	    return this.getToken(IRIParser.PLUS, 0);
	};

	COMMA() {
	    return this.getToken(IRIParser.COMMA, 0);
	};

	SCOL() {
	    return this.getToken(IRIParser.SCOL, 0);
	};

	EQUALS() {
	    return this.getToken(IRIParser.EQUALS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterSub_delims(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitSub_delims(this);
		}
	}


}



class AlphaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_alpha;
    }

	A() {
	    return this.getToken(IRIParser.A, 0);
	};

	B() {
	    return this.getToken(IRIParser.B, 0);
	};

	C() {
	    return this.getToken(IRIParser.C, 0);
	};

	D() {
	    return this.getToken(IRIParser.D, 0);
	};

	E() {
	    return this.getToken(IRIParser.E, 0);
	};

	F() {
	    return this.getToken(IRIParser.F, 0);
	};

	G() {
	    return this.getToken(IRIParser.G, 0);
	};

	H() {
	    return this.getToken(IRIParser.H, 0);
	};

	I() {
	    return this.getToken(IRIParser.I, 0);
	};

	J() {
	    return this.getToken(IRIParser.J, 0);
	};

	K() {
	    return this.getToken(IRIParser.K, 0);
	};

	L() {
	    return this.getToken(IRIParser.L, 0);
	};

	M() {
	    return this.getToken(IRIParser.M, 0);
	};

	N() {
	    return this.getToken(IRIParser.N, 0);
	};

	O() {
	    return this.getToken(IRIParser.O, 0);
	};

	P() {
	    return this.getToken(IRIParser.P, 0);
	};

	Q() {
	    return this.getToken(IRIParser.Q, 0);
	};

	R() {
	    return this.getToken(IRIParser.R, 0);
	};

	S() {
	    return this.getToken(IRIParser.S, 0);
	};

	T() {
	    return this.getToken(IRIParser.T, 0);
	};

	U() {
	    return this.getToken(IRIParser.U, 0);
	};

	V() {
	    return this.getToken(IRIParser.V, 0);
	};

	W() {
	    return this.getToken(IRIParser.W, 0);
	};

	X() {
	    return this.getToken(IRIParser.X, 0);
	};

	Y() {
	    return this.getToken(IRIParser.Y, 0);
	};

	Z() {
	    return this.getToken(IRIParser.Z, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterAlpha(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitAlpha(this);
		}
	}


}



class HexdigContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_hexdig;
    }

	digit() {
	    return this.getTypedRuleContext(DigitContext,0);
	};

	A() {
	    return this.getToken(IRIParser.A, 0);
	};

	B() {
	    return this.getToken(IRIParser.B, 0);
	};

	C() {
	    return this.getToken(IRIParser.C, 0);
	};

	D() {
	    return this.getToken(IRIParser.D, 0);
	};

	E() {
	    return this.getToken(IRIParser.E, 0);
	};

	F() {
	    return this.getToken(IRIParser.F, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterHexdig(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitHexdig(this);
		}
	}


}



class DigitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_digit;
    }

	D0() {
	    return this.getToken(IRIParser.D0, 0);
	};

	non_zero_digit() {
	    return this.getTypedRuleContext(Non_zero_digitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterDigit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitDigit(this);
		}
	}


}



class Non_zero_digitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IRIParser.RULE_non_zero_digit;
    }

	D1() {
	    return this.getToken(IRIParser.D1, 0);
	};

	D2() {
	    return this.getToken(IRIParser.D2, 0);
	};

	D3() {
	    return this.getToken(IRIParser.D3, 0);
	};

	D4() {
	    return this.getToken(IRIParser.D4, 0);
	};

	D5() {
	    return this.getToken(IRIParser.D5, 0);
	};

	D6() {
	    return this.getToken(IRIParser.D6, 0);
	};

	D7() {
	    return this.getToken(IRIParser.D7, 0);
	};

	D8() {
	    return this.getToken(IRIParser.D8, 0);
	};

	D9() {
	    return this.getToken(IRIParser.D9, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.enterNon_zero_digit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IRIListener ) {
	        listener.exitNon_zero_digit(this);
		}
	}


}




IRIParser.ParseContext = ParseContext; 
IRIParser.IriContext = IriContext; 
IRIParser.Ihier_partContext = Ihier_partContext; 
IRIParser.Iri_referenceContext = Iri_referenceContext; 
IRIParser.Absolute_iriContext = Absolute_iriContext; 
IRIParser.Irelative_refContext = Irelative_refContext; 
IRIParser.Irelative_partContext = Irelative_partContext; 
IRIParser.IauthorityContext = IauthorityContext; 
IRIParser.IuserinfoContext = IuserinfoContext; 
IRIParser.IhostContext = IhostContext; 
IRIParser.Ireg_nameContext = Ireg_nameContext; 
IRIParser.IpathContext = IpathContext; 
IRIParser.Ipath_abemptyContext = Ipath_abemptyContext; 
IRIParser.Ipath_absoluteContext = Ipath_absoluteContext; 
IRIParser.Ipath_noschemeContext = Ipath_noschemeContext; 
IRIParser.Ipath_rootlessContext = Ipath_rootlessContext; 
IRIParser.Ipath_emptyContext = Ipath_emptyContext; 
IRIParser.IsegmentContext = IsegmentContext; 
IRIParser.Isegment_nzContext = Isegment_nzContext; 
IRIParser.Isegment_nz_ncContext = Isegment_nz_ncContext; 
IRIParser.IpcharContext = IpcharContext; 
IRIParser.IqueryContext = IqueryContext; 
IRIParser.IfragmentContext = IfragmentContext; 
IRIParser.IunreservedContext = IunreservedContext; 
IRIParser.SchemeContext = SchemeContext; 
IRIParser.PortContext = PortContext; 
IRIParser.Ip_literalContext = Ip_literalContext; 
IRIParser.Ip_v_futureContext = Ip_v_futureContext; 
IRIParser.Ip_v6_addressContext = Ip_v6_addressContext; 
IRIParser.H16Context = H16Context; 
IRIParser.Ls32Context = Ls32Context; 
IRIParser.Ip_v4_addressContext = Ip_v4_addressContext; 
IRIParser.Dec_octetContext = Dec_octetContext; 
IRIParser.Pct_encodedContext = Pct_encodedContext; 
IRIParser.UnreservedContext = UnreservedContext; 
IRIParser.ReservedContext = ReservedContext; 
IRIParser.Gen_delimsContext = Gen_delimsContext; 
IRIParser.Sub_delimsContext = Sub_delimsContext; 
IRIParser.AlphaContext = AlphaContext; 
IRIParser.HexdigContext = HexdigContext; 
IRIParser.DigitContext = DigitContext; 
IRIParser.Non_zero_digitContext = Non_zero_digitContext; 
