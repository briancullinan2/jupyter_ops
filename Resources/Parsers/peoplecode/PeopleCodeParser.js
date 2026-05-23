// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/peoplecode/PeopleCode.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import PeopleCodeListener from './PeopleCodeListener.js';
const serializedATN = [4,1,83,467,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,1,0,1,0,1,0,1,1,1,1,
4,1,86,8,1,11,1,12,1,87,5,1,90,8,1,10,1,12,1,93,9,1,1,1,3,1,96,8,1,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,3,2,119,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,128,8,2,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,144,8,3,1,3,1,3,1,3,3,3,149,
8,3,1,3,1,3,1,3,1,3,3,3,155,8,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,163,8,3,1,3,
1,3,1,3,1,3,3,3,169,8,3,1,3,1,3,1,3,1,3,3,3,175,8,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,192,8,3,1,3,5,3,195,8,3,10,3,
12,3,198,9,3,1,4,1,4,1,4,5,4,203,8,4,10,4,12,4,206,9,4,1,5,1,5,1,5,1,5,1,
5,5,5,213,8,5,10,5,12,5,216,9,5,1,6,1,6,1,6,3,6,221,8,6,1,7,1,7,1,7,3,7,
226,8,7,1,7,3,7,229,8,7,1,8,1,8,1,8,3,8,234,8,8,1,9,1,9,1,9,5,9,239,8,9,
10,9,12,9,242,9,9,1,9,1,9,1,9,1,10,1,10,1,10,4,10,250,8,10,11,10,12,10,251,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,14,1,
14,1,14,5,14,270,8,14,10,14,12,14,273,9,14,1,14,1,14,1,15,3,15,278,8,15,
1,15,1,15,5,15,282,8,15,10,15,12,15,285,9,15,4,15,287,8,15,11,15,12,15,288,
1,16,1,16,1,16,1,16,3,16,295,8,16,1,17,1,17,1,17,1,17,3,17,301,8,17,1,18,
1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,3,19,312,8,19,1,19,3,19,315,8,19,
1,19,3,19,318,8,19,1,20,1,20,1,20,1,20,1,20,5,20,325,8,20,10,20,12,20,328,
9,20,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,
23,1,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,3,25,352,8,25,1,25,3,25,355,8,
25,1,25,3,25,358,8,25,1,26,1,26,1,26,1,26,5,26,364,8,26,10,26,12,26,367,
9,26,3,26,369,8,26,1,26,1,26,1,27,1,27,1,27,3,27,376,8,27,1,28,1,28,1,28,
1,29,1,29,1,29,1,29,3,29,385,8,29,1,29,1,29,1,29,3,29,390,8,29,1,29,3,29,
393,8,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,406,
8,30,1,30,1,30,1,30,1,31,1,31,1,31,3,31,414,8,31,1,31,1,31,1,31,1,32,1,32,
1,32,4,32,422,8,32,11,32,12,32,423,1,32,3,32,427,8,32,1,32,1,32,1,33,1,33,
1,33,3,33,434,8,33,1,33,1,33,1,33,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,
1,35,1,36,1,36,1,36,1,36,1,37,1,37,1,37,3,37,455,8,37,1,37,1,37,3,37,459,
8,37,1,37,1,37,1,38,1,38,1,39,1,39,1,39,0,1,6,40,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,
68,70,72,74,76,78,0,3,1,0,35,36,1,0,72,75,1,0,76,78,511,0,80,1,0,0,0,2,91,
1,0,0,0,4,127,1,0,0,0,6,143,1,0,0,0,8,199,1,0,0,0,10,207,1,0,0,0,12,217,
1,0,0,0,14,228,1,0,0,0,16,230,1,0,0,0,18,235,1,0,0,0,20,246,1,0,0,0,22,253,
1,0,0,0,24,260,1,0,0,0,26,264,1,0,0,0,28,266,1,0,0,0,30,277,1,0,0,0,32,294,
1,0,0,0,34,296,1,0,0,0,36,302,1,0,0,0,38,307,1,0,0,0,40,319,1,0,0,0,42,329,
1,0,0,0,44,334,1,0,0,0,46,339,1,0,0,0,48,344,1,0,0,0,50,348,1,0,0,0,52,359,
1,0,0,0,54,372,1,0,0,0,56,377,1,0,0,0,58,380,1,0,0,0,60,396,1,0,0,0,62,410,
1,0,0,0,64,418,1,0,0,0,66,430,1,0,0,0,68,438,1,0,0,0,70,441,1,0,0,0,72,447,
1,0,0,0,74,451,1,0,0,0,76,462,1,0,0,0,78,464,1,0,0,0,80,81,3,2,1,0,81,82,
5,0,0,1,82,1,1,0,0,0,83,85,3,4,2,0,84,86,5,1,0,0,85,84,1,0,0,0,86,87,1,0,
0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,83,1,0,0,0,90,93,1,0,0,
0,91,89,1,0,0,0,91,92,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,94,96,3,4,2,0,
95,94,1,0,0,0,95,96,1,0,0,0,96,3,1,0,0,0,97,128,3,16,8,0,98,128,3,22,11,
0,99,128,3,28,14,0,100,128,3,42,21,0,101,128,3,44,22,0,102,128,3,46,23,0,
103,128,3,48,24,0,104,128,3,10,5,0,105,128,3,58,29,0,106,128,3,60,30,0,107,
128,3,62,31,0,108,128,3,64,32,0,109,128,3,70,35,0,110,128,5,2,0,0,111,128,
5,3,0,0,112,113,5,4,0,0,113,128,3,6,3,0,114,115,5,5,0,0,115,128,3,6,3,0,
116,118,5,6,0,0,117,119,3,6,3,0,118,117,1,0,0,0,118,119,1,0,0,0,119,128,
1,0,0,0,120,121,5,7,0,0,121,128,3,6,3,0,122,123,3,6,3,0,123,124,5,8,0,0,
124,125,3,6,3,0,125,128,1,0,0,0,126,128,3,6,3,0,127,97,1,0,0,0,127,98,1,
0,0,0,127,99,1,0,0,0,127,100,1,0,0,0,127,101,1,0,0,0,127,102,1,0,0,0,127,
103,1,0,0,0,127,104,1,0,0,0,127,105,1,0,0,0,127,106,1,0,0,0,127,107,1,0,
0,0,127,108,1,0,0,0,127,109,1,0,0,0,127,110,1,0,0,0,127,111,1,0,0,0,127,
112,1,0,0,0,127,114,1,0,0,0,127,116,1,0,0,0,127,120,1,0,0,0,127,122,1,0,
0,0,127,126,1,0,0,0,128,5,1,0,0,0,129,130,6,3,-1,0,130,131,5,9,0,0,131,132,
3,6,3,0,132,133,5,10,0,0,133,144,1,0,0,0,134,135,5,11,0,0,135,144,3,6,3,
15,136,144,3,76,38,0,137,144,3,78,39,0,138,144,3,74,37,0,139,140,5,15,0,
0,140,144,3,6,3,8,141,142,5,16,0,0,142,144,3,6,3,7,143,129,1,0,0,0,143,134,
1,0,0,0,143,136,1,0,0,0,143,137,1,0,0,0,143,138,1,0,0,0,143,139,1,0,0,0,
143,141,1,0,0,0,144,196,1,0,0,0,145,148,10,6,0,0,146,149,5,17,0,0,147,149,
5,18,0,0,148,146,1,0,0,0,148,147,1,0,0,0,149,150,1,0,0,0,150,195,3,6,3,7,
151,154,10,5,0,0,152,155,5,19,0,0,153,155,5,15,0,0,154,152,1,0,0,0,154,153,
1,0,0,0,155,156,1,0,0,0,156,195,3,6,3,6,157,162,10,4,0,0,158,163,5,20,0,
0,159,163,5,21,0,0,160,163,5,22,0,0,161,163,5,23,0,0,162,158,1,0,0,0,162,
159,1,0,0,0,162,160,1,0,0,0,162,161,1,0,0,0,163,164,1,0,0,0,164,195,3,6,
3,5,165,168,10,3,0,0,166,169,5,8,0,0,167,169,5,24,0,0,168,166,1,0,0,0,168,
167,1,0,0,0,169,170,1,0,0,0,170,195,3,6,3,4,171,174,10,2,0,0,172,175,5,25,
0,0,173,175,5,26,0,0,174,172,1,0,0,0,174,173,1,0,0,0,175,176,1,0,0,0,176,
195,3,6,3,3,177,178,10,1,0,0,178,179,5,27,0,0,179,195,3,6,3,2,180,181,10,
11,0,0,181,182,5,12,0,0,182,195,3,78,39,0,183,184,10,10,0,0,184,185,5,13,
0,0,185,186,3,8,4,0,186,187,5,14,0,0,187,195,1,0,0,0,188,189,10,9,0,0,189,
191,5,9,0,0,190,192,3,8,4,0,191,190,1,0,0,0,191,192,1,0,0,0,192,193,1,0,
0,0,193,195,5,10,0,0,194,145,1,0,0,0,194,151,1,0,0,0,194,157,1,0,0,0,194,
165,1,0,0,0,194,171,1,0,0,0,194,177,1,0,0,0,194,180,1,0,0,0,194,183,1,0,
0,0,194,188,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,196,197,1,0,0,0,197,
7,1,0,0,0,198,196,1,0,0,0,199,204,3,6,3,0,200,201,5,28,0,0,201,203,3,6,3,
0,202,200,1,0,0,0,203,206,1,0,0,0,204,202,1,0,0,0,204,205,1,0,0,0,205,9,
1,0,0,0,206,204,1,0,0,0,207,208,5,78,0,0,208,209,3,14,7,0,209,214,3,12,6,
0,210,211,5,28,0,0,211,213,3,12,6,0,212,210,1,0,0,0,213,216,1,0,0,0,214,
212,1,0,0,0,214,215,1,0,0,0,215,11,1,0,0,0,216,214,1,0,0,0,217,220,5,76,
0,0,218,219,5,8,0,0,219,221,3,6,3,0,220,218,1,0,0,0,220,221,1,0,0,0,221,
13,1,0,0,0,222,225,5,78,0,0,223,224,5,29,0,0,224,226,3,14,7,0,225,223,1,
0,0,0,225,226,1,0,0,0,226,229,1,0,0,0,227,229,3,20,10,0,228,222,1,0,0,0,
228,227,1,0,0,0,229,15,1,0,0,0,230,233,5,30,0,0,231,234,3,18,9,0,232,234,
3,20,10,0,233,231,1,0,0,0,233,232,1,0,0,0,234,17,1,0,0,0,235,240,5,78,0,
0,236,237,5,31,0,0,237,239,5,78,0,0,238,236,1,0,0,0,239,242,1,0,0,0,240,
238,1,0,0,0,240,241,1,0,0,0,241,243,1,0,0,0,242,240,1,0,0,0,243,244,5,31,
0,0,244,245,5,17,0,0,245,19,1,0,0,0,246,249,5,78,0,0,247,248,5,31,0,0,248,
250,5,78,0,0,249,247,1,0,0,0,250,251,1,0,0,0,251,249,1,0,0,0,251,252,1,0,
0,0,252,21,1,0,0,0,253,254,5,32,0,0,254,255,5,33,0,0,255,256,5,78,0,0,256,
257,5,34,0,0,257,258,3,24,12,0,258,259,3,26,13,0,259,23,1,0,0,0,260,261,
5,78,0,0,261,262,5,12,0,0,262,263,5,78,0,0,263,25,1,0,0,0,264,265,7,0,0,
0,265,27,1,0,0,0,266,267,5,37,0,0,267,271,5,78,0,0,268,270,3,30,15,0,269,
268,1,0,0,0,270,273,1,0,0,0,271,269,1,0,0,0,271,272,1,0,0,0,272,274,1,0,
0,0,273,271,1,0,0,0,274,275,5,38,0,0,275,29,1,0,0,0,276,278,5,39,0,0,277,
276,1,0,0,0,277,278,1,0,0,0,278,286,1,0,0,0,279,283,3,32,16,0,280,282,5,
1,0,0,281,280,1,0,0,0,282,285,1,0,0,0,283,281,1,0,0,0,283,284,1,0,0,0,284,
287,1,0,0,0,285,283,1,0,0,0,286,279,1,0,0,0,287,288,1,0,0,0,288,286,1,0,
0,0,288,289,1,0,0,0,289,31,1,0,0,0,290,295,3,34,17,0,291,295,3,36,18,0,292,
295,3,38,19,0,293,295,3,40,20,0,294,290,1,0,0,0,294,291,1,0,0,0,294,292,
1,0,0,0,294,293,1,0,0,0,295,33,1,0,0,0,296,297,5,40,0,0,297,298,5,78,0,0,
298,300,3,52,26,0,299,301,3,56,28,0,300,299,1,0,0,0,300,301,1,0,0,0,301,
35,1,0,0,0,302,303,5,41,0,0,303,304,5,76,0,0,304,305,5,8,0,0,305,306,3,6,
3,0,306,37,1,0,0,0,307,308,5,42,0,0,308,309,3,14,7,0,309,311,5,78,0,0,310,
312,5,43,0,0,311,310,1,0,0,0,311,312,1,0,0,0,312,314,1,0,0,0,313,315,5,44,
0,0,314,313,1,0,0,0,314,315,1,0,0,0,315,317,1,0,0,0,316,318,5,45,0,0,317,
316,1,0,0,0,317,318,1,0,0,0,318,39,1,0,0,0,319,320,5,46,0,0,320,321,3,14,
7,0,321,326,5,76,0,0,322,323,5,28,0,0,323,325,5,76,0,0,324,322,1,0,0,0,325,
328,1,0,0,0,326,324,1,0,0,0,326,327,1,0,0,0,327,41,1,0,0,0,328,326,1,0,0,
0,329,330,5,40,0,0,330,331,5,78,0,0,331,332,3,2,1,0,332,333,5,47,0,0,333,
43,1,0,0,0,334,335,5,43,0,0,335,336,5,78,0,0,336,337,3,2,1,0,337,338,5,48,
0,0,338,45,1,0,0,0,339,340,5,44,0,0,340,341,5,78,0,0,341,342,3,2,1,0,342,
343,5,49,0,0,343,47,1,0,0,0,344,345,3,50,25,0,345,346,3,2,1,0,346,347,5,
50,0,0,347,49,1,0,0,0,348,349,5,33,0,0,349,351,5,78,0,0,350,352,3,52,26,
0,351,350,1,0,0,0,351,352,1,0,0,0,352,354,1,0,0,0,353,355,3,56,28,0,354,
353,1,0,0,0,354,355,1,0,0,0,355,357,1,0,0,0,356,358,5,1,0,0,357,356,1,0,
0,0,357,358,1,0,0,0,358,51,1,0,0,0,359,368,5,9,0,0,360,365,3,54,27,0,361,
362,5,28,0,0,362,364,3,54,27,0,363,361,1,0,0,0,364,367,1,0,0,0,365,363,1,
0,0,0,365,366,1,0,0,0,366,369,1,0,0,0,367,365,1,0,0,0,368,360,1,0,0,0,368,
369,1,0,0,0,369,370,1,0,0,0,370,371,5,10,0,0,371,53,1,0,0,0,372,375,5,76,
0,0,373,374,5,51,0,0,374,376,3,14,7,0,375,373,1,0,0,0,375,376,1,0,0,0,376,
55,1,0,0,0,377,378,5,52,0,0,378,379,3,14,7,0,379,57,1,0,0,0,380,381,5,53,
0,0,381,382,3,6,3,0,382,384,5,54,0,0,383,385,5,1,0,0,384,383,1,0,0,0,384,
385,1,0,0,0,385,386,1,0,0,0,386,392,3,2,1,0,387,389,5,55,0,0,388,390,5,1,
0,0,389,388,1,0,0,0,389,390,1,0,0,0,390,391,1,0,0,0,391,393,3,2,1,0,392,
387,1,0,0,0,392,393,1,0,0,0,393,394,1,0,0,0,394,395,5,56,0,0,395,59,1,0,
0,0,396,397,5,57,0,0,397,398,5,76,0,0,398,399,5,8,0,0,399,400,3,6,3,0,400,
401,5,58,0,0,401,405,3,6,3,0,402,406,5,1,0,0,403,404,5,59,0,0,404,406,3,
6,3,0,405,402,1,0,0,0,405,403,1,0,0,0,405,406,1,0,0,0,406,407,1,0,0,0,407,
408,3,2,1,0,408,409,5,60,0,0,409,61,1,0,0,0,410,411,5,61,0,0,411,413,3,6,
3,0,412,414,5,1,0,0,413,412,1,0,0,0,413,414,1,0,0,0,414,415,1,0,0,0,415,
416,3,2,1,0,416,417,5,62,0,0,417,63,1,0,0,0,418,419,5,63,0,0,419,421,3,6,
3,0,420,422,3,66,33,0,421,420,1,0,0,0,422,423,1,0,0,0,423,421,1,0,0,0,423,
424,1,0,0,0,424,426,1,0,0,0,425,427,3,68,34,0,426,425,1,0,0,0,426,427,1,
0,0,0,427,428,1,0,0,0,428,429,5,64,0,0,429,65,1,0,0,0,430,433,5,65,0,0,431,
434,5,8,0,0,432,434,5,23,0,0,433,431,1,0,0,0,433,432,1,0,0,0,433,434,1,0,
0,0,434,435,1,0,0,0,435,436,3,6,3,0,436,437,3,2,1,0,437,67,1,0,0,0,438,439,
5,66,0,0,439,440,3,2,1,0,440,69,1,0,0,0,441,442,5,67,0,0,442,443,3,2,1,0,
443,444,3,72,36,0,444,445,3,2,1,0,445,446,5,68,0,0,446,71,1,0,0,0,447,448,
5,69,0,0,448,449,5,70,0,0,449,450,5,76,0,0,450,73,1,0,0,0,451,454,5,71,0,
0,452,455,3,20,10,0,453,455,5,78,0,0,454,452,1,0,0,0,454,453,1,0,0,0,455,
456,1,0,0,0,456,458,5,9,0,0,457,459,3,8,4,0,458,457,1,0,0,0,458,459,1,0,
0,0,459,460,1,0,0,0,460,461,5,10,0,0,461,75,1,0,0,0,462,463,7,1,0,0,463,
77,1,0,0,0,464,465,7,2,0,0,465,79,1,0,0,0,48,87,91,95,118,127,143,148,154,
162,168,174,191,194,196,204,214,220,225,228,233,240,251,271,277,283,288,
294,300,311,314,317,326,351,354,357,365,368,375,384,389,392,405,413,423,
426,433,454,458];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PeopleCodeParser extends antlr4.Parser {

    static grammarFileName = "PeopleCode.g4";
    static literalNames = [ null, "';'", "'Exit'", "'Break'", "'Error'", 
                            "'Warning'", "'Return'", "'throw'", "'='", "'('", 
                            "')'", "'@'", "'.'", "'['", "']'", "'-'", "'Not'", 
                            "'*'", "'/'", "'+'", "'<='", "'>='", "'<'", 
                            "'>'", "'<>'", "'And'", "'Or'", "'|'", "','", 
                            "'of'", "'import'", "':'", "'Declare'", "'Function'", 
                            "'PeopleCode'", "'FieldFormula'", "'FieldChange'", 
                            "'class'", "'end-class'", "'private'", "'method'", 
                            "'Constant'", "'property'", "'get'", "'set'", 
                            "'readonly'", "'instance'", "'end-method'", 
                            "'end-get'", "'end-set'", "'End-Function'", 
                            "'As'", "'Returns'", "'If'", "'Then'", "'Else'", 
                            "'End-If'", "'For'", "'To'", "'Step'", "'End-For'", 
                            "'While'", "'End-While'", "'Evaluate'", "'End-Evaluate'", 
                            "'When'", "'When-Other'", "'try'", "'end-try'", 
                            "'catch'", "'Exception'", "'create'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "DecimalLiteral", "IntegerLiteral", "StringLiteral", 
                             "BoolLiteral", "VAR_ID", "SYS_VAR_ID", "GENERIC_ID", 
                             "REM", "COMMENT_1", "COMMENT_2", "COMMENT_3", 
                             "WS" ];
    static ruleNames = [ "program", "stmtList", "stmt", "expr", "exprList", 
                         "varDeclaration", "varDeclarator", "varType", "appClassImport", 
                         "appPkgPath", "appClassPath", "extFuncImport", 
                         "recDefnPath", "event", "classDeclaration", "classBlock", 
                         "classBlockStmt", "method", "constant", "property_", 
                         "instance", "methodImpl", "getImpl", "setImpl", 
                         "funcImpl", "funcSignature", "formalParamList", 
                         "param", "returnType", "ifStmt", "forStmt", "whileStmt", 
                         "evaluateStmt", "whenBranch", "whenOtherBranch", 
                         "tryCatchStmt", "catchSignature", "createInvocation", 
                         "literal", "id_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PeopleCodeParser.ruleNames;
        this.literalNames = PeopleCodeParser.literalNames;
        this.symbolicNames = PeopleCodeParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 3:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		case 2:
    			return this.precpred(this._ctx, 4);
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		case 5:
    			return this.precpred(this._ctx, 1);
    		case 6:
    			return this.precpred(this._ctx, 11);
    		case 7:
    			return this.precpred(this._ctx, 10);
    		case 8:
    			return this.precpred(this._ctx, 9);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PeopleCodeParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.stmtList();
	        this.state = 81;
	        this.match(PeopleCodeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stmtList() {
	    let localctx = new StmtListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PeopleCodeParser.RULE_stmtList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 83;
	                this.stmt();
	                this.state = 85; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 84;
	                    this.match(PeopleCodeParser.T__0);
	                    this.state = 87; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===1); 
	            }
	            this.state = 93;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1073842940) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2720012579) !== 0) || ((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 4081) !== 0)) {
	            this.state = 94;
	            this.stmt();
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



	stmt() {
	    let localctx = new StmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PeopleCodeParser.RULE_stmt);
	    var _la = 0;
	    try {
	        this.state = 127;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new StmtAppClassImportContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.appClassImport();
	            break;

	        case 2:
	            localctx = new StmtExternalFuncImportContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            this.extFuncImport();
	            break;

	        case 3:
	            localctx = new StmtClassDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 99;
	            this.classDeclaration();
	            break;

	        case 4:
	            localctx = new StmtMethodImplContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 100;
	            this.methodImpl();
	            break;

	        case 5:
	            localctx = new StmtGetImplContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 101;
	            this.getImpl();
	            break;

	        case 6:
	            localctx = new StmtSetImplContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 102;
	            this.setImpl();
	            break;

	        case 7:
	            localctx = new StmtFuncImplContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 103;
	            this.funcImpl();
	            break;

	        case 8:
	            localctx = new StmtVarDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 104;
	            this.varDeclaration();
	            break;

	        case 9:
	            localctx = new StmtIfContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 105;
	            this.ifStmt();
	            break;

	        case 10:
	            localctx = new StmtForContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 106;
	            this.forStmt();
	            break;

	        case 11:
	            localctx = new StmtWhileContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 107;
	            this.whileStmt();
	            break;

	        case 12:
	            localctx = new StmtEvaluateContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 108;
	            this.evaluateStmt();
	            break;

	        case 13:
	            localctx = new StmtTryCatchContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 109;
	            this.tryCatchStmt();
	            break;

	        case 14:
	            localctx = new StmtExitContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 110;
	            this.match(PeopleCodeParser.T__1);
	            break;

	        case 15:
	            localctx = new StmtBreakContext(this, localctx);
	            this.enterOuterAlt(localctx, 15);
	            this.state = 111;
	            this.match(PeopleCodeParser.T__2);
	            break;

	        case 16:
	            localctx = new StmtErrorContext(this, localctx);
	            this.enterOuterAlt(localctx, 16);
	            this.state = 112;
	            this.match(PeopleCodeParser.T__3);
	            this.state = 113;
	            this.expr(0);
	            break;

	        case 17:
	            localctx = new StmtWarningContext(this, localctx);
	            this.enterOuterAlt(localctx, 17);
	            this.state = 114;
	            this.match(PeopleCodeParser.T__4);
	            this.state = 115;
	            this.expr(0);
	            break;

	        case 18:
	            localctx = new StmtReturnContext(this, localctx);
	            this.enterOuterAlt(localctx, 18);
	            this.state = 116;
	            this.match(PeopleCodeParser.T__5);
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 100864) !== 0) || ((((_la - 71)) & ~0x1f) === 0 && ((1 << (_la - 71)) & 255) !== 0)) {
	                this.state = 117;
	                this.expr(0);
	            }

	            break;

	        case 19:
	            localctx = new StmtThrowContext(this, localctx);
	            this.enterOuterAlt(localctx, 19);
	            this.state = 120;
	            this.match(PeopleCodeParser.T__6);
	            this.state = 121;
	            this.expr(0);
	            break;

	        case 20:
	            localctx = new StmtAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 20);
	            this.state = 122;
	            this.expr(0);
	            this.state = 123;
	            this.match(PeopleCodeParser.T__7);
	            this.state = 124;
	            this.expr(0);
	            break;

	        case 21:
	            localctx = new StmtExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 21);
	            this.state = 126;
	            this.expr(0);
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, PeopleCodeParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            localctx = new ExprParenthesizedContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 130;
	            this.match(PeopleCodeParser.T__8);
	            this.state = 131;
	            this.expr(0);
	            this.state = 132;
	            this.match(PeopleCodeParser.T__9);
	            break;
	        case 11:
	            localctx = new ExprDynamicReferenceContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 134;
	            this.match(PeopleCodeParser.T__10);
	            this.state = 135;
	            this.expr(15);
	            break;
	        case 72:
	        case 73:
	        case 74:
	        case 75:
	            localctx = new ExprLiteralContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 136;
	            this.literal();
	            break;
	        case 76:
	        case 77:
	        case 78:
	            localctx = new ExprIdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 137;
	            this.id_();
	            break;
	        case 71:
	            localctx = new ExprCreateContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 138;
	            this.createInvocation();
	            break;
	        case 15:
	            localctx = new ExprNegateContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 139;
	            this.match(PeopleCodeParser.T__14);
	            this.state = 140;
	            this.expr(8);
	            break;
	        case 16:
	            localctx = new ExprNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 141;
	            this.match(PeopleCodeParser.T__15);
	            this.state = 142;
	            this.expr(7);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 196;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 194;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprMulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 145;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 148;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 17:
	                        this.state = 146;
	                        localctx.m = this.match(PeopleCodeParser.T__16);
	                        break;
	                    case 18:
	                        this.state = 147;
	                        localctx.d = this.match(PeopleCodeParser.T__17);
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 150;
	                    this.expr(7);
	                    break;

	                case 2:
	                    localctx = new ExprAddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 151;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 154;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 19:
	                        this.state = 152;
	                        localctx.a = this.match(PeopleCodeParser.T__18);
	                        break;
	                    case 15:
	                        this.state = 153;
	                        localctx.s = this.match(PeopleCodeParser.T__14);
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 156;
	                    this.expr(6);
	                    break;

	                case 3:
	                    localctx = new ExprComparisonContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 157;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 162;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 20:
	                        this.state = 158;
	                        localctx.le = this.match(PeopleCodeParser.T__19);
	                        break;
	                    case 21:
	                        this.state = 159;
	                        localctx.ge = this.match(PeopleCodeParser.T__20);
	                        break;
	                    case 22:
	                        this.state = 160;
	                        localctx.l = this.match(PeopleCodeParser.T__21);
	                        break;
	                    case 23:
	                        this.state = 161;
	                        localctx.g = this.match(PeopleCodeParser.T__22);
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 164;
	                    this.expr(5);
	                    break;

	                case 4:
	                    localctx = new ExprEqualityContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 165;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 168;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 8:
	                        this.state = 166;
	                        localctx.e = this.match(PeopleCodeParser.T__7);
	                        break;
	                    case 24:
	                        this.state = 167;
	                        localctx.i = this.match(PeopleCodeParser.T__23);
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 170;
	                    this.expr(4);
	                    break;

	                case 5:
	                    localctx = new ExprBooleanContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 171;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 174;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 25:
	                        this.state = 172;
	                        localctx.op = this.match(PeopleCodeParser.T__24);
	                        break;
	                    case 26:
	                        this.state = 173;
	                        localctx.op = this.match(PeopleCodeParser.T__25);
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 176;
	                    this.expr(3);
	                    break;

	                case 6:
	                    localctx = new ExprConcatContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 177;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 178;
	                    this.match(PeopleCodeParser.T__26);
	                    this.state = 179;
	                    this.expr(2);
	                    break;

	                case 7:
	                    localctx = new ExprDotAccessContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 180;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 181;
	                    this.match(PeopleCodeParser.T__11);
	                    this.state = 182;
	                    this.id_();
	                    break;

	                case 8:
	                    localctx = new ExprArrayIndexContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 183;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 184;
	                    this.match(PeopleCodeParser.T__12);
	                    this.state = 185;
	                    this.exprList();
	                    this.state = 186;
	                    this.match(PeopleCodeParser.T__13);
	                    break;

	                case 9:
	                    localctx = new ExprFnOrIdxCallContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 188;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 189;
	                    this.match(PeopleCodeParser.T__8);
	                    this.state = 191;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) === 0 && ((1 << _la) & 100864) !== 0) || ((((_la - 71)) & ~0x1f) === 0 && ((1 << (_la - 71)) & 255) !== 0)) {
	                        this.state = 190;
	                        this.exprList();
	                    }

	                    this.state = 193;
	                    this.match(PeopleCodeParser.T__9);
	                    break;

	                } 
	            }
	            this.state = 198;
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



	exprList() {
	    let localctx = new ExprListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PeopleCodeParser.RULE_exprList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.expr(0);
	        this.state = 204;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 200;
	            this.match(PeopleCodeParser.T__27);
	            this.state = 201;
	            this.expr(0);
	            this.state = 206;
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



	varDeclaration() {
	    let localctx = new VarDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PeopleCodeParser.RULE_varDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        localctx.varScope = this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 208;
	        this.varType();
	        this.state = 209;
	        this.varDeclarator();
	        this.state = 214;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 210;
	            this.match(PeopleCodeParser.T__27);
	            this.state = 211;
	            this.varDeclarator();
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



	varDeclarator() {
	    let localctx = new VarDeclaratorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PeopleCodeParser.RULE_varDeclarator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.match(PeopleCodeParser.VAR_ID);
	        this.state = 220;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 218;
	            this.match(PeopleCodeParser.T__7);
	            this.state = 219;
	            this.expr(0);
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



	varType() {
	    let localctx = new VarTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PeopleCodeParser.RULE_varType);
	    var _la = 0;
	    try {
	        this.state = 228;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 222;
	            this.match(PeopleCodeParser.GENERIC_ID);
	            this.state = 225;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 223;
	                this.match(PeopleCodeParser.T__28);
	                this.state = 224;
	                this.varType();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 227;
	            this.appClassPath();
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



	appClassImport() {
	    let localctx = new AppClassImportContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PeopleCodeParser.RULE_appClassImport);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.match(PeopleCodeParser.T__29);
	        this.state = 233;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 231;
	            this.appPkgPath();
	            break;

	        case 2:
	            this.state = 232;
	            this.appClassPath();
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



	appPkgPath() {
	    let localctx = new AppPkgPathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PeopleCodeParser.RULE_appPkgPath);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 240;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 236;
	                this.match(PeopleCodeParser.T__30);
	                this.state = 237;
	                this.match(PeopleCodeParser.GENERIC_ID); 
	            }
	            this.state = 242;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	        }

	        this.state = 243;
	        this.match(PeopleCodeParser.T__30);
	        this.state = 244;
	        this.match(PeopleCodeParser.T__16);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	appClassPath() {
	    let localctx = new AppClassPathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PeopleCodeParser.RULE_appClassPath);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 249; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 247;
	            this.match(PeopleCodeParser.T__30);
	            this.state = 248;
	            this.match(PeopleCodeParser.GENERIC_ID);
	            this.state = 251; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===31);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	extFuncImport() {
	    let localctx = new ExtFuncImportContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, PeopleCodeParser.RULE_extFuncImport);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(PeopleCodeParser.T__31);
	        this.state = 254;
	        this.match(PeopleCodeParser.T__32);
	        this.state = 255;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 256;
	        this.match(PeopleCodeParser.T__33);
	        this.state = 257;
	        this.recDefnPath();
	        this.state = 258;
	        this.event();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	recDefnPath() {
	    let localctx = new RecDefnPathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, PeopleCodeParser.RULE_recDefnPath);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 261;
	        this.match(PeopleCodeParser.T__11);
	        this.state = 262;
	        this.match(PeopleCodeParser.GENERIC_ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	event() {
	    let localctx = new EventContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, PeopleCodeParser.RULE_event);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        _la = this._input.LA(1);
	        if(!(_la===35 || _la===36)) {
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



	classDeclaration() {
	    let localctx = new ClassDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, PeopleCodeParser.RULE_classDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 266;
	        this.match(PeopleCodeParser.T__36);
	        this.state = 267;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 271;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 143) !== 0)) {
	            this.state = 268;
	            this.classBlock();
	            this.state = 273;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 274;
	        this.match(PeopleCodeParser.T__37);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classBlock() {
	    let localctx = new ClassBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, PeopleCodeParser.RULE_classBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 276;
	            localctx.aLvl = this.match(PeopleCodeParser.T__38);
	        }

	        this.state = 286; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 279;
	        		this.classBlockStmt();
	        		this.state = 283;
	        		this._errHandler.sync(this);
	        		_la = this._input.LA(1);
	        		while(_la===1) {
	        		    this.state = 280;
	        		    this.match(PeopleCodeParser.T__0);
	        		    this.state = 285;
	        		    this._errHandler.sync(this);
	        		    _la = this._input.LA(1);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 288; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,25, this._ctx);
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



	classBlockStmt() {
	    let localctx = new ClassBlockStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, PeopleCodeParser.RULE_classBlockStmt);
	    try {
	        this.state = 294;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 40:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 290;
	            this.method();
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 291;
	            this.constant();
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 292;
	            this.property_();
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 293;
	            this.instance();
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



	method() {
	    let localctx = new MethodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, PeopleCodeParser.RULE_method);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this.match(PeopleCodeParser.T__39);
	        this.state = 297;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 298;
	        this.formalParamList();
	        this.state = 300;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===52) {
	            this.state = 299;
	            this.returnType();
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



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, PeopleCodeParser.RULE_constant);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.match(PeopleCodeParser.T__40);
	        this.state = 303;
	        this.match(PeopleCodeParser.VAR_ID);
	        this.state = 304;
	        this.match(PeopleCodeParser.T__7);
	        this.state = 305;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 38, PeopleCodeParser.RULE_property_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.match(PeopleCodeParser.T__41);
	        this.state = 308;
	        this.varType();
	        this.state = 309;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 311;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 310;
	            localctx.g = this.match(PeopleCodeParser.T__42);
	        }

	        this.state = 314;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 313;
	            localctx.s = this.match(PeopleCodeParser.T__43);
	        }

	        this.state = 317;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 316;
	            localctx.r = this.match(PeopleCodeParser.T__44);
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



	instance() {
	    let localctx = new InstanceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, PeopleCodeParser.RULE_instance);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        this.match(PeopleCodeParser.T__45);
	        this.state = 320;
	        this.varType();
	        this.state = 321;
	        this.match(PeopleCodeParser.VAR_ID);
	        this.state = 326;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 322;
	            this.match(PeopleCodeParser.T__27);
	            this.state = 323;
	            this.match(PeopleCodeParser.VAR_ID);
	            this.state = 328;
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



	methodImpl() {
	    let localctx = new MethodImplContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, PeopleCodeParser.RULE_methodImpl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 329;
	        this.match(PeopleCodeParser.T__39);
	        this.state = 330;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 331;
	        this.stmtList();
	        this.state = 332;
	        localctx.endmethod = this.match(PeopleCodeParser.T__46);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	getImpl() {
	    let localctx = new GetImplContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, PeopleCodeParser.RULE_getImpl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
	        this.match(PeopleCodeParser.T__42);
	        this.state = 335;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 336;
	        this.stmtList();
	        this.state = 337;
	        localctx.endget = this.match(PeopleCodeParser.T__47);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setImpl() {
	    let localctx = new SetImplContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, PeopleCodeParser.RULE_setImpl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 339;
	        this.match(PeopleCodeParser.T__43);
	        this.state = 340;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 341;
	        this.stmtList();
	        this.state = 342;
	        localctx.endset = this.match(PeopleCodeParser.T__48);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcImpl() {
	    let localctx = new FuncImplContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, PeopleCodeParser.RULE_funcImpl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.funcSignature();
	        this.state = 345;
	        this.stmtList();
	        this.state = 346;
	        localctx.endfunction = this.match(PeopleCodeParser.T__49);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcSignature() {
	    let localctx = new FuncSignatureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, PeopleCodeParser.RULE_funcSignature);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 348;
	        this.match(PeopleCodeParser.T__32);
	        this.state = 349;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 351;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        if(la_===1) {
	            this.state = 350;
	            this.formalParamList();

	        }
	        this.state = 354;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===52) {
	            this.state = 353;
	            this.returnType();
	        }

	        this.state = 357;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 356;
	            this.match(PeopleCodeParser.T__0);
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



	formalParamList() {
	    let localctx = new FormalParamListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, PeopleCodeParser.RULE_formalParamList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 359;
	        this.match(PeopleCodeParser.T__8);
	        this.state = 368;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===76) {
	            this.state = 360;
	            this.param();
	            this.state = 365;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===28) {
	                this.state = 361;
	                this.match(PeopleCodeParser.T__27);
	                this.state = 362;
	                this.param();
	                this.state = 367;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 370;
	        this.match(PeopleCodeParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, PeopleCodeParser.RULE_param);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 372;
	        this.match(PeopleCodeParser.VAR_ID);
	        this.state = 375;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===51) {
	            this.state = 373;
	            this.match(PeopleCodeParser.T__50);
	            this.state = 374;
	            this.varType();
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



	returnType() {
	    let localctx = new ReturnTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, PeopleCodeParser.RULE_returnType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.match(PeopleCodeParser.T__51);
	        this.state = 378;
	        this.varType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStmt() {
	    let localctx = new IfStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, PeopleCodeParser.RULE_ifStmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 380;
	        this.match(PeopleCodeParser.T__52);
	        this.state = 381;
	        this.expr(0);
	        this.state = 382;
	        this.match(PeopleCodeParser.T__53);
	        this.state = 384;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 383;
	            this.match(PeopleCodeParser.T__0);
	        }

	        this.state = 386;
	        this.stmtList();
	        this.state = 392;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===55) {
	            this.state = 387;
	            localctx.elsetok = this.match(PeopleCodeParser.T__54);
	            this.state = 389;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 388;
	                this.match(PeopleCodeParser.T__0);
	            }

	            this.state = 391;
	            this.stmtList();
	        }

	        this.state = 394;
	        localctx.endif = this.match(PeopleCodeParser.T__55);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStmt() {
	    let localctx = new ForStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, PeopleCodeParser.RULE_forStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        this.match(PeopleCodeParser.T__56);
	        this.state = 397;
	        this.match(PeopleCodeParser.VAR_ID);
	        this.state = 398;
	        this.match(PeopleCodeParser.T__7);
	        this.state = 399;
	        this.expr(0);
	        this.state = 400;
	        this.match(PeopleCodeParser.T__57);
	        this.state = 401;
	        this.expr(0);
	        this.state = 405;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 1:
	        	this.state = 402;
	        	this.match(PeopleCodeParser.T__0);
	        	break;
	        case 59:
	        	this.state = 403;
	        	this.match(PeopleCodeParser.T__58);
	        	this.state = 404;
	        	this.expr(0);
	        	break;
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 9:
	        case 11:
	        case 15:
	        case 16:
	        case 30:
	        case 32:
	        case 33:
	        case 37:
	        case 40:
	        case 43:
	        case 44:
	        case 53:
	        case 57:
	        case 60:
	        case 61:
	        case 63:
	        case 67:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	        case 78:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 407;
	        this.stmtList();
	        this.state = 408;
	        localctx.endfor = this.match(PeopleCodeParser.T__59);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStmt() {
	    let localctx = new WhileStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, PeopleCodeParser.RULE_whileStmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 410;
	        this.match(PeopleCodeParser.T__60);
	        this.state = 411;
	        this.expr(0);
	        this.state = 413;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 412;
	            this.match(PeopleCodeParser.T__0);
	        }

	        this.state = 415;
	        this.stmtList();
	        this.state = 416;
	        this.match(PeopleCodeParser.T__61);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	evaluateStmt() {
	    let localctx = new EvaluateStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, PeopleCodeParser.RULE_evaluateStmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 418;
	        this.match(PeopleCodeParser.T__62);
	        this.state = 419;
	        this.expr(0);
	        this.state = 421; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 420;
	            this.whenBranch();
	            this.state = 423; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===65);
	        this.state = 426;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===66) {
	            this.state = 425;
	            this.whenOtherBranch();
	        }

	        this.state = 428;
	        localctx.endevaluate = this.match(PeopleCodeParser.T__63);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whenBranch() {
	    let localctx = new WhenBranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, PeopleCodeParser.RULE_whenBranch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 430;
	        this.match(PeopleCodeParser.T__64);
	        this.state = 433;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 8:
	        	this.state = 431;
	        	localctx.op = this.match(PeopleCodeParser.T__7);
	        	break;
	        case 23:
	        	this.state = 432;
	        	localctx.op = this.match(PeopleCodeParser.T__22);
	        	break;
	        case 9:
	        case 11:
	        case 15:
	        case 16:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	        case 78:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 435;
	        this.expr(0);
	        this.state = 436;
	        this.stmtList();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whenOtherBranch() {
	    let localctx = new WhenOtherBranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, PeopleCodeParser.RULE_whenOtherBranch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 438;
	        this.match(PeopleCodeParser.T__65);
	        this.state = 439;
	        this.stmtList();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tryCatchStmt() {
	    let localctx = new TryCatchStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, PeopleCodeParser.RULE_tryCatchStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 441;
	        localctx.trytok = this.match(PeopleCodeParser.T__66);
	        this.state = 442;
	        this.stmtList();
	        this.state = 443;
	        this.catchSignature();
	        this.state = 444;
	        this.stmtList();
	        this.state = 445;
	        localctx.endtry = this.match(PeopleCodeParser.T__67);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	catchSignature() {
	    let localctx = new CatchSignatureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, PeopleCodeParser.RULE_catchSignature);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 447;
	        this.match(PeopleCodeParser.T__68);
	        this.state = 448;
	        localctx.exClass = this.match(PeopleCodeParser.T__69);
	        this.state = 449;
	        this.match(PeopleCodeParser.VAR_ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createInvocation() {
	    let localctx = new CreateInvocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, PeopleCodeParser.RULE_createInvocation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 451;
	        this.match(PeopleCodeParser.T__70);
	        this.state = 454;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 452;
	            this.appClassPath();
	            break;

	        case 2:
	            this.state = 453;
	            this.match(PeopleCodeParser.GENERIC_ID);
	            break;

	        }
	        this.state = 456;
	        this.match(PeopleCodeParser.T__8);
	        this.state = 458;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 100864) !== 0) || ((((_la - 71)) & ~0x1f) === 0 && ((1 << (_la - 71)) & 255) !== 0)) {
	            this.state = 457;
	            this.exprList();
	        }

	        this.state = 460;
	        this.match(PeopleCodeParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, PeopleCodeParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 462;
	        _la = this._input.LA(1);
	        if(!(((((_la - 72)) & ~0x1f) === 0 && ((1 << (_la - 72)) & 15) !== 0))) {
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



	id_() {
	    let localctx = new Id_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, PeopleCodeParser.RULE_id_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 464;
	        _la = this._input.LA(1);
	        if(!(((((_la - 76)) & ~0x1f) === 0 && ((1 << (_la - 76)) & 7) !== 0))) {
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

PeopleCodeParser.EOF = antlr4.Token.EOF;
PeopleCodeParser.T__0 = 1;
PeopleCodeParser.T__1 = 2;
PeopleCodeParser.T__2 = 3;
PeopleCodeParser.T__3 = 4;
PeopleCodeParser.T__4 = 5;
PeopleCodeParser.T__5 = 6;
PeopleCodeParser.T__6 = 7;
PeopleCodeParser.T__7 = 8;
PeopleCodeParser.T__8 = 9;
PeopleCodeParser.T__9 = 10;
PeopleCodeParser.T__10 = 11;
PeopleCodeParser.T__11 = 12;
PeopleCodeParser.T__12 = 13;
PeopleCodeParser.T__13 = 14;
PeopleCodeParser.T__14 = 15;
PeopleCodeParser.T__15 = 16;
PeopleCodeParser.T__16 = 17;
PeopleCodeParser.T__17 = 18;
PeopleCodeParser.T__18 = 19;
PeopleCodeParser.T__19 = 20;
PeopleCodeParser.T__20 = 21;
PeopleCodeParser.T__21 = 22;
PeopleCodeParser.T__22 = 23;
PeopleCodeParser.T__23 = 24;
PeopleCodeParser.T__24 = 25;
PeopleCodeParser.T__25 = 26;
PeopleCodeParser.T__26 = 27;
PeopleCodeParser.T__27 = 28;
PeopleCodeParser.T__28 = 29;
PeopleCodeParser.T__29 = 30;
PeopleCodeParser.T__30 = 31;
PeopleCodeParser.T__31 = 32;
PeopleCodeParser.T__32 = 33;
PeopleCodeParser.T__33 = 34;
PeopleCodeParser.T__34 = 35;
PeopleCodeParser.T__35 = 36;
PeopleCodeParser.T__36 = 37;
PeopleCodeParser.T__37 = 38;
PeopleCodeParser.T__38 = 39;
PeopleCodeParser.T__39 = 40;
PeopleCodeParser.T__40 = 41;
PeopleCodeParser.T__41 = 42;
PeopleCodeParser.T__42 = 43;
PeopleCodeParser.T__43 = 44;
PeopleCodeParser.T__44 = 45;
PeopleCodeParser.T__45 = 46;
PeopleCodeParser.T__46 = 47;
PeopleCodeParser.T__47 = 48;
PeopleCodeParser.T__48 = 49;
PeopleCodeParser.T__49 = 50;
PeopleCodeParser.T__50 = 51;
PeopleCodeParser.T__51 = 52;
PeopleCodeParser.T__52 = 53;
PeopleCodeParser.T__53 = 54;
PeopleCodeParser.T__54 = 55;
PeopleCodeParser.T__55 = 56;
PeopleCodeParser.T__56 = 57;
PeopleCodeParser.T__57 = 58;
PeopleCodeParser.T__58 = 59;
PeopleCodeParser.T__59 = 60;
PeopleCodeParser.T__60 = 61;
PeopleCodeParser.T__61 = 62;
PeopleCodeParser.T__62 = 63;
PeopleCodeParser.T__63 = 64;
PeopleCodeParser.T__64 = 65;
PeopleCodeParser.T__65 = 66;
PeopleCodeParser.T__66 = 67;
PeopleCodeParser.T__67 = 68;
PeopleCodeParser.T__68 = 69;
PeopleCodeParser.T__69 = 70;
PeopleCodeParser.T__70 = 71;
PeopleCodeParser.DecimalLiteral = 72;
PeopleCodeParser.IntegerLiteral = 73;
PeopleCodeParser.StringLiteral = 74;
PeopleCodeParser.BoolLiteral = 75;
PeopleCodeParser.VAR_ID = 76;
PeopleCodeParser.SYS_VAR_ID = 77;
PeopleCodeParser.GENERIC_ID = 78;
PeopleCodeParser.REM = 79;
PeopleCodeParser.COMMENT_1 = 80;
PeopleCodeParser.COMMENT_2 = 81;
PeopleCodeParser.COMMENT_3 = 82;
PeopleCodeParser.WS = 83;

PeopleCodeParser.RULE_program = 0;
PeopleCodeParser.RULE_stmtList = 1;
PeopleCodeParser.RULE_stmt = 2;
PeopleCodeParser.RULE_expr = 3;
PeopleCodeParser.RULE_exprList = 4;
PeopleCodeParser.RULE_varDeclaration = 5;
PeopleCodeParser.RULE_varDeclarator = 6;
PeopleCodeParser.RULE_varType = 7;
PeopleCodeParser.RULE_appClassImport = 8;
PeopleCodeParser.RULE_appPkgPath = 9;
PeopleCodeParser.RULE_appClassPath = 10;
PeopleCodeParser.RULE_extFuncImport = 11;
PeopleCodeParser.RULE_recDefnPath = 12;
PeopleCodeParser.RULE_event = 13;
PeopleCodeParser.RULE_classDeclaration = 14;
PeopleCodeParser.RULE_classBlock = 15;
PeopleCodeParser.RULE_classBlockStmt = 16;
PeopleCodeParser.RULE_method = 17;
PeopleCodeParser.RULE_constant = 18;
PeopleCodeParser.RULE_property_ = 19;
PeopleCodeParser.RULE_instance = 20;
PeopleCodeParser.RULE_methodImpl = 21;
PeopleCodeParser.RULE_getImpl = 22;
PeopleCodeParser.RULE_setImpl = 23;
PeopleCodeParser.RULE_funcImpl = 24;
PeopleCodeParser.RULE_funcSignature = 25;
PeopleCodeParser.RULE_formalParamList = 26;
PeopleCodeParser.RULE_param = 27;
PeopleCodeParser.RULE_returnType = 28;
PeopleCodeParser.RULE_ifStmt = 29;
PeopleCodeParser.RULE_forStmt = 30;
PeopleCodeParser.RULE_whileStmt = 31;
PeopleCodeParser.RULE_evaluateStmt = 32;
PeopleCodeParser.RULE_whenBranch = 33;
PeopleCodeParser.RULE_whenOtherBranch = 34;
PeopleCodeParser.RULE_tryCatchStmt = 35;
PeopleCodeParser.RULE_catchSignature = 36;
PeopleCodeParser.RULE_createInvocation = 37;
PeopleCodeParser.RULE_literal = 38;
PeopleCodeParser.RULE_id_ = 39;

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
        this.ruleIndex = PeopleCodeParser.RULE_program;
    }

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	EOF() {
	    return this.getToken(PeopleCodeParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StmtListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_stmtList;
    }

	stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtContext);
	    } else {
	        return this.getTypedRuleContext(StmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtList(this);
		}
	}


}



class StmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_stmt;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StmtReturnContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtReturn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtReturn(this);
		}
	}


}

PeopleCodeParser.StmtReturnContext = StmtReturnContext;

class StmtEvaluateContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	evaluateStmt() {
	    return this.getTypedRuleContext(EvaluateStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtEvaluate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtEvaluate(this);
		}
	}


}

PeopleCodeParser.StmtEvaluateContext = StmtEvaluateContext;

class StmtAppClassImportContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	appClassImport() {
	    return this.getTypedRuleContext(AppClassImportContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtAppClassImport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtAppClassImport(this);
		}
	}


}

