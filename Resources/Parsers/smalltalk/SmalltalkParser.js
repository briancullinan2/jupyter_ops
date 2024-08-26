// Generated from Resources/Parsers/smalltalk/Smalltalk.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SmalltalkListener from './SmalltalkListener.js';
const serializedATN = [4,1,32,471,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,1,0,1,0,1,0,
1,1,1,1,3,1,102,8,1,1,1,3,1,105,8,1,1,1,3,1,108,8,1,1,1,3,1,111,8,1,1,2,
4,2,114,8,2,11,2,12,2,115,1,3,1,3,3,3,120,8,3,1,3,4,3,123,8,3,11,3,12,3,
124,1,3,3,3,128,8,3,1,3,1,3,1,4,1,4,3,4,134,8,4,1,4,1,4,3,4,138,8,4,1,4,
1,4,3,4,142,8,4,1,4,1,4,1,4,1,4,3,4,148,8,4,1,4,3,4,151,8,4,3,4,153,8,4,
1,5,1,5,3,5,157,8,5,1,5,1,5,3,5,161,8,5,1,5,3,5,164,8,5,1,6,1,6,1,6,1,6,
1,6,3,6,171,8,6,1,7,1,7,5,7,175,8,7,10,7,12,7,178,9,7,1,8,1,8,3,8,182,8,
8,1,8,1,8,1,9,1,9,3,9,188,8,9,1,9,3,9,191,8,9,1,9,1,9,3,9,195,8,9,1,9,4,
9,198,8,9,11,9,12,9,199,1,10,1,10,1,10,3,10,205,8,10,1,11,1,11,3,11,209,
8,11,1,11,1,11,3,11,213,8,11,1,11,1,11,1,12,1,12,1,13,1,13,3,13,221,8,13,
1,14,1,14,3,14,225,8,14,1,14,3,14,228,8,14,1,15,1,15,1,15,1,16,3,16,234,
8,16,1,16,1,16,3,16,238,8,16,4,16,240,8,16,11,16,12,16,241,1,17,1,17,3,17,
246,8,17,1,17,1,17,3,17,250,8,17,1,18,1,18,1,18,3,18,255,8,18,1,19,1,19,
3,19,259,8,19,1,19,1,19,3,19,263,8,19,1,19,1,19,1,20,1,20,3,20,269,8,20,
1,21,1,21,1,21,3,21,274,8,21,1,22,1,22,3,22,278,8,22,1,22,3,22,281,8,22,
1,22,3,22,284,8,22,1,22,1,22,1,23,3,23,289,8,23,1,23,4,23,292,8,23,11,23,
12,23,293,1,24,1,24,3,24,298,8,24,1,24,3,24,301,8,24,1,24,3,24,304,8,24,
1,24,1,24,1,25,1,25,3,25,310,8,25,1,25,3,25,313,8,25,1,25,3,25,316,8,25,
1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,3,26,326,8,26,1,27,1,27,1,27,1,27,
3,27,332,8,27,1,28,1,28,3,28,336,8,28,1,28,1,28,1,28,1,29,1,29,1,30,3,30,
344,8,30,1,30,1,30,4,30,348,8,30,11,30,12,30,349,1,31,3,31,353,8,31,1,31,
4,31,356,8,31,11,31,12,31,357,1,32,3,32,361,8,32,1,32,4,32,364,8,32,11,32,
12,32,365,1,32,1,32,4,32,370,8,32,11,32,12,32,371,1,33,1,33,1,34,1,34,1,
35,1,35,1,35,1,36,1,36,3,36,383,8,36,1,36,1,36,3,36,387,8,36,1,36,4,36,390,
8,36,11,36,12,36,391,1,36,3,36,395,8,36,1,36,1,36,1,37,1,37,4,37,401,8,37,
11,37,12,37,402,1,37,3,37,406,8,37,1,38,1,38,1,38,1,39,3,39,412,8,39,1,39,
1,39,1,39,3,39,417,8,39,1,39,3,39,420,8,39,5,39,422,8,39,10,39,12,39,425,
9,39,1,39,1,39,1,40,1,40,1,40,1,41,1,41,3,41,434,8,41,1,41,3,41,437,8,41,
1,41,3,41,440,8,41,1,42,3,42,443,8,42,1,42,1,42,1,43,1,43,1,44,4,44,450,
8,44,11,44,12,44,451,1,45,1,45,1,46,1,46,3,46,458,8,46,1,47,3,47,461,8,47,
1,47,1,47,3,47,465,8,47,1,47,1,47,3,47,469,8,47,1,47,0,0,48,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,0,2,2,0,1,1,3,3,2,
0,11,11,16,16,517,0,96,1,0,0,0,2,110,1,0,0,0,4,113,1,0,0,0,6,117,1,0,0,0,
8,152,1,0,0,0,10,154,1,0,0,0,12,170,1,0,0,0,14,172,1,0,0,0,16,179,1,0,0,
0,18,187,1,0,0,0,20,204,1,0,0,0,22,206,1,0,0,0,24,216,1,0,0,0,26,218,1,0,
0,0,28,222,1,0,0,0,30,229,1,0,0,0,32,233,1,0,0,0,34,243,1,0,0,0,36,254,1,
0,0,0,38,256,1,0,0,0,40,268,1,0,0,0,42,273,1,0,0,0,44,275,1,0,0,0,46,291,
1,0,0,0,48,295,1,0,0,0,50,307,1,0,0,0,52,325,1,0,0,0,54,331,1,0,0,0,56,335,
1,0,0,0,58,340,1,0,0,0,60,343,1,0,0,0,62,352,1,0,0,0,64,360,1,0,0,0,66,373,
1,0,0,0,68,375,1,0,0,0,70,377,1,0,0,0,72,380,1,0,0,0,74,405,1,0,0,0,76,407,
1,0,0,0,78,411,1,0,0,0,80,428,1,0,0,0,82,431,1,0,0,0,84,442,1,0,0,0,86,446,
1,0,0,0,88,449,1,0,0,0,90,453,1,0,0,0,92,455,1,0,0,0,94,460,1,0,0,0,96,97,
3,2,1,0,97,98,5,0,0,1,98,1,1,0,0,0,99,101,3,6,3,0,100,102,3,4,2,0,101,100,
1,0,0,0,101,102,1,0,0,0,102,104,1,0,0,0,103,105,3,8,4,0,104,103,1,0,0,0,
104,105,1,0,0,0,105,111,1,0,0,0,106,108,3,4,2,0,107,106,1,0,0,0,107,108,
1,0,0,0,108,109,1,0,0,0,109,111,3,8,4,0,110,99,1,0,0,0,110,107,1,0,0,0,111,
3,1,0,0,0,112,114,7,0,0,0,113,112,1,0,0,0,114,115,1,0,0,0,115,113,1,0,0,
0,115,116,1,0,0,0,116,5,1,0,0,0,117,122,5,8,0,0,118,120,3,4,2,0,119,118,
1,0,0,0,119,120,1,0,0,0,120,121,1,0,0,0,121,123,5,16,0,0,122,119,1,0,0,0,
123,124,1,0,0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,127,1,0,0,0,126,128,
3,4,2,0,127,126,1,0,0,0,127,128,1,0,0,0,128,129,1,0,0,0,129,130,5,8,0,0,
130,7,1,0,0,0,131,133,3,10,5,0,132,134,3,4,2,0,133,132,1,0,0,0,133,134,1,
0,0,0,134,153,1,0,0,0,135,137,3,14,7,0,136,138,3,4,2,0,137,136,1,0,0,0,137,
138,1,0,0,0,138,139,1,0,0,0,139,141,5,9,0,0,140,142,3,4,2,0,141,140,1,0,
0,0,141,142,1,0,0,0,142,143,1,0,0,0,143,144,3,10,5,0,144,153,1,0,0,0,145,
147,3,14,7,0,146,148,5,9,0,0,147,146,1,0,0,0,147,148,1,0,0,0,148,150,1,0,
0,0,149,151,3,4,2,0,150,149,1,0,0,0,150,151,1,0,0,0,151,153,1,0,0,0,152,
131,1,0,0,0,152,135,1,0,0,0,152,145,1,0,0,0,153,9,1,0,0,0,154,156,5,17,0,
0,155,157,3,4,2,0,156,155,1,0,0,0,156,157,1,0,0,0,157,158,1,0,0,0,158,160,
3,12,6,0,159,161,3,4,2,0,160,159,1,0,0,0,160,161,1,0,0,0,161,163,1,0,0,0,
162,164,5,9,0,0,163,162,1,0,0,0,163,164,1,0,0,0,164,11,1,0,0,0,165,171,3,
22,11,0,166,171,3,18,9,0,167,171,3,30,15,0,168,171,3,26,13,0,169,171,3,72,
36,0,170,165,1,0,0,0,170,166,1,0,0,0,170,167,1,0,0,0,170,168,1,0,0,0,170,
169,1,0,0,0,171,13,1,0,0,0,172,176,3,12,6,0,173,175,3,16,8,0,174,173,1,0,
0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,15,1,0,0,0,178,176,
1,0,0,0,179,181,5,9,0,0,180,182,3,4,2,0,181,180,1,0,0,0,181,182,1,0,0,0,
182,183,1,0,0,0,183,184,3,12,6,0,184,17,1,0,0,0,185,188,3,30,15,0,186,188,
3,26,13,0,187,185,1,0,0,0,187,186,1,0,0,0,188,197,1,0,0,0,189,191,3,4,2,
0,190,189,1,0,0,0,190,191,1,0,0,0,191,192,1,0,0,0,192,194,5,10,0,0,193,195,
3,4,2,0,194,193,1,0,0,0,194,195,1,0,0,0,195,196,1,0,0,0,196,198,3,20,10,
0,197,190,1,0,0,0,198,199,1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,19,
1,0,0,0,201,205,3,94,47,0,202,205,3,84,42,0,203,205,3,32,16,0,204,201,1,
0,0,0,204,202,1,0,0,0,204,203,1,0,0,0,205,21,1,0,0,0,206,208,3,24,12,0,207,
209,3,4,2,0,208,207,1,0,0,0,208,209,1,0,0,0,209,210,1,0,0,0,210,212,5,19,
0,0,211,213,3,4,2,0,212,211,1,0,0,0,212,213,1,0,0,0,213,214,1,0,0,0,214,
215,3,12,6,0,215,23,1,0,0,0,216,217,5,16,0,0,217,25,1,0,0,0,218,220,3,28,
14,0,219,221,3,92,46,0,220,219,1,0,0,0,220,221,1,0,0,0,221,27,1,0,0,0,222,
224,3,36,18,0,223,225,3,4,2,0,224,223,1,0,0,0,224,225,1,0,0,0,225,227,1,
0,0,0,226,228,3,82,41,0,227,226,1,0,0,0,227,228,1,0,0,0,228,29,1,0,0,0,229,
230,3,26,13,0,230,231,3,32,16,0,231,31,1,0,0,0,232,234,3,4,2,0,233,232,1,
0,0,0,233,234,1,0,0,0,234,239,1,0,0,0,235,237,3,34,17,0,236,238,3,4,2,0,
237,236,1,0,0,0,237,238,1,0,0,0,238,240,1,0,0,0,239,235,1,0,0,0,240,241,
1,0,0,0,241,239,1,0,0,0,241,242,1,0,0,0,242,33,1,0,0,0,243,245,5,30,0,0,
244,246,3,4,2,0,245,244,1,0,0,0,245,246,1,0,0,0,246,247,1,0,0,0,247,249,
3,26,13,0,248,250,3,4,2,0,249,248,1,0,0,0,249,250,1,0,0,0,250,35,1,0,0,0,
251,255,3,40,20,0,252,255,3,90,45,0,253,255,3,38,19,0,254,251,1,0,0,0,254,
252,1,0,0,0,254,253,1,0,0,0,255,37,1,0,0,0,256,258,5,7,0,0,257,259,3,4,2,
0,258,257,1,0,0,0,258,259,1,0,0,0,259,260,1,0,0,0,260,262,3,12,6,0,261,263,
3,4,2,0,262,261,1,0,0,0,262,263,1,0,0,0,263,264,1,0,0,0,264,265,5,6,0,0,
265,39,1,0,0,0,266,269,3,42,21,0,267,269,3,52,26,0,268,266,1,0,0,0,268,267,
1,0,0,0,269,41,1,0,0,0,270,274,3,48,24,0,271,274,3,50,25,0,272,274,3,44,
22,0,273,270,1,0,0,0,273,271,1,0,0,0,273,272,1,0,0,0,274,43,1,0,0,0,275,
277,5,4,0,0,276,278,3,46,23,0,277,276,1,0,0,0,277,278,1,0,0,0,278,280,1,
0,0,0,279,281,3,4,2,0,280,279,1,0,0,0,280,281,1,0,0,0,281,283,1,0,0,0,282,
284,3,2,1,0,283,282,1,0,0,0,283,284,1,0,0,0,284,285,1,0,0,0,285,286,5,5,
0,0,286,45,1,0,0,0,287,289,3,4,2,0,288,287,1,0,0,0,288,289,1,0,0,0,289,290,
1,0,0,0,290,292,5,31,0,0,291,288,1,0,0,0,292,293,1,0,0,0,293,291,1,0,0,0,
293,294,1,0,0,0,294,47,1,0,0,0,295,297,5,25,0,0,296,298,3,4,2,0,297,296,
1,0,0,0,297,298,1,0,0,0,298,300,1,0,0,0,299,301,3,14,7,0,300,299,1,0,0,0,
300,301,1,0,0,0,301,303,1,0,0,0,302,304,3,4,2,0,303,302,1,0,0,0,303,304,
1,0,0,0,304,305,1,0,0,0,305,306,5,26,0,0,306,49,1,0,0,0,307,309,5,27,0,0,
308,310,3,4,2,0,309,308,1,0,0,0,309,310,1,0,0,0,310,312,1,0,0,0,311,313,
3,14,7,0,312,311,1,0,0,0,312,313,1,0,0,0,313,315,1,0,0,0,314,316,3,4,2,0,
315,314,1,0,0,0,315,316,1,0,0,0,316,317,1,0,0,0,317,318,5,26,0,0,318,51,
1,0,0,0,319,326,3,66,33,0,320,326,3,54,27,0,321,326,3,58,29,0,322,326,3,
76,38,0,323,326,3,68,34,0,324,326,3,70,35,0,325,319,1,0,0,0,325,320,1,0,
0,0,325,321,1,0,0,0,325,322,1,0,0,0,325,323,1,0,0,0,325,324,1,0,0,0,326,
53,1,0,0,0,327,332,3,56,28,0,328,332,3,60,30,0,329,332,3,64,32,0,330,332,
3,62,31,0,331,327,1,0,0,0,331,328,1,0,0,0,331,329,1,0,0,0,331,330,1,0,0,
0,332,55,1,0,0,0,333,336,3,64,32,0,334,336,3,62,31,0,335,333,1,0,0,0,335,
334,1,0,0,0,336,337,1,0,0,0,337,338,5,22,0,0,338,339,3,62,31,0,339,57,1,
0,0,0,340,341,5,32,0,0,341,59,1,0,0,0,342,344,5,14,0,0,343,342,1,0,0,0,343,
344,1,0,0,0,344,345,1,0,0,0,345,347,5,23,0,0,346,348,5,29,0,0,347,346,1,
0,0,0,348,349,1,0,0,0,349,347,1,0,0,0,349,350,1,0,0,0,350,61,1,0,0,0,351,
353,5,14,0,0,352,351,1,0,0,0,352,353,1,0,0,0,353,355,1,0,0,0,354,356,5,28,
0,0,355,354,1,0,0,0,356,357,1,0,0,0,357,355,1,0,0,0,357,358,1,0,0,0,358,
63,1,0,0,0,359,361,5,14,0,0,360,359,1,0,0,0,360,361,1,0,0,0,361,363,1,0,
0,0,362,364,5,28,0,0,363,362,1,0,0,0,364,365,1,0,0,0,365,363,1,0,0,0,365,
366,1,0,0,0,366,367,1,0,0,0,367,369,5,9,0,0,368,370,5,28,0,0,369,368,1,0,
0,0,370,371,1,0,0,0,371,369,1,0,0,0,371,372,1,0,0,0,372,65,1,0,0,0,373,374,
5,15,0,0,374,67,1,0,0,0,375,376,5,2,0,0,376,69,1,0,0,0,377,378,5,20,0,0,
378,379,3,74,37,0,379,71,1,0,0,0,380,382,5,12,0,0,381,383,3,4,2,0,382,381,
1,0,0,0,382,383,1,0,0,0,383,384,1,0,0,0,384,386,5,30,0,0,385,387,3,4,2,0,
386,385,1,0,0,0,386,387,1,0,0,0,387,389,1,0,0,0,388,390,5,28,0,0,389,388,
1,0,0,0,390,391,1,0,0,0,391,389,1,0,0,0,391,392,1,0,0,0,392,394,1,0,0,0,
393,395,3,4,2,0,394,393,1,0,0,0,394,395,1,0,0,0,395,396,1,0,0,0,396,397,
5,13,0,0,397,73,1,0,0,0,398,406,7,1,0,0,399,401,5,30,0,0,400,399,1,0,0,0,
401,402,1,0,0,0,402,400,1,0,0,0,402,403,1,0,0,0,403,406,1,0,0,0,404,406,
3,68,34,0,405,398,1,0,0,0,405,400,1,0,0,0,405,404,1,0,0,0,406,75,1,0,0,0,
407,408,5,24,0,0,408,409,3,78,39,0,409,77,1,0,0,0,410,412,3,4,2,0,411,410,
1,0,0,0,411,412,1,0,0,0,412,423,1,0,0,0,413,417,3,52,26,0,414,417,3,80,40,
0,415,417,3,74,37,0,416,413,1,0,0,0,416,414,1,0,0,0,416,415,1,0,0,0,417,
419,1,0,0,0,418,420,3,4,2,0,419,418,1,0,0,0,419,420,1,0,0,0,420,422,1,0,
0,0,421,416,1,0,0,0,422,425,1,0,0,0,423,421,1,0,0,0,423,424,1,0,0,0,424,
426,1,0,0,0,425,423,1,0,0,0,426,427,5,6,0,0,427,79,1,0,0,0,428,429,5,7,0,
0,429,430,3,78,39,0,430,81,1,0,0,0,431,433,3,84,42,0,432,434,3,4,2,0,433,
432,1,0,0,0,433,434,1,0,0,0,434,436,1,0,0,0,435,437,3,82,41,0,436,435,1,
0,0,0,436,437,1,0,0,0,437,439,1,0,0,0,438,440,3,4,2,0,439,438,1,0,0,0,439,
440,1,0,0,0,440,83,1,0,0,0,441,443,3,4,2,0,442,441,1,0,0,0,442,443,1,0,0,
0,443,444,1,0,0,0,444,445,3,86,43,0,445,85,1,0,0,0,446,447,5,16,0,0,447,
87,1,0,0,0,448,450,5,30,0,0,449,448,1,0,0,0,450,451,1,0,0,0,451,449,1,0,
0,0,451,452,1,0,0,0,452,89,1,0,0,0,453,454,3,24,12,0,454,91,1,0,0,0,455,
457,3,94,47,0,456,458,3,92,46,0,457,456,1,0,0,0,457,458,1,0,0,0,458,93,1,
0,0,0,459,461,3,4,2,0,460,459,1,0,0,0,460,461,1,0,0,0,461,462,1,0,0,0,462,
464,5,11,0,0,463,465,3,4,2,0,464,463,1,0,0,0,464,465,1,0,0,0,465,468,1,0,
0,0,466,469,3,28,14,0,467,469,3,36,18,0,468,466,1,0,0,0,468,467,1,0,0,0,
469,95,1,0,0,0,80,101,104,107,110,115,119,124,127,133,137,141,147,150,152,
156,160,163,170,176,181,187,190,194,199,204,208,212,220,224,227,233,237,
241,245,249,254,258,262,268,273,277,280,283,288,293,297,300,303,309,312,
315,325,331,335,343,349,352,357,360,365,371,382,386,391,394,402,405,411,
416,419,423,433,436,439,442,451,457,460,464,468];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SmalltalkParser extends antlr4.Parser {

    static grammarFileName = "Smalltalk.g4";
    static literalNames = [ null, null, null, null, "'['", "']'", "')'", 
                            "'('", "'|'", "'.'", "';'", null, "'<'", "'>'", 
                            "'-'", null, null, "'^'", "':'", "':='", "'#'", 
                            "'$'", "'e'", "'16r'", "'#('", "'#{'", "'}'", 
                            "'{'" ];
    static symbolicNames = [ null, "SEPARATOR", "STRING", "COMMENT", "BLOCK_START", 
                             "BLOCK_END", "CLOSE_PAREN", "OPEN_PAREN", "PIPE", 
                             "PERIOD", "SEMI_COLON", "BINARY_SELECTOR", 
                             "LT", "GT", "MINUS", "RESERVED_WORD", "IDENTIFIER", 
                             "CARROT", "COLON", "ASSIGNMENT", "HASH", "DOLLAR", 
                             "EXP", "HEX", "LITARR_START", "DYNDICT_START", 
                             "DYNARR_END", "DYNARR_START", "DIGIT", "HEXDIGIT", 
                             "KEYWORD", "BLOCK_PARAM", "CHARACTER_CONSTANT" ];
    static ruleNames = [ "script", "sequence", "ws", "temps", "statements", 
                         "answer", "expression", "expressions", "expressionList", 
                         "cascade", "message", "assignment", "variable", 
                         "binarySend", "unarySend", "keywordSend", "keywordMessage", 
                         "keywordPair", "operand", "subexpression", "literal", 
                         "runtimeLiteral", "block", "blockParamList", "dynamicDictionary", 
                         "dynamicArray", "parsetimeLiteral", "number", "numberExp", 
                         "charConstant", "hex_", "stInteger", "stFloat", 
                         "pseudoVariable", "string", "symbol", "primitive", 
                         "bareSymbol", "literalArray", "literalArrayRest", 
                         "bareLiteralArray", "unaryTail", "unaryMessage", 
                         "unarySelector", "keywords", "reference", "binaryTail", 
                         "binaryMessage" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SmalltalkParser.ruleNames;
        this.literalNames = SmalltalkParser.literalNames;
        this.symbolicNames = SmalltalkParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	script() {
	    let localctx = new ScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SmalltalkParser.RULE_script);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.sequence();
	        this.state = 97;
	        this.match(SmalltalkParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sequence() {
	    let localctx = new SequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SmalltalkParser.RULE_sequence);
	    var _la = 0; // Token type
	    try {
	        this.state = 110;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SmalltalkParser.PIPE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 99;
	            this.temps();
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	                this.state = 100;
	                this.ws();
	            }

	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 2)) & ~0x1f) == 0 && ((1 << (_la - 2)) & ((1 << (SmalltalkParser.STRING - 2)) | (1 << (SmalltalkParser.BLOCK_START - 2)) | (1 << (SmalltalkParser.OPEN_PAREN - 2)) | (1 << (SmalltalkParser.LT - 2)) | (1 << (SmalltalkParser.MINUS - 2)) | (1 << (SmalltalkParser.RESERVED_WORD - 2)) | (1 << (SmalltalkParser.IDENTIFIER - 2)) | (1 << (SmalltalkParser.CARROT - 2)) | (1 << (SmalltalkParser.HASH - 2)) | (1 << (SmalltalkParser.HEX - 2)) | (1 << (SmalltalkParser.LITARR_START - 2)) | (1 << (SmalltalkParser.DYNDICT_START - 2)) | (1 << (SmalltalkParser.DYNARR_START - 2)) | (1 << (SmalltalkParser.DIGIT - 2)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 2)))) !== 0)) {
	                this.state = 103;
	                this.statements();
	            }

	            break;
	        case SmalltalkParser.SEPARATOR:
	        case SmalltalkParser.STRING:
	        case SmalltalkParser.COMMENT:
	        case SmalltalkParser.BLOCK_START:
	        case SmalltalkParser.OPEN_PAREN:
	        case SmalltalkParser.LT:
	        case SmalltalkParser.MINUS:
	        case SmalltalkParser.RESERVED_WORD:
	        case SmalltalkParser.IDENTIFIER:
	        case SmalltalkParser.CARROT:
	        case SmalltalkParser.HASH:
	        case SmalltalkParser.HEX:
	        case SmalltalkParser.LITARR_START:
	        case SmalltalkParser.DYNDICT_START:
	        case SmalltalkParser.DYNARR_START:
	        case SmalltalkParser.DIGIT:
	        case SmalltalkParser.CHARACTER_CONSTANT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	                this.state = 106;
	                this.ws();
	            }

	            this.state = 109;
	            this.statements();
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



	ws() {
	    let localctx = new WsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SmalltalkParser.RULE_ws);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 112;
	        		_la = this._input.LA(1);
	        		if(!(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT)) {
	        		this._errHandler.recoverInline(this);
	        		}
	        		else {
	        			this._errHandler.reportMatch(this);
	        		    this.consume();
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 115; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
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



	temps() {
	    let localctx = new TempsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SmalltalkParser.RULE_temps);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(SmalltalkParser.PIPE);
	        this.state = 122; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 119;
	        		this._errHandler.sync(this);
	        		_la = this._input.LA(1);
	        		if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	        		    this.state = 118;
	        		    this.ws();
	        		}

	        		this.state = 121;
	        		this.match(SmalltalkParser.IDENTIFIER);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 124; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,6, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 126;
	            this.ws();
	        }

	        this.state = 129;
	        this.match(SmalltalkParser.PIPE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statements() {
	    let localctx = new StatementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SmalltalkParser.RULE_statements);
	    var _la = 0; // Token type
	    try {
	        this.state = 152;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new StatementAnswerContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 131;
	            this.answer();
	            this.state = 133;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	                this.state = 132;
	                this.ws();
	            }

	            break;

	        case 2:
	            localctx = new StatementExpressionsAnswerContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 135;
	            this.expressions();
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	                this.state = 136;
	                this.ws();
	            }

	            this.state = 139;
	            this.match(SmalltalkParser.PERIOD);
	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	                this.state = 140;
	                this.ws();
	            }

	            this.state = 143;
	            this.answer();
	            break;

	        case 3:
	            localctx = new StatementExpressionsContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 145;
	            this.expressions();
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SmalltalkParser.PERIOD) {
	                this.state = 146;
	                this.match(SmalltalkParser.PERIOD);
	            }

	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	                this.state = 149;
	                this.ws();
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



	answer() {
	    let localctx = new AnswerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SmalltalkParser.RULE_answer);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(SmalltalkParser.CARROT);
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 155;
	            this.ws();
	        }

	        this.state = 158;
	        this.expression();
	        this.state = 160;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 159;
	            this.ws();

	        }
	        this.state = 163;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.PERIOD) {
	            this.state = 162;
	            this.match(SmalltalkParser.PERIOD);
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
	    this.enterRule(localctx, 12, SmalltalkParser.RULE_expression);
	    try {
	        this.state = 170;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 165;
	            this.assignment();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 166;
	            this.cascade();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 167;
	            this.keywordSend();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 168;
	            this.binarySend();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 169;
	            this.primitive();
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



	expressions() {
	    let localctx = new ExpressionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SmalltalkParser.RULE_expressions);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.expression();
	        this.state = 176;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 173;
	                this.expressionList(); 
	            }
	            this.state = 178;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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



	expressionList() {
	    let localctx = new ExpressionListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SmalltalkParser.RULE_expressionList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(SmalltalkParser.PERIOD);
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 180;
	            this.ws();
	        }

	        this.state = 183;
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



	cascade() {
	    let localctx = new CascadeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SmalltalkParser.RULE_cascade);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 185;
	            this.keywordSend();
	            break;

	        case 2:
	            this.state = 186;
	            this.binarySend();
	            break;

	        }
	        this.state = 197; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 190;
	        		this._errHandler.sync(this);
	        		_la = this._input.LA(1);
	        		if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	        		    this.state = 189;
	        		    this.ws();
	        		}

	        		this.state = 192;
	        		this.match(SmalltalkParser.SEMI_COLON);
	        		this.state = 194;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        		if(la_===1) {
	        		    this.state = 193;
	        		    this.ws();

	        		}
	        		this.state = 196;
	        		this.message();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 199; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,23, this._ctx);
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



	message() {
	    let localctx = new MessageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SmalltalkParser.RULE_message);
	    try {
	        this.state = 204;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 201;
	            this.binaryMessage();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 202;
	            this.unaryMessage();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 203;
	            this.keywordMessage();
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SmalltalkParser.RULE_assignment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.variable();
	        this.state = 208;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 207;
	            this.ws();
	        }

	        this.state = 210;
	        this.match(SmalltalkParser.ASSIGNMENT);
	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 211;
	            this.ws();
	        }

	        this.state = 214;
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SmalltalkParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.match(SmalltalkParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	binarySend() {
	    let localctx = new BinarySendContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, SmalltalkParser.RULE_binarySend);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        this.unarySend();
	        this.state = 220;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        if(la_===1) {
	            this.state = 219;
	            this.binaryTail();

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



	unarySend() {
	    let localctx = new UnarySendContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, SmalltalkParser.RULE_unarySend);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.operand();
	        this.state = 224;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        if(la_===1) {
	            this.state = 223;
	            this.ws();

	        }
	        this.state = 227;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        if(la_===1) {
	            this.state = 226;
	            this.unaryTail();

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



	keywordSend() {
	    let localctx = new KeywordSendContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, SmalltalkParser.RULE_keywordSend);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.binarySend();
	        this.state = 230;
	        this.keywordMessage();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keywordMessage() {
	    let localctx = new KeywordMessageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, SmalltalkParser.RULE_keywordMessage);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 232;
	            this.ws();
	        }

	        this.state = 239; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 235;
	            this.keywordPair();
	            this.state = 237;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	            if(la_===1) {
	                this.state = 236;
	                this.ws();

	            }
	            this.state = 241; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SmalltalkParser.KEYWORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keywordPair() {
	    let localctx = new KeywordPairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, SmalltalkParser.RULE_keywordPair);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.match(SmalltalkParser.KEYWORD);
	        this.state = 245;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 244;
	            this.ws();
	        }

	        this.state = 247;
	        this.binarySend();
	        this.state = 249;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        if(la_===1) {
	            this.state = 248;
	            this.ws();

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



	operand() {
	    let localctx = new OperandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, SmalltalkParser.RULE_operand);
	    try {
	        this.state = 254;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SmalltalkParser.STRING:
	        case SmalltalkParser.BLOCK_START:
	        case SmalltalkParser.MINUS:
	        case SmalltalkParser.RESERVED_WORD:
	        case SmalltalkParser.HASH:
	        case SmalltalkParser.HEX:
	        case SmalltalkParser.LITARR_START:
	        case SmalltalkParser.DYNDICT_START:
	        case SmalltalkParser.DYNARR_START:
	        case SmalltalkParser.DIGIT:
	        case SmalltalkParser.CHARACTER_CONSTANT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 251;
	            this.literal();
	            break;
	        case SmalltalkParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 252;
	            this.reference();
	            break;
	        case SmalltalkParser.OPEN_PAREN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 253;
	            this.subexpression();
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



	subexpression() {
	    let localctx = new SubexpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, SmalltalkParser.RULE_subexpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.match(SmalltalkParser.OPEN_PAREN);
	        this.state = 258;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 257;
	            this.ws();
	        }

	        this.state = 260;
	        this.expression();
	        this.state = 262;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 261;
	            this.ws();
	        }

	        this.state = 264;
	        this.match(SmalltalkParser.CLOSE_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 40, SmalltalkParser.RULE_literal);
	    try {
	        this.state = 268;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SmalltalkParser.BLOCK_START:
	        case SmalltalkParser.DYNDICT_START:
	        case SmalltalkParser.DYNARR_START:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 266;
	            this.runtimeLiteral();
	            break;
	        case SmalltalkParser.STRING:
	        case SmalltalkParser.MINUS:
	        case SmalltalkParser.RESERVED_WORD:
	        case SmalltalkParser.HASH:
	        case SmalltalkParser.HEX:
	        case SmalltalkParser.LITARR_START:
	        case SmalltalkParser.DIGIT:
	        case SmalltalkParser.CHARACTER_CONSTANT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 267;
	            this.parsetimeLiteral();
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



	runtimeLiteral() {
	    let localctx = new RuntimeLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, SmalltalkParser.RULE_runtimeLiteral);
	    try {
	        this.state = 273;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SmalltalkParser.DYNDICT_START:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 270;
	            this.dynamicDictionary();
	            break;
	        case SmalltalkParser.DYNARR_START:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 271;
	            this.dynamicArray();
	            break;
	        case SmalltalkParser.BLOCK_START:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 272;
	            this.block();
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, SmalltalkParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
	        this.match(SmalltalkParser.BLOCK_START);
	        this.state = 277;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        if(la_===1) {
	            this.state = 276;
	            this.blockParamList();

	        }
	        this.state = 280;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
	        if(la_===1) {
	            this.state = 279;
	            this.ws();

	        }
	        this.state = 283;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 1)) & ~0x1f) == 0 && ((1 << (_la - 1)) & ((1 << (SmalltalkParser.SEPARATOR - 1)) | (1 << (SmalltalkParser.STRING - 1)) | (1 << (SmalltalkParser.COMMENT - 1)) | (1 << (SmalltalkParser.BLOCK_START - 1)) | (1 << (SmalltalkParser.OPEN_PAREN - 1)) | (1 << (SmalltalkParser.PIPE - 1)) | (1 << (SmalltalkParser.LT - 1)) | (1 << (SmalltalkParser.MINUS - 1)) | (1 << (SmalltalkParser.RESERVED_WORD - 1)) | (1 << (SmalltalkParser.IDENTIFIER - 1)) | (1 << (SmalltalkParser.CARROT - 1)) | (1 << (SmalltalkParser.HASH - 1)) | (1 << (SmalltalkParser.HEX - 1)) | (1 << (SmalltalkParser.LITARR_START - 1)) | (1 << (SmalltalkParser.DYNDICT_START - 1)) | (1 << (SmalltalkParser.DYNARR_START - 1)) | (1 << (SmalltalkParser.DIGIT - 1)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 1)))) !== 0)) {
	            this.state = 282;
	            this.sequence();
	        }

	        this.state = 285;
	        this.match(SmalltalkParser.BLOCK_END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	blockParamList() {
	    let localctx = new BlockParamListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, SmalltalkParser.RULE_blockParamList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 291; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 288;
	        		this._errHandler.sync(this);
	        		_la = this._input.LA(1);
	        		if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	        		    this.state = 287;
	        		    this.ws();
	        		}

	        		this.state = 290;
	        		this.match(SmalltalkParser.BLOCK_PARAM);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 293; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,44, this._ctx);
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



	dynamicDictionary() {
	    let localctx = new DynamicDictionaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, SmalltalkParser.RULE_dynamicDictionary);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 295;
	        this.match(SmalltalkParser.DYNDICT_START);
	        this.state = 297;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
	        if(la_===1) {
	            this.state = 296;
	            this.ws();

	        }
	        this.state = 300;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 2)) & ~0x1f) == 0 && ((1 << (_la - 2)) & ((1 << (SmalltalkParser.STRING - 2)) | (1 << (SmalltalkParser.BLOCK_START - 2)) | (1 << (SmalltalkParser.OPEN_PAREN - 2)) | (1 << (SmalltalkParser.LT - 2)) | (1 << (SmalltalkParser.MINUS - 2)) | (1 << (SmalltalkParser.RESERVED_WORD - 2)) | (1 << (SmalltalkParser.IDENTIFIER - 2)) | (1 << (SmalltalkParser.HASH - 2)) | (1 << (SmalltalkParser.HEX - 2)) | (1 << (SmalltalkParser.LITARR_START - 2)) | (1 << (SmalltalkParser.DYNDICT_START - 2)) | (1 << (SmalltalkParser.DYNARR_START - 2)) | (1 << (SmalltalkParser.DIGIT - 2)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 2)))) !== 0)) {
	            this.state = 299;
	            this.expressions();
	        }

	        this.state = 303;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 302;
	            this.ws();
	        }

	        this.state = 305;
	        this.match(SmalltalkParser.DYNARR_END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dynamicArray() {
	    let localctx = new DynamicArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, SmalltalkParser.RULE_dynamicArray);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.match(SmalltalkParser.DYNARR_START);
	        this.state = 309;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        if(la_===1) {
	            this.state = 308;
	            this.ws();

	        }
	        this.state = 312;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 2)) & ~0x1f) == 0 && ((1 << (_la - 2)) & ((1 << (SmalltalkParser.STRING - 2)) | (1 << (SmalltalkParser.BLOCK_START - 2)) | (1 << (SmalltalkParser.OPEN_PAREN - 2)) | (1 << (SmalltalkParser.LT - 2)) | (1 << (SmalltalkParser.MINUS - 2)) | (1 << (SmalltalkParser.RESERVED_WORD - 2)) | (1 << (SmalltalkParser.IDENTIFIER - 2)) | (1 << (SmalltalkParser.HASH - 2)) | (1 << (SmalltalkParser.HEX - 2)) | (1 << (SmalltalkParser.LITARR_START - 2)) | (1 << (SmalltalkParser.DYNDICT_START - 2)) | (1 << (SmalltalkParser.DYNARR_START - 2)) | (1 << (SmalltalkParser.DIGIT - 2)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 2)))) !== 0)) {
	            this.state = 311;
	            this.expressions();
	        }

	        this.state = 315;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 314;
	            this.ws();
	        }

	        this.state = 317;
	        this.match(SmalltalkParser.DYNARR_END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parsetimeLiteral() {
	    let localctx = new ParsetimeLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, SmalltalkParser.RULE_parsetimeLiteral);
	    try {
	        this.state = 325;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SmalltalkParser.RESERVED_WORD:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 319;
	            this.pseudoVariable();
	            break;
	        case SmalltalkParser.MINUS:
	        case SmalltalkParser.HEX:
	        case SmalltalkParser.DIGIT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 320;
	            this.number();
	            break;
	        case SmalltalkParser.CHARACTER_CONSTANT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 321;
	            this.charConstant();
	            break;
	        case SmalltalkParser.LITARR_START:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 322;
	            this.literalArray();
	            break;
	        case SmalltalkParser.STRING:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 323;
	            this.string();
	            break;
	        case SmalltalkParser.HASH:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 324;
	            this.symbol();
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, SmalltalkParser.RULE_number);
	    try {
	        this.state = 331;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 327;
	            this.numberExp();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 328;
	            this.hex_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 329;
	            this.stFloat();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 330;
	            this.stInteger();
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



	numberExp() {
	    let localctx = new NumberExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, SmalltalkParser.RULE_numberExp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 333;
	            this.stFloat();
	            break;

	        case 2:
	            this.state = 334;
	            this.stInteger();
	            break;

	        }
	        this.state = 337;
	        this.match(SmalltalkParser.EXP);
	        this.state = 338;
	        this.stInteger();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	charConstant() {
	    let localctx = new CharConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, SmalltalkParser.RULE_charConstant);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        this.match(SmalltalkParser.CHARACTER_CONSTANT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hex_() {
	    let localctx = new Hex_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, SmalltalkParser.RULE_hex_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.MINUS) {
	            this.state = 342;
	            this.match(SmalltalkParser.MINUS);
	        }

	        this.state = 345;
	        this.match(SmalltalkParser.HEX);
	        this.state = 347; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 346;
	            this.match(SmalltalkParser.HEXDIGIT);
	            this.state = 349; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SmalltalkParser.HEXDIGIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stInteger() {
	    let localctx = new StIntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, SmalltalkParser.RULE_stInteger);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.MINUS) {
	            this.state = 351;
	            this.match(SmalltalkParser.MINUS);
	        }

	        this.state = 355; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 354;
	        		this.match(SmalltalkParser.DIGIT);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 357; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,57, this._ctx);
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



	stFloat() {
	    let localctx = new StFloatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, SmalltalkParser.RULE_stFloat);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 360;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.MINUS) {
	            this.state = 359;
	            this.match(SmalltalkParser.MINUS);
	        }

	        this.state = 363; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 362;
	            this.match(SmalltalkParser.DIGIT);
	            this.state = 365; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SmalltalkParser.DIGIT);
	        this.state = 367;
	        this.match(SmalltalkParser.PERIOD);
	        this.state = 369; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 368;
	        		this.match(SmalltalkParser.DIGIT);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 371; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,60, this._ctx);
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



	pseudoVariable() {
	    let localctx = new PseudoVariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, SmalltalkParser.RULE_pseudoVariable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        this.match(SmalltalkParser.RESERVED_WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, SmalltalkParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 375;
	        this.match(SmalltalkParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	symbol() {
	    let localctx = new SymbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, SmalltalkParser.RULE_symbol);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.match(SmalltalkParser.HASH);
	        this.state = 378;
	        this.bareSymbol();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primitive() {
	    let localctx = new PrimitiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, SmalltalkParser.RULE_primitive);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 380;
	        this.match(SmalltalkParser.LT);
	        this.state = 382;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 381;
	            this.ws();
	        }

	        this.state = 384;
	        this.match(SmalltalkParser.KEYWORD);
	        this.state = 386;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 385;
	            this.ws();
	        }

	        this.state = 389; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 388;
	            this.match(SmalltalkParser.DIGIT);
	            this.state = 391; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SmalltalkParser.DIGIT);
	        this.state = 394;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 393;
	            this.ws();
	        }

	        this.state = 396;
	        this.match(SmalltalkParser.GT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bareSymbol() {
	    let localctx = new BareSymbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, SmalltalkParser.RULE_bareSymbol);
	    var _la = 0; // Token type
	    try {
	        this.state = 405;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SmalltalkParser.BINARY_SELECTOR:
	        case SmalltalkParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 398;
	            _la = this._input.LA(1);
	            if(!(_la===SmalltalkParser.BINARY_SELECTOR || _la===SmalltalkParser.IDENTIFIER)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case SmalltalkParser.KEYWORD:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 400; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 399;
	            		this.match(SmalltalkParser.KEYWORD);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 402; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,65, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case SmalltalkParser.STRING:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 404;
	            this.string();
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



	literalArray() {
	    let localctx = new LiteralArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, SmalltalkParser.RULE_literalArray);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 407;
	        this.match(SmalltalkParser.LITARR_START);
	        this.state = 408;
	        this.literalArrayRest();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literalArrayRest() {
	    let localctx = new LiteralArrayRestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, SmalltalkParser.RULE_literalArrayRest);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 411;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 410;
	            this.ws();
	        }

	        this.state = 423;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 2)) & ~0x1f) == 0 && ((1 << (_la - 2)) & ((1 << (SmalltalkParser.STRING - 2)) | (1 << (SmalltalkParser.OPEN_PAREN - 2)) | (1 << (SmalltalkParser.BINARY_SELECTOR - 2)) | (1 << (SmalltalkParser.MINUS - 2)) | (1 << (SmalltalkParser.RESERVED_WORD - 2)) | (1 << (SmalltalkParser.IDENTIFIER - 2)) | (1 << (SmalltalkParser.HASH - 2)) | (1 << (SmalltalkParser.HEX - 2)) | (1 << (SmalltalkParser.LITARR_START - 2)) | (1 << (SmalltalkParser.DIGIT - 2)) | (1 << (SmalltalkParser.KEYWORD - 2)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 2)))) !== 0)) {
	            this.state = 416;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,68,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 413;
	                this.parsetimeLiteral();
	                break;

	            case 2:
	                this.state = 414;
	                this.bareLiteralArray();
	                break;

	            case 3:
	                this.state = 415;
	                this.bareSymbol();
	                break;

	            }
	            this.state = 419;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	                this.state = 418;
	                this.ws();
	            }

	            this.state = 425;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 426;
	        this.match(SmalltalkParser.CLOSE_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bareLiteralArray() {
	    let localctx = new BareLiteralArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, SmalltalkParser.RULE_bareLiteralArray);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 428;
	        this.match(SmalltalkParser.OPEN_PAREN);
	        this.state = 429;
	        this.literalArrayRest();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unaryTail() {
	    let localctx = new UnaryTailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, SmalltalkParser.RULE_unaryTail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 431;
	        this.unaryMessage();
	        this.state = 433;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,71,this._ctx);
	        if(la_===1) {
	            this.state = 432;
	            this.ws();

	        }
	        this.state = 436;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,72,this._ctx);
	        if(la_===1) {
	            this.state = 435;
	            this.unaryTail();

	        }
	        this.state = 439;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,73,this._ctx);
	        if(la_===1) {
	            this.state = 438;
	            this.ws();

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



	unaryMessage() {
	    let localctx = new UnaryMessageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, SmalltalkParser.RULE_unaryMessage);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 442;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 441;
	            this.ws();
	        }

	        this.state = 444;
	        this.unarySelector();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unarySelector() {
	    let localctx = new UnarySelectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, SmalltalkParser.RULE_unarySelector);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 446;
	        this.match(SmalltalkParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 88, SmalltalkParser.RULE_keywords);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 449; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 448;
	            this.match(SmalltalkParser.KEYWORD);
	            this.state = 451; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SmalltalkParser.KEYWORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	reference() {
	    let localctx = new ReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, SmalltalkParser.RULE_reference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 453;
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



	binaryTail() {
	    let localctx = new BinaryTailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, SmalltalkParser.RULE_binaryTail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 455;
	        this.binaryMessage();
	        this.state = 457;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,76,this._ctx);
	        if(la_===1) {
	            this.state = 456;
	            this.binaryTail();

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



	binaryMessage() {
	    let localctx = new BinaryMessageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, SmalltalkParser.RULE_binaryMessage);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 460;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 459;
	            this.ws();
	        }

	        this.state = 462;
	        this.match(SmalltalkParser.BINARY_SELECTOR);
	        this.state = 464;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT) {
	            this.state = 463;
	            this.ws();
	        }

	        this.state = 468;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,79,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 466;
	            this.unarySend();
	            break;

	        case 2:
	            this.state = 467;
	            this.operand();
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

