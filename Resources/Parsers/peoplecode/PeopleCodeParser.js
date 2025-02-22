// Generated from ./peoplecode/PeopleCode.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import PeopleCodeListener from './PeopleCodeListener.js';
const serializedATN = [4,1,83,466,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,1,0,1,0,1,1,1,1,4,1,
85,8,1,11,1,12,1,86,5,1,89,8,1,10,1,12,1,92,9,1,1,1,3,1,95,8,1,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,3,2,118,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,127,8,2,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,143,8,3,1,3,1,3,1,3,3,3,148,8,
3,1,3,1,3,1,3,1,3,3,3,154,8,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,162,8,3,1,3,1,
3,1,3,1,3,3,3,168,8,3,1,3,1,3,1,3,1,3,3,3,174,8,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,191,8,3,1,3,5,3,194,8,3,10,3,12,
3,197,9,3,1,4,1,4,1,4,5,4,202,8,4,10,4,12,4,205,9,4,1,5,1,5,1,5,1,5,1,5,
5,5,212,8,5,10,5,12,5,215,9,5,1,6,1,6,1,6,3,6,220,8,6,1,7,1,7,1,7,3,7,225,
8,7,1,7,3,7,228,8,7,1,8,1,8,1,8,3,8,233,8,8,1,9,1,9,1,9,5,9,238,8,9,10,9,
12,9,241,9,9,1,9,1,9,1,9,1,10,1,10,1,10,4,10,249,8,10,11,10,12,10,250,1,
11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,14,1,14,
1,14,5,14,269,8,14,10,14,12,14,272,9,14,1,14,1,14,1,15,3,15,277,8,15,1,15,
1,15,5,15,281,8,15,10,15,12,15,284,9,15,4,15,286,8,15,11,15,12,15,287,1,
16,1,16,1,16,1,16,3,16,294,8,16,1,17,1,17,1,17,1,17,3,17,300,8,17,1,18,1,
18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,3,19,311,8,19,1,19,3,19,314,8,19,1,
19,3,19,317,8,19,1,20,1,20,1,20,1,20,1,20,5,20,324,8,20,10,20,12,20,327,
9,20,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,
23,1,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,3,25,351,8,25,1,25,3,25,354,8,
25,1,25,3,25,357,8,25,1,26,1,26,1,26,1,26,5,26,363,8,26,10,26,12,26,366,
9,26,3,26,368,8,26,1,26,1,26,1,27,1,27,1,27,3,27,375,8,27,1,28,1,28,1,28,
1,29,1,29,1,29,1,29,3,29,384,8,29,1,29,1,29,1,29,3,29,389,8,29,1,29,3,29,
392,8,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,405,
8,30,1,30,1,30,1,30,1,31,1,31,1,31,3,31,413,8,31,1,31,1,31,1,31,1,32,1,32,
1,32,4,32,421,8,32,11,32,12,32,422,1,32,3,32,426,8,32,1,32,1,32,1,33,1,33,
1,33,3,33,433,8,33,1,33,1,33,1,33,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,
1,35,1,36,1,36,1,36,1,36,1,37,1,37,1,37,3,37,454,8,37,1,37,1,37,3,37,458,
8,37,1,37,1,37,1,38,1,38,1,39,1,39,1,39,0,1,6,40,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,
68,70,72,74,76,78,0,3,1,0,35,36,1,0,72,75,1,0,76,78,510,0,80,1,0,0,0,2,90,
1,0,0,0,4,126,1,0,0,0,6,142,1,0,0,0,8,198,1,0,0,0,10,206,1,0,0,0,12,216,
1,0,0,0,14,227,1,0,0,0,16,229,1,0,0,0,18,234,1,0,0,0,20,245,1,0,0,0,22,252,
1,0,0,0,24,259,1,0,0,0,26,263,1,0,0,0,28,265,1,0,0,0,30,276,1,0,0,0,32,293,
1,0,0,0,34,295,1,0,0,0,36,301,1,0,0,0,38,306,1,0,0,0,40,318,1,0,0,0,42,328,
1,0,0,0,44,333,1,0,0,0,46,338,1,0,0,0,48,343,1,0,0,0,50,347,1,0,0,0,52,358,
1,0,0,0,54,371,1,0,0,0,56,376,1,0,0,0,58,379,1,0,0,0,60,395,1,0,0,0,62,409,
1,0,0,0,64,417,1,0,0,0,66,429,1,0,0,0,68,437,1,0,0,0,70,440,1,0,0,0,72,446,
1,0,0,0,74,450,1,0,0,0,76,461,1,0,0,0,78,463,1,0,0,0,80,81,3,2,1,0,81,1,
1,0,0,0,82,84,3,4,2,0,83,85,5,1,0,0,84,83,1,0,0,0,85,86,1,0,0,0,86,84,1,
0,0,0,86,87,1,0,0,0,87,89,1,0,0,0,88,82,1,0,0,0,89,92,1,0,0,0,90,88,1,0,
0,0,90,91,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,93,95,3,4,2,0,94,93,1,0,0,
0,94,95,1,0,0,0,95,3,1,0,0,0,96,127,3,16,8,0,97,127,3,22,11,0,98,127,3,28,
14,0,99,127,3,42,21,0,100,127,3,44,22,0,101,127,3,46,23,0,102,127,3,48,24,
0,103,127,3,10,5,0,104,127,3,58,29,0,105,127,3,60,30,0,106,127,3,62,31,0,
107,127,3,64,32,0,108,127,3,70,35,0,109,127,5,2,0,0,110,127,5,3,0,0,111,
112,5,4,0,0,112,127,3,6,3,0,113,114,5,5,0,0,114,127,3,6,3,0,115,117,5,6,
0,0,116,118,3,6,3,0,117,116,1,0,0,0,117,118,1,0,0,0,118,127,1,0,0,0,119,
120,5,7,0,0,120,127,3,6,3,0,121,122,3,6,3,0,122,123,5,8,0,0,123,124,3,6,
3,0,124,127,1,0,0,0,125,127,3,6,3,0,126,96,1,0,0,0,126,97,1,0,0,0,126,98,
1,0,0,0,126,99,1,0,0,0,126,100,1,0,0,0,126,101,1,0,0,0,126,102,1,0,0,0,126,
103,1,0,0,0,126,104,1,0,0,0,126,105,1,0,0,0,126,106,1,0,0,0,126,107,1,0,
0,0,126,108,1,0,0,0,126,109,1,0,0,0,126,110,1,0,0,0,126,111,1,0,0,0,126,
113,1,0,0,0,126,115,1,0,0,0,126,119,1,0,0,0,126,121,1,0,0,0,126,125,1,0,
0,0,127,5,1,0,0,0,128,129,6,3,-1,0,129,130,5,9,0,0,130,131,3,6,3,0,131,132,
5,10,0,0,132,143,1,0,0,0,133,134,5,11,0,0,134,143,3,6,3,15,135,143,3,76,
38,0,136,143,3,78,39,0,137,143,3,74,37,0,138,139,5,15,0,0,139,143,3,6,3,
8,140,141,5,16,0,0,141,143,3,6,3,7,142,128,1,0,0,0,142,133,1,0,0,0,142,135,
1,0,0,0,142,136,1,0,0,0,142,137,1,0,0,0,142,138,1,0,0,0,142,140,1,0,0,0,
143,195,1,0,0,0,144,147,10,6,0,0,145,148,5,17,0,0,146,148,5,18,0,0,147,145,
1,0,0,0,147,146,1,0,0,0,148,149,1,0,0,0,149,194,3,6,3,7,150,153,10,5,0,0,
151,154,5,19,0,0,152,154,5,15,0,0,153,151,1,0,0,0,153,152,1,0,0,0,154,155,
1,0,0,0,155,194,3,6,3,6,156,161,10,4,0,0,157,162,5,20,0,0,158,162,5,21,0,
0,159,162,5,22,0,0,160,162,5,23,0,0,161,157,1,0,0,0,161,158,1,0,0,0,161,
159,1,0,0,0,161,160,1,0,0,0,162,163,1,0,0,0,163,194,3,6,3,5,164,167,10,3,
0,0,165,168,5,8,0,0,166,168,5,24,0,0,167,165,1,0,0,0,167,166,1,0,0,0,168,
169,1,0,0,0,169,194,3,6,3,4,170,173,10,2,0,0,171,174,5,25,0,0,172,174,5,
26,0,0,173,171,1,0,0,0,173,172,1,0,0,0,174,175,1,0,0,0,175,194,3,6,3,3,176,
177,10,1,0,0,177,178,5,27,0,0,178,194,3,6,3,2,179,180,10,11,0,0,180,181,
5,12,0,0,181,194,3,78,39,0,182,183,10,10,0,0,183,184,5,13,0,0,184,185,3,
8,4,0,185,186,5,14,0,0,186,194,1,0,0,0,187,188,10,9,0,0,188,190,5,9,0,0,
189,191,3,8,4,0,190,189,1,0,0,0,190,191,1,0,0,0,191,192,1,0,0,0,192,194,
5,10,0,0,193,144,1,0,0,0,193,150,1,0,0,0,193,156,1,0,0,0,193,164,1,0,0,0,
193,170,1,0,0,0,193,176,1,0,0,0,193,179,1,0,0,0,193,182,1,0,0,0,193,187,
1,0,0,0,194,197,1,0,0,0,195,193,1,0,0,0,195,196,1,0,0,0,196,7,1,0,0,0,197,
195,1,0,0,0,198,203,3,6,3,0,199,200,5,28,0,0,200,202,3,6,3,0,201,199,1,0,
0,0,202,205,1,0,0,0,203,201,1,0,0,0,203,204,1,0,0,0,204,9,1,0,0,0,205,203,
1,0,0,0,206,207,5,78,0,0,207,208,3,14,7,0,208,213,3,12,6,0,209,210,5,28,
0,0,210,212,3,12,6,0,211,209,1,0,0,0,212,215,1,0,0,0,213,211,1,0,0,0,213,
214,1,0,0,0,214,11,1,0,0,0,215,213,1,0,0,0,216,219,5,76,0,0,217,218,5,8,
0,0,218,220,3,6,3,0,219,217,1,0,0,0,219,220,1,0,0,0,220,13,1,0,0,0,221,224,
5,78,0,0,222,223,5,29,0,0,223,225,3,14,7,0,224,222,1,0,0,0,224,225,1,0,0,
0,225,228,1,0,0,0,226,228,3,20,10,0,227,221,1,0,0,0,227,226,1,0,0,0,228,
15,1,0,0,0,229,232,5,30,0,0,230,233,3,18,9,0,231,233,3,20,10,0,232,230,1,
0,0,0,232,231,1,0,0,0,233,17,1,0,0,0,234,239,5,78,0,0,235,236,5,31,0,0,236,
238,5,78,0,0,237,235,1,0,0,0,238,241,1,0,0,0,239,237,1,0,0,0,239,240,1,0,
0,0,240,242,1,0,0,0,241,239,1,0,0,0,242,243,5,31,0,0,243,244,5,17,0,0,244,
19,1,0,0,0,245,248,5,78,0,0,246,247,5,31,0,0,247,249,5,78,0,0,248,246,1,
0,0,0,249,250,1,0,0,0,250,248,1,0,0,0,250,251,1,0,0,0,251,21,1,0,0,0,252,
253,5,32,0,0,253,254,5,33,0,0,254,255,5,78,0,0,255,256,5,34,0,0,256,257,
3,24,12,0,257,258,3,26,13,0,258,23,1,0,0,0,259,260,5,78,0,0,260,261,5,12,
0,0,261,262,5,78,0,0,262,25,1,0,0,0,263,264,7,0,0,0,264,27,1,0,0,0,265,266,
5,37,0,0,266,270,5,78,0,0,267,269,3,30,15,0,268,267,1,0,0,0,269,272,1,0,
0,0,270,268,1,0,0,0,270,271,1,0,0,0,271,273,1,0,0,0,272,270,1,0,0,0,273,
274,5,38,0,0,274,29,1,0,0,0,275,277,5,39,0,0,276,275,1,0,0,0,276,277,1,0,
0,0,277,285,1,0,0,0,278,282,3,32,16,0,279,281,5,1,0,0,280,279,1,0,0,0,281,
284,1,0,0,0,282,280,1,0,0,0,282,283,1,0,0,0,283,286,1,0,0,0,284,282,1,0,
0,0,285,278,1,0,0,0,286,287,1,0,0,0,287,285,1,0,0,0,287,288,1,0,0,0,288,
31,1,0,0,0,289,294,3,34,17,0,290,294,3,36,18,0,291,294,3,38,19,0,292,294,
3,40,20,0,293,289,1,0,0,0,293,290,1,0,0,0,293,291,1,0,0,0,293,292,1,0,0,
0,294,33,1,0,0,0,295,296,5,40,0,0,296,297,5,78,0,0,297,299,3,52,26,0,298,
300,3,56,28,0,299,298,1,0,0,0,299,300,1,0,0,0,300,35,1,0,0,0,301,302,5,41,
0,0,302,303,5,76,0,0,303,304,5,8,0,0,304,305,3,6,3,0,305,37,1,0,0,0,306,
307,5,42,0,0,307,308,3,14,7,0,308,310,5,78,0,0,309,311,5,43,0,0,310,309,
1,0,0,0,310,311,1,0,0,0,311,313,1,0,0,0,312,314,5,44,0,0,313,312,1,0,0,0,
313,314,1,0,0,0,314,316,1,0,0,0,315,317,5,45,0,0,316,315,1,0,0,0,316,317,
1,0,0,0,317,39,1,0,0,0,318,319,5,46,0,0,319,320,3,14,7,0,320,325,5,76,0,
0,321,322,5,28,0,0,322,324,5,76,0,0,323,321,1,0,0,0,324,327,1,0,0,0,325,
323,1,0,0,0,325,326,1,0,0,0,326,41,1,0,0,0,327,325,1,0,0,0,328,329,5,40,
0,0,329,330,5,78,0,0,330,331,3,2,1,0,331,332,5,47,0,0,332,43,1,0,0,0,333,
334,5,43,0,0,334,335,5,78,0,0,335,336,3,2,1,0,336,337,5,48,0,0,337,45,1,
0,0,0,338,339,5,44,0,0,339,340,5,78,0,0,340,341,3,2,1,0,341,342,5,49,0,0,
342,47,1,0,0,0,343,344,3,50,25,0,344,345,3,2,1,0,345,346,5,50,0,0,346,49,
1,0,0,0,347,348,5,33,0,0,348,350,5,78,0,0,349,351,3,52,26,0,350,349,1,0,
0,0,350,351,1,0,0,0,351,353,1,0,0,0,352,354,3,56,28,0,353,352,1,0,0,0,353,
354,1,0,0,0,354,356,1,0,0,0,355,357,5,1,0,0,356,355,1,0,0,0,356,357,1,0,
0,0,357,51,1,0,0,0,358,367,5,9,0,0,359,364,3,54,27,0,360,361,5,28,0,0,361,
363,3,54,27,0,362,360,1,0,0,0,363,366,1,0,0,0,364,362,1,0,0,0,364,365,1,
0,0,0,365,368,1,0,0,0,366,364,1,0,0,0,367,359,1,0,0,0,367,368,1,0,0,0,368,
369,1,0,0,0,369,370,5,10,0,0,370,53,1,0,0,0,371,374,5,76,0,0,372,373,5,51,
0,0,373,375,3,14,7,0,374,372,1,0,0,0,374,375,1,0,0,0,375,55,1,0,0,0,376,
377,5,52,0,0,377,378,3,14,7,0,378,57,1,0,0,0,379,380,5,53,0,0,380,381,3,
6,3,0,381,383,5,54,0,0,382,384,5,1,0,0,383,382,1,0,0,0,383,384,1,0,0,0,384,
385,1,0,0,0,385,391,3,2,1,0,386,388,5,55,0,0,387,389,5,1,0,0,388,387,1,0,
0,0,388,389,1,0,0,0,389,390,1,0,0,0,390,392,3,2,1,0,391,386,1,0,0,0,391,
392,1,0,0,0,392,393,1,0,0,0,393,394,5,56,0,0,394,59,1,0,0,0,395,396,5,57,
0,0,396,397,5,76,0,0,397,398,5,8,0,0,398,399,3,6,3,0,399,400,5,58,0,0,400,
404,3,6,3,0,401,405,5,1,0,0,402,403,5,59,0,0,403,405,3,6,3,0,404,401,1,0,
0,0,404,402,1,0,0,0,404,405,1,0,0,0,405,406,1,0,0,0,406,407,3,2,1,0,407,
408,5,60,0,0,408,61,1,0,0,0,409,410,5,61,0,0,410,412,3,6,3,0,411,413,5,1,
0,0,412,411,1,0,0,0,412,413,1,0,0,0,413,414,1,0,0,0,414,415,3,2,1,0,415,
416,5,62,0,0,416,63,1,0,0,0,417,418,5,63,0,0,418,420,3,6,3,0,419,421,3,66,
33,0,420,419,1,0,0,0,421,422,1,0,0,0,422,420,1,0,0,0,422,423,1,0,0,0,423,
425,1,0,0,0,424,426,3,68,34,0,425,424,1,0,0,0,425,426,1,0,0,0,426,427,1,
0,0,0,427,428,5,64,0,0,428,65,1,0,0,0,429,432,5,65,0,0,430,433,5,8,0,0,431,
433,5,23,0,0,432,430,1,0,0,0,432,431,1,0,0,0,432,433,1,0,0,0,433,434,1,0,
0,0,434,435,3,6,3,0,435,436,3,2,1,0,436,67,1,0,0,0,437,438,5,66,0,0,438,
439,3,2,1,0,439,69,1,0,0,0,440,441,5,67,0,0,441,442,3,2,1,0,442,443,3,72,
36,0,443,444,3,2,1,0,444,445,5,68,0,0,445,71,1,0,0,0,446,447,5,69,0,0,447,
448,5,70,0,0,448,449,5,76,0,0,449,73,1,0,0,0,450,453,5,71,0,0,451,454,3,
20,10,0,452,454,5,78,0,0,453,451,1,0,0,0,453,452,1,0,0,0,454,455,1,0,0,0,
455,457,5,9,0,0,456,458,3,8,4,0,457,456,1,0,0,0,457,458,1,0,0,0,458,459,
1,0,0,0,459,460,5,10,0,0,460,75,1,0,0,0,461,462,7,1,0,0,462,77,1,0,0,0,463,
464,7,2,0,0,464,79,1,0,0,0,48,86,90,94,117,126,142,147,153,161,167,173,190,
193,195,203,213,219,224,227,232,239,250,270,276,282,287,293,299,310,313,
316,325,350,353,356,364,367,374,383,388,391,404,412,422,425,432,453,457];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PeopleCodeParser extends antlr4.Parser {

    static grammarFileName = "PeopleCode.g4";
    static literalNames = [ null, "';'", "'Exit'", "'Break'", "'Error'", 
                            "'Warning'", "'Return'", "'throw'", "'='", "'('", 
                            "')'", "'@'", "'.'", "'['", "']'", "'-'", "'Not'", 
                            "'*'", "'/'", "'+'", "'<='", "'>='", "'<'", 
                            "'>'", "'<>'", "'And'", "'Or'", "'|'", "','", 
                            "'of'", "'import'", "':'", "'Declare'", "'Function'", 
                            "'PeopleCode'", "'FieldFormula'", "'FieldChange'", 
                            "'class'", "'end-class'", "'private'", "'method'", 
                            "'Constant'", "'property'", "'get'", "'set'", 
                            "'readonly'", "'instance'", "'end-method'", 
                            "'end-get'", "'end-set'", "'End-Function'", 
                            "'As'", "'Returns'", "'If'", "'Then'", "'Else'", 
                            "'End-If'", "'For'", "'To'", "'Step'", "'End-For'", 
                            "'While'", "'End-While'", "'Evaluate'", "'End-Evaluate'", 
                            "'When'", "'When-Other'", "'try'", "'end-try'", 
                            "'catch'", "'Exception'", "'create'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "DecimalLiteral", "IntegerLiteral", "StringLiteral", 
                             "BoolLiteral", "VAR_ID", "SYS_VAR_ID", "GENERIC_ID", 
                             "REM", "COMMENT_1", "COMMENT_2", "COMMENT_3", 
                             "WS" ];
    static ruleNames = [ "program", "stmtList", "stmt", "expr", "exprList", 
                         "varDeclaration", "varDeclarator", "varType", "appClassImport", 
                         "appPkgPath", "appClassPath", "extFuncImport", 
                         "recDefnPath", "event", "classDeclaration", "classBlock", 
                         "classBlockStmt", "method", "constant", "property_", 
                         "instance", "methodImpl", "getImpl", "setImpl", 
                         "funcImpl", "funcSignature", "formalParamList", 
                         "param", "returnType", "ifStmt", "forStmt", "whileStmt", 
                         "evaluateStmt", "whenBranch", "whenOtherBranch", 
                         "tryCatchStmt", "catchSignature", "createInvocation", 
                         "literal", "id_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PeopleCodeParser.ruleNames;
        this.literalNames = PeopleCodeParser.literalNames;
        this.symbolicNames = PeopleCodeParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 3:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		case 2:
    			return this.precpred(this._ctx, 4);
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		case 5:
    			return this.precpred(this._ctx, 1);
    		case 6:
    			return this.precpred(this._ctx, 11);
    		case 7:
    			return this.precpred(this._ctx, 10);
    		case 8:
    			return this.precpred(this._ctx, 9);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PeopleCodeParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.stmtList();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stmtList() {
	    let localctx = new StmtListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PeopleCodeParser.RULE_stmtList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 82;
	                this.stmt();
	                this.state = 84; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 83;
	                    this.match(PeopleCodeParser.T__0);
	                    this.state = 86; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===PeopleCodeParser.T__0); 
	            }
	            this.state = 92;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PeopleCodeParser.T__1) | (1 << PeopleCodeParser.T__2) | (1 << PeopleCodeParser.T__3) | (1 << PeopleCodeParser.T__4) | (1 << PeopleCodeParser.T__5) | (1 << PeopleCodeParser.T__6) | (1 << PeopleCodeParser.T__8) | (1 << PeopleCodeParser.T__10) | (1 << PeopleCodeParser.T__14) | (1 << PeopleCodeParser.T__15) | (1 << PeopleCodeParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (PeopleCodeParser.T__31 - 32)) | (1 << (PeopleCodeParser.T__32 - 32)) | (1 << (PeopleCodeParser.T__36 - 32)) | (1 << (PeopleCodeParser.T__39 - 32)) | (1 << (PeopleCodeParser.T__42 - 32)) | (1 << (PeopleCodeParser.T__43 - 32)) | (1 << (PeopleCodeParser.T__52 - 32)) | (1 << (PeopleCodeParser.T__56 - 32)) | (1 << (PeopleCodeParser.T__60 - 32)) | (1 << (PeopleCodeParser.T__62 - 32)))) !== 0) || ((((_la - 67)) & ~0x1f) == 0 && ((1 << (_la - 67)) & ((1 << (PeopleCodeParser.T__66 - 67)) | (1 << (PeopleCodeParser.T__70 - 67)) | (1 << (PeopleCodeParser.DecimalLiteral - 67)) | (1 << (PeopleCodeParser.IntegerLiteral - 67)) | (1 << (PeopleCodeParser.StringLiteral - 67)) | (1 << (PeopleCodeParser.BoolLiteral - 67)) | (1 << (PeopleCodeParser.VAR_ID - 67)) | (1 << (PeopleCodeParser.SYS_VAR_ID - 67)) | (1 << (PeopleCodeParser.GENERIC_ID - 67)))) !== 0)) {
	            this.state = 93;
	            this.stmt();
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



	stmt() {
	    let localctx = new StmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PeopleCodeParser.RULE_stmt);
	    var _la = 0; // Token type
	    try {
	        this.state = 126;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new StmtAppClassImportContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 96;
	            this.appClassImport();
	            break;

	        case 2:
	            localctx = new StmtExternalFuncImportContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.extFuncImport();
	            break;

	        case 3:
	            localctx = new StmtClassDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 98;
	            this.classDeclaration();
	            break;

	        case 4:
	            localctx = new StmtMethodImplContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 99;
	            this.methodImpl();
	            break;

	        case 5:
	            localctx = new StmtGetImplContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 100;
	            this.getImpl();
	            break;

	        case 6:
	            localctx = new StmtSetImplContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 101;
	            this.setImpl();
	            break;

	        case 7:
	            localctx = new StmtFuncImplContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 102;
	            this.funcImpl();
	            break;

	        case 8:
	            localctx = new StmtVarDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 103;
	            this.varDeclaration();
	            break;

	        case 9:
	            localctx = new StmtIfContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 104;
	            this.ifStmt();
	            break;

	        case 10:
	            localctx = new StmtForContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 105;
	            this.forStmt();
	            break;

	        case 11:
	            localctx = new StmtWhileContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 106;
	            this.whileStmt();
	            break;

	        case 12:
	            localctx = new StmtEvaluateContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 107;
	            this.evaluateStmt();
	            break;

	        case 13:
	            localctx = new StmtTryCatchContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 108;
	            this.tryCatchStmt();
	            break;

	        case 14:
	            localctx = new StmtExitContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 109;
	            this.match(PeopleCodeParser.T__1);
	            break;

	        case 15:
	            localctx = new StmtBreakContext(this, localctx);
	            this.enterOuterAlt(localctx, 15);
	            this.state = 110;
	            this.match(PeopleCodeParser.T__2);
	            break;

	        case 16:
	            localctx = new StmtErrorContext(this, localctx);
	            this.enterOuterAlt(localctx, 16);
	            this.state = 111;
	            this.match(PeopleCodeParser.T__3);
	            this.state = 112;
	            this.expr(0);
	            break;

	        case 17:
	            localctx = new StmtWarningContext(this, localctx);
	            this.enterOuterAlt(localctx, 17);
	            this.state = 113;
	            this.match(PeopleCodeParser.T__4);
	            this.state = 114;
	            this.expr(0);
	            break;

	        case 18:
	            localctx = new StmtReturnContext(this, localctx);
	            this.enterOuterAlt(localctx, 18);
	            this.state = 115;
	            this.match(PeopleCodeParser.T__5);
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PeopleCodeParser.T__8) | (1 << PeopleCodeParser.T__10) | (1 << PeopleCodeParser.T__14) | (1 << PeopleCodeParser.T__15))) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (PeopleCodeParser.T__70 - 71)) | (1 << (PeopleCodeParser.DecimalLiteral - 71)) | (1 << (PeopleCodeParser.IntegerLiteral - 71)) | (1 << (PeopleCodeParser.StringLiteral - 71)) | (1 << (PeopleCodeParser.BoolLiteral - 71)) | (1 << (PeopleCodeParser.VAR_ID - 71)) | (1 << (PeopleCodeParser.SYS_VAR_ID - 71)) | (1 << (PeopleCodeParser.GENERIC_ID - 71)))) !== 0)) {
	                this.state = 116;
	                this.expr(0);
	            }

	            break;

	        case 19:
	            localctx = new StmtThrowContext(this, localctx);
	            this.enterOuterAlt(localctx, 19);
	            this.state = 119;
	            this.match(PeopleCodeParser.T__6);
	            this.state = 120;
	            this.expr(0);
	            break;

	        case 20:
	            localctx = new StmtAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 20);
	            this.state = 121;
	            this.expr(0);
	            this.state = 122;
	            this.match(PeopleCodeParser.T__7);
	            this.state = 123;
	            this.expr(0);
	            break;

	        case 21:
	            localctx = new StmtExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 21);
	            this.state = 125;
	            this.expr(0);
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, PeopleCodeParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PeopleCodeParser.T__8:
	            localctx = new ExprParenthesizedContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 129;
	            this.match(PeopleCodeParser.T__8);
	            this.state = 130;
	            this.expr(0);
	            this.state = 131;
	            this.match(PeopleCodeParser.T__9);
	            break;
	        case PeopleCodeParser.T__10:
	            localctx = new ExprDynamicReferenceContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 133;
	            this.match(PeopleCodeParser.T__10);
	            this.state = 134;
	            this.expr(15);
	            break;
	        case PeopleCodeParser.DecimalLiteral:
	        case PeopleCodeParser.IntegerLiteral:
	        case PeopleCodeParser.StringLiteral:
	        case PeopleCodeParser.BoolLiteral:
	            localctx = new ExprLiteralContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 135;
	            this.literal();
	            break;
	        case PeopleCodeParser.VAR_ID:
	        case PeopleCodeParser.SYS_VAR_ID:
	        case PeopleCodeParser.GENERIC_ID:
	            localctx = new ExprIdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 136;
	            this.id_();
	            break;
	        case PeopleCodeParser.T__70:
	            localctx = new ExprCreateContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 137;
	            this.createInvocation();
	            break;
	        case PeopleCodeParser.T__14:
	            localctx = new ExprNegateContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 138;
	            this.match(PeopleCodeParser.T__14);
	            this.state = 139;
	            this.expr(8);
	            break;
	        case PeopleCodeParser.T__15:
	            localctx = new ExprNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 140;
	            this.match(PeopleCodeParser.T__15);
	            this.state = 141;
	            this.expr(7);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 195;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 193;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprMulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 144;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 147;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case PeopleCodeParser.T__16:
	                        this.state = 145;
	                        localctx.m = this.match(PeopleCodeParser.T__16);
	                        break;
	                    case PeopleCodeParser.T__17:
	                        this.state = 146;
	                        localctx.d = this.match(PeopleCodeParser.T__17);
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 149;
	                    this.expr(7);
	                    break;

	                case 2:
	                    localctx = new ExprAddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 150;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 153;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case PeopleCodeParser.T__18:
	                        this.state = 151;
	                        localctx.a = this.match(PeopleCodeParser.T__18);
	                        break;
	                    case PeopleCodeParser.T__14:
	                        this.state = 152;
	                        localctx.s = this.match(PeopleCodeParser.T__14);
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 155;
	                    this.expr(6);
	                    break;

	                case 3:
	                    localctx = new ExprComparisonContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 156;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 161;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case PeopleCodeParser.T__19:
	                        this.state = 157;
	                        localctx.le = this.match(PeopleCodeParser.T__19);
	                        break;
	                    case PeopleCodeParser.T__20:
	                        this.state = 158;
	                        localctx.ge = this.match(PeopleCodeParser.T__20);
	                        break;
	                    case PeopleCodeParser.T__21:
	                        this.state = 159;
	                        localctx.l = this.match(PeopleCodeParser.T__21);
	                        break;
	                    case PeopleCodeParser.T__22:
	                        this.state = 160;
	                        localctx.g = this.match(PeopleCodeParser.T__22);
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 163;
	                    this.expr(5);
	                    break;

	                case 4:
	                    localctx = new ExprEqualityContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 164;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 167;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case PeopleCodeParser.T__7:
	                        this.state = 165;
	                        localctx.e = this.match(PeopleCodeParser.T__7);
	                        break;
	                    case PeopleCodeParser.T__23:
	                        this.state = 166;
	                        localctx.i = this.match(PeopleCodeParser.T__23);
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 169;
	                    this.expr(4);
	                    break;

	                case 5:
	                    localctx = new ExprBooleanContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 170;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 173;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case PeopleCodeParser.T__24:
	                        this.state = 171;
	                        localctx.op = this.match(PeopleCodeParser.T__24);
	                        break;
	                    case PeopleCodeParser.T__25:
	                        this.state = 172;
	                        localctx.op = this.match(PeopleCodeParser.T__25);
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 175;
	                    this.expr(3);
	                    break;

	                case 6:
	                    localctx = new ExprConcatContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 176;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 177;
	                    this.match(PeopleCodeParser.T__26);
	                    this.state = 178;
	                    this.expr(2);
	                    break;

	                case 7:
	                    localctx = new ExprDotAccessContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 179;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 180;
	                    this.match(PeopleCodeParser.T__11);
	                    this.state = 181;
	                    this.id_();
	                    break;

	                case 8:
	                    localctx = new ExprArrayIndexContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 182;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 183;
	                    this.match(PeopleCodeParser.T__12);
	                    this.state = 184;
	                    this.exprList();
	                    this.state = 185;
	                    this.match(PeopleCodeParser.T__13);
	                    break;

	                case 9:
	                    localctx = new ExprFnOrIdxCallContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, PeopleCodeParser.RULE_expr);
	                    this.state = 187;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 188;
	                    this.match(PeopleCodeParser.T__8);
	                    this.state = 190;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PeopleCodeParser.T__8) | (1 << PeopleCodeParser.T__10) | (1 << PeopleCodeParser.T__14) | (1 << PeopleCodeParser.T__15))) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (PeopleCodeParser.T__70 - 71)) | (1 << (PeopleCodeParser.DecimalLiteral - 71)) | (1 << (PeopleCodeParser.IntegerLiteral - 71)) | (1 << (PeopleCodeParser.StringLiteral - 71)) | (1 << (PeopleCodeParser.BoolLiteral - 71)) | (1 << (PeopleCodeParser.VAR_ID - 71)) | (1 << (PeopleCodeParser.SYS_VAR_ID - 71)) | (1 << (PeopleCodeParser.GENERIC_ID - 71)))) !== 0)) {
	                        this.state = 189;
	                        this.exprList();
	                    }

	                    this.state = 192;
	                    this.match(PeopleCodeParser.T__9);
	                    break;

	                } 
	            }
	            this.state = 197;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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



	exprList() {
	    let localctx = new ExprListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PeopleCodeParser.RULE_exprList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.expr(0);
	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===PeopleCodeParser.T__27) {
	            this.state = 199;
	            this.match(PeopleCodeParser.T__27);
	            this.state = 200;
	            this.expr(0);
	            this.state = 205;
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



	varDeclaration() {
	    let localctx = new VarDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PeopleCodeParser.RULE_varDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        localctx.varScope = this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 207;
	        this.varType();
	        this.state = 208;
	        this.varDeclarator();
	        this.state = 213;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===PeopleCodeParser.T__27) {
	            this.state = 209;
	            this.match(PeopleCodeParser.T__27);
	            this.state = 210;
	            this.varDeclarator();
	            this.state = 215;
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



	varDeclarator() {
	    let localctx = new VarDeclaratorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PeopleCodeParser.RULE_varDeclarator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.match(PeopleCodeParser.VAR_ID);
	        this.state = 219;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PeopleCodeParser.T__7) {
	            this.state = 217;
	            this.match(PeopleCodeParser.T__7);
	            this.state = 218;
	            this.expr(0);
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



	varType() {
	    let localctx = new VarTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PeopleCodeParser.RULE_varType);
	    var _la = 0; // Token type
	    try {
	        this.state = 227;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 221;
	            this.match(PeopleCodeParser.GENERIC_ID);
	            this.state = 224;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PeopleCodeParser.T__28) {
	                this.state = 222;
	                this.match(PeopleCodeParser.T__28);
	                this.state = 223;
	                this.varType();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 226;
	            this.appClassPath();
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



	appClassImport() {
	    let localctx = new AppClassImportContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PeopleCodeParser.RULE_appClassImport);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.match(PeopleCodeParser.T__29);
	        this.state = 232;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 230;
	            this.appPkgPath();
	            break;

	        case 2:
	            this.state = 231;
	            this.appClassPath();
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



	appPkgPath() {
	    let localctx = new AppPkgPathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PeopleCodeParser.RULE_appPkgPath);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 239;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 235;
	                this.match(PeopleCodeParser.T__30);
	                this.state = 236;
	                this.match(PeopleCodeParser.GENERIC_ID); 
	            }
	            this.state = 241;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	        }

	        this.state = 242;
	        this.match(PeopleCodeParser.T__30);
	        this.state = 243;
	        this.match(PeopleCodeParser.T__16);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	appClassPath() {
	    let localctx = new AppClassPathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PeopleCodeParser.RULE_appClassPath);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 248; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 246;
	            this.match(PeopleCodeParser.T__30);
	            this.state = 247;
	            this.match(PeopleCodeParser.GENERIC_ID);
	            this.state = 250; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===PeopleCodeParser.T__30);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	extFuncImport() {
	    let localctx = new ExtFuncImportContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, PeopleCodeParser.RULE_extFuncImport);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 252;
	        this.match(PeopleCodeParser.T__31);
	        this.state = 253;
	        this.match(PeopleCodeParser.T__32);
	        this.state = 254;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 255;
	        this.match(PeopleCodeParser.T__33);
	        this.state = 256;
	        this.recDefnPath();
	        this.state = 257;
	        this.event();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	recDefnPath() {
	    let localctx = new RecDefnPathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, PeopleCodeParser.RULE_recDefnPath);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 260;
	        this.match(PeopleCodeParser.T__11);
	        this.state = 261;
	        this.match(PeopleCodeParser.GENERIC_ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	event() {
	    let localctx = new EventContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, PeopleCodeParser.RULE_event);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        _la = this._input.LA(1);
	        if(!(_la===PeopleCodeParser.T__34 || _la===PeopleCodeParser.T__35)) {
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



	classDeclaration() {
	    let localctx = new ClassDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, PeopleCodeParser.RULE_classDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this.match(PeopleCodeParser.T__36);
	        this.state = 266;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 270;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (PeopleCodeParser.T__38 - 39)) | (1 << (PeopleCodeParser.T__39 - 39)) | (1 << (PeopleCodeParser.T__40 - 39)) | (1 << (PeopleCodeParser.T__41 - 39)) | (1 << (PeopleCodeParser.T__45 - 39)))) !== 0)) {
	            this.state = 267;
	            this.classBlock();
	            this.state = 272;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 273;
	        this.match(PeopleCodeParser.T__37);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classBlock() {
	    let localctx = new ClassBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, PeopleCodeParser.RULE_classBlock);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PeopleCodeParser.T__38) {
	            this.state = 275;
	            localctx.aLvl = this.match(PeopleCodeParser.T__38);
	        }

	        this.state = 285; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 278;
	        		this.classBlockStmt();
	        		this.state = 282;
	        		this._errHandler.sync(this);
	        		_la = this._input.LA(1);
	        		while(_la===PeopleCodeParser.T__0) {
	        		    this.state = 279;
	        		    this.match(PeopleCodeParser.T__0);
	        		    this.state = 284;
	        		    this._errHandler.sync(this);
	        		    _la = this._input.LA(1);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 287; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,25, this._ctx);
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



	classBlockStmt() {
	    let localctx = new ClassBlockStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, PeopleCodeParser.RULE_classBlockStmt);
	    try {
	        this.state = 293;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PeopleCodeParser.T__39:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 289;
	            this.method();
	            break;
	        case PeopleCodeParser.T__40:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 290;
	            this.constant();
	            break;
	        case PeopleCodeParser.T__41:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 291;
	            this.property_();
	            break;
	        case PeopleCodeParser.T__45:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 292;
	            this.instance();
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



	method() {
	    let localctx = new MethodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, PeopleCodeParser.RULE_method);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 295;
	        this.match(PeopleCodeParser.T__39);
	        this.state = 296;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 297;
	        this.formalParamList();
	        this.state = 299;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PeopleCodeParser.T__51) {
	            this.state = 298;
	            this.returnType();
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
	    this.enterRule(localctx, 36, PeopleCodeParser.RULE_constant);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 301;
	        this.match(PeopleCodeParser.T__40);
	        this.state = 302;
	        this.match(PeopleCodeParser.VAR_ID);
	        this.state = 303;
	        this.match(PeopleCodeParser.T__7);
	        this.state = 304;
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



	property_() {
	    let localctx = new Property_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, PeopleCodeParser.RULE_property_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this.match(PeopleCodeParser.T__41);
	        this.state = 307;
	        this.varType();
	        this.state = 308;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 310;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PeopleCodeParser.T__42) {
	            this.state = 309;
	            localctx.g = this.match(PeopleCodeParser.T__42);
	        }

	        this.state = 313;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PeopleCodeParser.T__43) {
	            this.state = 312;
	            localctx.s = this.match(PeopleCodeParser.T__43);
	        }

	        this.state = 316;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PeopleCodeParser.T__44) {
	            this.state = 315;
	            localctx.r = this.match(PeopleCodeParser.T__44);
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



	instance() {
	    let localctx = new InstanceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, PeopleCodeParser.RULE_instance);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
	        this.match(PeopleCodeParser.T__45);
	        this.state = 319;
	        this.varType();
	        this.state = 320;
	        this.match(PeopleCodeParser.VAR_ID);
	        this.state = 325;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===PeopleCodeParser.T__27) {
	            this.state = 321;
	            this.match(PeopleCodeParser.T__27);
	            this.state = 322;
	            this.match(PeopleCodeParser.VAR_ID);
	            this.state = 327;
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



	methodImpl() {
	    let localctx = new MethodImplContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, PeopleCodeParser.RULE_methodImpl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
	        this.match(PeopleCodeParser.T__39);
	        this.state = 329;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 330;
	        this.stmtList();
	        this.state = 331;
	        localctx.endmethod = this.match(PeopleCodeParser.T__46);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	getImpl() {
	    let localctx = new GetImplContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, PeopleCodeParser.RULE_getImpl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 333;
	        this.match(PeopleCodeParser.T__42);
	        this.state = 334;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 335;
	        this.stmtList();
	        this.state = 336;
	        localctx.endget = this.match(PeopleCodeParser.T__47);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setImpl() {
	    let localctx = new SetImplContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, PeopleCodeParser.RULE_setImpl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 338;
	        this.match(PeopleCodeParser.T__43);
	        this.state = 339;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 340;
	        this.stmtList();
	        this.state = 341;
	        localctx.endset = this.match(PeopleCodeParser.T__48);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcImpl() {
	    let localctx = new FuncImplContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, PeopleCodeParser.RULE_funcImpl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        this.funcSignature();
	        this.state = 344;
	        this.stmtList();
	        this.state = 345;
	        localctx.endfunction = this.match(PeopleCodeParser.T__49);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcSignature() {
	    let localctx = new FuncSignatureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, PeopleCodeParser.RULE_funcSignature);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        this.match(PeopleCodeParser.T__32);
	        this.state = 348;
	        this.match(PeopleCodeParser.GENERIC_ID);
	        this.state = 350;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        if(la_===1) {
	            this.state = 349;
	            this.formalParamList();

	        }
	        this.state = 353;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PeopleCodeParser.T__51) {
	            this.state = 352;
	            this.returnType();
	        }

	        this.state = 356;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PeopleCodeParser.T__0) {
	            this.state = 355;
	            this.match(PeopleCodeParser.T__0);
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



	formalParamList() {
	    let localctx = new FormalParamListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, PeopleCodeParser.RULE_formalParamList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
	        this.match(PeopleCodeParser.T__8);
	        this.state = 367;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PeopleCodeParser.VAR_ID) {
	            this.state = 359;
	            this.param();
	            this.state = 364;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===PeopleCodeParser.T__27) {
	                this.state = 360;
	                this.match(PeopleCodeParser.T__27);
	                this.state = 361;
	                this.param();
	                this.state = 366;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 369;
	        this.match(PeopleCodeParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, PeopleCodeParser.RULE_param);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        this.match(PeopleCodeParser.VAR_ID);
	        this.state = 374;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PeopleCodeParser.T__50) {
	            this.state = 372;
	            this.match(PeopleCodeParser.T__50);
	            this.state = 373;
	            this.varType();
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



	returnType() {
	    let localctx = new ReturnTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, PeopleCodeParser.RULE_returnType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 376;
	        this.match(PeopleCodeParser.T__51);
	        this.state = 377;
	        this.varType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStmt() {
	    let localctx = new IfStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, PeopleCodeParser.RULE_ifStmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this.match(PeopleCodeParser.T__52);
	        this.state = 380;
	        this.expr(0);
	        this.state = 381;
	        this.match(PeopleCodeParser.T__53);
	        this.state = 383;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PeopleCodeParser.T__0) {
	            this.state = 382;
	            this.match(PeopleCodeParser.T__0);
	        }

	        this.state = 385;
	        this.stmtList();
	        this.state = 391;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PeopleCodeParser.T__54) {
	            this.state = 386;
	            localctx.elsetok = this.match(PeopleCodeParser.T__54);
	            this.state = 388;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PeopleCodeParser.T__0) {
	                this.state = 387;
	                this.match(PeopleCodeParser.T__0);
	            }

	            this.state = 390;
	            this.stmtList();
	        }

	        this.state = 393;
	        localctx.endif = this.match(PeopleCodeParser.T__55);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStmt() {
	    let localctx = new ForStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, PeopleCodeParser.RULE_forStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
	        this.match(PeopleCodeParser.T__56);
	        this.state = 396;
	        this.match(PeopleCodeParser.VAR_ID);
	        this.state = 397;
	        this.match(PeopleCodeParser.T__7);
	        this.state = 398;
	        this.expr(0);
	        this.state = 399;
	        this.match(PeopleCodeParser.T__57);
	        this.state = 400;
	        this.expr(0);
	        this.state = 404;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case PeopleCodeParser.T__0:
	        	this.state = 401;
	        	this.match(PeopleCodeParser.T__0);
	        	break;
	        case PeopleCodeParser.T__58:
	        	this.state = 402;
	        	this.match(PeopleCodeParser.T__58);
	        	this.state = 403;
	        	this.expr(0);
	        	break;
	        case PeopleCodeParser.T__1:
	        case PeopleCodeParser.T__2:
	        case PeopleCodeParser.T__3:
	        case PeopleCodeParser.T__4:
	        case PeopleCodeParser.T__5:
	        case PeopleCodeParser.T__6:
	        case PeopleCodeParser.T__8:
	        case PeopleCodeParser.T__10:
	        case PeopleCodeParser.T__14:
	        case PeopleCodeParser.T__15:
	        case PeopleCodeParser.T__29:
	        case PeopleCodeParser.T__31:
	        case PeopleCodeParser.T__32:
	        case PeopleCodeParser.T__36:
	        case PeopleCodeParser.T__39:
	        case PeopleCodeParser.T__42:
	        case PeopleCodeParser.T__43:
	        case PeopleCodeParser.T__52:
	        case PeopleCodeParser.T__56:
	        case PeopleCodeParser.T__59:
	        case PeopleCodeParser.T__60:
	        case PeopleCodeParser.T__62:
	        case PeopleCodeParser.T__66:
	        case PeopleCodeParser.T__70:
	        case PeopleCodeParser.DecimalLiteral:
	        case PeopleCodeParser.IntegerLiteral:
	        case PeopleCodeParser.StringLiteral:
	        case PeopleCodeParser.BoolLiteral:
	        case PeopleCodeParser.VAR_ID:
	        case PeopleCodeParser.SYS_VAR_ID:
	        case PeopleCodeParser.GENERIC_ID:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 406;
	        this.stmtList();
	        this.state = 407;
	        localctx.endfor = this.match(PeopleCodeParser.T__59);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStmt() {
	    let localctx = new WhileStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, PeopleCodeParser.RULE_whileStmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 409;
	        this.match(PeopleCodeParser.T__60);
	        this.state = 410;
	        this.expr(0);
	        this.state = 412;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PeopleCodeParser.T__0) {
	            this.state = 411;
	            this.match(PeopleCodeParser.T__0);
	        }

	        this.state = 414;
	        this.stmtList();
	        this.state = 415;
	        this.match(PeopleCodeParser.T__61);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	evaluateStmt() {
	    let localctx = new EvaluateStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, PeopleCodeParser.RULE_evaluateStmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 417;
	        this.match(PeopleCodeParser.T__62);
	        this.state = 418;
	        this.expr(0);
	        this.state = 420; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 419;
	            this.whenBranch();
	            this.state = 422; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===PeopleCodeParser.T__64);
	        this.state = 425;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PeopleCodeParser.T__65) {
	            this.state = 424;
	            this.whenOtherBranch();
	        }

	        this.state = 427;
	        localctx.endevaluate = this.match(PeopleCodeParser.T__63);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whenBranch() {
	    let localctx = new WhenBranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, PeopleCodeParser.RULE_whenBranch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 429;
	        this.match(PeopleCodeParser.T__64);
	        this.state = 432;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case PeopleCodeParser.T__7:
	        	this.state = 430;
	        	localctx.op = this.match(PeopleCodeParser.T__7);
	        	break;
	        case PeopleCodeParser.T__22:
	        	this.state = 431;
	        	localctx.op = this.match(PeopleCodeParser.T__22);
	        	break;
	        case PeopleCodeParser.T__8:
	        case PeopleCodeParser.T__10:
	        case PeopleCodeParser.T__14:
	        case PeopleCodeParser.T__15:
	        case PeopleCodeParser.T__70:
	        case PeopleCodeParser.DecimalLiteral:
	        case PeopleCodeParser.IntegerLiteral:
	        case PeopleCodeParser.StringLiteral:
	        case PeopleCodeParser.BoolLiteral:
	        case PeopleCodeParser.VAR_ID:
	        case PeopleCodeParser.SYS_VAR_ID:
	        case PeopleCodeParser.GENERIC_ID:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 434;
	        this.expr(0);
	        this.state = 435;
	        this.stmtList();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whenOtherBranch() {
	    let localctx = new WhenOtherBranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, PeopleCodeParser.RULE_whenOtherBranch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 437;
	        this.match(PeopleCodeParser.T__65);
	        this.state = 438;
	        this.stmtList();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tryCatchStmt() {
	    let localctx = new TryCatchStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, PeopleCodeParser.RULE_tryCatchStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 440;
	        localctx.trytok = this.match(PeopleCodeParser.T__66);
	        this.state = 441;
	        this.stmtList();
	        this.state = 442;
	        this.catchSignature();
	        this.state = 443;
	        this.stmtList();
	        this.state = 444;
	        localctx.endtry = this.match(PeopleCodeParser.T__67);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	catchSignature() {
	    let localctx = new CatchSignatureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, PeopleCodeParser.RULE_catchSignature);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 446;
	        this.match(PeopleCodeParser.T__68);
	        this.state = 447;
	        localctx.exClass = this.match(PeopleCodeParser.T__69);
	        this.state = 448;
	        this.match(PeopleCodeParser.VAR_ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createInvocation() {
	    let localctx = new CreateInvocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, PeopleCodeParser.RULE_createInvocation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 450;
	        this.match(PeopleCodeParser.T__70);
	        this.state = 453;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 451;
	            this.appClassPath();
	            break;

	        case 2:
	            this.state = 452;
	            this.match(PeopleCodeParser.GENERIC_ID);
	            break;

	        }
	        this.state = 455;
	        this.match(PeopleCodeParser.T__8);
	        this.state = 457;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PeopleCodeParser.T__8) | (1 << PeopleCodeParser.T__10) | (1 << PeopleCodeParser.T__14) | (1 << PeopleCodeParser.T__15))) !== 0) || ((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (PeopleCodeParser.T__70 - 71)) | (1 << (PeopleCodeParser.DecimalLiteral - 71)) | (1 << (PeopleCodeParser.IntegerLiteral - 71)) | (1 << (PeopleCodeParser.StringLiteral - 71)) | (1 << (PeopleCodeParser.BoolLiteral - 71)) | (1 << (PeopleCodeParser.VAR_ID - 71)) | (1 << (PeopleCodeParser.SYS_VAR_ID - 71)) | (1 << (PeopleCodeParser.GENERIC_ID - 71)))) !== 0)) {
	            this.state = 456;
	            this.exprList();
	        }

	        this.state = 459;
	        this.match(PeopleCodeParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 76, PeopleCodeParser.RULE_literal);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 461;
	        _la = this._input.LA(1);
	        if(!(((((_la - 72)) & ~0x1f) == 0 && ((1 << (_la - 72)) & ((1 << (PeopleCodeParser.DecimalLiteral - 72)) | (1 << (PeopleCodeParser.IntegerLiteral - 72)) | (1 << (PeopleCodeParser.StringLiteral - 72)) | (1 << (PeopleCodeParser.BoolLiteral - 72)))) !== 0))) {
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



	id_() {
	    let localctx = new Id_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, PeopleCodeParser.RULE_id_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 463;
	        _la = this._input.LA(1);
	        if(!(((((_la - 76)) & ~0x1f) == 0 && ((1 << (_la - 76)) & ((1 << (PeopleCodeParser.VAR_ID - 76)) | (1 << (PeopleCodeParser.SYS_VAR_ID - 76)) | (1 << (PeopleCodeParser.GENERIC_ID - 76)))) !== 0))) {
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

PeopleCodeParser.EOF = antlr4.Token.EOF;
PeopleCodeParser.T__0 = 1;
PeopleCodeParser.T__1 = 2;
PeopleCodeParser.T__2 = 3;
PeopleCodeParser.T__3 = 4;
PeopleCodeParser.T__4 = 5;
PeopleCodeParser.T__5 = 6;
PeopleCodeParser.T__6 = 7;
PeopleCodeParser.T__7 = 8;
PeopleCodeParser.T__8 = 9;
PeopleCodeParser.T__9 = 10;
PeopleCodeParser.T__10 = 11;
PeopleCodeParser.T__11 = 12;
PeopleCodeParser.T__12 = 13;
PeopleCodeParser.T__13 = 14;
PeopleCodeParser.T__14 = 15;
PeopleCodeParser.T__15 = 16;
PeopleCodeParser.T__16 = 17;
PeopleCodeParser.T__17 = 18;
PeopleCodeParser.T__18 = 19;
PeopleCodeParser.T__19 = 20;
PeopleCodeParser.T__20 = 21;
PeopleCodeParser.T__21 = 22;
PeopleCodeParser.T__22 = 23;
PeopleCodeParser.T__23 = 24;
PeopleCodeParser.T__24 = 25;
PeopleCodeParser.T__25 = 26;
PeopleCodeParser.T__26 = 27;
PeopleCodeParser.T__27 = 28;
PeopleCodeParser.T__28 = 29;
PeopleCodeParser.T__29 = 30;
PeopleCodeParser.T__30 = 31;
PeopleCodeParser.T__31 = 32;
PeopleCodeParser.T__32 = 33;
PeopleCodeParser.T__33 = 34;
PeopleCodeParser.T__34 = 35;
PeopleCodeParser.T__35 = 36;
PeopleCodeParser.T__36 = 37;
PeopleCodeParser.T__37 = 38;
PeopleCodeParser.T__38 = 39;
PeopleCodeParser.T__39 = 40;
PeopleCodeParser.T__40 = 41;
PeopleCodeParser.T__41 = 42;
PeopleCodeParser.T__42 = 43;
PeopleCodeParser.T__43 = 44;
PeopleCodeParser.T__44 = 45;
PeopleCodeParser.T__45 = 46;
PeopleCodeParser.T__46 = 47;
PeopleCodeParser.T__47 = 48;
PeopleCodeParser.T__48 = 49;
PeopleCodeParser.T__49 = 50;
PeopleCodeParser.T__50 = 51;
PeopleCodeParser.T__51 = 52;
PeopleCodeParser.T__52 = 53;
PeopleCodeParser.T__53 = 54;
PeopleCodeParser.T__54 = 55;
PeopleCodeParser.T__55 = 56;
PeopleCodeParser.T__56 = 57;
PeopleCodeParser.T__57 = 58;
PeopleCodeParser.T__58 = 59;
PeopleCodeParser.T__59 = 60;
PeopleCodeParser.T__60 = 61;
PeopleCodeParser.T__61 = 62;
PeopleCodeParser.T__62 = 63;
PeopleCodeParser.T__63 = 64;
PeopleCodeParser.T__64 = 65;
PeopleCodeParser.T__65 = 66;
PeopleCodeParser.T__66 = 67;
PeopleCodeParser.T__67 = 68;
PeopleCodeParser.T__68 = 69;
PeopleCodeParser.T__69 = 70;
PeopleCodeParser.T__70 = 71;
PeopleCodeParser.DecimalLiteral = 72;
PeopleCodeParser.IntegerLiteral = 73;
PeopleCodeParser.StringLiteral = 74;
PeopleCodeParser.BoolLiteral = 75;
PeopleCodeParser.VAR_ID = 76;
PeopleCodeParser.SYS_VAR_ID = 77;
PeopleCodeParser.GENERIC_ID = 78;
PeopleCodeParser.REM = 79;
PeopleCodeParser.COMMENT_1 = 80;
PeopleCodeParser.COMMENT_2 = 81;
PeopleCodeParser.COMMENT_3 = 82;
PeopleCodeParser.WS = 83;

PeopleCodeParser.RULE_program = 0;
PeopleCodeParser.RULE_stmtList = 1;
PeopleCodeParser.RULE_stmt = 2;
PeopleCodeParser.RULE_expr = 3;
PeopleCodeParser.RULE_exprList = 4;
PeopleCodeParser.RULE_varDeclaration = 5;
PeopleCodeParser.RULE_varDeclarator = 6;
PeopleCodeParser.RULE_varType = 7;
PeopleCodeParser.RULE_appClassImport = 8;
PeopleCodeParser.RULE_appPkgPath = 9;
PeopleCodeParser.RULE_appClassPath = 10;
PeopleCodeParser.RULE_extFuncImport = 11;
PeopleCodeParser.RULE_recDefnPath = 12;
PeopleCodeParser.RULE_event = 13;
PeopleCodeParser.RULE_classDeclaration = 14;
PeopleCodeParser.RULE_classBlock = 15;
PeopleCodeParser.RULE_classBlockStmt = 16;
PeopleCodeParser.RULE_method = 17;
PeopleCodeParser.RULE_constant = 18;
PeopleCodeParser.RULE_property_ = 19;
PeopleCodeParser.RULE_instance = 20;
PeopleCodeParser.RULE_methodImpl = 21;
PeopleCodeParser.RULE_getImpl = 22;
PeopleCodeParser.RULE_setImpl = 23;
PeopleCodeParser.RULE_funcImpl = 24;
PeopleCodeParser.RULE_funcSignature = 25;
PeopleCodeParser.RULE_formalParamList = 26;
PeopleCodeParser.RULE_param = 27;
PeopleCodeParser.RULE_returnType = 28;
PeopleCodeParser.RULE_ifStmt = 29;
PeopleCodeParser.RULE_forStmt = 30;
PeopleCodeParser.RULE_whileStmt = 31;
PeopleCodeParser.RULE_evaluateStmt = 32;
PeopleCodeParser.RULE_whenBranch = 33;
PeopleCodeParser.RULE_whenOtherBranch = 34;
PeopleCodeParser.RULE_tryCatchStmt = 35;
PeopleCodeParser.RULE_catchSignature = 36;
PeopleCodeParser.RULE_createInvocation = 37;
PeopleCodeParser.RULE_literal = 38;
PeopleCodeParser.RULE_id_ = 39;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_program;
    }

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StmtListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_stmtList;
    }

	stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtContext);
	    } else {
	        return this.getTypedRuleContext(StmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtList(this);
		}
	}


}



class StmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_stmt;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StmtReturnContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtReturn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtReturn(this);
		}
	}


}

PeopleCodeParser.StmtReturnContext = StmtReturnContext;

class StmtEvaluateContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	evaluateStmt() {
	    return this.getTypedRuleContext(EvaluateStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtEvaluate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtEvaluate(this);
		}
	}


}

PeopleCodeParser.StmtEvaluateContext = StmtEvaluateContext;

class StmtAppClassImportContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	appClassImport() {
	    return this.getTypedRuleContext(AppClassImportContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtAppClassImport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtAppClassImport(this);
		}
	}


}

PeopleCodeParser.StmtAppClassImportContext = StmtAppClassImportContext;

class StmtWarningContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtWarning(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtWarning(this);
		}
	}


}

PeopleCodeParser.StmtWarningContext = StmtWarningContext;

class StmtWhileContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	whileStmt() {
	    return this.getTypedRuleContext(WhileStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtWhile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtWhile(this);
		}
	}


}

PeopleCodeParser.StmtWhileContext = StmtWhileContext;

class StmtExprContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtExpr(this);
		}
	}


}

PeopleCodeParser.StmtExprContext = StmtExprContext;

class StmtSetImplContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	setImpl() {
	    return this.getTypedRuleContext(SetImplContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtSetImpl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtSetImpl(this);
		}
	}


}

