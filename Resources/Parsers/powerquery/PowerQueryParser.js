// Generated from Resources/Parsers/powerquery/PowerQueryParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import PowerQueryParserListener from './PowerQueryParserListener.js';
const serializedATN = [4,1,71,760,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
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
92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,98,7,98,2,99,7,99,
2,100,7,100,1,0,1,0,3,0,205,8,0,1,1,1,1,1,2,3,2,210,8,2,1,2,1,2,1,2,1,2,
3,2,216,8,2,1,3,1,3,1,4,1,4,3,4,222,8,4,1,5,3,5,225,8,5,1,5,3,5,228,8,5,
1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,
247,8,8,1,9,1,9,1,9,1,9,1,9,3,9,254,8,9,1,10,1,10,1,10,1,10,1,10,1,10,5,
10,262,8,10,10,10,12,10,265,9,10,1,11,1,11,1,11,1,11,1,11,1,11,5,11,273,
8,11,10,11,12,11,276,9,11,1,12,3,12,279,8,12,1,12,1,12,1,13,1,13,1,13,1,
13,1,13,1,13,5,13,289,8,13,10,13,12,13,292,9,13,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,3,14,303,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,322,8,15,1,16,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,337,8,16,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,348,8,17,1,18,1,18,1,18,1,18,1,18,
3,18,355,8,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,364,8,19,1,20,1,20,
1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,376,8,20,1,20,1,20,1,20,1,20,
1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
20,1,20,3,20,398,8,20,1,20,5,20,401,8,20,10,20,12,20,404,9,20,1,21,1,21,
1,22,1,22,1,23,1,23,3,23,412,8,23,1,24,1,24,1,25,1,25,1,25,1,26,1,26,1,26,
1,26,1,27,1,27,1,27,1,27,1,28,1,28,1,29,1,29,1,29,1,29,1,29,3,29,434,8,29,
1,30,1,30,3,30,438,8,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,3,31,447,8,31,
1,32,1,32,1,32,1,32,1,32,3,32,454,8,32,1,33,1,33,3,33,458,8,33,1,33,1,33,
1,34,1,34,1,34,1,34,1,34,3,34,467,8,34,1,35,1,35,1,35,1,35,1,36,1,36,1,37,
1,37,1,38,1,38,3,38,479,8,38,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,
1,41,1,41,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,
44,1,44,3,44,506,8,44,1,45,1,45,3,45,510,8,45,1,46,1,46,3,46,514,8,46,1,
46,1,46,3,46,518,8,46,1,46,1,46,1,46,1,47,1,47,1,48,1,48,1,48,1,48,1,48,
3,48,530,8,48,1,49,1,49,1,49,1,49,1,49,3,49,537,8,49,1,50,1,50,3,50,541,
8,50,1,51,1,51,1,52,1,52,1,53,1,53,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,
55,3,55,557,8,55,1,56,1,56,1,56,1,57,1,57,1,57,1,58,1,58,1,59,1,59,1,59,
1,59,1,59,1,60,1,60,1,60,1,60,1,60,3,60,577,8,60,1,61,1,61,1,61,1,61,1,62,
1,62,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,65,1,65,1,66,1,66,1,
67,1,67,1,67,3,67,601,8,67,1,68,1,68,3,68,605,8,68,1,69,1,69,1,69,1,69,1,
69,1,69,3,69,613,8,69,1,70,1,70,1,71,1,71,1,71,1,71,1,71,1,71,3,71,623,8,
71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,3,71,632,8,71,1,72,1,72,1,72,1,72,
1,72,3,72,639,8,72,1,73,3,73,642,8,73,1,73,1,73,3,73,646,8,73,1,74,1,74,
1,74,1,75,1,75,1,76,1,76,1,77,1,77,1,77,1,77,1,78,1,78,1,79,1,79,3,79,663,
8,79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,80,1,80,3,80,674,8,80,1,81,1,81,
1,81,1,81,1,81,3,81,681,8,81,1,82,1,82,1,83,1,83,1,83,1,83,1,83,3,83,690,
8,83,1,84,1,84,1,84,1,85,1,85,1,85,1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,
88,1,88,1,88,1,89,1,89,1,89,1,90,1,90,1,90,3,90,714,8,90,1,91,1,91,1,92,
1,92,1,92,1,93,1,93,1,94,1,94,1,95,1,95,3,95,727,8,95,1,95,1,95,1,96,1,96,
1,96,1,96,1,96,3,96,736,8,96,1,97,1,97,1,97,1,97,1,98,1,98,3,98,744,8,98,
1,98,1,98,1,99,1,99,1,99,1,99,1,99,3,99,753,8,99,1,100,1,100,1,100,3,100,
758,8,100,1,100,0,4,20,22,26,40,101,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,
118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,
154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,
190,192,194,196,198,200,0,1,4,0,15,15,27,27,34,47,66,66,748,0,204,1,0,0,
0,2,206,1,0,0,0,4,209,1,0,0,0,6,217,1,0,0,0,8,219,1,0,0,0,10,224,1,0,0,0,
12,234,1,0,0,0,14,236,1,0,0,0,16,246,1,0,0,0,18,253,1,0,0,0,20,255,1,0,0,
0,22,266,1,0,0,0,24,278,1,0,0,0,26,282,1,0,0,0,28,302,1,0,0,0,30,321,1,0,
0,0,32,336,1,0,0,0,34,347,1,0,0,0,36,354,1,0,0,0,38,363,1,0,0,0,40,375,1,
0,0,0,42,405,1,0,0,0,44,407,1,0,0,0,46,411,1,0,0,0,48,413,1,0,0,0,50,415,
1,0,0,0,52,418,1,0,0,0,54,422,1,0,0,0,56,426,1,0,0,0,58,433,1,0,0,0,60,435,
1,0,0,0,62,446,1,0,0,0,64,453,1,0,0,0,66,455,1,0,0,0,68,466,1,0,0,0,70,468,
1,0,0,0,72,472,1,0,0,0,74,474,1,0,0,0,76,478,1,0,0,0,78,480,1,0,0,0,80,484,
1,0,0,0,82,489,1,0,0,0,84,491,1,0,0,0,86,495,1,0,0,0,88,505,1,0,0,0,90,509,
1,0,0,0,92,511,1,0,0,0,94,522,1,0,0,0,96,529,1,0,0,0,98,536,1,0,0,0,100,
538,1,0,0,0,102,542,1,0,0,0,104,544,1,0,0,0,106,546,1,0,0,0,108,548,1,0,
0,0,110,556,1,0,0,0,112,558,1,0,0,0,114,561,1,0,0,0,116,564,1,0,0,0,118,
566,1,0,0,0,120,576,1,0,0,0,122,578,1,0,0,0,124,582,1,0,0,0,126,584,1,0,
0,0,128,591,1,0,0,0,130,593,1,0,0,0,132,595,1,0,0,0,134,600,1,0,0,0,136,
604,1,0,0,0,138,612,1,0,0,0,140,614,1,0,0,0,142,631,1,0,0,0,144,638,1,0,
0,0,146,641,1,0,0,0,148,647,1,0,0,0,150,650,1,0,0,0,152,652,1,0,0,0,154,
654,1,0,0,0,156,658,1,0,0,0,158,660,1,0,0,0,160,673,1,0,0,0,162,680,1,0,
0,0,164,682,1,0,0,0,166,689,1,0,0,0,168,691,1,0,0,0,170,694,1,0,0,0,172,
697,1,0,0,0,174,700,1,0,0,0,176,704,1,0,0,0,178,707,1,0,0,0,180,710,1,0,
0,0,182,715,1,0,0,0,184,717,1,0,0,0,186,720,1,0,0,0,188,722,1,0,0,0,190,
724,1,0,0,0,192,735,1,0,0,0,194,737,1,0,0,0,196,741,1,0,0,0,198,752,1,0,
0,0,200,757,1,0,0,0,202,205,3,2,1,0,203,205,3,14,7,0,204,202,1,0,0,0,204,
203,1,0,0,0,205,1,1,0,0,0,206,207,3,4,2,0,207,3,1,0,0,0,208,210,3,188,94,
0,209,208,1,0,0,0,209,210,1,0,0,0,210,211,1,0,0,0,211,212,5,18,0,0,212,213,
3,6,3,0,213,215,5,17,0,0,214,216,3,8,4,0,215,214,1,0,0,0,215,216,1,0,0,0,
216,5,1,0,0,0,217,218,5,68,0,0,218,7,1,0,0,0,219,221,3,10,5,0,220,222,3,
8,4,0,221,220,1,0,0,0,221,222,1,0,0,0,222,9,1,0,0,0,223,225,3,188,94,0,224,
223,1,0,0,0,224,225,1,0,0,0,225,227,1,0,0,0,226,228,5,19,0,0,227,226,1,0,
0,0,227,228,1,0,0,0,228,229,1,0,0,0,229,230,3,12,6,0,230,231,5,5,0,0,231,
232,3,16,8,0,232,233,5,17,0,0,233,11,1,0,0,0,234,235,5,68,0,0,235,13,1,0,
0,0,236,237,3,16,8,0,237,15,1,0,0,0,238,247,3,18,9,0,239,247,3,114,57,0,
240,247,3,92,46,0,241,247,3,118,59,0,242,247,3,126,63,0,243,247,3,118,59,
0,244,247,3,178,89,0,245,247,3,180,90,0,246,238,1,0,0,0,246,239,1,0,0,0,
246,240,1,0,0,0,246,241,1,0,0,0,246,242,1,0,0,0,246,243,1,0,0,0,246,244,
1,0,0,0,246,245,1,0,0,0,247,17,1,0,0,0,248,254,3,20,10,0,249,250,3,20,10,
0,250,251,5,21,0,0,251,252,3,18,9,0,252,254,1,0,0,0,253,248,1,0,0,0,253,
249,1,0,0,0,254,19,1,0,0,0,255,256,6,10,-1,0,256,257,3,22,11,0,257,263,1,
0,0,0,258,259,10,1,0,0,259,260,5,20,0,0,260,262,3,22,11,0,261,258,1,0,0,
0,262,265,1,0,0,0,263,261,1,0,0,0,263,264,1,0,0,0,264,21,1,0,0,0,265,263,
1,0,0,0,266,267,6,11,-1,0,267,268,3,26,13,0,268,274,1,0,0,0,269,270,10,1,
0,0,270,271,5,57,0,0,271,273,3,24,12,0,272,269,1,0,0,0,273,276,1,0,0,0,274,
272,1,0,0,0,274,275,1,0,0,0,275,23,1,0,0,0,276,274,1,0,0,0,277,279,5,16,
0,0,278,277,1,0,0,0,278,279,1,0,0,0,279,280,1,0,0,0,280,281,3,140,70,0,281,
25,1,0,0,0,282,283,6,13,-1,0,283,284,3,28,14,0,284,290,1,0,0,0,285,286,10,
1,0,0,286,287,5,49,0,0,287,289,3,24,12,0,288,285,1,0,0,0,289,292,1,0,0,0,
290,288,1,0,0,0,290,291,1,0,0,0,291,27,1,0,0,0,292,290,1,0,0,0,293,303,3,
30,15,0,294,295,3,30,15,0,295,296,5,5,0,0,296,297,3,28,14,0,297,303,1,0,
0,0,298,299,3,30,15,0,299,300,5,58,0,0,300,301,3,28,14,0,301,303,1,0,0,0,
302,293,1,0,0,0,302,294,1,0,0,0,302,298,1,0,0,0,303,29,1,0,0,0,304,322,3,
32,16,0,305,306,3,32,16,0,306,307,5,60,0,0,307,308,3,30,15,0,308,322,1,0,
0,0,309,310,3,32,16,0,310,311,5,59,0,0,311,312,3,30,15,0,312,322,1,0,0,0,
313,314,3,32,16,0,314,315,5,64,0,0,315,316,3,32,16,0,316,322,1,0,0,0,317,
318,3,32,16,0,318,319,5,65,0,0,319,320,3,30,15,0,320,322,1,0,0,0,321,304,
1,0,0,0,321,305,1,0,0,0,321,309,1,0,0,0,321,313,1,0,0,0,321,317,1,0,0,0,
322,31,1,0,0,0,323,337,3,34,17,0,324,325,3,34,17,0,325,326,5,54,0,0,326,
327,3,32,16,0,327,337,1,0,0,0,328,329,3,34,17,0,329,330,5,55,0,0,330,331,
3,32,16,0,331,337,1,0,0,0,332,333,3,34,17,0,333,334,5,63,0,0,334,335,3,32,
16,0,335,337,1,0,0,0,336,323,1,0,0,0,336,324,1,0,0,0,336,328,1,0,0,0,336,
332,1,0,0,0,337,33,1,0,0,0,338,348,3,36,18,0,339,340,3,36,18,0,340,341,5,
62,0,0,341,342,3,34,17,0,342,348,1,0,0,0,343,344,3,36,18,0,344,345,5,61,
0,0,345,346,3,34,17,0,346,348,1,0,0,0,347,338,1,0,0,0,347,339,1,0,0,0,347,
343,1,0,0,0,348,35,1,0,0,0,349,355,3,38,19,0,350,351,3,38,19,0,351,352,5,
56,0,0,352,353,3,38,19,0,353,355,1,0,0,0,354,349,1,0,0,0,354,350,1,0,0,0,
355,37,1,0,0,0,356,364,3,134,67,0,357,358,5,54,0,0,358,364,3,38,19,0,359,
360,5,55,0,0,360,364,3,38,19,0,361,362,5,53,0,0,362,364,3,38,19,0,363,356,
1,0,0,0,363,357,1,0,0,0,363,359,1,0,0,0,363,361,1,0,0,0,364,39,1,0,0,0,365,
366,6,20,-1,0,366,376,3,42,21,0,367,376,3,60,30,0,368,376,3,66,33,0,369,
376,3,44,22,0,370,376,3,52,26,0,371,376,3,54,27,0,372,376,3,82,41,0,373,
376,3,90,45,0,374,376,3,56,28,0,375,365,1,0,0,0,375,367,1,0,0,0,375,368,
1,0,0,0,375,369,1,0,0,0,375,370,1,0,0,0,375,371,1,0,0,0,375,372,1,0,0,0,
375,373,1,0,0,0,375,374,1,0,0,0,376,402,1,0,0,0,377,378,10,9,0,0,378,401,
3,76,38,0,379,380,10,7,0,0,380,401,3,84,42,0,381,382,10,6,0,0,382,401,3,
86,43,0,383,384,10,4,0,0,384,385,5,9,0,0,385,386,3,74,37,0,386,387,5,10,
0,0,387,401,1,0,0,0,388,389,10,3,0,0,389,390,5,9,0,0,390,391,3,74,37,0,391,
392,5,10,0,0,392,393,5,13,0,0,393,401,1,0,0,0,394,395,10,2,0,0,395,397,5,
11,0,0,396,398,3,58,29,0,397,396,1,0,0,0,397,398,1,0,0,0,398,399,1,0,0,0,
399,401,5,12,0,0,400,377,1,0,0,0,400,379,1,0,0,0,400,381,1,0,0,0,400,383,
1,0,0,0,400,388,1,0,0,0,400,394,1,0,0,0,401,404,1,0,0,0,402,400,1,0,0,0,
402,403,1,0,0,0,403,41,1,0,0,0,404,402,1,0,0,0,405,406,5,66,0,0,406,43,1,
0,0,0,407,408,3,46,23,0,408,45,1,0,0,0,409,412,3,48,24,0,410,412,3,50,25,
0,411,409,1,0,0,0,411,410,1,0,0,0,412,47,1,0,0,0,413,414,5,68,0,0,414,49,
1,0,0,0,415,416,5,48,0,0,416,417,5,68,0,0,417,51,1,0,0,0,418,419,5,68,0,
0,419,420,5,52,0,0,420,421,5,68,0,0,421,53,1,0,0,0,422,423,5,11,0,0,423,
424,3,16,8,0,424,425,5,12,0,0,425,55,1,0,0,0,426,427,5,26,0,0,427,57,1,0,
0,0,428,434,3,16,8,0,429,430,3,16,8,0,430,431,5,6,0,0,431,432,3,58,29,0,
432,434,1,0,0,0,433,428,1,0,0,0,433,429,1,0,0,0,434,59,1,0,0,0,435,437,5,
9,0,0,436,438,3,62,31,0,437,436,1,0,0,0,437,438,1,0,0,0,438,439,1,0,0,0,
439,440,5,10,0,0,440,61,1,0,0,0,441,447,3,64,32,0,442,443,3,64,32,0,443,
444,5,6,0,0,444,445,3,62,31,0,445,447,1,0,0,0,446,441,1,0,0,0,446,442,1,
0,0,0,447,63,1,0,0,0,448,454,3,16,8,0,449,450,3,16,8,0,450,451,5,51,0,0,
451,452,3,16,8,0,452,454,1,0,0,0,453,448,1,0,0,0,453,449,1,0,0,0,454,65,
1,0,0,0,455,457,5,7,0,0,456,458,3,68,34,0,457,456,1,0,0,0,457,458,1,0,0,
0,458,459,1,0,0,0,459,460,5,8,0,0,460,67,1,0,0,0,461,467,3,70,35,0,462,463,
3,70,35,0,463,464,5,6,0,0,464,465,3,68,34,0,465,467,1,0,0,0,466,461,1,0,
0,0,466,462,1,0,0,0,467,69,1,0,0,0,468,469,3,72,36,0,469,470,5,5,0,0,470,
471,3,16,8,0,471,71,1,0,0,0,472,473,5,68,0,0,473,73,1,0,0,0,474,475,3,16,
8,0,475,75,1,0,0,0,476,479,3,78,39,0,477,479,3,80,40,0,478,476,1,0,0,0,478,
477,1,0,0,0,479,77,1,0,0,0,480,481,5,7,0,0,481,482,3,72,36,0,482,483,5,8,
0,0,483,79,1,0,0,0,484,485,5,7,0,0,485,486,3,72,36,0,486,487,5,8,0,0,487,
488,5,13,0,0,488,81,1,0,0,0,489,490,3,76,38,0,490,83,1,0,0,0,491,492,5,7,
0,0,492,493,3,88,44,0,493,494,5,8,0,0,494,85,1,0,0,0,495,496,5,7,0,0,496,
497,3,88,44,0,497,498,5,8,0,0,498,499,5,13,0,0,499,87,1,0,0,0,500,506,3,
78,39,0,501,502,3,78,39,0,502,503,5,6,0,0,503,504,3,88,44,0,504,506,1,0,
0,0,505,500,1,0,0,0,505,501,1,0,0,0,506,89,1,0,0,0,507,510,3,84,42,0,508,
510,3,86,43,0,509,507,1,0,0,0,509,508,1,0,0,0,510,91,1,0,0,0,511,513,5,11,
0,0,512,514,3,96,48,0,513,512,1,0,0,0,513,514,1,0,0,0,514,515,1,0,0,0,515,
517,5,12,0,0,516,518,3,106,53,0,517,516,1,0,0,0,517,518,1,0,0,0,518,519,
1,0,0,0,519,520,5,50,0,0,520,521,3,94,47,0,521,93,1,0,0,0,522,523,3,16,8,
0,523,95,1,0,0,0,524,530,3,98,49,0,525,526,3,98,49,0,526,527,5,6,0,0,527,
528,3,110,55,0,528,530,1,0,0,0,529,524,1,0,0,0,529,525,1,0,0,0,530,97,1,
0,0,0,531,537,3,100,50,0,532,533,3,100,50,0,533,534,5,6,0,0,534,535,3,98,
49,0,535,537,1,0,0,0,536,531,1,0,0,0,536,532,1,0,0,0,537,99,1,0,0,0,538,
540,3,102,51,0,539,541,3,104,52,0,540,539,1,0,0,0,540,541,1,0,0,0,541,101,
1,0,0,0,542,543,5,68,0,0,543,103,1,0,0,0,544,545,3,108,54,0,545,105,1,0,
0,0,546,547,3,108,54,0,547,107,1,0,0,0,548,549,5,49,0,0,549,550,3,24,12,
0,550,109,1,0,0,0,551,557,3,112,56,0,552,553,3,112,56,0,553,554,5,6,0,0,
554,555,3,110,55,0,555,557,1,0,0,0,556,551,1,0,0,0,556,552,1,0,0,0,557,111,
1,0,0,0,558,559,5,14,0,0,559,560,3,100,50,0,560,113,1,0,0,0,561,562,5,28,
0,0,562,563,3,116,58,0,563,115,1,0,0,0,564,565,3,94,47,0,565,117,1,0,0,0,
566,567,5,29,0,0,567,568,3,120,60,0,568,569,5,30,0,0,569,570,3,16,8,0,570,
119,1,0,0,0,571,577,3,122,61,0,572,573,3,122,61,0,573,574,5,6,0,0,574,575,
3,120,60,0,575,577,1,0,0,0,576,571,1,0,0,0,576,572,1,0,0,0,577,121,1,0,0,
0,578,579,3,124,62,0,579,580,5,5,0,0,580,581,3,16,8,0,581,123,1,0,0,0,582,
583,5,68,0,0,583,125,1,0,0,0,584,585,5,31,0,0,585,586,3,128,64,0,586,587,
5,32,0,0,587,588,3,130,65,0,588,589,5,33,0,0,589,590,3,132,66,0,590,127,
1,0,0,0,591,592,3,16,8,0,592,129,1,0,0,0,593,594,3,16,8,0,594,131,1,0,0,
0,595,596,3,16,8,0,596,133,1,0,0,0,597,601,3,40,20,0,598,599,5,27,0,0,599,
601,3,138,69,0,600,597,1,0,0,0,600,598,1,0,0,0,601,135,1,0,0,0,602,605,3,
54,27,0,603,605,3,138,69,0,604,602,1,0,0,0,604,603,1,0,0,0,605,137,1,0,0,
0,606,613,3,140,70,0,607,613,3,142,71,0,608,613,3,154,77,0,609,613,3,158,
79,0,610,613,3,172,86,0,611,613,3,176,88,0,612,606,1,0,0,0,612,607,1,0,0,
0,612,608,1,0,0,0,612,609,1,0,0,0,612,610,1,0,0,0,612,611,1,0,0,0,613,139,
1,0,0,0,614,615,7,0,0,0,615,141,1,0,0,0,616,617,5,7,0,0,617,618,3,152,76,
0,618,619,5,8,0,0,619,632,1,0,0,0,620,622,5,7,0,0,621,623,3,144,72,0,622,
621,1,0,0,0,622,623,1,0,0,0,623,624,1,0,0,0,624,632,5,8,0,0,625,626,5,7,
0,0,626,627,3,144,72,0,627,628,5,6,0,0,628,629,3,152,76,0,629,630,5,8,0,
0,630,632,1,0,0,0,631,616,1,0,0,0,631,620,1,0,0,0,631,625,1,0,0,0,632,143,
1,0,0,0,633,639,3,146,73,0,634,635,3,146,73,0,635,636,5,6,0,0,636,637,3,
144,72,0,637,639,1,0,0,0,638,633,1,0,0,0,638,634,1,0,0,0,639,145,1,0,0,0,
640,642,5,14,0,0,641,640,1,0,0,0,641,642,1,0,0,0,642,643,1,0,0,0,643,645,
3,72,36,0,644,646,3,148,74,0,645,644,1,0,0,0,645,646,1,0,0,0,646,147,1,0,
0,0,647,648,5,5,0,0,648,649,3,150,75,0,649,149,1,0,0,0,650,651,3,136,68,
0,651,151,1,0,0,0,652,653,5,26,0,0,653,153,1,0,0,0,654,655,5,9,0,0,655,656,
3,156,78,0,656,657,5,10,0,0,657,155,1,0,0,0,658,659,3,136,68,0,659,157,1,
0,0,0,660,662,5,25,0,0,661,663,3,160,80,0,662,661,1,0,0,0,662,663,1,0,0,
0,663,664,1,0,0,0,664,665,5,12,0,0,665,666,3,106,53,0,666,159,1,0,0,0,667,
674,3,162,81,0,668,669,3,162,81,0,669,670,5,6,0,0,670,671,3,166,83,0,671,
674,1,0,0,0,672,674,3,166,83,0,673,667,1,0,0,0,673,668,1,0,0,0,673,672,1,
0,0,0,674,161,1,0,0,0,675,681,3,164,82,0,676,677,3,164,82,0,677,678,5,6,
0,0,678,679,3,162,81,0,679,681,1,0,0,0,680,675,1,0,0,0,680,676,1,0,0,0,681,
163,1,0,0,0,682,683,3,170,85,0,683,165,1,0,0,0,684,690,3,168,84,0,685,686,
3,168,84,0,686,687,5,6,0,0,687,688,3,166,83,0,688,690,1,0,0,0,689,684,1,
0,0,0,689,685,1,0,0,0,690,167,1,0,0,0,691,692,5,14,0,0,692,693,3,170,85,
0,693,169,1,0,0,0,694,695,3,102,51,0,695,696,3,104,52,0,696,171,1,0,0,0,
697,698,5,15,0,0,698,699,3,174,87,0,699,173,1,0,0,0,700,701,5,7,0,0,701,
702,3,144,72,0,702,703,5,8,0,0,703,175,1,0,0,0,704,705,5,16,0,0,705,706,
3,136,68,0,706,177,1,0,0,0,707,708,5,24,0,0,708,709,3,16,8,0,709,179,1,0,
0,0,710,711,5,23,0,0,711,713,3,182,91,0,712,714,3,184,92,0,713,712,1,0,0,
0,713,714,1,0,0,0,714,181,1,0,0,0,715,716,3,16,8,0,716,183,1,0,0,0,717,718,
5,22,0,0,718,719,3,186,93,0,719,185,1,0,0,0,720,721,3,16,8,0,721,187,1,0,
0,0,722,723,3,190,95,0,723,189,1,0,0,0,724,726,5,7,0,0,725,727,3,192,96,
0,726,725,1,0,0,0,726,727,1,0,0,0,727,728,1,0,0,0,728,729,5,8,0,0,729,191,
1,0,0,0,730,736,3,194,97,0,731,732,3,194,97,0,732,733,5,6,0,0,733,734,3,
192,96,0,734,736,1,0,0,0,735,730,1,0,0,0,735,731,1,0,0,0,736,193,1,0,0,0,
737,738,3,72,36,0,738,739,5,5,0,0,739,740,3,200,100,0,740,195,1,0,0,0,741,
743,5,9,0,0,742,744,3,198,99,0,743,742,1,0,0,0,743,744,1,0,0,0,744,745,1,
0,0,0,745,746,5,10,0,0,746,197,1,0,0,0,747,753,3,200,100,0,748,749,3,200,
100,0,749,750,5,6,0,0,750,751,3,198,99,0,751,753,1,0,0,0,752,747,1,0,0,0,
752,748,1,0,0,0,753,199,1,0,0,0,754,758,3,190,95,0,755,758,3,196,98,0,756,
758,5,66,0,0,757,754,1,0,0,0,757,755,1,0,0,0,757,756,1,0,0,0,758,201,1,0,
0,0,57,204,209,215,221,224,227,246,253,263,274,278,290,302,321,336,347,354,
363,375,397,400,402,411,433,437,446,453,457,466,478,505,509,513,517,529,
536,540,556,576,600,604,612,622,631,638,641,645,662,673,680,689,713,726,
735,743,752,757];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class PowerQueryParser extends antlr4.Parser {

    static grammarFileName = "PowerQueryParser.g4";
    static literalNames = [ null, null, null, null, null, "'='", "','", 
                            "'['", "']'", "'{'", "'}'", "'('", "')'", "'?'", 
                            "'optional'", "'table'", "'nullable'", "';'", 
                            "'section'", "'shared'", "'and'", "'or'", "'otherwise'", 
                            "'try'", "'error'", "'function ('", "'...'", 
                            "'type'", "'each'", "'let'", "'in'", "'if'", 
                            "'then'", "'else'", "'text'", "'record'", "'number'", 
                            "'none'", "'logical'", "'list'", "'fuction'", 
                            "'duration'", "'datetimezone'", "'any'", "'anynonnull'", 
                            "'binary'", "'date'", "'datetime'", "'@'", "'as'", 
                            "'=>'", "'..'", "'!'", "'not'", "'+'", "'-'", 
                            "'meta'", "'is'", "'<>'", "'>'", "'<'", "'/'", 
                            "'*'", "'&'", "'<='", "'>='" ];
    static symbolicNames = [ null, "WHITESPACE", "NEW_LINE_CHAR", "COMMENT", 
                             "CHARACHTER_ESCAPE_SEQUENCE", "EQUALS", "COMMA", 
                             "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_BRACE", 
                             "CLOSE_BRACE", "OPEN_PAREN", "CLOSE_PAREN", 
                             "OPTIONAL", "OPTIONAL_TEXT", "TABLE", "NULLABLE", 
                             "SEMICOLON", "SECTION", "SHARED", "AND", "OR", 
                             "OTHERWISE", "TRY", "ERROR", "FUNCTION_START", 
                             "ELLIPSES", "TYPE", "EACH", "LET", "IN", "IF", 
                             "THEN", "ELSE", "TEXT", "RECORD", "NUMBER", 
                             "NONE", "LOGICAL", "LIST", "FUNCTION", "DURATION", 
                             "DATETIMEZONE", "ANY", "ANYNONNULL", "BINARY", 
                             "DATE", "DATETIME", "AT", "AS", "ARROW", "DOTDOT", 
                             "BANG", "NOT", "PLUS", "MINUS", "META", "IS", 
                             "NEQ", "GE", "LE", "SLASH", "STAR", "AMP", 
                             "LEQ", "GEQ", "LITERAL", "TEXT_LITERAL", "IDENTIFIER", 
                             "REGULAR_IDENTIFIER", "AVAILABLE_IDENTIFIER", 
                             "KEYWORD_OR_IDENTIFIER" ];
    static ruleNames = [ "document", "section_document", "section", "section_name", 
                         "section_members", "section_member", "section_member_name", 
                         "expression_document", "expression", "logical_or_expression", 
                         "logical_and_expression", "is_expression", "nullable_primitive_type", 
                         "as_expression", "equality_expression", "relational_expression", 
                         "additive_expression", "multiplicative_expression", 
                         "metadata_expression", "unary_expression", "primary_expression", 
                         "literal_expression", "identifier_expression", 
                         "identifier_reference", "exclusive_identifier_reference", 
                         "inclusive_identifier_reference", "section_access_expression", 
                         "parenthesized_expression", "not_implemented_expression", 
                         "argument_list", "list_expression", "item_list", 
                         "item", "record_expression", "field_list", "field", 
                         "field_name", "item_selector", "field_selector", 
                         "required_field_selector", "optional_field_selector", 
                         "implicit_target_field_selection", "required_projection", 
                         "optional_projection", "required_selector_list", 
                         "implicit_target_projection", "function_expression", 
                         "function_body", "parameter_list", "fixed_parameter_list", 
                         "parameter", "parameter_name", "parameter_type", 
                         "return_type", "assertion", "optional_parameter_list", 
                         "optional_parameter", "each_expression", "each_expression_body", 
                         "let_expression", "variable_list", "variable", 
                         "variable_name", "if_expression", "if_condition", 
                         "true_expression", "false_expression", "type_expression", 
                         "type_expr", "primary_type", "primitive_type", 
                         "record_type", "field_specification_list", "field_specification", 
                         "field_type_specification", "field_type", "open_record_marker", 
                         "list_type", "item_type", "function_type", "parameter_specification_list", 
                         "required_parameter_specification_list", "required_parameter_specification", 
                         "optional_parameter_specification_list", "optional_parameter_specification", 
                         "parameter_specification", "table_type", "row_type", 
                         "nullable_type", "error_raising_expression", "error_handling_expression", 
                         "protected_expression", "otherwise_clause", "default_expression", 
                         "literal_attribs", "record_literal", "literal_field_list", 
                         "literal_field", "list_literal", "literal_item_list", 
                         "any_literal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PowerQueryParser.ruleNames;
        this.literalNames = PowerQueryParser.literalNames;
        this.symbolicNames = PowerQueryParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 10:
    	    		return this.logical_and_expression_sempred(localctx, predIndex);
    	case 11:
    	    		return this.is_expression_sempred(localctx, predIndex);
    	case 13:
    	    		return this.as_expression_sempred(localctx, predIndex);
    	case 20:
    	    		return this.primary_expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    logical_and_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    is_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    as_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    primary_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 9);
    		case 4:
    			return this.precpred(this._ctx, 7);
    		case 5:
    			return this.precpred(this._ctx, 6);
    		case 6:
    			return this.precpred(this._ctx, 4);
    		case 7:
    			return this.precpred(this._ctx, 3);
    		case 8:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PowerQueryParser.RULE_document);
	    try {
	        this.state = 204;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 202;
	            this.section_document();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 203;
	            this.expression_document();
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



	section_document() {
	    let localctx = new Section_documentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PowerQueryParser.RULE_section_document);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.section();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 4, PowerQueryParser.RULE_section);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerQueryParser.OPEN_BRACKET) {
	            this.state = 208;
	            this.literal_attribs();
	        }

	        this.state = 211;
	        this.match(PowerQueryParser.SECTION);
	        this.state = 212;
	        this.section_name();
	        this.state = 213;
	        this.match(PowerQueryParser.SEMICOLON);
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerQueryParser.OPEN_BRACKET || _la===PowerQueryParser.SHARED || _la===PowerQueryParser.IDENTIFIER) {
	            this.state = 214;
	            this.section_members();
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



	section_name() {
	    let localctx = new Section_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PowerQueryParser.RULE_section_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.match(PowerQueryParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	section_members() {
	    let localctx = new Section_membersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PowerQueryParser.RULE_section_members);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this.section_member();
	        this.state = 221;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerQueryParser.OPEN_BRACKET || _la===PowerQueryParser.SHARED || _la===PowerQueryParser.IDENTIFIER) {
	            this.state = 220;
	            this.section_members();
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



	section_member() {
	    let localctx = new Section_memberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PowerQueryParser.RULE_section_member);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerQueryParser.OPEN_BRACKET) {
	            this.state = 223;
	            this.literal_attribs();
	        }

	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerQueryParser.SHARED) {
	            this.state = 226;
	            this.match(PowerQueryParser.SHARED);
	        }

	        this.state = 229;
	        this.section_member_name();
	        this.state = 230;
	        this.match(PowerQueryParser.EQUALS);
	        this.state = 231;
	        this.expression();
	        this.state = 232;
	        this.match(PowerQueryParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	section_member_name() {
	    let localctx = new Section_member_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PowerQueryParser.RULE_section_member_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.match(PowerQueryParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression_document() {
	    let localctx = new Expression_documentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PowerQueryParser.RULE_expression_document);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PowerQueryParser.RULE_expression);
	    try {
	        this.state = 246;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 238;
	            this.logical_or_expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 239;
	            this.each_expression();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 240;
	            this.function_expression();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 241;
	            this.let_expression();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 242;
	            this.if_expression();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 243;
	            this.let_expression();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 244;
	            this.error_raising_expression();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 245;
	            this.error_handling_expression();
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



	logical_or_expression() {
	    let localctx = new Logical_or_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PowerQueryParser.RULE_logical_or_expression);
	    try {
	        this.state = 253;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 248;
	            this.logical_and_expression(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 249;
	            this.logical_and_expression(0);
	            this.state = 250;
	            this.match(PowerQueryParser.OR);
	            this.state = 251;
	            this.logical_or_expression();
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


	logical_and_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Logical_and_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, PowerQueryParser.RULE_logical_and_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.is_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 263;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Logical_and_expressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, PowerQueryParser.RULE_logical_and_expression);
	                this.state = 258;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 259;
	                this.match(PowerQueryParser.AND);
	                this.state = 260;
	                this.is_expression(0); 
	            }
	            this.state = 265;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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


	is_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Is_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, PowerQueryParser.RULE_is_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this.as_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 274;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Is_expressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, PowerQueryParser.RULE_is_expression);
	                this.state = 269;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 270;
	                this.match(PowerQueryParser.IS);
	                this.state = 271;
	                this.nullable_primitive_type(); 
	            }
	            this.state = 276;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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



	nullable_primitive_type() {
	    let localctx = new Nullable_primitive_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, PowerQueryParser.RULE_nullable_primitive_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerQueryParser.NULLABLE) {
	            this.state = 277;
	            this.match(PowerQueryParser.NULLABLE);
	        }

	        this.state = 280;
	        this.primitive_type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	as_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new As_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, PowerQueryParser.RULE_as_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.equality_expression();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 290;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new As_expressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, PowerQueryParser.RULE_as_expression);
	                this.state = 285;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 286;
	                this.match(PowerQueryParser.AS);
	                this.state = 287;
	                this.nullable_primitive_type(); 
	            }
	            this.state = 292;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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



	equality_expression() {
	    let localctx = new Equality_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, PowerQueryParser.RULE_equality_expression);
	    try {
	        this.state = 302;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 293;
	            this.relational_expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 294;
	            this.relational_expression();
	            this.state = 295;
	            this.match(PowerQueryParser.EQUALS);
	            this.state = 296;
	            this.equality_expression();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 298;
	            this.relational_expression();
	            this.state = 299;
	            this.match(PowerQueryParser.NEQ);
	            this.state = 300;
	            this.equality_expression();
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



	relational_expression() {
	    let localctx = new Relational_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, PowerQueryParser.RULE_relational_expression);
	    try {
	        this.state = 321;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 304;
	            this.additive_expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 305;
	            this.additive_expression();
	            this.state = 306;
	            this.match(PowerQueryParser.LE);
	            this.state = 307;
	            this.relational_expression();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 309;
	            this.additive_expression();
	            this.state = 310;
	            this.match(PowerQueryParser.GE);
	            this.state = 311;
	            this.relational_expression();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 313;
	            this.additive_expression();
	            this.state = 314;
	            this.match(PowerQueryParser.LEQ);
	            this.state = 315;
	            this.additive_expression();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 317;
	            this.additive_expression();
	            this.state = 318;
	            this.match(PowerQueryParser.GEQ);
	            this.state = 319;
	            this.relational_expression();
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



	additive_expression() {
	    let localctx = new Additive_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, PowerQueryParser.RULE_additive_expression);
	    try {
	        this.state = 336;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 323;
	            this.multiplicative_expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 324;
	            this.multiplicative_expression();
	            this.state = 325;
	            this.match(PowerQueryParser.PLUS);
	            this.state = 326;
	            this.additive_expression();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 328;
	            this.multiplicative_expression();
	            this.state = 329;
	            this.match(PowerQueryParser.MINUS);
	            this.state = 330;
	            this.additive_expression();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 332;
	            this.multiplicative_expression();
	            this.state = 333;
	            this.match(PowerQueryParser.AMP);
	            this.state = 334;
	            this.additive_expression();
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



	multiplicative_expression() {
	    let localctx = new Multiplicative_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, PowerQueryParser.RULE_multiplicative_expression);
	    try {
	        this.state = 347;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 338;
	            this.metadata_expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 339;
	            this.metadata_expression();
	            this.state = 340;
	            this.match(PowerQueryParser.STAR);
	            this.state = 341;
	            this.multiplicative_expression();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 343;
	            this.metadata_expression();
	            this.state = 344;
	            this.match(PowerQueryParser.SLASH);
	            this.state = 345;
	            this.multiplicative_expression();
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



	metadata_expression() {
	    let localctx = new Metadata_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, PowerQueryParser.RULE_metadata_expression);
	    try {
	        this.state = 354;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 349;
	            this.unary_expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 350;
	            this.unary_expression();
	            this.state = 351;
	            this.match(PowerQueryParser.META);
	            this.state = 352;
	            this.unary_expression();
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



	unary_expression() {
	    let localctx = new Unary_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, PowerQueryParser.RULE_unary_expression);
	    try {
	        this.state = 363;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PowerQueryParser.OPEN_BRACKET:
	        case PowerQueryParser.OPEN_BRACE:
	        case PowerQueryParser.OPEN_PAREN:
	        case PowerQueryParser.ELLIPSES:
	        case PowerQueryParser.TYPE:
	        case PowerQueryParser.AT:
	        case PowerQueryParser.LITERAL:
	        case PowerQueryParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 356;
	            this.type_expression();
	            break;
	        case PowerQueryParser.PLUS:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 357;
	            this.match(PowerQueryParser.PLUS);
	            this.state = 358;
	            this.unary_expression();
	            break;
	        case PowerQueryParser.MINUS:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 359;
	            this.match(PowerQueryParser.MINUS);
	            this.state = 360;
	            this.unary_expression();
	            break;
	        case PowerQueryParser.NOT:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 361;
	            this.match(PowerQueryParser.NOT);
	            this.state = 362;
	            this.unary_expression();
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


	primary_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Primary_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 40;
	    this.enterRecursionRule(localctx, 40, PowerQueryParser.RULE_primary_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 375;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 366;
	            this.literal_expression();
	            break;

	        case 2:
	            this.state = 367;
	            this.list_expression();
	            break;

	        case 3:
	            this.state = 368;
	            this.record_expression();
	            break;

	        case 4:
	            this.state = 369;
	            this.identifier_expression();
	            break;

	        case 5:
	            this.state = 370;
	            this.section_access_expression();
	            break;

	        case 6:
	            this.state = 371;
	            this.parenthesized_expression();
	            break;

	        case 7:
	            this.state = 372;
	            this.implicit_target_field_selection();
	            break;

	        case 8:
	            this.state = 373;
	            this.implicit_target_projection();
	            break;

	        case 9:
	            this.state = 374;
	            this.not_implemented_expression();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 402;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 400;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Primary_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PowerQueryParser.RULE_primary_expression);
	                    this.state = 377;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 378;
	                    this.field_selector();
	                    break;

	                case 2:
	                    localctx = new Primary_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PowerQueryParser.RULE_primary_expression);
	                    this.state = 379;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 380;
	                    this.required_projection();
	                    break;

	                case 3:
	                    localctx = new Primary_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PowerQueryParser.RULE_primary_expression);
	                    this.state = 381;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 382;
	                    this.optional_projection();
	                    break;

	                case 4:
	                    localctx = new Primary_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PowerQueryParser.RULE_primary_expression);
	                    this.state = 383;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 384;
	                    this.match(PowerQueryParser.OPEN_BRACE);
	                    this.state = 385;
	                    this.item_selector();
	                    this.state = 386;
	                    this.match(PowerQueryParser.CLOSE_BRACE);
	                    break;

	                case 5:
	                    localctx = new Primary_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PowerQueryParser.RULE_primary_expression);
	                    this.state = 388;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 389;
	                    this.match(PowerQueryParser.OPEN_BRACE);
	                    this.state = 390;
	                    this.item_selector();
	                    this.state = 391;
	                    this.match(PowerQueryParser.CLOSE_BRACE);
	                    this.state = 392;
	                    this.match(PowerQueryParser.OPTIONAL);
	                    break;

	                case 6:
	                    localctx = new Primary_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PowerQueryParser.RULE_primary_expression);
	                    this.state = 394;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 395;
	                    this.match(PowerQueryParser.OPEN_PAREN);
	                    this.state = 397;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PowerQueryParser.OPEN_BRACKET) | (1 << PowerQueryParser.OPEN_BRACE) | (1 << PowerQueryParser.OPEN_PAREN) | (1 << PowerQueryParser.TRY) | (1 << PowerQueryParser.ERROR) | (1 << PowerQueryParser.ELLIPSES) | (1 << PowerQueryParser.TYPE) | (1 << PowerQueryParser.EACH) | (1 << PowerQueryParser.LET) | (1 << PowerQueryParser.IF))) !== 0) || ((((_la - 48)) & ~0x1f) == 0 && ((1 << (_la - 48)) & ((1 << (PowerQueryParser.AT - 48)) | (1 << (PowerQueryParser.NOT - 48)) | (1 << (PowerQueryParser.PLUS - 48)) | (1 << (PowerQueryParser.MINUS - 48)) | (1 << (PowerQueryParser.LITERAL - 48)) | (1 << (PowerQueryParser.IDENTIFIER - 48)))) !== 0)) {
	                        this.state = 396;
	                        this.argument_list();
	                    }

	                    this.state = 399;
	                    this.match(PowerQueryParser.CLOSE_PAREN);
	                    break;

	                } 
	            }
	            this.state = 404;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
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



	literal_expression() {
	    let localctx = new Literal_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, PowerQueryParser.RULE_literal_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 405;
	        this.match(PowerQueryParser.LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier_expression() {
	    let localctx = new Identifier_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, PowerQueryParser.RULE_identifier_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 407;
	        this.identifier_reference();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier_reference() {
	    let localctx = new Identifier_referenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, PowerQueryParser.RULE_identifier_reference);
	    try {
	        this.state = 411;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PowerQueryParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 409;
	            this.exclusive_identifier_reference();
	            break;
	        case PowerQueryParser.AT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 410;
	            this.inclusive_identifier_reference();
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



	exclusive_identifier_reference() {
	    let localctx = new Exclusive_identifier_referenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, PowerQueryParser.RULE_exclusive_identifier_reference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 413;
	        this.match(PowerQueryParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inclusive_identifier_reference() {
	    let localctx = new Inclusive_identifier_referenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, PowerQueryParser.RULE_inclusive_identifier_reference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 415;
	        this.match(PowerQueryParser.AT);
	        this.state = 416;
	        this.match(PowerQueryParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	section_access_expression() {
	    let localctx = new Section_access_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, PowerQueryParser.RULE_section_access_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 418;
	        this.match(PowerQueryParser.IDENTIFIER);
	        this.state = 419;
	        this.match(PowerQueryParser.BANG);
	        this.state = 420;
	        this.match(PowerQueryParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parenthesized_expression() {
	    let localctx = new Parenthesized_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, PowerQueryParser.RULE_parenthesized_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 422;
	        this.match(PowerQueryParser.OPEN_PAREN);
	        this.state = 423;
	        this.expression();
	        this.state = 424;
	        this.match(PowerQueryParser.CLOSE_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	not_implemented_expression() {
	    let localctx = new Not_implemented_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, PowerQueryParser.RULE_not_implemented_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 426;
	        this.match(PowerQueryParser.ELLIPSES);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argument_list() {
	    let localctx = new Argument_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, PowerQueryParser.RULE_argument_list);
	    try {
	        this.state = 433;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 428;
	            this.expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 429;
	            this.expression();
	            this.state = 430;
	            this.match(PowerQueryParser.COMMA);
	            this.state = 431;
	            this.argument_list();
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



	list_expression() {
	    let localctx = new List_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, PowerQueryParser.RULE_list_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 435;
	        this.match(PowerQueryParser.OPEN_BRACE);
	        this.state = 437;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PowerQueryParser.OPEN_BRACKET) | (1 << PowerQueryParser.OPEN_BRACE) | (1 << PowerQueryParser.OPEN_PAREN) | (1 << PowerQueryParser.TRY) | (1 << PowerQueryParser.ERROR) | (1 << PowerQueryParser.ELLIPSES) | (1 << PowerQueryParser.TYPE) | (1 << PowerQueryParser.EACH) | (1 << PowerQueryParser.LET) | (1 << PowerQueryParser.IF))) !== 0) || ((((_la - 48)) & ~0x1f) == 0 && ((1 << (_la - 48)) & ((1 << (PowerQueryParser.AT - 48)) | (1 << (PowerQueryParser.NOT - 48)) | (1 << (PowerQueryParser.PLUS - 48)) | (1 << (PowerQueryParser.MINUS - 48)) | (1 << (PowerQueryParser.LITERAL - 48)) | (1 << (PowerQueryParser.IDENTIFIER - 48)))) !== 0)) {
	            this.state = 436;
	            this.item_list();
	        }

	        this.state = 439;
	        this.match(PowerQueryParser.CLOSE_BRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	item_list() {
	    let localctx = new Item_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, PowerQueryParser.RULE_item_list);
	    try {
	        this.state = 446;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 441;
	            this.item();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 442;
	            this.item();
	            this.state = 443;
	            this.match(PowerQueryParser.COMMA);
	            this.state = 444;
	            this.item_list();
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



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, PowerQueryParser.RULE_item);
	    try {
	        this.state = 453;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 448;
	            this.expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 449;
	            this.expression();
	            this.state = 450;
	            this.match(PowerQueryParser.DOTDOT);
	            this.state = 451;
	            this.expression();
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



	record_expression() {
	    let localctx = new Record_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, PowerQueryParser.RULE_record_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 455;
	        this.match(PowerQueryParser.OPEN_BRACKET);
	        this.state = 457;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerQueryParser.IDENTIFIER) {
	            this.state = 456;
	            this.field_list();
	        }

	        this.state = 459;
	        this.match(PowerQueryParser.CLOSE_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field_list() {
	    let localctx = new Field_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, PowerQueryParser.RULE_field_list);
	    try {
	        this.state = 466;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 461;
	            this.field();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 462;
	            this.field();
	            this.state = 463;
	            this.match(PowerQueryParser.COMMA);
	            this.state = 464;
	            this.field_list();
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



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, PowerQueryParser.RULE_field);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 468;
	        this.field_name();
	        this.state = 469;
	        this.match(PowerQueryParser.EQUALS);
	        this.state = 470;
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



	field_name() {
	    let localctx = new Field_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, PowerQueryParser.RULE_field_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 472;
	        this.match(PowerQueryParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	item_selector() {
	    let localctx = new Item_selectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, PowerQueryParser.RULE_item_selector);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 474;
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



	field_selector() {
	    let localctx = new Field_selectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, PowerQueryParser.RULE_field_selector);
	    try {
	        this.state = 478;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 476;
	            this.required_field_selector();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 477;
	            this.optional_field_selector();
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



	required_field_selector() {
	    let localctx = new Required_field_selectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, PowerQueryParser.RULE_required_field_selector);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 480;
	        this.match(PowerQueryParser.OPEN_BRACKET);
	        this.state = 481;
	        this.field_name();
	        this.state = 482;
	        this.match(PowerQueryParser.CLOSE_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optional_field_selector() {
	    let localctx = new Optional_field_selectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, PowerQueryParser.RULE_optional_field_selector);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 484;
	        this.match(PowerQueryParser.OPEN_BRACKET);
	        this.state = 485;
	        this.field_name();
	        this.state = 486;
	        this.match(PowerQueryParser.CLOSE_BRACKET);
	        this.state = 487;
	        this.match(PowerQueryParser.OPTIONAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	implicit_target_field_selection() {
	    let localctx = new Implicit_target_field_selectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, PowerQueryParser.RULE_implicit_target_field_selection);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 489;
	        this.field_selector();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	required_projection() {
	    let localctx = new Required_projectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, PowerQueryParser.RULE_required_projection);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 491;
	        this.match(PowerQueryParser.OPEN_BRACKET);
	        this.state = 492;
	        this.required_selector_list();
	        this.state = 493;
	        this.match(PowerQueryParser.CLOSE_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optional_projection() {
	    let localctx = new Optional_projectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, PowerQueryParser.RULE_optional_projection);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 495;
	        this.match(PowerQueryParser.OPEN_BRACKET);
	        this.state = 496;
	        this.required_selector_list();
	        this.state = 497;
	        this.match(PowerQueryParser.CLOSE_BRACKET);
	        this.state = 498;
	        this.match(PowerQueryParser.OPTIONAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	required_selector_list() {
	    let localctx = new Required_selector_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, PowerQueryParser.RULE_required_selector_list);
	    try {
	        this.state = 505;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 500;
	            this.required_field_selector();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 501;
	            this.required_field_selector();
	            this.state = 502;
	            this.match(PowerQueryParser.COMMA);
	            this.state = 503;
	            this.required_selector_list();
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



	implicit_target_projection() {
	    let localctx = new Implicit_target_projectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, PowerQueryParser.RULE_implicit_target_projection);
	    try {
	        this.state = 509;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 507;
	            this.required_projection();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 508;
	            this.optional_projection();
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



	function_expression() {
	    let localctx = new Function_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, PowerQueryParser.RULE_function_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 511;
	        this.match(PowerQueryParser.OPEN_PAREN);
	        this.state = 513;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerQueryParser.IDENTIFIER) {
	            this.state = 512;
	            this.parameter_list();
	        }

	        this.state = 515;
	        this.match(PowerQueryParser.CLOSE_PAREN);
	        this.state = 517;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerQueryParser.AS) {
	            this.state = 516;
	            this.return_type();
	        }

	        this.state = 519;
	        this.match(PowerQueryParser.ARROW);
	        this.state = 520;
	        this.function_body();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_body() {
	    let localctx = new Function_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, PowerQueryParser.RULE_function_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 522;
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



	parameter_list() {
	    let localctx = new Parameter_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, PowerQueryParser.RULE_parameter_list);
	    try {
	        this.state = 529;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 524;
	            this.fixed_parameter_list();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 525;
	            this.fixed_parameter_list();
	            this.state = 526;
	            this.match(PowerQueryParser.COMMA);
	            this.state = 527;
	            this.optional_parameter_list();
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



	fixed_parameter_list() {
	    let localctx = new Fixed_parameter_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, PowerQueryParser.RULE_fixed_parameter_list);
	    try {
	        this.state = 536;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 531;
	            this.parameter();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 532;
	            this.parameter();
	            this.state = 533;
	            this.match(PowerQueryParser.COMMA);
	            this.state = 534;
	            this.fixed_parameter_list();
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



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, PowerQueryParser.RULE_parameter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 538;
	        this.parameter_name();
	        this.state = 540;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerQueryParser.AS) {
	            this.state = 539;
	            this.parameter_type();
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



	parameter_name() {
	    let localctx = new Parameter_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, PowerQueryParser.RULE_parameter_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 542;
	        this.match(PowerQueryParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameter_type() {
	    let localctx = new Parameter_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, PowerQueryParser.RULE_parameter_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 544;
	        this.assertion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	return_type() {
	    let localctx = new Return_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, PowerQueryParser.RULE_return_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 546;
	        this.assertion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assertion() {
	    let localctx = new AssertionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, PowerQueryParser.RULE_assertion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 548;
	        this.match(PowerQueryParser.AS);
	        this.state = 549;
	        this.nullable_primitive_type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optional_parameter_list() {
	    let localctx = new Optional_parameter_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, PowerQueryParser.RULE_optional_parameter_list);
	    try {
	        this.state = 556;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 551;
	            this.optional_parameter();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 552;
	            this.optional_parameter();
	            this.state = 553;
	            this.match(PowerQueryParser.COMMA);
	            this.state = 554;
	            this.optional_parameter_list();
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



	optional_parameter() {
	    let localctx = new Optional_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, PowerQueryParser.RULE_optional_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 558;
	        this.match(PowerQueryParser.OPTIONAL_TEXT);
	        this.state = 559;
	        this.parameter();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	each_expression() {
	    let localctx = new Each_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, PowerQueryParser.RULE_each_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 561;
	        this.match(PowerQueryParser.EACH);
	        this.state = 562;
	        this.each_expression_body();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	each_expression_body() {
	    let localctx = new Each_expression_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, PowerQueryParser.RULE_each_expression_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 564;
	        this.function_body();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	let_expression() {
	    let localctx = new Let_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, PowerQueryParser.RULE_let_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 566;
	        this.match(PowerQueryParser.LET);
	        this.state = 567;
	        this.variable_list();
	        this.state = 568;
	        this.match(PowerQueryParser.IN);
	        this.state = 569;
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



	variable_list() {
	    let localctx = new Variable_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, PowerQueryParser.RULE_variable_list);
	    try {
	        this.state = 576;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 571;
	            this.variable();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 572;
	            this.variable();
	            this.state = 573;
	            this.match(PowerQueryParser.COMMA);
	            this.state = 574;
	            this.variable_list();
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
	    this.enterRule(localctx, 122, PowerQueryParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 578;
	        this.variable_name();
	        this.state = 579;
	        this.match(PowerQueryParser.EQUALS);
	        this.state = 580;
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



	variable_name() {
	    let localctx = new Variable_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, PowerQueryParser.RULE_variable_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 582;
	        this.match(PowerQueryParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_expression() {
	    let localctx = new If_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 126, PowerQueryParser.RULE_if_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 584;
	        this.match(PowerQueryParser.IF);
	        this.state = 585;
	        this.if_condition();
	        this.state = 586;
	        this.match(PowerQueryParser.THEN);
	        this.state = 587;
	        this.true_expression();
	        this.state = 588;
	        this.match(PowerQueryParser.ELSE);
	        this.state = 589;
	        this.false_expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_condition() {
	    let localctx = new If_conditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 128, PowerQueryParser.RULE_if_condition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 591;
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



	true_expression() {
	    let localctx = new True_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 130, PowerQueryParser.RULE_true_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 593;
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



	false_expression() {
	    let localctx = new False_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 132, PowerQueryParser.RULE_false_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 595;
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



	type_expression() {
	    let localctx = new Type_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 134, PowerQueryParser.RULE_type_expression);
	    try {
	        this.state = 600;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PowerQueryParser.OPEN_BRACKET:
	        case PowerQueryParser.OPEN_BRACE:
	        case PowerQueryParser.OPEN_PAREN:
	        case PowerQueryParser.ELLIPSES:
	        case PowerQueryParser.AT:
	        case PowerQueryParser.LITERAL:
	        case PowerQueryParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 597;
	            this.primary_expression(0);
	            break;
	        case PowerQueryParser.TYPE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 598;
	            this.match(PowerQueryParser.TYPE);
	            this.state = 599;
	            this.primary_type();
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



	type_expr() {
	    let localctx = new Type_exprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 136, PowerQueryParser.RULE_type_expr);
	    try {
	        this.state = 604;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PowerQueryParser.OPEN_PAREN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 602;
	            this.parenthesized_expression();
	            break;
	        case PowerQueryParser.OPEN_BRACKET:
	        case PowerQueryParser.OPEN_BRACE:
	        case PowerQueryParser.TABLE:
	        case PowerQueryParser.NULLABLE:
	        case PowerQueryParser.FUNCTION_START:
	        case PowerQueryParser.TYPE:
	        case PowerQueryParser.TEXT:
	        case PowerQueryParser.RECORD:
	        case PowerQueryParser.NUMBER:
	        case PowerQueryParser.NONE:
	        case PowerQueryParser.LOGICAL:
	        case PowerQueryParser.LIST:
	        case PowerQueryParser.FUNCTION:
	        case PowerQueryParser.DURATION:
	        case PowerQueryParser.DATETIMEZONE:
	        case PowerQueryParser.ANY:
	        case PowerQueryParser.ANYNONNULL:
	        case PowerQueryParser.BINARY:
	        case PowerQueryParser.DATE:
	        case PowerQueryParser.DATETIME:
	        case PowerQueryParser.LITERAL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 603;
	            this.primary_type();
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



	primary_type() {
	    let localctx = new Primary_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 138, PowerQueryParser.RULE_primary_type);
	    try {
	        this.state = 612;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 606;
	            this.primitive_type();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 607;
	            this.record_type();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 608;
	            this.list_type();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 609;
	            this.function_type();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 610;
	            this.table_type();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 611;
	            this.nullable_type();
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



	primitive_type() {
	    let localctx = new Primitive_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 140, PowerQueryParser.RULE_primitive_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 614;
	        _la = this._input.LA(1);
	        if(!(((((_la - 15)) & ~0x1f) == 0 && ((1 << (_la - 15)) & ((1 << (PowerQueryParser.TABLE - 15)) | (1 << (PowerQueryParser.TYPE - 15)) | (1 << (PowerQueryParser.TEXT - 15)) | (1 << (PowerQueryParser.RECORD - 15)) | (1 << (PowerQueryParser.NUMBER - 15)) | (1 << (PowerQueryParser.NONE - 15)) | (1 << (PowerQueryParser.LOGICAL - 15)) | (1 << (PowerQueryParser.LIST - 15)) | (1 << (PowerQueryParser.FUNCTION - 15)) | (1 << (PowerQueryParser.DURATION - 15)) | (1 << (PowerQueryParser.DATETIMEZONE - 15)) | (1 << (PowerQueryParser.ANY - 15)) | (1 << (PowerQueryParser.ANYNONNULL - 15)) | (1 << (PowerQueryParser.BINARY - 15)) | (1 << (PowerQueryParser.DATE - 15)))) !== 0) || _la===PowerQueryParser.DATETIME || _la===PowerQueryParser.LITERAL)) {
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



	record_type() {
	    let localctx = new Record_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 142, PowerQueryParser.RULE_record_type);
	    var _la = 0; // Token type
	    try {
	        this.state = 631;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 616;
	            this.match(PowerQueryParser.OPEN_BRACKET);
	            this.state = 617;
	            this.open_record_marker();
	            this.state = 618;
	            this.match(PowerQueryParser.CLOSE_BRACKET);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 620;
	            this.match(PowerQueryParser.OPEN_BRACKET);
	            this.state = 622;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PowerQueryParser.OPTIONAL_TEXT || _la===PowerQueryParser.IDENTIFIER) {
	                this.state = 621;
	                this.field_specification_list();
	            }

	            this.state = 624;
	            this.match(PowerQueryParser.CLOSE_BRACKET);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 625;
	            this.match(PowerQueryParser.OPEN_BRACKET);
	            this.state = 626;
	            this.field_specification_list();
	            this.state = 627;
	            this.match(PowerQueryParser.COMMA);
	            this.state = 628;
	            this.open_record_marker();
	            this.state = 629;
	            this.match(PowerQueryParser.CLOSE_BRACKET);
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



	field_specification_list() {
	    let localctx = new Field_specification_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 144, PowerQueryParser.RULE_field_specification_list);
	    try {
	        this.state = 638;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 633;
	            this.field_specification();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 634;
	            this.field_specification();
	            this.state = 635;
	            this.match(PowerQueryParser.COMMA);
	            this.state = 636;
	            this.field_specification_list();
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



	field_specification() {
	    let localctx = new Field_specificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 146, PowerQueryParser.RULE_field_specification);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 641;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerQueryParser.OPTIONAL_TEXT) {
	            this.state = 640;
	            this.match(PowerQueryParser.OPTIONAL_TEXT);
	        }

	        this.state = 643;
	        this.field_name();
	        this.state = 645;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerQueryParser.EQUALS) {
	            this.state = 644;
	            this.field_type_specification();
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



	field_type_specification() {
	    let localctx = new Field_type_specificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 148, PowerQueryParser.RULE_field_type_specification);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 647;
	        this.match(PowerQueryParser.EQUALS);
	        this.state = 648;
	        this.field_type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field_type() {
	    let localctx = new Field_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 150, PowerQueryParser.RULE_field_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 650;
	        this.type_expr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	open_record_marker() {
	    let localctx = new Open_record_markerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 152, PowerQueryParser.RULE_open_record_marker);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 652;
	        this.match(PowerQueryParser.ELLIPSES);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	list_type() {
	    let localctx = new List_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 154, PowerQueryParser.RULE_list_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 654;
	        this.match(PowerQueryParser.OPEN_BRACE);
	        this.state = 655;
	        this.item_type();
	        this.state = 656;
	        this.match(PowerQueryParser.CLOSE_BRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	item_type() {
	    let localctx = new Item_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 156, PowerQueryParser.RULE_item_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 658;
	        this.type_expr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_type() {
	    let localctx = new Function_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 158, PowerQueryParser.RULE_function_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 660;
	        this.match(PowerQueryParser.FUNCTION_START);
	        this.state = 662;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerQueryParser.OPTIONAL_TEXT || _la===PowerQueryParser.IDENTIFIER) {
	            this.state = 661;
	            this.parameter_specification_list();
	        }

	        this.state = 664;
	        this.match(PowerQueryParser.CLOSE_PAREN);
	        this.state = 665;
	        this.return_type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameter_specification_list() {
	    let localctx = new Parameter_specification_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 160, PowerQueryParser.RULE_parameter_specification_list);
	    try {
	        this.state = 673;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 667;
	            this.required_parameter_specification_list();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 668;
	            this.required_parameter_specification_list();
	            this.state = 669;
	            this.match(PowerQueryParser.COMMA);
	            this.state = 670;
	            this.optional_parameter_specification_list();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 672;
	            this.optional_parameter_specification_list();
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



	required_parameter_specification_list() {
	    let localctx = new Required_parameter_specification_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 162, PowerQueryParser.RULE_required_parameter_specification_list);
	    try {
	        this.state = 680;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 675;
	            this.required_parameter_specification();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 676;
	            this.required_parameter_specification();
	            this.state = 677;
	            this.match(PowerQueryParser.COMMA);
	            this.state = 678;
	            this.required_parameter_specification_list();
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



	required_parameter_specification() {
	    let localctx = new Required_parameter_specificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 164, PowerQueryParser.RULE_required_parameter_specification);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 682;
	        this.parameter_specification();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optional_parameter_specification_list() {
	    let localctx = new Optional_parameter_specification_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 166, PowerQueryParser.RULE_optional_parameter_specification_list);
	    try {
	        this.state = 689;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 684;
	            this.optional_parameter_specification();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 685;
	            this.optional_parameter_specification();
	            this.state = 686;
	            this.match(PowerQueryParser.COMMA);
	            this.state = 687;
	            this.optional_parameter_specification_list();
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



	optional_parameter_specification() {
	    let localctx = new Optional_parameter_specificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 168, PowerQueryParser.RULE_optional_parameter_specification);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 691;
	        this.match(PowerQueryParser.OPTIONAL_TEXT);
	        this.state = 692;
	        this.parameter_specification();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameter_specification() {
	    let localctx = new Parameter_specificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 170, PowerQueryParser.RULE_parameter_specification);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 694;
	        this.parameter_name();
	        this.state = 695;
	        this.parameter_type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	table_type() {
	    let localctx = new Table_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 172, PowerQueryParser.RULE_table_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 697;
	        this.match(PowerQueryParser.TABLE);
	        this.state = 698;
	        this.row_type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	row_type() {
	    let localctx = new Row_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 174, PowerQueryParser.RULE_row_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 700;
	        this.match(PowerQueryParser.OPEN_BRACKET);
	        this.state = 701;
	        this.field_specification_list();
	        this.state = 702;
	        this.match(PowerQueryParser.CLOSE_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nullable_type() {
	    let localctx = new Nullable_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 176, PowerQueryParser.RULE_nullable_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 704;
	        this.match(PowerQueryParser.NULLABLE);
	        this.state = 705;
	        this.type_expr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	error_raising_expression() {
	    let localctx = new Error_raising_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 178, PowerQueryParser.RULE_error_raising_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 707;
	        this.match(PowerQueryParser.ERROR);
	        this.state = 708;
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



	error_handling_expression() {
	    let localctx = new Error_handling_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 180, PowerQueryParser.RULE_error_handling_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 710;
	        this.match(PowerQueryParser.TRY);
	        this.state = 711;
	        this.protected_expression();
	        this.state = 713;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	        if(la_===1) {
	            this.state = 712;
	            this.otherwise_clause();

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



	protected_expression() {
	    let localctx = new Protected_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 182, PowerQueryParser.RULE_protected_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 715;
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



	otherwise_clause() {
	    let localctx = new Otherwise_clauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 184, PowerQueryParser.RULE_otherwise_clause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 717;
	        this.match(PowerQueryParser.OTHERWISE);
	        this.state = 718;
	        this.default_expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	default_expression() {
	    let localctx = new Default_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 186, PowerQueryParser.RULE_default_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 720;
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



	literal_attribs() {
	    let localctx = new Literal_attribsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 188, PowerQueryParser.RULE_literal_attribs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 722;
	        this.record_literal();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	record_literal() {
	    let localctx = new Record_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 190, PowerQueryParser.RULE_record_literal);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 724;
	        this.match(PowerQueryParser.OPEN_BRACKET);
	        this.state = 726;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerQueryParser.IDENTIFIER) {
	            this.state = 725;
	            this.literal_field_list();
	        }

	        this.state = 728;
	        this.match(PowerQueryParser.CLOSE_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal_field_list() {
	    let localctx = new Literal_field_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 192, PowerQueryParser.RULE_literal_field_list);
	    try {
	        this.state = 735;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 730;
	            this.literal_field();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 731;
	            this.literal_field();
	            this.state = 732;
	            this.match(PowerQueryParser.COMMA);
	            this.state = 733;
	            this.literal_field_list();
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



	literal_field() {
	    let localctx = new Literal_fieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 194, PowerQueryParser.RULE_literal_field);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 737;
	        this.field_name();
	        this.state = 738;
	        this.match(PowerQueryParser.EQUALS);
	        this.state = 739;
	        this.any_literal();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	list_literal() {
	    let localctx = new List_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 196, PowerQueryParser.RULE_list_literal);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 741;
	        this.match(PowerQueryParser.OPEN_BRACE);
	        this.state = 743;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerQueryParser.OPEN_BRACKET || _la===PowerQueryParser.OPEN_BRACE || _la===PowerQueryParser.LITERAL) {
	            this.state = 742;
	            this.literal_item_list();
	        }

	        this.state = 745;
	        this.match(PowerQueryParser.CLOSE_BRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal_item_list() {
	    let localctx = new Literal_item_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 198, PowerQueryParser.RULE_literal_item_list);
	    try {
	        this.state = 752;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 747;
	            this.any_literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 748;
	            this.any_literal();
	            this.state = 749;
	            this.match(PowerQueryParser.COMMA);
	            this.state = 750;
	            this.literal_item_list();
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



	any_literal() {
	    let localctx = new Any_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 200, PowerQueryParser.RULE_any_literal);
	    try {
	        this.state = 757;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PowerQueryParser.OPEN_BRACKET:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 754;
	            this.record_literal();
	            break;
	        case PowerQueryParser.OPEN_BRACE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 755;
	            this.list_literal();
	            break;
	        case PowerQueryParser.LITERAL:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 756;
	            this.match(PowerQueryParser.LITERAL);
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

PowerQueryParser.EOF = antlr4.Token.EOF;
PowerQueryParser.WHITESPACE = 1;
PowerQueryParser.NEW_LINE_CHAR = 2;
PowerQueryParser.COMMENT = 3;
PowerQueryParser.CHARACHTER_ESCAPE_SEQUENCE = 4;
PowerQueryParser.EQUALS = 5;
PowerQueryParser.COMMA = 6;
PowerQueryParser.OPEN_BRACKET = 7;
PowerQueryParser.CLOSE_BRACKET = 8;
PowerQueryParser.OPEN_BRACE = 9;
PowerQueryParser.CLOSE_BRACE = 10;
PowerQueryParser.OPEN_PAREN = 11;
PowerQueryParser.CLOSE_PAREN = 12;
PowerQueryParser.OPTIONAL = 13;
PowerQueryParser.OPTIONAL_TEXT = 14;
PowerQueryParser.TABLE = 15;
PowerQueryParser.NULLABLE = 16;
PowerQueryParser.SEMICOLON = 17;
PowerQueryParser.SECTION = 18;
PowerQueryParser.SHARED = 19;
PowerQueryParser.AND = 20;
PowerQueryParser.OR = 21;
PowerQueryParser.OTHERWISE = 22;
PowerQueryParser.TRY = 23;
PowerQueryParser.ERROR = 24;
PowerQueryParser.FUNCTION_START = 25;
PowerQueryParser.ELLIPSES = 26;
PowerQueryParser.TYPE = 27;
PowerQueryParser.EACH = 28;
PowerQueryParser.LET = 29;
PowerQueryParser.IN = 30;
PowerQueryParser.IF = 31;
PowerQueryParser.THEN = 32;
PowerQueryParser.ELSE = 33;
PowerQueryParser.TEXT = 34;
PowerQueryParser.RECORD = 35;
PowerQueryParser.NUMBER = 36;
PowerQueryParser.NONE = 37;
PowerQueryParser.LOGICAL = 38;
PowerQueryParser.LIST = 39;
PowerQueryParser.FUNCTION = 40;
PowerQueryParser.DURATION = 41;
PowerQueryParser.DATETIMEZONE = 42;
PowerQueryParser.ANY = 43;
PowerQueryParser.ANYNONNULL = 44;
PowerQueryParser.BINARY = 45;
PowerQueryParser.DATE = 46;
PowerQueryParser.DATETIME = 47;
PowerQueryParser.AT = 48;
PowerQueryParser.AS = 49;
PowerQueryParser.ARROW = 50;
PowerQueryParser.DOTDOT = 51;
PowerQueryParser.BANG = 52;
PowerQueryParser.NOT = 53;
PowerQueryParser.PLUS = 54;
PowerQueryParser.MINUS = 55;
PowerQueryParser.META = 56;
PowerQueryParser.IS = 57;
PowerQueryParser.NEQ = 58;
PowerQueryParser.GE = 59;
PowerQueryParser.LE = 60;
PowerQueryParser.SLASH = 61;
PowerQueryParser.STAR = 62;
PowerQueryParser.AMP = 63;
PowerQueryParser.LEQ = 64;
PowerQueryParser.GEQ = 65;
PowerQueryParser.LITERAL = 66;
PowerQueryParser.TEXT_LITERAL = 67;
PowerQueryParser.IDENTIFIER = 68;
PowerQueryParser.REGULAR_IDENTIFIER = 69;
PowerQueryParser.AVAILABLE_IDENTIFIER = 70;
PowerQueryParser.KEYWORD_OR_IDENTIFIER = 71;

PowerQueryParser.RULE_document = 0;
PowerQueryParser.RULE_section_document = 1;
PowerQueryParser.RULE_section = 2;
PowerQueryParser.RULE_section_name = 3;
PowerQueryParser.RULE_section_members = 4;
PowerQueryParser.RULE_section_member = 5;
PowerQueryParser.RULE_section_member_name = 6;
PowerQueryParser.RULE_expression_document = 7;
PowerQueryParser.RULE_expression = 8;
PowerQueryParser.RULE_logical_or_expression = 9;
PowerQueryParser.RULE_logical_and_expression = 10;
PowerQueryParser.RULE_is_expression = 11;
PowerQueryParser.RULE_nullable_primitive_type = 12;
PowerQueryParser.RULE_as_expression = 13;
PowerQueryParser.RULE_equality_expression = 14;
PowerQueryParser.RULE_relational_expression = 15;
PowerQueryParser.RULE_additive_expression = 16;
PowerQueryParser.RULE_multiplicative_expression = 17;
PowerQueryParser.RULE_metadata_expression = 18;
PowerQueryParser.RULE_unary_expression = 19;
PowerQueryParser.RULE_primary_expression = 20;
PowerQueryParser.RULE_literal_expression = 21;
PowerQueryParser.RULE_identifier_expression = 22;
PowerQueryParser.RULE_identifier_reference = 23;
PowerQueryParser.RULE_exclusive_identifier_reference = 24;
PowerQueryParser.RULE_inclusive_identifier_reference = 25;
PowerQueryParser.RULE_section_access_expression = 26;
PowerQueryParser.RULE_parenthesized_expression = 27;
PowerQueryParser.RULE_not_implemented_expression = 28;
PowerQueryParser.RULE_argument_list = 29;
PowerQueryParser.RULE_list_expression = 30;
PowerQueryParser.RULE_item_list = 31;
PowerQueryParser.RULE_item = 32;
PowerQueryParser.RULE_record_expression = 33;
PowerQueryParser.RULE_field_list = 34;
PowerQueryParser.RULE_field = 35;
PowerQueryParser.RULE_field_name = 36;
PowerQueryParser.RULE_item_selector = 37;
PowerQueryParser.RULE_field_selector = 38;
PowerQueryParser.RULE_required_field_selector = 39;
PowerQueryParser.RULE_optional_field_selector = 40;
PowerQueryParser.RULE_implicit_target_field_selection = 41;
PowerQueryParser.RULE_required_projection = 42;
PowerQueryParser.RULE_optional_projection = 43;
PowerQueryParser.RULE_required_selector_list = 44;
PowerQueryParser.RULE_implicit_target_projection = 45;
PowerQueryParser.RULE_function_expression = 46;
PowerQueryParser.RULE_function_body = 47;
PowerQueryParser.RULE_parameter_list = 48;
PowerQueryParser.RULE_fixed_parameter_list = 49;
PowerQueryParser.RULE_parameter = 50;
PowerQueryParser.RULE_parameter_name = 51;
PowerQueryParser.RULE_parameter_type = 52;
PowerQueryParser.RULE_return_type = 53;
PowerQueryParser.RULE_assertion = 54;
PowerQueryParser.RULE_optional_parameter_list = 55;
PowerQueryParser.RULE_optional_parameter = 56;
PowerQueryParser.RULE_each_expression = 57;
PowerQueryParser.RULE_each_expression_body = 58;
PowerQueryParser.RULE_let_expression = 59;
PowerQueryParser.RULE_variable_list = 60;
PowerQueryParser.RULE_variable = 61;
PowerQueryParser.RULE_variable_name = 62;
PowerQueryParser.RULE_if_expression = 63;
PowerQueryParser.RULE_if_condition = 64;
PowerQueryParser.RULE_true_expression = 65;
PowerQueryParser.RULE_false_expression = 66;
PowerQueryParser.RULE_type_expression = 67;
PowerQueryParser.RULE_type_expr = 68;
PowerQueryParser.RULE_primary_type = 69;
PowerQueryParser.RULE_primitive_type = 70;
PowerQueryParser.RULE_record_type = 71;
PowerQueryParser.RULE_field_specification_list = 72;
PowerQueryParser.RULE_field_specification = 73;
PowerQueryParser.RULE_field_type_specification = 74;
PowerQueryParser.RULE_field_type = 75;
PowerQueryParser.RULE_open_record_marker = 76;
PowerQueryParser.RULE_list_type = 77;
PowerQueryParser.RULE_item_type = 78;
PowerQueryParser.RULE_function_type = 79;
PowerQueryParser.RULE_parameter_specification_list = 80;
PowerQueryParser.RULE_required_parameter_specification_list = 81;
PowerQueryParser.RULE_required_parameter_specification = 82;
PowerQueryParser.RULE_optional_parameter_specification_list = 83;
PowerQueryParser.RULE_optional_parameter_specification = 84;
PowerQueryParser.RULE_parameter_specification = 85;
PowerQueryParser.RULE_table_type = 86;
PowerQueryParser.RULE_row_type = 87;
PowerQueryParser.RULE_nullable_type = 88;
PowerQueryParser.RULE_error_raising_expression = 89;
PowerQueryParser.RULE_error_handling_expression = 90;
PowerQueryParser.RULE_protected_expression = 91;
PowerQueryParser.RULE_otherwise_clause = 92;
PowerQueryParser.RULE_default_expression = 93;
PowerQueryParser.RULE_literal_attribs = 94;
PowerQueryParser.RULE_record_literal = 95;
PowerQueryParser.RULE_literal_field_list = 96;
PowerQueryParser.RULE_literal_field = 97;
PowerQueryParser.RULE_list_literal = 98;
PowerQueryParser.RULE_literal_item_list = 99;
PowerQueryParser.RULE_any_literal = 100;

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
        this.ruleIndex = PowerQueryParser.RULE_document;
    }

	section_document() {
	    return this.getTypedRuleContext(Section_documentContext,0);
	};

	expression_document() {
	    return this.getTypedRuleContext(Expression_documentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitDocument(this);
		}
	}


}



class Section_documentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_section_document;
    }

	section() {
	    return this.getTypedRuleContext(SectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterSection_document(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitSection_document(this);
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
        this.ruleIndex = PowerQueryParser.RULE_section;
    }

	SECTION() {
	    return this.getToken(PowerQueryParser.SECTION, 0);
	};

	section_name() {
	    return this.getTypedRuleContext(Section_nameContext,0);
	};

	SEMICOLON() {
	    return this.getToken(PowerQueryParser.SEMICOLON, 0);
	};

	literal_attribs() {
	    return this.getTypedRuleContext(Literal_attribsContext,0);
	};

	section_members() {
	    return this.getTypedRuleContext(Section_membersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitSection(this);
		}
	}


}



class Section_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_section_name;
    }

	IDENTIFIER() {
	    return this.getToken(PowerQueryParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterSection_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitSection_name(this);
		}
	}


}



class Section_membersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_section_members;
    }

	section_member() {
	    return this.getTypedRuleContext(Section_memberContext,0);
	};

	section_members() {
	    return this.getTypedRuleContext(Section_membersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterSection_members(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitSection_members(this);
		}
	}


}



class Section_memberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_section_member;
    }

	section_member_name() {
	    return this.getTypedRuleContext(Section_member_nameContext,0);
	};

	EQUALS() {
	    return this.getToken(PowerQueryParser.EQUALS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMICOLON() {
	    return this.getToken(PowerQueryParser.SEMICOLON, 0);
	};

	literal_attribs() {
	    return this.getTypedRuleContext(Literal_attribsContext,0);
	};

	SHARED() {
	    return this.getToken(PowerQueryParser.SHARED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterSection_member(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitSection_member(this);
		}
	}


}



class Section_member_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_section_member_name;
    }

	IDENTIFIER() {
	    return this.getToken(PowerQueryParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterSection_member_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitSection_member_name(this);
		}
	}


}



class Expression_documentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_expression_document;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterExpression_document(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitExpression_document(this);
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
        this.ruleIndex = PowerQueryParser.RULE_expression;
    }

	logical_or_expression() {
	    return this.getTypedRuleContext(Logical_or_expressionContext,0);
	};

	each_expression() {
	    return this.getTypedRuleContext(Each_expressionContext,0);
	};

	function_expression() {
	    return this.getTypedRuleContext(Function_expressionContext,0);
	};

	let_expression() {
	    return this.getTypedRuleContext(Let_expressionContext,0);
	};

	if_expression() {
	    return this.getTypedRuleContext(If_expressionContext,0);
	};

	error_raising_expression() {
	    return this.getTypedRuleContext(Error_raising_expressionContext,0);
	};

	error_handling_expression() {
	    return this.getTypedRuleContext(Error_handling_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitExpression(this);
		}
	}


}



class Logical_or_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_logical_or_expression;
    }

	logical_and_expression() {
	    return this.getTypedRuleContext(Logical_and_expressionContext,0);
	};

	OR() {
	    return this.getToken(PowerQueryParser.OR, 0);
	};

	logical_or_expression() {
	    return this.getTypedRuleContext(Logical_or_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterLogical_or_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitLogical_or_expression(this);
		}
	}


}



class Logical_and_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_logical_and_expression;
    }

	is_expression() {
	    return this.getTypedRuleContext(Is_expressionContext,0);
	};

	logical_and_expression() {
	    return this.getTypedRuleContext(Logical_and_expressionContext,0);
	};

	AND() {
	    return this.getToken(PowerQueryParser.AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterLogical_and_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitLogical_and_expression(this);
		}
	}


}



class Is_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_is_expression;
    }

	as_expression() {
	    return this.getTypedRuleContext(As_expressionContext,0);
	};

	is_expression() {
	    return this.getTypedRuleContext(Is_expressionContext,0);
	};

	IS() {
	    return this.getToken(PowerQueryParser.IS, 0);
	};

	nullable_primitive_type() {
	    return this.getTypedRuleContext(Nullable_primitive_typeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterIs_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitIs_expression(this);
		}
	}


}



class Nullable_primitive_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_nullable_primitive_type;
    }

	primitive_type() {
	    return this.getTypedRuleContext(Primitive_typeContext,0);
	};

	NULLABLE() {
	    return this.getToken(PowerQueryParser.NULLABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterNullable_primitive_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitNullable_primitive_type(this);
		}
	}


}



class As_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_as_expression;
    }

	equality_expression() {
	    return this.getTypedRuleContext(Equality_expressionContext,0);
	};

	as_expression() {
	    return this.getTypedRuleContext(As_expressionContext,0);
	};

	AS() {
	    return this.getToken(PowerQueryParser.AS, 0);
	};

	nullable_primitive_type() {
	    return this.getTypedRuleContext(Nullable_primitive_typeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterAs_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitAs_expression(this);
		}
	}


}



class Equality_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_equality_expression;
    }

	relational_expression() {
	    return this.getTypedRuleContext(Relational_expressionContext,0);
	};

	EQUALS() {
	    return this.getToken(PowerQueryParser.EQUALS, 0);
	};

	equality_expression() {
	    return this.getTypedRuleContext(Equality_expressionContext,0);
	};

	NEQ() {
	    return this.getToken(PowerQueryParser.NEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterEquality_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitEquality_expression(this);
		}
	}


}



class Relational_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_relational_expression;
    }

	additive_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Additive_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Additive_expressionContext,i);
	    }
	};

	LE() {
	    return this.getToken(PowerQueryParser.LE, 0);
	};

	relational_expression() {
	    return this.getTypedRuleContext(Relational_expressionContext,0);
	};

	GE() {
	    return this.getToken(PowerQueryParser.GE, 0);
	};

	LEQ() {
	    return this.getToken(PowerQueryParser.LEQ, 0);
	};

	GEQ() {
	    return this.getToken(PowerQueryParser.GEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterRelational_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitRelational_expression(this);
		}
	}


}



class Additive_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_additive_expression;
    }

	multiplicative_expression() {
	    return this.getTypedRuleContext(Multiplicative_expressionContext,0);
	};

	PLUS() {
	    return this.getToken(PowerQueryParser.PLUS, 0);
	};

	additive_expression() {
	    return this.getTypedRuleContext(Additive_expressionContext,0);
	};

	MINUS() {
	    return this.getToken(PowerQueryParser.MINUS, 0);
	};

	AMP() {
	    return this.getToken(PowerQueryParser.AMP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterAdditive_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitAdditive_expression(this);
		}
	}


}



class Multiplicative_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_multiplicative_expression;
    }

	metadata_expression() {
	    return this.getTypedRuleContext(Metadata_expressionContext,0);
	};

	STAR() {
	    return this.getToken(PowerQueryParser.STAR, 0);
	};

	multiplicative_expression() {
	    return this.getTypedRuleContext(Multiplicative_expressionContext,0);
	};

	SLASH() {
	    return this.getToken(PowerQueryParser.SLASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterMultiplicative_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitMultiplicative_expression(this);
		}
	}


}



class Metadata_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_metadata_expression;
    }

	unary_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Unary_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Unary_expressionContext,i);
	    }
	};

	META() {
	    return this.getToken(PowerQueryParser.META, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterMetadata_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitMetadata_expression(this);
		}
	}


}



class Unary_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_unary_expression;
    }

	type_expression() {
	    return this.getTypedRuleContext(Type_expressionContext,0);
	};

	PLUS() {
	    return this.getToken(PowerQueryParser.PLUS, 0);
	};

	unary_expression() {
	    return this.getTypedRuleContext(Unary_expressionContext,0);
	};

	MINUS() {
	    return this.getToken(PowerQueryParser.MINUS, 0);
	};

	NOT() {
	    return this.getToken(PowerQueryParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterUnary_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitUnary_expression(this);
		}
	}


}



class Primary_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_primary_expression;
    }

	literal_expression() {
	    return this.getTypedRuleContext(Literal_expressionContext,0);
	};

	list_expression() {
	    return this.getTypedRuleContext(List_expressionContext,0);
	};

	record_expression() {
	    return this.getTypedRuleContext(Record_expressionContext,0);
	};

	identifier_expression() {
	    return this.getTypedRuleContext(Identifier_expressionContext,0);
	};

	section_access_expression() {
	    return this.getTypedRuleContext(Section_access_expressionContext,0);
	};

	parenthesized_expression() {
	    return this.getTypedRuleContext(Parenthesized_expressionContext,0);
	};

	implicit_target_field_selection() {
	    return this.getTypedRuleContext(Implicit_target_field_selectionContext,0);
	};

	implicit_target_projection() {
	    return this.getTypedRuleContext(Implicit_target_projectionContext,0);
	};

	not_implemented_expression() {
	    return this.getTypedRuleContext(Not_implemented_expressionContext,0);
	};

	primary_expression() {
	    return this.getTypedRuleContext(Primary_expressionContext,0);
	};

	field_selector() {
	    return this.getTypedRuleContext(Field_selectorContext,0);
	};

	required_projection() {
	    return this.getTypedRuleContext(Required_projectionContext,0);
	};

	optional_projection() {
	    return this.getTypedRuleContext(Optional_projectionContext,0);
	};

	OPEN_BRACE() {
	    return this.getToken(PowerQueryParser.OPEN_BRACE, 0);
	};

	item_selector() {
	    return this.getTypedRuleContext(Item_selectorContext,0);
	};

	CLOSE_BRACE() {
	    return this.getToken(PowerQueryParser.CLOSE_BRACE, 0);
	};

	OPTIONAL() {
	    return this.getToken(PowerQueryParser.OPTIONAL, 0);
	};

	OPEN_PAREN() {
	    return this.getToken(PowerQueryParser.OPEN_PAREN, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(PowerQueryParser.CLOSE_PAREN, 0);
	};

	argument_list() {
	    return this.getTypedRuleContext(Argument_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterPrimary_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitPrimary_expression(this);
		}
	}


}



class Literal_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_literal_expression;
    }

	LITERAL() {
	    return this.getToken(PowerQueryParser.LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterLiteral_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitLiteral_expression(this);
		}
	}


}



class Identifier_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_identifier_expression;
    }

	identifier_reference() {
	    return this.getTypedRuleContext(Identifier_referenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterIdentifier_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitIdentifier_expression(this);
		}
	}


}



class Identifier_referenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_identifier_reference;
    }

	exclusive_identifier_reference() {
	    return this.getTypedRuleContext(Exclusive_identifier_referenceContext,0);
	};

	inclusive_identifier_reference() {
	    return this.getTypedRuleContext(Inclusive_identifier_referenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterIdentifier_reference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitIdentifier_reference(this);
		}
	}


}



class Exclusive_identifier_referenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_exclusive_identifier_reference;
    }

	IDENTIFIER() {
	    return this.getToken(PowerQueryParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterExclusive_identifier_reference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitExclusive_identifier_reference(this);
		}
	}


}



class Inclusive_identifier_referenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_inclusive_identifier_reference;
    }

	AT() {
	    return this.getToken(PowerQueryParser.AT, 0);
	};

	IDENTIFIER() {
	    return this.getToken(PowerQueryParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterInclusive_identifier_reference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitInclusive_identifier_reference(this);
		}
	}


}



class Section_access_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_section_access_expression;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerQueryParser.IDENTIFIER);
	    } else {
	        return this.getToken(PowerQueryParser.IDENTIFIER, i);
	    }
	};


	BANG() {
	    return this.getToken(PowerQueryParser.BANG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterSection_access_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitSection_access_expression(this);
		}
	}


}



class Parenthesized_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_parenthesized_expression;
    }

	OPEN_PAREN() {
	    return this.getToken(PowerQueryParser.OPEN_PAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CLOSE_PAREN() {
	    return this.getToken(PowerQueryParser.CLOSE_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterParenthesized_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitParenthesized_expression(this);
		}
	}


}



class Not_implemented_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_not_implemented_expression;
    }

	ELLIPSES() {
	    return this.getToken(PowerQueryParser.ELLIPSES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterNot_implemented_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitNot_implemented_expression(this);
		}
	}


}



class Argument_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_argument_list;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	COMMA() {
	    return this.getToken(PowerQueryParser.COMMA, 0);
	};

	argument_list() {
	    return this.getTypedRuleContext(Argument_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterArgument_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitArgument_list(this);
		}
	}


}



class List_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_list_expression;
    }

	OPEN_BRACE() {
	    return this.getToken(PowerQueryParser.OPEN_BRACE, 0);
	};

	CLOSE_BRACE() {
	    return this.getToken(PowerQueryParser.CLOSE_BRACE, 0);
	};

	item_list() {
	    return this.getTypedRuleContext(Item_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterList_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitList_expression(this);
		}
	}


}



class Item_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_item_list;
    }

	item() {
	    return this.getTypedRuleContext(ItemContext,0);
	};

	COMMA() {
	    return this.getToken(PowerQueryParser.COMMA, 0);
	};

	item_list() {
	    return this.getTypedRuleContext(Item_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterItem_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitItem_list(this);
		}
	}


}



class ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_item;
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
	    return this.getToken(PowerQueryParser.DOTDOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitItem(this);
		}
	}


}



class Record_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_record_expression;
    }

	OPEN_BRACKET() {
	    return this.getToken(PowerQueryParser.OPEN_BRACKET, 0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(PowerQueryParser.CLOSE_BRACKET, 0);
	};

	field_list() {
	    return this.getTypedRuleContext(Field_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterRecord_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitRecord_expression(this);
		}
	}


}



class Field_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_field_list;
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	COMMA() {
	    return this.getToken(PowerQueryParser.COMMA, 0);
	};

	field_list() {
	    return this.getTypedRuleContext(Field_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterField_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitField_list(this);
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
        this.ruleIndex = PowerQueryParser.RULE_field;
    }

	field_name() {
	    return this.getTypedRuleContext(Field_nameContext,0);
	};

	EQUALS() {
	    return this.getToken(PowerQueryParser.EQUALS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitField(this);
		}
	}


}



class Field_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_field_name;
    }

	IDENTIFIER() {
	    return this.getToken(PowerQueryParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterField_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitField_name(this);
		}
	}


}



class Item_selectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_item_selector;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterItem_selector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitItem_selector(this);
		}
	}


}



class Field_selectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_field_selector;
    }

	required_field_selector() {
	    return this.getTypedRuleContext(Required_field_selectorContext,0);
	};

	optional_field_selector() {
	    return this.getTypedRuleContext(Optional_field_selectorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterField_selector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitField_selector(this);
		}
	}


}



class Required_field_selectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_required_field_selector;
    }

	OPEN_BRACKET() {
	    return this.getToken(PowerQueryParser.OPEN_BRACKET, 0);
	};

	field_name() {
	    return this.getTypedRuleContext(Field_nameContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(PowerQueryParser.CLOSE_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterRequired_field_selector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitRequired_field_selector(this);
		}
	}


}