SmalltalkParser.EOF = antlr4.Token.EOF;
SmalltalkParser.SEPARATOR = 1;
SmalltalkParser.STRING = 2;
SmalltalkParser.COMMENT = 3;
SmalltalkParser.BLOCK_START = 4;
SmalltalkParser.BLOCK_END = 5;
SmalltalkParser.CLOSE_PAREN = 6;
SmalltalkParser.OPEN_PAREN = 7;
SmalltalkParser.PIPE = 8;
SmalltalkParser.PERIOD = 9;
SmalltalkParser.SEMI_COLON = 10;
SmalltalkParser.BINARY_SELECTOR = 11;
SmalltalkParser.LT = 12;
SmalltalkParser.GT = 13;
SmalltalkParser.MINUS = 14;
SmalltalkParser.RESERVED_WORD = 15;
SmalltalkParser.IDENTIFIER = 16;
SmalltalkParser.CARROT = 17;
SmalltalkParser.COLON = 18;
SmalltalkParser.ASSIGNMENT = 19;
SmalltalkParser.HASH = 20;
SmalltalkParser.DOLLAR = 21;
SmalltalkParser.EXP = 22;
SmalltalkParser.HEX = 23;
SmalltalkParser.LITARR_START = 24;
SmalltalkParser.DYNDICT_START = 25;
SmalltalkParser.DYNARR_END = 26;
SmalltalkParser.DYNARR_START = 27;
SmalltalkParser.DIGIT = 28;
SmalltalkParser.HEXDIGIT = 29;
SmalltalkParser.KEYWORD = 30;
SmalltalkParser.BLOCK_PARAM = 31;
SmalltalkParser.CHARACTER_CONSTANT = 32;

