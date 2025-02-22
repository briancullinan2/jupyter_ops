// Generated from ./oberon/oberon.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import oberonListener from './oberonListener.js';
const serializedATN = [4,1,68,600,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,1,0,1,0,1,1,1,1,1,1,3,1,120,8,1,1,1,1,1,1,2,1,2,3,2,126,8,2,1,3,4,3,
129,8,3,11,3,12,3,130,1,3,1,3,5,3,135,8,3,10,3,12,3,138,9,3,1,3,3,3,141,
8,3,1,4,4,4,144,8,4,11,4,12,4,145,1,4,1,4,5,4,150,8,4,10,4,12,4,153,9,4,
1,4,3,4,156,8,4,1,5,1,5,3,5,160,8,5,1,5,4,5,163,8,5,11,5,12,5,164,1,6,1,
6,3,6,169,8,6,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,
1,10,3,10,186,8,10,1,11,1,11,1,11,1,11,5,11,192,8,11,10,11,12,11,195,9,11,
1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,1,13,3,13,207,8,13,1,13,3,13,
210,8,13,1,13,1,13,1,14,1,14,1,15,1,15,1,15,5,15,219,8,15,10,15,12,15,222,
9,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,5,17,231,8,17,10,17,12,17,234,9,
17,1,18,1,18,1,18,1,18,1,19,1,19,3,19,242,8,19,1,20,1,20,1,20,1,20,1,21,
1,21,1,21,1,21,3,21,252,8,21,1,22,1,22,1,23,3,23,257,8,23,1,23,1,23,1,23,
1,23,5,23,263,8,23,10,23,12,23,266,9,23,1,24,1,24,1,25,1,25,1,25,1,25,5,
25,274,8,25,10,25,12,25,277,9,25,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,
1,27,1,27,3,27,289,8,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,297,8,27,1,28,
1,28,5,28,301,8,28,10,28,12,28,304,9,28,1,29,1,29,1,29,1,29,1,29,1,29,1,
29,1,29,1,29,1,29,1,29,3,29,317,8,29,1,30,1,30,1,30,1,30,5,30,323,8,30,10,
30,12,30,326,9,30,3,30,328,8,30,1,30,1,30,1,31,1,31,1,31,3,31,335,8,31,1,
32,1,32,1,32,5,32,340,8,32,10,32,12,32,343,9,32,1,33,1,33,3,33,347,8,33,
1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,358,8,34,1,35,1,35,1,35,
1,35,1,36,1,36,3,36,366,8,36,1,37,1,37,1,37,5,37,371,8,37,10,37,12,37,374,
9,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,5,38,385,8,38,10,38,12,
38,388,9,38,1,38,1,38,3,38,392,8,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,
39,5,39,402,8,39,10,39,12,39,405,9,39,1,39,1,39,1,40,1,40,1,40,1,40,3,40,
413,8,40,1,41,1,41,1,41,5,41,418,8,41,10,41,12,41,421,9,41,1,42,1,42,1,42,
3,42,426,8,42,1,43,1,43,1,43,3,43,431,8,43,1,44,1,44,1,44,1,44,1,44,1,44,
1,44,1,44,1,44,5,44,442,8,44,10,44,12,44,445,9,44,1,44,1,44,1,45,1,45,1,
45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,3,46,462,8,46,1,46,
1,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,3,48,476,8,48,1,49,
1,49,1,49,3,49,481,8,49,1,49,1,49,3,49,485,8,49,1,49,1,49,1,50,1,50,1,50,
1,50,5,50,493,8,50,10,50,12,50,496,9,50,3,50,498,8,50,1,50,1,50,1,50,1,50,
5,50,504,8,50,10,50,12,50,507,9,50,3,50,509,8,50,1,50,1,50,1,50,1,50,5,50,
515,8,50,10,50,12,50,518,9,50,3,50,520,8,50,1,50,1,50,1,50,5,50,525,8,50,
10,50,12,50,528,9,50,1,51,1,51,1,51,1,51,5,51,534,8,51,10,51,12,51,537,9,
51,3,51,539,8,51,1,51,1,51,1,51,3,51,544,8,51,1,52,3,52,547,8,52,1,52,1,
52,1,52,5,52,552,8,52,10,52,12,52,555,9,52,1,52,1,52,1,52,1,53,1,53,5,53,
562,8,53,10,53,12,53,565,9,53,1,53,1,53,1,54,1,54,1,54,1,54,3,54,573,8,54,
1,54,1,54,1,54,3,54,578,8,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,5,55,
588,8,55,10,55,12,55,591,9,55,1,55,1,55,1,56,1,56,1,56,3,56,598,8,56,1,56,
0,0,57,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,
96,98,100,102,104,106,108,110,112,0,4,1,0,5,6,3,0,7,7,13,17,36,37,2,0,5,
6,38,38,3,0,2,2,18,19,39,40,624,0,114,1,0,0,0,2,119,1,0,0,0,4,123,1,0,0,
0,6,140,1,0,0,0,8,143,1,0,0,0,10,157,1,0,0,0,12,168,1,0,0,0,14,170,1,0,0,
0,16,174,1,0,0,0,18,176,1,0,0,0,20,185,1,0,0,0,22,187,1,0,0,0,24,199,1,0,
0,0,26,201,1,0,0,0,28,213,1,0,0,0,30,215,1,0,0,0,32,223,1,0,0,0,34,227,1,
0,0,0,36,235,1,0,0,0,38,239,1,0,0,0,40,243,1,0,0,0,42,247,1,0,0,0,44,253,
1,0,0,0,46,256,1,0,0,0,48,267,1,0,0,0,50,269,1,0,0,0,52,278,1,0,0,0,54,296,
1,0,0,0,56,298,1,0,0,0,58,316,1,0,0,0,60,318,1,0,0,0,62,331,1,0,0,0,64,336,
1,0,0,0,66,344,1,0,0,0,68,357,1,0,0,0,70,359,1,0,0,0,72,363,1,0,0,0,74,367,
1,0,0,0,76,375,1,0,0,0,78,395,1,0,0,0,80,412,1,0,0,0,82,414,1,0,0,0,84,422,
1,0,0,0,86,430,1,0,0,0,88,432,1,0,0,0,90,448,1,0,0,0,92,453,1,0,0,0,94,467,
1,0,0,0,96,472,1,0,0,0,98,477,1,0,0,0,100,497,1,0,0,0,102,529,1,0,0,0,104,
546,1,0,0,0,106,563,1,0,0,0,108,568,1,0,0,0,110,583,1,0,0,0,112,594,1,0,
0,0,114,115,5,64,0,0,115,1,1,0,0,0,116,117,3,0,0,0,117,118,5,1,0,0,118,120,
1,0,0,0,119,116,1,0,0,0,119,120,1,0,0,0,120,121,1,0,0,0,121,122,3,0,0,0,
122,3,1,0,0,0,123,125,3,0,0,0,124,126,5,2,0,0,125,124,1,0,0,0,125,126,1,
0,0,0,126,5,1,0,0,0,127,129,5,66,0,0,128,127,1,0,0,0,129,130,1,0,0,0,130,
128,1,0,0,0,130,131,1,0,0,0,131,141,1,0,0,0,132,136,5,66,0,0,133,135,5,63,
0,0,134,133,1,0,0,0,135,138,1,0,0,0,136,134,1,0,0,0,136,137,1,0,0,0,137,
139,1,0,0,0,138,136,1,0,0,0,139,141,5,3,0,0,140,128,1,0,0,0,140,132,1,0,
0,0,141,7,1,0,0,0,142,144,5,66,0,0,143,142,1,0,0,0,144,145,1,0,0,0,145,143,
1,0,0,0,145,146,1,0,0,0,146,147,1,0,0,0,147,151,5,1,0,0,148,150,5,66,0,0,
149,148,1,0,0,0,150,153,1,0,0,0,151,149,1,0,0,0,151,152,1,0,0,0,152,155,
1,0,0,0,153,151,1,0,0,0,154,156,3,10,5,0,155,154,1,0,0,0,155,156,1,0,0,0,
156,9,1,0,0,0,157,159,5,4,0,0,158,160,7,0,0,0,159,158,1,0,0,0,159,160,1,
0,0,0,160,162,1,0,0,0,161,163,5,66,0,0,162,161,1,0,0,0,163,164,1,0,0,0,164,
162,1,0,0,0,164,165,1,0,0,0,165,11,1,0,0,0,166,169,3,6,3,0,167,169,3,8,4,
0,168,166,1,0,0,0,168,167,1,0,0,0,169,13,1,0,0,0,170,171,3,4,2,0,171,172,
5,7,0,0,172,173,3,16,8,0,173,15,1,0,0,0,174,175,3,42,21,0,175,17,1,0,0,0,
176,177,3,4,2,0,177,178,5,7,0,0,178,179,3,20,10,0,179,19,1,0,0,0,180,186,
3,2,1,0,181,186,3,22,11,0,182,186,3,26,13,0,183,186,3,36,18,0,184,186,3,
38,19,0,185,180,1,0,0,0,185,181,1,0,0,0,185,182,1,0,0,0,185,183,1,0,0,0,
185,184,1,0,0,0,186,21,1,0,0,0,187,188,5,29,0,0,188,193,3,24,12,0,189,190,
5,8,0,0,190,192,3,24,12,0,191,189,1,0,0,0,192,195,1,0,0,0,193,191,1,0,0,
0,193,194,1,0,0,0,194,196,1,0,0,0,195,193,1,0,0,0,196,197,5,30,0,0,197,198,
3,20,10,0,198,23,1,0,0,0,199,200,3,16,8,0,200,25,1,0,0,0,201,206,5,34,0,
0,202,203,5,9,0,0,203,204,3,28,14,0,204,205,5,10,0,0,205,207,1,0,0,0,206,
202,1,0,0,0,206,207,1,0,0,0,207,209,1,0,0,0,208,210,3,30,15,0,209,208,1,
0,0,0,209,210,1,0,0,0,210,211,1,0,0,0,211,212,5,31,0,0,212,27,1,0,0,0,213,
214,3,2,1,0,214,29,1,0,0,0,215,220,3,32,16,0,216,217,5,11,0,0,217,219,3,
32,16,0,218,216,1,0,0,0,219,222,1,0,0,0,220,218,1,0,0,0,220,221,1,0,0,0,
221,31,1,0,0,0,222,220,1,0,0,0,223,224,3,34,17,0,224,225,5,12,0,0,225,226,
3,20,10,0,226,33,1,0,0,0,227,232,3,4,2,0,228,229,5,8,0,0,229,231,3,4,2,0,
230,228,1,0,0,0,231,234,1,0,0,0,232,230,1,0,0,0,232,233,1,0,0,0,233,35,1,
0,0,0,234,232,1,0,0,0,235,236,5,32,0,0,236,237,5,33,0,0,237,238,3,20,10,
0,238,37,1,0,0,0,239,241,5,35,0,0,240,242,3,102,51,0,241,240,1,0,0,0,241,
242,1,0,0,0,242,39,1,0,0,0,243,244,3,34,17,0,244,245,5,12,0,0,245,246,3,
20,10,0,246,41,1,0,0,0,247,251,3,46,23,0,248,249,3,44,22,0,249,250,3,46,
23,0,250,252,1,0,0,0,251,248,1,0,0,0,251,252,1,0,0,0,252,43,1,0,0,0,253,
254,7,1,0,0,254,45,1,0,0,0,255,257,7,0,0,0,256,255,1,0,0,0,256,257,1,0,0,
0,257,258,1,0,0,0,258,264,3,50,25,0,259,260,3,48,24,0,260,261,3,50,25,0,
261,263,1,0,0,0,262,259,1,0,0,0,263,266,1,0,0,0,264,262,1,0,0,0,264,265,
1,0,0,0,265,47,1,0,0,0,266,264,1,0,0,0,267,268,7,2,0,0,268,49,1,0,0,0,269,
275,3,54,27,0,270,271,3,52,26,0,271,272,3,54,27,0,272,274,1,0,0,0,273,270,
1,0,0,0,274,277,1,0,0,0,275,273,1,0,0,0,275,276,1,0,0,0,276,51,1,0,0,0,277,
275,1,0,0,0,278,279,7,3,0,0,279,53,1,0,0,0,280,297,3,12,6,0,281,297,5,62,
0,0,282,297,5,41,0,0,283,297,5,42,0,0,284,297,5,43,0,0,285,297,3,60,30,0,
286,288,3,56,28,0,287,289,3,66,33,0,288,287,1,0,0,0,288,289,1,0,0,0,289,
297,1,0,0,0,290,291,5,9,0,0,291,292,3,42,21,0,292,293,5,10,0,0,293,297,1,
0,0,0,294,295,5,20,0,0,295,297,3,54,27,0,296,280,1,0,0,0,296,281,1,0,0,0,
296,282,1,0,0,0,296,283,1,0,0,0,296,284,1,0,0,0,296,285,1,0,0,0,296,286,
1,0,0,0,296,290,1,0,0,0,296,294,1,0,0,0,297,55,1,0,0,0,298,302,3,2,1,0,299,
301,3,58,29,0,300,299,1,0,0,0,301,304,1,0,0,0,302,300,1,0,0,0,302,303,1,
0,0,0,303,57,1,0,0,0,304,302,1,0,0,0,305,306,5,1,0,0,306,317,3,0,0,0,307,
308,5,21,0,0,308,309,3,64,32,0,309,310,5,22,0,0,310,317,1,0,0,0,311,317,
5,23,0,0,312,313,5,9,0,0,313,314,3,2,1,0,314,315,5,10,0,0,315,317,1,0,0,
0,316,305,1,0,0,0,316,307,1,0,0,0,316,311,1,0,0,0,316,312,1,0,0,0,317,59,
1,0,0,0,318,327,5,24,0,0,319,324,3,62,31,0,320,321,5,8,0,0,321,323,3,62,
31,0,322,320,1,0,0,0,323,326,1,0,0,0,324,322,1,0,0,0,324,325,1,0,0,0,325,
328,1,0,0,0,326,324,1,0,0,0,327,319,1,0,0,0,327,328,1,0,0,0,328,329,1,0,
0,0,329,330,5,25,0,0,330,61,1,0,0,0,331,334,3,42,21,0,332,333,5,26,0,0,333,
335,3,42,21,0,334,332,1,0,0,0,334,335,1,0,0,0,335,63,1,0,0,0,336,341,3,42,
21,0,337,338,5,8,0,0,338,340,3,42,21,0,339,337,1,0,0,0,340,343,1,0,0,0,341,
339,1,0,0,0,341,342,1,0,0,0,342,65,1,0,0,0,343,341,1,0,0,0,344,346,5,9,0,
0,345,347,3,64,32,0,346,345,1,0,0,0,346,347,1,0,0,0,347,348,1,0,0,0,348,
349,5,10,0,0,349,67,1,0,0,0,350,358,3,70,35,0,351,358,3,72,36,0,352,358,
3,76,38,0,353,358,3,78,39,0,354,358,3,88,44,0,355,358,3,90,45,0,356,358,
3,92,46,0,357,350,1,0,0,0,357,351,1,0,0,0,357,352,1,0,0,0,357,353,1,0,0,
0,357,354,1,0,0,0,357,355,1,0,0,0,357,356,1,0,0,0,357,358,1,0,0,0,358,69,
1,0,0,0,359,360,3,56,28,0,360,361,5,27,0,0,361,362,3,42,21,0,362,71,1,0,
0,0,363,365,3,56,28,0,364,366,3,66,33,0,365,364,1,0,0,0,365,366,1,0,0,0,
366,73,1,0,0,0,367,372,3,68,34,0,368,369,5,11,0,0,369,371,3,68,34,0,370,
368,1,0,0,0,371,374,1,0,0,0,372,370,1,0,0,0,372,373,1,0,0,0,373,75,1,0,0,
0,374,372,1,0,0,0,375,376,5,44,0,0,376,377,3,42,21,0,377,378,5,45,0,0,378,
386,3,74,37,0,379,380,5,46,0,0,380,381,3,42,21,0,381,382,5,45,0,0,382,383,
3,74,37,0,383,385,1,0,0,0,384,379,1,0,0,0,385,388,1,0,0,0,386,384,1,0,0,
0,386,387,1,0,0,0,387,391,1,0,0,0,388,386,1,0,0,0,389,390,5,47,0,0,390,392,
3,74,37,0,391,389,1,0,0,0,391,392,1,0,0,0,392,393,1,0,0,0,393,394,5,31,0,
0,394,77,1,0,0,0,395,396,5,48,0,0,396,397,3,42,21,0,397,398,5,30,0,0,398,
403,3,80,40,0,399,400,5,28,0,0,400,402,3,80,40,0,401,399,1,0,0,0,402,405,
1,0,0,0,403,401,1,0,0,0,403,404,1,0,0,0,404,406,1,0,0,0,405,403,1,0,0,0,
406,407,5,31,0,0,407,79,1,0,0,0,408,409,3,82,41,0,409,410,5,12,0,0,410,411,
3,74,37,0,411,413,1,0,0,0,412,408,1,0,0,0,412,413,1,0,0,0,413,81,1,0,0,0,
414,419,3,84,42,0,415,416,5,8,0,0,416,418,3,84,42,0,417,415,1,0,0,0,418,
421,1,0,0,0,419,417,1,0,0,0,419,420,1,0,0,0,420,83,1,0,0,0,421,419,1,0,0,
0,422,425,3,86,43,0,423,424,5,26,0,0,424,426,3,86,43,0,425,423,1,0,0,0,425,
426,1,0,0,0,426,85,1,0,0,0,427,431,3,6,3,0,428,431,5,62,0,0,429,431,3,2,
1,0,430,427,1,0,0,0,430,428,1,0,0,0,430,429,1,0,0,0,431,87,1,0,0,0,432,433,
5,49,0,0,433,434,3,42,21,0,434,435,5,50,0,0,435,443,3,74,37,0,436,437,5,
46,0,0,437,438,3,42,21,0,438,439,5,50,0,0,439,440,3,74,37,0,440,442,1,0,
0,0,441,436,1,0,0,0,442,445,1,0,0,0,443,441,1,0,0,0,443,444,1,0,0,0,444,
446,1,0,0,0,445,443,1,0,0,0,446,447,5,31,0,0,447,89,1,0,0,0,448,449,5,51,
0,0,449,450,3,74,37,0,450,451,5,52,0,0,451,452,3,42,21,0,452,91,1,0,0,0,
453,454,5,53,0,0,454,455,3,0,0,0,455,456,5,27,0,0,456,457,3,42,21,0,457,
458,5,33,0,0,458,461,3,42,21,0,459,460,5,54,0,0,460,462,3,16,8,0,461,459,
1,0,0,0,461,462,1,0,0,0,462,463,1,0,0,0,463,464,5,50,0,0,464,465,3,74,37,
0,465,466,5,31,0,0,466,93,1,0,0,0,467,468,3,96,48,0,468,469,5,11,0,0,469,
470,3,98,49,0,470,471,3,0,0,0,471,95,1,0,0,0,472,473,5,35,0,0,473,475,3,
4,2,0,474,476,3,102,51,0,475,474,1,0,0,0,475,476,1,0,0,0,476,97,1,0,0,0,
477,480,3,100,50,0,478,479,5,55,0,0,479,481,3,74,37,0,480,478,1,0,0,0,480,
481,1,0,0,0,481,484,1,0,0,0,482,483,5,56,0,0,483,485,3,42,21,0,484,482,1,
0,0,0,484,485,1,0,0,0,485,486,1,0,0,0,486,487,5,31,0,0,487,99,1,0,0,0,488,
494,5,57,0,0,489,490,3,14,7,0,490,491,5,11,0,0,491,493,1,0,0,0,492,489,1,
0,0,0,493,496,1,0,0,0,494,492,1,0,0,0,494,495,1,0,0,0,495,498,1,0,0,0,496,
494,1,0,0,0,497,488,1,0,0,0,497,498,1,0,0,0,498,508,1,0,0,0,499,505,5,58,
0,0,500,501,3,18,9,0,501,502,5,11,0,0,502,504,1,0,0,0,503,500,1,0,0,0,504,
507,1,0,0,0,505,503,1,0,0,0,505,506,1,0,0,0,506,509,1,0,0,0,507,505,1,0,
0,0,508,499,1,0,0,0,508,509,1,0,0,0,509,519,1,0,0,0,510,516,5,59,0,0,511,
512,3,40,20,0,512,513,5,11,0,0,513,515,1,0,0,0,514,511,1,0,0,0,515,518,1,
0,0,0,516,514,1,0,0,0,516,517,1,0,0,0,517,520,1,0,0,0,518,516,1,0,0,0,519,
510,1,0,0,0,519,520,1,0,0,0,520,526,1,0,0,0,521,522,3,94,47,0,522,523,5,
11,0,0,523,525,1,0,0,0,524,521,1,0,0,0,525,528,1,0,0,0,526,524,1,0,0,0,526,
527,1,0,0,0,527,101,1,0,0,0,528,526,1,0,0,0,529,538,5,9,0,0,530,535,3,104,
52,0,531,532,5,11,0,0,532,534,3,104,52,0,533,531,1,0,0,0,534,537,1,0,0,0,
535,533,1,0,0,0,535,536,1,0,0,0,536,539,1,0,0,0,537,535,1,0,0,0,538,530,
1,0,0,0,538,539,1,0,0,0,539,540,1,0,0,0,540,543,5,10,0,0,541,542,5,12,0,
0,542,544,3,2,1,0,543,541,1,0,0,0,543,544,1,0,0,0,544,103,1,0,0,0,545,547,
5,59,0,0,546,545,1,0,0,0,546,547,1,0,0,0,547,548,1,0,0,0,548,553,3,0,0,0,
549,550,5,8,0,0,550,552,3,0,0,0,551,549,1,0,0,0,552,555,1,0,0,0,553,551,
1,0,0,0,553,554,1,0,0,0,554,556,1,0,0,0,555,553,1,0,0,0,556,557,5,12,0,0,
557,558,3,106,53,0,558,105,1,0,0,0,559,560,5,29,0,0,560,562,5,30,0,0,561,
559,1,0,0,0,562,565,1,0,0,0,563,561,1,0,0,0,563,564,1,0,0,0,564,566,1,0,
0,0,565,563,1,0,0,0,566,567,3,2,1,0,567,107,1,0,0,0,568,569,5,60,0,0,569,
570,3,0,0,0,570,572,5,11,0,0,571,573,3,110,55,0,572,571,1,0,0,0,572,573,
1,0,0,0,573,574,1,0,0,0,574,577,3,100,50,0,575,576,5,55,0,0,576,578,3,74,
37,0,577,575,1,0,0,0,577,578,1,0,0,0,578,579,1,0,0,0,579,580,5,31,0,0,580,
581,3,0,0,0,581,582,5,1,0,0,582,109,1,0,0,0,583,584,5,61,0,0,584,589,3,112,
56,0,585,586,5,8,0,0,586,588,3,112,56,0,587,585,1,0,0,0,588,591,1,0,0,0,
589,587,1,0,0,0,589,590,1,0,0,0,590,592,1,0,0,0,591,589,1,0,0,0,592,593,
5,11,0,0,593,111,1,0,0,0,594,597,3,0,0,0,595,596,5,27,0,0,596,598,3,0,0,
0,597,595,1,0,0,0,597,598,1,0,0,0,598,113,1,0,0,0,63,119,125,130,136,140,
145,151,155,159,164,168,185,193,206,209,220,232,241,251,256,264,275,288,
296,302,316,324,327,334,341,346,357,365,372,386,391,403,412,419,425,430,
443,461,475,480,484,494,497,505,508,516,519,526,535,538,543,546,553,563,
572,577,589,597];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class oberonParser extends antlr4.Parser {

    static grammarFileName = "oberon.g4";
    static literalNames = [ null, "'.'", "'*'", "'H'", "'E'", "'+'", "'-'", 
                            "'='", "','", "'('", "')'", "';'", "':'", "'#'", 
                            "'<'", "'<='", "'>'", "'>='", "'/'", "'&'", 
                            "'~'", "'['", "']'", "'^'", "'{'", "'}'", "'..'", 
                            "':='", "'|'", "'ARRAY'", "'OF'", "'END'", "'POINTER'", 
                            "'TO'", "'RECORD'", "'PROCEDURE'", "'IN'", "'IS'", 
                            "'OR'", "'DIV'", "'MOD'", "'NIL'", "'TRUE'", 
                            "'FALSE'", "'IF'", "'THEN'", "'ELSIF'", "'ELSE'", 
                            "'CASE'", "'WHILE'", "'DO'", "'REPEAT'", "'UNTIL'", 
                            "'FOR'", "'BY'", "'BEGIN'", "'RETURN'", "'CONST'", 
                            "'TYPE'", "'VAR'", "'MODULE'", "'IMPORT'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "ARRAY", "OF", 
                             "END", "POINTER", "TO", "RECORD", "PROCEDURE", 
                             "IN", "IS", "OR", "DIV", "MOD", "NIL", "TRUE", 
                             "FALSE", "IF", "THEN", "ELSIF", "ELSE", "CASE", 
                             "WHILE", "DO", "REPEAT", "UNTIL", "FOR", "BY", 
                             "BEGIN", "RETURN", "CONST", "TYPE", "VAR", 
                             "MODULE", "IMPORT", "STRING", "HEXDIGIT", "IDENT", 
                             "LETTER", "DIGIT", "COMMENT", "WS" ];
    static ruleNames = [ "ident", "qualident", "identdef", "integer", "real", 
                         "scaleFactor", "number", "constDeclaration", "constExpression", 
                         "typeDeclaration", "type_", "arrayType", "length", 
                         "recordType", "baseType", "fieldListSequence", 
                         "fieldList", "identList", "pointerType", "procedureType", 
                         "variableDeclaration", "expression", "relation", 
                         "simpleExpression", "addOperator", "term", "mulOperator", 
                         "factor", "designator", "selector", "set_", "element", 
                         "expList", "actualParameters", "statement", "assignment", 
                         "procedureCall", "statementSequence", "ifStatement", 
                         "caseStatement", "case_", "caseLabelList", "labelRange", 
                         "label", "whileStatement", "repeatStatement", "forStatement", 
                         "procedureDeclaration", "procedureHeading", "procedureBody", 
                         "declarationSequence", "formalParameters", "fPSection", 
                         "formalType", "module", "importList", "import_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = oberonParser.ruleNames;
        this.literalNames = oberonParser.literalNames;
        this.symbolicNames = oberonParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	ident() {
	    let localctx = new IdentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, oberonParser.RULE_ident);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(oberonParser.IDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	qualident() {
	    let localctx = new QualidentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, oberonParser.RULE_qualident);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        if(la_===1) {
	            this.state = 116;
	            this.ident();
	            this.state = 117;
	            this.match(oberonParser.T__0);

	        }
	        this.state = 121;
	        this.ident();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identdef() {
	    let localctx = new IdentdefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, oberonParser.RULE_identdef);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.ident();
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.T__1) {
	            this.state = 124;
	            this.match(oberonParser.T__1);
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



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, oberonParser.RULE_integer);
	    var _la = 0; // Token type
	    try {
	        this.state = 140;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 128; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 127;
	                this.match(oberonParser.DIGIT);
	                this.state = 130; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===oberonParser.DIGIT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 132;
	            this.match(oberonParser.DIGIT);
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===oberonParser.HEXDIGIT) {
	                this.state = 133;
	                this.match(oberonParser.HEXDIGIT);
	                this.state = 138;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 139;
	            this.match(oberonParser.T__2);
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



	real() {
	    let localctx = new RealContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, oberonParser.RULE_real);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 142;
	            this.match(oberonParser.DIGIT);
	            this.state = 145; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===oberonParser.DIGIT);
	        this.state = 147;
	        this.match(oberonParser.T__0);
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oberonParser.DIGIT) {
	            this.state = 148;
	            this.match(oberonParser.DIGIT);
	            this.state = 153;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.T__3) {
	            this.state = 154;
	            this.scaleFactor();
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



	scaleFactor() {
	    let localctx = new ScaleFactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, oberonParser.RULE_scaleFactor);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(oberonParser.T__3);
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.T__4 || _la===oberonParser.T__5) {
	            this.state = 158;
	            _la = this._input.LA(1);
	            if(!(_la===oberonParser.T__4 || _la===oberonParser.T__5)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 162; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 161;
	            this.match(oberonParser.DIGIT);
	            this.state = 164; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===oberonParser.DIGIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, oberonParser.RULE_number);
	    try {
	        this.state = 168;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 166;
	            this.integer();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 167;
	            this.real();
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



	constDeclaration() {
	    let localctx = new ConstDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, oberonParser.RULE_constDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.identdef();
	        this.state = 171;
	        this.match(oberonParser.T__6);
	        this.state = 172;
	        this.constExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constExpression() {
	    let localctx = new ConstExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, oberonParser.RULE_constExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeDeclaration() {
	    let localctx = new TypeDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, oberonParser.RULE_typeDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.identdef();
	        this.state = 177;
	        this.match(oberonParser.T__6);
	        this.state = 178;
	        this.type_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type_() {
	    let localctx = new Type_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, oberonParser.RULE_type_);
	    try {
	        this.state = 185;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case oberonParser.IDENT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 180;
	            this.qualident();
	            break;
	        case oberonParser.ARRAY:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 181;
	            this.arrayType();
	            break;
	        case oberonParser.RECORD:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 182;
	            this.recordType();
	            break;
	        case oberonParser.POINTER:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 183;
	            this.pointerType();
	            break;
	        case oberonParser.PROCEDURE:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 184;
	            this.procedureType();
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



	arrayType() {
	    let localctx = new ArrayTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, oberonParser.RULE_arrayType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(oberonParser.ARRAY);
	        this.state = 188;
	        this.length();
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oberonParser.T__7) {
	            this.state = 189;
	            this.match(oberonParser.T__7);
	            this.state = 190;
	            this.length();
	            this.state = 195;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 196;
	        this.match(oberonParser.OF);
	        this.state = 197;
	        this.type_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	length() {
	    let localctx = new LengthContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, oberonParser.RULE_length);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.constExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	recordType() {
	    let localctx = new RecordTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, oberonParser.RULE_recordType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(oberonParser.RECORD);
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.T__8) {
	            this.state = 202;
	            this.match(oberonParser.T__8);
	            this.state = 203;
	            this.baseType();
	            this.state = 204;
	            this.match(oberonParser.T__9);
	        }

	        this.state = 209;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.IDENT) {
	            this.state = 208;
	            this.fieldListSequence();
	        }

	        this.state = 211;
	        this.match(oberonParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	baseType() {
	    let localctx = new BaseTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, oberonParser.RULE_baseType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.qualident();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldListSequence() {
	    let localctx = new FieldListSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, oberonParser.RULE_fieldListSequence);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.fieldList();
	        this.state = 220;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oberonParser.T__10) {
	            this.state = 216;
	            this.match(oberonParser.T__10);
	            this.state = 217;
	            this.fieldList();
	            this.state = 222;
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



	fieldList() {
	    let localctx = new FieldListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, oberonParser.RULE_fieldList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.identList();
	        this.state = 224;
	        this.match(oberonParser.T__11);
	        this.state = 225;
	        this.type_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identList() {
	    let localctx = new IdentListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, oberonParser.RULE_identList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.identdef();
	        this.state = 232;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oberonParser.T__7) {
	            this.state = 228;
	            this.match(oberonParser.T__7);
	            this.state = 229;
	            this.identdef();
	            this.state = 234;
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



	pointerType() {
	    let localctx = new PointerTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, oberonParser.RULE_pointerType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.match(oberonParser.POINTER);
	        this.state = 236;
	        this.match(oberonParser.TO);
	        this.state = 237;
	        this.type_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedureType() {
	    let localctx = new ProcedureTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, oberonParser.RULE_procedureType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(oberonParser.PROCEDURE);
	        this.state = 241;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.T__8) {
	            this.state = 240;
	            this.formalParameters();
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



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, oberonParser.RULE_variableDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.identList();
	        this.state = 244;
	        this.match(oberonParser.T__11);
	        this.state = 245;
	        this.type_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 42, oberonParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.simpleExpression();
	        this.state = 251;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (oberonParser.T__6 - 7)) | (1 << (oberonParser.T__12 - 7)) | (1 << (oberonParser.T__13 - 7)) | (1 << (oberonParser.T__14 - 7)) | (1 << (oberonParser.T__15 - 7)) | (1 << (oberonParser.T__16 - 7)) | (1 << (oberonParser.IN - 7)) | (1 << (oberonParser.IS - 7)))) !== 0)) {
	            this.state = 248;
	            this.relation();
	            this.state = 249;
	            this.simpleExpression();
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



	relation() {
	    let localctx = new RelationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, oberonParser.RULE_relation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        _la = this._input.LA(1);
	        if(!(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (oberonParser.T__6 - 7)) | (1 << (oberonParser.T__12 - 7)) | (1 << (oberonParser.T__13 - 7)) | (1 << (oberonParser.T__14 - 7)) | (1 << (oberonParser.T__15 - 7)) | (1 << (oberonParser.T__16 - 7)) | (1 << (oberonParser.IN - 7)) | (1 << (oberonParser.IS - 7)))) !== 0))) {
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



	simpleExpression() {
	    let localctx = new SimpleExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, oberonParser.RULE_simpleExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.T__4 || _la===oberonParser.T__5) {
	            this.state = 255;
	            _la = this._input.LA(1);
	            if(!(_la===oberonParser.T__4 || _la===oberonParser.T__5)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 258;
	        this.term();
	        this.state = 264;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oberonParser.T__4 || _la===oberonParser.T__5 || _la===oberonParser.OR) {
	            this.state = 259;
	            this.addOperator();
	            this.state = 260;
	            this.term();
	            this.state = 266;
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



	addOperator() {
	    let localctx = new AddOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, oberonParser.RULE_addOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        _la = this._input.LA(1);
	        if(!(_la===oberonParser.T__4 || _la===oberonParser.T__5 || _la===oberonParser.OR)) {
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, oberonParser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 269;
	        this.factor();
	        this.state = 275;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << oberonParser.T__1) | (1 << oberonParser.T__17) | (1 << oberonParser.T__18))) !== 0) || _la===oberonParser.DIV || _la===oberonParser.MOD) {
	            this.state = 270;
	            this.mulOperator();
	            this.state = 271;
	            this.factor();
	            this.state = 277;
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



	mulOperator() {
	    let localctx = new MulOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, oberonParser.RULE_mulOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << oberonParser.T__1) | (1 << oberonParser.T__17) | (1 << oberonParser.T__18))) !== 0) || _la===oberonParser.DIV || _la===oberonParser.MOD)) {
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



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, oberonParser.RULE_factor);
	    var _la = 0; // Token type
	    try {
	        this.state = 296;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case oberonParser.DIGIT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 280;
	            this.number();
	            break;
	        case oberonParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 281;
	            this.match(oberonParser.STRING);
	            break;
	        case oberonParser.NIL:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 282;
	            this.match(oberonParser.NIL);
	            break;
	        case oberonParser.TRUE:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 283;
	            this.match(oberonParser.TRUE);
	            break;
	        case oberonParser.FALSE:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 284;
	            this.match(oberonParser.FALSE);
	            break;
	        case oberonParser.T__23:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 285;
	            this.set_();
	            break;
	        case oberonParser.IDENT:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 286;
	            this.designator();
	            this.state = 288;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===oberonParser.T__8) {
	                this.state = 287;
	                this.actualParameters();
	            }

	            break;
	        case oberonParser.T__8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 290;
	            this.match(oberonParser.T__8);
	            this.state = 291;
	            this.expression();
	            this.state = 292;
	            this.match(oberonParser.T__9);
	            break;
	        case oberonParser.T__19:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 294;
	            this.match(oberonParser.T__19);
	            this.state = 295;
	            this.factor();
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



	designator() {
	    let localctx = new DesignatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, oberonParser.RULE_designator);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this.qualident();
	        this.state = 302;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 299;
	                this.selector(); 
	            }
	            this.state = 304;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
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



	selector() {
	    let localctx = new SelectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, oberonParser.RULE_selector);
	    try {
	        this.state = 316;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case oberonParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 305;
	            this.match(oberonParser.T__0);
	            this.state = 306;
	            this.ident();
	            break;
	        case oberonParser.T__20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 307;
	            this.match(oberonParser.T__20);
	            this.state = 308;
	            this.expList();
	            this.state = 309;
	            this.match(oberonParser.T__21);
	            break;
	        case oberonParser.T__22:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 311;
	            this.match(oberonParser.T__22);
	            break;
	        case oberonParser.T__8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 312;
	            this.match(oberonParser.T__8);
	            this.state = 313;
	            this.qualident();
	            this.state = 314;
	            this.match(oberonParser.T__9);
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



	set_() {
	    let localctx = new Set_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, oberonParser.RULE_set_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
	        this.match(oberonParser.T__23);
	        this.state = 327;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << oberonParser.T__4) | (1 << oberonParser.T__5) | (1 << oberonParser.T__8) | (1 << oberonParser.T__19) | (1 << oberonParser.T__23))) !== 0) || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (oberonParser.NIL - 41)) | (1 << (oberonParser.TRUE - 41)) | (1 << (oberonParser.FALSE - 41)) | (1 << (oberonParser.STRING - 41)) | (1 << (oberonParser.IDENT - 41)) | (1 << (oberonParser.DIGIT - 41)))) !== 0)) {
	            this.state = 319;
	            this.element();
	            this.state = 324;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===oberonParser.T__7) {
	                this.state = 320;
	                this.match(oberonParser.T__7);
	                this.state = 321;
	                this.element();
	                this.state = 326;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 329;
	        this.match(oberonParser.T__24);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, oberonParser.RULE_element);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        this.expression();
	        this.state = 334;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.T__25) {
	            this.state = 332;
	            this.match(oberonParser.T__25);
	            this.state = 333;
	            this.expression();
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



	expList() {
	    let localctx = new ExpListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, oberonParser.RULE_expList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        this.expression();
	        this.state = 341;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oberonParser.T__7) {
	            this.state = 337;
	            this.match(oberonParser.T__7);
	            this.state = 338;
	            this.expression();
	            this.state = 343;
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



	actualParameters() {
	    let localctx = new ActualParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, oberonParser.RULE_actualParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.match(oberonParser.T__8);
	        this.state = 346;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << oberonParser.T__4) | (1 << oberonParser.T__5) | (1 << oberonParser.T__8) | (1 << oberonParser.T__19) | (1 << oberonParser.T__23))) !== 0) || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (oberonParser.NIL - 41)) | (1 << (oberonParser.TRUE - 41)) | (1 << (oberonParser.FALSE - 41)) | (1 << (oberonParser.STRING - 41)) | (1 << (oberonParser.IDENT - 41)) | (1 << (oberonParser.DIGIT - 41)))) !== 0)) {
	            this.state = 345;
	            this.expList();
	        }

	        this.state = 348;
	        this.match(oberonParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 68, oberonParser.RULE_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 357;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        if(la_===1) {
	            this.state = 350;
	            this.assignment();

	        } else if(la_===2) {
	            this.state = 351;
	            this.procedureCall();

	        } else if(la_===3) {
	            this.state = 352;
	            this.ifStatement();

	        } else if(la_===4) {
	            this.state = 353;
	            this.caseStatement();

	        } else if(la_===5) {
	            this.state = 354;
	            this.whileStatement();

	        } else if(la_===6) {
	            this.state = 355;
	            this.repeatStatement();

	        } else if(la_===7) {
	            this.state = 356;
	            this.forStatement();

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
	    this.enterRule(localctx, 70, oberonParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 359;
	        this.designator();
	        this.state = 360;
	        this.match(oberonParser.T__26);
	        this.state = 361;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedureCall() {
	    let localctx = new ProcedureCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, oberonParser.RULE_procedureCall);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 363;
	        this.designator();
	        this.state = 365;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.T__8) {
	            this.state = 364;
	            this.actualParameters();
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



	statementSequence() {
	    let localctx = new StatementSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, oberonParser.RULE_statementSequence);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 367;
	        this.statement();
	        this.state = 372;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oberonParser.T__10) {
	            this.state = 368;
	            this.match(oberonParser.T__10);
	            this.state = 369;
	            this.statement();
	            this.state = 374;
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



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, oberonParser.RULE_ifStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 375;
	        this.match(oberonParser.IF);
	        this.state = 376;
	        this.expression();
	        this.state = 377;
	        this.match(oberonParser.THEN);
	        this.state = 378;
	        this.statementSequence();
	        this.state = 386;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oberonParser.ELSIF) {
	            this.state = 379;
	            this.match(oberonParser.ELSIF);
	            this.state = 380;
	            this.expression();
	            this.state = 381;
	            this.match(oberonParser.THEN);
	            this.state = 382;
	            this.statementSequence();
	            this.state = 388;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 391;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.ELSE) {
	            this.state = 389;
	            this.match(oberonParser.ELSE);
	            this.state = 390;
	            this.statementSequence();
	        }

	        this.state = 393;
	        this.match(oberonParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caseStatement() {
	    let localctx = new CaseStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, oberonParser.RULE_caseStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
	        this.match(oberonParser.CASE);
	        this.state = 396;
	        this.expression();
	        this.state = 397;
	        this.match(oberonParser.OF);
	        this.state = 398;
	        this.case_();
	        this.state = 403;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oberonParser.T__27) {
	            this.state = 399;
	            this.match(oberonParser.T__27);
	            this.state = 400;
	            this.case_();
	            this.state = 405;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 406;
	        this.match(oberonParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	case_() {
	    let localctx = new Case_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, oberonParser.RULE_case_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 412;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 62)) & ~0x1f) == 0 && ((1 << (_la - 62)) & ((1 << (oberonParser.STRING - 62)) | (1 << (oberonParser.IDENT - 62)) | (1 << (oberonParser.DIGIT - 62)))) !== 0)) {
	            this.state = 408;
	            this.caseLabelList();
	            this.state = 409;
	            this.match(oberonParser.T__11);
	            this.state = 410;
	            this.statementSequence();
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



	caseLabelList() {
	    let localctx = new CaseLabelListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, oberonParser.RULE_caseLabelList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 414;
	        this.labelRange();
	        this.state = 419;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oberonParser.T__7) {
	            this.state = 415;
	            this.match(oberonParser.T__7);
	            this.state = 416;
	            this.labelRange();
	            this.state = 421;
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



	labelRange() {
	    let localctx = new LabelRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, oberonParser.RULE_labelRange);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 422;
	        this.label();
	        this.state = 425;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.T__25) {
	            this.state = 423;
	            this.match(oberonParser.T__25);
	            this.state = 424;
	            this.label();
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



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, oberonParser.RULE_label);
	    try {
	        this.state = 430;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case oberonParser.DIGIT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 427;
	            this.integer();
	            break;
	        case oberonParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 428;
	            this.match(oberonParser.STRING);
	            break;
	        case oberonParser.IDENT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 429;
	            this.qualident();
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



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, oberonParser.RULE_whileStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 432;
	        this.match(oberonParser.WHILE);
	        this.state = 433;
	        this.expression();
	        this.state = 434;
	        this.match(oberonParser.DO);
	        this.state = 435;
	        this.statementSequence();
	        this.state = 443;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oberonParser.ELSIF) {
	            this.state = 436;
	            this.match(oberonParser.ELSIF);
	            this.state = 437;
	            this.expression();
	            this.state = 438;
	            this.match(oberonParser.DO);
	            this.state = 439;
	            this.statementSequence();
	            this.state = 445;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 446;
	        this.match(oberonParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repeatStatement() {
	    let localctx = new RepeatStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, oberonParser.RULE_repeatStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 448;
	        this.match(oberonParser.REPEAT);
	        this.state = 449;
	        this.statementSequence();
	        this.state = 450;
	        this.match(oberonParser.UNTIL);
	        this.state = 451;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, oberonParser.RULE_forStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 453;
	        this.match(oberonParser.FOR);
	        this.state = 454;
	        this.ident();
	        this.state = 455;
	        this.match(oberonParser.T__26);
	        this.state = 456;
	        this.expression();
	        this.state = 457;
	        this.match(oberonParser.TO);
	        this.state = 458;
	        this.expression();
	        this.state = 461;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.BY) {
	            this.state = 459;
	            this.match(oberonParser.BY);
	            this.state = 460;
	            this.constExpression();
	        }

	        this.state = 463;
	        this.match(oberonParser.DO);
	        this.state = 464;
	        this.statementSequence();
	        this.state = 465;
	        this.match(oberonParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedureDeclaration() {
	    let localctx = new ProcedureDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, oberonParser.RULE_procedureDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 467;
	        this.procedureHeading();
	        this.state = 468;
	        this.match(oberonParser.T__10);
	        this.state = 469;
	        this.procedureBody();
	        this.state = 470;
	        this.ident();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedureHeading() {
	    let localctx = new ProcedureHeadingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, oberonParser.RULE_procedureHeading);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 472;
	        this.match(oberonParser.PROCEDURE);
	        this.state = 473;
	        this.identdef();
	        this.state = 475;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.T__8) {
	            this.state = 474;
	            this.formalParameters();
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



	procedureBody() {
	    let localctx = new ProcedureBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, oberonParser.RULE_procedureBody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 477;
	        this.declarationSequence();
	        this.state = 480;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.BEGIN) {
	            this.state = 478;
	            this.match(oberonParser.BEGIN);
	            this.state = 479;
	            this.statementSequence();
	        }

	        this.state = 484;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.RETURN) {
	            this.state = 482;
	            this.match(oberonParser.RETURN);
	            this.state = 483;
	            this.expression();
	        }

	        this.state = 486;
	        this.match(oberonParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declarationSequence() {
	    let localctx = new DeclarationSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, oberonParser.RULE_declarationSequence);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 497;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.CONST) {
	            this.state = 488;
	            this.match(oberonParser.CONST);
	            this.state = 494;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===oberonParser.IDENT) {
	                this.state = 489;
	                this.constDeclaration();
	                this.state = 490;
	                this.match(oberonParser.T__10);
	                this.state = 496;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 508;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.TYPE) {
	            this.state = 499;
	            this.match(oberonParser.TYPE);
	            this.state = 505;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===oberonParser.IDENT) {
	                this.state = 500;
	                this.typeDeclaration();
	                this.state = 501;
	                this.match(oberonParser.T__10);
	                this.state = 507;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 519;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.VAR) {
	            this.state = 510;
	            this.match(oberonParser.VAR);
	            this.state = 516;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===oberonParser.IDENT) {
	                this.state = 511;
	                this.variableDeclaration();
	                this.state = 512;
	                this.match(oberonParser.T__10);
	                this.state = 518;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 526;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oberonParser.PROCEDURE) {
	            this.state = 521;
	            this.procedureDeclaration();
	            this.state = 522;
	            this.match(oberonParser.T__10);
	            this.state = 528;
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



	formalParameters() {
	    let localctx = new FormalParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, oberonParser.RULE_formalParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 529;
	        this.match(oberonParser.T__8);
	        this.state = 538;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.VAR || _la===oberonParser.IDENT) {
	            this.state = 530;
	            this.fPSection();
	            this.state = 535;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===oberonParser.T__10) {
	                this.state = 531;
	                this.match(oberonParser.T__10);
	                this.state = 532;
	                this.fPSection();
	                this.state = 537;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 540;
	        this.match(oberonParser.T__9);
	        this.state = 543;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.T__11) {
	            this.state = 541;
	            this.match(oberonParser.T__11);
	            this.state = 542;
	            this.qualident();
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



	fPSection() {
	    let localctx = new FPSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, oberonParser.RULE_fPSection);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 546;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.VAR) {
	            this.state = 545;
	            this.match(oberonParser.VAR);
	        }

	        this.state = 548;
	        this.ident();
	        this.state = 553;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oberonParser.T__7) {
	            this.state = 549;
	            this.match(oberonParser.T__7);
	            this.state = 550;
	            this.ident();
	            this.state = 555;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 556;
	        this.match(oberonParser.T__11);
	        this.state = 557;
	        this.formalType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formalType() {
	    let localctx = new FormalTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, oberonParser.RULE_formalType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 563;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oberonParser.ARRAY) {
	            this.state = 559;
	            this.match(oberonParser.ARRAY);
	            this.state = 560;
	            this.match(oberonParser.OF);
	            this.state = 565;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 566;
	        this.qualident();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	module() {
	    let localctx = new ModuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, oberonParser.RULE_module);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 568;
	        this.match(oberonParser.MODULE);
	        this.state = 569;
	        this.ident();
	        this.state = 570;
	        this.match(oberonParser.T__10);
	        this.state = 572;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.IMPORT) {
	            this.state = 571;
	            this.importList();
	        }

	        this.state = 574;
	        this.declarationSequence();
	        this.state = 577;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.BEGIN) {
	            this.state = 575;
	            this.match(oberonParser.BEGIN);
	            this.state = 576;
	            this.statementSequence();
	        }

	        this.state = 579;
	        this.match(oberonParser.END);
	        this.state = 580;
	        this.ident();
	        this.state = 581;
	        this.match(oberonParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importList() {
	    let localctx = new ImportListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, oberonParser.RULE_importList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 583;
	        this.match(oberonParser.IMPORT);
	        this.state = 584;
	        this.import_();
	        this.state = 589;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===oberonParser.T__7) {
	            this.state = 585;
	            this.match(oberonParser.T__7);
	            this.state = 586;
	            this.import_();
	            this.state = 591;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 592;
	        this.match(oberonParser.T__10);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	import_() {
	    let localctx = new Import_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, oberonParser.RULE_import_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 594;
	        this.ident();
	        this.state = 597;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===oberonParser.T__26) {
	            this.state = 595;
	            this.match(oberonParser.T__26);
	            this.state = 596;
	            this.ident();
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

oberonParser.EOF = antlr4.Token.EOF;
oberonParser.T__0 = 1;
oberonParser.T__1 = 2;
oberonParser.T__2 = 3;
oberonParser.T__3 = 4;
oberonParser.T__4 = 5;
oberonParser.T__5 = 6;
oberonParser.T__6 = 7;
oberonParser.T__7 = 8;
oberonParser.T__8 = 9;
oberonParser.T__9 = 10;
oberonParser.T__10 = 11;
oberonParser.T__11 = 12;
oberonParser.T__12 = 13;
oberonParser.T__13 = 14;
oberonParser.T__14 = 15;
oberonParser.T__15 = 16;
oberonParser.T__16 = 17;
oberonParser.T__17 = 18;
oberonParser.T__18 = 19;
oberonParser.T__19 = 20;
oberonParser.T__20 = 21;
oberonParser.T__21 = 22;
oberonParser.T__22 = 23;
oberonParser.T__23 = 24;
oberonParser.T__24 = 25;
oberonParser.T__25 = 26;
oberonParser.T__26 = 27;
oberonParser.T__27 = 28;
oberonParser.ARRAY = 29;
oberonParser.OF = 30;
oberonParser.END = 31;
oberonParser.POINTER = 32;
oberonParser.TO = 33;
oberonParser.RECORD = 34;
oberonParser.PROCEDURE = 35;
oberonParser.IN = 36;
oberonParser.IS = 37;
oberonParser.OR = 38;
oberonParser.DIV = 39;
oberonParser.MOD = 40;
oberonParser.NIL = 41;
oberonParser.TRUE = 42;
oberonParser.FALSE = 43;
oberonParser.IF = 44;
oberonParser.THEN = 45;
oberonParser.ELSIF = 46;
oberonParser.ELSE = 47;
oberonParser.CASE = 48;
oberonParser.WHILE = 49;
oberonParser.DO = 50;
oberonParser.REPEAT = 51;
oberonParser.UNTIL = 52;
oberonParser.FOR = 53;
oberonParser.BY = 54;
oberonParser.BEGIN = 55;
oberonParser.RETURN = 56;
oberonParser.CONST = 57;
oberonParser.TYPE = 58;
oberonParser.VAR = 59;
oberonParser.MODULE = 60;
oberonParser.IMPORT = 61;
oberonParser.STRING = 62;
oberonParser.HEXDIGIT = 63;
oberonParser.IDENT = 64;
oberonParser.LETTER = 65;
oberonParser.DIGIT = 66;
oberonParser.COMMENT = 67;
oberonParser.WS = 68;

oberonParser.RULE_ident = 0;
oberonParser.RULE_qualident = 1;
oberonParser.RULE_identdef = 2;
oberonParser.RULE_integer = 3;
oberonParser.RULE_real = 4;
oberonParser.RULE_scaleFactor = 5;
oberonParser.RULE_number = 6;
oberonParser.RULE_constDeclaration = 7;
oberonParser.RULE_constExpression = 8;
oberonParser.RULE_typeDeclaration = 9;
oberonParser.RULE_type_ = 10;
oberonParser.RULE_arrayType = 11;
oberonParser.RULE_length = 12;
oberonParser.RULE_recordType = 13;
oberonParser.RULE_baseType = 14;
oberonParser.RULE_fieldListSequence = 15;
oberonParser.RULE_fieldList = 16;
oberonParser.RULE_identList = 17;
oberonParser.RULE_pointerType = 18;
oberonParser.RULE_procedureType = 19;
oberonParser.RULE_variableDeclaration = 20;
oberonParser.RULE_expression = 21;
oberonParser.RULE_relation = 22;
oberonParser.RULE_simpleExpression = 23;
oberonParser.RULE_addOperator = 24;
oberonParser.RULE_term = 25;
oberonParser.RULE_mulOperator = 26;
oberonParser.RULE_factor = 27;
oberonParser.RULE_designator = 28;
oberonParser.RULE_selector = 29;
oberonParser.RULE_set_ = 30;
oberonParser.RULE_element = 31;
oberonParser.RULE_expList = 32;
oberonParser.RULE_actualParameters = 33;
oberonParser.RULE_statement = 34;
oberonParser.RULE_assignment = 35;
oberonParser.RULE_procedureCall = 36;
oberonParser.RULE_statementSequence = 37;
oberonParser.RULE_ifStatement = 38;
oberonParser.RULE_caseStatement = 39;
oberonParser.RULE_case_ = 40;
oberonParser.RULE_caseLabelList = 41;
oberonParser.RULE_labelRange = 42;
oberonParser.RULE_label = 43;
oberonParser.RULE_whileStatement = 44;
oberonParser.RULE_repeatStatement = 45;
oberonParser.RULE_forStatement = 46;
oberonParser.RULE_procedureDeclaration = 47;
oberonParser.RULE_procedureHeading = 48;
oberonParser.RULE_procedureBody = 49;
oberonParser.RULE_declarationSequence = 50;
oberonParser.RULE_formalParameters = 51;
oberonParser.RULE_fPSection = 52;
oberonParser.RULE_formalType = 53;
oberonParser.RULE_module = 54;
oberonParser.RULE_importList = 55;
oberonParser.RULE_import_ = 56;

class IdentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_ident;
    }

	IDENT() {
	    return this.getToken(oberonParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterIdent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitIdent(this);
		}
	}


}



class QualidentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_qualident;
    }

	ident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentContext);
	    } else {
	        return this.getTypedRuleContext(IdentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterQualident(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitQualident(this);
		}
	}


}



class IdentdefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_identdef;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterIdentdef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitIdentdef(this);
		}
	}


}



class IntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_integer;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(oberonParser.DIGIT);
	    } else {
	        return this.getToken(oberonParser.DIGIT, i);
	    }
	};


	HEXDIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(oberonParser.HEXDIGIT);
	    } else {
	        return this.getToken(oberonParser.HEXDIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitInteger(this);
		}
	}


}



class RealContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_real;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(oberonParser.DIGIT);
	    } else {
	        return this.getToken(oberonParser.DIGIT, i);
	    }
	};


	scaleFactor() {
	    return this.getTypedRuleContext(ScaleFactorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterReal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitReal(this);
		}
	}


}



class ScaleFactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_scaleFactor;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(oberonParser.DIGIT);
	    } else {
	        return this.getToken(oberonParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterScaleFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitScaleFactor(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_number;
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	real() {
	    return this.getTypedRuleContext(RealContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitNumber(this);
		}
	}


}



class ConstDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_constDeclaration;
    }

	identdef() {
	    return this.getTypedRuleContext(IdentdefContext,0);
	};

	constExpression() {
	    return this.getTypedRuleContext(ConstExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterConstDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitConstDeclaration(this);
		}
	}


}



class ConstExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_constExpression;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterConstExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitConstExpression(this);
		}
	}


}



class TypeDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_typeDeclaration;
    }

	identdef() {
	    return this.getTypedRuleContext(IdentdefContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterTypeDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitTypeDeclaration(this);
		}
	}


}