class Optional_field_selectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_optional_field_selector;
    }

	OPEN_BRACKET() {
	    return this.getToken(PowerQueryParser.OPEN_BRACKET, 0);
	};

	field_name() {
	    return this.getTypedRuleContext(Field_nameContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(PowerQueryParser.CLOSE_BRACKET, 0);
	};

	OPTIONAL() {
	    return this.getToken(PowerQueryParser.OPTIONAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterOptional_field_selector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitOptional_field_selector(this);
		}
	}


}



class Implicit_target_field_selectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_implicit_target_field_selection;
    }

	field_selector() {
	    return this.getTypedRuleContext(Field_selectorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterImplicit_target_field_selection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitImplicit_target_field_selection(this);
		}
	}


}



class Required_projectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_required_projection;
    }

	OPEN_BRACKET() {
	    return this.getToken(PowerQueryParser.OPEN_BRACKET, 0);
	};

	required_selector_list() {
	    return this.getTypedRuleContext(Required_selector_listContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(PowerQueryParser.CLOSE_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterRequired_projection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitRequired_projection(this);
		}
	}


}



class Optional_projectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_optional_projection;
    }

	OPEN_BRACKET() {
	    return this.getToken(PowerQueryParser.OPEN_BRACKET, 0);
	};

	required_selector_list() {
	    return this.getTypedRuleContext(Required_selector_listContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(PowerQueryParser.CLOSE_BRACKET, 0);
	};

	OPTIONAL() {
	    return this.getToken(PowerQueryParser.OPTIONAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterOptional_projection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitOptional_projection(this);
		}
	}


}