PeopleCodeParser.StmtAppClassImportContext = StmtAppClassImportContext;

class StmtWarningContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtWarning(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtWarning(this);
		}
	}


}

PeopleCodeParser.StmtWarningContext = StmtWarningContext;

class StmtWhileContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	whileStmt() {
	    return this.getTypedRuleContext(WhileStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtWhile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtWhile(this);
		}
	}


}

PeopleCodeParser.StmtWhileContext = StmtWhileContext;

class StmtExprContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtExpr(this);
		}
	}


}

PeopleCodeParser.StmtExprContext = StmtExprContext;

class StmtSetImplContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	setImpl() {
	    return this.getTypedRuleContext(SetImplContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtSetImpl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtSetImpl(this);
		}
	}


}

PeopleCodeParser.StmtSetImplContext = StmtSetImplContext;

class StmtMethodImplContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	methodImpl() {
	    return this.getTypedRuleContext(MethodImplContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtMethodImpl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtMethodImpl(this);
		}
	}


}

PeopleCodeParser.StmtMethodImplContext = StmtMethodImplContext;

class StmtTryCatchContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	tryCatchStmt() {
	    return this.getTypedRuleContext(TryCatchStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtTryCatch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtTryCatch(this);
		}
	}


}

PeopleCodeParser.StmtTryCatchContext = StmtTryCatchContext;

class StmtVarDeclarationContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	varDeclaration() {
	    return this.getTypedRuleContext(VarDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtVarDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtVarDeclaration(this);
		}
	}


}

PeopleCodeParser.StmtVarDeclarationContext = StmtVarDeclarationContext;

class StmtForContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	forStmt() {
	    return this.getTypedRuleContext(ForStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtFor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtFor(this);
		}
	}


}

PeopleCodeParser.StmtForContext = StmtForContext;

class StmtAssignContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtAssign(this);
		}
	}


}

PeopleCodeParser.StmtAssignContext = StmtAssignContext;

class StmtErrorContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtError(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtError(this);
		}
	}


}

PeopleCodeParser.StmtErrorContext = StmtErrorContext;

class StmtExternalFuncImportContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	extFuncImport() {
	    return this.getTypedRuleContext(ExtFuncImportContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtExternalFuncImport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtExternalFuncImport(this);
		}
	}


}

PeopleCodeParser.StmtExternalFuncImportContext = StmtExternalFuncImportContext;

class StmtFuncImplContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	funcImpl() {
	    return this.getTypedRuleContext(FuncImplContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtFuncImpl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtFuncImpl(this);
		}
	}


}

PeopleCodeParser.StmtFuncImplContext = StmtFuncImplContext;

class StmtGetImplContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	getImpl() {
	    return this.getTypedRuleContext(GetImplContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtGetImpl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtGetImpl(this);
		}
	}


}

PeopleCodeParser.StmtGetImplContext = StmtGetImplContext;

class StmtThrowContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtThrow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtThrow(this);
		}
	}


}

PeopleCodeParser.StmtThrowContext = StmtThrowContext;

class StmtIfContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ifStmt() {
	    return this.getTypedRuleContext(IfStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtIf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtIf(this);
		}
	}


}

PeopleCodeParser.StmtIfContext = StmtIfContext;

class StmtClassDeclarationContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	classDeclaration() {
	    return this.getTypedRuleContext(ClassDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtClassDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtClassDeclaration(this);
		}
	}


}

PeopleCodeParser.StmtClassDeclarationContext = StmtClassDeclarationContext;

class StmtExitContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtExit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtExit(this);
		}
	}


}

PeopleCodeParser.StmtExitContext = StmtExitContext;

class StmtBreakContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtBreak(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtBreak(this);
		}
	}


}

PeopleCodeParser.StmtBreakContext = StmtBreakContext;

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
        this.ruleIndex = PeopleCodeParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ExprComparisonContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.le = null;;
        this.ge = null;;
        this.l = null;;
        this.g = null;;
        super.copyFrom(ctx);
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

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprComparison(this);
		}
	}


}

