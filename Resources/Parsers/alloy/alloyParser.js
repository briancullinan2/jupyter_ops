// Generated from ./Resources/Parsers/alloy/alloy.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import alloyListener from './alloyListener.js';
const serializedATN = [4,1,73,443,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,1,0,3,0,60,8,0,1,0,5,0,63,8,0,10,0,12,0,66,9,0,1,0,4,0,69,
8,0,11,0,12,0,70,1,1,1,1,1,1,1,1,1,1,5,1,78,8,1,10,1,12,1,81,9,1,1,2,1,2,
1,2,1,2,5,2,87,8,2,10,2,12,2,90,9,2,1,2,1,2,3,2,94,8,2,1,3,1,3,1,3,1,3,1,
3,1,3,3,3,102,8,3,1,4,3,4,105,8,4,1,4,3,4,108,8,4,1,4,1,4,1,4,1,4,5,4,114,
8,4,10,4,12,4,117,9,4,1,4,3,4,120,8,4,1,4,1,4,1,4,1,4,5,4,126,8,4,10,4,12,
4,129,9,4,3,4,131,8,4,1,4,1,4,3,4,135,8,4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,143,
8,5,10,5,12,5,146,9,5,3,5,148,8,5,1,6,1,6,1,7,3,7,153,8,7,1,7,1,7,1,7,5,
7,158,8,7,10,7,12,7,161,9,7,1,7,1,7,3,7,165,8,7,1,7,1,7,1,8,1,8,3,8,171,
8,8,1,8,1,8,1,9,1,9,1,9,1,9,3,9,179,8,9,1,9,1,9,3,9,183,8,9,1,9,1,9,1,10,
1,10,1,10,1,10,3,10,191,8,10,1,10,1,10,3,10,195,8,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,11,1,11,1,11,1,11,5,11,207,8,11,10,11,12,11,210,9,11,1,11,1,
11,1,11,1,11,1,11,1,11,5,11,218,8,11,10,11,12,11,221,9,11,1,11,1,11,3,11,
225,8,11,1,12,1,12,3,12,229,8,12,1,12,1,12,1,13,1,13,1,13,3,13,236,8,13,
1,13,3,13,239,8,13,1,13,1,13,3,13,243,8,13,1,13,3,13,246,8,13,1,14,1,14,
1,14,1,14,1,14,1,14,5,14,254,8,14,10,14,12,14,257,9,14,3,14,259,8,14,1,14,
1,14,1,14,1,14,5,14,265,8,14,10,14,12,14,268,9,14,3,14,270,8,14,1,15,3,15,
273,8,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
1,16,1,16,1,16,5,16,291,8,16,10,16,12,16,294,9,16,1,16,1,16,1,16,1,16,1,
16,1,16,5,16,302,8,16,10,16,12,16,305,9,16,1,16,1,16,1,16,1,16,1,16,1,16,
5,16,313,8,16,10,16,12,16,316,9,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
16,3,16,326,8,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,
338,8,16,1,16,1,16,1,16,1,16,1,16,3,16,345,8,16,1,16,1,16,1,16,1,16,1,16,
1,16,1,16,1,16,4,16,355,8,16,11,16,12,16,356,1,16,1,16,5,16,361,8,16,10,
16,12,16,364,9,16,1,17,3,17,367,8,17,1,17,1,17,1,17,1,17,3,17,373,8,17,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,384,8,18,1,19,1,19,1,20,
1,20,3,20,390,8,20,1,20,1,20,1,20,3,20,395,8,20,1,21,1,21,1,22,1,22,1,22,
1,22,1,23,1,23,5,23,405,8,23,10,23,12,23,408,9,23,1,23,1,23,1,24,1,24,1,
24,3,24,415,8,24,1,25,1,25,1,25,1,25,3,25,421,8,25,1,26,3,26,424,8,26,1,
26,1,26,1,26,5,26,429,8,26,10,26,12,26,432,9,26,1,26,1,26,1,27,1,27,1,28,
4,28,439,8,28,11,28,12,28,440,1,28,0,1,32,29,0,2,4,6,8,10,12,14,16,18,20,
22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,0,6,1,0,12,14,1,0,
26,27,1,0,33,34,1,0,35,36,5,0,11,11,19,19,35,36,39,39,49,58,2,0,10,10,60,
64,498,0,59,1,0,0,0,2,72,1,0,0,0,4,82,1,0,0,0,6,101,1,0,0,0,8,104,1,0,0,
0,10,147,1,0,0,0,12,149,1,0,0,0,14,152,1,0,0,0,16,168,1,0,0,0,18,174,1,0,
0,0,20,186,1,0,0,0,22,224,1,0,0,0,24,226,1,0,0,0,26,235,1,0,0,0,28,269,1,
0,0,0,30,272,1,0,0,0,32,325,1,0,0,0,34,372,1,0,0,0,36,383,1,0,0,0,38,385,
1,0,0,0,40,389,1,0,0,0,42,396,1,0,0,0,44,398,1,0,0,0,46,402,1,0,0,0,48,414,
1,0,0,0,50,420,1,0,0,0,52,423,1,0,0,0,54,435,1,0,0,0,56,438,1,0,0,0,58,60,
3,2,1,0,59,58,1,0,0,0,59,60,1,0,0,0,60,64,1,0,0,0,61,63,3,4,2,0,62,61,1,
0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,68,1,0,0,0,66,64,1,0,
0,0,67,69,3,6,3,0,68,67,1,0,0,0,69,70,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,
0,71,1,1,0,0,0,72,73,5,1,0,0,73,74,3,52,26,0,74,79,3,54,27,0,75,76,5,2,0,
0,76,78,3,54,27,0,77,75,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,
0,80,3,1,0,0,0,81,79,1,0,0,0,82,83,5,3,0,0,83,88,3,52,26,0,84,85,5,2,0,0,
85,87,3,52,26,0,86,84,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,
89,93,1,0,0,0,90,88,1,0,0,0,91,92,5,4,0,0,92,94,3,54,27,0,93,91,1,0,0,0,
93,94,1,0,0,0,94,5,1,0,0,0,95,102,3,8,4,0,96,102,3,16,8,0,97,102,3,18,9,
0,98,102,3,20,10,0,99,102,3,24,12,0,100,102,3,26,13,0,101,95,1,0,0,0,101,
96,1,0,0,0,101,97,1,0,0,0,101,98,1,0,0,0,101,99,1,0,0,0,101,100,1,0,0,0,
102,7,1,0,0,0,103,105,5,5,0,0,104,103,1,0,0,0,104,105,1,0,0,0,105,107,1,
0,0,0,106,108,3,12,6,0,107,106,1,0,0,0,107,108,1,0,0,0,108,109,1,0,0,0,109,
110,5,6,0,0,110,115,3,54,27,0,111,112,5,2,0,0,112,114,3,54,27,0,113,111,
1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,119,1,0,0,0,
117,115,1,0,0,0,118,120,3,10,5,0,119,118,1,0,0,0,119,120,1,0,0,0,120,121,
1,0,0,0,121,130,5,7,0,0,122,127,3,14,7,0,123,124,5,2,0,0,124,126,3,14,7,
0,125,123,1,0,0,0,126,129,1,0,0,0,127,125,1,0,0,0,127,128,1,0,0,0,128,131,
1,0,0,0,129,127,1,0,0,0,130,122,1,0,0,0,130,131,1,0,0,0,131,132,1,0,0,0,
132,134,5,8,0,0,133,135,3,46,23,0,134,133,1,0,0,0,134,135,1,0,0,0,135,9,
1,0,0,0,136,137,5,9,0,0,137,148,3,52,26,0,138,139,5,10,0,0,139,144,3,52,
26,0,140,141,5,11,0,0,141,143,3,52,26,0,142,140,1,0,0,0,143,146,1,0,0,0,
144,142,1,0,0,0,144,145,1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,0,147,136,
1,0,0,0,147,138,1,0,0,0,148,11,1,0,0,0,149,150,7,0,0,0,150,13,1,0,0,0,151,
153,5,15,0,0,152,151,1,0,0,0,152,153,1,0,0,0,153,154,1,0,0,0,154,159,3,54,
27,0,155,156,5,2,0,0,156,158,3,54,27,0,157,155,1,0,0,0,158,161,1,0,0,0,159,
157,1,0,0,0,159,160,1,0,0,0,160,162,1,0,0,0,161,159,1,0,0,0,162,164,5,16,
0,0,163,165,5,15,0,0,164,163,1,0,0,0,164,165,1,0,0,0,165,166,1,0,0,0,166,
167,3,32,16,0,167,15,1,0,0,0,168,170,5,17,0,0,169,171,3,54,27,0,170,169,
1,0,0,0,170,171,1,0,0,0,171,172,1,0,0,0,172,173,3,46,23,0,173,17,1,0,0,0,
174,178,5,18,0,0,175,176,3,52,26,0,176,177,5,19,0,0,177,179,1,0,0,0,178,
175,1,0,0,0,178,179,1,0,0,0,179,180,1,0,0,0,180,182,3,54,27,0,181,183,3,
22,11,0,182,181,1,0,0,0,182,183,1,0,0,0,183,184,1,0,0,0,184,185,3,46,23,
0,185,19,1,0,0,0,186,190,5,20,0,0,187,188,3,52,26,0,188,189,5,19,0,0,189,
191,1,0,0,0,190,187,1,0,0,0,190,191,1,0,0,0,191,192,1,0,0,0,192,194,3,54,
27,0,193,195,3,22,11,0,194,193,1,0,0,0,194,195,1,0,0,0,195,196,1,0,0,0,196,
197,5,16,0,0,197,198,3,32,16,0,198,199,5,7,0,0,199,200,3,32,16,0,200,201,
5,8,0,0,201,21,1,0,0,0,202,203,5,21,0,0,203,208,3,14,7,0,204,205,5,2,0,0,
205,207,3,14,7,0,206,204,1,0,0,0,207,210,1,0,0,0,208,206,1,0,0,0,208,209,
1,0,0,0,209,211,1,0,0,0,210,208,1,0,0,0,211,212,5,22,0,0,212,225,1,0,0,0,
213,214,5,23,0,0,214,219,3,14,7,0,215,216,5,2,0,0,216,218,3,14,7,0,217,215,
1,0,0,0,218,221,1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,0,220,222,1,0,0,0,
221,219,1,0,0,0,222,223,5,24,0,0,223,225,1,0,0,0,224,202,1,0,0,0,224,213,
1,0,0,0,225,23,1,0,0,0,226,228,5,25,0,0,227,229,3,54,27,0,228,227,1,0,0,
0,228,229,1,0,0,0,229,230,1,0,0,0,230,231,3,46,23,0,231,25,1,0,0,0,232,233,
3,54,27,0,233,234,5,16,0,0,234,236,1,0,0,0,235,232,1,0,0,0,235,236,1,0,0,
0,236,238,1,0,0,0,237,239,7,1,0,0,238,237,1,0,0,0,238,239,1,0,0,0,239,242,
1,0,0,0,240,243,3,52,26,0,241,243,3,46,23,0,242,240,1,0,0,0,242,241,1,0,
0,0,243,245,1,0,0,0,244,246,3,28,14,0,245,244,1,0,0,0,245,246,1,0,0,0,246,
27,1,0,0,0,247,248,5,28,0,0,248,258,3,56,28,0,249,250,5,29,0,0,250,255,3,
30,15,0,251,252,5,2,0,0,252,254,3,30,15,0,253,251,1,0,0,0,254,257,1,0,0,
0,255,253,1,0,0,0,255,256,1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,0,258,249,
1,0,0,0,258,259,1,0,0,0,259,270,1,0,0,0,260,261,5,28,0,0,261,266,3,30,15,
0,262,263,5,2,0,0,263,265,3,30,15,0,264,262,1,0,0,0,265,268,1,0,0,0,266,
264,1,0,0,0,266,267,1,0,0,0,267,270,1,0,0,0,268,266,1,0,0,0,269,247,1,0,
0,0,269,260,1,0,0,0,270,29,1,0,0,0,271,273,5,30,0,0,272,271,1,0,0,0,272,
273,1,0,0,0,273,274,1,0,0,0,274,275,3,56,28,0,275,276,3,52,26,0,276,31,1,
0,0,0,277,278,6,16,-1,0,278,326,3,34,17,0,279,326,3,52,26,0,280,281,5,31,
0,0,281,326,3,54,27,0,282,326,5,32,0,0,283,284,3,36,18,0,284,285,3,32,16,
11,285,326,1,0,0,0,286,287,5,38,0,0,287,292,3,44,22,0,288,289,5,2,0,0,289,
291,3,44,22,0,290,288,1,0,0,0,291,294,1,0,0,0,292,290,1,0,0,0,292,293,1,
0,0,0,293,295,1,0,0,0,294,292,1,0,0,0,295,296,3,48,24,0,296,326,1,0,0,0,
297,298,3,50,25,0,298,303,3,14,7,0,299,300,5,2,0,0,300,302,3,14,7,0,301,
299,1,0,0,0,302,305,1,0,0,0,303,301,1,0,0,0,303,304,1,0,0,0,304,306,1,0,
0,0,305,303,1,0,0,0,306,307,3,48,24,0,307,326,1,0,0,0,308,309,5,7,0,0,309,
314,3,14,7,0,310,311,5,2,0,0,311,313,3,14,7,0,312,310,1,0,0,0,313,316,1,
0,0,0,314,312,1,0,0,0,314,315,1,0,0,0,315,317,1,0,0,0,316,314,1,0,0,0,317,
318,3,48,24,0,318,319,5,8,0,0,319,326,1,0,0,0,320,321,5,21,0,0,321,322,3,
32,16,0,322,323,5,22,0,0,323,326,1,0,0,0,324,326,3,46,23,0,325,277,1,0,0,
0,325,279,1,0,0,0,325,280,1,0,0,0,325,282,1,0,0,0,325,283,1,0,0,0,325,286,
1,0,0,0,325,297,1,0,0,0,325,308,1,0,0,0,325,320,1,0,0,0,325,324,1,0,0,0,
326,362,1,0,0,0,327,328,10,10,0,0,328,329,3,38,19,0,329,330,3,32,16,11,330,
361,1,0,0,0,331,332,10,9,0,0,332,333,3,40,20,0,333,334,3,32,16,10,334,361,
1,0,0,0,335,337,10,7,0,0,336,338,7,2,0,0,337,336,1,0,0,0,337,338,1,0,0,0,
338,339,1,0,0,0,339,340,3,42,21,0,340,341,3,32,16,8,341,361,1,0,0,0,342,
344,10,6,0,0,343,345,7,3,0,0,344,343,1,0,0,0,344,345,1,0,0,0,345,346,1,0,
0,0,346,347,3,32,16,0,347,348,5,37,0,0,348,349,3,32,16,7,349,361,1,0,0,0,
350,351,10,8,0,0,351,354,5,23,0,0,352,353,5,2,0,0,353,355,3,32,16,0,354,
352,1,0,0,0,355,356,1,0,0,0,356,354,1,0,0,0,356,357,1,0,0,0,357,358,1,0,
0,0,358,359,5,24,0,0,359,361,1,0,0,0,360,327,1,0,0,0,360,331,1,0,0,0,360,
335,1,0,0,0,360,342,1,0,0,0,360,350,1,0,0,0,361,364,1,0,0,0,362,360,1,0,
0,0,362,363,1,0,0,0,363,33,1,0,0,0,364,362,1,0,0,0,365,367,5,39,0,0,366,
365,1,0,0,0,366,367,1,0,0,0,367,368,1,0,0,0,368,373,3,56,28,0,369,373,5,
40,0,0,370,373,5,41,0,0,371,373,5,42,0,0,372,366,1,0,0,0,372,369,1,0,0,0,
372,370,1,0,0,0,372,371,1,0,0,0,373,35,1,0,0,0,374,384,5,33,0,0,375,384,
5,34,0,0,376,384,5,43,0,0,377,384,3,12,6,0,378,384,5,44,0,0,379,384,5,45,
0,0,380,384,5,46,0,0,381,384,5,47,0,0,382,384,5,48,0,0,383,374,1,0,0,0,383,
375,1,0,0,0,383,376,1,0,0,0,383,377,1,0,0,0,383,378,1,0,0,0,383,379,1,0,
0,0,383,380,1,0,0,0,383,381,1,0,0,0,383,382,1,0,0,0,384,37,1,0,0,0,385,386,
7,4,0,0,386,39,1,0,0,0,387,390,3,12,6,0,388,390,5,44,0,0,389,387,1,0,0,0,
389,388,1,0,0,0,389,390,1,0,0,0,390,391,1,0,0,0,391,394,5,59,0,0,392,395,
3,12,6,0,393,395,5,44,0,0,394,392,1,0,0,0,394,393,1,0,0,0,394,395,1,0,0,
0,395,41,1,0,0,0,396,397,7,5,0,0,397,43,1,0,0,0,398,399,3,54,27,0,399,400,
5,60,0,0,400,401,3,32,16,0,401,45,1,0,0,0,402,406,5,7,0,0,403,405,3,32,16,
0,404,403,1,0,0,0,405,408,1,0,0,0,406,404,1,0,0,0,406,407,1,0,0,0,407,409,
1,0,0,0,408,406,1,0,0,0,409,410,5,8,0,0,410,47,1,0,0,0,411,415,3,46,23,0,
412,413,5,69,0,0,413,415,3,32,16,0,414,411,1,0,0,0,414,412,1,0,0,0,415,49,
1,0,0,0,416,421,5,65,0,0,417,421,5,43,0,0,418,421,5,66,0,0,419,421,3,12,
6,0,420,416,1,0,0,0,420,417,1,0,0,0,420,418,1,0,0,0,420,419,1,0,0,0,421,
51,1,0,0,0,422,424,5,67,0,0,423,422,1,0,0,0,423,424,1,0,0,0,424,430,1,0,
0,0,425,426,3,54,27,0,426,427,5,68,0,0,427,429,1,0,0,0,428,425,1,0,0,0,429,
432,1,0,0,0,430,428,1,0,0,0,430,431,1,0,0,0,431,433,1,0,0,0,432,430,1,0,
0,0,433,434,3,54,27,0,434,53,1,0,0,0,435,436,5,71,0,0,436,55,1,0,0,0,437,
439,5,70,0,0,438,437,1,0,0,0,439,440,1,0,0,0,440,438,1,0,0,0,440,441,1,0,
0,0,441,57,1,0,0,0,57,59,64,70,79,88,93,101,104,107,115,119,127,130,134,
144,147,152,159,164,170,178,182,190,194,208,219,224,228,235,238,242,245,
255,258,266,269,272,292,303,314,325,337,344,356,360,362,366,372,383,389,
394,406,414,420,423,430,440];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class alloyParser extends antlr4.Parser {

    static grammarFileName = "alloy.g4";
    static literalNames = [ null, "'module'", "','", "'open'", "'as'", "'abstract'", 
                            "'sig'", "'{'", "'}'", "'extends'", "'in'", 
                            "'+'", "'lone'", "'some'", "'one'", "'disj'", 
                            "':'", "'fact'", "'pred'", "'.'", "'fun'", "'('", 
                            "')'", "'['", "']'", "'assert'", "'run'", "'check'", 
                            "'for'", "'but'", "'exactly'", "'@'", "'this'", 
                            "'!'", "'not'", "'=>'", "'implies'", "'else'", 
                            "'let'", "'-'", "'none'", "'univ'", "'iden'", 
                            "'no'", "'set'", "'#'", "'~'", "'*'", "'^'", 
                            "'||'", "'or'", "'&&'", "'and'", "'<=>'", "'iff'", 
                            "'&'", "'++'", "'<:'", "':>'", "'->'", "'='", 
                            "'<'", "'>'", "'=<'", "'>='", "'all'", "'sum'", 
                            "'this/'", "'/'", "'|'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "BAR", "DIGIT", 
                             "IDENTIFIER", "COMMENT", "WS" ];
    static ruleNames = [ "alloyModule", "moduleDecl", "import_", "paragraph", 
                         "sigDecl", "sigExt", "mult", "decl", "factDecl", 
                         "predDecl", "funDecl", "paraDecls", "assertDecl", 
                         "cmdDecl", "scope", "typescope", "expr", "const_", 
                         "unOp", "binOp", "arrowOp", "compareOp", "letDecl", 
                         "block", "blockOrBar", "quant", "qualName", "name", 
                         "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = alloyParser.ruleNames;
        this.literalNames = alloyParser.literalNames;
        this.symbolicNames = alloyParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 16:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 10);
    		case 1:
    			return this.precpred(this._ctx, 9);
    		case 2:
    			return this.precpred(this._ctx, 7);
    		case 3:
    			return this.precpred(this._ctx, 6);
    		case 4:
    			return this.precpred(this._ctx, 8);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	alloyModule() {
	    let localctx = new AlloyModuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, alloyParser.RULE_alloyModule);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alloyParser.T__0) {
	            this.state = 58;
	            this.moduleDecl();
	        }

	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===alloyParser.T__2) {
	            this.state = 61;
	            this.import_();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 68; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 67;
	            this.paragraph();
	            this.state = 70; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << alloyParser.T__4) | (1 << alloyParser.T__5) | (1 << alloyParser.T__6) | (1 << alloyParser.T__11) | (1 << alloyParser.T__12) | (1 << alloyParser.T__13) | (1 << alloyParser.T__16) | (1 << alloyParser.T__17) | (1 << alloyParser.T__19) | (1 << alloyParser.T__24) | (1 << alloyParser.T__25) | (1 << alloyParser.T__26))) !== 0) || _la===alloyParser.T__66 || _la===alloyParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	moduleDecl() {
	    let localctx = new ModuleDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, alloyParser.RULE_moduleDecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(alloyParser.T__0);
	        this.state = 73;
	        this.qualName();
	        this.state = 74;
	        this.name();
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===alloyParser.T__1) {
	            this.state = 75;
	            this.match(alloyParser.T__1);
	            this.state = 76;
	            this.name();
	            this.state = 81;
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



	import_() {
	    let localctx = new Import_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, alloyParser.RULE_import_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(alloyParser.T__2);
	        this.state = 83;
	        this.qualName();
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===alloyParser.T__1) {
	            this.state = 84;
	            this.match(alloyParser.T__1);
	            this.state = 85;
	            this.qualName();
	            this.state = 90;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alloyParser.T__3) {
	            this.state = 91;
	            this.match(alloyParser.T__3);
	            this.state = 92;
	            this.name();
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



	paragraph() {
	    let localctx = new ParagraphContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, alloyParser.RULE_paragraph);
	    try {
	        this.state = 101;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case alloyParser.T__4:
	        case alloyParser.T__5:
	        case alloyParser.T__11:
	        case alloyParser.T__12:
	        case alloyParser.T__13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.sigDecl();
	            break;
	        case alloyParser.T__16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.factDecl();
	            break;
	        case alloyParser.T__17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 97;
	            this.predDecl();
	            break;
	        case alloyParser.T__19:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 98;
	            this.funDecl();
	            break;
	        case alloyParser.T__24:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 99;
	            this.assertDecl();
	            break;
	        case alloyParser.T__6:
	        case alloyParser.T__25:
	        case alloyParser.T__26:
	        case alloyParser.T__66:
	        case alloyParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 100;
	            this.cmdDecl();
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



	sigDecl() {
	    let localctx = new SigDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, alloyParser.RULE_sigDecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alloyParser.T__4) {
	            this.state = 103;
	            this.match(alloyParser.T__4);
	        }

	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << alloyParser.T__11) | (1 << alloyParser.T__12) | (1 << alloyParser.T__13))) !== 0)) {
	            this.state = 106;
	            this.mult();
	        }

	        this.state = 109;
	        this.match(alloyParser.T__5);
	        this.state = 110;
	        this.name();
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===alloyParser.T__1) {
	            this.state = 111;
	            this.match(alloyParser.T__1);
	            this.state = 112;
	            this.name();
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alloyParser.T__8 || _la===alloyParser.T__9) {
	            this.state = 118;
	            this.sigExt();
	        }

	        this.state = 121;
	        this.match(alloyParser.T__6);
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alloyParser.T__14 || _la===alloyParser.IDENTIFIER) {
	            this.state = 122;
	            this.decl();
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===alloyParser.T__1) {
	                this.state = 123;
	                this.match(alloyParser.T__1);
	                this.state = 124;
	                this.decl();
	                this.state = 129;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 132;
	        this.match(alloyParser.T__7);
	        this.state = 134;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 133;
	            this.block();

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



	sigExt() {
	    let localctx = new SigExtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, alloyParser.RULE_sigExt);
	    var _la = 0; // Token type
	    try {
	        this.state = 147;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case alloyParser.T__8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 136;
	            this.match(alloyParser.T__8);
	            this.state = 137;
	            this.qualName();
	            break;
	        case alloyParser.T__9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 138;
	            this.match(alloyParser.T__9);
	            this.state = 139;
	            this.qualName();
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===alloyParser.T__10) {
	                this.state = 140;
	                this.match(alloyParser.T__10);
	                this.state = 141;
	                this.qualName();
	                this.state = 146;
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



	mult() {
	    let localctx = new MultContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, alloyParser.RULE_mult);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << alloyParser.T__11) | (1 << alloyParser.T__12) | (1 << alloyParser.T__13))) !== 0))) {
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



	decl() {
	    let localctx = new DeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, alloyParser.RULE_decl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alloyParser.T__14) {
	            this.state = 151;
	            this.match(alloyParser.T__14);
	        }

	        this.state = 154;
	        this.name();
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===alloyParser.T__1) {
	            this.state = 155;
	            this.match(alloyParser.T__1);
	            this.state = 156;
	            this.name();
	            this.state = 161;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 162;
	        this.match(alloyParser.T__15);
	        this.state = 164;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alloyParser.T__14) {
	            this.state = 163;
	            this.match(alloyParser.T__14);
	        }

	        this.state = 166;
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



	factDecl() {
	    let localctx = new FactDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, alloyParser.RULE_factDecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(alloyParser.T__16);
	        this.state = 170;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alloyParser.IDENTIFIER) {
	            this.state = 169;
	            this.name();
	        }

	        this.state = 172;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	predDecl() {
	    let localctx = new PredDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, alloyParser.RULE_predDecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(alloyParser.T__17);
	        this.state = 178;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        if(la_===1) {
	            this.state = 175;
	            this.qualName();
	            this.state = 176;
	            this.match(alloyParser.T__18);

	        }
	        this.state = 180;
	        this.name();
	        this.state = 182;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alloyParser.T__20 || _la===alloyParser.T__22) {
	            this.state = 181;
	            this.paraDecls();
	        }

	        this.state = 184;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funDecl() {
	    let localctx = new FunDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, alloyParser.RULE_funDecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(alloyParser.T__19);
	        this.state = 190;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        if(la_===1) {
	            this.state = 187;
	            this.qualName();
	            this.state = 188;
	            this.match(alloyParser.T__18);

	        }
	        this.state = 192;
	        this.name();
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alloyParser.T__20 || _la===alloyParser.T__22) {
	            this.state = 193;
	            this.paraDecls();
	        }

	        this.state = 196;
	        this.match(alloyParser.T__15);
	        this.state = 197;
	        this.expr(0);
	        this.state = 198;
	        this.match(alloyParser.T__6);
	        this.state = 199;
	        this.expr(0);
	        this.state = 200;
	        this.match(alloyParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paraDecls() {
	    let localctx = new ParaDeclsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, alloyParser.RULE_paraDecls);
	    var _la = 0; // Token type
	    try {
	        this.state = 224;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case alloyParser.T__20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 202;
	            this.match(alloyParser.T__20);
	            this.state = 203;
	            this.decl();
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===alloyParser.T__1) {
	                this.state = 204;
	                this.match(alloyParser.T__1);
	                this.state = 205;
	                this.decl();
	                this.state = 210;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 211;
	            this.match(alloyParser.T__21);
	            break;
	        case alloyParser.T__22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 213;
	            this.match(alloyParser.T__22);
	            this.state = 214;
	            this.decl();
	            this.state = 219;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===alloyParser.T__1) {
	                this.state = 215;
	                this.match(alloyParser.T__1);
	                this.state = 216;
	                this.decl();
	                this.state = 221;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 222;
	            this.match(alloyParser.T__23);
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



	assertDecl() {
	    let localctx = new AssertDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, alloyParser.RULE_assertDecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(alloyParser.T__24);
	        this.state = 228;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alloyParser.IDENTIFIER) {
	            this.state = 227;
	            this.name();
	        }

	        this.state = 230;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cmdDecl() {
	    let localctx = new CmdDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, alloyParser.RULE_cmdDecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        if(la_===1) {
	            this.state = 232;
	            this.name();
	            this.state = 233;
	            this.match(alloyParser.T__15);

	        }
	        this.state = 238;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alloyParser.T__25 || _la===alloyParser.T__26) {
	            this.state = 237;
	            _la = this._input.LA(1);
	            if(!(_la===alloyParser.T__25 || _la===alloyParser.T__26)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 242;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case alloyParser.T__66:
	        case alloyParser.IDENTIFIER:
	            this.state = 240;
	            this.qualName();
	            break;
	        case alloyParser.T__6:
	            this.state = 241;
	            this.block();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 245;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alloyParser.T__27) {
	            this.state = 244;
	            this.scope();
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



	scope() {
	    let localctx = new ScopeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, alloyParser.RULE_scope);
	    var _la = 0; // Token type
	    try {
	        this.state = 269;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 247;
	            this.match(alloyParser.T__27);
	            this.state = 248;
	            this.number();
	            this.state = 258;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===alloyParser.T__28) {
	                this.state = 249;
	                this.match(alloyParser.T__28);
	                this.state = 250;
	                this.typescope();
	                this.state = 255;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===alloyParser.T__1) {
	                    this.state = 251;
	                    this.match(alloyParser.T__1);
	                    this.state = 252;
	                    this.typescope();
	                    this.state = 257;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 260;
	            this.match(alloyParser.T__27);
	            this.state = 261;
	            this.typescope();
	            this.state = 266;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===alloyParser.T__1) {
	                this.state = 262;
	                this.match(alloyParser.T__1);
	                this.state = 263;
	                this.typescope();
	                this.state = 268;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
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



	typescope() {
	    let localctx = new TypescopeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, alloyParser.RULE_typescope);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alloyParser.T__29) {
	            this.state = 271;
	            this.match(alloyParser.T__29);
	        }

	        this.state = 274;
	        this.number();
	        this.state = 275;
	        this.qualName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    const _startState = 32;
	    this.enterRecursionRule(localctx, 32, alloyParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 325;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 278;
	            this.const_();
	            break;

	        case 2:
	            this.state = 279;
	            this.qualName();
	            break;

	        case 3:
	            this.state = 280;
	            this.match(alloyParser.T__30);
	            this.state = 281;
	            this.name();
	            break;

	        case 4:
	            this.state = 282;
	            this.match(alloyParser.T__31);
	            break;

	        case 5:
	            this.state = 283;
	            this.unOp();
	            this.state = 284;
	            this.expr(11);
	            break;

	        case 6:
	            this.state = 286;
	            this.match(alloyParser.T__37);
	            this.state = 287;
	            this.letDecl();
	            this.state = 292;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===alloyParser.T__1) {
	                this.state = 288;
	                this.match(alloyParser.T__1);
	                this.state = 289;
	                this.letDecl();
	                this.state = 294;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 295;
	            this.blockOrBar();
	            break;

	        case 7:
	            this.state = 297;
	            this.quant();
	            this.state = 298;
	            this.decl();
	            this.state = 303;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===alloyParser.T__1) {
	                this.state = 299;
	                this.match(alloyParser.T__1);
	                this.state = 300;
	                this.decl();
	                this.state = 305;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 306;
	            this.blockOrBar();
	            break;

	        case 8:
	            this.state = 308;
	            this.match(alloyParser.T__6);
	            this.state = 309;
	            this.decl();
	            this.state = 314;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===alloyParser.T__1) {
	                this.state = 310;
	                this.match(alloyParser.T__1);
	                this.state = 311;
	                this.decl();
	                this.state = 316;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 317;
	            this.blockOrBar();
	            this.state = 318;
	            this.match(alloyParser.T__7);
	            break;

	        case 9:
	            this.state = 320;
	            this.match(alloyParser.T__20);
	            this.state = 321;
	            this.expr(0);
	            this.state = 322;
	            this.match(alloyParser.T__21);
	            break;

	        case 10:
	            this.state = 324;
	            this.block();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 362;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,45,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 360;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, alloyParser.RULE_expr);
	                    this.state = 327;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 328;
	                    this.binOp();
	                    this.state = 329;
	                    this.expr(11);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, alloyParser.RULE_expr);
	                    this.state = 331;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 332;
	                    this.arrowOp();
	                    this.state = 333;
	                    this.expr(10);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, alloyParser.RULE_expr);
	                    this.state = 335;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 337;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===alloyParser.T__32 || _la===alloyParser.T__33) {
	                        this.state = 336;
	                        _la = this._input.LA(1);
	                        if(!(_la===alloyParser.T__32 || _la===alloyParser.T__33)) {
	                        this._errHandler.recoverInline(this);
	                        }
	                        else {
	                        	this._errHandler.reportMatch(this);
	                            this.consume();
	                        }
	                    }

	                    this.state = 339;
	                    this.compareOp();
	                    this.state = 340;
	                    this.expr(8);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, alloyParser.RULE_expr);
	                    this.state = 342;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 344;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===alloyParser.T__34 || _la===alloyParser.T__35) {
	                        this.state = 343;
	                        _la = this._input.LA(1);
	                        if(!(_la===alloyParser.T__34 || _la===alloyParser.T__35)) {
	                        this._errHandler.recoverInline(this);
	                        }
	                        else {
	                        	this._errHandler.reportMatch(this);
	                            this.consume();
	                        }
	                    }

	                    this.state = 346;
	                    this.expr(0);
	                    this.state = 347;
	                    this.match(alloyParser.T__36);
	                    this.state = 348;
	                    this.expr(7);
	                    break;

	                case 5:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, alloyParser.RULE_expr);
	                    this.state = 350;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 351;
	                    this.match(alloyParser.T__22);
	                    this.state = 354; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 352;
	                        this.match(alloyParser.T__1);
	                        this.state = 353;
	                        this.expr(0);
	                        this.state = 356; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===alloyParser.T__1);
	                    this.state = 358;
	                    this.match(alloyParser.T__23);
	                    break;

	                } 
	            }
	            this.state = 364;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,45,this._ctx);
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



	const_() {
	    let localctx = new Const_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, alloyParser.RULE_const_);
	    var _la = 0; // Token type
	    try {
	        this.state = 372;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case alloyParser.T__38:
	        case alloyParser.DIGIT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 366;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===alloyParser.T__38) {
	                this.state = 365;
	                this.match(alloyParser.T__38);
	            }

	            this.state = 368;
	            this.number();
	            break;
	        case alloyParser.T__39:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 369;
	            this.match(alloyParser.T__39);
	            break;
	        case alloyParser.T__40:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 370;
	            this.match(alloyParser.T__40);
	            break;
	        case alloyParser.T__41:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 371;
	            this.match(alloyParser.T__41);
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



	unOp() {
	    let localctx = new UnOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, alloyParser.RULE_unOp);
	    try {
	        this.state = 383;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case alloyParser.T__32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 374;
	            this.match(alloyParser.T__32);
	            break;
	        case alloyParser.T__33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 375;
	            this.match(alloyParser.T__33);
	            break;
	        case alloyParser.T__42:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 376;
	            this.match(alloyParser.T__42);
	            break;
	        case alloyParser.T__11:
	        case alloyParser.T__12:
	        case alloyParser.T__13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 377;
	            this.mult();
	            break;
	        case alloyParser.T__43:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 378;
	            this.match(alloyParser.T__43);
	            break;
	        case alloyParser.T__44:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 379;
	            this.match(alloyParser.T__44);
	            break;
	        case alloyParser.T__45:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 380;
	            this.match(alloyParser.T__45);
	            break;
	        case alloyParser.T__46:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 381;
	            this.match(alloyParser.T__46);
	            break;
	        case alloyParser.T__47:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 382;
	            this.match(alloyParser.T__47);
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



	binOp() {
	    let localctx = new BinOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, alloyParser.RULE_binOp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 385;
	        _la = this._input.LA(1);
	        if(!(_la===alloyParser.T__10 || _la===alloyParser.T__18 || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (alloyParser.T__34 - 35)) | (1 << (alloyParser.T__35 - 35)) | (1 << (alloyParser.T__38 - 35)) | (1 << (alloyParser.T__48 - 35)) | (1 << (alloyParser.T__49 - 35)) | (1 << (alloyParser.T__50 - 35)) | (1 << (alloyParser.T__51 - 35)) | (1 << (alloyParser.T__52 - 35)) | (1 << (alloyParser.T__53 - 35)) | (1 << (alloyParser.T__54 - 35)) | (1 << (alloyParser.T__55 - 35)) | (1 << (alloyParser.T__56 - 35)) | (1 << (alloyParser.T__57 - 35)))) !== 0))) {
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



	arrowOp() {
	    let localctx = new ArrowOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, alloyParser.RULE_arrowOp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 389;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case alloyParser.T__11:
	        case alloyParser.T__12:
	        case alloyParser.T__13:
	        	this.state = 387;
	        	this.mult();
	        	break;
	        case alloyParser.T__43:
	        	this.state = 388;
	        	this.match(alloyParser.T__43);
	        	break;
	        case alloyParser.T__58:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 391;
	        this.match(alloyParser.T__58);
	        this.state = 394;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	        if(la_===1) {
	            this.state = 392;
	            this.mult();

	        } else if(la_===2) {
	            this.state = 393;
	            this.match(alloyParser.T__43);

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



	compareOp() {
	    let localctx = new CompareOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, alloyParser.RULE_compareOp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        _la = this._input.LA(1);
	        if(!(_la===alloyParser.T__9 || ((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (alloyParser.T__59 - 60)) | (1 << (alloyParser.T__60 - 60)) | (1 << (alloyParser.T__61 - 60)) | (1 << (alloyParser.T__62 - 60)) | (1 << (alloyParser.T__63 - 60)))) !== 0))) {
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



	letDecl() {
	    let localctx = new LetDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, alloyParser.RULE_letDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 398;
	        this.name();
	        this.state = 399;
	        this.match(alloyParser.T__59);
	        this.state = 400;
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, alloyParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 402;
	        this.match(alloyParser.T__6);
	        this.state = 406;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << alloyParser.T__6) | (1 << alloyParser.T__11) | (1 << alloyParser.T__12) | (1 << alloyParser.T__13) | (1 << alloyParser.T__20) | (1 << alloyParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (alloyParser.T__31 - 32)) | (1 << (alloyParser.T__32 - 32)) | (1 << (alloyParser.T__33 - 32)) | (1 << (alloyParser.T__37 - 32)) | (1 << (alloyParser.T__38 - 32)) | (1 << (alloyParser.T__39 - 32)) | (1 << (alloyParser.T__40 - 32)) | (1 << (alloyParser.T__41 - 32)) | (1 << (alloyParser.T__42 - 32)) | (1 << (alloyParser.T__43 - 32)) | (1 << (alloyParser.T__44 - 32)) | (1 << (alloyParser.T__45 - 32)) | (1 << (alloyParser.T__46 - 32)) | (1 << (alloyParser.T__47 - 32)))) !== 0) || ((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (alloyParser.T__64 - 65)) | (1 << (alloyParser.T__65 - 65)) | (1 << (alloyParser.T__66 - 65)) | (1 << (alloyParser.DIGIT - 65)) | (1 << (alloyParser.IDENTIFIER - 65)))) !== 0)) {
	            this.state = 403;
	            this.expr(0);
	            this.state = 408;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 409;
	        this.match(alloyParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	blockOrBar() {
	    let localctx = new BlockOrBarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, alloyParser.RULE_blockOrBar);
	    try {
	        this.state = 414;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case alloyParser.T__6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 411;
	            this.block();
	            break;
	        case alloyParser.BAR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 412;
	            this.match(alloyParser.BAR);
	            this.state = 413;
	            this.expr(0);
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



	quant() {
	    let localctx = new QuantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, alloyParser.RULE_quant);
	    try {
	        this.state = 420;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case alloyParser.T__64:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 416;
	            this.match(alloyParser.T__64);
	            break;
	        case alloyParser.T__42:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 417;
	            this.match(alloyParser.T__42);
	            break;
	        case alloyParser.T__65:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 418;
	            this.match(alloyParser.T__65);
	            break;
	        case alloyParser.T__11:
	        case alloyParser.T__12:
	        case alloyParser.T__13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 419;
	            this.mult();
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



	qualName() {
	    let localctx = new QualNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, alloyParser.RULE_qualName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 423;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===alloyParser.T__66) {
	            this.state = 422;
	            this.match(alloyParser.T__66);
	        }

	        this.state = 430;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,55,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 425;
	                this.name();
	                this.state = 426;
	                this.match(alloyParser.T__67); 
	            }
	            this.state = 432;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,55,this._ctx);
	        }

	        this.state = 433;
	        this.name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 54, alloyParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 435;
	        this.match(alloyParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 56, alloyParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 438; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 437;
	        		this.match(alloyParser.DIGIT);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 440; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,56, this._ctx);
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


}