class Required_selector_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_required_selector_list;
    }

	required_field_selector() {
	    return this.getTypedRuleContext(Required_field_selectorContext,0);
	};

	COMMA() {
	    return this.getToken(PowerQueryParser.COMMA, 0);
	};

	required_selector_list() {
	    return this.getTypedRuleContext(Required_selector_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterRequired_selector_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitRequired_selector_list(this);
		}
	}


}



class Implicit_target_projectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_implicit_target_projection;
    }

	required_projection() {
	    return this.getTypedRuleContext(Required_projectionContext,0);
	};

	optional_projection() {
	    return this.getTypedRuleContext(Optional_projectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterImplicit_target_projection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitImplicit_target_projection(this);
		}
	}


}



class Function_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_function_expression;
    }

	OPEN_PAREN() {
	    return this.getToken(PowerQueryParser.OPEN_PAREN, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(PowerQueryParser.CLOSE_PAREN, 0);
	};

	ARROW() {
	    return this.getToken(PowerQueryParser.ARROW, 0);
	};

	function_body() {
	    return this.getTypedRuleContext(Function_bodyContext,0);
	};

	parameter_list() {
	    return this.getTypedRuleContext(Parameter_listContext,0);
	};

	return_type() {
	    return this.getTypedRuleContext(Return_typeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterFunction_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitFunction_expression(this);
		}
	}


}



