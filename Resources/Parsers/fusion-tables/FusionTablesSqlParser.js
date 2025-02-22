// Generated from ./fusion-tables/FusionTablesSql.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import FusionTablesSqlListener from './FusionTablesSqlListener.js';
const serializedATN = [4,1,78,514,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,1,0,5,0,88,8,0,10,0,12,0,91,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,3,1,103,8,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,142,8,8,10,8,12,8,145,9,8,1,8,1,8,1,8,1,8,
3,8,151,8,8,1,8,5,8,154,8,8,10,8,12,8,157,9,8,1,8,1,8,1,9,1,9,1,9,1,9,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,172,8,10,10,10,12,10,175,9,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,5,10,184,8,10,10,10,12,10,187,9,10,1,10,1,
10,1,11,1,11,1,11,1,11,1,11,1,11,5,11,197,8,11,10,11,12,11,200,9,11,1,11,
1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,
13,217,8,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,3,15,226,8,15,1,16,1,16,1,
16,1,16,5,16,232,8,16,10,16,12,16,235,9,16,1,16,1,16,1,16,5,16,240,8,16,
10,16,12,16,243,9,16,1,16,1,16,3,16,247,8,16,1,16,1,16,1,16,1,16,1,16,5,
16,254,8,16,10,16,12,16,257,9,16,3,16,259,8,16,1,16,1,16,1,16,1,16,1,16,
5,16,266,8,16,10,16,12,16,269,9,16,3,16,271,8,16,1,16,1,16,1,16,1,16,3,16,
277,8,16,3,16,279,8,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,289,
8,17,1,17,3,17,292,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,
1,19,1,19,1,19,1,19,1,19,1,19,3,19,310,8,19,1,20,1,20,1,20,3,20,315,8,20,
1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,3,22,330,
8,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,
22,1,22,1,22,1,22,3,22,349,8,22,1,22,1,22,1,22,1,22,3,22,355,8,22,1,22,1,
22,1,22,1,22,1,22,1,22,5,22,363,8,22,10,22,12,22,366,9,22,1,22,1,22,1,22,
1,22,3,22,372,8,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,382,8,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,393,8,22,3,22,395,8,22,
1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,3,26,405,8,26,1,27,1,27,1,27,1,27,
1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,
29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,
1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,
1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
30,1,30,1,30,3,30,486,8,30,1,31,1,31,1,32,1,32,3,32,492,8,32,1,33,1,33,1,
34,1,34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,39,1,40,1,40,1,41,
1,41,1,42,1,42,1,42,0,0,43,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,
82,84,0,4,2,0,9,9,20,20,4,0,10,10,17,17,39,40,53,53,1,0,6,7,1,0,65,69,579,
0,89,1,0,0,0,2,102,1,0,0,0,4,106,1,0,0,0,6,108,1,0,0,0,8,110,1,0,0,0,10,
119,1,0,0,0,12,122,1,0,0,0,14,125,1,0,0,0,16,132,1,0,0,0,18,160,1,0,0,0,
20,164,1,0,0,0,22,190,1,0,0,0,24,204,1,0,0,0,26,208,1,0,0,0,28,218,1,0,0,
0,30,222,1,0,0,0,32,227,1,0,0,0,34,288,1,0,0,0,36,293,1,0,0,0,38,309,1,0,
0,0,40,314,1,0,0,0,42,318,1,0,0,0,44,394,1,0,0,0,46,396,1,0,0,0,48,398,1,
0,0,0,50,400,1,0,0,0,52,404,1,0,0,0,54,406,1,0,0,0,56,413,1,0,0,0,58,420,
1,0,0,0,60,485,1,0,0,0,62,487,1,0,0,0,64,491,1,0,0,0,66,493,1,0,0,0,68,495,
1,0,0,0,70,497,1,0,0,0,72,499,1,0,0,0,74,501,1,0,0,0,76,503,1,0,0,0,78,505,
1,0,0,0,80,507,1,0,0,0,82,509,1,0,0,0,84,511,1,0,0,0,86,88,3,2,1,0,87,86,
1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,1,1,0,0,0,91,89,1,0,
0,0,92,103,3,14,7,0,93,103,3,32,16,0,94,103,3,16,8,0,95,103,3,8,4,0,96,103,
3,26,13,0,97,103,3,18,9,0,98,103,3,20,10,0,99,103,3,22,11,0,100,103,3,10,
5,0,101,103,3,12,6,0,102,92,1,0,0,0,102,93,1,0,0,0,102,94,1,0,0,0,102,95,
1,0,0,0,102,96,1,0,0,0,102,97,1,0,0,0,102,98,1,0,0,0,102,99,1,0,0,0,102,
100,1,0,0,0,102,101,1,0,0,0,103,104,1,0,0,0,104,105,5,1,0,0,105,3,1,0,0,
0,106,107,3,72,36,0,107,5,1,0,0,0,108,109,3,72,36,0,109,7,1,0,0,0,110,111,
5,18,0,0,111,112,5,57,0,0,112,113,3,68,34,0,113,114,5,8,0,0,114,115,5,51,
0,0,115,116,5,2,0,0,116,117,5,26,0,0,117,118,3,4,2,0,118,9,1,0,0,0,119,120,
5,21,0,0,120,121,3,4,2,0,121,11,1,0,0,0,122,123,5,55,0,0,123,124,5,58,0,
0,124,13,1,0,0,0,125,126,5,5,0,0,126,127,5,57,0,0,127,128,3,4,2,0,128,129,
5,49,0,0,129,130,5,59,0,0,130,131,3,68,34,0,131,15,1,0,0,0,132,133,5,18,
0,0,133,134,5,62,0,0,134,135,3,78,39,0,135,136,5,8,0,0,136,137,5,70,0,0,
137,138,5,51,0,0,138,143,3,38,19,0,139,140,5,3,0,0,140,142,3,38,19,0,141,
139,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,146,1,0,
0,0,145,143,1,0,0,0,146,147,5,26,0,0,147,150,3,30,15,0,148,149,5,63,0,0,
149,151,3,44,22,0,150,148,1,0,0,0,150,151,1,0,0,0,151,155,1,0,0,0,152,154,
3,36,18,0,153,152,1,0,0,0,154,157,1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,
0,156,158,1,0,0,0,157,155,1,0,0,0,158,159,5,71,0,0,159,17,1,0,0,0,160,161,
5,24,0,0,161,162,5,57,0,0,162,163,3,4,2,0,163,19,1,0,0,0,164,165,5,31,0,
0,165,166,5,32,0,0,166,167,3,6,3,0,167,168,5,70,0,0,168,173,3,48,24,0,169,
170,5,3,0,0,170,172,3,48,24,0,171,169,1,0,0,0,172,175,1,0,0,0,173,171,1,
0,0,0,173,174,1,0,0,0,174,176,1,0,0,0,175,173,1,0,0,0,176,177,5,71,0,0,177,
178,1,0,0,0,178,179,5,61,0,0,179,180,5,70,0,0,180,185,3,64,32,0,181,182,
5,3,0,0,182,184,3,64,32,0,183,181,1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,
0,185,186,1,0,0,0,186,188,1,0,0,0,187,185,1,0,0,0,188,189,5,71,0,0,189,21,
1,0,0,0,190,191,5,60,0,0,191,192,3,6,3,0,192,193,5,54,0,0,193,198,3,24,12,
0,194,195,5,3,0,0,195,197,3,24,12,0,196,194,1,0,0,0,197,200,1,0,0,0,198,
196,1,0,0,0,198,199,1,0,0,0,199,201,1,0,0,0,200,198,1,0,0,0,201,202,5,63,
0,0,202,203,3,28,14,0,203,23,1,0,0,0,204,205,3,48,24,0,205,206,5,68,0,0,
206,207,3,64,32,0,207,25,1,0,0,0,208,209,5,19,0,0,209,210,5,26,0,0,210,216,
3,6,3,0,211,212,5,63,0,0,212,213,3,48,24,0,213,214,5,68,0,0,214,215,3,64,
32,0,215,217,1,0,0,0,216,211,1,0,0,0,216,217,1,0,0,0,217,27,1,0,0,0,218,
219,3,68,34,0,219,220,5,68,0,0,220,221,3,84,42,0,221,29,1,0,0,0,222,225,
3,72,36,0,223,224,5,8,0,0,224,226,3,80,40,0,225,223,1,0,0,0,225,226,1,0,
0,0,226,31,1,0,0,0,227,228,5,51,0,0,228,233,3,38,19,0,229,230,5,3,0,0,230,
232,3,38,19,0,231,229,1,0,0,0,232,235,1,0,0,0,233,231,1,0,0,0,233,234,1,
0,0,0,234,236,1,0,0,0,235,233,1,0,0,0,236,237,5,26,0,0,237,241,3,30,15,0,
238,240,3,36,18,0,239,238,1,0,0,0,240,243,1,0,0,0,241,239,1,0,0,0,241,242,
1,0,0,0,242,246,1,0,0,0,243,241,1,0,0,0,244,245,5,63,0,0,245,247,3,44,22,
0,246,244,1,0,0,0,246,247,1,0,0,0,247,258,1,0,0,0,248,249,5,27,0,0,249,250,
5,11,0,0,250,255,3,40,20,0,251,252,5,3,0,0,252,254,3,40,20,0,253,251,1,0,
0,0,254,257,1,0,0,0,255,253,1,0,0,0,255,256,1,0,0,0,256,259,1,0,0,0,257,
255,1,0,0,0,258,248,1,0,0,0,258,259,1,0,0,0,259,270,1,0,0,0,260,261,5,46,
0,0,261,262,5,11,0,0,262,267,3,34,17,0,263,264,5,3,0,0,264,266,3,34,17,0,
265,263,1,0,0,0,266,269,1,0,0,0,267,265,1,0,0,0,267,268,1,0,0,0,268,271,
1,0,0,0,269,267,1,0,0,0,270,260,1,0,0,0,270,271,1,0,0,0,271,278,1,0,0,0,
272,273,5,44,0,0,273,276,3,82,41,0,274,275,5,37,0,0,275,277,3,82,41,0,276,
274,1,0,0,0,276,277,1,0,0,0,277,279,1,0,0,0,278,272,1,0,0,0,278,279,1,0,
0,0,279,33,1,0,0,0,280,289,3,40,20,0,281,282,5,50,0,0,282,283,5,70,0,0,283,
284,3,40,20,0,284,285,5,3,0,0,285,286,3,58,29,0,286,287,5,71,0,0,287,289,
1,0,0,0,288,280,1,0,0,0,288,281,1,0,0,0,289,291,1,0,0,0,290,292,7,0,0,0,
291,290,1,0,0,0,291,292,1,0,0,0,292,35,1,0,0,0,293,294,5,35,0,0,294,295,
5,47,0,0,295,296,5,33,0,0,296,297,3,30,15,0,297,298,5,45,0,0,298,299,3,40,
20,0,299,300,5,68,0,0,300,301,3,40,20,0,301,37,1,0,0,0,302,310,5,2,0,0,303,
304,3,72,36,0,304,305,5,4,0,0,305,306,5,2,0,0,306,310,1,0,0,0,307,310,3,
40,20,0,308,310,3,42,21,0,309,302,1,0,0,0,309,303,1,0,0,0,309,307,1,0,0,
0,309,308,1,0,0,0,310,39,1,0,0,0,311,312,3,72,36,0,312,313,5,4,0,0,313,315,
1,0,0,0,314,311,1,0,0,0,314,315,1,0,0,0,315,316,1,0,0,0,316,317,3,74,37,
0,317,41,1,0,0,0,318,319,7,1,0,0,319,320,5,70,0,0,320,321,3,40,20,0,321,
322,5,71,0,0,322,43,1,0,0,0,323,324,3,46,23,0,324,325,3,62,31,0,325,329,
3,64,32,0,326,327,3,50,25,0,327,328,3,44,22,0,328,330,1,0,0,0,329,326,1,
0,0,0,329,330,1,0,0,0,330,395,1,0,0,0,331,348,3,46,23,0,332,349,5,36,0,0,
333,349,5,38,0,0,334,335,5,56,0,0,335,349,5,64,0,0,336,337,5,25,0,0,337,
349,5,64,0,0,338,349,5,16,0,0,339,340,5,16,0,0,340,341,5,29,0,0,341,349,
5,13,0,0,342,343,5,22,0,0,343,344,5,41,0,0,344,349,5,23,0,0,345,346,5,41,
0,0,346,347,5,42,0,0,347,349,5,59,0,0,348,332,1,0,0,0,348,333,1,0,0,0,348,
334,1,0,0,0,348,336,1,0,0,0,348,338,1,0,0,0,348,339,1,0,0,0,348,342,1,0,
0,0,348,345,1,0,0,0,349,350,1,0,0,0,350,354,3,84,42,0,351,352,3,50,25,0,
352,353,3,44,22,0,353,355,1,0,0,0,354,351,1,0,0,0,354,355,1,0,0,0,355,395,
1,0,0,0,356,357,3,46,23,0,357,358,5,30,0,0,358,359,5,70,0,0,359,364,3,84,
42,0,360,361,5,3,0,0,361,363,3,84,42,0,362,360,1,0,0,0,363,366,1,0,0,0,364,
362,1,0,0,0,364,365,1,0,0,0,365,367,1,0,0,0,366,364,1,0,0,0,367,371,5,71,
0,0,368,369,3,50,25,0,369,370,3,44,22,0,370,372,1,0,0,0,371,368,1,0,0,0,
371,372,1,0,0,0,372,395,1,0,0,0,373,374,3,46,23,0,374,375,5,12,0,0,375,376,
3,64,32,0,376,377,5,6,0,0,377,381,3,64,32,0,378,379,3,50,25,0,379,380,3,
44,22,0,380,382,1,0,0,0,381,378,1,0,0,0,381,382,1,0,0,0,382,395,1,0,0,0,
383,384,5,52,0,0,384,385,5,70,0,0,385,386,3,40,20,0,386,387,5,3,0,0,387,
388,3,52,26,0,388,392,5,71,0,0,389,390,3,50,25,0,390,391,3,44,22,0,391,393,
1,0,0,0,392,389,1,0,0,0,392,393,1,0,0,0,393,395,1,0,0,0,394,323,1,0,0,0,
394,331,1,0,0,0,394,356,1,0,0,0,394,373,1,0,0,0,394,383,1,0,0,0,395,45,1,
0,0,0,396,397,3,40,20,0,397,47,1,0,0,0,398,399,3,74,37,0,399,49,1,0,0,0,
400,401,7,2,0,0,401,51,1,0,0,0,402,405,3,54,27,0,403,405,3,56,28,0,404,402,
1,0,0,0,404,403,1,0,0,0,405,53,1,0,0,0,406,407,5,14,0,0,407,408,5,70,0,0,
408,409,3,58,29,0,409,410,5,3,0,0,410,411,3,82,41,0,411,412,5,71,0,0,412,
55,1,0,0,0,413,414,5,48,0,0,414,415,5,70,0,0,415,416,3,58,29,0,416,417,5,
3,0,0,417,418,3,58,29,0,418,419,5,71,0,0,419,57,1,0,0,0,420,421,5,34,0,0,
421,422,5,70,0,0,422,423,3,82,41,0,423,424,5,3,0,0,424,425,3,82,41,0,425,
426,5,71,0,0,426,59,1,0,0,0,427,486,1,0,0,0,428,486,5,5,0,0,429,486,5,6,
0,0,430,486,5,7,0,0,431,486,5,8,0,0,432,486,5,9,0,0,433,486,5,10,0,0,434,
486,5,11,0,0,435,486,5,12,0,0,436,486,5,13,0,0,437,486,5,14,0,0,438,486,
5,15,0,0,439,486,5,23,0,0,440,486,5,16,0,0,441,486,5,17,0,0,442,486,5,18,
0,0,443,486,5,19,0,0,444,486,5,20,0,0,445,486,5,22,0,0,446,486,5,24,0,0,
447,486,5,25,0,0,448,486,5,42,0,0,449,486,5,26,0,0,450,486,5,27,0,0,451,
486,5,28,0,0,452,486,5,29,0,0,453,486,5,30,0,0,454,486,5,31,0,0,455,486,
5,32,0,0,456,486,5,33,0,0,457,486,5,34,0,0,458,486,5,35,0,0,459,486,5,36,
0,0,460,486,5,37,0,0,461,486,5,38,0,0,462,486,5,39,0,0,463,486,5,40,0,0,
464,486,5,41,0,0,465,486,5,43,0,0,466,486,5,44,0,0,467,486,5,45,0,0,468,
486,5,46,0,0,469,486,5,47,0,0,470,486,5,48,0,0,471,486,5,49,0,0,472,486,
5,51,0,0,473,486,5,54,0,0,474,486,5,56,0,0,475,486,5,50,0,0,476,486,5,52,
0,0,477,486,5,53,0,0,478,486,5,57,0,0,479,486,5,59,0,0,480,486,5,60,0,0,
481,486,5,61,0,0,482,486,5,62,0,0,483,486,5,63,0,0,484,486,5,64,0,0,485,
427,1,0,0,0,485,428,1,0,0,0,485,429,1,0,0,0,485,430,1,0,0,0,485,431,1,0,
0,0,485,432,1,0,0,0,485,433,1,0,0,0,485,434,1,0,0,0,485,435,1,0,0,0,485,
436,1,0,0,0,485,437,1,0,0,0,485,438,1,0,0,0,485,439,1,0,0,0,485,440,1,0,
0,0,485,441,1,0,0,0,485,442,1,0,0,0,485,443,1,0,0,0,485,444,1,0,0,0,485,
445,1,0,0,0,485,446,1,0,0,0,485,447,1,0,0,0,485,448,1,0,0,0,485,449,1,0,
0,0,485,450,1,0,0,0,485,451,1,0,0,0,485,452,1,0,0,0,485,453,1,0,0,0,485,
454,1,0,0,0,485,455,1,0,0,0,485,456,1,0,0,0,485,457,1,0,0,0,485,458,1,0,
0,0,485,459,1,0,0,0,485,460,1,0,0,0,485,461,1,0,0,0,485,462,1,0,0,0,485,
463,1,0,0,0,485,464,1,0,0,0,485,465,1,0,0,0,485,466,1,0,0,0,485,467,1,0,
0,0,485,468,1,0,0,0,485,469,1,0,0,0,485,470,1,0,0,0,485,471,1,0,0,0,485,
472,1,0,0,0,485,473,1,0,0,0,485,474,1,0,0,0,485,475,1,0,0,0,485,476,1,0,
0,0,485,477,1,0,0,0,485,478,1,0,0,0,485,479,1,0,0,0,485,480,1,0,0,0,485,
481,1,0,0,0,485,482,1,0,0,0,485,483,1,0,0,0,485,484,1,0,0,0,486,61,1,0,0,
0,487,488,7,3,0,0,488,63,1,0,0,0,489,492,3,82,41,0,490,492,3,84,42,0,491,
489,1,0,0,0,491,490,1,0,0,0,492,65,1,0,0,0,493,494,3,84,42,0,494,67,1,0,
0,0,495,496,3,84,42,0,496,69,1,0,0,0,497,498,3,68,34,0,498,71,1,0,0,0,499,
500,3,68,34,0,500,73,1,0,0,0,501,502,3,68,34,0,502,75,1,0,0,0,503,504,3,
72,36,0,504,77,1,0,0,0,505,506,3,68,34,0,506,79,1,0,0,0,507,508,3,68,34,
0,508,81,1,0,0,0,509,510,5,72,0,0,510,83,1,0,0,0,511,512,5,73,0,0,512,85,
1,0,0,0,34,89,102,143,150,155,173,185,198,216,225,233,241,246,255,258,267,
270,276,278,288,291,309,314,329,348,354,364,371,381,392,394,404,485,491];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class FusionTablesSqlParser extends antlr4.Parser {

    static grammarFileName = "FusionTablesSql.g4";
    static literalNames = [ null, "';'", "'*'", "','", "'.'", null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'<='", "'>='", "'>'", "'='", "'<'", 
                            "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, "K_ALTER", "K_AND", 
                             "K_OR", "K_AS", "K_ASC", "K_AVERAGE", "K_BY", 
                             "K_BETWEEN", "K_CASE", "K_CIRCLE", "K_COLUMN", 
                             "K_CONTAINS", "K_COUNT", "K_CREATE", "K_DELETE", 
                             "K_DESC", "K_DESCRIBE", "K_DOES", "K_CONTAIN", 
                             "K_DROP", "K_ENDS", "K_FROM", "K_GROUP", "K_HAVING", 
                             "K_IGNORING", "K_IN", "K_INSERT", "K_INTO", 
                             "K_JOIN", "K_LATLNG", "K_LEFT", "K_LIKE", "K_LIMIT", 
                             "K_MATCHES", "K_MAXIMUM", "K_MINIMUM", "K_NOT", 
                             "K_EQUAL", "K_OF", "K_OFFSET", "K_ON", "K_ORDER", 
                             "K_OUTER", "K_RECTANGLE", "K_RENAME", "K_ST_DISTANCE", 
                             "K_SELECT", "K_ST_INTERSECTS", "K_SUM", "K_SET", 
                             "K_SHOW", "K_STARTS", "K_TABLE", "K_TABLES", 
                             "K_TO", "K_UPDATE", "K_VALUES", "K_VIEW", "K_WHERE", 
                             "K_WITH", "LT_EQ", "GT_EQ", "GT", "EQ", "LT", 
                             "LPAR", "RPAR", "NUMERIC_LITERAL", "STRING_LITERAL", 
                             "STRING", "QUOTED_STRING", "SINGLELINE_COMMENT", 
                             "MULTILINE_COMMENT", "WHITESPACE" ];
    static ruleNames = [ "fusionTablesSql", "sql_stmt", "table_name_in_ddl", 
                         "table_name_in_dml", "create_table_as_select_stmt", 
                         "describe_stmt", "show_tables_stmt", "alter_table_stmt", 
                         "create_view_stmt", "drop_table_stmt", "insert_stmt", 
                         "update_stmt", "column_assignment", "delete_stmt", 
                         "eq_comparison", "table_name_with_alias", "select_stmt", 
                         "ordering_term", "join_clause", "result_column", 
                         "qualified_column_name", "aggregate_exp", "expr", 
                         "column_name_beginning_expr", "column_name_in_dml", 
                         "and_or_or", "geometry", "circle", "rectangle", 
                         "coordinate", "keyword", "operator_", "literal", 
                         "error_message", "identifier", "column_alias", 
                         "table_name", "column_name", "new_table_name", 
                         "view_name", "table_alias", "numeric_literal", 
                         "string_literal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FusionTablesSqlParser.ruleNames;
        this.literalNames = FusionTablesSqlParser.literalNames;
        this.symbolicNames = FusionTablesSqlParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	fusionTablesSql() {
	    let localctx = new FusionTablesSqlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FusionTablesSqlParser.RULE_fusionTablesSql);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FusionTablesSqlParser.K_ALTER) | (1 << FusionTablesSqlParser.K_CREATE) | (1 << FusionTablesSqlParser.K_DELETE) | (1 << FusionTablesSqlParser.K_DESCRIBE) | (1 << FusionTablesSqlParser.K_DROP) | (1 << FusionTablesSqlParser.K_INSERT))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (FusionTablesSqlParser.K_SELECT - 51)) | (1 << (FusionTablesSqlParser.K_SHOW - 51)) | (1 << (FusionTablesSqlParser.K_UPDATE - 51)))) !== 0)) {
	            this.state = 86;
	            this.sql_stmt();
	            this.state = 91;
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



	sql_stmt() {
	    let localctx = new Sql_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FusionTablesSqlParser.RULE_sql_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 92;
	            this.alter_table_stmt();
	            break;

	        case 2:
	            this.state = 93;
	            this.select_stmt();
	            break;

	        case 3:
	            this.state = 94;
	            this.create_view_stmt();
	            break;

	        case 4:
	            this.state = 95;
	            this.create_table_as_select_stmt();
	            break;

	        case 5:
	            this.state = 96;
	            this.delete_stmt();
	            break;

	        case 6:
	            this.state = 97;
	            this.drop_table_stmt();
	            break;

	        case 7:
	            this.state = 98;
	            this.insert_stmt();
	            break;

	        case 8:
	            this.state = 99;
	            this.update_stmt();
	            break;

	        case 9:
	            this.state = 100;
	            this.describe_stmt();
	            break;

	        case 10:
	            this.state = 101;
	            this.show_tables_stmt();
	            break;

	        }
	        this.state = 104;
	        this.match(FusionTablesSqlParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	table_name_in_ddl() {
	    let localctx = new Table_name_in_ddlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FusionTablesSqlParser.RULE_table_name_in_ddl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.table_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	table_name_in_dml() {
	    let localctx = new Table_name_in_dmlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FusionTablesSqlParser.RULE_table_name_in_dml);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.table_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	create_table_as_select_stmt() {
	    let localctx = new Create_table_as_select_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, FusionTablesSqlParser.RULE_create_table_as_select_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(FusionTablesSqlParser.K_CREATE);
	        this.state = 111;
	        this.match(FusionTablesSqlParser.K_TABLE);
	        this.state = 112;
	        this.identifier();
	        this.state = 113;
	        this.match(FusionTablesSqlParser.K_AS);
	        this.state = 114;
	        this.match(FusionTablesSqlParser.K_SELECT);
	        this.state = 115;
	        this.match(FusionTablesSqlParser.T__1);
	        this.state = 116;
	        this.match(FusionTablesSqlParser.K_FROM);
	        this.state = 117;
	        this.table_name_in_ddl();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	describe_stmt() {
	    let localctx = new Describe_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FusionTablesSqlParser.RULE_describe_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(FusionTablesSqlParser.K_DESCRIBE);
	        this.state = 120;
	        this.table_name_in_ddl();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	show_tables_stmt() {
	    let localctx = new Show_tables_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, FusionTablesSqlParser.RULE_show_tables_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(FusionTablesSqlParser.K_SHOW);
	        this.state = 123;
	        this.match(FusionTablesSqlParser.K_TABLES);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	alter_table_stmt() {
	    let localctx = new Alter_table_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, FusionTablesSqlParser.RULE_alter_table_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(FusionTablesSqlParser.K_ALTER);
	        this.state = 126;
	        this.match(FusionTablesSqlParser.K_TABLE);
	        this.state = 127;
	        this.table_name_in_ddl();

	        this.state = 128;
	        this.match(FusionTablesSqlParser.K_RENAME);
	        this.state = 129;
	        this.match(FusionTablesSqlParser.K_TO);
	        this.state = 130;
	        this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	create_view_stmt() {
	    let localctx = new Create_view_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, FusionTablesSqlParser.RULE_create_view_stmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(FusionTablesSqlParser.K_CREATE);
	        this.state = 133;
	        this.match(FusionTablesSqlParser.K_VIEW);
	        this.state = 134;
	        this.view_name();
	        this.state = 135;
	        this.match(FusionTablesSqlParser.K_AS);
	        this.state = 136;
	        this.match(FusionTablesSqlParser.LPAR);
	        this.state = 137;
	        this.match(FusionTablesSqlParser.K_SELECT);
	        this.state = 138;
	        this.result_column();
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FusionTablesSqlParser.T__2) {
	            this.state = 139;
	            this.match(FusionTablesSqlParser.T__2);
	            this.state = 140;
	            this.result_column();
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 146;
	        this.match(FusionTablesSqlParser.K_FROM);

	        this.state = 147;
	        this.table_name_with_alias();
	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FusionTablesSqlParser.K_WHERE) {
	            this.state = 148;
	            this.match(FusionTablesSqlParser.K_WHERE);
	            this.state = 149;
	            this.expr();
	        }

	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FusionTablesSqlParser.K_LEFT) {
	            this.state = 152;
	            this.join_clause();
	            this.state = 157;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 158;
	        this.match(FusionTablesSqlParser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	drop_table_stmt() {
	    let localctx = new Drop_table_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, FusionTablesSqlParser.RULE_drop_table_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(FusionTablesSqlParser.K_DROP);
	        this.state = 161;
	        this.match(FusionTablesSqlParser.K_TABLE);
	        this.state = 162;
	        this.table_name_in_ddl();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	insert_stmt() {
	    let localctx = new Insert_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, FusionTablesSqlParser.RULE_insert_stmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(FusionTablesSqlParser.K_INSERT);
	        this.state = 165;
	        this.match(FusionTablesSqlParser.K_INTO);
	        this.state = 166;
	        this.table_name_in_dml();

	        this.state = 167;
	        this.match(FusionTablesSqlParser.LPAR);
	        this.state = 168;
	        this.column_name_in_dml();
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FusionTablesSqlParser.T__2) {
	            this.state = 169;
	            this.match(FusionTablesSqlParser.T__2);
	            this.state = 170;
	            this.column_name_in_dml();
	            this.state = 175;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 176;
	        this.match(FusionTablesSqlParser.RPAR);

	        this.state = 178;
	        this.match(FusionTablesSqlParser.K_VALUES);
	        this.state = 179;
	        this.match(FusionTablesSqlParser.LPAR);
	        this.state = 180;
	        this.literal();
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FusionTablesSqlParser.T__2) {
	            this.state = 181;
	            this.match(FusionTablesSqlParser.T__2);
	            this.state = 182;
	            this.literal();
	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 188;
	        this.match(FusionTablesSqlParser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	update_stmt() {
	    let localctx = new Update_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, FusionTablesSqlParser.RULE_update_stmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(FusionTablesSqlParser.K_UPDATE);
	        this.state = 191;
	        this.table_name_in_dml();
	        this.state = 192;
	        this.match(FusionTablesSqlParser.K_SET);
	        this.state = 193;
	        this.column_assignment();
	        this.state = 198;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FusionTablesSqlParser.T__2) {
	            this.state = 194;
	            this.match(FusionTablesSqlParser.T__2);
	            this.state = 195;
	            this.column_assignment();
	            this.state = 200;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 201;
	        this.match(FusionTablesSqlParser.K_WHERE);
	        this.state = 202;
	        this.eq_comparison();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	column_assignment() {
	    let localctx = new Column_assignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, FusionTablesSqlParser.RULE_column_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.column_name_in_dml();
	        this.state = 205;
	        this.match(FusionTablesSqlParser.EQ);
	        this.state = 206;
	        this.literal();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	delete_stmt() {
	    let localctx = new Delete_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, FusionTablesSqlParser.RULE_delete_stmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.match(FusionTablesSqlParser.K_DELETE);
	        this.state = 209;
	        this.match(FusionTablesSqlParser.K_FROM);
	        this.state = 210;
	        this.table_name_in_dml();
	        this.state = 216;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FusionTablesSqlParser.K_WHERE) {
	            this.state = 211;
	            this.match(FusionTablesSqlParser.K_WHERE);
	            this.state = 212;
	            this.column_name_in_dml();
	            this.state = 213;
	            this.match(FusionTablesSqlParser.EQ);
	            this.state = 214;
	            this.literal();
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



	eq_comparison() {
	    let localctx = new Eq_comparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, FusionTablesSqlParser.RULE_eq_comparison);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        this.identifier();
	        this.state = 219;
	        this.match(FusionTablesSqlParser.EQ);
	        this.state = 220;
	        this.string_literal();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	table_name_with_alias() {
	    let localctx = new Table_name_with_aliasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, FusionTablesSqlParser.RULE_table_name_with_alias);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.table_name();
	        this.state = 225;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FusionTablesSqlParser.K_AS) {
	            this.state = 223;
	            this.match(FusionTablesSqlParser.K_AS);
	            this.state = 224;
	            this.table_alias();
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



	select_stmt() {
	    let localctx = new Select_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, FusionTablesSqlParser.RULE_select_stmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.match(FusionTablesSqlParser.K_SELECT);
	        this.state = 228;
	        this.result_column();
	        this.state = 233;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FusionTablesSqlParser.T__2) {
	            this.state = 229;
	            this.match(FusionTablesSqlParser.T__2);
	            this.state = 230;
	            this.result_column();
	            this.state = 235;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 236;
	        this.match(FusionTablesSqlParser.K_FROM);
	        this.state = 237;
	        this.table_name_with_alias();
	        this.state = 241;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FusionTablesSqlParser.K_LEFT) {
	            this.state = 238;
	            this.join_clause();
	            this.state = 243;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 246;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FusionTablesSqlParser.K_WHERE) {
	            this.state = 244;
	            this.match(FusionTablesSqlParser.K_WHERE);
	            this.state = 245;
	            this.expr();
	        }

	        this.state = 258;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FusionTablesSqlParser.K_GROUP) {
	            this.state = 248;
	            this.match(FusionTablesSqlParser.K_GROUP);
	            this.state = 249;
	            this.match(FusionTablesSqlParser.K_BY);
	            this.state = 250;
	            this.qualified_column_name();
	            this.state = 255;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FusionTablesSqlParser.T__2) {
	                this.state = 251;
	                this.match(FusionTablesSqlParser.T__2);
	                this.state = 252;
	                this.qualified_column_name();
	                this.state = 257;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 270;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FusionTablesSqlParser.K_ORDER) {
	            this.state = 260;
	            this.match(FusionTablesSqlParser.K_ORDER);
	            this.state = 261;
	            this.match(FusionTablesSqlParser.K_BY);
	            this.state = 262;
	            this.ordering_term();
	            this.state = 267;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FusionTablesSqlParser.T__2) {
	                this.state = 263;
	                this.match(FusionTablesSqlParser.T__2);
	                this.state = 264;
	                this.ordering_term();
	                this.state = 269;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 278;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FusionTablesSqlParser.K_OFFSET) {
	            this.state = 272;
	            this.match(FusionTablesSqlParser.K_OFFSET);
	            this.state = 273;
	            this.numeric_literal();
	            this.state = 276;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===FusionTablesSqlParser.K_LIMIT) {
	                this.state = 274;
	                this.match(FusionTablesSqlParser.K_LIMIT);
	                this.state = 275;
	                this.numeric_literal();
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



	ordering_term() {
	    let localctx = new Ordering_termContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, FusionTablesSqlParser.RULE_ordering_term);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FusionTablesSqlParser.STRING_LITERAL:
	            this.state = 280;
	            this.qualified_column_name();
	            break;
	        case FusionTablesSqlParser.K_ST_DISTANCE:
	            this.state = 281;
	            this.match(FusionTablesSqlParser.K_ST_DISTANCE);
	            this.state = 282;
	            this.match(FusionTablesSqlParser.LPAR);
	            this.state = 283;
	            this.qualified_column_name();
	            this.state = 284;
	            this.match(FusionTablesSqlParser.T__2);
	            this.state = 285;
	            this.coordinate();
	            this.state = 286;
	            this.match(FusionTablesSqlParser.RPAR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 291;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FusionTablesSqlParser.K_ASC || _la===FusionTablesSqlParser.K_DESC) {
	            this.state = 290;
	            _la = this._input.LA(1);
	            if(!(_la===FusionTablesSqlParser.K_ASC || _la===FusionTablesSqlParser.K_DESC)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
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



	join_clause() {
	    let localctx = new Join_clauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, FusionTablesSqlParser.RULE_join_clause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
	        this.match(FusionTablesSqlParser.K_LEFT);
	        this.state = 294;
	        this.match(FusionTablesSqlParser.K_OUTER);
	        this.state = 295;
	        this.match(FusionTablesSqlParser.K_JOIN);
	        this.state = 296;
	        this.table_name_with_alias();
	        this.state = 297;
	        this.match(FusionTablesSqlParser.K_ON);
	        this.state = 298;
	        this.qualified_column_name();
	        this.state = 299;
	        this.match(FusionTablesSqlParser.EQ);
	        this.state = 300;
	        this.qualified_column_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	result_column() {
	    let localctx = new Result_columnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, FusionTablesSqlParser.RULE_result_column);
	    try {
	        this.state = 309;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 302;
	            this.match(FusionTablesSqlParser.T__1);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 303;
	            this.table_name();
	            this.state = 304;
	            this.match(FusionTablesSqlParser.T__3);
	            this.state = 305;
	            this.match(FusionTablesSqlParser.T__1);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 307;
	            this.qualified_column_name();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 308;
	            this.aggregate_exp();
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



	qualified_column_name() {
	    let localctx = new Qualified_column_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, FusionTablesSqlParser.RULE_qualified_column_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        if(la_===1) {
	            this.state = 311;
	            this.table_name();
	            this.state = 312;
	            this.match(FusionTablesSqlParser.T__3);

	        }
	        this.state = 316;
	        this.column_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aggregate_exp() {
	    let localctx = new Aggregate_expContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, FusionTablesSqlParser.RULE_aggregate_exp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
	        _la = this._input.LA(1);
	        if(!(_la===FusionTablesSqlParser.K_AVERAGE || _la===FusionTablesSqlParser.K_COUNT || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (FusionTablesSqlParser.K_MAXIMUM - 39)) | (1 << (FusionTablesSqlParser.K_MINIMUM - 39)) | (1 << (FusionTablesSqlParser.K_SUM - 39)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 319;
	        this.match(FusionTablesSqlParser.LPAR);
	        this.state = 320;
	        this.qualified_column_name();
	        this.state = 321;
	        this.match(FusionTablesSqlParser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 44, FusionTablesSqlParser.RULE_expr);
	    var _la = 0; // Token type
	    try {
	        this.state = 394;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 323;
	            this.column_name_beginning_expr();

	            this.state = 324;
	            this.operator_();
	            this.state = 325;
	            this.literal();
	            this.state = 329;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===FusionTablesSqlParser.K_AND || _la===FusionTablesSqlParser.K_OR) {
	                this.state = 326;
	                this.and_or_or();
	                this.state = 327;
	                this.expr();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 331;
	            this.column_name_beginning_expr();
	            this.state = 348;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 332;
	                this.match(FusionTablesSqlParser.K_LIKE);
	                break;

	            case 2:
	                this.state = 333;
	                this.match(FusionTablesSqlParser.K_MATCHES);
	                break;

	            case 3:
	                this.state = 334;
	                this.match(FusionTablesSqlParser.K_STARTS);
	                this.state = 335;
	                this.match(FusionTablesSqlParser.K_WITH);
	                break;

	            case 4:
	                this.state = 336;
	                this.match(FusionTablesSqlParser.K_ENDS);
	                this.state = 337;
	                this.match(FusionTablesSqlParser.K_WITH);
	                break;

	            case 5:
	                this.state = 338;
	                this.match(FusionTablesSqlParser.K_CONTAINS);
	                break;

	            case 6:
	                this.state = 339;
	                this.match(FusionTablesSqlParser.K_CONTAINS);
	                this.state = 340;
	                this.match(FusionTablesSqlParser.K_IGNORING);
	                this.state = 341;
	                this.match(FusionTablesSqlParser.K_CASE);
	                break;

	            case 7:
	                this.state = 342;
	                this.match(FusionTablesSqlParser.K_DOES);
	                this.state = 343;
	                this.match(FusionTablesSqlParser.K_NOT);
	                this.state = 344;
	                this.match(FusionTablesSqlParser.K_CONTAIN);
	                break;

	            case 8:
	                this.state = 345;
	                this.match(FusionTablesSqlParser.K_NOT);
	                this.state = 346;
	                this.match(FusionTablesSqlParser.K_EQUAL);
	                this.state = 347;
	                this.match(FusionTablesSqlParser.K_TO);
	                break;

	            }
	            this.state = 350;
	            this.string_literal();
	            this.state = 354;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===FusionTablesSqlParser.K_AND || _la===FusionTablesSqlParser.K_OR) {
	                this.state = 351;
	                this.and_or_or();
	                this.state = 352;
	                this.expr();
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 356;
	            this.column_name_beginning_expr();
	            this.state = 357;
	            this.match(FusionTablesSqlParser.K_IN);
	            this.state = 358;
	            this.match(FusionTablesSqlParser.LPAR);
	            this.state = 359;
	            this.string_literal();
	            this.state = 364;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===FusionTablesSqlParser.T__2) {
	                this.state = 360;
	                this.match(FusionTablesSqlParser.T__2);
	                this.state = 361;
	                this.string_literal();
	                this.state = 366;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 367;
	            this.match(FusionTablesSqlParser.RPAR);
	            this.state = 371;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===FusionTablesSqlParser.K_AND || _la===FusionTablesSqlParser.K_OR) {
	                this.state = 368;
	                this.and_or_or();
	                this.state = 369;
	                this.expr();
	            }

	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 373;
	            this.column_name_beginning_expr();
	            this.state = 374;
	            this.match(FusionTablesSqlParser.K_BETWEEN);
	            this.state = 375;
	            this.literal();
	            this.state = 376;
	            this.match(FusionTablesSqlParser.K_AND);
	            this.state = 377;
	            this.literal();
	            this.state = 381;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===FusionTablesSqlParser.K_AND || _la===FusionTablesSqlParser.K_OR) {
	                this.state = 378;
	                this.and_or_or();
	                this.state = 379;
	                this.expr();
	            }

	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 383;
	            this.match(FusionTablesSqlParser.K_ST_INTERSECTS);
	            this.state = 384;
	            this.match(FusionTablesSqlParser.LPAR);
	            this.state = 385;
	            this.qualified_column_name();
	            this.state = 386;
	            this.match(FusionTablesSqlParser.T__2);
	            this.state = 387;
	            this.geometry();
	            this.state = 388;
	            this.match(FusionTablesSqlParser.RPAR);
	            this.state = 392;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===FusionTablesSqlParser.K_AND || _la===FusionTablesSqlParser.K_OR) {
	                this.state = 389;
	                this.and_or_or();
	                this.state = 390;
	                this.expr();
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



	column_name_beginning_expr() {
	    let localctx = new Column_name_beginning_exprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, FusionTablesSqlParser.RULE_column_name_beginning_expr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        this.qualified_column_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	column_name_in_dml() {
	    let localctx = new Column_name_in_dmlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, FusionTablesSqlParser.RULE_column_name_in_dml);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 398;
	        this.column_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	and_or_or() {
	    let localctx = new And_or_orContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, FusionTablesSqlParser.RULE_and_or_or);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 400;
	        _la = this._input.LA(1);
	        if(!(_la===FusionTablesSqlParser.K_AND || _la===FusionTablesSqlParser.K_OR)) {
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



	geometry() {
	    let localctx = new GeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, FusionTablesSqlParser.RULE_geometry);
	    try {
	        this.state = 404;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FusionTablesSqlParser.K_CIRCLE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 402;
	            this.circle();
	            break;
	        case FusionTablesSqlParser.K_RECTANGLE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 403;
	            this.rectangle();
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



	circle() {
	    let localctx = new CircleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, FusionTablesSqlParser.RULE_circle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 406;
	        this.match(FusionTablesSqlParser.K_CIRCLE);
	        this.state = 407;
	        this.match(FusionTablesSqlParser.LPAR);
	        this.state = 408;
	        this.coordinate();
	        this.state = 409;
	        this.match(FusionTablesSqlParser.T__2);
	        this.state = 410;
	        this.numeric_literal();
	        this.state = 411;
	        this.match(FusionTablesSqlParser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rectangle() {
	    let localctx = new RectangleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, FusionTablesSqlParser.RULE_rectangle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 413;
	        this.match(FusionTablesSqlParser.K_RECTANGLE);
	        this.state = 414;
	        this.match(FusionTablesSqlParser.LPAR);
	        this.state = 415;
	        this.coordinate();
	        this.state = 416;
	        this.match(FusionTablesSqlParser.T__2);
	        this.state = 417;
	        this.coordinate();
	        this.state = 418;
	        this.match(FusionTablesSqlParser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	coordinate() {
	    let localctx = new CoordinateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, FusionTablesSqlParser.RULE_coordinate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 420;
	        this.match(FusionTablesSqlParser.K_LATLNG);
	        this.state = 421;
	        this.match(FusionTablesSqlParser.LPAR);
	        this.state = 422;
	        this.numeric_literal();
	        this.state = 423;
	        this.match(FusionTablesSqlParser.T__2);
	        this.state = 424;
	        this.numeric_literal();
	        this.state = 425;
	        this.match(FusionTablesSqlParser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keyword() {
	    let localctx = new KeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, FusionTablesSqlParser.RULE_keyword);
	    try {
	        this.state = 485;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FusionTablesSqlParser.EOF:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case FusionTablesSqlParser.K_ALTER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 428;
	            this.match(FusionTablesSqlParser.K_ALTER);
	            break;
	        case FusionTablesSqlParser.K_AND:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 429;
	            this.match(FusionTablesSqlParser.K_AND);
	            break;
	        case FusionTablesSqlParser.K_OR:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 430;
	            this.match(FusionTablesSqlParser.K_OR);
	            break;
	        case FusionTablesSqlParser.K_AS:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 431;
	            this.match(FusionTablesSqlParser.K_AS);
	            break;
	        case FusionTablesSqlParser.K_ASC:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 432;
	            this.match(FusionTablesSqlParser.K_ASC);
	            break;
	        case FusionTablesSqlParser.K_AVERAGE:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 433;
	            this.match(FusionTablesSqlParser.K_AVERAGE);
	            break;
	        case FusionTablesSqlParser.K_BY:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 434;
	            this.match(FusionTablesSqlParser.K_BY);
	            break;
	        case FusionTablesSqlParser.K_BETWEEN:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 435;
	            this.match(FusionTablesSqlParser.K_BETWEEN);
	            break;
	        case FusionTablesSqlParser.K_CASE:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 436;
	            this.match(FusionTablesSqlParser.K_CASE);
	            break;
	        case FusionTablesSqlParser.K_CIRCLE:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 437;
	            this.match(FusionTablesSqlParser.K_CIRCLE);
	            break;
	        case FusionTablesSqlParser.K_COLUMN:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 438;
	            this.match(FusionTablesSqlParser.K_COLUMN);
	            break;
	        case FusionTablesSqlParser.K_CONTAIN:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 439;
	            this.match(FusionTablesSqlParser.K_CONTAIN);
	            break;
	        case FusionTablesSqlParser.K_CONTAINS:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 440;
	            this.match(FusionTablesSqlParser.K_CONTAINS);
	            break;
	        case FusionTablesSqlParser.K_COUNT:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 441;
	            this.match(FusionTablesSqlParser.K_COUNT);
	            break;
	        case FusionTablesSqlParser.K_CREATE:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 442;
	            this.match(FusionTablesSqlParser.K_CREATE);
	            break;
	        case FusionTablesSqlParser.K_DELETE:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 443;
	            this.match(FusionTablesSqlParser.K_DELETE);
	            break;
	        case FusionTablesSqlParser.K_DESC:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 444;
	            this.match(FusionTablesSqlParser.K_DESC);
	            break;
	        case FusionTablesSqlParser.K_DOES:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 445;
	            this.match(FusionTablesSqlParser.K_DOES);
	            break;
	        case FusionTablesSqlParser.K_DROP:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 446;
	            this.match(FusionTablesSqlParser.K_DROP);
	            break;
	        case FusionTablesSqlParser.K_ENDS:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 447;
	            this.match(FusionTablesSqlParser.K_ENDS);
	            break;
	        case FusionTablesSqlParser.K_EQUAL:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 448;
	            this.match(FusionTablesSqlParser.K_EQUAL);
	            break;
	        case FusionTablesSqlParser.K_FROM:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 449;
	            this.match(FusionTablesSqlParser.K_FROM);
	            break;
	        case FusionTablesSqlParser.K_GROUP:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 450;
	            this.match(FusionTablesSqlParser.K_GROUP);
	            break;
	        case FusionTablesSqlParser.K_HAVING:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 451;
	            this.match(FusionTablesSqlParser.K_HAVING);
	            break;
	        case FusionTablesSqlParser.K_IGNORING:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 452;
	            this.match(FusionTablesSqlParser.K_IGNORING);
	            break;
	        case FusionTablesSqlParser.K_IN:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 453;
	            this.match(FusionTablesSqlParser.K_IN);
	            break;
	        case FusionTablesSqlParser.K_INSERT:
	            this.enterOuterAlt(localctx, 28);
	            this.state = 454;
	            this.match(FusionTablesSqlParser.K_INSERT);
	            break;
	        case FusionTablesSqlParser.K_INTO:
	            this.enterOuterAlt(localctx, 29);
	            this.state = 455;
	            this.match(FusionTablesSqlParser.K_INTO);
	            break;
	        case FusionTablesSqlParser.K_JOIN:
	            this.enterOuterAlt(localctx, 30);
	            this.state = 456;
	            this.match(FusionTablesSqlParser.K_JOIN);
	            break;
	        case FusionTablesSqlParser.K_LATLNG:
	            this.enterOuterAlt(localctx, 31);
	            this.state = 457;
	            this.match(FusionTablesSqlParser.K_LATLNG);
	            break;
	        case FusionTablesSqlParser.K_LEFT:
	            this.enterOuterAlt(localctx, 32);
	            this.state = 458;
	            this.match(FusionTablesSqlParser.K_LEFT);
	            break;
	        case FusionTablesSqlParser.K_LIKE:
	            this.enterOuterAlt(localctx, 33);
	            this.state = 459;
	            this.match(FusionTablesSqlParser.K_LIKE);
	            break;
	        case FusionTablesSqlParser.K_LIMIT:
	            this.enterOuterAlt(localctx, 34);
	            this.state = 460;
	            this.match(FusionTablesSqlParser.K_LIMIT);
	            break;
	        case FusionTablesSqlParser.K_MATCHES:
	            this.enterOuterAlt(localctx, 35);
	            this.state = 461;
	            this.match(FusionTablesSqlParser.K_MATCHES);
	            break;
	        case FusionTablesSqlParser.K_MAXIMUM:
	            this.enterOuterAlt(localctx, 36);
	            this.state = 462;
	            this.match(FusionTablesSqlParser.K_MAXIMUM);
	            break;
	        case FusionTablesSqlParser.K_MINIMUM:
	            this.enterOuterAlt(localctx, 37);
	            this.state = 463;
	            this.match(FusionTablesSqlParser.K_MINIMUM);
	            break;
	        case FusionTablesSqlParser.K_NOT:
	            this.enterOuterAlt(localctx, 38);
	            this.state = 464;
	            this.match(FusionTablesSqlParser.K_NOT);
	            break;
	        case FusionTablesSqlParser.K_OF:
	            this.enterOuterAlt(localctx, 39);
	            this.state = 465;
	            this.match(FusionTablesSqlParser.K_OF);
	            break;
	        case FusionTablesSqlParser.K_OFFSET:
	            this.enterOuterAlt(localctx, 40);
	            this.state = 466;
	            this.match(FusionTablesSqlParser.K_OFFSET);
	            break;
	        case FusionTablesSqlParser.K_ON:
	            this.enterOuterAlt(localctx, 41);
	            this.state = 467;
	            this.match(FusionTablesSqlParser.K_ON);
	            break;
	        case FusionTablesSqlParser.K_ORDER:
	            this.enterOuterAlt(localctx, 42);
	            this.state = 468;
	            this.match(FusionTablesSqlParser.K_ORDER);
	            break;
	        case FusionTablesSqlParser.K_OUTER:
	            this.enterOuterAlt(localctx, 43);
	            this.state = 469;
	            this.match(FusionTablesSqlParser.K_OUTER);
	            break;
	        case FusionTablesSqlParser.K_RECTANGLE:
	            this.enterOuterAlt(localctx, 44);
	            this.state = 470;
	            this.match(FusionTablesSqlParser.K_RECTANGLE);
	            break;
	        case FusionTablesSqlParser.K_RENAME:
	            this.enterOuterAlt(localctx, 45);
	            this.state = 471;
	            this.match(FusionTablesSqlParser.K_RENAME);
	            break;
	        case FusionTablesSqlParser.K_SELECT:
	            this.enterOuterAlt(localctx, 46);
	            this.state = 472;
	            this.match(FusionTablesSqlParser.K_SELECT);
	            break;
	        case FusionTablesSqlParser.K_SET:
	            this.enterOuterAlt(localctx, 47);
	            this.state = 473;
	            this.match(FusionTablesSqlParser.K_SET);
	            break;
	        case FusionTablesSqlParser.K_STARTS:
	            this.enterOuterAlt(localctx, 48);
	            this.state = 474;
	            this.match(FusionTablesSqlParser.K_STARTS);
	            break;
	        case FusionTablesSqlParser.K_ST_DISTANCE:
	            this.enterOuterAlt(localctx, 49);
	            this.state = 475;
	            this.match(FusionTablesSqlParser.K_ST_DISTANCE);
	            break;
	        case FusionTablesSqlParser.K_ST_INTERSECTS:
	            this.enterOuterAlt(localctx, 50);
	            this.state = 476;
	            this.match(FusionTablesSqlParser.K_ST_INTERSECTS);
	            break;
	        case FusionTablesSqlParser.K_SUM:
	            this.enterOuterAlt(localctx, 51);
	            this.state = 477;
	            this.match(FusionTablesSqlParser.K_SUM);
	            break;
	        case FusionTablesSqlParser.K_TABLE:
	            this.enterOuterAlt(localctx, 52);
	            this.state = 478;
	            this.match(FusionTablesSqlParser.K_TABLE);
	            break;
	        case FusionTablesSqlParser.K_TO:
	            this.enterOuterAlt(localctx, 53);
	            this.state = 479;
	            this.match(FusionTablesSqlParser.K_TO);
	            break;
	        case FusionTablesSqlParser.K_UPDATE:
	            this.enterOuterAlt(localctx, 54);
	            this.state = 480;
	            this.match(FusionTablesSqlParser.K_UPDATE);
	            break;
	        case FusionTablesSqlParser.K_VALUES:
	            this.enterOuterAlt(localctx, 55);
	            this.state = 481;
	            this.match(FusionTablesSqlParser.K_VALUES);
	            break;
	        case FusionTablesSqlParser.K_VIEW:
	            this.enterOuterAlt(localctx, 56);
	            this.state = 482;
	            this.match(FusionTablesSqlParser.K_VIEW);
	            break;
	        case FusionTablesSqlParser.K_WHERE:
	            this.enterOuterAlt(localctx, 57);
	            this.state = 483;
	            this.match(FusionTablesSqlParser.K_WHERE);
	            break;
	        case FusionTablesSqlParser.K_WITH:
	            this.enterOuterAlt(localctx, 58);
	            this.state = 484;
	            this.match(FusionTablesSqlParser.K_WITH);
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



	operator_() {
	    let localctx = new Operator_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, FusionTablesSqlParser.RULE_operator_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 487;
	        _la = this._input.LA(1);
	        if(!(((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (FusionTablesSqlParser.LT_EQ - 65)) | (1 << (FusionTablesSqlParser.GT_EQ - 65)) | (1 << (FusionTablesSqlParser.GT - 65)) | (1 << (FusionTablesSqlParser.EQ - 65)) | (1 << (FusionTablesSqlParser.LT - 65)))) !== 0))) {
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, FusionTablesSqlParser.RULE_literal);
	    try {
	        this.state = 491;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FusionTablesSqlParser.NUMERIC_LITERAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 489;
	            this.numeric_literal();
	            break;
	        case FusionTablesSqlParser.STRING_LITERAL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 490;
	            this.string_literal();
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



	error_message() {
	    let localctx = new Error_messageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, FusionTablesSqlParser.RULE_error_message);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 493;
	        this.string_literal();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 68, FusionTablesSqlParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 495;
	        this.string_literal();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	column_alias() {
	    let localctx = new Column_aliasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, FusionTablesSqlParser.RULE_column_alias);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 497;
	        this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	table_name() {
	    let localctx = new Table_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, FusionTablesSqlParser.RULE_table_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 499;
	        this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	column_name() {
	    let localctx = new Column_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, FusionTablesSqlParser.RULE_column_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 501;
	        this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	new_table_name() {
	    let localctx = new New_table_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, FusionTablesSqlParser.RULE_new_table_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 503;
	        this.table_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	view_name() {
	    let localctx = new View_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, FusionTablesSqlParser.RULE_view_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 505;
	        this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	table_alias() {
	    let localctx = new Table_aliasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, FusionTablesSqlParser.RULE_table_alias);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 507;
	        this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numeric_literal() {
	    let localctx = new Numeric_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, FusionTablesSqlParser.RULE_numeric_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 509;
	        this.match(FusionTablesSqlParser.NUMERIC_LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string_literal() {
	    let localctx = new String_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, FusionTablesSqlParser.RULE_string_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 511;
	        this.match(FusionTablesSqlParser.STRING_LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

FusionTablesSqlParser.EOF = antlr4.Token.EOF;
FusionTablesSqlParser.T__0 = 1;
FusionTablesSqlParser.T__1 = 2;
FusionTablesSqlParser.T__2 = 3;
FusionTablesSqlParser.T__3 = 4;
FusionTablesSqlParser.K_ALTER = 5;
FusionTablesSqlParser.K_AND = 6;
FusionTablesSqlParser.K_OR = 7;
FusionTablesSqlParser.K_AS = 8;
FusionTablesSqlParser.K_ASC = 9;
FusionTablesSqlParser.K_AVERAGE = 10;
FusionTablesSqlParser.K_BY = 11;
FusionTablesSqlParser.K_BETWEEN = 12;
FusionTablesSqlParser.K_CASE = 13;
FusionTablesSqlParser.K_CIRCLE = 14;
FusionTablesSqlParser.K_COLUMN = 15;
FusionTablesSqlParser.K_CONTAINS = 16;
FusionTablesSqlParser.K_COUNT = 17;
FusionTablesSqlParser.K_CREATE = 18;
FusionTablesSqlParser.K_DELETE = 19;
FusionTablesSqlParser.K_DESC = 20;
FusionTablesSqlParser.K_DESCRIBE = 21;
FusionTablesSqlParser.K_DOES = 22;
FusionTablesSqlParser.K_CONTAIN = 23;
FusionTablesSqlParser.K_DROP = 24;
FusionTablesSqlParser.K_ENDS = 25;
FusionTablesSqlParser.K_FROM = 26;
FusionTablesSqlParser.K_GROUP = 27;
FusionTablesSqlParser.K_HAVING = 28;
FusionTablesSqlParser.K_IGNORING = 29;
FusionTablesSqlParser.K_IN = 30;
FusionTablesSqlParser.K_INSERT = 31;
FusionTablesSqlParser.K_INTO = 32;
FusionTablesSqlParser.K_JOIN = 33;
FusionTablesSqlParser.K_LATLNG = 34;
FusionTablesSqlParser.K_LEFT = 35;
FusionTablesSqlParser.K_LIKE = 36;
FusionTablesSqlParser.K_LIMIT = 37;
FusionTablesSqlParser.K_MATCHES = 38;
FusionTablesSqlParser.K_MAXIMUM = 39;
FusionTablesSqlParser.K_MINIMUM = 40;
FusionTablesSqlParser.K_NOT = 41;
FusionTablesSqlParser.K_EQUAL = 42;
FusionTablesSqlParser.K_OF = 43;
FusionTablesSqlParser.K_OFFSET = 44;
FusionTablesSqlParser.K_ON = 45;
FusionTablesSqlParser.K_ORDER = 46;
FusionTablesSqlParser.K_OUTER = 47;
FusionTablesSqlParser.K_RECTANGLE = 48;
FusionTablesSqlParser.K_RENAME = 49;
FusionTablesSqlParser.K_ST_DISTANCE = 50;
FusionTablesSqlParser.K_SELECT = 51;
FusionTablesSqlParser.K_ST_INTERSECTS = 52;
FusionTablesSqlParser.K_SUM = 53;
FusionTablesSqlParser.K_SET = 54;
FusionTablesSqlParser.K_SHOW = 55;
FusionTablesSqlParser.K_STARTS = 56;
FusionTablesSqlParser.K_TABLE = 57;
FusionTablesSqlParser.K_TABLES = 58;
FusionTablesSqlParser.K_TO = 59;
FusionTablesSqlParser.K_UPDATE = 60;
FusionTablesSqlParser.K_VALUES = 61;
FusionTablesSqlParser.K_VIEW = 62;
FusionTablesSqlParser.K_WHERE = 63;
FusionTablesSqlParser.K_WITH = 64;
FusionTablesSqlParser.LT_EQ = 65;
FusionTablesSqlParser.GT_EQ = 66;
FusionTablesSqlParser.GT = 67;
FusionTablesSqlParser.EQ = 68;
FusionTablesSqlParser.LT = 69;
FusionTablesSqlParser.LPAR = 70;
FusionTablesSqlParser.RPAR = 71;
FusionTablesSqlParser.NUMERIC_LITERAL = 72;
FusionTablesSqlParser.STRING_LITERAL = 73;
FusionTablesSqlParser.STRING = 74;
FusionTablesSqlParser.QUOTED_STRING = 75;
FusionTablesSqlParser.SINGLELINE_COMMENT = 76;
FusionTablesSqlParser.MULTILINE_COMMENT = 77;
FusionTablesSqlParser.WHITESPACE = 78;

FusionTablesSqlParser.RULE_fusionTablesSql = 0;
FusionTablesSqlParser.RULE_sql_stmt = 1;
FusionTablesSqlParser.RULE_table_name_in_ddl = 2;
FusionTablesSqlParser.RULE_table_name_in_dml = 3;
FusionTablesSqlParser.RULE_create_table_as_select_stmt = 4;
FusionTablesSqlParser.RULE_describe_stmt = 5;
FusionTablesSqlParser.RULE_show_tables_stmt = 6;
FusionTablesSqlParser.RULE_alter_table_stmt = 7;
FusionTablesSqlParser.RULE_create_view_stmt = 8;
FusionTablesSqlParser.RULE_drop_table_stmt = 9;
FusionTablesSqlParser.RULE_insert_stmt = 10;
FusionTablesSqlParser.RULE_update_stmt = 11;
FusionTablesSqlParser.RULE_column_assignment = 12;
FusionTablesSqlParser.RULE_delete_stmt = 13;
FusionTablesSqlParser.RULE_eq_comparison = 14;
FusionTablesSqlParser.RULE_table_name_with_alias = 15;
FusionTablesSqlParser.RULE_select_stmt = 16;
FusionTablesSqlParser.RULE_ordering_term = 17;
FusionTablesSqlParser.RULE_join_clause = 18;
FusionTablesSqlParser.RULE_result_column = 19;
FusionTablesSqlParser.RULE_qualified_column_name = 20;
FusionTablesSqlParser.RULE_aggregate_exp = 21;
FusionTablesSqlParser.RULE_expr = 22;
FusionTablesSqlParser.RULE_column_name_beginning_expr = 23;
FusionTablesSqlParser.RULE_column_name_in_dml = 24;
FusionTablesSqlParser.RULE_and_or_or = 25;
FusionTablesSqlParser.RULE_geometry = 26;
FusionTablesSqlParser.RULE_circle = 27;
FusionTablesSqlParser.RULE_rectangle = 28;
FusionTablesSqlParser.RULE_coordinate = 29;
FusionTablesSqlParser.RULE_keyword = 30;
FusionTablesSqlParser.RULE_operator_ = 31;
FusionTablesSqlParser.RULE_literal = 32;
FusionTablesSqlParser.RULE_error_message = 33;
FusionTablesSqlParser.RULE_identifier = 34;
FusionTablesSqlParser.RULE_column_alias = 35;
FusionTablesSqlParser.RULE_table_name = 36;
FusionTablesSqlParser.RULE_column_name = 37;
FusionTablesSqlParser.RULE_new_table_name = 38;
FusionTablesSqlParser.RULE_view_name = 39;
FusionTablesSqlParser.RULE_table_alias = 40;
FusionTablesSqlParser.RULE_numeric_literal = 41;
FusionTablesSqlParser.RULE_string_literal = 42;

class FusionTablesSqlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_fusionTablesSql;
    }

	sql_stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sql_stmtContext);
	    } else {
	        return this.getTypedRuleContext(Sql_stmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterFusionTablesSql(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitFusionTablesSql(this);
		}
	}


}



class Sql_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_sql_stmt;
    }

	alter_table_stmt() {
	    return this.getTypedRuleContext(Alter_table_stmtContext,0);
	};

	select_stmt() {
	    return this.getTypedRuleContext(Select_stmtContext,0);
	};

	create_view_stmt() {
	    return this.getTypedRuleContext(Create_view_stmtContext,0);
	};

	create_table_as_select_stmt() {
	    return this.getTypedRuleContext(Create_table_as_select_stmtContext,0);
	};

	delete_stmt() {
	    return this.getTypedRuleContext(Delete_stmtContext,0);
	};

	drop_table_stmt() {
	    return this.getTypedRuleContext(Drop_table_stmtContext,0);
	};

	insert_stmt() {
	    return this.getTypedRuleContext(Insert_stmtContext,0);
	};

	update_stmt() {
	    return this.getTypedRuleContext(Update_stmtContext,0);
	};

	describe_stmt() {
	    return this.getTypedRuleContext(Describe_stmtContext,0);
	};

	show_tables_stmt() {
	    return this.getTypedRuleContext(Show_tables_stmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterSql_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitSql_stmt(this);
		}
	}


}



class Table_name_in_ddlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_table_name_in_ddl;
    }

	table_name() {
	    return this.getTypedRuleContext(Table_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterTable_name_in_ddl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitTable_name_in_ddl(this);
		}
	}


}



class Table_name_in_dmlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_table_name_in_dml;
    }

	table_name() {
	    return this.getTypedRuleContext(Table_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterTable_name_in_dml(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitTable_name_in_dml(this);
		}
	}


}



class Create_table_as_select_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_create_table_as_select_stmt;
    }

	K_CREATE() {
	    return this.getToken(FusionTablesSqlParser.K_CREATE, 0);
	};

	K_TABLE() {
	    return this.getToken(FusionTablesSqlParser.K_TABLE, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	K_AS() {
	    return this.getToken(FusionTablesSqlParser.K_AS, 0);
	};

	K_SELECT() {
	    return this.getToken(FusionTablesSqlParser.K_SELECT, 0);
	};

	K_FROM() {
	    return this.getToken(FusionTablesSqlParser.K_FROM, 0);
	};

	table_name_in_ddl() {
	    return this.getTypedRuleContext(Table_name_in_ddlContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterCreate_table_as_select_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitCreate_table_as_select_stmt(this);
		}
	}


}



class Describe_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_describe_stmt;
    }

	K_DESCRIBE() {
	    return this.getToken(FusionTablesSqlParser.K_DESCRIBE, 0);
	};

	table_name_in_ddl() {
	    return this.getTypedRuleContext(Table_name_in_ddlContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterDescribe_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitDescribe_stmt(this);
		}
	}


}



class Show_tables_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_show_tables_stmt;
    }

	K_SHOW() {
	    return this.getToken(FusionTablesSqlParser.K_SHOW, 0);
	};

	K_TABLES() {
	    return this.getToken(FusionTablesSqlParser.K_TABLES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterShow_tables_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitShow_tables_stmt(this);
		}
	}


}



class Alter_table_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_alter_table_stmt;
    }

	K_ALTER() {
	    return this.getToken(FusionTablesSqlParser.K_ALTER, 0);
	};

	K_TABLE() {
	    return this.getToken(FusionTablesSqlParser.K_TABLE, 0);
	};

	table_name_in_ddl() {
	    return this.getTypedRuleContext(Table_name_in_ddlContext,0);
	};

	K_RENAME() {
	    return this.getToken(FusionTablesSqlParser.K_RENAME, 0);
	};

	K_TO() {
	    return this.getToken(FusionTablesSqlParser.K_TO, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterAlter_table_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitAlter_table_stmt(this);
		}
	}


}



class Create_view_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_create_view_stmt;
    }

	K_CREATE() {
	    return this.getToken(FusionTablesSqlParser.K_CREATE, 0);
	};

	K_VIEW() {
	    return this.getToken(FusionTablesSqlParser.K_VIEW, 0);
	};

	view_name() {
	    return this.getTypedRuleContext(View_nameContext,0);
	};

	K_AS() {
	    return this.getToken(FusionTablesSqlParser.K_AS, 0);
	};

	LPAR() {
	    return this.getToken(FusionTablesSqlParser.LPAR, 0);
	};

	K_SELECT() {
	    return this.getToken(FusionTablesSqlParser.K_SELECT, 0);
	};

	result_column = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Result_columnContext);
	    } else {
	        return this.getTypedRuleContext(Result_columnContext,i);
	    }
	};

	K_FROM() {
	    return this.getToken(FusionTablesSqlParser.K_FROM, 0);
	};

	RPAR() {
	    return this.getToken(FusionTablesSqlParser.RPAR, 0);
	};

	table_name_with_alias() {
	    return this.getTypedRuleContext(Table_name_with_aliasContext,0);
	};

	join_clause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Join_clauseContext);
	    } else {
	        return this.getTypedRuleContext(Join_clauseContext,i);
	    }
	};

	K_WHERE() {
	    return this.getToken(FusionTablesSqlParser.K_WHERE, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterCreate_view_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitCreate_view_stmt(this);
		}
	}


}



class Drop_table_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_drop_table_stmt;
    }

	K_DROP() {
	    return this.getToken(FusionTablesSqlParser.K_DROP, 0);
	};

	K_TABLE() {
	    return this.getToken(FusionTablesSqlParser.K_TABLE, 0);
	};

	table_name_in_ddl() {
	    return this.getTypedRuleContext(Table_name_in_ddlContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterDrop_table_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitDrop_table_stmt(this);
		}
	}


}



class Insert_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_insert_stmt;
    }

	K_INSERT() {
	    return this.getToken(FusionTablesSqlParser.K_INSERT, 0);
	};

	K_INTO() {
	    return this.getToken(FusionTablesSqlParser.K_INTO, 0);
	};

	table_name_in_dml() {
	    return this.getTypedRuleContext(Table_name_in_dmlContext,0);
	};

	LPAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FusionTablesSqlParser.LPAR);
	    } else {
	        return this.getToken(FusionTablesSqlParser.LPAR, i);
	    }
	};


	column_name_in_dml = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Column_name_in_dmlContext);
	    } else {
	        return this.getTypedRuleContext(Column_name_in_dmlContext,i);
	    }
	};

	RPAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FusionTablesSqlParser.RPAR);
	    } else {
	        return this.getToken(FusionTablesSqlParser.RPAR, i);
	    }
	};


	K_VALUES() {
	    return this.getToken(FusionTablesSqlParser.K_VALUES, 0);
	};

	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterInsert_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitInsert_stmt(this);
		}
	}


}



class Update_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_update_stmt;
    }

	K_UPDATE() {
	    return this.getToken(FusionTablesSqlParser.K_UPDATE, 0);
	};

	table_name_in_dml() {
	    return this.getTypedRuleContext(Table_name_in_dmlContext,0);
	};

	K_SET() {
	    return this.getToken(FusionTablesSqlParser.K_SET, 0);
	};

	column_assignment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Column_assignmentContext);
	    } else {
	        return this.getTypedRuleContext(Column_assignmentContext,i);
	    }
	};

	K_WHERE() {
	    return this.getToken(FusionTablesSqlParser.K_WHERE, 0);
	};

	eq_comparison() {
	    return this.getTypedRuleContext(Eq_comparisonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterUpdate_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitUpdate_stmt(this);
		}
	}


}



