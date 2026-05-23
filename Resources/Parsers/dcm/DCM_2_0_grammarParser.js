// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/dcm/DCM_2_0_grammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DCM_2_0_grammarListener from './DCM_2_0_grammarListener.js';
const serializedATN = [4,1,40,589,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
1,0,5,0,86,8,0,10,0,12,0,89,9,0,1,0,1,0,4,0,93,8,0,11,0,12,0,94,1,0,1,0,
1,0,1,0,1,1,3,1,102,8,1,1,1,3,1,105,8,1,1,1,3,1,108,8,1,1,2,4,2,111,8,2,
11,2,12,2,112,1,3,1,3,5,3,117,8,3,10,3,12,3,120,9,3,1,4,1,4,1,4,1,4,1,5,
1,5,1,5,1,6,1,6,1,7,1,7,4,7,133,8,7,11,7,12,7,134,1,8,1,8,1,8,4,8,140,8,
8,11,8,12,8,141,1,8,1,8,4,8,146,8,8,11,8,12,8,147,1,9,1,9,1,9,1,9,1,9,1,
10,1,10,1,11,1,11,4,11,159,8,11,11,11,12,11,160,1,12,1,12,1,12,4,12,166,
8,12,11,12,12,12,167,1,12,1,12,4,12,172,8,12,11,12,12,12,173,1,13,1,13,1,
13,5,13,179,8,13,10,13,12,13,182,9,13,1,13,4,13,185,8,13,11,13,12,13,186,
1,14,1,14,1,15,1,15,1,16,5,16,194,8,16,10,16,12,16,197,9,16,1,17,1,17,1,
17,1,17,1,17,1,17,3,17,205,8,17,1,18,1,18,1,18,1,18,1,18,3,18,212,8,18,1,
18,1,18,1,18,1,18,1,18,4,18,219,8,18,11,18,12,18,220,1,18,1,18,1,18,1,18,
1,18,3,18,228,8,18,1,18,1,18,1,18,1,18,1,18,4,18,235,8,18,11,18,12,18,236,
3,18,239,8,18,1,19,1,19,1,19,1,19,1,19,1,19,3,19,247,8,19,1,19,4,19,250,
8,19,11,19,12,19,251,1,19,1,19,4,19,256,8,19,11,19,12,19,257,1,20,1,20,1,
20,1,20,1,20,1,20,3,20,266,8,20,1,20,3,20,269,8,20,1,20,4,20,272,8,20,11,
20,12,20,273,1,20,4,20,277,8,20,11,20,12,20,278,1,20,1,20,4,20,283,8,20,
11,20,12,20,284,1,20,1,20,1,20,1,20,1,20,1,20,3,20,293,8,20,1,20,3,20,296,
8,20,1,20,4,20,299,8,20,11,20,12,20,300,1,20,4,20,304,8,20,11,20,12,20,305,
1,20,1,20,4,20,310,8,20,11,20,12,20,311,1,20,1,20,1,20,1,20,1,20,1,20,3,
20,320,8,20,1,20,3,20,323,8,20,1,20,4,20,326,8,20,11,20,12,20,327,1,20,4,
20,331,8,20,11,20,12,20,332,1,20,1,20,4,20,337,8,20,11,20,12,20,338,3,20,
341,8,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,350,8,21,1,21,3,21,353,
8,21,1,21,3,21,356,8,21,1,21,4,21,359,8,21,11,21,12,21,360,1,21,1,21,1,21,
4,21,366,8,21,11,21,12,21,367,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,377,
8,21,1,21,3,21,380,8,21,1,21,3,21,383,8,21,1,21,4,21,386,8,21,11,21,12,21,
387,1,21,1,21,1,21,4,21,393,8,21,11,21,12,21,394,1,21,1,21,1,21,1,21,1,21,
1,21,1,21,3,21,404,8,21,1,21,3,21,407,8,21,1,21,3,21,410,8,21,1,21,4,21,
413,8,21,11,21,12,21,414,1,21,1,21,1,21,4,21,420,8,21,11,21,12,21,421,3,
21,424,8,21,1,22,1,22,1,22,1,22,1,22,1,22,3,22,432,8,22,1,22,4,22,435,8,
22,11,22,12,22,436,1,22,1,22,4,22,441,8,22,11,22,12,22,442,1,23,1,23,1,23,
1,23,1,23,1,23,1,23,1,23,1,23,4,23,454,8,23,11,23,12,23,455,1,24,3,24,459,
8,24,1,24,3,24,462,8,24,1,24,3,24,465,8,24,1,24,3,24,468,8,24,1,25,1,25,
1,25,1,25,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,
29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,5,30,494,8,30,10,30,12,30,497,9,30,
1,30,1,30,1,31,1,31,1,31,1,31,1,32,1,32,4,32,507,8,32,11,32,12,32,508,1,
32,1,32,1,33,1,33,1,34,1,34,1,35,1,35,4,35,519,8,35,11,35,12,35,520,1,35,
1,35,1,36,1,36,4,36,527,8,36,11,36,12,36,528,1,36,1,36,1,36,1,36,4,36,535,
8,36,11,36,12,36,536,1,36,3,36,540,8,36,1,37,1,37,4,37,544,8,37,11,37,12,
37,545,1,37,1,37,1,37,1,37,4,37,552,8,37,11,37,12,37,553,1,37,3,37,557,8,
37,1,38,4,38,560,8,38,11,38,12,38,561,1,38,4,38,565,8,38,11,38,12,38,566,
3,38,569,8,38,1,39,1,39,1,39,1,39,4,39,575,8,39,11,39,12,39,576,1,40,1,40,
1,40,1,40,4,40,583,8,40,11,40,12,40,584,1,41,1,41,1,41,0,0,42,0,2,4,6,8,
10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
58,60,62,64,66,68,70,72,74,76,78,80,82,0,2,1,0,34,35,1,0,36,37,631,0,87,
1,0,0,0,2,101,1,0,0,0,4,110,1,0,0,0,6,114,1,0,0,0,8,121,1,0,0,0,10,125,1,
0,0,0,12,128,1,0,0,0,14,130,1,0,0,0,16,136,1,0,0,0,18,149,1,0,0,0,20,154,
1,0,0,0,22,156,1,0,0,0,24,162,1,0,0,0,26,175,1,0,0,0,28,188,1,0,0,0,30,190,
1,0,0,0,32,195,1,0,0,0,34,204,1,0,0,0,36,238,1,0,0,0,38,240,1,0,0,0,40,340,
1,0,0,0,42,423,1,0,0,0,44,425,1,0,0,0,46,444,1,0,0,0,48,458,1,0,0,0,50,469,
1,0,0,0,52,473,1,0,0,0,54,477,1,0,0,0,56,481,1,0,0,0,58,485,1,0,0,0,60,489,
1,0,0,0,62,500,1,0,0,0,64,504,1,0,0,0,66,512,1,0,0,0,68,514,1,0,0,0,70,516,
1,0,0,0,72,539,1,0,0,0,74,556,1,0,0,0,76,568,1,0,0,0,78,570,1,0,0,0,80,578,
1,0,0,0,82,586,1,0,0,0,84,86,5,1,0,0,85,84,1,0,0,0,86,89,1,0,0,0,87,85,1,
0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,87,1,0,0,0,90,92,5,2,0,0,91,93,5,1,
0,0,92,91,1,0,0,0,93,94,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,96,1,0,0,
0,96,97,3,2,1,0,97,98,3,32,16,0,98,99,5,0,0,1,99,1,1,0,0,0,100,102,3,4,2,
0,101,100,1,0,0,0,101,102,1,0,0,0,102,104,1,0,0,0,103,105,3,16,8,0,104,103,
1,0,0,0,104,105,1,0,0,0,105,107,1,0,0,0,106,108,3,24,12,0,107,106,1,0,0,
0,107,108,1,0,0,0,108,3,1,0,0,0,109,111,3,6,3,0,110,109,1,0,0,0,111,112,
1,0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,5,1,0,0,0,114,118,3,8,4,0,115,
117,3,10,5,0,116,115,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,118,119,1,0,
0,0,119,7,1,0,0,0,120,118,1,0,0,0,121,122,5,3,0,0,122,123,3,12,6,0,123,124,
3,14,7,0,124,9,1,0,0,0,125,126,5,3,0,0,126,127,3,14,7,0,127,11,1,0,0,0,128,
129,5,34,0,0,129,13,1,0,0,0,130,132,5,35,0,0,131,133,5,1,0,0,132,131,1,0,
0,0,133,134,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,15,1,0,0,0,136,137,
5,4,0,0,137,139,5,1,0,0,138,140,3,18,9,0,139,138,1,0,0,0,140,141,1,0,0,0,
141,139,1,0,0,0,141,142,1,0,0,0,142,143,1,0,0,0,143,145,5,5,0,0,144,146,
5,1,0,0,145,144,1,0,0,0,146,147,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,
148,17,1,0,0,0,149,150,5,6,0,0,150,151,5,34,0,0,151,152,3,20,10,0,152,153,
3,22,11,0,153,19,1,0,0,0,154,155,5,35,0,0,155,21,1,0,0,0,156,158,5,35,0,
0,157,159,5,1,0,0,158,157,1,0,0,0,159,160,1,0,0,0,160,158,1,0,0,0,160,161,
1,0,0,0,161,23,1,0,0,0,162,163,5,7,0,0,163,165,5,1,0,0,164,166,3,26,13,0,
165,164,1,0,0,0,166,167,1,0,0,0,167,165,1,0,0,0,167,168,1,0,0,0,168,169,
1,0,0,0,169,171,5,5,0,0,170,172,5,1,0,0,171,170,1,0,0,0,172,173,1,0,0,0,
173,171,1,0,0,0,173,174,1,0,0,0,174,25,1,0,0,0,175,176,5,8,0,0,176,180,3,
28,14,0,177,179,3,30,15,0,178,177,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,
0,180,181,1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,0,183,185,5,1,0,0,184,183,
1,0,0,0,185,186,1,0,0,0,186,184,1,0,0,0,186,187,1,0,0,0,187,27,1,0,0,0,188,
189,5,34,0,0,189,29,1,0,0,0,190,191,5,34,0,0,191,31,1,0,0,0,192,194,3,34,
17,0,193,192,1,0,0,0,194,197,1,0,0,0,195,193,1,0,0,0,195,196,1,0,0,0,196,
33,1,0,0,0,197,195,1,0,0,0,198,205,3,36,18,0,199,205,3,38,19,0,200,205,3,
40,20,0,201,205,3,42,21,0,202,205,3,44,22,0,203,205,3,46,23,0,204,198,1,
0,0,0,204,199,1,0,0,0,204,200,1,0,0,0,204,201,1,0,0,0,204,202,1,0,0,0,204,
203,1,0,0,0,205,35,1,0,0,0,206,207,5,9,0,0,207,208,5,34,0,0,208,209,5,1,
0,0,209,211,3,48,24,0,210,212,3,54,27,0,211,210,1,0,0,0,211,212,1,0,0,0,
212,213,1,0,0,0,213,214,5,10,0,0,214,215,3,82,41,0,215,216,5,1,0,0,216,218,
5,5,0,0,217,219,5,1,0,0,218,217,1,0,0,0,219,220,1,0,0,0,220,218,1,0,0,0,
220,221,1,0,0,0,221,239,1,0,0,0,222,223,5,9,0,0,223,224,5,34,0,0,224,225,
5,1,0,0,225,227,3,48,24,0,226,228,3,54,27,0,227,226,1,0,0,0,227,228,1,0,
0,0,228,229,1,0,0,0,229,230,5,11,0,0,230,231,5,35,0,0,231,232,5,1,0,0,232,
234,5,5,0,0,233,235,5,1,0,0,234,233,1,0,0,0,235,236,1,0,0,0,236,234,1,0,
0,0,236,237,1,0,0,0,237,239,1,0,0,0,238,206,1,0,0,0,238,222,1,0,0,0,239,
37,1,0,0,0,240,241,5,12,0,0,241,242,5,34,0,0,242,243,3,66,33,0,243,244,5,
1,0,0,244,246,3,48,24,0,245,247,3,54,27,0,246,245,1,0,0,0,246,247,1,0,0,
0,247,249,1,0,0,0,248,250,3,72,36,0,249,248,1,0,0,0,250,251,1,0,0,0,251,
249,1,0,0,0,251,252,1,0,0,0,252,253,1,0,0,0,253,255,5,5,0,0,254,256,5,1,
0,0,255,254,1,0,0,0,256,257,1,0,0,0,257,255,1,0,0,0,257,258,1,0,0,0,258,
39,1,0,0,0,259,260,5,13,0,0,260,261,5,34,0,0,261,262,3,66,33,0,262,263,5,
1,0,0,263,265,3,48,24,0,264,266,3,50,25,0,265,264,1,0,0,0,265,266,1,0,0,
0,266,268,1,0,0,0,267,269,3,54,27,0,268,267,1,0,0,0,268,269,1,0,0,0,269,
271,1,0,0,0,270,272,3,74,37,0,271,270,1,0,0,0,272,273,1,0,0,0,273,271,1,
0,0,0,273,274,1,0,0,0,274,276,1,0,0,0,275,277,3,70,35,0,276,275,1,0,0,0,
277,278,1,0,0,0,278,276,1,0,0,0,278,279,1,0,0,0,279,280,1,0,0,0,280,282,
5,5,0,0,281,283,5,1,0,0,282,281,1,0,0,0,283,284,1,0,0,0,284,282,1,0,0,0,
284,285,1,0,0,0,285,341,1,0,0,0,286,287,5,14,0,0,287,288,5,34,0,0,288,289,
3,66,33,0,289,290,5,1,0,0,290,292,3,48,24,0,291,293,3,50,25,0,292,291,1,
0,0,0,292,293,1,0,0,0,293,295,1,0,0,0,294,296,3,54,27,0,295,294,1,0,0,0,
295,296,1,0,0,0,296,298,1,0,0,0,297,299,3,74,37,0,298,297,1,0,0,0,299,300,
1,0,0,0,300,298,1,0,0,0,300,301,1,0,0,0,301,303,1,0,0,0,302,304,3,70,35,
0,303,302,1,0,0,0,304,305,1,0,0,0,305,303,1,0,0,0,305,306,1,0,0,0,306,307,
1,0,0,0,307,309,5,5,0,0,308,310,5,1,0,0,309,308,1,0,0,0,310,311,1,0,0,0,
311,309,1,0,0,0,311,312,1,0,0,0,312,341,1,0,0,0,313,314,5,15,0,0,314,315,
5,34,0,0,315,316,3,66,33,0,316,317,5,1,0,0,317,319,3,48,24,0,318,320,3,50,
25,0,319,318,1,0,0,0,319,320,1,0,0,0,320,322,1,0,0,0,321,323,3,54,27,0,322,
321,1,0,0,0,322,323,1,0,0,0,323,325,1,0,0,0,324,326,3,74,37,0,325,324,1,
0,0,0,326,327,1,0,0,0,327,325,1,0,0,0,327,328,1,0,0,0,328,330,1,0,0,0,329,
331,3,70,35,0,330,329,1,0,0,0,331,332,1,0,0,0,332,330,1,0,0,0,332,333,1,
0,0,0,333,334,1,0,0,0,334,336,5,5,0,0,335,337,5,1,0,0,336,335,1,0,0,0,337,
338,1,0,0,0,338,336,1,0,0,0,338,339,1,0,0,0,339,341,1,0,0,0,340,259,1,0,
0,0,340,286,1,0,0,0,340,313,1,0,0,0,341,41,1,0,0,0,342,343,5,16,0,0,343,
344,5,34,0,0,344,345,3,66,33,0,345,346,3,68,34,0,346,347,5,1,0,0,347,349,
3,48,24,0,348,350,3,50,25,0,349,348,1,0,0,0,349,350,1,0,0,0,350,352,1,0,
0,0,351,353,3,52,26,0,352,351,1,0,0,0,352,353,1,0,0,0,353,355,1,0,0,0,354,
356,3,54,27,0,355,354,1,0,0,0,355,356,1,0,0,0,356,358,1,0,0,0,357,359,3,
74,37,0,358,357,1,0,0,0,359,360,1,0,0,0,360,358,1,0,0,0,360,361,1,0,0,0,
361,362,1,0,0,0,362,363,3,76,38,0,363,365,5,5,0,0,364,366,5,1,0,0,365,364,
1,0,0,0,366,367,1,0,0,0,367,365,1,0,0,0,367,368,1,0,0,0,368,424,1,0,0,0,
369,370,5,17,0,0,370,371,5,34,0,0,371,372,3,66,33,0,372,373,3,68,34,0,373,
374,5,1,0,0,374,376,3,48,24,0,375,377,3,50,25,0,376,375,1,0,0,0,376,377,
1,0,0,0,377,379,1,0,0,0,378,380,3,52,26,0,379,378,1,0,0,0,379,380,1,0,0,
0,380,382,1,0,0,0,381,383,3,54,27,0,382,381,1,0,0,0,382,383,1,0,0,0,383,
385,1,0,0,0,384,386,3,74,37,0,385,384,1,0,0,0,386,387,1,0,0,0,387,385,1,
0,0,0,387,388,1,0,0,0,388,389,1,0,0,0,389,390,3,76,38,0,390,392,5,5,0,0,
391,393,5,1,0,0,392,391,1,0,0,0,393,394,1,0,0,0,394,392,1,0,0,0,394,395,
1,0,0,0,395,424,1,0,0,0,396,397,5,18,0,0,397,398,5,34,0,0,398,399,3,66,33,
0,399,400,3,68,34,0,400,401,5,1,0,0,401,403,3,48,24,0,402,404,3,50,25,0,
403,402,1,0,0,0,403,404,1,0,0,0,404,406,1,0,0,0,405,407,3,52,26,0,406,405,
1,0,0,0,406,407,1,0,0,0,407,409,1,0,0,0,408,410,3,54,27,0,409,408,1,0,0,
0,409,410,1,0,0,0,410,412,1,0,0,0,411,413,3,74,37,0,412,411,1,0,0,0,413,
414,1,0,0,0,414,412,1,0,0,0,414,415,1,0,0,0,415,416,1,0,0,0,416,417,3,76,
38,0,417,419,5,5,0,0,418,420,5,1,0,0,419,418,1,0,0,0,420,421,1,0,0,0,421,
419,1,0,0,0,421,422,1,0,0,0,422,424,1,0,0,0,423,342,1,0,0,0,423,369,1,0,
0,0,423,396,1,0,0,0,424,43,1,0,0,0,425,426,5,19,0,0,426,427,5,34,0,0,427,
428,3,66,33,0,428,429,5,1,0,0,429,431,3,48,24,0,430,432,3,50,25,0,431,430,
1,0,0,0,431,432,1,0,0,0,432,434,1,0,0,0,433,435,3,74,37,0,434,433,1,0,0,
0,435,436,1,0,0,0,436,434,1,0,0,0,436,437,1,0,0,0,437,438,1,0,0,0,438,440,
5,5,0,0,439,441,5,1,0,0,440,439,1,0,0,0,441,442,1,0,0,0,442,440,1,0,0,0,
442,443,1,0,0,0,443,45,1,0,0,0,444,445,5,20,0,0,445,446,5,34,0,0,446,447,
5,1,0,0,447,448,3,48,24,0,448,449,5,11,0,0,449,450,5,35,0,0,450,451,5,1,
0,0,451,453,5,5,0,0,452,454,5,1,0,0,453,452,1,0,0,0,454,455,1,0,0,0,455,
453,1,0,0,0,455,456,1,0,0,0,456,47,1,0,0,0,457,459,3,56,28,0,458,457,1,0,
0,0,458,459,1,0,0,0,459,461,1,0,0,0,460,462,3,58,29,0,461,460,1,0,0,0,461,
462,1,0,0,0,462,464,1,0,0,0,463,465,3,60,30,0,464,463,1,0,0,0,464,465,1,
0,0,0,465,467,1,0,0,0,466,468,3,64,32,0,467,466,1,0,0,0,467,468,1,0,0,0,
468,49,1,0,0,0,469,470,5,21,0,0,470,471,5,35,0,0,471,472,5,1,0,0,472,51,
1,0,0,0,473,474,5,22,0,0,474,475,5,35,0,0,475,476,5,1,0,0,476,53,1,0,0,0,
477,478,5,23,0,0,478,479,5,35,0,0,479,480,5,1,0,0,480,55,1,0,0,0,481,482,
5,24,0,0,482,483,5,35,0,0,483,484,5,1,0,0,484,57,1,0,0,0,485,486,5,25,0,
0,486,487,7,0,0,0,487,488,5,1,0,0,488,59,1,0,0,0,489,490,5,26,0,0,490,495,
3,62,31,0,491,492,5,27,0,0,492,494,3,62,31,0,493,491,1,0,0,0,494,497,1,0,
0,0,495,493,1,0,0,0,495,496,1,0,0,0,496,498,1,0,0,0,497,495,1,0,0,0,498,
499,5,1,0,0,499,61,1,0,0,0,500,501,5,34,0,0,501,502,5,28,0,0,502,503,5,34,
0,0,503,63,1,0,0,0,504,506,5,29,0,0,505,507,5,34,0,0,506,505,1,0,0,0,507,
508,1,0,0,0,508,506,1,0,0,0,508,509,1,0,0,0,509,510,1,0,0,0,510,511,5,1,
0,0,511,65,1,0,0,0,512,513,5,36,0,0,513,67,1,0,0,0,514,515,5,36,0,0,515,
69,1,0,0,0,516,518,5,10,0,0,517,519,3,82,41,0,518,517,1,0,0,0,519,520,1,
0,0,0,520,518,1,0,0,0,520,521,1,0,0,0,521,522,1,0,0,0,522,523,5,1,0,0,523,
71,1,0,0,0,524,526,5,10,0,0,525,527,3,82,41,0,526,525,1,0,0,0,527,528,1,
0,0,0,528,526,1,0,0,0,528,529,1,0,0,0,529,530,1,0,0,0,530,531,5,1,0,0,531,
540,1,0,0,0,532,534,5,11,0,0,533,535,5,35,0,0,534,533,1,0,0,0,535,536,1,
0,0,0,536,534,1,0,0,0,536,537,1,0,0,0,537,538,1,0,0,0,538,540,5,1,0,0,539,
524,1,0,0,0,539,532,1,0,0,0,540,73,1,0,0,0,541,543,5,30,0,0,542,544,3,82,
41,0,543,542,1,0,0,0,544,545,1,0,0,0,545,543,1,0,0,0,545,546,1,0,0,0,546,
547,1,0,0,0,547,548,5,1,0,0,548,557,1,0,0,0,549,551,5,31,0,0,550,552,5,35,
0,0,551,550,1,0,0,0,552,553,1,0,0,0,553,551,1,0,0,0,553,554,1,0,0,0,554,
555,1,0,0,0,555,557,5,1,0,0,556,541,1,0,0,0,556,549,1,0,0,0,557,75,1,0,0,
0,558,560,3,78,39,0,559,558,1,0,0,0,560,561,1,0,0,0,561,559,1,0,0,0,561,
562,1,0,0,0,562,569,1,0,0,0,563,565,3,80,40,0,564,563,1,0,0,0,565,566,1,
0,0,0,566,564,1,0,0,0,566,567,1,0,0,0,567,569,1,0,0,0,568,559,1,0,0,0,568,
564,1,0,0,0,569,77,1,0,0,0,570,571,5,32,0,0,571,572,3,82,41,0,572,574,5,
1,0,0,573,575,3,70,35,0,574,573,1,0,0,0,575,576,1,0,0,0,576,574,1,0,0,0,
576,577,1,0,0,0,577,79,1,0,0,0,578,579,5,33,0,0,579,580,5,35,0,0,580,582,
5,1,0,0,581,583,3,70,35,0,582,581,1,0,0,0,583,584,1,0,0,0,584,582,1,0,0,
0,584,585,1,0,0,0,585,81,1,0,0,0,586,587,7,1,0,0,587,83,1,0,0,0,79,87,94,
101,104,107,112,118,134,141,147,160,167,173,180,186,195,204,211,220,227,
236,238,246,251,257,265,268,273,278,284,292,295,300,305,311,319,322,327,
332,338,340,349,352,355,360,367,376,379,382,387,394,403,406,409,414,421,
423,431,436,442,455,458,461,464,467,495,508,520,528,536,539,545,553,556,
561,566,568,576,584];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

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



	konservierung() {
	    let localctx = new KonservierungContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DCM_2_0_grammarParser.RULE_konservierung);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
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
	        } while(_la===1);
	        this.state = 96;
	        this.kons_kopf();
	        this.state = 97;
	        this.kons_rumpf();
	        this.state = 98;
	        this.match(DCM_2_0_grammarParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 100;
	            this.modulkopf_info();
	        }

	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 103;
	            this.funktionsdef();
	        }

	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 106;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 109;
	            this.mod_zeile();
	            this.state = 112; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 114;
	        this.mod_anf_zeile();
	        this.state = 118;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 115;
	                this.mod_fort_zeile(); 
	            }
	            this.state = 120;
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
	        this.state = 121;
	        this.match(DCM_2_0_grammarParser.T__2);
	        this.state = 122;
	        this.mod_ele_name();
	        this.state = 123;
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
	        this.state = 125;
	        this.match(DCM_2_0_grammarParser.T__2);
	        this.state = 126;
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
	        this.state = 128;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(DCM_2_0_grammarParser.TEXT);
	        this.state = 132; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 131;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 134; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(DCM_2_0_grammarParser.T__3);
	        this.state = 137;
	        this.match(DCM_2_0_grammarParser.T__0);
	        this.state = 139; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 138;
	            this.funktionszeile();
	            this.state = 141; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===6);
	        this.state = 143;
	        this.match(DCM_2_0_grammarParser.T__4);
	        this.state = 145; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 144;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 147; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 149;
	        this.match(DCM_2_0_grammarParser.T__5);
	        this.state = 150;
	        this.match(DCM_2_0_grammarParser.NAME);
	        this.state = 151;
	        this.fkt_version();
	        this.state = 152;
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
	        this.state = 154;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(DCM_2_0_grammarParser.TEXT);
	        this.state = 158; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 157;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 160; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(DCM_2_0_grammarParser.T__6);
	        this.state = 163;
	        this.match(DCM_2_0_grammarParser.T__0);
	        this.state = 165; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 164;
	            this.variantenkrit();
	            this.state = 167; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===8);
	        this.state = 169;
	        this.match(DCM_2_0_grammarParser.T__4);
	        this.state = 171; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 170;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 173; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.match(DCM_2_0_grammarParser.T__7);
	        this.state = 176;
	        this.krit_name();
	        this.state = 180;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 177;
	            this.krit_wert();
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 184; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 183;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 186; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 188;
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
	        this.state = 190;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2093568) !== 0)) {
	            this.state = 192;
	            this.kenngroesse();
	            this.state = 197;
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
	        this.state = 204;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.state = 198;
	            this.kennwert();
	            break;
	        case 12:
	            this.state = 199;
	            this.kennwerteblock();
	            break;
	        case 13:
	        case 14:
	        case 15:
	            this.state = 200;
	            this.kennlinie();
	            break;
	        case 16:
	        case 17:
	        case 18:
	            this.state = 201;
	            this.kennfeld();
	            break;
	        case 19:
	            this.state = 202;
	            this.gruppenstuetzstellen();
	            break;
	        case 20:
	            this.state = 203;
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
	    var _la = 0;
	    try {
	        this.state = 238;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 206;
	            this.match(DCM_2_0_grammarParser.T__8);
	            this.state = 207;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 208;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 209;
	            this.kgr_info();
	            this.state = 211;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 210;
	                this.einheit_w();
	            }

	            this.state = 213;
	            this.match(DCM_2_0_grammarParser.T__9);
	            this.state = 214;
	            this.realzahl();
	            this.state = 215;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 216;
	            this.match(DCM_2_0_grammarParser.T__4);
	            this.state = 218; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 217;
	                this.match(DCM_2_0_grammarParser.T__0);
	                this.state = 220; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===1);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 222;
	            this.match(DCM_2_0_grammarParser.T__8);
	            this.state = 223;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 224;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 225;
	            this.kgr_info();
	            this.state = 227;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 226;
	                this.einheit_w();
	            }

	            this.state = 229;
	            this.match(DCM_2_0_grammarParser.T__10);
	            this.state = 230;
	            this.match(DCM_2_0_grammarParser.TEXT);
	            this.state = 231;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 232;
	            this.match(DCM_2_0_grammarParser.T__4);
	            this.state = 234; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 233;
	                this.match(DCM_2_0_grammarParser.T__0);
	                this.state = 236; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===1);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.match(DCM_2_0_grammarParser.T__11);
	        this.state = 241;
	        this.match(DCM_2_0_grammarParser.NAME);
	        this.state = 242;
	        this.anzahl_x();
	        this.state = 243;
	        this.match(DCM_2_0_grammarParser.T__0);
	        this.state = 244;
	        this.kgr_info();
	        this.state = 246;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 245;
	            this.einheit_w();
	        }

	        this.state = 249; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 248;
	            this.werteliste_kwb();
	            this.state = 251; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===10 || _la===11);
	        this.state = 253;
	        this.match(DCM_2_0_grammarParser.T__4);
	        this.state = 255; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 254;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 257; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    var _la = 0;
	    try {
	        this.state = 340;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 259;
	            this.match(DCM_2_0_grammarParser.T__12);
	            this.state = 260;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 261;
	            this.anzahl_x();
	            this.state = 262;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 263;
	            this.kgr_info();
	            this.state = 265;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 264;
	                this.einheit_x();
	            }

	            this.state = 268;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 267;
	                this.einheit_w();
	            }

	            this.state = 271; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 270;
	                this.sst_liste_x();
	                this.state = 273; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===30 || _la===31);
	            this.state = 276; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 275;
	                this.werteliste();
	                this.state = 278; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===10);
	            this.state = 280;
	            this.match(DCM_2_0_grammarParser.T__4);
	            this.state = 282; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 281;
	                this.match(DCM_2_0_grammarParser.T__0);
	                this.state = 284; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===1);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 286;
	            this.match(DCM_2_0_grammarParser.T__13);
	            this.state = 287;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 288;
	            this.anzahl_x();
	            this.state = 289;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 290;
	            this.kgr_info();
	            this.state = 292;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 291;
	                this.einheit_x();
	            }

	            this.state = 295;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 294;
	                this.einheit_w();
	            }

	            this.state = 298; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 297;
	                this.sst_liste_x();
	                this.state = 300; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===30 || _la===31);
	            this.state = 303; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 302;
	                this.werteliste();
	                this.state = 305; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===10);
	            this.state = 307;
	            this.match(DCM_2_0_grammarParser.T__4);
	            this.state = 309; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 308;
	                this.match(DCM_2_0_grammarParser.T__0);
	                this.state = 311; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===1);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 313;
	            this.match(DCM_2_0_grammarParser.T__14);
	            this.state = 314;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 315;
	            this.anzahl_x();
	            this.state = 316;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 317;
	            this.kgr_info();
	            this.state = 319;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 318;
	                this.einheit_x();
	            }

	            this.state = 322;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 321;
	                this.einheit_w();
	            }

	            this.state = 325; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 324;
	                this.sst_liste_x();
	                this.state = 327; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===30 || _la===31);
	            this.state = 330; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 329;
	                this.werteliste();
	                this.state = 332; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===10);
	            this.state = 334;
	            this.match(DCM_2_0_grammarParser.T__4);
	            this.state = 336; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 335;
	                this.match(DCM_2_0_grammarParser.T__0);
	                this.state = 338; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===1);
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
	    var _la = 0;
	    try {
	        this.state = 423;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 342;
	            this.match(DCM_2_0_grammarParser.T__15);
	            this.state = 343;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 344;
	            this.anzahl_x();
	            this.state = 345;
	            this.anzahl_y();
	            this.state = 346;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 347;
	            this.kgr_info();
	            this.state = 349;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 348;
	                this.einheit_x();
	            }

	            this.state = 352;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===22) {
	                this.state = 351;
	                this.einheit_y();
	            }

	            this.state = 355;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 354;
	                this.einheit_w();
	            }

	            this.state = 358; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 357;
	                this.sst_liste_x();
	                this.state = 360; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===30 || _la===31);
	            this.state = 362;
	            this.kf_zeile_liste();
	            this.state = 363;
	            this.match(DCM_2_0_grammarParser.T__4);
	            this.state = 365; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 364;
	                this.match(DCM_2_0_grammarParser.T__0);
	                this.state = 367; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===1);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 369;
	            this.match(DCM_2_0_grammarParser.T__16);
	            this.state = 370;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 371;
	            this.anzahl_x();
	            this.state = 372;
	            this.anzahl_y();
	            this.state = 373;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 374;
	            this.kgr_info();
	            this.state = 376;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 375;
	                this.einheit_x();
	            }

	            this.state = 379;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===22) {
	                this.state = 378;
	                this.einheit_y();
	            }

	            this.state = 382;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 381;
	                this.einheit_w();
	            }

	            this.state = 385; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 384;
	                this.sst_liste_x();
	                this.state = 387; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===30 || _la===31);
	            this.state = 389;
	            this.kf_zeile_liste();
	            this.state = 390;
	            this.match(DCM_2_0_grammarParser.T__4);
	            this.state = 392; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 391;
	                this.match(DCM_2_0_grammarParser.T__0);
	                this.state = 394; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===1);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 396;
	            this.match(DCM_2_0_grammarParser.T__17);
	            this.state = 397;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 398;
	            this.anzahl_x();
	            this.state = 399;
	            this.anzahl_y();
	            this.state = 400;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 401;
	            this.kgr_info();
	            this.state = 403;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 402;
	                this.einheit_x();
	            }

	            this.state = 406;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===22) {
	                this.state = 405;
	                this.einheit_y();
	            }

	            this.state = 409;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 408;
	                this.einheit_w();
	            }

	            this.state = 412; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 411;
	                this.sst_liste_x();
	                this.state = 414; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===30 || _la===31);
	            this.state = 416;
	            this.kf_zeile_liste();
	            this.state = 417;
	            this.match(DCM_2_0_grammarParser.T__4);
	            this.state = 419; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 418;
	                this.match(DCM_2_0_grammarParser.T__0);
	                this.state = 421; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===1);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 425;
	        this.match(DCM_2_0_grammarParser.T__18);
	        this.state = 426;
	        this.match(DCM_2_0_grammarParser.NAME);
	        this.state = 427;
	        this.anzahl_x();
	        this.state = 428;
	        this.match(DCM_2_0_grammarParser.T__0);
	        this.state = 429;
	        this.kgr_info();
	        this.state = 431;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 430;
	            this.einheit_x();
	        }

	        this.state = 434; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 433;
	            this.sst_liste_x();
	            this.state = 436; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===30 || _la===31);
	        this.state = 438;
	        this.match(DCM_2_0_grammarParser.T__4);
	        this.state = 440; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 439;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 442; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 444;
	        this.match(DCM_2_0_grammarParser.T__19);
	        this.state = 445;
	        this.match(DCM_2_0_grammarParser.NAME);
	        this.state = 446;
	        this.match(DCM_2_0_grammarParser.T__0);
	        this.state = 447;
	        this.kgr_info();
	        this.state = 448;
	        this.match(DCM_2_0_grammarParser.T__10);
	        this.state = 449;
	        this.match(DCM_2_0_grammarParser.TEXT);
	        this.state = 450;
	        this.match(DCM_2_0_grammarParser.T__0);
	        this.state = 451;
	        this.match(DCM_2_0_grammarParser.T__4);
	        this.state = 453; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 452;
	            this.match(DCM_2_0_grammarParser.T__0);
	            this.state = 455; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 458;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 457;
	            this.langname();
	        }

	        this.state = 461;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 460;
	            this.displayname();
	        }

	        this.state = 464;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26) {
	            this.state = 463;
	            this.var_abhangigkeiten();
	        }

	        this.state = 467;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 466;
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
	        this.state = 469;
	        this.match(DCM_2_0_grammarParser.T__20);
	        this.state = 470;
	        this.match(DCM_2_0_grammarParser.TEXT);
	        this.state = 471;
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
	        this.state = 473;
	        this.match(DCM_2_0_grammarParser.T__21);
	        this.state = 474;
	        this.match(DCM_2_0_grammarParser.TEXT);
	        this.state = 475;
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
	        this.state = 477;
	        this.match(DCM_2_0_grammarParser.T__22);
	        this.state = 478;
	        this.match(DCM_2_0_grammarParser.TEXT);
	        this.state = 479;
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
	        this.state = 481;
	        this.match(DCM_2_0_grammarParser.T__23);
	        this.state = 482;
	        this.match(DCM_2_0_grammarParser.TEXT);
	        this.state = 483;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 485;
	        this.match(DCM_2_0_grammarParser.T__24);
	        this.state = 486;
	        _la = this._input.LA(1);
	        if(!(_la===34 || _la===35)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 487;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 489;
	        this.match(DCM_2_0_grammarParser.T__25);
	        this.state = 490;
	        this.var_abh();
	        this.state = 495;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 491;
	            this.match(DCM_2_0_grammarParser.T__26);
	            this.state = 492;
	            this.var_abh();
	            this.state = 497;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 498;
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
	        this.state = 500;
	        this.match(DCM_2_0_grammarParser.NAME);
	        this.state = 501;
	        this.match(DCM_2_0_grammarParser.T__27);
	        this.state = 502;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 504;
	        this.match(DCM_2_0_grammarParser.T__28);
	        this.state = 506; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 505;
	            this.match(DCM_2_0_grammarParser.NAME);
	            this.state = 508; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===34);
	        this.state = 510;
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
	        this.state = 512;
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
	        this.state = 514;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 516;
	        this.match(DCM_2_0_grammarParser.T__9);
	        this.state = 518; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 517;
	            this.realzahl();
	            this.state = 520; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===36 || _la===37);
	        this.state = 522;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 539;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.state = 524;
	            this.match(DCM_2_0_grammarParser.T__9);
	            this.state = 526; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 525;
	                this.realzahl();
	                this.state = 528; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===36 || _la===37);
	            this.state = 530;
	            this.match(DCM_2_0_grammarParser.T__0);
	            break;
	        case 11:
	            this.state = 532;
	            this.match(DCM_2_0_grammarParser.T__10);
	            this.state = 534; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 533;
	                this.match(DCM_2_0_grammarParser.TEXT);
	                this.state = 536; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===35);
	            this.state = 538;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 556;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.state = 541;
	            this.match(DCM_2_0_grammarParser.T__29);
	            this.state = 543; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 542;
	                this.realzahl();
	                this.state = 545; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===36 || _la===37);
	            this.state = 547;
	            this.match(DCM_2_0_grammarParser.T__0);
	            break;
	        case 31:
	            this.state = 549;
	            this.match(DCM_2_0_grammarParser.T__30);
	            this.state = 551; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 550;
	                this.match(DCM_2_0_grammarParser.TEXT);
	                this.state = 553; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===35);
	            this.state = 555;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 568;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            this.state = 559; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 558;
	                this.kf_zeile_liste_r();
	                this.state = 561; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===32);
	            break;
	        case 33:
	            this.state = 564; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 563;
	                this.kf_zeile_liste_tx();
	                this.state = 566; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===33);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 570;
	        this.match(DCM_2_0_grammarParser.T__31);
	        this.state = 571;
	        this.realzahl();
	        this.state = 572;
	        this.match(DCM_2_0_grammarParser.T__0);
	        this.state = 574; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 573;
	            this.werteliste();
	            this.state = 576; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===10);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 578;
	        this.match(DCM_2_0_grammarParser.T__32);
	        this.state = 579;
	        this.match(DCM_2_0_grammarParser.TEXT);
	        this.state = 580;
	        this.match(DCM_2_0_grammarParser.T__0);
	        this.state = 582; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 581;
	            this.werteliste();
	            this.state = 584; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===10);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 586;
	        _la = this._input.LA(1);
	        if(!(_la===36 || _la===37)) {
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

	EOF() {
	    return this.getToken(DCM_2_0_grammarParser.EOF, 0);
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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