class Function_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_function_body;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterFunction_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitFunction_body(this);
		}
	}


}



class Parameter_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_parameter_list;
    }

	fixed_parameter_list() {
	    return this.getTypedRuleContext(Fixed_parameter_listContext,0);
	};

	COMMA() {
	    return this.getToken(PowerQueryParser.COMMA, 0);
	};

	optional_parameter_list() {
	    return this.getTypedRuleContext(Optional_parameter_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterParameter_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitParameter_list(this);
		}
	}


}



class Fixed_parameter_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_fixed_parameter_list;
    }

	parameter() {
	    return this.getTypedRuleContext(ParameterContext,0);
	};

	COMMA() {
	    return this.getToken(PowerQueryParser.COMMA, 0);
	};

	fixed_parameter_list() {
	    return this.getTypedRuleContext(Fixed_parameter_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterFixed_parameter_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitFixed_parameter_list(this);
		}
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_parameter;
    }

	parameter_name() {
	    return this.getTypedRuleContext(Parameter_nameContext,0);
	};

	parameter_type() {
	    return this.getTypedRuleContext(Parameter_typeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitParameter(this);
		}
	}


}



class Parameter_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_parameter_name;
    }

	IDENTIFIER() {
	    return this.getToken(PowerQueryParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterParameter_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitParameter_name(this);
		}
	}


}