PeopleCodeParser.StmtSetImplContext = StmtSetImplContext;

class StmtMethodImplContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	methodImpl() {
	    return this.getTypedRuleContext(MethodImplContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtMethodImpl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtMethodImpl(this);
		}
	}


}

PeopleCodeParser.StmtMethodImplContext = StmtMethodImplContext;

class StmtTryCatchContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	tryCatchStmt() {
	    return this.getTypedRuleContext(TryCatchStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtTryCatch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtTryCatch(this);
		}
	}


}

PeopleCodeParser.StmtTryCatchContext = StmtTryCatchContext;

class StmtVarDeclarationContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	varDeclaration() {
	    return this.getTypedRuleContext(VarDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtVarDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtVarDeclaration(this);
		}
	}


}

PeopleCodeParser.StmtVarDeclarationContext = StmtVarDeclarationContext;

class StmtForContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	forStmt() {
	    return this.getTypedRuleContext(ForStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtFor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtFor(this);
		}
	}


}

PeopleCodeParser.StmtForContext = StmtForContext;

class StmtAssignContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtAssign(this);
		}
	}


}

PeopleCodeParser.StmtAssignContext = StmtAssignContext;

class StmtErrorContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtError(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtError(this);
		}
	}


}

PeopleCodeParser.StmtErrorContext = StmtErrorContext;

class StmtExternalFuncImportContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	extFuncImport() {
	    return this.getTypedRuleContext(ExtFuncImportContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtExternalFuncImport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtExternalFuncImport(this);
		}
	}


}

PeopleCodeParser.StmtExternalFuncImportContext = StmtExternalFuncImportContext;

class StmtFuncImplContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	funcImpl() {
	    return this.getTypedRuleContext(FuncImplContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtFuncImpl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtFuncImpl(this);
		}
	}


}

PeopleCodeParser.StmtFuncImplContext = StmtFuncImplContext;

class StmtGetImplContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	getImpl() {
	    return this.getTypedRuleContext(GetImplContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtGetImpl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtGetImpl(this);
		}
	}


}

PeopleCodeParser.StmtGetImplContext = StmtGetImplContext;

class StmtThrowContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtThrow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtThrow(this);
		}
	}


}

PeopleCodeParser.StmtThrowContext = StmtThrowContext;

class StmtIfContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ifStmt() {
	    return this.getTypedRuleContext(IfStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtIf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtIf(this);
		}
	}


}

PeopleCodeParser.StmtIfContext = StmtIfContext;

class StmtClassDeclarationContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	classDeclaration() {
	    return this.getTypedRuleContext(ClassDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtClassDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtClassDeclaration(this);
		}
	}


}

