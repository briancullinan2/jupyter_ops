// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/orwell/orwell.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import orwellListener from './orwellListener.js';
const serializedATN = [4,1,35,547,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,1,0,
4,0,114,8,0,11,0,12,0,115,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,125,8,1,1,2,1,
2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,5,3,136,8,3,10,3,12,3,139,9,3,1,4,1,4,1,4,
5,4,144,8,4,10,4,12,4,147,9,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,158,
8,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,170,8,6,1,7,1,7,5,7,174,
8,7,10,7,12,7,177,9,7,1,8,1,8,1,8,1,8,3,8,183,8,8,1,8,1,8,1,9,1,9,1,9,1,
9,1,9,1,9,1,9,1,9,3,9,195,8,9,1,10,1,10,1,10,1,10,3,10,201,8,10,1,11,1,11,
1,11,1,11,3,11,207,8,11,1,12,1,12,1,12,5,12,212,8,12,10,12,12,12,215,9,12,
3,12,217,8,12,1,13,1,13,1,13,1,13,3,13,223,8,13,1,13,1,13,3,13,227,8,13,
1,14,1,14,1,14,1,14,1,14,3,14,234,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,3,15,245,8,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,5,17,255,
8,17,10,17,12,17,258,9,17,1,17,1,17,1,18,1,18,5,18,264,8,18,10,18,12,18,
267,9,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,276,8,18,1,19,1,19,4,19,
280,8,19,11,19,12,19,281,1,20,1,20,1,20,1,20,1,20,3,20,289,8,20,1,21,1,21,
1,22,1,22,1,22,1,22,3,22,297,8,22,1,22,1,22,1,22,1,22,5,22,303,8,22,10,22,
12,22,306,9,22,1,23,1,23,3,23,310,8,23,1,23,3,23,313,8,23,1,24,1,24,1,24,
5,24,318,8,24,10,24,12,24,321,9,24,1,24,1,24,3,24,325,8,24,1,25,1,25,1,25,
1,25,1,25,1,26,1,26,1,26,1,26,1,27,1,27,4,27,338,8,27,11,27,12,27,339,1,
28,1,28,1,28,1,28,3,28,346,8,28,1,29,1,29,1,29,1,29,3,29,352,8,29,1,30,1,
30,1,30,5,30,357,8,30,10,30,12,30,360,9,30,3,30,362,8,30,1,31,1,31,1,31,
1,31,3,31,368,8,31,1,31,1,31,3,31,372,8,31,1,32,1,32,1,32,1,32,3,32,378,
8,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,3,33,388,8,33,1,34,1,34,1,34,
1,34,1,34,1,34,5,34,396,8,34,10,34,12,34,399,9,34,1,34,1,34,1,35,1,35,1,
35,1,35,5,35,407,8,35,10,35,12,35,410,9,35,3,35,412,8,35,1,35,1,35,1,36,
1,36,1,36,1,36,3,36,420,8,36,1,37,1,37,1,37,1,37,3,37,426,8,37,1,38,1,38,
1,38,5,38,431,8,38,10,38,12,38,434,9,38,3,38,436,8,38,1,39,1,39,1,39,1,39,
3,39,442,8,39,1,39,1,39,3,39,446,8,39,1,40,1,40,1,40,1,40,3,40,452,8,40,
1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,3,41,462,8,41,1,42,1,42,1,42,3,42,
467,8,42,1,43,1,43,1,43,1,43,1,43,1,43,5,43,475,8,43,10,43,12,43,478,9,43,
1,43,1,43,1,44,1,44,1,44,1,44,5,44,486,8,44,10,44,12,44,489,9,44,3,44,491,
8,44,1,44,1,44,1,45,1,45,1,45,1,45,3,45,499,8,45,1,45,1,45,3,45,503,8,45,
1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,5,46,513,8,46,10,46,12,46,516,9,
46,3,46,518,8,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,3,47,527,8,47,1,48,1,
48,3,48,531,8,48,1,49,1,49,1,50,1,50,1,51,1,51,1,52,1,52,1,53,1,53,1,54,
1,54,1,55,1,55,1,55,0,0,56,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,
82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,0,2,1,0,12,17,3,0,26,
26,28,28,34,34,567,0,113,1,0,0,0,2,124,1,0,0,0,4,126,1,0,0,0,6,130,1,0,0,
0,8,140,1,0,0,0,10,151,1,0,0,0,12,169,1,0,0,0,14,171,1,0,0,0,16,178,1,0,
0,0,18,194,1,0,0,0,20,196,1,0,0,0,22,206,1,0,0,0,24,216,1,0,0,0,26,226,1,
0,0,0,28,233,1,0,0,0,30,244,1,0,0,0,32,246,1,0,0,0,34,250,1,0,0,0,36,275,
1,0,0,0,38,277,1,0,0,0,40,288,1,0,0,0,42,290,1,0,0,0,44,292,1,0,0,0,46,309,
1,0,0,0,48,314,1,0,0,0,50,326,1,0,0,0,52,331,1,0,0,0,54,335,1,0,0,0,56,341,
1,0,0,0,58,351,1,0,0,0,60,361,1,0,0,0,62,371,1,0,0,0,64,377,1,0,0,0,66,387,
1,0,0,0,68,389,1,0,0,0,70,402,1,0,0,0,72,415,1,0,0,0,74,425,1,0,0,0,76,435,
1,0,0,0,78,445,1,0,0,0,80,451,1,0,0,0,82,461,1,0,0,0,84,466,1,0,0,0,86,468,
1,0,0,0,88,481,1,0,0,0,90,494,1,0,0,0,92,506,1,0,0,0,94,526,1,0,0,0,96,530,
1,0,0,0,98,532,1,0,0,0,100,534,1,0,0,0,102,536,1,0,0,0,104,538,1,0,0,0,106,
540,1,0,0,0,108,542,1,0,0,0,110,544,1,0,0,0,112,114,3,2,1,0,113,112,1,0,
0,0,114,115,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,117,1,0,0,0,117,
118,5,0,0,1,118,1,1,0,0,0,119,125,3,4,2,0,120,125,3,6,3,0,121,125,3,8,4,
0,122,125,3,38,19,0,123,125,3,44,22,0,124,119,1,0,0,0,124,120,1,0,0,0,124,
121,1,0,0,0,124,122,1,0,0,0,124,123,1,0,0,0,125,3,1,0,0,0,126,127,3,12,6,
0,127,128,5,1,0,0,128,129,3,20,10,0,129,5,1,0,0,0,130,131,3,12,6,0,131,132,
5,2,0,0,132,137,3,36,18,0,133,134,5,3,0,0,134,136,3,36,18,0,135,133,1,0,
0,0,136,139,1,0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,138,7,1,0,0,0,139,137,
1,0,0,0,140,145,3,10,5,0,141,142,5,4,0,0,142,144,3,10,5,0,143,141,1,0,0,
0,144,147,1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,148,1,0,0,0,147,145,
1,0,0,0,148,149,5,5,0,0,149,150,3,20,10,0,150,9,1,0,0,0,151,152,3,110,55,
0,152,157,5,6,0,0,153,154,3,110,55,0,154,155,3,102,51,0,155,158,1,0,0,0,
156,158,3,100,50,0,157,153,1,0,0,0,157,156,1,0,0,0,158,159,1,0,0,0,159,160,
5,7,0,0,160,11,1,0,0,0,161,162,3,106,53,0,162,163,3,100,50,0,163,164,3,106,
53,0,164,170,1,0,0,0,165,166,3,102,51,0,166,167,3,106,53,0,167,170,1,0,0,
0,168,170,3,14,7,0,169,161,1,0,0,0,169,165,1,0,0,0,169,168,1,0,0,0,170,13,
1,0,0,0,171,175,3,16,8,0,172,174,3,106,53,0,173,172,1,0,0,0,174,177,1,0,
0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,15,1,0,0,0,177,175,1,0,0,0,178,179,
3,104,52,0,179,182,5,6,0,0,180,183,3,12,6,0,181,183,3,18,9,0,182,180,1,0,
0,0,182,181,1,0,0,0,183,184,1,0,0,0,184,185,5,7,0,0,185,17,1,0,0,0,186,195,
3,102,51,0,187,195,3,100,50,0,188,189,3,100,50,0,189,190,3,106,53,0,190,
195,1,0,0,0,191,192,3,106,53,0,192,193,3,100,50,0,193,195,1,0,0,0,194,186,
1,0,0,0,194,187,1,0,0,0,194,188,1,0,0,0,194,191,1,0,0,0,195,19,1,0,0,0,196,
200,3,22,11,0,197,198,3,100,50,0,198,199,3,20,10,0,199,201,1,0,0,0,200,197,
1,0,0,0,200,201,1,0,0,0,201,21,1,0,0,0,202,203,3,102,51,0,203,204,3,22,11,
0,204,207,1,0,0,0,205,207,3,24,12,0,206,202,1,0,0,0,206,205,1,0,0,0,207,
23,1,0,0,0,208,217,3,28,14,0,209,213,3,26,13,0,210,212,3,28,14,0,211,210,
1,0,0,0,212,215,1,0,0,0,213,211,1,0,0,0,213,214,1,0,0,0,214,217,1,0,0,0,
215,213,1,0,0,0,216,208,1,0,0,0,216,209,1,0,0,0,217,25,1,0,0,0,218,227,3,
104,52,0,219,222,5,6,0,0,220,223,3,20,10,0,221,223,3,30,15,0,222,220,1,0,
0,0,222,221,1,0,0,0,223,224,1,0,0,0,224,225,5,7,0,0,225,227,1,0,0,0,226,
218,1,0,0,0,226,219,1,0,0,0,227,27,1,0,0,0,228,234,3,26,13,0,229,230,3,106,
53,0,230,231,3,34,17,0,231,234,1,0,0,0,232,234,3,32,16,0,233,228,1,0,0,0,
233,229,1,0,0,0,233,232,1,0,0,0,234,29,1,0,0,0,235,236,3,102,51,0,236,237,
3,100,50,0,237,245,1,0,0,0,238,239,3,100,50,0,239,240,3,22,11,0,240,245,
1,0,0,0,241,242,3,22,11,0,242,243,3,100,50,0,243,245,1,0,0,0,244,235,1,0,
0,0,244,238,1,0,0,0,244,241,1,0,0,0,245,31,1,0,0,0,246,247,5,8,0,0,247,248,
3,20,10,0,248,249,5,9,0,0,249,33,1,0,0,0,250,251,5,6,0,0,251,256,3,20,10,
0,252,253,5,4,0,0,253,255,3,20,10,0,254,252,1,0,0,0,255,258,1,0,0,0,256,
254,1,0,0,0,256,257,1,0,0,0,257,259,1,0,0,0,258,256,1,0,0,0,259,260,5,7,
0,0,260,35,1,0,0,0,261,265,3,108,54,0,262,264,3,28,14,0,263,262,1,0,0,0,
264,267,1,0,0,0,265,263,1,0,0,0,265,266,1,0,0,0,266,276,1,0,0,0,267,265,
1,0,0,0,268,269,3,28,14,0,269,270,3,100,50,0,270,271,3,28,14,0,271,276,1,
0,0,0,272,273,3,102,51,0,273,274,3,28,14,0,274,276,1,0,0,0,275,261,1,0,0,
0,275,268,1,0,0,0,275,272,1,0,0,0,276,37,1,0,0,0,277,279,3,40,20,0,278,280,
5,31,0,0,279,278,1,0,0,0,280,281,1,0,0,0,281,279,1,0,0,0,281,282,1,0,0,0,
282,39,1,0,0,0,283,284,3,42,21,0,284,285,5,33,0,0,285,289,1,0,0,0,286,289,
5,10,0,0,287,289,5,11,0,0,288,283,1,0,0,0,288,286,1,0,0,0,288,287,1,0,0,
0,289,41,1,0,0,0,290,291,7,0,0,0,291,43,1,0,0,0,292,293,3,56,28,0,293,294,
5,18,0,0,294,304,3,46,23,0,295,297,5,19,0,0,296,295,1,0,0,0,296,297,1,0,
0,0,297,298,1,0,0,0,298,299,3,56,28,0,299,300,5,18,0,0,300,301,3,46,23,0,
301,303,1,0,0,0,302,296,1,0,0,0,303,306,1,0,0,0,304,302,1,0,0,0,304,305,
1,0,0,0,305,45,1,0,0,0,306,304,1,0,0,0,307,310,3,72,36,0,308,310,3,48,24,
0,309,307,1,0,0,0,309,308,1,0,0,0,310,312,1,0,0,0,311,313,3,54,27,0,312,
311,1,0,0,0,312,313,1,0,0,0,313,47,1,0,0,0,314,319,3,50,25,0,315,316,5,18,
0,0,316,318,3,50,25,0,317,315,1,0,0,0,318,321,1,0,0,0,319,317,1,0,0,0,319,
320,1,0,0,0,320,324,1,0,0,0,321,319,1,0,0,0,322,323,5,18,0,0,323,325,3,52,
26,0,324,322,1,0,0,0,324,325,1,0,0,0,325,49,1,0,0,0,326,327,3,72,36,0,327,
328,5,4,0,0,328,329,5,20,0,0,329,330,3,72,36,0,330,51,1,0,0,0,331,332,3,
72,36,0,332,333,5,4,0,0,333,334,5,21,0,0,334,53,1,0,0,0,335,337,5,22,0,0,
336,338,3,44,22,0,337,336,1,0,0,0,338,339,1,0,0,0,339,337,1,0,0,0,339,340,
1,0,0,0,340,55,1,0,0,0,341,345,3,58,29,0,342,343,3,100,50,0,343,344,3,56,
28,0,344,346,1,0,0,0,345,342,1,0,0,0,345,346,1,0,0,0,346,57,1,0,0,0,347,
348,3,102,51,0,348,349,3,58,29,0,349,352,1,0,0,0,350,352,3,60,30,0,351,347,
1,0,0,0,351,350,1,0,0,0,352,59,1,0,0,0,353,362,3,64,32,0,354,358,3,62,31,
0,355,357,3,64,32,0,356,355,1,0,0,0,357,360,1,0,0,0,358,356,1,0,0,0,358,
359,1,0,0,0,359,362,1,0,0,0,360,358,1,0,0,0,361,353,1,0,0,0,361,354,1,0,
0,0,362,61,1,0,0,0,363,372,3,110,55,0,364,367,5,6,0,0,365,368,3,56,28,0,
366,368,3,66,33,0,367,365,1,0,0,0,367,366,1,0,0,0,368,369,1,0,0,0,369,370,
5,7,0,0,370,372,1,0,0,0,371,363,1,0,0,0,371,364,1,0,0,0,372,63,1,0,0,0,373,
378,3,62,31,0,374,378,3,98,49,0,375,378,3,68,34,0,376,378,3,70,35,0,377,
373,1,0,0,0,377,374,1,0,0,0,377,375,1,0,0,0,377,376,1,0,0,0,378,65,1,0,0,
0,379,388,3,102,51,0,380,388,3,100,50,0,381,382,3,100,50,0,382,383,3,58,
29,0,383,388,1,0,0,0,384,385,3,58,29,0,385,386,3,100,50,0,386,388,1,0,0,
0,387,379,1,0,0,0,387,380,1,0,0,0,387,381,1,0,0,0,387,384,1,0,0,0,388,67,
1,0,0,0,389,390,5,6,0,0,390,391,3,56,28,0,391,392,5,4,0,0,392,397,3,56,28,
0,393,394,5,4,0,0,394,396,3,56,28,0,395,393,1,0,0,0,396,399,1,0,0,0,397,
395,1,0,0,0,397,398,1,0,0,0,398,400,1,0,0,0,399,397,1,0,0,0,400,401,5,7,
0,0,401,69,1,0,0,0,402,411,5,8,0,0,403,408,3,56,28,0,404,405,5,4,0,0,405,
407,3,56,28,0,406,404,1,0,0,0,407,410,1,0,0,0,408,406,1,0,0,0,408,409,1,
0,0,0,409,412,1,0,0,0,410,408,1,0,0,0,411,403,1,0,0,0,411,412,1,0,0,0,412,
413,1,0,0,0,413,414,5,9,0,0,414,71,1,0,0,0,415,419,3,74,37,0,416,417,3,100,
50,0,417,418,3,72,36,0,418,420,1,0,0,0,419,416,1,0,0,0,419,420,1,0,0,0,420,
73,1,0,0,0,421,422,3,102,51,0,422,423,3,74,37,0,423,426,1,0,0,0,424,426,
3,76,38,0,425,421,1,0,0,0,425,424,1,0,0,0,426,75,1,0,0,0,427,436,3,80,40,
0,428,432,3,78,39,0,429,431,3,80,40,0,430,429,1,0,0,0,431,434,1,0,0,0,432,
430,1,0,0,0,432,433,1,0,0,0,433,436,1,0,0,0,434,432,1,0,0,0,435,427,1,0,
0,0,435,428,1,0,0,0,436,77,1,0,0,0,437,446,3,110,55,0,438,441,5,6,0,0,439,
442,3,72,36,0,440,442,3,82,41,0,441,439,1,0,0,0,441,440,1,0,0,0,442,443,
1,0,0,0,443,444,5,7,0,0,444,446,1,0,0,0,445,437,1,0,0,0,445,438,1,0,0,0,
446,79,1,0,0,0,447,452,3,78,39,0,448,452,3,96,48,0,449,452,3,86,43,0,450,
452,3,84,42,0,451,447,1,0,0,0,451,448,1,0,0,0,451,449,1,0,0,0,451,450,1,
0,0,0,452,81,1,0,0,0,453,462,3,102,51,0,454,462,3,100,50,0,455,456,3,100,
50,0,456,457,3,74,37,0,457,462,1,0,0,0,458,459,3,74,37,0,459,460,3,100,50,
0,460,462,1,0,0,0,461,453,1,0,0,0,461,454,1,0,0,0,461,455,1,0,0,0,461,458,
1,0,0,0,462,83,1,0,0,0,463,467,3,88,44,0,464,467,3,90,45,0,465,467,3,92,
46,0,466,463,1,0,0,0,466,464,1,0,0,0,466,465,1,0,0,0,467,85,1,0,0,0,468,
469,5,6,0,0,469,470,3,72,36,0,470,471,5,4,0,0,471,476,3,72,36,0,472,473,
5,4,0,0,473,475,3,72,36,0,474,472,1,0,0,0,475,478,1,0,0,0,476,474,1,0,0,
0,476,477,1,0,0,0,477,479,1,0,0,0,478,476,1,0,0,0,479,480,5,7,0,0,480,87,
1,0,0,0,481,490,5,8,0,0,482,487,3,72,36,0,483,484,5,4,0,0,484,486,3,72,36,
0,485,483,1,0,0,0,486,489,1,0,0,0,487,485,1,0,0,0,487,488,1,0,0,0,488,491,
1,0,0,0,489,487,1,0,0,0,490,482,1,0,0,0,490,491,1,0,0,0,491,492,1,0,0,0,
492,493,5,9,0,0,493,89,1,0,0,0,494,495,5,8,0,0,495,498,3,72,36,0,496,497,
5,4,0,0,497,499,3,72,36,0,498,496,1,0,0,0,498,499,1,0,0,0,499,500,1,0,0,
0,500,502,5,23,0,0,501,503,3,72,36,0,502,501,1,0,0,0,502,503,1,0,0,0,503,
504,1,0,0,0,504,505,5,9,0,0,505,91,1,0,0,0,506,507,5,8,0,0,507,508,3,72,
36,0,508,517,5,3,0,0,509,514,3,94,47,0,510,511,5,24,0,0,511,513,3,94,47,
0,512,510,1,0,0,0,513,516,1,0,0,0,514,512,1,0,0,0,514,515,1,0,0,0,515,518,
1,0,0,0,516,514,1,0,0,0,517,509,1,0,0,0,517,518,1,0,0,0,518,519,1,0,0,0,
519,520,5,9,0,0,520,93,1,0,0,0,521,527,3,72,36,0,522,523,3,56,28,0,523,524,
5,25,0,0,524,525,3,72,36,0,525,527,1,0,0,0,526,521,1,0,0,0,526,522,1,0,0,
0,527,95,1,0,0,0,528,531,5,27,0,0,529,531,3,98,49,0,530,528,1,0,0,0,530,
529,1,0,0,0,531,97,1,0,0,0,532,533,7,1,0,0,533,99,1,0,0,0,534,535,5,31,0,
0,535,101,1,0,0,0,536,537,5,31,0,0,537,103,1,0,0,0,538,539,5,32,0,0,539,
105,1,0,0,0,540,541,5,32,0,0,541,107,1,0,0,0,542,543,5,32,0,0,543,109,1,
0,0,0,544,545,5,32,0,0,545,111,1,0,0,0,58,115,124,137,145,157,169,175,182,
194,200,206,213,216,222,226,233,244,256,265,275,281,288,296,304,309,312,
319,324,339,345,351,358,361,367,371,377,387,397,408,411,419,425,432,435,
441,445,451,461,466,476,487,490,498,502,514,517,526,530];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class orwellParser extends antlr4.Parser {

    static grammarFileName = "orwell.g4";
    static literalNames = [ null, "'=='", "':=='", "'|'", "','", "'::'", 
                            "'('", "')'", "'['", "']'", "'%prefix'", "'%prefixcon'", 
                            "'%left'", "'%right'", "'%non'", "'%leftcon'", 
                            "'%rightcon'", "'%noncon'", "'='", "'%else'", 
                            "'if'", "'otherwise'", "'where'", "'..'", "';'", 
                            "'<-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "INTEGER", "FLOAT", "STRING", "ESCCHAR", 
                             "PRAGMA", "OP", "ID", "DIGIT", "CHAR", "WS" ];
    static ruleNames = [ "program", "decl", "syndecl", "condecl", "typedecl", 
                         "name", "tylhs", "tylhs1", "tylhsprimary", "tylhssection", 
                         "type_", "tyterm1", "tyterm2", "typrimaryname", 
                         "typrimary", "tysection", "tylist", "tytuple", 
                         "construct", "opdecl", "opkind", "assoc", "def_", 
                         "rhs", "conditional", "ifpart", "otherpart", "wherepart", 
                         "pat", "pat1", "pat2", "patprimaryname", "patprimary", 
                         "patsection", "pattuple", "patlist", "term", "term1", 
                         "term2", "primaryname", "primary", "section", "list_", 
                         "tuple_", "listform", "upto", "comp", "qualifier", 
                         "fliteral", "literal", "infix", "prefix", "tyname", 
                         "tyvar", "con", "var_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = orwellParser.ruleNames;
        this.literalNames = orwellParser.literalNames;
        this.symbolicNames = orwellParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, orwellParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 112;
	            this.decl();
	            this.state = 115; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 6)) & ~0x1f) === 0 && ((1 << (_la - 6)) & 374345717) !== 0));
	        this.state = 117;
	        this.match(orwellParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 2, orwellParser.RULE_decl);
	    try {
	        this.state = 124;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 119;
	            this.syndecl();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 120;
	            this.condecl();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 121;
	            this.typedecl();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 122;
	            this.opdecl();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 123;
	            this.def_();
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



	syndecl() {
	    let localctx = new SyndeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, orwellParser.RULE_syndecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.tylhs();
	        this.state = 127;
	        this.match(orwellParser.T__0);
	        this.state = 128;
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



	condecl() {
	    let localctx = new CondeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, orwellParser.RULE_condecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.tylhs();
	        this.state = 131;
	        this.match(orwellParser.T__1);
	        this.state = 132;
	        this.construct();
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 133;
	            this.match(orwellParser.T__2);
	            this.state = 134;
	            this.construct();
	            this.state = 139;
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



	typedecl() {
	    let localctx = new TypedeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, orwellParser.RULE_typedecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.name();
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 141;
	            this.match(orwellParser.T__3);
	            this.state = 142;
	            this.name();
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 148;
	        this.match(orwellParser.T__4);
	        this.state = 149;
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, orwellParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.var_();
	        this.state = 152;
	        this.match(orwellParser.T__5);
	        this.state = 157;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            this.state = 153;
	            this.var_();
	            this.state = 154;
	            this.prefix();
	            break;
	        case 31:
	            this.state = 156;
	            this.infix();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 159;
	        this.match(orwellParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tylhs() {
	    let localctx = new TylhsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, orwellParser.RULE_tylhs);
	    try {
	        this.state = 169;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 161;
	            this.tyvar();
	            this.state = 162;
	            this.infix();
	            this.state = 163;
	            this.tyvar();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 165;
	            this.prefix();
	            this.state = 166;
	            this.tyvar();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 168;
	            this.tylhs1();
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



	tylhs1() {
	    let localctx = new Tylhs1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, orwellParser.RULE_tylhs1);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.tylhsprimary();
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===32) {
	            this.state = 172;
	            this.tyvar();
	            this.state = 177;
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



	tylhsprimary() {
	    let localctx = new TylhsprimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, orwellParser.RULE_tylhsprimary);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.tyname();
	        this.state = 179;
	        this.match(orwellParser.T__5);
	        this.state = 182;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 180;
	            this.tylhs();
	            break;

	        case 2:
	            this.state = 181;
	            this.tylhssection();
	            break;

	        }
	        this.state = 184;
	        this.match(orwellParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tylhssection() {
	    let localctx = new TylhssectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, orwellParser.RULE_tylhssection);
	    try {
	        this.state = 194;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 186;
	            this.prefix();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 187;
	            this.infix();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 188;
	            this.infix();
	            this.state = 189;
	            this.tyvar();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 191;
	            this.tyvar();
	            this.state = 192;
	            this.infix();
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



	type_() {
	    let localctx = new Type_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, orwellParser.RULE_type_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.tyterm1();
	        this.state = 200;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 197;
	            this.infix();
	            this.state = 198;
	            this.type_();

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



	tyterm1() {
	    let localctx = new Tyterm1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, orwellParser.RULE_tyterm1);
	    try {
	        this.state = 206;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 202;
	            this.prefix();
	            this.state = 203;
	            this.tyterm1();
	            break;
	        case 6:
	        case 8:
	        case 32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 205;
	            this.tyterm2();
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



	tyterm2() {
	    let localctx = new Tyterm2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, orwellParser.RULE_tyterm2);
	    try {
	        this.state = 216;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 208;
	            this.typrimary();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 209;
	            this.typrimaryname();
	            this.state = 213;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 210;
	                    this.typrimary(); 
	                }
	                this.state = 215;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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



	typrimaryname() {
	    let localctx = new TyprimarynameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, orwellParser.RULE_typrimaryname);
	    try {
	        this.state = 226;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 218;
	            this.tyname();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 219;
	            this.match(orwellParser.T__5);
	            this.state = 222;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 220;
	                this.type_();
	                break;

	            case 2:
	                this.state = 221;
	                this.tysection();
	                break;

	            }
	            this.state = 224;
	            this.match(orwellParser.T__6);
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



	typrimary() {
	    let localctx = new TyprimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, orwellParser.RULE_typrimary);
	    try {
	        this.state = 233;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 228;
	            this.typrimaryname();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 229;
	            this.tyvar();
	            this.state = 230;
	            this.tytuple();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 232;
	            this.tylist();
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



	tysection() {
	    let localctx = new TysectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, orwellParser.RULE_tysection);
	    try {
	        this.state = 244;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 235;
	            this.prefix();
	            this.state = 236;
	            this.infix();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 238;
	            this.infix();
	            this.state = 239;
	            this.tyterm1();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 241;
	            this.tyterm1();
	            this.state = 242;
	            this.infix();
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



	tylist() {
	    let localctx = new TylistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, orwellParser.RULE_tylist);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.match(orwellParser.T__7);
	        this.state = 247;
	        this.type_();
	        this.state = 248;
	        this.match(orwellParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tytuple() {
	    let localctx = new TytupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, orwellParser.RULE_tytuple);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.match(orwellParser.T__5);
	        this.state = 251;
	        this.type_();
	        this.state = 256;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 252;
	            this.match(orwellParser.T__3);
	            this.state = 253;
	            this.type_();
	            this.state = 258;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 259;
	        this.match(orwellParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	construct() {
	    let localctx = new ConstructContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, orwellParser.RULE_construct);
	    try {
	        this.state = 275;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 261;
	            this.con();
	            this.state = 265;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 262;
	                    this.typrimary(); 
	                }
	                this.state = 267;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 268;
	            this.typrimary();
	            this.state = 269;
	            this.infix();
	            this.state = 270;
	            this.typrimary();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 272;
	            this.prefix();
	            this.state = 273;
	            this.typrimary();
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



	opdecl() {
	    let localctx = new OpdeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, orwellParser.RULE_opdecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.opkind();
	        this.state = 279; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 278;
	        		this.match(orwellParser.OP);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 281; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,20, this._ctx);
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



	opkind() {
	    let localctx = new OpkindContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, orwellParser.RULE_opkind);
	    try {
	        this.state = 288;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 283;
	            this.assoc();
	            this.state = 284;
	            this.match(orwellParser.DIGIT);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 286;
	            this.match(orwellParser.T__9);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 287;
	            this.match(orwellParser.T__10);
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



	assoc() {
	    let localctx = new AssocContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, orwellParser.RULE_assoc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 258048) !== 0))) {
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



	def_() {
	    let localctx = new Def_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, orwellParser.RULE_def_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
	        this.pat();
	        this.state = 293;
	        this.match(orwellParser.T__17);
	        this.state = 294;
	        this.rhs();
	        this.state = 304;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 296;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===19) {
	                    this.state = 295;
	                    this.match(orwellParser.T__18);
	                }

	                this.state = 298;
	                this.pat();
	                this.state = 299;
	                this.match(orwellParser.T__17);
	                this.state = 300;
	                this.rhs(); 
	            }
	            this.state = 306;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
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



	rhs() {
	    let localctx = new RhsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, orwellParser.RULE_rhs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 307;
	            this.term();
	            break;

	        case 2:
	            this.state = 308;
	            this.conditional();
	            break;

	        }
	        this.state = 312;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 311;
	            this.wherepart();
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



	conditional() {
	    let localctx = new ConditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, orwellParser.RULE_conditional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this.ifpart();
	        this.state = 319;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 315;
	                this.match(orwellParser.T__17);
	                this.state = 316;
	                this.ifpart(); 
	            }
	            this.state = 321;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
	        }

	        this.state = 324;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 322;
	            this.match(orwellParser.T__17);
	            this.state = 323;
	            this.otherpart();
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



	ifpart() {
	    let localctx = new IfpartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, orwellParser.RULE_ifpart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 326;
	        this.term();
	        this.state = 327;
	        this.match(orwellParser.T__3);
	        this.state = 328;
	        this.match(orwellParser.T__19);
	        this.state = 329;
	        this.term();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	otherpart() {
	    let localctx = new OtherpartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, orwellParser.RULE_otherpart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        this.term();
	        this.state = 332;
	        this.match(orwellParser.T__3);
	        this.state = 333;
	        this.match(orwellParser.T__20);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wherepart() {
	    let localctx = new WherepartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, orwellParser.RULE_wherepart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        this.match(orwellParser.T__21);
	        this.state = 337; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 336;
	        		this.def_();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 339; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,28, this._ctx);
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



	pat() {
	    let localctx = new PatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, orwellParser.RULE_pat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 341;
	        this.pat1();
	        this.state = 345;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 342;
	            this.infix();
	            this.state = 343;
	            this.pat();
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



	pat1() {
	    let localctx = new Pat1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, orwellParser.RULE_pat1);
	    try {
	        this.state = 351;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 347;
	            this.prefix();
	            this.state = 348;
	            this.pat1();
	            break;
	        case 6:
	        case 8:
	        case 26:
	        case 28:
	        case 32:
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 350;
	            this.pat2();
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



	pat2() {
	    let localctx = new Pat2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, orwellParser.RULE_pat2);
	    var _la = 0;
	    try {
	        this.state = 361;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 353;
	            this.patprimary();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 354;
	            this.patprimaryname();
	            this.state = 358;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 6)) & ~0x1f) === 0 && ((1 << (_la - 6)) & 340787205) !== 0)) {
	                this.state = 355;
	                this.patprimary();
	                this.state = 360;
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



	patprimaryname() {
	    let localctx = new PatprimarynameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, orwellParser.RULE_patprimaryname);
	    try {
	        this.state = 371;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 363;
	            this.var_();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 364;
	            this.match(orwellParser.T__5);
	            this.state = 367;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 365;
	                this.pat();
	                break;

	            case 2:
	                this.state = 366;
	                this.patsection();
	                break;

	            }
	            this.state = 369;
	            this.match(orwellParser.T__6);
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



	patprimary() {
	    let localctx = new PatprimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, orwellParser.RULE_patprimary);
	    try {
	        this.state = 377;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 373;
	            this.patprimaryname();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 374;
	            this.literal();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 375;
	            this.pattuple();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 376;
	            this.patlist();
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



	patsection() {
	    let localctx = new PatsectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, orwellParser.RULE_patsection);
	    try {
	        this.state = 387;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 379;
	            this.prefix();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 380;
	            this.infix();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 381;
	            this.infix();
	            this.state = 382;
	            this.pat1();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 384;
	            this.pat1();
	            this.state = 385;
	            this.infix();
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



	pattuple() {
	    let localctx = new PattupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, orwellParser.RULE_pattuple);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 389;
	        this.match(orwellParser.T__5);
	        this.state = 390;
	        this.pat();
	        this.state = 391;
	        this.match(orwellParser.T__3);
	        this.state = 392;
	        this.pat();
	        this.state = 397;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 393;
	            this.match(orwellParser.T__3);
	            this.state = 394;
	            this.pat();
	            this.state = 399;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 400;
	        this.match(orwellParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	patlist() {
	    let localctx = new PatlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, orwellParser.RULE_patlist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 402;
	        this.match(orwellParser.T__7);
	        this.state = 411;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 6)) & ~0x1f) === 0 && ((1 << (_la - 6)) & 374341637) !== 0)) {
	            this.state = 403;
	            this.pat();
	            this.state = 408;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 404;
	                this.match(orwellParser.T__3);
	                this.state = 405;
	                this.pat();
	                this.state = 410;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 413;
	        this.match(orwellParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 72, orwellParser.RULE_term);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 415;
	        this.term1();
	        this.state = 419;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        if(la_===1) {
	            this.state = 416;
	            this.infix();
	            this.state = 417;
	            this.term();

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



	term1() {
	    let localctx = new Term1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, orwellParser.RULE_term1);
	    try {
	        this.state = 425;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 421;
	            this.prefix();
	            this.state = 422;
	            this.term1();
	            break;
	        case 6:
	        case 8:
	        case 26:
	        case 27:
	        case 28:
	        case 32:
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 424;
	            this.term2();
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



	term2() {
	    let localctx = new Term2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, orwellParser.RULE_term2);
	    try {
	        this.state = 435;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 427;
	            this.primary();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 428;
	            this.primaryname();
	            this.state = 432;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 429;
	                    this.primary(); 
	                }
	                this.state = 434;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
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



	primaryname() {
	    let localctx = new PrimarynameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, orwellParser.RULE_primaryname);
	    try {
	        this.state = 445;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 437;
	            this.var_();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 438;
	            this.match(orwellParser.T__5);
	            this.state = 441;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 439;
	                this.term();
	                break;

	            case 2:
	                this.state = 440;
	                this.section();
	                break;

	            }
	            this.state = 443;
	            this.match(orwellParser.T__6);
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



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, orwellParser.RULE_primary);
	    try {
	        this.state = 451;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 447;
	            this.primaryname();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 448;
	            this.fliteral();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 449;
	            this.tuple_();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 450;
	            this.list_();
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



	section() {
	    let localctx = new SectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, orwellParser.RULE_section);
	    try {
	        this.state = 461;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 453;
	            this.prefix();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 454;
	            this.infix();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 455;
	            this.infix();
	            this.state = 456;
	            this.term1();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 458;
	            this.term1();
	            this.state = 459;
	            this.infix();
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



	list_() {
	    let localctx = new List_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, orwellParser.RULE_list_);
	    try {
	        this.state = 466;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 463;
	            this.listform();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 464;
	            this.upto();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 465;
	            this.comp();
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



	tuple_() {
	    let localctx = new Tuple_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, orwellParser.RULE_tuple_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 468;
	        this.match(orwellParser.T__5);
	        this.state = 469;
	        this.term();
	        this.state = 470;
	        this.match(orwellParser.T__3);
	        this.state = 471;
	        this.term();
	        this.state = 476;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 472;
	            this.match(orwellParser.T__3);
	            this.state = 473;
	            this.term();
	            this.state = 478;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 479;
	        this.match(orwellParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listform() {
	    let localctx = new ListformContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, orwellParser.RULE_listform);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 481;
	        this.match(orwellParser.T__7);
	        this.state = 490;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 6)) & ~0x1f) === 0 && ((1 << (_la - 6)) & 376438789) !== 0)) {
	            this.state = 482;
	            this.term();
	            this.state = 487;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 483;
	                this.match(orwellParser.T__3);
	                this.state = 484;
	                this.term();
	                this.state = 489;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 492;
	        this.match(orwellParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	upto() {
	    let localctx = new UptoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, orwellParser.RULE_upto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 494;
	        this.match(orwellParser.T__7);
	        this.state = 495;
	        this.term();
	        this.state = 498;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 496;
	            this.match(orwellParser.T__3);
	            this.state = 497;
	            this.term();
	        }

	        this.state = 500;
	        this.match(orwellParser.T__22);
	        this.state = 502;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 6)) & ~0x1f) === 0 && ((1 << (_la - 6)) & 376438789) !== 0)) {
	            this.state = 501;
	            this.term();
	        }

	        this.state = 504;
	        this.match(orwellParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comp() {
	    let localctx = new CompContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, orwellParser.RULE_comp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 506;
	        this.match(orwellParser.T__7);
	        this.state = 507;
	        this.term();
	        this.state = 508;
	        this.match(orwellParser.T__2);
	        this.state = 517;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 6)) & ~0x1f) === 0 && ((1 << (_la - 6)) & 376438789) !== 0)) {
	            this.state = 509;
	            this.qualifier();
	            this.state = 514;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===24) {
	                this.state = 510;
	                this.match(orwellParser.T__23);
	                this.state = 511;
	                this.qualifier();
	                this.state = 516;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 519;
	        this.match(orwellParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	qualifier() {
	    let localctx = new QualifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, orwellParser.RULE_qualifier);
	    try {
	        this.state = 526;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 521;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 522;
	            this.pat();
	            this.state = 523;
	            this.match(orwellParser.T__24);
	            this.state = 524;
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



	fliteral() {
	    let localctx = new FliteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, orwellParser.RULE_fliteral);
	    try {
	        this.state = 530;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 528;
	            this.match(orwellParser.FLOAT);
	            break;
	        case 26:
	        case 28:
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 529;
	            this.literal();
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, orwellParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 532;
	        _la = this._input.LA(1);
	        if(!(((((_la - 26)) & ~0x1f) === 0 && ((1 << (_la - 26)) & 261) !== 0))) {
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



	infix() {
	    let localctx = new InfixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, orwellParser.RULE_infix);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 534;
	        this.match(orwellParser.OP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prefix() {
	    let localctx = new PrefixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, orwellParser.RULE_prefix);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 536;
	        this.match(orwellParser.OP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tyname() {
	    let localctx = new TynameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, orwellParser.RULE_tyname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 538;
	        this.match(orwellParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tyvar() {
	    let localctx = new TyvarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, orwellParser.RULE_tyvar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 540;
	        this.match(orwellParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	con() {
	    let localctx = new ConContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, orwellParser.RULE_con);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 542;
	        this.match(orwellParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	var_() {
	    let localctx = new Var_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, orwellParser.RULE_var_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 544;
	        this.match(orwellParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

orwellParser.EOF = antlr4.Token.EOF;
orwellParser.T__0 = 1;
orwellParser.T__1 = 2;
orwellParser.T__2 = 3;
orwellParser.T__3 = 4;
orwellParser.T__4 = 5;
orwellParser.T__5 = 6;
orwellParser.T__6 = 7;
orwellParser.T__7 = 8;
orwellParser.T__8 = 9;
orwellParser.T__9 = 10;
orwellParser.T__10 = 11;
orwellParser.T__11 = 12;
orwellParser.T__12 = 13;
orwellParser.T__13 = 14;
orwellParser.T__14 = 15;
orwellParser.T__15 = 16;
orwellParser.T__16 = 17;
orwellParser.T__17 = 18;
orwellParser.T__18 = 19;
orwellParser.T__19 = 20;
orwellParser.T__20 = 21;
orwellParser.T__21 = 22;
orwellParser.T__22 = 23;
orwellParser.T__23 = 24;
orwellParser.T__24 = 25;
orwellParser.INTEGER = 26;
orwellParser.FLOAT = 27;
orwellParser.STRING = 28;
orwellParser.ESCCHAR = 29;
orwellParser.PRAGMA = 30;
orwellParser.OP = 31;
orwellParser.ID = 32;
orwellParser.DIGIT = 33;
orwellParser.CHAR = 34;
orwellParser.WS = 35;

orwellParser.RULE_program = 0;
orwellParser.RULE_decl = 1;
orwellParser.RULE_syndecl = 2;
orwellParser.RULE_condecl = 3;
orwellParser.RULE_typedecl = 4;
orwellParser.RULE_name = 5;
orwellParser.RULE_tylhs = 6;
orwellParser.RULE_tylhs1 = 7;
orwellParser.RULE_tylhsprimary = 8;
orwellParser.RULE_tylhssection = 9;
orwellParser.RULE_type_ = 10;
orwellParser.RULE_tyterm1 = 11;
orwellParser.RULE_tyterm2 = 12;
orwellParser.RULE_typrimaryname = 13;
orwellParser.RULE_typrimary = 14;
orwellParser.RULE_tysection = 15;
orwellParser.RULE_tylist = 16;
orwellParser.RULE_tytuple = 17;
orwellParser.RULE_construct = 18;
orwellParser.RULE_opdecl = 19;
orwellParser.RULE_opkind = 20;
orwellParser.RULE_assoc = 21;
orwellParser.RULE_def_ = 22;
orwellParser.RULE_rhs = 23;
orwellParser.RULE_conditional = 24;
orwellParser.RULE_ifpart = 25;
orwellParser.RULE_otherpart = 26;
orwellParser.RULE_wherepart = 27;
orwellParser.RULE_pat = 28;
orwellParser.RULE_pat1 = 29;
orwellParser.RULE_pat2 = 30;
orwellParser.RULE_patprimaryname = 31;
orwellParser.RULE_patprimary = 32;
orwellParser.RULE_patsection = 33;
orwellParser.RULE_pattuple = 34;
orwellParser.RULE_patlist = 35;
orwellParser.RULE_term = 36;
orwellParser.RULE_term1 = 37;
orwellParser.RULE_term2 = 38;
orwellParser.RULE_primaryname = 39;
orwellParser.RULE_primary = 40;
orwellParser.RULE_section = 41;
orwellParser.RULE_list_ = 42;
orwellParser.RULE_tuple_ = 43;
orwellParser.RULE_listform = 44;
orwellParser.RULE_upto = 45;
orwellParser.RULE_comp = 46;
orwellParser.RULE_qualifier = 47;
orwellParser.RULE_fliteral = 48;
orwellParser.RULE_literal = 49;
orwellParser.RULE_infix = 50;
orwellParser.RULE_prefix = 51;
orwellParser.RULE_tyname = 52;
orwellParser.RULE_tyvar = 53;
orwellParser.RULE_con = 54;
orwellParser.RULE_var_ = 55;

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
        this.ruleIndex = orwellParser.RULE_program;
    }

	EOF() {
	    return this.getToken(orwellParser.EOF, 0);
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

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitProgram(this);
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
        this.ruleIndex = orwellParser.RULE_decl;
    }

	syndecl() {
	    return this.getTypedRuleContext(SyndeclContext,0);
	};

	condecl() {
	    return this.getTypedRuleContext(CondeclContext,0);
	};

	typedecl() {
	    return this.getTypedRuleContext(TypedeclContext,0);
	};

	opdecl() {
	    return this.getTypedRuleContext(OpdeclContext,0);
	};

	def_() {
	    return this.getTypedRuleContext(Def_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitDecl(this);
		}
	}


}



class SyndeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_syndecl;
    }

	tylhs() {
	    return this.getTypedRuleContext(TylhsContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterSyndecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitSyndecl(this);
		}
	}


}



class CondeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_condecl;
    }

	tylhs() {
	    return this.getTypedRuleContext(TylhsContext,0);
	};

	construct = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstructContext);
	    } else {
	        return this.getTypedRuleContext(ConstructContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterCondecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitCondecl(this);
		}
	}


}



class TypedeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_typedecl;
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

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTypedecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTypedecl(this);
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
        this.ruleIndex = orwellParser.RULE_name;
    }

	var_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Var_Context);
	    } else {
	        return this.getTypedRuleContext(Var_Context,i);
	    }
	};

	prefix() {
	    return this.getTypedRuleContext(PrefixContext,0);
	};

	infix() {
	    return this.getTypedRuleContext(InfixContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitName(this);
		}
	}


}



class TylhsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_tylhs;
    }

	tyvar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TyvarContext);
	    } else {
	        return this.getTypedRuleContext(TyvarContext,i);
	    }
	};

	infix() {
	    return this.getTypedRuleContext(InfixContext,0);
	};

	prefix() {
	    return this.getTypedRuleContext(PrefixContext,0);
	};

	tylhs1() {
	    return this.getTypedRuleContext(Tylhs1Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTylhs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTylhs(this);
		}
	}


}



class Tylhs1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_tylhs1;
    }

	tylhsprimary() {
	    return this.getTypedRuleContext(TylhsprimaryContext,0);
	};

	tyvar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TyvarContext);
	    } else {
	        return this.getTypedRuleContext(TyvarContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTylhs1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTylhs1(this);
		}
	}


}



class TylhsprimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_tylhsprimary;
    }

	tyname() {
	    return this.getTypedRuleContext(TynameContext,0);
	};

	tylhs() {
	    return this.getTypedRuleContext(TylhsContext,0);
	};

	tylhssection() {
	    return this.getTypedRuleContext(TylhssectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTylhsprimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTylhsprimary(this);
		}
	}


}



class TylhssectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_tylhssection;
    }

	prefix() {
	    return this.getTypedRuleContext(PrefixContext,0);
	};

	infix() {
	    return this.getTypedRuleContext(InfixContext,0);
	};

	tyvar() {
	    return this.getTypedRuleContext(TyvarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTylhssection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTylhssection(this);
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
        this.ruleIndex = orwellParser.RULE_type_;
    }

	tyterm1() {
	    return this.getTypedRuleContext(Tyterm1Context,0);
	};

	infix() {
	    return this.getTypedRuleContext(InfixContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitType_(this);
		}
	}


}



class Tyterm1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_tyterm1;
    }

	prefix() {
	    return this.getTypedRuleContext(PrefixContext,0);
	};

	tyterm1() {
	    return this.getTypedRuleContext(Tyterm1Context,0);
	};

	tyterm2() {
	    return this.getTypedRuleContext(Tyterm2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTyterm1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTyterm1(this);
		}
	}


}