class Column_assignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_column_assignment;
    }

	column_name_in_dml() {
	    return this.getTypedRuleContext(Column_name_in_dmlContext,0);
	};

	EQ() {
	    return this.getToken(FusionTablesSqlParser.EQ, 0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterColumn_assignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitColumn_assignment(this);
		}
	}


}



class Delete_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_delete_stmt;
    }

	K_DELETE() {
	    return this.getToken(FusionTablesSqlParser.K_DELETE, 0);
	};

	K_FROM() {
	    return this.getToken(FusionTablesSqlParser.K_FROM, 0);
	};

	table_name_in_dml() {
	    return this.getTypedRuleContext(Table_name_in_dmlContext,0);
	};

	K_WHERE() {
	    return this.getToken(FusionTablesSqlParser.K_WHERE, 0);
	};

	column_name_in_dml() {
	    return this.getTypedRuleContext(Column_name_in_dmlContext,0);
	};

	EQ() {
	    return this.getToken(FusionTablesSqlParser.EQ, 0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterDelete_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitDelete_stmt(this);
		}
	}


}



class Eq_comparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_eq_comparison;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	EQ() {
	    return this.getToken(FusionTablesSqlParser.EQ, 0);
	};

	string_literal() {
	    return this.getTypedRuleContext(String_literalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterEq_comparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitEq_comparison(this);
		}
	}


}



