// Generated from Resources/Parsers/dcm/DCM_2_0_grammar.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DCM_2_0_grammarListener from './DCM_2_0_grammarListener.js';
const serializedATN = [4,1,40,588,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
1,0,5,0,86,8,0,10,0,12,0,89,9,0,1,0,1,0,4,0,93,8,0,11,0,12,0,94,1,0,1,0,
1,0,1,1,3,1,101,8,1,1,1,3,1,104,8,1,1,1,3,1,107,8,1,1,2,4,2,110,8,2,11,2,
12,2,111,1,3,1,3,5,3,116,8,3,10,3,12,3,119,9,3,1,4,1,4,1,4,1,4,1,5,1,5,1,
5,1,6,1,6,1,7,1,7,4,7,132,8,7,11,7,12,7,133,1,8,1,8,1,8,4,8,139,8,8,11,8,
12,8,140,1,8,1,8,4,8,145,8,8,11,8,12,8,146,1,9,1,9,1,9,1,9,1,9,1,10,1,10,
1,11,1,11,4,11,158,8,11,11,11,12,11,159,1,12,1,12,1,12,4,12,165,8,12,11,
12,12,12,166,1,12,1,12,4,12,171,8,12,11,12,12,12,172,1,13,1,13,1,13,5,13,
178,8,13,10,13,12,13,181,9,13,1,13,4,13,184,8,13,11,13,12,13,185,1,14,1,
14,1,15,1,15,1,16,5,16,193,8,16,10,16,12,16,196,9,16,1,17,1,17,1,17,1,17,
1,17,1,17,3,17,204,8,17,1,18,1,18,1,18,1,18,1,18,3,18,211,8,18,1,18,1,18,
1,18,1,18,1,18,4,18,218,8,18,11,18,12,18,219,1,18,1,18,1,18,1,18,1,18,3,
18,227,8,18,1,18,1,18,1,18,1,18,1,18,4,18,234,8,18,11,18,12,18,235,3,18,
238,8,18,1,19,1,19,1,19,1,19,1,19,1,19,3,19,246,8,19,1,19,4,19,249,8,19,
11,19,12,19,250,1,19,1,19,4,19,255,8,19,11,19,12,19,256,1,20,1,20,1,20,1,
20,1,20,1,20,3,20,265,8,20,1,20,3,20,268,8,20,1,20,4,20,271,8,20,11,20,12,
20,272,1,20,4,20,276,8,20,11,20,12,20,277,1,20,1,20,4,20,282,8,20,11,20,
12,20,283,1,20,1,20,1,20,1,20,1,20,1,20,3,20,292,8,20,1,20,3,20,295,8,20,
1,20,4,20,298,8,20,11,20,12,20,299,1,20,4,20,303,8,20,11,20,12,20,304,1,
20,1,20,4,20,309,8,20,11,20,12,20,310,1,20,1,20,1,20,1,20,1,20,1,20,3,20,
319,8,20,1,20,3,20,322,8,20,1,20,4,20,325,8,20,11,20,12,20,326,1,20,4,20,
330,8,20,11,20,12,20,331,1,20,1,20,4,20,336,8,20,11,20,12,20,337,3,20,340,
8,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,349,8,21,1,21,3,21,352,8,21,
1,21,3,21,355,8,21,1,21,4,21,358,8,21,11,21,12,21,359,1,21,1,21,1,21,4,21,
365,8,21,11,21,12,21,366,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,376,8,21,
1,21,3,21,379,8,21,1,21,3,21,382,8,21,1,21,4,21,385,8,21,11,21,12,21,386,
1,21,1,21,1,21,4,21,392,8,21,11,21,12,21,393,1,21,1,21,1,21,1,21,1,21,1,
21,1,21,3,21,403,8,21,1,21,3,21,406,8,21,1,21,3,21,409,8,21,1,21,4,21,412,
8,21,11,21,12,21,413,1,21,1,21,1,21,4,21,419,8,21,11,21,12,21,420,3,21,423,
8,21,1,22,1,22,1,22,1,22,1,22,1,22,3,22,431,8,22,1,22,4,22,434,8,22,11,22,
12,22,435,1,22,1,22,4,22,440,8,22,11,22,12,22,441,1,23,1,23,1,23,1,23,1,
23,1,23,1,23,1,23,1,23,4,23,453,8,23,11,23,12,23,454,1,24,3,24,458,8,24,
1,24,3,24,461,8,24,1,24,3,24,464,8,24,1,24,3,24,467,8,24,1,25,1,25,1,25,
1,25,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,29,1,
29,1,29,1,29,1,30,1,30,1,30,1,30,5,30,493,8,30,10,30,12,30,496,9,30,1,30,
1,30,1,31,1,31,1,31,1,31,1,32,1,32,4,32,506,8,32,11,32,12,32,507,1,32,1,
32,1,33,1,33,1,34,1,34,1,35,1,35,4,35,518,8,35,11,35,12,35,519,1,35,1,35,
1,36,1,36,4,36,526,8,36,11,36,12,36,527,1,36,1,36,1,36,1,36,4,36,534,8,36,
11,36,12,36,535,1,36,3,36,539,8,36,1,37,1,37,4,37,543,8,37,11,37,12,37,544,
1,37,1,37,1,37,1,37,4,37,551,8,37,11,37,12,37,552,1,37,3,37,556,8,37,1,38,
4,38,559,8,38,11,38,12,38,560,1,38,4,38,564,8,38,11,38,12,38,565,3,38,568,
8,38,1,39,1,39,1,39,1,39,4,39,574,8,39,11,39,12,39,575,1,40,1,40,1,40,1,
40,4,40,582,8,40,11,40,12,40,583,1,41,1,41,1,41,0,0,42,0,2,4,6,8,10,12,14,
16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,
64,66,68,70,72,74,76,78,80,82,0,2,1,0,34,35,1,0,36,37,630,0,87,1,0,0,0,2,
100,1,0,0,0,4,109,1,0,0,0,6,113,1,0,0,0,8,120,1,0,0,0,10,124,1,0,0,0,12,
127,1,0,0,0,14,129,1,0,0,0,16,135,1,0,0,0,18,148,1,0,0,0,20,153,1,0,0,0,
22,155,1,0,0,0,24,161,1,0,0,0,26,174,1,0,0,0,28,187,1,0,0,0,30,189,1,0,0,
0,32,194,1,0,0,0,34,203,1,0,0,0,36,237,1,0,0,0,38,239,1,0,0,0,40,339,1,0,
0,0,42,422,1,0,0,0,44,424,1,0,0,0,46,443,1,0,0,0,48,457,1,0,0,0,50,468,1,
0,0,0,52,472,1,0,0,0,54,476,1,0,0,0,56,480,1,0,0,0,58,484,1,0,0,0,60,488,
1,0,0,0,62,499,1,0,0,0,64,503,1,0,0,0,66,511,1,0,0,0,68,513,1,0,0,0,70,515,
1,0,0,0,72,538,1,0,0,0,74,555,1,0,0,0,76,567,1,0,0,0,78,569,1,0,0,0,80,577,
1,0,0,0,82,585,1,0,0,0,84,86,5,1,0,0,85,84,1,0,0,0,86,89,1,0,0,0,87,85,1,
0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,87,1,0,0,0,90,92,5,2,0,0,91,93,5,1,
0,0,92,91,1,0,0,0,93,94,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,96,1,0,0,
0,96,97,3,2,1,0,97,98,3,32,16,0,98,1,1,0,0,0,99,101,3,4,2,0,100,99,1,0,0,
0,100,101,1,0,0,0,101,103,1,0,0,0,102,104,3,16,8,0,103,102,1,0,0,0,103,104,
1,0,0,0,104,106,1,0,0,0,105,107,3,24,12,0,106,105,1,0,0,0,106,107,1,0,0,
0,107,3,1,0,0,0,108,110,3,6,3,0,109,108,1,0,0,0,110,111,1,0,0,0,111,109,
1,0,0,0,111,112,1,0,0,0,112,5,1,0,0,0,113,117,3,8,4,0,114,116,3,10,5,0,115,
114,1,0,0,0,116,119,1,0,0,0,117,115,1,0,0,0,117,118,1,0,0,0,118,7,1,0,0,
0,119,117,1,0,0,0,120,121,5,3,0,0,121,122,3,12,6,0,122,123,3,14,7,0,123,
9,1,0,0,0,124,125,5,3,0,0,125,126,3,14,7,0,126,11,1,0,0,0,127,128,5,34,0,
0,128,13,1,0,0,0,129,131,5,35,0,0,130,132,5,1,0,0,131,130,1,0,0,0,132,133,
1,0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,15,1,0,0,0,135,136,5,4,0,0,136,
138,5,1,0,0,137,139,3,18,9,0,138,137,1,0,0,0,139,140,1,0,0,0,140,138,1,0,
0,0,140,141,1,0,0,0,141,142,1,0,0,0,142,144,5,5,0,0,143,145,5,1,0,0,144,
143,1,0,0,0,145,146,1,0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,17,1,0,0,
0,148,149,5,6,0,0,149,150,5,34,0,0,150,151,3,20,10,0,151,152,3,22,11,0,152,
19,1,0,0,0,153,154,5,35,0,0,154,21,1,0,0,0,155,157,5,35,0,0,156,158,5,1,
0,0,157,156,1,0,0,0,158,159,1,0,0,0,159,157,1,0,0,0,159,160,1,0,0,0,160,
23,1,0,0,0,161,162,5,7,0,0,162,164,5,1,0,0,163,165,3,26,13,0,164,163,1,0,
0,0,165,166,1,0,0,0,166,164,1,0,0,0,166,167,1,0,0,0,167,168,1,0,0,0,168,
170,5,5,0,0,169,171,5,1,0,0,170,169,1,0,0,0,171,172,1,0,0,0,172,170,1,0,
0,0,172,173,1,0,0,0,173,25,1,0,0,0,174,175,5,8,0,0,175,179,3,28,14,0,176,
178,3,30,15,0,177,176,1,0,0,0,178,181,1,0,0,0,179,177,1,0,0,0,179,180,1,
0,0,0,180,183,1,0,0,0,181,179,1,0,0,0,182,184,5,1,0,0,183,182,1,0,0,0,184,
185,1,0,0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,27,1,0,0,0,187,188,5,34,
0,0,188,29,1,0,0,0,189,190,5,34,0,0,190,31,1,0,0,0,191,193,3,34,17,0,192,
191,1,0,0,0,193,196,1,0,0,0,194,192,1,0,0,0,194,195,1,0,0,0,195,33,1,0,0,
0,196,194,1,0,0,0,197,204,3,36,18,0,198,204,3,38,19,0,199,204,3,40,20,0,
200,204,3,42,21,0,201,204,3,44,22,0,202,204,3,46,23,0,203,197,1,0,0,0,203,
198,1,0,0,0,203,199,1,0,0,0,203,200,1,0,0,0,203,201,1,0,0,0,203,202,1,0,
0,0,204,35,1,0,0,0,205,206,5,9,0,0,206,207,5,34,0,0,207,208,5,1,0,0,208,
210,3,48,24,0,209,211,3,54,27,0,210,209,1,0,0,0,210,211,1,0,0,0,211,212,
1,0,0,0,212,213,5,10,0,0,213,214,3,82,41,0,214,215,5,1,0,0,215,217,5,5,0,
0,216,218,5,1,0,0,217,216,1,0,0,0,218,219,1,0,0,0,219,217,1,0,0,0,219,220,
1,0,0,0,220,238,1,0,0,0,221,222,5,9,0,0,222,223,5,34,0,0,223,224,5,1,0,0,
224,226,3,48,24,0,225,227,3,54,27,0,226,225,1,0,0,0,226,227,1,0,0,0,227,
228,1,0,0,0,228,229,5,11,0,0,229,230,5,35,0,0,230,231,5,1,0,0,231,233,5,
5,0,0,232,234,5,1,0,0,233,232,1,0,0,0,234,235,1,0,0,0,235,233,1,0,0,0,235,
236,1,0,0,0,236,238,1,0,0,0,237,205,1,0,0,0,237,221,1,0,0,0,238,37,1,0,0,
0,239,240,5,12,0,0,240,241,5,34,0,0,241,242,3,66,33,0,242,243,5,1,0,0,243,
245,3,48,24,0,244,246,3,54,27,0,245,244,1,0,0,0,245,246,1,0,0,0,246,248,
1,0,0,0,247,249,3,72,36,0,248,247,1,0,0,0,249,250,1,0,0,0,250,248,1,0,0,
0,250,251,1,0,0,0,251,252,1,0,0,0,252,254,5,5,0,0,253,255,5,1,0,0,254,253,
1,0,0,0,255,256,1,0,0,0,256,254,1,0,0,0,256,257,1,0,0,0,257,39,1,0,0,0,258,
259,5,13,0,0,259,260,5,34,0,0,260,261,3,66,33,0,261,262,5,1,0,0,262,264,
3,48,24,0,263,265,3,50,25,0,264,263,1,0,0,0,264,265,1,0,0,0,265,267,1,0,
0,0,266,268,3,54,27,0,267,266,1,0,0,0,267,268,1,0,0,0,268,270,1,0,0,0,269,
271,3,74,37,0,270,269,1,0,0,0,271,272,1,0,0,0,272,270,1,0,0,0,272,273,1,
0,0,0,273,275,1,0,0,0,274,276,3,70,35,0,275,274,1,0,0,0,276,277,1,0,0,0,
277,275,1,0,0,0,277,278,1,0,0,0,278,279,1,0,0,0,279,281,5,5,0,0,280,282,
5,1,0,0,281,280,1,0,0,0,282,283,1,0,0,0,283,281,1,0,0,0,283,284,1,0,0,0,
284,340,1,0,0,0,285,286,5,14,0,0,286,287,5,34,0,0,287,288,3,66,33,0,288,
289,5,1,0,0,289,291,3,48,24,0,290,292,3,50,25,0,291,290,1,0,0,0,291,292,
1,0,0,0,292,294,1,0,0,0,293,295,3,54,27,0,294,293,1,0,0,0,294,295,1,0,0,
0,295,297,1,0,0,0,296,298,3,74,37,0,297,296,1,0,0,0,298,299,1,0,0,0,299,
297,1,0,0,0,299,300,1,0,0,0,300,302,1,0,0,0,301,303,3,70,35,0,302,301,1,
0,0,0,303,304,1,0,0,0,304,302,1,0,0,0,304,305,1,0,0,0,305,306,1,0,0,0,306,
308,5,5,0,0,307,309,5,1,0,0,308,307,1,0,0,0,309,310,1,0,0,0,310,308,1,0,
0,0,310,311,1,0,0,0,311,340,1,0,0,0,312,313,5,15,0,0,313,314,5,34,0,0,314,
315,3,66,33,0,315,316,5,1,0,0,316,318,3,48,24,0,317,319,3,50,25,0,318,317,
1,0,0,0,318,319,1,0,0,0,319,321,1,0,0,0,320,322,3,54,27,0,321,320,1,0,0,
0,321,322,1,0,0,0,322,324,1,0,0,0,323,325,3,74,37,0,324,323,1,0,0,0,325,
326,1,0,0,0,326,324,1,0,0,0,326,327,1,0,0,0,327,329,1,0,0,0,328,330,3,70,
35,0,329,328,1,0,0,0,330,331,1,0,0,0,331,329,1,0,0,0,331,332,1,0,0,0,332,
333,1,0,0,0,333,335,5,5,0,0,334,336,5,1,0,0,335,334,1,0,0,0,336,337,1,0,
0,0,337,335,1,0,0,0,337,338,1,0,0,0,338,340,1,0,0,0,339,258,1,0,0,0,339,
285,1,0,0,0,339,312,1,0,0,0,340,41,1,0,0,0,341,342,5,16,0,0,342,343,5,34,
0,0,343,344,3,66,33,0,344,345,3,68,34,0,345,346,5,1,0,0,346,348,3,48,24,
0,347,349,3,50,25,0,348,347,1,0,0,0,348,349,1,0,0,0,349,351,1,0,0,0,350,
352,3,52,26,0,351,350,1,0,0,0,351,352,1,0,0,0,352,354,1,0,0,0,353,355,3,
54,27,0,354,353,1,0,0,0,354,355,1,0,0,0,355,357,1,0,0,0,356,358,3,74,37,
0,357,356,1,0,0,0,358,359,1,0,0,0,359,357,1,0,0,0,359,360,1,0,0,0,360,361,
1,0,0,0,361,362,3,76,38,0,362,364,5,5,0,0,363,365,5,1,0,0,364,363,1,0,0,
0,365,366,1,0,0,0,366,364,1,0,0,0,366,367,1,0,0,0,367,423,1,0,0,0,368,369,
5,17,0,0,369,370,5,34,0,0,370,371,3,66,33,0,371,372,3,68,34,0,372,373,5,
1,0,0,373,375,3,48,24,0,374,376,3,50,25,0,375,374,1,0,0,0,375,376,1,0,0,
0,376,378,1,0,0,0,377,379,3,52,26,0,378,377,1,0,0,0,378,379,1,0,0,0,379,
381,1,0,0,0,380,382,3,54,27,0,381,380,1,0,0,0,381,382,1,0,0,0,382,384,1,
0,0,0,383,385,3,74,37,0,384,383,1,0,0,0,385,386,1,0,0,0,386,384,1,0,0,0,
386,387,1,0,0,0,387,388,1,0,0,0,388,389,3,76,38,0,389,391,5,5,0,0,390,392,
5,1,0,0,391,390,1,0,0,0,392,393,1,0,0,0,393,391,1,0,0,0,393,394,1,0,0,0,
394,423,1,0,0,0,395,396,5,18,0,0,396,397,5,34,0,0,397,398,3,66,33,0,398,
399,3,68,34,0,399,400,5,1,0,0,400,402,3,48,24,0,401,403,3,50,25,0,402,401,
1,0,0,0,402,403,1,0,0,0,403,405,1,0,0,0,404,406,3,52,26,0,405,404,1,0,0,
0,405,406,1,0,0,0,406,408,1,0,0,0,407,409,3,54,27,0,408,407,1,0,0,0,408,
409,1,0,0,0,409,411,1,0,0,0,410,412,3,74,37,0,411,410,1,0,0,0,412,413,1,
0,0,0,413,411,1,0,0,0,413,414,1,0,0,0,414,415,1,0,0,0,415,416,3,76,38,0,
416,418,5,5,0,0,417,419,5,1,0,0,418,417,1,0,0,0,419,420,1,0,0,0,420,418,
1,0,0,0,420,421,1,0,0,0,421,423,1,0,0,0,422,341,1,0,0,0,422,368,1,0,0,0,
422,395,1,0,0,0,423,43,1,0,0,0,424,425,5,19,0,0,425,426,5,34,0,0,426,427,
3,66,33,0,427,428,5,1,0,0,428,430,3,48,24,0,429,431,3,50,25,0,430,429,1,
0,0,0,430,431,1,0,0,0,431,433,1,0,0,0,432,434,3,74,37,0,433,432,1,0,0,0,
434,435,1,0,0,0,435,433,1,0,0,0,435,436,1,0,0,0,436,437,1,0,0,0,437,439,
5,5,0,0,438,440,5,1,0,0,439,438,1,0,0,0,440,441,1,0,0,0,441,439,1,0,0,0,
441,442,1,0,0,0,442,45,1,0,0,0,443,444,5,20,0,0,444,445,5,34,0,0,445,446,
5,1,0,0,446,447,3,48,24,0,447,448,5,11,0,0,448,449,5,35,0,0,449,450,5,1,
0,0,450,452,5,5,0,0,451,453,5,1,0,0,452,451,1,0,0,0,453,454,1,0,0,0,454,
452,1,0,0,0,454,455,1,0,0,0,455,47,1,0,0,0,456,458,3,56,28,0,457,456,1,0,
0,0,457,458,1,0,0,0,458,460,1,0,0,0,459,461,3,58,29,0,460,459,1,0,0,0,460,
461,1,0,0,0,461,463,1,0,0,0,462,464,3,60,30,0,463,462,1,0,0,0,463,464,1,
0,0,0,464,466,1,0,0,0,465,467,3,64,32,0,466,465,1,0,0,0,466,467,1,0,0,0,
467,49,1,0,0,0,468,469,5,21,0,0,469,470,5,35,0,0,470,471,5,1,0,0,471,51,
1,0,0,0,472,473,5,22,0,0,473,474,5,35,0,0,474,475,5,1,0,0,475,53,1,0,0,0,
476,477,5,23,0,0,477,478,5,35,0,0,478,479,5,1,0,0,479,55,1,0,0,0,480,481,
5,24,0,0,481,482,5,35,0,0,482,483,5,1,0,0,483,57,1,0,0,0,484,485,5,25,0,
0,485,486,7,0,0,0,486,487,5,1,0,0,487,59,1,0,0,0,488,489,5,26,0,0,489,494,
3,62,31,0,490,491,5,27,0,0,491,493,3,62,31,0,492,490,1,0,0,0,493,496,1,0,
0,0,494,492,1,0,0,0,494,495,1,0,0,0,495,497,1,0,0,0,496,494,1,0,0,0,497,
498,5,1,0,0,498,61,1,0,0,0,499,500,5,34,0,0,500,501,5,28,0,0,501,502,5,34,
0,0,502,63,1,0,0,0,503,505,5,29,0,0,504,506,5,34,0,0,505,504,1,0,0,0,506,
507,1,0,0,0,507,505,1,0,0,0,507,508,1,0,0,0,508,509,1,0,0,0,509,510,5,1,
0,0,510,65,1,0,0,0,511,512,5,36,0,0,512,67,1,0,0,0,513,514,5,36,0,0,514,
69,1,0,0,0,515,517,5,10,0,0,516,518,3,82,41,0,517,516,1,0,0,0,518,519,1,
0,0,0,519,517,1,0,0,0,519,520,1,0,0,0,520,521,1,0,0,0,521,522,5,1,0,0,522,
71,1,0,0,0,523,525,5,10,0,0,524,526,3,82,41,0,525,524,1,0,0,0,526,527,1,
0,0,0,527,525,1,0,0,0,527,528,1,0,0,0,528,529,1,0,0,0,529,530,5,1,0,0,530,
539,1,0,0,0,531,533,5,11,0,0,532,534,5,35,0,0,533,532,1,0,0,0,534,535,1,
0,0,0,535,533,1,0,0,0,535,536,1,0,0,0,536,537,1,0,0,0,537,539,5,1,0,0,538,
523,1,0,0,0,538,531,1,0,0,0,539,73,1,0,0,0,540,542,5,30,0,0,541,543,3,82,
41,0,542,541,1,0,0,0,543,544,1,0,0,0,544,542,1,0,0,0,544,545,1,0,0,0,545,
546,1,0,0,0,546,547,5,1,0,0,547,556,1,0,0,0,548,550,5,31,0,0,549,551,5,35,
0,0,550,549,1,0,0,0,551,552,1,0,0,0,552,550,1,0,0,0,552,553,1,0,0,0,553,
554,1,0,0,0,554,556,5,1,0,0,555,540,1,0,0,0,555,548,1,0,0,0,556,75,1,0,0,
0,557,559,3,78,39,0,558,557,1,0,0,0,559,560,1,0,0,0,560,558,1,0,0,0,560,
561,1,0,0,0,561,568,1,0,0,0,562,564,3,80,40,0,563,562,1,0,0,0,564,565,1,
0,0,0,565,563,1,0,0,0,565,566,1,0,0,0,566,568,1,0,0,0,567,558,1,0,0,0,567,
563,1,0,0,0,568,77,1,0,0,0,569,570,5,32,0,0,570,571,3,82,41,0,571,573,5,
1,0,0,572,574,3,70,35,0,573,572,1,0,0,0,574,575,1,0,0,0,575,573,1,0,0,0,
575,576,1,0,0,0,576,79,1,0,0,0,577,578,5,33,0,0,578,579,5,35,0,0,579,581,
5,1,0,0,580,582,3,70,35,0,581,580,1,0,0,0,582,583,1,0,0,0,583,581,1,0,0,
0,583,584,1,0,0,0,584,81,1,0,0,0,585,586,7,1,0,0,586,83,1,0,0,0,79,87,94,
100,103,106,111,117,133,140,146,159,166,172,179,185,194,203,210,219,226,
235,237,245,250,256,264,267,272,277,283,291,294,299,304,310,318,321,326,
331,337,339,348,351,354,359,366,375,378,381,386,393,402,405,408,413,420,
422,430,435,441,454,457,460,463,466,494,507,519,527,535,538,544,552,555,
560,565,567,575,583];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DCM_2_0_grammarParser extends antlr4.Parser {

    static grammarFileName = "DCM_2_0_grammar.g4";
    static literalNames = [ null, "'\\n'", "'KONSERVIERUNG_FORMAT 2.0'", 
                            "'MODULKOPF'", "'FUNKTIONEN'", "'END'", "'FKT'", 
                            "'VARIANTENKODIERUNG'", "'KRITERIUM'", "'FESTWERT'", 
                            "'WERT'", "'TEXT'", "'FESTWERTEBLOCK'", "'KENNLINIE'", 
                            "'FESTKENNLINIE'", "'GRUPPENKENNLINIE'", "'KENNFELD'", 
                            "'FESTKENNFELD'", "'GRUPPENKENNFELD'", "'STUETZSTELLENVERTEILUNG'", 
                            "'TEXTSTRING'", "'EINHEIT_X'", "'EINHEIT_Y'", 
                            "'EINHEIT_W'", "'LANGNAME'", "'DISPLAYNAME'", 
                            "'VAR'", "','", "'='", "'FUNKTION'", "'ST/X'", 
                            "'ST_TX/X'", "'ST/Y'", "'ST_TX/Y'", null, null, 
                            null, null, "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "NAME", "TEXT", "INT", "FLOAT", 
                             "MINUS", "WS", "COMMENT" ];
    static ruleNames = [ "konservierung", "kons_kopf", "modulkopf_info", 
                         "mod_zeile", "mod_anf_zeile", "mod_fort_zeile", 
                         "mod_ele_name", "mod_ele_wert", "funktionsdef", 
                         "funktionszeile", "fkt_version", "fkt_langname", 
                         "variantendef", "variantenkrit", "krit_name", "krit_wert", 
                         "kons_rumpf", "kenngroesse", "kennwert", "kennwerteblock", 
                         "kennlinie", "kennfeld", "gruppenstuetzstellen", 
                         "kenntext", "kgr_info", "einheit_x", "einheit_y", 
                         "einheit_w", "langname", "displayname", "var_abhangigkeiten", 
                         "var_abh", "funktionszugehorigkeit", "anzahl_x", 
                         "anzahl_y", "werteliste", "werteliste_kwb", "sst_liste_x", 
                         "kf_zeile_liste", "kf_zeile_liste_r", "kf_zeile_liste_tx", 
                         "realzahl" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DCM_2_0_grammarParser.ruleNames;
        this.literalNames = DCM_2_0_grammarParser.literalNames;
        this.symbolicNames = DCM_2_0_grammarParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	konservierung() {
	    let localctx = new KonservierungContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DCM_2_0_grammarParser.RULE_konservierung);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DCM_2_0_grammarParser.T__0) {
	            this.state = 84;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 90;
	        this.match(DCM_2_0_grammarParser.T__1);
	        this.state = 92; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 91;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 94; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.T__0);
	        this.state = 96;
	        this.kons_kopf();
	        this.state = 97;
	        this.kons_rumpf();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	kons_kopf() {
	    let localctx = new Kons_kopfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DCM_2_0_grammarParser.RULE_kons_kopf);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DCM_2_0_grammarParser.T__2) {
	            this.state = 99;
	            this.modulkopf_info();
	        }

	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DCM_2_0_grammarParser.T__3) {
	            this.state = 102;
	            this.funktionsdef();
	        }

	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DCM_2_0_grammarParser.T__6) {
	            this.state = 105;
	            this.variantendef();
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



	modulkopf_info() {
	    let localctx = new Modulkopf_infoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DCM_2_0_grammarParser.RULE_modulkopf_info);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 108;
	            this.mod_zeile();
	            this.state = 111; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mod_zeile() {
	    let localctx = new Mod_zeileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DCM_2_0_grammarParser.RULE_mod_zeile);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.mod_anf_zeile();
	        this.state = 117;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 114;
	                this.mod_fort_zeile(); 
	            }
	            this.state = 119;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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



	mod_anf_zeile() {
	    let localctx = new Mod_anf_zeileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DCM_2_0_grammarParser.RULE_mod_anf_zeile);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(DCM_2_0_grammarParser.T__2);
	        this.state = 121;
	        this.mod_ele_name();
	        this.state = 122;
	        this.mod_ele_wert();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mod_fort_zeile() {
	    let localctx = new Mod_fort_zeileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DCM_2_0_grammarParser.RULE_mod_fort_zeile);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(DCM_2_0_grammarParser.T__2);
	        this.state = 125;
	        this.mod_ele_wert();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mod_ele_name() {
	    let localctx = new Mod_ele_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DCM_2_0_grammarParser.RULE_mod_ele_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(DCM_2_0_grammarParser.NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mod_ele_wert() {
	    let localctx = new Mod_ele_wertContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DCM_2_0_grammarParser.RULE_mod_ele_wert);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(DCM_2_0_grammarParser.TEXT);
	        this.state = 131; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 130;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 133; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funktionsdef() {
	    let localctx = new FunktionsdefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DCM_2_0_grammarParser.RULE_funktionsdef);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(DCM_2_0_grammarParser.T__3);
	        this.state = 136;
	        this.match(DCM_2_0_grammarParser.T__0);
	        this.state = 138; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 137;
	            this.funktionszeile();
	            this.state = 140; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.T__5);
	        this.state = 142;
	        this.match(DCM_2_0_grammarParser.T__4);
	        this.state = 144; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 143;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 146; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funktionszeile() {
	    let localctx = new FunktionszeileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DCM_2_0_grammarParser.RULE_funktionszeile);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(DCM_2_0_grammarParser.T__5);
	        this.state = 149;
	        this.match(DCM_2_0_grammarParser.NAME);
	        this.state = 150;
	        this.fkt_version();
	        this.state = 151;
	        this.fkt_langname();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fkt_version() {
	    let localctx = new Fkt_versionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DCM_2_0_grammarParser.RULE_fkt_version);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(DCM_2_0_grammarParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fkt_langname() {
	    let localctx = new Fkt_langnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DCM_2_0_grammarParser.RULE_fkt_langname);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(DCM_2_0_grammarParser.TEXT);
	        this.state = 157; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 156;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 159; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variantendef() {
	    let localctx = new VariantendefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, DCM_2_0_grammarParser.RULE_variantendef);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(DCM_2_0_grammarParser.T__6);
	        this.state = 162;
	        this.match(DCM_2_0_grammarParser.T__0);
	        this.state = 164; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 163;
	            this.variantenkrit();
	            this.state = 166; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.T__7);
	        this.state = 168;
	        this.match(DCM_2_0_grammarParser.T__4);
	        this.state = 170; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 169;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 172; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variantenkrit() {
	    let localctx = new VariantenkritContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, DCM_2_0_grammarParser.RULE_variantenkrit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(DCM_2_0_grammarParser.T__7);
	        this.state = 175;
	        this.krit_name();
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DCM_2_0_grammarParser.NAME) {
	            this.state = 176;
	            this.krit_wert();
	            this.state = 181;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 183; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 182;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 185; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	krit_name() {
	    let localctx = new Krit_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, DCM_2_0_grammarParser.RULE_krit_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(DCM_2_0_grammarParser.NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	krit_wert() {
	    let localctx = new Krit_wertContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, DCM_2_0_grammarParser.RULE_krit_wert);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(DCM_2_0_grammarParser.NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	kons_rumpf() {
	    let localctx = new Kons_rumpfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, DCM_2_0_grammarParser.RULE_kons_rumpf);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DCM_2_0_grammarParser.T__8) | (1 << DCM_2_0_grammarParser.T__11) | (1 << DCM_2_0_grammarParser.T__12) | (1 << DCM_2_0_grammarParser.T__13) | (1 << DCM_2_0_grammarParser.T__14) | (1 << DCM_2_0_grammarParser.T__15) | (1 << DCM_2_0_grammarParser.T__16) | (1 << DCM_2_0_grammarParser.T__17) | (1 << DCM_2_0_grammarParser.T__18) | (1 << DCM_2_0_grammarParser.T__19))) !== 0)) {
	            this.state = 191;
	            this.kenngroesse();
	            this.state = 196;
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



	kenngroesse() {
	    let localctx = new KenngroesseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, DCM_2_0_grammarParser.RULE_kenngroesse);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DCM_2_0_grammarParser.T__8:
	            this.state = 197;
	            this.kennwert();
	            break;
	        case DCM_2_0_grammarParser.T__11:
	            this.state = 198;
	            this.kennwerteblock();
	            break;
	        case DCM_2_0_grammarParser.T__12:
	        case DCM_2_0_grammarParser.T__13:
	        case DCM_2_0_grammarParser.T__14:
	            this.state = 199;
	            this.kennlinie();
	            break;
	        case DCM_2_0_grammarParser.T__15:
	        case DCM_2_0_grammarParser.T__16:
	        case DCM_2_0_grammarParser.T__17:
	            this.state = 200;
	            this.kennfeld();
	            break;
	        case DCM_2_0_grammarParser.T__18:
	            this.state = 201;
	            this.gruppenstuetzstellen();
	            break;
	        case DCM_2_0_grammarParser.T__19:
	            this.state = 202;
	            this.kenntext();
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



	kennwert() {
	    let localctx = new KennwertContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DCM_2_0_grammarParser.RULE_kennwert);
	    var _la = 0; // Token type
	    try {
	        this.state = 237;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 205;
	            this.match(DCM_2_0_grammarParser.T__8);
	            this.state = 206;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 207;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 208;
	            this.kgr_info();
	            this.state = 210;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__22) {
	                this.state = 209;
	                this.einheit_w();
	            }

	            this.state = 212;
	            this.match(DCM_2_0_grammarParser.T__9);
	            this.state = 213;
	            this.realzahl();
	            this.state = 214;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 215;
	            this.match(DCM_2_0_grammarParser.T__4);
	            this.state = 217; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 216;
	                this.match(DCM_2_0_grammarParser.T__0);
	                this.state = 219; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 221;
	            this.match(DCM_2_0_grammarParser.T__8);
	            this.state = 222;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 223;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 224;
	            this.kgr_info();
	            this.state = 226;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__22) {
	                this.state = 225;
	                this.einheit_w();
	            }

	            this.state = 228;
	            this.match(DCM_2_0_grammarParser.T__10);
	            this.state = 229;
	            this.match(DCM_2_0_grammarParser.TEXT);
	            this.state = 230;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 231;
	            this.match(DCM_2_0_grammarParser.T__4);
	            this.state = 233; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 232;
	                this.match(DCM_2_0_grammarParser.T__0);
	                this.state = 235; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__0);
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



	kennwerteblock() {
	    let localctx = new KennwerteblockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, DCM_2_0_grammarParser.RULE_kennwerteblock);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(DCM_2_0_grammarParser.T__11);
	        this.state = 240;
	        this.match(DCM_2_0_grammarParser.NAME);
	        this.state = 241;
	        this.anzahl_x();
	        this.state = 242;
	        this.match(DCM_2_0_grammarParser.T__0);
	        this.state = 243;
	        this.kgr_info();
	        this.state = 245;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DCM_2_0_grammarParser.T__22) {
	            this.state = 244;
	            this.einheit_w();
	        }

	        this.state = 248; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 247;
	            this.werteliste_kwb();
	            this.state = 250; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.T__9 || _la===DCM_2_0_grammarParser.T__10);
	        this.state = 252;
	        this.match(DCM_2_0_grammarParser.T__4);
	        this.state = 254; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 253;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 256; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	kennlinie() {
	    let localctx = new KennlinieContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, DCM_2_0_grammarParser.RULE_kennlinie);
	    var _la = 0; // Token type
	    try {
	        this.state = 339;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DCM_2_0_grammarParser.T__12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 258;
	            this.match(DCM_2_0_grammarParser.T__12);
	            this.state = 259;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 260;
	            this.anzahl_x();
	            this.state = 261;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 262;
	            this.kgr_info();
	            this.state = 264;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__20) {
	                this.state = 263;
	                this.einheit_x();
	            }

	            this.state = 267;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__22) {
	                this.state = 266;
	                this.einheit_w();
	            }

	            this.state = 270; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 269;
	                this.sst_liste_x();
	                this.state = 272; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__29 || _la===DCM_2_0_grammarParser.T__30);
	            this.state = 275; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 274;
	                this.werteliste();
	                this.state = 277; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__9);
	            this.state = 279;
	            this.match(DCM_2_0_grammarParser.T__4);
	            this.state = 281; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 280;
	                this.match(DCM_2_0_grammarParser.T__0);
	                this.state = 283; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__0);
	            break;
	        case DCM_2_0_grammarParser.T__13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 285;
	            this.match(DCM_2_0_grammarParser.T__13);
	            this.state = 286;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 287;
	            this.anzahl_x();
	            this.state = 288;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 289;
	            this.kgr_info();
	            this.state = 291;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__20) {
	                this.state = 290;
	                this.einheit_x();
	            }

	            this.state = 294;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__22) {
	                this.state = 293;
	                this.einheit_w();
	            }

	            this.state = 297; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 296;
	                this.sst_liste_x();
	                this.state = 299; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__29 || _la===DCM_2_0_grammarParser.T__30);
	            this.state = 302; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 301;
	                this.werteliste();
	                this.state = 304; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__9);
	            this.state = 306;
	            this.match(DCM_2_0_grammarParser.T__4);
	            this.state = 308; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 307;
	                this.match(DCM_2_0_grammarParser.T__0);
	                this.state = 310; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__0);
	            break;
	        case DCM_2_0_grammarParser.T__14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 312;
	            this.match(DCM_2_0_grammarParser.T__14);
	            this.state = 313;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 314;
	            this.anzahl_x();
	            this.state = 315;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 316;
	            this.kgr_info();
	            this.state = 318;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__20) {
	                this.state = 317;
	                this.einheit_x();
	            }

	            this.state = 321;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__22) {
	                this.state = 320;
	                this.einheit_w();
	            }

	            this.state = 324; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 323;
	                this.sst_liste_x();
	                this.state = 326; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__29 || _la===DCM_2_0_grammarParser.T__30);
	            this.state = 329; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 328;
	                this.werteliste();
	                this.state = 331; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__9);
	            this.state = 333;
	            this.match(DCM_2_0_grammarParser.T__4);
	            this.state = 335; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 334;
	                this.match(DCM_2_0_grammarParser.T__0);
	                this.state = 337; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__0);
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



	kennfeld() {
	    let localctx = new KennfeldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, DCM_2_0_grammarParser.RULE_kennfeld);
	    var _la = 0; // Token type
	    try {
	        this.state = 422;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DCM_2_0_grammarParser.T__15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 341;
	            this.match(DCM_2_0_grammarParser.T__15);
	            this.state = 342;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 343;
	            this.anzahl_x();
	            this.state = 344;
	            this.anzahl_y();
	            this.state = 345;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 346;
	            this.kgr_info();
	            this.state = 348;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__20) {
	                this.state = 347;
	                this.einheit_x();
	            }

	            this.state = 351;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__21) {
	                this.state = 350;
	                this.einheit_y();
	            }

	            this.state = 354;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__22) {
	                this.state = 353;
	                this.einheit_w();
	            }

	            this.state = 357; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 356;
	                this.sst_liste_x();
	                this.state = 359; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__29 || _la===DCM_2_0_grammarParser.T__30);
	            this.state = 361;
	            this.kf_zeile_liste();
	            this.state = 362;
	            this.match(DCM_2_0_grammarParser.T__4);
	            this.state = 364; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 363;
	                this.match(DCM_2_0_grammarParser.T__0);
	                this.state = 366; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__0);
	            break;
	        case DCM_2_0_grammarParser.T__16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 368;
	            this.match(DCM_2_0_grammarParser.T__16);
	            this.state = 369;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 370;
	            this.anzahl_x();
	            this.state = 371;
	            this.anzahl_y();
	            this.state = 372;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 373;
	            this.kgr_info();
	            this.state = 375;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__20) {
	                this.state = 374;
	                this.einheit_x();
	            }

	            this.state = 378;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__21) {
	                this.state = 377;
	                this.einheit_y();
	            }

	            this.state = 381;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__22) {
	                this.state = 380;
	                this.einheit_w();
	            }

	            this.state = 384; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 383;
	                this.sst_liste_x();
	                this.state = 386; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__29 || _la===DCM_2_0_grammarParser.T__30);
	            this.state = 388;
	            this.kf_zeile_liste();
	            this.state = 389;
	            this.match(DCM_2_0_grammarParser.T__4);
	            this.state = 391; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 390;
	                this.match(DCM_2_0_grammarParser.T__0);
	                this.state = 393; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__0);
	            break;
	        case DCM_2_0_grammarParser.T__17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 395;
	            this.match(DCM_2_0_grammarParser.T__17);
	            this.state = 396;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 397;
	            this.anzahl_x();
	            this.state = 398;
	            this.anzahl_y();
	            this.state = 399;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 400;
	            this.kgr_info();
	            this.state = 402;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__20) {
	                this.state = 401;
	                this.einheit_x();
	            }

	            this.state = 405;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__21) {
	                this.state = 404;
	                this.einheit_y();
	            }

	            this.state = 408;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DCM_2_0_grammarParser.T__22) {
	                this.state = 407;
	                this.einheit_w();
	            }

	            this.state = 411; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 410;
	                this.sst_liste_x();
	                this.state = 413; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__29 || _la===DCM_2_0_grammarParser.T__30);
	            this.state = 415;
	            this.kf_zeile_liste();
	            this.state = 416;
	            this.match(DCM_2_0_grammarParser.T__4);
	            this.state = 418; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 417;
	                this.match(DCM_2_0_grammarParser.T__0);
	                this.state = 420; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__0);
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



	gruppenstuetzstellen() {
	    let localctx = new GruppenstuetzstellenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, DCM_2_0_grammarParser.RULE_gruppenstuetzstellen);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 424;
	        this.match(DCM_2_0_grammarParser.T__18);
	        this.state = 425;
	        this.match(DCM_2_0_grammarParser.NAME);
	        this.state = 426;
	        this.anzahl_x();
	        this.state = 427;
	        this.match(DCM_2_0_grammarParser.T__0);
	        this.state = 428;
	        this.kgr_info();
	        this.state = 430;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DCM_2_0_grammarParser.T__20) {
	            this.state = 429;
	            this.einheit_x();
	        }

	        this.state = 433; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 432;
	            this.sst_liste_x();
	            this.state = 435; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.T__29 || _la===DCM_2_0_grammarParser.T__30);
	        this.state = 437;
	        this.match(DCM_2_0_grammarParser.T__4);
	        this.state = 439; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 438;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 441; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	kenntext() {
	    let localctx = new KenntextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, DCM_2_0_grammarParser.RULE_kenntext);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 443;
	        this.match(DCM_2_0_grammarParser.T__19);
	        this.state = 444;
	        this.match(DCM_2_0_grammarParser.NAME);
	        this.state = 445;
	        this.match(DCM_2_0_grammarParser.T__0);
	        this.state = 446;
	        this.kgr_info();
	        this.state = 447;
	        this.match(DCM_2_0_grammarParser.T__10);
	        this.state = 448;
	        this.match(DCM_2_0_grammarParser.TEXT);
	        this.state = 449;
	        this.match(DCM_2_0_grammarParser.T__0);
	        this.state = 450;
	        this.match(DCM_2_0_grammarParser.T__4);
	        this.state = 452; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 451;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 454; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	kgr_info() {
	    let localctx = new Kgr_infoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, DCM_2_0_grammarParser.RULE_kgr_info);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 457;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DCM_2_0_grammarParser.T__23) {
	            this.state = 456;
	            this.langname();
	        }

	        this.state = 460;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DCM_2_0_grammarParser.T__24) {
	            this.state = 459;
	            this.displayname();
	        }

	        this.state = 463;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DCM_2_0_grammarParser.T__25) {
	            this.state = 462;
	            this.var_abhangigkeiten();
	        }

	        this.state = 466;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DCM_2_0_grammarParser.T__28) {
	            this.state = 465;
	            this.funktionszugehorigkeit();
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



	einheit_x() {
	    let localctx = new Einheit_xContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, DCM_2_0_grammarParser.RULE_einheit_x);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 468;
	        this.match(DCM_2_0_grammarParser.T__20);
	        this.state = 469;
	        this.match(DCM_2_0_grammarParser.TEXT);
	        this.state = 470;
	        this.match(DCM_2_0_grammarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	einheit_y() {
	    let localctx = new Einheit_yContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, DCM_2_0_grammarParser.RULE_einheit_y);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 472;
	        this.match(DCM_2_0_grammarParser.T__21);
	        this.state = 473;
	        this.match(DCM_2_0_grammarParser.TEXT);
	        this.state = 474;
	        this.match(DCM_2_0_grammarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	einheit_w() {
	    let localctx = new Einheit_wContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, DCM_2_0_grammarParser.RULE_einheit_w);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 476;
	        this.match(DCM_2_0_grammarParser.T__22);
	        this.state = 477;
	        this.match(DCM_2_0_grammarParser.TEXT);
	        this.state = 478;
	        this.match(DCM_2_0_grammarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	langname() {
	    let localctx = new LangnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, DCM_2_0_grammarParser.RULE_langname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 480;
	        this.match(DCM_2_0_grammarParser.T__23);
	        this.state = 481;
	        this.match(DCM_2_0_grammarParser.TEXT);
	        this.state = 482;
	        this.match(DCM_2_0_grammarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	displayname() {
	    let localctx = new DisplaynameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, DCM_2_0_grammarParser.RULE_displayname);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 484;
	        this.match(DCM_2_0_grammarParser.T__24);
	        this.state = 485;
	        _la = this._input.LA(1);
	        if(!(_la===DCM_2_0_grammarParser.NAME || _la===DCM_2_0_grammarParser.TEXT)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 486;
	        this.match(DCM_2_0_grammarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	var_abhangigkeiten() {
	    let localctx = new Var_abhangigkeitenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, DCM_2_0_grammarParser.RULE_var_abhangigkeiten);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 488;
	        this.match(DCM_2_0_grammarParser.T__25);
	        this.state = 489;
	        this.var_abh();
	        this.state = 494;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DCM_2_0_grammarParser.T__26) {
	            this.state = 490;
	            this.match(DCM_2_0_grammarParser.T__26);
	            this.state = 491;
	            this.var_abh();
	            this.state = 496;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 497;
	        this.match(DCM_2_0_grammarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	var_abh() {
	    let localctx = new Var_abhContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, DCM_2_0_grammarParser.RULE_var_abh);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 499;
	        this.match(DCM_2_0_grammarParser.NAME);
	        this.state = 500;
	        this.match(DCM_2_0_grammarParser.T__27);
	        this.state = 501;
	        this.match(DCM_2_0_grammarParser.NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funktionszugehorigkeit() {
	    let localctx = new FunktionszugehorigkeitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, DCM_2_0_grammarParser.RULE_funktionszugehorigkeit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 503;
	        this.match(DCM_2_0_grammarParser.T__28);
	        this.state = 505; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 504;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 507; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.NAME);
	        this.state = 509;
	        this.match(DCM_2_0_grammarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	anzahl_x() {
	    let localctx = new Anzahl_xContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, DCM_2_0_grammarParser.RULE_anzahl_x);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 511;
	        this.match(DCM_2_0_grammarParser.INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	anzahl_y() {
	    let localctx = new Anzahl_yContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, DCM_2_0_grammarParser.RULE_anzahl_y);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 513;
	        this.match(DCM_2_0_grammarParser.INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	werteliste() {
	    let localctx = new WertelisteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, DCM_2_0_grammarParser.RULE_werteliste);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 515;
	        this.match(DCM_2_0_grammarParser.T__9);
	        this.state = 517; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 516;
	            this.realzahl();
	            this.state = 519; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.INT || _la===DCM_2_0_grammarParser.FLOAT);
	        this.state = 521;
	        this.match(DCM_2_0_grammarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	werteliste_kwb() {
	    let localctx = new Werteliste_kwbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, DCM_2_0_grammarParser.RULE_werteliste_kwb);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 538;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DCM_2_0_grammarParser.T__9:
	            this.state = 523;
	            this.match(DCM_2_0_grammarParser.T__9);
	            this.state = 525; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 524;
	                this.realzahl();
	                this.state = 527; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.INT || _la===DCM_2_0_grammarParser.FLOAT);
	            this.state = 529;
	            this.match(DCM_2_0_grammarParser.T__0);
	            break;
	        case DCM_2_0_grammarParser.T__10:
	            this.state = 531;
	            this.match(DCM_2_0_grammarParser.T__10);
	            this.state = 533; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 532;
	                this.match(DCM_2_0_grammarParser.TEXT);
	                this.state = 535; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.TEXT);
	            this.state = 537;
	            this.match(DCM_2_0_grammarParser.T__0);
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



	sst_liste_x() {
	    let localctx = new Sst_liste_xContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, DCM_2_0_grammarParser.RULE_sst_liste_x);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 555;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DCM_2_0_grammarParser.T__29:
	            this.state = 540;
	            this.match(DCM_2_0_grammarParser.T__29);
	            this.state = 542; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 541;
	                this.realzahl();
	                this.state = 544; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.INT || _la===DCM_2_0_grammarParser.FLOAT);
	            this.state = 546;
	            this.match(DCM_2_0_grammarParser.T__0);
	            break;
	        case DCM_2_0_grammarParser.T__30:
	            this.state = 548;
	            this.match(DCM_2_0_grammarParser.T__30);
	            this.state = 550; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 549;
	                this.match(DCM_2_0_grammarParser.TEXT);
	                this.state = 552; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.TEXT);
	            this.state = 554;
	            this.match(DCM_2_0_grammarParser.T__0);
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



	kf_zeile_liste() {
	    let localctx = new Kf_zeile_listeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, DCM_2_0_grammarParser.RULE_kf_zeile_liste);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 567;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DCM_2_0_grammarParser.T__31:
	            this.state = 558; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 557;
	                this.kf_zeile_liste_r();
	                this.state = 560; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__31);
	            break;
	        case DCM_2_0_grammarParser.T__32:
	            this.state = 563; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 562;
	                this.kf_zeile_liste_tx();
	                this.state = 565; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===DCM_2_0_grammarParser.T__32);
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



	kf_zeile_liste_r() {
	    let localctx = new Kf_zeile_liste_rContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, DCM_2_0_grammarParser.RULE_kf_zeile_liste_r);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 569;
	        this.match(DCM_2_0_grammarParser.T__31);
	        this.state = 570;
	        this.realzahl();
	        this.state = 571;
	        this.match(DCM_2_0_grammarParser.T__0);
	        this.state = 573; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 572;
	            this.werteliste();
	            this.state = 575; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	kf_zeile_liste_tx() {
	    let localctx = new Kf_zeile_liste_txContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, DCM_2_0_grammarParser.RULE_kf_zeile_liste_tx);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 577;
	        this.match(DCM_2_0_grammarParser.T__32);
	        this.state = 578;
	        this.match(DCM_2_0_grammarParser.TEXT);
	        this.state = 579;
	        this.match(DCM_2_0_grammarParser.T__0);
	        this.state = 581; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 580;
	            this.werteliste();
	            this.state = 583; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DCM_2_0_grammarParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	realzahl() {
	    let localctx = new RealzahlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, DCM_2_0_grammarParser.RULE_realzahl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 585;
	        _la = this._input.LA(1);
	        if(!(_la===DCM_2_0_grammarParser.INT || _la===DCM_2_0_grammarParser.FLOAT)) {
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

DCM_2_0_grammarParser.EOF = antlr4.Token.EOF;
DCM_2_0_grammarParser.T__0 = 1;
DCM_2_0_grammarParser.T__1 = 2;
DCM_2_0_grammarParser.T__2 = 3;
DCM_2_0_grammarParser.T__3 = 4;
DCM_2_0_grammarParser.T__4 = 5;
DCM_2_0_grammarParser.T__5 = 6;
DCM_2_0_grammarParser.T__6 = 7;
DCM_2_0_grammarParser.T__7 = 8;
DCM_2_0_grammarParser.T__8 = 9;
DCM_2_0_grammarParser.T__9 = 10;
DCM_2_0_grammarParser.T__10 = 11;
DCM_2_0_grammarParser.T__11 = 12;
DCM_2_0_grammarParser.T__12 = 13;
DCM_2_0_grammarParser.T__13 = 14;
DCM_2_0_grammarParser.T__14 = 15;
DCM_2_0_grammarParser.T__15 = 16;
DCM_2_0_grammarParser.T__16 = 17;
DCM_2_0_grammarParser.T__17 = 18;
DCM_2_0_grammarParser.T__18 = 19;
DCM_2_0_grammarParser.T__19 = 20;
DCM_2_0_grammarParser.T__20 = 21;
DCM_2_0_grammarParser.T__21 = 22;
DCM_2_0_grammarParser.T__22 = 23;
DCM_2_0_grammarParser.T__23 = 24;
DCM_2_0_grammarParser.T__24 = 25;
DCM_2_0_grammarParser.T__25 = 26;
DCM_2_0_grammarParser.T__26 = 27;
DCM_2_0_grammarParser.T__27 = 28;
DCM_2_0_grammarParser.T__28 = 29;
DCM_2_0_grammarParser.T__29 = 30;
DCM_2_0_grammarParser.T__30 = 31;
DCM_2_0_grammarParser.T__31 = 32;
DCM_2_0_grammarParser.T__32 = 33;
DCM_2_0_grammarParser.NAME = 34;
DCM_2_0_grammarParser.TEXT = 35;
DCM_2_0_grammarParser.INT = 36;
DCM_2_0_grammarParser.FLOAT = 37;
DCM_2_0_grammarParser.MINUS = 38;
DCM_2_0_grammarParser.WS = 39;
DCM_2_0_grammarParser.COMMENT = 40;

DCM_2_0_grammarParser.RULE_konservierung = 0;
DCM_2_0_grammarParser.RULE_kons_kopf = 1;
DCM_2_0_grammarParser.RULE_modulkopf_info = 2;
DCM_2_0_grammarParser.RULE_mod_zeile = 3;
DCM_2_0_grammarParser.RULE_mod_anf_zeile = 4;
DCM_2_0_grammarParser.RULE_mod_fort_zeile = 5;
DCM_2_0_grammarParser.RULE_mod_ele_name = 6;
DCM_2_0_grammarParser.RULE_mod_ele_wert = 7;
DCM_2_0_grammarParser.RULE_funktionsdef = 8;
DCM_2_0_grammarParser.RULE_funktionszeile = 9;
DCM_2_0_grammarParser.RULE_fkt_version = 10;
DCM_2_0_grammarParser.RULE_fkt_langname = 11;
DCM_2_0_grammarParser.RULE_variantendef = 12;
DCM_2_0_grammarParser.RULE_variantenkrit = 13;
DCM_2_0_grammarParser.RULE_krit_name = 14;
DCM_2_0_grammarParser.RULE_krit_wert = 15;
DCM_2_0_grammarParser.RULE_kons_rumpf = 16;
DCM_2_0_grammarParser.RULE_kenngroesse = 17;
DCM_2_0_grammarParser.RULE_kennwert = 18;
DCM_2_0_grammarParser.RULE_kennwerteblock = 19;
DCM_2_0_grammarParser.RULE_kennlinie = 20;
DCM_2_0_grammarParser.RULE_kennfeld = 21;
DCM_2_0_grammarParser.RULE_gruppenstuetzstellen = 22;
DCM_2_0_grammarParser.RULE_kenntext = 23;
DCM_2_0_grammarParser.RULE_kgr_info = 24;
DCM_2_0_grammarParser.RULE_einheit_x = 25;
DCM_2_0_grammarParser.RULE_einheit_y = 26;
DCM_2_0_grammarParser.RULE_einheit_w = 27;
DCM_2_0_grammarParser.RULE_langname = 28;
DCM_2_0_grammarParser.RULE_displayname = 29;
DCM_2_0_grammarParser.RULE_var_abhangigkeiten = 30;
DCM_2_0_grammarParser.RULE_var_abh = 31;
DCM_2_0_grammarParser.RULE_funktionszugehorigkeit = 32;
DCM_2_0_grammarParser.RULE_anzahl_x = 33;
DCM_2_0_grammarParser.RULE_anzahl_y = 34;
DCM_2_0_grammarParser.RULE_werteliste = 35;
DCM_2_0_grammarParser.RULE_werteliste_kwb = 36;
DCM_2_0_grammarParser.RULE_sst_liste_x = 37;
DCM_2_0_grammarParser.RULE_kf_zeile_liste = 38;
DCM_2_0_grammarParser.RULE_kf_zeile_liste_r = 39;
DCM_2_0_grammarParser.RULE_kf_zeile_liste_tx = 40;
DCM_2_0_grammarParser.RULE_realzahl = 41;

class KonservierungContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_konservierung;
    }

	kons_kopf() {
	    return this.getTypedRuleContext(Kons_kopfContext,0);
	};

	kons_rumpf() {
	    return this.getTypedRuleContext(Kons_rumpfContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterKonservierung(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitKonservierung(this);
		}
	}


}



class Kons_kopfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_kons_kopf;
    }

	modulkopf_info() {
	    return this.getTypedRuleContext(Modulkopf_infoContext,0);
	};

	funktionsdef() {
	    return this.getTypedRuleContext(FunktionsdefContext,0);
	};

	variantendef() {
	    return this.getTypedRuleContext(VariantendefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterKons_kopf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitKons_kopf(this);
		}
	}


}



class Modulkopf_infoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_modulkopf_info;
    }

	mod_zeile = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Mod_zeileContext);
	    } else {
	        return this.getTypedRuleContext(Mod_zeileContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterModulkopf_info(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitModulkopf_info(this);
		}
	}


}



class Mod_zeileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_mod_zeile;
    }

	mod_anf_zeile() {
	    return this.getTypedRuleContext(Mod_anf_zeileContext,0);
	};

	mod_fort_zeile = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Mod_fort_zeileContext);
	    } else {
	        return this.getTypedRuleContext(Mod_fort_zeileContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterMod_zeile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitMod_zeile(this);
		}
	}


}