PeopleCodeParser.ExprComparisonContext = ExprComparisonContext;

class ExprConcatContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprConcat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprConcat(this);
		}
	}


}

PeopleCodeParser.ExprConcatContext = ExprConcatContext;

class ExprCreateContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	createInvocation() {
	    return this.getTypedRuleContext(CreateInvocationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprCreate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprCreate(this);
		}
	}


}

PeopleCodeParser.ExprCreateContext = ExprCreateContext;

class ExprBooleanContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
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

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprBoolean(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprBoolean(this);
		}
	}


}

PeopleCodeParser.ExprBooleanContext = ExprBooleanContext;

class ExprNotContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprNot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprNot(this);
		}
	}


}

PeopleCodeParser.ExprNotContext = ExprNotContext;

class ExprAddSubContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.a = null;;
        this.s = null;;
        super.copyFrom(ctx);
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

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprAddSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprAddSub(this);
		}
	}


}

PeopleCodeParser.ExprAddSubContext = ExprAddSubContext;

class ExprDotAccessContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprDotAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprDotAccess(this);
		}
	}


}

PeopleCodeParser.ExprDotAccessContext = ExprDotAccessContext;

class ExprFnOrIdxCallContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprFnOrIdxCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprFnOrIdxCall(this);
		}
	}


}

