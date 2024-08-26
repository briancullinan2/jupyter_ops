// Generated from Resources/Parsers/protobuf3/Protobuf3.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import Protobuf3Listener from './Protobuf3Listener.js';
const serializedATN = [4,1,58,474,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,1,0,1,0,1,0,1,0,1,0,1,0,5,0,109,8,0,10,0,12,0,112,9,0,
1,1,1,1,1,1,1,1,1,1,1,2,1,2,3,2,121,8,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,
1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,142,8,5,3,5,144,8,5,1,6,
3,6,147,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,157,8,6,1,6,1,6,1,7,1,7,
1,7,5,7,164,8,7,10,7,12,7,167,9,7,1,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,
1,10,1,10,1,10,5,10,181,8,10,10,10,12,10,184,9,10,1,10,1,10,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,3,11,196,8,11,1,11,1,11,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,213,8,12,1,12,1,12,1,13,
1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,1,14,3,14,236,8,14,1,15,1,15,1,15,3,15,241,8,15,1,15,1,15,1,
16,1,16,1,16,5,16,248,8,16,10,16,12,16,251,9,16,1,17,1,17,1,17,1,17,3,17,
257,8,17,3,17,259,8,17,1,18,1,18,1,18,5,18,264,8,18,10,18,12,18,267,9,18,
1,19,1,19,1,19,3,19,272,8,19,1,20,1,20,1,20,1,20,1,21,1,21,5,21,280,8,21,
10,21,12,21,283,9,21,1,21,1,21,1,22,1,22,1,22,3,22,290,8,22,1,23,1,23,1,
23,3,23,295,8,23,1,23,1,23,3,23,299,8,23,1,23,1,23,1,24,1,24,1,24,1,24,5,
24,307,8,24,10,24,12,24,310,9,24,1,24,1,24,1,25,1,25,1,25,1,25,1,26,1,26,
1,26,1,26,1,27,1,27,5,27,324,8,27,10,27,12,27,327,9,27,1,27,1,27,1,28,1,
28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,339,8,28,1,29,1,29,1,29,1,29,5,29,
345,8,29,10,29,12,29,348,9,29,1,29,1,29,1,30,1,30,1,30,3,30,355,8,30,1,31,
1,31,1,31,1,31,3,31,361,8,31,1,31,1,31,1,31,1,31,1,31,3,31,368,8,31,1,31,
1,31,1,31,1,31,1,31,5,31,375,8,31,10,31,12,31,378,9,31,1,31,1,31,3,31,382,
8,31,1,32,1,32,3,32,386,8,32,1,32,1,32,3,32,390,8,32,1,32,1,32,1,32,1,32,
3,32,396,8,32,1,33,1,33,1,33,1,33,1,33,5,33,403,8,33,10,33,12,33,406,9,33,
1,33,1,33,1,34,1,34,1,35,1,35,3,35,414,8,35,1,36,1,36,1,36,5,36,419,8,36,
10,36,12,36,422,9,36,1,37,1,37,1,38,1,38,1,39,1,39,1,40,1,40,1,41,1,41,1,
42,1,42,1,43,1,43,1,44,3,44,439,8,44,1,44,1,44,1,44,5,44,444,8,44,10,44,
12,44,447,9,44,1,44,1,44,1,45,3,45,452,8,45,1,45,1,45,1,45,5,45,457,8,45,
10,45,12,45,460,9,45,1,45,1,45,1,46,1,46,1,47,1,47,1,48,1,48,1,49,1,49,1,
50,1,50,1,50,0,0,51,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
86,88,90,92,94,96,98,100,0,6,1,0,34,35,1,0,3,4,1,0,10,21,1,0,49,50,2,0,34,
35,51,51,2,0,1,33,52,52,497,0,102,1,0,0,0,2,113,1,0,0,0,4,118,1,0,0,0,6,
125,1,0,0,0,8,129,1,0,0,0,10,143,1,0,0,0,12,146,1,0,0,0,14,160,1,0,0,0,16,
168,1,0,0,0,18,172,1,0,0,0,20,174,1,0,0,0,22,187,1,0,0,0,24,199,1,0,0,0,
26,216,1,0,0,0,28,235,1,0,0,0,30,237,1,0,0,0,32,244,1,0,0,0,34,252,1,0,0,
0,36,260,1,0,0,0,38,271,1,0,0,0,40,273,1,0,0,0,42,277,1,0,0,0,44,289,1,0,
0,0,46,291,1,0,0,0,48,302,1,0,0,0,50,313,1,0,0,0,52,317,1,0,0,0,54,321,1,
0,0,0,56,338,1,0,0,0,58,340,1,0,0,0,60,354,1,0,0,0,62,356,1,0,0,0,64,395,
1,0,0,0,66,397,1,0,0,0,68,409,1,0,0,0,70,413,1,0,0,0,72,415,1,0,0,0,74,423,
1,0,0,0,76,425,1,0,0,0,78,427,1,0,0,0,80,429,1,0,0,0,82,431,1,0,0,0,84,433,
1,0,0,0,86,435,1,0,0,0,88,438,1,0,0,0,90,451,1,0,0,0,92,463,1,0,0,0,94,465,
1,0,0,0,96,467,1,0,0,0,98,469,1,0,0,0,100,471,1,0,0,0,102,110,3,2,1,0,103,
109,3,4,2,0,104,109,3,6,3,0,105,109,3,8,4,0,106,109,3,38,19,0,107,109,3,
68,34,0,108,103,1,0,0,0,108,104,1,0,0,0,108,105,1,0,0,0,108,106,1,0,0,0,
108,107,1,0,0,0,109,112,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,1,1,
0,0,0,112,110,1,0,0,0,113,114,5,1,0,0,114,115,5,37,0,0,115,116,7,0,0,0,116,
117,5,36,0,0,117,3,1,0,0,0,118,120,5,2,0,0,119,121,7,1,0,0,120,119,1,0,0,
0,120,121,1,0,0,0,121,122,1,0,0,0,122,123,3,94,47,0,123,124,5,36,0,0,124,
5,1,0,0,0,125,126,5,5,0,0,126,127,3,72,36,0,127,128,5,36,0,0,128,7,1,0,0,
0,129,130,5,6,0,0,130,131,3,10,5,0,131,132,5,37,0,0,132,133,3,64,32,0,133,
134,5,36,0,0,134,9,1,0,0,0,135,144,3,72,36,0,136,137,5,38,0,0,137,138,3,
72,36,0,138,141,5,39,0,0,139,140,5,46,0,0,140,142,3,72,36,0,141,139,1,0,
0,0,141,142,1,0,0,0,142,144,1,0,0,0,143,135,1,0,0,0,143,136,1,0,0,0,144,
11,1,0,0,0,145,147,5,7,0,0,146,145,1,0,0,0,146,147,1,0,0,0,147,148,1,0,0,
0,148,149,3,28,14,0,149,150,3,78,39,0,150,151,5,37,0,0,151,156,3,18,9,0,
152,153,5,40,0,0,153,154,3,14,7,0,154,155,5,41,0,0,155,157,1,0,0,0,156,152,
1,0,0,0,156,157,1,0,0,0,157,158,1,0,0,0,158,159,5,36,0,0,159,13,1,0,0,0,
160,165,3,16,8,0,161,162,5,47,0,0,162,164,3,16,8,0,163,161,1,0,0,0,164,167,
1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,15,1,0,0,0,167,165,1,0,0,0,168,
169,3,10,5,0,169,170,5,37,0,0,170,171,3,64,32,0,171,17,1,0,0,0,172,173,3,
92,46,0,173,19,1,0,0,0,174,175,5,8,0,0,175,176,3,80,40,0,176,182,5,42,0,
0,177,181,3,8,4,0,178,181,3,22,11,0,179,181,3,68,34,0,180,177,1,0,0,0,180,
178,1,0,0,0,180,179,1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,0,182,183,1,0,
0,0,183,185,1,0,0,0,184,182,1,0,0,0,185,186,5,43,0,0,186,21,1,0,0,0,187,
188,3,28,14,0,188,189,3,78,39,0,189,190,5,37,0,0,190,195,3,18,9,0,191,192,
5,40,0,0,192,193,3,14,7,0,193,194,5,41,0,0,194,196,1,0,0,0,195,191,1,0,0,
0,195,196,1,0,0,0,196,197,1,0,0,0,197,198,5,36,0,0,198,23,1,0,0,0,199,200,
5,9,0,0,200,201,5,44,0,0,201,202,3,26,13,0,202,203,5,47,0,0,203,204,3,28,
14,0,204,205,5,45,0,0,205,206,3,82,41,0,206,207,5,37,0,0,207,212,3,18,9,
0,208,209,5,40,0,0,209,210,3,14,7,0,210,211,5,41,0,0,211,213,1,0,0,0,212,
208,1,0,0,0,212,213,1,0,0,0,213,214,1,0,0,0,214,215,5,36,0,0,215,25,1,0,
0,0,216,217,7,2,0,0,217,27,1,0,0,0,218,236,5,22,0,0,219,236,5,23,0,0,220,
236,5,10,0,0,221,236,5,11,0,0,222,236,5,12,0,0,223,236,5,13,0,0,224,236,
5,14,0,0,225,236,5,15,0,0,226,236,5,16,0,0,227,236,5,17,0,0,228,236,5,18,
0,0,229,236,5,19,0,0,230,236,5,20,0,0,231,236,5,21,0,0,232,236,5,24,0,0,
233,236,3,88,44,0,234,236,3,90,45,0,235,218,1,0,0,0,235,219,1,0,0,0,235,
220,1,0,0,0,235,221,1,0,0,0,235,222,1,0,0,0,235,223,1,0,0,0,235,224,1,0,
0,0,235,225,1,0,0,0,235,226,1,0,0,0,235,227,1,0,0,0,235,228,1,0,0,0,235,
229,1,0,0,0,235,230,1,0,0,0,235,231,1,0,0,0,235,232,1,0,0,0,235,233,1,0,
0,0,235,234,1,0,0,0,236,29,1,0,0,0,237,240,5,25,0,0,238,241,3,32,16,0,239,
241,3,36,18,0,240,238,1,0,0,0,240,239,1,0,0,0,241,242,1,0,0,0,242,243,5,
36,0,0,243,31,1,0,0,0,244,249,3,34,17,0,245,246,5,47,0,0,246,248,3,34,17,
0,247,245,1,0,0,0,248,251,1,0,0,0,249,247,1,0,0,0,249,250,1,0,0,0,250,33,
1,0,0,0,251,249,1,0,0,0,252,258,3,92,46,0,253,256,5,26,0,0,254,257,3,92,
46,0,255,257,5,27,0,0,256,254,1,0,0,0,256,255,1,0,0,0,257,259,1,0,0,0,258,
253,1,0,0,0,258,259,1,0,0,0,259,35,1,0,0,0,260,265,3,94,47,0,261,262,5,47,
0,0,262,264,3,94,47,0,263,261,1,0,0,0,264,267,1,0,0,0,265,263,1,0,0,0,265,
266,1,0,0,0,266,37,1,0,0,0,267,265,1,0,0,0,268,272,3,52,26,0,269,272,3,40,
20,0,270,272,3,58,29,0,271,268,1,0,0,0,271,269,1,0,0,0,271,270,1,0,0,0,272,
39,1,0,0,0,273,274,5,28,0,0,274,275,3,76,38,0,275,276,3,42,21,0,276,41,1,
0,0,0,277,281,5,42,0,0,278,280,3,44,22,0,279,278,1,0,0,0,280,283,1,0,0,0,
281,279,1,0,0,0,281,282,1,0,0,0,282,284,1,0,0,0,283,281,1,0,0,0,284,285,
5,43,0,0,285,43,1,0,0,0,286,290,3,8,4,0,287,290,3,46,23,0,288,290,3,68,34,
0,289,286,1,0,0,0,289,287,1,0,0,0,289,288,1,0,0,0,290,45,1,0,0,0,291,292,
3,70,35,0,292,294,5,37,0,0,293,295,5,50,0,0,294,293,1,0,0,0,294,295,1,0,
0,0,295,296,1,0,0,0,296,298,3,92,46,0,297,299,3,48,24,0,298,297,1,0,0,0,
298,299,1,0,0,0,299,300,1,0,0,0,300,301,5,36,0,0,301,47,1,0,0,0,302,303,
5,40,0,0,303,308,3,50,25,0,304,305,5,47,0,0,305,307,3,50,25,0,306,304,1,
0,0,0,307,310,1,0,0,0,308,306,1,0,0,0,308,309,1,0,0,0,309,311,1,0,0,0,310,
308,1,0,0,0,311,312,5,41,0,0,312,49,1,0,0,0,313,314,3,10,5,0,314,315,5,37,
0,0,315,316,3,64,32,0,316,51,1,0,0,0,317,318,5,29,0,0,318,319,3,74,37,0,
319,320,3,54,27,0,320,53,1,0,0,0,321,325,5,42,0,0,322,324,3,56,28,0,323,
322,1,0,0,0,324,327,1,0,0,0,325,323,1,0,0,0,325,326,1,0,0,0,326,328,1,0,
0,0,327,325,1,0,0,0,328,329,5,43,0,0,329,55,1,0,0,0,330,339,3,12,6,0,331,
339,3,40,20,0,332,339,3,52,26,0,333,339,3,8,4,0,334,339,3,20,10,0,335,339,
3,24,12,0,336,339,3,30,15,0,337,339,3,68,34,0,338,330,1,0,0,0,338,331,1,
0,0,0,338,332,1,0,0,0,338,333,1,0,0,0,338,334,1,0,0,0,338,335,1,0,0,0,338,
336,1,0,0,0,338,337,1,0,0,0,339,57,1,0,0,0,340,341,5,30,0,0,341,342,3,84,
42,0,342,346,5,42,0,0,343,345,3,60,30,0,344,343,1,0,0,0,345,348,1,0,0,0,
346,344,1,0,0,0,346,347,1,0,0,0,347,349,1,0,0,0,348,346,1,0,0,0,349,350,
5,43,0,0,350,59,1,0,0,0,351,355,3,8,4,0,352,355,3,62,31,0,353,355,3,68,34,
0,354,351,1,0,0,0,354,352,1,0,0,0,354,353,1,0,0,0,355,61,1,0,0,0,356,357,
5,31,0,0,357,358,3,86,43,0,358,360,5,38,0,0,359,361,5,32,0,0,360,359,1,0,
0,0,360,361,1,0,0,0,361,362,1,0,0,0,362,363,3,88,44,0,363,364,5,39,0,0,364,
365,5,33,0,0,365,367,5,38,0,0,366,368,5,32,0,0,367,366,1,0,0,0,367,368,1,
0,0,0,368,369,1,0,0,0,369,370,3,88,44,0,370,381,5,39,0,0,371,376,5,42,0,
0,372,375,3,8,4,0,373,375,3,68,34,0,374,372,1,0,0,0,374,373,1,0,0,0,375,
378,1,0,0,0,376,374,1,0,0,0,376,377,1,0,0,0,377,379,1,0,0,0,378,376,1,0,
0,0,379,382,5,43,0,0,380,382,5,36,0,0,381,371,1,0,0,0,381,380,1,0,0,0,382,
63,1,0,0,0,383,396,3,72,36,0,384,386,7,3,0,0,385,384,1,0,0,0,385,386,1,0,
0,0,386,387,1,0,0,0,387,396,3,92,46,0,388,390,7,3,0,0,389,388,1,0,0,0,389,
390,1,0,0,0,390,391,1,0,0,0,391,396,3,98,49,0,392,396,3,94,47,0,393,396,
3,96,48,0,394,396,3,66,33,0,395,383,1,0,0,0,395,385,1,0,0,0,395,389,1,0,
0,0,395,392,1,0,0,0,395,393,1,0,0,0,395,394,1,0,0,0,396,65,1,0,0,0,397,404,
5,42,0,0,398,399,3,70,35,0,399,400,5,48,0,0,400,401,3,64,32,0,401,403,1,
0,0,0,402,398,1,0,0,0,403,406,1,0,0,0,404,402,1,0,0,0,404,405,1,0,0,0,405,
407,1,0,0,0,406,404,1,0,0,0,407,408,5,43,0,0,408,67,1,0,0,0,409,410,5,36,
0,0,410,69,1,0,0,0,411,414,5,55,0,0,412,414,3,100,50,0,413,411,1,0,0,0,413,
412,1,0,0,0,414,71,1,0,0,0,415,420,3,70,35,0,416,417,5,46,0,0,417,419,3,
70,35,0,418,416,1,0,0,0,419,422,1,0,0,0,420,418,1,0,0,0,420,421,1,0,0,0,
421,73,1,0,0,0,422,420,1,0,0,0,423,424,3,70,35,0,424,75,1,0,0,0,425,426,
3,70,35,0,426,77,1,0,0,0,427,428,3,70,35,0,428,79,1,0,0,0,429,430,3,70,35,
0,430,81,1,0,0,0,431,432,3,70,35,0,432,83,1,0,0,0,433,434,3,70,35,0,434,
85,1,0,0,0,435,436,3,70,35,0,436,87,1,0,0,0,437,439,5,46,0,0,438,437,1,0,
0,0,438,439,1,0,0,0,439,445,1,0,0,0,440,441,3,70,35,0,441,442,5,46,0,0,442,
444,1,0,0,0,443,440,1,0,0,0,444,447,1,0,0,0,445,443,1,0,0,0,445,446,1,0,
0,0,446,448,1,0,0,0,447,445,1,0,0,0,448,449,3,74,37,0,449,89,1,0,0,0,450,
452,5,46,0,0,451,450,1,0,0,0,451,452,1,0,0,0,452,458,1,0,0,0,453,454,3,70,
35,0,454,455,5,46,0,0,455,457,1,0,0,0,456,453,1,0,0,0,457,460,1,0,0,0,458,
456,1,0,0,0,458,459,1,0,0,0,459,461,1,0,0,0,460,458,1,0,0,0,461,462,3,76,
38,0,462,91,1,0,0,0,463,464,5,54,0,0,464,93,1,0,0,0,465,466,7,4,0,0,466,
95,1,0,0,0,467,468,5,52,0,0,468,97,1,0,0,0,469,470,5,53,0,0,470,99,1,0,0,
0,471,472,7,5,0,0,472,101,1,0,0,0,43,108,110,120,141,143,146,156,165,180,
182,195,212,235,240,249,256,258,265,271,281,289,294,298,308,325,338,346,
354,360,367,374,376,381,385,389,395,404,413,420,438,445,451,458];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class Protobuf3Parser extends antlr4.Parser {

    static grammarFileName = "Protobuf3.g4";
    static literalNames = [ null, "'syntax'", "'import'", "'weak'", "'public'", 
                            "'package'", "'option'", "'repeated'", "'oneof'", 
                            "'map'", "'int32'", "'int64'", "'uint32'", "'uint64'", 
                            "'sint32'", "'sint64'", "'fixed32'", "'fixed64'", 
                            "'sfixed32'", "'sfixed64'", "'bool'", "'string'", 
                            "'double'", "'float'", "'bytes'", "'reserved'", 
                            "'to'", "'max'", "'enum'", "'message'", "'service'", 
                            "'rpc'", "'stream'", "'returns'", "'\"proto3\"'", 
                            "''proto3''", "';'", "'='", "'('", "')'", "'['", 
                            "']'", "'{'", "'}'", "'<'", "'>'", "'.'", "','", 
                            "':'", "'+'", "'-'" ];
    static symbolicNames = [ null, "SYNTAX", "IMPORT", "WEAK", "PUBLIC", 
                             "PACKAGE", "OPTION", "REPEATED", "ONEOF", "MAP", 
                             "INT32", "INT64", "UINT32", "UINT64", "SINT32", 
                             "SINT64", "FIXED32", "FIXED64", "SFIXED32", 
                             "SFIXED64", "BOOL", "STRING", "DOUBLE", "FLOAT", 
                             "BYTES", "RESERVED", "TO", "MAX", "ENUM", "MESSAGE", 
                             "SERVICE", "RPC", "STREAM", "RETURNS", "PROTO3_LIT_SINGLE", 
                             "PROTO3_LIT_DOBULE", "SEMI", "EQ", "LP", "RP", 
                             "LB", "RB", "LC", "RC", "LT", "GT", "DOT", 
                             "COMMA", "COLON", "PLUS", "MINUS", "STR_LIT", 
                             "BOOL_LIT", "FLOAT_LIT", "INT_LIT", "IDENTIFIER", 
                             "WS", "LINE_COMMENT", "COMMENT" ];
    static ruleNames = [ "proto", "syntax", "importStatement", "packageStatement", 
                         "optionStatement", "optionName", "field", "fieldOptions", 
                         "fieldOption", "fieldNumber", "oneof", "oneofField", 
                         "mapField", "keyType", "type_", "reserved", "ranges", 
                         "range_", "reservedFieldNames", "topLevelDef", 
                         "enumDef", "enumBody", "enumElement", "enumField", 
                         "enumValueOptions", "enumValueOption", "messageDef", 
                         "messageBody", "messageElement", "serviceDef", 
                         "serviceElement", "rpc", "constant", "blockLit", 
                         "emptyStatement_", "ident", "fullIdent", "messageName", 
                         "enumName", "fieldName", "oneofName", "mapName", 
                         "serviceName", "rpcName", "messageType", "enumType", 
                         "intLit", "strLit", "boolLit", "floatLit", "keywords" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Protobuf3Parser.ruleNames;
        this.literalNames = Protobuf3Parser.literalNames;
        this.symbolicNames = Protobuf3Parser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	proto() {
	    let localctx = new ProtoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Protobuf3Parser.RULE_proto);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.syntax();
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE))) !== 0) || _la===Protobuf3Parser.SEMI) {
	            this.state = 108;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case Protobuf3Parser.IMPORT:
	                this.state = 103;
	                this.importStatement();
	                break;
	            case Protobuf3Parser.PACKAGE:
	                this.state = 104;
	                this.packageStatement();
	                break;
	            case Protobuf3Parser.OPTION:
	                this.state = 105;
	                this.optionStatement();
	                break;
	            case Protobuf3Parser.ENUM:
	            case Protobuf3Parser.MESSAGE:
	            case Protobuf3Parser.SERVICE:
	                this.state = 106;
	                this.topLevelDef();
	                break;
	            case Protobuf3Parser.SEMI:
	                this.state = 107;
	                this.emptyStatement_();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 112;
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



	syntax() {
	    let localctx = new SyntaxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Protobuf3Parser.RULE_syntax);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(Protobuf3Parser.SYNTAX);
	        this.state = 114;
	        this.match(Protobuf3Parser.EQ);
	        this.state = 115;
	        _la = this._input.LA(1);
	        if(!(_la===Protobuf3Parser.PROTO3_LIT_SINGLE || _la===Protobuf3Parser.PROTO3_LIT_DOBULE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 116;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importStatement() {
	    let localctx = new ImportStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Protobuf3Parser.RULE_importStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(Protobuf3Parser.IMPORT);
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Protobuf3Parser.WEAK || _la===Protobuf3Parser.PUBLIC) {
	            this.state = 119;
	            _la = this._input.LA(1);
	            if(!(_la===Protobuf3Parser.WEAK || _la===Protobuf3Parser.PUBLIC)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 122;
	        this.strLit();
	        this.state = 123;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	packageStatement() {
	    let localctx = new PackageStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Protobuf3Parser.RULE_packageStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(Protobuf3Parser.PACKAGE);
	        this.state = 126;
	        this.fullIdent();
	        this.state = 127;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optionStatement() {
	    let localctx = new OptionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Protobuf3Parser.RULE_optionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(Protobuf3Parser.OPTION);
	        this.state = 130;
	        this.optionName();
	        this.state = 131;
	        this.match(Protobuf3Parser.EQ);
	        this.state = 132;
	        this.constant();
	        this.state = 133;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optionName() {
	    let localctx = new OptionNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, Protobuf3Parser.RULE_optionName);
	    var _la = 0; // Token type
	    try {
	        this.state = 143;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case Protobuf3Parser.SYNTAX:
	        case Protobuf3Parser.IMPORT:
	        case Protobuf3Parser.WEAK:
	        case Protobuf3Parser.PUBLIC:
	        case Protobuf3Parser.PACKAGE:
	        case Protobuf3Parser.OPTION:
	        case Protobuf3Parser.REPEATED:
	        case Protobuf3Parser.ONEOF:
	        case Protobuf3Parser.MAP:
	        case Protobuf3Parser.INT32:
	        case Protobuf3Parser.INT64:
	        case Protobuf3Parser.UINT32:
	        case Protobuf3Parser.UINT64:
	        case Protobuf3Parser.SINT32:
	        case Protobuf3Parser.SINT64:
	        case Protobuf3Parser.FIXED32:
	        case Protobuf3Parser.FIXED64:
	        case Protobuf3Parser.SFIXED32:
	        case Protobuf3Parser.SFIXED64:
	        case Protobuf3Parser.BOOL:
	        case Protobuf3Parser.STRING:
	        case Protobuf3Parser.DOUBLE:
	        case Protobuf3Parser.FLOAT:
	        case Protobuf3Parser.BYTES:
	        case Protobuf3Parser.RESERVED:
	        case Protobuf3Parser.TO:
	        case Protobuf3Parser.MAX:
	        case Protobuf3Parser.ENUM:
	        case Protobuf3Parser.MESSAGE:
	        case Protobuf3Parser.SERVICE:
	        case Protobuf3Parser.RPC:
	        case Protobuf3Parser.STREAM:
	        case Protobuf3Parser.RETURNS:
	        case Protobuf3Parser.BOOL_LIT:
	        case Protobuf3Parser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 135;
	            this.fullIdent();
	            break;
	        case Protobuf3Parser.LP:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 136;
	            this.match(Protobuf3Parser.LP);
	            this.state = 137;
	            this.fullIdent();
	            this.state = 138;
	            this.match(Protobuf3Parser.RP);
	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===Protobuf3Parser.DOT) {
	                this.state = 139;
	                this.match(Protobuf3Parser.DOT);
	                this.state = 140;
	                this.fullIdent();
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



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Protobuf3Parser.RULE_field);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 145;
	            this.match(Protobuf3Parser.REPEATED);

	        }
	        this.state = 148;
	        this.type_();
	        this.state = 149;
	        this.fieldName();
	        this.state = 150;
	        this.match(Protobuf3Parser.EQ);
	        this.state = 151;
	        this.fieldNumber();
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Protobuf3Parser.LB) {
	            this.state = 152;
	            this.match(Protobuf3Parser.LB);
	            this.state = 153;
	            this.fieldOptions();
	            this.state = 154;
	            this.match(Protobuf3Parser.RB);
	        }

	        this.state = 158;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldOptions() {
	    let localctx = new FieldOptionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, Protobuf3Parser.RULE_fieldOptions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.fieldOption();
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Protobuf3Parser.COMMA) {
	            this.state = 161;
	            this.match(Protobuf3Parser.COMMA);
	            this.state = 162;
	            this.fieldOption();
	            this.state = 167;
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



	fieldOption() {
	    let localctx = new FieldOptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, Protobuf3Parser.RULE_fieldOption);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.optionName();
	        this.state = 169;
	        this.match(Protobuf3Parser.EQ);
	        this.state = 170;
	        this.constant();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldNumber() {
	    let localctx = new FieldNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, Protobuf3Parser.RULE_fieldNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.intLit();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	oneof() {
	    let localctx = new OneofContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, Protobuf3Parser.RULE_oneof);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(Protobuf3Parser.ONEOF);
	        this.state = 175;
	        this.oneofName();
	        this.state = 176;
	        this.match(Protobuf3Parser.LC);
	        this.state = 182;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Protobuf3Parser.SYNTAX) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.WEAK) | (1 << Protobuf3Parser.PUBLIC) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.TO) | (1 << Protobuf3Parser.MAX) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.RPC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (Protobuf3Parser.STREAM - 32)) | (1 << (Protobuf3Parser.RETURNS - 32)) | (1 << (Protobuf3Parser.SEMI - 32)) | (1 << (Protobuf3Parser.DOT - 32)) | (1 << (Protobuf3Parser.BOOL_LIT - 32)) | (1 << (Protobuf3Parser.IDENTIFIER - 32)))) !== 0)) {
	            this.state = 180;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 177;
	                this.optionStatement();
	                break;

	            case 2:
	                this.state = 178;
	                this.oneofField();
	                break;

	            case 3:
	                this.state = 179;
	                this.emptyStatement_();
	                break;

	            }
	            this.state = 184;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 185;
	        this.match(Protobuf3Parser.RC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	oneofField() {
	    let localctx = new OneofFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, Protobuf3Parser.RULE_oneofField);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.type_();
	        this.state = 188;
	        this.fieldName();
	        this.state = 189;
	        this.match(Protobuf3Parser.EQ);
	        this.state = 190;
	        this.fieldNumber();
	        this.state = 195;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Protobuf3Parser.LB) {
	            this.state = 191;
	            this.match(Protobuf3Parser.LB);
	            this.state = 192;
	            this.fieldOptions();
	            this.state = 193;
	            this.match(Protobuf3Parser.RB);
	        }

	        this.state = 197;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mapField() {
	    let localctx = new MapFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, Protobuf3Parser.RULE_mapField);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(Protobuf3Parser.MAP);
	        this.state = 200;
	        this.match(Protobuf3Parser.LT);
	        this.state = 201;
	        this.keyType();
	        this.state = 202;
	        this.match(Protobuf3Parser.COMMA);
	        this.state = 203;
	        this.type_();
	        this.state = 204;
	        this.match(Protobuf3Parser.GT);
	        this.state = 205;
	        this.mapName();
	        this.state = 206;
	        this.match(Protobuf3Parser.EQ);
	        this.state = 207;
	        this.fieldNumber();
	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Protobuf3Parser.LB) {
	            this.state = 208;
	            this.match(Protobuf3Parser.LB);
	            this.state = 209;
	            this.fieldOptions();
	            this.state = 210;
	            this.match(Protobuf3Parser.RB);
	        }

	        this.state = 214;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keyType() {
	    let localctx = new KeyTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, Protobuf3Parser.RULE_keyType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING))) !== 0))) {
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



	type_() {
	    let localctx = new Type_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, Protobuf3Parser.RULE_type_);
	    try {
	        this.state = 235;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 218;
	            this.match(Protobuf3Parser.DOUBLE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 219;
	            this.match(Protobuf3Parser.FLOAT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 220;
	            this.match(Protobuf3Parser.INT32);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 221;
	            this.match(Protobuf3Parser.INT64);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 222;
	            this.match(Protobuf3Parser.UINT32);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 223;
	            this.match(Protobuf3Parser.UINT64);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 224;
	            this.match(Protobuf3Parser.SINT32);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 225;
	            this.match(Protobuf3Parser.SINT64);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 226;
	            this.match(Protobuf3Parser.FIXED32);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 227;
	            this.match(Protobuf3Parser.FIXED64);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 228;
	            this.match(Protobuf3Parser.SFIXED32);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 229;
	            this.match(Protobuf3Parser.SFIXED64);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 230;
	            this.match(Protobuf3Parser.BOOL);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 231;
	            this.match(Protobuf3Parser.STRING);
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 232;
	            this.match(Protobuf3Parser.BYTES);
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 233;
	            this.messageType();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 234;
	            this.enumType();
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



	reserved() {
	    let localctx = new ReservedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, Protobuf3Parser.RULE_reserved);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this.match(Protobuf3Parser.RESERVED);
	        this.state = 240;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case Protobuf3Parser.INT_LIT:
	            this.state = 238;
	            this.ranges();
	            break;
	        case Protobuf3Parser.PROTO3_LIT_SINGLE:
	        case Protobuf3Parser.PROTO3_LIT_DOBULE:
	        case Protobuf3Parser.STR_LIT:
	            this.state = 239;
	            this.reservedFieldNames();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 242;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ranges() {
	    let localctx = new RangesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, Protobuf3Parser.RULE_ranges);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this.range_();
	        this.state = 249;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Protobuf3Parser.COMMA) {
	            this.state = 245;
	            this.match(Protobuf3Parser.COMMA);
	            this.state = 246;
	            this.range_();
	            this.state = 251;
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



	range_() {
	    let localctx = new Range_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, Protobuf3Parser.RULE_range_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 252;
	        this.intLit();
	        this.state = 258;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Protobuf3Parser.TO) {
	            this.state = 253;
	            this.match(Protobuf3Parser.TO);
	            this.state = 256;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case Protobuf3Parser.INT_LIT:
	                this.state = 254;
	                this.intLit();
	                break;
	            case Protobuf3Parser.MAX:
	                this.state = 255;
	                this.match(Protobuf3Parser.MAX);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
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



	reservedFieldNames() {
	    let localctx = new ReservedFieldNamesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, Protobuf3Parser.RULE_reservedFieldNames);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.strLit();
	        this.state = 265;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Protobuf3Parser.COMMA) {
	            this.state = 261;
	            this.match(Protobuf3Parser.COMMA);
	            this.state = 262;
	            this.strLit();
	            this.state = 267;
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



	topLevelDef() {
	    let localctx = new TopLevelDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, Protobuf3Parser.RULE_topLevelDef);
	    try {
	        this.state = 271;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case Protobuf3Parser.MESSAGE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 268;
	            this.messageDef();
	            break;
	        case Protobuf3Parser.ENUM:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 269;
	            this.enumDef();
	            break;
	        case Protobuf3Parser.SERVICE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 270;
	            this.serviceDef();
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



	enumDef() {
	    let localctx = new EnumDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, Protobuf3Parser.RULE_enumDef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.match(Protobuf3Parser.ENUM);
	        this.state = 274;
	        this.enumName();
	        this.state = 275;
	        this.enumBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumBody() {
	    let localctx = new EnumBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, Protobuf3Parser.RULE_enumBody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.match(Protobuf3Parser.LC);
	        this.state = 281;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Protobuf3Parser.SYNTAX) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.WEAK) | (1 << Protobuf3Parser.PUBLIC) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.TO) | (1 << Protobuf3Parser.MAX) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.RPC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (Protobuf3Parser.STREAM - 32)) | (1 << (Protobuf3Parser.RETURNS - 32)) | (1 << (Protobuf3Parser.SEMI - 32)) | (1 << (Protobuf3Parser.BOOL_LIT - 32)) | (1 << (Protobuf3Parser.IDENTIFIER - 32)))) !== 0)) {
	            this.state = 278;
	            this.enumElement();
	            this.state = 283;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 284;
	        this.match(Protobuf3Parser.RC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumElement() {
	    let localctx = new EnumElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, Protobuf3Parser.RULE_enumElement);
	    try {
	        this.state = 289;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 286;
	            this.optionStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 287;
	            this.enumField();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 288;
	            this.emptyStatement_();
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



	enumField() {
	    let localctx = new EnumFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, Protobuf3Parser.RULE_enumField);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 291;
	        this.ident();
	        this.state = 292;
	        this.match(Protobuf3Parser.EQ);
	        this.state = 294;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Protobuf3Parser.MINUS) {
	            this.state = 293;
	            this.match(Protobuf3Parser.MINUS);
	        }

	        this.state = 296;
	        this.intLit();
	        this.state = 298;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Protobuf3Parser.LB) {
	            this.state = 297;
	            this.enumValueOptions();
	        }

	        this.state = 300;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumValueOptions() {
	    let localctx = new EnumValueOptionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, Protobuf3Parser.RULE_enumValueOptions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.match(Protobuf3Parser.LB);
	        this.state = 303;
	        this.enumValueOption();
	        this.state = 308;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Protobuf3Parser.COMMA) {
	            this.state = 304;
	            this.match(Protobuf3Parser.COMMA);
	            this.state = 305;
	            this.enumValueOption();
	            this.state = 310;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 311;
	        this.match(Protobuf3Parser.RB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumValueOption() {
	    let localctx = new EnumValueOptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, Protobuf3Parser.RULE_enumValueOption);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 313;
	        this.optionName();
	        this.state = 314;
	        this.match(Protobuf3Parser.EQ);
	        this.state = 315;
	        this.constant();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	messageDef() {
	    let localctx = new MessageDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, Protobuf3Parser.RULE_messageDef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 317;
	        this.match(Protobuf3Parser.MESSAGE);
	        this.state = 318;
	        this.messageName();
	        this.state = 319;
	        this.messageBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	messageBody() {
	    let localctx = new MessageBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, Protobuf3Parser.RULE_messageBody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
	        this.match(Protobuf3Parser.LC);
	        this.state = 325;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Protobuf3Parser.SYNTAX) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.WEAK) | (1 << Protobuf3Parser.PUBLIC) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.TO) | (1 << Protobuf3Parser.MAX) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.RPC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (Protobuf3Parser.STREAM - 32)) | (1 << (Protobuf3Parser.RETURNS - 32)) | (1 << (Protobuf3Parser.SEMI - 32)) | (1 << (Protobuf3Parser.DOT - 32)) | (1 << (Protobuf3Parser.BOOL_LIT - 32)) | (1 << (Protobuf3Parser.IDENTIFIER - 32)))) !== 0)) {
	            this.state = 322;
	            this.messageElement();
	            this.state = 327;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 328;
	        this.match(Protobuf3Parser.RC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	messageElement() {
	    let localctx = new MessageElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, Protobuf3Parser.RULE_messageElement);
	    try {
	        this.state = 338;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 330;
	            this.field();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 331;
	            this.enumDef();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 332;
	            this.messageDef();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 333;
	            this.optionStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 334;
	            this.oneof();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 335;
	            this.mapField();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 336;
	            this.reserved();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 337;
	            this.emptyStatement_();
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



	serviceDef() {
	    let localctx = new ServiceDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, Protobuf3Parser.RULE_serviceDef);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        this.match(Protobuf3Parser.SERVICE);
	        this.state = 341;
	        this.serviceName();
	        this.state = 342;
	        this.match(Protobuf3Parser.LC);
	        this.state = 346;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 6)) & ~0x1f) == 0 && ((1 << (_la - 6)) & ((1 << (Protobuf3Parser.OPTION - 6)) | (1 << (Protobuf3Parser.RPC - 6)) | (1 << (Protobuf3Parser.SEMI - 6)))) !== 0)) {
	            this.state = 343;
	            this.serviceElement();
	            this.state = 348;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 349;
	        this.match(Protobuf3Parser.RC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	serviceElement() {
	    let localctx = new ServiceElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, Protobuf3Parser.RULE_serviceElement);
	    try {
	        this.state = 354;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case Protobuf3Parser.OPTION:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 351;
	            this.optionStatement();
	            break;
	        case Protobuf3Parser.RPC:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 352;
	            this.rpc();
	            break;
	        case Protobuf3Parser.SEMI:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 353;
	            this.emptyStatement_();
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



	rpc() {
	    let localctx = new RpcContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, Protobuf3Parser.RULE_rpc);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356;
	        this.match(Protobuf3Parser.RPC);
	        this.state = 357;
	        this.rpcName();
	        this.state = 358;
	        this.match(Protobuf3Parser.LP);
	        this.state = 360;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        if(la_===1) {
	            this.state = 359;
	            this.match(Protobuf3Parser.STREAM);

	        }
	        this.state = 362;
	        this.messageType();
	        this.state = 363;
	        this.match(Protobuf3Parser.RP);
	        this.state = 364;
	        this.match(Protobuf3Parser.RETURNS);
	        this.state = 365;
	        this.match(Protobuf3Parser.LP);
	        this.state = 367;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        if(la_===1) {
	            this.state = 366;
	            this.match(Protobuf3Parser.STREAM);

	        }
	        this.state = 369;
	        this.messageType();
	        this.state = 370;
	        this.match(Protobuf3Parser.RP);
	        this.state = 381;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case Protobuf3Parser.LC:
	            this.state = 371;
	            this.match(Protobuf3Parser.LC);
	            this.state = 376;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===Protobuf3Parser.OPTION || _la===Protobuf3Parser.SEMI) {
	                this.state = 374;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case Protobuf3Parser.OPTION:
	                    this.state = 372;
	                    this.optionStatement();
	                    break;
	                case Protobuf3Parser.SEMI:
	                    this.state = 373;
	                    this.emptyStatement_();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 378;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 379;
	            this.match(Protobuf3Parser.RC);
	            break;
	        case Protobuf3Parser.SEMI:
	            this.state = 380;
	            this.match(Protobuf3Parser.SEMI);
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



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, Protobuf3Parser.RULE_constant);
	    var _la = 0; // Token type
	    try {
	        this.state = 395;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 383;
	            this.fullIdent();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 385;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===Protobuf3Parser.PLUS || _la===Protobuf3Parser.MINUS) {
	                this.state = 384;
	                _la = this._input.LA(1);
	                if(!(_la===Protobuf3Parser.PLUS || _la===Protobuf3Parser.MINUS)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 387;
	            this.intLit();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 389;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===Protobuf3Parser.PLUS || _la===Protobuf3Parser.MINUS) {
	                this.state = 388;
	                _la = this._input.LA(1);
	                if(!(_la===Protobuf3Parser.PLUS || _la===Protobuf3Parser.MINUS)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 391;
	            this.floatLit();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 392;
	            this.strLit();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 393;
	            this.boolLit();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 394;
	            this.blockLit();
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



	blockLit() {
	    let localctx = new BlockLitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, Protobuf3Parser.RULE_blockLit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 397;
	        this.match(Protobuf3Parser.LC);
	        this.state = 404;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Protobuf3Parser.SYNTAX) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.WEAK) | (1 << Protobuf3Parser.PUBLIC) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.TO) | (1 << Protobuf3Parser.MAX) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.RPC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (Protobuf3Parser.STREAM - 32)) | (1 << (Protobuf3Parser.RETURNS - 32)) | (1 << (Protobuf3Parser.BOOL_LIT - 32)) | (1 << (Protobuf3Parser.IDENTIFIER - 32)))) !== 0)) {
	            this.state = 398;
	            this.ident();
	            this.state = 399;
	            this.match(Protobuf3Parser.COLON);
	            this.state = 400;
	            this.constant();
	            this.state = 406;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 407;
	        this.match(Protobuf3Parser.RC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	emptyStatement_() {
	    let localctx = new EmptyStatement_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, Protobuf3Parser.RULE_emptyStatement_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 409;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ident() {
	    let localctx = new IdentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, Protobuf3Parser.RULE_ident);
	    try {
	        this.state = 413;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case Protobuf3Parser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 411;
	            this.match(Protobuf3Parser.IDENTIFIER);
	            break;
	        case Protobuf3Parser.SYNTAX:
	        case Protobuf3Parser.IMPORT:
	        case Protobuf3Parser.WEAK:
	        case Protobuf3Parser.PUBLIC:
	        case Protobuf3Parser.PACKAGE:
	        case Protobuf3Parser.OPTION:
	        case Protobuf3Parser.REPEATED:
	        case Protobuf3Parser.ONEOF:
	        case Protobuf3Parser.MAP:
	        case Protobuf3Parser.INT32:
	        case Protobuf3Parser.INT64:
	        case Protobuf3Parser.UINT32:
	        case Protobuf3Parser.UINT64:
	        case Protobuf3Parser.SINT32:
	        case Protobuf3Parser.SINT64:
	        case Protobuf3Parser.FIXED32:
	        case Protobuf3Parser.FIXED64:
	        case Protobuf3Parser.SFIXED32:
	        case Protobuf3Parser.SFIXED64:
	        case Protobuf3Parser.BOOL:
	        case Protobuf3Parser.STRING:
	        case Protobuf3Parser.DOUBLE:
	        case Protobuf3Parser.FLOAT:
	        case Protobuf3Parser.BYTES:
	        case Protobuf3Parser.RESERVED:
	        case Protobuf3Parser.TO:
	        case Protobuf3Parser.MAX:
	        case Protobuf3Parser.ENUM:
	        case Protobuf3Parser.MESSAGE:
	        case Protobuf3Parser.SERVICE:
	        case Protobuf3Parser.RPC:
	        case Protobuf3Parser.STREAM:
	        case Protobuf3Parser.RETURNS:
	        case Protobuf3Parser.BOOL_LIT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 412;
	            this.keywords();
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



	fullIdent() {
	    let localctx = new FullIdentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, Protobuf3Parser.RULE_fullIdent);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 415;
	        this.ident();
	        this.state = 420;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Protobuf3Parser.DOT) {
	            this.state = 416;
	            this.match(Protobuf3Parser.DOT);
	            this.state = 417;
	            this.ident();
	            this.state = 422;
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



	messageName() {
	    let localctx = new MessageNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, Protobuf3Parser.RULE_messageName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 423;
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



	enumName() {
	    let localctx = new EnumNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, Protobuf3Parser.RULE_enumName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 425;
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



	fieldName() {
	    let localctx = new FieldNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, Protobuf3Parser.RULE_fieldName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 427;
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



	oneofName() {
	    let localctx = new OneofNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, Protobuf3Parser.RULE_oneofName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 429;
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



	mapName() {
	    let localctx = new MapNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, Protobuf3Parser.RULE_mapName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 431;
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



	serviceName() {
	    let localctx = new ServiceNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, Protobuf3Parser.RULE_serviceName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 433;
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



	rpcName() {
	    let localctx = new RpcNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, Protobuf3Parser.RULE_rpcName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 435;
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



	messageType() {
	    let localctx = new MessageTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, Protobuf3Parser.RULE_messageType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 438;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Protobuf3Parser.DOT) {
	            this.state = 437;
	            this.match(Protobuf3Parser.DOT);
	        }

	        this.state = 445;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 440;
	                this.ident();
	                this.state = 441;
	                this.match(Protobuf3Parser.DOT); 
	            }
	            this.state = 447;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
	        }

	        this.state = 448;
	        this.messageName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumType() {
	    let localctx = new EnumTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, Protobuf3Parser.RULE_enumType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 451;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Protobuf3Parser.DOT) {
	            this.state = 450;
	            this.match(Protobuf3Parser.DOT);
	        }

	        this.state = 458;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 453;
	                this.ident();
	                this.state = 454;
	                this.match(Protobuf3Parser.DOT); 
	            }
	            this.state = 460;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
	        }

	        this.state = 461;
	        this.enumName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	intLit() {
	    let localctx = new IntLitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, Protobuf3Parser.RULE_intLit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 463;
	        this.match(Protobuf3Parser.INT_LIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	strLit() {
	    let localctx = new StrLitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, Protobuf3Parser.RULE_strLit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 465;
	        _la = this._input.LA(1);
	        if(!(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (Protobuf3Parser.PROTO3_LIT_SINGLE - 34)) | (1 << (Protobuf3Parser.PROTO3_LIT_DOBULE - 34)) | (1 << (Protobuf3Parser.STR_LIT - 34)))) !== 0))) {
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



	boolLit() {
	    let localctx = new BoolLitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, Protobuf3Parser.RULE_boolLit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 467;
	        this.match(Protobuf3Parser.BOOL_LIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	floatLit() {
	    let localctx = new FloatLitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, Protobuf3Parser.RULE_floatLit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 469;
	        this.match(Protobuf3Parser.FLOAT_LIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keywords() {
	    let localctx = new KeywordsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, Protobuf3Parser.RULE_keywords);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 471;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Protobuf3Parser.SYNTAX) | (1 << Protobuf3Parser.IMPORT) | (1 << Protobuf3Parser.WEAK) | (1 << Protobuf3Parser.PUBLIC) | (1 << Protobuf3Parser.PACKAGE) | (1 << Protobuf3Parser.OPTION) | (1 << Protobuf3Parser.REPEATED) | (1 << Protobuf3Parser.ONEOF) | (1 << Protobuf3Parser.MAP) | (1 << Protobuf3Parser.INT32) | (1 << Protobuf3Parser.INT64) | (1 << Protobuf3Parser.UINT32) | (1 << Protobuf3Parser.UINT64) | (1 << Protobuf3Parser.SINT32) | (1 << Protobuf3Parser.SINT64) | (1 << Protobuf3Parser.FIXED32) | (1 << Protobuf3Parser.FIXED64) | (1 << Protobuf3Parser.SFIXED32) | (1 << Protobuf3Parser.SFIXED64) | (1 << Protobuf3Parser.BOOL) | (1 << Protobuf3Parser.STRING) | (1 << Protobuf3Parser.DOUBLE) | (1 << Protobuf3Parser.FLOAT) | (1 << Protobuf3Parser.BYTES) | (1 << Protobuf3Parser.RESERVED) | (1 << Protobuf3Parser.TO) | (1 << Protobuf3Parser.MAX) | (1 << Protobuf3Parser.ENUM) | (1 << Protobuf3Parser.MESSAGE) | (1 << Protobuf3Parser.SERVICE) | (1 << Protobuf3Parser.RPC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (Protobuf3Parser.STREAM - 32)) | (1 << (Protobuf3Parser.RETURNS - 32)) | (1 << (Protobuf3Parser.BOOL_LIT - 32)))) !== 0))) {
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

Protobuf3Parser.EOF = antlr4.Token.EOF;
Protobuf3Parser.SYNTAX = 1;
Protobuf3Parser.IMPORT = 2;
Protobuf3Parser.WEAK = 3;
Protobuf3Parser.PUBLIC = 4;
Protobuf3Parser.PACKAGE = 5;
Protobuf3Parser.OPTION = 6;
Protobuf3Parser.REPEATED = 7;
Protobuf3Parser.ONEOF = 8;
Protobuf3Parser.MAP = 9;
Protobuf3Parser.INT32 = 10;
Protobuf3Parser.INT64 = 11;
Protobuf3Parser.UINT32 = 12;
Protobuf3Parser.UINT64 = 13;
Protobuf3Parser.SINT32 = 14;
Protobuf3Parser.SINT64 = 15;
Protobuf3Parser.FIXED32 = 16;
Protobuf3Parser.FIXED64 = 17;
Protobuf3Parser.SFIXED32 = 18;
Protobuf3Parser.SFIXED64 = 19;
Protobuf3Parser.BOOL = 20;
Protobuf3Parser.STRING = 21;
Protobuf3Parser.DOUBLE = 22;
Protobuf3Parser.FLOAT = 23;
Protobuf3Parser.BYTES = 24;
Protobuf3Parser.RESERVED = 25;
Protobuf3Parser.TO = 26;
Protobuf3Parser.MAX = 27;
Protobuf3Parser.ENUM = 28;
Protobuf3Parser.MESSAGE = 29;
Protobuf3Parser.SERVICE = 30;
Protobuf3Parser.RPC = 31;
Protobuf3Parser.STREAM = 32;
Protobuf3Parser.RETURNS = 33;
Protobuf3Parser.PROTO3_LIT_SINGLE = 34;
Protobuf3Parser.PROTO3_LIT_DOBULE = 35;
Protobuf3Parser.SEMI = 36;
Protobuf3Parser.EQ = 37;
Protobuf3Parser.LP = 38;
Protobuf3Parser.RP = 39;
Protobuf3Parser.LB = 40;
Protobuf3Parser.RB = 41;
Protobuf3Parser.LC = 42;
Protobuf3Parser.RC = 43;
Protobuf3Parser.LT = 44;
Protobuf3Parser.GT = 45;
Protobuf3Parser.DOT = 46;
Protobuf3Parser.COMMA = 47;
Protobuf3Parser.COLON = 48;
Protobuf3Parser.PLUS = 49;
Protobuf3Parser.MINUS = 50;
Protobuf3Parser.STR_LIT = 51;
Protobuf3Parser.BOOL_LIT = 52;
Protobuf3Parser.FLOAT_LIT = 53;
Protobuf3Parser.INT_LIT = 54;
Protobuf3Parser.IDENTIFIER = 55;
Protobuf3Parser.WS = 56;
Protobuf3Parser.LINE_COMMENT = 57;
Protobuf3Parser.COMMENT = 58;

Protobuf3Parser.RULE_proto = 0;
Protobuf3Parser.RULE_syntax = 1;
Protobuf3Parser.RULE_importStatement = 2;
Protobuf3Parser.RULE_packageStatement = 3;
Protobuf3Parser.RULE_optionStatement = 4;
Protobuf3Parser.RULE_optionName = 5;
Protobuf3Parser.RULE_field = 6;
Protobuf3Parser.RULE_fieldOptions = 7;
Protobuf3Parser.RULE_fieldOption = 8;
Protobuf3Parser.RULE_fieldNumber = 9;
Protobuf3Parser.RULE_oneof = 10;
Protobuf3Parser.RULE_oneofField = 11;
Protobuf3Parser.RULE_mapField = 12;
Protobuf3Parser.RULE_keyType = 13;
Protobuf3Parser.RULE_type_ = 14;
Protobuf3Parser.RULE_reserved = 15;
Protobuf3Parser.RULE_ranges = 16;
Protobuf3Parser.RULE_range_ = 17;
Protobuf3Parser.RULE_reservedFieldNames = 18;
Protobuf3Parser.RULE_topLevelDef = 19;
Protobuf3Parser.RULE_enumDef = 20;
Protobuf3Parser.RULE_enumBody = 21;
Protobuf3Parser.RULE_enumElement = 22;
Protobuf3Parser.RULE_enumField = 23;
Protobuf3Parser.RULE_enumValueOptions = 24;
Protobuf3Parser.RULE_enumValueOption = 25;
Protobuf3Parser.RULE_messageDef = 26;
Protobuf3Parser.RULE_messageBody = 27;
Protobuf3Parser.RULE_messageElement = 28;
Protobuf3Parser.RULE_serviceDef = 29;
Protobuf3Parser.RULE_serviceElement = 30;
Protobuf3Parser.RULE_rpc = 31;
Protobuf3Parser.RULE_constant = 32;
Protobuf3Parser.RULE_blockLit = 33;
Protobuf3Parser.RULE_emptyStatement_ = 34;
Protobuf3Parser.RULE_ident = 35;
Protobuf3Parser.RULE_fullIdent = 36;
Protobuf3Parser.RULE_messageName = 37;
Protobuf3Parser.RULE_enumName = 38;
Protobuf3Parser.RULE_fieldName = 39;
Protobuf3Parser.RULE_oneofName = 40;
Protobuf3Parser.RULE_mapName = 41;
Protobuf3Parser.RULE_serviceName = 42;
Protobuf3Parser.RULE_rpcName = 43;
Protobuf3Parser.RULE_messageType = 44;
Protobuf3Parser.RULE_enumType = 45;
Protobuf3Parser.RULE_intLit = 46;
Protobuf3Parser.RULE_strLit = 47;
Protobuf3Parser.RULE_boolLit = 48;
Protobuf3Parser.RULE_floatLit = 49;
Protobuf3Parser.RULE_keywords = 50;

class ProtoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_proto;
    }

	syntax() {
	    return this.getTypedRuleContext(SyntaxContext,0);
	};

	importStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportStatementContext);
	    } else {
	        return this.getTypedRuleContext(ImportStatementContext,i);
	    }
	};

	packageStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PackageStatementContext);
	    } else {
	        return this.getTypedRuleContext(PackageStatementContext,i);
	    }
	};

	optionStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptionStatementContext);
	    } else {
	        return this.getTypedRuleContext(OptionStatementContext,i);
	    }
	};

	topLevelDef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TopLevelDefContext);
	    } else {
	        return this.getTypedRuleContext(TopLevelDefContext,i);
	    }
	};

	emptyStatement_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EmptyStatement_Context);
	    } else {
	        return this.getTypedRuleContext(EmptyStatement_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterProto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitProto(this);
		}
	}


}



class SyntaxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_syntax;
    }

	SYNTAX() {
	    return this.getToken(Protobuf3Parser.SYNTAX, 0);
	};

	EQ() {
	    return this.getToken(Protobuf3Parser.EQ, 0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	PROTO3_LIT_SINGLE() {
	    return this.getToken(Protobuf3Parser.PROTO3_LIT_SINGLE, 0);
	};

	PROTO3_LIT_DOBULE() {
	    return this.getToken(Protobuf3Parser.PROTO3_LIT_DOBULE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterSyntax(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitSyntax(this);
		}
	}


}



class ImportStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_importStatement;
    }

	IMPORT() {
	    return this.getToken(Protobuf3Parser.IMPORT, 0);
	};

	strLit() {
	    return this.getTypedRuleContext(StrLitContext,0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	WEAK() {
	    return this.getToken(Protobuf3Parser.WEAK, 0);
	};

	PUBLIC() {
	    return this.getToken(Protobuf3Parser.PUBLIC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterImportStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitImportStatement(this);
		}
	}


}



class PackageStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_packageStatement;
    }

	PACKAGE() {
	    return this.getToken(Protobuf3Parser.PACKAGE, 0);
	};

	fullIdent() {
	    return this.getTypedRuleContext(FullIdentContext,0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterPackageStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitPackageStatement(this);
		}
	}


}



class OptionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_optionStatement;
    }

	OPTION() {
	    return this.getToken(Protobuf3Parser.OPTION, 0);
	};

	optionName() {
	    return this.getTypedRuleContext(OptionNameContext,0);
	};

	EQ() {
	    return this.getToken(Protobuf3Parser.EQ, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterOptionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitOptionStatement(this);
		}
	}


}



class OptionNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_optionName;
    }

	fullIdent = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FullIdentContext);
	    } else {
	        return this.getTypedRuleContext(FullIdentContext,i);
	    }
	};

	LP() {
	    return this.getToken(Protobuf3Parser.LP, 0);
	};

	RP() {
	    return this.getToken(Protobuf3Parser.RP, 0);
	};

	DOT() {
	    return this.getToken(Protobuf3Parser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterOptionName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitOptionName(this);
		}
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_field;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	fieldName() {
	    return this.getTypedRuleContext(FieldNameContext,0);
	};

	EQ() {
	    return this.getToken(Protobuf3Parser.EQ, 0);
	};

	fieldNumber() {
	    return this.getTypedRuleContext(FieldNumberContext,0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	REPEATED() {
	    return this.getToken(Protobuf3Parser.REPEATED, 0);
	};

	LB() {
	    return this.getToken(Protobuf3Parser.LB, 0);
	};

	fieldOptions() {
	    return this.getTypedRuleContext(FieldOptionsContext,0);
	};

	RB() {
	    return this.getToken(Protobuf3Parser.RB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitField(this);
		}
	}


}



class FieldOptionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_fieldOptions;
    }

	fieldOption = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldOptionContext);
	    } else {
	        return this.getTypedRuleContext(FieldOptionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.COMMA);
	    } else {
	        return this.getToken(Protobuf3Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterFieldOptions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitFieldOptions(this);
		}
	}


}



class FieldOptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_fieldOption;
    }

	optionName() {
	    return this.getTypedRuleContext(OptionNameContext,0);
	};

	EQ() {
	    return this.getToken(Protobuf3Parser.EQ, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterFieldOption(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitFieldOption(this);
		}
	}


}



class FieldNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_fieldNumber;
    }

	intLit() {
	    return this.getTypedRuleContext(IntLitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterFieldNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitFieldNumber(this);
		}
	}


}



class OneofContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_oneof;
    }

	ONEOF() {
	    return this.getToken(Protobuf3Parser.ONEOF, 0);
	};

	oneofName() {
	    return this.getTypedRuleContext(OneofNameContext,0);
	};

	LC() {
	    return this.getToken(Protobuf3Parser.LC, 0);
	};

	RC() {
	    return this.getToken(Protobuf3Parser.RC, 0);
	};

	optionStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptionStatementContext);
	    } else {
	        return this.getTypedRuleContext(OptionStatementContext,i);
	    }
	};

	oneofField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OneofFieldContext);
	    } else {
	        return this.getTypedRuleContext(OneofFieldContext,i);
	    }
	};

	emptyStatement_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EmptyStatement_Context);
	    } else {
	        return this.getTypedRuleContext(EmptyStatement_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterOneof(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitOneof(this);
		}
	}


}



class OneofFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_oneofField;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	fieldName() {
	    return this.getTypedRuleContext(FieldNameContext,0);
	};

	EQ() {
	    return this.getToken(Protobuf3Parser.EQ, 0);
	};

	fieldNumber() {
	    return this.getTypedRuleContext(FieldNumberContext,0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	LB() {
	    return this.getToken(Protobuf3Parser.LB, 0);
	};

	fieldOptions() {
	    return this.getTypedRuleContext(FieldOptionsContext,0);
	};

	RB() {
	    return this.getToken(Protobuf3Parser.RB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterOneofField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitOneofField(this);
		}
	}


}



class MapFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_mapField;
    }

	MAP() {
	    return this.getToken(Protobuf3Parser.MAP, 0);
	};

	LT() {
	    return this.getToken(Protobuf3Parser.LT, 0);
	};

	keyType() {
	    return this.getTypedRuleContext(KeyTypeContext,0);
	};

	COMMA() {
	    return this.getToken(Protobuf3Parser.COMMA, 0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	GT() {
	    return this.getToken(Protobuf3Parser.GT, 0);
	};

	mapName() {
	    return this.getTypedRuleContext(MapNameContext,0);
	};

	EQ() {
	    return this.getToken(Protobuf3Parser.EQ, 0);
	};

	fieldNumber() {
	    return this.getTypedRuleContext(FieldNumberContext,0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	LB() {
	    return this.getToken(Protobuf3Parser.LB, 0);
	};

	fieldOptions() {
	    return this.getTypedRuleContext(FieldOptionsContext,0);
	};

	RB() {
	    return this.getToken(Protobuf3Parser.RB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterMapField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitMapField(this);
		}
	}


}



class KeyTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_keyType;
    }

	INT32() {
	    return this.getToken(Protobuf3Parser.INT32, 0);
	};

	INT64() {
	    return this.getToken(Protobuf3Parser.INT64, 0);
	};

	UINT32() {
	    return this.getToken(Protobuf3Parser.UINT32, 0);
	};

	UINT64() {
	    return this.getToken(Protobuf3Parser.UINT64, 0);
	};

	SINT32() {
	    return this.getToken(Protobuf3Parser.SINT32, 0);
	};

	SINT64() {
	    return this.getToken(Protobuf3Parser.SINT64, 0);
	};

	FIXED32() {
	    return this.getToken(Protobuf3Parser.FIXED32, 0);
	};

	FIXED64() {
	    return this.getToken(Protobuf3Parser.FIXED64, 0);
	};

	SFIXED32() {
	    return this.getToken(Protobuf3Parser.SFIXED32, 0);
	};

	SFIXED64() {
	    return this.getToken(Protobuf3Parser.SFIXED64, 0);
	};

	BOOL() {
	    return this.getToken(Protobuf3Parser.BOOL, 0);
	};

	STRING() {
	    return this.getToken(Protobuf3Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterKeyType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitKeyType(this);
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
        this.ruleIndex = Protobuf3Parser.RULE_type_;
    }

	DOUBLE() {
	    return this.getToken(Protobuf3Parser.DOUBLE, 0);
	};

	FLOAT() {
	    return this.getToken(Protobuf3Parser.FLOAT, 0);
	};

	INT32() {
	    return this.getToken(Protobuf3Parser.INT32, 0);
	};

	INT64() {
	    return this.getToken(Protobuf3Parser.INT64, 0);
	};

	UINT32() {
	    return this.getToken(Protobuf3Parser.UINT32, 0);
	};

	UINT64() {
	    return this.getToken(Protobuf3Parser.UINT64, 0);
	};

	SINT32() {
	    return this.getToken(Protobuf3Parser.SINT32, 0);
	};

	SINT64() {
	    return this.getToken(Protobuf3Parser.SINT64, 0);
	};

	FIXED32() {
	    return this.getToken(Protobuf3Parser.FIXED32, 0);
	};

	FIXED64() {
	    return this.getToken(Protobuf3Parser.FIXED64, 0);
	};

	SFIXED32() {
	    return this.getToken(Protobuf3Parser.SFIXED32, 0);
	};

	SFIXED64() {
	    return this.getToken(Protobuf3Parser.SFIXED64, 0);
	};

	BOOL() {
	    return this.getToken(Protobuf3Parser.BOOL, 0);
	};

	STRING() {
	    return this.getToken(Protobuf3Parser.STRING, 0);
	};

	BYTES() {
	    return this.getToken(Protobuf3Parser.BYTES, 0);
	};

	messageType() {
	    return this.getTypedRuleContext(MessageTypeContext,0);
	};

	enumType() {
	    return this.getTypedRuleContext(EnumTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitType_(this);
		}
	}


}



class ReservedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_reserved;
    }

	RESERVED() {
	    return this.getToken(Protobuf3Parser.RESERVED, 0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	ranges() {
	    return this.getTypedRuleContext(RangesContext,0);
	};

	reservedFieldNames() {
	    return this.getTypedRuleContext(ReservedFieldNamesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterReserved(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitReserved(this);
		}
	}


}



class RangesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_ranges;
    }

	range_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Range_Context);
	    } else {
	        return this.getTypedRuleContext(Range_Context,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.COMMA);
	    } else {
	        return this.getToken(Protobuf3Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterRanges(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitRanges(this);
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
        this.ruleIndex = Protobuf3Parser.RULE_range_;
    }

	intLit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IntLitContext);
	    } else {
	        return this.getTypedRuleContext(IntLitContext,i);
	    }
	};

	TO() {
	    return this.getToken(Protobuf3Parser.TO, 0);
	};

	MAX() {
	    return this.getToken(Protobuf3Parser.MAX, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterRange_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitRange_(this);
		}
	}


}



class ReservedFieldNamesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_reservedFieldNames;
    }

	strLit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StrLitContext);
	    } else {
	        return this.getTypedRuleContext(StrLitContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.COMMA);
	    } else {
	        return this.getToken(Protobuf3Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterReservedFieldNames(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitReservedFieldNames(this);
		}
	}


}



class TopLevelDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_topLevelDef;
    }

	messageDef() {
	    return this.getTypedRuleContext(MessageDefContext,0);
	};

	enumDef() {
	    return this.getTypedRuleContext(EnumDefContext,0);
	};

	serviceDef() {
	    return this.getTypedRuleContext(ServiceDefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterTopLevelDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitTopLevelDef(this);
		}
	}


}



class EnumDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_enumDef;
    }

	ENUM() {
	    return this.getToken(Protobuf3Parser.ENUM, 0);
	};

	enumName() {
	    return this.getTypedRuleContext(EnumNameContext,0);
	};

	enumBody() {
	    return this.getTypedRuleContext(EnumBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEnumDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEnumDef(this);
		}
	}


}



class EnumBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_enumBody;
    }

	LC() {
	    return this.getToken(Protobuf3Parser.LC, 0);
	};

	RC() {
	    return this.getToken(Protobuf3Parser.RC, 0);
	};

	enumElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EnumElementContext);
	    } else {
	        return this.getTypedRuleContext(EnumElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEnumBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEnumBody(this);
		}
	}


}



class EnumElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_enumElement;
    }

	optionStatement() {
	    return this.getTypedRuleContext(OptionStatementContext,0);
	};

	enumField() {
	    return this.getTypedRuleContext(EnumFieldContext,0);
	};

	emptyStatement_() {
	    return this.getTypedRuleContext(EmptyStatement_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEnumElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEnumElement(this);
		}
	}


}



class EnumFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_enumField;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	EQ() {
	    return this.getToken(Protobuf3Parser.EQ, 0);
	};

	intLit() {
	    return this.getTypedRuleContext(IntLitContext,0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	MINUS() {
	    return this.getToken(Protobuf3Parser.MINUS, 0);
	};

	enumValueOptions() {
	    return this.getTypedRuleContext(EnumValueOptionsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEnumField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEnumField(this);
		}
	}


}



class EnumValueOptionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_enumValueOptions;
    }

	LB() {
	    return this.getToken(Protobuf3Parser.LB, 0);
	};

	enumValueOption = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EnumValueOptionContext);
	    } else {
	        return this.getTypedRuleContext(EnumValueOptionContext,i);
	    }
	};

	RB() {
	    return this.getToken(Protobuf3Parser.RB, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.COMMA);
	    } else {
	        return this.getToken(Protobuf3Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEnumValueOptions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEnumValueOptions(this);
		}
	}


}



class EnumValueOptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_enumValueOption;
    }

	optionName() {
	    return this.getTypedRuleContext(OptionNameContext,0);
	};

	EQ() {
	    return this.getToken(Protobuf3Parser.EQ, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEnumValueOption(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEnumValueOption(this);
		}
	}


}



class MessageDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_messageDef;
    }

	MESSAGE() {
	    return this.getToken(Protobuf3Parser.MESSAGE, 0);
	};

	messageName() {
	    return this.getTypedRuleContext(MessageNameContext,0);
	};

	messageBody() {
	    return this.getTypedRuleContext(MessageBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterMessageDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitMessageDef(this);
		}
	}


}



class MessageBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_messageBody;
    }

	LC() {
	    return this.getToken(Protobuf3Parser.LC, 0);
	};

	RC() {
	    return this.getToken(Protobuf3Parser.RC, 0);
	};

	messageElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MessageElementContext);
	    } else {
	        return this.getTypedRuleContext(MessageElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterMessageBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitMessageBody(this);
		}
	}


}



class MessageElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_messageElement;
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	enumDef() {
	    return this.getTypedRuleContext(EnumDefContext,0);
	};

	messageDef() {
	    return this.getTypedRuleContext(MessageDefContext,0);
	};

	optionStatement() {
	    return this.getTypedRuleContext(OptionStatementContext,0);
	};

	oneof() {
	    return this.getTypedRuleContext(OneofContext,0);
	};

	mapField() {
	    return this.getTypedRuleContext(MapFieldContext,0);
	};

	reserved() {
	    return this.getTypedRuleContext(ReservedContext,0);
	};

	emptyStatement_() {
	    return this.getTypedRuleContext(EmptyStatement_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterMessageElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitMessageElement(this);
		}
	}


}



class ServiceDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_serviceDef;
    }

	SERVICE() {
	    return this.getToken(Protobuf3Parser.SERVICE, 0);
	};

	serviceName() {
	    return this.getTypedRuleContext(ServiceNameContext,0);
	};

	LC() {
	    return this.getToken(Protobuf3Parser.LC, 0);
	};

	RC() {
	    return this.getToken(Protobuf3Parser.RC, 0);
	};

	serviceElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ServiceElementContext);
	    } else {
	        return this.getTypedRuleContext(ServiceElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterServiceDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitServiceDef(this);
		}
	}


}



class ServiceElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_serviceElement;
    }

	optionStatement() {
	    return this.getTypedRuleContext(OptionStatementContext,0);
	};

	rpc() {
	    return this.getTypedRuleContext(RpcContext,0);
	};

	emptyStatement_() {
	    return this.getTypedRuleContext(EmptyStatement_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterServiceElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitServiceElement(this);
		}
	}


}



class RpcContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_rpc;
    }

	RPC() {
	    return this.getToken(Protobuf3Parser.RPC, 0);
	};

	rpcName() {
	    return this.getTypedRuleContext(RpcNameContext,0);
	};

	LP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.LP);
	    } else {
	        return this.getToken(Protobuf3Parser.LP, i);
	    }
	};


	messageType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MessageTypeContext);
	    } else {
	        return this.getTypedRuleContext(MessageTypeContext,i);
	    }
	};

	RP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.RP);
	    } else {
	        return this.getToken(Protobuf3Parser.RP, i);
	    }
	};


	RETURNS() {
	    return this.getToken(Protobuf3Parser.RETURNS, 0);
	};

	LC() {
	    return this.getToken(Protobuf3Parser.LC, 0);
	};

	RC() {
	    return this.getToken(Protobuf3Parser.RC, 0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	STREAM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.STREAM);
	    } else {
	        return this.getToken(Protobuf3Parser.STREAM, i);
	    }
	};


	optionStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptionStatementContext);
	    } else {
	        return this.getTypedRuleContext(OptionStatementContext,i);
	    }
	};

	emptyStatement_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EmptyStatement_Context);
	    } else {
	        return this.getTypedRuleContext(EmptyStatement_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterRpc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitRpc(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_constant;
    }

	fullIdent() {
	    return this.getTypedRuleContext(FullIdentContext,0);
	};

	intLit() {
	    return this.getTypedRuleContext(IntLitContext,0);
	};

	MINUS() {
	    return this.getToken(Protobuf3Parser.MINUS, 0);
	};

	PLUS() {
	    return this.getToken(Protobuf3Parser.PLUS, 0);
	};

	floatLit() {
	    return this.getTypedRuleContext(FloatLitContext,0);
	};

	strLit() {
	    return this.getTypedRuleContext(StrLitContext,0);
	};

	boolLit() {
	    return this.getTypedRuleContext(BoolLitContext,0);
	};

	blockLit() {
	    return this.getTypedRuleContext(BlockLitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitConstant(this);
		}
	}


}



class BlockLitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_blockLit;
    }

	LC() {
	    return this.getToken(Protobuf3Parser.LC, 0);
	};

	RC() {
	    return this.getToken(Protobuf3Parser.RC, 0);
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

	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.COLON);
	    } else {
	        return this.getToken(Protobuf3Parser.COLON, i);
	    }
	};


	constant = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstantContext);
	    } else {
	        return this.getTypedRuleContext(ConstantContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterBlockLit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitBlockLit(this);
		}
	}


}