class Mod_anf_zeileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_mod_anf_zeile;
    }

	mod_ele_name() {
	    return this.getTypedRuleContext(Mod_ele_nameContext,0);
	};

	mod_ele_wert() {
	    return this.getTypedRuleContext(Mod_ele_wertContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterMod_anf_zeile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitMod_anf_zeile(this);
		}
	}


}



class Mod_fort_zeileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_mod_fort_zeile;
    }

	mod_ele_wert() {
	    return this.getTypedRuleContext(Mod_ele_wertContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterMod_fort_zeile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitMod_fort_zeile(this);
		}
	}


}



class Mod_ele_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_mod_ele_name;
    }

	NAME() {
	    return this.getToken(DCM_2_0_grammarParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterMod_ele_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitMod_ele_name(this);
		}
	}


}



class Mod_ele_wertContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_mod_ele_wert;
    }

	TEXT() {
	    return this.getToken(DCM_2_0_grammarParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterMod_ele_wert(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitMod_ele_wert(this);
		}
	}


}



class FunktionsdefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_funktionsdef;
    }

	funktionszeile = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunktionszeileContext);
	    } else {
	        return this.getTypedRuleContext(FunktionszeileContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterFunktionsdef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitFunktionsdef(this);
		}
	}


}



class FunktionszeileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_funktionszeile;
    }

	NAME() {
	    return this.getToken(DCM_2_0_grammarParser.NAME, 0);
	};

	fkt_version() {
	    return this.getTypedRuleContext(Fkt_versionContext,0);
	};

	fkt_langname() {
	    return this.getTypedRuleContext(Fkt_langnameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterFunktionszeile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitFunktionszeile(this);
		}
	}


}



class Fkt_versionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_fkt_version;
    }

	TEXT() {
	    return this.getToken(DCM_2_0_grammarParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterFkt_version(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitFkt_version(this);
		}
	}


}



class Fkt_langnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_fkt_langname;
    }

	TEXT() {
	    return this.getToken(DCM_2_0_grammarParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterFkt_langname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitFkt_langname(this);
		}
	}


}



class VariantendefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_variantendef;
    }

	variantenkrit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariantenkritContext);
	    } else {
	        return this.getTypedRuleContext(VariantenkritContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterVariantendef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitVariantendef(this);
		}
	}


}



class VariantenkritContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_variantenkrit;
    }

	krit_name() {
	    return this.getTypedRuleContext(Krit_nameContext,0);
	};

	krit_wert = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Krit_wertContext);
	    } else {
	        return this.getTypedRuleContext(Krit_wertContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterVariantenkrit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitVariantenkrit(this);
		}
	}


}