class Tyterm2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_tyterm2;
    }

	typrimary = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TyprimaryContext);
	    } else {
	        return this.getTypedRuleContext(TyprimaryContext,i);
	    }
	};

	typrimaryname() {
	    return this.getTypedRuleContext(TyprimarynameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTyterm2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTyterm2(this);
		}
	}


}



class TyprimarynameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_typrimaryname;
    }

	tyname() {
	    return this.getTypedRuleContext(TynameContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	tysection() {
	    return this.getTypedRuleContext(TysectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTyprimaryname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTyprimaryname(this);
		}
	}


}



class TyprimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_typrimary;
    }

	typrimaryname() {
	    return this.getTypedRuleContext(TyprimarynameContext,0);
	};

	tyvar() {
	    return this.getTypedRuleContext(TyvarContext,0);
	};

	tytuple() {
	    return this.getTypedRuleContext(TytupleContext,0);
	};

	tylist() {
	    return this.getTypedRuleContext(TylistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTyprimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTyprimary(this);
		}
	}


}



class TysectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_tysection;
    }

	prefix() {
	    return this.getTypedRuleContext(PrefixContext,0);
	};

	infix() {
	    return this.getTypedRuleContext(InfixContext,0);
	};

	tyterm1() {
	    return this.getTypedRuleContext(Tyterm1Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTysection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTysection(this);
		}
	}


}



class TylistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_tylist;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTylist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTylist(this);
		}
	}


}



class TytupleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_tytuple;
    }

	type_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Type_Context);
	    } else {
	        return this.getTypedRuleContext(Type_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTytuple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTytuple(this);
		}
	}


}



class ConstructContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_construct;
    }

	con() {
	    return this.getTypedRuleContext(ConContext,0);
	};

	typrimary = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TyprimaryContext);
	    } else {
	        return this.getTypedRuleContext(TyprimaryContext,i);
	    }
	};

	infix() {
	    return this.getTypedRuleContext(InfixContext,0);
	};

	prefix() {
	    return this.getTypedRuleContext(PrefixContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterConstruct(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitConstruct(this);
		}
	}


}



class OpdeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_opdecl;
    }

	opkind() {
	    return this.getTypedRuleContext(OpkindContext,0);
	};

	OP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(orwellParser.OP);
	    } else {
	        return this.getToken(orwellParser.OP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterOpdecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitOpdecl(this);
		}
	}


}



class OpkindContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_opkind;
    }

	assoc() {
	    return this.getTypedRuleContext(AssocContext,0);
	};

	DIGIT() {
	    return this.getToken(orwellParser.DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterOpkind(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitOpkind(this);
		}
	}


}



class AssocContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_assoc;
    }


	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterAssoc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitAssoc(this);
		}
	}


}



class Def_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_def_;
    }

	pat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PatContext);
	    } else {
	        return this.getTypedRuleContext(PatContext,i);
	    }
	};

	rhs = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RhsContext);
	    } else {
	        return this.getTypedRuleContext(RhsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterDef_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitDef_(this);
		}
	}


}



class RhsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_rhs;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	conditional() {
	    return this.getTypedRuleContext(ConditionalContext,0);
	};

	wherepart() {
	    return this.getTypedRuleContext(WherepartContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterRhs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitRhs(this);
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
        this.ruleIndex = orwellParser.RULE_conditional;
    }

	ifpart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IfpartContext);
	    } else {
	        return this.getTypedRuleContext(IfpartContext,i);
	    }
	};

	otherpart() {
	    return this.getTypedRuleContext(OtherpartContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterConditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitConditional(this);
		}
	}


}



class IfpartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_ifpart;
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

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterIfpart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitIfpart(this);
		}
	}


}



class OtherpartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_otherpart;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterOtherpart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitOtherpart(this);
		}
	}


}



class WherepartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_wherepart;
    }

	def_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Def_Context);
	    } else {
	        return this.getTypedRuleContext(Def_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterWherepart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitWherepart(this);
		}
	}


}



class PatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_pat;
    }

	pat1() {
	    return this.getTypedRuleContext(Pat1Context,0);
	};

	infix() {
	    return this.getTypedRuleContext(InfixContext,0);
	};

	pat() {
	    return this.getTypedRuleContext(PatContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterPat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitPat(this);
		}
	}


}



class Pat1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_pat1;
    }

	prefix() {
	    return this.getTypedRuleContext(PrefixContext,0);
	};

	pat1() {
	    return this.getTypedRuleContext(Pat1Context,0);
	};

	pat2() {
	    return this.getTypedRuleContext(Pat2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterPat1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitPat1(this);
		}
	}


}



class Pat2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_pat2;
    }

	patprimary = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PatprimaryContext);
	    } else {
	        return this.getTypedRuleContext(PatprimaryContext,i);
	    }
	};

	patprimaryname() {
	    return this.getTypedRuleContext(PatprimarynameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterPat2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitPat2(this);
		}
	}


}



class PatprimarynameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_patprimaryname;
    }

	var_() {
	    return this.getTypedRuleContext(Var_Context,0);
	};

	pat() {
	    return this.getTypedRuleContext(PatContext,0);
	};

	patsection() {
	    return this.getTypedRuleContext(PatsectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterPatprimaryname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitPatprimaryname(this);
		}
	}


}



class PatprimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_patprimary;
    }

	patprimaryname() {
	    return this.getTypedRuleContext(PatprimarynameContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	pattuple() {
	    return this.getTypedRuleContext(PattupleContext,0);
	};

	patlist() {
	    return this.getTypedRuleContext(PatlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterPatprimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitPatprimary(this);
		}
	}


}



class PatsectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_patsection;
    }

	prefix() {
	    return this.getTypedRuleContext(PrefixContext,0);
	};

	infix() {
	    return this.getTypedRuleContext(InfixContext,0);
	};

	pat1() {
	    return this.getTypedRuleContext(Pat1Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterPatsection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitPatsection(this);
		}
	}


}



class PattupleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_pattuple;
    }

	pat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PatContext);
	    } else {
	        return this.getTypedRuleContext(PatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterPattuple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitPattuple(this);
		}
	}


}



class PatlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_patlist;
    }

	pat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PatContext);
	    } else {
	        return this.getTypedRuleContext(PatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterPatlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitPatlist(this);
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
        this.ruleIndex = orwellParser.RULE_term;
    }

	term1() {
	    return this.getTypedRuleContext(Term1Context,0);
	};

	infix() {
	    return this.getTypedRuleContext(InfixContext,0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTerm(this);
		}
	}


}



