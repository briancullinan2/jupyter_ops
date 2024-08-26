// Generated from Resources/Parsers/joss/joss.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import jossListener from './jossListener.js';
const serializedATN = [4,1,75,499,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,
2,71,7,71,1,0,4,0,146,8,0,11,0,12,0,147,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
3,1,158,8,1,1,2,1,2,1,2,1,2,3,2,164,8,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,
3,4,174,8,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,182,8,5,1,6,1,6,1,7,1,7,1,8,1,8,
1,8,1,9,1,9,1,9,1,9,3,9,195,8,9,1,10,1,10,1,10,3,10,200,8,10,1,11,1,11,1,
12,1,12,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,3,16,216,8,16,
1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,3,18,227,8,18,1,19,1,19,3,19,
231,8,19,1,20,1,20,1,20,1,21,1,21,1,21,1,21,3,21,240,8,21,1,22,1,22,1,23,
1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,3,24,253,8,24,1,25,1,25,1,25,1,25,
3,25,259,8,25,1,26,1,26,1,26,1,26,3,26,265,8,26,1,27,1,27,1,27,3,27,270,
8,27,1,28,1,28,1,29,1,29,1,29,3,29,277,8,29,1,30,1,30,1,30,1,30,1,31,1,31,
1,31,1,31,3,31,287,8,31,1,32,1,32,3,32,291,8,32,1,33,1,33,3,33,295,8,33,
1,34,1,34,1,34,1,35,1,35,1,35,3,35,303,8,35,1,36,1,36,1,36,1,36,1,36,1,37,
4,37,311,8,37,11,37,12,37,312,1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,40,1,
40,1,41,1,41,3,41,326,8,41,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,
1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,344,8,43,1,44,1,44,1,45,1,45,1,45,
1,45,1,46,1,46,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,
49,3,49,366,8,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,50,375,8,50,1,51,1,
51,1,51,1,51,1,51,3,51,382,8,51,1,52,1,52,1,52,1,52,1,52,3,52,389,8,52,1,
53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,3,53,400,8,53,1,54,1,54,1,54,
1,54,1,55,1,55,1,55,3,55,409,8,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,
1,56,1,56,1,56,1,56,3,56,423,8,56,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,58,
1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,62,1,62,1,
62,1,62,1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,66,
1,66,1,66,1,66,1,67,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,
68,1,69,1,69,1,69,1,69,1,69,3,69,482,8,69,1,70,1,70,1,70,1,70,1,70,1,70,
3,70,490,8,70,1,71,1,71,1,71,1,71,1,71,3,71,497,8,71,1,71,0,0,72,0,2,4,6,
8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,
106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,
142,0,5,1,0,6,8,1,0,16,18,2,0,6,8,22,22,1,0,37,38,1,0,39,44,490,0,145,1,
0,0,0,2,157,1,0,0,0,4,163,1,0,0,0,6,165,1,0,0,0,8,173,1,0,0,0,10,181,1,0,
0,0,12,183,1,0,0,0,14,185,1,0,0,0,16,187,1,0,0,0,18,194,1,0,0,0,20,199,1,
0,0,0,22,201,1,0,0,0,24,203,1,0,0,0,26,205,1,0,0,0,28,207,1,0,0,0,30,210,
1,0,0,0,32,215,1,0,0,0,34,217,1,0,0,0,36,226,1,0,0,0,38,230,1,0,0,0,40,232,
1,0,0,0,42,239,1,0,0,0,44,241,1,0,0,0,46,243,1,0,0,0,48,252,1,0,0,0,50,258,
1,0,0,0,52,264,1,0,0,0,54,269,1,0,0,0,56,271,1,0,0,0,58,276,1,0,0,0,60,278,
1,0,0,0,62,286,1,0,0,0,64,290,1,0,0,0,66,294,1,0,0,0,68,296,1,0,0,0,70,302,
1,0,0,0,72,304,1,0,0,0,74,310,1,0,0,0,76,314,1,0,0,0,78,317,1,0,0,0,80,320,
1,0,0,0,82,325,1,0,0,0,84,327,1,0,0,0,86,343,1,0,0,0,88,345,1,0,0,0,90,347,
1,0,0,0,92,351,1,0,0,0,94,353,1,0,0,0,96,356,1,0,0,0,98,365,1,0,0,0,100,
374,1,0,0,0,102,381,1,0,0,0,104,388,1,0,0,0,106,399,1,0,0,0,108,401,1,0,
0,0,110,408,1,0,0,0,112,422,1,0,0,0,114,424,1,0,0,0,116,428,1,0,0,0,118,
432,1,0,0,0,120,436,1,0,0,0,122,440,1,0,0,0,124,444,1,0,0,0,126,448,1,0,
0,0,128,452,1,0,0,0,130,456,1,0,0,0,132,460,1,0,0,0,134,464,1,0,0,0,136,
470,1,0,0,0,138,481,1,0,0,0,140,489,1,0,0,0,142,496,1,0,0,0,144,146,3,2,
1,0,145,144,1,0,0,0,146,147,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,
1,1,0,0,0,149,150,3,4,2,0,150,151,5,1,0,0,151,158,1,0,0,0,152,153,3,6,3,
0,153,154,5,1,0,0,154,158,1,0,0,0,155,158,3,60,30,0,156,158,3,108,54,0,157,
149,1,0,0,0,157,152,1,0,0,0,157,155,1,0,0,0,157,156,1,0,0,0,158,3,1,0,0,
0,159,164,3,14,7,0,160,164,3,16,8,0,161,164,3,12,6,0,162,164,3,10,5,0,163,
159,1,0,0,0,163,160,1,0,0,0,163,161,1,0,0,0,163,162,1,0,0,0,164,5,1,0,0,
0,165,166,5,74,0,0,166,167,3,8,4,0,167,7,1,0,0,0,168,174,3,30,15,0,169,174,
3,24,12,0,170,174,3,26,13,0,171,174,3,28,14,0,172,174,3,10,5,0,173,168,1,
0,0,0,173,169,1,0,0,0,173,170,1,0,0,0,173,171,1,0,0,0,173,172,1,0,0,0,174,
9,1,0,0,0,175,182,3,34,17,0,176,182,3,36,18,0,177,182,3,40,20,0,178,182,
3,58,29,0,179,182,5,58,0,0,180,182,5,59,0,0,181,175,1,0,0,0,181,176,1,0,
0,0,181,177,1,0,0,0,181,178,1,0,0,0,181,179,1,0,0,0,181,180,1,0,0,0,182,
11,1,0,0,0,183,184,5,2,0,0,184,13,1,0,0,0,185,186,5,3,0,0,186,15,1,0,0,0,
187,188,5,4,0,0,188,189,3,18,9,0,189,17,1,0,0,0,190,195,3,76,38,0,191,195,
3,78,39,0,192,195,3,80,40,0,193,195,3,20,10,0,194,190,1,0,0,0,194,191,1,
0,0,0,194,192,1,0,0,0,194,193,1,0,0,0,195,19,1,0,0,0,196,200,5,5,0,0,197,
198,5,5,0,0,198,200,3,22,11,0,199,196,1,0,0,0,199,197,1,0,0,0,200,21,1,0,
0,0,201,202,7,0,0,0,202,23,1,0,0,0,203,204,5,9,0,0,204,25,1,0,0,0,205,206,
5,10,0,0,206,27,1,0,0,0,207,208,5,11,0,0,208,209,3,140,70,0,209,29,1,0,0,
0,210,211,5,12,0,0,211,212,3,32,16,0,212,31,1,0,0,0,213,216,3,76,38,0,214,
216,3,78,39,0,215,213,1,0,0,0,215,214,1,0,0,0,216,33,1,0,0,0,217,218,5,13,
0,0,218,219,3,108,54,0,219,35,1,0,0,0,220,221,5,14,0,0,221,227,3,38,19,0,
222,223,5,14,0,0,223,224,3,38,19,0,224,225,3,82,41,0,225,227,1,0,0,0,226,
220,1,0,0,0,226,222,1,0,0,0,227,37,1,0,0,0,228,231,3,76,38,0,229,231,3,78,
39,0,230,228,1,0,0,0,230,229,1,0,0,0,231,39,1,0,0,0,232,233,5,15,0,0,233,
234,3,42,21,0,234,41,1,0,0,0,235,240,3,46,23,0,236,240,3,48,24,0,237,240,
3,52,26,0,238,240,3,44,22,0,239,235,1,0,0,0,239,236,1,0,0,0,239,237,1,0,
0,0,239,238,1,0,0,0,240,43,1,0,0,0,241,242,7,1,0,0,242,45,1,0,0,0,243,244,
3,142,71,0,244,245,5,19,0,0,245,246,3,80,40,0,246,47,1,0,0,0,247,253,3,50,
25,0,248,249,3,50,25,0,249,250,5,20,0,0,250,251,3,48,24,0,251,253,1,0,0,
0,252,247,1,0,0,0,252,248,1,0,0,0,253,49,1,0,0,0,254,255,5,21,0,0,255,256,
5,62,0,0,256,259,5,21,0,0,257,259,3,140,70,0,258,254,1,0,0,0,258,257,1,0,
0,0,259,51,1,0,0,0,260,265,3,76,38,0,261,265,3,78,39,0,262,265,3,80,40,0,
263,265,3,54,27,0,264,260,1,0,0,0,264,261,1,0,0,0,264,262,1,0,0,0,264,263,
1,0,0,0,265,53,1,0,0,0,266,270,5,5,0,0,267,268,5,5,0,0,268,270,3,56,28,0,
269,266,1,0,0,0,269,267,1,0,0,0,270,55,1,0,0,0,271,272,7,2,0,0,272,57,1,
0,0,0,273,277,3,142,71,0,274,275,5,5,0,0,275,277,5,22,0,0,276,273,1,0,0,
0,276,274,1,0,0,0,277,59,1,0,0,0,278,279,5,23,0,0,279,280,5,73,0,0,280,281,
5,24,0,0,281,61,1,0,0,0,282,287,3,64,32,0,283,284,3,64,32,0,284,285,3,62,
31,0,285,287,1,0,0,0,286,282,1,0,0,0,286,283,1,0,0,0,287,63,1,0,0,0,288,
291,3,66,33,0,289,291,5,62,0,0,290,288,1,0,0,0,290,289,1,0,0,0,291,65,1,
0,0,0,292,295,3,68,34,0,293,295,3,72,36,0,294,292,1,0,0,0,294,293,1,0,0,
0,295,67,1,0,0,0,296,297,5,25,0,0,297,298,3,70,35,0,298,69,1,0,0,0,299,303,
5,1,0,0,300,301,5,1,0,0,301,303,3,70,35,0,302,299,1,0,0,0,302,300,1,0,0,
0,303,71,1,0,0,0,304,305,5,26,0,0,305,306,3,74,37,0,306,307,5,27,0,0,307,
308,3,74,37,0,308,73,1,0,0,0,309,311,5,28,0,0,310,309,1,0,0,0,311,312,1,
0,0,0,312,310,1,0,0,0,312,313,1,0,0,0,313,75,1,0,0,0,314,315,5,29,0,0,315,
316,5,74,0,0,316,77,1,0,0,0,317,318,5,30,0,0,318,319,5,73,0,0,319,79,1,0,
0,0,320,321,5,31,0,0,321,322,5,73,0,0,322,81,1,0,0,0,323,326,3,84,42,0,324,
326,3,94,47,0,325,323,1,0,0,0,325,324,1,0,0,0,326,83,1,0,0,0,327,328,5,32,
0,0,328,329,3,86,43,0,329,85,1,0,0,0,330,331,5,33,0,0,331,332,3,86,43,0,
332,333,5,34,0,0,333,344,1,0,0,0,334,335,5,35,0,0,335,336,3,86,43,0,336,
337,5,36,0,0,337,344,1,0,0,0,338,344,3,90,45,0,339,340,3,90,45,0,340,341,
3,88,44,0,341,342,3,86,43,0,342,344,1,0,0,0,343,330,1,0,0,0,343,334,1,0,
0,0,343,338,1,0,0,0,343,339,1,0,0,0,344,87,1,0,0,0,345,346,7,3,0,0,346,89,
1,0,0,0,347,348,3,102,51,0,348,349,3,92,46,0,349,350,3,102,51,0,350,91,1,
0,0,0,351,352,7,4,0,0,352,93,1,0,0,0,353,354,5,45,0,0,354,355,3,96,48,0,
355,95,1,0,0,0,356,357,3,140,70,0,357,358,5,39,0,0,358,359,3,98,49,0,359,
97,1,0,0,0,360,366,3,100,50,0,361,362,3,100,50,0,362,363,5,20,0,0,363,364,
3,98,49,0,364,366,1,0,0,0,365,360,1,0,0,0,365,361,1,0,0,0,366,99,1,0,0,0,
367,368,3,102,51,0,368,369,5,33,0,0,369,370,3,102,51,0,370,371,5,34,0,0,
371,372,3,100,50,0,372,375,1,0,0,0,373,375,3,102,51,0,374,367,1,0,0,0,374,
373,1,0,0,0,375,101,1,0,0,0,376,382,3,104,52,0,377,378,3,104,52,0,378,379,
5,61,0,0,379,380,3,102,51,0,380,382,1,0,0,0,381,376,1,0,0,0,381,377,1,0,
0,0,382,103,1,0,0,0,383,389,3,106,53,0,384,385,3,106,53,0,385,386,5,60,0,
0,386,387,3,104,52,0,387,389,1,0,0,0,388,383,1,0,0,0,388,384,1,0,0,0,389,
105,1,0,0,0,390,391,5,33,0,0,391,392,3,102,51,0,392,393,5,34,0,0,393,400,
1,0,0,0,394,395,5,35,0,0,395,396,3,102,51,0,396,397,5,36,0,0,397,400,1,0,
0,0,398,400,3,110,55,0,399,390,1,0,0,0,399,394,1,0,0,0,399,398,1,0,0,0,400,
107,1,0,0,0,401,402,3,140,70,0,402,403,5,39,0,0,403,404,3,102,51,0,404,109,
1,0,0,0,405,409,5,66,0,0,406,409,3,140,70,0,407,409,3,112,56,0,408,405,1,
0,0,0,408,406,1,0,0,0,408,407,1,0,0,0,409,111,1,0,0,0,410,423,3,114,57,0,
411,423,3,116,58,0,412,423,3,118,59,0,413,423,3,120,60,0,414,423,3,122,61,
0,415,423,3,124,62,0,416,423,3,126,63,0,417,423,3,128,64,0,418,423,3,130,
65,0,419,423,3,132,66,0,420,423,3,134,67,0,421,423,3,136,68,0,422,410,1,
0,0,0,422,411,1,0,0,0,422,412,1,0,0,0,422,413,1,0,0,0,422,414,1,0,0,0,422,
415,1,0,0,0,422,416,1,0,0,0,422,417,1,0,0,0,422,418,1,0,0,0,422,419,1,0,
0,0,422,420,1,0,0,0,422,421,1,0,0,0,423,113,1,0,0,0,424,425,5,46,0,0,425,
426,3,102,51,0,426,427,5,34,0,0,427,115,1,0,0,0,428,429,5,47,0,0,429,430,
3,102,51,0,430,431,5,34,0,0,431,117,1,0,0,0,432,433,5,48,0,0,433,434,3,102,
51,0,434,435,5,34,0,0,435,119,1,0,0,0,436,437,5,49,0,0,437,438,3,102,51,
0,438,439,5,34,0,0,439,121,1,0,0,0,440,441,5,50,0,0,441,442,3,102,51,0,442,
443,5,34,0,0,443,123,1,0,0,0,444,445,5,51,0,0,445,446,3,102,51,0,446,447,
5,34,0,0,447,125,1,0,0,0,448,449,5,52,0,0,449,450,3,102,51,0,450,451,5,34,
0,0,451,127,1,0,0,0,452,453,5,53,0,0,453,454,3,102,51,0,454,455,5,34,0,0,
455,129,1,0,0,0,456,457,5,54,0,0,457,458,3,102,51,0,458,459,5,34,0,0,459,
131,1,0,0,0,460,461,5,55,0,0,461,462,3,102,51,0,462,463,5,34,0,0,463,133,
1,0,0,0,464,465,5,56,0,0,465,466,3,102,51,0,466,467,5,20,0,0,467,468,3,138,
69,0,468,469,5,34,0,0,469,135,1,0,0,0,470,471,5,57,0,0,471,472,3,102,51,
0,472,473,5,20,0,0,473,474,3,138,69,0,474,475,5,34,0,0,475,137,1,0,0,0,476,
482,3,102,51,0,477,478,3,102,51,0,478,479,5,20,0,0,479,480,3,138,69,0,480,
482,1,0,0,0,481,476,1,0,0,0,481,477,1,0,0,0,482,139,1,0,0,0,483,490,5,64,
0,0,484,485,5,64,0,0,485,486,5,33,0,0,486,487,3,102,51,0,487,488,5,34,0,
0,488,490,1,0,0,0,489,483,1,0,0,0,489,484,1,0,0,0,490,141,1,0,0,0,491,497,
3,140,70,0,492,493,3,140,70,0,493,494,5,20,0,0,494,495,3,142,71,0,495,497,
1,0,0,0,496,491,1,0,0,0,496,492,1,0,0,0,497,143,1,0,0,0,33,147,157,163,173,
181,194,199,215,226,230,239,252,258,264,269,276,286,290,294,302,312,325,
343,365,374,381,388,399,408,422,481,489,496];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class jossParser extends antlr4.Parser {

    static grammarFileName = "joss.g4";
    static literalNames = [ null, "'.'", "'Go'", "'Cancel'", "'Delete'", 
                            "'all'", "'steps'", "'parts'", "'forms'", "'Done'", 
                            "'Stop'", "'Demand'", "'To'", "'Set'", "'Do'", 
                            "'Type'", "'size'", "'time'", "'users'", "'in'", 
                            "','", "'''", "'values'", "'Form'", "':'", "'..'", 
                            "'__'", "'.__'", "'_'", "'step'", "'part'", 
                            "'form'", "'if'", "'('", "')'", "'['", "']'", 
                            "'and'", "'or'", "'='", "'!='", "'<='", "'=>'", 
                            "'<'", "'>'", "'for'", "'sqrt('", "'log('", 
                            "'exp('", "'sin('", "'cos('", "'ip('", "'fp('", 
                            "'dp('", "'xp('", "'sgn('", "'max('", "'min('", 
                            "'Line'", "'Page'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "LINECMD", "PAGECMD", "MULOP", 
                             "ADDOP", "STRING", "CHAR", "ALPHA", "SPECIALCHAR", 
                             "NUMBER", "NUMBERPART", "INTPART", "DECIMALPART", 
                             "DIGIT", "NZDIGIT", "SIGN", "PARTNUMBER", "STEPNUMBER", 
                             "WS" ];
    static ruleNames = [ "prog", "statement", "direct", "indirect_", "indirectCMD", 
                         "arbitraryCMD", "goCMD", "cancelCMD", "deleteCmdCMD", 
                         "delCmdSel", "delCmdAllSel", "delCmdAllType", "doneCMD", 
                         "stopCMD", "demandCMD", "toCMD", "toSel", "setCMD", 
                         "doCMD", "doSel", "typeCMD", "typeContent", "typeSys", 
                         "typeForm", "typeData", "typeElem", "typeSel", 
                         "typeAllSel", "typeAllType", "deleteValCMD", "formCMD", 
                         "formContent", "formObject", "formPH", "sciNotation", 
                         "dot", "fixedNotation", "uScore", "stepSel", "partSel", 
                         "formSel", "conditional", "if_", "boolExp", "boolOp", 
                         "comparison", "boolComp", "for_", "range_", "rangeExp", 
                         "rangeVal", "mathExp", "term", "factor", "assignment", 
                         "value", "function_", "funcSqrt", "funcLog", "funcExp", 
                         "funcSin", "funcCos", "funcIp", "funcFp", "funcDp", 
                         "funcXp", "funcSgn", "funcMax", "funcMin", "argList", 
                         "variable", "varList" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = jossParser.ruleNames;
        this.literalNames = jossParser.literalNames;
        this.symbolicNames = jossParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, jossParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 144;
	            this.statement();
	            this.state = 147; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << jossParser.T__1) | (1 << jossParser.T__2) | (1 << jossParser.T__3) | (1 << jossParser.T__4) | (1 << jossParser.T__12) | (1 << jossParser.T__13) | (1 << jossParser.T__14) | (1 << jossParser.T__22))) !== 0) || ((((_la - 58)) & ~0x1f) == 0 && ((1 << (_la - 58)) & ((1 << (jossParser.LINECMD - 58)) | (1 << (jossParser.PAGECMD - 58)) | (1 << (jossParser.ALPHA - 58)) | (1 << (jossParser.STEPNUMBER - 58)))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 2, jossParser.RULE_statement);
	    try {
	        this.state = 157;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 149;
	            this.direct();
	            this.state = 150;
	            this.match(jossParser.T__0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 152;
	            this.indirect_();
	            this.state = 153;
	            this.match(jossParser.T__0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 155;
	            this.formCMD();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 156;
	            this.assignment();
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



	direct() {
	    let localctx = new DirectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, jossParser.RULE_direct);
	    try {
	        this.state = 163;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case jossParser.T__2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            this.cancelCMD();
	            break;
	        case jossParser.T__3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 160;
	            this.deleteCmdCMD();
	            break;
	        case jossParser.T__1:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 161;
	            this.goCMD();
	            break;
	        case jossParser.T__4:
	        case jossParser.T__12:
	        case jossParser.T__13:
	        case jossParser.T__14:
	        case jossParser.LINECMD:
	        case jossParser.PAGECMD:
	        case jossParser.ALPHA:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 162;
	            this.arbitraryCMD();
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



	indirect_() {
	    let localctx = new Indirect_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, jossParser.RULE_indirect_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this.match(jossParser.STEPNUMBER);
	        this.state = 166;
	        this.indirectCMD();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	indirectCMD() {
	    let localctx = new IndirectCMDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, jossParser.RULE_indirectCMD);
	    try {
	        this.state = 173;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case jossParser.T__11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 168;
	            this.toCMD();
	            break;
	        case jossParser.T__8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 169;
	            this.doneCMD();
	            break;
	        case jossParser.T__9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 170;
	            this.stopCMD();
	            break;
	        case jossParser.T__10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 171;
	            this.demandCMD();
	            break;
	        case jossParser.T__4:
	        case jossParser.T__12:
	        case jossParser.T__13:
	        case jossParser.T__14:
	        case jossParser.LINECMD:
	        case jossParser.PAGECMD:
	        case jossParser.ALPHA:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 172;
	            this.arbitraryCMD();
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



	arbitraryCMD() {
	    let localctx = new ArbitraryCMDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, jossParser.RULE_arbitraryCMD);
	    try {
	        this.state = 181;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case jossParser.T__12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 175;
	            this.setCMD();
	            break;
	        case jossParser.T__13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 176;
	            this.doCMD();
	            break;
	        case jossParser.T__14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 177;
	            this.typeCMD();
	            break;
	        case jossParser.T__4:
	        case jossParser.ALPHA:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 178;
	            this.deleteValCMD();
	            break;
	        case jossParser.LINECMD:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 179;
	            this.match(jossParser.LINECMD);
	            break;
	        case jossParser.PAGECMD:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 180;
	            this.match(jossParser.PAGECMD);
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



	goCMD() {
	    let localctx = new GoCMDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, jossParser.RULE_goCMD);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.match(jossParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cancelCMD() {
	    let localctx = new CancelCMDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, jossParser.RULE_cancelCMD);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this.match(jossParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	deleteCmdCMD() {
	    let localctx = new DeleteCmdCMDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, jossParser.RULE_deleteCmdCMD);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(jossParser.T__3);
	        this.state = 188;
	        this.delCmdSel();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	delCmdSel() {
	    let localctx = new DelCmdSelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, jossParser.RULE_delCmdSel);
	    try {
	        this.state = 194;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case jossParser.T__28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 190;
	            this.stepSel();
	            break;
	        case jossParser.T__29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 191;
	            this.partSel();
	            break;
	        case jossParser.T__30:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 192;
	            this.formSel();
	            break;
	        case jossParser.T__4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 193;
	            this.delCmdAllSel();
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



	delCmdAllSel() {
	    let localctx = new DelCmdAllSelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, jossParser.RULE_delCmdAllSel);
	    try {
	        this.state = 199;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 196;
	            this.match(jossParser.T__4);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 197;
	            this.match(jossParser.T__4);
	            this.state = 198;
	            this.delCmdAllType();
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



	delCmdAllType() {
	    let localctx = new DelCmdAllTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, jossParser.RULE_delCmdAllType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << jossParser.T__5) | (1 << jossParser.T__6) | (1 << jossParser.T__7))) !== 0))) {
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



	doneCMD() {
	    let localctx = new DoneCMDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, jossParser.RULE_doneCMD);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.match(jossParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stopCMD() {
	    let localctx = new StopCMDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, jossParser.RULE_stopCMD);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.match(jossParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	demandCMD() {
	    let localctx = new DemandCMDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, jossParser.RULE_demandCMD);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(jossParser.T__10);
	        this.state = 208;
	        this.variable();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	toCMD() {
	    let localctx = new ToCMDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, jossParser.RULE_toCMD);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(jossParser.T__11);
	        this.state = 211;
	        this.toSel();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	toSel() {
	    let localctx = new ToSelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, jossParser.RULE_toSel);
	    try {
	        this.state = 215;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case jossParser.T__28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 213;
	            this.stepSel();
	            break;
	        case jossParser.T__29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 214;
	            this.partSel();
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



	setCMD() {
	    let localctx = new SetCMDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, jossParser.RULE_setCMD);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.match(jossParser.T__12);
	        this.state = 218;
	        this.assignment();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	doCMD() {
	    let localctx = new DoCMDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, jossParser.RULE_doCMD);
	    try {
	        this.state = 226;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 220;
	            this.match(jossParser.T__13);
	            this.state = 221;
	            this.doSel();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 222;
	            this.match(jossParser.T__13);
	            this.state = 223;
	            this.doSel();
	            this.state = 224;
	            this.conditional();
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



	doSel() {
	    let localctx = new DoSelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, jossParser.RULE_doSel);
	    try {
	        this.state = 230;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case jossParser.T__28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 228;
	            this.stepSel();
	            break;
	        case jossParser.T__29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 229;
	            this.partSel();
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



	typeCMD() {
	    let localctx = new TypeCMDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, jossParser.RULE_typeCMD);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(jossParser.T__14);
	        this.state = 233;
	        this.typeContent();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeContent() {
	    let localctx = new TypeContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, jossParser.RULE_typeContent);
	    try {
	        this.state = 239;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 235;
	            this.typeForm();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 236;
	            this.typeData();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 237;
	            this.typeSel();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 238;
	            this.typeSys();
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



	typeSys() {
	    let localctx = new TypeSysContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, jossParser.RULE_typeSys);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << jossParser.T__15) | (1 << jossParser.T__16) | (1 << jossParser.T__17))) !== 0))) {
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



	typeForm() {
	    let localctx = new TypeFormContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, jossParser.RULE_typeForm);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.varList();
	        this.state = 244;
	        this.match(jossParser.T__18);
	        this.state = 245;
	        this.formSel();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeData() {
	    let localctx = new TypeDataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, jossParser.RULE_typeData);
	    try {
	        this.state = 252;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 247;
	            this.typeElem();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 248;
	            this.typeElem();
	            this.state = 249;
	            this.match(jossParser.T__19);
	            this.state = 250;
	            this.typeData();
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



	typeElem() {
	    let localctx = new TypeElemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, jossParser.RULE_typeElem);
	    try {
	        this.state = 258;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case jossParser.T__20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 254;
	            this.match(jossParser.T__20);
	            this.state = 255;
	            this.match(jossParser.STRING);
	            this.state = 256;
	            this.match(jossParser.T__20);
	            break;
	        case jossParser.ALPHA:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 257;
	            this.variable();
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



	typeSel() {
	    let localctx = new TypeSelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, jossParser.RULE_typeSel);
	    try {
	        this.state = 264;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case jossParser.T__28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 260;
	            this.stepSel();
	            break;
	        case jossParser.T__29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 261;
	            this.partSel();
	            break;
	        case jossParser.T__30:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 262;
	            this.formSel();
	            break;
	        case jossParser.T__4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 263;
	            this.typeAllSel();
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



	typeAllSel() {
	    let localctx = new TypeAllSelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, jossParser.RULE_typeAllSel);
	    try {
	        this.state = 269;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 266;
	            this.match(jossParser.T__4);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 267;
	            this.match(jossParser.T__4);
	            this.state = 268;
	            this.typeAllType();
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



	typeAllType() {
	    let localctx = new TypeAllTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, jossParser.RULE_typeAllType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << jossParser.T__5) | (1 << jossParser.T__6) | (1 << jossParser.T__7) | (1 << jossParser.T__21))) !== 0))) {
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



	deleteValCMD() {
	    let localctx = new DeleteValCMDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, jossParser.RULE_deleteValCMD);
	    try {
	        this.state = 276;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case jossParser.ALPHA:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 273;
	            this.varList();
	            break;
	        case jossParser.T__4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 274;
	            this.match(jossParser.T__4);
	            this.state = 275;
	            this.match(jossParser.T__21);
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



	formCMD() {
	    let localctx = new FormCMDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, jossParser.RULE_formCMD);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this.match(jossParser.T__22);
	        this.state = 279;
	        this.match(jossParser.PARTNUMBER);
	        this.state = 280;
	        this.match(jossParser.T__23);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formContent() {
	    let localctx = new FormContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, jossParser.RULE_formContent);
	    try {
	        this.state = 286;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 282;
	            this.formObject();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 283;
	            this.formObject();
	            this.state = 284;
	            this.formContent();
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



	formObject() {
	    let localctx = new FormObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, jossParser.RULE_formObject);
	    try {
	        this.state = 290;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case jossParser.T__24:
	        case jossParser.T__25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 288;
	            this.formPH();
	            break;
	        case jossParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 289;
	            this.match(jossParser.STRING);
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



	formPH() {
	    let localctx = new FormPHContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, jossParser.RULE_formPH);
	    try {
	        this.state = 294;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case jossParser.T__24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 292;
	            this.sciNotation();
	            break;
	        case jossParser.T__25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 293;
	            this.fixedNotation();
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



	sciNotation() {
	    let localctx = new SciNotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, jossParser.RULE_sciNotation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this.match(jossParser.T__24);
	        this.state = 297;
	        this.dot();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dot() {
	    let localctx = new DotContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, jossParser.RULE_dot);
	    try {
	        this.state = 302;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 299;
	            this.match(jossParser.T__0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 300;
	            this.match(jossParser.T__0);
	            this.state = 301;
	            this.dot();
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



	fixedNotation() {
	    let localctx = new FixedNotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, jossParser.RULE_fixedNotation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 304;
	        this.match(jossParser.T__25);
	        this.state = 305;
	        this.uScore();
	        this.state = 306;
	        this.match(jossParser.T__26);
	        this.state = 307;
	        this.uScore();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	uScore() {
	    let localctx = new UScoreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, jossParser.RULE_uScore);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 309;
	            this.match(jossParser.T__27);
	            this.state = 312; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===jossParser.T__27);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stepSel() {
	    let localctx = new StepSelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, jossParser.RULE_stepSel);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this.match(jossParser.T__28);
	        this.state = 315;
	        this.match(jossParser.STEPNUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	partSel() {
	    let localctx = new PartSelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, jossParser.RULE_partSel);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 317;
	        this.match(jossParser.T__29);
	        this.state = 318;
	        this.match(jossParser.PARTNUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formSel() {
	    let localctx = new FormSelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, jossParser.RULE_formSel);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this.match(jossParser.T__30);
	        this.state = 321;
	        this.match(jossParser.PARTNUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditional() {
	    let localctx = new ConditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, jossParser.RULE_conditional);
	    try {
	        this.state = 325;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case jossParser.T__31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 323;
	            this.if_();
	            break;
	        case jossParser.T__44:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 324;
	            this.for_();
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



	if_() {
	    let localctx = new If_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, jossParser.RULE_if_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 327;
	        this.match(jossParser.T__31);
	        this.state = 328;
	        this.boolExp();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	boolExp() {
	    let localctx = new BoolExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, jossParser.RULE_boolExp);
	    try {
	        this.state = 343;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 330;
	            this.match(jossParser.T__32);
	            this.state = 331;
	            this.boolExp();
	            this.state = 332;
	            this.match(jossParser.T__33);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 334;
	            this.match(jossParser.T__34);
	            this.state = 335;
	            this.boolExp();
	            this.state = 336;
	            this.match(jossParser.T__35);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 338;
	            this.comparison();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 339;
	            this.comparison();
	            this.state = 340;
	            this.boolOp();
	            this.state = 341;
	            this.boolExp();
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



	boolOp() {
	    let localctx = new BoolOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, jossParser.RULE_boolOp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 345;
	        _la = this._input.LA(1);
	        if(!(_la===jossParser.T__36 || _la===jossParser.T__37)) {
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



	comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, jossParser.RULE_comparison);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        this.mathExp();
	        this.state = 348;
	        this.boolComp();
	        this.state = 349;
	        this.mathExp();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	boolComp() {
	    let localctx = new BoolCompContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, jossParser.RULE_boolComp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 351;
	        _la = this._input.LA(1);
	        if(!(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (jossParser.T__38 - 39)) | (1 << (jossParser.T__39 - 39)) | (1 << (jossParser.T__40 - 39)) | (1 << (jossParser.T__41 - 39)) | (1 << (jossParser.T__42 - 39)) | (1 << (jossParser.T__43 - 39)))) !== 0))) {
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



	for_() {
	    let localctx = new For_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, jossParser.RULE_for_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 353;
	        this.match(jossParser.T__44);
	        this.state = 354;
	        this.range_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	range_() {
	    let localctx = new Range_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, jossParser.RULE_range_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356;
	        this.variable();
	        this.state = 357;
	        this.match(jossParser.T__38);
	        this.state = 358;
	        this.rangeExp();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rangeExp() {
	    let localctx = new RangeExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, jossParser.RULE_rangeExp);
	    try {
	        this.state = 365;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 360;
	            this.rangeVal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 361;
	            this.rangeVal();
	            this.state = 362;
	            this.match(jossParser.T__19);
	            this.state = 363;
	            this.rangeExp();
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



	rangeVal() {
	    let localctx = new RangeValContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, jossParser.RULE_rangeVal);
	    try {
	        this.state = 374;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 367;
	            this.mathExp();
	            this.state = 368;
	            this.match(jossParser.T__32);
	            this.state = 369;
	            this.mathExp();
	            this.state = 370;
	            this.match(jossParser.T__33);
	            this.state = 371;
	            this.rangeVal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 373;
	            this.mathExp();
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



	mathExp() {
	    let localctx = new MathExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, jossParser.RULE_mathExp);
	    try {
	        this.state = 381;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 376;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 377;
	            this.term();
	            this.state = 378;
	            this.match(jossParser.ADDOP);
	            this.state = 379;
	            this.mathExp();
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, jossParser.RULE_term);
	    try {
	        this.state = 388;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 383;
	            this.factor();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 384;
	            this.factor();
	            this.state = 385;
	            this.match(jossParser.MULOP);
	            this.state = 386;
	            this.term();
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



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, jossParser.RULE_factor);
	    try {
	        this.state = 399;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case jossParser.T__32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 390;
	            this.match(jossParser.T__32);
	            this.state = 391;
	            this.mathExp();
	            this.state = 392;
	            this.match(jossParser.T__33);
	            break;
	        case jossParser.T__34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 394;
	            this.match(jossParser.T__34);
	            this.state = 395;
	            this.mathExp();
	            this.state = 396;
	            this.match(jossParser.T__35);
	            break;
	        case jossParser.T__45:
	        case jossParser.T__46:
	        case jossParser.T__47:
	        case jossParser.T__48:
	        case jossParser.T__49:
	        case jossParser.T__50:
	        case jossParser.T__51:
	        case jossParser.T__52:
	        case jossParser.T__53:
	        case jossParser.T__54:
	        case jossParser.T__55:
	        case jossParser.T__56:
	        case jossParser.ALPHA:
	        case jossParser.NUMBER:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 398;
	            this.value();
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, jossParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
	        this.variable();
	        this.state = 402;
	        this.match(jossParser.T__38);
	        this.state = 403;
	        this.mathExp();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, jossParser.RULE_value);
	    try {
	        this.state = 408;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case jossParser.NUMBER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 405;
	            this.match(jossParser.NUMBER);
	            break;
	        case jossParser.ALPHA:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 406;
	            this.variable();
	            break;
	        case jossParser.T__45:
	        case jossParser.T__46:
	        case jossParser.T__47:
	        case jossParser.T__48:
	        case jossParser.T__49:
	        case jossParser.T__50:
	        case jossParser.T__51:
	        case jossParser.T__52:
	        case jossParser.T__53:
	        case jossParser.T__54:
	        case jossParser.T__55:
	        case jossParser.T__56:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 407;
	            this.function_();
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



	function_() {
	    let localctx = new Function_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, jossParser.RULE_function_);
	    try {
	        this.state = 422;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case jossParser.T__45:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 410;
	            this.funcSqrt();
	            break;
	        case jossParser.T__46:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 411;
	            this.funcLog();
	            break;
	        case jossParser.T__47:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 412;
	            this.funcExp();
	            break;
	        case jossParser.T__48:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 413;
	            this.funcSin();
	            break;
	        case jossParser.T__49:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 414;
	            this.funcCos();
	            break;
	        case jossParser.T__50:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 415;
	            this.funcIp();
	            break;
	        case jossParser.T__51:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 416;
	            this.funcFp();
	            break;
	        case jossParser.T__52:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 417;
	            this.funcDp();
	            break;
	        case jossParser.T__53:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 418;
	            this.funcXp();
	            break;
	        case jossParser.T__54:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 419;
	            this.funcSgn();
	            break;
	        case jossParser.T__55:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 420;
	            this.funcMax();
	            break;
	        case jossParser.T__56:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 421;
	            this.funcMin();
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



	funcSqrt() {
	    let localctx = new FuncSqrtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, jossParser.RULE_funcSqrt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 424;
	        this.match(jossParser.T__45);
	        this.state = 425;
	        this.mathExp();
	        this.state = 426;
	        this.match(jossParser.T__33);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcLog() {
	    let localctx = new FuncLogContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, jossParser.RULE_funcLog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 428;
	        this.match(jossParser.T__46);
	        this.state = 429;
	        this.mathExp();
	        this.state = 430;
	        this.match(jossParser.T__33);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcExp() {
	    let localctx = new FuncExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, jossParser.RULE_funcExp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 432;
	        this.match(jossParser.T__47);
	        this.state = 433;
	        this.mathExp();
	        this.state = 434;
	        this.match(jossParser.T__33);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcSin() {
	    let localctx = new FuncSinContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, jossParser.RULE_funcSin);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 436;
	        this.match(jossParser.T__48);
	        this.state = 437;
	        this.mathExp();
	        this.state = 438;
	        this.match(jossParser.T__33);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcCos() {
	    let localctx = new FuncCosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, jossParser.RULE_funcCos);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 440;
	        this.match(jossParser.T__49);
	        this.state = 441;
	        this.mathExp();
	        this.state = 442;
	        this.match(jossParser.T__33);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcIp() {
	    let localctx = new FuncIpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, jossParser.RULE_funcIp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 444;
	        this.match(jossParser.T__50);
	        this.state = 445;
	        this.mathExp();
	        this.state = 446;
	        this.match(jossParser.T__33);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcFp() {
	    let localctx = new FuncFpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 126, jossParser.RULE_funcFp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 448;
	        this.match(jossParser.T__51);
	        this.state = 449;
	        this.mathExp();
	        this.state = 450;
	        this.match(jossParser.T__33);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcDp() {
	    let localctx = new FuncDpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 128, jossParser.RULE_funcDp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 452;
	        this.match(jossParser.T__52);
	        this.state = 453;
	        this.mathExp();
	        this.state = 454;
	        this.match(jossParser.T__33);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcXp() {
	    let localctx = new FuncXpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 130, jossParser.RULE_funcXp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 456;
	        this.match(jossParser.T__53);
	        this.state = 457;
	        this.mathExp();
	        this.state = 458;
	        this.match(jossParser.T__33);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcSgn() {
	    let localctx = new FuncSgnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 132, jossParser.RULE_funcSgn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 460;
	        this.match(jossParser.T__54);
	        this.state = 461;
	        this.mathExp();
	        this.state = 462;
	        this.match(jossParser.T__33);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcMax() {
	    let localctx = new FuncMaxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 134, jossParser.RULE_funcMax);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 464;
	        this.match(jossParser.T__55);
	        this.state = 465;
	        this.mathExp();
	        this.state = 466;
	        this.match(jossParser.T__19);
	        this.state = 467;
	        this.argList();
	        this.state = 468;
	        this.match(jossParser.T__33);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcMin() {
	    let localctx = new FuncMinContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 136, jossParser.RULE_funcMin);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 470;
	        this.match(jossParser.T__56);
	        this.state = 471;
	        this.mathExp();
	        this.state = 472;
	        this.match(jossParser.T__19);
	        this.state = 473;
	        this.argList();
	        this.state = 474;
	        this.match(jossParser.T__33);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argList() {
	    let localctx = new ArgListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 138, jossParser.RULE_argList);
	    try {
	        this.state = 481;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 476;
	            this.mathExp();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 477;
	            this.mathExp();
	            this.state = 478;
	            this.match(jossParser.T__19);
	            this.state = 479;
	            this.argList();
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 140, jossParser.RULE_variable);
	    try {
	        this.state = 489;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 483;
	            this.match(jossParser.ALPHA);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 484;
	            this.match(jossParser.ALPHA);
	            this.state = 485;
	            this.match(jossParser.T__32);
	            this.state = 486;
	            this.mathExp();
	            this.state = 487;
	            this.match(jossParser.T__33);
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



	varList() {
	    let localctx = new VarListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 142, jossParser.RULE_varList);
	    try {
	        this.state = 496;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 491;
	            this.variable();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 492;
	            this.variable();
	            this.state = 493;
	            this.match(jossParser.T__19);
	            this.state = 494;
	            this.varList();
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

jossParser.EOF = antlr4.Token.EOF;
jossParser.T__0 = 1;
jossParser.T__1 = 2;
jossParser.T__2 = 3;
jossParser.T__3 = 4;
jossParser.T__4 = 5;
jossParser.T__5 = 6;
jossParser.T__6 = 7;
jossParser.T__7 = 8;
jossParser.T__8 = 9;
jossParser.T__9 = 10;
jossParser.T__10 = 11;
jossParser.T__11 = 12;
jossParser.T__12 = 13;
jossParser.T__13 = 14;
jossParser.T__14 = 15;
jossParser.T__15 = 16;
jossParser.T__16 = 17;
jossParser.T__17 = 18;
jossParser.T__18 = 19;
jossParser.T__19 = 20;
jossParser.T__20 = 21;
jossParser.T__21 = 22;
jossParser.T__22 = 23;
jossParser.T__23 = 24;
jossParser.T__24 = 25;
jossParser.T__25 = 26;
jossParser.T__26 = 27;
jossParser.T__27 = 28;
jossParser.T__28 = 29;
jossParser.T__29 = 30;
jossParser.T__30 = 31;
jossParser.T__31 = 32;
jossParser.T__32 = 33;
jossParser.T__33 = 34;
jossParser.T__34 = 35;
jossParser.T__35 = 36;
jossParser.T__36 = 37;
jossParser.T__37 = 38;
jossParser.T__38 = 39;
jossParser.T__39 = 40;
jossParser.T__40 = 41;
jossParser.T__41 = 42;
jossParser.T__42 = 43;
jossParser.T__43 = 44;
jossParser.T__44 = 45;
jossParser.T__45 = 46;
jossParser.T__46 = 47;
jossParser.T__47 = 48;
jossParser.T__48 = 49;
jossParser.T__49 = 50;
jossParser.T__50 = 51;
jossParser.T__51 = 52;
jossParser.T__52 = 53;
jossParser.T__53 = 54;
jossParser.T__54 = 55;
jossParser.T__55 = 56;
jossParser.T__56 = 57;
jossParser.LINECMD = 58;
jossParser.PAGECMD = 59;
jossParser.MULOP = 60;
jossParser.ADDOP = 61;
jossParser.STRING = 62;
jossParser.CHAR = 63;
jossParser.ALPHA = 64;
jossParser.SPECIALCHAR = 65;
jossParser.NUMBER = 66;
jossParser.NUMBERPART = 67;
jossParser.INTPART = 68;
jossParser.DECIMALPART = 69;
jossParser.DIGIT = 70;
jossParser.NZDIGIT = 71;
jossParser.SIGN = 72;
jossParser.PARTNUMBER = 73;
jossParser.STEPNUMBER = 74;
jossParser.WS = 75;

jossParser.RULE_prog = 0;
jossParser.RULE_statement = 1;
jossParser.RULE_direct = 2;
jossParser.RULE_indirect_ = 3;
jossParser.RULE_indirectCMD = 4;
jossParser.RULE_arbitraryCMD = 5;
jossParser.RULE_goCMD = 6;
jossParser.RULE_cancelCMD = 7;
jossParser.RULE_deleteCmdCMD = 8;
jossParser.RULE_delCmdSel = 9;
jossParser.RULE_delCmdAllSel = 10;
jossParser.RULE_delCmdAllType = 11;
jossParser.RULE_doneCMD = 12;
jossParser.RULE_stopCMD = 13;
jossParser.RULE_demandCMD = 14;
jossParser.RULE_toCMD = 15;
jossParser.RULE_toSel = 16;
jossParser.RULE_setCMD = 17;
jossParser.RULE_doCMD = 18;
jossParser.RULE_doSel = 19;
jossParser.RULE_typeCMD = 20;
jossParser.RULE_typeContent = 21;
jossParser.RULE_typeSys = 22;
jossParser.RULE_typeForm = 23;
jossParser.RULE_typeData = 24;
jossParser.RULE_typeElem = 25;
jossParser.RULE_typeSel = 26;
jossParser.RULE_typeAllSel = 27;
jossParser.RULE_typeAllType = 28;
jossParser.RULE_deleteValCMD = 29;
jossParser.RULE_formCMD = 30;
jossParser.RULE_formContent = 31;
jossParser.RULE_formObject = 32;
jossParser.RULE_formPH = 33;
jossParser.RULE_sciNotation = 34;
jossParser.RULE_dot = 35;
jossParser.RULE_fixedNotation = 36;
jossParser.RULE_uScore = 37;
jossParser.RULE_stepSel = 38;
jossParser.RULE_partSel = 39;
jossParser.RULE_formSel = 40;
jossParser.RULE_conditional = 41;
jossParser.RULE_if_ = 42;
jossParser.RULE_boolExp = 43;
jossParser.RULE_boolOp = 44;
jossParser.RULE_comparison = 45;
jossParser.RULE_boolComp = 46;
jossParser.RULE_for_ = 47;
jossParser.RULE_range_ = 48;
jossParser.RULE_rangeExp = 49;
jossParser.RULE_rangeVal = 50;
jossParser.RULE_mathExp = 51;
jossParser.RULE_term = 52;
jossParser.RULE_factor = 53;
jossParser.RULE_assignment = 54;
jossParser.RULE_value = 55;
jossParser.RULE_function_ = 56;
jossParser.RULE_funcSqrt = 57;
jossParser.RULE_funcLog = 58;
jossParser.RULE_funcExp = 59;
jossParser.RULE_funcSin = 60;
jossParser.RULE_funcCos = 61;
jossParser.RULE_funcIp = 62;
jossParser.RULE_funcFp = 63;
jossParser.RULE_funcDp = 64;
jossParser.RULE_funcXp = 65;
jossParser.RULE_funcSgn = 66;
jossParser.RULE_funcMax = 67;
jossParser.RULE_funcMin = 68;
jossParser.RULE_argList = 69;
jossParser.RULE_variable = 70;
jossParser.RULE_varList = 71;

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
        this.ruleIndex = jossParser.RULE_prog;
    }

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
	    if(listener instanceof jossListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitProg(this);
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
        this.ruleIndex = jossParser.RULE_statement;
    }

	direct() {
	    return this.getTypedRuleContext(DirectContext,0);
	};

	indirect_() {
	    return this.getTypedRuleContext(Indirect_Context,0);
	};

	formCMD() {
	    return this.getTypedRuleContext(FormCMDContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitStatement(this);
		}
	}


}



class DirectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_direct;
    }

	cancelCMD() {
	    return this.getTypedRuleContext(CancelCMDContext,0);
	};

	deleteCmdCMD() {
	    return this.getTypedRuleContext(DeleteCmdCMDContext,0);
	};

	goCMD() {
	    return this.getTypedRuleContext(GoCMDContext,0);
	};

	arbitraryCMD() {
	    return this.getTypedRuleContext(ArbitraryCMDContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterDirect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitDirect(this);
		}
	}


}



class Indirect_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_indirect_;
    }

	STEPNUMBER() {
	    return this.getToken(jossParser.STEPNUMBER, 0);
	};

	indirectCMD() {
	    return this.getTypedRuleContext(IndirectCMDContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterIndirect_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitIndirect_(this);
		}
	}


}



class IndirectCMDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_indirectCMD;
    }

	toCMD() {
	    return this.getTypedRuleContext(ToCMDContext,0);
	};

	doneCMD() {
	    return this.getTypedRuleContext(DoneCMDContext,0);
	};

	stopCMD() {
	    return this.getTypedRuleContext(StopCMDContext,0);
	};

	demandCMD() {
	    return this.getTypedRuleContext(DemandCMDContext,0);
	};

	arbitraryCMD() {
	    return this.getTypedRuleContext(ArbitraryCMDContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterIndirectCMD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitIndirectCMD(this);
		}
	}


}



class ArbitraryCMDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_arbitraryCMD;
    }

	setCMD() {
	    return this.getTypedRuleContext(SetCMDContext,0);
	};

	doCMD() {
	    return this.getTypedRuleContext(DoCMDContext,0);
	};

	typeCMD() {
	    return this.getTypedRuleContext(TypeCMDContext,0);
	};

	deleteValCMD() {
	    return this.getTypedRuleContext(DeleteValCMDContext,0);
	};

	LINECMD() {
	    return this.getToken(jossParser.LINECMD, 0);
	};

	PAGECMD() {
	    return this.getToken(jossParser.PAGECMD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterArbitraryCMD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitArbitraryCMD(this);
		}
	}


}



class GoCMDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_goCMD;
    }


	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterGoCMD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitGoCMD(this);
		}
	}


}



class CancelCMDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_cancelCMD;
    }


	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterCancelCMD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitCancelCMD(this);
		}
	}


}



class DeleteCmdCMDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_deleteCmdCMD;
    }

	delCmdSel() {
	    return this.getTypedRuleContext(DelCmdSelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterDeleteCmdCMD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitDeleteCmdCMD(this);
		}
	}


}



class DelCmdSelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_delCmdSel;
    }

	stepSel() {
	    return this.getTypedRuleContext(StepSelContext,0);
	};

	partSel() {
	    return this.getTypedRuleContext(PartSelContext,0);
	};

	formSel() {
	    return this.getTypedRuleContext(FormSelContext,0);
	};

	delCmdAllSel() {
	    return this.getTypedRuleContext(DelCmdAllSelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterDelCmdSel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitDelCmdSel(this);
		}
	}


}



class DelCmdAllSelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_delCmdAllSel;
    }

	delCmdAllType() {
	    return this.getTypedRuleContext(DelCmdAllTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterDelCmdAllSel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitDelCmdAllSel(this);
		}
	}


}



class DelCmdAllTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_delCmdAllType;
    }


	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterDelCmdAllType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitDelCmdAllType(this);
		}
	}


}



class DoneCMDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_doneCMD;
    }


	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterDoneCMD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitDoneCMD(this);
		}
	}


}



class StopCMDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_stopCMD;
    }


	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterStopCMD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitStopCMD(this);
		}
	}


}



class DemandCMDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_demandCMD;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterDemandCMD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitDemandCMD(this);
		}
	}


}



class ToCMDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_toCMD;
    }

	toSel() {
	    return this.getTypedRuleContext(ToSelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterToCMD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitToCMD(this);
		}
	}


}



class ToSelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_toSel;
    }

	stepSel() {
	    return this.getTypedRuleContext(StepSelContext,0);
	};

	partSel() {
	    return this.getTypedRuleContext(PartSelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterToSel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitToSel(this);
		}
	}


}



class SetCMDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_setCMD;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterSetCMD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitSetCMD(this);
		}
	}


}



class DoCMDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_doCMD;
    }

	doSel() {
	    return this.getTypedRuleContext(DoSelContext,0);
	};

	conditional() {
	    return this.getTypedRuleContext(ConditionalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterDoCMD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitDoCMD(this);
		}
	}


}



class DoSelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_doSel;
    }

	stepSel() {
	    return this.getTypedRuleContext(StepSelContext,0);
	};

	partSel() {
	    return this.getTypedRuleContext(PartSelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterDoSel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitDoSel(this);
		}
	}


}



class TypeCMDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_typeCMD;
    }

	typeContent() {
	    return this.getTypedRuleContext(TypeContentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterTypeCMD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitTypeCMD(this);
		}
	}


}



class TypeContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_typeContent;
    }

	typeForm() {
	    return this.getTypedRuleContext(TypeFormContext,0);
	};

	typeData() {
	    return this.getTypedRuleContext(TypeDataContext,0);
	};

	typeSel() {
	    return this.getTypedRuleContext(TypeSelContext,0);
	};

	typeSys() {
	    return this.getTypedRuleContext(TypeSysContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterTypeContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitTypeContent(this);
		}
	}


}



class TypeSysContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_typeSys;
    }


	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterTypeSys(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitTypeSys(this);
		}
	}


}



class TypeFormContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_typeForm;
    }

	varList() {
	    return this.getTypedRuleContext(VarListContext,0);
	};

	formSel() {
	    return this.getTypedRuleContext(FormSelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterTypeForm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitTypeForm(this);
		}
	}


}



class TypeDataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_typeData;
    }

	typeElem() {
	    return this.getTypedRuleContext(TypeElemContext,0);
	};

	typeData() {
	    return this.getTypedRuleContext(TypeDataContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterTypeData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitTypeData(this);
		}
	}


}



class TypeElemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_typeElem;
    }

	STRING() {
	    return this.getToken(jossParser.STRING, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterTypeElem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitTypeElem(this);
		}
	}


}



class TypeSelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_typeSel;
    }

	stepSel() {
	    return this.getTypedRuleContext(StepSelContext,0);
	};

	partSel() {
	    return this.getTypedRuleContext(PartSelContext,0);
	};

	formSel() {
	    return this.getTypedRuleContext(FormSelContext,0);
	};

	typeAllSel() {
	    return this.getTypedRuleContext(TypeAllSelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterTypeSel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitTypeSel(this);
		}
	}


}



class TypeAllSelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_typeAllSel;
    }

	typeAllType() {
	    return this.getTypedRuleContext(TypeAllTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterTypeAllSel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitTypeAllSel(this);
		}
	}


}



class TypeAllTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_typeAllType;
    }


	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterTypeAllType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitTypeAllType(this);
		}
	}


}



class DeleteValCMDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_deleteValCMD;
    }

	varList() {
	    return this.getTypedRuleContext(VarListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterDeleteValCMD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitDeleteValCMD(this);
		}
	}


}



class FormCMDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_formCMD;
    }

	PARTNUMBER() {
	    return this.getToken(jossParser.PARTNUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFormCMD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFormCMD(this);
		}
	}


}



class FormContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_formContent;
    }

	formObject() {
	    return this.getTypedRuleContext(FormObjectContext,0);
	};

	formContent() {
	    return this.getTypedRuleContext(FormContentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFormContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFormContent(this);
		}
	}


}



class FormObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_formObject;
    }

	formPH() {
	    return this.getTypedRuleContext(FormPHContext,0);
	};

	STRING() {
	    return this.getToken(jossParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFormObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFormObject(this);
		}
	}


}



class FormPHContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_formPH;
    }

	sciNotation() {
	    return this.getTypedRuleContext(SciNotationContext,0);
	};

	fixedNotation() {
	    return this.getTypedRuleContext(FixedNotationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFormPH(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFormPH(this);
		}
	}


}



class SciNotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_sciNotation;
    }

	dot() {
	    return this.getTypedRuleContext(DotContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterSciNotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitSciNotation(this);
		}
	}


}



class DotContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_dot;
    }

	dot() {
	    return this.getTypedRuleContext(DotContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterDot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitDot(this);
		}
	}


}



class FixedNotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_fixedNotation;
    }

	uScore = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UScoreContext);
	    } else {
	        return this.getTypedRuleContext(UScoreContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFixedNotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFixedNotation(this);
		}
	}


}



class UScoreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_uScore;
    }


	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterUScore(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitUScore(this);
		}
	}


}



class StepSelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_stepSel;
    }

	STEPNUMBER() {
	    return this.getToken(jossParser.STEPNUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterStepSel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitStepSel(this);
		}
	}


}



class PartSelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_partSel;
    }

	PARTNUMBER() {
	    return this.getToken(jossParser.PARTNUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterPartSel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitPartSel(this);
		}
	}


}



class FormSelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_formSel;
    }

	PARTNUMBER() {
	    return this.getToken(jossParser.PARTNUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFormSel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFormSel(this);
		}
	}


}



class ConditionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_conditional;
    }

	if_() {
	    return this.getTypedRuleContext(If_Context,0);
	};

	for_() {
	    return this.getTypedRuleContext(For_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterConditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitConditional(this);
		}
	}


}



class If_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_if_;
    }

	boolExp() {
	    return this.getTypedRuleContext(BoolExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterIf_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitIf_(this);
		}
	}


}



class BoolExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_boolExp;
    }

	boolExp() {
	    return this.getTypedRuleContext(BoolExpContext,0);
	};

	comparison() {
	    return this.getTypedRuleContext(ComparisonContext,0);
	};

	boolOp() {
	    return this.getTypedRuleContext(BoolOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterBoolExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitBoolExp(this);
		}
	}


}



class BoolOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_boolOp;
    }


	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterBoolOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitBoolOp(this);
		}
	}


}



class ComparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_comparison;
    }

	mathExp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathExpContext);
	    } else {
	        return this.getTypedRuleContext(MathExpContext,i);
	    }
	};

	boolComp() {
	    return this.getTypedRuleContext(BoolCompContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitComparison(this);
		}
	}


}



class BoolCompContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_boolComp;
    }


	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterBoolComp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitBoolComp(this);
		}
	}


}



class For_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_for_;
    }

	range_() {
	    return this.getTypedRuleContext(Range_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFor_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFor_(this);
		}
	}


}



class Range_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_range_;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	rangeExp() {
	    return this.getTypedRuleContext(RangeExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterRange_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitRange_(this);
		}
	}


}



class RangeExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_rangeExp;
    }

	rangeVal() {
	    return this.getTypedRuleContext(RangeValContext,0);
	};

	rangeExp() {
	    return this.getTypedRuleContext(RangeExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterRangeExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitRangeExp(this);
		}
	}


}



class RangeValContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_rangeVal;
    }

	mathExp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MathExpContext);
	    } else {
	        return this.getTypedRuleContext(MathExpContext,i);
	    }
	};

	rangeVal() {
	    return this.getTypedRuleContext(RangeValContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterRangeVal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitRangeVal(this);
		}
	}


}



class MathExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_mathExp;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	ADDOP() {
	    return this.getToken(jossParser.ADDOP, 0);
	};

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterMathExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitMathExp(this);
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
        this.ruleIndex = jossParser.RULE_term;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	MULOP() {
	    return this.getToken(jossParser.MULOP, 0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
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
        this.ruleIndex = jossParser.RULE_factor;
    }

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFactor(this);
		}
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_assignment;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitAssignment(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_value;
    }

	NUMBER() {
	    return this.getToken(jossParser.NUMBER, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	function_() {
	    return this.getTypedRuleContext(Function_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitValue(this);
		}
	}


}



class Function_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_function_;
    }

	funcSqrt() {
	    return this.getTypedRuleContext(FuncSqrtContext,0);
	};

	funcLog() {
	    return this.getTypedRuleContext(FuncLogContext,0);
	};

	funcExp() {
	    return this.getTypedRuleContext(FuncExpContext,0);
	};

	funcSin() {
	    return this.getTypedRuleContext(FuncSinContext,0);
	};

	funcCos() {
	    return this.getTypedRuleContext(FuncCosContext,0);
	};

	funcIp() {
	    return this.getTypedRuleContext(FuncIpContext,0);
	};

	funcFp() {
	    return this.getTypedRuleContext(FuncFpContext,0);
	};

	funcDp() {
	    return this.getTypedRuleContext(FuncDpContext,0);
	};

	funcXp() {
	    return this.getTypedRuleContext(FuncXpContext,0);
	};

	funcSgn() {
	    return this.getTypedRuleContext(FuncSgnContext,0);
	};

	funcMax() {
	    return this.getTypedRuleContext(FuncMaxContext,0);
	};

	funcMin() {
	    return this.getTypedRuleContext(FuncMinContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFunction_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFunction_(this);
		}
	}


}



class FuncSqrtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_funcSqrt;
    }

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFuncSqrt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFuncSqrt(this);
		}
	}


}



class FuncLogContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_funcLog;
    }

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFuncLog(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFuncLog(this);
		}
	}


}



class FuncExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_funcExp;
    }

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFuncExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFuncExp(this);
		}
	}


}



class FuncSinContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_funcSin;
    }

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFuncSin(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFuncSin(this);
		}
	}


}



class FuncCosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_funcCos;
    }

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFuncCos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFuncCos(this);
		}
	}


}



class FuncIpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_funcIp;
    }

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFuncIp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFuncIp(this);
		}
	}


}



class FuncFpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_funcFp;
    }

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFuncFp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFuncFp(this);
		}
	}


}



class FuncDpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_funcDp;
    }

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFuncDp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFuncDp(this);
		}
	}


}



class FuncXpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_funcXp;
    }

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFuncXp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFuncXp(this);
		}
	}


}



class FuncSgnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_funcSgn;
    }

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFuncSgn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFuncSgn(this);
		}
	}


}



class FuncMaxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_funcMax;
    }

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	argList() {
	    return this.getTypedRuleContext(ArgListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFuncMax(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFuncMax(this);
		}
	}


}



class FuncMinContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_funcMin;
    }

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	argList() {
	    return this.getTypedRuleContext(ArgListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterFuncMin(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitFuncMin(this);
		}
	}


}



class ArgListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_argList;
    }

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	argList() {
	    return this.getTypedRuleContext(ArgListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterArgList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitArgList(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_variable;
    }

	ALPHA() {
	    return this.getToken(jossParser.ALPHA, 0);
	};

	mathExp() {
	    return this.getTypedRuleContext(MathExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitVariable(this);
		}
	}


}



class VarListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jossParser.RULE_varList;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	varList() {
	    return this.getTypedRuleContext(VarListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.enterVarList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jossListener ) {
	        listener.exitVarList(this);
		}
	}


}




jossParser.ProgContext = ProgContext; 
jossParser.StatementContext = StatementContext; 
jossParser.DirectContext = DirectContext; 
jossParser.Indirect_Context = Indirect_Context; 
jossParser.IndirectCMDContext = IndirectCMDContext; 
jossParser.ArbitraryCMDContext = ArbitraryCMDContext; 
jossParser.GoCMDContext = GoCMDContext; 
jossParser.CancelCMDContext = CancelCMDContext; 
jossParser.DeleteCmdCMDContext = DeleteCmdCMDContext; 
jossParser.DelCmdSelContext = DelCmdSelContext; 
jossParser.DelCmdAllSelContext = DelCmdAllSelContext; 
jossParser.DelCmdAllTypeContext = DelCmdAllTypeContext; 
jossParser.DoneCMDContext = DoneCMDContext; 
jossParser.StopCMDContext = StopCMDContext; 
jossParser.DemandCMDContext = DemandCMDContext; 
jossParser.ToCMDContext = ToCMDContext; 
jossParser.ToSelContext = ToSelContext; 
jossParser.SetCMDContext = SetCMDContext; 
jossParser.DoCMDContext = DoCMDContext; 
jossParser.DoSelContext = DoSelContext; 
jossParser.TypeCMDContext = TypeCMDContext; 
jossParser.TypeContentContext = TypeContentContext; 
jossParser.TypeSysContext = TypeSysContext; 
jossParser.TypeFormContext = TypeFormContext; 
jossParser.TypeDataContext = TypeDataContext; 
jossParser.TypeElemContext = TypeElemContext; 
jossParser.TypeSelContext = TypeSelContext; 
jossParser.TypeAllSelContext = TypeAllSelContext; 
jossParser.TypeAllTypeContext = TypeAllTypeContext; 
jossParser.DeleteValCMDContext = DeleteValCMDContext; 
jossParser.FormCMDContext = FormCMDContext; 
jossParser.FormContentContext = FormContentContext; 
jossParser.FormObjectContext = FormObjectContext; 
jossParser.FormPHContext = FormPHContext; 
jossParser.SciNotationContext = SciNotationContext; 
jossParser.DotContext = DotContext; 
jossParser.FixedNotationContext = FixedNotationContext; 
jossParser.UScoreContext = UScoreContext; 
jossParser.StepSelContext = StepSelContext; 
jossParser.PartSelContext = PartSelContext; 
jossParser.FormSelContext = FormSelContext; 
jossParser.ConditionalContext = ConditionalContext; 
jossParser.If_Context = If_Context; 
jossParser.BoolExpContext = BoolExpContext; 
jossParser.BoolOpContext = BoolOpContext; 
jossParser.ComparisonContext = ComparisonContext; 
jossParser.BoolCompContext = BoolCompContext; 
jossParser.For_Context = For_Context; 
jossParser.Range_Context = Range_Context; 
jossParser.RangeExpContext = RangeExpContext; 
jossParser.RangeValContext = RangeValContext; 
jossParser.MathExpContext = MathExpContext; 
jossParser.TermContext = TermContext; 
jossParser.FactorContext = FactorContext; 
jossParser.AssignmentContext = AssignmentContext; 
jossParser.ValueContext = ValueContext; 
jossParser.Function_Context = Function_Context; 
jossParser.FuncSqrtContext = FuncSqrtContext; 
jossParser.FuncLogContext = FuncLogContext; 
jossParser.FuncExpContext = FuncExpContext; 
jossParser.FuncSinContext = FuncSinContext; 
jossParser.FuncCosContext = FuncCosContext; 
jossParser.FuncIpContext = FuncIpContext; 
jossParser.FuncFpContext = FuncFpContext; 
jossParser.FuncDpContext = FuncDpContext; 
jossParser.FuncXpContext = FuncXpContext; 
jossParser.FuncSgnContext = FuncSgnContext; 
jossParser.FuncMaxContext = FuncMaxContext; 
jossParser.FuncMinContext = FuncMinContext; 
jossParser.ArgListContext = ArgListContext; 
jossParser.VariableContext = VariableContext; 
jossParser.VarListContext = VarListContext; 
