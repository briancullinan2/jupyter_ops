// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/prov-n/PROV_N.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import PROV_NListener from './PROV_NListener.js';
const serializedATN = [4,1,52,505,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,1,0,1,0,3,0,105,8,0,1,0,5,0,108,8,0,10,0,12,0,111,9,0,
1,0,1,0,5,0,115,8,0,10,0,12,0,118,9,0,3,0,120,8,0,1,0,1,0,1,0,1,1,1,1,3,
1,127,8,1,1,1,5,1,130,8,1,10,1,12,1,133,9,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,
1,4,1,4,1,5,1,5,1,5,3,5,147,8,5,1,5,5,5,150,8,5,10,5,12,5,153,9,5,1,5,1,
5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,3,7,177,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,3,9,190,
8,9,1,10,1,10,1,10,1,10,5,10,196,8,10,10,10,12,10,199,9,10,3,10,201,8,10,
1,11,1,11,1,11,1,11,1,12,1,12,1,13,1,13,3,13,211,8,13,1,14,1,14,1,14,1,14,
1,15,1,15,1,16,1,16,3,16,221,8,16,1,16,1,16,3,16,225,8,16,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,3,17,235,8,17,1,17,1,17,1,17,1,18,1,18,3,18,242,
8,18,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,255,8,20,
1,20,1,20,1,20,1,21,1,21,1,21,3,21,263,8,21,1,22,1,22,3,22,267,8,22,1,23,
1,23,1,24,1,24,3,24,273,8,24,1,25,1,25,3,25,277,8,25,1,26,1,26,1,27,1,27,
3,27,283,8,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,3,31,293,8,31,1,32,
1,32,1,33,1,33,3,33,299,8,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,
3,34,310,8,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
1,35,1,35,3,35,326,8,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,
1,36,1,36,1,36,1,36,3,36,342,8,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,
1,37,1,37,1,37,1,37,3,37,356,8,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,
1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,
40,1,40,1,40,1,40,1,40,3,40,385,8,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,
1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,407,
8,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,
43,1,43,1,43,3,43,425,8,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,
1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,
46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,
1,48,5,48,466,8,48,10,48,12,48,469,9,48,1,48,1,48,1,48,1,49,1,49,1,49,1,
49,1,49,3,49,479,8,49,1,50,1,50,1,50,1,50,5,50,485,8,50,10,50,12,50,488,
9,50,1,50,1,50,1,50,1,50,1,50,1,50,5,50,496,8,50,10,50,12,50,499,9,50,1,
50,1,50,3,50,503,8,50,1,50,0,0,51,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,
78,80,82,84,86,88,90,92,94,96,98,100,0,1,1,0,42,43,510,0,102,1,0,0,0,2,126,
1,0,0,0,4,134,1,0,0,0,6,137,1,0,0,0,8,141,1,0,0,0,10,143,1,0,0,0,12,156,
1,0,0,0,14,176,1,0,0,0,16,178,1,0,0,0,18,189,1,0,0,0,20,200,1,0,0,0,22,202,
1,0,0,0,24,206,1,0,0,0,26,210,1,0,0,0,28,212,1,0,0,0,30,216,1,0,0,0,32,224,
1,0,0,0,34,226,1,0,0,0,36,241,1,0,0,0,38,243,1,0,0,0,40,245,1,0,0,0,42,262,
1,0,0,0,44,266,1,0,0,0,46,268,1,0,0,0,48,272,1,0,0,0,50,276,1,0,0,0,52,278,
1,0,0,0,54,282,1,0,0,0,56,284,1,0,0,0,58,286,1,0,0,0,60,288,1,0,0,0,62,292,
1,0,0,0,64,294,1,0,0,0,66,298,1,0,0,0,68,300,1,0,0,0,70,314,1,0,0,0,72,330,
1,0,0,0,74,346,1,0,0,0,76,360,1,0,0,0,78,369,1,0,0,0,80,375,1,0,0,0,82,389,
1,0,0,0,84,398,1,0,0,0,86,411,1,0,0,0,88,429,1,0,0,0,90,438,1,0,0,0,92,445,
1,0,0,0,94,452,1,0,0,0,96,459,1,0,0,0,98,478,1,0,0,0,100,502,1,0,0,0,102,
104,5,30,0,0,103,105,3,2,1,0,104,103,1,0,0,0,104,105,1,0,0,0,105,109,1,0,
0,0,106,108,3,14,7,0,107,106,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,109,
110,1,0,0,0,110,119,1,0,0,0,111,109,1,0,0,0,112,116,3,10,5,0,113,115,3,10,
5,0,114,113,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,
120,1,0,0,0,118,116,1,0,0,0,119,112,1,0,0,0,119,120,1,0,0,0,120,121,1,0,
0,0,121,122,5,31,0,0,122,123,5,0,0,1,123,1,1,0,0,0,124,127,3,4,2,0,125,127,
3,6,3,0,126,124,1,0,0,0,126,125,1,0,0,0,127,131,1,0,0,0,128,130,3,6,3,0,
129,128,1,0,0,0,130,133,1,0,0,0,131,129,1,0,0,0,131,132,1,0,0,0,132,3,1,
0,0,0,133,131,1,0,0,0,134,135,5,1,0,0,135,136,5,37,0,0,136,5,1,0,0,0,137,
138,5,2,0,0,138,139,5,42,0,0,139,140,3,8,4,0,140,7,1,0,0,0,141,142,5,37,
0,0,142,9,1,0,0,0,143,144,5,32,0,0,144,146,3,12,6,0,145,147,3,2,1,0,146,
145,1,0,0,0,146,147,1,0,0,0,147,151,1,0,0,0,148,150,3,14,7,0,149,148,1,0,
0,0,150,153,1,0,0,0,151,149,1,0,0,0,151,152,1,0,0,0,152,154,1,0,0,0,153,
151,1,0,0,0,154,155,5,33,0,0,155,11,1,0,0,0,156,157,7,0,0,0,157,13,1,0,0,
0,158,177,3,16,8,0,159,177,3,34,17,0,160,177,3,40,20,0,161,177,3,68,34,0,
162,177,3,70,35,0,163,177,3,72,36,0,164,177,3,74,37,0,165,177,3,76,38,0,
166,177,3,78,39,0,167,177,3,80,40,0,168,177,3,82,41,0,169,177,3,84,42,0,
170,177,3,86,43,0,171,177,3,88,44,0,172,177,3,90,45,0,173,177,3,92,46,0,
174,177,3,94,47,0,175,177,3,96,48,0,176,158,1,0,0,0,176,159,1,0,0,0,176,
160,1,0,0,0,176,161,1,0,0,0,176,162,1,0,0,0,176,163,1,0,0,0,176,164,1,0,
0,0,176,165,1,0,0,0,176,166,1,0,0,0,176,167,1,0,0,0,176,168,1,0,0,0,176,
169,1,0,0,0,176,170,1,0,0,0,176,171,1,0,0,0,176,172,1,0,0,0,176,173,1,0,
0,0,176,174,1,0,0,0,176,175,1,0,0,0,177,15,1,0,0,0,178,179,5,3,0,0,179,180,
5,4,0,0,180,181,3,12,6,0,181,182,3,18,9,0,182,183,5,5,0,0,183,17,1,0,0,0,
184,185,5,6,0,0,185,186,5,7,0,0,186,187,3,20,10,0,187,188,5,8,0,0,188,190,
1,0,0,0,189,184,1,0,0,0,189,190,1,0,0,0,190,19,1,0,0,0,191,201,1,0,0,0,192,
197,3,22,11,0,193,194,5,6,0,0,194,196,3,22,11,0,195,193,1,0,0,0,196,199,
1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,201,1,0,0,0,199,197,1,0,0,0,
200,191,1,0,0,0,200,192,1,0,0,0,201,21,1,0,0,0,202,203,3,24,12,0,203,204,
5,9,0,0,204,205,3,26,13,0,205,23,1,0,0,0,206,207,7,0,0,0,207,25,1,0,0,0,
208,211,3,28,14,0,209,211,3,32,16,0,210,208,1,0,0,0,210,209,1,0,0,0,211,
27,1,0,0,0,212,213,5,45,0,0,213,214,5,10,0,0,214,215,3,30,15,0,215,29,1,
0,0,0,216,217,7,0,0,0,217,31,1,0,0,0,218,220,5,45,0,0,219,221,5,52,0,0,220,
219,1,0,0,0,220,221,1,0,0,0,221,225,1,0,0,0,222,225,5,46,0,0,223,225,5,47,
0,0,224,218,1,0,0,0,224,222,1,0,0,0,224,223,1,0,0,0,225,33,1,0,0,0,226,227,
5,11,0,0,227,228,5,4,0,0,228,234,3,12,6,0,229,230,5,6,0,0,230,231,3,36,18,
0,231,232,5,6,0,0,232,233,3,36,18,0,233,235,1,0,0,0,234,229,1,0,0,0,234,
235,1,0,0,0,235,236,1,0,0,0,236,237,3,18,9,0,237,238,5,5,0,0,238,35,1,0,
0,0,239,242,3,38,19,0,240,242,5,41,0,0,241,239,1,0,0,0,241,240,1,0,0,0,242,
37,1,0,0,0,243,244,5,51,0,0,244,39,1,0,0,0,245,246,5,12,0,0,246,247,5,4,
0,0,247,248,3,42,21,0,248,254,3,46,23,0,249,250,5,6,0,0,250,251,3,50,25,
0,251,252,5,6,0,0,252,253,3,36,18,0,253,255,1,0,0,0,254,249,1,0,0,0,254,
255,1,0,0,0,255,256,1,0,0,0,256,257,3,18,9,0,257,258,5,5,0,0,258,41,1,0,
0,0,259,260,3,44,22,0,260,261,5,13,0,0,261,263,1,0,0,0,262,259,1,0,0,0,262,
263,1,0,0,0,263,43,1,0,0,0,264,267,3,12,6,0,265,267,5,41,0,0,266,264,1,0,
0,0,266,265,1,0,0,0,267,45,1,0,0,0,268,269,3,12,6,0,269,47,1,0,0,0,270,273,
3,46,23,0,271,273,5,41,0,0,272,270,1,0,0,0,272,271,1,0,0,0,273,49,1,0,0,
0,274,277,3,52,26,0,275,277,5,41,0,0,276,274,1,0,0,0,276,275,1,0,0,0,277,
51,1,0,0,0,278,279,3,12,6,0,279,53,1,0,0,0,280,283,3,56,28,0,281,283,5,41,
0,0,282,280,1,0,0,0,282,281,1,0,0,0,283,55,1,0,0,0,284,285,3,12,6,0,285,
57,1,0,0,0,286,287,3,12,6,0,287,59,1,0,0,0,288,289,3,12,6,0,289,61,1,0,0,
0,290,293,3,60,30,0,291,293,5,41,0,0,292,290,1,0,0,0,292,291,1,0,0,0,293,
63,1,0,0,0,294,295,3,12,6,0,295,65,1,0,0,0,296,299,3,64,32,0,297,299,5,41,
0,0,298,296,1,0,0,0,298,297,1,0,0,0,299,67,1,0,0,0,300,301,5,14,0,0,301,
302,5,4,0,0,302,303,3,42,21,0,303,309,3,52,26,0,304,305,5,6,0,0,305,306,
3,48,24,0,306,307,5,6,0,0,307,308,3,36,18,0,308,310,1,0,0,0,309,304,1,0,
0,0,309,310,1,0,0,0,310,311,1,0,0,0,311,312,3,18,9,0,312,313,5,5,0,0,313,
69,1,0,0,0,314,315,5,15,0,0,315,316,5,4,0,0,316,317,3,42,21,0,317,325,3,
52,26,0,318,319,5,6,0,0,319,320,3,48,24,0,320,321,5,6,0,0,321,322,3,50,25,
0,322,323,5,6,0,0,323,324,3,36,18,0,324,326,1,0,0,0,325,318,1,0,0,0,325,
326,1,0,0,0,326,327,1,0,0,0,327,328,3,18,9,0,328,329,5,5,0,0,329,71,1,0,
0,0,330,331,5,16,0,0,331,332,5,4,0,0,332,333,3,42,21,0,333,341,3,52,26,0,
334,335,5,6,0,0,335,336,3,48,24,0,336,337,5,6,0,0,337,338,3,50,25,0,338,
339,5,6,0,0,339,340,3,36,18,0,340,342,1,0,0,0,341,334,1,0,0,0,341,342,1,
0,0,0,342,343,1,0,0,0,343,344,3,18,9,0,344,345,5,5,0,0,345,73,1,0,0,0,346,
347,5,17,0,0,347,348,5,4,0,0,348,349,3,42,21,0,349,355,3,46,23,0,350,351,
5,6,0,0,351,352,3,50,25,0,352,353,5,6,0,0,353,354,3,36,18,0,354,356,1,0,
0,0,355,350,1,0,0,0,355,356,1,0,0,0,356,357,1,0,0,0,357,358,3,18,9,0,358,
359,5,5,0,0,359,75,1,0,0,0,360,361,5,18,0,0,361,362,5,4,0,0,362,363,3,42,
21,0,363,364,3,52,26,0,364,365,5,6,0,0,365,366,3,52,26,0,366,367,3,18,9,
0,367,368,5,5,0,0,368,77,1,0,0,0,369,370,5,19,0,0,370,371,5,4,0,0,371,372,
3,12,6,0,372,373,3,18,9,0,373,374,5,5,0,0,374,79,1,0,0,0,375,376,5,20,0,
0,376,377,5,4,0,0,377,378,3,42,21,0,378,384,3,52,26,0,379,380,5,6,0,0,380,
381,3,54,27,0,381,382,5,6,0,0,382,383,3,48,24,0,383,385,1,0,0,0,384,379,
1,0,0,0,384,385,1,0,0,0,385,386,1,0,0,0,386,387,3,18,9,0,387,388,5,5,0,0,
388,81,1,0,0,0,389,390,5,21,0,0,390,391,5,4,0,0,391,392,3,42,21,0,392,393,
3,46,23,0,393,394,5,6,0,0,394,395,3,56,28,0,395,396,3,18,9,0,396,397,5,5,
0,0,397,83,1,0,0,0,398,399,5,22,0,0,399,400,5,4,0,0,400,401,3,42,21,0,401,
402,3,56,28,0,402,403,5,6,0,0,403,406,3,56,28,0,404,405,5,6,0,0,405,407,
3,50,25,0,406,404,1,0,0,0,406,407,1,0,0,0,407,408,1,0,0,0,408,409,3,18,9,
0,409,410,5,5,0,0,410,85,1,0,0,0,411,412,5,23,0,0,412,413,5,4,0,0,413,414,
3,42,21,0,414,415,3,46,23,0,415,416,5,6,0,0,416,424,3,46,23,0,417,418,5,
6,0,0,418,419,3,50,25,0,419,420,5,6,0,0,420,421,3,62,31,0,421,422,5,6,0,
0,422,423,3,66,33,0,423,425,1,0,0,0,424,417,1,0,0,0,424,425,1,0,0,0,425,
426,1,0,0,0,426,427,3,18,9,0,427,428,5,5,0,0,428,87,1,0,0,0,429,430,5,24,
0,0,430,431,5,4,0,0,431,432,3,42,21,0,432,433,3,46,23,0,433,434,5,6,0,0,
434,435,3,46,23,0,435,436,3,18,9,0,436,437,5,5,0,0,437,89,1,0,0,0,438,439,
5,25,0,0,439,440,5,4,0,0,440,441,3,46,23,0,441,442,5,6,0,0,442,443,3,46,
23,0,443,444,5,5,0,0,444,91,1,0,0,0,445,446,5,26,0,0,446,447,5,4,0,0,447,
448,3,46,23,0,448,449,5,6,0,0,449,450,3,46,23,0,450,451,5,5,0,0,451,93,1,
0,0,0,452,453,5,27,0,0,453,454,5,4,0,0,454,455,3,58,29,0,455,456,5,6,0,0,
456,457,3,46,23,0,457,458,5,5,0,0,458,95,1,0,0,0,459,460,7,0,0,0,460,461,
5,4,0,0,461,462,3,42,21,0,462,467,3,98,49,0,463,464,5,6,0,0,464,466,3,98,
49,0,465,463,1,0,0,0,466,469,1,0,0,0,467,465,1,0,0,0,467,468,1,0,0,0,468,
470,1,0,0,0,469,467,1,0,0,0,470,471,3,18,9,0,471,472,5,5,0,0,472,97,1,0,
0,0,473,479,3,44,22,0,474,479,3,26,13,0,475,479,3,38,19,0,476,479,3,96,48,
0,477,479,3,100,50,0,478,473,1,0,0,0,478,474,1,0,0,0,478,475,1,0,0,0,478,
476,1,0,0,0,478,477,1,0,0,0,479,99,1,0,0,0,480,481,5,28,0,0,481,486,3,98,
49,0,482,483,5,6,0,0,483,485,3,98,49,0,484,482,1,0,0,0,485,488,1,0,0,0,486,
484,1,0,0,0,486,487,1,0,0,0,487,489,1,0,0,0,488,486,1,0,0,0,489,490,5,29,
0,0,490,503,1,0,0,0,491,492,5,4,0,0,492,497,3,98,49,0,493,494,5,6,0,0,494,
496,3,98,49,0,495,493,1,0,0,0,496,499,1,0,0,0,497,495,1,0,0,0,497,498,1,
0,0,0,498,500,1,0,0,0,499,497,1,0,0,0,500,501,5,5,0,0,501,503,1,0,0,0,502,
480,1,0,0,0,502,491,1,0,0,0,503,101,1,0,0,0,37,104,109,116,119,126,131,146,
151,176,189,197,200,210,220,224,234,241,254,262,266,272,276,282,292,298,
309,325,341,355,384,406,424,467,478,486,497,502];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PROV_NParser extends antlr4.Parser {

    static grammarFileName = "PROV_N.g4";
    static literalNames = [ null, "'default'", "'prefix'", "'entity'", "'('", 
                            "')'", "','", "'['", "']'", "'='", "'%%'", "'activity'", 
                            "'wasGeneratedBy'", "';'", "'used'", "'wasStartedBy'", 
                            "'wasEndedBy'", "'wasInvalidatedBy'", "'wasInformedBy'", 
                            "'agent'", "'wasAssociatedWith'", "'wasAttributedTo'", 
                            "'actedOnBehalfOf'", "'wasDerivedFrom'", "'wasInfluencedBy'", 
                            "'alternateOf'", "'specializationOf'", "'hadMember'", 
                            "'{'", "'}'", "'document'", "'endDocument'", 
                            "'bundle'", "'endBundle'", null, null, null, 
                            null, "'<'", "'>'", "'.'", "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "DOCUMENT", 
                             "ENDDOCUMENT", "BUNDLE", "ENDBUNDLE", "WS", 
                             "COMMENT", "LINE_COMMENT", "IRI_REF", "LESS", 
                             "GREATER", "DOT", "MINUS", "PREFX", "QUALIFIED_NAME", 
                             "HEX", "STRING_LITERAL", "INT_LITERAL", "QUALIFIED_NAME_LITERAL", 
                             "ECHAR", "STRING_LITERAL2", "STRING_LITERAL_LONG2", 
                             "DATETIME", "LANGTAG" ];
    static ruleNames = [ "document", "namespaceDeclarations", "defaultNamespaceDeclaration", 
                         "namespaceDeclaration", "namespace_", "bundle", 
                         "identifier", "expression", "entityExpression", 
                         "optionalAttributeValuePairs", "attributeValuePairs", 
                         "attributeValuePair", "attribute", "literal", "typedLiteral", 
                         "datatype", "convenienceNotation", "activityExpression", 
                         "timeOrMarker", "time", "generationExpression", 
                         "optionalIdentifier", "identifierOrMarker", "eIdentifier", 
                         "eIdentifierOrMarker", "aIdentifierOrMarker", "aIdentifier", 
                         "agIdentifierOrMarker", "agIdentifier", "cIdentifier", 
                         "gIdentifier", "gIdentifierOrMarker", "uIdentifier", 
                         "uIdentifierOrMarker", "usageExpression", "startExpression", 
                         "endExpression", "invalidationExpression", "communicationExpression", 
                         "agentExpression", "associationExpression", "attributionExpression", 
                         "delegationExpression", "derivationExpression", 
                         "influenceExpression", "alternateExpression", "specializationExpression", 
                         "membershipExpression", "extensibilityExpression", 
                         "extensibilityArgument", "extensibilityTuple" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PROV_NParser.ruleNames;
        this.literalNames = PROV_NParser.literalNames;
        this.symbolicNames = PROV_NParser.symbolicNames;
    }



	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PROV_NParser.RULE_document);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(PROV_NParser.DOCUMENT);
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1 || _la===2) {
	            this.state = 103;
	            this.namespaceDeclarations();
	        }

	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 268425224) !== 0) || _la===42 || _la===43) {
	            this.state = 106;
	            this.expression();
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 112;
	            this.bundle();
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===32) {
	                this.state = 113;
	                this.bundle();
	                this.state = 118;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 121;
	        this.match(PROV_NParser.ENDDOCUMENT);
	        this.state = 122;
	        this.match(PROV_NParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	namespaceDeclarations() {
	    let localctx = new NamespaceDeclarationsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PROV_NParser.RULE_namespaceDeclarations);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.state = 124;
	            this.defaultNamespaceDeclaration();
	            break;
	        case 2:
	            this.state = 125;
	            this.namespaceDeclaration();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 128;
	            this.namespaceDeclaration();
	            this.state = 133;
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



	defaultNamespaceDeclaration() {
	    let localctx = new DefaultNamespaceDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PROV_NParser.RULE_defaultNamespaceDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(PROV_NParser.T__0);
	        this.state = 135;
	        this.match(PROV_NParser.IRI_REF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	namespaceDeclaration() {
	    let localctx = new NamespaceDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PROV_NParser.RULE_namespaceDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(PROV_NParser.T__1);
	        this.state = 138;
	        this.match(PROV_NParser.PREFX);
	        this.state = 139;
	        this.namespace_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	namespace_() {
	    let localctx = new Namespace_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PROV_NParser.RULE_namespace_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(PROV_NParser.IRI_REF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bundle() {
	    let localctx = new BundleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PROV_NParser.RULE_bundle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(PROV_NParser.BUNDLE);
	        this.state = 144;
	        this.identifier();
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1 || _la===2) {
	            this.state = 145;
	            this.namespaceDeclarations();
	        }

	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 268425224) !== 0) || _la===42 || _la===43) {
	            this.state = 148;
	            this.expression();
	            this.state = 153;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 154;
	        this.match(PROV_NParser.ENDBUNDLE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 12, PROV_NParser.RULE_identifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        _la = this._input.LA(1);
	        if(!(_la===42 || _la===43)) {
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PROV_NParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 158;
	            this.entityExpression();
	            break;
	        case 11:
	            this.state = 159;
	            this.activityExpression();
	            break;
	        case 12:
	            this.state = 160;
	            this.generationExpression();
	            break;
	        case 14:
	            this.state = 161;
	            this.usageExpression();
	            break;
	        case 15:
	            this.state = 162;
	            this.startExpression();
	            break;
	        case 16:
	            this.state = 163;
	            this.endExpression();
	            break;
	        case 17:
	            this.state = 164;
	            this.invalidationExpression();
	            break;
	        case 18:
	            this.state = 165;
	            this.communicationExpression();
	            break;
	        case 19:
	            this.state = 166;
	            this.agentExpression();
	            break;
	        case 20:
	            this.state = 167;
	            this.associationExpression();
	            break;
	        case 21:
	            this.state = 168;
	            this.attributionExpression();
	            break;
	        case 22:
	            this.state = 169;
	            this.delegationExpression();
	            break;
	        case 23:
	            this.state = 170;
	            this.derivationExpression();
	            break;
	        case 24:
	            this.state = 171;
	            this.influenceExpression();
	            break;
	        case 25:
	            this.state = 172;
	            this.alternateExpression();
	            break;
	        case 26:
	            this.state = 173;
	            this.specializationExpression();
	            break;
	        case 27:
	            this.state = 174;
	            this.membershipExpression();
	            break;
	        case 42:
	        case 43:
	            this.state = 175;
	            this.extensibilityExpression();
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



	entityExpression() {
	    let localctx = new EntityExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PROV_NParser.RULE_entityExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(PROV_NParser.T__2);
	        this.state = 179;
	        this.match(PROV_NParser.T__3);
	        this.state = 180;
	        this.identifier();
	        this.state = 181;
	        this.optionalAttributeValuePairs();
	        this.state = 182;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optionalAttributeValuePairs() {
	    let localctx = new OptionalAttributeValuePairsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PROV_NParser.RULE_optionalAttributeValuePairs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 184;
	            this.match(PROV_NParser.T__5);
	            this.state = 185;
	            this.match(PROV_NParser.T__6);
	            this.state = 186;
	            this.attributeValuePairs();
	            this.state = 187;
	            this.match(PROV_NParser.T__7);
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



	attributeValuePairs() {
	    let localctx = new AttributeValuePairsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PROV_NParser.RULE_attributeValuePairs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            break;
	        case 42:
	        case 43:
	            this.state = 192;
	            this.attributeValuePair();
	            this.state = 197;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 193;
	                this.match(PROV_NParser.T__5);
	                this.state = 194;
	                this.attributeValuePair();
	                this.state = 199;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
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



	attributeValuePair() {
	    let localctx = new AttributeValuePairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, PROV_NParser.RULE_attributeValuePair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.attribute();
	        this.state = 203;
	        this.match(PROV_NParser.T__8);
	        this.state = 204;
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



	attribute() {
	    let localctx = new AttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, PROV_NParser.RULE_attribute);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        _la = this._input.LA(1);
	        if(!(_la===42 || _la===43)) {
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
	    this.enterRule(localctx, 26, PROV_NParser.RULE_literal);
	    try {
	        this.state = 210;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 208;
	            this.typedLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 209;
	            this.convenienceNotation();
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



	typedLiteral() {
	    let localctx = new TypedLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, PROV_NParser.RULE_typedLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.match(PROV_NParser.STRING_LITERAL);
	        this.state = 213;
	        this.match(PROV_NParser.T__9);
	        this.state = 214;
	        this.datatype();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	datatype() {
	    let localctx = new DatatypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, PROV_NParser.RULE_datatype);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        _la = this._input.LA(1);
	        if(!(_la===42 || _la===43)) {
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



	convenienceNotation() {
	    let localctx = new ConvenienceNotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, PROV_NParser.RULE_convenienceNotation);
	    var _la = 0;
	    try {
	        this.state = 224;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 45:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 218;
	            this.match(PROV_NParser.STRING_LITERAL);
	            this.state = 220;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===52) {
	                this.state = 219;
	                this.match(PROV_NParser.LANGTAG);
	            }

	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 222;
	            this.match(PROV_NParser.INT_LITERAL);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 223;
	            this.match(PROV_NParser.QUALIFIED_NAME_LITERAL);
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



	activityExpression() {
	    let localctx = new ActivityExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, PROV_NParser.RULE_activityExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(PROV_NParser.T__10);
	        this.state = 227;
	        this.match(PROV_NParser.T__3);
	        this.state = 228;
	        this.identifier();
	        this.state = 234;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 229;
	            this.match(PROV_NParser.T__5);
	            this.state = 230;
	            this.timeOrMarker();
	            this.state = 231;
	            this.match(PROV_NParser.T__5);
	            this.state = 232;
	            this.timeOrMarker();

	        }
	        this.state = 236;
	        this.optionalAttributeValuePairs();
	        this.state = 237;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	timeOrMarker() {
	    let localctx = new TimeOrMarkerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, PROV_NParser.RULE_timeOrMarker);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 51:
	            this.state = 239;
	            this.time();
	            break;
	        case 41:
	            this.state = 240;
	            this.match(PROV_NParser.MINUS);
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



	time() {
	    let localctx = new TimeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, PROV_NParser.RULE_time);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.match(PROV_NParser.DATETIME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	generationExpression() {
	    let localctx = new GenerationExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, PROV_NParser.RULE_generationExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        this.match(PROV_NParser.T__11);
	        this.state = 246;
	        this.match(PROV_NParser.T__3);
	        this.state = 247;
	        this.optionalIdentifier();
	        this.state = 248;
	        this.eIdentifier();
	        this.state = 254;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 249;
	            this.match(PROV_NParser.T__5);
	            this.state = 250;
	            this.aIdentifierOrMarker();
	            this.state = 251;
	            this.match(PROV_NParser.T__5);
	            this.state = 252;
	            this.timeOrMarker();

	        }
	        this.state = 256;
	        this.optionalAttributeValuePairs();
	        this.state = 257;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optionalIdentifier() {
	    let localctx = new OptionalIdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, PROV_NParser.RULE_optionalIdentifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        if(la_===1) {
	            this.state = 259;
	            this.identifierOrMarker();
	            this.state = 260;
	            this.match(PROV_NParser.T__12);

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



	identifierOrMarker() {
	    let localctx = new IdentifierOrMarkerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, PROV_NParser.RULE_identifierOrMarker);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 266;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	        case 43:
	            this.state = 264;
	            this.identifier();
	            break;
	        case 41:
	            this.state = 265;
	            this.match(PROV_NParser.MINUS);
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



	eIdentifier() {
	    let localctx = new EIdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, PROV_NParser.RULE_eIdentifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
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



	eIdentifierOrMarker() {
	    let localctx = new EIdentifierOrMarkerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, PROV_NParser.RULE_eIdentifierOrMarker);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	        case 43:
	            this.state = 270;
	            this.eIdentifier();
	            break;
	        case 41:
	            this.state = 271;
	            this.match(PROV_NParser.MINUS);
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



	aIdentifierOrMarker() {
	    let localctx = new AIdentifierOrMarkerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, PROV_NParser.RULE_aIdentifierOrMarker);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	        case 43:
	            this.state = 274;
	            this.aIdentifier();
	            break;
	        case 41:
	            this.state = 275;
	            this.match(PROV_NParser.MINUS);
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



	aIdentifier() {
	    let localctx = new AIdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, PROV_NParser.RULE_aIdentifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
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



	agIdentifierOrMarker() {
	    let localctx = new AgIdentifierOrMarkerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, PROV_NParser.RULE_agIdentifierOrMarker);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 282;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	        case 43:
	            this.state = 280;
	            this.agIdentifier();
	            break;
	        case 41:
	            this.state = 281;
	            this.match(PROV_NParser.MINUS);
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



	agIdentifier() {
	    let localctx = new AgIdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, PROV_NParser.RULE_agIdentifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
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



	cIdentifier() {
	    let localctx = new CIdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, PROV_NParser.RULE_cIdentifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
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



	gIdentifier() {
	    let localctx = new GIdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, PROV_NParser.RULE_gIdentifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
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



	gIdentifierOrMarker() {
	    let localctx = new GIdentifierOrMarkerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, PROV_NParser.RULE_gIdentifierOrMarker);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	        case 43:
	            this.state = 290;
	            this.gIdentifier();
	            break;
	        case 41:
	            this.state = 291;
	            this.match(PROV_NParser.MINUS);
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



	uIdentifier() {
	    let localctx = new UIdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, PROV_NParser.RULE_uIdentifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
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



	uIdentifierOrMarker() {
	    let localctx = new UIdentifierOrMarkerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, PROV_NParser.RULE_uIdentifierOrMarker);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	        case 43:
	            this.state = 296;
	            this.uIdentifier();
	            break;
	        case 41:
	            this.state = 297;
	            this.match(PROV_NParser.MINUS);
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



	usageExpression() {
	    let localctx = new UsageExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, PROV_NParser.RULE_usageExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(PROV_NParser.T__13);
	        this.state = 301;
	        this.match(PROV_NParser.T__3);
	        this.state = 302;
	        this.optionalIdentifier();
	        this.state = 303;
	        this.aIdentifier();
	        this.state = 309;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        if(la_===1) {
	            this.state = 304;
	            this.match(PROV_NParser.T__5);
	            this.state = 305;
	            this.eIdentifierOrMarker();
	            this.state = 306;
	            this.match(PROV_NParser.T__5);
	            this.state = 307;
	            this.timeOrMarker();

	        }
	        this.state = 311;
	        this.optionalAttributeValuePairs();
	        this.state = 312;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	startExpression() {
	    let localctx = new StartExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, PROV_NParser.RULE_startExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this.match(PROV_NParser.T__14);
	        this.state = 315;
	        this.match(PROV_NParser.T__3);
	        this.state = 316;
	        this.optionalIdentifier();
	        this.state = 317;
	        this.aIdentifier();
	        this.state = 325;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        if(la_===1) {
	            this.state = 318;
	            this.match(PROV_NParser.T__5);
	            this.state = 319;
	            this.eIdentifierOrMarker();
	            this.state = 320;
	            this.match(PROV_NParser.T__5);
	            this.state = 321;
	            this.aIdentifierOrMarker();
	            this.state = 322;
	            this.match(PROV_NParser.T__5);
	            this.state = 323;
	            this.timeOrMarker();

	        }
	        this.state = 327;
	        this.optionalAttributeValuePairs();
	        this.state = 328;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	endExpression() {
	    let localctx = new EndExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, PROV_NParser.RULE_endExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
	        this.match(PROV_NParser.T__15);
	        this.state = 331;
	        this.match(PROV_NParser.T__3);
	        this.state = 332;
	        this.optionalIdentifier();
	        this.state = 333;
	        this.aIdentifier();
	        this.state = 341;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        if(la_===1) {
	            this.state = 334;
	            this.match(PROV_NParser.T__5);
	            this.state = 335;
	            this.eIdentifierOrMarker();
	            this.state = 336;
	            this.match(PROV_NParser.T__5);
	            this.state = 337;
	            this.aIdentifierOrMarker();
	            this.state = 338;
	            this.match(PROV_NParser.T__5);
	            this.state = 339;
	            this.timeOrMarker();

	        }
	        this.state = 343;
	        this.optionalAttributeValuePairs();
	        this.state = 344;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	invalidationExpression() {
	    let localctx = new InvalidationExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, PROV_NParser.RULE_invalidationExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
	        this.match(PROV_NParser.T__16);
	        this.state = 347;
	        this.match(PROV_NParser.T__3);
	        this.state = 348;
	        this.optionalIdentifier();
	        this.state = 349;
	        this.eIdentifier();
	        this.state = 355;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        if(la_===1) {
	            this.state = 350;
	            this.match(PROV_NParser.T__5);
	            this.state = 351;
	            this.aIdentifierOrMarker();
	            this.state = 352;
	            this.match(PROV_NParser.T__5);
	            this.state = 353;
	            this.timeOrMarker();

	        }
	        this.state = 357;
	        this.optionalAttributeValuePairs();
	        this.state = 358;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	communicationExpression() {
	    let localctx = new CommunicationExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, PROV_NParser.RULE_communicationExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 360;
	        this.match(PROV_NParser.T__17);
	        this.state = 361;
	        this.match(PROV_NParser.T__3);
	        this.state = 362;
	        this.optionalIdentifier();
	        this.state = 363;
	        this.aIdentifier();
	        this.state = 364;
	        this.match(PROV_NParser.T__5);
	        this.state = 365;
	        this.aIdentifier();
	        this.state = 366;
	        this.optionalAttributeValuePairs();
	        this.state = 367;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	agentExpression() {
	    let localctx = new AgentExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, PROV_NParser.RULE_agentExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 369;
	        this.match(PROV_NParser.T__18);
	        this.state = 370;
	        this.match(PROV_NParser.T__3);
	        this.state = 371;
	        this.identifier();
	        this.state = 372;
	        this.optionalAttributeValuePairs();
	        this.state = 373;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	associationExpression() {
	    let localctx = new AssociationExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, PROV_NParser.RULE_associationExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 375;
	        this.match(PROV_NParser.T__19);
	        this.state = 376;
	        this.match(PROV_NParser.T__3);
	        this.state = 377;
	        this.optionalIdentifier();
	        this.state = 378;
	        this.aIdentifier();
	        this.state = 384;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        if(la_===1) {
	            this.state = 379;
	            this.match(PROV_NParser.T__5);
	            this.state = 380;
	            this.agIdentifierOrMarker();
	            this.state = 381;
	            this.match(PROV_NParser.T__5);
	            this.state = 382;
	            this.eIdentifierOrMarker();

	        }
	        this.state = 386;
	        this.optionalAttributeValuePairs();
	        this.state = 387;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attributionExpression() {
	    let localctx = new AttributionExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, PROV_NParser.RULE_attributionExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 389;
	        this.match(PROV_NParser.T__20);
	        this.state = 390;
	        this.match(PROV_NParser.T__3);
	        this.state = 391;
	        this.optionalIdentifier();
	        this.state = 392;
	        this.eIdentifier();
	        this.state = 393;
	        this.match(PROV_NParser.T__5);
	        this.state = 394;
	        this.agIdentifier();
	        this.state = 395;
	        this.optionalAttributeValuePairs();
	        this.state = 396;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	delegationExpression() {
	    let localctx = new DelegationExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, PROV_NParser.RULE_delegationExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 398;
	        this.match(PROV_NParser.T__21);
	        this.state = 399;
	        this.match(PROV_NParser.T__3);
	        this.state = 400;
	        this.optionalIdentifier();
	        this.state = 401;
	        this.agIdentifier();
	        this.state = 402;
	        this.match(PROV_NParser.T__5);
	        this.state = 403;
	        this.agIdentifier();
	        this.state = 406;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        if(la_===1) {
	            this.state = 404;
	            this.match(PROV_NParser.T__5);
	            this.state = 405;
	            this.aIdentifierOrMarker();

	        }
	        this.state = 408;
	        this.optionalAttributeValuePairs();
	        this.state = 409;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	derivationExpression() {
	    let localctx = new DerivationExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, PROV_NParser.RULE_derivationExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 411;
	        this.match(PROV_NParser.T__22);
	        this.state = 412;
	        this.match(PROV_NParser.T__3);
	        this.state = 413;
	        this.optionalIdentifier();
	        this.state = 414;
	        this.eIdentifier();
	        this.state = 415;
	        this.match(PROV_NParser.T__5);
	        this.state = 416;
	        this.eIdentifier();
	        this.state = 424;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        if(la_===1) {
	            this.state = 417;
	            this.match(PROV_NParser.T__5);
	            this.state = 418;
	            this.aIdentifierOrMarker();
	            this.state = 419;
	            this.match(PROV_NParser.T__5);
	            this.state = 420;
	            this.gIdentifierOrMarker();
	            this.state = 421;
	            this.match(PROV_NParser.T__5);
	            this.state = 422;
	            this.uIdentifierOrMarker();

	        }
	        this.state = 426;
	        this.optionalAttributeValuePairs();
	        this.state = 427;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	influenceExpression() {
	    let localctx = new InfluenceExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, PROV_NParser.RULE_influenceExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 429;
	        this.match(PROV_NParser.T__23);
	        this.state = 430;
	        this.match(PROV_NParser.T__3);
	        this.state = 431;
	        this.optionalIdentifier();
	        this.state = 432;
	        this.eIdentifier();
	        this.state = 433;
	        this.match(PROV_NParser.T__5);
	        this.state = 434;
	        this.eIdentifier();
	        this.state = 435;
	        this.optionalAttributeValuePairs();
	        this.state = 436;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	alternateExpression() {
	    let localctx = new AlternateExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, PROV_NParser.RULE_alternateExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 438;
	        this.match(PROV_NParser.T__24);
	        this.state = 439;
	        this.match(PROV_NParser.T__3);
	        this.state = 440;
	        this.eIdentifier();
	        this.state = 441;
	        this.match(PROV_NParser.T__5);
	        this.state = 442;
	        this.eIdentifier();
	        this.state = 443;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	specializationExpression() {
	    let localctx = new SpecializationExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, PROV_NParser.RULE_specializationExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 445;
	        this.match(PROV_NParser.T__25);
	        this.state = 446;
	        this.match(PROV_NParser.T__3);
	        this.state = 447;
	        this.eIdentifier();
	        this.state = 448;
	        this.match(PROV_NParser.T__5);
	        this.state = 449;
	        this.eIdentifier();
	        this.state = 450;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	membershipExpression() {
	    let localctx = new MembershipExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, PROV_NParser.RULE_membershipExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 452;
	        this.match(PROV_NParser.T__26);
	        this.state = 453;
	        this.match(PROV_NParser.T__3);
	        this.state = 454;
	        this.cIdentifier();
	        this.state = 455;
	        this.match(PROV_NParser.T__5);
	        this.state = 456;
	        this.eIdentifier();
	        this.state = 457;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	extensibilityExpression() {
	    let localctx = new ExtensibilityExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, PROV_NParser.RULE_extensibilityExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 459;
	        _la = this._input.LA(1);
	        if(!(_la===42 || _la===43)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 460;
	        this.match(PROV_NParser.T__3);
	        this.state = 461;
	        this.optionalIdentifier();
	        this.state = 462;
	        this.extensibilityArgument();
	        this.state = 467;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 463;
	                this.match(PROV_NParser.T__5);
	                this.state = 464;
	                this.extensibilityArgument(); 
	            }
	            this.state = 469;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
	        }

	        this.state = 470;
	        this.optionalAttributeValuePairs();
	        this.state = 471;
	        this.match(PROV_NParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	extensibilityArgument() {
	    let localctx = new ExtensibilityArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, PROV_NParser.RULE_extensibilityArgument);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 478;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 473;
	            this.identifierOrMarker();
	            break;

	        case 2:
	            this.state = 474;
	            this.literal();
	            break;

	        case 3:
	            this.state = 475;
	            this.time();
	            break;

	        case 4:
	            this.state = 476;
	            this.extensibilityExpression();
	            break;

	        case 5:
	            this.state = 477;
	            this.extensibilityTuple();
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



	extensibilityTuple() {
	    let localctx = new ExtensibilityTupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, PROV_NParser.RULE_extensibilityTuple);
	    var _la = 0;
	    try {
	        this.state = 502;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 480;
	            this.match(PROV_NParser.T__27);
	            this.state = 481;
	            this.extensibilityArgument();
	            this.state = 486;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 482;
	                this.match(PROV_NParser.T__5);
	                this.state = 483;
	                this.extensibilityArgument();
	                this.state = 488;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 489;
	            this.match(PROV_NParser.T__28);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 491;
	            this.match(PROV_NParser.T__3);
	            this.state = 492;
	            this.extensibilityArgument();
	            this.state = 497;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 493;
	                this.match(PROV_NParser.T__5);
	                this.state = 494;
	                this.extensibilityArgument();
	                this.state = 499;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 500;
	            this.match(PROV_NParser.T__4);
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


}

PROV_NParser.EOF = antlr4.Token.EOF;
PROV_NParser.T__0 = 1;
PROV_NParser.T__1 = 2;
PROV_NParser.T__2 = 3;
PROV_NParser.T__3 = 4;
PROV_NParser.T__4 = 5;
PROV_NParser.T__5 = 6;
PROV_NParser.T__6 = 7;
PROV_NParser.T__7 = 8;
PROV_NParser.T__8 = 9;
PROV_NParser.T__9 = 10;
PROV_NParser.T__10 = 11;
PROV_NParser.T__11 = 12;
PROV_NParser.T__12 = 13;
PROV_NParser.T__13 = 14;
PROV_NParser.T__14 = 15;
PROV_NParser.T__15 = 16;
PROV_NParser.T__16 = 17;
PROV_NParser.T__17 = 18;
PROV_NParser.T__18 = 19;
PROV_NParser.T__19 = 20;
PROV_NParser.T__20 = 21;
PROV_NParser.T__21 = 22;
PROV_NParser.T__22 = 23;
PROV_NParser.T__23 = 24;
PROV_NParser.T__24 = 25;
PROV_NParser.T__25 = 26;
PROV_NParser.T__26 = 27;
PROV_NParser.T__27 = 28;
PROV_NParser.T__28 = 29;
PROV_NParser.DOCUMENT = 30;
PROV_NParser.ENDDOCUMENT = 31;
PROV_NParser.BUNDLE = 32;
PROV_NParser.ENDBUNDLE = 33;
PROV_NParser.WS = 34;
PROV_NParser.COMMENT = 35;
PROV_NParser.LINE_COMMENT = 36;
PROV_NParser.IRI_REF = 37;
PROV_NParser.LESS = 38;
PROV_NParser.GREATER = 39;
PROV_NParser.DOT = 40;
PROV_NParser.MINUS = 41;
PROV_NParser.PREFX = 42;
PROV_NParser.QUALIFIED_NAME = 43;
PROV_NParser.HEX = 44;
PROV_NParser.STRING_LITERAL = 45;
PROV_NParser.INT_LITERAL = 46;
PROV_NParser.QUALIFIED_NAME_LITERAL = 47;
PROV_NParser.ECHAR = 48;
PROV_NParser.STRING_LITERAL2 = 49;
PROV_NParser.STRING_LITERAL_LONG2 = 50;
PROV_NParser.DATETIME = 51;
PROV_NParser.LANGTAG = 52;

PROV_NParser.RULE_document = 0;
PROV_NParser.RULE_namespaceDeclarations = 1;
PROV_NParser.RULE_defaultNamespaceDeclaration = 2;
PROV_NParser.RULE_namespaceDeclaration = 3;
PROV_NParser.RULE_namespace_ = 4;
PROV_NParser.RULE_bundle = 5;
PROV_NParser.RULE_identifier = 6;
PROV_NParser.RULE_expression = 7;
PROV_NParser.RULE_entityExpression = 8;
PROV_NParser.RULE_optionalAttributeValuePairs = 9;
PROV_NParser.RULE_attributeValuePairs = 10;
PROV_NParser.RULE_attributeValuePair = 11;
PROV_NParser.RULE_attribute = 12;
PROV_NParser.RULE_literal = 13;
PROV_NParser.RULE_typedLiteral = 14;
PROV_NParser.RULE_datatype = 15;
PROV_NParser.RULE_convenienceNotation = 16;
PROV_NParser.RULE_activityExpression = 17;
PROV_NParser.RULE_timeOrMarker = 18;
PROV_NParser.RULE_time = 19;
PROV_NParser.RULE_generationExpression = 20;
PROV_NParser.RULE_optionalIdentifier = 21;
PROV_NParser.RULE_identifierOrMarker = 22;
PROV_NParser.RULE_eIdentifier = 23;
PROV_NParser.RULE_eIdentifierOrMarker = 24;
PROV_NParser.RULE_aIdentifierOrMarker = 25;
PROV_NParser.RULE_aIdentifier = 26;
PROV_NParser.RULE_agIdentifierOrMarker = 27;
PROV_NParser.RULE_agIdentifier = 28;
PROV_NParser.RULE_cIdentifier = 29;
PROV_NParser.RULE_gIdentifier = 30;
PROV_NParser.RULE_gIdentifierOrMarker = 31;
PROV_NParser.RULE_uIdentifier = 32;
PROV_NParser.RULE_uIdentifierOrMarker = 33;
PROV_NParser.RULE_usageExpression = 34;
PROV_NParser.RULE_startExpression = 35;
PROV_NParser.RULE_endExpression = 36;
PROV_NParser.RULE_invalidationExpression = 37;
PROV_NParser.RULE_communicationExpression = 38;
PROV_NParser.RULE_agentExpression = 39;
PROV_NParser.RULE_associationExpression = 40;
PROV_NParser.RULE_attributionExpression = 41;
PROV_NParser.RULE_delegationExpression = 42;
PROV_NParser.RULE_derivationExpression = 43;
PROV_NParser.RULE_influenceExpression = 44;
PROV_NParser.RULE_alternateExpression = 45;
PROV_NParser.RULE_specializationExpression = 46;
PROV_NParser.RULE_membershipExpression = 47;
PROV_NParser.RULE_extensibilityExpression = 48;
PROV_NParser.RULE_extensibilityArgument = 49;
PROV_NParser.RULE_extensibilityTuple = 50;

class DocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_document;
    }

	DOCUMENT() {
	    return this.getToken(PROV_NParser.DOCUMENT, 0);
	};

	ENDDOCUMENT() {
	    return this.getToken(PROV_NParser.ENDDOCUMENT, 0);
	};

	EOF() {
	    return this.getToken(PROV_NParser.EOF, 0);
	};

	namespaceDeclarations() {
	    return this.getTypedRuleContext(NamespaceDeclarationsContext,0);
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

	bundle = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BundleContext);
	    } else {
	        return this.getTypedRuleContext(BundleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitDocument(this);
		}
	}


}



class NamespaceDeclarationsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_namespaceDeclarations;
    }

	defaultNamespaceDeclaration() {
	    return this.getTypedRuleContext(DefaultNamespaceDeclarationContext,0);
	};

	namespaceDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NamespaceDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(NamespaceDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterNamespaceDeclarations(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitNamespaceDeclarations(this);
		}
	}


}



class DefaultNamespaceDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_defaultNamespaceDeclaration;
    }

	IRI_REF() {
	    return this.getToken(PROV_NParser.IRI_REF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterDefaultNamespaceDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitDefaultNamespaceDeclaration(this);
		}
	}


}



class NamespaceDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_namespaceDeclaration;
    }

	PREFX() {
	    return this.getToken(PROV_NParser.PREFX, 0);
	};

	namespace_() {
	    return this.getTypedRuleContext(Namespace_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterNamespaceDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitNamespaceDeclaration(this);
		}
	}


}



class Namespace_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_namespace_;
    }

	IRI_REF() {
	    return this.getToken(PROV_NParser.IRI_REF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterNamespace_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitNamespace_(this);
		}
	}


}



class BundleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_bundle;
    }

	BUNDLE() {
	    return this.getToken(PROV_NParser.BUNDLE, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ENDBUNDLE() {
	    return this.getToken(PROV_NParser.ENDBUNDLE, 0);
	};

	namespaceDeclarations() {
	    return this.getTypedRuleContext(NamespaceDeclarationsContext,0);
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

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterBundle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitBundle(this);
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
        this.ruleIndex = PROV_NParser.RULE_identifier;
    }

	PREFX() {
	    return this.getToken(PROV_NParser.PREFX, 0);
	};

	QUALIFIED_NAME() {
	    return this.getToken(PROV_NParser.QUALIFIED_NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitIdentifier(this);
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
        this.ruleIndex = PROV_NParser.RULE_expression;
    }

	entityExpression() {
	    return this.getTypedRuleContext(EntityExpressionContext,0);
	};

	activityExpression() {
	    return this.getTypedRuleContext(ActivityExpressionContext,0);
	};

	generationExpression() {
	    return this.getTypedRuleContext(GenerationExpressionContext,0);
	};

	usageExpression() {
	    return this.getTypedRuleContext(UsageExpressionContext,0);
	};

	startExpression() {
	    return this.getTypedRuleContext(StartExpressionContext,0);
	};

	endExpression() {
	    return this.getTypedRuleContext(EndExpressionContext,0);
	};

	invalidationExpression() {
	    return this.getTypedRuleContext(InvalidationExpressionContext,0);
	};

	communicationExpression() {
	    return this.getTypedRuleContext(CommunicationExpressionContext,0);
	};

	agentExpression() {
	    return this.getTypedRuleContext(AgentExpressionContext,0);
	};

	associationExpression() {
	    return this.getTypedRuleContext(AssociationExpressionContext,0);
	};

	attributionExpression() {
	    return this.getTypedRuleContext(AttributionExpressionContext,0);
	};

	delegationExpression() {
	    return this.getTypedRuleContext(DelegationExpressionContext,0);
	};

	derivationExpression() {
	    return this.getTypedRuleContext(DerivationExpressionContext,0);
	};

	influenceExpression() {
	    return this.getTypedRuleContext(InfluenceExpressionContext,0);
	};

	alternateExpression() {
	    return this.getTypedRuleContext(AlternateExpressionContext,0);
	};

	specializationExpression() {
	    return this.getTypedRuleContext(SpecializationExpressionContext,0);
	};

	membershipExpression() {
	    return this.getTypedRuleContext(MembershipExpressionContext,0);
	};

	extensibilityExpression() {
	    return this.getTypedRuleContext(ExtensibilityExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitExpression(this);
		}
	}


}



class EntityExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_entityExpression;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	optionalAttributeValuePairs() {
	    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterEntityExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitEntityExpression(this);
		}
	}


}



class OptionalAttributeValuePairsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_optionalAttributeValuePairs;
    }

	attributeValuePairs() {
	    return this.getTypedRuleContext(AttributeValuePairsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterOptionalAttributeValuePairs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitOptionalAttributeValuePairs(this);
		}
	}


}



class AttributeValuePairsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_attributeValuePairs;
    }

	attributeValuePair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttributeValuePairContext);
	    } else {
	        return this.getTypedRuleContext(AttributeValuePairContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterAttributeValuePairs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitAttributeValuePairs(this);
		}
	}


}



class AttributeValuePairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_attributeValuePair;
    }

	attribute() {
	    return this.getTypedRuleContext(AttributeContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterAttributeValuePair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitAttributeValuePair(this);
		}
	}


}



class AttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_attribute;
    }

	PREFX() {
	    return this.getToken(PROV_NParser.PREFX, 0);
	};

	QUALIFIED_NAME() {
	    return this.getToken(PROV_NParser.QUALIFIED_NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitAttribute(this);
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
        this.ruleIndex = PROV_NParser.RULE_literal;
    }

	typedLiteral() {
	    return this.getTypedRuleContext(TypedLiteralContext,0);
	};

	convenienceNotation() {
	    return this.getTypedRuleContext(ConvenienceNotationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class TypedLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_typedLiteral;
    }

	STRING_LITERAL() {
	    return this.getToken(PROV_NParser.STRING_LITERAL, 0);
	};

	datatype() {
	    return this.getTypedRuleContext(DatatypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterTypedLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitTypedLiteral(this);
		}
	}


}



class DatatypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_datatype;
    }

	PREFX() {
	    return this.getToken(PROV_NParser.PREFX, 0);
	};

	QUALIFIED_NAME() {
	    return this.getToken(PROV_NParser.QUALIFIED_NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterDatatype(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitDatatype(this);
		}
	}


}



class ConvenienceNotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_convenienceNotation;
    }

	STRING_LITERAL() {
	    return this.getToken(PROV_NParser.STRING_LITERAL, 0);
	};

	LANGTAG() {
	    return this.getToken(PROV_NParser.LANGTAG, 0);
	};

	INT_LITERAL() {
	    return this.getToken(PROV_NParser.INT_LITERAL, 0);
	};

	QUALIFIED_NAME_LITERAL() {
	    return this.getToken(PROV_NParser.QUALIFIED_NAME_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterConvenienceNotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitConvenienceNotation(this);
		}
	}


}



class ActivityExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_activityExpression;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	optionalAttributeValuePairs() {
	    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
	};

	timeOrMarker = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TimeOrMarkerContext);
	    } else {
	        return this.getTypedRuleContext(TimeOrMarkerContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterActivityExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitActivityExpression(this);
		}
	}


}



class TimeOrMarkerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_timeOrMarker;
    }

	time() {
	    return this.getTypedRuleContext(TimeContext,0);
	};

	MINUS() {
	    return this.getToken(PROV_NParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterTimeOrMarker(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitTimeOrMarker(this);
		}
	}


}



class TimeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_time;
    }

	DATETIME() {
	    return this.getToken(PROV_NParser.DATETIME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterTime(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitTime(this);
		}
	}


}



class GenerationExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_generationExpression;
    }

	optionalIdentifier() {
	    return this.getTypedRuleContext(OptionalIdentifierContext,0);
	};

	eIdentifier() {
	    return this.getTypedRuleContext(EIdentifierContext,0);
	};

	optionalAttributeValuePairs() {
	    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
	};

	aIdentifierOrMarker() {
	    return this.getTypedRuleContext(AIdentifierOrMarkerContext,0);
	};

	timeOrMarker() {
	    return this.getTypedRuleContext(TimeOrMarkerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterGenerationExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitGenerationExpression(this);
		}
	}


}



class OptionalIdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_optionalIdentifier;
    }

	identifierOrMarker() {
	    return this.getTypedRuleContext(IdentifierOrMarkerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterOptionalIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitOptionalIdentifier(this);
		}
	}


}



class IdentifierOrMarkerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_identifierOrMarker;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	MINUS() {
	    return this.getToken(PROV_NParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterIdentifierOrMarker(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitIdentifierOrMarker(this);
		}
	}


}



class EIdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_eIdentifier;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterEIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitEIdentifier(this);
		}
	}


}



class EIdentifierOrMarkerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_eIdentifierOrMarker;
    }

	eIdentifier() {
	    return this.getTypedRuleContext(EIdentifierContext,0);
	};

	MINUS() {
	    return this.getToken(PROV_NParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterEIdentifierOrMarker(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitEIdentifierOrMarker(this);
		}
	}


}



class AIdentifierOrMarkerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_aIdentifierOrMarker;
    }

	aIdentifier() {
	    return this.getTypedRuleContext(AIdentifierContext,0);
	};

	MINUS() {
	    return this.getToken(PROV_NParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterAIdentifierOrMarker(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitAIdentifierOrMarker(this);
		}
	}


}



class AIdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_aIdentifier;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterAIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitAIdentifier(this);
		}
	}


}



class AgIdentifierOrMarkerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_agIdentifierOrMarker;
    }

	agIdentifier() {
	    return this.getTypedRuleContext(AgIdentifierContext,0);
	};

	MINUS() {
	    return this.getToken(PROV_NParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterAgIdentifierOrMarker(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitAgIdentifierOrMarker(this);
		}
	}


}



class AgIdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_agIdentifier;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterAgIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitAgIdentifier(this);
		}
	}


}



class CIdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_cIdentifier;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterCIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitCIdentifier(this);
		}
	}


}



class GIdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_gIdentifier;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterGIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitGIdentifier(this);
		}
	}


}



class GIdentifierOrMarkerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_gIdentifierOrMarker;
    }

	gIdentifier() {
	    return this.getTypedRuleContext(GIdentifierContext,0);
	};

	MINUS() {
	    return this.getToken(PROV_NParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterGIdentifierOrMarker(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitGIdentifierOrMarker(this);
		}
	}


}



class UIdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_uIdentifier;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterUIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitUIdentifier(this);
		}
	}


}



class UIdentifierOrMarkerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_uIdentifierOrMarker;
    }

	uIdentifier() {
	    return this.getTypedRuleContext(UIdentifierContext,0);
	};

	MINUS() {
	    return this.getToken(PROV_NParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterUIdentifierOrMarker(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitUIdentifierOrMarker(this);
		}
	}


}



class UsageExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_usageExpression;
    }

	optionalIdentifier() {
	    return this.getTypedRuleContext(OptionalIdentifierContext,0);
	};

	aIdentifier() {
	    return this.getTypedRuleContext(AIdentifierContext,0);
	};

	optionalAttributeValuePairs() {
	    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
	};

	eIdentifierOrMarker() {
	    return this.getTypedRuleContext(EIdentifierOrMarkerContext,0);
	};

	timeOrMarker() {
	    return this.getTypedRuleContext(TimeOrMarkerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterUsageExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitUsageExpression(this);
		}
	}


}



class StartExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_startExpression;
    }

	optionalIdentifier() {
	    return this.getTypedRuleContext(OptionalIdentifierContext,0);
	};

	aIdentifier() {
	    return this.getTypedRuleContext(AIdentifierContext,0);
	};

	optionalAttributeValuePairs() {
	    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
	};

	eIdentifierOrMarker() {
	    return this.getTypedRuleContext(EIdentifierOrMarkerContext,0);
	};

	aIdentifierOrMarker() {
	    return this.getTypedRuleContext(AIdentifierOrMarkerContext,0);
	};

	timeOrMarker() {
	    return this.getTypedRuleContext(TimeOrMarkerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterStartExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitStartExpression(this);
		}
	}


}



class EndExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_endExpression;
    }

	optionalIdentifier() {
	    return this.getTypedRuleContext(OptionalIdentifierContext,0);
	};

	aIdentifier() {
	    return this.getTypedRuleContext(AIdentifierContext,0);
	};

	optionalAttributeValuePairs() {
	    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
	};

	eIdentifierOrMarker() {
	    return this.getTypedRuleContext(EIdentifierOrMarkerContext,0);
	};

	aIdentifierOrMarker() {
	    return this.getTypedRuleContext(AIdentifierOrMarkerContext,0);
	};

	timeOrMarker() {
	    return this.getTypedRuleContext(TimeOrMarkerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterEndExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitEndExpression(this);
		}
	}


}



class InvalidationExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_invalidationExpression;
    }

	optionalIdentifier() {
	    return this.getTypedRuleContext(OptionalIdentifierContext,0);
	};

	eIdentifier() {
	    return this.getTypedRuleContext(EIdentifierContext,0);
	};

	optionalAttributeValuePairs() {
	    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
	};

	aIdentifierOrMarker() {
	    return this.getTypedRuleContext(AIdentifierOrMarkerContext,0);
	};

	timeOrMarker() {
	    return this.getTypedRuleContext(TimeOrMarkerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterInvalidationExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitInvalidationExpression(this);
		}
	}


}



class CommunicationExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_communicationExpression;
    }

	optionalIdentifier() {
	    return this.getTypedRuleContext(OptionalIdentifierContext,0);
	};

	aIdentifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AIdentifierContext);
	    } else {
	        return this.getTypedRuleContext(AIdentifierContext,i);
	    }
	};

	optionalAttributeValuePairs() {
	    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterCommunicationExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitCommunicationExpression(this);
		}
	}


}



class AgentExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_agentExpression;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	optionalAttributeValuePairs() {
	    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterAgentExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitAgentExpression(this);
		}
	}


}



class AssociationExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_associationExpression;
    }

	optionalIdentifier() {
	    return this.getTypedRuleContext(OptionalIdentifierContext,0);
	};

	aIdentifier() {
	    return this.getTypedRuleContext(AIdentifierContext,0);
	};

	optionalAttributeValuePairs() {
	    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
	};

	agIdentifierOrMarker() {
	    return this.getTypedRuleContext(AgIdentifierOrMarkerContext,0);
	};

	eIdentifierOrMarker() {
	    return this.getTypedRuleContext(EIdentifierOrMarkerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterAssociationExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitAssociationExpression(this);
		}
	}


}



class AttributionExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_attributionExpression;
    }

	optionalIdentifier() {
	    return this.getTypedRuleContext(OptionalIdentifierContext,0);
	};

	eIdentifier() {
	    return this.getTypedRuleContext(EIdentifierContext,0);
	};

	agIdentifier() {
	    return this.getTypedRuleContext(AgIdentifierContext,0);
	};

	optionalAttributeValuePairs() {
	    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterAttributionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitAttributionExpression(this);
		}
	}


}



class DelegationExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_delegationExpression;
    }

	optionalIdentifier() {
	    return this.getTypedRuleContext(OptionalIdentifierContext,0);
	};

	agIdentifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AgIdentifierContext);
	    } else {
	        return this.getTypedRuleContext(AgIdentifierContext,i);
	    }
	};

	optionalAttributeValuePairs() {
	    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
	};

	aIdentifierOrMarker() {
	    return this.getTypedRuleContext(AIdentifierOrMarkerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterDelegationExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitDelegationExpression(this);
		}
	}


}



class DerivationExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_derivationExpression;
    }

	optionalIdentifier() {
	    return this.getTypedRuleContext(OptionalIdentifierContext,0);
	};

	eIdentifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EIdentifierContext);
	    } else {
	        return this.getTypedRuleContext(EIdentifierContext,i);
	    }
	};

	optionalAttributeValuePairs() {
	    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
	};

	aIdentifierOrMarker() {
	    return this.getTypedRuleContext(AIdentifierOrMarkerContext,0);
	};

	gIdentifierOrMarker() {
	    return this.getTypedRuleContext(GIdentifierOrMarkerContext,0);
	};

	uIdentifierOrMarker() {
	    return this.getTypedRuleContext(UIdentifierOrMarkerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterDerivationExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitDerivationExpression(this);
		}
	}


}



class InfluenceExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_influenceExpression;
    }

	optionalIdentifier() {
	    return this.getTypedRuleContext(OptionalIdentifierContext,0);
	};

	eIdentifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EIdentifierContext);
	    } else {
	        return this.getTypedRuleContext(EIdentifierContext,i);
	    }
	};

	optionalAttributeValuePairs() {
	    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterInfluenceExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitInfluenceExpression(this);
		}
	}


}



class AlternateExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_alternateExpression;
    }

	eIdentifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EIdentifierContext);
	    } else {
	        return this.getTypedRuleContext(EIdentifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterAlternateExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitAlternateExpression(this);
		}
	}


}



class SpecializationExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_specializationExpression;
    }

	eIdentifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EIdentifierContext);
	    } else {
	        return this.getTypedRuleContext(EIdentifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterSpecializationExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitSpecializationExpression(this);
		}
	}


}



class MembershipExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_membershipExpression;
    }

	cIdentifier() {
	    return this.getTypedRuleContext(CIdentifierContext,0);
	};

	eIdentifier() {
	    return this.getTypedRuleContext(EIdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterMembershipExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitMembershipExpression(this);
		}
	}


}



class ExtensibilityExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_extensibilityExpression;
    }

	optionalIdentifier() {
	    return this.getTypedRuleContext(OptionalIdentifierContext,0);
	};

	extensibilityArgument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExtensibilityArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ExtensibilityArgumentContext,i);
	    }
	};

	optionalAttributeValuePairs() {
	    return this.getTypedRuleContext(OptionalAttributeValuePairsContext,0);
	};

	PREFX() {
	    return this.getToken(PROV_NParser.PREFX, 0);
	};

	QUALIFIED_NAME() {
	    return this.getToken(PROV_NParser.QUALIFIED_NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterExtensibilityExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitExtensibilityExpression(this);
		}
	}


}



class ExtensibilityArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_extensibilityArgument;
    }

	identifierOrMarker() {
	    return this.getTypedRuleContext(IdentifierOrMarkerContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	time() {
	    return this.getTypedRuleContext(TimeContext,0);
	};

	extensibilityExpression() {
	    return this.getTypedRuleContext(ExtensibilityExpressionContext,0);
	};

	extensibilityTuple() {
	    return this.getTypedRuleContext(ExtensibilityTupleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterExtensibilityArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitExtensibilityArgument(this);
		}
	}


}



class ExtensibilityTupleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PROV_NParser.RULE_extensibilityTuple;
    }

	extensibilityArgument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExtensibilityArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ExtensibilityArgumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.enterExtensibilityTuple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PROV_NListener ) {
	        listener.exitExtensibilityTuple(this);
		}
	}


}




PROV_NParser.DocumentContext = DocumentContext; 
PROV_NParser.NamespaceDeclarationsContext = NamespaceDeclarationsContext; 
PROV_NParser.DefaultNamespaceDeclarationContext = DefaultNamespaceDeclarationContext; 
PROV_NParser.NamespaceDeclarationContext = NamespaceDeclarationContext; 
PROV_NParser.Namespace_Context = Namespace_Context; 
PROV_NParser.BundleContext = BundleContext; 
PROV_NParser.IdentifierContext = IdentifierContext; 
PROV_NParser.ExpressionContext = ExpressionContext; 
PROV_NParser.EntityExpressionContext = EntityExpressionContext; 
PROV_NParser.OptionalAttributeValuePairsContext = OptionalAttributeValuePairsContext; 
PROV_NParser.AttributeValuePairsContext = AttributeValuePairsContext; 
PROV_NParser.AttributeValuePairContext = AttributeValuePairContext; 
PROV_NParser.AttributeContext = AttributeContext; 
PROV_NParser.LiteralContext = LiteralContext; 
PROV_NParser.TypedLiteralContext = TypedLiteralContext; 
PROV_NParser.DatatypeContext = DatatypeContext; 
PROV_NParser.ConvenienceNotationContext = ConvenienceNotationContext; 
PROV_NParser.ActivityExpressionContext = ActivityExpressionContext; 
PROV_NParser.TimeOrMarkerContext = TimeOrMarkerContext; 
PROV_NParser.TimeContext = TimeContext; 
PROV_NParser.GenerationExpressionContext = GenerationExpressionContext; 
PROV_NParser.OptionalIdentifierContext = OptionalIdentifierContext; 
PROV_NParser.IdentifierOrMarkerContext = IdentifierOrMarkerContext; 
PROV_NParser.EIdentifierContext = EIdentifierContext; 
PROV_NParser.EIdentifierOrMarkerContext = EIdentifierOrMarkerContext; 
PROV_NParser.AIdentifierOrMarkerContext = AIdentifierOrMarkerContext; 
PROV_NParser.AIdentifierContext = AIdentifierContext; 
PROV_NParser.AgIdentifierOrMarkerContext = AgIdentifierOrMarkerContext; 
PROV_NParser.AgIdentifierContext = AgIdentifierContext; 
PROV_NParser.CIdentifierContext = CIdentifierContext; 
PROV_NParser.GIdentifierContext = GIdentifierContext; 
PROV_NParser.GIdentifierOrMarkerContext = GIdentifierOrMarkerContext; 
PROV_NParser.UIdentifierContext = UIdentifierContext; 
PROV_NParser.UIdentifierOrMarkerContext = UIdentifierOrMarkerContext; 
PROV_NParser.UsageExpressionContext = UsageExpressionContext; 
PROV_NParser.StartExpressionContext = StartExpressionContext; 
PROV_NParser.EndExpressionContext = EndExpressionContext; 
PROV_NParser.InvalidationExpressionContext = InvalidationExpressionContext; 
PROV_NParser.CommunicationExpressionContext = CommunicationExpressionContext; 
PROV_NParser.AgentExpressionContext = AgentExpressionContext; 
PROV_NParser.AssociationExpressionContext = AssociationExpressionContext; 
PROV_NParser.AttributionExpressionContext = AttributionExpressionContext; 
PROV_NParser.DelegationExpressionContext = DelegationExpressionContext; 
PROV_NParser.DerivationExpressionContext = DerivationExpressionContext; 
PROV_NParser.InfluenceExpressionContext = InfluenceExpressionContext; 
PROV_NParser.AlternateExpressionContext = AlternateExpressionContext; 
PROV_NParser.SpecializationExpressionContext = SpecializationExpressionContext; 
PROV_NParser.MembershipExpressionContext = MembershipExpressionContext; 
PROV_NParser.ExtensibilityExpressionContext = ExtensibilityExpressionContext; 
PROV_NParser.ExtensibilityArgumentContext = ExtensibilityArgumentContext; 
PROV_NParser.ExtensibilityTupleContext = ExtensibilityTupleContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