alloyParser.EOF = antlr4.Token.EOF;
alloyParser.T__0 = 1;
alloyParser.T__1 = 2;
alloyParser.T__2 = 3;
alloyParser.T__3 = 4;
alloyParser.T__4 = 5;
alloyParser.T__5 = 6;
alloyParser.T__6 = 7;
alloyParser.T__7 = 8;
alloyParser.T__8 = 9;
alloyParser.T__9 = 10;
alloyParser.T__10 = 11;
alloyParser.T__11 = 12;
alloyParser.T__12 = 13;
alloyParser.T__13 = 14;
alloyParser.T__14 = 15;
alloyParser.T__15 = 16;
alloyParser.T__16 = 17;
alloyParser.T__17 = 18;
alloyParser.T__18 = 19;
alloyParser.T__19 = 20;
alloyParser.T__20 = 21;
alloyParser.T__21 = 22;
alloyParser.T__22 = 23;
alloyParser.T__23 = 24;
alloyParser.T__24 = 25;
alloyParser.T__25 = 26;
alloyParser.T__26 = 27;
alloyParser.T__27 = 28;
alloyParser.T__28 = 29;
alloyParser.T__29 = 30;
alloyParser.T__30 = 31;
alloyParser.T__31 = 32;
alloyParser.T__32 = 33;
alloyParser.T__33 = 34;
alloyParser.T__34 = 35;
alloyParser.T__35 = 36;
alloyParser.T__36 = 37;
alloyParser.T__37 = 38;
alloyParser.T__38 = 39;
alloyParser.T__39 = 40;
alloyParser.T__40 = 41;
alloyParser.T__41 = 42;
alloyParser.T__42 = 43;
alloyParser.T__43 = 44;
alloyParser.T__44 = 45;
alloyParser.T__45 = 46;
alloyParser.T__46 = 47;
alloyParser.T__47 = 48;
alloyParser.T__48 = 49;
alloyParser.T__49 = 50;
alloyParser.T__50 = 51;
alloyParser.T__51 = 52;
alloyParser.T__52 = 53;
alloyParser.T__53 = 54;
alloyParser.T__54 = 55;
alloyParser.T__55 = 56;
alloyParser.T__56 = 57;
alloyParser.T__57 = 58;
alloyParser.T__58 = 59;
alloyParser.T__59 = 60;
alloyParser.T__60 = 61;
alloyParser.T__61 = 62;
alloyParser.T__62 = 63;
alloyParser.T__63 = 64;
alloyParser.T__64 = 65;
alloyParser.T__65 = 66;
alloyParser.T__66 = 67;
alloyParser.T__67 = 68;
alloyParser.BAR = 69;
alloyParser.DIGIT = 70;
alloyParser.IDENTIFIER = 71;
alloyParser.COMMENT = 72;
alloyParser.WS = 73;