class Type_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_type_;
    }

	qualident() {
	    return this.getTypedRuleContext(QualidentContext,0);
	};

	arrayType() {
	    return this.getTypedRuleContext(ArrayTypeContext,0);
	};

	recordType() {
	    return this.getTypedRuleContext(RecordTypeContext,0);
	};

	pointerType() {
	    return this.getTypedRuleContext(PointerTypeContext,0);
	};

	procedureType() {
	    return this.getTypedRuleContext(ProcedureTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitType_(this);
		}
	}


}



class ArrayTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_arrayType;
    }

	ARRAY() {
	    return this.getToken(oberonParser.ARRAY, 0);
	};

	length = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LengthContext);
	    } else {
	        return this.getTypedRuleContext(LengthContext,i);
	    }
	};

	OF() {
	    return this.getToken(oberonParser.OF, 0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterArrayType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitArrayType(this);
		}
	}


}



class LengthContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_length;
    }

	constExpression() {
	    return this.getTypedRuleContext(ConstExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterLength(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitLength(this);
		}
	}


}



class RecordTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_recordType;
    }

	RECORD() {
	    return this.getToken(oberonParser.RECORD, 0);
	};

	END() {
	    return this.getToken(oberonParser.END, 0);
	};

	baseType() {
	    return this.getTypedRuleContext(BaseTypeContext,0);
	};

	fieldListSequence() {
	    return this.getTypedRuleContext(FieldListSequenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterRecordType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitRecordType(this);
		}
	}


}



class BaseTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_baseType;
    }

	qualident() {
	    return this.getTypedRuleContext(QualidentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterBaseType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitBaseType(this);
		}
	}


}



class FieldListSequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_fieldListSequence;
    }

	fieldList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldListContext);
	    } else {
	        return this.getTypedRuleContext(FieldListContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterFieldListSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitFieldListSequence(this);
		}
	}


}



class FieldListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_fieldList;
    }

	identList() {
	    return this.getTypedRuleContext(IdentListContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterFieldList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitFieldList(this);
		}
	}


}



class IdentListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_identList;
    }

	identdef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentdefContext);
	    } else {
	        return this.getTypedRuleContext(IdentdefContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterIdentList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitIdentList(this);
		}
	}


}



class PointerTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_pointerType;
    }

	POINTER() {
	    return this.getToken(oberonParser.POINTER, 0);
	};

	TO() {
	    return this.getToken(oberonParser.TO, 0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterPointerType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitPointerType(this);
		}
	}


}



class ProcedureTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_procedureType;
    }

	PROCEDURE() {
	    return this.getToken(oberonParser.PROCEDURE, 0);
	};

	formalParameters() {
	    return this.getTypedRuleContext(FormalParametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterProcedureType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitProcedureType(this);
		}
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_variableDeclaration;
    }

	identList() {
	    return this.getTypedRuleContext(IdentListContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitVariableDeclaration(this);
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
        this.ruleIndex = oberonParser.RULE_expression;
    }

	simpleExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SimpleExpressionContext,i);
	    }
	};

	relation() {
	    return this.getTypedRuleContext(RelationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitExpression(this);
		}
	}


}



class RelationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_relation;
    }

	IN() {
	    return this.getToken(oberonParser.IN, 0);
	};

	IS() {
	    return this.getToken(oberonParser.IS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterRelation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitRelation(this);
		}
	}


}



class SimpleExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_simpleExpression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	addOperator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AddOperatorContext);
	    } else {
	        return this.getTypedRuleContext(AddOperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterSimpleExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitSimpleExpression(this);
		}
	}


}



class AddOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_addOperator;
    }

	OR() {
	    return this.getToken(oberonParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterAddOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitAddOperator(this);
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
        this.ruleIndex = oberonParser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	mulOperator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MulOperatorContext);
	    } else {
	        return this.getTypedRuleContext(MulOperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitTerm(this);
		}
	}


}



class MulOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_mulOperator;
    }

	DIV() {
	    return this.getToken(oberonParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(oberonParser.MOD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterMulOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitMulOperator(this);
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
        this.ruleIndex = oberonParser.RULE_factor;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	STRING() {
	    return this.getToken(oberonParser.STRING, 0);
	};

	NIL() {
	    return this.getToken(oberonParser.NIL, 0);
	};

	TRUE() {
	    return this.getToken(oberonParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(oberonParser.FALSE, 0);
	};

	set_() {
	    return this.getTypedRuleContext(Set_Context,0);
	};

	designator() {
	    return this.getTypedRuleContext(DesignatorContext,0);
	};

	actualParameters() {
	    return this.getTypedRuleContext(ActualParametersContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitFactor(this);
		}
	}


}



class DesignatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_designator;
    }

	qualident() {
	    return this.getTypedRuleContext(QualidentContext,0);
	};

	selector = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SelectorContext);
	    } else {
	        return this.getTypedRuleContext(SelectorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterDesignator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitDesignator(this);
		}
	}


}



class SelectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_selector;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	expList() {
	    return this.getTypedRuleContext(ExpListContext,0);
	};

	qualident() {
	    return this.getTypedRuleContext(QualidentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterSelector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitSelector(this);
		}
	}


}



class Set_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_set_;
    }

	element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementContext);
	    } else {
	        return this.getTypedRuleContext(ElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterSet_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitSet_(this);
		}
	}


}



class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_element;
    }

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
	    if(listener instanceof oberonListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitElement(this);
		}
	}


}



class ExpListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_expList;
    }

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
	    if(listener instanceof oberonListener ) {
	        listener.enterExpList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitExpList(this);
		}
	}


}



class ActualParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_actualParameters;
    }

	expList() {
	    return this.getTypedRuleContext(ExpListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterActualParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitActualParameters(this);
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
        this.ruleIndex = oberonParser.RULE_statement;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	procedureCall() {
	    return this.getTypedRuleContext(ProcedureCallContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	caseStatement() {
	    return this.getTypedRuleContext(CaseStatementContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	repeatStatement() {
	    return this.getTypedRuleContext(RepeatStatementContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitStatement(this);
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
        this.ruleIndex = oberonParser.RULE_assignment;
    }

	designator() {
	    return this.getTypedRuleContext(DesignatorContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitAssignment(this);
		}
	}


}



class ProcedureCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_procedureCall;
    }

	designator() {
	    return this.getTypedRuleContext(DesignatorContext,0);
	};

	actualParameters() {
	    return this.getTypedRuleContext(ActualParametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterProcedureCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitProcedureCall(this);
		}
	}


}



class StatementSequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_statementSequence;
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
	    if(listener instanceof oberonListener ) {
	        listener.enterStatementSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitStatementSequence(this);
		}
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_ifStatement;
    }

	IF() {
	    return this.getToken(oberonParser.IF, 0);
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

	THEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(oberonParser.THEN);
	    } else {
	        return this.getToken(oberonParser.THEN, i);
	    }
	};


	statementSequence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementSequenceContext);
	    } else {
	        return this.getTypedRuleContext(StatementSequenceContext,i);
	    }
	};

	END() {
	    return this.getToken(oberonParser.END, 0);
	};

	ELSIF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(oberonParser.ELSIF);
	    } else {
	        return this.getToken(oberonParser.ELSIF, i);
	    }
	};


	ELSE() {
	    return this.getToken(oberonParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitIfStatement(this);
		}
	}


}



class CaseStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_caseStatement;
    }

	CASE() {
	    return this.getToken(oberonParser.CASE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	OF() {
	    return this.getToken(oberonParser.OF, 0);
	};

	case_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Case_Context);
	    } else {
	        return this.getTypedRuleContext(Case_Context,i);
	    }
	};

	END() {
	    return this.getToken(oberonParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterCaseStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitCaseStatement(this);
		}
	}


}



class Case_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_case_;
    }

	caseLabelList() {
	    return this.getTypedRuleContext(CaseLabelListContext,0);
	};

	statementSequence() {
	    return this.getTypedRuleContext(StatementSequenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterCase_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitCase_(this);
		}
	}


}



class CaseLabelListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_caseLabelList;
    }

	labelRange = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LabelRangeContext);
	    } else {
	        return this.getTypedRuleContext(LabelRangeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterCaseLabelList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitCaseLabelList(this);
		}
	}


}



class LabelRangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_labelRange;
    }

	label = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LabelContext);
	    } else {
	        return this.getTypedRuleContext(LabelContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterLabelRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitLabelRange(this);
		}
	}


}



class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_label;
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	STRING() {
	    return this.getToken(oberonParser.STRING, 0);
	};

	qualident() {
	    return this.getTypedRuleContext(QualidentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitLabel(this);
		}
	}


}



class WhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_whileStatement;
    }

	WHILE() {
	    return this.getToken(oberonParser.WHILE, 0);
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

	DO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(oberonParser.DO);
	    } else {
	        return this.getToken(oberonParser.DO, i);
	    }
	};


	statementSequence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementSequenceContext);
	    } else {
	        return this.getTypedRuleContext(StatementSequenceContext,i);
	    }
	};

	END() {
	    return this.getToken(oberonParser.END, 0);
	};

	ELSIF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(oberonParser.ELSIF);
	    } else {
	        return this.getToken(oberonParser.ELSIF, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitWhileStatement(this);
		}
	}


}



class RepeatStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_repeatStatement;
    }

	REPEAT() {
	    return this.getToken(oberonParser.REPEAT, 0);
	};

	statementSequence() {
	    return this.getTypedRuleContext(StatementSequenceContext,0);
	};

	UNTIL() {
	    return this.getToken(oberonParser.UNTIL, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterRepeatStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitRepeatStatement(this);
		}
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_forStatement;
    }

	FOR() {
	    return this.getToken(oberonParser.FOR, 0);
	};

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
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

	TO() {
	    return this.getToken(oberonParser.TO, 0);
	};

	DO() {
	    return this.getToken(oberonParser.DO, 0);
	};

	statementSequence() {
	    return this.getTypedRuleContext(StatementSequenceContext,0);
	};

	END() {
	    return this.getToken(oberonParser.END, 0);
	};

	BY() {
	    return this.getToken(oberonParser.BY, 0);
	};

	constExpression() {
	    return this.getTypedRuleContext(ConstExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitForStatement(this);
		}
	}


}



class ProcedureDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_procedureDeclaration;
    }

	procedureHeading() {
	    return this.getTypedRuleContext(ProcedureHeadingContext,0);
	};

	procedureBody() {
	    return this.getTypedRuleContext(ProcedureBodyContext,0);
	};

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterProcedureDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitProcedureDeclaration(this);
		}
	}


}



class ProcedureHeadingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_procedureHeading;
    }

	PROCEDURE() {
	    return this.getToken(oberonParser.PROCEDURE, 0);
	};

	identdef() {
	    return this.getTypedRuleContext(IdentdefContext,0);
	};

	formalParameters() {
	    return this.getTypedRuleContext(FormalParametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterProcedureHeading(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitProcedureHeading(this);
		}
	}


}



class ProcedureBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_procedureBody;
    }

	declarationSequence() {
	    return this.getTypedRuleContext(DeclarationSequenceContext,0);
	};

	END() {
	    return this.getToken(oberonParser.END, 0);
	};

	BEGIN() {
	    return this.getToken(oberonParser.BEGIN, 0);
	};

	statementSequence() {
	    return this.getTypedRuleContext(StatementSequenceContext,0);
	};

	RETURN() {
	    return this.getToken(oberonParser.RETURN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterProcedureBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitProcedureBody(this);
		}
	}


}



class DeclarationSequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_declarationSequence;
    }

	CONST() {
	    return this.getToken(oberonParser.CONST, 0);
	};

	TYPE() {
	    return this.getToken(oberonParser.TYPE, 0);
	};

	VAR() {
	    return this.getToken(oberonParser.VAR, 0);
	};

	procedureDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProcedureDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(ProcedureDeclarationContext,i);
	    }
	};

	constDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(ConstDeclarationContext,i);
	    }
	};

	typeDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(TypeDeclarationContext,i);
	    }
	};

	variableDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(VariableDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterDeclarationSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitDeclarationSequence(this);
		}
	}


}



class FormalParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_formalParameters;
    }

	fPSection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FPSectionContext);
	    } else {
	        return this.getTypedRuleContext(FPSectionContext,i);
	    }
	};

	qualident() {
	    return this.getTypedRuleContext(QualidentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterFormalParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitFormalParameters(this);
		}
	}


}



class FPSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_fPSection;
    }

	ident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentContext);
	    } else {
	        return this.getTypedRuleContext(IdentContext,i);
	    }
	};

	formalType() {
	    return this.getTypedRuleContext(FormalTypeContext,0);
	};

	VAR() {
	    return this.getToken(oberonParser.VAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterFPSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitFPSection(this);
		}
	}


}



class FormalTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_formalType;
    }

	qualident() {
	    return this.getTypedRuleContext(QualidentContext,0);
	};

	ARRAY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(oberonParser.ARRAY);
	    } else {
	        return this.getToken(oberonParser.ARRAY, i);
	    }
	};


	OF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(oberonParser.OF);
	    } else {
	        return this.getToken(oberonParser.OF, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterFormalType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitFormalType(this);
		}
	}


}



class ModuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_module;
    }

	MODULE() {
	    return this.getToken(oberonParser.MODULE, 0);
	};

	ident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentContext);
	    } else {
	        return this.getTypedRuleContext(IdentContext,i);
	    }
	};

	declarationSequence() {
	    return this.getTypedRuleContext(DeclarationSequenceContext,0);
	};

	END() {
	    return this.getToken(oberonParser.END, 0);
	};

	importList() {
	    return this.getTypedRuleContext(ImportListContext,0);
	};

	BEGIN() {
	    return this.getToken(oberonParser.BEGIN, 0);
	};

	statementSequence() {
	    return this.getTypedRuleContext(StatementSequenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterModule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitModule(this);
		}
	}


}



class ImportListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_importList;
    }

	IMPORT() {
	    return this.getToken(oberonParser.IMPORT, 0);
	};

	import_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Import_Context);
	    } else {
	        return this.getTypedRuleContext(Import_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterImportList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitImportList(this);
		}
	}


}



class Import_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = oberonParser.RULE_import_;
    }

	ident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentContext);
	    } else {
	        return this.getTypedRuleContext(IdentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.enterImport_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof oberonListener ) {
	        listener.exitImport_(this);
		}
	}


}




oberonParser.IdentContext = IdentContext; 
oberonParser.QualidentContext = QualidentContext; 
oberonParser.IdentdefContext = IdentdefContext; 
oberonParser.IntegerContext = IntegerContext; 
oberonParser.RealContext = RealContext; 
oberonParser.ScaleFactorContext = ScaleFactorContext; 
oberonParser.NumberContext = NumberContext; 
oberonParser.ConstDeclarationContext = ConstDeclarationContext; 
oberonParser.ConstExpressionContext = ConstExpressionContext; 
oberonParser.TypeDeclarationContext = TypeDeclarationContext; 
oberonParser.Type_Context = Type_Context; 
oberonParser.ArrayTypeContext = ArrayTypeContext; 
oberonParser.LengthContext = LengthContext; 
oberonParser.RecordTypeContext = RecordTypeContext; 
oberonParser.BaseTypeContext = BaseTypeContext; 
oberonParser.FieldListSequenceContext = FieldListSequenceContext; 
oberonParser.FieldListContext = FieldListContext; 
oberonParser.IdentListContext = IdentListContext; 
oberonParser.PointerTypeContext = PointerTypeContext; 
oberonParser.ProcedureTypeContext = ProcedureTypeContext; 
oberonParser.VariableDeclarationContext = VariableDeclarationContext; 
oberonParser.ExpressionContext = ExpressionContext; 
oberonParser.RelationContext = RelationContext; 
oberonParser.SimpleExpressionContext = SimpleExpressionContext; 
oberonParser.AddOperatorContext = AddOperatorContext; 
oberonParser.TermContext = TermContext; 
oberonParser.MulOperatorContext = MulOperatorContext; 
oberonParser.FactorContext = FactorContext; 
oberonParser.DesignatorContext = DesignatorContext; 
oberonParser.SelectorContext = SelectorContext; 
oberonParser.Set_Context = Set_Context; 
oberonParser.ElementContext = ElementContext; 
oberonParser.ExpListContext = ExpListContext; 
oberonParser.ActualParametersContext = ActualParametersContext; 
oberonParser.StatementContext = StatementContext; 
oberonParser.AssignmentContext = AssignmentContext; 
oberonParser.ProcedureCallContext = ProcedureCallContext; 
oberonParser.StatementSequenceContext = StatementSequenceContext; 
oberonParser.IfStatementContext = IfStatementContext; 
oberonParser.CaseStatementContext = CaseStatementContext; 
oberonParser.Case_Context = Case_Context; 
oberonParser.CaseLabelListContext = CaseLabelListContext; 
oberonParser.LabelRangeContext = LabelRangeContext; 
oberonParser.LabelContext = LabelContext; 
oberonParser.WhileStatementContext = WhileStatementContext; 
oberonParser.RepeatStatementContext = RepeatStatementContext; 
oberonParser.ForStatementContext = ForStatementContext; 
oberonParser.ProcedureDeclarationContext = ProcedureDeclarationContext; 
oberonParser.ProcedureHeadingContext = ProcedureHeadingContext; 
oberonParser.ProcedureBodyContext = ProcedureBodyContext; 
oberonParser.DeclarationSequenceContext = DeclarationSequenceContext; 
oberonParser.FormalParametersContext = FormalParametersContext; 
oberonParser.FPSectionContext = FPSectionContext; 
oberonParser.FormalTypeContext = FormalTypeContext; 
oberonParser.ModuleContext = ModuleContext; 
oberonParser.ImportListContext = ImportListContext; 
oberonParser.Import_Context = Import_Context; 