SmalltalkParser.RULE_script = 0;
SmalltalkParser.RULE_sequence = 1;
SmalltalkParser.RULE_ws = 2;
SmalltalkParser.RULE_temps = 3;
SmalltalkParser.RULE_statements = 4;
SmalltalkParser.RULE_answer = 5;
SmalltalkParser.RULE_expression = 6;
SmalltalkParser.RULE_expressions = 7;
SmalltalkParser.RULE_expressionList = 8;
SmalltalkParser.RULE_cascade = 9;
SmalltalkParser.RULE_message = 10;
SmalltalkParser.RULE_assignment = 11;
SmalltalkParser.RULE_variable = 12;
SmalltalkParser.RULE_binarySend = 13;
SmalltalkParser.RULE_unarySend = 14;
SmalltalkParser.RULE_keywordSend = 15;
SmalltalkParser.RULE_keywordMessage = 16;
SmalltalkParser.RULE_keywordPair = 17;
SmalltalkParser.RULE_operand = 18;
SmalltalkParser.RULE_subexpression = 19;
SmalltalkParser.RULE_literal = 20;
SmalltalkParser.RULE_runtimeLiteral = 21;
SmalltalkParser.RULE_block = 22;
SmalltalkParser.RULE_blockParamList = 23;
SmalltalkParser.RULE_dynamicDictionary = 24;
SmalltalkParser.RULE_dynamicArray = 25;
SmalltalkParser.RULE_parsetimeLiteral = 26;
SmalltalkParser.RULE_number = 27;
SmalltalkParser.RULE_numberExp = 28;
SmalltalkParser.RULE_charConstant = 29;
SmalltalkParser.RULE_hex_ = 30;
SmalltalkParser.RULE_stInteger = 31;
SmalltalkParser.RULE_stFloat = 32;
SmalltalkParser.RULE_pseudoVariable = 33;
SmalltalkParser.RULE_string = 34;
SmalltalkParser.RULE_symbol = 35;
SmalltalkParser.RULE_primitive = 36;
SmalltalkParser.RULE_bareSymbol = 37;
SmalltalkParser.RULE_literalArray = 38;
SmalltalkParser.RULE_literalArrayRest = 39;
SmalltalkParser.RULE_bareLiteralArray = 40;
SmalltalkParser.RULE_unaryTail = 41;
SmalltalkParser.RULE_unaryMessage = 42;
SmalltalkParser.RULE_unarySelector = 43;
SmalltalkParser.RULE_keywords = 44;
SmalltalkParser.RULE_reference = 45;
SmalltalkParser.RULE_binaryTail = 46;
SmalltalkParser.RULE_binaryMessage = 47;

class ScriptContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_script;
    }

	sequence() {
	    return this.getTypedRuleContext(SequenceContext,0);
	};

	EOF() {
	    return this.getToken(SmalltalkParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterScript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitScript(this);
		}
	}


}



class SequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_sequence;
    }

	temps() {
	    return this.getTypedRuleContext(TempsContext,0);
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitSequence(this);
		}
	}


}



class WsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_ws;
    }

	SEPARATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SmalltalkParser.SEPARATOR);
	    } else {
	        return this.getToken(SmalltalkParser.SEPARATOR, i);
	    }
	};


	COMMENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SmalltalkParser.COMMENT);
	    } else {
	        return this.getToken(SmalltalkParser.COMMENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterWs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitWs(this);
		}
	}


}



class TempsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_temps;
    }

	PIPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SmalltalkParser.PIPE);
	    } else {
	        return this.getToken(SmalltalkParser.PIPE, i);
	    }
	};


	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SmalltalkParser.IDENTIFIER);
	    } else {
	        return this.getToken(SmalltalkParser.IDENTIFIER, i);
	    }
	};


	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterTemps(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitTemps(this);
		}
	}


}



class StatementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_statements;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StatementAnswerContext extends StatementsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	answer() {
	    return this.getTypedRuleContext(AnswerContext,0);
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterStatementAnswer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitStatementAnswer(this);
		}
	}


}