class EmptyStatement_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_emptyStatement_;
    }

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEmptyStatement_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEmptyStatement_(this);
		}
	}


}



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
        this.ruleIndex = Protobuf3Parser.RULE_ident;
    }

	IDENTIFIER() {
	    return this.getToken(Protobuf3Parser.IDENTIFIER, 0);
	};

	keywords() {
	    return this.getTypedRuleContext(KeywordsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterIdent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitIdent(this);
		}
	}


}



class FullIdentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_fullIdent;
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

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.DOT);
	    } else {
	        return this.getToken(Protobuf3Parser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterFullIdent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitFullIdent(this);
		}
	}


}



class MessageNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_messageName;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterMessageName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitMessageName(this);
		}
	}


}



class EnumNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_enumName;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEnumName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEnumName(this);
		}
	}


}



class FieldNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_fieldName;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterFieldName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitFieldName(this);
		}
	}


}



class OneofNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_oneofName;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterOneofName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitOneofName(this);
		}
	}


}



class MapNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_mapName;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterMapName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitMapName(this);
		}
	}


}



class ServiceNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_serviceName;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterServiceName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitServiceName(this);
		}
	}


}



class RpcNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_rpcName;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterRpcName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitRpcName(this);
		}
	}


}



class MessageTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_messageType;
    }

	messageName() {
	    return this.getTypedRuleContext(MessageNameContext,0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.DOT);
	    } else {
	        return this.getToken(Protobuf3Parser.DOT, i);
	    }
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

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterMessageType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitMessageType(this);
		}
	}


}



class EnumTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_enumType;
    }

	enumName() {
	    return this.getTypedRuleContext(EnumNameContext,0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.DOT);
	    } else {
	        return this.getToken(Protobuf3Parser.DOT, i);
	    }
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

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEnumType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEnumType(this);
		}
	}


}



class IntLitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_intLit;
    }

	INT_LIT() {
	    return this.getToken(Protobuf3Parser.INT_LIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterIntLit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitIntLit(this);
		}
	}


}



class StrLitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_strLit;
    }

	STR_LIT() {
	    return this.getToken(Protobuf3Parser.STR_LIT, 0);
	};

	PROTO3_LIT_SINGLE() {
	    return this.getToken(Protobuf3Parser.PROTO3_LIT_SINGLE, 0);
	};

	PROTO3_LIT_DOBULE() {
	    return this.getToken(Protobuf3Parser.PROTO3_LIT_DOBULE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterStrLit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitStrLit(this);
		}
	}


}



class BoolLitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_boolLit;
    }

	BOOL_LIT() {
	    return this.getToken(Protobuf3Parser.BOOL_LIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterBoolLit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitBoolLit(this);
		}
	}


}



class FloatLitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_floatLit;
    }

	FLOAT_LIT() {
	    return this.getToken(Protobuf3Parser.FLOAT_LIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterFloatLit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitFloatLit(this);
		}
	}


}



class KeywordsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_keywords;
    }

	SYNTAX() {
	    return this.getToken(Protobuf3Parser.SYNTAX, 0);
	};

	IMPORT() {
	    return this.getToken(Protobuf3Parser.IMPORT, 0);
	};

	WEAK() {
	    return this.getToken(Protobuf3Parser.WEAK, 0);
	};

	PUBLIC() {
	    return this.getToken(Protobuf3Parser.PUBLIC, 0);
	};

	PACKAGE() {
	    return this.getToken(Protobuf3Parser.PACKAGE, 0);
	};

	OPTION() {
	    return this.getToken(Protobuf3Parser.OPTION, 0);
	};

	REPEATED() {
	    return this.getToken(Protobuf3Parser.REPEATED, 0);
	};

	ONEOF() {
	    return this.getToken(Protobuf3Parser.ONEOF, 0);
	};

	MAP() {
	    return this.getToken(Protobuf3Parser.MAP, 0);
	};

	INT32() {
	    return this.getToken(Protobuf3Parser.INT32, 0);
	};

	INT64() {
	    return this.getToken(Protobuf3Parser.INT64, 0);
	};

	UINT32() {
	    return this.getToken(Protobuf3Parser.UINT32, 0);
	};

	UINT64() {
	    return this.getToken(Protobuf3Parser.UINT64, 0);
	};

	SINT32() {
	    return this.getToken(Protobuf3Parser.SINT32, 0);
	};

	SINT64() {
	    return this.getToken(Protobuf3Parser.SINT64, 0);
	};

	FIXED32() {
	    return this.getToken(Protobuf3Parser.FIXED32, 0);
	};

	FIXED64() {
	    return this.getToken(Protobuf3Parser.FIXED64, 0);
	};

	SFIXED32() {
	    return this.getToken(Protobuf3Parser.SFIXED32, 0);
	};

	SFIXED64() {
	    return this.getToken(Protobuf3Parser.SFIXED64, 0);
	};

	BOOL() {
	    return this.getToken(Protobuf3Parser.BOOL, 0);
	};

	STRING() {
	    return this.getToken(Protobuf3Parser.STRING, 0);
	};

	DOUBLE() {
	    return this.getToken(Protobuf3Parser.DOUBLE, 0);
	};

	FLOAT() {
	    return this.getToken(Protobuf3Parser.FLOAT, 0);
	};

	BYTES() {
	    return this.getToken(Protobuf3Parser.BYTES, 0);
	};

	RESERVED() {
	    return this.getToken(Protobuf3Parser.RESERVED, 0);
	};

	TO() {
	    return this.getToken(Protobuf3Parser.TO, 0);
	};

	MAX() {
	    return this.getToken(Protobuf3Parser.MAX, 0);
	};

	ENUM() {
	    return this.getToken(Protobuf3Parser.ENUM, 0);
	};

	MESSAGE() {
	    return this.getToken(Protobuf3Parser.MESSAGE, 0);
	};

	SERVICE() {
	    return this.getToken(Protobuf3Parser.SERVICE, 0);
	};

	RPC() {
	    return this.getToken(Protobuf3Parser.RPC, 0);
	};

	STREAM() {
	    return this.getToken(Protobuf3Parser.STREAM, 0);
	};

	RETURNS() {
	    return this.getToken(Protobuf3Parser.RETURNS, 0);
	};

	BOOL_LIT() {
	    return this.getToken(Protobuf3Parser.BOOL_LIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterKeywords(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitKeywords(this);
		}
	}


}




Protobuf3Parser.ProtoContext = ProtoContext; 
Protobuf3Parser.SyntaxContext = SyntaxContext; 
Protobuf3Parser.ImportStatementContext = ImportStatementContext; 
Protobuf3Parser.PackageStatementContext = PackageStatementContext; 
Protobuf3Parser.OptionStatementContext = OptionStatementContext; 
Protobuf3Parser.OptionNameContext = OptionNameContext; 
Protobuf3Parser.FieldContext = FieldContext; 
Protobuf3Parser.FieldOptionsContext = FieldOptionsContext; 
Protobuf3Parser.FieldOptionContext = FieldOptionContext; 
Protobuf3Parser.FieldNumberContext = FieldNumberContext; 
Protobuf3Parser.OneofContext = OneofContext; 
Protobuf3Parser.OneofFieldContext = OneofFieldContext; 
Protobuf3Parser.MapFieldContext = MapFieldContext; 
Protobuf3Parser.KeyTypeContext = KeyTypeContext; 
Protobuf3Parser.Type_Context = Type_Context; 
Protobuf3Parser.ReservedContext = ReservedContext; 
Protobuf3Parser.RangesContext = RangesContext; 
Protobuf3Parser.Range_Context = Range_Context; 
Protobuf3Parser.ReservedFieldNamesContext = ReservedFieldNamesContext; 
Protobuf3Parser.TopLevelDefContext = TopLevelDefContext; 
Protobuf3Parser.EnumDefContext = EnumDefContext; 
Protobuf3Parser.EnumBodyContext = EnumBodyContext; 
Protobuf3Parser.EnumElementContext = EnumElementContext; 
Protobuf3Parser.EnumFieldContext = EnumFieldContext; 
Protobuf3Parser.EnumValueOptionsContext = EnumValueOptionsContext; 
Protobuf3Parser.EnumValueOptionContext = EnumValueOptionContext; 
Protobuf3Parser.MessageDefContext = MessageDefContext; 
Protobuf3Parser.MessageBodyContext = MessageBodyContext; 
Protobuf3Parser.MessageElementContext = MessageElementContext; 
Protobuf3Parser.ServiceDefContext = ServiceDefContext; 
Protobuf3Parser.ServiceElementContext = ServiceElementContext; 
Protobuf3Parser.RpcContext = RpcContext; 
Protobuf3Parser.ConstantContext = ConstantContext; 
Protobuf3Parser.BlockLitContext = BlockLitContext; 
Protobuf3Parser.EmptyStatement_Context = EmptyStatement_Context; 
Protobuf3Parser.IdentContext = IdentContext; 
Protobuf3Parser.FullIdentContext = FullIdentContext; 
Protobuf3Parser.MessageNameContext = MessageNameContext; 
Protobuf3Parser.EnumNameContext = EnumNameContext; 
Protobuf3Parser.FieldNameContext = FieldNameContext; 
Protobuf3Parser.OneofNameContext = OneofNameContext; 
Protobuf3Parser.MapNameContext = MapNameContext; 
Protobuf3Parser.ServiceNameContext = ServiceNameContext; 
Protobuf3Parser.RpcNameContext = RpcNameContext; 
Protobuf3Parser.MessageTypeContext = MessageTypeContext; 
Protobuf3Parser.EnumTypeContext = EnumTypeContext; 
Protobuf3Parser.IntLitContext = IntLitContext; 
Protobuf3Parser.StrLitContext = StrLitContext; 
Protobuf3Parser.BoolLitContext = BoolLitContext; 
Protobuf3Parser.FloatLitContext = FloatLitContext; 
Protobuf3Parser.KeywordsContext = KeywordsContext; 