alloyParser.RULE_alloyModule = 0;
alloyParser.RULE_moduleDecl = 1;
alloyParser.RULE_import_ = 2;
alloyParser.RULE_paragraph = 3;
alloyParser.RULE_sigDecl = 4;
alloyParser.RULE_sigExt = 5;
alloyParser.RULE_mult = 6;
alloyParser.RULE_decl = 7;
alloyParser.RULE_factDecl = 8;
alloyParser.RULE_predDecl = 9;
alloyParser.RULE_funDecl = 10;
alloyParser.RULE_paraDecls = 11;
alloyParser.RULE_assertDecl = 12;
alloyParser.RULE_cmdDecl = 13;
alloyParser.RULE_scope = 14;
alloyParser.RULE_typescope = 15;
alloyParser.RULE_expr = 16;
alloyParser.RULE_const_ = 17;
alloyParser.RULE_unOp = 18;
alloyParser.RULE_binOp = 19;
alloyParser.RULE_arrowOp = 20;
alloyParser.RULE_compareOp = 21;
alloyParser.RULE_letDecl = 22;
alloyParser.RULE_block = 23;
alloyParser.RULE_blockOrBar = 24;
alloyParser.RULE_quant = 25;
alloyParser.RULE_qualName = 26;
alloyParser.RULE_name = 27;
alloyParser.RULE_number = 28;

class AlloyModuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_alloyModule;
    }

	moduleDecl() {
	    return this.getTypedRuleContext(ModuleDeclContext,0);
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

	paragraph = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParagraphContext);
	    } else {
	        return this.getTypedRuleContext(ParagraphContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterAlloyModule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitAlloyModule(this);
		}
	}


}



class ModuleDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_moduleDecl;
    }

	qualName() {
	    return this.getTypedRuleContext(QualNameContext,0);
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

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterModuleDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitModuleDecl(this);
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
        this.ruleIndex = alloyParser.RULE_import_;
    }

	qualName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(QualNameContext);
	    } else {
	        return this.getTypedRuleContext(QualNameContext,i);
	    }
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterImport_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitImport_(this);
		}
	}


}



class ParagraphContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_paragraph;
    }

	sigDecl() {
	    return this.getTypedRuleContext(SigDeclContext,0);
	};

	factDecl() {
	    return this.getTypedRuleContext(FactDeclContext,0);
	};

	predDecl() {
	    return this.getTypedRuleContext(PredDeclContext,0);
	};

	funDecl() {
	    return this.getTypedRuleContext(FunDeclContext,0);
	};

	assertDecl() {
	    return this.getTypedRuleContext(AssertDeclContext,0);
	};

	cmdDecl() {
	    return this.getTypedRuleContext(CmdDeclContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterParagraph(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitParagraph(this);
		}
	}


}



class SigDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_sigDecl;
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

	mult() {
	    return this.getTypedRuleContext(MultContext,0);
	};

	sigExt() {
	    return this.getTypedRuleContext(SigExtContext,0);
	};

	decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclContext);
	    } else {
	        return this.getTypedRuleContext(DeclContext,i);
	    }
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterSigDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitSigDecl(this);
		}
	}


}



class SigExtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_sigExt;
    }

	qualName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(QualNameContext);
	    } else {
	        return this.getTypedRuleContext(QualNameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterSigExt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitSigExt(this);
		}
	}


}



class MultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_mult;
    }


	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterMult(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitMult(this);
		}
	}


}



class DeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_decl;
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

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitDecl(this);
		}
	}


}



class FactDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_factDecl;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterFactDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitFactDecl(this);
		}
	}


}



class PredDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_predDecl;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	qualName() {
	    return this.getTypedRuleContext(QualNameContext,0);
	};

	paraDecls() {
	    return this.getTypedRuleContext(ParaDeclsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterPredDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitPredDecl(this);
		}
	}


}



class FunDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_funDecl;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
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

	qualName() {
	    return this.getTypedRuleContext(QualNameContext,0);
	};

	paraDecls() {
	    return this.getTypedRuleContext(ParaDeclsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterFunDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitFunDecl(this);
		}
	}


}



class ParaDeclsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_paraDecls;
    }

	decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclContext);
	    } else {
	        return this.getTypedRuleContext(DeclContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterParaDecls(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitParaDecls(this);
		}
	}


}



class AssertDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_assertDecl;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterAssertDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitAssertDecl(this);
		}
	}


}



class CmdDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_cmdDecl;
    }

	qualName() {
	    return this.getTypedRuleContext(QualNameContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	scope() {
	    return this.getTypedRuleContext(ScopeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterCmdDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitCmdDecl(this);
		}
	}


}



class ScopeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_scope;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	typescope = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypescopeContext);
	    } else {
	        return this.getTypedRuleContext(TypescopeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterScope(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitScope(this);
		}
	}


}



class TypescopeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_typescope;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	qualName() {
	    return this.getTypedRuleContext(QualNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterTypescope(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitTypescope(this);
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
        this.ruleIndex = alloyParser.RULE_expr;
    }

	const_() {
	    return this.getTypedRuleContext(Const_Context,0);
	};

	qualName() {
	    return this.getTypedRuleContext(QualNameContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	unOp() {
	    return this.getTypedRuleContext(UnOpContext,0);
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

	letDecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LetDeclContext);
	    } else {
	        return this.getTypedRuleContext(LetDeclContext,i);
	    }
	};

	blockOrBar() {
	    return this.getTypedRuleContext(BlockOrBarContext,0);
	};

	quant() {
	    return this.getTypedRuleContext(QuantContext,0);
	};

	decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclContext);
	    } else {
	        return this.getTypedRuleContext(DeclContext,i);
	    }
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	binOp() {
	    return this.getTypedRuleContext(BinOpContext,0);
	};

	arrowOp() {
	    return this.getTypedRuleContext(ArrowOpContext,0);
	};

	compareOp() {
	    return this.getTypedRuleContext(CompareOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitExpr(this);
		}
	}


}