SmalltalkParser.StatementAnswerContext = StatementAnswerContext;

class StatementExpressionsContext extends StatementsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expressions() {
	    return this.getTypedRuleContext(ExpressionsContext,0);
	};

	PERIOD() {
	    return this.getToken(SmalltalkParser.PERIOD, 0);
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterStatementExpressions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitStatementExpressions(this);
		}
	}


}

SmalltalkParser.StatementExpressionsContext = StatementExpressionsContext;

class StatementExpressionsAnswerContext extends StatementsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expressions() {
	    return this.getTypedRuleContext(ExpressionsContext,0);
	};

	PERIOD() {
	    return this.getToken(SmalltalkParser.PERIOD, 0);
	};

	answer() {
	    return this.getTypedRuleContext(AnswerContext,0);
	};

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterStatementExpressionsAnswer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitStatementExpressionsAnswer(this);
		}
	}


}

SmalltalkParser.StatementExpressionsAnswerContext = StatementExpressionsAnswerContext;

class AnswerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_answer;
    }

	CARROT() {
	    return this.getToken(SmalltalkParser.CARROT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	PERIOD() {
	    return this.getToken(SmalltalkParser.PERIOD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterAnswer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitAnswer(this);
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
        this.ruleIndex = SmalltalkParser.RULE_expression;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	cascade() {
	    return this.getTypedRuleContext(CascadeContext,0);
	};

	keywordSend() {
	    return this.getTypedRuleContext(KeywordSendContext,0);
	};

	binarySend() {
	    return this.getTypedRuleContext(BinarySendContext,0);
	};

	primitive() {
	    return this.getTypedRuleContext(PrimitiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitExpression(this);
		}
	}


}



class ExpressionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_expressions;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	expressionList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionListContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionListContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterExpressions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitExpressions(this);
		}
	}


}



class ExpressionListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_expressionList;
    }

	PERIOD() {
	    return this.getToken(SmalltalkParser.PERIOD, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterExpressionList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitExpressionList(this);
		}
	}


}



class CascadeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_cascade;
    }

	keywordSend() {
	    return this.getTypedRuleContext(KeywordSendContext,0);
	};

	binarySend() {
	    return this.getTypedRuleContext(BinarySendContext,0);
	};

	SEMI_COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SmalltalkParser.SEMI_COLON);
	    } else {
	        return this.getToken(SmalltalkParser.SEMI_COLON, i);
	    }
	};


	message = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MessageContext);
	    } else {
	        return this.getTypedRuleContext(MessageContext,i);
	    }
	};

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterCascade(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitCascade(this);
		}
	}


}



class MessageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_message;
    }

	binaryMessage() {
	    return this.getTypedRuleContext(BinaryMessageContext,0);
	};

	unaryMessage() {
	    return this.getTypedRuleContext(UnaryMessageContext,0);
	};

	keywordMessage() {
	    return this.getTypedRuleContext(KeywordMessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterMessage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitMessage(this);
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
        this.ruleIndex = SmalltalkParser.RULE_assignment;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	ASSIGNMENT() {
	    return this.getToken(SmalltalkParser.ASSIGNMENT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitAssignment(this);
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
        this.ruleIndex = SmalltalkParser.RULE_variable;
    }

	IDENTIFIER() {
	    return this.getToken(SmalltalkParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitVariable(this);
		}
	}


}



class BinarySendContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_binarySend;
    }

	unarySend() {
	    return this.getTypedRuleContext(UnarySendContext,0);
	};

	binaryTail() {
	    return this.getTypedRuleContext(BinaryTailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterBinarySend(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitBinarySend(this);
		}
	}


}



class UnarySendContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_unarySend;
    }

	operand() {
	    return this.getTypedRuleContext(OperandContext,0);
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	unaryTail() {
	    return this.getTypedRuleContext(UnaryTailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterUnarySend(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitUnarySend(this);
		}
	}


}



class KeywordSendContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_keywordSend;
    }

	binarySend() {
	    return this.getTypedRuleContext(BinarySendContext,0);
	};

	keywordMessage() {
	    return this.getTypedRuleContext(KeywordMessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterKeywordSend(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitKeywordSend(this);
		}
	}


}



class KeywordMessageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_keywordMessage;
    }

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	keywordPair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeywordPairContext);
	    } else {
	        return this.getTypedRuleContext(KeywordPairContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterKeywordMessage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitKeywordMessage(this);
		}
	}


}



class KeywordPairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_keywordPair;
    }

	KEYWORD() {
	    return this.getToken(SmalltalkParser.KEYWORD, 0);
	};

	binarySend() {
	    return this.getTypedRuleContext(BinarySendContext,0);
	};

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterKeywordPair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitKeywordPair(this);
		}
	}


}



class OperandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_operand;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	subexpression() {
	    return this.getTypedRuleContext(SubexpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterOperand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitOperand(this);
		}
	}


}



class SubexpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_subexpression;
    }

	OPEN_PAREN() {
	    return this.getToken(SmalltalkParser.OPEN_PAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CLOSE_PAREN() {
	    return this.getToken(SmalltalkParser.CLOSE_PAREN, 0);
	};

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterSubexpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitSubexpression(this);
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
        this.ruleIndex = SmalltalkParser.RULE_literal;
    }

	runtimeLiteral() {
	    return this.getTypedRuleContext(RuntimeLiteralContext,0);
	};

	parsetimeLiteral() {
	    return this.getTypedRuleContext(ParsetimeLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class RuntimeLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_runtimeLiteral;
    }

	dynamicDictionary() {
	    return this.getTypedRuleContext(DynamicDictionaryContext,0);
	};

	dynamicArray() {
	    return this.getTypedRuleContext(DynamicArrayContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterRuntimeLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitRuntimeLiteral(this);
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
        this.ruleIndex = SmalltalkParser.RULE_block;
    }

	BLOCK_START() {
	    return this.getToken(SmalltalkParser.BLOCK_START, 0);
	};

	BLOCK_END() {
	    return this.getToken(SmalltalkParser.BLOCK_END, 0);
	};

	blockParamList() {
	    return this.getTypedRuleContext(BlockParamListContext,0);
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	sequence() {
	    return this.getTypedRuleContext(SequenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitBlock(this);
		}
	}


}



class BlockParamListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_blockParamList;
    }

	BLOCK_PARAM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SmalltalkParser.BLOCK_PARAM);
	    } else {
	        return this.getToken(SmalltalkParser.BLOCK_PARAM, i);
	    }
	};


	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterBlockParamList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitBlockParamList(this);
		}
	}


}



class DynamicDictionaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_dynamicDictionary;
    }

	DYNDICT_START() {
	    return this.getToken(SmalltalkParser.DYNDICT_START, 0);
	};

	DYNARR_END() {
	    return this.getToken(SmalltalkParser.DYNARR_END, 0);
	};

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	expressions() {
	    return this.getTypedRuleContext(ExpressionsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterDynamicDictionary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitDynamicDictionary(this);
		}
	}


}



class DynamicArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_dynamicArray;
    }

	DYNARR_START() {
	    return this.getToken(SmalltalkParser.DYNARR_START, 0);
	};

	DYNARR_END() {
	    return this.getToken(SmalltalkParser.DYNARR_END, 0);
	};

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	expressions() {
	    return this.getTypedRuleContext(ExpressionsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterDynamicArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitDynamicArray(this);
		}
	}


}



class ParsetimeLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_parsetimeLiteral;
    }

	pseudoVariable() {
	    return this.getTypedRuleContext(PseudoVariableContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	charConstant() {
	    return this.getTypedRuleContext(CharConstantContext,0);
	};

	literalArray() {
	    return this.getTypedRuleContext(LiteralArrayContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	symbol() {
	    return this.getTypedRuleContext(SymbolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterParsetimeLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitParsetimeLiteral(this);
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
        this.ruleIndex = SmalltalkParser.RULE_number;
    }

	numberExp() {
	    return this.getTypedRuleContext(NumberExpContext,0);
	};

	hex_() {
	    return this.getTypedRuleContext(Hex_Context,0);
	};

	stFloat() {
	    return this.getTypedRuleContext(StFloatContext,0);
	};

	stInteger() {
	    return this.getTypedRuleContext(StIntegerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitNumber(this);
		}
	}


}



class NumberExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_numberExp;
    }

	EXP() {
	    return this.getToken(SmalltalkParser.EXP, 0);
	};

	stInteger = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StIntegerContext);
	    } else {
	        return this.getTypedRuleContext(StIntegerContext,i);
	    }
	};

	stFloat() {
	    return this.getTypedRuleContext(StFloatContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterNumberExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitNumberExp(this);
		}
	}


}



class CharConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_charConstant;
    }

	CHARACTER_CONSTANT() {
	    return this.getToken(SmalltalkParser.CHARACTER_CONSTANT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterCharConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitCharConstant(this);
		}
	}


}



class Hex_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_hex_;
    }

	HEX() {
	    return this.getToken(SmalltalkParser.HEX, 0);
	};

	MINUS() {
	    return this.getToken(SmalltalkParser.MINUS, 0);
	};

	HEXDIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SmalltalkParser.HEXDIGIT);
	    } else {
	        return this.getToken(SmalltalkParser.HEXDIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterHex_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitHex_(this);
		}
	}


}



class StIntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_stInteger;
    }

	MINUS() {
	    return this.getToken(SmalltalkParser.MINUS, 0);
	};

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SmalltalkParser.DIGIT);
	    } else {
	        return this.getToken(SmalltalkParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterStInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitStInteger(this);
		}
	}


}



class StFloatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_stFloat;
    }

	PERIOD() {
	    return this.getToken(SmalltalkParser.PERIOD, 0);
	};

	MINUS() {
	    return this.getToken(SmalltalkParser.MINUS, 0);
	};

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SmalltalkParser.DIGIT);
	    } else {
	        return this.getToken(SmalltalkParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterStFloat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitStFloat(this);
		}
	}


}



class PseudoVariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_pseudoVariable;
    }

	RESERVED_WORD() {
	    return this.getToken(SmalltalkParser.RESERVED_WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterPseudoVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitPseudoVariable(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_string;
    }

	STRING() {
	    return this.getToken(SmalltalkParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitString(this);
		}
	}


}



class SymbolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_symbol;
    }

	HASH() {
	    return this.getToken(SmalltalkParser.HASH, 0);
	};

	bareSymbol() {
	    return this.getTypedRuleContext(BareSymbolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterSymbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitSymbol(this);
		}
	}


}



class PrimitiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_primitive;
    }

	LT() {
	    return this.getToken(SmalltalkParser.LT, 0);
	};

	KEYWORD() {
	    return this.getToken(SmalltalkParser.KEYWORD, 0);
	};

	GT() {
	    return this.getToken(SmalltalkParser.GT, 0);
	};

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SmalltalkParser.DIGIT);
	    } else {
	        return this.getToken(SmalltalkParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterPrimitive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitPrimitive(this);
		}
	}


}



class BareSymbolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_bareSymbol;
    }

	IDENTIFIER() {
	    return this.getToken(SmalltalkParser.IDENTIFIER, 0);
	};

	BINARY_SELECTOR() {
	    return this.getToken(SmalltalkParser.BINARY_SELECTOR, 0);
	};

	KEYWORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SmalltalkParser.KEYWORD);
	    } else {
	        return this.getToken(SmalltalkParser.KEYWORD, i);
	    }
	};


	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterBareSymbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitBareSymbol(this);
		}
	}


}



class LiteralArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_literalArray;
    }

	LITARR_START() {
	    return this.getToken(SmalltalkParser.LITARR_START, 0);
	};

	literalArrayRest() {
	    return this.getTypedRuleContext(LiteralArrayRestContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterLiteralArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitLiteralArray(this);
		}
	}


}



class LiteralArrayRestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_literalArrayRest;
    }

	CLOSE_PAREN() {
	    return this.getToken(SmalltalkParser.CLOSE_PAREN, 0);
	};

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	parsetimeLiteral = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParsetimeLiteralContext);
	    } else {
	        return this.getTypedRuleContext(ParsetimeLiteralContext,i);
	    }
	};

	bareLiteralArray = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BareLiteralArrayContext);
	    } else {
	        return this.getTypedRuleContext(BareLiteralArrayContext,i);
	    }
	};

	bareSymbol = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BareSymbolContext);
	    } else {
	        return this.getTypedRuleContext(BareSymbolContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterLiteralArrayRest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitLiteralArrayRest(this);
		}
	}


}



class BareLiteralArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_bareLiteralArray;
    }

	OPEN_PAREN() {
	    return this.getToken(SmalltalkParser.OPEN_PAREN, 0);
	};

	literalArrayRest() {
	    return this.getTypedRuleContext(LiteralArrayRestContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterBareLiteralArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitBareLiteralArray(this);
		}
	}


}



class UnaryTailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_unaryTail;
    }

	unaryMessage() {
	    return this.getTypedRuleContext(UnaryMessageContext,0);
	};

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	unaryTail() {
	    return this.getTypedRuleContext(UnaryTailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterUnaryTail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitUnaryTail(this);
		}
	}


}



class UnaryMessageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_unaryMessage;
    }

	unarySelector() {
	    return this.getTypedRuleContext(UnarySelectorContext,0);
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterUnaryMessage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitUnaryMessage(this);
		}
	}


}



class UnarySelectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_unarySelector;
    }

	IDENTIFIER() {
	    return this.getToken(SmalltalkParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterUnarySelector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitUnarySelector(this);
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
        this.ruleIndex = SmalltalkParser.RULE_keywords;
    }

	KEYWORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SmalltalkParser.KEYWORD);
	    } else {
	        return this.getToken(SmalltalkParser.KEYWORD, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterKeywords(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitKeywords(this);
		}
	}


}



class ReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_reference;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitReference(this);
		}
	}


}



class BinaryTailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_binaryTail;
    }

	binaryMessage() {
	    return this.getTypedRuleContext(BinaryMessageContext,0);
	};

	binaryTail() {
	    return this.getTypedRuleContext(BinaryTailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterBinaryTail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitBinaryTail(this);
		}
	}


}



class BinaryMessageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmalltalkParser.RULE_binaryMessage;
    }

	BINARY_SELECTOR() {
	    return this.getToken(SmalltalkParser.BINARY_SELECTOR, 0);
	};

	unarySend() {
	    return this.getTypedRuleContext(UnarySendContext,0);
	};

	operand() {
	    return this.getTypedRuleContext(OperandContext,0);
	};

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.enterBinaryMessage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmalltalkListener ) {
	        listener.exitBinaryMessage(this);
		}
	}


}




SmalltalkParser.ScriptContext = ScriptContext; 
SmalltalkParser.SequenceContext = SequenceContext; 
SmalltalkParser.WsContext = WsContext; 
SmalltalkParser.TempsContext = TempsContext; 
SmalltalkParser.StatementsContext = StatementsContext; 
SmalltalkParser.AnswerContext = AnswerContext; 
SmalltalkParser.ExpressionContext = ExpressionContext; 
SmalltalkParser.ExpressionsContext = ExpressionsContext; 
SmalltalkParser.ExpressionListContext = ExpressionListContext; 
SmalltalkParser.CascadeContext = CascadeContext; 
SmalltalkParser.MessageContext = MessageContext; 
SmalltalkParser.AssignmentContext = AssignmentContext; 
SmalltalkParser.VariableContext = VariableContext; 
SmalltalkParser.BinarySendContext = BinarySendContext; 
SmalltalkParser.UnarySendContext = UnarySendContext; 
SmalltalkParser.KeywordSendContext = KeywordSendContext; 
SmalltalkParser.KeywordMessageContext = KeywordMessageContext; 
SmalltalkParser.KeywordPairContext = KeywordPairContext; 
SmalltalkParser.OperandContext = OperandContext; 
SmalltalkParser.SubexpressionContext = SubexpressionContext; 
SmalltalkParser.LiteralContext = LiteralContext; 
SmalltalkParser.RuntimeLiteralContext = RuntimeLiteralContext; 
SmalltalkParser.BlockContext = BlockContext; 
SmalltalkParser.BlockParamListContext = BlockParamListContext; 
SmalltalkParser.DynamicDictionaryContext = DynamicDictionaryContext; 
SmalltalkParser.DynamicArrayContext = DynamicArrayContext; 
SmalltalkParser.ParsetimeLiteralContext = ParsetimeLiteralContext; 
SmalltalkParser.NumberContext = NumberContext; 
SmalltalkParser.NumberExpContext = NumberExpContext; 
SmalltalkParser.CharConstantContext = CharConstantContext; 
SmalltalkParser.Hex_Context = Hex_Context; 
SmalltalkParser.StIntegerContext = StIntegerContext; 
SmalltalkParser.StFloatContext = StFloatContext; 
SmalltalkParser.PseudoVariableContext = PseudoVariableContext; 
SmalltalkParser.StringContext = StringContext; 
SmalltalkParser.SymbolContext = SymbolContext; 
SmalltalkParser.PrimitiveContext = PrimitiveContext; 
SmalltalkParser.BareSymbolContext = BareSymbolContext; 
SmalltalkParser.LiteralArrayContext = LiteralArrayContext; 
SmalltalkParser.LiteralArrayRestContext = LiteralArrayRestContext; 
SmalltalkParser.BareLiteralArrayContext = BareLiteralArrayContext; 
SmalltalkParser.UnaryTailContext = UnaryTailContext; 
SmalltalkParser.UnaryMessageContext = UnaryMessageContext; 
SmalltalkParser.UnarySelectorContext = UnarySelectorContext; 
SmalltalkParser.KeywordsContext = KeywordsContext; 
SmalltalkParser.ReferenceContext = ReferenceContext; 
SmalltalkParser.BinaryTailContext = BinaryTailContext; 
SmalltalkParser.BinaryMessageContext = BinaryMessageContext; 