PeopleCodeParser.ExprFnOrIdxCallContext = ExprFnOrIdxCallContext;

class ExprParenthesizedContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprParenthesized(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprParenthesized(this);
		}
	}


}

PeopleCodeParser.ExprParenthesizedContext = ExprParenthesizedContext;

class ExprMulDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.m = null;;
        this.d = null;;
        super.copyFrom(ctx);
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

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprMulDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprMulDiv(this);
		}
	}


}

PeopleCodeParser.ExprMulDivContext = ExprMulDivContext;

class ExprNegateContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprNegate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprNegate(this);
		}
	}


}

PeopleCodeParser.ExprNegateContext = ExprNegateContext;

class ExprArrayIndexContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprArrayIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprArrayIndex(this);
		}
	}


}

PeopleCodeParser.ExprArrayIndexContext = ExprArrayIndexContext;

class ExprLiteralContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprLiteral(this);
		}
	}


}

PeopleCodeParser.ExprLiteralContext = ExprLiteralContext;

class ExprEqualityContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.e = null;;
        this.i = null;;
        super.copyFrom(ctx);
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

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprEquality(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprEquality(this);
		}
	}


}

PeopleCodeParser.ExprEqualityContext = ExprEqualityContext;

class ExprDynamicReferenceContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprDynamicReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprDynamicReference(this);
		}
	}


}