class Krit_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_krit_name;
    }

	NAME() {
	    return this.getToken(DCM_2_0_grammarParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterKrit_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitKrit_name(this);
		}
	}


}



class Krit_wertContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_krit_wert;
    }

	NAME() {
	    return this.getToken(DCM_2_0_grammarParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterKrit_wert(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitKrit_wert(this);
		}
	}


}



class Kons_rumpfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_kons_rumpf;
    }

	kenngroesse = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KenngroesseContext);
	    } else {
	        return this.getTypedRuleContext(KenngroesseContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterKons_rumpf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitKons_rumpf(this);
		}
	}


}



class KenngroesseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_kenngroesse;
    }

	kennwert() {
	    return this.getTypedRuleContext(KennwertContext,0);
	};

	kennwerteblock() {
	    return this.getTypedRuleContext(KennwerteblockContext,0);
	};

	kennlinie() {
	    return this.getTypedRuleContext(KennlinieContext,0);
	};

	kennfeld() {
	    return this.getTypedRuleContext(KennfeldContext,0);
	};

	gruppenstuetzstellen() {
	    return this.getTypedRuleContext(GruppenstuetzstellenContext,0);
	};

	kenntext() {
	    return this.getTypedRuleContext(KenntextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterKenngroesse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitKenngroesse(this);
		}
	}


}



class KennwertContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_kennwert;
    }

	NAME() {
	    return this.getToken(DCM_2_0_grammarParser.NAME, 0);
	};

	kgr_info() {
	    return this.getTypedRuleContext(Kgr_infoContext,0);
	};

	realzahl() {
	    return this.getTypedRuleContext(RealzahlContext,0);
	};

	einheit_w() {
	    return this.getTypedRuleContext(Einheit_wContext,0);
	};

	TEXT() {
	    return this.getToken(DCM_2_0_grammarParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterKennwert(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitKennwert(this);
		}
	}


}



class KennwerteblockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_kennwerteblock;
    }

	NAME() {
	    return this.getToken(DCM_2_0_grammarParser.NAME, 0);
	};

	anzahl_x() {
	    return this.getTypedRuleContext(Anzahl_xContext,0);
	};

	kgr_info() {
	    return this.getTypedRuleContext(Kgr_infoContext,0);
	};

	einheit_w() {
	    return this.getTypedRuleContext(Einheit_wContext,0);
	};

	werteliste_kwb = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Werteliste_kwbContext);
	    } else {
	        return this.getTypedRuleContext(Werteliste_kwbContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterKennwerteblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitKennwerteblock(this);
		}
	}


}



class KennlinieContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_kennlinie;
    }

	NAME() {
	    return this.getToken(DCM_2_0_grammarParser.NAME, 0);
	};

	anzahl_x() {
	    return this.getTypedRuleContext(Anzahl_xContext,0);
	};

	kgr_info() {
	    return this.getTypedRuleContext(Kgr_infoContext,0);
	};

	einheit_x() {
	    return this.getTypedRuleContext(Einheit_xContext,0);
	};

	einheit_w() {
	    return this.getTypedRuleContext(Einheit_wContext,0);
	};

	sst_liste_x = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sst_liste_xContext);
	    } else {
	        return this.getTypedRuleContext(Sst_liste_xContext,i);
	    }
	};

	werteliste = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WertelisteContext);
	    } else {
	        return this.getTypedRuleContext(WertelisteContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterKennlinie(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitKennlinie(this);
		}
	}


}



class KennfeldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_kennfeld;
    }

	NAME() {
	    return this.getToken(DCM_2_0_grammarParser.NAME, 0);
	};

	anzahl_x() {
	    return this.getTypedRuleContext(Anzahl_xContext,0);
	};

	anzahl_y() {
	    return this.getTypedRuleContext(Anzahl_yContext,0);
	};

	kgr_info() {
	    return this.getTypedRuleContext(Kgr_infoContext,0);
	};

	kf_zeile_liste() {
	    return this.getTypedRuleContext(Kf_zeile_listeContext,0);
	};

	einheit_x() {
	    return this.getTypedRuleContext(Einheit_xContext,0);
	};

	einheit_y() {
	    return this.getTypedRuleContext(Einheit_yContext,0);
	};

	einheit_w() {
	    return this.getTypedRuleContext(Einheit_wContext,0);
	};

	sst_liste_x = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sst_liste_xContext);
	    } else {
	        return this.getTypedRuleContext(Sst_liste_xContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterKennfeld(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitKennfeld(this);
		}
	}


}



class GruppenstuetzstellenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_gruppenstuetzstellen;
    }

	NAME() {
	    return this.getToken(DCM_2_0_grammarParser.NAME, 0);
	};

	anzahl_x() {
	    return this.getTypedRuleContext(Anzahl_xContext,0);
	};

	kgr_info() {
	    return this.getTypedRuleContext(Kgr_infoContext,0);
	};

	einheit_x() {
	    return this.getTypedRuleContext(Einheit_xContext,0);
	};

	sst_liste_x = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sst_liste_xContext);
	    } else {
	        return this.getTypedRuleContext(Sst_liste_xContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterGruppenstuetzstellen(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitGruppenstuetzstellen(this);
		}
	}


}



class KenntextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_kenntext;
    }

	NAME() {
	    return this.getToken(DCM_2_0_grammarParser.NAME, 0);
	};

	kgr_info() {
	    return this.getTypedRuleContext(Kgr_infoContext,0);
	};

	TEXT() {
	    return this.getToken(DCM_2_0_grammarParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterKenntext(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitKenntext(this);
		}
	}


}



class Kgr_infoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_kgr_info;
    }

	langname() {
	    return this.getTypedRuleContext(LangnameContext,0);
	};

	displayname() {
	    return this.getTypedRuleContext(DisplaynameContext,0);
	};

	var_abhangigkeiten() {
	    return this.getTypedRuleContext(Var_abhangigkeitenContext,0);
	};

	funktionszugehorigkeit() {
	    return this.getTypedRuleContext(FunktionszugehorigkeitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterKgr_info(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitKgr_info(this);
		}
	}


}



class Einheit_xContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_einheit_x;
    }

	TEXT() {
	    return this.getToken(DCM_2_0_grammarParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterEinheit_x(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitEinheit_x(this);
		}
	}


}



class Einheit_yContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_einheit_y;
    }

	TEXT() {
	    return this.getToken(DCM_2_0_grammarParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterEinheit_y(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitEinheit_y(this);
		}
	}


}