class Table_name_with_aliasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_table_name_with_alias;
    }

	table_name() {
	    return this.getTypedRuleContext(Table_nameContext,0);
	};

	K_AS() {
	    return this.getToken(FusionTablesSqlParser.K_AS, 0);
	};

	table_alias() {
	    return this.getTypedRuleContext(Table_aliasContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterTable_name_with_alias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitTable_name_with_alias(this);
		}
	}


}



class Select_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_select_stmt;
    }

	K_SELECT() {
	    return this.getToken(FusionTablesSqlParser.K_SELECT, 0);
	};

	result_column = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Result_columnContext);
	    } else {
	        return this.getTypedRuleContext(Result_columnContext,i);
	    }
	};

	K_FROM() {
	    return this.getToken(FusionTablesSqlParser.K_FROM, 0);
	};

	table_name_with_alias() {
	    return this.getTypedRuleContext(Table_name_with_aliasContext,0);
	};

	join_clause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Join_clauseContext);
	    } else {
	        return this.getTypedRuleContext(Join_clauseContext,i);
	    }
	};

	K_WHERE() {
	    return this.getToken(FusionTablesSqlParser.K_WHERE, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	K_GROUP() {
	    return this.getToken(FusionTablesSqlParser.K_GROUP, 0);
	};

	K_BY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FusionTablesSqlParser.K_BY);
	    } else {
	        return this.getToken(FusionTablesSqlParser.K_BY, i);
	    }
	};


	qualified_column_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Qualified_column_nameContext);
	    } else {
	        return this.getTypedRuleContext(Qualified_column_nameContext,i);
	    }
	};

	K_ORDER() {
	    return this.getToken(FusionTablesSqlParser.K_ORDER, 0);
	};

	ordering_term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Ordering_termContext);
	    } else {
	        return this.getTypedRuleContext(Ordering_termContext,i);
	    }
	};

	K_OFFSET() {
	    return this.getToken(FusionTablesSqlParser.K_OFFSET, 0);
	};

	numeric_literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Numeric_literalContext);
	    } else {
	        return this.getTypedRuleContext(Numeric_literalContext,i);
	    }
	};

	K_LIMIT() {
	    return this.getToken(FusionTablesSqlParser.K_LIMIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterSelect_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitSelect_stmt(this);
		}
	}


}