class Const_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_const_;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterConst_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitConst_(this);
		}
	}


}



class UnOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_unOp;
    }

	mult() {
	    return this.getTypedRuleContext(MultContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterUnOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitUnOp(this);
		}
	}


}



class BinOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_binOp;
    }


	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterBinOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitBinOp(this);
		}
	}


}



class ArrowOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_arrowOp;
    }

	mult = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultContext);
	    } else {
	        return this.getTypedRuleContext(MultContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterArrowOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitArrowOp(this);
		}
	}


}



class CompareOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_compareOp;
    }


	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterCompareOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitCompareOp(this);
		}
	}


}



class LetDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_letDecl;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterLetDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitLetDecl(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_block;
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
	    if(listener instanceof alloyListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitBlock(this);
		}
	}


}



class BlockOrBarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_blockOrBar;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	BAR() {
	    return this.getToken(alloyParser.BAR, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterBlockOrBar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitBlockOrBar(this);
		}
	}


}



class QuantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_quant;
    }

	mult() {
	    return this.getTypedRuleContext(MultContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterQuant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitQuant(this);
		}
	}


}



class QualNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = alloyParser.RULE_qualName;
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

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterQualName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitQualName(this);
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
        this.ruleIndex = alloyParser.RULE_name;
    }

	IDENTIFIER() {
	    return this.getToken(alloyParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitName(this);
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
        this.ruleIndex = alloyParser.RULE_number;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(alloyParser.DIGIT);
	    } else {
	        return this.getToken(alloyParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof alloyListener ) {
	        listener.exitNumber(this);
		}
	}


}