PeopleCodeParser.StmtClassDeclarationContext = StmtClassDeclarationContext;

class StmtExitContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtExit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtExit(this);
		}
	}


}

PeopleCodeParser.StmtExitContext = StmtExitContext;

class StmtBreakContext extends StmtContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterStmtBreak(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitStmtBreak(this);
		}
	}


}

PeopleCodeParser.StmtBreakContext = StmtBreakContext;

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
        this.ruleIndex = PeopleCodeParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ExprComparisonContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.le = null; // Token;
        this.ge = null; // Token;
        this.l = null; // Token;
        this.g = null; // Token;
        super.copyFrom(ctx);
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
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprComparison(this);
		}
	}


}

PeopleCodeParser.ExprComparisonContext = ExprComparisonContext;

class ExprConcatContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprConcat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprConcat(this);
		}
	}


}

PeopleCodeParser.ExprConcatContext = ExprConcatContext;

class ExprCreateContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	createInvocation() {
	    return this.getTypedRuleContext(CreateInvocationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprCreate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprCreate(this);
		}
	}


}

PeopleCodeParser.ExprCreateContext = ExprCreateContext;

class ExprBooleanContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
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
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprBoolean(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprBoolean(this);
		}
	}


}

PeopleCodeParser.ExprBooleanContext = ExprBooleanContext;

class ExprNotContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprNot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprNot(this);
		}
	}


}

PeopleCodeParser.ExprNotContext = ExprNotContext;

class ExprAddSubContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.a = null; // Token;
        this.s = null; // Token;
        super.copyFrom(ctx);
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
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprAddSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprAddSub(this);
		}
	}


}

PeopleCodeParser.ExprAddSubContext = ExprAddSubContext;

class ExprDotAccessContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprDotAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprDotAccess(this);
		}
	}


}

PeopleCodeParser.ExprDotAccessContext = ExprDotAccessContext;

class ExprFnOrIdxCallContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprFnOrIdxCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprFnOrIdxCall(this);
		}
	}


}

PeopleCodeParser.ExprFnOrIdxCallContext = ExprFnOrIdxCallContext;

class ExprParenthesizedContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprParenthesized(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprParenthesized(this);
		}
	}


}

PeopleCodeParser.ExprParenthesizedContext = ExprParenthesizedContext;

class ExprMulDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.m = null; // Token;
        this.d = null; // Token;
        super.copyFrom(ctx);
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
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprMulDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprMulDiv(this);
		}
	}


}

PeopleCodeParser.ExprMulDivContext = ExprMulDivContext;

class ExprNegateContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprNegate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprNegate(this);
		}
	}


}