class Parameter_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_parameter_type;
    }

	assertion() {
	    return this.getTypedRuleContext(AssertionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterParameter_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitParameter_type(this);
		}
	}


}



class Return_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_return_type;
    }

	assertion() {
	    return this.getTypedRuleContext(AssertionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterReturn_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitReturn_type(this);
		}
	}


}



class AssertionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_assertion;
    }

	AS() {
	    return this.getToken(PowerQueryParser.AS, 0);
	};

	nullable_primitive_type() {
	    return this.getTypedRuleContext(Nullable_primitive_typeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterAssertion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitAssertion(this);
		}
	}


}



class Optional_parameter_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_optional_parameter_list;
    }

	optional_parameter() {
	    return this.getTypedRuleContext(Optional_parameterContext,0);
	};

	COMMA() {
	    return this.getToken(PowerQueryParser.COMMA, 0);
	};

	optional_parameter_list() {
	    return this.getTypedRuleContext(Optional_parameter_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterOptional_parameter_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitOptional_parameter_list(this);
		}
	}


}



class Optional_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_optional_parameter;
    }

	OPTIONAL_TEXT() {
	    return this.getToken(PowerQueryParser.OPTIONAL_TEXT, 0);
	};

	parameter() {
	    return this.getTypedRuleContext(ParameterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterOptional_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitOptional_parameter(this);
		}
	}


}