class Ordering_termContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_ordering_term;
    }

	qualified_column_name() {
	    return this.getTypedRuleContext(Qualified_column_nameContext,0);
	};

	K_ST_DISTANCE() {
	    return this.getToken(FusionTablesSqlParser.K_ST_DISTANCE, 0);
	};

	LPAR() {
	    return this.getToken(FusionTablesSqlParser.LPAR, 0);
	};

	coordinate() {
	    return this.getTypedRuleContext(CoordinateContext,0);
	};

	RPAR() {
	    return this.getToken(FusionTablesSqlParser.RPAR, 0);
	};

	K_ASC() {
	    return this.getToken(FusionTablesSqlParser.K_ASC, 0);
	};

	K_DESC() {
	    return this.getToken(FusionTablesSqlParser.K_DESC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterOrdering_term(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitOrdering_term(this);
		}
	}


}



class Join_clauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_join_clause;
    }

	K_LEFT() {
	    return this.getToken(FusionTablesSqlParser.K_LEFT, 0);
	};

	K_OUTER() {
	    return this.getToken(FusionTablesSqlParser.K_OUTER, 0);
	};

	K_JOIN() {
	    return this.getToken(FusionTablesSqlParser.K_JOIN, 0);
	};

	table_name_with_alias() {
	    return this.getTypedRuleContext(Table_name_with_aliasContext,0);
	};

	K_ON() {
	    return this.getToken(FusionTablesSqlParser.K_ON, 0);
	};

	qualified_column_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Qualified_column_nameContext);
	    } else {
	        return this.getTypedRuleContext(Qualified_column_nameContext,i);
	    }
	};

	EQ() {
	    return this.getToken(FusionTablesSqlParser.EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterJoin_clause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitJoin_clause(this);
		}
	}


}



