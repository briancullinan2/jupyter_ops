// Generated from Resources/Parsers/racket-isl/ISL.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ISLListener from './ISLListener.js';
const serializedATN = [4,1,47,442,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,4,0,22,8,0,11,0,12,0,23,1,
1,1,1,1,1,1,1,3,1,30,8,1,1,2,1,2,1,2,1,2,1,2,4,2,37,8,2,11,2,12,2,38,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,56,8,2,10,2,
12,2,59,9,2,1,2,1,2,1,2,3,2,64,8,2,1,3,1,3,1,3,4,3,69,8,3,11,3,12,3,70,1,
3,1,3,1,3,1,3,1,3,4,3,78,8,3,11,3,12,3,79,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,99,8,3,10,3,12,3,102,9,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,112,8,3,10,3,12,3,115,9,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,5,3,125,8,3,10,3,12,3,128,9,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,5,3,142,8,3,10,3,12,3,145,9,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,159,8,3,10,3,12,3,162,9,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,176,8,3,10,3,12,3,179,9,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,193,8,3,10,3,12,3,196,9,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,211,8,3,10,3,12,3,
214,9,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,223,8,3,10,3,12,3,226,9,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,4,3,237,8,3,11,3,12,3,238,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,5,3,250,8,3,10,3,12,3,253,9,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,4,3,273,8,3,11,3,12,3,
274,1,3,1,3,1,3,1,3,1,3,1,3,1,3,4,3,284,8,3,11,3,12,3,285,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,306,8,3,1,
4,1,4,1,4,1,4,1,4,5,4,313,8,4,10,4,12,4,316,9,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,3,4,327,8,4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,335,8,5,10,5,12,5,338,
9,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,349,8,5,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
4,6,374,8,6,11,6,12,6,375,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,3,6,390,8,6,1,6,1,6,3,6,394,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,4,7,412,8,7,11,7,12,7,413,1,7,3,7,417,8,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,431,8,7,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,1,1,0,38,39,509,
0,21,1,0,0,0,2,29,1,0,0,0,4,63,1,0,0,0,6,305,1,0,0,0,8,326,1,0,0,0,10,348,
1,0,0,0,12,393,1,0,0,0,14,430,1,0,0,0,16,432,1,0,0,0,18,439,1,0,0,0,20,22,
3,2,1,0,21,20,1,0,0,0,22,23,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,1,1,0,
0,0,25,30,3,4,2,0,26,30,3,6,3,0,27,30,3,12,6,0,28,30,3,14,7,0,29,25,1,0,
0,0,29,26,1,0,0,0,29,27,1,0,0,0,29,28,1,0,0,0,30,3,1,0,0,0,31,32,5,1,0,0,
32,33,5,2,0,0,33,34,5,1,0,0,34,36,3,18,9,0,35,37,5,39,0,0,36,35,1,0,0,0,
37,38,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,41,5,3,0,0,41,
42,3,6,3,0,42,43,5,3,0,0,43,64,1,0,0,0,44,45,5,1,0,0,45,46,5,2,0,0,46,47,
3,18,9,0,47,48,3,6,3,0,48,49,5,3,0,0,49,64,1,0,0,0,50,51,5,1,0,0,51,52,5,
4,0,0,52,53,3,18,9,0,53,57,5,1,0,0,54,56,3,18,9,0,55,54,1,0,0,0,56,59,1,
0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,60,1,0,0,0,59,57,1,0,0,0,60,61,5,3,
0,0,61,62,5,3,0,0,62,64,1,0,0,0,63,31,1,0,0,0,63,44,1,0,0,0,63,50,1,0,0,
0,64,5,1,0,0,0,65,66,5,1,0,0,66,68,5,5,0,0,67,69,3,6,3,0,68,67,1,0,0,0,69,
70,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,72,1,0,0,0,72,73,5,3,0,0,73,306,
1,0,0,0,74,75,5,1,0,0,75,77,5,6,0,0,76,78,3,6,3,0,77,76,1,0,0,0,78,79,1,
0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,81,1,0,0,0,81,82,5,3,0,0,82,306,1,0,
0,0,83,84,5,1,0,0,84,85,5,7,0,0,85,86,5,39,0,0,86,87,3,6,3,0,87,88,5,3,0,
0,88,306,1,0,0,0,89,90,5,1,0,0,90,91,5,8,0,0,91,92,3,6,3,0,92,93,5,3,0,0,
93,306,1,0,0,0,94,95,5,1,0,0,95,96,5,9,0,0,96,100,5,1,0,0,97,99,5,39,0,0,
98,97,1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,103,1,0,
0,0,102,100,1,0,0,0,103,104,5,3,0,0,104,105,3,6,3,0,105,106,5,3,0,0,106,
306,1,0,0,0,107,108,5,1,0,0,108,109,5,10,0,0,109,113,5,1,0,0,110,112,5,39,
0,0,111,110,1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,
116,1,0,0,0,115,113,1,0,0,0,116,117,5,3,0,0,117,118,3,6,3,0,118,119,5,3,
0,0,119,306,1,0,0,0,120,121,5,1,0,0,121,122,5,11,0,0,122,126,5,12,0,0,123,
125,3,4,2,0,124,123,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,126,127,1,0,
0,0,127,129,1,0,0,0,128,126,1,0,0,0,129,130,5,13,0,0,130,131,3,6,3,0,131,
132,5,3,0,0,132,306,1,0,0,0,133,134,5,1,0,0,134,135,5,14,0,0,135,143,5,1,
0,0,136,137,5,12,0,0,137,138,3,18,9,0,138,139,3,6,3,0,139,140,5,13,0,0,140,
142,1,0,0,0,141,136,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,144,1,0,
0,0,144,146,1,0,0,0,145,143,1,0,0,0,146,147,5,3,0,0,147,148,3,6,3,0,148,
149,5,3,0,0,149,306,1,0,0,0,150,151,5,1,0,0,151,152,5,15,0,0,152,160,5,1,
0,0,153,154,5,12,0,0,154,155,3,18,9,0,155,156,3,6,3,0,156,157,5,13,0,0,157,
159,1,0,0,0,158,153,1,0,0,0,159,162,1,0,0,0,160,158,1,0,0,0,160,161,1,0,
0,0,161,163,1,0,0,0,162,160,1,0,0,0,163,164,5,3,0,0,164,165,3,6,3,0,165,
166,5,3,0,0,166,306,1,0,0,0,167,168,5,1,0,0,168,169,5,16,0,0,169,177,5,1,
0,0,170,171,5,12,0,0,171,172,3,18,9,0,172,173,3,6,3,0,173,174,5,13,0,0,174,
176,1,0,0,0,175,170,1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,0,177,178,1,0,
0,0,178,180,1,0,0,0,179,177,1,0,0,0,180,181,5,3,0,0,181,182,3,6,3,0,182,
183,5,3,0,0,183,306,1,0,0,0,184,185,5,1,0,0,185,186,5,17,0,0,186,194,5,1,
0,0,187,188,5,12,0,0,188,189,3,18,9,0,189,190,3,6,3,0,190,191,5,13,0,0,191,
193,1,0,0,0,192,187,1,0,0,0,193,196,1,0,0,0,194,192,1,0,0,0,194,195,1,0,
0,0,195,197,1,0,0,0,196,194,1,0,0,0,197,198,5,3,0,0,198,199,3,6,3,0,199,
200,5,3,0,0,200,306,1,0,0,0,201,202,5,1,0,0,202,203,5,18,0,0,203,204,3,18,
9,0,204,212,5,1,0,0,205,206,5,12,0,0,206,207,3,18,9,0,207,208,3,6,3,0,208,
209,5,13,0,0,209,211,1,0,0,0,210,205,1,0,0,0,211,214,1,0,0,0,212,210,1,0,
0,0,212,213,1,0,0,0,213,215,1,0,0,0,214,212,1,0,0,0,215,216,5,3,0,0,216,
217,3,6,3,0,217,218,5,3,0,0,218,306,1,0,0,0,219,220,5,1,0,0,220,224,3,6,
3,0,221,223,3,6,3,0,222,221,1,0,0,0,223,226,1,0,0,0,224,222,1,0,0,0,224,
225,1,0,0,0,225,227,1,0,0,0,226,224,1,0,0,0,227,228,5,3,0,0,228,306,1,0,
0,0,229,230,5,1,0,0,230,236,5,19,0,0,231,232,5,12,0,0,232,233,3,6,3,0,233,
234,3,6,3,0,234,235,5,13,0,0,235,237,1,0,0,0,236,231,1,0,0,0,237,238,1,0,
0,0,238,236,1,0,0,0,238,239,1,0,0,0,239,240,1,0,0,0,240,241,5,3,0,0,241,
306,1,0,0,0,242,243,5,1,0,0,243,251,5,19,0,0,244,245,5,12,0,0,245,246,3,
6,3,0,246,247,3,6,3,0,247,248,5,13,0,0,248,250,1,0,0,0,249,244,1,0,0,0,250,
253,1,0,0,0,251,249,1,0,0,0,251,252,1,0,0,0,252,254,1,0,0,0,253,251,1,0,
0,0,254,255,5,12,0,0,255,256,5,20,0,0,256,257,3,6,3,0,257,258,5,13,0,0,258,
259,5,3,0,0,259,306,1,0,0,0,260,261,5,1,0,0,261,262,5,21,0,0,262,263,3,6,
3,0,263,264,3,6,3,0,264,265,3,6,3,0,265,266,5,3,0,0,266,306,1,0,0,0,267,
268,5,1,0,0,268,269,5,22,0,0,269,270,3,6,3,0,270,272,3,6,3,0,271,273,3,6,
3,0,272,271,1,0,0,0,273,274,1,0,0,0,274,272,1,0,0,0,274,275,1,0,0,0,275,
276,1,0,0,0,276,277,5,3,0,0,277,306,1,0,0,0,278,279,5,1,0,0,279,280,5,23,
0,0,280,281,3,6,3,0,281,283,3,6,3,0,282,284,3,6,3,0,283,282,1,0,0,0,284,
285,1,0,0,0,285,283,1,0,0,0,285,286,1,0,0,0,286,287,1,0,0,0,287,288,5,3,
0,0,288,306,1,0,0,0,289,290,5,1,0,0,290,291,5,24,0,0,291,292,3,6,3,0,292,
293,5,3,0,0,293,306,1,0,0,0,294,306,3,18,9,0,295,296,5,25,0,0,296,306,3,
8,4,0,297,298,5,26,0,0,298,306,3,10,5,0,299,300,5,27,0,0,300,306,5,28,0,
0,301,306,5,40,0,0,302,306,5,42,0,0,303,306,5,43,0,0,304,306,5,44,0,0,305,
65,1,0,0,0,305,74,1,0,0,0,305,83,1,0,0,0,305,89,1,0,0,0,305,94,1,0,0,0,305,
107,1,0,0,0,305,120,1,0,0,0,305,133,1,0,0,0,305,150,1,0,0,0,305,167,1,0,
0,0,305,184,1,0,0,0,305,201,1,0,0,0,305,219,1,0,0,0,305,229,1,0,0,0,305,
242,1,0,0,0,305,260,1,0,0,0,305,267,1,0,0,0,305,278,1,0,0,0,305,289,1,0,
0,0,305,294,1,0,0,0,305,295,1,0,0,0,305,297,1,0,0,0,305,299,1,0,0,0,305,
301,1,0,0,0,305,302,1,0,0,0,305,303,1,0,0,0,305,304,1,0,0,0,306,7,1,0,0,
0,307,327,5,39,0,0,308,327,5,43,0,0,309,327,5,44,0,0,310,314,5,1,0,0,311,
313,3,8,4,0,312,311,1,0,0,0,313,316,1,0,0,0,314,312,1,0,0,0,314,315,1,0,
0,0,315,317,1,0,0,0,316,314,1,0,0,0,317,327,5,3,0,0,318,319,5,25,0,0,319,
327,3,8,4,0,320,321,5,26,0,0,321,327,3,8,4,0,322,323,5,29,0,0,323,327,3,
8,4,0,324,325,5,30,0,0,325,327,3,8,4,0,326,307,1,0,0,0,326,308,1,0,0,0,326,
309,1,0,0,0,326,310,1,0,0,0,326,318,1,0,0,0,326,320,1,0,0,0,326,322,1,0,
0,0,326,324,1,0,0,0,327,9,1,0,0,0,328,349,5,39,0,0,329,349,5,40,0,0,330,
349,5,43,0,0,331,349,5,44,0,0,332,336,5,1,0,0,333,335,3,10,5,0,334,333,1,
0,0,0,335,338,1,0,0,0,336,334,1,0,0,0,336,337,1,0,0,0,337,339,1,0,0,0,338,
336,1,0,0,0,339,349,5,3,0,0,340,341,5,25,0,0,341,349,3,10,5,0,342,343,5,
26,0,0,343,349,3,10,5,0,344,345,5,29,0,0,345,349,3,6,3,0,346,347,5,30,0,
0,347,349,3,6,3,0,348,328,1,0,0,0,348,329,1,0,0,0,348,330,1,0,0,0,348,331,
1,0,0,0,348,332,1,0,0,0,348,340,1,0,0,0,348,342,1,0,0,0,348,344,1,0,0,0,
348,346,1,0,0,0,349,11,1,0,0,0,350,351,5,1,0,0,351,352,5,31,0,0,352,353,
3,6,3,0,353,354,3,6,3,0,354,355,5,3,0,0,355,394,1,0,0,0,356,357,5,1,0,0,
357,358,5,32,0,0,358,359,3,6,3,0,359,360,3,6,3,0,360,361,5,3,0,0,361,394,
1,0,0,0,362,363,5,1,0,0,363,364,5,33,0,0,364,365,3,6,3,0,365,366,3,6,3,0,
366,367,3,6,3,0,367,368,5,3,0,0,368,394,1,0,0,0,369,370,5,1,0,0,370,371,
5,34,0,0,371,373,3,6,3,0,372,374,3,6,3,0,373,372,1,0,0,0,374,375,1,0,0,0,
375,373,1,0,0,0,375,376,1,0,0,0,376,377,1,0,0,0,377,378,5,3,0,0,378,394,
1,0,0,0,379,380,5,1,0,0,380,381,5,35,0,0,381,382,3,6,3,0,382,383,3,18,9,
0,383,384,5,3,0,0,384,394,1,0,0,0,385,386,5,1,0,0,386,387,5,36,0,0,387,389,
3,6,3,0,388,390,3,6,3,0,389,388,1,0,0,0,389,390,1,0,0,0,390,391,1,0,0,0,
391,392,5,3,0,0,392,394,1,0,0,0,393,350,1,0,0,0,393,356,1,0,0,0,393,362,
1,0,0,0,393,369,1,0,0,0,393,379,1,0,0,0,393,385,1,0,0,0,394,13,1,0,0,0,395,
396,5,1,0,0,396,397,5,37,0,0,397,398,5,43,0,0,398,431,5,3,0,0,399,400,5,
1,0,0,400,401,5,37,0,0,401,402,3,18,9,0,402,403,5,3,0,0,403,431,1,0,0,0,
404,405,5,1,0,0,405,406,5,37,0,0,406,407,5,1,0,0,407,408,3,18,9,0,408,416,
5,43,0,0,409,411,5,1,0,0,410,412,5,43,0,0,411,410,1,0,0,0,412,413,1,0,0,
0,413,411,1,0,0,0,413,414,1,0,0,0,414,415,1,0,0,0,415,417,5,3,0,0,416,409,
1,0,0,0,416,417,1,0,0,0,417,418,1,0,0,0,418,419,5,3,0,0,419,420,5,3,0,0,
420,431,1,0,0,0,421,422,5,1,0,0,422,423,5,37,0,0,423,424,5,1,0,0,424,425,
3,18,9,0,425,426,5,43,0,0,426,427,3,16,8,0,427,428,5,3,0,0,428,429,5,3,0,
0,429,431,1,0,0,0,430,395,1,0,0,0,430,399,1,0,0,0,430,404,1,0,0,0,430,421,
1,0,0,0,431,15,1,0,0,0,432,433,5,1,0,0,433,434,5,43,0,0,434,435,5,43,0,0,
435,436,5,40,0,0,436,437,5,40,0,0,437,438,5,3,0,0,438,17,1,0,0,0,439,440,
7,0,0,0,440,19,1,0,0,0,31,23,29,38,57,63,70,79,100,113,126,143,160,177,194,
212,224,238,251,274,285,305,314,326,336,348,375,389,393,413,416,430];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ISLParser extends antlr4.Parser {

    static grammarFileName = "ISL.g4";
    static literalNames = [ null, "'('", "'define'", "')'", "'define-struct'", 
                            "'begin'", "'begin0'", "'set!'", "'delay'", 
                            "'lambda'", "'\\u03BB'", "'local'", "'['", "']'", 
                            "'letrec'", "'shared'", "'let'", "'let*'", "'recur'", 
                            "'cond'", "'else '", "'if'", "'and'", "'or'", 
                            "'time'", "'\\u2019'", "'\\u2018'", "'\\u0027'", 
                            "'()'", "','", "',@'", "'check-expect'", "'check-random'", 
                            "'check-within'", "'check-member-of'", "'check-satisfied'", 
                            "'check-error'", "'require'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "SYMBOL", 
                             "NAME", "NUMBER", "INT", "BOOLEAN", "STRING", 
                             "CHARACTER", "LANG", "COMMENT", "WS" ];
    static ruleNames = [ "program", "defOrExpr", "definition", "expr", "quoted", 
                         "quasiQuoted", "testCase", "libraryRequire", "pkg", 
                         "name" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ISLParser.ruleNames;
        this.literalNames = ISLParser.literalNames;
        this.symbolicNames = ISLParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ISLParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.defOrExpr();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ISLParser.T__0) | (1 << ISLParser.T__24) | (1 << ISLParser.T__25) | (1 << ISLParser.T__26))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (ISLParser.SYMBOL - 38)) | (1 << (ISLParser.NAME - 38)) | (1 << (ISLParser.NUMBER - 38)) | (1 << (ISLParser.BOOLEAN - 38)) | (1 << (ISLParser.STRING - 38)) | (1 << (ISLParser.CHARACTER - 38)))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	defOrExpr() {
	    let localctx = new DefOrExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ISLParser.RULE_defOrExpr);
	    try {
	        this.state = 29;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.definition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.expr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 27;
	            this.testCase();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 28;
	            this.libraryRequire();
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



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ISLParser.RULE_definition);
	    var _la = 0; // Token type
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 31;
	            this.match(ISLParser.T__0);
	            this.state = 32;
	            this.match(ISLParser.T__1);
	            this.state = 33;
	            this.match(ISLParser.T__0);
	            this.state = 34;
	            this.name();
	            this.state = 36; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 35;
	                this.match(ISLParser.NAME);
	                this.state = 38; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===ISLParser.NAME);
	            this.state = 40;
	            this.match(ISLParser.T__2);
	            this.state = 41;
	            this.expr();
	            this.state = 42;
	            this.match(ISLParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.match(ISLParser.T__0);
	            this.state = 45;
	            this.match(ISLParser.T__1);
	            this.state = 46;
	            this.name();
	            this.state = 47;
	            this.expr();
	            this.state = 48;
	            this.match(ISLParser.T__2);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 50;
	            this.match(ISLParser.T__0);
	            this.state = 51;
	            this.match(ISLParser.T__3);
	            this.state = 52;
	            this.name();
	            this.state = 53;
	            this.match(ISLParser.T__0);
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ISLParser.SYMBOL || _la===ISLParser.NAME) {
	                this.state = 54;
	                this.name();
	                this.state = 59;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 60;
	            this.match(ISLParser.T__2);
	            this.state = 61;
	            this.match(ISLParser.T__2);
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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ISLParser.RULE_expr);
	    var _la = 0; // Token type
	    try {
	        this.state = 305;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this.match(ISLParser.T__0);
	            this.state = 66;
	            this.match(ISLParser.T__4);
	            this.state = 68; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 67;
	                this.expr();
	                this.state = 70; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ISLParser.T__0) | (1 << ISLParser.T__24) | (1 << ISLParser.T__25) | (1 << ISLParser.T__26))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (ISLParser.SYMBOL - 38)) | (1 << (ISLParser.NAME - 38)) | (1 << (ISLParser.NUMBER - 38)) | (1 << (ISLParser.BOOLEAN - 38)) | (1 << (ISLParser.STRING - 38)) | (1 << (ISLParser.CHARACTER - 38)))) !== 0));
	            this.state = 72;
	            this.match(ISLParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74;
	            this.match(ISLParser.T__0);
	            this.state = 75;
	            this.match(ISLParser.T__5);
	            this.state = 77; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 76;
	                this.expr();
	                this.state = 79; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ISLParser.T__0) | (1 << ISLParser.T__24) | (1 << ISLParser.T__25) | (1 << ISLParser.T__26))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (ISLParser.SYMBOL - 38)) | (1 << (ISLParser.NAME - 38)) | (1 << (ISLParser.NUMBER - 38)) | (1 << (ISLParser.BOOLEAN - 38)) | (1 << (ISLParser.STRING - 38)) | (1 << (ISLParser.CHARACTER - 38)))) !== 0));
	            this.state = 81;
	            this.match(ISLParser.T__2);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 83;
	            this.match(ISLParser.T__0);
	            this.state = 84;
	            this.match(ISLParser.T__6);
	            this.state = 85;
	            this.match(ISLParser.NAME);
	            this.state = 86;
	            this.expr();
	            this.state = 87;
	            this.match(ISLParser.T__2);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 89;
	            this.match(ISLParser.T__0);
	            this.state = 90;
	            this.match(ISLParser.T__7);
	            this.state = 91;
	            this.expr();
	            this.state = 92;
	            this.match(ISLParser.T__2);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 94;
	            this.match(ISLParser.T__0);
	            this.state = 95;
	            this.match(ISLParser.T__8);
	            this.state = 96;
	            this.match(ISLParser.T__0);
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ISLParser.NAME) {
	                this.state = 97;
	                this.match(ISLParser.NAME);
	                this.state = 102;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 103;
	            this.match(ISLParser.T__2);
	            this.state = 104;
	            this.expr();
	            this.state = 105;
	            this.match(ISLParser.T__2);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 107;
	            this.match(ISLParser.T__0);
	            this.state = 108;
	            this.match(ISLParser.T__9);
	            this.state = 109;
	            this.match(ISLParser.T__0);
	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ISLParser.NAME) {
	                this.state = 110;
	                this.match(ISLParser.NAME);
	                this.state = 115;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 116;
	            this.match(ISLParser.T__2);
	            this.state = 117;
	            this.expr();
	            this.state = 118;
	            this.match(ISLParser.T__2);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 120;
	            this.match(ISLParser.T__0);
	            this.state = 121;
	            this.match(ISLParser.T__10);
	            this.state = 122;
	            this.match(ISLParser.T__11);
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ISLParser.T__0) {
	                this.state = 123;
	                this.definition();
	                this.state = 128;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 129;
	            this.match(ISLParser.T__12);
	            this.state = 130;
	            this.expr();
	            this.state = 131;
	            this.match(ISLParser.T__2);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 133;
	            this.match(ISLParser.T__0);
	            this.state = 134;
	            this.match(ISLParser.T__13);
	            this.state = 135;
	            this.match(ISLParser.T__0);
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ISLParser.T__11) {
	                this.state = 136;
	                this.match(ISLParser.T__11);
	                this.state = 137;
	                this.name();
	                this.state = 138;
	                this.expr();
	                this.state = 139;
	                this.match(ISLParser.T__12);
	                this.state = 145;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 146;
	            this.match(ISLParser.T__2);
	            this.state = 147;
	            this.expr();
	            this.state = 148;
	            this.match(ISLParser.T__2);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 150;
	            this.match(ISLParser.T__0);
	            this.state = 151;
	            this.match(ISLParser.T__14);
	            this.state = 152;
	            this.match(ISLParser.T__0);
	            this.state = 160;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ISLParser.T__11) {
	                this.state = 153;
	                this.match(ISLParser.T__11);
	                this.state = 154;
	                this.name();
	                this.state = 155;
	                this.expr();
	                this.state = 156;
	                this.match(ISLParser.T__12);
	                this.state = 162;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 163;
	            this.match(ISLParser.T__2);
	            this.state = 164;
	            this.expr();
	            this.state = 165;
	            this.match(ISLParser.T__2);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 167;
	            this.match(ISLParser.T__0);
	            this.state = 168;
	            this.match(ISLParser.T__15);
	            this.state = 169;
	            this.match(ISLParser.T__0);
	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ISLParser.T__11) {
	                this.state = 170;
	                this.match(ISLParser.T__11);
	                this.state = 171;
	                this.name();
	                this.state = 172;
	                this.expr();
	                this.state = 173;
	                this.match(ISLParser.T__12);
	                this.state = 179;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 180;
	            this.match(ISLParser.T__2);
	            this.state = 181;
	            this.expr();
	            this.state = 182;
	            this.match(ISLParser.T__2);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 184;
	            this.match(ISLParser.T__0);
	            this.state = 185;
	            this.match(ISLParser.T__16);
	            this.state = 186;
	            this.match(ISLParser.T__0);
	            this.state = 194;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ISLParser.T__11) {
	                this.state = 187;
	                this.match(ISLParser.T__11);
	                this.state = 188;
	                this.name();
	                this.state = 189;
	                this.expr();
	                this.state = 190;
	                this.match(ISLParser.T__12);
	                this.state = 196;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 197;
	            this.match(ISLParser.T__2);
	            this.state = 198;
	            this.expr();
	            this.state = 199;
	            this.match(ISLParser.T__2);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 201;
	            this.match(ISLParser.T__0);
	            this.state = 202;
	            this.match(ISLParser.T__17);
	            this.state = 203;
	            this.name();
	            this.state = 204;
	            this.match(ISLParser.T__0);
	            this.state = 212;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ISLParser.T__11) {
	                this.state = 205;
	                this.match(ISLParser.T__11);
	                this.state = 206;
	                this.name();
	                this.state = 207;
	                this.expr();
	                this.state = 208;
	                this.match(ISLParser.T__12);
	                this.state = 214;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 215;
	            this.match(ISLParser.T__2);
	            this.state = 216;
	            this.expr();
	            this.state = 217;
	            this.match(ISLParser.T__2);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 219;
	            this.match(ISLParser.T__0);
	            this.state = 220;
	            this.expr();
	            this.state = 224;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ISLParser.T__0) | (1 << ISLParser.T__24) | (1 << ISLParser.T__25) | (1 << ISLParser.T__26))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (ISLParser.SYMBOL - 38)) | (1 << (ISLParser.NAME - 38)) | (1 << (ISLParser.NUMBER - 38)) | (1 << (ISLParser.BOOLEAN - 38)) | (1 << (ISLParser.STRING - 38)) | (1 << (ISLParser.CHARACTER - 38)))) !== 0)) {
	                this.state = 221;
	                this.expr();
	                this.state = 226;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 227;
	            this.match(ISLParser.T__2);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 229;
	            this.match(ISLParser.T__0);
	            this.state = 230;
	            this.match(ISLParser.T__18);
	            this.state = 236; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 231;
	                this.match(ISLParser.T__11);
	                this.state = 232;
	                this.expr();
	                this.state = 233;
	                this.expr();
	                this.state = 234;
	                this.match(ISLParser.T__12);
	                this.state = 238; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===ISLParser.T__11);
	            this.state = 240;
	            this.match(ISLParser.T__2);
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 242;
	            this.match(ISLParser.T__0);
	            this.state = 243;
	            this.match(ISLParser.T__18);
	            this.state = 251;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 244;
	                    this.match(ISLParser.T__11);
	                    this.state = 245;
	                    this.expr();
	                    this.state = 246;
	                    this.expr();
	                    this.state = 247;
	                    this.match(ISLParser.T__12); 
	                }
	                this.state = 253;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	            }

	            this.state = 254;
	            this.match(ISLParser.T__11);
	            this.state = 255;
	            this.match(ISLParser.T__19);
	            this.state = 256;
	            this.expr();
	            this.state = 257;
	            this.match(ISLParser.T__12);
	            this.state = 258;
	            this.match(ISLParser.T__2);
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 260;
	            this.match(ISLParser.T__0);
	            this.state = 261;
	            this.match(ISLParser.T__20);
	            this.state = 262;
	            this.expr();
	            this.state = 263;
	            this.expr();
	            this.state = 264;
	            this.expr();
	            this.state = 265;
	            this.match(ISLParser.T__2);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 267;
	            this.match(ISLParser.T__0);
	            this.state = 268;
	            this.match(ISLParser.T__21);
	            this.state = 269;
	            this.expr();
	            this.state = 270;
	            this.expr();
	            this.state = 272; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 271;
	                this.expr();
	                this.state = 274; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ISLParser.T__0) | (1 << ISLParser.T__24) | (1 << ISLParser.T__25) | (1 << ISLParser.T__26))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (ISLParser.SYMBOL - 38)) | (1 << (ISLParser.NAME - 38)) | (1 << (ISLParser.NUMBER - 38)) | (1 << (ISLParser.BOOLEAN - 38)) | (1 << (ISLParser.STRING - 38)) | (1 << (ISLParser.CHARACTER - 38)))) !== 0));
	            this.state = 276;
	            this.match(ISLParser.T__2);
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 278;
	            this.match(ISLParser.T__0);
	            this.state = 279;
	            this.match(ISLParser.T__22);
	            this.state = 280;
	            this.expr();
	            this.state = 281;
	            this.expr();
	            this.state = 283; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 282;
	                this.expr();
	                this.state = 285; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ISLParser.T__0) | (1 << ISLParser.T__24) | (1 << ISLParser.T__25) | (1 << ISLParser.T__26))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (ISLParser.SYMBOL - 38)) | (1 << (ISLParser.NAME - 38)) | (1 << (ISLParser.NUMBER - 38)) | (1 << (ISLParser.BOOLEAN - 38)) | (1 << (ISLParser.STRING - 38)) | (1 << (ISLParser.CHARACTER - 38)))) !== 0));
	            this.state = 287;
	            this.match(ISLParser.T__2);
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 289;
	            this.match(ISLParser.T__0);
	            this.state = 290;
	            this.match(ISLParser.T__23);
	            this.state = 291;
	            this.expr();
	            this.state = 292;
	            this.match(ISLParser.T__2);
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 294;
	            this.name();
	            break;

	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 295;
	            this.match(ISLParser.T__24);
	            this.state = 296;
	            this.quoted();
	            break;

	        case 22:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 297;
	            this.match(ISLParser.T__25);
	            this.state = 298;
	            this.quasiQuoted();
	            break;

	        case 23:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 299;
	            this.match(ISLParser.T__26);
	            this.state = 300;
	            this.match(ISLParser.T__27);
	            break;

	        case 24:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 301;
	            this.match(ISLParser.NUMBER);
	            break;

	        case 25:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 302;
	            this.match(ISLParser.BOOLEAN);
	            break;

	        case 26:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 303;
	            this.match(ISLParser.STRING);
	            break;

	        case 27:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 304;
	            this.match(ISLParser.CHARACTER);
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



	quoted() {
	    let localctx = new QuotedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ISLParser.RULE_quoted);
	    var _la = 0; // Token type
	    try {
	        this.state = 326;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ISLParser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 307;
	            this.match(ISLParser.NAME);
	            break;
	        case ISLParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 308;
	            this.match(ISLParser.STRING);
	            break;
	        case ISLParser.CHARACTER:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 309;
	            this.match(ISLParser.CHARACTER);
	            break;
	        case ISLParser.T__0:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 310;
	            this.match(ISLParser.T__0);
	            this.state = 314;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ISLParser.T__0) | (1 << ISLParser.T__24) | (1 << ISLParser.T__25) | (1 << ISLParser.T__28) | (1 << ISLParser.T__29))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (ISLParser.NAME - 39)) | (1 << (ISLParser.STRING - 39)) | (1 << (ISLParser.CHARACTER - 39)))) !== 0)) {
	                this.state = 311;
	                this.quoted();
	                this.state = 316;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 317;
	            this.match(ISLParser.T__2);
	            break;
	        case ISLParser.T__24:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 318;
	            this.match(ISLParser.T__24);
	            this.state = 319;
	            this.quoted();
	            break;
	        case ISLParser.T__25:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 320;
	            this.match(ISLParser.T__25);
	            this.state = 321;
	            this.quoted();
	            break;
	        case ISLParser.T__28:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 322;
	            this.match(ISLParser.T__28);
	            this.state = 323;
	            this.quoted();
	            break;
	        case ISLParser.T__29:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 324;
	            this.match(ISLParser.T__29);
	            this.state = 325;
	            this.quoted();
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



	quasiQuoted() {
	    let localctx = new QuasiQuotedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ISLParser.RULE_quasiQuoted);
	    var _la = 0; // Token type
	    try {
	        this.state = 348;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ISLParser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 328;
	            this.match(ISLParser.NAME);
	            break;
	        case ISLParser.NUMBER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 329;
	            this.match(ISLParser.NUMBER);
	            break;
	        case ISLParser.STRING:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 330;
	            this.match(ISLParser.STRING);
	            break;
	        case ISLParser.CHARACTER:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 331;
	            this.match(ISLParser.CHARACTER);
	            break;
	        case ISLParser.T__0:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 332;
	            this.match(ISLParser.T__0);
	            this.state = 336;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ISLParser.T__0) | (1 << ISLParser.T__24) | (1 << ISLParser.T__25) | (1 << ISLParser.T__28) | (1 << ISLParser.T__29))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (ISLParser.NAME - 39)) | (1 << (ISLParser.NUMBER - 39)) | (1 << (ISLParser.STRING - 39)) | (1 << (ISLParser.CHARACTER - 39)))) !== 0)) {
	                this.state = 333;
	                this.quasiQuoted();
	                this.state = 338;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 339;
	            this.match(ISLParser.T__2);
	            break;
	        case ISLParser.T__24:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 340;
	            this.match(ISLParser.T__24);
	            this.state = 341;
	            this.quasiQuoted();
	            break;
	        case ISLParser.T__25:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 342;
	            this.match(ISLParser.T__25);
	            this.state = 343;
	            this.quasiQuoted();
	            break;
	        case ISLParser.T__28:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 344;
	            this.match(ISLParser.T__28);
	            this.state = 345;
	            this.expr();
	            break;
	        case ISLParser.T__29:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 346;
	            this.match(ISLParser.T__29);
	            this.state = 347;
	            this.expr();
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



	testCase() {
	    let localctx = new TestCaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ISLParser.RULE_testCase);
	    var _la = 0; // Token type
	    try {
	        this.state = 393;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 350;
	            this.match(ISLParser.T__0);
	            this.state = 351;
	            this.match(ISLParser.T__30);
	            this.state = 352;
	            this.expr();
	            this.state = 353;
	            this.expr();
	            this.state = 354;
	            this.match(ISLParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 356;
	            this.match(ISLParser.T__0);
	            this.state = 357;
	            this.match(ISLParser.T__31);
	            this.state = 358;
	            this.expr();
	            this.state = 359;
	            this.expr();
	            this.state = 360;
	            this.match(ISLParser.T__2);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 362;
	            this.match(ISLParser.T__0);
	            this.state = 363;
	            this.match(ISLParser.T__32);
	            this.state = 364;
	            this.expr();
	            this.state = 365;
	            this.expr();
	            this.state = 366;
	            this.expr();
	            this.state = 367;
	            this.match(ISLParser.T__2);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 369;
	            this.match(ISLParser.T__0);
	            this.state = 370;
	            this.match(ISLParser.T__33);
	            this.state = 371;
	            this.expr();
	            this.state = 373; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 372;
	                this.expr();
	                this.state = 375; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ISLParser.T__0) | (1 << ISLParser.T__24) | (1 << ISLParser.T__25) | (1 << ISLParser.T__26))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (ISLParser.SYMBOL - 38)) | (1 << (ISLParser.NAME - 38)) | (1 << (ISLParser.NUMBER - 38)) | (1 << (ISLParser.BOOLEAN - 38)) | (1 << (ISLParser.STRING - 38)) | (1 << (ISLParser.CHARACTER - 38)))) !== 0));
	            this.state = 377;
	            this.match(ISLParser.T__2);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 379;
	            this.match(ISLParser.T__0);
	            this.state = 380;
	            this.match(ISLParser.T__34);
	            this.state = 381;
	            this.expr();
	            this.state = 382;
	            this.name();
	            this.state = 383;
	            this.match(ISLParser.T__2);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 385;
	            this.match(ISLParser.T__0);
	            this.state = 386;
	            this.match(ISLParser.T__35);
	            this.state = 387;
	            this.expr();
	            this.state = 389;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ISLParser.T__0) | (1 << ISLParser.T__24) | (1 << ISLParser.T__25) | (1 << ISLParser.T__26))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (ISLParser.SYMBOL - 38)) | (1 << (ISLParser.NAME - 38)) | (1 << (ISLParser.NUMBER - 38)) | (1 << (ISLParser.BOOLEAN - 38)) | (1 << (ISLParser.STRING - 38)) | (1 << (ISLParser.CHARACTER - 38)))) !== 0)) {
	                this.state = 388;
	                this.expr();
	            }

	            this.state = 391;
	            this.match(ISLParser.T__2);
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



	libraryRequire() {
	    let localctx = new LibraryRequireContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ISLParser.RULE_libraryRequire);
	    var _la = 0; // Token type
	    try {
	        this.state = 430;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 395;
	            this.match(ISLParser.T__0);
	            this.state = 396;
	            this.match(ISLParser.T__36);
	            this.state = 397;
	            this.match(ISLParser.STRING);
	            this.state = 398;
	            this.match(ISLParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 399;
	            this.match(ISLParser.T__0);
	            this.state = 400;
	            this.match(ISLParser.T__36);
	            this.state = 401;
	            this.name();
	            this.state = 402;
	            this.match(ISLParser.T__2);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 404;
	            this.match(ISLParser.T__0);
	            this.state = 405;
	            this.match(ISLParser.T__36);
	            this.state = 406;
	            this.match(ISLParser.T__0);
	            this.state = 407;
	            this.name();
	            this.state = 408;
	            this.match(ISLParser.STRING);
	            this.state = 416;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ISLParser.T__0) {
	                this.state = 409;
	                this.match(ISLParser.T__0);
	                this.state = 411; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 410;
	                    this.match(ISLParser.STRING);
	                    this.state = 413; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===ISLParser.STRING);
	                this.state = 415;
	                this.match(ISLParser.T__2);
	            }

	            this.state = 418;
	            this.match(ISLParser.T__2);
	            this.state = 419;
	            this.match(ISLParser.T__2);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 421;
	            this.match(ISLParser.T__0);
	            this.state = 422;
	            this.match(ISLParser.T__36);
	            this.state = 423;
	            this.match(ISLParser.T__0);
	            this.state = 424;
	            this.name();
	            this.state = 425;
	            this.match(ISLParser.STRING);
	            this.state = 426;
	            this.pkg();
	            this.state = 427;
	            this.match(ISLParser.T__2);
	            this.state = 428;
	            this.match(ISLParser.T__2);
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



	pkg() {
	    let localctx = new PkgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ISLParser.RULE_pkg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 432;
	        this.match(ISLParser.T__0);
	        this.state = 433;
	        this.match(ISLParser.STRING);
	        this.state = 434;
	        this.match(ISLParser.STRING);
	        this.state = 435;
	        this.match(ISLParser.NUMBER);
	        this.state = 436;
	        this.match(ISLParser.NUMBER);
	        this.state = 437;
	        this.match(ISLParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 18, ISLParser.RULE_name);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 439;
	        _la = this._input.LA(1);
	        if(!(_la===ISLParser.SYMBOL || _la===ISLParser.NAME)) {
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

ISLParser.EOF = antlr4.Token.EOF;
ISLParser.T__0 = 1;
ISLParser.T__1 = 2;
ISLParser.T__2 = 3;
ISLParser.T__3 = 4;
ISLParser.T__4 = 5;
ISLParser.T__5 = 6;
ISLParser.T__6 = 7;
ISLParser.T__7 = 8;
ISLParser.T__8 = 9;
ISLParser.T__9 = 10;
ISLParser.T__10 = 11;
ISLParser.T__11 = 12;
ISLParser.T__12 = 13;
ISLParser.T__13 = 14;
ISLParser.T__14 = 15;
ISLParser.T__15 = 16;
ISLParser.T__16 = 17;
ISLParser.T__17 = 18;
ISLParser.T__18 = 19;
ISLParser.T__19 = 20;
ISLParser.T__20 = 21;
ISLParser.T__21 = 22;
ISLParser.T__22 = 23;
ISLParser.T__23 = 24;
ISLParser.T__24 = 25;
ISLParser.T__25 = 26;
ISLParser.T__26 = 27;
ISLParser.T__27 = 28;
ISLParser.T__28 = 29;
ISLParser.T__29 = 30;
ISLParser.T__30 = 31;
ISLParser.T__31 = 32;
ISLParser.T__32 = 33;
ISLParser.T__33 = 34;
ISLParser.T__34 = 35;
ISLParser.T__35 = 36;
ISLParser.T__36 = 37;
ISLParser.SYMBOL = 38;
ISLParser.NAME = 39;
ISLParser.NUMBER = 40;
ISLParser.INT = 41;
ISLParser.BOOLEAN = 42;
ISLParser.STRING = 43;
ISLParser.CHARACTER = 44;
ISLParser.LANG = 45;
ISLParser.COMMENT = 46;
ISLParser.WS = 47;

ISLParser.RULE_program = 0;
ISLParser.RULE_defOrExpr = 1;
ISLParser.RULE_definition = 2;
ISLParser.RULE_expr = 3;
ISLParser.RULE_quoted = 4;
ISLParser.RULE_quasiQuoted = 5;
ISLParser.RULE_testCase = 6;
ISLParser.RULE_libraryRequire = 7;
ISLParser.RULE_pkg = 8;
ISLParser.RULE_name = 9;

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
        this.ruleIndex = ISLParser.RULE_program;
    }

	defOrExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefOrExprContext);
	    } else {
	        return this.getTypedRuleContext(DefOrExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.exitProgram(this);
		}
	}


}



class DefOrExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ISLParser.RULE_defOrExpr;
    }

	definition() {
	    return this.getTypedRuleContext(DefinitionContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	testCase() {
	    return this.getTypedRuleContext(TestCaseContext,0);
	};

	libraryRequire() {
	    return this.getTypedRuleContext(LibraryRequireContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.enterDefOrExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.exitDefOrExpr(this);
		}
	}


}



class DefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ISLParser.RULE_definition;
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ISLParser.NAME);
	    } else {
	        return this.getToken(ISLParser.NAME, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.exitDefinition(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ISLParser.RULE_expr;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ISLParser.NAME);
	    } else {
	        return this.getToken(ISLParser.NAME, i);
	    }
	};


	definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DefinitionContext,i);
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

	quoted() {
	    return this.getTypedRuleContext(QuotedContext,0);
	};

	quasiQuoted() {
	    return this.getTypedRuleContext(QuasiQuotedContext,0);
	};

	NUMBER() {
	    return this.getToken(ISLParser.NUMBER, 0);
	};

	BOOLEAN() {
	    return this.getToken(ISLParser.BOOLEAN, 0);
	};

	STRING() {
	    return this.getToken(ISLParser.STRING, 0);
	};

	CHARACTER() {
	    return this.getToken(ISLParser.CHARACTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.exitExpr(this);
		}
	}


}



class QuotedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ISLParser.RULE_quoted;
    }

	NAME() {
	    return this.getToken(ISLParser.NAME, 0);
	};

	STRING() {
	    return this.getToken(ISLParser.STRING, 0);
	};

	CHARACTER() {
	    return this.getToken(ISLParser.CHARACTER, 0);
	};

	quoted = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(QuotedContext);
	    } else {
	        return this.getTypedRuleContext(QuotedContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.enterQuoted(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.exitQuoted(this);
		}
	}


}



class QuasiQuotedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ISLParser.RULE_quasiQuoted;
    }

	NAME() {
	    return this.getToken(ISLParser.NAME, 0);
	};

	NUMBER() {
	    return this.getToken(ISLParser.NUMBER, 0);
	};

	STRING() {
	    return this.getToken(ISLParser.STRING, 0);
	};

	CHARACTER() {
	    return this.getToken(ISLParser.CHARACTER, 0);
	};

	quasiQuoted = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(QuasiQuotedContext);
	    } else {
	        return this.getTypedRuleContext(QuasiQuotedContext,i);
	    }
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.enterQuasiQuoted(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.exitQuasiQuoted(this);
		}
	}


}



class TestCaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ISLParser.RULE_testCase;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.enterTestCase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.exitTestCase(this);
		}
	}


}



class LibraryRequireContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ISLParser.RULE_libraryRequire;
    }

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ISLParser.STRING);
	    } else {
	        return this.getToken(ISLParser.STRING, i);
	    }
	};


	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	pkg() {
	    return this.getTypedRuleContext(PkgContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.enterLibraryRequire(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.exitLibraryRequire(this);
		}
	}


}



class PkgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ISLParser.RULE_pkg;
    }

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ISLParser.STRING);
	    } else {
	        return this.getToken(ISLParser.STRING, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ISLParser.NUMBER);
	    } else {
	        return this.getToken(ISLParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.enterPkg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.exitPkg(this);
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
        this.ruleIndex = ISLParser.RULE_name;
    }

	SYMBOL() {
	    return this.getToken(ISLParser.SYMBOL, 0);
	};

	NAME() {
	    return this.getToken(ISLParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ISLListener ) {
	        listener.exitName(this);
		}
	}


}




ISLParser.ProgramContext = ProgramContext; 
ISLParser.DefOrExprContext = DefOrExprContext; 
ISLParser.DefinitionContext = DefinitionContext; 
ISLParser.ExprContext = ExprContext; 
ISLParser.QuotedContext = QuotedContext; 
ISLParser.QuasiQuotedContext = QuasiQuotedContext; 
ISLParser.TestCaseContext = TestCaseContext; 
ISLParser.LibraryRequireContext = LibraryRequireContext; 
ISLParser.PkgContext = PkgContext; 
ISLParser.NameContext = NameContext; 