PeopleCodeParser.ExprNegateContext = ExprNegateContext;

class ExprArrayIndexContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprArrayIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprArrayIndex(this);
		}
	}


}

PeopleCodeParser.ExprArrayIndexContext = ExprArrayIndexContext;

class ExprLiteralContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprLiteral(this);
		}
	}


}

PeopleCodeParser.ExprLiteralContext = ExprLiteralContext;

class ExprEqualityContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.e = null; // Token;
        this.i = null; // Token;
        super.copyFrom(ctx);
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
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprEquality(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprEquality(this);
		}
	}


}

PeopleCodeParser.ExprEqualityContext = ExprEqualityContext;

class ExprDynamicReferenceContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprDynamicReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprDynamicReference(this);
		}
	}


}

PeopleCodeParser.ExprDynamicReferenceContext = ExprDynamicReferenceContext;

class ExprIdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprId(this);
		}
	}


}

PeopleCodeParser.ExprIdContext = ExprIdContext;

class ExprListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_exprList;
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
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExprList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExprList(this);
		}
	}


}



class VarDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_varDeclaration;
        this.varScope = null; // Token
    }

	varType() {
	    return this.getTypedRuleContext(VarTypeContext,0);
	};

	varDeclarator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarDeclaratorContext);
	    } else {
	        return this.getTypedRuleContext(VarDeclaratorContext,i);
	    }
	};

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterVarDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitVarDeclaration(this);
		}
	}


}



class VarDeclaratorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_varDeclarator;
    }

	VAR_ID() {
	    return this.getToken(PeopleCodeParser.VAR_ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterVarDeclarator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitVarDeclarator(this);
		}
	}


}



class VarTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_varType;
    }

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	varType() {
	    return this.getTypedRuleContext(VarTypeContext,0);
	};

	appClassPath() {
	    return this.getTypedRuleContext(AppClassPathContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterVarType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitVarType(this);
		}
	}


}



class AppClassImportContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_appClassImport;
    }

	appPkgPath() {
	    return this.getTypedRuleContext(AppPkgPathContext,0);
	};

	appClassPath() {
	    return this.getTypedRuleContext(AppClassPathContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterAppClassImport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitAppClassImport(this);
		}
	}


}



class AppPkgPathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_appPkgPath;
    }

	GENERIC_ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PeopleCodeParser.GENERIC_ID);
	    } else {
	        return this.getToken(PeopleCodeParser.GENERIC_ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterAppPkgPath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitAppPkgPath(this);
		}
	}


}



class AppClassPathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_appClassPath;
    }

	GENERIC_ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PeopleCodeParser.GENERIC_ID);
	    } else {
	        return this.getToken(PeopleCodeParser.GENERIC_ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterAppClassPath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitAppClassPath(this);
		}
	}


}



class ExtFuncImportContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_extFuncImport;
    }

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	recDefnPath() {
	    return this.getTypedRuleContext(RecDefnPathContext,0);
	};

	event() {
	    return this.getTypedRuleContext(EventContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterExtFuncImport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitExtFuncImport(this);
		}
	}


}



class RecDefnPathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_recDefnPath;
    }

	GENERIC_ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PeopleCodeParser.GENERIC_ID);
	    } else {
	        return this.getToken(PeopleCodeParser.GENERIC_ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterRecDefnPath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitRecDefnPath(this);
		}
	}


}



class EventContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_event;
    }


	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterEvent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitEvent(this);
		}
	}


}



class ClassDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_classDeclaration;
    }

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	classBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassBlockContext);
	    } else {
	        return this.getTypedRuleContext(ClassBlockContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterClassDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitClassDeclaration(this);
		}
	}


}



class ClassBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_classBlock;
        this.aLvl = null; // Token
    }

	classBlockStmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassBlockStmtContext);
	    } else {
	        return this.getTypedRuleContext(ClassBlockStmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterClassBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitClassBlock(this);
		}
	}


}



class ClassBlockStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_classBlockStmt;
    }

	method() {
	    return this.getTypedRuleContext(MethodContext,0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	property_() {
	    return this.getTypedRuleContext(Property_Context,0);
	};

	instance() {
	    return this.getTypedRuleContext(InstanceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterClassBlockStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitClassBlockStmt(this);
		}
	}


}



class MethodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_method;
    }

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	formalParamList() {
	    return this.getTypedRuleContext(FormalParamListContext,0);
	};

	returnType() {
	    return this.getTypedRuleContext(ReturnTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitMethod(this);
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
        this.ruleIndex = PeopleCodeParser.RULE_constant;
    }

	VAR_ID() {
	    return this.getToken(PeopleCodeParser.VAR_ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitConstant(this);
		}
	}


}



class Property_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_property_;
        this.g = null; // Token
        this.s = null; // Token
        this.r = null; // Token
    }

	varType() {
	    return this.getTypedRuleContext(VarTypeContext,0);
	};

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterProperty_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitProperty_(this);
		}
	}


}



class InstanceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_instance;
    }

	varType() {
	    return this.getTypedRuleContext(VarTypeContext,0);
	};

	VAR_ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PeopleCodeParser.VAR_ID);
	    } else {
	        return this.getToken(PeopleCodeParser.VAR_ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterInstance(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitInstance(this);
		}
	}


}



class MethodImplContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_methodImpl;
        this.endmethod = null; // Token
    }

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterMethodImpl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitMethodImpl(this);
		}
	}


}



class GetImplContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_getImpl;
        this.endget = null; // Token
    }

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterGetImpl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitGetImpl(this);
		}
	}


}



class SetImplContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_setImpl;
        this.endset = null; // Token
    }

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterSetImpl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitSetImpl(this);
		}
	}


}



class FuncImplContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_funcImpl;
        this.endfunction = null; // Token
    }

	funcSignature() {
	    return this.getTypedRuleContext(FuncSignatureContext,0);
	};

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterFuncImpl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitFuncImpl(this);
		}
	}


}



class FuncSignatureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_funcSignature;
    }

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	formalParamList() {
	    return this.getTypedRuleContext(FormalParamListContext,0);
	};

	returnType() {
	    return this.getTypedRuleContext(ReturnTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterFuncSignature(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitFuncSignature(this);
		}
	}


}



class FormalParamListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_formalParamList;
    }

	param = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParamContext);
	    } else {
	        return this.getTypedRuleContext(ParamContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterFormalParamList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitFormalParamList(this);
		}
	}


}



class ParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_param;
    }

	VAR_ID() {
	    return this.getToken(PeopleCodeParser.VAR_ID, 0);
	};

	varType() {
	    return this.getTypedRuleContext(VarTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitParam(this);
		}
	}


}



class ReturnTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_returnType;
    }

	varType() {
	    return this.getTypedRuleContext(VarTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterReturnType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitReturnType(this);
		}
	}


}



class IfStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_ifStmt;
        this.elsetok = null; // Token
        this.endif = null; // Token
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	stmtList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtListContext);
	    } else {
	        return this.getTypedRuleContext(StmtListContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterIfStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitIfStmt(this);
		}
	}


}



class ForStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_forStmt;
        this.endfor = null; // Token
    }

	VAR_ID() {
	    return this.getToken(PeopleCodeParser.VAR_ID, 0);
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

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterForStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitForStmt(this);
		}
	}


}



class WhileStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_whileStmt;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterWhileStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitWhileStmt(this);
		}
	}


}



class EvaluateStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_evaluateStmt;
        this.endevaluate = null; // Token
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	whenBranch = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WhenBranchContext);
	    } else {
	        return this.getTypedRuleContext(WhenBranchContext,i);
	    }
	};

	whenOtherBranch() {
	    return this.getTypedRuleContext(WhenOtherBranchContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterEvaluateStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitEvaluateStmt(this);
		}
	}


}



class WhenBranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_whenBranch;
        this.op = null; // Token
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterWhenBranch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitWhenBranch(this);
		}
	}


}



class WhenOtherBranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_whenOtherBranch;
    }

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterWhenOtherBranch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitWhenOtherBranch(this);
		}
	}


}



class TryCatchStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_tryCatchStmt;
        this.trytok = null; // Token
        this.endtry = null; // Token
    }

	stmtList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtListContext);
	    } else {
	        return this.getTypedRuleContext(StmtListContext,i);
	    }
	};

	catchSignature() {
	    return this.getTypedRuleContext(CatchSignatureContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterTryCatchStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitTryCatchStmt(this);
		}
	}


}



class CatchSignatureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_catchSignature;
        this.exClass = null; // Token
    }

	VAR_ID() {
	    return this.getToken(PeopleCodeParser.VAR_ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterCatchSignature(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitCatchSignature(this);
		}
	}


}



class CreateInvocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_createInvocation;
    }

	appClassPath() {
	    return this.getTypedRuleContext(AppClassPathContext,0);
	};

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterCreateInvocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitCreateInvocation(this);
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
        this.ruleIndex = PeopleCodeParser.RULE_literal;
    }

	DecimalLiteral() {
	    return this.getToken(PeopleCodeParser.DecimalLiteral, 0);
	};

	IntegerLiteral() {
	    return this.getToken(PeopleCodeParser.IntegerLiteral, 0);
	};

	StringLiteral() {
	    return this.getToken(PeopleCodeParser.StringLiteral, 0);
	};

	BoolLiteral() {
	    return this.getToken(PeopleCodeParser.BoolLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class Id_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeopleCodeParser.RULE_id_;
    }

	SYS_VAR_ID() {
	    return this.getToken(PeopleCodeParser.SYS_VAR_ID, 0);
	};

	VAR_ID() {
	    return this.getToken(PeopleCodeParser.VAR_ID, 0);
	};

	GENERIC_ID() {
	    return this.getToken(PeopleCodeParser.GENERIC_ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.enterId_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeopleCodeListener ) {
	        listener.exitId_(this);
		}
	}


}




PeopleCodeParser.ProgramContext = ProgramContext; 
PeopleCodeParser.StmtListContext = StmtListContext; 
PeopleCodeParser.StmtContext = StmtContext; 
PeopleCodeParser.ExprContext = ExprContext; 
PeopleCodeParser.ExprListContext = ExprListContext; 
PeopleCodeParser.VarDeclarationContext = VarDeclarationContext; 
PeopleCodeParser.VarDeclaratorContext = VarDeclaratorContext; 
PeopleCodeParser.VarTypeContext = VarTypeContext; 
PeopleCodeParser.AppClassImportContext = AppClassImportContext; 
PeopleCodeParser.AppPkgPathContext = AppPkgPathContext; 
PeopleCodeParser.AppClassPathContext = AppClassPathContext; 
PeopleCodeParser.ExtFuncImportContext = ExtFuncImportContext; 
PeopleCodeParser.RecDefnPathContext = RecDefnPathContext; 
PeopleCodeParser.EventContext = EventContext; 
PeopleCodeParser.ClassDeclarationContext = ClassDeclarationContext; 
PeopleCodeParser.ClassBlockContext = ClassBlockContext; 
PeopleCodeParser.ClassBlockStmtContext = ClassBlockStmtContext; 
PeopleCodeParser.MethodContext = MethodContext; 
PeopleCodeParser.ConstantContext = ConstantContext; 
PeopleCodeParser.Property_Context = Property_Context; 
PeopleCodeParser.InstanceContext = InstanceContext; 
PeopleCodeParser.MethodImplContext = MethodImplContext; 
PeopleCodeParser.GetImplContext = GetImplContext; 
PeopleCodeParser.SetImplContext = SetImplContext; 
PeopleCodeParser.FuncImplContext = FuncImplContext; 
PeopleCodeParser.FuncSignatureContext = FuncSignatureContext; 
PeopleCodeParser.FormalParamListContext = FormalParamListContext; 
PeopleCodeParser.ParamContext = ParamContext; 
PeopleCodeParser.ReturnTypeContext = ReturnTypeContext; 
PeopleCodeParser.IfStmtContext = IfStmtContext; 
PeopleCodeParser.ForStmtContext = ForStmtContext; 
PeopleCodeParser.WhileStmtContext = WhileStmtContext; 
PeopleCodeParser.EvaluateStmtContext = EvaluateStmtContext; 
PeopleCodeParser.WhenBranchContext = WhenBranchContext; 
PeopleCodeParser.WhenOtherBranchContext = WhenOtherBranchContext; 
PeopleCodeParser.TryCatchStmtContext = TryCatchStmtContext; 
PeopleCodeParser.CatchSignatureContext = CatchSignatureContext; 
PeopleCodeParser.CreateInvocationContext = CreateInvocationContext; 
PeopleCodeParser.LiteralContext = LiteralContext; 
PeopleCodeParser.Id_Context = Id_Context; 