class Result_columnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_result_column;
    }

	table_name() {
	    return this.getTypedRuleContext(Table_nameContext,0);
	};

	qualified_column_name() {
	    return this.getTypedRuleContext(Qualified_column_nameContext,0);
	};

	aggregate_exp() {
	    return this.getTypedRuleContext(Aggregate_expContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterResult_column(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitResult_column(this);
		}
	}


}



class Qualified_column_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_qualified_column_name;
    }

	column_name() {
	    return this.getTypedRuleContext(Column_nameContext,0);
	};

	table_name() {
	    return this.getTypedRuleContext(Table_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterQualified_column_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitQualified_column_name(this);
		}
	}


}



class Aggregate_expContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_aggregate_exp;
    }

	LPAR() {
	    return this.getToken(FusionTablesSqlParser.LPAR, 0);
	};

	qualified_column_name() {
	    return this.getTypedRuleContext(Qualified_column_nameContext,0);
	};

	RPAR() {
	    return this.getToken(FusionTablesSqlParser.RPAR, 0);
	};

	K_SUM() {
	    return this.getToken(FusionTablesSqlParser.K_SUM, 0);
	};

	K_COUNT() {
	    return this.getToken(FusionTablesSqlParser.K_COUNT, 0);
	};

	K_AVERAGE() {
	    return this.getToken(FusionTablesSqlParser.K_AVERAGE, 0);
	};

	K_MAXIMUM() {
	    return this.getToken(FusionTablesSqlParser.K_MAXIMUM, 0);
	};

	K_MINIMUM() {
	    return this.getToken(FusionTablesSqlParser.K_MINIMUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterAggregate_exp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitAggregate_exp(this);
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
        this.ruleIndex = FusionTablesSqlParser.RULE_expr;
    }

	column_name_beginning_expr() {
	    return this.getTypedRuleContext(Column_name_beginning_exprContext,0);
	};

	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	operator_() {
	    return this.getTypedRuleContext(Operator_Context,0);
	};

	and_or_or() {
	    return this.getTypedRuleContext(And_or_orContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	string_literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(String_literalContext);
	    } else {
	        return this.getTypedRuleContext(String_literalContext,i);
	    }
	};

	K_LIKE() {
	    return this.getToken(FusionTablesSqlParser.K_LIKE, 0);
	};

	K_MATCHES() {
	    return this.getToken(FusionTablesSqlParser.K_MATCHES, 0);
	};

	K_STARTS() {
	    return this.getToken(FusionTablesSqlParser.K_STARTS, 0);
	};

	K_WITH() {
	    return this.getToken(FusionTablesSqlParser.K_WITH, 0);
	};

	K_ENDS() {
	    return this.getToken(FusionTablesSqlParser.K_ENDS, 0);
	};

	K_CONTAINS() {
	    return this.getToken(FusionTablesSqlParser.K_CONTAINS, 0);
	};

	K_IGNORING() {
	    return this.getToken(FusionTablesSqlParser.K_IGNORING, 0);
	};

	K_CASE() {
	    return this.getToken(FusionTablesSqlParser.K_CASE, 0);
	};

	K_DOES() {
	    return this.getToken(FusionTablesSqlParser.K_DOES, 0);
	};

	K_NOT() {
	    return this.getToken(FusionTablesSqlParser.K_NOT, 0);
	};

	K_CONTAIN() {
	    return this.getToken(FusionTablesSqlParser.K_CONTAIN, 0);
	};

	K_EQUAL() {
	    return this.getToken(FusionTablesSqlParser.K_EQUAL, 0);
	};

	K_TO() {
	    return this.getToken(FusionTablesSqlParser.K_TO, 0);
	};

	K_IN() {
	    return this.getToken(FusionTablesSqlParser.K_IN, 0);
	};

	LPAR() {
	    return this.getToken(FusionTablesSqlParser.LPAR, 0);
	};

	RPAR() {
	    return this.getToken(FusionTablesSqlParser.RPAR, 0);
	};

	K_BETWEEN() {
	    return this.getToken(FusionTablesSqlParser.K_BETWEEN, 0);
	};

	K_AND() {
	    return this.getToken(FusionTablesSqlParser.K_AND, 0);
	};

	K_ST_INTERSECTS() {
	    return this.getToken(FusionTablesSqlParser.K_ST_INTERSECTS, 0);
	};

	qualified_column_name() {
	    return this.getTypedRuleContext(Qualified_column_nameContext,0);
	};

	geometry() {
	    return this.getTypedRuleContext(GeometryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitExpr(this);
		}
	}


}



