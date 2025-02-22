// Generated from ./pascal/pascal.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import pascalListener from './pascalListener.js';
const serializedATN = [4,1,80,799,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,
2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,
78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,85,
7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,91,2,92,7,
92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,1,0,1,0,3,0,197,8,0,1,0,1,0,1,
0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,208,8,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,216,8,
1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,227,8,3,10,3,12,3,230,9,3,1,3,
1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,242,8,5,10,5,12,5,245,9,5,1,5,1,
5,1,6,1,6,1,7,1,7,1,7,1,7,4,7,255,8,7,11,7,12,7,256,1,8,1,8,1,8,1,8,1,9,
1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,278,
8,10,1,11,1,11,3,11,282,8,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,
1,16,1,17,1,17,1,17,1,17,4,17,298,8,17,11,17,12,17,299,1,18,1,18,1,18,1,
18,1,18,3,18,307,8,18,1,19,1,19,3,19,311,8,19,1,19,1,19,1,19,1,20,1,20,3,
20,318,8,20,1,21,1,21,1,21,3,21,323,8,21,1,22,1,22,1,22,1,22,3,22,329,8,
22,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,25,1,25,3,25,341,8,25,1,26,
1,26,1,26,3,26,346,8,26,1,27,1,27,1,27,1,27,3,27,352,8,27,1,28,1,28,1,28,
1,28,3,28,358,8,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
1,29,1,29,1,29,1,29,1,29,3,29,376,8,29,1,30,1,30,1,30,5,30,381,8,30,10,30,
12,30,384,9,30,1,31,1,31,1,32,1,32,1,33,1,33,3,33,392,8,33,1,33,1,33,1,34,
1,34,1,34,3,34,399,8,34,1,34,3,34,402,8,34,1,35,1,35,1,35,5,35,407,8,35,
10,35,12,35,410,9,35,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,5,
37,422,8,37,10,37,12,37,425,9,37,1,38,1,38,1,38,1,38,1,38,3,38,432,8,38,
1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,41,1,41,1,42,1,42,1,
42,1,42,3,42,450,8,42,1,43,1,43,1,43,1,44,1,44,1,44,1,44,5,44,459,8,44,10,
44,12,44,462,9,44,1,44,1,44,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,47,1,47,
3,47,475,8,47,1,48,1,48,1,48,3,48,480,8,48,1,48,1,48,1,48,1,49,1,49,1,49,
1,49,5,49,489,8,49,10,49,12,49,492,9,49,1,49,1,49,1,50,1,50,1,50,1,50,1,
50,1,50,1,50,3,50,503,8,50,1,51,1,51,1,51,1,51,1,52,1,52,1,52,5,52,512,8,
52,10,52,12,52,515,9,52,1,53,1,53,1,53,5,53,520,8,53,10,53,12,53,523,9,53,
1,54,1,54,1,54,3,54,528,8,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,56,1,56,
1,56,1,56,1,56,3,56,542,8,56,1,57,1,57,3,57,546,8,57,1,58,1,58,1,58,1,58,
3,58,552,8,58,1,59,1,59,1,59,1,59,1,60,1,60,1,60,3,60,561,8,60,1,60,1,60,
1,60,1,60,5,60,567,8,60,10,60,12,60,570,9,60,1,60,1,60,1,60,1,60,1,60,1,
60,5,60,578,8,60,10,60,12,60,581,9,60,1,60,1,60,1,60,1,60,1,60,5,60,588,
8,60,10,60,12,60,591,9,60,1,61,1,61,1,61,1,61,3,61,597,8,61,1,62,1,62,1,
63,1,63,1,63,1,63,3,63,605,8,63,1,64,1,64,1,65,1,65,1,65,1,65,3,65,613,8,
65,1,66,1,66,1,67,3,67,618,8,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,68,
1,68,1,68,1,68,1,68,1,68,3,68,633,8,68,1,69,1,69,1,69,1,69,3,69,639,8,69,
1,70,1,70,1,70,1,70,1,70,1,71,1,71,1,71,5,71,649,8,71,10,71,12,71,652,9,
71,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,3,72,662,8,72,1,73,1,73,1,73,
5,73,667,8,73,10,73,12,73,670,9,73,1,73,3,73,673,8,73,1,74,1,74,1,74,3,74,
678,8,74,1,75,1,75,1,75,1,75,1,75,3,75,685,8,75,1,76,1,76,5,76,689,8,76,
10,76,12,76,692,9,76,1,77,1,77,1,77,1,78,1,78,1,78,1,79,1,79,1,80,1,80,1,
81,1,81,1,81,1,81,3,81,708,8,81,1,82,1,82,1,82,1,82,1,83,1,83,1,83,5,83,
717,8,83,10,83,12,83,720,9,83,1,84,1,84,3,84,724,8,84,1,85,1,85,1,85,1,85,
1,85,1,85,3,85,732,8,85,1,86,1,86,1,86,1,86,1,86,1,86,5,86,740,8,86,10,86,
12,86,743,9,86,1,86,1,86,1,86,3,86,748,8,86,1,86,1,86,1,87,1,87,1,87,1,87,
1,88,1,88,1,88,3,88,759,8,88,1,89,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,90,
1,90,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,93,1,93,1,
94,1,94,1,95,1,95,1,95,1,95,1,95,1,96,1,96,1,96,5,96,794,8,96,10,96,12,96,
797,9,96,1,96,0,0,97,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,
126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,
162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,0,7,1,0,
41,42,1,0,72,73,5,0,4,4,6,6,20,20,30,30,70,70,2,0,19,19,49,54,2,0,26,26,
41,42,4,0,1,1,9,9,22,22,43,44,2,0,11,11,35,35,797,0,194,1,0,0,0,2,215,1,
0,0,0,4,217,1,0,0,0,6,228,1,0,0,0,8,233,1,0,0,0,10,237,1,0,0,0,12,248,1,
0,0,0,14,250,1,0,0,0,16,258,1,0,0,0,18,262,1,0,0,0,20,277,1,0,0,0,22,281,
1,0,0,0,24,283,1,0,0,0,26,285,1,0,0,0,28,287,1,0,0,0,30,289,1,0,0,0,32,291,
1,0,0,0,34,293,1,0,0,0,36,301,1,0,0,0,38,308,1,0,0,0,40,315,1,0,0,0,42,322,
1,0,0,0,44,328,1,0,0,0,46,330,1,0,0,0,48,334,1,0,0,0,50,340,1,0,0,0,52,345,
1,0,0,0,54,351,1,0,0,0,56,353,1,0,0,0,58,375,1,0,0,0,60,377,1,0,0,0,62,385,
1,0,0,0,64,387,1,0,0,0,66,389,1,0,0,0,68,401,1,0,0,0,70,403,1,0,0,0,72,411,
1,0,0,0,74,415,1,0,0,0,76,431,1,0,0,0,78,433,1,0,0,0,80,439,1,0,0,0,82,443,
1,0,0,0,84,449,1,0,0,0,86,451,1,0,0,0,88,454,1,0,0,0,90,465,1,0,0,0,92,469,
1,0,0,0,94,474,1,0,0,0,96,476,1,0,0,0,98,484,1,0,0,0,100,502,1,0,0,0,102,
504,1,0,0,0,104,508,1,0,0,0,106,516,1,0,0,0,108,524,1,0,0,0,110,534,1,0,
0,0,112,541,1,0,0,0,114,545,1,0,0,0,116,551,1,0,0,0,118,553,1,0,0,0,120,
560,1,0,0,0,122,592,1,0,0,0,124,598,1,0,0,0,126,600,1,0,0,0,128,606,1,0,
0,0,130,608,1,0,0,0,132,614,1,0,0,0,134,617,1,0,0,0,136,632,1,0,0,0,138,
638,1,0,0,0,140,640,1,0,0,0,142,645,1,0,0,0,144,661,1,0,0,0,146,672,1,0,
0,0,148,674,1,0,0,0,150,679,1,0,0,0,152,686,1,0,0,0,154,693,1,0,0,0,156,
696,1,0,0,0,158,699,1,0,0,0,160,701,1,0,0,0,162,707,1,0,0,0,164,709,1,0,
0,0,166,713,1,0,0,0,168,723,1,0,0,0,170,725,1,0,0,0,172,733,1,0,0,0,174,
751,1,0,0,0,176,758,1,0,0,0,178,760,1,0,0,0,180,765,1,0,0,0,182,770,1,0,
0,0,184,777,1,0,0,0,186,781,1,0,0,0,188,783,1,0,0,0,190,785,1,0,0,0,192,
790,1,0,0,0,194,196,3,2,1,0,195,197,5,68,0,0,196,195,1,0,0,0,196,197,1,0,
0,0,197,198,1,0,0,0,198,199,3,6,3,0,199,200,5,63,0,0,200,1,1,0,0,0,201,202,
5,29,0,0,202,207,3,4,2,0,203,204,5,55,0,0,204,205,3,104,52,0,205,206,5,56,
0,0,206,208,1,0,0,0,207,203,1,0,0,0,207,208,1,0,0,0,208,209,1,0,0,0,209,
210,5,47,0,0,210,216,1,0,0,0,211,212,5,67,0,0,212,213,3,4,2,0,213,214,5,
47,0,0,214,216,1,0,0,0,215,201,1,0,0,0,215,211,1,0,0,0,216,3,1,0,0,0,217,
218,5,77,0,0,218,5,1,0,0,0,219,227,3,10,5,0,220,227,3,14,7,0,221,227,3,34,
17,0,222,227,3,88,44,0,223,227,3,92,46,0,224,227,3,8,4,0,225,227,5,71,0,
0,226,219,1,0,0,0,226,220,1,0,0,0,226,221,1,0,0,0,226,222,1,0,0,0,226,223,
1,0,0,0,226,224,1,0,0,0,226,225,1,0,0,0,227,230,1,0,0,0,228,226,1,0,0,0,
228,229,1,0,0,0,229,231,1,0,0,0,230,228,1,0,0,0,231,232,3,164,82,0,232,7,
1,0,0,0,233,234,5,69,0,0,234,235,3,104,52,0,235,236,5,47,0,0,236,9,1,0,0,
0,237,238,5,21,0,0,238,243,3,12,6,0,239,240,5,46,0,0,240,242,3,12,6,0,241,
239,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,243,244,1,0,0,0,244,246,1,0,
0,0,245,243,1,0,0,0,246,247,5,47,0,0,247,11,1,0,0,0,248,249,3,24,12,0,249,
13,1,0,0,0,250,254,5,8,0,0,251,252,3,16,8,0,252,253,5,47,0,0,253,255,1,0,
0,0,254,251,1,0,0,0,255,256,1,0,0,0,256,254,1,0,0,0,256,257,1,0,0,0,257,
15,1,0,0,0,258,259,3,4,2,0,259,260,5,49,0,0,260,261,3,20,10,0,261,17,1,0,
0,0,262,263,5,7,0,0,263,264,5,55,0,0,264,265,3,24,12,0,265,266,5,56,0,0,
266,19,1,0,0,0,267,278,3,22,11,0,268,269,3,28,14,0,269,270,3,22,11,0,270,
278,1,0,0,0,271,278,3,4,2,0,272,273,3,28,14,0,273,274,3,4,2,0,274,278,1,
0,0,0,275,278,3,32,16,0,276,278,3,18,9,0,277,267,1,0,0,0,277,268,1,0,0,0,
277,271,1,0,0,0,277,272,1,0,0,0,277,275,1,0,0,0,277,276,1,0,0,0,278,21,1,
0,0,0,279,282,3,24,12,0,280,282,3,26,13,0,281,279,1,0,0,0,281,280,1,0,0,
0,282,23,1,0,0,0,283,284,5,79,0,0,284,25,1,0,0,0,285,286,5,80,0,0,286,27,
1,0,0,0,287,288,7,0,0,0,288,29,1,0,0,0,289,290,7,1,0,0,290,31,1,0,0,0,291,
292,5,78,0,0,292,33,1,0,0,0,293,297,5,36,0,0,294,295,3,36,18,0,295,296,5,
47,0,0,296,298,1,0,0,0,297,294,1,0,0,0,298,299,1,0,0,0,299,297,1,0,0,0,299,
300,1,0,0,0,300,35,1,0,0,0,301,302,3,4,2,0,302,306,5,49,0,0,303,307,3,42,
21,0,304,307,3,38,19,0,305,307,3,40,20,0,306,303,1,0,0,0,306,304,1,0,0,0,
306,305,1,0,0,0,307,37,1,0,0,0,308,310,5,16,0,0,309,311,3,98,49,0,310,309,
1,0,0,0,310,311,1,0,0,0,311,312,1,0,0,0,312,313,5,48,0,0,313,314,3,110,55,
0,314,39,1,0,0,0,315,317,5,28,0,0,316,318,3,98,49,0,317,316,1,0,0,0,317,
318,1,0,0,0,318,41,1,0,0,0,319,323,3,44,22,0,320,323,3,52,26,0,321,323,3,
86,43,0,322,319,1,0,0,0,322,320,1,0,0,0,322,321,1,0,0,0,323,43,1,0,0,0,324,
329,3,46,23,0,325,329,3,48,24,0,326,329,3,50,25,0,327,329,3,56,28,0,328,
324,1,0,0,0,328,325,1,0,0,0,328,326,1,0,0,0,328,327,1,0,0,0,329,45,1,0,0,
0,330,331,5,55,0,0,331,332,3,104,52,0,332,333,5,56,0,0,333,47,1,0,0,0,334,
335,3,20,10,0,335,336,5,64,0,0,336,337,3,20,10,0,337,49,1,0,0,0,338,341,
3,4,2,0,339,341,7,2,0,0,340,338,1,0,0,0,340,339,1,0,0,0,341,51,1,0,0,0,342,
343,5,27,0,0,343,346,3,54,27,0,344,346,3,54,27,0,345,342,1,0,0,0,345,344,
1,0,0,0,346,53,1,0,0,0,347,352,3,58,29,0,348,352,3,66,33,0,349,352,3,80,
40,0,350,352,3,84,42,0,351,347,1,0,0,0,351,348,1,0,0,0,351,349,1,0,0,0,351,
350,1,0,0,0,352,55,1,0,0,0,353,354,5,70,0,0,354,357,5,57,0,0,355,358,3,4,
2,0,356,358,3,22,11,0,357,355,1,0,0,0,357,356,1,0,0,0,358,359,1,0,0,0,359,
360,5,59,0,0,360,57,1,0,0,0,361,362,5,2,0,0,362,363,5,57,0,0,363,364,3,60,
30,0,364,365,5,59,0,0,365,366,5,25,0,0,366,367,3,64,32,0,367,376,1,0,0,0,
368,369,5,2,0,0,369,370,5,58,0,0,370,371,3,60,30,0,371,372,5,60,0,0,372,
373,5,25,0,0,373,374,3,64,32,0,374,376,1,0,0,0,375,361,1,0,0,0,375,368,1,
0,0,0,376,59,1,0,0,0,377,382,3,62,31,0,378,379,5,46,0,0,379,381,3,62,31,
0,380,378,1,0,0,0,381,384,1,0,0,0,382,380,1,0,0,0,382,383,1,0,0,0,383,61,
1,0,0,0,384,382,1,0,0,0,385,386,3,44,22,0,386,63,1,0,0,0,387,388,3,42,21,
0,388,65,1,0,0,0,389,391,5,31,0,0,390,392,3,68,34,0,391,390,1,0,0,0,391,
392,1,0,0,0,392,393,1,0,0,0,393,394,5,13,0,0,394,67,1,0,0,0,395,398,3,70,
35,0,396,397,5,47,0,0,397,399,3,74,37,0,398,396,1,0,0,0,398,399,1,0,0,0,
399,402,1,0,0,0,400,402,3,74,37,0,401,395,1,0,0,0,401,400,1,0,0,0,402,69,
1,0,0,0,403,408,3,72,36,0,404,405,5,47,0,0,405,407,3,72,36,0,406,404,1,0,
0,0,407,410,1,0,0,0,408,406,1,0,0,0,408,409,1,0,0,0,409,71,1,0,0,0,410,408,
1,0,0,0,411,412,3,104,52,0,412,413,5,48,0,0,413,414,3,42,21,0,414,73,1,0,
0,0,415,416,5,5,0,0,416,417,3,76,38,0,417,418,5,25,0,0,418,423,3,78,39,0,
419,420,5,47,0,0,420,422,3,78,39,0,421,419,1,0,0,0,422,425,1,0,0,0,423,421,
1,0,0,0,423,424,1,0,0,0,424,75,1,0,0,0,425,423,1,0,0,0,426,427,3,4,2,0,427,
428,5,48,0,0,428,429,3,50,25,0,429,432,1,0,0,0,430,432,3,50,25,0,431,426,
1,0,0,0,431,430,1,0,0,0,432,77,1,0,0,0,433,434,3,106,53,0,434,435,5,48,0,
0,435,436,5,55,0,0,436,437,3,68,34,0,437,438,5,56,0,0,438,79,1,0,0,0,439,
440,5,33,0,0,440,441,5,25,0,0,441,442,3,82,41,0,442,81,1,0,0,0,443,444,3,
44,22,0,444,83,1,0,0,0,445,446,5,14,0,0,446,447,5,25,0,0,447,450,3,42,21,
0,448,450,5,14,0,0,449,445,1,0,0,0,449,448,1,0,0,0,450,85,1,0,0,0,451,452,
5,61,0,0,452,453,3,50,25,0,453,87,1,0,0,0,454,455,5,38,0,0,455,460,3,90,
45,0,456,457,5,47,0,0,457,459,3,90,45,0,458,456,1,0,0,0,459,462,1,0,0,0,
460,458,1,0,0,0,460,461,1,0,0,0,461,463,1,0,0,0,462,460,1,0,0,0,463,464,
5,47,0,0,464,89,1,0,0,0,465,466,3,104,52,0,466,467,5,48,0,0,467,468,3,42,
21,0,468,91,1,0,0,0,469,470,3,94,47,0,470,471,5,47,0,0,471,93,1,0,0,0,472,
475,3,96,48,0,473,475,3,108,54,0,474,472,1,0,0,0,474,473,1,0,0,0,475,95,
1,0,0,0,476,477,5,28,0,0,477,479,3,4,2,0,478,480,3,98,49,0,479,478,1,0,0,
0,479,480,1,0,0,0,480,481,1,0,0,0,481,482,5,47,0,0,482,483,3,6,3,0,483,97,
1,0,0,0,484,485,5,55,0,0,485,490,3,100,50,0,486,487,5,47,0,0,487,489,3,100,
50,0,488,486,1,0,0,0,489,492,1,0,0,0,490,488,1,0,0,0,490,491,1,0,0,0,491,
493,1,0,0,0,492,490,1,0,0,0,493,494,5,56,0,0,494,99,1,0,0,0,495,503,3,102,
51,0,496,497,5,38,0,0,497,503,3,102,51,0,498,499,5,16,0,0,499,503,3,102,
51,0,500,501,5,28,0,0,501,503,3,102,51,0,502,495,1,0,0,0,502,496,1,0,0,0,
502,498,1,0,0,0,502,500,1,0,0,0,503,101,1,0,0,0,504,505,3,104,52,0,505,506,
5,48,0,0,506,507,3,50,25,0,507,103,1,0,0,0,508,513,3,4,2,0,509,510,5,46,
0,0,510,512,3,4,2,0,511,509,1,0,0,0,512,515,1,0,0,0,513,511,1,0,0,0,513,
514,1,0,0,0,514,105,1,0,0,0,515,513,1,0,0,0,516,521,3,20,10,0,517,518,5,
46,0,0,518,520,3,20,10,0,519,517,1,0,0,0,520,523,1,0,0,0,521,519,1,0,0,0,
521,522,1,0,0,0,522,107,1,0,0,0,523,521,1,0,0,0,524,525,5,16,0,0,525,527,
3,4,2,0,526,528,3,98,49,0,527,526,1,0,0,0,527,528,1,0,0,0,528,529,1,0,0,
0,529,530,5,48,0,0,530,531,3,110,55,0,531,532,5,47,0,0,532,533,3,6,3,0,533,
109,1,0,0,0,534,535,3,50,25,0,535,111,1,0,0,0,536,537,3,12,6,0,537,538,5,
48,0,0,538,539,3,114,57,0,539,542,1,0,0,0,540,542,3,114,57,0,541,536,1,0,
0,0,541,540,1,0,0,0,542,113,1,0,0,0,543,546,3,116,58,0,544,546,3,162,81,
0,545,543,1,0,0,0,545,544,1,0,0,0,546,115,1,0,0,0,547,552,3,118,59,0,548,
552,3,150,75,0,549,552,3,156,78,0,550,552,3,158,79,0,551,547,1,0,0,0,551,
548,1,0,0,0,551,549,1,0,0,0,551,550,1,0,0,0,552,117,1,0,0,0,553,554,3,120,
60,0,554,555,5,45,0,0,555,556,3,122,61,0,556,119,1,0,0,0,557,558,5,62,0,
0,558,561,3,4,2,0,559,561,3,4,2,0,560,557,1,0,0,0,560,559,1,0,0,0,561,589,
1,0,0,0,562,563,5,57,0,0,563,568,3,122,61,0,564,565,5,46,0,0,565,567,3,122,
61,0,566,564,1,0,0,0,567,570,1,0,0,0,568,566,1,0,0,0,568,569,1,0,0,0,569,
571,1,0,0,0,570,568,1,0,0,0,571,572,5,59,0,0,572,588,1,0,0,0,573,574,5,58,
0,0,574,579,3,122,61,0,575,576,5,46,0,0,576,578,3,122,61,0,577,575,1,0,0,
0,578,581,1,0,0,0,579,577,1,0,0,0,579,580,1,0,0,0,580,582,1,0,0,0,581,579,
1,0,0,0,582,583,5,60,0,0,583,588,1,0,0,0,584,585,5,63,0,0,585,588,3,4,2,
0,586,588,5,61,0,0,587,562,1,0,0,0,587,573,1,0,0,0,587,584,1,0,0,0,587,586,
1,0,0,0,588,591,1,0,0,0,589,587,1,0,0,0,589,590,1,0,0,0,590,121,1,0,0,0,
591,589,1,0,0,0,592,596,3,126,63,0,593,594,3,124,62,0,594,595,3,122,61,0,
595,597,1,0,0,0,596,593,1,0,0,0,596,597,1,0,0,0,597,123,1,0,0,0,598,599,
7,3,0,0,599,125,1,0,0,0,600,604,3,130,65,0,601,602,3,128,64,0,602,603,3,
126,63,0,603,605,1,0,0,0,604,601,1,0,0,0,604,605,1,0,0,0,605,127,1,0,0,0,
606,607,7,4,0,0,607,129,1,0,0,0,608,612,3,134,67,0,609,610,3,132,66,0,610,
611,3,130,65,0,611,613,1,0,0,0,612,609,1,0,0,0,612,613,1,0,0,0,613,131,1,
0,0,0,614,615,7,5,0,0,615,133,1,0,0,0,616,618,7,0,0,0,617,616,1,0,0,0,617,
618,1,0,0,0,618,619,1,0,0,0,619,620,3,136,68,0,620,135,1,0,0,0,621,633,3,
120,60,0,622,623,5,55,0,0,623,624,3,122,61,0,624,625,5,56,0,0,625,633,1,
0,0,0,626,633,3,140,70,0,627,633,3,138,69,0,628,633,3,144,72,0,629,630,5,
24,0,0,630,633,3,136,68,0,631,633,3,30,15,0,632,621,1,0,0,0,632,622,1,0,
0,0,632,626,1,0,0,0,632,627,1,0,0,0,632,628,1,0,0,0,632,629,1,0,0,0,632,
631,1,0,0,0,633,137,1,0,0,0,634,639,3,22,11,0,635,639,3,18,9,0,636,639,3,
32,16,0,637,639,5,23,0,0,638,634,1,0,0,0,638,635,1,0,0,0,638,636,1,0,0,0,
638,637,1,0,0,0,639,139,1,0,0,0,640,641,3,4,2,0,641,642,5,55,0,0,642,643,
3,142,71,0,643,644,5,56,0,0,644,141,1,0,0,0,645,650,3,152,76,0,646,647,5,
46,0,0,647,649,3,152,76,0,648,646,1,0,0,0,649,652,1,0,0,0,650,648,1,0,0,
0,650,651,1,0,0,0,651,143,1,0,0,0,652,650,1,0,0,0,653,654,5,57,0,0,654,655,
3,146,73,0,655,656,5,59,0,0,656,662,1,0,0,0,657,658,5,58,0,0,658,659,3,146,
73,0,659,660,5,60,0,0,660,662,1,0,0,0,661,653,1,0,0,0,661,657,1,0,0,0,662,
145,1,0,0,0,663,668,3,148,74,0,664,665,5,46,0,0,665,667,3,148,74,0,666,664,
1,0,0,0,667,670,1,0,0,0,668,666,1,0,0,0,668,669,1,0,0,0,669,673,1,0,0,0,
670,668,1,0,0,0,671,673,1,0,0,0,672,663,1,0,0,0,672,671,1,0,0,0,673,147,
1,0,0,0,674,677,3,122,61,0,675,676,5,64,0,0,676,678,3,122,61,0,677,675,1,
0,0,0,677,678,1,0,0,0,678,149,1,0,0,0,679,684,3,4,2,0,680,681,5,55,0,0,681,
682,3,142,71,0,682,683,5,56,0,0,683,685,1,0,0,0,684,680,1,0,0,0,684,685,
1,0,0,0,685,151,1,0,0,0,686,690,3,122,61,0,687,689,3,154,77,0,688,687,1,
0,0,0,689,692,1,0,0,0,690,688,1,0,0,0,690,691,1,0,0,0,691,153,1,0,0,0,692,
690,1,0,0,0,693,694,5,48,0,0,694,695,3,122,61,0,695,155,1,0,0,0,696,697,
5,17,0,0,697,698,3,12,6,0,698,157,1,0,0,0,699,700,1,0,0,0,700,159,1,0,0,
0,701,702,1,0,0,0,702,161,1,0,0,0,703,708,3,164,82,0,704,708,3,168,84,0,
705,708,3,176,88,0,706,708,3,190,95,0,707,703,1,0,0,0,707,704,1,0,0,0,707,
705,1,0,0,0,707,706,1,0,0,0,708,163,1,0,0,0,709,710,5,3,0,0,710,711,3,166,
83,0,711,712,5,13,0,0,712,165,1,0,0,0,713,718,3,112,56,0,714,715,5,47,0,
0,715,717,3,112,56,0,716,714,1,0,0,0,717,720,1,0,0,0,718,716,1,0,0,0,718,
719,1,0,0,0,719,167,1,0,0,0,720,718,1,0,0,0,721,724,3,170,85,0,722,724,3,
172,86,0,723,721,1,0,0,0,723,722,1,0,0,0,724,169,1,0,0,0,725,726,5,18,0,
0,726,727,3,122,61,0,727,728,5,34,0,0,728,731,3,112,56,0,729,730,5,12,0,
0,730,732,3,112,56,0,731,729,1,0,0,0,731,732,1,0,0,0,732,171,1,0,0,0,733,
734,5,5,0,0,734,735,3,122,61,0,735,736,5,25,0,0,736,741,3,174,87,0,737,738,
5,47,0,0,738,740,3,174,87,0,739,737,1,0,0,0,740,743,1,0,0,0,741,739,1,0,
0,0,741,742,1,0,0,0,742,747,1,0,0,0,743,741,1,0,0,0,744,745,5,47,0,0,745,
746,5,12,0,0,746,748,3,166,83,0,747,744,1,0,0,0,747,748,1,0,0,0,748,749,
1,0,0,0,749,750,5,13,0,0,750,173,1,0,0,0,751,752,3,106,53,0,752,753,5,48,
0,0,753,754,3,112,56,0,754,175,1,0,0,0,755,759,3,178,89,0,756,759,3,180,
90,0,757,759,3,182,91,0,758,755,1,0,0,0,758,756,1,0,0,0,758,757,1,0,0,0,
759,177,1,0,0,0,760,761,5,39,0,0,761,762,3,122,61,0,762,763,5,10,0,0,763,
764,3,112,56,0,764,179,1,0,0,0,765,766,5,32,0,0,766,767,3,166,83,0,767,768,
5,37,0,0,768,769,3,122,61,0,769,181,1,0,0,0,770,771,5,15,0,0,771,772,3,4,
2,0,772,773,5,45,0,0,773,774,3,184,92,0,774,775,5,10,0,0,775,776,3,112,56,
0,776,183,1,0,0,0,777,778,3,186,93,0,778,779,7,6,0,0,779,780,3,188,94,0,
780,185,1,0,0,0,781,782,3,122,61,0,782,187,1,0,0,0,783,784,3,122,61,0,784,
189,1,0,0,0,785,786,5,40,0,0,786,787,3,192,96,0,787,788,5,10,0,0,788,789,
3,112,56,0,789,191,1,0,0,0,790,795,3,120,60,0,791,792,5,46,0,0,792,794,3,
120,60,0,793,791,1,0,0,0,794,797,1,0,0,0,795,793,1,0,0,0,795,796,1,0,0,0,
796,193,1,0,0,0,797,795,1,0,0,0,65,196,207,215,226,228,243,256,277,281,299,
306,310,317,322,328,340,345,351,357,375,382,391,398,401,408,423,431,449,
460,474,479,490,502,513,521,527,541,545,551,560,568,579,587,589,596,604,
612,617,632,638,650,661,668,672,677,684,690,707,718,723,731,741,747,758,
795];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class pascalParser extends antlr4.Parser {

    static grammarFileName = "pascal.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'+'", "'-'", "'*'", "'/'", "':='", "','", 
                            "';'", "':'", "'='", "'<>'", "'<'", "'<='", 
                            "'>='", "'>'", "'('", "')'", "'['", "'(.'", 
                            "']'", "'.)'", "'^'", "'@'", "'.'", "'..'", 
                            "'{'", "'}'" ];
    static symbolicNames = [ null, "AND", "ARRAY", "BEGIN", "BOOLEAN", "CASE", 
                             "CHAR", "CHR", "CONST", "DIV", "DO", "DOWNTO", 
                             "ELSE", "END", "FILE", "FOR", "FUNCTION", "GOTO", 
                             "IF", "IN", "INTEGER", "LABEL", "MOD", "NIL", 
                             "NOT", "OF", "OR", "PACKED", "PROCEDURE", "PROGRAM", 
                             "REAL", "RECORD", "REPEAT", "SET", "THEN", 
                             "TO", "TYPE", "UNTIL", "VAR", "WHILE", "WITH", 
                             "PLUS", "MINUS", "STAR", "SLASH", "ASSIGN", 
                             "COMMA", "SEMI", "COLON", "EQUAL", "NOT_EQUAL", 
                             "LT", "LE", "GE", "GT", "LPAREN", "RPAREN", 
                             "LBRACK", "LBRACK2", "RBRACK", "RBRACK2", "POINTER", 
                             "AT", "DOT", "DOTDOT", "LCURLY", "RCURLY", 
                             "UNIT", "INTERFACE", "USES", "STRING", "IMPLEMENTATION", 
                             "TRUE", "FALSE", "WS", "COMMENT_1", "COMMENT_2", 
                             "IDENT", "STRING_LITERAL", "NUM_INT", "NUM_REAL" ];
    static ruleNames = [ "program", "programHeading", "identifier", "block", 
                         "usesUnitsPart", "labelDeclarationPart", "label", 
                         "constantDefinitionPart", "constantDefinition", 
                         "constantChr", "constant", "unsignedNumber", "unsignedInteger", 
                         "unsignedReal", "sign", "bool_", "string", "typeDefinitionPart", 
                         "typeDefinition", "functionType", "procedureType", 
                         "type_", "simpleType", "scalarType", "subrangeType", 
                         "typeIdentifier", "structuredType", "unpackedStructuredType", 
                         "stringtype", "arrayType", "typeList", "indexType", 
                         "componentType", "recordType", "fieldList", "fixedPart", 
                         "recordSection", "variantPart", "tag", "variant", 
                         "setType", "baseType", "fileType", "pointerType", 
                         "variableDeclarationPart", "variableDeclaration", 
                         "procedureAndFunctionDeclarationPart", "procedureOrFunctionDeclaration", 
                         "procedureDeclaration", "formalParameterList", 
                         "formalParameterSection", "parameterGroup", "identifierList", 
                         "constList", "functionDeclaration", "resultType", 
                         "statement", "unlabelledStatement", "simpleStatement", 
                         "assignmentStatement", "variable", "expression", 
                         "relationaloperator", "simpleExpression", "additiveoperator", 
                         "term", "multiplicativeoperator", "signedFactor", 
                         "factor", "unsignedConstant", "functionDesignator", 
                         "parameterList", "set_", "elementList", "element", 
                         "procedureStatement", "actualParameter", "parameterwidth", 
                         "gotoStatement", "emptyStatement_", "empty_", "structuredStatement", 
                         "compoundStatement", "statements", "conditionalStatement", 
                         "ifStatement", "caseStatement", "caseListElement", 
                         "repetetiveStatement", "whileStatement", "repeatStatement", 
                         "forStatement", "forList", "initialValue", "finalValue", 
                         "withStatement", "recordVariableList" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = pascalParser.ruleNames;
        this.literalNames = pascalParser.literalNames;
        this.symbolicNames = pascalParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, pascalParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.programHeading();
	        this.state = 196;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pascalParser.INTERFACE) {
	            this.state = 195;
	            this.match(pascalParser.INTERFACE);
	        }

	        this.state = 198;
	        this.block();
	        this.state = 199;
	        this.match(pascalParser.DOT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	programHeading() {
	    let localctx = new ProgramHeadingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, pascalParser.RULE_programHeading);
	    var _la = 0; // Token type
	    try {
	        this.state = 215;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.PROGRAM:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 201;
	            this.match(pascalParser.PROGRAM);
	            this.state = 202;
	            this.identifier();
	            this.state = 207;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===pascalParser.LPAREN) {
	                this.state = 203;
	                this.match(pascalParser.LPAREN);
	                this.state = 204;
	                this.identifierList();
	                this.state = 205;
	                this.match(pascalParser.RPAREN);
	            }

	            this.state = 209;
	            this.match(pascalParser.SEMI);
	            break;
	        case pascalParser.UNIT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 211;
	            this.match(pascalParser.UNIT);
	            this.state = 212;
	            this.identifier();
	            this.state = 213;
	            this.match(pascalParser.SEMI);
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, pascalParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.match(pascalParser.IDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 6, pascalParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 8)) & ~0x1f) == 0 && ((1 << (_la - 8)) & ((1 << (pascalParser.CONST - 8)) | (1 << (pascalParser.FUNCTION - 8)) | (1 << (pascalParser.LABEL - 8)) | (1 << (pascalParser.PROCEDURE - 8)) | (1 << (pascalParser.TYPE - 8)) | (1 << (pascalParser.VAR - 8)))) !== 0) || _la===pascalParser.USES || _la===pascalParser.IMPLEMENTATION) {
	            this.state = 226;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case pascalParser.LABEL:
	                this.state = 219;
	                this.labelDeclarationPart();
	                break;
	            case pascalParser.CONST:
	                this.state = 220;
	                this.constantDefinitionPart();
	                break;
	            case pascalParser.TYPE:
	                this.state = 221;
	                this.typeDefinitionPart();
	                break;
	            case pascalParser.VAR:
	                this.state = 222;
	                this.variableDeclarationPart();
	                break;
	            case pascalParser.FUNCTION:
	            case pascalParser.PROCEDURE:
	                this.state = 223;
	                this.procedureAndFunctionDeclarationPart();
	                break;
	            case pascalParser.USES:
	                this.state = 224;
	                this.usesUnitsPart();
	                break;
	            case pascalParser.IMPLEMENTATION:
	                this.state = 225;
	                this.match(pascalParser.IMPLEMENTATION);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 230;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 231;
	        this.compoundStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	usesUnitsPart() {
	    let localctx = new UsesUnitsPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, pascalParser.RULE_usesUnitsPart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this.match(pascalParser.USES);
	        this.state = 234;
	        this.identifierList();
	        this.state = 235;
	        this.match(pascalParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	labelDeclarationPart() {
	    let localctx = new LabelDeclarationPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, pascalParser.RULE_labelDeclarationPart);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this.match(pascalParser.LABEL);
	        this.state = 238;
	        this.label();
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===pascalParser.COMMA) {
	            this.state = 239;
	            this.match(pascalParser.COMMA);
	            this.state = 240;
	            this.label();
	            this.state = 245;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 246;
	        this.match(pascalParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 12, pascalParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.unsignedInteger();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constantDefinitionPart() {
	    let localctx = new ConstantDefinitionPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, pascalParser.RULE_constantDefinitionPart);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.match(pascalParser.CONST);
	        this.state = 254; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 251;
	            this.constantDefinition();
	            this.state = 252;
	            this.match(pascalParser.SEMI);
	            this.state = 256; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===pascalParser.IDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constantDefinition() {
	    let localctx = new ConstantDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, pascalParser.RULE_constantDefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.identifier();
	        this.state = 259;
	        this.match(pascalParser.EQUAL);
	        this.state = 260;
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



	constantChr() {
	    let localctx = new ConstantChrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, pascalParser.RULE_constantChr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.match(pascalParser.CHR);
	        this.state = 263;
	        this.match(pascalParser.LPAREN);
	        this.state = 264;
	        this.unsignedInteger();
	        this.state = 265;
	        this.match(pascalParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 20, pascalParser.RULE_constant);
	    try {
	        this.state = 277;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 267;
	            this.unsignedNumber();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 268;
	            this.sign();
	            this.state = 269;
	            this.unsignedNumber();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 271;
	            this.identifier();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 272;
	            this.sign();
	            this.state = 273;
	            this.identifier();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 275;
	            this.string();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 276;
	            this.constantChr();
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



	unsignedNumber() {
	    let localctx = new UnsignedNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, pascalParser.RULE_unsignedNumber);
	    try {
	        this.state = 281;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.NUM_INT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 279;
	            this.unsignedInteger();
	            break;
	        case pascalParser.NUM_REAL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 280;
	            this.unsignedReal();
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



	unsignedInteger() {
	    let localctx = new UnsignedIntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, pascalParser.RULE_unsignedInteger);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.match(pascalParser.NUM_INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unsignedReal() {
	    let localctx = new UnsignedRealContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, pascalParser.RULE_unsignedReal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        this.match(pascalParser.NUM_REAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sign() {
	    let localctx = new SignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, pascalParser.RULE_sign);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        _la = this._input.LA(1);
	        if(!(_la===pascalParser.PLUS || _la===pascalParser.MINUS)) {
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



	bool_() {
	    let localctx = new Bool_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, pascalParser.RULE_bool_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 289;
	        _la = this._input.LA(1);
	        if(!(_la===pascalParser.TRUE || _la===pascalParser.FALSE)) {
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, pascalParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 291;
	        this.match(pascalParser.STRING_LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeDefinitionPart() {
	    let localctx = new TypeDefinitionPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, pascalParser.RULE_typeDefinitionPart);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
	        this.match(pascalParser.TYPE);
	        this.state = 297; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 294;
	            this.typeDefinition();
	            this.state = 295;
	            this.match(pascalParser.SEMI);
	            this.state = 299; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===pascalParser.IDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeDefinition() {
	    let localctx = new TypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, pascalParser.RULE_typeDefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 301;
	        this.identifier();
	        this.state = 302;
	        this.match(pascalParser.EQUAL);
	        this.state = 306;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.ARRAY:
	        case pascalParser.BOOLEAN:
	        case pascalParser.CHAR:
	        case pascalParser.CHR:
	        case pascalParser.FILE:
	        case pascalParser.INTEGER:
	        case pascalParser.PACKED:
	        case pascalParser.REAL:
	        case pascalParser.RECORD:
	        case pascalParser.SET:
	        case pascalParser.PLUS:
	        case pascalParser.MINUS:
	        case pascalParser.LPAREN:
	        case pascalParser.POINTER:
	        case pascalParser.STRING:
	        case pascalParser.IDENT:
	        case pascalParser.STRING_LITERAL:
	        case pascalParser.NUM_INT:
	        case pascalParser.NUM_REAL:
	            this.state = 303;
	            this.type_();
	            break;
	        case pascalParser.FUNCTION:
	            this.state = 304;
	            this.functionType();
	            break;
	        case pascalParser.PROCEDURE:
	            this.state = 305;
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



	functionType() {
	    let localctx = new FunctionTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, pascalParser.RULE_functionType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        this.match(pascalParser.FUNCTION);
	        this.state = 310;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pascalParser.LPAREN) {
	            this.state = 309;
	            this.formalParameterList();
	        }

	        this.state = 312;
	        this.match(pascalParser.COLON);
	        this.state = 313;
	        this.resultType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 40, pascalParser.RULE_procedureType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 315;
	        this.match(pascalParser.PROCEDURE);
	        this.state = 317;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pascalParser.LPAREN) {
	            this.state = 316;
	            this.formalParameterList();
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
	    this.enterRule(localctx, 42, pascalParser.RULE_type_);
	    try {
	        this.state = 322;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.BOOLEAN:
	        case pascalParser.CHAR:
	        case pascalParser.CHR:
	        case pascalParser.INTEGER:
	        case pascalParser.REAL:
	        case pascalParser.PLUS:
	        case pascalParser.MINUS:
	        case pascalParser.LPAREN:
	        case pascalParser.STRING:
	        case pascalParser.IDENT:
	        case pascalParser.STRING_LITERAL:
	        case pascalParser.NUM_INT:
	        case pascalParser.NUM_REAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 319;
	            this.simpleType();
	            break;
	        case pascalParser.ARRAY:
	        case pascalParser.FILE:
	        case pascalParser.PACKED:
	        case pascalParser.RECORD:
	        case pascalParser.SET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 320;
	            this.structuredType();
	            break;
	        case pascalParser.POINTER:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 321;
	            this.pointerType();
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



	simpleType() {
	    let localctx = new SimpleTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, pascalParser.RULE_simpleType);
	    try {
	        this.state = 328;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 324;
	            this.scalarType();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 325;
	            this.subrangeType();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 326;
	            this.typeIdentifier();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 327;
	            this.stringtype();
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



	scalarType() {
	    let localctx = new ScalarTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, pascalParser.RULE_scalarType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
	        this.match(pascalParser.LPAREN);
	        this.state = 331;
	        this.identifierList();
	        this.state = 332;
	        this.match(pascalParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subrangeType() {
	    let localctx = new SubrangeTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, pascalParser.RULE_subrangeType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
	        this.constant();
	        this.state = 335;
	        this.match(pascalParser.DOTDOT);
	        this.state = 336;
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



	typeIdentifier() {
	    let localctx = new TypeIdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, pascalParser.RULE_typeIdentifier);
	    var _la = 0; // Token type
	    try {
	        this.state = 340;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.IDENT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 338;
	            this.identifier();
	            break;
	        case pascalParser.BOOLEAN:
	        case pascalParser.CHAR:
	        case pascalParser.INTEGER:
	        case pascalParser.REAL:
	        case pascalParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 339;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pascalParser.BOOLEAN) | (1 << pascalParser.CHAR) | (1 << pascalParser.INTEGER) | (1 << pascalParser.REAL))) !== 0) || _la===pascalParser.STRING)) {
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
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	structuredType() {
	    let localctx = new StructuredTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, pascalParser.RULE_structuredType);
	    try {
	        this.state = 345;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.PACKED:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 342;
	            this.match(pascalParser.PACKED);
	            this.state = 343;
	            this.unpackedStructuredType();
	            break;
	        case pascalParser.ARRAY:
	        case pascalParser.FILE:
	        case pascalParser.RECORD:
	        case pascalParser.SET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 344;
	            this.unpackedStructuredType();
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



	unpackedStructuredType() {
	    let localctx = new UnpackedStructuredTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, pascalParser.RULE_unpackedStructuredType);
	    try {
	        this.state = 351;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.ARRAY:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 347;
	            this.arrayType();
	            break;
	        case pascalParser.RECORD:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 348;
	            this.recordType();
	            break;
	        case pascalParser.SET:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 349;
	            this.setType();
	            break;
	        case pascalParser.FILE:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 350;
	            this.fileType();
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



	stringtype() {
	    let localctx = new StringtypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, pascalParser.RULE_stringtype);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 353;
	        this.match(pascalParser.STRING);
	        this.state = 354;
	        this.match(pascalParser.LBRACK);
	        this.state = 357;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.IDENT:
	            this.state = 355;
	            this.identifier();
	            break;
	        case pascalParser.NUM_INT:
	        case pascalParser.NUM_REAL:
	            this.state = 356;
	            this.unsignedNumber();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 359;
	        this.match(pascalParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 58, pascalParser.RULE_arrayType);
	    try {
	        this.state = 375;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 361;
	            this.match(pascalParser.ARRAY);
	            this.state = 362;
	            this.match(pascalParser.LBRACK);
	            this.state = 363;
	            this.typeList();
	            this.state = 364;
	            this.match(pascalParser.RBRACK);
	            this.state = 365;
	            this.match(pascalParser.OF);
	            this.state = 366;
	            this.componentType();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 368;
	            this.match(pascalParser.ARRAY);
	            this.state = 369;
	            this.match(pascalParser.LBRACK2);
	            this.state = 370;
	            this.typeList();
	            this.state = 371;
	            this.match(pascalParser.RBRACK2);
	            this.state = 372;
	            this.match(pascalParser.OF);
	            this.state = 373;
	            this.componentType();
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



	typeList() {
	    let localctx = new TypeListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, pascalParser.RULE_typeList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.indexType();
	        this.state = 382;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===pascalParser.COMMA) {
	            this.state = 378;
	            this.match(pascalParser.COMMA);
	            this.state = 379;
	            this.indexType();
	            this.state = 384;
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



	indexType() {
	    let localctx = new IndexTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, pascalParser.RULE_indexType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 385;
	        this.simpleType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	componentType() {
	    let localctx = new ComponentTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, pascalParser.RULE_componentType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 387;
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



	recordType() {
	    let localctx = new RecordTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, pascalParser.RULE_recordType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 389;
	        this.match(pascalParser.RECORD);
	        this.state = 391;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pascalParser.CASE || _la===pascalParser.IDENT) {
	            this.state = 390;
	            this.fieldList();
	        }

	        this.state = 393;
	        this.match(pascalParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 68, pascalParser.RULE_fieldList);
	    var _la = 0; // Token type
	    try {
	        this.state = 401;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.IDENT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 395;
	            this.fixedPart();
	            this.state = 398;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===pascalParser.SEMI) {
	                this.state = 396;
	                this.match(pascalParser.SEMI);
	                this.state = 397;
	                this.variantPart();
	            }

	            break;
	        case pascalParser.CASE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 400;
	            this.variantPart();
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



	fixedPart() {
	    let localctx = new FixedPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, pascalParser.RULE_fixedPart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 403;
	        this.recordSection();
	        this.state = 408;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 404;
	                this.match(pascalParser.SEMI);
	                this.state = 405;
	                this.recordSection(); 
	            }
	            this.state = 410;
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



	recordSection() {
	    let localctx = new RecordSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, pascalParser.RULE_recordSection);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 411;
	        this.identifierList();
	        this.state = 412;
	        this.match(pascalParser.COLON);
	        this.state = 413;
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



	variantPart() {
	    let localctx = new VariantPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, pascalParser.RULE_variantPart);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 415;
	        this.match(pascalParser.CASE);
	        this.state = 416;
	        this.tag();
	        this.state = 417;
	        this.match(pascalParser.OF);
	        this.state = 418;
	        this.variant();
	        this.state = 423;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===pascalParser.SEMI) {
	            this.state = 419;
	            this.match(pascalParser.SEMI);
	            this.state = 420;
	            this.variant();
	            this.state = 425;
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



	tag() {
	    let localctx = new TagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, pascalParser.RULE_tag);
	    try {
	        this.state = 431;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 426;
	            this.identifier();
	            this.state = 427;
	            this.match(pascalParser.COLON);
	            this.state = 428;
	            this.typeIdentifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 430;
	            this.typeIdentifier();
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



	variant() {
	    let localctx = new VariantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, pascalParser.RULE_variant);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 433;
	        this.constList();
	        this.state = 434;
	        this.match(pascalParser.COLON);
	        this.state = 435;
	        this.match(pascalParser.LPAREN);
	        this.state = 436;
	        this.fieldList();
	        this.state = 437;
	        this.match(pascalParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setType() {
	    let localctx = new SetTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, pascalParser.RULE_setType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 439;
	        this.match(pascalParser.SET);
	        this.state = 440;
	        this.match(pascalParser.OF);
	        this.state = 441;
	        this.baseType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 82, pascalParser.RULE_baseType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 443;
	        this.simpleType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fileType() {
	    let localctx = new FileTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, pascalParser.RULE_fileType);
	    try {
	        this.state = 449;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 445;
	            this.match(pascalParser.FILE);
	            this.state = 446;
	            this.match(pascalParser.OF);
	            this.state = 447;
	            this.type_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 448;
	            this.match(pascalParser.FILE);
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



	pointerType() {
	    let localctx = new PointerTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, pascalParser.RULE_pointerType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 451;
	        this.match(pascalParser.POINTER);
	        this.state = 452;
	        this.typeIdentifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclarationPart() {
	    let localctx = new VariableDeclarationPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, pascalParser.RULE_variableDeclarationPart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 454;
	        this.match(pascalParser.VAR);
	        this.state = 455;
	        this.variableDeclaration();
	        this.state = 460;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 456;
	                this.match(pascalParser.SEMI);
	                this.state = 457;
	                this.variableDeclaration(); 
	            }
	            this.state = 462;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
	        }

	        this.state = 463;
	        this.match(pascalParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 90, pascalParser.RULE_variableDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 465;
	        this.identifierList();
	        this.state = 466;
	        this.match(pascalParser.COLON);
	        this.state = 467;
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



	procedureAndFunctionDeclarationPart() {
	    let localctx = new ProcedureAndFunctionDeclarationPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, pascalParser.RULE_procedureAndFunctionDeclarationPart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 469;
	        this.procedureOrFunctionDeclaration();
	        this.state = 470;
	        this.match(pascalParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedureOrFunctionDeclaration() {
	    let localctx = new ProcedureOrFunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, pascalParser.RULE_procedureOrFunctionDeclaration);
	    try {
	        this.state = 474;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.PROCEDURE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 472;
	            this.procedureDeclaration();
	            break;
	        case pascalParser.FUNCTION:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 473;
	            this.functionDeclaration();
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



	procedureDeclaration() {
	    let localctx = new ProcedureDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, pascalParser.RULE_procedureDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 476;
	        this.match(pascalParser.PROCEDURE);
	        this.state = 477;
	        this.identifier();
	        this.state = 479;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pascalParser.LPAREN) {
	            this.state = 478;
	            this.formalParameterList();
	        }

	        this.state = 481;
	        this.match(pascalParser.SEMI);
	        this.state = 482;
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



	formalParameterList() {
	    let localctx = new FormalParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, pascalParser.RULE_formalParameterList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 484;
	        this.match(pascalParser.LPAREN);
	        this.state = 485;
	        this.formalParameterSection();
	        this.state = 490;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===pascalParser.SEMI) {
	            this.state = 486;
	            this.match(pascalParser.SEMI);
	            this.state = 487;
	            this.formalParameterSection();
	            this.state = 492;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 493;
	        this.match(pascalParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formalParameterSection() {
	    let localctx = new FormalParameterSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, pascalParser.RULE_formalParameterSection);
	    try {
	        this.state = 502;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.IDENT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 495;
	            this.parameterGroup();
	            break;
	        case pascalParser.VAR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 496;
	            this.match(pascalParser.VAR);
	            this.state = 497;
	            this.parameterGroup();
	            break;
	        case pascalParser.FUNCTION:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 498;
	            this.match(pascalParser.FUNCTION);
	            this.state = 499;
	            this.parameterGroup();
	            break;
	        case pascalParser.PROCEDURE:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 500;
	            this.match(pascalParser.PROCEDURE);
	            this.state = 501;
	            this.parameterGroup();
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



	parameterGroup() {
	    let localctx = new ParameterGroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, pascalParser.RULE_parameterGroup);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 504;
	        this.identifierList();
	        this.state = 505;
	        this.match(pascalParser.COLON);
	        this.state = 506;
	        this.typeIdentifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifierList() {
	    let localctx = new IdentifierListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, pascalParser.RULE_identifierList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 508;
	        this.identifier();
	        this.state = 513;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===pascalParser.COMMA) {
	            this.state = 509;
	            this.match(pascalParser.COMMA);
	            this.state = 510;
	            this.identifier();
	            this.state = 515;
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



	constList() {
	    let localctx = new ConstListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, pascalParser.RULE_constList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 516;
	        this.constant();
	        this.state = 521;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===pascalParser.COMMA) {
	            this.state = 517;
	            this.match(pascalParser.COMMA);
	            this.state = 518;
	            this.constant();
	            this.state = 523;
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



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, pascalParser.RULE_functionDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 524;
	        this.match(pascalParser.FUNCTION);
	        this.state = 525;
	        this.identifier();
	        this.state = 527;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pascalParser.LPAREN) {
	            this.state = 526;
	            this.formalParameterList();
	        }

	        this.state = 529;
	        this.match(pascalParser.COLON);
	        this.state = 530;
	        this.resultType();
	        this.state = 531;
	        this.match(pascalParser.SEMI);
	        this.state = 532;
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



	resultType() {
	    let localctx = new ResultTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, pascalParser.RULE_resultType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 534;
	        this.typeIdentifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 112, pascalParser.RULE_statement);
	    try {
	        this.state = 541;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.NUM_INT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 536;
	            this.label();
	            this.state = 537;
	            this.match(pascalParser.COLON);
	            this.state = 538;
	            this.unlabelledStatement();
	            break;
	        case pascalParser.BEGIN:
	        case pascalParser.CASE:
	        case pascalParser.ELSE:
	        case pascalParser.END:
	        case pascalParser.FOR:
	        case pascalParser.GOTO:
	        case pascalParser.IF:
	        case pascalParser.REPEAT:
	        case pascalParser.UNTIL:
	        case pascalParser.WHILE:
	        case pascalParser.WITH:
	        case pascalParser.SEMI:
	        case pascalParser.AT:
	        case pascalParser.IDENT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 540;
	            this.unlabelledStatement();
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



	unlabelledStatement() {
	    let localctx = new UnlabelledStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, pascalParser.RULE_unlabelledStatement);
	    try {
	        this.state = 545;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.ELSE:
	        case pascalParser.END:
	        case pascalParser.GOTO:
	        case pascalParser.UNTIL:
	        case pascalParser.SEMI:
	        case pascalParser.AT:
	        case pascalParser.IDENT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 543;
	            this.simpleStatement();
	            break;
	        case pascalParser.BEGIN:
	        case pascalParser.CASE:
	        case pascalParser.FOR:
	        case pascalParser.IF:
	        case pascalParser.REPEAT:
	        case pascalParser.WHILE:
	        case pascalParser.WITH:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 544;
	            this.structuredStatement();
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



	simpleStatement() {
	    let localctx = new SimpleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, pascalParser.RULE_simpleStatement);
	    try {
	        this.state = 551;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 547;
	            this.assignmentStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 548;
	            this.procedureStatement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 549;
	            this.gotoStatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 550;
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



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, pascalParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 553;
	        this.variable();
	        this.state = 554;
	        this.match(pascalParser.ASSIGN);
	        this.state = 555;
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
	    this.enterRule(localctx, 120, pascalParser.RULE_variable);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 560;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.AT:
	            this.state = 557;
	            this.match(pascalParser.AT);
	            this.state = 558;
	            this.identifier();
	            break;
	        case pascalParser.IDENT:
	            this.state = 559;
	            this.identifier();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 589;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (pascalParser.LBRACK - 57)) | (1 << (pascalParser.LBRACK2 - 57)) | (1 << (pascalParser.POINTER - 57)) | (1 << (pascalParser.DOT - 57)))) !== 0)) {
	            this.state = 587;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case pascalParser.LBRACK:
	                this.state = 562;
	                this.match(pascalParser.LBRACK);
	                this.state = 563;
	                this.expression();
	                this.state = 568;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===pascalParser.COMMA) {
	                    this.state = 564;
	                    this.match(pascalParser.COMMA);
	                    this.state = 565;
	                    this.expression();
	                    this.state = 570;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 571;
	                this.match(pascalParser.RBRACK);
	                break;
	            case pascalParser.LBRACK2:
	                this.state = 573;
	                this.match(pascalParser.LBRACK2);
	                this.state = 574;
	                this.expression();
	                this.state = 579;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===pascalParser.COMMA) {
	                    this.state = 575;
	                    this.match(pascalParser.COMMA);
	                    this.state = 576;
	                    this.expression();
	                    this.state = 581;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 582;
	                this.match(pascalParser.RBRACK2);
	                break;
	            case pascalParser.DOT:
	                this.state = 584;
	                this.match(pascalParser.DOT);
	                this.state = 585;
	                this.identifier();
	                break;
	            case pascalParser.POINTER:
	                this.state = 586;
	                this.match(pascalParser.POINTER);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 591;
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, pascalParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 592;
	        this.simpleExpression();
	        this.state = 596;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pascalParser.IN || ((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (pascalParser.EQUAL - 49)) | (1 << (pascalParser.NOT_EQUAL - 49)) | (1 << (pascalParser.LT - 49)) | (1 << (pascalParser.LE - 49)) | (1 << (pascalParser.GE - 49)) | (1 << (pascalParser.GT - 49)))) !== 0)) {
	            this.state = 593;
	            this.relationaloperator();
	            this.state = 594;
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



	relationaloperator() {
	    let localctx = new RelationaloperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, pascalParser.RULE_relationaloperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 598;
	        _la = this._input.LA(1);
	        if(!(_la===pascalParser.IN || ((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (pascalParser.EQUAL - 49)) | (1 << (pascalParser.NOT_EQUAL - 49)) | (1 << (pascalParser.LT - 49)) | (1 << (pascalParser.LE - 49)) | (1 << (pascalParser.GE - 49)) | (1 << (pascalParser.GT - 49)))) !== 0))) {
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
	    this.enterRule(localctx, 126, pascalParser.RULE_simpleExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 600;
	        this.term();
	        this.state = 604;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (pascalParser.OR - 26)) | (1 << (pascalParser.PLUS - 26)) | (1 << (pascalParser.MINUS - 26)))) !== 0)) {
	            this.state = 601;
	            this.additiveoperator();
	            this.state = 602;
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



	additiveoperator() {
	    let localctx = new AdditiveoperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 128, pascalParser.RULE_additiveoperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 606;
	        _la = this._input.LA(1);
	        if(!(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (pascalParser.OR - 26)) | (1 << (pascalParser.PLUS - 26)) | (1 << (pascalParser.MINUS - 26)))) !== 0))) {
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
	    this.enterRule(localctx, 130, pascalParser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 608;
	        this.signedFactor();
	        this.state = 612;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pascalParser.AND) | (1 << pascalParser.DIV) | (1 << pascalParser.MOD))) !== 0) || _la===pascalParser.STAR || _la===pascalParser.SLASH) {
	            this.state = 609;
	            this.multiplicativeoperator();
	            this.state = 610;
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



	multiplicativeoperator() {
	    let localctx = new MultiplicativeoperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 132, pascalParser.RULE_multiplicativeoperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 614;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pascalParser.AND) | (1 << pascalParser.DIV) | (1 << pascalParser.MOD))) !== 0) || _la===pascalParser.STAR || _la===pascalParser.SLASH)) {
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



	signedFactor() {
	    let localctx = new SignedFactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 134, pascalParser.RULE_signedFactor);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 617;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pascalParser.PLUS || _la===pascalParser.MINUS) {
	            this.state = 616;
	            _la = this._input.LA(1);
	            if(!(_la===pascalParser.PLUS || _la===pascalParser.MINUS)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 619;
	        this.factor();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 136, pascalParser.RULE_factor);
	    try {
	        this.state = 632;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 621;
	            this.variable();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 622;
	            this.match(pascalParser.LPAREN);
	            this.state = 623;
	            this.expression();
	            this.state = 624;
	            this.match(pascalParser.RPAREN);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 626;
	            this.functionDesignator();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 627;
	            this.unsignedConstant();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 628;
	            this.set_();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 629;
	            this.match(pascalParser.NOT);
	            this.state = 630;
	            this.factor();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 631;
	            this.bool_();
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



	unsignedConstant() {
	    let localctx = new UnsignedConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 138, pascalParser.RULE_unsignedConstant);
	    try {
	        this.state = 638;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.NUM_INT:
	        case pascalParser.NUM_REAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 634;
	            this.unsignedNumber();
	            break;
	        case pascalParser.CHR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 635;
	            this.constantChr();
	            break;
	        case pascalParser.STRING_LITERAL:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 636;
	            this.string();
	            break;
	        case pascalParser.NIL:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 637;
	            this.match(pascalParser.NIL);
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



	functionDesignator() {
	    let localctx = new FunctionDesignatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 140, pascalParser.RULE_functionDesignator);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 640;
	        this.identifier();
	        this.state = 641;
	        this.match(pascalParser.LPAREN);
	        this.state = 642;
	        this.parameterList();
	        this.state = 643;
	        this.match(pascalParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 142, pascalParser.RULE_parameterList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 645;
	        this.actualParameter();
	        this.state = 650;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===pascalParser.COMMA) {
	            this.state = 646;
	            this.match(pascalParser.COMMA);
	            this.state = 647;
	            this.actualParameter();
	            this.state = 652;
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



	set_() {
	    let localctx = new Set_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 144, pascalParser.RULE_set_);
	    try {
	        this.state = 661;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.LBRACK:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 653;
	            this.match(pascalParser.LBRACK);
	            this.state = 654;
	            this.elementList();
	            this.state = 655;
	            this.match(pascalParser.RBRACK);
	            break;
	        case pascalParser.LBRACK2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 657;
	            this.match(pascalParser.LBRACK2);
	            this.state = 658;
	            this.elementList();
	            this.state = 659;
	            this.match(pascalParser.RBRACK2);
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



	elementList() {
	    let localctx = new ElementListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 146, pascalParser.RULE_elementList);
	    var _la = 0; // Token type
	    try {
	        this.state = 672;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.CHR:
	        case pascalParser.NIL:
	        case pascalParser.NOT:
	        case pascalParser.PLUS:
	        case pascalParser.MINUS:
	        case pascalParser.LPAREN:
	        case pascalParser.LBRACK:
	        case pascalParser.LBRACK2:
	        case pascalParser.AT:
	        case pascalParser.TRUE:
	        case pascalParser.FALSE:
	        case pascalParser.IDENT:
	        case pascalParser.STRING_LITERAL:
	        case pascalParser.NUM_INT:
	        case pascalParser.NUM_REAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 663;
	            this.element();
	            this.state = 668;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===pascalParser.COMMA) {
	                this.state = 664;
	                this.match(pascalParser.COMMA);
	                this.state = 665;
	                this.element();
	                this.state = 670;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case pascalParser.RBRACK:
	        case pascalParser.RBRACK2:
	            this.enterOuterAlt(localctx, 2);

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



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 148, pascalParser.RULE_element);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 674;
	        this.expression();
	        this.state = 677;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pascalParser.DOTDOT) {
	            this.state = 675;
	            this.match(pascalParser.DOTDOT);
	            this.state = 676;
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



	procedureStatement() {
	    let localctx = new ProcedureStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 150, pascalParser.RULE_procedureStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 679;
	        this.identifier();
	        this.state = 684;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pascalParser.LPAREN) {
	            this.state = 680;
	            this.match(pascalParser.LPAREN);
	            this.state = 681;
	            this.parameterList();
	            this.state = 682;
	            this.match(pascalParser.RPAREN);
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



	actualParameter() {
	    let localctx = new ActualParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 152, pascalParser.RULE_actualParameter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 686;
	        this.expression();
	        this.state = 690;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===pascalParser.COLON) {
	            this.state = 687;
	            this.parameterwidth();
	            this.state = 692;
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



	parameterwidth() {
	    let localctx = new ParameterwidthContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 154, pascalParser.RULE_parameterwidth);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 693;
	        this.match(pascalParser.COLON);
	        this.state = 694;
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



	gotoStatement() {
	    let localctx = new GotoStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 156, pascalParser.RULE_gotoStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 696;
	        this.match(pascalParser.GOTO);
	        this.state = 697;
	        this.label();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 158, pascalParser.RULE_emptyStatement_);
	    try {
	        this.enterOuterAlt(localctx, 1);

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	empty_() {
	    let localctx = new Empty_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 160, pascalParser.RULE_empty_);
	    try {
	        this.enterOuterAlt(localctx, 1);

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	structuredStatement() {
	    let localctx = new StructuredStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 162, pascalParser.RULE_structuredStatement);
	    try {
	        this.state = 707;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.BEGIN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 703;
	            this.compoundStatement();
	            break;
	        case pascalParser.CASE:
	        case pascalParser.IF:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 704;
	            this.conditionalStatement();
	            break;
	        case pascalParser.FOR:
	        case pascalParser.REPEAT:
	        case pascalParser.WHILE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 705;
	            this.repetetiveStatement();
	            break;
	        case pascalParser.WITH:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 706;
	            this.withStatement();
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



	compoundStatement() {
	    let localctx = new CompoundStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 164, pascalParser.RULE_compoundStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 709;
	        this.match(pascalParser.BEGIN);
	        this.state = 710;
	        this.statements();
	        this.state = 711;
	        this.match(pascalParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 166, pascalParser.RULE_statements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 713;
	        this.statement();
	        this.state = 718;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===pascalParser.SEMI) {
	            this.state = 714;
	            this.match(pascalParser.SEMI);
	            this.state = 715;
	            this.statement();
	            this.state = 720;
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



	conditionalStatement() {
	    let localctx = new ConditionalStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 168, pascalParser.RULE_conditionalStatement);
	    try {
	        this.state = 723;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.IF:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 721;
	            this.ifStatement();
	            break;
	        case pascalParser.CASE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 722;
	            this.caseStatement();
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



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 170, pascalParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 725;
	        this.match(pascalParser.IF);
	        this.state = 726;
	        this.expression();
	        this.state = 727;
	        this.match(pascalParser.THEN);
	        this.state = 728;
	        this.statement();
	        this.state = 731;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
	        if(la_===1) {
	            this.state = 729;
	            this.match(pascalParser.ELSE);
	            this.state = 730;
	            this.statement();

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



	caseStatement() {
	    let localctx = new CaseStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 172, pascalParser.RULE_caseStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 733;
	        this.match(pascalParser.CASE);
	        this.state = 734;
	        this.expression();
	        this.state = 735;
	        this.match(pascalParser.OF);
	        this.state = 736;
	        this.caseListElement();
	        this.state = 741;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,61,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 737;
	                this.match(pascalParser.SEMI);
	                this.state = 738;
	                this.caseListElement(); 
	            }
	            this.state = 743;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,61,this._ctx);
	        }

	        this.state = 747;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===pascalParser.SEMI) {
	            this.state = 744;
	            this.match(pascalParser.SEMI);
	            this.state = 745;
	            this.match(pascalParser.ELSE);
	            this.state = 746;
	            this.statements();
	        }

	        this.state = 749;
	        this.match(pascalParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caseListElement() {
	    let localctx = new CaseListElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 174, pascalParser.RULE_caseListElement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 751;
	        this.constList();
	        this.state = 752;
	        this.match(pascalParser.COLON);
	        this.state = 753;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repetetiveStatement() {
	    let localctx = new RepetetiveStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 176, pascalParser.RULE_repetetiveStatement);
	    try {
	        this.state = 758;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pascalParser.WHILE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 755;
	            this.whileStatement();
	            break;
	        case pascalParser.REPEAT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 756;
	            this.repeatStatement();
	            break;
	        case pascalParser.FOR:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 757;
	            this.forStatement();
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
	    this.enterRule(localctx, 178, pascalParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 760;
	        this.match(pascalParser.WHILE);
	        this.state = 761;
	        this.expression();
	        this.state = 762;
	        this.match(pascalParser.DO);
	        this.state = 763;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 180, pascalParser.RULE_repeatStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 765;
	        this.match(pascalParser.REPEAT);
	        this.state = 766;
	        this.statements();
	        this.state = 767;
	        this.match(pascalParser.UNTIL);
	        this.state = 768;
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
	    this.enterRule(localctx, 182, pascalParser.RULE_forStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 770;
	        this.match(pascalParser.FOR);
	        this.state = 771;
	        this.identifier();
	        this.state = 772;
	        this.match(pascalParser.ASSIGN);
	        this.state = 773;
	        this.forList();
	        this.state = 774;
	        this.match(pascalParser.DO);
	        this.state = 775;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forList() {
	    let localctx = new ForListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 184, pascalParser.RULE_forList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 777;
	        this.initialValue();
	        this.state = 778;
	        _la = this._input.LA(1);
	        if(!(_la===pascalParser.DOWNTO || _la===pascalParser.TO)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 779;
	        this.finalValue();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	initialValue() {
	    let localctx = new InitialValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 186, pascalParser.RULE_initialValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 781;
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



	finalValue() {
	    let localctx = new FinalValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 188, pascalParser.RULE_finalValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 783;
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



	withStatement() {
	    let localctx = new WithStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 190, pascalParser.RULE_withStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 785;
	        this.match(pascalParser.WITH);
	        this.state = 786;
	        this.recordVariableList();
	        this.state = 787;
	        this.match(pascalParser.DO);
	        this.state = 788;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	recordVariableList() {
	    let localctx = new RecordVariableListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 192, pascalParser.RULE_recordVariableList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 790;
	        this.variable();
	        this.state = 795;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===pascalParser.COMMA) {
	            this.state = 791;
	            this.match(pascalParser.COMMA);
	            this.state = 792;
	            this.variable();
	            this.state = 797;
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


}

pascalParser.EOF = antlr4.Token.EOF;
pascalParser.AND = 1;
pascalParser.ARRAY = 2;
pascalParser.BEGIN = 3;
pascalParser.BOOLEAN = 4;
pascalParser.CASE = 5;
pascalParser.CHAR = 6;
pascalParser.CHR = 7;
pascalParser.CONST = 8;
pascalParser.DIV = 9;
pascalParser.DO = 10;
pascalParser.DOWNTO = 11;
pascalParser.ELSE = 12;
pascalParser.END = 13;
pascalParser.FILE = 14;
pascalParser.FOR = 15;
pascalParser.FUNCTION = 16;
pascalParser.GOTO = 17;
pascalParser.IF = 18;
pascalParser.IN = 19;
pascalParser.INTEGER = 20;
pascalParser.LABEL = 21;
pascalParser.MOD = 22;
pascalParser.NIL = 23;
pascalParser.NOT = 24;
pascalParser.OF = 25;
pascalParser.OR = 26;
pascalParser.PACKED = 27;
pascalParser.PROCEDURE = 28;
pascalParser.PROGRAM = 29;
pascalParser.REAL = 30;
pascalParser.RECORD = 31;
pascalParser.REPEAT = 32;
pascalParser.SET = 33;
pascalParser.THEN = 34;
pascalParser.TO = 35;
pascalParser.TYPE = 36;
pascalParser.UNTIL = 37;
pascalParser.VAR = 38;
pascalParser.WHILE = 39;
pascalParser.WITH = 40;
pascalParser.PLUS = 41;
pascalParser.MINUS = 42;
pascalParser.STAR = 43;
pascalParser.SLASH = 44;
pascalParser.ASSIGN = 45;
pascalParser.COMMA = 46;
pascalParser.SEMI = 47;
pascalParser.COLON = 48;
pascalParser.EQUAL = 49;
pascalParser.NOT_EQUAL = 50;
pascalParser.LT = 51;
pascalParser.LE = 52;
pascalParser.GE = 53;
pascalParser.GT = 54;
pascalParser.LPAREN = 55;
pascalParser.RPAREN = 56;
pascalParser.LBRACK = 57;
pascalParser.LBRACK2 = 58;
pascalParser.RBRACK = 59;
pascalParser.RBRACK2 = 60;
pascalParser.POINTER = 61;
pascalParser.AT = 62;
pascalParser.DOT = 63;
pascalParser.DOTDOT = 64;
pascalParser.LCURLY = 65;
pascalParser.RCURLY = 66;
pascalParser.UNIT = 67;
pascalParser.INTERFACE = 68;
pascalParser.USES = 69;
pascalParser.STRING = 70;
pascalParser.IMPLEMENTATION = 71;
pascalParser.TRUE = 72;
pascalParser.FALSE = 73;
pascalParser.WS = 74;
pascalParser.COMMENT_1 = 75;
pascalParser.COMMENT_2 = 76;
pascalParser.IDENT = 77;
pascalParser.STRING_LITERAL = 78;
pascalParser.NUM_INT = 79;
pascalParser.NUM_REAL = 80;

pascalParser.RULE_program = 0;
pascalParser.RULE_programHeading = 1;
pascalParser.RULE_identifier = 2;
pascalParser.RULE_block = 3;
pascalParser.RULE_usesUnitsPart = 4;
pascalParser.RULE_labelDeclarationPart = 5;
pascalParser.RULE_label = 6;
pascalParser.RULE_constantDefinitionPart = 7;
pascalParser.RULE_constantDefinition = 8;
pascalParser.RULE_constantChr = 9;
pascalParser.RULE_constant = 10;
pascalParser.RULE_unsignedNumber = 11;
pascalParser.RULE_unsignedInteger = 12;
pascalParser.RULE_unsignedReal = 13;
pascalParser.RULE_sign = 14;
pascalParser.RULE_bool_ = 15;
pascalParser.RULE_string = 16;
pascalParser.RULE_typeDefinitionPart = 17;
pascalParser.RULE_typeDefinition = 18;
pascalParser.RULE_functionType = 19;
pascalParser.RULE_procedureType = 20;
pascalParser.RULE_type_ = 21;
pascalParser.RULE_simpleType = 22;
pascalParser.RULE_scalarType = 23;
pascalParser.RULE_subrangeType = 24;
pascalParser.RULE_typeIdentifier = 25;
pascalParser.RULE_structuredType = 26;
pascalParser.RULE_unpackedStructuredType = 27;
pascalParser.RULE_stringtype = 28;
pascalParser.RULE_arrayType = 29;
pascalParser.RULE_typeList = 30;
pascalParser.RULE_indexType = 31;
pascalParser.RULE_componentType = 32;
pascalParser.RULE_recordType = 33;
pascalParser.RULE_fieldList = 34;
pascalParser.RULE_fixedPart = 35;
pascalParser.RULE_recordSection = 36;
pascalParser.RULE_variantPart = 37;
pascalParser.RULE_tag = 38;
pascalParser.RULE_variant = 39;
pascalParser.RULE_setType = 40;
pascalParser.RULE_baseType = 41;
pascalParser.RULE_fileType = 42;
pascalParser.RULE_pointerType = 43;
pascalParser.RULE_variableDeclarationPart = 44;
pascalParser.RULE_variableDeclaration = 45;
pascalParser.RULE_procedureAndFunctionDeclarationPart = 46;
pascalParser.RULE_procedureOrFunctionDeclaration = 47;
pascalParser.RULE_procedureDeclaration = 48;
pascalParser.RULE_formalParameterList = 49;
pascalParser.RULE_formalParameterSection = 50;
pascalParser.RULE_parameterGroup = 51;
pascalParser.RULE_identifierList = 52;
pascalParser.RULE_constList = 53;
pascalParser.RULE_functionDeclaration = 54;
pascalParser.RULE_resultType = 55;
pascalParser.RULE_statement = 56;
pascalParser.RULE_unlabelledStatement = 57;
pascalParser.RULE_simpleStatement = 58;
pascalParser.RULE_assignmentStatement = 59;
pascalParser.RULE_variable = 60;
pascalParser.RULE_expression = 61;
pascalParser.RULE_relationaloperator = 62;
pascalParser.RULE_simpleExpression = 63;
pascalParser.RULE_additiveoperator = 64;
pascalParser.RULE_term = 65;
pascalParser.RULE_multiplicativeoperator = 66;
pascalParser.RULE_signedFactor = 67;
pascalParser.RULE_factor = 68;
pascalParser.RULE_unsignedConstant = 69;
pascalParser.RULE_functionDesignator = 70;
pascalParser.RULE_parameterList = 71;
pascalParser.RULE_set_ = 72;
pascalParser.RULE_elementList = 73;
pascalParser.RULE_element = 74;
pascalParser.RULE_procedureStatement = 75;
pascalParser.RULE_actualParameter = 76;
pascalParser.RULE_parameterwidth = 77;
pascalParser.RULE_gotoStatement = 78;
pascalParser.RULE_emptyStatement_ = 79;
pascalParser.RULE_empty_ = 80;
pascalParser.RULE_structuredStatement = 81;
pascalParser.RULE_compoundStatement = 82;
pascalParser.RULE_statements = 83;
pascalParser.RULE_conditionalStatement = 84;
pascalParser.RULE_ifStatement = 85;
pascalParser.RULE_caseStatement = 86;
pascalParser.RULE_caseListElement = 87;
pascalParser.RULE_repetetiveStatement = 88;
pascalParser.RULE_whileStatement = 89;
pascalParser.RULE_repeatStatement = 90;
pascalParser.RULE_forStatement = 91;
pascalParser.RULE_forList = 92;
pascalParser.RULE_initialValue = 93;
pascalParser.RULE_finalValue = 94;
pascalParser.RULE_withStatement = 95;
pascalParser.RULE_recordVariableList = 96;

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
        this.ruleIndex = pascalParser.RULE_program;
    }

	programHeading() {
	    return this.getTypedRuleContext(ProgramHeadingContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	DOT() {
	    return this.getToken(pascalParser.DOT, 0);
	};

	INTERFACE() {
	    return this.getToken(pascalParser.INTERFACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitProgram(this);
		}
	}


}



class ProgramHeadingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_programHeading;
    }

	PROGRAM() {
	    return this.getToken(pascalParser.PROGRAM, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	SEMI() {
	    return this.getToken(pascalParser.SEMI, 0);
	};

	LPAREN() {
	    return this.getToken(pascalParser.LPAREN, 0);
	};

	identifierList() {
	    return this.getTypedRuleContext(IdentifierListContext,0);
	};

	RPAREN() {
	    return this.getToken(pascalParser.RPAREN, 0);
	};

	UNIT() {
	    return this.getToken(pascalParser.UNIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterProgramHeading(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitProgramHeading(this);
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
        this.ruleIndex = pascalParser.RULE_identifier;
    }

	IDENT() {
	    return this.getToken(pascalParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitIdentifier(this);
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
        this.ruleIndex = pascalParser.RULE_block;
    }

	compoundStatement() {
	    return this.getTypedRuleContext(CompoundStatementContext,0);
	};

	labelDeclarationPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LabelDeclarationPartContext);
	    } else {
	        return this.getTypedRuleContext(LabelDeclarationPartContext,i);
	    }
	};

	constantDefinitionPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstantDefinitionPartContext);
	    } else {
	        return this.getTypedRuleContext(ConstantDefinitionPartContext,i);
	    }
	};

	typeDefinitionPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeDefinitionPartContext);
	    } else {
	        return this.getTypedRuleContext(TypeDefinitionPartContext,i);
	    }
	};

	variableDeclarationPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableDeclarationPartContext);
	    } else {
	        return this.getTypedRuleContext(VariableDeclarationPartContext,i);
	    }
	};

	procedureAndFunctionDeclarationPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProcedureAndFunctionDeclarationPartContext);
	    } else {
	        return this.getTypedRuleContext(ProcedureAndFunctionDeclarationPartContext,i);
	    }
	};

	usesUnitsPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UsesUnitsPartContext);
	    } else {
	        return this.getTypedRuleContext(UsesUnitsPartContext,i);
	    }
	};

	IMPLEMENTATION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.IMPLEMENTATION);
	    } else {
	        return this.getToken(pascalParser.IMPLEMENTATION, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitBlock(this);
		}
	}


}



class UsesUnitsPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_usesUnitsPart;
    }

	USES() {
	    return this.getToken(pascalParser.USES, 0);
	};

	identifierList() {
	    return this.getTypedRuleContext(IdentifierListContext,0);
	};

	SEMI() {
	    return this.getToken(pascalParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterUsesUnitsPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitUsesUnitsPart(this);
		}
	}


}



class LabelDeclarationPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_labelDeclarationPart;
    }

	LABEL() {
	    return this.getToken(pascalParser.LABEL, 0);
	};

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

	SEMI() {
	    return this.getToken(pascalParser.SEMI, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.COMMA);
	    } else {
	        return this.getToken(pascalParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterLabelDeclarationPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitLabelDeclarationPart(this);
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
        this.ruleIndex = pascalParser.RULE_label;
    }

	unsignedInteger() {
	    return this.getTypedRuleContext(UnsignedIntegerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitLabel(this);
		}
	}


}



class ConstantDefinitionPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_constantDefinitionPart;
    }

	CONST() {
	    return this.getToken(pascalParser.CONST, 0);
	};

	constantDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstantDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(ConstantDefinitionContext,i);
	    }
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.SEMI);
	    } else {
	        return this.getToken(pascalParser.SEMI, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterConstantDefinitionPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitConstantDefinitionPart(this);
		}
	}


}



class ConstantDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_constantDefinition;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	EQUAL() {
	    return this.getToken(pascalParser.EQUAL, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterConstantDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitConstantDefinition(this);
		}
	}


}



class ConstantChrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_constantChr;
    }

	CHR() {
	    return this.getToken(pascalParser.CHR, 0);
	};

	LPAREN() {
	    return this.getToken(pascalParser.LPAREN, 0);
	};

	unsignedInteger() {
	    return this.getTypedRuleContext(UnsignedIntegerContext,0);
	};

	RPAREN() {
	    return this.getToken(pascalParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterConstantChr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitConstantChr(this);
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
        this.ruleIndex = pascalParser.RULE_constant;
    }

	unsignedNumber() {
	    return this.getTypedRuleContext(UnsignedNumberContext,0);
	};

	sign() {
	    return this.getTypedRuleContext(SignContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	constantChr() {
	    return this.getTypedRuleContext(ConstantChrContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitConstant(this);
		}
	}


}



class UnsignedNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_unsignedNumber;
    }

	unsignedInteger() {
	    return this.getTypedRuleContext(UnsignedIntegerContext,0);
	};

	unsignedReal() {
	    return this.getTypedRuleContext(UnsignedRealContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterUnsignedNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitUnsignedNumber(this);
		}
	}


}



class UnsignedIntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_unsignedInteger;
    }

	NUM_INT() {
	    return this.getToken(pascalParser.NUM_INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterUnsignedInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitUnsignedInteger(this);
		}
	}


}



class UnsignedRealContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_unsignedReal;
    }

	NUM_REAL() {
	    return this.getToken(pascalParser.NUM_REAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterUnsignedReal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitUnsignedReal(this);
		}
	}


}



class SignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_sign;
    }

	PLUS() {
	    return this.getToken(pascalParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(pascalParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitSign(this);
		}
	}


}



class Bool_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_bool_;
    }

	TRUE() {
	    return this.getToken(pascalParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(pascalParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterBool_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitBool_(this);
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
        this.ruleIndex = pascalParser.RULE_string;
    }

	STRING_LITERAL() {
	    return this.getToken(pascalParser.STRING_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitString(this);
		}
	}


}



class TypeDefinitionPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_typeDefinitionPart;
    }

	TYPE() {
	    return this.getToken(pascalParser.TYPE, 0);
	};

	typeDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(TypeDefinitionContext,i);
	    }
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.SEMI);
	    } else {
	        return this.getToken(pascalParser.SEMI, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterTypeDefinitionPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitTypeDefinitionPart(this);
		}
	}


}



class TypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_typeDefinition;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	EQUAL() {
	    return this.getToken(pascalParser.EQUAL, 0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	functionType() {
	    return this.getTypedRuleContext(FunctionTypeContext,0);
	};

	procedureType() {
	    return this.getTypedRuleContext(ProcedureTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitTypeDefinition(this);
		}
	}


}



class FunctionTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_functionType;
    }

	FUNCTION() {
	    return this.getToken(pascalParser.FUNCTION, 0);
	};

	COLON() {
	    return this.getToken(pascalParser.COLON, 0);
	};

	resultType() {
	    return this.getTypedRuleContext(ResultTypeContext,0);
	};

	formalParameterList() {
	    return this.getTypedRuleContext(FormalParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterFunctionType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitFunctionType(this);
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
        this.ruleIndex = pascalParser.RULE_procedureType;
    }

	PROCEDURE() {
	    return this.getToken(pascalParser.PROCEDURE, 0);
	};

	formalParameterList() {
	    return this.getTypedRuleContext(FormalParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterProcedureType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitProcedureType(this);
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
        this.ruleIndex = pascalParser.RULE_type_;
    }

	simpleType() {
	    return this.getTypedRuleContext(SimpleTypeContext,0);
	};

	structuredType() {
	    return this.getTypedRuleContext(StructuredTypeContext,0);
	};

	pointerType() {
	    return this.getTypedRuleContext(PointerTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitType_(this);
		}
	}


}



class SimpleTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_simpleType;
    }

	scalarType() {
	    return this.getTypedRuleContext(ScalarTypeContext,0);
	};

	subrangeType() {
	    return this.getTypedRuleContext(SubrangeTypeContext,0);
	};

	typeIdentifier() {
	    return this.getTypedRuleContext(TypeIdentifierContext,0);
	};

	stringtype() {
	    return this.getTypedRuleContext(StringtypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterSimpleType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitSimpleType(this);
		}
	}


}



class ScalarTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_scalarType;
    }

	LPAREN() {
	    return this.getToken(pascalParser.LPAREN, 0);
	};

	identifierList() {
	    return this.getTypedRuleContext(IdentifierListContext,0);
	};

	RPAREN() {
	    return this.getToken(pascalParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterScalarType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitScalarType(this);
		}
	}


}



class SubrangeTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_subrangeType;
    }

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

	DOTDOT() {
	    return this.getToken(pascalParser.DOTDOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterSubrangeType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitSubrangeType(this);
		}
	}


}



class TypeIdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_typeIdentifier;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	CHAR() {
	    return this.getToken(pascalParser.CHAR, 0);
	};

	BOOLEAN() {
	    return this.getToken(pascalParser.BOOLEAN, 0);
	};

	INTEGER() {
	    return this.getToken(pascalParser.INTEGER, 0);
	};

	REAL() {
	    return this.getToken(pascalParser.REAL, 0);
	};

	STRING() {
	    return this.getToken(pascalParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterTypeIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitTypeIdentifier(this);
		}
	}


}



class StructuredTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_structuredType;
    }

	PACKED() {
	    return this.getToken(pascalParser.PACKED, 0);
	};

	unpackedStructuredType() {
	    return this.getTypedRuleContext(UnpackedStructuredTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterStructuredType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitStructuredType(this);
		}
	}


}



class UnpackedStructuredTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_unpackedStructuredType;
    }

	arrayType() {
	    return this.getTypedRuleContext(ArrayTypeContext,0);
	};

	recordType() {
	    return this.getTypedRuleContext(RecordTypeContext,0);
	};

	setType() {
	    return this.getTypedRuleContext(SetTypeContext,0);
	};

	fileType() {
	    return this.getTypedRuleContext(FileTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterUnpackedStructuredType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitUnpackedStructuredType(this);
		}
	}


}



class StringtypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_stringtype;
    }

	STRING() {
	    return this.getToken(pascalParser.STRING, 0);
	};

	LBRACK() {
	    return this.getToken(pascalParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(pascalParser.RBRACK, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	unsignedNumber() {
	    return this.getTypedRuleContext(UnsignedNumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterStringtype(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitStringtype(this);
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
        this.ruleIndex = pascalParser.RULE_arrayType;
    }

	ARRAY() {
	    return this.getToken(pascalParser.ARRAY, 0);
	};

	LBRACK() {
	    return this.getToken(pascalParser.LBRACK, 0);
	};

	typeList() {
	    return this.getTypedRuleContext(TypeListContext,0);
	};

	RBRACK() {
	    return this.getToken(pascalParser.RBRACK, 0);
	};

	OF() {
	    return this.getToken(pascalParser.OF, 0);
	};

	componentType() {
	    return this.getTypedRuleContext(ComponentTypeContext,0);
	};

	LBRACK2() {
	    return this.getToken(pascalParser.LBRACK2, 0);
	};

	RBRACK2() {
	    return this.getToken(pascalParser.RBRACK2, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterArrayType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitArrayType(this);
		}
	}


}



class TypeListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_typeList;
    }

	indexType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IndexTypeContext);
	    } else {
	        return this.getTypedRuleContext(IndexTypeContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.COMMA);
	    } else {
	        return this.getToken(pascalParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterTypeList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitTypeList(this);
		}
	}


}



class IndexTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_indexType;
    }

	simpleType() {
	    return this.getTypedRuleContext(SimpleTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterIndexType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitIndexType(this);
		}
	}


}



class ComponentTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_componentType;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterComponentType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitComponentType(this);
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
        this.ruleIndex = pascalParser.RULE_recordType;
    }

	RECORD() {
	    return this.getToken(pascalParser.RECORD, 0);
	};

	END() {
	    return this.getToken(pascalParser.END, 0);
	};

	fieldList() {
	    return this.getTypedRuleContext(FieldListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterRecordType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitRecordType(this);
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
        this.ruleIndex = pascalParser.RULE_fieldList;
    }

	fixedPart() {
	    return this.getTypedRuleContext(FixedPartContext,0);
	};

	SEMI() {
	    return this.getToken(pascalParser.SEMI, 0);
	};

	variantPart() {
	    return this.getTypedRuleContext(VariantPartContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterFieldList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitFieldList(this);
		}
	}


}



class FixedPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_fixedPart;
    }

	recordSection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RecordSectionContext);
	    } else {
	        return this.getTypedRuleContext(RecordSectionContext,i);
	    }
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.SEMI);
	    } else {
	        return this.getToken(pascalParser.SEMI, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterFixedPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitFixedPart(this);
		}
	}


}



class RecordSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_recordSection;
    }

	identifierList() {
	    return this.getTypedRuleContext(IdentifierListContext,0);
	};

	COLON() {
	    return this.getToken(pascalParser.COLON, 0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterRecordSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitRecordSection(this);
		}
	}


}



class VariantPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_variantPart;
    }

	CASE() {
	    return this.getToken(pascalParser.CASE, 0);
	};

	tag() {
	    return this.getTypedRuleContext(TagContext,0);
	};

	OF() {
	    return this.getToken(pascalParser.OF, 0);
	};

	variant = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariantContext);
	    } else {
	        return this.getTypedRuleContext(VariantContext,i);
	    }
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.SEMI);
	    } else {
	        return this.getToken(pascalParser.SEMI, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterVariantPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitVariantPart(this);
		}
	}


}



class TagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_tag;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	COLON() {
	    return this.getToken(pascalParser.COLON, 0);
	};

	typeIdentifier() {
	    return this.getTypedRuleContext(TypeIdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitTag(this);
		}
	}


}



class VariantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_variant;
    }

	constList() {
	    return this.getTypedRuleContext(ConstListContext,0);
	};

	COLON() {
	    return this.getToken(pascalParser.COLON, 0);
	};

	LPAREN() {
	    return this.getToken(pascalParser.LPAREN, 0);
	};

	fieldList() {
	    return this.getTypedRuleContext(FieldListContext,0);
	};

	RPAREN() {
	    return this.getToken(pascalParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterVariant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitVariant(this);
		}
	}


}



class SetTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_setType;
    }

	SET() {
	    return this.getToken(pascalParser.SET, 0);
	};

	OF() {
	    return this.getToken(pascalParser.OF, 0);
	};

	baseType() {
	    return this.getTypedRuleContext(BaseTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterSetType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitSetType(this);
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
        this.ruleIndex = pascalParser.RULE_baseType;
    }

	simpleType() {
	    return this.getTypedRuleContext(SimpleTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterBaseType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitBaseType(this);
		}
	}


}



class FileTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_fileType;
    }

	FILE() {
	    return this.getToken(pascalParser.FILE, 0);
	};

	OF() {
	    return this.getToken(pascalParser.OF, 0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterFileType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitFileType(this);
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
        this.ruleIndex = pascalParser.RULE_pointerType;
    }

	POINTER() {
	    return this.getToken(pascalParser.POINTER, 0);
	};

	typeIdentifier() {
	    return this.getTypedRuleContext(TypeIdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterPointerType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitPointerType(this);
		}
	}


}



class VariableDeclarationPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_variableDeclarationPart;
    }

	VAR() {
	    return this.getToken(pascalParser.VAR, 0);
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

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.SEMI);
	    } else {
	        return this.getToken(pascalParser.SEMI, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterVariableDeclarationPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitVariableDeclarationPart(this);
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
        this.ruleIndex = pascalParser.RULE_variableDeclaration;
    }

	identifierList() {
	    return this.getTypedRuleContext(IdentifierListContext,0);
	};

	COLON() {
	    return this.getToken(pascalParser.COLON, 0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}


}



class ProcedureAndFunctionDeclarationPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_procedureAndFunctionDeclarationPart;
    }

	procedureOrFunctionDeclaration() {
	    return this.getTypedRuleContext(ProcedureOrFunctionDeclarationContext,0);
	};

	SEMI() {
	    return this.getToken(pascalParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterProcedureAndFunctionDeclarationPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitProcedureAndFunctionDeclarationPart(this);
		}
	}


}



class ProcedureOrFunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_procedureOrFunctionDeclaration;
    }

	procedureDeclaration() {
	    return this.getTypedRuleContext(ProcedureDeclarationContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterProcedureOrFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitProcedureOrFunctionDeclaration(this);
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
        this.ruleIndex = pascalParser.RULE_procedureDeclaration;
    }

	PROCEDURE() {
	    return this.getToken(pascalParser.PROCEDURE, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	SEMI() {
	    return this.getToken(pascalParser.SEMI, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	formalParameterList() {
	    return this.getTypedRuleContext(FormalParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterProcedureDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitProcedureDeclaration(this);
		}
	}


}



class FormalParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_formalParameterList;
    }

	LPAREN() {
	    return this.getToken(pascalParser.LPAREN, 0);
	};

	formalParameterSection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormalParameterSectionContext);
	    } else {
	        return this.getTypedRuleContext(FormalParameterSectionContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(pascalParser.RPAREN, 0);
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.SEMI);
	    } else {
	        return this.getToken(pascalParser.SEMI, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterFormalParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitFormalParameterList(this);
		}
	}


}



class FormalParameterSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_formalParameterSection;
    }

	parameterGroup() {
	    return this.getTypedRuleContext(ParameterGroupContext,0);
	};

	VAR() {
	    return this.getToken(pascalParser.VAR, 0);
	};

	FUNCTION() {
	    return this.getToken(pascalParser.FUNCTION, 0);
	};

	PROCEDURE() {
	    return this.getToken(pascalParser.PROCEDURE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterFormalParameterSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitFormalParameterSection(this);
		}
	}


}



class ParameterGroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_parameterGroup;
    }

	identifierList() {
	    return this.getTypedRuleContext(IdentifierListContext,0);
	};

	COLON() {
	    return this.getToken(pascalParser.COLON, 0);
	};

	typeIdentifier() {
	    return this.getTypedRuleContext(TypeIdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterParameterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitParameterGroup(this);
		}
	}


}



class IdentifierListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_identifierList;
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.COMMA);
	    } else {
	        return this.getToken(pascalParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterIdentifierList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitIdentifierList(this);
		}
	}


}



class ConstListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_constList;
    }

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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.COMMA);
	    } else {
	        return this.getToken(pascalParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterConstList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitConstList(this);
		}
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_functionDeclaration;
    }

	FUNCTION() {
	    return this.getToken(pascalParser.FUNCTION, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	COLON() {
	    return this.getToken(pascalParser.COLON, 0);
	};

	resultType() {
	    return this.getTypedRuleContext(ResultTypeContext,0);
	};

	SEMI() {
	    return this.getToken(pascalParser.SEMI, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	formalParameterList() {
	    return this.getTypedRuleContext(FormalParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}


}



class ResultTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_resultType;
    }

	typeIdentifier() {
	    return this.getTypedRuleContext(TypeIdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterResultType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitResultType(this);
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
        this.ruleIndex = pascalParser.RULE_statement;
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	COLON() {
	    return this.getToken(pascalParser.COLON, 0);
	};

	unlabelledStatement() {
	    return this.getTypedRuleContext(UnlabelledStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitStatement(this);
		}
	}


}



class UnlabelledStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_unlabelledStatement;
    }

	simpleStatement() {
	    return this.getTypedRuleContext(SimpleStatementContext,0);
	};

	structuredStatement() {
	    return this.getTypedRuleContext(StructuredStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterUnlabelledStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitUnlabelledStatement(this);
		}
	}


}



class SimpleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_simpleStatement;
    }

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	procedureStatement() {
	    return this.getTypedRuleContext(ProcedureStatementContext,0);
	};

	gotoStatement() {
	    return this.getTypedRuleContext(GotoStatementContext,0);
	};

	emptyStatement_() {
	    return this.getTypedRuleContext(EmptyStatement_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterSimpleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitSimpleStatement(this);
		}
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_assignmentStatement;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	ASSIGN() {
	    return this.getToken(pascalParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitAssignmentStatement(this);
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
        this.ruleIndex = pascalParser.RULE_variable;
    }

	AT() {
	    return this.getToken(pascalParser.AT, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	LBRACK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.LBRACK);
	    } else {
	        return this.getToken(pascalParser.LBRACK, i);
	    }
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

	RBRACK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.RBRACK);
	    } else {
	        return this.getToken(pascalParser.RBRACK, i);
	    }
	};


	LBRACK2 = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.LBRACK2);
	    } else {
	        return this.getToken(pascalParser.LBRACK2, i);
	    }
	};


	RBRACK2 = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.RBRACK2);
	    } else {
	        return this.getToken(pascalParser.RBRACK2, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.DOT);
	    } else {
	        return this.getToken(pascalParser.DOT, i);
	    }
	};


	POINTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.POINTER);
	    } else {
	        return this.getToken(pascalParser.POINTER, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.COMMA);
	    } else {
	        return this.getToken(pascalParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitVariable(this);
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
        this.ruleIndex = pascalParser.RULE_expression;
    }

	simpleExpression() {
	    return this.getTypedRuleContext(SimpleExpressionContext,0);
	};

	relationaloperator() {
	    return this.getTypedRuleContext(RelationaloperatorContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitExpression(this);
		}
	}


}



class RelationaloperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_relationaloperator;
    }

	EQUAL() {
	    return this.getToken(pascalParser.EQUAL, 0);
	};

	NOT_EQUAL() {
	    return this.getToken(pascalParser.NOT_EQUAL, 0);
	};

	LT() {
	    return this.getToken(pascalParser.LT, 0);
	};

	LE() {
	    return this.getToken(pascalParser.LE, 0);
	};

	GE() {
	    return this.getToken(pascalParser.GE, 0);
	};

	GT() {
	    return this.getToken(pascalParser.GT, 0);
	};

	IN() {
	    return this.getToken(pascalParser.IN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterRelationaloperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitRelationaloperator(this);
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
        this.ruleIndex = pascalParser.RULE_simpleExpression;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	additiveoperator() {
	    return this.getTypedRuleContext(AdditiveoperatorContext,0);
	};

	simpleExpression() {
	    return this.getTypedRuleContext(SimpleExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterSimpleExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitSimpleExpression(this);
		}
	}


}



class AdditiveoperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_additiveoperator;
    }

	PLUS() {
	    return this.getToken(pascalParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(pascalParser.MINUS, 0);
	};

	OR() {
	    return this.getToken(pascalParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterAdditiveoperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitAdditiveoperator(this);
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
        this.ruleIndex = pascalParser.RULE_term;
    }

	signedFactor() {
	    return this.getTypedRuleContext(SignedFactorContext,0);
	};

	multiplicativeoperator() {
	    return this.getTypedRuleContext(MultiplicativeoperatorContext,0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitTerm(this);
		}
	}


}



class MultiplicativeoperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_multiplicativeoperator;
    }

	STAR() {
	    return this.getToken(pascalParser.STAR, 0);
	};

	SLASH() {
	    return this.getToken(pascalParser.SLASH, 0);
	};

	DIV() {
	    return this.getToken(pascalParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(pascalParser.MOD, 0);
	};

	AND() {
	    return this.getToken(pascalParser.AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterMultiplicativeoperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitMultiplicativeoperator(this);
		}
	}


}



class SignedFactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_signedFactor;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	PLUS() {
	    return this.getToken(pascalParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(pascalParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterSignedFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitSignedFactor(this);
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
        this.ruleIndex = pascalParser.RULE_factor;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	LPAREN() {
	    return this.getToken(pascalParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(pascalParser.RPAREN, 0);
	};

	functionDesignator() {
	    return this.getTypedRuleContext(FunctionDesignatorContext,0);
	};

	unsignedConstant() {
	    return this.getTypedRuleContext(UnsignedConstantContext,0);
	};

	set_() {
	    return this.getTypedRuleContext(Set_Context,0);
	};

	NOT() {
	    return this.getToken(pascalParser.NOT, 0);
	};

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	bool_() {
	    return this.getTypedRuleContext(Bool_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitFactor(this);
		}
	}


}



class UnsignedConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_unsignedConstant;
    }

	unsignedNumber() {
	    return this.getTypedRuleContext(UnsignedNumberContext,0);
	};

	constantChr() {
	    return this.getTypedRuleContext(ConstantChrContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	NIL() {
	    return this.getToken(pascalParser.NIL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterUnsignedConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitUnsignedConstant(this);
		}
	}


}



class FunctionDesignatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_functionDesignator;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	LPAREN() {
	    return this.getToken(pascalParser.LPAREN, 0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	RPAREN() {
	    return this.getToken(pascalParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterFunctionDesignator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitFunctionDesignator(this);
		}
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_parameterList;
    }

	actualParameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ActualParameterContext);
	    } else {
	        return this.getTypedRuleContext(ActualParameterContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.COMMA);
	    } else {
	        return this.getToken(pascalParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitParameterList(this);
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
        this.ruleIndex = pascalParser.RULE_set_;
    }

	LBRACK() {
	    return this.getToken(pascalParser.LBRACK, 0);
	};

	elementList() {
	    return this.getTypedRuleContext(ElementListContext,0);
	};

	RBRACK() {
	    return this.getToken(pascalParser.RBRACK, 0);
	};

	LBRACK2() {
	    return this.getToken(pascalParser.LBRACK2, 0);
	};

	RBRACK2() {
	    return this.getToken(pascalParser.RBRACK2, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterSet_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitSet_(this);
		}
	}


}



class ElementListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_elementList;
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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.COMMA);
	    } else {
	        return this.getToken(pascalParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterElementList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitElementList(this);
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
        this.ruleIndex = pascalParser.RULE_element;
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

	DOTDOT() {
	    return this.getToken(pascalParser.DOTDOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitElement(this);
		}
	}


}



class ProcedureStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_procedureStatement;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	LPAREN() {
	    return this.getToken(pascalParser.LPAREN, 0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	RPAREN() {
	    return this.getToken(pascalParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterProcedureStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitProcedureStatement(this);
		}
	}


}



class ActualParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_actualParameter;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	parameterwidth = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterwidthContext);
	    } else {
	        return this.getTypedRuleContext(ParameterwidthContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterActualParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitActualParameter(this);
		}
	}


}



class ParameterwidthContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_parameterwidth;
    }

	COLON() {
	    return this.getToken(pascalParser.COLON, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterParameterwidth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitParameterwidth(this);
		}
	}


}



class GotoStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_gotoStatement;
    }

	GOTO() {
	    return this.getToken(pascalParser.GOTO, 0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterGotoStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitGotoStatement(this);
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
        this.ruleIndex = pascalParser.RULE_emptyStatement_;
    }


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterEmptyStatement_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitEmptyStatement_(this);
		}
	}


}



class Empty_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_empty_;
    }


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterEmpty_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitEmpty_(this);
		}
	}


}



class StructuredStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_structuredStatement;
    }

	compoundStatement() {
	    return this.getTypedRuleContext(CompoundStatementContext,0);
	};

	conditionalStatement() {
	    return this.getTypedRuleContext(ConditionalStatementContext,0);
	};

	repetetiveStatement() {
	    return this.getTypedRuleContext(RepetetiveStatementContext,0);
	};

	withStatement() {
	    return this.getTypedRuleContext(WithStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterStructuredStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitStructuredStatement(this);
		}
	}


}



class CompoundStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_compoundStatement;
    }

	BEGIN() {
	    return this.getToken(pascalParser.BEGIN, 0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	END() {
	    return this.getToken(pascalParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterCompoundStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitCompoundStatement(this);
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
        this.ruleIndex = pascalParser.RULE_statements;
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

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.SEMI);
	    } else {
	        return this.getToken(pascalParser.SEMI, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterStatements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitStatements(this);
		}
	}


}



class ConditionalStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_conditionalStatement;
    }

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	caseStatement() {
	    return this.getTypedRuleContext(CaseStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterConditionalStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitConditionalStatement(this);
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
        this.ruleIndex = pascalParser.RULE_ifStatement;
    }

	IF() {
	    return this.getToken(pascalParser.IF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	THEN() {
	    return this.getToken(pascalParser.THEN, 0);
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

	ELSE() {
	    return this.getToken(pascalParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
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
        this.ruleIndex = pascalParser.RULE_caseStatement;
    }

	CASE() {
	    return this.getToken(pascalParser.CASE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	OF() {
	    return this.getToken(pascalParser.OF, 0);
	};

	caseListElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaseListElementContext);
	    } else {
	        return this.getTypedRuleContext(CaseListElementContext,i);
	    }
	};

	END() {
	    return this.getToken(pascalParser.END, 0);
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.SEMI);
	    } else {
	        return this.getToken(pascalParser.SEMI, i);
	    }
	};


	ELSE() {
	    return this.getToken(pascalParser.ELSE, 0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterCaseStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitCaseStatement(this);
		}
	}


}



class CaseListElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_caseListElement;
    }

	constList() {
	    return this.getTypedRuleContext(ConstListContext,0);
	};

	COLON() {
	    return this.getToken(pascalParser.COLON, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterCaseListElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitCaseListElement(this);
		}
	}


}



class RepetetiveStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_repetetiveStatement;
    }

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
	    if(listener instanceof pascalListener ) {
	        listener.enterRepetetiveStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitRepetetiveStatement(this);
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
        this.ruleIndex = pascalParser.RULE_whileStatement;
    }

	WHILE() {
	    return this.getToken(pascalParser.WHILE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	DO() {
	    return this.getToken(pascalParser.DO, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
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
        this.ruleIndex = pascalParser.RULE_repeatStatement;
    }

	REPEAT() {
	    return this.getToken(pascalParser.REPEAT, 0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	UNTIL() {
	    return this.getToken(pascalParser.UNTIL, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterRepeatStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
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
        this.ruleIndex = pascalParser.RULE_forStatement;
    }

	FOR() {
	    return this.getToken(pascalParser.FOR, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ASSIGN() {
	    return this.getToken(pascalParser.ASSIGN, 0);
	};

	forList() {
	    return this.getTypedRuleContext(ForListContext,0);
	};

	DO() {
	    return this.getToken(pascalParser.DO, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitForStatement(this);
		}
	}


}



class ForListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_forList;
    }

	initialValue() {
	    return this.getTypedRuleContext(InitialValueContext,0);
	};

	finalValue() {
	    return this.getTypedRuleContext(FinalValueContext,0);
	};

	TO() {
	    return this.getToken(pascalParser.TO, 0);
	};

	DOWNTO() {
	    return this.getToken(pascalParser.DOWNTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterForList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitForList(this);
		}
	}


}



class InitialValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_initialValue;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterInitialValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitInitialValue(this);
		}
	}


}



class FinalValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_finalValue;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterFinalValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitFinalValue(this);
		}
	}


}



class WithStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_withStatement;
    }

	WITH() {
	    return this.getToken(pascalParser.WITH, 0);
	};

	recordVariableList() {
	    return this.getTypedRuleContext(RecordVariableListContext,0);
	};

	DO() {
	    return this.getToken(pascalParser.DO, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterWithStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitWithStatement(this);
		}
	}


}



class RecordVariableListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pascalParser.RULE_recordVariableList;
    }

	variable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableContext);
	    } else {
	        return this.getTypedRuleContext(VariableContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pascalParser.COMMA);
	    } else {
	        return this.getToken(pascalParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.enterRecordVariableList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pascalListener ) {
	        listener.exitRecordVariableList(this);
		}
	}


}




pascalParser.ProgramContext = ProgramContext; 
pascalParser.ProgramHeadingContext = ProgramHeadingContext; 
pascalParser.IdentifierContext = IdentifierContext; 
pascalParser.BlockContext = BlockContext; 
pascalParser.UsesUnitsPartContext = UsesUnitsPartContext; 
pascalParser.LabelDeclarationPartContext = LabelDeclarationPartContext; 
pascalParser.LabelContext = LabelContext; 
pascalParser.ConstantDefinitionPartContext = ConstantDefinitionPartContext; 
pascalParser.ConstantDefinitionContext = ConstantDefinitionContext; 
pascalParser.ConstantChrContext = ConstantChrContext; 
pascalParser.ConstantContext = ConstantContext; 
pascalParser.UnsignedNumberContext = UnsignedNumberContext; 
pascalParser.UnsignedIntegerContext = UnsignedIntegerContext; 
pascalParser.UnsignedRealContext = UnsignedRealContext; 
pascalParser.SignContext = SignContext; 
pascalParser.Bool_Context = Bool_Context; 
pascalParser.StringContext = StringContext; 
pascalParser.TypeDefinitionPartContext = TypeDefinitionPartContext; 
pascalParser.TypeDefinitionContext = TypeDefinitionContext; 
pascalParser.FunctionTypeContext = FunctionTypeContext; 
pascalParser.ProcedureTypeContext = ProcedureTypeContext; 
pascalParser.Type_Context = Type_Context; 
pascalParser.SimpleTypeContext = SimpleTypeContext; 
pascalParser.ScalarTypeContext = ScalarTypeContext; 
pascalParser.SubrangeTypeContext = SubrangeTypeContext; 
pascalParser.TypeIdentifierContext = TypeIdentifierContext; 
pascalParser.StructuredTypeContext = StructuredTypeContext; 
pascalParser.UnpackedStructuredTypeContext = UnpackedStructuredTypeContext; 
pascalParser.StringtypeContext = StringtypeContext; 
pascalParser.ArrayTypeContext = ArrayTypeContext; 
pascalParser.TypeListContext = TypeListContext; 
pascalParser.IndexTypeContext = IndexTypeContext; 
pascalParser.ComponentTypeContext = ComponentTypeContext; 
pascalParser.RecordTypeContext = RecordTypeContext; 
pascalParser.FieldListContext = FieldListContext; 
pascalParser.FixedPartContext = FixedPartContext; 
pascalParser.RecordSectionContext = RecordSectionContext; 
pascalParser.VariantPartContext = VariantPartContext; 
pascalParser.TagContext = TagContext; 
pascalParser.VariantContext = VariantContext; 
pascalParser.SetTypeContext = SetTypeContext; 
pascalParser.BaseTypeContext = BaseTypeContext; 
pascalParser.FileTypeContext = FileTypeContext; 
pascalParser.PointerTypeContext = PointerTypeContext; 
pascalParser.VariableDeclarationPartContext = VariableDeclarationPartContext; 
pascalParser.VariableDeclarationContext = VariableDeclarationContext; 
pascalParser.ProcedureAndFunctionDeclarationPartContext = ProcedureAndFunctionDeclarationPartContext; 
pascalParser.ProcedureOrFunctionDeclarationContext = ProcedureOrFunctionDeclarationContext; 
pascalParser.ProcedureDeclarationContext = ProcedureDeclarationContext; 
pascalParser.FormalParameterListContext = FormalParameterListContext; 
pascalParser.FormalParameterSectionContext = FormalParameterSectionContext; 
pascalParser.ParameterGroupContext = ParameterGroupContext; 
pascalParser.IdentifierListContext = IdentifierListContext; 
pascalParser.ConstListContext = ConstListContext; 
pascalParser.FunctionDeclarationContext = FunctionDeclarationContext; 
pascalParser.ResultTypeContext = ResultTypeContext; 
pascalParser.StatementContext = StatementContext; 
pascalParser.UnlabelledStatementContext = UnlabelledStatementContext; 
pascalParser.SimpleStatementContext = SimpleStatementContext; 
pascalParser.AssignmentStatementContext = AssignmentStatementContext; 
pascalParser.VariableContext = VariableContext; 
pascalParser.ExpressionContext = ExpressionContext; 
pascalParser.RelationaloperatorContext = RelationaloperatorContext; 
pascalParser.SimpleExpressionContext = SimpleExpressionContext; 
pascalParser.AdditiveoperatorContext = AdditiveoperatorContext; 
pascalParser.TermContext = TermContext; 
pascalParser.MultiplicativeoperatorContext = MultiplicativeoperatorContext; 
pascalParser.SignedFactorContext = SignedFactorContext; 
pascalParser.FactorContext = FactorContext; 
pascalParser.UnsignedConstantContext = UnsignedConstantContext; 
pascalParser.FunctionDesignatorContext = FunctionDesignatorContext; 
pascalParser.ParameterListContext = ParameterListContext; 
pascalParser.Set_Context = Set_Context; 
pascalParser.ElementListContext = ElementListContext; 
pascalParser.ElementContext = ElementContext; 
pascalParser.ProcedureStatementContext = ProcedureStatementContext; 
pascalParser.ActualParameterContext = ActualParameterContext; 
pascalParser.ParameterwidthContext = ParameterwidthContext; 
pascalParser.GotoStatementContext = GotoStatementContext; 
pascalParser.EmptyStatement_Context = EmptyStatement_Context; 
pascalParser.Empty_Context = Empty_Context; 
pascalParser.StructuredStatementContext = StructuredStatementContext; 
pascalParser.CompoundStatementContext = CompoundStatementContext; 
pascalParser.StatementsContext = StatementsContext; 
pascalParser.ConditionalStatementContext = ConditionalStatementContext; 
pascalParser.IfStatementContext = IfStatementContext; 
pascalParser.CaseStatementContext = CaseStatementContext; 
pascalParser.CaseListElementContext = CaseListElementContext; 
pascalParser.RepetetiveStatementContext = RepetetiveStatementContext; 
pascalParser.WhileStatementContext = WhileStatementContext; 
pascalParser.RepeatStatementContext = RepeatStatementContext; 
pascalParser.ForStatementContext = ForStatementContext; 
pascalParser.ForListContext = ForListContext; 
pascalParser.InitialValueContext = InitialValueContext; 
pascalParser.FinalValueContext = FinalValueContext; 
pascalParser.WithStatementContext = WithStatementContext; 
pascalParser.RecordVariableListContext = RecordVariableListContext; 