class Each_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_each_expression;
    }

	EACH() {
	    return this.getToken(PowerQueryParser.EACH, 0);
	};

	each_expression_body() {
	    return this.getTypedRuleContext(Each_expression_bodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterEach_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitEach_expression(this);
		}
	}


}



class Each_expression_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_each_expression_body;
    }

	function_body() {
	    return this.getTypedRuleContext(Function_bodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterEach_expression_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitEach_expression_body(this);
		}
	}


}



class Let_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_let_expression;
    }

	LET() {
	    return this.getToken(PowerQueryParser.LET, 0);
	};

	variable_list() {
	    return this.getTypedRuleContext(Variable_listContext,0);
	};

	IN() {
	    return this.getToken(PowerQueryParser.IN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterLet_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitLet_expression(this);
		}
	}


}



class Variable_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_variable_list;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	COMMA() {
	    return this.getToken(PowerQueryParser.COMMA, 0);
	};

	variable_list() {
	    return this.getTypedRuleContext(Variable_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterVariable_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitVariable_list(this);
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
        this.ruleIndex = PowerQueryParser.RULE_variable;
    }

	variable_name() {
	    return this.getTypedRuleContext(Variable_nameContext,0);
	};

	EQUALS() {
	    return this.getToken(PowerQueryParser.EQUALS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitVariable(this);
		}
	}


}