class Column_name_beginning_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_column_name_beginning_expr;
    }

	qualified_column_name() {
	    return this.getTypedRuleContext(Qualified_column_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterColumn_name_beginning_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitColumn_name_beginning_expr(this);
		}
	}


}



class Column_name_in_dmlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_column_name_in_dml;
    }

	column_name() {
	    return this.getTypedRuleContext(Column_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterColumn_name_in_dml(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitColumn_name_in_dml(this);
		}
	}


}



class And_or_orContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_and_or_or;
    }

	K_AND() {
	    return this.getToken(FusionTablesSqlParser.K_AND, 0);
	};

	K_OR() {
	    return this.getToken(FusionTablesSqlParser.K_OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterAnd_or_or(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitAnd_or_or(this);
		}
	}


}



class GeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_geometry;
    }

	circle() {
	    return this.getTypedRuleContext(CircleContext,0);
	};

	rectangle() {
	    return this.getTypedRuleContext(RectangleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitGeometry(this);
		}
	}


}



class CircleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_circle;
    }

	K_CIRCLE() {
	    return this.getToken(FusionTablesSqlParser.K_CIRCLE, 0);
	};

	LPAR() {
	    return this.getToken(FusionTablesSqlParser.LPAR, 0);
	};

	coordinate() {
	    return this.getTypedRuleContext(CoordinateContext,0);
	};

	numeric_literal() {
	    return this.getTypedRuleContext(Numeric_literalContext,0);
	};

	RPAR() {
	    return this.getToken(FusionTablesSqlParser.RPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterCircle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitCircle(this);
		}
	}


}



class RectangleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_rectangle;
    }

	K_RECTANGLE() {
	    return this.getToken(FusionTablesSqlParser.K_RECTANGLE, 0);
	};

	LPAR() {
	    return this.getToken(FusionTablesSqlParser.LPAR, 0);
	};

	coordinate = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CoordinateContext);
	    } else {
	        return this.getTypedRuleContext(CoordinateContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(FusionTablesSqlParser.RPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterRectangle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitRectangle(this);
		}
	}


}



class CoordinateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_coordinate;
    }

	K_LATLNG() {
	    return this.getToken(FusionTablesSqlParser.K_LATLNG, 0);
	};

	LPAR() {
	    return this.getToken(FusionTablesSqlParser.LPAR, 0);
	};

	numeric_literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Numeric_literalContext);
	    } else {
	        return this.getTypedRuleContext(Numeric_literalContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(FusionTablesSqlParser.RPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterCoordinate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitCoordinate(this);
		}
	}


}



class KeywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_keyword;
    }

	K_ALTER() {
	    return this.getToken(FusionTablesSqlParser.K_ALTER, 0);
	};

	K_AND() {
	    return this.getToken(FusionTablesSqlParser.K_AND, 0);
	};

	K_OR() {
	    return this.getToken(FusionTablesSqlParser.K_OR, 0);
	};

	K_AS() {
	    return this.getToken(FusionTablesSqlParser.K_AS, 0);
	};

	K_ASC() {
	    return this.getToken(FusionTablesSqlParser.K_ASC, 0);
	};

	K_AVERAGE() {
	    return this.getToken(FusionTablesSqlParser.K_AVERAGE, 0);
	};

	K_BY() {
	    return this.getToken(FusionTablesSqlParser.K_BY, 0);
	};

	K_BETWEEN() {
	    return this.getToken(FusionTablesSqlParser.K_BETWEEN, 0);
	};

	K_CASE() {
	    return this.getToken(FusionTablesSqlParser.K_CASE, 0);
	};

	K_CIRCLE() {
	    return this.getToken(FusionTablesSqlParser.K_CIRCLE, 0);
	};

	K_COLUMN() {
	    return this.getToken(FusionTablesSqlParser.K_COLUMN, 0);
	};

	K_CONTAIN() {
	    return this.getToken(FusionTablesSqlParser.K_CONTAIN, 0);
	};

	K_CONTAINS() {
	    return this.getToken(FusionTablesSqlParser.K_CONTAINS, 0);
	};

	K_COUNT() {
	    return this.getToken(FusionTablesSqlParser.K_COUNT, 0);
	};

	K_CREATE() {
	    return this.getToken(FusionTablesSqlParser.K_CREATE, 0);
	};

	K_DELETE() {
	    return this.getToken(FusionTablesSqlParser.K_DELETE, 0);
	};

	K_DESC() {
	    return this.getToken(FusionTablesSqlParser.K_DESC, 0);
	};

	K_DOES() {
	    return this.getToken(FusionTablesSqlParser.K_DOES, 0);
	};

	K_DROP() {
	    return this.getToken(FusionTablesSqlParser.K_DROP, 0);
	};

	K_ENDS() {
	    return this.getToken(FusionTablesSqlParser.K_ENDS, 0);
	};

	K_EQUAL() {
	    return this.getToken(FusionTablesSqlParser.K_EQUAL, 0);
	};

	K_FROM() {
	    return this.getToken(FusionTablesSqlParser.K_FROM, 0);
	};

	K_GROUP() {
	    return this.getToken(FusionTablesSqlParser.K_GROUP, 0);
	};

	K_HAVING() {
	    return this.getToken(FusionTablesSqlParser.K_HAVING, 0);
	};

	K_IGNORING() {
	    return this.getToken(FusionTablesSqlParser.K_IGNORING, 0);
	};

	K_IN() {
	    return this.getToken(FusionTablesSqlParser.K_IN, 0);
	};

	K_INSERT() {
	    return this.getToken(FusionTablesSqlParser.K_INSERT, 0);
	};

	K_INTO() {
	    return this.getToken(FusionTablesSqlParser.K_INTO, 0);
	};

	K_JOIN() {
	    return this.getToken(FusionTablesSqlParser.K_JOIN, 0);
	};

	K_LATLNG() {
	    return this.getToken(FusionTablesSqlParser.K_LATLNG, 0);
	};

	K_LEFT() {
	    return this.getToken(FusionTablesSqlParser.K_LEFT, 0);
	};

	K_LIKE() {
	    return this.getToken(FusionTablesSqlParser.K_LIKE, 0);
	};

	K_LIMIT() {
	    return this.getToken(FusionTablesSqlParser.K_LIMIT, 0);
	};

	K_MATCHES() {
	    return this.getToken(FusionTablesSqlParser.K_MATCHES, 0);
	};

	K_MAXIMUM() {
	    return this.getToken(FusionTablesSqlParser.K_MAXIMUM, 0);
	};

	K_MINIMUM() {
	    return this.getToken(FusionTablesSqlParser.K_MINIMUM, 0);
	};

	K_NOT() {
	    return this.getToken(FusionTablesSqlParser.K_NOT, 0);
	};

	K_OF() {
	    return this.getToken(FusionTablesSqlParser.K_OF, 0);
	};

	K_OFFSET() {
	    return this.getToken(FusionTablesSqlParser.K_OFFSET, 0);
	};

	K_ON() {
	    return this.getToken(FusionTablesSqlParser.K_ON, 0);
	};

	K_ORDER() {
	    return this.getToken(FusionTablesSqlParser.K_ORDER, 0);
	};

	K_OUTER() {
	    return this.getToken(FusionTablesSqlParser.K_OUTER, 0);
	};

	K_RECTANGLE() {
	    return this.getToken(FusionTablesSqlParser.K_RECTANGLE, 0);
	};

	K_RENAME() {
	    return this.getToken(FusionTablesSqlParser.K_RENAME, 0);
	};

	K_SELECT() {
	    return this.getToken(FusionTablesSqlParser.K_SELECT, 0);
	};

	K_SET() {
	    return this.getToken(FusionTablesSqlParser.K_SET, 0);
	};

	K_STARTS() {
	    return this.getToken(FusionTablesSqlParser.K_STARTS, 0);
	};

	K_ST_DISTANCE() {
	    return this.getToken(FusionTablesSqlParser.K_ST_DISTANCE, 0);
	};

	K_ST_INTERSECTS() {
	    return this.getToken(FusionTablesSqlParser.K_ST_INTERSECTS, 0);
	};

	K_SUM() {
	    return this.getToken(FusionTablesSqlParser.K_SUM, 0);
	};

	K_TABLE() {
	    return this.getToken(FusionTablesSqlParser.K_TABLE, 0);
	};

	K_TO() {
	    return this.getToken(FusionTablesSqlParser.K_TO, 0);
	};

	K_UPDATE() {
	    return this.getToken(FusionTablesSqlParser.K_UPDATE, 0);
	};

	K_VALUES() {
	    return this.getToken(FusionTablesSqlParser.K_VALUES, 0);
	};

	K_VIEW() {
	    return this.getToken(FusionTablesSqlParser.K_VIEW, 0);
	};

	K_WHERE() {
	    return this.getToken(FusionTablesSqlParser.K_WHERE, 0);
	};

	K_WITH() {
	    return this.getToken(FusionTablesSqlParser.K_WITH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterKeyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitKeyword(this);
		}
	}


}



