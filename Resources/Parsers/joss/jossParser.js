// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/joss/joss.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import jossListener from './jossListener.js';
const serializedATN = [4,1,75,501,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,
2,71,7,71,1,0,4,0,146,8,0,11,0,12,0,147,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,3,1,160,8,1,1,2,1,2,1,2,1,2,3,2,166,8,2,1,3,1,3,1,3,1,4,1,4,1,4,
1,4,1,4,3,4,176,8,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,184,8,5,1,6,1,6,1,7,1,7,
1,8,1,8,1,8,1,9,1,9,1,9,1,9,3,9,197,8,9,1,10,1,10,1,10,3,10,202,8,10,1,11,
1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,3,16,218,
8,16,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,3,18,229,8,18,1,19,1,19,
3,19,233,8,19,1,20,1,20,1,20,1,21,1,21,1,21,1,21,3,21,242,8,21,1,22,1,22,
1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,3,24,255,8,24,1,25,1,25,1,25,
1,25,3,25,261,8,25,1,26,1,26,1,26,1,26,3,26,267,8,26,1,27,1,27,1,27,3,27,
272,8,27,1,28,1,28,1,29,1,29,1,29,3,29,279,8,29,1,30,1,30,1,30,1,30,1,31,
1,31,1,31,1,31,3,31,289,8,31,1,32,1,32,3,32,293,8,32,1,33,1,33,3,33,297,
8,33,1,34,1,34,1,34,1,35,1,35,1,35,3,35,305,8,35,1,36,1,36,1,36,1,36,1,36,
1,37,4,37,313,8,37,11,37,12,37,314,1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,
40,1,40,1,41,1,41,3,41,328,8,41,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,
1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,346,8,43,1,44,1,44,1,45,1,45,
1,45,1,45,1,46,1,46,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,
49,1,49,3,49,368,8,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,50,377,8,50,1,
51,1,51,1,51,1,51,1,51,3,51,384,8,51,1,52,1,52,1,52,1,52,1,52,3,52,391,8,
52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,3,53,402,8,53,1,54,1,54,
1,54,1,54,1,55,1,55,1,55,3,55,411,8,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,
1,56,1,56,1,56,1,56,1,56,3,56,425,8,56,1,57,1,57,1,57,1,57,1,58,1,58,1,58,
1,58,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,62,1,
62,1,62,1,62,1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,
1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,
68,1,68,1,69,1,69,1,69,1,69,1,69,3,69,484,8,69,1,70,1,70,1,70,1,70,1,70,
1,70,3,70,492,8,70,1,71,1,71,1,71,1,71,1,71,3,71,499,8,71,1,71,0,0,72,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,
54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,
102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,
138,140,142,0,5,1,0,6,8,1,0,16,18,2,0,6,8,22,22,1,0,37,38,1,0,39,44,492,
0,145,1,0,0,0,2,159,1,0,0,0,4,165,1,0,0,0,6,167,1,0,0,0,8,175,1,0,0,0,10,
183,1,0,0,0,12,185,1,0,0,0,14,187,1,0,0,0,16,189,1,0,0,0,18,196,1,0,0,0,
20,201,1,0,0,0,22,203,1,0,0,0,24,205,1,0,0,0,26,207,1,0,0,0,28,209,1,0,0,
0,30,212,1,0,0,0,32,217,1,0,0,0,34,219,1,0,0,0,36,228,1,0,0,0,38,232,1,0,
0,0,40,234,1,0,0,0,42,241,1,0,0,0,44,243,1,0,0,0,46,245,1,0,0,0,48,254,1,
0,0,0,50,260,1,0,0,0,52,266,1,0,0,0,54,271,1,0,0,0,56,273,1,0,0,0,58,278,
1,0,0,0,60,280,1,0,0,0,62,288,1,0,0,0,64,292,1,0,0,0,66,296,1,0,0,0,68,298,
1,0,0,0,70,304,1,0,0,0,72,306,1,0,0,0,74,312,1,0,0,0,76,316,1,0,0,0,78,319,
1,0,0,0,80,322,1,0,0,0,82,327,1,0,0,0,84,329,1,0,0,0,86,345,1,0,0,0,88,347,
1,0,0,0,90,349,1,0,0,0,92,353,1,0,0,0,94,355,1,0,0,0,96,358,1,0,0,0,98,367,
1,0,0,0,100,376,1,0,0,0,102,383,1,0,0,0,104,390,1,0,0,0,106,401,1,0,0,0,
108,403,1,0,0,0,110,410,1,0,0,0,112,424,1,0,0,0,114,426,1,0,0,0,116,430,
1,0,0,0,118,434,1,0,0,0,120,438,1,0,0,0,122,442,1,0,0,0,124,446,1,0,0,0,
126,450,1,0,0,0,128,454,1,0,0,0,130,458,1,0,0,0,132,462,1,0,0,0,134,466,
1,0,0,0,136,472,1,0,0,0,138,483,1,0,0,0,140,491,1,0,0,0,142,498,1,0,0,0,
144,146,3,2,1,0,145,144,1,0,0,0,146,147,1,0,0,0,147,145,1,0,0,0,147,148,
1,0,0,0,148,149,1,0,0,0,149,150,5,0,0,1,150,1,1,0,0,0,151,152,3,4,2,0,152,
153,5,1,0,0,153,160,1,0,0,0,154,155,3,6,3,0,155,156,5,1,0,0,156,160,1,0,
0,0,157,160,3,60,30,0,158,160,3,108,54,0,159,151,1,0,0,0,159,154,1,0,0,0,
159,157,1,0,0,0,159,158,1,0,0,0,160,3,1,0,0,0,161,166,3,14,7,0,162,166,3,
16,8,0,163,166,3,12,6,0,164,166,3,10,5,0,165,161,1,0,0,0,165,162,1,0,0,0,
165,163,1,0,0,0,165,164,1,0,0,0,166,5,1,0,0,0,167,168,5,74,0,0,168,169,3,
8,4,0,169,7,1,0,0,0,170,176,3,30,15,0,171,176,3,24,12,0,172,176,3,26,13,
0,173,176,3,28,14,0,174,176,3,10,5,0,175,170,1,0,0,0,175,171,1,0,0,0,175,
172,1,0,0,0,175,173,1,0,0,0,175,174,1,0,0,0,176,9,1,0,0,0,177,184,3,34,17,
0,178,184,3,36,18,0,179,184,3,40,20,0,180,184,3,58,29,0,181,184,5,58,0,0,
182,184,5,59,0,0,183,177,1,0,0,0,183,178,1,0,0,0,183,179,1,0,0,0,183,180,
1,0,0,0,183,181,1,0,0,0,183,182,1,0,0,0,184,11,1,0,0,0,185,186,5,2,0,0,186,
13,1,0,0,0,187,188,5,3,0,0,188,15,1,0,0,0,189,190,5,4,0,0,190,191,3,18,9,
0,191,17,1,0,0,0,192,197,3,76,38,0,193,197,3,78,39,0,194,197,3,80,40,0,195,
197,3,20,10,0,196,192,1,0,0,0,196,193,1,0,0,0,196,194,1,0,0,0,196,195,1,
0,0,0,197,19,1,0,0,0,198,202,5,5,0,0,199,200,5,5,0,0,200,202,3,22,11,0,201,
198,1,0,0,0,201,199,1,0,0,0,202,21,1,0,0,0,203,204,7,0,0,0,204,23,1,0,0,
0,205,206,5,9,0,0,206,25,1,0,0,0,207,208,5,10,0,0,208,27,1,0,0,0,209,210,
5,11,0,0,210,211,3,140,70,0,211,29,1,0,0,0,212,213,5,12,0,0,213,214,3,32,
16,0,214,31,1,0,0,0,215,218,3,76,38,0,216,218,3,78,39,0,217,215,1,0,0,0,
217,216,1,0,0,0,218,33,1,0,0,0,219,220,5,13,0,0,220,221,3,108,54,0,221,35,
1,0,0,0,222,223,5,14,0,0,223,229,3,38,19,0,224,225,5,14,0,0,225,226,3,38,
19,0,226,227,3,82,41,0,227,229,1,0,0,0,228,222,1,0,0,0,228,224,1,0,0,0,229,
37,1,0,0,0,230,233,3,76,38,0,231,233,3,78,39,0,232,230,1,0,0,0,232,231,1,
0,0,0,233,39,1,0,0,0,234,235,5,15,0,0,235,236,3,42,21,0,236,41,1,0,0,0,237,
242,3,46,23,0,238,242,3,48,24,0,239,242,3,52,26,0,240,242,3,44,22,0,241,
237,1,0,0,0,241,238,1,0,0,0,241,239,1,0,0,0,241,240,1,0,0,0,242,43,1,0,0,
0,243,244,7,1,0,0,244,45,1,0,0,0,245,246,3,142,71,0,246,247,5,19,0,0,247,
248,3,80,40,0,248,47,1,0,0,0,249,255,3,50,25,0,250,251,3,50,25,0,251,252,
5,20,0,0,252,253,3,48,24,0,253,255,1,0,0,0,254,249,1,0,0,0,254,250,1,0,0,
0,255,49,1,0,0,0,256,257,5,21,0,0,257,258,5,62,0,0,258,261,5,21,0,0,259,
261,3,140,70,0,260,256,1,0,0,0,260,259,1,0,0,0,261,51,1,0,0,0,262,267,3,
76,38,0,263,267,3,78,39,0,264,267,3,80,40,0,265,267,3,54,27,0,266,262,1,
0,0,0,266,263,1,0,0,0,266,264,1,0,0,0,266,265,1,0,0,0,267,53,1,0,0,0,268,
272,5,5,0,0,269,270,5,5,0,0,270,272,3,56,28,0,271,268,1,0,0,0,271,269,1,
0,0,0,272,55,1,0,0,0,273,274,7,2,0,0,274,57,1,0,0,0,275,279,3,142,71,0,276,
277,5,5,0,0,277,279,5,22,0,0,278,275,1,0,0,0,278,276,1,0,0,0,279,59,1,0,
0,0,280,281,5,23,0,0,281,282,5,73,0,0,282,283,5,24,0,0,283,61,1,0,0,0,284,
289,3,64,32,0,285,286,3,64,32,0,286,287,3,62,31,0,287,289,1,0,0,0,288,284,
1,0,0,0,288,285,1,0,0,0,289,63,1,0,0,0,290,293,3,66,33,0,291,293,5,62,0,
0,292,290,1,0,0,0,292,291,1,0,0,0,293,65,1,0,0,0,294,297,3,68,34,0,295,297,
3,72,36,0,296,294,1,0,0,0,296,295,1,0,0,0,297,67,1,0,0,0,298,299,5,25,0,
0,299,300,3,70,35,0,300,69,1,0,0,0,301,305,5,1,0,0,302,303,5,1,0,0,303,305,
3,70,35,0,304,301,1,0,0,0,304,302,1,0,0,0,305,71,1,0,0,0,306,307,5,26,0,
0,307,308,3,74,37,0,308,309,5,27,0,0,309,310,3,74,37,0,310,73,1,0,0,0,311,
313,5,28,0,0,312,311,1,0,0,0,313,314,1,0,0,0,314,312,1,0,0,0,314,315,1,0,
0,0,315,75,1,0,0,0,316,317,5,29,0,0,317,318,5,74,0,0,318,77,1,0,0,0,319,
320,5,30,0,0,320,321,5,73,0,0,321,79,1,0,0,0,322,323,5,31,0,0,323,324,5,
73,0,0,324,81,1,0,0,0,325,328,3,84,42,0,326,328,3,94,47,0,327,325,1,0,0,
0,327,326,1,0,0,0,328,83,1,0,0,0,329,330,5,32,0,0,330,331,3,86,43,0,331,
85,1,0,0,0,332,333,5,33,0,0,333,334,3,86,43,0,334,335,5,34,0,0,335,346,1,
0,0,0,336,337,5,35,0,0,337,338,3,86,43,0,338,339,5,36,0,0,339,346,1,0,0,
0,340,346,3,90,45,0,341,342,3,90,45,0,342,343,3,88,44,0,343,344,3,86,43,
0,344,346,1,0,0,0,345,332,1,0,0,0,345,336,1,0,0,0,345,340,1,0,0,0,345,341,
1,0,0,0,346,87,1,0,0,0,347,348,7,3,0,0,348,89,1,0,0,0,349,350,3,102,51,0,
350,351,3,92,46,0,351,352,3,102,51,0,352,91,1,0,0,0,353,354,7,4,0,0,354,
93,1,0,0,0,355,356,5,45,0,0,356,357,3,96,48,0,357,95,1,0,0,0,358,359,3,140,
70,0,359,360,5,39,0,0,360,361,3,98,49,0,361,97,1,0,0,0,362,368,3,100,50,
0,363,364,3,100,50,0,364,365,5,20,0,0,365,366,3,98,49,0,366,368,1,0,0,0,
367,362,1,0,0,0,367,363,1,0,0,0,368,99,1,0,0,0,369,370,3,102,51,0,370,371,
5,33,0,0,371,372,3,102,51,0,372,373,5,34,0,0,373,374,3,100,50,0,374,377,
1,0,0,0,375,377,3,102,51,0,376,369,1,0,0,0,376,375,1,0,0,0,377,101,1,0,0,
0,378,384,3,104,52,0,379,380,3,104,52,0,380,381,5,61,0,0,381,382,3,102,51,
0,382,384,1,0,0,0,383,378,1,0,0,0,383,379,1,0,0,0,384,103,1,0,0,0,385,391,
3,106,53,0,386,387,3,106,53,0,387,388,5,60,0,0,388,389,3,104,52,0,389,391,
1,0,0,0,390,385,1,0,0,0,390,386,1,0,0,0,391,105,1,0,0,0,392,393,5,33,0,0,
393,394,3,102,51,0,394,395,5,34,0,0,395,402,1,0,0,0,396,397,5,35,0,0,397,
398,3,102,51,0,398,399,5,36,0,0,399,402,1,0,0,0,400,402,3,110,55,0,401,392,
1,0,0,0,401,396,1,0,0,0,401,400,1,0,0,0,402,107,1,0,0,0,403,404,3,140,70,
0,404,405,5,39,0,0,405,406,3,102,51,0,406,109,1,0,0,0,407,411,5,66,0,0,408,
411,3,140,70,0,409,411,3,112,56,0,410,407,1,0,0,0,410,408,1,0,0,0,410,409,
1,0,0,0,411,111,1,0,0,0,412,425,3,114,57,0,413,425,3,116,58,0,414,425,3,
118,59,0,415,425,3,120,60,0,416,425,3,122,61,0,417,425,3,124,62,0,418,425,
3,126,63,0,419,425,3,128,64,0,420,425,3,130,65,0,421,425,3,132,66,0,422,
425,3,134,67,0,423,425,3,136,68,0,424,412,1,0,0,0,424,413,1,0,0,0,424,414,
1,0,0,0,424,415,1,0,0,0,424,416,1,0,0,0,424,417,1,0,0,0,424,418,1,0,0,0,
424,419,1,0,0,0,424,420,1,0,0,0,424,421,1,0,0,0,424,422,1,0,0,0,424,423,
1,0,0,0,425,113,1,0,0,0,426,427,5,46,0,0,427,428,3,102,51,0,428,429,5,34,
0,0,429,115,1,0,0,0,430,431,5,47,0,0,431,432,3,102,51,0,432,433,5,34,0,0,
433,117,1,0,0,0,434,435,5,48,0,0,435,436,3,102,51,0,436,437,5,34,0,0,437,
119,1,0,0,0,438,439,5,49,0,0,439,440,3,102,51,0,440,441,5,34,0,0,441,121,
1,0,0,0,442,443,5,50,0,0,443,444,3,102,51,0,444,445,5,34,0,0,445,123,1,0,
0,0,446,447,5,51,0,0,447,448,3,102,51,0,448,449,5,34,0,0,449,125,1,0,0,0,
450,451,5,52,0,0,451,452,3,102,51,0,452,453,5,34,0,0,453,127,1,0,0,0,454,
455,5,53,0,0,455,456,3,102,51,0,456,457,5,34,0,0,457,129,1,0,0,0,458,459,
5,54,0,0,459,460,3,102,51,0,460,461,5,34,0,0,461,131,1,0,0,0,462,463,5,55,
0,0,463,464,3,102,51,0,464,465,5,34,0,0,465,133,1,0,0,0,466,467,5,56,0,0,
467,468,3,102,51,0,468,469,5,20,0,0,469,470,3,138,69,0,470,471,5,34,0,0,
471,135,1,0,0,0,472,473,5,57,0,0,473,474,3,102,51,0,474,475,5,20,0,0,475,
476,3,138,69,0,476,477,5,34,0,0,477,137,1,0,0,0,478,484,3,102,51,0,479,480,
3,102,51,0,480,481,5,20,0,0,481,482,3,138,69,0,482,484,1,0,0,0,483,478,1,
0,0,0,483,479,1,0,0,0,484,139,1,0,0,0,485,492,5,64,0,0,486,487,5,64,0,0,
487,488,5,33,0,0,488,489,3,102,51,0,489,490,5,34,0,0,490,492,1,0,0,0,491,
485,1,0,0,0,491,486,1,0,0,0,492,141,1,0,0,0,493,499,3,140,70,0,494,495,3,
140,70,0,495,496,5,20,0,0,496,497,3,142,71,0,497,499,1,0,0,0,498,493,1,0,
0,0,498,494,1,0,0,0,499,143,1,0,0,0,33,147,159,165,175,183,196,201,217,228,
232,241,254,260,266,271,278,288,292,296,304,314,327,345,367,376,383,390,
401,410,424,483,491,498];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

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



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, jossParser.RULE_prog);
	    var _la = 0;
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
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8446012) !== 0) || ((((_la - 58)) & ~0x1f) === 0 && ((1 << (_la - 58)) & 65603) !== 0));
	        this.state = 149;
	        this.match(jossParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 159;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 151;
	            this.direct();
	            this.state = 152;
	            this.match(jossParser.T__0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 154;
	            this.indirect_();
	            this.state = 155;
	            this.match(jossParser.T__0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 157;
	            this.formCMD();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 158;
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
	        this.state = 165;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 161;
	            this.cancelCMD();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 162;
	            this.deleteCmdCMD();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 163;
	            this.goCMD();
	            break;
	        case 5:
	        case 13:
	        case 14:
	        case 15:
	        case 58:
	        case 59:
	        case 64:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 164;
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
	        this.state = 167;
	        this.match(jossParser.STEPNUMBER);
	        this.state = 168;
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
	        this.state = 175;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 170;
	            this.toCMD();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 171;
	            this.doneCMD();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 172;
	            this.stopCMD();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 173;
	            this.demandCMD();
	            break;
	        case 5:
	        case 13:
	        case 14:
	        case 15:
	        case 58:
	        case 59:
	        case 64:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 174;
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
	        this.state = 183;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 177;
	            this.setCMD();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 178;
	            this.doCMD();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 179;
	            this.typeCMD();
	            break;
	        case 5:
	        case 64:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 180;
	            this.deleteValCMD();
	            break;
	        case 58:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 181;
	            this.match(jossParser.LINECMD);
	            break;
	        case 59:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 182;
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
	        this.state = 185;
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
	        this.state = 187;
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
	        this.state = 189;
	        this.match(jossParser.T__3);
	        this.state = 190;
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
	        this.state = 196;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 192;
	            this.stepSel();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 193;
	            this.partSel();
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 194;
	            this.formSel();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 195;
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
	        this.state = 201;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 198;
	            this.match(jossParser.T__4);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 199;
	            this.match(jossParser.T__4);
	            this.state = 200;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 448) !== 0))) {
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
	        this.state = 205;
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
	        this.state = 207;
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
	        this.state = 209;
	        this.match(jossParser.T__10);
	        this.state = 210;
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
	        this.state = 212;
	        this.match(jossParser.T__11);
	        this.state = 213;
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
	        this.state = 217;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 215;
	            this.stepSel();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 216;
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
	        this.state = 219;
	        this.match(jossParser.T__12);
	        this.state = 220;
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
	        this.state = 228;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 222;
	            this.match(jossParser.T__13);
	            this.state = 223;
	            this.doSel();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 224;
	            this.match(jossParser.T__13);
	            this.state = 225;
	            this.doSel();
	            this.state = 226;
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
	        this.state = 232;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 230;
	            this.stepSel();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 231;
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
	        this.state = 234;
	        this.match(jossParser.T__14);
	        this.state = 235;
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
	        this.state = 241;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 237;
	            this.typeForm();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 238;
	            this.typeData();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 239;
	            this.typeSel();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 240;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 458752) !== 0))) {
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
	        this.state = 245;
	        this.varList();
	        this.state = 246;
	        this.match(jossParser.T__18);
	        this.state = 247;
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
	        this.state = 254;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 249;
	            this.typeElem();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 250;
	            this.typeElem();
	            this.state = 251;
	            this.match(jossParser.T__19);
	            this.state = 252;
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
	        this.state = 260;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 256;
	            this.match(jossParser.T__20);
	            this.state = 257;
	            this.match(jossParser.STRING);
	            this.state = 258;
	            this.match(jossParser.T__20);
	            break;
	        case 64:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 259;
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
	        this.state = 266;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 262;
	            this.stepSel();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 263;
	            this.partSel();
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 264;
	            this.formSel();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 265;
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
	        this.state = 271;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 268;
	            this.match(jossParser.T__4);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 269;
	            this.match(jossParser.T__4);
	            this.state = 270;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4194752) !== 0))) {
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
	        this.state = 278;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 64:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 275;
	            this.varList();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 276;
	            this.match(jossParser.T__4);
	            this.state = 277;
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
	        this.state = 280;
	        this.match(jossParser.T__22);
	        this.state = 281;
	        this.match(jossParser.PARTNUMBER);
	        this.state = 282;
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
	        this.state = 288;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 284;
	            this.formObject();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 285;
	            this.formObject();
	            this.state = 286;
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
	        this.state = 292;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	        case 26:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 290;
	            this.formPH();
	            break;
	        case 62:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 291;
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
	        this.state = 296;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 294;
	            this.sciNotation();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 295;
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
	        this.state = 298;
	        this.match(jossParser.T__24);
	        this.state = 299;
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
	        this.state = 304;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 301;
	            this.match(jossParser.T__0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 302;
	            this.match(jossParser.T__0);
	            this.state = 303;
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
	        this.state = 306;
	        this.match(jossParser.T__25);
	        this.state = 307;
	        this.uScore();
	        this.state = 308;
	        this.match(jossParser.T__26);
	        this.state = 309;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 311;
	            this.match(jossParser.T__27);
	            this.state = 314; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 316;
	        this.match(jossParser.T__28);
	        this.state = 317;
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
	        this.state = 319;
	        this.match(jossParser.T__29);
	        this.state = 320;
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
	        this.state = 322;
	        this.match(jossParser.T__30);
	        this.state = 323;
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
	        this.state = 327;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 325;
	            this.if_();
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 326;
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
	        this.state = 329;
	        this.match(jossParser.T__31);
	        this.state = 330;
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
	        this.state = 345;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 332;
	            this.match(jossParser.T__32);
	            this.state = 333;
	            this.boolExp();
	            this.state = 334;
	            this.match(jossParser.T__33);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 336;
	            this.match(jossParser.T__34);
	            this.state = 337;
	            this.boolExp();
	            this.state = 338;
	            this.match(jossParser.T__35);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 340;
	            this.comparison();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 341;
	            this.comparison();
	            this.state = 342;
	            this.boolOp();
	            this.state = 343;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        _la = this._input.LA(1);
	        if(!(_la===37 || _la===38)) {
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
	        this.state = 349;
	        this.mathExp();
	        this.state = 350;
	        this.boolComp();
	        this.state = 351;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 353;
	        _la = this._input.LA(1);
	        if(!(((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 63) !== 0))) {
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
	        this.state = 355;
	        this.match(jossParser.T__44);
	        this.state = 356;
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
	        this.state = 358;
	        this.variable();
	        this.state = 359;
	        this.match(jossParser.T__38);
	        this.state = 360;
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
	        this.state = 367;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 362;
	            this.rangeVal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 363;
	            this.rangeVal();
	            this.state = 364;
	            this.match(jossParser.T__19);
	            this.state = 365;
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
	        this.state = 376;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 369;
	            this.mathExp();
	            this.state = 370;
	            this.match(jossParser.T__32);
	            this.state = 371;
	            this.mathExp();
	            this.state = 372;
	            this.match(jossParser.T__33);
	            this.state = 373;
	            this.rangeVal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 375;
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
	        this.state = 383;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 378;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 379;
	            this.term();
	            this.state = 380;
	            this.match(jossParser.ADDOP);
	            this.state = 381;
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
	        this.state = 390;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 385;
	            this.factor();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 386;
	            this.factor();
	            this.state = 387;
	            this.match(jossParser.MULOP);
	            this.state = 388;
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
	        this.state = 401;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 33:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 392;
	            this.match(jossParser.T__32);
	            this.state = 393;
	            this.mathExp();
	            this.state = 394;
	            this.match(jossParser.T__33);
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 396;
	            this.match(jossParser.T__34);
	            this.state = 397;
	            this.mathExp();
	            this.state = 398;
	            this.match(jossParser.T__35);
	            break;
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 64:
	        case 66:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 400;
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
	        this.state = 403;
	        this.variable();
	        this.state = 404;
	        this.match(jossParser.T__38);
	        this.state = 405;
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
	        this.state = 410;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 66:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 407;
	            this.match(jossParser.NUMBER);
	            break;
	        case 64:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 408;
	            this.variable();
	            break;
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 409;
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
	        this.state = 424;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 46:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 412;
	            this.funcSqrt();
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 413;
	            this.funcLog();
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 414;
	            this.funcExp();
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 415;
	            this.funcSin();
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 416;
	            this.funcCos();
	            break;
	        case 51:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 417;
	            this.funcIp();
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 418;
	            this.funcFp();
	            break;
	        case 53:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 419;
	            this.funcDp();
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 420;
	            this.funcXp();
	            break;
	        case 55:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 421;
	            this.funcSgn();
	            break;
	        case 56:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 422;
	            this.funcMax();
	            break;
	        case 57:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 423;
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
	        this.state = 426;
	        this.match(jossParser.T__45);
	        this.state = 427;
	        this.mathExp();
	        this.state = 428;
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
	        this.state = 430;
	        this.match(jossParser.T__46);
	        this.state = 431;
	        this.mathExp();
	        this.state = 432;
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
	        this.state = 434;
	        this.match(jossParser.T__47);
	        this.state = 435;
	        this.mathExp();
	        this.state = 436;
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
	        this.state = 438;
	        this.match(jossParser.T__48);
	        this.state = 439;
	        this.mathExp();
	        this.state = 440;
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
	        this.state = 442;
	        this.match(jossParser.T__49);
	        this.state = 443;
	        this.mathExp();
	        this.state = 444;
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
	        this.state = 446;
	        this.match(jossParser.T__50);
	        this.state = 447;
	        this.mathExp();
	        this.state = 448;
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
	        this.state = 450;
	        this.match(jossParser.T__51);
	        this.state = 451;
	        this.mathExp();
	        this.state = 452;
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
	        this.state = 454;
	        this.match(jossParser.T__52);
	        this.state = 455;
	        this.mathExp();
	        this.state = 456;
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
	        this.state = 458;
	        this.match(jossParser.T__53);
	        this.state = 459;
	        this.mathExp();
	        this.state = 460;
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
	        this.state = 462;
	        this.match(jossParser.T__54);
	        this.state = 463;
	        this.mathExp();
	        this.state = 464;
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
	        this.state = 466;
	        this.match(jossParser.T__55);
	        this.state = 467;
	        this.mathExp();
	        this.state = 468;
	        this.match(jossParser.T__19);
	        this.state = 469;
	        this.argList();
	        this.state = 470;
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
	        this.state = 472;
	        this.match(jossParser.T__56);
	        this.state = 473;
	        this.mathExp();
	        this.state = 474;
	        this.match(jossParser.T__19);
	        this.state = 475;
	        this.argList();
	        this.state = 476;
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
	        this.state = 483;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 478;
	            this.mathExp();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 479;
	            this.mathExp();
	            this.state = 480;
	            this.match(jossParser.T__19);
	            this.state = 481;
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
	        this.state = 491;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 485;
	            this.match(jossParser.ALPHA);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 486;
	            this.match(jossParser.ALPHA);
	            this.state = 487;
	            this.match(jossParser.T__32);
	            this.state = 488;
	            this.mathExp();
	            this.state = 489;
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
	        this.state = 498;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 493;
	            this.variable();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 494;
	            this.variable();
	            this.state = 495;
	            this.match(jossParser.T__19);
	            this.state = 496;
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

	EOF() {
	    return this.getToken(jossParser.EOF, 0);
	};

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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
