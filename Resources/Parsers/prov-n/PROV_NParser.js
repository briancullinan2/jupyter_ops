// Generated from Resources/Parsers/prov-n/PROV_N.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import PROV_NListener from './PROV_NListener.js';
const serializedATN = [4,1,52,504,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,1,0,1,0,3,0,105,8,0,1,0,5,0,108,8,0,10,0,12,0,111,9,0,
1,0,1,0,5,0,115,8,0,10,0,12,0,118,9,0,3,0,120,8,0,1,0,1,0,1,1,1,1,3,1,126,
8,1,1,1,5,1,129,8,1,10,1,12,1,132,9,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,
4,1,5,1,5,1,5,3,5,146,8,5,1,5,5,5,149,8,5,10,5,12,5,152,9,5,1,5,1,5,1,6,
1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,3,7,176,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,3,9,189,8,9,
1,10,1,10,1,10,1,10,5,10,195,8,10,10,10,12,10,198,9,10,3,10,200,8,10,1,11,
1,11,1,11,1,11,1,12,1,12,1,13,1,13,3,13,210,8,13,1,14,1,14,1,14,1,14,1,15,
1,15,1,16,1,16,3,16,220,8,16,1,16,1,16,3,16,224,8,16,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,3,17,234,8,17,1,17,1,17,1,17,1,18,1,18,3,18,241,8,18,
1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,254,8,20,1,20,
1,20,1,20,1,21,1,21,1,21,3,21,262,8,21,1,22,1,22,3,22,266,8,22,1,23,1,23,
1,24,1,24,3,24,272,8,24,1,25,1,25,3,25,276,8,25,1,26,1,26,1,27,1,27,3,27,
282,8,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,3,31,292,8,31,1,32,1,32,
1,33,1,33,3,33,298,8,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,
309,8,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
1,35,3,35,325,8,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,
1,36,1,36,1,36,3,36,341,8,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,
1,37,1,37,1,37,3,37,355,8,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,
1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,
40,1,40,1,40,1,40,3,40,384,8,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,
1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,406,8,42,
1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,
43,1,43,3,43,424,8,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,
1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,
46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,
5,48,465,8,48,10,48,12,48,468,9,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,
49,3,49,478,8,49,1,50,1,50,1,50,1,50,5,50,484,8,50,10,50,12,50,487,9,50,
1,50,1,50,1,50,1,50,1,50,1,50,5,50,495,8,50,10,50,12,50,498,9,50,1,50,1,
50,3,50,502,8,50,1,50,0,0,51,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
80,82,84,86,88,90,92,94,96,98,100,0,1,1,0,42,43,509,0,102,1,0,0,0,2,125,
1,0,0,0,4,133,1,0,0,0,6,136,1,0,0,0,8,140,1,0,0,0,10,142,1,0,0,0,12,155,
1,0,0,0,14,175,1,0,0,0,16,177,1,0,0,0,18,188,1,0,0,0,20,199,1,0,0,0,22,201,
1,0,0,0,24,205,1,0,0,0,26,209,1,0,0,0,28,211,1,0,0,0,30,215,1,0,0,0,32,223,
1,0,0,0,34,225,1,0,0,0,36,240,1,0,0,0,38,242,1,0,0,0,40,244,1,0,0,0,42,261,
1,0,0,0,44,265,1,0,0,0,46,267,1,0,0,0,48,271,1,0,0,0,50,275,1,0,0,0,52,277,
1,0,0,0,54,281,1,0,0,0,56,283,1,0,0,0,58,285,1,0,0,0,60,287,1,0,0,0,62,291,
1,0,0,0,64,293,1,0,0,0,66,297,1,0,0,0,68,299,1,0,0,0,70,313,1,0,0,0,72,329,
1,0,0,0,74,345,1,0,0,0,76,359,1,0,0,0,78,368,1,0,0,0,80,374,1,0,0,0,82,388,
1,0,0,0,84,397,1,0,0,0,86,410,1,0,0,0,88,428,1,0,0,0,90,437,1,0,0,0,92,444,
1,0,0,0,94,451,1,0,0,0,96,458,1,0,0,0,98,477,1,0,0,0,100,501,1,0,0,0,102,
104,5,30,0,0,103,105,3,2,1,0,104,103,1,0,0,0,104,105,1,0,0,0,105,109,1,0,
0,0,106,108,3,14,7,0,107,106,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,109,
110,1,0,0,0,110,119,1,0,0,0,111,109,1,0,0,0,112,116,3,10,5,0,113,115,3,10,
5,0,114,113,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,
120,1,0,0,0,118,116,1,0,0,0,119,112,1,0,0,0,119,120,1,0,0,0,120,121,1,0,
0,0,121,122,5,31,0,0,122,1,1,0,0,0,123,126,3,4,2,0,124,126,3,6,3,0,125,123,
1,0,0,0,125,124,1,0,0,0,126,130,1,0,0,0,127,129,3,6,3,0,128,127,1,0,0,0,
129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,3,1,0,0,0,132,130,1,
0,0,0,133,134,5,1,0,0,134,135,5,37,0,0,135,5,1,0,0,0,136,137,5,2,0,0,137,
138,5,42,0,0,138,139,3,8,4,0,139,7,1,0,0,0,140,141,5,37,0,0,141,9,1,0,0,
0,142,143,5,32,0,0,143,145,3,12,6,0,144,146,3,2,1,0,145,144,1,0,0,0,145,
146,1,0,0,0,146,150,1,0,0,0,147,149,3,14,7,0,148,147,1,0,0,0,149,152,1,0,
0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,153,1,0,0,0,152,150,1,0,0,0,153,
154,5,33,0,0,154,11,1,0,0,0,155,156,7,0,0,0,156,13,1,0,0,0,157,176,3,16,
8,0,158,176,3,34,17,0,159,176,3,40,20,0,160,176,3,68,34,0,161,176,3,70,35,
0,162,176,3,72,36,0,163,176,3,74,37,0,164,176,3,76,38,0,165,176,3,78,39,
0,166,176,3,80,40,0,167,176,3,82,41,0,168,176,3,84,42,0,169,176,3,86,43,
0,170,176,3,88,44,0,171,176,3,90,45,0,172,176,3,92,46,0,173,176,3,94,47,
0,174,176,3,96,48,0,175,157,1,0,0,0,175,158,1,0,0,0,175,159,1,0,0,0,175,
160,1,0,0,0,175,161,1,0,0,0,175,162,1,0,0,0,175,163,1,0,0,0,175,164,1,0,
0,0,175,165,1,0,0,0,175,166,1,0,0,0,175,167,1,0,0,0,175,168,1,0,0,0,175,
169,1,0,0,0,175,170,1,0,0,0,175,171,1,0,0,0,175,172,1,0,0,0,175,173,1,0,
0,0,175,174,1,0,0,0,176,15,1,0,0,0,177,178,5,3,0,0,178,179,5,4,0,0,179,180,
3,12,6,0,180,181,3,18,9,0,181,182,5,5,0,0,182,17,1,0,0,0,183,184,5,6,0,0,
184,185,5,7,0,0,185,186,3,20,10,0,186,187,5,8,0,0,187,189,1,0,0,0,188,183,
1,0,0,0,188,189,1,0,0,0,189,19,1,0,0,0,190,200,1,0,0,0,191,196,3,22,11,0,
192,193,5,6,0,0,193,195,3,22,11,0,194,192,1,0,0,0,195,198,1,0,0,0,196,194,
1,0,0,0,196,197,1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,199,190,1,0,0,0,
199,191,1,0,0,0,200,21,1,0,0,0,201,202,3,24,12,0,202,203,5,9,0,0,203,204,
3,26,13,0,204,23,1,0,0,0,205,206,7,0,0,0,206,25,1,0,0,0,207,210,3,28,14,
0,208,210,3,32,16,0,209,207,1,0,0,0,209,208,1,0,0,0,210,27,1,0,0,0,211,212,
5,45,0,0,212,213,5,10,0,0,213,214,3,30,15,0,214,29,1,0,0,0,215,216,7,0,0,
0,216,31,1,0,0,0,217,219,5,45,0,0,218,220,5,52,0,0,219,218,1,0,0,0,219,220,
1,0,0,0,220,224,1,0,0,0,221,224,5,46,0,0,222,224,5,47,0,0,223,217,1,0,0,
0,223,221,1,0,0,0,223,222,1,0,0,0,224,33,1,0,0,0,225,226,5,11,0,0,226,227,
5,4,0,0,227,233,3,12,6,0,228,229,5,6,0,0,229,230,3,36,18,0,230,231,5,6,0,
0,231,232,3,36,18,0,232,234,1,0,0,0,233,228,1,0,0,0,233,234,1,0,0,0,234,
235,1,0,0,0,235,236,3,18,9,0,236,237,5,5,0,0,237,35,1,0,0,0,238,241,3,38,
19,0,239,241,5,41,0,0,240,238,1,0,0,0,240,239,1,0,0,0,241,37,1,0,0,0,242,
243,5,51,0,0,243,39,1,0,0,0,244,245,5,12,0,0,245,246,5,4,0,0,246,247,3,42,
21,0,247,253,3,46,23,0,248,249,5,6,0,0,249,250,3,50,25,0,250,251,5,6,0,0,
251,252,3,36,18,0,252,254,1,0,0,0,253,248,1,0,0,0,253,254,1,0,0,0,254,255,
1,0,0,0,255,256,3,18,9,0,256,257,5,5,0,0,257,41,1,0,0,0,258,259,3,44,22,
0,259,260,5,13,0,0,260,262,1,0,0,0,261,258,1,0,0,0,261,262,1,0,0,0,262,43,
1,0,0,0,263,266,3,12,6,0,264,266,5,41,0,0,265,263,1,0,0,0,265,264,1,0,0,
0,266,45,1,0,0,0,267,268,3,12,6,0,268,47,1,0,0,0,269,272,3,46,23,0,270,272,
5,41,0,0,271,269,1,0,0,0,271,270,1,0,0,0,272,49,1,0,0,0,273,276,3,52,26,
0,274,276,5,41,0,0,275,273,1,0,0,0,275,274,1,0,0,0,276,51,1,0,0,0,277,278,
3,12,6,0,278,53,1,0,0,0,279,282,3,56,28,0,280,282,5,41,0,0,281,279,1,0,0,
0,281,280,1,0,0,0,282,55,1,0,0,0,283,284,3,12,6,0,284,57,1,0,0,0,285,286,
3,12,6,0,286,59,1,0,0,0,287,288,3,12,6,0,288,61,1,0,0,0,289,292,3,60,30,
0,290,292,5,41,0,0,291,289,1,0,0,0,291,290,1,0,0,0,292,63,1,0,0,0,293,294,
3,12,6,0,294,65,1,0,0,0,295,298,3,64,32,0,296,298,5,41,0,0,297,295,1,0,0,
0,297,296,1,0,0,0,298,67,1,0,0,0,299,300,5,14,0,0,300,301,5,4,0,0,301,302,
3,42,21,0,302,308,3,52,26,0,303,304,5,6,0,0,304,305,3,48,24,0,305,306,5,
6,0,0,306,307,3,36,18,0,307,309,1,0,0,0,308,303,1,0,0,0,308,309,1,0,0,0,
309,310,1,0,0,0,310,311,3,18,9,0,311,312,5,5,0,0,312,69,1,0,0,0,313,314,
5,15,0,0,314,315,5,4,0,0,315,316,3,42,21,0,316,324,3,52,26,0,317,318,5,6,
0,0,318,319,3,48,24,0,319,320,5,6,0,0,320,321,3,50,25,0,321,322,5,6,0,0,
322,323,3,36,18,0,323,325,1,0,0,0,324,317,1,0,0,0,324,325,1,0,0,0,325,326,
1,0,0,0,326,327,3,18,9,0,327,328,5,5,0,0,328,71,1,0,0,0,329,330,5,16,0,0,
330,331,5,4,0,0,331,332,3,42,21,0,332,340,3,52,26,0,333,334,5,6,0,0,334,
335,3,48,24,0,335,336,5,6,0,0,336,337,3,50,25,0,337,338,5,6,0,0,338,339,
3,36,18,0,339,341,1,0,0,0,340,333,1,0,0,0,340,341,1,0,0,0,341,342,1,0,0,
0,342,343,3,18,9,0,343,344,5,5,0,0,344,73,1,0,0,0,345,346,5,17,0,0,346,347,
5,4,0,0,347,348,3,42,21,0,348,354,3,46,23,0,349,350,5,6,0,0,350,351,3,50,
25,0,351,352,5,6,0,0,352,353,3,36,18,0,353,355,1,0,0,0,354,349,1,0,0,0,354,
355,1,0,0,0,355,356,1,0,0,0,356,357,3,18,9,0,357,358,5,5,0,0,358,75,1,0,
0,0,359,360,5,18,0,0,360,361,5,4,0,0,361,362,3,42,21,0,362,363,3,52,26,0,
363,364,5,6,0,0,364,365,3,52,26,0,365,366,3,18,9,0,366,367,5,5,0,0,367,77,
1,0,0,0,368,369,5,19,0,0,369,370,5,4,0,0,370,371,3,12,6,0,371,372,3,18,9,
0,372,373,5,5,0,0,373,79,1,0,0,0,374,375,5,20,0,0,375,376,5,4,0,0,376,377,
3,42,21,0,377,383,3,52,26,0,378,379,5,6,0,0,379,380,3,54,27,0,380,381,5,
6,0,0,381,382,3,48,24,0,382,384,1,0,0,0,383,378,1,0,0,0,383,384,1,0,0,0,
384,385,1,0,0,0,385,386,3,18,9,0,386,387,5,5,0,0,387,81,1,0,0,0,388,389,
5,21,0,0,389,390,5,4,0,0,390,391,3,42,21,0,391,392,3,46,23,0,392,393,5,6,
0,0,393,394,3,56,28,0,394,395,3,18,9,0,395,396,5,5,0,0,396,83,1,0,0,0,397,
398,5,22,0,0,398,399,5,4,0,0,399,400,3,42,21,0,400,401,3,56,28,0,401,402,
5,6,0,0,402,405,3,56,28,0,403,404,5,6,0,0,404,406,3,50,25,0,405,403,1,0,
0,0,405,406,1,0,0,0,406,407,1,0,0,0,407,408,3,18,9,0,408,409,5,5,0,0,409,
85,1,0,0,0,410,411,5,23,0,0,411,412,5,4,0,0,412,413,3,42,21,0,413,414,3,
46,23,0,414,415,5,6,0,0,415,423,3,46,23,0,416,417,5,6,0,0,417,418,3,50,25,
0,418,419,5,6,0,0,419,420,3,62,31,0,420,421,5,6,0,0,421,422,3,66,33,0,422,
424,1,0,0,0,423,416,1,0,0,0,423,424,1,0,0,0,424,425,1,0,0,0,425,426,3,18,
9,0,426,427,5,5,0,0,427,87,1,0,0,0,428,429,5,24,0,0,429,430,5,4,0,0,430,
431,3,42,21,0,431,432,3,46,23,0,432,433,5,6,0,0,433,434,3,46,23,0,434,435,
3,18,9,0,435,436,5,5,0,0,436,89,1,0,0,0,437,438,5,25,0,0,438,439,5,4,0,0,
439,440,3,46,23,0,440,441,5,6,0,0,441,442,3,46,23,0,442,443,5,5,0,0,443,
91,1,0,0,0,444,445,5,26,0,0,445,446,5,4,0,0,446,447,3,46,23,0,447,448,5,
6,0,0,448,449,3,46,23,0,449,450,5,5,0,0,450,93,1,0,0,0,451,452,5,27,0,0,
452,453,5,4,0,0,453,454,3,58,29,0,454,455,5,6,0,0,455,456,3,46,23,0,456,
457,5,5,0,0,457,95,1,0,0,0,458,459,7,0,0,0,459,460,5,4,0,0,460,461,3,42,
21,0,461,466,3,98,49,0,462,463,5,6,0,0,463,465,3,98,49,0,464,462,1,0,0,0,
465,468,1,0,0,0,466,464,1,0,0,0,466,467,1,0,0,0,467,469,1,0,0,0,468,466,
1,0,0,0,469,470,3,18,9,0,470,471,5,5,0,0,471,97,1,0,0,0,472,478,3,44,22,
0,473,478,3,26,13,0,474,478,3,38,19,0,475,478,3,96,48,0,476,478,3,100,50,
0,477,472,1,0,0,0,477,473,1,0,0,0,477,474,1,0,0,0,477,475,1,0,0,0,477,476,
1,0,0,0,478,99,1,0,0,0,479,480,5,28,0,0,480,485,3,98,49,0,481,482,5,6,0,
0,482,484,3,98,49,0,483,481,1,0,0,0,484,487,1,0,0,0,485,483,1,0,0,0,485,
486,1,0,0,0,486,488,1,0,0,0,487,485,1,0,0,0,488,489,5,29,0,0,489,502,1,0,
0,0,490,491,5,4,0,0,491,496,3,98,49,0,492,493,5,6,0,0,493,495,3,98,49,0,
494,492,1,0,0,0,495,498,1,0,0,0,496,494,1,0,0,0,496,497,1,0,0,0,497,499,
1,0,0,0,498,496,1,0,0,0,499,500,5,5,0,0,500,502,1,0,0,0,501,479,1,0,0,0,
501,490,1,0,0,0,502,101,1,0,0,0,37,104,109,116,119,125,130,145,150,175,188,
196,199,209,219,223,233,240,253,261,265,271,275,281,291,297,308,324,340,
354,383,405,423,466,477,485,496,501];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

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

    get atn() {
        return atn;
    }



	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PROV_NParser.RULE_document);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(PROV_NParser.DOCUMENT);
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PROV_NParser.T__0 || _la===PROV_NParser.T__1) {
	            this.state = 103;
	            this.namespaceDeclarations();
	        }

	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PROV_NParser.T__2) | (1 << PROV_NParser.T__10) | (1 << PROV_NParser.T__11) | (1 << PROV_NParser.T__13) | (1 << PROV_NParser.T__14) | (1 << PROV_NParser.T__15) | (1 << PROV_NParser.T__16) | (1 << PROV_NParser.T__17) | (1 << PROV_NParser.T__18) | (1 << PROV_NParser.T__19) | (1 << PROV_NParser.T__20) | (1 << PROV_NParser.T__21) | (1 << PROV_NParser.T__22) | (1 << PROV_NParser.T__23) | (1 << PROV_NParser.T__24) | (1 << PROV_NParser.T__25) | (1 << PROV_NParser.T__26))) !== 0) || _la===PROV_NParser.PREFX || _la===PROV_NParser.QUALIFIED_NAME) {
	            this.state = 106;
	            this.expression();
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PROV_NParser.BUNDLE) {
	            this.state = 112;
	            this.bundle();
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===PROV_NParser.BUNDLE) {
	                this.state = 113;
	                this.bundle();
	                this.state = 118;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 121;
	        this.match(PROV_NParser.ENDDOCUMENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PROV_NParser.T__0:
	            this.state = 123;
	            this.defaultNamespaceDeclaration();
	            break;
	        case PROV_NParser.T__1:
	            this.state = 124;
	            this.namespaceDeclaration();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===PROV_NParser.T__1) {
	            this.state = 127;
	            this.namespaceDeclaration();
	            this.state = 132;
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
	        this.state = 133;
	        this.match(PROV_NParser.T__0);
	        this.state = 134;
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
	        this.state = 136;
	        this.match(PROV_NParser.T__1);
	        this.state = 137;
	        this.match(PROV_NParser.PREFX);
	        this.state = 138;
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
	        this.state = 140;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.match(PROV_NParser.BUNDLE);
	        this.state = 143;
	        this.identifier();
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PROV_NParser.T__0 || _la===PROV_NParser.T__1) {
	            this.state = 144;
	            this.namespaceDeclarations();
	        }

	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PROV_NParser.T__2) | (1 << PROV_NParser.T__10) | (1 << PROV_NParser.T__11) | (1 << PROV_NParser.T__13) | (1 << PROV_NParser.T__14) | (1 << PROV_NParser.T__15) | (1 << PROV_NParser.T__16) | (1 << PROV_NParser.T__17) | (1 << PROV_NParser.T__18) | (1 << PROV_NParser.T__19) | (1 << PROV_NParser.T__20) | (1 << PROV_NParser.T__21) | (1 << PROV_NParser.T__22) | (1 << PROV_NParser.T__23) | (1 << PROV_NParser.T__24) | (1 << PROV_NParser.T__25) | (1 << PROV_NParser.T__26))) !== 0) || _la===PROV_NParser.PREFX || _la===PROV_NParser.QUALIFIED_NAME) {
	            this.state = 147;
	            this.expression();
	            this.state = 152;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 153;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        _la = this._input.LA(1);
	        if(!(_la===PROV_NParser.PREFX || _la===PROV_NParser.QUALIFIED_NAME)) {
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
	        this.state = 175;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PROV_NParser.T__2:
	            this.state = 157;
	            this.entityExpression();
	            break;
	        case PROV_NParser.T__10:
	            this.state = 158;
	            this.activityExpression();
	            break;
	        case PROV_NParser.T__11:
	            this.state = 159;
	            this.generationExpression();
	            break;
	        case PROV_NParser.T__13:
	            this.state = 160;
	            this.usageExpression();
	            break;
	        case PROV_NParser.T__14:
	            this.state = 161;
	            this.startExpression();
	            break;
	        case PROV_NParser.T__15:
	            this.state = 162;
	            this.endExpression();
	            break;
	        case PROV_NParser.T__16:
	            this.state = 163;
	            this.invalidationExpression();
	            break;
	        case PROV_NParser.T__17:
	            this.state = 164;
	            this.communicationExpression();
	            break;
	        case PROV_NParser.T__18:
	            this.state = 165;
	            this.agentExpression();
	            break;
	        case PROV_NParser.T__19:
	            this.state = 166;
	            this.associationExpression();
	            break;
	        case PROV_NParser.T__20:
	            this.state = 167;
	            this.attributionExpression();
	            break;
	        case PROV_NParser.T__21:
	            this.state = 168;
	            this.delegationExpression();
	            break;
	        case PROV_NParser.T__22:
	            this.state = 169;
	            this.derivationExpression();
	            break;
	        case PROV_NParser.T__23:
	            this.state = 170;
	            this.influenceExpression();
	            break;
	        case PROV_NParser.T__24:
	            this.state = 171;
	            this.alternateExpression();
	            break;
	        case PROV_NParser.T__25:
	            this.state = 172;
	            this.specializationExpression();
	            break;
	        case PROV_NParser.T__26:
	            this.state = 173;
	            this.membershipExpression();
	            break;
	        case PROV_NParser.PREFX:
	        case PROV_NParser.QUALIFIED_NAME:
	            this.state = 174;
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
	        this.state = 177;
	        this.match(PROV_NParser.T__2);
	        this.state = 178;
	        this.match(PROV_NParser.T__3);
	        this.state = 179;
	        this.identifier();
	        this.state = 180;
	        this.optionalAttributeValuePairs();
	        this.state = 181;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PROV_NParser.T__5) {
	            this.state = 183;
	            this.match(PROV_NParser.T__5);
	            this.state = 184;
	            this.match(PROV_NParser.T__6);
	            this.state = 185;
	            this.attributeValuePairs();
	            this.state = 186;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PROV_NParser.T__7:
	            break;
	        case PROV_NParser.PREFX:
	        case PROV_NParser.QUALIFIED_NAME:
	            this.state = 191;
	            this.attributeValuePair();
	            this.state = 196;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===PROV_NParser.T__5) {
	                this.state = 192;
	                this.match(PROV_NParser.T__5);
	                this.state = 193;
	                this.attributeValuePair();
	                this.state = 198;
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
	        this.state = 201;
	        this.attribute();
	        this.state = 202;
	        this.match(PROV_NParser.T__8);
	        this.state = 203;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        _la = this._input.LA(1);
	        if(!(_la===PROV_NParser.PREFX || _la===PROV_NParser.QUALIFIED_NAME)) {
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
	        this.state = 209;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 207;
	            this.typedLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 208;
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
	        this.state = 211;
	        this.match(PROV_NParser.STRING_LITERAL);
	        this.state = 212;
	        this.match(PROV_NParser.T__9);
	        this.state = 213;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        _la = this._input.LA(1);
	        if(!(_la===PROV_NParser.PREFX || _la===PROV_NParser.QUALIFIED_NAME)) {
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
	    var _la = 0; // Token type
	    try {
	        this.state = 223;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PROV_NParser.STRING_LITERAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 217;
	            this.match(PROV_NParser.STRING_LITERAL);
	            this.state = 219;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PROV_NParser.LANGTAG) {
	                this.state = 218;
	                this.match(PROV_NParser.LANGTAG);
	            }

	            break;
	        case PROV_NParser.INT_LITERAL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 221;
	            this.match(PROV_NParser.INT_LITERAL);
	            break;
	        case PROV_NParser.QUALIFIED_NAME_LITERAL:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 222;
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
	        this.state = 225;
	        this.match(PROV_NParser.T__10);
	        this.state = 226;
	        this.match(PROV_NParser.T__3);
	        this.state = 227;
	        this.identifier();
	        this.state = 233;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 228;
	            this.match(PROV_NParser.T__5);
	            this.state = 229;
	            this.timeOrMarker();
	            this.state = 230;
	            this.match(PROV_NParser.T__5);
	            this.state = 231;
	            this.timeOrMarker();

	        }
	        this.state = 235;
	        this.optionalAttributeValuePairs();
	        this.state = 236;
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
	        this.state = 240;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PROV_NParser.DATETIME:
	            this.state = 238;
	            this.time();
	            break;
	        case PROV_NParser.MINUS:
	            this.state = 239;
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
	        this.state = 242;
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
	        this.state = 244;
	        this.match(PROV_NParser.T__11);
	        this.state = 245;
	        this.match(PROV_NParser.T__3);
	        this.state = 246;
	        this.optionalIdentifier();
	        this.state = 247;
	        this.eIdentifier();
	        this.state = 253;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 248;
	            this.match(PROV_NParser.T__5);
	            this.state = 249;
	            this.aIdentifierOrMarker();
	            this.state = 250;
	            this.match(PROV_NParser.T__5);
	            this.state = 251;
	            this.timeOrMarker();

	        }
	        this.state = 255;
	        this.optionalAttributeValuePairs();
	        this.state = 256;
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
	        this.state = 261;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        if(la_===1) {
	            this.state = 258;
	            this.identifierOrMarker();
	            this.state = 259;
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
	        this.state = 265;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PROV_NParser.PREFX:
	        case PROV_NParser.QUALIFIED_NAME:
	            this.state = 263;
	            this.identifier();
	            break;
	        case PROV_NParser.MINUS:
	            this.state = 264;
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
	        this.state = 267;
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
	        this.state = 271;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PROV_NParser.PREFX:
	        case PROV_NParser.QUALIFIED_NAME:
	            this.state = 269;
	            this.eIdentifier();
	            break;
	        case PROV_NParser.MINUS:
	            this.state = 270;
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
	        this.state = 275;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PROV_NParser.PREFX:
	        case PROV_NParser.QUALIFIED_NAME:
	            this.state = 273;
	            this.aIdentifier();
	            break;
	        case PROV_NParser.MINUS:
	            this.state = 274;
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
	        this.state = 277;
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
	        this.state = 281;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PROV_NParser.PREFX:
	        case PROV_NParser.QUALIFIED_NAME:
	            this.state = 279;
	            this.agIdentifier();
	            break;
	        case PROV_NParser.MINUS:
	            this.state = 280;
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
	        this.state = 283;
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
	        this.state = 285;
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
	        this.state = 287;
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
	        this.state = 291;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PROV_NParser.PREFX:
	        case PROV_NParser.QUALIFIED_NAME:
	            this.state = 289;
	            this.gIdentifier();
	            break;
	        case PROV_NParser.MINUS:
	            this.state = 290;
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
	        this.state = 293;
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
	        this.state = 297;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PROV_NParser.PREFX:
	        case PROV_NParser.QUALIFIED_NAME:
	            this.state = 295;
	            this.uIdentifier();
	            break;
	        case PROV_NParser.MINUS:
	            this.state = 296;
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
	        this.state = 299;
	        this.match(PROV_NParser.T__13);
	        this.state = 300;
	        this.match(PROV_NParser.T__3);
	        this.state = 301;
	        this.optionalIdentifier();
	        this.state = 302;
	        this.aIdentifier();
	        this.state = 308;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        if(la_===1) {
	            this.state = 303;
	            this.match(PROV_NParser.T__5);
	            this.state = 304;
	            this.eIdentifierOrMarker();
	            this.state = 305;
	            this.match(PROV_NParser.T__5);
	            this.state = 306;
	            this.timeOrMarker();

	        }
	        this.state = 310;
	        this.optionalAttributeValuePairs();
	        this.state = 311;
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
	        this.state = 313;
	        this.match(PROV_NParser.T__14);
	        this.state = 314;
	        this.match(PROV_NParser.T__3);
	        this.state = 315;
	        this.optionalIdentifier();
	        this.state = 316;
	        this.aIdentifier();
	        this.state = 324;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        if(la_===1) {
	            this.state = 317;
	            this.match(PROV_NParser.T__5);
	            this.state = 318;
	            this.eIdentifierOrMarker();
	            this.state = 319;
	            this.match(PROV_NParser.T__5);
	            this.state = 320;
	            this.aIdentifierOrMarker();
	            this.state = 321;
	            this.match(PROV_NParser.T__5);
	            this.state = 322;
	            this.timeOrMarker();

	        }
	        this.state = 326;
	        this.optionalAttributeValuePairs();
	        this.state = 327;
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
	        this.state = 329;
	        this.match(PROV_NParser.T__15);
	        this.state = 330;
	        this.match(PROV_NParser.T__3);
	        this.state = 331;
	        this.optionalIdentifier();
	        this.state = 332;
	        this.aIdentifier();
	        this.state = 340;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        if(la_===1) {
	            this.state = 333;
	            this.match(PROV_NParser.T__5);
	            this.state = 334;
	            this.eIdentifierOrMarker();
	            this.state = 335;
	            this.match(PROV_NParser.T__5);
	            this.state = 336;
	            this.aIdentifierOrMarker();
	            this.state = 337;
	            this.match(PROV_NParser.T__5);
	            this.state = 338;
	            this.timeOrMarker();

	        }
	        this.state = 342;
	        this.optionalAttributeValuePairs();
	        this.state = 343;
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
	        this.state = 345;
	        this.match(PROV_NParser.T__16);
	        this.state = 346;
	        this.match(PROV_NParser.T__3);
	        this.state = 347;
	        this.optionalIdentifier();
	        this.state = 348;
	        this.eIdentifier();
	        this.state = 354;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        if(la_===1) {
	            this.state = 349;
	            this.match(PROV_NParser.T__5);
	            this.state = 350;
	            this.aIdentifierOrMarker();
	            this.state = 351;
	            this.match(PROV_NParser.T__5);
	            this.state = 352;
	            this.timeOrMarker();

	        }
	        this.state = 356;
	        this.optionalAttributeValuePairs();
	        this.state = 357;
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
	        this.state = 359;
	        this.match(PROV_NParser.T__17);
	        this.state = 360;
	        this.match(PROV_NParser.T__3);
	        this.state = 361;
	        this.optionalIdentifier();
	        this.state = 362;
	        this.aIdentifier();
	        this.state = 363;
	        this.match(PROV_NParser.T__5);
	        this.state = 364;
	        this.aIdentifier();
	        this.state = 365;
	        this.optionalAttributeValuePairs();
	        this.state = 366;
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
	        this.state = 368;
	        this.match(PROV_NParser.T__18);
	        this.state = 369;
	        this.match(PROV_NParser.T__3);
	        this.state = 370;
	        this.identifier();
	        this.state = 371;
	        this.optionalAttributeValuePairs();
	        this.state = 372;
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
	        this.state = 374;
	        this.match(PROV_NParser.T__19);
	        this.state = 375;
	        this.match(PROV_NParser.T__3);
	        this.state = 376;
	        this.optionalIdentifier();
	        this.state = 377;
	        this.aIdentifier();
	        this.state = 383;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        if(la_===1) {
	            this.state = 378;
	            this.match(PROV_NParser.T__5);
	            this.state = 379;
	            this.agIdentifierOrMarker();
	            this.state = 380;
	            this.match(PROV_NParser.T__5);
	            this.state = 381;
	            this.eIdentifierOrMarker();

	        }
	        this.state = 385;
	        this.optionalAttributeValuePairs();
	        this.state = 386;
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
	        this.state = 388;
	        this.match(PROV_NParser.T__20);
	        this.state = 389;
	        this.match(PROV_NParser.T__3);
	        this.state = 390;
	        this.optionalIdentifier();
	        this.state = 391;
	        this.eIdentifier();
	        this.state = 392;
	        this.match(PROV_NParser.T__5);
	        this.state = 393;
	        this.agIdentifier();
	        this.state = 394;
	        this.optionalAttributeValuePairs();
	        this.state = 395;
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
	        this.state = 397;
	        this.match(PROV_NParser.T__21);
	        this.state = 398;
	        this.match(PROV_NParser.T__3);
	        this.state = 399;
	        this.optionalIdentifier();
	        this.state = 400;
	        this.agIdentifier();
	        this.state = 401;
	        this.match(PROV_NParser.T__5);
	        this.state = 402;
	        this.agIdentifier();
	        this.state = 405;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        if(la_===1) {
	            this.state = 403;
	            this.match(PROV_NParser.T__5);
	            this.state = 404;
	            this.aIdentifierOrMarker();

	        }
	        this.state = 407;
	        this.optionalAttributeValuePairs();
	        this.state = 408;
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
	        this.state = 410;
	        this.match(PROV_NParser.T__22);
	        this.state = 411;
	        this.match(PROV_NParser.T__3);
	        this.state = 412;
	        this.optionalIdentifier();
	        this.state = 413;
	        this.eIdentifier();
	        this.state = 414;
	        this.match(PROV_NParser.T__5);
	        this.state = 415;
	        this.eIdentifier();
	        this.state = 423;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        if(la_===1) {
	            this.state = 416;
	            this.match(PROV_NParser.T__5);
	            this.state = 417;
	            this.aIdentifierOrMarker();
	            this.state = 418;
	            this.match(PROV_NParser.T__5);
	            this.state = 419;
	            this.gIdentifierOrMarker();
	            this.state = 420;
	            this.match(PROV_NParser.T__5);
	            this.state = 421;
	            this.uIdentifierOrMarker();

	        }
	        this.state = 425;
	        this.optionalAttributeValuePairs();
	        this.state = 426;
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
	        this.state = 428;
	        this.match(PROV_NParser.T__23);
	        this.state = 429;
	        this.match(PROV_NParser.T__3);
	        this.state = 430;
	        this.optionalIdentifier();
	        this.state = 431;
	        this.eIdentifier();
	        this.state = 432;
	        this.match(PROV_NParser.T__5);
	        this.state = 433;
	        this.eIdentifier();
	        this.state = 434;
	        this.optionalAttributeValuePairs();
	        this.state = 435;
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
	        this.state = 437;
	        this.match(PROV_NParser.T__24);
	        this.state = 438;
	        this.match(PROV_NParser.T__3);
	        this.state = 439;
	        this.eIdentifier();
	        this.state = 440;
	        this.match(PROV_NParser.T__5);
	        this.state = 441;
	        this.eIdentifier();
	        this.state = 442;
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
	        this.state = 444;
	        this.match(PROV_NParser.T__25);
	        this.state = 445;
	        this.match(PROV_NParser.T__3);
	        this.state = 446;
	        this.eIdentifier();
	        this.state = 447;
	        this.match(PROV_NParser.T__5);
	        this.state = 448;
	        this.eIdentifier();
	        this.state = 449;
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
	        this.state = 451;
	        this.match(PROV_NParser.T__26);
	        this.state = 452;
	        this.match(PROV_NParser.T__3);
	        this.state = 453;
	        this.cIdentifier();
	        this.state = 454;
	        this.match(PROV_NParser.T__5);
	        this.state = 455;
	        this.eIdentifier();
	        this.state = 456;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 458;
	        _la = this._input.LA(1);
	        if(!(_la===PROV_NParser.PREFX || _la===PROV_NParser.QUALIFIED_NAME)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 459;
	        this.match(PROV_NParser.T__3);
	        this.state = 460;
	        this.optionalIdentifier();
	        this.state = 461;
	        this.extensibilityArgument();
	        this.state = 466;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 462;
	                this.match(PROV_NParser.T__5);
	                this.state = 463;
	                this.extensibilityArgument(); 
	            }
	            this.state = 468;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
	        }

	        this.state = 469;
	        this.optionalAttributeValuePairs();
	        this.state = 470;
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
	        this.state = 477;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 472;
	            this.identifierOrMarker();
	            break;

	        case 2:
	            this.state = 473;
	            this.literal();
	            break;

	        case 3:
	            this.state = 474;
	            this.time();
	            break;

	        case 4:
	            this.state = 475;
	            this.extensibilityExpression();
	            break;

	        case 5:
	            this.state = 476;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 501;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PROV_NParser.T__27:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 479;
	            this.match(PROV_NParser.T__27);
	            this.state = 480;
	            this.extensibilityArgument();
	            this.state = 485;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===PROV_NParser.T__5) {
	                this.state = 481;
	                this.match(PROV_NParser.T__5);
	                this.state = 482;
	                this.extensibilityArgument();
	                this.state = 487;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 488;
	            this.match(PROV_NParser.T__28);
	            break;
	        case PROV_NParser.T__3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 490;
	            this.match(PROV_NParser.T__3);
	            this.state = 491;
	            this.extensibilityArgument();
	            this.state = 496;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===PROV_NParser.T__5) {
	                this.state = 492;
	                this.match(PROV_NParser.T__5);
	                this.state = 493;
	                this.extensibilityArgument();
	                this.state = 498;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 499;
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