alloyParser.AlloyModuleContext = AlloyModuleContext; 
alloyParser.ModuleDeclContext = ModuleDeclContext; 
alloyParser.Import_Context = Import_Context; 
alloyParser.ParagraphContext = ParagraphContext; 
alloyParser.SigDeclContext = SigDeclContext; 
alloyParser.SigExtContext = SigExtContext; 
alloyParser.MultContext = MultContext; 
alloyParser.DeclContext = DeclContext; 
alloyParser.FactDeclContext = FactDeclContext; 
alloyParser.PredDeclContext = PredDeclContext; 
alloyParser.FunDeclContext = FunDeclContext; 
alloyParser.ParaDeclsContext = ParaDeclsContext; 
alloyParser.AssertDeclContext = AssertDeclContext; 
alloyParser.CmdDeclContext = CmdDeclContext; 
alloyParser.ScopeContext = ScopeContext; 
alloyParser.TypescopeContext = TypescopeContext; 
alloyParser.ExprContext = ExprContext; 
alloyParser.Const_Context = Const_Context; 
alloyParser.UnOpContext = UnOpContext; 
alloyParser.BinOpContext = BinOpContext; 
alloyParser.ArrowOpContext = ArrowOpContext; 
alloyParser.CompareOpContext = CompareOpContext; 
alloyParser.LetDeclContext = LetDeclContext; 
alloyParser.BlockContext = BlockContext; 
alloyParser.BlockOrBarContext = BlockOrBarContext; 
alloyParser.QuantContext = QuantContext; 
alloyParser.QualNameContext = QualNameContext; 
alloyParser.NameContext = NameContext; 
alloyParser.NumberContext = NumberContext; 