class Einheit_wContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_einheit_w;
    }

	TEXT() {
	    return this.getToken(DCM_2_0_grammarParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterEinheit_w(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitEinheit_w(this);
		}
	}


}



class LangnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_langname;
    }

	TEXT() {
	    return this.getToken(DCM_2_0_grammarParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterLangname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitLangname(this);
		}
	}


}



class DisplaynameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_displayname;
    }

	NAME() {
	    return this.getToken(DCM_2_0_grammarParser.NAME, 0);
	};

	TEXT() {
	    return this.getToken(DCM_2_0_grammarParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterDisplayname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitDisplayname(this);
		}
	}


}



class Var_abhangigkeitenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_var_abhangigkeiten;
    }

	var_abh = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Var_abhContext);
	    } else {
	        return this.getTypedRuleContext(Var_abhContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterVar_abhangigkeiten(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitVar_abhangigkeiten(this);
		}
	}


}



class Var_abhContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_var_abh;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DCM_2_0_grammarParser.NAME);
	    } else {
	        return this.getToken(DCM_2_0_grammarParser.NAME, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterVar_abh(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitVar_abh(this);
		}
	}


}



class FunktionszugehorigkeitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_funktionszugehorigkeit;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DCM_2_0_grammarParser.NAME);
	    } else {
	        return this.getToken(DCM_2_0_grammarParser.NAME, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterFunktionszugehorigkeit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitFunktionszugehorigkeit(this);
		}
	}


}



class Anzahl_xContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_anzahl_x;
    }

	INT() {
	    return this.getToken(DCM_2_0_grammarParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterAnzahl_x(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitAnzahl_x(this);
		}
	}


}



class Anzahl_yContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_anzahl_y;
    }

	INT() {
	    return this.getToken(DCM_2_0_grammarParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterAnzahl_y(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitAnzahl_y(this);
		}
	}


}



class WertelisteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_werteliste;
    }

	realzahl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RealzahlContext);
	    } else {
	        return this.getTypedRuleContext(RealzahlContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterWerteliste(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitWerteliste(this);
		}
	}


}



class Werteliste_kwbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_werteliste_kwb;
    }

	realzahl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RealzahlContext);
	    } else {
	        return this.getTypedRuleContext(RealzahlContext,i);
	    }
	};

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DCM_2_0_grammarParser.TEXT);
	    } else {
	        return this.getToken(DCM_2_0_grammarParser.TEXT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterWerteliste_kwb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitWerteliste_kwb(this);
		}
	}


}



class Sst_liste_xContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_sst_liste_x;
    }

	realzahl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RealzahlContext);
	    } else {
	        return this.getTypedRuleContext(RealzahlContext,i);
	    }
	};

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DCM_2_0_grammarParser.TEXT);
	    } else {
	        return this.getToken(DCM_2_0_grammarParser.TEXT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterSst_liste_x(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitSst_liste_x(this);
		}
	}


}



class Kf_zeile_listeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_kf_zeile_liste;
    }

	kf_zeile_liste_r = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Kf_zeile_liste_rContext);
	    } else {
	        return this.getTypedRuleContext(Kf_zeile_liste_rContext,i);
	    }
	};

	kf_zeile_liste_tx = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Kf_zeile_liste_txContext);
	    } else {
	        return this.getTypedRuleContext(Kf_zeile_liste_txContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterKf_zeile_liste(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitKf_zeile_liste(this);
		}
	}


}



class Kf_zeile_liste_rContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_kf_zeile_liste_r;
    }

	realzahl() {
	    return this.getTypedRuleContext(RealzahlContext,0);
	};

	werteliste = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WertelisteContext);
	    } else {
	        return this.getTypedRuleContext(WertelisteContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterKf_zeile_liste_r(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitKf_zeile_liste_r(this);
		}
	}


}



class Kf_zeile_liste_txContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_kf_zeile_liste_tx;
    }

	TEXT() {
	    return this.getToken(DCM_2_0_grammarParser.TEXT, 0);
	};

	werteliste = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WertelisteContext);
	    } else {
	        return this.getTypedRuleContext(WertelisteContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterKf_zeile_liste_tx(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitKf_zeile_liste_tx(this);
		}
	}


}



class RealzahlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DCM_2_0_grammarParser.RULE_realzahl;
    }

	INT() {
	    return this.getToken(DCM_2_0_grammarParser.INT, 0);
	};

	FLOAT() {
	    return this.getToken(DCM_2_0_grammarParser.FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.enterRealzahl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DCM_2_0_grammarListener ) {
	        listener.exitRealzahl(this);
		}
	}


}




DCM_2_0_grammarParser.KonservierungContext = KonservierungContext; 
DCM_2_0_grammarParser.Kons_kopfContext = Kons_kopfContext; 
DCM_2_0_grammarParser.Modulkopf_infoContext = Modulkopf_infoContext; 
DCM_2_0_grammarParser.Mod_zeileContext = Mod_zeileContext; 
DCM_2_0_grammarParser.Mod_anf_zeileContext = Mod_anf_zeileContext; 
DCM_2_0_grammarParser.Mod_fort_zeileContext = Mod_fort_zeileContext; 
DCM_2_0_grammarParser.Mod_ele_nameContext = Mod_ele_nameContext; 
DCM_2_0_grammarParser.Mod_ele_wertContext = Mod_ele_wertContext; 
DCM_2_0_grammarParser.FunktionsdefContext = FunktionsdefContext; 
DCM_2_0_grammarParser.FunktionszeileContext = FunktionszeileContext; 
DCM_2_0_grammarParser.Fkt_versionContext = Fkt_versionContext; 
DCM_2_0_grammarParser.Fkt_langnameContext = Fkt_langnameContext; 
DCM_2_0_grammarParser.VariantendefContext = VariantendefContext; 
DCM_2_0_grammarParser.VariantenkritContext = VariantenkritContext; 
DCM_2_0_grammarParser.Krit_nameContext = Krit_nameContext; 
DCM_2_0_grammarParser.Krit_wertContext = Krit_wertContext; 
DCM_2_0_grammarParser.Kons_rumpfContext = Kons_rumpfContext; 
DCM_2_0_grammarParser.KenngroesseContext = KenngroesseContext; 
DCM_2_0_grammarParser.KennwertContext = KennwertContext; 
DCM_2_0_grammarParser.KennwerteblockContext = KennwerteblockContext; 
DCM_2_0_grammarParser.KennlinieContext = KennlinieContext; 
DCM_2_0_grammarParser.KennfeldContext = KennfeldContext; 
DCM_2_0_grammarParser.GruppenstuetzstellenContext = GruppenstuetzstellenContext; 
DCM_2_0_grammarParser.KenntextContext = KenntextContext; 
DCM_2_0_grammarParser.Kgr_infoContext = Kgr_infoContext; 
DCM_2_0_grammarParser.Einheit_xContext = Einheit_xContext; 
DCM_2_0_grammarParser.Einheit_yContext = Einheit_yContext; 
DCM_2_0_grammarParser.Einheit_wContext = Einheit_wContext; 
DCM_2_0_grammarParser.LangnameContext = LangnameContext; 
DCM_2_0_grammarParser.DisplaynameContext = DisplaynameContext; 
DCM_2_0_grammarParser.Var_abhangigkeitenContext = Var_abhangigkeitenContext; 
DCM_2_0_grammarParser.Var_abhContext = Var_abhContext; 
DCM_2_0_grammarParser.FunktionszugehorigkeitContext = FunktionszugehorigkeitContext; 
DCM_2_0_grammarParser.Anzahl_xContext = Anzahl_xContext; 
DCM_2_0_grammarParser.Anzahl_yContext = Anzahl_yContext; 
DCM_2_0_grammarParser.WertelisteContext = WertelisteContext; 
DCM_2_0_grammarParser.Werteliste_kwbContext = Werteliste_kwbContext; 
DCM_2_0_grammarParser.Sst_liste_xContext = Sst_liste_xContext; 
DCM_2_0_grammarParser.Kf_zeile_listeContext = Kf_zeile_listeContext; 
DCM_2_0_grammarParser.Kf_zeile_liste_rContext = Kf_zeile_liste_rContext; 
DCM_2_0_grammarParser.Kf_zeile_liste_txContext = Kf_zeile_liste_txContext; 
DCM_2_0_grammarParser.RealzahlContext = RealzahlContext; 
