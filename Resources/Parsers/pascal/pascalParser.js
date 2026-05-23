// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/pascal/pascal.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import pascalListener from './pascalListener.js';
const serializedATN = [4,1,80,800,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
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
0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,209,8,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,217,
8,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,228,8,3,10,3,12,3,231,9,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,243,8,5,10,5,12,5,246,9,5,1,5,
1,5,1,6,1,6,1,7,1,7,1,7,1,7,4,7,256,8,7,11,7,12,7,257,1,8,1,8,1,8,1,8,1,
9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,
279,8,10,1,11,1,11,3,11,283,8,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,
1,16,1,16,1,17,1,17,1,17,1,17,4,17,299,8,17,11,17,12,17,300,1,18,1,18,1,
18,1,18,1,18,3,18,308,8,18,1,19,1,19,3,19,312,8,19,1,19,1,19,1,19,1,20,1,
20,3,20,319,8,20,1,21,1,21,1,21,3,21,324,8,21,1,22,1,22,1,22,1,22,3,22,330,
8,22,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,25,1,25,3,25,342,8,25,1,26,
1,26,1,26,3,26,347,8,26,1,27,1,27,1,27,1,27,3,27,353,8,27,1,28,1,28,1,28,
1,28,3,28,359,8,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
1,29,1,29,1,29,1,29,1,29,3,29,377,8,29,1,30,1,30,1,30,5,30,382,8,30,10,30,
12,30,385,9,30,1,31,1,31,1,32,1,32,1,33,1,33,3,33,393,8,33,1,33,1,33,1,34,
1,34,1,34,3,34,400,8,34,1,34,3,34,403,8,34,1,35,1,35,1,35,5,35,408,8,35,
10,35,12,35,411,9,35,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,5,
37,423,8,37,10,37,12,37,426,9,37,1,38,1,38,1,38,1,38,1,38,3,38,433,8,38,
1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,41,1,41,1,42,1,42,1,
42,1,42,3,42,451,8,42,1,43,1,43,1,43,1,44,1,44,1,44,1,44,5,44,460,8,44,10,
44,12,44,463,9,44,1,44,1,44,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,47,1,47,
3,47,476,8,47,1,48,1,48,1,48,3,48,481,8,48,1,48,1,48,1,48,1,49,1,49,1,49,
1,49,5,49,490,8,49,10,49,12,49,493,9,49,1,49,1,49,1,50,1,50,1,50,1,50,1,
50,1,50,1,50,3,50,504,8,50,1,51,1,51,1,51,1,51,1,52,1,52,1,52,5,52,513,8,
52,10,52,12,52,516,9,52,1,53,1,53,1,53,5,53,521,8,53,10,53,12,53,524,9,53,
1,54,1,54,1,54,3,54,529,8,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,56,1,56,
1,56,1,56,1,56,3,56,543,8,56,1,57,1,57,3,57,547,8,57,1,58,1,58,1,58,1,58,
3,58,553,8,58,1,59,1,59,1,59,1,59,1,60,1,60,1,60,3,60,562,8,60,1,60,1,60,
1,60,1,60,5,60,568,8,60,10,60,12,60,571,9,60,1,60,1,60,1,60,1,60,1,60,1,
60,5,60,579,8,60,10,60,12,60,582,9,60,1,60,1,60,1,60,1,60,1,60,5,60,589,
8,60,10,60,12,60,592,9,60,1,61,1,61,1,61,1,61,3,61,598,8,61,1,62,1,62,1,
63,1,63,1,63,1,63,3,63,606,8,63,1,64,1,64,1,65,1,65,1,65,1,65,3,65,614,8,
65,1,66,1,66,1,67,3,67,619,8,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,68,
1,68,1,68,1,68,1,68,1,68,3,68,634,8,68,1,69,1,69,1,69,1,69,3,69,640,8,69,
1,70,1,70,1,70,1,70,1,70,1,71,1,71,1,71,5,71,650,8,71,10,71,12,71,653,9,
71,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,3,72,663,8,72,1,73,1,73,1,73,
5,73,668,8,73,10,73,12,73,671,9,73,1,73,3,73,674,8,73,1,74,1,74,1,74,3,74,
679,8,74,1,75,1,75,1,75,1,75,1,75,3,75,686,8,75,1,76,1,76,5,76,690,8,76,
10,76,12,76,693,9,76,1,77,1,77,1,77,1,78,1,78,1,78,1,79,1,79,1,80,1,80,1,
81,1,81,1,81,1,81,3,81,709,8,81,1,82,1,82,1,82,1,82,1,83,1,83,1,83,5,83,
718,8,83,10,83,12,83,721,9,83,1,84,1,84,3,84,725,8,84,1,85,1,85,1,85,1,85,
1,85,1,85,3,85,733,8,85,1,86,1,86,1,86,1,86,1,86,1,86,5,86,741,8,86,10,86,
12,86,744,9,86,1,86,1,86,1,86,3,86,749,8,86,1,86,1,86,1,87,1,87,1,87,1,87,
1,88,1,88,1,88,3,88,760,8,88,1,89,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,90,
1,90,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,93,1,93,1,
94,1,94,1,95,1,95,1,95,1,95,1,95,1,96,1,96,1,96,5,96,795,8,96,10,96,12,96,
798,9,96,1,96,0,0,97,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,
126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,
162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,0,7,1,0,
41,42,1,0,72,73,5,0,4,4,6,6,20,20,30,30,70,70,2,0,19,19,49,54,2,0,26,26,
41,42,4,0,1,1,9,9,22,22,43,44,2,0,11,11,35,35,798,0,194,1,0,0,0,2,216,1,
0,0,0,4,218,1,0,0,0,6,229,1,0,0,0,8,234,1,0,0,0,10,238,1,0,0,0,12,249,1,
0,0,0,14,251,1,0,0,0,16,259,1,0,0,0,18,263,1,0,0,0,20,278,1,0,0,0,22,282,
1,0,0,0,24,284,1,0,0,0,26,286,1,0,0,0,28,288,1,0,0,0,30,290,1,0,0,0,32,292,
1,0,0,0,34,294,1,0,0,0,36,302,1,0,0,0,38,309,1,0,0,0,40,316,1,0,0,0,42,323,
1,0,0,0,44,329,1,0,0,0,46,331,1,0,0,0,48,335,1,0,0,0,50,341,1,0,0,0,52,346,
1,0,0,0,54,352,1,0,0,0,56,354,1,0,0,0,58,376,1,0,0,0,60,378,1,0,0,0,62,386,
1,0,0,0,64,388,1,0,0,0,66,390,1,0,0,0,68,402,1,0,0,0,70,404,1,0,0,0,72,412,
1,0,0,0,74,416,1,0,0,0,76,432,1,0,0,0,78,434,1,0,0,0,80,440,1,0,0,0,82,444,
1,0,0,0,84,450,1,0,0,0,86,452,1,0,0,0,88,455,1,0,0,0,90,466,1,0,0,0,92,470,
1,0,0,0,94,475,1,0,0,0,96,477,1,0,0,0,98,485,1,0,0,0,100,503,1,0,0,0,102,
505,1,0,0,0,104,509,1,0,0,0,106,517,1,0,0,0,108,525,1,0,0,0,110,535,1,0,
0,0,112,542,1,0,0,0,114,546,1,0,0,0,116,552,1,0,0,0,118,554,1,0,0,0,120,
561,1,0,0,0,122,593,1,0,0,0,124,599,1,0,0,0,126,601,1,0,0,0,128,607,1,0,
0,0,130,609,1,0,0,0,132,615,1,0,0,0,134,618,1,0,0,0,136,633,1,0,0,0,138,
639,1,0,0,0,140,641,1,0,0,0,142,646,1,0,0,0,144,662,1,0,0,0,146,673,1,0,
0,0,148,675,1,0,0,0,150,680,1,0,0,0,152,687,1,0,0,0,154,694,1,0,0,0,156,
697,1,0,0,0,158,700,1,0,0,0,160,702,1,0,0,0,162,708,1,0,0,0,164,710,1,0,
0,0,166,714,1,0,0,0,168,724,1,0,0,0,170,726,1,0,0,0,172,734,1,0,0,0,174,
752,1,0,0,0,176,759,1,0,0,0,178,761,1,0,0,0,180,766,1,0,0,0,182,771,1,0,
0,0,184,778,1,0,0,0,186,782,1,0,0,0,188,784,1,0,0,0,190,786,1,0,0,0,192,
791,1,0,0,0,194,196,3,2,1,0,195,197,5,68,0,0,196,195,1,0,0,0,196,197,1,0,
0,0,197,198,1,0,0,0,198,199,3,6,3,0,199,200,5,63,0,0,200,201,5,0,0,1,201,
1,1,0,0,0,202,203,5,29,0,0,203,208,3,4,2,0,204,205,5,55,0,0,205,206,3,104,
52,0,206,207,5,56,0,0,207,209,1,0,0,0,208,204,1,0,0,0,208,209,1,0,0,0,209,
210,1,0,0,0,210,211,5,47,0,0,211,217,1,0,0,0,212,213,5,67,0,0,213,214,3,
4,2,0,214,215,5,47,0,0,215,217,1,0,0,0,216,202,1,0,0,0,216,212,1,0,0,0,217,
3,1,0,0,0,218,219,5,77,0,0,219,5,1,0,0,0,220,228,3,10,5,0,221,228,3,14,7,
0,222,228,3,34,17,0,223,228,3,88,44,0,224,228,3,92,46,0,225,228,3,8,4,0,
226,228,5,71,0,0,227,220,1,0,0,0,227,221,1,0,0,0,227,222,1,0,0,0,227,223,
1,0,0,0,227,224,1,0,0,0,227,225,1,0,0,0,227,226,1,0,0,0,228,231,1,0,0,0,
229,227,1,0,0,0,229,230,1,0,0,0,230,232,1,0,0,0,231,229,1,0,0,0,232,233,
3,164,82,0,233,7,1,0,0,0,234,235,5,69,0,0,235,236,3,104,52,0,236,237,5,47,
0,0,237,9,1,0,0,0,238,239,5,21,0,0,239,244,3,12,6,0,240,241,5,46,0,0,241,
243,3,12,6,0,242,240,1,0,0,0,243,246,1,0,0,0,244,242,1,0,0,0,244,245,1,0,
0,0,245,247,1,0,0,0,246,244,1,0,0,0,247,248,5,47,0,0,248,11,1,0,0,0,249,
250,3,24,12,0,250,13,1,0,0,0,251,255,5,8,0,0,252,253,3,16,8,0,253,254,5,
47,0,0,254,256,1,0,0,0,255,252,1,0,0,0,256,257,1,0,0,0,257,255,1,0,0,0,257,
258,1,0,0,0,258,15,1,0,0,0,259,260,3,4,2,0,260,261,5,49,0,0,261,262,3,20,
10,0,262,17,1,0,0,0,263,264,5,7,0,0,264,265,5,55,0,0,265,266,3,24,12,0,266,
267,5,56,0,0,267,19,1,0,0,0,268,279,3,22,11,0,269,270,3,28,14,0,270,271,
3,22,11,0,271,279,1,0,0,0,272,279,3,4,2,0,273,274,3,28,14,0,274,275,3,4,
2,0,275,279,1,0,0,0,276,279,3,32,16,0,277,279,3,18,9,0,278,268,1,0,0,0,278,
269,1,0,0,0,278,272,1,0,0,0,278,273,1,0,0,0,278,276,1,0,0,0,278,277,1,0,
0,0,279,21,1,0,0,0,280,283,3,24,12,0,281,283,3,26,13,0,282,280,1,0,0,0,282,
281,1,0,0,0,283,23,1,0,0,0,284,285,5,79,0,0,285,25,1,0,0,0,286,287,5,80,
0,0,287,27,1,0,0,0,288,289,7,0,0,0,289,29,1,0,0,0,290,291,7,1,0,0,291,31,
1,0,0,0,292,293,5,78,0,0,293,33,1,0,0,0,294,298,5,36,0,0,295,296,3,36,18,
0,296,297,5,47,0,0,297,299,1,0,0,0,298,295,1,0,0,0,299,300,1,0,0,0,300,298,
1,0,0,0,300,301,1,0,0,0,301,35,1,0,0,0,302,303,3,4,2,0,303,307,5,49,0,0,
304,308,3,42,21,0,305,308,3,38,19,0,306,308,3,40,20,0,307,304,1,0,0,0,307,
305,1,0,0,0,307,306,1,0,0,0,308,37,1,0,0,0,309,311,5,16,0,0,310,312,3,98,
49,0,311,310,1,0,0,0,311,312,1,0,0,0,312,313,1,0,0,0,313,314,5,48,0,0,314,
315,3,110,55,0,315,39,1,0,0,0,316,318,5,28,0,0,317,319,3,98,49,0,318,317,
1,0,0,0,318,319,1,0,0,0,319,41,1,0,0,0,320,324,3,44,22,0,321,324,3,52,26,
0,322,324,3,86,43,0,323,320,1,0,0,0,323,321,1,0,0,0,323,322,1,0,0,0,324,
43,1,0,0,0,325,330,3,46,23,0,326,330,3,48,24,0,327,330,3,50,25,0,328,330,
3,56,28,0,329,325,1,0,0,0,329,326,1,0,0,0,329,327,1,0,0,0,329,328,1,0,0,
0,330,45,1,0,0,0,331,332,5,55,0,0,332,333,3,104,52,0,333,334,5,56,0,0,334,
47,1,0,0,0,335,336,3,20,10,0,336,337,5,64,0,0,337,338,3,20,10,0,338,49,1,
0,0,0,339,342,3,4,2,0,340,342,7,2,0,0,341,339,1,0,0,0,341,340,1,0,0,0,342,
51,1,0,0,0,343,344,5,27,0,0,344,347,3,54,27,0,345,347,3,54,27,0,346,343,
1,0,0,0,346,345,1,0,0,0,347,53,1,0,0,0,348,353,3,58,29,0,349,353,3,66,33,
0,350,353,3,80,40,0,351,353,3,84,42,0,352,348,1,0,0,0,352,349,1,0,0,0,352,
350,1,0,0,0,352,351,1,0,0,0,353,55,1,0,0,0,354,355,5,70,0,0,355,358,5,57,
0,0,356,359,3,4,2,0,357,359,3,22,11,0,358,356,1,0,0,0,358,357,1,0,0,0,359,
360,1,0,0,0,360,361,5,59,0,0,361,57,1,0,0,0,362,363,5,2,0,0,363,364,5,57,
0,0,364,365,3,60,30,0,365,366,5,59,0,0,366,367,5,25,0,0,367,368,3,64,32,
0,368,377,1,0,0,0,369,370,5,2,0,0,370,371,5,58,0,0,371,372,3,60,30,0,372,
373,5,60,0,0,373,374,5,25,0,0,374,375,3,64,32,0,375,377,1,0,0,0,376,362,
1,0,0,0,376,369,1,0,0,0,377,59,1,0,0,0,378,383,3,62,31,0,379,380,5,46,0,
0,380,382,3,62,31,0,381,379,1,0,0,0,382,385,1,0,0,0,383,381,1,0,0,0,383,
384,1,0,0,0,384,61,1,0,0,0,385,383,1,0,0,0,386,387,3,44,22,0,387,63,1,0,
0,0,388,389,3,42,21,0,389,65,1,0,0,0,390,392,5,31,0,0,391,393,3,68,34,0,
392,391,1,0,0,0,392,393,1,0,0,0,393,394,1,0,0,0,394,395,5,13,0,0,395,67,
1,0,0,0,396,399,3,70,35,0,397,398,5,47,0,0,398,400,3,74,37,0,399,397,1,0,
0,0,399,400,1,0,0,0,400,403,1,0,0,0,401,403,3,74,37,0,402,396,1,0,0,0,402,
401,1,0,0,0,403,69,1,0,0,0,404,409,3,72,36,0,405,406,5,47,0,0,406,408,3,
72,36,0,407,405,1,0,0,0,408,411,1,0,0,0,409,407,1,0,0,0,409,410,1,0,0,0,
410,71,1,0,0,0,411,409,1,0,0,0,412,413,3,104,52,0,413,414,5,48,0,0,414,415,
3,42,21,0,415,73,1,0,0,0,416,417,5,5,0,0,417,418,3,76,38,0,418,419,5,25,
0,0,419,424,3,78,39,0,420,421,5,47,0,0,421,423,3,78,39,0,422,420,1,0,0,0,
423,426,1,0,0,0,424,422,1,0,0,0,424,425,1,0,0,0,425,75,1,0,0,0,426,424,1,
0,0,0,427,428,3,4,2,0,428,429,5,48,0,0,429,430,3,50,25,0,430,433,1,0,0,0,
431,433,3,50,25,0,432,427,1,0,0,0,432,431,1,0,0,0,433,77,1,0,0,0,434,435,
3,106,53,0,435,436,5,48,0,0,436,437,5,55,0,0,437,438,3,68,34,0,438,439,5,
56,0,0,439,79,1,0,0,0,440,441,5,33,0,0,441,442,5,25,0,0,442,443,3,82,41,
0,443,81,1,0,0,0,444,445,3,44,22,0,445,83,1,0,0,0,446,447,5,14,0,0,447,448,
5,25,0,0,448,451,3,42,21,0,449,451,5,14,0,0,450,446,1,0,0,0,450,449,1,0,
0,0,451,85,1,0,0,0,452,453,5,61,0,0,453,454,3,50,25,0,454,87,1,0,0,0,455,
456,5,38,0,0,456,461,3,90,45,0,457,458,5,47,0,0,458,460,3,90,45,0,459,457,
1,0,0,0,460,463,1,0,0,0,461,459,1,0,0,0,461,462,1,0,0,0,462,464,1,0,0,0,
463,461,1,0,0,0,464,465,5,47,0,0,465,89,1,0,0,0,466,467,3,104,52,0,467,468,
5,48,0,0,468,469,3,42,21,0,469,91,1,0,0,0,470,471,3,94,47,0,471,472,5,47,
0,0,472,93,1,0,0,0,473,476,3,96,48,0,474,476,3,108,54,0,475,473,1,0,0,0,
475,474,1,0,0,0,476,95,1,0,0,0,477,478,5,28,0,0,478,480,3,4,2,0,479,481,
3,98,49,0,480,479,1,0,0,0,480,481,1,0,0,0,481,482,1,0,0,0,482,483,5,47,0,
0,483,484,3,6,3,0,484,97,1,0,0,0,485,486,5,55,0,0,486,491,3,100,50,0,487,
488,5,47,0,0,488,490,3,100,50,0,489,487,1,0,0,0,490,493,1,0,0,0,491,489,
1,0,0,0,491,492,1,0,0,0,492,494,1,0,0,0,493,491,1,0,0,0,494,495,5,56,0,0,
495,99,1,0,0,0,496,504,3,102,51,0,497,498,5,38,0,0,498,504,3,102,51,0,499,
500,5,16,0,0,500,504,3,102,51,0,501,502,5,28,0,0,502,504,3,102,51,0,503,
496,1,0,0,0,503,497,1,0,0,0,503,499,1,0,0,0,503,501,1,0,0,0,504,101,1,0,
0,0,505,506,3,104,52,0,506,507,5,48,0,0,507,508,3,50,25,0,508,103,1,0,0,
0,509,514,3,4,2,0,510,511,5,46,0,0,511,513,3,4,2,0,512,510,1,0,0,0,513,516,
1,0,0,0,514,512,1,0,0,0,514,515,1,0,0,0,515,105,1,0,0,0,516,514,1,0,0,0,
517,522,3,20,10,0,518,519,5,46,0,0,519,521,3,20,10,0,520,518,1,0,0,0,521,
524,1,0,0,0,522,520,1,0,0,0,522,523,1,0,0,0,523,107,1,0,0,0,524,522,1,0,
0,0,525,526,5,16,0,0,526,528,3,4,2,0,527,529,3,98,49,0,528,527,1,0,0,0,528,
529,1,0,0,0,529,530,1,0,0,0,530,531,5,48,0,0,531,532,3,110,55,0,532,533,
5,47,0,0,533,534,3,6,3,0,534,109,1,0,0,0,535,536,3,50,25,0,536,111,1,0,0,
0,537,538,3,12,6,0,538,539,5,48,0,0,539,540,3,114,57,0,540,543,1,0,0,0,541,
543,3,114,57,0,542,537,1,0,0,0,542,541,1,0,0,0,543,113,1,0,0,0,544,547,3,
116,58,0,545,547,3,162,81,0,546,544,1,0,0,0,546,545,1,0,0,0,547,115,1,0,
0,0,548,553,3,118,59,0,549,553,3,150,75,0,550,553,3,156,78,0,551,553,3,158,
79,0,552,548,1,0,0,0,552,549,1,0,0,0,552,550,1,0,0,0,552,551,1,0,0,0,553,
117,1,0,0,0,554,555,3,120,60,0,555,556,5,45,0,0,556,557,3,122,61,0,557,119,
1,0,0,0,558,559,5,62,0,0,559,562,3,4,2,0,560,562,3,4,2,0,561,558,1,0,0,0,
561,560,1,0,0,0,562,590,1,0,0,0,563,564,5,57,0,0,564,569,3,122,61,0,565,
566,5,46,0,0,566,568,3,122,61,0,567,565,1,0,0,0,568,571,1,0,0,0,569,567,
1,0,0,0,569,570,1,0,0,0,570,572,1,0,0,0,571,569,1,0,0,0,572,573,5,59,0,0,
573,589,1,0,0,0,574,575,5,58,0,0,575,580,3,122,61,0,576,577,5,46,0,0,577,
579,3,122,61,0,578,576,1,0,0,0,579,582,1,0,0,0,580,578,1,0,0,0,580,581,1,
0,0,0,581,583,1,0,0,0,582,580,1,0,0,0,583,584,5,60,0,0,584,589,1,0,0,0,585,
586,5,63,0,0,586,589,3,4,2,0,587,589,5,61,0,0,588,563,1,0,0,0,588,574,1,
0,0,0,588,585,1,0,0,0,588,587,1,0,0,0,589,592,1,0,0,0,590,588,1,0,0,0,590,
591,1,0,0,0,591,121,1,0,0,0,592,590,1,0,0,0,593,597,3,126,63,0,594,595,3,
124,62,0,595,596,3,122,61,0,596,598,1,0,0,0,597,594,1,0,0,0,597,598,1,0,
0,0,598,123,1,0,0,0,599,600,7,3,0,0,600,125,1,0,0,0,601,605,3,130,65,0,602,
603,3,128,64,0,603,604,3,126,63,0,604,606,1,0,0,0,605,602,1,0,0,0,605,606,
1,0,0,0,606,127,1,0,0,0,607,608,7,4,0,0,608,129,1,0,0,0,609,613,3,134,67,
0,610,611,3,132,66,0,611,612,3,130,65,0,612,614,1,0,0,0,613,610,1,0,0,0,
613,614,1,0,0,0,614,131,1,0,0,0,615,616,7,5,0,0,616,133,1,0,0,0,617,619,
7,0,0,0,618,617,1,0,0,0,618,619,1,0,0,0,619,620,1,0,0,0,620,621,3,136,68,
0,621,135,1,0,0,0,622,634,3,120,60,0,623,624,5,55,0,0,624,625,3,122,61,0,
625,626,5,56,0,0,626,634,1,0,0,0,627,634,3,140,70,0,628,634,3,138,69,0,629,
634,3,144,72,0,630,631,5,24,0,0,631,634,3,136,68,0,632,634,3,30,15,0,633,
622,1,0,0,0,633,623,1,0,0,0,633,627,1,0,0,0,633,628,1,0,0,0,633,629,1,0,
0,0,633,630,1,0,0,0,633,632,1,0,0,0,634,137,1,0,0,0,635,640,3,22,11,0,636,
640,3,18,9,0,637,640,3,32,16,0,638,640,5,23,0,0,639,635,1,0,0,0,639,636,
1,0,0,0,639,637,1,0,0,0,639,638,1,0,0,0,640,139,1,0,0,0,641,642,3,4,2,0,
642,643,5,55,0,0,643,644,3,142,71,0,644,645,5,56,0,0,645,141,1,0,0,0,646,
651,3,152,76,0,647,648,5,46,0,0,648,650,3,152,76,0,649,647,1,0,0,0,650,653,
1,0,0,0,651,649,1,0,0,0,651,652,1,0,0,0,652,143,1,0,0,0,653,651,1,0,0,0,
654,655,5,57,0,0,655,656,3,146,73,0,656,657,5,59,0,0,657,663,1,0,0,0,658,
659,5,58,0,0,659,660,3,146,73,0,660,661,5,60,0,0,661,663,1,0,0,0,662,654,
1,0,0,0,662,658,1,0,0,0,663,145,1,0,0,0,664,669,3,148,74,0,665,666,5,46,
0,0,666,668,3,148,74,0,667,665,1,0,0,0,668,671,1,0,0,0,669,667,1,0,0,0,669,
670,1,0,0,0,670,674,1,0,0,0,671,669,1,0,0,0,672,674,1,0,0,0,673,664,1,0,
0,0,673,672,1,0,0,0,674,147,1,0,0,0,675,678,3,122,61,0,676,677,5,64,0,0,
677,679,3,122,61,0,678,676,1,0,0,0,678,679,1,0,0,0,679,149,1,0,0,0,680,685,
3,4,2,0,681,682,5,55,0,0,682,683,3,142,71,0,683,684,5,56,0,0,684,686,1,0,
0,0,685,681,1,0,0,0,685,686,1,0,0,0,686,151,1,0,0,0,687,691,3,122,61,0,688,
690,3,154,77,0,689,688,1,0,0,0,690,693,1,0,0,0,691,689,1,0,0,0,691,692,1,
0,0,0,692,153,1,0,0,0,693,691,1,0,0,0,694,695,5,48,0,0,695,696,3,122,61,
0,696,155,1,0,0,0,697,698,5,17,0,0,698,699,3,12,6,0,699,157,1,0,0,0,700,
701,1,0,0,0,701,159,1,0,0,0,702,703,1,0,0,0,703,161,1,0,0,0,704,709,3,164,
82,0,705,709,3,168,84,0,706,709,3,176,88,0,707,709,3,190,95,0,708,704,1,
0,0,0,708,705,1,0,0,0,708,706,1,0,0,0,708,707,1,0,0,0,709,163,1,0,0,0,710,
711,5,3,0,0,711,712,3,166,83,0,712,713,5,13,0,0,713,165,1,0,0,0,714,719,
3,112,56,0,715,716,5,47,0,0,716,718,3,112,56,0,717,715,1,0,0,0,718,721,1,
0,0,0,719,717,1,0,0,0,719,720,1,0,0,0,720,167,1,0,0,0,721,719,1,0,0,0,722,
725,3,170,85,0,723,725,3,172,86,0,724,722,1,0,0,0,724,723,1,0,0,0,725,169,
1,0,0,0,726,727,5,18,0,0,727,728,3,122,61,0,728,729,5,34,0,0,729,732,3,112,
56,0,730,731,5,12,0,0,731,733,3,112,56,0,732,730,1,0,0,0,732,733,1,0,0,0,
733,171,1,0,0,0,734,735,5,5,0,0,735,736,3,122,61,0,736,737,5,25,0,0,737,
742,3,174,87,0,738,739,5,47,0,0,739,741,3,174,87,0,740,738,1,0,0,0,741,744,
1,0,0,0,742,740,1,0,0,0,742,743,1,0,0,0,743,748,1,0,0,0,744,742,1,0,0,0,
745,746,5,47,0,0,746,747,5,12,0,0,747,749,3,166,83,0,748,745,1,0,0,0,748,
749,1,0,0,0,749,750,1,0,0,0,750,751,5,13,0,0,751,173,1,0,0,0,752,753,3,106,
53,0,753,754,5,48,0,0,754,755,3,112,56,0,755,175,1,0,0,0,756,760,3,178,89,
0,757,760,3,180,90,0,758,760,3,182,91,0,759,756,1,0,0,0,759,757,1,0,0,0,
759,758,1,0,0,0,760,177,1,0,0,0,761,762,5,39,0,0,762,763,3,122,61,0,763,
764,5,10,0,0,764,765,3,112,56,0,765,179,1,0,0,0,766,767,5,32,0,0,767,768,
3,166,83,0,768,769,5,37,0,0,769,770,3,122,61,0,770,181,1,0,0,0,771,772,5,
15,0,0,772,773,3,4,2,0,773,774,5,45,0,0,774,775,3,184,92,0,775,776,5,10,
0,0,776,777,3,112,56,0,777,183,1,0,0,0,778,779,3,186,93,0,779,780,7,6,0,
0,780,781,3,188,94,0,781,185,1,0,0,0,782,783,3,122,61,0,783,187,1,0,0,0,
784,785,3,122,61,0,785,189,1,0,0,0,786,787,5,40,0,0,787,788,3,192,96,0,788,
789,5,10,0,0,789,790,3,112,56,0,790,191,1,0,0,0,791,796,3,120,60,0,792,793,
5,46,0,0,793,795,3,120,60,0,794,792,1,0,0,0,795,798,1,0,0,0,796,794,1,0,
0,0,796,797,1,0,0,0,797,193,1,0,0,0,798,796,1,0,0,0,65,196,208,216,227,229,
244,257,278,282,300,307,311,318,323,329,341,346,352,358,376,383,392,399,
402,409,424,432,450,461,475,480,491,503,514,522,528,542,546,552,561,569,
580,588,590,597,605,613,618,633,639,651,662,669,673,678,685,691,708,719,
724,732,742,748,759,796];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class pascalParser extends antlr4.Parser {

    static grammarFileName = "pascal.g4";
    static literalNames = [ null, "'AND'", "'ARRAY'", "'BEGIN'", "'BOOLEAN'", 
                            "'CASE'", "'CHAR'", "'CHR'", "'CONST'", "'DIV'", 
                            "'DO'", "'DOWNTO'", "'ELSE'", "'END'", "'FILE'", 
                            "'FOR'", "'FUNCTION'", "'GOTO'", "'IF'", "'IN'", 
                            "'INTEGER'", "'LABEL'", "'MOD'", "'NIL'", "'NOT'", 
                            "'OF'", "'OR'", "'PACKED'", "'PROCEDURE'", "'PROGRAM'", 
                            "'REAL'", "'RECORD'", "'REPEAT'", "'SET'", "'THEN'", 
                            "'TO'", "'TYPE'", "'UNTIL'", "'VAR'", "'WHILE'", 
                            "'WITH'", "'+'", "'-'", "'*'", "'/'", "':='", 
                            "','", "';'", "':'", "'='", "'<>'", "'<'", "'<='", 
                            "'>='", "'>'", "'('", "')'", "'['", "'(.'", 
                            "']'", "'.)'", "'^'", "'@'", "'.'", "'..'", 
                            "'{'", "'}'", "'UNIT'", "'INTERFACE'", "'USES'", 
                            "'STRING'", "'IMPLEMENTATION'", "'TRUE'", "'FALSE'" ];
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



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, pascalParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.programHeading();
	        this.state = 196;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===68) {
	            this.state = 195;
	            this.match(pascalParser.INTERFACE);
	        }

	        this.state = 198;
	        this.block();
	        this.state = 199;
	        this.match(pascalParser.DOT);
	        this.state = 200;
	        this.match(pascalParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    var _la = 0;
	    try {
	        this.state = 216;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 202;
	            this.match(pascalParser.PROGRAM);
	            this.state = 203;
	            this.identifier();
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===55) {
	                this.state = 204;
	                this.match(pascalParser.LPAREN);
	                this.state = 205;
	                this.identifierList();
	                this.state = 206;
	                this.match(pascalParser.RPAREN);
	            }

	            this.state = 210;
	            this.match(pascalParser.SEMI);
	            break;
	        case 67:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 212;
	            this.match(pascalParser.UNIT);
	            this.state = 213;
	            this.identifier();
	            this.state = 214;
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
	        this.state = 218;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 8)) & ~0x1f) === 0 && ((1 << (_la - 8)) & 1343234305) !== 0) || _la===69 || _la===71) {
	            this.state = 227;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 21:
	                this.state = 220;
	                this.labelDeclarationPart();
	                break;
	            case 8:
	                this.state = 221;
	                this.constantDefinitionPart();
	                break;
	            case 36:
	                this.state = 222;
	                this.typeDefinitionPart();
	                break;
	            case 38:
	                this.state = 223;
	                this.variableDeclarationPart();
	                break;
	            case 16:
	            case 28:
	                this.state = 224;
	                this.procedureAndFunctionDeclarationPart();
	                break;
	            case 69:
	                this.state = 225;
	                this.usesUnitsPart();
	                break;
	            case 71:
	                this.state = 226;
	                this.match(pascalParser.IMPLEMENTATION);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 231;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 232;
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
	        this.state = 234;
	        this.match(pascalParser.USES);
	        this.state = 235;
	        this.identifierList();
	        this.state = 236;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(pascalParser.LABEL);
	        this.state = 239;
	        this.label();
	        this.state = 244;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===46) {
	            this.state = 240;
	            this.match(pascalParser.COMMA);
	            this.state = 241;
	            this.label();
	            this.state = 246;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 247;
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
	        this.state = 249;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        this.match(pascalParser.CONST);
	        this.state = 255; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 252;
	            this.constantDefinition();
	            this.state = 253;
	            this.match(pascalParser.SEMI);
	            this.state = 257; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===77);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 259;
	        this.identifier();
	        this.state = 260;
	        this.match(pascalParser.EQUAL);
	        this.state = 261;
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
	        this.state = 263;
	        this.match(pascalParser.CHR);
	        this.state = 264;
	        this.match(pascalParser.LPAREN);
	        this.state = 265;
	        this.unsignedInteger();
	        this.state = 266;
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
	        this.state = 278;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 268;
	            this.unsignedNumber();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 269;
	            this.sign();
	            this.state = 270;
	            this.unsignedNumber();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 272;
	            this.identifier();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 273;
	            this.sign();
	            this.state = 274;
	            this.identifier();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 276;
	            this.string();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 277;
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
	        this.state = 282;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 79:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 280;
	            this.unsignedInteger();
	            break;
	        case 80:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 281;
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
	        this.state = 284;
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
	        this.state = 286;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        _la = this._input.LA(1);
	        if(!(_la===41 || _la===42)) {
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        _la = this._input.LA(1);
	        if(!(_la===72 || _la===73)) {
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
	        this.state = 292;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
	        this.match(pascalParser.TYPE);
	        this.state = 298; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 295;
	            this.typeDefinition();
	            this.state = 296;
	            this.match(pascalParser.SEMI);
	            this.state = 300; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===77);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 302;
	        this.identifier();
	        this.state = 303;
	        this.match(pascalParser.EQUAL);
	        this.state = 307;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 4:
	        case 6:
	        case 7:
	        case 14:
	        case 20:
	        case 27:
	        case 30:
	        case 31:
	        case 33:
	        case 41:
	        case 42:
	        case 55:
	        case 61:
	        case 70:
	        case 77:
	        case 78:
	        case 79:
	        case 80:
	            this.state = 304;
	            this.type_();
	            break;
	        case 16:
	            this.state = 305;
	            this.functionType();
	            break;
	        case 28:
	            this.state = 306;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this.match(pascalParser.FUNCTION);
	        this.state = 311;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===55) {
	            this.state = 310;
	            this.formalParameterList();
	        }

	        this.state = 313;
	        this.match(pascalParser.COLON);
	        this.state = 314;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
	        this.match(pascalParser.PROCEDURE);
	        this.state = 318;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===55) {
	            this.state = 317;
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
	        this.state = 323;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	        case 6:
	        case 7:
	        case 20:
	        case 30:
	        case 41:
	        case 42:
	        case 55:
	        case 70:
	        case 77:
	        case 78:
	        case 79:
	        case 80:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 320;
	            this.simpleType();
	            break;
	        case 2:
	        case 14:
	        case 27:
	        case 31:
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 321;
	            this.structuredType();
	            break;
	        case 61:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 322;
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
	        this.state = 329;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 325;
	            this.scalarType();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 326;
	            this.subrangeType();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 327;
	            this.typeIdentifier();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 328;
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
	        this.state = 331;
	        this.match(pascalParser.LPAREN);
	        this.state = 332;
	        this.identifierList();
	        this.state = 333;
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
	        this.state = 335;
	        this.constant();
	        this.state = 336;
	        this.match(pascalParser.DOTDOT);
	        this.state = 337;
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
	    var _la = 0;
	    try {
	        this.state = 341;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 77:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 339;
	            this.identifier();
	            break;
	        case 4:
	        case 6:
	        case 20:
	        case 30:
	        case 70:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 340;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1074790480) !== 0) || _la===70)) {
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
	        this.state = 346;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 343;
	            this.match(pascalParser.PACKED);
	            this.state = 344;
	            this.unpackedStructuredType();
	            break;
	        case 2:
	        case 14:
	        case 31:
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 345;
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
	        this.state = 352;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 348;
	            this.arrayType();
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 349;
	            this.recordType();
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 350;
	            this.setType();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 351;
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
	        this.state = 354;
	        this.match(pascalParser.STRING);
	        this.state = 355;
	        this.match(pascalParser.LBRACK);
	        this.state = 358;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 77:
	            this.state = 356;
	            this.identifier();
	            break;
	        case 79:
	        case 80:
	            this.state = 357;
	            this.unsignedNumber();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 360;
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
	        this.state = 376;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 362;
	            this.match(pascalParser.ARRAY);
	            this.state = 363;
	            this.match(pascalParser.LBRACK);
	            this.state = 364;
	            this.typeList();
	            this.state = 365;
	            this.match(pascalParser.RBRACK);
	            this.state = 366;
	            this.match(pascalParser.OF);
	            this.state = 367;
	            this.componentType();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 369;
	            this.match(pascalParser.ARRAY);
	            this.state = 370;
	            this.match(pascalParser.LBRACK2);
	            this.state = 371;
	            this.typeList();
	            this.state = 372;
	            this.match(pascalParser.RBRACK2);
	            this.state = 373;
	            this.match(pascalParser.OF);
	            this.state = 374;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 378;
	        this.indexType();
	        this.state = 383;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===46) {
	            this.state = 379;
	            this.match(pascalParser.COMMA);
	            this.state = 380;
	            this.indexType();
	            this.state = 385;
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
	        this.state = 386;
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
	        this.state = 388;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 390;
	        this.match(pascalParser.RECORD);
	        this.state = 392;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===77) {
	            this.state = 391;
	            this.fieldList();
	        }

	        this.state = 394;
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
	    var _la = 0;
	    try {
	        this.state = 402;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 77:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 396;
	            this.fixedPart();
	            this.state = 399;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===47) {
	                this.state = 397;
	                this.match(pascalParser.SEMI);
	                this.state = 398;
	                this.variantPart();
	            }

	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 401;
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
	        this.state = 404;
	        this.recordSection();
	        this.state = 409;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 405;
	                this.match(pascalParser.SEMI);
	                this.state = 406;
	                this.recordSection(); 
	            }
	            this.state = 411;
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
	        this.state = 412;
	        this.identifierList();
	        this.state = 413;
	        this.match(pascalParser.COLON);
	        this.state = 414;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 416;
	        this.match(pascalParser.CASE);
	        this.state = 417;
	        this.tag();
	        this.state = 418;
	        this.match(pascalParser.OF);
	        this.state = 419;
	        this.variant();
	        this.state = 424;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===47) {
	            this.state = 420;
	            this.match(pascalParser.SEMI);
	            this.state = 421;
	            this.variant();
	            this.state = 426;
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
	        this.state = 432;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 427;
	            this.identifier();
	            this.state = 428;
	            this.match(pascalParser.COLON);
	            this.state = 429;
	            this.typeIdentifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 431;
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
	        this.state = 434;
	        this.constList();
	        this.state = 435;
	        this.match(pascalParser.COLON);
	        this.state = 436;
	        this.match(pascalParser.LPAREN);
	        this.state = 437;
	        this.fieldList();
	        this.state = 438;
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
	        this.state = 440;
	        this.match(pascalParser.SET);
	        this.state = 441;
	        this.match(pascalParser.OF);
	        this.state = 442;
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
	        this.state = 444;
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
	        this.state = 450;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 446;
	            this.match(pascalParser.FILE);
	            this.state = 447;
	            this.match(pascalParser.OF);
	            this.state = 448;
	            this.type_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 449;
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
	        this.state = 452;
	        this.match(pascalParser.POINTER);
	        this.state = 453;
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
	        this.state = 455;
	        this.match(pascalParser.VAR);
	        this.state = 456;
	        this.variableDeclaration();
	        this.state = 461;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 457;
	                this.match(pascalParser.SEMI);
	                this.state = 458;
	                this.variableDeclaration(); 
	            }
	            this.state = 463;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
	        }

	        this.state = 464;
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
	        this.state = 466;
	        this.identifierList();
	        this.state = 467;
	        this.match(pascalParser.COLON);
	        this.state = 468;
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
	        this.state = 470;
	        this.procedureOrFunctionDeclaration();
	        this.state = 471;
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
	        this.state = 475;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 473;
	            this.procedureDeclaration();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 474;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 477;
	        this.match(pascalParser.PROCEDURE);
	        this.state = 478;
	        this.identifier();
	        this.state = 480;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===55) {
	            this.state = 479;
	            this.formalParameterList();
	        }

	        this.state = 482;
	        this.match(pascalParser.SEMI);
	        this.state = 483;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 485;
	        this.match(pascalParser.LPAREN);
	        this.state = 486;
	        this.formalParameterSection();
	        this.state = 491;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===47) {
	            this.state = 487;
	            this.match(pascalParser.SEMI);
	            this.state = 488;
	            this.formalParameterSection();
	            this.state = 493;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 494;
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
	        this.state = 503;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 77:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 496;
	            this.parameterGroup();
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 497;
	            this.match(pascalParser.VAR);
	            this.state = 498;
	            this.parameterGroup();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 499;
	            this.match(pascalParser.FUNCTION);
	            this.state = 500;
	            this.parameterGroup();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 501;
	            this.match(pascalParser.PROCEDURE);
	            this.state = 502;
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
	        this.state = 505;
	        this.identifierList();
	        this.state = 506;
	        this.match(pascalParser.COLON);
	        this.state = 507;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 509;
	        this.identifier();
	        this.state = 514;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===46) {
	            this.state = 510;
	            this.match(pascalParser.COMMA);
	            this.state = 511;
	            this.identifier();
	            this.state = 516;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 517;
	        this.constant();
	        this.state = 522;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===46) {
	            this.state = 518;
	            this.match(pascalParser.COMMA);
	            this.state = 519;
	            this.constant();
	            this.state = 524;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 525;
	        this.match(pascalParser.FUNCTION);
	        this.state = 526;
	        this.identifier();
	        this.state = 528;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===55) {
	            this.state = 527;
	            this.formalParameterList();
	        }

	        this.state = 530;
	        this.match(pascalParser.COLON);
	        this.state = 531;
	        this.resultType();
	        this.state = 532;
	        this.match(pascalParser.SEMI);
	        this.state = 533;
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
	        this.state = 535;
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
	        this.state = 542;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 79:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 537;
	            this.label();
	            this.state = 538;
	            this.match(pascalParser.COLON);
	            this.state = 539;
	            this.unlabelledStatement();
	            break;
	        case 3:
	        case 5:
	        case 12:
	        case 13:
	        case 15:
	        case 17:
	        case 18:
	        case 32:
	        case 37:
	        case 39:
	        case 40:
	        case 47:
	        case 62:
	        case 77:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 541;
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
	        this.state = 546;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	        case 13:
	        case 17:
	        case 37:
	        case 47:
	        case 62:
	        case 77:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 544;
	            this.simpleStatement();
	            break;
	        case 3:
	        case 5:
	        case 15:
	        case 18:
	        case 32:
	        case 39:
	        case 40:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 545;
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
	        this.state = 552;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 548;
	            this.assignmentStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 549;
	            this.procedureStatement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 550;
	            this.gotoStatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 551;
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
	        this.state = 554;
	        this.variable();
	        this.state = 555;
	        this.match(pascalParser.ASSIGN);
	        this.state = 556;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 561;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 62:
	            this.state = 558;
	            this.match(pascalParser.AT);
	            this.state = 559;
	            this.identifier();
	            break;
	        case 77:
	            this.state = 560;
	            this.identifier();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 590;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 57)) & ~0x1f) === 0 && ((1 << (_la - 57)) & 83) !== 0)) {
	            this.state = 588;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 57:
	                this.state = 563;
	                this.match(pascalParser.LBRACK);
	                this.state = 564;
	                this.expression();
	                this.state = 569;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===46) {
	                    this.state = 565;
	                    this.match(pascalParser.COMMA);
	                    this.state = 566;
	                    this.expression();
	                    this.state = 571;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 572;
	                this.match(pascalParser.RBRACK);
	                break;
	            case 58:
	                this.state = 574;
	                this.match(pascalParser.LBRACK2);
	                this.state = 575;
	                this.expression();
	                this.state = 580;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===46) {
	                    this.state = 576;
	                    this.match(pascalParser.COMMA);
	                    this.state = 577;
	                    this.expression();
	                    this.state = 582;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 583;
	                this.match(pascalParser.RBRACK2);
	                break;
	            case 63:
	                this.state = 585;
	                this.match(pascalParser.DOT);
	                this.state = 586;
	                this.identifier();
	                break;
	            case 61:
	                this.state = 587;
	                this.match(pascalParser.POINTER);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 592;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 593;
	        this.simpleExpression();
	        this.state = 597;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19 || ((((_la - 49)) & ~0x1f) === 0 && ((1 << (_la - 49)) & 63) !== 0)) {
	            this.state = 594;
	            this.relationaloperator();
	            this.state = 595;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 599;
	        _la = this._input.LA(1);
	        if(!(_la===19 || ((((_la - 49)) & ~0x1f) === 0 && ((1 << (_la - 49)) & 63) !== 0))) {
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 601;
	        this.term();
	        this.state = 605;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 26)) & ~0x1f) === 0 && ((1 << (_la - 26)) & 98305) !== 0)) {
	            this.state = 602;
	            this.additiveoperator();
	            this.state = 603;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 607;
	        _la = this._input.LA(1);
	        if(!(((((_la - 26)) & ~0x1f) === 0 && ((1 << (_la - 26)) & 98305) !== 0))) {
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 609;
	        this.signedFactor();
	        this.state = 613;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4194818) !== 0) || _la===43 || _la===44) {
	            this.state = 610;
	            this.multiplicativeoperator();
	            this.state = 611;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 615;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4194818) !== 0) || _la===43 || _la===44)) {
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 618;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41 || _la===42) {
	            this.state = 617;
	            _la = this._input.LA(1);
	            if(!(_la===41 || _la===42)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 620;
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
	        this.state = 633;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 622;
	            this.variable();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 623;
	            this.match(pascalParser.LPAREN);
	            this.state = 624;
	            this.expression();
	            this.state = 625;
	            this.match(pascalParser.RPAREN);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 627;
	            this.functionDesignator();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 628;
	            this.unsignedConstant();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 629;
	            this.set_();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 630;
	            this.match(pascalParser.NOT);
	            this.state = 631;
	            this.factor();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 632;
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
	        this.state = 639;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 79:
	        case 80:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 635;
	            this.unsignedNumber();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 636;
	            this.constantChr();
	            break;
	        case 78:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 637;
	            this.string();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 638;
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
	        this.state = 641;
	        this.identifier();
	        this.state = 642;
	        this.match(pascalParser.LPAREN);
	        this.state = 643;
	        this.parameterList();
	        this.state = 644;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 646;
	        this.actualParameter();
	        this.state = 651;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===46) {
	            this.state = 647;
	            this.match(pascalParser.COMMA);
	            this.state = 648;
	            this.actualParameter();
	            this.state = 653;
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
	        this.state = 662;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 57:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 654;
	            this.match(pascalParser.LBRACK);
	            this.state = 655;
	            this.elementList();
	            this.state = 656;
	            this.match(pascalParser.RBRACK);
	            break;
	        case 58:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 658;
	            this.match(pascalParser.LBRACK2);
	            this.state = 659;
	            this.elementList();
	            this.state = 660;
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
	    var _la = 0;
	    try {
	        this.state = 673;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	        case 23:
	        case 24:
	        case 41:
	        case 42:
	        case 55:
	        case 57:
	        case 58:
	        case 62:
	        case 72:
	        case 73:
	        case 77:
	        case 78:
	        case 79:
	        case 80:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 664;
	            this.element();
	            this.state = 669;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===46) {
	                this.state = 665;
	                this.match(pascalParser.COMMA);
	                this.state = 666;
	                this.element();
	                this.state = 671;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 59:
	        case 60:
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 675;
	        this.expression();
	        this.state = 678;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===64) {
	            this.state = 676;
	            this.match(pascalParser.DOTDOT);
	            this.state = 677;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 680;
	        this.identifier();
	        this.state = 685;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===55) {
	            this.state = 681;
	            this.match(pascalParser.LPAREN);
	            this.state = 682;
	            this.parameterList();
	            this.state = 683;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 687;
	        this.expression();
	        this.state = 691;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===48) {
	            this.state = 688;
	            this.parameterwidth();
	            this.state = 693;
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
	        this.state = 694;
	        this.match(pascalParser.COLON);
	        this.state = 695;
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
	        this.state = 697;
	        this.match(pascalParser.GOTO);
	        this.state = 698;
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
	        this.state = 708;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 704;
	            this.compoundStatement();
	            break;
	        case 5:
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 705;
	            this.conditionalStatement();
	            break;
	        case 15:
	        case 32:
	        case 39:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 706;
	            this.repetetiveStatement();
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 707;
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
	        this.state = 710;
	        this.match(pascalParser.BEGIN);
	        this.state = 711;
	        this.statements();
	        this.state = 712;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 714;
	        this.statement();
	        this.state = 719;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===47) {
	            this.state = 715;
	            this.match(pascalParser.SEMI);
	            this.state = 716;
	            this.statement();
	            this.state = 721;
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
	        this.state = 724;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 722;
	            this.ifStatement();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 723;
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
	        this.state = 726;
	        this.match(pascalParser.IF);
	        this.state = 727;
	        this.expression();
	        this.state = 728;
	        this.match(pascalParser.THEN);
	        this.state = 729;
	        this.statement();
	        this.state = 732;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
	        if(la_===1) {
	            this.state = 730;
	            this.match(pascalParser.ELSE);
	            this.state = 731;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 734;
	        this.match(pascalParser.CASE);
	        this.state = 735;
	        this.expression();
	        this.state = 736;
	        this.match(pascalParser.OF);
	        this.state = 737;
	        this.caseListElement();
	        this.state = 742;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,61,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 738;
	                this.match(pascalParser.SEMI);
	                this.state = 739;
	                this.caseListElement(); 
	            }
	            this.state = 744;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,61,this._ctx);
	        }

	        this.state = 748;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===47) {
	            this.state = 745;
	            this.match(pascalParser.SEMI);
	            this.state = 746;
	            this.match(pascalParser.ELSE);
	            this.state = 747;
	            this.statements();
	        }

	        this.state = 750;
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
	        this.state = 752;
	        this.constList();
	        this.state = 753;
	        this.match(pascalParser.COLON);
	        this.state = 754;
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
	        this.state = 759;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 39:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 756;
	            this.whileStatement();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 757;
	            this.repeatStatement();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 758;
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
	        this.state = 761;
	        this.match(pascalParser.WHILE);
	        this.state = 762;
	        this.expression();
	        this.state = 763;
	        this.match(pascalParser.DO);
	        this.state = 764;
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
	        this.state = 766;
	        this.match(pascalParser.REPEAT);
	        this.state = 767;
	        this.statements();
	        this.state = 768;
	        this.match(pascalParser.UNTIL);
	        this.state = 769;
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
	        this.state = 771;
	        this.match(pascalParser.FOR);
	        this.state = 772;
	        this.identifier();
	        this.state = 773;
	        this.match(pascalParser.ASSIGN);
	        this.state = 774;
	        this.forList();
	        this.state = 775;
	        this.match(pascalParser.DO);
	        this.state = 776;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 778;
	        this.initialValue();
	        this.state = 779;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===35)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 780;
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
	        this.state = 782;
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
	        this.state = 784;
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
	        this.state = 786;
	        this.match(pascalParser.WITH);
	        this.state = 787;
	        this.recordVariableList();
	        this.state = 788;
	        this.match(pascalParser.DO);
	        this.state = 789;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 791;
	        this.variable();
	        this.state = 796;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===46) {
	            this.state = 792;
	            this.match(pascalParser.COMMA);
	            this.state = 793;
	            this.variable();
	            this.state = 798;
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

	EOF() {
	    return this.getToken(pascalParser.EOF, 0);
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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
