// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/alloy/alloy.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import alloyListener from './alloyListener.js';
const serializedATN = [4,1,73,445,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,1,0,3,0,60,8,0,1,0,5,0,63,8,0,10,0,12,0,66,9,0,1,0,4,0,69,
8,0,11,0,12,0,70,1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,80,8,1,10,1,12,1,83,9,1,
1,2,1,2,1,2,1,2,5,2,89,8,2,10,2,12,2,92,9,2,1,2,1,2,3,2,96,8,2,1,3,1,3,1,
3,1,3,1,3,1,3,3,3,104,8,3,1,4,3,4,107,8,4,1,4,3,4,110,8,4,1,4,1,4,1,4,1,
4,5,4,116,8,4,10,4,12,4,119,9,4,1,4,3,4,122,8,4,1,4,1,4,1,4,1,4,5,4,128,
8,4,10,4,12,4,131,9,4,3,4,133,8,4,1,4,1,4,3,4,137,8,4,1,5,1,5,1,5,1,5,1,
5,1,5,5,5,145,8,5,10,5,12,5,148,9,5,3,5,150,8,5,1,6,1,6,1,7,3,7,155,8,7,
1,7,1,7,1,7,5,7,160,8,7,10,7,12,7,163,9,7,1,7,1,7,3,7,167,8,7,1,7,1,7,1,
8,1,8,3,8,173,8,8,1,8,1,8,1,9,1,9,1,9,1,9,3,9,181,8,9,1,9,1,9,3,9,185,8,
9,1,9,1,9,1,10,1,10,1,10,1,10,3,10,193,8,10,1,10,1,10,3,10,197,8,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,5,11,209,8,11,10,11,12,11,212,
9,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,220,8,11,10,11,12,11,223,9,11,1,
11,1,11,3,11,227,8,11,1,12,1,12,3,12,231,8,12,1,12,1,12,1,13,1,13,1,13,3,
13,238,8,13,1,13,3,13,241,8,13,1,13,1,13,3,13,245,8,13,1,13,3,13,248,8,13,
1,14,1,14,1,14,1,14,1,14,1,14,5,14,256,8,14,10,14,12,14,259,9,14,3,14,261,
8,14,1,14,1,14,1,14,1,14,5,14,267,8,14,10,14,12,14,270,9,14,3,14,272,8,14,
1,15,3,15,275,8,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,5,16,293,8,16,10,16,12,16,296,9,16,1,16,1,16,1,
16,1,16,1,16,1,16,5,16,304,8,16,10,16,12,16,307,9,16,1,16,1,16,1,16,1,16,
1,16,1,16,5,16,315,8,16,10,16,12,16,318,9,16,1,16,1,16,1,16,1,16,1,16,1,
16,1,16,1,16,3,16,328,8,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
1,16,3,16,340,8,16,1,16,1,16,1,16,1,16,1,16,3,16,347,8,16,1,16,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,4,16,357,8,16,11,16,12,16,358,1,16,1,16,5,16,363,
8,16,10,16,12,16,366,9,16,1,17,3,17,369,8,17,1,17,1,17,1,17,1,17,3,17,375,
8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,386,8,18,1,19,1,19,
1,20,1,20,3,20,392,8,20,1,20,1,20,1,20,3,20,397,8,20,1,21,1,21,1,22,1,22,
1,22,1,22,1,23,1,23,5,23,407,8,23,10,23,12,23,410,9,23,1,23,1,23,1,24,1,
24,1,24,3,24,417,8,24,1,25,1,25,1,25,1,25,3,25,423,8,25,1,26,3,26,426,8,
26,1,26,1,26,1,26,5,26,431,8,26,10,26,12,26,434,9,26,1,26,1,26,1,27,1,27,
1,28,4,28,441,8,28,11,28,12,28,442,1,28,0,1,32,29,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,0,6,1,0,12,14,
1,0,26,27,1,0,33,34,1,0,35,36,5,0,11,11,19,19,35,36,39,39,49,58,2,0,10,10,
60,64,500,0,59,1,0,0,0,2,74,1,0,0,0,4,84,1,0,0,0,6,103,1,0,0,0,8,106,1,0,
0,0,10,149,1,0,0,0,12,151,1,0,0,0,14,154,1,0,0,0,16,170,1,0,0,0,18,176,1,
0,0,0,20,188,1,0,0,0,22,226,1,0,0,0,24,228,1,0,0,0,26,237,1,0,0,0,28,271,
1,0,0,0,30,274,1,0,0,0,32,327,1,0,0,0,34,374,1,0,0,0,36,385,1,0,0,0,38,387,
1,0,0,0,40,391,1,0,0,0,42,398,1,0,0,0,44,400,1,0,0,0,46,404,1,0,0,0,48,416,
1,0,0,0,50,422,1,0,0,0,52,425,1,0,0,0,54,437,1,0,0,0,56,440,1,0,0,0,58,60,
3,2,1,0,59,58,1,0,0,0,59,60,1,0,0,0,60,64,1,0,0,0,61,63,3,4,2,0,62,61,1,
0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,68,1,0,0,0,66,64,1,0,
0,0,67,69,3,6,3,0,68,67,1,0,0,0,69,70,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,
0,71,72,1,0,0,0,72,73,5,0,0,1,73,1,1,0,0,0,74,75,5,1,0,0,75,76,3,52,26,0,
76,81,3,54,27,0,77,78,5,2,0,0,78,80,3,54,27,0,79,77,1,0,0,0,80,83,1,0,0,
0,81,79,1,0,0,0,81,82,1,0,0,0,82,3,1,0,0,0,83,81,1,0,0,0,84,85,5,3,0,0,85,
90,3,52,26,0,86,87,5,2,0,0,87,89,3,52,26,0,88,86,1,0,0,0,89,92,1,0,0,0,90,
88,1,0,0,0,90,91,1,0,0,0,91,95,1,0,0,0,92,90,1,0,0,0,93,94,5,4,0,0,94,96,
3,54,27,0,95,93,1,0,0,0,95,96,1,0,0,0,96,5,1,0,0,0,97,104,3,8,4,0,98,104,
3,16,8,0,99,104,3,18,9,0,100,104,3,20,10,0,101,104,3,24,12,0,102,104,3,26,
13,0,103,97,1,0,0,0,103,98,1,0,0,0,103,99,1,0,0,0,103,100,1,0,0,0,103,101,
1,0,0,0,103,102,1,0,0,0,104,7,1,0,0,0,105,107,5,5,0,0,106,105,1,0,0,0,106,
107,1,0,0,0,107,109,1,0,0,0,108,110,3,12,6,0,109,108,1,0,0,0,109,110,1,0,
0,0,110,111,1,0,0,0,111,112,5,6,0,0,112,117,3,54,27,0,113,114,5,2,0,0,114,
116,3,54,27,0,115,113,1,0,0,0,116,119,1,0,0,0,117,115,1,0,0,0,117,118,1,
0,0,0,118,121,1,0,0,0,119,117,1,0,0,0,120,122,3,10,5,0,121,120,1,0,0,0,121,
122,1,0,0,0,122,123,1,0,0,0,123,132,5,7,0,0,124,129,3,14,7,0,125,126,5,2,
0,0,126,128,3,14,7,0,127,125,1,0,0,0,128,131,1,0,0,0,129,127,1,0,0,0,129,
130,1,0,0,0,130,133,1,0,0,0,131,129,1,0,0,0,132,124,1,0,0,0,132,133,1,0,
0,0,133,134,1,0,0,0,134,136,5,8,0,0,135,137,3,46,23,0,136,135,1,0,0,0,136,
137,1,0,0,0,137,9,1,0,0,0,138,139,5,9,0,0,139,150,3,52,26,0,140,141,5,10,
0,0,141,146,3,52,26,0,142,143,5,11,0,0,143,145,3,52,26,0,144,142,1,0,0,0,
145,148,1,0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,150,1,0,0,0,148,146,
1,0,0,0,149,138,1,0,0,0,149,140,1,0,0,0,150,11,1,0,0,0,151,152,7,0,0,0,152,
13,1,0,0,0,153,155,5,15,0,0,154,153,1,0,0,0,154,155,1,0,0,0,155,156,1,0,
0,0,156,161,3,54,27,0,157,158,5,2,0,0,158,160,3,54,27,0,159,157,1,0,0,0,
160,163,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,162,164,1,0,0,0,163,161,
1,0,0,0,164,166,5,16,0,0,165,167,5,15,0,0,166,165,1,0,0,0,166,167,1,0,0,
0,167,168,1,0,0,0,168,169,3,32,16,0,169,15,1,0,0,0,170,172,5,17,0,0,171,
173,3,54,27,0,172,171,1,0,0,0,172,173,1,0,0,0,173,174,1,0,0,0,174,175,3,
46,23,0,175,17,1,0,0,0,176,180,5,18,0,0,177,178,3,52,26,0,178,179,5,19,0,
0,179,181,1,0,0,0,180,177,1,0,0,0,180,181,1,0,0,0,181,182,1,0,0,0,182,184,
3,54,27,0,183,185,3,22,11,0,184,183,1,0,0,0,184,185,1,0,0,0,185,186,1,0,
0,0,186,187,3,46,23,0,187,19,1,0,0,0,188,192,5,20,0,0,189,190,3,52,26,0,
190,191,5,19,0,0,191,193,1,0,0,0,192,189,1,0,0,0,192,193,1,0,0,0,193,194,
1,0,0,0,194,196,3,54,27,0,195,197,3,22,11,0,196,195,1,0,0,0,196,197,1,0,
0,0,197,198,1,0,0,0,198,199,5,16,0,0,199,200,3,32,16,0,200,201,5,7,0,0,201,
202,3,32,16,0,202,203,5,8,0,0,203,21,1,0,0,0,204,205,5,21,0,0,205,210,3,
14,7,0,206,207,5,2,0,0,207,209,3,14,7,0,208,206,1,0,0,0,209,212,1,0,0,0,
210,208,1,0,0,0,210,211,1,0,0,0,211,213,1,0,0,0,212,210,1,0,0,0,213,214,
5,22,0,0,214,227,1,0,0,0,215,216,5,23,0,0,216,221,3,14,7,0,217,218,5,2,0,
0,218,220,3,14,7,0,219,217,1,0,0,0,220,223,1,0,0,0,221,219,1,0,0,0,221,222,
1,0,0,0,222,224,1,0,0,0,223,221,1,0,0,0,224,225,5,24,0,0,225,227,1,0,0,0,
226,204,1,0,0,0,226,215,1,0,0,0,227,23,1,0,0,0,228,230,5,25,0,0,229,231,
3,54,27,0,230,229,1,0,0,0,230,231,1,0,0,0,231,232,1,0,0,0,232,233,3,46,23,
0,233,25,1,0,0,0,234,235,3,54,27,0,235,236,5,16,0,0,236,238,1,0,0,0,237,
234,1,0,0,0,237,238,1,0,0,0,238,240,1,0,0,0,239,241,7,1,0,0,240,239,1,0,
0,0,240,241,1,0,0,0,241,244,1,0,0,0,242,245,3,52,26,0,243,245,3,46,23,0,
244,242,1,0,0,0,244,243,1,0,0,0,245,247,1,0,0,0,246,248,3,28,14,0,247,246,
1,0,0,0,247,248,1,0,0,0,248,27,1,0,0,0,249,250,5,28,0,0,250,260,3,56,28,
0,251,252,5,29,0,0,252,257,3,30,15,0,253,254,5,2,0,0,254,256,3,30,15,0,255,
253,1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,0,257,258,1,0,0,0,258,261,1,0,
0,0,259,257,1,0,0,0,260,251,1,0,0,0,260,261,1,0,0,0,261,272,1,0,0,0,262,
263,5,28,0,0,263,268,3,30,15,0,264,265,5,2,0,0,265,267,3,30,15,0,266,264,
1,0,0,0,267,270,1,0,0,0,268,266,1,0,0,0,268,269,1,0,0,0,269,272,1,0,0,0,
270,268,1,0,0,0,271,249,1,0,0,0,271,262,1,0,0,0,272,29,1,0,0,0,273,275,5,
30,0,0,274,273,1,0,0,0,274,275,1,0,0,0,275,276,1,0,0,0,276,277,3,56,28,0,
277,278,3,52,26,0,278,31,1,0,0,0,279,280,6,16,-1,0,280,328,3,34,17,0,281,
328,3,52,26,0,282,283,5,31,0,0,283,328,3,54,27,0,284,328,5,32,0,0,285,286,
3,36,18,0,286,287,3,32,16,11,287,328,1,0,0,0,288,289,5,38,0,0,289,294,3,
44,22,0,290,291,5,2,0,0,291,293,3,44,22,0,292,290,1,0,0,0,293,296,1,0,0,
0,294,292,1,0,0,0,294,295,1,0,0,0,295,297,1,0,0,0,296,294,1,0,0,0,297,298,
3,48,24,0,298,328,1,0,0,0,299,300,3,50,25,0,300,305,3,14,7,0,301,302,5,2,
0,0,302,304,3,14,7,0,303,301,1,0,0,0,304,307,1,0,0,0,305,303,1,0,0,0,305,
306,1,0,0,0,306,308,1,0,0,0,307,305,1,0,0,0,308,309,3,48,24,0,309,328,1,
0,0,0,310,311,5,7,0,0,311,316,3,14,7,0,312,313,5,2,0,0,313,315,3,14,7,0,
314,312,1,0,0,0,315,318,1,0,0,0,316,314,1,0,0,0,316,317,1,0,0,0,317,319,
1,0,0,0,318,316,1,0,0,0,319,320,3,48,24,0,320,321,5,8,0,0,321,328,1,0,0,
0,322,323,5,21,0,0,323,324,3,32,16,0,324,325,5,22,0,0,325,328,1,0,0,0,326,
328,3,46,23,0,327,279,1,0,0,0,327,281,1,0,0,0,327,282,1,0,0,0,327,284,1,
0,0,0,327,285,1,0,0,0,327,288,1,0,0,0,327,299,1,0,0,0,327,310,1,0,0,0,327,
322,1,0,0,0,327,326,1,0,0,0,328,364,1,0,0,0,329,330,10,10,0,0,330,331,3,
38,19,0,331,332,3,32,16,11,332,363,1,0,0,0,333,334,10,9,0,0,334,335,3,40,
20,0,335,336,3,32,16,10,336,363,1,0,0,0,337,339,10,7,0,0,338,340,7,2,0,0,
339,338,1,0,0,0,339,340,1,0,0,0,340,341,1,0,0,0,341,342,3,42,21,0,342,343,
3,32,16,8,343,363,1,0,0,0,344,346,10,6,0,0,345,347,7,3,0,0,346,345,1,0,0,
0,346,347,1,0,0,0,347,348,1,0,0,0,348,349,3,32,16,0,349,350,5,37,0,0,350,
351,3,32,16,7,351,363,1,0,0,0,352,353,10,8,0,0,353,356,5,23,0,0,354,355,
5,2,0,0,355,357,3,32,16,0,356,354,1,0,0,0,357,358,1,0,0,0,358,356,1,0,0,
0,358,359,1,0,0,0,359,360,1,0,0,0,360,361,5,24,0,0,361,363,1,0,0,0,362,329,
1,0,0,0,362,333,1,0,0,0,362,337,1,0,0,0,362,344,1,0,0,0,362,352,1,0,0,0,
363,366,1,0,0,0,364,362,1,0,0,0,364,365,1,0,0,0,365,33,1,0,0,0,366,364,1,
0,0,0,367,369,5,39,0,0,368,367,1,0,0,0,368,369,1,0,0,0,369,370,1,0,0,0,370,
375,3,56,28,0,371,375,5,40,0,0,372,375,5,41,0,0,373,375,5,42,0,0,374,368,
1,0,0,0,374,371,1,0,0,0,374,372,1,0,0,0,374,373,1,0,0,0,375,35,1,0,0,0,376,
386,5,33,0,0,377,386,5,34,0,0,378,386,5,43,0,0,379,386,3,12,6,0,380,386,
5,44,0,0,381,386,5,45,0,0,382,386,5,46,0,0,383,386,5,47,0,0,384,386,5,48,
0,0,385,376,1,0,0,0,385,377,1,0,0,0,385,378,1,0,0,0,385,379,1,0,0,0,385,
380,1,0,0,0,385,381,1,0,0,0,385,382,1,0,0,0,385,383,1,0,0,0,385,384,1,0,
0,0,386,37,1,0,0,0,387,388,7,4,0,0,388,39,1,0,0,0,389,392,3,12,6,0,390,392,
5,44,0,0,391,389,1,0,0,0,391,390,1,0,0,0,391,392,1,0,0,0,392,393,1,0,0,0,
393,396,5,59,0,0,394,397,3,12,6,0,395,397,5,44,0,0,396,394,1,0,0,0,396,395,
1,0,0,0,396,397,1,0,0,0,397,41,1,0,0,0,398,399,7,5,0,0,399,43,1,0,0,0,400,
401,3,54,27,0,401,402,5,60,0,0,402,403,3,32,16,0,403,45,1,0,0,0,404,408,
5,7,0,0,405,407,3,32,16,0,406,405,1,0,0,0,407,410,1,0,0,0,408,406,1,0,0,
0,408,409,1,0,0,0,409,411,1,0,0,0,410,408,1,0,0,0,411,412,5,8,0,0,412,47,
1,0,0,0,413,417,3,46,23,0,414,415,5,69,0,0,415,417,3,32,16,0,416,413,1,0,
0,0,416,414,1,0,0,0,417,49,1,0,0,0,418,423,5,65,0,0,419,423,5,43,0,0,420,
423,5,66,0,0,421,423,3,12,6,0,422,418,1,0,0,0,422,419,1,0,0,0,422,420,1,
0,0,0,422,421,1,0,0,0,423,51,1,0,0,0,424,426,5,67,0,0,425,424,1,0,0,0,425,
426,1,0,0,0,426,432,1,0,0,0,427,428,3,54,27,0,428,429,5,68,0,0,429,431,1,
0,0,0,430,427,1,0,0,0,431,434,1,0,0,0,432,430,1,0,0,0,432,433,1,0,0,0,433,
435,1,0,0,0,434,432,1,0,0,0,435,436,3,54,27,0,436,53,1,0,0,0,437,438,5,71,
0,0,438,55,1,0,0,0,439,441,5,70,0,0,440,439,1,0,0,0,441,442,1,0,0,0,442,
440,1,0,0,0,442,443,1,0,0,0,443,57,1,0,0,0,57,59,64,70,81,90,95,103,106,
109,117,121,129,132,136,146,149,154,161,166,172,180,184,192,196,210,221,
226,230,237,240,244,247,257,260,268,271,274,294,305,316,327,339,346,358,
362,364,368,374,385,391,396,408,416,422,425,432,442];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 58;
	            this.moduleDecl();
	        }

	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
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
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 236351712) !== 0) || _la===67 || _la===71);
	        this.state = 72;
	        this.match(alloyParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(alloyParser.T__0);
	        this.state = 75;
	        this.qualName();
	        this.state = 76;
	        this.name();
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 77;
	            this.match(alloyParser.T__1);
	            this.state = 78;
	            this.name();
	            this.state = 83;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(alloyParser.T__2);
	        this.state = 85;
	        this.qualName();
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 86;
	            this.match(alloyParser.T__1);
	            this.state = 87;
	            this.qualName();
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 93;
	            this.match(alloyParser.T__3);
	            this.state = 94;
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
	        this.state = 103;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 6:
	        case 12:
	        case 13:
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.sigDecl();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            this.factDecl();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 99;
	            this.predDecl();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 100;
	            this.funDecl();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 101;
	            this.assertDecl();
	            break;
	        case 7:
	        case 26:
	        case 27:
	        case 67:
	        case 71:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 102;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 105;
	            this.match(alloyParser.T__4);
	        }

	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0)) {
	            this.state = 108;
	            this.mult();
	        }

	        this.state = 111;
	        this.match(alloyParser.T__5);
	        this.state = 112;
	        this.name();
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 113;
	            this.match(alloyParser.T__1);
	            this.state = 114;
	            this.name();
	            this.state = 119;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9 || _la===10) {
	            this.state = 120;
	            this.sigExt();
	        }

	        this.state = 123;
	        this.match(alloyParser.T__6);
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15 || _la===71) {
	            this.state = 124;
	            this.decl();
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 125;
	                this.match(alloyParser.T__1);
	                this.state = 126;
	                this.decl();
	                this.state = 131;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 134;
	        this.match(alloyParser.T__7);
	        this.state = 136;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 135;
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
	    var _la = 0;
	    try {
	        this.state = 149;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 138;
	            this.match(alloyParser.T__8);
	            this.state = 139;
	            this.qualName();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 140;
	            this.match(alloyParser.T__9);
	            this.state = 141;
	            this.qualName();
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===11) {
	                this.state = 142;
	                this.match(alloyParser.T__10);
	                this.state = 143;
	                this.qualName();
	                this.state = 148;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 153;
	            this.match(alloyParser.T__14);
	        }

	        this.state = 156;
	        this.name();
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 157;
	            this.match(alloyParser.T__1);
	            this.state = 158;
	            this.name();
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 164;
	        this.match(alloyParser.T__15);
	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 165;
	            this.match(alloyParser.T__14);
	        }

	        this.state = 168;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.match(alloyParser.T__16);
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===71) {
	            this.state = 171;
	            this.name();
	        }

	        this.state = 174;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(alloyParser.T__17);
	        this.state = 180;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        if(la_===1) {
	            this.state = 177;
	            this.qualName();
	            this.state = 178;
	            this.match(alloyParser.T__18);

	        }
	        this.state = 182;
	        this.name();
	        this.state = 184;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21 || _la===23) {
	            this.state = 183;
	            this.paraDecls();
	        }

	        this.state = 186;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.match(alloyParser.T__19);
	        this.state = 192;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        if(la_===1) {
	            this.state = 189;
	            this.qualName();
	            this.state = 190;
	            this.match(alloyParser.T__18);

	        }
	        this.state = 194;
	        this.name();
	        this.state = 196;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21 || _la===23) {
	            this.state = 195;
	            this.paraDecls();
	        }

	        this.state = 198;
	        this.match(alloyParser.T__15);
	        this.state = 199;
	        this.expr(0);
	        this.state = 200;
	        this.match(alloyParser.T__6);
	        this.state = 201;
	        this.expr(0);
	        this.state = 202;
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
	    var _la = 0;
	    try {
	        this.state = 226;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 204;
	            this.match(alloyParser.T__20);
	            this.state = 205;
	            this.decl();
	            this.state = 210;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 206;
	                this.match(alloyParser.T__1);
	                this.state = 207;
	                this.decl();
	                this.state = 212;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 213;
	            this.match(alloyParser.T__21);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 215;
	            this.match(alloyParser.T__22);
	            this.state = 216;
	            this.decl();
	            this.state = 221;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 217;
	                this.match(alloyParser.T__1);
	                this.state = 218;
	                this.decl();
	                this.state = 223;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 224;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(alloyParser.T__24);
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===71) {
	            this.state = 229;
	            this.name();
	        }

	        this.state = 232;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        if(la_===1) {
	            this.state = 234;
	            this.name();
	            this.state = 235;
	            this.match(alloyParser.T__15);

	        }
	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26 || _la===27) {
	            this.state = 239;
	            _la = this._input.LA(1);
	            if(!(_la===26 || _la===27)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 244;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 67:
	        case 71:
	            this.state = 242;
	            this.qualName();
	            break;
	        case 7:
	            this.state = 243;
	            this.block();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 247;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 246;
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
	    var _la = 0;
	    try {
	        this.state = 271;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 249;
	            this.match(alloyParser.T__27);
	            this.state = 250;
	            this.number();
	            this.state = 260;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 251;
	                this.match(alloyParser.T__28);
	                this.state = 252;
	                this.typescope();
	                this.state = 257;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===2) {
	                    this.state = 253;
	                    this.match(alloyParser.T__1);
	                    this.state = 254;
	                    this.typescope();
	                    this.state = 259;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 262;
	            this.match(alloyParser.T__27);
	            this.state = 263;
	            this.typescope();
	            this.state = 268;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 264;
	                this.match(alloyParser.T__1);
	                this.state = 265;
	                this.typescope();
	                this.state = 270;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 273;
	            this.match(alloyParser.T__29);
	        }

	        this.state = 276;
	        this.number();
	        this.state = 277;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 327;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 280;
	            this.const_();
	            break;

	        case 2:
	            this.state = 281;
	            this.qualName();
	            break;

	        case 3:
	            this.state = 282;
	            this.match(alloyParser.T__30);
	            this.state = 283;
	            this.name();
	            break;

	        case 4:
	            this.state = 284;
	            this.match(alloyParser.T__31);
	            break;

	        case 5:
	            this.state = 285;
	            this.unOp();
	            this.state = 286;
	            this.expr(11);
	            break;

	        case 6:
	            this.state = 288;
	            this.match(alloyParser.T__37);
	            this.state = 289;
	            this.letDecl();
	            this.state = 294;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 290;
	                this.match(alloyParser.T__1);
	                this.state = 291;
	                this.letDecl();
	                this.state = 296;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 297;
	            this.blockOrBar();
	            break;

	        case 7:
	            this.state = 299;
	            this.quant();
	            this.state = 300;
	            this.decl();
	            this.state = 305;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 301;
	                this.match(alloyParser.T__1);
	                this.state = 302;
	                this.decl();
	                this.state = 307;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 308;
	            this.blockOrBar();
	            break;

	        case 8:
	            this.state = 310;
	            this.match(alloyParser.T__6);
	            this.state = 311;
	            this.decl();
	            this.state = 316;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 312;
	                this.match(alloyParser.T__1);
	                this.state = 313;
	                this.decl();
	                this.state = 318;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 319;
	            this.blockOrBar();
	            this.state = 320;
	            this.match(alloyParser.T__7);
	            break;

	        case 9:
	            this.state = 322;
	            this.match(alloyParser.T__20);
	            this.state = 323;
	            this.expr(0);
	            this.state = 324;
	            this.match(alloyParser.T__21);
	            break;

	        case 10:
	            this.state = 326;
	            this.block();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 364;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,45,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 362;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, alloyParser.RULE_expr);
	                    this.state = 329;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 330;
	                    this.binOp();
	                    this.state = 331;
	                    this.expr(11);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, alloyParser.RULE_expr);
	                    this.state = 333;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 334;
	                    this.arrowOp();
	                    this.state = 335;
	                    this.expr(10);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, alloyParser.RULE_expr);
	                    this.state = 337;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 339;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===33 || _la===34) {
	                        this.state = 338;
	                        _la = this._input.LA(1);
	                        if(!(_la===33 || _la===34)) {
	                        this._errHandler.recoverInline(this);
	                        }
	                        else {
	                        	this._errHandler.reportMatch(this);
	                            this.consume();
	                        }
	                    }

	                    this.state = 341;
	                    this.compareOp();
	                    this.state = 342;
	                    this.expr(8);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, alloyParser.RULE_expr);
	                    this.state = 344;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 346;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===35 || _la===36) {
	                        this.state = 345;
	                        _la = this._input.LA(1);
	                        if(!(_la===35 || _la===36)) {
	                        this._errHandler.recoverInline(this);
	                        }
	                        else {
	                        	this._errHandler.reportMatch(this);
	                            this.consume();
	                        }
	                    }

	                    this.state = 348;
	                    this.expr(0);
	                    this.state = 349;
	                    this.match(alloyParser.T__36);
	                    this.state = 350;
	                    this.expr(7);
	                    break;

	                case 5:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, alloyParser.RULE_expr);
	                    this.state = 352;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 353;
	                    this.match(alloyParser.T__22);
	                    this.state = 356; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 354;
	                        this.match(alloyParser.T__1);
	                        this.state = 355;
	                        this.expr(0);
	                        this.state = 358; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===2);
	                    this.state = 360;
	                    this.match(alloyParser.T__23);
	                    break;

	                } 
	            }
	            this.state = 366;
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
	    var _la = 0;
	    try {
	        this.state = 374;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 39:
	        case 70:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 368;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 367;
	                this.match(alloyParser.T__38);
	            }

	            this.state = 370;
	            this.number();
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 371;
	            this.match(alloyParser.T__39);
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 372;
	            this.match(alloyParser.T__40);
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 373;
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
	        this.state = 385;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 33:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 376;
	            this.match(alloyParser.T__32);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 377;
	            this.match(alloyParser.T__33);
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 378;
	            this.match(alloyParser.T__42);
	            break;
	        case 12:
	        case 13:
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 379;
	            this.mult();
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 380;
	            this.match(alloyParser.T__43);
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 381;
	            this.match(alloyParser.T__44);
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 382;
	            this.match(alloyParser.T__45);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 383;
	            this.match(alloyParser.T__46);
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 384;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 387;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===19 || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 16760851) !== 0))) {
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
	        this.state = 391;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 12:
	        case 13:
	        case 14:
	        	this.state = 389;
	        	this.mult();
	        	break;
	        case 44:
	        	this.state = 390;
	        	this.match(alloyParser.T__43);
	        	break;
	        case 59:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 393;
	        this.match(alloyParser.T__58);
	        this.state = 396;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	        if(la_===1) {
	            this.state = 394;
	            this.mult();

	        } else if(la_===2) {
	            this.state = 395;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 398;
	        _la = this._input.LA(1);
	        if(!(_la===10 || ((((_la - 60)) & ~0x1f) === 0 && ((1 << (_la - 60)) & 31) !== 0))) {
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
	        this.state = 400;
	        this.name();
	        this.state = 401;
	        this.match(alloyParser.T__59);
	        this.state = 402;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 404;
	        this.match(alloyParser.T__6);
	        this.state = 408;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2149609600) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 131015) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 103) !== 0)) {
	            this.state = 405;
	            this.expr(0);
	            this.state = 410;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 411;
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
	        this.state = 416;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 413;
	            this.block();
	            break;
	        case 69:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 414;
	            this.match(alloyParser.BAR);
	            this.state = 415;
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
	        this.state = 422;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 65:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 418;
	            this.match(alloyParser.T__64);
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 419;
	            this.match(alloyParser.T__42);
	            break;
	        case 66:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 420;
	            this.match(alloyParser.T__65);
	            break;
	        case 12:
	        case 13:
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 421;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 425;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===67) {
	            this.state = 424;
	            this.match(alloyParser.T__66);
	        }

	        this.state = 432;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,55,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 427;
	                this.name();
	                this.state = 428;
	                this.match(alloyParser.T__67); 
	            }
	            this.state = 434;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,55,this._ctx);
	        }

	        this.state = 435;
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
	        this.state = 437;
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
	        this.state = 440; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 439;
	        		this.match(alloyParser.DIGIT);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 442; 
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

	EOF() {
	    return this.getToken(alloyParser.EOF, 0);
	};

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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