class Variable_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_variable_name;
    }

	IDENTIFIER() {
	    return this.getToken(PowerQueryParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterVariable_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitVariable_name(this);
		}
	}


}



class If_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_if_expression;
    }

	IF() {
	    return this.getToken(PowerQueryParser.IF, 0);
	};

	if_condition() {
	    return this.getTypedRuleContext(If_conditionContext,0);
	};

	THEN() {
	    return this.getToken(PowerQueryParser.THEN, 0);
	};

	true_expression() {
	    return this.getTypedRuleContext(True_expressionContext,0);
	};

	ELSE() {
	    return this.getToken(PowerQueryParser.ELSE, 0);
	};

	false_expression() {
	    return this.getTypedRuleContext(False_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterIf_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitIf_expression(this);
		}
	}


}



class If_conditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_if_condition;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterIf_condition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitIf_condition(this);
		}
	}


}



class True_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_true_expression;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterTrue_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitTrue_expression(this);
		}
	}


}



class False_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_false_expression;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterFalse_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitFalse_expression(this);
		}
	}


}



class Type_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_type_expression;
    }

	primary_expression() {
	    return this.getTypedRuleContext(Primary_expressionContext,0);
	};

	TYPE() {
	    return this.getToken(PowerQueryParser.TYPE, 0);
	};

	primary_type() {
	    return this.getTypedRuleContext(Primary_typeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterType_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitType_expression(this);
		}
	}


}



class Type_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_type_expr;
    }

	parenthesized_expression() {
	    return this.getTypedRuleContext(Parenthesized_expressionContext,0);
	};

	primary_type() {
	    return this.getTypedRuleContext(Primary_typeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterType_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitType_expr(this);
		}
	}


}



class Primary_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_primary_type;
    }

	primitive_type() {
	    return this.getTypedRuleContext(Primitive_typeContext,0);
	};

	record_type() {
	    return this.getTypedRuleContext(Record_typeContext,0);
	};

	list_type() {
	    return this.getTypedRuleContext(List_typeContext,0);
	};

	function_type() {
	    return this.getTypedRuleContext(Function_typeContext,0);
	};

	table_type() {
	    return this.getTypedRuleContext(Table_typeContext,0);
	};

	nullable_type() {
	    return this.getTypedRuleContext(Nullable_typeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterPrimary_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitPrimary_type(this);
		}
	}


}



class Primitive_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_primitive_type;
    }

	ANY() {
	    return this.getToken(PowerQueryParser.ANY, 0);
	};

	ANYNONNULL() {
	    return this.getToken(PowerQueryParser.ANYNONNULL, 0);
	};

	BINARY() {
	    return this.getToken(PowerQueryParser.BINARY, 0);
	};

	DATE() {
	    return this.getToken(PowerQueryParser.DATE, 0);
	};

	DATETIME() {
	    return this.getToken(PowerQueryParser.DATETIME, 0);
	};

	DATETIMEZONE() {
	    return this.getToken(PowerQueryParser.DATETIMEZONE, 0);
	};

	DURATION() {
	    return this.getToken(PowerQueryParser.DURATION, 0);
	};

	FUNCTION() {
	    return this.getToken(PowerQueryParser.FUNCTION, 0);
	};

	LIST() {
	    return this.getToken(PowerQueryParser.LIST, 0);
	};

	LOGICAL() {
	    return this.getToken(PowerQueryParser.LOGICAL, 0);
	};

	NONE() {
	    return this.getToken(PowerQueryParser.NONE, 0);
	};

	NUMBER() {
	    return this.getToken(PowerQueryParser.NUMBER, 0);
	};

	RECORD() {
	    return this.getToken(PowerQueryParser.RECORD, 0);
	};

	TABLE() {
	    return this.getToken(PowerQueryParser.TABLE, 0);
	};

	TEXT() {
	    return this.getToken(PowerQueryParser.TEXT, 0);
	};

	TYPE() {
	    return this.getToken(PowerQueryParser.TYPE, 0);
	};

	LITERAL() {
	    return this.getToken(PowerQueryParser.LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterPrimitive_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitPrimitive_type(this);
		}
	}


}



class Record_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_record_type;
    }

	OPEN_BRACKET() {
	    return this.getToken(PowerQueryParser.OPEN_BRACKET, 0);
	};

	open_record_marker() {
	    return this.getTypedRuleContext(Open_record_markerContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(PowerQueryParser.CLOSE_BRACKET, 0);
	};

	field_specification_list() {
	    return this.getTypedRuleContext(Field_specification_listContext,0);
	};

	COMMA() {
	    return this.getToken(PowerQueryParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterRecord_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitRecord_type(this);
		}
	}


}



class Field_specification_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_field_specification_list;
    }

	field_specification() {
	    return this.getTypedRuleContext(Field_specificationContext,0);
	};

	COMMA() {
	    return this.getToken(PowerQueryParser.COMMA, 0);
	};

	field_specification_list() {
	    return this.getTypedRuleContext(Field_specification_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterField_specification_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitField_specification_list(this);
		}
	}


}



class Field_specificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_field_specification;
    }

	field_name() {
	    return this.getTypedRuleContext(Field_nameContext,0);
	};

	OPTIONAL_TEXT() {
	    return this.getToken(PowerQueryParser.OPTIONAL_TEXT, 0);
	};

	field_type_specification() {
	    return this.getTypedRuleContext(Field_type_specificationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterField_specification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitField_specification(this);
		}
	}


}



class Field_type_specificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_field_type_specification;
    }

	EQUALS() {
	    return this.getToken(PowerQueryParser.EQUALS, 0);
	};

	field_type() {
	    return this.getTypedRuleContext(Field_typeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterField_type_specification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitField_type_specification(this);
		}
	}


}



class Field_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_field_type;
    }

	type_expr() {
	    return this.getTypedRuleContext(Type_exprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterField_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitField_type(this);
		}
	}


}



class Open_record_markerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_open_record_marker;
    }

	ELLIPSES() {
	    return this.getToken(PowerQueryParser.ELLIPSES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterOpen_record_marker(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitOpen_record_marker(this);
		}
	}


}