class Term1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_term1;
    }

	prefix() {
	    return this.getTypedRuleContext(PrefixContext,0);
	};

	term1() {
	    return this.getTypedRuleContext(Term1Context,0);
	};

	term2() {
	    return this.getTypedRuleContext(Term2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTerm1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTerm1(this);
		}
	}


}



class Term2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_term2;
    }

	primary = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrimaryContext);
	    } else {
	        return this.getTypedRuleContext(PrimaryContext,i);
	    }
	};

	primaryname() {
	    return this.getTypedRuleContext(PrimarynameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTerm2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTerm2(this);
		}
	}


}



class PrimarynameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_primaryname;
    }

	var_() {
	    return this.getTypedRuleContext(Var_Context,0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	section() {
	    return this.getTypedRuleContext(SectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterPrimaryname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitPrimaryname(this);
		}
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_primary;
    }

	primaryname() {
	    return this.getTypedRuleContext(PrimarynameContext,0);
	};

	fliteral() {
	    return this.getTypedRuleContext(FliteralContext,0);
	};

	tuple_() {
	    return this.getTypedRuleContext(Tuple_Context,0);
	};

	list_() {
	    return this.getTypedRuleContext(List_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitPrimary(this);
		}
	}


}



class SectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_section;
    }

	prefix() {
	    return this.getTypedRuleContext(PrefixContext,0);
	};

	infix() {
	    return this.getTypedRuleContext(InfixContext,0);
	};

	term1() {
	    return this.getTypedRuleContext(Term1Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitSection(this);
		}
	}


}



class List_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_list_;
    }

	listform() {
	    return this.getTypedRuleContext(ListformContext,0);
	};

	upto() {
	    return this.getTypedRuleContext(UptoContext,0);
	};

	comp() {
	    return this.getTypedRuleContext(CompContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterList_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitList_(this);
		}
	}


}



class Tuple_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_tuple_;
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

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTuple_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTuple_(this);
		}
	}


}



class ListformContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_listform;
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

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterListform(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitListform(this);
		}
	}


}



class UptoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_upto;
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

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterUpto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitUpto(this);
		}
	}


}



class CompContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_comp;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	qualifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(QualifierContext);
	    } else {
	        return this.getTypedRuleContext(QualifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterComp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitComp(this);
		}
	}


}



class QualifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_qualifier;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	pat() {
	    return this.getTypedRuleContext(PatContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterQualifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitQualifier(this);
		}
	}


}



class FliteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_fliteral;
    }

	FLOAT() {
	    return this.getToken(orwellParser.FLOAT, 0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterFliteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitFliteral(this);
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
        this.ruleIndex = orwellParser.RULE_literal;
    }

	INTEGER() {
	    return this.getToken(orwellParser.INTEGER, 0);
	};

	CHAR() {
	    return this.getToken(orwellParser.CHAR, 0);
	};

	STRING() {
	    return this.getToken(orwellParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class InfixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_infix;
    }

	OP() {
	    return this.getToken(orwellParser.OP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterInfix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitInfix(this);
		}
	}


}



class PrefixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_prefix;
    }

	OP() {
	    return this.getToken(orwellParser.OP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterPrefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitPrefix(this);
		}
	}


}



class TynameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_tyname;
    }

	ID() {
	    return this.getToken(orwellParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTyname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTyname(this);
		}
	}


}



class TyvarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_tyvar;
    }

	ID() {
	    return this.getToken(orwellParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterTyvar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitTyvar(this);
		}
	}


}



class ConContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_con;
    }

	ID() {
	    return this.getToken(orwellParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterCon(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitCon(this);
		}
	}


}



class Var_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = orwellParser.RULE_var_;
    }

	ID() {
	    return this.getToken(orwellParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.enterVar_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof orwellListener ) {
	        listener.exitVar_(this);
		}
	}


}




orwellParser.ProgramContext = ProgramContext; 
orwellParser.DeclContext = DeclContext; 
orwellParser.SyndeclContext = SyndeclContext; 
orwellParser.CondeclContext = CondeclContext; 
orwellParser.TypedeclContext = TypedeclContext; 
orwellParser.NameContext = NameContext; 
orwellParser.TylhsContext = TylhsContext; 
orwellParser.Tylhs1Context = Tylhs1Context; 
orwellParser.TylhsprimaryContext = TylhsprimaryContext; 
orwellParser.TylhssectionContext = TylhssectionContext; 
orwellParser.Type_Context = Type_Context; 
orwellParser.Tyterm1Context = Tyterm1Context; 
orwellParser.Tyterm2Context = Tyterm2Context; 
orwellParser.TyprimarynameContext = TyprimarynameContext; 
orwellParser.TyprimaryContext = TyprimaryContext; 
orwellParser.TysectionContext = TysectionContext; 
orwellParser.TylistContext = TylistContext; 
orwellParser.TytupleContext = TytupleContext; 
orwellParser.ConstructContext = ConstructContext; 
orwellParser.OpdeclContext = OpdeclContext; 
orwellParser.OpkindContext = OpkindContext; 
orwellParser.AssocContext = AssocContext; 
orwellParser.Def_Context = Def_Context; 
orwellParser.RhsContext = RhsContext; 
orwellParser.ConditionalContext = ConditionalContext; 
orwellParser.IfpartContext = IfpartContext; 
orwellParser.OtherpartContext = OtherpartContext; 
orwellParser.WherepartContext = WherepartContext; 
orwellParser.PatContext = PatContext; 
orwellParser.Pat1Context = Pat1Context; 
orwellParser.Pat2Context = Pat2Context; 
orwellParser.PatprimarynameContext = PatprimarynameContext; 
orwellParser.PatprimaryContext = PatprimaryContext; 
orwellParser.PatsectionContext = PatsectionContext; 
orwellParser.PattupleContext = PattupleContext; 
orwellParser.PatlistContext = PatlistContext; 
orwellParser.TermContext = TermContext; 
orwellParser.Term1Context = Term1Context; 
orwellParser.Term2Context = Term2Context; 
orwellParser.PrimarynameContext = PrimarynameContext; 
orwellParser.PrimaryContext = PrimaryContext; 
orwellParser.SectionContext = SectionContext; 
orwellParser.List_Context = List_Context; 
orwellParser.Tuple_Context = Tuple_Context; 
orwellParser.ListformContext = ListformContext; 
orwellParser.UptoContext = UptoContext; 
orwellParser.CompContext = CompContext; 
orwellParser.QualifierContext = QualifierContext; 
orwellParser.FliteralContext = FliteralContext; 
orwellParser.LiteralContext = LiteralContext; 
orwellParser.InfixContext = InfixContext; 
orwellParser.PrefixContext = PrefixContext; 
orwellParser.TynameContext = TynameContext; 
orwellParser.TyvarContext = TyvarContext; 
orwellParser.ConContext = ConContext; 
orwellParser.Var_Context = Var_Context; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