PeopleCodeParser.ExprDynamicReferenceContext = ExprDynamicReferenceContext;

class ExprIdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprId(this);
		}
	}


}

PeopleCodeParser.ExprIdContext = ExprIdContext;

class ExprListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_exprList;
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

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprList(this);
		}
	}


}



class VarDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_varDeclaration;
        this.varScope = null;
    }

	varType() {
	    return this.getTypedRuleContext(VarTypeContext,0);
	};

	varDeclarator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarDeclaratorContext);
	    } else {
	        return this.getTypedRuleContext(VarDeclaratorContext,i);
	    }
	};

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterVarDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitVarDeclaration(this);
		}
	}


}



class VarDeclaratorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_varDeclarator;
    }

	VAR_ID() {
	    return this.getToken(PeopleCodeParser.VAR_ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterVarDeclarator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitVarDeclarator(this);
		}
	}


}



class VarTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_varType;
    }

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	varType() {
	    return this.getTypedRuleContext(VarTypeContext,0);
	};

	appClassPath() {
	    return this.getTypedRuleContext(AppClassPathContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterVarType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitVarType(this);
		}
	}


}



class AppClassImportContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_appClassImport;
    }

	appPkgPath() {
	    return this.getTypedRuleContext(AppPkgPathContext,0);
	};

	appClassPath() {
	    return this.getTypedRuleContext(AppClassPathContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterAppClassImport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitAppClassImport(this);
		}
	}


}



class AppPkgPathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_appPkgPath;
    }

	GENERIC_ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PeopleCodeParser.GENERIC_ID);
	    } else {
	        return this.getToken(PeopleCodeParser.GENERIC_ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterAppPkgPath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitAppPkgPath(this);
		}
	}


}



class AppClassPathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_appClassPath;
    }

	GENERIC_ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PeopleCodeParser.GENERIC_ID);
	    } else {
	        return this.getToken(PeopleCodeParser.GENERIC_ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterAppClassPath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitAppClassPath(this);
		}
	}


}



class ExtFuncImportContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_extFuncImport;
    }

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	recDefnPath() {
	    return this.getTypedRuleContext(RecDefnPathContext,0);
	};

	event() {
	    return this.getTypedRuleContext(EventContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExtFuncImport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExtFuncImport(this);
		}
	}


}



class RecDefnPathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_recDefnPath;
    }

	GENERIC_ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PeopleCodeParser.GENERIC_ID);
	    } else {
	        return this.getToken(PeopleCodeParser.GENERIC_ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterRecDefnPath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitRecDefnPath(this);
		}
	}


}



class EventContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_event;
    }


	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterEvent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitEvent(this);
		}
	}


}



class ClassDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_classDeclaration;
    }

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	classBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassBlockContext);
	    } else {
	        return this.getTypedRuleContext(ClassBlockContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterClassDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitClassDeclaration(this);
		}
	}


}



class ClassBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_classBlock;
        this.aLvl = null;
    }

	classBlockStmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassBlockStmtContext);
	    } else {
	        return this.getTypedRuleContext(ClassBlockStmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterClassBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitClassBlock(this);
		}
	}


}



class ClassBlockStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_classBlockStmt;
    }

	method() {
	    return this.getTypedRuleContext(MethodContext,0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	property_() {
	    return this.getTypedRuleContext(Property_Context,0);
	};

	instance() {
	    return this.getTypedRuleContext(InstanceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterClassBlockStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitClassBlockStmt(this);
		}
	}


}



class MethodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_method;
    }

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	formalParamList() {
	    return this.getTypedRuleContext(FormalParamListContext,0);
	};

	returnType() {
	    return this.getTypedRuleContext(ReturnTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitMethod(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_constant;
    }

	VAR_ID() {
	    return this.getToken(PeopleCodeParser.VAR_ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitConstant(this);
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
        this.ruleIndex = PeopleCodeParser.RULE_property_;
        this.g = null;
        this.s = null;
        this.r = null;
    }

	varType() {
	    return this.getTypedRuleContext(VarTypeContext,0);
	};

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterProperty_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitProperty_(this);
		}
	}


}



class InstanceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_instance;
    }

	varType() {
	    return this.getTypedRuleContext(VarTypeContext,0);
	};

	VAR_ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PeopleCodeParser.VAR_ID);
	    } else {
	        return this.getToken(PeopleCodeParser.VAR_ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterInstance(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitInstance(this);
		}
	}


}



class MethodImplContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_methodImpl;
        this.endmethod = null;
    }

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterMethodImpl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitMethodImpl(this);
		}
	}


}



class GetImplContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_getImpl;
        this.endget = null;
    }

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterGetImpl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitGetImpl(this);
		}
	}


}



class SetImplContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_setImpl;
        this.endset = null;
    }

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterSetImpl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitSetImpl(this);
		}
	}


}



class FuncImplContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_funcImpl;
        this.endfunction = null;
    }

	funcSignature() {
	    return this.getTypedRuleContext(FuncSignatureContext,0);
	};

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterFuncImpl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitFuncImpl(this);
		}
	}


}



class FuncSignatureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_funcSignature;
    }

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	formalParamList() {
	    return this.getTypedRuleContext(FormalParamListContext,0);
	};

	returnType() {
	    return this.getTypedRuleContext(ReturnTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterFuncSignature(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitFuncSignature(this);
		}
	}


}



class FormalParamListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_formalParamList;
    }

	param = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParamContext);
	    } else {
	        return this.getTypedRuleContext(ParamContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterFormalParamList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitFormalParamList(this);
		}
	}


}



class ParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_param;
    }

	VAR_ID() {
	    return this.getToken(PeopleCodeParser.VAR_ID, 0);
	};

	varType() {
	    return this.getTypedRuleContext(VarTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitParam(this);
		}
	}


}



class ReturnTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_returnType;
    }

	varType() {
	    return this.getTypedRuleContext(VarTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterReturnType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitReturnType(this);
		}
	}


}



class IfStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_ifStmt;
        this.elsetok = null;
        this.endif = null;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	stmtList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtListContext);
	    } else {
	        return this.getTypedRuleContext(StmtListContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterIfStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitIfStmt(this);
		}
	}


}



class ForStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_forStmt;
        this.endfor = null;
    }

	VAR_ID() {
	    return this.getToken(PeopleCodeParser.VAR_ID, 0);
	};

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

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterForStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitForStmt(this);
		}
	}


}



class WhileStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_whileStmt;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterWhileStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitWhileStmt(this);
		}
	}


}



class EvaluateStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_evaluateStmt;
        this.endevaluate = null;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	whenBranch = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WhenBranchContext);
	    } else {
	        return this.getTypedRuleContext(WhenBranchContext,i);
	    }
	};

	whenOtherBranch() {
	    return this.getTypedRuleContext(WhenOtherBranchContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterEvaluateStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitEvaluateStmt(this);
		}
	}


}



class WhenBranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_whenBranch;
        this.op = null;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterWhenBranch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitWhenBranch(this);
		}
	}


}



class WhenOtherBranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_whenOtherBranch;
    }

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterWhenOtherBranch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitWhenOtherBranch(this);
		}
	}


}



class TryCatchStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_tryCatchStmt;
        this.trytok = null;
        this.endtry = null;
    }

	stmtList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtListContext);
	    } else {
	        return this.getTypedRuleContext(StmtListContext,i);
	    }
	};

	catchSignature() {
	    return this.getTypedRuleContext(CatchSignatureContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterTryCatchStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitTryCatchStmt(this);
		}
	}


}



class CatchSignatureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_catchSignature;
        this.exClass = null;
    }

	VAR_ID() {
	    return this.getToken(PeopleCodeParser.VAR_ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterCatchSignature(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitCatchSignature(this);
		}
	}


}



class CreateInvocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_createInvocation;
    }

	appClassPath() {
	    return this.getTypedRuleContext(AppClassPathContext,0);
	};

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterCreateInvocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitCreateInvocation(this);
		}
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_literal;
    }

	DecimalLiteral() {
	    return this.getToken(PeopleCodeParser.DecimalLiteral, 0);
	};

	IntegerLiteral() {
	    return this.getToken(PeopleCodeParser.IntegerLiteral, 0);
	};

	StringLiteral() {
	    return this.getToken(PeopleCodeParser.StringLiteral, 0);
	};

	BoolLiteral() {
	    return this.getToken(PeopleCodeParser.BoolLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitLiteral(this);
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
        this.ruleIndex = PeopleCodeParser.RULE_id_;
    }

	SYS_VAR_ID() {
	    return this.getToken(PeopleCodeParser.SYS_VAR_ID, 0);
	};

	VAR_ID() {
	    return this.getToken(PeopleCodeParser.VAR_ID, 0);
	};

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterId_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitId_(this);
		}
	}


}




PeopleCodeParser.ProgramContext = ProgramContext; 
PeopleCodeParser.StmtListContext = StmtListContext; 
PeopleCodeParser.StmtContext = StmtContext; 
PeopleCodeParser.ExprContext = ExprContext; 
PeopleCodeParser.ExprListContext = ExprListContext; 
PeopleCodeParser.VarDeclarationContext = VarDeclarationContext; 
PeopleCodeParser.VarDeclaratorContext = VarDeclaratorContext; 
PeopleCodeParser.VarTypeContext = VarTypeContext; 
PeopleCodeParser.AppClassImportContext = AppClassImportContext; 
PeopleCodeParser.AppPkgPathContext = AppPkgPathContext; 
PeopleCodeParser.AppClassPathContext = AppClassPathContext; 
PeopleCodeParser.ExtFuncImportContext = ExtFuncImportContext; 
PeopleCodeParser.RecDefnPathContext = RecDefnPathContext; 
PeopleCodeParser.EventContext = EventContext; 
PeopleCodeParser.ClassDeclarationContext = ClassDeclarationContext; 
PeopleCodeParser.ClassBlockContext = ClassBlockContext; 
PeopleCodeParser.ClassBlockStmtContext = ClassBlockStmtContext; 
PeopleCodeParser.MethodContext = MethodContext; 
PeopleCodeParser.ConstantContext = ConstantContext; 
PeopleCodeParser.Property_Context = Property_Context; 
PeopleCodeParser.InstanceContext = InstanceContext; 
PeopleCodeParser.MethodImplContext = MethodImplContext; 
PeopleCodeParser.GetImplContext = GetImplContext; 
PeopleCodeParser.SetImplContext = SetImplContext; 
PeopleCodeParser.FuncImplContext = FuncImplContext; 
PeopleCodeParser.FuncSignatureContext = FuncSignatureContext; 
PeopleCodeParser.FormalParamListContext = FormalParamListContext; 
PeopleCodeParser.ParamContext = ParamContext; 
PeopleCodeParser.ReturnTypeContext = ReturnTypeContext; 
PeopleCodeParser.IfStmtContext = IfStmtContext; 
PeopleCodeParser.ForStmtContext = ForStmtContext; 
PeopleCodeParser.WhileStmtContext = WhileStmtContext; 
PeopleCodeParser.EvaluateStmtContext = EvaluateStmtContext; 
PeopleCodeParser.WhenBranchContext = WhenBranchContext; 
PeopleCodeParser.WhenOtherBranchContext = WhenOtherBranchContext; 
PeopleCodeParser.TryCatchStmtContext = TryCatchStmtContext; 
PeopleCodeParser.CatchSignatureContext = CatchSignatureContext; 
PeopleCodeParser.CreateInvocationContext = CreateInvocationContext; 
PeopleCodeParser.LiteralContext = LiteralContext; 
PeopleCodeParser.Id_Context = Id_Context; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