class Operator_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_operator_;
    }

	LT() {
	    return this.getToken(FusionTablesSqlParser.LT, 0);
	};

	LT_EQ() {
	    return this.getToken(FusionTablesSqlParser.LT_EQ, 0);
	};

	GT() {
	    return this.getToken(FusionTablesSqlParser.GT, 0);
	};

	GT_EQ() {
	    return this.getToken(FusionTablesSqlParser.GT_EQ, 0);
	};

	EQ() {
	    return this.getToken(FusionTablesSqlParser.EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterOperator_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitOperator_(this);
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
        this.ruleIndex = FusionTablesSqlParser.RULE_literal;
    }

	numeric_literal() {
	    return this.getTypedRuleContext(Numeric_literalContext,0);
	};

	string_literal() {
	    return this.getTypedRuleContext(String_literalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class Error_messageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_error_message;
    }

	string_literal() {
	    return this.getTypedRuleContext(String_literalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterError_message(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitError_message(this);
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
        this.ruleIndex = FusionTablesSqlParser.RULE_identifier;
    }

	string_literal() {
	    return this.getTypedRuleContext(String_literalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class Column_aliasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_column_alias;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterColumn_alias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitColumn_alias(this);
		}
	}


}



class Table_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_table_name;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterTable_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitTable_name(this);
		}
	}


}



class Column_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_column_name;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterColumn_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitColumn_name(this);
		}
	}


}



class New_table_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_new_table_name;
    }

	table_name() {
	    return this.getTypedRuleContext(Table_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterNew_table_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitNew_table_name(this);
		}
	}


}



class View_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_view_name;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterView_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitView_name(this);
		}
	}


}



class Table_aliasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_table_alias;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterTable_alias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitTable_alias(this);
		}
	}


}



class Numeric_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_numeric_literal;
    }

	NUMERIC_LITERAL() {
	    return this.getToken(FusionTablesSqlParser.NUMERIC_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterNumeric_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitNumeric_literal(this);
		}
	}


}



class String_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_string_literal;
    }

	STRING_LITERAL() {
	    return this.getToken(FusionTablesSqlParser.STRING_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterString_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitString_literal(this);
		}
	}


}




FusionTablesSqlParser.FusionTablesSqlContext = FusionTablesSqlContext; 
FusionTablesSqlParser.Sql_stmtContext = Sql_stmtContext; 
FusionTablesSqlParser.Table_name_in_ddlContext = Table_name_in_ddlContext; 
FusionTablesSqlParser.Table_name_in_dmlContext = Table_name_in_dmlContext; 
FusionTablesSqlParser.Create_table_as_select_stmtContext = Create_table_as_select_stmtContext; 
FusionTablesSqlParser.Describe_stmtContext = Describe_stmtContext; 
FusionTablesSqlParser.Show_tables_stmtContext = Show_tables_stmtContext; 
FusionTablesSqlParser.Alter_table_stmtContext = Alter_table_stmtContext; 
FusionTablesSqlParser.Create_view_stmtContext = Create_view_stmtContext; 
FusionTablesSqlParser.Drop_table_stmtContext = Drop_table_stmtContext; 
FusionTablesSqlParser.Insert_stmtContext = Insert_stmtContext; 
FusionTablesSqlParser.Update_stmtContext = Update_stmtContext; 
FusionTablesSqlParser.Column_assignmentContext = Column_assignmentContext; 
FusionTablesSqlParser.Delete_stmtContext = Delete_stmtContext; 
FusionTablesSqlParser.Eq_comparisonContext = Eq_comparisonContext; 
FusionTablesSqlParser.Table_name_with_aliasContext = Table_name_with_aliasContext; 
FusionTablesSqlParser.Select_stmtContext = Select_stmtContext; 
FusionTablesSqlParser.Ordering_termContext = Ordering_termContext; 
FusionTablesSqlParser.Join_clauseContext = Join_clauseContext; 
FusionTablesSqlParser.Result_columnContext = Result_columnContext; 
FusionTablesSqlParser.Qualified_column_nameContext = Qualified_column_nameContext; 
FusionTablesSqlParser.Aggregate_expContext = Aggregate_expContext; 
FusionTablesSqlParser.ExprContext = ExprContext; 
FusionTablesSqlParser.Column_name_beginning_exprContext = Column_name_beginning_exprContext; 
FusionTablesSqlParser.Column_name_in_dmlContext = Column_name_in_dmlContext; 
FusionTablesSqlParser.And_or_orContext = And_or_orContext; 
FusionTablesSqlParser.GeometryContext = GeometryContext; 
FusionTablesSqlParser.CircleContext = CircleContext; 
FusionTablesSqlParser.RectangleContext = RectangleContext; 
FusionTablesSqlParser.CoordinateContext = CoordinateContext; 
FusionTablesSqlParser.KeywordContext = KeywordContext; 
FusionTablesSqlParser.Operator_Context = Operator_Context; 
FusionTablesSqlParser.LiteralContext = LiteralContext; 
FusionTablesSqlParser.Error_messageContext = Error_messageContext; 
FusionTablesSqlParser.IdentifierContext = IdentifierContext; 
FusionTablesSqlParser.Column_aliasContext = Column_aliasContext; 
FusionTablesSqlParser.Table_nameContext = Table_nameContext; 
FusionTablesSqlParser.Column_nameContext = Column_nameContext; 
FusionTablesSqlParser.New_table_nameContext = New_table_nameContext; 
FusionTablesSqlParser.View_nameContext = View_nameContext; 
FusionTablesSqlParser.Table_aliasContext = Table_aliasContext; 
FusionTablesSqlParser.Numeric_literalContext = Numeric_literalContext; 
FusionTablesSqlParser.String_literalContext = String_literalContext; 