class List_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_list_type;
    }

	OPEN_BRACE() {
	    return this.getToken(PowerQueryParser.OPEN_BRACE, 0);
	};

	item_type() {
	    return this.getTypedRuleContext(Item_typeContext,0);
	};

	CLOSE_BRACE() {
	    return this.getToken(PowerQueryParser.CLOSE_BRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterList_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitList_type(this);
		}
	}


}



class Item_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_item_type;
    }

	type_expr() {
	    return this.getTypedRuleContext(Type_exprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterItem_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitItem_type(this);
		}
	}


}



class Function_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_function_type;
    }

	FUNCTION_START() {
	    return this.getToken(PowerQueryParser.FUNCTION_START, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(PowerQueryParser.CLOSE_PAREN, 0);
	};

	return_type() {
	    return this.getTypedRuleContext(Return_typeContext,0);
	};

	parameter_specification_list() {
	    return this.getTypedRuleContext(Parameter_specification_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterFunction_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitFunction_type(this);
		}
	}


}



class Parameter_specification_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_parameter_specification_list;
    }

	required_parameter_specification_list() {
	    return this.getTypedRuleContext(Required_parameter_specification_listContext,0);
	};

	COMMA() {
	    return this.getToken(PowerQueryParser.COMMA, 0);
	};

	optional_parameter_specification_list() {
	    return this.getTypedRuleContext(Optional_parameter_specification_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterParameter_specification_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitParameter_specification_list(this);
		}
	}


}



class Required_parameter_specification_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_required_parameter_specification_list;
    }

	required_parameter_specification() {
	    return this.getTypedRuleContext(Required_parameter_specificationContext,0);
	};

	COMMA() {
	    return this.getToken(PowerQueryParser.COMMA, 0);
	};

	required_parameter_specification_list() {
	    return this.getTypedRuleContext(Required_parameter_specification_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterRequired_parameter_specification_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitRequired_parameter_specification_list(this);
		}
	}


}



class Required_parameter_specificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_required_parameter_specification;
    }

	parameter_specification() {
	    return this.getTypedRuleContext(Parameter_specificationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterRequired_parameter_specification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitRequired_parameter_specification(this);
		}
	}


}



class Optional_parameter_specification_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_optional_parameter_specification_list;
    }

	optional_parameter_specification() {
	    return this.getTypedRuleContext(Optional_parameter_specificationContext,0);
	};

	COMMA() {
	    return this.getToken(PowerQueryParser.COMMA, 0);
	};

	optional_parameter_specification_list() {
	    return this.getTypedRuleContext(Optional_parameter_specification_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterOptional_parameter_specification_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitOptional_parameter_specification_list(this);
		}
	}


}



class Optional_parameter_specificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_optional_parameter_specification;
    }

	OPTIONAL_TEXT() {
	    return this.getToken(PowerQueryParser.OPTIONAL_TEXT, 0);
	};

	parameter_specification() {
	    return this.getTypedRuleContext(Parameter_specificationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterOptional_parameter_specification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitOptional_parameter_specification(this);
		}
	}


}



class Parameter_specificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_parameter_specification;
    }

	parameter_name() {
	    return this.getTypedRuleContext(Parameter_nameContext,0);
	};

	parameter_type() {
	    return this.getTypedRuleContext(Parameter_typeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterParameter_specification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitParameter_specification(this);
		}
	}


}



class Table_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_table_type;
    }

	TABLE() {
	    return this.getToken(PowerQueryParser.TABLE, 0);
	};

	row_type() {
	    return this.getTypedRuleContext(Row_typeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterTable_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitTable_type(this);
		}
	}


}



class Row_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_row_type;
    }

	OPEN_BRACKET() {
	    return this.getToken(PowerQueryParser.OPEN_BRACKET, 0);
	};

	field_specification_list() {
	    return this.getTypedRuleContext(Field_specification_listContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(PowerQueryParser.CLOSE_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterRow_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitRow_type(this);
		}
	}


}



class Nullable_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_nullable_type;
    }

	NULLABLE() {
	    return this.getToken(PowerQueryParser.NULLABLE, 0);
	};

	type_expr() {
	    return this.getTypedRuleContext(Type_exprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterNullable_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitNullable_type(this);
		}
	}


}



class Error_raising_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_error_raising_expression;
    }

	ERROR() {
	    return this.getToken(PowerQueryParser.ERROR, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterError_raising_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitError_raising_expression(this);
		}
	}


}



class Error_handling_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_error_handling_expression;
    }

	TRY() {
	    return this.getToken(PowerQueryParser.TRY, 0);
	};

	protected_expression() {
	    return this.getTypedRuleContext(Protected_expressionContext,0);
	};

	otherwise_clause() {
	    return this.getTypedRuleContext(Otherwise_clauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterError_handling_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitError_handling_expression(this);
		}
	}


}



class Protected_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_protected_expression;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterProtected_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitProtected_expression(this);
		}
	}


}



class Otherwise_clauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_otherwise_clause;
    }

	OTHERWISE() {
	    return this.getToken(PowerQueryParser.OTHERWISE, 0);
	};

	default_expression() {
	    return this.getTypedRuleContext(Default_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterOtherwise_clause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitOtherwise_clause(this);
		}
	}


}



class Default_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_default_expression;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterDefault_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitDefault_expression(this);
		}
	}


}



class Literal_attribsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_literal_attribs;
    }

	record_literal() {
	    return this.getTypedRuleContext(Record_literalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterLiteral_attribs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitLiteral_attribs(this);
		}
	}


}



class Record_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_record_literal;
    }

	OPEN_BRACKET() {
	    return this.getToken(PowerQueryParser.OPEN_BRACKET, 0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(PowerQueryParser.CLOSE_BRACKET, 0);
	};

	literal_field_list() {
	    return this.getTypedRuleContext(Literal_field_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterRecord_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitRecord_literal(this);
		}
	}


}



class Literal_field_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_literal_field_list;
    }

	literal_field() {
	    return this.getTypedRuleContext(Literal_fieldContext,0);
	};

	COMMA() {
	    return this.getToken(PowerQueryParser.COMMA, 0);
	};

	literal_field_list() {
	    return this.getTypedRuleContext(Literal_field_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterLiteral_field_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitLiteral_field_list(this);
		}
	}


}



class Literal_fieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_literal_field;
    }

	field_name() {
	    return this.getTypedRuleContext(Field_nameContext,0);
	};

	EQUALS() {
	    return this.getToken(PowerQueryParser.EQUALS, 0);
	};

	any_literal() {
	    return this.getTypedRuleContext(Any_literalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterLiteral_field(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitLiteral_field(this);
		}
	}


}



class List_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_list_literal;
    }

	OPEN_BRACE() {
	    return this.getToken(PowerQueryParser.OPEN_BRACE, 0);
	};

	CLOSE_BRACE() {
	    return this.getToken(PowerQueryParser.CLOSE_BRACE, 0);
	};

	literal_item_list() {
	    return this.getTypedRuleContext(Literal_item_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterList_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitList_literal(this);
		}
	}


}



class Literal_item_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_literal_item_list;
    }

	any_literal() {
	    return this.getTypedRuleContext(Any_literalContext,0);
	};

	COMMA() {
	    return this.getToken(PowerQueryParser.COMMA, 0);
	};

	literal_item_list() {
	    return this.getTypedRuleContext(Literal_item_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterLiteral_item_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitLiteral_item_list(this);
		}
	}


}



class Any_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerQueryParser.RULE_any_literal;
    }

	record_literal() {
	    return this.getTypedRuleContext(Record_literalContext,0);
	};

	list_literal() {
	    return this.getTypedRuleContext(List_literalContext,0);
	};

	LITERAL() {
	    return this.getToken(PowerQueryParser.LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.enterAny_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerQueryParserListener ) {
	        listener.exitAny_literal(this);
		}
	}


}




PowerQueryParser.DocumentContext = DocumentContext; 
PowerQueryParser.Section_documentContext = Section_documentContext; 
PowerQueryParser.SectionContext = SectionContext; 
PowerQueryParser.Section_nameContext = Section_nameContext; 
PowerQueryParser.Section_membersContext = Section_membersContext; 
PowerQueryParser.Section_memberContext = Section_memberContext; 
PowerQueryParser.Section_member_nameContext = Section_member_nameContext; 
PowerQueryParser.Expression_documentContext = Expression_documentContext; 
PowerQueryParser.ExpressionContext = ExpressionContext; 
PowerQueryParser.Logical_or_expressionContext = Logical_or_expressionContext; 
PowerQueryParser.Logical_and_expressionContext = Logical_and_expressionContext; 
PowerQueryParser.Is_expressionContext = Is_expressionContext; 
PowerQueryParser.Nullable_primitive_typeContext = Nullable_primitive_typeContext; 
PowerQueryParser.As_expressionContext = As_expressionContext; 
PowerQueryParser.Equality_expressionContext = Equality_expressionContext; 
PowerQueryParser.Relational_expressionContext = Relational_expressionContext; 
PowerQueryParser.Additive_expressionContext = Additive_expressionContext; 
PowerQueryParser.Multiplicative_expressionContext = Multiplicative_expressionContext; 
PowerQueryParser.Metadata_expressionContext = Metadata_expressionContext; 
PowerQueryParser.Unary_expressionContext = Unary_expressionContext; 
PowerQueryParser.Primary_expressionContext = Primary_expressionContext; 
PowerQueryParser.Literal_expressionContext = Literal_expressionContext; 
PowerQueryParser.Identifier_expressionContext = Identifier_expressionContext; 
PowerQueryParser.Identifier_referenceContext = Identifier_referenceContext; 
PowerQueryParser.Exclusive_identifier_referenceContext = Exclusive_identifier_referenceContext; 
PowerQueryParser.Inclusive_identifier_referenceContext = Inclusive_identifier_referenceContext; 
PowerQueryParser.Section_access_expressionContext = Section_access_expressionContext; 
PowerQueryParser.Parenthesized_expressionContext = Parenthesized_expressionContext; 
PowerQueryParser.Not_implemented_expressionContext = Not_implemented_expressionContext; 
PowerQueryParser.Argument_listContext = Argument_listContext; 
PowerQueryParser.List_expressionContext = List_expressionContext; 
PowerQueryParser.Item_listContext = Item_listContext; 
PowerQueryParser.ItemContext = ItemContext; 
PowerQueryParser.Record_expressionContext = Record_expressionContext; 
PowerQueryParser.Field_listContext = Field_listContext; 
PowerQueryParser.FieldContext = FieldContext; 
PowerQueryParser.Field_nameContext = Field_nameContext; 
PowerQueryParser.Item_selectorContext = Item_selectorContext; 
PowerQueryParser.Field_selectorContext = Field_selectorContext; 
PowerQueryParser.Required_field_selectorContext = Required_field_selectorContext; 
PowerQueryParser.Optional_field_selectorContext = Optional_field_selectorContext; 
PowerQueryParser.Implicit_target_field_selectionContext = Implicit_target_field_selectionContext; 
PowerQueryParser.Required_projectionContext = Required_projectionContext; 
PowerQueryParser.Optional_projectionContext = Optional_projectionContext; 
PowerQueryParser.Required_selector_listContext = Required_selector_listContext; 
PowerQueryParser.Implicit_target_projectionContext = Implicit_target_projectionContext; 
PowerQueryParser.Function_expressionContext = Function_expressionContext; 
PowerQueryParser.Function_bodyContext = Function_bodyContext; 
PowerQueryParser.Parameter_listContext = Parameter_listContext; 
PowerQueryParser.Fixed_parameter_listContext = Fixed_parameter_listContext; 
PowerQueryParser.ParameterContext = ParameterContext; 
PowerQueryParser.Parameter_nameContext = Parameter_nameContext; 
PowerQueryParser.Parameter_typeContext = Parameter_typeContext; 
PowerQueryParser.Return_typeContext = Return_typeContext; 
PowerQueryParser.AssertionContext = AssertionContext; 
PowerQueryParser.Optional_parameter_listContext = Optional_parameter_listContext; 
PowerQueryParser.Optional_parameterContext = Optional_parameterContext; 
PowerQueryParser.Each_expressionContext = Each_expressionContext; 
PowerQueryParser.Each_expression_bodyContext = Each_expression_bodyContext; 
PowerQueryParser.Let_expressionContext = Let_expressionContext; 
PowerQueryParser.Variable_listContext = Variable_listContext; 
PowerQueryParser.VariableContext = VariableContext; 
PowerQueryParser.Variable_nameContext = Variable_nameContext; 
PowerQueryParser.If_expressionContext = If_expressionContext; 
PowerQueryParser.If_conditionContext = If_conditionContext; 
PowerQueryParser.True_expressionContext = True_expressionContext; 
PowerQueryParser.False_expressionContext = False_expressionContext; 
PowerQueryParser.Type_expressionContext = Type_expressionContext; 
PowerQueryParser.Type_exprContext = Type_exprContext; 
PowerQueryParser.Primary_typeContext = Primary_typeContext; 
PowerQueryParser.Primitive_typeContext = Primitive_typeContext; 
PowerQueryParser.Record_typeContext = Record_typeContext; 
PowerQueryParser.Field_specification_listContext = Field_specification_listContext; 
PowerQueryParser.Field_specificationContext = Field_specificationContext; 
PowerQueryParser.Field_type_specificationContext = Field_type_specificationContext; 
PowerQueryParser.Field_typeContext = Field_typeContext; 
PowerQueryParser.Open_record_markerContext = Open_record_markerContext; 
PowerQueryParser.List_typeContext = List_typeContext; 
PowerQueryParser.Item_typeContext = Item_typeContext; 
PowerQueryParser.Function_typeContext = Function_typeContext; 
PowerQueryParser.Parameter_specification_listContext = Parameter_specification_listContext; 
PowerQueryParser.Required_parameter_specification_listContext = Required_parameter_specification_listContext; 
PowerQueryParser.Required_parameter_specificationContext = Required_parameter_specificationContext; 
PowerQueryParser.Optional_parameter_specification_listContext = Optional_parameter_specification_listContext; 
PowerQueryParser.Optional_parameter_specificationContext = Optional_parameter_specificationContext; 
PowerQueryParser.Parameter_specificationContext = Parameter_specificationContext; 
PowerQueryParser.Table_typeContext = Table_typeContext; 
PowerQueryParser.Row_typeContext = Row_typeContext; 
PowerQueryParser.Nullable_typeContext = Nullable_typeContext; 
PowerQueryParser.Error_raising_expressionContext = Error_raising_expressionContext; 
PowerQueryParser.Error_handling_expressionContext = Error_handling_expressionContext; 
PowerQueryParser.Protected_expressionContext = Protected_expressionContext; 
PowerQueryParser.Otherwise_clauseContext = Otherwise_clauseContext; 
PowerQueryParser.Default_expressionContext = Default_expressionContext; 
PowerQueryParser.Literal_attribsContext = Literal_attribsContext; 
PowerQueryParser.Record_literalContext = Record_literalContext; 
PowerQueryParser.Literal_field_listContext = Literal_field_listContext; 
PowerQueryParser.Literal_fieldContext = Literal_fieldContext; 
PowerQueryParser.List_literalContext = List_literalContext; 
PowerQueryParser.Literal_item_listContext = Literal_item_listContext; 
PowerQueryParser.Any_literalContext = Any_literalContext; 
